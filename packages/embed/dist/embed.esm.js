var Yp=Object.defineProperty;var qp=(r,e,t)=>e in r?Yp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(qp(r,typeof e!="symbol"?e+"":e,t),t);const Ed="1.2.66",Xp="Jan Jáchim <jachim5@gmail.com>",Oe=r=>typeof r=="string",pn=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},mc=r=>r==null?"":""+r,Kp=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},Zp=/###/g,vc=r=>r&&r.indexOf("###")>-1?r.replace(Zp,"."):r,yc=r=>!r||Oe(r),vn=(r,e,t)=>{const i=Oe(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(yc(r))return{};const n=vc(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return yc(r)?{}:{obj:r,k:vc(i[s])}},bc=(r,e,t)=>{const{obj:i,k:s}=vn(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=vn(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=vn(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},Jp=(r,e,t,i)=>{const{obj:s,k:n}=vn(r,e,Object);s[n]=s[n]||[],s[n].push(t)},Da=(r,e)=>{const{obj:t,k:i}=vn(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},Qp=(r,e,t)=>{const i=Da(r,t);return i!==void 0?i:Da(e,t)},Dd=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?Oe(r[i])||r[i]instanceof String||Oe(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):Dd(r[i],e[i],t):r[i]=e[i]);return r},As=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var ef={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const tf=r=>Oe(r)?r.replace(/[&<>"'\/]/g,e=>ef[e]):r;class rf{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const sf=[" ",",","?","!",";"],nf=new rf(20),af=(r,e,t)=>{e=e||"",t=t||"";const i=sf.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=nf.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},Al=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},La=r=>r==null?void 0:r.replace("_","-"),of={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Ra{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||of,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(Oe(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Ra(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Ra(this.logger,e)}}var si=new Ra;class io{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class wc extends io{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,f;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):Oe(i)&&n?o.push(...i.split(n)):o.push(i)));const l=Da(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!Oe(i)?l:Al((f=(h=this.data)==null?void 0:h[e])==null?void 0:f[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),bc(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(Oe(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=Da(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?Dd(l,i,n):l={...l,...i},bc(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var Ld={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const xc={},Sc=r=>!Oe(r)&&typeof r!="boolean"&&typeof r!="number";class Ta extends io{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Kp(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=si.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!af(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Oe(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:Oe(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,f=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(f){const F=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${F}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${F}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const u=this.resolve(e,t);let g=u==null?void 0:u.res;const S=(u==null?void 0:u.usedKey)||a,$=(u==null?void 0:u.exactUsedKey)||a,O=["[object Number]","[object Function]","[object RegExp]"],P=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,G=!this.i18nFormat||this.i18nFormat.handleAsObject,A=t.count!==void 0&&!Oe(t.count),D=Ta.hasDefaultValue(t),X=A?this.pluralResolver.getSuffix(h,t.count,t):"",W=t.ordinal&&A?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",ie=A&&!t.ordinal&&t.count===0,k=ie&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${X}`]||t[`defaultValue${W}`]||t.defaultValue;let L=g;G&&!g&&D&&(L=k);const T=Sc(L),M=Object.prototype.toString.apply(L);if(G&&L&&T&&O.indexOf(M)<0&&!(Oe(P)&&Array.isArray(L))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,L,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(u.res=F,u.usedParams=this.getUsedParamsDetails(t),u):F}if(n){const F=Array.isArray(L),I=F?[]:{},z=F?$:S;for(const R in L)if(Object.prototype.hasOwnProperty.call(L,R)){const K=`${z}${n}${R}`;D&&!g?I[R]=this.translate(K,{...t,defaultValue:Sc(k)?k[R]:void 0,joinArrays:!1,ns:o}):I[R]=this.translate(K,{...t,joinArrays:!1,ns:o}),I[R]===K&&(I[R]=L[R])}g=I}}else if(G&&Oe(P)&&Array.isArray(g))g=g.join(P),g&&(g=this.extendTranslation(g,e,t,i));else{let F=!1,I=!1;!this.isValidLookup(g)&&D&&(F=!0,g=k),this.isValidLookup(g)||(I=!0,g=a);const R=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:g,K=D&&k!==g&&this.options.updateMissing;if(I||F||K){if(this.logger.log(K?"updateKey":"missingKey",h,l,a,K?k:g),n){const fe=this.resolve(a,{...t,keySeparator:!1});fe&&fe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let he=[];const _=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&_&&_[0])for(let fe=0;fe<_.length;fe++)he.push(_[fe]);else this.options.saveMissingTo==="all"?he=this.languageUtils.toResolveHierarchy(t.lng||this.language):he.push(t.lng||this.language);const H=(fe,ne,Ee)=>{var nt;const Ve=D&&Ee!==g?Ee:R;this.options.missingKeyHandler?this.options.missingKeyHandler(fe,l,ne,Ve,K,t):(nt=this.backendConnector)!=null&&nt.saveMissing&&this.backendConnector.saveMissing(fe,l,ne,Ve,K,t),this.emit("missingKey",fe,l,ne,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?he.forEach(fe=>{const ne=this.pluralResolver.getSuffixes(fe,t);ie&&t[`defaultValue${this.options.pluralSeparator}zero`]&&ne.indexOf(`${this.options.pluralSeparator}zero`)<0&&ne.push(`${this.options.pluralSeparator}zero`),ne.forEach(Ee=>{H([fe],a+Ee,t[`defaultValue${Ee}`]||k)})}):H(he,a,k))}g=this.extendTranslation(g,e,t,u,i),I&&g===a&&this.options.appendNamespaceToMissingKey&&(g=`${l}:${a}`),(I||F)&&this.options.parseMissingKeyHandler&&(g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,F?g:void 0))}return s?(u.res=g,u.usedParams=this.getUsedParamsDetails(t),u):g}extendTranslation(e,t,i,s,n){var h,f;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const u=Oe(e)&&(((f=i==null?void 0:i.interpolation)==null?void 0:f.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(u){const $=e.match(this.interpolator.nestingRegexp);g=$&&$.length}let S=i.replace&&!Oe(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),e=this.interpolator.interpolate(e,S,i.lng||this.language||s.usedLng,i),u){const $=e.match(this.interpolator.nestingRegexp),O=$&&$.length;g<O&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var $=arguments.length,O=new Array($),P=0;P<$;P++)O[P]=arguments[P];return(n==null?void 0:n[0])===O[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${t[0]}`),null):a.translate(...O,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=Oe(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=Ld.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return Oe(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),f=h.key;s=f;let u=h.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const g=t.count!==void 0&&!Oe(t.count),S=g&&!t.ordinal&&t.count===0,$=t.context!==void 0&&(Oe(t.context)||typeof t.context=="number")&&t.context!=="",O=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);u.forEach(P=>{var G,A;this.isValidLookup(i)||(o=P,!xc[`${O[0]}-${P}`]&&((G=this.utils)!=null&&G.hasLoadedNamespace)&&!((A=this.utils)!=null&&A.hasLoadedNamespace(o))&&(xc[`${O[0]}-${P}`]=!0,this.logger.warn(`key "${s}" for languages "${O.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),O.forEach(D=>{var ie;if(this.isValidLookup(i))return;a=D;const X=[f];if((ie=this.i18nFormat)!=null&&ie.addLookupKeys)this.i18nFormat.addLookupKeys(X,f,D,P,t);else{let k;g&&(k=this.pluralResolver.getSuffix(D,t.count,t));const L=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(g&&(X.push(f+k),t.ordinal&&k.indexOf(T)===0&&X.push(f+k.replace(T,this.options.pluralSeparator)),S&&X.push(f+L)),$){const M=`${f}${this.options.contextSeparator}${t.context}`;X.push(M),g&&(X.push(M+k),t.ordinal&&k.indexOf(T)===0&&X.push(M+k.replace(T,this.options.pluralSeparator)),S&&X.push(M+L))}}let W;for(;W=X.pop();)this.isValidLookup(i)||(n=W,i=this.getResource(D,P,W,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Oe(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class $c{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=si.create("languageUtils")}getScriptPartFromCode(e){if(e=La(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=La(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Oe(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Oe(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Oe(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):Oe(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const Cc={zero:0,one:1,two:2,few:3,many:4,other:5},_c={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class lf{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=si.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=La(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),_c;if(!e.match(/-|_/))return _c;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>Cc[s]-Cc[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const kc=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=Qp(r,e,t);return!n&&s&&Oe(t)&&(n=Al(r,t,i),n===void 0&&(n=Al(e,t,i))),n},gl=r=>r.replace(/\$/g,"$$$$");class hf{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=si.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:f,unescapePrefix:u,nestingPrefix:g,nestingPrefixEscaped:S,nestingSuffix:$,nestingSuffixEscaped:O,nestingOptionsSeparator:P,maxReplaces:G,alwaysFormat:A}=e.interpolation;this.escape=t!==void 0?t:tf,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?As(n):a||"{{",this.suffix=o?As(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=f?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":f||"",this.nestingPrefix=g?As(g):S||As("$t("),this.nestingSuffix=$?As($):O||As(")"),this.nestingOptionsSeparator=P||",",this.maxReplaces=G||1e3,this.alwaysFormat=A!==void 0?A:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var S;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=$=>{if($.indexOf(this.formatSeparator)<0){const A=kc(t,l,$,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(A,void 0,i,{...s,...t,interpolationkey:$}):A}const O=$.split(this.formatSeparator),P=O.shift().trim(),G=O.join(this.formatSeparator).trim();return this.format(kc(t,l,P,this.options.keySeparator,this.options.ignoreJSONStructure),G,i,{...s,...t,interpolationkey:P})};this.resetRegExp();const f=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,u=((S=s==null?void 0:s.interpolation)==null?void 0:S.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:$=>gl($)},{regex:this.regexp,safeValue:$=>this.escapeValue?gl(this.escape($)):gl($)}].forEach($=>{for(o=0;n=$.regex.exec(e);){const O=n[1].trim();if(a=h(O),a===void 0)if(typeof f=="function"){const G=f(e,n,s);a=Oe(G)?G:""}else if(s&&Object.prototype.hasOwnProperty.call(s,O))a="";else if(u){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${O} for interpolating ${e}`),a="";else!Oe(a)&&!this.useRawValueToEscape&&(a=mc(a));const P=$.safeValue(a);if(e=e.replace(n[0],P),u?($.regex.lastIndex+=a.length,$.regex.lastIndex-=n[0].length):$.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const f=this.nestingOptionsSeparator;if(l.indexOf(f)<0)return l;const u=l.split(new RegExp(`${f}[ ]*{`));let g=`{${u[1]}`;l=u[0],g=this.interpolate(g,a);const S=g.match(/'/g),$=g.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!$||$.length%2!==0)&&(g=g.replace(/'/g,'"'));try{a=JSON.parse(g),h&&(a={...h,...a})}catch(O){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,O),`${l}${f}${g}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!Oe(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const f=s[1].split(this.formatSeparator).map(u=>u.trim());s[1]=f.shift(),l=f,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!Oe(n))return n;Oe(n)||(n=mc(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((f,u)=>this.format(f,u,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const cf=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),f=o.trim();t[f]||(t[f]=h),h==="false"&&(t[f]=!1),h==="true"&&(t[f]=!0),isNaN(h)||(t[f]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},Es=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(La(i),s),e[a]=o),o(t)}};class df{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=si.create("formatter"),this.options=e,this.formats={number:Es((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:Es((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:Es((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:Es((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:Es((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Es(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var u;const{formatName:h,formatOptions:f}=cf(l);if(this.formats[h]){let g=o;try{const S=((u=s==null?void 0:s.formatParams)==null?void 0:u[s.interpolationkey])||{},$=S.locale||S.lng||s.locale||s.lng||i;g=this.formats[h](o,$,{...f,...s,...S})}catch(S){this.logger.warn(S)}return g}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const uf=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class pf extends io{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=si.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let f=!0;t.forEach(u=>{const g=`${h}|${u}`;!i.reload&&this.store.hasResourceBundle(h,u)?this.state[g]=2:this.state[g]<0||(this.state[g]===1?a[g]===void 0&&(a[g]=!0):(this.state[g]=1,f=!1,a[g]===void 0&&(a[g]=!0),n[g]===void 0&&(n[g]=!0),l[u]===void 0&&(l[u]=!0)))}),f||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{Jp(l.loaded,[n],a),uf(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const f=l.loaded[h];f.length&&f.forEach(u=>{o[h][u]===void 0&&(o[h][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(h&&f&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,f)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(f=>o(null,f)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Oe(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Oe(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,f,u,g;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((u=(f=this.services)==null?void 0:f.utils)!=null&&u.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((g=this.backend)!=null&&g.create){const S={...a,isUpdate:n},$=this.backend.create.bind(this.backend);if($.length<6)try{let O;$.length===5?O=$(e,t,i,s,S):O=$(e,t,i,s),O&&typeof O.then=="function"?O.then(P=>o(null,P)).catch(o):o(null,O)}catch(O){o(O)}else $(e,t,i,s,o,S)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const Pc=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),Oe(r[1])&&(e.defaultValue=r[1]),Oe(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Oc=r=>{var e,t;return Oe(r.ns)&&(r.ns=[r.ns]),Oe(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Oe(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},ya=()=>{},ff=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Sn extends io{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Oc(e),this.services={},this.logger=si,this.modules={external:[]},ff(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(Oe(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=Pc();this.options={...s,...this.options,...Oc(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=f=>f?typeof f=="function"?new f:f:null;if(!this.options.isClone){this.modules.logger?si.init(n(this.modules.logger),this.options):si.init(null,this.options);let f;this.modules.formatter?f=this.modules.formatter:f=df;const u=new $c(this.options);this.store=new wc(this.options.resources,this.options);const g=this.services;g.logger=si,g.resourceStore=this.store,g.languageUtils=u,g.pluralResolver=new lf(u,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(g.formatter=n(f),g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new hf(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new pf(n(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",function(S){for(var $=arguments.length,O=new Array($>1?$-1:0),P=1;P<$;P++)O[P-1]=arguments[P];e.emit(S,...O)}),this.modules.languageDetector&&(g.languageDetector=n(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=n(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new Ta(this.services,this.options),this.translator.on("*",function(S){for(var $=arguments.length,O=new Array($>1?$-1:0),P=1;P<$;P++)O[P-1]=arguments[P];e.emit(S,...O)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ya),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(f=>{this[f]=function(){return e.store[f](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(f=>{this[f]=function(){return e.store[f](...arguments),e}});const l=pn(),h=()=>{const f=(u,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(g),i(u,g)};if(this.languages&&!this.isInitialized)return f(null,this.t.bind(this));this.changeLanguage(this.options.lng,f)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ya;const s=Oe(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(u=>{u!=="cimode"&&o.indexOf(u)<0&&o.push(u)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(f=>l(f)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=pn();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ya),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Ld.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=pn();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var f,u;!e&&!l&&this.services.languageDetector&&(l=[]);const h=Oe(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(u=(f=this.services.languageDetector)==null?void 0:f.cacheUserLanguage)==null||u.call(f,h)),this.loadResources(h,g=>{a(g,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,f=new Array(h>2?h-2:0),u=2;u<h;u++)f[u-2]=arguments[u];l=s.options.overloadTranslationOptionHandler([a,o].concat(f))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const g=s.options.keySeparator||".";let S;return l.keyPrefix&&Array.isArray(a)?S=a.map($=>`${l.keyPrefix}${g}${$}`):S=l.keyPrefix?`${l.keyPrefix}${g}${a}`:a,s.t(S,l)};return Oe(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=pn();return this.options.ns?(Oe(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=pn();Oe(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new $c(Pc());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Sn(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ya;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Sn(s);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const o=Object.keys(this.store.data).reduce((l,h)=>(l[h]={...this.store.data[h]},Object.keys(l[h]).reduce((f,u)=>(f[u]={...l[h][u]},f),{})),{});n.store=new wc(o,s),n.services.resourceStore=n.store}return n.translator=new Ta(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),f=1;f<l;f++)h[f-1]=arguments[f];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const vt=Sn.createInstance();vt.createInstance=Sn.createInstance;vt.createInstance;vt.dir;vt.init;vt.loadResources;vt.reloadResources;vt.use;vt.changeLanguage;vt.getFixedT;const x=vt.t;vt.exists;vt.setDefaultNamespace;vt.hasLoadedNamespace;vt.loadNamespaces;vt.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=globalThis,Ma=yn.trustedTypes,Ac=Ma?Ma.createPolicy("lit-html",{createHTML:r=>r}):void 0,Rd="$lit$",Bi=`lit$${Math.random().toFixed(9).slice(2)}$`,Td="?"+Bi,gf=`<${Td}>`,gs=document,$n=()=>gs.createComment(""),Cn=r=>r===null||typeof r!="object"&&typeof r!="function",Ql=Array.isArray,mf=r=>Ql(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ml=`[ 	
\f\r]`,fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ec=/-->/g,Dc=/>/g,hs=RegExp(`>|${ml}(?:([^\\s"'>=/]+)(${ml}*=${ml}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lc=/'/g,Rc=/"/g,Md=/^(?:script|style|textarea|title)$/i,vf=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=vf(1),qi=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Tc=new WeakMap,ps=gs.createTreeWalker(gs,129);function Id(r,e){if(!Ql(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ac!==void 0?Ac.createHTML(e):e}const yf=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",a=fn;for(let o=0;o<t;o++){const l=r[o];let h,f,u=-1,g=0;for(;g<l.length&&(a.lastIndex=g,f=a.exec(l),f!==null);)g=a.lastIndex,a===fn?f[1]==="!--"?a=Ec:f[1]!==void 0?a=Dc:f[2]!==void 0?(Md.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=hs):f[3]!==void 0&&(a=hs):a===hs?f[0]===">"?(a=s??fn,u=-1):f[1]===void 0?u=-2:(u=a.lastIndex-f[2].length,h=f[1],a=f[3]===void 0?hs:f[3]==='"'?Rc:Lc):a===Rc||a===Lc?a=hs:a===Ec||a===Dc?a=fn:(a=hs,s=void 0);const S=a===hs&&r[o+1].startsWith("/>")?" ":"";n+=a===fn?l+gf:u>=0?(i.push(h),l.slice(0,u)+Rd+l.slice(u)+Bi+S):l+Bi+(u===-2?o:S)}return[Id(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let El=class Ud{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,f]=yf(e,t);if(this.el=Ud.createElement(h,i),ps.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=ps.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Rd)){const g=f[a++],S=s.getAttribute(u).split(Bi),$=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:$[2],strings:S,ctor:$[1]==="."?wf:$[1]==="?"?xf:$[1]==="@"?Sf:so}),s.removeAttribute(u)}else u.startsWith(Bi)&&(l.push({type:6,index:n}),s.removeAttribute(u));if(Md.test(s.tagName)){const u=s.textContent.split(Bi),g=u.length-1;if(g>0){s.textContent=Ma?Ma.emptyScript:"";for(let S=0;S<g;S++)s.append(u[S],$n()),ps.nextNode(),l.push({type:2,index:++n});s.append(u[g],$n())}}}else if(s.nodeType===8)if(s.data===Td)l.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(Bi,u+1))!==-1;)l.push({type:7,index:n}),u+=Bi.length-1}n++}}static createElement(e,t){const i=gs.createElement("template");return i.innerHTML=e,i}};function Us(r,e,t=r,i){var a,o;if(e===qi)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Cn(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=Us(r,s._$AS(r,e.values),s,i)),e}let bf=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??gs).importNode(t,!0);ps.currentNode=s;let n=ps.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new eh(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new $f(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=ps.nextNode(),a++)}return ps.currentNode=gs,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},eh=class zd{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Us(this,e,t),Cn(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==qi&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):mf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&Cn(this._$AH)?this._$AA.nextSibling.data=e:this.T(gs.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=El.createElement(Id(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new bf(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Tc.get(e.strings);return t===void 0&&Tc.set(e.strings,t=new El(e)),t}k(e){Ql(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new zd(this.O($n()),this.O($n()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class so{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Us(this,e,t,0),a=!Cn(e)||e!==this._$AH&&e!==qi,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Us(this,o[i+l],t,l),h===qi&&(h=this._$AH[l]),a||(a=!Cn(h)||h!==this._$AH[l]),h===C?e=C:e!==C&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wf extends so{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}class xf extends so{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}}let Sf=class extends so{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Us(this,e,t,0)??C)===qi)return;const i=this._$AH,s=e===C&&i!==C||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==C&&(i===C||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},$f=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Us(this,e)}};const vl=yn.litHtmlPolyfillSupport;vl==null||vl(El,eh),(yn.litHtmlVersions??(yn.litHtmlVersions=[])).push("3.2.1");const Cf=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new eh(e.insertBefore($n(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _f=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},no=r=>(...e)=>({_$litDirective$:r,values:e});let th=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bn=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),bn(s,e);return!0},Ia=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Fd=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Of(e)}};function kf(r){this._$AN!==void 0?(Ia(this),this._$AM=r,Fd(this)):this._$AM=r}function Pf(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)bn(i[n],!1),Ia(i[n]);else i!=null&&(bn(i,!1),Ia(i));else bn(this,r)}const Of=r=>{r.type==wi.CHILD&&(r._$AP??(r._$AP=Pf),r._$AQ??(r._$AQ=kf))};let Af=class extends th{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Fd(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(bn(this,e),Ia(this))}setValue(e){if(_f(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Mc=null,jd=()=>{};new Promise(r=>{jd=r});const Ef={type:"3rdParty",init(r){Df(r)}},Df=r=>{Mc=r,jd(Mc)},Ic=new Map,Lf=()=>{Ic.forEach((r,e)=>{(e.isConnected===!1||Rf(e)===!1)&&Ic.delete(e)})};setInterval(Lf,1e4);const Rf=r=>{const e=r.part;if(e.type===wi.ATTRIBUTE)return e.element.isConnected;if(e.type===wi.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===wi.PROPERTY||e.type===wi.BOOLEAN_ATTRIBUTE||e.type===wi.EVENT||e.type===wi.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:Tf,forEach:Mf}=[];function If(r){return Mf.call(Tf.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const Uc=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Uf=function(r,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!Uc.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!Uc.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},zc={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=Uf(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var zf={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return zc.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&zc.create(t,r,i,s,n)}},Ff={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let gn=null;const Fc=()=>{if(gn!==null)return gn;try{gn=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{gn=!1}return gn};var jf={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&Fc())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&Fc()&&window.localStorage.setItem(t,r)}};let mn=null;const jc=()=>{if(mn!==null)return mn;try{mn=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{mn=!1}return mn};var Nf={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&jc())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&jc()&&window.sessionStorage.setItem(t,r)}},Wf={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},Hf={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},Bf={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},Gf={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let Nd=!1;try{document.cookie,Nd=!0}catch{}const Wd=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Nd||Wd.splice(1,1);const Vf=()=>({order:Wd,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class Hd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=If(t,this.options||{},Vf()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(zf),this.addDetector(Ff),this.addDetector(jf),this.addDetector(Nf),this.addDetector(Wf),this.addDetector(Hf),this.addDetector(Bf),this.addDetector(Gf)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}Hd.type="languageDetector";const Yf={loading:"Loading",config:"Settings",temperature:"Temperature",file:"File",upload:"Upload",uploadafile:"Upload a file",selectfile:"Select a file",addfiles:"Add file(s)",clear:"Clear",dragorselectfile:"Drag and drop an LRC file or select it from disk",detail:"Detail",showeverything:"Show everything",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automatic range",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visual file name",visiblefileurl:"Visual file URL",visiblefiledownload:"Visual file download",togglevisibleimage:"Switch IR / VIS image",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",exportimagewidth:"Exported image width",exportimagefontsize:"Exported image font size",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser"},qf={loading:"Chargement",config:"Einstellungen",temperature:"Temperature",upload:"Téléverser",uploadafile:"Téléverser un fichier",selectfile:"Sélectionner un fichier",addfiles:"Ajouter un/des fichier(s)",clear:"Effacer",dragorselectfile:"Glissez-déposez un fichier LRC ou sélectionnez-le depuis le disque",file:"fichier",detail:"Détail",showeverything:"Montrer tout",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visuel",visiblefileurl:"URL de l'image visuel",visiblefiledownload:"Télécharger l'image visuel",togglevisibleimage:"Commuter l'image IR / VIS",time:"Temps",duration:"Durée",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Genre du fichier",type:"Genre",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",exportimagewidth:"Largeur de l'image exportée",exportimagefontsize:"Taille de la police de l'image exportée",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous afficher aussi",youmayalsoadd:"Vous pouvez afficher aussi",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Lecture",pause:"Pause",stop:"Arrêter",date:"Date",frame:"Image",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes lisses",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieure",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieure",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format CSV",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants"},Xf={loading:"Načítám",config:"Nastavení",temperature:"Teplota",upload:"Nahrát",uploadafile:"Nahrát soubor",selectfile:"Vybrat soubor",addfiles:"Přidat soubor(y)",clear:"Smazat",dragorselectfile:"Přetáhněte LRC soubor nebo jej vyberte z disku",file:"soubor",detail:"Detail",showeverything:"Zobrazit vše",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",togglevisibleimage:"Přepnout IR / VIS obraz",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",exportimagewidth:"Šířka exportovaných obrázků",exportimagefontsize:"Velikost písma v exportovaných obrázcích",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek"},Kf={loading:"Llwytho",config:"Gosodiadau",temperature:"Tymheredd",upload:"Llwytho i fyny",uploadafile:"Llwytho ffeil i fyny",selectfile:"Dewis ffeil",addfiles:"Ychwanegu ffeil(iau)",clear:"Clirio",dragorselectfile:"Llusgwch ffeil LRC neu dewiswch hi o'r ddisg",file:"ffeil",detail:"Manylder",showeverything:"Dangos popeth",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r delwedd isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch yr ystod thermol yn awtomatig neu cyflewch yr ystod i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangos thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weledol",visiblefileurl:"URL ffeil weledol",visiblefiledownload:"Lawrlwythwch y ffeil weledol",togglevisibleimage:"Newid delwedd IR/VIS",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",exportimagewidth:"Lled delwedd wedi'i hallforio",exportimagefontsize:"Maint ffont delwedd wedi'i hallforio",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"wedi'u cetegoreiddio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau arddangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"yn ôl dydd",byhours:"yn ôl awr",byweeks:"yn ôl wythnos",bymonths:"yn ôl mis",byyears:"yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y delwedd isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell"},Zf={loading:"Loading",config:"Paramètres",temperature:"Temperatur",upload:"Hochladen",uploadafile:"Datei hochladen",selectfile:"Datei auswählen",addfiles:"Datei(en) hinzufügen",clear:"Löschen",dragorselectfile:"Ziehen Sie eine LRC-Datei hierher oder wählen Sie sie von der Festplatte aus",file:"Datei",detail:"Detail",showeverything:"Alles anzeigen",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",togglevisibleimage:"IR/VIS-Bild umschalten",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",exportimagewidth:"Exportierte Bildbreite",exportimagefontsize:"Exportierte Bildschriftgröße",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner"};vt.use(Ef).use(Hd).init({fallbackLng:"en",resources:{cs:{translation:Xf},cy:{translation:Kf},de:{translation:Zf},en:{translation:Yf},fr:{translation:qf}}});window.i18next=vt;const yl=window.matchMedia("(prefers-color-scheme: dark)"),Bd="thermal-dark-mode",Nc=()=>{document.body.classList.add(Bd)},Jf=()=>{document.body.classList.remove(Bd)},Qf=()=>{yl.matches&&Nc();const r=e=>{e.matches?Nc():Jf()};yl.addEventListener("change",r),yl.addListener(r)},eg=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ka=globalThis,rh=ka.ShadowRoot&&(ka.ShadyCSS===void 0||ka.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ih=Symbol(),Wc=new WeakMap;let Gd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ih)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(rh&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Wc.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Wc.set(t,e))}return e}toString(){return this.cssText}};const tg=r=>new Gd(typeof r=="string"?r:r+"",void 0,ih),ae=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Gd(t,r,ih)},rg=(r,e)=>{if(rh)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=ka.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Hc=rh?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return tg(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ig,defineProperty:sg,getOwnPropertyDescriptor:ng,getOwnPropertyNames:ag,getOwnPropertySymbols:og,getPrototypeOf:lg}=Object,Vi=globalThis,Bc=Vi.trustedTypes,hg=Bc?Bc.emptyScript:"",bl=Vi.reactiveElementPolyfillSupport,wn=(r,e)=>r,Ua={toAttribute(r,e){switch(e){case Boolean:r=r?hg:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},sh=(r,e)=>!ig(r,e),Gc={attribute:!0,type:String,converter:Ua,reflect:!1,hasChanged:sh};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Vi.litPropertyMetadata??(Vi.litPropertyMetadata=new WeakMap);let Ts=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Gc){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&sg(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=ng(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Gc}static _$Ei(){if(this.hasOwnProperty(wn("elementProperties")))return;const e=lg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(wn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wn("properties"))){const t=this.properties,i=[...ag(t),...og(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Hc(s))}else e!==void 0&&t.push(Hc(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rg(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Ua).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Ua;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??sh)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Ts.elementStyles=[],Ts.shadowRootOptions={mode:"open"},Ts[wn("elementProperties")]=new Map,Ts[wn("finalized")]=new Map,bl==null||bl({ReactiveElement:Ts}),(Vi.reactiveElementVersions??(Vi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dr=class extends Ts{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cf(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return qi}};var Ad;dr._$litElement$=!0,dr.finalized=!0,(Ad=globalThis.litElementHydrateSupport)==null||Ad.call(globalThis,{LitElement:dr});const wl=globalThis.litElementPolyfillSupport;wl==null||wl({LitElement:dr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cg={attribute:!0,type:String,converter:Ua,reflect:!1,hasChanged:sh},dg=(r=cg,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function d(r){return(e,t)=>typeof t=="object"?dg(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(r){return d({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ug=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zr(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return ug(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const pg={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function ba(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function wa(r){return r.toString().indexOf("`")===-1}wa(r=>r``)||wa(r=>r`\0`)||wa(r=>r`\n`)||wa(r=>r`\u0000`);ba``&&ba`\0`&&ba`\n`&&ba`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let fg="google#safe";function gg(){if(typeof window<"u")return window.trustedTypes}function Vd(){var r;return(r=gg())!==null&&r!==void 0?r:null}let xa;function mg(){var r,e;if(xa===void 0)try{xa=(e=(r=Vd())===null||r===void 0?void 0:r.createPolicy(fg,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{xa=null}return xa}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Yd{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Vc(r){var e;const t=r,i=(e=mg())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Yd(t,pg)}function vg(r){var e;if(!((e=Vd())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Yd)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function qd(r,...e){if(e.length===0)return Vc(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return Vc(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function yg(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function bg(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=yg(e||window);t&&r.setAttribute("nonce",t)}function Xd(r,e,t){r.src=vg(e),bg(r)}/**
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
 */const wg=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Xd(t,qd`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Kd(r={}){await wg;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Yc(r){if(await Kd(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function xg(r){return await Kd(),new google.visualization.ChartWrapper({container:r})}const Zd=6048e5,Sg=864e5,qc=Symbol.for("constructDateFrom");function Xi(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&qc in r?r[qc](e):r instanceof Date?new r.constructor(e):new Date(e)}function Rt(r,e){return Xi(e||r,r)}let $g={};function jn(){return $g}function $i(r,e){var o,l,h,f;const t=jn(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((f=(h=t.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??0,s=Rt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function za(r,e){return $i(r,{...e,weekStartsOn:1})}function Jd(r,e){const t=Rt(r,e==null?void 0:e.in),i=t.getFullYear(),s=Xi(t,0);s.setFullYear(i+1,0,4),s.setHours(0,0,0,0);const n=za(s),a=Xi(t,0);a.setFullYear(i,0,4),a.setHours(0,0,0,0);const o=za(a);return t.getTime()>=n.getTime()?i+1:t.getTime()>=o.getTime()?i:i-1}function Xc(r){const e=Rt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Cg(r,...e){const t=Xi.bind(null,e.find(i=>typeof i=="object"));return e.map(t)}function Fa(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function _g(r,e,t){const[i,s]=Cg(t==null?void 0:t.in,r,e),n=Fa(i),a=Fa(s),o=+n-Xc(n),l=+a-Xc(a);return Math.round((o-l)/Sg)}function kg(r,e){const t=Jd(r,e),i=Xi(r,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),za(i)}function Pg(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Qd(r){return!(!Pg(r)&&typeof r!="number"||isNaN(+Rt(r)))}function eu(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function ja(r,e){const t=Rt(r,e==null?void 0:e.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function Na(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setDate(1),t.setHours(0,0,0,0),t}function tu(r,e){const t=Rt(r,e==null?void 0:e.in),i=t.getFullYear();return t.setFullYear(i+1,0,0),t.setHours(23,59,59,999),t}function nh(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function ru(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setMinutes(59,59,999),t}function Wa(r,e){var o,l;const t=jn(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=Rt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const Og={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},iu=(r,e,t)=>{let i;const s=Og[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Ut(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Ag={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Eg={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Dg={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Lg={date:Ut({formats:Ag,defaultWidth:"full"}),time:Ut({formats:Eg,defaultWidth:"full"}),dateTime:Ut({formats:Dg,defaultWidth:"full"})},Rg={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},su=(r,e,t,i)=>Rg[r];function gt(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const Tg={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Mg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ig={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ug={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},zg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Fg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},jg=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},nu={ordinalNumber:jg,era:gt({values:Tg,defaultWidth:"wide"}),quarter:gt({values:Mg,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:Ig,defaultWidth:"wide"}),day:gt({values:Ug,defaultWidth:"wide"}),dayPeriod:gt({values:zg,defaultWidth:"wide",formattingValues:Fg,defaultFormattingWidth:"wide"})};function mt(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?Wg(o,u=>u.test(a)):Ng(o,u=>u.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const f=e.slice(a.length);return{value:h,rest:f}}}function Ng(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function Wg(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Nn(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const Hg=/^(\d+)(th|st|nd|rd)?/i,Bg=/\d+/i,Gg={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Vg={any:[/^b/i,/^(a|c)/i]},Yg={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},qg={any:[/1/i,/2/i,/3/i,/4/i]},Xg={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Kg={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Zg={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Jg={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qg={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},em={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},au={ordinalNumber:Nn({matchPattern:Hg,parsePattern:Bg,valueCallback:r=>parseInt(r,10)}),era:mt({matchPatterns:Gg,defaultMatchWidth:"wide",parsePatterns:Vg,defaultParseWidth:"any"}),quarter:mt({matchPatterns:Yg,defaultMatchWidth:"wide",parsePatterns:qg,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:Xg,defaultMatchWidth:"wide",parsePatterns:Kg,defaultParseWidth:"any"}),day:mt({matchPatterns:Zg,defaultMatchWidth:"wide",parsePatterns:Jg,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:Qg,defaultMatchWidth:"any",parsePatterns:em,defaultParseWidth:"any"})},tm={code:"en-US",formatDistance:iu,formatLong:Lg,formatRelative:su,localize:nu,match:au,options:{weekStartsOn:0,firstWeekContainsDate:1}};function rm(r,e){const t=Rt(r,e==null?void 0:e.in);return _g(t,nh(t))+1}function im(r,e){const t=Rt(r,e==null?void 0:e.in),i=+za(t)-+kg(t);return Math.round(i/Zd)+1}function ou(r,e){var f,u,g,S;const t=Rt(r,e==null?void 0:e.in),i=t.getFullYear(),s=jn(),n=(e==null?void 0:e.firstWeekContainsDate)??((u=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??s.firstWeekContainsDate??((S=(g=s.locale)==null?void 0:g.options)==null?void 0:S.firstWeekContainsDate)??1,a=Xi((e==null?void 0:e.in)||r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=$i(a,e),l=Xi((e==null?void 0:e.in)||r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=$i(l,e);return+t>=+o?i+1:+t>=+h?i:i-1}function sm(r,e){var o,l,h,f;const t=jn(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(h=t.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??1,s=ou(r,e),n=Xi((e==null?void 0:e.in)||r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),$i(n,e)}function nm(r,e){const t=Rt(r,e==null?void 0:e.in),i=+$i(t,e)-+sm(t,e);return Math.round(i/Zd)+1}function We(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Hi={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return We(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):We(t+1,2)},d(r,e){return We(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return We(r.getHours()%12||12,e.length)},H(r,e){return We(r.getHours(),e.length)},m(r,e){return We(r.getMinutes(),e.length)},s(r,e){return We(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return We(s,e.length)}},Ds={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Kc={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Hi.y(r,e)},Y:function(r,e,t,i){const s=ou(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return We(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):We(n,e.length)},R:function(r,e){const t=Jd(r);return We(t,e.length)},u:function(r,e){const t=r.getFullYear();return We(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return We(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return We(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Hi.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return We(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=nm(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):We(s,e.length)},I:function(r,e,t){const i=im(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):We(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Hi.d(r,e)},D:function(r,e,t){const i=rm(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):We(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return We(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return We(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return We(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=Ds.noon:i===0?s=Ds.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=Ds.evening:i>=12?s=Ds.afternoon:i>=4?s=Ds.morning:s=Ds.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Hi.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Hi.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):We(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):We(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Hi.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Hi.s(r,e)},S:function(r,e){return Hi.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Jc(i);case"XXXX":case"XX":return cs(i);case"XXXXX":case"XXX":default:return cs(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return Jc(i);case"xxxx":case"xx":return cs(i);case"xxxxx":case"xxx":default:return cs(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Zc(i,":");case"OOOO":default:return"GMT"+cs(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Zc(i,":");case"zzzz":default:return"GMT"+cs(i,":")}},t:function(r,e,t){const i=Math.trunc(+r/1e3);return We(i,e.length)},T:function(r,e,t){return We(+r,e.length)}};function Zc(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+We(n,2)}function Jc(r,e){return r%60===0?(r>0?"-":"+")+We(Math.abs(r)/60,2):cs(r,e)}function cs(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=We(Math.trunc(i/60),2),n=We(i%60,2);return t+s+e+n}const Qc=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},lu=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},am=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Qc(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Qc(i,e)).replace("{{time}}",lu(s,e))},om={p:lu,P:am},lm=/^D+$/,hm=/^Y+$/,cm=["D","DD","YY","YYYY"];function dm(r){return lm.test(r)}function um(r){return hm.test(r)}function pm(r,e,t){const i=fm(r,e,t);if(console.warn(i),cm.includes(r))throw new RangeError(i)}function fm(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const gm=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,mm=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,vm=/^'([^]*?)'?$/,ym=/''/g,bm=/[a-zA-Z]/;function $e(r,e,t){var f,u,g,S,$,O,P,G;const i=jn(),s=(t==null?void 0:t.locale)??i.locale??tm,n=(t==null?void 0:t.firstWeekContainsDate)??((u=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??i.firstWeekContainsDate??((S=(g=i.locale)==null?void 0:g.options)==null?void 0:S.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((O=($=t==null?void 0:t.locale)==null?void 0:$.options)==null?void 0:O.weekStartsOn)??i.weekStartsOn??((G=(P=i.locale)==null?void 0:P.options)==null?void 0:G.weekStartsOn)??0,o=Rt(r,t==null?void 0:t.in);if(!Qd(o))throw new RangeError("Invalid time value");let l=e.match(mm).map(A=>{const D=A[0];if(D==="p"||D==="P"){const X=om[D];return X(A,s.formatLong)}return A}).join("").match(gm).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const D=A[0];if(D==="'")return{isToken:!1,value:wm(A)};if(Kc[D])return{isToken:!0,value:A};if(D.match(bm))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:A}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(A=>{if(!A.isToken)return A.value;const D=A.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&um(D)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&dm(D))&&pm(D,e,String(r));const X=Kc[D[0]];return X(o,D,s.localize,h)}).join("")}function wm(r){const e=r.match(vm);return e?e[1].replace(ym,"'"):r}function xl(r,e){const t=Rt(r,e==null?void 0:e.in);if(!Qd(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=We(t.getDate(),2),h=We(t.getMonth()+1,2);n=`${We(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=We(t.getHours(),2),h=We(t.getMinutes(),2),f=We(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${f}`}return n}function hu(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setMinutes(0,0,0),t}var Dl;(function(r){r.csv="text/csv",r.tsv="text/tab-separated-values",r.plain="text/plain"})(Dl||(Dl={}));var Zs=r=>r,Sr=r=>r,xn=Zs,ao=Zs,zs=Zs,ed=Zs,td=Zs,xm={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:Dl.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Sm=`\r
`,$m="\uFEFF",Wn=r=>Object.assign({},xm,r);class Cm extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class _m extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class km extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Pm extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Om=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},Am=r=>ed(typeof r=="object"?r.key:r),Em=r=>td(typeof r=="object"?r.displayLabel:r),Dm=(r,...e)=>e.reduce((t,i)=>i(t),r),Lm=r=>e=>r.useBom?ao(Sr(e)+$m):e,Rm=r=>e=>r.showTitle?ah(ao(Sr(e)+r.title))(zs("")):e,ah=r=>e=>ao(Sr(r)+Sr(e)+Sm),cu=r=>(e,t)=>Tm(r)(zs(Sr(e)+Sr(t))),Tm=r=>e=>Zs(Sr(e)+r.fieldSeparator),Mm=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new _m("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=zs("");for(let s=0;s<e.length;s++){const n=Em(e[s]);i=cu(r)(i,du(r,Sr(n)))}return i=zs(Sr(i).slice(0,-1)),ah(t)(i)},Im=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=zs("");for(let o=0;o<e.length;o++){const l=Am(e[o]),h=t[n][Sr(l)];a=cu(r)(a,du(r,h))}a=zs(Sr(a).slice(0,-1)),s=ah(s)(a)}return s},Um=r=>+r===r&&(!isFinite(r)||!!(r%1)),zm=(r,e)=>{if(Um(e)){if(r.decimalSeparator==="locale")return xn(e.toLocaleString());if(r.decimalSeparator)return xn(e.toString().replace(".",r.decimalSeparator))}return xn(e.toString())},Pa=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+Om(e,r.quoteCharacter)+r.quoteCharacter),xn(t)},Fm=(r,e)=>{const t=e?"true":"false";return xn(r.boolDisplay[t])},jm=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?Pa(r,r.replaceUndefinedWith+""):e===null?Pa(r,"null"):Pa(r,""),du=(r,e)=>{if(typeof e=="number")return zm(r,e);if(typeof e=="string")return Pa(r,e);if(typeof e=="boolean"&&r.boolDisplay)return Fm(r,e);if(e===null||typeof e>"u")return jm(r,e);throw new Pm(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},uu=r=>e=>{const t=Wn(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=Dm(ao(""),Lm(t),Rm(t),Mm(t,i),Im(t,i,e));if(Sr(s).length<1)throw new Cm("Output is empty. Is your data formatted correctly?");return s},Nm=r=>e=>{const t=Wn(r),i=Sr(e),s=t.useTextFile?"text/plain":t.mediaType;return new Blob([i],{type:`${s};charset=utf8;`})},pu=r=>e=>{if(!window)throw new km("Downloading only supported in a browser environment.");const t=Nm(r)(e),i=Wn(r),s=i.useTextFile?"txt":i.fileExtension,n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},Wm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Bm(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var fu={exports:{}};(function(r){(function(e){var t=D(),i=X(),s=W(),n=ie(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:f,toJpeg:u,toBlob:g,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(k,L){return L=L||{},S(L),Promise.resolve(k).then(function(M){return O(M,L.filter,!0)}).then(P).then(G).then(T).then(function(M){return A(M,L.width||t.width(k),L.height||t.height(k))});function T(M){return L.bgcolor&&(M.style.backgroundColor=L.bgcolor),L.width&&(M.style.width=L.width+"px"),L.height&&(M.style.height=L.height+"px"),L.style&&Object.keys(L.style).forEach(function(F){M.style[F]=L.style[F]}),M}}function h(k,L){return $(k,L||{}).then(function(T){return T.getContext("2d").getImageData(0,0,t.width(k),t.height(k)).data})}function f(k,L){return $(k,L||{}).then(function(T){return T.toDataURL()})}function u(k,L){return L=L||{},$(k,L).then(function(T){return T.toDataURL("image/jpeg",L.quality||1)})}function g(k,L){return $(k,L||{}).then(t.canvasToBlob)}function S(k){typeof k.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=k.imagePlaceholder,typeof k.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=k.cacheBust}function $(k,L){return l(k,L).then(t.makeImage).then(t.delay(100)).then(function(M){var F=T(k);return F.getContext("2d").drawImage(M,0,0),F});function T(M){var F=document.createElement("canvas");if(F.width=L.width||t.width(M),F.height=L.height||t.height(M),L.bgcolor){var I=F.getContext("2d");I.fillStyle=L.bgcolor,I.fillRect(0,0,F.width,F.height)}return F}}function O(k,L,T){if(!T&&L&&!L(k))return Promise.resolve();return Promise.resolve(k).then(M).then(function(z){return F(k,z,L)}).then(function(z){return I(k,z)});function M(z){return z instanceof HTMLCanvasElement?t.makeImage(z.toDataURL()):z.cloneNode(!1)}function F(z,R,K){var he=z.childNodes;if(he.length===0)return Promise.resolve(R);return _(R,t.asArray(he),K).then(function(){return R});function _(H,fe,ne){var Ee=Promise.resolve();return fe.forEach(function(Ve){Ee=Ee.then(function(){return O(Ve,ne)}).then(function(nt){nt&&H.appendChild(nt)})}),Ee}}function I(z,R){if(!(R instanceof Element))return R;return Promise.resolve().then(K).then(he).then(_).then(H).then(function(){return R});function K(){fe(window.getComputedStyle(z),R.style);function fe(ne,Ee){ne.cssText?Ee.cssText=ne.cssText:Ve(ne,Ee);function Ve(nt,ct){t.asArray(nt).forEach(function(ce){ct.setProperty(ce,nt.getPropertyValue(ce),nt.getPropertyPriority(ce))})}}}function he(){[":before",":after"].forEach(function(ne){fe(ne)});function fe(ne){var Ee=window.getComputedStyle(z,ne),Ve=Ee.getPropertyValue("content");if(Ve===""||Ve==="none")return;var nt=t.uid();R.className=R.className+" "+nt;var ct=document.createElement("style");ct.appendChild(ce(nt,ne,Ee)),R.appendChild(ct);function ce(ge,Ae,Ue){var at="."+ge+":"+Ae,je=Ue.cssText?Ni(Ue):as(Ue);return document.createTextNode(at+"{"+je+"}");function Ni(ot){var br=ot.getPropertyValue("content");return ot.cssText+" content: "+br+";"}function as(ot){return t.asArray(ot).map(br).join("; ")+";";function br(yi){return yi+": "+ot.getPropertyValue(yi)+(ot.getPropertyPriority(yi)?" !important":"")}}}}}function _(){z instanceof HTMLTextAreaElement&&(R.innerHTML=z.value),z instanceof HTMLInputElement&&R.setAttribute("value",z.value)}function H(){R instanceof SVGElement&&(R.setAttribute("xmlns","http://www.w3.org/2000/svg"),R instanceof SVGRectElement&&["width","height"].forEach(function(fe){var ne=R.getAttribute(fe);ne&&R.style.setProperty(fe,ne)}))}}}function P(k){return s.resolveAll().then(function(L){var T=document.createElement("style");return k.appendChild(T),T.appendChild(document.createTextNode(L)),k})}function G(k){return n.inlineAll(k).then(function(){return k})}function A(k,L,T){return Promise.resolve(k).then(function(M){return M.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(M)}).then(t.escapeXhtml).then(function(M){return'<foreignObject x="0" y="0" width="100%" height="100%">'+M+"</foreignObject>"}).then(function(M){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+L+'" height="'+T+'">'+M+"</svg>"}).then(function(M){return"data:image/svg+xml;charset=utf-8,"+M})}function D(){return{escape:H,parseExtension:L,mimeType:T,dataAsUrl:_,isDataUrl:M,canvasToBlob:I,resolveUrl:z,getAndEncode:he,uid:R(),delay:fe,asArray:ne,escapeXhtml:Ee,makeImage:K,width:Ve,height:nt};function k(){var ce="application/font-woff",ge="image/jpeg";return{woff:ce,woff2:ce,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ge,jpeg:ge,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function L(ce){var ge=/\.([^\.\/]*?)$/g.exec(ce);return ge?ge[1]:""}function T(ce){var ge=L(ce).toLowerCase();return k()[ge]||""}function M(ce){return ce.search(/^(data:)/)!==-1}function F(ce){return new Promise(function(ge){for(var Ae=window.atob(ce.toDataURL().split(",")[1]),Ue=Ae.length,at=new Uint8Array(Ue),je=0;je<Ue;je++)at[je]=Ae.charCodeAt(je);ge(new Blob([at],{type:"image/png"}))})}function I(ce){return ce.toBlob?new Promise(function(ge){ce.toBlob(ge)}):F(ce)}function z(ce,ge){var Ae=document.implementation.createHTMLDocument(),Ue=Ae.createElement("base");Ae.head.appendChild(Ue);var at=Ae.createElement("a");return Ae.body.appendChild(at),Ue.href=ge,at.href=ce,at.href}function R(){var ce=0;return function(){return"u"+ge()+ce++;function ge(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function K(ce){return new Promise(function(ge,Ae){var Ue=new Image;Ue.onload=function(){ge(Ue)},Ue.onerror=Ae,Ue.src=ce})}function he(ce){var ge=3e4;return o.impl.options.cacheBust&&(ce+=(/\?/.test(ce)?"&":"?")+new Date().getTime()),new Promise(function(Ae){var Ue=new XMLHttpRequest;Ue.onreadystatechange=Ni,Ue.ontimeout=as,Ue.responseType="blob",Ue.timeout=ge,Ue.open("GET",ce,!0),Ue.send();var at;if(o.impl.options.imagePlaceholder){var je=o.impl.options.imagePlaceholder.split(/,/);je&&je[1]&&(at=je[1])}function Ni(){if(Ue.readyState===4){if(Ue.status!==200){at?Ae(at):ot("cannot fetch resource: "+ce+", status: "+Ue.status);return}var br=new FileReader;br.onloadend=function(){var yi=br.result.split(/,/)[1];Ae(yi)},br.readAsDataURL(Ue.response)}}function as(){at?Ae(at):ot("timeout of "+ge+"ms occured while fetching resource: "+ce)}function ot(br){console.error(br),Ae("")}})}function _(ce,ge){return"data:"+ge+";base64,"+ce}function H(ce){return ce.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function fe(ce){return function(ge){return new Promise(function(Ae){setTimeout(function(){Ae(ge)},ce)})}}function ne(ce){for(var ge=[],Ae=ce.length,Ue=0;Ue<Ae;Ue++)ge.push(ce[Ue]);return ge}function Ee(ce){return ce.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Ve(ce){var ge=ct(ce,"border-left-width"),Ae=ct(ce,"border-right-width");return ce.scrollWidth+ge+Ae}function nt(ce){var ge=ct(ce,"border-top-width"),Ae=ct(ce,"border-bottom-width");return ce.scrollHeight+ge+Ae}function ct(ce,ge){var Ae=window.getComputedStyle(ce).getPropertyValue(ge);return parseFloat(Ae.replace("px",""))}}function X(){var k=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:F,shouldProcess:L,impl:{readUrls:T,inline:M}};function L(I){return I.search(k)!==-1}function T(I){for(var z=[],R;(R=k.exec(I))!==null;)z.push(R[1]);return z.filter(function(K){return!t.isDataUrl(K)})}function M(I,z,R,K){return Promise.resolve(z).then(function(_){return R?t.resolveUrl(_,R):_}).then(K||t.getAndEncode).then(function(_){return t.dataAsUrl(_,t.mimeType(z))}).then(function(_){return I.replace(he(z),"$1"+_+"$3")});function he(_){return new RegExp(`(url\\(['"]?)(`+t.escape(_)+`)(['"]?\\))`,"g")}}function F(I,z,R){if(K())return Promise.resolve(I);return Promise.resolve(I).then(T).then(function(he){var _=Promise.resolve(I);return he.forEach(function(H){_=_.then(function(fe){return M(fe,H,z,R)})}),_});function K(){return!L(I)}}}function W(){return{resolveAll:k,impl:{readAll:L}};function k(){return L().then(function(T){return Promise.all(T.map(function(M){return M.resolve()}))}).then(function(T){return T.join(`
`)})}function L(){return Promise.resolve(t.asArray(document.styleSheets)).then(M).then(T).then(function(I){return I.map(F)});function T(I){return I.filter(function(z){return z.type===CSSRule.FONT_FACE_RULE}).filter(function(z){return i.shouldProcess(z.style.getPropertyValue("src"))})}function M(I){var z=[];return I.forEach(function(R){try{t.asArray(R.cssRules||[]).forEach(z.push.bind(z))}catch(K){console.log("Error while reading CSS rules from "+R.href,K.toString())}}),z}function F(I){return{resolve:function(){var R=(I.parentStyleSheet||{}).href;return i.inlineAll(I.cssText,R)},src:function(){return I.style.getPropertyValue("src")}}}}}function ie(){return{inlineAll:L,impl:{newImage:k}};function k(T){return{inline:M};function M(F){return t.isDataUrl(T.src)?Promise.resolve():Promise.resolve(T.src).then(F||t.getAndEncode).then(function(I){return t.dataAsUrl(I,t.mimeType(T.src))}).then(function(I){return new Promise(function(z,R){T.onload=z,T.onerror=R,T.src=I})})}}function L(T){if(!(T instanceof Element))return Promise.resolve(T);return M(T).then(function(){return T instanceof HTMLImageElement?k(T).inline():Promise.all(t.asArray(T.childNodes).map(function(F){return L(F)}))});function M(F){var I=F.style.getPropertyValue("background");return I?i.inlineAll(I).then(function(z){F.style.setProperty("background",z,F.style.getPropertyPriority("background"))}).then(function(){return F}):Promise.resolve(F)}}}})()})(fu);var Gm=fu.exports;const Vm=Hm(Gm);var Ll={exports:{}};const Ym={},qm=Object.freeze(Object.defineProperty({__proto__:null,default:Ym},Symbol.toStringTag,{value:"Module"})),Ls=Bm(qm);/**
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
 */(function(r,e){(function(t,i){i(e)})(Wm,function(t){var i={},s={exports:{}};(function(Y){var te=function(we){return typeof we<"u"&&we.versions!=null&&we.versions.node!=null&&we+""=="[object process]"};Y.exports.isNode=te,Y.exports.platform=typeof process<"u"&&te(process)?"node":"browser";var Q=Y.exports.platform==="node"&&Ls;Y.exports.isMainThread=Y.exports.platform==="node"?(!Q||Q.isMainThread)&&!process.connected:typeof Window<"u",Y.exports.cpus=Y.exports.platform==="browser"?self.navigator.hardwareConcurrency:Ls.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function Y(we,Je){var N=this;if(!(this instanceof Y))throw new SyntaxError("Constructor must be called with the new operator");if(typeof we!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var dt=[],Ye=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var kt=function(B,me){dt.push(B),Ye.push(me)};this.then=function(J,B){return new Y(function(me,Pe){var Ge=J?te(J,me,Pe):me,Nt=B?te(B,me,Pe):Pe;kt(Ge,Nt)},N)};var Tt=function(B){return N.resolved=!0,N.rejected=!1,N.pending=!1,dt.forEach(function(me){me(B)}),kt=function(Pe,Ge){Pe(B)},Tt=re=function(){},N},re=function(B){return N.resolved=!1,N.rejected=!0,N.pending=!1,Ye.forEach(function(me){me(B)}),kt=function(Pe,Ge){Ge(B)},Tt=re=function(){},N};this.cancel=function(){return Je?Je.cancel():re(new Q),N},this.timeout=function(J){if(Je)Je.timeout(J);else{var B=setTimeout(function(){re(new Le("Promise timed out after "+J+" ms"))},J);N.always(function(){clearTimeout(B)})}return N},we(function(J){Tt(J)},function(J){re(J)})}function te(we,Je,N){return function(dt){try{var Ye=we(dt);Ye&&typeof Ye.then=="function"&&typeof Ye.catch=="function"?Ye.then(Je,N):Je(Ye)}catch(kt){N(kt)}}}Y.prototype.catch=function(we){return this.then(null,we)},Y.prototype.always=function(we){return this.then(we,we)},Y.prototype.finally=function(we){var Je=this,N=function(){return new Y(function(Ye){return Ye()}).then(we).then(function(){return Je})};return this.then(N,N)},Y.all=function(we){return new Y(function(Je,N){var dt=we.length,Ye=[];dt?we.forEach(function(kt,Tt){kt.then(function(re){Ye[Tt]=re,dt--,dt==0&&Je(Ye)},function(re){dt=0,N(re)})}):Je(Ye)})},Y.defer=function(){var we={};return we.promise=new Y(function(Je,N){we.resolve=Je,we.reject=N}),we};function Q(we){this.message=we||"promise cancelled",this.stack=new Error().stack}Q.prototype=new Error,Q.prototype.constructor=Error,Q.prototype.name="CancellationError",Y.CancellationError=Q;function Le(we){this.message=we||"timeout exceeded",this.stack=new Error().stack}return Le.prototype=new Error,Le.prototype.constructor=Error,Le.prototype.name="TimeoutError",Y.TimeoutError=Le,a.Promise=Y,a}function h(Y,te){(te==null||te>Y.length)&&(te=Y.length);for(var Q=0,Le=Array(te);Q<te;Q++)Le[Q]=Y[Q];return Le}function f(Y,te){var Q=typeof Symbol<"u"&&Y[Symbol.iterator]||Y["@@iterator"];if(!Q){if(Array.isArray(Y)||(Q=G(Y))||te){Q&&(Y=Q);var Le=0,we=function(){};return{s:we,n:function(){return Le>=Y.length?{done:!0}:{done:!1,value:Y[Le++]}},e:function(Ye){throw Ye},f:we}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Je,N=!0,dt=!1;return{s:function(){Q=Q.call(Y)},n:function(){var Ye=Q.next();return N=Ye.done,Ye},e:function(Ye){dt=!0,Je=Ye},f:function(){try{N||Q.return==null||Q.return()}finally{if(dt)throw Je}}}}function u(Y,te,Q){return(te=O(te))in Y?Object.defineProperty(Y,te,{value:Q,enumerable:!0,configurable:!0,writable:!0}):Y[te]=Q,Y}function g(Y,te){var Q=Object.keys(Y);if(Object.getOwnPropertySymbols){var Le=Object.getOwnPropertySymbols(Y);te&&(Le=Le.filter(function(we){return Object.getOwnPropertyDescriptor(Y,we).enumerable})),Q.push.apply(Q,Le)}return Q}function S(Y){for(var te=1;te<arguments.length;te++){var Q=arguments[te]!=null?arguments[te]:{};te%2?g(Object(Q),!0).forEach(function(Le){u(Y,Le,Q[Le])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Y,Object.getOwnPropertyDescriptors(Q)):g(Object(Q)).forEach(function(Le){Object.defineProperty(Y,Le,Object.getOwnPropertyDescriptor(Q,Le))})}return Y}function $(Y,te){if(typeof Y!="object"||!Y)return Y;var Q=Y[Symbol.toPrimitive];if(Q!==void 0){var Le=Q.call(Y,te||"default");if(typeof Le!="object")return Le;throw new TypeError("@@toPrimitive must return a primitive value.")}return(te==="string"?String:Number)(Y)}function O(Y){var te=$(Y,"string");return typeof te=="symbol"?te:te+""}function P(Y){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(te){return typeof te}:function(te){return te&&typeof Symbol=="function"&&te.constructor===Symbol&&te!==Symbol.prototype?"symbol":typeof te},P(Y)}function G(Y,te){if(Y){if(typeof Y=="string")return h(Y,te);var Q={}.toString.call(Y).slice(8,-1);return Q==="Object"&&Y.constructor&&(Q=Y.constructor.name),Q==="Map"||Q==="Set"?Array.from(Y):Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q)?h(Y,te):void 0}}var A={exports:{}},D={},X;function W(){return X||(X=1,D.validateOptions=function(te,Q,Le){if(te){var we=te?Object.keys(te):[],Je=we.find(function(dt){return!Q.includes(dt)});if(Je)throw new Error('Object "'+Le+'" contains an unknown option "'+Je+'"');var N=Q.find(function(dt){return Object.prototype[dt]&&!we.includes(dt)});if(N)throw new Error('Object "'+Le+'" contains an inherited option "'+N+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return te}},D.workerOptsNames=["credentials","name","type"],D.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],D.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),D}var ie,k;function L(){return k||(k=1,ie=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return i.all([o,r]).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ie}var T;function M(){if(T)return A.exports;T=1;var Y=l(),te=Y.Promise,Q=n,Le=W(),we=Le.validateOptions,Je=Le.forkOptsNames,N=Le.workerThreadOptsNames,dt=Le.workerOptsNames,Ye="__workerpool-terminate__",kt="__workerpool-cleanup__";function Tt(){var xe=J();if(!xe)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return xe}function re(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":P(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function J(){try{return Ls}catch(xe){if(P(xe)==="object"&&xe!==null&&xe.code==="MODULE_NOT_FOUND")return null;throw xe}}function B(){if(Q.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var xe=new Blob([L()],{type:"text/javascript"});return window.URL.createObjectURL(xe)}else return __dirname+"/worker.js"}function me(xe,De){if(De.workerType==="web")return re(),Pe(xe,De.workerOpts,Worker);if(De.workerType==="thread")return Z=Tt(),Ge(xe,Z,De);if(De.workerType==="process"||!De.workerType)return Nt(xe,Vt(De),Ls);if(Q.platform==="browser")return re(),Pe(xe,De.workerOpts,Worker);var Z=J();return Z?Ge(xe,Z,De):Nt(xe,Vt(De),Ls)}function Pe(xe,De,Z){we(De,dt,"workerOpts");var Ce=new Z(xe,De);return Ce.isBrowserWorker=!0,Ce.on=function(Re,Me){this.addEventListener(Re,function(et){Me(et.data)})},Ce.send=function(Re,Me){this.postMessage(Re,Me)},Ce}function Ge(xe,De,Z){var Ce,Re;we(Z==null?void 0:Z.workerThreadOpts,N,"workerThreadOpts");var Me=new De.Worker(xe,S({stdout:(Ce=Z==null?void 0:Z.emitStdStreams)!==null&&Ce!==void 0?Ce:!1,stderr:(Re=Z==null?void 0:Z.emitStdStreams)!==null&&Re!==void 0?Re:!1},Z==null?void 0:Z.workerThreadOpts));return Me.isWorkerThread=!0,Me.send=function(et,Ie){this.postMessage(et,Ie)},Me.kill=function(){return this.terminate(),!0},Me.disconnect=function(){this.terminate()},Z!=null&&Z.emitStdStreams&&(Me.stdout.on("data",function(et){return Me.emit("stdout",et)}),Me.stderr.on("data",function(et){return Me.emit("stderr",et)})),Me}function Nt(xe,De,Z){we(De.forkOpts,Je,"forkOpts");var Ce=Z.fork(xe,De.forkArgs,De.forkOpts),Re=Ce.send;return Ce.send=function(Me){return Re.call(Ce,Me)},De.emitStdStreams&&(Ce.stdout.on("data",function(Me){return Ce.emit("stdout",Me)}),Ce.stderr.on("data",function(Me){return Ce.emit("stderr",Me)})),Ce.isChildProcess=!0,Ce}function Vt(xe){xe=xe||{};var De=process.execArgv.join(" "),Z=De.indexOf("--inspect")!==-1,Ce=De.indexOf("--debug-brk")!==-1,Re=[];return Z&&(Re.push("--inspect="+xe.debugPort),Ce&&Re.push("--debug-brk")),process.execArgv.forEach(function(Me){Me.indexOf("--max-old-space-size")>-1&&Re.push(Me)}),Object.assign({},xe,{forkArgs:xe.forkArgs,forkOpts:Object.assign({},xe.forkOpts,{execArgv:(xe.forkOpts&&xe.forkOpts.execArgv||[]).concat(Re),stdio:xe.emitStdStreams?"pipe":void 0})})}function sr(xe){for(var De=new Error(""),Z=Object.keys(xe),Ce=0;Ce<Z.length;Ce++)De[Z[Ce]]=xe[Z[Ce]];return De}function nr(xe,De){if(Object.keys(xe.processing).length===1){var Z=Object.values(xe.processing)[0];Z.options&&typeof Z.options.on=="function"&&Z.options.on(De)}}function ti(xe,De){var Z=this,Ce=De||{};this.script=xe||B(),this.worker=me(this.script,Ce),this.debugPort=Ce.debugPort,this.forkOpts=Ce.forkOpts,this.forkArgs=Ce.forkArgs,this.workerOpts=Ce.workerOpts,this.workerThreadOpts=Ce.workerThreadOpts,this.workerTerminateTimeout=Ce.workerTerminateTimeout,xe||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Ie){nr(Z,{stdout:Ie.toString()})}),this.worker.on("stderr",function(Ie){nr(Z,{stderr:Ie.toString()})}),this.worker.on("message",function(Ie){if(!Z.terminated)if(typeof Ie=="string"&&Ie==="ready")Z.worker.ready=!0,Me();else{var Wt=Ie.id,bt=Z.processing[Wt];if(bt!==void 0&&(Ie.isEvent?bt.options&&typeof bt.options.on=="function"&&bt.options.on(Ie.payload):(delete Z.processing[Wt],Z.terminating===!0&&Z.terminate(),Ie.error?bt.resolver.reject(sr(Ie.error)):bt.resolver.resolve(Ie.result))),Ie.method===kt){var Yt=Z.tracking[Ie.id];Yt!==void 0&&(Ie.error?(clearTimeout(Yt.timeoutId),Yt.resolver.reject(sr(Ie.error))):(Z.tracking&&clearTimeout(Yt.timeoutId),Yt.resolver.resolve(Yt.result))),delete Z.tracking[Wt]}}});function Re(Ie){Z.terminated=!0;for(var Wt in Z.processing)Z.processing[Wt]!==void 0&&Z.processing[Wt].resolver.reject(Ie);Z.processing=Object.create(null)}function Me(){var Ie=f(Z.requestQueue.splice(0)),Wt;try{for(Ie.s();!(Wt=Ie.n()).done;){var bt=Wt.value;Z.worker.send(bt.message,bt.transfer)}}catch(Yt){Ie.e(Yt)}finally{Ie.f()}}var et=this.worker;this.worker.on("error",Re),this.worker.on("exit",function(Ie,Wt){var bt=`Workerpool Worker terminated Unexpectedly
`;bt+="    exitCode: `"+Ie+"`\n",bt+="    signalCode: `"+Wt+"`\n",bt+="    workerpool.script: `"+Z.script+"`\n",bt+="    spawnArgs: `"+et.spawnargs+"`\n",bt+="    spawnfile: `"+et.spawnfile+"`\n",bt+="    stdout: `"+et.stdout+"`\n",bt+="    stderr: `"+et.stderr+"`\n",Re(new Error(bt))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return ti.prototype.methods=function(){return this.exec("methods")},ti.prototype.exec=function(xe,De,Z,Ce){Z||(Z=te.defer());var Re=++this.lastId;this.processing[Re]={id:Re,resolver:Z,options:Ce};var Me={message:{id:Re,method:xe,params:De},transfer:Ce&&Ce.transfer};this.terminated?Z.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Me.message,Me.transfer):this.requestQueue.push(Me);var et=this;return Z.promise.catch(function(Ie){if(Ie instanceof te.CancellationError||Ie instanceof te.TimeoutError)return et.tracking[Re]={id:Re,resolver:te.defer()},delete et.processing[Re],et.tracking[Re].resolver.promise=et.tracking[Re].resolver.promise.catch(function(Wt){delete et.tracking[Re];var bt=et.terminateAndNotify(!0).then(function(){throw Wt},function(Yt){throw Yt});return bt}),et.worker.send({id:Re,method:kt}),et.tracking[Re].timeoutId=setTimeout(function(){et.tracking[Re].resolver.reject(Ie)},et.workerTerminateTimeout),et.tracking[Re].resolver.promise;throw Ie})},ti.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},ti.prototype.terminate=function(xe,De){var Z=this;if(xe){for(var Ce in this.processing)this.processing[Ce]!==void 0&&this.processing[Ce].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var Re=0,Me=Object.values(Z.tracking);Re<Me.length;Re++){var et=Me[Re];clearTimeout(et.timeoutId),et.resolver.reject(new Error("Worker Terminating"))}if(Z.tracking=Object.create(null),typeof De=="function"&&(this.terminationHandler=De),this.busy())this.terminating=!0;else{var Ie=function(Yt){if(Z.terminated=!0,Z.cleaning=!1,Z.worker!=null&&Z.worker.removeAllListeners&&Z.worker.removeAllListeners("message"),Z.worker=null,Z.terminating=!1,Z.terminationHandler)Z.terminationHandler(Yt,Z);else if(Yt)throw Yt};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ie(new Error("worker already killed!"));return}var Wt=setTimeout(function(){Z.worker&&Z.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Wt),Z.worker&&(Z.worker.killed=!0),Ie()}),this.worker.ready?this.worker.send(Ye):this.requestQueue.push({message:Ye}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ie()}},ti.prototype.terminateAndNotify=function(xe,De){var Z=te.defer();return De&&Z.promise.timeout(De),this.terminate(xe,function(Ce,Re){Ce?Z.reject(Ce):Z.resolve(Re)}),Z.promise},A.exports=ti,A.exports._tryRequireWorkerThreads=J,A.exports._setupProcessWorker=Nt,A.exports._setupBrowserWorker=Pe,A.exports._setupWorkerThreadWorker=Ge,A.exports.ensureWorkerThreads=Tt,A.exports}var F,I;function z(){if(I)return F;I=1;var Y=65535;F=te;function te(){this.ports=Object.create(null),this.length=0}return te.prototype.nextAvailableStartingAt=function(Q){for(;this.ports[Q]===!0;)Q++;if(Q>=Y)throw new Error("WorkerPool debug port limit reached: "+Q+">= "+Y);return this.ports[Q]=!0,this.length++,Q},te.prototype.releasePort=function(Q){delete this.ports[Q],this.length--},F}var R,K;function he(){if(K)return R;K=1;var Y=l(),te=Y.Promise,Q=M(),Le=n,we=z(),Je=new we;function N(re,J){typeof re=="string"?this.script=re||null:(this.script=null,J=re),this.workers=[],this.tasks=[],J=J||{},this.forkArgs=Object.freeze(J.forkArgs||[]),this.forkOpts=Object.freeze(J.forkOpts||{}),this.workerOpts=Object.freeze(J.workerOpts||{}),this.workerThreadOpts=Object.freeze(J.workerThreadOpts||{}),this.debugPortStart=J.debugPortStart||43210,this.nodeWorker=J.nodeWorker,this.workerType=J.workerType||J.nodeWorker||"auto",this.maxQueueSize=J.maxQueueSize||1/0,this.workerTerminateTimeout=J.workerTerminateTimeout||1e3,this.onCreateWorker=J.onCreateWorker||function(){return null},this.onTerminateWorker=J.onTerminateWorker||function(){return null},this.emitStdStreams=J.emitStdStreams||!1,J&&"maxWorkers"in J?(dt(J.maxWorkers),this.maxWorkers=J.maxWorkers):this.maxWorkers=Math.max((Le.cpus||4)-1,1),J&&"minWorkers"in J&&(J.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Ye(J.minWorkers),this.minWorkers=J.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&Q.ensureWorkerThreads()}N.prototype.exec=function(re,J,B){if(J&&!Array.isArray(J))throw new TypeError('Array expected as argument "params"');if(typeof re=="string"){var me=te.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Pe=this.tasks,Ge={method:re,params:J,resolver:me,timeout:null,options:B};Pe.push(Ge);var Nt=me.promise.timeout;return me.promise.timeout=function(sr){return Pe.indexOf(Ge)!==-1?(Ge.timeout=sr,me.promise):Nt.call(me.promise,sr)},this._next(),me.promise}else{if(typeof re=="function")return this.exec("run",[String(re),J],B);throw new TypeError('Function or string expected as argument "method"')}},N.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var re=this;return this.exec("methods").then(function(J){var B={};return J.forEach(function(me){B[me]=function(){return re.exec(me,Array.prototype.slice.call(arguments))}}),B})},N.prototype._next=function(){if(this.tasks.length>0){var re=this._getWorker();if(re){var J=this,B=this.tasks.shift();if(B.resolver.promise.pending){var me=re.exec(B.method,B.params,B.resolver,B.options).then(J._boundNext).catch(function(){if(re.terminated)return J._removeWorker(re)}).then(function(){J._next()});typeof B.timeout=="number"&&me.timeout(B.timeout)}else J._next()}}},N.prototype._getWorker=function(){for(var re=this.workers,J=0;J<re.length;J++){var B=re[J];if(B.busy()===!1)return B}return re.length<this.maxWorkers?(B=this._createWorkerHandler(),re.push(B),B):null},N.prototype._removeWorker=function(re){var J=this;return Je.releasePort(re.debugPort),this._removeWorkerFromList(re),this._ensureMinWorkers(),new te(function(B,me){re.terminate(!1,function(Pe){J.onTerminateWorker({forkArgs:re.forkArgs,forkOpts:re.forkOpts,workerThreadOpts:re.workerThreadOpts,script:re.script}),Pe?me(Pe):B(re)})})},N.prototype._removeWorkerFromList=function(re){var J=this.workers.indexOf(re);J!==-1&&this.workers.splice(J,1)},N.prototype.terminate=function(re,J){var B=this;this.tasks.forEach(function(Vt){Vt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var me=function(sr){Je.releasePort(sr.debugPort),this._removeWorkerFromList(sr)},Pe=me.bind(this),Ge=[],Nt=this.workers.slice();return Nt.forEach(function(Vt){var sr=Vt.terminateAndNotify(re,J).then(Pe).always(function(){B.onTerminateWorker({forkArgs:Vt.forkArgs,forkOpts:Vt.forkOpts,workerThreadOpts:Vt.workerThreadOpts,script:Vt.script})});Ge.push(sr)}),te.all(Ge)},N.prototype.stats=function(){var re=this.workers.length,J=this.workers.filter(function(B){return B.busy()}).length;return{totalWorkers:re,busyWorkers:J,idleWorkers:re-J,pendingTasks:this.tasks.length,activeTasks:J}},N.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var re=this.workers.length;re<this.minWorkers;re++)this.workers.push(this._createWorkerHandler())},N.prototype._createWorkerHandler=function(){var re=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new Q(re.script||this.script,{forkArgs:re.forkArgs||this.forkArgs,forkOpts:re.forkOpts||this.forkOpts,workerOpts:re.workerOpts||this.workerOpts,workerThreadOpts:re.workerThreadOpts||this.workerThreadOpts,debugPort:Je.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function dt(re){if(!kt(re)||!Tt(re)||re<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Ye(re){if(!kt(re)||!Tt(re)||re<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function kt(re){return typeof re=="number"}function Tt(re){return Math.round(re)==re}return R=N,R}var _={},H,fe;function ne(){if(fe)return H;fe=1;function Y(te,Q){this.message=te,this.transfer=Q}return H=Y,H}var Ee;function Ve(){return Ee||(Ee=1,function(Y){var te=ne(),Q=l().Promise,Le="__workerpool-terminate__",we="__workerpool-cleanup__",Je=1e3,N={exit:function(){}},dt={addAbortListener:function(me){N.abortListeners.push(me)},emit:N.emit};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")N.on=function(B,me){addEventListener(B,function(Pe){me(Pe.data)})},N.send=function(B,me){me?postMessage(B,me):postMessage(B)};else if(typeof process<"u"){var Ye;try{Ye=Ls}catch(B){if(!(P(B)==="object"&&B!==null&&B.code==="MODULE_NOT_FOUND"))throw B}if(Ye&&Ye.parentPort!==null){var kt=Ye.parentPort;N.send=kt.postMessage.bind(kt),N.on=kt.on.bind(kt),N.exit=process.exit.bind(process)}else N.on=process.on.bind(process),N.send=function(B){process.send(B)},N.on("disconnect",function(){process.exit(1)}),N.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Tt(B){return Object.getOwnPropertyNames(B).reduce(function(me,Pe){return Object.defineProperty(me,Pe,{value:B[Pe],enumerable:!0})},{})}function re(B){return B&&typeof B.then=="function"&&typeof B.catch=="function"}N.methods={},N.methods.run=function(me,Pe){var Ge=new Function("return ("+me+").apply(this, arguments);");return Ge.worker=dt,Ge.apply(Ge,Pe)},N.methods.methods=function(){return Object.keys(N.methods)},N.terminationHandler=void 0,N.abortListenerTimeout=Je,N.abortListeners=[],N.terminateAndExit=function(B){var me=function(){N.exit(B)};if(!N.terminationHandler)return me();var Pe=N.terminationHandler(B);return re(Pe)?(Pe.then(me,me),Pe):(me(),new Q(function(Ge,Nt){Nt(new Error("Worker terminating"))}))},N.cleanup=function(B){if(!N.abortListeners.length)return N.send({id:B,method:we,error:Tt(new Error("Worker terminating"))}),new Q(function(nr){nr()});var me=function(){N.exit()},Pe=function(){N.abortListeners.length||(N.abortListeners=[])},Ge=N.abortListeners.map(function(nr){return nr()}),Nt,Vt=new Q(function(nr,ti){Nt=setTimeout(function(){ti(new Error("Timeout occured waiting for abort handler, killing worker"))},N.abortListenerTimeout)}),sr=Q.all(Ge).then(function(){clearTimeout(Nt),Pe()},function(){clearTimeout(Nt),me()});return Q.all([sr,Vt]).then(function(){N.send({id:B,method:we,error:null})},function(nr){N.send({id:B,method:we,error:nr?Tt(nr):null})})};var J=null;N.on("message",function(B){if(B===Le)return N.terminateAndExit(0);if(B.method===we)return N.cleanup(B.id);try{var me=N.methods[B.method];if(me){J=B.id;var Pe=me.apply(me,B.params);re(Pe)?Pe.then(function(Ge){Ge instanceof te?N.send({id:B.id,result:Ge.message,error:null},Ge.transfer):N.send({id:B.id,result:Ge,error:null}),J=null}).catch(function(Ge){N.send({id:B.id,result:null,error:Tt(Ge)}),J=null}):(Pe instanceof te?N.send({id:B.id,result:Pe.message,error:null},Pe.transfer):N.send({id:B.id,result:Pe,error:null}),J=null)}else throw new Error('Unknown method "'+B.method+'"')}catch(Ge){N.send({id:B.id,result:null,error:Tt(Ge)})}}),N.register=function(B,me){if(B)for(var Pe in B)B.hasOwnProperty(Pe)&&(N.methods[Pe]=B[Pe],N.methods[Pe].worker=dt);me&&(N.terminationHandler=me.onTerminate,N.abortListenerTimeout=me.abortListenerTimeout||Je),N.send("ready")},N.emit=function(B){if(J){if(B instanceof te){N.send({id:J,isEvent:!0,payload:B.message},B.transfer);return}N.send({id:J,isEvent:!0,payload:B})}},Y.add=N.register,Y.emit=N.emit}(_)),_}var nt=n.platform,ct=n.isMainThread,ce=n.cpus;function ge(Y,te){var Q=he();return new Q(Y,te)}var Ae=i.pool=ge;function Ue(Y,te){var Q=Ve();Q.add(Y,te)}var at=i.worker=Ue;function je(Y){var te=Ve();te.emit(Y)}var Ni=i.workerEmit=je,as=l(),ot=as.Promise,br=i.Promise=ot,yi=i.Transfer=ne(),Wo=i.platform=nt,Ho=i.isMainThread=ct,Bo=i.cpus=ce;t.Promise=br,t.Transfer=yi,t.cpus=Bo,t.default=i,t.isMainThread=Ho,t.platform=Wo,t.pool=Ae,t.worker=at,t.workerEmit=Ni,Object.defineProperty(t,"__esModule",{value:!0})})})(Ll,Ll.exports);var Xm=Ll.exports,Km=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},Zm=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Jm=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Qm=Km(),ni={iron:{pixels:Jm,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:Zm,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:Qm,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Ol,ev=(Ol=class{},c(Ol,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),Ol),Ct,ht=(Ct=class extends ev{static humanRangeDates(e,t){return e=Ct.inputToDate(e),t=Ct.inputToDate(t),e.getUTCDate()===t.getUTCDate()?Ct.humanDate(e):[Ct.humanDate(e),Ct.humanDate(t)].join(" - ")}static human(e){return`${Ct.humanDate(e)} ${Ct.humanTime(e,!0)} `}},c(Ct,"isoDate",e=>(e=Ct.inputToDate(e),xl(e,{representation:"date"}))),c(Ct,"isoTime",e=>(e=Ct.inputToDate(e),xl(e,{representation:"time"}))),c(Ct,"isoComplete",e=>(e=Ct.inputToDate(e),xl(e))),c(Ct,"humanTime",(e,t=!1)=>(e=Ct.inputToDate(e),$e(e,t?"HH:mm:ss":"HH:mm"))),c(Ct,"humanDate",(e,t=!1)=>(e=Ct.inputToDate(e),$e(e,t?"d. M.":"d. M. yyyy"))),Ct),se=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},oo=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new se);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},_t=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},wt=class{constructor(r,e,t){c(this,"onSerializableChange",new se);c(this,"_selected",!1);c(this,"onSelected",new se);c(this,"onDeselected",new se);c(this,"onValues",new se);c(this,"onMoveOrResize",new se);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new se);c(this,"_initialColor");c(this,"onSetInitialColor",new se);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new se);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},gu=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new se);c(this,"pxY");c(this,"_y");c(this,"onY",new se);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new se);c(this,"onMouseLeave",new se);c(this,"onActivate",new se);c(this,"onDeactivate",new se);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},hr,tv=(hr=class extends gu{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(hr.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=hr.sizePx(-.5),t.style.left=hr.sizePx(-.5),t.style.width=hr.sizePx(),t.style.height=hr.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=hr.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=hr.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${hr.sizePx(.5)} - 3px )`,t.style.left=`calc( ${hr.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(hr,"size",20),hr),wr=class mu extends wt{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new tv("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new vu(this)),this._graph}static addAtPoint(t,i,s,n,a){return new mu(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(f=>f.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=wt.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=wt.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=wt.serializedGetNumericalValueByKey(i,"top"),h=wt.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},vu=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new se);c(this,"onGraphData",new se);c(this,"onAnalysisSelection",new se);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof wr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof wr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof wr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof wr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},rv=class extends gu{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},iv=class extends rv{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},cr=class extends wt{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new vu(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,f=a-n;return{top:n,left:o,width:h,height:f}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new iv(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(S=>S.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=wt.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=wt.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=wt.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=wt.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=wt.serializedGetNumericalValueByKey(t,"top"),f=wt.serializedGetNumericalValueByKey(t,"left"),u=wt.serializedGetNumericalValueByKey(t,"width"),g=wt.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),f!==void 0&&f!==this.left&&(this.setLeft(f),i=!0),u!==void 0&&u!==this.width&&(this.setWidth(u),i=!0),g!==void 0&&g!==this.height&&(this.setHeight(g),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},yu=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},rd=class extends yu{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},id=class Oa extends cr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Oa(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:f,height:u}=Oa.calculateDimensionsFromCorners(s,n,a,o),g=new Oa(e,t,i,l,h,f,u);return g.recalculateValues(),g}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new rd(this,e,t,e+i,t+s):new rd(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const f=this.file.width*h;for(let u=e;u<=t;u++)if(this.isWithin(u,h)){const g=this.file.pixels[f+u];g<n&&(n=g),g>a&&(a=g),l+=g,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},sd=class extends yu{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},nd=class Aa extends cr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new Aa(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:f,height:u}=Aa.calculateDimensionsFromCorners(s,n,a,o),g=new Aa(e,t,i,l,h,f,u);return g.recalculateValues(),g}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new sd(this,e,t,e+i,t+s):new sd(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const f=this.file.width*h;for(let u=e;u<=t;u++){const g=this.file.pixels[f+u];g<n&&(n=g),g>a&&(a=g),l+=g,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},Ea=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],sv=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new se);c(this,"onRemove",new se);c(this,"onSelectionChange",new se);c(this,"colors",Ea);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=nd.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=nd.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=id.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=id.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=wr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=wr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=Ea.filter(i=>!e.includes(i));return t.length>0?t[0]:Ea[0]}getNextName(e){return`${e} ${this.all.length}`}},nv=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},av=class extends _t{constructor(){super(...arguments);c(this,"layers",new sv(this));c(this,"points",new nv(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,f=e.layerY/o;return{top:Math.round(l*f),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},ov=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new se);c(this,"onAddGraph",new se);c(this,"onRemoveGraph",new se);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:$e(a,"m:ss:SSS")+" ",[e[1].key]:$e(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},lv=class extends _t{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new se);c(this,"listeners",new ov(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=Wn({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=uu(i)(e);pu(i)(s)}},hv=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new se);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},Is,bu=(Is=class extends _t{constructor(){super(...arguments);c(this,"onSlotInit",new se);c(this,"onSlotRemove",new se);c(this,"onSlot1Assignement",new se);c(this,"onSlot2Assignement",new se);c(this,"onSlot3Assignement",new se);c(this,"onSlot4Assignement",new se);c(this,"onSlot5Assignement",new se);c(this,"onSlot6Assignement",new se);c(this,"onSlot7Assignement",new se);c(this,"onSlot1Serialize",new se);c(this,"onSlot2Serialize",new se);c(this,"onSlot3Serialize",new se);c(this,"onSlot4Serialize",new se);c(this,"onSlot5Serialize",new se);c(this,"onSlot6Serialize",new se);c(this,"onSlot7Serialize",new se)}getNextFreeSlotNumber(){for(let t=1;t<=Is.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new hv(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(P=>P.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=wt.serializedGetNumericalValueByKey(s,"top"),l=wt.serializedGetNumericalValueByKey(s,"left");const h=wt.serializedGetStringValueByKey(s,"color");let f=wt.serializedGetNumericalValueByKey(s,"width"),u=wt.serializedGetNumericalValueByKey(s,"height");const g=wt.serializedSegmentsHasExact(s,"avg"),S=wt.serializedSegmentsHasExact(s,"min"),$=wt.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let O;if(a==="point"){if(o===void 0||l===void 0)return;O=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||f===void 0||u===void 0)return;f<0&&(f=0),f+l>this.parent.width-1&&(f=this.parent.width-l-1),u<0&&(u=0),u+o>this.parent.height-1&&(u=this.parent.height-o-1),O=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,f+l,u+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,f+l,u+o,h,!1)}if(O!==void 0){if(O instanceof wr?g&&O.graph.setAvgActivation(!0):O instanceof cr&&(g&&O.graph.setAvgActivation(!0),S&&O.graph.setMinActivation(!0),$&&O.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const P=this.getNextFreeSlotNumber();P!==void 0&&this.assignSlot(P,O)}else i!==void 0&&this.assignSlot(i,O);return O}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(Is,"MAX_SLOTS",7),Is),cv=class extends _t{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},dv=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",3);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t||e===t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},wu={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},uv=class extends _t{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new se);c(this,"callbacksPlay",new se);c(this,"callbacksPause",new se);c(this,"callbacksStop",new se);c(this,"callbacksEnd",new se);c(this,"callbacksChangeFrame",new se);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new dv(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return wu[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),$e(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);this.setRelativeTime(e.relative)}findPreviousOrThis(e){return this.stepsByRelative.has(e)?this.stepsByRelative.get(e):this.findPreviousRelative(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e);let i=Math.max(Math.ceil(t*this.steps.length)+5,this.steps.length),s;for(;i>=0&&s===void 0;){const a=this.stepsByIndex.get(i);a!==void 0&&a.relative<e&&(s=a),i=i-1}return s!==void 0?s:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousOrThis(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},pv=class extends _t{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new se)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},lo=class{},Lt,fv=(Lt=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(Lt.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Lt.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Lt.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Lt.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Lt.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Lt.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Lt.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Lt.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl,this.root.innerHTML="")}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(Lt,"CLASS_BASE","thermalImageRoot"),c(Lt,"CLASS_BUILT",Lt.CLASS_BASE+"__built"),c(Lt,"CLASS_HYDRATED",Lt.CLASS_BASE+"__mounted"),c(Lt,"CLASS_HOVER",Lt.CLASS_BASE+"__hover"),Lt),gv=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new se),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},mv=class extends lo{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new gv(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new fv(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),f=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[f]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},ho=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){var r,e;this._mounted&&((r=this.instance.dom)==null?void 0:r.root)!==null&&(this._mounted=!1,(e=this.instance.dom)==null||e.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},ii=class Rl{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Rl.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Rl.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},vv=class extends ho{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=ii.createVisibleLayer(),this._url&&(this.image=ii.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},yv=class extends ho{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=ii.createCanvasContainer(),this.canvas=ii.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof wr?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,f)=>{const g=new OffscreenCanvas(a,o).getContext("2d"),S=n-s,$=f.map(A=>({id:A[1],type:A[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let A=0;A<a;A++)for(let D=0;D<o;D++){const X=A+D*a,W=l[X];let ie=W;ie<s&&(ie=s),ie>n&&(ie=n);const L=(ie-s)/S,T=Math.round(255*L),M=h[T];g.fillStyle=M,g.fillRect(A,D,1,1);const F=(I,z,R,K,he,_)=>{const H=R+he/2,fe=K+_/2,ne=(I-H)/(he/2),Ee=(z-fe)/(_/2);return ne*ne+Ee*Ee<=1};f.forEach((I,z)=>{const R=$[z],[K,he,_,H,fe,ne]=I;K==="point"?A===H&&D===_&&(R.avg.value=W):K==="rectangle"?A>=H&&A<H+fe&&D>=_&&D<_+ne&&(W<R.min.value&&(R.min.value=W),W>R.max.value&&(R.max.value=W),R.avg.count=R.avg.count+1,R.avg.sum=R.avg.sum+W):K==="ellipsis"&&F(A,D,H,_,a,o)&&(W<R.min.value&&(R.min.value=W),W>R.max.value&&(R.max.value=W),R.avg.count=R.avg.count+1,R.avg.sum=R.avg.sum+W)})}const O=$.map(A=>({id:A.id,min:A.min.value!==1/0?A.min.value:void 0,max:A.max.value!==-1/0?A.max.value:void 0,avg:A.type==="point"?A.avg.value:A.avg.sum/A.avg.count})),P=g.getImageData(0,0,a,o);return{image:await createImageBitmap(P),stats:O}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},bv=class extends ho{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=ii.createCursorLayerRoot(),this.center=ii.createCursorLayerCenter(),this.axisX=ii.createCursorLayerX(),this.axisY=ii.createCursorLayerY(),this.label=ii.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},wv=class extends ho{constructor(e){super(e);c(this,"container");this.container=ii.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Ot,xu=(Ot=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new se)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=Ot.FONT_SIZE_NORMAL,s="normal",n=Ot.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=Ot.FONT_SIZE_NORMAL,i.style.fontFamily=Ot.FONT_FAMILY,i.style.color=Ot.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){Vm.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const f=e.clientWidth,u=60,S=f/(u+40),$=document.createElement("div");$.style.width="100%",$.style.position="relative",$.style.paddingLeft=u/2+"px",$.style.paddingRight=u/2+"px",$.style.boxSizing="border-box";const O=document.createElement("div");O.style.width="100%",O.style.position="relative",O.style.backgroundColor=o,O.style.height="30px";const P=i-t,G=s-t,A=n-t,D=G/P*100,X=A/P*100,W=document.createElement("div");W.style.position="absolute",W.style.backgroundImage=a,W.style.height="100%",W.style.top="0px",W.style.left=D+"%",W.style.width=X-D+"%",O.appendChild(W),$.appendChild(O);const ie=document.createElement("div");ie.style.width="100%",ie.style.height="40px",ie.style.position="relative";const k=(M,F=!1,I,z)=>{const R=M/P*100,K=document.createElement("div");K.style.position="absolute",K.style.top="0px",K.style.left=`calc( ${R}% - ${u/2}px )`,K.style.width=u+"px",K.style.textAlign="center",K.style.lineHeight="0px";const he=document.createElement("div"),_=document.createElement("div"),H=document.createElement("div"),fe=7,ne=fe+"px";he.innerHTML=(t+M).toFixed(2)+" °C",he.style.display="inline-block",he.style.fontSize=Ot.FONT_SIZE_SMALL,he.style.lineHeight="1em",he.style.padding="3px",he.style.position="relative",_.style.width="100%",_.style.height=ne,_.style.textAlign="center",_.style.position="relative",_.style.lineHeight="0px",H.style.content="",H.style.display="inline-block",F?(H.style.width=fe*2+"px",H.style.height=fe*2+"px",H.style.rotate="45deg",H.style.backgroundColor=z,he.style.backgroundColor=z,he.style.zIndex="99",he.style.color=I):(H.style.width="1px",H.style.height=ne,H.style.backgroundColor=I),_.appendChild(H),K.appendChild(_),K.appendChild(he),ie.appendChild(K)};if(h){const M=document.createElement("div");M.style.position="absolute",M.style.border=`2px solid ${l}`,M.style.height="100%",M.style.boxSizing="border-box";const F=(h.from-t)/P*100,I=(h.to-t)/P*100-F;M.style.left=F+"%",M.style.width=I+"%",O.appendChild(M),k(h.from-t,!0,"white",o),k(h.to-t,!0,"white",o)}const L=P/S;let T=0;for(;T<=P;)k(T,!1,l,"transparent"),T=T+L;return k(G,!0,"white",l),k(A,!0,"white",l),$.appendChild(ie),$}},c(Ot,"FONT_SIZE_NORMAL","16px"),c(Ot,"FONT_SIZE_SMALL","12px"),c(Ot,"COLOR_BASE","black"),c(Ot,"COLOR_GRAY","gray"),c(Ot,"COLOR_LIGHT","lightgray"),c(Ot,"WIDTH","1600px"),c(Ot,"FONT_FAMILY","sans-serif"),c(Ot,"GAP_BASE","10px"),c(Ot,"GAP_SMALL","5px"),c(Ot,"DEBUG",!1),Ot),Rr,xv=(Rr=class extends xu{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...Rr.DEFAULT_PARAMS,...t,fileName:i}}async onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i),o=`${t.fontSize}px`;s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),this.localInstance=await this.file.reader.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){this.container.style.lineHeight=`${t.fontSize*1.5}px`;const h=this.file.group.registry.minmax.value.min,f=this.file.group.registry.minmax.value.max;if(t.showFileInfo){const u=document.createElement("div");u.style.paddingBottom=`${t.fontSize/3}px`,u.appendChild(this.createElementWithText("div",this.file.fileName,o,"bold",t.textColor)),this.container.appendChild(u)}if(t.showThermalScale){const u=h!==this.file.meta.current.min||f!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,f,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",u))}if(this.localInstance.mountToDom(this.container),this.localInstance.dom&&this.localInstance.dom.visibleLayer&&(this.localInstance.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const u=document.createElement("table");u.style.width="100%",u.style.borderCollapse="collapse",u.style.marginTop=`${t.fontSize/3}px`;const g=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(S=>{const $=this.createElementWithText("th",S,o,void 0,Rr.COLOR_GRAY);$.style.textAlign="left",$.style.borderBottom=`1px solid ${Rr.COLOR_LIGHT}`,$.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,g.appendChild($)}),u.appendChild(g),this.container.appendChild(u),this.file.slots.forEveryExistingSlot((S,$)=>{var P;const O=(P=this.localInstance)==null?void 0:P.slots.createFromSerialized(S.serialized,$);if(O){const G=document.createElement("tr"),A=this.createElementWithText("td",S.analysis.name,o,void 0,S.analysis.initialColor);A.style.borderBottom=`1px solid ${Rr.COLOR_LIGHT}`,A.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,G.appendChild(A);const D=(X,W)=>{const ie=this.createElementWithText("td",W?W.toFixed(3)+" °C":"",o,void 0);ie.style.borderBottom=`1px solid ${Rr.COLOR_LIGHT}`,ie.style.paddingTop=`${t.fontSize/3}px`,ie.style.paddingBottom=`${t.fontSize/3}px`,G.appendChild(ie)};S.analysis instanceof cr?(D(S.analysis.initialColor,O.avg),D(S.analysis.initialColor,O.min),D(S.analysis.initialColor,O.max)):S.analysis instanceof wr&&(D(S.analysis.initialColor,O.avg),D(S.analysis.initialColor),D(S.analysis.initialColor)),u.appendChild(G)}})}if(t.author||t.license){const u=document.createElement("div");u.style.lineHeight="1.5em",u.style.color=Rr.COLOR_GRAY,u.style.paddingTop=`${t.fontSize/3}px`,t.author&&u.appendChild(this.createElementWithText("span",t.author,o)),t.author&&t.license&&u.appendChild(this.createElementWithText("span"," - ",o)),t.license&&u.appendChild(this.createElementWithText("span",t.license,o)),this.container.appendChild(u)}if(t.showSource){const u=document.createElement("div");u.style.lineHeight="1.5em",u.style.paddingTop=`${t.fontSize/3}px`;const g=ht.human(new Date),S=window.location.href;u.appendChild(this.createElementWithText("span",`${g} - ${S}`,o,void 0,Rr.COLOR_GRAY)),this.container.appendChild(u)}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},0)}}},c(Rr,"DEFAULT_PARAMS",{fileName:"sth",width:1200,fontSize:20,textColor:"black",backgroundColor:"white",showAnalysis:!0,showFileInfo:!1,showThermalScale:!0,showSource:!1}),Rr),Hn=class Su extends mv{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new oo(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new xv(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new yv(this),visibleLayer:new vv(this,this.visibleUrl),cursorLayer:new bv(this),listenerLayer:new wv(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new cv(this,void 0),this.timeline=new uv(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new pv(this,!1),this.analysis=new av(this,[]),this.analysisData=new lv(this),this.slots=new bu(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new Su(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},Sv=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof cr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof cr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof cr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof cr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:ht.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof cr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=Wn({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=uu(s)(i);pu(s)(n)}},rt,$v=(rt=class extends xu{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=rt.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,rt.FONT_SIZE_SMALL,"normal",rt.COLOR_BASE);l.style.paddingTop=rt.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,rt.FONT_SIZE_SMALL,void 0,rt.COLOR_GRAY);s.style.paddingTop=rt.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${ht.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,rt.FONT_SIZE_SMALL,void 0,rt.COLOR_GRAY);return n.style.paddingTop=rt.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=rt.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${ht.human(t.timeline.currentStep.absolute)}`,rt.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(f=>f.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const f=document.createElement("tr");["","AVG","MIN","MAX"].forEach(u=>{const g=this.createElementWithText("th",u,rt.FONT_SIZE_SMALL,void 0,rt.COLOR_GRAY);g.style.padding=rt.GAP_SMALL+"px",g.style.textAlign="left",f.appendChild(g)}),h.appendChild(f),a.appendChild(h),l.slots.forEveryExistingSlot((u,g)=>{const S=t.slots.createFromSerialized(u.serialized,g);if(S){const $=document.createElement("tr"),O=this.createElementWithText("td",u.analysis.name,rt.FONT_SIZE_SMALL,void 0,u.analysis.initialColor);O.style.borderTop=`1px solid ${rt.COLOR_LIGHT}`,O.style.padding=`${rt.GAP_SMALL}px 0px ${rt.GAP_SMALL} 0px`,$.appendChild(O);const P=(G,A)=>{const D=this.createElementWithText("td",A?A.toFixed(3)+" °C":"",rt.FONT_SIZE_SMALL,void 0);D.style.borderTop=`1px solid ${rt.COLOR_LIGHT}`,D.style.paddingTop=`${rt.GAP_SMALL}px`,D.style.paddingBottom=`${rt.GAP_SMALL}px`,$.appendChild(D)};u.analysis instanceof cr?(P(u.analysis.initialColor,S.avg),P(u.analysis.initialColor,S.min),P(u.analysis.initialColor,S.max)):u.analysis instanceof wr&&(P(u.analysis.initialColor,S.avg),P(u.analysis.initialColor),P(u.analysis.initialColor)),h.appendChild($)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(f=>f.thermalUrl);let l;o.forEach(f=>{l=n.batch.request(f,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",f=>{const u=100/t.columns;f.forEach(g=>{g instanceof Hn&&this.buildInstance(g,u,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...rt.DEFAULT_PROPS,fileName:i}:{...rt.DEFAULT_PROPS,...t,fileName:i}}},c(rt,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),rt),Yi,Cv=(Yi=class extends _t{constructor(){super(...arguments);c(this,"onSlotSync",new se);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}get currentPointer(){return this._currentPointer}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){const s=t.slots.getSlot(i);if(i===1)return{slot:s,serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:s,serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:s,serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:s,serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:s,serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:s,serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:s,serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(Yi.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(Yi.LISTENER_KEY),n.delete(Yi.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(s!==this.currentPointer)if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const f=(a=n.slots.getSlot(l))==null?void 0:a.serialized,u=h.serialized;if(f!==u)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(u);else{const g=n.slots.createFromSerialized(u,l);g==null||g.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Sv(this)),this._csv}get png(){return this._png||(this._png=new $v(this)),this._png}},c(Yi,"LISTENER_KEY","__analysis__sync"),Yi),_v=class extends _t{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},kv=class extends _t{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e.sort((t,i)=>t.timestamp-i.timestamp)}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof Hn?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},$u=class extends _t{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Pv=class extends $u{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},Ov=class extends _t{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new se);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new se);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new se);c(this,"_duration",0);c(this,"onDurationChanged",new se);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof Hn);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},fs,Av=(fs=class extends _t{constructor(t){super(t,void 0);c(this,"timeout")}calculateData(){let t=[],i=[];const s=[],n=this.parent.files.value.sort((o,l)=>o.timestamp-l.timestamp);i=n[0].analysisData.value.values[0],t=n[0].analysisData.value.colors,this.parent.files.forEveryInstance(o=>{const l=[new Date(o.timestamp)];o.analysis.value.forEach(async h=>{h.graph.state.MIN===!0&&h.min&&l.push(h.min),h.graph.state.MAX===!0&&h.max&&l.push(h.max),h.graph.state.AVG===!0&&h.avg&&l.push(h.avg)}),l.length>1&&s.push(l)}),t.length>0?this.value={colors:t,data:[i,...s]}:this.value=void 0,console.log("Přepočítal jsem data",this.value)}turnOn(){this.parent.files.forEveryInstance(t=>{t.analysisData.addListener(fs.LISTENER_ID,()=>{this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.calculateData()},0)})})}turnOff(){this.parent.files.forEveryInstance(t=>{t.analysisData.removeListener(fs.LISTENER_ID)})}_wtf(){this.parent.files.forEveryInstance(t=>{t.analysis.layers.forEach(i=>{i.graph.setAvgActivation(!0)})})}validate(t){return t}afterSetEffect(){}},c(fs,"LISTENER_ID","AnalysisGroupGraph"),fs),Ev=class extends lo{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new Pv(this,void 0));c(this,"files",new kv(this,[]));c(this,"cursorPosition",new _v(this,void 0));c(this,"analysisSync",new Cv(this,!1));c(this,"analysisGraph",new Av(this));c(this,"_playback");c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});c(this,"filters",new oo(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get tool(){return this.registry.manager.tool}get playback(){return this._playback||(this._playback=new Ov(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}getInstances(){return this.files.value}startBatch(e){return this.registry.batch.getBatchById(e)}},Cu=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Ci=class _u extends Cu{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new _u(e.url,e.code,e.message)}},ku=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},_i=class extends Cu{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=Hn.fromService(t,i,s,n);return t.files.addFile(a),a}},Dv=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(T,M)=>{const F=T.getBigInt64(M,!0),I=62135596800000n,z=10000n,R=24n*60n*60n*1000n*z,K=0x4000000000000000n,he=0x8000000000000000n;let H=F&0x3fffffffffffffffn;F&he&&(H>K-R&&(H-=K),H<0&&(H+=R));const ne=H/z-I;return Number(ne)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,f=l+h,u=r.slice(25),g=u.byteLength/f,S=T=>{const M=T*f,F=M+f,I=u.slice(M,F),z=new DataView(I),R=z.getFloat32(8,!0),K=z.getFloat32(12,!0),he=n(z,0),_=z.getFloat32(24,!0),H=z.getFloat32(28,!0);return{timestamp:he,min:R,max:K,emissivity:_,reflectedKelvins:H}},$=[];for(let T=0;T<g;T++){const M=S(T);$.push(M)}const O={emissivity:0,reflectedKelvins:0};let P=1/0,G=-1/0;const A=[];$.forEach(T=>{O.emissivity=O.emissivity+T.emissivity,O.reflectedKelvins=O.reflectedKelvins+T.reflectedKelvins,T.min<P&&(P=T.min),T.max>G&&(G=T.max),A.push(T.timestamp)});const D=A[0],X=[];A.forEach((T,M)=>{const F=A[M+1];let I=0;F===void 0&&(I=0),I=F-T;const z=T-D;X.push({absolute:T,relative:z,offset:isNaN(I)?0:I,index:M})});const W=$[$.length-1].timestamp-$[0].timestamp,ie=W/g,k=1e3/ie,L=$[0].timestamp;return{width:t,height:i,timestamp:L,bytesize:s,frameCount:g,duration:W,frameInterval:ie,fps:k,timeline:X,min:P,max:G,averageEmissivity:O.emissivity/$.length,averageReflectedKelvins:O.reflectedKelvins/$.length}},Lv=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,f=r.slice(25),u=e*h,g=u+h;return{array:f.slice(u,g),dataType:i}},Rv=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let f=i&0x3fffffffffffffffn;i&l&&(f>o-a&&(f-=o),f<0&&(f+=a));const g=f/n-s,S=Number(g),$=t.getFloat32(8,!0),O=t.getFloat32(12,!0),P=t.getFloat32(24,!0),G=t.getFloat32(28,!0),A=r.slice(57);let D=[];if(e===0){const X=new Uint16Array(A),W=Math.abs($-O),ie=65535;X.forEach(k=>{const L=k/ie;D.push($+W*L)})}else e===1&&(D=Array.from(new Float32Array(A)));return{timestamp:S,min:$,max:O,emissivity:P,reflectedKelvins:G,pixels:D}},Tv=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(G,A)=>{const D=G.getBigInt64(A,!0),X=62135596800000n,W=10000n,ie=24n*60n*60n*1000n*W,k=0x4000000000000000n,L=0x8000000000000000n;let M=D&0x3fffffffffffffffn;D&L&&(M>k-ie&&(M-=k),M<0&&(M+=ie));const I=M/W-X;return Number(I)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,f=s*n*l,u=h+f,g=r.slice(25),S=g.byteLength/u,$={},O=G=>{const A=G*u,D=A+u,X=g.slice(A,D),W=new DataView(X),ie=a(W,0),k=W.getFloat32(8,!0),T=W.getFloat32(12,!0)-k,F=57+t*l*s+e*l;let I=0;if(o===1)I=W.getFloat32(F,!0);else if(o===0){const K=W.getInt16(F,!0)/65535;I=k+T*K}return{timestamp:ie,temperature:I}};let P=0;for(let G=0;G<S;G++){const A=O(G);P===0&&(P=A.timestamp),$[A.timestamp-P]=A.temperature}return $},Mv=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(D,X)=>{const W=D.getBigInt64(X,!0),ie=62135596800000n,k=10000n,L=24n*60n*60n*1000n*k,T=0x4000000000000000n,M=0x8000000000000000n;let I=W&0x3fffffffffffffffn;W&M&&(I>T-L&&(I-=T),I<0&&(I+=L));const R=I/k-ie;return Number(R)},h=n.getUint8(15);let f=2;h===1&&(f=4);const u=57,g=a*o*f,S=u+g,$=r.slice(25),O=$.byteLength/S,P={},G=D=>{const X=D*S,W=X+S,ie=$.slice(X,W),k=new DataView(ie),L=l(k,0),T=k.getFloat32(8,!0),F=k.getFloat32(12,!0)-T,I=57,z=e,R=e+i,K=t,he=t+s;let _=1/0,H=-1/0,fe=0,ne=0;for(let Ve=K;Ve<=he;Ve++){const nt=Ve*a;for(let ct=z;ct<=R;ct++){const ce=I+(nt+ct)*f;let ge=NaN;if(h===1)ge=k.getFloat32(ce,!0);else{const at=k.getInt16(ce,!0)/65535;ge=T+F*at}ge<_&&(_=ge),ge>H&&(H=ge),ne+=ge,fe++}}const Ee={min:_,max:H,avg:ne/fe,count:fe};return{timestamp:L,result:Ee}};let A=0;for(let D=0;D<O;D++){const X=G(D);A===0&&(A=X.timestamp),P[X.timestamp-A]=X.result}return P},Iv=async r=>{console.log("Reading histogram");let e=[];const t=async P=>{const G=new DataView(P.slice(0,25)),A=G.getUint8(15),D=G.getUint16(17,!0),X=G.getUint16(19,!0),W=A===1?4:2,ie=57,k=D*X*W,L=ie+k,T=P.slice(25),M=T.byteLength/L;let F=[];for(let I=0;I<M;I++){const z=I*L,R=z+57,K=R+k,he=T.slice(R,K);if(A===0){const _=new DataView(T.slice(z,56)),H=_.getFloat32(8,!0),fe=_.getFloat32(12,!0),ne=new Uint16Array(he),Ee=Math.abs(H-fe),Ve=65535;ne.forEach(nt=>{const ct=nt/Ve;F.push(H+Ee*ct)})}else A===1&&(F=F.concat(Array.from(new Float32Array(he))))}return F};(await Promise.all(r.map(P=>t(P)))).forEach(P=>{e=e.concat(P)}),e.sort((P,G)=>P-G);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=255,l=a/o,h=[];let f=[...e];for(let P=0;P<o;P++){const G=s+l*P,A=G+l,D=f.findIndex(X=>X>A);if(D===0){const X={from:G,to:A,count:0,percentage:0};h.push(X)}else{const W=f.slice(0,D-1).length,ie=W/e.length*100,k={from:G,to:A,count:W,percentage:ie};h.push(k),f=f.slice(D)}}const u=[...h].sort((P,G)=>P.percentage-G.percentage),g=u[0].percentage,S=u[u.length-1].percentage,$=Math.abs(g-S);return h.map(P=>({...P,height:P.percentage/$*100}))},Uv=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},zv=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(X,W)=>{const ie=X.getBigInt64(W,!0),k=62135596800000n,L=10000n,T=24n*60n*60n*1000n*L,M=0x4000000000000000n,F=0x8000000000000000n;let z=ie&0x3fffffffffffffffn;ie&F&&(z>M-T&&(z-=M),z<0&&(z+=T));const K=z/L-k;return Number(K)},h=n.getUint8(15);let f=2;h===1&&(f=4);const u=57,g=a*o*f,S=u+g,$=r.slice(25),O=$.byteLength/S,P={},G=(X,W)=>{const ie=e+i/2,k=t+s/2,L=(X-ie)/(i/2),T=(W-k)/(s/2);return L*L+T*T<=1},A=X=>{const W=X*S,ie=W+S,k=$.slice(W,ie),L=new DataView(k),T=l(L,0),M=L.getFloat32(8,!0),I=L.getFloat32(12,!0)-M,z=57,R=e,K=e+i,he=t,_=t+s;let H=1/0,fe=-1/0,ne=0,Ee=0;for(let nt=he;nt<=_;nt++){const ct=nt*a;for(let ce=R;ce<=K;ce++)if(G(ce,nt)){const ge=z+(ct+ce)*f;let Ae=NaN;if(h===1)Ae=L.getFloat32(ge,!0);else{const je=L.getInt16(ge,!0)/65535;Ae=M+I*je}Ae<H&&(H=Ae),Ae>fe&&(fe=Ae),Ee+=Ae,ne++}}const Ve={min:H,max:fe,avg:Ee/ne,count:ne};return{timestamp:T,result:Ve}};let D=0;for(let X=0;X<O;X++){const W=A(X);D===0&&(D=W.timestamp),P[W.timestamp-D]=W.result}return P},Fv=[{extension:"lrc",minme:"application/octet-stream"}],jv={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Fv,is:Uv,baseInfo:Dv,getFrameSubset:Lv,frameData:Rv,registryHistogram:Iv,pointAnalysisData:Tv,rectAnalysisData:Mv,ellipsisAnalysisData:zv},Pu=Object.freeze(jv),Nv={LrcParser:Pu},Ou=Object.values(Nv),Au=(r,e)=>{const t=Ou.find(i=>i.is(r,e));if(t===void 0)throw new ku(2,e,`No parser found for '${e}'.`);return t},Eu=Ou.map(r=>r.extensions),Wv=Eu.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Hv=class Du{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new Du(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(await fetch(this.thermalUrl))),this.response}async processResponse(e){const t=e;if(t.status!==200)return this.pocessTheService(new Ci(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=Au(i,this.thermalUrl);return this.pocessTheService(new _i(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof ku)return this.pocessTheService(Ci.fromError(s));throw s}}pocessTheService(e){return e}},Bv=class Lu{constructor(e,t,i=!0){c(this,"_hover",!1);c(this,"onMouseEnter",new se);c(this,"onMouseLeave",new se);c(this,"onDrop",new se);c(this,"onProcessingEnd",new se);c(this,"input");c(this,"hydrated",!1);c(this,"multiple");c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.multiple=i,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t,i=!0){const s=new Lu(e,t,i);return s.hydrate(),s}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleFiles(e){let t=[];if(this.multiple)t=await Promise.all(e.map(async i=>await this.service.loadUploadedFile(i)));else{const i=e[0];i&&t.push(await this.service.loadUploadedFile(i))}return t}async handleDrop(e){e.preventDefault(),this.onDrop.call();let t=[];const i=e.dataTransfer;return i&&i.files&&(t=await this.handleFiles(Array.from(i.files))),this.onProcessingEnd.call(t,e),this.handleLeave(),{results:t,event:e}}async handleInputChange(e){e.preventDefault(),this.onDrop.call();const t=e.target;let i=[];return t.files&&(i=await this.handleFiles(Array.from(t.files)),this.onProcessingEnd.call(i,e),this.handleLeave()),{results:i,event:e}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Wv,this.multiple&&(e.multiple=!0),e}openFileDialog(e=!0){this.input!==void 0&&(this.input.multiple=e,this.input.click())}},Gv=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new oh(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=Au(e,r.name);return new _i(this,e,t,r.name)}catch(e){return new Ci(r.name,3,e.message)}}handleDropzone(r,e=!0){return Bv.listenOnElement(this,r,e)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=Hv.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}async loadFiles(r){return r}},Vv=class extends _t{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},Yv=class extends _t{get availablePalettes(){return ni}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},qv=class extends _t{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},ad=class Tl{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new se);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Tl(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Tl(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof _i?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},Xv=class{constructor(r){c(this,"onBatchComplete",new se);c(this,"set",new Set);this.registry=r}get numberOfBatches(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=ad.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=ad.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.numberOfBatches===0&&this.registry.loading.markAsLoaded()}},Kv=class extends _t{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},Zv=class extends _t{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=this.parent.histogram.value.filter(i=>i.height>=10),t={from:e[0].from,to:e[e.length-1].to};this.imposeRange(t)}}},Jv=class extends _t{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addExistingGroup(e){this.value.map(t=>t.hash).includes(e.hash)||(this.value=[...this.value,e])}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new Ev(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Qv=class extends _t{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((S,$)=>{const O=$.reduce((P,G)=>[...P,...G],[]);return[...S,...O]},[]).sort((S,$)=>S-$);const h=n/a;let f=i+h;const u=new Map;let g=0;for(;f!==!1;){const S=l.findIndex(P=>P>f),$=l.slice(0,S).length;u.set(f-h/2,$),g+=$,l=l.slice(S);const O=f+h;f=O<s?O:!1}return{result:u,resultCount:g}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(Pu.registryHistogram,[t]);this.value=i}},ey=class extends _t{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},ty=class extends $u{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},ry=class extends lo{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new Jv(this,[]));c(this,"_batch");c(this,"onProcessingStart",new se);c(this,"onProcessingEnd",new se);c(this,"opacity",new Kv(this,1));c(this,"minmax",new ty(this,void 0));c(this,"loading",new ey(this,!1));c(this,"range",new Zv(this,void 0));c(this,"histogram",new Qv(this,[]));c(this,"palette");c(this,"filters",new oo(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([s,n])=>{const a=this.groups.addOrGetGroup(s),o=await Promise.all(n.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:a,groupFiles:o}})),i=await Promise.all(t.map(async({group:s,groupFiles:n})=>await Promise.all(n.map(async o=>o instanceof _i?await o.createInstance(s):!1))));return this.postLoadedProcessing(),i}async loadFullOneFile(e,t){this.reset(),this.loading.markAsLoading();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl),n=s instanceof _i?await s.createInstance(i):s;return this.loading.markAsLoaded(),this.postLoadedProcessing(),n}get batch(){return this._batch||(this._batch=new Xv(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},co=class{constructor(r){c(this,"active",!1);this.manager=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},uo=class extends co{},iy=class extends uo{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=bu.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},sy=class extends uo{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},ny=class extends uo{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},ay=class extends co{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},Ru=class extends co{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},oy=[Ru,ny,sy,iy,ay],ly=r=>{const e=oy.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},hy=class extends _t{constructor(e,t){super(e,t);c(this,"_tools",ly(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof co?this.value=e:this.value=this.tools[e]}},Tu="chrome"in window;console.log("is chromium",Tu);var cy=Tu?{maxWorkers:4}:{},dy=Xm.pool(cy),oh=class extends lo{constructor(e,t){super();c(this,"id");c(this,"service",new Gv(this));c(this,"registries",{});c(this,"palette",new Yv(this,"jet"));c(this,"smooth",new qv(this,!1));c(this,"graphSmooth",new Vv(this,!1));c(this,"tool",new hy(this,new Ru(this)));c(this,"pool");c(this,"filters",new oo(this));this.pool=e||dy,this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new ry(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}},uy=Object.defineProperty,py=Object.getOwnPropertyDescriptor,gr=(r,e,t,i)=>{for(var s=i>1?void 0:i?py(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&uy(e,t,s),s};const od=["ready","select"],fy={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Kt=class extends dr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new se,this.left=0,this.top=0,this.w=0,this.h=0}render(){return p`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){xg(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(od,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(fy[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!od.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await Yc({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(Yc).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Kt.styles=ae`
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
  `;gr([d({type:String,reflect:!0})],Kt.prototype,"type",2);gr([d({type:Array})],Kt.prototype,"events",2);gr([d({type:Object,hasChanged:()=>!0})],Kt.prototype,"options",2);gr([d({type:Array})],Kt.prototype,"cols",2);gr([d({type:Array})],Kt.prototype,"rows",2);gr([d({type:String})],Kt.prototype,"data",2);gr([d({type:Object})],Kt.prototype,"view",2);gr([d({type:Array})],Kt.prototype,"selection",2);gr([d({type:Object})],Kt.prototype,"_data",2);gr([d({type:Number,reflect:!0})],Kt.prototype,"left",2);gr([d({type:Number,reflect:!0})],Kt.prototype,"top",2);gr([d({type:Number,reflect:!0})],Kt.prototype,"w",2);gr([d({type:Number,reflect:!0})],Kt.prototype,"h",2);Kt=gr([V("thermal-chart")],Kt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=()=>new gy;class gy{}const Sl=new WeakMap,ye=no(class extends Af{render(r){return C}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),C}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=Sl.get(e);t===void 0&&(t=new WeakMap,Sl.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=Sl.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var w=(r=>(r.loading="loading",r.config="config",r.temperature="temperature",r.upload="upload",r.uploadafile="uploadafile",r.selectfile="selectfile",r.addfiles="addfiles",r.clear="clear",r.dragorselectfile="dragorselectfile",r.file="file",r.next="next",r.prev="prev",r.back="back",r.close="close",r.detail="detail",r.showeverything="showeverything",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.togglevisibleimage="togglevisibleimage",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.numfiles="numfiles",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.exportimagewidth="exportimagewidth",r.exportimagefontsize="exportimagefontsize",r.showingfolder="showingfolder",r.showingfolders="showingfolders",r.and="and",r.or="or",r.doyouwanttoadd="doyouwanttoadd",r.youmayalsoadd="youmayalsoadd",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.groupped="groupped",r.bydays="bydays",r.byhours="byhours",r.byweeks="byweeks",r.bymonths="bymonths",r.byyears="byyears",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.reload="reload",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r.remotefoldersbrowser="remotefoldersbrowser",r))(w||{});const my=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],ld=Object.fromEntries(my.map(r=>[r.code,r]));var vy=Object.defineProperty,yy=Object.getOwnPropertyDescriptor,Mu=(r,e,t,i)=>{for(var s=i>1?void 0:i?yy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vy(e,t,s),s};let _n=class extends dr{constructor(){super(),this.dialogRef=pe(),this.closeButtonRef=pe(),this.invokerRef=pe()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return p`
            <slot name="invoker" ${ye(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${ye(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${ye(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};_n.shadowRootOptions={...dr.shadowRootOptions,mode:"open"};_n.styles=ae`

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

        
    
    `;Mu([d({type:String,reflect:!0})],_n.prototype,"label",2);_n=Mu([V("thermal-dialog")],_n);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Iu=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let hd=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Iu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class by{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wy=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class cd extends by{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:f}]of this.subscriptions)l.has(h)||(l.add(h),f.dispatchEvent(new Iu(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new wy(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new cd(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new cd(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new hd(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new hd(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let Sa;const xy=new Uint8Array(16);function Sy(){if(!Sa&&(Sa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Sa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Sa(xy)}const Ht=[];for(let r=0;r<256;++r)Ht.push((r+256).toString(16).slice(1));function $y(r,e=0){return Ht[r[e+0]]+Ht[r[e+1]]+Ht[r[e+2]]+Ht[r[e+3]]+"-"+Ht[r[e+4]]+Ht[r[e+5]]+"-"+Ht[r[e+6]]+Ht[r[e+7]]+"-"+Ht[r[e+8]]+Ht[r[e+9]]+"-"+Ht[r[e+10]]+Ht[r[e+11]]+Ht[r[e+12]]+Ht[r[e+13]]+Ht[r[e+14]]+Ht[r[e+15]]}const Cy=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),dd={randomUUID:Cy};function _y(r,e,t){if(dd.randomUUID&&!e&&!r)return dd.randomUUID();r=r||{};const i=r.random||(r.rng||Sy)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,$y(i)}const Ri="localeContext",ss=r=>{vt.on("languageChanged",e=>{r.locale=e}),r.locale===void 0?r.locale=vt.language:vt.changeLanguage(r.locale)},$l={cs:["cs","cz","cs_CZ","cs_CS"],fr:["fr","fr_FR","fr_CA"],de:["de","de_DE","de_AT","de_CH"],cy:["cy","cy_GB","cy"],en:["en","en_US","en_GB","en_CA","en_AU","en_NZ","en_IE","en_ZA"]},ns={fromAttribute:r=>{let e,t=0;for(;t<Object.keys($l).length&&e===void 0;){const i=Object.keys($l)[t];$l[i].includes(r)&&(e=i),t++}return e??"en"},toAttribute:r=>r};var ky=Object.defineProperty,Py=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&ky(e,t,s),s};const Gh=class Gh extends dr{get UUID(){return this._UUID===void 0&&(this._UUID=_y()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),vt.on("languageChanged",e=>{this._locale=e})}};Gh.shadowRootOptions={...dr.shadowRootOptions,mode:"open"};let Xe=Gh;Py([le({context:Ri,subscribe:!0})],Xe.prototype,"_locale");const Uu="tour-context",zu="tour-step",Fu="tourable-element";var Oy=Object.defineProperty,ju=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Oy(e,t,s),s};class ws extends Xe{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}ju([d({type:String})],ws.prototype,"tour");ju([q({context:Fu})],ws.prototype,"tourableElement");var Ay=Object.defineProperty,Ey=Object.getOwnPropertyDescriptor,po=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ey(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ay(e,t,s),s};let ki=class extends ws{constructor(){super(...arguments),this.tourableElementRef=pe(),this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return p`
            <button class="${this.variant}" ${ye(this.tourableElementRef)} part="btn">
                <slot></slot>
            </button>
        `}};ki.VARIANTS=["slate","primary","foreground","background"];ki.shadowRootOptions={...dr.shadowRootOptions,mode:"open"};ki.styles=ae`

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
    
    `;po([d({type:String,converter:{fromAttribute:r=>{if(ki.VARIANTS.includes(r))return r},toAttribute:r=>r},reflect:!1})],ki.prototype,"variant",2);po([d({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],ki.prototype,"interactive",2);po([d({type:String})],ki.prototype,"size",2);ki=po([V("thermal-button")],ki);const Ki=Math.min,xi=Math.max,Ha=Math.round,ai=r=>({x:r,y:r}),Dy={left:"right",right:"left",bottom:"top",top:"bottom"},Ly={start:"end",end:"start"};function Ml(r,e,t){return xi(r,Ki(e,t))}function Js(r,e){return typeof r=="function"?r(e):r}function Pi(r){return r.split("-")[0]}function Bn(r){return r.split("-")[1]}function Nu(r){return r==="x"?"y":"x"}function lh(r){return r==="y"?"height":"width"}function Gn(r){return["top","bottom"].includes(Pi(r))?"y":"x"}function hh(r){return Nu(Gn(r))}function Ry(r,e,t){t===void 0&&(t=!1);const i=Bn(r),s=hh(r),n=lh(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Ba(a)),[a,Ba(a)]}function Ty(r){const e=Ba(r);return[Il(r),e,Il(e)]}function Il(r){return r.replace(/start|end/g,e=>Ly[e])}function My(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function Iy(r,e,t,i){const s=Bn(r);let n=My(Pi(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Il)))),n}function Ba(r){return r.replace(/left|right|bottom|top/g,e=>Dy[e])}function Uy(r){return{top:0,right:0,bottom:0,left:0,...r}}function ch(r){return typeof r!="number"?Uy(r):{top:r,right:r,bottom:r,left:r}}function Fs(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function ud(r,e,t){let{reference:i,floating:s}=r;const n=Gn(e),a=hh(e),o=lh(a),l=Pi(e),h=n==="y",f=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,g=i[o]/2-s[o]/2;let S;switch(l){case"top":S={x:f,y:i.y-s.height};break;case"bottom":S={x:f,y:i.y+i.height};break;case"right":S={x:i.x+i.width,y:u};break;case"left":S={x:i.x-s.width,y:u};break;default:S={x:i.x,y:i.y}}switch(Bn(e)){case"start":S[a]-=g*(t&&h?-1:1);break;case"end":S[a]+=g*(t&&h?-1:1);break}return S}const zy=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:f,y:u}=ud(h,i,l),g=i,S={},$=0;for(let O=0;O<o.length;O++){const{name:P,fn:G}=o[O],{x:A,y:D,data:X,reset:W}=await G({x:f,y:u,initialPlacement:i,placement:g,strategy:s,middlewareData:S,rects:h,platform:a,elements:{reference:r,floating:e}});f=A??f,u=D??u,S={...S,[P]:{...S[P],...X}},W&&$<=50&&($++,typeof W=="object"&&(W.placement&&(g=W.placement),W.rects&&(h=W.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):W.rects),{x:f,y:u}=ud(h,g,l)),O=-1)}return{x:f,y:u,placement:g,strategy:s,middlewareData:S}};async function Wu(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:g=!1,padding:S=0}=Js(e,r),$=ch(S),P=o[g?u==="floating"?"reference":"floating":u],G=Fs(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(P)))==null||t?P:P.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:f,strategy:l})),A=u==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,D=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),X=await(n.isElement==null?void 0:n.isElement(D))?await(n.getScale==null?void 0:n.getScale(D))||{x:1,y:1}:{x:1,y:1},W=Fs(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:A,offsetParent:D,strategy:l}):A);return{top:(G.top-W.top+$.top)/X.y,bottom:(W.bottom-G.bottom+$.bottom)/X.y,left:(G.left-W.left+$.left)/X.x,right:(W.right-G.right+$.right)/X.x}}const Fy=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:f=0}=Js(r,e)||{};if(h==null)return{};const u=ch(f),g={x:t,y:i},S=hh(s),$=lh(S),O=await a.getDimensions(h),P=S==="y",G=P?"top":"left",A=P?"bottom":"right",D=P?"clientHeight":"clientWidth",X=n.reference[$]+n.reference[S]-g[S]-n.floating[$],W=g[S]-n.reference[S],ie=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let k=ie?ie[D]:0;(!k||!await(a.isElement==null?void 0:a.isElement(ie)))&&(k=o.floating[D]||n.floating[$]);const L=X/2-W/2,T=k/2-O[$]/2-1,M=Ki(u[G],T),F=Ki(u[A],T),I=M,z=k-O[$]-F,R=k/2-O[$]/2+L,K=Ml(I,R,z),he=!l.arrow&&Bn(s)!=null&&R!==K&&n.reference[$]/2-(R<I?M:F)-O[$]/2<0,_=he?R<I?R-I:R-z:0;return{[S]:g[S]+_,data:{[S]:K,centerOffset:R-K-_,...he&&{alignmentOffset:_}},reset:he}}}),jy=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:$="none",flipAlignment:O=!0,...P}=Js(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const G=Pi(s),A=Pi(o)===o,D=await(l.isRTL==null?void 0:l.isRTL(h.floating)),X=g||(A||!O?[Ba(o)]:Ty(o));!g&&$!=="none"&&X.push(...Iy(o,O,$,D));const W=[o,...X],ie=await Wu(e,P),k=[];let L=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&k.push(ie[G]),u){const I=Ry(s,a,D);k.push(ie[I[0]],ie[I[1]])}if(L=[...L,{placement:s,overflows:k}],!k.every(I=>I<=0)){var T,M;const I=(((T=n.flip)==null?void 0:T.index)||0)+1,z=W[I];if(z)return{data:{index:I,overflows:L},reset:{placement:z}};let R=(M=L.filter(K=>K.overflows[0]<=0).sort((K,he)=>K.overflows[1]-he.overflows[1])[0])==null?void 0:M.placement;if(!R)switch(S){case"bestFit":{var F;const K=(F=L.map(he=>[he.placement,he.overflows.filter(_=>_>0).reduce((_,H)=>_+H,0)]).sort((he,_)=>he[1]-_[1])[0])==null?void 0:F[0];K&&(R=K);break}case"initialPlacement":R=o;break}if(s!==R)return{reset:{placement:R}}}return{}}}};function Hu(r){const e=Ki(...r.map(n=>n.left)),t=Ki(...r.map(n=>n.top)),i=xi(...r.map(n=>n.right)),s=xi(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function Ny(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>Fs(Hu(s)))}const Wy=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=Js(r,e),f=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),u=Ny(f),g=Fs(Hu(f)),S=ch(o);function $(){if(u.length===2&&u[0].left>u[1].right&&l!=null&&h!=null)return u.find(P=>l>P.left-S.left&&l<P.right+S.right&&h>P.top-S.top&&h<P.bottom+S.bottom)||g;if(u.length>=2){if(Gn(t)==="y"){const M=u[0],F=u[u.length-1],I=Pi(t)==="top",z=M.top,R=F.bottom,K=I?M.left:F.left,he=I?M.right:F.right,_=he-K,H=R-z;return{top:z,bottom:R,left:K,right:he,width:_,height:H,x:K,y:z}}const P=Pi(t)==="left",G=xi(...u.map(M=>M.right)),A=Ki(...u.map(M=>M.left)),D=u.filter(M=>P?M.left===A:M.right===G),X=D[0].top,W=D[D.length-1].bottom,ie=A,k=G,L=k-ie,T=W-X;return{top:X,bottom:W,left:ie,right:k,width:L,height:T,x:ie,y:X}}return g}const O=await n.getElementRects({reference:{getBoundingClientRect:$},floating:i.floating,strategy:a});return s.reference.x!==O.reference.x||s.reference.y!==O.reference.y||s.reference.width!==O.reference.width||s.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function Hy(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Pi(t),o=Bn(t),l=Gn(t)==="y",h=["left","top"].includes(a)?-1:1,f=n&&l?-1:1,u=Js(e,r);let{mainAxis:g,crossAxis:S,alignmentAxis:$}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return o&&typeof $=="number"&&(S=o==="end"?$*-1:$),l?{x:S*f,y:g*h}:{x:g*h,y:S*f}}const By=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await Hy(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},Gy=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:P=>{let{x:G,y:A}=P;return{x:G,y:A}}},...l}=Js(r,e),h={x:t,y:i},f=await Wu(e,l),u=Gn(Pi(s)),g=Nu(u);let S=h[g],$=h[u];if(n){const P=g==="y"?"top":"left",G=g==="y"?"bottom":"right",A=S+f[P],D=S-f[G];S=Ml(A,S,D)}if(a){const P=u==="y"?"top":"left",G=u==="y"?"bottom":"right",A=$+f[P],D=$-f[G];$=Ml(A,$,D)}const O=o.fn({...e,[g]:S,[u]:$});return{...O,data:{x:O.x-t,y:O.y-i}}}}};function fo(){return typeof window<"u"}function Qs(r){return Bu(r)?(r.nodeName||"").toLowerCase():"#document"}function xr(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function Ti(r){var e;return(e=(Bu(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function Bu(r){return fo()?r instanceof Node||r instanceof xr(r).Node:!1}function Hr(r){return fo()?r instanceof Element||r instanceof xr(r).Element:!1}function oi(r){return fo()?r instanceof HTMLElement||r instanceof xr(r).HTMLElement:!1}function pd(r){return!fo()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof xr(r).ShadowRoot}function Vn(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Br(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function Vy(r){return["table","td","th"].includes(Qs(r))}function go(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function dh(r){const e=uh(),t=Hr(r)?Br(r):r;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function Yy(r){let e=Zi(r);for(;oi(e)&&!js(e);){if(dh(e))return e;if(go(e))return null;e=Zi(e)}return null}function uh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function js(r){return["html","body","#document"].includes(Qs(r))}function Br(r){return xr(r).getComputedStyle(r)}function mo(r){return Hr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function Zi(r){if(Qs(r)==="html")return r;const e=r.assignedSlot||r.parentNode||pd(r)&&r.host||Ti(r);return pd(e)?e.host:e}function Gu(r){const e=Zi(r);return js(e)?r.ownerDocument?r.ownerDocument.body:r.body:oi(e)&&Vn(e)?e:Gu(e)}function Ul(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Gu(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=xr(s);if(n){const o=zl(a);return e.concat(a,a.visualViewport||[],Vn(s)?s:[],o&&t?Ul(o):[])}return e.concat(s,Ul(s,[],t))}function zl(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function Vu(r){const e=Br(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=oi(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=Ha(t)!==n||Ha(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function Yu(r){return Hr(r)?r:r.contextElement}function Ms(r){const e=Yu(r);if(!oi(e))return ai(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=Vu(e);let a=(n?Ha(t.width):t.width)/i,o=(n?Ha(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const qy=ai(0);function qu(r){const e=xr(r);return!uh()||!e.visualViewport?qy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xy(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==xr(r)?!1:e}function kn(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=Yu(r);let a=ai(1);e&&(i?Hr(i)&&(a=Ms(i)):a=Ms(r));const o=Xy(n,t,i)?qu(n):ai(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,f=s.width/a.x,u=s.height/a.y;if(n){const g=xr(n),S=i&&Hr(i)?xr(i):i;let $=g,O=zl($);for(;O&&i&&S!==$;){const P=Ms(O),G=O.getBoundingClientRect(),A=Br(O),D=G.left+(O.clientLeft+parseFloat(A.paddingLeft))*P.x,X=G.top+(O.clientTop+parseFloat(A.paddingTop))*P.y;l*=P.x,h*=P.y,f*=P.x,u*=P.y,l+=D,h+=X,$=xr(O),O=zl($)}}return Fs({width:f,height:u,x:l,y:h})}function ph(r,e){const t=mo(r).scrollLeft;return e?e.left+t:kn(Ti(r)).left+t}function Xu(r,e,t){t===void 0&&(t=!1);const i=r.getBoundingClientRect(),s=i.left+e.scrollLeft-(t?0:ph(r,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function Ky(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=Ti(i),o=e?go(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=ai(1);const f=ai(0),u=oi(i);if((u||!u&&!n)&&((Qs(i)!=="body"||Vn(a))&&(l=mo(i)),oi(i))){const S=kn(i);h=Ms(i),f.x=S.x+i.clientLeft,f.y=S.y+i.clientTop}const g=a&&!u&&!n?Xu(a,l,!0):ai(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+f.x+g.x,y:t.y*h.y-l.scrollTop*h.y+f.y+g.y}}function Zy(r){return Array.from(r.getClientRects())}function Jy(r){const e=Ti(r),t=mo(r),i=r.ownerDocument.body,s=xi(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=xi(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+ph(r);const o=-t.scrollTop;return Br(i).direction==="rtl"&&(a+=xi(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function Qy(r,e){const t=xr(r),i=Ti(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=uh();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function eb(r,e){const t=kn(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=oi(r)?Ms(r):ai(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function fd(r,e,t){let i;if(e==="viewport")i=Qy(r,t);else if(e==="document")i=Jy(Ti(r));else if(Hr(e))i=eb(e,t);else{const s=qu(r);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Fs(i)}function Ku(r,e){const t=Zi(r);return t===e||!Hr(t)||js(t)?!1:Br(t).position==="fixed"||Ku(t,e)}function tb(r,e){const t=e.get(r);if(t)return t;let i=Ul(r,[],!1).filter(o=>Hr(o)&&Qs(o)!=="body"),s=null;const n=Br(r).position==="fixed";let a=n?Zi(r):r;for(;Hr(a)&&!js(a);){const o=Br(a),l=dh(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Vn(a)&&!l&&Ku(r,a))?i=i.filter(f=>f!==a):s=o,a=Zi(a)}return e.set(r,i),i}function rb(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?go(e)?[]:tb(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,f)=>{const u=fd(e,f,s);return h.top=xi(u.top,h.top),h.right=Ki(u.right,h.right),h.bottom=Ki(u.bottom,h.bottom),h.left=xi(u.left,h.left),h},fd(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ib(r){const{width:e,height:t}=Vu(r);return{width:e,height:t}}function sb(r,e,t){const i=oi(e),s=Ti(e),n=t==="fixed",a=kn(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=ai(0);if(i||!i&&!n)if((Qs(e)!=="body"||Vn(s))&&(o=mo(e)),i){const g=kn(e,!0,n,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else s&&(l.x=ph(s));const h=s&&!i&&!n?Xu(s,o):ai(0),f=a.left+o.scrollLeft-l.x-h.x,u=a.top+o.scrollTop-l.y-h.y;return{x:f,y:u,width:a.width,height:a.height}}function Cl(r){return Br(r).position==="static"}function gd(r,e){if(!oi(r)||Br(r).position==="fixed")return null;if(e)return e(r);let t=r.offsetParent;return Ti(r)===t&&(t=t.ownerDocument.body),t}function Zu(r,e){const t=xr(r);if(go(r))return t;if(!oi(r)){let s=Zi(r);for(;s&&!js(s);){if(Hr(s)&&!Cl(s))return s;s=Zi(s)}return t}let i=gd(r,e);for(;i&&Vy(i)&&Cl(i);)i=gd(i,e);return i&&js(i)&&Cl(i)&&!dh(i)?t:i||Yy(r)||t}const nb=async function(r){const e=this.getOffsetParent||Zu,t=this.getDimensions,i=await t(r.floating);return{reference:sb(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ab(r){return Br(r).direction==="rtl"}const ob={convertOffsetParentRelativeRectToViewportRelativeRect:Ky,getDocumentElement:Ti,getClippingRect:rb,getOffsetParent:Zu,getElementRects:nb,getClientRects:Zy,getDimensions:ib,getScale:Ms,isElement:Hr,isRTL:ab},Ju=By,lb=Gy,hb=jy,cb=Fy,db=Wy,Qu=(r,e,t)=>{const i=new Map,s={platform:ob,...t},n={...s.platform,_c:i};return zy(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=no(class extends th{constructor(r){var e;if(super(r),r.type!==wi.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return qi}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=r=>r??C;var ub=Object.defineProperty,pb=Object.getOwnPropertyDescriptor,Yn=(r,e,t,i)=>{for(var s=i>1?void 0:i?pb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ub(e,t,s),s};let Oi=class extends ws{constructor(){super(...arguments),this.dropdownRef=pe(),this.invokerRef=pe(),this.optionsRef=pe(),this.open="close",this.interactive="on"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Qu(this.invokerRef.value,this.optionsRef.value,{middleware:[Ju(2),hb(),db(),lb()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return p`

            <div class="dropdown" ${ye(this.dropdownRef)}>

                <thermal-button 
                    class="${Xt(r)}" 
                    ${ye(this.invokerRef)} 
                    @click=${this.toggle.bind(this)} 
                    variant="${ee(this.variant)}" 
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
                <div class="dropdown-options" ${ye(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>

            <slot> name="tour"</slot>
        
        `}};Oi.shadowRootOptions={...dr.shadowRootOptions,mode:"open"};Oi.styles=ae`

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
    
    `;Yn([zr({slot:"option"})],Oi.prototype,"_options",2);Yn([d({type:String,reflect:!0})],Oi.prototype,"open",2);Yn([d({type:String,reflect:!0,attribute:!0}),v()],Oi.prototype,"interactive",2);Yn([v(),d({type:String,reflect:!0,attribute:!0})],Oi.prototype,"variant",2);Oi=Yn([V("thermal-dropdown")],Oi);var fb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,vo=(r,e,t,i)=>{for(var s=i>1?void 0:i?gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fb(e,t,s),s};let Ns=class extends dr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=pe(),this.contentRef=pe(),this.rulerContentRef=pe()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return p`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${ye(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${ye(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${ye(this.contentRef)}>

                    ${this.collapsed===!1?p`
                        <slot></slot>    
                    `:C}
                
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
            `:C}
        
        `}};Ns.styles=ae`

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

    `;vo([v()],Ns.prototype,"collapsed",2);vo([v()],Ns.prototype,"lastContentWidth",2);vo([v()],Ns.prototype,"drawerRef",2);Ns=vo([V("thermal-bar")],Ns);const Be=r=>({fromAttribute:i=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:i=>i===!0?"true":"false"});var mb=Object.defineProperty,vb=Object.getOwnPropertyDescriptor,Fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?vb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mb(e,t,s),s};let ur=class extends Xe{constructor(){super(...arguments),this.language=vt.language,this.fullscreen="off",this.showfullscreen=!1,this.dark=!1,this.appRef=pe(),this.headerRef=pe(),this.contentRef=pe()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),vt.on("languageChanged",()=>{this.language=vt.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const s=t.contentRect.height;t.contentRect.width;const n=s-175;this.contentRef.value.offsetHeight<n?console.log("priorita šířky"):console.log("priorita výšky")}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return p`

    <div class="container ${this.dark?"dark":"normal"}" ${ye(this.appRef)}>

        <header ${ye(this.headerRef)} class="app-header">
            
        ${this.barElements.length>=0?p`
            <div class="bar">

                <slot name="label">
                    ${this.label?p`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`:C}
                </slot>

                <slot name="bar"></slot>

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
                `:C}

                <thermal-dropdown>

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(r=>p`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{vt.changeLanguage(r),this.language=r}}
                            >${ld[r].flag} ${ld[r].name}</thermal-button>
                        </div>
                    `)}
                </thermal-dropdown>
                
            </div> 
        `:""}

        ${this.preElements.length>=0?p`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${ye(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?p`<div class="credits">

                    ${this.recorded?p`<div>
                            <div class="credits-field">${x(w.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:C}

                    ${this.author?p`<div>
                            <div class="credits-field">${x(w.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:C}

                    ${this.license?p`<div>
                            <div class="credits-field">${x(w.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:C}

                </div>`:C}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

    </div>
        
        `}};ur.styles=ae`

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
    
    `;Fr([v()],ur.prototype,"language",2);Fr([zr({slot:"bar",flatten:!0})],ur.prototype,"barElements",2);Fr([zr({slot:"pre",flatten:!0})],ur.prototype,"preElements",2);Fr([zr({slot:"content",flatten:!0})],ur.prototype,"contentElements",2);Fr([d({type:String,reflect:!0})],ur.prototype,"fullscreen",2);Fr([d({type:String,reflect:!0,attribute:!0,converter:Be(!1)})],ur.prototype,"showfullscreen",2);Fr([d({type:String,reflect:!0,attribute:!0})],ur.prototype,"dark",2);Fr([d()],ur.prototype,"author",2);Fr([d()],ur.prototype,"recorded",2);Fr([d()],ur.prototype,"license",2);Fr([d()],ur.prototype,"label",2);ur=Fr([V("thermal-app")],ur);var yb=Object.defineProperty,bb=Object.getOwnPropertyDescriptor,fh=(r,e,t,i)=>{for(var s=i>1?void 0:i?bb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yb(e,t,s),s};let Pn=class extends dr{render(){return p`

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
        
        `}};Pn.styles=ae`
    
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

    `;fh([d({type:String})],Pn.prototype,"label",2);fh([d({type:String})],Pn.prototype,"hint",2);Pn=fh([V("thermal-field")],Pn);var wb=Object.defineProperty,xb=Object.getOwnPropertyDescriptor,en=(r,e,t,i)=>{for(var s=i>1?void 0:i?xb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wb(e,t,s),s};let Ai=class extends Xe{render(){return C}};en([d({type:String,reflect:!0,attribute:!0})],Ai.prototype,"thermal",2);en([d({type:String,reflect:!0,attribute:!0})],Ai.prototype,"visible",2);en([d({type:String,reflect:!0,attribute:!0})],Ai.prototype,"author",2);en([d({type:String,reflect:!0,attribute:!0})],Ai.prototype,"note",2);en([d({type:String,reflect:!0,attribute:!0})],Ai.prototype,"label",2);Ai=en([V("time-entry")],Ai);const Sb=new oh;window.Thermal={managers:new Map};window.Thermal.managers.set("default",Sb);const yo=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new oh(void 0,e);return window.Thermal.managers.set(r,t),t}},$b=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ga extends th{constructor(e){if(super(e),this.it=C,e.type!==wi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===qi)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ga.directiveName="unsafeHTML",Ga.resultType=1;const Dt=no(Ga),Vh=class Vh{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?C:p`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${x(w.note).toLocaleLowerCase()}</button>
            <div slot="content">${Dt(t)}</div>
        </thermal-dialog>`}renderHeaderContent(e,t,i){return i===void 0||i.trim().length===0?p`<strong>${t}</strong>`:e===!0?p`<strong>${i}</strong><span>${t}</span>`:p`<strong>${i}</strong>`}renderInstance(e,t,i,s,n){return p`<div class="file">

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
                    ${e.timeline.isSequence?p`<div class="timeline">
                            <file-timeline hasInfo="false" hasSpeedButton="false" hasPlayButton="false"></file-timeline>
                        </div>`:C}
                    
                    <file-analysis-overview></file-analysis-overview>

                </file-mirror>

            </article>
        
        </div>`}};Vh.styles=ae`


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

    `;let On=Vh;const Yh=class Yh{constructor(e){this.element=e,this.instanceRenderer=new On(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?p`
                <div class="group-header">
                
                    ${e?p`<h2 class="group-title">${e}</h2>`:C}

                    ${t?p`<p class="group-info">${t}</p>`:C}

                </div>
            `:C}renderGroup(e,t,i,s){const n=this.trimmedString(e.label),a=this.trimmedString(e.info),o={"group-files":!0,[`group-files-${t}`]:!0};return p`

            <section class="${Xt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(n,a)}

                <div class=${Xt(o)}>

                    ${e.files.map(({instance:h,innerHtml:f,label:u,time:g})=>this.instanceRenderer.renderInstance(h,g,s,u,f))}

                </div>

            </section>

        `}};Yh.styles=ae`


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

    `;let Va=Yh,Cb=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ci)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?hu(e).getTime():this.grouping==="day"?Fa(e).getTime():this.grouping==="week"?$i(e).getTime():this.grouping==="month"?Na(e).getTime():this.grouping==="year"?nh(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?ru(e).getTime():this.grouping==="day"?eu(e).getTime():this.grouping==="week"?Wa(e).getTime():this.grouping==="month"?ja(e).getTime():this.grouping==="year"?tu(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:$e(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:$e(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+$e(e,"w")+" of "+$e(e,"yyyy"),info:[ht.humanDate($i(e).getTime()),ht.humanDate(Wa(e).getTime())].join(" - ")}:this.grouping==="month"?{label:$e(e,"MMMM yyyy"),info:[ht.humanDate(Na(e).getTime()),ht.humanDate(ja(e).getTime())].join(" - ")}:this.grouping==="year"?{label:$e(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?ht.human(e):this.grouping==="hour"||this.grouping==="day"?$e(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",ht.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var _b=Object.defineProperty,kb=Object.getOwnPropertyDescriptor,mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_b(e,t,s),s};let Bt=class extends Xe{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=yo(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new Cb(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof Ai))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return p`
            <slot name="entry"></slot>

            ${this.scopeSlug?p`<manager-mirror slug=${this.scopeSlug}>

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

                `:C}

        `}};Bt.styles=[On.styles,Va.styles,ae`

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
    
    `];mr([v(),zr({slot:"entry",flatten:!0})],Bt.prototype,"entries",2);mr([v()],Bt.prototype,"groups",2);mr([v()],Bt.prototype,"instances",2);mr([d()],Bt.prototype,"columns",2);mr([d()],Bt.prototype,"breakpoint",2);mr([d({type:Number,reflect:!0})],Bt.prototype,"width",2);mr([d({type:String,reflect:!0})],Bt.prototype,"grouping",2);mr([d()],Bt.prototype,"name",2);mr([d()],Bt.prototype,"slug",2);mr([v()],Bt.prototype,"scopeSlug",2);mr([d({type:Object})],Bt.prototype,"onInstanceEnter",2);mr([d({type:Object})],Bt.prototype,"onInstanceLeave",2);mr([d({type:Object})],Bt.prototype,"groupRenderer",2);Bt=mr([V("time-group")],Bt);var Pb=Object.defineProperty,Ob=Object.getOwnPropertyDescriptor,xs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ob(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pb(e,t,s),s};const gh={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let Ei=class extends Xe{constructor(){super(...arguments),this.tRef=pe(),this.vRef=pe(),this.vunitsRef=pe(),this.haRef=pe(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),ss(this),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){const t=this[e],i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?Dt(i):i;return p`
            <div class="field">

                <div class="column column__label">
                    <label for=${e}>
                        ${t}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${ye(r)} 
                            id=${e}
                            name=${e}
                            value=${ee(s)}
                            min=${ee(n)}
                            max=${ee(a)}
                            step=${ee(o)}
                            type="number"
                            @blur=${f=>{const u=f.target,g=u.value.trim();g===""||g===void 0||g===null?this[e]=void 0:this[e]=parseFloat(u.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?p`<label for=${e}>${l}</label>`:C}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),app:r.toFixed(2),t:e},s=x(w.apparenttemperatureverbose,i),n=t<0?x(w.youfeelcolder,i):x(w.youfeelwarmer,i),a=r.toFixed(2);return p`<div class="result">

            <p class="result_label">${x(w.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${n}</p>
        
        </div>`}render(){return p`
            <thermal-app label=${x(w.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${x(w.info)}>
                    <thermal-button slot="invoker">${x(w.info)}</thermal-button>
                    <div slot="content">
                        ${Dt(x(w.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?p`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:C}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,"t",x(w.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",x(w.windspeed),p`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${ye(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",x(w.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):C}
                </div>
                

            </thermal-app>
        `}};Ei.styles=ae`

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


    `;xs([d({type:String,reflect:!0,attribute:!0,converter:gh})],Ei.prototype,"t",2);xs([d({type:String,reflect:!0,attribute:!0,converter:gh})],Ei.prototype,"v",2);xs([d({type:String,reflect:!0,attribute:!0,converter:gh})],Ei.prototype,"ha",2);xs([v()],Ei.prototype,"ta",2);xs([d({type:String,reflect:!0,attribute:!0})],Ei.prototype,"vunits",2);xs([q({context:Ri}),d({reflect:!0,converter:ns})],Ei.prototype,"locale",2);Ei=xs([V("apparent-temperature-aat")],Ei);var Ab=Object.defineProperty,Eb=Object.getOwnPropertyDescriptor,Db=(r,e,t,i)=>{for(var s=i>1?void 0:i?Eb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ab(e,t,s),s};let Fl=class extends ws{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return p`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-button slot="invoker" ${ye(this.tourableElementRef)}>About</thermal-button>
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
                        <p>version ${Ed}</p>
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
        `}};Fl.styles=ae`

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
    
    `;Fl=Db([V("app-info-button")],Fl);const tn="pngExportWidthContext",bo="pngExportWidthSetterContext",rn="png-export-width-context",wo="png-export-width-setter-context";var Lb=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,qn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lb(e,t,s),s};let ms=class extends Xe{renderRow(r,e,t){return p`<thermal-field label="${r}">
                <div>${e}</div>
                ${t||C}
            </thermal-field>`}renderSlider(r,e,t,i,s,n,a,o){const l=p`<input 
                value=${e}
                min=${i}
                max=${s}
                step=${n}
                type="range"
                @input=${f=>{const u=Math.min(s,Math.max(0,parseFloat(f.target.value)));a(u)}}
            ></input>`,h=p`<div class="hint"><strong>${e} ${t}</strong> (${i} - ${s} ${t})${o?p`<br />${o}</div>`:C}`;return this.renderRow(r,l,h)}render(){return p`
        ${this.renderSlider(x(w.exportimagewidth),this.pngWidth,"px",300,1920,20,this.pngWidthSetter.bind(this))}

        ${this.renderSlider(x(w.exportimagefontsize),this.pngFs,"px",10,50,1,this.pngFsSetter.bind(this))}
        `}};ms.styles=ae`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }
        
        `;qn([v(),le({context:tn,subscribe:!0})],ms.prototype,"pngWidth",2);qn([le({context:bo,subscribe:!0})],ms.prototype,"pngWidthSetter",2);qn([le({context:rn,subscribe:!0})],ms.prototype,"pngFs",2);qn([le({context:wo,subscribe:!0})],ms.prototype,"pngFsSetter",2);ms=qn([V("png-export-panel")],ms);var Tb=Object.defineProperty,Mb=Object.getOwnPropertyDescriptor,Ib=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tb(e,t,s),s};let jl=class extends Xe{render(){return p`
        <thermal-field label="${x(w.filerendering)}" hint="${x(w.filerenderinghint)}">
            <manager-smooth-switch></manager-smooth-switch>
        </thermal-field>
        <thermal-field label="${x(w.graphlines)}" hint="${x(w.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `}};jl.styles=ae`
    
        :host {
            display: contents;
        }
    
    `;jl=Ib([V("registry-display-panel")],jl);const mh="manager-instance",Xn="manager-palette-context",vh="manager-smooth-context",xo="manager-graph-function-context",Kn="tool-context",Zn="tools-context";var Ub=Object.defineProperty,ep=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Ub(e,t,s),s};class So extends ws{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:ni.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=yo(this.slug,e);this.manager=i,this.tool=this.manager.tool.value,this.tools=this.manager.tool.tools}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&$b(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t}),this.manager.tool.addListener(this.UUIDManagerListeners,t=>{this.tool=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(ni).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:ni[e]}}render(){return p`<slot></slot>`}}ep([q({context:Kn})],So.prototype,"tool");ep([q({context:Zn})],So.prototype,"tools");var zb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,Mi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zb(e,t,s),s};let li=class extends So{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:ni.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Mi([q({context:mh})],li.prototype,"manager",2);Mi([d({type:String,reflect:!0,attribute:!0})],li.prototype,"slug",2);Mi([q({context:Xn}),d({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:ni[r]}),toAttribute:r=>r.key.toString()}})],li.prototype,"palette",2);Mi([q({context:vh}),d({type:String,reflect:!0,attribute:!0})],li.prototype,"smooth",2);Mi([q({context:xo}),d({type:String,reflect:!0,attribute:!0})],li.prototype,"graphSmooth",2);Mi([d({type:Boolean,reflect:!0})],li.prototype,"autoclear",2);Mi([q({context:Kn})],li.prototype,"tool",2);Mi([q({context:Zn})],li.prototype,"tools",2);li=Mi([V("manager-provider")],li);var jb=Object.defineProperty,Nb=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&jb(e,t,s),s};class sn extends ws{connectedCallback(){super.connectedCallback(),this.manager}}Nb([le({context:mh,subscribe:!0}),v()],sn.prototype,"manager");const yh="registry-instance",bh="registry-opacity",$o="registry-range-from",Co="registry-range-to",tp="registry-loading",wh="registry-min",xh="registry-max",rp="registry-highlight",Jn="registry-highlight-setter";var Wb=Object.defineProperty,ip=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Wb(e,t,s),s};class _o extends sn{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return p`<slot></slot>`}}ip([q({context:rp})],_o.prototype,"highlight");ip([q({context:Jn})],_o.prototype,"setHighlight");var Hb=Object.defineProperty,Bb=Object.getOwnPropertyDescriptor,ci=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hb(e,t,s),s};let Gr=class extends _o{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};ci([d({type:String,reflect:!0,attribute:!0})],Gr.prototype,"slug",2);ci([q({context:yh})],Gr.prototype,"registry",2);ci([q({context:bh}),d({type:Number,reflect:!0,attribute:!0})],Gr.prototype,"opacity",2);ci([q({context:wh}),v()],Gr.prototype,"min",2);ci([q({context:xh}),v()],Gr.prototype,"max",2);ci([q({context:$o}),d({type:Number,reflect:!0,attribute:!0})],Gr.prototype,"from",2);ci([q({context:Co}),d({type:Number,reflect:!0,attribute:!0})],Gr.prototype,"to",2);ci([q({context:tp}),d({type:String,reflect:!0,attribute:!0})],Gr.prototype,"loading",2);ci([d({type:Boolean,reflect:!0})],Gr.prototype,"autoclear",2);Gr=ci([V("registry-provider")],Gr);var Gb=Object.defineProperty,Vb=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Gb(e,t,s),s};class kr extends sn{connectedCallback(){super.connectedCallback(),this.registry}}Vb([le({context:yh,subscribe:!0})],kr.prototype,"registry");class sp extends kr{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug)}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return p`<slot></slot>`}}const Sh="group-instance";var Yb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,ko=(r,e,t,i)=>{for(var s=i>1?void 0:i?qb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yb(e,t,s),s};let An=class extends sp{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};ko([d({type:String,attribute:!0,reflect:!0})],An.prototype,"slug",2);ko([q({context:Sh})],An.prototype,"group",2);ko([d({type:Boolean,reflect:!0})],An.prototype,"autoclear",2);An=ko([V("group-provider")],An);var Xb=Object.defineProperty,Kb=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Xb(e,t,s),s};class di extends kr{constructor(){super()}connectedCallback(){super.connectedCallback()}}Kb([le({context:Sh,subscribe:!0})],di.prototype,"group");const $h="file",np="failure",ap="file-loading",Zb="file-loaded",Po="file-provider-element",Oo="file-ms-context",Ch="file-cursor",op="file-cursor-setter",Qn="playback",_h="duration",Ao="playing",kh="playbackSpeed",Ph="recording",lp="mayStop",Jb="analysislist",Oh="file-markers-context";var Qb=Object.defineProperty,ir=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Qb(e,t,s),s};class Ft extends di{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.speed=1,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new se,this.onSuccess=new se,this.onFailure=new se,this.onInstanceCreated=new se}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!==void 0&&i.trim().length>0){const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return p`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}ir([q({context:$h}),v()],Ft.prototype,"file");ir([q({context:np}),v()],Ft.prototype,"failure");ir([q({context:ap}),v()],Ft.prototype,"loading");ir([q({context:Zb})],Ft.prototype,"ready");ir([q({context:_h}),v()],Ft.prototype,"duration");ir([q({context:Qn})],Ft.prototype,"currentFrame");ir([q({context:Ch})],Ft.prototype,"cursor");ir([q({context:Oo})],Ft.prototype,"ms");ir([q({context:kh})],Ft.prototype,"speed");ir([q({context:Ph})],Ft.prototype,"recording");ir([q({context:Ao})],Ft.prototype,"playing");ir([q({context:lp}),v()],Ft.prototype,"mayStop");ir([zr({slot:"mark",flatten:!0})],Ft.prototype,"marksQueriedInternally");ir([q({context:Oh})],Ft.prototype,"marksProvidedBelow");ir([q({context:Jb})],Ft.prototype,"analysis");var e0=Object.defineProperty,t0=Object.getOwnPropertyDescriptor,Jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?t0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&e0(e,t,s),s};let Gt=class extends Ft{constructor(){super(...arguments),this.ms=0,this.speed=1,this.providedSelf=this,this.recording=!1,this.playing=!1}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof _i?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof Hn?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof Ci&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};Jt([d({type:Number,reflect:!0,attribute:!0}),q({context:Oo})],Gt.prototype,"ms",2);Jt([d({type:Number,reflect:!0,attribute:!0}),q({context:kh})],Gt.prototype,"speed",2);Jt([q({context:Po})],Gt.prototype,"providedSelf",2);Jt([d({type:String,reflect:!0,attribute:!0}),q({context:Ph})],Gt.prototype,"recording",2);Jt([d({type:String,reflect:!0,attribute:!0}),q({context:Ao})],Gt.prototype,"playing",2);Jt([d({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Gt.prototype,"batch",2);Jt([d({type:String,attribute:!0,reflect:!0})],Gt.prototype,"thermal",2);Jt([d({type:String,attribute:!0,reflect:!0})],Gt.prototype,"visible",2);Jt([d({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis1",2);Jt([d({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis2",2);Jt([d({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis3",2);Jt([d({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis4",2);Jt([d({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis5",2);Jt([d({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis6",2);Jt([d({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis7",2);Gt=Jt([V("file-provider")],Gt);var r0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,nn=(r,e,t,i)=>{for(var s=i>1?void 0:i?i0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&r0(e,t,s),s};let Ji=class extends Ft{constructor(){super(...arguments),this.providedSelf=this,this.container=pe(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof _i){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Ci&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return p`

                    <div class="container">
                        <div ${ye(this.container)} class="${Xt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${Eu.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return p`
            ${this.ready?p`<slot></slot>`:C}
            <slot name="mark"></slot>
        `}};Ji.styles=ae`

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
    
    `;nn([q({context:Po})],Ji.prototype,"providedSelf",2);nn([v()],Ji.prototype,"container",2);nn([v()],Ji.prototype,"ready",2);nn([v()],Ji.prototype,"hover",2);nn([v()],Ji.prototype,"listener",2);Ji=nn([V("file-dropin")],Ji);const md="[a-fA-F\\d:]",Gi=r=>r&&r.includeBoundaries?`(?:(?<=\\s|^)(?=${md})|(?<=${md})(?=\\s|$))`:"",Wr="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",Pt="[a-fA-F\\d]{1,4}",Eo=`
(?:
(?:${Pt}:){7}(?:${Pt}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${Pt}:){6}(?:${Wr}|:${Pt}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${Pt}:){5}(?::${Wr}|(?::${Pt}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${Pt}:){4}(?:(?::${Pt}){0,1}:${Wr}|(?::${Pt}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${Pt}:){3}(?:(?::${Pt}){0,2}:${Wr}|(?::${Pt}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${Pt}:){2}(?:(?::${Pt}){0,3}:${Wr}|(?::${Pt}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${Pt}:){1}(?:(?::${Pt}){0,4}:${Wr}|(?::${Pt}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${Pt}){0,5}:${Wr}|(?::${Pt}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s0=new RegExp(`(?:^${Wr}$)|(?:^${Eo}$)`),n0=new RegExp(`^${Wr}$`),a0=new RegExp(`^${Eo}$`),Ah=r=>r&&r.exact?s0:new RegExp(`(?:${Gi(r)}${Wr}${Gi(r)})|(?:${Gi(r)}${Eo}${Gi(r)})`,"g");Ah.v4=r=>r&&r.exact?n0:new RegExp(`${Gi(r)}${Wr}${Gi(r)}`,"g");Ah.v6=r=>r&&r.exact?a0:new RegExp(`${Gi(r)}${Eo}${Gi(r)}`,"g");function o0(r){const e=(...t)=>r(...t);return Object.defineProperty(e,"name",{value:`functionTimeout(${r.name||"<anonymous>"})`,configurable:!0}),e}const{toString:l0}=Object.prototype;function h0(r){return l0.call(r)==="[object RegExp]"}const vd={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function c0(r,e={}){if(!h0(r))throw new TypeError("Expected a RegExp instance");const t=Object.keys(vd).map(s=>(typeof e[s]=="boolean"?e[s]:r[s])?vd[s]:"").join(""),i=new RegExp(e.source||r.source,t);return i.lastIndex=typeof e.lastIndex=="number"?e.lastIndex:r.lastIndex,i}function d0(r,e,{timeout:t}={}){try{return o0(()=>c0(r).test(e),{timeout:t})()}catch(i){throw i}}const u0=15,p0={timeout:400};function f0(r){return r.length>u0?!1:d0(Ah.v4({exact:!0}),r,p0)}class g0 extends Error{constructor(e){super("Could not get the public IP address",e),this.name="IpNotFoundError"}}class hp extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}const m0={timeout:5e3},v0={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},y0=(r,e,t)=>{const i=new XMLHttpRequest;let s;const n=new Promise((a,o)=>{s=o,i.addEventListener("error",o,{once:!0}),i.addEventListener("timeout",o,{once:!0}),i.addEventListener("load",()=>{const l=i.responseText.trim();if(!l||!f0(l)){o();return}a(l)},{once:!0}),i.open("GET",r),i.timeout=e.timeout,i.send()});return n.cancel=()=>{i.abort(),s(new hp)},n},b0=(r,e)=>{let t;const i=async function(){const s=[...v0[r],...e.fallbackUrls??[]];let n;for(const a of s)try{return t=y0(a,e,r),await t}catch(o){if(n=o,o instanceof hp)throw o}throw new g0({cause:n})}();return i.cancel=()=>{t.cancel()},i};function cp(r){return b0("v4",{...m0,...r})}var w0=Object.defineProperty,x0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&w0(e,t,s),s};class Eh extends di{connectedCallback(){super.connectedCallback(),cp().then(e=>this.ip=e)}emitUpload(e,t){const i=window.navigator.userAgent,s=window.innerWidth,n=window.innerHeight,a=new Date().getTime(),o=new CustomEvent("uploaded",{bubbles:!0,cancelable:!1,detail:{ip:this.ip,userAgent:i,windowWidth:s,windowHeight:n,time:a,fileName:e,fileSize:t}});this.dispatchEvent(o)}}x0([v()],Eh.prototype,"ip");var S0=Object.defineProperty,$0=Object.getOwnPropertyDescriptor,Do=(r,e,t,i)=>{for(var s=i>1?void 0:i?$0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&S0(e,t,s),s};let Ws=class extends Eh{constructor(){super(...arguments),this.container=pe(),this.hover=!1,this.uploading=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(e){if(super.firstUpdated(e),this.container.value!==void 0){const t=this.manager.service.handleDropzone(this.container.value,!1);t.onMouseEnter.add(this.UUID,()=>{console.log("mouseenter"),this.hover=!0}),t.onMouseLeave.add(this.UUID,()=>{console.log("mouseleave"),this.hover=!1}),t.onDrop.set(this.UUID,()=>{this.uploading=!0}),t.onProcessingEnd.add(this.UUID,async i=>{await Promise.all(i.map(async s=>{if(s instanceof _i){const n=await s.createInstance(this.group);this.emitUpload(n.fileName,n.bytesize)}})),this.uploading=!1})}}render(){const e={dropin:!0,hover:this.hover,uploading:this.uploading};return p`

            <div class="container" ${ye(this.tourableElementRef)}>
            
                <div ${ye(this.container)} class="${Xt(e)}">

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
        
        `}};Ws.styles=ae`

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

    `;Do([v()],Ws.prototype,"container",2);Do([v()],Ws.prototype,"hover",2);Do([v()],Ws.prototype,"uploading",2);Ws=Do([V("group-dropin")],Ws);var C0=Object.defineProperty,_0=Object.getOwnPropertyDescriptor,Lo=(r,e,t,i)=>{for(var s=i>1?void 0:i?_0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&C0(e,t,s),s};let Hs=class extends Eh{constructor(){super(...arguments),this.container=pe(),this.hover=!1,this.uploading=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.listener=this.manager.service.handleDropzone(this.container.value,!1),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1}),this.listener.onDrop.set(this.UUID,()=>{this.uploading=!0}),this.listener.onProcessingEnd.add(this.UUID,async e=>{this.group.files.removeAllInstances(),await Promise.all(e.map(async t=>{if(t instanceof _i){const i=await t.createInstance(this.group);this.emitUpload(i.fileName,i.bytesize)}})),this.uploading=!1}))}render(){const r=this.uploading===!1?x(w.uploadafile):p`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`;return p`


            <thermal-button @click="${()=>{this.listener&&this.listener.openFileDialog(!1)}}"><slot>${r}</slot></thermal-button>

            <div class="container" ${ye(this.tourableElementRef)}>
            
                <div ${ye(this.container)}></div>

            </div>

            <slot name="tour"></slot>
        
        `}};Hs.styles=ae`

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


    
    `;Lo([v()],Hs.prototype,"container",2);Lo([v()],Hs.prototype,"hover",2);Lo([v()],Hs.prototype,"uploading",2);Hs=Lo([V("group-dropin-input")],Hs);var k0=Object.defineProperty,P0=Object.getOwnPropertyDescriptor,Ii=(r,e,t,i)=>{for(var s=i>1?void 0:i?P0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&k0(e,t,s),s};let hi=class extends So{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:ni.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Ii([q({context:mh})],hi.prototype,"manager",2);Ii([d({type:String})],hi.prototype,"slug",2);Ii([q({context:Xn}),d({type:String,converter:{fromAttribute:r=>({key:r,data:ni[r]}),toAttribute:r=>r.key.toString()}})],hi.prototype,"palette",2);Ii([q({context:vh}),d({type:String})],hi.prototype,"smooth",2);Ii([q({context:xo}),d({type:String})],hi.prototype,"graphSmooth",2);Ii([d({type:Boolean})],hi.prototype,"autoclear",2);Ii([q({context:Kn})],hi.prototype,"tool",2);Ii([q({context:Zn})],hi.prototype,"tools",2);hi=Ii([V("manager-mirror")],hi);var O0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,ui=(r,e,t,i)=>{for(var s=i>1?void 0:i?A0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&O0(e,t,s),s};let Vr=class extends _o{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};ui([d({type:String,reflect:!0,attribute:!0})],Vr.prototype,"slug",2);ui([q({context:yh})],Vr.prototype,"registry",2);ui([q({context:bh}),d({type:Number,reflect:!0,attribute:!0})],Vr.prototype,"opacity",2);ui([q({context:wh}),v()],Vr.prototype,"min",2);ui([q({context:xh}),v()],Vr.prototype,"max",2);ui([q({context:$o}),d({type:Number})],Vr.prototype,"from",2);ui([q({context:Co}),d({type:Number})],Vr.prototype,"to",2);ui([q({context:tp}),d({type:String})],Vr.prototype,"loading",2);ui([d({type:Boolean})],Vr.prototype,"autoclear",2);Vr=ui([V("registry-mirror")],Vr);var E0=Object.defineProperty,D0=Object.getOwnPropertyDescriptor,Ro=(r,e,t,i)=>{for(var s=i>1?void 0:i?D0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&E0(e,t,s),s};let En=class extends sp{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Ro([d({type:String})],En.prototype,"slug",2);Ro([q({context:Sh})],En.prototype,"group",2);Ro([d({type:Boolean})],En.prototype,"autoclear",2);En=Ro([V("group-mirror")],En);var L0=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,Pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?R0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&L0(e,t,s),s};let pr=class extends Ft{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};Pr([q({context:Po})],pr.prototype,"providedSelf",2);Pr([q({context:$h}),d()],pr.prototype,"file",2);Pr([d({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],pr.prototype,"batch",2);Pr([d({type:String})],pr.prototype,"thermal",2);Pr([d({type:String})],pr.prototype,"visible",2);Pr([d({type:String})],pr.prototype,"analysis1",2);Pr([d({type:String})],pr.prototype,"analysis2",2);Pr([d({type:String})],pr.prototype,"analysis3",2);Pr([d({type:String})],pr.prototype,"analysis4",2);Pr([d({type:String})],pr.prototype,"analysis5",2);Pr([d({type:String})],pr.prototype,"analysis6",2);Pr([d({type:String})],pr.prototype,"analysis7",2);pr=Pr([V("file-mirror")],pr);var T0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,dp=(r,e,t,i)=>{for(var s=i>1?void 0:i?M0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&T0(e,t,s),s};let Ya=class extends kr{constructor(){super(...arguments),this.tourableElemtnRef=pe()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return p`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return p`

            <thermal-dropdown variant="foreground" ${ye(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(ni).map(([r,e])=>p`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};Ya.styles=ae`

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

    `;dp([le({context:Xn,subscribe:!0})],Ya.prototype,"value",2);Ya=dp([V("registry-palette-dropdown")],Ya);var I0=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,up=(r,e,t,i)=>{for(var s=i>1?void 0:i?U0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&I0(e,t,s),s};let qa=class extends kr{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return p`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${x(w.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return p`
            <div class="container" ${ye(this.tourableElementRef)}>
                ${Object.entries(ni).map(([r,e])=>p`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};qa.styles=ae`

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

    `;up([le({context:Xn,subscribe:!0}),v()],qa.prototype,"value",2);qa=up([V("registry-palette-buttons")],qa);var z0=Object.defineProperty,F0=Object.getOwnPropertyDescriptor,pp=(r,e,t,i)=>{for(var s=i>1?void 0:i?F0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&z0(e,t,s),s};let Xa=class extends sn{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return p`

            <div ${ye(this.tourableElementRef)}>

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
        `}};Xa.styles=ae`
    
        :host {}

    `;pp([le({context:vh,subscribe:!0})],Xa.prototype,"smooth",2);Xa=pp([V("manager-smooth-switch")],Xa);var j0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,fp=(r,e,t,i)=>{for(var s=i>1?void 0:i?N0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&j0(e,t,s),s};let Ka=class extends sn{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return p`

            <div ${ye(this.tourableElementRef)}>

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
        `}};Ka.styles=ae`
    
        :host {}

    `;fp([le({context:xo,subscribe:!0})],Ka.prototype,"smooth",2);Ka=fp([V("manager-graph-smooth-switch")],Ka);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Nl extends Ga{}Nl.directiveName="unsafeSVG",Nl.resultType=2;const gp=no(Nl);var W0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,an=(r,e,t,i)=>{for(var s=i>1?void 0:i?H0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&W0(e,t,s),s};let Qi=class extends sn{constructor(){super(...arguments),this.tourableElementRef=pe(),this.showhint=!0,this.showpopup=!1}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.manager.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.manager.tool.selectTool(e)}render(){return this.manager===void 0?C:p`
                <div class="switchers" ${ye(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:this.value!==void 0?t.key===this.value.key:!1};return p`
                        
                        <button 
                            class=${Xt(i)} 
                            @click=${()=>{this.manager.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${gp(t.icon)}

                            ${this.showpopup===!0?p`<div>${x(w[t.name])}</div>`:C}

                        </button>
                        
                    `})}
                </div>

                ${this.showhint===!0?p` <div class="current">
                        <div class="tool-description">${x(w[this.hint])}</div>
                    </div>`:C}

                <slot name="tour"></slot>
        `}};Qi.styles=ae`

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

    `;an([le({context:Kn,subscribe:!0}),v()],Qi.prototype,"value",2);an([le({context:Zn,subscribe:!0}),v()],Qi.prototype,"tools",2);an([v()],Qi.prototype,"hint",2);an([d({type:String,reflect:!0,converter:Be(!1)})],Qi.prototype,"showhint",2);an([d({reflect:!0,converter:Be(!1)})],Qi.prototype,"showpopup",2);Qi=an([V("group-tool-buttons")],Qi);var B0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,Dh=(r,e,t,i)=>{for(var s=i>1?void 0:i?G0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&B0(e,t,s),s};let Dn=class extends di{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?C:p`

            <aside ${ye(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return p`
                        <div class="item">
                            <button 
                                class=${Xt(t)} 
                                @click=${()=>{this.group.tool.selectTool(e)}}
                            >
                                ${gp(e.icon)}
                            </button>
                            <div class="tooltip">${x(w[e.name])}</div>
                        </div>
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};Dn.styles=ae`

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

    `;Dh([le({context:Kn,subscribe:!0}),v()],Dn.prototype,"value",2);Dh([le({context:Zn,subscribe:!0}),v()],Dn.prototype,"tools",2);Dn=Dh([V("group-tool-bar")],Dn);var V0=Object.defineProperty,Y0=Object.getOwnPropertyDescriptor,mp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Y0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&V0(e,t,s),s};let Za=class extends kr{constructor(){super(...arguments),this.containerRef=pe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return p`
            <div ${ye(this.containerRef)}>
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
        `}};Za.styles=ae`

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
    
    `;mp([le({context:bh,subscribe:!0})],Za.prototype,"value",2);Za=mp([V("registry-opacity-slider")],Za);var q0=Object.defineProperty,X0=Object.getOwnPropertyDescriptor,K0=(r,e,t,i)=>{for(var s=i>1?void 0:i?X0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&q0(e,t,s),s};let yd=class extends kr{constructor(){super(...arguments),this.buttonRef=pe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return p`
            <thermal-button ${ye(this.buttonRef)} @click=${this.doAction}>${x(w.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};yd=K0([V("registry-range-auto-button")],yd);var Z0=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,vp=(r,e,t,i)=>{for(var s=i>1?void 0:i?J0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Z0(e,t,s),s};let Wl=class extends kr{constructor(){super(...arguments),this.buttonRef=pe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return p`
            <thermal-button 
                ${ye(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${x(w.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};vp([le({context:Jn,subscribe:!0})],Wl.prototype,"setter",2);Wl=vp([V("registry-range-full-button")],Wl);var Q0=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,ea=(r,e,t,i)=>{for(var s=i>1?void 0:i?e1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Q0(e,t,s),s};let Yr=class extends kr{constructor(){super(...arguments),this.ticksRef=pe(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=pe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.ticksRef.value&&this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Yr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return p`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${ye(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${ye(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?p`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:C}

                    ${this.ticks.map(t=>p`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(Yr.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};Yr.TICK_WIDTH=40;Yr.TICK_FIXED=2;Yr.styles=ae`

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


    `;ea([le({context:rp,subscribe:!0})],Yr.prototype,"highlight",2);ea([d({type:String,reflect:!0})],Yr.prototype,"placement",2);ea([v()],Yr.prototype,"minmax",2);ea([v()],Yr.prototype,"ticks",2);Yr=ea([V("registry-ticks-bar")],Yr);var t1=Object.defineProperty,r1=Object.getOwnPropertyDescriptor,ta=(r,e,t,i)=>{for(var s=i>1?void 0:i?r1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&t1(e,t,s),s};let Bs=class extends kr{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return p`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return p`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};ta([v()],Bs.prototype,"minmax",2);ta([v()],Bs.prototype,"range",2);ta([v()],Bs.prototype,"opacity",2);ta([v()],Bs.prototype,"palette",2);Bs=ta([V("registry-log")],Bs);(()=>{var r=Object.defineProperty,e=Math.pow,t=(m,b,U)=>b in m?r(m,b,{enumerable:!0,configurable:!0,writable:!0,value:U}):m[b]=U,i=(m,b,U)=>(t(m,typeof b!="symbol"?b+"":b,U),U),s=(m,b)=>` ${b&&b.length>0?b.map(U=>`<link rel="stylesheet" href="${U}" />`).join(""):""} <style> ${m} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",f="data",u="min",g="max",S="step",$="round",O="type",P="theme",G="rtl",A="btt",D="disabled",X="keyboard-disabled",W="mousewheel-disabled",ie="slider-width",k="slider-height",L="slider-radius",T="slider-bg",M="slider-bg-hover",F="slider-bg-fill",I="pointer-width",z="pointer-height",R="pointer-radius",K="pointer-bg",he="pointer-bg-hover",_="pointer-bg-focus",H="pointer-shadow",fe="pointer-shadow-hover",ne="pointer-shadow-focus",Ee="pointer-border",Ve="pointer-border-hover",nt="pointer-border-focus",ct="animate-onclick",ce="css-links",ge="vertical",Ae="horizontal",Ue=(m,b,U,E,oe)=>{let Se=b-m;return Se===0?U:(E-U)*(oe-m)/Se+U},at=m=>!isNaN(parseFloat(m))&&isFinite(m),je=(m,b)=>at(m)?Number(m):b,Ni=(m,b)=>b===0?0:Math.round(m/b)*b,as=(m,b=1/0)=>{if(b===1/0)return m;let U=e(10,b);return Math.round(m*U)/U},ot=m=>m==null?!1:typeof m=="boolean"?m:m.trim().toLowerCase()==="true",br=(m,b)=>{m.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:b}}))},yi=(m,b)=>{m.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:b}}))},Wo=(m,b)=>{m.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:b}}))},Ho=(m,b)=>{m.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:b}}))},Bo=(m,b)=>{if(!b||b.length<=0)return;let U=b.map(oe=>at(oe)?je(oe,oe):oe),E={values:U||[]};E.value=U[0],E.value0=U[0],E.value1=U[0];for(let oe=1;oe<U.length;oe++)E[`value${oe+1}`]=U[oe];m.dispatchEvent(new CustomEvent("change",{detail:E}))},Y=(m,b,U)=>{let E=0,oe,Se,Te,de,ue=!1,ze=(ke,pt,Mt,Et,xt,St)=>{let ar=E;Mt!==void 0&&ke>Mt&&(ke=Mt),pt!==void 0&&ke<pt&&(ke=pt),E=ke;let or=E;return(Et===ge&&St||Et===Ae&&xt)&&(or=100-or),Et===ge?b.style.top=`${or}%`:b.style.left=`${or}%`,ar!==E},Ne=ke=>ke===b||b.contains(ke),be=(ke,pt,Mt,Et)=>{oe=ke,Se=pt,Te=Mt,de=Et},tt=ke=>{ue=ke,b.classList.toggle("disabled",ue),ue?b.setAttribute("aria-disabled","true"):b.hasAttribute("aria-disabled")&&b.removeAttribute("aria-disabled")},Lr=(ke,pt)=>{pt==null?b.removeAttribute(ke):b.setAttribute(ke,pt)},qt=ke=>b.getAttribute(ke),_e=ke=>{if(!ue){switch(ke.key){case"ArrowLeft":{ke.preventDefault(),typeof oe=="function"&&oe(U);break}case"ArrowRight":{ke.preventDefault(),typeof Se=="function"&&Se(U);break}case"ArrowUp":{ke.preventDefault(),typeof Te=="function"&&Te(U);break}case"ArrowDown":{ke.preventDefault(),typeof de=="function"&&de(U);break}}Ho(m,ke)}},Fe=()=>{ue||br(m,b)};return b.className=`pointer pointer-${U}`,b.addEventListener("keydown",_e),b.addEventListener("click",Fe),{$pointer:b,get percent(){return E},get disabled(){return ue},set disabled(ke){tt(ke)},updatePosition:ze,isClicked:Ne,setCallbacks:be,setAttr:Lr,getAttr:qt,destroy:()=>{b.removeEventListener("keydown",_e),b.removeEventListener("click",Fe),b.remove()}}},te=m=>{if(m==null)return;if(Array.isArray(m))return m;if(m.trim()==="")return;let b=m.split(","),U=[],E=!0;for(let oe=0;oe<b.length;oe++){let Se=b[oe].trim();Se!==""&&(U.push(Se),at(Se)||(E=!1))}return E?U.map(oe=>Number(oe)):U},Q=(m,b)=>b?b.findIndex(U=>U===m||U.toString().trim()===m.toString().trim()):-1,Le=m=>({updatePosition:(b,U,E,oe)=>{if(U.length<=0)return;let Se=U.length===1,Te=U[0],de=U[U.length-1];b===ge?(m.style.removeProperty("width"),m.style.removeProperty("right"),m.style.removeProperty("left"),Se?m.style.height=`${Te}%`:m.style.height=`${Math.abs(Te-de)}%`,oe?(m.style.bottom="0%",Se?m.style.top="auto":m.style.top=`${Math.min(100-de,100-Te)}%`):(m.style.bottom="auto",Se?m.style.top="0%":m.style.top=`${Math.min(Te,de)}%`)):(m.style.removeProperty("height"),m.style.removeProperty("top"),m.style.removeProperty("bottom"),Se?m.style.width=`${Te}%`:m.style.width=`${Math.abs(Te-de)}%`,E?(m.style.right="0%",Se?m.style.left="auto":m.style.left=`${Math.min(100-de,100-Te)}%`):(m.style.right="auto",Se?m.style.left="0%":m.style.left=`${Math.min(Te,de)}%`))}}),we="--animate-onclick",Je="--width",N="--height",dt="--panel-bg-border-radius",Ye="--panel-bg",kt="--panel-bg-hover",Tt="--panel-bg-fill",re="--pointer-width",J="--pointer-height",B="--pointer-border-radius",me="--pointer-bg",Pe="--pointer-bg-hover",Ge="--pointer-bg-focus",Nt="--pointer-shadow",Vt="--pointer-shadow-hover",sr="--pointer-shadow-focus",nr="--pointer-border",ti="--pointer-border-hover",xe="--pointer-border-focus",De=(m,b,U)=>{let E=new Map;for(let oe of m.attributes){let Se=oe.nodeName.trim().toLowerCase();if(!b.test(Se))continue;let Te=Se.replace(/\D/g,"").trim(),de=Te===""||Te==="0"||Te==="1"?0:je(Te,0)-1,ue=U&&typeof U=="function"?U(oe.value):oe.value;E.set(de,ue)}return E},Z=m=>{if(!m)return null;let b=m.getAttribute(ce);if(!b)return null;let U=b.split(";"),E=[];for(let oe of U)oe.trim()!==""&&E.push(oe.trim());return E},Ce=[[Je,ie,"sliderWidth",null],[N,k,"sliderHeight",null],[dt,L,"sliderRadius",null],[Ye,T,"sliderBg",null],[kt,M,"sliderBgHover",null],[Tt,F,"sliderBgFill",null],[re,I,"pointer#Width",/^pointer([0-9]*)-width$/],[J,z,"pointer#Height",/^pointer([0-9]*)-height$/],[B,R,"pointer#Radius",/^pointer([0-9]*)-radius$/],[me,K,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Pe,he,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ge,_,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Nt,H,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Vt,fe,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[sr,ne,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[nr,Ee,"pointer#Border",/^pointer([0-9]*)-border$/],[ti,Ve,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[xe,nt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Re=(m,b,U)=>{let E=null,oe=[],Se=new Map,Te=(_e,Fe=b)=>{let ke=[...Fe.classList];for(let pt of ke)pt.startsWith(_e)&&b.classList.remove(pt)},de=()=>{Te("shape");let _e=b.querySelectorAll(".pointer");for(let Fe of _e)Te("shape",Fe)},ue=_e=>{E=_e,Te("theme-"),typeof _e=="string"&&b.classList.add(`theme-${_e}`)},ze=()=>{if(de(),!(oe.length<=0)){b.classList.add("shape",`shape-${oe[0]}`);for(let _e=1;_e<oe.length;_e++){let Fe=oe[_e];if(!Fe)continue;let ke=b.querySelector(`.pointer-${_e}`);!ke||ke.classList.add("shape",`shape-${Fe}`)}}},Ne=(_e,Fe)=>{oe[_e]=Fe,ze()},be=()=>{de();let _e=De(m,/^pointer([0-9]*)-shape$/);if(!(_e.size<=0)){for(let Fe of _e){let ke=Fe[0];oe[ke]=Fe[1]}ze()}},tt=(_e,Fe)=>`${_e}-${Fe}`,Lr=(_e,Fe,ke)=>{let pt=U[ke];if(!pt)return;let Mt=ke===0?b:pt.$pointer;if(Fe==null){Se.has(tt(_e,ke))&&Se.delete(tt(_e,ke)),Mt.style.removeProperty(_e);return}Se.set(tt(_e,ke),Fe),Mt.style.setProperty(_e,Fe)},qt=(_e,Fe)=>Se.get(tt(_e,Fe));return(()=>{for(let _e of Ce){let[Fe,ke,pt,Mt]=_e;if(Mt){let xt=De(m,Mt);for(let St of xt){let ar=St[0],or=St[1];Lr(Fe,or,ar)}}else{let xt=m.getAttribute(ke);Lr(Fe,xt,0)}let Et=[];if(pt.indexOf("#")===-1)Et.push([pt,0]);else{Et.push([pt.replace("#",""),0]),Et.push([pt.replace("#","0"),0]),Et.push([pt.replace("#","1"),0]);for(let xt=1;xt<U.length;xt++)Et.push([pt.replace("#",(xt+1).toString()),xt])}for(let xt of Et)try{let St=xt[0],ar=xt[1];Object.prototype.hasOwnProperty.call(m,St)||Object.defineProperty(m,St,{get(){return qt(Fe,ar)},set:or=>{Lr(Fe,or,ar)}})}catch(St){console.error(St)}}ue(m.getAttribute(P)),be()})(),{setStyle:Lr,getStyle:qt,get theme(){return E},set theme(_e){ue(_e)},get pointerShapes(){return oe},setPointerShape:Ne}},Me="animate-on-click",et="range-dragging",Ie=(m,b,U,E)=>{let oe=[],Se=Ne=>{for(let be of oe)be.update&&typeof be.update=="function"&&be.update(Ne)},Te=()=>{for(let Ne of oe)Ne.destroy&&typeof Ne.destroy=="function"&&Ne.destroy()},de=(Ne,be)=>{for(let tt of oe)tt.onAttrChange&&typeof tt.onAttrChange=="function"&&tt.onAttrChange(Ne,be)},ue=Ne=>{if(Ne.gettersAndSetters){for(let be of Ne.gettersAndSetters)if(!(!be.name||!be.attributes))try{Object.prototype.hasOwnProperty.call(m,be.name)||Object.defineProperty(m,be.name,be.attributes)}catch(tt){console.error("defineSettersGetters error:",tt)}}},ze=Ne=>{var be;if(!Ne.css)return;let tt=(be=m.shadowRoot)==null?void 0:be.querySelector("style");!tt||(tt.innerHTML+=Ne.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Ne of window.tcRangeSliderPlugins){let be=Ne();oe.push(be),be.init&&typeof be.init=="function"&&(be.init(m,b,U,E),ue(be),ze(be))}},update:Se,onAttrChange:de,destroy:Te}},Wt=10,bt=20,Yt=(m,b)=>{let U=new Map,E=/^value([0-9]*)$/;for(let de of m.attributes){let ue=de.nodeName.trim().toLowerCase();if(!E.test(ue))continue;let ze=ue.replace("value","").trim(),Ne=ze===""||ze==="0"||ze==="1"?0:je(ze,0)-1,be=at(de.value)?je(de.value,0):de.value;U.set(Ne,be)}let oe=Math.max(...Array.from(U.keys())),Se=[];Se.push([Y(m,b,0),U.get(0)]);let Te=b;for(let de=1;de<=oe;de++){let ue=b.cloneNode(!0);Te.after(ue),Te=ue,Se.push([Y(m,ue,de),U.get(de)])}return Se},Kh=(m,b,U,E,oe,Se,Te)=>{try{Object.defineProperty(m,E,{configurable:!0,get(){if(!b)return;let de=b.pointers[U];if(!de)return;let ue=b.getTextValue(de.percent);return at(ue)?je(ue,ue):ue},set:de=>{b.pointers[U]?b==null||b.setValue(de,U):b==null||b.addPointer(de)}}),Object.defineProperty(m,oe,{configurable:!0,get(){var de,ue;return(ue=(de=b==null?void 0:b.pointers[U])==null?void 0:de.getAttr("aria-label"))!=null?ue:void 0},set:de=>{!b||b.setAriaLabel(U,de)}}),Object.defineProperty(m,Se,{configurable:!0,get(){var de,ue;return(ue=(de=b==null?void 0:b.styles)==null?void 0:de.pointerShapes[U])!=null?ue:null},set:de=>{!b||!b.styles||b.styles.setPointerShape(U,de)}}),Object.defineProperty(m,Te,{configurable:!0,get(){var de;return(de=b==null?void 0:b.pointers[U].disabled)!=null?de:!1},set:de=>{if(!b)return;let ue=b==null?void 0:b.pointers[U];!ue||(ue.disabled=de)}})}catch(de){console.error(de)}},Pp=(m,b)=>{let U=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let E=2;E<Wt;E++)U.push([`value${E}`,`ariaLabel${E}`,`pointer${E}Shape`,`pointer${E}Disabled`,E-1]);for(let E of U)Kh(m,b,E[4],E[0],E[1],E[2],E[3])},Zh=(m,b,U)=>{var E;let oe=(E=U.shadowRoot)==null?void 0:E.querySelector(".container");if(oe)for(let Se of m)b?oe.prepend(Se.$pointer):oe.append(Se.$pointer)},Op=(m,b)=>{if(!(!b||m.length<=1)){for(let U of m)U.$pointer.style.zIndex=bt.toString();b.$pointer.style.zIndex=(bt*2).toString()}},Go=0,cn=100,Ps=2,Jh="0.3s",Ap=(m,b,U)=>{let E=U.map(y=>y[0]),oe=null,Se=null,Te=null,de=null,ue=Go,ze=cn,Ne,be,tt=Ae,Lr=Ps,qt=!1,_e=!1,Fe=!1,ke=0,pt=1/0,Mt=!1,Et,xt,St=!1,ar=!1,or=!1,Wi=Jh,Qh=[],ec=y=>{St||(y.preventDefault&&y.preventDefault(),os(y),window.addEventListener("mousemove",os),window.addEventListener("mouseup",oa),yi(m,y))},oa=y=>{St||(Et=void 0,xt=void 0,window.removeEventListener("mousemove",os),window.removeEventListener("mouseup",oa),Wi&&b.classList.add(Me),Wo(m,y))},Lp=(y,j)=>{if(E.length<=0)return;if(E.length===1)return E[0].isClicked(y)&&Wi&&b.classList.remove(Me),E[0];let ve=Tp(y);if(Mt){let Qe=j,Nr=ha(Qe);Nr!==void 0&&(Qe=Ni(Qe,Nr)),ve?(Et=Qe,xt=0,Wi&&b.classList.remove(Me)):Et!==void 0&&(xt=Qe-Et,Et=Qe)}if(!Rp(y)&&!ve){for(let Qe of E)if(!(!Qe.isClicked(y)||Qe.disabled))return Wi&&b.classList.remove(Me),Qe;for(let Qe of E)if(oe===Qe)return Qe}let lt=1/0,$t=null;for(let Qe of E){if(Qe.disabled)continue;let Nr=Math.abs(j-Qe.percent);Nr<lt&&(lt=Nr,$t=Qe)}return $t},tc=()=>E.findIndex(y=>oe===y&&!y.disabled),os=y=>{let j;if(tt===ge){let{height:lt,top:$t}=b.getBoundingClientRect(),Qe=y.type.indexOf("mouse")!==-1?y.clientY:y.touches[0].clientY;j=Math.min(Math.max(0,Qe-$t),lt)*100/lt}else{let{width:lt,left:$t}=b.getBoundingClientRect(),Qe=y.type.indexOf("mouse")!==-1?y.clientX:y.touches[0].clientX;j=Math.min(Math.max(0,Qe-$t),lt)*100/lt}if((qt||_e)&&(j=100-j),oe=Lp(y.target,j),oe&&Op(E,oe),Mt&&E.length>1&&xt!==void 0){let lt=E[0],$t=E[E.length-1],Qe=lt.percent+xt<0,Nr=$t.percent+xt>100;if(Qe||Nr)return;for(let va=0;va<E.length;va++)lr(va,E[va].percent+xt);return}let ve=tc();ve!==-1&&(lr(ve,j),oe==null||oe.$pointer.focus())},la=y=>{if(St||document.activeElement!==m||oe!=null&&oe.disabled)return;y.stopPropagation(),y.preventDefault();let j=y.deltaY<0,ve=qt||_e,lt=j?!ve:ve,$t=tc();$t!==-1&&(lt?dn($t,E[$t].percent):un($t,E[$t].percent))},rc=y=>{St||ar||(tt===ge?_e?lr(y,100):lr(y,0):qt?un(y,E[y].percent):dn(y,E[y].percent))},ic=y=>{St||ar||(tt===ge?_e?lr(y,0):lr(y,100):qt?dn(y,E[y].percent):un(y,E[y].percent))},sc=y=>{St||ar||(tt===ge?_e?un(y,E[y].percent):dn(y,E[y].percent):qt?lr(y,100):lr(y,0))},nc=y=>{St||ar||(tt===ge?_e?dn(y,E[y].percent):un(y,E[y].percent):qt?lr(y,0):lr(y,100))},Rp=y=>y.classList.contains("panel"),Tp=y=>y.classList.contains("panel-fill"),dn=(y,j)=>{if(j===void 0)return;let ve=ha(j);ve==null&&(ve=1),j-=ve,j<0&&(j=0),lr(y,j)},un=(y,j)=>{if(j===void 0)return;let ve=ha(j);ve==null&&(ve=1),j+=ve,j>100&&(j=100),lr(y,j)},ls=()=>{!de||de.update({percents:ac(),values:oc(),$pointers:lc(),min:hc(),max:cc(),data:qo(),step:Yo(),round:Ko(),type:Xo(),textMin:ca(),textMax:da(),rightToLeft:Qo(),bottomToTop:el(),pointersOverlap:sl(),pointersMinDistance:Zo(),pointersMaxDistance:Jo(),rangeDragging:nl(),disabled:tl(),keyboardDisabled:rl(),mousewheelDisabled:il()})},Mp=()=>{ls()},Ip=y=>{if(!(Fe||E.length<=1||ze===ue))if(y===0){let j=pt*100/(ze-ue);return Math.max(0,E[y+1].percent-j)}else{let j=ke*100/(ze-ue);return Math.min(E[y-1].percent+j,100)}},Up=y=>{if(!(Fe||E.length<=1||ze===ue))if(y===E.length-1){let j=pt*100/(ze-ue);return Math.min(E[y-1].percent+j,100)}else{let j=ke*100/(ze-ue);return Math.max(0,E[y+1].percent-j)}},ha=y=>{let j;if(typeof Ne=="function"){let ve=Ue(0,100,ue,ze,y);j=Ne(ve,y)}else j=Ne;if(at(j)){let ve=ze-ue;return j=ve===0?0:j*100/ve,j}},Os=y=>{if(y===void 0)return;let j=Ue(0,100,ue,ze,y);return be!==void 0?be[Math.round(j)]:as(j,Lr)},ca=()=>be!==void 0?be[ue]:ue,da=()=>be!==void 0?be[ze]:ze,Yo=()=>Ne,zp=y=>{var j;return y<=0||Fe?ca():(j=Os(E[y-1].percent))!=null?j:""},Fp=y=>{var j;return E.length<=1||y>=E.length-1||Fe?da():(j=Os(E[y+1].percent))!=null?j:""},ac=()=>E.map(y=>y.percent),oc=()=>E.map(y=>Os(y.percent)),lc=()=>E.map(y=>y.$pointer),hc=()=>ue,cc=()=>ze,qo=()=>be,Xo=()=>tt,Ko=()=>Lr,Zo=()=>ke,Jo=()=>pt,jp=y=>Qh[y],Qo=()=>qt,el=()=>_e,tl=()=>St,rl=()=>ar,il=()=>or,sl=()=>Fe,nl=()=>Mt,lr=(y,j)=>{if(j===void 0)return;let ve=ha(j);ve!==void 0&&(j=Ni(j,ve));let lt=E[y];if(!lt)return;let $t=lt.updatePosition(j,Ip(y),Up(y),tt,qt,_e);Se==null||Se.updatePosition(tt,E.map(Qe=>Qe.percent),qt,_e),ls();for(let Qe of E){let Nr=Os(Qe.percent);Nr!==void 0&&(Qe.setAttr("aria-valuenow",Nr.toString()),Qe.setAttr("aria-valuetext",Nr.toString()))}Wp(),$t&&Bo(m,E.map(Qe=>Os(Qe.percent)))},ri=()=>{for(let y=0;y<E.length;y++)lr(y,E[y].percent)},Np=(y,j)=>{ue=be!==void 0?0:je(y,Go),ze=be!==void 0?be.length-1:je(j,cn),ua(ue),pa(ze)},Wp=()=>{var y,j;for(let ve=0;ve<E.length;ve++){let lt=E[ve];lt.setAttr("aria-valuemin",((y=zp(ve))!=null?y:"").toString()),lt.setAttr("aria-valuemax",((j=Fp(ve))!=null?j:"").toString())}},ua=y=>{ue=je(y,Go),ue>ze&&(ze=ue+cn),ri()},pa=y=>{ze=je(y,cn),ze<ue&&(ze=ue+cn),ri()},dc=y=>{Fe=!0;for(let j=0;j<y.length;j++)fa(y[j],j);Fe=!1;for(let j=0;j<y.length;j++)fa(y[j],j)},fa=(y,j)=>{let ve;be!==void 0?(ve=y==null?0:Q(y,be),ve===-1&&(ve=0)):(ve=je(y,ue),ve<ue&&(ve=ue),ve>ze&&(ve=ze));let lt=Ue(ue,ze,0,100,ve);lr(j,lt)},ga=y=>{if(y==null){Ne=void 0;return}if(typeof y=="function"){Ne=y,ri();return}if(at(y)){Ne=je(y,1);let j=Math.abs(ze-ue);Ne>j&&(Ne=void 0),ri();return}Ne=void 0},al=y=>{Fe=y,ri()},ol=y=>{(!at(y)||y<0)&&(y=0),ke=y},ll=y=>{(!at(y)||y<0)&&(y=1/0),pt=y},hl=y=>{St=y,b.classList.toggle("disabled",St),St?b.setAttribute("aria-disabled","true"):b.hasAttribute("aria-disabled")&&b.removeAttribute("aria-disabled")},uc=y=>{ar=y},pc=y=>{or=y,or?document.removeEventListener("wheel",la):document.addEventListener("wheel",la,{passive:!1})},cl=y=>{if(y==null){be=void 0;return}if(be=te(y),be===void 0||be.length<=0){be=void 0;return}ua(0),pa(be.length-1),Ne===void 0&&ga(1)},dl=y=>{var j;typeof y=="string"?tt=y.trim().toLowerCase()===ge?ge:Ae:tt=Ae;let ve=(j=m.shadowRoot)==null?void 0:j.querySelector(".range-slider-box");if(!ve)return;ve.className=`range-slider-box type-${tt}`,ri();let lt=tt===ge?"vertical":"horizontal";for(let $t of E)$t.setAttr("aria-orientation",lt)},ul=y=>{qt=y,E.length>1&&Zh(E,qt,m),ri(),ls()},pl=y=>{_e=y,E.length>1&&Zh(E,_e,m),ri(),ls()},fl=y=>{Lr=je(y,Ps),Lr<0&&(Lr=Ps),ls()},fc=y=>{y==null||y.toString().trim().toLowerCase()==="false"?(Wi=void 0,b.style.removeProperty(we),b.classList.remove(Me)):(Wi=y.toString(),b.style.setProperty(we,Wi),b.classList.add(Me))},gc=(y,j)=>{let ve=E[y];!ve||(ve.setAttr("aria-label",j),Qh[y]=j)},ma=y=>{if(Et=void 0,E.length<=1){Mt=!1,b.classList.remove(et);return}Mt=y,b.classList.toggle(et,Mt)},Hp=()=>{hl(ot(m.getAttribute(D))),ar=ot(m.getAttribute(X)),or=ot(m.getAttribute(W));let y=De(m,/^pointer([0-9]*)-disabled$/,j=>ot(j));for(let j of y){let ve=j[0];!E[ve]||(E[ve].disabled=j[1])}},Bp=()=>{let y=De(m,/^aria-label([0-9]*)$/);for(let j of y){let ve=j[0];gc(ve,j[1])}},Gp=y=>{let j=E.length,ve=E[j-1].$pointer,lt=ve.cloneNode(!0);ve.after(lt);let $t=Y(m,lt,j);return $t.setCallbacks(rc,ic,sc,nc),E.push($t),fa(y,j),ri(),ls(),j},Vp=()=>{let y=E.length,j=E[y-1];return j?(j.destroy(),E.pop(),E.length<=1&&ma(!1),ri(),ls(),y-1):-1};return(()=>{var y,j;for(let lt of E)lt.setCallbacks(rc,ic,sc,nc);let ve=(y=m.shadowRoot)==null?void 0:y.querySelector(".panel-fill");ve&&(Se=Le(ve)),dl(m.getAttribute(O)),ul(ot(m.getAttribute(G))),pl(ot(m.getAttribute(A))),Np(m.getAttribute(u),m.getAttribute(g)),ga(m.getAttribute(S)),cl(m.getAttribute(f)),dc(U.map(lt=>lt[1])),al(ot(m.getAttribute(a))),ol(je(m.getAttribute(o),0)),ll(je(m.getAttribute(l),1/0)),ma(ot(m.getAttribute(h))),fl(je(m.getAttribute($),Ps)),Hp(),Bp(),Te=Re(m,b,E),fc((j=m.getAttribute(ct))!=null?j:Jh),b.addEventListener("mousedown",ec),b.addEventListener("mouseup",oa),b.addEventListener("touchmove",os),b.addEventListener("touchstart",os),or||document.addEventListener("wheel",la,{passive:!1}),de=Ie(m,Mp,{setValues:dc,setMin:ua,setMax:pa,setStep:ga,setPointersOverlap:al,setPointersMinDistance:ol,setPointersMaxDistance:ll,setDisabled:hl,setType:dl,setRightToLeft:ul,setBottomToTop:pl,setRound:fl,setKeyboardDisabled:uc,setMousewheelDisabled:pc,setRangeDragging:ma,setData:cl},{getPercents:ac,getValues:oc,getPointerElements:lc,getMin:hc,getMax:cc,getStep:Yo,getData:qo,getType:Xo,getRound:Ko,getTextMin:ca,getTextMax:da,isRightToLeft:Qo,isBottomToTop:el,isDisabled:tl,isKeyboardDisabled:rl,isMousewheelDisabled:il,isPointersOverlap:sl,isRangeDraggingEnabled:nl,getPointersMinDistance:Zo,getPointersMaxDistance:Jo}),de.init()})(),{get pointers(){return E},get styles(){return Te},get pluginsManager(){return de},get min(){return ca()},get max(){return da()},get step(){return Yo()},get pointersOverlap(){return sl()},set pointersOverlap(y){al(y)},get pointersMinDistance(){return Zo()},set pointersMinDistance(y){ol(y)},get pointersMaxDistance(){return Jo()},set pointersMaxDistance(y){ll(y)},get disabled(){return tl()},set disabled(y){hl(y)},get data(){return qo()},get type(){return Xo()},set type(y){dl(y)},get rightToLeft(){return Qo()},set rightToLeft(y){ul(y)},get bottomToTop(){return el()},set bottomToTop(y){pl(y)},get round(){return Ko()},set round(y){fl(y)},get animateOnClick(){return Wi},set animateOnClick(y){fc(y)},get keyboardDisabled(){return rl()},set keyboardDisabled(y){uc(y)},get mousewheelDisabled(){return il()},set mousewheelDisabled(y){pc(y)},get rangeDragging(){return nl()},set rangeDragging(y){ma(y)},setMin:ua,setMax:pa,setValue:fa,setStep:ga,setData:cl,getTextValue:Os,setAriaLabel:gc,getAriaLabel:jp,addPointer:Gp,removePointer:Vp,destroy:()=>{b.removeEventListener("mousedown",ec),b.removeEventListener("mouseup",oa),b.removeEventListener("touchmove",os),b.removeEventListener("touchstart",os),document.removeEventListener("wheel",la);for(let y of E)y.destroy();de==null||de.destroy()}}},Ep=(m,b,U)=>{let E=Ce.find(([de,ue,ze,Ne])=>ue.replace("#","")===b.replace(/\d+/g,""));if(E&&m.styles){let[de,ue,ze,Ne]=E,be=b.replace(/\D/g,"").trim(),tt=be===""||be==="0"||be==="1"?0:je(be,0)-1;m.styles.setStyle(de,U,tt);return}switch(m&&m.pluginsManager&&m.pluginsManager.onAttrChange(b,U),b){case u:{m.setMin(U);break}case g:{m.setMax(U);break}case S:{m.setStep(U);break}case a:{m.pointersOverlap=ot(U);break}case o:{m.pointersMinDistance=je(U,0);break}case h:{m.rangeDragging=ot(U);break}case l:{m.pointersMaxDistance=je(U,1/0);break}case D:{m.disabled=ot(U);break}case X:{m.keyboardDisabled=ot(U);break}case W:{m.mousewheelDisabled=ot(U);break}case f:{m.setData(U);break}case O:{m.type=U;break}case G:{m.rightToLeft=ot(U);break}case A:{m.bottomToTop=ot(U);break}case $:{m.round=je(U,Ps);break}case P:{m.styles&&(m.styles.theme=U);break}case ct:{m.animateOnClick=U;break}}let oe=null;if(/^value([0-9]*)$/.test(b)&&(oe="value"),/^pointer([0-9]*)-disabled$/.test(b)&&(oe="pointer-disabled"),/^aria-label([0-9]*)$/.test(b)&&(oe="aria-label"),/^pointer([0-9]*)-shape$/.test(b)&&(oe="pointer-shape"),!oe)return;let Se=b.replace(/\D/g,"").trim(),Te=Se===""||Se==="0"||Se==="1"?0:je(Se,0)-1;switch(oe){case"value":{m.setValue(U,Te);break}case"pointer-disabled":{let de=m==null?void 0:m.pointers[Te];if(!de)return;de.disabled=ot(U);break}case"aria-label":{m.setAriaLabel(Te,U);break}case"pointer-shape":{m.styles&&m.styles.setPointerShape(Te,U);break}}},Dp=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(m){this.slider&&this.slider.setStep(m)}get step(){var m;return(m=this.slider)==null?void 0:m.step}set disabled(m){this.slider&&(this.slider.disabled=m)}get disabled(){var m,b;return(b=(m=this.slider)==null?void 0:m.disabled)!=null?b:!1}set data(m){var b;(b=this.slider)==null||b.setData(m)}get data(){var m;return(m=this.slider)==null?void 0:m.data}set min(m){var b;(b=this.slider)==null||b.setMin(m)}get min(){var m;return(m=this.slider)==null?void 0:m.min}set max(m){var b;(b=this.slider)==null||b.setMax(m)}get max(){var m;return(m=this.slider)==null?void 0:m.max}set round(m){!this.slider||(this.slider.round=m)}get round(){var m,b;return(b=(m=this.slider)==null?void 0:m.round)!=null?b:Ps}set type(m){!this.slider||(this.slider.type=m??Ae)}get type(){var m;return((m=this.slider)==null?void 0:m.type)||Ae}set pointersOverlap(m){!this.slider||(this.slider.pointersOverlap=m)}get pointersOverlap(){var m,b;return(b=(m=this.slider)==null?void 0:m.pointersOverlap)!=null?b:!1}set pointersMinDistance(m){!this.slider||(this.slider.pointersMinDistance=m)}get pointersMinDistance(){var m,b;return(b=(m=this.slider)==null?void 0:m.pointersMinDistance)!=null?b:0}set pointersMaxDistance(m){!this.slider||(this.slider.pointersMaxDistance=m)}get pointersMaxDistance(){var m,b;return(b=(m=this.slider)==null?void 0:m.pointersMaxDistance)!=null?b:1/0}set theme(m){!this.slider||!this.slider.styles||(this.slider.styles.theme=m)}get theme(){var m,b,U;return(U=(b=(m=this.slider)==null?void 0:m.styles)==null?void 0:b.theme)!=null?U:null}set rtl(m){!this.slider||(this.slider.rightToLeft=m)}get rtl(){var m,b;return(b=(m=this.slider)==null?void 0:m.rightToLeft)!=null?b:!1}set btt(m){!this.slider||(this.slider.bottomToTop=m)}get btt(){var m,b;return(b=(m=this.slider)==null?void 0:m.bottomToTop)!=null?b:!1}set keyboardDisabled(m){!this.slider||(this.slider.keyboardDisabled=m)}get keyboardDisabled(){var m,b;return(b=(m=this.slider)==null?void 0:m.keyboardDisabled)!=null?b:!1}set mousewheelDisabled(m){!this.slider||(this.slider.mousewheelDisabled=m)}get mousewheelDisabled(){var m,b;return(b=(m=this.slider)==null?void 0:m.mousewheelDisabled)!=null?b:!1}set animateOnClick(m){!this.slider||(this.slider.animateOnClick=m)}get animateOnClick(){var m;return(m=this.slider)==null?void 0:m.animateOnClick}get rangeDragging(){var m,b;return(b=(m=this.slider)==null?void 0:m.rangeDragging)!=null?b:!1}set rangeDragging(m){this.slider&&(this.slider.rangeDragging=ot(m))}get externalCSSList(){return this._externalCSSList}addPointer(m){var b,U;if(!this.slider)return;let E=(U=(b=this.slider)==null?void 0:b.addPointer(m))!=null?U:0;Kh(this,this.slider,E,`value${E+1}`,`ariaLabel${E+1}`,`pointerShape${E+1}`,`pointer${E+1}Disabled`)}removePointer(){var m;!this.slider||(m=this.slider)==null||m.removePointer()}addCSS(m){if(!this.shadowRoot)return;let b=document.createElement("style");b.textContent=m,this.shadowRoot.appendChild(b)}connectedCallback(){var m,b;if(!this.shadowRoot)return;this._externalCSSList=Z(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let U=(m=this.shadowRoot)==null?void 0:m.querySelector(".pointer");if(!U)return;let E=(b=this.shadowRoot)==null?void 0:b.getElementById("range-slider");if(!E)return;let oe=Yt(this,U);this.slider=Ap(this,E,oe),Pp(this,this.slider),this._observer=new MutationObserver(Se=>{Se.forEach(Te=>{var de;if(!this.slider||Te.type!=="attributes")return;let ue=Te.attributeName;!ue||Ep(this.slider,ue,(de=this.getAttribute(ue))!=null?de:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Vo=Dp;window.tcRangeSlider=Vo,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Vo),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Vo{})})();const i1=r=>!isNaN(parseFloat(r))&&isFinite(r),bi=(r,e)=>i1(r)?Number(r):e,_l=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const $a=40,Ca=35,_a=30,bd="#475569",wd="#fff",xd=20,s1=()=>{let r=null,e=null,t=!1,i=$a,s=Ca,n=_a,a=bd,o=wd,l="",h="",f,u=[],g=null,S=null;const $=()=>{g==null||g.classList.toggle("is-after",i<=0)},O=()=>{var H;const _=(H=r==null?void 0:r.shadowRoot)==null?void 0:H.querySelector("#range-slider");g=document.createElement("div"),g.classList.add("tooltips"),_.prepend(g),$()},P=_=>{const H=document.createElement("div");return H.style.zIndex=xd.toString(),H.className=_,H},G=(_,H,fe,ne,Ee)=>{_&&(H==="vertical"?(_.style.left=`${-i}px`,_.style.top=ne??"0"):(_.style.left=fe??"0",_.style.top=`${-i}px`),_.style.width=`${s}px`,_.style.height=`${n}px`,_.style.background=a,_.style.color=o,_.style.zIndex=Ee.toString())},A=_=>{let H=_;return typeof f=="function"&&(H=f(_)),h==="prefix"?`${l}${H}`:`${H}${l}`},D=()=>{const _=(e==null?void 0:e.getValues())??[],H=(e==null?void 0:e.getPointerElements())??[],fe=(e==null?void 0:e.getType())??"horizontal";if(_)for(let ne=0;ne<_.length;ne++){const Ee=u[ne];if(!Ee)continue;const Ve=(_[ne]??"").toString();Ee.textContent=A(Ve),G(Ee,fe,H[ne].style.left,H[ne].style.top,H[ne].style.zIndex)}},X=()=>{const _=(e==null?void 0:e.getValues())??[];if(_){for(let H=0;H<_.length;H++){const fe=P(`tooltip tooltip-${H+1}`);fe.style.position="absolute",u.push(fe),g==null||g.prepend(fe)}D()}},W=()=>{r&&(S=new ResizeObserver(_=>{for(const H of _)D()}),S.observe(r))},ie=_=>{t=_,t?(O(),X(),W()):he()},k=_=>{i=_,D()},L=_=>{s=_,D()},T=_=>{n=_,D()},M=_=>{a=_,D()},F=_=>{o=_,D()},I=_=>{l=_,D()},z=_=>{h=_,D()},R=_=>{f=_,D()},K=_=>{if(!t||!_.values)return;const H=(e==null?void 0:e.getPointerElements())??[],fe=(e==null?void 0:e.getType())??"horizontal";for(let ne=0;ne<_.values.length;ne++){const Ee=_.values[ne],Ve=u[ne];if(Ee===void 0&&Ve){Ve.remove(),u[ne]=void 0;continue}if(Ee!==void 0&&!Ve){const ct=P(`tooltip tooltip-${ne+1}`),ce=(Ee??"").toString();ct.textContent=A(ce),ct.style.position="absolute",G(ct,fe,H[ne].style.left,H[ne].style.top,H[ne].style.zIndex),u[ne]=ct,g==null||g.append(ct)}if(!Ve)continue;const nt=(Ee??"").toString();Ve.textContent=A(nt),G(Ve,fe,H[ne].style.left,H[ne].style.top,H[ne].style.zIndex)}},he=()=>{g==null||g.remove();for(const _ of u)_&&_.remove();u=[],S==null||S.disconnect()};return{get name(){return"Moving Tooltip"},init:(_,H,fe,ne)=>{r=_,e=ne,i=bi(_.getAttribute("moving-tooltip-distance-to-pointer"),$a),s=bi(_.getAttribute("moving-tooltip-width"),Ca),n=bi(_.getAttribute("moving-tooltip-height"),_a),a=_.getAttribute("moving-tooltip-bg")||bd,o=_.getAttribute("moving-tooltip-text-color")||wd,l=_.getAttribute("moving-tooltip-units")||"",h=_.getAttribute("moving-tooltip-units-type")||"",ie(_l(_.getAttribute("moving-tooltip")))},update:K,onAttrChange:(_,H)=>{_==="moving-tooltip"&&ie(_l(H)),_==="moving-tooltip-distance-to-pointer"&&k(bi(H,$a)),_==="moving-tooltip-width"&&L(bi(H,Ca)),_==="moving-tooltip-height"&&T(bi(H,_a)),_==="moving-tooltip-bg"&&M(H),_==="moving-tooltip-text-color"&&F(H),_==="moving-tooltip-units"&&I(H),_==="moving-tooltip-units-type"&&z(H)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:_=>{ie(_l(_))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:_=>{k(bi(_,$a))}}},{name:"tooltipWidth",attributes:{get(){return s},set:_=>{L(bi(_,Ca))}}},{name:"tooltipHeight",attributes:{get(){return n},set:_=>{T(bi(_,_a))}}},{name:"tooltipBg",attributes:{get(){return a},set:_=>{M(_)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:_=>{F(_)}}},{name:"tooltipUnits",attributes:{get(){return l},set:_=>{I(_)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:_=>{z(_)}}},{name:"formatTooltipValue",attributes:{get(){return f},set:_=>{R(_)}}}],css:`
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
  z-index: ${xd};
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
    `,destroy:he}};window.tcRangeSliderPlugins.push(s1);(()=>{var r=(o,l,h,f,u)=>{let g=l-o;return g===0?h:(f-h)*(u-o)/g+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,f=null,u=null,g=!1,S=s,$=n,O=()=>{var k;let L=(k=o==null?void 0:o.shadowRoot)==null?void 0:k.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),f=document.createElement("div"),f.classList.add("mark-points"),h.append(f),u=document.createElement("div"),u.classList.add("mark-values"),h.append(u),L.append(h)},P=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},G=()=>{var k;if(!h||!l)return;let L=l.getMin(),T=l.getMax(),M=l.getType()==="vertical",F=l.isRightToLeft()||l.isBottomToTop();for(let z=0;z<S;z++){let R=document.createElement("div");R.classList.add("mark",`mark-${z}`);let K=S===0?0:z*100/(S-1);M?F?R.style.top=`${100-K}%`:R.style.top=`${K}%`:F?R.style.left=`${100-K}%`:R.style.left=`${K}%`,f==null||f.append(R)}let I=l.getData();for(let z=0;z<$;z++){let R=document.createElement("div");R.classList.add("mark-value",`mark-value-${z}`);let K=$===0?0:z*100/($-1),he=r(0,$-1,L,T,z);R.textContent=(I?(k=I[Math.round(he)])!=null?k:"":he).toString(),M?F?R.style.top=`${100-K}%`:R.style.top=`${K}%`:F?R.style.left=`${100-K}%`:R.style.left=`${K}%`,u==null||u.append(R)}},A=(k,L)=>{ie(),S=k,$=L,S<=0&&(S=s),$<=0&&($=n),O(),G(),P()},D=k=>{g=k,g?(O(),G(),P()):ie()},X=k=>{!h||h.style.setProperty("--marks-color",k)},W=k=>{!h||h.style.setProperty("--values-color",k)},ie=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(k,L,T,M)=>{var F,I;l=M,o=k,g=i(o.getAttribute("marks")),g&&(A(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),X((F=o.getAttribute("marks-color"))!=null?F:"#cbd5e1"),W((I=o.getAttribute("marks-values-color"))!=null?I:"#475569"))},onAttrChange:(k,L)=>{k==="marks"&&D(i(L)),k==="marks-count"&&A(t(L,s),$),k==="marks-values-count"&&A(S,t(L,n)),k==="marks-color"&&X(L),k==="marks-values-color"&&W(L)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return g??!1},set:k=>{D(i(k))}}},{name:"marksCount",attributes:{get(){return S??s},set:k=>{A(t(k,s),$)}}},{name:"marksValuesCount",attributes:{get(){return S??s},set:k=>{A(S,t(k,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:k=>{X(k)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:k=>{W(k)}}}],destroy:ie,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var n1=Object.defineProperty,a1=Object.getOwnPropertyDescriptor,pi=(r,e,t,i)=>{for(var s=i>1?void 0:i?a1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&n1(e,t,s),s};let Tr=class extends kr{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=pe(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from!==void 0&&this.to!==void 0?this.max<r.from?(this.to=r.to,this.from=r.from):(this.from=r.from,this.to=r.to):(this.from=r.from,this.to=r.to))}),this.registry.minmax.addListener(this.UUID,r=>{r&&(this.from=r.min,this.to=r.max)})}disconnectedCallback(){super.disconnectedCallback(),this.registry.range.removeListener(this.UUID),this.registry.minmax.removeListener(this.UUID),this.initialised=!1}firstUpdated(r){super.firstUpdated(r)}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .tooltip {
                    font-size: 12px;
                }
                .pointer-shape {
                    border-radius: 0;
                    width: 10px;
                }
            `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return p`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${ye(this.sliderRef)}
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

        `}};Tr.styles=ae`

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
    
    `;pi([le({context:wh,subscribe:!0}),v()],Tr.prototype,"min",2);pi([le({context:xh,subscribe:!0}),v()],Tr.prototype,"max",2);pi([le({context:$o,subscribe:!0}),v()],Tr.prototype,"from",2);pi([le({context:Co,subscribe:!0}),v()],Tr.prototype,"to",2);pi([v()],Tr.prototype,"hasFixedFrom",2);pi([v()],Tr.prototype,"hasFixedTo",2);pi([le({context:Xn,subscribe:!0}),v()],Tr.prototype,"palette",2);pi([v()],Tr.prototype,"sliderRef",2);pi([v()],Tr.prototype,"initialised",2);Tr=pi([V("registry-range-slider")],Tr);var o1=Object.defineProperty,l1=Object.getOwnPropertyDescriptor,ra=(r,e,t,i)=>{for(var s=i>1?void 0:i?l1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o1(e,t,s),s};let Gs=class extends kr{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=pe()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?C:p`
            <div ${ye(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};ra([le({context:$o,subscribe:!0})],Gs.prototype,"from",2);ra([le({context:Co,subscribe:!0})],Gs.prototype,"to",2);ra([d({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],Gs.prototype,"fixed",2);ra([d({type:String,reflect:!0,attribute:!0})],Gs.prototype,"separator",2);Gs=ra([V("registry-range-display")],Gs);var h1=Object.defineProperty,c1=Object.getOwnPropertyDescriptor,Ss=(r,e,t,i)=>{for(var s=i>1?void 0:i?c1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h1(e,t,s),s};let Di=class extends kr{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return p`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":C}" ${ye(this.tourableElementRef)}>

                <div class="histogram ${this.expandable===!0?"expandable":""}" style="height: ${this.expanded?this.heightExpanded:this.height}" part="bg" @click=${()=>{this.expandable===!0&&(this.expanded=!this.expanded)}}>

                    ${this.histogram.map(r=>p`
                            <div class="histogram-bar" data-height="${r.height}" data-percentage="${r.percentage}" data-count="${r.count}" data-from="${r.from}" data-to="${r.to}">
                                <div style="height: ${r.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():p`
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
        `}};Di.styles=ae`

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


    `;Ss([v()],Di.prototype,"histogram",2);Ss([d({type:Boolean,reflect:!0})],Di.prototype,"interactive",2);Ss([d({type:String,reflect:!0})],Di.prototype,"height",2);Ss([d({type:String,reflect:!0})],Di.prototype,"heightExpanded",2);Ss([d({type:Boolean,reflect:!0,converter:Be(!1)})],Di.prototype,"expandable",2);Ss([v()],Di.prototype,"expanded",2);Di=Ss([V("registry-histogram")],Di);var d1=Object.defineProperty,u1=Object.getOwnPropertyDescriptor,p1=(r,e,t,i)=>{for(var s=i>1?void 0:i?u1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&d1(e,t,s),s};let Hl=class extends di{getTourableRoot(){}render(){const e=this.classList.contains("small")?"small":"";return p`
        
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
        
        `}};Hl.styles=ae`
    
    `;Hl=p1([V("group-download-dropdown")],Hl);var f1=Object.defineProperty,ia=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&f1(e,t,s),s};class ft extends di{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}ia([le({context:Po,subscribe:!0}),v()],ft.prototype,"parentFileProviderElement");ia([le({context:ap,subscribe:!0}),v()],ft.prototype,"loading");ia([le({context:$h,subscribe:!0}),v()],ft.prototype,"file");ia([le({context:np,subscribe:!0}),v()],ft.prototype,"failure");ia([le({context:Ph,subscribe:!0}),v()],ft.prototype,"recording");const qh=class qh extends ft{constructor(){super(...arguments),this.ref=pe()}onInstanceCreated(){}onFailure(){}getTourableRoot(){return this.ref.value}render(){return p`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${ye(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};qh.styles=ae`
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

    `;let vs=qh;var g1=Object.defineProperty,m1=Object.getOwnPropertyDescriptor,yp=(r,e,t,i)=>{for(var s=i>1?void 0:i?m1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&g1(e,t,s),s};let Ja=class extends di{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return p`
            <slot>
                <button class="default">${x(w.range).toLowerCase()}</button>
            </slot>
        `}};Ja.styles=vs.styles;yp([le({context:Jn,subscribe:!0})],Ja.prototype,"setter",2);Ja=yp([V("group-range-propagator")],Ja);var v1=Object.defineProperty,y1=Object.getOwnPropertyDescriptor,b1=(r,e,t,i)=>{for(var s=i>1?void 0:i?y1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&v1(e,t,s),s};let Bl=class extends di{getTourableRoot(){}render(){return p`
        
                <button class="default" @click=${()=>this.group.files.downloadAllFiles()}>${x(w.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${()=>this.group.forEveryInstance(r=>r.export.downloadPng())}>${x(w.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${()=>this.group.analysisSync.png.downloadPng({})}>${x(w.pngofentiregroup)}</button>
            
                <button class="default" @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${x(w.csvofanalysisdata)}</button>
        
        `}};Bl.styles=ae`

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
    
    `;Bl=b1([V("group-download-buttons")],Bl);/**
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
 */const w1=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Xd(t,qd`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function bp(r={}){await w1;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Sd(r){if(await bp(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function x1(r){return await bp(),new google.visualization.ChartWrapper({container:r})}/**
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
 */var Ui=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var o=r.length-1;o>=0;o--)(a=r[o])&&(n=(s<3?a(n):s>3?a(e,t,n):a(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const $d=["ready","select"],S1={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class Zr extends dr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return p`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){x1(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents($d,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(S1[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(s=>!$d.includes(s)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(!(!e||!t))try{const i=await Sd({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,t;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?t=fetch(e).then(s=>s.json()):t=Promise.resolve(e),t.then(Sd).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}Zr.styles=ae`
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
  `;Ui([d({type:String,reflect:!0})],Zr.prototype,"type",void 0);Ui([d({type:Array})],Zr.prototype,"events",void 0);Ui([d({type:Object,hasChanged:()=>!0})],Zr.prototype,"options",void 0);Ui([d({type:Array})],Zr.prototype,"cols",void 0);Ui([d({type:Array})],Zr.prototype,"rows",void 0);Ui([d({type:String})],Zr.prototype,"data",void 0);Ui([d({type:Object})],Zr.prototype,"view",void 0);Ui([d({type:Array})],Zr.prototype,"selection",void 0);Ui([d({type:Object})],Zr.prototype,"_data",void 0);customElements.define("google-chart",Zr);var $1=Object.defineProperty,C1=Object.getOwnPropertyDescriptor,on=(r,e,t,i)=>{for(var s=i>1?void 0:i?C1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$1(e,t,s),s};let es=class extends di{constructor(){super(...arguments),this.instances=[],this.on=!1}getTourableRoot(){throw new Error("Method not implemented.")}firstUpdated(r){super.firstUpdated(r),this.group.files.addListener(this.UUID,()=>{this.group.analysisGraph.turnOn()}),this.group.analysisGraph.addListener(this.UUID,e=>{e!==void 0?(this.data=e.data,this.colors=e.colors,this.on=!0):(this.data=void 0,this.colors=void 0,this.on=!1)})}download(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("google-chart");console.log(r)}render(){return p`
            <div class="wrapper ${this.on?"on":"off"}">

                ${this.on===!0?p`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{colors:this.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},chartArea:{width:"90%"}}}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                `:C}
                
            </div>
        `}};es.styles=ae`
    
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

    `;on([v()],es.prototype,"instances",2);on([v()],es.prototype,"timeout",2);on([v()],es.prototype,"data",2);on([v()],es.prototype,"colors",2);on([v()],es.prototype,"on",2);es=on([V("group-chart")],es);var _1=Object.defineProperty,k1=Object.getOwnPropertyDescriptor,P1=(r,e,t,i)=>{for(var s=i>1?void 0:i?k1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_1(e,t,s),s};let Gl=class extends ft{constructor(){super(...arguments),this.container=pe()}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(e){const t=this.getContainer();if(t!==void 0)e.mountToDom(t),e.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(e){var t;if(super.updated(e),e.has("file")){const i=e.get("file"),s=this.file;i===void 0&&s!==void 0&&this.container.value&&this.file&&((t=this.file.dom)==null?void 0:t.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var s,n;const e=this.loading===!1&&this.failure!==void 0,t=this.loading===!1&&this.file!==void 0,i={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":t,"is-error":e};return p`
            <div ${ye(this.container)} class=${Xt(i)} part="file-canvas-container">
            
                ${this.loading===!0?p`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:e===!0?p`<div class="error-wrapper">
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
                        </div>`:C}
            
            </div>

            <slot name="tour"></slot>
        
        `}};Gl.styles=ae`

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
    `;Gl=P1([V("file-canvas")],Gl);var O1=Object.defineProperty,A1=Object.getOwnPropertyDescriptor,E1=(r,e,t,i)=>{for(var s=i>1?void 0:i?A1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&O1(e,t,s),s};let Vl=class extends ft{onInstanceCreated(r){}onFailure(r){}render(){return this.file?p`
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
        `:C}};Vl.styles=ae`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Vl=E1([V("file-share-button")],Vl);var D1=Object.defineProperty,L1=Object.getOwnPropertyDescriptor,R1=(r,e,t,i)=>{for(var s=i>1?void 0:i?L1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&D1(e,t,s),s};let Yl=class extends ft{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?p`
            <thermal-dialog label=${x(w.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${x(w.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${Dt(this.renderRow(x(w.thermalfilename),this.file.fileName))}

                        ${Dt(this.renderDownloadRow(x(w.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,x(w.thermalfiledownload)))}

                        ${this.file.visibleUrl?Dt(this.renderDownloadRow(x(w.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,x(w.visiblefiledownload))):C}

                        ${Dt(this.renderRow(x(w.time),ht.human(this.file.timestamp)))}

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
                        <td><ul>${this.file.reader.parser.devices.map(r=>p`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:C}};Yl.styles=ae`

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
    
    `;Yl=R1([V("file-info-button")],Yl);var T1=Object.defineProperty,M1=Object.getOwnPropertyDescriptor,To=(r,e,t,i)=>{for(var s=i>1?void 0:i?M1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&T1(e,t,s),s};let Vs=class extends ft{constructor(){super(...arguments),this.tourableElementRef=pe(),this.pngWidth=1350,this.hasGraphs=!1}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(r){r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasGraphs=e})}onFailure(){}render(){return this.file===void 0?C:p`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${ye(this.tourableElementRef)}>
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

                    ${this.file.timeline.isSequence?p`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${x(w.convertentiresequencetovideo)}</thermal-button>
                        </div>`:C}

                    ${this.hasGraphs===!0?p`<div slot="option">
                            <thermal-button @click=${()=>{var r;return(r=this.file)==null?void 0:r.analysisData.downloadData()}}>${x(w.csvofanalysisdata)}</thermal-button>
                        </div>`:C}
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `}};Vs.styles=ae`

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
    
    `;To([le({context:tn,subscribe:!0})],Vs.prototype,"pngWidth",2);To([le({context:rn,subscribe:!0})],Vs.prototype,"pngFs",2);To([v()],Vs.prototype,"hasGraphs",2);Vs=To([V("file-download-dropdown")],Vs);const Qa=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:$e(r,"m:ss")}),I1=(r,e,t,i)=>{const s=[];let n=1;const a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(Qa(o,i,"minor")),n+=1}return e<i&&s.push(Qa(e,i,"major")),s},kl=60*1e3,ds=50,Rs=3,ql=(r,e)=>{const t=Math.floor(r/ds),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=kl;for(;o<e;)I1(o,l,n,e).forEach(h=>a.push(h)),o+=kl,l+=kl;return a.push(Qa(0,e,"bound")),a.push(Qa(e,e,"bound")),a},U1=r=>p`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,Cd=(r,e,t)=>p`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,wp=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return p`<div class="ticks">
        
        ${e.map(U1)}

        ${Cd(s,$e(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?Cd(n,$e(i,"m:ss:SSS"),"pointer"):C}

    </div>`},xp=ae`

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
            width: ${ds}px;
            left: -${ds/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${Rs}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${ds/2}px;
            padding-right: ${ds/2}px;
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
                top: -${Rs}px;
            }

            .tick-pointer {
                width: ${Rs*2}px;
                height: ${Rs*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${Rs}px;
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
            height: ${Rs}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${ds}px;
            position: relative;
            left: -${ds/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var z1=Object.defineProperty,F1=Object.getOwnPropertyDescriptor,vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?F1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&z1(e,t,s),s};let zt=class extends ft{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=pe(),this.barRef=pe(),this.containerRef=pe(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.markers=[],this.collapsed=!1,this.ticks=[]}getTourableRoot(){return this.containerRef.value}onInstanceCreated(r){this.containerRef.value&&(this.ticks=ql(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=ql(t.contentRect.width,this.file.duration)),t.contentRect.width<zt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return C;if(r.duration===0)return C;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return p`
            <div class="${Xt(e)}" ${ye(this.containerRef)}>


                ${r!==void 0?p`

                        <div class="ticks-horizontal-indent">

                            <notation-timeline></notation-timeline>


                            <div class="${Xt(s)}"  ${ye(this.timelineRef)}>

                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${ye(this.barRef)}></div>
                                    ${this.cursor?p`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(a=>p`<file-marker-timeline start=${a.fromMs} end=${a.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>


                            ${this.currentFrame?wp(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):C}

                            


                            ${this.hasPlayButton===!0?p`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${x(w.prev)}</thermal-button>


                                        <button class="${Xt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


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

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${x(w.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${x(w.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                </div>

                                `:C}

                            
                        </div>
                    `:C}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?p`<div class="small real ${this.collapsed?"collapsed":""}">
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
                    </div>`:C}

            <slot name="tour"></slot>

          `}};zt.collapseWidth=500;zt.styles=ae`
    
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

        ${xp}


        .controls {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }
    
    `;vr([le({context:Ao,subscribe:!0}),v()],zt.prototype,"playing",2);vr([le({context:Qn,subscribe:!0}),v()],zt.prototype,"currentFrame",2);vr([le({context:_h,subscribe:!0}),v()],zt.prototype,"duration",2);vr([le({context:lp,subscribe:!0}),v()],zt.prototype,"mayStop",2);vr([le({context:Ch,subscribe:!0})],zt.prototype,"cursor",2);vr([le({context:op,subscribe:!0})],zt.prototype,"cursorSetter",2);vr([d({type:String,reflect:!0})],zt.prototype,"hasPlayButton",2);vr([d({type:String,reflect:!0})],zt.prototype,"hasInfo",2);vr([d({type:String,reflect:!0})],zt.prototype,"interactive",2);vr([le({context:Oh,subscribe:!0})],zt.prototype,"markers",2);vr([v()],zt.prototype,"collapsed",2);vr([v()],zt.prototype,"ticks",2);vr([v()],zt.prototype,"pointerMs",2);zt=vr([V("file-timeline")],zt);var j1=Object.defineProperty,N1=Object.getOwnPropertyDescriptor,Lh=(r,e,t,i)=>{for(var s=i>1?void 0:i?N1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&j1(e,t,s),s};let Ln=class extends ft{constructor(){super(...arguments),this.enabled="on",this.playbackSpeed=1}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return this.file===void 0?C:p`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option" style="font-size: calc( var(--thermal-fs-sm) * .9);">${x(w.playbackspeed)}</div>

                    ${Object.entries(wu).map(([r])=>p`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof Oi&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Ln.styles=ae`

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
    
    `;Lh([d({type:String,reflect:!0})],Ln.prototype,"enabled",2);Lh([le({context:kh,subscribe:!0}),v()],Ln.prototype,"playbackSpeed",2);Ln=Lh([V("file-playback-speed-dropdown")],Ln);var W1=Object.defineProperty,H1=Object.getOwnPropertyDescriptor,Rh=(r,e,t,i)=>{for(var s=i>1?void 0:i?H1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&W1(e,t,s),s};let Rn=class extends ft{constructor(){super(...arguments),this.container=pe()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return p`
            <div class="container">
            
                <video ${ye(this.container)} preload="metadata">

                    ${this.url===void 0?C:p`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Rn.styles=ae`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Rh([le({context:Qn,subscribe:!0}),v()],Rn.prototype,"currentFrame",2);Rh([d({type:String,reflect:!0,attribute:!0})],Rn.prototype,"url",2);Rn=Rh([V("file-video")],Rn);const B1=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),$e(t,"mm:ss:SSS")},G1=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var V1=Object.defineProperty,Y1=Object.getOwnPropertyDescriptor,fi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Y1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&V1(e,t,s),s};const Th={fromAttribute:r=>r===null?null:G1(r),toAttribute:r=>r===null?null:B1(r)};let qr=class extends ft{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return C}};fi([le({context:Ao,subscribe:!0}),v()],qr.prototype,"playing",2);fi([le({context:Oo,subscribe:!0}),v()],qr.prototype,"ms",2);fi([d({type:String,reflect:!0,attribute:!0})],qr.prototype,"label",2);fi([d({type:String,reflect:!0,attribute:!0,converter:Th})],qr.prototype,"start",2);fi([d({type:String,reflect:!0,attribute:!0,converter:Th})],qr.prototype,"end",2);fi([d({type:String,reflect:!0,attribute:!0,converter:Th})],qr.prototype,"dur",2);fi([d({type:String,reflect:!0,attribute:!0})],qr.prototype,"active",2);fi([d({type:String,reflect:!0,attribute:!0})],qr.prototype,"pauseOnActivate",2);fi([d({type:String,reflect:!0,attribute:!0})],qr.prototype,"say",2);qr=fi([V("file-marker")],qr);var q1=Object.defineProperty,X1=Object.getOwnPropertyDescriptor,$s=(r,e,t,i)=>{for(var s=i>1?void 0:i?X1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&q1(e,t,s),s};let Li=class extends ft{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return p`

            <div class="${Xt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Li.styles=ae`
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


    `;$s([le({context:_h,subscribe:!0}),v()],Li.prototype,"duration",2);$s([le({context:Qn,subscribe:!0}),v()],Li.prototype,"currentFrame",2);$s([le({context:Oo,subscribe:!0}),v()],Li.prototype,"ms",2);$s([d({type:Number,reflect:!0,attribute:!0})],Li.prototype,"start",2);$s([d({type:Number,reflect:!0,attribute:!0})],Li.prototype,"end",2);$s([v()],Li.prototype,"active",2);Li=$s([V("file-marker-timeline")],Li);var K1=Object.defineProperty,Z1=Object.getOwnPropertyDescriptor,Sp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Z1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&K1(e,t,s),s};let eo=class extends ft{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return p`
            <div>


            ${this.markers.map(r=>r.active?p`<div class="item">
                    <h2>${r.label}</h2>
                    ${Dt(r.innerHTML)}
                    </div>`:C)}

            
            
            </div>

          `}};eo.styles=ae`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Sp([le({context:Oh,subscribe:!0})],eo.prototype,"markers",2);eo=Sp([V("file-marks-content")],eo);var J1=Object.defineProperty,Q1=Object.getOwnPropertyDescriptor,Mh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Q1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&J1(e,t,s),s};let Tn=class extends ft{getTourableRoot(){}onInstanceCreated(){}onFailure(){}render(){if(this.file===void 0)return C;if(this.label!==void 0)return this.label;if(this.grouping!==void 0)switch(this.grouping){case"hours":case"days":return $e(this.file.timestamp,"HH:mm");case"weeks":case"months":case"years":return ht.human(this.file.timestamp);default:return ht.human(this.file.timestamp)}return this.file.fileName}};Tn.styles=ae`
        :host {
            display: contents;
        }
    `;Mh([d({type:String})],Tn.prototype,"grouping",2);Mh([d({type:String})],Tn.prototype,"label",2);Tn=Mh([V("file-label")],Tn);var ew=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,Ih=(r,e,t,i)=>{for(var s=i>1?void 0:i?tw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ew(e,t,s),s};let Mn=class extends Xe{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return p`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Mn.styles=ae`

    
    `;Ih([d()],Mn.prototype,"analysis",2);Ih([v()],Mn.prototype,"name",2);Mn=Ih([V("analysis-name")],Mn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Uh(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var rw=Object.defineProperty,iw=Object.getOwnPropertyDescriptor,zh=(r,e,t,i)=>{for(var s=i>1?void 0:i?iw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rw(e,t,s),s};let In=class extends Xe{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return p`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?C:p`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Uh(Ea,r=>p`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};In.styles=ae`

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
    
    `;zh([d()],In.prototype,"analysis",2);zh([v()],In.prototype,"color",2);In=zh([V("analysis-color")],In);var sw=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,jr=(r,e,t,i)=>{for(var s=i>1?void 0:i?nw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sw(e,t,s),s};let fr=class extends Xe{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return p`

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
    
        
        `}};fr.styles=ae`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;jr([d()],fr.prototype,"analysis",2);jr([v()],fr.prototype,"color",2);jr([v()],fr.prototype,"top",2);jr([v()],fr.prototype,"left",2);jr([v()],fr.prototype,"width",2);jr([v()],fr.prototype,"height",2);jr([v()],fr.prototype,"type",2);jr([v()],fr.prototype,"right",2);jr([v()],fr.prototype,"bottom",2);jr([v()],fr.prototype,"maxX",2);jr([v()],fr.prototype,"maxY",2);fr=jr([V("edit-area")],fr);var aw=Object.defineProperty,ow=Object.getOwnPropertyDescriptor,ln=(r,e,t,i)=>{for(var s=i>1?void 0:i?ow(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&aw(e,t,s),s};let ts=class extends Xe{constructor(){super(...arguments),this.topInputRef=pe(),this.leftInputRef=pe()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return p`

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
        
        `}};ts.styles=ae`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;ln([d()],ts.prototype,"analysis",2);ln([v()],ts.prototype,"top",2);ln([v()],ts.prototype,"left",2);ln([v()],ts.prototype,"maxX",2);ln([v()],ts.prototype,"maxY",2);ts=ln([V("edit-point")],ts);var lw=Object.defineProperty,hw=Object.getOwnPropertyDescriptor,Mo=(r,e,t,i)=>{for(var s=i>1?void 0:i?hw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lw(e,t,s),s};let Un=class extends Xe{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return p`

            <thermal-dialog label="${x(w.editsth,{what:x(w[this.type])})}">
                <slot name="invoker" slot="invoker">
                    <thermal-button>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                            <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                        </svg>
                    </thermal-button>
                </slot>

                <div slot="content">
                    ${this.analysis instanceof wr?p`<edit-point .analysis=${this.analysis}></edit-point>`:p`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Mo([d()],Un.prototype,"analysis",2);Mo([v()],Un.prototype,"name",2);Mo([v()],Un.prototype,"type",2);Un=Mo([V("file-analysis-edit")],Un);var cw=Object.defineProperty,dw=Object.getOwnPropertyDescriptor,Or=(r,e,t,i)=>{for(var s=i>1?void 0:i?dw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cw(e,t,s),s};let Qt=class extends ft{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=pe(),this.graphRef=pe(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}getTourableRoot(){throw new Error("Method not implemented.")}onInstanceCreated(r){this.graphs=r.analysisData.value,r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.graphs=this.file.analysisData.value,this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){var r;return((r=this.file)==null?void 0:r.timeline.isSequence)===!1?C:p`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&p`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&p`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${ye(this.container)} style="height: 100%; ">
                ${this.graphs.colors.length>0?p`<thermal-chart 
                        ${ye(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:x(w.time),format:"m:ss:SSS"},vAxis:{title:x(w.temperature)+" °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:C}
            </div>

            

            </div>
        
        `}};Qt.styles=ae`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Or([v()],Qt.prototype,"hydrated",2);Or([d({reflect:!0})],Qt.prototype,"graphWidth",2);Or([d({reflect:!0})],Qt.prototype,"graphHeight",2);Or([v()],Qt.prototype,"graphs",2);Or([le({context:Qn,subscribe:!0})],Qt.prototype,"currentFrame",2);Or([le({context:Ch,subscribe:!0})],Qt.prototype,"cursor",2);Or([le({context:op,subscribe:!0})],Qt.prototype,"cursorSetter",2);Or([v()],Qt.prototype,"shadowLeft",2);Or([v()],Qt.prototype,"shadowTop",2);Or([v()],Qt.prototype,"shadowWidth",2);Or([v()],Qt.prototype,"shadowHeight",2);Or([le({context:xo,subscribe:!0})],Qt.prototype,"graphSmooth",2);Qt=Or([V("file-analysis-graph")],Qt);const Jr="interactive-analysis-context";var uw=Object.defineProperty,pw=Object.getOwnPropertyDescriptor,Qr=(r,e,t,i)=>{for(var s=i>1?void 0:i?pw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&uw(e,t,s),s};let $r=class extends Xe{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&(t.onDeselected.delete(this.UUID),t.onSelected.delete(this.UUID),t.onValues.delete(this.UUID),t.onMoveOrResize.delete(this.UUID),t.graph.onGraphActivation.delete(this.UUID),t.onSetInitialColor.delete(this.UUID),t.onSetName.delete(this.UUID));const i=this.analysis;this.name=i.name,this.selected=i.selected,this.color=i.initialColor;const s=n=>n instanceof cr?i.width+"x"+i.height:"1x1";this.dimension=s(i),this.value={min:i.min,max:i.max,avg:i.avg},i.file.timeline.isSequence?this.may=i instanceof wr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:i.graph.state.MIN,max:i.graph.state.MAX,avg:i.graph.state.AVG},i.onSerializableChange.set(this.UUID,n=>{this.dimension=s(n)}),i.onValues.set(this.UUID,(n,a,o)=>{this.value={min:n,max:a,avg:o}}),i.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{this.graph={min:n,max:a,avg:o}}),i.onSelected.set(this.UUID,()=>{this.selected=!0}),i.onDeselected.set(this.UUID,()=>{this.selected=!1}),i.onSetInitialColor.set(this.UUID,n=>{this.color=n}),i.onSetName.set(this.UUID,n=>{this.name=n})}}valueOrNothing(e){return e===void 0?"-":e.toFixed(2)+" °C"}renderCell(e,t,i,s){return p`
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
            ${this.interactiveanalysis===!0?p`<u aria-hidden="true"></u>`:C}
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
                            ${x(w.range)}
                        </thermal-button>`:C}

            -->
            

        
        </td>`:C}
        
        `}};$r.styles=ae`
    
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

    `;Qr([d()],$r.prototype,"analysis",2);Qr([le({context:Jr,subscribe:!0})],$r.prototype,"interactiveanalysis",2);Qr([v()],$r.prototype,"value",2);Qr([v()],$r.prototype,"graph",2);Qr([v()],$r.prototype,"may",2);Qr([v()],$r.prototype,"dimension",2);Qr([v()],$r.prototype,"color",2);Qr([d({type:Boolean,reflect:!0,attribute:!0})],$r.prototype,"selected",2);Qr([v()],$r.prototype,"name",2);Qr([le({context:Jn,subscribe:!0})],$r.prototype,"setRegistryHighlight",2);$r=Qr([V("file-analysis-table-row")],$r);var fw=Object.defineProperty,gw=Object.getOwnPropertyDescriptor,sa=(r,e,t,i)=>{for(var s=i>1?void 0:i?gw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fw(e,t,s),s};let ys=class extends ft{constructor(){super(...arguments),this.container=pe(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(e){console.log(e)}onInstanceCreated(e){this.hydrate(e)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(e){super.updated(e),e.has("file")&&this.file&&this.hydrate(this.file)}hydrate(e){e.analysis.addListener(this.UUID,t=>{this.analysis=t}),e.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length}),e.analysisData.onGraphsPresence.set(this.UUID,t=>{this.hasHighlightedData=t}),this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length,this.analysis=e.analysis.value,this.hasHighlightedData=e.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?C:p`

        <div class="overflow" ${ye(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var e,t;this.allSelected?(e=this.file)==null||e.analysis.layers.deselectAll():(t=this.file)==null||t.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?p`<u aria-hidden="true"></u>`:C}
                            <span>${x(w.analysis)}</span>
                            ${this.hasHighlightedData?p`<button @click=${()=>{var e;(e=this.file)==null||e.analysisData.downloadData()}} title=${x(w.downloadgraphdataascsv)}>CSV</button>`:C}
                        </th>
                        <th>${x(w.avg)}</th>
                        <th>${x(w.min)}</th>
                        <th>${x(w.max)}</th>
                        <th>${x(w.size)}</th>
                        ${this.interactiveanalysis===!0?p`<th></th>`:C}
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(e=>p`
                            <file-analysis-table-row
                                .analysis=${e}
                            ></file-analysis-table-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};ys.styles=ae`
    
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

        



    `;sa([le({context:Jr,subscribe:!0}),d()],ys.prototype,"interactiveanalysis",2);sa([v()],ys.prototype,"analysis",2);sa([v()],ys.prototype,"allSelected",2);sa([v()],ys.prototype,"hasHighlightedData",2);ys=sa([V("file-analysis-table")],ys);var mw=Object.defineProperty,vw=Object.getOwnPropertyDescriptor,na=(r,e,t,i)=>{for(var s=i>1?void 0:i?vw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mw(e,t,s),s};let bs=class extends ft{constructor(){super(...arguments),this.container=pe(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}renderHeader(){return p`<tr>
            <td>${x(w.analysis)}</td>
            <td>${x(w.min)}</td>
            <td>${x(w.max)}</td>
            <td>${x(w.avg)}</td>
        </tr>`}renderRow(r){var e,t,i;return p`<tr>
            <td>
                ${r.name}
                <file-analysis-edit .analysis=${r}></file-analysis-edit>
            </td>
            <td>${(e=r.min)==null?void 0:e.toFixed(2)}</td>
            <td>${(t=r.max)==null?void 0:t.toFixed(2)}</td>
            <td>${(i=r.avg)==null?void 0:i.toFixed(2)}</td>
        </tr>`}render(){return this.analysis.length===0||this.file===void 0?C:p`

        <div class="overflow" ${ye(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <!--

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?p`<u aria-hidden="true"></u>`:C}
                            <span>${x(w.analysis)}</span>
                            ${this.hasHighlightedData?p`<button @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${x(w.downloadgraphdataascsv)}>CSV</button>`:C}
                        </th>
                        <th>${x(w.avg)}</th>
                        <th>${x(w.min)}</th>
                        <th>${x(w.max)}</th>
                        <th>${x(w.size)}</th>
                        ${this.interactiveanalysis===!0?p`<th></th>`:C}
                    </tr>

                    -->

                    ${this.renderHeader()}
                
                </thead>

                <tbody>

                    ${this.analysis.map(r=>p`
                    <file-analysis-overview-row
                        .analysis=${r}
                    ></file-analysis-overview-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};bs.styles=ae`
    
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

        



    `;na([le({context:Jr,subscribe:!0}),d()],bs.prototype,"interactiveanalysis",2);na([v()],bs.prototype,"analysis",2);na([v()],bs.prototype,"allSelected",2);na([v()],bs.prototype,"hasHighlightedData",2);bs=na([V("file-analysis-overview")],bs);var yw=Object.defineProperty,bw=Object.getOwnPropertyDescriptor,gi=(r,e,t,i)=>{for(var s=i>1?void 0:i?bw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yw(e,t,s),s};let Mr=class extends Xe{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof cr?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof wr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return p`
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

                ${this.interactiveanalysis===!0?p`<u aria-hidden="true"></u>`:C}
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
        ${this.renderCell(this.value.min,this.analysis instanceof cr,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min),this.log("Graph analysis min",this.graph.min)})}
        ${this.renderCell(this.value.max,this.analysis instanceof cr,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}

         ${this.renderCell(this.value.avg,!0,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}

        <!--
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?p`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${x(w.remove)}</thermal-button>
        </td>`:C}

        -->
        
        `}};Mr.styles=ae`
    
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

    `;gi([d()],Mr.prototype,"analysis",2);gi([le({context:Jr,subscribe:!0})],Mr.prototype,"interactiveanalysis",2);gi([v()],Mr.prototype,"value",2);gi([v()],Mr.prototype,"graph",2);gi([v()],Mr.prototype,"may",2);gi([v()],Mr.prototype,"dimension",2);gi([v()],Mr.prototype,"color",2);gi([d({type:Boolean,reflect:!0,attribute:!0})],Mr.prototype,"selected",2);gi([v()],Mr.prototype,"name",2);Mr=gi([V("file-analysis-overview-row")],Mr);var ww=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,zi=(r,e,t,i)=>{for(var s=i>1?void 0:i?xw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ww(e,t,s),s};let Xr=class extends ft{constructor(){super(...arguments),this.mayHaveGraph=!1,this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1,this.graphRef=pe(),this.graphWidth=0,this.graphHeight=0}onInstanceCreated(r){this.mayHaveGraph=r.timeline.isSequence,r.analysis.layers.onAdd.set(this.UUID,e=>{var i,s;this.hasAnalysis===!1&&(this.hasAnalysis=!0);const t=()=>{this.isDrawingAnalysis=!1};(s=(i=e.file.dom)==null?void 0:i.listenerLayer)==null||s.getLayerRoot().addEventListener("pointerup",t),e.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{if(n||a||o)this.hasGraph=!0;else{const l=e.file.analysis.value.reduce((h,f)=>h===!0?h:f.graph.state.MIN||f.graph.state.MAX||f.graph.state.AVG,!1);this.hasGraph=l}})}),r.analysis.layers.onRemove.set(this.UUID,()=>{this.hasAnalysis===!0&&r.analysis.layers.size===0&&(this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1)})}onFailure(){}getTourableRoot(){}updated(r){super.updated(r),r.has("hasGraph")&&(this.observer&&this.graphRef.value&&(this.observer.unobserve(this.graphRef.value),delete this.observer),this.graphRef.value&&this.hasGraph===!0&&(this.observer=new ResizeObserver(e=>{const t=e[0];t!==void 0&&(this.graphWidth=t.contentRect.width,this.graphHeight=t.contentRect.height)}),this.observer.observe(this.graphRef.value)))}renderButtons(){const r=this.file!==void 0?Object.values(this.file.group.tool.tools).filter(e=>e instanceof uo):[];return p`
            <div class="buttons">
                ${r.map(e=>p`
                            <thermal-button @click=${()=>{var t;this.isDrawingAnalysis=!0,(t=this.file)==null||t.group.tool.selectTool(e)}}>
                                <div style="display: flex; align-items: center; gap: 10px">
                                    <div style="width: 1.5em; display: inline-block;">${Dt(e.icon)}</div>
                                    <div>${x(w[e.name])}</div>
                                </div>
                            </thermal-button>
                        `)}
            </div>
        
        `}renderCurrentTooltip(){return p`${x(w[this.manager.tool.value.description])}`}renderAddAnalysis(){return p`<div class="addanalysis">

            <div>
                <strong>${x(w.analysis)}</strong>
            </div>

            <div>${x(w.analysishint)}</div>

            ${this.isDrawingAnalysis===!0?this.renderCurrentTooltip():this.renderButtons()}
        </div>`}renderGraph(){return this.mayHaveGraph?this.hasGraph===!0?p`<div class="graph" ${ye(this.graphRef)}>
                <file-analysis-graph graphWidth=${this.graphWidth} graphHeight=${this.graphHeight}></file-analysis-graph>
            </div>`:this.hasAnalysis===!0?p`<div class="graph graph-prompt">
                    <div>
                        <strong>${x(w.graph)}</strong>
                    </div>
                    <div class="hint">${Dt(x(w.graphhint2))}</div>
                </div>`:p`<div class="graph graph-prompt">
                    <div>
                        <strong>${x(w.graph)}</strong>
                    </div>
                    <div class="hint">${x(w.graphhint1)}</div>
                </div>`:C}render(){return p`
            <div class="container ${this.mayHaveGraph===!0?"may":"may-not"}">

            <div class="analysis">
                ${this.hasAnalysis===!1||this.isDrawingAnalysis===!0?this.renderAddAnalysis():p`<file-analysis-table></file-analysis-table>`}
            </div>
            ${this.renderGraph()}

            </div>

        `}};Xr.styles=ae`

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
    
    `;zi([v()],Xr.prototype,"mayHaveGraph",2);zi([v()],Xr.prototype,"hasAnalysis",2);zi([v()],Xr.prototype,"isDrawingAnalysis",2);zi([v()],Xr.prototype,"hasGraph",2);zi([v()],Xr.prototype,"graphRef",2);zi([v()],Xr.prototype,"graphWidth",2);zi([v()],Xr.prototype,"graphHeight",2);zi([v()],Xr.prototype,"observer",2);Xr=zi([V("file-analysis-complex")],Xr);var Sw=Object.defineProperty,$w=Object.getOwnPropertyDescriptor,Cw=(r,e,t,i)=>{for(var s=i>1?void 0:i?$w(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sw(e,t,s),s};let _d=class extends vs{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};_d=Cw([V("file-download-lrc")],_d);var _w=Object.defineProperty,kw=Object.getOwnPropertyDescriptor,Fh=(r,e,t,i)=>{for(var s=i>1?void 0:i?kw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_w(e,t,s),s};let to=class extends vs{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs})}getDefaultLabel(){return"png"}};Fh([le({context:tn,subscribe:!0})],to.prototype,"pngWidth",2);Fh([le({context:rn,subscribe:!0})],to.prototype,"pngFs",2);to=Fh([V("file-download-png")],to);var Pw=Object.defineProperty,Ow=Object.getOwnPropertyDescriptor,aa=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ow(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pw(e,t,s),s};let Ys=class extends vs{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};aa([d({type:String})],Ys.prototype,"label",2);aa([d({type:Object})],Ys.prototype,"onEnter",2);aa([d({type:Object})],Ys.prototype,"onLeave",2);aa([d({type:Object})],Ys.prototype,"onAction",2);Ys=aa([V("file-button")],Ys);var Aw=Object.defineProperty,Ew=Object.getOwnPropertyDescriptor,$p=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ew(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Aw(e,t,s),s};let Xl=class extends vs{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&(this.log(this.file.min,this.file.max),this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max}))}getDefaultLabel(){return x(w.range).toLowerCase()}};$p([le({context:Jn,subscribe:!0})],Xl.prototype,"setter",2);Xl=$p([V("file-range-propagator")],Xl);var Dw=Object.defineProperty,Lw=Object.getOwnPropertyDescriptor,jh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Lw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Dw(e,t,s),s};let zn=class extends Xe{constructor(){super(...arguments),this.expanded=!1}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}updated(r){super.updated(r),r.has("expanded")&&(this.expanded===!0?this.classList.add("expanded"):this.classList.remove("expanded"))}render(){return p`
            <div class="backdrop" @click=${()=>this.collapse()}></div>
            <div class="container">
                <button class="default" @click=${()=>{this.toggle()}}>${this.label??"..."}</button>
                <nav class="dropdown">
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
        `}};zn.styles=ae`
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



    `;jh([d({type:String,reflect:!0})],zn.prototype,"label",2);jh([v()],zn.prototype,"expanded",2);zn=jh([V("file-dropdown")],zn);const Xh=class Xh extends ft{constructor(){super(...arguments),this.tabIndex=1}onInstanceCreated(){}onFailure(){}getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.action.bind(this)),this.addEventListener("mouseenter",this.enter.bind(this)),this.addEventListener("mouseleave",this.leave.bind(this)),this.addEventListener("focus",this.enter.bind(this)),this.addEventListener("blur",this.leave.bind(this))}render(){return p`
            <button id="${this.UUID}" tabindex="0">${this.getIcon()}</button>
            <div class="label">
                <label class="label-inner" for="#${this.UUID}">${this.getLabel()}</label>
            </div>
        `}};Xh.styles=ae`
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

    `;let ro=Xh;var Rw=Object.defineProperty,Tw=Object.getOwnPropertyDescriptor,Cp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rw(e,t,s),s};let Kl=class extends ro{enter(){}action(){this.onaction&&this.file&&this.onaction(this.file)}leave(){}getLabel(){return x(w.detail)}getIcon(){return p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
        </svg>`}};Cp([d({type:Object})],Kl.prototype,"onaction",2);Kl=Cp([V("file-detail-icon")],Kl);var Mw=Object.defineProperty,Iw=Object.getOwnPropertyDescriptor,_p=(r,e,t,i)=>{for(var s=i>1?void 0:i?Iw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mw(e,t,s),s};let Zl=class extends ro{enter(){}action(){this.file&&(this.file.group.registry.opacity.value===1?this.file.group.registry.opacity.imposeOpacity(0):this.file.group.registry.opacity.imposeOpacity(1))}leave(){}getLabel(){return x(w.togglevisibleimage)}getIcon(){return p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
        </svg>`}render(){return this.file===void 0||this.file.visibleUrl===void 0?C:super.render()}};_p([d({type:Object})],Zl.prototype,"onaction",2);Zl=_p([V("file-opacity-icon")],Zl);var Uw=Object.defineProperty,zw=Object.getOwnPropertyDescriptor,Io=(r,e,t,i)=>{for(var s=i>1?void 0:i?zw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Uw(e,t,s),s};let qs=class extends ft{onInstanceCreated(e){}onFailure(e){}getTourableRoot(){}render(){return p`

            <header>
                <h2><file-label label="${ee(this.label)}" grouping="${ee(this.grouping)}"></file-label></h2>
                <div>
                    <file-opacity-icon></file-opacity-icon>
                    <file-detail-icon .onaction=${ee(this.ondetail)}></file-detail-icon>
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
        
    `}};qs.styles=ae`
    
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
    
    `;Io([d({type:Object})],qs.prototype,"ondetail",2);Io([d({type:String})],qs.prototype,"label",2);Io([d({type:String})],qs.prototype,"grouping",2);qs=Io([V("file-thumbnail")],qs);var Fw=Object.defineProperty,jw=Object.getOwnPropertyDescriptor,Uo=(r,e,t,i)=>{for(var s=i>1?void 0:i?jw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fw(e,t,s),s};let Xs=class extends ft{onInstanceCreated(r){}onFailure(r){}getTourableRoot(){}render(){return p`

            <header>
                <thermal-button variant="foreground" @click=${()=>{this.onback&&this.onback()}}>x</thermal-button>

                ${this.label!==void 0?p`
                    <thermal-button variant="background" interactive="false">${this.label}</thermal-button>
                `:C}

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
        
    `}};Xs.styles=ae`
    
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
    
    `;Uo([d({type:Object})],Xs.prototype,"onback",2);Uo([d({type:String})],Xs.prototype,"label",2);Uo([d({type:String})],Xs.prototype,"grouping",2);Xs=Uo([V("file-detail")],Xs);var Nw=Object.defineProperty,Ww=Object.getOwnPropertyDescriptor,mi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ww(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nw(e,t,s),s};let Ir=class extends ft{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!1}getTourableRoot(){}onInstanceCreated(r){this.recorded=ht.human(r.timestamp)}onFailure(){}render(){return p`
        <thermal-app author=${ee(this.author)} recorded=${ee(this.recorded)} license=${ee(this.license)} showfullscreen="true">

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?p`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:C}
          
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

                  ${this.file&&this.file.timeline.isSequence?p` <thermal-field 
                    label="${x(w.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:C}

                  ${this.file&&this.file.timeline.isSequence?p` <thermal-field 
                    label="${x(w.graphlines)}"
                    hint=${x(w.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:C}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?p`<file-share-button ></file-share-button>`:C}
            
              ${this.showabout===!0?p`<app-info-button ></app-info-button>`:C}

            </thermal-bar>
          </div>
            ${this.interactiveanalysis===!0?p`<group-tool-buttons slot="pre"></group-tool-buttons>`:C}
            
            ${this.showhistogram===!0?p`<registry-histogram slot="pre"></registry-histogram>`:C}

            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?p`<file-analysis-graph slot="post"></file-analysis-graph>`:C}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};Ir.styles=ae`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;mi([d({type:String,reflect:!0,attribute:!0,converter:Be(!1)})],Ir.prototype,"showembed",2);mi([d({type:String,reflect:!0,attribute:!0,converter:Be(!1)})],Ir.prototype,"showabout",2);mi([d({type:String,reflect:!0,attribute:!0,converter:Be(!1)})],Ir.prototype,"showfullscreen",2);mi([d({type:String,reflect:!0,converter:Be(!0)})],Ir.prototype,"showhistogram",2);mi([le({context:Jr,subscribe:!0})],Ir.prototype,"interactiveanalysis",2);mi([d()],Ir.prototype,"author",2);mi([d()],Ir.prototype,"recorded",2);mi([d()],Ir.prototype,"license",2);mi([d()],Ir.prototype,"label",2);Ir=mi([V("file-app")],Ir);var Hw=Object.defineProperty,it=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Hw(e,t,s),s};class Ze extends Xe{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=pe()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners(),ss(this)}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}it([d({type:String,reflect:!0})],Ze.prototype,"url");it([d({type:String,reflect:!0})],Ze.prototype,"visible");it([d({type:String,reflect:!0,attribute:!0})],Ze.prototype,"palette");it([d({type:Number,reflect:!0,attribute:!0})],Ze.prototype,"opacity");it([d({type:Number,reflect:!0})],Ze.prototype,"from");it([d({type:Number,reflect:!0})],Ze.prototype,"to");it([d()],Ze.prototype,"author");it([d()],Ze.prototype,"recorded");it([d()],Ze.prototype,"license");it([d()],Ze.prototype,"label");it([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],Ze.prototype,"showembed");it([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],Ze.prototype,"showabout");it([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],Ze.prototype,"showtutorial");it([d({type:String,reflect:!1,converter:Be(!0)})],Ze.prototype,"showfullscreen");it([d({type:String,reflect:!0,converter:Be(!0)})],Ze.prototype,"showhistogram");it([q({context:Jr}),d({type:String,reflect:!0,converter:Be(!0)})],Ze.prototype,"interactiveanalysis");it([d({type:String,reflect:!0})],Ze.prototype,"analysis1");it([d({type:String,reflect:!0})],Ze.prototype,"analysis2");it([d({type:String,reflect:!0})],Ze.prototype,"analysis3");it([d({type:String,reflect:!0})],Ze.prototype,"analysis4");it([d({type:String,reflect:!0})],Ze.prototype,"analysis5");it([d({type:String,reflect:!0})],Ze.prototype,"analysis6");it([d({type:String,reflect:!0})],Ze.prototype,"analysis7");it([d({type:String,reflect:!0})],Ze.prototype,"ms");it([d({type:String,reflect:!0})],Ze.prototype,"speed");it([d({type:String,reflect:!0})],Ze.prototype,"autoclear");it([v()],Ze.prototype,"hasGraph");it([v()],Ze.prototype,"hasAnalysis");it([v()],Ze.prototype,"isSequence");it([q({context:Ri}),d({reflect:!0,converter:ns})],Ze.prototype,"locale");var Bw=Object.defineProperty,Gw=Object.getOwnPropertyDescriptor,Vw=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bw(e,t,s),s};let kd=class extends Ze{render(){return this.url===""?C:p`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${ee(this.from)}
        to=${ee(this.to)}
        opacity=${ee(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}" autoclear=${this.autoclear}>

          <file-provider 
            thermal="${this.url}" 
            visible=${ee(this.visible)}
            analysis1=${ee(this.analysis1)}
            analysis2=${ee(this.analysis2)}
            analysis3=${ee(this.analysis3)}
            analysis4=${ee(this.analysis4)}
            analysis5=${ee(this.analysis5)}
            analysis6=${ee(this.analysis6)}
            analysis7=${ee(this.analysis7)}
            speed=${ee(this.speed)}
            autoclear=${this.autoclear}
          >

              <file-app 
                author=${ee(this.author)} 
                recorded=${ee(this.recorded)} 
                license=${ee(this.license)}
                label=${ee(this.label)}  
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


    
    `}};kd=Vw([V("thermal-file-app")],kd);class Yw{constructor(e){this.steps=e,this.onStepInternalActivation=new se}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class Nh{constructor(e){this._active=!1,this.onTourActivationStatus=new se,this.onStepActivation=new se,this.storage=new Yw(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new Nh(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var qw=Object.defineProperty,Xw=Object.getOwnPropertyDescriptor,jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qw(e,t,s),s};let At=class extends ft{constructor(){super(),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.showtutorial=!1,this.interactiveanalysis=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=pe(),this.contentContainerWidth=1e3,this.tourController=Nh.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=ht.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return p`


        <thermal-app author=${ee(this.author)} recorded=${ee(this.recorded)} license=${ee(this.license)} showfullscreen="true">

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar" tour="palette">
            <tour-step placement="right-start" label=${x(w.colourpalette)}>
              ${x(w.palettehint)}
            </tour-step>
          </registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?p`<registry-opacity-slider slot="bar" style="width:4rem" tour="opacity">
            <tour-step slot="tour" label="Visible image">
              Use the slider to show the visible image.
            </tour-step>
            </registry-opacity-slider>`:C}
          
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

                  ${this.file&&this.file.timeline.isSequence?p` <thermal-field 
                    label="${x(w.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:C}

                  ${this.file&&this.file.timeline.isSequence?p` <thermal-field 
                    label="${x(w.graphlines)}"
                    hint=${x(w.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:C}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown tour="download">
                <tour-step slot="tour" placement="left" label="Downloads">Zde si to stáhněte, vy volové</tour-step>
              </file-download-dropdown>
            
              ${this.showabout===!0?p`<app-info-button></app-info-button>`:C}

              ${this.showtutorial===!0?p`<thermal-button @click=${()=>this.tourController.activate(!1)}>
                ${x(w.tutorial)}
              </thermal-button>`:C}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${ye(this.contentContainerRef)}>

                ${this.interactiveanalysis===!0?p`
                  <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?p`<group-tool-bar tour="tools">
                    <tour-step slot="tour" placement="right-top" label="Analysis tools">
                        Select a tool and draw an analysis on the IR image.
                    </tour-step>
                  </group-tool-bar>`:p`<group-tool-buttons tour="tools">
                    <tour-step slot="tour" placement="right-top">
                      Select a tool and draw an analysis on the IR image.
                    </tour-step>
        </group-tool-buttons>`}
                </div>
                `:C}

                <div class="content-container__part content-container__left">

                ${this.showhistogram===!0?p`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:C}
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
                    ${this.hasAnalysis?p`<file-analysis-table></file-analysis-table>`:p`<div class="placeholder">
                        <div class="placeholder-title">${x(w.analysis)}</div>
                        <div>${x(w.analysishint)}</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?p`
                      <div>${x(w[(e=this.tool)==null?void 0:e.description])}</div>
                    `:p`
                      <div>
                        <thermal-button tourstepid="sth4" @click=${()=>this.group.tool.selectTool("add-point")}>${x(w.addpoint)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>${x(w.addrectangle)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>${x(w.addellipsis)}</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?p`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?p`<div class="placeholder">
                      <div class="placeholder-title">${x(w.graph)}</div>
                      <div>${this.hasAnalysis===!1?x(w.graphhint1):Dt(x(w.graphhint2))}</div>
                    </div>`:C}
                  
                  </div>
                  `:C}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>

        <notation-content></notation-content>
    `}};At.styles=ae`


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
  
  `;jt([d({type:String,reflect:!0,attribute:!0,converter:Be(!1)})],At.prototype,"showembed",2);jt([d({type:String,reflect:!0,attribute:!0,converter:Be(!1)})],At.prototype,"showabout",2);jt([d({type:String,reflect:!0,attribute:!0,converter:Be(!1)})],At.prototype,"showfullscreen",2);jt([d({type:Boolean,reflect:!0,converter:Be(!0)})],At.prototype,"showhistogram",2);jt([d({type:String,reflect:!1,attribute:!0})],At.prototype,"showtutorial",2);jt([le({context:Jr,subscribe:!0})],At.prototype,"interactiveanalysis",2);jt([v()],At.prototype,"hasAnalysis",2);jt([v()],At.prototype,"hasGraph",2);jt([v()],At.prototype,"tool",2);jt([v()],At.prototype,"isSequence",2);jt([d()],At.prototype,"author",2);jt([d()],At.prototype,"recorded",2);jt([d()],At.prototype,"license",2);jt([d()],At.prototype,"label",2);jt([q({context:Uu})],At.prototype,"tourController",2);jt([q({context:zu})],At.prototype,"tourStep",2);jt([v()],At.prototype,"contentContainerWidth",2);At=jt([V("desktop-app")],At);const Wh={fromAttribute:r=>{if(r){const e=r.split(":").map(Number);if(e.some(isNaN))return;if(e.length===3){const[t,i,s]=e;return t*6e4+i*1e3+s}else if(e.length===4){const[t,i,s,n]=e;return t*36e5+i*6e4+s*1e3+n}}},toAttribute:r=>{if(r!==void 0){const e=Math.floor(r/36e5),t=Math.floor(r%36e5/6e4),i=Math.floor(r%6e4/1e3),s=r%1e3,n=String(i).padStart(2,"0"),a=String(s).padStart(3,"0");return e>0?`${e}:${t}:${n}:${a}`:`${t}:${n}:${a}`}}};var Kw=Object.defineProperty,Zw=Object.getOwnPropertyDescriptor,vi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Kw(e,t,s),s};let Ur=class extends Xe{constructor(){super(...arguments),this._active=!1}get active(){return this._active}willUpdate(r){super.willUpdate(r),r.has("duration")&&this.from!==void 0&&this.duration!==void 0&&(this.to=this.from+this.duration),r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from),r.has("from")&&!r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from)}activate(){this._active===!1&&(this._active=!0)}deactivate(){this._active===!0&&(this._active=!1)}setMs(r){this.from!==void 0&&this.to!==void 0&&(r>=this.from&&r<this.to?this.activate():this.deactivate())}getRenderContent(){return Array.from(this.slotContent)}getTTSString(){}render(){return p`
            <slot style="display: none;"></slot>
        `}};vi([d({type:Number,reflect:!0,converter:Wh})],Ur.prototype,"from",2);vi([d({type:Number,reflect:!0,converter:Wh})],Ur.prototype,"to",2);vi([d({type:Number,reflect:!0,converter:Wh})],Ur.prototype,"duration",2);vi([d({type:String,reflect:!0})],Ur.prototype,"label",2);vi([d({type:String})],Ur.prototype,"image",2);vi([d({type:String,reflect:!0})],Ur.prototype,"say",2);vi([d({type:String,reflect:!0})],Ur.prototype,"color",2);vi([v()],Ur.prototype,"_active",2);vi([zr()],Ur.prototype,"slotContent",2);Ur=vi([V("notation-entry")],Ur);const zo="NotationListContext",Fo="NotationCurrentContext",jo="NotationDurationContext",Si=r=>r.filter(e=>e instanceof Ur),Hh=(r,e)=>{const t=[];for(const i of e.notationList)i.from!==void 0&&i.to!==void 0&&(i.from<=r&&i.to>r?(t.push(i),i.activate()):i.deactivate());return t};var Jw=Object.defineProperty,Qw=Object.getOwnPropertyDescriptor,Cs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jw(e,t,s),s};let rs=class extends Ze{constructor(){super(...arguments),this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observer=null}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges(),this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.add(this.UUID,e=>{this.duration=e.timeline.duration,e.timeline.addListener(this.UUID,t=>{this.updateNotationsMs(t)})})}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=Si(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=Si(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=Si(r.assignedElements())}))}updateNotationsMs(r){this.notationCurrent=Hh(r,this)}render(){return this.url===""?C:p`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${ee(this.from)}
        to=${ee(this.to)}
        opacity=${ee(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${ye(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${ee(this.visible)}
            analysis1=${ee(this.analysis1)}
            analysis2=${ee(this.analysis2)}
            analysis3=${ee(this.analysis3)}
            analysis4=${ee(this.analysis4)}
            analysis5=${ee(this.analysis5)}
            analysis6=${ee(this.analysis6)}
            analysis7=${ee(this.analysis7)}
            speed=${ee(this.speed)}
            autoclear=${this.autoclear}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${ee(this.author)} 
              recorded=${ee(this.recorded)} 
              license=${ee(this.license)}
              label=${ee(this.label)}
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


    
    `}};Cs([v()],rs.prototype,"ms",2);Cs([v(),zr({flatten:!0})],rs.prototype,"_notationSlot",2);Cs([v()],rs.prototype,"notations",2);Cs([v(),q({context:jo})],rs.prototype,"duration",2);Cs([v(),q({context:zo})],rs.prototype,"notationList",2);Cs([v(),q({context:Fo})],rs.prototype,"notationCurrent",2);rs=Cs([V("thermal-file-analyser")],rs);var ex=Object.defineProperty,tx=Object.getOwnPropertyDescriptor,Ar=(r,e,t,i)=>{for(var s=i>1?void 0:i?tx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ex(e,t,s),s};let er=class extends Xe{constructor(){super(...arguments),this.dropinRef=pe(),this.groupRef=pe(),this.loaded=!1,this.files=[],this.interactiveanalysis=!0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback(),cp().then(r=>this.ip=r)}firstUpdated(r){super.firstUpdated(r),ss(this),this.groupRef.value!==void 0&&this.groupRef.value.group.files.addListener(this.UUID,e=>{this.groupRef.value!==void 0&&(this.groupRef.value.group.analysisSync.turnOff(),e.length>0&&this.groupRef.value.group.analysisSync.turnOn(e[0])),e.forEach(t=>{t.analysis.reset(),t.analysis.layers.clear();const i={ip:this.ip,fileName:t.fileName,fileSize:t.bytesize,fileIsSequence:t.timeline.isSequence,fileNumFrames:t.timeline.frameCount,fileWidth:t.width,fileHeight:t.height,fileTimestamp:t.timeline.frames[0].absolute,fileDataType:t.fileDataType,userAgent:window.navigator.userAgent,windowWidth:window.innerWidth,windowHeight:window.innerHeight,time:new Date().getTime(),url:window.location.href};this.dispatchEvent(new CustomEvent("uploaded",{detail:i,bubbles:!0,composed:!0}))}),this.listener!==void 0&&clearTimeout(this.listener),e.length===0?this.files=[]:this.files=[e[0]],this.listener=setTimeout(async()=>{var i;const t=(i=this.groupRef.value)==null?void 0:i.group.registry;t!==void 0&&(await t.postLoadedProcessing(),t.minmax.value!==void 0&&t.range.imposeRange({from:t.minmax.value.min,to:t.minmax.value.max}))},0),this.log("files",e)})}handleClear(){this.groupRef.value!==void 0&&this.groupRef.value.group.files.removeAllInstances()}renderIntroScene(){return p`
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

                    <div>${ht.human(r.timestamp)}</div>
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
        `}render(){return p`

            <manager-provider slug="${this.UUID}" palette="iron">

                <registry-provider slug="${this.UUID}" palette="iron">

                    <group-provider ${ye(this.groupRef)} slug="${this.UUID}">

                        <thermal-app label="LabIR Edu Analyser" showfullscreen="true">
                            <div slot="bar" style="flex-grow: 1;">
                                <thermal-bar>

                                    <group-dropin-input></group-dropin-input>

                                    ${this.files.length>0?p`
                                        <thermal-button @click="${()=>this.handleClear()}">${x(w.clear)}</thermal-button>
                                        <registry-palette-dropdown></registry-palette-dropdown>
                                        <registry-range-full-button></registry-range-full-button>
                                        <registry-range-auto-button></registry-range-auto-button>
                                        
                                    `:C}

                                    ${this.files.length>1?p`<group-download-dropdown></group-download-dropdown><registry-range-full-button></registry-range-full-button>`:C}

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

        `}};er.styles=ae`
    
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

    `;Ar([v()],er.prototype,"dropinRef",2);Ar([v()],er.prototype,"groupRef",2);Ar([v()],er.prototype,"loaded",2);Ar([v()],er.prototype,"listener",2);Ar([v()],er.prototype,"files",2);Ar([v()],er.prototype,"ip",2);Ar([q({context:Jr})],er.prototype,"interactiveanalysis",2);Ar([q({context:tn})],er.prototype,"pngExportWidth",2);Ar([q({context:bo})],er.prototype,"pngExportWidthSetterContext",2);Ar([q({context:rn})],er.prototype,"pngExportFs",2);Ar([q({context:wo})],er.prototype,"pngExportFsSetterContext",2);Ar([q({context:Ri}),d({reflect:!0,converter:ns})],er.prototype,"locale",2);er=Ar([V("thermal-dropin-app")],er);var rx=Object.defineProperty,ix=Object.getOwnPropertyDescriptor,ei=(r,e,t,i)=>{for(var s=i>1?void 0:i?ix(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rx(e,t,s),s};let Cr=class extends Xe{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return p`

            ${e?p`<h3 class="row-title">${e}</h3>`:C}

            ${t?p`<p>${t}</p>`:C}

            <section class=${Xt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>p`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};Cr.styles=ae`

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

    `;ei([d()],Cr.prototype,"columns",2);ei([d()],Cr.prototype,"breakpoint",2);ei([d({type:Object})],Cr.prototype,"files",2);ei([d({type:String})],Cr.prototype,"label",2);ei([d({type:String})],Cr.prototype,"info",2);ei([d({type:Number})],Cr.prototype,"from",2);ei([d({type:Number})],Cr.prototype,"to",2);ei([d({type:Number})],Cr.prototype,"cursor",2);ei([d({type:String})],Cr.prototype,"grouping",2);ei([v()],Cr.prototype,"collapsed",2);Cr=ei([V("time-group-row")],Cr);var sx=Object.defineProperty,hn=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&sx(e,t,s),s},It;const _s=(It=class extends Xe{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.instanceRenderer=new On(this),this.groupRenderer=new Va(this)}parseFilesProperty(e){return e.split(It.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(It.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(It.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[f,u]=h,g=f.trim(),S=u.trim();switch(g){case It.FILE_THERMAL_KEY:s=S;break;case It.FILE_VISIBLE_KEY:n=S;break;case It.FILE_LABEL_KEY:a=S;break;case It.FILE_NOTE_KEY:o=S;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},It.FILE_RECORD_SEPARATOR=";",It.FILE_SEGMENT_SEPAROATOR="|",It.FILE_COMPONENT_SEPAROATOR="~",It.FILE_THERMAL_KEY="thermal",It.FILE_VISIBLE_KEY="visible",It.FILE_LABEL_KEY="label",It.FILE_NOTE_KEY="note",It);hn([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],_s.prototype,"showembed");hn([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],_s.prototype,"showabout");hn([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],_s.prototype,"showtutorial");hn([d({type:String,reflect:!1,converter:Be(!0)})],_s.prototype,"showfullscreen");hn([d({type:String,reflect:!0,converter:Be(!0)})],_s.prototype,"showhistogram");hn([q({context:Jr}),d({type:String,reflect:!0,converter:Be(!0)})],_s.prototype,"interactiveanalysis");let kp=_s;class nx{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ci)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ci)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?hu(e).getTime():this.grouping==="day"?Fa(e).getTime():this.grouping==="week"?$i(e).getTime():this.grouping==="month"?Na(e).getTime():this.grouping==="year"?nh(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?ru(e).getTime():this.grouping==="day"?eu(e).getTime():this.grouping==="week"?Wa(e).getTime():this.grouping==="month"?ja(e).getTime():this.grouping==="year"?tu(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:$e(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:$e(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+$e(e,"w")+" of "+$e(e,"yyyy"),info:[ht.humanDate($i(e).getTime()),ht.humanDate(Wa(e).getTime())].join(" - ")}:this.grouping==="month"?{label:$e(e,"MMMM yyyy"),info:[ht.humanDate(Na(e).getTime()),ht.humanDate(ja(e).getTime())].join(" - ")}:this.grouping==="year"?{label:$e(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?ht.human(e):this.grouping==="hour"||this.grouping==="day"?$e(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",ht.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var ax=Object.defineProperty,ox=Object.getOwnPropertyDescriptor,st=(r,e,t,i)=>{for(var s=i>1?void 0:i?ox(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ax(e,t,s),s};let Ke=class extends kp{constructor(){super(...arguments),this.groupRef=pe(),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new se,this.onColumns=new se,this.preservetime=!0,this.state=0,this.detail=void 0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback();const t=yo(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new nx(this,t),this.onGroupInit.call(this.group)}load(){const r=this.files?this.parseFilesProperty(this.files):[];r.length>0?this.grouper.processParsedFiles(r):this.grouper.processEntries(this.entries.filter(e=>e instanceof Ai)),this.group.files.addListener(this.UUID,e=>{e.length<4?this.columns=e.length:this.columns=4})}firstUpdated(r){super.firstUpdated(r),ss(this),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to}),this.load()}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&this.files&&r.get("files")!==void 0){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}async showDetail(r,e){this.detail={lrc:r,png:e},this.group.files.removeAllInstances(),this.group.registry.range.reset(),this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.state=1,this.scrollToComponent()}async closeDetail(){delete this.detail,this.detail=void 0,this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.group.registry.range.reset(),this.load(),this.state=0,this.scrollToComponent()}renderGroup(){return p`${this.groups.map(r=>p`<section class="group">
                                        
            <div class="group-files group-files-${this.columns}">
                ${r.files.map(e=>p`<div class="file">
                    <file-mirror .file=${e.instance} autoclear="true">
                        <file-thumbnail
                            .ondetail=${()=>{this.showDetail(e.instance.thermalUrl,e.instance.visibleUrl)}}
                            label=${ee(e.label)}
                        ></file-thumbnail>
                    </file-mirror>
                </div>`)}
            </div>
        </section>`)} `}renderDetail(){return this.detail===void 0?C:p`<div class="detail">
            <file-provider thermal="${this.detail.lrc}" visible="${this.detail.png}">
                <file-detail label="${this.label}" .onback=${()=>this.closeDetail()}></file-detail>
            </file-provider>
        </div>`}render(){return p`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}" from="${ee(this.from)}" to="${ee(this.to)}">

                    <group-provider slug="${this.slug}" autoclear="true" ${ye(this.groupRef)}>

                        <thermal-app
                            author=${ee(this.author)}
                            license=${ee(this.license)}
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

                                    <registry-palette-dropdown></registry-palette-dropdown>
                                    <registry-range-full-button></registry-range-full-button>
                                    <registry-range-auto-button></registry-range-auto-button>
                                    ${this.state===0?p`
                    ${this.grouper.numFiles>0?p`<group-download-dropdown></group-download-dropdown>`:C}
                                        <div>
                                        <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${x(w.columns,{num:this.columns})}</div>
                                    </div>
                                        `:C}
                                    

                                ${this.showabout===!0?p`<app-info-button ></app-info-button>`:C}

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


                            ${this.showhistogram===!0?p`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:C}

                            <registry-range-slider slot="pre"></registry-range-slider>
                            <registry-ticks-bar slot="pre"></registry-ticks-bar>
                            ${this.state===0?p`
                                <group-chart slot="pre"></group-chart>
                            `:C}

                            

                            <div class="app-content">

                                    <slot></slot>

                                    <group-tool-bar></group-tool-bar>

                                    <div class="app-content-main">
                                    ${this.state===0?this.renderGroup():this.renderDetail()}
                                    </div>
                            
                            </div>

                            ${this.state===0?p`
                                <group-timeline></group-timeline>
                            `:C}

                            

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};Ke.styles=ae`

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
            display: grid;
            gap: calc( var(--thermal-gap) * .5 );
        }

        .group-files-1 { grid-template-columns: 1fr; }
        
        .group-files-2 { grid-template-columns: 1fr 1fr; }

        .group-files-3 { grid-template-columns: 1fr 1fr 1fr; }

        .group-files-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }

        .group-files-5 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }

        .group-files-6 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }

        .group-files-7 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; }

        .group-files-8 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; }

        .group-files-9 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; }

        .group-files-10 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; }

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


    
    `;st([d({type:String,reflect:!0,attribute:!0})],Ke.prototype,"palette",2);st([d({type:Number,reflect:!0})],Ke.prototype,"from",2);st([d({type:Number,reflect:!0})],Ke.prototype,"to",2);st([d({type:String,reflect:!0})],Ke.prototype,"author",2);st([d({type:String,reflect:!0})],Ke.prototype,"label",2);st([d({type:String,reflect:!1})],Ke.prototype,"description",2);st([d({type:String,reflect:!0})],Ke.prototype,"license",2);st([v(),zr({slot:"entry",flatten:!0})],Ke.prototype,"entries",2);st([d({type:String,reflect:!0})],Ke.prototype,"slug",2);st([d()],Ke.prototype,"columns",2);st([d()],Ke.prototype,"breakpoint",2);st([d({type:String,reflect:!0})],Ke.prototype,"grouping",2);st([v()],Ke.prototype,"groups",2);st([d({type:String})],Ke.prototype,"files",2);st([d({type:String,reflect:!0})],Ke.prototype,"analysis1",2);st([d({type:String,reflect:!0})],Ke.prototype,"analysis2",2);st([d({type:String,reflect:!0})],Ke.prototype,"analysis3",2);st([d({type:String,reflect:!0})],Ke.prototype,"analysis4",2);st([d({type:String,reflect:!0})],Ke.prototype,"analysis5",2);st([d({type:String,reflect:!0})],Ke.prototype,"analysis6",2);st([d({type:String,reflect:!0})],Ke.prototype,"analysis7",2);st([d({type:String,reflect:!0,converter:Be(!1)})],Ke.prototype,"preservetime",2);st([v()],Ke.prototype,"state",2);st([v()],Ke.prototype,"detail",2);st([q({context:tn})],Ke.prototype,"pngExportWidth",2);st([q({context:bo})],Ke.prototype,"pngExportWidthSetterContext",2);st([q({context:rn})],Ke.prototype,"pngExportFs",2);st([q({context:wo})],Ke.prototype,"pngExportFsSetterContext",2);st([q({context:Ri}),d({reflect:!0,converter:ns})],Ke.prototype,"locale",2);Ke=st([V("thermal-group-app")],Ke);var lx=Object.defineProperty,hx=Object.getOwnPropertyDescriptor,Fi=(r,e,t,i)=>{for(var s=i>1?void 0:i?hx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lx(e,t,s),s};let _r=class extends di{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=pe(),this.indicatorRef=pe()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.files.addListener(this.UUID,r=>{this.listener!==void 0&&clearTimeout(this.listener),this.listener=setTimeout(async()=>{this.onRegistryBatchEnded(r)},0)}),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof Ci?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=ql(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?C:p`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${ye(this.timelineRef)}
                @click=${r=>this.handleTimelineClick(r)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${ye(this.indicatorRef)}></div>
            </div>

            ${this.longestDurationInMs!==void 0?wp(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):C}

        </div>`}};_r.TICK_WIDTH=50;_r.TICK_POINTER_HEIGHT=3;_r.styles=ae`


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


        ${xp}
    
    `;Fi([v()],_r.prototype,"longestDurationInMs",2);Fi([v()],_r.prototype,"ms",2);Fi([v()],_r.prototype,"pointerMs",2);Fi([v()],_r.prototype,"playing",2);Fi([v()],_r.prototype,"instances",2);Fi([v()],_r.prototype,"has",2);Fi([v()],_r.prototype,"ticks",2);Fi([v()],_r.prototype,"listener",2);_r=Fi([V("group-timeline")],_r);var cx=Object.defineProperty,dx=Object.getOwnPropertyDescriptor,Er=(r,e,t,i)=>{for(var s=i>1?void 0:i?dx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cx(e,t,s),s};let tr=class extends kp{constructor(){super(...arguments),this.registryProviderRef=pe(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=yo(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),ss(this),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof Bt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return p`
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
                    <registry-ticks-bar highlightFrom=${ee(this.highlightFrom)} highlightTo=${ee(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};tr.styles=ae`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;Er([d({type:String,reflect:!0,attribute:!0})],tr.prototype,"palette",2);Er([d({type:Number,reflect:!0})],tr.prototype,"from",2);Er([d({type:Number,reflect:!0})],tr.prototype,"to",2);Er([d()],tr.prototype,"slug",2);Er([d({type:String,reflect:!0})],tr.prototype,"grouping",2);Er([d({type:String,reflect:!0})],tr.prototype,"columns",2);Er([d({type:Number,reflect:!0})],tr.prototype,"breakpoint",2);Er([d({type:String,reflect:!0})],tr.prototype,"groups",2);Er([d({type:String,reflect:!0})],tr.prototype,"autogroups",2);Er([q({context:Ri}),d({reflect:!0,converter:ns})],tr.prototype,"locale",2);Er([zr({flatten:!0}),v()],tr.prototype,"entries",2);Er([v()],tr.prototype,"registry",2);tr=Er([V("thermal-registry-app")],tr);var ux=Object.defineProperty,px=Object.getOwnPropertyDescriptor,ji=(r,e,t,i)=>{for(var s=i>1?void 0:i?px(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ux(e,t,s),s};let Kr=class extends Xe{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=pe()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await Qu(this.elementContext.element.getTourableRoot(),this,{middleware:[Ju(20),cb({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return p`<div class=${Xt(r)}>

            <div id="arrow" ${this.arrowRef} class="arrow" style="position:absolute;"></div>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${()=>{var n;return(n=this.tour)==null?void 0:n.deactivate()}}>X</button> 
            </div>
            <div class="content">
                
                <slot></slot>

                ${this.youtube?p`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:C}

            </div>

            <div class="buttons">

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?p`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${x(w.back)}</thermal-button>`:C} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?p`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${x(w.next)}</thermal-button>`:C}          
            
            </div>

            

        </div>
        `}};Kr.styles=ae`

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
    
    `;ji([d({type:String})],Kr.prototype,"label",2);ji([v()],Kr.prototype,"active",2);ji([d({type:String,reflect:!0})],Kr.prototype,"displayed",2);ji([d({type:String})],Kr.prototype,"placement",2);ji([le({context:Uu,subscribe:!0})],Kr.prototype,"tour",2);ji([le({context:zu,subscribe:!0})],Kr.prototype,"definition",2);ji([le({context:Fu,subscribe:!0})],Kr.prototype,"elementContext",2);ji([d({type:String})],Kr.prototype,"youtube",2);Kr=ji([V("tour-step")],Kr);var fx=Object.defineProperty,gx=Object.getOwnPropertyDescriptor,mx=(r,e,t,i)=>{for(var s=i>1?void 0:i?gx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fx(e,t,s),s};let Pd=class extends Xe{render(){return p`<thermal-dialog label="Export configuration">
            <thermal-button slot="invoker">Export config</thermal-button>
            <div slot="content">
                <png-export-panel></png-export-panel>
            </div>
        </thermal-dialog>`}};Pd=mx([V("png-export-config")],Pd);var vx=Object.defineProperty,yx=Object.getOwnPropertyDescriptor,yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?yx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vx(e,t,s),s};let Zt=class extends Xe{constructor(){super(...arguments),this.loading=!0,this.cls="md",this.palette="jet",this.showhistogram=!1,this.groupRef=pe(),this.group=void 0,this.clsx={xs:1,sm:2,md:3,lg:4,xl:5}}connectedCallback(){super.connectedCallback(),this.url!==void 0&&this.folder}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.disconnect(),this.resizeObserver=void 0}firstUpdated(r){super.firstUpdated(r),ss(this),this.groupRef.value&&(this.group=this.groupRef.value.group)}updated(r){var e;if(super.updated(r),(r.has("folder")||r.has("url")||r.has("subfolder"))&&(this.folder,this.url&&this.loadData(this.url,this.folder,this.subfolder)),r.has("data")){(e=this.resizeObserver)==null||e.disconnect(),delete this.resizeObserver,this.resizeObserver=new ResizeObserver(i=>{const n=i[0].contentRect.width;if(this.lastWidth!==n){let a="xs";n>500&&(a="sm"),n>900&&(a="md"),n>1300&&(a="lg"),n>1600&&(a="xl"),this.cls=a,this.lastWidth=n}});const t=this.renderRoot.querySelector(".files");t&&this.resizeObserver.observe(t)}}getUrl(r,e,t){return t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e}async loadData(r,e,t){try{this.loading=!0,this.group&&this.group.files.clearAllListeners();const i=t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e,s=await fetch(i,{});s.ok?(this.data=await s.json(),this.loading=!1,this.data.success===!1&&(this.error=`The remote folder <code>${i}</code> was not found!`)):(this.error=`The remote folder <code>${i}</code> was not found!`,this.loading=!1)}catch{this.error=`The remote folder <code>${r}</code> was not found!`,this.loading=!1}}renderloading(){return p`<div>

            Načítám vzdálenou složku ${this.folder} from ${this.url} 
        
        </div>`}renderData(r){return p`
            <div class="files ${this.cls}">
                ${r.files.map(e=>this.renderFile(e))}
            </div>
        `}renderFile(r){return p`<div class="file">
            <div class="file-inner">
                <file-provider 
                    thermal="${r.lrc}" 
                    visible=${ee(r.png)}
                    batch="true"
                >

                    <div class="file-header">
                        <h2><span>${ht.human(r.timestamp*1e3)}</span></h2>
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
        </div>`}clsToStr(r){return x(w.columns,{num:this.clsx[r]})}renderColumnsSwitch(){return p`<thermal-dropdown>
            <span slot="invoker">${this.clsToStr(this.cls)}</span>
            <thermal-button slot="option" @click=${()=>this.cls="xs"}>${this.clsx.xs}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="sm"}>${this.clsx.sm}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="md"}>${this.clsx.md}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="lg"}>${this.clsx.lg}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="xl"}>${this.clsx.xl}</thermal-button>
        </thermal-dropdown>`}renderInfo(){if(this.data){const r=this.getUrl(this.url,this.folder,this.subfolder),e="Request",t={"API Root":this.url,Subfolder:this.subfolder,Folder:this.folder,[e]:r};return p`
                <thermal-dialog label="Remote folder info">

                    <slot name="invoker" slot="invoker">
                        <thermal-button>Remote folder info</thermal-button>
                    </slot>

                    <div slot="content">

                        ${this.data.info.description?p`<p>${this.data.info.description}</p>`:C}

                        <table>
                            
                            <caption>Request information</caption>

                            <tbody>

                                ${Object.entries(t).map(([i,s])=>{const a=i===e?p`<a href="${s}" target="_blank">${s}</a>`:s;return p`<tr>
                                        <td>${i}</td>
                                        <td>${a}</td>
                                    </tr>`})}
                            
                            </tbody>

                        </table>
                    
                    </div>
                
                </thermal-dialog>
            `}return C}render(){var e;let r=x(w.loading)+"...";return((e=this.data)==null?void 0:e.info)!==void 0&&(r=this.data.info.name),this.error!==void 0&&(r="Error"),p`
            <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                <registry-provider slug="folders_app_registry">
                    <group-provider slug="folders_app_group" ${ye(this.groupRef)}>
        
                        <thermal-app
                            author=${ee(this.author)}
                            license=${ee(this.license)}
                        >

                            <thermal-button variant="foreground" interactive="false" slot="bar">
                                ${r}
                            </thermal-button>

                            ${this.error===void 0?p`

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

                            ${this.showhistogram?p`<registry-histogram></registry-histogram>`:C}
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>`:C}
                            
                        ${this.error?Dt(this.error):C}

                        ${this.error===void 0&&this.data?this.renderData(this.data):C}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`}};Zt.styles=ae`


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

    `;yr([d({type:String,reflect:!0})],Zt.prototype,"url",2);yr([d({type:String,reflect:!0})],Zt.prototype,"subfolder",2);yr([d({type:String,reflect:!0})],Zt.prototype,"folder",2);yr([v()],Zt.prototype,"error",2);yr([v()],Zt.prototype,"loading",2);yr([v()],Zt.prototype,"data",2);yr([v()],Zt.prototype,"label",2);yr([v()],Zt.prototype,"cls",2);yr([d({type:String,reflect:!0})],Zt.prototype,"license",2);yr([d({type:String,reflect:!0})],Zt.prototype,"author",2);yr([d({type:String,reflect:!0,attribute:!0})],Zt.prototype,"palette",2);yr([d({type:String,reflect:!0,converter:Be(!0)})],Zt.prototype,"showhistogram",2);yr([q({context:Ri}),d({reflect:!0,converter:ns})],Zt.prototype,"locale",2);Zt=yr([V("remote-folder-app")],Zt);var us=(r=>(r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(us||{});class Pl{constructor(e,t){c(this,"url");c(this,"query");this.api_endpoint=e,this.subfolder=t,this.url=new URL(this.api_endpoint),this.query=this.url.searchParams,this.subfolder!==void 0&&this.query.set("scope",this.subfolder)}setOnly(e){return this.query.set("only",e),this}setExclude(e){return this.query.set("exclude",e),this}setGrid(e){e===!0?this.query.set("grid","true"):this.query.delete("grid")}async info(){return this.fetch()}async folder(e){return this.query.set("folder",e),this.fetch()}async everything(){return this.query.set("everything","true"),this.fetch()}async hours(){return this.query.set("hours","true"),this.fetch()}async days(){return this.query.set("days","true"),this.fetch()}async weeks(){return this.query.set("weeks","true"),this.fetch()}async months(){return this.query.set("months","true"),this.fetch()}async years(){return this.query.set("years","true"),this.fetch()}async grid(e){switch(e){case"hours":return await this.hours();case"days":return await this.days();case"weeks":return await this.days();case"months":return await this.months();case"years":return await this.years();default:return await this.hours()}}async fetch(){return console.info("Fetching",this.url),await(await fetch(this.url)).json()}get object(){return this.url}}const bx={lessThanXSeconds:{one:{regular:"méně než 1 sekunda",past:"před méně než 1 sekundou",future:"za méně než 1 sekundu"},few:{regular:"méně než {{count}} sekundy",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekundy"},many:{regular:"méně než {{count}} sekund",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekund"}},xSeconds:{one:{regular:"1 sekunda",past:"před 1 sekundou",future:"za 1 sekundu"},few:{regular:"{{count}} sekundy",past:"před {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"před {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než 1 minuta",past:"před méně než 1 minutou",future:"za méně než 1 minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"1 minuta",past:"před 1 minutou",future:"za 1 minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně 1 hodina",past:"přibližně před 1 hodinou",future:"přibližně za 1 hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"1 hodina",past:"před 1 hodinou",future:"za 1 hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"1 den",past:"před 1 dnem",future:"za 1 den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXWeeks:{one:{regular:"přibližně 1 týden",past:"přibližně před 1 týdnem",future:"přibližně za 1 týden"},few:{regular:"přibližně {{count}} týdny",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdny"},many:{regular:"přibližně {{count}} týdnů",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdnů"}},xWeeks:{one:{regular:"1 týden",past:"před 1 týdnem",future:"za 1 týden"},few:{regular:"{{count}} týdny",past:"před {{count}} týdny",future:"za {{count}} týdny"},many:{regular:"{{count}} týdnů",past:"před {{count}} týdny",future:"za {{count}} týdnů"}},aboutXMonths:{one:{regular:"přibližně 1 měsíc",past:"přibližně před 1 měsícem",future:"přibližně za 1 měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"1 měsíc",past:"před 1 měsícem",future:"za 1 měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně 1 rok",past:"přibližně před 1 rokem",future:"přibližně za 1 rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"1 rok",past:"před 1 rokem",future:"za 1 rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než 1 rok",past:"před více než 1 rokem",future:"za více než 1 rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro 1 rok",past:"skoro před 1 rokem",future:"skoro za 1 rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}},wx=(r,e,t)=>{let i;const s=bx[r];s.type==="other"?i=s.other:e===1?i=s.one:e>1&&e<5?i=s.few:i=s.many;const n=(t==null?void 0:t.addSuffix)===!0,a=t==null?void 0:t.comparison;let o;return n&&a===-1?o=i.past:n&&a===1?o=i.future:o=i.regular,o.replace("{{count}}",String(e))},xx={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},Sx={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},$x={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Cx={date:Ut({formats:xx,defaultWidth:"full"}),time:Ut({formats:Sx,defaultWidth:"full"}),dateTime:Ut({formats:$x,defaultWidth:"full"})},_x=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],kx={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:r=>{const e=r.getDay();return"'v "+_x[e]+" o' p"},other:"P"},Px=(r,e)=>{const t=kx[r];return typeof t=="function"?t(e):t},Ox={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},Ax={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},Ex={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},Dx={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},Lx={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},Rx={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},Tx={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},Mx=(r,e)=>Number(r)+".",Ix={ordinalNumber:Mx,era:gt({values:Ox,defaultWidth:"wide"}),quarter:gt({values:Ax,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:Ex,defaultWidth:"wide",formattingValues:Dx,defaultFormattingWidth:"wide"}),day:gt({values:Lx,defaultWidth:"wide"}),dayPeriod:gt({values:Rx,defaultWidth:"wide",formattingValues:Tx,defaultFormattingWidth:"wide"})},Ux=/^(\d+)\.?/i,zx=/\d+/i,Fx={narrow:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},jx={any:[/^p[řr]/i,/^(po|n)/i]},Nx={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},Wx={any:[/1/i,/2/i,/3/i,/4/i]},Hx={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},Bx={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},Gx={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},Vx={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[úu]t/i,/^st/i,/^[čc]t/i,/^p[áa]/i,/^so/i]},Yx={any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i},qx={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},Xx={ordinalNumber:Nn({matchPattern:Ux,parsePattern:zx,valueCallback:r=>parseInt(r,10)}),era:mt({matchPatterns:Fx,defaultMatchWidth:"wide",parsePatterns:jx,defaultParseWidth:"any"}),quarter:mt({matchPatterns:Nx,defaultMatchWidth:"wide",parsePatterns:Wx,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:Hx,defaultMatchWidth:"wide",parsePatterns:Bx,defaultParseWidth:"any"}),day:mt({matchPatterns:Gx,defaultMatchWidth:"wide",parsePatterns:Vx,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:Yx,defaultMatchWidth:"any",parsePatterns:qx,defaultParseWidth:"any"})},Kx={code:"cs",formatDistance:wx,formatLong:Cx,formatRelative:Px,localize:Ix,match:Xx,options:{weekStartsOn:1,firstWeekContainsDate:4}},Zx={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},Jx=(r,e,t)=>{let i;const s=Zx[r];return typeof s=="string"?i=s:e===1?i=s.one:e===2&&s.two?i=s.two:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"mewn "+i:i+" yn ôl":i},Qx={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},e2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},t2={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},r2={date:Ut({formats:Qx,defaultWidth:"full"}),time:Ut({formats:e2,defaultWidth:"full"}),dateTime:Ut({formats:t2,defaultWidth:"full"})},i2={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},s2=(r,e,t,i)=>i2[r],n2={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},a2={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},o2={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},l2={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},h2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},c2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},d2=(r,e)=>{const t=Number(r);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||t===80||t>=100)return t+"fed";return t+"ain"},u2={ordinalNumber:d2,era:gt({values:n2,defaultWidth:"wide"}),quarter:gt({values:a2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:o2,defaultWidth:"wide"}),day:gt({values:l2,defaultWidth:"wide"}),dayPeriod:gt({values:h2,defaultWidth:"wide",formattingValues:c2,defaultFormattingWidth:"wide"})},p2=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,f2=/\d+/i,g2={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},m2={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},v2={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},y2={any:[/1/i,/2/i,/3/i,/4/i]},b2={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},w2={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},x2={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},S2={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},$2={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},C2={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},_2={ordinalNumber:Nn({matchPattern:p2,parsePattern:f2,valueCallback:r=>parseInt(r,10)}),era:mt({matchPatterns:g2,defaultMatchWidth:"wide",parsePatterns:m2,defaultParseWidth:"any"}),quarter:mt({matchPatterns:v2,defaultMatchWidth:"wide",parsePatterns:y2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:b2,defaultMatchWidth:"wide",parsePatterns:w2,defaultParseWidth:"any"}),day:mt({matchPatterns:x2,defaultMatchWidth:"wide",parsePatterns:S2,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:$2,defaultMatchWidth:"any",parsePatterns:C2,defaultParseWidth:"any"})},k2={code:"cy",formatDistance:Jx,formatLong:r2,formatRelative:s2,localize:u2,match:_2,options:{weekStartsOn:0,firstWeekContainsDate:1}},Od={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},P2=(r,e,t)=>{let i;const s=t!=null&&t.addSuffix?Od[r].withPreposition:Od[r].standalone;return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:"vor "+i:i},O2={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},A2={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},E2={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},D2={date:Ut({formats:O2,defaultWidth:"full"}),time:Ut({formats:A2,defaultWidth:"full"}),dateTime:Ut({formats:E2,defaultWidth:"full"})},L2={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},R2=(r,e,t,i)=>L2[r],T2={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},M2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Jl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},I2={narrow:Jl.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Jl.wide},U2={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},z2={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},F2={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},j2=r=>Number(r)+".",N2={ordinalNumber:j2,era:gt({values:T2,defaultWidth:"wide"}),quarter:gt({values:M2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:Jl,formattingValues:I2,defaultWidth:"wide"}),day:gt({values:U2,defaultWidth:"wide"}),dayPeriod:gt({values:z2,defaultWidth:"wide",formattingValues:F2,defaultFormattingWidth:"wide"})},W2=/^(\d+)(\.)?/i,H2=/\d+/i,B2={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},G2={any:[/^v/i,/^n/i]},V2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Y2={any:[/1/i,/2/i,/3/i,/4/i]},q2={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},X2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},K2={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Z2={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},J2={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Q2={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},eS={ordinalNumber:Nn({matchPattern:W2,parsePattern:H2,valueCallback:r=>parseInt(r)}),era:mt({matchPatterns:B2,defaultMatchWidth:"wide",parsePatterns:G2,defaultParseWidth:"any"}),quarter:mt({matchPatterns:V2,defaultMatchWidth:"wide",parsePatterns:Y2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:q2,defaultMatchWidth:"wide",parsePatterns:X2,defaultParseWidth:"any"}),day:mt({matchPatterns:K2,defaultMatchWidth:"wide",parsePatterns:Z2,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:J2,defaultMatchWidth:"wide",parsePatterns:Q2,defaultParseWidth:"any"})},tS={code:"de",formatDistance:P2,formatLong:D2,formatRelative:R2,localize:N2,match:eS,options:{weekStartsOn:1,firstWeekContainsDate:4}},rS={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},iS={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},sS={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nS={date:Ut({formats:rS,defaultWidth:"full"}),time:Ut({formats:iS,defaultWidth:"full"}),dateTime:Ut({formats:sS,defaultWidth:"full"})},aS={code:"en-GB",formatDistance:iu,formatLong:nS,formatRelative:su,localize:nu,match:au,options:{weekStartsOn:1,firstWeekContainsDate:4}},oS={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},lS=(r,e,t)=>{let i;const s=oS[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dans "+i:"il y a "+i:i},hS={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},cS={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},dS={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},uS={date:Ut({formats:hS,defaultWidth:"full"}),time:Ut({formats:cS,defaultWidth:"full"}),dateTime:Ut({formats:dS,defaultWidth:"full"})},pS={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},fS=(r,e,t,i)=>pS[r],gS={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},mS={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},vS={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},yS={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},bS={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},wS=(r,e)=>{const t=Number(r),i=e==null?void 0:e.unit;if(t===0)return"0";const s=["year","week","hour","minute","second"];let n;return t===1?n=i&&s.includes(i)?"ère":"er":n="ème",t+n},xS=["MMM","MMMM"],SS={preprocessor:(r,e)=>r.getDate()===1||!e.some(i=>i.isToken&&xS.includes(i.value))?e:e.map(i=>i.isToken&&i.value==="do"?{isToken:!0,value:"d"}:i),ordinalNumber:wS,era:gt({values:gS,defaultWidth:"wide"}),quarter:gt({values:mS,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:vS,defaultWidth:"wide"}),day:gt({values:yS,defaultWidth:"wide"}),dayPeriod:gt({values:bS,defaultWidth:"wide"})},$S=/^(\d+)(ième|ère|ème|er|e)?/i,CS=/\d+/i,_S={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},kS={any:[/^av/i,/^ap/i]},PS={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},OS={any:[/1/i,/2/i,/3/i,/4/i]},AS={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},ES={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},DS={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},LS={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},RS={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},TS={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},MS={ordinalNumber:Nn({matchPattern:$S,parsePattern:CS,valueCallback:r=>parseInt(r)}),era:mt({matchPatterns:_S,defaultMatchWidth:"wide",parsePatterns:kS,defaultParseWidth:"any"}),quarter:mt({matchPatterns:PS,defaultMatchWidth:"wide",parsePatterns:OS,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:AS,defaultMatchWidth:"wide",parsePatterns:ES,defaultParseWidth:"any"}),day:mt({matchPatterns:DS,defaultMatchWidth:"wide",parsePatterns:LS,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:RS,defaultMatchWidth:"any",parsePatterns:TS,defaultParseWidth:"any"})},IS={code:"fr",formatDistance:lS,formatLong:uS,formatRelative:fS,localize:SS,match:MS,options:{weekStartsOn:1,firstWeekContainsDate:4}};var US=Object.defineProperty,zS=Object.getOwnPropertyDescriptor,yt=(r,e,t,i)=>{for(var s=i>1?void 0:i?zS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&US(e,t,s),s};const FS={en:aS,fr:IS,de:tS,cy:k2,cs:Kx};let ut=class extends Xe{constructor(){super(...arguments),this.palette="jet",this.enablegrouping=!1,this.loadingInfo=!1,this.loadingData=!1,this.only=[],this.state=0,this.by=us.HOURS,this.folders={},this.registryRef=pe(),this.interactiveAnalysis=!0,this.detail=void 0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback();const r=()=>{this.getBoundingClientRect().top<-50?this.classList.add("is-pinned"):this.classList.remove("is-pinned")};window.addEventListener("scroll",r),window.addEventListener("resize",r)}firstUpdated(r){super.firstUpdated(r),ss(this)}updated(r){super.updated(r),(r.has("url")||r.has("subfolder"))&&this.loadInfo(this.url,this.subfolder),(r.has("only")||r.has("by"))&&this.url!==void 0&&this.loadData(this.only,this.by,this.url,this.subfolder),this.registryRef.value&&this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var e;(e=this.registryRef.value)==null||e.registry.range.applyMinmax()})}async showDetail(r,e,t){this.detail={folder:r,lrc:e,png:t},this.state=3,this.resetRegistry(),this.scrollToComponent()}async closeDetail(){switch(delete this.detail,this.detail=void 0,typeof(this.dataMultiple??this.dataOnly)){case"undefined":this.state=0;break;case typeof this.dataOnly:this.state=1;break;case typeof this.dataMultiple:this.state=2;break}this.scrollToComponent()}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}getApiUrl(r,e){return e!==void 0?`${r}?subfolder="${e}"`:r}async loadInfo(r,e){this.loadingInfo=!0;try{const i=await new Pl(r,e).info();this.info=i,this.folders=i.folders,this.loadingInfo=!1}catch{this.error="There was an error loading info"}}async loadDataOne(r,e,t){this.loadingData=!1,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=await new Pl(e,t).folder(r);this.log("folder",r,s),this.scrollToComponent(),this.dataOnly=s,this.loadingData=!1,this.registryRef.value&&this.registryRef.value.registry.groups.addListener(this.UUID,n=>{n.forEach(a=>a.files.addListener(this.UUID,o=>{o[0]&&a.analysisSync.turnOn(o[0])}))})}async loadDataMultiple(r,e,t,i){var a;this.loadingData=!0,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=new Pl(t,i);s.setOnly(r.join(",")),s.setGrid(!0);const n=await s.grid(e);this.log(n),this.scrollToComponent(),this.dataMultiple=n,this.loadingData=!1,(a=this.registryRef.value)==null||a.registry.groups.removeListener(this.UUID)}async loadData(r,e,t,i){r.length>1?this.loadDataMultiple(r,e,t,i):r.length===1&&this.loadDataOne(r[0],t,i)}renderMainScreen(){return p`
<div class="screen screen-main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(r=>p`
        <button class="screen-main-folder" @click=${()=>this.actionOpenOneFolder(r.folder)}>
            <h1>${r.name}</h1>
            ${r.description!==void 0?p`<p>${r.description}</p>`:C}
            <div>${x(w.numfiles,{num:r.lrc_count})}</div>
        </button>
            `)}
    </nav>


</div>
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
                ${Object.entries(r).map(([s,n])=>{let a;const o=parseInt(s);return this.by===us.HOURS?a=$e(o*1e3,"d. M. yyyy - HH")+":00":this.by===us.DAYS?a=$e(o*1e3,"d. M. yyyy"):this.by===us.WEEKS?a=$e(o*1e3,"wo"):this.by===us.MONTHS?a=$e(o*1e3,"LLLL yyyy",{locale:FS[this._locale]}):this.by===us.YEARS&&(a=$e(o*1e3,"yyyy")),p`
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
                            ${i.map(l=>{const h=n[l];return p`<td class="cell-content" data-name="${h.name}">
                                    ${Object.values(h.files).map(f=>p`
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

        `}renderTimeToggle(){const r=["hours","days","weeks","months","years"];return p`
<thermal-dropdown>
    <span slot="invoker">${x(w[`by${this.by}`])}</span>
    ${r.map(e=>p`
    <div slot="option" @click=${()=>this.by=e}>
        <thermal-button>${x(w[`by${e}`])}</thermal-button>
    </div>
    `)}
</thermal-dropdown>
        `}renderInfo(){if(this.state===0)return C;let r;if(this.state===1){const e=this.folders[this.only[0]],t=Object.values(this.folders).filter(n=>n.folder!==e.folder),i=p`<thermal-dropdown variant="background" class="selector">
                <span slot="invoker">${e.name}</span>

                ${t.map(n=>p`<div slot="option" @click=${()=>this.actionOpenOneFolder(n.folder)}>
                    <thermal-button>${n.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`,s=t.map((n,a)=>p`<thermal-button @click=${()=>this.actionToggleFolder(n.folder)}>
                <span class="button-inline-icon">+</span> ${n.name}
            </thermal-button> ${a!==t.length-1?` ${x(w.or)} `:C}`);r=p`${x(w.showingfolder)} ${i}. 
            
            ${t.length>0?p` ${x(w.doyouwanttoadd)} ${s}?`:C}
            `}else if(this.state===2){const e=[],t=[];Object.values(this.folders).forEach(i=>{this.only.includes(i.folder)?e.push(i):t.push(i)}),r=p`

                ${x(w.showingfolders)}
                ${e.map((i,s)=>p`<thermal-button 
                    title="${x(w.remove)}" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(i.folder)}
                >
                    ${i.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${s!==e.length-1?` ${x(w.and)} `:C}`)}
                ${x(w.groupped)} ${this.renderTimeToggle()}.
            

            ${t.length>0?p`${x(w.youmayalsoadd)} ${t.map((i,s)=>p`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(i.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${i.name}
                    </thermal-button>
                    ${s!==t.length-1?` ${x(w.or)} `:C}
                `)}.`:C}

            `}return r===void 0?C:p`<div class="info">
            ${r}
        </div>`}renderBrowser(){return p`<section>
            ${this.state===1?this.renderOne():C}
            ${this.state===2?this.renderMultiple():C}
            ${this.state===3?this.renderDetail():C}
        </section>`}renderDetail(){var r,e;return this.detail===void 0?this.renderLoading("Loading the IR image"):p`
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
        `}renderApp(){return this.info===void 0?this.renderLoading("Loading data"):this.state===0?this.renderMainScreen():this.renderBrowser()}renderHeader(){return p`


        ${this.state===0&&this.info!==void 0?p`<thermal-button @click=${()=>{this.actionShowEverything()}}>${x(w.showeverything)}</thermal-button>`:C}
        
        ${this.state!==0?p`<thermal-button 
                    @click=${this.actionCloseToHomepage.bind(this)}
                    variant="foreground"
                >
                ${x(w.close)}
            </thermal-button>

            ${this.state===1&&this.enablegrouping===!1?p`
            <thermal-dropdown variant="background" class="selector">

                <span slot="invoker">${this.folders[this.only[0]].name}</span>

                ${Object.values(this.folders).filter(r=>!this.only.includes(r.folder)).map(r=>p`<div slot="option" @click=${()=>this.actionOpenOneFolder(r.folder)}>
                <thermal-button>${r.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`:C}

            <registry-palette-dropdown></registry-palette-dropdown>
            <registry-range-full-button></registry-range-full-button>
            <registry-range-auto-button></registry-range-auto-button>

            ${this.state===1&&this.dataOnly!==void 0?p`<group-provider slug="${this.dataOnly.info.folder}">
                    <group-download-dropdown></group-download-dropdown>
                </group-provider>`:C}
            <registry-opacity-slider></registry-opacity-slider>
            <group-tool-buttons showhint="false" showpopup="true"></group-tool-buttons>
            `:C}
        
        `}renderHistogram(){return this.state===0?C:p`<registry-histogram expandable="true"></registry-histogram>
        <registry-range-slider></registry-range-slider>
        <registry-ticks-bar></registry-ticks-bar>
        
        <nav id="graf">
        ${this.dataOnly!==void 0?p`<group-provider slug="${this.dataOnly.info.folder}">

                    <div style="width:100%">
                        <group-chart></group-chart>
                    </div>

                </group-provider>`:C}
        </nav>
        `}renderTableHeader(){if(this.state!==2)return C;const r=Object.values(this.folders).filter(e=>this.only.includes(e.folder));return p`<table class="affected">
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
            `}render(){const r=this.loadingInfo===!0?x(w.loading)+"...":this.label&&this.label.trim().length>0?this.label:x(w.remotefoldersbrowser);return p`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${ye(this.registryRef)}>

        <thermal-app author="${ee(this.author)}" license="${ee(this.license)}" showfullscreen="true">

        ${this.state===0?p`
            <thermal-button variant="foreground" slot="bar" @click=${this.actionCloseToHomepage.bind(this)}>${r}</thermal-button>
            `:C}

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
        
            <div class=${Xt({screen:!0,"screen-main":this.state===0,"screen-browser":[1,2].includes(this.state),"screen-browser__one":this.state===1,"screen-browser__multiple":this.state===2,"screen-detail":this.state===3})}>
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
        
        `}};ut.styles=ae`

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


    `;yt([d({type:String,reflect:!0})],ut.prototype,"label",2);yt([d({type:String,reflect:!0})],ut.prototype,"license",2);yt([d({type:String,reflect:!0})],ut.prototype,"author",2);yt([d({type:String,reflect:!0,attribute:!0})],ut.prototype,"palette",2);yt([d({type:Boolean,reflect:!0,converter:Be(!0)})],ut.prototype,"enablegrouping",2);yt([d({type:String,reflect:!0})],ut.prototype,"url",2);yt([d({type:String,reflect:!0})],ut.prototype,"subfolder",2);yt([v()],ut.prototype,"info",2);yt([v()],ut.prototype,"error",2);yt([v()],ut.prototype,"loadingInfo",2);yt([v()],ut.prototype,"loadingData",2);yt([v()],ut.prototype,"only",2);yt([v()],ut.prototype,"state",2);yt([v()],ut.prototype,"by",2);yt([v()],ut.prototype,"dataOnly",2);yt([v()],ut.prototype,"dataMultiple",2);yt([v()],ut.prototype,"folders",2);yt([q({context:Jr})],ut.prototype,"interactiveAnalysis",2);yt([v()],ut.prototype,"detail",2);yt([q({context:tn})],ut.prototype,"pngExportWidth",2);yt([q({context:bo})],ut.prototype,"pngExportWidthSetterContext",2);yt([q({context:rn})],ut.prototype,"pngExportFs",2);yt([q({context:wo})],ut.prototype,"pngExportFsSetterContext",2);yt([q({context:Ri}),d({reflect:!0,converter:ns})],ut.prototype,"locale",2);ut=yt([V("remote-browser-app")],ut);var jS=Object.defineProperty,NS=Object.getOwnPropertyDescriptor,Dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?NS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jS(e,t,s),s};let rr=class extends Xe{constructor(){super(...arguments),this.by="days",this.loading=!1,this.heightRange=0,this.heightFolders=0,this.registryRef=pe(),this.palette="jet"}firstUpdated(r){super.firstUpdated(r),ss(this)}updated(r){super.updated(r),(r.has("by")||r.has("url")||r.has("subfolder"))&&this.loadData(this.by,this.url,this.subfolder)}getUrl(r,e,t){let i=e+`?${r}&grid`;return t&&(i+=`&scope=${t}`),i}async loadData(r,e,t){this.loading=!0,this.data=void 0,this.registryRef.value&&this.registryRef.value.registry.groups.removeAllGroups();try{const i=this.getUrl(r,e,t),s=await fetch(i,{});if(s.ok){const n=await s.json(),a=Object.entries(n.data).map(([o,l])=>{const h=Object.entries(l);h.sort((u,g)=>u[0]<g[0]?-1:1);const f=Object.fromEntries(h);return[o,f]});n.data=Object.fromEntries(a),this.data=n,this.loading=!1,this.log(this.data),this.observer=new ResizeObserver(o=>{this.log(o),o[0]&&(this.heightFolders=this.getFoldersHeight(),this.heightRange=this.getRangeHeight())}),this.observer.observe(this)}else throw new Error("Data not OK!")}catch{this.loading=!1}}getRangeHeight(){const r=this.renderRoot.querySelector("#range");return console.log(r),r!==null?r.clientHeight:0}getFoldersHeight(){const r=this.renderRoot.querySelector("#folders");return r!==null?r.clientHeight:0}getGroupLabel(r){return this.by==="hours"?$e(r,"d. M.yyyy - mm:ss"):this.by==="days"?$e(r,"d. M. yyyy"):this.by==="weeks"?$e(r,"I")+" roku "+$e(r,"yyyy"):this.by==="months"?$e(r,"M"):this.by==="years"?$e(r,"yyyy"):r.toString()}getItemLabel(r){return this.by==="hours"?$e(r,"h:mm:ss"):this.by==="days"?$e(r,"H:mm:ss"):this.by==="weeks"?$e(r,"I")+" roku "+$e(r,"yyyy"):this.by==="months"?$e(r,"M"):this.by==="years"?$e(r,"yyyy"):r.toString()}renderFile(r){return p`
            <file-provider
                batch="true"
                thermal="${r.lrc}"
                visible="${ee(r.png)}"
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
        `}renderGrid(r){const e=Object.values(Object.values(r.data)[0]).map(s=>s.name),t=e.length,i=100/e.length+"%";return p`


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
                    ${Object.values(Object.values(r.data)[0]).map(s=>p`<td>
                            <div class="cell-folder-header">
                                <h1>${s.name}</h1>
                            </div>
                    </td>`)}
                </tr>
            
                ${Object.entries(r.data).map(([s,n])=>{const a=Object.keys(n).length;return p`

                        <tr><td class="separator"></td></tr>

                        <tr class="group-header">
                            <td colspan="${a}">
                                <div class="cell-divider">
                                    <group-provider slug=${ee(s)}>
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

                        <group-provider class="group-files" slug=${ee(s)}>
                            ${Object.values(n).map(o=>p`<td style="width: ${i};">
                                        <div class="cell-group">

                                        ${o.count>0?Object.values(o.files).map(this.renderFile.bind(this)):C}

                                        </div>
                                </td>`)}
                        </group-provider>
                    `})}

            </table>
            
        `}render(){const r=this.loading?x(w.loading)+"":this.label??"Remote folder";return p`
                <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                    <registry-provider slug="folders_app_registry" ${ye(this.registryRef)}>
            
                            <thermal-app
                                author=${ee(this.author)}
                                license=${ee(this.license)}
                            >
    
                                <thermal-button variant="foreground" interactive="false" slot="bar">
                                    ${r}
                                </thermal-button>


                                ${this.data?this.renderGrid(this.data):C}
    
                    
                        </thermal-app>
                </registry-provider>
            </manager-provider>`}};rr.styles=ae`
    
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
    
    `;Dr([d({type:String,reflect:!0})],rr.prototype,"url",2);Dr([d({type:String,reflect:!0})],rr.prototype,"subfolder",2);Dr([d({type:String,reflect:!0})],rr.prototype,"by",2);Dr([v()],rr.prototype,"loading",2);Dr([d({type:String,reflect:!0})],rr.prototype,"license",2);Dr([d({type:String,reflect:!0})],rr.prototype,"label",2);Dr([d({type:String,reflect:!0})],rr.prototype,"author",2);Dr([v()],rr.prototype,"data",2);Dr([v()],rr.prototype,"heightRange",2);Dr([v()],rr.prototype,"heightFolders",2);Dr([d({type:String,reflect:!0,attribute:!0})],rr.prototype,"palette",2);Dr([q({context:Ri}),d({reflect:!0,converter:ns})],rr.prototype,"locale",2);rr=Dr([V("remote-grid-app")],rr);var WS=Object.defineProperty,HS=Object.getOwnPropertyDescriptor,No=(r,e,t,i)=>{for(var s=i>1?void 0:i?HS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&WS(e,t,s),s};let Ks=class extends Xe{constructor(){super(...arguments),this.showlabel=!0,this.showTime=!0}renderEntry(e){const t=this.showlabel===!0?e.label:C,i=this.showTime===!0&&e.from!==void 0&&e.to!==void 0?[$e(e.from,"mm:ss.SSS"),$e(e.to,"mm:ss.SSS")].join(" - "):C,s=e.getRenderContent(),n=e.image!==void 0?p`<img src="${e.image}" class="builtin-image" />`:C;return p`<article>

            ${t!==C?p`<h1>${t}</h1>`:C}

            ${i!==C?p`<div class="time">${i}</div>`:C}

            ${n}

            ${s.length>0?p`<div class="content">
                    ${s}
                </div>`:C}
        </article>`}render(){return p`${Uh(this.entries,this.renderEntry.bind(this))}`}};Ks.styles=ae`
    
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
    
    `;No([v(),le({context:Fo,subscribe:!0})],Ks.prototype,"entries",2);No([d({converter:Be(!0)})],Ks.prototype,"showlabel",2);No([d({converter:Be(!0)})],Ks.prototype,"showTime",2);Ks=No([V("notation-content")],Ks);var BS=Object.defineProperty,GS=Object.getOwnPropertyDescriptor,ks=(r,e,t,i)=>{for(var s=i>1?void 0:i?GS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&BS(e,t,s),s};let is=class extends Xe{constructor(){super(...arguments),this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observer=null}connectedCallback(){super.connectedCallback()}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');this.log("SLOT",r),r&&(this.log("SLOT",r.assignedElements()),this.notationList=Si(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=Si(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=Si(r.assignedElements())}))}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges()}willUpdate(r){super.willUpdate(r),this.log("Changed",r)}updateNotationsMs(r){this.notationCurrent=Hh(r,this)}render(){return p`
        
            <div>Toto je test notatora</div>

            <div>
                Počet ${this.notationList.length}
            </div>

            <div>${[1,20,1e3,1e3*15,1e3*60,1e3*1e3].map(r=>p`<button @click=${()=>this.updateNotationsMs(r)}>${r}</button>`)}</div>

            <div>
                <h2>Aktivní</h2>

                <slot name="notation"></slot>
            </div>

            <notation-timeline></notation-timeline>

            <notation-content></notation-content>
        
        `}};ks([v()],is.prototype,"ms",2);ks([v(),zr({flatten:!0})],is.prototype,"_notationSlot",2);ks([v()],is.prototype,"notations",2);ks([v(),q({context:jo})],is.prototype,"duration",2);ks([v(),q({context:zo})],is.prototype,"notationList",2);ks([v(),q({context:Fo})],is.prototype,"notationCurrent",2);is=ks([V("notation-test")],is);var VS=Object.defineProperty,YS=Object.getOwnPropertyDescriptor,Bh=(r,e,t,i)=>{for(var s=i>1?void 0:i?YS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&VS(e,t,s),s};let Fn=class extends Xe{renderEntry(r){if(r.from!==void 0&&r.to!==void 0){const e=r.from/this.duration*100,i=r.to/this.duration*100-e;return p`<div class="entry" style="left: ${e}%; width: ${i}%;">
                ${r.label!==void 0?p`<div class="entry-tooltip">
                    <div>${r.label}</div>
                </div>`:C}
            </div>`}return C}render(){return p`<div class="container">
            ${Uh(this.entries,this.renderEntry.bind(this))}
        </div>`}};Fn.styles=ae`
    
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

    `;Bh([v(),le({context:zo,subscribe:!0})],Fn.prototype,"entries",2);Bh([le({context:jo,subscribe:!0})],Fn.prototype,"duration",2);Fn=Bh([V("notation-timeline")],Fn);var qS=Object.defineProperty,XS=Object.getOwnPropertyDescriptor,qe=(r,e,t,i)=>{for(var s=i>1?void 0:i?XS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qS(e,t,s),s};let He=class extends Xe{constructor(){super(...arguments),this.fileProviderRef=pe(),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.collapsed=!1,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observerMutation=null}connectedCallback(){super.connectedCallback(),this.observerResize=new ResizeObserver(r=>{const e=r[0];e&&(e.contentRect.width>1e3?this.collapsed===!0&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0))}),this.observerResize.observe(this)}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges(),this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.add(this.UUID,e=>{this.duration=e.timeline.duration,e.timeline.addListener(this.UUID,t=>{this.ms=t,this.updateNotationsMs(t)})})}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=Si(r.assignedElements()),this.observerMutation=new MutationObserver(()=>{this.notationList=Si(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observerMutation)==null||t.disconnect(),this.notationList=Si(r.assignedElements())}))}updateNotationsMs(r){this.notationCurrent=Hh(r,this)}render(){var t;const r=this.fileProviderRef.value===void 0?x(w.loading):this.label??((t=this.fileProviderRef.value.file)==null?void 0:t.fileName)??x(w.file),e={content:!0,content__collapsed:this.collapsed,content__expanded:!this.collapsed};return p`<manager-provider
      slug="manager_${this.UUID}"
      palette=${this.palette}
      autoclear=${this.autoclear}
    >
      <registry-provider 
        slug="registry_${this.UUID}"
        from=${ee(this.from)}
        to=${ee(this.to)}
        opacity=${ee(this.opacity)}
        autoclear=${this.autoclear}
      >
        <group-provider 
          slug="group_${this.UUID}"
        >
          
          <file-provider
            ${ye(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${ee(this.visible)}
            analysis1=${ee(this.analysis1)}
            analysis2=${ee(this.analysis2)}
            analysis3=${ee(this.analysis3)}
            analysis4=${ee(this.analysis4)}
            analysis5=${ee(this.analysis5)}
            analysis6=${ee(this.analysis6)}
            analysis7=${ee(this.analysis7)}
            speed=${ee(this.speed)}
            autoclear=${this.autoclear}
          >
            
            <thermal-app
              author=${ee(this.author)} 
              recorded=${ee(this.recorded)} 
              license=${ee(this.license)}
              label="${r}"
            >

              <div class="${Xt(e)}">

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
    
    `}};He.styles=ae`
  
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
  
  `;qe([d({type:String,reflect:!0})],He.prototype,"url",2);qe([d({type:String,reflect:!0})],He.prototype,"visible",2);qe([d({type:String,reflect:!0,attribute:!0})],He.prototype,"palette",2);qe([d({type:Number,reflect:!0,attribute:!0})],He.prototype,"opacity",2);qe([d({type:Number,reflect:!0})],He.prototype,"from",2);qe([d({type:Number,reflect:!0})],He.prototype,"to",2);qe([d()],He.prototype,"author",2);qe([d()],He.prototype,"recorded",2);qe([d()],He.prototype,"license",2);qe([d()],He.prototype,"label",2);qe([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],He.prototype,"showembed",2);qe([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],He.prototype,"showabout",2);qe([d({type:String,reflect:!1,attribute:!0,converter:Be(!1)})],He.prototype,"showtutorial",2);qe([d({type:String,reflect:!1,converter:Be(!0)})],He.prototype,"showfullscreen",2);qe([d({type:String,reflect:!0,converter:Be(!0)})],He.prototype,"showhistogram",2);qe([q({context:Jr}),d({type:String,reflect:!0,converter:Be(!0)})],He.prototype,"interactiveanalysis",2);qe([d({type:String,reflect:!0})],He.prototype,"analysis1",2);qe([d({type:String,reflect:!0})],He.prototype,"analysis2",2);qe([d({type:String,reflect:!0})],He.prototype,"analysis3",2);qe([d({type:String,reflect:!0})],He.prototype,"analysis4",2);qe([d({type:String,reflect:!0})],He.prototype,"analysis5",2);qe([d({type:String,reflect:!0})],He.prototype,"analysis6",2);qe([d({type:String,reflect:!0})],He.prototype,"analysis7",2);qe([d({type:String,reflect:!0})],He.prototype,"ms",2);qe([d({type:String,reflect:!0})],He.prototype,"speed",2);qe([d({type:String,reflect:!0})],He.prototype,"autoclear",2);qe([v()],He.prototype,"collapsed",2);qe([v(),zr({flatten:!0})],He.prototype,"_notationSlot",2);qe([v()],He.prototype,"notations",2);qe([v(),q({context:jo})],He.prototype,"duration",2);qe([v(),q({context:zo})],He.prototype,"notationList",2);qe([v(),q({context:Fo})],He.prototype,"notationCurrent",2);He=qe([V("thermal-lesson-app")],He);Qf();eg();console.info(`@labir/embed ${Ed}
Author: ${Xp}`);
