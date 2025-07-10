var tf=Object.defineProperty;var rf=(r,e,t)=>e in r?tf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(rf(r,typeof e!="symbol"?e+"":e,t),t);const As="1.2.68",sf="Jan Jáchim <jachim5@gmail.com>",He=r=>typeof r=="string",ln=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},Zh=r=>r==null?"":""+r,nf=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},af=/###/g,Jh=r=>r&&r.indexOf("###")>-1?r.replace(af,"."):r,Qh=r=>!r||He(r),un=(r,e,t)=>{const i=He(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(Qh(r))return{};const n=Jh(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return Qh(r)?{}:{obj:r,k:Jh(i[s])}},ec=(r,e,t)=>{const{obj:i,k:s}=un(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=un(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=un(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},of=(r,e,t,i)=>{const{obj:s,k:n}=un(r,e,Object);s[n]=s[n]||[],s[n].push(t)},Da=(r,e)=>{const{obj:t,k:i}=un(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},lf=(r,e,t)=>{const i=Da(r,t);return i!==void 0?i:Da(e,t)},$d=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?He(r[i])||r[i]instanceof String||He(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):$d(r[i],e[i],t):r[i]=e[i]);return r},Ss=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var hf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const cf=r=>He(r)?r.replace(/[&<>"'\/]/g,e=>hf[e]):r;class df{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const uf=[" ",",","?","!",";"],pf=new df(20),ff=(r,e,t)=>{e=e||"",t=t||"";const i=uf.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=pf.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},ml=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},Ta=r=>r==null?void 0:r.replace("_","-"),gf={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Ma{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||gf,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(He(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Ma(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Ma(this.logger,e)}}var Jr=new Ma;class eo{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class tc extends eo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,d;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):He(i)&&n?o.push(...i.split(n)):o.push(i)));const l=Da(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!He(i)?l:ml((d=(h=this.data)==null?void 0:h[e])==null?void 0:d[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),ec(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(He(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=Da(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?$d(l,i,n):l={...l,...i},ec(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var kd={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const rc={},ic=r=>!He(r)&&typeof r!="boolean"&&typeof r!="number";class Ra extends eo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),nf(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Jr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!ff(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:He(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:He(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,d=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(d){const N=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${N}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${N}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const u=this.resolve(e,t);let p=u==null?void 0:u.res;const S=(u==null?void 0:u.usedKey)||a,y=(u==null?void 0:u.exactUsedKey)||a,D=["[object Number]","[object Function]","[object RegExp]"],L=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,X=!this.i18nFormat||this.i18nFormat.handleAsObject,O=t.count!==void 0&&!He(t.count),j=Ra.hasDefaultValue(t),K=O?this.pluralResolver.getSuffix(h,t.count,t):"",G=t.ordinal&&O?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",ie=O&&!t.ordinal&&t.count===0,v=ie&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${K}`]||t[`defaultValue${G}`]||t.defaultValue;let b=p;X&&!p&&j&&(b=v);const w=ic(b),E=Object.prototype.toString.apply(b);if(X&&b&&w&&D.indexOf(E)<0&&!(He(L)&&Array.isArray(b))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const N=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,b,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(u.res=N,u.usedParams=this.getUsedParamsDetails(t),u):N}if(n){const N=Array.isArray(b),R=N?[]:{},F=N?y:S;for(const U in b)if(Object.prototype.hasOwnProperty.call(b,U)){const J=`${F}${n}${U}`;j&&!p?R[U]=this.translate(J,{...t,defaultValue:ic(v)?v[U]:void 0,joinArrays:!1,ns:o}):R[U]=this.translate(J,{...t,joinArrays:!1,ns:o}),R[U]===J&&(R[U]=b[U])}p=R}}else if(X&&He(L)&&Array.isArray(p))p=p.join(L),p&&(p=this.extendTranslation(p,e,t,i));else{let N=!1,R=!1;!this.isValidLookup(p)&&j&&(N=!0,p=v),this.isValidLookup(p)||(R=!0,p=a);const U=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&R?void 0:p,J=j&&v!==p&&this.options.updateMissing;if(R||N||J){if(this.logger.log(J?"updateKey":"missingKey",h,l,a,J?v:p),n){const ue=this.resolve(a,{...t,keySeparator:!1});ue&&ue.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let he=[];const C=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&C&&C[0])for(let ue=0;ue<C.length;ue++)he.push(C[ue]);else this.options.saveMissingTo==="all"?he=this.languageUtils.toResolveHierarchy(t.lng||this.language):he.push(t.lng||this.language);const Z=(ue,ae,$e)=>{var Re;const Te=j&&$e!==p?$e:U;this.options.missingKeyHandler?this.options.missingKeyHandler(ue,l,ae,Te,J,t):(Re=this.backendConnector)!=null&&Re.saveMissing&&this.backendConnector.saveMissing(ue,l,ae,Te,J,t),this.emit("missingKey",ue,l,ae,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?he.forEach(ue=>{const ae=this.pluralResolver.getSuffixes(ue,t);ie&&t[`defaultValue${this.options.pluralSeparator}zero`]&&ae.indexOf(`${this.options.pluralSeparator}zero`)<0&&ae.push(`${this.options.pluralSeparator}zero`),ae.forEach($e=>{Z([ue],a+$e,t[`defaultValue${$e}`]||v)})}):Z(he,a,v))}p=this.extendTranslation(p,e,t,u,i),R&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${a}`),(R||N)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,N?p:void 0))}return s?(u.res=p,u.usedParams=this.getUsedParamsDetails(t),u):p}extendTranslation(e,t,i,s,n){var h,d;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const u=He(e)&&(((d=i==null?void 0:i.interpolation)==null?void 0:d.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(u){const y=e.match(this.interpolator.nestingRegexp);p=y&&y.length}let S=i.replace&&!He(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),e=this.interpolator.interpolate(e,S,i.lng||this.language||s.usedLng,i),u){const y=e.match(this.interpolator.nestingRegexp),D=y&&y.length;p<D&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var y=arguments.length,D=new Array(y),L=0;L<y;L++)D[L]=arguments[L];return(n==null?void 0:n[0])===D[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${D[0]} in key: ${t[0]}`),null):a.translate(...D,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=He(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=kd.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return He(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),d=h.key;s=d;let u=h.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const p=t.count!==void 0&&!He(t.count),S=p&&!t.ordinal&&t.count===0,y=t.context!==void 0&&(He(t.context)||typeof t.context=="number")&&t.context!=="",D=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);u.forEach(L=>{var X,O;this.isValidLookup(i)||(o=L,!rc[`${D[0]}-${L}`]&&((X=this.utils)!=null&&X.hasLoadedNamespace)&&!((O=this.utils)!=null&&O.hasLoadedNamespace(o))&&(rc[`${D[0]}-${L}`]=!0,this.logger.warn(`key "${s}" for languages "${D.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),D.forEach(j=>{var ie;if(this.isValidLookup(i))return;a=j;const K=[d];if((ie=this.i18nFormat)!=null&&ie.addLookupKeys)this.i18nFormat.addLookupKeys(K,d,j,L,t);else{let v;p&&(v=this.pluralResolver.getSuffix(j,t.count,t));const b=`${this.options.pluralSeparator}zero`,w=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(K.push(d+v),t.ordinal&&v.indexOf(w)===0&&K.push(d+v.replace(w,this.options.pluralSeparator)),S&&K.push(d+b)),y){const E=`${d}${this.options.contextSeparator}${t.context}`;K.push(E),p&&(K.push(E+v),t.ordinal&&v.indexOf(w)===0&&K.push(E+v.replace(w,this.options.pluralSeparator)),S&&K.push(E+b))}}let G;for(;G=K.pop();)this.isValidLookup(i)||(n=G,i=this.getResource(j,L,G,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!He(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class sc{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Jr.create("languageUtils")}getScriptPartFromCode(e){if(e=Ta(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ta(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(He(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),He(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return He(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):He(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const nc={zero:0,one:1,two:2,few:3,many:4,other:5},ac={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class mf{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Jr.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Ta(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),ac;if(!e.match(/-|_/))return ac;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>nc[s]-nc[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const oc=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=lf(r,e,t);return!n&&s&&He(t)&&(n=ml(r,t,i),n===void 0&&(n=ml(e,t,i))),n},rl=r=>r.replace(/\$/g,"$$$$");class yf{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Jr.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:d,unescapePrefix:u,nestingPrefix:p,nestingPrefixEscaped:S,nestingSuffix:y,nestingSuffixEscaped:D,nestingOptionsSeparator:L,maxReplaces:X,alwaysFormat:O}=e.interpolation;this.escape=t!==void 0?t:cf,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?Ss(n):a||"{{",this.suffix=o?Ss(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=d?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=p?Ss(p):S||Ss("$t("),this.nestingSuffix=y?Ss(y):D||Ss(")"),this.nestingOptionsSeparator=L||",",this.maxReplaces=X||1e3,this.alwaysFormat=O!==void 0?O:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var S;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=y=>{if(y.indexOf(this.formatSeparator)<0){const O=oc(t,l,y,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(O,void 0,i,{...s,...t,interpolationkey:y}):O}const D=y.split(this.formatSeparator),L=D.shift().trim(),X=D.join(this.formatSeparator).trim();return this.format(oc(t,l,L,this.options.keySeparator,this.options.ignoreJSONStructure),X,i,{...s,...t,interpolationkey:L})};this.resetRegExp();const d=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,u=((S=s==null?void 0:s.interpolation)==null?void 0:S.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:y=>rl(y)},{regex:this.regexp,safeValue:y=>this.escapeValue?rl(this.escape(y)):rl(y)}].forEach(y=>{for(o=0;n=y.regex.exec(e);){const D=n[1].trim();if(a=h(D),a===void 0)if(typeof d=="function"){const X=d(e,n,s);a=He(X)?X:""}else if(s&&Object.prototype.hasOwnProperty.call(s,D))a="";else if(u){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${D} for interpolating ${e}`),a="";else!He(a)&&!this.useRawValueToEscape&&(a=Zh(a));const L=y.safeValue(a);if(e=e.replace(n[0],L),u?(y.regex.lastIndex+=a.length,y.regex.lastIndex-=n[0].length):y.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const u=l.split(new RegExp(`${d}[ ]*{`));let p=`{${u[1]}`;l=u[0],p=this.interpolate(p,a);const S=p.match(/'/g),y=p.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!y||y.length%2!==0)&&(p=p.replace(/'/g,'"'));try{a=JSON.parse(p),h&&(a={...h,...a})}catch(D){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,D),`${l}${d}${p}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!He(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const d=s[1].split(this.formatSeparator).map(u=>u.trim());s[1]=d.shift(),l=d,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!He(n))return n;He(n)||(n=Zh(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((d,u)=>this.format(d,u,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const vf=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),d=o.trim();t[d]||(t[d]=h),h==="false"&&(t[d]=!1),h==="true"&&(t[d]=!0),isNaN(h)||(t[d]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},$s=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(Ta(i),s),e[a]=o),o(t)}};class bf{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Jr.create("formatter"),this.options=e,this.formats={number:$s((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:$s((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:$s((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:$s((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:$s((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=$s(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var u;const{formatName:h,formatOptions:d}=vf(l);if(this.formats[h]){let p=o;try{const S=((u=s==null?void 0:s.formatParams)==null?void 0:u[s.interpolationkey])||{},y=S.locale||S.lng||s.locale||s.lng||i;p=this.formats[h](o,y,{...d,...s,...S})}catch(S){this.logger.warn(S)}return p}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const wf=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class xf extends eo{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Jr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let d=!0;t.forEach(u=>{const p=`${h}|${u}`;!i.reload&&this.store.hasResourceBundle(h,u)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?a[p]===void 0&&(a[p]=!0):(this.state[p]=1,d=!1,a[p]===void 0&&(a[p]=!0),n[p]===void 0&&(n[p]=!0),l[u]===void 0&&(l[u]=!0)))}),d||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{of(l.loaded,[n],a),wf(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const d=l.loaded[h];d.length&&d.forEach(u=>{o[h][u]===void 0&&(o[h][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(h&&d&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,d)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(d=>o(null,d)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();He(e)&&(e=this.languageUtils.toResolveHierarchy(e)),He(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,d,u,p;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((u=(d=this.services)==null?void 0:d.utils)!=null&&u.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((p=this.backend)!=null&&p.create){const S={...a,isUpdate:n},y=this.backend.create.bind(this.backend);if(y.length<6)try{let D;y.length===5?D=y(e,t,i,s,S):D=y(e,t,i,s),D&&typeof D.then=="function"?D.then(L=>o(null,L)).catch(o):o(null,D)}catch(D){o(D)}else y(e,t,i,s,o,S)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const lc=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),He(r[1])&&(e.defaultValue=r[1]),He(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),hc=r=>{var e,t;return He(r.ns)&&(r.ns=[r.ns]),He(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),He(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},ya=()=>{},Sf=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class yn extends eo{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=hc(e),this.services={},this.logger=Jr,this.modules={external:[]},Sf(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(He(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=lc();this.options={...s,...this.options,...hc(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=d=>d?typeof d=="function"?new d:d:null;if(!this.options.isClone){this.modules.logger?Jr.init(n(this.modules.logger),this.options):Jr.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:d=bf;const u=new sc(this.options);this.store=new tc(this.options.resources,this.options);const p=this.services;p.logger=Jr,p.resourceStore=this.store,p.languageUtils=u,p.pluralResolver=new mf(u,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(p.formatter=n(d),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new yf(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new xf(n(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(S){for(var y=arguments.length,D=new Array(y>1?y-1:0),L=1;L<y;L++)D[L-1]=arguments[L];e.emit(S,...D)}),this.modules.languageDetector&&(p.languageDetector=n(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=n(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Ra(this.services,this.options),this.translator.on("*",function(S){for(var y=arguments.length,D=new Array(y>1?y-1:0),L=1;L<y;L++)D[L-1]=arguments[L];e.emit(S,...D)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ya),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return e.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return e.store[d](...arguments),e}});const l=ln(),h=()=>{const d=(u,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),i(u,p)};if(this.languages&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ya;const s=He(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(u=>{u!=="cimode"&&o.indexOf(u)<0&&o.push(u)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>l(d)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=ln();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ya),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&kd.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=ln();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var d,u;!e&&!l&&this.services.languageDetector&&(l=[]);const h=He(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(u=(d=this.services.languageDetector)==null?void 0:d.cacheUserLanguage)==null||u.call(d,h)),this.loadResources(h,p=>{a(p,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,d=new Array(h>2?h-2:0),u=2;u<h;u++)d[u-2]=arguments[u];l=s.options.overloadTranslationOptionHandler([a,o].concat(d))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const p=s.options.keySeparator||".";let S;return l.keyPrefix&&Array.isArray(a)?S=a.map(y=>`${l.keyPrefix}${p}${y}`):S=l.keyPrefix?`${l.keyPrefix}${p}${a}`:a,s.t(S,l)};return He(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=ln();return this.options.ns?(He(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=ln();He(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new sc(lc());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new yn(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ya;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new yn(s);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const o=Object.keys(this.store.data).reduce((l,h)=>(l[h]={...this.store.data[h]},Object.keys(l[h]).reduce((d,u)=>(d[u]={...l[h][u]},d),{})),{});n.store=new tc(o,s),n.services.resourceStore=n.store}return n.translator=new Ra(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),d=1;d<l;d++)h[d-1]=arguments[d];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const St=yn.createInstance();St.createInstance=yn.createInstance;St.createInstance;St.dir;St.init;St.loadResources;St.reloadResources;St.use;St.changeLanguage;St.getFixedT;const M=St.t;St.exists;St.setDefaultNamespace;St.hasLoadedNamespace;St.loadNamespaces;St.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn=globalThis,Ia=pn.trustedTypes,cc=Ia?Ia.createPolicy("lit-html",{createHTML:r=>r}):void 0,jl="$lit$",gi=`lit$${Math.random().toFixed(9).slice(2)}$`,Nl="?"+gi,$f=`<${Nl}>`,as=document,vn=()=>as.createComment(""),bn=r=>r===null||typeof r!="object"&&typeof r!="function",Wl=Array.isArray,Cd=r=>Wl(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",il=`[ 	
\f\r]`,hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dc=/-->/g,uc=/>/g,es=RegExp(`>|${il}(?:([^\\s"'>=/]+)(${il}*=${il}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pc=/'/g,fc=/"/g,_d=/^(?:script|style|textarea|title)$/i,kf=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=kf(1),Ii=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),gc=new WeakMap,ss=as.createTreeWalker(as,129);function Pd(r,e){if(!Wl(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return cc!==void 0?cc.createHTML(e):e}const Ed=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",a=hn;for(let o=0;o<t;o++){const l=r[o];let h,d,u=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===hn?d[1]==="!--"?a=dc:d[1]!==void 0?a=uc:d[2]!==void 0?(_d.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=es):d[3]!==void 0&&(a=es):a===es?d[0]===">"?(a=s??hn,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,h=d[1],a=d[3]===void 0?es:d[3]==='"'?fc:pc):a===fc||a===pc?a=es:a===dc||a===uc?a=hn:(a=es,s=void 0);const S=a===es&&r[o+1].startsWith("/>")?" ":"";n+=a===hn?l+$f:u>=0?(i.push(h),l.slice(0,u)+jl+l.slice(u)+gi+S):l+gi+(u===-2?o:S)}return[Pd(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let yl=class Ad{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,d]=Ed(e,t);if(this.el=Ad.createElement(h,i),ss.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=ss.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(jl)){const p=d[a++],S=s.getAttribute(u).split(gi),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:y[2],strings:S,ctor:y[1]==="."?Dd:y[1]==="?"?Td:y[1]==="@"?Md:Mn}),s.removeAttribute(u)}else u.startsWith(gi)&&(l.push({type:6,index:n}),s.removeAttribute(u));if(_d.test(s.tagName)){const u=s.textContent.split(gi),p=u.length-1;if(p>0){s.textContent=Ia?Ia.emptyScript:"";for(let S=0;S<p;S++)s.append(u[S],vn()),ss.nextNode(),l.push({type:2,index:++n});s.append(u[p],vn())}}}else if(s.nodeType===8)if(s.data===Nl)l.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(gi,u+1))!==-1;)l.push({type:7,index:n}),u+=gi.length-1}n++}}static createElement(e,t){const i=as.createElement("template");return i.innerHTML=e,i}};function os(r,e,t=r,i){var a,o;if(e===Ii)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=bn(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=os(r,s._$AS(r,e.values),s,i)),e}let Ld=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??as).importNode(t,!0);ss.currentNode=s;let n=ss.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new to(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Rd(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=ss.nextNode(),a++)}return ss.currentNode=as,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},to=class Od{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=os(this,e,t),bn(e)?e===V||e==null||e===""?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==Ii&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Cd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&bn(this._$AH)?this._$AA.nextSibling.data=e:this.T(as.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=yl.createElement(Pd(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new Ld(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=gc.get(e.strings);return t===void 0&&gc.set(e.strings,t=new yl(e)),t}k(e){Wl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Od(this.O(vn()),this.O(vn()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class Mn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=os(this,e,t,0),a=!bn(e)||e!==this._$AH&&e!==Ii,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=os(this,o[i+l],t,l),h===Ii&&(h=this._$AH[l]),a||(a=!bn(h)||h!==this._$AH[l]),h===V?e=V:e!==V&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Dd extends Mn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class Td extends Mn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}let Md=class extends Mn{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=os(this,e,t,0)??V)===Ii)return;const i=this._$AH,s=e===V&&i!==V||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Rd=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){os(this,e)}};const Cf={M:jl,P:gi,A:Nl,C:1,L:Ed,R:Ld,D:Cd,V:os,I:to,H:Mn,N:Td,U:Md,B:Dd,F:Rd},sl=pn.litHtmlPolyfillSupport;sl==null||sl(yl,to),(pn.litHtmlVersions??(pn.litHtmlVersions=[])).push("3.2.1");const Id=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new to(e.insertBefore(vn(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:_f}=Cf,mc=(r,e)=>(r==null?void 0:r._$litType$)!==void 0,Pf=r=>{var e;return((e=r==null?void 0:r._$litType$)==null?void 0:e.h)!=null},Ef=r=>r.strings===void 0,yc=()=>document.createComment(""),vc=(r,e,t)=>{var n;const i=r._$AA.parentNode,s=r._$AB;if(t===void 0){const a=i.insertBefore(yc(),s),o=i.insertBefore(yc(),s);t=new _f(a,o,r,r.options)}else{const a=t._$AB.nextSibling,o=t._$AM,l=o!==r;if(l){let h;(n=t._$AQ)==null||n.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==o._$AU&&t._$AP(h)}if(a!==s||l){let h=t._$AA;for(;h!==a;){const d=h.nextSibling;i.insertBefore(h,s),h=d}}}return t},Af={},bc=(r,e=Af)=>r._$AH=e,wc=r=>r._$AH,Lf=r=>{r._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rn=r=>(...e)=>({_$litDirective$:r,values:e});let ro=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fn=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),fn(s,e);return!0},Ua=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Ud=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Tf(e)}};function Of(r){this._$AN!==void 0?(Ua(this),this._$AM=r,Ud(this)):this._$AM=r}function Df(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)fn(i[n],!1),Ua(i[n]);else i!=null&&(fn(i,!1),Ua(i));else fn(this,r)}const Tf=r=>{r.type==fi.CHILD&&(r._$AP??(r._$AP=Df),r._$AQ??(r._$AQ=Of))};let Mf=class extends ro{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Ud(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(fn(this,e),Ua(this))}setValue(e){if(Ef(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},xc=null,Fd=()=>{};new Promise(r=>{Fd=r});const Rf={type:"3rdParty",init(r){If(r)}},If=r=>{xc=r,Fd(xc)},Sc=new Map,Uf=()=>{Sc.forEach((r,e)=>{(e.isConnected===!1||Ff(e)===!1)&&Sc.delete(e)})};setInterval(Uf,1e4);const Ff=r=>{const e=r.part;if(e.type===fi.ATTRIBUTE)return e.element.isConnected;if(e.type===fi.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===fi.PROPERTY||e.type===fi.BOOLEAN_ATTRIBUTE||e.type===fi.EVENT||e.type===fi.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:zf,forEach:jf}=[];function Nf(r){return jf.call(zf.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const $c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Wf=function(r,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!$c.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!$c.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},kc={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=Wf(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var Bf={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return kc.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&kc.create(t,r,i,s,n)}},Hf={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let cn=null;const Cc=()=>{if(cn!==null)return cn;try{cn=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{cn=!1}return cn};var Vf={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&Cc())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&Cc()&&window.localStorage.setItem(t,r)}};let dn=null;const _c=()=>{if(dn!==null)return dn;try{dn=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{dn=!1}return dn};var Gf={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&_c())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&_c()&&window.sessionStorage.setItem(t,r)}},qf={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},Yf={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},Xf={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},Kf={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let zd=!1;try{document.cookie,zd=!0}catch{}const jd=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];zd||jd.splice(1,1);const Zf=()=>({order:jd,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class Nd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Nf(t,this.options||{},Zf()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Bf),this.addDetector(Hf),this.addDetector(Vf),this.addDetector(Gf),this.addDetector(qf),this.addDetector(Yf),this.addDetector(Xf),this.addDetector(Kf)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}Nd.type="languageDetector";const Jf={layout_simple:"Simple layout",layout_advanced:"Evaluation layout",layout_nogui:"No GUI",layout_lesson:"Lesson layout",share:"Share",fileloadingerror:"File loading error",embedhint:"To embed this block in another website, use the following code:",embedlibrary:"Insert the library - once in HTML head",embedcomponent:"Use the following code anywhere in HTML body",copy:"Copy",remotefoldersbrowseraddfolderhint:"If you add another folder in the storage, you will see additional evaluation options here.",loading:"Loading",config:"Settings",temperature:"Temperature",file:"File",upload:"Upload",uploadafile:"Upload a file",selectfile:"Select a file",addfiles:"Add file(s)",clear:"Clear",dragorselectfile:"Drag and drop an LRC file or select it from disk",detail:"Detail",showeverything:"Show everything",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",open:"Open",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automatic range",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visual file name",visiblefileurl:"Visual file URL",visiblefiledownload:"Visual file download",togglevisibleimage:"Switch IR / VIS image",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",exportimagewidth:"Exported image width",exportimagefontsize:"Exported image font size",exportgroupname:"Export group name",exportfilenames:"Export file names",exportdimensions:"Export dimensions",exportgroup:"Export group",exportcontent:"Export content",numberofcolumns:"Number of columns",thermalscale:"Thermal scale",filedate:"File date",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",analyses:"Analyses",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",analysissync:"Synchronise analyses",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser"},Qf={loading:"Chargement",config:"Einstellungen",temperature:"Temperature",upload:"Téléverser",uploadafile:"Téléverser un fichier",selectfile:"Sélectionner un fichier",addfiles:"Ajouter un/des fichier(s)",clear:"Effacer",dragorselectfile:"Glissez-déposez un fichier LRC ou sélectionnez-le depuis le disque",share:"Partager",fileloadingerror:"Erreur de chargement du fichier",embedhint:"Pour intégrer ce bloc dans un autre site Web, utilisez le code suivant :",embedlibrary:"Insérez la bibliothèque – une seule fois dans l'en-tête HTML",embedcomponent:"Utilisez le code suivant n'importe où dans le corps HTML",copy:"Copier",remotefoldersbrowseraddfolderhint:"Si vous ajoutez un autre dossier dans le référentiel, vous verrez ici des options d'évaluation supplémentaires.",file:"fichier",detail:"Détail",showeverything:"Montrer tout",analysissync:"Synchroniser les analyses",layout_simple:"Disposition simple",layout_advanced:"Disposition d'analyse",layout_nogui:"Pas d'interface graphique",layout_lesson:"Disposition de leçon",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",open:"Ouvrir",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visuel",visiblefileurl:"URL de l'image visuel",visiblefiledownload:"Télécharger l'image visuel",togglevisibleimage:"Commuter l'image IR / VIS",time:"Temps",duration:"Durée",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Genre du fichier",type:"Genre",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",exportimagewidth:"Largeur de l'image exportée",exportimagefontsize:"Taille de la police de l'image exportée",exportgroupname:"Nom du groupe exporté",exportfilenames:"Noms de fichiers exportés",exportdimensions:"Dimensions d’exportation",exportgroup:"Exporter le groupe",exportcontent:"Exporter le contenu",numberofcolumns:"Nombre de colonnes",thermalscale:"Échelle thermique",analyses:"Analyses",filedate:"Date du fichier",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous afficher aussi",youmayalsoadd:"Vous pouvez afficher aussi",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Lecture",pause:"Pause",stop:"Arrêter",date:"Date",frame:"Image",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes lisses",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieure",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieure",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format CSV",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants"},eg={loading:"Načítám",config:"Nastavení",layout_simple:"Jednoduché rozvržení",layout_advanced:"Analytické rozvržení",layout_nogui:"Bez GUI",layout_lesson:"Rozvržení lekce",share:"Sdílet",fileloadingerror:"Chyba při načítání souboru",embedhint:"Chcete-li vložit tento blok na jinou webovou stránku, použijte následující kód:",embedlibrary:"Vložte knihovnu – jednou v HTML hlavičce",embedcomponent:"Použijte následující kód kdekoli v HTML těle",copy:"Kopírovat",remotefoldersbrowseraddfolderhint:"Pokud v úložišti přidáte další složku, uvidíte zde další možnosti vyhodnocení.",temperature:"Teplota",upload:"Nahrát",uploadafile:"Nahrát soubor",selectfile:"Vybrat soubor",addfiles:"Přidat soubor(y)",clear:"Smazat",dragorselectfile:"Přetáhněte LRC soubor nebo jej vyberte z disku",file:"soubor",detail:"Detail",showeverything:"Zobrazit vše",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",open:"Otevřít",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",togglevisibleimage:"Přepnout IR / VIS obraz",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",exportimagewidth:"Šířka exportovaných obrázků",exportimagefontsize:"Velikost písma v exportovaných obrázcích",exportgroupname:"Název skupiny",exportfilenames:"Názvy souborů",exportdimensions:"Rozměry exportu",exportgroup:"Export skupiny",exportcontent:"Obsah exportu",numberofcolumns:"Počet sloupců",thermalscale:"Teplotní škála",analyses:"Analýzy",filedate:"File date",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",analysissync:"Synchronizovat analýzy",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek"},tg={loading:"Llwytho",config:"Gosodiadau",temperature:"Tymheredd",upload:"Llwytho i fyny",uploadafile:"Llwytho ffeil i fyny",selectfile:"Dewis ffeil",addfiles:"Ychwanegu ffeil(iau)",clear:"Clirio",dragorselectfile:"Llusgwch ffeil LRC neu dewiswch hi o'r ddisg",share:"Rhannu",fileloadingerror:"Gwall wrth lwytho'r ffeil",embedhint:"I fewnosod y bloc hwn mewn gwefan arall, defnyddiwch y cod canlynol:",embedlibrary:"Mewnosodwch y llyfrgell – unwaith yn pennyn HTML",embedcomponent:"Defnyddiwch y cod canlynol yn unrhyw le yn y corff HTML",copy:"Copïo",remotefoldersbrowseraddfolderhint:"Os ychwanegwch ffolder arall yn y gadwrfa, fe welwch opsiynau gwerthuso ychwanegol yma.",analysissync:"Cydamseru dadansoddiadau",file:"ffeil",detail:"Manylder",open:"Agor",showeverything:"Dangos popeth",layout_simple:"Cynllun syml",layout_advanced:"Cynllun dadansoddi",layout_nogui:"Dim GUI",layout_lesson:"Cynllun gwers",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r delwedd isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch yr ystod thermol yn awtomatig neu cyflewch yr ystod i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangos thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weledol",visiblefileurl:"URL ffeil weledol",visiblefiledownload:"Lawrlwythwch y ffeil weledol",togglevisibleimage:"Newid delwedd IR/VIS",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",exportimagewidth:"Lled delwedd wedi'i hallforio",exportimagefontsize:"Maint ffont delwedd wedi'i hallforio",exportgroupname:"Enw'r grŵp allforio",exportfilenames:"Enwau'r ffeiliau allforio",exportdimensions:"Dimensiynau allforio",exportgroup:"Allforio'r grŵp",exportcontent:"Allforio'r cynnwys",numberofcolumns:"Nifer y colofnau",thermalscale:"Graddfa thermol",analyses:"Dadansoddiadau",filedate:"Dyddiad y ffeil",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"wedi'u cetegoreiddio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau arddangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"yn ôl dydd",byhours:"yn ôl awr",byweeks:"yn ôl wythnos",bymonths:"yn ôl mis",byyears:"yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y delwedd isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell"},rg={loading:"Loading",config:"Paramètres",layout_simple:"Einfaches Layout",layout_advanced:"Analyse-Layout",layout_nogui:"Kein GUI",layout_lesson:"Lektions-Layout",share:"Teilen",fileloadingerror:"Fehler beim Laden der Datei",embedhint:"Um diesen Block in eine andere Website einzubetten, verwenden Sie den folgenden Code:",embedlibrary:"Bibliothek einfügen – einmal im HTML-Head",embedcomponent:"Verwenden Sie den folgenden Code überall im HTML-Body",copy:"Kopieren",remotefoldersbrowseraddfolderhint:"Wenn Sie einen weiteren Ordner im Repository hinzufügen, werden Ihnen hier zusätzliche Auswertungsmöglichkeiten angezeigt.",temperature:"Temperatur",upload:"Hochladen",uploadafile:"Datei hochladen",selectfile:"Datei auswählen",addfiles:"Datei(en) hinzufügen",clear:"Löschen",dragorselectfile:"Ziehen Sie eine LRC-Datei hierher oder wählen Sie sie von der Festplatte aus",analysissync:"Analysen synchronisieren",file:"Datei",detail:"Detail",showeverything:"Alles anzeigen",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",open:"Öffnen",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",togglevisibleimage:"IR/VIS-Bild umschalten",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",exportimagewidth:"Exportierte Bildbreite",exportimagefontsize:"Exportierte Bildschriftgröße",exportgroupname:"Exportgruppenname",exportfilenames:"Dateinamen exportieren",exportdimensions:"Exportabmessungen",exportgroup:"Gruppe exportieren",exportcontent:"Inhalt exportieren",numberofcolumns:"Anzahl der Spalten",thermalscale:"Thermische Skala",analyses:"Analysen",filedate:"Dateidatum",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner"};St.use(Rf).use(Nd).init({fallbackLng:"en",resources:{cs:{translation:eg},cy:{translation:tg},de:{translation:rg},en:{translation:Jf},fr:{translation:Qf}}});window.i18next=St;const nl=window.matchMedia("(prefers-color-scheme: dark)"),Wd="thermal-dark-mode",Pc=()=>{document.body.classList.add(Wd)},ig=()=>{document.body.classList.remove(Wd)},sg=()=>{nl.matches&&Pc();const r=e=>{e.matches?Pc():ig()};nl.addEventListener("change",r),nl.addListener(r)},ng=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pa=globalThis,Bl=Pa.ShadowRoot&&(Pa.ShadyCSS===void 0||Pa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hl=Symbol(),Ec=new WeakMap;let Bd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Hl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ec.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ec.set(t,e))}return e}toString(){return this.cssText}};const ag=r=>new Bd(typeof r=="string"?r:r+"",void 0,Hl),Pe=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Bd(t,r,Hl)},og=(r,e)=>{if(Bl)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Pa.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Ac=Bl?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ag(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:lg,defineProperty:hg,getOwnPropertyDescriptor:cg,getOwnPropertyNames:dg,getOwnPropertySymbols:ug,getPrototypeOf:pg}=Object,Mi=globalThis,Lc=Mi.trustedTypes,fg=Lc?Lc.emptyScript:"",al=Mi.reactiveElementPolyfillSupport,gn=(r,e)=>r,Fa={toAttribute(r,e){switch(e){case Boolean:r=r?fg:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Vl=(r,e)=>!lg(r,e),Oc={attribute:!0,type:String,converter:Fa,reflect:!1,hasChanged:Vl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Mi.litPropertyMetadata??(Mi.litPropertyMetadata=new WeakMap);let Es=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Oc){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&hg(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=cg(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Oc}static _$Ei(){if(this.hasOwnProperty(gn("elementProperties")))return;const e=pg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(gn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gn("properties"))){const t=this.properties,i=[...dg(t),...ug(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Ac(s))}else e!==void 0&&t.push(Ac(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return og(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Fa).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Fa;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Vl)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Es.elementStyles=[],Es.shadowRootOptions={mode:"open"},Es[gn("elementProperties")]=new Map,Es[gn("finalized")]=new Map,al==null||al({ReactiveElement:Es}),(Mi.reactiveElementVersions??(Mi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gr=class extends Es{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Id(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ii}};var Sd;gr._$litElement$=!0,gr.finalized=!0,(Sd=globalThis.litElementHydrateSupport)==null||Sd.call(globalThis,{LitElement:gr});const ol=globalThis.litElementPolyfillSupport;ol==null||ol({LitElement:gr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gg={attribute:!0,type:String,converter:Fa,reflect:!1,hasChanged:Vl},mg=(r=gg,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function m(r){return(e,t)=>typeof t=="object"?mg(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(r){return m({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yg=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Si(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return yg(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const vg={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function va(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function ba(r){return r.toString().indexOf("`")===-1}ba(r=>r``)||ba(r=>r`\0`)||ba(r=>r`\n`)||ba(r=>r`\u0000`);va``&&va`\0`&&va`\n`&&va`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let bg="google#safe";function wg(){if(typeof window<"u")return window.trustedTypes}function Hd(){var r;return(r=wg())!==null&&r!==void 0?r:null}let wa;function xg(){var r,e;if(wa===void 0)try{wa=(e=(r=Hd())===null||r===void 0?void 0:r.createPolicy(bg,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{wa=null}return wa}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Vd{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Dc(r){var e;const t=r,i=(e=xg())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Vd(t,vg)}function Sg(r){var e;if(!((e=Hd())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Vd)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Gd(r,...e){if(e.length===0)return Dc(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return Dc(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function $g(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function kg(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=$g(e||window);t&&r.setAttribute("nonce",t)}function qd(r,e,t){r.src=Sg(e),kg(r)}/**
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
 */const Cg=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),qd(t,Gd`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Yd(r={}){await Cg;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Tc(r){if(await Yd(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function _g(r){return await Yd(),new google.visualization.ChartWrapper({container:r})}const Xd=6048e5,Pg=864e5,Mc=Symbol.for("constructDateFrom");function Ui(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&Mc in r?r[Mc](e):r instanceof Date?new r.constructor(e):new Date(e)}function zt(r,e){return Ui(e||r,r)}let Eg={};function In(){return Eg}function ls(r,e){var o,l,h,d;const t=In(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((d=(h=t.locale)==null?void 0:h.options)==null?void 0:d.weekStartsOn)??0,s=zt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function za(r,e){return ls(r,{...e,weekStartsOn:1})}function Kd(r,e){const t=zt(r,e==null?void 0:e.in),i=t.getFullYear(),s=Ui(t,0);s.setFullYear(i+1,0,4),s.setHours(0,0,0,0);const n=za(s),a=Ui(t,0);a.setFullYear(i,0,4),a.setHours(0,0,0,0);const o=za(a);return t.getTime()>=n.getTime()?i+1:t.getTime()>=o.getTime()?i:i-1}function Rc(r){const e=zt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Ag(r,...e){const t=Ui.bind(null,e.find(i=>typeof i=="object"));return e.map(t)}function vl(r,e){const t=zt(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function Lg(r,e,t){const[i,s]=Ag(t==null?void 0:t.in,r,e),n=vl(i),a=vl(s),o=+n-Rc(n),l=+a-Rc(a);return Math.round((o-l)/Pg)}function Og(r,e){const t=Kd(r,e),i=Ui(r,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),za(i)}function Dg(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Zd(r){return!(!Dg(r)&&typeof r!="number"||isNaN(+zt(r)))}function Tg(r,e){const t=zt(r,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function Ic(r,e){const t=zt(r,e==null?void 0:e.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function Uc(r,e){const t=zt(r,e==null?void 0:e.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Mg(r,e){const t=zt(r,e==null?void 0:e.in),i=t.getFullYear();return t.setFullYear(i+1,0,0),t.setHours(23,59,59,999),t}function Jd(r,e){const t=zt(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Rg(r,e){const t=zt(r,e==null?void 0:e.in);return t.setMinutes(59,59,999),t}function Fc(r,e){var o,l;const t=In(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=zt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const Ig={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qd=(r,e,t)=>{let i;const s=Ig[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Ht(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Ug={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Fg={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},zg={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},jg={date:Ht({formats:Ug,defaultWidth:"full"}),time:Ht({formats:Fg,defaultWidth:"full"}),dateTime:Ht({formats:zg,defaultWidth:"full"})},Ng={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},eu=(r,e,t,i)=>Ng[r];function wt(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const Wg={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Bg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Hg={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Vg={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Gg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Yg=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},tu={ordinalNumber:Yg,era:wt({values:Wg,defaultWidth:"wide"}),quarter:wt({values:Bg,defaultWidth:"wide",argumentCallback:r=>r-1}),month:wt({values:Hg,defaultWidth:"wide"}),day:wt({values:Vg,defaultWidth:"wide"}),dayPeriod:wt({values:Gg,defaultWidth:"wide",formattingValues:qg,defaultFormattingWidth:"wide"})};function xt(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?Kg(o,u=>u.test(a)):Xg(o,u=>u.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const d=e.slice(a.length);return{value:h,rest:d}}}function Xg(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function Kg(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Un(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const Zg=/^(\d+)(th|st|nd|rd)?/i,Jg=/\d+/i,Qg={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},em={any:[/^b/i,/^(a|c)/i]},tm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},rm={any:[/1/i,/2/i,/3/i,/4/i]},im={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},sm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},nm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},am={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},om={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},lm={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ru={ordinalNumber:Un({matchPattern:Zg,parsePattern:Jg,valueCallback:r=>parseInt(r,10)}),era:xt({matchPatterns:Qg,defaultMatchWidth:"wide",parsePatterns:em,defaultParseWidth:"any"}),quarter:xt({matchPatterns:tm,defaultMatchWidth:"wide",parsePatterns:rm,defaultParseWidth:"any",valueCallback:r=>r+1}),month:xt({matchPatterns:im,defaultMatchWidth:"wide",parsePatterns:sm,defaultParseWidth:"any"}),day:xt({matchPatterns:nm,defaultMatchWidth:"wide",parsePatterns:am,defaultParseWidth:"any"}),dayPeriod:xt({matchPatterns:om,defaultMatchWidth:"any",parsePatterns:lm,defaultParseWidth:"any"})},hm={code:"en-US",formatDistance:Qd,formatLong:jg,formatRelative:eu,localize:tu,match:ru,options:{weekStartsOn:0,firstWeekContainsDate:1}};function cm(r,e){const t=zt(r,e==null?void 0:e.in);return Lg(t,Jd(t))+1}function dm(r,e){const t=zt(r,e==null?void 0:e.in),i=+za(t)-+Og(t);return Math.round(i/Xd)+1}function iu(r,e){var d,u,p,S;const t=zt(r,e==null?void 0:e.in),i=t.getFullYear(),s=In(),n=(e==null?void 0:e.firstWeekContainsDate)??((u=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??s.firstWeekContainsDate??((S=(p=s.locale)==null?void 0:p.options)==null?void 0:S.firstWeekContainsDate)??1,a=Ui((e==null?void 0:e.in)||r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=ls(a,e),l=Ui((e==null?void 0:e.in)||r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=ls(l,e);return+t>=+o?i+1:+t>=+h?i:i-1}function um(r,e){var o,l,h,d;const t=In(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((d=(h=t.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??1,s=iu(r,e),n=Ui((e==null?void 0:e.in)||r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),ls(n,e)}function pm(r,e){const t=zt(r,e==null?void 0:e.in),i=+ls(t,e)-+um(t,e);return Math.round(i/Xd)+1}function it(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Di={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return it(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):it(t+1,2)},d(r,e){return it(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return it(r.getHours()%12||12,e.length)},H(r,e){return it(r.getHours(),e.length)},m(r,e){return it(r.getMinutes(),e.length)},s(r,e){return it(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return it(s,e.length)}},ks={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},zc={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Di.y(r,e)},Y:function(r,e,t,i){const s=iu(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return it(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):it(n,e.length)},R:function(r,e){const t=Kd(r);return it(t,e.length)},u:function(r,e){const t=r.getFullYear();return it(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return it(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return it(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Di.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return it(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=pm(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):it(s,e.length)},I:function(r,e,t){const i=dm(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):it(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Di.d(r,e)},D:function(r,e,t){const i=cm(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):it(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return it(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return it(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return it(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=ks.noon:i===0?s=ks.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=ks.evening:i>=12?s=ks.afternoon:i>=4?s=ks.morning:s=ks.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Di.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Di.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):it(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):it(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Di.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Di.s(r,e)},S:function(r,e){return Di.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Nc(i);case"XXXX":case"XX":return ts(i);case"XXXXX":case"XXX":default:return ts(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return Nc(i);case"xxxx":case"xx":return ts(i);case"xxxxx":case"xxx":default:return ts(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+jc(i,":");case"OOOO":default:return"GMT"+ts(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+jc(i,":");case"zzzz":default:return"GMT"+ts(i,":")}},t:function(r,e,t){const i=Math.trunc(+r/1e3);return it(i,e.length)},T:function(r,e,t){return it(+r,e.length)}};function jc(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+it(n,2)}function Nc(r,e){return r%60===0?(r>0?"-":"+")+it(Math.abs(r)/60,2):ts(r,e)}function ts(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=it(Math.trunc(i/60),2),n=it(i%60,2);return t+s+e+n}const Wc=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},su=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},fm=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Wc(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Wc(i,e)).replace("{{time}}",su(s,e))},gm={p:su,P:fm},mm=/^D+$/,ym=/^Y+$/,vm=["D","DD","YY","YYYY"];function bm(r){return mm.test(r)}function wm(r){return ym.test(r)}function xm(r,e,t){const i=Sm(r,e,t);if(console.warn(i),vm.includes(r))throw new RangeError(i)}function Sm(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $m=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,km=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Cm=/^'([^]*?)'?$/,_m=/''/g,Pm=/[a-zA-Z]/;function mt(r,e,t){var d,u,p,S,y,D,L,X;const i=In(),s=(t==null?void 0:t.locale)??i.locale??hm,n=(t==null?void 0:t.firstWeekContainsDate)??((u=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??i.firstWeekContainsDate??((S=(p=i.locale)==null?void 0:p.options)==null?void 0:S.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((D=(y=t==null?void 0:t.locale)==null?void 0:y.options)==null?void 0:D.weekStartsOn)??i.weekStartsOn??((X=(L=i.locale)==null?void 0:L.options)==null?void 0:X.weekStartsOn)??0,o=zt(r,t==null?void 0:t.in);if(!Zd(o))throw new RangeError("Invalid time value");let l=e.match(km).map(O=>{const j=O[0];if(j==="p"||j==="P"){const K=gm[j];return K(O,s.formatLong)}return O}).join("").match($m).map(O=>{if(O==="''")return{isToken:!1,value:"'"};const j=O[0];if(j==="'")return{isToken:!1,value:Em(O)};if(zc[j])return{isToken:!0,value:O};if(j.match(Pm))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");return{isToken:!1,value:O}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(O=>{if(!O.isToken)return O.value;const j=O.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&wm(j)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&bm(j))&&xm(j,e,String(r));const K=zc[j[0]];return K(o,j,s.localize,h)}).join("")}function Em(r){const e=r.match(Cm);return e?e[1].replace(_m,"'"):r}function ll(r,e){const t=zt(r,e==null?void 0:e.in);if(!Zd(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=it(t.getDate(),2),h=it(t.getMonth()+1,2);n=`${it(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=it(t.getHours(),2),h=it(t.getMinutes(),2),d=it(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${d}`}return n}function Am(r,e){const t=zt(r,e==null?void 0:e.in);return t.setMinutes(0,0,0),t}var bl;(function(r){r.csv="text/csv",r.tsv="text/tab-separated-values",r.plain="text/plain"})(bl||(bl={}));var Ws=r=>r,$r=r=>r,mn=Ws,io=Ws,Ds=Ws,Bc=Ws,Hc=Ws,Lm={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:bl.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Om=`\r
`,Dm="\uFEFF",Fn=r=>Object.assign({},Lm,r);class Tm extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class Mm extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class Rm extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Im extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Um=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},Fm=r=>Bc(typeof r=="object"?r.key:r),zm=r=>Hc(typeof r=="object"?r.displayLabel:r),jm=(r,...e)=>e.reduce((t,i)=>i(t),r),Nm=r=>e=>r.useBom?io($r(e)+Dm):e,Wm=r=>e=>r.showTitle?Gl(io($r(e)+r.title))(Ds("")):e,Gl=r=>e=>io($r(r)+$r(e)+Om),nu=r=>(e,t)=>Bm(r)(Ds($r(e)+$r(t))),Bm=r=>e=>Ws($r(e)+r.fieldSeparator),Hm=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Mm("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Ds("");for(let s=0;s<e.length;s++){const n=zm(e[s]);i=nu(r)(i,au(r,$r(n)))}return i=Ds($r(i).slice(0,-1)),Gl(t)(i)},Vm=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=Ds("");for(let o=0;o<e.length;o++){const l=Fm(e[o]),h=t[n][$r(l)];a=nu(r)(a,au(r,h))}a=Ds($r(a).slice(0,-1)),s=Gl(s)(a)}return s},Gm=r=>+r===r&&(!isFinite(r)||!!(r%1)),qm=(r,e)=>{if(Gm(e)){if(r.decimalSeparator==="locale")return mn(e.toLocaleString());if(r.decimalSeparator)return mn(e.toString().replace(".",r.decimalSeparator))}return mn(e.toString())},Ea=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+Um(e,r.quoteCharacter)+r.quoteCharacter),mn(t)},Ym=(r,e)=>{const t=e?"true":"false";return mn(r.boolDisplay[t])},Xm=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?Ea(r,r.replaceUndefinedWith+""):e===null?Ea(r,"null"):Ea(r,""),au=(r,e)=>{if(typeof e=="number")return qm(r,e);if(typeof e=="string")return Ea(r,e);if(typeof e=="boolean"&&r.boolDisplay)return Ym(r,e);if(e===null||typeof e>"u")return Xm(r,e);throw new Im(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},ou=r=>e=>{const t=Fn(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=jm(io(""),Nm(t),Wm(t),Hm(t,i),Vm(t,i,e));if($r(s).length<1)throw new Tm("Output is empty. Is your data formatted correctly?");return s},Km=r=>e=>{const t=Fn(r),i=$r(e),s=t.useTextFile?"text/plain":t.mediaType;return new Blob([i],{type:`${s};charset=utf8;`})},lu=r=>e=>{if(!window)throw new Rm("Downloading only supported in a browser environment.");const t=Km(r)(e),i=Fn(r),s=i.useTextFile?"txt":i.fileExtension,n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},Zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Qm(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var hu={exports:{}};(function(r){(function(e){var t=j(),i=K(),s=G(),n=ie(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:d,toJpeg:u,toBlob:p,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(v,b){return b=b||{},S(b),Promise.resolve(v).then(function(E){return D(E,b.filter,!0)}).then(L).then(X).then(w).then(function(E){return O(E,b.width||t.width(v),b.height||t.height(v))});function w(E){return b.bgcolor&&(E.style.backgroundColor=b.bgcolor),b.width&&(E.style.width=b.width+"px"),b.height&&(E.style.height=b.height+"px"),b.style&&Object.keys(b.style).forEach(function(N){E.style[N]=b.style[N]}),E}}function h(v,b){return y(v,b||{}).then(function(w){return w.getContext("2d").getImageData(0,0,t.width(v),t.height(v)).data})}function d(v,b){return y(v,b||{}).then(function(w){return w.toDataURL()})}function u(v,b){return b=b||{},y(v,b).then(function(w){return w.toDataURL("image/jpeg",b.quality||1)})}function p(v,b){return y(v,b||{}).then(t.canvasToBlob)}function S(v){typeof v.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=v.imagePlaceholder,typeof v.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=v.cacheBust}function y(v,b){return l(v,b).then(t.makeImage).then(t.delay(100)).then(function(E){var N=w(v);return N.getContext("2d").drawImage(E,0,0),N});function w(E){var N=document.createElement("canvas");if(N.width=b.width||t.width(E),N.height=b.height||t.height(E),b.bgcolor){var R=N.getContext("2d");R.fillStyle=b.bgcolor,R.fillRect(0,0,N.width,N.height)}return N}}function D(v,b,w){if(!w&&b&&!b(v))return Promise.resolve();return Promise.resolve(v).then(E).then(function(F){return N(v,F,b)}).then(function(F){return R(v,F)});function E(F){return F instanceof HTMLCanvasElement?t.makeImage(F.toDataURL()):F.cloneNode(!1)}function N(F,U,J){var he=F.childNodes;if(he.length===0)return Promise.resolve(U);return C(U,t.asArray(he),J).then(function(){return U});function C(Z,ue,ae){var $e=Promise.resolve();return ue.forEach(function(Te){$e=$e.then(function(){return D(Te,ae)}).then(function(Re){Re&&Z.appendChild(Re)})}),$e}}function R(F,U){if(!(U instanceof Element))return U;return Promise.resolve().then(J).then(he).then(C).then(Z).then(function(){return U});function J(){ue(window.getComputedStyle(F),U.style);function ue(ae,$e){ae.cssText?$e.cssText=ae.cssText:Te(ae,$e);function Te(Re,Ue){t.asArray(Re).forEach(function(q){Ue.setProperty(q,Re.getPropertyValue(q),Re.getPropertyPriority(q))})}}}function he(){[":before",":after"].forEach(function(ae){ue(ae)});function ue(ae){var $e=window.getComputedStyle(F,ae),Te=$e.getPropertyValue("content");if(Te===""||Te==="none")return;var Re=t.uid();U.className=U.className+" "+Re;var Ue=document.createElement("style");Ue.appendChild(q(Re,ae,$e)),U.appendChild(Ue);function q(ee,ve,xe){var Ne="."+ee+":"+ve,Fe=xe.cssText?hr(xe):wr(xe);return document.createTextNode(Ne+"{"+Fe+"}");function hr(Ge){var vt=Ge.getPropertyValue("content");return Ge.cssText+" content: "+vt+";"}function wr(Ge){return t.asArray(Ge).map(vt).join("; ")+";";function vt(Yt){return Yt+": "+Ge.getPropertyValue(Yt)+(Ge.getPropertyPriority(Yt)?" !important":"")}}}}}function C(){F instanceof HTMLTextAreaElement&&(U.innerHTML=F.value),F instanceof HTMLInputElement&&U.setAttribute("value",F.value)}function Z(){U instanceof SVGElement&&(U.setAttribute("xmlns","http://www.w3.org/2000/svg"),U instanceof SVGRectElement&&["width","height"].forEach(function(ue){var ae=U.getAttribute(ue);ae&&U.style.setProperty(ue,ae)}))}}}function L(v){return s.resolveAll().then(function(b){var w=document.createElement("style");return v.appendChild(w),w.appendChild(document.createTextNode(b)),v})}function X(v){return n.inlineAll(v).then(function(){return v})}function O(v,b,w){return Promise.resolve(v).then(function(E){return E.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(E)}).then(t.escapeXhtml).then(function(E){return'<foreignObject x="0" y="0" width="100%" height="100%">'+E+"</foreignObject>"}).then(function(E){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+b+'" height="'+w+'">'+E+"</svg>"}).then(function(E){return"data:image/svg+xml;charset=utf-8,"+E})}function j(){return{escape:Z,parseExtension:b,mimeType:w,dataAsUrl:C,isDataUrl:E,canvasToBlob:R,resolveUrl:F,getAndEncode:he,uid:U(),delay:ue,asArray:ae,escapeXhtml:$e,makeImage:J,width:Te,height:Re};function v(){var q="application/font-woff",ee="image/jpeg";return{woff:q,woff2:q,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ee,jpeg:ee,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function b(q){var ee=/\.([^\.\/]*?)$/g.exec(q);return ee?ee[1]:""}function w(q){var ee=b(q).toLowerCase();return v()[ee]||""}function E(q){return q.search(/^(data:)/)!==-1}function N(q){return new Promise(function(ee){for(var ve=window.atob(q.toDataURL().split(",")[1]),xe=ve.length,Ne=new Uint8Array(xe),Fe=0;Fe<xe;Fe++)Ne[Fe]=ve.charCodeAt(Fe);ee(new Blob([Ne],{type:"image/png"}))})}function R(q){return q.toBlob?new Promise(function(ee){q.toBlob(ee)}):N(q)}function F(q,ee){var ve=document.implementation.createHTMLDocument(),xe=ve.createElement("base");ve.head.appendChild(xe);var Ne=ve.createElement("a");return ve.body.appendChild(Ne),xe.href=ee,Ne.href=q,Ne.href}function U(){var q=0;return function(){return"u"+ee()+q++;function ee(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function J(q){return new Promise(function(ee,ve){var xe=new Image;xe.onload=function(){ee(xe)},xe.onerror=ve,xe.src=q})}function he(q){var ee=3e4;return o.impl.options.cacheBust&&(q+=(/\?/.test(q)?"&":"?")+new Date().getTime()),new Promise(function(ve){var xe=new XMLHttpRequest;xe.onreadystatechange=hr,xe.ontimeout=wr,xe.responseType="blob",xe.timeout=ee,xe.open("GET",q,!0),xe.send();var Ne;if(o.impl.options.imagePlaceholder){var Fe=o.impl.options.imagePlaceholder.split(/,/);Fe&&Fe[1]&&(Ne=Fe[1])}function hr(){if(xe.readyState===4){if(xe.status!==200){Ne?ve(Ne):Ge("cannot fetch resource: "+q+", status: "+xe.status);return}var vt=new FileReader;vt.onloadend=function(){var Yt=vt.result.split(/,/)[1];ve(Yt)},vt.readAsDataURL(xe.response)}}function wr(){Ne?ve(Ne):Ge("timeout of "+ee+"ms occured while fetching resource: "+q)}function Ge(vt){console.error(vt),ve("")}})}function C(q,ee){return"data:"+ee+";base64,"+q}function Z(q){return q.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function ue(q){return function(ee){return new Promise(function(ve){setTimeout(function(){ve(ee)},q)})}}function ae(q){for(var ee=[],ve=q.length,xe=0;xe<ve;xe++)ee.push(q[xe]);return ee}function $e(q){return q.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Te(q){var ee=Ue(q,"border-left-width"),ve=Ue(q,"border-right-width");return q.scrollWidth+ee+ve}function Re(q){var ee=Ue(q,"border-top-width"),ve=Ue(q,"border-bottom-width");return q.scrollHeight+ee+ve}function Ue(q,ee){var ve=window.getComputedStyle(q).getPropertyValue(ee);return parseFloat(ve.replace("px",""))}}function K(){var v=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:N,shouldProcess:b,impl:{readUrls:w,inline:E}};function b(R){return R.search(v)!==-1}function w(R){for(var F=[],U;(U=v.exec(R))!==null;)F.push(U[1]);return F.filter(function(J){return!t.isDataUrl(J)})}function E(R,F,U,J){return Promise.resolve(F).then(function(C){return U?t.resolveUrl(C,U):C}).then(J||t.getAndEncode).then(function(C){return t.dataAsUrl(C,t.mimeType(F))}).then(function(C){return R.replace(he(F),"$1"+C+"$3")});function he(C){return new RegExp(`(url\\(['"]?)(`+t.escape(C)+`)(['"]?\\))`,"g")}}function N(R,F,U){if(J())return Promise.resolve(R);return Promise.resolve(R).then(w).then(function(he){var C=Promise.resolve(R);return he.forEach(function(Z){C=C.then(function(ue){return E(ue,Z,F,U)})}),C});function J(){return!b(R)}}}function G(){return{resolveAll:v,impl:{readAll:b}};function v(){return b().then(function(w){return Promise.all(w.map(function(E){return E.resolve()}))}).then(function(w){return w.join(`
`)})}function b(){return Promise.resolve(t.asArray(document.styleSheets)).then(E).then(w).then(function(R){return R.map(N)});function w(R){return R.filter(function(F){return F.type===CSSRule.FONT_FACE_RULE}).filter(function(F){return i.shouldProcess(F.style.getPropertyValue("src"))})}function E(R){var F=[];return R.forEach(function(U){try{t.asArray(U.cssRules||[]).forEach(F.push.bind(F))}catch(J){console.log("Error while reading CSS rules from "+U.href,J.toString())}}),F}function N(R){return{resolve:function(){var U=(R.parentStyleSheet||{}).href;return i.inlineAll(R.cssText,U)},src:function(){return R.style.getPropertyValue("src")}}}}}function ie(){return{inlineAll:b,impl:{newImage:v}};function v(w){return{inline:E};function E(N){return t.isDataUrl(w.src)?Promise.resolve():Promise.resolve(w.src).then(N||t.getAndEncode).then(function(R){return t.dataAsUrl(R,t.mimeType(w.src))}).then(function(R){return new Promise(function(F,U){w.onload=F,w.onerror=U,w.src=R})})}}function b(w){if(!(w instanceof Element))return Promise.resolve(w);return E(w).then(function(){return w instanceof HTMLImageElement?v(w).inline():Promise.all(t.asArray(w.childNodes).map(function(N){return b(N)}))});function E(N){var R=N.style.getPropertyValue("background");return R?i.inlineAll(R).then(function(F){N.style.setProperty("background",F,N.style.getPropertyPriority("background"))}).then(function(){return N}):Promise.resolve(N)}}}})()})(hu);var ey=hu.exports;const ty=Jm(ey);var wl={exports:{}};const ry={},iy=Object.freeze(Object.defineProperty({__proto__:null,default:ry},Symbol.toStringTag,{value:"Module"})),Cs=Qm(iy);/**
 * workerpool.js
 * https://github.com/josdejong/workerpool
 *
 * Offload tasks to a pool of workers on node.js and in the browser.
 *
 * @version 9.3.3
 * @date    2025-06-27
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
 */(function(r,e){(function(t,i){i(e)})(Zm,function(t){var i={},s={exports:{}};(function(A){var H=function(le){return typeof le<"u"&&le.versions!=null&&le.versions.node!=null&&le+""=="[object process]"};A.exports.isNode=H,A.exports.platform=typeof process<"u"&&H(process)?"node":"browser";var W=A.exports.platform==="node"&&Cs;A.exports.isMainThread=A.exports.platform==="node"?(!W||W.isMainThread)&&!process.connected:typeof Window<"u",A.exports.cpus=A.exports.platform==="browser"?self.navigator.hardwareConcurrency:Cs.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function A(le,Ee){var k=this;if(!(this instanceof A))throw new SyntaxError("Constructor must be called with the new operator");if(typeof le!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Ie=[],_e=[];this.resolved=!1,this.rejected=!1,this.pending=!0,this[Symbol.toStringTag]="Promise";var Ye=function(_,te){Ie.push(_),_e.push(te)};this.then=function(z,_){return new A(function(te,ce){var Ae=z?H(z,te,ce):te,nt=_?H(_,te,ce):ce;Ye(Ae,nt)},k)};var et=function(_){return k.resolved=!0,k.rejected=!1,k.pending=!1,Ie.forEach(function(te){te(_)}),Ye=function(ce,Ae){ce(_)},et=B=function(){},k},B=function(_){return k.resolved=!1,k.rejected=!0,k.pending=!1,_e.forEach(function(te){te(_)}),Ye=function(ce,Ae){Ae(_)},et=B=function(){},k};this.cancel=function(){return Ee?Ee.cancel():B(new W),k},this.timeout=function(z){if(Ee)Ee.timeout(z);else{var _=setTimeout(function(){B(new ge("Promise timed out after "+z+" ms"))},z);k.always(function(){clearTimeout(_)})}return k},le(function(z){et(z)},function(z){B(z)})}function H(le,Ee,k){return function(Ie){try{var _e=le(Ie);_e&&typeof _e.then=="function"&&typeof _e.catch=="function"?_e.then(Ee,k):Ee(_e)}catch(Ye){k(Ye)}}}A.prototype.catch=function(le){return this.then(null,le)},A.prototype.always=function(le){return this.then(le,le)},A.prototype.finally=function(le){var Ee=this,k=function(){return new A(function(_e){return _e()}).then(le).then(function(){return Ee})};return this.then(k,k)},A.all=function(le){return new A(function(Ee,k){var Ie=le.length,_e=[];Ie?le.forEach(function(Ye,et){Ye.then(function(B){_e[et]=B,Ie--,Ie==0&&Ee(_e)},function(B){Ie=0,k(B)})}):Ee(_e)})},A.defer=function(){var le={};return le.promise=new A(function(Ee,k){le.resolve=Ee,le.reject=k}),le};function W(le){this.message=le||"promise cancelled",this.stack=new Error().stack}W.prototype=new Error,W.prototype.constructor=Error,W.prototype.name="CancellationError",A.CancellationError=W;function ge(le){this.message=le||"timeout exceeded",this.stack=new Error().stack}return ge.prototype=new Error,ge.prototype.constructor=Error,ge.prototype.name="TimeoutError",A.TimeoutError=ge,a.Promise=A,a}function h(A,H){(H==null||H>A.length)&&(H=A.length);for(var W=0,ge=Array(H);W<H;W++)ge[W]=A[W];return ge}function d(A,H){var W=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(!W){if(Array.isArray(A)||(W=X(A))||H){W&&(A=W);var ge=0,le=function(){};return{s:le,n:function(){return ge>=A.length?{done:!0}:{done:!1,value:A[ge++]}},e:function(_e){throw _e},f:le}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ee,k=!0,Ie=!1;return{s:function(){W=W.call(A)},n:function(){var _e=W.next();return k=_e.done,_e},e:function(_e){Ie=!0,Ee=_e},f:function(){try{k||W.return==null||W.return()}finally{if(Ie)throw Ee}}}}function u(A,H,W){return(H=D(H))in A?Object.defineProperty(A,H,{value:W,enumerable:!0,configurable:!0,writable:!0}):A[H]=W,A}function p(A,H){var W=Object.keys(A);if(Object.getOwnPropertySymbols){var ge=Object.getOwnPropertySymbols(A);H&&(ge=ge.filter(function(le){return Object.getOwnPropertyDescriptor(A,le).enumerable})),W.push.apply(W,ge)}return W}function S(A){for(var H=1;H<arguments.length;H++){var W=arguments[H]!=null?arguments[H]:{};H%2?p(Object(W),!0).forEach(function(ge){u(A,ge,W[ge])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(W)):p(Object(W)).forEach(function(ge){Object.defineProperty(A,ge,Object.getOwnPropertyDescriptor(W,ge))})}return A}function y(A,H){if(typeof A!="object"||!A)return A;var W=A[Symbol.toPrimitive];if(W!==void 0){var ge=W.call(A,H);if(typeof ge!="object")return ge;throw new TypeError("@@toPrimitive must return a primitive value.")}return(H==="string"?String:Number)(A)}function D(A){var H=y(A,"string");return typeof H=="symbol"?H:H+""}function L(A){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},L(A)}function X(A,H){if(A){if(typeof A=="string")return h(A,H);var W={}.toString.call(A).slice(8,-1);return W==="Object"&&A.constructor&&(W=A.constructor.name),W==="Map"||W==="Set"?Array.from(A):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?h(A,H):void 0}}var O={exports:{}},j={},K;function G(){return K||(K=1,j.validateOptions=function(H,W,ge){if(H){var le=H?Object.keys(H):[],Ee=le.find(function(Ie){return!W.includes(Ie)});if(Ee)throw new Error('Object "'+ge+'" contains an unknown option "'+Ee+'"');var k=W.find(function(Ie){return Object.prototype[Ie]&&!le.includes(Ie)});if(k)throw new Error('Object "'+ge+'" contains an inherited option "'+k+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return H}},j.workerOptsNames=["credentials","name","type"],j.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],j.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),j}var ie,v;function b(){return v||(v=1,ie=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0,this[Symbol.toStringTag]="Promise";var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return new i((function(e,n){o.then(e,n),r.then(e,n)})).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ie}var w;function E(){if(w)return O.exports;w=1;var A=l(),H=A.Promise,W=n,ge=G(),le=ge.validateOptions,Ee=ge.forkOptsNames,k=ge.workerThreadOptsNames,Ie=ge.workerOptsNames,_e="__workerpool-terminate__",Ye="__workerpool-cleanup__";function et(){var se=z();if(!se)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return se}function B(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":L(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function z(){try{return Cs}catch(se){if(L(se)==="object"&&se!==null&&se.code==="MODULE_NOT_FOUND")return null;throw se}}function _(){if(W.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var se=new Blob([b()],{type:"text/javascript"});return window.URL.createObjectURL(se)}else return __dirname+"/worker.js"}function te(se,me){if(me.workerType==="web")return B(),ce(se,me.workerOpts,Worker);if(me.workerType==="thread")return I=et(),Ae(se,I,me);if(me.workerType==="process"||!me.workerType)return nt(se,tt(me),Cs);if(W.platform==="browser")return B(),ce(se,me.workerOpts,Worker);var I=z();return I?Ae(se,I,me):nt(se,tt(me),Cs)}function ce(se,me,I){le(me,Ie,"workerOpts");var re=new I(se,me);return re.isBrowserWorker=!0,re.on=function(fe,ke){this.addEventListener(fe,function(Oe){ke(Oe.data)})},re.send=function(fe,ke){this.postMessage(fe,ke)},re}function Ae(se,me,I){var re,fe;le(I==null?void 0:I.workerThreadOpts,k,"workerThreadOpts");var ke=new me.Worker(se,S({stdout:(re=I==null?void 0:I.emitStdStreams)!==null&&re!==void 0?re:!1,stderr:(fe=I==null?void 0:I.emitStdStreams)!==null&&fe!==void 0?fe:!1},I==null?void 0:I.workerThreadOpts));return ke.isWorkerThread=!0,ke.send=function(Oe,ye){this.postMessage(Oe,ye)},ke.kill=function(){return this.terminate(),!0},ke.disconnect=function(){this.terminate()},I!=null&&I.emitStdStreams&&(ke.stdout.on("data",function(Oe){return ke.emit("stdout",Oe)}),ke.stderr.on("data",function(Oe){return ke.emit("stderr",Oe)})),ke}function nt(se,me,I){le(me.forkOpts,Ee,"forkOpts");var re=I.fork(se,me.forkArgs,me.forkOpts),fe=re.send;return re.send=function(ke){return fe.call(re,ke)},me.emitStdStreams&&(re.stdout.on("data",function(ke){return re.emit("stdout",ke)}),re.stderr.on("data",function(ke){return re.emit("stderr",ke)})),re.isChildProcess=!0,re}function tt(se){se=se||{};var me=process.execArgv.join(" "),I=me.indexOf("--inspect")!==-1,re=me.indexOf("--debug-brk")!==-1,fe=[];return I&&(fe.push("--inspect="+se.debugPort),re&&fe.push("--debug-brk")),process.execArgv.forEach(function(ke){ke.indexOf("--max-old-space-size")>-1&&fe.push(ke)}),Object.assign({},se,{forkArgs:se.forkArgs,forkOpts:Object.assign({},se.forkOpts,{execArgv:(se.forkOpts&&se.forkOpts.execArgv||[]).concat(fe),stdio:se.emitStdStreams?"pipe":void 0})})}function _t(se){for(var me=new Error(""),I=Object.keys(se),re=0;re<I.length;re++)me[I[re]]=se[I[re]];return me}function lt(se,me){Object.values(se.processing).forEach(function(I){var re;return I==null||(re=I.options)===null||re===void 0?void 0:re.on(me)}),Object.values(se.tracking).forEach(function(I){var re;return I==null||(re=I.options)===null||re===void 0?void 0:re.on(me)})}function bt(se,me){var I=this,re=me||{};this.script=se||_(),this.worker=te(this.script,re),this.debugPort=re.debugPort,this.forkOpts=re.forkOpts,this.forkArgs=re.forkArgs,this.workerOpts=re.workerOpts,this.workerThreadOpts=re.workerThreadOpts,this.workerTerminateTimeout=re.workerTerminateTimeout,se||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(ye){lt(I,{stdout:ye.toString()})}),this.worker.on("stderr",function(ye){lt(I,{stderr:ye.toString()})}),this.worker.on("message",function(ye){if(!I.terminated)if(typeof ye=="string"&&ye==="ready")I.worker.ready=!0,ke();else{var qe=ye.id,Le=I.processing[qe];if(Le!==void 0)ye.isEvent?Le.options&&typeof Le.options.on=="function"&&Le.options.on(ye.payload):(delete I.processing[qe],I.terminating===!0&&I.terminate(),ye.error?Le.resolver.reject(_t(ye.error)):Le.resolver.resolve(ye.result));else{var Le=I.tracking[qe];Le!==void 0&&ye.isEvent&&Le.options&&typeof Le.options.on=="function"&&Le.options.on(ye.payload)}if(ye.method===Ye){var ut=I.tracking[ye.id];ut!==void 0&&(ye.error?(clearTimeout(ut.timeoutId),ut.resolver.reject(_t(ye.error))):(I.tracking&&clearTimeout(ut.timeoutId),ut.resolver.reject(new Zi(ut.error)))),delete I.tracking[qe]}}});function fe(ye){I.terminated=!0;for(var qe in I.processing)I.processing[qe]!==void 0&&I.processing[qe].resolver.reject(ye);I.processing=Object.create(null)}function ke(){var ye=d(I.requestQueue.splice(0)),qe;try{for(ye.s();!(qe=ye.n()).done;){var Le=qe.value;I.worker.send(Le.message,Le.transfer)}}catch(ut){ye.e(ut)}finally{ye.f()}}var Oe=this.worker;this.worker.on("error",fe),this.worker.on("exit",function(ye,qe){var Le=`Workerpool Worker terminated Unexpectedly
`;Le+="    exitCode: `"+ye+"`\n",Le+="    signalCode: `"+qe+"`\n",Le+="    workerpool.script: `"+I.script+"`\n",Le+="    spawnArgs: `"+Oe.spawnargs+"`\n",Le+="    spawnfile: `"+Oe.spawnfile+"`\n",Le+="    stdout: `"+Oe.stdout+"`\n",Le+="    stderr: `"+Oe.stderr+"`\n",fe(new Error(Le))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}bt.prototype.methods=function(){return this.exec("methods")},bt.prototype.exec=function(se,me,I,re){I||(I=H.defer());var fe=++this.lastId;this.processing[fe]={id:fe,resolver:I,options:re};var ke={message:{id:fe,method:se,params:me},transfer:re&&re.transfer};this.terminated?I.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ke.message,ke.transfer):this.requestQueue.push(ke);var Oe=this;return I.promise.catch(function(ye){if(ye instanceof H.CancellationError||ye instanceof H.TimeoutError)return Oe.tracking[fe]={id:fe,resolver:H.defer(),options:re,error:ye},delete Oe.processing[fe],Oe.tracking[fe].resolver.promise=Oe.tracking[fe].resolver.promise.catch(function(qe){if(delete Oe.tracking[fe],qe instanceof Zi)throw qe.error;var Le=Oe.terminateAndNotify(!0).then(function(){throw qe},function(ut){throw ut});return Le}),Oe.worker.send({id:fe,method:Ye}),Oe.tracking[fe].timeoutId=setTimeout(function(){Oe.tracking[fe].resolver.reject(ye)},Oe.workerTerminateTimeout),Oe.tracking[fe].resolver.promise;throw ye})},bt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},bt.prototype.terminate=function(se,me){var I=this;if(se){for(var re in this.processing)this.processing[re]!==void 0&&this.processing[re].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var fe=0,ke=Object.values(I.tracking);fe<ke.length;fe++){var Oe=ke[fe];clearTimeout(Oe.timeoutId),Oe.resolver.reject(new Error("Worker Terminating"))}if(I.tracking=Object.create(null),typeof me=="function"&&(this.terminationHandler=me),this.busy())this.terminating=!0;else{var ye=function(ut){if(I.terminated=!0,I.cleaning=!1,I.worker!=null&&I.worker.removeAllListeners&&I.worker.removeAllListeners("message"),I.worker=null,I.terminating=!1,I.terminationHandler)I.terminationHandler(ut,I);else if(ut)throw ut};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ye(new Error("worker already killed!"));return}var qe=setTimeout(function(){I.worker&&I.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(qe),I.worker&&(I.worker.killed=!0),ye()}),this.worker.ready?this.worker.send(_e):this.requestQueue.push({message:_e}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ye()}},bt.prototype.terminateAndNotify=function(se,me){var I=H.defer();return me&&I.promise.timeout(me),this.terminate(se,function(re,fe){re?I.reject(re):I.resolve(fe)}),I.promise};function Zi(se){this.error=se,this.stack=new Error().stack}return O.exports=bt,O.exports._tryRequireWorkerThreads=z,O.exports._setupProcessWorker=nt,O.exports._setupBrowserWorker=ce,O.exports._setupWorkerThreadWorker=Ae,O.exports.ensureWorkerThreads=et,O.exports}var N,R;function F(){if(R)return N;R=1;var A=65535;N=H;function H(){this.ports=Object.create(null),this.length=0}return H.prototype.nextAvailableStartingAt=function(W){for(;this.ports[W]===!0;)W++;if(W>=A)throw new Error("WorkerPool debug port limit reached: "+W+">= "+A);return this.ports[W]=!0,this.length++,W},H.prototype.releasePort=function(W){delete this.ports[W],this.length--},N}var U,J;function he(){if(J)return U;J=1;var A=l(),H=A.Promise,W=E(),ge=n,le=F(),Ee=new le;function k(B,z){typeof B=="string"?this.script=B||null:(this.script=null,z=B),this.workers=[],this.tasks=[],z=z||{},this.forkArgs=Object.freeze(z.forkArgs||[]),this.forkOpts=Object.freeze(z.forkOpts||{}),this.workerOpts=Object.freeze(z.workerOpts||{}),this.workerThreadOpts=Object.freeze(z.workerThreadOpts||{}),this.debugPortStart=z.debugPortStart||43210,this.nodeWorker=z.nodeWorker,this.workerType=z.workerType||z.nodeWorker||"auto",this.maxQueueSize=z.maxQueueSize||1/0,this.workerTerminateTimeout=z.workerTerminateTimeout||1e3,this.onCreateWorker=z.onCreateWorker||function(){return null},this.onTerminateWorker=z.onTerminateWorker||function(){return null},this.emitStdStreams=z.emitStdStreams||!1,z&&"maxWorkers"in z?(Ie(z.maxWorkers),this.maxWorkers=z.maxWorkers):this.maxWorkers=Math.max((ge.cpus||4)-1,1),z&&"minWorkers"in z&&(z.minWorkers==="max"?this.minWorkers=this.maxWorkers:(_e(z.minWorkers),this.minWorkers=z.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&W.ensureWorkerThreads()}k.prototype.exec=function(B,z,_){if(z&&!Array.isArray(z))throw new TypeError('Array expected as argument "params"');if(typeof B=="string"){var te=H.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var ce=this.tasks,Ae={method:B,params:z,resolver:te,timeout:null,options:_};ce.push(Ae);var nt=te.promise.timeout;return te.promise.timeout=function(_t){return ce.indexOf(Ae)!==-1?(Ae.timeout=_t,te.promise):nt.call(te.promise,_t)},this._next(),te.promise}else{if(typeof B=="function")return this.exec("run",[String(B),z],_);throw new TypeError('Function or string expected as argument "method"')}},k.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var B=this;return this.exec("methods").then(function(z){var _={};return z.forEach(function(te){_[te]=function(){return B.exec(te,Array.prototype.slice.call(arguments))}}),_})},k.prototype._next=function(){if(this.tasks.length>0){var B=this._getWorker();if(B){var z=this,_=this.tasks.shift();if(_.resolver.promise.pending){var te=B.exec(_.method,_.params,_.resolver,_.options).then(z._boundNext).catch(function(){if(B.terminated)return z._removeWorker(B)}).then(function(){z._next()});typeof _.timeout=="number"&&te.timeout(_.timeout)}else z._next()}}},k.prototype._getWorker=function(){for(var B=this.workers,z=0;z<B.length;z++){var _=B[z];if(_.busy()===!1)return _}return B.length<this.maxWorkers?(_=this._createWorkerHandler(),B.push(_),_):null},k.prototype._removeWorker=function(B){var z=this;return Ee.releasePort(B.debugPort),this._removeWorkerFromList(B),this._ensureMinWorkers(),new H(function(_,te){B.terminate(!1,function(ce){z.onTerminateWorker({forkArgs:B.forkArgs,forkOpts:B.forkOpts,workerThreadOpts:B.workerThreadOpts,script:B.script}),ce?te(ce):_(B)})})},k.prototype._removeWorkerFromList=function(B){var z=this.workers.indexOf(B);z!==-1&&this.workers.splice(z,1)},k.prototype.terminate=function(B,z){var _=this;this.tasks.forEach(function(tt){tt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var te=function(_t){Ee.releasePort(_t.debugPort),this._removeWorkerFromList(_t)},ce=te.bind(this),Ae=[],nt=this.workers.slice();return nt.forEach(function(tt){var _t=tt.terminateAndNotify(B,z).then(ce).always(function(){_.onTerminateWorker({forkArgs:tt.forkArgs,forkOpts:tt.forkOpts,workerThreadOpts:tt.workerThreadOpts,script:tt.script})});Ae.push(_t)}),H.all(Ae)},k.prototype.stats=function(){var B=this.workers.length,z=this.workers.filter(function(_){return _.busy()}).length;return{totalWorkers:B,busyWorkers:z,idleWorkers:B-z,pendingTasks:this.tasks.length,activeTasks:z}},k.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var B=this.workers.length;B<this.minWorkers;B++)this.workers.push(this._createWorkerHandler())},k.prototype._createWorkerHandler=function(){var B=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new W(B.script||this.script,{forkArgs:B.forkArgs||this.forkArgs,forkOpts:B.forkOpts||this.forkOpts,workerOpts:B.workerOpts||this.workerOpts,workerThreadOpts:B.workerThreadOpts||this.workerThreadOpts,debugPort:Ee.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Ie(B){if(!Ye(B)||!et(B)||B<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function _e(B){if(!Ye(B)||!et(B)||B<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function Ye(B){return typeof B=="number"}function et(B){return Math.round(B)==B}return U=k,U}var C={},Z,ue;function ae(){if(ue)return Z;ue=1;function A(H,W){this.message=H,this.transfer=W}return Z=A,Z}var $e;function Te(){return $e||($e=1,function(A){var H=ae(),W=l().Promise,ge="__workerpool-terminate__",le="__workerpool-cleanup__",Ee=1e3,k={exit:function(){}},Ie={addAbortListener:function(te){k.abortListeners.push(te)},emit:k.emit};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")k.on=function(_,te){addEventListener(_,function(ce){te(ce.data)})},k.send=function(_,te){te?postMessage(_,te):postMessage(_)};else if(typeof process<"u"){var _e;try{_e=Cs}catch(_){if(!(L(_)==="object"&&_!==null&&_.code==="MODULE_NOT_FOUND"))throw _}if(_e&&_e.parentPort!==null){var Ye=_e.parentPort;k.send=Ye.postMessage.bind(Ye),k.on=Ye.on.bind(Ye),k.exit=process.exit.bind(process)}else k.on=process.on.bind(process),k.send=function(_){process.send(_)},k.on("disconnect",function(){process.exit(1)}),k.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function et(_){return Object.getOwnPropertyNames(_).reduce(function(te,ce){return Object.defineProperty(te,ce,{value:_[ce],enumerable:!0})},{})}function B(_){return _&&typeof _.then=="function"&&typeof _.catch=="function"}k.methods={},k.methods.run=function(te,ce){var Ae=new Function("return ("+te+").apply(this, arguments);");return Ae.worker=Ie,Ae.apply(Ae,ce)},k.methods.methods=function(){return Object.keys(k.methods)},k.terminationHandler=void 0,k.abortListenerTimeout=Ee,k.abortListeners=[],k.terminateAndExit=function(_){var te=function(){k.exit(_)};if(!k.terminationHandler)return te();var ce=k.terminationHandler(_);return B(ce)?(ce.then(te,te),ce):(te(),new W(function(Ae,nt){nt(new Error("Worker terminating"))}))},k.cleanup=function(_){if(!k.abortListeners.length)return k.send({id:_,method:le,error:et(new Error("Worker terminating"))}),new W(function(lt){lt()});var te=function(){k.exit()},ce=function(){k.abortListeners.length||(k.abortListeners=[])},Ae=k.abortListeners.map(function(lt){return lt()}),nt,tt=new W(function(lt,bt){nt=setTimeout(function(){bt(new Error("Timeout occured waiting for abort handler, killing worker"))},k.abortListenerTimeout)}),_t=W.all(Ae).then(function(){clearTimeout(nt),ce()},function(){clearTimeout(nt),te()});return new W(function(lt,bt){_t.then(lt,bt),tt.then(lt,bt)}).then(function(){k.send({id:_,method:le,error:null})},function(lt){k.send({id:_,method:le,error:lt?et(lt):null})})};var z=null;k.on("message",function(_){if(_===ge)return k.terminateAndExit(0);if(_.method===le)return k.cleanup(_.id);try{var te=k.methods[_.method];if(te){z=_.id;var ce=te.apply(te,_.params);B(ce)?ce.then(function(Ae){Ae instanceof H?k.send({id:_.id,result:Ae.message,error:null},Ae.transfer):k.send({id:_.id,result:Ae,error:null}),z=null}).catch(function(Ae){k.send({id:_.id,result:null,error:et(Ae)}),z=null}):(ce instanceof H?k.send({id:_.id,result:ce.message,error:null},ce.transfer):k.send({id:_.id,result:ce,error:null}),z=null)}else throw new Error('Unknown method "'+_.method+'"')}catch(Ae){k.send({id:_.id,result:null,error:et(Ae)})}}),k.register=function(_,te){if(_)for(var ce in _)_.hasOwnProperty(ce)&&(k.methods[ce]=_[ce],k.methods[ce].worker=Ie);te&&(k.terminationHandler=te.onTerminate,k.abortListenerTimeout=te.abortListenerTimeout||Ee),k.send("ready")},k.emit=function(_){if(z){if(_ instanceof H){k.send({id:z,isEvent:!0,payload:_.message},_.transfer);return}k.send({id:z,isEvent:!0,payload:_})}},A.add=k.register,A.emit=k.emit}(C)),C}var Re=n.platform,Ue=n.isMainThread,q=n.cpus;function ee(A,H){var W=he();return new W(A,H)}var ve=i.pool=ee;function xe(A,H){var W=Te();W.add(A,H)}var Ne=i.worker=xe;function Fe(A){var H=Te();H.emit(A)}var hr=i.workerEmit=Fe,wr=l(),Ge=wr.Promise,vt=i.Promise=Ge,Yt=i.Transfer=ae(),tn=i.platform=Re,rn=i.isMainThread=Ue,sn=i.cpus=q;t.Promise=vt,t.Transfer=Yt,t.cpus=sn,t.default=i,t.isMainThread=rn,t.platform=tn,t.pool=ve,t.worker=Ne,t.workerEmit=hr,Object.defineProperty(t,"__esModule",{value:!0})})})(wl,wl.exports);var sy=wl.exports,ny=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},ay=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],oy=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],ly=ny(),Qr={iron:{pixels:oy,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:ay,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:ly,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},gl,hy=(gl=class{},c(gl,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),gl),Lt,Kt=(Lt=class extends hy{static humanRangeDates(e,t){return e=Lt.inputToDate(e),t=Lt.inputToDate(t),e.getUTCDate()===t.getUTCDate()?Lt.humanDate(e):[Lt.humanDate(e),Lt.humanDate(t)].join(" - ")}static human(e){return`${Lt.humanDate(e)} ${Lt.humanTime(e,!0)} `}},c(Lt,"isoDate",e=>(e=Lt.inputToDate(e),ll(e,{representation:"date"}))),c(Lt,"isoTime",e=>(e=Lt.inputToDate(e),ll(e,{representation:"time"}))),c(Lt,"isoComplete",e=>(e=Lt.inputToDate(e),ll(e))),c(Lt,"humanTime",(e,t=!1)=>(e=Lt.inputToDate(e),mt(e,t?"HH:mm:ss":"HH:mm"))),c(Lt,"humanDate",(e,t=!1)=>(e=Lt.inputToDate(e),mt(e,t?"d. M.":"d. M. yyyy"))),Lt),be=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},so=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new be);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},Dt=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},Ct=class{constructor(r,e,t){c(this,"onSerializableChange",new be);c(this,"_selected",!1);c(this,"onSelected",new be);c(this,"onDeselected",new be);c(this,"onValues",new be);c(this,"onMoveOrResize",new be);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new be);c(this,"_initialColor");c(this,"onSetInitialColor",new be);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new be);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},cu=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new be);c(this,"pxY");c(this,"_y");c(this,"onY",new be);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new be);c(this,"onMouseLeave",new be);c(this,"onActivate",new be);c(this,"onDeactivate",new be);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},pr,cy=(pr=class extends cu{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(pr.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=pr.sizePx(-.5),t.style.left=pr.sizePx(-.5),t.style.width=pr.sizePx(),t.style.height=pr.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=pr.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=pr.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${pr.sizePx(.5)} - 3px )`,t.style.left=`calc( ${pr.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(pr,"size",20),pr),xr=class du extends Ct{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new cy("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new uu(this)),this._graph}static addAtPoint(t,i,s,n,a){return new du(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(d=>d.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=Ct.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=Ct.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=Ct.serializedGetNumericalValueByKey(i,"top"),h=Ct.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},uu=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new be);c(this,"onGraphData",new be);c(this,"onAnalysisSelection",new be);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof xr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof xr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof xr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof xr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},dy=class extends cu{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},uy=class extends dy{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},fr=class extends Ct{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new uu(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,d=a-n;return{top:n,left:o,width:h,height:d}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new uy(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(S=>S.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=Ct.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=Ct.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=Ct.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=Ct.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=Ct.serializedGetNumericalValueByKey(t,"top"),d=Ct.serializedGetNumericalValueByKey(t,"left"),u=Ct.serializedGetNumericalValueByKey(t,"width"),p=Ct.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),d!==void 0&&d!==this.left&&(this.setLeft(d),i=!0),u!==void 0&&u!==this.width&&(this.setWidth(u),i=!0),p!==void 0&&p!==this.height&&(this.setHeight(p),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},pu=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},Vc=class extends pu{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},Gc=class Aa extends fr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Aa(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:d,height:u}=Aa.calculateDimensionsFromCorners(s,n,a,o),p=new Aa(e,t,i,l,h,d,u);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Vc(this,e,t,e+i,t+s):new Vc(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const d=this.file.width*h;for(let u=e;u<=t;u++)if(this.isWithin(u,h)){const p=this.file.pixels[d+u];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},qc=class extends pu{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},Yc=class La extends fr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new La(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:d,height:u}=La.calculateDimensionsFromCorners(s,n,a,o),p=new La(e,t,i,l,h,d,u);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new qc(this,e,t,e+i,t+s):new qc(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const d=this.file.width*h;for(let u=e;u<=t;u++){const p=this.file.pixels[d+u];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},Oa=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],py=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new be);c(this,"onRemove",new be);c(this,"onSelectionChange",new be);c(this,"colors",Oa);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=Yc.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=Yc.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=Gc.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=Gc.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=xr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=xr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=Oa.filter(i=>!e.includes(i));return t.length>0?t[0]:Oa[0]}getNextName(e){return`${e} ${this.all.length}`}},fy=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},gy=class extends Dt{constructor(){super(...arguments);c(this,"layers",new py(this));c(this,"points",new fy(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,d=e.layerY/o;return{top:Math.round(l*d),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},my=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new be);c(this,"onAddGraph",new be);c(this,"onRemoveGraph",new be);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:mt(a,"m:ss:SSS")+" ",[e[1].key]:mt(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},yy=class extends Dt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new be);c(this,"listeners",new my(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=Fn({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=ou(i)(e);lu(i)(s)}},vy=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new be);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},Os,fu=(Os=class extends Dt{constructor(){super(...arguments);c(this,"onSlotInit",new be);c(this,"onSlotRemove",new be);c(this,"onSlot1Assignement",new be);c(this,"onSlot2Assignement",new be);c(this,"onSlot3Assignement",new be);c(this,"onSlot4Assignement",new be);c(this,"onSlot5Assignement",new be);c(this,"onSlot6Assignement",new be);c(this,"onSlot7Assignement",new be);c(this,"onSlot1Serialize",new be);c(this,"onSlot2Serialize",new be);c(this,"onSlot3Serialize",new be);c(this,"onSlot4Serialize",new be);c(this,"onSlot5Serialize",new be);c(this,"onSlot6Serialize",new be);c(this,"onSlot7Serialize",new be)}getNextFreeSlotNumber(){for(let t=1;t<=Os.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new vy(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(L=>L.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=Ct.serializedGetNumericalValueByKey(s,"top"),l=Ct.serializedGetNumericalValueByKey(s,"left");const h=Ct.serializedGetStringValueByKey(s,"color");let d=Ct.serializedGetNumericalValueByKey(s,"width"),u=Ct.serializedGetNumericalValueByKey(s,"height");const p=Ct.serializedSegmentsHasExact(s,"avg"),S=Ct.serializedSegmentsHasExact(s,"min"),y=Ct.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let D;if(a==="point"){if(o===void 0||l===void 0)return;D=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||d===void 0||u===void 0)return;d<0&&(d=0),d+l>this.parent.width-1&&(d=this.parent.width-l-1),u<0&&(u=0),u+o>this.parent.height-1&&(u=this.parent.height-o-1),D=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,d+l,u+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,d+l,u+o,h,!1)}if(D!==void 0){if(D instanceof xr?p&&D.graph.setAvgActivation(!0):D instanceof fr&&(p&&D.graph.setAvgActivation(!0),S&&D.graph.setMinActivation(!0),y&&D.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const L=this.getNextFreeSlotNumber();L!==void 0&&this.assignSlot(L,D)}else i!==void 0&&this.assignSlot(i,D);return D}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(Os,"MAX_SLOTS",7),Os),by=class extends Dt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},wy=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",3);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t||e===t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},gu={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},xy=class extends Dt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"onFrame",new be);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new be);c(this,"callbacksPlay",new be);c(this,"callbacksPause",new be);c(this,"callbacksStop",new be);c(this,"callbacksEnd",new be);c(this,"callbacksChangeFrame",new be);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new wy(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return gu[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}init(){this.buffer.init()}afterSetEffect(){this.onFrame.call(this._currentStep),this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),mt(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);this.setRelativeTime(e.relative)}findPreviousOrThis(e){return this.stepsByRelative.has(e)?this.stepsByRelative.get(e):this.findPreviousRelative(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e);let i=Math.max(Math.ceil(t*this.steps.length)+5,this.steps.length),s;for(;i>=0&&s===void 0;){const a=this.stepsByIndex.get(i);a!==void 0&&a.relative<e&&(s=a),i=i-1}return s!==void 0?s:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousOrThis(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Sy=class extends Dt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new be)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},no=class{},Ft,$y=(Ft=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(Ft.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Ft.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Ft.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Ft.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Ft.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Ft.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Ft.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Ft.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl,this.root.innerHTML="")}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(Ft,"CLASS_BASE","thermalImageRoot"),c(Ft,"CLASS_BUILT",Ft.CLASS_BASE+"__built"),c(Ft,"CLASS_HYDRATED",Ft.CLASS_BASE+"__mounted"),c(Ft,"CLASS_HOVER",Ft.CLASS_BASE+"__hover"),Ft),ky=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new be),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},Cy=class extends no{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new ky(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new $y(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),d=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[d]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},ao=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){var r,e;this._mounted&&((r=this.instance.dom)==null?void 0:r.root)!==null&&(this._mounted=!1,(e=this.instance.dom)==null||e.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Zr=class xl{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=xl.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=xl.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},_y=class extends ao{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=Zr.createVisibleLayer(),this._url&&(this.image=Zr.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Py=class extends ao{constructor(e){super(e);c(this,"renderCount",0);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Zr.createCanvasContainer(),this.canvas=Zr.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){this.renderCount+=1,console.log("Rendering",this.instance.fileName,this.renderCount);const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof xr?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,d)=>{const p=new OffscreenCanvas(a,o).getContext("2d"),S=n-s,y=d.map(O=>({id:O[1],type:O[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let O=0;O<a;O++)for(let j=0;j<o;j++){const K=O+j*a,G=l[K];let ie=G;ie<s&&(ie=s),ie>n&&(ie=n);const b=(ie-s)/S,w=Math.round(255*b),E=h[w];p.fillStyle=E,p.fillRect(O,j,1,1);const N=(R,F,U,J,he,C)=>{const Z=U+he/2,ue=J+C/2,ae=(R-Z)/(he/2),$e=(F-ue)/(C/2);return ae*ae+$e*$e<=1};d.forEach((R,F)=>{const U=y[F],[J,he,C,Z,ue,ae]=R;J==="point"?O===Z&&j===C&&(U.avg.value=G):J==="rectangle"?O>=Z&&O<Z+ue&&j>=C&&j<C+ae&&(G<U.min.value&&(U.min.value=G),G>U.max.value&&(U.max.value=G),U.avg.count=U.avg.count+1,U.avg.sum=U.avg.sum+G):J==="ellipsis"&&N(O,j,Z,C,a,o)&&(G<U.min.value&&(U.min.value=G),G>U.max.value&&(U.max.value=G),U.avg.count=U.avg.count+1,U.avg.sum=U.avg.sum+G)})}const D=y.map(O=>({id:O.id,min:O.min.value!==1/0?O.min.value:void 0,max:O.max.value!==-1/0?O.max.value:void 0,avg:O.type==="point"?O.avg.value:O.avg.sum/O.avg.count})),L=p.getImageData(0,0,a,o);return{image:await createImageBitmap(L),stats:D}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Ey=class extends ao{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Zr.createCursorLayerRoot(),this.center=Zr.createCursorLayerCenter(),this.axisX=Zr.createCursorLayerX(),this.axisY=Zr.createCursorLayerY(),this.label=Zr.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Ay=class extends ao{constructor(e){super(e);c(this,"container");this.container=Zr.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Rt,mu=(Rt=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new be)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=Rt.FONT_SIZE_NORMAL,s="normal",n=Rt.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=Rt.FONT_SIZE_NORMAL,i.style.fontFamily=Rt.FONT_FAMILY,i.style.color=Rt.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){ty.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const d=e.clientWidth,u=60,S=d/(u+40),y=document.createElement("div");y.style.width="100%",y.style.position="relative",y.style.paddingLeft=u/2+"px",y.style.paddingRight=u/2+"px",y.style.boxSizing="border-box";const D=document.createElement("div");D.style.width="100%",D.style.position="relative",D.style.backgroundColor=o,D.style.height="30px";const L=i-t,X=s-t,O=n-t,j=X/L*100,K=O/L*100,G=document.createElement("div");G.style.position="absolute",G.style.backgroundImage=a,G.style.height="100%",G.style.top="0px",G.style.left=j+"%",G.style.width=K-j+"%",D.appendChild(G),y.appendChild(D);const ie=document.createElement("div");ie.style.width="100%",ie.style.height="40px",ie.style.position="relative";const v=(E,N=!1,R,F)=>{const U=E/L*100,J=document.createElement("div");J.style.position="absolute",J.style.top="0px",J.style.left=`calc( ${U}% - ${u/2}px )`,J.style.width=u+"px",J.style.textAlign="center",J.style.lineHeight="0px";const he=document.createElement("div"),C=document.createElement("div"),Z=document.createElement("div"),ue=7,ae=ue+"px";he.innerHTML=(t+E).toFixed(2)+" °C",he.style.display="inline-block",he.style.fontSize=Rt.FONT_SIZE_SMALL,he.style.lineHeight="1em",he.style.padding="3px",he.style.position="relative",C.style.width="100%",C.style.height=ae,C.style.textAlign="center",C.style.position="relative",C.style.lineHeight="0px",Z.style.content="",Z.style.display="inline-block",N?(Z.style.width=ue*2+"px",Z.style.height=ue*2+"px",Z.style.rotate="45deg",Z.style.backgroundColor=F,he.style.backgroundColor=F,he.style.zIndex="99",he.style.color=R):(Z.style.width="1px",Z.style.height=ae,Z.style.backgroundColor=R),C.appendChild(Z),J.appendChild(C),J.appendChild(he),ie.appendChild(J)};if(h){const E=document.createElement("div");E.style.position="absolute",E.style.border=`2px solid ${l}`,E.style.height="100%",E.style.boxSizing="border-box";const N=(h.from-t)/L*100,R=(h.to-t)/L*100-N;E.style.left=N+"%",E.style.width=R+"%",D.appendChild(E),v(h.from-t,!0,"white",o),v(h.to-t,!0,"white",o)}const b=L/S;let w=0;for(;w<=L;)v(w,!1,l,"transparent"),w=w+b;return v(X,!0,"white",l),v(O,!0,"white",l),y.appendChild(ie),y}},c(Rt,"FONT_SIZE_NORMAL","16px"),c(Rt,"FONT_SIZE_SMALL","12px"),c(Rt,"COLOR_BASE","black"),c(Rt,"COLOR_GRAY","gray"),c(Rt,"COLOR_LIGHT","lightgray"),c(Rt,"WIDTH","1600px"),c(Rt,"FONT_FAMILY","sans-serif"),c(Rt,"GAP_BASE","10px"),c(Rt,"GAP_SMALL","5px"),c(Rt,"DEBUG",!1),Rt),jr,Ly=(jr=class extends mu{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...jr.DEFAULT_PARAMS,...t,fileName:i}}async onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i),o=`${t.fontSize}px`;s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),this.localInstance=await this.file.reader.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){this.container.style.lineHeight=`${t.fontSize*1.5}px`;const h=this.file.group.registry.minmax.value.min,d=this.file.group.registry.minmax.value.max;if(t.showFileName||t.showFileDate){const u=document.createElement("div");if(u.style.paddingBottom=`${t.fontSize/3}px`,t.showFileDate){const p=Kt.human(this.file.timestamp);u.appendChild(this.createElementWithText("span",p,o,"bold",t.textColor))}if(t.showFileName){const p=(t.showFileDate?" - ":"")+this.file.fileName,S=t.showFileDate?"normal":"bold";u.appendChild(this.createElementWithText("span",p,o,S,t.textColor))}this.container.appendChild(u)}if(t.showThermalScale===!0){const u=h!==this.file.meta.current.min||d!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,d,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",u))}if(this.localInstance.mountToDom(this.container),this.localInstance.dom&&this.localInstance.dom.visibleLayer&&(this.localInstance.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const u=document.createElement("table");u.style.width="100%",u.style.borderCollapse="collapse",u.style.marginTop=`${t.fontSize/3}px`;const p=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(S=>{const y=this.createElementWithText("th",S,o,void 0,jr.COLOR_GRAY);y.style.textAlign="left",y.style.borderBottom=`1px solid ${jr.COLOR_LIGHT}`,y.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,p.appendChild(y)}),u.appendChild(p),this.container.appendChild(u),this.file.slots.forEveryExistingSlot((S,y)=>{var L;const D=(L=this.localInstance)==null?void 0:L.slots.createFromSerialized(S.serialized,y);if(D){const X=document.createElement("tr"),O=this.createElementWithText("td",S.analysis.name,o,void 0,S.analysis.initialColor);O.style.borderBottom=`1px solid ${jr.COLOR_LIGHT}`,O.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,X.appendChild(O);const j=(K,G)=>{const ie=this.createElementWithText("td",G?G.toFixed(3)+" °C":"",o,void 0);ie.style.borderBottom=`1px solid ${jr.COLOR_LIGHT}`,ie.style.paddingTop=`${t.fontSize/3}px`,ie.style.paddingBottom=`${t.fontSize/3}px`,X.appendChild(ie)};S.analysis instanceof fr?(j(S.analysis.initialColor,D.avg),j(S.analysis.initialColor,D.min),j(S.analysis.initialColor,D.max)):S.analysis instanceof xr&&(j(S.analysis.initialColor,D.avg),j(S.analysis.initialColor),j(S.analysis.initialColor)),u.appendChild(X)}})}if(t.author||t.license){const u=document.createElement("div");u.style.lineHeight="1.5em",u.style.color=jr.COLOR_GRAY,u.style.paddingTop=`${t.fontSize/3}px`,t.author&&u.appendChild(this.createElementWithText("span",t.author,o)),t.author&&t.license&&u.appendChild(this.createElementWithText("span"," - ",o)),t.license&&u.appendChild(this.createElementWithText("span",t.license,o)),this.container.appendChild(u)}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},0)}}},c(jr,"DEFAULT_PARAMS",{fileName:"sth",width:1200,fontSize:20,textColor:"black",backgroundColor:"white",showAnalysis:!0,showFileName:!1,showFileDate:!1,license:void 0,showThermalScale:!0}),jr),zn=class yu extends Cy{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new so(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new Ly(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Py(this),visibleLayer:new _y(this,this.visibleUrl),cursorLayer:new Ey(this),listenerLayer:new Ay(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new by(this,void 0),this.timeline=new xy(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Sy(this,!1),this.analysis=new gy(this,[]),this.analysisData=new yy(this),this.slots=new fu(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new yu(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},Oy=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof fr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof fr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof fr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof fr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:Kt.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof fr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=Fn({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=ou(s)(i);lu(s)(n)}},Bt,Dy=(Bt=class extends mu{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){return document.createElement("div")}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s,n,a,o){const l=document.createElement("div");l.style.width=i.toString()+"%",l.style.padding=Bt.GAP_SMALL,l.style.boxSizing="border-box";const h=document.createElement("div");if(l.appendChild(h),n||a){const d=document.createElement("div");if(n){const u=this.createElementWithText("div",`${Kt.human(t.timeline.currentStep.absolute)}`,o,"bold");d.appendChild(u)}if(a){const u=this.createElementWithText("div",n?" - "+t.fileName:t.fileName,Bt.FONT_SIZE_SMALL,n?"normal":"bold");d.appendChild(u)}h.appendChild(d)}if(this.list){let d=this.group.files.value.find(u=>u.fileName===t.fileName);if(d&&t.timeline.setRelativeTime(d==null?void 0:d.timeline.currentMs),this.list.appendChild(l),t.mountToDom(h),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s){const u=d;if(u&&u.analysis.value.length>0){const p=document.createElement("table");p.style.width="100%",p.style.borderCollapse="collapse";const S=document.createElement("tr");["","AVG","MIN","MAX"].forEach(y=>{const D=this.createElementWithText("th",y,o,void 0,Bt.COLOR_GRAY);D.style.padding=Bt.GAP_SMALL+"px",D.style.textAlign="left",S.appendChild(D)}),p.appendChild(S),h.appendChild(p),u.slots.forEveryExistingSlot((y,D)=>{const L=t.slots.createFromSerialized(y.serialized,D);if(L){const X=document.createElement("tr"),O=this.createElementWithText("td",y.analysis.name,o,void 0,y.analysis.initialColor);O.style.borderTop=`1px solid ${Bt.COLOR_LIGHT}`,O.style.padding=`${Bt.GAP_SMALL}px 0px ${Bt.GAP_SMALL} 0px`,X.appendChild(O);const j=(K,G)=>{const ie=this.createElementWithText("td",G?G.toFixed(3)+" °C":"",o,void 0);ie.style.borderTop=`1px solid ${Bt.COLOR_LIGHT}`,ie.style.paddingTop=`${Bt.GAP_SMALL}px`,ie.style.paddingBottom=`${Bt.GAP_SMALL}px`,X.appendChild(ie)};y.analysis instanceof fr?(j(y.analysis.initialColor,L.avg),j(y.analysis.initialColor,L.min),j(y.analysis.initialColor,L.max)):y.analysis instanceof xr&&(j(y.analysis.initialColor,L.avg),j(y.analysis.initialColor),j(y.analysis.initialColor)),p.appendChild(X)}})}}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);if(t.showGroupName&&this.header){const d=t.label?t.label:this.group.label;this.header.appendChild(this.createElementWithText("div",d,t.fontSize.toString()+"px","bold")),this.header.style.paddingBottom=Bt.GAP_BASE}t.showThermalScale&&((h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black"))),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(d=>d.thermalUrl);let l;o.forEach(d=>{l=n.batch.request(d,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",d=>{const u=100/t.columns;d.forEach(p=>{p instanceof zn&&this.buildInstance(p,u,t.showAnalysis,t.showFileDate,t.showFileName,t.fontSize.toString()+"px")}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...Bt.DEFAULT_PROPS,fileName:i}:{...Bt.DEFAULT_PROPS,...t,fileName:i}}},c(Bt,"DEFAULT_PROPS",{fileName:"export.png",columns:3,width:1600,showAnalysis:!0,showFileDate:!0,showFileName:!1,showThermalScale:!0,license:void 0,textColor:"black",fontSize:12,showGroupName:!0,backgroundColor:"white"}),Bt),Ri,Ty=(Ri=class extends Dt{constructor(){super(...arguments);c(this,"onSlotSync",new be);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}get currentPointer(){return this._currentPointer}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){const s=t.slots.getSlot(i);if(i===1)return{slot:s,serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:s,serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:s,serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:s,serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:s,serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:s,serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:s,serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(Ri.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(Ri.LISTENER_KEY),n.delete(Ri.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(s!==this.currentPointer)if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const d=(a=n.slots.getSlot(l))==null?void 0:a.serialized,u=h.serialized;if(d!==u)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(u);else{const p=n.slots.createFromSerialized(u,l);p==null||p.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Oy(this)),this._csv}get png(){return this._png||(this._png=new Dy(this)),this._png}},c(Ri,"LISTENER_KEY","__analysis__sync"),Ri),My=class extends Dt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Ry=class extends Dt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e.sort((t,i)=>t.timestamp-i.timestamp)}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof zn?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},vu=class extends Dt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Iy=class extends vu{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},Uy=class extends Dt{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new be);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new be);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new be);c(this,"_duration",0);c(this,"onDurationChanged",new be);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof zn);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},ns,Fy=(ns=class extends Dt{constructor(t){super(t,void 0);c(this,"timeout")}calculateData(){let t=[],i=[];const s=[],n=this.parent.files.value.sort((o,l)=>o.timestamp-l.timestamp);i=n[0].analysisData.value.values[0],t=n[0].analysisData.value.colors,this.parent.files.forEveryInstance(o=>{const l=[new Date(o.timestamp)];o.analysis.value.forEach(async h=>{h.graph.state.MIN===!0&&h.min&&l.push(h.min),h.graph.state.MAX===!0&&h.max&&l.push(h.max),h.graph.state.AVG===!0&&h.avg&&l.push(h.avg)}),l.length>1&&s.push(l)}),t.length>0?this.value={colors:t,data:[i,...s]}:this.value=void 0,console.log("Přepočítal jsem data",this.value)}turnOn(){this.parent.files.forEveryInstance(t=>{t.analysisData.addListener(ns.LISTENER_ID,()=>{this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.calculateData()},0)})})}turnOff(){this.parent.files.forEveryInstance(t=>{t.analysisData.removeListener(ns.LISTENER_ID)})}_wtf(){this.parent.files.forEveryInstance(t=>{t.analysis.layers.forEach(i=>{i.graph.setAvgActivation(!0)})})}validate(t){return t}afterSetEffect(){}},c(ns,"LISTENER_ID","AnalysisGroupGraph"),ns),zy=class extends no{constructor(t,i,s,n){super();c(this,"hash",Math.random());c(this,"minmax",new Iy(this,void 0));c(this,"files",new Ry(this,[]));c(this,"cursorPosition",new My(this,void 0));c(this,"analysisSync",new Ty(this,!1));c(this,"analysisGraph",new Fy(this));c(this,"_playback");c(this,"forEveryInstance",t=>{this.files.value.forEach(i=>t(i))});c(this,"filters",new so(this));this.registry=t,this.id=i,this.name=s,this.description=n}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get tool(){return this.registry.manager.tool}get playback(){return this._playback||(this._playback=new Uy(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}getInstances(){return this.files.value}startBatch(t){return this.registry.batch.getBatchById(t)}},bu=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},hs=class wu extends bu{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new wu(e.url,e.code,e.message)}},xu=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},Fi=class extends bu{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=zn.fromService(t,i,s,n);return t.files.addFile(a),a}},jy=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(w,E)=>{const N=w.getBigInt64(E,!0),R=62135596800000n,F=10000n,U=24n*60n*60n*1000n*F,J=0x4000000000000000n,he=0x8000000000000000n;let Z=N&0x3fffffffffffffffn;N&he&&(Z>J-U&&(Z-=J),Z<0&&(Z+=U));const ae=Z/F-R;return Number(ae)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,d=l+h,u=r.slice(25),p=u.byteLength/d,S=w=>{const E=w*d,N=E+d,R=u.slice(E,N),F=new DataView(R),U=F.getFloat32(8,!0),J=F.getFloat32(12,!0),he=n(F,0),C=F.getFloat32(24,!0),Z=F.getFloat32(28,!0);return{timestamp:he,min:U,max:J,emissivity:C,reflectedKelvins:Z}},y=[];for(let w=0;w<p;w++){const E=S(w);y.push(E)}const D={emissivity:0,reflectedKelvins:0};let L=1/0,X=-1/0;const O=[];y.forEach(w=>{D.emissivity=D.emissivity+w.emissivity,D.reflectedKelvins=D.reflectedKelvins+w.reflectedKelvins,w.min<L&&(L=w.min),w.max>X&&(X=w.max),O.push(w.timestamp)});const j=O[0],K=[];O.forEach((w,E)=>{const N=O[E+1];let R=0;N===void 0&&(R=0),R=N-w;const F=w-j;K.push({absolute:w,relative:F,offset:isNaN(R)?0:R,index:E})});const G=y[y.length-1].timestamp-y[0].timestamp,ie=G/p,v=1e3/ie,b=y[0].timestamp;return{width:t,height:i,timestamp:b,bytesize:s,frameCount:p,duration:G,frameInterval:ie,fps:v,timeline:K,min:L,max:X,averageEmissivity:D.emissivity/y.length,averageReflectedKelvins:D.reflectedKelvins/y.length}},Ny=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,d=r.slice(25),u=e*h,p=u+h;return{array:d.slice(u,p),dataType:i}},Wy=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let d=i&0x3fffffffffffffffn;i&l&&(d>o-a&&(d-=o),d<0&&(d+=a));const p=d/n-s,S=Number(p),y=t.getFloat32(8,!0),D=t.getFloat32(12,!0),L=t.getFloat32(24,!0),X=t.getFloat32(28,!0),O=r.slice(57);let j=[];if(e===0){const K=new Uint16Array(O),G=Math.abs(y-D),ie=65535;K.forEach(v=>{const b=v/ie;j.push(y+G*b)})}else e===1&&(j=Array.from(new Float32Array(O)));return{timestamp:S,min:y,max:D,emissivity:L,reflectedKelvins:X,pixels:j}},By=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(X,O)=>{const j=X.getBigInt64(O,!0),K=62135596800000n,G=10000n,ie=24n*60n*60n*1000n*G,v=0x4000000000000000n,b=0x8000000000000000n;let E=j&0x3fffffffffffffffn;j&b&&(E>v-ie&&(E-=v),E<0&&(E+=ie));const R=E/G-K;return Number(R)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,d=s*n*l,u=h+d,p=r.slice(25),S=p.byteLength/u,y={},D=X=>{const O=X*u,j=O+u,K=p.slice(O,j),G=new DataView(K),ie=a(G,0),v=G.getFloat32(8,!0),w=G.getFloat32(12,!0)-v,N=57+t*l*s+e*l;let R=0;if(o===1)R=G.getFloat32(N,!0);else if(o===0){const J=G.getInt16(N,!0)/65535;R=v+w*J}return{timestamp:ie,temperature:R}};let L=0;for(let X=0;X<S;X++){const O=D(X);L===0&&(L=O.timestamp),y[O.timestamp-L]=O.temperature}return y},Hy=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(j,K)=>{const G=j.getBigInt64(K,!0),ie=62135596800000n,v=10000n,b=24n*60n*60n*1000n*v,w=0x4000000000000000n,E=0x8000000000000000n;let R=G&0x3fffffffffffffffn;G&E&&(R>w-b&&(R-=w),R<0&&(R+=b));const U=R/v-ie;return Number(U)},h=n.getUint8(15);let d=2;h===1&&(d=4);const u=57,p=a*o*d,S=u+p,y=r.slice(25),D=y.byteLength/S,L={},X=j=>{const K=j*S,G=K+S,ie=y.slice(K,G),v=new DataView(ie),b=l(v,0),w=v.getFloat32(8,!0),N=v.getFloat32(12,!0)-w,R=57,F=e,U=e+i,J=t,he=t+s;let C=1/0,Z=-1/0,ue=0,ae=0;for(let Te=J;Te<=he;Te++){const Re=Te*a;for(let Ue=F;Ue<=U;Ue++){const q=R+(Re+Ue)*d;let ee=NaN;if(h===1)ee=v.getFloat32(q,!0);else{const Ne=v.getInt16(q,!0)/65535;ee=w+N*Ne}ee<C&&(C=ee),ee>Z&&(Z=ee),ae+=ee,ue++}}const $e={min:C,max:Z,avg:ae/ue,count:ue};return{timestamp:b,result:$e}};let O=0;for(let j=0;j<D;j++){const K=X(j);O===0&&(O=K.timestamp),L[K.timestamp-O]=K.result}return L},Vy=async r=>{console.log("Reading histogram");let e=[];const t=async L=>{const X=new DataView(L.slice(0,25)),O=X.getUint8(15),j=X.getUint16(17,!0),K=X.getUint16(19,!0),G=O===1?4:2,ie=57,v=j*K*G,b=ie+v,w=L.slice(25),E=w.byteLength/b;let N=[];for(let R=0;R<E;R++){const F=R*b,U=F+57,J=U+v,he=w.slice(U,J);if(O===0){const C=new DataView(w.slice(F,56)),Z=C.getFloat32(8,!0),ue=C.getFloat32(12,!0),ae=new Uint16Array(he),$e=Math.abs(Z-ue),Te=65535;ae.forEach(Re=>{const Ue=Re/Te;N.push(Z+$e*Ue)})}else O===1&&(N=N.concat(Array.from(new Float32Array(he))))}return N};(await Promise.all(r.map(L=>t(L)))).forEach(L=>{e=e.concat(L)}),e.sort((L,X)=>L-X);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=255,l=a/o,h=[];let d=[...e];for(let L=0;L<o;L++){const X=s+l*L,O=X+l,j=d.findIndex(K=>K>O);if(j===0){const K={from:X,to:O,count:0,percentage:0};h.push(K)}else{const G=d.slice(0,j-1).length,ie=G/e.length*100,v={from:X,to:O,count:G,percentage:ie};h.push(v),d=d.slice(j)}}const u=[...h].sort((L,X)=>L.percentage-X.percentage),p=u[0].percentage,S=u[u.length-1].percentage,y=Math.abs(p-S);return h.map(L=>({...L,height:L.percentage/y*100}))},Gy=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},qy=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(K,G)=>{const ie=K.getBigInt64(G,!0),v=62135596800000n,b=10000n,w=24n*60n*60n*1000n*b,E=0x4000000000000000n,N=0x8000000000000000n;let F=ie&0x3fffffffffffffffn;ie&N&&(F>E-w&&(F-=E),F<0&&(F+=w));const J=F/b-v;return Number(J)},h=n.getUint8(15);let d=2;h===1&&(d=4);const u=57,p=a*o*d,S=u+p,y=r.slice(25),D=y.byteLength/S,L={},X=(K,G)=>{const ie=e+i/2,v=t+s/2,b=(K-ie)/(i/2),w=(G-v)/(s/2);return b*b+w*w<=1},O=K=>{const G=K*S,ie=G+S,v=y.slice(G,ie),b=new DataView(v),w=l(b,0),E=b.getFloat32(8,!0),R=b.getFloat32(12,!0)-E,F=57,U=e,J=e+i,he=t,C=t+s;let Z=1/0,ue=-1/0,ae=0,$e=0;for(let Re=he;Re<=C;Re++){const Ue=Re*a;for(let q=U;q<=J;q++)if(X(q,Re)){const ee=F+(Ue+q)*d;let ve=NaN;if(h===1)ve=b.getFloat32(ee,!0);else{const Fe=b.getInt16(ee,!0)/65535;ve=E+R*Fe}ve<Z&&(Z=ve),ve>ue&&(ue=ve),$e+=ve,ae++}}const Te={min:Z,max:ue,avg:$e/ae,count:ae};return{timestamp:w,result:Te}};let j=0;for(let K=0;K<D;K++){const G=O(K);j===0&&(j=G.timestamp),L[G.timestamp-j]=G.result}return L},Yy=[{extension:"lrc",minme:"application/octet-stream"}],Xy={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Yy,is:Gy,baseInfo:jy,getFrameSubset:Ny,frameData:Wy,registryHistogram:Vy,pointAnalysisData:By,rectAnalysisData:Hy,ellipsisAnalysisData:qy},Su=Object.freeze(Xy),Ky={LrcParser:Su},$u=Object.values(Ky),ku=(r,e)=>{const t=$u.find(i=>i.is(r,e));if(t===void 0)throw new xu(2,e,`No parser found for '${e}'.`);return t},Zy=$u.map(r=>r.extensions),Jy=Zy.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Qy=class Cu{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new Cu(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(await fetch(this.thermalUrl))),this.response}async processResponse(e){const t=e;if(t.status!==200)return this.pocessTheService(new hs(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=ku(i,this.thermalUrl);return this.pocessTheService(new Fi(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof xu)return this.pocessTheService(hs.fromError(s));throw s}}pocessTheService(e){return e}},ev=class _u{constructor(e,t,i=!0){c(this,"_hover",!1);c(this,"onMouseEnter",new be);c(this,"onMouseLeave",new be);c(this,"onDrop",new be);c(this,"onProcessingEnd",new be);c(this,"input");c(this,"hydrated",!1);c(this,"multiple");c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.multiple=i,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t,i=!0){const s=new _u(e,t,i);return s.hydrate(),s}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleFiles(e){let t=[];if(this.multiple)t=await Promise.all(e.map(async i=>await this.service.loadUploadedFile(i)));else{const i=e[0];i&&t.push(await this.service.loadUploadedFile(i))}return t}async handleDrop(e){e.preventDefault(),this.onDrop.call();let t=[];const i=e.dataTransfer;return i&&i.files&&(t=await this.handleFiles(Array.from(i.files))),this.onProcessingEnd.call(t,e),this.handleLeave(),{results:t,event:e}}async handleInputChange(e){e.preventDefault(),this.onDrop.call();const t=e.target;let i=[];return t.files&&(i=await this.handleFiles(Array.from(t.files)),this.onProcessingEnd.call(i,e),this.handleLeave()),{results:i,event:e}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Jy,this.multiple&&(e.multiple=!0),e}openFileDialog(e=!0){this.input!==void 0&&(this.input.multiple=e,this.input.click())}},tv=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new ql(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=ku(e,r.name);return new Fi(this,e,t,r.name)}catch(e){return new hs(r.name,3,e.message)}}handleDropzone(r,e=!0){return ev.listenOnElement(this,r,e)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=Qy.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}async loadFiles(r){return r}},rv=class extends Dt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},iv=class extends Dt{get availablePalettes(){return Qr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},sv=class extends Dt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},Xc=class Sl{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new be);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Sl(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Sl(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof Fi?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},nv=class{constructor(r){c(this,"onBatchStart",new be);c(this,"onBatchComplete",new be);c(this,"set",new Set);this.registry=r}get numberOfBatches(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=Xc.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=Xc.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.numberOfBatches===0&&this.registry.loading.markAsLoaded()}},av=class extends Dt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},ov=class extends Dt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=this.parent.histogram.value.filter(i=>i.height>=10),t={from:e[0].from,to:e[e.length-1].to};this.imposeRange(t)}}},lv=class extends Dt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addExistingGroup(e){this.value.map(t=>t.hash).includes(e.hash)||(this.value=[...this.value,e])}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new zy(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},hv=class extends Dt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3);c(this,"_loading",!1);c(this,"onCalculationStart",new be);c(this,"onCalculationEnd",new be)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}get loading(){return this._loading}set loading(e){this._loading=e}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((S,y)=>{const D=y.reduce((L,X)=>[...L,...X],[]);return[...S,...D]},[]).sort((S,y)=>S-y);const h=n/a;let d=i+h;const u=new Map;let p=0;for(;d!==!1;){const S=l.findIndex(L=>L>d),y=l.slice(0,S).length;u.set(d-h/2,y),p+=y,l=l.slice(S);const D=d+h;d=D<s?D:!1}return{result:u,resultCount:p}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateHistogram()})}}async recalculateHistogram(){this.onCalculationStart.call(),this.loading=!0;const t=this.parent.groups.value.map(i=>i.files.value).reduce((i,s)=>(i=i.concat(s),i),[]).map(i=>i.reader.buffer);try{const i=await this.parent.pool.exec(Su.registryHistogram,[t]);this.value=i,this.loading=!1,this.onCalculationEnd.call(!0)}catch{this.loading=!1,this.onCalculationEnd.call(!1)}}},cv=class extends Dt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},dv=class extends vu{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},uv=class extends no{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new lv(this,[]));c(this,"_batch");c(this,"onProcessingStart",new be);c(this,"onProcessingEnd",new be);c(this,"opacity",new av(this,1));c(this,"minmax",new dv(this,void 0));c(this,"loading",new cv(this,!1));c(this,"range",new ov(this,void 0));c(this,"histogram",new hv(this,[]));c(this,"palette");c(this,"filters",new so(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([s,n])=>{const a=this.groups.addOrGetGroup(s),o=await Promise.all(n.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:a,groupFiles:o}})),i=await Promise.all(t.map(async({group:s,groupFiles:n})=>await Promise.all(n.map(async o=>o instanceof Fi?await o.createInstance(s):!1))));return this.postLoadedProcessing(),i}async loadFullOneFile(e,t){this.reset(),this.loading.markAsLoading();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl),n=s instanceof Fi?await s.createInstance(i):s;return this.loading.markAsLoaded(),this.postLoadedProcessing(),n}get batch(){return this._batch||(this._batch=new nv(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},oo=class{constructor(r){c(this,"active",!1);this.manager=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},lo=class extends oo{},pv=class extends lo{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=fu.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},fv=class extends lo{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},gv=class extends lo{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},mv=class extends oo{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},Pu=class extends oo{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},yv=[Pu,gv,fv,pv,mv],vv=r=>{const e=yv.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},bv=class extends Dt{constructor(e,t){super(e,t);c(this,"_tools",vv(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof oo?this.value=e:this.value=this.tools[e]}},Eu="chrome"in window;console.log("is chromium",Eu);var wv=Eu?{maxWorkers:4}:{},xv=sy.pool(wv),ql=class extends no{constructor(e,t){super();c(this,"id");c(this,"service",new tv(this));c(this,"registries",{});c(this,"palette",new iv(this,"jet"));c(this,"smooth",new sv(this,!1));c(this,"graphSmooth",new rv(this,!1));c(this,"tool",new bv(this,new Pu(this)));c(this,"pool");c(this,"filters",new so(this));this.pool=e||xv,this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new uv(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}},Sv=Object.defineProperty,$v=Object.getOwnPropertyDescriptor,vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?$v(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sv(e,t,s),s};const Kc=["ready","select"],kv={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let rr=class extends gr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new be,this.left=0,this.top=0,this.w=0,this.h=0}render(){return f`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){_g(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(Kc,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(kv[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!Kc.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await Tc({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(Tc).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};rr.styles=Pe`
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
  `;vr([m({type:String,reflect:!0})],rr.prototype,"type",2);vr([m({type:Array})],rr.prototype,"events",2);vr([m({type:Object,hasChanged:()=>!0})],rr.prototype,"options",2);vr([m({type:Array})],rr.prototype,"cols",2);vr([m({type:Array})],rr.prototype,"rows",2);vr([m({type:String})],rr.prototype,"data",2);vr([m({type:Object})],rr.prototype,"view",2);vr([m({type:Array})],rr.prototype,"selection",2);vr([m({type:Object})],rr.prototype,"_data",2);vr([m({type:Number,reflect:!0})],rr.prototype,"left",2);vr([m({type:Number,reflect:!0})],rr.prototype,"top",2);vr([m({type:Number,reflect:!0})],rr.prototype,"w",2);vr([m({type:Number,reflect:!0})],rr.prototype,"h",2);rr=vr([pe("thermal-chart")],rr);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=()=>new Cv;let Cv=class{};const hl=new WeakMap,Ke=Rn(class extends Mf{render(r){return V}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),V}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=hl.get(e);t===void 0&&(t=new WeakMap,hl.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=hl.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var T=(r=>(r.loading="loading",r.config="config",r.temperature="temperature",r.upload="upload",r.uploadafile="uploadafile",r.selectfile="selectfile",r.addfiles="addfiles",r.clear="clear",r.dragorselectfile="dragorselectfile",r.share="share",r.fileloadingerror="fileloadingerror",r.embedhint="embedhint",r.embedlibrary="embedlibrary",r.embedcomponent="embedcomponent",r.copy="copy",r.remotefoldersbrowseraddfolderhint="remotefoldersbrowseraddfolderhint",r.file="file",r.layout_simple="layout_simple",r.layout_advanced="layout_advanced",r.layout_nogui="layout_nogui",r.layout_lesson="layout_lesson",r.next="next",r.prev="prev",r.back="back",r.close="close",r.open="open",r.detail="detail",r.showeverything="showeverything",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.togglevisibleimage="togglevisibleimage",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.numfiles="numfiles",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.exportimagewidth="exportimagewidth",r.exportimagefontsize="exportimagefontsize",r.exportgroupname="exportgroupname",r.exportfilenames="exportfilenames",r.numberofcolumns="numberofcolumns",r.exportcontent="exportcontent",r.exportdimensions="exportdimensions",r.exportgroup="exportgroup",r.thermalscale="thermalscale",r.filedate="filedate",r.showingfolder="showingfolder",r.showingfolders="showingfolders",r.and="and",r.or="or",r.doyouwanttoadd="doyouwanttoadd",r.youmayalsoadd="youmayalsoadd",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.groupped="groupped",r.bydays="bydays",r.byhours="byhours",r.byweeks="byweeks",r.bymonths="bymonths",r.byyears="byyears",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.reload="reload",r.analysis="analysis",r.analyses="analyses",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.analysissync="analysissync",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r.remotefoldersbrowser="remotefoldersbrowser",r))(T||{});const _v=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],Zc=Object.fromEntries(_v.map(r=>[r.code,r]));var Pv=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,ho=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ev(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pv(e,t,s),s};let cs=class extends gr{constructor(){super(),this.button="close",this.dialogRef=Ve(),this.closeButtonRef=Ve(),this.invokerRef=Ve()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return f`
            <slot name="invoker" ${Ke(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Ke(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Ke(this.closeButtonRef)} @click=${this.setClose}>

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
                    <thermal-button variant="foreground" @click=${async()=>{this.beforeClose?await this.beforeClose()&&this.setClose():this.setClose()}}>
                        ${M(T[this.button])}
                    </thermal-button>
                </div>
                
            
            </dialog>
        `}};cs.shadowRootOptions={...gr.shadowRootOptions,mode:"open"};cs.styles=Pe`

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

        
    
    `;ho([m({type:String,reflect:!0})],cs.prototype,"button",2);ho([m({type:String,reflect:!0})],cs.prototype,"label",2);ho([m({type:Object,reflect:!0})],cs.prototype,"beforeClose",2);cs=ho([pe("thermal-dialog")],cs);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Au=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jc=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Au(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Av{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lv=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Qc extends Av{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:d}]of this.subscriptions)l.has(h)||(l.add(h),d.dispatchEvent(new Au(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Lv(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Qc(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Qc(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Jc(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Jc(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let xa;const Ov=new Uint8Array(16);function Dv(){if(!xa&&(xa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!xa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return xa(Ov)}const Xt=[];for(let r=0;r<256;++r)Xt.push((r+256).toString(16).slice(1));function Tv(r,e=0){return Xt[r[e+0]]+Xt[r[e+1]]+Xt[r[e+2]]+Xt[r[e+3]]+"-"+Xt[r[e+4]]+Xt[r[e+5]]+"-"+Xt[r[e+6]]+Xt[r[e+7]]+"-"+Xt[r[e+8]]+Xt[r[e+9]]+"-"+Xt[r[e+10]]+Xt[r[e+11]]+Xt[r[e+12]]+Xt[r[e+13]]+Xt[r[e+14]]+Xt[r[e+15]]}const Mv=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ed={randomUUID:Mv};function Rv(r,e,t){if(ed.randomUUID&&!e&&!r)return ed.randomUUID();r=r||{};const i=r.random||(r.rng||Dv)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Tv(i)}const gs="localeContext",Bs=r=>{St.on("languageChanged",e=>{r.locale=e}),r.locale===void 0?r.locale=St.language:St.changeLanguage(r.locale)},cl={cs:["cs","cz","cs_CZ","cs_CS"],fr:["fr","fr_FR","fr_CA"],de:["de","de_DE","de_AT","de_CH"],cy:["cy","cy_GB","cy"],en:["en","en_US","en_GB","en_CA","en_AU","en_NZ","en_IE","en_ZA"]},Hs={fromAttribute:r=>{let e,t=0;for(;t<Object.keys(cl).length&&e===void 0;){const i=Object.keys(cl)[t];cl[i].includes(r)&&(e=i),t++}return e??"en"},toAttribute:r=>r};var Iv=Object.defineProperty,Uv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Iv(e,t,s),s};const Ah=class Ah extends gr{get UUID(){return this._UUID===void 0&&(this._UUID=Rv()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),St.on("languageChanged",e=>{this._locale=e})}};Ah.shadowRootOptions={...gr.shadowRootOptions,mode:"open"};let ot=Ah;Uv([de({context:gs,subscribe:!0})],ot.prototype,"_locale");var Fv=Object.defineProperty,zv=Object.getOwnPropertyDescriptor,co=(r,e,t,i)=>{for(var s=i>1?void 0:i?zv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fv(e,t,s),s};let vi=class extends ot{constructor(){super(...arguments),this.interactive=!0,this.size="sm"}render(){return f`
            <button class="${this.variant}" part="btn">
                <slot></slot>
            </button>
        `}};vi.VARIANTS=["slate","primary","foreground","background","plain"];vi.shadowRootOptions={...gr.shadowRootOptions,mode:"open"};vi.styles=Pe`

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
    
    `;co([m({type:String,converter:{fromAttribute:r=>{if(vi.VARIANTS.includes(r))return r},toAttribute:r=>r},reflect:!1})],vi.prototype,"variant",2);co([m({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],vi.prototype,"interactive",2);co([m({type:String})],vi.prototype,"size",2);vi=co([pe("thermal-button")],vi);const Ts=Math.min,mi=Math.max,ja=Math.round,ei=r=>({x:r,y:r}),jv={left:"right",right:"left",bottom:"top",top:"bottom"},Nv={start:"end",end:"start"};function td(r,e,t){return mi(r,Ts(e,t))}function jn(r,e){return typeof r=="function"?r(e):r}function bi(r){return r.split("-")[0]}function uo(r){return r.split("-")[1]}function Lu(r){return r==="x"?"y":"x"}function Ou(r){return r==="y"?"height":"width"}function Nn(r){return["top","bottom"].includes(bi(r))?"y":"x"}function Du(r){return Lu(Nn(r))}function Wv(r,e,t){t===void 0&&(t=!1);const i=uo(r),s=Du(r),n=Ou(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Na(a)),[a,Na(a)]}function Bv(r){const e=Na(r);return[$l(r),e,$l(e)]}function $l(r){return r.replace(/start|end/g,e=>Nv[e])}function Hv(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function Vv(r,e,t,i){const s=uo(r);let n=Hv(bi(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map($l)))),n}function Na(r){return r.replace(/left|right|bottom|top/g,e=>jv[e])}function Gv(r){return{top:0,right:0,bottom:0,left:0,...r}}function Tu(r){return typeof r!="number"?Gv(r):{top:r,right:r,bottom:r,left:r}}function Ms(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function rd(r,e,t){let{reference:i,floating:s}=r;const n=Nn(e),a=Du(e),o=Ou(a),l=bi(e),h=n==="y",d=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,p=i[o]/2-s[o]/2;let S;switch(l){case"top":S={x:d,y:i.y-s.height};break;case"bottom":S={x:d,y:i.y+i.height};break;case"right":S={x:i.x+i.width,y:u};break;case"left":S={x:i.x-s.width,y:u};break;default:S={x:i.x,y:i.y}}switch(uo(e)){case"start":S[a]-=p*(t&&h?-1:1);break;case"end":S[a]+=p*(t&&h?-1:1);break}return S}const qv=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:d,y:u}=rd(h,i,l),p=i,S={},y=0;for(let D=0;D<o.length;D++){const{name:L,fn:X}=o[D],{x:O,y:j,data:K,reset:G}=await X({x:d,y:u,initialPlacement:i,placement:p,strategy:s,middlewareData:S,rects:h,platform:a,elements:{reference:r,floating:e}});d=O??d,u=j??u,S={...S,[L]:{...S[L],...K}},G&&y<=50&&(y++,typeof G=="object"&&(G.placement&&(p=G.placement),G.rects&&(h=G.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):G.rects),{x:d,y:u}=rd(h,p,l)),D=-1)}return{x:d,y:u,placement:p,strategy:s,middlewareData:S}};async function Mu(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:p=!1,padding:S=0}=jn(e,r),y=Tu(S),L=o[p?u==="floating"?"reference":"floating":u],X=Ms(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(L)))==null||t?L:L.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:d,strategy:l})),O=u==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,j=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),K=await(n.isElement==null?void 0:n.isElement(j))?await(n.getScale==null?void 0:n.getScale(j))||{x:1,y:1}:{x:1,y:1},G=Ms(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:O,offsetParent:j,strategy:l}):O);return{top:(X.top-G.top+y.top)/K.y,bottom:(G.bottom-X.bottom+y.bottom)/K.y,left:(X.left-G.left+y.left)/K.x,right:(G.right-X.right+y.right)/K.x}}const Yv=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:D=!0,...L}=jn(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const X=bi(s),O=bi(o)===o,j=await(l.isRTL==null?void 0:l.isRTL(h.floating)),K=p||(O||!D?[Na(o)]:Bv(o));!p&&y!=="none"&&K.push(...Vv(o,D,y,j));const G=[o,...K],ie=await Mu(e,L),v=[];let b=((i=n.flip)==null?void 0:i.overflows)||[];if(d&&v.push(ie[X]),u){const R=Wv(s,a,j);v.push(ie[R[0]],ie[R[1]])}if(b=[...b,{placement:s,overflows:v}],!v.every(R=>R<=0)){var w,E;const R=(((w=n.flip)==null?void 0:w.index)||0)+1,F=G[R];if(F)return{data:{index:R,overflows:b},reset:{placement:F}};let U=(E=b.filter(J=>J.overflows[0]<=0).sort((J,he)=>J.overflows[1]-he.overflows[1])[0])==null?void 0:E.placement;if(!U)switch(S){case"bestFit":{var N;const J=(N=b.map(he=>[he.placement,he.overflows.filter(C=>C>0).reduce((C,Z)=>C+Z,0)]).sort((he,C)=>he[1]-C[1])[0])==null?void 0:N[0];J&&(U=J);break}case"initialPlacement":U=o;break}if(s!==U)return{reset:{placement:U}}}return{}}}};function Ru(r){const e=Ts(...r.map(n=>n.left)),t=Ts(...r.map(n=>n.top)),i=mi(...r.map(n=>n.right)),s=mi(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function Xv(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>Ms(Ru(s)))}const Kv=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=jn(r,e),d=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),u=Xv(d),p=Ms(Ru(d)),S=Tu(o);function y(){if(u.length===2&&u[0].left>u[1].right&&l!=null&&h!=null)return u.find(L=>l>L.left-S.left&&l<L.right+S.right&&h>L.top-S.top&&h<L.bottom+S.bottom)||p;if(u.length>=2){if(Nn(t)==="y"){const E=u[0],N=u[u.length-1],R=bi(t)==="top",F=E.top,U=N.bottom,J=R?E.left:N.left,he=R?E.right:N.right,C=he-J,Z=U-F;return{top:F,bottom:U,left:J,right:he,width:C,height:Z,x:J,y:F}}const L=bi(t)==="left",X=mi(...u.map(E=>E.right)),O=Ts(...u.map(E=>E.left)),j=u.filter(E=>L?E.left===O:E.right===X),K=j[0].top,G=j[j.length-1].bottom,ie=O,v=X,b=v-ie,w=G-K;return{top:K,bottom:G,left:ie,right:v,width:b,height:w,x:ie,y:K}}return p}const D=await n.getElementRects({reference:{getBoundingClientRect:y},floating:i.floating,strategy:a});return s.reference.x!==D.reference.x||s.reference.y!==D.reference.y||s.reference.width!==D.reference.width||s.reference.height!==D.reference.height?{reset:{rects:D}}:{}}}};async function Zv(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=bi(t),o=uo(t),l=Nn(t)==="y",h=["left","top"].includes(a)?-1:1,d=n&&l?-1:1,u=jn(e,r);let{mainAxis:p,crossAxis:S,alignmentAxis:y}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return o&&typeof y=="number"&&(S=o==="end"?y*-1:y),l?{x:S*d,y:p*h}:{x:p*h,y:S*d}}const Jv=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await Zv(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},Qv=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:L=>{let{x:X,y:O}=L;return{x:X,y:O}}},...l}=jn(r,e),h={x:t,y:i},d=await Mu(e,l),u=Nn(bi(s)),p=Lu(u);let S=h[p],y=h[u];if(n){const L=p==="y"?"top":"left",X=p==="y"?"bottom":"right",O=S+d[L],j=S-d[X];S=td(O,S,j)}if(a){const L=u==="y"?"top":"left",X=u==="y"?"bottom":"right",O=y+d[L],j=y-d[X];y=td(O,y,j)}const D=o.fn({...e,[p]:S,[u]:y});return{...D,data:{x:D.x-t,y:D.y-i}}}}};function po(){return typeof window<"u"}function Vs(r){return Iu(r)?(r.nodeName||"").toLowerCase():"#document"}function Sr(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function $i(r){var e;return(e=(Iu(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function Iu(r){return po()?r instanceof Node||r instanceof Sr(r).Node:!1}function Nr(r){return po()?r instanceof Element||r instanceof Sr(r).Element:!1}function ti(r){return po()?r instanceof HTMLElement||r instanceof Sr(r).HTMLElement:!1}function id(r){return!po()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof Sr(r).ShadowRoot}function Wn(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Wr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function e0(r){return["table","td","th"].includes(Vs(r))}function fo(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function Yl(r){const e=Xl(),t=Nr(r)?Wr(r):r;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function t0(r){let e=zi(r);for(;ti(e)&&!Rs(e);){if(Yl(e))return e;if(fo(e))return null;e=zi(e)}return null}function Xl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Rs(r){return["html","body","#document"].includes(Vs(r))}function Wr(r){return Sr(r).getComputedStyle(r)}function go(r){return Nr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function zi(r){if(Vs(r)==="html")return r;const e=r.assignedSlot||r.parentNode||id(r)&&r.host||$i(r);return id(e)?e.host:e}function Uu(r){const e=zi(r);return Rs(e)?r.ownerDocument?r.ownerDocument.body:r.body:ti(e)&&Wn(e)?e:Uu(e)}function kl(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Uu(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=Sr(s);if(n){const o=Cl(a);return e.concat(a,a.visualViewport||[],Wn(s)?s:[],o&&t?kl(o):[])}return e.concat(s,kl(s,[],t))}function Cl(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function Fu(r){const e=Wr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=ti(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=ja(t)!==n||ja(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function zu(r){return Nr(r)?r:r.contextElement}function Ls(r){const e=zu(r);if(!ti(e))return ei(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=Fu(e);let a=(n?ja(t.width):t.width)/i,o=(n?ja(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const r0=ei(0);function ju(r){const e=Sr(r);return!Xl()||!e.visualViewport?r0:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function i0(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==Sr(r)?!1:e}function wn(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=zu(r);let a=ei(1);e&&(i?Nr(i)&&(a=Ls(i)):a=Ls(r));const o=i0(n,t,i)?ju(n):ei(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,d=s.width/a.x,u=s.height/a.y;if(n){const p=Sr(n),S=i&&Nr(i)?Sr(i):i;let y=p,D=Cl(y);for(;D&&i&&S!==y;){const L=Ls(D),X=D.getBoundingClientRect(),O=Wr(D),j=X.left+(D.clientLeft+parseFloat(O.paddingLeft))*L.x,K=X.top+(D.clientTop+parseFloat(O.paddingTop))*L.y;l*=L.x,h*=L.y,d*=L.x,u*=L.y,l+=j,h+=K,y=Sr(D),D=Cl(y)}}return Ms({width:d,height:u,x:l,y:h})}function Kl(r,e){const t=go(r).scrollLeft;return e?e.left+t:wn($i(r)).left+t}function Nu(r,e,t){t===void 0&&(t=!1);const i=r.getBoundingClientRect(),s=i.left+e.scrollLeft-(t?0:Kl(r,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function s0(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=$i(i),o=e?fo(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=ei(1);const d=ei(0),u=ti(i);if((u||!u&&!n)&&((Vs(i)!=="body"||Wn(a))&&(l=go(i)),ti(i))){const S=wn(i);h=Ls(i),d.x=S.x+i.clientLeft,d.y=S.y+i.clientTop}const p=a&&!u&&!n?Nu(a,l,!0):ei(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+d.x+p.x,y:t.y*h.y-l.scrollTop*h.y+d.y+p.y}}function n0(r){return Array.from(r.getClientRects())}function a0(r){const e=$i(r),t=go(r),i=r.ownerDocument.body,s=mi(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=mi(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+Kl(r);const o=-t.scrollTop;return Wr(i).direction==="rtl"&&(a+=mi(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function o0(r,e){const t=Sr(r),i=$i(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=Xl();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function l0(r,e){const t=wn(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=ti(r)?Ls(r):ei(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function sd(r,e,t){let i;if(e==="viewport")i=o0(r,t);else if(e==="document")i=a0($i(r));else if(Nr(e))i=l0(e,t);else{const s=ju(r);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Ms(i)}function Wu(r,e){const t=zi(r);return t===e||!Nr(t)||Rs(t)?!1:Wr(t).position==="fixed"||Wu(t,e)}function h0(r,e){const t=e.get(r);if(t)return t;let i=kl(r,[],!1).filter(o=>Nr(o)&&Vs(o)!=="body"),s=null;const n=Wr(r).position==="fixed";let a=n?zi(r):r;for(;Nr(a)&&!Rs(a);){const o=Wr(a),l=Yl(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Wn(a)&&!l&&Wu(r,a))?i=i.filter(d=>d!==a):s=o,a=zi(a)}return e.set(r,i),i}function c0(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?fo(e)?[]:h0(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,d)=>{const u=sd(e,d,s);return h.top=mi(u.top,h.top),h.right=Ts(u.right,h.right),h.bottom=Ts(u.bottom,h.bottom),h.left=mi(u.left,h.left),h},sd(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function d0(r){const{width:e,height:t}=Fu(r);return{width:e,height:t}}function u0(r,e,t){const i=ti(e),s=$i(e),n=t==="fixed",a=wn(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=ei(0);if(i||!i&&!n)if((Vs(e)!=="body"||Wn(s))&&(o=go(e)),i){const p=wn(e,!0,n,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else s&&(l.x=Kl(s));const h=s&&!i&&!n?Nu(s,o):ei(0),d=a.left+o.scrollLeft-l.x-h.x,u=a.top+o.scrollTop-l.y-h.y;return{x:d,y:u,width:a.width,height:a.height}}function dl(r){return Wr(r).position==="static"}function nd(r,e){if(!ti(r)||Wr(r).position==="fixed")return null;if(e)return e(r);let t=r.offsetParent;return $i(r)===t&&(t=t.ownerDocument.body),t}function Bu(r,e){const t=Sr(r);if(fo(r))return t;if(!ti(r)){let s=zi(r);for(;s&&!Rs(s);){if(Nr(s)&&!dl(s))return s;s=zi(s)}return t}let i=nd(r,e);for(;i&&e0(i)&&dl(i);)i=nd(i,e);return i&&Rs(i)&&dl(i)&&!Yl(i)?t:i||t0(r)||t}const p0=async function(r){const e=this.getOffsetParent||Bu,t=this.getDimensions,i=await t(r.floating);return{reference:u0(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function f0(r){return Wr(r).direction==="rtl"}const g0={convertOffsetParentRelativeRectToViewportRelativeRect:s0,getDocumentElement:$i,getClippingRect:c0,getOffsetParent:Bu,getElementRects:p0,getClientRects:n0,getDimensions:d0,getScale:Ls,isElement:Nr,isRTL:f0},m0=Jv,y0=Qv,v0=Yv,b0=Kv,w0=(r,e,t)=>{const i=new Map,s={platform:g0,...t},n={...s.platform,_c:i};return qv(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=Rn(class extends ro{constructor(r){var e;if(super(r),r.type!==fi.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Ii}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=r=>r??V;var x0=Object.defineProperty,S0=Object.getOwnPropertyDescriptor,Bn=(r,e,t,i)=>{for(var s=i>1?void 0:i?S0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&x0(e,t,s),s};let wi=class extends ot{constructor(){super(...arguments),this.dropdownRef=Ve(),this.invokerRef=Ve(),this.optionsRef=Ve(),this.open="close",this.interactive="on"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){w0(this.invokerRef.value,this.optionsRef.value,{middleware:[m0(2),v0(),b0(),y0()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return f`

            <div class="dropdown" ${Ke(this.dropdownRef)}>

                <thermal-button 
                    class="${yi(r)}" 
                    ${Ke(this.invokerRef)} 
                    @click=${this.toggle.bind(this)} 
                    variant="${at(this.variant)}" 
                    interactive="${this.interactive==="on"?"true":"false"}"
                    part="invoker"
                >
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?f`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:f`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Ke(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};wi.shadowRootOptions={...gr.shadowRootOptions,mode:"open"};wi.styles=Pe`

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


    
    `;Bn([Si({slot:"option"})],wi.prototype,"_options",2);Bn([m({type:String,reflect:!0})],wi.prototype,"open",2);Bn([m({type:String,reflect:!0,attribute:!0}),P()],wi.prototype,"interactive",2);Bn([P(),m({type:String,reflect:!0,attribute:!0})],wi.prototype,"variant",2);wi=Bn([pe("thermal-dropdown")],wi);var $0=Object.defineProperty,k0=Object.getOwnPropertyDescriptor,mo=(r,e,t,i)=>{for(var s=i>1?void 0:i?k0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$0(e,t,s),s};let Is=class extends gr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Ve(),this.contentRef=Ve(),this.rulerContentRef=Ve()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}disconnectedCallback(){super.disconnectedCallback(),this.drawerRef.value&&this.observer.unobserve(this.drawerRef.value),this.observer.disconnect()}render(){return f`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ke(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ke(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ke(this.contentRef)}>

                    ${this.collapsed===!1?f`
                        <slot></slot>    
                    `:V}
                
                </div>

            </div>

            ${this.collapsed?f`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:V}
        
        `}};Is.styles=Pe`

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

    `;mo([P()],Is.prototype,"collapsed",2);mo([P()],Is.prototype,"lastContentWidth",2);mo([P()],Is.prototype,"drawerRef",2);Is=mo([pe("thermal-bar")],Is);const ft=r=>({fromAttribute:i=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:i=>i===!0?"true":"false"});var C0=Object.defineProperty,_0=Object.getOwnPropertyDescriptor,br=(r,e,t,i)=>{for(var s=i>1?void 0:i?_0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&C0(e,t,s),s};const P0="chrome"in window;let ir=class extends ot{constructor(){super(...arguments),this.language=St.language,this.fullscreen="off",this.showfullscreen=!1,this.dark=!1,this.chromiumwarning=!1,this.appRef=Ve(),this.headerRef=Ve(),this.contentRef=Ve()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),St.on("languageChanged",()=>{this.language=St.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const s=t.contentRect.height;t.contentRect.width;const n=s-175;this.contentRef.value.offsetHeight<n?console.log("priorita šířky"):console.log("priorita výšky")}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){const r=P0===!0&&this.chromiumwarning===!0;return f`

    <div class="container ${this.dark?"dark":"normal"}" ${Ke(this.appRef)}>

        <header ${Ke(this.headerRef)} class="app-header">
            
            <div class="bar ${this.barElements.length>0?"has-bar":"no-bar"}">

                <slot name="label">
                    ${this.label?f`<thermal-button variant="foreground" interactive="${this.onlabel!==void 0}" @click=${at(this.onlabel)}>${this.label}</thermal-button>`:V}
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

                
                ${this.showfullscreen===!0?f`
                    <thermal-button class="app-fullscreen-button" @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?f`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0L5.5 4.44V2.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L2.22 3.28a.75.75 0 0 1 0-1.06Zm10.5 0a.75.75 0 1 1 1.06 1.06L11.56 5.5h1.69a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 9 6.25v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22ZM2.75 9h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.22-2.22H2.75a.75.75 0 0 1 0-1.5ZM9 9.75A.75.75 0 0 1 9.75 9h3.5a.75.75 0 0 1 0 1.5h-1.69l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.69a.75.75 0 0 1-1.5 0v-3.5Z" clip-rule="evenodd" />
                            </svg>`:f`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd" />
                            </svg>`}
                        </div>
                    </thermal-button>
                `:V}

                <thermal-dropdown>

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(e=>f`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{St.changeLanguage(e),this.language=e}}
                            >${Zc[e].flag} ${Zc[e].name}</thermal-button>
                        </div>
                    `)}
                </thermal-dropdown>
                
            </div>

        ${this.preElements.length>=0?f`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Ke(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?f`<div class="credits">

                    ${this.recorded?f`<div>
                            <div class="credits-field">${M(T.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:V}

                    ${this.author?f`<div>
                            <div class="credits-field">${M(T.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:V}

                    ${this.license?f`<div>
                            <div class="credits-field">${M(T.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:V}

                </div>`:V}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

            ${r===!0?f`<footer class="chromium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>

                    <span>Chromium-based browsers provide a slightly worse performance during the playback. Consider using <a href="https://mozilla.org/firefox" target="_blank">Firefox</a>.</span>
                </footer>`:V}

    </div>
        
        `}};ir.styles=Pe`

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
    
    `;br([P()],ir.prototype,"language",2);br([Si({slot:"bar",flatten:!0})],ir.prototype,"barElements",2);br([Si({slot:"pre",flatten:!0})],ir.prototype,"preElements",2);br([Si({slot:"content",flatten:!0})],ir.prototype,"contentElements",2);br([m({type:String,reflect:!0})],ir.prototype,"fullscreen",2);br([m({type:String,reflect:!0,attribute:!0,converter:ft(!1)})],ir.prototype,"showfullscreen",2);br([m({type:String,reflect:!0,attribute:!0})],ir.prototype,"dark",2);br([m()],ir.prototype,"author",2);br([m()],ir.prototype,"recorded",2);br([m()],ir.prototype,"license",2);br([m()],ir.prototype,"label",2);br([m({type:Object})],ir.prototype,"onlabel",2);br([m({converter:ft(!1)})],ir.prototype,"chromiumwarning",2);ir=br([pe("thermal-app")],ir);var E0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,Zl=(r,e,t,i)=>{for(var s=i>1?void 0:i?A0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&E0(e,t,s),s};let xn=class extends gr{render(){return f`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&f`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};xn.styles=Pe`
    
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

    `;Zl([m({type:String})],xn.prototype,"label",2);Zl([m({type:String})],xn.prototype,"hint",2);xn=Zl([pe("thermal-field")],xn);var L0=Object.defineProperty,O0=Object.getOwnPropertyDescriptor,Gs=(r,e,t,i)=>{for(var s=i>1?void 0:i?O0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&L0(e,t,s),s};let ji=class extends ot{constructor(){super(...arguments),this.loaded=!1,this.bordercolor="var(--thermal-slate)",this.bgcolor="var(--thermal-slate-light)",this.textcolor="var(--thermal-slate-dark)"}updated(r){super.updated(r),this.style.borderColor=this.bordercolor,this.style.backgroundColor=this.bgcolor,this.style.color=this.textcolor}render(){return f`
            <div class="lds-facebook" style="color: ${this.textcolor}">
                <div></div>
                <div></div>
                <div></div>
            </div>
            ${this.message?f`<div>${this.message}</div>`:V}
        `}};ji.styles=Pe`
    
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
    
    `;Gs([P()],ji.prototype,"loaded",2);Gs([m({type:String})],ji.prototype,"message",2);Gs([m({type:String})],ji.prototype,"bordercolor",2);Gs([m({type:String})],ji.prototype,"bgcolor",2);Gs([m({type:String})],ji.prototype,"textcolor",2);ji=Gs([pe("thermal-loading")],ji);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wa extends ro{constructor(e){if(super(e),this.it=V,e.type!==fi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===V||e==null)return this._t=void 0,this.it=e;if(e===Ii)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Wa.directiveName="unsafeHTML",Wa.resultType=1;const nr=Rn(Wa);var D0=Object.defineProperty,T0=Object.getOwnPropertyDescriptor,ms=(r,e,t,i)=>{for(var s=i>1?void 0:i?T0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&D0(e,t,s),s};const Jl={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let xi=class extends ot{constructor(){super(...arguments),this.tRef=Ve(),this.vRef=Ve(),this.vunitsRef=Ve(),this.haRef=Ve(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),Bs(this),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){const t=this[e],i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?nr(i):i;return f`
            <div class="field">

                <div class="column column__label">
                    <label for=${e}>
                        ${t}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${Ke(r)} 
                            id=${e}
                            name=${e}
                            value=${at(s)}
                            min=${at(n)}
                            max=${at(a)}
                            step=${at(o)}
                            type="number"
                            @blur=${d=>{const u=d.target,p=u.value.trim();p===""||p===void 0||p===null?this[e]=void 0:this[e]=parseFloat(u.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?f`<label for=${e}>${l}</label>`:V}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),app:r.toFixed(2),t:e},s=M(T.apparenttemperatureverbose,i),n=t<0?M(T.youfeelcolder,i):M(T.youfeelwarmer,i),a=r.toFixed(2);return f`<div class="result">

            <p class="result_label">${M(T.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${n}</p>
        
        </div>`}render(){return f`
            <thermal-app label=${M(T.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

                <thermal-dialog label=${M(T.info)} slot="bar-pre">
                    <thermal-button slot="invoker">${M(T.info)}</thermal-button>
                    <div slot="content">
                        ${nr(M(T.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?f`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:V}


                <section class="table">

                ${this.renderNumberField(this.tRef,"t",M(T.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",M(T.windspeed),f`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${Ke(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",M(T.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):V}
                </div>
                

            </thermal-app>
        `}};xi.styles=Pe`

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


    `;ms([m({type:String,reflect:!0,attribute:!0,converter:Jl})],xi.prototype,"t",2);ms([m({type:String,reflect:!0,attribute:!0,converter:Jl})],xi.prototype,"v",2);ms([m({type:String,reflect:!0,attribute:!0,converter:Jl})],xi.prototype,"ha",2);ms([P()],xi.prototype,"ta",2);ms([m({type:String,reflect:!0,attribute:!0})],xi.prototype,"vunits",2);ms([ne({context:gs}),m({reflect:!0,converter:Hs})],xi.prototype,"locale",2);xi=ms([pe("apparent-temperature-aat")],xi);var M0=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,I0=(r,e,t,i)=>{for(var s=i>1?void 0:i?R0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&M0(e,t,s),s};let _l=class extends ot{render(){return f`
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
                        <p>version ${As}</p>
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

        `}};_l.styles=Pe`

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
    
    `;_l=I0([pe("app-info-button")],_l);var U0=Object.defineProperty,qt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&U0(e,t,s),s};const ki="pngExportWidthContext",qs="pngExportWidthSetterContext",Ci="png-export-width-context",Ys="png-export-width-setter-context",Hn="pngExportAnalysisContext",Hu="pngExportAnalysisSetterContext",Vn="pngExportScaleContext",Vu="pngExportScaleSetterContext",Gn="pngExportFileNameContext",Gu="pngExportFileNameSetterContext",qn="pngExportFileDateContext",qu="pngExportFileDateSetterContext",Yu="pngExportLicenseContext",Xu="pngExportLicenseSetterContext",Ql="pngExportColumnsContext",Ku="pngExportColumnsSetterContext",eh="pngExportGroupNameContext",Zu="pngExportGroupNameSetterContext";class It extends ot{constructor(){super(...arguments),this.pngWidth=1200,this.pngWidthSetter=e=>{this.pngWidth=e},this.pngFs=20,this.pngFsSetter=e=>{this.pngFs=e},this.pngAnalyses=!0,this.pngExportAnalysesSetter=e=>this.pngAnalyses=e,this.pngExportScale=!0,this.pngExportScaleSetter=e=>this.pngExportScale=e,this.pngExportLicense=!0,this.pngExportLicenseSetter=e=>this.pngExportLicense=e,this.pngExportFileName=!1,this.pngExportFileNameSetter=e=>this.pngExportFileName=e,this.pngExportFileDate=!0,this.pngExportFileDateSetter=e=>this.pngExportFileDate=e,this.pngExportColumns=2,this.pngExportColumnsSetter=e=>this.pngExportColumns=e,this.pngExportGroupName=!0,this.pngExportGroupNameSetter=e=>this.pngExportGroupName=e}}qt([ne({context:ki})],It.prototype,"pngWidth");qt([ne({context:qs})],It.prototype,"pngWidthSetter");qt([ne({context:Ci})],It.prototype,"pngFs");qt([ne({context:Ys})],It.prototype,"pngFsSetter");qt([ne({context:Hn})],It.prototype,"pngAnalyses");qt([ne({context:Hu})],It.prototype,"pngExportAnalysesSetter");qt([ne({context:Vn})],It.prototype,"pngExportScale");qt([ne({context:Vu})],It.prototype,"pngExportScaleSetter");qt([ne({context:Yu})],It.prototype,"pngExportLicense");qt([ne({context:Xu})],It.prototype,"pngExportLicenseSetter");qt([ne({context:Gn})],It.prototype,"pngExportFileName");qt([ne({context:Gu})],It.prototype,"pngExportFileNameSetter");qt([ne({context:qn})],It.prototype,"pngExportFileDate");qt([ne({context:qu})],It.prototype,"pngExportFileDateSetter");qt([ne({context:Ql})],It.prototype,"pngExportColumns");qt([ne({context:Ku})],It.prototype,"pngExportColumnsSetter");qt([ne({context:eh})],It.prototype,"pngExportGroupName");qt([ne({context:Zu})],It.prototype,"pngExportGroupNameSetter");var F0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?z0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&F0(e,t,s),s};let Ot=class extends ot{renderRow(r,e,t){return f`<thermal-field label="${r}">
                <div>${e}</div>
                ${t||V}
            </thermal-field>`}renderGroup(r,e){return f`<fieldset>
            <legend>${r}</legend>
            ${e}
        </fieldset>`}formatTip(r){return r?f`<div class="hint">${r}</div>`:""}renderCheckbox(r,e,t,i){const s=f`<input name="${r}" type="checkbox" ?checked="${t}" @input=${n=>{const o=n.target.checked;i(o)}}>`;return f`<div>${s}<label for="${r}">${e}</label></div>`}renderSlider(r,e,t,i,s,n,a,o,l){const h=f`<input 
                name="${r}"
                value="${t}"
                min="${s}"
                max="${n}"
                step="${a}"
                type="range"
                @input="${p=>{const S=Math.min(n,Math.max(0,parseFloat(p.target.value)));o(S)}}"
            ></input>`,d=f`<strong>${t} ${i}</strong> (${s} - ${n} ${i})${l?"<br />"+l:""}`,u=this.formatTip(d);return this.renderRow(e,h,u)}updated(r){var t;if(super.updated(r),this.pngFs===void 0||this.pngWidth===void 0||this.pngWidthSetter===void 0||this.pngFsSetter===void 0)return;this.log(r);const e=["pngFs","pngWidth"];for(const i of e)if(r.has(i)){const s=this[i],n=(t=this.shadowRoot)==null?void 0:t.querySelector(`input[name="${i}"]`);if(n&&s){const a=n.value;parseInt(a)!==s&&(n.value=s.toString(),this.log(`Updated ${i} from ${a} to ${s}`))}}}render(){return this.pngFs===void 0||this.pngWidth===void 0||this.pngWidthSetter===void 0||this.pngFsSetter===void 0?V:f`

        ${this.renderGroup(M(T.exportcontent),f`
            ${this.renderCheckbox("pngExportAnalyses",M(T.analyses),this.pngAnalyses,this.pngExportAnalysesSetter.bind(this))}
            ${this.renderCheckbox("pngExportScale",M(T.thermalscale),this.pngExportScale,this.pngExportScaleSetter.bind(this))}
            ${this.renderCheckbox("pngExportFileName",M(T.exportfilenames),this.pngExportFileName,this.pngExportFileNameSetter.bind(this))}
            ${this.renderCheckbox("pngExportFileDate",M(T.filedate),this.pngExportFileDate,this.pngExportFileDateSetter.bind(this))}
        `)}

        ${this.renderGroup(M(T.exportdimensions),f`
            ${this.renderSlider("pngWidth",M(T.exportimagewidth),this.pngWidth,"px",500,2e3,50,this.pngWidthSetter.bind(this))}

            ${this.renderSlider("pngFs",M(T.exportimagefontsize),this.pngFs,"px",10,50,1,this.pngFsSetter.bind(this))}
        `)}

        ${this.renderGroup(M(T.exportgroup),f`
            ${this.renderCheckbox("pngExportGroupName",M(T.exportgroupname),this.pngExportGroupName,this.pngExportGroupNameSetter.bind(this))}
            ${this.renderSlider("pngColumns",M(T.exportfilenames),this.pngExportColumns,"sloupců",1,5,1,this.pngExportColumnsSetter.bind(this))}
        `)}

        

        

        

        

        

        

        
        
        `}};Ot.styles=Pe`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }

            fieldset {
                border: 1px solid var(--thermal-slate);
                border-radius: var(--thermal-radius);
                margin-bottom: var(--thermal-gap);

                legend {
                    border-radius: var(--thermal-radius);
                    border: 1px solid var(--thermal-slate);
                    padding: 0.3em 0.5em;
                }

            }
        
        `;jt([de({context:ki,subscribe:!0})],Ot.prototype,"pngWidth",2);jt([de({context:qs,subscribe:!0})],Ot.prototype,"pngWidthSetter",2);jt([de({context:Ci,subscribe:!0})],Ot.prototype,"pngFs",2);jt([de({context:Ys,subscribe:!0})],Ot.prototype,"pngFsSetter",2);jt([de({context:Hn,subscribe:!0})],Ot.prototype,"pngAnalyses",2);jt([de({context:Hu,subscribe:!0})],Ot.prototype,"pngExportAnalysesSetter",2);jt([de({context:Vn,subscribe:!0})],Ot.prototype,"pngExportScale",2);jt([de({context:Vu,subscribe:!0})],Ot.prototype,"pngExportScaleSetter",2);jt([de({context:Yu,subscribe:!0})],Ot.prototype,"pngExportLicense",2);jt([de({context:Xu,subscribe:!0})],Ot.prototype,"pngExportLicenseSetter",2);jt([de({context:Gn,subscribe:!0})],Ot.prototype,"pngExportFileName",2);jt([de({context:Gu,subscribe:!0})],Ot.prototype,"pngExportFileNameSetter",2);jt([de({context:qn,subscribe:!0})],Ot.prototype,"pngExportFileDate",2);jt([de({context:qu,subscribe:!0})],Ot.prototype,"pngExportFileDateSetter",2);jt([de({context:Ql,subscribe:!0})],Ot.prototype,"pngExportColumns",2);jt([de({context:Ku,subscribe:!0})],Ot.prototype,"pngExportColumnsSetter",2);jt([de({context:eh,subscribe:!0})],Ot.prototype,"pngExportGroupName",2);jt([de({context:Zu,subscribe:!0})],Ot.prototype,"pngExportGroupNameSetter",2);Ot=jt([pe("png-export-panel")],Ot);var j0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,W0=(r,e,t,i)=>{for(var s=i>1?void 0:i?N0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&j0(e,t,s),s};let Pl=class extends ot{render(){return f`
        <thermal-field label="${M(T.filerendering)}" hint="${M(T.filerenderinghint)}">
            <manager-smooth-switch></manager-smooth-switch>
        </thermal-field>
        <thermal-field label="${M(T.graphlines)}" hint="${M(T.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `}};Pl.styles=Pe`
    
        :host {
            display: contents;
        }
    
    `;Pl=W0([pe("registry-display-panel")],Pl);var B0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,yo=(r,e,t,i)=>{for(var s=i>1?void 0:i?H0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&B0(e,t,s),s};let Ni=class extends ot{render(){return V}};Ni.styles=Pe`
        :host {
            display: none;
        }
    `;yo([m({type:String})],Ni.prototype,"lrc",2);yo([m({type:String})],Ni.prototype,"png",2);yo([m({type:String})],Ni.prototype,"label",2);Ni=yo([pe("thermal-file")],Ni);var V0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,Ju=(r,e,t,i)=>{for(var s=i>1?void 0:i?G0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&V0(e,t,s),s};let Sn=class extends ot{render(){return f`<slot></slot>`}};Sn.styles=Pe`
        :host {
            display: none;
        }
    `;Ju([m()],Sn.prototype,"name",2);Sn=Ju([pe("thermal-group")],Sn);var q0=Object.defineProperty,Y0=Object.getOwnPropertyDescriptor,sr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Y0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&q0(e,t,s),s};let Vt=class extends ot{constructor(){super(...arguments),this.label="Gallery of IR images",this.palette="jet",this.state="main",this.registryRef=Ve(),this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r},this.columns=3}connectedCallback(){super.connectedCallback(),Bs(this),this.addEventListener("slotchange",()=>{this.processSlots()})}firstUpdated(r){var e;super.firstUpdated(r),this.processSlots(),this.resetRegistry(),this.registryRef.value&&((e=this.registryRef.value)==null||e.registry.palette.setPalette(this.palette),this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{this.registryRef.value&&this.registryRef.value.registry.range.applyMinmax()}),this.registryRef.value.registry.groups.addListener(this.UUID,()=>{this.registryRef.value&&this.registryRef.value.registry.range.applyMinmax()}))}processSlots(){setTimeout(()=>{this.structure=this.slottedElements.filter(r=>r instanceof Sn).map(r=>({label:r.getAttribute("label"),description:r.getAttribute("description"),lat:r.getAttribute("lat"),lon:r.getAttribute("lon"),files:Array.from(r.children).filter(e=>e instanceof Ni&&e.hasAttribute("lrc")).map(e=>({lrc:e.getAttribute("lrc"),png:e.getAttribute("png"),label:e.getAttribute("label")}))})).filter(r=>r.files.length>0)},1e3)}actionMainOpen(){this.state="main",this.resetRegistry(),setTimeout(()=>{this.group=void 0,this.file=void 0},0)}actionGroupOpen(r){this.resetRegistry(),setTimeout(()=>{this.group=r,this.columns=Math.min(4,r.files.length),r.files.length>1?this.state="group":(this.state="file",this.file=r.files[0])},0)}actionDetailOpen(r){if(this.group===void 0)throw new Error("Group not yet set");this.state="file",this.resetRegistry(),setTimeout(()=>{this.file=r},0)}actionDetailClose(){this.state="group",this.resetRegistry(),setTimeout(()=>{this.file=void 0},0)}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.forEveryInstance(r=>r.unmountFromDom()),this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var r;(r=this.registryRef.value)==null||r.registry.range.applyMinmax()}))}renderMain(){if(this.structure===void 0)return f`<thermal-loading label="Načítám data"></thermal-loading>`;const e=this.structure.map(t=>{const{files:i,...s}=t;return{...s,file:i[0],group:t}}).map((t,i)=>{const s=t.label??`group_preview_${i}`;return f`<group-provider slug="${s}" autoclear="true">
                <button class="group-thumbnail" @click="${()=>this.actionGroupOpen(t.group)}">
                    <div class="header">
                        <div class="info">
                            <div class="title">${t.label}</div>
                            <div class="count">${M(T.numfiles,{num:t.group.files.length})}</div>
                        </div>
                        <div class="button">
                            ${t.group.files.length>1?f`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>`:f`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>`}
                        </div>
                    </div>
                    <file-provider thermal="${t.file.lrc}" batch="true" autoclear="true">
                        <file-canvas></file-canvas>
                    </file-provider>
                </button>
            </group-provider>`});return f`
            <div class="main">
                ${e}
            </div>
        `}renderGroup(){return this.structure===void 0||this.group===void 0?f`<thermal-loading></thermal-loading`:this.renderBrowser(f`
            <group-provider slug="${this.group.label??`group_detail_${Math.random()}`}" autoclear="true">

                <group-chart slot="pre"></group-chart>

                <header>

                    <thermal-button variant="foreground" @click="${()=>this.actionMainOpen()}">x</thermal-button>

                    <thermal-dropdown>
                        <span slot="invoker">${this.group.label}</span>
                        ${this.structure.filter(r=>{var e;return r.label!==((e=this.group)==null?void 0:e.label)}).map(r=>f`<div slot="option">
                                <thermal-button @click="${()=>this.actionGroupOpen(r)}">${r.label}</thermal-button>
                            </div>`)}
                    </thermal-dropdown>

                    <group-download-dropdown></group-download-dropdown>

                    <div>
                        <input type="range" min="1" max="4" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>
                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${M(T.columns,{num:this.columns})}</div>
                    </div>
                    
                    <group-analysis-sync-button></group-analysis-sync-button>

                </header>

                ${this.group.description?f`<section class="group-description">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p>${this.group.description}</p>
                    </section>`:V}

                <section class="files columns_${this.columns}">
            
                    ${this.group.files.map(r=>f`<file-provider thermal="${r.lrc}" batch="true" autoclear="true">
                        <file-thumbnail .ondetail="${()=>this.actionDetailOpen(r)}"></file-thumbnail>
                    </file-provider>`)}
            
                </section>

            </group-provider>
        `)}renderFile(){return this.structure===void 0||this.group===void 0||this.file===void 0?f`<thermal-loading></thermal-loading`:this.renderBrowser(f`<group-provider slug="${this.file.lrc}" autoclear="true">

            <file-provider batch="true" autoclear="true" thermal="${this.file.lrc}">
                <file-detail label="${this.group.label}" .onback="${()=>{var r;((r=this.group)==null?void 0:r.files.length)===1?this.actionMainOpen():this.actionDetailClose()}}"></file-detail>
            </file-provider>

        </group-provider>`)}renderBrowser(r){return f`<div class="browser state_${this.state}">
            <section>
                <group-tool-bar></group-tool-bar>
            </section>
            <section>
                ${r}
            </section>
        </div>`}render(){return f`<manager-provider slug="${this.UUID}">
            <registry-provider slug="${this.UUID}" ${Ke(this.registryRef)} palette="${this.palette}">
                <thermal-app 
                    author="${at(this.author)}" 
                    license="${this.license}" 
                    showfullscreen="true"
                    label="${this.label}"
                    .onlabel="${()=>this.actionMainOpen()}"
                >

                    ${this.structure!==void 0?f`
                        <registry-histogram slot="pre" expandable="true"></registry-histogram>
                        <registry-range-slider slot="pre"></registry-range-slider>
                        <registry-ticks-bar slot="pre"></registry-ticks-bar>
                        `:V}
                    <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

                    <registry-range-full-button slot="bar-pre"></registry-range-full-button>
                    <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>

                    <thermal-dialog label="${M(T.config)}" slot="bar-post">
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

                    ${this.state==="main"?this.renderMain():V}
                    ${this.state==="group"?this.renderGroup():V}
                    ${this.state==="file"?this.renderFile():V}

                    <slot></slot>


                </thermal-app>
            </registry-provider>
        </manager-provider>`}};Vt.styles=Pe`
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
    `;sr([m({type:String,reflect:!0})],Vt.prototype,"author",2);sr([m({type:String,reflect:!0})],Vt.prototype,"label",2);sr([m({type:String,reflect:!0})],Vt.prototype,"license",2);sr([m({type:String,reflect:!0,attribute:!0})],Vt.prototype,"palette",2);sr([P(),Si({flatten:!0})],Vt.prototype,"slottedElements",2);sr([P()],Vt.prototype,"structure",2);sr([P()],Vt.prototype,"state",2);sr([P()],Vt.prototype,"group",2);sr([P()],Vt.prototype,"file",2);sr([ne({context:ki})],Vt.prototype,"pngExportWidth",2);sr([ne({context:qs})],Vt.prototype,"pngExportWidthSetterContext",2);sr([ne({context:Ci})],Vt.prototype,"pngExportFs",2);sr([ne({context:Ys})],Vt.prototype,"pngExportFsSetterContext",2);sr([ne({context:gs}),m({reflect:!0,converter:Hs})],Vt.prototype,"locale",2);sr([P()],Vt.prototype,"columns",2);Vt=sr([pe("thermal-gallery-app")],Vt);const th="manager-instance",Yn="manager-palette-context",rh="manager-smooth-context",vo="manager-graph-function-context",Xn="tool-context",Kn="tools-context",X0=new ql;window.Thermal={managers:new Map};window.Thermal.managers.set("default",X0);const Qu=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new ql(void 0,e);return window.Thermal.managers.set(r,t),t}},K0=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};var Z0=Object.defineProperty,ep=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Z0(e,t,s),s};class bo extends ot{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Qr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=Qu(this.slug,e);this.manager=i,this.tool=this.manager.tool.value,this.tools=this.manager.tool.tools}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&K0(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t}),this.manager.tool.addListener(this.UUIDManagerListeners,t=>{this.tool=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(Qr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:Qr[e]}}render(){return f`<slot></slot>`}}ep([ne({context:Xn})],bo.prototype,"tool");ep([ne({context:Kn})],bo.prototype,"tools");var J0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,_i=(r,e,t,i)=>{for(var s=i>1?void 0:i?Q0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&J0(e,t,s),s};let ri=class extends bo{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Qr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}};_i([ne({context:th})],ri.prototype,"manager",2);_i([m({type:String,reflect:!0,attribute:!0})],ri.prototype,"slug",2);_i([ne({context:Yn}),m({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:Qr[r]}),toAttribute:r=>r.key.toString()}})],ri.prototype,"palette",2);_i([ne({context:rh}),m({type:String,reflect:!0,attribute:!0})],ri.prototype,"smooth",2);_i([ne({context:vo}),m({type:String,reflect:!0,attribute:!0})],ri.prototype,"graphSmooth",2);_i([m({type:Boolean,reflect:!0})],ri.prototype,"autoclear",2);_i([ne({context:Xn})],ri.prototype,"tool",2);_i([ne({context:Kn})],ri.prototype,"tools",2);ri=_i([pe("manager-provider")],ri);var eb=Object.defineProperty,tb=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&eb(e,t,s),s};class ys extends ot{connectedCallback(){super.connectedCallback(),this.manager}}tb([de({context:th,subscribe:!0}),P()],ys.prototype,"manager");const ih="registry-instance",sh="registry-opacity",wo="registry-range-from",xo="registry-range-to",tp="registry-loading",nh="registry-min",ah="registry-max",rp="registry-highlight",Zn="registry-highlight-setter";var rb=Object.defineProperty,ip=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&rb(e,t,s),s};class So extends ys{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return f`<slot></slot>`}}ip([ne({context:rp})],So.prototype,"highlight");ip([ne({context:Zn})],So.prototype,"setHighlight");var ib=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,ai=(r,e,t,i)=>{for(var s=i>1?void 0:i?sb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ib(e,t,s),s};let Br=class extends So{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}};ai([m({type:String,reflect:!0,attribute:!0})],Br.prototype,"slug",2);ai([ne({context:ih})],Br.prototype,"registry",2);ai([ne({context:sh}),m({type:Number,reflect:!0,attribute:!0})],Br.prototype,"opacity",2);ai([ne({context:nh}),P()],Br.prototype,"min",2);ai([ne({context:ah}),P()],Br.prototype,"max",2);ai([ne({context:wo}),m({type:Number,reflect:!0,attribute:!0})],Br.prototype,"from",2);ai([ne({context:xo}),m({type:Number,reflect:!0,attribute:!0})],Br.prototype,"to",2);ai([ne({context:tp}),m({type:String,reflect:!0,attribute:!0})],Br.prototype,"loading",2);ai([m({type:Boolean,reflect:!0})],Br.prototype,"autoclear",2);Br=ai([pe("registry-provider")],Br);var nb=Object.defineProperty,ab=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&nb(e,t,s),s};class Rr extends ys{connectedCallback(){super.connectedCallback(),this.registry}}ab([de({context:ih,subscribe:!0})],Rr.prototype,"registry");class sp extends Rr{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug)}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return f`<slot></slot>`}}const oh="group-instance";var ob=Object.defineProperty,lb=Object.getOwnPropertyDescriptor,$o=(r,e,t,i)=>{for(var s=i>1?void 0:i?lb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ob(e,t,s),s};let $n=class extends sp{constructor(){super(...arguments),this.autoclear=!1}};$o([m({type:String,attribute:!0,reflect:!0})],$n.prototype,"slug",2);$o([ne({context:oh})],$n.prototype,"group",2);$o([m({type:Boolean,reflect:!0})],$n.prototype,"autoclear",2);$n=$o([pe("group-provider")],$n);var hb=Object.defineProperty,cb=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&hb(e,t,s),s};class oi extends Rr{constructor(){super()}connectedCallback(){super.connectedCallback()}}cb([de({context:oh,subscribe:!0})],oi.prototype,"group");const lh="file",np="failure",hh="file-loading",db="file-loaded",ch="file-provider-element",ap="file-ms-context",dh="file-cursor",op="file-cursor-setter",ko="playback",lp="duration",uh="playing",ph="playbackSpeed",fh="recording",hp="mayStop",ub="analysislist",pb="file-markers-context";var fb=Object.defineProperty,lr=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&fb(e,t,s),s};class Jt extends oi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.speed=1,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new be,this.onSuccess=new be,this.onFailure=new be,this.onInstanceCreated=new be}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!=null&&i.trim().length>0)if(e.slots.hasSlot(t)){const s=e.slots.getSlot(t);s==null||s.recieveSerialized(i),s==null||s.analysis.setSelected(!1,!0)}else{const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return f`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}lr([ne({context:lh}),P()],Jt.prototype,"file");lr([ne({context:np}),P()],Jt.prototype,"failure");lr([ne({context:hh}),P()],Jt.prototype,"loading");lr([ne({context:db})],Jt.prototype,"ready");lr([ne({context:lp}),P()],Jt.prototype,"duration");lr([ne({context:ko})],Jt.prototype,"currentFrame");lr([ne({context:dh})],Jt.prototype,"cursor");lr([ne({context:ap})],Jt.prototype,"ms");lr([ne({context:ph})],Jt.prototype,"speed");lr([ne({context:fh})],Jt.prototype,"recording");lr([ne({context:uh})],Jt.prototype,"playing");lr([ne({context:hp}),P()],Jt.prototype,"mayStop");lr([Si({slot:"mark",flatten:!0})],Jt.prototype,"marksQueriedInternally");lr([ne({context:pb})],Jt.prototype,"marksProvidedBelow");lr([ne({context:ub})],Jt.prototype,"analysis");var gb=Object.defineProperty,mb=Object.getOwnPropertyDescriptor,Qt=(r,e,t,i)=>{for(var s=i>1?void 0:i?mb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gb(e,t,s),s};let Gt=class extends Jt{constructor(){super(...arguments),this.keepinitialhistogram=!1,this.ms=0,this.speed=1,this.providedSelf=this,this.recording=!1,this.playing=!1}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Fi?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async redraw(){this.loading=!0,this.onLoadingStart.call(),this.file&&this.removeInstance(this.file),await this.load()}async asyncLoadCallback(r){r instanceof zn?(this.file!==void 0&&(this.file.unmountFromDom(),delete this.file),this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof hs&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};Qt([m({type:Boolean,reflect:!0,converter:ft(!1)})],Gt.prototype,"keepinitialhistogram",2);Qt([m({type:Number,reflect:!0,attribute:!0}),ne({context:ap})],Gt.prototype,"ms",2);Qt([m({type:Number,reflect:!0,attribute:!0}),ne({context:ph})],Gt.prototype,"speed",2);Qt([ne({context:ch})],Gt.prototype,"providedSelf",2);Qt([m({type:String,reflect:!0,attribute:!0}),ne({context:fh})],Gt.prototype,"recording",2);Qt([m({type:String,reflect:!0,attribute:!0}),ne({context:uh})],Gt.prototype,"playing",2);Qt([m({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Gt.prototype,"batch",2);Qt([m({type:String,attribute:!0,reflect:!0})],Gt.prototype,"thermal",2);Qt([m({type:String,attribute:!0,reflect:!0})],Gt.prototype,"visible",2);Qt([m({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis1",2);Qt([m({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis2",2);Qt([m({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis3",2);Qt([m({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis4",2);Qt([m({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis5",2);Qt([m({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis6",2);Qt([m({type:String,reflect:!0,attribute:!0})],Gt.prototype,"analysis7",2);Gt=Qt([pe("file-provider")],Gt);const ad="[a-fA-F\\d:]",Ti=r=>r&&r.includeBoundaries?`(?:(?<=\\s|^)(?=${ad})|(?<=${ad})(?=\\s|$))`:"",zr="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",Mt="[a-fA-F\\d]{1,4}",Co=`
(?:
(?:${Mt}:){7}(?:${Mt}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${Mt}:){6}(?:${zr}|:${Mt}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${Mt}:){5}(?::${zr}|(?::${Mt}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${Mt}:){4}(?:(?::${Mt}){0,1}:${zr}|(?::${Mt}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${Mt}:){3}(?:(?::${Mt}){0,2}:${zr}|(?::${Mt}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${Mt}:){2}(?:(?::${Mt}){0,3}:${zr}|(?::${Mt}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${Mt}:){1}(?:(?::${Mt}){0,4}:${zr}|(?::${Mt}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${Mt}){0,5}:${zr}|(?::${Mt}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),yb=new RegExp(`(?:^${zr}$)|(?:^${Co}$)`),vb=new RegExp(`^${zr}$`),bb=new RegExp(`^${Co}$`),gh=r=>r&&r.exact?yb:new RegExp(`(?:${Ti(r)}${zr}${Ti(r)})|(?:${Ti(r)}${Co}${Ti(r)})`,"g");gh.v4=r=>r&&r.exact?vb:new RegExp(`${Ti(r)}${zr}${Ti(r)}`,"g");gh.v6=r=>r&&r.exact?bb:new RegExp(`${Ti(r)}${Co}${Ti(r)}`,"g");function wb(r){const e=(...t)=>r(...t);return Object.defineProperty(e,"name",{value:`functionTimeout(${r.name||"<anonymous>"})`,configurable:!0}),e}const{toString:xb}=Object.prototype;function Sb(r){return xb.call(r)==="[object RegExp]"}const od={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function $b(r,e={}){if(!Sb(r))throw new TypeError("Expected a RegExp instance");const t=Object.keys(od).map(s=>(typeof e[s]=="boolean"?e[s]:r[s])?od[s]:"").join(""),i=new RegExp(e.source||r.source,t);return i.lastIndex=typeof e.lastIndex=="number"?e.lastIndex:r.lastIndex,i}function kb(r,e,{timeout:t}={}){try{return wb(()=>$b(r).test(e),{timeout:t})()}catch(i){throw i}}const Cb=15,_b={timeout:400};function Pb(r){return r.length>Cb?!1:kb(gh.v4({exact:!0}),r,_b)}class Eb extends Error{constructor(e){super("Could not get the public IP address",e),this.name="IpNotFoundError"}}class cp extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}const Ab={timeout:5e3},Lb={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},Ob=(r,e,t)=>{const i=new XMLHttpRequest;let s;const n=new Promise((a,o)=>{s=o,i.addEventListener("error",o,{once:!0}),i.addEventListener("timeout",o,{once:!0}),i.addEventListener("load",()=>{const l=i.responseText.trim();if(!l||!Pb(l)){o();return}a(l)},{once:!0}),i.open("GET",r),i.timeout=e.timeout,i.send()});return n.cancel=()=>{i.abort(),s(new cp)},n},Db=(r,e)=>{let t;const i=async function(){const s=[...Lb[r],...e.fallbackUrls??[]];let n;for(const a of s)try{return t=Ob(a,e,r),await t}catch(o){if(n=o,o instanceof cp)throw o}throw new Eb({cause:n})}();return i.cancel=()=>{t.cancel()},i};function dp(r){return Db("v4",{...Ab,...r})}var Tb=Object.defineProperty,Mb=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Tb(e,t,s),s};class mh extends oi{connectedCallback(){super.connectedCallback(),dp().then(e=>this.ip=e)}emitUpload(e,t){const i=window.navigator.userAgent,s=window.innerWidth,n=window.innerHeight,a=new Date().getTime(),o=new CustomEvent("uploaded",{bubbles:!0,cancelable:!1,detail:{ip:this.ip,userAgent:i,windowWidth:s,windowHeight:n,time:a,fileName:e,fileSize:t}});this.dispatchEvent(o)}}Mb([P()],mh.prototype,"ip");var Rb=Object.defineProperty,Ib=Object.getOwnPropertyDescriptor,_o=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ib(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rb(e,t,s),s};let Us=class extends mh{constructor(){super(...arguments),this.container=Ve(),this.hover=!1,this.uploading=!1}firstUpdated(e){if(super.firstUpdated(e),this.container.value!==void 0){const t=this.manager.service.handleDropzone(this.container.value,!1);t.onMouseEnter.add(this.UUID,()=>{console.log("mouseenter"),this.hover=!0}),t.onMouseLeave.add(this.UUID,()=>{console.log("mouseleave"),this.hover=!1}),t.onDrop.set(this.UUID,()=>{this.uploading=!0}),t.onProcessingEnd.add(this.UUID,async i=>{await Promise.all(i.map(async s=>{if(s instanceof Fi){const n=await s.createInstance(this.group);this.emitUpload(n.fileName,n.bytesize)}})),this.uploading=!1})}}render(){const e={dropin:!0,hover:this.hover,uploading:this.uploading};return f`

            <div class="container">
            
                <div ${Ke(this.container)} class="${yi(e)}">

                    <div class="dropin-gradient"></div>

                    <div class="dropin-content">
                        <div>${M(T.dragorselectfile)}</div>
                        <thermal-button variant="foreground">${M(T.selectfile)}</thermal-button>
                    </div>

                    <div class="dropin-uploading">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                
                </div>

            </div>
        
        `}};Us.styles=Pe`

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

    `;_o([P()],Us.prototype,"container",2);_o([P()],Us.prototype,"hover",2);_o([P()],Us.prototype,"uploading",2);Us=_o([pe("group-dropin")],Us);var Ub=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,Po=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ub(e,t,s),s};let Fs=class extends mh{constructor(){super(...arguments),this.container=Ve(),this.hover=!1,this.uploading=!1}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.listener=this.manager.service.handleDropzone(this.container.value,!1),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1}),this.listener.onDrop.set(this.UUID,()=>{this.uploading=!0}),this.listener.onProcessingEnd.add(this.UUID,async e=>{this.group.files.removeAllInstances(),await Promise.all(e.map(async t=>{if(t instanceof Fi){const i=await t.createInstance(this.group);this.emitUpload(i.fileName,i.bytesize)}})),this.uploading=!1}))}render(){const r=this.uploading===!1?M(T.uploadafile):f`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`;return f`


            <thermal-button @click="${()=>{this.listener&&this.listener.openFileDialog(!1)}}"><slot>${r}</slot></thermal-button>

            <div class="container">
            
                <div ${Ke(this.container)}></div>

            </div>
        
        `}};Fs.styles=Pe`

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


    
    `;Po([P()],Fs.prototype,"container",2);Po([P()],Fs.prototype,"hover",2);Po([P()],Fs.prototype,"uploading",2);Fs=Po([pe("group-dropin-input")],Fs);var zb=Object.defineProperty,jb=Object.getOwnPropertyDescriptor,Pi=(r,e,t,i)=>{for(var s=i>1?void 0:i?jb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zb(e,t,s),s};let ii=class extends bo{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Qr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}};Pi([ne({context:th})],ii.prototype,"manager",2);Pi([m({type:String})],ii.prototype,"slug",2);Pi([ne({context:Yn}),m({type:String,converter:{fromAttribute:r=>({key:r,data:Qr[r]}),toAttribute:r=>r.key.toString()}})],ii.prototype,"palette",2);Pi([ne({context:rh}),m({type:String})],ii.prototype,"smooth",2);Pi([ne({context:vo}),m({type:String})],ii.prototype,"graphSmooth",2);Pi([m({type:Boolean})],ii.prototype,"autoclear",2);Pi([ne({context:Xn})],ii.prototype,"tool",2);Pi([ne({context:Kn})],ii.prototype,"tools",2);ii=Pi([pe("manager-mirror")],ii);var Nb=Object.defineProperty,Wb=Object.getOwnPropertyDescriptor,li=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nb(e,t,s),s};let Hr=class extends So{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}};li([m({type:String,reflect:!0,attribute:!0})],Hr.prototype,"slug",2);li([ne({context:ih})],Hr.prototype,"registry",2);li([ne({context:sh}),m({type:Number,reflect:!0,attribute:!0})],Hr.prototype,"opacity",2);li([ne({context:nh}),P()],Hr.prototype,"min",2);li([ne({context:ah}),P()],Hr.prototype,"max",2);li([ne({context:wo}),m({type:Number})],Hr.prototype,"from",2);li([ne({context:xo}),m({type:Number})],Hr.prototype,"to",2);li([ne({context:tp}),m({type:String})],Hr.prototype,"loading",2);li([m({type:Boolean})],Hr.prototype,"autoclear",2);Hr=li([pe("registry-mirror")],Hr);var Bb=Object.defineProperty,Hb=Object.getOwnPropertyDescriptor,Eo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bb(e,t,s),s};let kn=class extends sp{constructor(){super(...arguments),this.autoclear=!1}};Eo([m({type:String})],kn.prototype,"slug",2);Eo([ne({context:oh})],kn.prototype,"group",2);Eo([m({type:Boolean})],kn.prototype,"autoclear",2);kn=Eo([pe("group-mirror")],kn);var Vb=Object.defineProperty,Gb=Object.getOwnPropertyDescriptor,_r=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vb(e,t,s),s};let mr=class extends Jt{constructor(){super(...arguments),this.providedSelf=this}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};_r([ne({context:ch})],mr.prototype,"providedSelf",2);_r([ne({context:lh}),m()],mr.prototype,"file",2);_r([m({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],mr.prototype,"batch",2);_r([m({type:String})],mr.prototype,"thermal",2);_r([m({type:String})],mr.prototype,"visible",2);_r([m({type:String})],mr.prototype,"analysis1",2);_r([m({type:String})],mr.prototype,"analysis2",2);_r([m({type:String})],mr.prototype,"analysis3",2);_r([m({type:String})],mr.prototype,"analysis4",2);_r([m({type:String})],mr.prototype,"analysis5",2);_r([m({type:String})],mr.prototype,"analysis6",2);_r([m({type:String})],mr.prototype,"analysis7",2);mr=_r([pe("file-mirror")],mr);var qb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,up=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qb(e,t,s),s};let Ba=class extends Rr{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return f`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return f`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Qr).map(([r,e])=>f`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};Ba.styles=Pe`

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

    `;up([de({context:Yn,subscribe:!0})],Ba.prototype,"value",2);Ba=up([pe("registry-palette-dropdown")],Ba);var Xb=Object.defineProperty,Kb=Object.getOwnPropertyDescriptor,pp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xb(e,t,s),s};let Ha=class extends Rr{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return f`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${M(T.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return f`
            <div class="container">
                ${Object.entries(Qr).map(([r,e])=>f`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

        `}};Ha.styles=Pe`

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

    `;pp([de({context:Yn,subscribe:!0}),P()],Ha.prototype,"value",2);Ha=pp([pe("registry-palette-buttons")],Ha);var Zb=Object.defineProperty,Jb=Object.getOwnPropertyDescriptor,fp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zb(e,t,s),s};let Va=class extends ys{render(){return f`

            <div>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.smooth.setSmooth(!1)}
                >${M(T.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.smooth.setSmooth(!0)}
                >${M(T.smooth)}</thermal-button>

            </div>

        `}};Va.styles=Pe`
    
        :host {}

    `;fp([de({context:rh,subscribe:!0})],Va.prototype,"smooth",2);Va=fp([pe("manager-smooth-switch")],Va);var Qb=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,gp=(r,e,t,i)=>{for(var s=i>1?void 0:i?e1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qb(e,t,s),s};let Ga=class extends ys{render(){return f`

            <div>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${M(T.straightlines)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${M(T.smoothlines)}</thermal-button>

            </div>
        `}};Ga.styles=Pe`
    
        :host {}

    `;gp([de({context:vo,subscribe:!0})],Ga.prototype,"smooth",2);Ga=gp([pe("manager-graph-smooth-switch")],Ga);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class El extends Wa{}El.directiveName="unsafeSVG",El.resultType=2;const yh=Rn(El);var t1=Object.defineProperty,r1=Object.getOwnPropertyDescriptor,Xs=(r,e,t,i)=>{for(var s=i>1?void 0:i?r1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&t1(e,t,s),s};let Wi=class extends ys{constructor(){super(...arguments),this.showhint=!0,this.showpopup=!1}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.manager.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.manager.tool.selectTool(e)}render(){return this.manager===void 0?V:f`
                <div class="switchers">
                    ${Object.entries(this.manager.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:this.value!==void 0?t.key===this.value.key:!1};return f`
                        
                        <button 
                            class=${yi(i)} 
                            @click=${()=>{this.manager.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${yh(t.icon)}

                            ${this.showpopup===!0?f`<div>${M(T[t.name])}</div>`:V}

                        </button>
                        
                    `})}
                </div>

                ${this.showhint===!0?f` <div class="current">
                        <div class="tool-description">${M(T[this.hint])}</div>
                    </div>`:V}

        `}};Wi.styles=Pe`

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

    `;Xs([de({context:Xn,subscribe:!0}),P()],Wi.prototype,"value",2);Xs([de({context:Kn,subscribe:!0}),P()],Wi.prototype,"tools",2);Xs([P()],Wi.prototype,"hint",2);Xs([m({type:String,reflect:!0,converter:ft(!1)})],Wi.prototype,"showhint",2);Xs([m({reflect:!0,converter:ft(!1)})],Wi.prototype,"showpopup",2);Wi=Xs([pe("group-tool-buttons")],Wi);var i1=Object.defineProperty,s1=Object.getOwnPropertyDescriptor,vh=(r,e,t,i)=>{for(var s=i>1?void 0:i?s1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&i1(e,t,s),s};let Cn=class extends ys{connectedCallback(){super.connectedCallback()}onSelect(r){this.manager.tool.selectTool(r)}render(){return this.manager===void 0?V:f`

            <aside>
                    ${Object.entries(this.manager.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return f`
                        <div class="item">
                            <button 
                                class=${yi(t)} 
                                @click=${()=>{this.manager.tool.selectTool(e)}}
                            >
                                ${yh(e.icon)}
                            </button>
                            <div class="tooltip">${M(T[e.name])}</div>
                        </div>
                        

                    `})}

            </aside>

        `}};Cn.styles=Pe`

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

    `;vh([de({context:Xn,subscribe:!0}),P()],Cn.prototype,"value",2);vh([de({context:Kn,subscribe:!0}),P()],Cn.prototype,"tools",2);Cn=vh([pe("group-tool-bar")],Cn);var n1=Object.defineProperty,a1=Object.getOwnPropertyDescriptor,o1=(r,e,t,i)=>{for(var s=i>1?void 0:i?a1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&n1(e,t,s),s};let ld=class extends ot{render(){return f`<thermal-dialog label="Export configuration">
            <thermal-button slot="invoker">Export config</thermal-button>
            <div slot="content">
                <png-export-panel></png-export-panel>
            </div>
        </thermal-dialog>`}};ld=o1([pe("png-export-config")],ld);var l1=Object.defineProperty,h1=Object.getOwnPropertyDescriptor,mp=(r,e,t,i)=>{for(var s=i>1?void 0:i?h1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&l1(e,t,s),s};let qa=class extends Rr{constructor(){super(...arguments),this.containerRef=Ve()}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return f`
            <div ${Ke(this.containerRef)}>
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
        `}};qa.styles=Pe`

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
    
    `;mp([de({context:sh,subscribe:!0})],qa.prototype,"value",2);qa=mp([pe("registry-opacity-slider")],qa);var c1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,u1=(r,e,t,i)=>{for(var s=i>1?void 0:i?d1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&c1(e,t,s),s};let hd=class extends Rr{doAction(){this.registry.range.applyAuto()}render(){return f`
            <thermal-button @click=${this.doAction}>${M(T.automaticrange)}</thermal-button>
        `}};hd=u1([pe("registry-range-auto-button")],hd);var p1=Object.defineProperty,f1=Object.getOwnPropertyDescriptor,yp=(r,e,t,i)=>{for(var s=i>1?void 0:i?f1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&p1(e,t,s),s};let Al=class extends Rr{constructor(){super(...arguments),this.buttonRef=Ve()}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return f`
            <thermal-button 
                ${Ke(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${M(T.fullrange)}</thermal-button>
        `}};yp([de({context:Zn,subscribe:!0})],Al.prototype,"setter",2);Al=yp([pe("registry-range-full-button")],Al);var g1=Object.defineProperty,m1=Object.getOwnPropertyDescriptor,Jn=(r,e,t,i)=>{for(var s=i>1?void 0:i?m1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&g1(e,t,s),s};let Vr=class extends Rr{constructor(){super(...arguments),this.ticksRef=Ve(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=Ve()}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.ticksRef.value&&this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Vr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return f`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${Ke(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${Ke(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?f`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:V}

                    ${this.ticks.map(t=>f`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(Vr.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
        
        `}};Vr.TICK_WIDTH=40;Vr.TICK_FIXED=2;Vr.styles=Pe`

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


    `;Jn([de({context:rp,subscribe:!0})],Vr.prototype,"highlight",2);Jn([m({type:String,reflect:!0})],Vr.prototype,"placement",2);Jn([P()],Vr.prototype,"minmax",2);Jn([P()],Vr.prototype,"ticks",2);Vr=Jn([pe("registry-ticks-bar")],Vr);(()=>{var r=Object.defineProperty,e=Math.pow,t=(g,$,Q)=>$ in g?r(g,$,{enumerable:!0,configurable:!0,writable:!0,value:Q}):g[$]=Q,i=(g,$,Q)=>(t(g,typeof $!="symbol"?$+"":$,Q),Q),s=(g,$)=>` ${$&&$.length>0?$.map(Q=>`<link rel="stylesheet" href="${Q}" />`).join(""):""} <style> ${g} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",d="data",u="min",p="max",S="step",y="round",D="type",L="theme",X="rtl",O="btt",j="disabled",K="keyboard-disabled",G="mousewheel-disabled",ie="slider-width",v="slider-height",b="slider-radius",w="slider-bg",E="slider-bg-hover",N="slider-bg-fill",R="pointer-width",F="pointer-height",U="pointer-radius",J="pointer-bg",he="pointer-bg-hover",C="pointer-bg-focus",Z="pointer-shadow",ue="pointer-shadow-hover",ae="pointer-shadow-focus",$e="pointer-border",Te="pointer-border-hover",Re="pointer-border-focus",Ue="animate-onclick",q="css-links",ee="vertical",ve="horizontal",xe=(g,$,Q,Y,we)=>{let ze=$-g;return ze===0?Q:(Y-Q)*(we-g)/ze+Q},Ne=g=>!isNaN(parseFloat(g))&&isFinite(g),Fe=(g,$)=>Ne(g)?Number(g):$,hr=(g,$)=>$===0?0:Math.round(g/$)*$,wr=(g,$=1/0)=>{if($===1/0)return g;let Q=e(10,$);return Math.round(g*Q)/Q},Ge=g=>g==null?!1:typeof g=="boolean"?g:g.trim().toLowerCase()==="true",vt=(g,$)=>{g.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:$}}))},Yt=(g,$)=>{g.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:$}}))},tn=(g,$)=>{g.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:$}}))},rn=(g,$)=>{g.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:$}}))},sn=(g,$)=>{if(!$||$.length<=0)return;let Q=$.map(we=>Ne(we)?Fe(we,we):we),Y={values:Q||[]};Y.value=Q[0],Y.value0=Q[0],Y.value1=Q[0];for(let we=1;we<Q.length;we++)Y[`value${we+1}`]=Q[we];g.dispatchEvent(new CustomEvent("change",{detail:Y}))},A=(g,$,Q)=>{let Y=0,we,ze,Xe,Se,Ce=!1,Ze=(Be,gt,Nt,Ut,Pt,Et)=>{let cr=Y;Nt!==void 0&&Be>Nt&&(Be=Nt),gt!==void 0&&Be<gt&&(Be=gt),Y=Be;let dr=Y;return(Ut===ee&&Et||Ut===ve&&Pt)&&(dr=100-dr),Ut===ee?$.style.top=`${dr}%`:$.style.left=`${dr}%`,cr!==Y},rt=Be=>Be===$||$.contains(Be),Me=(Be,gt,Nt,Ut)=>{we=Be,ze=gt,Xe=Nt,Se=Ut},ct=Be=>{Ce=Be,$.classList.toggle("disabled",Ce),Ce?$.setAttribute("aria-disabled","true"):$.hasAttribute("aria-disabled")&&$.removeAttribute("aria-disabled")},Lr=(Be,gt)=>{gt==null?$.removeAttribute(Be):$.setAttribute(Be,gt)},er=Be=>$.getAttribute(Be),We=Be=>{if(!Ce){switch(Be.key){case"ArrowLeft":{Be.preventDefault(),typeof we=="function"&&we(Q);break}case"ArrowRight":{Be.preventDefault(),typeof ze=="function"&&ze(Q);break}case"ArrowUp":{Be.preventDefault(),typeof Xe=="function"&&Xe(Q);break}case"ArrowDown":{Be.preventDefault(),typeof Se=="function"&&Se(Q);break}}rn(g,Be)}},Je=()=>{Ce||vt(g,$)};return $.className=`pointer pointer-${Q}`,$.addEventListener("keydown",We),$.addEventListener("click",Je),{$pointer:$,get percent(){return Y},get disabled(){return Ce},set disabled(Be){ct(Be)},updatePosition:Ze,isClicked:rt,setCallbacks:Me,setAttr:Lr,getAttr:er,destroy:()=>{$.removeEventListener("keydown",We),$.removeEventListener("click",Je),$.remove()}}},H=g=>{if(g==null)return;if(Array.isArray(g))return g;if(g.trim()==="")return;let $=g.split(","),Q=[],Y=!0;for(let we=0;we<$.length;we++){let ze=$[we].trim();ze!==""&&(Q.push(ze),Ne(ze)||(Y=!1))}return Y?Q.map(we=>Number(we)):Q},W=(g,$)=>$?$.findIndex(Q=>Q===g||Q.toString().trim()===g.toString().trim()):-1,ge=g=>({updatePosition:($,Q,Y,we)=>{if(Q.length<=0)return;let ze=Q.length===1,Xe=Q[0],Se=Q[Q.length-1];$===ee?(g.style.removeProperty("width"),g.style.removeProperty("right"),g.style.removeProperty("left"),ze?g.style.height=`${Xe}%`:g.style.height=`${Math.abs(Xe-Se)}%`,we?(g.style.bottom="0%",ze?g.style.top="auto":g.style.top=`${Math.min(100-Se,100-Xe)}%`):(g.style.bottom="auto",ze?g.style.top="0%":g.style.top=`${Math.min(Xe,Se)}%`)):(g.style.removeProperty("height"),g.style.removeProperty("top"),g.style.removeProperty("bottom"),ze?g.style.width=`${Xe}%`:g.style.width=`${Math.abs(Xe-Se)}%`,Y?(g.style.right="0%",ze?g.style.left="auto":g.style.left=`${Math.min(100-Se,100-Xe)}%`):(g.style.right="auto",ze?g.style.left="0%":g.style.left=`${Math.min(Xe,Se)}%`))}}),le="--animate-onclick",Ee="--width",k="--height",Ie="--panel-bg-border-radius",_e="--panel-bg",Ye="--panel-bg-hover",et="--panel-bg-fill",B="--pointer-width",z="--pointer-height",_="--pointer-border-radius",te="--pointer-bg",ce="--pointer-bg-hover",Ae="--pointer-bg-focus",nt="--pointer-shadow",tt="--pointer-shadow-hover",_t="--pointer-shadow-focus",lt="--pointer-border",bt="--pointer-border-hover",Zi="--pointer-border-focus",se=(g,$,Q)=>{let Y=new Map;for(let we of g.attributes){let ze=we.nodeName.trim().toLowerCase();if(!$.test(ze))continue;let Xe=ze.replace(/\D/g,"").trim(),Se=Xe===""||Xe==="0"||Xe==="1"?0:Fe(Xe,0)-1,Ce=Q&&typeof Q=="function"?Q(we.value):we.value;Y.set(Se,Ce)}return Y},me=g=>{if(!g)return null;let $=g.getAttribute(q);if(!$)return null;let Q=$.split(";"),Y=[];for(let we of Q)we.trim()!==""&&Y.push(we.trim());return Y},I=[[Ee,ie,"sliderWidth",null],[k,v,"sliderHeight",null],[Ie,b,"sliderRadius",null],[_e,w,"sliderBg",null],[Ye,E,"sliderBgHover",null],[et,N,"sliderBgFill",null],[B,R,"pointer#Width",/^pointer([0-9]*)-width$/],[z,F,"pointer#Height",/^pointer([0-9]*)-height$/],[_,U,"pointer#Radius",/^pointer([0-9]*)-radius$/],[te,J,"pointer#Bg",/^pointer([0-9]*)-bg$/],[ce,he,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ae,C,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[nt,Z,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[tt,ue,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[_t,ae,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[lt,$e,"pointer#Border",/^pointer([0-9]*)-border$/],[bt,Te,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Zi,Re,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],re=(g,$,Q)=>{let Y=null,we=[],ze=new Map,Xe=(We,Je=$)=>{let Be=[...Je.classList];for(let gt of Be)gt.startsWith(We)&&$.classList.remove(gt)},Se=()=>{Xe("shape");let We=$.querySelectorAll(".pointer");for(let Je of We)Xe("shape",Je)},Ce=We=>{Y=We,Xe("theme-"),typeof We=="string"&&$.classList.add(`theme-${We}`)},Ze=()=>{if(Se(),!(we.length<=0)){$.classList.add("shape",`shape-${we[0]}`);for(let We=1;We<we.length;We++){let Je=we[We];if(!Je)continue;let Be=$.querySelector(`.pointer-${We}`);!Be||Be.classList.add("shape",`shape-${Je}`)}}},rt=(We,Je)=>{we[We]=Je,Ze()},Me=()=>{Se();let We=se(g,/^pointer([0-9]*)-shape$/);if(!(We.size<=0)){for(let Je of We){let Be=Je[0];we[Be]=Je[1]}Ze()}},ct=(We,Je)=>`${We}-${Je}`,Lr=(We,Je,Be)=>{let gt=Q[Be];if(!gt)return;let Nt=Be===0?$:gt.$pointer;if(Je==null){ze.has(ct(We,Be))&&ze.delete(ct(We,Be)),Nt.style.removeProperty(We);return}ze.set(ct(We,Be),Je),Nt.style.setProperty(We,Je)},er=(We,Je)=>ze.get(ct(We,Je));return(()=>{for(let We of I){let[Je,Be,gt,Nt]=We;if(Nt){let Pt=se(g,Nt);for(let Et of Pt){let cr=Et[0],dr=Et[1];Lr(Je,dr,cr)}}else{let Pt=g.getAttribute(Be);Lr(Je,Pt,0)}let Ut=[];if(gt.indexOf("#")===-1)Ut.push([gt,0]);else{Ut.push([gt.replace("#",""),0]),Ut.push([gt.replace("#","0"),0]),Ut.push([gt.replace("#","1"),0]);for(let Pt=1;Pt<Q.length;Pt++)Ut.push([gt.replace("#",(Pt+1).toString()),Pt])}for(let Pt of Ut)try{let Et=Pt[0],cr=Pt[1];Object.prototype.hasOwnProperty.call(g,Et)||Object.defineProperty(g,Et,{get(){return er(Je,cr)},set:dr=>{Lr(Je,dr,cr)}})}catch(Et){console.error(Et)}}Ce(g.getAttribute(L)),Me()})(),{setStyle:Lr,getStyle:er,get theme(){return Y},set theme(We){Ce(We)},get pointerShapes(){return we},setPointerShape:rt}},fe="animate-on-click",ke="range-dragging",Oe=(g,$,Q,Y)=>{let we=[],ze=rt=>{for(let Me of we)Me.update&&typeof Me.update=="function"&&Me.update(rt)},Xe=()=>{for(let rt of we)rt.destroy&&typeof rt.destroy=="function"&&rt.destroy()},Se=(rt,Me)=>{for(let ct of we)ct.onAttrChange&&typeof ct.onAttrChange=="function"&&ct.onAttrChange(rt,Me)},Ce=rt=>{if(rt.gettersAndSetters){for(let Me of rt.gettersAndSetters)if(!(!Me.name||!Me.attributes))try{Object.prototype.hasOwnProperty.call(g,Me.name)||Object.defineProperty(g,Me.name,Me.attributes)}catch(ct){console.error("defineSettersGetters error:",ct)}}},Ze=rt=>{var Me;if(!rt.css)return;let ct=(Me=g.shadowRoot)==null?void 0:Me.querySelector("style");!ct||(ct.innerHTML+=rt.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let rt of window.tcRangeSliderPlugins){let Me=rt();we.push(Me),Me.init&&typeof Me.init=="function"&&(Me.init(g,$,Q,Y),Ce(Me),Ze(Me))}},update:ze,onAttrChange:Se,destroy:Xe}},ye=10,qe=20,Le=(g,$)=>{let Q=new Map,Y=/^value([0-9]*)$/;for(let Se of g.attributes){let Ce=Se.nodeName.trim().toLowerCase();if(!Y.test(Ce))continue;let Ze=Ce.replace("value","").trim(),rt=Ze===""||Ze==="0"||Ze==="1"?0:Fe(Ze,0)-1,Me=Ne(Se.value)?Fe(Se.value,0):Se.value;Q.set(rt,Me)}let we=Math.max(...Array.from(Q.keys())),ze=[];ze.push([A(g,$,0),Q.get(0)]);let Xe=$;for(let Se=1;Se<=we;Se++){let Ce=$.cloneNode(!0);Xe.after(Ce),Xe=Ce,ze.push([A(g,Ce,Se),Q.get(Se)])}return ze},ut=(g,$,Q,Y,we,ze,Xe)=>{try{Object.defineProperty(g,Y,{configurable:!0,get(){if(!$)return;let Se=$.pointers[Q];if(!Se)return;let Ce=$.getTextValue(Se.percent);return Ne(Ce)?Fe(Ce,Ce):Ce},set:Se=>{$.pointers[Q]?$==null||$.setValue(Se,Q):$==null||$.addPointer(Se)}}),Object.defineProperty(g,we,{configurable:!0,get(){var Se,Ce;return(Ce=(Se=$==null?void 0:$.pointers[Q])==null?void 0:Se.getAttr("aria-label"))!=null?Ce:void 0},set:Se=>{!$||$.setAriaLabel(Q,Se)}}),Object.defineProperty(g,ze,{configurable:!0,get(){var Se,Ce;return(Ce=(Se=$==null?void 0:$.styles)==null?void 0:Se.pointerShapes[Q])!=null?Ce:null},set:Se=>{!$||!$.styles||$.styles.setPointerShape(Q,Se)}}),Object.defineProperty(g,Xe,{configurable:!0,get(){var Se;return(Se=$==null?void 0:$.pointers[Q].disabled)!=null?Se:!1},set:Se=>{if(!$)return;let Ce=$==null?void 0:$.pointers[Q];!Ce||(Ce.disabled=Se)}})}catch(Se){console.error(Se)}},Rp=(g,$)=>{let Q=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let Y=2;Y<ye;Y++)Q.push([`value${Y}`,`ariaLabel${Y}`,`pointer${Y}Shape`,`pointer${Y}Disabled`,Y-1]);for(let Y of Q)ut(g,$,Y[4],Y[0],Y[1],Y[2],Y[3])},Dh=(g,$,Q)=>{var Y;let we=(Y=Q.shadowRoot)==null?void 0:Y.querySelector(".container");if(we)for(let ze of g)$?we.prepend(ze.$pointer):we.append(ze.$pointer)},Ip=(g,$)=>{if(!(!$||g.length<=1)){for(let Q of g)Q.$pointer.style.zIndex=qe.toString();$.$pointer.style.zIndex=(qe*2).toString()}},Do=0,nn=100,ws=2,Th="0.3s",Up=(g,$,Q)=>{let Y=Q.map(x=>x[0]),we=null,ze=null,Xe=null,Se=null,Ce=Do,Ze=nn,rt,Me,ct=ve,Lr=ws,er=!1,We=!1,Je=!1,Be=0,gt=1/0,Nt=!1,Ut,Pt,Et=!1,cr=!1,dr=!1,Oi=Th,Mh=[],Rh=x=>{Et||(x.preventDefault&&x.preventDefault(),Ji(x),window.addEventListener("mousemove",Ji),window.addEventListener("mouseup",aa),Yt(g,x))},aa=x=>{Et||(Ut=void 0,Pt=void 0,window.removeEventListener("mousemove",Ji),window.removeEventListener("mouseup",aa),Oi&&$.classList.add(fe),tn(g,x))},jp=(x,oe)=>{if(Y.length<=0)return;if(Y.length===1)return Y[0].isClicked(x)&&Oi&&$.classList.remove(fe),Y[0];let De=Wp(x);if(Nt){let ht=oe,Fr=la(ht);Fr!==void 0&&(ht=hr(ht,Fr)),De?(Ut=ht,Pt=0,Oi&&$.classList.remove(fe)):Ut!==void 0&&(Pt=ht-Ut,Ut=ht)}if(!Np(x)&&!De){for(let ht of Y)if(!(!ht.isClicked(x)||ht.disabled))return Oi&&$.classList.remove(fe),ht;for(let ht of Y)if(we===ht)return ht}let dt=1/0,At=null;for(let ht of Y){if(ht.disabled)continue;let Fr=Math.abs(oe-ht.percent);Fr<dt&&(dt=Fr,At=ht)}return At},Ih=()=>Y.findIndex(x=>we===x&&!x.disabled),Ji=x=>{let oe;if(ct===ee){let{height:dt,top:At}=$.getBoundingClientRect(),ht=x.type.indexOf("mouse")!==-1?x.clientY:x.touches[0].clientY;oe=Math.min(Math.max(0,ht-At),dt)*100/dt}else{let{width:dt,left:At}=$.getBoundingClientRect(),ht=x.type.indexOf("mouse")!==-1?x.clientX:x.touches[0].clientX;oe=Math.min(Math.max(0,ht-At),dt)*100/dt}if((er||We)&&(oe=100-oe),we=jp(x.target,oe),we&&Ip(Y,we),Nt&&Y.length>1&&Pt!==void 0){let dt=Y[0],At=Y[Y.length-1],ht=dt.percent+Pt<0,Fr=At.percent+Pt>100;if(ht||Fr)return;for(let ma=0;ma<Y.length;ma++)ur(ma,Y[ma].percent+Pt);return}let De=Ih();De!==-1&&(ur(De,oe),we==null||we.$pointer.focus())},oa=x=>{if(Et||document.activeElement!==g||we!=null&&we.disabled)return;x.stopPropagation(),x.preventDefault();let oe=x.deltaY<0,De=er||We,dt=oe?!De:De,At=Ih();At!==-1&&(dt?an(At,Y[At].percent):on(At,Y[At].percent))},Uh=x=>{Et||cr||(ct===ee?We?ur(x,100):ur(x,0):er?on(x,Y[x].percent):an(x,Y[x].percent))},Fh=x=>{Et||cr||(ct===ee?We?ur(x,0):ur(x,100):er?an(x,Y[x].percent):on(x,Y[x].percent))},zh=x=>{Et||cr||(ct===ee?We?on(x,Y[x].percent):an(x,Y[x].percent):er?ur(x,100):ur(x,0))},jh=x=>{Et||cr||(ct===ee?We?an(x,Y[x].percent):on(x,Y[x].percent):er?ur(x,0):ur(x,100))},Np=x=>x.classList.contains("panel"),Wp=x=>x.classList.contains("panel-fill"),an=(x,oe)=>{if(oe===void 0)return;let De=la(oe);De==null&&(De=1),oe-=De,oe<0&&(oe=0),ur(x,oe)},on=(x,oe)=>{if(oe===void 0)return;let De=la(oe);De==null&&(De=1),oe+=De,oe>100&&(oe=100),ur(x,oe)},Qi=()=>{!Se||Se.update({percents:Nh(),values:Wh(),$pointers:Bh(),min:Hh(),max:Vh(),data:Ro(),step:Mo(),round:Uo(),type:Io(),textMin:ha(),textMax:ca(),rightToLeft:jo(),bottomToTop:No(),pointersOverlap:Vo(),pointersMinDistance:Fo(),pointersMaxDistance:zo(),rangeDragging:Go(),disabled:Wo(),keyboardDisabled:Bo(),mousewheelDisabled:Ho()})},Bp=()=>{Qi()},Hp=x=>{if(!(Je||Y.length<=1||Ze===Ce))if(x===0){let oe=gt*100/(Ze-Ce);return Math.max(0,Y[x+1].percent-oe)}else{let oe=Be*100/(Ze-Ce);return Math.min(Y[x-1].percent+oe,100)}},Vp=x=>{if(!(Je||Y.length<=1||Ze===Ce))if(x===Y.length-1){let oe=gt*100/(Ze-Ce);return Math.min(Y[x-1].percent+oe,100)}else{let oe=Be*100/(Ze-Ce);return Math.max(0,Y[x+1].percent-oe)}},la=x=>{let oe;if(typeof rt=="function"){let De=xe(0,100,Ce,Ze,x);oe=rt(De,x)}else oe=rt;if(Ne(oe)){let De=Ze-Ce;return oe=De===0?0:oe*100/De,oe}},xs=x=>{if(x===void 0)return;let oe=xe(0,100,Ce,Ze,x);return Me!==void 0?Me[Math.round(oe)]:wr(oe,Lr)},ha=()=>Me!==void 0?Me[Ce]:Ce,ca=()=>Me!==void 0?Me[Ze]:Ze,Mo=()=>rt,Gp=x=>{var oe;return x<=0||Je?ha():(oe=xs(Y[x-1].percent))!=null?oe:""},qp=x=>{var oe;return Y.length<=1||x>=Y.length-1||Je?ca():(oe=xs(Y[x+1].percent))!=null?oe:""},Nh=()=>Y.map(x=>x.percent),Wh=()=>Y.map(x=>xs(x.percent)),Bh=()=>Y.map(x=>x.$pointer),Hh=()=>Ce,Vh=()=>Ze,Ro=()=>Me,Io=()=>ct,Uo=()=>Lr,Fo=()=>Be,zo=()=>gt,Yp=x=>Mh[x],jo=()=>er,No=()=>We,Wo=()=>Et,Bo=()=>cr,Ho=()=>dr,Vo=()=>Je,Go=()=>Nt,ur=(x,oe)=>{if(oe===void 0)return;let De=la(oe);De!==void 0&&(oe=hr(oe,De));let dt=Y[x];if(!dt)return;let At=dt.updatePosition(oe,Hp(x),Vp(x),ct,er,We);ze==null||ze.updatePosition(ct,Y.map(ht=>ht.percent),er,We),Qi();for(let ht of Y){let Fr=xs(ht.percent);Fr!==void 0&&(ht.setAttr("aria-valuenow",Fr.toString()),ht.setAttr("aria-valuetext",Fr.toString()))}Kp(),At&&sn(g,Y.map(ht=>xs(ht.percent)))},Kr=()=>{for(let x=0;x<Y.length;x++)ur(x,Y[x].percent)},Xp=(x,oe)=>{Ce=Me!==void 0?0:Fe(x,Do),Ze=Me!==void 0?Me.length-1:Fe(oe,nn),da(Ce),ua(Ze)},Kp=()=>{var x,oe;for(let De=0;De<Y.length;De++){let dt=Y[De];dt.setAttr("aria-valuemin",((x=Gp(De))!=null?x:"").toString()),dt.setAttr("aria-valuemax",((oe=qp(De))!=null?oe:"").toString())}},da=x=>{Ce=Fe(x,Do),Ce>Ze&&(Ze=Ce+nn),Kr()},ua=x=>{Ze=Fe(x,nn),Ze<Ce&&(Ze=Ce+nn),Kr()},Gh=x=>{Je=!0;for(let oe=0;oe<x.length;oe++)pa(x[oe],oe);Je=!1;for(let oe=0;oe<x.length;oe++)pa(x[oe],oe)},pa=(x,oe)=>{let De;Me!==void 0?(De=x==null?0:W(x,Me),De===-1&&(De=0)):(De=Fe(x,Ce),De<Ce&&(De=Ce),De>Ze&&(De=Ze));let dt=xe(Ce,Ze,0,100,De);ur(oe,dt)},fa=x=>{if(x==null){rt=void 0;return}if(typeof x=="function"){rt=x,Kr();return}if(Ne(x)){rt=Fe(x,1);let oe=Math.abs(Ze-Ce);rt>oe&&(rt=void 0),Kr();return}rt=void 0},qo=x=>{Je=x,Kr()},Yo=x=>{(!Ne(x)||x<0)&&(x=0),Be=x},Xo=x=>{(!Ne(x)||x<0)&&(x=1/0),gt=x},Ko=x=>{Et=x,$.classList.toggle("disabled",Et),Et?$.setAttribute("aria-disabled","true"):$.hasAttribute("aria-disabled")&&$.removeAttribute("aria-disabled")},qh=x=>{cr=x},Yh=x=>{dr=x,dr?document.removeEventListener("wheel",oa):document.addEventListener("wheel",oa,{passive:!1})},Zo=x=>{if(x==null){Me=void 0;return}if(Me=H(x),Me===void 0||Me.length<=0){Me=void 0;return}da(0),ua(Me.length-1),rt===void 0&&fa(1)},Jo=x=>{var oe;typeof x=="string"?ct=x.trim().toLowerCase()===ee?ee:ve:ct=ve;let De=(oe=g.shadowRoot)==null?void 0:oe.querySelector(".range-slider-box");if(!De)return;De.className=`range-slider-box type-${ct}`,Kr();let dt=ct===ee?"vertical":"horizontal";for(let At of Y)At.setAttr("aria-orientation",dt)},Qo=x=>{er=x,Y.length>1&&Dh(Y,er,g),Kr(),Qi()},el=x=>{We=x,Y.length>1&&Dh(Y,We,g),Kr(),Qi()},tl=x=>{Lr=Fe(x,ws),Lr<0&&(Lr=ws),Qi()},Xh=x=>{x==null||x.toString().trim().toLowerCase()==="false"?(Oi=void 0,$.style.removeProperty(le),$.classList.remove(fe)):(Oi=x.toString(),$.style.setProperty(le,Oi),$.classList.add(fe))},Kh=(x,oe)=>{let De=Y[x];!De||(De.setAttr("aria-label",oe),Mh[x]=oe)},ga=x=>{if(Ut=void 0,Y.length<=1){Nt=!1,$.classList.remove(ke);return}Nt=x,$.classList.toggle(ke,Nt)},Zp=()=>{Ko(Ge(g.getAttribute(j))),cr=Ge(g.getAttribute(K)),dr=Ge(g.getAttribute(G));let x=se(g,/^pointer([0-9]*)-disabled$/,oe=>Ge(oe));for(let oe of x){let De=oe[0];!Y[De]||(Y[De].disabled=oe[1])}},Jp=()=>{let x=se(g,/^aria-label([0-9]*)$/);for(let oe of x){let De=oe[0];Kh(De,oe[1])}},Qp=x=>{let oe=Y.length,De=Y[oe-1].$pointer,dt=De.cloneNode(!0);De.after(dt);let At=A(g,dt,oe);return At.setCallbacks(Uh,Fh,zh,jh),Y.push(At),pa(x,oe),Kr(),Qi(),oe},ef=()=>{let x=Y.length,oe=Y[x-1];return oe?(oe.destroy(),Y.pop(),Y.length<=1&&ga(!1),Kr(),Qi(),x-1):-1};return(()=>{var x,oe;for(let dt of Y)dt.setCallbacks(Uh,Fh,zh,jh);let De=(x=g.shadowRoot)==null?void 0:x.querySelector(".panel-fill");De&&(ze=ge(De)),Jo(g.getAttribute(D)),Qo(Ge(g.getAttribute(X))),el(Ge(g.getAttribute(O))),Xp(g.getAttribute(u),g.getAttribute(p)),fa(g.getAttribute(S)),Zo(g.getAttribute(d)),Gh(Q.map(dt=>dt[1])),qo(Ge(g.getAttribute(a))),Yo(Fe(g.getAttribute(o),0)),Xo(Fe(g.getAttribute(l),1/0)),ga(Ge(g.getAttribute(h))),tl(Fe(g.getAttribute(y),ws)),Zp(),Jp(),Xe=re(g,$,Y),Xh((oe=g.getAttribute(Ue))!=null?oe:Th),$.addEventListener("mousedown",Rh),$.addEventListener("mouseup",aa),$.addEventListener("touchmove",Ji),$.addEventListener("touchstart",Ji),dr||document.addEventListener("wheel",oa,{passive:!1}),Se=Oe(g,Bp,{setValues:Gh,setMin:da,setMax:ua,setStep:fa,setPointersOverlap:qo,setPointersMinDistance:Yo,setPointersMaxDistance:Xo,setDisabled:Ko,setType:Jo,setRightToLeft:Qo,setBottomToTop:el,setRound:tl,setKeyboardDisabled:qh,setMousewheelDisabled:Yh,setRangeDragging:ga,setData:Zo},{getPercents:Nh,getValues:Wh,getPointerElements:Bh,getMin:Hh,getMax:Vh,getStep:Mo,getData:Ro,getType:Io,getRound:Uo,getTextMin:ha,getTextMax:ca,isRightToLeft:jo,isBottomToTop:No,isDisabled:Wo,isKeyboardDisabled:Bo,isMousewheelDisabled:Ho,isPointersOverlap:Vo,isRangeDraggingEnabled:Go,getPointersMinDistance:Fo,getPointersMaxDistance:zo}),Se.init()})(),{get pointers(){return Y},get styles(){return Xe},get pluginsManager(){return Se},get min(){return ha()},get max(){return ca()},get step(){return Mo()},get pointersOverlap(){return Vo()},set pointersOverlap(x){qo(x)},get pointersMinDistance(){return Fo()},set pointersMinDistance(x){Yo(x)},get pointersMaxDistance(){return zo()},set pointersMaxDistance(x){Xo(x)},get disabled(){return Wo()},set disabled(x){Ko(x)},get data(){return Ro()},get type(){return Io()},set type(x){Jo(x)},get rightToLeft(){return jo()},set rightToLeft(x){Qo(x)},get bottomToTop(){return No()},set bottomToTop(x){el(x)},get round(){return Uo()},set round(x){tl(x)},get animateOnClick(){return Oi},set animateOnClick(x){Xh(x)},get keyboardDisabled(){return Bo()},set keyboardDisabled(x){qh(x)},get mousewheelDisabled(){return Ho()},set mousewheelDisabled(x){Yh(x)},get rangeDragging(){return Go()},set rangeDragging(x){ga(x)},setMin:da,setMax:ua,setValue:pa,setStep:fa,setData:Zo,getTextValue:xs,setAriaLabel:Kh,getAriaLabel:Yp,addPointer:Qp,removePointer:ef,destroy:()=>{$.removeEventListener("mousedown",Rh),$.removeEventListener("mouseup",aa),$.removeEventListener("touchmove",Ji),$.removeEventListener("touchstart",Ji),document.removeEventListener("wheel",oa);for(let x of Y)x.destroy();Se==null||Se.destroy()}}},Fp=(g,$,Q)=>{let Y=I.find(([Se,Ce,Ze,rt])=>Ce.replace("#","")===$.replace(/\d+/g,""));if(Y&&g.styles){let[Se,Ce,Ze,rt]=Y,Me=$.replace(/\D/g,"").trim(),ct=Me===""||Me==="0"||Me==="1"?0:Fe(Me,0)-1;g.styles.setStyle(Se,Q,ct);return}switch(g&&g.pluginsManager&&g.pluginsManager.onAttrChange($,Q),$){case u:{g.setMin(Q);break}case p:{g.setMax(Q);break}case S:{g.setStep(Q);break}case a:{g.pointersOverlap=Ge(Q);break}case o:{g.pointersMinDistance=Fe(Q,0);break}case h:{g.rangeDragging=Ge(Q);break}case l:{g.pointersMaxDistance=Fe(Q,1/0);break}case j:{g.disabled=Ge(Q);break}case K:{g.keyboardDisabled=Ge(Q);break}case G:{g.mousewheelDisabled=Ge(Q);break}case d:{g.setData(Q);break}case D:{g.type=Q;break}case X:{g.rightToLeft=Ge(Q);break}case O:{g.bottomToTop=Ge(Q);break}case y:{g.round=Fe(Q,ws);break}case L:{g.styles&&(g.styles.theme=Q);break}case Ue:{g.animateOnClick=Q;break}}let we=null;if(/^value([0-9]*)$/.test($)&&(we="value"),/^pointer([0-9]*)-disabled$/.test($)&&(we="pointer-disabled"),/^aria-label([0-9]*)$/.test($)&&(we="aria-label"),/^pointer([0-9]*)-shape$/.test($)&&(we="pointer-shape"),!we)return;let ze=$.replace(/\D/g,"").trim(),Xe=ze===""||ze==="0"||ze==="1"?0:Fe(ze,0)-1;switch(we){case"value":{g.setValue(Q,Xe);break}case"pointer-disabled":{let Se=g==null?void 0:g.pointers[Xe];if(!Se)return;Se.disabled=Ge(Q);break}case"aria-label":{g.setAriaLabel(Xe,Q);break}case"pointer-shape":{g.styles&&g.styles.setPointerShape(Xe,Q);break}}},zp=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(g){this.slider&&this.slider.setStep(g)}get step(){var g;return(g=this.slider)==null?void 0:g.step}set disabled(g){this.slider&&(this.slider.disabled=g)}get disabled(){var g,$;return($=(g=this.slider)==null?void 0:g.disabled)!=null?$:!1}set data(g){var $;($=this.slider)==null||$.setData(g)}get data(){var g;return(g=this.slider)==null?void 0:g.data}set min(g){var $;($=this.slider)==null||$.setMin(g)}get min(){var g;return(g=this.slider)==null?void 0:g.min}set max(g){var $;($=this.slider)==null||$.setMax(g)}get max(){var g;return(g=this.slider)==null?void 0:g.max}set round(g){!this.slider||(this.slider.round=g)}get round(){var g,$;return($=(g=this.slider)==null?void 0:g.round)!=null?$:ws}set type(g){!this.slider||(this.slider.type=g??ve)}get type(){var g;return((g=this.slider)==null?void 0:g.type)||ve}set pointersOverlap(g){!this.slider||(this.slider.pointersOverlap=g)}get pointersOverlap(){var g,$;return($=(g=this.slider)==null?void 0:g.pointersOverlap)!=null?$:!1}set pointersMinDistance(g){!this.slider||(this.slider.pointersMinDistance=g)}get pointersMinDistance(){var g,$;return($=(g=this.slider)==null?void 0:g.pointersMinDistance)!=null?$:0}set pointersMaxDistance(g){!this.slider||(this.slider.pointersMaxDistance=g)}get pointersMaxDistance(){var g,$;return($=(g=this.slider)==null?void 0:g.pointersMaxDistance)!=null?$:1/0}set theme(g){!this.slider||!this.slider.styles||(this.slider.styles.theme=g)}get theme(){var g,$,Q;return(Q=($=(g=this.slider)==null?void 0:g.styles)==null?void 0:$.theme)!=null?Q:null}set rtl(g){!this.slider||(this.slider.rightToLeft=g)}get rtl(){var g,$;return($=(g=this.slider)==null?void 0:g.rightToLeft)!=null?$:!1}set btt(g){!this.slider||(this.slider.bottomToTop=g)}get btt(){var g,$;return($=(g=this.slider)==null?void 0:g.bottomToTop)!=null?$:!1}set keyboardDisabled(g){!this.slider||(this.slider.keyboardDisabled=g)}get keyboardDisabled(){var g,$;return($=(g=this.slider)==null?void 0:g.keyboardDisabled)!=null?$:!1}set mousewheelDisabled(g){!this.slider||(this.slider.mousewheelDisabled=g)}get mousewheelDisabled(){var g,$;return($=(g=this.slider)==null?void 0:g.mousewheelDisabled)!=null?$:!1}set animateOnClick(g){!this.slider||(this.slider.animateOnClick=g)}get animateOnClick(){var g;return(g=this.slider)==null?void 0:g.animateOnClick}get rangeDragging(){var g,$;return($=(g=this.slider)==null?void 0:g.rangeDragging)!=null?$:!1}set rangeDragging(g){this.slider&&(this.slider.rangeDragging=Ge(g))}get externalCSSList(){return this._externalCSSList}addPointer(g){var $,Q;if(!this.slider)return;let Y=(Q=($=this.slider)==null?void 0:$.addPointer(g))!=null?Q:0;ut(this,this.slider,Y,`value${Y+1}`,`ariaLabel${Y+1}`,`pointerShape${Y+1}`,`pointer${Y+1}Disabled`)}removePointer(){var g;!this.slider||(g=this.slider)==null||g.removePointer()}addCSS(g){if(!this.shadowRoot)return;let $=document.createElement("style");$.textContent=g,this.shadowRoot.appendChild($)}connectedCallback(){var g,$;if(!this.shadowRoot)return;this._externalCSSList=me(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let Q=(g=this.shadowRoot)==null?void 0:g.querySelector(".pointer");if(!Q)return;let Y=($=this.shadowRoot)==null?void 0:$.getElementById("range-slider");if(!Y)return;let we=Le(this,Q);this.slider=Up(this,Y,we),Rp(this,this.slider),this._observer=new MutationObserver(ze=>{ze.forEach(Xe=>{var Se;if(!this.slider||Xe.type!=="attributes")return;let Ce=Xe.attributeName;!Ce||Fp(this.slider,Ce,(Se=this.getAttribute(Ce))!=null?Se:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},To=zp;window.tcRangeSlider=To,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",To),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends To{})})();const y1=r=>!isNaN(parseFloat(r))&&isFinite(r),pi=(r,e)=>y1(r)?Number(r):e,ul=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const Sa=40,$a=35,ka=30,cd="#475569",dd="#fff",ud=20,v1=()=>{let r=null,e=null,t=!1,i=Sa,s=$a,n=ka,a=cd,o=dd,l="",h="",d,u=[],p=null,S=null;const y=()=>{p==null||p.classList.toggle("is-after",i<=0)},D=()=>{var Z;const C=(Z=r==null?void 0:r.shadowRoot)==null?void 0:Z.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("tooltips"),C.prepend(p),y()},L=C=>{const Z=document.createElement("div");return Z.style.zIndex=ud.toString(),Z.className=C,Z},X=(C,Z,ue,ae,$e)=>{C&&(Z==="vertical"?(C.style.left=`${-i}px`,C.style.top=ae??"0"):(C.style.left=ue??"0",C.style.top=`${-i}px`),C.style.width=`${s}px`,C.style.height=`${n}px`,C.style.background=a,C.style.color=o,C.style.zIndex=$e.toString())},O=C=>{let Z=C;return typeof d=="function"&&(Z=d(C)),h==="prefix"?`${l}${Z}`:`${Z}${l}`},j=()=>{const C=(e==null?void 0:e.getValues())??[],Z=(e==null?void 0:e.getPointerElements())??[],ue=(e==null?void 0:e.getType())??"horizontal";if(C)for(let ae=0;ae<C.length;ae++){const $e=u[ae];if(!$e)continue;const Te=(C[ae]??"").toString();$e.textContent=O(Te),X($e,ue,Z[ae].style.left,Z[ae].style.top,Z[ae].style.zIndex)}},K=()=>{const C=(e==null?void 0:e.getValues())??[];if(C){for(let Z=0;Z<C.length;Z++){const ue=L(`tooltip tooltip-${Z+1}`);ue.style.position="absolute",u.push(ue),p==null||p.prepend(ue)}j()}},G=()=>{r&&(S=new ResizeObserver(C=>{for(const Z of C)j()}),S.observe(r))},ie=C=>{t=C,t?(D(),K(),G()):he()},v=C=>{i=C,j()},b=C=>{s=C,j()},w=C=>{n=C,j()},E=C=>{a=C,j()},N=C=>{o=C,j()},R=C=>{l=C,j()},F=C=>{h=C,j()},U=C=>{d=C,j()},J=C=>{if(!t||!C.values)return;const Z=(e==null?void 0:e.getPointerElements())??[],ue=(e==null?void 0:e.getType())??"horizontal";for(let ae=0;ae<C.values.length;ae++){const $e=C.values[ae],Te=u[ae];if($e===void 0&&Te){Te.remove(),u[ae]=void 0;continue}if($e!==void 0&&!Te){const Ue=L(`tooltip tooltip-${ae+1}`),q=($e??"").toString();Ue.textContent=O(q),Ue.style.position="absolute",X(Ue,ue,Z[ae].style.left,Z[ae].style.top,Z[ae].style.zIndex),u[ae]=Ue,p==null||p.append(Ue)}if(!Te)continue;const Re=($e??"").toString();Te.textContent=O(Re),X(Te,ue,Z[ae].style.left,Z[ae].style.top,Z[ae].style.zIndex)}},he=()=>{p==null||p.remove();for(const C of u)C&&C.remove();u=[],S==null||S.disconnect()};return{get name(){return"Moving Tooltip"},init:(C,Z,ue,ae)=>{r=C,e=ae,i=pi(C.getAttribute("moving-tooltip-distance-to-pointer"),Sa),s=pi(C.getAttribute("moving-tooltip-width"),$a),n=pi(C.getAttribute("moving-tooltip-height"),ka),a=C.getAttribute("moving-tooltip-bg")||cd,o=C.getAttribute("moving-tooltip-text-color")||dd,l=C.getAttribute("moving-tooltip-units")||"",h=C.getAttribute("moving-tooltip-units-type")||"",ie(ul(C.getAttribute("moving-tooltip")))},update:J,onAttrChange:(C,Z)=>{C==="moving-tooltip"&&ie(ul(Z)),C==="moving-tooltip-distance-to-pointer"&&v(pi(Z,Sa)),C==="moving-tooltip-width"&&b(pi(Z,$a)),C==="moving-tooltip-height"&&w(pi(Z,ka)),C==="moving-tooltip-bg"&&E(Z),C==="moving-tooltip-text-color"&&N(Z),C==="moving-tooltip-units"&&R(Z),C==="moving-tooltip-units-type"&&F(Z)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:C=>{ie(ul(C))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:C=>{v(pi(C,Sa))}}},{name:"tooltipWidth",attributes:{get(){return s},set:C=>{b(pi(C,$a))}}},{name:"tooltipHeight",attributes:{get(){return n},set:C=>{w(pi(C,ka))}}},{name:"tooltipBg",attributes:{get(){return a},set:C=>{E(C)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:C=>{N(C)}}},{name:"tooltipUnits",attributes:{get(){return l},set:C=>{R(C)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:C=>{F(C)}}},{name:"formatTooltipValue",attributes:{get(){return d},set:C=>{U(C)}}}],css:`
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
  z-index: ${ud};
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
    `,destroy:he}};window.tcRangeSliderPlugins.push(v1);(()=>{var r=(o,l,h,d,u)=>{let p=l-o;return p===0?h:(d-h)*(u-o)/p+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,d=null,u=null,p=!1,S=s,y=n,D=()=>{var v;let b=(v=o==null?void 0:o.shadowRoot)==null?void 0:v.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),d=document.createElement("div"),d.classList.add("mark-points"),h.append(d),u=document.createElement("div"),u.classList.add("mark-values"),h.append(u),b.append(h)},L=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},X=()=>{var v;if(!h||!l)return;let b=l.getMin(),w=l.getMax(),E=l.getType()==="vertical",N=l.isRightToLeft()||l.isBottomToTop();for(let F=0;F<S;F++){let U=document.createElement("div");U.classList.add("mark",`mark-${F}`);let J=S===0?0:F*100/(S-1);E?N?U.style.top=`${100-J}%`:U.style.top=`${J}%`:N?U.style.left=`${100-J}%`:U.style.left=`${J}%`,d==null||d.append(U)}let R=l.getData();for(let F=0;F<y;F++){let U=document.createElement("div");U.classList.add("mark-value",`mark-value-${F}`);let J=y===0?0:F*100/(y-1),he=r(0,y-1,b,w,F);U.textContent=(R?(v=R[Math.round(he)])!=null?v:"":he).toString(),E?N?U.style.top=`${100-J}%`:U.style.top=`${J}%`:N?U.style.left=`${100-J}%`:U.style.left=`${J}%`,u==null||u.append(U)}},O=(v,b)=>{ie(),S=v,y=b,S<=0&&(S=s),y<=0&&(y=n),D(),X(),L()},j=v=>{p=v,p?(D(),X(),L()):ie()},K=v=>{!h||h.style.setProperty("--marks-color",v)},G=v=>{!h||h.style.setProperty("--values-color",v)},ie=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(v,b,w,E)=>{var N,R;l=E,o=v,p=i(o.getAttribute("marks")),p&&(O(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),K((N=o.getAttribute("marks-color"))!=null?N:"#cbd5e1"),G((R=o.getAttribute("marks-values-color"))!=null?R:"#475569"))},onAttrChange:(v,b)=>{v==="marks"&&j(i(b)),v==="marks-count"&&O(t(b,s),y),v==="marks-values-count"&&O(S,t(b,n)),v==="marks-color"&&K(b),v==="marks-values-color"&&G(b)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return p??!1},set:v=>{j(i(v))}}},{name:"marksCount",attributes:{get(){return S??s},set:v=>{O(t(v,s),y)}}},{name:"marksValuesCount",attributes:{get(){return S??s},set:v=>{O(S,t(v,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:v=>{K(v)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:v=>{G(v)}}}],destroy:ie,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var b1=Object.defineProperty,w1=Object.getOwnPropertyDescriptor,hi=(r,e,t,i)=>{for(var s=i>1?void 0:i?w1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&b1(e,t,s),s};let Or=class extends Rr{constructor(){super(...arguments),this.hasInitialValues=!1,this.sliderRef=Ve(),this.initialised=!1,this.loading=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.registry.range.removeListener(this.UUID),this.registry.minmax.removeListener(this.UUID),this.initialised=!1}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}getSlider(){var r;return(r=this.renderRoot)==null?void 0:r.querySelector("tc-range-slider")}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("loading")&&this.loading===!1&&(this.log("should initialise now"),this.initialiseSlider())}initialiseSlider(){this.initialised=!0,setTimeout(()=>{const r=this.sliderRef.value;r&&(r.addCSS(`
                    .tooltip {
                        font-size: 12px;
                    }
                    .pointer-shape {
                        border-radius: 0;
                        width: 10px;
                    }
                `),r.addEventListener("change",e=>{const i=e.detail;this.from=i.value1,this.to=i.value2}),r.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),r.addEventListener("onMouseDown",e=>{this.log(e)}))},0),this.registry.range.addListener(this.UUID,r=>{r&&(this.log("přišla hodnota",r),this.from!==void 0&&this.to!==void 0?this.max<r.from?(this.to=r.to,this.from=r.from):(this.from=r.from,this.to=r.to):(this.from=r.from,this.to=r.to),this.sliderRef.value&&(r.from&&this.from&&this.sliderRef.value.setAttribute("value1",this.from.toString()),r.to&&this.to&&this.sliderRef.value.setAttribute("value2",this.to.toString())))})}render(){return this.loading===!0?f`<div class="container loading">
                <div class"skeleton"></div>    
            </div>`:f`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Ke(this.sliderRef)}
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

        `}};Or.styles=Pe`

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
    
    `;hi([de({context:nh,subscribe:!0}),P()],Or.prototype,"min",2);hi([de({context:ah,subscribe:!0}),P()],Or.prototype,"max",2);hi([de({context:wo,subscribe:!0}),P()],Or.prototype,"from",2);hi([de({context:xo,subscribe:!0}),P()],Or.prototype,"to",2);hi([P()],Or.prototype,"hasInitialValues",2);hi([de({context:Yn,subscribe:!0}),P()],Or.prototype,"palette",2);hi([P()],Or.prototype,"sliderRef",2);hi([P()],Or.prototype,"initialised",2);hi([P(),de({context:hh,subscribe:!0})],Or.prototype,"loading",2);Or=hi([pe("registry-range-slider")],Or);var x1=Object.defineProperty,S1=Object.getOwnPropertyDescriptor,Qn=(r,e,t,i)=>{for(var s=i>1?void 0:i?S1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&x1(e,t,s),s};let zs=class extends Rr{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var r,e;return this.from===void 0||this.to===void 0?V:f`
            <div>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Qn([de({context:wo,subscribe:!0})],zs.prototype,"from",2);Qn([de({context:xo,subscribe:!0})],zs.prototype,"to",2);Qn([m({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],zs.prototype,"fixed",2);Qn([m({type:String,reflect:!0,attribute:!0})],zs.prototype,"separator",2);zs=Qn([pe("registry-range-display")],zs);var $1=Object.defineProperty,k1=Object.getOwnPropertyDescriptor,Yi=(r,e,t,i)=>{for(var s=i>1?void 0:i?k1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$1(e,t,s),s};let si=class extends Rr{constructor(){super(...arguments),this.histogram=[],this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.loading=!1,this.error=!1}getClassName(){return"HistogramElement"}connectedCallback(){super.connectedCallback(),this.loading=this.registry.histogram.loading,this.registry.histogram.onCalculationStart.set(this.UUID,()=>{this.loading=!0,this.error=!1}),this.registry.histogram.onCalculationEnd.set(this.UUID,r=>{this.loading=!1,this.error=!r}),this.registry.loading.addListener(this.UUID,r=>{r===!0&&(this.loading=!0)})}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.loading.removeListener(this.UUID),this.registry.histogram.removeListener(this.UUID),this.registry.histogram.onCalculationStart.delete(this.UUID),this.registry.histogram.onCalculationEnd.delete(this.UUID)}render(){const r=this.histogram.length>0&&this.loading===!1;return f`

            <div class="container ${r?"ready":"loading"} ${this.error?"has-error":"is-ok"}">

                <div class="histogram ${this.expandable===!0?"expandable":""}" style="height: ${this.expanded?this.heightExpanded:this.height}" part="bg" @click=${()=>{this.expandable===!0&&(this.expanded=!this.expanded)}}>

                    ${this.histogram.map(e=>f`
                            <div class="histogram-bar" data-height="${e.height}" data-percentage="${e.percentage}" data-count="${e.count}" data-from="${e.from}" data-to="${e.to}">
                                <div style="height: ${e.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

                ${this.error===!0?f`<div class="error">Unable to calculate the histogram</div>`:V}

                <div class="spinner">
                    <span></span>
                </div>

            </div>
        
        `}};si.styles=Pe`

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


    `;Yi([P()],si.prototype,"histogram",2);Yi([m({type:String,reflect:!0})],si.prototype,"height",2);Yi([m({type:String,reflect:!0})],si.prototype,"heightExpanded",2);Yi([m({type:Boolean,reflect:!0,converter:ft(!1)})],si.prototype,"expandable",2);Yi([P()],si.prototype,"expanded",2);Yi([P()],si.prototype,"loading",2);Yi([P()],si.prototype,"error",2);si=Yi([pe("registry-histogram")],si);var C1=Object.defineProperty,_1=Object.getOwnPropertyDescriptor,P1=(r,e,t,i)=>{for(var s=i>1?void 0:i?_1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&C1(e,t,s),s};let Ll=class extends oi{render(){const e=this.classList.contains("small")?"small":"";return f`
        
            <thermal-dropdown class="download ${e}">
            
                <span slot="invoker">${M(T.download)}</span>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.files.downloadAllFiles()}>${M(T.downloadoriginalfiles)}</thermal-button>
                    <small>${M(T.downloadoriginalfileshint)}</small>
                </div>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.forEveryInstance(t=>t.export.downloadPng())}>${M(T.pngofindividualimages)}</thermal-button>
                    <small>${M(T.pngofindividualimageshint)}</small>
                </div>
            
                <div slot="option">
            
                <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({})}>${M(T.pngofentiregroup)}</thermal-button>
                    <small>${M(T.pngofentiregrouphint)}</small>
                </div>
            
            
                <div slot="option">
                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${M(T.csvofanalysisdata)}</thermal-button>
                    <small>${M(T.csvofanalysisdatahint)}</small>
                </div>
            
            </thermal-dropdown>
        
        `}};Ll.styles=Pe`
    
    `;Ll=P1([pe("group-download-dropdown")],Ll);var E1=Object.defineProperty,ea=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&E1(e,t,s),s};class kt extends oi{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}ea([de({context:ch,subscribe:!0}),P()],kt.prototype,"parentFileProviderElement");ea([de({context:hh,subscribe:!0}),P()],kt.prototype,"loading");ea([de({context:lh,subscribe:!0}),P()],kt.prototype,"file");ea([de({context:np,subscribe:!0}),P()],kt.prototype,"failure");ea([de({context:fh,subscribe:!0}),P()],kt.prototype,"recording");const Lh=class Lh extends kt{constructor(){super(...arguments),this.ref=Ve()}onInstanceCreated(){}onFailure(){}render(){return f`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${Ke(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};Lh.styles=Pe`
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

    `;let ds=Lh;var A1=Object.defineProperty,L1=Object.getOwnPropertyDescriptor,vp=(r,e,t,i)=>{for(var s=i>1?void 0:i?L1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&A1(e,t,s),s};let Ya=class extends oi{connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return f`
            <slot>
                <button class="default">${M(T.range).toLowerCase()}</button>
            </slot>
        `}};Ya.styles=ds.styles;vp([de({context:Zn,subscribe:!0})],Ya.prototype,"setter",2);Ya=vp([pe("group-range-propagator")],Ya);var O1=Object.defineProperty,D1=Object.getOwnPropertyDescriptor,ci=(r,e,t,i)=>{for(var s=i>1?void 0:i?D1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&O1(e,t,s),s};let Dr=class extends oi{constructor(){super(...arguments),this.pngWidth=1350}render(){return f`
        
                <button class="default" @click=${()=>this.group.files.downloadAllFiles()}>${M(T.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${()=>this.group.forEveryInstance(r=>r.export.downloadPng())}>${M(T.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${()=>this.group.analysisSync.png.downloadPng({columns:this.pngColumns,showAnalysis:this.pngAnalyses,showFileDate:this.pngFileDate,showFileName:this.pngFileName,showThermalScale:this.pngExportScale,showGroupName:this.pngExportGroupName,label:this.label,fontSize:this.pngFs})}>${M(T.pngofentiregroup)}</button>
            
                <button class="default" @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${M(T.csvofanalysisdata)}</button>
        
        `}};Dr.styles=Pe`

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
    
    `;ci([m({type:String})],Dr.prototype,"label",2);ci([de({context:ki,subscribe:!0})],Dr.prototype,"pngWidth",2);ci([de({context:Ci,subscribe:!0})],Dr.prototype,"pngFs",2);ci([P(),de({context:Hn,subscribe:!0})],Dr.prototype,"pngAnalyses",2);ci([P(),de({context:Vn,subscribe:!0})],Dr.prototype,"pngExportScale",2);ci([P(),de({context:Gn,subscribe:!0})],Dr.prototype,"pngFileName",2);ci([P(),de({context:qn,subscribe:!0})],Dr.prototype,"pngFileDate",2);ci([P(),de({context:Ql,subscribe:!0})],Dr.prototype,"pngColumns",2);ci([P(),de({context:eh,subscribe:!0})],Dr.prototype,"pngExportGroupName",2);Dr=ci([pe("group-download-buttons")],Dr);/**
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
 */const T1=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),qd(t,Gd`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function bp(r={}){await T1;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function pd(r){if(await bp(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function M1(r){return await bp(),new google.visualization.ChartWrapper({container:r})}/**
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
 */var Ei=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var o=r.length-1;o>=0;o--)(a=r[o])&&(n=(s<3?a(n):s>3?a(e,t,n):a(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const fd=["ready","select"],R1={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class qr extends gr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return f`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){M1(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(fd,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(R1[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(s=>!fd.includes(s)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(!(!e||!t))try{const i=await pd({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,t;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?t=fetch(e).then(s=>s.json()):t=Promise.resolve(e),t.then(pd).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}qr.styles=Pe`
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
  `;Ei([m({type:String,reflect:!0})],qr.prototype,"type",void 0);Ei([m({type:Array})],qr.prototype,"events",void 0);Ei([m({type:Object,hasChanged:()=>!0})],qr.prototype,"options",void 0);Ei([m({type:Array})],qr.prototype,"cols",void 0);Ei([m({type:Array})],qr.prototype,"rows",void 0);Ei([m({type:String})],qr.prototype,"data",void 0);Ei([m({type:Object})],qr.prototype,"view",void 0);Ei([m({type:Array})],qr.prototype,"selection",void 0);Ei([m({type:Object})],qr.prototype,"_data",void 0);customElements.define("google-chart",qr);var I1=Object.defineProperty,U1=Object.getOwnPropertyDescriptor,Ks=(r,e,t,i)=>{for(var s=i>1?void 0:i?U1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&I1(e,t,s),s};let Bi=class extends oi{constructor(){super(...arguments),this.instances=[],this.on=!1}firstUpdated(r){super.firstUpdated(r),this.group.files.addListener(this.UUID,()=>{this.group.analysisGraph.turnOn()}),this.group.analysisGraph.addListener(this.UUID,e=>{e!==void 0?(this.data=e.data,this.colors=e.colors,this.on=!0):(this.data=void 0,this.colors=void 0,this.on=!1)})}download(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("google-chart");console.log(r)}render(){return f`
            <div class="wrapper ${this.on?"on":"off"}">

                ${this.on===!0?f`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{colors:this.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},chartArea:{width:"90%"}}}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                `:V}
                
            </div>
        `}};Bi.styles=Pe`
    
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

    `;Ks([P()],Bi.prototype,"instances",2);Ks([P()],Bi.prototype,"timeout",2);Ks([P()],Bi.prototype,"data",2);Ks([P()],Bi.prototype,"colors",2);Ks([P()],Bi.prototype,"on",2);Bi=Ks([pe("group-chart")],Bi);var F1=Object.defineProperty,z1=Object.getOwnPropertyDescriptor,wp=(r,e,t,i)=>{for(var s=i>1?void 0:i?z1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&F1(e,t,s),s};let Xa=class extends oi{connectedCallback(){if(super.connectedCallback(),this.on){const r=this.UUID+"__initial";this.group.files.addListener(r,e=>{e.length>0&&(this.group.analysisSync.turnOn(e[0]),this.group.files.removeListener(r))})}else this.on=this.group.analysisSync.value;this.group.analysisSync.addListener(this.UUID,r=>{this.on=r}),this.addEventListener("click",()=>{this.toggle()})}turnOn(){this.group.files.value.length>0&&this.group.analysisSync.turnOn(this.group.files.value[0])}turnOff(){this.group.analysisSync.turnOff()}toggle(){this.on?this.turnOff():this.turnOn()}render(){return f`  
        <span><i></i></span>      
        <div>${M(T.analysissync)}</div>
        `}};Xa.styles=Pe`
    
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
    
    `;wp([m({type:Boolean,reflect:!0,converter:ft(!1)})],Xa.prototype,"on",2);Xa=wp([pe("group-analysis-sync-button")],Xa);const Ka=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:mt(r,"m:ss")}),j1=(r,e,t,i)=>{const s=[];let n=1;const a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(Ka(o,i,"minor")),n+=1}return e<i&&s.push(Ka(e,i,"major")),s},pl=60*1e3,rs=50,_s=3,Ol=(r,e)=>{const t=Math.floor(r/rs),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=pl;for(;o<e;)j1(o,l,n,e).forEach(h=>a.push(h)),o+=pl,l+=pl;return a.push(Ka(0,e,"bound")),a.push(Ka(e,e,"bound")),a},N1=r=>f`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,gd=(r,e,t)=>f`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,xp=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return f`<div class="ticks">
        
        ${e.map(N1)}

        ${gd(s,mt(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?gd(n,mt(i,"m:ss:SSS"),"pointer"):V}

    </div>`},Sp=Pe`

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
            width: ${rs}px;
            left: -${rs/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${_s}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${rs/2}px;
            padding-right: ${rs/2}px;
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
                top: -${_s}px;
            }

            .tick-pointer {
                width: ${_s*2}px;
                height: ${_s*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${_s}px;
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
            height: ${_s}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${rs}px;
            position: relative;
            left: -${rs/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var W1=Object.defineProperty,B1=Object.getOwnPropertyDescriptor,Ai=(r,e,t,i)=>{for(var s=i>1?void 0:i?B1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&W1(e,t,s),s};let kr=class extends oi{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=Ve(),this.indicatorRef=Ve()}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.files.addListener(this.UUID,r=>{this.listener!==void 0&&clearTimeout(this.listener),this.listener=setTimeout(async()=>{this.onRegistryBatchEnded(r)},0)}),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof hs?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=Ol(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?V:f`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${Ke(this.timelineRef)}
                @click=${r=>this.handleTimelineClick(r)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${Ke(this.indicatorRef)}></div>
            </div>

            ${this.longestDurationInMs!==void 0?xp(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):V}

        </div>`}};kr.TICK_WIDTH=50;kr.TICK_POINTER_HEIGHT=3;kr.styles=Pe`


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


        ${Sp}
    
    `;Ai([P()],kr.prototype,"longestDurationInMs",2);Ai([P()],kr.prototype,"ms",2);Ai([P()],kr.prototype,"pointerMs",2);Ai([P()],kr.prototype,"playing",2);Ai([P()],kr.prototype,"instances",2);Ai([P()],kr.prototype,"has",2);Ai([P()],kr.prototype,"ticks",2);Ai([P()],kr.prototype,"listener",2);kr=Ai([pe("group-timeline")],kr);var H1=Object.defineProperty,V1=Object.getOwnPropertyDescriptor,$p=(r,e,t,i)=>{for(var s=i>1?void 0:i?V1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&H1(e,t,s),s};let Za=class extends kt{constructor(){super(...arguments),this.container=Ve(),this.norender=!1}getContainer(){return this.container.value}onInstanceCreated(e){const t=this.getContainer();if(t!==void 0)e.mountToDom(t),this.norender===!1&&e.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(e){var t;if(super.updated(e),e.has("file")){const i=e.get("file"),s=this.file;i===void 0&&s!==void 0&&this.container.value&&this.file&&((t=this.file.dom)==null?void 0:t.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}disconnectedCallback(){var e,t,i,s;super.disconnectedCallback(),this.log("unmount"),this.file!==void 0&&(this.file.unmountFromDom(),(e=this.parentFileProviderElement)==null||e.onSuccess.delete(this.UUID),(t=this.parentFileProviderElement)==null||t.onInstanceCreated.delete(this.UUID),(i=this.parentFileProviderElement)==null||i.onLoadingStart.delete(this.UUID),(s=this.parentFileProviderElement)==null||s.onFailure.delete(this.UUID))}render(){var s,n;const e=this.loading===!1&&this.failure!==void 0,t=this.loading===!1&&this.file!==void 0,i={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":t,"is-error":e};return f`
            <div ${Ke(this.container)} class=${yi(i)} part="file-canvas-container">
            
                ${this.loading===!0?f`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:e===!0?f`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                ${M(T.fileloadingerror)}
                            </div>

                            <div class="error-url">
                                ${(s=this.failure)==null?void 0:s.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${(n=this.failure)==null?void 0:n.message}
                            </div>
                        </div>`:V}
            
            </div>
        
        `}};Za.styles=Pe`

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
    `;$p([m({converter:ft(!1)})],Za.prototype,"norender",2);Za=$p([pe("file-canvas")],Za);var G1=Object.defineProperty,q1=Object.getOwnPropertyDescriptor,Y1=(r,e,t,i)=>{for(var s=i>1?void 0:i?q1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&G1(e,t,s),s};let Dl=class extends kt{onInstanceCreated(){}onFailure(){}render(){return this.file?f`
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
        `:V}};Dl.styles=Pe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Dl=Y1([pe("file-share-button")],Dl);var X1=Object.defineProperty,K1=Object.getOwnPropertyDescriptor,Z1=(r,e,t,i)=>{for(var s=i>1?void 0:i?K1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&X1(e,t,s),s};let Tl=class extends kt{onFileLoaded(){}onInstanceCreated(){}onFailure(){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?f`
            <thermal-dialog label=${M(T.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${M(T.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${nr(this.renderRow(M(T.thermalfilename),this.file.fileName))}

                        ${nr(this.renderDownloadRow(M(T.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,M(T.thermalfiledownload)))}

                        ${this.file.visibleUrl?nr(this.renderDownloadRow(M(T.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,M(T.visiblefiledownload))):V}

                        ${nr(this.renderRow(M(T.time),Kt.human(this.file.timestamp)))}

                        ${nr(this.renderNumericalRow(M(T.duration),this.file.duration,0,"ms"))}

                        ${nr(this.renderRow(M(T.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${nr(this.renderNumericalRow(M(T.bytesize),this.file.bytesize,0))}
                        
                        ${nr(this.renderNumericalRow(M(T.minimaltemperature),this.file.min,10,"°C"))}

                        ${nr(this.renderNumericalRow(M(T.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${M(T.filetype)}</h2>
                    <table>
                    ${nr(this.renderRow(M(T.type),this.file.reader.parser.name))}
                    ${nr(this.renderRow(M(T.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${M(T.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>f`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:V}};Tl.styles=Pe`

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
    
    `;Tl=Z1([pe("file-info-button")],Tl);var J1=Object.defineProperty,Q1=Object.getOwnPropertyDescriptor,Xi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Q1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&J1(e,t,s),s};let ni=class extends kt{constructor(){super(...arguments),this.pngWidth=1350,this.hasGraphs=!1}onInstanceCreated(r){r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasGraphs=e})}onFailure(){}render(){return this.file===void 0?V:f`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker">
                    <div class="button">
                        ${this.file?M(T.download):"..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">${M(T.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs,showAnalysis:this.pngAnalyses,showThermalScale:this.pngExportScale,showFileDate:this.pngFileDate,showFileName:this.pngFileName})}>${M(T.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?f`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${M(T.convertentiresequencetovideo)}</thermal-button>
                        </div>`:V}

                    ${this.hasGraphs===!0?f`<div slot="option">
                            <thermal-button @click=${()=>{var r;return(r=this.file)==null?void 0:r.analysisData.downloadData()}}>${M(T.csvofanalysisdata)}</thermal-button>
                        </div>`:V}
            
            </thermal-dropdown>

        
        `}};ni.styles=Pe`

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
    
    `;Xi([de({context:ki,subscribe:!0})],ni.prototype,"pngWidth",2);Xi([de({context:Ci,subscribe:!0})],ni.prototype,"pngFs",2);Xi([P(),de({context:Hn,subscribe:!0})],ni.prototype,"pngAnalyses",2);Xi([P(),de({context:Vn,subscribe:!0})],ni.prototype,"pngExportScale",2);Xi([P(),de({context:Gn,subscribe:!0})],ni.prototype,"pngFileName",2);Xi([P(),de({context:qn,subscribe:!0})],ni.prototype,"pngFileDate",2);Xi([P()],ni.prototype,"hasGraphs",2);ni=Xi([pe("file-download-dropdown")],ni);var ew=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,Pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?tw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ew(e,t,s),s};const rw="chrome"in window;let Zt=class extends kt{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Ve(),this.barRef=Ve(),this.containerRef=Ve(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.collapsed=!1,this.ticks=[]}onInstanceCreated(r){this.containerRef.value&&(this.ticks=Ol(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=Ol(t.contentRect.width,this.file.duration)),t.contentRect.width<Zt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return V;if(r.duration===0)return V;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,playback:!0,...t},s={item:!0,timeline:!0,...t};return f`
            <div class="${yi(e)}" ${Ke(this.containerRef)}>


                ${r!==void 0?f`

                        <div class="ticks-horizontal-indent">

                            <notation-timeline></notation-timeline>


                            <div class="${yi(s)}"  ${Ke(this.timelineRef)}>

                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Ke(this.barRef)}></div>
                                    ${this.cursor?f`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                            </div>


                            ${this.currentFrame?xp(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):V}

                            


                            ${this.hasPlayButton===!0?f`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${M(T.prev)}</thermal-button>


                                        <button class="${yi(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                        ${this.playing?f`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                            </svg>
                                            `:f`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                            </svg>
                                            `}

                                    </button>

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${M(T.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${M(T.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                ${rw===!0?f`<thermal-dialog label="Performance">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="chrome" slot="invoker">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                        </svg>

                                        <div slot="content" style="max-width: 500px;">

                                            <p>Your browser is based on Chromium and might have slightly worse performance during playback.</p>

                                            <p>Consider using <a href="https://mozilla.org/firefox" target="_blank">Firefox</a>.</p>

                                            <p style="opacity: .5">Reason of lagging in Chromium is its aggressive resources optimisation. Firefox will enable you to use more of your system's power.</p>
                                        
                                        </div>

                                    </thermal-dialog>`:V}

                                </div>

                                `:V}

                            
                        </div>
                    `:V}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?f`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${M(T.date)}:</span> 
                            <span class="inline">${mt(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${M(T.time)}:</span> 
                            <span class="inline">${mt(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${M(T.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(n=this.file)==null?void 0:n.frameCount}</span>
                        </div>
                    </div>`:V}

          `}};Zt.collapseWidth=500;Zt.styles=Pe`
    
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

        ${Sp}


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
    
    `;Pr([de({context:uh,subscribe:!0}),P()],Zt.prototype,"playing",2);Pr([de({context:ko,subscribe:!0}),P()],Zt.prototype,"currentFrame",2);Pr([de({context:lp,subscribe:!0}),P()],Zt.prototype,"duration",2);Pr([de({context:hp,subscribe:!0}),P()],Zt.prototype,"mayStop",2);Pr([de({context:dh,subscribe:!0})],Zt.prototype,"cursor",2);Pr([de({context:op,subscribe:!0})],Zt.prototype,"cursorSetter",2);Pr([m({type:String,reflect:!0})],Zt.prototype,"hasPlayButton",2);Pr([m({type:String,reflect:!0})],Zt.prototype,"hasInfo",2);Pr([m({type:String,reflect:!0})],Zt.prototype,"interactive",2);Pr([P()],Zt.prototype,"collapsed",2);Pr([P()],Zt.prototype,"ticks",2);Pr([P()],Zt.prototype,"pointerMs",2);Zt=Pr([pe("file-timeline")],Zt);var iw=Object.defineProperty,sw=Object.getOwnPropertyDescriptor,bh=(r,e,t,i)=>{for(var s=i>1?void 0:i?sw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&iw(e,t,s),s};let _n=class extends kt{constructor(){super(...arguments),this.enabled="on",this.playbackSpeed=1}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?V:f`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option" style="font-size: calc( var(--thermal-fs-sm) * .9);">${M(T.playbackspeed)}</div>

                    ${Object.entries(gu).map(([r])=>f`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof wi&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};_n.styles=Pe`

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
    
    `;bh([m({type:String,reflect:!0})],_n.prototype,"enabled",2);bh([de({context:ph,subscribe:!0}),P()],_n.prototype,"playbackSpeed",2);_n=bh([pe("file-playback-speed-dropdown")],_n);var nw=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,wh=(r,e,t,i)=>{for(var s=i>1?void 0:i?aw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nw(e,t,s),s};let Pn=class extends kt{constructor(){super(...arguments),this.container=Ve()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return f`
            <div class="container">
            
                <video ${Ke(this.container)} preload="metadata">

                    ${this.url===void 0?V:f`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Pn.styles=Pe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;wh([de({context:ko,subscribe:!0}),P()],Pn.prototype,"currentFrame",2);wh([m({type:String,reflect:!0,attribute:!0})],Pn.prototype,"url",2);Pn=wh([pe("file-video")],Pn);var ow=Object.defineProperty,lw=Object.getOwnPropertyDescriptor,xh=(r,e,t,i)=>{for(var s=i>1?void 0:i?lw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ow(e,t,s),s};let En=class extends kt{onInstanceCreated(){}onFailure(){}render(){if(this.file===void 0)return V;if(this.label!==void 0)return this.label;if(this.grouping!==void 0)switch(this.grouping){case"hours":case"days":return mt(this.file.timestamp,"HH:mm");case"weeks":case"months":case"years":return Kt.human(this.file.timestamp);default:return Kt.human(this.file.timestamp)}return this.file.fileName}};En.styles=Pe`
        :host {
            display: contents;
        }
    `;xh([m({type:String})],En.prototype,"grouping",2);xh([m({type:String})],En.prototype,"label",2);En=xh([pe("file-label")],En);var hw=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,Sh=(r,e,t,i)=>{for(var s=i>1?void 0:i?cw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hw(e,t,s),s};let An=class extends ot{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return f`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};An.styles=Pe`

    
    `;Sh([m()],An.prototype,"analysis",2);Sh([P()],An.prototype,"name",2);An=Sh([pe("analysis-name")],An);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$h(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var dw=Object.defineProperty,uw=Object.getOwnPropertyDescriptor,kh=(r,e,t,i)=>{for(var s=i>1?void 0:i?uw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dw(e,t,s),s};let Ln=class extends ot{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return f`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?V:f`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${$h(Oa,r=>f`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Ln.styles=Pe`

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
    
    `;kh([m()],Ln.prototype,"analysis",2);kh([P()],Ln.prototype,"color",2);Ln=kh([pe("analysis-color")],Ln);var pw=Object.defineProperty,fw=Object.getOwnPropertyDescriptor,Ir=(r,e,t,i)=>{for(var s=i>1?void 0:i?fw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pw(e,t,s),s};let yr=class extends ot{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return f`

            <div class="table">

                <thermal-field label=${M(T.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${M(T.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${M(T.left)}>
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

                <thermal-field label=${M(T.right)}>
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

                <thermal-field label=${M(T.top)}>
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

                <thermal-field label=${M(T.bottom)}>
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
    
        
        `}};yr.styles=Pe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Ir([m()],yr.prototype,"analysis",2);Ir([P()],yr.prototype,"color",2);Ir([P()],yr.prototype,"top",2);Ir([P()],yr.prototype,"left",2);Ir([P()],yr.prototype,"width",2);Ir([P()],yr.prototype,"height",2);Ir([P()],yr.prototype,"type",2);Ir([P()],yr.prototype,"right",2);Ir([P()],yr.prototype,"bottom",2);Ir([P()],yr.prototype,"maxX",2);Ir([P()],yr.prototype,"maxY",2);yr=Ir([pe("edit-area")],yr);var gw=Object.defineProperty,mw=Object.getOwnPropertyDescriptor,Zs=(r,e,t,i)=>{for(var s=i>1?void 0:i?mw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gw(e,t,s),s};let Hi=class extends ot{constructor(){super(...arguments),this.topInputRef=Ve(),this.leftInputRef=Ve()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return f`

            <div class="table">

                <thermal-field label=${M(T.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${M(T.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${M(T.top)} hint=${M(T.fromto,{from:0,to:this.maxX})}>
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

                <thermal-field label=${M(T.left)} hint=${M(T.fromto,{from:0,to:this.maxX})}>
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
        
        `}};Hi.styles=Pe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Zs([m()],Hi.prototype,"analysis",2);Zs([P()],Hi.prototype,"top",2);Zs([P()],Hi.prototype,"left",2);Zs([P()],Hi.prototype,"maxX",2);Zs([P()],Hi.prototype,"maxY",2);Hi=Zs([pe("edit-point")],Hi);var yw=Object.defineProperty,vw=Object.getOwnPropertyDescriptor,Ao=(r,e,t,i)=>{for(var s=i>1?void 0:i?vw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yw(e,t,s),s};let On=class extends ot{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return f`

            <thermal-dialog label="${M(T.editsth,{what:M(T[this.type])})}">
                <slot name="invoker" slot="invoker">
                    <thermal-button>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                            <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                        </svg>
                    </thermal-button>
                </slot>

                <div slot="content">
                    ${this.analysis instanceof xr?f`<edit-point .analysis=${this.analysis}></edit-point>`:f`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Ao([m()],On.prototype,"analysis",2);Ao([P()],On.prototype,"name",2);Ao([P()],On.prototype,"type",2);On=Ao([pe("file-analysis-edit")],On);var bw=Object.defineProperty,ww=Object.getOwnPropertyDescriptor,Er=(r,e,t,i)=>{for(var s=i>1?void 0:i?ww(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bw(e,t,s),s};let ar=class extends kt{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=Ve(),this.graphRef=Ve(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){this.graphs=r.analysisData.value,r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.graphs=this.file.analysisData.value,this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){var r;return((r=this.file)==null?void 0:r.timeline.isSequence)===!1?V:f`

            <div style="position: relative; background-color: white; border-radius: var(--thermal-radius); height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&f`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&f`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${Ke(this.container)} style="height: 100%; ">
                ${this.graphs.colors.length>0?f`<thermal-chart 
                        ${Ke(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:M(T.time),format:"m:ss:SSS"},vAxis:{title:M(T.temperature)+" °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:V}
            </div>

            

            </div>
        
        `}};ar.styles=Pe`

        :host {
            // background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Er([P()],ar.prototype,"hydrated",2);Er([m({reflect:!0})],ar.prototype,"graphWidth",2);Er([m({reflect:!0})],ar.prototype,"graphHeight",2);Er([P()],ar.prototype,"graphs",2);Er([de({context:ko,subscribe:!0})],ar.prototype,"currentFrame",2);Er([de({context:dh,subscribe:!0})],ar.prototype,"cursor",2);Er([de({context:op,subscribe:!0})],ar.prototype,"cursorSetter",2);Er([P()],ar.prototype,"shadowLeft",2);Er([P()],ar.prototype,"shadowTop",2);Er([P()],ar.prototype,"shadowWidth",2);Er([P()],ar.prototype,"shadowHeight",2);Er([de({context:vo,subscribe:!0})],ar.prototype,"graphSmooth",2);ar=Er([pe("file-analysis-graph")],ar);var xw=Object.defineProperty,Sw=Object.getOwnPropertyDescriptor,Yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xw(e,t,s),s};let Cr=class extends ot{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&(t.onDeselected.delete(this.UUID),t.onSelected.delete(this.UUID),t.onValues.delete(this.UUID),t.onMoveOrResize.delete(this.UUID),t.graph.onGraphActivation.delete(this.UUID),t.onSetInitialColor.delete(this.UUID),t.onSetName.delete(this.UUID));const i=this.analysis;this.name=i.name,this.selected=i.selected,this.color=i.initialColor;const s=n=>n instanceof fr?i.width+"x"+i.height:"1x1";this.dimension=s(i),this.value={min:i.min,max:i.max,avg:i.avg},i.file.timeline.isSequence?this.may=i instanceof xr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:i.graph.state.MIN,max:i.graph.state.MAX,avg:i.graph.state.AVG},i.onSerializableChange.set(this.UUID,n=>{this.dimension=s(n)}),i.onValues.set(this.UUID,(n,a,o)=>{this.value={min:n,max:a,avg:o}}),i.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{this.graph={min:n,max:a,avg:o}}),i.onSelected.set(this.UUID,()=>{this.selected=!0}),i.onDeselected.set(this.UUID,()=>{this.selected=!1}),i.onSetInitialColor.set(this.UUID,n=>{this.color=n}),i.onSetName.set(this.UUID,n=>{this.name=n})}}valueOrNothing(e){return e===void 0?"-":e.toFixed(2)+" °C"}renderCell(e,t,i,s){return f`
            <td class="${t?"may":"mayNot"} ${i?"active":"inactive"}">

                ${t?f`
                        <button
                            @click=${s}
                            style="background-color: ${i?this.color:"transparent"};"
                            title="${i?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(e)}
                        </button>
                    `:this.valueOrNothing(e)}

            </td>
        `}render(){return f`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
            @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
        >
            ${this.interactiveanalysis===!0?f`<u aria-hidden="true"></u>`:V}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?f`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
            </svg>
            </thermal-button>

            <!--

            ${this.analysis.getType()!=="point"?f`<thermal-button 
                    @click=${()=>{}}
                    @mouseenter=${()=>{this.analysis.min&&this.analysis.max&&this.setRegistryHighlight&&this.setRegistryHighlight({from:this.analysis.min,to:this.analysis.max})}}
                    @mouseleave=${()=>{this.setRegistryHighlight&&this.setRegistryHighlight(void 0)}}
                    >
                            ${M(T.range)}
                        </thermal-button>`:V}

            -->
            

        
        </td>`:V}
        
        `}};Cr.styles=Pe`
    
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

    `;Yr([m()],Cr.prototype,"analysis",2);Yr([m({type:Boolean})],Cr.prototype,"interactiveanalysis",2);Yr([P()],Cr.prototype,"value",2);Yr([P()],Cr.prototype,"graph",2);Yr([P()],Cr.prototype,"may",2);Yr([P()],Cr.prototype,"dimension",2);Yr([P()],Cr.prototype,"color",2);Yr([m({type:Boolean,reflect:!0,attribute:!0})],Cr.prototype,"selected",2);Yr([P()],Cr.prototype,"name",2);Yr([de({context:Zn,subscribe:!0})],Cr.prototype,"setRegistryHighlight",2);Cr=Yr([pe("file-analysis-table-row")],Cr);const vs="interactive-analysis-context";var $w=Object.defineProperty,kw=Object.getOwnPropertyDescriptor,Js=(r,e,t,i)=>{for(var s=i>1?void 0:i?kw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$w(e,t,s),s};let Vi=class extends kt{constructor(){super(...arguments),this.container=Ve(),this.interactiveanalysis=!1,this.forceinteractiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(e){console.log(e)}onInstanceCreated(e){this.hydrate(e)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(e){super.updated(e),e.has("file")&&this.file&&this.hydrate(this.file)}hydrate(e){e.analysis.addListener(this.UUID,t=>{this.analysis=t}),e.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length}),e.analysisData.onGraphsPresence.set(this.UUID,t=>{this.hasHighlightedData=t}),this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length,this.analysis=e.analysis.value,this.hasHighlightedData=e.analysisData.hasActiveGraphs}render(){if(this.analysis.length===0||this.file===void 0)return V;const e=this.interactiveanalysis===!0||this.forceinteractiveanalysis===!0;return f`

        <div class="overflow" ${Ke(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${e?"interactive":""}"
                            @click=${()=>{var t,i;this.allSelected?(t=this.file)==null||t.analysis.layers.deselectAll():(i=this.file)==null||i.analysis.layers.selectAll()}}
                        >
                            ${e?f`<u aria-hidden="true"></u>`:V}
                            <span>${M(T.analysis)}</span>
                            ${this.hasHighlightedData?f`<button @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title=${M(T.downloadgraphdataascsv)}>CSV</button>`:V}
                        </th>
                        <th>${M(T.avg)}</th>
                        <th>${M(T.min)}</th>
                        <th>${M(T.max)}</th>
                        <th>${M(T.size)}</th>
                        ${e===!0?f`<th></th>`:V}
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(t=>f`
                            <file-analysis-table-row
                                .analysis=${t}
                                interactiveanalysis=${e}
                            ></file-analysis-table-row>
                        `)}
                
                </tbody>

                </table>

            </div>
            
        `}};Vi.styles=Pe`
    
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

        



    `;Js([de({context:vs,subscribe:!0})],Vi.prototype,"interactiveanalysis",2);Js([m({type:Boolean,converter:ft(!1)})],Vi.prototype,"forceinteractiveanalysis",2);Js([P()],Vi.prototype,"analysis",2);Js([P()],Vi.prototype,"allSelected",2);Js([P()],Vi.prototype,"hasHighlightedData",2);Vi=Js([pe("file-analysis-table")],Vi);var Cw=Object.defineProperty,_w=Object.getOwnPropertyDescriptor,Qs=(r,e,t,i)=>{for(var s=i>1?void 0:i?_w(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cw(e,t,s),s};let Gi=class extends kt{constructor(){super(...arguments),this.container=Ve(),this.interactiveanalysis=!1,this.forceinteractiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}renderHeader(){return f`<tr>
            <td>${M(T.analysis)}</td>
            <td>${M(T.min)}</td>
            <td>${M(T.max)}</td>
            <td>${M(T.avg)}</td>
        </tr>`}renderRow(r){var e,t,i;return f`<tr>
            <td>
                ${r.name}
                <file-analysis-edit .analysis=${r}></file-analysis-edit>
            </td>
            <td>${(e=r.min)==null?void 0:e.toFixed(2)}</td>
            <td>${(t=r.max)==null?void 0:t.toFixed(2)}</td>
            <td>${(i=r.avg)==null?void 0:i.toFixed(2)}</td>
        </tr>`}render(){if(this.analysis.length===0||this.file===void 0)return V;const r=this.interactiveanalysis===!0||this.forceinteractiveanalysis===!0;return f`

        <div class="overflow" ${Ke(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <!--

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${r?"interactive":""}"
                            @click=${()=>{var e,t;this.allSelected?(e=this.file)==null||e.analysis.layers.deselectAll():(t=this.file)==null||t.analysis.layers.selectAll()}}
                        >
                            ${r?f`<u aria-hidden="true"></u>`:V}
                            <span>${M(T.analysis)}</span>
                            ${this.hasHighlightedData?f`<button @click=${()=>{var e;(e=this.file)==null||e.analysisData.downloadData()}} title=${M(T.downloadgraphdataascsv)}>CSV</button>`:V}
                        </th>
                        <th>${M(T.avg)}</th>
                        <th>${M(T.min)}</th>
                        <th>${M(T.max)}</th>
                        <th>${M(T.size)}</th>
                        ${r===!0?f`<th></th>`:V}
                    </tr>

                    -->

                    ${this.renderHeader()}
                
                </thead>

                <tbody>

                    ${this.analysis.map(e=>f`
                    <file-analysis-overview-row
                        .analysis=${e}
                    ></file-analysis-overview-row>
                        `)}
                
                </tbody>

                </table>

            </div>
        `}};Gi.styles=Pe`
    
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

        



    `;Qs([de({context:vs,subscribe:!0}),m()],Gi.prototype,"interactiveanalysis",2);Qs([m({type:Boolean,converter:ft(!1)})],Gi.prototype,"forceinteractiveanalysis",2);Qs([P()],Gi.prototype,"analysis",2);Qs([P()],Gi.prototype,"allSelected",2);Qs([P()],Gi.prototype,"hasHighlightedData",2);Gi=Qs([pe("file-analysis-overview")],Gi);var Pw=Object.defineProperty,Ew=Object.getOwnPropertyDescriptor,di=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ew(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pw(e,t,s),s};let Tr=class extends ot{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof fr?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof xr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return f`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?f`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"};"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

            </td>
        `}render(){return f`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
        >
            <span
                class="name-text"
                @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
            >

                ${this.interactiveanalysis===!0?f`<u aria-hidden="true"></u>`:V}
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
        ${this.renderCell(this.value.min,this.analysis instanceof fr,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min),this.log("Graph analysis min",this.graph.min)})}
        ${this.renderCell(this.value.max,this.analysis instanceof fr,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}

         ${this.renderCell(this.value.avg,!0,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}

        <!--
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?f`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${M(T.remove)}</thermal-button>
        </td>`:V}

        -->
        
        `}};Tr.styles=Pe`
    
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

    `;di([m()],Tr.prototype,"analysis",2);di([de({context:vs,subscribe:!0})],Tr.prototype,"interactiveanalysis",2);di([P()],Tr.prototype,"value",2);di([P()],Tr.prototype,"graph",2);di([P()],Tr.prototype,"may",2);di([P()],Tr.prototype,"dimension",2);di([P()],Tr.prototype,"color",2);di([m({type:Boolean,reflect:!0,attribute:!0})],Tr.prototype,"selected",2);di([P()],Tr.prototype,"name",2);Tr=di([pe("file-analysis-overview-row")],Tr);var Aw=Object.defineProperty,Lw=Object.getOwnPropertyDescriptor,Li=(r,e,t,i)=>{for(var s=i>1?void 0:i?Lw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Aw(e,t,s),s};let Gr=class extends kt{constructor(){super(...arguments),this.mayHaveGraph=!1,this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1,this.graphRef=Ve(),this.graphWidth=0,this.graphHeight=0}onInstanceCreated(r){this.mayHaveGraph=r.timeline.isSequence,r.analysis.layers.onAdd.set(this.UUID,e=>{var i,s;this.hasAnalysis===!1&&(this.hasAnalysis=!0);const t=()=>{this.isDrawingAnalysis=!1};(s=(i=e.file.dom)==null?void 0:i.listenerLayer)==null||s.getLayerRoot().addEventListener("pointerup",t),e.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{if(n||a||o)this.hasGraph=!0;else{const l=e.file.analysis.value.reduce((h,d)=>h===!0?h:d.graph.state.MIN||d.graph.state.MAX||d.graph.state.AVG,!1);this.hasGraph=l}})}),r.analysis.layers.onRemove.set(this.UUID,()=>{this.hasAnalysis===!0&&r.analysis.layers.size===0&&(this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1)})}onFailure(){}updated(r){super.updated(r),r.has("hasGraph")&&(this.observer&&this.graphRef.value&&(this.observer.unobserve(this.graphRef.value),delete this.observer),this.graphRef.value&&this.hasGraph===!0&&(this.observer=new ResizeObserver(e=>{const t=e[0];t!==void 0&&(this.graphWidth=t.contentRect.width,this.graphHeight=t.contentRect.height)}),this.observer.observe(this.graphRef.value)))}renderButtons(){const r=this.file!==void 0?Object.values(this.file.group.tool.tools).filter(e=>e instanceof lo):[];return f`
            <div class="buttons">
                ${r.map(e=>f`
                            <thermal-button @click=${()=>{var t;this.isDrawingAnalysis=!0,(t=this.file)==null||t.group.tool.selectTool(e)}}>
                                <div style="display: flex; align-items: center; gap: 10px">
                                    <div style="width: 1.5em; display: inline-block;">${nr(e.icon)}</div>
                                    <div>${M(T[e.name])}</div>
                                </div>
                            </thermal-button>
                        `)}
            </div>
        
        `}renderCurrentTooltip(){return f`${M(T[this.manager.tool.value.description])}`}renderAddAnalysis(){return f`<div class="addanalysis">

            <div>
                <strong>${M(T.analysis)}</strong>
            </div>

            <div>${M(T.analysishint)}</div>

            ${this.isDrawingAnalysis===!0?this.renderCurrentTooltip():this.renderButtons()}
        </div>`}renderGraph(){return this.mayHaveGraph?this.hasGraph===!0?f`<div class="graph" ${Ke(this.graphRef)}>
                <file-analysis-graph graphWidth=${this.graphWidth} graphHeight=${this.graphHeight}></file-analysis-graph>
            </div>`:this.hasAnalysis===!0?f`<div class="graph graph-prompt">
                    <div>
                        <strong>${M(T.graph)}</strong>
                    </div>
                    <div class="hint">${nr(M(T.graphhint2))}</div>
                </div>`:f`<div class="graph graph-prompt">
                    <div>
                        <strong>${M(T.graph)}</strong>
                    </div>
                    <div class="hint">${M(T.graphhint1)}</div>
                </div>`:V}render(){return f`
            <div class="container ${this.mayHaveGraph===!0?"may":"may-not"}">

            <div class="analysis">
                ${this.hasAnalysis===!1||this.isDrawingAnalysis===!0?this.renderAddAnalysis():f`<file-analysis-table></file-analysis-table>`}
            </div>
            ${this.renderGraph()}

            </div>

        `}};Gr.styles=Pe`

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
    
    `;Li([P()],Gr.prototype,"mayHaveGraph",2);Li([P()],Gr.prototype,"hasAnalysis",2);Li([P()],Gr.prototype,"isDrawingAnalysis",2);Li([P()],Gr.prototype,"hasGraph",2);Li([P()],Gr.prototype,"graphRef",2);Li([P()],Gr.prototype,"graphWidth",2);Li([P()],Gr.prototype,"graphHeight",2);Li([P()],Gr.prototype,"observer",2);Gr=Li([pe("file-analysis-complex")],Gr);var Ow=Object.defineProperty,Dw=Object.getOwnPropertyDescriptor,Tw=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ow(e,t,s),s};let md=class extends ds{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};md=Tw([pe("file-download-lrc")],md);var Mw=Object.defineProperty,Rw=Object.getOwnPropertyDescriptor,bs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mw(e,t,s),s};let qi=class extends ds{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs,showAnalysis:this.pngAnalyses,showThermalScale:this.pngExportScale,showFileName:this.pngFileName,showFileDate:this.pngFileDate})}getDefaultLabel(){return"png"}};bs([P(),de({context:ki,subscribe:!0})],qi.prototype,"pngWidth",2);bs([P(),de({context:Ci,subscribe:!0})],qi.prototype,"pngFs",2);bs([P(),de({context:Hn,subscribe:!0})],qi.prototype,"pngAnalyses",2);bs([P(),de({context:Vn,subscribe:!0})],qi.prototype,"pngExportScale",2);bs([P(),de({context:Gn,subscribe:!0})],qi.prototype,"pngFileName",2);bs([P(),de({context:qn,subscribe:!0})],qi.prototype,"pngFileDate",2);qi=bs([pe("file-download-png")],qi);var Iw=Object.defineProperty,Uw=Object.getOwnPropertyDescriptor,ta=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Iw(e,t,s),s};let js=class extends ds{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};ta([m({type:String})],js.prototype,"label",2);ta([m({type:Object})],js.prototype,"onEnter",2);ta([m({type:Object})],js.prototype,"onLeave",2);ta([m({type:Object})],js.prototype,"onAction",2);js=ta([pe("file-button")],js);var Fw=Object.defineProperty,zw=Object.getOwnPropertyDescriptor,kp=(r,e,t,i)=>{for(var s=i>1?void 0:i?zw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fw(e,t,s),s};let Ml=class extends ds{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&(this.log(this.file.min,this.file.max),this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max}))}getDefaultLabel(){return M(T.range).toLowerCase()}};kp([de({context:Zn,subscribe:!0})],Ml.prototype,"setter",2);Ml=kp([pe("file-range-propagator")],Ml);var jw=Object.defineProperty,Nw=Object.getOwnPropertyDescriptor,Ch=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jw(e,t,s),s};let Dn=class extends ot{constructor(){super(...arguments),this.expanded=!1}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}updated(r){super.updated(r),r.has("expanded")&&(this.expanded===!0?this.classList.add("expanded"):this.classList.remove("expanded"))}render(){return f`
            <div class="backdrop" @click=${()=>this.collapse()}></div>
            <div class="container">
                <button class="default" @click=${()=>{this.toggle()}}>${this.label??"..."}</button>
                <nav class="dropdown">
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
        `}};Dn.styles=Pe`
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



    `;Ch([m({type:String,reflect:!0})],Dn.prototype,"label",2);Ch([P()],Dn.prototype,"expanded",2);Dn=Ch([pe("file-dropdown")],Dn);const Oh=class Oh extends kt{constructor(){super(...arguments),this.tabIndex=1}onInstanceCreated(){}onFailure(){}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.action.bind(this)),this.addEventListener("mouseenter",this.enter.bind(this)),this.addEventListener("mouseleave",this.leave.bind(this)),this.addEventListener("focus",this.enter.bind(this)),this.addEventListener("blur",this.leave.bind(this))}render(){return f`
            <button id="${this.UUID}" tabindex="0">${this.getIcon()}</button>
            <div class="label">
                <label class="label-inner" for="#${this.UUID}">${this.getLabel()}</label>
            </div>
        `}};Oh.styles=Pe`
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

    `;let Ja=Oh;var Ww=Object.defineProperty,Bw=Object.getOwnPropertyDescriptor,Cp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ww(e,t,s),s};let Rl=class extends Ja{enter(){}action(){this.onaction&&this.file&&this.onaction(this.file)}leave(){}getLabel(){return M(T.detail)}getIcon(){return f`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
        </svg>`}};Cp([m({type:Object})],Rl.prototype,"onaction",2);Rl=Cp([pe("file-detail-icon")],Rl);var Hw=Object.defineProperty,Vw=Object.getOwnPropertyDescriptor,_p=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hw(e,t,s),s};let Il=class extends Ja{enter(){}action(){this.file&&(this.file.group.registry.opacity.value===1?this.file.group.registry.opacity.imposeOpacity(0):this.file.group.registry.opacity.imposeOpacity(1))}leave(){}getLabel(){return M(T.togglevisibleimage)}getIcon(){return f`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
        </svg>`}render(){return this.file===void 0||this.file.visibleUrl===void 0?V:super.render()}};_p([m({type:Object})],Il.prototype,"onaction",2);Il=_p([pe("file-opacity-icon")],Il);var Gw=Object.defineProperty,qw=Object.getOwnPropertyDescriptor,ra=(r,e,t,i)=>{for(var s=i>1?void 0:i?qw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gw(e,t,s),s};let us=class extends kt{constructor(){super(...arguments),this.norender=!1}onInstanceCreated(){}onFailure(){}render(){return f`

            <header>
                <h2><file-label label="${at(this.label)}" grouping="${at(this.grouping)}"></file-label></h2>
                <div>
                    <file-opacity-icon></file-opacity-icon>
                    <file-detail-icon .onaction=${at(this.ondetail)}></file-detail-icon>
                    <file-range-propagator></file-range-propagator>
                    <file-dropdown label="...">
                        <file-info-button>
                            <file-button slot="invoker" label=${M(T.info).toLowerCase()}></file-button>
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
        
    `}};us.styles=Pe`
    
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
    
    `;ra([m({type:Object})],us.prototype,"ondetail",2);ra([m({converter:ft(!1)})],us.prototype,"norender",2);ra([m({type:String})],us.prototype,"label",2);ra([m({type:String})],us.prototype,"grouping",2);us=ra([pe("file-thumbnail")],us);var Yw=Object.defineProperty,Xw=Object.getOwnPropertyDescriptor,ia=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yw(e,t,s),s};let ps=class extends kt{constructor(){super(...arguments),this.norender=!1}onInstanceCreated(){}onFailure(){}render(){return f`

            <header>
                <thermal-button variant="foreground" @click=${()=>{this.onback&&this.onback()}}>x</thermal-button>

                ${this.label!==void 0?f`
                    <thermal-button variant="background" interactive="false">${this.label}</thermal-button>
                `:V}

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
        
    `}};ps.styles=Pe`
    
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
    
    `;ia([m({type:Object})],ps.prototype,"onback",2);ia([m({converter:ft(!1)})],ps.prototype,"norender",2);ia([m({type:String})],ps.prototype,"label",2);ia([m({type:String})],ps.prototype,"grouping",2);ps=ia([pe("file-detail")],ps);const Lo={fromAttribute:r=>{if(r){const e=r.split(":").map(Number);if(e.some(isNaN))return;if(e.length===3){const[t,i,s]=e;return t*6e4+i*1e3+s}else if(e.length===4){const[t,i,s,n]=e;return t*36e5+i*6e4+s*1e3+n}}},toAttribute:r=>{if(r!==void 0){const e=Math.floor(r/36e5),t=Math.floor(r%36e5/6e4),i=Math.floor(r%6e4/1e3),s=r%1e3,n=String(i).padStart(2,"0"),a=String(s).padStart(3,"0");return e>0?`${e}:${t}:${n}:${a}`:`${t}:${n}:${a}`}}};var Kw=Object.defineProperty,Zw=Object.getOwnPropertyDescriptor,ui=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Kw(e,t,s),s};let Mr=class extends ot{constructor(){super(...arguments),this._active=!1}get active(){return this._active}willUpdate(r){super.willUpdate(r),r.has("duration")&&this.from!==void 0&&this.duration!==void 0&&(this.to=this.from+this.duration),r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from),r.has("from")&&!r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from),(r.has("from")||r.has("to")||r.has("duration"))&&this.dispatchEvent(new CustomEvent("modified",{bubbles:!0,cancelable:!1,composed:!0}))}activate(){this._active===!1&&(this._active=!0)}deactivate(){this._active===!0&&(this._active=!1)}setMs(r){this.from!==void 0&&this.to!==void 0&&(r>=this.from&&r<this.to?this.activate():this.deactivate())}getRenderContent(){return Array.from(this.slotContent)}getTTSString(){}render(){return f`
            <slot style="display: none;"></slot>
        `}};ui([m({type:Number,reflect:!0,converter:Lo})],Mr.prototype,"from",2);ui([m({type:Number,reflect:!0,converter:Lo})],Mr.prototype,"to",2);ui([m({type:Number,reflect:!0,converter:Lo})],Mr.prototype,"duration",2);ui([m({type:String,reflect:!0})],Mr.prototype,"label",2);ui([m({type:String})],Mr.prototype,"image",2);ui([m({type:String,reflect:!0})],Mr.prototype,"say",2);ui([m({type:String,reflect:!0})],Mr.prototype,"color",2);ui([P()],Mr.prototype,"_active",2);ui([Si()],Mr.prototype,"slotContent",2);Mr=ui([pe("notation-entry")],Mr);const Pp="NotationListContext",Ep="NotationCurrentContext",Ap="NotationDurationContext",Ca=r=>r.filter(e=>e instanceof Mr),Jw=(r,e)=>{const t=[];for(const i of e.notationList)i.from!==void 0&&i.to!==void 0&&(i.from<=r&&i.to>r?(t.push(i),i.activate()):i.deactivate());return t};var Qw=Object.defineProperty,ex=Object.getOwnPropertyDescriptor,Oo=(r,e,t,i)=>{for(var s=i>1?void 0:i?ex(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qw(e,t,s),s};let Ns=class extends ot{constructor(){super(...arguments),this.showlabel=!0,this.showTime=!0}renderEntry(e){const t=this.showlabel===!0?e.label:V,i=this.showTime===!0&&e.from!==void 0&&e.to!==void 0?[mt(e.from,"mm:ss.SSS"),mt(e.to,"mm:ss.SSS")].join(" - "):V,s=e.getRenderContent(),n=e.image!==void 0?f`<img src="${e.image}" class="builtin-image" />`:V;return f`<article>
            ${i!==V?f`<div class="time">${i}</div>`:V}${t!==V?f`<h1 style="${e.color?`background-color:${e.color}`:""}">${t}</h1>`:V}${n}

            ${s.length>0?f`<div class="content">
                    ${s}
                </div>`:V}
        </article>`}render(){return f`${$h(this.entries,this.renderEntry.bind(this))}`}};Ns.styles=Pe`
    
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
    
    `;Oo([P(),de({context:Ep,subscribe:!0})],Ns.prototype,"entries",2);Oo([m({converter:ft(!0)})],Ns.prototype,"showlabel",2);Oo([m({converter:ft(!0)})],Ns.prototype,"showTime",2);Ns=Oo([pe("notation-content")],Ns);var tx=Object.defineProperty,rx=Object.getOwnPropertyDescriptor,_h=(r,e,t,i)=>{for(var s=i>1?void 0:i?rx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tx(e,t,s),s};let Tn=class extends kt{constructor(){super(...arguments),this.durationConverter=Lo}onInstanceCreated(){}onFailure(){}renderEntry(r){if(r.from!==void 0&&r.to!==void 0){const e=r.from/this.duration*100,i=r.to/this.duration*100-e;return f`<button class="entry" style="left: ${e}%; width: ${i}%; ${r.color?`background-color: ${r.color};`:""}}" @click=${()=>{var s;return(s=this.file)==null?void 0:s.timeline.setRelativeTime(r.from+1)}}>
                ${r.label!==void 0?f`<div class="entry-tooltip">
                    <div class="time">${this.durationConverter.toAttribute(r.from)} - ${this.durationConverter.toAttribute(r.to)}</div>
                    <div class="label">${r.label}</div>
                </div>`:V}
            </button>`}return V}render(){return f`<div class="container">
            ${$h(this.entries,this.renderEntry.bind(this))}
        </div>`}};Tn.styles=Pe`
    
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

    `;_h([P(),de({context:Pp,subscribe:!0})],Tn.prototype,"entries",2);_h([de({context:Ap,subscribe:!0})],Tn.prototype,"duration",2);Tn=_h([pe("notation-timeline")],Tn);var ix=Object.defineProperty,sx=Object.getOwnPropertyDescriptor,en=(r,e,t,i)=>{for(var s=i>1?void 0:i?sx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ix(e,t,s),s};let fs=class extends kt{constructor(){super(...arguments),this.ms=0,this.duration=0,this.notationList=[],this.observer=null}onInstanceCreated(r){var e;this.duration=r.timeline.duration,setTimeout(()=>{this.observeSlotChanges(),this.updateNotationsMs(this.ms)},0),r.timeline.addListener(this.UUID,t=>this.ms=t),(e=this.shadowRoot)==null||e.addEventListener("modified",()=>{this.notationList=Ca(this._notationSlot)})}onFailure(){}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector("slot");r&&(this.notationList=Ca(this._notationSlot),this.observer=new MutationObserver(()=>{this.notationList=Ca(this._notationSlot)}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=Ca(this._notationSlot)}))}update(r){super.update(r),r.has("ms")&&this.ms&&this.updateNotationsMs(this.ms)}updateNotationsMs(r){this.notationCurrent=Jw(r,this)}render(){return f`<slot name="notation"></slot>
        <slot></slot>`}};en([P(),Si({slot:"notation",flatten:!0})],fs.prototype,"_notationSlot",2);en([P()],fs.prototype,"ms",2);en([P(),ne({context:Ap})],fs.prototype,"duration",2);en([P(),ne({context:Pp})],fs.prototype,"notationList",2);en([P(),ne({context:Ep})],fs.prototype,"notationCurrent",2);fs=en([pe("notation-provider")],fs);var nx=Object.defineProperty,ax=Object.getOwnPropertyDescriptor,Ar=(r,e,t,i)=>{for(var s=i>1?void 0:i?ax(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nx(e,t,s),s};let or=class extends ot{constructor(){super(...arguments),this.dropinRef=Ve(),this.groupRef=Ve(),this.loaded=!1,this.files=[],this.interactiveanalysis=!0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback(),dp().then(r=>this.ip=r)}firstUpdated(r){super.firstUpdated(r),Bs(this),this.groupRef.value!==void 0&&this.groupRef.value.group.files.addListener(this.UUID,e=>{this.groupRef.value!==void 0&&(this.groupRef.value.group.analysisSync.turnOff(),e.length>0&&this.groupRef.value.group.analysisSync.turnOn(e[0])),e.forEach(t=>{t.analysis.reset(),t.analysis.layers.clear();const i={ip:this.ip,fileName:t.fileName,fileSize:t.bytesize,fileIsSequence:t.timeline.isSequence,fileNumFrames:t.timeline.frameCount,fileWidth:t.width,fileHeight:t.height,fileTimestamp:t.timeline.frames[0].absolute,fileDataType:t.fileDataType,userAgent:window.navigator.userAgent,windowWidth:window.innerWidth,windowHeight:window.innerHeight,time:new Date().getTime(),url:window.location.href};this.dispatchEvent(new CustomEvent("uploaded",{detail:i,bubbles:!0,composed:!0}))}),this.listener!==void 0&&clearTimeout(this.listener),e.length===0?this.files=[]:this.files=[e[0]],this.listener=setTimeout(async()=>{var i;const t=(i=this.groupRef.value)==null?void 0:i.group.registry;t!==void 0&&(await t.postLoadedProcessing(),t.minmax.value!==void 0&&t.range.imposeRange({from:t.minmax.value.min,to:t.minmax.value.max}))},0),this.log("files",e)})}handleClear(){this.groupRef.value!==void 0&&this.groupRef.value.group.files.removeAllInstances()}renderIntroScene(){return f`
            <group-dropin></group-dropin>
        `}renderBrowserScene(){return f`
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
        `}renderOneFile(){return f`
        ${this.files.map(r=>this.renderDetail(r,!0))}
        `}renderFileHeader(r){return f`
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

                    <div>${Kt.human(r.timestamp)}</div>
                </div>
            </header>
        `}renderDetail(r,e=!1){return f`
            <article class="file">
                <file-mirror .file="${r}" autoclear="true">

                    ${this.renderFileHeader(r)}

                    ${e===!0?f`
                        <div class="file-expanded">
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                            </div>
                            <div>
                                <file-analysis-complex></file-analysis-complex>
                            </div>
                        </div>
                        `:f`
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                                <file-analysis-overview></file-analysis-overview>
                                <file-analysis-graph></file-analysis-graph>
                            </div>
                        `}
                
                </file-mirror>
            </article>
        `}renderMultipleFiles(){return f`
        <div class="files-multiple">
        ${this.files.map(r=>this.renderDetail(r,!1))}
        </div>
        `}render(){try{return f`

            <manager-provider slug="${this.UUID}" palette="iron">

                <registry-provider slug="${this.UUID}" palette="iron">

                    <group-provider ${Ke(this.groupRef)} slug="${this.UUID}">

                        <thermal-app 
                            label="LabIR Edu Analyser"
                            showfullscreen="true"
                        >

                            <group-dropin-input slot="bar-pre"></group-dropin-input>

                            ${this.files.length>0?f`
                                <thermal-button slot="bar-pre" @click="${()=>this.handleClear()}">${M(T.clear)}</thermal-button>

                                <registry-palette-dropdown slot="bar-pre"></registry-palette-dropdown>

                                <registry-range-full-button slot="bar-pre"></registry-range-full-button>

                                <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>
                                        
                                `:V}

                            ${this.files.length>1?f`
                                    <group-download-dropdown slot="bar-pre"></group-download-dropdown><registry-range-full-button slot="bar-pre"></registry-range-full-button>`:V}

                                    <slot name="header"></slot>
                                </thermal-bar>
                            </div>

                            <thermal-dialog label="${M(T.config)}" slot="bar-pre">
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

        `}catch{return f`Stala se chyba`}}};or.styles=Pe`
    
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

    `;Ar([P()],or.prototype,"dropinRef",2);Ar([P()],or.prototype,"groupRef",2);Ar([P()],or.prototype,"loaded",2);Ar([P()],or.prototype,"listener",2);Ar([P()],or.prototype,"files",2);Ar([P()],or.prototype,"ip",2);Ar([ne({context:vs})],or.prototype,"interactiveanalysis",2);Ar([ne({context:ki})],or.prototype,"pngExportWidth",2);Ar([ne({context:qs})],or.prototype,"pngExportWidthSetterContext",2);Ar([ne({context:Ci})],or.prototype,"pngExportFs",2);Ar([ne({context:Ys})],or.prototype,"pngExportFsSetterContext",2);Ar([ne({context:gs}),m({reflect:!0,converter:Hs})],or.prototype,"locale",2);or=Ar([pe("thermal-dropin-app")],or);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yd=r=>Pf(r)?r._$litType$.h:r.strings,_a=Rn(class extends ro{constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[e]){const t=mc(this.it)?yd(this.it):null,i=mc(e)?yd(e):null;if(t!==null&&(i===null||t!==i)){const s=wc(r).pop();let n=this.et.get(t);if(n===void 0){const a=document.createDocumentFragment();n=Id(V,a),n.setConnected(!1),this.et.set(t,n)}bc(n,[s]),vc(n,void 0,s)}if(i!==null){if(t===null||t!==i){const s=this.et.get(i);if(s!==void 0){const n=wc(s).pop();Lf(r),vc(r,void 0,n),bc(r,[n])}}this.it=e}else this.it=void 0;return this.render(e)}});var ox=Object.defineProperty,lx=Object.getOwnPropertyDescriptor,st=(r,e,t,i)=>{for(var s=i>1?void 0:i?lx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ox(e,t,s),s};const vd=[{key:"simple",icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15H21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'},{key:"advanced",icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12L21 12M12 3L12 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'},{key:"lesson",icon:'<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentcolor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>layout_11_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Design" transform="translate(-48.000000, -288.000000)"> <g id="layout_11_line" transform="translate(48.000000, 288.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M3,5 C3,3.89543 3.89543,3 5,3 L19,3 C20.1046,3 21,3.89543 21,5 L21,19 C21,20.1046 20.1046,21 19,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,5 Z M8,5 L5,5 L5,19 L8,19 L8,5 Z M10,5 L10,8 L19,8 L19,5 L10,5 Z M10,10 L10,19 L19,19 L19,10 L10,10 Z" id="形状" fill="currentcolor"> </path> </g> </g> </g> </g></svg>'}],hx=["analysis1","analysis2","analysis3","analysis4","analysis5","analysis6","analysis7"];let Qe=class extends ot{constructor(){super(...arguments),this.fileProviderRef=Ve(),this.layout="simple",this.palette="jet",this.opacity=1,this.showfullscreen=!0,this.showscale=!0,this.showhistogram=!0,this.showlayout=!1,this.showshare=!1,this.interactiveanalysis=!0,this.loading=!0,this.hasVisible=!1,this.ms=0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}get file(){if(this.fileProviderRef.value!==void 0)return this.fileProviderRef.value.file}firstUpdated(r){super.firstUpdated(r),Bs(this),this.hydrateInternalListeners()}hydrateInternalListeners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,r=>{this.loading=!1,this.recorded=Kt.human(r.timestamp),this.hasVisible=r.visibleUrl!==void 0,r.group.registry.range.addListener(this.UUID+"mirror_changes",e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from!==e.from&&(this.from=e.from),this.to!==e.to&&(this.to=e.to))}),r.group.registry.opacity.addListener(this.UUID+"mirror_changes",e=>{e!==this.opacity&&(this.opacity=e)}),r.group.registry.manager.palette.addListener(this.UUID+"mirror_changes",e=>{this.palette!==e&&(this.palette=e)}),r.slots.onSlot1Serialize.set(this.UUID,e=>{this.analysis1!==e&&(this.analysis1=e)}),r.slots.onSlot2Serialize.set(this.UUID,e=>{this.analysis2!==e&&(this.analysis2=e)}),r.slots.onSlot3Serialize.set(this.UUID,e=>{this.analysis3!==e&&(this.analysis3=e)}),r.slots.onSlot4Serialize.set(this.UUID,e=>{this.analysis4!==e&&(this.analysis4=e)}),r.slots.onSlot5Serialize.set(this.UUID,e=>{this.analysis5!==e&&(this.analysis5=e)}),r.slots.onSlot6Serialize.set(this.UUID,e=>{this.analysis6!==e&&(this.analysis6=e)}),r.slots.onSlot7Serialize.set(this.UUID,e=>{this.analysis7!==e&&(this.analysis7=e)})})}updated(r){if(super.updated(r),this.file!==void 0){const t=this.file.group.registry,i=t.manager;r.has("from")&&r.has("to")&&(this.from!==void 0&&this.to!==void 0?this.file.group.registry.range.imposeRange({from:this.from,to:this.to}):this.file.group.registry.range.imposeRange(void 0)),r.has("opacity")&&this.opacity!==void 0&&this.opacity!==t.opacity.value&&this.file.group.registry.opacity.imposeOpacity(this.opacity),r.has("palette")&&this.palette!==i.palette.value&&i.palette.setPalette(this.palette),hx.forEach((s,n)=>{var a;if(this.file!==void 0&&r.has(s)){const o=n+1,l=this[s],h=(a=this.file.slots.getSlot(o))==null?void 0:a.serialized;if(l!==h){const d=this.file.slots.getSlot(o);l!==void 0?d!==void 0?d.recieveSerialized(l):this.file.slots.createFromSerialized(l,o):this.file.slots.hasSlot(o)&&this.file.slots.removeSlotAndAnalysis(o)}}})}this.outerHTMLSnapshot=this.outerHTML}getLabel(){return this.loading===!0?M(T.loading):this.label!==void 0?this.label:this.label===void 0&&this.file!==void 0?this.file.fileName:M(T.file)}setLayout(r){this.layout=r,setTimeout(()=>{this.fileProviderRef.value&&this.file&&this.fileProviderRef.value.redraw()},0)}renderNogui(){return f`
            ${this.renderScale()}
            <file-canvas></file-canvas>
            <file-timeline></file-timeline>
            <file-analysis-table ></file-analysis-table>
            <file-analysis-graph></file-analysis-graph>
    `}renderApp(){return f`
        
            <thermal-app
                label="${this.getLabel()}"
                author="${at(this.author)}"
                license="${at(this.license)}"
                showfullscreen="${this.showfullscreen}"
                recorded="${at(this.recorded)}"
            >

                ${this.showlayout?this.renderLayoutSwitch():V}

                ${_a(f`<registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

                <registry-range-full-button slot="bar-pre"></registry-range-full-button>
                <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>
                <file-info-button slot="bar-pre"></file-info-button>
                <file-download-dropdown slot="bar-pre"></file-download-dropdown>
                ${this.hasVisible?f`<registry-opacity-slider  slot="bar-pre"></registry-opacity-slider>`:V}
                `)}

                ${this.showshare?f`<thermal-dialog label="${M(T.share)}" slot="bar-post" class="share">
                    <thermal-button slot="invoker">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z" />
                        </svg>
                    </thermal-button>
                    <div slot="content">
                        <p>${M(T.embedhint)}</p>
                        <h2>1. ${M(T.embedlibrary)} <thermal-button @click="${()=>navigator.clipboard.writeText(`<script src="https://cdn.jsdelivr.net/npm/@labir/embed@${As}/dist/embed.min.js"><\/script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labir/embed@${As}/dist/embed.min.css">`)}">${M(T.copy)}</thermal-button></h2>
                        <pre>&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labir/embed@${As}/dist/embed.min.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@labir/embed@${As}/dist/embed.min.css&quot;&gt;</pre>
                        <h2>2. ${M(T.embedcomponent)} <thermal-button @click="${()=>navigator.clipboard.writeText(this.outerHTMLSnapshot)}">${M(T.copy)}</thermal-button></h2>
                        <pre>${this.outerHTMLSnapshot}</pre>
                    </div>
                </thermal-dialog>`:V}

                ${_a(f`<thermal-dialog label="${M(T.config)}" slot="bar-post">
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
                        ${this.layout==="advanced"||this.layout==="lesson"?this.renderScale():V}
                        ${_a(f`<file-canvas></file-canvas>`)}
                        <file-timeline></file-timeline>
                    </main>
                    <notation-content class="notations"></notation-content>

                    ${this.layout==="advanced"?f`<file-analysis-complex class="complex"></file-abnalysis-complex>`:f`<file-analysis-table class="analysis"></file-analysis-table>
                        <file-analysis-graph class="graph"></file-analysis-graph>`}
                </div>


                ${this.layout==="simple"?f`<aside slot="pre">${this.renderScale()}</aside>`:V}


            </thermal-app>`}renderScale(){return f`${this.showhistogram?_a(f`<registry-histogram expandable="true"></registry-histogram>`):V}
    ${this.showscale?f`<registry-range-slider></registry-range-slider>`:V}
    ${this.showhistogram||this.showscale?f`<registry-ticks-bar placement="top"></registry-ticks-bar>`:V}`}renderOneLayoutItem(r,e,t=!1){return f`<div class="layout-item">
        ${yh(r)}
        ${t?f`<span>${M(T[`layout_${e}`])}</span>`:V}
    </div>`}renderLayoutSwitch(){const r=vd.find(t=>t.key===this.layout);if(!r)return V;const e=vd.map(t=>({...t,action:t.key!==this.layout?()=>this.setLayout(t.key):void 0}));return f`<thermal-dropdown slot="bar-post">
        <div slot="invoker">
            ${this.renderOneLayoutItem(r.icon,r.key,!1)}
        </div>
        
        ${e.map(t=>f`<div 
            slot="option" 
            class="layout-option ${t.action?"current":"available"}"
            @click=${t.action}
        >${this.renderOneLayoutItem(t.icon,t.key,!0)}</div>`)}

    </thermal-dropdown>`}render(){return f`

    <manager-provider 
        slug="${this.UUID}"
        palette="${this.palette}"
    >
        <registry-provider 
            slug="${this.UUID}"
            from="${at(this.from)}"
            to="${at(this.to)}"
            opacity="${this.opacity}"
        >
            <group-provider slug="${this.UUID}">

                <file-provider 
                    ${Ke(this.fileProviderRef)} 
                    thermal="${this.url}"
                    visible="${at(this.visible)}"
                    batch="true"
                    analysis1="${at(this.analysis1)}"
                    analysis2="${at(this.analysis2)}"
                    analysis3="${at(this.analysis3)}"
                    analysis4="${at(this.analysis4)}"
                    analysis5="${at(this.analysis5)}"
                    analysis6="${at(this.analysis6)}"
                    analysis7="${at(this.analysis7)}"
                    autoclear="true"
                >
                    <notation-provider>

                        <slot name="notation" slot="notation"></slot>

                        ${this.layout==="nogui"?this.renderNogui():this.renderApp()}

                    </notation-provider>

                </file-provider>

            </group-provider>
        </registry-provider>
    </manager-provider>`}};Qe.styles=Pe`

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

`;st([m({type:String,reflect:!0})],Qe.prototype,"layout",2);st([m({type:String,reflect:!0})],Qe.prototype,"url",2);st([m({type:String,reflect:!0})],Qe.prototype,"visible",2);st([m({type:String,reflect:!0,attribute:!0})],Qe.prototype,"palette",2);st([m({type:Number,reflect:!0})],Qe.prototype,"from",2);st([m({type:Number,reflect:!0})],Qe.prototype,"to",2);st([m({type:Number,reflect:!0})],Qe.prototype,"opacity",2);st([m()],Qe.prototype,"author",2);st([P()],Qe.prototype,"recorded",2);st([m()],Qe.prototype,"license",2);st([m()],Qe.prototype,"label",2);st([m({type:String,reflect:!1,converter:ft(!0)})],Qe.prototype,"showfullscreen",2);st([m({type:Boolean,reflect:!0,converter:ft(!0)})],Qe.prototype,"showscale",2);st([m({type:Boolean,reflect:!0,converter:ft(!0)})],Qe.prototype,"showhistogram",2);st([m({type:Boolean,reflect:!0,converter:ft(!1)})],Qe.prototype,"showlayout",2);st([m({type:Boolean,reflect:!0,converter:ft(!1)})],Qe.prototype,"showshare",2);st([m({type:String,reflect:!0})],Qe.prototype,"analysis1",2);st([m({type:String,reflect:!0})],Qe.prototype,"analysis2",2);st([m({type:String,reflect:!0})],Qe.prototype,"analysis3",2);st([m({type:String,reflect:!0})],Qe.prototype,"analysis4",2);st([m({type:String,reflect:!0})],Qe.prototype,"analysis5",2);st([m({type:String,reflect:!0})],Qe.prototype,"analysis6",2);st([m({type:String,reflect:!0})],Qe.prototype,"analysis7",2);st([ne({context:gs}),m({reflect:!0,converter:Hs})],Qe.prototype,"locale",2);st([ne({context:vs}),m({type:String,reflect:!0,converter:ft(!0)})],Qe.prototype,"interactiveanalysis",2);st([P()],Qe.prototype,"loading",2);st([P()],Qe.prototype,"hasVisible",2);st([P()],Qe.prototype,"ms",2);st([ne({context:ki})],Qe.prototype,"pngExportWidth",2);st([ne({context:qs})],Qe.prototype,"pngExportWidthSetterContext",2);st([ne({context:Ci})],Qe.prototype,"pngExportFs",2);st([ne({context:Ys})],Qe.prototype,"pngExportFsSetterContext",2);st([P()],Qe.prototype,"outerHTMLSnapshot",2);Qe=st([pe("thermal-file-app")],Qe);var cx=Object.defineProperty,Xr=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&cx(e,t,s),s},Wt;const Ur=(Wt=class extends ot{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=e=>{this.pngExportWidth=e},this.pngExportFs=20,this.pngExportFsSetterContext=e=>{this.pngExportFs=e}}parseFilesProperty(e){return e.split(Wt.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(Wt.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(Wt.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[d,u]=h,p=d.trim(),S=u.trim();switch(p){case Wt.FILE_THERMAL_KEY:s=S;break;case Wt.FILE_VISIBLE_KEY:n=S;break;case Wt.FILE_LABEL_KEY:a=S;break;case Wt.FILE_NOTE_KEY:o=S;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},Wt.FILE_RECORD_SEPARATOR=";",Wt.FILE_SEGMENT_SEPAROATOR="|",Wt.FILE_COMPONENT_SEPAROATOR="~",Wt.FILE_THERMAL_KEY="thermal",Wt.FILE_VISIBLE_KEY="visible",Wt.FILE_LABEL_KEY="label",Wt.FILE_NOTE_KEY="note",Wt);Xr([m({type:String,reflect:!1,attribute:!0,converter:ft(!1)})],Ur.prototype,"showembed");Xr([m({type:String,reflect:!1,attribute:!0,converter:ft(!1)})],Ur.prototype,"showabout");Xr([m({type:String,reflect:!1,attribute:!0,converter:ft(!1)})],Ur.prototype,"showtutorial");Xr([m({type:String,reflect:!1,converter:ft(!0)})],Ur.prototype,"showfullscreen");Xr([m({type:String,reflect:!0,converter:ft(!0)})],Ur.prototype,"showhistogram");Xr([ne({context:vs}),m({type:String,reflect:!0,converter:ft(!0)})],Ur.prototype,"interactiveanalysis");Xr([ne({context:ki})],Ur.prototype,"pngExportWidth");Xr([ne({context:qs})],Ur.prototype,"pngExportWidthSetterContext");Xr([ne({context:Ci})],Ur.prototype,"pngExportFs");Xr([ne({context:Ys})],Ur.prototype,"pngExportFsSetterContext");Xr([ne({context:gs}),m({reflect:!0,converter:Hs})],Ur.prototype,"locale");let dx=Ur;class ux{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof hs)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};i.lrc!==void 0&&(t===void 0?(t=this.group.registry.batch.request(i.lrc,i.png,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.lrc,i.png,this.group,s))})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof hs)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Am(e).getTime():this.grouping==="day"?vl(e).getTime():this.grouping==="week"?ls(e).getTime():this.grouping==="month"?Uc(e).getTime():this.grouping==="year"?Jd(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Rg(e).getTime():this.grouping==="day"?Tg(e).getTime():this.grouping==="week"?Fc(e).getTime():this.grouping==="month"?Ic(e).getTime():this.grouping==="year"?Mg(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:mt(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:mt(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+mt(e,"w")+" of "+mt(e,"yyyy"),info:[Kt.humanDate(ls(e).getTime()),Kt.humanDate(Fc(e).getTime())].join(" - ")}:this.grouping==="month"?{label:mt(e,"MMMM yyyy"),info:[Kt.humanDate(Uc(e).getTime()),Kt.humanDate(Ic(e).getTime())].join(" - ")}:this.grouping==="year"?{label:mt(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?Kt.human(e):this.grouping==="hour"||this.grouping==="day"?mt(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",Kt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var px=Object.defineProperty,fx=Object.getOwnPropertyDescriptor,yt=(r,e,t,i)=>{for(var s=i>1?void 0:i?fx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&px(e,t,s),s};let pt=class extends dx{constructor(){super(...arguments),this.groupRef=Ve(),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new be,this.onColumns=new be,this.preservetime=!0,this.state=0,this.detail=void 0,this.loading=!1}connectedCallback(){super.connectedCallback();const t=Qu(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new ux(this,t),this.onGroupInit.call(this.group)}async load(){this.loading=!0;const r=this.files?this.parseFilesProperty(this.files):[];r.length>0?this.grouper.processParsedFiles(r):this.grouper.processEntries(this.entries.filter(e=>e instanceof Ni)),this.group.files.addListener(this.UUID,e=>{this.loading=!1,e.length<4?this.columns=e.length:this.columns=4})}firstUpdated(r){super.firstUpdated(r),Bs(this),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to}),setTimeout(()=>this.load(),0)}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&(this.log(this.files),this.files&&r.get("files")!==void 0)){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}async showDetail(r,e){this.detail={lrc:r,png:e},this.group.files.removeAllInstances(),this.group.registry.range.reset(),this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.state=1,this.scrollToComponent()}async closeDetail(){delete this.detail,this.detail=void 0,this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.group.registry.range.reset(),this.load(),this.state=0,this.scrollToComponent()}renderGroup(){return f`${this.groups.map(r=>f`<section class="group">
                                        
            <div class="group-files group-files-${this.columns}">
                ${r.files.map(e=>f`<div class="file">
                    <file-mirror .file=${e.instance} autoclear="true">
                        <file-thumbnail
                            .ondetail=${()=>{this.showDetail(e.instance.thermalUrl,e.instance.visibleUrl)}}
                            label=${at(e.label)}
                        ></file-thumbnail>
                    </file-mirror>
                </div>`)}
            </div>
        </section>`)} `}renderDetail(){return this.detail===void 0?V:f`<div class="detail">
            <file-provider thermal="${this.detail.lrc}" visible="${this.detail.png}">
                <file-detail label="${this.label}" .onback=${()=>this.closeDetail()}></file-detail>
            </file-provider>
        </div>`}render(){return f`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}" from="${at(this.from)}" to="${at(this.to)}">

                    <group-provider slug="${this.slug}" autoclear="true" ${Ke(this.groupRef)}>

                        <thermal-app
                            author=${at(this.author)}
                            license=${at(this.license)}
                            showfullscreen="true"
                            label=${at(this.label)}
                        >

                            ${this.loading===!1?f`

                                <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

                                <registry-range-full-button slot="bar-pre"></registry-range-full-button>

                                <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>
                                        

                                ${this.state===0?f`
                                        ${this.grouper.numFiles>0?f`<group-download-dropdown slot="bar-pre"></group-download-dropdown>`:V}
                                        <div slot="bar-pre">
                                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}
                                            ></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${M(T.columns,{num:this.columns})}</div>
                                    </div>

                            <group-analysis-sync-button slot="bar-pre"></group-analysis-sync-button>
                                        `:V}
                                    

                            ${this.showabout===!0?f`<app-info-button slot="bar-pre"></app-info-button>`:V}

                                        `:V}

                            <thermal-dialog label="${M(T.config)}" slot="close">
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

                            ${this.loading===!1?f`
                                    ${this.showhistogram===!0?f`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:V}

                                    <registry-range-slider slot="pre"></registry-range-slider>
                                    <registry-ticks-bar slot="pre"></registry-ticks-bar>
                                `:V}
                            

                            ${this.state===0?f`
                                <group-chart slot="pre"></group-chart>
                            `:V}

                            ${this.loading===!0?f`<thermal-loading message="${M(T.loading)}"></thermal-loading>`:f`<div class="app-content">

                                    <slot></slot>

                                    <group-tool-bar></group-tool-bar>

                                    <div class="app-content-main">
                                    ${this.state===0?this.renderGroup():this.renderDetail()}
                                    </div>
                            
                            </div>

                            ${this.state===0?f`
                                <group-timeline></group-timeline>
                            `:V}
                            `}
                            

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};pt.styles=Pe`


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


    
    `;yt([m({type:String,reflect:!0,attribute:!0})],pt.prototype,"palette",2);yt([m({type:Number,reflect:!0})],pt.prototype,"from",2);yt([m({type:Number,reflect:!0})],pt.prototype,"to",2);yt([m({type:String,reflect:!0})],pt.prototype,"author",2);yt([m({type:String,reflect:!0})],pt.prototype,"label",2);yt([m({type:String,reflect:!1})],pt.prototype,"description",2);yt([m({type:String,reflect:!0})],pt.prototype,"license",2);yt([P(),Si({flatten:!0})],pt.prototype,"entries",2);yt([m({type:String,reflect:!0})],pt.prototype,"slug",2);yt([m()],pt.prototype,"columns",2);yt([m()],pt.prototype,"breakpoint",2);yt([m({type:String,reflect:!0})],pt.prototype,"grouping",2);yt([P()],pt.prototype,"groups",2);yt([m({type:String})],pt.prototype,"files",2);yt([m({type:String,reflect:!0})],pt.prototype,"analysis1",2);yt([m({type:String,reflect:!0})],pt.prototype,"analysis2",2);yt([m({type:String,reflect:!0})],pt.prototype,"analysis3",2);yt([m({type:String,reflect:!0})],pt.prototype,"analysis4",2);yt([m({type:String,reflect:!0})],pt.prototype,"analysis5",2);yt([m({type:String,reflect:!0})],pt.prototype,"analysis6",2);yt([m({type:String,reflect:!0})],pt.prototype,"analysis7",2);yt([m({type:String,reflect:!0,converter:ft(!1)})],pt.prototype,"preservetime",2);yt([P()],pt.prototype,"state",2);yt([P()],pt.prototype,"detail",2);yt([P()],pt.prototype,"loading",2);pt=yt([pe("thermal-group-app")],pt);var is=(r=>(r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(is||{});class fl{constructor(e,t){c(this,"url");c(this,"query");this.api_endpoint=e,this.subfolder=t,this.url=new URL(this.api_endpoint),this.query=this.url.searchParams,this.subfolder!==void 0&&this.query.set("scope",this.subfolder)}setOnly(e){return this.query.set("only",e),this}setExclude(e){return this.query.set("exclude",e),this}setGrid(e){e===!0?this.query.set("grid","true"):this.query.delete("grid")}async info(){return this.fetch()}async folder(e){return this.query.set("folder",e),this.fetch()}async everything(){return this.query.set("everything","true"),this.fetch()}async hours(){return this.query.set("hours","true"),this.fetch()}async days(){return this.query.set("days","true"),this.fetch()}async weeks(){return this.query.set("weeks","true"),this.fetch()}async months(){return this.query.set("months","true"),this.fetch()}async years(){return this.query.set("years","true"),this.fetch()}async grid(e){switch(e){case"hours":return await this.hours();case"days":return await this.days();case"weeks":return await this.days();case"months":return await this.months();case"years":return await this.years();default:return await this.hours()}}async fetch(){return await(await fetch(this.url)).json()}get object(){return this.url}}const gx={lessThanXSeconds:{one:{regular:"méně než 1 sekunda",past:"před méně než 1 sekundou",future:"za méně než 1 sekundu"},few:{regular:"méně než {{count}} sekundy",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekundy"},many:{regular:"méně než {{count}} sekund",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekund"}},xSeconds:{one:{regular:"1 sekunda",past:"před 1 sekundou",future:"za 1 sekundu"},few:{regular:"{{count}} sekundy",past:"před {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"před {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než 1 minuta",past:"před méně než 1 minutou",future:"za méně než 1 minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"1 minuta",past:"před 1 minutou",future:"za 1 minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně 1 hodina",past:"přibližně před 1 hodinou",future:"přibližně za 1 hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"1 hodina",past:"před 1 hodinou",future:"za 1 hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"1 den",past:"před 1 dnem",future:"za 1 den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXWeeks:{one:{regular:"přibližně 1 týden",past:"přibližně před 1 týdnem",future:"přibližně za 1 týden"},few:{regular:"přibližně {{count}} týdny",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdny"},many:{regular:"přibližně {{count}} týdnů",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdnů"}},xWeeks:{one:{regular:"1 týden",past:"před 1 týdnem",future:"za 1 týden"},few:{regular:"{{count}} týdny",past:"před {{count}} týdny",future:"za {{count}} týdny"},many:{regular:"{{count}} týdnů",past:"před {{count}} týdny",future:"za {{count}} týdnů"}},aboutXMonths:{one:{regular:"přibližně 1 měsíc",past:"přibližně před 1 měsícem",future:"přibližně za 1 měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"1 měsíc",past:"před 1 měsícem",future:"za 1 měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně 1 rok",past:"přibližně před 1 rokem",future:"přibližně za 1 rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"1 rok",past:"před 1 rokem",future:"za 1 rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než 1 rok",past:"před více než 1 rokem",future:"za více než 1 rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro 1 rok",past:"skoro před 1 rokem",future:"skoro za 1 rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}},mx=(r,e,t)=>{let i;const s=gx[r];s.type==="other"?i=s.other:e===1?i=s.one:e>1&&e<5?i=s.few:i=s.many;const n=(t==null?void 0:t.addSuffix)===!0,a=t==null?void 0:t.comparison;let o;return n&&a===-1?o=i.past:n&&a===1?o=i.future:o=i.regular,o.replace("{{count}}",String(e))},yx={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},vx={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},bx={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wx={date:Ht({formats:yx,defaultWidth:"full"}),time:Ht({formats:vx,defaultWidth:"full"}),dateTime:Ht({formats:bx,defaultWidth:"full"})},xx=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],Sx={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:r=>{const e=r.getDay();return"'v "+xx[e]+" o' p"},other:"P"},$x=(r,e)=>{const t=Sx[r];return typeof t=="function"?t(e):t},kx={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},Cx={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},_x={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},Px={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},Ex={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},Ax={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},Lx={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},Ox=(r,e)=>Number(r)+".",Dx={ordinalNumber:Ox,era:wt({values:kx,defaultWidth:"wide"}),quarter:wt({values:Cx,defaultWidth:"wide",argumentCallback:r=>r-1}),month:wt({values:_x,defaultWidth:"wide",formattingValues:Px,defaultFormattingWidth:"wide"}),day:wt({values:Ex,defaultWidth:"wide"}),dayPeriod:wt({values:Ax,defaultWidth:"wide",formattingValues:Lx,defaultFormattingWidth:"wide"})},Tx=/^(\d+)\.?/i,Mx=/\d+/i,Rx={narrow:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},Ix={any:[/^p[řr]/i,/^(po|n)/i]},Ux={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},Fx={any:[/1/i,/2/i,/3/i,/4/i]},zx={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},jx={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},Nx={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},Wx={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[úu]t/i,/^st/i,/^[čc]t/i,/^p[áa]/i,/^so/i]},Bx={any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i},Hx={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},Vx={ordinalNumber:Un({matchPattern:Tx,parsePattern:Mx,valueCallback:r=>parseInt(r,10)}),era:xt({matchPatterns:Rx,defaultMatchWidth:"wide",parsePatterns:Ix,defaultParseWidth:"any"}),quarter:xt({matchPatterns:Ux,defaultMatchWidth:"wide",parsePatterns:Fx,defaultParseWidth:"any",valueCallback:r=>r+1}),month:xt({matchPatterns:zx,defaultMatchWidth:"wide",parsePatterns:jx,defaultParseWidth:"any"}),day:xt({matchPatterns:Nx,defaultMatchWidth:"wide",parsePatterns:Wx,defaultParseWidth:"any"}),dayPeriod:xt({matchPatterns:Bx,defaultMatchWidth:"any",parsePatterns:Hx,defaultParseWidth:"any"})},Gx={code:"cs",formatDistance:mx,formatLong:wx,formatRelative:$x,localize:Dx,match:Vx,options:{weekStartsOn:1,firstWeekContainsDate:4}},qx={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},Yx=(r,e,t)=>{let i;const s=qx[r];return typeof s=="string"?i=s:e===1?i=s.one:e===2&&s.two?i=s.two:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"mewn "+i:i+" yn ôl":i},Xx={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Kx={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Zx={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Jx={date:Ht({formats:Xx,defaultWidth:"full"}),time:Ht({formats:Kx,defaultWidth:"full"}),dateTime:Ht({formats:Zx,defaultWidth:"full"})},Qx={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},e2=(r,e,t,i)=>Qx[r],t2={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},r2={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},i2={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},s2={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},n2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},a2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},o2=(r,e)=>{const t=Number(r);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||t===80||t>=100)return t+"fed";return t+"ain"},l2={ordinalNumber:o2,era:wt({values:t2,defaultWidth:"wide"}),quarter:wt({values:r2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:wt({values:i2,defaultWidth:"wide"}),day:wt({values:s2,defaultWidth:"wide"}),dayPeriod:wt({values:n2,defaultWidth:"wide",formattingValues:a2,defaultFormattingWidth:"wide"})},h2=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,c2=/\d+/i,d2={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},u2={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},p2={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},f2={any:[/1/i,/2/i,/3/i,/4/i]},g2={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},m2={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},y2={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},v2={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},b2={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},w2={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},x2={ordinalNumber:Un({matchPattern:h2,parsePattern:c2,valueCallback:r=>parseInt(r,10)}),era:xt({matchPatterns:d2,defaultMatchWidth:"wide",parsePatterns:u2,defaultParseWidth:"any"}),quarter:xt({matchPatterns:p2,defaultMatchWidth:"wide",parsePatterns:f2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:xt({matchPatterns:g2,defaultMatchWidth:"wide",parsePatterns:m2,defaultParseWidth:"any"}),day:xt({matchPatterns:y2,defaultMatchWidth:"wide",parsePatterns:v2,defaultParseWidth:"any"}),dayPeriod:xt({matchPatterns:b2,defaultMatchWidth:"any",parsePatterns:w2,defaultParseWidth:"any"})},S2={code:"cy",formatDistance:Yx,formatLong:Jx,formatRelative:e2,localize:l2,match:x2,options:{weekStartsOn:0,firstWeekContainsDate:1}},bd={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},$2=(r,e,t)=>{let i;const s=t!=null&&t.addSuffix?bd[r].withPreposition:bd[r].standalone;return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:"vor "+i:i},k2={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},C2={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},_2={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},P2={date:Ht({formats:k2,defaultWidth:"full"}),time:Ht({formats:C2,defaultWidth:"full"}),dateTime:Ht({formats:_2,defaultWidth:"full"})},E2={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},A2=(r,e,t,i)=>E2[r],L2={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},O2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Ul={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},D2={narrow:Ul.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Ul.wide},T2={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},M2={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},R2={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},I2=r=>Number(r)+".",U2={ordinalNumber:I2,era:wt({values:L2,defaultWidth:"wide"}),quarter:wt({values:O2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:wt({values:Ul,formattingValues:D2,defaultWidth:"wide"}),day:wt({values:T2,defaultWidth:"wide"}),dayPeriod:wt({values:M2,defaultWidth:"wide",formattingValues:R2,defaultFormattingWidth:"wide"})},F2=/^(\d+)(\.)?/i,z2=/\d+/i,j2={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},N2={any:[/^v/i,/^n/i]},W2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},B2={any:[/1/i,/2/i,/3/i,/4/i]},H2={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},V2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},G2={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},q2={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Y2={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},X2={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},K2={ordinalNumber:Un({matchPattern:F2,parsePattern:z2,valueCallback:r=>parseInt(r)}),era:xt({matchPatterns:j2,defaultMatchWidth:"wide",parsePatterns:N2,defaultParseWidth:"any"}),quarter:xt({matchPatterns:W2,defaultMatchWidth:"wide",parsePatterns:B2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:xt({matchPatterns:H2,defaultMatchWidth:"wide",parsePatterns:V2,defaultParseWidth:"any"}),day:xt({matchPatterns:G2,defaultMatchWidth:"wide",parsePatterns:q2,defaultParseWidth:"any"}),dayPeriod:xt({matchPatterns:Y2,defaultMatchWidth:"wide",parsePatterns:X2,defaultParseWidth:"any"})},Z2={code:"de",formatDistance:$2,formatLong:P2,formatRelative:A2,localize:U2,match:K2,options:{weekStartsOn:1,firstWeekContainsDate:4}},J2={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Q2={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},e5={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},t5={date:Ht({formats:J2,defaultWidth:"full"}),time:Ht({formats:Q2,defaultWidth:"full"}),dateTime:Ht({formats:e5,defaultWidth:"full"})},r5={code:"en-GB",formatDistance:Qd,formatLong:t5,formatRelative:eu,localize:tu,match:ru,options:{weekStartsOn:1,firstWeekContainsDate:4}},i5={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},s5=(r,e,t)=>{let i;const s=i5[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dans "+i:"il y a "+i:i},n5={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},a5={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},o5={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},l5={date:Ht({formats:n5,defaultWidth:"full"}),time:Ht({formats:a5,defaultWidth:"full"}),dateTime:Ht({formats:o5,defaultWidth:"full"})},h5={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},c5=(r,e,t,i)=>h5[r],d5={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},u5={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},p5={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},f5={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},g5={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},m5=(r,e)=>{const t=Number(r),i=e==null?void 0:e.unit;if(t===0)return"0";const s=["year","week","hour","minute","second"];let n;return t===1?n=i&&s.includes(i)?"ère":"er":n="ème",t+n},y5=["MMM","MMMM"],v5={preprocessor:(r,e)=>r.getDate()===1||!e.some(i=>i.isToken&&y5.includes(i.value))?e:e.map(i=>i.isToken&&i.value==="do"?{isToken:!0,value:"d"}:i),ordinalNumber:m5,era:wt({values:d5,defaultWidth:"wide"}),quarter:wt({values:u5,defaultWidth:"wide",argumentCallback:r=>r-1}),month:wt({values:p5,defaultWidth:"wide"}),day:wt({values:f5,defaultWidth:"wide"}),dayPeriod:wt({values:g5,defaultWidth:"wide"})},b5=/^(\d+)(ième|ère|ème|er|e)?/i,w5=/\d+/i,x5={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},S5={any:[/^av/i,/^ap/i]},$5={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},k5={any:[/1/i,/2/i,/3/i,/4/i]},C5={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},_5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},P5={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},E5={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},A5={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},L5={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},O5={ordinalNumber:Un({matchPattern:b5,parsePattern:w5,valueCallback:r=>parseInt(r)}),era:xt({matchPatterns:x5,defaultMatchWidth:"wide",parsePatterns:S5,defaultParseWidth:"any"}),quarter:xt({matchPatterns:$5,defaultMatchWidth:"wide",parsePatterns:k5,defaultParseWidth:"any",valueCallback:r=>r+1}),month:xt({matchPatterns:C5,defaultMatchWidth:"wide",parsePatterns:_5,defaultParseWidth:"any"}),day:xt({matchPatterns:P5,defaultMatchWidth:"wide",parsePatterns:E5,defaultParseWidth:"any"}),dayPeriod:xt({matchPatterns:A5,defaultMatchWidth:"any",parsePatterns:L5,defaultParseWidth:"any"})},D5={code:"fr",formatDistance:s5,formatLong:l5,formatRelative:c5,localize:v5,match:O5,options:{weekStartsOn:1,firstWeekContainsDate:4}};var T5=Object.defineProperty,M5=Object.getOwnPropertyDescriptor,Tt=(r,e,t,i)=>{for(var s=i>1?void 0:i?M5(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&T5(e,t,s),s};const R5={en:r5,fr:D5,de:Z2,cy:S2,cs:Gx};let $t=class extends It{constructor(){super(...arguments),this.palette="jet",this.enablegrouping=!1,this.loadingInfo=!1,this.loadingData=!1,this.only=[],this.state=0,this.by=is.HOURS,this.folders={},this.registryRef=Ve(),this.interactiveAnalysis=!0,this.detail=void 0}connectedCallback(){super.connectedCallback();const r=()=>{this.getBoundingClientRect().top<-50?this.classList.add("is-pinned"):this.classList.remove("is-pinned")};window.addEventListener("scroll",r),window.addEventListener("resize",r)}firstUpdated(r){super.firstUpdated(r),Bs(this)}updated(r){if(super.updated(r),(r.has("url")||r.has("subfolder"))&&this.loadInfo(this.url,this.subfolder),(r.has("only")||r.has("by"))&&this.url!==void 0&&this.loadData(this.only,this.by,this.url,this.subfolder),r.has("folders")){const e=Object.keys(this.folders);e.length===1&&this.actionOpenOneFolder(e[0])}this.registryRef.value&&this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var e;(e=this.registryRef.value)==null||e.registry.range.applyMinmax()})}async showDetail(r,e,t){this.detail={folder:r,lrc:e,png:t},this.state=3,this.resetRegistry(),this.scrollToComponent()}async closeDetail(){switch(delete this.detail,this.detail=void 0,typeof(this.dataMultiple??this.dataOnly)){case"undefined":this.state=0;break;case typeof this.dataOnly:this.state=1;break;case typeof this.dataMultiple:this.state=2;break}this.scrollToComponent()}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}getApiUrl(r,e){return e!==void 0?`${r}?subfolder="${e}"`:r}async loadInfo(r,e){this.loadingInfo=!0;try{const i=await new fl(r,e).info();this.info=i,this.folders=i.folders,this.loadingInfo=!1}catch{this.error="There was an error loading info"}}async loadDataOne(r,e,t){this.loadingData=!1,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=await new fl(e,t).folder(r);this.log("folder",r,s),this.scrollToComponent(),this.dataOnly=s,this.loadingData=!1,this.registryRef.value&&this.registryRef.value.registry.groups.addListener(this.UUID,n=>{n.forEach(a=>a.files.addListener(this.UUID,o=>{o[0]&&a.analysisSync.turnOn(o[0])}))})}async loadDataMultiple(r,e,t,i){var a;this.loadingData=!0,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=new fl(t,i);s.setOnly(r.join(",")),s.setGrid(!0);const n=await s.grid(e);this.scrollToComponent(),this.dataMultiple=n,this.loadingData=!1,(a=this.registryRef.value)==null||a.registry.groups.removeListener(this.UUID)}async loadData(r,e,t,i){r.length>1?this.loadDataMultiple(r,e,t,i):r.length===1&&this.loadDataOne(r[0],t,i)}renderMainScreen(){return f`
<group-provider class="screen screen-main" autoclear="true" slug="main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(r=>f`
        <button class="folder" @click=${()=>this.actionOpenOneFolder(r.folder)}>

            <div class="folder-header">
                <div class="folder-header-text">
                    <h1>${r.name}</h1>
                    ${r.description!==void 0?f`<p>${r.description}</p>`:V}
                    <div>${M(T.numfiles,{num:r.lrc_count})}</div>
                </div>
                <div class="folder-header-icon">
                    ${r.lrc_count>1?f`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>`:f`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>`}
                </div>
            </div>

            <file-provider thermal="${r.preview.lrc}" batch="true" autoclear="true">
                <file-canvas style="pointer-events: none;"></file-canvas>
                <div class="open-button">
                    <thermal-button variant="primary">${M(T.open)}</thermal-button>
                </div>
            </file-provider>
            
        </button>
            `)}
    </nav>


</group-provider>

        `}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.forEveryInstance(r=>r.unmountFromDom()),this.registryRef.value.registry.reset(),this.registryRef.value.registry.minmax.reset(),this.registryRef.value.registry.range.reset(),this.registryRef.value.registry.opacity.imposeOpacity(1))}actionCloseToHomepage(){this.state=0,this.only=[],delete this.dataOnly,delete this.dataMultiple,this.resetRegistry()}actionOpenOneFolder(r){!this.only.includes(r)&&Object.keys(this.folders).includes(r)&&(this.state=1,this.only=[r],this.resetRegistry())}actionToggleFolder(r){this.only.includes(r)?(this.only=this.only.filter(e=>e!==r),this.resetRegistry(),this.only.length===0?this.actionCloseToHomepage():this.only.length===1?this.state=1:this.only.length>1&&(this.state=2)):Object.keys(this.folders).includes(r)&&(this.only=[...this.only,r],this.resetRegistry(),this.only.length>0&&(this.state=2))}actionShowEverything(){this.only=Object.keys(this.folders),this.resetRegistry(),this.state=2}renderLoading(r){return f`<div class="loading">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
            <div>${r}</div>
        </div>`}renderOne(){return this.loadingData||this.dataOnly===void 0?this.renderLoading("Loading folder data"):f`
            <group-provider slug="${this.dataOnly.info.folder}">

                ${Object.values(this.dataOnly.files).map(r=>f`<div>
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
        `}renderMultiple(){if(this.loadingData||this.dataMultiple===void 0||this.dataMultiple.data===void 0)return this.renderLoading("Loading selected folders' data");const r=this.dataMultiple.data,t=Object.entries(Object.values(Object.values(this.dataMultiple.data))[0]).map(([s,n])=>({name:n.name,key:s})).length,i=Object.keys(Object.values(r)[0]).sort((s,n)=>s<n?-1:1);return f`

            <table class="affected">

                <tbody>
                ${Object.entries(r).map(([s,n])=>{let a;const o=parseInt(s);return this.by===is.HOURS?a=mt(o*1e3,"d. M. yyyy - HH")+":00":this.by===is.DAYS?a=mt(o*1e3,"d. M. yyyy"):this.by===is.WEEKS?a=mt(o*1e3,"wo"):this.by===is.MONTHS?a=mt(o*1e3,"LLLL yyyy",{locale:R5[this._locale]}):this.by===is.YEARS&&(a=mt(o*1e3,"yyyy")),f`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${t}">
                                <div>
                                    <h2>${a}</h2>
                                    <group-provider slug="${s}" class="buttons">
                                        <group-range-propagator></group-range-propagator>

                                        <file-dropdown label="${M(T.download).toLowerCase()}">
                                            <group-download-buttons label=${a}></group-download-buttons>
                                        </file-dropdown>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>
                        <group-provider slug="${s}" class="row">
                            ${i.map(l=>{const h=n[l];return f`<td class="cell-content" data-name="${h.name}">
                                    ${Object.values(h.files).map(d=>f`
                                    <div style="background-color: var(--thermal-background); padding: var(--thermal-gap); border-radius: var(--thermal-radius);">
                                        <file-provider
                                            batch="true"
                                            thermal="${d.lrc}"
                                            visible="${d.png}"
                                        >
                                            
                                            <file-thumbnail
                                                grouping="${this.by}"
                                                .ondetail=${()=>{this.showDetail(h.name,d.lrc,d.png)}}
                                            ></file-thumbnail>
                                        </file-provider>
                                    </div>
                                `)}
                                    
                                </td>`})}
                        </group-provider>
                    `})}
                </tbody>
            
            </table>

        `}renderTimeToggle(){const r=["hours","days","weeks","months","years"];return f`
<thermal-dropdown>
    <span slot="invoker">${M(T[`by${this.by}`])}</span>
    ${r.map(e=>f`
    <div slot="option" @click=${()=>this.by=e}>
        <thermal-button>${M(T[`by${e}`])}</thermal-button>
    </div>
    `)}
</thermal-dropdown>
        `}renderInfo(){if(this.state===0)return V;let r;if(this.state===1){const e=this.folders[this.only[0]],t=Object.values(this.folders).filter(n=>n.folder!==e.folder),i=t.length>0?f`<thermal-dropdown variant="background" class="selector">
                    <span slot="invoker">${e.name}</span>

                    ${t.map(n=>f`<div slot="option" @click=${()=>this.actionOpenOneFolder(n.folder)}>
                        <thermal-button>${n.name}</thermal-button>
                    </div>`)}

                </thermal-dropdown>`:f`<thermal-button variant="background" interactive="false">${e.name}</thermal-button>`,s=t.length>0?t.map((n,a)=>f`<thermal-button @click=${()=>this.actionToggleFolder(n.folder)}>
                    <span class="button-inline-icon">+</span> ${n.name}
                </thermal-button> ${a!==t.length-1?` ${M(T.or)} `:V}`):f`<span>${M(T.remotefoldersbrowseraddfolderhint)}</span>`;r=f`${M(T.showingfolder)} ${i}. 
            
            ${t.length>0?f` ${M(T.doyouwanttoadd)} ${s}?`:s}
            `}else if(this.state===2){const e=[],t=[];Object.values(this.folders).forEach(i=>{this.only.includes(i.folder)?e.push(i):t.push(i)}),r=f`

                ${M(T.showingfolders)}
                ${e.map((i,s)=>f`<thermal-button 
                    title="${M(T.remove)}" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(i.folder)}
                >
                    ${i.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${s!==e.length-1?` ${M(T.and)} `:V}`)}
                ${M(T.groupped)} ${this.renderTimeToggle()}.
            

            ${t.length>0?f`${M(T.youmayalsoadd)} ${t.map((i,s)=>f`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(i.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${i.name}
                    </thermal-button>
                    ${s!==t.length-1?` ${M(T.or)} `:V}
                `)}.`:V}

            `}return r===void 0?V:f`<div class="info">
            ${r}
        </div>`}renderBrowser(){return f`<section>
            ${this.state===1?this.renderOne():V}
            ${this.state===2?this.renderMultiple():V}
            ${this.state===3?this.renderDetail():V}
        </section>`}renderDetail(){var r,e;return this.detail===void 0?this.renderLoading("Loading the IR image"):f`
        <group-provider slug="detail" autoclear="true">
            <file-provider thermal="${(r=this.detail)==null?void 0:r.lrc}" visible="${(e=this.detail)==null?void 0:e.png}" batch="true" autoclear="true">
                <article class="detail">
                    <header class="detail-header">
                        <thermal-button @click=${()=>this.closeDetail()} variant="foreground">${M(T.close)}</thermal-button>

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
        `}renderApp(){return this.info===void 0?this.renderLoading(M(T.loading)):this.state===0?this.renderMainScreen():this.renderBrowser()}renderHeader(){return this.state===0?V:f`

            <registry-range-full-button slot="bar-pre"></registry-range-full-button>
            <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>

            ${this.state===1&&this.dataOnly!==void 0?f`<group-provider slug="${this.dataOnly.info.folder}" slot="bar-pre">
                    <group-download-dropdown></group-download-dropdown>
                </group-provider>`:V}
            <registry-opacity-slider slot="bar-pre"></registry-opacity-slider>
            <group-tool-buttons showhint="false" showpopup="true" slot="bar-pre"></group-tool-buttons>       
        `}renderHistogram(){return this.state===0?V:f`<registry-histogram expandable="true"></registry-histogram>
        <registry-range-slider></registry-range-slider>
        <registry-ticks-bar></registry-ticks-bar>
        
        <nav id="graf">
        ${this.dataOnly!==void 0?f`<group-provider slug="${this.dataOnly.info.folder}">

                    <div style="width:100%">
                        <group-chart></group-chart>
                    </div>

                </group-provider>`:V}
        </nav>
        `}renderTableHeader(){if(this.state!==2)return V;const r=Object.values(this.folders).filter(e=>this.only.includes(e.folder));return f`<table class="affected">
                <thead>
                    <tr>
                        ${r.map(e=>f`<th>
                            <div class="cell-header">
                                ${e.name}
                            </div>
                        </th>`)}
                    </tr>
                </thead>
            </table>
            `}render(){let r=M(T.remotefoldersbrowser),e;return this.info===void 0?r=M(T.loading)+"...":Object.keys(this.folders).length===1&&this.label?r=this.label:this.state===0&&this.label?r=this.label:this.state!==0&&(r=M(T.close),e=()=>this.actionCloseToHomepage()),f`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${Ke(this.registryRef)}>

        <thermal-app 
            author="${at(this.author)}" 
            license="${at(this.license)}" 
            showfullscreen="true" 
            label=${r} 
            .onlabel=${at(e)}
        >

            ${this.state!==0?f`<registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>`:V}

            ${this.state===0&&Object.keys(this.folders).length>1?f`<thermal-button slot="bar-pre" @click=${()=>{this.actionShowEverything()}}>${M(T.showeverything)}</thermal-button>`:V}

            ${this.renderHeader()}
            
            <div slot="pre">
                ${this.renderInfo()}
                ${this.renderHistogram()}
                ${this.renderTableHeader()}
            </div>
        
            <div class=${yi({screen:!0,"screen-main":this.state===0,"screen-browser":[1,2].includes(this.state),"screen-browser__one":this.state===1,"screen-browser__multiple":this.state===2,"screen-detail":this.state===3})}>
                ${this.renderApp()}
            </div>

             <thermal-dialog label="${M(T.config)}" slot="close">
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
        
        `}};$t.styles=Pe`

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


    `;Tt([m({type:String,reflect:!0})],$t.prototype,"label",2);Tt([m({type:String,reflect:!0})],$t.prototype,"license",2);Tt([m({type:String,reflect:!0})],$t.prototype,"author",2);Tt([m({type:String,reflect:!0,attribute:!0})],$t.prototype,"palette",2);Tt([m({type:Boolean,reflect:!0,converter:ft(!0)})],$t.prototype,"enablegrouping",2);Tt([m({type:String,reflect:!0})],$t.prototype,"url",2);Tt([m({type:String,reflect:!0})],$t.prototype,"subfolder",2);Tt([P()],$t.prototype,"info",2);Tt([P()],$t.prototype,"error",2);Tt([P()],$t.prototype,"loadingInfo",2);Tt([P()],$t.prototype,"loadingData",2);Tt([P()],$t.prototype,"only",2);Tt([P()],$t.prototype,"state",2);Tt([P()],$t.prototype,"by",2);Tt([P()],$t.prototype,"dataOnly",2);Tt([P()],$t.prototype,"dataMultiple",2);Tt([P()],$t.prototype,"folders",2);Tt([ne({context:vs})],$t.prototype,"interactiveAnalysis",2);Tt([P()],$t.prototype,"detail",2);Tt([ne({context:gs}),m({reflect:!0,converter:Hs})],$t.prototype,"locale",2);$t=Tt([pe("remote-browser-app")],$t);var I5=Object.defineProperty,U5=(r,e,t)=>e in r?I5(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,je=(r,e,t)=>U5(r,typeof e!="symbol"?e+"":e,t),Fl;(function(r){r.csv="text/csv",r.tsv="text/tab-separated-values",r.plain="text/plain"})(Fl||(Fl={}));Fl.csv;var F5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function z5(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var j5={exports:{}};(function(r){(function(e){var t=j(),i=K(),s=G(),n=ie(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:d,toJpeg:u,toBlob:p,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(v,b){return b=b||{},S(b),Promise.resolve(v).then(function(E){return D(E,b.filter,!0)}).then(L).then(X).then(w).then(function(E){return O(E,b.width||t.width(v),b.height||t.height(v))});function w(E){return b.bgcolor&&(E.style.backgroundColor=b.bgcolor),b.width&&(E.style.width=b.width+"px"),b.height&&(E.style.height=b.height+"px"),b.style&&Object.keys(b.style).forEach(function(N){E.style[N]=b.style[N]}),E}}function h(v,b){return y(v,b||{}).then(function(w){return w.getContext("2d").getImageData(0,0,t.width(v),t.height(v)).data})}function d(v,b){return y(v,b||{}).then(function(w){return w.toDataURL()})}function u(v,b){return b=b||{},y(v,b).then(function(w){return w.toDataURL("image/jpeg",b.quality||1)})}function p(v,b){return y(v,b||{}).then(t.canvasToBlob)}function S(v){typeof v.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=v.imagePlaceholder,typeof v.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=v.cacheBust}function y(v,b){return l(v,b).then(t.makeImage).then(t.delay(100)).then(function(E){var N=w(v);return N.getContext("2d").drawImage(E,0,0),N});function w(E){var N=document.createElement("canvas");if(N.width=b.width||t.width(E),N.height=b.height||t.height(E),b.bgcolor){var R=N.getContext("2d");R.fillStyle=b.bgcolor,R.fillRect(0,0,N.width,N.height)}return N}}function D(v,b,w){if(!w&&b&&!b(v))return Promise.resolve();return Promise.resolve(v).then(E).then(function(F){return N(v,F,b)}).then(function(F){return R(v,F)});function E(F){return F instanceof HTMLCanvasElement?t.makeImage(F.toDataURL()):F.cloneNode(!1)}function N(F,U,J){var he=F.childNodes;if(he.length===0)return Promise.resolve(U);return C(U,t.asArray(he),J).then(function(){return U});function C(Z,ue,ae){var $e=Promise.resolve();return ue.forEach(function(Te){$e=$e.then(function(){return D(Te,ae)}).then(function(Re){Re&&Z.appendChild(Re)})}),$e}}function R(F,U){if(!(U instanceof Element))return U;return Promise.resolve().then(J).then(he).then(C).then(Z).then(function(){return U});function J(){ue(window.getComputedStyle(F),U.style);function ue(ae,$e){ae.cssText?$e.cssText=ae.cssText:Te(ae,$e);function Te(Re,Ue){t.asArray(Re).forEach(function(q){Ue.setProperty(q,Re.getPropertyValue(q),Re.getPropertyPriority(q))})}}}function he(){[":before",":after"].forEach(function(ae){ue(ae)});function ue(ae){var $e=window.getComputedStyle(F,ae),Te=$e.getPropertyValue("content");if(Te===""||Te==="none")return;var Re=t.uid();U.className=U.className+" "+Re;var Ue=document.createElement("style");Ue.appendChild(q(Re,ae,$e)),U.appendChild(Ue);function q(ee,ve,xe){var Ne="."+ee+":"+ve,Fe=xe.cssText?hr(xe):wr(xe);return document.createTextNode(Ne+"{"+Fe+"}");function hr(Ge){var vt=Ge.getPropertyValue("content");return Ge.cssText+" content: "+vt+";"}function wr(Ge){return t.asArray(Ge).map(vt).join("; ")+";";function vt(Yt){return Yt+": "+Ge.getPropertyValue(Yt)+(Ge.getPropertyPriority(Yt)?" !important":"")}}}}}function C(){F instanceof HTMLTextAreaElement&&(U.innerHTML=F.value),F instanceof HTMLInputElement&&U.setAttribute("value",F.value)}function Z(){U instanceof SVGElement&&(U.setAttribute("xmlns","http://www.w3.org/2000/svg"),U instanceof SVGRectElement&&["width","height"].forEach(function(ue){var ae=U.getAttribute(ue);ae&&U.style.setProperty(ue,ae)}))}}}function L(v){return s.resolveAll().then(function(b){var w=document.createElement("style");return v.appendChild(w),w.appendChild(document.createTextNode(b)),v})}function X(v){return n.inlineAll(v).then(function(){return v})}function O(v,b,w){return Promise.resolve(v).then(function(E){return E.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(E)}).then(t.escapeXhtml).then(function(E){return'<foreignObject x="0" y="0" width="100%" height="100%">'+E+"</foreignObject>"}).then(function(E){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+b+'" height="'+w+'">'+E+"</svg>"}).then(function(E){return"data:image/svg+xml;charset=utf-8,"+E})}function j(){return{escape:Z,parseExtension:b,mimeType:w,dataAsUrl:C,isDataUrl:E,canvasToBlob:R,resolveUrl:F,getAndEncode:he,uid:U(),delay:ue,asArray:ae,escapeXhtml:$e,makeImage:J,width:Te,height:Re};function v(){var q="application/font-woff",ee="image/jpeg";return{woff:q,woff2:q,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ee,jpeg:ee,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function b(q){var ee=/\.([^\.\/]*?)$/g.exec(q);return ee?ee[1]:""}function w(q){var ee=b(q).toLowerCase();return v()[ee]||""}function E(q){return q.search(/^(data:)/)!==-1}function N(q){return new Promise(function(ee){for(var ve=window.atob(q.toDataURL().split(",")[1]),xe=ve.length,Ne=new Uint8Array(xe),Fe=0;Fe<xe;Fe++)Ne[Fe]=ve.charCodeAt(Fe);ee(new Blob([Ne],{type:"image/png"}))})}function R(q){return q.toBlob?new Promise(function(ee){q.toBlob(ee)}):N(q)}function F(q,ee){var ve=document.implementation.createHTMLDocument(),xe=ve.createElement("base");ve.head.appendChild(xe);var Ne=ve.createElement("a");return ve.body.appendChild(Ne),xe.href=ee,Ne.href=q,Ne.href}function U(){var q=0;return function(){return"u"+ee()+q++;function ee(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function J(q){return new Promise(function(ee,ve){var xe=new Image;xe.onload=function(){ee(xe)},xe.onerror=ve,xe.src=q})}function he(q){var ee=3e4;return o.impl.options.cacheBust&&(q+=(/\?/.test(q)?"&":"?")+new Date().getTime()),new Promise(function(ve){var xe=new XMLHttpRequest;xe.onreadystatechange=hr,xe.ontimeout=wr,xe.responseType="blob",xe.timeout=ee,xe.open("GET",q,!0),xe.send();var Ne;if(o.impl.options.imagePlaceholder){var Fe=o.impl.options.imagePlaceholder.split(/,/);Fe&&Fe[1]&&(Ne=Fe[1])}function hr(){if(xe.readyState===4){if(xe.status!==200){Ne?ve(Ne):Ge("cannot fetch resource: "+q+", status: "+xe.status);return}var vt=new FileReader;vt.onloadend=function(){var Yt=vt.result.split(/,/)[1];ve(Yt)},vt.readAsDataURL(xe.response)}}function wr(){Ne?ve(Ne):Ge("timeout of "+ee+"ms occured while fetching resource: "+q)}function Ge(vt){console.error(vt),ve("")}})}function C(q,ee){return"data:"+ee+";base64,"+q}function Z(q){return q.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function ue(q){return function(ee){return new Promise(function(ve){setTimeout(function(){ve(ee)},q)})}}function ae(q){for(var ee=[],ve=q.length,xe=0;xe<ve;xe++)ee.push(q[xe]);return ee}function $e(q){return q.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Te(q){var ee=Ue(q,"border-left-width"),ve=Ue(q,"border-right-width");return q.scrollWidth+ee+ve}function Re(q){var ee=Ue(q,"border-top-width"),ve=Ue(q,"border-bottom-width");return q.scrollHeight+ee+ve}function Ue(q,ee){var ve=window.getComputedStyle(q).getPropertyValue(ee);return parseFloat(ve.replace("px",""))}}function K(){var v=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:N,shouldProcess:b,impl:{readUrls:w,inline:E}};function b(R){return R.search(v)!==-1}function w(R){for(var F=[],U;(U=v.exec(R))!==null;)F.push(U[1]);return F.filter(function(J){return!t.isDataUrl(J)})}function E(R,F,U,J){return Promise.resolve(F).then(function(C){return U?t.resolveUrl(C,U):C}).then(J||t.getAndEncode).then(function(C){return t.dataAsUrl(C,t.mimeType(F))}).then(function(C){return R.replace(he(F),"$1"+C+"$3")});function he(C){return new RegExp(`(url\\(['"]?)(`+t.escape(C)+`)(['"]?\\))`,"g")}}function N(R,F,U){if(J())return Promise.resolve(R);return Promise.resolve(R).then(w).then(function(he){var C=Promise.resolve(R);return he.forEach(function(Z){C=C.then(function(ue){return E(ue,Z,F,U)})}),C});function J(){return!b(R)}}}function G(){return{resolveAll:v,impl:{readAll:b}};function v(){return b().then(function(w){return Promise.all(w.map(function(E){return E.resolve()}))}).then(function(w){return w.join(`
`)})}function b(){return Promise.resolve(t.asArray(document.styleSheets)).then(E).then(w).then(function(R){return R.map(N)});function w(R){return R.filter(function(F){return F.type===CSSRule.FONT_FACE_RULE}).filter(function(F){return i.shouldProcess(F.style.getPropertyValue("src"))})}function E(R){var F=[];return R.forEach(function(U){try{t.asArray(U.cssRules||[]).forEach(F.push.bind(F))}catch(J){console.log("Error while reading CSS rules from "+U.href,J.toString())}}),F}function N(R){return{resolve:function(){var F=(R.parentStyleSheet||{}).href;return i.inlineAll(R.cssText,F)},src:function(){return R.style.getPropertyValue("src")}}}}}function ie(){return{inlineAll:b,impl:{newImage:v}};function v(w){return{inline:E};function E(N){return t.isDataUrl(w.src)?Promise.resolve():Promise.resolve(w.src).then(N||t.getAndEncode).then(function(R){return t.dataAsUrl(R,t.mimeType(w.src))}).then(function(R){return new Promise(function(F,U){w.onload=F,w.onerror=U,w.src=R})})}}function b(w){if(!(w instanceof Element))return Promise.resolve(w);return E(w).then(function(){return w instanceof HTMLImageElement?v(w).inline():Promise.all(t.asArray(w.childNodes).map(function(N){return b(N)}))});function E(N){var R=N.style.getPropertyValue("background");return R?i.inlineAll(R).then(function(F){N.style.setProperty("background",F,N.style.getPropertyPriority("background"))}).then(function(){return N}):Promise.resolve(N)}}}})()})(j5);var zl={exports:{}};const N5={},W5=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),Ps=z5(W5);/**
 * workerpool.js
 * https://github.com/josdejong/workerpool
 *
 * Offload tasks to a pool of workers on node.js and in the browser.
 *
 * @version 9.3.3
 * @date    2025-06-27
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
 */(function(r,e){(function(t,i){i(e)})(F5,function(t){var i={},s={exports:{}};(function(A){var H=function(ge){return typeof ge<"u"&&ge.versions!=null&&ge.versions.node!=null&&ge+""=="[object process]"};A.exports.isNode=H,A.exports.platform=typeof process<"u"&&H(process)?"node":"browser";var W=A.exports.platform==="node"&&Ps;A.exports.isMainThread=A.exports.platform==="node"?(!W||W.isMainThread)&&!process.connected:typeof Window<"u",A.exports.cpus=A.exports.platform==="browser"?self.navigator.hardwareConcurrency:Ps.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function A(le,Ee){var k=this;if(!(this instanceof A))throw new SyntaxError("Constructor must be called with the new operator");if(typeof le!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Ie=[],_e=[];this.resolved=!1,this.rejected=!1,this.pending=!0,this[Symbol.toStringTag]="Promise";var Ye=function(z,_){Ie.push(z),_e.push(_)};this.then=function(z,_){return new A(function(te,ce){var Ae=z?H(z,te,ce):te,nt=_?H(_,te,ce):ce;Ye(Ae,nt)},k)};var et=function(z){return k.resolved=!0,k.rejected=!1,k.pending=!1,Ie.forEach(function(_){_(z)}),Ye=function(_,te){_(z)},et=B=function(){},k},B=function(z){return k.resolved=!1,k.rejected=!0,k.pending=!1,_e.forEach(function(_){_(z)}),Ye=function(_,te){te(z)},et=B=function(){},k};this.cancel=function(){return Ee?Ee.cancel():B(new W),k},this.timeout=function(z){if(Ee)Ee.timeout(z);else{var _=setTimeout(function(){B(new ge("Promise timed out after "+z+" ms"))},z);k.always(function(){clearTimeout(_)})}return k},le(function(z){et(z)},function(z){B(z)})}function H(le,Ee,k){return function(Ie){try{var _e=le(Ie);_e&&typeof _e.then=="function"&&typeof _e.catch=="function"?_e.then(Ee,k):Ee(_e)}catch(Ye){k(Ye)}}}A.prototype.catch=function(le){return this.then(null,le)},A.prototype.always=function(le){return this.then(le,le)},A.prototype.finally=function(le){var Ee=this,k=function(){return new A(function(Ie){return Ie()}).then(le).then(function(){return Ee})};return this.then(k,k)},A.all=function(le){return new A(function(Ee,k){var Ie=le.length,_e=[];Ie?le.forEach(function(Ye,et){Ye.then(function(B){_e[et]=B,Ie--,Ie==0&&Ee(_e)},function(B){Ie=0,k(B)})}):Ee(_e)})},A.defer=function(){var le={};return le.promise=new A(function(Ee,k){le.resolve=Ee,le.reject=k}),le};function W(le){this.message=le||"promise cancelled",this.stack=new Error().stack}W.prototype=new Error,W.prototype.constructor=Error,W.prototype.name="CancellationError",A.CancellationError=W;function ge(le){this.message=le||"timeout exceeded",this.stack=new Error().stack}return ge.prototype=new Error,ge.prototype.constructor=Error,ge.prototype.name="TimeoutError",A.TimeoutError=ge,a.Promise=A,a}function h(A,H){(H==null||H>A.length)&&(H=A.length);for(var W=0,ge=Array(H);W<H;W++)ge[W]=A[W];return ge}function d(A,H){var W=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(!W){if(Array.isArray(A)||(W=X(A))||H){W&&(A=W);var ge=0,le=function(){};return{s:le,n:function(){return ge>=A.length?{done:!0}:{done:!1,value:A[ge++]}},e:function(_e){throw _e},f:le}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ee,k=!0,Ie=!1;return{s:function(){W=W.call(A)},n:function(){var _e=W.next();return k=_e.done,_e},e:function(_e){Ie=!0,Ee=_e},f:function(){try{k||W.return==null||W.return()}finally{if(Ie)throw Ee}}}}function u(A,H,W){return(H=D(H))in A?Object.defineProperty(A,H,{value:W,enumerable:!0,configurable:!0,writable:!0}):A[H]=W,A}function p(A,H){var W=Object.keys(A);if(Object.getOwnPropertySymbols){var ge=Object.getOwnPropertySymbols(A);H&&(ge=ge.filter(function(le){return Object.getOwnPropertyDescriptor(A,le).enumerable})),W.push.apply(W,ge)}return W}function S(A){for(var H=1;H<arguments.length;H++){var W=arguments[H]!=null?arguments[H]:{};H%2?p(Object(W),!0).forEach(function(ge){u(A,ge,W[ge])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(W)):p(Object(W)).forEach(function(ge){Object.defineProperty(A,ge,Object.getOwnPropertyDescriptor(W,ge))})}return A}function y(A,H){if(typeof A!="object"||!A)return A;var W=A[Symbol.toPrimitive];if(W!==void 0){var ge=W.call(A,H);if(typeof ge!="object")return ge;throw new TypeError("@@toPrimitive must return a primitive value.")}return(H==="string"?String:Number)(A)}function D(A){var H=y(A,"string");return typeof H=="symbol"?H:H+""}function L(A){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},L(A)}function X(A,H){if(A){if(typeof A=="string")return h(A,H);var W={}.toString.call(A).slice(8,-1);return W==="Object"&&A.constructor&&(W=A.constructor.name),W==="Map"||W==="Set"?Array.from(A):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?h(A,H):void 0}}var O={exports:{}},j={},K;function G(){return K||(K=1,j.validateOptions=function(A,H,W){if(A){var ge=A?Object.keys(A):[],le=ge.find(function(k){return!H.includes(k)});if(le)throw new Error('Object "'+W+'" contains an unknown option "'+le+'"');var Ee=H.find(function(k){return Object.prototype[k]&&!ge.includes(k)});if(Ee)throw new Error('Object "'+W+'" contains an inherited option "'+Ee+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return A}},j.workerOptsNames=["credentials","name","type"],j.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],j.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),j}var ie,v;function b(){return v||(v=1,ie=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0,this[Symbol.toStringTag]="Promise";var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return new i((function(e,n){o.then(e,n),r.then(e,n)})).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ie}var w;function E(){if(w)return O.exports;w=1;var A=l(),H=A.Promise,W=n,ge=G(),le=ge.validateOptions,Ee=ge.forkOptsNames,k=ge.workerThreadOptsNames,Ie=ge.workerOptsNames,_e="__workerpool-terminate__",Ye="__workerpool-cleanup__";function et(){var se=z();if(!se)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return se}function B(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":L(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function z(){try{return Ps}catch(se){if(L(se)==="object"&&se!==null&&se.code==="MODULE_NOT_FOUND")return null;throw se}}function _(){if(W.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var se=new Blob([b()],{type:"text/javascript"});return window.URL.createObjectURL(se)}else return __dirname+"/worker.js"}function te(se,me){if(me.workerType==="web")return B(),ce(se,me.workerOpts,Worker);if(me.workerType==="thread")return I=et(),Ae(se,I,me);if(me.workerType==="process"||!me.workerType)return nt(se,tt(me),Ps);if(W.platform==="browser")return B(),ce(se,me.workerOpts,Worker);var I=z();return I?Ae(se,I,me):nt(se,tt(me),Ps)}function ce(se,me,I){le(me,Ie,"workerOpts");var re=new I(se,me);return re.isBrowserWorker=!0,re.on=function(fe,ke){this.addEventListener(fe,function(Oe){ke(Oe.data)})},re.send=function(fe,ke){this.postMessage(fe,ke)},re}function Ae(se,me,I){var re,fe;le(I==null?void 0:I.workerThreadOpts,k,"workerThreadOpts");var ke=new me.Worker(se,S({stdout:(re=I==null?void 0:I.emitStdStreams)!==null&&re!==void 0?re:!1,stderr:(fe=I==null?void 0:I.emitStdStreams)!==null&&fe!==void 0?fe:!1},I==null?void 0:I.workerThreadOpts));return ke.isWorkerThread=!0,ke.send=function(Oe,ye){this.postMessage(Oe,ye)},ke.kill=function(){return this.terminate(),!0},ke.disconnect=function(){this.terminate()},I!=null&&I.emitStdStreams&&(ke.stdout.on("data",function(Oe){return ke.emit("stdout",Oe)}),ke.stderr.on("data",function(Oe){return ke.emit("stderr",Oe)})),ke}function nt(se,me,I){le(me.forkOpts,Ee,"forkOpts");var re=I.fork(se,me.forkArgs,me.forkOpts),fe=re.send;return re.send=function(ke){return fe.call(re,ke)},me.emitStdStreams&&(re.stdout.on("data",function(ke){return re.emit("stdout",ke)}),re.stderr.on("data",function(ke){return re.emit("stderr",ke)})),re.isChildProcess=!0,re}function tt(se){se=se||{};var me=process.execArgv.join(" "),I=me.indexOf("--inspect")!==-1,re=me.indexOf("--debug-brk")!==-1,fe=[];return I&&(fe.push("--inspect="+se.debugPort),re&&fe.push("--debug-brk")),process.execArgv.forEach(function(ke){ke.indexOf("--max-old-space-size")>-1&&fe.push(ke)}),Object.assign({},se,{forkArgs:se.forkArgs,forkOpts:Object.assign({},se.forkOpts,{execArgv:(se.forkOpts&&se.forkOpts.execArgv||[]).concat(fe),stdio:se.emitStdStreams?"pipe":void 0})})}function _t(se){for(var me=new Error(""),I=Object.keys(se),re=0;re<I.length;re++)me[I[re]]=se[I[re]];return me}function lt(se,me){Object.values(se.processing).forEach(function(I){var re;return I==null||(re=I.options)===null||re===void 0?void 0:re.on(me)}),Object.values(se.tracking).forEach(function(I){var re;return I==null||(re=I.options)===null||re===void 0?void 0:re.on(me)})}function bt(se,me){var I=this,re=me||{};this.script=se||_(),this.worker=te(this.script,re),this.debugPort=re.debugPort,this.forkOpts=re.forkOpts,this.forkArgs=re.forkArgs,this.workerOpts=re.workerOpts,this.workerThreadOpts=re.workerThreadOpts,this.workerTerminateTimeout=re.workerTerminateTimeout,se||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(ye){lt(I,{stdout:ye.toString()})}),this.worker.on("stderr",function(ye){lt(I,{stderr:ye.toString()})}),this.worker.on("message",function(ye){if(!I.terminated)if(typeof ye=="string"&&ye==="ready")I.worker.ready=!0,ke();else{var qe=ye.id,Le=I.processing[qe];if(Le!==void 0)ye.isEvent?Le.options&&typeof Le.options.on=="function"&&Le.options.on(ye.payload):(delete I.processing[qe],I.terminating===!0&&I.terminate(),ye.error?Le.resolver.reject(_t(ye.error)):Le.resolver.resolve(ye.result));else{var Le=I.tracking[qe];Le!==void 0&&ye.isEvent&&Le.options&&typeof Le.options.on=="function"&&Le.options.on(ye.payload)}if(ye.method===Ye){var ut=I.tracking[ye.id];ut!==void 0&&(ye.error?(clearTimeout(ut.timeoutId),ut.resolver.reject(_t(ye.error))):(I.tracking&&clearTimeout(ut.timeoutId),ut.resolver.reject(new Zi(ut.error)))),delete I.tracking[qe]}}});function fe(ye){I.terminated=!0;for(var qe in I.processing)I.processing[qe]!==void 0&&I.processing[qe].resolver.reject(ye);I.processing=Object.create(null)}function ke(){var ye=d(I.requestQueue.splice(0)),qe;try{for(ye.s();!(qe=ye.n()).done;){var Le=qe.value;I.worker.send(Le.message,Le.transfer)}}catch(ut){ye.e(ut)}finally{ye.f()}}var Oe=this.worker;this.worker.on("error",fe),this.worker.on("exit",function(ye,qe){var Le=`Workerpool Worker terminated Unexpectedly
`;Le+="    exitCode: `"+ye+"`\n",Le+="    signalCode: `"+qe+"`\n",Le+="    workerpool.script: `"+I.script+"`\n",Le+="    spawnArgs: `"+Oe.spawnargs+"`\n",Le+="    spawnfile: `"+Oe.spawnfile+"`\n",Le+="    stdout: `"+Oe.stdout+"`\n",Le+="    stderr: `"+Oe.stderr+"`\n",fe(new Error(Le))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}bt.prototype.methods=function(){return this.exec("methods")},bt.prototype.exec=function(se,me,I,re){I||(I=H.defer());var fe=++this.lastId;this.processing[fe]={id:fe,resolver:I,options:re};var ke={message:{id:fe,method:se,params:me},transfer:re&&re.transfer};this.terminated?I.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ke.message,ke.transfer):this.requestQueue.push(ke);var Oe=this;return I.promise.catch(function(ye){if(ye instanceof H.CancellationError||ye instanceof H.TimeoutError)return Oe.tracking[fe]={id:fe,resolver:H.defer(),options:re,error:ye},delete Oe.processing[fe],Oe.tracking[fe].resolver.promise=Oe.tracking[fe].resolver.promise.catch(function(qe){if(delete Oe.tracking[fe],qe instanceof Zi)throw qe.error;var Le=Oe.terminateAndNotify(!0).then(function(){throw qe},function(ut){throw ut});return Le}),Oe.worker.send({id:fe,method:Ye}),Oe.tracking[fe].timeoutId=setTimeout(function(){Oe.tracking[fe].resolver.reject(ye)},Oe.workerTerminateTimeout),Oe.tracking[fe].resolver.promise;throw ye})},bt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},bt.prototype.terminate=function(se,me){var I=this;if(se){for(var re in this.processing)this.processing[re]!==void 0&&this.processing[re].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var fe=0,ke=Object.values(I.tracking);fe<ke.length;fe++){var Oe=ke[fe];clearTimeout(Oe.timeoutId),Oe.resolver.reject(new Error("Worker Terminating"))}if(I.tracking=Object.create(null),typeof me=="function"&&(this.terminationHandler=me),this.busy())this.terminating=!0;else{var ye=function(Le){if(I.terminated=!0,I.cleaning=!1,I.worker!=null&&I.worker.removeAllListeners&&I.worker.removeAllListeners("message"),I.worker=null,I.terminating=!1,I.terminationHandler)I.terminationHandler(Le,I);else if(Le)throw Le};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ye(new Error("worker already killed!"));return}var qe=setTimeout(function(){I.worker&&I.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(qe),I.worker&&(I.worker.killed=!0),ye()}),this.worker.ready?this.worker.send(_e):this.requestQueue.push({message:_e}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ye()}},bt.prototype.terminateAndNotify=function(se,me){var I=H.defer();return me&&I.promise.timeout(me),this.terminate(se,function(re,fe){re?I.reject(re):I.resolve(fe)}),I.promise};function Zi(se){this.error=se,this.stack=new Error().stack}return O.exports=bt,O.exports._tryRequireWorkerThreads=z,O.exports._setupProcessWorker=nt,O.exports._setupBrowserWorker=ce,O.exports._setupWorkerThreadWorker=Ae,O.exports.ensureWorkerThreads=et,O.exports}var N,R;function F(){if(R)return N;R=1;var A=65535;N=H;function H(){this.ports=Object.create(null),this.length=0}return H.prototype.nextAvailableStartingAt=function(W){for(;this.ports[W]===!0;)W++;if(W>=A)throw new Error("WorkerPool debug port limit reached: "+W+">= "+A);return this.ports[W]=!0,this.length++,W},H.prototype.releasePort=function(W){delete this.ports[W],this.length--},N}var U,J;function he(){if(J)return U;J=1;var A=l(),H=A.Promise,W=E(),ge=n,le=F(),Ee=new le;function k(B,z){typeof B=="string"?this.script=B||null:(this.script=null,z=B),this.workers=[],this.tasks=[],z=z||{},this.forkArgs=Object.freeze(z.forkArgs||[]),this.forkOpts=Object.freeze(z.forkOpts||{}),this.workerOpts=Object.freeze(z.workerOpts||{}),this.workerThreadOpts=Object.freeze(z.workerThreadOpts||{}),this.debugPortStart=z.debugPortStart||43210,this.nodeWorker=z.nodeWorker,this.workerType=z.workerType||z.nodeWorker||"auto",this.maxQueueSize=z.maxQueueSize||1/0,this.workerTerminateTimeout=z.workerTerminateTimeout||1e3,this.onCreateWorker=z.onCreateWorker||function(){return null},this.onTerminateWorker=z.onTerminateWorker||function(){return null},this.emitStdStreams=z.emitStdStreams||!1,z&&"maxWorkers"in z?(Ie(z.maxWorkers),this.maxWorkers=z.maxWorkers):this.maxWorkers=Math.max((ge.cpus||4)-1,1),z&&"minWorkers"in z&&(z.minWorkers==="max"?this.minWorkers=this.maxWorkers:(_e(z.minWorkers),this.minWorkers=z.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&W.ensureWorkerThreads()}k.prototype.exec=function(B,z,_){if(z&&!Array.isArray(z))throw new TypeError('Array expected as argument "params"');if(typeof B=="string"){var te=H.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var ce=this.tasks,Ae={method:B,params:z,resolver:te,timeout:null,options:_};ce.push(Ae);var nt=te.promise.timeout;return te.promise.timeout=function(tt){return ce.indexOf(Ae)!==-1?(Ae.timeout=tt,te.promise):nt.call(te.promise,tt)},this._next(),te.promise}else{if(typeof B=="function")return this.exec("run",[String(B),z],_);throw new TypeError('Function or string expected as argument "method"')}},k.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var B=this;return this.exec("methods").then(function(z){var _={};return z.forEach(function(te){_[te]=function(){return B.exec(te,Array.prototype.slice.call(arguments))}}),_})},k.prototype._next=function(){if(this.tasks.length>0){var B=this._getWorker();if(B){var z=this,_=this.tasks.shift();if(_.resolver.promise.pending){var te=B.exec(_.method,_.params,_.resolver,_.options).then(z._boundNext).catch(function(){if(B.terminated)return z._removeWorker(B)}).then(function(){z._next()});typeof _.timeout=="number"&&te.timeout(_.timeout)}else z._next()}}},k.prototype._getWorker=function(){for(var B=this.workers,z=0;z<B.length;z++){var _=B[z];if(_.busy()===!1)return _}return B.length<this.maxWorkers?(_=this._createWorkerHandler(),B.push(_),_):null},k.prototype._removeWorker=function(B){var z=this;return Ee.releasePort(B.debugPort),this._removeWorkerFromList(B),this._ensureMinWorkers(),new H(function(_,te){B.terminate(!1,function(ce){z.onTerminateWorker({forkArgs:B.forkArgs,forkOpts:B.forkOpts,workerThreadOpts:B.workerThreadOpts,script:B.script}),ce?te(ce):_(B)})})},k.prototype._removeWorkerFromList=function(B){var z=this.workers.indexOf(B);z!==-1&&this.workers.splice(z,1)},k.prototype.terminate=function(B,z){var _=this;this.tasks.forEach(function(tt){tt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var te=function(tt){Ee.releasePort(tt.debugPort),this._removeWorkerFromList(tt)},ce=te.bind(this),Ae=[],nt=this.workers.slice();return nt.forEach(function(tt){var _t=tt.terminateAndNotify(B,z).then(ce).always(function(){_.onTerminateWorker({forkArgs:tt.forkArgs,forkOpts:tt.forkOpts,workerThreadOpts:tt.workerThreadOpts,script:tt.script})});Ae.push(_t)}),H.all(Ae)},k.prototype.stats=function(){var B=this.workers.length,z=this.workers.filter(function(_){return _.busy()}).length;return{totalWorkers:B,busyWorkers:z,idleWorkers:B-z,pendingTasks:this.tasks.length,activeTasks:z}},k.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var B=this.workers.length;B<this.minWorkers;B++)this.workers.push(this._createWorkerHandler())},k.prototype._createWorkerHandler=function(){var B=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new W(B.script||this.script,{forkArgs:B.forkArgs||this.forkArgs,forkOpts:B.forkOpts||this.forkOpts,workerOpts:B.workerOpts||this.workerOpts,workerThreadOpts:B.workerThreadOpts||this.workerThreadOpts,debugPort:Ee.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Ie(B){if(!Ye(B)||!et(B)||B<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function _e(B){if(!Ye(B)||!et(B)||B<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function Ye(B){return typeof B=="number"}function et(B){return Math.round(B)==B}return U=k,U}var C={},Z,ue;function ae(){if(ue)return Z;ue=1;function A(H,W){this.message=H,this.transfer=W}return Z=A,Z}var $e;function Te(){return $e||($e=1,function(A){var H=ae(),W=l().Promise,ge="__workerpool-terminate__",le="__workerpool-cleanup__",Ee=1e3,k={exit:function(){}},Ie={addAbortListener:function(_){k.abortListeners.push(_)},emit:k.emit};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")k.on=function(_,te){addEventListener(_,function(ce){te(ce.data)})},k.send=function(_,te){te?postMessage(_,te):postMessage(_)};else if(typeof process<"u"){var _e;try{_e=Ps}catch(_){if(!(L(_)==="object"&&_!==null&&_.code==="MODULE_NOT_FOUND"))throw _}if(_e&&_e.parentPort!==null){var Ye=_e.parentPort;k.send=Ye.postMessage.bind(Ye),k.on=Ye.on.bind(Ye),k.exit=process.exit.bind(process)}else k.on=process.on.bind(process),k.send=function(_){process.send(_)},k.on("disconnect",function(){process.exit(1)}),k.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function et(_){return Object.getOwnPropertyNames(_).reduce(function(te,ce){return Object.defineProperty(te,ce,{value:_[ce],enumerable:!0})},{})}function B(_){return _&&typeof _.then=="function"&&typeof _.catch=="function"}k.methods={},k.methods.run=function(_,te){var ce=new Function("return ("+_+").apply(this, arguments);");return ce.worker=Ie,ce.apply(ce,te)},k.methods.methods=function(){return Object.keys(k.methods)},k.terminationHandler=void 0,k.abortListenerTimeout=Ee,k.abortListeners=[],k.terminateAndExit=function(_){var te=function(){k.exit(_)};if(!k.terminationHandler)return te();var ce=k.terminationHandler(_);return B(ce)?(ce.then(te,te),ce):(te(),new W(function(Ae,nt){nt(new Error("Worker terminating"))}))},k.cleanup=function(_){if(!k.abortListeners.length)return k.send({id:_,method:le,error:et(new Error("Worker terminating"))}),new W(function(lt){lt()});var te=function(){k.exit()},ce=function(){k.abortListeners.length||(k.abortListeners=[])},Ae=k.abortListeners.map(function(lt){return lt()}),nt,tt=new W(function(lt,bt){nt=setTimeout(function(){bt(new Error("Timeout occured waiting for abort handler, killing worker"))},k.abortListenerTimeout)}),_t=W.all(Ae).then(function(){clearTimeout(nt),ce()},function(){clearTimeout(nt),te()});return new W(function(lt,bt){_t.then(lt,bt),tt.then(lt,bt)}).then(function(){k.send({id:_,method:le,error:null})},function(lt){k.send({id:_,method:le,error:lt?et(lt):null})})};var z=null;k.on("message",function(_){if(_===ge)return k.terminateAndExit(0);if(_.method===le)return k.cleanup(_.id);try{var te=k.methods[_.method];if(te){z=_.id;var ce=te.apply(te,_.params);B(ce)?ce.then(function(Ae){Ae instanceof H?k.send({id:_.id,result:Ae.message,error:null},Ae.transfer):k.send({id:_.id,result:Ae,error:null}),z=null}).catch(function(Ae){k.send({id:_.id,result:null,error:et(Ae)}),z=null}):(ce instanceof H?k.send({id:_.id,result:ce.message,error:null},ce.transfer):k.send({id:_.id,result:ce,error:null}),z=null)}else throw new Error('Unknown method "'+_.method+'"')}catch(Ae){k.send({id:_.id,result:null,error:et(Ae)})}}),k.register=function(_,te){if(_)for(var ce in _)_.hasOwnProperty(ce)&&(k.methods[ce]=_[ce],k.methods[ce].worker=Ie);te&&(k.terminationHandler=te.onTerminate,k.abortListenerTimeout=te.abortListenerTimeout||Ee),k.send("ready")},k.emit=function(_){if(z){if(_ instanceof H){k.send({id:z,isEvent:!0,payload:_.message},_.transfer);return}k.send({id:z,isEvent:!0,payload:_})}},A.add=k.register,A.emit=k.emit}(C)),C}var Re=n.platform,Ue=n.isMainThread,q=n.cpus;function ee(A,H){var W=he();return new W(A,H)}var ve=i.pool=ee;function xe(A,H){var W=Te();W.add(A,H)}var Ne=i.worker=xe;function Fe(A){var H=Te();H.emit(A)}var hr=i.workerEmit=Fe,wr=l(),Ge=wr.Promise,vt=i.Promise=Ge,Yt=i.Transfer=ae(),tn=i.platform=Re,rn=i.isMainThread=Ue,sn=i.cpus=q;t.Promise=vt,t.Transfer=Yt,t.cpus=sn,t.default=i,t.isMainThread=rn,t.platform=tn,t.pool=ve,t.worker=Ne,t.workerEmit=hr,Object.defineProperty(t,"__esModule",{value:!0})})})(zl,zl.exports);var B5=zl.exports,H5=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},tr;tr=class{constructor(r,e){je(this,"_built",!1),je(this,"_hydrated",!1),je(this,"_hover",!1),je(this,"_canvasLayer"),je(this,"_visibleLayer"),je(this,"_cursorLayer"),je(this,"_listenerLayer"),this.parent=r,this.root=e,this.root.classList.add(tr.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(r){this._built=r,r===!0?(this.root.classList.add(tr.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(tr.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(r){this._hydrated=r,r===!0?(this.root.classList.add(tr.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(tr.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(r){this._hover=r,r===!0?(this.root.classList.add(tr.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(tr.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const r=this.parent.createInnerDom();this._canvasLayer=r.canvasLayer,this._visibleLayer=r.visibleLayer,this._cursorLayer=r.cursorLayer,this._listenerLayer=r.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(tr.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl,this.root.innerHTML="")}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},je(tr,"CLASS_BASE","thermalImageRoot"),je(tr,"CLASS_BUILT",tr.CLASS_BASE+"__built"),je(tr,"CLASS_HYDRATED",tr.CLASS_BASE+"__mounted"),je(tr,"CLASS_HOVER",tr.CLASS_BASE+"__hover");var V5=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(w,E)=>{const N=w.getBigInt64(E,!0),R=62135596800000n,F=10000n,U=24n*60n*60n*1000n*F,J=0x4000000000000000n,he=0x8000000000000000n;let C=N&0x3fffffffffffffffn;N&he&&(C>J-U&&(C-=J),C<0&&(C+=U));const Z=C/F-R;return Number(Z)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,d=l+h,u=r.slice(25),p=u.byteLength/d,S=w=>{const E=w*d,N=E+d,R=u.slice(E,N),F=new DataView(R),U=F.getFloat32(8,!0),J=F.getFloat32(12,!0),he=n(F,0),C=F.getFloat32(24,!0),Z=F.getFloat32(28,!0);return{timestamp:he,min:U,max:J,emissivity:C,reflectedKelvins:Z}},y=[];for(let w=0;w<p;w++){const E=S(w);y.push(E)}const D={emissivity:0,reflectedKelvins:0};let L=1/0,X=-1/0;const O=[];y.forEach(w=>{D.emissivity=D.emissivity+w.emissivity,D.reflectedKelvins=D.reflectedKelvins+w.reflectedKelvins,w.min<L&&(L=w.min),w.max>X&&(X=w.max),O.push(w.timestamp)});const j=O[0],K=[];O.forEach((w,E)=>{const N=O[E+1];let R=0;N===void 0&&(R=0),R=N-w;const F=w-j;K.push({absolute:w,relative:F,offset:isNaN(R)?0:R,index:E})});const G=y[y.length-1].timestamp-y[0].timestamp,ie=G/p,v=1e3/ie,b=y[0].timestamp;return{width:t,height:i,timestamp:b,bytesize:s,frameCount:p,duration:G,frameInterval:ie,fps:v,timeline:K,min:L,max:X,averageEmissivity:D.emissivity/y.length,averageReflectedKelvins:D.reflectedKelvins/y.length}},G5=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,d=r.slice(25),u=e*h,p=u+h;return{array:d.slice(u,p),dataType:i}},q5=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let h=i&0x3fffffffffffffffn;i&l&&(h>o-a&&(h-=o),h<0&&(h+=a));const d=h/n-s,u=Number(d),p=t.getFloat32(8,!0),S=t.getFloat32(12,!0),y=t.getFloat32(24,!0),D=t.getFloat32(28,!0),L=r.slice(57);let X=[];if(e===0){const O=new Uint16Array(L),j=Math.abs(p-S),K=65535;O.forEach(G=>{const ie=G/K;X.push(p+j*ie)})}else e===1&&(X=Array.from(new Float32Array(L)));return{timestamp:u,min:p,max:S,emissivity:y,reflectedKelvins:D,pixels:X}},Y5=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(X,O)=>{const j=X.getBigInt64(O,!0),K=62135596800000n,G=10000n,ie=24n*60n*60n*1000n*G,v=0x4000000000000000n,b=0x8000000000000000n;let w=j&0x3fffffffffffffffn;j&b&&(w>v-ie&&(w-=v),w<0&&(w+=ie));const E=w/G-K;return Number(E)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,d=s*n*l,u=h+d,p=r.slice(25),S=p.byteLength/u,y={},D=X=>{const O=X*u,j=O+u,K=p.slice(O,j),G=new DataView(K),ie=a(G,0),v=G.getFloat32(8,!0),b=G.getFloat32(12,!0)-v,w=57+t*l*s+e*l;let E=0;if(o===1)E=G.getFloat32(w,!0);else if(o===0){const N=G.getInt16(w,!0)/65535;E=v+b*N}return{timestamp:ie,temperature:E}};let L=0;for(let X=0;X<S;X++){const O=D(X);L===0&&(L=O.timestamp),y[O.timestamp-L]=O.temperature}return y},X5=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(j,K)=>{const G=j.getBigInt64(K,!0),ie=62135596800000n,v=10000n,b=24n*60n*60n*1000n*v,w=0x4000000000000000n,E=0x8000000000000000n;let N=G&0x3fffffffffffffffn;G&E&&(N>w-b&&(N-=w),N<0&&(N+=b));const R=N/v-ie;return Number(R)},h=n.getUint8(15);let d=2;h===1&&(d=4);const u=57,p=a*o*d,S=u+p,y=r.slice(25),D=y.byteLength/S,L={},X=j=>{const K=j*S,G=K+S,ie=y.slice(K,G),v=new DataView(ie),b=l(v,0),w=v.getFloat32(8,!0),E=v.getFloat32(12,!0)-w,N=57,R=e,F=e+i,U=t,J=t+s;let he=1/0,C=-1/0,Z=0,ue=0;for(let $e=U;$e<=J;$e++){const Te=$e*a;for(let Re=R;Re<=F;Re++){const Ue=N+(Te+Re)*d;let q=NaN;if(h===1)q=v.getFloat32(Ue,!0);else{const ee=v.getInt16(Ue,!0)/65535;q=w+E*ee}q<he&&(he=q),q>C&&(C=q),ue+=q,Z++}}const ae={min:he,max:C,avg:ue/Z,count:Z};return{timestamp:b,result:ae}};let O=0;for(let j=0;j<D;j++){const K=X(j);O===0&&(O=K.timestamp),L[K.timestamp-O]=K.result}return L},K5=async r=>{console.log("Reading histogram");let e=[];const t=async y=>{const D=new DataView(y.slice(0,25)),L=D.getUint8(15),X=D.getUint16(17,!0),O=D.getUint16(19,!0),j=L===1?4:2,K=57,G=X*O*j,ie=K+G,v=y.slice(25),b=v.byteLength/ie;let w=[];for(let E=0;E<b;E++){const N=E*ie,R=N+57,F=R+G,U=v.slice(R,F);if(L===0){const J=new DataView(v.slice(N,56)),he=J.getFloat32(8,!0),C=J.getFloat32(12,!0),Z=new Uint16Array(U),ue=Math.abs(he-C),ae=65535;Z.forEach($e=>{const Te=$e/ae;w.push(he+ue*Te)})}else L===1&&(w=w.concat(Array.from(new Float32Array(U))))}return w};(await Promise.all(r.map(y=>t(y)))).forEach(y=>{e=e.concat(y)}),e.sort((y,D)=>y-D);const i=e[0],s=e[e.length-1],n=Math.abs(i-s),a=255,o=n/a,l=[];let h=[...e];for(let y=0;y<a;y++){const D=i+o*y,L=D+o,X=h.findIndex(O=>O>L);if(X===0){const O={from:D,to:L,count:0,percentage:0};l.push(O)}else{const O=h.slice(0,X-1).length,j=O/e.length*100,K={from:D,to:L,count:O,percentage:j};l.push(K),h=h.slice(X)}}const d=[...l].sort((y,D)=>y.percentage-D.percentage),u=d[0].percentage,p=d[d.length-1].percentage,S=Math.abs(u-p);return l.map(y=>({...y,height:y.percentage/S*100}))},Z5=(r,e)=>{const t=e.endsWith("lrc"),i=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&i},J5=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(K,G)=>{const ie=K.getBigInt64(G,!0),v=62135596800000n,b=10000n,w=24n*60n*60n*1000n*b,E=0x4000000000000000n,N=0x8000000000000000n;let R=ie&0x3fffffffffffffffn;ie&N&&(R>E-w&&(R-=E),R<0&&(R+=w));const F=R/b-v;return Number(F)},h=n.getUint8(15);let d=2;h===1&&(d=4);const u=57,p=a*o*d,S=u+p,y=r.slice(25),D=y.byteLength/S,L={},X=(K,G)=>{const ie=e+i/2,v=t+s/2,b=(K-ie)/(i/2),w=(G-v)/(s/2);return b*b+w*w<=1},O=K=>{const G=K*S,ie=G+S,v=y.slice(G,ie),b=new DataView(v),w=l(b,0),E=b.getFloat32(8,!0),N=b.getFloat32(12,!0)-E,R=57,F=e,U=e+i,J=t,he=t+s;let C=1/0,Z=-1/0,ue=0,ae=0;for(let Te=J;Te<=he;Te++){const Re=Te*a;for(let Ue=F;Ue<=U;Ue++)if(X(Ue,Te)){const q=R+(Re+Ue)*d;let ee=NaN;if(h===1)ee=b.getFloat32(q,!0);else{const ve=b.getInt16(q,!0)/65535;ee=E+N*ve}ee<C&&(C=ee),ee>Z&&(Z=ee),ae+=ee,ue++}}const $e={min:C,max:Z,avg:ae/ue,count:ue};return{timestamp:w,result:$e}};let j=0;for(let K=0;K<D;K++){const G=O(K);j===0&&(j=G.timestamp),L[G.timestamp-j]=G.result}return L},Q5=[{extension:"lrc",minme:"application/octet-stream"}],eS={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Q5,is:Z5,baseInfo:V5,getFrameSubset:G5,frameData:q5,registryHistogram:K5,pointAnalysisData:Y5,rectAnalysisData:X5,ellipsisAnalysisData:J5},tS=Object.freeze(eS),rS={LrcParser:tS},iS=Object.values(rS),sS=iS.map(r=>r.extensions);sS.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", ");var Lp="chrome"in window;console.log("is chromium",Lp);var nS=Lp?{maxWorkers:4}:{};B5.pool(nS);class aS{constructor(e){je(this,"identity"),je(this,"session"),je(this,"onIdentity",new H5),this.client=e}isLoggedIn(){return this.identity!==void 0}login(e){this.identity=e,this.onIdentity.call(this.identity)}logout(){this.identity=void 0,this.onIdentity.call(void 0)}setSession(e){this.session=e}getSession(){return this.session}getIdentity(){return this.identity}getAuthorisationHeader(){if(this.identity)return`Basic ${Buffer.from(`${this.identity.user}:${this.identity.token}`).toString("base64")}`}}class oS{constructor(e){je(this,"path"),je(this,"method","GET"),je(this,"action"),je(this,"query",new Map),je(this,"body",{}),je(this,"headers",{}),je(this,"files",{}),this.client=e}setPath(e){return e=e.replace(/^\/+|\/+$/g,""),this.path=e,this}setMethod(e){return this.method=e,this}setAction(e){return this.action=e,this}addQueryParameter(e,t){return this.query.set(e,t),this}addBodyParameter(e,t){return this.body[e]=t,this}addHeader(e,t){return this.headers[e]=t,this}addFile(e,t){return this.files[e]=t,this}createRequestInit(){const e=["connect","login","logout","currentusertree"].includes(this.action||"");if(this.path===void 0&&!e)return!1;let t=this.client.getServerUrl();e||(t+=this.path);const i={};this.action!==void 0&&(i.action=this.action),this.query.size>0&&this.query.forEach((l,h)=>{i[h]=l}),Object.keys(i).length>0&&(t+="?",t+=new URLSearchParams(i).toString());const s=new URL(t),n={...this.headers};this.client.auth.isLoggedIn()&&(n.Authorization=this.client.auth.getAuthorisationHeader()||"");const a=this.client.auth.getSession();a&&(n.Cookie=a);const o={method:this.method,headers:n,credentials:"include"};return{url:s,options:o}}createRequestJson(){const e=this.createRequestInit();if(e!==!1){const{url:t,options:i}=e;this.method==="POST"&&Object.keys(this.body).length>0&&(i.body=JSON.stringify(this.body));const s={...i,headers:{...i.headers,"Content-Type":"application/json"}};return new Request(t,s)}return!1}createRequestFormData(){const e=this.createRequestInit();if(e===!1)return!1;const{url:t,options:i}=e,s=new FormData;for(const[a,o]of Object.entries(this.body))s.append(a,typeof o=="object"?JSON.stringify(o):String(o));for(const[a,o]of Object.entries(this.files))s.append(a,o,o.name);const n={...i,body:s};return n.headers&&typeof n.headers=="object"&&delete n.headers["Content-Type"],new Request(t,n)}createRequest(){return Object.keys(this.files).length>0?this.createRequestFormData():this.createRequestJson()}getAction(){return this.action}}class sa{constructor(e){je(this,"request"),this.client=e,this.request=this.client.createRequest()}}class lS extends sa{init(){return this.request.setMethod("GET"),this.request.setAction("connect"),this}async execute(){const e=await this.client.fetch(this.request);if(e.success){const t=e;t.data.identity!==!1&&this.client.auth.login(t.data.identity)}return e}}class hS extends sa{init(){return this.request.setMethod("GET"),this.request.setAction("currentusertree"),this}execute(){return this.client.fetch(this.request)}}class Ki extends sa{setPath(e){return this.request.setPath(e),this}}class cS extends Ki{init(){return this.request.setMethod("GET"),this}async execute(){return await this.client.fetch(this.request)}}class dS extends Ki{init(){return this.request.setMethod("GET"),this.request.setAction("file"),this}setFileName(e){return this.request.addQueryParameter("file",e),this}execute(){return this.client.fetch(this.request)}}class Op extends Ki{constructor(){super(...arguments),je(this,"tags",[])}setFrom(e){const t=e instanceof Date?e.getTime():e;return this.request.addQueryParameter("from",t.toString()),this}setTo(e){const t=e instanceof Date?e.getTime():e;return this.request.addQueryParameter("to",t.toString()),this}setTags(e){return this.tags=e,this.applyTags(),this}addTag(e){return this.tags.includes(e)||(this.tags.push(e),this.applyTags()),this}removeTag(e){const t=this.tags.length;return this.tags=this.tags.filter(i=>i!==e),this.tags.length!==t&&this.applyTags(),this}applyTags(){return this.request.addQueryParameter("tags",this.tags.join(",")),this}}class uS extends Op{init(){return this.request.setMethod("GET"),this.request.setAction("files"),this}async execute(){return await this.client.fetch(this.request)}}class pS extends Op{constructor(){super(...arguments),je(this,"folders",[]),je(this,"by","hour")}init(){return this.request.setMethod("GET"),this.request.setAction("grid"),this.request.addQueryParameter("by",this.by),this}setBy(e){return this.by=e,this.request.addQueryParameter("by",e),this}setFolders(e){return this.folders=e,this.applyFolders(),this}addFolder(e){return this.folders.includes(e)||(this.folders.push(e),this.applyFolders()),this}removeFolder(e){const t=this.folders.length;return this.folders=this.folders.filter(i=>i!==e),this.folders.length!==t&&this.applyFolders(),this}applyFolders(){return this.request.addQueryParameter("folders",this.folders.join(",")),this}async execute(){return await this.client.fetch(this.request)}}class fS{constructor(e){this.client=e}connect(){return new lS(this.client).init()}info(e){return new cS(this.client).init().setPath(e)}files(e){return new uS(this.client).init().setPath(e)}grid(e){return new pS(this.client).init().setPath(e)}file(e,t){return new dS(this.client).init().setPath(e).setFileName(t)}currentUserTree(){return new hS(this.client).init()}}class gS extends Ki{constructor(){super(...arguments),je(this,"tagBuffer",{}),je(this,"accessBuffer",{})}init(){return this.request.setMethod("POST"),this.request.setAction("create"),this}setName(e){return this.request.addBodyParameter("name",e),this}setDescription(e){return this.request.addBodyParameter("description",e),this}setMeta(e){return this.request.addBodyParameter("meta",e),this}addTag(e,t,i){return this.tagBuffer[e]={name:e},t!==void 0&&(this.tagBuffer[e].description=t),i!==void 0&&(this.tagBuffer[e].color=i),this}setShow(e){return this.accessBuffer.show=e,this}setMayHaveFiles(e){return this.accessBuffer.may_have_files=e,this}async execute(){return Object.keys(this.tagBuffer).length>0&&this.request.addBodyParameter("tags",this.tagBuffer),Object.keys(this.accessBuffer).length>0&&this.request.addBodyParameter("access",this.accessBuffer),await this.client.fetch(this.request)}}class na extends Ki{setFile(e){return this.request.addQueryParameter("file",e),this}}class mS extends na{init(){return this.request.setMethod("POST"),this.request.setAction("fileaddcomment"),this}setMessage(e){return this.request.addBodyParameter("message",e),this}execute(){return this.client.fetch(this.request)}}class yS extends na{init(){return this.request.setMethod("POST"),this.request.setAction("fileclearcomments"),this}execute(){return this.client.fetch(this.request)}}class vS extends na{init(){return this.request.setMethod("POST"),this.request.setAction("filedeletecomment"),this}setCommentTimestamp(e){return this.request.addBodyParameter("timestamp",e),this}execute(){return this.client.fetch(this.request)}}class bS extends na{init(){return this.request.setMethod("POST"),this.request.setAction("fileupdatecomment"),this}setCommentTimestamp(e){return this.request.addBodyParameter("timestamp",e),this}setMessage(e){return this.request.addBodyParameter("message",e),this}execute(){return this.client.fetch(this.request)}}class wS extends sa{init(){return this.request.setMethod("POST"),this.request.setAction("login"),this}setUser(e){return this.request.addBodyParameter("user",e),this}setPassword(e){return this.request.addBodyParameter("password",e),this}async execute(){const e=await this.client.fetch(this.request);if(e.success){const t=e;this.client.auth.login(t.data.login)}return e}}class xS extends sa{init(){return this.request.setMethod("POST"),this.request.setAction("logout"),this}async execute(){return await this.client.fetch(this.request)}}class SS extends Ki{init(){return this.request.setMethod("POST"),this.request.setAction("move"),this}setTarget(e){return this.request.addBodyParameter("target",e),this}async execute(){return await this.client.fetch(this.request)}}class $S extends na{constructor(){super(...arguments),je(this,"_clearTags",!1),je(this,"_clearAnalyses",!1),je(this,"_tagsAdd",[]),je(this,"_tagsRemove",[]),je(this,"_analysisAdd",[]),je(this,"_analysisRemove",[])}init(){return this.request.setMethod("POST"),this.request.setAction("updatefile"),this}setLabel(e){return this.request.addBodyParameter("label",e),this}setDescription(e){return this.request.addBodyParameter("description",e),this}addTag(e){return this._tagsAdd.push(e),this}removeTag(e){return this._tagsRemove.push(e),this}addAnalysis(e){return this._analysisAdd.push(e),this}removeAnalysis(e){return this._analysisRemove.push(e),this}clearTags(){return this._clearTags=!0,this}clearAnalyses(){return this._clearAnalyses=!0,this}async execute(){return this._clearTags===!0?this.request.addBodyParameter("clearTags",!0):(this._tagsAdd.length>0&&this.request.addBodyParameter("addTags",this._tagsAdd),this._tagsRemove.length>0&&this.request.addBodyParameter("removeTags",this._tagsRemove)),this._clearAnalyses===!0?this.request.addBodyParameter("clearAnalyses",!0):(this._analysisAdd.length>0&&this.request.addBodyParameter("addAnalyses",this._analysisAdd),this._analysisRemove.length>0&&this.request.addBodyParameter("removeAnalyses",this._analysisRemove)),await this.client.fetch(this.request)}}class kS extends Ki{constructor(){super(...arguments),je(this,"tagBuffer",{})}init(){return this.request.setMethod("POST"),this.request.setAction("update"),this}setName(e){return this.request.addBodyParameter("name",e),this}setDescription(e){return this.request.addBodyParameter("description",e),this}addTag(e,t,i,s){return this.tagBuffer[e]={name:t},i!==void 0&&(this.tagBuffer[e].description=i),s!==void 0&&(this.tagBuffer[e].color=s),this.request.addBodyParameter("addTags",this.tagBuffer),this}removeTags(e){return this.request.addBodyParameter("removeTags",e),this}setMetadata(e){this.request.addBodyParameter("meta",e)}async execute(){return await this.client.fetch(this.request)}}class CS extends Ki{init(){return this.request.setMethod("POST"),this.request.setAction("uploadfile"),this}setLrc(e){return this.request.addFile("lrc",e),this}setVisual(e){return this.request.addFile("visual",e),this}setPreview(e){return this.request.addFile("preview",e),this}setLabel(e){return this.request.addBodyParameter("label",e),this}setDescription(e){return this.request.addBodyParameter("description",e),this}setTags(e){return this.request.addBodyParameter("tags",e),this}async execute(){return await this.client.fetch(this.request)}}class _S{constructor(e){this.client=e}login(e,t){return new wS(this.client).init().setUser(e).setPassword(t)}logout(){return new xS(this.client).init()}createFolder(e,t){return new gS(this.client).init().setName(t).setPath(e)}updateFolder(e){return new kS(this.client).init().setPath(e)}moveFolder(e,t){return new SS(this.client).init().setPath(e).setTarget(t)}uploadFile(e,t){return new CS(this.client).init().setPath(e).setLrc(t)}updateFile(e,t){return new $S(this.client).init().setPath(e).setFile(t)}fileAddComment(e,t,i){return new mS(this.client).init().setPath(e).setFile(t).setMessage(i)}fileClearComments(e,t){return new yS(this.client).init().setPath(e).setFile(t)}fileUpdateComment(e,t,i,s){return new bS(this.client).init().setPath(e).setFile(t).setCommentTimestamp(i).setMessage(s)}fileDeleteComment(e,t,i){return new vS(this.client).init().setPath(e).setFile(t).setCommentTimestamp(i)}}class PS{constructor(e){je(this,"get"),je(this,"post"),this.client=e,this.get=new fS(this.client),this.post=new _S(this.client)}}class ES{constructor(e){je(this,"observers",new Set),je(this,"connected",!1),this.client=e}observe(e){return this.observers.has(e)||this.observers.add(e),this}unobserve(e){return this.observers.has(e)&&this.observers.delete(e),this}emit(e,t=!1,i){this.onEmit(e,t,i)}}class wd{constructor(e,t){je(this,"pending"),this.entity=e,this.name=t}isPending(){return this.pending!==void 0}getEnqueued(){return this.pending}enqueue(e){this.pending=e}reset(){this.pending=void 0}report(e=void 0){return e!==void 0?[this.name,e]:!1}}class AS extends ES{constructor(e,t){super(e),je(this,"info"),je(this,"update"),this.path=t,this.update={name:new wd(this,"name"),description:new wd(this,"description")}}forEveryUpdate(e){Object.values(this.update).forEach(e)}resetUpdaates(){this.forEveryUpdate(e=>e.reset())}async persist(){const e=this.client.routes.post.updateFolder(this.path);this.update.name.isPending()&&e.setName(this.update.name.getEnqueued()),this.update.description.isPending()&&e.setDescription(this.update.description.getEnqueued());const t=await e.execute();if(t.success===!0){this.info=t.data.result.info;const i=[];this.forEveryUpdate(n=>{if(this.info!==void 0&&n.isPending()){const a=n.report(this.info[n.name]);a!==!1&&i.push(a),n.reset()}});const s=Object.fromEntries(i);return this.emit("updated",!0,s),this.info}}current(){return this.info}async connect(){const e=await this.client.routes.get.info(this.path).execute();return e.success===!0?(this.info=e.data.folder,this.connected=!0,this.emit("connected",!0),!0):!1}disconnect(){this.connected=!1,this.emit("disconnected",!1)}onEmit(e,t,i){this.observers.forEach(s=>{const n=t?this.current():void 0;s.onFolderChanged(e,n,i)})}}class LS{constructor(e){je(this,"folders",new Map),this.client=e}async connectToFolder(e,t){if(this.folders.has(e)){const s=this.folders.get(e);return s.observe(t),s}const i=new AS(this.client,e);if(i.observe(t),this.folders.set(e,i),!await i.connect())throw new Error(`Could not connect to folder at path: ${e}`);return i}}class OS{constructor(e){je(this,"serverUrl"),je(this,"auth"),je(this,"routes"),je(this,"entities",new LS(this)),je(this,"connected",!1),this.serverUrl=e.trim(),this.serverUrl.endsWith("/")||(this.serverUrl+="/"),this.auth=new aS(this),this.routes=new PS(this)}async connect(){if(this.connected)throw new Error("Client is already connected.");const e=await this.routes.get.connect().execute();return e.success===!0&&(this.connected=!0),e}isConnected(){return this.connected}createRequest(){return new oS(this)}getServerUrl(){return this.serverUrl}processResponse(e){const t=(e.headers.get("set-cookie")||"").match(/PHPSESSID=([^;]+)/);this.auth.setSession(t?t[0]:void 0)}async fetch(e){if(e.getAction()!=="connect"&&this.connected===!1)throw new Error("Client is not connected to the server!");const t=e.createRequest();if(!t)throw new Error("Invalid request configuration");let i;try{i=await fetch(t)}catch{throw new Error("Server is not available or network error occurred.")}this.processResponse(i);const s=await i.json();if(s.raw={request:t,response:i},!i.ok)throw new Error("Request was not successfull at all!");return s}}const Dp="client-context";var DS=Object.defineProperty,Tp=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&DS(e,t,s),s};class Ph extends It{connectedCallback(){super.connectedCallback(),this.initializeClient()}initializeClient(){if(!this.serverUrl||this.serverUrl.trim()==="")throw new Error("Server URL is required. Please set the 'server-url' attribute.");this.client=new OS(this.serverUrl),this.log("Client initialized with server URL:",this.serverUrl),this.client.connect().then(()=>this.log(this.client))}}Tp([m({type:String,attribute:"server-url"})],Ph.prototype,"serverUrl");Tp([ne({context:Dp})],Ph.prototype,"client");var TS=Object.defineProperty,MS=Object.getOwnPropertyDescriptor,RS=(r,e,t,i)=>{for(var s=i>1?void 0:i?MS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&TS(e,t,s),s};let xd=class extends Ph{render(){return f`
        <thermal-app>

            <labir-user-button></labir-user-button>

            <div class="connected-app">
                <h2>Connected App</h2>
                <p>Server URL: ${this.serverUrl}</p>
            </div>
        </thermal-app>
        `}};xd=RS([pe("connected-app")],xd);var IS=Object.defineProperty,US=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&IS(e,t,s),s};class Mp extends ot{}US([de({context:Dp,subscribe:!0})],Mp.prototype,"client");var FS=Object.defineProperty,zS=Object.getOwnPropertyDescriptor,Eh=(r,e,t,i)=>{for(var s=i>1?void 0:i?zS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&FS(e,t,s),s};let Qa=class extends Mp{constructor(){super(...arguments),this.isLoggedIn=!1}connectedCallback(){var r;super.connectedCallback(),(r=this.client)==null||r.auth.onIdentity.set(this.UUID,e=>{this.identity=e,this.isLoggedIn=!!e})}renderLoginForm(){return f`
            <input type="text" name="login" placeholder="Login" required></input>
            <input type="password" name="password" placeholder="Heslo" required></input>
        `}renderUserEditForm(){return f`
            TBD
        `}render(){var n,a;const r=((n=this.identity)==null?void 0:n.meta.name)??((a=this.identity)==null?void 0:a.meta.login)??"Přihlásit se",e=this.isLoggedIn?"primary":"default",t=this.isLoggedIn?r:"Přihlášení",i=this.isLoggedIn?this.renderUserEditForm():this.renderLoginForm(),s=this.isLoggedIn?async()=>{var l,h;const o=await((l=this.client)==null?void 0:l.routes.post.logout().execute());return(h=this.client)==null||h.auth.logout(),o&&o.success}:async()=>{var d,u;console.log("trying to login");const o=(d=this.shadowRoot)==null?void 0:d.querySelector("thermal-dialog"),l=o==null?void 0:o.shadowRoot,h=l==null?void 0:l.querySelector('slot[name="content"]');if(h){const S=h.assignedElements({flatten:!0}).find(y=>y.tagName==="DIV");if(S){const y=S.querySelector('input[name="login"]'),D=S.querySelector('input[name="password"]');if(y&&D){const L=y.value,X=D.value;if(L&&X){const O=await((u=this.client)==null?void 0:u.routes.post.login(L,X).execute());return O&&O.success}}}}return!1};return f`
            <thermal-dialog label="${t}" button="close" .beforeClose=${s}>

                <thermal-button slot="invoker" variant=${e}>
                    ${r}
                </thermal-button>

                <div slot="content">
                    ${i}
                </div>

            </thermal-dialog>
        `}};Eh([P()],Qa.prototype,"identity",2);Eh([P()],Qa.prototype,"isLoggedIn",2);Qa=Eh([pe("labir-user-button")],Qa);sg();ng();console.info(`@labir/embed ${As}
Author: ${sf}`);
