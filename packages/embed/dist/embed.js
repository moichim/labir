var Lu=Object.defineProperty;var Ru=(r,e,t)=>e in r?Lu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(Ru(r,typeof e!="symbol"?e+"":e,t),t);const xo="1.2.64",Du="Jan Jáchim <jachim5@gmail.com>",_e=r=>typeof r=="string",ys=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},El=r=>r==null?"":""+r,Tu=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},Iu=/###/g,Ol=r=>r&&r.indexOf("###")>-1?r.replace(Iu,"."):r,Ll=r=>!r||_e(r),$s=(r,e,t)=>{const i=_e(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(Ll(r))return{};const n=Ol(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return Ll(r)?{}:{obj:r,k:Ol(i[s])}},Rl=(r,e,t)=>{const{obj:i,k:s}=$s(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=$s(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=$s(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},Mu=(r,e,t,i)=>{const{obj:s,k:n}=$s(r,e,Object);s[n]=s[n]||[],s[n].push(t)},On=(r,e)=>{const{obj:t,k:i}=$s(r,e);if(t)return t[i]},Uu=(r,e,t)=>{const i=On(r,t);return i!==void 0?i:On(e,t)},Mh=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?_e(r[i])||r[i]instanceof String||_e(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):Mh(r[i],e[i],t):r[i]=e[i]);return r},Ni=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Fu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const zu=r=>_e(r)?r.replace(/[&<>"'\/]/g,e=>Fu[e]):r;class Nu{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const ju=[" ",",","?","!",";"],Bu=new Nu(20),Hu=(r,e,t)=>{e=e||"",t=t||"";const i=ju.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=Bu.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},ao=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return r[e];const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},Ln=r=>r==null?void 0:r.replace("_","-"),Wu={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Rn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Wu,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(_e(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Rn(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Rn(this.logger,e)}}var Lr=new Rn;class Zn{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class Dl extends Zn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,u;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):_e(i)&&n?o.push(...i.split(n)):o.push(i)));const l=On(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!_e(i)?l:ao((u=(h=this.data)==null?void 0:h[e])==null?void 0:u[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),Rl(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(_e(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=On(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?Mh(l,i,n):l={...l,...i},Rl(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var Uh={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const Tl={};class Dn extends Zn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Tu(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Lr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Hu(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:_e(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:_e(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(u){const H=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${H}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${H}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const d=this.resolve(e,t);let p=d==null?void 0:d.res;const b=(d==null?void 0:d.usedKey)||a,v=(d==null?void 0:d.exactUsedKey)||a,x=Object.prototype.toString.apply(p),_=["[object Number]","[object Function]","[object RegExp]"],W=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,O=!this.i18nFormat||this.i18nFormat.handleAsObject,M=!_e(p)&&typeof p!="boolean"&&typeof p!="number";if(O&&p&&M&&_.indexOf(x)<0&&!(_e(W)&&Array.isArray(p))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const H=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,p,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(d.res=H,d.usedParams=this.getUsedParamsDetails(t),d):H}if(n){const H=Array.isArray(p),T=H?[]:{},K=H?v:b;for(const S in p)if(Object.prototype.hasOwnProperty.call(p,S)){const k=`${K}${n}${S}`;T[S]=this.translate(k,{...t,joinArrays:!1,ns:o}),T[S]===k&&(T[S]=p[S])}p=T}}else if(O&&_e(W)&&Array.isArray(p))p=p.join(W),p&&(p=this.extendTranslation(p,e,t,i));else{let H=!1,T=!1;const K=t.count!==void 0&&!_e(t.count),S=Dn.hasDefaultValue(t),k=K?this.pluralResolver.getSuffix(h,t.count,t):"",D=t.ordinal&&K?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",R=K&&!t.ordinal&&t.count===0,G=R&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${k}`]||t[`defaultValue${D}`]||t.defaultValue;!this.isValidLookup(p)&&S&&(H=!0,p=G),this.isValidLookup(p)||(T=!0,p=a);const N=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&T?void 0:p,A=S&&G!==p&&this.options.updateMissing;if(T||H||A){if(this.logger.log(A?"updateKey":"missingKey",h,l,a,A?G:p),n){const F=this.resolve(a,{...t,keySeparator:!1});F&&F.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let q=[];const ae=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ae&&ae[0])for(let F=0;F<ae.length;F++)q.push(ae[F]);else this.options.saveMissingTo==="all"?q=this.languageUtils.toResolveHierarchy(t.lng||this.language):q.push(t.lng||this.language);const $=(F,de,re)=>{var He;const Le=S&&re!==p?re:N;this.options.missingKeyHandler?this.options.missingKeyHandler(F,l,de,Le,A,t):(He=this.backendConnector)!=null&&He.saveMissing&&this.backendConnector.saveMissing(F,l,de,Le,A,t),this.emit("missingKey",F,l,de,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&K?q.forEach(F=>{const de=this.pluralResolver.getSuffixes(F,t);R&&t[`defaultValue${this.options.pluralSeparator}zero`]&&de.indexOf(`${this.options.pluralSeparator}zero`)<0&&de.push(`${this.options.pluralSeparator}zero`),de.forEach(re=>{$([F],a+re,t[`defaultValue${re}`]||G)})}):$(q,a,G))}p=this.extendTranslation(p,e,t,d,i),T&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${a}`),(T||H)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,H?p:void 0))}return s?(d.res=p,d.usedParams=this.getUsedParamsDetails(t),d):p}extendTranslation(e,t,i,s,n){var h,u;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=_e(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(d){const v=e.match(this.interpolator.nestingRegexp);p=v&&v.length}let b=i.replace&&!_e(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),e=this.interpolator.interpolate(e,b,i.lng||this.language||s.usedLng,i),d){const v=e.match(this.interpolator.nestingRegexp),x=v&&v.length;p<x&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var v=arguments.length,x=new Array(v),_=0;_<v;_++)x[_]=arguments[_];return(n==null?void 0:n[0])===x[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${t[0]}`),null):a.translate(...x,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=_e(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=Uh.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return _e(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),u=h.key;s=u;let d=h.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const p=t.count!==void 0&&!_e(t.count),b=p&&!t.ordinal&&t.count===0,v=t.context!==void 0&&(_e(t.context)||typeof t.context=="number")&&t.context!=="",x=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(_=>{var W,O;this.isValidLookup(i)||(o=_,!Tl[`${x[0]}-${_}`]&&((W=this.utils)!=null&&W.hasLoadedNamespace)&&!((O=this.utils)!=null&&O.hasLoadedNamespace(o))&&(Tl[`${x[0]}-${_}`]=!0,this.logger.warn(`key "${s}" for languages "${x.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(M=>{var K;if(this.isValidLookup(i))return;a=M;const H=[u];if((K=this.i18nFormat)!=null&&K.addLookupKeys)this.i18nFormat.addLookupKeys(H,u,M,_,t);else{let S;p&&(S=this.pluralResolver.getSuffix(M,t.count,t));const k=`${this.options.pluralSeparator}zero`,D=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(H.push(u+S),t.ordinal&&S.indexOf(D)===0&&H.push(u+S.replace(D,this.options.pluralSeparator)),b&&H.push(u+k)),v){const R=`${u}${this.options.contextSeparator}${t.context}`;H.push(R),p&&(H.push(R+S),t.ordinal&&S.indexOf(D)===0&&H.push(R+S.replace(D,this.options.pluralSeparator)),b&&H.push(R+k))}}let T;for(;T=H.pop();)this.isValidLookup(i)||(n=T,i=this.getResource(M,_,T,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!_e(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class Il{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Lr.create("languageUtils")}getScriptPartFromCode(e){if(e=Ln(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ln(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(_e(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),_e(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return _e(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):_e(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const Ml={zero:0,one:1,two:2,few:3,many:4,other:5},Ul={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Gu{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Lr.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Ln(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Ul;if(!e.match(/-|_/))return Ul;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>Ml[s]-Ml[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Fl=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=Uu(r,e,t);return!n&&s&&_e(t)&&(n=ao(r,t,i),n===void 0&&(n=ao(e,t,i))),n},qa=r=>r.replace(/\$/g,"$$$$");class Vu{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Lr.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:p,nestingPrefixEscaped:b,nestingSuffix:v,nestingSuffixEscaped:x,nestingOptionsSeparator:_,maxReplaces:W,alwaysFormat:O}=e.interpolation;this.escape=t!==void 0?t:zu,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?Ni(n):a||"{{",this.suffix=o?Ni(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=p?Ni(p):b||Ni("$t("),this.nestingSuffix=v?Ni(v):x||Ni(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=W||1e3,this.alwaysFormat=O!==void 0?O:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var b;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=v=>{if(v.indexOf(this.formatSeparator)<0){const O=Fl(t,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(O,void 0,i,{...s,...t,interpolationkey:v}):O}const x=v.split(this.formatSeparator),_=x.shift().trim(),W=x.join(this.formatSeparator).trim();return this.format(Fl(t,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),W,i,{...s,...t,interpolationkey:_})};this.resetRegExp();const u=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((b=s==null?void 0:s.interpolation)==null?void 0:b.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>qa(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?qa(this.escape(v)):qa(v)}].forEach(v=>{for(o=0;n=v.regex.exec(e);){const x=n[1].trim();if(a=h(x),a===void 0)if(typeof u=="function"){const W=u(e,n,s);a=_e(W)?W:""}else if(s&&Object.prototype.hasOwnProperty.call(s,x))a="";else if(d){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),a="";else!_e(a)&&!this.useRawValueToEscape&&(a=El(a));const _=v.safeValue(a);if(e=e.replace(n[0],_),d?(v.regex.lastIndex+=a.length,v.regex.lastIndex-=n[0].length):v.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let p=`{${d[1]}`;l=d[0],p=this.interpolate(p,a);const b=p.match(/'/g),v=p.match(/"/g);(((b==null?void 0:b.length)??0)%2===0&&!v||v.length%2!==0)&&(p=p.replace(/'/g,'"'));try{a=JSON.parse(p),h&&(a={...h,...a})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,x),`${l}${u}${p}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!_e(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(d=>d.trim());s[1]=u.shift(),l=u,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!_e(n))return n;_e(n)||(n=El(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const Yu=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=h),h==="false"&&(t[u]=!1),h==="true"&&(t[u]=!0),isNaN(h)||(t[u]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},ji=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(Ln(i),s),e[a]=o),o(t)}};class qu{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Lr.create("formatter"),this.options=e,this.formats={number:ji((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:ji((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:ji((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:ji((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:ji((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=ji(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var d;const{formatName:h,formatOptions:u}=Yu(l);if(this.formats[h]){let p=o;try{const b=((d=s==null?void 0:s.formatParams)==null?void 0:d[s.interpolationkey])||{},v=b.locale||b.lng||s.locale||s.lng||i;p=this.formats[h](o,v,{...u,...s,...b})}catch(b){this.logger.warn(b)}return p}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const Xu=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Ku extends Zn{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Lr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let u=!0;t.forEach(d=>{const p=`${h}|${d}`;!i.reload&&this.store.hasResourceBundle(h,d)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?a[p]===void 0&&(a[p]=!0):(this.state[p]=1,u=!1,a[p]===void 0&&(a[p]=!0),n[p]===void 0&&(n[p]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{Mu(l.loaded,[n],a),Xu(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const u=l.loaded[h];u.length&&u.forEach(d=>{o[h][d]===void 0&&(o[h][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(h&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(u=>o(null,u)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();_e(e)&&(e=this.languageUtils.toResolveHierarchy(e)),_e(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,u,d,p;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((d=(u=this.services)==null?void 0:u.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((p=this.backend)!=null&&p.create){const b={...a,isUpdate:n},v=this.backend.create.bind(this.backend);if(v.length<6)try{let x;v.length===5?x=v(e,t,i,s,b):x=v(e,t,i,s),x&&typeof x.then=="function"?x.then(_=>o(null,_)).catch(o):o(null,x)}catch(x){o(x)}else v(e,t,i,s,o,b)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const zl=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),_e(r[1])&&(e.defaultValue=r[1]),_e(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Nl=r=>{var e,t;return _e(r.ns)&&(r.ns=[r.ns]),_e(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),_e(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},yn=()=>{},Zu=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class As extends Zn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Nl(e),this.services={},this.logger=Lr,this.modules={external:[]},Zu(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(_e(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=zl();this.options={...s,...this.options,...Nl(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Lr.init(n(this.modules.logger),this.options):Lr.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=qu;const d=new Il(this.options);this.store=new Dl(this.options.resources,this.options);const p=this.services;p.logger=Lr,p.resourceStore=this.store,p.languageUtils=d,p.pluralResolver=new Gu(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(p.formatter=n(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Vu(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Ku(n(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(b){for(var v=arguments.length,x=new Array(v>1?v-1:0),_=1;_<v;_++)x[_-1]=arguments[_];e.emit(b,...x)}),this.modules.languageDetector&&(p.languageDetector=n(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=n(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Dn(this.services,this.options),this.translator.on("*",function(b){for(var v=arguments.length,x=new Array(v>1?v-1:0),_=1;_<v;_++)x[_-1]=arguments[_];e.emit(b,...x)}),this.modules.external.forEach(b=>{b.init&&b.init(this)})}if(this.format=this.options.interpolation.format,i||(i=yn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=ys(),h=()=>{const u=(d,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),i(d,p)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:yn;const s=_e(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=ys();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=yn),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Uh.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=ys();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var u,d;!e&&!l&&this.services.languageDetector&&(l=[]);const h=_e(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(d=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||d.call(u,h)),this.loadResources(h,p=>{a(p,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,u=new Array(h>2?h-2:0),d=2;d<h;d++)u[d-2]=arguments[d];l=s.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const p=s.options.keySeparator||".";let b;return l.keyPrefix&&Array.isArray(a)?b=a.map(v=>`${l.keyPrefix}${p}${v}`):b=l.keyPrefix?`${l.keyPrefix}${p}${a}`:a,s.t(b,l)};return _e(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=ys();return this.options.ns?(_e(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=ys();_e(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new Il(zl());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new As(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:yn;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new As(s);return(e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i&&(n.store=new Dl(this.store.data,s),n.services.resourceStore=n.store),n.translator=new Dn(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),u=1;u<l;u++)h[u-1]=arguments[u];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ft=As.createInstance();ft.createInstance=As.createInstance;ft.createInstance;ft.dir;ft.init;ft.loadResources;ft.reloadResources;ft.use;ft.changeLanguage;ft.getFixedT;const L=ft.t;ft.exists;ft.setDefaultNamespace;ft.hasLoadedNamespace;ft.loadNamespaces;ft.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _s=globalThis,Tn=_s.trustedTypes,jl=Tn?Tn.createPolicy("lit-html",{createHTML:r=>r}):void 0,Fh="$lit$",ni=`lit$${Math.random().toFixed(9).slice(2)}$`,zh="?"+ni,Qu=`<${zh}>`,ki=document,Es=()=>ki.createComment(""),Os=r=>r===null||typeof r!="object"&&typeof r!="function",Nh=Array.isArray,Ju=r=>Nh(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Xa=`[ 	
\f\r]`,vs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bl=/-->/g,Hl=/>/g,$i=RegExp(`>|${Xa}(?:([^\\s"'>=/]+)(${Xa}*=${Xa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wl=/'/g,Gl=/"/g,jh=/^(?:script|style|textarea|title)$/i,ed=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),w=ed(1),oi=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Vl=new WeakMap,Ci=ki.createTreeWalker(ki,129);function Bh(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return jl!==void 0?jl.createHTML(e):e}const td=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",a=vs;for(let o=0;o<t;o++){const l=r[o];let h,u,d=-1,p=0;for(;p<l.length&&(a.lastIndex=p,u=a.exec(l),u!==null);)p=a.lastIndex,a===vs?u[1]==="!--"?a=Bl:u[1]!==void 0?a=Hl:u[2]!==void 0?(jh.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=$i):u[3]!==void 0&&(a=$i):a===$i?u[0]===">"?(a=s??vs,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?$i:u[3]==='"'?Gl:Wl):a===Gl||a===Wl?a=$i:a===Bl||a===Hl?a=vs:(a=$i,s=void 0);const b=a===$i&&r[o+1].startsWith("/>")?" ":"";n+=a===vs?l+Qu:d>=0?(i.push(h),l.slice(0,d)+Fh+l.slice(d)+ni+b):l+ni+(d===-2?o:b)}return[Bh(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};let oo=class Hh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,u]=td(e,t);if(this.el=Hh.createElement(h,i),Ci.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=Ci.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Fh)){const p=u[a++],b=s.getAttribute(d).split(ni),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:v[2],strings:b,ctor:v[1]==="."?id:v[1]==="?"?sd:v[1]==="@"?nd:Qn}),s.removeAttribute(d)}else d.startsWith(ni)&&(l.push({type:6,index:n}),s.removeAttribute(d));if(jh.test(s.tagName)){const d=s.textContent.split(ni),p=d.length-1;if(p>0){s.textContent=Tn?Tn.emptyScript:"";for(let b=0;b<p;b++)s.append(d[b],Es()),Ci.nextNode(),l.push({type:2,index:++n});s.append(d[p],Es())}}}else if(s.nodeType===8)if(s.data===zh)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(ni,d+1))!==-1;)l.push({type:7,index:n}),d+=ni.length-1}n++}}static createElement(e,t){const i=ki.createElement("template");return i.innerHTML=e,i}};function Yi(r,e,t=r,i){var a,o;if(e===oi)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Os(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=Yi(r,s._$AS(r,e.values),s,i)),e}let rd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??ki).importNode(t,!0);Ci.currentNode=s;let n=Ci.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new Hs(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new ad(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=Ci.nextNode(),a++)}return Ci.currentNode=ki,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class Hs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Yi(this,e,t),Os(e)?e===z||e==null||e===""?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==oi&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ju(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==z&&Os(this._$AH)?this._$AA.nextSibling.data=e:this.T(ki.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oo.createElement(Bh(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new rd(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Vl.get(e.strings);return t===void 0&&Vl.set(e.strings,t=new oo(e)),t}k(e){Nh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Hs(this.S(Es()),this.S(Es()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}let Qn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Yi(this,e,t,0),a=!Os(e)||e!==this._$AH&&e!==oi,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Yi(this,o[i+l],t,l),h===oi&&(h=this._$AH[l]),a||(a=!Os(h)||h!==this._$AH[l]),h===z?e=z:e!==z&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},id=class extends Qn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}};class sd extends Qn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}}class nd extends Qn{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Yi(this,e,t,0)??z)===oi)return;const i=this._$AH,s=e===z&&i!==z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==z&&(i===z||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}let ad=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Yi(this,e)}};const Ka=_s.litHtmlPolyfillSupport;Ka==null||Ka(oo,Hs),(_s.litHtmlVersions??(_s.litHtmlVersions=[])).push("3.1.4");const od=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new Hs(e.insertBefore(Es(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ld=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jn=r=>(...e)=>({_$litDirective$:r,values:e});let So=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Cs(s,e);return!0},In=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Wh=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),ud(e)}};function hd(r){this._$AN!==void 0?(In(this),this._$AM=r,Wh(this)):this._$AM=r}function cd(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Cs(i[n],!1),In(i[n]);else i!=null&&(Cs(i,!1),In(i));else Cs(this,r)}const ud=r=>{r.type==Hr.CHILD&&(r._$AP??(r._$AP=cd),r._$AQ??(r._$AQ=hd))};let dd=class extends So{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Wh(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Cs(this,e),In(this))}setValue(e){if(ld(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Yl=null,Gh=()=>{};new Promise(r=>{Gh=r});const pd={type:"3rdParty",init(r){fd(r)}},fd=r=>{Yl=r,Gh(Yl)},ql=new Map,gd=()=>{ql.forEach((r,e)=>{(e.isConnected===!1||md(e)===!1)&&ql.delete(e)})};setInterval(gd,1e4);const md=r=>{const e=r.part;if(e.type===Hr.ATTRIBUTE)return e.element.isConnected;if(e.type===Hr.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===Hr.PROPERTY||e.type===Hr.BOOLEAN_ATTRIBUTE||e.type===Hr.EVENT||e.type===Hr.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:yd,forEach:vd}=[];function bd(r){return vd.call(yd.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const Xl=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,wd=(r,e,t)=>{const i=t||{};i.path=i.path||"/";const s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!Xl.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!Xl.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},Kl={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=wd(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var xd={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return Kl.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&Kl.create(t,r,i,s,n)}},Sd={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let bs=null;const Zl=()=>{if(bs!==null)return bs;try{bs=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{bs=!1}return bs};var $d={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&Zl())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&Zl()&&window.localStorage.setItem(t,r)}};let ws=null;const Ql=()=>{if(ws!==null)return ws;try{ws=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{ws=!1}return ws};var _d={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&Ql())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&Ql()&&window.sessionStorage.setItem(t,r)}},Cd={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},kd={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},Pd={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},Ad={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};function Ed(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r}}class Vh{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=bd(t,this.options||{},Ed()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(xd),this.addDetector(Sd),this.addDetector($d),this.addDetector(_d),this.addDetector(Cd),this.addDetector(kd),this.addDetector(Pd),this.addDetector(Ad)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e,t){t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}Vh.type="languageDetector";const Od={next:"Next",prev:"Previous",back:"Back",close:"Close",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automaticrange",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visible file name",visiblefileurl:"Visible file URL",visiblefiledownload:"Visible file download",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",byday:"by day",byhour:"by hour",byweek:"by week",bymonth:"by month",byyear:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",youfeelwarmer:"You see {{t}} °C on the thermometer, but you feel {{diff}} °C warmer outside.",youfeelcolder:"You see {{t}} °C on the thermometer, but you feel {{diff}} °C colder outside.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette."},Ld={next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visible",visiblefileurl:"URL de l'image visible",visiblefiledownload:"Télécharger l'image visible",time:"Temps",duration:"Duration",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Type du fichier",type:"Type",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",byday:"par jour",byhour:"par heure",byweek:"par semaine",bymonth:"par mois",byyear:"par année",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Cadre",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes douces",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieur",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieur",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format csv",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",youfeelwarmer:"Vous voyez {{t}} °C sur le thermomètre, mais vous vous sentez {{diff}} °C plus chaud dehors.",youfeelcolder:"Vous voyez {{t}} °C sur le thermomètre, mais vous vous sentez {{diff}} °C plus froid dehors.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette."},Rd={next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",byday:"po dnech",byhour:"po hodinách",byweek:"po týdnech",bymonth:"po měsících",byyear:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",youfeelwarmer:"Na teploměru vidíte {{t}} °C, ale venku se cítíte  o {{diff}} °C tepleji.",youfeelcolder:"Na teploměru vidíte {{t}} °C, ale venku se cítíte  o {{diff}} °C chladněji.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety."},Dd={next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r llun isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Band awtomatig",fullrange:"Band llawn",adjusttimescalehint:"Addaswch y wraddfa thermol yn awtomatig neu cyflewch y wraddfa i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangosfa thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weladwy",visiblefileurl:"URL ffeil weladwy",visiblefiledownload:"Lawrlwythwch y ffeil weladwy",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",range:"Band",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"Group {{era}}",byday:"Grŵp yn ystod y dydd",byhour:"Grŵp fesul awr",byweek:"Grŵp fesul wythnos",bymonth:"Grwpio fesul mis",byyear:"Grŵp yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",youfeelwarmer:"Rydych chi'n gweld {{t}} °C ar y thermomedr, ond rydych chi'n teimlo'n {{diff}} °C yn gynhesach y tu allan.",youfeelcolder:"Rydych chi'n gweld {{t}} °C ar y thermomedr, ond rydych chi'n teimlo'n {{diff}} °C yn oerach y tu allan.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y llun isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y llun isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y llun isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet."},Td={next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",byday:"nach Tagen",byhour:"nach Stunden",byweek:"nach Wochen",bymonth:"nach Monaten",byyear:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",youfeelwarmer:"Das Thermometer zeigt {{t}} °C, aber es fühlt sich draußen um {{diff}} °C wärmer an.",youfeelcolder:"Das Thermometer zeigt {{t}} °C, aber es fühlt sich draußen um {{diff}} °C kälter an.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette."};ft.use(pd).use(Vh).init({fallbackLng:"en",resources:{cs:{translation:Rd},cy:{translation:Dd},de:{translation:Td},en:{translation:Od},fr:{translation:Ld}}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn=globalThis,$o=Cn.ShadowRoot&&(Cn.ShadyCSS===void 0||Cn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_o=Symbol(),Jl=new WeakMap;let Yh=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==_o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($o&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Jl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Jl.set(t,e))}return e}toString(){return this.cssText}};const Id=r=>new Yh(typeof r=="string"?r:r+"",void 0,_o),ye=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Yh(t,r,_o)},Md=(r,e)=>{if($o)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Cn.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},eh=$o?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Id(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ud,defineProperty:Fd,getOwnPropertyDescriptor:zd,getOwnPropertyNames:Nd,getOwnPropertySymbols:jd,getPrototypeOf:Bd}=Object,ai=globalThis,th=ai.trustedTypes,Hd=th?th.emptyScript:"",Za=ai.reactiveElementPolyfillSupport,ks=(r,e)=>r,Mn={toAttribute(r,e){switch(e){case Boolean:r=r?Hd:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Co=(r,e)=>!Ud(r,e),rh={attribute:!0,type:String,converter:Mn,reflect:!1,hasChanged:Co};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ai.litPropertyMetadata??(ai.litPropertyMetadata=new WeakMap);let Wi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=rh){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Fd(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=zd(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??rh}static _$Ei(){if(this.hasOwnProperty(ks("elementProperties")))return;const e=Bd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ks("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ks("properties"))){const t=this.properties,i=[...Nd(t),...jd(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(eh(s))}else e!==void 0&&t.push(eh(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Md(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Mn).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Mn;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Co)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Wi.elementStyles=[],Wi.shadowRootOptions={mode:"open"},Wi[ks("elementProperties")]=new Map,Wi[ks("finalized")]=new Map,Za==null||Za({ReactiveElement:Wi}),(ai.reactiveElementVersions??(ai.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rr=class extends Wi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=od(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return oi}};var Ih;rr._$litElement$=!0,rr.finalized=!0,(Ih=globalThis.litElementHydrateSupport)==null||Ih.call(globalThis,{LitElement:rr});const Qa=globalThis.litElementPolyfillSupport;Qa==null||Qa({LitElement:rr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wd={attribute:!0,type:String,converter:Mn,reflect:!1,hasChanged:Co},Gd=(r=Wd,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(e,t)=>typeof t=="object"?Gd(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vd=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yi(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Vd(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Yd={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function vn(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function bn(r){return r.toString().indexOf("`")===-1}bn(r=>r``)||bn(r=>r`\0`)||bn(r=>r`\n`)||bn(r=>r`\u0000`);vn``&&vn`\0`&&vn`\n`&&vn`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let qd="google#safe";function Xd(){if(typeof window<"u")return window.trustedTypes}function qh(){var r;return(r=Xd())!==null&&r!==void 0?r:null}let wn;function Kd(){var r,e;if(wn===void 0)try{wn=(e=(r=qh())===null||r===void 0?void 0:r.createPolicy(qd,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{wn=null}return wn}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Xh{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function ih(r){var e;const t=r,i=(e=Kd())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Xh(t,Yd)}function Zd(r){var e;if(!((e=qh())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Xh)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Qd(r,...e){if(e.length===0)return ih(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return ih(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Jd(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function ep(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=Jd(e||window);t&&r.setAttribute("nonce",t)}function tp(r,e,t){r.src=Zd(e),ep(r)}/**
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
 */const rp=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),tp(t,Qd`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Kh(r={}){await rp;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function sh(r){if(await Kh(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function ip(r){return await Kh(),new google.visualization.ChartWrapper({container:r})}function _t(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function Pi(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const Zh=6048e5,sp=864e5;let np={};function Ws(){return np}function Vr(r,e){var o,l,h,u;const t=Ws(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??0,s=_t(r),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function Un(r){return Vr(r,{weekStartsOn:1})}function Qh(r){const e=_t(r),t=e.getFullYear(),i=Pi(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=Un(i),n=Pi(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const a=Un(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function Fn(r){const e=_t(r);return e.setHours(0,0,0,0),e}function nh(r){const e=_t(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function ap(r,e){const t=Fn(r),i=Fn(e),s=+t-nh(t),n=+i-nh(i);return Math.round((s-n)/sp)}function op(r){const e=Qh(r),t=Pi(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),Un(t)}function lp(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Jh(r){if(!lp(r)&&typeof r!="number")return!1;const e=_t(r);return!isNaN(Number(e))}function ec(r){const e=_t(r);return e.setHours(23,59,59,999),e}function zn(r){const e=_t(r),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function Nn(r){const e=_t(r);return e.setDate(1),e.setHours(0,0,0,0),e}function tc(r){const e=_t(r),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function ko(r){const e=_t(r),t=Pi(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}function rc(r){const e=_t(r);return e.setMinutes(59,59,999),e}function jn(r,e){var o,l;const t=Ws(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=_t(r),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const hp={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},cp=(r,e,t)=>{let i;const s=hp[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Ja(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const up={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},dp={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},pp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},fp={date:Ja({formats:up,defaultWidth:"full"}),time:Ja({formats:dp,defaultWidth:"full"}),dateTime:Ja({formats:pp,defaultWidth:"full"})},gp={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},mp=(r,e,t,i)=>gp[r];function xs(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const yp={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},vp={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},bp={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},wp={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},xp={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Sp={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$p=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},_p={ordinalNumber:$p,era:xs({values:yp,defaultWidth:"wide"}),quarter:xs({values:vp,defaultWidth:"wide",argumentCallback:r=>r-1}),month:xs({values:bp,defaultWidth:"wide"}),day:xs({values:wp,defaultWidth:"wide"}),dayPeriod:xs({values:xp,defaultWidth:"wide",formattingValues:Sp,defaultFormattingWidth:"wide"})};function Ss(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?kp(o,d=>d.test(a)):Cp(o,d=>d.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const u=e.slice(a.length);return{value:h,rest:u}}}function Cp(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function kp(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Pp(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const Ap=/^(\d+)(th|st|nd|rd)?/i,Ep=/\d+/i,Op={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Lp={any:[/^b/i,/^(a|c)/i]},Rp={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Dp={any:[/1/i,/2/i,/3/i,/4/i]},Tp={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ip={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Mp={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Up={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Fp={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},zp={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Np={ordinalNumber:Pp({matchPattern:Ap,parsePattern:Ep,valueCallback:r=>parseInt(r,10)}),era:Ss({matchPatterns:Op,defaultMatchWidth:"wide",parsePatterns:Lp,defaultParseWidth:"any"}),quarter:Ss({matchPatterns:Rp,defaultMatchWidth:"wide",parsePatterns:Dp,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Ss({matchPatterns:Tp,defaultMatchWidth:"wide",parsePatterns:Ip,defaultParseWidth:"any"}),day:Ss({matchPatterns:Mp,defaultMatchWidth:"wide",parsePatterns:Up,defaultParseWidth:"any"}),dayPeriod:Ss({matchPatterns:Fp,defaultMatchWidth:"any",parsePatterns:zp,defaultParseWidth:"any"})},jp={code:"en-US",formatDistance:cp,formatLong:fp,formatRelative:mp,localize:_p,match:Np,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Bp(r){const e=_t(r);return ap(e,ko(e))+1}function Hp(r){const e=_t(r),t=+Un(e)-+op(e);return Math.round(t/Zh)+1}function ic(r,e){var u,d,p,b;const t=_t(r),i=t.getFullYear(),s=Ws(),n=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((b=(p=s.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,a=Pi(r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Vr(a,e),l=Pi(r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=Vr(l,e);return t.getTime()>=o.getTime()?i+1:t.getTime()>=h.getTime()?i:i-1}function Wp(r,e){var o,l,h,u;const t=Ws(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,s=ic(r,e),n=Pi(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Vr(n,e)}function Gp(r,e){const t=_t(r),i=+Vr(t,e)-+Wp(t,e);return Math.round(i/Zh)+1}function ze(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const si={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return ze(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):ze(t+1,2)},d(r,e){return ze(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return ze(r.getHours()%12||12,e.length)},H(r,e){return ze(r.getHours(),e.length)},m(r,e){return ze(r.getMinutes(),e.length)},s(r,e){return ze(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return ze(s,e.length)}},Bi={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ah={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return si.y(r,e)},Y:function(r,e,t,i){const s=ic(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return ze(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):ze(n,e.length)},R:function(r,e){const t=Qh(r);return ze(t,e.length)},u:function(r,e){const t=r.getFullYear();return ze(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ze(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ze(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return si.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return ze(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=Gp(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):ze(s,e.length)},I:function(r,e,t){const i=Hp(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):ze(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):si.d(r,e)},D:function(r,e,t){const i=Bp(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):ze(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return ze(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return ze(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return ze(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=Bi.noon:i===0?s=Bi.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=Bi.evening:i>=12?s=Bi.afternoon:i>=4?s=Bi.morning:s=Bi.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return si.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):si.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):ze(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):ze(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):si.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):si.s(r,e)},S:function(r,e){return si.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return lh(i);case"XXXX":case"XX":return _i(i);case"XXXXX":case"XXX":default:return _i(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return lh(i);case"xxxx":case"xx":return _i(i);case"xxxxx":case"xxx":default:return _i(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+oh(i,":");case"OOOO":default:return"GMT"+_i(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+oh(i,":");case"zzzz":default:return"GMT"+_i(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return ze(i,e.length)},T:function(r,e,t){const i=r.getTime();return ze(i,e.length)}};function oh(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+ze(n,2)}function lh(r,e){return r%60===0?(r>0?"-":"+")+ze(Math.abs(r)/60,2):_i(r,e)}function _i(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=ze(Math.trunc(i/60),2),n=ze(i%60,2);return t+s+e+n}const hh=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},sc=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Vp=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return hh(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",hh(i,e)).replace("{{time}}",sc(s,e))},Yp={p:sc,P:Vp},qp=/^D+$/,Xp=/^Y+$/,Kp=["D","DD","YY","YYYY"];function Zp(r){return qp.test(r)}function Qp(r){return Xp.test(r)}function Jp(r,e,t){const i=ef(r,e,t);if(console.warn(i),Kp.includes(r))throw new RangeError(i)}function ef(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const tf=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rf=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sf=/^'([^]*?)'?$/,nf=/''/g,af=/[a-zA-Z]/;function at(r,e,t){var u,d,p,b;const i=Ws(),s=i.locale??jp,n=i.firstWeekContainsDate??((d=(u=i.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,a=i.weekStartsOn??((b=(p=i.locale)==null?void 0:p.options)==null?void 0:b.weekStartsOn)??0,o=_t(r);if(!Jh(o))throw new RangeError("Invalid time value");let l=e.match(rf).map(v=>{const x=v[0];if(x==="p"||x==="P"){const _=Yp[x];return _(v,s.formatLong)}return v}).join("").match(tf).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const x=v[0];if(x==="'")return{isToken:!1,value:of(v)};if(ah[x])return{isToken:!0,value:v};if(x.match(af))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:v}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(v=>{if(!v.isToken)return v.value;const x=v.value;(Qp(x)||Zp(x))&&Jp(x,e,String(r));const _=ah[x[0]];return _(o,x,s.localize,h)}).join("")}function of(r){const e=r.match(sf);return e?e[1].replace(nf,"'"):r}function eo(r,e){const t=_t(r);if(!Jh(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=ze(t.getDate(),2),h=ze(t.getMonth()+1,2);n=`${ze(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=ze(t.getHours(),2),h=ze(t.getMinutes(),2),u=ze(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${u}`}return n}function nc(r){const e=_t(r);return e.setMinutes(0,0,0),e}var lf={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},hf=`\r
`,cf="\uFEFF",Gs=r=>Object.assign({},lf,r);class uf extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}let df=class extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};class pf extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class ff extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var is=r=>r,sr=r=>r,Ps=is,ea=is,qi=is,ch=is,uh=is,gf=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},mf=r=>ch(typeof r=="object"?r.key:r),yf=r=>uh(typeof r=="object"?r.displayLabel:r),vf=(r,...e)=>e.reduce((t,i)=>i(t),r),bf=r=>e=>r.useBom?ea(sr(e)+cf):e,wf=r=>e=>r.showTitle?Po(ea(sr(e)+r.title))(qi("")):e,Po=r=>e=>ea(sr(r)+sr(e)+hf),ac=r=>(e,t)=>xf(r)(qi(sr(e)+sr(t))),xf=r=>e=>is(sr(e)+r.fieldSeparator),Sf=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new df("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=qi("");for(let s=0;s<e.length;s++){const n=yf(e[s]);i=ac(r)(i,oc(r,sr(n)))}return i=qi(sr(i).slice(0,-1)),Po(t)(i)},$f=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=qi("");for(let o=0;o<e.length;o++){const l=mf(e[o]),h=t[n][sr(l)];a=ac(r)(a,oc(r,h))}a=qi(sr(a).slice(0,-1)),s=Po(s)(a)}return s},_f=r=>+r===r&&(!isFinite(r)||!!(r%1)),Cf=(r,e)=>{if(_f(e)){if(r.decimalSeparator==="locale")return Ps(e.toLocaleString());if(r.decimalSeparator)return Ps(e.toString().replace(".",r.decimalSeparator))}return Ps(e.toString())},kn=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+gf(e,r.quoteCharacter)+r.quoteCharacter),Ps(t)},kf=(r,e)=>{const t=e?"true":"false";return Ps(r.boolDisplay[t])},Pf=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?kn(r,r.replaceUndefinedWith+""):e===null?kn(r,"null"):kn(r,""),oc=(r,e)=>{if(typeof e=="number")return Cf(r,e);if(typeof e=="string")return kn(r,e);if(typeof e=="boolean"&&r.boolDisplay)return kf(r,e);if(e===null||typeof e>"u")return Pf(r,e);throw new ff(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},lc=r=>e=>{const t=Gs(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=vf(ea(""),bf(t),wf(t),Sf(t,i),$f(t,i,e));if(sr(s).length<1)throw new uf("Output is empty. Is your data formatted correctly?");return s},Af=r=>e=>{const t=Gs(r),i=sr(e),s=t.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},hc=r=>e=>{if(!window)throw new pf("Downloading only supported in a browser environment.");const t=Af(r)(e),i=Gs(r),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Of(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Lf(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var cc={exports:{}};(function(r){(function(e){var t=M(),i=H(),s=T(),n=K(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:u,toJpeg:d,toBlob:p,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(S,k){return k=k||{},b(k),Promise.resolve(S).then(function(R){return x(R,k.filter,!0)}).then(_).then(W).then(D).then(function(R){return O(R,k.width||t.width(S),k.height||t.height(S))});function D(R){return k.bgcolor&&(R.style.backgroundColor=k.bgcolor),k.width&&(R.style.width=k.width+"px"),k.height&&(R.style.height=k.height+"px"),k.style&&Object.keys(k.style).forEach(function(G){R.style[G]=k.style[G]}),R}}function h(S,k){return v(S,k||{}).then(function(D){return D.getContext("2d").getImageData(0,0,t.width(S),t.height(S)).data})}function u(S,k){return v(S,k||{}).then(function(D){return D.toDataURL()})}function d(S,k){return k=k||{},v(S,k).then(function(D){return D.toDataURL("image/jpeg",k.quality||1)})}function p(S,k){return v(S,k||{}).then(t.canvasToBlob)}function b(S){typeof S.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=S.imagePlaceholder,typeof S.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=S.cacheBust}function v(S,k){return l(S,k).then(t.makeImage).then(t.delay(100)).then(function(R){var G=D(S);return G.getContext("2d").drawImage(R,0,0),G});function D(R){var G=document.createElement("canvas");if(G.width=k.width||t.width(R),G.height=k.height||t.height(R),k.bgcolor){var U=G.getContext("2d");U.fillStyle=k.bgcolor,U.fillRect(0,0,G.width,G.height)}return G}}function x(S,k,D){if(!D&&k&&!k(S))return Promise.resolve();return Promise.resolve(S).then(R).then(function(N){return G(S,N,k)}).then(function(N){return U(S,N)});function R(N){return N instanceof HTMLCanvasElement?t.makeImage(N.toDataURL()):N.cloneNode(!1)}function G(N,A,q){var ae=N.childNodes;if(ae.length===0)return Promise.resolve(A);return $(A,t.asArray(ae),q).then(function(){return A});function $(F,de,re){var Le=Promise.resolve();return de.forEach(function(He){Le=Le.then(function(){return x(He,re)}).then(function(st){st&&F.appendChild(st)})}),Le}}function U(N,A){if(!(A instanceof Element))return A;return Promise.resolve().then(q).then(ae).then($).then(F).then(function(){return A});function q(){de(window.getComputedStyle(N),A.style);function de(re,Le){re.cssText?Le.cssText=re.cssText:He(re,Le);function He(st,et){t.asArray(st).forEach(function(ie){et.setProperty(ie,st.getPropertyValue(ie),st.getPropertyPriority(ie))})}}}function ae(){[":before",":after"].forEach(function(re){de(re)});function de(re){var Le=window.getComputedStyle(N,re),He=Le.getPropertyValue("content");if(He===""||He==="none")return;var st=t.uid();A.className=A.className+" "+st;var et=document.createElement("style");et.appendChild(ie(st,re,Le)),A.appendChild(et);function ie(he,Ce,Re){var Ke="."+he+":"+Ce,Ie=Re.cssText?ti(Re):wi(Re);return document.createTextNode(Ke+"{"+Ie+"}");function ti(Ze){var er=Ze.getPropertyValue("content");return Ze.cssText+" content: "+er+";"}function wi(Ze){return t.asArray(Ze).map(er).join("; ")+";";function er(jr){return jr+": "+Ze.getPropertyValue(jr)+(Ze.getPropertyPriority(jr)?" !important":"")}}}}}function $(){N instanceof HTMLTextAreaElement&&(A.innerHTML=N.value),N instanceof HTMLInputElement&&A.setAttribute("value",N.value)}function F(){A instanceof SVGElement&&(A.setAttribute("xmlns","http://www.w3.org/2000/svg"),A instanceof SVGRectElement&&["width","height"].forEach(function(de){var re=A.getAttribute(de);re&&A.style.setProperty(de,re)}))}}}function _(S){return s.resolveAll().then(function(k){var D=document.createElement("style");return S.appendChild(D),D.appendChild(document.createTextNode(k)),S})}function W(S){return n.inlineAll(S).then(function(){return S})}function O(S,k,D){return Promise.resolve(S).then(function(R){return R.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(R)}).then(t.escapeXhtml).then(function(R){return'<foreignObject x="0" y="0" width="100%" height="100%">'+R+"</foreignObject>"}).then(function(R){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+k+'" height="'+D+'">'+R+"</svg>"}).then(function(R){return"data:image/svg+xml;charset=utf-8,"+R})}function M(){return{escape:F,parseExtension:k,mimeType:D,dataAsUrl:$,isDataUrl:R,canvasToBlob:U,resolveUrl:N,getAndEncode:ae,uid:A(),delay:de,asArray:re,escapeXhtml:Le,makeImage:q,width:He,height:st};function S(){var ie="application/font-woff",he="image/jpeg";return{woff:ie,woff2:ie,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:he,jpeg:he,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function k(ie){var he=/\.([^\.\/]*?)$/g.exec(ie);return he?he[1]:""}function D(ie){var he=k(ie).toLowerCase();return S()[he]||""}function R(ie){return ie.search(/^(data:)/)!==-1}function G(ie){return new Promise(function(he){for(var Ce=window.atob(ie.toDataURL().split(",")[1]),Re=Ce.length,Ke=new Uint8Array(Re),Ie=0;Ie<Re;Ie++)Ke[Ie]=Ce.charCodeAt(Ie);he(new Blob([Ke],{type:"image/png"}))})}function U(ie){return ie.toBlob?new Promise(function(he){ie.toBlob(he)}):G(ie)}function N(ie,he){var Ce=document.implementation.createHTMLDocument(),Re=Ce.createElement("base");Ce.head.appendChild(Re);var Ke=Ce.createElement("a");return Ce.body.appendChild(Ke),Re.href=he,Ke.href=ie,Ke.href}function A(){var ie=0;return function(){return"u"+he()+ie++;function he(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function q(ie){return new Promise(function(he,Ce){var Re=new Image;Re.onload=function(){he(Re)},Re.onerror=Ce,Re.src=ie})}function ae(ie){var he=3e4;return o.impl.options.cacheBust&&(ie+=(/\?/.test(ie)?"&":"?")+new Date().getTime()),new Promise(function(Ce){var Re=new XMLHttpRequest;Re.onreadystatechange=ti,Re.ontimeout=wi,Re.responseType="blob",Re.timeout=he,Re.open("GET",ie,!0),Re.send();var Ke;if(o.impl.options.imagePlaceholder){var Ie=o.impl.options.imagePlaceholder.split(/,/);Ie&&Ie[1]&&(Ke=Ie[1])}function ti(){if(Re.readyState===4){if(Re.status!==200){Ke?Ce(Ke):Ze("cannot fetch resource: "+ie+", status: "+Re.status);return}var er=new FileReader;er.onloadend=function(){var jr=er.result.split(/,/)[1];Ce(jr)},er.readAsDataURL(Re.response)}}function wi(){Ke?Ce(Ke):Ze("timeout of "+he+"ms occured while fetching resource: "+ie)}function Ze(er){console.error(er),Ce("")}})}function $(ie,he){return"data:"+he+";base64,"+ie}function F(ie){return ie.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function de(ie){return function(he){return new Promise(function(Ce){setTimeout(function(){Ce(he)},ie)})}}function re(ie){for(var he=[],Ce=ie.length,Re=0;Re<Ce;Re++)he.push(ie[Re]);return he}function Le(ie){return ie.replace(/#/g,"%23").replace(/\n/g,"%0A")}function He(ie){var he=et(ie,"border-left-width"),Ce=et(ie,"border-right-width");return ie.scrollWidth+he+Ce}function st(ie){var he=et(ie,"border-top-width"),Ce=et(ie,"border-bottom-width");return ie.scrollHeight+he+Ce}function et(ie,he){var Ce=window.getComputedStyle(ie).getPropertyValue(he);return parseFloat(Ce.replace("px",""))}}function H(){var S=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:G,shouldProcess:k,impl:{readUrls:D,inline:R}};function k(U){return U.search(S)!==-1}function D(U){for(var N=[],A;(A=S.exec(U))!==null;)N.push(A[1]);return N.filter(function(q){return!t.isDataUrl(q)})}function R(U,N,A,q){return Promise.resolve(N).then(function($){return A?t.resolveUrl($,A):$}).then(q||t.getAndEncode).then(function($){return t.dataAsUrl($,t.mimeType(N))}).then(function($){return U.replace(ae(N),"$1"+$+"$3")});function ae($){return new RegExp(`(url\\(['"]?)(`+t.escape($)+`)(['"]?\\))`,"g")}}function G(U,N,A){if(q())return Promise.resolve(U);return Promise.resolve(U).then(D).then(function(ae){var $=Promise.resolve(U);return ae.forEach(function(F){$=$.then(function(de){return R(de,F,N,A)})}),$});function q(){return!k(U)}}}function T(){return{resolveAll:S,impl:{readAll:k}};function S(){return k().then(function(D){return Promise.all(D.map(function(R){return R.resolve()}))}).then(function(D){return D.join(`
`)})}function k(){return Promise.resolve(t.asArray(document.styleSheets)).then(R).then(D).then(function(U){return U.map(G)});function D(U){return U.filter(function(N){return N.type===CSSRule.FONT_FACE_RULE}).filter(function(N){return i.shouldProcess(N.style.getPropertyValue("src"))})}function R(U){var N=[];return U.forEach(function(A){try{t.asArray(A.cssRules||[]).forEach(N.push.bind(N))}catch(q){console.log("Error while reading CSS rules from "+A.href,q.toString())}}),N}function G(U){return{resolve:function(){var A=(U.parentStyleSheet||{}).href;return i.inlineAll(U.cssText,A)},src:function(){return U.style.getPropertyValue("src")}}}}}function K(){return{inlineAll:k,impl:{newImage:S}};function S(D){return{inline:R};function R(G){return t.isDataUrl(D.src)?Promise.resolve():Promise.resolve(D.src).then(G||t.getAndEncode).then(function(U){return t.dataAsUrl(U,t.mimeType(D.src))}).then(function(U){return new Promise(function(N,A){D.onload=N,D.onerror=A,D.src=U})})}}function k(D){if(!(D instanceof Element))return Promise.resolve(D);return R(D).then(function(){return D instanceof HTMLImageElement?S(D).inline():Promise.all(t.asArray(D.childNodes).map(function(G){return k(G)}))});function R(G){var U=G.style.getPropertyValue("background");return U?i.inlineAll(U).then(function(N){G.style.setProperty("background",N,G.style.getPropertyPriority("background"))}).then(function(){return G}):Promise.resolve(G)}}}})()})(cc);var Rf=cc.exports;const Df=Of(Rf);var lo={exports:{}};const Tf={},If=Object.freeze(Object.defineProperty({__proto__:null,default:Tf},Symbol.toStringTag,{value:"Module"})),Hi=Lf(If);/**
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
 */(function(r,e){(function(t,i){i(e)})(Ef,function(t){var i={},s={exports:{}};(function(V){var Z=function(ve){return typeof ve<"u"&&ve.versions!=null&&ve.versions.node!=null&&ve+""=="[object process]"};V.exports.isNode=Z,V.exports.platform=typeof process<"u"&&Z(process)?"node":"browser";var Q=V.exports.platform==="node"&&Hi;V.exports.isMainThread=V.exports.platform==="node"?(!Q||Q.isMainThread)&&!process.connected:typeof Window<"u",V.exports.cpus=V.exports.platform==="browser"?self.navigator.hardwareConcurrency:Hi.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function V(ve,We){var ke=this;if(!(this instanceof V))throw new SyntaxError("Constructor must be called with the new operator");if(typeof ve!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var tt=[],Ne=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var le=function(Ae,Me){tt.push(Ae),Ne.push(Me)};this.then=function(Y,Ae){return new V(function(Me,mt){var Ot=Y?Z(Y,Me,mt):Me,Ar=Ae?Z(Ae,Me,mt):mt;le(Ot,Ar)},ke)};var je=function(Ae){return ke.resolved=!0,ke.rejected=!1,ke.pending=!1,tt.forEach(function(Me){Me(Ae)}),le=function(mt,Ot){mt(Ae)},je=B=function(){},ke},B=function(Ae){return ke.resolved=!1,ke.rejected=!0,ke.pending=!1,Ne.forEach(function(Me){Me(Ae)}),le=function(mt,Ot){Ot(Ae)},je=B=function(){},ke};this.cancel=function(){return We?We.cancel():B(new Q),ke},this.timeout=function(Y){if(We)We.timeout(Y);else{var Ae=setTimeout(function(){B(new J("Promise timed out after "+Y+" ms"))},Y);ke.always(function(){clearTimeout(Ae)})}return ke},ve(function(Y){je(Y)},function(Y){B(Y)})}function Z(ve,We,ke){return function(tt){try{var Ne=ve(tt);Ne&&typeof Ne.then=="function"&&typeof Ne.catch=="function"?Ne.then(We,ke):We(Ne)}catch(le){ke(le)}}}V.prototype.catch=function(ve){return this.then(null,ve)},V.prototype.always=function(ve){return this.then(ve,ve)},V.all=function(ve){return new V(function(We,ke){var tt=ve.length,Ne=[];tt?ve.forEach(function(le,je){le.then(function(B){Ne[je]=B,tt--,tt==0&&We(Ne)},function(B){tt=0,ke(B)})}):We(Ne)})},V.defer=function(){var ve={};return ve.promise=new V(function(We,ke){ve.resolve=We,ve.reject=ke}),ve};function Q(ve){this.message=ve||"promise cancelled",this.stack=new Error().stack}Q.prototype=new Error,Q.prototype.constructor=Error,Q.prototype.name="CancellationError",V.CancellationError=Q;function J(ve){this.message=ve||"timeout exceeded",this.stack=new Error().stack}return J.prototype=new Error,J.prototype.constructor=Error,J.prototype.name="TimeoutError",V.TimeoutError=J,a.Promise=V,a}function h(V,Z){(Z==null||Z>V.length)&&(Z=V.length);for(var Q=0,J=Array(Z);Q<Z;Q++)J[Q]=V[Q];return J}function u(V,Z){var Q=typeof Symbol<"u"&&V[Symbol.iterator]||V["@@iterator"];if(!Q){if(Array.isArray(V)||(Q=W(V))||Z){Q&&(V=Q);var J=0,ve=function(){};return{s:ve,n:function(){return J>=V.length?{done:!0}:{done:!1,value:V[J++]}},e:function(Ne){throw Ne},f:ve}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var We,ke=!0,tt=!1;return{s:function(){Q=Q.call(V)},n:function(){var Ne=Q.next();return ke=Ne.done,Ne},e:function(Ne){tt=!0,We=Ne},f:function(){try{ke||Q.return==null||Q.return()}finally{if(tt)throw We}}}}function d(V,Z,Q){return(Z=x(Z))in V?Object.defineProperty(V,Z,{value:Q,enumerable:!0,configurable:!0,writable:!0}):V[Z]=Q,V}function p(V,Z){var Q=Object.keys(V);if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(V);Z&&(J=J.filter(function(ve){return Object.getOwnPropertyDescriptor(V,ve).enumerable})),Q.push.apply(Q,J)}return Q}function b(V){for(var Z=1;Z<arguments.length;Z++){var Q=arguments[Z]!=null?arguments[Z]:{};Z%2?p(Object(Q),!0).forEach(function(J){d(V,J,Q[J])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(Q)):p(Object(Q)).forEach(function(J){Object.defineProperty(V,J,Object.getOwnPropertyDescriptor(Q,J))})}return V}function v(V,Z){if(typeof V!="object"||!V)return V;var Q=V[Symbol.toPrimitive];if(Q!==void 0){var J=Q.call(V,Z||"default");if(typeof J!="object")return J;throw new TypeError("@@toPrimitive must return a primitive value.")}return(Z==="string"?String:Number)(V)}function x(V){var Z=v(V,"string");return typeof Z=="symbol"?Z:Z+""}function _(V){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Z){return typeof Z}:function(Z){return Z&&typeof Symbol=="function"&&Z.constructor===Symbol&&Z!==Symbol.prototype?"symbol":typeof Z},_(V)}function W(V,Z){if(V){if(typeof V=="string")return h(V,Z);var Q={}.toString.call(V).slice(8,-1);return Q==="Object"&&V.constructor&&(Q=V.constructor.name),Q==="Map"||Q==="Set"?Array.from(V):Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q)?h(V,Z):void 0}}var O={exports:{}},M={},H;function T(){return H||(H=1,M.validateOptions=function(Z,Q,J){if(Z){var ve=Z?Object.keys(Z):[],We=ve.find(function(tt){return!Q.includes(tt)});if(We)throw new Error('Object "'+J+'" contains an unknown option "'+We+'"');var ke=Q.find(function(tt){return Object.prototype[tt]&&!ve.includes(tt)});if(ke)throw new Error('Object "'+J+'" contains an inherited option "'+ke+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return Z}},M.workerOptsNames=["credentials","name","type"],M.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],M.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),M}var K,S;function k(){return S||(S=1,K=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),K}var D;function R(){if(D)return O.exports;D=1;var V=l(),Z=V.Promise,Q=n,J=T(),ve=J.validateOptions,We=J.forkOptsNames,ke=J.workerThreadOptsNames,tt=J.workerOptsNames,Ne="__workerpool-terminate__";function le(){var me=B();if(!me)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return me}function je(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":_(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function B(){try{return Hi}catch(me){if(_(me)==="object"&&me!==null&&me.code==="MODULE_NOT_FOUND")return null;throw me}}function Y(){if(Q.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var me=new Blob([k()],{type:"text/javascript"});return window.URL.createObjectURL(me)}else return __dirname+"/worker.js"}function Ae(me,Ee){if(Ee.workerType==="web")return je(),Me(me,Ee.workerOpts,Worker);if(Ee.workerType==="thread")return X=le(),mt(me,X,Ee);if(Ee.workerType==="process"||!Ee.workerType)return Ot(me,Ar(Ee),Hi);if(Q.platform==="browser")return je(),Me(me,Ee.workerOpts,Worker);var X=B();return X?mt(me,X,Ee):Ot(me,Ar(Ee),Hi)}function Me(me,Ee,X){ve(Ee,tt,"workerOpts");var $e=new X(me,Ee);return $e.isBrowserWorker=!0,$e.on=function(Ge,Be){this.addEventListener(Ge,function(ot){Be(ot.data)})},$e.send=function(Ge,Be){this.postMessage(Ge,Be)},$e}function mt(me,Ee,X){var $e,Ge;ve(X==null?void 0:X.workerThreadOpts,ke,"workerThreadOpts");var Be=new Ee.Worker(me,b({stdout:($e=X==null?void 0:X.emitStdStreams)!==null&&$e!==void 0?$e:!1,stderr:(Ge=X==null?void 0:X.emitStdStreams)!==null&&Ge!==void 0?Ge:!1},X==null?void 0:X.workerThreadOpts));return Be.isWorkerThread=!0,Be.send=function(ot,Ue){this.postMessage(ot,Ue)},Be.kill=function(){return this.terminate(),!0},Be.disconnect=function(){this.terminate()},X!=null&&X.emitStdStreams&&(Be.stdout.on("data",function(ot){return Be.emit("stdout",ot)}),Be.stderr.on("data",function(ot){return Be.emit("stderr",ot)})),Be}function Ot(me,Ee,X){ve(Ee.forkOpts,We,"forkOpts");var $e=X.fork(me,Ee.forkArgs,Ee.forkOpts),Ge=$e.send;return $e.send=function(Be){return Ge.call($e,Be)},Ee.emitStdStreams&&($e.stdout.on("data",function(Be){return $e.emit("stdout",Be)}),$e.stderr.on("data",function(Be){return $e.emit("stderr",Be)})),$e.isChildProcess=!0,$e}function Ar(me){me=me||{};var Ee=process.execArgv.join(" "),X=Ee.indexOf("--inspect")!==-1,$e=Ee.indexOf("--debug-brk")!==-1,Ge=[];return X&&(Ge.push("--inspect="+me.debugPort),$e&&Ge.push("--debug-brk")),process.execArgv.forEach(function(Be){Be.indexOf("--max-old-space-size")>-1&&Ge.push(Be)}),Object.assign({},me,{forkArgs:me.forkArgs,forkOpts:Object.assign({},me.forkOpts,{execArgv:(me.forkOpts&&me.forkOpts.execArgv||[]).concat(Ge),stdio:me.emitStdStreams?"pipe":void 0})})}function tr(me){for(var Ee=new Error(""),X=Object.keys(me),$e=0;$e<X.length;$e++)Ee[X[$e]]=me[X[$e]];return Ee}function ur(me,Ee){if(Object.keys(me.processing).length===1){var X=Object.values(me.processing)[0];X.options&&typeof X.options.on=="function"&&X.options.on(Ee)}}function ri(me,Ee){var X=this,$e=Ee||{};this.script=me||Y(),this.worker=Ae(this.script,$e),this.debugPort=$e.debugPort,this.forkOpts=$e.forkOpts,this.forkArgs=$e.forkArgs,this.workerOpts=$e.workerOpts,this.workerThreadOpts=$e.workerThreadOpts,this.workerTerminateTimeout=$e.workerTerminateTimeout,me||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Ue){ur(X,{stdout:Ue.toString()})}),this.worker.on("stderr",function(Ue){ur(X,{stderr:Ue.toString()})}),this.worker.on("message",function(Ue){if(!X.terminated)if(typeof Ue=="string"&&Ue==="ready")X.worker.ready=!0,Be();else{var Bt=Ue.id,yt=X.processing[Bt];yt!==void 0&&(Ue.isEvent?yt.options&&typeof yt.options.on=="function"&&yt.options.on(Ue.payload):(delete X.processing[Bt],X.terminating===!0&&X.terminate(),Ue.error?yt.resolver.reject(tr(Ue.error)):yt.resolver.resolve(Ue.result)))}});function Ge(Ue){X.terminated=!0;for(var Bt in X.processing)X.processing[Bt]!==void 0&&X.processing[Bt].resolver.reject(Ue);X.processing=Object.create(null)}function Be(){var Ue=u(X.requestQueue.splice(0)),Bt;try{for(Ue.s();!(Bt=Ue.n()).done;){var yt=Bt.value;X.worker.send(yt.message,yt.transfer)}}catch(nn){Ue.e(nn)}finally{Ue.f()}}var ot=this.worker;this.worker.on("error",Ge),this.worker.on("exit",function(Ue,Bt){var yt=`Workerpool Worker terminated Unexpectedly
`;yt+="    exitCode: `"+Ue+"`\n",yt+="    signalCode: `"+Bt+"`\n",yt+="    workerpool.script: `"+X.script+"`\n",yt+="    spawnArgs: `"+ot.spawnargs+"`\n",yt+="    spawnfile: `"+ot.spawnfile+"`\n",yt+="    stdout: `"+ot.stdout+"`\n",yt+="    stderr: `"+ot.stderr+"`\n",Ge(new Error(yt))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return ri.prototype.methods=function(){return this.exec("methods")},ri.prototype.exec=function(me,Ee,X,$e){X||(X=Z.defer());var Ge=++this.lastId;this.processing[Ge]={id:Ge,resolver:X,options:$e};var Be={message:{id:Ge,method:me,params:Ee},transfer:$e&&$e.transfer};this.terminated?X.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Be.message,Be.transfer):this.requestQueue.push(Be);var ot=this;return X.promise.catch(function(Ue){if(Ue instanceof Z.CancellationError||Ue instanceof Z.TimeoutError)return delete ot.processing[Ge],ot.terminateAndNotify(!0).then(function(){throw Ue},function(Bt){throw Bt});throw Ue})},ri.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},ri.prototype.terminate=function(me,Ee){var X=this;if(me){for(var $e in this.processing)this.processing[$e]!==void 0&&this.processing[$e].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Ee=="function"&&(this.terminationHandler=Ee),this.busy())this.terminating=!0;else{var Ge=function(Ue){if(X.terminated=!0,X.cleaning=!1,X.worker!=null&&X.worker.removeAllListeners&&X.worker.removeAllListeners("message"),X.worker=null,X.terminating=!1,X.terminationHandler)X.terminationHandler(Ue,X);else if(Ue)throw Ue};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ge(new Error("worker already killed!"));return}var Be=setTimeout(function(){X.worker&&X.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Be),X.worker&&(X.worker.killed=!0),Ge()}),this.worker.ready?this.worker.send(Ne):this.requestQueue.push({message:Ne}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ge()}},ri.prototype.terminateAndNotify=function(me,Ee){var X=Z.defer();return Ee&&X.promise.timeout(Ee),this.terminate(me,function($e,Ge){$e?X.reject($e):X.resolve(Ge)}),X.promise},O.exports=ri,O.exports._tryRequireWorkerThreads=B,O.exports._setupProcessWorker=Ot,O.exports._setupBrowserWorker=Me,O.exports._setupWorkerThreadWorker=mt,O.exports.ensureWorkerThreads=le,O.exports}var G,U;function N(){if(U)return G;U=1;var V=65535;G=Z;function Z(){this.ports=Object.create(null),this.length=0}return Z.prototype.nextAvailableStartingAt=function(Q){for(;this.ports[Q]===!0;)Q++;if(Q>=V)throw new Error("WorkerPool debug port limit reached: "+Q+">= "+V);return this.ports[Q]=!0,this.length++,Q},Z.prototype.releasePort=function(Q){delete this.ports[Q],this.length--},G}var A,q;function ae(){if(q)return A;q=1;var V=l(),Z=V.Promise,Q=R(),J=n,ve=N(),We=new ve;function ke(B,Y){typeof B=="string"?this.script=B||null:(this.script=null,Y=B),this.workers=[],this.tasks=[],Y=Y||{},this.forkArgs=Object.freeze(Y.forkArgs||[]),this.forkOpts=Object.freeze(Y.forkOpts||{}),this.workerOpts=Object.freeze(Y.workerOpts||{}),this.workerThreadOpts=Object.freeze(Y.workerThreadOpts||{}),this.debugPortStart=Y.debugPortStart||43210,this.nodeWorker=Y.nodeWorker,this.workerType=Y.workerType||Y.nodeWorker||"auto",this.maxQueueSize=Y.maxQueueSize||1/0,this.workerTerminateTimeout=Y.workerTerminateTimeout||1e3,this.onCreateWorker=Y.onCreateWorker||function(){return null},this.onTerminateWorker=Y.onTerminateWorker||function(){return null},this.emitStdStreams=Y.emitStdStreams||!1,Y&&"maxWorkers"in Y?(tt(Y.maxWorkers),this.maxWorkers=Y.maxWorkers):this.maxWorkers=Math.max((J.cpus||4)-1,1),Y&&"minWorkers"in Y&&(Y.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Ne(Y.minWorkers),this.minWorkers=Y.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&Q.ensureWorkerThreads()}ke.prototype.exec=function(B,Y,Ae){if(Y&&!Array.isArray(Y))throw new TypeError('Array expected as argument "params"');if(typeof B=="string"){var Me=Z.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var mt=this.tasks,Ot={method:B,params:Y,resolver:Me,timeout:null,options:Ae};mt.push(Ot);var Ar=Me.promise.timeout;return Me.promise.timeout=function(ur){return mt.indexOf(Ot)!==-1?(Ot.timeout=ur,Me.promise):Ar.call(Me.promise,ur)},this._next(),Me.promise}else{if(typeof B=="function")return this.exec("run",[String(B),Y],Ae);throw new TypeError('Function or string expected as argument "method"')}},ke.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var B=this;return this.exec("methods").then(function(Y){var Ae={};return Y.forEach(function(Me){Ae[Me]=function(){return B.exec(Me,Array.prototype.slice.call(arguments))}}),Ae})},ke.prototype._next=function(){if(this.tasks.length>0){var B=this._getWorker();if(B){var Y=this,Ae=this.tasks.shift();if(Ae.resolver.promise.pending){var Me=B.exec(Ae.method,Ae.params,Ae.resolver,Ae.options).then(Y._boundNext).catch(function(){if(B.terminated)return Y._removeWorker(B)}).then(function(){Y._next()});typeof Ae.timeout=="number"&&Me.timeout(Ae.timeout)}else Y._next()}}},ke.prototype._getWorker=function(){for(var B=this.workers,Y=0;Y<B.length;Y++){var Ae=B[Y];if(Ae.busy()===!1)return Ae}return B.length<this.maxWorkers?(Ae=this._createWorkerHandler(),B.push(Ae),Ae):null},ke.prototype._removeWorker=function(B){var Y=this;return We.releasePort(B.debugPort),this._removeWorkerFromList(B),this._ensureMinWorkers(),new Z(function(Ae,Me){B.terminate(!1,function(mt){Y.onTerminateWorker({forkArgs:B.forkArgs,forkOpts:B.forkOpts,workerThreadOpts:B.workerThreadOpts,script:B.script}),mt?Me(mt):Ae(B)})})},ke.prototype._removeWorkerFromList=function(B){var Y=this.workers.indexOf(B);Y!==-1&&this.workers.splice(Y,1)},ke.prototype.terminate=function(B,Y){var Ae=this;this.tasks.forEach(function(tr){tr.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var Me=function(ur){We.releasePort(ur.debugPort),this._removeWorkerFromList(ur)},mt=Me.bind(this),Ot=[],Ar=this.workers.slice();return Ar.forEach(function(tr){var ur=tr.terminateAndNotify(B,Y).then(mt).always(function(){Ae.onTerminateWorker({forkArgs:tr.forkArgs,forkOpts:tr.forkOpts,workerThreadOpts:tr.workerThreadOpts,script:tr.script})});Ot.push(ur)}),Z.all(Ot)},ke.prototype.stats=function(){var B=this.workers.length,Y=this.workers.filter(function(Ae){return Ae.busy()}).length;return{totalWorkers:B,busyWorkers:Y,idleWorkers:B-Y,pendingTasks:this.tasks.length,activeTasks:Y}},ke.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var B=this.workers.length;B<this.minWorkers;B++)this.workers.push(this._createWorkerHandler())},ke.prototype._createWorkerHandler=function(){var B=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new Q(B.script||this.script,{forkArgs:B.forkArgs||this.forkArgs,forkOpts:B.forkOpts||this.forkOpts,workerOpts:B.workerOpts||this.workerOpts,workerThreadOpts:B.workerThreadOpts||this.workerThreadOpts,debugPort:We.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function tt(B){if(!le(B)||!je(B)||B<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Ne(B){if(!le(B)||!je(B)||B<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function le(B){return typeof B=="number"}function je(B){return Math.round(B)==B}return A=ke,A}var $={},F,de;function re(){if(de)return F;de=1;function V(Z,Q){this.message=Z,this.transfer=Q}return F=V,F}var Le;function He(){return Le||(Le=1,function(V){var Z=re(),Q="__workerpool-terminate__",J={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")J.on=function(le,je){addEventListener(le,function(B){je(B.data)})},J.send=function(le,je){je?postMessage(le,je):postMessage(le)};else if(typeof process<"u"){var ve;try{ve=Hi}catch(le){if(!(_(le)==="object"&&le!==null&&le.code==="MODULE_NOT_FOUND"))throw le}if(ve&&ve.parentPort!==null){var We=ve.parentPort;J.send=We.postMessage.bind(We),J.on=We.on.bind(We),J.exit=process.exit.bind(process)}else J.on=process.on.bind(process),J.send=function(le){process.send(le)},J.on("disconnect",function(){process.exit(1)}),J.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ke(le){return Object.getOwnPropertyNames(le).reduce(function(je,B){return Object.defineProperty(je,B,{value:le[B],enumerable:!0})},{})}function tt(le){return le&&typeof le.then=="function"&&typeof le.catch=="function"}J.methods={},J.methods.run=function(je,B){var Y=new Function("return ("+je+").apply(null, arguments);");return Y.apply(Y,B)},J.methods.methods=function(){return Object.keys(J.methods)},J.terminationHandler=void 0,J.cleanupAndExit=function(le){var je=function(){J.exit(le)};if(!J.terminationHandler)return je();var B=J.terminationHandler(le);tt(B)?B.then(je,je):je()};var Ne=null;J.on("message",function(le){if(le===Q)return J.cleanupAndExit(0);try{var je=J.methods[le.method];if(je){Ne=le.id;var B=je.apply(je,le.params);tt(B)?B.then(function(Y){Y instanceof Z?J.send({id:le.id,result:Y.message,error:null},Y.transfer):J.send({id:le.id,result:Y,error:null}),Ne=null}).catch(function(Y){J.send({id:le.id,result:null,error:ke(Y)}),Ne=null}):(B instanceof Z?J.send({id:le.id,result:B.message,error:null},B.transfer):J.send({id:le.id,result:B,error:null}),Ne=null)}else throw new Error('Unknown method "'+le.method+'"')}catch(Y){J.send({id:le.id,result:null,error:ke(Y)})}}),J.register=function(le,je){if(le)for(var B in le)le.hasOwnProperty(B)&&(J.methods[B]=le[B]);je&&(J.terminationHandler=je.onTerminate),J.send("ready")},J.emit=function(le){if(Ne){if(le instanceof Z){J.send({id:Ne,isEvent:!0,payload:le.message},le.transfer);return}J.send({id:Ne,isEvent:!0,payload:le})}},V.add=J.register,V.emit=J.emit}($)),$}var st=n.platform,et=n.isMainThread,ie=n.cpus;function he(V,Z){var Q=ae();return new Q(V,Z)}var Ce=i.pool=he;function Re(V,Z){var Q=He();Q.add(V,Z)}var Ke=i.worker=Re;function Ie(V){var Z=He();Z.emit(V)}var ti=i.workerEmit=Ie,wi=l(),Ze=wi.Promise,er=i.Promise=Ze,jr=i.Transfer=re(),xa=i.platform=st,Sa=i.isMainThread=et,$a=i.cpus=ie;t.Promise=er,t.Transfer=jr,t.cpus=$a,t.default=i,t.isMainThread=Sa,t.platform=xa,t.pool=Ce,t.worker=Ke,t.workerEmit=ti,Object.defineProperty(t,"__esModule",{value:!0})})})(lo,lo.exports);var Mf=lo.exports,wt=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},uc=class extends wt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Uf=class extends wt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Ff=class extends wt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,t=this.parent.histogram.value.filter(s=>s.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},zf=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},Nf=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],jf=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Bf=zf(),Rr={iron:{pixels:jf,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:Nf,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:Bf,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Hf=class extends wt{get availablePalettes(){return Rr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},no,Wf=(no=class{},c(no,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),no),pt,nt=(pt=class extends Wf{static humanRangeDates(e,t){return e=pt.inputToDate(e),t=pt.inputToDate(t),e.getUTCDate()===t.getUTCDate()?pt.humanDate(e):[pt.humanDate(e),pt.humanDate(t)].join(" - ")}static human(e){return`${pt.humanDate(e)} ${pt.humanTime(e,!0)} `}},c(pt,"isoDate",e=>(e=pt.inputToDate(e),eo(e,{representation:"date"}))),c(pt,"isoTime",e=>(e=pt.inputToDate(e),eo(e,{representation:"time"}))),c(pt,"isoComplete",e=>(e=pt.inputToDate(e),eo(e))),c(pt,"humanTime",(e,t=!1)=>(e=pt.inputToDate(e),at(e,t?"HH:mm:ss":"HH:mm"))),c(pt,"humanDate",(e,t=!1)=>(e=pt.inputToDate(e),at(e,t?"d. M.":"d. M. yyyy"))),pt),ee=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},ta=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new ee);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},ht=class{constructor(r,e,t){c(this,"onSerializableChange",new ee);c(this,"_selected",!1);c(this,"onSelected",new ee);c(this,"onDeselected",new ee);c(this,"onValues",new ee);c(this,"onMoveOrResize",new ee);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new ee);c(this,"_initialColor");c(this,"onSetInitialColor",new ee);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new ee);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{console.log("Serializovatelná změna"),this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},dc=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new ee);c(this,"pxY");c(this,"_y");c(this,"onY",new ee);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new ee);c(this,"onMouseLeave",new ee);c(this,"onActivate",new ee);c(this,"onDeactivate",new ee);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},Vt,Gf=(Vt=class extends dc{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(Vt.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=Vt.sizePx(-.5),t.style.left=Vt.sizePx(-.5),t.style.width=Vt.sizePx(),t.style.height=Vt.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=Vt.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=Vt.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${Vt.sizePx(.5)} - 3px )`,t.style.left=`calc( ${Vt.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(Vt,"size",20),Vt),pr=class pc extends ht{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new Gf("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new fc(this)),this._graph}static addAtPoint(t,i,s,n,a){return new pc(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(u=>u.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=ht.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=ht.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=ht.serializedGetNumericalValueByKey(i,"top"),h=ht.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},fc=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new ee);c(this,"onGraphData",new ee);c(this,"onAnalysisSelection",new ee);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof pr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof pr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof pr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof pr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},Vf=class extends dc{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Yf=class extends Vf{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},xr=class extends ht{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new fc(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,u=a-n;return{top:n,left:o,width:h,height:u}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Yf(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(b=>b.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=ht.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=ht.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=ht.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=ht.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=ht.serializedGetNumericalValueByKey(t,"top"),u=ht.serializedGetNumericalValueByKey(t,"left"),d=ht.serializedGetNumericalValueByKey(t,"width"),p=ht.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),u!==void 0&&u!==this.left&&(this.setLeft(u),i=!0),d!==void 0&&d!==this.width&&(this.setWidth(d),i=!0),p!==void 0&&p!==this.height&&(this.setHeight(p),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},gc=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},dh=class extends gc{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},ph=class Pn extends xr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Pn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=Pn.calculateDimensionsFromCorners(s,n,a,o),p=new Pn(e,t,i,l,h,u,d);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new dh(this,e,t,e+i,t+s):new dh(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++)if(this.isWithin(d,h)){const p=this.file.pixels[u+d];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},fh=class extends gc{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},gh=class An extends xr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new An(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=An.calculateDimensionsFromCorners(s,n,a,o),p=new An(e,t,i,l,h,u,d);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new fh(this,e,t,e+i,t+s):new fh(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++){const p=this.file.pixels[u+d];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},En=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],qf=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new ee);c(this,"onRemove",new ee);c(this,"onSelectionChange",new ee);c(this,"colors",En);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=gh.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=gh.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=ph.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=ph.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=pr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=pr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=En.filter(i=>!e.includes(i));return t.length>0?t[0]:En[0]}getNextName(e){return`${e} ${this.all.length}`}},Xf=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},Kf=class extends wt{constructor(){super(...arguments);c(this,"layers",new qf(this));c(this,"points",new Xf(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,u=e.layerY/o;return{top:Math.round(l*u),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Zf=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new ee);c(this,"onAddGraph",new ee);c(this,"onRemoveGraph",new ee);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:at(a,"m:ss:SSS")+" ",[e[1].key]:at(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},Qf=class extends wt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new ee);c(this,"listeners",new Zf(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=Gs({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=lc(i)(e);hc(i)(s)}},Jf=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new ee);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},Vi,mc=(Vi=class extends wt{constructor(){super(...arguments);c(this,"onSlotInit",new ee);c(this,"onSlotRemove",new ee);c(this,"onSlot1Assignement",new ee);c(this,"onSlot2Assignement",new ee);c(this,"onSlot3Assignement",new ee);c(this,"onSlot4Assignement",new ee);c(this,"onSlot5Assignement",new ee);c(this,"onSlot6Assignement",new ee);c(this,"onSlot7Assignement",new ee);c(this,"onSlot1Serialize",new ee);c(this,"onSlot2Serialize",new ee);c(this,"onSlot3Serialize",new ee);c(this,"onSlot4Serialize",new ee);c(this,"onSlot5Serialize",new ee);c(this,"onSlot6Serialize",new ee);c(this,"onSlot7Serialize",new ee)}getNextFreeSlotNumber(){for(let t=1;t<=Vi.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new Jf(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(_=>_.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=ht.serializedGetNumericalValueByKey(s,"top"),l=ht.serializedGetNumericalValueByKey(s,"left");const h=ht.serializedGetStringValueByKey(s,"color");let u=ht.serializedGetNumericalValueByKey(s,"width"),d=ht.serializedGetNumericalValueByKey(s,"height");const p=ht.serializedSegmentsHasExact(s,"avg"),b=ht.serializedSegmentsHasExact(s,"min"),v=ht.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let x;if(a==="point"){if(o===void 0||l===void 0)return;x=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||u===void 0||d===void 0)return;u<0&&(u=0),u+l>this.parent.width-1&&(u=this.parent.width-l-1),d<0&&(d=0),d+o>this.parent.height-1&&(d=this.parent.height-o-1),x=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,u+l,d+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,u+l,d+o,h,!1)}if(x!==void 0){if(x instanceof pr?p&&x.graph.setAvgActivation(!0):x instanceof xr&&(p&&x.graph.setAvgActivation(!0),b&&x.graph.setMinActivation(!0),v&&x.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const _=this.getNextFreeSlotNumber();_!==void 0&&this.assignSlot(_,x)}else i!==void 0&&this.assignSlot(i,x);return x}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(Vi,"MAX_SLOTS",7),Vi),eg=class extends wt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},tg=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",1);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},yc={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},rg=class extends wt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new ee);c(this,"callbacksPlay",new ee);c(this,"callbacksPause",new ee);c(this,"callbacksStop",new ee);c(this,"callbacksEnd",new ee);c(this,"callbacksChangeFrame",new ee);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new tg(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return yc[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),at(t,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(l=>l.relative<=e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},ig=class extends wt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new ee)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},ra=class{},$t,sg=($t=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add($t.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add($t.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove($t.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add($t.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove($t.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add($t.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove($t.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove($t.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c($t,"CLASS_BASE","thermalImageRoot"),c($t,"CLASS_BUILT",$t.CLASS_BASE+"__built"),c($t,"CLASS_HYDRATED",$t.CLASS_BASE+"__mounted"),c($t,"CLASS_HOVER",$t.CLASS_BASE+"__hover"),$t),ng=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new ee),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},ag=class extends ra{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new ng(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new sg(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),u=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[u]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&(this.dom.canvasLayer.opacity=e)}},ia=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Or=class ho{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=ho.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=ho.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},og=class extends ia{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=Or.createVisibleLayer(),this._url&&(this.image=Or.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},lg=class extends ia{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Or.createCanvasContainer(),this.canvas=Or.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof pr?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,u)=>{const p=new OffscreenCanvas(a,o).getContext("2d"),b=n-s,v=u.map(O=>({id:O[1],type:O[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let O=0;O<a;O++)for(let M=0;M<o;M++){const H=O+M*a,T=l[H];let K=T;K<s&&(K=s),K>n&&(K=n);const k=(K-s)/b,D=Math.round(255*k),R=h[D];p.fillStyle=R,p.fillRect(O,M,1,1);const G=(U,N,A,q,ae,$)=>{const F=A+ae/2,de=q+$/2,re=(U-F)/(ae/2),Le=(N-de)/($/2);return re*re+Le*Le<=1};u.forEach((U,N)=>{const A=v[N],[q,ae,$,F,de,re]=U;q==="point"?O===F&&M===$&&(A.avg.value=T):q==="rectangle"?O>=F&&O<F+de&&M>=$&&M<$+re&&(T<A.min.value&&(A.min.value=T),T>A.max.value&&(A.max.value=T),A.avg.count=A.avg.count+1,A.avg.sum=A.avg.sum+T):q==="ellipsis"&&G(O,M,F,$,a,o)&&(T<A.min.value&&(A.min.value=T),T>A.max.value&&(A.max.value=T),A.avg.count=A.avg.count+1,A.avg.sum=A.avg.sum+T)})}const x=v.map(O=>({id:O.id,min:O.min.value!==1/0?O.min.value:void 0,max:O.max.value!==-1/0?O.max.value:void 0,avg:O.type==="point"?O.avg.value:O.avg.sum/O.avg.count})),_=p.getImageData(0,0,a,o);return{image:await createImageBitmap(_),stats:x}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},hg=class extends ia{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Or.createCursorLayerRoot(),this.center=Or.createCursorLayerCenter(),this.axisX=Or.createCursorLayerX(),this.axisY=Or.createCursorLayerY(),this.label=Or.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},cg=class extends ia{constructor(e){super(e);c(this,"container");this.container=Or.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},vc=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},li=class extends vc{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=Vs.fromService(t,i,s,n);return t.files.addFile(a),a}},vt,bc=(vt=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new ee)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=vt.FONT_SIZE_NORMAL,s="normal",n=vt.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=vt.FONT_SIZE_NORMAL,i.style.fontFamily=vt.FONT_FAMILY,i.style.color=vt.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){Df.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const u=e.clientWidth,d=60,b=u/(d+40),v=document.createElement("div");v.style.width="100%",v.style.position="relative",v.style.paddingLeft=d/2+"px",v.style.paddingRight=d/2+"px",v.style.boxSizing="border-box";const x=document.createElement("div");x.style.width="100%",x.style.position="relative",x.style.backgroundColor=o,x.style.height="30px";const _=i-t,W=s-t,O=n-t,M=W/_*100,H=O/_*100,T=document.createElement("div");T.style.position="absolute",T.style.backgroundImage=a,T.style.height="100%",T.style.top="0px",T.style.left=M+"%",T.style.width=H-M+"%",x.appendChild(T),v.appendChild(x);const K=document.createElement("div");K.style.width="100%",K.style.height="40px",K.style.position="relative";const S=(R,G=!1,U,N)=>{const A=R/_*100,q=document.createElement("div");q.style.position="absolute",q.style.top="0px",q.style.left=`calc( ${A}% - ${d/2}px )`,q.style.width=d+"px",q.style.textAlign="center",q.style.lineHeight="0px";const ae=document.createElement("div"),$=document.createElement("div"),F=document.createElement("div"),de=7,re=de+"px";ae.innerHTML=(t+R).toFixed(2)+" °C",ae.style.display="inline-block",ae.style.fontSize=vt.FONT_SIZE_SMALL,ae.style.lineHeight="1em",ae.style.padding="3px",ae.style.position="relative",$.style.width="100%",$.style.height=re,$.style.textAlign="center",$.style.position="relative",$.style.lineHeight="0px",F.style.content="",F.style.display="inline-block",G?(F.style.width=de*2+"px",F.style.height=de*2+"px",F.style.rotate="45deg",F.style.backgroundColor=N,ae.style.backgroundColor=N,ae.style.zIndex="99",ae.style.color=U):(F.style.width="1px",F.style.height=re,F.style.backgroundColor=U),$.appendChild(F),q.appendChild($),q.appendChild(ae),K.appendChild(q)};if(h){const R=document.createElement("div");R.style.position="absolute",R.style.border=`2px solid ${l}`,R.style.height="100%",R.style.boxSizing="border-box";const G=(h.from-t)/_*100,U=(h.to-t)/_*100-G;R.style.left=G+"%",R.style.width=U+"%",x.appendChild(R),S(h.from-t,!0,"white",o),S(h.to-t,!0,"white",o)}const k=_/b;let D=0;for(;D<=_;)S(D,!1,l,"transparent"),D=D+k;return S(W,!0,"white",l),S(O,!0,"white",l),v.appendChild(K),v}},c(vt,"FONT_SIZE_NORMAL","16px"),c(vt,"FONT_SIZE_SMALL","12px"),c(vt,"COLOR_BASE","black"),c(vt,"COLOR_GRAY","gray"),c(vt,"COLOR_LIGHT","lightgray"),c(vt,"WIDTH","1600px"),c(vt,"FONT_FAMILY","sans-serif"),c(vt,"GAP_BASE","10px"),c(vt,"GAP_SMALL","5px"),c(vt,"DEBUG",!1),vt),Rt,ug=(Rt=class extends bc{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...Rt.DEFAULT_PARAMS,...t,fileName:i}}onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i);s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),n.service.loadFile(this.file.thermalUrl).then(async o=>{if(o instanceof li){this.localInstance=await o.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){const h=this.file.group.registry.minmax.value.min,u=this.file.group.registry.minmax.value.max,d=h!==this.file.meta.current.min||u!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,u,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",d)),this.localInstance.mountToDom(this.container);const p=this.localInstance;if(p.dom&&p.dom.visibleLayer&&(p.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const b=document.createElement("table");b.style.width="100%",b.style.borderCollapse="collapse";const v=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(x=>{const _=this.createElementWithText("th",x,Rt.FONT_SIZE_SMALL,void 0,Rt.COLOR_GRAY);_.style.padding=Rt.GAP_SMALL+"px",_.style.textAlign="left",v.appendChild(_)}),b.appendChild(v),this.container.appendChild(b),this.file.slots.forEveryExistingSlot((x,_)=>{var O;const W=(O=this.localInstance)==null?void 0:O.slots.createFromSerialized(x.serialized,_);if(W){const M=document.createElement("tr"),H=this.createElementWithText("td",x.analysis.name,Rt.FONT_SIZE_SMALL,void 0,x.analysis.initialColor);H.style.borderTop=`1px solid ${Rt.COLOR_LIGHT}`,H.style.padding=`${Rt.GAP_SMALL}px 0px ${Rt.GAP_SMALL} 0px`,M.appendChild(H);const T=(K,S)=>{const k=this.createElementWithText("td",S?S.toFixed(3)+" °C":"",Rt.FONT_SIZE_SMALL,void 0);k.style.borderTop=`1px solid ${Rt.COLOR_LIGHT}`,k.style.paddingTop=`${Rt.GAP_SMALL}px`,k.style.paddingBottom=`${Rt.GAP_SMALL}px`,M.appendChild(k)};x.analysis instanceof xr?(T(x.analysis.initialColor,W.avg),T(x.analysis.initialColor,W.min),T(x.analysis.initialColor,W.max)):x.analysis instanceof pr&&(T(x.analysis.initialColor,W.avg),T(x.analysis.initialColor),T(x.analysis.initialColor)),b.appendChild(M)}})}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},1e3)}}})}},c(Rt,"DEFAULT_PARAMS",{fileName:"sth",width:1200,showAnalysis:!0,backgroundColor:"white"}),Rt),Vs=class wc extends ag{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new ta(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new ug(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new lg(this),visibleLayer:new og(this,this.visibleUrl),cursorLayer:new hg(this),listenerLayer:new cg(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new eg(this,void 0),this.timeline=new rg(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new ig(this,!1),this.analysis=new Kf(this,[]),this.analysisData=new Qf(this),this.slots=new mc(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new wc(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){this.getAllApplicableFilters();const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},dg=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof xr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof xr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof xr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof xr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:nt.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof xr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=Gs({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=lc(s)(i);hc(s)(n)}},Xe,pg=(Xe=class extends bc{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=Xe.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,Xe.FONT_SIZE_SMALL,"normal",Xe.COLOR_BASE);l.style.paddingTop=Xe.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,Xe.FONT_SIZE_SMALL,void 0,Xe.COLOR_GRAY);s.style.paddingTop=Xe.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${nt.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,Xe.FONT_SIZE_SMALL,void 0,Xe.COLOR_GRAY);return n.style.paddingTop=Xe.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=Xe.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${nt.human(t.timeline.currentStep.absolute)}`,Xe.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(u=>u.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const u=document.createElement("tr");["","AVG","MIN","MAX"].forEach(d=>{const p=this.createElementWithText("th",d,Xe.FONT_SIZE_SMALL,void 0,Xe.COLOR_GRAY);p.style.padding=Xe.GAP_SMALL+"px",p.style.textAlign="left",u.appendChild(p)}),h.appendChild(u),a.appendChild(h),l.slots.forEveryExistingSlot((d,p)=>{const b=t.slots.createFromSerialized(d.serialized,p);if(b){const v=document.createElement("tr"),x=this.createElementWithText("td",d.analysis.name,Xe.FONT_SIZE_SMALL,void 0,d.analysis.initialColor);x.style.borderTop=`1px solid ${Xe.COLOR_LIGHT}`,x.style.padding=`${Xe.GAP_SMALL}px 0px ${Xe.GAP_SMALL} 0px`,v.appendChild(x);const _=(W,O)=>{const M=this.createElementWithText("td",O?O.toFixed(3)+" °C":"",Xe.FONT_SIZE_SMALL,void 0);M.style.borderTop=`1px solid ${Xe.COLOR_LIGHT}`,M.style.paddingTop=`${Xe.GAP_SMALL}px`,M.style.paddingBottom=`${Xe.GAP_SMALL}px`,v.appendChild(M)};d.analysis instanceof xr?(_(d.analysis.initialColor,b.avg),_(d.analysis.initialColor,b.min),_(d.analysis.initialColor,b.max)):d.analysis instanceof pr&&(_(d.analysis.initialColor,b.avg),_(d.analysis.initialColor),_(d.analysis.initialColor)),h.appendChild(v)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(u=>u.thermalUrl);let l;o.forEach(u=>{l=n.batch.request(u,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",u=>{const d=100/t.columns;u.forEach(p=>{p instanceof Vs&&this.buildInstance(p,d,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...Xe.DEFAULT_PROPS,fileName:i}:{...Xe.DEFAULT_PROPS,...t,fileName:i}}},c(Xe,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),Xe),Wr,fg=(Wr=class extends wt{constructor(){super(...arguments);c(this,"onSlotSync",new ee);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){if(i===1)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s,assign:n}=this.getSlotListeners(t,i);n.set(Wr.LISTENER_KEY,console.log),s.set(Wr.LISTENER_KEY,a=>{this.forEveryOtherSlot(t,i,(o,l)=>{if(this.onSlotSync.call(a,i),o===void 0&&a){const h=l.slots.createFromSerialized(a,i);h==null||h.setSelected()}else o!==void 0&&a?(o.recieveSerialized(a),this.onSlotSync.call(o?o.serialized:void 0,i)):o!==void 0&&a===void 0&&o.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(Wr.LISTENER_KEY),n.delete(Wr.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){console.log(t,i),this.parent.files.forEveryInstance(s=>{if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const u=(a=n.slots.getSlot(l))==null?void 0:a.serialized,d=h.serialized;if(u!==d)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(d);else{const p=n.slots.createFromSerialized(d,l);p==null||p.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new dg(this)),this._csv}get png(){return this._png||(this._png=new pg(this)),this._png}},c(Wr,"LISTENER_KEY","__analysis__sync"),Wr),gg=class extends wt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof Vs?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},mg=class extends uc{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},yg=class extends wt{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new ee);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new ee);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new ee);c(this,"_duration",0);c(this,"onDurationChanged",new ee);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof Vs);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},sa=class{constructor(r){c(this,"active",!1);this.group=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},xc=class extends sa{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Ao=class extends sa{},vg=class extends Ao{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=mc.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},bg=class extends Ao{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},wg=class extends Ao{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},xg=class extends sa{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},Sg=[xc,bg,wg,vg,xg],$g=r=>{const e=Sg.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},_g=class extends wt{constructor(e,t){super(e,t);c(this,"_tools",$g(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof sa?this.value=e:this.value=this.tools[e]}},Cg=class extends ra{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new mg(this,void 0));c(this,"tool",new _g(this,new xc(this)));c(this,"files",new gg(this,[]));c(this,"cursorPosition",new Uf(this,void 0));c(this,"analysisSync",new fg(this,!0));c(this,"_playback");c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});c(this,"filters",new ta(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get playback(){return this._playback||(this._playback=new yg(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}getInstances(){return this.files.value}startBatch(e){return this.registry.batch.getBatchById(e)}},Yr=class Sc extends vc{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new Sc(e.url,e.code,e.message)}},$c=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},kg=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(D,R)=>{const G=D.getBigInt64(R,!0),U=62135596800000n,N=10000n,A=24n*60n*60n*1000n*N,q=0x4000000000000000n,ae=0x8000000000000000n;let F=G&0x3fffffffffffffffn;G&ae&&(F>q-A&&(F-=q),F<0&&(F+=A));const re=F/N-U;return Number(re)};n(e,5);const a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,u=l+h,d=r.slice(25),p=d.byteLength/u,b=D=>{const R=D*u,G=R+u,U=d.slice(R,G),N=new DataView(U),A=N.getFloat32(8,!0),q=N.getFloat32(12,!0),ae=n(N,0),$=N.getFloat32(24,!0),F=N.getFloat32(28,!0);return{timestamp:ae,min:A,max:q,emissivity:$,reflectedKelvins:F}},v=[];for(let D=0;D<p;D++){const R=b(D);v.push(R)}const x={emissivity:0,reflectedKelvins:0};let _=1/0,W=-1/0;const O=[];v.forEach(D=>{x.emissivity=x.emissivity+D.emissivity,x.reflectedKelvins=x.reflectedKelvins+D.reflectedKelvins,D.min<_&&(_=D.min),D.max>W&&(W=D.max),O.push(D.timestamp)});const M=O[0],H=[];O.forEach((D,R)=>{const G=O[R+1];let U=0;G===void 0&&(U=0),U=G-D;const N=D-M;H.push({absolute:D,relative:N,offset:isNaN(U)?0:U,index:R})});const T=v[v.length-1].timestamp-v[0].timestamp,K=T/p,S=1e3/K,k=v[0].timestamp;return{width:t,height:i,timestamp:k,bytesize:s,frameCount:p,duration:T,frameInterval:K,fps:S,timeline:H,min:_,max:W,averageEmissivity:x.emissivity/v.length,averageReflectedKelvins:x.reflectedKelvins/v.length}},Pg=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,u=r.slice(25),d=e*h,p=d+h;return{array:u.slice(d,p),dataType:i}},Ag=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let u=i&0x3fffffffffffffffn;i&l&&(u>o-a&&(u-=o),u<0&&(u+=a));const p=u/n-s,b=Number(p),v=t.getFloat32(8,!0),x=t.getFloat32(12,!0),_=t.getFloat32(24,!0),W=t.getFloat32(28,!0),O=r.slice(57);let M=[];if(e===0){const H=new Uint16Array(O),T=Math.abs(v-x),K=65535;H.forEach(S=>{const k=S/K;M.push(v+T*k)})}else e===1&&(M=Array.from(new Float32Array(O)));return{timestamp:b,min:v,max:x,emissivity:_,reflectedKelvins:W,pixels:M}},Eg=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(W,O)=>{const M=W.getBigInt64(O,!0),H=62135596800000n,T=10000n,K=24n*60n*60n*1000n*T,S=0x4000000000000000n,k=0x8000000000000000n;let R=M&0x3fffffffffffffffn;M&k&&(R>S-K&&(R-=S),R<0&&(R+=K));const U=R/T-H;return Number(U)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,u=s*n*l,d=h+u,p=r.slice(25),b=p.byteLength/d,v={},x=W=>{const O=W*d,M=O+d,H=p.slice(O,M),T=new DataView(H),K=a(T,0),S=T.getFloat32(8,!0),D=T.getFloat32(12,!0)-S,G=57+t*l*s+e*l;let U=0;if(o===1)U=T.getFloat32(G,!0);else if(o===0){const q=T.getInt16(G,!0)/65535;U=S+D*q}return{timestamp:K,temperature:U}};let _=0;for(let W=0;W<b;W++){const O=x(W);_===0&&(_=O.timestamp),v[O.timestamp-_]=O.temperature}return v},Og=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(M,H)=>{const T=M.getBigInt64(H,!0),K=62135596800000n,S=10000n,k=24n*60n*60n*1000n*S,D=0x4000000000000000n,R=0x8000000000000000n;let U=T&0x3fffffffffffffffn;T&R&&(U>D-k&&(U-=D),U<0&&(U+=k));const A=U/S-K;return Number(A)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,p=a*o*u,b=d+p,v=r.slice(25),x=v.byteLength/b,_={},W=M=>{const H=M*b,T=H+b,K=v.slice(H,T),S=new DataView(K),k=l(S,0),D=S.getFloat32(8,!0),G=S.getFloat32(12,!0)-D,U=57,N=e,A=e+i,q=t,ae=t+s;let $=1/0,F=-1/0,de=0,re=0;for(let He=q;He<=ae;He++){const st=He*a;for(let et=N;et<=A;et++){const ie=U+(st+et)*u;let he=NaN;if(h===1)he=S.getFloat32(ie,!0);else{const Ke=S.getInt16(ie,!0)/65535;he=D+G*Ke}he<$&&($=he),he>F&&(F=he),re+=he,de++}}const Le={min:$,max:F,avg:re/de,count:de};return{timestamp:k,result:Le}};let O=0;for(let M=0;M<x;M++){const H=W(M);O===0&&(O=H.timestamp),_[H.timestamp-O]=H.result}return _},Lg=async r=>{let e=[];const t=async _=>{const W=new DataView(_.slice(0,25)),O=W.getUint8(15),M=W.getUint16(17,!0),H=W.getUint16(19,!0),T=O===1?4:2,K=57,S=M*H*T,k=K+S,D=_.slice(25),R=D.byteLength/k;let G=[];for(let U=0;U<R;U++){const A=U*k+57,q=A+S,ae=D.slice(A,q);O===0||O===1&&(G=G.concat(Array.from(new Float32Array(ae))))}return G};(await Promise.all(r.map(_=>t(_)))).forEach(_=>{e=e.concat(_)}),e.sort((_,W)=>_-W);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,l=a/o,h=[];let u=[...e];for(let _=0;_<o;_++){const W=s+l*_,O=W+l,M=u.findIndex(k=>k>O),T=u.slice(0,M-1).length,K=T/e.length*100,S={from:W,to:O,count:T,percentage:K};h.push(S),u=u.slice(M)}const d=[...h].sort((_,W)=>_.percentage-W.percentage),p=d[0].percentage,b=d[d.length-1].percentage,v=Math.abs(p-b);return h.map(_=>({..._,height:_.percentage/v*100}))},Rg=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},Dg=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(H,T)=>{const K=H.getBigInt64(T,!0),S=62135596800000n,k=10000n,D=24n*60n*60n*1000n*k,R=0x4000000000000000n,G=0x8000000000000000n;let N=K&0x3fffffffffffffffn;K&G&&(N>R-D&&(N-=R),N<0&&(N+=D));const q=N/k-S;return Number(q)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,p=a*o*u,b=d+p,v=r.slice(25),x=v.byteLength/b,_={},W=(H,T)=>{const K=e+i/2,S=t+s/2,k=(H-K)/(i/2),D=(T-S)/(s/2);return k*k+D*D<=1},O=H=>{const T=H*b,K=T+b,S=v.slice(T,K),k=new DataView(S),D=l(k,0),R=k.getFloat32(8,!0),U=k.getFloat32(12,!0)-R,N=57,A=e,q=e+i,ae=t,$=t+s;let F=1/0,de=-1/0,re=0,Le=0;for(let st=ae;st<=$;st++){const et=st*a;for(let ie=A;ie<=q;ie++)if(W(ie,st)){const he=N+(et+ie)*u;let Ce=NaN;if(h===1)Ce=k.getFloat32(he,!0);else{const Ie=k.getInt16(he,!0)/65535;Ce=R+U*Ie}Ce<F&&(F=Ce),Ce>de&&(de=Ce),Le+=Ce,re++}}const He={min:F,max:de,avg:Le/re,count:re};return{timestamp:D,result:He}};let M=0;for(let H=0;H<x;H++){const T=O(H);M===0&&(M=T.timestamp),_[T.timestamp-M]=T.result}return _},Tg=[{extension:"lrc",minme:"application/octet-stream"}],Ig={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Tg,is:Rg,baseInfo:kg,getFrameSubset:Pg,frameData:Ag,registryHistogram:Lg,pointAnalysisData:Eg,rectAnalysisData:Og,ellipsisAnalysisData:Dg},_c=Object.freeze(Ig),Mg={LrcParser:_c},Cc=Object.values(Mg),kc=(r,e)=>{const t=Cc.find(i=>i.is(r,e));if(t===void 0)throw new $c(2,e,`No parser found for '${e}'.`);return t},Pc=Cc.map(r=>r.extensions),Ug=Pc.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Fg=class Ac{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new Ac(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new Yr(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=kc(i,this.thermalUrl);return this.pocessTheService(new li(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof $c)return this.pocessTheService(Yr.fromError(s));throw s}}pocessTheService(e){return e}},zg=class Ec{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new ee);c(this,"onMouseLeave",new ee);c(this,"onDrop",new ee);c(this,"onProcessingEnd",new ee);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new Ec(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Ug,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},Ng=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new Eo(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=kc(e,r.name);return new li(this,e,t,r.name)}catch(e){return new Yr(r.name,3,e.message)}}handleDropzone(r){return zg.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=Fg.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},jg=class extends wt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},Bg=class extends wt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},mh=class co{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new ee);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new co(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new co(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof li?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},Hg=class{constructor(r){c(this,"onBatchComplete",new ee);c(this,"set",new Set);this.registry=r}get size(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=mh.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=mh.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.size===0&&this.registry.loading.markAsLoaded()}},Wg=class extends wt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},Gg=class extends wt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new Cg(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Vg=class extends wt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((b,v)=>{const x=v.reduce((_,W)=>[..._,...W],[]);return[...b,...x]},[]).sort((b,v)=>b-v);const h=n/a;let u=i+h;const d=new Map;let p=0;for(;u!==!1;){const b=l.findIndex(_=>_>u),v=l.slice(0,b).length;d.set(u-h/2,v),p+=v,l=l.slice(b);const x=u+h;u=x<s?x:!1}return{result:d,resultCount:p}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(_c.registryHistogram,[t]);this.value=i}},Yg=class extends wt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},qg=class extends uc{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Xg=class extends ra{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new Gg(this,[]));c(this,"_batch");c(this,"onProcessingStart",new ee);c(this,"onProcessingEnd",new ee);c(this,"opacity",new Wg(this,1));c(this,"minmax",new qg(this,void 0));c(this,"loading",new Yg(this,!1));c(this,"range",new Ff(this,void 0));c(this,"histogram",new Vg(this,[]));c(this,"palette");c(this,"filters",new ta(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof li?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof li&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}get batch(){return this._batch||(this._batch=new Hg(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},Eo=class extends ra{constructor(e,t){super();c(this,"id");c(this,"service",new Ng(this));c(this,"registries",{});c(this,"palette",new Hf(this,"jet"));c(this,"smooth",new Bg(this,!1));c(this,"graphSmooth",new jg(this,!1));c(this,"pool");c(this,"filters",new ta(this));this.pool=e||Mf.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Xg(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}},Kg=Object.defineProperty,Zg=Object.getOwnPropertyDescriptor,Qt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Kg(e,t,s),s};const yh=["ready","select"],Qg={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Ft=class extends rr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new ee,this.left=0,this.top=0,this.w=0,this.h=0}render(){return w`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){ip(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(yh,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Qg[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!yh.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await sh({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(sh).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Ft.styles=ye`
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
  `;Qt([g({type:String,reflect:!0})],Ft.prototype,"type",2);Qt([g({type:Array})],Ft.prototype,"events",2);Qt([g({type:Object,hasChanged:()=>!0})],Ft.prototype,"options",2);Qt([g({type:Array})],Ft.prototype,"cols",2);Qt([g({type:Array})],Ft.prototype,"rows",2);Qt([g({type:String})],Ft.prototype,"data",2);Qt([g({type:Object})],Ft.prototype,"view",2);Qt([g({type:Array})],Ft.prototype,"selection",2);Qt([g({type:Object})],Ft.prototype,"_data",2);Qt([g({type:Number,reflect:!0})],Ft.prototype,"left",2);Qt([g({type:Number,reflect:!0})],Ft.prototype,"top",2);Qt([g({type:Number,reflect:!0})],Ft.prototype,"w",2);Qt([g({type:Number,reflect:!0})],Ft.prototype,"h",2);Ft=Qt([oe("thermal-chart")],Ft);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=()=>new Jg;class Jg{}const to=new WeakMap,Pe=Jn(class extends dd{render(r){return z}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),z}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=to.get(e);t===void 0&&(t=new WeakMap,to.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=to.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var E=(r=>(r.next="next",r.prev="prev",r.back="back",r.close="close",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.byday="by day",r.byhour="by hour",r.byweek="by week",r.bymonth="by month",r.byyear="by year",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r))(E||{});const em=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],vh=Object.fromEntries(em.map(r=>[r.code,r]));var tm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,Oc=(r,e,t,i)=>{for(var s=i>1?void 0:i?rm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tm(e,t,s),s};let Ls=class extends rr{constructor(){super(),this.dialogRef=fe(),this.closeButtonRef=fe(),this.invokerRef=fe()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return w`
            <slot name="invoker" ${Pe(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Pe(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Pe(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Ls.shadowRootOptions={...rr.shadowRootOptions,mode:"open"};Ls.styles=ye`

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

        
    
    `;Oc([g({type:String,reflect:!0})],Ls.prototype,"label",2);Ls=Oc([oe("thermal-dialog")],Ls);let xn;const im=new Uint8Array(16);function sm(){if(!xn&&(xn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!xn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return xn(im)}const Lt=[];for(let r=0;r<256;++r)Lt.push((r+256).toString(16).slice(1));function nm(r,e=0){return Lt[r[e+0]]+Lt[r[e+1]]+Lt[r[e+2]]+Lt[r[e+3]]+"-"+Lt[r[e+4]]+Lt[r[e+5]]+"-"+Lt[r[e+6]]+Lt[r[e+7]]+"-"+Lt[r[e+8]]+Lt[r[e+9]]+"-"+Lt[r[e+10]]+Lt[r[e+11]]+Lt[r[e+12]]+Lt[r[e+13]]+Lt[r[e+14]]+Lt[r[e+15]]}const am=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),bh={randomUUID:am};function om(r,e,t){if(bh.randomUUID&&!e&&!r)return bh.randomUUID();r=r||{};const i=r.random||(r.rng||sm)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,nm(i)}const al=class al extends rr{get UUID(){return this._UUID===void 0&&(this._UUID=om()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),ft.on("languageChanged",()=>{this.requestUpdate()})}};al.shadowRootOptions={...rr.shadowRootOptions,mode:"open"};let Pt=al;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lc=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wh=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Lc(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lm{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let hm=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class xh extends lm{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:u}]of this.subscriptions)l.has(h)||(l.add(h),u.dispatchEvent(new Lc(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new hm(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new xh(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new xh(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new wh(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new wh(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}const Rc="tour-context",Dc="tour-step",Tc="tourable-element";var cm=Object.defineProperty,Ic=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&cm(e,t,s),s};class Ri extends Pt{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}Ic([g({type:String})],Ri.prototype,"tour");Ic([ue({context:Tc})],Ri.prototype,"tourableElement");var um=Object.defineProperty,dm=Object.getOwnPropertyDescriptor,na=(r,e,t,i)=>{for(var s=i>1?void 0:i?dm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&um(e,t,s),s};let qr=class extends Ri{constructor(){super(...arguments),this.tourableElementRef=fe(),this.variant="slate",this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return w`
            <button class="${this.variant}" ${Pe(this.tourableElementRef)}>
                <slot></slot>
            </button>
        `}};qr.VARIANTS=["slate","primary","foreground","background"];qr.shadowRootOptions={...rr.shadowRootOptions,mode:"open"};qr.styles=ye`

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
    
    `;na([g({type:String,converter:{fromAttribute:r=>qr.VARIANTS.includes(r)?r:"slate",toAttribute:r=>r}})],qr.prototype,"variant",2);na([g({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],qr.prototype,"interactive",2);na([g({type:String})],qr.prototype,"size",2);qr=na([oe("thermal-button")],qr);const hi=Math.min,Gr=Math.max,Bn=Math.round,ci=r=>({x:r,y:r}),pm={left:"right",right:"left",bottom:"top",top:"bottom"},fm={start:"end",end:"start"};function uo(r,e,t){return Gr(r,hi(e,t))}function ss(r,e){return typeof r=="function"?r(e):r}function Xr(r){return r.split("-")[0]}function Ys(r){return r.split("-")[1]}function Mc(r){return r==="x"?"y":"x"}function Oo(r){return r==="y"?"height":"width"}function qs(r){return["top","bottom"].includes(Xr(r))?"y":"x"}function Lo(r){return Mc(qs(r))}function gm(r,e,t){t===void 0&&(t=!1);const i=Ys(r),s=Lo(r),n=Oo(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Hn(a)),[a,Hn(a)]}function mm(r){const e=Hn(r);return[po(r),e,po(e)]}function po(r){return r.replace(/start|end/g,e=>fm[e])}function ym(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function vm(r,e,t,i){const s=Ys(r);let n=ym(Xr(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(po)))),n}function Hn(r){return r.replace(/left|right|bottom|top/g,e=>pm[e])}function bm(r){return{top:0,right:0,bottom:0,left:0,...r}}function Ro(r){return typeof r!="number"?bm(r):{top:r,right:r,bottom:r,left:r}}function Xi(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function Sh(r,e,t){let{reference:i,floating:s}=r;const n=qs(e),a=Lo(e),o=Oo(a),l=Xr(e),h=n==="y",u=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,p=i[o]/2-s[o]/2;let b;switch(l){case"top":b={x:u,y:i.y-s.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:d};break;case"left":b={x:i.x-s.width,y:d};break;default:b={x:i.x,y:i.y}}switch(Ys(e)){case"start":b[a]-=p*(t&&h?-1:1);break;case"end":b[a]+=p*(t&&h?-1:1);break}return b}const wm=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:u,y:d}=Sh(h,i,l),p=i,b={},v=0;for(let x=0;x<o.length;x++){const{name:_,fn:W}=o[x],{x:O,y:M,data:H,reset:T}=await W({x:u,y:d,initialPlacement:i,placement:p,strategy:s,middlewareData:b,rects:h,platform:a,elements:{reference:r,floating:e}});u=O??u,d=M??d,b={...b,[_]:{...b[_],...H}},T&&v<=50&&(v++,typeof T=="object"&&(T.placement&&(p=T.placement),T.rects&&(h=T.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):T.rects),{x:u,y:d}=Sh(h,p,l)),x=-1)}return{x:u,y:d,placement:p,strategy:s,middlewareData:b}};async function Uc(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:b=0}=ss(e,r),v=Ro(b),_=o[p?d==="floating"?"reference":"floating":d],W=Xi(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(_)))==null||t?_:_.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:u,strategy:l})),O=d==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,M=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),H=await(n.isElement==null?void 0:n.isElement(M))?await(n.getScale==null?void 0:n.getScale(M))||{x:1,y:1}:{x:1,y:1},T=Xi(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:O,offsetParent:M,strategy:l}):O);return{top:(W.top-T.top+v.top)/H.y,bottom:(T.bottom-W.bottom+v.bottom)/H.y,left:(W.left-T.left+v.left)/H.x,right:(T.right-W.right+v.right)/H.x}}const xm=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:u=0}=ss(r,e)||{};if(h==null)return{};const d=Ro(u),p={x:t,y:i},b=Lo(s),v=Oo(b),x=await a.getDimensions(h),_=b==="y",W=_?"top":"left",O=_?"bottom":"right",M=_?"clientHeight":"clientWidth",H=n.reference[v]+n.reference[b]-p[b]-n.floating[v],T=p[b]-n.reference[b],K=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let S=K?K[M]:0;(!S||!await(a.isElement==null?void 0:a.isElement(K)))&&(S=o.floating[M]||n.floating[v]);const k=H/2-T/2,D=S/2-x[v]/2-1,R=hi(d[W],D),G=hi(d[O],D),U=R,N=S-x[v]-G,A=S/2-x[v]/2+k,q=uo(U,A,N),ae=!l.arrow&&Ys(s)!=null&&A!==q&&n.reference[v]/2-(A<U?R:G)-x[v]/2<0,$=ae?A<U?A-U:A-N:0;return{[b]:p[b]+$,data:{[b]:q,centerOffset:A-q-$,...ae&&{alignmentOffset:$}},reset:ae}}}),Sm=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,..._}=ss(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const W=Xr(s),O=Xr(o)===o,M=await(l.isRTL==null?void 0:l.isRTL(h.floating)),H=p||(O||!x?[Hn(o)]:mm(o));!p&&v!=="none"&&H.push(...vm(o,x,v,M));const T=[o,...H],K=await Uc(e,_),S=[];let k=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&S.push(K[W]),d){const U=gm(s,a,M);S.push(K[U[0]],K[U[1]])}if(k=[...k,{placement:s,overflows:S}],!S.every(U=>U<=0)){var D,R;const U=(((D=n.flip)==null?void 0:D.index)||0)+1,N=T[U];if(N)return{data:{index:U,overflows:k},reset:{placement:N}};let A=(R=k.filter(q=>q.overflows[0]<=0).sort((q,ae)=>q.overflows[1]-ae.overflows[1])[0])==null?void 0:R.placement;if(!A)switch(b){case"bestFit":{var G;const q=(G=k.map(ae=>[ae.placement,ae.overflows.filter($=>$>0).reduce(($,F)=>$+F,0)]).sort((ae,$)=>ae[1]-$[1])[0])==null?void 0:G[0];q&&(A=q);break}case"initialPlacement":A=o;break}if(s!==A)return{reset:{placement:A}}}return{}}}};function Fc(r){const e=hi(...r.map(n=>n.left)),t=hi(...r.map(n=>n.top)),i=Gr(...r.map(n=>n.right)),s=Gr(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function $m(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>Xi(Fc(s)))}const _m=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=ss(r,e),u=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),d=$m(u),p=Xi(Fc(u)),b=Ro(o);function v(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&h!=null)return d.find(_=>l>_.left-b.left&&l<_.right+b.right&&h>_.top-b.top&&h<_.bottom+b.bottom)||p;if(d.length>=2){if(qs(t)==="y"){const R=d[0],G=d[d.length-1],U=Xr(t)==="top",N=R.top,A=G.bottom,q=U?R.left:G.left,ae=U?R.right:G.right,$=ae-q,F=A-N;return{top:N,bottom:A,left:q,right:ae,width:$,height:F,x:q,y:N}}const _=Xr(t)==="left",W=Gr(...d.map(R=>R.right)),O=hi(...d.map(R=>R.left)),M=d.filter(R=>_?R.left===O:R.right===W),H=M[0].top,T=M[M.length-1].bottom,K=O,S=W,k=S-K,D=T-H;return{top:H,bottom:T,left:K,right:S,width:k,height:D,x:K,y:H}}return p}const x=await n.getElementRects({reference:{getBoundingClientRect:v},floating:i.floating,strategy:a});return s.reference.x!==x.reference.x||s.reference.y!==x.reference.y||s.reference.width!==x.reference.width||s.reference.height!==x.reference.height?{reset:{rects:x}}:{}}}};async function Cm(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Xr(t),o=Ys(t),l=qs(t)==="y",h=["left","top"].includes(a)?-1:1,u=n&&l?-1:1,d=ss(e,r);let{mainAxis:p,crossAxis:b,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return o&&typeof v=="number"&&(b=o==="end"?v*-1:v),l?{x:b*u,y:p*h}:{x:p*h,y:b*u}}const km=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await Cm(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},Pm=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:_=>{let{x:W,y:O}=_;return{x:W,y:O}}},...l}=ss(r,e),h={x:t,y:i},u=await Uc(e,l),d=qs(Xr(s)),p=Mc(d);let b=h[p],v=h[d];if(n){const _=p==="y"?"top":"left",W=p==="y"?"bottom":"right",O=b+u[_],M=b-u[W];b=uo(O,b,M)}if(a){const _=d==="y"?"top":"left",W=d==="y"?"bottom":"right",O=v+u[_],M=v-u[W];v=uo(O,v,M)}const x=o.fn({...e,[p]:b,[d]:v});return{...x,data:{x:x.x-t,y:x.y-i}}}}};function ns(r){return zc(r)?(r.nodeName||"").toLowerCase():"#document"}function ir(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function vi(r){var e;return(e=(zc(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function zc(r){return r instanceof Node||r instanceof ir(r).Node}function Dr(r){return r instanceof Element||r instanceof ir(r).Element}function Tr(r){return r instanceof HTMLElement||r instanceof ir(r).HTMLElement}function $h(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof ir(r).ShadowRoot}function Xs(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Sr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function Am(r){return["table","td","th"].includes(ns(r))}function aa(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function Do(r){const e=To(),t=Sr(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function Em(r){let e=ui(r);for(;Tr(e)&&!Ki(e);){if(aa(e))return null;if(Do(e))return e;e=ui(e)}return null}function To(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ki(r){return["html","body","#document"].includes(ns(r))}function Sr(r){return ir(r).getComputedStyle(r)}function oa(r){return Dr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function ui(r){if(ns(r)==="html")return r;const e=r.assignedSlot||r.parentNode||$h(r)&&r.host||vi(r);return $h(e)?e.host:e}function Nc(r){const e=ui(r);return Ki(e)?r.ownerDocument?r.ownerDocument.body:r.body:Tr(e)&&Xs(e)?e:Nc(e)}function fo(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Nc(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=ir(s);return n?e.concat(a,a.visualViewport||[],Xs(s)?s:[],a.frameElement&&t?fo(a.frameElement):[]):e.concat(s,fo(s,[],t))}function jc(r){const e=Sr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Tr(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=Bn(t)!==n||Bn(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function Bc(r){return Dr(r)?r:r.contextElement}function Gi(r){const e=Bc(r);if(!Tr(e))return ci(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=jc(e);let a=(n?Bn(t.width):t.width)/i,o=(n?Bn(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const Om=ci(0);function Hc(r){const e=ir(r);return!To()||!e.visualViewport?Om:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Lm(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==ir(r)?!1:e}function Rs(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=Bc(r);let a=ci(1);e&&(i?Dr(i)&&(a=Gi(i)):a=Gi(r));const o=Lm(n,t,i)?Hc(n):ci(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,u=s.width/a.x,d=s.height/a.y;if(n){const p=ir(n),b=i&&Dr(i)?ir(i):i;let v=p,x=v.frameElement;for(;x&&i&&b!==v;){const _=Gi(x),W=x.getBoundingClientRect(),O=Sr(x),M=W.left+(x.clientLeft+parseFloat(O.paddingLeft))*_.x,H=W.top+(x.clientTop+parseFloat(O.paddingTop))*_.y;l*=_.x,h*=_.y,u*=_.x,d*=_.y,l+=M,h+=H,v=ir(x),x=v.frameElement}}return Xi({width:u,height:d,x:l,y:h})}function Rm(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=vi(i),o=e?aa(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=ci(1);const u=ci(0),d=Tr(i);if((d||!d&&!n)&&((ns(i)!=="body"||Xs(a))&&(l=oa(i)),Tr(i))){const p=Rs(i);h=Gi(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+u.x,y:t.y*h.y-l.scrollTop*h.y+u.y}}function Dm(r){return Array.from(r.getClientRects())}function Wc(r){return Rs(vi(r)).left+oa(r).scrollLeft}function Tm(r){const e=vi(r),t=oa(r),i=r.ownerDocument.body,s=Gr(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Gr(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+Wc(r);const o=-t.scrollTop;return Sr(i).direction==="rtl"&&(a+=Gr(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function Im(r,e){const t=ir(r),i=vi(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=To();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function Mm(r,e){const t=Rs(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=Tr(r)?Gi(r):ci(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function _h(r,e,t){let i;if(e==="viewport")i=Im(r,t);else if(e==="document")i=Tm(vi(r));else if(Dr(e))i=Mm(e,t);else{const s=Hc(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return Xi(i)}function Gc(r,e){const t=ui(r);return t===e||!Dr(t)||Ki(t)?!1:Sr(t).position==="fixed"||Gc(t,e)}function Um(r,e){const t=e.get(r);if(t)return t;let i=fo(r,[],!1).filter(o=>Dr(o)&&ns(o)!=="body"),s=null;const n=Sr(r).position==="fixed";let a=n?ui(r):r;for(;Dr(a)&&!Ki(a);){const o=Sr(a),l=Do(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Xs(a)&&!l&&Gc(r,a))?i=i.filter(u=>u!==a):s=o,a=ui(a)}return e.set(r,i),i}function Fm(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?aa(e)?[]:Um(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,u)=>{const d=_h(e,u,s);return h.top=Gr(d.top,h.top),h.right=hi(d.right,h.right),h.bottom=hi(d.bottom,h.bottom),h.left=Gr(d.left,h.left),h},_h(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function zm(r){const{width:e,height:t}=jc(r);return{width:e,height:t}}function Nm(r,e,t){const i=Tr(e),s=vi(e),n=t==="fixed",a=Rs(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=ci(0);if(i||!i&&!n)if((ns(e)!=="body"||Xs(s))&&(o=oa(e)),i){const d=Rs(e,!0,n,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else s&&(l.x=Wc(s));const h=a.left+o.scrollLeft-l.x,u=a.top+o.scrollTop-l.y;return{x:h,y:u,width:a.width,height:a.height}}function ro(r){return Sr(r).position==="static"}function Ch(r,e){return!Tr(r)||Sr(r).position==="fixed"?null:e?e(r):r.offsetParent}function Vc(r,e){const t=ir(r);if(aa(r))return t;if(!Tr(r)){let s=ui(r);for(;s&&!Ki(s);){if(Dr(s)&&!ro(s))return s;s=ui(s)}return t}let i=Ch(r,e);for(;i&&Am(i)&&ro(i);)i=Ch(i,e);return i&&Ki(i)&&ro(i)&&!Do(i)?t:i||Em(r)||t}const jm=async function(r){const e=this.getOffsetParent||Vc,t=this.getDimensions,i=await t(r.floating);return{reference:Nm(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Bm(r){return Sr(r).direction==="rtl"}const Hm={convertOffsetParentRelativeRectToViewportRelativeRect:Rm,getDocumentElement:vi,getClippingRect:Fm,getOffsetParent:Vc,getElementRects:jm,getClientRects:Dm,getDimensions:zm,getScale:Gi,isElement:Dr,isRTL:Bm},Yc=km,Wm=Pm,Gm=Sm,Vm=xm,Ym=_m,qc=(r,e,t)=>{const i=new Map,s={platform:Hm,...t},n={...s.platform,_c:i};return wm(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=Jn(class extends So{constructor(r){var e;if(super(r),r.type!==Hr.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return oi}});var qm=Object.defineProperty,Xm=Object.getOwnPropertyDescriptor,Ks=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qm(e,t,s),s};let Kr=class extends Ri{constructor(){super(...arguments),this.dropdownRef=fe(),this.invokerRef=fe(),this.optionsRef=fe(),this.open="close",this.interactive="on",this.variant="slate"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){qc(this.invokerRef.value,this.optionsRef.value,{middleware:[Yc(2),Gm(),Ym(),Wm()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return w`

            <div class="dropdown" ${Pe(this.dropdownRef)}>

                <thermal-button class="${Yt(r)}" ${Pe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?w`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:w`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Pe(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>

            <slot> name="tour"</slot>
        
        `}};Kr.shadowRootOptions={...rr.shadowRootOptions,mode:"open"};Kr.styles=ye`

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
    
    `;Ks([yi({slot:"option"})],Kr.prototype,"_options",2);Ks([g({type:String,reflect:!0})],Kr.prototype,"open",2);Ks([g({type:String,reflect:!0,attribute:!0}),P()],Kr.prototype,"interactive",2);Ks([g({type:String,reflect:!0})],Kr.prototype,"variant",2);Kr=Ks([oe("thermal-dropdown")],Kr);var Km=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,la=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Km(e,t,s),s};let Zi=class extends rr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=fe(),this.contentRef=fe(),this.rulerContentRef=fe()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return w`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Pe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Pe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Pe(this.contentRef)}>

                    ${this.collapsed===!1?w`
                        <slot></slot>    
                    `:z}
                
                </div>

            </div>

            ${this.collapsed?w`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:z}
        
        `}};Zi.styles=ye`

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

    `;la([P()],Zi.prototype,"collapsed",2);la([P()],Zi.prototype,"lastContentWidth",2);la([P()],Zi.prototype,"drawerRef",2);Zi=la([oe("thermal-bar")],Zi);var Qm=Object.defineProperty,Jm=Object.getOwnPropertyDescriptor,yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qm(e,t,s),s};let qt=class extends Pt{constructor(){super(...arguments),this.language=ft.language,this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=fe(),this.contentRef=fe()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),ft.on("languageChanged",()=>{this.language=ft.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,o=n-175,l=a-0,h=this.contentRef.value.offsetHeight,u=4/3;let d=0,p=0;h<o?(console.log("priorita šířky"),d=l,p=d/u):(console.log("priorita výšky"),p=o,d=p*u),this.contentRef.value.setAttribute("style",`width: ${d}px !important; height: ${p}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return w`

        <div class="container ${this.dark?"dark":"normal"}" ${Pe(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?w`
            <div class="bar">

                <slot name="label">
                    ${this.label?w`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`:z}
                </slot>

                <slot name="bar"></slot>

                <slot name="close"></slot>

                <thermal-dropdown >

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(r=>w`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{ft.changeLanguage(r),this.language=r}}
                            >${vh[r].flag} ${vh[r].name}</thermal-button>
                        </div>
                    `)}
                </thermal-dropdown>

                <!--
                ${this.showfullscreen===!0?w`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?w`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:w`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:z}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?w`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Pe(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?w`<div class="credits">

                    ${this.recorded?w`<div>
                            <div class="credits-field">${L(E.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:z}

                    ${this.author?w`<div>
                            <div class="credits-field">${L(E.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:z}

                    ${this.license?w`<div>
                            <div class="credits-field">${L(E.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:z}

                </div>`:z}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};qt.styles=ye`

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
    
    `;yr([P()],qt.prototype,"language",2);yr([yi({slot:"bar",flatten:!0})],qt.prototype,"barElements",2);yr([yi({slot:"pre",flatten:!0})],qt.prototype,"preElements",2);yr([yi({slot:"content",flatten:!0})],qt.prototype,"contentElements",2);yr([g({type:String,reflect:!0})],qt.prototype,"fullscreen",2);yr([g({type:String,reflect:!0,attribute:!0})],qt.prototype,"showfullscreen",2);yr([g({type:String,reflect:!0,attribute:!0})],qt.prototype,"dark",2);yr([g()],qt.prototype,"author",2);yr([g()],qt.prototype,"recorded",2);yr([g()],qt.prototype,"license",2);yr([g()],qt.prototype,"label",2);qt=yr([oe("thermal-app")],qt);var ey=Object.defineProperty,ty=Object.getOwnPropertyDescriptor,Io=(r,e,t,i)=>{for(var s=i>1?void 0:i?ty(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ey(e,t,s),s};let Ds=class extends rr{render(){return w`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&w`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};Ds.styles=ye`
    
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

    `;Io([g({type:String})],Ds.prototype,"label",2);Io([g({type:String})],Ds.prototype,"hint",2);Ds=Io([oe("thermal-field")],Ds);var ry=Object.defineProperty,iy=Object.getOwnPropertyDescriptor,as=(r,e,t,i)=>{for(var s=i>1?void 0:i?iy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ry(e,t,s),s};let Zr=class extends Pt{render(){return z}};as([g({type:String,reflect:!0,attribute:!0})],Zr.prototype,"thermal",2);as([g({type:String,reflect:!0,attribute:!0})],Zr.prototype,"visible",2);as([g({type:String,reflect:!0,attribute:!0})],Zr.prototype,"author",2);as([g({type:String,reflect:!0,attribute:!0})],Zr.prototype,"note",2);as([g({type:String,reflect:!0,attribute:!0})],Zr.prototype,"label",2);Zr=as([oe("time-entry")],Zr);const sy=new Eo;window.Thermal={managers:new Map};window.Thermal.managers.set("default",sy);const ha=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new Eo(void 0,e);return window.Thermal.managers.set(r,t),t}},ny=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wn extends So{constructor(e){if(super(e),this.it=z,e.type!==Hr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===z||e==null)return this._t=void 0,this.it=e;if(e===oi)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Wn.directiveName="unsafeHTML",Wn.resultType=1;const Ut=Jn(Wn),ol=class ol{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?z:w`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${L(E.note).toLocaleLowerCase()}</button>
            <div slot="content">${Ut(t)}</div>
        </thermal-dialog>`}renderHeaderContent(e,t,i){return i===void 0||i.trim().length===0?w`<strong>${t}</strong>`:e===!0?w`<strong>${i}</strong><span>${t}</span>`:w`<strong>${i}</strong>`}renderInstance(e,t,i,s,n,a,o){return w`<div class="file">

            <article
                @mouseenter=${()=>t(e)}
                @mouseleave=${()=>i(e)}
            >

                <file-mirror  .file=${e}>
                
                    <div class="file-title">
                    
                        <h3>
                            ${this.renderHeaderContent(n,s,a)}
                        </h3>

                        <div>

                            ${this.renderInfo(a,o)}

                            <button
                                class="file-info-button"
                                @click=${()=>e.export.downloadPng()}
                            >png</button>

                            <button
                                class="file-info-button"
                                @click=${()=>{const l=document.createElement("a");l.href=e.thermalUrl,l.download=e.fileName,l.click()}}
                            >lrc</button>

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
                    ${e.timeline.isSequence?w`<div class="timeline">
                            <file-timeline hasInfo="false" hasSpeedButton="false" hasPlayButton="false"></file-timeline>
                        </div>`:z}
                    
                    <file-analysis-table></file-analysis-table>

                </file-mirror>

            </article>
        
        </div>`}};ol.styles=ye`


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

    `;let Qi=ol;const ll=class ll{constructor(e){this.element=e,this.instanceRenderer=new Qi(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?w`
                <div class="group-header">
                
                    ${e?w`<h2 class="group-title">${e}</h2>`:z}

                    ${t?w`<p class="group-info">${t}</p>`:z}

                </div>
            `:z}renderGroup(e,t,i,s,n,a){const o=this.trimmedString(e.label),l=this.trimmedString(e.info),h={"group-files":!0,[`group-files-${t}`]:!0};return w`

            <section class="${Yt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(o,l)}

                <div class=${Yt(h)}>


                    ${e.files.map(({instance:d,innerHtml:p,label:b,time:v})=>this.instanceRenderer.renderInstance(d,s,n,v,a,b,p))}


                </div>

            </section>

        `}};ll.styles=ye`


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

    `;let Ts=ll,ay=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Yr)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?nc(e).getTime():this.grouping==="day"?Fn(e).getTime():this.grouping==="week"?Vr(e).getTime():this.grouping==="month"?Nn(e).getTime():this.grouping==="year"?ko(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?rc(e).getTime():this.grouping==="day"?ec(e).getTime():this.grouping==="week"?jn(e).getTime():this.grouping==="month"?zn(e).getTime():this.grouping==="year"?tc(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:at(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:at(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+at(e,"w")+" of "+at(e,"yyyy"),info:[nt.humanDate(Vr(e).getTime()),nt.humanDate(jn(e).getTime())].join(" - ")}:this.grouping==="month"?{label:at(e,"MMMM yyyy"),info:[nt.humanDate(Nn(e).getTime()),nt.humanDate(zn(e).getTime())].join(" - ")}:this.grouping==="year"?{label:at(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?nt.human(e):this.grouping==="hour"||this.grouping==="day"?at(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",nt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var oy=Object.defineProperty,ly=Object.getOwnPropertyDescriptor,Jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?ly(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&oy(e,t,s),s};let Dt=class extends Pt{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=ha(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new ay(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof Zr))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return w`
            <slot name="entry"></slot>

            ${this.scopeSlug?w`<manager-mirror slug=${this.scopeSlug}>

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

                `:z}

        `}};Dt.styles=[Qi.styles,Ts.styles,ye`

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
    
    `];Jt([P(),yi({slot:"entry",flatten:!0})],Dt.prototype,"entries",2);Jt([P()],Dt.prototype,"groups",2);Jt([P()],Dt.prototype,"instances",2);Jt([g()],Dt.prototype,"columns",2);Jt([g()],Dt.prototype,"breakpoint",2);Jt([g({type:Number,reflect:!0})],Dt.prototype,"width",2);Jt([g({type:String,reflect:!0})],Dt.prototype,"grouping",2);Jt([g()],Dt.prototype,"name",2);Jt([g()],Dt.prototype,"slug",2);Jt([P()],Dt.prototype,"scopeSlug",2);Jt([g({type:Object})],Dt.prototype,"onInstanceEnter",2);Jt([g({type:Object})],Dt.prototype,"onInstanceLeave",2);Jt([g({type:Object})],Dt.prototype,"groupRenderer",2);Dt=Jt([oe("time-group")],Dt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=r=>r??z;var hy=Object.defineProperty,cy=Object.getOwnPropertyDescriptor,Zs=(r,e,t,i)=>{for(var s=i>1?void 0:i?cy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hy(e,t,s),s};let Ai=class extends Pt{constructor(){super(...arguments),this.tRef=fe(),this.vRef=fe(),this.haRef=fe()}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}updated(r){if(super.updated(r),this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,this.v);this.ta=t}this.t===void 0&&this.tRef.value&&(this.tRef.value.value=""),this.ha===void 0&&this.haRef.value&&(this.haRef.value.value=""),this.v===void 0&&this.vRef.value&&(this.vRef.value.value="")}renderNumberField(r,e,t,i,s,n,a,o,l){return w`
            <div class="field">

                <div class="column column__label">
                    <label for=${e}>
                        ${t}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${Pe(r)} 
                            id=${e}
                            name=${e}
                            value=${be(s)}
                            min=${be(n)}
                            max=${be(a)}
                            step=${be(o)}
                            type="number"
                        ></input>
                        <span>${Ut(i)}</span>
                    </div>

                    ${l?w`<label for=${e}>${l}</label>`:z}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),t:e},s=t<0?L(E.youfeelcolder,i):L(E.youfeelwarmer,i),n=r.toFixed(2);return w`<div class="result">

            <p class="result_label">${L(E.apparenttemperature)}</p>

            <p class="result_value">
                ${n} °C
            </p>

            <p class="result_comment">${s}</p>
        
        </div>`}render(){return w`
            <thermal-app label=${L(E.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${L(E.info)}>
                    <thermal-button slot="invoker">${L(E.info)}</thermal-button>
                    <div slot="content">
                        ${Ut(L(E.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?w`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:z}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,this.UUID+"aat_air_temperature",L(E.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,this.UUID+"aat_wind_speed",L(E.windspeed),"m/s<sup>2</sup>",this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,this.UUID+"aat_air_humidity",L(E.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):z}
                </div>
                

            </thermal-app>
        `}};Ai.styles=ye`

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


    `;Zs([g({type:Number,reflect:!0,attribute:!0})],Ai.prototype,"t",2);Zs([g({type:Number,reflect:!0,attribute:!0})],Ai.prototype,"v",2);Zs([g({type:Number,reflect:!0,attribute:!0})],Ai.prototype,"ha",2);Zs([P()],Ai.prototype,"ta",2);Ai=Zs([oe("apparent-temperature-aat")],Ai);var uy=Object.defineProperty,dy=Object.getOwnPropertyDescriptor,py=(r,e,t,i)=>{for(var s=i>1?void 0:i?dy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&uy(e,t,s),s};let go=class extends Ri{constructor(){super(...arguments),this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}render(){return w`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-button slot="invoker" ${Pe(this.tourableElementRef)}>About</thermal-button>
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
                        <p>version ${xo}</p>
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
        `}};go.styles=ye`

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
    
    `;go=py([oe("app-info-button")],go);class Xc extends Ri{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Rr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=ha(this.slug,e);this.manager=i}disconnectedCallback(){super.disconnectedCallback(),this.log("autoclear manager",this.autoclear,typeof this.autoclear),this.autoclear===!0&&this.manager!==void 0&&ny(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(Rr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:Rr[e]}}render(){return w`<slot></slot>`}}const Mo="manager-instance",os="manager-palette-context",Uo="manager-smooth-context",ca="manager-graph-function-context";var fy=Object.defineProperty,gy=Object.getOwnPropertyDescriptor,Di=(r,e,t,i)=>{for(var s=i>1?void 0:i?gy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fy(e,t,s),s};let di=class extends Xc{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Rr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Di([ue({context:Mo})],di.prototype,"manager",2);Di([g({type:String,reflect:!0,attribute:!0})],di.prototype,"slug",2);Di([ue({context:os}),g({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:Rr[r]}),toAttribute:r=>r.key.toString()}})],di.prototype,"palette",2);Di([ue({context:Uo}),g({type:String,reflect:!0,attribute:!0})],di.prototype,"smooth",2);Di([ue({context:ca}),g({type:String,reflect:!0,attribute:!0})],di.prototype,"graphSmooth",2);Di([g({type:Boolean,reflect:!0})],di.prototype,"autoclear",2);di=Di([oe("manager-provider")],di);var my=Object.defineProperty,yy=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&my(e,t,s),s};class Qs extends Ri{connectedCallback(){super.connectedCallback(),this.manager}}yy([ge({context:Mo,subscribe:!0}),P()],Qs.prototype,"manager");class Kc extends Qs{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return w`<slot></slot>`}}const Fo="registry-instance",zo="registry-opacity",ua="registry-range-from",da="registry-range-to",Zc="registry-loading",No="registry-min",jo="registry-max";var vy=Object.defineProperty,by=Object.getOwnPropertyDescriptor,Ir=(r,e,t,i)=>{for(var s=i>1?void 0:i?by(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vy(e,t,s),s};let $r=class extends Kc{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};Ir([g({type:String,reflect:!0,attribute:!0})],$r.prototype,"slug",2);Ir([ue({context:Fo})],$r.prototype,"registry",2);Ir([ue({context:zo}),g({type:Number,reflect:!0,attribute:!0})],$r.prototype,"opacity",2);Ir([ue({context:No}),P()],$r.prototype,"min",2);Ir([ue({context:jo}),P()],$r.prototype,"max",2);Ir([ue({context:ua}),g({type:Number,reflect:!0,attribute:!0})],$r.prototype,"from",2);Ir([ue({context:da}),g({type:Number,reflect:!0,attribute:!0})],$r.prototype,"to",2);Ir([ue({context:Zc}),g({type:String,reflect:!0,attribute:!0})],$r.prototype,"loading",2);Ir([g({type:Boolean,reflect:!0})],$r.prototype,"autoclear",2);$r=Ir([oe("registry-provider")],$r);var wy=Object.defineProperty,xy=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&wy(e,t,s),s};class or extends Qs{connectedCallback(){super.connectedCallback(),this.registry}}xy([ge({context:Fo,subscribe:!0})],or.prototype,"registry");class Qc extends or{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug),this.slug,this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,e=>{this.tool=e})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return w`<slot></slot>`}}const Bo="group-instance",pa="tool-context",fa="tools-context";var Sy=Object.defineProperty,$y=Object.getOwnPropertyDescriptor,ls=(r,e,t,i)=>{for(var s=i>1?void 0:i?$y(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sy(e,t,s),s};let Ei=class extends Qc{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};ls([g({type:String,attribute:!0,reflect:!0})],Ei.prototype,"slug",2);ls([ue({context:Bo})],Ei.prototype,"group",2);ls([ue({context:pa})],Ei.prototype,"tool",2);ls([ue({context:fa})],Ei.prototype,"tools",2);ls([g({type:Boolean,reflect:!0})],Ei.prototype,"autoclear",2);Ei=ls([oe("group-provider")],Ei);var _y=Object.defineProperty,Cy=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&_y(e,t,s),s};class Ti extends or{constructor(){super()}connectedCallback(){super.connectedCallback()}}Cy([ge({context:Bo,subscribe:!0})],Ti.prototype,"group");const Ho="file",Jc="failure",eu="file-loading",ky="file-loaded",ga="file-provider-element",ma="file-ms-context",Wo="file-cursor",tu="file-cursor-setter",Js="playback",Go="duration",ya="playing",Vo="playbackSpeed",Yo="recording",ru="mayStop",Py="analysislist",qo="file-markers-context";var Ay=Object.defineProperty,jt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Ay(e,t,s),s};class At extends Ti{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new ee,this.onSuccess=new ee,this.onFailure=new ee,this.onInstanceCreated=new ee}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!==void 0&&i.trim().length>0){const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}assignAppropriateField(e,t){e===1?this.analysis1=t:e===2?this.analysis2=t:e===3?this.analysis3=t:e===4?this.analysis4=t:e===5?this.analysis5=t:e===6?this.analysis6=t:e===7&&(this.analysis7=t)}render(){return w`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}jt([ue({context:Ho}),P()],At.prototype,"file");jt([ue({context:Jc}),P()],At.prototype,"failure");jt([ue({context:eu}),P()],At.prototype,"loading");jt([ue({context:ky})],At.prototype,"ready");jt([ue({context:Go}),P()],At.prototype,"duration");jt([ue({context:Js})],At.prototype,"currentFrame");jt([ue({context:Wo})],At.prototype,"cursor");jt([ue({context:ma})],At.prototype,"ms");jt([ue({context:Vo})],At.prototype,"speed");jt([ue({context:Yo})],At.prototype,"recording");jt([ue({context:ya})],At.prototype,"playing");jt([ue({context:ru}),P()],At.prototype,"mayStop");jt([yi({slot:"mark",flatten:!0})],At.prototype,"marksQueriedInternally");jt([ue({context:qo})],At.prototype,"marksProvidedBelow");jt([ue({context:Py})],At.prototype,"analysis");var Ey=Object.defineProperty,Oy=Object.getOwnPropertyDescriptor,zt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Oy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ey(e,t,s),s};let Tt=class extends At{constructor(){super(...arguments),this.ms=0,this.providedSelf=this,this.recording=!1,this.playing=!1}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.log("loading sync"),this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof li?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.log("loading async",this.thermal,this),this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof Vs?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof Yr&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};zt([g({type:Number,reflect:!0,attribute:!0}),ue({context:ma})],Tt.prototype,"ms",2);zt([g({type:Number,reflect:!0,attribute:!0}),ue({context:Vo})],Tt.prototype,"speed",2);zt([ue({context:ga})],Tt.prototype,"providedSelf",2);zt([g({type:String,reflect:!0,attribute:!0}),ue({context:Yo})],Tt.prototype,"recording",2);zt([g({type:String,reflect:!0,attribute:!0}),ue({context:ya})],Tt.prototype,"playing",2);zt([g({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Tt.prototype,"batch",2);zt([g({type:String,attribute:!0,reflect:!0})],Tt.prototype,"thermal",2);zt([g({type:String,attribute:!0,reflect:!0})],Tt.prototype,"visible",2);zt([g({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis1",2);zt([g({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis2",2);zt([g({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis3",2);zt([g({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis4",2);zt([g({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis5",2);zt([g({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis6",2);zt([g({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis7",2);Tt=zt([oe("file-provider")],Tt);var Ly=Object.defineProperty,Ry=Object.getOwnPropertyDescriptor,hs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ry(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ly(e,t,s),s};let pi=class extends At{constructor(){super(...arguments),this.providedSelf=this,this.container=fe(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof li){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Yr&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return w`

                    <div class="container">
                        <div ${Pe(this.container)} class="${Yt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${Pc.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return w`
            ${this.ready?w`<slot></slot>`:z}
            <slot name="mark"></slot>
        `}};pi.styles=ye`

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
    
    `;hs([ue({context:ga})],pi.prototype,"providedSelf",2);hs([P()],pi.prototype,"container",2);hs([P()],pi.prototype,"ready",2);hs([P()],pi.prototype,"hover",2);hs([P()],pi.prototype,"listener",2);pi=hs([oe("file-dropin")],pi);var Dy=Object.defineProperty,Ty=Object.getOwnPropertyDescriptor,Xo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ty(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Dy(e,t,s),s};let Is=class extends Ti{constructor(){super(...arguments),this.container=fe(),this.hover=!1,this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const r={dropin:!0,hover:this.hover};return w`

            <div class="container" ${Pe(this.tourableElementRef)}>
            
                <div ${Pe(this.container)} class="${Yt(r)}"></div>

            </div>

            <slot name="tour"></slot>
        
        `}};Is.styles=ye`

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
    
    `;Xo([P()],Is.prototype,"container",2);Xo([P()],Is.prototype,"hover",2);Is=Xo([oe("group-dropin")],Is);var Iy=Object.defineProperty,My=Object.getOwnPropertyDescriptor,Ii=(r,e,t,i)=>{for(var s=i>1?void 0:i?My(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Iy(e,t,s),s};let fi=class extends Xc{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Rr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Ii([ue({context:Mo})],fi.prototype,"manager",2);Ii([g({type:String})],fi.prototype,"slug",2);Ii([ue({context:os}),g({type:String,converter:{fromAttribute:r=>({key:r,data:Rr[r]}),toAttribute:r=>r.key.toString()}})],fi.prototype,"palette",2);Ii([ue({context:Uo}),g({type:String})],fi.prototype,"smooth",2);Ii([ue({context:ca}),g({type:String})],fi.prototype,"graphSmooth",2);Ii([g({type:Boolean})],fi.prototype,"autoclear",2);fi=Ii([oe("manager-mirror")],fi);var Uy=Object.defineProperty,Fy=Object.getOwnPropertyDescriptor,Mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Uy(e,t,s),s};let _r=class extends Kc{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};Mr([g({type:String,reflect:!0,attribute:!0})],_r.prototype,"slug",2);Mr([ue({context:Fo})],_r.prototype,"registry",2);Mr([ue({context:zo}),g({type:Number,reflect:!0,attribute:!0})],_r.prototype,"opacity",2);Mr([ue({context:No}),P()],_r.prototype,"min",2);Mr([ue({context:jo}),P()],_r.prototype,"max",2);Mr([ue({context:ua}),g({type:Number})],_r.prototype,"from",2);Mr([ue({context:da}),g({type:Number})],_r.prototype,"to",2);Mr([ue({context:Zc}),g({type:String})],_r.prototype,"loading",2);Mr([g({type:Boolean})],_r.prototype,"autoclear",2);_r=Mr([oe("registry-mirror")],_r);var zy=Object.defineProperty,Ny=Object.getOwnPropertyDescriptor,cs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ny(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zy(e,t,s),s};let Oi=class extends Qc{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};cs([g({type:String})],Oi.prototype,"slug",2);cs([ue({context:Bo})],Oi.prototype,"group",2);cs([ue({context:pa})],Oi.prototype,"tool",2);cs([ue({context:fa})],Oi.prototype,"tools",2);cs([g({type:Boolean})],Oi.prototype,"autoclear",2);Oi=cs([oe("group-mirror")],Oi);var jy=Object.defineProperty,By=Object.getOwnPropertyDescriptor,lr=(r,e,t,i)=>{for(var s=i>1?void 0:i?By(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jy(e,t,s),s};let Xt=class extends At{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};lr([ue({context:ga})],Xt.prototype,"providedSelf",2);lr([ue({context:Ho}),g()],Xt.prototype,"file",2);lr([g({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Xt.prototype,"batch",2);lr([g({type:String})],Xt.prototype,"thermal",2);lr([g({type:String})],Xt.prototype,"visible",2);lr([g({type:String})],Xt.prototype,"analysis1",2);lr([g({type:String})],Xt.prototype,"analysis2",2);lr([g({type:String})],Xt.prototype,"analysis3",2);lr([g({type:String})],Xt.prototype,"analysis4",2);lr([g({type:String})],Xt.prototype,"analysis5",2);lr([g({type:String})],Xt.prototype,"analysis6",2);lr([g({type:String})],Xt.prototype,"analysis7",2);Xt=lr([oe("file-mirror")],Xt);var Hy=Object.defineProperty,Wy=Object.getOwnPropertyDescriptor,iu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hy(e,t,s),s};let Gn=class extends or{constructor(){super(...arguments),this.tourableElemtnRef=fe()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return w`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return w`

            <thermal-dropdown variant="foreground" ${Pe(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Rr).map(([r,e])=>w`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};Gn.styles=ye`

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

    `;iu([ge({context:os,subscribe:!0})],Gn.prototype,"value",2);Gn=iu([oe("registry-palette-dropdown")],Gn);var Gy=Object.defineProperty,Vy=Object.getOwnPropertyDescriptor,su=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gy(e,t,s),s};let Vn=class extends or{constructor(){super(...arguments),this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return w`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${L(E.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return w`
            <div class="container" ${Pe(this.tourableElementRef)}>
                ${Object.entries(Rr).map(([r,e])=>w`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};Vn.styles=ye`

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

    `;su([ge({context:os,subscribe:!0}),P()],Vn.prototype,"value",2);Vn=su([oe("registry-palette-buttons")],Vn);var Yy=Object.defineProperty,qy=Object.getOwnPropertyDescriptor,nu=(r,e,t,i)=>{for(var s=i>1?void 0:i?qy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yy(e,t,s),s};let Yn=class extends Qs{constructor(){super(...arguments),this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}render(){return w`

            <div ${Pe(this.tourableElementRef)}>

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
        `}};Yn.styles=ye`
    
        :host {}

    `;nu([ge({context:Uo,subscribe:!0})],Yn.prototype,"smooth",2);Yn=nu([oe("manager-smooth-switch")],Yn);var Xy=Object.defineProperty,Ky=Object.getOwnPropertyDescriptor,au=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ky(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xy(e,t,s),s};let qn=class extends Qs{constructor(){super(...arguments),this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}render(){return w`

            <div ${Pe(this.tourableElementRef)}>

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
        `}};qn.styles=ye`
    
        :host {}

    `;au([ge({context:ca,subscribe:!0})],qn.prototype,"smooth",2);qn=au([oe("manager-graph-smooth-switch")],qn);var Zy=Object.defineProperty,Qy=Object.getOwnPropertyDescriptor,ou=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zy(e,t,s),s};let Xn=class extends or{constructor(){super(...arguments),this.containerRef=fe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return w`
            <div ${Pe(this.containerRef)}>
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
        `}};Xn.styles=ye`

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
    
    `;ou([ge({context:zo,subscribe:!0})],Xn.prototype,"value",2);Xn=ou([oe("registry-opacity-slider")],Xn);var Jy=Object.defineProperty,ev=Object.getOwnPropertyDescriptor,tv=(r,e,t,i)=>{for(var s=i>1?void 0:i?ev(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jy(e,t,s),s};let kh=class extends or{constructor(){super(...arguments),this.buttonRef=fe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return w`
            <thermal-button ${Pe(this.buttonRef)} @click=${this.doAction}>${L(E.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};kh=tv([oe("registry-range-auto-button")],kh);var rv=Object.defineProperty,iv=Object.getOwnPropertyDescriptor,sv=(r,e,t,i)=>{for(var s=i>1?void 0:i?iv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rv(e,t,s),s};let Ph=class extends or{constructor(){super(...arguments),this.buttonRef=fe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}render(){return w`
            <thermal-button ${Pe(this.buttonRef)} @click=${this.doAction}>${L(E.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};Ph=sv([oe("registry-range-full-button")],Ph);var nv=Object.defineProperty,av=Object.getOwnPropertyDescriptor,Mi=(r,e,t,i)=>{for(var s=i>1?void 0:i?av(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nv(e,t,s),s};let nr=class extends or{constructor(){super(...arguments),this.ticksRef=fe(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=fe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/nr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){const r=this.highlightFrom!==void 0&&this.highlightTo!==void 0;let e,t;if(this.registry.minmax.value&&r&&this.highlightFrom!==void 0&&this.highlightTo!==void 0){const i=this.registry.minmax.value.min,s=this.registry.minmax.value.max-i;e=(this.highlightFrom-i)/s*100,t=(this.highlightTo-i)/s*100-e}return w`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${Pe(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${Pe(this.ticksRef)}>

                    ${r?w`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${e}%; width: ${t}%; background-color: var(--thermal-foreground)"></div>`:z}

                    ${this.ticks.map(i=>w`
                            <div class="tick" >
                                <div class="tick-value">
                                ${i.value.toFixed(nr.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                    

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};nr.TICK_WIDTH=40;nr.TICK_FIXED=2;nr.styles=ye`

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


    `;Mi([g({type:String,reflect:!0})],nr.prototype,"placement",2);Mi([P()],nr.prototype,"minmax",2);Mi([P()],nr.prototype,"ticks",2);Mi([g({type:Number,reflect:!0})],nr.prototype,"highlightFrom",2);Mi([g({type:Number,reflect:!0})],nr.prototype,"highlightTo",2);Mi([ge({context:os,subscribe:!0}),P()],nr.prototype,"palette",2);nr=Mi([oe("registry-ticks-bar")],nr);var ov=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,en=(r,e,t,i)=>{for(var s=i>1?void 0:i?lv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ov(e,t,s),s};let Ji=class extends or{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return w`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return w`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};en([P()],Ji.prototype,"minmax",2);en([P()],Ji.prototype,"range",2);en([P()],Ji.prototype,"opacity",2);en([P()],Ji.prototype,"palette",2);Ji=en([oe("registry-log")],Ji);(()=>{var r=Object.defineProperty,e=Math.pow,t=(f,y,I)=>y in f?r(f,y,{enumerable:!0,configurable:!0,writable:!0,value:I}):f[y]=I,i=(f,y,I)=>(t(f,typeof y!="symbol"?y+"":y,I),I),s=(f,y)=>` ${y&&y.length>0?y.map(I=>`<link rel="stylesheet" href="${I}" />`).join(""):""} <style> ${f} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",u="data",d="min",p="max",b="step",v="round",x="type",_="theme",W="rtl",O="btt",M="disabled",H="keyboard-disabled",T="mousewheel-disabled",K="slider-width",S="slider-height",k="slider-radius",D="slider-bg",R="slider-bg-hover",G="slider-bg-fill",U="pointer-width",N="pointer-height",A="pointer-radius",q="pointer-bg",ae="pointer-bg-hover",$="pointer-bg-focus",F="pointer-shadow",de="pointer-shadow-hover",re="pointer-shadow-focus",Le="pointer-border",He="pointer-border-hover",st="pointer-border-focus",et="animate-onclick",ie="css-links",he="vertical",Ce="horizontal",Re=(f,y,I,C,te)=>{let we=y-f;return we===0?I:(C-I)*(te-f)/we+I},Ke=f=>!isNaN(parseFloat(f))&&isFinite(f),Ie=(f,y)=>Ke(f)?Number(f):y,ti=(f,y)=>y===0?0:Math.round(f/y)*y,wi=(f,y=1/0)=>{if(y===1/0)return f;let I=e(10,y);return Math.round(f*I)/I},Ze=f=>f==null?!1:typeof f=="boolean"?f:f.trim().toLowerCase()==="true",er=(f,y)=>{f.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:y}}))},jr=(f,y)=>{f.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:y}}))},xa=(f,y)=>{f.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:y}}))},Sa=(f,y)=>{f.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:y}}))},$a=(f,y)=>{if(!y||y.length<=0)return;let I=y.map(te=>Ke(te)?Ie(te,te):te),C={values:I||[]};C.value=I[0],C.value0=I[0],C.value1=I[0];for(let te=1;te<I.length;te++)C[`value${te+1}`]=I[te];f.dispatchEvent(new CustomEvent("change",{detail:C}))},V=(f,y,I)=>{let C=0,te,we,Oe,se,ne=!1,De=(Se,rt,kt,xt,ct,ut)=>{let Ht=C;kt!==void 0&&Se>kt&&(Se=kt),rt!==void 0&&Se<rt&&(Se=rt),C=Se;let Wt=C;return(xt===he&&ut||xt===Ce&&ct)&&(Wt=100-Wt),xt===he?y.style.top=`${Wt}%`:y.style.left=`${Wt}%`,Ht!==C},Fe=Se=>Se===y||y.contains(Se),pe=(Se,rt,kt,xt)=>{te=Se,we=rt,Oe=kt,se=xt},qe=Se=>{ne=Se,y.classList.toggle("disabled",ne),ne?y.setAttribute("aria-disabled","true"):y.hasAttribute("aria-disabled")&&y.removeAttribute("aria-disabled")},dr=(Se,rt)=>{rt==null?y.removeAttribute(Se):y.setAttribute(Se,rt)},Mt=Se=>y.getAttribute(Se),xe=Se=>{if(!ne){switch(Se.key){case"ArrowLeft":{Se.preventDefault(),typeof te=="function"&&te(I);break}case"ArrowRight":{Se.preventDefault(),typeof we=="function"&&we(I);break}case"ArrowUp":{Se.preventDefault(),typeof Oe=="function"&&Oe(I);break}case"ArrowDown":{Se.preventDefault(),typeof se=="function"&&se(I);break}}Sa(f,Se)}},Te=()=>{ne||er(f,y)};return y.className=`pointer pointer-${I}`,y.addEventListener("keydown",xe),y.addEventListener("click",Te),{$pointer:y,get percent(){return C},get disabled(){return ne},set disabled(Se){qe(Se)},updatePosition:De,isClicked:Fe,setCallbacks:pe,setAttr:dr,getAttr:Mt,destroy:()=>{y.removeEventListener("keydown",xe),y.removeEventListener("click",Te),y.remove()}}},Z=f=>{if(f==null)return;if(Array.isArray(f))return f;if(f.trim()==="")return;let y=f.split(","),I=[],C=!0;for(let te=0;te<y.length;te++){let we=y[te].trim();we!==""&&(I.push(we),Ke(we)||(C=!1))}return C?I.map(te=>Number(te)):I},Q=(f,y)=>y?y.findIndex(I=>I===f||I.toString().trim()===f.toString().trim()):-1,J=f=>({updatePosition:(y,I,C,te)=>{if(I.length<=0)return;let we=I.length===1,Oe=I[0],se=I[I.length-1];y===he?(f.style.removeProperty("width"),f.style.removeProperty("right"),f.style.removeProperty("left"),we?f.style.height=`${Oe}%`:f.style.height=`${Math.abs(Oe-se)}%`,te?(f.style.bottom="0%",we?f.style.top="auto":f.style.top=`${Math.min(100-se,100-Oe)}%`):(f.style.bottom="auto",we?f.style.top="0%":f.style.top=`${Math.min(Oe,se)}%`)):(f.style.removeProperty("height"),f.style.removeProperty("top"),f.style.removeProperty("bottom"),we?f.style.width=`${Oe}%`:f.style.width=`${Math.abs(Oe-se)}%`,C?(f.style.right="0%",we?f.style.left="auto":f.style.left=`${Math.min(100-se,100-Oe)}%`):(f.style.right="auto",we?f.style.left="0%":f.style.left=`${Math.min(Oe,se)}%`))}}),ve="--animate-onclick",We="--width",ke="--height",tt="--panel-bg-border-radius",Ne="--panel-bg",le="--panel-bg-hover",je="--panel-bg-fill",B="--pointer-width",Y="--pointer-height",Ae="--pointer-border-radius",Me="--pointer-bg",mt="--pointer-bg-hover",Ot="--pointer-bg-focus",Ar="--pointer-shadow",tr="--pointer-shadow-hover",ur="--pointer-shadow-focus",ri="--pointer-border",me="--pointer-border-hover",Ee="--pointer-border-focus",X=(f,y,I)=>{let C=new Map;for(let te of f.attributes){let we=te.nodeName.trim().toLowerCase();if(!y.test(we))continue;let Oe=we.replace(/\D/g,"").trim(),se=Oe===""||Oe==="0"||Oe==="1"?0:Ie(Oe,0)-1,ne=I&&typeof I=="function"?I(te.value):te.value;C.set(se,ne)}return C},$e=f=>{if(!f)return null;let y=f.getAttribute(ie);if(!y)return null;let I=y.split(";"),C=[];for(let te of I)te.trim()!==""&&C.push(te.trim());return C},Ge=[[We,K,"sliderWidth",null],[ke,S,"sliderHeight",null],[tt,k,"sliderRadius",null],[Ne,D,"sliderBg",null],[le,R,"sliderBgHover",null],[je,G,"sliderBgFill",null],[B,U,"pointer#Width",/^pointer([0-9]*)-width$/],[Y,N,"pointer#Height",/^pointer([0-9]*)-height$/],[Ae,A,"pointer#Radius",/^pointer([0-9]*)-radius$/],[Me,q,"pointer#Bg",/^pointer([0-9]*)-bg$/],[mt,ae,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ot,$,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Ar,F,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[tr,de,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[ur,re,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[ri,Le,"pointer#Border",/^pointer([0-9]*)-border$/],[me,He,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Ee,st,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Be=(f,y,I)=>{let C=null,te=[],we=new Map,Oe=(xe,Te=y)=>{let Se=[...Te.classList];for(let rt of Se)rt.startsWith(xe)&&y.classList.remove(rt)},se=()=>{Oe("shape");let xe=y.querySelectorAll(".pointer");for(let Te of xe)Oe("shape",Te)},ne=xe=>{C=xe,Oe("theme-"),typeof xe=="string"&&y.classList.add(`theme-${xe}`)},De=()=>{if(se(),!(te.length<=0)){y.classList.add("shape",`shape-${te[0]}`);for(let xe=1;xe<te.length;xe++){let Te=te[xe];if(!Te)continue;let Se=y.querySelector(`.pointer-${xe}`);!Se||Se.classList.add("shape",`shape-${Te}`)}}},Fe=(xe,Te)=>{te[xe]=Te,De()},pe=()=>{se();let xe=X(f,/^pointer([0-9]*)-shape$/);if(!(xe.size<=0)){for(let Te of xe){let Se=Te[0];te[Se]=Te[1]}De()}},qe=(xe,Te)=>`${xe}-${Te}`,dr=(xe,Te,Se)=>{let rt=I[Se];if(!rt)return;let kt=Se===0?y:rt.$pointer;if(Te==null){we.has(qe(xe,Se))&&we.delete(qe(xe,Se)),kt.style.removeProperty(xe);return}we.set(qe(xe,Se),Te),kt.style.setProperty(xe,Te)},Mt=(xe,Te)=>we.get(qe(xe,Te));return(()=>{for(let xe of Ge){let[Te,Se,rt,kt]=xe;if(kt){let ct=X(f,kt);for(let ut of ct){let Ht=ut[0],Wt=ut[1];dr(Te,Wt,Ht)}}else{let ct=f.getAttribute(Se);dr(Te,ct,0)}let xt=[];if(rt.indexOf("#")===-1)xt.push([rt,0]);else{xt.push([rt.replace("#",""),0]),xt.push([rt.replace("#","0"),0]),xt.push([rt.replace("#","1"),0]);for(let ct=1;ct<I.length;ct++)xt.push([rt.replace("#",(ct+1).toString()),ct])}for(let ct of xt)try{let ut=ct[0],Ht=ct[1];Object.prototype.hasOwnProperty.call(f,ut)||Object.defineProperty(f,ut,{get(){return Mt(Te,Ht)},set:Wt=>{dr(Te,Wt,Ht)}})}catch(ut){console.error(ut)}}ne(f.getAttribute(_)),pe()})(),{setStyle:dr,getStyle:Mt,get theme(){return C},set theme(xe){ne(xe)},get pointerShapes(){return te},setPointerShape:Fe}},ot="animate-on-click",Ue="range-dragging",Bt=(f,y,I,C)=>{let te=[],we=Fe=>{for(let pe of te)pe.update&&typeof pe.update=="function"&&pe.update(Fe)},Oe=()=>{for(let Fe of te)Fe.destroy&&typeof Fe.destroy=="function"&&Fe.destroy()},se=(Fe,pe)=>{for(let qe of te)qe.onAttrChange&&typeof qe.onAttrChange=="function"&&qe.onAttrChange(Fe,pe)},ne=Fe=>{if(Fe.gettersAndSetters){for(let pe of Fe.gettersAndSetters)if(!(!pe.name||!pe.attributes))try{Object.prototype.hasOwnProperty.call(f,pe.name)||Object.defineProperty(f,pe.name,pe.attributes)}catch(qe){console.error("defineSettersGetters error:",qe)}}},De=Fe=>{var pe;if(!Fe.css)return;let qe=(pe=f.shadowRoot)==null?void 0:pe.querySelector("style");!qe||(qe.innerHTML+=Fe.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Fe of window.tcRangeSliderPlugins){let pe=Fe();te.push(pe),pe.init&&typeof pe.init=="function"&&(pe.init(f,y,I,C),ne(pe),De(pe))}},update:we,onAttrChange:se,destroy:Oe}},yt=10,nn=20,cu=(f,y)=>{let I=new Map,C=/^value([0-9]*)$/;for(let se of f.attributes){let ne=se.nodeName.trim().toLowerCase();if(!C.test(ne))continue;let De=ne.replace("value","").trim(),Fe=De===""||De==="0"||De==="1"?0:Ie(De,0)-1,pe=Ke(se.value)?Ie(se.value,0):se.value;I.set(Fe,pe)}let te=Math.max(...Array.from(I.keys())),we=[];we.push([V(f,y,0),I.get(0)]);let Oe=y;for(let se=1;se<=te;se++){let ne=y.cloneNode(!0);Oe.after(ne),Oe=ne,we.push([V(f,ne,se),I.get(se)])}return we},hl=(f,y,I,C,te,we,Oe)=>{try{Object.defineProperty(f,C,{configurable:!0,get(){if(!y)return;let se=y.pointers[I];if(!se)return;let ne=y.getTextValue(se.percent);return Ke(ne)?Ie(ne,ne):ne},set:se=>{y.pointers[I]?y==null||y.setValue(se,I):y==null||y.addPointer(se)}}),Object.defineProperty(f,te,{configurable:!0,get(){var se,ne;return(ne=(se=y==null?void 0:y.pointers[I])==null?void 0:se.getAttr("aria-label"))!=null?ne:void 0},set:se=>{!y||y.setAriaLabel(I,se)}}),Object.defineProperty(f,we,{configurable:!0,get(){var se,ne;return(ne=(se=y==null?void 0:y.styles)==null?void 0:se.pointerShapes[I])!=null?ne:null},set:se=>{!y||!y.styles||y.styles.setPointerShape(I,se)}}),Object.defineProperty(f,Oe,{configurable:!0,get(){var se;return(se=y==null?void 0:y.pointers[I].disabled)!=null?se:!1},set:se=>{if(!y)return;let ne=y==null?void 0:y.pointers[I];!ne||(ne.disabled=se)}})}catch(se){console.error(se)}},uu=(f,y)=>{let I=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let C=2;C<yt;C++)I.push([`value${C}`,`ariaLabel${C}`,`pointer${C}Shape`,`pointer${C}Disabled`,C-1]);for(let C of I)hl(f,y,C[4],C[0],C[1],C[2],C[3])},cl=(f,y,I)=>{var C;let te=(C=I.shadowRoot)==null?void 0:C.querySelector(".container");if(te)for(let we of f)y?te.prepend(we.$pointer):te.append(we.$pointer)},du=(f,y)=>{if(!(!y||f.length<=1)){for(let I of f)I.$pointer.style.zIndex=nn.toString();y.$pointer.style.zIndex=(nn*2).toString()}},_a=0,fs=100,Fi=2,ul="0.3s",pu=(f,y,I)=>{let C=I.map(m=>m[0]),te=null,we=null,Oe=null,se=null,ne=_a,De=fs,Fe,pe,qe=Ce,dr=Fi,Mt=!1,xe=!1,Te=!1,Se=0,rt=1/0,kt=!1,xt,ct,ut=!1,Ht=!1,Wt=!1,ii=ul,dl=[],pl=m=>{ut||(m.preventDefault&&m.preventDefault(),xi(m),window.addEventListener("mousemove",xi),window.addEventListener("mouseup",an),jr(f,m))},an=m=>{ut||(xt=void 0,ct=void 0,window.removeEventListener("mousemove",xi),window.removeEventListener("mouseup",an),ii&&y.classList.add(ot),xa(f,m))},mu=(m,j)=>{if(C.length<=0)return;if(C.length===1)return C[0].isClicked(m)&&ii&&y.classList.remove(ot),C[0];let ce=vu(m);if(kt){let Ve=j,wr=ln(Ve);wr!==void 0&&(Ve=ti(Ve,wr)),ce?(xt=Ve,ct=0,ii&&y.classList.remove(ot)):xt!==void 0&&(ct=Ve-xt,xt=Ve)}if(!yu(m)&&!ce){for(let Ve of C)if(!(!Ve.isClicked(m)||Ve.disabled))return ii&&y.classList.remove(ot),Ve;for(let Ve of C)if(te===Ve)return Ve}let Qe=1/0,dt=null;for(let Ve of C){if(Ve.disabled)continue;let wr=Math.abs(j-Ve.percent);wr<Qe&&(Qe=wr,dt=Ve)}return dt},fl=()=>C.findIndex(m=>te===m&&!m.disabled),xi=m=>{let j;if(qe===he){let{height:Qe,top:dt}=y.getBoundingClientRect(),Ve=m.type.indexOf("mouse")!==-1?m.clientY:m.touches[0].clientY;j=Math.min(Math.max(0,Ve-dt),Qe)*100/Qe}else{let{width:Qe,left:dt}=y.getBoundingClientRect(),Ve=m.type.indexOf("mouse")!==-1?m.clientX:m.touches[0].clientX;j=Math.min(Math.max(0,Ve-dt),Qe)*100/Qe}if((Mt||xe)&&(j=100-j),te=mu(m.target,j),te&&du(C,te),kt&&C.length>1&&ct!==void 0){let Qe=C[0],dt=C[C.length-1],Ve=Qe.percent+ct<0,wr=dt.percent+ct>100;if(Ve||wr)return;for(let mn=0;mn<C.length;mn++)Gt(mn,C[mn].percent+ct);return}let ce=fl();ce!==-1&&(Gt(ce,j),te==null||te.$pointer.focus())},on=m=>{if(ut||document.activeElement!==f||te!=null&&te.disabled)return;m.stopPropagation(),m.preventDefault();let j=m.deltaY<0,ce=Mt||xe,Qe=j?!ce:ce,dt=fl();dt!==-1&&(Qe?gs(dt,C[dt].percent):ms(dt,C[dt].percent))},gl=m=>{ut||Ht||(qe===he?xe?Gt(m,100):Gt(m,0):Mt?ms(m,C[m].percent):gs(m,C[m].percent))},ml=m=>{ut||Ht||(qe===he?xe?Gt(m,0):Gt(m,100):Mt?gs(m,C[m].percent):ms(m,C[m].percent))},yl=m=>{ut||Ht||(qe===he?xe?ms(m,C[m].percent):gs(m,C[m].percent):Mt?Gt(m,100):Gt(m,0))},vl=m=>{ut||Ht||(qe===he?xe?gs(m,C[m].percent):ms(m,C[m].percent):Mt?Gt(m,0):Gt(m,100))},yu=m=>m.classList.contains("panel"),vu=m=>m.classList.contains("panel-fill"),gs=(m,j)=>{if(j===void 0)return;let ce=ln(j);ce==null&&(ce=1),j-=ce,j<0&&(j=0),Gt(m,j)},ms=(m,j)=>{if(j===void 0)return;let ce=ln(j);ce==null&&(ce=1),j+=ce,j>100&&(j=100),Gt(m,j)},Si=()=>{!se||se.update({percents:bl(),values:wl(),$pointers:xl(),min:Sl(),max:$l(),data:Pa(),step:ka(),round:Ea(),type:Aa(),textMin:hn(),textMax:cn(),rightToLeft:Ra(),bottomToTop:Da(),pointersOverlap:Ua(),pointersMinDistance:Oa(),pointersMaxDistance:La(),rangeDragging:Fa(),disabled:Ta(),keyboardDisabled:Ia(),mousewheelDisabled:Ma()})},bu=()=>{Si()},wu=m=>{if(!(Te||C.length<=1||De===ne))if(m===0){let j=rt*100/(De-ne);return Math.max(0,C[m+1].percent-j)}else{let j=Se*100/(De-ne);return Math.min(C[m-1].percent+j,100)}},xu=m=>{if(!(Te||C.length<=1||De===ne))if(m===C.length-1){let j=rt*100/(De-ne);return Math.min(C[m-1].percent+j,100)}else{let j=Se*100/(De-ne);return Math.max(0,C[m+1].percent-j)}},ln=m=>{let j;if(typeof Fe=="function"){let ce=Re(0,100,ne,De,m);j=Fe(ce,m)}else j=Fe;if(Ke(j)){let ce=De-ne;return j=ce===0?0:j*100/ce,j}},zi=m=>{if(m===void 0)return;let j=Re(0,100,ne,De,m);return pe!==void 0?pe[Math.round(j)]:wi(j,dr)},hn=()=>pe!==void 0?pe[ne]:ne,cn=()=>pe!==void 0?pe[De]:De,ka=()=>Fe,Su=m=>{var j;return m<=0||Te?hn():(j=zi(C[m-1].percent))!=null?j:""},$u=m=>{var j;return C.length<=1||m>=C.length-1||Te?cn():(j=zi(C[m+1].percent))!=null?j:""},bl=()=>C.map(m=>m.percent),wl=()=>C.map(m=>zi(m.percent)),xl=()=>C.map(m=>m.$pointer),Sl=()=>ne,$l=()=>De,Pa=()=>pe,Aa=()=>qe,Ea=()=>dr,Oa=()=>Se,La=()=>rt,_u=m=>dl[m],Ra=()=>Mt,Da=()=>xe,Ta=()=>ut,Ia=()=>Ht,Ma=()=>Wt,Ua=()=>Te,Fa=()=>kt,Gt=(m,j)=>{if(j===void 0)return;let ce=ln(j);ce!==void 0&&(j=ti(j,ce));let Qe=C[m];if(!Qe)return;let dt=Qe.updatePosition(j,wu(m),xu(m),qe,Mt,xe);we==null||we.updatePosition(qe,C.map(Ve=>Ve.percent),Mt,xe),Si();for(let Ve of C){let wr=zi(Ve.percent);wr!==void 0&&(Ve.setAttr("aria-valuenow",wr.toString()),Ve.setAttr("aria-valuetext",wr.toString()))}ku(),dt&&$a(f,C.map(Ve=>zi(Ve.percent)))},Er=()=>{for(let m=0;m<C.length;m++)Gt(m,C[m].percent)},Cu=(m,j)=>{ne=pe!==void 0?0:Ie(m,_a),De=pe!==void 0?pe.length-1:Ie(j,fs),un(ne),dn(De)},ku=()=>{var m,j;for(let ce=0;ce<C.length;ce++){let Qe=C[ce];Qe.setAttr("aria-valuemin",((m=Su(ce))!=null?m:"").toString()),Qe.setAttr("aria-valuemax",((j=$u(ce))!=null?j:"").toString())}},un=m=>{ne=Ie(m,_a),ne>De&&(De=ne+fs),Er()},dn=m=>{De=Ie(m,fs),De<ne&&(De=ne+fs),Er()},_l=m=>{Te=!0;for(let j=0;j<m.length;j++)pn(m[j],j);Te=!1;for(let j=0;j<m.length;j++)pn(m[j],j)},pn=(m,j)=>{let ce;pe!==void 0?(ce=m==null?0:Q(m,pe),ce===-1&&(ce=0)):(ce=Ie(m,ne),ce<ne&&(ce=ne),ce>De&&(ce=De));let Qe=Re(ne,De,0,100,ce);Gt(j,Qe)},fn=m=>{if(m==null){Fe=void 0;return}if(typeof m=="function"){Fe=m,Er();return}if(Ke(m)){Fe=Ie(m,1);let j=Math.abs(De-ne);Fe>j&&(Fe=void 0),Er();return}Fe=void 0},za=m=>{Te=m,Er()},Na=m=>{(!Ke(m)||m<0)&&(m=0),Se=m},ja=m=>{(!Ke(m)||m<0)&&(m=1/0),rt=m},Ba=m=>{ut=m,y.classList.toggle("disabled",ut),ut?y.setAttribute("aria-disabled","true"):y.hasAttribute("aria-disabled")&&y.removeAttribute("aria-disabled")},Cl=m=>{Ht=m},kl=m=>{Wt=m,Wt?document.removeEventListener("wheel",on):document.addEventListener("wheel",on,{passive:!1})},Ha=m=>{if(m==null){pe=void 0;return}if(pe=Z(m),pe===void 0||pe.length<=0){pe=void 0;return}un(0),dn(pe.length-1),Fe===void 0&&fn(1)},Wa=m=>{var j;typeof m=="string"?qe=m.trim().toLowerCase()===he?he:Ce:qe=Ce;let ce=(j=f.shadowRoot)==null?void 0:j.querySelector(".range-slider-box");if(!ce)return;ce.className=`range-slider-box type-${qe}`,Er();let Qe=qe===he?"vertical":"horizontal";for(let dt of C)dt.setAttr("aria-orientation",Qe)},Ga=m=>{Mt=m,C.length>1&&cl(C,Mt,f),Er(),Si()},Va=m=>{xe=m,C.length>1&&cl(C,xe,f),Er(),Si()},Ya=m=>{dr=Ie(m,Fi),dr<0&&(dr=Fi),Si()},Pl=m=>{m==null||m.toString().trim().toLowerCase()==="false"?(ii=void 0,y.style.removeProperty(ve),y.classList.remove(ot)):(ii=m.toString(),y.style.setProperty(ve,ii),y.classList.add(ot))},Al=(m,j)=>{let ce=C[m];!ce||(ce.setAttr("aria-label",j),dl[m]=j)},gn=m=>{if(xt=void 0,C.length<=1){kt=!1,y.classList.remove(Ue);return}kt=m,y.classList.toggle(Ue,kt)},Pu=()=>{Ba(Ze(f.getAttribute(M))),Ht=Ze(f.getAttribute(H)),Wt=Ze(f.getAttribute(T));let m=X(f,/^pointer([0-9]*)-disabled$/,j=>Ze(j));for(let j of m){let ce=j[0];!C[ce]||(C[ce].disabled=j[1])}},Au=()=>{let m=X(f,/^aria-label([0-9]*)$/);for(let j of m){let ce=j[0];Al(ce,j[1])}},Eu=m=>{let j=C.length,ce=C[j-1].$pointer,Qe=ce.cloneNode(!0);ce.after(Qe);let dt=V(f,Qe,j);return dt.setCallbacks(gl,ml,yl,vl),C.push(dt),pn(m,j),Er(),Si(),j},Ou=()=>{let m=C.length,j=C[m-1];return j?(j.destroy(),C.pop(),C.length<=1&&gn(!1),Er(),Si(),m-1):-1};return(()=>{var m,j;for(let Qe of C)Qe.setCallbacks(gl,ml,yl,vl);let ce=(m=f.shadowRoot)==null?void 0:m.querySelector(".panel-fill");ce&&(we=J(ce)),Wa(f.getAttribute(x)),Ga(Ze(f.getAttribute(W))),Va(Ze(f.getAttribute(O))),Cu(f.getAttribute(d),f.getAttribute(p)),fn(f.getAttribute(b)),Ha(f.getAttribute(u)),_l(I.map(Qe=>Qe[1])),za(Ze(f.getAttribute(a))),Na(Ie(f.getAttribute(o),0)),ja(Ie(f.getAttribute(l),1/0)),gn(Ze(f.getAttribute(h))),Ya(Ie(f.getAttribute(v),Fi)),Pu(),Au(),Oe=Be(f,y,C),Pl((j=f.getAttribute(et))!=null?j:ul),y.addEventListener("mousedown",pl),y.addEventListener("mouseup",an),y.addEventListener("touchmove",xi),y.addEventListener("touchstart",xi),Wt||document.addEventListener("wheel",on,{passive:!1}),se=Bt(f,bu,{setValues:_l,setMin:un,setMax:dn,setStep:fn,setPointersOverlap:za,setPointersMinDistance:Na,setPointersMaxDistance:ja,setDisabled:Ba,setType:Wa,setRightToLeft:Ga,setBottomToTop:Va,setRound:Ya,setKeyboardDisabled:Cl,setMousewheelDisabled:kl,setRangeDragging:gn,setData:Ha},{getPercents:bl,getValues:wl,getPointerElements:xl,getMin:Sl,getMax:$l,getStep:ka,getData:Pa,getType:Aa,getRound:Ea,getTextMin:hn,getTextMax:cn,isRightToLeft:Ra,isBottomToTop:Da,isDisabled:Ta,isKeyboardDisabled:Ia,isMousewheelDisabled:Ma,isPointersOverlap:Ua,isRangeDraggingEnabled:Fa,getPointersMinDistance:Oa,getPointersMaxDistance:La}),se.init()})(),{get pointers(){return C},get styles(){return Oe},get pluginsManager(){return se},get min(){return hn()},get max(){return cn()},get step(){return ka()},get pointersOverlap(){return Ua()},set pointersOverlap(m){za(m)},get pointersMinDistance(){return Oa()},set pointersMinDistance(m){Na(m)},get pointersMaxDistance(){return La()},set pointersMaxDistance(m){ja(m)},get disabled(){return Ta()},set disabled(m){Ba(m)},get data(){return Pa()},get type(){return Aa()},set type(m){Wa(m)},get rightToLeft(){return Ra()},set rightToLeft(m){Ga(m)},get bottomToTop(){return Da()},set bottomToTop(m){Va(m)},get round(){return Ea()},set round(m){Ya(m)},get animateOnClick(){return ii},set animateOnClick(m){Pl(m)},get keyboardDisabled(){return Ia()},set keyboardDisabled(m){Cl(m)},get mousewheelDisabled(){return Ma()},set mousewheelDisabled(m){kl(m)},get rangeDragging(){return Fa()},set rangeDragging(m){gn(m)},setMin:un,setMax:dn,setValue:pn,setStep:fn,setData:Ha,getTextValue:zi,setAriaLabel:Al,getAriaLabel:_u,addPointer:Eu,removePointer:Ou,destroy:()=>{y.removeEventListener("mousedown",pl),y.removeEventListener("mouseup",an),y.removeEventListener("touchmove",xi),y.removeEventListener("touchstart",xi),document.removeEventListener("wheel",on);for(let m of C)m.destroy();se==null||se.destroy()}}},fu=(f,y,I)=>{let C=Ge.find(([se,ne,De,Fe])=>ne.replace("#","")===y.replace(/\d+/g,""));if(C&&f.styles){let[se,ne,De,Fe]=C,pe=y.replace(/\D/g,"").trim(),qe=pe===""||pe==="0"||pe==="1"?0:Ie(pe,0)-1;f.styles.setStyle(se,I,qe);return}switch(f&&f.pluginsManager&&f.pluginsManager.onAttrChange(y,I),y){case d:{f.setMin(I);break}case p:{f.setMax(I);break}case b:{f.setStep(I);break}case a:{f.pointersOverlap=Ze(I);break}case o:{f.pointersMinDistance=Ie(I,0);break}case h:{f.rangeDragging=Ze(I);break}case l:{f.pointersMaxDistance=Ie(I,1/0);break}case M:{f.disabled=Ze(I);break}case H:{f.keyboardDisabled=Ze(I);break}case T:{f.mousewheelDisabled=Ze(I);break}case u:{f.setData(I);break}case x:{f.type=I;break}case W:{f.rightToLeft=Ze(I);break}case O:{f.bottomToTop=Ze(I);break}case v:{f.round=Ie(I,Fi);break}case _:{f.styles&&(f.styles.theme=I);break}case et:{f.animateOnClick=I;break}}let te=null;if(/^value([0-9]*)$/.test(y)&&(te="value"),/^pointer([0-9]*)-disabled$/.test(y)&&(te="pointer-disabled"),/^aria-label([0-9]*)$/.test(y)&&(te="aria-label"),/^pointer([0-9]*)-shape$/.test(y)&&(te="pointer-shape"),!te)return;let we=y.replace(/\D/g,"").trim(),Oe=we===""||we==="0"||we==="1"?0:Ie(we,0)-1;switch(te){case"value":{f.setValue(I,Oe);break}case"pointer-disabled":{let se=f==null?void 0:f.pointers[Oe];if(!se)return;se.disabled=Ze(I);break}case"aria-label":{f.setAriaLabel(Oe,I);break}case"pointer-shape":{f.styles&&f.styles.setPointerShape(Oe,I);break}}},gu=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(f){this.slider&&this.slider.setStep(f)}get step(){var f;return(f=this.slider)==null?void 0:f.step}set disabled(f){this.slider&&(this.slider.disabled=f)}get disabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.disabled)!=null?y:!1}set data(f){var y;(y=this.slider)==null||y.setData(f)}get data(){var f;return(f=this.slider)==null?void 0:f.data}set min(f){var y;(y=this.slider)==null||y.setMin(f)}get min(){var f;return(f=this.slider)==null?void 0:f.min}set max(f){var y;(y=this.slider)==null||y.setMax(f)}get max(){var f;return(f=this.slider)==null?void 0:f.max}set round(f){!this.slider||(this.slider.round=f)}get round(){var f,y;return(y=(f=this.slider)==null?void 0:f.round)!=null?y:Fi}set type(f){!this.slider||(this.slider.type=f??Ce)}get type(){var f;return((f=this.slider)==null?void 0:f.type)||Ce}set pointersOverlap(f){!this.slider||(this.slider.pointersOverlap=f)}get pointersOverlap(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersOverlap)!=null?y:!1}set pointersMinDistance(f){!this.slider||(this.slider.pointersMinDistance=f)}get pointersMinDistance(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersMinDistance)!=null?y:0}set pointersMaxDistance(f){!this.slider||(this.slider.pointersMaxDistance=f)}get pointersMaxDistance(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersMaxDistance)!=null?y:1/0}set theme(f){!this.slider||!this.slider.styles||(this.slider.styles.theme=f)}get theme(){var f,y,I;return(I=(y=(f=this.slider)==null?void 0:f.styles)==null?void 0:y.theme)!=null?I:null}set rtl(f){!this.slider||(this.slider.rightToLeft=f)}get rtl(){var f,y;return(y=(f=this.slider)==null?void 0:f.rightToLeft)!=null?y:!1}set btt(f){!this.slider||(this.slider.bottomToTop=f)}get btt(){var f,y;return(y=(f=this.slider)==null?void 0:f.bottomToTop)!=null?y:!1}set keyboardDisabled(f){!this.slider||(this.slider.keyboardDisabled=f)}get keyboardDisabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.keyboardDisabled)!=null?y:!1}set mousewheelDisabled(f){!this.slider||(this.slider.mousewheelDisabled=f)}get mousewheelDisabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.mousewheelDisabled)!=null?y:!1}set animateOnClick(f){!this.slider||(this.slider.animateOnClick=f)}get animateOnClick(){var f;return(f=this.slider)==null?void 0:f.animateOnClick}get rangeDragging(){var f,y;return(y=(f=this.slider)==null?void 0:f.rangeDragging)!=null?y:!1}set rangeDragging(f){this.slider&&(this.slider.rangeDragging=Ze(f))}get externalCSSList(){return this._externalCSSList}addPointer(f){var y,I;if(!this.slider)return;let C=(I=(y=this.slider)==null?void 0:y.addPointer(f))!=null?I:0;hl(this,this.slider,C,`value${C+1}`,`ariaLabel${C+1}`,`pointerShape${C+1}`,`pointer${C+1}Disabled`)}removePointer(){var f;!this.slider||(f=this.slider)==null||f.removePointer()}addCSS(f){if(!this.shadowRoot)return;let y=document.createElement("style");y.textContent=f,this.shadowRoot.appendChild(y)}connectedCallback(){var f,y;if(!this.shadowRoot)return;this._externalCSSList=$e(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let I=(f=this.shadowRoot)==null?void 0:f.querySelector(".pointer");if(!I)return;let C=(y=this.shadowRoot)==null?void 0:y.getElementById("range-slider");if(!C)return;let te=cu(this,I);this.slider=pu(this,C,te),uu(this,this.slider),this._observer=new MutationObserver(we=>{we.forEach(Oe=>{var se;if(!this.slider||Oe.type!=="attributes")return;let ne=Oe.attributeName;!ne||fu(this.slider,ne,(se=this.getAttribute(ne))!=null?se:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Ca=gu;window.tcRangeSlider=Ca,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Ca),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Ca{})})();const hv=r=>!isNaN(parseFloat(r))&&isFinite(r),Br=(r,e)=>hv(r)?Number(r):e,io=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const Sn=40,$n=35,_n=30,Ah="#475569",Eh="#fff",Oh=20,cv=()=>{let r=null,e=null,t=!1,i=Sn,s=$n,n=_n,a=Ah,o=Eh,l="",h="",u,d=[],p=null,b=null;const v=()=>{p==null||p.classList.toggle("is-after",i<=0)},x=()=>{var F;const $=(F=r==null?void 0:r.shadowRoot)==null?void 0:F.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("tooltips"),$.prepend(p),v()},_=$=>{const F=document.createElement("div");return F.style.zIndex=Oh.toString(),F.className=$,F},W=($,F,de,re,Le)=>{$&&(F==="vertical"?($.style.left=`${-i}px`,$.style.top=re??"0"):($.style.left=de??"0",$.style.top=`${-i}px`),$.style.width=`${s}px`,$.style.height=`${n}px`,$.style.background=a,$.style.color=o,$.style.zIndex=Le.toString())},O=$=>{let F=$;return typeof u=="function"&&(F=u($)),h==="prefix"?`${l}${F}`:`${F}${l}`},M=()=>{const $=(e==null?void 0:e.getValues())??[],F=(e==null?void 0:e.getPointerElements())??[],de=(e==null?void 0:e.getType())??"horizontal";if($)for(let re=0;re<$.length;re++){const Le=d[re];if(!Le)continue;const He=($[re]??"").toString();Le.textContent=O(He),W(Le,de,F[re].style.left,F[re].style.top,F[re].style.zIndex)}},H=()=>{const $=(e==null?void 0:e.getValues())??[];if($){for(let F=0;F<$.length;F++){const de=_(`tooltip tooltip-${F+1}`);de.style.position="absolute",d.push(de),p==null||p.prepend(de)}M()}},T=()=>{r&&(b=new ResizeObserver($=>{for(const F of $)M()}),b.observe(r))},K=$=>{t=$,t?(x(),H(),T()):ae()},S=$=>{i=$,M()},k=$=>{s=$,M()},D=$=>{n=$,M()},R=$=>{a=$,M()},G=$=>{o=$,M()},U=$=>{l=$,M()},N=$=>{h=$,M()},A=$=>{u=$,M()},q=$=>{if(!t||!$.values)return;const F=(e==null?void 0:e.getPointerElements())??[],de=(e==null?void 0:e.getType())??"horizontal";for(let re=0;re<$.values.length;re++){const Le=$.values[re],He=d[re];if(Le===void 0&&He){He.remove(),d[re]=void 0;continue}if(Le!==void 0&&!He){const et=_(`tooltip tooltip-${re+1}`),ie=(Le??"").toString();et.textContent=O(ie),et.style.position="absolute",W(et,de,F[re].style.left,F[re].style.top,F[re].style.zIndex),d[re]=et,p==null||p.append(et)}if(!He)continue;const st=(Le??"").toString();He.textContent=O(st),W(He,de,F[re].style.left,F[re].style.top,F[re].style.zIndex)}},ae=()=>{p==null||p.remove();for(const $ of d)$&&$.remove();d=[],b==null||b.disconnect()};return{get name(){return"Moving Tooltip"},init:($,F,de,re)=>{r=$,e=re,i=Br($.getAttribute("moving-tooltip-distance-to-pointer"),Sn),s=Br($.getAttribute("moving-tooltip-width"),$n),n=Br($.getAttribute("moving-tooltip-height"),_n),a=$.getAttribute("moving-tooltip-bg")||Ah,o=$.getAttribute("moving-tooltip-text-color")||Eh,l=$.getAttribute("moving-tooltip-units")||"",h=$.getAttribute("moving-tooltip-units-type")||"",K(io($.getAttribute("moving-tooltip")))},update:q,onAttrChange:($,F)=>{$==="moving-tooltip"&&K(io(F)),$==="moving-tooltip-distance-to-pointer"&&S(Br(F,Sn)),$==="moving-tooltip-width"&&k(Br(F,$n)),$==="moving-tooltip-height"&&D(Br(F,_n)),$==="moving-tooltip-bg"&&R(F),$==="moving-tooltip-text-color"&&G(F),$==="moving-tooltip-units"&&U(F),$==="moving-tooltip-units-type"&&N(F)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:$=>{K(io($))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:$=>{S(Br($,Sn))}}},{name:"tooltipWidth",attributes:{get(){return s},set:$=>{k(Br($,$n))}}},{name:"tooltipHeight",attributes:{get(){return n},set:$=>{D(Br($,_n))}}},{name:"tooltipBg",attributes:{get(){return a},set:$=>{R($)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:$=>{G($)}}},{name:"tooltipUnits",attributes:{get(){return l},set:$=>{U($)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:$=>{N($)}}},{name:"formatTooltipValue",attributes:{get(){return u},set:$=>{A($)}}}],css:`
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
  z-index: ${Oh};
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
    `,destroy:ae}};window.tcRangeSliderPlugins.push(cv);(()=>{var r=(o,l,h,u,d)=>{let p=l-o;return p===0?h:(u-h)*(d-o)/p+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,u=null,d=null,p=!1,b=s,v=n,x=()=>{var S;let k=(S=o==null?void 0:o.shadowRoot)==null?void 0:S.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),u=document.createElement("div"),u.classList.add("mark-points"),h.append(u),d=document.createElement("div"),d.classList.add("mark-values"),h.append(d),k.append(h)},_=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},W=()=>{var S;if(!h||!l)return;let k=l.getMin(),D=l.getMax(),R=l.getType()==="vertical",G=l.isRightToLeft()||l.isBottomToTop();for(let N=0;N<b;N++){let A=document.createElement("div");A.classList.add("mark",`mark-${N}`);let q=b===0?0:N*100/(b-1);R?G?A.style.top=`${100-q}%`:A.style.top=`${q}%`:G?A.style.left=`${100-q}%`:A.style.left=`${q}%`,u==null||u.append(A)}let U=l.getData();for(let N=0;N<v;N++){let A=document.createElement("div");A.classList.add("mark-value",`mark-value-${N}`);let q=v===0?0:N*100/(v-1),ae=r(0,v-1,k,D,N);A.textContent=(U?(S=U[Math.round(ae)])!=null?S:"":ae).toString(),R?G?A.style.top=`${100-q}%`:A.style.top=`${q}%`:G?A.style.left=`${100-q}%`:A.style.left=`${q}%`,d==null||d.append(A)}},O=(S,k)=>{K(),b=S,v=k,b<=0&&(b=s),v<=0&&(v=n),x(),W(),_()},M=S=>{p=S,p?(x(),W(),_()):K()},H=S=>{!h||h.style.setProperty("--marks-color",S)},T=S=>{!h||h.style.setProperty("--values-color",S)},K=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(S,k,D,R)=>{var G,U;l=R,o=S,p=i(o.getAttribute("marks")),p&&(O(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),H((G=o.getAttribute("marks-color"))!=null?G:"#cbd5e1"),T((U=o.getAttribute("marks-values-color"))!=null?U:"#475569"))},onAttrChange:(S,k)=>{S==="marks"&&M(i(k)),S==="marks-count"&&O(t(k,s),v),S==="marks-values-count"&&O(b,t(k,n)),S==="marks-color"&&H(k),S==="marks-values-color"&&T(k)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return p??!1},set:S=>{M(i(S))}}},{name:"marksCount",attributes:{get(){return b??s},set:S=>{O(t(S,s),v)}}},{name:"marksValuesCount",attributes:{get(){return b??s},set:S=>{O(b,t(S,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:S=>{H(S)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:S=>{T(S)}}}],destroy:K,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var uv=Object.defineProperty,dv=Object.getOwnPropertyDescriptor,Ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?dv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&uv(e,t,s),s};let fr=class extends or{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=fe(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)})}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .tooltip {
                    font-size: 12px;
                }
                .pointer-shape {
                    border-radius: 0;
                    width: 10px;
                }
        `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?w`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:w`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Pe(this.sliderRef)}
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

        `}};fr.styles=ye`

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
    
    `;Ur([ge({context:No,subscribe:!0}),P()],fr.prototype,"min",2);Ur([ge({context:jo,subscribe:!0}),P()],fr.prototype,"max",2);Ur([ge({context:ua,subscribe:!0}),P()],fr.prototype,"from",2);Ur([ge({context:da,subscribe:!0}),P()],fr.prototype,"to",2);Ur([P()],fr.prototype,"hasFixedFrom",2);Ur([P()],fr.prototype,"hasFixedTo",2);Ur([ge({context:os,subscribe:!0}),P()],fr.prototype,"palette",2);Ur([P()],fr.prototype,"sliderRef",2);Ur([P()],fr.prototype,"initialised",2);fr=Ur([oe("registry-range-slider")],fr);var pv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,tn=(r,e,t,i)=>{for(var s=i>1?void 0:i?fv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pv(e,t,s),s};let es=class extends or{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=fe()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?z:w`
            <div ${Pe(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};tn([ge({context:ua,subscribe:!0})],es.prototype,"from",2);tn([ge({context:da,subscribe:!0})],es.prototype,"to",2);tn([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],es.prototype,"fixed",2);tn([g({type:String,reflect:!0,attribute:!0})],es.prototype,"separator",2);es=tn([oe("registry-range-display")],es);var gv=Object.defineProperty,mv=Object.getOwnPropertyDescriptor,va=(r,e,t,i)=>{for(var s=i>1?void 0:i?mv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gv(e,t,s),s};let ts=class extends or{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )",this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return w`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":z}" ${Pe(this.tourableElementRef)}>

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(r=>w`
                            <div class="histogram-bar">
                                <div style="height: ${r.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():w`
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
        `}};ts.styles=ye`

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


    `;va([P()],ts.prototype,"histogram",2);va([g({type:Boolean,reflect:!0})],ts.prototype,"interactive",2);va([g({type:String,reflect:!0})],ts.prototype,"height",2);ts=va([oe("registry-histogram")],ts);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mo extends Wn{}mo.directiveName="unsafeSVG",mo.resultType=2;const lu=Jn(mo);var yv=Object.defineProperty,vv=Object.getOwnPropertyDescriptor,ba=(r,e,t,i)=>{for(var s=i>1?void 0:i?vv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yv(e,t,s),s};let rs=class extends Ti{constructor(){super(...arguments),this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?z:w`
                <div class="switchers" ${Pe(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:t.key===this.value.key};return w`
                        
                        <button 
                            class=${Yt(i)} 
                            @click=${()=>{this.group.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${lu(t.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${L(E[this.hint])}</div>
                </div>

                <slot name="tour"></slot>
        `}};rs.styles=ye`

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

    `;ba([ge({context:pa,subscribe:!0}),P()],rs.prototype,"value",2);ba([ge({context:fa,subscribe:!0}),P()],rs.prototype,"tools",2);ba([P()],rs.prototype,"hint",2);rs=ba([oe("group-tool-buttons")],rs);var bv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,Ko=(r,e,t,i)=>{for(var s=i>1?void 0:i?wv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bv(e,t,s),s};let Ms=class extends Ti{constructor(){super(...arguments),this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?z:w`

            <aside ${Pe(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return w`
                        
                        <button 
                            class=${Yt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${L(E[e.name])}
                            
                        >
                            ${lu(e.icon)}
                        </button>
                        
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};Ms.styles=ye`

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

    `;Ko([ge({context:pa,subscribe:!0}),P()],Ms.prototype,"value",2);Ko([ge({context:fa,subscribe:!0}),P()],Ms.prototype,"tools",2);Ms=Ko([oe("group-tool-bar")],Ms);var xv=Object.defineProperty,rn=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&xv(e,t,s),s};class Ct extends Ti{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}rn([ge({context:ga,subscribe:!0}),P()],Ct.prototype,"parentFileProviderElement");rn([ge({context:eu,subscribe:!0}),P()],Ct.prototype,"loading");rn([ge({context:Ho,subscribe:!0}),P()],Ct.prototype,"file");rn([ge({context:Jc,subscribe:!0}),P()],Ct.prototype,"failure");rn([ge({context:Yo,subscribe:!0}),P()],Ct.prototype,"recording");var Sv=Object.defineProperty,$v=Object.getOwnPropertyDescriptor,_v=(r,e,t,i)=>{for(var s=i>1?void 0:i?$v(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sv(e,t,s),s};let yo=class extends Ct{constructor(){super(...arguments),this.container=fe()}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(r){const e=this.getContainer();if(e!==void 0)r.mountToDom(e),r.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(r){var e;if(super.updated(r),r.has("file")){const t=r.get("file"),i=this.file;t===void 0&&i!==void 0&&this.container.value&&this.file&&((e=this.file.dom)==null?void 0:e.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return w`
            <div ${Pe(this.container)} class=${Yt(t)} part="file-canvas-container">
            
                ${this.loading===!0?w`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:r===!0?w`<div class="error-wrapper">
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
                        </div>`:z}
            
            </div>

            <slot name="tour"></slot>
        
        `}};yo.styles=ye`

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
    `;yo=_v([oe("file-canvas")],yo);var Cv=Object.defineProperty,kv=Object.getOwnPropertyDescriptor,Pv=(r,e,t,i)=>{for(var s=i>1?void 0:i?kv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cv(e,t,s),s};let vo=class extends Ct{onInstanceCreated(r){}onFailure(r){}render(){return this.file?w`
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
        `:z}};vo.styles=ye`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;vo=Pv([oe("file-share-button")],vo);var Av=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,Ov=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ev(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Av(e,t,s),s};let bo=class extends Ct{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?w`
            <thermal-dialog label=${L(E.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${L(E.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${Ut(this.renderRow(L(E.thermalfilename),this.file.fileName))}

                        ${Ut(this.renderDownloadRow(L(E.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,L(E.thermalfiledownload)))}

                        ${this.file.visibleUrl?Ut(this.renderDownloadRow(L(E.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,L(E.visiblefiledownload))):z}

                        ${Ut(this.renderRow(L(E.time),nt.human(this.file.timestamp)))}

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
                        <td><ul>${this.file.reader.parser.devices.map(r=>w`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:z}};bo.styles=ye`

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
    
    `;bo=Ov([oe("file-info-button")],bo);var Lv=Object.defineProperty,Rv=Object.getOwnPropertyDescriptor,Dv=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lv(e,t,s),s};let wo=class extends Ct{constructor(){super(...arguments),this.tourableElementRef=fe()}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?z:w`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${Pe(this.tourableElementRef)}>
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

                    ${this.file.timeline.isSequence?w`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${L(E.convertentiresequencetovideo)}</thermal-button>
                        </div>`:z}
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `}};wo.styles=ye`

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
    
    `;wo=Dv([oe("file-download-dropdown")],wo);var Tv=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,hr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Iv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tv(e,t,s),s};let It=class extends Ct{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=fe(),this.barRef=fe(),this.containerRef=fe(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.hasSpeedButton=!0,this.markers=[],this.collapsed=!1}getTourableRoot(){return this.containerRef.value}onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<It.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}handleBarHover(r){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(t)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,o;const r=this.file;if(r===void 0)return z;if(r.duration===0)return z;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return w`
            <div class="${Yt(e)}" ${Pe(this.containerRef)}>


                ${r!==void 0?w`
                        <div class="container">

                            ${this.hasPlayButton===!0?w`

                                    <div class="${Yt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                    ${this.playing?w`
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                        </svg>
                                        `:w`
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                        </svg>
                                        `}

                                </div>

                                `:z}

                            


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>


                            <div class="${Yt(s)}"  ${Pe(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Pe(this.barRef)}></div>
                                    ${this.cursor?w`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(l=>w`<file-marker-timeline start=${l.fromMs} end=${l.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            ${this.hasSpeedButton===!0?w`<file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>`:z}

                            
                        </div>
                    `:z}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?w`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${L(E.date)}:</span> 
                            <span class="inline">${at(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${L(E.time)}:</span> 
                            <span class="inline">${at(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${L(E.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(o=this.file)==null?void 0:o.frameCount}</span>
                        </div>
                    </div>`:z}

            <slot name="tour"></slot>

          `}};It.collapseWidth=500;It.styles=ye`
    
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
    
    `;hr([ge({context:ya,subscribe:!0}),P()],It.prototype,"playing",2);hr([ge({context:Js,subscribe:!0}),P()],It.prototype,"currentFrame",2);hr([ge({context:Go,subscribe:!0}),P()],It.prototype,"duration",2);hr([ge({context:ru,subscribe:!0}),P()],It.prototype,"mayStop",2);hr([ge({context:Wo,subscribe:!0})],It.prototype,"cursor",2);hr([ge({context:tu,subscribe:!0})],It.prototype,"cursorSetter",2);hr([g({type:String,reflect:!0})],It.prototype,"hasPlayButton",2);hr([g({type:String,reflect:!0})],It.prototype,"hasInfo",2);hr([g({type:String,reflect:!0})],It.prototype,"interactive",2);hr([g({type:String,reflect:!0})],It.prototype,"hasSpeedButton",2);hr([ge({context:qo,subscribe:!0})],It.prototype,"markers",2);hr([P()],It.prototype,"collapsed",2);It=hr([oe("file-timeline")],It);var Mv=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,Zo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mv(e,t,s),s};let Us=class extends Ct{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?z:w`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(yc).map(([r])=>w`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof Kr&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Us.styles=ye`

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
    
    `;Zo([g({type:String,reflect:!0})],Us.prototype,"enabled",2);Zo([ge({context:Vo,subscribe:!0}),P()],Us.prototype,"playbackSpeed",2);Us=Zo([oe("file-playback-speed-dropdown")],Us);var Fv=Object.defineProperty,zv=Object.getOwnPropertyDescriptor,Qo=(r,e,t,i)=>{for(var s=i>1?void 0:i?zv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fv(e,t,s),s};let Fs=class extends Ct{constructor(){super(...arguments),this.container=fe()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return w`
            <div class="container">
            
                <video ${Pe(this.container)} preload="metadata">

                    ${this.url===void 0?z:w`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Fs.styles=ye`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Qo([ge({context:Js,subscribe:!0}),P()],Fs.prototype,"currentFrame",2);Qo([g({type:String,reflect:!0,attribute:!0})],Fs.prototype,"url",2);Fs=Qo([oe("file-video")],Fs);const Nv=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),at(t,"mm:ss:SSS")},jv=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var Bv=Object.defineProperty,Hv=Object.getOwnPropertyDescriptor,Fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bv(e,t,s),s};const Jo={fromAttribute:r=>r===null?null:jv(r),toAttribute:r=>r===null?null:Nv(r)};let Cr=class extends Ct{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return z}};Fr([ge({context:ya,subscribe:!0}),P()],Cr.prototype,"playing",2);Fr([ge({context:ma,subscribe:!0}),P()],Cr.prototype,"ms",2);Fr([g({type:String,reflect:!0,attribute:!0})],Cr.prototype,"label",2);Fr([g({type:String,reflect:!0,attribute:!0,converter:Jo})],Cr.prototype,"start",2);Fr([g({type:String,reflect:!0,attribute:!0,converter:Jo})],Cr.prototype,"end",2);Fr([g({type:String,reflect:!0,attribute:!0,converter:Jo})],Cr.prototype,"dur",2);Fr([g({type:String,reflect:!0,attribute:!0})],Cr.prototype,"active",2);Fr([g({type:String,reflect:!0,attribute:!0})],Cr.prototype,"pauseOnActivate",2);Fr([g({type:String,reflect:!0,attribute:!0})],Cr.prototype,"say",2);Cr=Fr([oe("file-marker")],Cr);var Wv=Object.defineProperty,Gv=Object.getOwnPropertyDescriptor,Ui=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wv(e,t,s),s};let Qr=class extends Ct{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return w`

            <div class="${Yt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Qr.styles=ye`
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


    `;Ui([ge({context:Go,subscribe:!0}),P()],Qr.prototype,"duration",2);Ui([ge({context:Js,subscribe:!0}),P()],Qr.prototype,"currentFrame",2);Ui([ge({context:ma,subscribe:!0}),P()],Qr.prototype,"ms",2);Ui([g({type:Number,reflect:!0,attribute:!0})],Qr.prototype,"start",2);Ui([g({type:Number,reflect:!0,attribute:!0})],Qr.prototype,"end",2);Ui([P()],Qr.prototype,"active",2);Qr=Ui([oe("file-marker-timeline")],Qr);var Vv=Object.defineProperty,Yv=Object.getOwnPropertyDescriptor,hu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vv(e,t,s),s};let Kn=class extends Ct{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return w`
            <div>


            ${this.markers.map(r=>r.active?w`<div class="item">
                    <h2>${r.label}</h2>
                    ${Ut(r.innerHTML)}
                    </div>`:z)}

            
            
            </div>

          `}};Kn.styles=ye`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;hu([ge({context:qo,subscribe:!0})],Kn.prototype,"markers",2);Kn=hu([oe("file-marks-content")],Kn);var qv=Object.defineProperty,Xv=Object.getOwnPropertyDescriptor,el=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qv(e,t,s),s};let zs=class extends Pt{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return w`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};zs.styles=ye`

    
    `;el([g()],zs.prototype,"analysis",2);el([P()],zs.prototype,"name",2);zs=el([oe("analysis-name")],zs);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Kv(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Zv=Object.defineProperty,Qv=Object.getOwnPropertyDescriptor,tl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zv(e,t,s),s};let Ns=class extends Pt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return w`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?z:w`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Kv(En,r=>w`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Ns.styles=ye`

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
    
    `;tl([g()],Ns.prototype,"analysis",2);tl([P()],Ns.prototype,"color",2);Ns=tl([oe("analysis-color")],Ns);var Jv=Object.defineProperty,eb=Object.getOwnPropertyDescriptor,vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?eb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jv(e,t,s),s};let Kt=class extends Pt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return w`

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
    
        
        `}};Kt.styles=ye`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;vr([g()],Kt.prototype,"analysis",2);vr([P()],Kt.prototype,"color",2);vr([P()],Kt.prototype,"top",2);vr([P()],Kt.prototype,"left",2);vr([P()],Kt.prototype,"width",2);vr([P()],Kt.prototype,"height",2);vr([P()],Kt.prototype,"type",2);vr([P()],Kt.prototype,"right",2);vr([P()],Kt.prototype,"bottom",2);vr([P()],Kt.prototype,"maxX",2);vr([P()],Kt.prototype,"maxY",2);Kt=vr([oe("edit-area")],Kt);var tb=Object.defineProperty,rb=Object.getOwnPropertyDescriptor,us=(r,e,t,i)=>{for(var s=i>1?void 0:i?rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tb(e,t,s),s};let gi=class extends Pt{constructor(){super(...arguments),this.topInputRef=fe(),this.leftInputRef=fe()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return w`

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
        
        `}};gi.styles=ye`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;us([g()],gi.prototype,"analysis",2);us([P()],gi.prototype,"top",2);us([P()],gi.prototype,"left",2);us([P()],gi.prototype,"maxX",2);us([P()],gi.prototype,"maxY",2);gi=us([oe("edit-point")],gi);var ib=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,wa=(r,e,t,i)=>{for(var s=i>1?void 0:i?sb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ib(e,t,s),s};let js=class extends Pt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return w`

            <thermal-dialog label="${L(E.editsth,{what:L(E[this.type])})}">

                <thermal-button slot="invoker">${L(E.edit)}</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof pr?w`<edit-point .analysis=${this.analysis}></edit-point>`:w`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};wa([g()],js.prototype,"analysis",2);wa([P()],js.prototype,"name",2);wa([P()],js.prototype,"type",2);js=wa([oe("file-analysis-edit")],js);var nb=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,cr=(r,e,t,i)=>{for(var s=i>1?void 0:i?ab(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nb(e,t,s),s};let Nt=class extends Ct{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=fe(),this.graphRef=fe(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return w`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&w`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&w`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${Pe(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?w`<thermal-chart 
                        ${Pe(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:z}
            </div>

            

            </div>
        
        `}};Nt.styles=ye`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;cr([P()],Nt.prototype,"hydrated",2);cr([g({reflect:!0})],Nt.prototype,"graphWidth",2);cr([g({reflect:!0})],Nt.prototype,"graphHeight",2);cr([P()],Nt.prototype,"graphs",2);cr([ge({context:Js,subscribe:!0})],Nt.prototype,"currentFrame",2);cr([ge({context:Wo,subscribe:!0})],Nt.prototype,"cursor",2);cr([ge({context:tu,subscribe:!0})],Nt.prototype,"cursorSetter",2);cr([P()],Nt.prototype,"shadowLeft",2);cr([P()],Nt.prototype,"shadowTop",2);cr([P()],Nt.prototype,"shadowWidth",2);cr([P()],Nt.prototype,"shadowHeight",2);cr([ge({context:ca,subscribe:!0})],Nt.prototype,"graphSmooth",2);Nt=cr([oe("file-analysis-graph")],Nt);const ds="interactive-analysis-context";var ob=Object.defineProperty,lb=Object.getOwnPropertyDescriptor,zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?lb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ob(e,t,s),s};let gr=class extends Pt{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof xr?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof pr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return w`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?w`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"};"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

            </td>
        `}render(){return w`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
            @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
        >
            ${this.interactiveanalysis===!0?w`<u aria-hidden="true"></u>`:z}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?w`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${L(E.remove)}</thermal-button>
        </td>`:z}
        
        `}};gr.styles=ye`
    
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

    `;zr([g()],gr.prototype,"analysis",2);zr([ge({context:ds,subscribe:!0})],gr.prototype,"interactiveanalysis",2);zr([P()],gr.prototype,"value",2);zr([P()],gr.prototype,"graph",2);zr([P()],gr.prototype,"may",2);zr([P()],gr.prototype,"dimension",2);zr([P()],gr.prototype,"color",2);zr([g({type:Boolean,reflect:!0,attribute:!0})],gr.prototype,"selected",2);zr([P()],gr.prototype,"name",2);gr=zr([oe("file-analysis-table-row")],gr);var hb=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,sn=(r,e,t,i)=>{for(var s=i>1?void 0:i?cb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hb(e,t,s),s};let Li=class extends Ct{constructor(){super(...arguments),this.container=fe(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?z:w`

        <div class="overflow" ${Pe(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?w`<u aria-hidden="true"></u>`:z}
                            <span>${L(E.analysis)}</span>
                            ${this.hasHighlightedData?w`<button @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${L(E.downloadgraphdataascsv)}>CSV</button>`:z}
                        </th>
                        <th>${L(E.avg)}</th>
                        <th>${L(E.min)}</th>
                        <th>${L(E.max)}</th>
                        <th>${L(E.size)}</th>
                        ${this.interactiveanalysis===!0?w`<th></th>`:z}
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(r=>w`
                            <file-analysis-table-row
                                .analysis=${r}
                            ></file-analysis-table-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};Li.styles=ye`
    
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

        



    `;sn([ge({context:ds,subscribe:!0})],Li.prototype,"interactiveanalysis",2);sn([P()],Li.prototype,"analysis",2);sn([P()],Li.prototype,"allSelected",2);sn([P()],Li.prototype,"hasHighlightedData",2);Li=sn([oe("file-analysis-table")],Li);const gt=r=>({fromAttribute:(i,s)=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:(i,s)=>i===!0?"true":"false"});var ub=Object.defineProperty,db=Object.getOwnPropertyDescriptor,Nr=(r,e,t,i)=>{for(var s=i>1?void 0:i?db(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ub(e,t,s),s};let mr=class extends Ct{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!1}getTourableRoot(){}onInstanceCreated(r){this.recorded=nt.human(r.timestamp)}onFailure(){}render(){return w`
        <thermal-app author=${be(this.author)} recorded=${be(this.recorded)} license=${be(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?w`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:z}
          
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

                  ${this.file&&this.file.timeline.isSequence?w` <thermal-field 
                    label="${L(E.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:z}

                  ${this.file&&this.file.timeline.isSequence?w` <thermal-field 
                    label="${L(E.graphlines)}"
                    hint=${L(E.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:z}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?w`<file-share-button ></file-share-button>`:z}
            
              ${this.showabout===!0?w`<app-info-button ></app-info-button>`:z}

            </thermal-bar>
          </div>
            ${this.interactiveanalysis===!0?w`<group-tool-buttons slot="pre"></group-tool-buttons>`:z}
            
            ${this.showhistogram===!0?w`<registry-histogram slot="pre"></registry-histogram>`:z}

            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?w`<file-analysis-graph slot="post"></file-analysis-graph>`:z}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};mr.styles=ye`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Nr([g({type:String,reflect:!0,attribute:!0,converter:gt(!1)})],mr.prototype,"showembed",2);Nr([g({type:String,reflect:!0,attribute:!0,converter:gt(!1)})],mr.prototype,"showabout",2);Nr([g({type:String,reflect:!0,attribute:!0,converter:gt(!1)})],mr.prototype,"showfullscreen",2);Nr([g({type:String,reflect:!0,converter:gt(!0)})],mr.prototype,"showhistogram",2);Nr([ge({context:ds,subscribe:!0})],mr.prototype,"interactiveanalysis",2);Nr([g()],mr.prototype,"author",2);Nr([g()],mr.prototype,"recorded",2);Nr([g()],mr.prototype,"license",2);Nr([g()],mr.prototype,"label",2);mr=Nr([oe("file-app")],mr);var pb=Object.defineProperty,Je=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&pb(e,t,s),s};class Ye extends Pt{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=fe()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}disconnectedCallback(){super.disconnectedCallback(),this.fileProviderRef.value&&this.fileProviderRef.value}}Je([g({type:String,reflect:!0})],Ye.prototype,"url");Je([g({type:String,reflect:!0})],Ye.prototype,"visible");Je([g({type:String,reflect:!0,attribute:!0})],Ye.prototype,"palette");Je([g({type:Number,reflect:!0,attribute:!0})],Ye.prototype,"opacity");Je([g({type:Number,reflect:!0})],Ye.prototype,"from");Je([g({type:Number,reflect:!0})],Ye.prototype,"to");Je([g()],Ye.prototype,"author");Je([g()],Ye.prototype,"recorded");Je([g()],Ye.prototype,"license");Je([g()],Ye.prototype,"label");Je([g({type:String,reflect:!1,attribute:!0,converter:gt(!1)})],Ye.prototype,"showembed");Je([g({type:String,reflect:!1,attribute:!0,converter:gt(!1)})],Ye.prototype,"showabout");Je([g({type:String,reflect:!1,attribute:!0,converter:gt(!1)})],Ye.prototype,"showtutorial");Je([g({type:String,reflect:!1,converter:gt(!0)})],Ye.prototype,"showfullscreen");Je([g({type:String,reflect:!0,converter:gt(!0)})],Ye.prototype,"showhistogram");Je([ue({context:ds}),g({type:String,reflect:!0,converter:gt(!0)})],Ye.prototype,"interactiveanalysis");Je([g({type:String,reflect:!0})],Ye.prototype,"analysis1");Je([g({type:String,reflect:!0})],Ye.prototype,"analysis2");Je([g({type:String,reflect:!0})],Ye.prototype,"analysis3");Je([g({type:String,reflect:!0})],Ye.prototype,"analysis4");Je([g({type:String,reflect:!0})],Ye.prototype,"analysis5");Je([g({type:String,reflect:!0})],Ye.prototype,"analysis6");Je([g({type:String,reflect:!0})],Ye.prototype,"analysis7");Je([g({type:String,reflect:!0})],Ye.prototype,"ms");Je([g({type:String,reflect:!0})],Ye.prototype,"speed");Je([g({type:String,reflect:!0})],Ye.prototype,"autoclear");Je([P()],Ye.prototype,"hasGraph");Je([P()],Ye.prototype,"hasAnalysis");Je([P()],Ye.prototype,"isSequence");var fb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,mb=(r,e,t,i)=>{for(var s=i>1?void 0:i?gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fb(e,t,s),s};let Lh=class extends Ye{render(){return this.url===""?z:w`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${be(this.from)}
        to=${be(this.to)}
        opacity=${be(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}" autoclear=${this.autoclear}>

          <file-provider 
            thermal="${this.url}" 
            visible=${be(this.visible)}
            analysis1=${be(this.analysis1)}
            analysis2=${be(this.analysis2)}
            analysis3=${be(this.analysis3)}
            analysis4=${be(this.analysis4)}
            analysis5=${be(this.analysis5)}
            analysis6=${be(this.analysis6)}
            analysis7=${be(this.analysis7)}
            speed=${be(this.speed)}
            autoclear=${this.autoclear}
          >

              <file-app 
                author=${be(this.author)} 
                recorded=${be(this.recorded)} 
                license=${be(this.license)}
                label=${be(this.label)}  
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


    
    `}};Lh=mb([oe("thermal-file-app")],Lh);class yb{constructor(e){this.steps=e,this.onStepInternalActivation=new ee}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class rl{constructor(e){this._active=!1,this.onTourActivationStatus=new ee,this.onStepActivation=new ee,this.storage=new yb(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new rl(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var vb=Object.defineProperty,bb=Object.getOwnPropertyDescriptor,Et=(r,e,t,i)=>{for(var s=i>1?void 0:i?bb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vb(e,t,s),s};let bt=class extends Ct{constructor(){super(),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.showtutorial=!1,this.interactiveanalysis=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=fe(),this.contentContainerWidth=1e3,this.tourController=rl.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.log("změnil se krok",r),this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=nt.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return w`
        <thermal-app author=${be(this.author)} recorded=${be(this.recorded)} license=${be(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar" tour="palette">
            <tour-step placement="right-start" label=${L(E.colourpalette)}>
              ${L(E.palettehint)}
            </tour-step>
          </registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?w`<registry-opacity-slider slot="bar" style="width:4rem" tour="opacity">
            <tour-step slot="tour" label="Visible image">
              Use the slider to show the visible image.
            </tour-step>
            </registry-opacity-slider>`:z}
          
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

                  ${this.file&&this.file.timeline.isSequence?w` <thermal-field 
                    label="${L(E.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:z}

                  ${this.file&&this.file.timeline.isSequence?w` <thermal-field 
                    label="${L(E.graphlines)}"
                    hint=${L(E.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:z}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown tour="download">
                <tour-step slot="tour" placement="left" label="Downloads">Zde si to stáhněte, vy volové</tour-step>
              </file-download-dropdown>
            
              ${this.showabout===!0?w`<app-info-button></app-info-button>`:z}

              ${this.showtutorial===!0?w`<thermal-button @click=${()=>this.tourController.activate(!1)}>
                ${L(E.tutorial)}
              </thermal-button>`:z}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${Pe(this.contentContainerRef)}>

                ${this.interactiveanalysis===!0?w`
                  <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?w`<group-tool-bar tour="tools">
                    <tour-step slot="tour" placement="right-top" label="Analysis tools">
                        Select a tool and draw an analysis on the IR image.
                    </tour-step>
                  </group-tool-bar>`:w`<group-tool-buttons tour="tools">
                    <tour-step slot="tour" placement="right-top">
                      Select a tool and draw an analysis on the IR image.
                    </tour-step>
        </group-tool-buttons>`}
                </div>
                `:z}

                <div class="content-container__part content-container__left">

                ${this.showhistogram===!0?w`<registry-histogram slot="pre"></registry-histogram>`:z}
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
                    ${this.hasAnalysis?w`<file-analysis-table></file-analysis-table>`:w`<div class="placeholder">
                        <div class="placeholder-title">${L(E.analysis)}</div>
                        <div>${L(E.analysishint)}</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?w`
                      <div>${L(E[(e=this.tool)==null?void 0:e.description])}</div>
                    `:w`
                      <div>
                        <thermal-button tourstepid="sth4" @click=${()=>this.group.tool.selectTool("add-point")}>${L(E.addpoint)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>${L(E.addrectangle)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>${L(E.addellipsis)}</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?w`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?w`<div class="placeholder">
                      <div class="placeholder-title">${L(E.graph)}</div>
                      <div>${this.hasAnalysis===!1?L(E.graphhint1):Ut(L(E.graphhint2))}</div>
                    </div>`:z}
                  
                  </div>
                  `:z}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};bt.styles=ye`


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
  
  `;Et([g({type:String,reflect:!0,attribute:!0,converter:gt(!1)})],bt.prototype,"showembed",2);Et([g({type:String,reflect:!0,attribute:!0,converter:gt(!1)})],bt.prototype,"showabout",2);Et([g({type:String,reflect:!0,attribute:!0,converter:gt(!1)})],bt.prototype,"showfullscreen",2);Et([g({type:Boolean,reflect:!0,converter:gt(!0)})],bt.prototype,"showhistogram",2);Et([g({type:String,reflect:!1,attribute:!0})],bt.prototype,"showtutorial",2);Et([ge({context:ds,subscribe:!0})],bt.prototype,"interactiveanalysis",2);Et([P()],bt.prototype,"hasAnalysis",2);Et([P()],bt.prototype,"hasGraph",2);Et([P()],bt.prototype,"tool",2);Et([P()],bt.prototype,"isSequence",2);Et([g()],bt.prototype,"author",2);Et([g()],bt.prototype,"recorded",2);Et([g()],bt.prototype,"license",2);Et([g()],bt.prototype,"label",2);Et([ue({context:Rc})],bt.prototype,"tourController",2);Et([ue({context:Dc})],bt.prototype,"tourStep",2);Et([P()],bt.prototype,"contentContainerWidth",2);bt=Et([oe("desktop-app")],bt);var wb=Object.defineProperty,xb=Object.getOwnPropertyDescriptor,Sb=(r,e,t,i)=>{for(var s=i>1?void 0:i?xb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wb(e,t,s),s};let Rh=class extends Ye{render(){return this.url===""?z:w`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${be(this.from)}
        to=${be(this.to)}
        opacity=${be(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${Pe(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${be(this.visible)}
            analysis1=${be(this.analysis1)}
            analysis2=${be(this.analysis2)}
            analysis3=${be(this.analysis3)}
            analysis4=${be(this.analysis4)}
            analysis5=${be(this.analysis5)}
            analysis6=${be(this.analysis6)}
            analysis7=${be(this.analysis7)}
            speed=${be(this.speed)}
            autoclear=${this.autoclear}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${be(this.author)} 
              recorded=${be(this.recorded)} 
              license=${be(this.license)}
              label=${be(this.label)}
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


    
    `}};Rh=Sb([oe("thermal-file-analyser")],Rh);var $b=Object.defineProperty,_b=Object.getOwnPropertyDescriptor,il=(r,e,t,i)=>{for(var s=i>1?void 0:i?_b(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$b(e,t,s),s};let Bs=class extends Pt{constructor(){super(...arguments),this.dropinRef=fe(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return w`

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

                            ${this.loaded===!0?w`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:z}

                            <file-dropin ${Pe(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};Bs.styles=ye`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;il([P()],Bs.prototype,"dropinRef",2);il([P()],Bs.prototype,"loaded",2);Bs=il([oe("thermal-dropin-app")],Bs);var Cb=Object.defineProperty,kb=Object.getOwnPropertyDescriptor,Pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cb(e,t,s),s};let ar=class extends Pt{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return w`

            ${e?w`<h3 class="row-title">${e}</h3>`:z}

            ${t?w`<p>${t}</p>`:z}

            <section class=${Yt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>w`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};ar.styles=ye`

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

    `;Pr([g()],ar.prototype,"columns",2);Pr([g()],ar.prototype,"breakpoint",2);Pr([g({type:Object})],ar.prototype,"files",2);Pr([g({type:String})],ar.prototype,"label",2);Pr([g({type:String})],ar.prototype,"info",2);Pr([g({type:Number})],ar.prototype,"from",2);Pr([g({type:Number})],ar.prototype,"to",2);Pr([g({type:Number})],ar.prototype,"cursor",2);Pr([g({type:String})],ar.prototype,"grouping",2);Pr([P()],ar.prototype,"collapsed",2);ar=Pr([oe("time-group-row")],ar);var Pb=Object.defineProperty,bi=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Pb(e,t,s),s},St;const Jr=(St=class extends Pt{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.instanceRenderer=new Qi(this),this.groupRenderer=new Ts(this)}parseFilesProperty(e){return e.split(St.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(St.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(St.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[u,d]=h,p=u.trim(),b=d.trim();switch(p){case St.FILE_THERMAL_KEY:s=b;break;case St.FILE_VISIBLE_KEY:n=b;break;case St.FILE_LABEL_KEY:a=b;break;case St.FILE_NOTE_KEY:o=b;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},St.styles=[Qi.styles,Ts.styles,ye`
    
        `],St.FILE_RECORD_SEPARATOR=";",St.FILE_SEGMENT_SEPAROATOR="|",St.FILE_COMPONENT_SEPAROATOR="~",St.FILE_THERMAL_KEY="thermal",St.FILE_VISIBLE_KEY="visible",St.FILE_LABEL_KEY="label",St.FILE_NOTE_KEY="note",St);bi([P()],Jr.prototype,"highlightFrom");bi([P()],Jr.prototype,"highlightTo");bi([g({type:String,reflect:!1,attribute:!0,converter:gt(!1)})],Jr.prototype,"showembed");bi([g({type:String,reflect:!1,attribute:!0,converter:gt(!1)})],Jr.prototype,"showabout");bi([g({type:String,reflect:!1,attribute:!0,converter:gt(!1)})],Jr.prototype,"showtutorial");bi([g({type:String,reflect:!1,converter:gt(!0)})],Jr.prototype,"showfullscreen");bi([g({type:String,reflect:!0,converter:gt(!0)})],Jr.prototype,"showhistogram");bi([ue({context:ds}),g({type:String,reflect:!0,converter:gt(!0)})],Jr.prototype,"interactiveanalysis");let sl=Jr;class Ab{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Yr)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{console.log("hotovost...",this.records),this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Yr)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?nc(e).getTime():this.grouping==="day"?Fn(e).getTime():this.grouping==="week"?Vr(e).getTime():this.grouping==="month"?Nn(e).getTime():this.grouping==="year"?ko(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?rc(e).getTime():this.grouping==="day"?ec(e).getTime():this.grouping==="week"?jn(e).getTime():this.grouping==="month"?zn(e).getTime():this.grouping==="year"?tc(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:at(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:at(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+at(e,"w")+" of "+at(e,"yyyy"),info:[nt.humanDate(Vr(e).getTime()),nt.humanDate(jn(e).getTime())].join(" - ")}:this.grouping==="month"?{label:at(e,"MMMM yyyy"),info:[nt.humanDate(Nn(e).getTime()),nt.humanDate(zn(e).getTime())].join(" - ")}:this.grouping==="year"?{label:at(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?nt.human(e):this.grouping==="hour"||this.grouping==="day"?at(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",nt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var Eb=Object.defineProperty,Ob=Object.getOwnPropertyDescriptor,lt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ob(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Eb(e,t,s),s};let it=class extends sl{constructor(){super(...arguments),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new ee,this.onColumns=new ee,this.preservetime=!0}connectedCallback(){super.connectedCallback();const t=ha(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);this.group=t,this.grouper=new Ab(this,t),this.onGroupInit.call(this.group)}firstUpdated(r){super.firstUpdated(r),this.log(this.palette,this.group.registry.manager.id),this.group.registry.palette.addListener(this.UUID+"paleta",console.log),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to});const e=this.files?this.parseFilesProperty(this.files):[];e.length>0?this.grouper.processParsedFiles(e):this.grouper.processEntries(this.entries.filter(t=>t instanceof Zr))}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&this.files&&r.get("files")!==void 0){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}render(){return w`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}">

                    <group-provider slug="${this.slug}">

                        <thermal-app
                            author=${be(this.author)}
                            license=${be(this.license)}
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
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${L(E.columns,{num:this.columns})}</div>
                                    </div>

                                    ${this.grouper.numFiles>0?w`
                                            <thermal-dropdown class="download">

                                                <span slot="invoker">${L(E.download)}</span>

                                                <div slot="option">
                                                    <thermal-button @click=${()=>this.grouper.group.files.downloadAllFiles()}>${L(E.downloadoriginalfiles)}</thermal-button>
                                                    <small>${L(E.downloadoriginalfileshint)}</small>
                                                </div>

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
                                        `:z}

                                ${this.showabout===!0?w`<app-info-button ></app-info-button>`:z}

                                </thermal-bar>

                            </div>


                            ${this.showhistogram===!0?w`<registry-histogram></registry-histogram>`:z}

                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar highlightFrom=${be(this.highlightFrom)} highlightTo=${be(this.highlightTo)}></registry-ticks-bar>

                            ${this.interactiveanalysis===!0?w`<group-tool-buttons></group-tool-buttons>`:z}

                            <div class="app-content">

                                    <slot></slot>


                                    ${this.groups.map(r=>this.groupRenderer.renderGroup(r,this.columns,this.grouping,e=>{this.highlightFrom=e.min,this.highlightTo=e.max},()=>{this.highlightFrom=void 0,this.highlightTo=void 0},this.preservetime))}


                                
                            
                            </div>

                            <group-timeline></group-timeline>

                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};it.styles=[sl.styles,ye`


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


    
    `];lt([g({type:String,reflect:!0,attribute:!0})],it.prototype,"palette",2);lt([g({type:Number,reflect:!0})],it.prototype,"from",2);lt([g({type:Number,reflect:!0})],it.prototype,"to",2);lt([g({type:String,reflect:!0})],it.prototype,"author",2);lt([g({type:String,reflect:!0})],it.prototype,"label",2);lt([g({type:String,reflect:!1})],it.prototype,"description",2);lt([g({type:String,reflect:!0})],it.prototype,"license",2);lt([P(),yi({slot:"entry",flatten:!0})],it.prototype,"entries",2);lt([g({type:String,reflect:!0})],it.prototype,"slug",2);lt([g()],it.prototype,"columns",2);lt([g()],it.prototype,"breakpoint",2);lt([g({type:String,reflect:!0})],it.prototype,"grouping",2);lt([P()],it.prototype,"groups",2);lt([g({type:String})],it.prototype,"files",2);lt([g({type:String,reflect:!0})],it.prototype,"analysis1",2);lt([g({type:String,reflect:!0})],it.prototype,"analysis2",2);lt([g({type:String,reflect:!0})],it.prototype,"analysis3",2);lt([g({type:String,reflect:!0})],it.prototype,"analysis4",2);lt([g({type:String,reflect:!0})],it.prototype,"analysis5",2);lt([g({type:String,reflect:!0})],it.prototype,"analysis6",2);lt([g({type:String,reflect:!0})],it.prototype,"analysis7",2);lt([g({type:String,reflect:!0,converter:gt(!1)})],it.prototype,"preservetime",2);it=lt([oe("thermal-group-app")],it);var Lb=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,ps=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lb(e,t,s),s};let mi=class extends Ti{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.timelineRef=fe(),this.indicatorRef=fe()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,r=>{this.onRegistryBatchEnded(r)}),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof Yr?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,this.timelineRef.value&&this.timelineRef.value.addEventListener("click",t=>{const i=t.layerX,n=t.target.clientWidth,a=i/n*100,o=this.percentToMs(a);o&&(this.ms=o)})}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}render(){return this.has===!1?z:w`<div>

            <div 
                class="timeline" 
                @click=${r=>{const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}}
            >
                <div class="background"></div>
                <div class="indicator" ${Pe(this.indicatorRef)}></div>
            </div>

            <thermal-button @click=${()=>this.handlePlayButtonClick()}>
                ${this.playing===!0?"Stop":"Play"}
            </thermal-button>
        </div>`}};mi.styles=ye`

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

    
    `;ps([P()],mi.prototype,"longestDurationInMs",2);ps([P()],mi.prototype,"ms",2);ps([P()],mi.prototype,"playing",2);ps([P()],mi.prototype,"instances",2);ps([P()],mi.prototype,"has",2);mi=ps([oe("group-timeline")],mi);var Db=Object.defineProperty,Tb=Object.getOwnPropertyDescriptor,br=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Db(e,t,s),s};let Zt=class extends sl{constructor(){super(...arguments),this.registryProviderRef=fe(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=ha(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof Dt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return w`
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
                    <registry-ticks-bar highlightFrom=${be(this.highlightFrom)} highlightTo=${be(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};Zt.styles=ye`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;br([g({type:String,reflect:!0,attribute:!0})],Zt.prototype,"palette",2);br([g({type:Number,reflect:!0})],Zt.prototype,"from",2);br([g({type:Number,reflect:!0})],Zt.prototype,"to",2);br([g()],Zt.prototype,"slug",2);br([g({type:String,reflect:!0})],Zt.prototype,"grouping",2);br([g({type:String,reflect:!0})],Zt.prototype,"columns",2);br([g({type:Number,reflect:!0})],Zt.prototype,"breakpoint",2);br([g({type:String,reflect:!0})],Zt.prototype,"groups",2);br([g({type:String,reflect:!0})],Zt.prototype,"autogroups",2);br([yi({flatten:!0}),P()],Zt.prototype,"entries",2);br([P()],Zt.prototype,"registry",2);Zt=br([oe("thermal-registry-app")],Zt);var Ib=Object.defineProperty,Mb=Object.getOwnPropertyDescriptor,ei=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ib(e,t,s),s};let kr=class extends Pt{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=fe()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await qc(this.elementContext.element.getTourableRoot(),this,{middleware:[Yc(20),Vm({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return w`<div class=${Yt(r)}>

            <div id="arrow" ${this.arrowRef} class="arrow" style="position:absolute;"></div>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${()=>{var n;return(n=this.tour)==null?void 0:n.deactivate()}}>X</button> 
            </div>
            <div class="content">
                
                <slot></slot>

                ${this.youtube?w`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:z}

            </div>

            <div class="buttons">

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?w`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${L(E.back)}</thermal-button>`:z} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?w`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${L(E.next)}</thermal-button>`:z}          
            
            </div>

            

        </div>
        `}};kr.styles=ye`

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
    
    `;ei([g({type:String})],kr.prototype,"label",2);ei([P()],kr.prototype,"active",2);ei([g({type:String,reflect:!0})],kr.prototype,"displayed",2);ei([g({type:String})],kr.prototype,"placement",2);ei([ge({context:Rc,subscribe:!0})],kr.prototype,"tour",2);ei([ge({context:Dc,subscribe:!0})],kr.prototype,"definition",2);ei([ge({context:Tc,subscribe:!0})],kr.prototype,"elementContext",2);ei([g({type:String})],kr.prototype,"youtube",2);kr=ei([oe("tour-step")],kr);const so=window.matchMedia("(prefers-color-scheme: dark)"),nl="thermal-dark-mode",Dh=()=>{document.body.classList.add(nl)},Ub=()=>{document.body.classList.remove(nl)},Fb=()=>{so.matches&&Dh();const r=e=>{e.matches?Dh():Ub()};so.addEventListener("change",r),so.addListener(r)},zb=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)},Nb=xo.toString().replaceAll(".","-"),jb=r=>`thermal__${r}__${Nb}`,Th=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",jb(r)),t.innerHTML=e,document.head.appendChild(t)},Bb=()=>{Th("rootVariables",`

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


            
        
        `),Th("darkModeOverrides",`
        
            body.${nl} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};zb();console.info(`@labir/embed ${xo}
Author: ${Du}`);Fb();Bb();
