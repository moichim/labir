var $f=Object.defineProperty;var _f=(r,e,t)=>e in r?$f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>(_f(r,typeof e!="symbol"?e+"":e,t),t);const Ys="1.2.66",Cf="Jan Jáchim <jachim5@gmail.com>",Ae=r=>typeof r=="string",$n=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},Lc=r=>r==null?"":""+r,kf=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},Pf=/###/g,Dc=r=>r&&r.indexOf("###")>-1?r.replace(Pf,"."):r,Rc=r=>!r||Ae(r),Pn=(r,e,t)=>{const i=Ae(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(Rc(r))return{};const n=Dc(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return Rc(r)?{}:{obj:r,k:Dc(i[s])}},Mc=(r,e,t)=>{const{obj:i,k:s}=Pn(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=Pn(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=Pn(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},Of=(r,e,t,i)=>{const{obj:s,k:n}=Pn(r,e,Object);s[n]=s[n]||[],s[n].push(t)},Xa=(r,e)=>{const{obj:t,k:i}=Pn(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},Af=(r,e,t)=>{const i=Xa(r,t);return i!==void 0?i:Xa(e,t)},Jd=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?Ae(r[i])||r[i]instanceof String||Ae(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):Jd(r[i],e[i],t):r[i]=e[i]);return r},Ns=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Ef={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Lf=r=>Ae(r)?r.replace(/[&<>"'\/]/g,e=>Ef[e]):r;class Df{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Rf=[" ",",","?","!",";"],Mf=new Df(20),Tf=(r,e,t)=>{e=e||"",t=t||"";const i=Rf.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=Mf.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},Gl=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},Ka=r=>r==null?void 0:r.replace("_","-"),If={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Za{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||If,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(Ae(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Za(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Za(this.logger,e)}}var ui=new Za;class Co{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class Tc extends Co{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,f;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):Ae(i)&&n?o.push(...i.split(n)):o.push(i)));const l=Xa(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!Ae(i)?l:Gl((f=(h=this.data)==null?void 0:h[e])==null?void 0:f[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),Mc(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(Ae(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=Xa(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?Jd(l,i,n):l={...l,...i},Mc(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var Qd={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const Ic={},Uc=r=>!Ae(r)&&typeof r!="boolean"&&typeof r!="number";class Ja extends Co{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),kf(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ui.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Tf(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Ae(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:Ae(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,f=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(f){const j=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${j}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${j}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const p=this.resolve(e,t);let g=p==null?void 0:p.res;const S=(p==null?void 0:p.usedKey)||a,_=(p==null?void 0:p.exactUsedKey)||a,O=["[object Number]","[object Function]","[object RegExp]"],P=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,Y=!this.i18nFormat||this.i18nFormat.handleAsObject,A=t.count!==void 0&&!Ae(t.count),L=Ja.hasDefaultValue(t),K=A?this.pluralResolver.getSuffix(h,t.count,t):"",B=t.ordinal&&A?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",se=A&&!t.ordinal&&t.count===0,k=se&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${K}`]||t[`defaultValue${B}`]||t.defaultValue;let D=g;Y&&!g&&L&&(D=k);const M=Uc(D),T=Object.prototype.toString.apply(D);if(Y&&D&&M&&O.indexOf(T)<0&&!(Ae(P)&&Array.isArray(D))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const j=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,D,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(p.res=j,p.usedParams=this.getUsedParamsDetails(t),p):j}if(n){const j=Array.isArray(D),I=j?[]:{},F=j?_:S;for(const R in D)if(Object.prototype.hasOwnProperty.call(D,R)){const Z=`${F}${n}${R}`;L&&!g?I[R]=this.translate(Z,{...t,defaultValue:Uc(k)?k[R]:void 0,joinArrays:!1,ns:o}):I[R]=this.translate(Z,{...t,joinArrays:!1,ns:o}),I[R]===Z&&(I[R]=D[R])}g=I}}else if(Y&&Ae(P)&&Array.isArray(g))g=g.join(P),g&&(g=this.extendTranslation(g,e,t,i));else{let j=!1,I=!1;!this.isValidLookup(g)&&L&&(j=!0,g=k),this.isValidLookup(g)||(I=!0,g=a);const R=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:g,Z=L&&k!==g&&this.options.updateMissing;if(I||j||Z){if(this.logger.log(Z?"updateKey":"missingKey",h,l,a,Z?k:g),n){const fe=this.resolve(a,{...t,keySeparator:!1});fe&&fe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let he=[];const C=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&C&&C[0])for(let fe=0;fe<C.length;fe++)he.push(C[fe]);else this.options.saveMissingTo==="all"?he=this.languageUtils.toResolveHierarchy(t.lng||this.language):he.push(t.lng||this.language);const G=(fe,ae,Le)=>{var at;const Xe=L&&Le!==g?Le:R;this.options.missingKeyHandler?this.options.missingKeyHandler(fe,l,ae,Xe,Z,t):(at=this.backendConnector)!=null&&at.saveMissing&&this.backendConnector.saveMissing(fe,l,ae,Xe,Z,t),this.emit("missingKey",fe,l,ae,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?he.forEach(fe=>{const ae=this.pluralResolver.getSuffixes(fe,t);se&&t[`defaultValue${this.options.pluralSeparator}zero`]&&ae.indexOf(`${this.options.pluralSeparator}zero`)<0&&ae.push(`${this.options.pluralSeparator}zero`),ae.forEach(Le=>{G([fe],a+Le,t[`defaultValue${Le}`]||k)})}):G(he,a,k))}g=this.extendTranslation(g,e,t,p,i),I&&g===a&&this.options.appendNamespaceToMissingKey&&(g=`${l}:${a}`),(I||j)&&this.options.parseMissingKeyHandler&&(g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,j?g:void 0))}return s?(p.res=g,p.usedParams=this.getUsedParamsDetails(t),p):g}extendTranslation(e,t,i,s,n){var h,f;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const p=Ae(e)&&(((f=i==null?void 0:i.interpolation)==null?void 0:f.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(p){const _=e.match(this.interpolator.nestingRegexp);g=_&&_.length}let S=i.replace&&!Ae(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),e=this.interpolator.interpolate(e,S,i.lng||this.language||s.usedLng,i),p){const _=e.match(this.interpolator.nestingRegexp),O=_&&_.length;g<O&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var _=arguments.length,O=new Array(_),P=0;P<_;P++)O[P]=arguments[P];return(n==null?void 0:n[0])===O[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${t[0]}`),null):a.translate(...O,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=Ae(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=Qd.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return Ae(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),f=h.key;s=f;let p=h.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const g=t.count!==void 0&&!Ae(t.count),S=g&&!t.ordinal&&t.count===0,_=t.context!==void 0&&(Ae(t.context)||typeof t.context=="number")&&t.context!=="",O=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);p.forEach(P=>{var Y,A;this.isValidLookup(i)||(o=P,!Ic[`${O[0]}-${P}`]&&((Y=this.utils)!=null&&Y.hasLoadedNamespace)&&!((A=this.utils)!=null&&A.hasLoadedNamespace(o))&&(Ic[`${O[0]}-${P}`]=!0,this.logger.warn(`key "${s}" for languages "${O.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),O.forEach(L=>{var se;if(this.isValidLookup(i))return;a=L;const K=[f];if((se=this.i18nFormat)!=null&&se.addLookupKeys)this.i18nFormat.addLookupKeys(K,f,L,P,t);else{let k;g&&(k=this.pluralResolver.getSuffix(L,t.count,t));const D=`${this.options.pluralSeparator}zero`,M=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(g&&(K.push(f+k),t.ordinal&&k.indexOf(M)===0&&K.push(f+k.replace(M,this.options.pluralSeparator)),S&&K.push(f+D)),_){const T=`${f}${this.options.contextSeparator}${t.context}`;K.push(T),g&&(K.push(T+k),t.ordinal&&k.indexOf(M)===0&&K.push(T+k.replace(M,this.options.pluralSeparator)),S&&K.push(T+D))}}let B;for(;B=K.pop();)this.isValidLookup(i)||(n=B,i=this.getResource(L,P,B,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Ae(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class zc{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ui.create("languageUtils")}getScriptPartFromCode(e){if(e=Ka(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ka(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Ae(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Ae(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Ae(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):Ae(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const Fc={zero:0,one:1,two:2,few:3,many:4,other:5},jc={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Uf{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=ui.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Ka(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),jc;if(!e.match(/-|_/))return jc;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>Fc[s]-Fc[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Nc=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=Af(r,e,t);return!n&&s&&Ae(t)&&(n=Gl(r,t,i),n===void 0&&(n=Gl(e,t,i))),n},Ll=r=>r.replace(/\$/g,"$$$$");class zf{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ui.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:f,unescapePrefix:p,nestingPrefix:g,nestingPrefixEscaped:S,nestingSuffix:_,nestingSuffixEscaped:O,nestingOptionsSeparator:P,maxReplaces:Y,alwaysFormat:A}=e.interpolation;this.escape=t!==void 0?t:Lf,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?Ns(n):a||"{{",this.suffix=o?Ns(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=f?"":p||"-",this.unescapeSuffix=this.unescapePrefix?"":f||"",this.nestingPrefix=g?Ns(g):S||Ns("$t("),this.nestingSuffix=_?Ns(_):O||Ns(")"),this.nestingOptionsSeparator=P||",",this.maxReplaces=Y||1e3,this.alwaysFormat=A!==void 0?A:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var S;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=_=>{if(_.indexOf(this.formatSeparator)<0){const A=Nc(t,l,_,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(A,void 0,i,{...s,...t,interpolationkey:_}):A}const O=_.split(this.formatSeparator),P=O.shift().trim(),Y=O.join(this.formatSeparator).trim();return this.format(Nc(t,l,P,this.options.keySeparator,this.options.ignoreJSONStructure),Y,i,{...s,...t,interpolationkey:P})};this.resetRegExp();const f=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,p=((S=s==null?void 0:s.interpolation)==null?void 0:S.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:_=>Ll(_)},{regex:this.regexp,safeValue:_=>this.escapeValue?Ll(this.escape(_)):Ll(_)}].forEach(_=>{for(o=0;n=_.regex.exec(e);){const O=n[1].trim();if(a=h(O),a===void 0)if(typeof f=="function"){const Y=f(e,n,s);a=Ae(Y)?Y:""}else if(s&&Object.prototype.hasOwnProperty.call(s,O))a="";else if(p){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${O} for interpolating ${e}`),a="";else!Ae(a)&&!this.useRawValueToEscape&&(a=Lc(a));const P=_.safeValue(a);if(e=e.replace(n[0],P),p?(_.regex.lastIndex+=a.length,_.regex.lastIndex-=n[0].length):_.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const f=this.nestingOptionsSeparator;if(l.indexOf(f)<0)return l;const p=l.split(new RegExp(`${f}[ ]*{`));let g=`{${p[1]}`;l=p[0],g=this.interpolate(g,a);const S=g.match(/'/g),_=g.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!_||_.length%2!==0)&&(g=g.replace(/'/g,'"'));try{a=JSON.parse(g),h&&(a={...h,...a})}catch(O){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,O),`${l}${f}${g}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!Ae(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const f=s[1].split(this.formatSeparator).map(p=>p.trim());s[1]=f.shift(),l=f,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!Ae(n))return n;Ae(n)||(n=Lc(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((f,p)=>this.format(f,p,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const Ff=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),f=o.trim();t[f]||(t[f]=h),h==="false"&&(t[f]=!1),h==="true"&&(t[f]=!0),isNaN(h)||(t[f]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},Hs=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(Ka(i),s),e[a]=o),o(t)}};class jf{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ui.create("formatter"),this.options=e,this.formats={number:Hs((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:Hs((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:Hs((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:Hs((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:Hs((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Hs(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var p;const{formatName:h,formatOptions:f}=Ff(l);if(this.formats[h]){let g=o;try{const S=((p=s==null?void 0:s.formatParams)==null?void 0:p[s.interpolationkey])||{},_=S.locale||S.lng||s.locale||s.lng||i;g=this.formats[h](o,_,{...f,...s,...S})}catch(S){this.logger.warn(S)}return g}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const Nf=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Hf extends Co{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=ui.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let f=!0;t.forEach(p=>{const g=`${h}|${p}`;!i.reload&&this.store.hasResourceBundle(h,p)?this.state[g]=2:this.state[g]<0||(this.state[g]===1?a[g]===void 0&&(a[g]=!0):(this.state[g]=1,f=!1,a[g]===void 0&&(a[g]=!0),n[g]===void 0&&(n[g]=!0),l[p]===void 0&&(l[p]=!0)))}),f||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{Of(l.loaded,[n],a),Nf(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const f=l.loaded[h];f.length&&f.forEach(p=>{o[h][p]===void 0&&(o[h][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(h&&f&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,f)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(f=>o(null,f)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Ae(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Ae(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,f,p,g;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((p=(f=this.services)==null?void 0:f.utils)!=null&&p.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((g=this.backend)!=null&&g.create){const S={...a,isUpdate:n},_=this.backend.create.bind(this.backend);if(_.length<6)try{let O;_.length===5?O=_(e,t,i,s,S):O=_(e,t,i,s),O&&typeof O.then=="function"?O.then(P=>o(null,P)).catch(o):o(null,O)}catch(O){o(O)}else _(e,t,i,s,o,S)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const Hc=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),Ae(r[1])&&(e.defaultValue=r[1]),Ae(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Wc=r=>{var e,t;return Ae(r.ns)&&(r.ns=[r.ns]),Ae(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Ae(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},Ta=()=>{},Wf=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Dn extends Co{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Wc(e),this.services={},this.logger=ui,this.modules={external:[]},Wf(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(Ae(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=Hc();this.options={...s,...this.options,...Wc(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=f=>f?typeof f=="function"?new f:f:null;if(!this.options.isClone){this.modules.logger?ui.init(n(this.modules.logger),this.options):ui.init(null,this.options);let f;this.modules.formatter?f=this.modules.formatter:f=jf;const p=new zc(this.options);this.store=new Tc(this.options.resources,this.options);const g=this.services;g.logger=ui,g.resourceStore=this.store,g.languageUtils=p,g.pluralResolver=new Uf(p,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(g.formatter=n(f),g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new zf(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new Hf(n(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",function(S){for(var _=arguments.length,O=new Array(_>1?_-1:0),P=1;P<_;P++)O[P-1]=arguments[P];e.emit(S,...O)}),this.modules.languageDetector&&(g.languageDetector=n(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=n(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new Ja(this.services,this.options),this.translator.on("*",function(S){for(var _=arguments.length,O=new Array(_>1?_-1:0),P=1;P<_;P++)O[P-1]=arguments[P];e.emit(S,...O)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Ta),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(f=>{this[f]=function(){return e.store[f](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(f=>{this[f]=function(){return e.store[f](...arguments),e}});const l=$n(),h=()=>{const f=(p,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(g),i(p,g)};if(this.languages&&!this.isInitialized)return f(null,this.t.bind(this));this.changeLanguage(this.options.lng,f)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ta;const s=Ae(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(p=>{p!=="cimode"&&o.indexOf(p)<0&&o.push(p)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(f=>l(f)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=$n();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Ta),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Qd.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=$n();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var f,p;!e&&!l&&this.services.languageDetector&&(l=[]);const h=Ae(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(p=(f=this.services.languageDetector)==null?void 0:f.cacheUserLanguage)==null||p.call(f,h)),this.loadResources(h,g=>{a(g,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,f=new Array(h>2?h-2:0),p=2;p<h;p++)f[p-2]=arguments[p];l=s.options.overloadTranslationOptionHandler([a,o].concat(f))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const g=s.options.keySeparator||".";let S;return l.keyPrefix&&Array.isArray(a)?S=a.map(_=>`${l.keyPrefix}${g}${_}`):S=l.keyPrefix?`${l.keyPrefix}${g}${a}`:a,s.t(S,l)};return Ae(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=$n();return this.options.ns?(Ae(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=$n();Ae(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new zc(Hc());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Dn(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ta;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Dn(s);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const o=Object.keys(this.store.data).reduce((l,h)=>(l[h]={...this.store.data[h]},Object.keys(l[h]).reduce((f,p)=>(f[p]={...l[h][p]},f),{})),{});n.store=new Tc(o,s),n.services.resourceStore=n.store}return n.translator=new Ja(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),f=1;f<l;f++)h[f-1]=arguments[f];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const bt=Dn.createInstance();bt.createInstance=Dn.createInstance;bt.createInstance;bt.dir;bt.init;bt.loadResources;bt.reloadResources;bt.use;bt.changeLanguage;bt.getFixedT;const b=bt.t;bt.exists;bt.setDefaultNamespace;bt.hasLoadedNamespace;bt.loadNamespaces;bt.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=globalThis,Qa=On.trustedTypes,Bc=Qa?Qa.createPolicy("lit-html",{createHTML:r=>r}):void 0,fh="$lit$",Di=`lit$${Math.random().toFixed(9).slice(2)}$`,gh="?"+Di,Bf=`<${gh}>`,Cs=document,Rn=()=>Cs.createComment(""),Mn=r=>r===null||typeof r!="object"&&typeof r!="function",mh=Array.isArray,eu=r=>mh(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Dl=`[ 	
\f\r]`,_n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gc=/-->/g,Vc=/>/g,bs=RegExp(`>|${Dl}(?:([^\\s"'>=/]+)(${Dl}*=${Dl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yc=/'/g,qc=/"/g,tu=/^(?:script|style|textarea|title)$/i,Gf=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),d=Gf(1),rs=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Xc=new WeakMap,$s=Cs.createTreeWalker(Cs,129);function ru(r,e){if(!mh(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bc!==void 0?Bc.createHTML(e):e}const iu=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",a=_n;for(let o=0;o<t;o++){const l=r[o];let h,f,p=-1,g=0;for(;g<l.length&&(a.lastIndex=g,f=a.exec(l),f!==null);)g=a.lastIndex,a===_n?f[1]==="!--"?a=Gc:f[1]!==void 0?a=Vc:f[2]!==void 0?(tu.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=bs):f[3]!==void 0&&(a=bs):a===bs?f[0]===">"?(a=s??_n,p=-1):f[1]===void 0?p=-2:(p=a.lastIndex-f[2].length,h=f[1],a=f[3]===void 0?bs:f[3]==='"'?qc:Yc):a===qc||a===Yc?a=bs:a===Gc||a===Vc?a=_n:(a=bs,s=void 0);const S=a===bs&&r[o+1].startsWith("/>")?" ":"";n+=a===_n?l+Bf:p>=0?(i.push(h),l.slice(0,p)+fh+l.slice(p)+Di+S):l+Di+(p===-2?o:S)}return[ru(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Vl=class su{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,f]=iu(e,t);if(this.el=su.createElement(h,i),$s.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=$s.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(fh)){const g=f[a++],S=s.getAttribute(p).split(Di),_=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:_[2],strings:S,ctor:_[1]==="."?ou:_[1]==="?"?lu:_[1]==="@"?hu:Kn}),s.removeAttribute(p)}else p.startsWith(Di)&&(l.push({type:6,index:n}),s.removeAttribute(p));if(tu.test(s.tagName)){const p=s.textContent.split(Di),g=p.length-1;if(g>0){s.textContent=Qa?Qa.emptyScript:"";for(let S=0;S<g;S++)s.append(p[S],Rn()),$s.nextNode(),l.push({type:2,index:++n});s.append(p[g],Rn())}}}else if(s.nodeType===8)if(s.data===gh)l.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(Di,p+1))!==-1;)l.push({type:7,index:n}),p+=Di.length-1}n++}}static createElement(e,t){const i=Cs.createElement("template");return i.innerHTML=e,i}};function ks(r,e,t=r,i){var a,o;if(e===rs)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Mn(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=ks(r,s._$AS(r,e.values),s,i)),e}let nu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Cs).importNode(t,!0);$s.currentNode=s;let n=$s.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new ko(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new cu(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=$s.nextNode(),a++)}return $s.currentNode=Cs,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ko=class au{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ks(this,e,t),Mn(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==rs&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):eu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&Mn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Cs.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Vl.createElement(ru(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new nu(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Xc.get(e.strings);return t===void 0&&Xc.set(e.strings,t=new Vl(e)),t}k(e){mh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new au(this.O(Rn()),this.O(Rn()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class Kn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=ks(this,e,t,0),a=!Mn(e)||e!==this._$AH&&e!==rs,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=ks(this,o[i+l],t,l),h===rs&&(h=this._$AH[l]),a||(a=!Mn(h)||h!==this._$AH[l]),h===$?e=$:e!==$&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ou extends Kn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class lu extends Kn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}let hu=class extends Kn{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=ks(this,e,t,0)??$)===rs)return;const i=this._$AH,s=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},cu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ks(this,e)}};const Vf={M:fh,P:Di,A:gh,C:1,L:iu,R:nu,D:eu,V:ks,I:ko,H:Kn,N:lu,U:hu,B:ou,F:cu},Rl=On.litHtmlPolyfillSupport;Rl==null||Rl(Vl,ko),(On.litHtmlVersions??(On.litHtmlVersions=[])).push("3.2.1");const du=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new ko(e.insertBefore(Rn(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Yf}=Vf,Kc=(r,e)=>(r==null?void 0:r._$litType$)!==void 0,qf=r=>{var e;return((e=r==null?void 0:r._$litType$)==null?void 0:e.h)!=null},Xf=r=>r.strings===void 0,Zc=()=>document.createComment(""),Jc=(r,e,t)=>{var n;const i=r._$AA.parentNode,s=r._$AB;if(t===void 0){const a=i.insertBefore(Zc(),s),o=i.insertBefore(Zc(),s);t=new Yf(a,o,r,r.options)}else{const a=t._$AB.nextSibling,o=t._$AM,l=o!==r;if(l){let h;(n=t._$AQ)==null||n.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==o._$AU&&t._$AP(h)}if(a!==s||l){let h=t._$AA;for(;h!==a;){const f=h.nextSibling;i.insertBefore(h,s),h=f}}}return t},Kf={},Qc=(r,e=Kf)=>r._$AH=e,ed=r=>r._$AH,Zf=r=>{r._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zn=r=>(...e)=>({_$litDirective$:r,values:e});let Po=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),An(s,e);return!0},eo=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},uu=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),eg(e)}};function Jf(r){this._$AN!==void 0?(eo(this),this._$AM=r,uu(this)):this._$AM=r}function Qf(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)An(i[n],!1),eo(i[n]);else i!=null&&(An(i,!1),eo(i));else An(this,r)}const eg=r=>{r.type==Li.CHILD&&(r._$AP??(r._$AP=Qf),r._$AQ??(r._$AQ=Jf))};let tg=class extends Po{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),uu(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(An(this,e),eo(this))}setValue(e){if(Xf(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},td=null,pu=()=>{};new Promise(r=>{pu=r});const rg={type:"3rdParty",init(r){ig(r)}},ig=r=>{td=r,pu(td)},rd=new Map,sg=()=>{rd.forEach((r,e)=>{(e.isConnected===!1||ng(e)===!1)&&rd.delete(e)})};setInterval(sg,1e4);const ng=r=>{const e=r.part;if(e.type===Li.ATTRIBUTE)return e.element.isConnected;if(e.type===Li.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===Li.PROPERTY||e.type===Li.BOOLEAN_ATTRIBUTE||e.type===Li.EVENT||e.type===Li.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:ag,forEach:og}=[];function lg(r){return og.call(ag.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const id=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,hg=function(r,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!id.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!id.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},sd={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=hg(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var cg={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return sd.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&sd.create(t,r,i,s,n)}},dg={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let Cn=null;const nd=()=>{if(Cn!==null)return Cn;try{Cn=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{Cn=!1}return Cn};var ug={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&nd())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&nd()&&window.localStorage.setItem(t,r)}};let kn=null;const ad=()=>{if(kn!==null)return kn;try{kn=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{kn=!1}return kn};var pg={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&ad())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&ad()&&window.sessionStorage.setItem(t,r)}},fg={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},gg={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},mg={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},vg={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let fu=!1;try{document.cookie,fu=!0}catch{}const gu=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];fu||gu.splice(1,1);const yg=()=>({order:gu,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class mu{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=lg(t,this.options||{},yg()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(cg),this.addDetector(dg),this.addDetector(ug),this.addDetector(pg),this.addDetector(fg),this.addDetector(gg),this.addDetector(mg),this.addDetector(vg)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}mu.type="languageDetector";const bg={layout_simple:"Simple layout",layout_advanced:"Evaluation layout",layout_nogui:"No GUI",layout_lesson:"Lesson layout",share:"Share",fileloadingerror:"File loading error",embedhint:"To embed this block in another website, use the following code:",embedlibrary:"Insert the library - once in HTML head",embedcomponent:"Use the following code anywhere in HTML body",copy:"Copy",loading:"Loading",config:"Settings",temperature:"Temperature",file:"File",upload:"Upload",uploadafile:"Upload a file",selectfile:"Select a file",addfiles:"Add file(s)",clear:"Clear",dragorselectfile:"Drag and drop an LRC file or select it from disk",detail:"Detail",showeverything:"Show everything",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automatic range",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visual file name",visiblefileurl:"Visual file URL",visiblefiledownload:"Visual file download",togglevisibleimage:"Switch IR / VIS image",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",exportimagewidth:"Exported image width",exportimagefontsize:"Exported image font size",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",analysissync:"Synchronise analyses",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser"},wg={loading:"Chargement",config:"Einstellungen",temperature:"Temperature",upload:"Téléverser",uploadafile:"Téléverser un fichier",selectfile:"Sélectionner un fichier",addfiles:"Ajouter un/des fichier(s)",clear:"Effacer",dragorselectfile:"Glissez-déposez un fichier LRC ou sélectionnez-le depuis le disque",share:"Partager",fileloadingerror:"Erreur de chargement du fichier",embedhint:"Pour intégrer ce bloc dans un autre site Web, utilisez le code suivant :",embedlibrary:"Insérez la bibliothèque – une seule fois dans l'en-tête HTML",embedcomponent:"Utilisez le code suivant n'importe où dans le corps HTML",copy:"Copier",file:"fichier",detail:"Détail",showeverything:"Montrer tout",analysissync:"Synchroniser les analyses",layout_simple:"Disposition simple",layout_advanced:"Disposition d'analyse",layout_nogui:"Pas d'interface graphique",layout_lesson:"Disposition de leçon",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visuel",visiblefileurl:"URL de l'image visuel",visiblefiledownload:"Télécharger l'image visuel",togglevisibleimage:"Commuter l'image IR / VIS",time:"Temps",duration:"Durée",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Genre du fichier",type:"Genre",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",exportimagewidth:"Largeur de l'image exportée",exportimagefontsize:"Taille de la police de l'image exportée",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous afficher aussi",youmayalsoadd:"Vous pouvez afficher aussi",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Lecture",pause:"Pause",stop:"Arrêter",date:"Date",frame:"Image",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes lisses",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieure",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieure",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format CSV",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants"},xg={loading:"Načítám",config:"Nastavení",layout_simple:"Jednoduché rozvržení",layout_advanced:"Analytické rozvržení",layout_nogui:"Bez GUI",layout_lesson:"Rozvržení lekce",share:"Sdílet",fileloadingerror:"Chyba při načítání souboru",embedhint:"Chcete-li vložit tento blok na jinou webovou stránku, použijte následující kód:",embedlibrary:"Vložte knihovnu – jednou v HTML hlavičce",embedcomponent:"Použijte následující kód kdekoli v HTML těle",copy:"Kopírovat",temperature:"Teplota",upload:"Nahrát",uploadafile:"Nahrát soubor",selectfile:"Vybrat soubor",addfiles:"Přidat soubor(y)",clear:"Smazat",dragorselectfile:"Přetáhněte LRC soubor nebo jej vyberte z disku",file:"soubor",detail:"Detail",showeverything:"Zobrazit vše",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",togglevisibleimage:"Přepnout IR / VIS obraz",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",exportimagewidth:"Šířka exportovaných obrázků",exportimagefontsize:"Velikost písma v exportovaných obrázcích",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",analysissync:"Synchronizovat analýzy",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek"},Sg={loading:"Llwytho",config:"Gosodiadau",temperature:"Tymheredd",upload:"Llwytho i fyny",uploadafile:"Llwytho ffeil i fyny",selectfile:"Dewis ffeil",addfiles:"Ychwanegu ffeil(iau)",clear:"Clirio",dragorselectfile:"Llusgwch ffeil LRC neu dewiswch hi o'r ddisg",share:"Rhannu",fileloadingerror:"Gwall wrth lwytho'r ffeil",embedhint:"I fewnosod y bloc hwn mewn gwefan arall, defnyddiwch y cod canlynol:",embedlibrary:"Mewnosodwch y llyfrgell – unwaith yn pennyn HTML",embedcomponent:"Defnyddiwch y cod canlynol yn unrhyw le yn y corff HTML",copy:"Copïo",analysissync:"Cydamseru dadansoddiadau",file:"ffeil",detail:"Manylder",showeverything:"Dangos popeth",layout_simple:"Cynllun syml",layout_advanced:"Cynllun dadansoddi",layout_nogui:"Dim GUI",layout_lesson:"Cynllun gwers",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r delwedd isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch yr ystod thermol yn awtomatig neu cyflewch yr ystod i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangos thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weledol",visiblefileurl:"URL ffeil weledol",visiblefiledownload:"Lawrlwythwch y ffeil weledol",togglevisibleimage:"Newid delwedd IR/VIS",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",exportimagewidth:"Lled delwedd wedi'i hallforio",exportimagefontsize:"Maint ffont delwedd wedi'i hallforio",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"wedi'u cetegoreiddio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau arddangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"yn ôl dydd",byhours:"yn ôl awr",byweeks:"yn ôl wythnos",bymonths:"yn ôl mis",byyears:"yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y delwedd isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell"},$g={loading:"Loading",config:"Paramètres",layout_simple:"Einfaches Layout",layout_advanced:"Analyse-Layout",layout_nogui:"Kein GUI",layout_lesson:"Lektions-Layout",share:"Teilen",fileloadingerror:"Fehler beim Laden der Datei",embedhint:"Um diesen Block in eine andere Website einzubetten, verwenden Sie den folgenden Code:",embedlibrary:"Bibliothek einfügen – einmal im HTML-Head",embedcomponent:"Verwenden Sie den folgenden Code überall im HTML-Body",copy:"Kopieren",temperature:"Temperatur",upload:"Hochladen",uploadafile:"Datei hochladen",selectfile:"Datei auswählen",addfiles:"Datei(en) hinzufügen",clear:"Löschen",dragorselectfile:"Ziehen Sie eine LRC-Datei hierher oder wählen Sie sie von der Festplatte aus",analysissync:"Analysen synchronisieren",file:"Datei",detail:"Detail",showeverything:"Alles anzeigen",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",togglevisibleimage:"IR/VIS-Bild umschalten",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",exportimagewidth:"Exportierte Bildbreite",exportimagefontsize:"Exportierte Bildschriftgröße",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner"};bt.use(rg).use(mu).init({fallbackLng:"en",resources:{cs:{translation:xg},cy:{translation:Sg},de:{translation:$g},en:{translation:bg},fr:{translation:wg}}});window.i18next=bt;const Ml=window.matchMedia("(prefers-color-scheme: dark)"),vu="thermal-dark-mode",od=()=>{document.body.classList.add(vu)},_g=()=>{document.body.classList.remove(vu)},Cg=()=>{Ml.matches&&od();const r=e=>{e.matches?od():_g()};Ml.addEventListener("change",r),Ml.addListener(r)},kg=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ba=globalThis,vh=Ba.ShadowRoot&&(Ba.ShadyCSS===void 0||Ba.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yh=Symbol(),ld=new WeakMap;let yu=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==yh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(vh&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ld.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ld.set(t,e))}return e}toString(){return this.cssText}};const Pg=r=>new yu(typeof r=="string"?r:r+"",void 0,yh),ne=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new yu(t,r,yh)},Og=(r,e)=>{if(vh)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Ba.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},hd=vh?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Pg(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ag,defineProperty:Eg,getOwnPropertyDescriptor:Lg,getOwnPropertyNames:Dg,getOwnPropertySymbols:Rg,getPrototypeOf:Mg}=Object,es=globalThis,cd=es.trustedTypes,Tg=cd?cd.emptyScript:"",Tl=es.reactiveElementPolyfillSupport,En=(r,e)=>r,to={toAttribute(r,e){switch(e){case Boolean:r=r?Tg:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},bh=(r,e)=>!Ag(r,e),dd={attribute:!0,type:String,converter:to,reflect:!1,hasChanged:bh};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),es.litPropertyMetadata??(es.litPropertyMetadata=new WeakMap);let Vs=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=dd){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Eg(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Lg(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??dd}static _$Ei(){if(this.hasOwnProperty(En("elementProperties")))return;const e=Mg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(En("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(En("properties"))){const t=this.properties,i=[...Dg(t),...Rg(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(hd(s))}else e!==void 0&&t.push(hd(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Og(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:to).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:to;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??bh)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Vs.elementStyles=[],Vs.shadowRootOptions={mode:"open"},Vs[En("elementProperties")]=new Map,Vs[En("finalized")]=new Map,Tl==null||Tl({ReactiveElement:Vs}),(es.reactiveElementVersions??(es.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mr=class extends Vs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=du(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return rs}};var Zd;mr._$litElement$=!0,mr.finalized=!0,(Zd=globalThis.litElementHydrateSupport)==null||Zd.call(globalThis,{LitElement:mr});const Il=globalThis.litElementPolyfillSupport;Il==null||Il({LitElement:mr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ig={attribute:!0,type:String,converter:to,reflect:!1,hasChanged:bh},Ug=(r=Ig,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function c(r){return(e,t)=>typeof t=="object"?Ug(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(r){return c({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zg=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function br(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return zg(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Fg={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ia(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Ua(r){return r.toString().indexOf("`")===-1}Ua(r=>r``)||Ua(r=>r`\0`)||Ua(r=>r`\n`)||Ua(r=>r`\u0000`);Ia``&&Ia`\0`&&Ia`\n`&&Ia`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let jg="google#safe";function Ng(){if(typeof window<"u")return window.trustedTypes}function bu(){var r;return(r=Ng())!==null&&r!==void 0?r:null}let za;function Hg(){var r,e;if(za===void 0)try{za=(e=(r=bu())===null||r===void 0?void 0:r.createPolicy(jg,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{za=null}return za}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class wu{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function ud(r){var e;const t=r,i=(e=Hg())===null||e===void 0?void 0:e.createScriptURL(t);return i??new wu(t,Fg)}function Wg(r){var e;if(!((e=bu())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof wu)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function xu(r,...e){if(e.length===0)return ud(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return ud(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Bg(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Gg(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=Bg(e||window);t&&r.setAttribute("nonce",t)}function Su(r,e,t){r.src=Wg(e),Gg(r)}/**
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
 */const Vg=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Su(t,xu`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function $u(r={}){await Vg;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function pd(r){if(await $u(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Yg(r){return await $u(),new google.visualization.ChartWrapper({container:r})}const _u=6048e5,qg=864e5,fd=Symbol.for("constructDateFrom");function is(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&fd in r?r[fd](e):r instanceof Date?new r.constructor(e):new Date(e)}function Tt(r,e){return is(e||r,r)}let Xg={};function Jn(){return Xg}function Mi(r,e){var o,l,h,f;const t=Jn(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((f=(h=t.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??0,s=Tt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function ro(r,e){return Mi(r,{...e,weekStartsOn:1})}function Cu(r,e){const t=Tt(r,e==null?void 0:e.in),i=t.getFullYear(),s=is(t,0);s.setFullYear(i+1,0,4),s.setHours(0,0,0,0);const n=ro(s),a=is(t,0);a.setFullYear(i,0,4),a.setHours(0,0,0,0);const o=ro(a);return t.getTime()>=n.getTime()?i+1:t.getTime()>=o.getTime()?i:i-1}function gd(r){const e=Tt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Kg(r,...e){const t=is.bind(null,e.find(i=>typeof i=="object"));return e.map(t)}function io(r,e){const t=Tt(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function Zg(r,e,t){const[i,s]=Kg(t==null?void 0:t.in,r,e),n=io(i),a=io(s),o=+n-gd(n),l=+a-gd(a);return Math.round((o-l)/qg)}function Jg(r,e){const t=Cu(r,e),i=is(r,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),ro(i)}function Qg(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function ku(r){return!(!Qg(r)&&typeof r!="number"||isNaN(+Tt(r)))}function Pu(r,e){const t=Tt(r,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function so(r,e){const t=Tt(r,e==null?void 0:e.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function no(r,e){const t=Tt(r,e==null?void 0:e.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Ou(r,e){const t=Tt(r,e==null?void 0:e.in),i=t.getFullYear();return t.setFullYear(i+1,0,0),t.setHours(23,59,59,999),t}function wh(r,e){const t=Tt(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Au(r,e){const t=Tt(r,e==null?void 0:e.in);return t.setMinutes(59,59,999),t}function ao(r,e){var o,l;const t=Jn(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=Tt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const em={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Eu=(r,e,t)=>{let i;const s=em[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Ft(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const tm={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},rm={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},im={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},sm={date:Ft({formats:tm,defaultWidth:"full"}),time:Ft({formats:rm,defaultWidth:"full"}),dateTime:Ft({formats:im,defaultWidth:"full"})},nm={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Lu=(r,e,t,i)=>nm[r];function vt(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const am={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},om={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},lm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hm={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},cm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},dm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},um=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Du={ordinalNumber:um,era:vt({values:am,defaultWidth:"wide"}),quarter:vt({values:om,defaultWidth:"wide",argumentCallback:r=>r-1}),month:vt({values:lm,defaultWidth:"wide"}),day:vt({values:hm,defaultWidth:"wide"}),dayPeriod:vt({values:cm,defaultWidth:"wide",formattingValues:dm,defaultFormattingWidth:"wide"})};function yt(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?fm(o,p=>p.test(a)):pm(o,p=>p.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const f=e.slice(a.length);return{value:h,rest:f}}}function pm(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function fm(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Qn(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const gm=/^(\d+)(th|st|nd|rd)?/i,mm=/\d+/i,vm={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ym={any:[/^b/i,/^(a|c)/i]},bm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},wm={any:[/1/i,/2/i,/3/i,/4/i]},xm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Sm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},$m={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},_m={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Cm={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},km={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ru={ordinalNumber:Qn({matchPattern:gm,parsePattern:mm,valueCallback:r=>parseInt(r,10)}),era:yt({matchPatterns:vm,defaultMatchWidth:"wide",parsePatterns:ym,defaultParseWidth:"any"}),quarter:yt({matchPatterns:bm,defaultMatchWidth:"wide",parsePatterns:wm,defaultParseWidth:"any",valueCallback:r=>r+1}),month:yt({matchPatterns:xm,defaultMatchWidth:"wide",parsePatterns:Sm,defaultParseWidth:"any"}),day:yt({matchPatterns:$m,defaultMatchWidth:"wide",parsePatterns:_m,defaultParseWidth:"any"}),dayPeriod:yt({matchPatterns:Cm,defaultMatchWidth:"any",parsePatterns:km,defaultParseWidth:"any"})},Pm={code:"en-US",formatDistance:Eu,formatLong:sm,formatRelative:Lu,localize:Du,match:Ru,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Om(r,e){const t=Tt(r,e==null?void 0:e.in);return Zg(t,wh(t))+1}function Am(r,e){const t=Tt(r,e==null?void 0:e.in),i=+ro(t)-+Jg(t);return Math.round(i/_u)+1}function Mu(r,e){var f,p,g,S;const t=Tt(r,e==null?void 0:e.in),i=t.getFullYear(),s=Jn(),n=(e==null?void 0:e.firstWeekContainsDate)??((p=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??s.firstWeekContainsDate??((S=(g=s.locale)==null?void 0:g.options)==null?void 0:S.firstWeekContainsDate)??1,a=is((e==null?void 0:e.in)||r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Mi(a,e),l=is((e==null?void 0:e.in)||r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=Mi(l,e);return+t>=+o?i+1:+t>=+h?i:i-1}function Em(r,e){var o,l,h,f;const t=Jn(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(h=t.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??1,s=Mu(r,e),n=is((e==null?void 0:e.in)||r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Mi(n,e)}function Lm(r,e){const t=Tt(r,e==null?void 0:e.in),i=+Mi(t,e)-+Em(t,e);return Math.round(i/_u)+1}function Ve(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Ji={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return Ve(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):Ve(t+1,2)},d(r,e){return Ve(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return Ve(r.getHours()%12||12,e.length)},H(r,e){return Ve(r.getHours(),e.length)},m(r,e){return Ve(r.getMinutes(),e.length)},s(r,e){return Ve(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return Ve(s,e.length)}},Ws={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},md={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Ji.y(r,e)},Y:function(r,e,t,i){const s=Mu(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return Ve(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):Ve(n,e.length)},R:function(r,e){const t=Cu(r);return Ve(t,e.length)},u:function(r,e){const t=r.getFullYear();return Ve(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return Ve(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return Ve(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Ji.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return Ve(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=Lm(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):Ve(s,e.length)},I:function(r,e,t){const i=Am(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):Ve(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Ji.d(r,e)},D:function(r,e,t){const i=Om(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):Ve(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return Ve(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return Ve(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return Ve(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=Ws.noon:i===0?s=Ws.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=Ws.evening:i>=12?s=Ws.afternoon:i>=4?s=Ws.morning:s=Ws.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Ji.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Ji.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):Ve(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):Ve(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Ji.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Ji.s(r,e)},S:function(r,e){return Ji.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return yd(i);case"XXXX":case"XX":return ws(i);case"XXXXX":case"XXX":default:return ws(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return yd(i);case"xxxx":case"xx":return ws(i);case"xxxxx":case"xxx":default:return ws(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+vd(i,":");case"OOOO":default:return"GMT"+ws(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+vd(i,":");case"zzzz":default:return"GMT"+ws(i,":")}},t:function(r,e,t){const i=Math.trunc(+r/1e3);return Ve(i,e.length)},T:function(r,e,t){return Ve(+r,e.length)}};function vd(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+Ve(n,2)}function yd(r,e){return r%60===0?(r>0?"-":"+")+Ve(Math.abs(r)/60,2):ws(r,e)}function ws(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Ve(Math.trunc(i/60),2),n=Ve(i%60,2);return t+s+e+n}const bd=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Tu=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Dm=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return bd(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",bd(i,e)).replace("{{time}}",Tu(s,e))},Rm={p:Tu,P:Dm},Mm=/^D+$/,Tm=/^Y+$/,Im=["D","DD","YY","YYYY"];function Um(r){return Mm.test(r)}function zm(r){return Tm.test(r)}function Fm(r,e,t){const i=jm(r,e,t);if(console.warn(i),Im.includes(r))throw new RangeError(i)}function jm(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Nm=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Hm=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Wm=/^'([^]*?)'?$/,Bm=/''/g,Gm=/[a-zA-Z]/;function $e(r,e,t){var f,p,g,S,_,O,P,Y;const i=Jn(),s=(t==null?void 0:t.locale)??i.locale??Pm,n=(t==null?void 0:t.firstWeekContainsDate)??((p=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??i.firstWeekContainsDate??((S=(g=i.locale)==null?void 0:g.options)==null?void 0:S.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((O=(_=t==null?void 0:t.locale)==null?void 0:_.options)==null?void 0:O.weekStartsOn)??i.weekStartsOn??((Y=(P=i.locale)==null?void 0:P.options)==null?void 0:Y.weekStartsOn)??0,o=Tt(r,t==null?void 0:t.in);if(!ku(o))throw new RangeError("Invalid time value");let l=e.match(Hm).map(A=>{const L=A[0];if(L==="p"||L==="P"){const K=Rm[L];return K(A,s.formatLong)}return A}).join("").match(Nm).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const L=A[0];if(L==="'")return{isToken:!1,value:Vm(A)};if(md[L])return{isToken:!0,value:A};if(L.match(Gm))throw new RangeError("Format string contains an unescaped latin alphabet character `"+L+"`");return{isToken:!1,value:A}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(A=>{if(!A.isToken)return A.value;const L=A.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&zm(L)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Um(L))&&Fm(L,e,String(r));const K=md[L[0]];return K(o,L,s.localize,h)}).join("")}function Vm(r){const e=r.match(Wm);return e?e[1].replace(Bm,"'"):r}function Ul(r,e){const t=Tt(r,e==null?void 0:e.in);if(!ku(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=Ve(t.getDate(),2),h=Ve(t.getMonth()+1,2);n=`${Ve(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=Ve(t.getHours(),2),h=Ve(t.getMinutes(),2),f=Ve(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${f}`}return n}function Iu(r,e){const t=Tt(r,e==null?void 0:e.in);return t.setMinutes(0,0,0),t}var Yl;(function(r){r.csv="text/csv",r.tsv="text/tab-separated-values",r.plain="text/plain"})(Yl||(Yl={}));var hn=r=>r,Pr=r=>r,Ln=hn,Oo=hn,Ks=hn,wd=hn,xd=hn,Ym={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:Yl.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},qm=`\r
`,Xm="\uFEFF",ea=r=>Object.assign({},Ym,r);class Km extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class Zm extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class Jm extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Qm extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var ev=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},tv=r=>wd(typeof r=="object"?r.key:r),rv=r=>xd(typeof r=="object"?r.displayLabel:r),iv=(r,...e)=>e.reduce((t,i)=>i(t),r),sv=r=>e=>r.useBom?Oo(Pr(e)+Xm):e,nv=r=>e=>r.showTitle?xh(Oo(Pr(e)+r.title))(Ks("")):e,xh=r=>e=>Oo(Pr(r)+Pr(e)+qm),Uu=r=>(e,t)=>av(r)(Ks(Pr(e)+Pr(t))),av=r=>e=>hn(Pr(e)+r.fieldSeparator),ov=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Zm("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Ks("");for(let s=0;s<e.length;s++){const n=rv(e[s]);i=Uu(r)(i,zu(r,Pr(n)))}return i=Ks(Pr(i).slice(0,-1)),xh(t)(i)},lv=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=Ks("");for(let o=0;o<e.length;o++){const l=tv(e[o]),h=t[n][Pr(l)];a=Uu(r)(a,zu(r,h))}a=Ks(Pr(a).slice(0,-1)),s=xh(s)(a)}return s},hv=r=>+r===r&&(!isFinite(r)||!!(r%1)),cv=(r,e)=>{if(hv(e)){if(r.decimalSeparator==="locale")return Ln(e.toLocaleString());if(r.decimalSeparator)return Ln(e.toString().replace(".",r.decimalSeparator))}return Ln(e.toString())},Ga=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+ev(e,r.quoteCharacter)+r.quoteCharacter),Ln(t)},dv=(r,e)=>{const t=e?"true":"false";return Ln(r.boolDisplay[t])},uv=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?Ga(r,r.replaceUndefinedWith+""):e===null?Ga(r,"null"):Ga(r,""),zu=(r,e)=>{if(typeof e=="number")return cv(r,e);if(typeof e=="string")return Ga(r,e);if(typeof e=="boolean"&&r.boolDisplay)return dv(r,e);if(e===null||typeof e>"u")return uv(r,e);throw new Qm(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Fu=r=>e=>{const t=ea(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=iv(Oo(""),sv(t),nv(t),ov(t,i),lv(t,i,e));if(Pr(s).length<1)throw new Km("Output is empty. Is your data formatted correctly?");return s},pv=r=>e=>{const t=ea(r),i=Pr(e),s=t.useTextFile?"text/plain":t.mediaType;return new Blob([i],{type:`${s};charset=utf8;`})},ju=r=>e=>{if(!window)throw new Jm("Downloading only supported in a browser environment.");const t=pv(r)(e),i=ea(r),s=i.useTextFile?"txt":i.fileExtension,n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},fv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function mv(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var Nu={exports:{}};(function(r){(function(e){var t=L(),i=K(),s=B(),n=se(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:f,toJpeg:p,toBlob:g,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(k,D){return D=D||{},S(D),Promise.resolve(k).then(function(T){return O(T,D.filter,!0)}).then(P).then(Y).then(M).then(function(T){return A(T,D.width||t.width(k),D.height||t.height(k))});function M(T){return D.bgcolor&&(T.style.backgroundColor=D.bgcolor),D.width&&(T.style.width=D.width+"px"),D.height&&(T.style.height=D.height+"px"),D.style&&Object.keys(D.style).forEach(function(j){T.style[j]=D.style[j]}),T}}function h(k,D){return _(k,D||{}).then(function(M){return M.getContext("2d").getImageData(0,0,t.width(k),t.height(k)).data})}function f(k,D){return _(k,D||{}).then(function(M){return M.toDataURL()})}function p(k,D){return D=D||{},_(k,D).then(function(M){return M.toDataURL("image/jpeg",D.quality||1)})}function g(k,D){return _(k,D||{}).then(t.canvasToBlob)}function S(k){typeof k.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=k.imagePlaceholder,typeof k.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=k.cacheBust}function _(k,D){return l(k,D).then(t.makeImage).then(t.delay(100)).then(function(T){var j=M(k);return j.getContext("2d").drawImage(T,0,0),j});function M(T){var j=document.createElement("canvas");if(j.width=D.width||t.width(T),j.height=D.height||t.height(T),D.bgcolor){var I=j.getContext("2d");I.fillStyle=D.bgcolor,I.fillRect(0,0,j.width,j.height)}return j}}function O(k,D,M){if(!M&&D&&!D(k))return Promise.resolve();return Promise.resolve(k).then(T).then(function(F){return j(k,F,D)}).then(function(F){return I(k,F)});function T(F){return F instanceof HTMLCanvasElement?t.makeImage(F.toDataURL()):F.cloneNode(!1)}function j(F,R,Z){var he=F.childNodes;if(he.length===0)return Promise.resolve(R);return C(R,t.asArray(he),Z).then(function(){return R});function C(G,fe,ae){var Le=Promise.resolve();return fe.forEach(function(Xe){Le=Le.then(function(){return O(Xe,ae)}).then(function(at){at&&G.appendChild(at)})}),Le}}function I(F,R){if(!(R instanceof Element))return R;return Promise.resolve().then(Z).then(he).then(C).then(G).then(function(){return R});function Z(){fe(window.getComputedStyle(F),R.style);function fe(ae,Le){ae.cssText?Le.cssText=ae.cssText:Xe(ae,Le);function Xe(at,ct){t.asArray(at).forEach(function(ce){ct.setProperty(ce,at.getPropertyValue(ce),at.getPropertyPriority(ce))})}}}function he(){[":before",":after"].forEach(function(ae){fe(ae)});function fe(ae){var Le=window.getComputedStyle(F,ae),Xe=Le.getPropertyValue("content");if(Xe===""||Xe==="none")return;var at=t.uid();R.className=R.className+" "+at;var ct=document.createElement("style");ct.appendChild(ce(at,ae,Le)),R.appendChild(ct);function ce(ge,Ee,je){var ot="."+ge+":"+Ee,Be=je.cssText?Ki(je):ms(je);return document.createTextNode(ot+"{"+Be+"}");function Ki(lt){var _r=lt.getPropertyValue("content");return lt.cssText+" content: "+_r+";"}function ms(lt){return t.asArray(lt).map(_r).join("; ")+";";function _r(Ai){return Ai+": "+lt.getPropertyValue(Ai)+(lt.getPropertyPriority(Ai)?" !important":"")}}}}}function C(){F instanceof HTMLTextAreaElement&&(R.innerHTML=F.value),F instanceof HTMLInputElement&&R.setAttribute("value",F.value)}function G(){R instanceof SVGElement&&(R.setAttribute("xmlns","http://www.w3.org/2000/svg"),R instanceof SVGRectElement&&["width","height"].forEach(function(fe){var ae=R.getAttribute(fe);ae&&R.style.setProperty(fe,ae)}))}}}function P(k){return s.resolveAll().then(function(D){var M=document.createElement("style");return k.appendChild(M),M.appendChild(document.createTextNode(D)),k})}function Y(k){return n.inlineAll(k).then(function(){return k})}function A(k,D,M){return Promise.resolve(k).then(function(T){return T.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(T)}).then(t.escapeXhtml).then(function(T){return'<foreignObject x="0" y="0" width="100%" height="100%">'+T+"</foreignObject>"}).then(function(T){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+D+'" height="'+M+'">'+T+"</svg>"}).then(function(T){return"data:image/svg+xml;charset=utf-8,"+T})}function L(){return{escape:G,parseExtension:D,mimeType:M,dataAsUrl:C,isDataUrl:T,canvasToBlob:I,resolveUrl:F,getAndEncode:he,uid:R(),delay:fe,asArray:ae,escapeXhtml:Le,makeImage:Z,width:Xe,height:at};function k(){var ce="application/font-woff",ge="image/jpeg";return{woff:ce,woff2:ce,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ge,jpeg:ge,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function D(ce){var ge=/\.([^\.\/]*?)$/g.exec(ce);return ge?ge[1]:""}function M(ce){var ge=D(ce).toLowerCase();return k()[ge]||""}function T(ce){return ce.search(/^(data:)/)!==-1}function j(ce){return new Promise(function(ge){for(var Ee=window.atob(ce.toDataURL().split(",")[1]),je=Ee.length,ot=new Uint8Array(je),Be=0;Be<je;Be++)ot[Be]=Ee.charCodeAt(Be);ge(new Blob([ot],{type:"image/png"}))})}function I(ce){return ce.toBlob?new Promise(function(ge){ce.toBlob(ge)}):j(ce)}function F(ce,ge){var Ee=document.implementation.createHTMLDocument(),je=Ee.createElement("base");Ee.head.appendChild(je);var ot=Ee.createElement("a");return Ee.body.appendChild(ot),je.href=ge,ot.href=ce,ot.href}function R(){var ce=0;return function(){return"u"+ge()+ce++;function ge(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function Z(ce){return new Promise(function(ge,Ee){var je=new Image;je.onload=function(){ge(je)},je.onerror=Ee,je.src=ce})}function he(ce){var ge=3e4;return o.impl.options.cacheBust&&(ce+=(/\?/.test(ce)?"&":"?")+new Date().getTime()),new Promise(function(Ee){var je=new XMLHttpRequest;je.onreadystatechange=Ki,je.ontimeout=ms,je.responseType="blob",je.timeout=ge,je.open("GET",ce,!0),je.send();var ot;if(o.impl.options.imagePlaceholder){var Be=o.impl.options.imagePlaceholder.split(/,/);Be&&Be[1]&&(ot=Be[1])}function Ki(){if(je.readyState===4){if(je.status!==200){ot?Ee(ot):lt("cannot fetch resource: "+ce+", status: "+je.status);return}var _r=new FileReader;_r.onloadend=function(){var Ai=_r.result.split(/,/)[1];Ee(Ai)},_r.readAsDataURL(je.response)}}function ms(){ot?Ee(ot):lt("timeout of "+ge+"ms occured while fetching resource: "+ce)}function lt(_r){console.error(_r),Ee("")}})}function C(ce,ge){return"data:"+ge+";base64,"+ce}function G(ce){return ce.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function fe(ce){return function(ge){return new Promise(function(Ee){setTimeout(function(){Ee(ge)},ce)})}}function ae(ce){for(var ge=[],Ee=ce.length,je=0;je<Ee;je++)ge.push(ce[je]);return ge}function Le(ce){return ce.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Xe(ce){var ge=ct(ce,"border-left-width"),Ee=ct(ce,"border-right-width");return ce.scrollWidth+ge+Ee}function at(ce){var ge=ct(ce,"border-top-width"),Ee=ct(ce,"border-bottom-width");return ce.scrollHeight+ge+Ee}function ct(ce,ge){var Ee=window.getComputedStyle(ce).getPropertyValue(ge);return parseFloat(Ee.replace("px",""))}}function K(){var k=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:j,shouldProcess:D,impl:{readUrls:M,inline:T}};function D(I){return I.search(k)!==-1}function M(I){for(var F=[],R;(R=k.exec(I))!==null;)F.push(R[1]);return F.filter(function(Z){return!t.isDataUrl(Z)})}function T(I,F,R,Z){return Promise.resolve(F).then(function(C){return R?t.resolveUrl(C,R):C}).then(Z||t.getAndEncode).then(function(C){return t.dataAsUrl(C,t.mimeType(F))}).then(function(C){return I.replace(he(F),"$1"+C+"$3")});function he(C){return new RegExp(`(url\\(['"]?)(`+t.escape(C)+`)(['"]?\\))`,"g")}}function j(I,F,R){if(Z())return Promise.resolve(I);return Promise.resolve(I).then(M).then(function(he){var C=Promise.resolve(I);return he.forEach(function(G){C=C.then(function(fe){return T(fe,G,F,R)})}),C});function Z(){return!D(I)}}}function B(){return{resolveAll:k,impl:{readAll:D}};function k(){return D().then(function(M){return Promise.all(M.map(function(T){return T.resolve()}))}).then(function(M){return M.join(`
`)})}function D(){return Promise.resolve(t.asArray(document.styleSheets)).then(T).then(M).then(function(I){return I.map(j)});function M(I){return I.filter(function(F){return F.type===CSSRule.FONT_FACE_RULE}).filter(function(F){return i.shouldProcess(F.style.getPropertyValue("src"))})}function T(I){var F=[];return I.forEach(function(R){try{t.asArray(R.cssRules||[]).forEach(F.push.bind(F))}catch(Z){console.log("Error while reading CSS rules from "+R.href,Z.toString())}}),F}function j(I){return{resolve:function(){var R=(I.parentStyleSheet||{}).href;return i.inlineAll(I.cssText,R)},src:function(){return I.style.getPropertyValue("src")}}}}}function se(){return{inlineAll:D,impl:{newImage:k}};function k(M){return{inline:T};function T(j){return t.isDataUrl(M.src)?Promise.resolve():Promise.resolve(M.src).then(j||t.getAndEncode).then(function(I){return t.dataAsUrl(I,t.mimeType(M.src))}).then(function(I){return new Promise(function(F,R){M.onload=F,M.onerror=R,M.src=I})})}}function D(M){if(!(M instanceof Element))return Promise.resolve(M);return T(M).then(function(){return M instanceof HTMLImageElement?k(M).inline():Promise.all(t.asArray(M.childNodes).map(function(j){return D(j)}))});function T(j){var I=j.style.getPropertyValue("background");return I?i.inlineAll(I).then(function(F){j.style.setProperty("background",F,j.style.getPropertyPriority("background"))}).then(function(){return j}):Promise.resolve(j)}}}})()})(Nu);var vv=Nu.exports;const yv=gv(vv);var ql={exports:{}};const bv={},wv=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),Bs=mv(wv);/**
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
 */(function(r,e){(function(t,i){i(e)})(fv,function(t){var i={},s={exports:{}};(function(X){var re=function(we){return typeof we<"u"&&we.versions!=null&&we.versions.node!=null&&we+""=="[object process]"};X.exports.isNode=re,X.exports.platform=typeof process<"u"&&re(process)?"node":"browser";var ee=X.exports.platform==="node"&&Bs;X.exports.isMainThread=X.exports.platform==="node"?(!ee||ee.isMainThread)&&!process.connected:typeof Window<"u",X.exports.cpus=X.exports.platform==="browser"?self.navigator.hardwareConcurrency:Bs.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function X(we,Qe){var H=this;if(!(this instanceof X))throw new SyntaxError("Constructor must be called with the new operator");if(typeof we!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var ut=[],Ke=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var Ot=function(V,me){ut.push(V),Ke.push(me)};this.then=function(Q,V){return new X(function(me,Oe){var qe=Q?re(Q,me,Oe):me,Gt=V?re(V,me,Oe):Oe;Ot(qe,Gt)},H)};var It=function(V){return H.resolved=!0,H.rejected=!1,H.pending=!1,ut.forEach(function(me){me(V)}),Ot=function(Oe,qe){Oe(V)},It=ie=function(){},H},ie=function(V){return H.resolved=!1,H.rejected=!0,H.pending=!1,Ke.forEach(function(me){me(V)}),Ot=function(Oe,qe){qe(V)},It=ie=function(){},H};this.cancel=function(){return Qe?Qe.cancel():ie(new ee),H},this.timeout=function(Q){if(Qe)Qe.timeout(Q);else{var V=setTimeout(function(){ie(new Me("Promise timed out after "+Q+" ms"))},Q);H.always(function(){clearTimeout(V)})}return H},we(function(Q){It(Q)},function(Q){ie(Q)})}function re(we,Qe,H){return function(ut){try{var Ke=we(ut);Ke&&typeof Ke.then=="function"&&typeof Ke.catch=="function"?Ke.then(Qe,H):Qe(Ke)}catch(Ot){H(Ot)}}}X.prototype.catch=function(we){return this.then(null,we)},X.prototype.always=function(we){return this.then(we,we)},X.prototype.finally=function(we){var Qe=this,H=function(){return new X(function(Ke){return Ke()}).then(we).then(function(){return Qe})};return this.then(H,H)},X.all=function(we){return new X(function(Qe,H){var ut=we.length,Ke=[];ut?we.forEach(function(Ot,It){Ot.then(function(ie){Ke[It]=ie,ut--,ut==0&&Qe(Ke)},function(ie){ut=0,H(ie)})}):Qe(Ke)})},X.defer=function(){var we={};return we.promise=new X(function(Qe,H){we.resolve=Qe,we.reject=H}),we};function ee(we){this.message=we||"promise cancelled",this.stack=new Error().stack}ee.prototype=new Error,ee.prototype.constructor=Error,ee.prototype.name="CancellationError",X.CancellationError=ee;function Me(we){this.message=we||"timeout exceeded",this.stack=new Error().stack}return Me.prototype=new Error,Me.prototype.constructor=Error,Me.prototype.name="TimeoutError",X.TimeoutError=Me,a.Promise=X,a}function h(X,re){(re==null||re>X.length)&&(re=X.length);for(var ee=0,Me=Array(re);ee<re;ee++)Me[ee]=X[ee];return Me}function f(X,re){var ee=typeof Symbol<"u"&&X[Symbol.iterator]||X["@@iterator"];if(!ee){if(Array.isArray(X)||(ee=Y(X))||re){ee&&(X=ee);var Me=0,we=function(){};return{s:we,n:function(){return Me>=X.length?{done:!0}:{done:!1,value:X[Me++]}},e:function(Ke){throw Ke},f:we}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qe,H=!0,ut=!1;return{s:function(){ee=ee.call(X)},n:function(){var Ke=ee.next();return H=Ke.done,Ke},e:function(Ke){ut=!0,Qe=Ke},f:function(){try{H||ee.return==null||ee.return()}finally{if(ut)throw Qe}}}}function p(X,re,ee){return(re=O(re))in X?Object.defineProperty(X,re,{value:ee,enumerable:!0,configurable:!0,writable:!0}):X[re]=ee,X}function g(X,re){var ee=Object.keys(X);if(Object.getOwnPropertySymbols){var Me=Object.getOwnPropertySymbols(X);re&&(Me=Me.filter(function(we){return Object.getOwnPropertyDescriptor(X,we).enumerable})),ee.push.apply(ee,Me)}return ee}function S(X){for(var re=1;re<arguments.length;re++){var ee=arguments[re]!=null?arguments[re]:{};re%2?g(Object(ee),!0).forEach(function(Me){p(X,Me,ee[Me])}):Object.getOwnPropertyDescriptors?Object.defineProperties(X,Object.getOwnPropertyDescriptors(ee)):g(Object(ee)).forEach(function(Me){Object.defineProperty(X,Me,Object.getOwnPropertyDescriptor(ee,Me))})}return X}function _(X,re){if(typeof X!="object"||!X)return X;var ee=X[Symbol.toPrimitive];if(ee!==void 0){var Me=ee.call(X,re||"default");if(typeof Me!="object")return Me;throw new TypeError("@@toPrimitive must return a primitive value.")}return(re==="string"?String:Number)(X)}function O(X){var re=_(X,"string");return typeof re=="symbol"?re:re+""}function P(X){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(re){return typeof re}:function(re){return re&&typeof Symbol=="function"&&re.constructor===Symbol&&re!==Symbol.prototype?"symbol":typeof re},P(X)}function Y(X,re){if(X){if(typeof X=="string")return h(X,re);var ee={}.toString.call(X).slice(8,-1);return ee==="Object"&&X.constructor&&(ee=X.constructor.name),ee==="Map"||ee==="Set"?Array.from(X):ee==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee)?h(X,re):void 0}}var A={exports:{}},L={},K;function B(){return K||(K=1,L.validateOptions=function(re,ee,Me){if(re){var we=re?Object.keys(re):[],Qe=we.find(function(ut){return!ee.includes(ut)});if(Qe)throw new Error('Object "'+Me+'" contains an unknown option "'+Qe+'"');var H=ee.find(function(ut){return Object.prototype[ut]&&!we.includes(ut)});if(H)throw new Error('Object "'+Me+'" contains an inherited option "'+H+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return re}},L.workerOptsNames=["credentials","name","type"],L.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],L.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),L}var se,k;function D(){return k||(k=1,se=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return i.all([o,r]).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),se}var M;function T(){if(M)return A.exports;M=1;var X=l(),re=X.Promise,ee=n,Me=B(),we=Me.validateOptions,Qe=Me.forkOptsNames,H=Me.workerThreadOptsNames,ut=Me.workerOptsNames,Ke="__workerpool-terminate__",Ot="__workerpool-cleanup__";function It(){var xe=Q();if(!xe)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return xe}function ie(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":P(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function Q(){try{return Bs}catch(xe){if(P(xe)==="object"&&xe!==null&&xe.code==="MODULE_NOT_FOUND")return null;throw xe}}function V(){if(ee.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var xe=new Blob([D()],{type:"text/javascript"});return window.URL.createObjectURL(xe)}else return __dirname+"/worker.js"}function me(xe,De){if(De.workerType==="web")return ie(),Oe(xe,De.workerOpts,Worker);if(De.workerType==="thread")return J=It(),qe(xe,J,De);if(De.workerType==="process"||!De.workerType)return Gt(xe,Kt(De),Bs);if(ee.platform==="browser")return ie(),Oe(xe,De.workerOpts,Worker);var J=Q();return J?qe(xe,J,De):Gt(xe,Kt(De),Bs)}function Oe(xe,De,J){we(De,ut,"workerOpts");var Ce=new J(xe,De);return Ce.isBrowserWorker=!0,Ce.on=function(Te,ze){this.addEventListener(Te,function(tt){ze(tt.data)})},Ce.send=function(Te,ze){this.postMessage(Te,ze)},Ce}function qe(xe,De,J){var Ce,Te;we(J==null?void 0:J.workerThreadOpts,H,"workerThreadOpts");var ze=new De.Worker(xe,S({stdout:(Ce=J==null?void 0:J.emitStdStreams)!==null&&Ce!==void 0?Ce:!1,stderr:(Te=J==null?void 0:J.emitStdStreams)!==null&&Te!==void 0?Te:!1},J==null?void 0:J.workerThreadOpts));return ze.isWorkerThread=!0,ze.send=function(tt,Fe){this.postMessage(tt,Fe)},ze.kill=function(){return this.terminate(),!0},ze.disconnect=function(){this.terminate()},J!=null&&J.emitStdStreams&&(ze.stdout.on("data",function(tt){return ze.emit("stdout",tt)}),ze.stderr.on("data",function(tt){return ze.emit("stderr",tt)})),ze}function Gt(xe,De,J){we(De.forkOpts,Qe,"forkOpts");var Ce=J.fork(xe,De.forkArgs,De.forkOpts),Te=Ce.send;return Ce.send=function(ze){return Te.call(Ce,ze)},De.emitStdStreams&&(Ce.stdout.on("data",function(ze){return Ce.emit("stdout",ze)}),Ce.stderr.on("data",function(ze){return Ce.emit("stderr",ze)})),Ce.isChildProcess=!0,Ce}function Kt(xe){xe=xe||{};var De=process.execArgv.join(" "),J=De.indexOf("--inspect")!==-1,Ce=De.indexOf("--debug-brk")!==-1,Te=[];return J&&(Te.push("--inspect="+xe.debugPort),Ce&&Te.push("--debug-brk")),process.execArgv.forEach(function(ze){ze.indexOf("--max-old-space-size")>-1&&Te.push(ze)}),Object.assign({},xe,{forkArgs:xe.forkArgs,forkOpts:Object.assign({},xe.forkOpts,{execArgv:(xe.forkOpts&&xe.forkOpts.execArgv||[]).concat(Te),stdio:xe.emitStdStreams?"pipe":void 0})})}function hr(xe){for(var De=new Error(""),J=Object.keys(xe),Ce=0;Ce<J.length;Ce++)De[J[Ce]]=xe[J[Ce]];return De}function cr(xe,De){if(Object.keys(xe.processing).length===1){var J=Object.values(xe.processing)[0];J.options&&typeof J.options.on=="function"&&J.options.on(De)}}function hi(xe,De){var J=this,Ce=De||{};this.script=xe||V(),this.worker=me(this.script,Ce),this.debugPort=Ce.debugPort,this.forkOpts=Ce.forkOpts,this.forkArgs=Ce.forkArgs,this.workerOpts=Ce.workerOpts,this.workerThreadOpts=Ce.workerThreadOpts,this.workerTerminateTimeout=Ce.workerTerminateTimeout,xe||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Fe){cr(J,{stdout:Fe.toString()})}),this.worker.on("stderr",function(Fe){cr(J,{stderr:Fe.toString()})}),this.worker.on("message",function(Fe){if(!J.terminated)if(typeof Fe=="string"&&Fe==="ready")J.worker.ready=!0,ze();else{var Vt=Fe.id,xt=J.processing[Vt];if(xt!==void 0&&(Fe.isEvent?xt.options&&typeof xt.options.on=="function"&&xt.options.on(Fe.payload):(delete J.processing[Vt],J.terminating===!0&&J.terminate(),Fe.error?xt.resolver.reject(hr(Fe.error)):xt.resolver.resolve(Fe.result))),Fe.method===Ot){var Zt=J.tracking[Fe.id];Zt!==void 0&&(Fe.error?(clearTimeout(Zt.timeoutId),Zt.resolver.reject(hr(Fe.error))):(J.tracking&&clearTimeout(Zt.timeoutId),Zt.resolver.resolve(Zt.result))),delete J.tracking[Vt]}}});function Te(Fe){J.terminated=!0;for(var Vt in J.processing)J.processing[Vt]!==void 0&&J.processing[Vt].resolver.reject(Fe);J.processing=Object.create(null)}function ze(){var Fe=f(J.requestQueue.splice(0)),Vt;try{for(Fe.s();!(Vt=Fe.n()).done;){var xt=Vt.value;J.worker.send(xt.message,xt.transfer)}}catch(Zt){Fe.e(Zt)}finally{Fe.f()}}var tt=this.worker;this.worker.on("error",Te),this.worker.on("exit",function(Fe,Vt){var xt=`Workerpool Worker terminated Unexpectedly
`;xt+="    exitCode: `"+Fe+"`\n",xt+="    signalCode: `"+Vt+"`\n",xt+="    workerpool.script: `"+J.script+"`\n",xt+="    spawnArgs: `"+tt.spawnargs+"`\n",xt+="    spawnfile: `"+tt.spawnfile+"`\n",xt+="    stdout: `"+tt.stdout+"`\n",xt+="    stderr: `"+tt.stderr+"`\n",Te(new Error(xt))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return hi.prototype.methods=function(){return this.exec("methods")},hi.prototype.exec=function(xe,De,J,Ce){J||(J=re.defer());var Te=++this.lastId;this.processing[Te]={id:Te,resolver:J,options:Ce};var ze={message:{id:Te,method:xe,params:De},transfer:Ce&&Ce.transfer};this.terminated?J.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ze.message,ze.transfer):this.requestQueue.push(ze);var tt=this;return J.promise.catch(function(Fe){if(Fe instanceof re.CancellationError||Fe instanceof re.TimeoutError)return tt.tracking[Te]={id:Te,resolver:re.defer()},delete tt.processing[Te],tt.tracking[Te].resolver.promise=tt.tracking[Te].resolver.promise.catch(function(Vt){delete tt.tracking[Te];var xt=tt.terminateAndNotify(!0).then(function(){throw Vt},function(Zt){throw Zt});return xt}),tt.worker.send({id:Te,method:Ot}),tt.tracking[Te].timeoutId=setTimeout(function(){tt.tracking[Te].resolver.reject(Fe)},tt.workerTerminateTimeout),tt.tracking[Te].resolver.promise;throw Fe})},hi.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},hi.prototype.terminate=function(xe,De){var J=this;if(xe){for(var Ce in this.processing)this.processing[Ce]!==void 0&&this.processing[Ce].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var Te=0,ze=Object.values(J.tracking);Te<ze.length;Te++){var tt=ze[Te];clearTimeout(tt.timeoutId),tt.resolver.reject(new Error("Worker Terminating"))}if(J.tracking=Object.create(null),typeof De=="function"&&(this.terminationHandler=De),this.busy())this.terminating=!0;else{var Fe=function(Zt){if(J.terminated=!0,J.cleaning=!1,J.worker!=null&&J.worker.removeAllListeners&&J.worker.removeAllListeners("message"),J.worker=null,J.terminating=!1,J.terminationHandler)J.terminationHandler(Zt,J);else if(Zt)throw Zt};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Fe(new Error("worker already killed!"));return}var Vt=setTimeout(function(){J.worker&&J.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Vt),J.worker&&(J.worker.killed=!0),Fe()}),this.worker.ready?this.worker.send(Ke):this.requestQueue.push({message:Ke}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Fe()}},hi.prototype.terminateAndNotify=function(xe,De){var J=re.defer();return De&&J.promise.timeout(De),this.terminate(xe,function(Ce,Te){Ce?J.reject(Ce):J.resolve(Te)}),J.promise},A.exports=hi,A.exports._tryRequireWorkerThreads=Q,A.exports._setupProcessWorker=Gt,A.exports._setupBrowserWorker=Oe,A.exports._setupWorkerThreadWorker=qe,A.exports.ensureWorkerThreads=It,A.exports}var j,I;function F(){if(I)return j;I=1;var X=65535;j=re;function re(){this.ports=Object.create(null),this.length=0}return re.prototype.nextAvailableStartingAt=function(ee){for(;this.ports[ee]===!0;)ee++;if(ee>=X)throw new Error("WorkerPool debug port limit reached: "+ee+">= "+X);return this.ports[ee]=!0,this.length++,ee},re.prototype.releasePort=function(ee){delete this.ports[ee],this.length--},j}var R,Z;function he(){if(Z)return R;Z=1;var X=l(),re=X.Promise,ee=T(),Me=n,we=F(),Qe=new we;function H(ie,Q){typeof ie=="string"?this.script=ie||null:(this.script=null,Q=ie),this.workers=[],this.tasks=[],Q=Q||{},this.forkArgs=Object.freeze(Q.forkArgs||[]),this.forkOpts=Object.freeze(Q.forkOpts||{}),this.workerOpts=Object.freeze(Q.workerOpts||{}),this.workerThreadOpts=Object.freeze(Q.workerThreadOpts||{}),this.debugPortStart=Q.debugPortStart||43210,this.nodeWorker=Q.nodeWorker,this.workerType=Q.workerType||Q.nodeWorker||"auto",this.maxQueueSize=Q.maxQueueSize||1/0,this.workerTerminateTimeout=Q.workerTerminateTimeout||1e3,this.onCreateWorker=Q.onCreateWorker||function(){return null},this.onTerminateWorker=Q.onTerminateWorker||function(){return null},this.emitStdStreams=Q.emitStdStreams||!1,Q&&"maxWorkers"in Q?(ut(Q.maxWorkers),this.maxWorkers=Q.maxWorkers):this.maxWorkers=Math.max((Me.cpus||4)-1,1),Q&&"minWorkers"in Q&&(Q.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Ke(Q.minWorkers),this.minWorkers=Q.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&ee.ensureWorkerThreads()}H.prototype.exec=function(ie,Q,V){if(Q&&!Array.isArray(Q))throw new TypeError('Array expected as argument "params"');if(typeof ie=="string"){var me=re.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Oe=this.tasks,qe={method:ie,params:Q,resolver:me,timeout:null,options:V};Oe.push(qe);var Gt=me.promise.timeout;return me.promise.timeout=function(hr){return Oe.indexOf(qe)!==-1?(qe.timeout=hr,me.promise):Gt.call(me.promise,hr)},this._next(),me.promise}else{if(typeof ie=="function")return this.exec("run",[String(ie),Q],V);throw new TypeError('Function or string expected as argument "method"')}},H.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var ie=this;return this.exec("methods").then(function(Q){var V={};return Q.forEach(function(me){V[me]=function(){return ie.exec(me,Array.prototype.slice.call(arguments))}}),V})},H.prototype._next=function(){if(this.tasks.length>0){var ie=this._getWorker();if(ie){var Q=this,V=this.tasks.shift();if(V.resolver.promise.pending){var me=ie.exec(V.method,V.params,V.resolver,V.options).then(Q._boundNext).catch(function(){if(ie.terminated)return Q._removeWorker(ie)}).then(function(){Q._next()});typeof V.timeout=="number"&&me.timeout(V.timeout)}else Q._next()}}},H.prototype._getWorker=function(){for(var ie=this.workers,Q=0;Q<ie.length;Q++){var V=ie[Q];if(V.busy()===!1)return V}return ie.length<this.maxWorkers?(V=this._createWorkerHandler(),ie.push(V),V):null},H.prototype._removeWorker=function(ie){var Q=this;return Qe.releasePort(ie.debugPort),this._removeWorkerFromList(ie),this._ensureMinWorkers(),new re(function(V,me){ie.terminate(!1,function(Oe){Q.onTerminateWorker({forkArgs:ie.forkArgs,forkOpts:ie.forkOpts,workerThreadOpts:ie.workerThreadOpts,script:ie.script}),Oe?me(Oe):V(ie)})})},H.prototype._removeWorkerFromList=function(ie){var Q=this.workers.indexOf(ie);Q!==-1&&this.workers.splice(Q,1)},H.prototype.terminate=function(ie,Q){var V=this;this.tasks.forEach(function(Kt){Kt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var me=function(hr){Qe.releasePort(hr.debugPort),this._removeWorkerFromList(hr)},Oe=me.bind(this),qe=[],Gt=this.workers.slice();return Gt.forEach(function(Kt){var hr=Kt.terminateAndNotify(ie,Q).then(Oe).always(function(){V.onTerminateWorker({forkArgs:Kt.forkArgs,forkOpts:Kt.forkOpts,workerThreadOpts:Kt.workerThreadOpts,script:Kt.script})});qe.push(hr)}),re.all(qe)},H.prototype.stats=function(){var ie=this.workers.length,Q=this.workers.filter(function(V){return V.busy()}).length;return{totalWorkers:ie,busyWorkers:Q,idleWorkers:ie-Q,pendingTasks:this.tasks.length,activeTasks:Q}},H.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var ie=this.workers.length;ie<this.minWorkers;ie++)this.workers.push(this._createWorkerHandler())},H.prototype._createWorkerHandler=function(){var ie=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new ee(ie.script||this.script,{forkArgs:ie.forkArgs||this.forkArgs,forkOpts:ie.forkOpts||this.forkOpts,workerOpts:ie.workerOpts||this.workerOpts,workerThreadOpts:ie.workerThreadOpts||this.workerThreadOpts,debugPort:Qe.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function ut(ie){if(!Ot(ie)||!It(ie)||ie<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Ke(ie){if(!Ot(ie)||!It(ie)||ie<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function Ot(ie){return typeof ie=="number"}function It(ie){return Math.round(ie)==ie}return R=H,R}var C={},G,fe;function ae(){if(fe)return G;fe=1;function X(re,ee){this.message=re,this.transfer=ee}return G=X,G}var Le;function Xe(){return Le||(Le=1,function(X){var re=ae(),ee=l().Promise,Me="__workerpool-terminate__",we="__workerpool-cleanup__",Qe=1e3,H={exit:function(){}},ut={addAbortListener:function(me){H.abortListeners.push(me)},emit:H.emit};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")H.on=function(V,me){addEventListener(V,function(Oe){me(Oe.data)})},H.send=function(V,me){me?postMessage(V,me):postMessage(V)};else if(typeof process<"u"){var Ke;try{Ke=Bs}catch(V){if(!(P(V)==="object"&&V!==null&&V.code==="MODULE_NOT_FOUND"))throw V}if(Ke&&Ke.parentPort!==null){var Ot=Ke.parentPort;H.send=Ot.postMessage.bind(Ot),H.on=Ot.on.bind(Ot),H.exit=process.exit.bind(process)}else H.on=process.on.bind(process),H.send=function(V){process.send(V)},H.on("disconnect",function(){process.exit(1)}),H.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function It(V){return Object.getOwnPropertyNames(V).reduce(function(me,Oe){return Object.defineProperty(me,Oe,{value:V[Oe],enumerable:!0})},{})}function ie(V){return V&&typeof V.then=="function"&&typeof V.catch=="function"}H.methods={},H.methods.run=function(me,Oe){var qe=new Function("return ("+me+").apply(this, arguments);");return qe.worker=ut,qe.apply(qe,Oe)},H.methods.methods=function(){return Object.keys(H.methods)},H.terminationHandler=void 0,H.abortListenerTimeout=Qe,H.abortListeners=[],H.terminateAndExit=function(V){var me=function(){H.exit(V)};if(!H.terminationHandler)return me();var Oe=H.terminationHandler(V);return ie(Oe)?(Oe.then(me,me),Oe):(me(),new ee(function(qe,Gt){Gt(new Error("Worker terminating"))}))},H.cleanup=function(V){if(!H.abortListeners.length)return H.send({id:V,method:we,error:It(new Error("Worker terminating"))}),new ee(function(cr){cr()});var me=function(){H.exit()},Oe=function(){H.abortListeners.length||(H.abortListeners=[])},qe=H.abortListeners.map(function(cr){return cr()}),Gt,Kt=new ee(function(cr,hi){Gt=setTimeout(function(){hi(new Error("Timeout occured waiting for abort handler, killing worker"))},H.abortListenerTimeout)}),hr=ee.all(qe).then(function(){clearTimeout(Gt),Oe()},function(){clearTimeout(Gt),me()});return ee.all([hr,Kt]).then(function(){H.send({id:V,method:we,error:null})},function(cr){H.send({id:V,method:we,error:cr?It(cr):null})})};var Q=null;H.on("message",function(V){if(V===Me)return H.terminateAndExit(0);if(V.method===we)return H.cleanup(V.id);try{var me=H.methods[V.method];if(me){Q=V.id;var Oe=me.apply(me,V.params);ie(Oe)?Oe.then(function(qe){qe instanceof re?H.send({id:V.id,result:qe.message,error:null},qe.transfer):H.send({id:V.id,result:qe,error:null}),Q=null}).catch(function(qe){H.send({id:V.id,result:null,error:It(qe)}),Q=null}):(Oe instanceof re?H.send({id:V.id,result:Oe.message,error:null},Oe.transfer):H.send({id:V.id,result:Oe,error:null}),Q=null)}else throw new Error('Unknown method "'+V.method+'"')}catch(qe){H.send({id:V.id,result:null,error:It(qe)})}}),H.register=function(V,me){if(V)for(var Oe in V)V.hasOwnProperty(Oe)&&(H.methods[Oe]=V[Oe],H.methods[Oe].worker=ut);me&&(H.terminationHandler=me.onTerminate,H.abortListenerTimeout=me.abortListenerTimeout||Qe),H.send("ready")},H.emit=function(V){if(Q){if(V instanceof re){H.send({id:Q,isEvent:!0,payload:V.message},V.transfer);return}H.send({id:Q,isEvent:!0,payload:V})}},X.add=H.register,X.emit=H.emit}(C)),C}var at=n.platform,ct=n.isMainThread,ce=n.cpus;function ge(X,re){var ee=he();return new ee(X,re)}var Ee=i.pool=ge;function je(X,re){var ee=Xe();ee.add(X,re)}var ot=i.worker=je;function Be(X){var re=Xe();re.emit(X)}var Ki=i.workerEmit=Be,ms=l(),lt=ms.Promise,_r=i.Promise=lt,Ai=i.Transfer=ae(),sl=i.platform=at,nl=i.isMainThread=ct,al=i.cpus=ce;t.Promise=_r,t.Transfer=Ai,t.cpus=al,t.default=i,t.isMainThread=nl,t.platform=sl,t.pool=Ee,t.worker=ot,t.workerEmit=Ki,Object.defineProperty(t,"__esModule",{value:!0})})})(ql,ql.exports);var xv=ql.exports,Sv=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},$v=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],_v=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Cv=Sv(),pi={iron:{pixels:_v,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:$v,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:Cv,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Bl,kv=(Bl=class{},u(Bl,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),Bl),kt,st=(kt=class extends kv{static humanRangeDates(e,t){return e=kt.inputToDate(e),t=kt.inputToDate(t),e.getUTCDate()===t.getUTCDate()?kt.humanDate(e):[kt.humanDate(e),kt.humanDate(t)].join(" - ")}static human(e){return`${kt.humanDate(e)} ${kt.humanTime(e,!0)} `}},u(kt,"isoDate",e=>(e=kt.inputToDate(e),Ul(e,{representation:"date"}))),u(kt,"isoTime",e=>(e=kt.inputToDate(e),Ul(e,{representation:"time"}))),u(kt,"isoComplete",e=>(e=kt.inputToDate(e),Ul(e))),u(kt,"humanTime",(e,t=!1)=>(e=kt.inputToDate(e),$e(e,t?"HH:mm:ss":"HH:mm"))),u(kt,"humanDate",(e,t=!1)=>(e=kt.inputToDate(e),$e(e,t?"d. M.":"d. M. yyyy"))),kt),te=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},Ao=class{constructor(r){u(this,"_layers",[]);u(this,"onLayers",new te);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},Pt=class{constructor(r,e){u(this,"_value");u(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},St=class{constructor(r,e,t){u(this,"onSerializableChange",new te);u(this,"_selected",!1);u(this,"onSelected",new te);u(this,"onDeselected",new te);u(this,"onValues",new te);u(this,"onMoveOrResize",new te);u(this,"layerRoot");u(this,"points",new Map);u(this,"_top");u(this,"_left");u(this,"_width");u(this,"_height");u(this,"_min");u(this,"_max");u(this,"_avg");u(this,"_color","black");u(this,"onSetColor",new te);u(this,"_initialColor");u(this,"onSetInitialColor",new te);u(this,"activeColor","yellow");u(this,"inactiveColor","black");u(this,"ready",!1);u(this,"nameInitial");u(this,"_name");u(this,"onSetName",new te);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},Hu=class{constructor(r,e,t,i,s,n,a){u(this,"pxX");u(this,"_x");u(this,"onX",new te);u(this,"pxY");u(this,"_y");u(this,"onY",new te);u(this,"_color");u(this,"_active",!1);u(this,"_isHover",!1);u(this,"_isDragging",!1);u(this,"container");u(this,"innerElement");u(this,"onMouseEnter",new te);u(this,"onMouseLeave",new te);u(this,"onActivate",new te);u(this,"onDeactivate",new te);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},fr,Pv=(fr=class extends Hu{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);u(this,"axisX");u(this,"axisY");u(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(fr.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=fr.sizePx(-.5),t.style.left=fr.sizePx(-.5),t.style.width=fr.sizePx(),t.style.height=fr.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=fr.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=fr.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${fr.sizePx(.5)} - 3px )`,t.style.left=`calc( ${fr.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},u(fr,"size",20),fr),Cr=class Wu extends St{constructor(t,i,s,n,a){super(t,s,i);u(this,"center");u(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new Pv("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new Bu(this)),this._graph}static addAtPoint(t,i,s,n,a){return new Wu(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(f=>f.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=St.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=St.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=St.serializedGetNumericalValueByKey(i,"top"),h=St.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},Bu=class{constructor(r){u(this,"_min",!1);u(this,"_max",!1);u(this,"_avg",!1);u(this,"_value");u(this,"onGraphActivation",new te);u(this,"onGraphData",new te);u(this,"onAnalysisSelection",new te);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof Cr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof Cr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof Cr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof Cr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},Ov=class extends Hu{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Av=class extends Ov{constructor(){super(...arguments);u(this,"_pairX");u(this,"_pairY");u(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},gr=class extends St{constructor(e,t,i,s,n,a,o){super(e,i,t);u(this,"wPx",(100/this.file.width/2).toString()+"%");u(this,"hPx",(100/this.file.height/2).toString()+"%");u(this,"tl");u(this,"tr");u(this,"bl");u(this,"br");u(this,"area");u(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new Bu(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,f=a-n;return{top:n,left:o,width:h,height:f}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Av(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(S=>S.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=St.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=St.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=St.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=St.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=St.serializedGetNumericalValueByKey(t,"top"),f=St.serializedGetNumericalValueByKey(t,"left"),p=St.serializedGetNumericalValueByKey(t,"width"),g=St.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),f!==void 0&&f!==this.left&&(this.setLeft(f),i=!0),p!==void 0&&p!==this.width&&(this.setWidth(p),i=!0),g!==void 0&&g!==this.height&&(this.setHeight(g),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},Gu=class{constructor(r,e,t,i,s){u(this,"pxX");u(this,"pxY");u(this,"element");u(this,"_top");u(this,"_width");u(this,"_left");u(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},Sd=class extends Gu{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},$d=class Va extends gr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Va(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:f,height:p}=Va.calculateDimensionsFromCorners(s,n,a,o),g=new Va(e,t,i,l,h,f,p);return g.recalculateValues(),g}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Sd(this,e,t,e+i,t+s):new Sd(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const f=this.file.width*h;for(let p=e;p<=t;p++)if(this.isWithin(p,h)){const g=this.file.pixels[f+p];g<n&&(n=g),g>a&&(a=g),l+=g,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},_d=class extends Gu{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},Cd=class Ya extends gr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new Ya(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:f,height:p}=Ya.calculateDimensionsFromCorners(s,n,a,o),g=new Ya(e,t,i,l,h,f,p);return g.recalculateValues(),g}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new _d(this,e,t,e+i,t+s):new _d(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const f=this.file.width*h;for(let p=e;p<=t;p++){const g=this.file.pixels[f+p];g<n&&(n=g),g>a&&(a=g),l+=g,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},qa=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],Ev=class extends Map{constructor(e){super();u(this,"layers",[]);u(this,"onAdd",new te);u(this,"onRemove",new te);u(this,"onSelectionChange",new te);u(this,"colors",qa);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=Cd.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=Cd.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=$d.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=$d.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=Cr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=Cr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=qa.filter(i=>!e.includes(i));return t.length>0?t[0]:qa[0]}getNextName(e){return`${e} ${this.all.length}`}},Lv=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},Dv=class extends Pt{constructor(){super(...arguments);u(this,"layers",new Ev(this));u(this,"points",new Lv(this));u(this,"listener");u(this,"bindedPointerMoveListener");u(this,"bindedPointerDownListener");u(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,f=e.layerY/o;return{top:Math.round(l*f),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Rv=class{constructor(r){u(this,"listenerKey","___listen-to-graphs___");u(this,"_graphs",new Map);u(this,"_output",{values:[[]],colors:[]});u(this,"onOutput",new te);u(this,"onAddGraph",new te);u(this,"onRemoveGraph",new te);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:$e(a,"m:ss:SSS")+" ",[e[1].key]:$e(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},Mv=class extends Pt{constructor(e){super(e,{values:[[]],colors:[]});u(this,"_hasActiveGraphs",!1);u(this,"onGraphsPresence",new te);u(this,"listeners",new Rv(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=ea({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=Fu(i)(e);ju(i)(s)}},Tv=class{constructor(r,e){u(this,"_analysis");u(this,"_serialized");u(this,"onSerialize",new te);u(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},Xs,Vu=(Xs=class extends Pt{constructor(){super(...arguments);u(this,"onSlotInit",new te);u(this,"onSlotRemove",new te);u(this,"onSlot1Assignement",new te);u(this,"onSlot2Assignement",new te);u(this,"onSlot3Assignement",new te);u(this,"onSlot4Assignement",new te);u(this,"onSlot5Assignement",new te);u(this,"onSlot6Assignement",new te);u(this,"onSlot7Assignement",new te);u(this,"onSlot1Serialize",new te);u(this,"onSlot2Serialize",new te);u(this,"onSlot3Serialize",new te);u(this,"onSlot4Serialize",new te);u(this,"onSlot5Serialize",new te);u(this,"onSlot6Serialize",new te);u(this,"onSlot7Serialize",new te)}getNextFreeSlotNumber(){for(let t=1;t<=Xs.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new Tv(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(P=>P.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=St.serializedGetNumericalValueByKey(s,"top"),l=St.serializedGetNumericalValueByKey(s,"left");const h=St.serializedGetStringValueByKey(s,"color");let f=St.serializedGetNumericalValueByKey(s,"width"),p=St.serializedGetNumericalValueByKey(s,"height");const g=St.serializedSegmentsHasExact(s,"avg"),S=St.serializedSegmentsHasExact(s,"min"),_=St.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let O;if(a==="point"){if(o===void 0||l===void 0)return;O=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||f===void 0||p===void 0)return;f<0&&(f=0),f+l>this.parent.width-1&&(f=this.parent.width-l-1),p<0&&(p=0),p+o>this.parent.height-1&&(p=this.parent.height-o-1),O=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,f+l,p+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,f+l,p+o,h,!1)}if(O!==void 0){if(O instanceof Cr?g&&O.graph.setAvgActivation(!0):O instanceof gr&&(g&&O.graph.setAvgActivation(!0),S&&O.graph.setMinActivation(!0),_&&O.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const P=this.getNextFreeSlotNumber();P!==void 0&&this.assignSlot(P,O)}else i!==void 0&&this.assignSlot(i,O);return O}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},u(Xs,"MAX_SLOTS",7),Xs),Iv=class extends Pt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},Uv=class{constructor(r,e){u(this,"_currentFrame");u(this,"bufferSize",3);u(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t||e===t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Yu={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},zv=class extends Pt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));u(this,"_playbackSpeed",1);u(this,"startTimestampRelative");u(this,"endTimestampRelative");u(this,"stepsByAbsolute",new Map);u(this,"stepsByRelative",new Map);u(this,"stepsByIndex",new Map);u(this,"relativeSteps",[]);u(this,"_currentStep");u(this,"isSequence");u(this,"_isPlaying",!1);u(this,"timer");u(this,"buffer");u(this,"callbackdPlaybackSpeed",new te);u(this,"callbacksPlay",new te);u(this,"callbacksPause",new te);u(this,"callbacksStop",new te);u(this,"callbacksEnd",new te);u(this,"callbacksChangeFrame",new te);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Uv(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Yu[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),$e(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);this.setRelativeTime(e.relative)}findPreviousOrThis(e){return this.stepsByRelative.has(e)?this.stepsByRelative.get(e):this.findPreviousRelative(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e);let i=Math.max(Math.ceil(t*this.steps.length)+5,this.steps.length),s;for(;i>=0&&s===void 0;){const a=this.stepsByIndex.get(i);a!==void 0&&a.relative<e&&(s=a),i=i-1}return s!==void 0?s:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousOrThis(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Fv=class extends Pt{constructor(){super(...arguments);u(this,"stream");u(this,"recorder");u(this,"mimeType");u(this,"_isRecording",!1);u(this,"_mayStop",!0);u(this,"recordedChunks",[]);u(this,"callbackMayStop",new te)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Eo=class{},Mt,jv=(Mt=class{constructor(e,t){u(this,"_built",!1);u(this,"_hydrated",!1);u(this,"_hover",!1);u(this,"_canvasLayer");u(this,"_visibleLayer");u(this,"_cursorLayer");u(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(Mt.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Mt.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Mt.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Mt.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Mt.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Mt.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Mt.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Mt.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl,this.root.innerHTML="")}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},u(Mt,"CLASS_BASE","thermalImageRoot"),u(Mt,"CLASS_BUILT",Mt.CLASS_BASE+"__built"),u(Mt,"CLASS_HYDRATED",Mt.CLASS_BASE+"__mounted"),u(Mt,"CLASS_HOVER",Mt.CLASS_BASE+"__hover"),Mt),Nv=class{constructor(r){u(this,"_current");u(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new te),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},Hv=class extends Eo{constructor(e,t,i,s,n){super();u(this,"id");u(this,"horizontalLimit");u(this,"verticalLimit");u(this,"group");u(this,"thermalUrl");u(this,"visibleUrl");u(this,"fileName");u(this,"signature","unknown");u(this,"version",-1);u(this,"streamCount",-1);u(this,"fileDataType",-1);u(this,"unit",-1);u(this,"meta");u(this,"_dom");u(this,"timeline");u(this,"cursorValue");u(this,"analysis");u(this,"recording");u(this,"_mounted",!1);u(this,"_built",!1);u(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Nv(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new jv(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),f=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[f]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},Lo=class{constructor(r){u(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){var r,e;this._mounted&&((r=this.instance.dom)==null?void 0:r.root)!==null&&(this._mounted=!1,(e=this.instance.dom)==null||e.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},di=class Xl{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Xl.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Xl.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Wv=class extends Lo{constructor(e,t){super(e);u(this,"container");u(this,"image");this._url=t,this.container=di.createVisibleLayer(),this._url&&(this.image=di.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Bv=class extends Lo{constructor(e){super(e);u(this,"renderCount",0);u(this,"container");u(this,"canvas");u(this,"context");u(this,"_opacity",1);this.container=di.createCanvasContainer(),this.canvas=di.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){this.renderCount+=1,console.log("Rendering",this.instance.fileName,this.renderCount);const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof Cr?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,f)=>{const g=new OffscreenCanvas(a,o).getContext("2d"),S=n-s,_=f.map(A=>({id:A[1],type:A[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let A=0;A<a;A++)for(let L=0;L<o;L++){const K=A+L*a,B=l[K];let se=B;se<s&&(se=s),se>n&&(se=n);const D=(se-s)/S,M=Math.round(255*D),T=h[M];g.fillStyle=T,g.fillRect(A,L,1,1);const j=(I,F,R,Z,he,C)=>{const G=R+he/2,fe=Z+C/2,ae=(I-G)/(he/2),Le=(F-fe)/(C/2);return ae*ae+Le*Le<=1};f.forEach((I,F)=>{const R=_[F],[Z,he,C,G,fe,ae]=I;Z==="point"?A===G&&L===C&&(R.avg.value=B):Z==="rectangle"?A>=G&&A<G+fe&&L>=C&&L<C+ae&&(B<R.min.value&&(R.min.value=B),B>R.max.value&&(R.max.value=B),R.avg.count=R.avg.count+1,R.avg.sum=R.avg.sum+B):Z==="ellipsis"&&j(A,L,G,C,a,o)&&(B<R.min.value&&(R.min.value=B),B>R.max.value&&(R.max.value=B),R.avg.count=R.avg.count+1,R.avg.sum=R.avg.sum+B)})}const O=_.map(A=>({id:A.id,min:A.min.value!==1/0?A.min.value:void 0,max:A.max.value!==-1/0?A.max.value:void 0,avg:A.type==="point"?A.avg.value:A.avg.sum/A.avg.count})),P=g.getImageData(0,0,a,o);return{image:await createImageBitmap(P),stats:O}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Gv=class extends Lo{constructor(e){super(e);u(this,"layerRoot");u(this,"center");u(this,"axisX");u(this,"axisY");u(this,"label");u(this,"_show",!1);u(this,"_hover",!1);this.layerRoot=di.createCursorLayerRoot(),this.center=di.createCursorLayerCenter(),this.axisX=di.createCursorLayerX(),this.axisY=di.createCursorLayerY(),this.label=di.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Vv=class extends Lo{constructor(e){super(e);u(this,"container");this.container=di.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Et,qu=(Et=class{constructor(){u(this,"wrapper");u(this,"container");u(this,"_exporting",!1);u(this,"onExportingStatusChange",new te)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=Et.FONT_SIZE_NORMAL,s="normal",n=Et.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=Et.FONT_SIZE_NORMAL,i.style.fontFamily=Et.FONT_FAMILY,i.style.color=Et.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){yv.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const f=e.clientWidth,p=60,S=f/(p+40),_=document.createElement("div");_.style.width="100%",_.style.position="relative",_.style.paddingLeft=p/2+"px",_.style.paddingRight=p/2+"px",_.style.boxSizing="border-box";const O=document.createElement("div");O.style.width="100%",O.style.position="relative",O.style.backgroundColor=o,O.style.height="30px";const P=i-t,Y=s-t,A=n-t,L=Y/P*100,K=A/P*100,B=document.createElement("div");B.style.position="absolute",B.style.backgroundImage=a,B.style.height="100%",B.style.top="0px",B.style.left=L+"%",B.style.width=K-L+"%",O.appendChild(B),_.appendChild(O);const se=document.createElement("div");se.style.width="100%",se.style.height="40px",se.style.position="relative";const k=(T,j=!1,I,F)=>{const R=T/P*100,Z=document.createElement("div");Z.style.position="absolute",Z.style.top="0px",Z.style.left=`calc( ${R}% - ${p/2}px )`,Z.style.width=p+"px",Z.style.textAlign="center",Z.style.lineHeight="0px";const he=document.createElement("div"),C=document.createElement("div"),G=document.createElement("div"),fe=7,ae=fe+"px";he.innerHTML=(t+T).toFixed(2)+" °C",he.style.display="inline-block",he.style.fontSize=Et.FONT_SIZE_SMALL,he.style.lineHeight="1em",he.style.padding="3px",he.style.position="relative",C.style.width="100%",C.style.height=ae,C.style.textAlign="center",C.style.position="relative",C.style.lineHeight="0px",G.style.content="",G.style.display="inline-block",j?(G.style.width=fe*2+"px",G.style.height=fe*2+"px",G.style.rotate="45deg",G.style.backgroundColor=F,he.style.backgroundColor=F,he.style.zIndex="99",he.style.color=I):(G.style.width="1px",G.style.height=ae,G.style.backgroundColor=I),C.appendChild(G),Z.appendChild(C),Z.appendChild(he),se.appendChild(Z)};if(h){const T=document.createElement("div");T.style.position="absolute",T.style.border=`2px solid ${l}`,T.style.height="100%",T.style.boxSizing="border-box";const j=(h.from-t)/P*100,I=(h.to-t)/P*100-j;T.style.left=j+"%",T.style.width=I+"%",O.appendChild(T),k(h.from-t,!0,"white",o),k(h.to-t,!0,"white",o)}const D=P/S;let M=0;for(;M<=P;)k(M,!1,l,"transparent"),M=M+D;return k(Y,!0,"white",l),k(A,!0,"white",l),_.appendChild(se),_}},u(Et,"FONT_SIZE_NORMAL","16px"),u(Et,"FONT_SIZE_SMALL","12px"),u(Et,"COLOR_BASE","black"),u(Et,"COLOR_GRAY","gray"),u(Et,"COLOR_LIGHT","lightgray"),u(Et,"WIDTH","1600px"),u(Et,"FONT_FAMILY","sans-serif"),u(Et,"GAP_BASE","10px"),u(Et,"GAP_SMALL","5px"),u(Et,"DEBUG",!1),Et),Fr,Yv=(Fr=class extends qu{constructor(t){super();u(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...Fr.DEFAULT_PARAMS,...t,fileName:i}}async onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i),o=`${t.fontSize}px`;s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),this.localInstance=await this.file.reader.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){this.container.style.lineHeight=`${t.fontSize*1.5}px`;const h=this.file.group.registry.minmax.value.min,f=this.file.group.registry.minmax.value.max;if(t.showFileInfo){const p=document.createElement("div");p.style.paddingBottom=`${t.fontSize/3}px`,p.appendChild(this.createElementWithText("div",this.file.fileName,o,"bold",t.textColor)),this.container.appendChild(p)}if(t.showThermalScale){const p=h!==this.file.meta.current.min||f!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,f,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",p))}if(this.localInstance.mountToDom(this.container),this.localInstance.dom&&this.localInstance.dom.visibleLayer&&(this.localInstance.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const p=document.createElement("table");p.style.width="100%",p.style.borderCollapse="collapse",p.style.marginTop=`${t.fontSize/3}px`;const g=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(S=>{const _=this.createElementWithText("th",S,o,void 0,Fr.COLOR_GRAY);_.style.textAlign="left",_.style.borderBottom=`1px solid ${Fr.COLOR_LIGHT}`,_.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,g.appendChild(_)}),p.appendChild(g),this.container.appendChild(p),this.file.slots.forEveryExistingSlot((S,_)=>{var P;const O=(P=this.localInstance)==null?void 0:P.slots.createFromSerialized(S.serialized,_);if(O){const Y=document.createElement("tr"),A=this.createElementWithText("td",S.analysis.name,o,void 0,S.analysis.initialColor);A.style.borderBottom=`1px solid ${Fr.COLOR_LIGHT}`,A.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,Y.appendChild(A);const L=(K,B)=>{const se=this.createElementWithText("td",B?B.toFixed(3)+" °C":"",o,void 0);se.style.borderBottom=`1px solid ${Fr.COLOR_LIGHT}`,se.style.paddingTop=`${t.fontSize/3}px`,se.style.paddingBottom=`${t.fontSize/3}px`,Y.appendChild(se)};S.analysis instanceof gr?(L(S.analysis.initialColor,O.avg),L(S.analysis.initialColor,O.min),L(S.analysis.initialColor,O.max)):S.analysis instanceof Cr&&(L(S.analysis.initialColor,O.avg),L(S.analysis.initialColor),L(S.analysis.initialColor)),p.appendChild(Y)}})}if(t.author||t.license){const p=document.createElement("div");p.style.lineHeight="1.5em",p.style.color=Fr.COLOR_GRAY,p.style.paddingTop=`${t.fontSize/3}px`,t.author&&p.appendChild(this.createElementWithText("span",t.author,o)),t.author&&t.license&&p.appendChild(this.createElementWithText("span"," - ",o)),t.license&&p.appendChild(this.createElementWithText("span",t.license,o)),this.container.appendChild(p)}if(t.showSource){const p=document.createElement("div");p.style.lineHeight="1.5em",p.style.paddingTop=`${t.fontSize/3}px`;const g=st.human(new Date),S=window.location.href;p.appendChild(this.createElementWithText("span",`${g} - ${S}`,o,void 0,Fr.COLOR_GRAY)),this.container.appendChild(p)}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},0)}}},u(Fr,"DEFAULT_PARAMS",{fileName:"sth",width:1200,fontSize:20,textColor:"black",backgroundColor:"white",showAnalysis:!0,showFileInfo:!1,showThermalScale:!0,showSource:!1}),Fr),ta=class Xu extends Hv{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);u(this,"slots");u(this,"_export");u(this,"filters",new Ao(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new Yv(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Bv(this),visibleLayer:new Wv(this,this.visibleUrl),cursorLayer:new Gv(this),listenerLayer:new Vv(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new Iv(this,void 0),this.timeline=new zv(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Fv(this,!1),this.analysis=new Dv(this,[]),this.analysisData=new Mv(this),this.slots=new Vu(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new Xu(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},qv=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof gr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof gr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof gr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof gr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:st.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof gr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=ea({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=Fu(s)(i);ju(s)(n)}},it,Xv=(it=class extends qu{constructor(t){super();u(this,"localGroup");u(this,"header");u(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=it.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,it.FONT_SIZE_SMALL,"normal",it.COLOR_BASE);l.style.paddingTop=it.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,it.FONT_SIZE_SMALL,void 0,it.COLOR_GRAY);s.style.paddingTop=it.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${st.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,it.FONT_SIZE_SMALL,void 0,it.COLOR_GRAY);return n.style.paddingTop=it.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=it.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${st.human(t.timeline.currentStep.absolute)}`,it.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(f=>f.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const f=document.createElement("tr");["","AVG","MIN","MAX"].forEach(p=>{const g=this.createElementWithText("th",p,it.FONT_SIZE_SMALL,void 0,it.COLOR_GRAY);g.style.padding=it.GAP_SMALL+"px",g.style.textAlign="left",f.appendChild(g)}),h.appendChild(f),a.appendChild(h),l.slots.forEveryExistingSlot((p,g)=>{const S=t.slots.createFromSerialized(p.serialized,g);if(S){const _=document.createElement("tr"),O=this.createElementWithText("td",p.analysis.name,it.FONT_SIZE_SMALL,void 0,p.analysis.initialColor);O.style.borderTop=`1px solid ${it.COLOR_LIGHT}`,O.style.padding=`${it.GAP_SMALL}px 0px ${it.GAP_SMALL} 0px`,_.appendChild(O);const P=(Y,A)=>{const L=this.createElementWithText("td",A?A.toFixed(3)+" °C":"",it.FONT_SIZE_SMALL,void 0);L.style.borderTop=`1px solid ${it.COLOR_LIGHT}`,L.style.paddingTop=`${it.GAP_SMALL}px`,L.style.paddingBottom=`${it.GAP_SMALL}px`,_.appendChild(L)};p.analysis instanceof gr?(P(p.analysis.initialColor,S.avg),P(p.analysis.initialColor,S.min),P(p.analysis.initialColor,S.max)):p.analysis instanceof Cr&&(P(p.analysis.initialColor,S.avg),P(p.analysis.initialColor),P(p.analysis.initialColor)),h.appendChild(_)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(f=>f.thermalUrl);let l;o.forEach(f=>{l=n.batch.request(f,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",f=>{const p=100/t.columns;f.forEach(g=>{g instanceof ta&&this.buildInstance(g,p,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...it.DEFAULT_PROPS,fileName:i}:{...it.DEFAULT_PROPS,...t,fileName:i}}},u(it,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),it),ts,Kv=(ts=class extends Pt{constructor(){super(...arguments);u(this,"onSlotSync",new te);u(this,"_currentPointer");u(this,"_csv");u(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}get currentPointer(){return this._currentPointer}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){const s=t.slots.getSlot(i);if(i===1)return{slot:s,serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:s,serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:s,serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:s,serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:s,serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:s,serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:s,serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(ts.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(ts.LISTENER_KEY),n.delete(ts.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(s!==this.currentPointer)if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const f=(a=n.slots.getSlot(l))==null?void 0:a.serialized,p=h.serialized;if(f!==p)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(p);else{const g=n.slots.createFromSerialized(p,l);g==null||g.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new qv(this)),this._csv}get png(){return this._png||(this._png=new Xv(this)),this._png}},u(ts,"LISTENER_KEY","__analysis__sync"),ts),Zv=class extends Pt{constructor(){super(...arguments);u(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Jv=class extends Pt{constructor(){super(...arguments);u(this,"_map",new Map)}get map(){return this._map}validate(e){return e.sort((t,i)=>t.timestamp-i.timestamp)}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof ta?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},Ku=class extends Pt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Qv=class extends Ku{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},ey=class extends Pt{constructor(e,t){super(e,t);u(this,"_hasAnyPlayback",!1);u(this,"onHasAnyCallback",new te);u(this,"_playing",!1);u(this,"onPlayingStatusChange",new te);u(this,"loopStep",0);u(this,"loopTimer");u(this,"_loopInterval",20);u(this,"onLoopIntervalChanged",new te);u(this,"_duration",0);u(this,"onDurationChanged",new te);u(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof ta);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},_s,ty=(_s=class extends Pt{constructor(t){super(t,void 0);u(this,"timeout")}calculateData(){let t=[],i=[];const s=[],n=this.parent.files.value.sort((o,l)=>o.timestamp-l.timestamp);i=n[0].analysisData.value.values[0],t=n[0].analysisData.value.colors,this.parent.files.forEveryInstance(o=>{const l=[new Date(o.timestamp)];o.analysis.value.forEach(async h=>{h.graph.state.MIN===!0&&h.min&&l.push(h.min),h.graph.state.MAX===!0&&h.max&&l.push(h.max),h.graph.state.AVG===!0&&h.avg&&l.push(h.avg)}),l.length>1&&s.push(l)}),t.length>0?this.value={colors:t,data:[i,...s]}:this.value=void 0,console.log("Přepočítal jsem data",this.value)}turnOn(){this.parent.files.forEveryInstance(t=>{t.analysisData.addListener(_s.LISTENER_ID,()=>{this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.calculateData()},0)})})}turnOff(){this.parent.files.forEveryInstance(t=>{t.analysisData.removeListener(_s.LISTENER_ID)})}_wtf(){this.parent.files.forEveryInstance(t=>{t.analysis.layers.forEach(i=>{i.graph.setAvgActivation(!0)})})}validate(t){return t}afterSetEffect(){}},u(_s,"LISTENER_ID","AnalysisGroupGraph"),_s),ry=class extends Eo{constructor(t,i,s,n){super();u(this,"hash",Math.random());u(this,"minmax",new Qv(this,void 0));u(this,"files",new Jv(this,[]));u(this,"cursorPosition",new Zv(this,void 0));u(this,"analysisSync",new Kv(this,!1));u(this,"analysisGraph",new ty(this));u(this,"_playback");u(this,"forEveryInstance",t=>{this.files.value.forEach(i=>t(i))});u(this,"filters",new Ao(this));this.registry=t,this.id=i,this.name=s,this.description=n}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get tool(){return this.registry.manager.tool}get playback(){return this._playback||(this._playback=new ey(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}getInstances(){return this.files.value}startBatch(t){return this.registry.batch.getBatchById(t)}},Zu=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Ti=class Ju extends Zu{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new Ju(e.url,e.code,e.message)}},Qu=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},Ii=class extends Zu{constructor(t,i,s,n,a,o){super(n,a);u(this,"id",Math.random());u(this,"baseInfoCache");u(this,"fileName");u(this,"originalBuffer");u(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=ta.fromService(t,i,s,n);return t.files.addFile(a),a}},iy=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(M,T)=>{const j=M.getBigInt64(T,!0),I=62135596800000n,F=10000n,R=24n*60n*60n*1000n*F,Z=0x4000000000000000n,he=0x8000000000000000n;let G=j&0x3fffffffffffffffn;j&he&&(G>Z-R&&(G-=Z),G<0&&(G+=R));const ae=G/F-I;return Number(ae)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,f=l+h,p=r.slice(25),g=p.byteLength/f,S=M=>{const T=M*f,j=T+f,I=p.slice(T,j),F=new DataView(I),R=F.getFloat32(8,!0),Z=F.getFloat32(12,!0),he=n(F,0),C=F.getFloat32(24,!0),G=F.getFloat32(28,!0);return{timestamp:he,min:R,max:Z,emissivity:C,reflectedKelvins:G}},_=[];for(let M=0;M<g;M++){const T=S(M);_.push(T)}const O={emissivity:0,reflectedKelvins:0};let P=1/0,Y=-1/0;const A=[];_.forEach(M=>{O.emissivity=O.emissivity+M.emissivity,O.reflectedKelvins=O.reflectedKelvins+M.reflectedKelvins,M.min<P&&(P=M.min),M.max>Y&&(Y=M.max),A.push(M.timestamp)});const L=A[0],K=[];A.forEach((M,T)=>{const j=A[T+1];let I=0;j===void 0&&(I=0),I=j-M;const F=M-L;K.push({absolute:M,relative:F,offset:isNaN(I)?0:I,index:T})});const B=_[_.length-1].timestamp-_[0].timestamp,se=B/g,k=1e3/se,D=_[0].timestamp;return{width:t,height:i,timestamp:D,bytesize:s,frameCount:g,duration:B,frameInterval:se,fps:k,timeline:K,min:P,max:Y,averageEmissivity:O.emissivity/_.length,averageReflectedKelvins:O.reflectedKelvins/_.length}},sy=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,f=r.slice(25),p=e*h,g=p+h;return{array:f.slice(p,g),dataType:i}},ny=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let f=i&0x3fffffffffffffffn;i&l&&(f>o-a&&(f-=o),f<0&&(f+=a));const g=f/n-s,S=Number(g),_=t.getFloat32(8,!0),O=t.getFloat32(12,!0),P=t.getFloat32(24,!0),Y=t.getFloat32(28,!0),A=r.slice(57);let L=[];if(e===0){const K=new Uint16Array(A),B=Math.abs(_-O),se=65535;K.forEach(k=>{const D=k/se;L.push(_+B*D)})}else e===1&&(L=Array.from(new Float32Array(A)));return{timestamp:S,min:_,max:O,emissivity:P,reflectedKelvins:Y,pixels:L}},ay=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(Y,A)=>{const L=Y.getBigInt64(A,!0),K=62135596800000n,B=10000n,se=24n*60n*60n*1000n*B,k=0x4000000000000000n,D=0x8000000000000000n;let T=L&0x3fffffffffffffffn;L&D&&(T>k-se&&(T-=k),T<0&&(T+=se));const I=T/B-K;return Number(I)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,f=s*n*l,p=h+f,g=r.slice(25),S=g.byteLength/p,_={},O=Y=>{const A=Y*p,L=A+p,K=g.slice(A,L),B=new DataView(K),se=a(B,0),k=B.getFloat32(8,!0),M=B.getFloat32(12,!0)-k,j=57+t*l*s+e*l;let I=0;if(o===1)I=B.getFloat32(j,!0);else if(o===0){const Z=B.getInt16(j,!0)/65535;I=k+M*Z}return{timestamp:se,temperature:I}};let P=0;for(let Y=0;Y<S;Y++){const A=O(Y);P===0&&(P=A.timestamp),_[A.timestamp-P]=A.temperature}return _},oy=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(L,K)=>{const B=L.getBigInt64(K,!0),se=62135596800000n,k=10000n,D=24n*60n*60n*1000n*k,M=0x4000000000000000n,T=0x8000000000000000n;let I=B&0x3fffffffffffffffn;B&T&&(I>M-D&&(I-=M),I<0&&(I+=D));const R=I/k-se;return Number(R)},h=n.getUint8(15);let f=2;h===1&&(f=4);const p=57,g=a*o*f,S=p+g,_=r.slice(25),O=_.byteLength/S,P={},Y=L=>{const K=L*S,B=K+S,se=_.slice(K,B),k=new DataView(se),D=l(k,0),M=k.getFloat32(8,!0),j=k.getFloat32(12,!0)-M,I=57,F=e,R=e+i,Z=t,he=t+s;let C=1/0,G=-1/0,fe=0,ae=0;for(let Xe=Z;Xe<=he;Xe++){const at=Xe*a;for(let ct=F;ct<=R;ct++){const ce=I+(at+ct)*f;let ge=NaN;if(h===1)ge=k.getFloat32(ce,!0);else{const ot=k.getInt16(ce,!0)/65535;ge=M+j*ot}ge<C&&(C=ge),ge>G&&(G=ge),ae+=ge,fe++}}const Le={min:C,max:G,avg:ae/fe,count:fe};return{timestamp:D,result:Le}};let A=0;for(let L=0;L<O;L++){const K=Y(L);A===0&&(A=K.timestamp),P[K.timestamp-A]=K.result}return P},ly=async r=>{console.log("Reading histogram");let e=[];const t=async P=>{const Y=new DataView(P.slice(0,25)),A=Y.getUint8(15),L=Y.getUint16(17,!0),K=Y.getUint16(19,!0),B=A===1?4:2,se=57,k=L*K*B,D=se+k,M=P.slice(25),T=M.byteLength/D;let j=[];for(let I=0;I<T;I++){const F=I*D,R=F+57,Z=R+k,he=M.slice(R,Z);if(A===0){const C=new DataView(M.slice(F,56)),G=C.getFloat32(8,!0),fe=C.getFloat32(12,!0),ae=new Uint16Array(he),Le=Math.abs(G-fe),Xe=65535;ae.forEach(at=>{const ct=at/Xe;j.push(G+Le*ct)})}else A===1&&(j=j.concat(Array.from(new Float32Array(he))))}return j};(await Promise.all(r.map(P=>t(P)))).forEach(P=>{e=e.concat(P)}),e.sort((P,Y)=>P-Y);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=255,l=a/o,h=[];let f=[...e];for(let P=0;P<o;P++){const Y=s+l*P,A=Y+l,L=f.findIndex(K=>K>A);if(L===0){const K={from:Y,to:A,count:0,percentage:0};h.push(K)}else{const B=f.slice(0,L-1).length,se=B/e.length*100,k={from:Y,to:A,count:B,percentage:se};h.push(k),f=f.slice(L)}}const p=[...h].sort((P,Y)=>P.percentage-Y.percentage),g=p[0].percentage,S=p[p.length-1].percentage,_=Math.abs(g-S);return h.map(P=>({...P,height:P.percentage/_*100}))},hy=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},cy=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(K,B)=>{const se=K.getBigInt64(B,!0),k=62135596800000n,D=10000n,M=24n*60n*60n*1000n*D,T=0x4000000000000000n,j=0x8000000000000000n;let F=se&0x3fffffffffffffffn;se&j&&(F>T-M&&(F-=T),F<0&&(F+=M));const Z=F/D-k;return Number(Z)},h=n.getUint8(15);let f=2;h===1&&(f=4);const p=57,g=a*o*f,S=p+g,_=r.slice(25),O=_.byteLength/S,P={},Y=(K,B)=>{const se=e+i/2,k=t+s/2,D=(K-se)/(i/2),M=(B-k)/(s/2);return D*D+M*M<=1},A=K=>{const B=K*S,se=B+S,k=_.slice(B,se),D=new DataView(k),M=l(D,0),T=D.getFloat32(8,!0),I=D.getFloat32(12,!0)-T,F=57,R=e,Z=e+i,he=t,C=t+s;let G=1/0,fe=-1/0,ae=0,Le=0;for(let at=he;at<=C;at++){const ct=at*a;for(let ce=R;ce<=Z;ce++)if(Y(ce,at)){const ge=F+(ct+ce)*f;let Ee=NaN;if(h===1)Ee=D.getFloat32(ge,!0);else{const Be=D.getInt16(ge,!0)/65535;Ee=T+I*Be}Ee<G&&(G=Ee),Ee>fe&&(fe=Ee),Le+=Ee,ae++}}const Xe={min:G,max:fe,avg:Le/ae,count:ae};return{timestamp:M,result:Xe}};let L=0;for(let K=0;K<O;K++){const B=A(K);L===0&&(L=B.timestamp),P[B.timestamp-L]=B.result}return P},dy=[{extension:"lrc",minme:"application/octet-stream"}],uy={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:dy,is:hy,baseInfo:iy,getFrameSubset:sy,frameData:ny,registryHistogram:ly,pointAnalysisData:ay,rectAnalysisData:oy,ellipsisAnalysisData:cy},ep=Object.freeze(uy),py={LrcParser:ep},tp=Object.values(py),rp=(r,e)=>{const t=tp.find(i=>i.is(r,e));if(t===void 0)throw new Qu(2,e,`No parser found for '${e}'.`);return t},ip=tp.map(r=>r.extensions),fy=ip.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),gy=class sp{constructor(e,t,i){u(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new sp(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(await fetch(this.thermalUrl))),this.response}async processResponse(e){const t=e;if(t.status!==200)return this.pocessTheService(new Ti(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=rp(i,this.thermalUrl);return this.pocessTheService(new Ii(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof Qu)return this.pocessTheService(Ti.fromError(s));throw s}}pocessTheService(e){return e}},my=class np{constructor(e,t,i=!0){u(this,"_hover",!1);u(this,"onMouseEnter",new te);u(this,"onMouseLeave",new te);u(this,"onDrop",new te);u(this,"onProcessingEnd",new te);u(this,"input");u(this,"hydrated",!1);u(this,"multiple");u(this,"bindedEnterListener");u(this,"bindedLeaveListener");u(this,"bindedDropListener");u(this,"bindedInputChangeListener");u(this,"bindedDragoverListener");u(this,"bindedClickListener");this.service=e,this.element=t,this.multiple=i,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t,i=!0){const s=new np(e,t,i);return s.hydrate(),s}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleFiles(e){let t=[];if(this.multiple)t=await Promise.all(e.map(async i=>await this.service.loadUploadedFile(i)));else{const i=e[0];i&&t.push(await this.service.loadUploadedFile(i))}return t}async handleDrop(e){e.preventDefault(),this.onDrop.call();let t=[];const i=e.dataTransfer;return i&&i.files&&(t=await this.handleFiles(Array.from(i.files))),this.onProcessingEnd.call(t,e),this.handleLeave(),{results:t,event:e}}async handleInputChange(e){e.preventDefault(),this.onDrop.call();const t=e.target;let i=[];return t.files&&(i=await this.handleFiles(Array.from(t.files)),this.onProcessingEnd.call(i,e),this.handleLeave()),{results:i,event:e}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=fy,this.multiple&&(e.multiple=!0),e}openFileDialog(e=!0){this.input!==void 0&&(this.input.multiple=e,this.input.click())}},vy=class{constructor(r){u(this,"requestsByUrl",new Map);u(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new Sh(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=rp(e,r.name);return new Ii(this,e,t,r.name)}catch(e){return new Ti(r.name,3,e.message)}}handleDropzone(r,e=!0){return my.listenOnElement(this,r,e)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=gy.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}async loadFiles(r){return r}},yy=class extends Pt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},by=class extends Pt{get availablePalettes(){return pi}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},wy=class extends Pt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},kd=class Kl{constructor(e,t){u(this,"_loading",!1);u(this,"onResolve",new te);u(this,"timeout");u(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Kl(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Kl(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof Ii?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},xy=class{constructor(r){u(this,"onBatchStart",new te);u(this,"onBatchComplete",new te);u(this,"set",new Set);this.registry=r}get numberOfBatches(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=kd.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=kd.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.numberOfBatches===0&&this.registry.loading.markAsLoaded()}},Sy=class extends Pt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},$y=class extends Pt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=this.parent.histogram.value.filter(i=>i.height>=10),t={from:e[0].from,to:e[e.length-1].to};this.imposeRange(t)}}},_y=class extends Pt{constructor(){super(...arguments);u(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addExistingGroup(e){this.value.map(t=>t.hash).includes(e.hash)||(this.value=[...this.value,e])}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new ry(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Cy=class extends Pt{constructor(){super(...arguments);u(this,"_resolution",150);u(this,"buffer",new Map);u(this,"bufferPixelsCount",0);u(this,"_bufferResolution",1e3);u(this,"_loading",!1);u(this,"onCalculationStart",new te);u(this,"onCalculationEnd",new te)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}get loading(){return this._loading}set loading(e){this._loading=e}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((S,_)=>{const O=_.reduce((P,Y)=>[...P,...Y],[]);return[...S,...O]},[]).sort((S,_)=>S-_);const h=n/a;let f=i+h;const p=new Map;let g=0;for(;f!==!1;){const S=l.findIndex(P=>P>f),_=l.slice(0,S).length;p.set(f-h/2,_),g+=_,l=l.slice(S);const O=f+h;f=O<s?O:!1}return{result:p,resultCount:g}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateHistogram()})}}async recalculateHistogram(){this.onCalculationStart.call(),this.loading=!0;const t=this.parent.groups.value.map(i=>i.files.value).reduce((i,s)=>(i=i.concat(s),i),[]).map(i=>i.reader.buffer);try{const i=await this.parent.pool.exec(ep.registryHistogram,[t]);this.value=i,this.loading=!1,this.onCalculationEnd.call(!0)}catch{this.loading=!1,this.onCalculationEnd.call(!1)}}},ky=class extends Pt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},Py=class extends Ku{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Oy=class extends Eo{constructor(e,t,i){super();u(this,"hash",Math.random());u(this,"groups",new _y(this,[]));u(this,"_batch");u(this,"onProcessingStart",new te);u(this,"onProcessingEnd",new te);u(this,"opacity",new Sy(this,1));u(this,"minmax",new Py(this,void 0));u(this,"loading",new ky(this,!1));u(this,"range",new $y(this,void 0));u(this,"histogram",new Cy(this,[]));u(this,"palette");u(this,"filters",new Ao(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([s,n])=>{const a=this.groups.addOrGetGroup(s),o=await Promise.all(n.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:a,groupFiles:o}})),i=await Promise.all(t.map(async({group:s,groupFiles:n})=>await Promise.all(n.map(async o=>o instanceof Ii?await o.createInstance(s):!1))));return this.postLoadedProcessing(),i}async loadFullOneFile(e,t){this.reset(),this.loading.markAsLoading();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl),n=s instanceof Ii?await s.createInstance(i):s;return this.loading.markAsLoaded(),this.postLoadedProcessing(),n}get batch(){return this._batch||(this._batch=new xy(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},Do=class{constructor(r){u(this,"active",!1);this.manager=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Ro=class extends Do{},Ay=class extends Ro{constructor(){super(...arguments);u(this,"key","add-ellipsis");u(this,"name","addellipsisanalysis");u(this,"description","clickandaddellipsis");u(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);u(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=Vu.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Ey=class extends Ro{constructor(){super(...arguments);u(this,"key","add-rect");u(this,"name","addrectangleanalysis");u(this,"description","clickandaddrectangle");u(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);u(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Ly=class extends Ro{constructor(){super(...arguments);u(this,"key","add-point");u(this,"name","addpointanalysis");u(this,"description","clickandaddpoint");u(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);u(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},Dy=class extends Do{constructor(){super(...arguments);u(this,"key","edit");u(this,"name","editanalysis");u(this,"description","dragcornersofselectedanalysis");u(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},ap=class extends Do{constructor(){super(...arguments);u(this,"key","inspect");u(this,"name","inspecttemperatures");u(this,"description","usemousetoinspecttemperaturevalues");u(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);u(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Ry=[ap,Ly,Ey,Ay,Dy],My=r=>{const e=Ry.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},Ty=class extends Pt{constructor(e,t){super(e,t);u(this,"_tools",My(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof Do?this.value=e:this.value=this.tools[e]}},op="chrome"in window;console.log("is chromium",op);var Iy=op?{maxWorkers:4}:{},Uy=xv.pool(Iy),Sh=class extends Eo{constructor(e,t){super();u(this,"id");u(this,"service",new vy(this));u(this,"registries",{});u(this,"palette",new by(this,"jet"));u(this,"smooth",new wy(this,!1));u(this,"graphSmooth",new yy(this,!1));u(this,"tool",new Ty(this,new ap(this)));u(this,"pool");u(this,"filters",new Ao(this));this.pool=e||Uy,this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Oy(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}},zy=Object.defineProperty,Fy=Object.getOwnPropertyDescriptor,wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zy(e,t,s),s};const Pd=["ready","select"],jy={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let er=class extends mr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new te,this.left=0,this.top=0,this.w=0,this.h=0}render(){return d`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Yg(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(Pd,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(jy[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!Pd.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await pd({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(pd).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};er.styles=ne`
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
  `;wr([c({type:String,reflect:!0})],er.prototype,"type",2);wr([c({type:Array})],er.prototype,"events",2);wr([c({type:Object,hasChanged:()=>!0})],er.prototype,"options",2);wr([c({type:Array})],er.prototype,"cols",2);wr([c({type:Array})],er.prototype,"rows",2);wr([c({type:String})],er.prototype,"data",2);wr([c({type:Object})],er.prototype,"view",2);wr([c({type:Array})],er.prototype,"selection",2);wr([c({type:Object})],er.prototype,"_data",2);wr([c({type:Number,reflect:!0})],er.prototype,"left",2);wr([c({type:Number,reflect:!0})],er.prototype,"top",2);wr([c({type:Number,reflect:!0})],er.prototype,"w",2);wr([c({type:Number,reflect:!0})],er.prototype,"h",2);er=wr([W("thermal-chart")],er);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=()=>new Ny;let Ny=class{};const zl=new WeakMap,ve=Zn(class extends tg{render(r){return $}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),$}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=zl.get(e);t===void 0&&(t=new WeakMap,zl.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=zl.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var y=(r=>(r.loading="loading",r.config="config",r.temperature="temperature",r.upload="upload",r.uploadafile="uploadafile",r.selectfile="selectfile",r.addfiles="addfiles",r.clear="clear",r.dragorselectfile="dragorselectfile",r.share="share",r.fileloadingerror="fileloadingerror",r.embedhint="embedhint",r.embedlibrary="embedlibrary",r.embedcomponent="embedcomponent",r.copy="copy",r.file="file",r.layout_simple="layout_simple",r.layout_advanced="layout_advanced",r.layout_nogui="layout_nogui",r.layout_lesson="layout_lesson",r.next="next",r.prev="prev",r.back="back",r.close="close",r.detail="detail",r.showeverything="showeverything",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.togglevisibleimage="togglevisibleimage",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.numfiles="numfiles",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.exportimagewidth="exportimagewidth",r.exportimagefontsize="exportimagefontsize",r.showingfolder="showingfolder",r.showingfolders="showingfolders",r.and="and",r.or="or",r.doyouwanttoadd="doyouwanttoadd",r.youmayalsoadd="youmayalsoadd",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.groupped="groupped",r.bydays="bydays",r.byhours="byhours",r.byweeks="byweeks",r.bymonths="bymonths",r.byyears="byyears",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.reload="reload",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.analysissync="analysissync",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r.remotefoldersbrowser="remotefoldersbrowser",r))(y||{});const Hy=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],Od=Object.fromEntries(Hy.map(r=>[r.code,r]));var Wy=Object.defineProperty,By=Object.getOwnPropertyDescriptor,lp=(r,e,t,i)=>{for(var s=i>1?void 0:i?By(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wy(e,t,s),s};let Tn=class extends mr{constructor(){super(),this.dialogRef=pe(),this.closeButtonRef=pe(),this.invokerRef=pe()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return d`
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
                        ${b(y.close)}
                    </thermal-button>
                </div>
                
            
            </dialog>
        `}};Tn.shadowRootOptions={...mr.shadowRootOptions,mode:"open"};Tn.styles=ne`

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

        
    
    `;lp([c({type:String,reflect:!0})],Tn.prototype,"label",2);Tn=lp([W("thermal-dialog")],Tn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let hp=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ad=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new hp(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gy{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Vy=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Ed extends Gy{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:f}]of this.subscriptions)l.has(h)||(l.add(h),f.dispatchEvent(new hp(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Vy(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Ed(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Ed(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Ad(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Ad(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let Fa;const Yy=new Uint8Array(16);function qy(){if(!Fa&&(Fa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Fa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Fa(Yy)}const Yt=[];for(let r=0;r<256;++r)Yt.push((r+256).toString(16).slice(1));function Xy(r,e=0){return Yt[r[e+0]]+Yt[r[e+1]]+Yt[r[e+2]]+Yt[r[e+3]]+"-"+Yt[r[e+4]]+Yt[r[e+5]]+"-"+Yt[r[e+6]]+Yt[r[e+7]]+"-"+Yt[r[e+8]]+Yt[r[e+9]]+"-"+Yt[r[e+10]]+Yt[r[e+11]]+Yt[r[e+12]]+Yt[r[e+13]]+Yt[r[e+14]]+Yt[r[e+15]]}const Ky=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ld={randomUUID:Ky};function Zy(r,e,t){if(Ld.randomUUID&&!e&&!r)return Ld.randomUUID();r=r||{};const i=r.random||(r.rng||qy)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Xy(i)}const si="localeContext",bi=r=>{bt.on("languageChanged",e=>{r.locale=e}),r.locale===void 0?r.locale=bt.language:bt.changeLanguage(r.locale)},Fl={cs:["cs","cz","cs_CZ","cs_CS"],fr:["fr","fr_FR","fr_CA"],de:["de","de_DE","de_AT","de_CH"],cy:["cy","cy_GB","cy"],en:["en","en_US","en_GB","en_CA","en_AU","en_NZ","en_IE","en_ZA"]},wi={fromAttribute:r=>{let e,t=0;for(;t<Object.keys(Fl).length&&e===void 0;){const i=Object.keys(Fl)[t];Fl[i].includes(r)&&(e=i),t++}return e??"en"},toAttribute:r=>r};var Jy=Object.defineProperty,Qy=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Jy(e,t,s),s};const ac=class ac extends mr{get UUID(){return this._UUID===void 0&&(this._UUID=Zy()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),bt.on("languageChanged",e=>{this._locale=e})}};ac.shadowRootOptions={...mr.shadowRootOptions,mode:"open"};let He=ac;Qy([le({context:si,subscribe:!0})],He.prototype,"_locale");const cp="tour-context",dp="tour-step",up="tourable-element";var eb=Object.defineProperty,pp=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&eb(e,t,s),s};class Rs extends He{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}pp([c({type:String})],Rs.prototype,"tour");pp([z({context:up})],Rs.prototype,"tourableElement");var tb=Object.defineProperty,rb=Object.getOwnPropertyDescriptor,Mo=(r,e,t,i)=>{for(var s=i>1?void 0:i?rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tb(e,t,s),s};let Ui=class extends Rs{constructor(){super(...arguments),this.tourableElementRef=pe(),this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return d`
            <button class="${this.variant}" ${ve(this.tourableElementRef)} part="btn">
                <slot></slot>
            </button>
        `}};Ui.VARIANTS=["slate","primary","foreground","background"];Ui.shadowRootOptions={...mr.shadowRootOptions,mode:"open"};Ui.styles=ne`

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
    
    `;Mo([c({type:String,converter:{fromAttribute:r=>{if(Ui.VARIANTS.includes(r))return r},toAttribute:r=>r},reflect:!1})],Ui.prototype,"variant",2);Mo([c({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],Ui.prototype,"interactive",2);Mo([c({type:String})],Ui.prototype,"size",2);Ui=Mo([W("thermal-button")],Ui);const ss=Math.min,Ri=Math.max,oo=Math.round,fi=r=>({x:r,y:r}),ib={left:"right",right:"left",bottom:"top",top:"bottom"},sb={start:"end",end:"start"};function Zl(r,e,t){return Ri(r,ss(e,t))}function cn(r,e){return typeof r=="function"?r(e):r}function zi(r){return r.split("-")[0]}function ra(r){return r.split("-")[1]}function fp(r){return r==="x"?"y":"x"}function $h(r){return r==="y"?"height":"width"}function ia(r){return["top","bottom"].includes(zi(r))?"y":"x"}function _h(r){return fp(ia(r))}function nb(r,e,t){t===void 0&&(t=!1);const i=ra(r),s=_h(r),n=$h(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=lo(a)),[a,lo(a)]}function ab(r){const e=lo(r);return[Jl(r),e,Jl(e)]}function Jl(r){return r.replace(/start|end/g,e=>sb[e])}function ob(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function lb(r,e,t,i){const s=ra(r);let n=ob(zi(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Jl)))),n}function lo(r){return r.replace(/left|right|bottom|top/g,e=>ib[e])}function hb(r){return{top:0,right:0,bottom:0,left:0,...r}}function Ch(r){return typeof r!="number"?hb(r):{top:r,right:r,bottom:r,left:r}}function Zs(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function Dd(r,e,t){let{reference:i,floating:s}=r;const n=ia(e),a=_h(e),o=$h(a),l=zi(e),h=n==="y",f=i.x+i.width/2-s.width/2,p=i.y+i.height/2-s.height/2,g=i[o]/2-s[o]/2;let S;switch(l){case"top":S={x:f,y:i.y-s.height};break;case"bottom":S={x:f,y:i.y+i.height};break;case"right":S={x:i.x+i.width,y:p};break;case"left":S={x:i.x-s.width,y:p};break;default:S={x:i.x,y:i.y}}switch(ra(e)){case"start":S[a]-=g*(t&&h?-1:1);break;case"end":S[a]+=g*(t&&h?-1:1);break}return S}const cb=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:f,y:p}=Dd(h,i,l),g=i,S={},_=0;for(let O=0;O<o.length;O++){const{name:P,fn:Y}=o[O],{x:A,y:L,data:K,reset:B}=await Y({x:f,y:p,initialPlacement:i,placement:g,strategy:s,middlewareData:S,rects:h,platform:a,elements:{reference:r,floating:e}});f=A??f,p=L??p,S={...S,[P]:{...S[P],...K}},B&&_<=50&&(_++,typeof B=="object"&&(B.placement&&(g=B.placement),B.rects&&(h=B.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):B.rects),{x:f,y:p}=Dd(h,g,l)),O=-1)}return{x:f,y:p,placement:g,strategy:s,middlewareData:S}};async function gp(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:g=!1,padding:S=0}=cn(e,r),_=Ch(S),P=o[g?p==="floating"?"reference":"floating":p],Y=Zs(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(P)))==null||t?P:P.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:f,strategy:l})),A=p==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),K=await(n.isElement==null?void 0:n.isElement(L))?await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1}:{x:1,y:1},B=Zs(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:A,offsetParent:L,strategy:l}):A);return{top:(Y.top-B.top+_.top)/K.y,bottom:(B.bottom-Y.bottom+_.bottom)/K.y,left:(Y.left-B.left+_.left)/K.x,right:(B.right-Y.right+_.right)/K.x}}const db=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:f=0}=cn(r,e)||{};if(h==null)return{};const p=Ch(f),g={x:t,y:i},S=_h(s),_=$h(S),O=await a.getDimensions(h),P=S==="y",Y=P?"top":"left",A=P?"bottom":"right",L=P?"clientHeight":"clientWidth",K=n.reference[_]+n.reference[S]-g[S]-n.floating[_],B=g[S]-n.reference[S],se=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let k=se?se[L]:0;(!k||!await(a.isElement==null?void 0:a.isElement(se)))&&(k=o.floating[L]||n.floating[_]);const D=K/2-B/2,M=k/2-O[_]/2-1,T=ss(p[Y],M),j=ss(p[A],M),I=T,F=k-O[_]-j,R=k/2-O[_]/2+D,Z=Zl(I,R,F),he=!l.arrow&&ra(s)!=null&&R!==Z&&n.reference[_]/2-(R<I?T:j)-O[_]/2<0,C=he?R<I?R-I:R-F:0;return{[S]:g[S]+C,data:{[S]:Z,centerOffset:R-Z-C,...he&&{alignmentOffset:C}},reset:he}}}),ub=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:O=!0,...P}=cn(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const Y=zi(s),A=zi(o)===o,L=await(l.isRTL==null?void 0:l.isRTL(h.floating)),K=g||(A||!O?[lo(o)]:ab(o));!g&&_!=="none"&&K.push(...lb(o,O,_,L));const B=[o,...K],se=await gp(e,P),k=[];let D=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&k.push(se[Y]),p){const I=nb(s,a,L);k.push(se[I[0]],se[I[1]])}if(D=[...D,{placement:s,overflows:k}],!k.every(I=>I<=0)){var M,T;const I=(((M=n.flip)==null?void 0:M.index)||0)+1,F=B[I];if(F)return{data:{index:I,overflows:D},reset:{placement:F}};let R=(T=D.filter(Z=>Z.overflows[0]<=0).sort((Z,he)=>Z.overflows[1]-he.overflows[1])[0])==null?void 0:T.placement;if(!R)switch(S){case"bestFit":{var j;const Z=(j=D.map(he=>[he.placement,he.overflows.filter(C=>C>0).reduce((C,G)=>C+G,0)]).sort((he,C)=>he[1]-C[1])[0])==null?void 0:j[0];Z&&(R=Z);break}case"initialPlacement":R=o;break}if(s!==R)return{reset:{placement:R}}}return{}}}};function mp(r){const e=ss(...r.map(n=>n.left)),t=ss(...r.map(n=>n.top)),i=Ri(...r.map(n=>n.right)),s=Ri(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function pb(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>Zs(mp(s)))}const fb=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=cn(r,e),f=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),p=pb(f),g=Zs(mp(f)),S=Ch(o);function _(){if(p.length===2&&p[0].left>p[1].right&&l!=null&&h!=null)return p.find(P=>l>P.left-S.left&&l<P.right+S.right&&h>P.top-S.top&&h<P.bottom+S.bottom)||g;if(p.length>=2){if(ia(t)==="y"){const T=p[0],j=p[p.length-1],I=zi(t)==="top",F=T.top,R=j.bottom,Z=I?T.left:j.left,he=I?T.right:j.right,C=he-Z,G=R-F;return{top:F,bottom:R,left:Z,right:he,width:C,height:G,x:Z,y:F}}const P=zi(t)==="left",Y=Ri(...p.map(T=>T.right)),A=ss(...p.map(T=>T.left)),L=p.filter(T=>P?T.left===A:T.right===Y),K=L[0].top,B=L[L.length-1].bottom,se=A,k=Y,D=k-se,M=B-K;return{top:K,bottom:B,left:se,right:k,width:D,height:M,x:se,y:K}}return g}const O=await n.getElementRects({reference:{getBoundingClientRect:_},floating:i.floating,strategy:a});return s.reference.x!==O.reference.x||s.reference.y!==O.reference.y||s.reference.width!==O.reference.width||s.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function gb(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=zi(t),o=ra(t),l=ia(t)==="y",h=["left","top"].includes(a)?-1:1,f=n&&l?-1:1,p=cn(e,r);let{mainAxis:g,crossAxis:S,alignmentAxis:_}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return o&&typeof _=="number"&&(S=o==="end"?_*-1:_),l?{x:S*f,y:g*h}:{x:g*h,y:S*f}}const mb=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await gb(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},vb=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:P=>{let{x:Y,y:A}=P;return{x:Y,y:A}}},...l}=cn(r,e),h={x:t,y:i},f=await gp(e,l),p=ia(zi(s)),g=fp(p);let S=h[g],_=h[p];if(n){const P=g==="y"?"top":"left",Y=g==="y"?"bottom":"right",A=S+f[P],L=S-f[Y];S=Zl(A,S,L)}if(a){const P=p==="y"?"top":"left",Y=p==="y"?"bottom":"right",A=_+f[P],L=_-f[Y];_=Zl(A,_,L)}const O=o.fn({...e,[g]:S,[p]:_});return{...O,data:{x:O.x-t,y:O.y-i}}}}};function To(){return typeof window<"u"}function dn(r){return vp(r)?(r.nodeName||"").toLowerCase():"#document"}function kr(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function Wi(r){var e;return(e=(vp(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function vp(r){return To()?r instanceof Node||r instanceof kr(r).Node:!1}function Kr(r){return To()?r instanceof Element||r instanceof kr(r).Element:!1}function gi(r){return To()?r instanceof HTMLElement||r instanceof kr(r).HTMLElement:!1}function Rd(r){return!To()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof kr(r).ShadowRoot}function sa(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Zr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function yb(r){return["table","td","th"].includes(dn(r))}function Io(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function kh(r){const e=Ph(),t=Kr(r)?Zr(r):r;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function bb(r){let e=ns(r);for(;gi(e)&&!Js(e);){if(kh(e))return e;if(Io(e))return null;e=ns(e)}return null}function Ph(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Js(r){return["html","body","#document"].includes(dn(r))}function Zr(r){return kr(r).getComputedStyle(r)}function Uo(r){return Kr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function ns(r){if(dn(r)==="html")return r;const e=r.assignedSlot||r.parentNode||Rd(r)&&r.host||Wi(r);return Rd(e)?e.host:e}function yp(r){const e=ns(r);return Js(e)?r.ownerDocument?r.ownerDocument.body:r.body:gi(e)&&sa(e)?e:yp(e)}function Ql(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=yp(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=kr(s);if(n){const o=eh(a);return e.concat(a,a.visualViewport||[],sa(s)?s:[],o&&t?Ql(o):[])}return e.concat(s,Ql(s,[],t))}function eh(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function bp(r){const e=Zr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=gi(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=oo(t)!==n||oo(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function wp(r){return Kr(r)?r:r.contextElement}function qs(r){const e=wp(r);if(!gi(e))return fi(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=bp(e);let a=(n?oo(t.width):t.width)/i,o=(n?oo(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const wb=fi(0);function xp(r){const e=kr(r);return!Ph()||!e.visualViewport?wb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function xb(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==kr(r)?!1:e}function In(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=wp(r);let a=fi(1);e&&(i?Kr(i)&&(a=qs(i)):a=qs(r));const o=xb(n,t,i)?xp(n):fi(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,f=s.width/a.x,p=s.height/a.y;if(n){const g=kr(n),S=i&&Kr(i)?kr(i):i;let _=g,O=eh(_);for(;O&&i&&S!==_;){const P=qs(O),Y=O.getBoundingClientRect(),A=Zr(O),L=Y.left+(O.clientLeft+parseFloat(A.paddingLeft))*P.x,K=Y.top+(O.clientTop+parseFloat(A.paddingTop))*P.y;l*=P.x,h*=P.y,f*=P.x,p*=P.y,l+=L,h+=K,_=kr(O),O=eh(_)}}return Zs({width:f,height:p,x:l,y:h})}function Oh(r,e){const t=Uo(r).scrollLeft;return e?e.left+t:In(Wi(r)).left+t}function Sp(r,e,t){t===void 0&&(t=!1);const i=r.getBoundingClientRect(),s=i.left+e.scrollLeft-(t?0:Oh(r,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function Sb(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=Wi(i),o=e?Io(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=fi(1);const f=fi(0),p=gi(i);if((p||!p&&!n)&&((dn(i)!=="body"||sa(a))&&(l=Uo(i)),gi(i))){const S=In(i);h=qs(i),f.x=S.x+i.clientLeft,f.y=S.y+i.clientTop}const g=a&&!p&&!n?Sp(a,l,!0):fi(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+f.x+g.x,y:t.y*h.y-l.scrollTop*h.y+f.y+g.y}}function $b(r){return Array.from(r.getClientRects())}function _b(r){const e=Wi(r),t=Uo(r),i=r.ownerDocument.body,s=Ri(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Ri(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+Oh(r);const o=-t.scrollTop;return Zr(i).direction==="rtl"&&(a+=Ri(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function Cb(r,e){const t=kr(r),i=Wi(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=Ph();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function kb(r,e){const t=In(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=gi(r)?qs(r):fi(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function Md(r,e,t){let i;if(e==="viewport")i=Cb(r,t);else if(e==="document")i=_b(Wi(r));else if(Kr(e))i=kb(e,t);else{const s=xp(r);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Zs(i)}function $p(r,e){const t=ns(r);return t===e||!Kr(t)||Js(t)?!1:Zr(t).position==="fixed"||$p(t,e)}function Pb(r,e){const t=e.get(r);if(t)return t;let i=Ql(r,[],!1).filter(o=>Kr(o)&&dn(o)!=="body"),s=null;const n=Zr(r).position==="fixed";let a=n?ns(r):r;for(;Kr(a)&&!Js(a);){const o=Zr(a),l=kh(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||sa(a)&&!l&&$p(r,a))?i=i.filter(f=>f!==a):s=o,a=ns(a)}return e.set(r,i),i}function Ob(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?Io(e)?[]:Pb(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,f)=>{const p=Md(e,f,s);return h.top=Ri(p.top,h.top),h.right=ss(p.right,h.right),h.bottom=ss(p.bottom,h.bottom),h.left=Ri(p.left,h.left),h},Md(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ab(r){const{width:e,height:t}=bp(r);return{width:e,height:t}}function Eb(r,e,t){const i=gi(e),s=Wi(e),n=t==="fixed",a=In(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=fi(0);if(i||!i&&!n)if((dn(e)!=="body"||sa(s))&&(o=Uo(e)),i){const g=In(e,!0,n,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else s&&(l.x=Oh(s));const h=s&&!i&&!n?Sp(s,o):fi(0),f=a.left+o.scrollLeft-l.x-h.x,p=a.top+o.scrollTop-l.y-h.y;return{x:f,y:p,width:a.width,height:a.height}}function jl(r){return Zr(r).position==="static"}function Td(r,e){if(!gi(r)||Zr(r).position==="fixed")return null;if(e)return e(r);let t=r.offsetParent;return Wi(r)===t&&(t=t.ownerDocument.body),t}function _p(r,e){const t=kr(r);if(Io(r))return t;if(!gi(r)){let s=ns(r);for(;s&&!Js(s);){if(Kr(s)&&!jl(s))return s;s=ns(s)}return t}let i=Td(r,e);for(;i&&yb(i)&&jl(i);)i=Td(i,e);return i&&Js(i)&&jl(i)&&!kh(i)?t:i||bb(r)||t}const Lb=async function(r){const e=this.getOffsetParent||_p,t=this.getDimensions,i=await t(r.floating);return{reference:Eb(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Db(r){return Zr(r).direction==="rtl"}const Rb={convertOffsetParentRelativeRectToViewportRelativeRect:Sb,getDocumentElement:Wi,getClippingRect:Ob,getOffsetParent:_p,getElementRects:Lb,getClientRects:$b,getDimensions:Ab,getScale:qs,isElement:Kr,isRTL:Db},Cp=mb,Mb=vb,Tb=ub,Ib=db,Ub=fb,kp=(r,e,t)=>{const i=new Map,s={platform:Rb,...t},n={...s.platform,_c:i};return cb(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=Zn(class extends Po{constructor(r){var e;if(super(r),r.type!==Li.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return rs}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=r=>r??$;var zb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,na=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zb(e,t,s),s};let Fi=class extends Rs{constructor(){super(...arguments),this.dropdownRef=pe(),this.invokerRef=pe(),this.optionsRef=pe(),this.open="close",this.interactive="on"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){kp(this.invokerRef.value,this.optionsRef.value,{middleware:[Cp(2),Tb(),Ub(),Mb()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return d`

            <div class="dropdown" ${ve(this.dropdownRef)}>

                <thermal-button 
                    class="${Qt(r)}" 
                    ${ve(this.invokerRef)} 
                    @click=${this.toggle.bind(this)} 
                    variant="${q(this.variant)}" 
                    interactive="${this.interactive==="on"?"true":"false"}"
                    part="invoker"
                >
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?d`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:d`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};Fi.shadowRootOptions={...mr.shadowRootOptions,mode:"open"};Fi.styles=ne`

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
    
    `;na([br({slot:"option"})],Fi.prototype,"_options",2);na([c({type:String,reflect:!0})],Fi.prototype,"open",2);na([c({type:String,reflect:!0,attribute:!0}),v()],Fi.prototype,"interactive",2);na([v(),c({type:String,reflect:!0,attribute:!0})],Fi.prototype,"variant",2);Fi=na([W("thermal-dropdown")],Fi);var jb=Object.defineProperty,Nb=Object.getOwnPropertyDescriptor,zo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jb(e,t,s),s};let Qs=class extends mr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=pe(),this.contentRef=pe(),this.rulerContentRef=pe()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}disconnectedCallback(){super.disconnectedCallback(),this.drawerRef.value&&this.observer.unobserve(this.drawerRef.value),this.observer.disconnect()}render(){return d`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${ve(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${ve(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${ve(this.contentRef)}>

                    ${this.collapsed===!1?d`
                        <slot></slot>    
                    `:$}
                
                </div>

            </div>

            ${this.collapsed?d`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:$}
        
        `}};Qs.styles=ne`

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

    `;zo([v()],Qs.prototype,"collapsed",2);zo([v()],Qs.prototype,"lastContentWidth",2);zo([v()],Qs.prototype,"drawerRef",2);Qs=zo([W("thermal-bar")],Qs);const _e=r=>({fromAttribute:i=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:i=>i===!0?"true":"false"});var Hb=Object.defineProperty,Wb=Object.getOwnPropertyDescriptor,Lr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hb(e,t,s),s};const Bb="chrome"in window;let ir=class extends He{constructor(){super(...arguments),this.language=bt.language,this.fullscreen="off",this.showfullscreen=!1,this.dark=!1,this.chromiumwarning=!1,this.appRef=pe(),this.headerRef=pe(),this.contentRef=pe()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),bt.on("languageChanged",()=>{this.language=bt.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const s=t.contentRect.height;t.contentRect.width;const n=s-175;this.contentRef.value.offsetHeight<n?console.log("priorita šířky"):console.log("priorita výšky")}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){const r=Bb===!0&&this.chromiumwarning===!0;return d`

    <div class="container ${this.dark?"dark":"normal"}" ${ve(this.appRef)}>

        <header ${ve(this.headerRef)} class="app-header">
            
        ${this.barElements.length>=0?d`
            <div class="bar">

                <slot name="label">
                    ${this.label?d`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`:$}
                </slot>

                <slot name="bar"></slot>

                <slot name="close"></slot>

                
                ${this.showfullscreen===!0?d`
                    <thermal-button class="app-fullscreen-button" @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0L5.5 4.44V2.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L2.22 3.28a.75.75 0 0 1 0-1.06Zm10.5 0a.75.75 0 1 1 1.06 1.06L11.56 5.5h1.69a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 9 6.25v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22ZM2.75 9h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.22-2.22H2.75a.75.75 0 0 1 0-1.5ZM9 9.75A.75.75 0 0 1 9.75 9h3.5a.75.75 0 0 1 0 1.5h-1.69l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.69a.75.75 0 0 1-1.5 0v-3.5Z" clip-rule="evenodd" />
                            </svg>`:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd" />
                            </svg>`}
                        </div>
                    </thermal-button>
                `:$}

                <thermal-dropdown>

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(e=>d`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{bt.changeLanguage(e),this.language=e}}
                            >${Od[e].flag} ${Od[e].name}</thermal-button>
                        </div>
                    `)}
                </thermal-dropdown>
                
            </div> 
        `:""}

        ${this.preElements.length>=0?d`
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

            ${this.author||this.license||this.recorded?d`<div class="credits">

                    ${this.recorded?d`<div>
                            <div class="credits-field">${b(y.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:$}

                    ${this.author?d`<div>
                            <div class="credits-field">${b(y.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:$}

                    ${this.license?d`<div>
                            <div class="credits-field">${b(y.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:$}

                </div>`:$}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

            ${r===!0?d`<footer class="chromium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>

                    <span>Chromium-based browsers provide a slightly worse performance during the playback. Consider using <a href="https://mozilla.org/firefox" target="_blank">Firefox</a>.</span>
                </footer>`:$}

    </div>
        
        `}};ir.styles=ne`

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
    
    `;Lr([v()],ir.prototype,"language",2);Lr([br({slot:"bar",flatten:!0})],ir.prototype,"barElements",2);Lr([br({slot:"pre",flatten:!0})],ir.prototype,"preElements",2);Lr([br({slot:"content",flatten:!0})],ir.prototype,"contentElements",2);Lr([c({type:String,reflect:!0})],ir.prototype,"fullscreen",2);Lr([c({type:String,reflect:!0,attribute:!0,converter:_e(!1)})],ir.prototype,"showfullscreen",2);Lr([c({type:String,reflect:!0,attribute:!0})],ir.prototype,"dark",2);Lr([c()],ir.prototype,"author",2);Lr([c()],ir.prototype,"recorded",2);Lr([c()],ir.prototype,"license",2);Lr([c()],ir.prototype,"label",2);Lr([c({converter:_e(!1)})],ir.prototype,"chromiumwarning",2);ir=Lr([W("thermal-app")],ir);var Gb=Object.defineProperty,Vb=Object.getOwnPropertyDescriptor,Ah=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gb(e,t,s),s};let Un=class extends mr{render(){return d`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&d`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};Un.styles=ne`
    
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

    `;Ah([c({type:String})],Un.prototype,"label",2);Ah([c({type:String})],Un.prototype,"hint",2);Un=Ah([W("thermal-field")],Un);var Yb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,un=(r,e,t,i)=>{for(var s=i>1?void 0:i?qb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yb(e,t,s),s};let as=class extends He{constructor(){super(...arguments),this.loaded=!1,this.bordercolor="var(--thermal-slate)",this.bgcolor="var(--thermal-slate-light)",this.textcolor="var(--thermal-slate-dark)"}updated(r){super.updated(r),this.style.borderColor=this.bordercolor,this.style.backgroundColor=this.bgcolor,this.style.color=this.textcolor}render(){return d`
            <div class="lds-facebook" style="color: ${this.textcolor}">
                <div></div>
                <div></div>
                <div></div>
            </div>
            ${this.message?d`<div>${this.message}</div>`:$}
        `}};as.styles=ne`
    
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
    
    `;un([v()],as.prototype,"loaded",2);un([c({type:String})],as.prototype,"message",2);un([c({type:String})],as.prototype,"bordercolor",2);un([c({type:String})],as.prototype,"bgcolor",2);un([c({type:String})],as.prototype,"textcolor",2);as=un([W("thermal-loading")],as);var Xb=Object.defineProperty,Kb=Object.getOwnPropertyDescriptor,pn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xb(e,t,s),s};let ji=class extends He{render(){return $}};pn([c({type:String,reflect:!0,attribute:!0})],ji.prototype,"thermal",2);pn([c({type:String,reflect:!0,attribute:!0})],ji.prototype,"visible",2);pn([c({type:String,reflect:!0,attribute:!0})],ji.prototype,"author",2);pn([c({type:String,reflect:!0,attribute:!0})],ji.prototype,"note",2);pn([c({type:String,reflect:!0,attribute:!0})],ji.prototype,"label",2);ji=pn([W("time-entry")],ji);const Zb=new Sh;window.Thermal={managers:new Map};window.Thermal.managers.set("default",Zb);const Fo=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new Sh(void 0,e);return window.Thermal.managers.set(r,t),t}},Jb=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ho extends Po{constructor(e){if(super(e),this.it=$,e.type!==Li.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$||e==null)return this._t=void 0,this.it=e;if(e===rs)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ho.directiveName="unsafeHTML",ho.resultType=1;const Rt=Zn(ho),oc=class oc{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?$:d`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${b(y.note).toLocaleLowerCase()}</button>
            <div slot="content">${Rt(t)}</div>
        </thermal-dialog>`}renderHeaderContent(e,t,i){return i===void 0||i.trim().length===0?d`<strong>${t}</strong>`:e===!0?d`<strong>${i}</strong><span>${t}</span>`:d`<strong>${i}</strong>`}renderInstance(e,t,i,s,n){return d`<div class="file">

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
                                <file-button slot="invoker" label="${b(y.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>
                        
                        </div>

                    </div>

                    <file-canvas></file-canvas>
                    ${e.timeline.isSequence?d`<div class="timeline">
                            <file-timeline hasInfo="false" hasSpeedButton="false" hasPlayButton="false"></file-timeline>
                        </div>`:$}
                    
                    <file-analysis-overview></file-analysis-overview>

                </file-mirror>

            </article>
        
        </div>`}};oc.styles=ne`


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

    `;let zn=oc;const lc=class lc{constructor(e){this.element=e,this.instanceRenderer=new zn(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?d`
                <div class="group-header">
                
                    ${e?d`<h2 class="group-title">${e}</h2>`:$}

                    ${t?d`<p class="group-info">${t}</p>`:$}

                </div>
            `:$}renderGroup(e,t,i,s){const n=this.trimmedString(e.label),a=this.trimmedString(e.info),o={"group-files":!0,[`group-files-${t}`]:!0};return d`

            <section class="${Qt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(n,a)}

                <div class=${Qt(o)}>

                    ${e.files.map(({instance:h,innerHtml:f,label:p,time:g})=>this.instanceRenderer.renderInstance(h,g,s,p,f))}

                </div>

            </section>

        `}};lc.styles=ne`


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

    `;let co=lc,Qb=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ti)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Iu(e).getTime():this.grouping==="day"?io(e).getTime():this.grouping==="week"?Mi(e).getTime():this.grouping==="month"?no(e).getTime():this.grouping==="year"?wh(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Au(e).getTime():this.grouping==="day"?Pu(e).getTime():this.grouping==="week"?ao(e).getTime():this.grouping==="month"?so(e).getTime():this.grouping==="year"?Ou(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:$e(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:$e(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+$e(e,"w")+" of "+$e(e,"yyyy"),info:[st.humanDate(Mi(e).getTime()),st.humanDate(ao(e).getTime())].join(" - ")}:this.grouping==="month"?{label:$e(e,"MMMM yyyy"),info:[st.humanDate(no(e).getTime()),st.humanDate(so(e).getTime())].join(" - ")}:this.grouping==="year"?{label:$e(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?st.human(e):this.grouping==="hour"||this.grouping==="day"?$e(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",st.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var e0=Object.defineProperty,t0=Object.getOwnPropertyDescriptor,xr=(r,e,t,i)=>{for(var s=i>1?void 0:i?t0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&e0(e,t,s),s};let qt=class extends He{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=Fo(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new Qb(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof ji))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return d`
            <slot name="entry"></slot>

            ${this.scopeSlug?d`<manager-mirror slug=${this.scopeSlug}>

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

                `:$}

        `}};qt.styles=[zn.styles,co.styles,ne`

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
    
    `];xr([v(),br({slot:"entry",flatten:!0})],qt.prototype,"entries",2);xr([v()],qt.prototype,"groups",2);xr([v()],qt.prototype,"instances",2);xr([c()],qt.prototype,"columns",2);xr([c()],qt.prototype,"breakpoint",2);xr([c({type:Number,reflect:!0})],qt.prototype,"width",2);xr([c({type:String,reflect:!0})],qt.prototype,"grouping",2);xr([c()],qt.prototype,"name",2);xr([c()],qt.prototype,"slug",2);xr([v()],qt.prototype,"scopeSlug",2);xr([c({type:Object})],qt.prototype,"onInstanceEnter",2);xr([c({type:Object})],qt.prototype,"onInstanceLeave",2);xr([c({type:Object})],qt.prototype,"groupRenderer",2);qt=xr([W("time-group")],qt);var r0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,Ms=(r,e,t,i)=>{for(var s=i>1?void 0:i?i0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&r0(e,t,s),s};const Eh={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let Ni=class extends He{constructor(){super(...arguments),this.tRef=pe(),this.vRef=pe(),this.vunitsRef=pe(),this.haRef=pe(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),bi(this),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){const t=this[e],i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?Rt(i):i;return d`
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
                            value=${q(s)}
                            min=${q(n)}
                            max=${q(a)}
                            step=${q(o)}
                            type="number"
                            @blur=${f=>{const p=f.target,g=p.value.trim();g===""||g===void 0||g===null?this[e]=void 0:this[e]=parseFloat(p.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?d`<label for=${e}>${l}</label>`:$}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),app:r.toFixed(2),t:e},s=b(y.apparenttemperatureverbose,i),n=t<0?b(y.youfeelcolder,i):b(y.youfeelwarmer,i),a=r.toFixed(2);return d`<div class="result">

            <p class="result_label">${b(y.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${n}</p>
        
        </div>`}render(){return d`
            <thermal-app label=${b(y.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${b(y.info)}>
                    <thermal-button slot="invoker">${b(y.info)}</thermal-button>
                    <div slot="content">
                        ${Rt(b(y.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?d`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:$}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,"t",b(y.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",b(y.windspeed),d`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${ve(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",b(y.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):$}
                </div>
                

            </thermal-app>
        `}};Ni.styles=ne`

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


    `;Ms([c({type:String,reflect:!0,attribute:!0,converter:Eh})],Ni.prototype,"t",2);Ms([c({type:String,reflect:!0,attribute:!0,converter:Eh})],Ni.prototype,"v",2);Ms([c({type:String,reflect:!0,attribute:!0,converter:Eh})],Ni.prototype,"ha",2);Ms([v()],Ni.prototype,"ta",2);Ms([c({type:String,reflect:!0,attribute:!0})],Ni.prototype,"vunits",2);Ms([z({context:si}),c({reflect:!0,converter:wi})],Ni.prototype,"locale",2);Ni=Ms([W("apparent-temperature-aat")],Ni);var s0=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,a0=(r,e,t,i)=>{for(var s=i>1?void 0:i?n0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&s0(e,t,s),s};let th=class extends Rs{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return d`
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
                        <p>version ${Ys}</p>
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
        `}};th.styles=ne`

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
    
    `;th=a0([W("app-info-button")],th);const ps="pngExportWidthContext",fn="pngExportWidthSetterContext",fs="png-export-width-context",gn="png-export-width-setter-context";var o0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,aa=(r,e,t,i)=>{for(var s=i>1?void 0:i?l0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o0(e,t,s),s};let Ps=class extends He{renderRow(r,e,t){return d`<thermal-field label="${r}">
                <div>${e}</div>
                ${t||$}
            </thermal-field>`}renderSlider(r,e,t,i,s,n,a,o){const l=d`<input 
                name="${r}"
                value="${e}"
                min="${i}"
                max="${s}"
                step="${n}"
                type="range"
                @input="${f=>{const p=Math.min(s,Math.max(0,parseFloat(f.target.value)));a(p)}}"
            ></input>`,h=d`<div class="hint"><strong>${e} ${t}</strong> (${i} - ${s} ${t})${o?d`<br />${o}</div>`:$}`;return this.renderRow(r,l,h)}render(){return this.pngFs===void 0||this.pngWidth===void 0||this.pngWidthSetter===void 0||this.pngFsSetter===void 0?$:d`

        ${this.renderSlider(b(y.exportimagewidth),this.pngWidth,"px",300,2e3,50,this.pngWidthSetter.bind(this))}

        ${this.renderSlider(b(y.exportimagefontsize),this.pngFs,"px",10,50,1,this.pngFsSetter.bind(this))}
        
        `}};Ps.styles=ne`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }
        
        `;aa([v(),le({context:ps,subscribe:!0})],Ps.prototype,"pngWidth",2);aa([le({context:fn,subscribe:!0})],Ps.prototype,"pngWidthSetter",2);aa([le({context:fs,subscribe:!0})],Ps.prototype,"pngFs",2);aa([le({context:gn,subscribe:!0})],Ps.prototype,"pngFsSetter",2);Ps=aa([W("png-export-panel")],Ps);var h0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,d0=(r,e,t,i)=>{for(var s=i>1?void 0:i?c0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h0(e,t,s),s};let rh=class extends He{render(){return d`
        <thermal-field label="${b(y.filerendering)}" hint="${b(y.filerenderinghint)}">
            <manager-smooth-switch></manager-smooth-switch>
        </thermal-field>
        <thermal-field label="${b(y.graphlines)}" hint="${b(y.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `}};rh.styles=ne`
    
        :host {
            display: contents;
        }
    
    `;rh=d0([W("registry-display-panel")],rh);var u0=Object.defineProperty,p0=Object.getOwnPropertyDescriptor,jo=(r,e,t,i)=>{for(var s=i>1?void 0:i?p0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&u0(e,t,s),s};let en=class extends He{render(){return $}};jo([c({type:String})],en.prototype,"lrc",2);jo([c({type:String})],en.prototype,"png",2);jo([c({type:String})],en.prototype,"label",2);en=jo([W("thermal-file")],en);var f0=Object.defineProperty,g0=Object.getOwnPropertyDescriptor,Pp=(r,e,t,i)=>{for(var s=i>1?void 0:i?g0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&f0(e,t,s),s};let uo=class extends He{render(){return d`<slot></slot>`}};Pp([c()],uo.prototype,"name",2);uo=Pp([W("thermal-group")],uo);var m0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,rr=(r,e,t,i)=>{for(var s=i>1?void 0:i?v0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&m0(e,t,s),s};let jt=class extends He{constructor(){super(...arguments),this.label="Gallery of IR images",this.palette="jet",this.state="main",this.registryRef=pe(),this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r},this.columns=3}connectedCallback(){super.connectedCallback(),bi(this),this.addEventListener("slotchange",()=>{this.processSlots()})}firstUpdated(r){var e;super.firstUpdated(r),this.processSlots(),this.resetRegistry(),this.registryRef.value&&((e=this.registryRef.value)==null||e.registry.palette.setPalette(this.palette),this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{this.registryRef.value&&this.registryRef.value.registry.range.applyMinmax()}),this.registryRef.value.registry.groups.addListener(this.UUID,()=>{this.registryRef.value&&this.registryRef.value.registry.range.applyMinmax()}))}processSlots(){setTimeout(()=>{this.structure=this.slottedElements.filter(r=>r instanceof uo).map(r=>({label:r.getAttribute("label"),description:r.getAttribute("description"),lat:r.getAttribute("lat"),lon:r.getAttribute("lon"),files:Array.from(r.children).filter(e=>e instanceof en&&e.hasAttribute("lrc")).map(e=>({lrc:e.getAttribute("lrc"),png:e.getAttribute("png"),label:e.getAttribute("label")}))})).filter(r=>r.files.length>0)},1e3)}actionMainOpen(){this.state="main",this.resetRegistry(),setTimeout(()=>{this.group=void 0,this.file=void 0},0)}actionGroupOpen(r){this.resetRegistry(),setTimeout(()=>{this.group=r,this.columns=Math.min(4,r.files.length),r.files.length>1?this.state="group":(this.state="file",this.file=r.files[0])},0)}actionDetailOpen(r){if(this.group===void 0)throw new Error("Group not yet set");this.state="file",this.resetRegistry(),setTimeout(()=>{this.file=r},0)}actionDetailClose(){this.state="group",this.resetRegistry(),setTimeout(()=>{this.file=void 0},0)}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.forEveryInstance(r=>r.unmountFromDom()),this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var r;(r=this.registryRef.value)==null||r.registry.range.applyMinmax()}))}renderMain(){if(this.structure===void 0)return d`<thermal-loading label="Načítám data"></thermal-loading>`;const e=this.structure.map(t=>{const{files:i,...s}=t;return{...s,file:i[0],group:t}}).map((t,i)=>{const s=t.label??`group_preview_${i}`;return d`<group-provider slug="${s}" autoclear="true">
                <button class="group-thumbnail" @click="${()=>this.actionGroupOpen(t.group)}">
                    <div class="header">
                        <div class="info">
                            <div class="title">${t.label}</div>
                            <div class="count">${b(y.numfiles,{num:t.group.files.length})}</div>
                        </div>
                        <div class="button">
                            ${t.group.files.length>1?d`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>`:d`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>`}
                        </div>
                    </div>
                    <file-provider thermal="${t.file.lrc}" batch="true" autoclear="true">
                        <file-canvas></file-canvas>
                    </file-provider>
                </button>
            </group-provider>`});return d`
            <div class="main">
                ${e}
            </div>
        `}renderGroup(){return this.structure===void 0||this.group===void 0?d`<thermal-loading></thermal-loading`:this.renderBrowser(d`
            <group-provider slug="${this.group.label??`group_detail_${Math.random()}`}" autoclear="true">

                <group-chart slot="pre"></group-chart>

                <header>

                    <thermal-button variant="foreground" @click="${()=>this.actionMainOpen()}">x</thermal-button>

                    <thermal-dropdown>
                        <span slot="invoker">${this.group.label}</span>
                        ${this.structure.filter(r=>{var e;return r.label!==((e=this.group)==null?void 0:e.label)}).map(r=>d`<div slot="option">
                                <thermal-button @click="${()=>this.actionGroupOpen(r)}">${r.label}</thermal-button>
                            </div>`)}
                    </thermal-dropdown>

                    <group-download-dropdown></group-download-dropdown>

                    <div>
                        <input type="range" min="1" max="4" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>
                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${b(y.columns,{num:this.columns})}</div>
                    </div>
                    
                    <group-analysis-sync-button></group-analysis-sync-button>

                </header>

                ${this.group.description?d`<section class="group-description">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p>${this.group.description}</p>
                    </section>`:$}

                <section class="files columns_${this.columns}">
            
                    ${this.group.files.map(r=>d`<file-provider thermal="${r.lrc}" batch="true" autoclear="true">
                        <file-thumbnail .ondetail="${()=>this.actionDetailOpen(r)}"></file-thumbnail>
                    </file-provider>`)}
            
                </section>

            </group-provider>
        `)}renderFile(){return this.structure===void 0||this.group===void 0||this.file===void 0?d`<thermal-loading></thermal-loading`:this.renderBrowser(d`<group-provider slug="${this.file.lrc}" autoclear="true">

            <file-provider batch="true" autoclear="true" thermal="${this.file.lrc}">
                <file-detail label="${this.group.label}" .onback="${()=>{var r;((r=this.group)==null?void 0:r.files.length)===1?this.actionMainOpen():this.actionDetailClose()}}"></file-detail>
            </file-provider>

        </group-provider>`)}renderBrowser(r){return d`<div class="browser state_${this.state}">
            <section>
                <group-tool-bar></group-tool-bar>
            </section>
            <section>
                ${r}
            </section>
        </div>`}render(){return d`<manager-provider slug="${this.UUID}">
            <registry-provider slug="${this.UUID}" ${ve(this.registryRef)} palette="${this.palette}">
                <thermal-app author="${q(this.author)}" license="${this.license}" showfullscreen="true">

                    <thermal-button variant="foreground" slot="label" @click="${()=>this.actionMainOpen()}">${this.label}</thermal-button>

                    ${this.structure!==void 0?d`
                        <registry-histogram slot="pre" expandable="true"></registry-histogram>
                        <registry-range-slider slot="pre"></registry-range-slider>
                        <registry-ticks-bar slot="pre"></registry-ticks-bar>
                        `:$}

                    <div slot="bar" style="flex-grow: 4;">
                        <thermal-bar>
                            <registry-palette-dropdown></registry-palette-dropdown>
                            <registry-range-full-button></registry-range-full-button>
                            <registry-range-auto-button></registry-range-auto-button>
                        </thermal-bar>
                    </div>

                    <thermal-dialog label="${b(y.config)}" slot="close">
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

                    ${this.state==="main"?this.renderMain():$}
                    ${this.state==="group"?this.renderGroup():$}
                    ${this.state==="file"?this.renderFile():$}

                    <slot></slot>


                </thermal-app>
            </registry-provider>
        </manager-provider>`}};jt.styles=ne`
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
    `;rr([c({type:String,reflect:!0})],jt.prototype,"author",2);rr([c({type:String,reflect:!0})],jt.prototype,"label",2);rr([c({type:String,reflect:!0})],jt.prototype,"license",2);rr([c({type:String,reflect:!0,attribute:!0})],jt.prototype,"palette",2);rr([v(),br({flatten:!0})],jt.prototype,"slottedElements",2);rr([v()],jt.prototype,"structure",2);rr([v()],jt.prototype,"state",2);rr([v()],jt.prototype,"group",2);rr([v()],jt.prototype,"file",2);rr([z({context:ps})],jt.prototype,"pngExportWidth",2);rr([z({context:fn})],jt.prototype,"pngExportWidthSetterContext",2);rr([z({context:fs})],jt.prototype,"pngExportFs",2);rr([z({context:gn})],jt.prototype,"pngExportFsSetterContext",2);rr([z({context:si}),c({reflect:!0,converter:wi})],jt.prototype,"locale",2);rr([v()],jt.prototype,"columns",2);jt=rr([W("thermal-gallery-app")],jt);const Lh="manager-instance",oa="manager-palette-context",Dh="manager-smooth-context",No="manager-graph-function-context",la="tool-context",ha="tools-context";var y0=Object.defineProperty,Op=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&y0(e,t,s),s};class Ho extends Rs{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:pi.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=Fo(this.slug,e);this.manager=i,this.tool=this.manager.tool.value,this.tools=this.manager.tool.tools}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&Jb(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t}),this.manager.tool.addListener(this.UUIDManagerListeners,t=>{this.tool=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(pi).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:pi[e]}}render(){return d`<slot></slot>`}}Op([z({context:la})],Ho.prototype,"tool");Op([z({context:ha})],Ho.prototype,"tools");var b0=Object.defineProperty,w0=Object.getOwnPropertyDescriptor,Bi=(r,e,t,i)=>{for(var s=i>1?void 0:i?w0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&b0(e,t,s),s};let mi=class extends Ho{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:pi.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Bi([z({context:Lh})],mi.prototype,"manager",2);Bi([c({type:String,reflect:!0,attribute:!0})],mi.prototype,"slug",2);Bi([z({context:oa}),c({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:pi[r]}),toAttribute:r=>r.key.toString()}})],mi.prototype,"palette",2);Bi([z({context:Dh}),c({type:String,reflect:!0,attribute:!0})],mi.prototype,"smooth",2);Bi([z({context:No}),c({type:String,reflect:!0,attribute:!0})],mi.prototype,"graphSmooth",2);Bi([c({type:Boolean,reflect:!0})],mi.prototype,"autoclear",2);Bi([z({context:la})],mi.prototype,"tool",2);Bi([z({context:ha})],mi.prototype,"tools",2);mi=Bi([W("manager-provider")],mi);var x0=Object.defineProperty,S0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&x0(e,t,s),s};class Ts extends Rs{connectedCallback(){super.connectedCallback(),this.manager}}S0([le({context:Lh,subscribe:!0}),v()],Ts.prototype,"manager");const Rh="registry-instance",Mh="registry-opacity",Wo="registry-range-from",Bo="registry-range-to",Ap="registry-loading",Th="registry-min",Ih="registry-max",Ep="registry-highlight",ca="registry-highlight-setter";var $0=Object.defineProperty,Lp=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&$0(e,t,s),s};class Go extends Ts{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return d`<slot></slot>`}}Lp([z({context:Ep})],Go.prototype,"highlight");Lp([z({context:ca})],Go.prototype,"setHighlight");var _0=Object.defineProperty,C0=Object.getOwnPropertyDescriptor,xi=(r,e,t,i)=>{for(var s=i>1?void 0:i?C0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_0(e,t,s),s};let Jr=class extends Go{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};xi([c({type:String,reflect:!0,attribute:!0})],Jr.prototype,"slug",2);xi([z({context:Rh})],Jr.prototype,"registry",2);xi([z({context:Mh}),c({type:Number,reflect:!0,attribute:!0})],Jr.prototype,"opacity",2);xi([z({context:Th}),v()],Jr.prototype,"min",2);xi([z({context:Ih}),v()],Jr.prototype,"max",2);xi([z({context:Wo}),c({type:Number,reflect:!0,attribute:!0})],Jr.prototype,"from",2);xi([z({context:Bo}),c({type:Number,reflect:!0,attribute:!0})],Jr.prototype,"to",2);xi([z({context:Ap}),c({type:String,reflect:!0,attribute:!0})],Jr.prototype,"loading",2);xi([c({type:Boolean,reflect:!0})],Jr.prototype,"autoclear",2);Jr=xi([W("registry-provider")],Jr);var k0=Object.defineProperty,P0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&k0(e,t,s),s};class Dr extends Ts{connectedCallback(){super.connectedCallback(),this.registry}}P0([le({context:Rh,subscribe:!0})],Dr.prototype,"registry");class Dp extends Dr{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug)}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return d`<slot></slot>`}}const Uh="group-instance";var O0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,Vo=(r,e,t,i)=>{for(var s=i>1?void 0:i?A0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&O0(e,t,s),s};let Fn=class extends Dp{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Vo([c({type:String,attribute:!0,reflect:!0})],Fn.prototype,"slug",2);Vo([z({context:Uh})],Fn.prototype,"group",2);Vo([c({type:Boolean,reflect:!0})],Fn.prototype,"autoclear",2);Fn=Vo([W("group-provider")],Fn);var E0=Object.defineProperty,L0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&E0(e,t,s),s};class Si extends Dr{constructor(){super()}connectedCallback(){super.connectedCallback()}}L0([le({context:Uh,subscribe:!0})],Si.prototype,"group");const zh="file",Rp="failure",Mp="file-loading",D0="file-loaded",Yo="file-provider-element",qo="file-ms-context",Fh="file-cursor",Tp="file-cursor-setter",da="playback",jh="duration",Xo="playing",Nh="playbackSpeed",Hh="recording",Ip="mayStop",R0="analysislist",Wh="file-markers-context";var M0=Object.defineProperty,lr=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&M0(e,t,s),s};class Wt extends Si{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.speed=1,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new te,this.onSuccess=new te,this.onFailure=new te,this.onInstanceCreated=new te}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!=null&&i.trim().length>0)if(e.slots.hasSlot(t)){const s=e.slots.getSlot(t);s==null||s.recieveSerialized(i),s==null||s.analysis.setSelected(!1,!0)}else{const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return d`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}lr([z({context:zh}),v()],Wt.prototype,"file");lr([z({context:Rp}),v()],Wt.prototype,"failure");lr([z({context:Mp}),v()],Wt.prototype,"loading");lr([z({context:D0})],Wt.prototype,"ready");lr([z({context:jh}),v()],Wt.prototype,"duration");lr([z({context:da})],Wt.prototype,"currentFrame");lr([z({context:Fh})],Wt.prototype,"cursor");lr([z({context:qo})],Wt.prototype,"ms");lr([z({context:Nh})],Wt.prototype,"speed");lr([z({context:Hh})],Wt.prototype,"recording");lr([z({context:Xo})],Wt.prototype,"playing");lr([z({context:Ip}),v()],Wt.prototype,"mayStop");lr([br({slot:"mark",flatten:!0})],Wt.prototype,"marksQueriedInternally");lr([z({context:Wh})],Wt.prototype,"marksProvidedBelow");lr([z({context:R0})],Wt.prototype,"analysis");var T0=Object.defineProperty,I0=Object.getOwnPropertyDescriptor,Xt=(r,e,t,i)=>{for(var s=i>1?void 0:i?I0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&T0(e,t,s),s};let Nt=class extends Wt{constructor(){super(...arguments),this.keepinitialhistogram=!1,this.ms=0,this.speed=1,this.providedSelf=this,this.recording=!1,this.playing=!1}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Ii?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async redraw(){this.loading=!0,this.onLoadingStart.call(),this.file&&this.removeInstance(this.file),await this.load()}async asyncLoadCallback(r){r instanceof ta?(this.file!==void 0&&(this.file.unmountFromDom(),delete this.file),this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof Ti&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};Xt([c({type:Boolean,reflect:!0,converter:_e(!1)})],Nt.prototype,"keepinitialhistogram",2);Xt([c({type:Number,reflect:!0,attribute:!0}),z({context:qo})],Nt.prototype,"ms",2);Xt([c({type:Number,reflect:!0,attribute:!0}),z({context:Nh})],Nt.prototype,"speed",2);Xt([z({context:Yo})],Nt.prototype,"providedSelf",2);Xt([c({type:String,reflect:!0,attribute:!0}),z({context:Hh})],Nt.prototype,"recording",2);Xt([c({type:String,reflect:!0,attribute:!0}),z({context:Xo})],Nt.prototype,"playing",2);Xt([c({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Nt.prototype,"batch",2);Xt([c({type:String,attribute:!0,reflect:!0})],Nt.prototype,"thermal",2);Xt([c({type:String,attribute:!0,reflect:!0})],Nt.prototype,"visible",2);Xt([c({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis1",2);Xt([c({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis2",2);Xt([c({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis3",2);Xt([c({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis4",2);Xt([c({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis5",2);Xt([c({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis6",2);Xt([c({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis7",2);Nt=Xt([W("file-provider")],Nt);var U0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,mn=(r,e,t,i)=>{for(var s=i>1?void 0:i?z0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&U0(e,t,s),s};let os=class extends Wt{constructor(){super(...arguments),this.providedSelf=this,this.container=pe(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof Ii){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Ti&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return d`

                    <div class="container">
                        <div ${ve(this.container)} class="${Qt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${ip.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return d`
            ${this.ready?d`<slot></slot>`:$}
            <slot name="mark"></slot>
        `}};os.styles=ne`

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
    
    `;mn([z({context:Yo})],os.prototype,"providedSelf",2);mn([v()],os.prototype,"container",2);mn([v()],os.prototype,"ready",2);mn([v()],os.prototype,"hover",2);mn([v()],os.prototype,"listener",2);os=mn([W("file-dropin")],os);const Id="[a-fA-F\\d:]",Qi=r=>r&&r.includeBoundaries?`(?:(?<=\\s|^)(?=${Id})|(?<=${Id})(?=\\s|$))`:"",Xr="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",At="[a-fA-F\\d]{1,4}",Ko=`
(?:
(?:${At}:){7}(?:${At}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${At}:){6}(?:${Xr}|:${At}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${At}:){5}(?::${Xr}|(?::${At}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${At}:){4}(?:(?::${At}){0,1}:${Xr}|(?::${At}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${At}:){3}(?:(?::${At}){0,2}:${Xr}|(?::${At}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${At}:){2}(?:(?::${At}){0,3}:${Xr}|(?::${At}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${At}:){1}(?:(?::${At}){0,4}:${Xr}|(?::${At}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${At}){0,5}:${Xr}|(?::${At}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),F0=new RegExp(`(?:^${Xr}$)|(?:^${Ko}$)`),j0=new RegExp(`^${Xr}$`),N0=new RegExp(`^${Ko}$`),Bh=r=>r&&r.exact?F0:new RegExp(`(?:${Qi(r)}${Xr}${Qi(r)})|(?:${Qi(r)}${Ko}${Qi(r)})`,"g");Bh.v4=r=>r&&r.exact?j0:new RegExp(`${Qi(r)}${Xr}${Qi(r)}`,"g");Bh.v6=r=>r&&r.exact?N0:new RegExp(`${Qi(r)}${Ko}${Qi(r)}`,"g");function H0(r){const e=(...t)=>r(...t);return Object.defineProperty(e,"name",{value:`functionTimeout(${r.name||"<anonymous>"})`,configurable:!0}),e}const{toString:W0}=Object.prototype;function B0(r){return W0.call(r)==="[object RegExp]"}const Ud={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function G0(r,e={}){if(!B0(r))throw new TypeError("Expected a RegExp instance");const t=Object.keys(Ud).map(s=>(typeof e[s]=="boolean"?e[s]:r[s])?Ud[s]:"").join(""),i=new RegExp(e.source||r.source,t);return i.lastIndex=typeof e.lastIndex=="number"?e.lastIndex:r.lastIndex,i}function V0(r,e,{timeout:t}={}){try{return H0(()=>G0(r).test(e),{timeout:t})()}catch(i){throw i}}const Y0=15,q0={timeout:400};function X0(r){return r.length>Y0?!1:V0(Bh.v4({exact:!0}),r,q0)}class K0 extends Error{constructor(e){super("Could not get the public IP address",e),this.name="IpNotFoundError"}}class Up extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}const Z0={timeout:5e3},J0={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},Q0=(r,e,t)=>{const i=new XMLHttpRequest;let s;const n=new Promise((a,o)=>{s=o,i.addEventListener("error",o,{once:!0}),i.addEventListener("timeout",o,{once:!0}),i.addEventListener("load",()=>{const l=i.responseText.trim();if(!l||!X0(l)){o();return}a(l)},{once:!0}),i.open("GET",r),i.timeout=e.timeout,i.send()});return n.cancel=()=>{i.abort(),s(new Up)},n},e1=(r,e)=>{let t;const i=async function(){const s=[...J0[r],...e.fallbackUrls??[]];let n;for(const a of s)try{return t=Q0(a,e,r),await t}catch(o){if(n=o,o instanceof Up)throw o}throw new K0({cause:n})}();return i.cancel=()=>{t.cancel()},i};function zp(r){return e1("v4",{...Z0,...r})}var t1=Object.defineProperty,r1=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&t1(e,t,s),s};class Gh extends Si{connectedCallback(){super.connectedCallback(),zp().then(e=>this.ip=e)}emitUpload(e,t){const i=window.navigator.userAgent,s=window.innerWidth,n=window.innerHeight,a=new Date().getTime(),o=new CustomEvent("uploaded",{bubbles:!0,cancelable:!1,detail:{ip:this.ip,userAgent:i,windowWidth:s,windowHeight:n,time:a,fileName:e,fileSize:t}});this.dispatchEvent(o)}}r1([v()],Gh.prototype,"ip");var i1=Object.defineProperty,s1=Object.getOwnPropertyDescriptor,Zo=(r,e,t,i)=>{for(var s=i>1?void 0:i?s1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&i1(e,t,s),s};let tn=class extends Gh{constructor(){super(...arguments),this.container=pe(),this.hover=!1,this.uploading=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(e){if(super.firstUpdated(e),this.container.value!==void 0){const t=this.manager.service.handleDropzone(this.container.value,!1);t.onMouseEnter.add(this.UUID,()=>{console.log("mouseenter"),this.hover=!0}),t.onMouseLeave.add(this.UUID,()=>{console.log("mouseleave"),this.hover=!1}),t.onDrop.set(this.UUID,()=>{this.uploading=!0}),t.onProcessingEnd.add(this.UUID,async i=>{await Promise.all(i.map(async s=>{if(s instanceof Ii){const n=await s.createInstance(this.group);this.emitUpload(n.fileName,n.bytesize)}})),this.uploading=!1})}}render(){const e={dropin:!0,hover:this.hover,uploading:this.uploading};return d`

            <div class="container" ${ve(this.tourableElementRef)}>
            
                <div ${ve(this.container)} class="${Qt(e)}">

                    <div class="dropin-gradient"></div>

                    <div class="dropin-content">
                        <div>${b(y.dragorselectfile)}</div>
                        <thermal-button variant="foreground">${b(y.selectfile)}</thermal-button>
                    </div>

                    <div class="dropin-uploading">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                
                </div>

            </div>

            <slot name="tour"></slot>
        
        `}};tn.styles=ne`

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

    `;Zo([v()],tn.prototype,"container",2);Zo([v()],tn.prototype,"hover",2);Zo([v()],tn.prototype,"uploading",2);tn=Zo([W("group-dropin")],tn);var n1=Object.defineProperty,a1=Object.getOwnPropertyDescriptor,Jo=(r,e,t,i)=>{for(var s=i>1?void 0:i?a1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&n1(e,t,s),s};let rn=class extends Gh{constructor(){super(...arguments),this.container=pe(),this.hover=!1,this.uploading=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.listener=this.manager.service.handleDropzone(this.container.value,!1),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1}),this.listener.onDrop.set(this.UUID,()=>{this.uploading=!0}),this.listener.onProcessingEnd.add(this.UUID,async e=>{this.group.files.removeAllInstances(),await Promise.all(e.map(async t=>{if(t instanceof Ii){const i=await t.createInstance(this.group);this.emitUpload(i.fileName,i.bytesize)}})),this.uploading=!1}))}render(){const r=this.uploading===!1?b(y.uploadafile):d`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`;return d`


            <thermal-button @click="${()=>{this.listener&&this.listener.openFileDialog(!1)}}"><slot>${r}</slot></thermal-button>

            <div class="container" ${ve(this.tourableElementRef)}>
            
                <div ${ve(this.container)}></div>

            </div>

            <slot name="tour"></slot>
        
        `}};rn.styles=ne`

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


    
    `;Jo([v()],rn.prototype,"container",2);Jo([v()],rn.prototype,"hover",2);Jo([v()],rn.prototype,"uploading",2);rn=Jo([W("group-dropin-input")],rn);var o1=Object.defineProperty,l1=Object.getOwnPropertyDescriptor,Gi=(r,e,t,i)=>{for(var s=i>1?void 0:i?l1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o1(e,t,s),s};let vi=class extends Ho{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:pi.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Gi([z({context:Lh})],vi.prototype,"manager",2);Gi([c({type:String})],vi.prototype,"slug",2);Gi([z({context:oa}),c({type:String,converter:{fromAttribute:r=>({key:r,data:pi[r]}),toAttribute:r=>r.key.toString()}})],vi.prototype,"palette",2);Gi([z({context:Dh}),c({type:String})],vi.prototype,"smooth",2);Gi([z({context:No}),c({type:String})],vi.prototype,"graphSmooth",2);Gi([c({type:Boolean})],vi.prototype,"autoclear",2);Gi([z({context:la})],vi.prototype,"tool",2);Gi([z({context:ha})],vi.prototype,"tools",2);vi=Gi([W("manager-mirror")],vi);var h1=Object.defineProperty,c1=Object.getOwnPropertyDescriptor,$i=(r,e,t,i)=>{for(var s=i>1?void 0:i?c1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h1(e,t,s),s};let Qr=class extends Go{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};$i([c({type:String,reflect:!0,attribute:!0})],Qr.prototype,"slug",2);$i([z({context:Rh})],Qr.prototype,"registry",2);$i([z({context:Mh}),c({type:Number,reflect:!0,attribute:!0})],Qr.prototype,"opacity",2);$i([z({context:Th}),v()],Qr.prototype,"min",2);$i([z({context:Ih}),v()],Qr.prototype,"max",2);$i([z({context:Wo}),c({type:Number})],Qr.prototype,"from",2);$i([z({context:Bo}),c({type:Number})],Qr.prototype,"to",2);$i([z({context:Ap}),c({type:String})],Qr.prototype,"loading",2);$i([c({type:Boolean})],Qr.prototype,"autoclear",2);Qr=$i([W("registry-mirror")],Qr);var d1=Object.defineProperty,u1=Object.getOwnPropertyDescriptor,Qo=(r,e,t,i)=>{for(var s=i>1?void 0:i?u1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&d1(e,t,s),s};let jn=class extends Dp{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Qo([c({type:String})],jn.prototype,"slug",2);Qo([z({context:Uh})],jn.prototype,"group",2);Qo([c({type:Boolean})],jn.prototype,"autoclear",2);jn=Qo([W("group-mirror")],jn);var p1=Object.defineProperty,f1=Object.getOwnPropertyDescriptor,Rr=(r,e,t,i)=>{for(var s=i>1?void 0:i?f1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&p1(e,t,s),s};let vr=class extends Wt{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};Rr([z({context:Yo})],vr.prototype,"providedSelf",2);Rr([z({context:zh}),c()],vr.prototype,"file",2);Rr([c({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],vr.prototype,"batch",2);Rr([c({type:String})],vr.prototype,"thermal",2);Rr([c({type:String})],vr.prototype,"visible",2);Rr([c({type:String})],vr.prototype,"analysis1",2);Rr([c({type:String})],vr.prototype,"analysis2",2);Rr([c({type:String})],vr.prototype,"analysis3",2);Rr([c({type:String})],vr.prototype,"analysis4",2);Rr([c({type:String})],vr.prototype,"analysis5",2);Rr([c({type:String})],vr.prototype,"analysis6",2);Rr([c({type:String})],vr.prototype,"analysis7",2);vr=Rr([W("file-mirror")],vr);var g1=Object.defineProperty,m1=Object.getOwnPropertyDescriptor,Fp=(r,e,t,i)=>{for(var s=i>1?void 0:i?m1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&g1(e,t,s),s};let po=class extends Dr{constructor(){super(...arguments),this.tourableElemtnRef=pe()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return d`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return d`

            <thermal-dropdown variant="foreground" ${ve(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(pi).map(([r,e])=>d`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};po.styles=ne`

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

    `;Fp([le({context:oa,subscribe:!0})],po.prototype,"value",2);po=Fp([W("registry-palette-dropdown")],po);var v1=Object.defineProperty,y1=Object.getOwnPropertyDescriptor,jp=(r,e,t,i)=>{for(var s=i>1?void 0:i?y1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&v1(e,t,s),s};let fo=class extends Dr{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return d`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${b(y.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return d`
            <div class="container" ${ve(this.tourableElementRef)}>
                ${Object.entries(pi).map(([r,e])=>d`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};fo.styles=ne`

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

    `;jp([le({context:oa,subscribe:!0}),v()],fo.prototype,"value",2);fo=jp([W("registry-palette-buttons")],fo);var b1=Object.defineProperty,w1=Object.getOwnPropertyDescriptor,Np=(r,e,t,i)=>{for(var s=i>1?void 0:i?w1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&b1(e,t,s),s};let go=class extends Ts{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return d`

            <div ${ve(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.smooth.setSmooth(!1)}
                >${b(y.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.smooth.setSmooth(!0)}
                >${b(y.smooth)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};go.styles=ne`
    
        :host {}

    `;Np([le({context:Dh,subscribe:!0})],go.prototype,"smooth",2);go=Np([W("manager-smooth-switch")],go);var x1=Object.defineProperty,S1=Object.getOwnPropertyDescriptor,Hp=(r,e,t,i)=>{for(var s=i>1?void 0:i?S1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&x1(e,t,s),s};let mo=class extends Ts{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return d`

            <div ${ve(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${b(y.straightlines)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${b(y.smoothlines)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};mo.styles=ne`
    
        :host {}

    `;Hp([le({context:No,subscribe:!0})],mo.prototype,"smooth",2);mo=Hp([W("manager-graph-smooth-switch")],mo);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ih extends ho{}ih.directiveName="unsafeSVG",ih.resultType=2;const Vh=Zn(ih);var $1=Object.defineProperty,_1=Object.getOwnPropertyDescriptor,vn=(r,e,t,i)=>{for(var s=i>1?void 0:i?_1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$1(e,t,s),s};let ls=class extends Ts{constructor(){super(...arguments),this.tourableElementRef=pe(),this.showhint=!0,this.showpopup=!1}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.manager.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.manager.tool.selectTool(e)}render(){return this.manager===void 0?$:d`
                <div class="switchers" ${ve(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:this.value!==void 0?t.key===this.value.key:!1};return d`
                        
                        <button 
                            class=${Qt(i)} 
                            @click=${()=>{this.manager.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Vh(t.icon)}

                            ${this.showpopup===!0?d`<div>${b(y[t.name])}</div>`:$}

                        </button>
                        
                    `})}
                </div>

                ${this.showhint===!0?d` <div class="current">
                        <div class="tool-description">${b(y[this.hint])}</div>
                    </div>`:$}

                <slot name="tour"></slot>
        `}};ls.styles=ne`

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

    `;vn([le({context:la,subscribe:!0}),v()],ls.prototype,"value",2);vn([le({context:ha,subscribe:!0}),v()],ls.prototype,"tools",2);vn([v()],ls.prototype,"hint",2);vn([c({type:String,reflect:!0,converter:_e(!1)})],ls.prototype,"showhint",2);vn([c({reflect:!0,converter:_e(!1)})],ls.prototype,"showpopup",2);ls=vn([W("group-tool-buttons")],ls);var C1=Object.defineProperty,k1=Object.getOwnPropertyDescriptor,Yh=(r,e,t,i)=>{for(var s=i>1?void 0:i?k1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&C1(e,t,s),s};let Nn=class extends Ts{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.manager.tool.selectTool(r)}render(){return this.manager===void 0?$:d`

            <aside ${ve(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return d`
                        <div class="item">
                            <button 
                                class=${Qt(t)} 
                                @click=${()=>{this.manager.tool.selectTool(e)}}
                            >
                                ${Vh(e.icon)}
                            </button>
                            <div class="tooltip">${b(y[e.name])}</div>
                        </div>
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};Nn.styles=ne`

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

    `;Yh([le({context:la,subscribe:!0}),v()],Nn.prototype,"value",2);Yh([le({context:ha,subscribe:!0}),v()],Nn.prototype,"tools",2);Nn=Yh([W("group-tool-bar")],Nn);var P1=Object.defineProperty,O1=Object.getOwnPropertyDescriptor,Wp=(r,e,t,i)=>{for(var s=i>1?void 0:i?O1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&P1(e,t,s),s};let vo=class extends Dr{constructor(){super(...arguments),this.containerRef=pe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return d`
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
        `}};vo.styles=ne`

        :host {
        }

        .thermal-opacity-handler {
            display: block;
            width: 100%;
            max-width: 100px;
            cursor: pointer;
            accent-color: var(--thermal-slate);
            
        }
        
        .thermal-opacity-container {
            display: flex;
            width: 100%;
            align-items: space-between;
            justify-content: space-between;
            color: var( --thermal-slate-dark );
            font-size: calc( var( --thermal-fs-sm ) * .7 );
            max-width: 100px;
        }
    
    `;Wp([le({context:Mh,subscribe:!0})],vo.prototype,"value",2);vo=Wp([W("registry-opacity-slider")],vo);var A1=Object.defineProperty,E1=Object.getOwnPropertyDescriptor,L1=(r,e,t,i)=>{for(var s=i>1?void 0:i?E1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&A1(e,t,s),s};let zd=class extends Dr{constructor(){super(...arguments),this.buttonRef=pe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return d`
            <thermal-button ${ve(this.buttonRef)} @click=${this.doAction}>${b(y.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};zd=L1([W("registry-range-auto-button")],zd);var D1=Object.defineProperty,R1=Object.getOwnPropertyDescriptor,Bp=(r,e,t,i)=>{for(var s=i>1?void 0:i?R1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&D1(e,t,s),s};let sh=class extends Dr{constructor(){super(...arguments),this.buttonRef=pe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return d`
            <thermal-button 
                ${ve(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${b(y.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};Bp([le({context:ca,subscribe:!0})],sh.prototype,"setter",2);sh=Bp([W("registry-range-full-button")],sh);var M1=Object.defineProperty,T1=Object.getOwnPropertyDescriptor,ua=(r,e,t,i)=>{for(var s=i>1?void 0:i?T1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&M1(e,t,s),s};let ei=class extends Dr{constructor(){super(...arguments),this.ticksRef=pe(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=pe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.ticksRef.value&&this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/ei.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return d`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${ve(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${ve(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?d`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:$}

                    ${this.ticks.map(t=>d`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(ei.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};ei.TICK_WIDTH=40;ei.TICK_FIXED=2;ei.styles=ne`

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


    `;ua([le({context:Ep,subscribe:!0})],ei.prototype,"highlight",2);ua([c({type:String,reflect:!0})],ei.prototype,"placement",2);ua([v()],ei.prototype,"minmax",2);ua([v()],ei.prototype,"ticks",2);ei=ua([W("registry-ticks-bar")],ei);var I1=Object.defineProperty,U1=Object.getOwnPropertyDescriptor,pa=(r,e,t,i)=>{for(var s=i>1?void 0:i?U1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&I1(e,t,s),s};let sn=class extends Dr{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return d`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return d`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};pa([v()],sn.prototype,"minmax",2);pa([v()],sn.prototype,"range",2);pa([v()],sn.prototype,"opacity",2);pa([v()],sn.prototype,"palette",2);sn=pa([W("registry-log")],sn);(()=>{var r=Object.defineProperty,e=Math.pow,t=(m,x,U)=>x in m?r(m,x,{enumerable:!0,configurable:!0,writable:!0,value:U}):m[x]=U,i=(m,x,U)=>(t(m,typeof x!="symbol"?x+"":x,U),U),s=(m,x)=>` ${x&&x.length>0?x.map(U=>`<link rel="stylesheet" href="${U}" />`).join(""):""} <style> ${m} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",f="data",p="min",g="max",S="step",_="round",O="type",P="theme",Y="rtl",A="btt",L="disabled",K="keyboard-disabled",B="mousewheel-disabled",se="slider-width",k="slider-height",D="slider-radius",M="slider-bg",T="slider-bg-hover",j="slider-bg-fill",I="pointer-width",F="pointer-height",R="pointer-radius",Z="pointer-bg",he="pointer-bg-hover",C="pointer-bg-focus",G="pointer-shadow",fe="pointer-shadow-hover",ae="pointer-shadow-focus",Le="pointer-border",Xe="pointer-border-hover",at="pointer-border-focus",ct="animate-onclick",ce="css-links",ge="vertical",Ee="horizontal",je=(m,x,U,E,oe)=>{let Se=x-m;return Se===0?U:(E-U)*(oe-m)/Se+U},ot=m=>!isNaN(parseFloat(m))&&isFinite(m),Be=(m,x)=>ot(m)?Number(m):x,Ki=(m,x)=>x===0?0:Math.round(m/x)*x,ms=(m,x=1/0)=>{if(x===1/0)return m;let U=e(10,x);return Math.round(m*U)/U},lt=m=>m==null?!1:typeof m=="boolean"?m:m.trim().toLowerCase()==="true",_r=(m,x)=>{m.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:x}}))},Ai=(m,x)=>{m.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:x}}))},sl=(m,x)=>{m.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:x}}))},nl=(m,x)=>{m.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:x}}))},al=(m,x)=>{if(!x||x.length<=0)return;let U=x.map(oe=>ot(oe)?Be(oe,oe):oe),E={values:U||[]};E.value=U[0],E.value0=U[0],E.value1=U[0];for(let oe=1;oe<U.length;oe++)E[`value${oe+1}`]=U[oe];m.dispatchEvent(new CustomEvent("change",{detail:E}))},X=(m,x,U)=>{let E=0,oe,Se,Ie,de,ue=!1,Ne=(Pe,ft,Ut,Dt,$t,_t)=>{let dr=E;Ut!==void 0&&Pe>Ut&&(Pe=Ut),ft!==void 0&&Pe<ft&&(Pe=ft),E=Pe;let ur=E;return(Dt===ge&&_t||Dt===Ee&&$t)&&(ur=100-ur),Dt===ge?x.style.top=`${ur}%`:x.style.left=`${ur}%`,dr!==E},Ge=Pe=>Pe===x||x.contains(Pe),be=(Pe,ft,Ut,Dt)=>{oe=Pe,Se=ft,Ie=Ut,de=Dt},rt=Pe=>{ue=Pe,x.classList.toggle("disabled",ue),ue?x.setAttribute("aria-disabled","true"):x.hasAttribute("aria-disabled")&&x.removeAttribute("aria-disabled")},zr=(Pe,ft)=>{ft==null?x.removeAttribute(Pe):x.setAttribute(Pe,ft)},Jt=Pe=>x.getAttribute(Pe),ke=Pe=>{if(!ue){switch(Pe.key){case"ArrowLeft":{Pe.preventDefault(),typeof oe=="function"&&oe(U);break}case"ArrowRight":{Pe.preventDefault(),typeof Se=="function"&&Se(U);break}case"ArrowUp":{Pe.preventDefault(),typeof Ie=="function"&&Ie(U);break}case"ArrowDown":{Pe.preventDefault(),typeof de=="function"&&de(U);break}}nl(m,Pe)}},We=()=>{ue||_r(m,x)};return x.className=`pointer pointer-${U}`,x.addEventListener("keydown",ke),x.addEventListener("click",We),{$pointer:x,get percent(){return E},get disabled(){return ue},set disabled(Pe){rt(Pe)},updatePosition:Ne,isClicked:Ge,setCallbacks:be,setAttr:zr,getAttr:Jt,destroy:()=>{x.removeEventListener("keydown",ke),x.removeEventListener("click",We),x.remove()}}},re=m=>{if(m==null)return;if(Array.isArray(m))return m;if(m.trim()==="")return;let x=m.split(","),U=[],E=!0;for(let oe=0;oe<x.length;oe++){let Se=x[oe].trim();Se!==""&&(U.push(Se),ot(Se)||(E=!1))}return E?U.map(oe=>Number(oe)):U},ee=(m,x)=>x?x.findIndex(U=>U===m||U.toString().trim()===m.toString().trim()):-1,Me=m=>({updatePosition:(x,U,E,oe)=>{if(U.length<=0)return;let Se=U.length===1,Ie=U[0],de=U[U.length-1];x===ge?(m.style.removeProperty("width"),m.style.removeProperty("right"),m.style.removeProperty("left"),Se?m.style.height=`${Ie}%`:m.style.height=`${Math.abs(Ie-de)}%`,oe?(m.style.bottom="0%",Se?m.style.top="auto":m.style.top=`${Math.min(100-de,100-Ie)}%`):(m.style.bottom="auto",Se?m.style.top="0%":m.style.top=`${Math.min(Ie,de)}%`)):(m.style.removeProperty("height"),m.style.removeProperty("top"),m.style.removeProperty("bottom"),Se?m.style.width=`${Ie}%`:m.style.width=`${Math.abs(Ie-de)}%`,E?(m.style.right="0%",Se?m.style.left="auto":m.style.left=`${Math.min(100-de,100-Ie)}%`):(m.style.right="auto",Se?m.style.left="0%":m.style.left=`${Math.min(Ie,de)}%`))}}),we="--animate-onclick",Qe="--width",H="--height",ut="--panel-bg-border-radius",Ke="--panel-bg",Ot="--panel-bg-hover",It="--panel-bg-fill",ie="--pointer-width",Q="--pointer-height",V="--pointer-border-radius",me="--pointer-bg",Oe="--pointer-bg-hover",qe="--pointer-bg-focus",Gt="--pointer-shadow",Kt="--pointer-shadow-hover",hr="--pointer-shadow-focus",cr="--pointer-border",hi="--pointer-border-hover",xe="--pointer-border-focus",De=(m,x,U)=>{let E=new Map;for(let oe of m.attributes){let Se=oe.nodeName.trim().toLowerCase();if(!x.test(Se))continue;let Ie=Se.replace(/\D/g,"").trim(),de=Ie===""||Ie==="0"||Ie==="1"?0:Be(Ie,0)-1,ue=U&&typeof U=="function"?U(oe.value):oe.value;E.set(de,ue)}return E},J=m=>{if(!m)return null;let x=m.getAttribute(ce);if(!x)return null;let U=x.split(";"),E=[];for(let oe of U)oe.trim()!==""&&E.push(oe.trim());return E},Ce=[[Qe,se,"sliderWidth",null],[H,k,"sliderHeight",null],[ut,D,"sliderRadius",null],[Ke,M,"sliderBg",null],[Ot,T,"sliderBgHover",null],[It,j,"sliderBgFill",null],[ie,I,"pointer#Width",/^pointer([0-9]*)-width$/],[Q,F,"pointer#Height",/^pointer([0-9]*)-height$/],[V,R,"pointer#Radius",/^pointer([0-9]*)-radius$/],[me,Z,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Oe,he,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[qe,C,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Gt,G,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Kt,fe,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[hr,ae,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[cr,Le,"pointer#Border",/^pointer([0-9]*)-border$/],[hi,Xe,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[xe,at,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Te=(m,x,U)=>{let E=null,oe=[],Se=new Map,Ie=(ke,We=x)=>{let Pe=[...We.classList];for(let ft of Pe)ft.startsWith(ke)&&x.classList.remove(ft)},de=()=>{Ie("shape");let ke=x.querySelectorAll(".pointer");for(let We of ke)Ie("shape",We)},ue=ke=>{E=ke,Ie("theme-"),typeof ke=="string"&&x.classList.add(`theme-${ke}`)},Ne=()=>{if(de(),!(oe.length<=0)){x.classList.add("shape",`shape-${oe[0]}`);for(let ke=1;ke<oe.length;ke++){let We=oe[ke];if(!We)continue;let Pe=x.querySelector(`.pointer-${ke}`);!Pe||Pe.classList.add("shape",`shape-${We}`)}}},Ge=(ke,We)=>{oe[ke]=We,Ne()},be=()=>{de();let ke=De(m,/^pointer([0-9]*)-shape$/);if(!(ke.size<=0)){for(let We of ke){let Pe=We[0];oe[Pe]=We[1]}Ne()}},rt=(ke,We)=>`${ke}-${We}`,zr=(ke,We,Pe)=>{let ft=U[Pe];if(!ft)return;let Ut=Pe===0?x:ft.$pointer;if(We==null){Se.has(rt(ke,Pe))&&Se.delete(rt(ke,Pe)),Ut.style.removeProperty(ke);return}Se.set(rt(ke,Pe),We),Ut.style.setProperty(ke,We)},Jt=(ke,We)=>Se.get(rt(ke,We));return(()=>{for(let ke of Ce){let[We,Pe,ft,Ut]=ke;if(Ut){let $t=De(m,Ut);for(let _t of $t){let dr=_t[0],ur=_t[1];zr(We,ur,dr)}}else{let $t=m.getAttribute(Pe);zr(We,$t,0)}let Dt=[];if(ft.indexOf("#")===-1)Dt.push([ft,0]);else{Dt.push([ft.replace("#",""),0]),Dt.push([ft.replace("#","0"),0]),Dt.push([ft.replace("#","1"),0]);for(let $t=1;$t<U.length;$t++)Dt.push([ft.replace("#",($t+1).toString()),$t])}for(let $t of Dt)try{let _t=$t[0],dr=$t[1];Object.prototype.hasOwnProperty.call(m,_t)||Object.defineProperty(m,_t,{get(){return Jt(We,dr)},set:ur=>{zr(We,ur,dr)}})}catch(_t){console.error(_t)}}ue(m.getAttribute(P)),be()})(),{setStyle:zr,getStyle:Jt,get theme(){return E},set theme(ke){ue(ke)},get pointerShapes(){return oe},setPointerShape:Ge}},ze="animate-on-click",tt="range-dragging",Fe=(m,x,U,E)=>{let oe=[],Se=Ge=>{for(let be of oe)be.update&&typeof be.update=="function"&&be.update(Ge)},Ie=()=>{for(let Ge of oe)Ge.destroy&&typeof Ge.destroy=="function"&&Ge.destroy()},de=(Ge,be)=>{for(let rt of oe)rt.onAttrChange&&typeof rt.onAttrChange=="function"&&rt.onAttrChange(Ge,be)},ue=Ge=>{if(Ge.gettersAndSetters){for(let be of Ge.gettersAndSetters)if(!(!be.name||!be.attributes))try{Object.prototype.hasOwnProperty.call(m,be.name)||Object.defineProperty(m,be.name,be.attributes)}catch(rt){console.error("defineSettersGetters error:",rt)}}},Ne=Ge=>{var be;if(!Ge.css)return;let rt=(be=m.shadowRoot)==null?void 0:be.querySelector("style");!rt||(rt.innerHTML+=Ge.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Ge of window.tcRangeSliderPlugins){let be=Ge();oe.push(be),be.init&&typeof be.init=="function"&&(be.init(m,x,U,E),ue(be),Ne(be))}},update:Se,onAttrChange:de,destroy:Ie}},Vt=10,xt=20,Zt=(m,x)=>{let U=new Map,E=/^value([0-9]*)$/;for(let de of m.attributes){let ue=de.nodeName.trim().toLowerCase();if(!E.test(ue))continue;let Ne=ue.replace("value","").trim(),Ge=Ne===""||Ne==="0"||Ne==="1"?0:Be(Ne,0)-1,be=ot(de.value)?Be(de.value,0):de.value;U.set(Ge,be)}let oe=Math.max(...Array.from(U.keys())),Se=[];Se.push([X(m,x,0),U.get(0)]);let Ie=x;for(let de=1;de<=oe;de++){let ue=x.cloneNode(!0);Ie.after(ue),Ie=ue,Se.push([X(m,ue,de),U.get(de)])}return Se},dc=(m,x,U,E,oe,Se,Ie)=>{try{Object.defineProperty(m,E,{configurable:!0,get(){if(!x)return;let de=x.pointers[U];if(!de)return;let ue=x.getTextValue(de.percent);return ot(ue)?Be(ue,ue):ue},set:de=>{x.pointers[U]?x==null||x.setValue(de,U):x==null||x.addPointer(de)}}),Object.defineProperty(m,oe,{configurable:!0,get(){var de,ue;return(ue=(de=x==null?void 0:x.pointers[U])==null?void 0:de.getAttr("aria-label"))!=null?ue:void 0},set:de=>{!x||x.setAriaLabel(U,de)}}),Object.defineProperty(m,Se,{configurable:!0,get(){var de,ue;return(ue=(de=x==null?void 0:x.styles)==null?void 0:de.pointerShapes[U])!=null?ue:null},set:de=>{!x||!x.styles||x.styles.setPointerShape(U,de)}}),Object.defineProperty(m,Ie,{configurable:!0,get(){var de;return(de=x==null?void 0:x.pointers[U].disabled)!=null?de:!1},set:de=>{if(!x)return;let ue=x==null?void 0:x.pointers[U];!ue||(ue.disabled=de)}})}catch(de){console.error(de)}},rf=(m,x)=>{let U=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let E=2;E<Vt;E++)U.push([`value${E}`,`ariaLabel${E}`,`pointer${E}Shape`,`pointer${E}Disabled`,E-1]);for(let E of U)dc(m,x,E[4],E[0],E[1],E[2],E[3])},uc=(m,x,U)=>{var E;let oe=(E=U.shadowRoot)==null?void 0:E.querySelector(".container");if(oe)for(let Se of m)x?oe.prepend(Se.$pointer):oe.append(Se.$pointer)},sf=(m,x)=>{if(!(!x||m.length<=1)){for(let U of m)U.$pointer.style.zIndex=xt.toString();x.$pointer.style.zIndex=(xt*2).toString()}},ol=0,wn=100,Fs=2,pc="0.3s",nf=(m,x,U)=>{let E=U.map(w=>w[0]),oe=null,Se=null,Ie=null,de=null,ue=ol,Ne=wn,Ge,be,rt=Ee,zr=Fs,Jt=!1,ke=!1,We=!1,Pe=0,ft=1/0,Ut=!1,Dt,$t,_t=!1,dr=!1,ur=!1,Zi=pc,fc=[],gc=w=>{_t||(w.preventDefault&&w.preventDefault(),vs(w),window.addEventListener("mousemove",vs),window.addEventListener("mouseup",_a),Ai(m,w))},_a=w=>{_t||(Dt=void 0,$t=void 0,window.removeEventListener("mousemove",vs),window.removeEventListener("mouseup",_a),Zi&&x.classList.add(ze),sl(m,w))},lf=(w,N)=>{if(E.length<=0)return;if(E.length===1)return E[0].isClicked(w)&&Zi&&x.classList.remove(ze),E[0];let ye=cf(w);if(Ut){let et=N,qr=ka(et);qr!==void 0&&(et=Ki(et,qr)),ye?(Dt=et,$t=0,Zi&&x.classList.remove(ze)):Dt!==void 0&&($t=et-Dt,Dt=et)}if(!hf(w)&&!ye){for(let et of E)if(!(!et.isClicked(w)||et.disabled))return Zi&&x.classList.remove(ze),et;for(let et of E)if(oe===et)return et}let ht=1/0,Ct=null;for(let et of E){if(et.disabled)continue;let qr=Math.abs(N-et.percent);qr<ht&&(ht=qr,Ct=et)}return Ct},mc=()=>E.findIndex(w=>oe===w&&!w.disabled),vs=w=>{let N;if(rt===ge){let{height:ht,top:Ct}=x.getBoundingClientRect(),et=w.type.indexOf("mouse")!==-1?w.clientY:w.touches[0].clientY;N=Math.min(Math.max(0,et-Ct),ht)*100/ht}else{let{width:ht,left:Ct}=x.getBoundingClientRect(),et=w.type.indexOf("mouse")!==-1?w.clientX:w.touches[0].clientX;N=Math.min(Math.max(0,et-Ct),ht)*100/ht}if((Jt||ke)&&(N=100-N),oe=lf(w.target,N),oe&&sf(E,oe),Ut&&E.length>1&&$t!==void 0){let ht=E[0],Ct=E[E.length-1],et=ht.percent+$t<0,qr=Ct.percent+$t>100;if(et||qr)return;for(let Ma=0;Ma<E.length;Ma++)pr(Ma,E[Ma].percent+$t);return}let ye=mc();ye!==-1&&(pr(ye,N),oe==null||oe.$pointer.focus())},Ca=w=>{if(_t||document.activeElement!==m||oe!=null&&oe.disabled)return;w.stopPropagation(),w.preventDefault();let N=w.deltaY<0,ye=Jt||ke,ht=N?!ye:ye,Ct=mc();Ct!==-1&&(ht?xn(Ct,E[Ct].percent):Sn(Ct,E[Ct].percent))},vc=w=>{_t||dr||(rt===ge?ke?pr(w,100):pr(w,0):Jt?Sn(w,E[w].percent):xn(w,E[w].percent))},yc=w=>{_t||dr||(rt===ge?ke?pr(w,0):pr(w,100):Jt?xn(w,E[w].percent):Sn(w,E[w].percent))},bc=w=>{_t||dr||(rt===ge?ke?Sn(w,E[w].percent):xn(w,E[w].percent):Jt?pr(w,100):pr(w,0))},wc=w=>{_t||dr||(rt===ge?ke?xn(w,E[w].percent):Sn(w,E[w].percent):Jt?pr(w,0):pr(w,100))},hf=w=>w.classList.contains("panel"),cf=w=>w.classList.contains("panel-fill"),xn=(w,N)=>{if(N===void 0)return;let ye=ka(N);ye==null&&(ye=1),N-=ye,N<0&&(N=0),pr(w,N)},Sn=(w,N)=>{if(N===void 0)return;let ye=ka(N);ye==null&&(ye=1),N+=ye,N>100&&(N=100),pr(w,N)},ys=()=>{!de||de.update({percents:xc(),values:Sc(),$pointers:$c(),min:_c(),max:Cc(),data:cl(),step:hl(),round:ul(),type:dl(),textMin:Pa(),textMax:Oa(),rightToLeft:gl(),bottomToTop:ml(),pointersOverlap:wl(),pointersMinDistance:pl(),pointersMaxDistance:fl(),rangeDragging:xl(),disabled:vl(),keyboardDisabled:yl(),mousewheelDisabled:bl()})},df=()=>{ys()},uf=w=>{if(!(We||E.length<=1||Ne===ue))if(w===0){let N=ft*100/(Ne-ue);return Math.max(0,E[w+1].percent-N)}else{let N=Pe*100/(Ne-ue);return Math.min(E[w-1].percent+N,100)}},pf=w=>{if(!(We||E.length<=1||Ne===ue))if(w===E.length-1){let N=ft*100/(Ne-ue);return Math.min(E[w-1].percent+N,100)}else{let N=Pe*100/(Ne-ue);return Math.max(0,E[w+1].percent-N)}},ka=w=>{let N;if(typeof Ge=="function"){let ye=je(0,100,ue,Ne,w);N=Ge(ye,w)}else N=Ge;if(ot(N)){let ye=Ne-ue;return N=ye===0?0:N*100/ye,N}},js=w=>{if(w===void 0)return;let N=je(0,100,ue,Ne,w);return be!==void 0?be[Math.round(N)]:ms(N,zr)},Pa=()=>be!==void 0?be[ue]:ue,Oa=()=>be!==void 0?be[Ne]:Ne,hl=()=>Ge,ff=w=>{var N;return w<=0||We?Pa():(N=js(E[w-1].percent))!=null?N:""},gf=w=>{var N;return E.length<=1||w>=E.length-1||We?Oa():(N=js(E[w+1].percent))!=null?N:""},xc=()=>E.map(w=>w.percent),Sc=()=>E.map(w=>js(w.percent)),$c=()=>E.map(w=>w.$pointer),_c=()=>ue,Cc=()=>Ne,cl=()=>be,dl=()=>rt,ul=()=>zr,pl=()=>Pe,fl=()=>ft,mf=w=>fc[w],gl=()=>Jt,ml=()=>ke,vl=()=>_t,yl=()=>dr,bl=()=>ur,wl=()=>We,xl=()=>Ut,pr=(w,N)=>{if(N===void 0)return;let ye=ka(N);ye!==void 0&&(N=Ki(N,ye));let ht=E[w];if(!ht)return;let Ct=ht.updatePosition(N,uf(w),pf(w),rt,Jt,ke);Se==null||Se.updatePosition(rt,E.map(et=>et.percent),Jt,ke),ys();for(let et of E){let qr=js(et.percent);qr!==void 0&&(et.setAttr("aria-valuenow",qr.toString()),et.setAttr("aria-valuetext",qr.toString()))}yf(),Ct&&al(m,E.map(et=>js(et.percent)))},ci=()=>{for(let w=0;w<E.length;w++)pr(w,E[w].percent)},vf=(w,N)=>{ue=be!==void 0?0:Be(w,ol),Ne=be!==void 0?be.length-1:Be(N,wn),Aa(ue),Ea(Ne)},yf=()=>{var w,N;for(let ye=0;ye<E.length;ye++){let ht=E[ye];ht.setAttr("aria-valuemin",((w=ff(ye))!=null?w:"").toString()),ht.setAttr("aria-valuemax",((N=gf(ye))!=null?N:"").toString())}},Aa=w=>{ue=Be(w,ol),ue>Ne&&(Ne=ue+wn),ci()},Ea=w=>{Ne=Be(w,wn),Ne<ue&&(Ne=ue+wn),ci()},kc=w=>{We=!0;for(let N=0;N<w.length;N++)La(w[N],N);We=!1;for(let N=0;N<w.length;N++)La(w[N],N)},La=(w,N)=>{let ye;be!==void 0?(ye=w==null?0:ee(w,be),ye===-1&&(ye=0)):(ye=Be(w,ue),ye<ue&&(ye=ue),ye>Ne&&(ye=Ne));let ht=je(ue,Ne,0,100,ye);pr(N,ht)},Da=w=>{if(w==null){Ge=void 0;return}if(typeof w=="function"){Ge=w,ci();return}if(ot(w)){Ge=Be(w,1);let N=Math.abs(Ne-ue);Ge>N&&(Ge=void 0),ci();return}Ge=void 0},Sl=w=>{We=w,ci()},$l=w=>{(!ot(w)||w<0)&&(w=0),Pe=w},_l=w=>{(!ot(w)||w<0)&&(w=1/0),ft=w},Cl=w=>{_t=w,x.classList.toggle("disabled",_t),_t?x.setAttribute("aria-disabled","true"):x.hasAttribute("aria-disabled")&&x.removeAttribute("aria-disabled")},Pc=w=>{dr=w},Oc=w=>{ur=w,ur?document.removeEventListener("wheel",Ca):document.addEventListener("wheel",Ca,{passive:!1})},kl=w=>{if(w==null){be=void 0;return}if(be=re(w),be===void 0||be.length<=0){be=void 0;return}Aa(0),Ea(be.length-1),Ge===void 0&&Da(1)},Pl=w=>{var N;typeof w=="string"?rt=w.trim().toLowerCase()===ge?ge:Ee:rt=Ee;let ye=(N=m.shadowRoot)==null?void 0:N.querySelector(".range-slider-box");if(!ye)return;ye.className=`range-slider-box type-${rt}`,ci();let ht=rt===ge?"vertical":"horizontal";for(let Ct of E)Ct.setAttr("aria-orientation",ht)},Ol=w=>{Jt=w,E.length>1&&uc(E,Jt,m),ci(),ys()},Al=w=>{ke=w,E.length>1&&uc(E,ke,m),ci(),ys()},El=w=>{zr=Be(w,Fs),zr<0&&(zr=Fs),ys()},Ac=w=>{w==null||w.toString().trim().toLowerCase()==="false"?(Zi=void 0,x.style.removeProperty(we),x.classList.remove(ze)):(Zi=w.toString(),x.style.setProperty(we,Zi),x.classList.add(ze))},Ec=(w,N)=>{let ye=E[w];!ye||(ye.setAttr("aria-label",N),fc[w]=N)},Ra=w=>{if(Dt=void 0,E.length<=1){Ut=!1,x.classList.remove(tt);return}Ut=w,x.classList.toggle(tt,Ut)},bf=()=>{Cl(lt(m.getAttribute(L))),dr=lt(m.getAttribute(K)),ur=lt(m.getAttribute(B));let w=De(m,/^pointer([0-9]*)-disabled$/,N=>lt(N));for(let N of w){let ye=N[0];!E[ye]||(E[ye].disabled=N[1])}},wf=()=>{let w=De(m,/^aria-label([0-9]*)$/);for(let N of w){let ye=N[0];Ec(ye,N[1])}},xf=w=>{let N=E.length,ye=E[N-1].$pointer,ht=ye.cloneNode(!0);ye.after(ht);let Ct=X(m,ht,N);return Ct.setCallbacks(vc,yc,bc,wc),E.push(Ct),La(w,N),ci(),ys(),N},Sf=()=>{let w=E.length,N=E[w-1];return N?(N.destroy(),E.pop(),E.length<=1&&Ra(!1),ci(),ys(),w-1):-1};return(()=>{var w,N;for(let ht of E)ht.setCallbacks(vc,yc,bc,wc);let ye=(w=m.shadowRoot)==null?void 0:w.querySelector(".panel-fill");ye&&(Se=Me(ye)),Pl(m.getAttribute(O)),Ol(lt(m.getAttribute(Y))),Al(lt(m.getAttribute(A))),vf(m.getAttribute(p),m.getAttribute(g)),Da(m.getAttribute(S)),kl(m.getAttribute(f)),kc(U.map(ht=>ht[1])),Sl(lt(m.getAttribute(a))),$l(Be(m.getAttribute(o),0)),_l(Be(m.getAttribute(l),1/0)),Ra(lt(m.getAttribute(h))),El(Be(m.getAttribute(_),Fs)),bf(),wf(),Ie=Te(m,x,E),Ac((N=m.getAttribute(ct))!=null?N:pc),x.addEventListener("mousedown",gc),x.addEventListener("mouseup",_a),x.addEventListener("touchmove",vs),x.addEventListener("touchstart",vs),ur||document.addEventListener("wheel",Ca,{passive:!1}),de=Fe(m,df,{setValues:kc,setMin:Aa,setMax:Ea,setStep:Da,setPointersOverlap:Sl,setPointersMinDistance:$l,setPointersMaxDistance:_l,setDisabled:Cl,setType:Pl,setRightToLeft:Ol,setBottomToTop:Al,setRound:El,setKeyboardDisabled:Pc,setMousewheelDisabled:Oc,setRangeDragging:Ra,setData:kl},{getPercents:xc,getValues:Sc,getPointerElements:$c,getMin:_c,getMax:Cc,getStep:hl,getData:cl,getType:dl,getRound:ul,getTextMin:Pa,getTextMax:Oa,isRightToLeft:gl,isBottomToTop:ml,isDisabled:vl,isKeyboardDisabled:yl,isMousewheelDisabled:bl,isPointersOverlap:wl,isRangeDraggingEnabled:xl,getPointersMinDistance:pl,getPointersMaxDistance:fl}),de.init()})(),{get pointers(){return E},get styles(){return Ie},get pluginsManager(){return de},get min(){return Pa()},get max(){return Oa()},get step(){return hl()},get pointersOverlap(){return wl()},set pointersOverlap(w){Sl(w)},get pointersMinDistance(){return pl()},set pointersMinDistance(w){$l(w)},get pointersMaxDistance(){return fl()},set pointersMaxDistance(w){_l(w)},get disabled(){return vl()},set disabled(w){Cl(w)},get data(){return cl()},get type(){return dl()},set type(w){Pl(w)},get rightToLeft(){return gl()},set rightToLeft(w){Ol(w)},get bottomToTop(){return ml()},set bottomToTop(w){Al(w)},get round(){return ul()},set round(w){El(w)},get animateOnClick(){return Zi},set animateOnClick(w){Ac(w)},get keyboardDisabled(){return yl()},set keyboardDisabled(w){Pc(w)},get mousewheelDisabled(){return bl()},set mousewheelDisabled(w){Oc(w)},get rangeDragging(){return xl()},set rangeDragging(w){Ra(w)},setMin:Aa,setMax:Ea,setValue:La,setStep:Da,setData:kl,getTextValue:js,setAriaLabel:Ec,getAriaLabel:mf,addPointer:xf,removePointer:Sf,destroy:()=>{x.removeEventListener("mousedown",gc),x.removeEventListener("mouseup",_a),x.removeEventListener("touchmove",vs),x.removeEventListener("touchstart",vs),document.removeEventListener("wheel",Ca);for(let w of E)w.destroy();de==null||de.destroy()}}},af=(m,x,U)=>{let E=Ce.find(([de,ue,Ne,Ge])=>ue.replace("#","")===x.replace(/\d+/g,""));if(E&&m.styles){let[de,ue,Ne,Ge]=E,be=x.replace(/\D/g,"").trim(),rt=be===""||be==="0"||be==="1"?0:Be(be,0)-1;m.styles.setStyle(de,U,rt);return}switch(m&&m.pluginsManager&&m.pluginsManager.onAttrChange(x,U),x){case p:{m.setMin(U);break}case g:{m.setMax(U);break}case S:{m.setStep(U);break}case a:{m.pointersOverlap=lt(U);break}case o:{m.pointersMinDistance=Be(U,0);break}case h:{m.rangeDragging=lt(U);break}case l:{m.pointersMaxDistance=Be(U,1/0);break}case L:{m.disabled=lt(U);break}case K:{m.keyboardDisabled=lt(U);break}case B:{m.mousewheelDisabled=lt(U);break}case f:{m.setData(U);break}case O:{m.type=U;break}case Y:{m.rightToLeft=lt(U);break}case A:{m.bottomToTop=lt(U);break}case _:{m.round=Be(U,Fs);break}case P:{m.styles&&(m.styles.theme=U);break}case ct:{m.animateOnClick=U;break}}let oe=null;if(/^value([0-9]*)$/.test(x)&&(oe="value"),/^pointer([0-9]*)-disabled$/.test(x)&&(oe="pointer-disabled"),/^aria-label([0-9]*)$/.test(x)&&(oe="aria-label"),/^pointer([0-9]*)-shape$/.test(x)&&(oe="pointer-shape"),!oe)return;let Se=x.replace(/\D/g,"").trim(),Ie=Se===""||Se==="0"||Se==="1"?0:Be(Se,0)-1;switch(oe){case"value":{m.setValue(U,Ie);break}case"pointer-disabled":{let de=m==null?void 0:m.pointers[Ie];if(!de)return;de.disabled=lt(U);break}case"aria-label":{m.setAriaLabel(Ie,U);break}case"pointer-shape":{m.styles&&m.styles.setPointerShape(Ie,U);break}}},of=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(m){this.slider&&this.slider.setStep(m)}get step(){var m;return(m=this.slider)==null?void 0:m.step}set disabled(m){this.slider&&(this.slider.disabled=m)}get disabled(){var m,x;return(x=(m=this.slider)==null?void 0:m.disabled)!=null?x:!1}set data(m){var x;(x=this.slider)==null||x.setData(m)}get data(){var m;return(m=this.slider)==null?void 0:m.data}set min(m){var x;(x=this.slider)==null||x.setMin(m)}get min(){var m;return(m=this.slider)==null?void 0:m.min}set max(m){var x;(x=this.slider)==null||x.setMax(m)}get max(){var m;return(m=this.slider)==null?void 0:m.max}set round(m){!this.slider||(this.slider.round=m)}get round(){var m,x;return(x=(m=this.slider)==null?void 0:m.round)!=null?x:Fs}set type(m){!this.slider||(this.slider.type=m??Ee)}get type(){var m;return((m=this.slider)==null?void 0:m.type)||Ee}set pointersOverlap(m){!this.slider||(this.slider.pointersOverlap=m)}get pointersOverlap(){var m,x;return(x=(m=this.slider)==null?void 0:m.pointersOverlap)!=null?x:!1}set pointersMinDistance(m){!this.slider||(this.slider.pointersMinDistance=m)}get pointersMinDistance(){var m,x;return(x=(m=this.slider)==null?void 0:m.pointersMinDistance)!=null?x:0}set pointersMaxDistance(m){!this.slider||(this.slider.pointersMaxDistance=m)}get pointersMaxDistance(){var m,x;return(x=(m=this.slider)==null?void 0:m.pointersMaxDistance)!=null?x:1/0}set theme(m){!this.slider||!this.slider.styles||(this.slider.styles.theme=m)}get theme(){var m,x,U;return(U=(x=(m=this.slider)==null?void 0:m.styles)==null?void 0:x.theme)!=null?U:null}set rtl(m){!this.slider||(this.slider.rightToLeft=m)}get rtl(){var m,x;return(x=(m=this.slider)==null?void 0:m.rightToLeft)!=null?x:!1}set btt(m){!this.slider||(this.slider.bottomToTop=m)}get btt(){var m,x;return(x=(m=this.slider)==null?void 0:m.bottomToTop)!=null?x:!1}set keyboardDisabled(m){!this.slider||(this.slider.keyboardDisabled=m)}get keyboardDisabled(){var m,x;return(x=(m=this.slider)==null?void 0:m.keyboardDisabled)!=null?x:!1}set mousewheelDisabled(m){!this.slider||(this.slider.mousewheelDisabled=m)}get mousewheelDisabled(){var m,x;return(x=(m=this.slider)==null?void 0:m.mousewheelDisabled)!=null?x:!1}set animateOnClick(m){!this.slider||(this.slider.animateOnClick=m)}get animateOnClick(){var m;return(m=this.slider)==null?void 0:m.animateOnClick}get rangeDragging(){var m,x;return(x=(m=this.slider)==null?void 0:m.rangeDragging)!=null?x:!1}set rangeDragging(m){this.slider&&(this.slider.rangeDragging=lt(m))}get externalCSSList(){return this._externalCSSList}addPointer(m){var x,U;if(!this.slider)return;let E=(U=(x=this.slider)==null?void 0:x.addPointer(m))!=null?U:0;dc(this,this.slider,E,`value${E+1}`,`ariaLabel${E+1}`,`pointerShape${E+1}`,`pointer${E+1}Disabled`)}removePointer(){var m;!this.slider||(m=this.slider)==null||m.removePointer()}addCSS(m){if(!this.shadowRoot)return;let x=document.createElement("style");x.textContent=m,this.shadowRoot.appendChild(x)}connectedCallback(){var m,x;if(!this.shadowRoot)return;this._externalCSSList=J(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let U=(m=this.shadowRoot)==null?void 0:m.querySelector(".pointer");if(!U)return;let E=(x=this.shadowRoot)==null?void 0:x.getElementById("range-slider");if(!E)return;let oe=Zt(this,U);this.slider=nf(this,E,oe),rf(this,this.slider),this._observer=new MutationObserver(Se=>{Se.forEach(Ie=>{var de;if(!this.slider||Ie.type!=="attributes")return;let ue=Ie.attributeName;!ue||af(this.slider,ue,(de=this.getAttribute(ue))!=null?de:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},ll=of;window.tcRangeSlider=ll,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",ll),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends ll{})})();const z1=r=>!isNaN(parseFloat(r))&&isFinite(r),Ei=(r,e)=>z1(r)?Number(r):e,Nl=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const ja=40,Na=35,Ha=30,Fd="#475569",jd="#fff",Nd=20,F1=()=>{let r=null,e=null,t=!1,i=ja,s=Na,n=Ha,a=Fd,o=jd,l="",h="",f,p=[],g=null,S=null;const _=()=>{g==null||g.classList.toggle("is-after",i<=0)},O=()=>{var G;const C=(G=r==null?void 0:r.shadowRoot)==null?void 0:G.querySelector("#range-slider");g=document.createElement("div"),g.classList.add("tooltips"),C.prepend(g),_()},P=C=>{const G=document.createElement("div");return G.style.zIndex=Nd.toString(),G.className=C,G},Y=(C,G,fe,ae,Le)=>{C&&(G==="vertical"?(C.style.left=`${-i}px`,C.style.top=ae??"0"):(C.style.left=fe??"0",C.style.top=`${-i}px`),C.style.width=`${s}px`,C.style.height=`${n}px`,C.style.background=a,C.style.color=o,C.style.zIndex=Le.toString())},A=C=>{let G=C;return typeof f=="function"&&(G=f(C)),h==="prefix"?`${l}${G}`:`${G}${l}`},L=()=>{const C=(e==null?void 0:e.getValues())??[],G=(e==null?void 0:e.getPointerElements())??[],fe=(e==null?void 0:e.getType())??"horizontal";if(C)for(let ae=0;ae<C.length;ae++){const Le=p[ae];if(!Le)continue;const Xe=(C[ae]??"").toString();Le.textContent=A(Xe),Y(Le,fe,G[ae].style.left,G[ae].style.top,G[ae].style.zIndex)}},K=()=>{const C=(e==null?void 0:e.getValues())??[];if(C){for(let G=0;G<C.length;G++){const fe=P(`tooltip tooltip-${G+1}`);fe.style.position="absolute",p.push(fe),g==null||g.prepend(fe)}L()}},B=()=>{r&&(S=new ResizeObserver(C=>{for(const G of C)L()}),S.observe(r))},se=C=>{t=C,t?(O(),K(),B()):he()},k=C=>{i=C,L()},D=C=>{s=C,L()},M=C=>{n=C,L()},T=C=>{a=C,L()},j=C=>{o=C,L()},I=C=>{l=C,L()},F=C=>{h=C,L()},R=C=>{f=C,L()},Z=C=>{if(!t||!C.values)return;const G=(e==null?void 0:e.getPointerElements())??[],fe=(e==null?void 0:e.getType())??"horizontal";for(let ae=0;ae<C.values.length;ae++){const Le=C.values[ae],Xe=p[ae];if(Le===void 0&&Xe){Xe.remove(),p[ae]=void 0;continue}if(Le!==void 0&&!Xe){const ct=P(`tooltip tooltip-${ae+1}`),ce=(Le??"").toString();ct.textContent=A(ce),ct.style.position="absolute",Y(ct,fe,G[ae].style.left,G[ae].style.top,G[ae].style.zIndex),p[ae]=ct,g==null||g.append(ct)}if(!Xe)continue;const at=(Le??"").toString();Xe.textContent=A(at),Y(Xe,fe,G[ae].style.left,G[ae].style.top,G[ae].style.zIndex)}},he=()=>{g==null||g.remove();for(const C of p)C&&C.remove();p=[],S==null||S.disconnect()};return{get name(){return"Moving Tooltip"},init:(C,G,fe,ae)=>{r=C,e=ae,i=Ei(C.getAttribute("moving-tooltip-distance-to-pointer"),ja),s=Ei(C.getAttribute("moving-tooltip-width"),Na),n=Ei(C.getAttribute("moving-tooltip-height"),Ha),a=C.getAttribute("moving-tooltip-bg")||Fd,o=C.getAttribute("moving-tooltip-text-color")||jd,l=C.getAttribute("moving-tooltip-units")||"",h=C.getAttribute("moving-tooltip-units-type")||"",se(Nl(C.getAttribute("moving-tooltip")))},update:Z,onAttrChange:(C,G)=>{C==="moving-tooltip"&&se(Nl(G)),C==="moving-tooltip-distance-to-pointer"&&k(Ei(G,ja)),C==="moving-tooltip-width"&&D(Ei(G,Na)),C==="moving-tooltip-height"&&M(Ei(G,Ha)),C==="moving-tooltip-bg"&&T(G),C==="moving-tooltip-text-color"&&j(G),C==="moving-tooltip-units"&&I(G),C==="moving-tooltip-units-type"&&F(G)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:C=>{se(Nl(C))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:C=>{k(Ei(C,ja))}}},{name:"tooltipWidth",attributes:{get(){return s},set:C=>{D(Ei(C,Na))}}},{name:"tooltipHeight",attributes:{get(){return n},set:C=>{M(Ei(C,Ha))}}},{name:"tooltipBg",attributes:{get(){return a},set:C=>{T(C)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:C=>{j(C)}}},{name:"tooltipUnits",attributes:{get(){return l},set:C=>{I(C)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:C=>{F(C)}}},{name:"formatTooltipValue",attributes:{get(){return f},set:C=>{R(C)}}}],css:`
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
  z-index: ${Nd};
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
    `,destroy:he}};window.tcRangeSliderPlugins.push(F1);(()=>{var r=(o,l,h,f,p)=>{let g=l-o;return g===0?h:(f-h)*(p-o)/g+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,f=null,p=null,g=!1,S=s,_=n,O=()=>{var k;let D=(k=o==null?void 0:o.shadowRoot)==null?void 0:k.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),f=document.createElement("div"),f.classList.add("mark-points"),h.append(f),p=document.createElement("div"),p.classList.add("mark-values"),h.append(p),D.append(h)},P=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},Y=()=>{var k;if(!h||!l)return;let D=l.getMin(),M=l.getMax(),T=l.getType()==="vertical",j=l.isRightToLeft()||l.isBottomToTop();for(let F=0;F<S;F++){let R=document.createElement("div");R.classList.add("mark",`mark-${F}`);let Z=S===0?0:F*100/(S-1);T?j?R.style.top=`${100-Z}%`:R.style.top=`${Z}%`:j?R.style.left=`${100-Z}%`:R.style.left=`${Z}%`,f==null||f.append(R)}let I=l.getData();for(let F=0;F<_;F++){let R=document.createElement("div");R.classList.add("mark-value",`mark-value-${F}`);let Z=_===0?0:F*100/(_-1),he=r(0,_-1,D,M,F);R.textContent=(I?(k=I[Math.round(he)])!=null?k:"":he).toString(),T?j?R.style.top=`${100-Z}%`:R.style.top=`${Z}%`:j?R.style.left=`${100-Z}%`:R.style.left=`${Z}%`,p==null||p.append(R)}},A=(k,D)=>{se(),S=k,_=D,S<=0&&(S=s),_<=0&&(_=n),O(),Y(),P()},L=k=>{g=k,g?(O(),Y(),P()):se()},K=k=>{!h||h.style.setProperty("--marks-color",k)},B=k=>{!h||h.style.setProperty("--values-color",k)},se=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(k,D,M,T)=>{var j,I;l=T,o=k,g=i(o.getAttribute("marks")),g&&(A(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),K((j=o.getAttribute("marks-color"))!=null?j:"#cbd5e1"),B((I=o.getAttribute("marks-values-color"))!=null?I:"#475569"))},onAttrChange:(k,D)=>{k==="marks"&&L(i(D)),k==="marks-count"&&A(t(D,s),_),k==="marks-values-count"&&A(S,t(D,n)),k==="marks-color"&&K(D),k==="marks-values-color"&&B(D)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return g??!1},set:k=>{L(i(k))}}},{name:"marksCount",attributes:{get(){return S??s},set:k=>{A(t(k,s),_)}}},{name:"marksValuesCount",attributes:{get(){return S??s},set:k=>{A(S,t(k,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:k=>{K(k)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:k=>{B(k)}}}],destroy:se,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var j1=Object.defineProperty,N1=Object.getOwnPropertyDescriptor,_i=(r,e,t,i)=>{for(var s=i>1?void 0:i?N1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&j1(e,t,s),s};let Nr=class extends Dr{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=pe(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from!==void 0&&this.to!==void 0?this.max<r.from?(this.to=r.to,this.from=r.from):(this.from=r.from,this.to=r.to):(this.from=r.from,this.to=r.to))}),this.registry.minmax.addListener(this.UUID,r=>{r&&(this.from=r.min,this.to=r.max)})}disconnectedCallback(){super.disconnectedCallback(),this.registry.range.removeListener(this.UUID),this.registry.minmax.removeListener(this.UUID),this.initialised=!1}firstUpdated(r){super.firstUpdated(r)}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .tooltip {
                    font-size: 12px;
                }
                .pointer-shape {
                    border-radius: 0;
                    width: 10px;
                }
            `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return d`

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

        `}};Nr.styles=ne`

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
    
    `;_i([le({context:Th,subscribe:!0}),v()],Nr.prototype,"min",2);_i([le({context:Ih,subscribe:!0}),v()],Nr.prototype,"max",2);_i([le({context:Wo,subscribe:!0}),v()],Nr.prototype,"from",2);_i([le({context:Bo,subscribe:!0}),v()],Nr.prototype,"to",2);_i([v()],Nr.prototype,"hasFixedFrom",2);_i([v()],Nr.prototype,"hasFixedTo",2);_i([le({context:oa,subscribe:!0}),v()],Nr.prototype,"palette",2);_i([v()],Nr.prototype,"sliderRef",2);_i([v()],Nr.prototype,"initialised",2);Nr=_i([W("registry-range-slider")],Nr);var H1=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,fa=(r,e,t,i)=>{for(var s=i>1?void 0:i?W1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&H1(e,t,s),s};let nn=class extends Dr{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=pe()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?$:d`
            <div ${ve(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};fa([le({context:Wo,subscribe:!0})],nn.prototype,"from",2);fa([le({context:Bo,subscribe:!0})],nn.prototype,"to",2);fa([c({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],nn.prototype,"fixed",2);fa([c({type:String,reflect:!0,attribute:!0})],nn.prototype,"separator",2);nn=fa([W("registry-range-display")],nn);var B1=Object.defineProperty,G1=Object.getOwnPropertyDescriptor,gs=(r,e,t,i)=>{for(var s=i>1?void 0:i?G1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&B1(e,t,s),s};let yi=class extends Dr{constructor(){super(...arguments),this.histogram=[],this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.tourableElementRef=pe(),this.loading=!1,this.error=!1}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}connectedCallback(){super.connectedCallback(),this.loading=this.registry.histogram.loading,this.registry.histogram.onCalculationStart.set(this.UUID,()=>{this.loading=!0,this.error=!1}),this.registry.histogram.onCalculationEnd.set(this.UUID,r=>{this.loading=!1,this.error=!r}),this.registry.loading.addListener(this.UUID,r=>{r===!0&&(this.loading=!0)})}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.loading.removeListener(this.UUID),this.registry.histogram.removeListener(this.UUID),this.registry.histogram.onCalculationStart.delete(this.UUID),this.registry.histogram.onCalculationEnd.delete(this.UUID)}render(){const r=this.histogram.length>0&&this.loading===!1;return d`

            <div class="container ${r?"ready":"loading"}" ${ve(this.tourableElementRef)}>

                <div class="histogram ${this.expandable===!0?"expandable":""}" style="height: ${this.expanded?this.heightExpanded:this.height}" part="bg" @click=${()=>{this.expandable===!0&&(this.expanded=!this.expanded)}}>

                    ${this.histogram.map(e=>d`
                            <div class="histogram-bar" data-height="${e.height}" data-percentage="${e.percentage}" data-count="${e.count}" data-from="${e.from}" data-to="${e.to}">
                                <div style="height: ${e.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

                ${this.error===!0?d`<div class="error">Unable to calculate the histogram</div>`:$}

                <div class="spinner">
                    <span></span>
                </div>

            </div>
        
        `}};yi.styles=ne`

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
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
        }


    `;gs([v()],yi.prototype,"histogram",2);gs([c({type:String,reflect:!0})],yi.prototype,"height",2);gs([c({type:String,reflect:!0})],yi.prototype,"heightExpanded",2);gs([c({type:Boolean,reflect:!0,converter:_e(!1)})],yi.prototype,"expandable",2);gs([v()],yi.prototype,"expanded",2);gs([v()],yi.prototype,"loading",2);gs([v()],yi.prototype,"error",2);yi=gs([W("registry-histogram")],yi);var V1=Object.defineProperty,Y1=Object.getOwnPropertyDescriptor,q1=(r,e,t,i)=>{for(var s=i>1?void 0:i?Y1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&V1(e,t,s),s};let nh=class extends Si{getTourableRoot(){}render(){const e=this.classList.contains("small")?"small":"";return d`
        
            <thermal-dropdown class="download ${e}">
            
                <span slot="invoker">${b(y.download)}</span>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.files.downloadAllFiles()}>${b(y.downloadoriginalfiles)}</thermal-button>
                    <small>${b(y.downloadoriginalfileshint)}</small>
                </div>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.forEveryInstance(t=>t.export.downloadPng())}>${b(y.pngofindividualimages)}</thermal-button>
                    <small>${b(y.pngofindividualimageshint)}</small>
                </div>
            
                <div slot="option">
            
                <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({})}>${b(y.pngofentiregroup)}</thermal-button>
                    <small>${b(y.pngofentiregrouphint)}</small>
                </div>
            
            
                <div slot="option">
                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${b(y.csvofanalysisdata)}</thermal-button>
                    <small>${b(y.csvofanalysisdatahint)}</small>
                </div>
            
            </thermal-dropdown>
        
        `}};nh.styles=ne`
    
    `;nh=q1([W("group-download-dropdown")],nh);var X1=Object.defineProperty,ga=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&X1(e,t,s),s};class gt extends Si{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}ga([le({context:Yo,subscribe:!0}),v()],gt.prototype,"parentFileProviderElement");ga([le({context:Mp,subscribe:!0}),v()],gt.prototype,"loading");ga([le({context:zh,subscribe:!0}),v()],gt.prototype,"file");ga([le({context:Rp,subscribe:!0}),v()],gt.prototype,"failure");ga([le({context:Hh,subscribe:!0}),v()],gt.prototype,"recording");const hc=class hc extends gt{constructor(){super(...arguments),this.ref=pe()}onInstanceCreated(){}onFailure(){}getTourableRoot(){return this.ref.value}render(){return d`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${ve(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};hc.styles=ne`
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

    `;let Os=hc;var K1=Object.defineProperty,Z1=Object.getOwnPropertyDescriptor,Gp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Z1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&K1(e,t,s),s};let yo=class extends Si{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return d`
            <slot>
                <button class="default">${b(y.range).toLowerCase()}</button>
            </slot>
        `}};yo.styles=Os.styles;Gp([le({context:ca,subscribe:!0})],yo.prototype,"setter",2);yo=Gp([W("group-range-propagator")],yo);var J1=Object.defineProperty,Q1=Object.getOwnPropertyDescriptor,ew=(r,e,t,i)=>{for(var s=i>1?void 0:i?Q1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&J1(e,t,s),s};let ah=class extends Si{getTourableRoot(){}render(){return d`
        
                <button class="default" @click=${()=>this.group.files.downloadAllFiles()}>${b(y.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${()=>this.group.forEveryInstance(r=>r.export.downloadPng())}>${b(y.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${()=>this.group.analysisSync.png.downloadPng({})}>${b(y.pngofentiregroup)}</button>
            
                <button class="default" @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${b(y.csvofanalysisdata)}</button>
        
        `}};ah.styles=ne`

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
    
    `;ah=ew([W("group-download-buttons")],ah);/**
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
 */const tw=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Su(t,xu`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Vp(r={}){await tw;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Hd(r){if(await Vp(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function rw(r){return await Vp(),new google.visualization.ChartWrapper({container:r})}/**
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
 */var Vi=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var o=r.length-1;o>=0;o--)(a=r[o])&&(n=(s<3?a(n):s>3?a(e,t,n):a(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const Wd=["ready","select"],iw={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class ni extends mr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return d`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){rw(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Wd,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(iw[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(s=>!Wd.includes(s)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(!(!e||!t))try{const i=await Hd({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,t;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?t=fetch(e).then(s=>s.json()):t=Promise.resolve(e),t.then(Hd).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}ni.styles=ne`
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
  `;Vi([c({type:String,reflect:!0})],ni.prototype,"type",void 0);Vi([c({type:Array})],ni.prototype,"events",void 0);Vi([c({type:Object,hasChanged:()=>!0})],ni.prototype,"options",void 0);Vi([c({type:Array})],ni.prototype,"cols",void 0);Vi([c({type:Array})],ni.prototype,"rows",void 0);Vi([c({type:String})],ni.prototype,"data",void 0);Vi([c({type:Object})],ni.prototype,"view",void 0);Vi([c({type:Array})],ni.prototype,"selection",void 0);Vi([c({type:Object})],ni.prototype,"_data",void 0);customElements.define("google-chart",ni);var sw=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,yn=(r,e,t,i)=>{for(var s=i>1?void 0:i?nw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sw(e,t,s),s};let hs=class extends Si{constructor(){super(...arguments),this.instances=[],this.on=!1}getTourableRoot(){throw new Error("Method not implemented.")}firstUpdated(r){super.firstUpdated(r),this.group.files.addListener(this.UUID,()=>{this.group.analysisGraph.turnOn()}),this.group.analysisGraph.addListener(this.UUID,e=>{e!==void 0?(this.data=e.data,this.colors=e.colors,this.on=!0):(this.data=void 0,this.colors=void 0,this.on=!1)})}download(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("google-chart");console.log(r)}render(){return d`
            <div class="wrapper ${this.on?"on":"off"}">

                ${this.on===!0?d`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{colors:this.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},chartArea:{width:"90%"}}}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                `:$}
                
            </div>
        `}};hs.styles=ne`
    
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

    `;yn([v()],hs.prototype,"instances",2);yn([v()],hs.prototype,"timeout",2);yn([v()],hs.prototype,"data",2);yn([v()],hs.prototype,"colors",2);yn([v()],hs.prototype,"on",2);hs=yn([W("group-chart")],hs);var aw=Object.defineProperty,ow=Object.getOwnPropertyDescriptor,Yp=(r,e,t,i)=>{for(var s=i>1?void 0:i?ow(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&aw(e,t,s),s};let bo=class extends Si{getTourableRoot(){}connectedCallback(){if(super.connectedCallback(),this.on){const r=this.UUID+"__initial";this.group.files.addListener(r,e=>{e.length>0&&(this.group.analysisSync.turnOn(e[0]),this.group.files.removeListener(r))})}else this.on=this.group.analysisSync.value;this.group.analysisSync.addListener(this.UUID,r=>{this.on=r}),this.addEventListener("click",()=>{this.toggle()})}turnOn(){this.group.files.value.length>0&&this.group.analysisSync.turnOn(this.group.files.value[0])}turnOff(){this.group.analysisSync.turnOff()}toggle(){this.on?this.turnOff():this.turnOn()}render(){return d`  
        <span><i></i></span>      
        <div>${b(y.analysissync)}</div>
        `}};bo.styles=ne`
    
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
    
    `;Yp([c({type:Boolean,reflect:!0,converter:_e(!1)})],bo.prototype,"on",2);bo=Yp([W("group-analysis-sync-button")],bo);var lw=Object.defineProperty,hw=Object.getOwnPropertyDescriptor,qp=(r,e,t,i)=>{for(var s=i>1?void 0:i?hw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lw(e,t,s),s};let wo=class extends gt{constructor(){super(...arguments),this.container=pe(),this.norender=!1}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(e){const t=this.getContainer();if(t!==void 0)e.mountToDom(t),this.norender===!1&&e.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(e){var t;if(super.updated(e),e.has("file")){const i=e.get("file"),s=this.file;i===void 0&&s!==void 0&&this.container.value&&this.file&&((t=this.file.dom)==null?void 0:t.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}disconnectedCallback(){var e,t,i,s;super.disconnectedCallback(),this.log("unmount"),this.file!==void 0&&(this.file.unmountFromDom(),(e=this.parentFileProviderElement)==null||e.onSuccess.delete(this.UUID),(t=this.parentFileProviderElement)==null||t.onInstanceCreated.delete(this.UUID),(i=this.parentFileProviderElement)==null||i.onLoadingStart.delete(this.UUID),(s=this.parentFileProviderElement)==null||s.onFailure.delete(this.UUID))}render(){var s,n;const e=this.loading===!1&&this.failure!==void 0,t=this.loading===!1&&this.file!==void 0,i={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":t,"is-error":e};return d`
            <div ${ve(this.container)} class=${Qt(i)} part="file-canvas-container">
            
                ${this.loading===!0?d`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:e===!0?d`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                ${b(y.fileloadingerror)}
                            </div>

                            <div class="error-url">
                                ${(s=this.failure)==null?void 0:s.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${(n=this.failure)==null?void 0:n.message}
                            </div>
                        </div>`:$}
            
            </div>

            <slot name="tour"></slot>
        
        `}};wo.styles=ne`

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
    `;qp([c({converter:_e(!1)})],wo.prototype,"norender",2);wo=qp([W("file-canvas")],wo);var cw=Object.defineProperty,dw=Object.getOwnPropertyDescriptor,uw=(r,e,t,i)=>{for(var s=i>1?void 0:i?dw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cw(e,t,s),s};let oh=class extends gt{onInstanceCreated(r){}onFailure(r){}render(){return this.file?d`
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
        `:$}};oh.styles=ne`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;oh=uw([W("file-share-button")],oh);var pw=Object.defineProperty,fw=Object.getOwnPropertyDescriptor,gw=(r,e,t,i)=>{for(var s=i>1?void 0:i?fw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pw(e,t,s),s};let lh=class extends gt{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?d`
            <thermal-dialog label=${b(y.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${b(y.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${Rt(this.renderRow(b(y.thermalfilename),this.file.fileName))}

                        ${Rt(this.renderDownloadRow(b(y.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,b(y.thermalfiledownload)))}

                        ${this.file.visibleUrl?Rt(this.renderDownloadRow(b(y.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,b(y.visiblefiledownload))):$}

                        ${Rt(this.renderRow(b(y.time),st.human(this.file.timestamp)))}

                        ${Rt(this.renderNumericalRow(b(y.duration),this.file.duration,0,"ms"))}

                        ${Rt(this.renderRow(b(y.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Rt(this.renderNumericalRow(b(y.bytesize),this.file.bytesize,0))}
                        
                        ${Rt(this.renderNumericalRow(b(y.minimaltemperature),this.file.min,10,"°C"))}

                        ${Rt(this.renderNumericalRow(b(y.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${b(y.filetype)}</h2>
                    <table>
                    ${Rt(this.renderRow(b(y.type),this.file.reader.parser.name))}
                    ${Rt(this.renderRow(b(y.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${b(y.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>d`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:$}};lh.styles=ne`

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
    
    `;lh=gw([W("file-info-button")],lh);var mw=Object.defineProperty,vw=Object.getOwnPropertyDescriptor,el=(r,e,t,i)=>{for(var s=i>1?void 0:i?vw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mw(e,t,s),s};let an=class extends gt{constructor(){super(...arguments),this.tourableElementRef=pe(),this.pngWidth=1350,this.hasGraphs=!1}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(r){r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasGraphs=e})}onFailure(){}render(){return this.file===void 0?$:d`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${ve(this.tourableElementRef)}>
                    <div class="button">
                        ${this.file?b(y.download):"..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">${b(y.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs})}>${b(y.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?d`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${b(y.convertentiresequencetovideo)}</thermal-button>
                        </div>`:$}

                    ${this.hasGraphs===!0?d`<div slot="option">
                            <thermal-button @click=${()=>{var r;return(r=this.file)==null?void 0:r.analysisData.downloadData()}}>${b(y.csvofanalysisdata)}</thermal-button>
                        </div>`:$}
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `}};an.styles=ne`

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
    
    `;el([le({context:ps,subscribe:!0})],an.prototype,"pngWidth",2);el([le({context:fs,subscribe:!0})],an.prototype,"pngFs",2);el([v()],an.prototype,"hasGraphs",2);an=el([W("file-download-dropdown")],an);const xo=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:$e(r,"m:ss")}),yw=(r,e,t,i)=>{const s=[];let n=1;const a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(xo(o,i,"minor")),n+=1}return e<i&&s.push(xo(e,i,"major")),s},Hl=60*1e3,xs=50,Gs=3,hh=(r,e)=>{const t=Math.floor(r/xs),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=Hl;for(;o<e;)yw(o,l,n,e).forEach(h=>a.push(h)),o+=Hl,l+=Hl;return a.push(xo(0,e,"bound")),a.push(xo(e,e,"bound")),a},bw=r=>d`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,Bd=(r,e,t)=>d`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,Xp=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return d`<div class="ticks">
        
        ${e.map(bw)}

        ${Bd(s,$e(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?Bd(n,$e(i,"m:ss:SSS"),"pointer"):$}

    </div>`},Kp=ne`

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
            width: ${xs}px;
            left: -${xs/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${Gs}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${xs/2}px;
            padding-right: ${xs/2}px;
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
                top: -${Gs}px;
            }

            .tick-pointer {
                width: ${Gs*2}px;
                height: ${Gs*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${Gs}px;
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
            height: ${Gs}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${xs}px;
            position: relative;
            left: -${xs/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var ww=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,Sr=(r,e,t,i)=>{for(var s=i>1?void 0:i?xw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ww(e,t,s),s};const Sw="chrome"in window;let Ht=class extends gt{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=pe(),this.barRef=pe(),this.containerRef=pe(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.markers=[],this.collapsed=!1,this.ticks=[]}getTourableRoot(){return this.containerRef.value}onInstanceCreated(r){this.containerRef.value&&(this.ticks=hh(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=hh(t.contentRect.width,this.file.duration)),t.contentRect.width<Ht.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return $;if(r.duration===0)return $;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,playback:!0,...t},s={item:!0,timeline:!0,...t};return d`
            <div class="${Qt(e)}" ${ve(this.containerRef)}>


                ${r!==void 0?d`

                        <div class="ticks-horizontal-indent">

                            <notation-timeline></notation-timeline>


                            <div class="${Qt(s)}"  ${ve(this.timelineRef)}>

                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${ve(this.barRef)}></div>
                                    ${this.cursor?d`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(a=>d`<file-marker-timeline start=${a.fromMs} end=${a.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>


                            ${this.currentFrame?Xp(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):$}

                            


                            ${this.hasPlayButton===!0?d`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${b(y.prev)}</thermal-button>


                                        <button class="${Qt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                        ${this.playing?d`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                            </svg>
                                            `:d`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                            </svg>
                                            `}

                                    </button>

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${b(y.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${b(y.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                ${Sw===!0?d`<thermal-dialog label="Performance">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="chrome" slot="invoker">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                        </svg>

                                        <div slot="content" style="max-width: 500px;">

                                            <p>Your browser is based on Chromium and might have slightly worse performance during playback.</p>

                                            <p>Consider using <a href="https://mozilla.org/firefox" target="_blank">Firefox</a>.</p>

                                            <p style="opacity: .5">Reason of lagging in Chromium is its aggressive resources optimisation. Firefox will enable you to use more of your system's power.</p>
                                        
                                        </div>

                                    </thermal-dialog>`:$}

                                </div>

                                `:$}

                            
                        </div>
                    `:$}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?d`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${b(y.date)}:</span> 
                            <span class="inline">${$e(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${b(y.time)}:</span> 
                            <span class="inline">${$e(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${b(y.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(n=this.file)==null?void 0:n.frameCount}</span>
                        </div>
                    </div>`:$}

            <slot name="tour"></slot>

          `}};Ht.collapseWidth=500;Ht.styles=ne`
    
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

        ${Kp}


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
    
    `;Sr([le({context:Xo,subscribe:!0}),v()],Ht.prototype,"playing",2);Sr([le({context:da,subscribe:!0}),v()],Ht.prototype,"currentFrame",2);Sr([le({context:jh,subscribe:!0}),v()],Ht.prototype,"duration",2);Sr([le({context:Ip,subscribe:!0}),v()],Ht.prototype,"mayStop",2);Sr([le({context:Fh,subscribe:!0})],Ht.prototype,"cursor",2);Sr([le({context:Tp,subscribe:!0})],Ht.prototype,"cursorSetter",2);Sr([c({type:String,reflect:!0})],Ht.prototype,"hasPlayButton",2);Sr([c({type:String,reflect:!0})],Ht.prototype,"hasInfo",2);Sr([c({type:String,reflect:!0})],Ht.prototype,"interactive",2);Sr([le({context:Wh,subscribe:!0})],Ht.prototype,"markers",2);Sr([v()],Ht.prototype,"collapsed",2);Sr([v()],Ht.prototype,"ticks",2);Sr([v()],Ht.prototype,"pointerMs",2);Ht=Sr([W("file-timeline")],Ht);var $w=Object.defineProperty,_w=Object.getOwnPropertyDescriptor,qh=(r,e,t,i)=>{for(var s=i>1?void 0:i?_w(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$w(e,t,s),s};let Hn=class extends gt{constructor(){super(...arguments),this.enabled="on",this.playbackSpeed=1}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return this.file===void 0?$:d`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option" style="font-size: calc( var(--thermal-fs-sm) * .9);">${b(y.playbackspeed)}</div>

                    ${Object.entries(Yu).map(([r])=>d`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof Fi&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Hn.styles=ne`

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
    
    `;qh([c({type:String,reflect:!0})],Hn.prototype,"enabled",2);qh([le({context:Nh,subscribe:!0}),v()],Hn.prototype,"playbackSpeed",2);Hn=qh([W("file-playback-speed-dropdown")],Hn);var Cw=Object.defineProperty,kw=Object.getOwnPropertyDescriptor,Xh=(r,e,t,i)=>{for(var s=i>1?void 0:i?kw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cw(e,t,s),s};let Wn=class extends gt{constructor(){super(...arguments),this.container=pe()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return d`
            <div class="container">
            
                <video ${ve(this.container)} preload="metadata">

                    ${this.url===void 0?$:d`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Wn.styles=ne`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Xh([le({context:da,subscribe:!0}),v()],Wn.prototype,"currentFrame",2);Xh([c({type:String,reflect:!0,attribute:!0})],Wn.prototype,"url",2);Wn=Xh([W("file-video")],Wn);const Pw=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),$e(t,"mm:ss:SSS")},Ow=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var Aw=Object.defineProperty,Ew=Object.getOwnPropertyDescriptor,Ci=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ew(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Aw(e,t,s),s};const Kh={fromAttribute:r=>r===null?null:Ow(r),toAttribute:r=>r===null?null:Pw(r)};let ti=class extends gt{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return $}};Ci([le({context:Xo,subscribe:!0}),v()],ti.prototype,"playing",2);Ci([le({context:qo,subscribe:!0}),v()],ti.prototype,"ms",2);Ci([c({type:String,reflect:!0,attribute:!0})],ti.prototype,"label",2);Ci([c({type:String,reflect:!0,attribute:!0,converter:Kh})],ti.prototype,"start",2);Ci([c({type:String,reflect:!0,attribute:!0,converter:Kh})],ti.prototype,"end",2);Ci([c({type:String,reflect:!0,attribute:!0,converter:Kh})],ti.prototype,"dur",2);Ci([c({type:String,reflect:!0,attribute:!0})],ti.prototype,"active",2);Ci([c({type:String,reflect:!0,attribute:!0})],ti.prototype,"pauseOnActivate",2);Ci([c({type:String,reflect:!0,attribute:!0})],ti.prototype,"say",2);ti=Ci([W("file-marker")],ti);var Lw=Object.defineProperty,Dw=Object.getOwnPropertyDescriptor,Is=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lw(e,t,s),s};let Hi=class extends gt{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return d`

            <div class="${Qt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Hi.styles=ne`
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


    `;Is([le({context:jh,subscribe:!0}),v()],Hi.prototype,"duration",2);Is([le({context:da,subscribe:!0}),v()],Hi.prototype,"currentFrame",2);Is([le({context:qo,subscribe:!0}),v()],Hi.prototype,"ms",2);Is([c({type:Number,reflect:!0,attribute:!0})],Hi.prototype,"start",2);Is([c({type:Number,reflect:!0,attribute:!0})],Hi.prototype,"end",2);Is([v()],Hi.prototype,"active",2);Hi=Is([W("file-marker-timeline")],Hi);var Rw=Object.defineProperty,Mw=Object.getOwnPropertyDescriptor,Zp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rw(e,t,s),s};let So=class extends gt{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return d`
            <div>


            ${this.markers.map(r=>r.active?d`<div class="item">
                    <h2>${r.label}</h2>
                    ${Rt(r.innerHTML)}
                    </div>`:$)}

            
            
            </div>

          `}};So.styles=ne`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Zp([le({context:Wh,subscribe:!0})],So.prototype,"markers",2);So=Zp([W("file-marks-content")],So);var Tw=Object.defineProperty,Iw=Object.getOwnPropertyDescriptor,Zh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Iw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tw(e,t,s),s};let Bn=class extends gt{getTourableRoot(){}onInstanceCreated(){}onFailure(){}render(){if(this.file===void 0)return $;if(this.label!==void 0)return this.label;if(this.grouping!==void 0)switch(this.grouping){case"hours":case"days":return $e(this.file.timestamp,"HH:mm");case"weeks":case"months":case"years":return st.human(this.file.timestamp);default:return st.human(this.file.timestamp)}return this.file.fileName}};Bn.styles=ne`
        :host {
            display: contents;
        }
    `;Zh([c({type:String})],Bn.prototype,"grouping",2);Zh([c({type:String})],Bn.prototype,"label",2);Bn=Zh([W("file-label")],Bn);var Uw=Object.defineProperty,zw=Object.getOwnPropertyDescriptor,Jh=(r,e,t,i)=>{for(var s=i>1?void 0:i?zw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Uw(e,t,s),s};let Gn=class extends He{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return d`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Gn.styles=ne`

    
    `;Jh([c()],Gn.prototype,"analysis",2);Jh([v()],Gn.prototype,"name",2);Gn=Jh([W("analysis-name")],Gn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Qh(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Fw=Object.defineProperty,jw=Object.getOwnPropertyDescriptor,ec=(r,e,t,i)=>{for(var s=i>1?void 0:i?jw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fw(e,t,s),s};let Vn=class extends He{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return d`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?$:d`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Qh(qa,r=>d`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Vn.styles=ne`

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
    
    `;ec([c()],Vn.prototype,"analysis",2);ec([v()],Vn.prototype,"color",2);Vn=ec([W("analysis-color")],Vn);var Nw=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,Gr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nw(e,t,s),s};let yr=class extends He{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return d`

            <div class="table">

                <thermal-field label=${b(y.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${b(y.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${b(y.left)}>
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

                <thermal-field label=${b(y.right)}>
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

                <thermal-field label=${b(y.top)}>
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

                <thermal-field label=${b(y.bottom)}>
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
    
        
        `}};yr.styles=ne`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Gr([c()],yr.prototype,"analysis",2);Gr([v()],yr.prototype,"color",2);Gr([v()],yr.prototype,"top",2);Gr([v()],yr.prototype,"left",2);Gr([v()],yr.prototype,"width",2);Gr([v()],yr.prototype,"height",2);Gr([v()],yr.prototype,"type",2);Gr([v()],yr.prototype,"right",2);Gr([v()],yr.prototype,"bottom",2);Gr([v()],yr.prototype,"maxX",2);Gr([v()],yr.prototype,"maxY",2);yr=Gr([W("edit-area")],yr);var Ww=Object.defineProperty,Bw=Object.getOwnPropertyDescriptor,bn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ww(e,t,s),s};let cs=class extends He{constructor(){super(...arguments),this.topInputRef=pe(),this.leftInputRef=pe()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return d`

            <div class="table">

                <thermal-field label=${b(y.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${b(y.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${b(y.top)} hint=${b(y.fromto,{from:0,to:this.maxX})}>
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

                <thermal-field label=${b(y.left)} hint=${b(y.fromto,{from:0,to:this.maxX})}>
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
        
        `}};cs.styles=ne`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;bn([c()],cs.prototype,"analysis",2);bn([v()],cs.prototype,"top",2);bn([v()],cs.prototype,"left",2);bn([v()],cs.prototype,"maxX",2);bn([v()],cs.prototype,"maxY",2);cs=bn([W("edit-point")],cs);var Gw=Object.defineProperty,Vw=Object.getOwnPropertyDescriptor,tl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gw(e,t,s),s};let Yn=class extends He{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return d`

            <thermal-dialog label="${b(y.editsth,{what:b(y[this.type])})}">
                <slot name="invoker" slot="invoker">
                    <thermal-button>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                            <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                        </svg>
                    </thermal-button>
                </slot>

                <div slot="content">
                    ${this.analysis instanceof Cr?d`<edit-point .analysis=${this.analysis}></edit-point>`:d`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};tl([c()],Yn.prototype,"analysis",2);tl([v()],Yn.prototype,"name",2);tl([v()],Yn.prototype,"type",2);Yn=tl([W("file-analysis-edit")],Yn);var Yw=Object.defineProperty,qw=Object.getOwnPropertyDescriptor,Mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?qw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yw(e,t,s),s};let sr=class extends gt{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=pe(),this.graphRef=pe(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}getTourableRoot(){}onInstanceCreated(r){this.graphs=r.analysisData.value,r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.graphs=this.file.analysisData.value,this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){var r;return((r=this.file)==null?void 0:r.timeline.isSequence)===!1?$:d`

            <div style="position: relative; background-color: white; border-radius: var(--thermal-radius); height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&d`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&d`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${ve(this.container)} style="height: 100%; ">
                ${this.graphs.colors.length>0?d`<thermal-chart 
                        ${ve(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:b(y.time),format:"m:ss:SSS"},vAxis:{title:b(y.temperature)+" °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:$}
            </div>

            

            </div>
        
        `}};sr.styles=ne`

        :host {
            // background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Mr([v()],sr.prototype,"hydrated",2);Mr([c({reflect:!0})],sr.prototype,"graphWidth",2);Mr([c({reflect:!0})],sr.prototype,"graphHeight",2);Mr([v()],sr.prototype,"graphs",2);Mr([le({context:da,subscribe:!0})],sr.prototype,"currentFrame",2);Mr([le({context:Fh,subscribe:!0})],sr.prototype,"cursor",2);Mr([le({context:Tp,subscribe:!0})],sr.prototype,"cursorSetter",2);Mr([v()],sr.prototype,"shadowLeft",2);Mr([v()],sr.prototype,"shadowTop",2);Mr([v()],sr.prototype,"shadowWidth",2);Mr([v()],sr.prototype,"shadowHeight",2);Mr([le({context:No,subscribe:!0})],sr.prototype,"graphSmooth",2);sr=Mr([W("file-analysis-graph")],sr);const Vr="interactive-analysis-context";var Xw=Object.defineProperty,Kw=Object.getOwnPropertyDescriptor,ai=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xw(e,t,s),s};let Or=class extends He{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&(t.onDeselected.delete(this.UUID),t.onSelected.delete(this.UUID),t.onValues.delete(this.UUID),t.onMoveOrResize.delete(this.UUID),t.graph.onGraphActivation.delete(this.UUID),t.onSetInitialColor.delete(this.UUID),t.onSetName.delete(this.UUID));const i=this.analysis;this.name=i.name,this.selected=i.selected,this.color=i.initialColor;const s=n=>n instanceof gr?i.width+"x"+i.height:"1x1";this.dimension=s(i),this.value={min:i.min,max:i.max,avg:i.avg},i.file.timeline.isSequence?this.may=i instanceof Cr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:i.graph.state.MIN,max:i.graph.state.MAX,avg:i.graph.state.AVG},i.onSerializableChange.set(this.UUID,n=>{this.dimension=s(n)}),i.onValues.set(this.UUID,(n,a,o)=>{this.value={min:n,max:a,avg:o}}),i.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{this.graph={min:n,max:a,avg:o}}),i.onSelected.set(this.UUID,()=>{this.selected=!0}),i.onDeselected.set(this.UUID,()=>{this.selected=!1}),i.onSetInitialColor.set(this.UUID,n=>{this.color=n}),i.onSetName.set(this.UUID,n=>{this.name=n})}}valueOrNothing(e){return e===void 0?"-":e.toFixed(2)+" °C"}renderCell(e,t,i,s){return d`
            <td class="${t?"may":"mayNot"} ${i?"active":"inactive"}">

                ${t?d`
                        <button
                            @click=${s}
                            style="background-color: ${i?this.color:"transparent"};"
                            title="${i?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(e)}
                        </button>
                    `:this.valueOrNothing(e)}

            </td>
        `}render(){return d`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
            @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
        >
            ${this.interactiveanalysis===!0?d`<u aria-hidden="true"></u>`:$}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?d`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
            </svg>
            </thermal-button>

            <!--

            ${this.analysis.getType()!=="point"?d`<thermal-button 
                    @click=${()=>{}}
                    @mouseenter=${()=>{this.analysis.min&&this.analysis.max&&this.setRegistryHighlight&&this.setRegistryHighlight({from:this.analysis.min,to:this.analysis.max})}}
                    @mouseleave=${()=>{this.setRegistryHighlight&&this.setRegistryHighlight(void 0)}}
                    >
                            ${b(y.range)}
                        </thermal-button>`:$}

            -->
            

        
        </td>`:$}
        
        `}};Or.styles=ne`
    
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

    `;ai([c()],Or.prototype,"analysis",2);ai([le({context:Vr,subscribe:!0})],Or.prototype,"interactiveanalysis",2);ai([v()],Or.prototype,"value",2);ai([v()],Or.prototype,"graph",2);ai([v()],Or.prototype,"may",2);ai([v()],Or.prototype,"dimension",2);ai([v()],Or.prototype,"color",2);ai([c({type:Boolean,reflect:!0,attribute:!0})],Or.prototype,"selected",2);ai([v()],Or.prototype,"name",2);ai([le({context:ca,subscribe:!0})],Or.prototype,"setRegistryHighlight",2);Or=ai([W("file-analysis-table-row")],Or);var Zw=Object.defineProperty,Jw=Object.getOwnPropertyDescriptor,ma=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zw(e,t,s),s};let As=class extends gt{constructor(){super(...arguments),this.container=pe(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(e){console.log(e)}onInstanceCreated(e){this.hydrate(e)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(e){super.updated(e),e.has("file")&&this.file&&this.hydrate(this.file)}hydrate(e){e.analysis.addListener(this.UUID,t=>{this.analysis=t}),e.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length}),e.analysisData.onGraphsPresence.set(this.UUID,t=>{this.hasHighlightedData=t}),this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length,this.analysis=e.analysis.value,this.hasHighlightedData=e.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?$:d`

        <div class="overflow" ${ve(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var e,t;this.allSelected?(e=this.file)==null||e.analysis.layers.deselectAll():(t=this.file)==null||t.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?d`<u aria-hidden="true"></u>`:$}
                            <span>${b(y.analysis)}</span>
                            ${this.hasHighlightedData?d`<button @click=${()=>{var e;(e=this.file)==null||e.analysisData.downloadData()}} title=${b(y.downloadgraphdataascsv)}>CSV</button>`:$}
                        </th>
                        <th>${b(y.avg)}</th>
                        <th>${b(y.min)}</th>
                        <th>${b(y.max)}</th>
                        <th>${b(y.size)}</th>
                        ${this.interactiveanalysis===!0?d`<th></th>`:$}
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(e=>d`
                            <file-analysis-table-row
                                .analysis=${e}
                            ></file-analysis-table-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};As.styles=ne`
    
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

        



    `;ma([le({context:Vr,subscribe:!0}),c()],As.prototype,"interactiveanalysis",2);ma([v()],As.prototype,"analysis",2);ma([v()],As.prototype,"allSelected",2);ma([v()],As.prototype,"hasHighlightedData",2);As=ma([W("file-analysis-table")],As);var Qw=Object.defineProperty,ex=Object.getOwnPropertyDescriptor,va=(r,e,t,i)=>{for(var s=i>1?void 0:i?ex(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qw(e,t,s),s};let Es=class extends gt{constructor(){super(...arguments),this.container=pe(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}renderHeader(){return d`<tr>
            <td>${b(y.analysis)}</td>
            <td>${b(y.min)}</td>
            <td>${b(y.max)}</td>
            <td>${b(y.avg)}</td>
        </tr>`}renderRow(r){var e,t,i;return d`<tr>
            <td>
                ${r.name}
                <file-analysis-edit .analysis=${r}></file-analysis-edit>
            </td>
            <td>${(e=r.min)==null?void 0:e.toFixed(2)}</td>
            <td>${(t=r.max)==null?void 0:t.toFixed(2)}</td>
            <td>${(i=r.avg)==null?void 0:i.toFixed(2)}</td>
        </tr>`}render(){return this.analysis.length===0||this.file===void 0?$:d`

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
                            ${this.interactiveanalysis?d`<u aria-hidden="true"></u>`:$}
                            <span>${b(y.analysis)}</span>
                            ${this.hasHighlightedData?d`<button @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${b(y.downloadgraphdataascsv)}>CSV</button>`:$}
                        </th>
                        <th>${b(y.avg)}</th>
                        <th>${b(y.min)}</th>
                        <th>${b(y.max)}</th>
                        <th>${b(y.size)}</th>
                        ${this.interactiveanalysis===!0?d`<th></th>`:$}
                    </tr>

                    -->

                    ${this.renderHeader()}
                
                </thead>

                <tbody>

                    ${this.analysis.map(r=>d`
                    <file-analysis-overview-row
                        .analysis=${r}
                    ></file-analysis-overview-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};Es.styles=ne`
    
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

        



    `;va([le({context:Vr,subscribe:!0}),c()],Es.prototype,"interactiveanalysis",2);va([v()],Es.prototype,"analysis",2);va([v()],Es.prototype,"allSelected",2);va([v()],Es.prototype,"hasHighlightedData",2);Es=va([W("file-analysis-overview")],Es);var tx=Object.defineProperty,rx=Object.getOwnPropertyDescriptor,ki=(r,e,t,i)=>{for(var s=i>1?void 0:i?rx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tx(e,t,s),s};let Hr=class extends He{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof gr?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof Cr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return d`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?d`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"};"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

            </td>
        `}render(){return d`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
        >
            <span
                class="name-text"
                @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
            >

                ${this.interactiveanalysis===!0?d`<u aria-hidden="true"></u>`:$}
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
        ${this.renderCell(this.value.min,this.analysis instanceof gr,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min),this.log("Graph analysis min",this.graph.min)})}
        ${this.renderCell(this.value.max,this.analysis instanceof gr,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}

         ${this.renderCell(this.value.avg,!0,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}

        <!--
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?d`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${b(y.remove)}</thermal-button>
        </td>`:$}

        -->
        
        `}};Hr.styles=ne`
    
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

    `;ki([c()],Hr.prototype,"analysis",2);ki([le({context:Vr,subscribe:!0})],Hr.prototype,"interactiveanalysis",2);ki([v()],Hr.prototype,"value",2);ki([v()],Hr.prototype,"graph",2);ki([v()],Hr.prototype,"may",2);ki([v()],Hr.prototype,"dimension",2);ki([v()],Hr.prototype,"color",2);ki([c({type:Boolean,reflect:!0,attribute:!0})],Hr.prototype,"selected",2);ki([v()],Hr.prototype,"name",2);Hr=ki([W("file-analysis-overview-row")],Hr);var ix=Object.defineProperty,sx=Object.getOwnPropertyDescriptor,Yi=(r,e,t,i)=>{for(var s=i>1?void 0:i?sx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ix(e,t,s),s};let ri=class extends gt{constructor(){super(...arguments),this.mayHaveGraph=!1,this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1,this.graphRef=pe(),this.graphWidth=0,this.graphHeight=0}onInstanceCreated(r){this.mayHaveGraph=r.timeline.isSequence,r.analysis.layers.onAdd.set(this.UUID,e=>{var i,s;this.hasAnalysis===!1&&(this.hasAnalysis=!0);const t=()=>{this.isDrawingAnalysis=!1};(s=(i=e.file.dom)==null?void 0:i.listenerLayer)==null||s.getLayerRoot().addEventListener("pointerup",t),e.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{if(n||a||o)this.hasGraph=!0;else{const l=e.file.analysis.value.reduce((h,f)=>h===!0?h:f.graph.state.MIN||f.graph.state.MAX||f.graph.state.AVG,!1);this.hasGraph=l}})}),r.analysis.layers.onRemove.set(this.UUID,()=>{this.hasAnalysis===!0&&r.analysis.layers.size===0&&(this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1)})}onFailure(){}getTourableRoot(){}updated(r){super.updated(r),r.has("hasGraph")&&(this.observer&&this.graphRef.value&&(this.observer.unobserve(this.graphRef.value),delete this.observer),this.graphRef.value&&this.hasGraph===!0&&(this.observer=new ResizeObserver(e=>{const t=e[0];t!==void 0&&(this.graphWidth=t.contentRect.width,this.graphHeight=t.contentRect.height)}),this.observer.observe(this.graphRef.value)))}renderButtons(){const r=this.file!==void 0?Object.values(this.file.group.tool.tools).filter(e=>e instanceof Ro):[];return d`
            <div class="buttons">
                ${r.map(e=>d`
                            <thermal-button @click=${()=>{var t;this.isDrawingAnalysis=!0,(t=this.file)==null||t.group.tool.selectTool(e)}}>
                                <div style="display: flex; align-items: center; gap: 10px">
                                    <div style="width: 1.5em; display: inline-block;">${Rt(e.icon)}</div>
                                    <div>${b(y[e.name])}</div>
                                </div>
                            </thermal-button>
                        `)}
            </div>
        
        `}renderCurrentTooltip(){return d`${b(y[this.manager.tool.value.description])}`}renderAddAnalysis(){return d`<div class="addanalysis">

            <div>
                <strong>${b(y.analysis)}</strong>
            </div>

            <div>${b(y.analysishint)}</div>

            ${this.isDrawingAnalysis===!0?this.renderCurrentTooltip():this.renderButtons()}
        </div>`}renderGraph(){return this.mayHaveGraph?this.hasGraph===!0?d`<div class="graph" ${ve(this.graphRef)}>
                <file-analysis-graph graphWidth=${this.graphWidth} graphHeight=${this.graphHeight}></file-analysis-graph>
            </div>`:this.hasAnalysis===!0?d`<div class="graph graph-prompt">
                    <div>
                        <strong>${b(y.graph)}</strong>
                    </div>
                    <div class="hint">${Rt(b(y.graphhint2))}</div>
                </div>`:d`<div class="graph graph-prompt">
                    <div>
                        <strong>${b(y.graph)}</strong>
                    </div>
                    <div class="hint">${b(y.graphhint1)}</div>
                </div>`:$}render(){return d`
            <div class="container ${this.mayHaveGraph===!0?"may":"may-not"}">

            <div class="analysis">
                ${this.hasAnalysis===!1||this.isDrawingAnalysis===!0?this.renderAddAnalysis():d`<file-analysis-table></file-analysis-table>`}
            </div>
            ${this.renderGraph()}

            </div>

        `}};ri.styles=ne`

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
    
    `;Yi([v()],ri.prototype,"mayHaveGraph",2);Yi([v()],ri.prototype,"hasAnalysis",2);Yi([v()],ri.prototype,"isDrawingAnalysis",2);Yi([v()],ri.prototype,"hasGraph",2);Yi([v()],ri.prototype,"graphRef",2);Yi([v()],ri.prototype,"graphWidth",2);Yi([v()],ri.prototype,"graphHeight",2);Yi([v()],ri.prototype,"observer",2);ri=Yi([W("file-analysis-complex")],ri);var nx=Object.defineProperty,ax=Object.getOwnPropertyDescriptor,ox=(r,e,t,i)=>{for(var s=i>1?void 0:i?ax(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nx(e,t,s),s};let Gd=class extends Os{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};Gd=ox([W("file-download-lrc")],Gd);var lx=Object.defineProperty,hx=Object.getOwnPropertyDescriptor,tc=(r,e,t,i)=>{for(var s=i>1?void 0:i?hx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lx(e,t,s),s};let $o=class extends Os{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs})}getDefaultLabel(){return"png"}};tc([le({context:ps,subscribe:!0})],$o.prototype,"pngWidth",2);tc([le({context:fs,subscribe:!0})],$o.prototype,"pngFs",2);$o=tc([W("file-download-png")],$o);var cx=Object.defineProperty,dx=Object.getOwnPropertyDescriptor,ya=(r,e,t,i)=>{for(var s=i>1?void 0:i?dx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cx(e,t,s),s};let on=class extends Os{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};ya([c({type:String})],on.prototype,"label",2);ya([c({type:Object})],on.prototype,"onEnter",2);ya([c({type:Object})],on.prototype,"onLeave",2);ya([c({type:Object})],on.prototype,"onAction",2);on=ya([W("file-button")],on);var ux=Object.defineProperty,px=Object.getOwnPropertyDescriptor,Jp=(r,e,t,i)=>{for(var s=i>1?void 0:i?px(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ux(e,t,s),s};let ch=class extends Os{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&(this.log(this.file.min,this.file.max),this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max}))}getDefaultLabel(){return b(y.range).toLowerCase()}};Jp([le({context:ca,subscribe:!0})],ch.prototype,"setter",2);ch=Jp([W("file-range-propagator")],ch);var fx=Object.defineProperty,gx=Object.getOwnPropertyDescriptor,rc=(r,e,t,i)=>{for(var s=i>1?void 0:i?gx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fx(e,t,s),s};let qn=class extends He{constructor(){super(...arguments),this.expanded=!1}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}updated(r){super.updated(r),r.has("expanded")&&(this.expanded===!0?this.classList.add("expanded"):this.classList.remove("expanded"))}render(){return d`
            <div class="backdrop" @click=${()=>this.collapse()}></div>
            <div class="container">
                <button class="default" @click=${()=>{this.toggle()}}>${this.label??"..."}</button>
                <nav class="dropdown">
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
        `}};qn.styles=ne`
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



    `;rc([c({type:String,reflect:!0})],qn.prototype,"label",2);rc([v()],qn.prototype,"expanded",2);qn=rc([W("file-dropdown")],qn);const cc=class cc extends gt{constructor(){super(...arguments),this.tabIndex=1}onInstanceCreated(){}onFailure(){}getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.action.bind(this)),this.addEventListener("mouseenter",this.enter.bind(this)),this.addEventListener("mouseleave",this.leave.bind(this)),this.addEventListener("focus",this.enter.bind(this)),this.addEventListener("blur",this.leave.bind(this))}render(){return d`
            <button id="${this.UUID}" tabindex="0">${this.getIcon()}</button>
            <div class="label">
                <label class="label-inner" for="#${this.UUID}">${this.getLabel()}</label>
            </div>
        `}};cc.styles=ne`
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

    `;let _o=cc;var mx=Object.defineProperty,vx=Object.getOwnPropertyDescriptor,Qp=(r,e,t,i)=>{for(var s=i>1?void 0:i?vx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mx(e,t,s),s};let dh=class extends _o{enter(){}action(){this.onaction&&this.file&&this.onaction(this.file)}leave(){}getLabel(){return b(y.detail)}getIcon(){return d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
        </svg>`}};Qp([c({type:Object})],dh.prototype,"onaction",2);dh=Qp([W("file-detail-icon")],dh);var yx=Object.defineProperty,bx=Object.getOwnPropertyDescriptor,ef=(r,e,t,i)=>{for(var s=i>1?void 0:i?bx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yx(e,t,s),s};let uh=class extends _o{enter(){}action(){this.file&&(this.file.group.registry.opacity.value===1?this.file.group.registry.opacity.imposeOpacity(0):this.file.group.registry.opacity.imposeOpacity(1))}leave(){}getLabel(){return b(y.togglevisibleimage)}getIcon(){return d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
        </svg>`}render(){return this.file===void 0||this.file.visibleUrl===void 0?$:super.render()}};ef([c({type:Object})],uh.prototype,"onaction",2);uh=ef([W("file-opacity-icon")],uh);var wx=Object.defineProperty,xx=Object.getOwnPropertyDescriptor,ba=(r,e,t,i)=>{for(var s=i>1?void 0:i?xx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wx(e,t,s),s};let Ls=class extends gt{constructor(){super(...arguments),this.norender=!1}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return d`

            <header>
                <h2><file-label label="${q(this.label)}" grouping="${q(this.grouping)}"></file-label></h2>
                <div>
                    <file-opacity-icon></file-opacity-icon>
                    <file-detail-icon .onaction=${q(this.ondetail)}></file-detail-icon>
                    <file-range-propagator></file-range-propagator>
                    <file-dropdown label="...">
                        <file-info-button>
                            <file-button slot="invoker" label=${b(y.info).toLowerCase()}></file-button>
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
        
    `}};Ls.styles=ne`
    
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
    
    `;ba([c({type:Object})],Ls.prototype,"ondetail",2);ba([c({converter:_e(!1)})],Ls.prototype,"norender",2);ba([c({type:String})],Ls.prototype,"label",2);ba([c({type:String})],Ls.prototype,"grouping",2);Ls=ba([W("file-thumbnail")],Ls);var Sx=Object.defineProperty,$x=Object.getOwnPropertyDescriptor,wa=(r,e,t,i)=>{for(var s=i>1?void 0:i?$x(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sx(e,t,s),s};let Ds=class extends gt{constructor(){super(...arguments),this.norender=!1}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return d`

            <header>
                <thermal-button variant="foreground" @click=${()=>{this.onback&&this.onback()}}>x</thermal-button>

                ${this.label!==void 0?d`
                    <thermal-button variant="background" interactive="false">${this.label}</thermal-button>
                `:$}

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
        
    `}};Ds.styles=ne`
    
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
    
    `;wa([c({type:Object})],Ds.prototype,"onback",2);wa([c({converter:_e(!1)})],Ds.prototype,"norender",2);wa([c({type:String})],Ds.prototype,"label",2);wa([c({type:String})],Ds.prototype,"grouping",2);Ds=wa([W("file-detail")],Ds);var _x=Object.defineProperty,Cx=Object.getOwnPropertyDescriptor,Pi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_x(e,t,s),s};let Wr=class extends gt{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!1}getTourableRoot(){}onInstanceCreated(r){this.recorded=st.human(r.timestamp)}onFailure(){}render(){return d`
        <thermal-app author=${q(this.author)} recorded=${q(this.recorded)} license=${q(this.license)} showfullscreen="true">

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?d`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:$}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${b(y.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${b(y.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${b(y.filerendering)} 
                    hint=${b(y.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${b(y.adjusttimescale)}
                    hint=${b(y.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${b(y.colourpalette)}
                    hint=${b(y.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?d` <thermal-field 
                    label="${b(y.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:$}

                  ${this.file&&this.file.timeline.isSequence?d` <thermal-field 
                    label="${b(y.graphlines)}"
                    hint=${b(y.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:$}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?d`<file-share-button ></file-share-button>`:$}
            
              ${this.showabout===!0?d`<app-info-button ></app-info-button>`:$}

            </thermal-bar>
          </div>
            ${this.interactiveanalysis===!0?d`<group-tool-buttons slot="pre"></group-tool-buttons>`:$}
            
            ${this.showhistogram===!0?d`<registry-histogram slot="pre"></registry-histogram>`:$}

            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?d`<file-analysis-graph slot="post"></file-analysis-graph>`:$}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};Wr.styles=ne`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Pi([c({type:String,reflect:!0,attribute:!0,converter:_e(!1)})],Wr.prototype,"showembed",2);Pi([c({type:String,reflect:!0,attribute:!0,converter:_e(!1)})],Wr.prototype,"showabout",2);Pi([c({type:String,reflect:!0,attribute:!0,converter:_e(!1)})],Wr.prototype,"showfullscreen",2);Pi([c({type:String,reflect:!0,converter:_e(!0)})],Wr.prototype,"showhistogram",2);Pi([le({context:Vr,subscribe:!0})],Wr.prototype,"interactiveanalysis",2);Pi([c()],Wr.prototype,"author",2);Pi([c()],Wr.prototype,"recorded",2);Pi([c()],Wr.prototype,"license",2);Pi([c()],Wr.prototype,"label",2);Wr=Pi([W("file-app")],Wr);var kx=Object.defineProperty,nt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&kx(e,t,s),s};class Je extends He{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=pe()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners(),bi(this)}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}nt([c({type:String,reflect:!0})],Je.prototype,"url");nt([c({type:String,reflect:!0})],Je.prototype,"visible");nt([c({type:String,reflect:!0,attribute:!0})],Je.prototype,"palette");nt([c({type:Number,reflect:!0,attribute:!0})],Je.prototype,"opacity");nt([c({type:Number,reflect:!0})],Je.prototype,"from");nt([c({type:Number,reflect:!0})],Je.prototype,"to");nt([c()],Je.prototype,"author");nt([c()],Je.prototype,"recorded");nt([c()],Je.prototype,"license");nt([c()],Je.prototype,"label");nt([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Je.prototype,"showembed");nt([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Je.prototype,"showabout");nt([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Je.prototype,"showtutorial");nt([c({type:String,reflect:!1,converter:_e(!0)})],Je.prototype,"showfullscreen");nt([c({type:String,reflect:!0,converter:_e(!0)})],Je.prototype,"showhistogram");nt([z({context:Vr}),c({type:String,reflect:!0,converter:_e(!0)})],Je.prototype,"interactiveanalysis");nt([c({type:String,reflect:!0})],Je.prototype,"analysis1");nt([c({type:String,reflect:!0})],Je.prototype,"analysis2");nt([c({type:String,reflect:!0})],Je.prototype,"analysis3");nt([c({type:String,reflect:!0})],Je.prototype,"analysis4");nt([c({type:String,reflect:!0})],Je.prototype,"analysis5");nt([c({type:String,reflect:!0})],Je.prototype,"analysis6");nt([c({type:String,reflect:!0})],Je.prototype,"analysis7");nt([c({type:String,reflect:!0})],Je.prototype,"ms");nt([c({type:String,reflect:!0})],Je.prototype,"speed");nt([c({type:String,reflect:!0})],Je.prototype,"autoclear");nt([v()],Je.prototype,"hasGraph");nt([v()],Je.prototype,"hasAnalysis");nt([v()],Je.prototype,"isSequence");nt([z({context:si}),c({reflect:!0,converter:wi})],Je.prototype,"locale");var Px=Object.defineProperty,Ox=Object.getOwnPropertyDescriptor,Ax=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ox(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Px(e,t,s),s};let Vd=class extends Je{render(){return this.url===""?$:d`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${q(this.from)}
        to=${q(this.to)}
        opacity=${q(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}" autoclear=${this.autoclear}>

          <file-provider 
            thermal="${this.url}" 
            visible=${q(this.visible)}
            analysis1=${q(this.analysis1)}
            analysis2=${q(this.analysis2)}
            analysis3=${q(this.analysis3)}
            analysis4=${q(this.analysis4)}
            analysis5=${q(this.analysis5)}
            analysis6=${q(this.analysis6)}
            analysis7=${q(this.analysis7)}
            speed=${q(this.speed)}
            autoclear=${this.autoclear}
          >

              <file-app 
                author=${q(this.author)} 
                recorded=${q(this.recorded)} 
                license=${q(this.license)}
                label=${q(this.label)}  
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


    
    `}};Vd=Ax([W("thermal-file-app")],Vd);class Ex{constructor(e){this.steps=e,this.onStepInternalActivation=new te}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class ic{constructor(e){this._active=!1,this.onTourActivationStatus=new te,this.onStepActivation=new te,this.storage=new Ex(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new ic(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var Lx=Object.defineProperty,Dx=Object.getOwnPropertyDescriptor,Bt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lx(e,t,s),s};let Lt=class extends gt{constructor(){super(),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.showtutorial=!1,this.interactiveanalysis=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=pe(),this.contentContainerWidth=1e3,this.tourController=ic.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=st.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return d`


        <thermal-app author=${q(this.author)} recorded=${q(this.recorded)} license=${q(this.license)} showfullscreen="true">

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar" tour="palette">
            <tour-step placement="right-start" label=${b(y.colourpalette)}>
              ${b(y.palettehint)}
            </tour-step>
          </registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?d`<registry-opacity-slider slot="bar" style="width:4rem" tour="opacity">
            <tour-step slot="tour" label="Visible image">
              Use the slider to show the visible image.
            </tour-step>
            </registry-opacity-slider>`:$}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${b(y.displaysettings)}>
                  <thermal-button slot="invoker" tourstepid="sth3">${b(y.displaysettings)}</thermal-button>
                  <div slot="content">
                  
                  <thermal-field 
                    label=${b(y.filerendering)} 
                    hint=${b(y.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${b(y.adjusttimescale)}
                    hint=${b(y.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${b(y.colourpalette)}
                    hint=${b(y.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?d` <thermal-field 
                    label="${b(y.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:$}

                  ${this.file&&this.file.timeline.isSequence?d` <thermal-field 
                    label="${b(y.graphlines)}"
                    hint=${b(y.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:$}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown tour="download">
                <tour-step slot="tour" placement="left" label="Downloads">Zde si to stáhněte, vy volové</tour-step>
              </file-download-dropdown>
            
              ${this.showabout===!0?d`<app-info-button></app-info-button>`:$}

              ${this.showtutorial===!0?d`<thermal-button @click=${()=>this.tourController.activate(!1)}>
                ${b(y.tutorial)}
              </thermal-button>`:$}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${ve(this.contentContainerRef)}>

                ${this.interactiveanalysis===!0?d`
                  <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?d`<group-tool-bar tour="tools">
                    <tour-step slot="tour" placement="right-top" label="Analysis tools">
                        Select a tool and draw an analysis on the IR image.
                    </tour-step>
                  </group-tool-bar>`:d`<group-tool-buttons tour="tools">
                    <tour-step slot="tour" placement="right-top">
                      Select a tool and draw an analysis on the IR image.
                    </tour-step>
        </group-tool-buttons>`}
                </div>
                `:$}

                <div class="content-container__part content-container__left">

                ${this.showhistogram===!0?d`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:$}
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
                    ${this.hasAnalysis?d`<file-analysis-table></file-analysis-table>`:d`<div class="placeholder">
                        <div class="placeholder-title">${b(y.analysis)}</div>
                        <div>${b(y.analysishint)}</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?d`
                      <div>${b(y[(e=this.tool)==null?void 0:e.description])}</div>
                    `:d`
                      <div>
                        <thermal-button tourstepid="sth4" @click=${()=>this.group.tool.selectTool("add-point")}>${b(y.addpoint)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>${b(y.addrectangle)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>${b(y.addellipsis)}</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?d`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?d`<div class="placeholder">
                      <div class="placeholder-title">${b(y.graph)}</div>
                      <div>${this.hasAnalysis===!1?b(y.graphhint1):Rt(b(y.graphhint2))}</div>
                    </div>`:$}
                  
                  </div>
                  `:$}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>

        <notation-content></notation-content>
    `}};Lt.styles=ne`


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
  
  `;Bt([c({type:String,reflect:!0,attribute:!0,converter:_e(!1)})],Lt.prototype,"showembed",2);Bt([c({type:String,reflect:!0,attribute:!0,converter:_e(!1)})],Lt.prototype,"showabout",2);Bt([c({type:String,reflect:!0,attribute:!0,converter:_e(!1)})],Lt.prototype,"showfullscreen",2);Bt([c({type:Boolean,reflect:!0,converter:_e(!0)})],Lt.prototype,"showhistogram",2);Bt([c({type:String,reflect:!1,attribute:!0})],Lt.prototype,"showtutorial",2);Bt([le({context:Vr,subscribe:!0})],Lt.prototype,"interactiveanalysis",2);Bt([v()],Lt.prototype,"hasAnalysis",2);Bt([v()],Lt.prototype,"hasGraph",2);Bt([v()],Lt.prototype,"tool",2);Bt([v()],Lt.prototype,"isSequence",2);Bt([c()],Lt.prototype,"author",2);Bt([c()],Lt.prototype,"recorded",2);Bt([c()],Lt.prototype,"license",2);Bt([c()],Lt.prototype,"label",2);Bt([z({context:cp})],Lt.prototype,"tourController",2);Bt([z({context:dp})],Lt.prototype,"tourStep",2);Bt([v()],Lt.prototype,"contentContainerWidth",2);Lt=Bt([W("desktop-app")],Lt);const sc={fromAttribute:r=>{if(r){const e=r.split(":").map(Number);if(e.some(isNaN))return;if(e.length===3){const[t,i,s]=e;return t*6e4+i*1e3+s}else if(e.length===4){const[t,i,s,n]=e;return t*36e5+i*6e4+s*1e3+n}}},toAttribute:r=>{if(r!==void 0){const e=Math.floor(r/36e5),t=Math.floor(r%36e5/6e4),i=Math.floor(r%6e4/1e3),s=r%1e3,n=String(i).padStart(2,"0"),a=String(s).padStart(3,"0");return e>0?`${e}:${t}:${n}:${a}`:`${t}:${n}:${a}`}}};var Rx=Object.defineProperty,Mx=Object.getOwnPropertyDescriptor,Oi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rx(e,t,s),s};let Br=class extends He{constructor(){super(...arguments),this._active=!1}get active(){return this._active}willUpdate(r){super.willUpdate(r),r.has("duration")&&this.from!==void 0&&this.duration!==void 0&&(this.to=this.from+this.duration),r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from),r.has("from")&&!r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from)}activate(){this._active===!1&&(this._active=!0)}deactivate(){this._active===!0&&(this._active=!1)}setMs(r){this.from!==void 0&&this.to!==void 0&&(r>=this.from&&r<this.to?this.activate():this.deactivate())}getRenderContent(){return Array.from(this.slotContent)}getTTSString(){}render(){return d`
            <slot style="display: none;"></slot>
        `}};Oi([c({type:Number,reflect:!0,converter:sc})],Br.prototype,"from",2);Oi([c({type:Number,reflect:!0,converter:sc})],Br.prototype,"to",2);Oi([c({type:Number,reflect:!0,converter:sc})],Br.prototype,"duration",2);Oi([c({type:String,reflect:!0})],Br.prototype,"label",2);Oi([c({type:String})],Br.prototype,"image",2);Oi([c({type:String,reflect:!0})],Br.prototype,"say",2);Oi([c({type:String,reflect:!0})],Br.prototype,"color",2);Oi([v()],Br.prototype,"_active",2);Oi([br()],Br.prototype,"slotContent",2);Br=Oi([W("notation-entry")],Br);const xa="NotationListContext",Sa="NotationCurrentContext",$a="NotationDurationContext",jr=r=>r.filter(e=>e instanceof Br),rl=(r,e)=>{const t=[];for(const i of e.notationList)i.from!==void 0&&i.to!==void 0&&(i.from<=r&&i.to>r?(t.push(i),i.activate()):i.deactivate());return t};var Tx=Object.defineProperty,Ix=Object.getOwnPropertyDescriptor,Us=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ix(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tx(e,t,s),s};let ds=class extends Je{constructor(){super(...arguments),this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observer=null}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges(),this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.add(this.UUID,e=>{this.duration=e.timeline.duration,e.timeline.addListener(this.UUID,t=>{this.updateNotationsMs(t)})})}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=jr(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=jr(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=jr(r.assignedElements())}))}updateNotationsMs(r){this.notationCurrent=rl(r,this)}render(){return this.url===""?$:d`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${q(this.from)}
        to=${q(this.to)}
        opacity=${q(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${ve(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${q(this.visible)}
            analysis1=${q(this.analysis1)}
            analysis2=${q(this.analysis2)}
            analysis3=${q(this.analysis3)}
            analysis4=${q(this.analysis4)}
            analysis5=${q(this.analysis5)}
            analysis6=${q(this.analysis6)}
            analysis7=${q(this.analysis7)}
            speed=${q(this.speed)}
            autoclear=${this.autoclear}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${q(this.author)} 
              recorded=${q(this.recorded)} 
              license=${q(this.license)}
              label=${q(this.label)}
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


    
    `}};Us([v()],ds.prototype,"ms",2);Us([v(),br({flatten:!0})],ds.prototype,"_notationSlot",2);Us([v()],ds.prototype,"notations",2);Us([v(),z({context:$a})],ds.prototype,"duration",2);Us([v(),z({context:xa})],ds.prototype,"notationList",2);Us([v(),z({context:Sa})],ds.prototype,"notationCurrent",2);ds=Us([W("thermal-file-analyser")],ds);var Ux=Object.defineProperty,zx=Object.getOwnPropertyDescriptor,Tr=(r,e,t,i)=>{for(var s=i>1?void 0:i?zx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ux(e,t,s),s};let nr=class extends He{constructor(){super(...arguments),this.dropinRef=pe(),this.groupRef=pe(),this.loaded=!1,this.files=[],this.interactiveanalysis=!0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback(),zp().then(r=>this.ip=r)}firstUpdated(r){super.firstUpdated(r),bi(this),this.groupRef.value!==void 0&&this.groupRef.value.group.files.addListener(this.UUID,e=>{this.groupRef.value!==void 0&&(this.groupRef.value.group.analysisSync.turnOff(),e.length>0&&this.groupRef.value.group.analysisSync.turnOn(e[0])),e.forEach(t=>{t.analysis.reset(),t.analysis.layers.clear();const i={ip:this.ip,fileName:t.fileName,fileSize:t.bytesize,fileIsSequence:t.timeline.isSequence,fileNumFrames:t.timeline.frameCount,fileWidth:t.width,fileHeight:t.height,fileTimestamp:t.timeline.frames[0].absolute,fileDataType:t.fileDataType,userAgent:window.navigator.userAgent,windowWidth:window.innerWidth,windowHeight:window.innerHeight,time:new Date().getTime(),url:window.location.href};this.dispatchEvent(new CustomEvent("uploaded",{detail:i,bubbles:!0,composed:!0}))}),this.listener!==void 0&&clearTimeout(this.listener),e.length===0?this.files=[]:this.files=[e[0]],this.listener=setTimeout(async()=>{var i;const t=(i=this.groupRef.value)==null?void 0:i.group.registry;t!==void 0&&(await t.postLoadedProcessing(),t.minmax.value!==void 0&&t.range.imposeRange({from:t.minmax.value.min,to:t.minmax.value.max}))},0),this.log("files",e)})}handleClear(){this.groupRef.value!==void 0&&this.groupRef.value.group.files.removeAllInstances()}renderIntroScene(){return d`
            <group-dropin></group-dropin>
        `}renderBrowserScene(){return d`
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
        `}renderOneFile(){return d`
        ${this.files.map(r=>this.renderDetail(r,!0))}
        `}renderFileHeader(r){return d`
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

                    <div>${st.human(r.timestamp)}</div>
                </div>
            </header>
        `}renderDetail(r,e=!1){return d`
            <article class="file">
                <file-mirror .file="${r}" autoclear="true">

                    ${this.renderFileHeader(r)}

                    ${e===!0?d`
                        <div class="file-expanded">
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                            </div>
                            <div>
                                <file-analysis-complex></file-analysis-complex>
                            </div>
                        </div>
                        `:d`
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                                <file-analysis-overview></file-analysis-overview>
                                <file-analysis-graph></file-analysis-graph>
                            </div>
                        `}
                
                </file-mirror>
            </article>
        `}renderMultipleFiles(){return d`
        <div class="files-multiple">
        ${this.files.map(r=>this.renderDetail(r,!1))}
        </div>
        `}render(){return d`

            <manager-provider slug="${this.UUID}" palette="iron">

                <registry-provider slug="${this.UUID}" palette="iron">

                    <group-provider ${ve(this.groupRef)} slug="${this.UUID}">

                        <thermal-app label="LabIR Edu Analyser" showfullscreen="true">
                            <div slot="bar" style="flex-grow: 1;">
                                <thermal-bar>

                                    <group-dropin-input></group-dropin-input>

                                    ${this.files.length>0?d`
                                        <thermal-button @click="${()=>this.handleClear()}">${b(y.clear)}</thermal-button>
                                        <registry-palette-dropdown></registry-palette-dropdown>
                                        <registry-range-full-button></registry-range-full-button>
                                        <registry-range-auto-button></registry-range-auto-button>
                                        
                                    `:$}

                                    ${this.files.length>1?d`<group-download-dropdown></group-download-dropdown><registry-range-full-button></registry-range-full-button>`:$}

                                    <slot name="header"></slot>
                                </thermal-bar>
                            </div>

                            <thermal-dialog label="${b(y.config)}" slot="close">
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

        `}};nr.styles=ne`
    
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

    `;Tr([v()],nr.prototype,"dropinRef",2);Tr([v()],nr.prototype,"groupRef",2);Tr([v()],nr.prototype,"loaded",2);Tr([v()],nr.prototype,"listener",2);Tr([v()],nr.prototype,"files",2);Tr([v()],nr.prototype,"ip",2);Tr([z({context:Vr})],nr.prototype,"interactiveanalysis",2);Tr([z({context:ps})],nr.prototype,"pngExportWidth",2);Tr([z({context:fn})],nr.prototype,"pngExportWidthSetterContext",2);Tr([z({context:fs})],nr.prototype,"pngExportFs",2);Tr([z({context:gn})],nr.prototype,"pngExportFsSetterContext",2);Tr([z({context:si}),c({reflect:!0,converter:wi})],nr.prototype,"locale",2);nr=Tr([W("thermal-dropin-app")],nr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yd=r=>qf(r)?r._$litType$.h:r.strings,Wa=Zn(class extends Po{constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[e]){const t=Kc(this.it)?Yd(this.it):null,i=Kc(e)?Yd(e):null;if(t!==null&&(i===null||t!==i)){const s=ed(r).pop();let n=this.et.get(t);if(n===void 0){const a=document.createDocumentFragment();n=du($,a),n.setConnected(!1),this.et.set(t,n)}Qc(n,[s]),Jc(n,void 0,s)}if(i!==null){if(t===null||t!==i){const s=this.et.get(i);if(s!==void 0){const n=ed(s).pop();Zf(r),Jc(r,void 0,n),Qc(r,[n])}}this.it=e}else this.it=void 0;return this.render(e)}});var Fx=Object.defineProperty,jx=Object.getOwnPropertyDescriptor,Ue=(r,e,t,i)=>{for(var s=i>1?void 0:i?jx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fx(e,t,s),s};const qd=[{key:"simple",icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15H21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'},{key:"advanced",icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12L21 12M12 3L12 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'},{key:"lesson",icon:'<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentcolor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>layout_11_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Design" transform="translate(-48.000000, -288.000000)"> <g id="layout_11_line" transform="translate(48.000000, 288.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M3,5 C3,3.89543 3.89543,3 5,3 L19,3 C20.1046,3 21,3.89543 21,5 L21,19 C21,20.1046 20.1046,21 19,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,5 Z M8,5 L5,5 L5,19 L8,19 L8,5 Z M10,5 L10,8 L19,8 L19,5 L10,5 Z M10,10 L10,19 L19,19 L19,10 L10,10 Z" id="形状" fill="currentcolor"> </path> </g> </g> </g> </g></svg>'}],Nx=["analysis1","analysis2","analysis3","analysis4","analysis5","analysis6","analysis7"];let Re=class extends He{constructor(){super(...arguments),this.fileProviderRef=pe(),this.layout="simple",this.palette="jet",this.showfullscreen=!0,this.showscale=!0,this.showhistogram=!0,this.showlayout=!1,this.showshare=!1,this.interactiveanalysis=!0,this.loading=!0,this.hasVisible=!1,this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r},this.observer=null}updateNotationsMs(r){this.notationCurrent=rl(r,this)}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=jr(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=jr(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=jr(r.assignedElements())}))}get file(){if(this.fileProviderRef.value!==void 0)return this.fileProviderRef.value.file}firstUpdated(r){super.firstUpdated(r),setTimeout(()=>{this.updateNotationsMs(this.ms)},0),this.observeSlotChanges(),bi(this),this.hydrateInternalListeners()}hydrateInternalListeners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,r=>{this.loading=!1,this.recorded=st.human(r.timestamp),this.hasVisible=r.visibleUrl!==void 0,this.duration=r.timeline.duration,r.timeline.addListener(this.UUID,e=>{this.updateNotationsMs(e)}),r.group.registry.range.addListener(this.UUID+"mirror_changes",e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from!==e.from&&(this.from=e.from),this.to!==e.to&&(this.to=e.to))}),r.group.registry.opacity.addListener(this.UUID+"mirror_changes",e=>{e!==this.opacity&&(this.opacity=e)}),r.group.registry.manager.palette.addListener(this.UUID+"mirror_changes",e=>{this.palette!==e&&(this.palette=e)}),r.slots.onSlot1Serialize.set(this.UUID,e=>{this.analysis1!==e&&(this.analysis1=e)}),r.slots.onSlot2Serialize.set(this.UUID,e=>{this.analysis2!==e&&(this.analysis2=e)}),r.slots.onSlot3Serialize.set(this.UUID,e=>{this.analysis3!==e&&(this.analysis3=e)}),r.slots.onSlot4Serialize.set(this.UUID,e=>{this.analysis4!==e&&(this.analysis4=e)}),r.slots.onSlot5Serialize.set(this.UUID,e=>{this.analysis5!==e&&(this.analysis5=e)}),r.slots.onSlot6Serialize.set(this.UUID,e=>{this.analysis6!==e&&(this.analysis6=e)}),r.slots.onSlot7Serialize.set(this.UUID,e=>{this.analysis7!==e&&(this.analysis7=e)})})}updated(r){if(super.updated(r),this.file!==void 0){const t=this.file.group.registry,i=t.manager;r.has("from")&&r.has("to")&&(this.from!==void 0&&this.to!==void 0?this.file.group.registry.range.imposeRange({from:this.from,to:this.to}):this.file.group.registry.range.imposeRange(void 0)),r.has("opacity")&&this.opacity!==void 0&&this.opacity!==t.opacity.value&&this.file.group.registry.opacity.imposeOpacity(this.opacity),r.has("palette")&&this.palette!==i.palette.value&&i.palette.setPalette(this.palette),Nx.forEach((s,n)=>{var a;if(this.file!==void 0&&r.has(s)){const o=n+1,l=this[s],h=(a=this.file.slots.getSlot(o))==null?void 0:a.serialized;if(l!==h){const f=this.file.slots.getSlot(o);l!==void 0?f!==void 0?f.recieveSerialized(l):this.file.slots.createFromSerialized(l,o):this.file.slots.hasSlot(o)&&this.file.slots.removeSlotAndAnalysis(o)}}})}this.outerHTMLSnapshot=this.outerHTML}getLabel(){return this.loading===!0?b(y.loading):this.label!==void 0?this.label:this.label===void 0&&this.file!==void 0?this.file.fileName:b(y.file)}setLayout(r){this.layout=r,setTimeout(()=>{this.fileProviderRef.value&&this.file&&(this.fileProviderRef.value.redraw(),this.updateNotationsMs(0))},0)}renderNogui(){return d`
            ${this.renderScale()}
            <file-canvas></file-canvas>
            <file-timeline></file-timeline>
            <file-analysis-table ></file-analysis-table>
            <file-analysis-graph></file-analysis-graph>
    `}renderApp(){return d`
        
            <thermal-app
                label="${this.getLabel()}"
                author="${q(this.author)}"
                license="${q(this.license)}"
                showfullscreen="${this.showfullscreen}"
                recorded="${q(this.recorded)}"
            >

                ${this.showlayout?this.renderLayoutSwitch():$}

                ${Wa(d`<registry-palette-dropdown slot="bar"></registry-palette-dropdown>

                <div slot="bar" style="flex-grow: 4;">
                    <thermal-bar>
                        <registry-range-full-button></registry-range-full-button>
                        <registry-range-auto-button></registry-range-auto-button>
                        <file-info-button></file-info-button>
                        <file-download-dropdown></file-download-dropdown>
                        ${this.hasVisible?d`<registry-opacity-slider></registry-opacity-slider>`:$}
                    </thermal-bar>
                </div>`)}

                ${this.showshare?d`<thermal-dialog label="${b(y.share)}" slot="close" class="share">
                    <thermal-button slot="invoker">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z" />
                        </svg>
                    </thermal-button>
                    <div slot="content">
                        <p>${b(y.embedhint)}</p>
                        <h2>1. ${b(y.embedlibrary)} <thermal-button @click="${()=>navigator.clipboard.writeText(`<script src="https://cdn.jsdelivr.net/npm/@labir/embed@${Ys}/dist/embed.min.js"><\/script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labir/embed@${Ys}/dist/embed.min.css">`)}">${b(y.copy)}</thermal-button></h2>
                        <pre>&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labir/embed@${Ys}/dist/embed.min.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@labir/embed@${Ys}/dist/embed.min.css&quot;&gt;</pre>
                        <h2>2. ${b(y.embedcomponent)} <thermal-button @click="${()=>navigator.clipboard.writeText(this.outerHTMLSnapshot)}">${b(y.copy)}</thermal-button></h2>
                        <pre>${this.outerHTMLSnapshot}</pre>
                    </div>
                </thermal-dialog>`:$}

                ${Wa(d`<thermal-dialog label="${b(y.config)}" slot="close">
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
                        ${this.layout==="advanced"||this.layout==="lesson"?this.renderScale():$}
                        ${Wa(d`<file-canvas></file-canvas>`)}
                        <file-timeline></file-timeline>
                    </main>
                    <notation-content class="notations"></notation-content>

                    ${this.layout==="advanced"?d`<file-analysis-complex class="complex"></file-abnalysis-complex>`:d`<file-analysis-table class="analysis"></file-analysis-table>
                        <file-analysis-graph class="graph"></file-analysis-graph>`}
                </div>


                ${this.layout==="simple"?d`<aside slot="pre">${this.renderScale()}</aside>`:$}


            </thermal-app>`}renderScale(){return d`${this.showhistogram?Wa(d`<registry-histogram expandable="true"></registry-histogram>`):$}
    ${this.showscale?d`<registry-range-slider></registry-range-slider>`:$}
    ${this.showhistogram||this.showscale?d`<registry-ticks-bar placement="top"></registry-ticks-bar>`:$}`}renderOneLayoutItem(r,e,t=!1){return d`<div class="layout-item">
        ${Vh(r)}
        ${t?d`<span>${b(y[`layout_${e}`])}</span>`:$}
    </div>`}renderLayoutSwitch(){const r=qd.find(t=>t.key===this.layout);if(!r)return $;const e=qd.map(t=>({...t,action:t.key!==this.layout?()=>this.setLayout(t.key):void 0}));return d`<thermal-dropdown slot="close">
        <div slot="invoker">
            ${this.renderOneLayoutItem(r.icon,r.key,!1)}
        </div>
        
        ${e.map(t=>d`<div 
            slot="option" 
            class="layout-option ${t.action?"current":"available"}"
            @click=${t.action}
        >${this.renderOneLayoutItem(t.icon,t.key,!0)}</div>`)}

    </thermal-dropdown>`}render(){return d`
        
    <slot name="notation"></slot>

    <manager-provider 
        slug="${this.UUID}"
        palette="${this.palette}"
    >
        <registry-provider 
            slug="${this.UUID}"
            from="${q(this.from)}"
            to="${q(this.to)}"
            opacity="${this.opacity}"
        >
            <group-provider slug="${this.UUID}">

                <file-provider 
                    ${ve(this.fileProviderRef)} 
                    thermal="${this.url}"
                    visible="${q(this.visible)}"
                    batch="true"
                    analysis1="${q(this.analysis1)}"
                    analysis2="${q(this.analysis2)}"
                    analysis3="${q(this.analysis3)}"
                    analysis4="${q(this.analysis4)}"
                    analysis5="${q(this.analysis5)}"
                    analysis6="${q(this.analysis6)}"
                    analysis7="${q(this.analysis7)}"
                    autoclear="true"
                >

                    ${this.layout==="nogui"?this.renderNogui():this.renderApp()}

                </file-provider>

            </group-provider>
        </registry-provider>
    </manager-provider>`}};Re.styles=ne`

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

        }

        &.layout__simple {
            grid-template-columns: 2em 1fr;

            grid-template-areas: 
                "toolbar thermogram" 
                "toolbar analysis" 
                "toolbar graph" 
                "toolbar notations" 
                "toolbar complex";
        }


        &.layout__lesson {
            grid-template-columns: 2em 1fr calc(40% - var(--thermal-gap) );

            grid-template-areas: 
                "toolbar thermogram notations" 
                "toolbar analysis graph";

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

`;Ue([c({type:String,reflect:!0})],Re.prototype,"layout",2);Ue([c({type:String,reflect:!0})],Re.prototype,"url",2);Ue([c({type:String,reflect:!0})],Re.prototype,"visible",2);Ue([c({type:String,reflect:!0,attribute:!0})],Re.prototype,"palette",2);Ue([c({type:Number,reflect:!0})],Re.prototype,"from",2);Ue([c({type:Number,reflect:!0})],Re.prototype,"to",2);Ue([c({type:Number,reflect:!0})],Re.prototype,"opacity",2);Ue([c()],Re.prototype,"author",2);Ue([v()],Re.prototype,"recorded",2);Ue([c()],Re.prototype,"license",2);Ue([c()],Re.prototype,"label",2);Ue([c({type:String,reflect:!1,converter:_e(!0)})],Re.prototype,"showfullscreen",2);Ue([c({type:Boolean,reflect:!0,converter:_e(!0)})],Re.prototype,"showscale",2);Ue([c({type:Boolean,reflect:!0,converter:_e(!0)})],Re.prototype,"showhistogram",2);Ue([c({type:Boolean,reflect:!0,converter:_e(!1)})],Re.prototype,"showlayout",2);Ue([c({type:Boolean,reflect:!0,converter:_e(!1)})],Re.prototype,"showshare",2);Ue([c({type:String,reflect:!0})],Re.prototype,"analysis1",2);Ue([c({type:String,reflect:!0})],Re.prototype,"analysis2",2);Ue([c({type:String,reflect:!0})],Re.prototype,"analysis3",2);Ue([c({type:String,reflect:!0})],Re.prototype,"analysis4",2);Ue([c({type:String,reflect:!0})],Re.prototype,"analysis5",2);Ue([c({type:String,reflect:!0})],Re.prototype,"analysis6",2);Ue([c({type:String,reflect:!0})],Re.prototype,"analysis7",2);Ue([z({context:si}),c({reflect:!0,converter:wi})],Re.prototype,"locale",2);Ue([z({context:Vr}),c({type:String,reflect:!0,converter:_e(!0)})],Re.prototype,"interactiveanalysis",2);Ue([v()],Re.prototype,"loading",2);Ue([v()],Re.prototype,"hasVisible",2);Ue([v()],Re.prototype,"ms",2);Ue([v(),br({flatten:!0})],Re.prototype,"_notationSlot",2);Ue([v()],Re.prototype,"notations",2);Ue([v(),z({context:$a})],Re.prototype,"duration",2);Ue([v(),z({context:xa})],Re.prototype,"notationList",2);Ue([v(),z({context:Sa})],Re.prototype,"notationCurrent",2);Ue([z({context:ps})],Re.prototype,"pngExportWidth",2);Ue([z({context:fn})],Re.prototype,"pngExportWidthSetterContext",2);Ue([z({context:fs})],Re.prototype,"pngExportFs",2);Ue([z({context:gn})],Re.prototype,"pngExportFsSetterContext",2);Ue([v()],Re.prototype,"outerHTMLSnapshot",2);Re=Ue([W("thermal-file-new")],Re);var Hx=Object.defineProperty,Wx=Object.getOwnPropertyDescriptor,oi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hx(e,t,s),s};let Ar=class extends He{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return d`

            ${e?d`<h3 class="row-title">${e}</h3>`:$}

            ${t?d`<p>${t}</p>`:$}

            <section class=${Qt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>d`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};Ar.styles=ne`

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

    `;oi([c()],Ar.prototype,"columns",2);oi([c()],Ar.prototype,"breakpoint",2);oi([c({type:Object})],Ar.prototype,"files",2);oi([c({type:String})],Ar.prototype,"label",2);oi([c({type:String})],Ar.prototype,"info",2);oi([c({type:Number})],Ar.prototype,"from",2);oi([c({type:Number})],Ar.prototype,"to",2);oi([c({type:Number})],Ar.prototype,"cursor",2);oi([c({type:String})],Ar.prototype,"grouping",2);oi([v()],Ar.prototype,"collapsed",2);Ar=oi([W("time-group-row")],Ar);var Bx=Object.defineProperty,li=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Bx(e,t,s),s},zt;const Yr=(zt=class extends He{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.instanceRenderer=new zn(this),this.groupRenderer=new co(this),this.pngExportWidth=1200,this.pngExportWidthSetterContext=e=>{this.pngExportWidth=e},this.pngExportFs=20,this.pngExportFsSetterContext=e=>{this.pngExportFs=e}}parseFilesProperty(e){return e.split(zt.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(zt.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(zt.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[f,p]=h,g=f.trim(),S=p.trim();switch(g){case zt.FILE_THERMAL_KEY:s=S;break;case zt.FILE_VISIBLE_KEY:n=S;break;case zt.FILE_LABEL_KEY:a=S;break;case zt.FILE_NOTE_KEY:o=S;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},zt.FILE_RECORD_SEPARATOR=";",zt.FILE_SEGMENT_SEPAROATOR="|",zt.FILE_COMPONENT_SEPAROATOR="~",zt.FILE_THERMAL_KEY="thermal",zt.FILE_VISIBLE_KEY="visible",zt.FILE_LABEL_KEY="label",zt.FILE_NOTE_KEY="note",zt);li([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Yr.prototype,"showembed");li([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Yr.prototype,"showabout");li([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Yr.prototype,"showtutorial");li([c({type:String,reflect:!1,converter:_e(!0)})],Yr.prototype,"showfullscreen");li([c({type:String,reflect:!0,converter:_e(!0)})],Yr.prototype,"showhistogram");li([z({context:Vr}),c({type:String,reflect:!0,converter:_e(!0)})],Yr.prototype,"interactiveanalysis");li([z({context:ps})],Yr.prototype,"pngExportWidth");li([z({context:fn})],Yr.prototype,"pngExportWidthSetterContext");li([z({context:fs})],Yr.prototype,"pngExportFs");li([z({context:gn})],Yr.prototype,"pngExportFsSetterContext");li([z({context:si}),c({reflect:!0,converter:wi})],Yr.prototype,"locale");let tf=Yr;class Gx{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ti)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ti)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Iu(e).getTime():this.grouping==="day"?io(e).getTime():this.grouping==="week"?Mi(e).getTime():this.grouping==="month"?no(e).getTime():this.grouping==="year"?wh(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Au(e).getTime():this.grouping==="day"?Pu(e).getTime():this.grouping==="week"?ao(e).getTime():this.grouping==="month"?so(e).getTime():this.grouping==="year"?Ou(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:$e(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:$e(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+$e(e,"w")+" of "+$e(e,"yyyy"),info:[st.humanDate(Mi(e).getTime()),st.humanDate(ao(e).getTime())].join(" - ")}:this.grouping==="month"?{label:$e(e,"MMMM yyyy"),info:[st.humanDate(no(e).getTime()),st.humanDate(so(e).getTime())].join(" - ")}:this.grouping==="year"?{label:$e(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?st.human(e):this.grouping==="hour"||this.grouping==="day"?$e(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",st.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var Vx=Object.defineProperty,Yx=Object.getOwnPropertyDescriptor,mt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vx(e,t,s),s};let dt=class extends tf{constructor(){super(...arguments),this.groupRef=pe(),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new te,this.onColumns=new te,this.preservetime=!0,this.state=0,this.detail=void 0,this.loading=!1}connectedCallback(){super.connectedCallback();const t=Fo(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new Gx(this,t),this.onGroupInit.call(this.group)}async load(){this.loading=!0;const r=this.files?this.parseFilesProperty(this.files):[];r.length>0?this.grouper.processParsedFiles(r):this.grouper.processEntries(this.entries.filter(e=>e instanceof ji)),this.group.files.addListener(this.UUID,e=>{this.loading=!1,e.length<4?this.columns=e.length:this.columns=4})}firstUpdated(r){super.firstUpdated(r),bi(this),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to}),this.load()}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&this.files&&r.get("files")!==void 0){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}async showDetail(r,e){this.detail={lrc:r,png:e},this.group.files.removeAllInstances(),this.group.registry.range.reset(),this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.state=1,this.scrollToComponent()}async closeDetail(){delete this.detail,this.detail=void 0,this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.group.registry.range.reset(),this.load(),this.state=0,this.scrollToComponent()}renderGroup(){return d`${this.groups.map(r=>d`<section class="group">
                                        
            <div class="group-files group-files-${this.columns}">
                ${r.files.map(e=>d`<div class="file">
                    <file-mirror .file=${e.instance} autoclear="true">
                        <file-thumbnail
                            .ondetail=${()=>{this.showDetail(e.instance.thermalUrl,e.instance.visibleUrl)}}
                            label=${q(e.label)}
                        ></file-thumbnail>
                    </file-mirror>
                </div>`)}
            </div>
        </section>`)} `}renderDetail(){return this.detail===void 0?$:d`<div class="detail">
            <file-provider thermal="${this.detail.lrc}" visible="${this.detail.png}">
                <file-detail label="${this.label}" .onback=${()=>this.closeDetail()}></file-detail>
            </file-provider>
        </div>`}render(){return d`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}" from="${q(this.from)}" to="${q(this.to)}">

                    <group-provider slug="${this.slug}" autoclear="true" ${ve(this.groupRef)}>

                        <thermal-app
                            author=${q(this.author)}
                            license=${q(this.license)}
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

                                    ${this.loading===!1?d`
                                        <registry-palette-dropdown></registry-palette-dropdown>
                                        <registry-range-full-button></registry-range-full-button>
                                        <registry-range-auto-button></registry-range-auto-button>
                                        

                                        ${this.state===0?d`
                    ${this.grouper.numFiles>0?d`<group-download-dropdown></group-download-dropdown>`:$}
                                        <div>
                                        <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${b(y.columns,{num:this.columns})}</div>
                                    </div>
                                    <group-analysis-sync-button></group-analysis-sync-button>
                                        `:$}
                                    

                                        ${this.showabout===!0?d`<app-info-button ></app-info-button>`:$}

                                        `:$}

                                </thermal-bar>

                            </div>

                            <thermal-dialog label="${b(y.config)}" slot="close">
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

                            ${this.loading===!1?d`
                                    ${this.showhistogram===!0?d`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:$}

                                    <registry-range-slider slot="pre"></registry-range-slider>
                                    <registry-ticks-bar slot="pre"></registry-ticks-bar>
                                `:$}
                            

                            ${this.state===0?d`
                                <group-chart slot="pre"></group-chart>
                            `:$}

                            ${this.loading===!0?d`<thermal-loading message="${b(y.loading)}"></thermal-loading>`:d`<div class="app-content">

                                    <slot></slot>

                                    <group-tool-bar></group-tool-bar>

                                    <div class="app-content-main">
                                    ${this.state===0?this.renderGroup():this.renderDetail()}
                                    </div>
                            
                            </div>

                            ${this.state===0?d`
                                <group-timeline></group-timeline>
                            `:$}
                            `}
                            

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};dt.styles=ne`

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


    
    `;mt([c({type:String,reflect:!0,attribute:!0})],dt.prototype,"palette",2);mt([c({type:Number,reflect:!0})],dt.prototype,"from",2);mt([c({type:Number,reflect:!0})],dt.prototype,"to",2);mt([c({type:String,reflect:!0})],dt.prototype,"author",2);mt([c({type:String,reflect:!0})],dt.prototype,"label",2);mt([c({type:String,reflect:!1})],dt.prototype,"description",2);mt([c({type:String,reflect:!0})],dt.prototype,"license",2);mt([v(),br({slot:"entry",flatten:!0})],dt.prototype,"entries",2);mt([c({type:String,reflect:!0})],dt.prototype,"slug",2);mt([c()],dt.prototype,"columns",2);mt([c()],dt.prototype,"breakpoint",2);mt([c({type:String,reflect:!0})],dt.prototype,"grouping",2);mt([v()],dt.prototype,"groups",2);mt([c({type:String})],dt.prototype,"files",2);mt([c({type:String,reflect:!0})],dt.prototype,"analysis1",2);mt([c({type:String,reflect:!0})],dt.prototype,"analysis2",2);mt([c({type:String,reflect:!0})],dt.prototype,"analysis3",2);mt([c({type:String,reflect:!0})],dt.prototype,"analysis4",2);mt([c({type:String,reflect:!0})],dt.prototype,"analysis5",2);mt([c({type:String,reflect:!0})],dt.prototype,"analysis6",2);mt([c({type:String,reflect:!0})],dt.prototype,"analysis7",2);mt([c({type:String,reflect:!0,converter:_e(!1)})],dt.prototype,"preservetime",2);mt([v()],dt.prototype,"state",2);mt([v()],dt.prototype,"detail",2);mt([v()],dt.prototype,"loading",2);dt=mt([W("thermal-group-app")],dt);var qx=Object.defineProperty,Xx=Object.getOwnPropertyDescriptor,qi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qx(e,t,s),s};let Er=class extends Si{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=pe(),this.indicatorRef=pe()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.files.addListener(this.UUID,r=>{this.listener!==void 0&&clearTimeout(this.listener),this.listener=setTimeout(async()=>{this.onRegistryBatchEnded(r)},0)}),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof Ti?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=hh(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?$:d`<div class="container ticks-horizontal-indent">

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

            ${this.longestDurationInMs!==void 0?Xp(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):$}

        </div>`}};Er.TICK_WIDTH=50;Er.TICK_POINTER_HEIGHT=3;Er.styles=ne`


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


        ${Kp}
    
    `;qi([v()],Er.prototype,"longestDurationInMs",2);qi([v()],Er.prototype,"ms",2);qi([v()],Er.prototype,"pointerMs",2);qi([v()],Er.prototype,"playing",2);qi([v()],Er.prototype,"instances",2);qi([v()],Er.prototype,"has",2);qi([v()],Er.prototype,"ticks",2);qi([v()],Er.prototype,"listener",2);Er=qi([W("group-timeline")],Er);var Kx=Object.defineProperty,Zx=Object.getOwnPropertyDescriptor,Ir=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Kx(e,t,s),s};let ar=class extends tf{constructor(){super(...arguments),this.registryProviderRef=pe(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=Fo(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),bi(this),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof qt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return d`
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
                    <registry-ticks-bar highlightFrom=${q(this.highlightFrom)} highlightTo=${q(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};ar.styles=ne`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;Ir([c({type:String,reflect:!0,attribute:!0})],ar.prototype,"palette",2);Ir([c({type:Number,reflect:!0})],ar.prototype,"from",2);Ir([c({type:Number,reflect:!0})],ar.prototype,"to",2);Ir([c()],ar.prototype,"slug",2);Ir([c({type:String,reflect:!0})],ar.prototype,"grouping",2);Ir([c({type:String,reflect:!0})],ar.prototype,"columns",2);Ir([c({type:Number,reflect:!0})],ar.prototype,"breakpoint",2);Ir([c({type:String,reflect:!0})],ar.prototype,"groups",2);Ir([c({type:String,reflect:!0})],ar.prototype,"autogroups",2);Ir([z({context:si}),c({reflect:!0,converter:wi})],ar.prototype,"locale",2);Ir([br({flatten:!0}),v()],ar.prototype,"entries",2);Ir([v()],ar.prototype,"registry",2);ar=Ir([W("thermal-registry-app")],ar);var Jx=Object.defineProperty,Qx=Object.getOwnPropertyDescriptor,Xi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jx(e,t,s),s};let ii=class extends He{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=pe()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await kp(this.elementContext.element.getTourableRoot(),this,{middleware:[Cp(20),Ib({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return d`<div class=${Qt(r)}>

            <div id="arrow" ${this.arrowRef} class="arrow" style="position:absolute;"></div>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${()=>{var n;return(n=this.tour)==null?void 0:n.deactivate()}}>X</button> 
            </div>
            <div class="content">
                
                <slot></slot>

                ${this.youtube?d`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:$}

            </div>

            <div class="buttons">

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?d`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${b(y.back)}</thermal-button>`:$} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?d`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${b(y.next)}</thermal-button>`:$}          
            
            </div>

            

        </div>
        `}};ii.styles=ne`

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
    
    `;Xi([c({type:String})],ii.prototype,"label",2);Xi([v()],ii.prototype,"active",2);Xi([c({type:String,reflect:!0})],ii.prototype,"displayed",2);Xi([c({type:String})],ii.prototype,"placement",2);Xi([le({context:cp,subscribe:!0})],ii.prototype,"tour",2);Xi([le({context:dp,subscribe:!0})],ii.prototype,"definition",2);Xi([le({context:up,subscribe:!0})],ii.prototype,"elementContext",2);Xi([c({type:String})],ii.prototype,"youtube",2);ii=Xi([W("tour-step")],ii);var e2=Object.defineProperty,t2=Object.getOwnPropertyDescriptor,r2=(r,e,t,i)=>{for(var s=i>1?void 0:i?t2(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&e2(e,t,s),s};let Xd=class extends He{render(){return d`<thermal-dialog label="Export configuration">
            <thermal-button slot="invoker">Export config</thermal-button>
            <div slot="content">
                <png-export-panel></png-export-panel>
            </div>
        </thermal-dialog>`}};Xd=r2([W("png-export-config")],Xd);var i2=Object.defineProperty,s2=Object.getOwnPropertyDescriptor,$r=(r,e,t,i)=>{for(var s=i>1?void 0:i?s2(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&i2(e,t,s),s};let tr=class extends He{constructor(){super(...arguments),this.loading=!0,this.cls="md",this.palette="jet",this.showhistogram=!1,this.groupRef=pe(),this.group=void 0,this.clsx={xs:1,sm:2,md:3,lg:4,xl:5}}connectedCallback(){super.connectedCallback(),this.url!==void 0&&this.folder}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.disconnect(),this.resizeObserver=void 0}firstUpdated(r){super.firstUpdated(r),bi(this),this.groupRef.value&&(this.group=this.groupRef.value.group)}updated(r){var e;if(super.updated(r),(r.has("folder")||r.has("url")||r.has("subfolder"))&&(this.folder,this.url&&this.loadData(this.url,this.folder,this.subfolder)),r.has("data")){(e=this.resizeObserver)==null||e.disconnect(),delete this.resizeObserver,this.resizeObserver=new ResizeObserver(i=>{const n=i[0].contentRect.width;if(this.lastWidth!==n){let a="xs";n>500&&(a="sm"),n>900&&(a="md"),n>1300&&(a="lg"),n>1600&&(a="xl"),this.cls=a,this.lastWidth=n}});const t=this.renderRoot.querySelector(".files");t&&this.resizeObserver.observe(t)}}getUrl(r,e,t){return t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e}async loadData(r,e,t){try{this.loading=!0,this.group&&this.group.files.clearAllListeners();const i=t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e,s=await fetch(i,{});s.ok?(this.data=await s.json(),this.loading=!1,this.data.success===!1&&(this.error=`The remote folder <code>${i}</code> was not found!`)):(this.error=`The remote folder <code>${i}</code> was not found!`,this.loading=!1)}catch{this.error=`The remote folder <code>${r}</code> was not found!`,this.loading=!1}}renderloading(){return d`<div>

            Načítám vzdálenou složku ${this.folder} from ${this.url} 
        
        </div>`}renderData(r){return d`
            <div class="files ${this.cls}">
                ${r.files.map(e=>this.renderFile(e))}
            </div>
        `}renderFile(r){return d`<div class="file">
            <div class="file-inner">
                <file-provider 
                    thermal="${r.lrc}" 
                    visible=${q(r.png)}
                    batch="true"
                >

                    <div class="file-header">
                        <h2><span>${st.human(r.timestamp*1e3)}</span></h2>
                        <div>
                            <file-download-lrc></file-download-lrc>
                            <file-download-png></file-download-png>
                            <file-range-propagator></file-range-propagator>
                            <file-info-button>
                                <file-button slot="invoker" label="${b(y.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>

                        </div>
                    </div>
                    
                    <file-canvas></file-canvas>
                    <file-timeline hasPlayButton="false" hasInfo="false"></file-timeline>
                    <file-analysis-table interactiveanalysis="true"></file-analysis-table>
                </file-provider>
            </div>
        </div>`}clsToStr(r){return b(y.columns,{num:this.clsx[r]})}renderColumnsSwitch(){return d`<thermal-dropdown>
            <span slot="invoker">${this.clsToStr(this.cls)}</span>
            <thermal-button slot="option" @click=${()=>this.cls="xs"}>${this.clsx.xs}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="sm"}>${this.clsx.sm}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="md"}>${this.clsx.md}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="lg"}>${this.clsx.lg}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="xl"}>${this.clsx.xl}</thermal-button>
        </thermal-dropdown>`}renderInfo(){if(this.data){const r=this.getUrl(this.url,this.folder,this.subfolder),e="Request",t={"API Root":this.url,Subfolder:this.subfolder,Folder:this.folder,[e]:r};return d`
                <thermal-dialog label="Remote folder info">

                    <slot name="invoker" slot="invoker">
                        <thermal-button>Remote folder info</thermal-button>
                    </slot>

                    <div slot="content">

                        ${this.data.info.description?d`<p>${this.data.info.description}</p>`:$}

                        <table>
                            
                            <caption>Request information</caption>

                            <tbody>

                                ${Object.entries(t).map(([i,s])=>{const a=i===e?d`<a href="${s}" target="_blank">${s}</a>`:s;return d`<tr>
                                        <td>${i}</td>
                                        <td>${a}</td>
                                    </tr>`})}
                            
                            </tbody>

                        </table>
                    
                    </div>
                
                </thermal-dialog>
            `}return $}render(){var e;let r=b(y.loading)+"...";return((e=this.data)==null?void 0:e.info)!==void 0&&(r=this.data.info.name),this.error!==void 0&&(r="Error"),d`
            <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                <registry-provider slug="folders_app_registry">
                    <group-provider slug="folders_app_group" ${ve(this.groupRef)}>
        
                        <thermal-app
                            author=${q(this.author)}
                            license=${q(this.license)}
                        >

                            <thermal-button variant="foreground" interactive="false" slot="bar">
                                ${r}
                            </thermal-button>

                            ${this.error===void 0?d`

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

                            ${this.showhistogram?d`<registry-histogram></registry-histogram>`:$}
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>`:$}
                            
                        ${this.error?Rt(this.error):$}

                        ${this.error===void 0&&this.data?this.renderData(this.data):$}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`}};tr.styles=ne`


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

    `;$r([c({type:String,reflect:!0})],tr.prototype,"url",2);$r([c({type:String,reflect:!0})],tr.prototype,"subfolder",2);$r([c({type:String,reflect:!0})],tr.prototype,"folder",2);$r([v()],tr.prototype,"error",2);$r([v()],tr.prototype,"loading",2);$r([v()],tr.prototype,"data",2);$r([v()],tr.prototype,"label",2);$r([v()],tr.prototype,"cls",2);$r([c({type:String,reflect:!0})],tr.prototype,"license",2);$r([c({type:String,reflect:!0})],tr.prototype,"author",2);$r([c({type:String,reflect:!0,attribute:!0})],tr.prototype,"palette",2);$r([c({type:String,reflect:!0,converter:_e(!0)})],tr.prototype,"showhistogram",2);$r([z({context:si}),c({reflect:!0,converter:wi})],tr.prototype,"locale",2);tr=$r([W("remote-folder-app")],tr);var Ss=(r=>(r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(Ss||{});class Wl{constructor(e,t){u(this,"url");u(this,"query");this.api_endpoint=e,this.subfolder=t,this.url=new URL(this.api_endpoint),this.query=this.url.searchParams,this.subfolder!==void 0&&this.query.set("scope",this.subfolder)}setOnly(e){return this.query.set("only",e),this}setExclude(e){return this.query.set("exclude",e),this}setGrid(e){e===!0?this.query.set("grid","true"):this.query.delete("grid")}async info(){return this.fetch()}async folder(e){return this.query.set("folder",e),this.fetch()}async everything(){return this.query.set("everything","true"),this.fetch()}async hours(){return this.query.set("hours","true"),this.fetch()}async days(){return this.query.set("days","true"),this.fetch()}async weeks(){return this.query.set("weeks","true"),this.fetch()}async months(){return this.query.set("months","true"),this.fetch()}async years(){return this.query.set("years","true"),this.fetch()}async grid(e){switch(e){case"hours":return await this.hours();case"days":return await this.days();case"weeks":return await this.days();case"months":return await this.months();case"years":return await this.years();default:return await this.hours()}}async fetch(){return console.info("Fetching",this.url),await(await fetch(this.url)).json()}get object(){return this.url}}const n2={lessThanXSeconds:{one:{regular:"méně než 1 sekunda",past:"před méně než 1 sekundou",future:"za méně než 1 sekundu"},few:{regular:"méně než {{count}} sekundy",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekundy"},many:{regular:"méně než {{count}} sekund",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekund"}},xSeconds:{one:{regular:"1 sekunda",past:"před 1 sekundou",future:"za 1 sekundu"},few:{regular:"{{count}} sekundy",past:"před {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"před {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než 1 minuta",past:"před méně než 1 minutou",future:"za méně než 1 minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"1 minuta",past:"před 1 minutou",future:"za 1 minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně 1 hodina",past:"přibližně před 1 hodinou",future:"přibližně za 1 hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"1 hodina",past:"před 1 hodinou",future:"za 1 hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"1 den",past:"před 1 dnem",future:"za 1 den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXWeeks:{one:{regular:"přibližně 1 týden",past:"přibližně před 1 týdnem",future:"přibližně za 1 týden"},few:{regular:"přibližně {{count}} týdny",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdny"},many:{regular:"přibližně {{count}} týdnů",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdnů"}},xWeeks:{one:{regular:"1 týden",past:"před 1 týdnem",future:"za 1 týden"},few:{regular:"{{count}} týdny",past:"před {{count}} týdny",future:"za {{count}} týdny"},many:{regular:"{{count}} týdnů",past:"před {{count}} týdny",future:"za {{count}} týdnů"}},aboutXMonths:{one:{regular:"přibližně 1 měsíc",past:"přibližně před 1 měsícem",future:"přibližně za 1 měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"1 měsíc",past:"před 1 měsícem",future:"za 1 měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně 1 rok",past:"přibližně před 1 rokem",future:"přibližně za 1 rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"1 rok",past:"před 1 rokem",future:"za 1 rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než 1 rok",past:"před více než 1 rokem",future:"za více než 1 rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro 1 rok",past:"skoro před 1 rokem",future:"skoro za 1 rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}},a2=(r,e,t)=>{let i;const s=n2[r];s.type==="other"?i=s.other:e===1?i=s.one:e>1&&e<5?i=s.few:i=s.many;const n=(t==null?void 0:t.addSuffix)===!0,a=t==null?void 0:t.comparison;let o;return n&&a===-1?o=i.past:n&&a===1?o=i.future:o=i.regular,o.replace("{{count}}",String(e))},o2={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},l2={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},h2={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},c2={date:Ft({formats:o2,defaultWidth:"full"}),time:Ft({formats:l2,defaultWidth:"full"}),dateTime:Ft({formats:h2,defaultWidth:"full"})},d2=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],u2={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:r=>{const e=r.getDay();return"'v "+d2[e]+" o' p"},other:"P"},p2=(r,e)=>{const t=u2[r];return typeof t=="function"?t(e):t},f2={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},g2={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},m2={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},v2={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},y2={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},b2={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},w2={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},x2=(r,e)=>Number(r)+".",S2={ordinalNumber:x2,era:vt({values:f2,defaultWidth:"wide"}),quarter:vt({values:g2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:vt({values:m2,defaultWidth:"wide",formattingValues:v2,defaultFormattingWidth:"wide"}),day:vt({values:y2,defaultWidth:"wide"}),dayPeriod:vt({values:b2,defaultWidth:"wide",formattingValues:w2,defaultFormattingWidth:"wide"})},$2=/^(\d+)\.?/i,_2=/\d+/i,C2={narrow:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},k2={any:[/^p[řr]/i,/^(po|n)/i]},P2={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},O2={any:[/1/i,/2/i,/3/i,/4/i]},A2={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},E2={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},L2={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},D2={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[úu]t/i,/^st/i,/^[čc]t/i,/^p[áa]/i,/^so/i]},R2={any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i},M2={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},T2={ordinalNumber:Qn({matchPattern:$2,parsePattern:_2,valueCallback:r=>parseInt(r,10)}),era:yt({matchPatterns:C2,defaultMatchWidth:"wide",parsePatterns:k2,defaultParseWidth:"any"}),quarter:yt({matchPatterns:P2,defaultMatchWidth:"wide",parsePatterns:O2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:yt({matchPatterns:A2,defaultMatchWidth:"wide",parsePatterns:E2,defaultParseWidth:"any"}),day:yt({matchPatterns:L2,defaultMatchWidth:"wide",parsePatterns:D2,defaultParseWidth:"any"}),dayPeriod:yt({matchPatterns:R2,defaultMatchWidth:"any",parsePatterns:M2,defaultParseWidth:"any"})},I2={code:"cs",formatDistance:a2,formatLong:c2,formatRelative:p2,localize:S2,match:T2,options:{weekStartsOn:1,firstWeekContainsDate:4}},U2={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},z2=(r,e,t)=>{let i;const s=U2[r];return typeof s=="string"?i=s:e===1?i=s.one:e===2&&s.two?i=s.two:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"mewn "+i:i+" yn ôl":i},F2={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},j2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},N2={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},H2={date:Ft({formats:F2,defaultWidth:"full"}),time:Ft({formats:j2,defaultWidth:"full"}),dateTime:Ft({formats:N2,defaultWidth:"full"})},W2={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},B2=(r,e,t,i)=>W2[r],G2={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},V2={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},Y2={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},q2={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},X2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},K2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},Z2=(r,e)=>{const t=Number(r);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||t===80||t>=100)return t+"fed";return t+"ain"},J2={ordinalNumber:Z2,era:vt({values:G2,defaultWidth:"wide"}),quarter:vt({values:V2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:vt({values:Y2,defaultWidth:"wide"}),day:vt({values:q2,defaultWidth:"wide"}),dayPeriod:vt({values:X2,defaultWidth:"wide",formattingValues:K2,defaultFormattingWidth:"wide"})},Q2=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,e5=/\d+/i,t5={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},r5={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},i5={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},s5={any:[/1/i,/2/i,/3/i,/4/i]},n5={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},a5={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},o5={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},l5={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},h5={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},c5={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},d5={ordinalNumber:Qn({matchPattern:Q2,parsePattern:e5,valueCallback:r=>parseInt(r,10)}),era:yt({matchPatterns:t5,defaultMatchWidth:"wide",parsePatterns:r5,defaultParseWidth:"any"}),quarter:yt({matchPatterns:i5,defaultMatchWidth:"wide",parsePatterns:s5,defaultParseWidth:"any",valueCallback:r=>r+1}),month:yt({matchPatterns:n5,defaultMatchWidth:"wide",parsePatterns:a5,defaultParseWidth:"any"}),day:yt({matchPatterns:o5,defaultMatchWidth:"wide",parsePatterns:l5,defaultParseWidth:"any"}),dayPeriod:yt({matchPatterns:h5,defaultMatchWidth:"any",parsePatterns:c5,defaultParseWidth:"any"})},u5={code:"cy",formatDistance:z2,formatLong:H2,formatRelative:B2,localize:J2,match:d5,options:{weekStartsOn:0,firstWeekContainsDate:1}},Kd={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},p5=(r,e,t)=>{let i;const s=t!=null&&t.addSuffix?Kd[r].withPreposition:Kd[r].standalone;return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:"vor "+i:i},f5={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},g5={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},m5={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},v5={date:Ft({formats:f5,defaultWidth:"full"}),time:Ft({formats:g5,defaultWidth:"full"}),dateTime:Ft({formats:m5,defaultWidth:"full"})},y5={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},b5=(r,e,t,i)=>y5[r],w5={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},x5={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ph={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},S5={narrow:ph.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ph.wide},$5={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},_5={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},C5={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},k5=r=>Number(r)+".",P5={ordinalNumber:k5,era:vt({values:w5,defaultWidth:"wide"}),quarter:vt({values:x5,defaultWidth:"wide",argumentCallback:r=>r-1}),month:vt({values:ph,formattingValues:S5,defaultWidth:"wide"}),day:vt({values:$5,defaultWidth:"wide"}),dayPeriod:vt({values:_5,defaultWidth:"wide",formattingValues:C5,defaultFormattingWidth:"wide"})},O5=/^(\d+)(\.)?/i,A5=/\d+/i,E5={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},L5={any:[/^v/i,/^n/i]},D5={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},R5={any:[/1/i,/2/i,/3/i,/4/i]},M5={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},T5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},I5={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},U5={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},z5={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},F5={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},j5={ordinalNumber:Qn({matchPattern:O5,parsePattern:A5,valueCallback:r=>parseInt(r)}),era:yt({matchPatterns:E5,defaultMatchWidth:"wide",parsePatterns:L5,defaultParseWidth:"any"}),quarter:yt({matchPatterns:D5,defaultMatchWidth:"wide",parsePatterns:R5,defaultParseWidth:"any",valueCallback:r=>r+1}),month:yt({matchPatterns:M5,defaultMatchWidth:"wide",parsePatterns:T5,defaultParseWidth:"any"}),day:yt({matchPatterns:I5,defaultMatchWidth:"wide",parsePatterns:U5,defaultParseWidth:"any"}),dayPeriod:yt({matchPatterns:z5,defaultMatchWidth:"wide",parsePatterns:F5,defaultParseWidth:"any"})},N5={code:"de",formatDistance:p5,formatLong:v5,formatRelative:b5,localize:P5,match:j5,options:{weekStartsOn:1,firstWeekContainsDate:4}},H5={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},W5={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},B5={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},G5={date:Ft({formats:H5,defaultWidth:"full"}),time:Ft({formats:W5,defaultWidth:"full"}),dateTime:Ft({formats:B5,defaultWidth:"full"})},V5={code:"en-GB",formatDistance:Eu,formatLong:G5,formatRelative:Lu,localize:Du,match:Ru,options:{weekStartsOn:1,firstWeekContainsDate:4}},Y5={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},q5=(r,e,t)=>{let i;const s=Y5[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dans "+i:"il y a "+i:i},X5={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},K5={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Z5={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},J5={date:Ft({formats:X5,defaultWidth:"full"}),time:Ft({formats:K5,defaultWidth:"full"}),dateTime:Ft({formats:Z5,defaultWidth:"full"})},Q5={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},eS=(r,e,t,i)=>Q5[r],tS={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},rS={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},iS={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},sS={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},nS={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},aS=(r,e)=>{const t=Number(r),i=e==null?void 0:e.unit;if(t===0)return"0";const s=["year","week","hour","minute","second"];let n;return t===1?n=i&&s.includes(i)?"ère":"er":n="ème",t+n},oS=["MMM","MMMM"],lS={preprocessor:(r,e)=>r.getDate()===1||!e.some(i=>i.isToken&&oS.includes(i.value))?e:e.map(i=>i.isToken&&i.value==="do"?{isToken:!0,value:"d"}:i),ordinalNumber:aS,era:vt({values:tS,defaultWidth:"wide"}),quarter:vt({values:rS,defaultWidth:"wide",argumentCallback:r=>r-1}),month:vt({values:iS,defaultWidth:"wide"}),day:vt({values:sS,defaultWidth:"wide"}),dayPeriod:vt({values:nS,defaultWidth:"wide"})},hS=/^(\d+)(ième|ère|ème|er|e)?/i,cS=/\d+/i,dS={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},uS={any:[/^av/i,/^ap/i]},pS={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},fS={any:[/1/i,/2/i,/3/i,/4/i]},gS={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},mS={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},vS={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},yS={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},bS={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},wS={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},xS={ordinalNumber:Qn({matchPattern:hS,parsePattern:cS,valueCallback:r=>parseInt(r)}),era:yt({matchPatterns:dS,defaultMatchWidth:"wide",parsePatterns:uS,defaultParseWidth:"any"}),quarter:yt({matchPatterns:pS,defaultMatchWidth:"wide",parsePatterns:fS,defaultParseWidth:"any",valueCallback:r=>r+1}),month:yt({matchPatterns:gS,defaultMatchWidth:"wide",parsePatterns:mS,defaultParseWidth:"any"}),day:yt({matchPatterns:vS,defaultMatchWidth:"wide",parsePatterns:yS,defaultParseWidth:"any"}),dayPeriod:yt({matchPatterns:bS,defaultMatchWidth:"any",parsePatterns:wS,defaultParseWidth:"any"})},SS={code:"fr",formatDistance:q5,formatLong:J5,formatRelative:eS,localize:lS,match:xS,options:{weekStartsOn:1,firstWeekContainsDate:4}};var $S=Object.defineProperty,_S=Object.getOwnPropertyDescriptor,wt=(r,e,t,i)=>{for(var s=i>1?void 0:i?_S(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$S(e,t,s),s};const CS={en:V5,fr:SS,de:N5,cy:u5,cs:I2};let pt=class extends He{constructor(){super(...arguments),this.palette="jet",this.enablegrouping=!1,this.loadingInfo=!1,this.loadingData=!1,this.only=[],this.state=0,this.by=Ss.HOURS,this.folders={},this.registryRef=pe(),this.interactiveAnalysis=!0,this.detail=void 0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback();const r=()=>{this.getBoundingClientRect().top<-50?this.classList.add("is-pinned"):this.classList.remove("is-pinned")};window.addEventListener("scroll",r),window.addEventListener("resize",r)}firstUpdated(r){super.firstUpdated(r),bi(this)}updated(r){super.updated(r),(r.has("url")||r.has("subfolder"))&&this.loadInfo(this.url,this.subfolder),(r.has("only")||r.has("by"))&&this.url!==void 0&&this.loadData(this.only,this.by,this.url,this.subfolder),this.registryRef.value&&this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var e;(e=this.registryRef.value)==null||e.registry.range.applyMinmax()})}async showDetail(r,e,t){this.detail={folder:r,lrc:e,png:t},this.state=3,this.resetRegistry(),this.scrollToComponent()}async closeDetail(){switch(delete this.detail,this.detail=void 0,typeof(this.dataMultiple??this.dataOnly)){case"undefined":this.state=0;break;case typeof this.dataOnly:this.state=1;break;case typeof this.dataMultiple:this.state=2;break}this.scrollToComponent()}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}getApiUrl(r,e){return e!==void 0?`${r}?subfolder="${e}"`:r}async loadInfo(r,e){this.loadingInfo=!0;try{const i=await new Wl(r,e).info();this.info=i,this.folders=i.folders,this.loadingInfo=!1}catch{this.error="There was an error loading info"}}async loadDataOne(r,e,t){this.loadingData=!1,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=await new Wl(e,t).folder(r);this.log("folder",r,s),this.scrollToComponent(),this.dataOnly=s,this.loadingData=!1,this.registryRef.value&&this.registryRef.value.registry.groups.addListener(this.UUID,n=>{n.forEach(a=>a.files.addListener(this.UUID,o=>{o[0]&&a.analysisSync.turnOn(o[0])}))})}async loadDataMultiple(r,e,t,i){var a;this.loadingData=!0,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=new Wl(t,i);s.setOnly(r.join(",")),s.setGrid(!0);const n=await s.grid(e);this.scrollToComponent(),this.dataMultiple=n,this.loadingData=!1,(a=this.registryRef.value)==null||a.registry.groups.removeListener(this.UUID)}async loadData(r,e,t,i){r.length>1?this.loadDataMultiple(r,e,t,i):r.length===1&&this.loadDataOne(r[0],t,i)}renderMainScreen(){return d`
<div class="screen screen-main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(r=>d`
        <button class="screen-main-folder" @click=${()=>this.actionOpenOneFolder(r.folder)}>
            <h1>${r.name}</h1>
            ${r.description!==void 0?d`<p>${r.description}</p>`:$}
            <div>${b(y.numfiles,{num:r.lrc_count})}</div>
        </button>
            `)}
    </nav>


</div>
        `}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.forEveryInstance(r=>r.unmountFromDom()),this.registryRef.value.registry.reset(),this.registryRef.value.registry.minmax.reset(),this.registryRef.value.registry.range.reset(),this.registryRef.value.registry.opacity.imposeOpacity(1))}actionCloseToHomepage(){this.state=0,this.only=[],delete this.dataOnly,delete this.dataMultiple,this.resetRegistry()}actionOpenOneFolder(r){!this.only.includes(r)&&Object.keys(this.folders).includes(r)&&(this.state=1,this.only=[r],this.resetRegistry())}actionToggleFolder(r){this.only.includes(r)?(this.only=this.only.filter(e=>e!==r),this.resetRegistry(),this.only.length===0?this.actionCloseToHomepage():this.only.length===1?this.state=1:this.only.length>1&&(this.state=2)):Object.keys(this.folders).includes(r)&&(this.only=[...this.only,r],this.resetRegistry(),this.only.length>0&&(this.state=2))}actionShowEverything(){this.only=Object.keys(this.folders),this.resetRegistry(),this.state=2}renderLoading(r){return d`<div class="loading">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
            <div>${r}</div>
        </div>`}renderOne(){return this.loadingData||this.dataOnly===void 0?this.renderLoading("Loading folder data"):d`
            <group-provider slug="${this.dataOnly.info.folder}">

                ${Object.values(this.dataOnly.files).map(r=>d`<div>
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
        `}renderMultiple(){if(this.loadingData||this.dataMultiple===void 0||this.dataMultiple.data===void 0)return this.renderLoading("Loading selected folders' data");const r=this.dataMultiple.data,t=Object.entries(Object.values(Object.values(this.dataMultiple.data))[0]).map(([s,n])=>({name:n.name,key:s})).length,i=Object.keys(Object.values(r)[0]).sort((s,n)=>s<n?-1:1);return d`

            <table class="affected">

                <tbody>
                ${Object.entries(r).map(([s,n])=>{let a;const o=parseInt(s);return this.by===Ss.HOURS?a=$e(o*1e3,"d. M. yyyy - HH")+":00":this.by===Ss.DAYS?a=$e(o*1e3,"d. M. yyyy"):this.by===Ss.WEEKS?a=$e(o*1e3,"wo"):this.by===Ss.MONTHS?a=$e(o*1e3,"LLLL yyyy",{locale:CS[this._locale]}):this.by===Ss.YEARS&&(a=$e(o*1e3,"yyyy")),d`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${t}">
                                <div>
                                    <h2>${a}</h2>
                                    <group-provider slug="${s}" class="buttons">
                                        <group-range-propagator></group-range-propagator>

                                        <file-dropdown label="${b(y.download).toLowerCase()}">
                                            <group-download-buttons></group-download-buttons>
                                        </file-dropdown>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>
                        <group-provider slug="${s}" class="row">
                            ${i.map(l=>{const h=n[l];return d`<td class="cell-content" data-name="${h.name}">
                                    ${Object.values(h.files).map(f=>d`
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

        `}renderTimeToggle(){const r=["hours","days","weeks","months","years"];return d`
<thermal-dropdown>
    <span slot="invoker">${b(y[`by${this.by}`])}</span>
    ${r.map(e=>d`
    <div slot="option" @click=${()=>this.by=e}>
        <thermal-button>${b(y[`by${e}`])}</thermal-button>
    </div>
    `)}
</thermal-dropdown>
        `}renderInfo(){if(this.state===0)return $;let r;if(this.state===1){const e=this.folders[this.only[0]],t=Object.values(this.folders).filter(n=>n.folder!==e.folder),i=d`<thermal-dropdown variant="background" class="selector">
                <span slot="invoker">${e.name}</span>

                ${t.map(n=>d`<div slot="option" @click=${()=>this.actionOpenOneFolder(n.folder)}>
                    <thermal-button>${n.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`,s=t.map((n,a)=>d`<thermal-button @click=${()=>this.actionToggleFolder(n.folder)}>
                <span class="button-inline-icon">+</span> ${n.name}
            </thermal-button> ${a!==t.length-1?` ${b(y.or)} `:$}`);r=d`${b(y.showingfolder)} ${i}. 
            
            ${t.length>0?d` ${b(y.doyouwanttoadd)} ${s}?`:$}
            `}else if(this.state===2){const e=[],t=[];Object.values(this.folders).forEach(i=>{this.only.includes(i.folder)?e.push(i):t.push(i)}),r=d`

                ${b(y.showingfolders)}
                ${e.map((i,s)=>d`<thermal-button 
                    title="${b(y.remove)}" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(i.folder)}
                >
                    ${i.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${s!==e.length-1?` ${b(y.and)} `:$}`)}
                ${b(y.groupped)} ${this.renderTimeToggle()}.
            

            ${t.length>0?d`${b(y.youmayalsoadd)} ${t.map((i,s)=>d`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(i.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${i.name}
                    </thermal-button>
                    ${s!==t.length-1?` ${b(y.or)} `:$}
                `)}.`:$}

            `}return r===void 0?$:d`<div class="info">
            ${r}
        </div>`}renderBrowser(){return d`<section>
            ${this.state===1?this.renderOne():$}
            ${this.state===2?this.renderMultiple():$}
            ${this.state===3?this.renderDetail():$}
        </section>`}renderDetail(){var r,e;return this.detail===void 0?this.renderLoading("Loading the IR image"):d`
        <group-provider slug="detail" autoclear="true">
            <file-provider thermal="${(r=this.detail)==null?void 0:r.lrc}" visible="${(e=this.detail)==null?void 0:e.png}" batch="true" autoclear="true">
                <article class="detail">
                    <header class="detail-header">
                        <thermal-button @click=${()=>this.closeDetail()} variant="foreground">${b(y.close)}</thermal-button>

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
        `}renderApp(){return this.info===void 0?this.renderLoading("Loading data"):this.state===0?this.renderMainScreen():this.renderBrowser()}renderHeader(){return d`


        ${this.state===0&&this.info!==void 0?d`<thermal-button @click=${()=>{this.actionShowEverything()}}>${b(y.showeverything)}</thermal-button>`:$}
        
        ${this.state!==0?d`<thermal-button 
                    @click=${this.actionCloseToHomepage.bind(this)}
                    variant="foreground"
                >
                ${b(y.close)}
            </thermal-button>

            ${this.state===1&&this.enablegrouping===!1?d`
            <thermal-dropdown variant="background" class="selector">

                <span slot="invoker">${this.folders[this.only[0]].name}</span>

                ${Object.values(this.folders).filter(r=>!this.only.includes(r.folder)).map(r=>d`<div slot="option" @click=${()=>this.actionOpenOneFolder(r.folder)}>
                <thermal-button>${r.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`:$}

            <registry-palette-dropdown></registry-palette-dropdown>
            <registry-range-full-button></registry-range-full-button>
            <registry-range-auto-button></registry-range-auto-button>

            ${this.state===1&&this.dataOnly!==void 0?d`<group-provider slug="${this.dataOnly.info.folder}">
                    <group-download-dropdown></group-download-dropdown>
                </group-provider>`:$}
            <registry-opacity-slider></registry-opacity-slider>
            <group-tool-buttons showhint="false" showpopup="true"></group-tool-buttons>
            `:$}
        
        `}renderHistogram(){return this.state===0?$:d`<registry-histogram expandable="true"></registry-histogram>
        <registry-range-slider></registry-range-slider>
        <registry-ticks-bar></registry-ticks-bar>
        
        <nav id="graf">
        ${this.dataOnly!==void 0?d`<group-provider slug="${this.dataOnly.info.folder}">

                    <div style="width:100%">
                        <group-chart></group-chart>
                    </div>

                </group-provider>`:$}
        </nav>
        `}renderTableHeader(){if(this.state!==2)return $;const r=Object.values(this.folders).filter(e=>this.only.includes(e.folder));return d`<table class="affected">
                <thead>
                    <tr>
                        ${r.map(e=>d`<th>
                            <div class="cell-header">
                                ${e.name}
                            </div>
                        </th>`)}
                    </tr>
                </thead>
            </table>
            `}render(){const r=this.loadingInfo===!0?b(y.loading)+"...":this.label&&this.label.trim().length>0?this.label:b(y.remotefoldersbrowser);return d`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${ve(this.registryRef)}>

        <thermal-app author="${q(this.author)}" license="${q(this.license)}" showfullscreen="true">

        ${this.state===0?d`
            <thermal-button variant="foreground" slot="bar" @click=${this.actionCloseToHomepage.bind(this)}>${r}</thermal-button>
            `:$}

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
        
            <div class=${Qt({screen:!0,"screen-main":this.state===0,"screen-browser":[1,2].includes(this.state),"screen-browser__one":this.state===1,"screen-browser__multiple":this.state===2,"screen-detail":this.state===3})}>
                ${this.renderApp()}
            </div>

             <thermal-dialog label="${b(y.config)}" slot="close">
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
        
        `}};pt.styles=ne`

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


    `;wt([c({type:String,reflect:!0})],pt.prototype,"label",2);wt([c({type:String,reflect:!0})],pt.prototype,"license",2);wt([c({type:String,reflect:!0})],pt.prototype,"author",2);wt([c({type:String,reflect:!0,attribute:!0})],pt.prototype,"palette",2);wt([c({type:Boolean,reflect:!0,converter:_e(!0)})],pt.prototype,"enablegrouping",2);wt([c({type:String,reflect:!0})],pt.prototype,"url",2);wt([c({type:String,reflect:!0})],pt.prototype,"subfolder",2);wt([v()],pt.prototype,"info",2);wt([v()],pt.prototype,"error",2);wt([v()],pt.prototype,"loadingInfo",2);wt([v()],pt.prototype,"loadingData",2);wt([v()],pt.prototype,"only",2);wt([v()],pt.prototype,"state",2);wt([v()],pt.prototype,"by",2);wt([v()],pt.prototype,"dataOnly",2);wt([v()],pt.prototype,"dataMultiple",2);wt([v()],pt.prototype,"folders",2);wt([z({context:Vr})],pt.prototype,"interactiveAnalysis",2);wt([v()],pt.prototype,"detail",2);wt([z({context:ps})],pt.prototype,"pngExportWidth",2);wt([z({context:fn})],pt.prototype,"pngExportWidthSetterContext",2);wt([z({context:fs})],pt.prototype,"pngExportFs",2);wt([z({context:gn})],pt.prototype,"pngExportFsSetterContext",2);wt([z({context:si}),c({reflect:!0,converter:wi})],pt.prototype,"locale",2);pt=wt([W("remote-browser-app")],pt);var kS=Object.defineProperty,PS=Object.getOwnPropertyDescriptor,Ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?PS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kS(e,t,s),s};let or=class extends He{constructor(){super(...arguments),this.by="days",this.loading=!1,this.heightRange=0,this.heightFolders=0,this.registryRef=pe(),this.palette="jet"}firstUpdated(r){super.firstUpdated(r),bi(this)}updated(r){super.updated(r),(r.has("by")||r.has("url")||r.has("subfolder"))&&this.loadData(this.by,this.url,this.subfolder)}getUrl(r,e,t){let i=e+`?${r}&grid`;return t&&(i+=`&scope=${t}`),i}async loadData(r,e,t){this.loading=!0,this.data=void 0,this.registryRef.value&&this.registryRef.value.registry.groups.removeAllGroups();try{const i=this.getUrl(r,e,t),s=await fetch(i,{});if(s.ok){const n=await s.json(),a=Object.entries(n.data).map(([o,l])=>{const h=Object.entries(l);h.sort((p,g)=>p[0]<g[0]?-1:1);const f=Object.fromEntries(h);return[o,f]});n.data=Object.fromEntries(a),this.data=n,this.loading=!1,this.log(this.data),this.observer=new ResizeObserver(o=>{this.log(o),o[0]&&(this.heightFolders=this.getFoldersHeight(),this.heightRange=this.getRangeHeight())}),this.observer.observe(this)}else throw new Error("Data not OK!")}catch{this.loading=!1}}getRangeHeight(){const r=this.renderRoot.querySelector("#range");return console.log(r),r!==null?r.clientHeight:0}getFoldersHeight(){const r=this.renderRoot.querySelector("#folders");return r!==null?r.clientHeight:0}getGroupLabel(r){return this.by==="hours"?$e(r,"d. M.yyyy - mm:ss"):this.by==="days"?$e(r,"d. M. yyyy"):this.by==="weeks"?$e(r,"I")+" roku "+$e(r,"yyyy"):this.by==="months"?$e(r,"M"):this.by==="years"?$e(r,"yyyy"):r.toString()}getItemLabel(r){return this.by==="hours"?$e(r,"h:mm:ss"):this.by==="days"?$e(r,"H:mm:ss"):this.by==="weeks"?$e(r,"I")+" roku "+$e(r,"yyyy"):this.by==="months"?$e(r,"M"):this.by==="years"?$e(r,"yyyy"):r.toString()}renderFile(r){return d`
            <file-provider
                batch="true"
                thermal="${r.lrc}"
                visible="${q(r.png)}"
            >

                <article class="file">

                    <header>

                        <h4>${this.getItemLabel(r.timestamp*1e3)}</h4>

                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                        <file-range-propagator></file-range-propagator>
                        <file-info-button>
                            <file-button slot="invoker" label="${b(y.info).toLowerCase()}"></file-button>
                        </file-info-button>

                    </header>

                    <main>

                        <file-canvas></file-canvas>

                        <file-analysis-table></file-analysis-table>

                    </main>

                </article>

            </file-provider>
        `}renderGrid(r){const e=Object.values(Object.values(r.data)[0]).map(s=>s.name),t=e.length,i=100/e.length+"%";return d`


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
                    ${Object.values(Object.values(r.data)[0]).map(s=>d`<td>
                            <div class="cell-folder-header">
                                <h1>${s.name}</h1>
                            </div>
                    </td>`)}
                </tr>
            
                ${Object.entries(r.data).map(([s,n])=>{const a=Object.keys(n).length;return d`

                        <tr><td class="separator"></td></tr>

                        <tr class="group-header">
                            <td colspan="${a}">
                                <div class="cell-divider">
                                    <group-provider slug=${q(s)}>
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

                        <group-provider class="group-files" slug=${q(s)}>
                            ${Object.values(n).map(o=>d`<td style="width: ${i};">
                                        <div class="cell-group">

                                        ${o.count>0?Object.values(o.files).map(this.renderFile.bind(this)):$}

                                        </div>
                                </td>`)}
                        </group-provider>
                    `})}

            </table>
            
        `}render(){const r=this.loading?b(y.loading)+"":this.label??"Remote folder";return d`
                <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                    <registry-provider slug="folders_app_registry" ${ve(this.registryRef)}>
            
                            <thermal-app
                                author=${q(this.author)}
                                license=${q(this.license)}
                            >
    
                                <thermal-button variant="foreground" interactive="false" slot="bar">
                                    ${r}
                                </thermal-button>


                                ${this.data?this.renderGrid(this.data):$}
    
                    
                        </thermal-app>
                </registry-provider>
            </manager-provider>`}};or.styles=ne`
    
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
    
    `;Ur([c({type:String,reflect:!0})],or.prototype,"url",2);Ur([c({type:String,reflect:!0})],or.prototype,"subfolder",2);Ur([c({type:String,reflect:!0})],or.prototype,"by",2);Ur([v()],or.prototype,"loading",2);Ur([c({type:String,reflect:!0})],or.prototype,"license",2);Ur([c({type:String,reflect:!0})],or.prototype,"label",2);Ur([c({type:String,reflect:!0})],or.prototype,"author",2);Ur([v()],or.prototype,"data",2);Ur([v()],or.prototype,"heightRange",2);Ur([v()],or.prototype,"heightFolders",2);Ur([c({type:String,reflect:!0,attribute:!0})],or.prototype,"palette",2);Ur([z({context:si}),c({reflect:!0,converter:wi})],or.prototype,"locale",2);or=Ur([W("remote-grid-app")],or);var OS=Object.defineProperty,AS=Object.getOwnPropertyDescriptor,il=(r,e,t,i)=>{for(var s=i>1?void 0:i?AS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&OS(e,t,s),s};let ln=class extends He{constructor(){super(...arguments),this.showlabel=!0,this.showTime=!0}renderEntry(e){const t=this.showlabel===!0?e.label:$,i=this.showTime===!0&&e.from!==void 0&&e.to!==void 0?[$e(e.from,"mm:ss.SSS"),$e(e.to,"mm:ss.SSS")].join(" - "):$,s=e.getRenderContent(),n=e.image!==void 0?d`<img src="${e.image}" class="builtin-image" />`:$;return d`<article>

            ${t!==$?d`<h1>${t}</h1>`:$}

            ${i!==$?d`<div class="time">${i}</div>`:$}

            ${n}

            ${s.length>0?d`<div class="content">
                    ${s}
                </div>`:$}
        </article>`}render(){return d`${Qh(this.entries,this.renderEntry.bind(this))}`}};ln.styles=ne`
    
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
    
    `;il([v(),le({context:Sa,subscribe:!0})],ln.prototype,"entries",2);il([c({converter:_e(!0)})],ln.prototype,"showlabel",2);il([c({converter:_e(!0)})],ln.prototype,"showTime",2);ln=il([W("notation-content")],ln);var ES=Object.defineProperty,LS=Object.getOwnPropertyDescriptor,zs=(r,e,t,i)=>{for(var s=i>1?void 0:i?LS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ES(e,t,s),s};let us=class extends He{constructor(){super(...arguments),this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observer=null}connectedCallback(){super.connectedCallback()}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');this.log("SLOT",r),r&&(this.log("SLOT",r.assignedElements()),this.notationList=jr(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=jr(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=jr(r.assignedElements())}))}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges()}willUpdate(r){super.willUpdate(r),this.log("Changed",r)}updateNotationsMs(r){this.notationCurrent=rl(r,this)}render(){return d`
        
            <div>Toto je test notatora</div>

            <div>
                Počet ${this.notationList.length}
            </div>

            <div>${[1,20,1e3,1e3*15,1e3*60,1e3*1e3].map(r=>d`<button @click=${()=>this.updateNotationsMs(r)}>${r}</button>`)}</div>

            <div>
                <h2>Aktivní</h2>

                <slot name="notation"></slot>
            </div>

            <notation-timeline></notation-timeline>

            <notation-content></notation-content>
        
        `}};zs([v()],us.prototype,"ms",2);zs([v(),br({flatten:!0})],us.prototype,"_notationSlot",2);zs([v()],us.prototype,"notations",2);zs([v(),z({context:$a})],us.prototype,"duration",2);zs([v(),z({context:xa})],us.prototype,"notationList",2);zs([v(),z({context:Sa})],us.prototype,"notationCurrent",2);us=zs([W("notation-test")],us);var DS=Object.defineProperty,RS=Object.getOwnPropertyDescriptor,nc=(r,e,t,i)=>{for(var s=i>1?void 0:i?RS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&DS(e,t,s),s};let Xn=class extends He{renderEntry(r){if(r.from!==void 0&&r.to!==void 0){const e=r.from/this.duration*100,i=r.to/this.duration*100-e;return d`<div class="entry" style="left: ${e}%; width: ${i}%;">
                ${r.label!==void 0?d`<div class="entry-tooltip">
                    <div>${r.label}</div>
                </div>`:$}
            </div>`}return $}render(){return d`<div class="container">
            ${Qh(this.entries,this.renderEntry.bind(this))}
        </div>`}};Xn.styles=ne`
    
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

    `;nc([v(),le({context:xa,subscribe:!0})],Xn.prototype,"entries",2);nc([le({context:$a,subscribe:!0})],Xn.prototype,"duration",2);Xn=nc([W("notation-timeline")],Xn);var MS=Object.defineProperty,TS=Object.getOwnPropertyDescriptor,Ze=(r,e,t,i)=>{for(var s=i>1?void 0:i?TS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&MS(e,t,s),s};let Ye=class extends He{constructor(){super(...arguments),this.fileProviderRef=pe(),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.collapsed=!1,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observerMutation=null}connectedCallback(){super.connectedCallback(),this.observerResize=new ResizeObserver(r=>{const e=r[0];e&&(e.contentRect.width>1e3?this.collapsed===!0&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0))}),this.observerResize.observe(this)}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges(),this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.add(this.UUID,e=>{this.duration=e.timeline.duration,e.timeline.addListener(this.UUID,t=>{this.ms=t,this.updateNotationsMs(t)})})}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=jr(r.assignedElements()),this.observerMutation=new MutationObserver(()=>{this.notationList=jr(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observerMutation)==null||t.disconnect(),this.notationList=jr(r.assignedElements())}))}updateNotationsMs(r){this.notationCurrent=rl(r,this)}render(){var t;const r=this.fileProviderRef.value===void 0?b(y.loading):this.label??((t=this.fileProviderRef.value.file)==null?void 0:t.fileName)??b(y.file),e={content:!0,content__collapsed:this.collapsed,content__expanded:!this.collapsed};return d`<manager-provider
      slug="manager_${this.UUID}"
      palette=${this.palette}
      autoclear=${this.autoclear}
    >
      <registry-provider 
        slug="registry_${this.UUID}"
        from=${q(this.from)}
        to=${q(this.to)}
        opacity=${q(this.opacity)}
        autoclear=${this.autoclear}
      >
        <group-provider 
          slug="group_${this.UUID}"
        >
          
          <file-provider
            ${ve(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${q(this.visible)}
            analysis1=${q(this.analysis1)}
            analysis2=${q(this.analysis2)}
            analysis3=${q(this.analysis3)}
            analysis4=${q(this.analysis4)}
            analysis5=${q(this.analysis5)}
            analysis6=${q(this.analysis6)}
            analysis7=${q(this.analysis7)}
            speed=${q(this.speed)}
            autoclear=${this.autoclear}
          >
            
            <thermal-app
              author=${q(this.author)} 
              recorded=${q(this.recorded)} 
              license=${q(this.license)}
              label="${r}"
            >

              <div class="${Qt(e)}">

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
    
    `}};Ye.styles=ne`
  
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
  
  `;Ze([c({type:String,reflect:!0})],Ye.prototype,"url",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"visible",2);Ze([c({type:String,reflect:!0,attribute:!0})],Ye.prototype,"palette",2);Ze([c({type:Number,reflect:!0,attribute:!0})],Ye.prototype,"opacity",2);Ze([c({type:Number,reflect:!0})],Ye.prototype,"from",2);Ze([c({type:Number,reflect:!0})],Ye.prototype,"to",2);Ze([c()],Ye.prototype,"author",2);Ze([c()],Ye.prototype,"recorded",2);Ze([c()],Ye.prototype,"license",2);Ze([c()],Ye.prototype,"label",2);Ze([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Ye.prototype,"showembed",2);Ze([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Ye.prototype,"showabout",2);Ze([c({type:String,reflect:!1,attribute:!0,converter:_e(!1)})],Ye.prototype,"showtutorial",2);Ze([c({type:String,reflect:!1,converter:_e(!0)})],Ye.prototype,"showfullscreen",2);Ze([c({type:String,reflect:!0,converter:_e(!0)})],Ye.prototype,"showhistogram",2);Ze([z({context:Vr}),c({type:String,reflect:!0,converter:_e(!0)})],Ye.prototype,"interactiveanalysis",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"analysis1",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"analysis2",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"analysis3",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"analysis4",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"analysis5",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"analysis6",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"analysis7",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"ms",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"speed",2);Ze([c({type:String,reflect:!0})],Ye.prototype,"autoclear",2);Ze([v()],Ye.prototype,"collapsed",2);Ze([v(),br({flatten:!0})],Ye.prototype,"_notationSlot",2);Ze([v()],Ye.prototype,"notations",2);Ze([v(),z({context:$a})],Ye.prototype,"duration",2);Ze([v(),z({context:xa})],Ye.prototype,"notationList",2);Ze([v(),z({context:Sa})],Ye.prototype,"notationCurrent",2);Ye=Ze([W("thermal-lesson-app")],Ye);Cg();kg();console.info(`@labir/embed ${Ys}
Author: ${Cf}`);
