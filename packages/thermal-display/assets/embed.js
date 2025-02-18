var Gd=Object.defineProperty;var Yd=(r,e,t)=>e in r?Gd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(Yd(r,typeof e!="symbol"?e+"":e,t),t);const zc="1.2.64",qd="Jan Jáchim <jachim5@gmail.com>",Oe=r=>typeof r=="string",js=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},Oh=r=>r==null?"":""+r,Xd=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},Kd=/###/g,Ah=r=>r&&r.indexOf("###")>-1?r.replace(Kd,"."):r,Eh=r=>!r||Oe(r),Bs=(r,e,t)=>{const i=Oe(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(Eh(r))return{};const n=Ah(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return Eh(r)?{}:{obj:r,k:Ah(i[s])}},Lh=(r,e,t)=>{const{obj:i,k:s}=Bs(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=Bs(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=Bs(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},Jd=(r,e,t,i)=>{const{obj:s,k:n}=Bs(r,e,Object);s[n]=s[n]||[],s[n].push(t)},sa=(r,e)=>{const{obj:t,k:i}=Bs(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},Zd=(r,e,t)=>{const i=sa(r,t);return i!==void 0?i:sa(e,t)},Fc=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?Oe(r[i])||r[i]instanceof String||Oe(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):Fc(r[i],e[i],t):r[i]=e[i]);return r},cs=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Qd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ep=r=>Oe(r)?r.replace(/[&<>"'\/]/g,e=>Qd[e]):r;class tp{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const rp=[" ",",","?","!",";"],ip=new tp(20),sp=(r,e,t)=>{e=e||"",t=t||"";const i=rp.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=ip.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},Bo=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},na=r=>r==null?void 0:r.replace("_","-"),np={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class aa{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||np,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(Oe(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new aa(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new aa(this.logger,e)}}var Xr=new aa;class Ca{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class Dh extends Ca{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,u;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):Oe(i)&&n?o.push(...i.split(n)):o.push(i)));const l=sa(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!Oe(i)?l:Bo((u=(h=this.data)==null?void 0:h[e])==null?void 0:u[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),Lh(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(Oe(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=sa(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?Fc(l,i,n):l={...l,...i},Lh(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var jc={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const Rh={},Mh=r=>!Oe(r)&&typeof r!="boolean"&&typeof r!="number";class oa extends Ca{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Xd(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Xr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!sp(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Oe(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:Oe(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(u){const j=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${j}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${j}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const p=this.resolve(e,t);let f=p==null?void 0:p.res;const b=(p==null?void 0:p.usedKey)||a,w=(p==null?void 0:p.exactUsedKey)||a,C=["[object Number]","[object Function]","[object RegExp]"],P=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,B=!this.i18nFormat||this.i18nFormat.handleAsObject,A=t.count!==void 0&&!Oe(t.count),R=oa.hasDefaultValue(t),Y=A?this.pluralResolver.getSuffix(h,t.count,t):"",F=t.ordinal&&A?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",ie=A&&!t.ordinal&&t.count===0,$=ie&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${Y}`]||t[`defaultValue${F}`]||t.defaultValue;let E=f;B&&!f&&R&&(E=$);const I=Mh(E),M=Object.prototype.toString.apply(E);if(B&&E&&I&&C.indexOf(M)<0&&!(Oe(P)&&Array.isArray(E))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const j=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,E,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(p.res=j,p.usedParams=this.getUsedParamsDetails(t),p):j}if(n){const j=Array.isArray(E),T=j?[]:{},z=j?w:b;for(const D in E)if(Object.prototype.hasOwnProperty.call(E,D)){const q=`${z}${n}${D}`;R&&!f?T[D]=this.translate(q,{...t,defaultValue:Mh($)?$[D]:void 0,joinArrays:!1,ns:o}):T[D]=this.translate(q,{...t,joinArrays:!1,ns:o}),T[D]===q&&(T[D]=E[D])}f=T}}else if(B&&Oe(P)&&Array.isArray(f))f=f.join(P),f&&(f=this.extendTranslation(f,e,t,i));else{let j=!1,T=!1;!this.isValidLookup(f)&&R&&(j=!0,f=$),this.isValidLookup(f)||(T=!0,f=a);const D=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&T?void 0:f,q=R&&$!==f&&this.options.updateMissing;if(T||j||q){if(this.logger.log(q?"updateKey":"missingKey",h,l,a,q?$:f),n){const ue=this.resolve(a,{...t,keySeparator:!1});ue&&ue.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let he=[];const k=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&k&&k[0])for(let ue=0;ue<k.length;ue++)he.push(k[ue]);else this.options.saveMissingTo==="all"?he=this.languageUtils.toResolveHierarchy(t.lng||this.language):he.push(t.lng||this.language);const V=(ue,se,Le)=>{var at;const qe=R&&Le!==f?Le:D;this.options.missingKeyHandler?this.options.missingKeyHandler(ue,l,se,qe,q,t):(at=this.backendConnector)!=null&&at.saveMissing&&this.backendConnector.saveMissing(ue,l,se,qe,q,t),this.emit("missingKey",ue,l,se,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?he.forEach(ue=>{const se=this.pluralResolver.getSuffixes(ue,t);ie&&t[`defaultValue${this.options.pluralSeparator}zero`]&&se.indexOf(`${this.options.pluralSeparator}zero`)<0&&se.push(`${this.options.pluralSeparator}zero`),se.forEach(Le=>{V([ue],a+Le,t[`defaultValue${Le}`]||$)})}):V(he,a,$))}f=this.extendTranslation(f,e,t,p,i),T&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(T||j)&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,j?f:void 0))}return s?(p.res=f,p.usedParams=this.getUsedParamsDetails(t),p):f}extendTranslation(e,t,i,s,n){var h,u;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const p=Oe(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(p){const w=e.match(this.interpolator.nestingRegexp);f=w&&w.length}let b=i.replace&&!Oe(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),e=this.interpolator.interpolate(e,b,i.lng||this.language||s.usedLng,i),p){const w=e.match(this.interpolator.nestingRegexp),C=w&&w.length;f<C&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var w=arguments.length,C=new Array(w),P=0;P<w;P++)C[P]=arguments[P];return(n==null?void 0:n[0])===C[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${C[0]} in key: ${t[0]}`),null):a.translate(...C,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=Oe(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=jc.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return Oe(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),u=h.key;s=u;let p=h.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const f=t.count!==void 0&&!Oe(t.count),b=f&&!t.ordinal&&t.count===0,w=t.context!==void 0&&(Oe(t.context)||typeof t.context=="number")&&t.context!=="",C=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);p.forEach(P=>{var B,A;this.isValidLookup(i)||(o=P,!Rh[`${C[0]}-${P}`]&&((B=this.utils)!=null&&B.hasLoadedNamespace)&&!((A=this.utils)!=null&&A.hasLoadedNamespace(o))&&(Rh[`${C[0]}-${P}`]=!0,this.logger.warn(`key "${s}" for languages "${C.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),C.forEach(R=>{var ie;if(this.isValidLookup(i))return;a=R;const Y=[u];if((ie=this.i18nFormat)!=null&&ie.addLookupKeys)this.i18nFormat.addLookupKeys(Y,u,R,P,t);else{let $;f&&($=this.pluralResolver.getSuffix(R,t.count,t));const E=`${this.options.pluralSeparator}zero`,I=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(Y.push(u+$),t.ordinal&&$.indexOf(I)===0&&Y.push(u+$.replace(I,this.options.pluralSeparator)),b&&Y.push(u+E)),w){const M=`${u}${this.options.contextSeparator}${t.context}`;Y.push(M),f&&(Y.push(M+$),t.ordinal&&$.indexOf(I)===0&&Y.push(M+$.replace(I,this.options.pluralSeparator)),b&&Y.push(M+E))}}let F;for(;F=Y.pop();)this.isValidLookup(i)||(n=F,i=this.getResource(R,P,F,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Oe(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class Th{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Xr.create("languageUtils")}getScriptPartFromCode(e){if(e=na(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=na(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Oe(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Oe(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Oe(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):Oe(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const Ih={zero:0,one:1,two:2,few:3,many:4,other:5},Uh={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class ap{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Xr.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=na(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Uh;if(!e.match(/-|_/))return Uh;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>Ih[s]-Ih[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const zh=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=Zd(r,e,t);return!n&&s&&Oe(t)&&(n=Bo(r,t,i),n===void 0&&(n=Bo(e,t,i))),n},Lo=r=>r.replace(/\$/g,"$$$$");class op{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Xr.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:u,unescapePrefix:p,nestingPrefix:f,nestingPrefixEscaped:b,nestingSuffix:w,nestingSuffixEscaped:C,nestingOptionsSeparator:P,maxReplaces:B,alwaysFormat:A}=e.interpolation;this.escape=t!==void 0?t:ep,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?cs(n):a||"{{",this.suffix=o?cs(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=u?"":p||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=f?cs(f):b||cs("$t("),this.nestingSuffix=w?cs(w):C||cs(")"),this.nestingOptionsSeparator=P||",",this.maxReplaces=B||1e3,this.alwaysFormat=A!==void 0?A:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var b;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=w=>{if(w.indexOf(this.formatSeparator)<0){const A=zh(t,l,w,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(A,void 0,i,{...s,...t,interpolationkey:w}):A}const C=w.split(this.formatSeparator),P=C.shift().trim(),B=C.join(this.formatSeparator).trim();return this.format(zh(t,l,P,this.options.keySeparator,this.options.ignoreJSONStructure),B,i,{...s,...t,interpolationkey:P})};this.resetRegExp();const u=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,p=((b=s==null?void 0:s.interpolation)==null?void 0:b.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:w=>Lo(w)},{regex:this.regexp,safeValue:w=>this.escapeValue?Lo(this.escape(w)):Lo(w)}].forEach(w=>{for(o=0;n=w.regex.exec(e);){const C=n[1].trim();if(a=h(C),a===void 0)if(typeof u=="function"){const B=u(e,n,s);a=Oe(B)?B:""}else if(s&&Object.prototype.hasOwnProperty.call(s,C))a="";else if(p){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${C} for interpolating ${e}`),a="";else!Oe(a)&&!this.useRawValueToEscape&&(a=Oh(a));const P=w.safeValue(a);if(e=e.replace(n[0],P),p?(w.regex.lastIndex+=a.length,w.regex.lastIndex-=n[0].length):w.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const p=l.split(new RegExp(`${u}[ ]*{`));let f=`{${p[1]}`;l=p[0],f=this.interpolate(f,a);const b=f.match(/'/g),w=f.match(/"/g);(((b==null?void 0:b.length)??0)%2===0&&!w||w.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),h&&(a={...h,...a})}catch(C){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,C),`${l}${u}${f}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!Oe(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(p=>p.trim());s[1]=u.shift(),l=u,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!Oe(n))return n;Oe(n)||(n=Oh(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((u,p)=>this.format(u,p,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const lp=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=h),h==="false"&&(t[u]=!1),h==="true"&&(t[u]=!0),isNaN(h)||(t[u]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},us=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(na(i),s),e[a]=o),o(t)}};class hp{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Xr.create("formatter"),this.options=e,this.formats={number:us((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:us((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:us((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:us((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:us((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=us(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var p;const{formatName:h,formatOptions:u}=lp(l);if(this.formats[h]){let f=o;try{const b=((p=s==null?void 0:s.formatParams)==null?void 0:p[s.interpolationkey])||{},w=b.locale||b.lng||s.locale||s.lng||i;f=this.formats[h](o,w,{...u,...s,...b})}catch(b){this.logger.warn(b)}return f}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const cp=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class up extends Ca{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Xr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let u=!0;t.forEach(p=>{const f=`${h}|${p}`;!i.reload&&this.store.hasResourceBundle(h,p)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,u=!1,a[f]===void 0&&(a[f]=!0),n[f]===void 0&&(n[f]=!0),l[p]===void 0&&(l[p]=!0)))}),u||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{Jd(l.loaded,[n],a),cp(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const u=l.loaded[h];u.length&&u.forEach(p=>{o[h][p]===void 0&&(o[h][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(h&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(u=>o(null,u)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Oe(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Oe(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,u,p,f;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((p=(u=this.services)==null?void 0:u.utils)!=null&&p.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((f=this.backend)!=null&&f.create){const b={...a,isUpdate:n},w=this.backend.create.bind(this.backend);if(w.length<6)try{let C;w.length===5?C=w(e,t,i,s,b):C=w(e,t,i,s),C&&typeof C.then=="function"?C.then(P=>o(null,P)).catch(o):o(null,C)}catch(C){o(C)}else w(e,t,i,s,o,b)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const Fh=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),Oe(r[1])&&(e.defaultValue=r[1]),Oe(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),jh=r=>{var e,t;return Oe(r.ns)&&(r.ns=[r.ns]),Oe(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Oe(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},Vn=()=>{},dp=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Xs extends Ca{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=jh(e),this.services={},this.logger=Xr,this.modules={external:[]},dp(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(Oe(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=Fh();this.options={...s,...this.options,...jh(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Xr.init(n(this.modules.logger),this.options):Xr.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=hp;const p=new Th(this.options);this.store=new Dh(this.options.resources,this.options);const f=this.services;f.logger=Xr,f.resourceStore=this.store,f.languageUtils=p,f.pluralResolver=new ap(p,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(f.formatter=n(u),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new op(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new up(n(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(b){for(var w=arguments.length,C=new Array(w>1?w-1:0),P=1;P<w;P++)C[P-1]=arguments[P];e.emit(b,...C)}),this.modules.languageDetector&&(f.languageDetector=n(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=n(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new oa(this.services,this.options),this.translator.on("*",function(b){for(var w=arguments.length,C=new Array(w>1?w-1:0),P=1;P<w;P++)C[P-1]=arguments[P];e.emit(b,...C)}),this.modules.external.forEach(b=>{b.init&&b.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Vn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=js(),h=()=>{const u=(p,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),i(p,f)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vn;const s=Oe(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(p=>{p!=="cimode"&&o.indexOf(p)<0&&o.push(p)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=js();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Vn),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&jc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=js();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var u,p;!e&&!l&&this.services.languageDetector&&(l=[]);const h=Oe(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(p=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||p.call(u,h)),this.loadResources(h,f=>{a(f,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,u=new Array(h>2?h-2:0),p=2;p<h;p++)u[p-2]=arguments[p];l=s.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const f=s.options.keySeparator||".";let b;return l.keyPrefix&&Array.isArray(a)?b=a.map(w=>`${l.keyPrefix}${f}${w}`):b=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,s.t(b,l)};return Oe(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=js();return this.options.ns?(Oe(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=js();Oe(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new Th(Fh());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Xs(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vn;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Xs(s);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const o=Object.keys(this.store.data).reduce((l,h)=>(l[h]={...this.store.data[h]},Object.keys(l[h]).reduce((u,p)=>(u[p]={...l[h][p]},u),{})),{});n.store=new Dh(o,s),n.services.resourceStore=n.store}return n.translator=new oa(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),u=1;u<l;u++)h[u-1]=arguments[u];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const gt=Xs.createInstance();gt.createInstance=Xs.createInstance;gt.createInstance;gt.dir;gt.init;gt.loadResources;gt.reloadResources;gt.use;gt.changeLanguage;gt.getFixedT;const _=gt.t;gt.exists;gt.setDefaultNamespace;gt.hasLoadedNamespace;gt.loadNamespaces;gt.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=globalThis,la=Vs.trustedTypes,Nh=la?la.createPolicy("lit-html",{createHTML:r=>r}):void 0,Nc="$lit$",Ei=`lit$${Math.random().toFixed(9).slice(2)}$`,Wc="?"+Ei,pp=`<${Wc}>`,Zi=document,Ks=()=>Zi.createComment(""),Js=r=>r===null||typeof r!="object"&&typeof r!="function",dl=Array.isArray,fp=r=>dl(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Do=`[ 	
\f\r]`,Ns=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wh=/-->/g,Hh=/>/g,qi=RegExp(`>|${Do}(?:([^\\s"'>=/]+)(${Do}*=${Do}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bh=/'/g,Vh=/"/g,Hc=/^(?:script|style|textarea|title)$/i,gp=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=gp(1),Ri=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Gh=new WeakMap,Ji=Zi.createTreeWalker(Zi,129);function Bc(r,e){if(!dl(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nh!==void 0?Nh.createHTML(e):e}const mp=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",a=Ns;for(let o=0;o<t;o++){const l=r[o];let h,u,p=-1,f=0;for(;f<l.length&&(a.lastIndex=f,u=a.exec(l),u!==null);)f=a.lastIndex,a===Ns?u[1]==="!--"?a=Wh:u[1]!==void 0?a=Hh:u[2]!==void 0?(Hc.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=qi):u[3]!==void 0&&(a=qi):a===qi?u[0]===">"?(a=s??Ns,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?qi:u[3]==='"'?Vh:Bh):a===Vh||a===Bh?a=qi:a===Wh||a===Hh?a=Ns:(a=qi,s=void 0);const b=a===qi&&r[o+1].startsWith("/>")?" ":"";n+=a===Ns?l+pp:p>=0?(i.push(h),l.slice(0,p)+Nc+l.slice(p)+Ei+b):l+Ei+(p===-2?o:b)}return[Bc(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Vo=class Vc{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,u]=mp(e,t);if(this.el=Vc.createElement(h,i),Ji.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=Ji.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(Nc)){const f=u[a++],b=s.getAttribute(p).split(Ei),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:w[2],strings:b,ctor:w[1]==="."?vp:w[1]==="?"?bp:w[1]==="@"?wp:Oa}),s.removeAttribute(p)}else p.startsWith(Ei)&&(l.push({type:6,index:n}),s.removeAttribute(p));if(Hc.test(s.tagName)){const p=s.textContent.split(Ei),f=p.length-1;if(f>0){s.textContent=la?la.emptyScript:"";for(let b=0;b<f;b++)s.append(p[b],Ks()),Ji.nextNode(),l.push({type:2,index:++n});s.append(p[f],Ks())}}}else if(s.nodeType===8)if(s.data===Wc)l.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(Ei,p+1))!==-1;)l.push({type:7,index:n}),p+=Ei.length-1}n++}}static createElement(e,t){const i=Zi.createElement("template");return i.innerHTML=e,i}};function vs(r,e,t=r,i){var a,o;if(e===Ri)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Js(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=vs(r,s._$AS(r,e.values),s,i)),e}let yp=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Zi).importNode(t,!0);Ji.currentNode=s;let n=Ji.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new pl(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new xp(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=Ji.nextNode(),a++)}return Ji.currentNode=Zi,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},pl=class Gc{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=vs(this,e,t),Js(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==Ri&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fp(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&Js(this._$AH)?this._$AA.nextSibling.data=e:this.T(Zi.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Vo.createElement(Bc(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new yp(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Gh.get(e.strings);return t===void 0&&Gh.set(e.strings,t=new Vo(e)),t}k(e){dl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Gc(this.O(Ks()),this.O(Ks()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class Oa{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=vs(this,e,t,0),a=!Js(e)||e!==this._$AH&&e!==Ri,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=vs(this,o[i+l],t,l),h===Ri&&(h=this._$AH[l]),a||(a=!Js(h)||h!==this._$AH[l]),h===O?e=O:e!==O&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class vp extends Oa{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class bp extends Oa{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}let wp=class extends Oa{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=vs(this,e,t,0)??O)===Ri)return;const i=this._$AH,s=e===O&&i!==O||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==O&&(i===O||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},xp=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){vs(this,e)}};const Ro=Vs.litHtmlPolyfillSupport;Ro==null||Ro(Vo,pl),(Vs.litHtmlVersions??(Vs.litHtmlVersions=[])).push("3.2.1");const Sp=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new pl(e.insertBefore(Ks(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $p=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Aa=r=>(...e)=>({_$litDirective$:r,values:e});let fl=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Gs(s,e);return!0},ha=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Yc=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Pp(e)}};function kp(r){this._$AN!==void 0?(ha(this),this._$AM=r,Yc(this)):this._$AM=r}function _p(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Gs(i[n],!1),ha(i[n]);else i!=null&&(Gs(i,!1),ha(i));else Gs(this,r)}const Pp=r=>{r.type==ui.CHILD&&(r._$AP??(r._$AP=_p),r._$AQ??(r._$AQ=kp))};let Cp=class extends fl{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Yc(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Gs(this,e),ha(this))}setValue(e){if($p(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Yh=null,qc=()=>{};new Promise(r=>{qc=r});const Op={type:"3rdParty",init(r){Ap(r)}},Ap=r=>{Yh=r,qc(Yh)},qh=new Map,Ep=()=>{qh.forEach((r,e)=>{(e.isConnected===!1||Lp(e)===!1)&&qh.delete(e)})};setInterval(Ep,1e4);const Lp=r=>{const e=r.part;if(e.type===ui.ATTRIBUTE)return e.element.isConnected;if(e.type===ui.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===ui.PROPERTY||e.type===ui.BOOLEAN_ATTRIBUTE||e.type===ui.EVENT||e.type===ui.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:Dp,forEach:Rp}=[];function Mp(r){return Rp.call(Dp.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const Xh=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Tp=function(r,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!Xh.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!Xh.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},Kh={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=Tp(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var Ip={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return Kh.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&Kh.create(t,r,i,s,n)}},Up={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let Ws=null;const Jh=()=>{if(Ws!==null)return Ws;try{Ws=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{Ws=!1}return Ws};var zp={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&Jh())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&Jh()&&window.localStorage.setItem(t,r)}};let Hs=null;const Zh=()=>{if(Hs!==null)return Hs;try{Hs=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{Hs=!1}return Hs};var Fp={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&Zh())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&Zh()&&window.sessionStorage.setItem(t,r)}},jp={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},Np={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},Wp={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},Hp={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let Xc=!1;try{document.cookie,Xc=!0}catch{}const Kc=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Xc||Kc.splice(1,1);const Bp=()=>({order:Kc,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class Jc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Mp(t,this.options||{},Bp()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Ip),this.addDetector(Up),this.addDetector(zp),this.addDetector(Fp),this.addDetector(jp),this.addDetector(Np),this.addDetector(Wp),this.addDetector(Hp)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}Jc.type="languageDetector";const Vp={loading:"Loading",file:"File",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automaticrange",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visual file name",visiblefileurl:"Visual file URL",visiblefiledownload:"Visual file download",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser"},Gp={loading:"Chargement",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visuel",visiblefileurl:"URL de l'image visuel",visiblefiledownload:"Télécharger l'image visuel",time:"Temps",duration:"Durée",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Genre du fichier",type:"Genre",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous afficher aussi",youmayalsoadd:"Vous pouvez afficher aussi",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Lecture",pause:"Pause",stop:"Arrêter",date:"Date",frame:"Image",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes lisses",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieure",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieure",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format CSV",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants"},Yp={loading:"Načítám",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek"},qp={loading:"Llwytho",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r delwedd isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch yr ystod thermol yn awtomatig neu cyflewch yr ystod i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangos thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weledol",visiblefileurl:"URL ffeil weledol",visiblefiledownload:"Lawrlwythwch y ffeil weledol",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"wedi'u cetegoreiddio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau arddangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"yn ôl dydd",byhours:"yn ôl awr",byweeks:"yn ôl wythnos",bymonths:"yn ôl mis",byyears:"yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y delwedd isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell"},Xp={loading:"Loading",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner"};gt.use(Op).use(Jc).init({fallbackLng:"en",resources:{cs:{translation:Yp},cy:{translation:qp},de:{translation:Xp},en:{translation:Vp},fr:{translation:Gp}}});window.i18next=gt;const Mo=window.matchMedia("(prefers-color-scheme: dark)"),Zc="thermal-dark-mode",Qh=()=>{document.body.classList.add(Zc)},Kp=()=>{document.body.classList.remove(Zc)},Jp=()=>{Mo.matches&&Qh();const r=e=>{e.matches?Qh():Kp()};Mo.addEventListener("change",r),Mo.addListener(r)},Zp=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=globalThis,gl=Qn.ShadowRoot&&(Qn.ShadyCSS===void 0||Qn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ml=Symbol(),ec=new WeakMap;let Qc=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ml)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(gl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ec.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ec.set(t,e))}return e}toString(){return this.cssText}};const Qp=r=>new Qc(typeof r=="string"?r:r+"",void 0,ml),pe=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Qc(t,r,ml)},ef=(r,e)=>{if(gl)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Qn.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},tc=gl?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Qp(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tf,defineProperty:rf,getOwnPropertyDescriptor:sf,getOwnPropertyNames:nf,getOwnPropertySymbols:af,getPrototypeOf:of}=Object,Li=globalThis,rc=Li.trustedTypes,lf=rc?rc.emptyScript:"",To=Li.reactiveElementPolyfillSupport,Ys=(r,e)=>r,ca={toAttribute(r,e){switch(e){case Boolean:r=r?lf:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},yl=(r,e)=>!tf(r,e),ic={attribute:!0,type:String,converter:ca,reflect:!1,hasChanged:yl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Li.litPropertyMetadata??(Li.litPropertyMetadata=new WeakMap);let gs=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ic){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&rf(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=sf(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ic}static _$Ei(){if(this.hasOwnProperty(Ys("elementProperties")))return;const e=of(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ys("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ys("properties"))){const t=this.properties,i=[...nf(t),...af(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(tc(s))}else e!==void 0&&t.push(tc(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ef(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ca).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:ca;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??yl)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};gs.elementStyles=[],gs.shadowRootOptions={mode:"open"},gs[Ys("elementProperties")]=new Map,gs[Ys("finalized")]=new Map,To==null||To({ReactiveElement:gs}),(Li.reactiveElementVersions??(Li.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mr=class extends gs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Sp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ri}};var Uc;mr._$litElement$=!0,mr.finalized=!0,(Uc=globalThis.litElementHydrateSupport)==null||Uc.call(globalThis,{LitElement:mr});const Io=globalThis.litElementPolyfillSupport;Io==null||Io({LitElement:mr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hf={attribute:!0,type:String,converter:ca,reflect:!1,hasChanged:yl},cf=(r=hf,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function d(r){return(e,t)=>typeof t=="object"?cf(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(r){return d({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uf=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lr(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return uf(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const df={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Gn(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Yn(r){return r.toString().indexOf("`")===-1}Yn(r=>r``)||Yn(r=>r`\0`)||Yn(r=>r`\n`)||Yn(r=>r`\u0000`);Gn``&&Gn`\0`&&Gn`\n`&&Gn`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let pf="google#safe";function ff(){if(typeof window<"u")return window.trustedTypes}function eu(){var r;return(r=ff())!==null&&r!==void 0?r:null}let qn;function gf(){var r,e;if(qn===void 0)try{qn=(e=(r=eu())===null||r===void 0?void 0:r.createPolicy(pf,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{qn=null}return qn}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class tu{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function sc(r){var e;const t=r,i=(e=gf())===null||e===void 0?void 0:e.createScriptURL(t);return i??new tu(t,df)}function mf(r){var e;if(!((e=eu())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof tu)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function yf(r,...e){if(e.length===0)return sc(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return sc(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function vf(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function bf(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=vf(e||window);t&&r.setAttribute("nonce",t)}function wf(r,e,t){r.src=mf(e),bf(r)}/**
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
 */const xf=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),wf(t,yf`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function ru(r={}){await xf;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function nc(r){if(await ru(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Sf(r){return await ru(),new google.visualization.ChartWrapper({container:r})}const iu=6048e5,$f=864e5,ac=Symbol.for("constructDateFrom");function Mi(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&ac in r?r[ac](e):r instanceof Date?new r.constructor(e):new Date(e)}function Lt(r,e){return Mi(e||r,r)}let kf={};function gn(){return kf}function fi(r,e){var o,l,h,u;const t=gn(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??0,s=Lt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function ua(r,e){return fi(r,{...e,weekStartsOn:1})}function su(r,e){const t=Lt(r,e==null?void 0:e.in),i=t.getFullYear(),s=Mi(t,0);s.setFullYear(i+1,0,4),s.setHours(0,0,0,0);const n=ua(s),a=Mi(t,0);a.setFullYear(i,0,4),a.setHours(0,0,0,0);const o=ua(a);return t.getTime()>=n.getTime()?i+1:t.getTime()>=o.getTime()?i:i-1}function oc(r){const e=Lt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function _f(r,...e){const t=Mi.bind(null,e.find(i=>typeof i=="object"));return e.map(t)}function da(r,e){const t=Lt(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function Pf(r,e,t){const[i,s]=_f(t==null?void 0:t.in,r,e),n=da(i),a=da(s),o=+n-oc(n),l=+a-oc(a);return Math.round((o-l)/$f)}function Cf(r,e){const t=su(r,e),i=Mi(r,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),ua(i)}function Of(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function nu(r){return!(!Of(r)&&typeof r!="number"||isNaN(+Lt(r)))}function au(r,e){const t=Lt(r,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function pa(r,e){const t=Lt(r,e==null?void 0:e.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function fa(r,e){const t=Lt(r,e==null?void 0:e.in);return t.setDate(1),t.setHours(0,0,0,0),t}function ou(r,e){const t=Lt(r,e==null?void 0:e.in),i=t.getFullYear();return t.setFullYear(i+1,0,0),t.setHours(23,59,59,999),t}function vl(r,e){const t=Lt(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function lu(r,e){const t=Lt(r,e==null?void 0:e.in);return t.setMinutes(59,59,999),t}function ga(r,e){var o,l;const t=gn(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=Lt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const Af={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},hu=(r,e,t)=>{let i;const s=Af[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Tt(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Ef={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Lf={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Df={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Rf={date:Tt({formats:Ef,defaultWidth:"full"}),time:Tt({formats:Lf,defaultWidth:"full"}),dateTime:Tt({formats:Df,defaultWidth:"full"})},Mf={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},cu=(r,e,t,i)=>Mf[r];function ut(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const Tf={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},If={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Uf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},zf={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ff={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},jf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Nf=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},uu={ordinalNumber:Nf,era:ut({values:Tf,defaultWidth:"wide"}),quarter:ut({values:If,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ut({values:Uf,defaultWidth:"wide"}),day:ut({values:zf,defaultWidth:"wide"}),dayPeriod:ut({values:Ff,defaultWidth:"wide",formattingValues:jf,defaultFormattingWidth:"wide"})};function dt(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?Hf(o,p=>p.test(a)):Wf(o,p=>p.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const u=e.slice(a.length);return{value:h,rest:u}}}function Wf(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function Hf(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function mn(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const Bf=/^(\d+)(th|st|nd|rd)?/i,Vf=/\d+/i,Gf={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Yf={any:[/^b/i,/^(a|c)/i]},qf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Xf={any:[/1/i,/2/i,/3/i,/4/i]},Kf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Jf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Zf={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qf={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},eg={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},tg={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},du={ordinalNumber:mn({matchPattern:Bf,parsePattern:Vf,valueCallback:r=>parseInt(r,10)}),era:dt({matchPatterns:Gf,defaultMatchWidth:"wide",parsePatterns:Yf,defaultParseWidth:"any"}),quarter:dt({matchPatterns:qf,defaultMatchWidth:"wide",parsePatterns:Xf,defaultParseWidth:"any",valueCallback:r=>r+1}),month:dt({matchPatterns:Kf,defaultMatchWidth:"wide",parsePatterns:Jf,defaultParseWidth:"any"}),day:dt({matchPatterns:Zf,defaultMatchWidth:"wide",parsePatterns:Qf,defaultParseWidth:"any"}),dayPeriod:dt({matchPatterns:eg,defaultMatchWidth:"any",parsePatterns:tg,defaultParseWidth:"any"})},rg={code:"en-US",formatDistance:hu,formatLong:Rf,formatRelative:cu,localize:uu,match:du,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ig(r,e){const t=Lt(r,e==null?void 0:e.in);return Pf(t,vl(t))+1}function sg(r,e){const t=Lt(r,e==null?void 0:e.in),i=+ua(t)-+Cf(t);return Math.round(i/iu)+1}function pu(r,e){var u,p,f,b;const t=Lt(r,e==null?void 0:e.in),i=t.getFullYear(),s=gn(),n=(e==null?void 0:e.firstWeekContainsDate)??((p=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:p.firstWeekContainsDate)??s.firstWeekContainsDate??((b=(f=s.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??1,a=Mi((e==null?void 0:e.in)||r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=fi(a,e),l=Mi((e==null?void 0:e.in)||r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=fi(l,e);return+t>=+o?i+1:+t>=+h?i:i-1}function ng(r,e){var o,l,h,u;const t=gn(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,s=pu(r,e),n=Mi((e==null?void 0:e.in)||r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),fi(n,e)}function ag(r,e){const t=Lt(r,e==null?void 0:e.in),i=+fi(t,e)-+ng(t,e);return Math.round(i/iu)+1}function We(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Ai={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return We(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):We(t+1,2)},d(r,e){return We(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return We(r.getHours()%12||12,e.length)},H(r,e){return We(r.getHours(),e.length)},m(r,e){return We(r.getMinutes(),e.length)},s(r,e){return We(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return We(s,e.length)}},ds={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},lc={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Ai.y(r,e)},Y:function(r,e,t,i){const s=pu(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return We(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):We(n,e.length)},R:function(r,e){const t=su(r);return We(t,e.length)},u:function(r,e){const t=r.getFullYear();return We(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return We(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return We(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Ai.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return We(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=ag(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):We(s,e.length)},I:function(r,e,t){const i=sg(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):We(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Ai.d(r,e)},D:function(r,e,t){const i=ig(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):We(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return We(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return We(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return We(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=ds.noon:i===0?s=ds.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=ds.evening:i>=12?s=ds.afternoon:i>=4?s=ds.morning:s=ds.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Ai.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Ai.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):We(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):We(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Ai.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Ai.s(r,e)},S:function(r,e){return Ai.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return cc(i);case"XXXX":case"XX":return Xi(i);case"XXXXX":case"XXX":default:return Xi(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return cc(i);case"xxxx":case"xx":return Xi(i);case"xxxxx":case"xxx":default:return Xi(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+hc(i,":");case"OOOO":default:return"GMT"+Xi(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+hc(i,":");case"zzzz":default:return"GMT"+Xi(i,":")}},t:function(r,e,t){const i=Math.trunc(+r/1e3);return We(i,e.length)},T:function(r,e,t){return We(+r,e.length)}};function hc(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+We(n,2)}function cc(r,e){return r%60===0?(r>0?"-":"+")+We(Math.abs(r)/60,2):Xi(r,e)}function Xi(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=We(Math.trunc(i/60),2),n=We(i%60,2);return t+s+e+n}const uc=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},fu=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},og=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return uc(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",uc(i,e)).replace("{{time}}",fu(s,e))},lg={p:fu,P:og},hg=/^D+$/,cg=/^Y+$/,ug=["D","DD","YY","YYYY"];function dg(r){return hg.test(r)}function pg(r){return cg.test(r)}function fg(r,e,t){const i=gg(r,e,t);if(console.warn(i),ug.includes(r))throw new RangeError(i)}function gg(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const mg=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,yg=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,vg=/^'([^]*?)'?$/,bg=/''/g,wg=/[a-zA-Z]/;function Se(r,e,t){var u,p,f,b,w,C,P,B;const i=gn(),s=(t==null?void 0:t.locale)??i.locale??rg,n=(t==null?void 0:t.firstWeekContainsDate)??((p=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:p.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(f=i.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((C=(w=t==null?void 0:t.locale)==null?void 0:w.options)==null?void 0:C.weekStartsOn)??i.weekStartsOn??((B=(P=i.locale)==null?void 0:P.options)==null?void 0:B.weekStartsOn)??0,o=Lt(r,t==null?void 0:t.in);if(!nu(o))throw new RangeError("Invalid time value");let l=e.match(yg).map(A=>{const R=A[0];if(R==="p"||R==="P"){const Y=lg[R];return Y(A,s.formatLong)}return A}).join("").match(mg).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const R=A[0];if(R==="'")return{isToken:!1,value:xg(A)};if(lc[R])return{isToken:!0,value:A};if(R.match(wg))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return{isToken:!1,value:A}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(A=>{if(!A.isToken)return A.value;const R=A.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&pg(R)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&dg(R))&&fg(R,e,String(r));const Y=lc[R[0]];return Y(o,R,s.localize,h)}).join("")}function xg(r){const e=r.match(vg);return e?e[1].replace(bg,"'"):r}function Uo(r,e){const t=Lt(r,e==null?void 0:e.in);if(!nu(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=We(t.getDate(),2),h=We(t.getMonth()+1,2);n=`${We(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=We(t.getHours(),2),h=We(t.getMinutes(),2),u=We(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${u}`}return n}function gu(r,e){const t=Lt(r,e==null?void 0:e.in);return t.setMinutes(0,0,0),t}var Go;(function(r){r.csv="text/csv",r.tsv="text/tab-separated-values",r.plain="text/plain"})(Go||(Go={}));var Os=r=>r,vr=r=>r,qs=Os,Ea=Os,bs=Os,dc=Os,pc=Os,Sg={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:Go.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},$g=`\r
`,kg="\uFEFF",yn=r=>Object.assign({},Sg,r);class _g extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class Pg extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class Cg extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Og extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Ag=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},Eg=r=>dc(typeof r=="object"?r.key:r),Lg=r=>pc(typeof r=="object"?r.displayLabel:r),Dg=(r,...e)=>e.reduce((t,i)=>i(t),r),Rg=r=>e=>r.useBom?Ea(vr(e)+kg):e,Mg=r=>e=>r.showTitle?bl(Ea(vr(e)+r.title))(bs("")):e,bl=r=>e=>Ea(vr(r)+vr(e)+$g),mu=r=>(e,t)=>Tg(r)(bs(vr(e)+vr(t))),Tg=r=>e=>Os(vr(e)+r.fieldSeparator),Ig=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Pg("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=bs("");for(let s=0;s<e.length;s++){const n=Lg(e[s]);i=mu(r)(i,yu(r,vr(n)))}return i=bs(vr(i).slice(0,-1)),bl(t)(i)},Ug=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=bs("");for(let o=0;o<e.length;o++){const l=Eg(e[o]),h=t[n][vr(l)];a=mu(r)(a,yu(r,h))}a=bs(vr(a).slice(0,-1)),s=bl(s)(a)}return s},zg=r=>+r===r&&(!isFinite(r)||!!(r%1)),Fg=(r,e)=>{if(zg(e)){if(r.decimalSeparator==="locale")return qs(e.toLocaleString());if(r.decimalSeparator)return qs(e.toString().replace(".",r.decimalSeparator))}return qs(e.toString())},ea=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+Ag(e,r.quoteCharacter)+r.quoteCharacter),qs(t)},jg=(r,e)=>{const t=e?"true":"false";return qs(r.boolDisplay[t])},Ng=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?ea(r,r.replaceUndefinedWith+""):e===null?ea(r,"null"):ea(r,""),yu=(r,e)=>{if(typeof e=="number")return Fg(r,e);if(typeof e=="string")return ea(r,e);if(typeof e=="boolean"&&r.boolDisplay)return jg(r,e);if(e===null||typeof e>"u")return Ng(r,e);throw new Og(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},vu=r=>e=>{const t=yn(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=Dg(Ea(""),Rg(t),Mg(t),Ig(t,i),Ug(t,i,e));if(vr(s).length<1)throw new _g("Output is empty. Is your data formatted correctly?");return s},Wg=r=>e=>{const t=yn(r),i=vr(e),s=t.useTextFile?"text/plain":t.mediaType;return new Blob([i],{type:`${s};charset=utf8;`})},bu=r=>e=>{if(!window)throw new Cg("Downloading only supported in a browser environment.");const t=Wg(r)(e),i=yn(r),s=i.useTextFile?"txt":i.fileExtension,n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},Hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Vg(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var wu={exports:{}};(function(r){(function(e){var t=R(),i=Y(),s=F(),n=ie(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:u,toJpeg:p,toBlob:f,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l($,E){return E=E||{},b(E),Promise.resolve($).then(function(M){return C(M,E.filter,!0)}).then(P).then(B).then(I).then(function(M){return A(M,E.width||t.width($),E.height||t.height($))});function I(M){return E.bgcolor&&(M.style.backgroundColor=E.bgcolor),E.width&&(M.style.width=E.width+"px"),E.height&&(M.style.height=E.height+"px"),E.style&&Object.keys(E.style).forEach(function(j){M.style[j]=E.style[j]}),M}}function h($,E){return w($,E||{}).then(function(I){return I.getContext("2d").getImageData(0,0,t.width($),t.height($)).data})}function u($,E){return w($,E||{}).then(function(I){return I.toDataURL()})}function p($,E){return E=E||{},w($,E).then(function(I){return I.toDataURL("image/jpeg",E.quality||1)})}function f($,E){return w($,E||{}).then(t.canvasToBlob)}function b($){typeof $.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=$.imagePlaceholder,typeof $.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=$.cacheBust}function w($,E){return l($,E).then(t.makeImage).then(t.delay(100)).then(function(M){var j=I($);return j.getContext("2d").drawImage(M,0,0),j});function I(M){var j=document.createElement("canvas");if(j.width=E.width||t.width(M),j.height=E.height||t.height(M),E.bgcolor){var T=j.getContext("2d");T.fillStyle=E.bgcolor,T.fillRect(0,0,j.width,j.height)}return j}}function C($,E,I){if(!I&&E&&!E($))return Promise.resolve();return Promise.resolve($).then(M).then(function(z){return j($,z,E)}).then(function(z){return T($,z)});function M(z){return z instanceof HTMLCanvasElement?t.makeImage(z.toDataURL()):z.cloneNode(!1)}function j(z,D,q){var he=z.childNodes;if(he.length===0)return Promise.resolve(D);return k(D,t.asArray(he),q).then(function(){return D});function k(V,ue,se){var Le=Promise.resolve();return ue.forEach(function(qe){Le=Le.then(function(){return C(qe,se)}).then(function(at){at&&V.appendChild(at)})}),Le}}function T(z,D){if(!(D instanceof Element))return D;return Promise.resolve().then(q).then(he).then(k).then(V).then(function(){return D});function q(){ue(window.getComputedStyle(z),D.style);function ue(se,Le){se.cssText?Le.cssText=se.cssText:qe(se,Le);function qe(at,ht){t.asArray(at).forEach(function(oe){ht.setProperty(oe,at.getPropertyValue(oe),at.getPropertyPriority(oe))})}}}function he(){[":before",":after"].forEach(function(se){ue(se)});function ue(se){var Le=window.getComputedStyle(z,se),qe=Le.getPropertyValue("content");if(qe===""||qe==="none")return;var at=t.uid();D.className=D.className+" "+at;var ht=document.createElement("style");ht.appendChild(oe(at,se,Le)),D.appendChild(ht);function oe(de,Ae,Ue){var tt="."+de+":"+Ae,je=Ue.cssText?Ci(Ue):Vi(Ue);return document.createTextNode(tt+"{"+je+"}");function Ci(rt){var gr=rt.getPropertyValue("content");return rt.cssText+" content: "+gr+";"}function Vi(rt){return t.asArray(rt).map(gr).join("; ")+";";function gr(li){return li+": "+rt.getPropertyValue(li)+(rt.getPropertyPriority(li)?" !important":"")}}}}}function k(){z instanceof HTMLTextAreaElement&&(D.innerHTML=z.value),z instanceof HTMLInputElement&&D.setAttribute("value",z.value)}function V(){D instanceof SVGElement&&(D.setAttribute("xmlns","http://www.w3.org/2000/svg"),D instanceof SVGRectElement&&["width","height"].forEach(function(ue){var se=D.getAttribute(ue);se&&D.style.setProperty(ue,se)}))}}}function P($){return s.resolveAll().then(function(E){var I=document.createElement("style");return $.appendChild(I),I.appendChild(document.createTextNode(E)),$})}function B($){return n.inlineAll($).then(function(){return $})}function A($,E,I){return Promise.resolve($).then(function(M){return M.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(M)}).then(t.escapeXhtml).then(function(M){return'<foreignObject x="0" y="0" width="100%" height="100%">'+M+"</foreignObject>"}).then(function(M){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+E+'" height="'+I+'">'+M+"</svg>"}).then(function(M){return"data:image/svg+xml;charset=utf-8,"+M})}function R(){return{escape:V,parseExtension:E,mimeType:I,dataAsUrl:k,isDataUrl:M,canvasToBlob:T,resolveUrl:z,getAndEncode:he,uid:D(),delay:ue,asArray:se,escapeXhtml:Le,makeImage:q,width:qe,height:at};function $(){var oe="application/font-woff",de="image/jpeg";return{woff:oe,woff2:oe,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:de,jpeg:de,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function E(oe){var de=/\.([^\.\/]*?)$/g.exec(oe);return de?de[1]:""}function I(oe){var de=E(oe).toLowerCase();return $()[de]||""}function M(oe){return oe.search(/^(data:)/)!==-1}function j(oe){return new Promise(function(de){for(var Ae=window.atob(oe.toDataURL().split(",")[1]),Ue=Ae.length,tt=new Uint8Array(Ue),je=0;je<Ue;je++)tt[je]=Ae.charCodeAt(je);de(new Blob([tt],{type:"image/png"}))})}function T(oe){return oe.toBlob?new Promise(function(de){oe.toBlob(de)}):j(oe)}function z(oe,de){var Ae=document.implementation.createHTMLDocument(),Ue=Ae.createElement("base");Ae.head.appendChild(Ue);var tt=Ae.createElement("a");return Ae.body.appendChild(tt),Ue.href=de,tt.href=oe,tt.href}function D(){var oe=0;return function(){return"u"+de()+oe++;function de(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function q(oe){return new Promise(function(de,Ae){var Ue=new Image;Ue.onload=function(){de(Ue)},Ue.onerror=Ae,Ue.src=oe})}function he(oe){var de=3e4;return o.impl.options.cacheBust&&(oe+=(/\?/.test(oe)?"&":"?")+new Date().getTime()),new Promise(function(Ae){var Ue=new XMLHttpRequest;Ue.onreadystatechange=Ci,Ue.ontimeout=Vi,Ue.responseType="blob",Ue.timeout=de,Ue.open("GET",oe,!0),Ue.send();var tt;if(o.impl.options.imagePlaceholder){var je=o.impl.options.imagePlaceholder.split(/,/);je&&je[1]&&(tt=je[1])}function Ci(){if(Ue.readyState===4){if(Ue.status!==200){tt?Ae(tt):rt("cannot fetch resource: "+oe+", status: "+Ue.status);return}var gr=new FileReader;gr.onloadend=function(){var li=gr.result.split(/,/)[1];Ae(li)},gr.readAsDataURL(Ue.response)}}function Vi(){tt?Ae(tt):rt("timeout of "+de+"ms occured while fetching resource: "+oe)}function rt(gr){console.error(gr),Ae("")}})}function k(oe,de){return"data:"+de+";base64,"+oe}function V(oe){return oe.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function ue(oe){return function(de){return new Promise(function(Ae){setTimeout(function(){Ae(de)},oe)})}}function se(oe){for(var de=[],Ae=oe.length,Ue=0;Ue<Ae;Ue++)de.push(oe[Ue]);return de}function Le(oe){return oe.replace(/#/g,"%23").replace(/\n/g,"%0A")}function qe(oe){var de=ht(oe,"border-left-width"),Ae=ht(oe,"border-right-width");return oe.scrollWidth+de+Ae}function at(oe){var de=ht(oe,"border-top-width"),Ae=ht(oe,"border-bottom-width");return oe.scrollHeight+de+Ae}function ht(oe,de){var Ae=window.getComputedStyle(oe).getPropertyValue(de);return parseFloat(Ae.replace("px",""))}}function Y(){var $=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:j,shouldProcess:E,impl:{readUrls:I,inline:M}};function E(T){return T.search($)!==-1}function I(T){for(var z=[],D;(D=$.exec(T))!==null;)z.push(D[1]);return z.filter(function(q){return!t.isDataUrl(q)})}function M(T,z,D,q){return Promise.resolve(z).then(function(k){return D?t.resolveUrl(k,D):k}).then(q||t.getAndEncode).then(function(k){return t.dataAsUrl(k,t.mimeType(z))}).then(function(k){return T.replace(he(z),"$1"+k+"$3")});function he(k){return new RegExp(`(url\\(['"]?)(`+t.escape(k)+`)(['"]?\\))`,"g")}}function j(T,z,D){if(q())return Promise.resolve(T);return Promise.resolve(T).then(I).then(function(he){var k=Promise.resolve(T);return he.forEach(function(V){k=k.then(function(ue){return M(ue,V,z,D)})}),k});function q(){return!E(T)}}}function F(){return{resolveAll:$,impl:{readAll:E}};function $(){return E().then(function(I){return Promise.all(I.map(function(M){return M.resolve()}))}).then(function(I){return I.join(`
`)})}function E(){return Promise.resolve(t.asArray(document.styleSheets)).then(M).then(I).then(function(T){return T.map(j)});function I(T){return T.filter(function(z){return z.type===CSSRule.FONT_FACE_RULE}).filter(function(z){return i.shouldProcess(z.style.getPropertyValue("src"))})}function M(T){var z=[];return T.forEach(function(D){try{t.asArray(D.cssRules||[]).forEach(z.push.bind(z))}catch(q){console.log("Error while reading CSS rules from "+D.href,q.toString())}}),z}function j(T){return{resolve:function(){var D=(T.parentStyleSheet||{}).href;return i.inlineAll(T.cssText,D)},src:function(){return T.style.getPropertyValue("src")}}}}}function ie(){return{inlineAll:E,impl:{newImage:$}};function $(I){return{inline:M};function M(j){return t.isDataUrl(I.src)?Promise.resolve():Promise.resolve(I.src).then(j||t.getAndEncode).then(function(T){return t.dataAsUrl(T,t.mimeType(I.src))}).then(function(T){return new Promise(function(z,D){I.onload=z,I.onerror=D,I.src=T})})}}function E(I){if(!(I instanceof Element))return Promise.resolve(I);return M(I).then(function(){return I instanceof HTMLImageElement?$(I).inline():Promise.all(t.asArray(I.childNodes).map(function(j){return E(j)}))});function M(j){var T=j.style.getPropertyValue("background");return T?i.inlineAll(T).then(function(z){j.style.setProperty("background",z,j.style.getPropertyPriority("background"))}).then(function(){return j}):Promise.resolve(j)}}}})()})(wu);var Gg=wu.exports;const Yg=Bg(Gg);var Yo={exports:{}};const qg={},Xg=Object.freeze(Object.defineProperty({__proto__:null,default:qg},Symbol.toStringTag,{value:"Module"})),ps=Vg(Xg);/**
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
 */(function(r,e){(function(t,i){i(e)})(Hg,function(t){var i={},s={exports:{}};(function(G){var Q=function(we){return typeof we<"u"&&we.versions!=null&&we.versions.node!=null&&we+""=="[object process]"};G.exports.isNode=Q,G.exports.platform=typeof process<"u"&&Q(process)?"node":"browser";var Z=G.exports.platform==="node"&&ps;G.exports.isMainThread=G.exports.platform==="node"?(!Z||Z.isMainThread)&&!process.connected:typeof Window<"u",G.exports.cpus=G.exports.platform==="browser"?self.navigator.hardwareConcurrency:ps.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function G(we,Xe){var W=this;if(!(this instanceof G))throw new SyntaxError("Constructor must be called with the new operator");if(typeof we!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var ot=[],Ve=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var $t=function(H,fe){ot.push(H),Ve.push(fe)};this.then=function(K,H){return new G(function(fe,Ce){var Be=K?Q(K,fe,Ce):fe,Ft=H?Q(H,fe,Ce):Ce;$t(Be,Ft)},W)};var Rt=function(H){return W.resolved=!0,W.rejected=!1,W.pending=!1,ot.forEach(function(fe){fe(H)}),$t=function(Ce,Be){Ce(H)},Rt=ee=function(){},W},ee=function(H){return W.resolved=!1,W.rejected=!0,W.pending=!1,Ve.forEach(function(fe){fe(H)}),$t=function(Ce,Be){Be(H)},Rt=ee=function(){},W};this.cancel=function(){return Xe?Xe.cancel():ee(new Z),W},this.timeout=function(K){if(Xe)Xe.timeout(K);else{var H=setTimeout(function(){ee(new De("Promise timed out after "+K+" ms"))},K);W.always(function(){clearTimeout(H)})}return W},we(function(K){Rt(K)},function(K){ee(K)})}function Q(we,Xe,W){return function(ot){try{var Ve=we(ot);Ve&&typeof Ve.then=="function"&&typeof Ve.catch=="function"?Ve.then(Xe,W):Xe(Ve)}catch($t){W($t)}}}G.prototype.catch=function(we){return this.then(null,we)},G.prototype.always=function(we){return this.then(we,we)},G.prototype.finally=function(we){var Xe=this,W=function(){return new G(function(Ve){return Ve()}).then(we).then(function(){return Xe})};return this.then(W,W)},G.all=function(we){return new G(function(Xe,W){var ot=we.length,Ve=[];ot?we.forEach(function($t,Rt){$t.then(function(ee){Ve[Rt]=ee,ot--,ot==0&&Xe(Ve)},function(ee){ot=0,W(ee)})}):Xe(Ve)})},G.defer=function(){var we={};return we.promise=new G(function(Xe,W){we.resolve=Xe,we.reject=W}),we};function Z(we){this.message=we||"promise cancelled",this.stack=new Error().stack}Z.prototype=new Error,Z.prototype.constructor=Error,Z.prototype.name="CancellationError",G.CancellationError=Z;function De(we){this.message=we||"timeout exceeded",this.stack=new Error().stack}return De.prototype=new Error,De.prototype.constructor=Error,De.prototype.name="TimeoutError",G.TimeoutError=De,a.Promise=G,a}function h(G,Q){(Q==null||Q>G.length)&&(Q=G.length);for(var Z=0,De=Array(Q);Z<Q;Z++)De[Z]=G[Z];return De}function u(G,Q){var Z=typeof Symbol<"u"&&G[Symbol.iterator]||G["@@iterator"];if(!Z){if(Array.isArray(G)||(Z=B(G))||Q){Z&&(G=Z);var De=0,we=function(){};return{s:we,n:function(){return De>=G.length?{done:!0}:{done:!1,value:G[De++]}},e:function(Ve){throw Ve},f:we}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xe,W=!0,ot=!1;return{s:function(){Z=Z.call(G)},n:function(){var Ve=Z.next();return W=Ve.done,Ve},e:function(Ve){ot=!0,Xe=Ve},f:function(){try{W||Z.return==null||Z.return()}finally{if(ot)throw Xe}}}}function p(G,Q,Z){return(Q=C(Q))in G?Object.defineProperty(G,Q,{value:Z,enumerable:!0,configurable:!0,writable:!0}):G[Q]=Z,G}function f(G,Q){var Z=Object.keys(G);if(Object.getOwnPropertySymbols){var De=Object.getOwnPropertySymbols(G);Q&&(De=De.filter(function(we){return Object.getOwnPropertyDescriptor(G,we).enumerable})),Z.push.apply(Z,De)}return Z}function b(G){for(var Q=1;Q<arguments.length;Q++){var Z=arguments[Q]!=null?arguments[Q]:{};Q%2?f(Object(Z),!0).forEach(function(De){p(G,De,Z[De])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(Z)):f(Object(Z)).forEach(function(De){Object.defineProperty(G,De,Object.getOwnPropertyDescriptor(Z,De))})}return G}function w(G,Q){if(typeof G!="object"||!G)return G;var Z=G[Symbol.toPrimitive];if(Z!==void 0){var De=Z.call(G,Q||"default");if(typeof De!="object")return De;throw new TypeError("@@toPrimitive must return a primitive value.")}return(Q==="string"?String:Number)(G)}function C(G){var Q=w(G,"string");return typeof Q=="symbol"?Q:Q+""}function P(G){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Q){return typeof Q}:function(Q){return Q&&typeof Symbol=="function"&&Q.constructor===Symbol&&Q!==Symbol.prototype?"symbol":typeof Q},P(G)}function B(G,Q){if(G){if(typeof G=="string")return h(G,Q);var Z={}.toString.call(G).slice(8,-1);return Z==="Object"&&G.constructor&&(Z=G.constructor.name),Z==="Map"||Z==="Set"?Array.from(G):Z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Z)?h(G,Q):void 0}}var A={exports:{}},R={},Y;function F(){return Y||(Y=1,R.validateOptions=function(Q,Z,De){if(Q){var we=Q?Object.keys(Q):[],Xe=we.find(function(ot){return!Z.includes(ot)});if(Xe)throw new Error('Object "'+De+'" contains an unknown option "'+Xe+'"');var W=Z.find(function(ot){return Object.prototype[ot]&&!we.includes(ot)});if(W)throw new Error('Object "'+De+'" contains an inherited option "'+W+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return Q}},R.workerOptsNames=["credentials","name","type"],R.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],R.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),R}var ie,$;function E(){return $||($=1,ie=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return i.all([o,r]).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ie}var I;function M(){if(I)return A.exports;I=1;var G=l(),Q=G.Promise,Z=n,De=F(),we=De.validateOptions,Xe=De.forkOptsNames,W=De.workerThreadOptsNames,ot=De.workerOptsNames,Ve="__workerpool-terminate__",$t="__workerpool-cleanup__";function Rt(){var xe=K();if(!xe)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return xe}function ee(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":P(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function K(){try{return ps}catch(xe){if(P(xe)==="object"&&xe!==null&&xe.code==="MODULE_NOT_FOUND")return null;throw xe}}function H(){if(Z.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var xe=new Blob([E()],{type:"text/javascript"});return window.URL.createObjectURL(xe)}else return __dirname+"/worker.js"}function fe(xe,Ee){if(Ee.workerType==="web")return ee(),Ce(xe,Ee.workerOpts,Worker);if(Ee.workerType==="thread")return X=Rt(),Be(xe,X,Ee);if(Ee.workerType==="process"||!Ee.workerType)return Ft(xe,Gt(Ee),ps);if(Z.platform==="browser")return ee(),Ce(xe,Ee.workerOpts,Worker);var X=K();return X?Be(xe,X,Ee):Ft(xe,Gt(Ee),ps)}function Ce(xe,Ee,X){we(Ee,ot,"workerOpts");var ke=new X(xe,Ee);return ke.isBrowserWorker=!0,ke.on=function(Re,Te){this.addEventListener(Re,function(Ze){Te(Ze.data)})},ke.send=function(Re,Te){this.postMessage(Re,Te)},ke}function Be(xe,Ee,X){var ke,Re;we(X==null?void 0:X.workerThreadOpts,W,"workerThreadOpts");var Te=new Ee.Worker(xe,b({stdout:(ke=X==null?void 0:X.emitStdStreams)!==null&&ke!==void 0?ke:!1,stderr:(Re=X==null?void 0:X.emitStdStreams)!==null&&Re!==void 0?Re:!1},X==null?void 0:X.workerThreadOpts));return Te.isWorkerThread=!0,Te.send=function(Ze,Ie){this.postMessage(Ze,Ie)},Te.kill=function(){return this.terminate(),!0},Te.disconnect=function(){this.terminate()},X!=null&&X.emitStdStreams&&(Te.stdout.on("data",function(Ze){return Te.emit("stdout",Ze)}),Te.stderr.on("data",function(Ze){return Te.emit("stderr",Ze)})),Te}function Ft(xe,Ee,X){we(Ee.forkOpts,Xe,"forkOpts");var ke=X.fork(xe,Ee.forkArgs,Ee.forkOpts),Re=ke.send;return ke.send=function(Te){return Re.call(ke,Te)},Ee.emitStdStreams&&(ke.stdout.on("data",function(Te){return ke.emit("stdout",Te)}),ke.stderr.on("data",function(Te){return ke.emit("stderr",Te)})),ke.isChildProcess=!0,ke}function Gt(xe){xe=xe||{};var Ee=process.execArgv.join(" "),X=Ee.indexOf("--inspect")!==-1,ke=Ee.indexOf("--debug-brk")!==-1,Re=[];return X&&(Re.push("--inspect="+xe.debugPort),ke&&Re.push("--debug-brk")),process.execArgv.forEach(function(Te){Te.indexOf("--max-old-space-size")>-1&&Re.push(Te)}),Object.assign({},xe,{forkArgs:xe.forkArgs,forkOpts:Object.assign({},xe.forkOpts,{execArgv:(xe.forkOpts&&xe.forkOpts.execArgv||[]).concat(Re),stdio:xe.emitStdStreams?"pipe":void 0})})}function tr(xe){for(var Ee=new Error(""),X=Object.keys(xe),ke=0;ke<X.length;ke++)Ee[X[ke]]=xe[X[ke]];return Ee}function rr(xe,Ee){if(Object.keys(xe.processing).length===1){var X=Object.values(xe.processing)[0];X.options&&typeof X.options.on=="function"&&X.options.on(Ee)}}function Gr(xe,Ee){var X=this,ke=Ee||{};this.script=xe||H(),this.worker=fe(this.script,ke),this.debugPort=ke.debugPort,this.forkOpts=ke.forkOpts,this.forkArgs=ke.forkArgs,this.workerOpts=ke.workerOpts,this.workerThreadOpts=ke.workerThreadOpts,this.workerTerminateTimeout=ke.workerTerminateTimeout,xe||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Ie){rr(X,{stdout:Ie.toString()})}),this.worker.on("stderr",function(Ie){rr(X,{stderr:Ie.toString()})}),this.worker.on("message",function(Ie){if(!X.terminated)if(typeof Ie=="string"&&Ie==="ready")X.worker.ready=!0,Te();else{var jt=Ie.id,ft=X.processing[jt];if(ft!==void 0&&(Ie.isEvent?ft.options&&typeof ft.options.on=="function"&&ft.options.on(Ie.payload):(delete X.processing[jt],X.terminating===!0&&X.terminate(),Ie.error?ft.resolver.reject(tr(Ie.error)):ft.resolver.resolve(Ie.result))),Ie.method===$t){var Yt=X.tracking[Ie.id];Yt!==void 0&&(Ie.error?(clearTimeout(Yt.timeoutId),Yt.resolver.reject(tr(Ie.error))):(X.tracking&&clearTimeout(Yt.timeoutId),Yt.resolver.resolve(Yt.result))),delete X.tracking[jt]}}});function Re(Ie){X.terminated=!0;for(var jt in X.processing)X.processing[jt]!==void 0&&X.processing[jt].resolver.reject(Ie);X.processing=Object.create(null)}function Te(){var Ie=u(X.requestQueue.splice(0)),jt;try{for(Ie.s();!(jt=Ie.n()).done;){var ft=jt.value;X.worker.send(ft.message,ft.transfer)}}catch(Yt){Ie.e(Yt)}finally{Ie.f()}}var Ze=this.worker;this.worker.on("error",Re),this.worker.on("exit",function(Ie,jt){var ft=`Workerpool Worker terminated Unexpectedly
`;ft+="    exitCode: `"+Ie+"`\n",ft+="    signalCode: `"+jt+"`\n",ft+="    workerpool.script: `"+X.script+"`\n",ft+="    spawnArgs: `"+Ze.spawnargs+"`\n",ft+="    spawnfile: `"+Ze.spawnfile+"`\n",ft+="    stdout: `"+Ze.stdout+"`\n",ft+="    stderr: `"+Ze.stderr+"`\n",Re(new Error(ft))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Gr.prototype.methods=function(){return this.exec("methods")},Gr.prototype.exec=function(xe,Ee,X,ke){X||(X=Q.defer());var Re=++this.lastId;this.processing[Re]={id:Re,resolver:X,options:ke};var Te={message:{id:Re,method:xe,params:Ee},transfer:ke&&ke.transfer};this.terminated?X.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Te.message,Te.transfer):this.requestQueue.push(Te);var Ze=this;return X.promise.catch(function(Ie){if(Ie instanceof Q.CancellationError||Ie instanceof Q.TimeoutError)return Ze.tracking[Re]={id:Re,resolver:Q.defer()},delete Ze.processing[Re],Ze.tracking[Re].resolver.promise=Ze.tracking[Re].resolver.promise.catch(function(jt){delete Ze.tracking[Re];var ft=Ze.terminateAndNotify(!0).then(function(){throw jt},function(Yt){throw Yt});return ft}),Ze.worker.send({id:Re,method:$t}),Ze.tracking[Re].timeoutId=setTimeout(function(){Ze.tracking[Re].resolver.reject(Ie)},Ze.workerTerminateTimeout),Ze.tracking[Re].resolver.promise;throw Ie})},Gr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Gr.prototype.terminate=function(xe,Ee){var X=this;if(xe){for(var ke in this.processing)this.processing[ke]!==void 0&&this.processing[ke].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var Re=0,Te=Object.values(X.tracking);Re<Te.length;Re++){var Ze=Te[Re];clearTimeout(Ze.timeoutId),Ze.resolver.reject(new Error("Worker Terminating"))}if(X.tracking=Object.create(null),typeof Ee=="function"&&(this.terminationHandler=Ee),this.busy())this.terminating=!0;else{var Ie=function(Yt){if(X.terminated=!0,X.cleaning=!1,X.worker!=null&&X.worker.removeAllListeners&&X.worker.removeAllListeners("message"),X.worker=null,X.terminating=!1,X.terminationHandler)X.terminationHandler(Yt,X);else if(Yt)throw Yt};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ie(new Error("worker already killed!"));return}var jt=setTimeout(function(){X.worker&&X.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(jt),X.worker&&(X.worker.killed=!0),Ie()}),this.worker.ready?this.worker.send(Ve):this.requestQueue.push({message:Ve}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ie()}},Gr.prototype.terminateAndNotify=function(xe,Ee){var X=Q.defer();return Ee&&X.promise.timeout(Ee),this.terminate(xe,function(ke,Re){ke?X.reject(ke):X.resolve(Re)}),X.promise},A.exports=Gr,A.exports._tryRequireWorkerThreads=K,A.exports._setupProcessWorker=Ft,A.exports._setupBrowserWorker=Ce,A.exports._setupWorkerThreadWorker=Be,A.exports.ensureWorkerThreads=Rt,A.exports}var j,T;function z(){if(T)return j;T=1;var G=65535;j=Q;function Q(){this.ports=Object.create(null),this.length=0}return Q.prototype.nextAvailableStartingAt=function(Z){for(;this.ports[Z]===!0;)Z++;if(Z>=G)throw new Error("WorkerPool debug port limit reached: "+Z+">= "+G);return this.ports[Z]=!0,this.length++,Z},Q.prototype.releasePort=function(Z){delete this.ports[Z],this.length--},j}var D,q;function he(){if(q)return D;q=1;var G=l(),Q=G.Promise,Z=M(),De=n,we=z(),Xe=new we;function W(ee,K){typeof ee=="string"?this.script=ee||null:(this.script=null,K=ee),this.workers=[],this.tasks=[],K=K||{},this.forkArgs=Object.freeze(K.forkArgs||[]),this.forkOpts=Object.freeze(K.forkOpts||{}),this.workerOpts=Object.freeze(K.workerOpts||{}),this.workerThreadOpts=Object.freeze(K.workerThreadOpts||{}),this.debugPortStart=K.debugPortStart||43210,this.nodeWorker=K.nodeWorker,this.workerType=K.workerType||K.nodeWorker||"auto",this.maxQueueSize=K.maxQueueSize||1/0,this.workerTerminateTimeout=K.workerTerminateTimeout||1e3,this.onCreateWorker=K.onCreateWorker||function(){return null},this.onTerminateWorker=K.onTerminateWorker||function(){return null},this.emitStdStreams=K.emitStdStreams||!1,K&&"maxWorkers"in K?(ot(K.maxWorkers),this.maxWorkers=K.maxWorkers):this.maxWorkers=Math.max((De.cpus||4)-1,1),K&&"minWorkers"in K&&(K.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Ve(K.minWorkers),this.minWorkers=K.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&Z.ensureWorkerThreads()}W.prototype.exec=function(ee,K,H){if(K&&!Array.isArray(K))throw new TypeError('Array expected as argument "params"');if(typeof ee=="string"){var fe=Q.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ce=this.tasks,Be={method:ee,params:K,resolver:fe,timeout:null,options:H};Ce.push(Be);var Ft=fe.promise.timeout;return fe.promise.timeout=function(tr){return Ce.indexOf(Be)!==-1?(Be.timeout=tr,fe.promise):Ft.call(fe.promise,tr)},this._next(),fe.promise}else{if(typeof ee=="function")return this.exec("run",[String(ee),K],H);throw new TypeError('Function or string expected as argument "method"')}},W.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var ee=this;return this.exec("methods").then(function(K){var H={};return K.forEach(function(fe){H[fe]=function(){return ee.exec(fe,Array.prototype.slice.call(arguments))}}),H})},W.prototype._next=function(){if(this.tasks.length>0){var ee=this._getWorker();if(ee){var K=this,H=this.tasks.shift();if(H.resolver.promise.pending){var fe=ee.exec(H.method,H.params,H.resolver,H.options).then(K._boundNext).catch(function(){if(ee.terminated)return K._removeWorker(ee)}).then(function(){K._next()});typeof H.timeout=="number"&&fe.timeout(H.timeout)}else K._next()}}},W.prototype._getWorker=function(){for(var ee=this.workers,K=0;K<ee.length;K++){var H=ee[K];if(H.busy()===!1)return H}return ee.length<this.maxWorkers?(H=this._createWorkerHandler(),ee.push(H),H):null},W.prototype._removeWorker=function(ee){var K=this;return Xe.releasePort(ee.debugPort),this._removeWorkerFromList(ee),this._ensureMinWorkers(),new Q(function(H,fe){ee.terminate(!1,function(Ce){K.onTerminateWorker({forkArgs:ee.forkArgs,forkOpts:ee.forkOpts,workerThreadOpts:ee.workerThreadOpts,script:ee.script}),Ce?fe(Ce):H(ee)})})},W.prototype._removeWorkerFromList=function(ee){var K=this.workers.indexOf(ee);K!==-1&&this.workers.splice(K,1)},W.prototype.terminate=function(ee,K){var H=this;this.tasks.forEach(function(Gt){Gt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var fe=function(tr){Xe.releasePort(tr.debugPort),this._removeWorkerFromList(tr)},Ce=fe.bind(this),Be=[],Ft=this.workers.slice();return Ft.forEach(function(Gt){var tr=Gt.terminateAndNotify(ee,K).then(Ce).always(function(){H.onTerminateWorker({forkArgs:Gt.forkArgs,forkOpts:Gt.forkOpts,workerThreadOpts:Gt.workerThreadOpts,script:Gt.script})});Be.push(tr)}),Q.all(Be)},W.prototype.stats=function(){var ee=this.workers.length,K=this.workers.filter(function(H){return H.busy()}).length;return{totalWorkers:ee,busyWorkers:K,idleWorkers:ee-K,pendingTasks:this.tasks.length,activeTasks:K}},W.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var ee=this.workers.length;ee<this.minWorkers;ee++)this.workers.push(this._createWorkerHandler())},W.prototype._createWorkerHandler=function(){var ee=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new Z(ee.script||this.script,{forkArgs:ee.forkArgs||this.forkArgs,forkOpts:ee.forkOpts||this.forkOpts,workerOpts:ee.workerOpts||this.workerOpts,workerThreadOpts:ee.workerThreadOpts||this.workerThreadOpts,debugPort:Xe.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function ot(ee){if(!$t(ee)||!Rt(ee)||ee<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Ve(ee){if(!$t(ee)||!Rt(ee)||ee<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function $t(ee){return typeof ee=="number"}function Rt(ee){return Math.round(ee)==ee}return D=W,D}var k={},V,ue;function se(){if(ue)return V;ue=1;function G(Q,Z){this.message=Q,this.transfer=Z}return V=G,V}var Le;function qe(){return Le||(Le=1,function(G){var Q=se(),Z=l().Promise,De="__workerpool-terminate__",we="__workerpool-cleanup__",Xe=1e3,W={exit:function(){}},ot={addAbortListener:function(fe){W.abortListeners.push(fe)},emit:W.emit};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")W.on=function(H,fe){addEventListener(H,function(Ce){fe(Ce.data)})},W.send=function(H,fe){fe?postMessage(H,fe):postMessage(H)};else if(typeof process<"u"){var Ve;try{Ve=ps}catch(H){if(!(P(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND"))throw H}if(Ve&&Ve.parentPort!==null){var $t=Ve.parentPort;W.send=$t.postMessage.bind($t),W.on=$t.on.bind($t),W.exit=process.exit.bind(process)}else W.on=process.on.bind(process),W.send=function(H){process.send(H)},W.on("disconnect",function(){process.exit(1)}),W.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Rt(H){return Object.getOwnPropertyNames(H).reduce(function(fe,Ce){return Object.defineProperty(fe,Ce,{value:H[Ce],enumerable:!0})},{})}function ee(H){return H&&typeof H.then=="function"&&typeof H.catch=="function"}W.methods={},W.methods.run=function(fe,Ce){var Be=new Function("return ("+fe+").apply(this, arguments);");return Be.worker=ot,Be.apply(Be,Ce)},W.methods.methods=function(){return Object.keys(W.methods)},W.terminationHandler=void 0,W.abortListenerTimeout=Xe,W.abortListeners=[],W.terminateAndExit=function(H){var fe=function(){W.exit(H)};if(!W.terminationHandler)return fe();var Ce=W.terminationHandler(H);return ee(Ce)?(Ce.then(fe,fe),Ce):(fe(),new Z(function(Be,Ft){Ft(new Error("Worker terminating"))}))},W.cleanup=function(H){if(!W.abortListeners.length)return W.send({id:H,method:we,error:Rt(new Error("Worker terminating"))}),new Z(function(rr){rr()});var fe=function(){W.exit()},Ce=function(){W.abortListeners.length||(W.abortListeners=[])},Be=W.abortListeners.map(function(rr){return rr()}),Ft,Gt=new Z(function(rr,Gr){Ft=setTimeout(function(){Gr(new Error("Timeout occured waiting for abort handler, killing worker"))},W.abortListenerTimeout)}),tr=Z.all(Be).then(function(){clearTimeout(Ft),Ce()},function(){clearTimeout(Ft),fe()});return Z.all([tr,Gt]).then(function(){W.send({id:H,method:we,error:null})},function(rr){W.send({id:H,method:we,error:rr?Rt(rr):null})})};var K=null;W.on("message",function(H){if(H===De)return W.terminateAndExit(0);if(H.method===we)return W.cleanup(H.id);try{var fe=W.methods[H.method];if(fe){K=H.id;var Ce=fe.apply(fe,H.params);ee(Ce)?Ce.then(function(Be){Be instanceof Q?W.send({id:H.id,result:Be.message,error:null},Be.transfer):W.send({id:H.id,result:Be,error:null}),K=null}).catch(function(Be){W.send({id:H.id,result:null,error:Rt(Be)}),K=null}):(Ce instanceof Q?W.send({id:H.id,result:Ce.message,error:null},Ce.transfer):W.send({id:H.id,result:Ce,error:null}),K=null)}else throw new Error('Unknown method "'+H.method+'"')}catch(Be){W.send({id:H.id,result:null,error:Rt(Be)})}}),W.register=function(H,fe){if(H)for(var Ce in H)H.hasOwnProperty(Ce)&&(W.methods[Ce]=H[Ce],W.methods[Ce].worker=ot);fe&&(W.terminationHandler=fe.onTerminate,W.abortListenerTimeout=fe.abortListenerTimeout||Xe),W.send("ready")},W.emit=function(H){if(K){if(H instanceof Q){W.send({id:K,isEvent:!0,payload:H.message},H.transfer);return}W.send({id:K,isEvent:!0,payload:H})}},G.add=W.register,G.emit=W.emit}(k)),k}var at=n.platform,ht=n.isMainThread,oe=n.cpus;function de(G,Q){var Z=he();return new Z(G,Q)}var Ae=i.pool=de;function Ue(G,Q){var Z=qe();Z.add(G,Q)}var tt=i.worker=Ue;function je(G){var Q=qe();Q.emit(G)}var Ci=i.workerEmit=je,Vi=l(),rt=Vi.Promise,gr=i.Promise=rt,li=i.Transfer=se(),io=i.platform=at,so=i.isMainThread=ht,no=i.cpus=oe;t.Promise=gr,t.Transfer=li,t.cpus=no,t.default=i,t.isMainThread=so,t.platform=io,t.pool=Ae,t.worker=tt,t.workerEmit=Ci,Object.defineProperty(t,"__esModule",{value:!0})})})(Yo,Yo.exports);var Kg=Yo.exports,Pt=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},xu=class extends Pt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Jg=class extends Pt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Zg=class extends Pt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,t=this.parent.histogram.value.filter(s=>s.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},Qg=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},em=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],tm=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],rm=Qg(),Kr={iron:{pixels:tm,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:em,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:rm,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},im=class extends Pt{get availablePalettes(){return Kr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},Ho,sm=(Ho=class{},c(Ho,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),Ho),xt,lt=(xt=class extends sm{static humanRangeDates(e,t){return e=xt.inputToDate(e),t=xt.inputToDate(t),e.getUTCDate()===t.getUTCDate()?xt.humanDate(e):[xt.humanDate(e),xt.humanDate(t)].join(" - ")}static human(e){return`${xt.humanDate(e)} ${xt.humanTime(e,!0)} `}},c(xt,"isoDate",e=>(e=xt.inputToDate(e),Uo(e,{representation:"date"}))),c(xt,"isoTime",e=>(e=xt.inputToDate(e),Uo(e,{representation:"time"}))),c(xt,"isoComplete",e=>(e=xt.inputToDate(e),Uo(e))),c(xt,"humanTime",(e,t=!1)=>(e=xt.inputToDate(e),Se(e,t?"HH:mm:ss":"HH:mm"))),c(xt,"humanDate",(e,t=!1)=>(e=xt.inputToDate(e),Se(e,t?"d. M.":"d. M. yyyy"))),xt),te=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},La=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new te);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},yt=class{constructor(r,e,t){c(this,"onSerializableChange",new te);c(this,"_selected",!1);c(this,"onSelected",new te);c(this,"onDeselected",new te);c(this,"onValues",new te);c(this,"onMoveOrResize",new te);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new te);c(this,"_initialColor");c(this,"onSetInitialColor",new te);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new te);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},Su=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new te);c(this,"pxY");c(this,"_y");c(this,"onY",new te);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new te);c(this,"onMouseLeave",new te);c(this,"onActivate",new te);c(this,"onDeactivate",new te);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},ar,nm=(ar=class extends Su{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(ar.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=ar.sizePx(-.5),t.style.left=ar.sizePx(-.5),t.style.width=ar.sizePx(),t.style.height=ar.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=ar.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=ar.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${ar.sizePx(.5)} - 3px )`,t.style.left=`calc( ${ar.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(ar,"size",20),ar),_r=class $u extends yt{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new nm("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new ku(this)),this._graph}static addAtPoint(t,i,s,n,a){return new $u(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(u=>u.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=yt.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=yt.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=yt.serializedGetNumericalValueByKey(i,"top"),h=yt.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},ku=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new te);c(this,"onGraphData",new te);c(this,"onAnalysisSelection",new te);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof _r)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof _r)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof _r?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof _r)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},am=class extends Su{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},om=class extends am{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Ur=class extends yt{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new ku(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,u=a-n;return{top:n,left:o,width:h,height:u}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new om(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(b=>b.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=yt.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=yt.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=yt.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=yt.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=yt.serializedGetNumericalValueByKey(t,"top"),u=yt.serializedGetNumericalValueByKey(t,"left"),p=yt.serializedGetNumericalValueByKey(t,"width"),f=yt.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),u!==void 0&&u!==this.left&&(this.setLeft(u),i=!0),p!==void 0&&p!==this.width&&(this.setWidth(p),i=!0),f!==void 0&&f!==this.height&&(this.setHeight(f),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},_u=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},fc=class extends _u{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},gc=class ta extends Ur{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new ta(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:p}=ta.calculateDimensionsFromCorners(s,n,a,o),f=new ta(e,t,i,l,h,u,p);return f.recalculateValues(),f}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new fc(this,e,t,e+i,t+s):new fc(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let p=e;p<=t;p++)if(this.isWithin(p,h)){const f=this.file.pixels[u+p];f<n&&(n=f),f>a&&(a=f),l+=f,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},mc=class extends _u{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},yc=class ra extends Ur{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new ra(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:p}=ra.calculateDimensionsFromCorners(s,n,a,o),f=new ra(e,t,i,l,h,u,p);return f.recalculateValues(),f}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new mc(this,e,t,e+i,t+s):new mc(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let p=e;p<=t;p++){const f=this.file.pixels[u+p];f<n&&(n=f),f>a&&(a=f),l+=f,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},ia=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],lm=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new te);c(this,"onRemove",new te);c(this,"onSelectionChange",new te);c(this,"colors",ia);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=yc.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=yc.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=gc.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=gc.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=_r.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=_r.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=ia.filter(i=>!e.includes(i));return t.length>0?t[0]:ia[0]}getNextName(e){return`${e} ${this.all.length}`}},hm=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},cm=class extends Pt{constructor(){super(...arguments);c(this,"layers",new lm(this));c(this,"points",new hm(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,u=e.layerY/o;return{top:Math.round(l*u),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},um=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new te);c(this,"onAddGraph",new te);c(this,"onRemoveGraph",new te);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:Se(a,"m:ss:SSS")+" ",[e[1].key]:Se(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},dm=class extends Pt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new te);c(this,"listeners",new um(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=yn({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=vu(i)(e);bu(i)(s)}},pm=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new te);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},ys,Pu=(ys=class extends Pt{constructor(){super(...arguments);c(this,"onSlotInit",new te);c(this,"onSlotRemove",new te);c(this,"onSlot1Assignement",new te);c(this,"onSlot2Assignement",new te);c(this,"onSlot3Assignement",new te);c(this,"onSlot4Assignement",new te);c(this,"onSlot5Assignement",new te);c(this,"onSlot6Assignement",new te);c(this,"onSlot7Assignement",new te);c(this,"onSlot1Serialize",new te);c(this,"onSlot2Serialize",new te);c(this,"onSlot3Serialize",new te);c(this,"onSlot4Serialize",new te);c(this,"onSlot5Serialize",new te);c(this,"onSlot6Serialize",new te);c(this,"onSlot7Serialize",new te)}getNextFreeSlotNumber(){for(let t=1;t<=ys.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new pm(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(P=>P.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=yt.serializedGetNumericalValueByKey(s,"top"),l=yt.serializedGetNumericalValueByKey(s,"left");const h=yt.serializedGetStringValueByKey(s,"color");let u=yt.serializedGetNumericalValueByKey(s,"width"),p=yt.serializedGetNumericalValueByKey(s,"height");const f=yt.serializedSegmentsHasExact(s,"avg"),b=yt.serializedSegmentsHasExact(s,"min"),w=yt.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let C;if(a==="point"){if(o===void 0||l===void 0)return;C=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||u===void 0||p===void 0)return;u<0&&(u=0),u+l>this.parent.width-1&&(u=this.parent.width-l-1),p<0&&(p=0),p+o>this.parent.height-1&&(p=this.parent.height-o-1),C=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,u+l,p+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,u+l,p+o,h,!1)}if(C!==void 0){if(C instanceof _r?f&&C.graph.setAvgActivation(!0):C instanceof Ur&&(f&&C.graph.setAvgActivation(!0),b&&C.graph.setMinActivation(!0),w&&C.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const P=this.getNextFreeSlotNumber();P!==void 0&&this.assignSlot(P,C)}else i!==void 0&&this.assignSlot(i,C);return C}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(ys,"MAX_SLOTS",7),ys),fm=class extends Pt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},gm=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",1);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Cu={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},mm=class extends Pt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new te);c(this,"callbacksPlay",new te);c(this,"callbacksPause",new te);c(this,"callbacksStop",new te);c(this,"callbacksEnd",new te);c(this,"callbacksChangeFrame",new te);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new gm(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Cu[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),Se(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);console.log(e),this.setRelativeTime(e.relative)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(l=>l.relative<e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},ym=class extends Pt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new te)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Da=class{},Et,vm=(Et=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(Et.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Et.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Et.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Et.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Et.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Et.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Et.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Et.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(Et,"CLASS_BASE","thermalImageRoot"),c(Et,"CLASS_BUILT",Et.CLASS_BASE+"__built"),c(Et,"CLASS_HYDRATED",Et.CLASS_BASE+"__mounted"),c(Et,"CLASS_HOVER",Et.CLASS_BASE+"__hover"),Et),bm=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new te),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},wm=class extends Da{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new bm(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new vm(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),u=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[u]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},Ra=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){var r,e;this._mounted&&((r=this.instance.dom)==null?void 0:r.root)!==null&&(this._mounted=!1,(e=this.instance.dom)==null||e.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},qr=class qo{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=qo.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=qo.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},xm=class extends Ra{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=qr.createVisibleLayer(),this._url&&(this.image=qr.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Sm=class extends Ra{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=qr.createCanvasContainer(),this.canvas=qr.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof _r?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,u)=>{const f=new OffscreenCanvas(a,o).getContext("2d"),b=n-s,w=u.map(A=>({id:A[1],type:A[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let A=0;A<a;A++)for(let R=0;R<o;R++){const Y=A+R*a,F=l[Y];let ie=F;ie<s&&(ie=s),ie>n&&(ie=n);const E=(ie-s)/b,I=Math.round(255*E),M=h[I];f.fillStyle=M,f.fillRect(A,R,1,1);const j=(T,z,D,q,he,k)=>{const V=D+he/2,ue=q+k/2,se=(T-V)/(he/2),Le=(z-ue)/(k/2);return se*se+Le*Le<=1};u.forEach((T,z)=>{const D=w[z],[q,he,k,V,ue,se]=T;q==="point"?A===V&&R===k&&(D.avg.value=F):q==="rectangle"?A>=V&&A<V+ue&&R>=k&&R<k+se&&(F<D.min.value&&(D.min.value=F),F>D.max.value&&(D.max.value=F),D.avg.count=D.avg.count+1,D.avg.sum=D.avg.sum+F):q==="ellipsis"&&j(A,R,V,k,a,o)&&(F<D.min.value&&(D.min.value=F),F>D.max.value&&(D.max.value=F),D.avg.count=D.avg.count+1,D.avg.sum=D.avg.sum+F)})}const C=w.map(A=>({id:A.id,min:A.min.value!==1/0?A.min.value:void 0,max:A.max.value!==-1/0?A.max.value:void 0,avg:A.type==="point"?A.avg.value:A.avg.sum/A.avg.count})),P=f.getImageData(0,0,a,o);return{image:await createImageBitmap(P),stats:C}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},$m=class extends Ra{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=qr.createCursorLayerRoot(),this.center=qr.createCursorLayerCenter(),this.axisX=qr.createCursorLayerX(),this.axisY=qr.createCursorLayerY(),this.label=qr.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},km=class extends Ra{constructor(e){super(e);c(this,"container");this.container=qr.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Ou=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Ti=class extends Ou{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=vn.fromService(t,i,s,n);return t.files.addFile(a),a}},kt,Au=(kt=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new te)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=kt.FONT_SIZE_NORMAL,s="normal",n=kt.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=kt.FONT_SIZE_NORMAL,i.style.fontFamily=kt.FONT_FAMILY,i.style.color=kt.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){Yg.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const u=e.clientWidth,p=60,b=u/(p+40),w=document.createElement("div");w.style.width="100%",w.style.position="relative",w.style.paddingLeft=p/2+"px",w.style.paddingRight=p/2+"px",w.style.boxSizing="border-box";const C=document.createElement("div");C.style.width="100%",C.style.position="relative",C.style.backgroundColor=o,C.style.height="30px";const P=i-t,B=s-t,A=n-t,R=B/P*100,Y=A/P*100,F=document.createElement("div");F.style.position="absolute",F.style.backgroundImage=a,F.style.height="100%",F.style.top="0px",F.style.left=R+"%",F.style.width=Y-R+"%",C.appendChild(F),w.appendChild(C);const ie=document.createElement("div");ie.style.width="100%",ie.style.height="40px",ie.style.position="relative";const $=(M,j=!1,T,z)=>{const D=M/P*100,q=document.createElement("div");q.style.position="absolute",q.style.top="0px",q.style.left=`calc( ${D}% - ${p/2}px )`,q.style.width=p+"px",q.style.textAlign="center",q.style.lineHeight="0px";const he=document.createElement("div"),k=document.createElement("div"),V=document.createElement("div"),ue=7,se=ue+"px";he.innerHTML=(t+M).toFixed(2)+" °C",he.style.display="inline-block",he.style.fontSize=kt.FONT_SIZE_SMALL,he.style.lineHeight="1em",he.style.padding="3px",he.style.position="relative",k.style.width="100%",k.style.height=se,k.style.textAlign="center",k.style.position="relative",k.style.lineHeight="0px",V.style.content="",V.style.display="inline-block",j?(V.style.width=ue*2+"px",V.style.height=ue*2+"px",V.style.rotate="45deg",V.style.backgroundColor=z,he.style.backgroundColor=z,he.style.zIndex="99",he.style.color=T):(V.style.width="1px",V.style.height=se,V.style.backgroundColor=T),k.appendChild(V),q.appendChild(k),q.appendChild(he),ie.appendChild(q)};if(h){const M=document.createElement("div");M.style.position="absolute",M.style.border=`2px solid ${l}`,M.style.height="100%",M.style.boxSizing="border-box";const j=(h.from-t)/P*100,T=(h.to-t)/P*100-j;M.style.left=j+"%",M.style.width=T+"%",C.appendChild(M),$(h.from-t,!0,"white",o),$(h.to-t,!0,"white",o)}const E=P/b;let I=0;for(;I<=P;)$(I,!1,l,"transparent"),I=I+E;return $(B,!0,"white",l),$(A,!0,"white",l),w.appendChild(ie),w}},c(kt,"FONT_SIZE_NORMAL","16px"),c(kt,"FONT_SIZE_SMALL","12px"),c(kt,"COLOR_BASE","black"),c(kt,"COLOR_GRAY","gray"),c(kt,"COLOR_LIGHT","lightgray"),c(kt,"WIDTH","1600px"),c(kt,"FONT_FAMILY","sans-serif"),c(kt,"GAP_BASE","10px"),c(kt,"GAP_SMALL","5px"),c(kt,"DEBUG",!1),kt),Wt,_m=(Wt=class extends Au{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...Wt.DEFAULT_PARAMS,...t,fileName:i}}onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i);s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),n.service.loadFile(this.file.thermalUrl).then(async o=>{if(o instanceof Ti){this.localInstance=await o.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){const h=this.file.group.registry.minmax.value.min,u=this.file.group.registry.minmax.value.max,p=h!==this.file.meta.current.min||u!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,u,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",p)),this.localInstance.mountToDom(this.container);const f=this.localInstance;if(f.dom&&f.dom.visibleLayer&&(f.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const b=document.createElement("table");b.style.width="100%",b.style.borderCollapse="collapse";const w=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(C=>{const P=this.createElementWithText("th",C,Wt.FONT_SIZE_SMALL,void 0,Wt.COLOR_GRAY);P.style.padding=Wt.GAP_SMALL+"px",P.style.textAlign="left",w.appendChild(P)}),b.appendChild(w),this.container.appendChild(b),this.file.slots.forEveryExistingSlot((C,P)=>{var A;const B=(A=this.localInstance)==null?void 0:A.slots.createFromSerialized(C.serialized,P);if(B){const R=document.createElement("tr"),Y=this.createElementWithText("td",C.analysis.name,Wt.FONT_SIZE_SMALL,void 0,C.analysis.initialColor);Y.style.borderTop=`1px solid ${Wt.COLOR_LIGHT}`,Y.style.padding=`${Wt.GAP_SMALL}px 0px ${Wt.GAP_SMALL} 0px`,R.appendChild(Y);const F=(ie,$)=>{const E=this.createElementWithText("td",$?$.toFixed(3)+" °C":"",Wt.FONT_SIZE_SMALL,void 0);E.style.borderTop=`1px solid ${Wt.COLOR_LIGHT}`,E.style.paddingTop=`${Wt.GAP_SMALL}px`,E.style.paddingBottom=`${Wt.GAP_SMALL}px`,R.appendChild(E)};C.analysis instanceof Ur?(F(C.analysis.initialColor,B.avg),F(C.analysis.initialColor,B.min),F(C.analysis.initialColor,B.max)):C.analysis instanceof _r&&(F(C.analysis.initialColor,B.avg),F(C.analysis.initialColor),F(C.analysis.initialColor)),b.appendChild(R)}})}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},1e3)}}})}},c(Wt,"DEFAULT_PARAMS",{fileName:"sth",width:1200,showAnalysis:!0,backgroundColor:"white"}),Wt),vn=class Eu extends wm{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new La(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new _m(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Sm(this),visibleLayer:new xm(this,this.visibleUrl),cursorLayer:new $m(this),listenerLayer:new km(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new fm(this,void 0),this.timeline=new mm(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new ym(this,!1),this.analysis=new cm(this,[]),this.analysisData=new dm(this),this.slots=new Pu(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new Eu(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},Pm=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof Ur&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof Ur&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof Ur&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof Ur?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:lt.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof Ur){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=yn({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=vu(s)(i);bu(s)(n)}},et,Cm=(et=class extends Au{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=et.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,et.FONT_SIZE_SMALL,"normal",et.COLOR_BASE);l.style.paddingTop=et.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,et.FONT_SIZE_SMALL,void 0,et.COLOR_GRAY);s.style.paddingTop=et.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${lt.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,et.FONT_SIZE_SMALL,void 0,et.COLOR_GRAY);return n.style.paddingTop=et.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=et.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${lt.human(t.timeline.currentStep.absolute)}`,et.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(u=>u.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const u=document.createElement("tr");["","AVG","MIN","MAX"].forEach(p=>{const f=this.createElementWithText("th",p,et.FONT_SIZE_SMALL,void 0,et.COLOR_GRAY);f.style.padding=et.GAP_SMALL+"px",f.style.textAlign="left",u.appendChild(f)}),h.appendChild(u),a.appendChild(h),l.slots.forEveryExistingSlot((p,f)=>{const b=t.slots.createFromSerialized(p.serialized,f);if(b){const w=document.createElement("tr"),C=this.createElementWithText("td",p.analysis.name,et.FONT_SIZE_SMALL,void 0,p.analysis.initialColor);C.style.borderTop=`1px solid ${et.COLOR_LIGHT}`,C.style.padding=`${et.GAP_SMALL}px 0px ${et.GAP_SMALL} 0px`,w.appendChild(C);const P=(B,A)=>{const R=this.createElementWithText("td",A?A.toFixed(3)+" °C":"",et.FONT_SIZE_SMALL,void 0);R.style.borderTop=`1px solid ${et.COLOR_LIGHT}`,R.style.paddingTop=`${et.GAP_SMALL}px`,R.style.paddingBottom=`${et.GAP_SMALL}px`,w.appendChild(R)};p.analysis instanceof Ur?(P(p.analysis.initialColor,b.avg),P(p.analysis.initialColor,b.min),P(p.analysis.initialColor,b.max)):p.analysis instanceof _r&&(P(p.analysis.initialColor,b.avg),P(p.analysis.initialColor),P(p.analysis.initialColor)),h.appendChild(w)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(u=>u.thermalUrl);let l;o.forEach(u=>{l=n.batch.request(u,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",u=>{const p=100/t.columns;u.forEach(f=>{f instanceof vn&&this.buildInstance(f,p,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...et.DEFAULT_PROPS,fileName:i}:{...et.DEFAULT_PROPS,...t,fileName:i}}},c(et,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),et),Di,Om=(Di=class extends Pt{constructor(){super(...arguments);c(this,"onSlotSync",new te);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){if(i===1)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(Di.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(Di.LISTENER_KEY),n.delete(Di.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const u=(a=n.slots.getSlot(l))==null?void 0:a.serialized,p=h.serialized;if(u!==p)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(p);else{const f=n.slots.createFromSerialized(p,l);f==null||f.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Pm(this)),this._csv}get png(){return this._png||(this._png=new Cm(this)),this._png}},c(Di,"LISTENER_KEY","__analysis__sync"),Di),Am=class extends Pt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof vn?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},Em=class extends xu{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},Lm=class extends Pt{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new te);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new te);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new te);c(this,"_duration",0);c(this,"onDurationChanged",new te);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof vn);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},Dm=class extends Da{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new Em(this,void 0));c(this,"files",new Am(this,[]));c(this,"cursorPosition",new Jg(this,void 0));c(this,"analysisSync",new Om(this,!1));c(this,"_playback");c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});c(this,"filters",new La(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get tool(){return this.registry.manager.tool}get playback(){return this._playback||(this._playback=new Lm(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}getInstances(){return this.files.value}startBatch(e){return this.registry.batch.getBatchById(e)}},gi=class Lu extends Ou{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new Lu(e.url,e.code,e.message)}},Du=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},Rm=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(I,M)=>{const j=I.getBigInt64(M,!0),T=62135596800000n,z=10000n,D=24n*60n*60n*1000n*z,q=0x4000000000000000n,he=0x8000000000000000n;let V=j&0x3fffffffffffffffn;j&he&&(V>q-D&&(V-=q),V<0&&(V+=D));const se=V/z-T;return Number(se)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,u=l+h,p=r.slice(25),f=p.byteLength/u,b=I=>{const M=I*u,j=M+u,T=p.slice(M,j),z=new DataView(T),D=z.getFloat32(8,!0),q=z.getFloat32(12,!0),he=n(z,0),k=z.getFloat32(24,!0),V=z.getFloat32(28,!0);return{timestamp:he,min:D,max:q,emissivity:k,reflectedKelvins:V}},w=[];for(let I=0;I<f;I++){const M=b(I);w.push(M)}const C={emissivity:0,reflectedKelvins:0};let P=1/0,B=-1/0;const A=[];w.forEach(I=>{C.emissivity=C.emissivity+I.emissivity,C.reflectedKelvins=C.reflectedKelvins+I.reflectedKelvins,I.min<P&&(P=I.min),I.max>B&&(B=I.max),A.push(I.timestamp)});const R=A[0],Y=[];A.forEach((I,M)=>{const j=A[M+1];let T=0;j===void 0&&(T=0),T=j-I;const z=I-R;Y.push({absolute:I,relative:z,offset:isNaN(T)?0:T,index:M})});const F=w[w.length-1].timestamp-w[0].timestamp,ie=F/f,$=1e3/ie,E=w[0].timestamp;return{width:t,height:i,timestamp:E,bytesize:s,frameCount:f,duration:F,frameInterval:ie,fps:$,timeline:Y,min:P,max:B,averageEmissivity:C.emissivity/w.length,averageReflectedKelvins:C.reflectedKelvins/w.length}},Mm=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,u=r.slice(25),p=e*h,f=p+h;return{array:u.slice(p,f),dataType:i}},Tm=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let u=i&0x3fffffffffffffffn;i&l&&(u>o-a&&(u-=o),u<0&&(u+=a));const f=u/n-s,b=Number(f),w=t.getFloat32(8,!0),C=t.getFloat32(12,!0),P=t.getFloat32(24,!0),B=t.getFloat32(28,!0),A=r.slice(57);let R=[];if(e===0){const Y=new Uint16Array(A),F=Math.abs(w-C),ie=65535;Y.forEach($=>{const E=$/ie;R.push(w+F*E)})}else e===1&&(R=Array.from(new Float32Array(A)));return{timestamp:b,min:w,max:C,emissivity:P,reflectedKelvins:B,pixels:R}},Im=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(B,A)=>{const R=B.getBigInt64(A,!0),Y=62135596800000n,F=10000n,ie=24n*60n*60n*1000n*F,$=0x4000000000000000n,E=0x8000000000000000n;let M=R&0x3fffffffffffffffn;R&E&&(M>$-ie&&(M-=$),M<0&&(M+=ie));const T=M/F-Y;return Number(T)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,u=s*n*l,p=h+u,f=r.slice(25),b=f.byteLength/p,w={},C=B=>{const A=B*p,R=A+p,Y=f.slice(A,R),F=new DataView(Y),ie=a(F,0),$=F.getFloat32(8,!0),I=F.getFloat32(12,!0)-$,j=57+t*l*s+e*l;let T=0;if(o===1)T=F.getFloat32(j,!0);else if(o===0){const q=F.getInt16(j,!0)/65535;T=$+I*q}return{timestamp:ie,temperature:T}};let P=0;for(let B=0;B<b;B++){const A=C(B);P===0&&(P=A.timestamp),w[A.timestamp-P]=A.temperature}return w},Um=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(R,Y)=>{const F=R.getBigInt64(Y,!0),ie=62135596800000n,$=10000n,E=24n*60n*60n*1000n*$,I=0x4000000000000000n,M=0x8000000000000000n;let T=F&0x3fffffffffffffffn;F&M&&(T>I-E&&(T-=I),T<0&&(T+=E));const D=T/$-ie;return Number(D)},h=n.getUint8(15);let u=2;h===1&&(u=4);const p=57,f=a*o*u,b=p+f,w=r.slice(25),C=w.byteLength/b,P={},B=R=>{const Y=R*b,F=Y+b,ie=w.slice(Y,F),$=new DataView(ie),E=l($,0),I=$.getFloat32(8,!0),j=$.getFloat32(12,!0)-I,T=57,z=e,D=e+i,q=t,he=t+s;let k=1/0,V=-1/0,ue=0,se=0;for(let qe=q;qe<=he;qe++){const at=qe*a;for(let ht=z;ht<=D;ht++){const oe=T+(at+ht)*u;let de=NaN;if(h===1)de=$.getFloat32(oe,!0);else{const tt=$.getInt16(oe,!0)/65535;de=I+j*tt}de<k&&(k=de),de>V&&(V=de),se+=de,ue++}}const Le={min:k,max:V,avg:se/ue,count:ue};return{timestamp:E,result:Le}};let A=0;for(let R=0;R<C;R++){const Y=B(R);A===0&&(A=Y.timestamp),P[Y.timestamp-A]=Y.result}return P},zm=async r=>{let e=[];const t=async P=>{const B=new DataView(P.slice(0,25)),A=B.getUint8(15),R=B.getUint16(17,!0),Y=B.getUint16(19,!0),F=A===1?4:2,ie=57,$=R*Y*F,E=ie+$,I=P.slice(25),M=I.byteLength/E;let j=[];for(let T=0;T<M;T++){const D=T*E+57,q=D+$,he=I.slice(D,q);A===0||A===1&&(j=j.concat(Array.from(new Float32Array(he))))}return j};(await Promise.all(r.map(P=>t(P)))).forEach(P=>{e=e.concat(P)}),e.sort((P,B)=>P-B);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,l=a/o,h=[];let u=[...e];for(let P=0;P<o;P++){const B=s+l*P,A=B+l,R=u.findIndex(E=>E>A),F=u.slice(0,R-1).length,ie=F/e.length*100,$={from:B,to:A,count:F,percentage:ie};h.push($),u=u.slice(R)}const p=[...h].sort((P,B)=>P.percentage-B.percentage),f=p[0].percentage,b=p[p.length-1].percentage,w=Math.abs(f-b);return h.map(P=>({...P,height:P.percentage/w*100}))},Fm=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},jm=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(Y,F)=>{const ie=Y.getBigInt64(F,!0),$=62135596800000n,E=10000n,I=24n*60n*60n*1000n*E,M=0x4000000000000000n,j=0x8000000000000000n;let z=ie&0x3fffffffffffffffn;ie&j&&(z>M-I&&(z-=M),z<0&&(z+=I));const q=z/E-$;return Number(q)},h=n.getUint8(15);let u=2;h===1&&(u=4);const p=57,f=a*o*u,b=p+f,w=r.slice(25),C=w.byteLength/b,P={},B=(Y,F)=>{const ie=e+i/2,$=t+s/2,E=(Y-ie)/(i/2),I=(F-$)/(s/2);return E*E+I*I<=1},A=Y=>{const F=Y*b,ie=F+b,$=w.slice(F,ie),E=new DataView($),I=l(E,0),M=E.getFloat32(8,!0),T=E.getFloat32(12,!0)-M,z=57,D=e,q=e+i,he=t,k=t+s;let V=1/0,ue=-1/0,se=0,Le=0;for(let at=he;at<=k;at++){const ht=at*a;for(let oe=D;oe<=q;oe++)if(B(oe,at)){const de=z+(ht+oe)*u;let Ae=NaN;if(h===1)Ae=E.getFloat32(de,!0);else{const je=E.getInt16(de,!0)/65535;Ae=M+T*je}Ae<V&&(V=Ae),Ae>ue&&(ue=Ae),Le+=Ae,se++}}const qe={min:V,max:ue,avg:Le/se,count:se};return{timestamp:I,result:qe}};let R=0;for(let Y=0;Y<C;Y++){const F=A(Y);R===0&&(R=F.timestamp),P[F.timestamp-R]=F.result}return P},Nm=[{extension:"lrc",minme:"application/octet-stream"}],Wm={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Nm,is:Fm,baseInfo:Rm,getFrameSubset:Mm,frameData:Tm,registryHistogram:zm,pointAnalysisData:Im,rectAnalysisData:Um,ellipsisAnalysisData:jm},Ru=Object.freeze(Wm),Hm={LrcParser:Ru},Mu=Object.values(Hm),Tu=(r,e)=>{const t=Mu.find(i=>i.is(r,e));if(t===void 0)throw new Du(2,e,`No parser found for '${e}'.`);return t},Iu=Mu.map(r=>r.extensions),Bm=Iu.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Vm=class Uu{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new Uu(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new gi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=Tu(i,this.thermalUrl);return this.pocessTheService(new Ti(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof Du)return this.pocessTheService(gi.fromError(s));throw s}}pocessTheService(e){return e}},Gm=class zu{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new te);c(this,"onMouseLeave",new te);c(this,"onDrop",new te);c(this,"onProcessingEnd",new te);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new zu(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Bm,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},Ym=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new xl(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=Tu(e,r.name);return new Ti(this,e,t,r.name)}catch(e){return new gi(r.name,3,e.message)}}handleDropzone(r){return Gm.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=Vm.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},qm=class extends Pt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},Xm=class extends Pt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},vc=class Xo{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new te);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Xo(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Xo(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof Ti?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},Km=class{constructor(r){c(this,"onBatchComplete",new te);c(this,"set",new Set);this.registry=r}get size(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=vc.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=vc.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.size===0&&this.registry.loading.markAsLoaded()}},Jm=class extends Pt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},Zm=class extends Pt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new Dm(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Qm=class extends Pt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((b,w)=>{const C=w.reduce((P,B)=>[...P,...B],[]);return[...b,...C]},[]).sort((b,w)=>b-w);const h=n/a;let u=i+h;const p=new Map;let f=0;for(;u!==!1;){const b=l.findIndex(P=>P>u),w=l.slice(0,b).length;p.set(u-h/2,w),f+=w,l=l.slice(b);const C=u+h;u=C<s?C:!1}return{result:p,resultCount:f}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(Ru.registryHistogram,[t]);this.value=i}},ey=class extends Pt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},ty=class extends xu{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},ry=class extends Da{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new Zm(this,[]));c(this,"_batch");c(this,"onProcessingStart",new te);c(this,"onProcessingEnd",new te);c(this,"opacity",new Jm(this,1));c(this,"minmax",new ty(this,void 0));c(this,"loading",new ey(this,!1));c(this,"range",new Zg(this,void 0));c(this,"histogram",new Qm(this,[]));c(this,"palette");c(this,"filters",new La(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof Ti?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset(),this.loading.markAsLoading();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Ti&&await s.createInstance(i),this.loading.markAsLoaded(),this.postLoadedProcessing()}get batch(){return this._batch||(this._batch=new Km(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},Ma=class{constructor(r){c(this,"active",!1);this.manager=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},wl=class extends Ma{},iy=class extends wl{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=Pu.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},sy=class extends wl{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},ny=class extends wl{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},ay=class extends Ma{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},Fu=class extends Ma{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},oy=[Fu,ny,sy,iy,ay],ly=r=>{const e=oy.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},hy=class extends Pt{constructor(e,t){super(e,t);c(this,"_tools",ly(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof Ma?this.value=e:this.value=this.tools[e]}},xl=class extends Da{constructor(e,t){super();c(this,"id");c(this,"service",new Ym(this));c(this,"registries",{});c(this,"palette",new im(this,"jet"));c(this,"smooth",new Xm(this,!1));c(this,"graphSmooth",new qm(this,!1));c(this,"tool",new hy(this,new Fu(this)));c(this,"pool");c(this,"filters",new La(this));this.pool=e||Kg.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new ry(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}},cy=Object.defineProperty,uy=Object.getOwnPropertyDescriptor,dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?uy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cy(e,t,s),s};const bc=["ready","select"],dy={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Kt=class extends mr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new te,this.left=0,this.top=0,this.w=0,this.h=0}render(){return m`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Sf(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(bc,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(dy[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!bc.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await nc({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(nc).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Kt.styles=pe`
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
  `;dr([d({type:String,reflect:!0})],Kt.prototype,"type",2);dr([d({type:Array})],Kt.prototype,"events",2);dr([d({type:Object,hasChanged:()=>!0})],Kt.prototype,"options",2);dr([d({type:Array})],Kt.prototype,"cols",2);dr([d({type:Array})],Kt.prototype,"rows",2);dr([d({type:String})],Kt.prototype,"data",2);dr([d({type:Object})],Kt.prototype,"view",2);dr([d({type:Array})],Kt.prototype,"selection",2);dr([d({type:Object})],Kt.prototype,"_data",2);dr([d({type:Number,reflect:!0})],Kt.prototype,"left",2);dr([d({type:Number,reflect:!0})],Kt.prototype,"top",2);dr([d({type:Number,reflect:!0})],Kt.prototype,"w",2);dr([d({type:Number,reflect:!0})],Kt.prototype,"h",2);Kt=dr([J("thermal-chart")],Kt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=()=>new py;class py{}const zo=new WeakMap,be=Aa(class extends Cp{render(r){return O}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),O}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=zo.get(e);t===void 0&&(t=new WeakMap,zo.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=zo.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var S=(r=>(r.loading="loading",r.file="file",r.next="next",r.prev="prev",r.back="back",r.close="close",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.numfiles="numfiles",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.showingfolder="showingfolder",r.showingfolders="showingfolders",r.and="and",r.or="or",r.doyouwanttoadd="doyouwanttoadd",r.youmayalsoadd="youmayalsoadd",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.groupped="groupped",r.bydays="bydays",r.byhours="byhours",r.byweeks="byweeks",r.bymonths="bymonths",r.byyears="byyears",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.reload="reload",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r.remotefoldersbrowser="remotefoldersbrowser",r))(S||{});const fy=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],wc=Object.fromEntries(fy.map(r=>[r.code,r]));var gy=Object.defineProperty,my=Object.getOwnPropertyDescriptor,ju=(r,e,t,i)=>{for(var s=i>1?void 0:i?my(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gy(e,t,s),s};let Zs=class extends mr{constructor(){super(),this.dialogRef=me(),this.closeButtonRef=me(),this.invokerRef=me()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return m`
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
                        ${_(S.close)}
                    </thermal-button>
                </div>
                
            
            </dialog>
        `}};Zs.shadowRootOptions={...mr.shadowRootOptions,mode:"open"};Zs.styles=pe`

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

        
    
    `;ju([d({type:String,reflect:!0})],Zs.prototype,"label",2);Zs=ju([J("thermal-dialog")],Zs);let Xn;const yy=new Uint8Array(16);function vy(){if(!Xn&&(Xn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Xn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Xn(yy)}const Nt=[];for(let r=0;r<256;++r)Nt.push((r+256).toString(16).slice(1));function by(r,e=0){return Nt[r[e+0]]+Nt[r[e+1]]+Nt[r[e+2]]+Nt[r[e+3]]+"-"+Nt[r[e+4]]+Nt[r[e+5]]+"-"+Nt[r[e+6]]+Nt[r[e+7]]+"-"+Nt[r[e+8]]+Nt[r[e+9]]+"-"+Nt[r[e+10]]+Nt[r[e+11]]+Nt[r[e+12]]+Nt[r[e+13]]+Nt[r[e+14]]+Nt[r[e+15]]}const wy=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),xc={randomUUID:wy};function xy(r,e,t){if(xc.randomUUID&&!e&&!r)return xc.randomUUID();r=r||{};const i=r.random||(r.rng||vy)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,by(i)}var Sy=Object.defineProperty,$y=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Sy(e,t,s),s};const sh=class sh extends mr{constructor(){super(...arguments),this.locale=gt.language}get UUID(){return this._UUID===void 0&&(this._UUID=xy()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),gt.on("languageChanged",e=>{this.locale=e})}};sh.shadowRootOptions={...mr.shadowRootOptions,mode:"open"};let nt=sh;$y([x()],nt.prototype,"locale");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nu=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Sc=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Nu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ky{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _y=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class $c extends ky{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:u}]of this.subscriptions)l.has(h)||(l.add(h),u.dispatchEvent(new Nu(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new _y(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new $c(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new $c(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Sc(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Sc(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}const Wu="tour-context",Hu="tour-step",Bu="tourable-element";var Py=Object.defineProperty,Vu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Py(e,t,s),s};class rs extends nt{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}Vu([d({type:String})],rs.prototype,"tour");Vu([ae({context:Bu})],rs.prototype,"tourableElement");var Cy=Object.defineProperty,Oy=Object.getOwnPropertyDescriptor,Ta=(r,e,t,i)=>{for(var s=i>1?void 0:i?Oy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cy(e,t,s),s};let mi=class extends rs{constructor(){super(...arguments),this.tourableElementRef=me(),this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return m`
            <button class="${this.variant}" ${be(this.tourableElementRef)} part="btn">
                <slot></slot>
            </button>
        `}};mi.VARIANTS=["slate","primary","foreground","background"];mi.shadowRootOptions={...mr.shadowRootOptions,mode:"open"};mi.styles=pe`

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
    
    `;Ta([d({type:String,converter:{fromAttribute:r=>{if(mi.VARIANTS.includes(r))return r},toAttribute:r=>r},reflect:!1})],mi.prototype,"variant",2);Ta([d({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],mi.prototype,"interactive",2);Ta([d({type:String})],mi.prototype,"size",2);mi=Ta([J("thermal-button")],mi);const Ii=Math.min,di=Math.max,ma=Math.round,Jr=r=>({x:r,y:r}),Ay={left:"right",right:"left",bottom:"top",top:"bottom"},Ey={start:"end",end:"start"};function Ko(r,e,t){return di(r,Ii(e,t))}function As(r,e){return typeof r=="function"?r(e):r}function yi(r){return r.split("-")[0]}function bn(r){return r.split("-")[1]}function Gu(r){return r==="x"?"y":"x"}function Sl(r){return r==="y"?"height":"width"}function wn(r){return["top","bottom"].includes(yi(r))?"y":"x"}function $l(r){return Gu(wn(r))}function Ly(r,e,t){t===void 0&&(t=!1);const i=bn(r),s=$l(r),n=Sl(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=ya(a)),[a,ya(a)]}function Dy(r){const e=ya(r);return[Jo(r),e,Jo(e)]}function Jo(r){return r.replace(/start|end/g,e=>Ey[e])}function Ry(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function My(r,e,t,i){const s=bn(r);let n=Ry(yi(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Jo)))),n}function ya(r){return r.replace(/left|right|bottom|top/g,e=>Ay[e])}function Ty(r){return{top:0,right:0,bottom:0,left:0,...r}}function kl(r){return typeof r!="number"?Ty(r):{top:r,right:r,bottom:r,left:r}}function ws(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function kc(r,e,t){let{reference:i,floating:s}=r;const n=wn(e),a=$l(e),o=Sl(a),l=yi(e),h=n==="y",u=i.x+i.width/2-s.width/2,p=i.y+i.height/2-s.height/2,f=i[o]/2-s[o]/2;let b;switch(l){case"top":b={x:u,y:i.y-s.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:p};break;case"left":b={x:i.x-s.width,y:p};break;default:b={x:i.x,y:i.y}}switch(bn(e)){case"start":b[a]-=f*(t&&h?-1:1);break;case"end":b[a]+=f*(t&&h?-1:1);break}return b}const Iy=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:u,y:p}=kc(h,i,l),f=i,b={},w=0;for(let C=0;C<o.length;C++){const{name:P,fn:B}=o[C],{x:A,y:R,data:Y,reset:F}=await B({x:u,y:p,initialPlacement:i,placement:f,strategy:s,middlewareData:b,rects:h,platform:a,elements:{reference:r,floating:e}});u=A??u,p=R??p,b={...b,[P]:{...b[P],...Y}},F&&w<=50&&(w++,typeof F=="object"&&(F.placement&&(f=F.placement),F.rects&&(h=F.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):F.rects),{x:u,y:p}=kc(h,f,l)),C=-1)}return{x:u,y:p,placement:f,strategy:s,middlewareData:b}};async function Yu(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:f=!1,padding:b=0}=As(e,r),w=kl(b),P=o[f?p==="floating"?"reference":"floating":p],B=ws(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(P)))==null||t?P:P.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:u,strategy:l})),A=p==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,R=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),Y=await(n.isElement==null?void 0:n.isElement(R))?await(n.getScale==null?void 0:n.getScale(R))||{x:1,y:1}:{x:1,y:1},F=ws(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:A,offsetParent:R,strategy:l}):A);return{top:(B.top-F.top+w.top)/Y.y,bottom:(F.bottom-B.bottom+w.bottom)/Y.y,left:(B.left-F.left+w.left)/Y.x,right:(F.right-B.right+w.right)/Y.x}}const Uy=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:u=0}=As(r,e)||{};if(h==null)return{};const p=kl(u),f={x:t,y:i},b=$l(s),w=Sl(b),C=await a.getDimensions(h),P=b==="y",B=P?"top":"left",A=P?"bottom":"right",R=P?"clientHeight":"clientWidth",Y=n.reference[w]+n.reference[b]-f[b]-n.floating[w],F=f[b]-n.reference[b],ie=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let $=ie?ie[R]:0;(!$||!await(a.isElement==null?void 0:a.isElement(ie)))&&($=o.floating[R]||n.floating[w]);const E=Y/2-F/2,I=$/2-C[w]/2-1,M=Ii(p[B],I),j=Ii(p[A],I),T=M,z=$-C[w]-j,D=$/2-C[w]/2+E,q=Ko(T,D,z),he=!l.arrow&&bn(s)!=null&&D!==q&&n.reference[w]/2-(D<T?M:j)-C[w]/2<0,k=he?D<T?D-T:D-z:0;return{[b]:f[b]+k,data:{[b]:q,centerOffset:D-q-k,...he&&{alignmentOffset:k}},reset:he}}}),zy=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:C=!0,...P}=As(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const B=yi(s),A=yi(o)===o,R=await(l.isRTL==null?void 0:l.isRTL(h.floating)),Y=f||(A||!C?[ya(o)]:Dy(o));!f&&w!=="none"&&Y.push(...My(o,C,w,R));const F=[o,...Y],ie=await Yu(e,P),$=[];let E=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&$.push(ie[B]),p){const T=Ly(s,a,R);$.push(ie[T[0]],ie[T[1]])}if(E=[...E,{placement:s,overflows:$}],!$.every(T=>T<=0)){var I,M;const T=(((I=n.flip)==null?void 0:I.index)||0)+1,z=F[T];if(z)return{data:{index:T,overflows:E},reset:{placement:z}};let D=(M=E.filter(q=>q.overflows[0]<=0).sort((q,he)=>q.overflows[1]-he.overflows[1])[0])==null?void 0:M.placement;if(!D)switch(b){case"bestFit":{var j;const q=(j=E.map(he=>[he.placement,he.overflows.filter(k=>k>0).reduce((k,V)=>k+V,0)]).sort((he,k)=>he[1]-k[1])[0])==null?void 0:j[0];q&&(D=q);break}case"initialPlacement":D=o;break}if(s!==D)return{reset:{placement:D}}}return{}}}};function qu(r){const e=Ii(...r.map(n=>n.left)),t=Ii(...r.map(n=>n.top)),i=di(...r.map(n=>n.right)),s=di(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function Fy(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>ws(qu(s)))}const jy=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=As(r,e),u=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),p=Fy(u),f=ws(qu(u)),b=kl(o);function w(){if(p.length===2&&p[0].left>p[1].right&&l!=null&&h!=null)return p.find(P=>l>P.left-b.left&&l<P.right+b.right&&h>P.top-b.top&&h<P.bottom+b.bottom)||f;if(p.length>=2){if(wn(t)==="y"){const M=p[0],j=p[p.length-1],T=yi(t)==="top",z=M.top,D=j.bottom,q=T?M.left:j.left,he=T?M.right:j.right,k=he-q,V=D-z;return{top:z,bottom:D,left:q,right:he,width:k,height:V,x:q,y:z}}const P=yi(t)==="left",B=di(...p.map(M=>M.right)),A=Ii(...p.map(M=>M.left)),R=p.filter(M=>P?M.left===A:M.right===B),Y=R[0].top,F=R[R.length-1].bottom,ie=A,$=B,E=$-ie,I=F-Y;return{top:Y,bottom:F,left:ie,right:$,width:E,height:I,x:ie,y:Y}}return f}const C=await n.getElementRects({reference:{getBoundingClientRect:w},floating:i.floating,strategy:a});return s.reference.x!==C.reference.x||s.reference.y!==C.reference.y||s.reference.width!==C.reference.width||s.reference.height!==C.reference.height?{reset:{rects:C}}:{}}}};async function Ny(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=yi(t),o=bn(t),l=wn(t)==="y",h=["left","top"].includes(a)?-1:1,u=n&&l?-1:1,p=As(e,r);let{mainAxis:f,crossAxis:b,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return o&&typeof w=="number"&&(b=o==="end"?w*-1:w),l?{x:b*u,y:f*h}:{x:f*h,y:b*u}}const Wy=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await Ny(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},Hy=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:P=>{let{x:B,y:A}=P;return{x:B,y:A}}},...l}=As(r,e),h={x:t,y:i},u=await Yu(e,l),p=wn(yi(s)),f=Gu(p);let b=h[f],w=h[p];if(n){const P=f==="y"?"top":"left",B=f==="y"?"bottom":"right",A=b+u[P],R=b-u[B];b=Ko(A,b,R)}if(a){const P=p==="y"?"top":"left",B=p==="y"?"bottom":"right",A=w+u[P],R=w-u[B];w=Ko(A,w,R)}const C=o.fn({...e,[f]:b,[p]:w});return{...C,data:{x:C.x-t,y:C.y-i}}}}};function Ia(){return typeof window<"u"}function Es(r){return Xu(r)?(r.nodeName||"").toLowerCase():"#document"}function yr(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function Si(r){var e;return(e=(Xu(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function Xu(r){return Ia()?r instanceof Node||r instanceof yr(r).Node:!1}function zr(r){return Ia()?r instanceof Element||r instanceof yr(r).Element:!1}function Zr(r){return Ia()?r instanceof HTMLElement||r instanceof yr(r).HTMLElement:!1}function _c(r){return!Ia()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof yr(r).ShadowRoot}function xn(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Fr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function By(r){return["table","td","th"].includes(Es(r))}function Ua(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function _l(r){const e=Pl(),t=zr(r)?Fr(r):r;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function Vy(r){let e=Ui(r);for(;Zr(e)&&!xs(e);){if(_l(e))return e;if(Ua(e))return null;e=Ui(e)}return null}function Pl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function xs(r){return["html","body","#document"].includes(Es(r))}function Fr(r){return yr(r).getComputedStyle(r)}function za(r){return zr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function Ui(r){if(Es(r)==="html")return r;const e=r.assignedSlot||r.parentNode||_c(r)&&r.host||Si(r);return _c(e)?e.host:e}function Ku(r){const e=Ui(r);return xs(e)?r.ownerDocument?r.ownerDocument.body:r.body:Zr(e)&&xn(e)?e:Ku(e)}function Zo(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Ku(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=yr(s);if(n){const o=Qo(a);return e.concat(a,a.visualViewport||[],xn(s)?s:[],o&&t?Zo(o):[])}return e.concat(s,Zo(s,[],t))}function Qo(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function Ju(r){const e=Fr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Zr(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=ma(t)!==n||ma(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function Zu(r){return zr(r)?r:r.contextElement}function ms(r){const e=Zu(r);if(!Zr(e))return Jr(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=Ju(e);let a=(n?ma(t.width):t.width)/i,o=(n?ma(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const Gy=Jr(0);function Qu(r){const e=yr(r);return!Pl()||!e.visualViewport?Gy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Yy(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==yr(r)?!1:e}function Qs(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=Zu(r);let a=Jr(1);e&&(i?zr(i)&&(a=ms(i)):a=ms(r));const o=Yy(n,t,i)?Qu(n):Jr(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,u=s.width/a.x,p=s.height/a.y;if(n){const f=yr(n),b=i&&zr(i)?yr(i):i;let w=f,C=Qo(w);for(;C&&i&&b!==w;){const P=ms(C),B=C.getBoundingClientRect(),A=Fr(C),R=B.left+(C.clientLeft+parseFloat(A.paddingLeft))*P.x,Y=B.top+(C.clientTop+parseFloat(A.paddingTop))*P.y;l*=P.x,h*=P.y,u*=P.x,p*=P.y,l+=R,h+=Y,w=yr(C),C=Qo(w)}}return ws({width:u,height:p,x:l,y:h})}function Cl(r,e){const t=za(r).scrollLeft;return e?e.left+t:Qs(Si(r)).left+t}function ed(r,e,t){t===void 0&&(t=!1);const i=r.getBoundingClientRect(),s=i.left+e.scrollLeft-(t?0:Cl(r,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function qy(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=Si(i),o=e?Ua(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=Jr(1);const u=Jr(0),p=Zr(i);if((p||!p&&!n)&&((Es(i)!=="body"||xn(a))&&(l=za(i)),Zr(i))){const b=Qs(i);h=ms(i),u.x=b.x+i.clientLeft,u.y=b.y+i.clientTop}const f=a&&!p&&!n?ed(a,l,!0):Jr(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+u.x+f.x,y:t.y*h.y-l.scrollTop*h.y+u.y+f.y}}function Xy(r){return Array.from(r.getClientRects())}function Ky(r){const e=Si(r),t=za(r),i=r.ownerDocument.body,s=di(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=di(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+Cl(r);const o=-t.scrollTop;return Fr(i).direction==="rtl"&&(a+=di(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function Jy(r,e){const t=yr(r),i=Si(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=Pl();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function Zy(r,e){const t=Qs(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=Zr(r)?ms(r):Jr(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function Pc(r,e,t){let i;if(e==="viewport")i=Jy(r,t);else if(e==="document")i=Ky(Si(r));else if(zr(e))i=Zy(e,t);else{const s=Qu(r);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return ws(i)}function td(r,e){const t=Ui(r);return t===e||!zr(t)||xs(t)?!1:Fr(t).position==="fixed"||td(t,e)}function Qy(r,e){const t=e.get(r);if(t)return t;let i=Zo(r,[],!1).filter(o=>zr(o)&&Es(o)!=="body"),s=null;const n=Fr(r).position==="fixed";let a=n?Ui(r):r;for(;zr(a)&&!xs(a);){const o=Fr(a),l=_l(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||xn(a)&&!l&&td(r,a))?i=i.filter(u=>u!==a):s=o,a=Ui(a)}return e.set(r,i),i}function ev(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?Ua(e)?[]:Qy(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,u)=>{const p=Pc(e,u,s);return h.top=di(p.top,h.top),h.right=Ii(p.right,h.right),h.bottom=Ii(p.bottom,h.bottom),h.left=di(p.left,h.left),h},Pc(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function tv(r){const{width:e,height:t}=Ju(r);return{width:e,height:t}}function rv(r,e,t){const i=Zr(e),s=Si(e),n=t==="fixed",a=Qs(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=Jr(0);if(i||!i&&!n)if((Es(e)!=="body"||xn(s))&&(o=za(e)),i){const f=Qs(e,!0,n,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else s&&(l.x=Cl(s));const h=s&&!i&&!n?ed(s,o):Jr(0),u=a.left+o.scrollLeft-l.x-h.x,p=a.top+o.scrollTop-l.y-h.y;return{x:u,y:p,width:a.width,height:a.height}}function Fo(r){return Fr(r).position==="static"}function Cc(r,e){if(!Zr(r)||Fr(r).position==="fixed")return null;if(e)return e(r);let t=r.offsetParent;return Si(r)===t&&(t=t.ownerDocument.body),t}function rd(r,e){const t=yr(r);if(Ua(r))return t;if(!Zr(r)){let s=Ui(r);for(;s&&!xs(s);){if(zr(s)&&!Fo(s))return s;s=Ui(s)}return t}let i=Cc(r,e);for(;i&&By(i)&&Fo(i);)i=Cc(i,e);return i&&xs(i)&&Fo(i)&&!_l(i)?t:i||Vy(r)||t}const iv=async function(r){const e=this.getOffsetParent||rd,t=this.getDimensions,i=await t(r.floating);return{reference:rv(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function sv(r){return Fr(r).direction==="rtl"}const nv={convertOffsetParentRelativeRectToViewportRelativeRect:qy,getDocumentElement:Si,getClippingRect:ev,getOffsetParent:rd,getElementRects:iv,getClientRects:Xy,getDimensions:tv,getScale:ms,isElement:zr,isRTL:sv},id=Wy,av=Hy,ov=zy,lv=Uy,hv=jy,sd=(r,e,t)=>{const i=new Map,s={platform:nv,...t},n={...s.platform,_c:i};return Iy(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Aa(class extends fl{constructor(r){var e;if(super(r),r.type!==ui.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Ri}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=r=>r??O;var cv=Object.defineProperty,uv=Object.getOwnPropertyDescriptor,Sn=(r,e,t,i)=>{for(var s=i>1?void 0:i?uv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cv(e,t,s),s};let vi=class extends rs{constructor(){super(...arguments),this.dropdownRef=me(),this.invokerRef=me(),this.optionsRef=me(),this.open="close",this.interactive="on"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){sd(this.invokerRef.value,this.optionsRef.value,{middleware:[id(2),ov(),hv(),av()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return m`

            <div class="dropdown" ${be(this.dropdownRef)}>

                <thermal-button 
                    class="${Xt(r)}" 
                    ${be(this.invokerRef)} 
                    @click=${this.toggle.bind(this)} 
                    variant="${re(this.variant)}" 
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
                <div class="dropdown-options" ${be(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>

            <slot> name="tour"</slot>
        
        `}};vi.shadowRootOptions={...mr.shadowRootOptions,mode:"open"};vi.styles=pe`

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
    
    `;Sn([Lr({slot:"option"})],vi.prototype,"_options",2);Sn([d({type:String,reflect:!0})],vi.prototype,"open",2);Sn([d({type:String,reflect:!0,attribute:!0}),x()],vi.prototype,"interactive",2);Sn([x(),d({type:String,reflect:!0,attribute:!0})],vi.prototype,"variant",2);vi=Sn([J("thermal-dropdown")],vi);var dv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,Fa=(r,e,t,i)=>{for(var s=i>1?void 0:i?pv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dv(e,t,s),s};let Ss=class extends mr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=me(),this.contentRef=me(),this.rulerContentRef=me()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return m`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${be(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${be(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${be(this.contentRef)}>

                    ${this.collapsed===!1?m`
                        <slot></slot>    
                    `:O}
                
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
            `:O}
        
        `}};Ss.styles=pe`

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

    `;Fa([x()],Ss.prototype,"collapsed",2);Fa([x()],Ss.prototype,"lastContentWidth",2);Fa([x()],Ss.prototype,"drawerRef",2);Ss=Fa([J("thermal-bar")],Ss);var fv=Object.defineProperty,gv=Object.getOwnPropertyDescriptor,Dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?gv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fv(e,t,s),s};let or=class extends nt{constructor(){super(...arguments),this.language=gt.language,this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=me(),this.contentRef=me()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),gt.on("languageChanged",()=>{this.language=gt.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,o=n-175,l=a-0,h=this.contentRef.value.offsetHeight,u=4/3;let p=0,f=0;h<o?(console.log("priorita šířky"),p=l,f=p/u):(console.log("priorita výšky"),f=o,p=f*u),this.contentRef.value.setAttribute("style",`width: ${p}px !important; height: ${f}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return m`

        <div class="container ${this.dark?"dark":"normal"}" ${be(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?m`
            <div class="bar">

                <slot name="label">
                    ${this.label?m`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`:O}
                </slot>

                <slot name="bar"></slot>

                <slot name="close"></slot>

                <thermal-dropdown >

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(r=>m`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{gt.changeLanguage(r),this.language=r}}
                            >${wc[r].flag} ${wc[r].name}</thermal-button>
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
                `:O}

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
                            <div class="credits-field">${_(S.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:O}

                    ${this.author?m`<div>
                            <div class="credits-field">${_(S.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:O}

                    ${this.license?m`<div>
                            <div class="credits-field">${_(S.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:O}

                </div>`:O}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};or.styles=pe`

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
    
    `;Dr([x()],or.prototype,"language",2);Dr([Lr({slot:"bar",flatten:!0})],or.prototype,"barElements",2);Dr([Lr({slot:"pre",flatten:!0})],or.prototype,"preElements",2);Dr([Lr({slot:"content",flatten:!0})],or.prototype,"contentElements",2);Dr([d({type:String,reflect:!0})],or.prototype,"fullscreen",2);Dr([d({type:String,reflect:!0,attribute:!0})],or.prototype,"showfullscreen",2);Dr([d({type:String,reflect:!0,attribute:!0})],or.prototype,"dark",2);Dr([d()],or.prototype,"author",2);Dr([d()],or.prototype,"recorded",2);Dr([d()],or.prototype,"license",2);Dr([d()],or.prototype,"label",2);or=Dr([J("thermal-app")],or);var mv=Object.defineProperty,yv=Object.getOwnPropertyDescriptor,Ol=(r,e,t,i)=>{for(var s=i>1?void 0:i?yv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mv(e,t,s),s};let en=class extends mr{render(){return m`

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
        
        `}};en.styles=pe`
    
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

    `;Ol([d({type:String})],en.prototype,"label",2);Ol([d({type:String})],en.prototype,"hint",2);en=Ol([J("thermal-field")],en);var vv=Object.defineProperty,bv=Object.getOwnPropertyDescriptor,Ls=(r,e,t,i)=>{for(var s=i>1?void 0:i?bv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vv(e,t,s),s};let bi=class extends nt{render(){return O}};Ls([d({type:String,reflect:!0,attribute:!0})],bi.prototype,"thermal",2);Ls([d({type:String,reflect:!0,attribute:!0})],bi.prototype,"visible",2);Ls([d({type:String,reflect:!0,attribute:!0})],bi.prototype,"author",2);Ls([d({type:String,reflect:!0,attribute:!0})],bi.prototype,"note",2);Ls([d({type:String,reflect:!0,attribute:!0})],bi.prototype,"label",2);bi=Ls([J("time-entry")],bi);const wv=new xl;window.Thermal={managers:new Map};window.Thermal.managers.set("default",wv);const ja=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new xl(void 0,e);return window.Thermal.managers.set(r,t),t}},xv=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class va extends fl{constructor(e){if(super(e),this.it=O,e.type!==ui.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===O||e==null)return this._t=void 0,this.it=e;if(e===Ri)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}va.directiveName="unsafeHTML",va.resultType=1;const Ht=Aa(va),nh=class nh{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?O:m`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${_(S.note).toLocaleLowerCase()}</button>
            <div slot="content">${Ht(t)}</div>
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
                                <file-button slot="invoker" label="${_(S.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>
                        
                        </div>

                    </div>

                    <file-canvas></file-canvas>
                    ${e.timeline.isSequence?m`<div class="timeline">
                            <file-timeline hasInfo="false" hasSpeedButton="false" hasPlayButton="false"></file-timeline>
                        </div>`:O}
                    
                    <file-analysis-table></file-analysis-table>

                </file-mirror>

            </article>
        
        </div>`}};nh.styles=pe`


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

    `;let $s=nh;const ah=class ah{constructor(e){this.element=e,this.instanceRenderer=new $s(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?m`
                <div class="group-header">
                
                    ${e?m`<h2 class="group-title">${e}</h2>`:O}

                    ${t?m`<p class="group-info">${t}</p>`:O}

                </div>
            `:O}renderGroup(e,t,i,s){const n=this.trimmedString(e.label),a=this.trimmedString(e.info),o={"group-files":!0,[`group-files-${t}`]:!0};return m`

            <section class="${Xt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(n,a)}

                <div class=${Xt(o)}>

                    ${e.files.map(({instance:h,innerHtml:u,label:p,time:f})=>this.instanceRenderer.renderInstance(h,f,s,p,u))}

                </div>

            </section>

        `}};ah.styles=pe`


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

    `;let tn=ah,Sv=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof gi)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?gu(e).getTime():this.grouping==="day"?da(e).getTime():this.grouping==="week"?fi(e).getTime():this.grouping==="month"?fa(e).getTime():this.grouping==="year"?vl(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?lu(e).getTime():this.grouping==="day"?au(e).getTime():this.grouping==="week"?ga(e).getTime():this.grouping==="month"?pa(e).getTime():this.grouping==="year"?ou(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:Se(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:Se(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+Se(e,"w")+" of "+Se(e,"yyyy"),info:[lt.humanDate(fi(e).getTime()),lt.humanDate(ga(e).getTime())].join(" - ")}:this.grouping==="month"?{label:Se(e,"MMMM yyyy"),info:[lt.humanDate(fa(e).getTime()),lt.humanDate(pa(e).getTime())].join(" - ")}:this.grouping==="year"?{label:Se(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?lt.human(e):this.grouping==="hour"||this.grouping==="day"?Se(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",lt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var $v=Object.defineProperty,kv=Object.getOwnPropertyDescriptor,pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?kv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$v(e,t,s),s};let Bt=class extends nt{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=ja(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new Sv(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof bi))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return m`
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

                `:O}

        `}};Bt.styles=[$s.styles,tn.styles,pe`

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
    
    `];pr([x(),Lr({slot:"entry",flatten:!0})],Bt.prototype,"entries",2);pr([x()],Bt.prototype,"groups",2);pr([x()],Bt.prototype,"instances",2);pr([d()],Bt.prototype,"columns",2);pr([d()],Bt.prototype,"breakpoint",2);pr([d({type:Number,reflect:!0})],Bt.prototype,"width",2);pr([d({type:String,reflect:!0})],Bt.prototype,"grouping",2);pr([d()],Bt.prototype,"name",2);pr([d()],Bt.prototype,"slug",2);pr([x()],Bt.prototype,"scopeSlug",2);pr([d({type:Object})],Bt.prototype,"onInstanceEnter",2);pr([d({type:Object})],Bt.prototype,"onInstanceLeave",2);pr([d({type:Object})],Bt.prototype,"groupRenderer",2);Bt=pr([J("time-group")],Bt);var _v=Object.defineProperty,Pv=Object.getOwnPropertyDescriptor,Ds=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_v(e,t,s),s};const Al={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let zi=class extends nt{constructor(){super(...arguments),this.tRef=me(),this.vRef=me(),this.vunitsRef=me(),this.haRef=me(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){const t=this[e],i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?Ht(i):i;return m`
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
                            value=${re(s)}
                            min=${re(n)}
                            max=${re(a)}
                            step=${re(o)}
                            type="number"
                            @blur=${u=>{const p=u.target,f=p.value.trim();f===""||f===void 0||f===null?this[e]=void 0:this[e]=parseFloat(p.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?m`<label for=${e}>${l}</label>`:O}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),app:r.toFixed(2),t:e},s=_(S.apparenttemperatureverbose,i),n=t<0?_(S.youfeelcolder,i):_(S.youfeelwarmer,i),a=r.toFixed(2);return m`<div class="result">

            <p class="result_label">${_(S.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${n}</p>
        
        </div>`}render(){return m`
            <thermal-app label=${_(S.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${_(S.info)}>
                    <thermal-button slot="invoker">${_(S.info)}</thermal-button>
                    <div slot="content">
                        ${Ht(_(S.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?m`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:O}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,"t",_(S.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",_(S.windspeed),m`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${be(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",_(S.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):O}
                </div>
                

            </thermal-app>
        `}};zi.styles=pe`

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


    `;Ds([d({type:String,reflect:!0,attribute:!0,converter:Al})],zi.prototype,"t",2);Ds([d({type:String,reflect:!0,attribute:!0,converter:Al})],zi.prototype,"v",2);Ds([d({type:String,reflect:!0,attribute:!0,converter:Al})],zi.prototype,"ha",2);Ds([x()],zi.prototype,"ta",2);Ds([d({type:String,reflect:!0,attribute:!0})],zi.prototype,"vunits",2);zi=Ds([J("apparent-temperature-aat")],zi);var Cv=Object.defineProperty,Ov=Object.getOwnPropertyDescriptor,Av=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ov(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cv(e,t,s),s};let el=class extends rs{constructor(){super(...arguments),this.tourableElementRef=me()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`
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
                        <p>version ${zc}</p>
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
        `}};el.styles=pe`

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
    
    `;el=Av([J("app-info-button")],el);const El="manager-instance",$n="manager-palette-context",Ll="manager-smooth-context",Na="manager-graph-function-context",kn="tool-context",_n="tools-context";var Ev=Object.defineProperty,nd=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Ev(e,t,s),s};class Wa extends rs{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Kr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=ja(this.slug,e);this.manager=i,this.tool=this.manager.tool.value,this.tools=this.manager.tool.tools}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&xv(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t}),this.manager.tool.addListener(this.UUIDManagerListeners,t=>{this.tool=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(Kr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:Kr[e]}}render(){return m`<slot></slot>`}}nd([ae({context:kn})],Wa.prototype,"tool");nd([ae({context:_n})],Wa.prototype,"tools");var Lv=Object.defineProperty,Dv=Object.getOwnPropertyDescriptor,$i=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lv(e,t,s),s};let Qr=class extends Wa{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Kr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};$i([ae({context:El})],Qr.prototype,"manager",2);$i([d({type:String,reflect:!0,attribute:!0})],Qr.prototype,"slug",2);$i([ae({context:$n}),d({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:Kr[r]}),toAttribute:r=>r.key.toString()}})],Qr.prototype,"palette",2);$i([ae({context:Ll}),d({type:String,reflect:!0,attribute:!0})],Qr.prototype,"smooth",2);$i([ae({context:Na}),d({type:String,reflect:!0,attribute:!0})],Qr.prototype,"graphSmooth",2);$i([d({type:Boolean,reflect:!0})],Qr.prototype,"autoclear",2);$i([ae({context:kn})],Qr.prototype,"tool",2);$i([ae({context:_n})],Qr.prototype,"tools",2);Qr=$i([J("manager-provider")],Qr);var Rv=Object.defineProperty,Mv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Rv(e,t,s),s};class Rs extends rs{connectedCallback(){super.connectedCallback(),this.manager}}Mv([ye({context:El,subscribe:!0}),x()],Rs.prototype,"manager");const Dl="registry-instance",Rl="registry-opacity",Ha="registry-range-from",Ba="registry-range-to",ad="registry-loading",Ml="registry-min",Tl="registry-max",od="registry-highlight",Va="registry-highlight-setter";var Tv=Object.defineProperty,ld=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Tv(e,t,s),s};class Ga extends Rs{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return m`<slot></slot>`}}ld([ae({context:od})],Ga.prototype,"highlight");ld([ae({context:Va})],Ga.prototype,"setHighlight");var Iv=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,ti=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Iv(e,t,s),s};let jr=class extends Ga{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};ti([d({type:String,reflect:!0,attribute:!0})],jr.prototype,"slug",2);ti([ae({context:Dl})],jr.prototype,"registry",2);ti([ae({context:Rl}),d({type:Number,reflect:!0,attribute:!0})],jr.prototype,"opacity",2);ti([ae({context:Ml}),x()],jr.prototype,"min",2);ti([ae({context:Tl}),x()],jr.prototype,"max",2);ti([ae({context:Ha}),d({type:Number,reflect:!0,attribute:!0})],jr.prototype,"from",2);ti([ae({context:Ba}),d({type:Number,reflect:!0,attribute:!0})],jr.prototype,"to",2);ti([ae({context:ad}),d({type:String,reflect:!0,attribute:!0})],jr.prototype,"loading",2);ti([d({type:Boolean,reflect:!0})],jr.prototype,"autoclear",2);jr=ti([J("registry-provider")],jr);var zv=Object.defineProperty,Fv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&zv(e,t,s),s};class wr extends Rs{connectedCallback(){super.connectedCallback(),this.registry}}Fv([ye({context:Dl,subscribe:!0})],wr.prototype,"registry");class hd extends wr{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug)}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return m`<slot></slot>`}}const Il="group-instance";var jv=Object.defineProperty,Nv=Object.getOwnPropertyDescriptor,Ya=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jv(e,t,s),s};let rn=class extends hd{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Ya([d({type:String,attribute:!0,reflect:!0})],rn.prototype,"slug",2);Ya([ae({context:Il})],rn.prototype,"group",2);Ya([d({type:Boolean,reflect:!0})],rn.prototype,"autoclear",2);rn=Ya([J("group-provider")],rn);var Wv=Object.defineProperty,Hv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Wv(e,t,s),s};class ki extends wr{constructor(){super()}connectedCallback(){super.connectedCallback()}}Hv([ye({context:Il,subscribe:!0})],ki.prototype,"group");const Ul="file",cd="failure",ud="file-loading",Bv="file-loaded",qa="file-provider-element",Xa="file-ms-context",zl="file-cursor",dd="file-cursor-setter",Pn="playback",Fl="duration",Ka="playing",jl="playbackSpeed",Nl="recording",pd="mayStop",Vv="analysislist",Wl="file-markers-context";var Gv=Object.defineProperty,er=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Gv(e,t,s),s};class Ut extends ki{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new te,this.onSuccess=new te,this.onFailure=new te,this.onInstanceCreated=new te}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!==void 0&&i.trim().length>0){const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return m`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}er([ae({context:Ul}),x()],Ut.prototype,"file");er([ae({context:cd}),x()],Ut.prototype,"failure");er([ae({context:ud}),x()],Ut.prototype,"loading");er([ae({context:Bv})],Ut.prototype,"ready");er([ae({context:Fl}),x()],Ut.prototype,"duration");er([ae({context:Pn})],Ut.prototype,"currentFrame");er([ae({context:zl})],Ut.prototype,"cursor");er([ae({context:Xa})],Ut.prototype,"ms");er([ae({context:jl})],Ut.prototype,"speed");er([ae({context:Nl})],Ut.prototype,"recording");er([ae({context:Ka})],Ut.prototype,"playing");er([ae({context:pd}),x()],Ut.prototype,"mayStop");er([Lr({slot:"mark",flatten:!0})],Ut.prototype,"marksQueriedInternally");er([ae({context:Wl})],Ut.prototype,"marksProvidedBelow");er([ae({context:Vv})],Ut.prototype,"analysis");var Yv=Object.defineProperty,qv=Object.getOwnPropertyDescriptor,Jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?qv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yv(e,t,s),s};let Vt=class extends Ut{constructor(){super(...arguments),this.ms=0,this.providedSelf=this,this.recording=!1,this.playing=!1}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Ti?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof vn?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof gi&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};Jt([d({type:Number,reflect:!0,attribute:!0}),ae({context:Xa})],Vt.prototype,"ms",2);Jt([d({type:Number,reflect:!0,attribute:!0}),ae({context:jl})],Vt.prototype,"speed",2);Jt([ae({context:qa})],Vt.prototype,"providedSelf",2);Jt([d({type:String,reflect:!0,attribute:!0}),ae({context:Nl})],Vt.prototype,"recording",2);Jt([d({type:String,reflect:!0,attribute:!0}),ae({context:Ka})],Vt.prototype,"playing",2);Jt([d({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Vt.prototype,"batch",2);Jt([d({type:String,attribute:!0,reflect:!0})],Vt.prototype,"thermal",2);Jt([d({type:String,attribute:!0,reflect:!0})],Vt.prototype,"visible",2);Jt([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis1",2);Jt([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis2",2);Jt([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis3",2);Jt([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis4",2);Jt([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis5",2);Jt([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis6",2);Jt([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis7",2);Vt=Jt([J("file-provider")],Vt);var Xv=Object.defineProperty,Kv=Object.getOwnPropertyDescriptor,Ms=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xv(e,t,s),s};let Fi=class extends Ut{constructor(){super(...arguments),this.providedSelf=this,this.container=me(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof Ti){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof gi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return m`

                    <div class="container">
                        <div ${be(this.container)} class="${Xt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${Iu.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return m`
            ${this.ready?m`<slot></slot>`:O}
            <slot name="mark"></slot>
        `}};Fi.styles=pe`

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
    
    `;Ms([ae({context:qa})],Fi.prototype,"providedSelf",2);Ms([x()],Fi.prototype,"container",2);Ms([x()],Fi.prototype,"ready",2);Ms([x()],Fi.prototype,"hover",2);Ms([x()],Fi.prototype,"listener",2);Fi=Ms([J("file-dropin")],Fi);var Jv=Object.defineProperty,Zv=Object.getOwnPropertyDescriptor,Hl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jv(e,t,s),s};let sn=class extends ki{constructor(){super(...arguments),this.container=me(),this.hover=!1,this.tourableElementRef=me()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1})}}render(){const r={dropin:!0,hover:this.hover};return m`

            <div class="container" ${be(this.tourableElementRef)}>
            
                <div ${be(this.container)} class="${Xt(r)}"></div>

            </div>

            <slot name="tour"></slot>
        
        `}};sn.styles=pe`

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
    
    `;Hl([x()],sn.prototype,"container",2);Hl([x()],sn.prototype,"hover",2);sn=Hl([J("group-dropin")],sn);var Qv=Object.defineProperty,eb=Object.getOwnPropertyDescriptor,_i=(r,e,t,i)=>{for(var s=i>1?void 0:i?eb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qv(e,t,s),s};let ei=class extends Wa{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Kr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};_i([ae({context:El})],ei.prototype,"manager",2);_i([d({type:String})],ei.prototype,"slug",2);_i([ae({context:$n}),d({type:String,converter:{fromAttribute:r=>({key:r,data:Kr[r]}),toAttribute:r=>r.key.toString()}})],ei.prototype,"palette",2);_i([ae({context:Ll}),d({type:String})],ei.prototype,"smooth",2);_i([ae({context:Na}),d({type:String})],ei.prototype,"graphSmooth",2);_i([d({type:Boolean})],ei.prototype,"autoclear",2);_i([ae({context:kn})],ei.prototype,"tool",2);_i([ae({context:_n})],ei.prototype,"tools",2);ei=_i([J("manager-mirror")],ei);var tb=Object.defineProperty,rb=Object.getOwnPropertyDescriptor,ri=(r,e,t,i)=>{for(var s=i>1?void 0:i?rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tb(e,t,s),s};let Nr=class extends Ga{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};ri([d({type:String,reflect:!0,attribute:!0})],Nr.prototype,"slug",2);ri([ae({context:Dl})],Nr.prototype,"registry",2);ri([ae({context:Rl}),d({type:Number,reflect:!0,attribute:!0})],Nr.prototype,"opacity",2);ri([ae({context:Ml}),x()],Nr.prototype,"min",2);ri([ae({context:Tl}),x()],Nr.prototype,"max",2);ri([ae({context:Ha}),d({type:Number})],Nr.prototype,"from",2);ri([ae({context:Ba}),d({type:Number})],Nr.prototype,"to",2);ri([ae({context:ad}),d({type:String})],Nr.prototype,"loading",2);ri([d({type:Boolean})],Nr.prototype,"autoclear",2);Nr=ri([J("registry-mirror")],Nr);var ib=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,Ja=(r,e,t,i)=>{for(var s=i>1?void 0:i?sb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ib(e,t,s),s};let nn=class extends hd{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Ja([d({type:String})],nn.prototype,"slug",2);Ja([ae({context:Il})],nn.prototype,"group",2);Ja([d({type:Boolean})],nn.prototype,"autoclear",2);nn=Ja([J("group-mirror")],nn);var nb=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,xr=(r,e,t,i)=>{for(var s=i>1?void 0:i?ab(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nb(e,t,s),s};let lr=class extends Ut{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};xr([ae({context:qa})],lr.prototype,"providedSelf",2);xr([ae({context:Ul}),d()],lr.prototype,"file",2);xr([d({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],lr.prototype,"batch",2);xr([d({type:String})],lr.prototype,"thermal",2);xr([d({type:String})],lr.prototype,"visible",2);xr([d({type:String})],lr.prototype,"analysis1",2);xr([d({type:String})],lr.prototype,"analysis2",2);xr([d({type:String})],lr.prototype,"analysis3",2);xr([d({type:String})],lr.prototype,"analysis4",2);xr([d({type:String})],lr.prototype,"analysis5",2);xr([d({type:String})],lr.prototype,"analysis6",2);xr([d({type:String})],lr.prototype,"analysis7",2);lr=xr([J("file-mirror")],lr);var ob=Object.defineProperty,lb=Object.getOwnPropertyDescriptor,fd=(r,e,t,i)=>{for(var s=i>1?void 0:i?lb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ob(e,t,s),s};let ba=class extends wr{constructor(){super(...arguments),this.tourableElemtnRef=me()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return m`

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

                ${Object.entries(Kr).map(([r,e])=>m`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};ba.styles=pe`

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

    `;fd([ye({context:$n,subscribe:!0})],ba.prototype,"value",2);ba=fd([J("registry-palette-dropdown")],ba);var hb=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,gd=(r,e,t,i)=>{for(var s=i>1?void 0:i?cb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hb(e,t,s),s};let wa=class extends wr{constructor(){super(...arguments),this.tourableElementRef=me()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return m`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${_(S.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return m`
            <div class="container" ${be(this.tourableElementRef)}>
                ${Object.entries(Kr).map(([r,e])=>m`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};wa.styles=pe`

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

    `;gd([ye({context:$n,subscribe:!0}),x()],wa.prototype,"value",2);wa=gd([J("registry-palette-buttons")],wa);var ub=Object.defineProperty,db=Object.getOwnPropertyDescriptor,md=(r,e,t,i)=>{for(var s=i>1?void 0:i?db(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ub(e,t,s),s};let xa=class extends Rs{constructor(){super(...arguments),this.tourableElementRef=me()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`

            <div ${be(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.smooth.setSmooth(!1)}
                >${_(S.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.smooth.setSmooth(!0)}
                >${_(S.smooth)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};xa.styles=pe`
    
        :host {}

    `;md([ye({context:Ll,subscribe:!0})],xa.prototype,"smooth",2);xa=md([J("manager-smooth-switch")],xa);var pb=Object.defineProperty,fb=Object.getOwnPropertyDescriptor,yd=(r,e,t,i)=>{for(var s=i>1?void 0:i?fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pb(e,t,s),s};let Sa=class extends Rs{constructor(){super(...arguments),this.tourableElementRef=me()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`

            <div ${be(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${_(S.straightlines)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${_(S.smoothlines)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};Sa.styles=pe`
    
        :host {}

    `;yd([ye({context:Na,subscribe:!0})],Sa.prototype,"smooth",2);Sa=yd([J("manager-graph-smooth-switch")],Sa);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tl extends va{}tl.directiveName="unsafeSVG",tl.resultType=2;const vd=Aa(tl),Ge=r=>({fromAttribute:i=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:i=>i===!0?"true":"false"});var gb=Object.defineProperty,mb=Object.getOwnPropertyDescriptor,Cn=(r,e,t,i)=>{for(var s=i>1?void 0:i?mb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gb(e,t,s),s};let Qi=class extends Rs{constructor(){super(...arguments),this.tourableElementRef=me(),this.showhint=!0}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.manager.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.manager.tool.selectTool(e)}render(){return this.manager===void 0?O:m`
                <div class="switchers" ${be(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:this.value!==void 0?t.key===this.value.key:!1};return m`
                        
                        <button 
                            class=${Xt(i)} 
                            @click=${()=>{this.manager.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${vd(t.icon)}
                        </button>
                        
                    `})}
                </div>

                ${this.showhint===!0?m` <div class="current">
                        <div class="tool-description">${_(S[this.hint])}</div>
                    </div>`:O}

                <slot name="tour"></slot>
        `}};Qi.styles=pe`

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

    `;Cn([ye({context:kn,subscribe:!0}),x()],Qi.prototype,"value",2);Cn([ye({context:_n,subscribe:!0}),x()],Qi.prototype,"tools",2);Cn([x()],Qi.prototype,"hint",2);Cn([d({type:String,reflect:!0,converter:Ge(!1)})],Qi.prototype,"showhint",2);Qi=Cn([J("group-tool-buttons")],Qi);var yb=Object.defineProperty,vb=Object.getOwnPropertyDescriptor,Bl=(r,e,t,i)=>{for(var s=i>1?void 0:i?vb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yb(e,t,s),s};let an=class extends ki{constructor(){super(...arguments),this.tourableElementRef=me()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?O:m`

            <aside ${be(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return m`
                        
                        <button 
                            class=${Xt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${_(S[e.name])}
                            
                        >
                            ${vd(e.icon)}
                        </button>
                        
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};an.styles=pe`

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

    `;Bl([ye({context:kn,subscribe:!0}),x()],an.prototype,"value",2);Bl([ye({context:_n,subscribe:!0}),x()],an.prototype,"tools",2);an=Bl([J("group-tool-bar")],an);var bb=Object.defineProperty,wb=Object.getOwnPropertyDescriptor,bd=(r,e,t,i)=>{for(var s=i>1?void 0:i?wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bb(e,t,s),s};let $a=class extends wr{constructor(){super(...arguments),this.containerRef=me()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return m`
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
        `}};$a.styles=pe`

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
    
    `;bd([ye({context:Rl,subscribe:!0})],$a.prototype,"value",2);$a=bd([J("registry-opacity-slider")],$a);var xb=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,$b=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xb(e,t,s),s};let Oc=class extends wr{constructor(){super(...arguments),this.buttonRef=me()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return m`
            <thermal-button ${be(this.buttonRef)} @click=${this.doAction}>${_(S.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};Oc=$b([J("registry-range-auto-button")],Oc);var kb=Object.defineProperty,_b=Object.getOwnPropertyDescriptor,wd=(r,e,t,i)=>{for(var s=i>1?void 0:i?_b(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kb(e,t,s),s};let rl=class extends wr{constructor(){super(...arguments),this.buttonRef=me()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return m`
            <thermal-button 
                ${be(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${_(S.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};wd([ye({context:Va,subscribe:!0})],rl.prototype,"setter",2);rl=wd([J("registry-range-full-button")],rl);var Pb=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,On=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pb(e,t,s),s};let Wr=class extends wr{constructor(){super(...arguments),this.ticksRef=me(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=me()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.ticksRef.value&&this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Wr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return m`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${be(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${be(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?m`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:O}

                    ${this.ticks.map(t=>m`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(Wr.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};Wr.TICK_WIDTH=40;Wr.TICK_FIXED=2;Wr.styles=pe`

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


    `;On([ye({context:od,subscribe:!0})],Wr.prototype,"highlight",2);On([d({type:String,reflect:!0})],Wr.prototype,"placement",2);On([x()],Wr.prototype,"minmax",2);On([x()],Wr.prototype,"ticks",2);Wr=On([J("registry-ticks-bar")],Wr);var Ob=Object.defineProperty,Ab=Object.getOwnPropertyDescriptor,An=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ab(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ob(e,t,s),s};let ks=class extends wr{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return m`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return m`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};An([x()],ks.prototype,"minmax",2);An([x()],ks.prototype,"range",2);An([x()],ks.prototype,"opacity",2);An([x()],ks.prototype,"palette",2);ks=An([J("registry-log")],ks);(()=>{var r=Object.defineProperty,e=Math.pow,t=(g,v,U)=>v in g?r(g,v,{enumerable:!0,configurable:!0,writable:!0,value:U}):g[v]=U,i=(g,v,U)=>(t(g,typeof v!="symbol"?v+"":v,U),U),s=(g,v)=>` ${v&&v.length>0?v.map(U=>`<link rel="stylesheet" href="${U}" />`).join(""):""} <style> ${g} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",u="data",p="min",f="max",b="step",w="round",C="type",P="theme",B="rtl",A="btt",R="disabled",Y="keyboard-disabled",F="mousewheel-disabled",ie="slider-width",$="slider-height",E="slider-radius",I="slider-bg",M="slider-bg-hover",j="slider-bg-fill",T="pointer-width",z="pointer-height",D="pointer-radius",q="pointer-bg",he="pointer-bg-hover",k="pointer-bg-focus",V="pointer-shadow",ue="pointer-shadow-hover",se="pointer-shadow-focus",Le="pointer-border",qe="pointer-border-hover",at="pointer-border-focus",ht="animate-onclick",oe="css-links",de="vertical",Ae="horizontal",Ue=(g,v,U,L,ne)=>{let $e=v-g;return $e===0?U:(L-U)*(ne-g)/$e+U},tt=g=>!isNaN(parseFloat(g))&&isFinite(g),je=(g,v)=>tt(g)?Number(g):v,Ci=(g,v)=>v===0?0:Math.round(g/v)*v,Vi=(g,v=1/0)=>{if(v===1/0)return g;let U=e(10,v);return Math.round(g*U)/U},rt=g=>g==null?!1:typeof g=="boolean"?g:g.trim().toLowerCase()==="true",gr=(g,v)=>{g.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:v}}))},li=(g,v)=>{g.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:v}}))},io=(g,v)=>{g.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:v}}))},so=(g,v)=>{g.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:v}}))},no=(g,v)=>{if(!v||v.length<=0)return;let U=v.map(ne=>tt(ne)?je(ne,ne):ne),L={values:U||[]};L.value=U[0],L.value0=U[0],L.value1=U[0];for(let ne=1;ne<U.length;ne++)L[`value${ne+1}`]=U[ne];g.dispatchEvent(new CustomEvent("change",{detail:L}))},G=(g,v,U)=>{let L=0,ne,$e,Me,le,ce=!1,ze=(Pe,ct,Mt,Ot,vt,bt)=>{let ir=L;Mt!==void 0&&Pe>Mt&&(Pe=Mt),ct!==void 0&&Pe<ct&&(Pe=ct),L=Pe;let sr=L;return(Ot===de&&bt||Ot===Ae&&vt)&&(sr=100-sr),Ot===de?v.style.top=`${sr}%`:v.style.left=`${sr}%`,ir!==L},Ne=Pe=>Pe===v||v.contains(Pe),ve=(Pe,ct,Mt,Ot)=>{ne=Pe,$e=ct,Me=Mt,le=Ot},Qe=Pe=>{ce=Pe,v.classList.toggle("disabled",ce),ce?v.setAttribute("aria-disabled","true"):v.hasAttribute("aria-disabled")&&v.removeAttribute("aria-disabled")},kr=(Pe,ct)=>{ct==null?v.removeAttribute(Pe):v.setAttribute(Pe,ct)},qt=Pe=>v.getAttribute(Pe),_e=Pe=>{if(!ce){switch(Pe.key){case"ArrowLeft":{Pe.preventDefault(),typeof ne=="function"&&ne(U);break}case"ArrowRight":{Pe.preventDefault(),typeof $e=="function"&&$e(U);break}case"ArrowUp":{Pe.preventDefault(),typeof Me=="function"&&Me(U);break}case"ArrowDown":{Pe.preventDefault(),typeof le=="function"&&le(U);break}}so(g,Pe)}},Fe=()=>{ce||gr(g,v)};return v.className=`pointer pointer-${U}`,v.addEventListener("keydown",_e),v.addEventListener("click",Fe),{$pointer:v,get percent(){return L},get disabled(){return ce},set disabled(Pe){Qe(Pe)},updatePosition:ze,isClicked:Ne,setCallbacks:ve,setAttr:kr,getAttr:qt,destroy:()=>{v.removeEventListener("keydown",_e),v.removeEventListener("click",Fe),v.remove()}}},Q=g=>{if(g==null)return;if(Array.isArray(g))return g;if(g.trim()==="")return;let v=g.split(","),U=[],L=!0;for(let ne=0;ne<v.length;ne++){let $e=v[ne].trim();$e!==""&&(U.push($e),tt($e)||(L=!1))}return L?U.map(ne=>Number(ne)):U},Z=(g,v)=>v?v.findIndex(U=>U===g||U.toString().trim()===g.toString().trim()):-1,De=g=>({updatePosition:(v,U,L,ne)=>{if(U.length<=0)return;let $e=U.length===1,Me=U[0],le=U[U.length-1];v===de?(g.style.removeProperty("width"),g.style.removeProperty("right"),g.style.removeProperty("left"),$e?g.style.height=`${Me}%`:g.style.height=`${Math.abs(Me-le)}%`,ne?(g.style.bottom="0%",$e?g.style.top="auto":g.style.top=`${Math.min(100-le,100-Me)}%`):(g.style.bottom="auto",$e?g.style.top="0%":g.style.top=`${Math.min(Me,le)}%`)):(g.style.removeProperty("height"),g.style.removeProperty("top"),g.style.removeProperty("bottom"),$e?g.style.width=`${Me}%`:g.style.width=`${Math.abs(Me-le)}%`,L?(g.style.right="0%",$e?g.style.left="auto":g.style.left=`${Math.min(100-le,100-Me)}%`):(g.style.right="auto",$e?g.style.left="0%":g.style.left=`${Math.min(Me,le)}%`))}}),we="--animate-onclick",Xe="--width",W="--height",ot="--panel-bg-border-radius",Ve="--panel-bg",$t="--panel-bg-hover",Rt="--panel-bg-fill",ee="--pointer-width",K="--pointer-height",H="--pointer-border-radius",fe="--pointer-bg",Ce="--pointer-bg-hover",Be="--pointer-bg-focus",Ft="--pointer-shadow",Gt="--pointer-shadow-hover",tr="--pointer-shadow-focus",rr="--pointer-border",Gr="--pointer-border-hover",xe="--pointer-border-focus",Ee=(g,v,U)=>{let L=new Map;for(let ne of g.attributes){let $e=ne.nodeName.trim().toLowerCase();if(!v.test($e))continue;let Me=$e.replace(/\D/g,"").trim(),le=Me===""||Me==="0"||Me==="1"?0:je(Me,0)-1,ce=U&&typeof U=="function"?U(ne.value):ne.value;L.set(le,ce)}return L},X=g=>{if(!g)return null;let v=g.getAttribute(oe);if(!v)return null;let U=v.split(";"),L=[];for(let ne of U)ne.trim()!==""&&L.push(ne.trim());return L},ke=[[Xe,ie,"sliderWidth",null],[W,$,"sliderHeight",null],[ot,E,"sliderRadius",null],[Ve,I,"sliderBg",null],[$t,M,"sliderBgHover",null],[Rt,j,"sliderBgFill",null],[ee,T,"pointer#Width",/^pointer([0-9]*)-width$/],[K,z,"pointer#Height",/^pointer([0-9]*)-height$/],[H,D,"pointer#Radius",/^pointer([0-9]*)-radius$/],[fe,q,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ce,he,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Be,k,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Ft,V,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Gt,ue,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[tr,se,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[rr,Le,"pointer#Border",/^pointer([0-9]*)-border$/],[Gr,qe,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[xe,at,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Re=(g,v,U)=>{let L=null,ne=[],$e=new Map,Me=(_e,Fe=v)=>{let Pe=[...Fe.classList];for(let ct of Pe)ct.startsWith(_e)&&v.classList.remove(ct)},le=()=>{Me("shape");let _e=v.querySelectorAll(".pointer");for(let Fe of _e)Me("shape",Fe)},ce=_e=>{L=_e,Me("theme-"),typeof _e=="string"&&v.classList.add(`theme-${_e}`)},ze=()=>{if(le(),!(ne.length<=0)){v.classList.add("shape",`shape-${ne[0]}`);for(let _e=1;_e<ne.length;_e++){let Fe=ne[_e];if(!Fe)continue;let Pe=v.querySelector(`.pointer-${_e}`);!Pe||Pe.classList.add("shape",`shape-${Fe}`)}}},Ne=(_e,Fe)=>{ne[_e]=Fe,ze()},ve=()=>{le();let _e=Ee(g,/^pointer([0-9]*)-shape$/);if(!(_e.size<=0)){for(let Fe of _e){let Pe=Fe[0];ne[Pe]=Fe[1]}ze()}},Qe=(_e,Fe)=>`${_e}-${Fe}`,kr=(_e,Fe,Pe)=>{let ct=U[Pe];if(!ct)return;let Mt=Pe===0?v:ct.$pointer;if(Fe==null){$e.has(Qe(_e,Pe))&&$e.delete(Qe(_e,Pe)),Mt.style.removeProperty(_e);return}$e.set(Qe(_e,Pe),Fe),Mt.style.setProperty(_e,Fe)},qt=(_e,Fe)=>$e.get(Qe(_e,Fe));return(()=>{for(let _e of ke){let[Fe,Pe,ct,Mt]=_e;if(Mt){let vt=Ee(g,Mt);for(let bt of vt){let ir=bt[0],sr=bt[1];kr(Fe,sr,ir)}}else{let vt=g.getAttribute(Pe);kr(Fe,vt,0)}let Ot=[];if(ct.indexOf("#")===-1)Ot.push([ct,0]);else{Ot.push([ct.replace("#",""),0]),Ot.push([ct.replace("#","0"),0]),Ot.push([ct.replace("#","1"),0]);for(let vt=1;vt<U.length;vt++)Ot.push([ct.replace("#",(vt+1).toString()),vt])}for(let vt of Ot)try{let bt=vt[0],ir=vt[1];Object.prototype.hasOwnProperty.call(g,bt)||Object.defineProperty(g,bt,{get(){return qt(Fe,ir)},set:sr=>{kr(Fe,sr,ir)}})}catch(bt){console.error(bt)}}ce(g.getAttribute(P)),ve()})(),{setStyle:kr,getStyle:qt,get theme(){return L},set theme(_e){ce(_e)},get pointerShapes(){return ne},setPointerShape:Ne}},Te="animate-on-click",Ze="range-dragging",Ie=(g,v,U,L)=>{let ne=[],$e=Ne=>{for(let ve of ne)ve.update&&typeof ve.update=="function"&&ve.update(Ne)},Me=()=>{for(let Ne of ne)Ne.destroy&&typeof Ne.destroy=="function"&&Ne.destroy()},le=(Ne,ve)=>{for(let Qe of ne)Qe.onAttrChange&&typeof Qe.onAttrChange=="function"&&Qe.onAttrChange(Ne,ve)},ce=Ne=>{if(Ne.gettersAndSetters){for(let ve of Ne.gettersAndSetters)if(!(!ve.name||!ve.attributes))try{Object.prototype.hasOwnProperty.call(g,ve.name)||Object.defineProperty(g,ve.name,ve.attributes)}catch(Qe){console.error("defineSettersGetters error:",Qe)}}},ze=Ne=>{var ve;if(!Ne.css)return;let Qe=(ve=g.shadowRoot)==null?void 0:ve.querySelector("style");!Qe||(Qe.innerHTML+=Ne.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Ne of window.tcRangeSliderPlugins){let ve=Ne();ne.push(ve),ve.init&&typeof ve.init=="function"&&(ve.init(g,v,U,L),ce(ve),ze(ve))}},update:$e,onAttrChange:le,destroy:Me}},jt=10,ft=20,Yt=(g,v)=>{let U=new Map,L=/^value([0-9]*)$/;for(let le of g.attributes){let ce=le.nodeName.trim().toLowerCase();if(!L.test(ce))continue;let ze=ce.replace("value","").trim(),Ne=ze===""||ze==="0"||ze==="1"?0:je(ze,0)-1,ve=tt(le.value)?je(le.value,0):le.value;U.set(Ne,ve)}let ne=Math.max(...Array.from(U.keys())),$e=[];$e.push([G(g,v,0),U.get(0)]);let Me=v;for(let le=1;le<=ne;le++){let ce=v.cloneNode(!0);Me.after(ce),Me=ce,$e.push([G(g,ce,le),U.get(le)])}return $e},lh=(g,v,U,L,ne,$e,Me)=>{try{Object.defineProperty(g,L,{configurable:!0,get(){if(!v)return;let le=v.pointers[U];if(!le)return;let ce=v.getTextValue(le.percent);return tt(ce)?je(ce,ce):ce},set:le=>{v.pointers[U]?v==null||v.setValue(le,U):v==null||v.addPointer(le)}}),Object.defineProperty(g,ne,{configurable:!0,get(){var le,ce;return(ce=(le=v==null?void 0:v.pointers[U])==null?void 0:le.getAttr("aria-label"))!=null?ce:void 0},set:le=>{!v||v.setAriaLabel(U,le)}}),Object.defineProperty(g,$e,{configurable:!0,get(){var le,ce;return(ce=(le=v==null?void 0:v.styles)==null?void 0:le.pointerShapes[U])!=null?ce:null},set:le=>{!v||!v.styles||v.styles.setPointerShape(U,le)}}),Object.defineProperty(g,Me,{configurable:!0,get(){var le;return(le=v==null?void 0:v.pointers[U].disabled)!=null?le:!1},set:le=>{if(!v)return;let ce=v==null?void 0:v.pointers[U];!ce||(ce.disabled=le)}})}catch(le){console.error(le)}},Pd=(g,v)=>{let U=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let L=2;L<jt;L++)U.push([`value${L}`,`ariaLabel${L}`,`pointer${L}Shape`,`pointer${L}Disabled`,L-1]);for(let L of U)lh(g,v,L[4],L[0],L[1],L[2],L[3])},hh=(g,v,U)=>{var L;let ne=(L=U.shadowRoot)==null?void 0:L.querySelector(".container");if(ne)for(let $e of g)v?ne.prepend($e.$pointer):ne.append($e.$pointer)},Cd=(g,v)=>{if(!(!v||g.length<=1)){for(let U of g)U.$pointer.style.zIndex=ft.toString();v.$pointer.style.zIndex=(ft*2).toString()}},ao=0,Us=100,ls=2,ch="0.3s",Od=(g,v,U)=>{let L=U.map(y=>y[0]),ne=null,$e=null,Me=null,le=null,ce=ao,ze=Us,Ne,ve,Qe=Ae,kr=ls,qt=!1,_e=!1,Fe=!1,Pe=0,ct=1/0,Mt=!1,Ot,vt,bt=!1,ir=!1,sr=!1,Oi=ch,uh=[],dh=y=>{bt||(y.preventDefault&&y.preventDefault(),Gi(y),window.addEventListener("mousemove",Gi),window.addEventListener("mouseup",Mn),li(g,y))},Mn=y=>{bt||(Ot=void 0,vt=void 0,window.removeEventListener("mousemove",Gi),window.removeEventListener("mouseup",Mn),Oi&&v.classList.add(Te),io(g,y))},Ld=(y,N)=>{if(L.length<=0)return;if(L.length===1)return L[0].isClicked(y)&&Oi&&v.classList.remove(Te),L[0];let ge=Rd(y);if(Mt){let Ke=N,Ir=In(Ke);Ir!==void 0&&(Ke=Ci(Ke,Ir)),ge?(Ot=Ke,vt=0,Oi&&v.classList.remove(Te)):Ot!==void 0&&(vt=Ke-Ot,Ot=Ke)}if(!Dd(y)&&!ge){for(let Ke of L)if(!(!Ke.isClicked(y)||Ke.disabled))return Oi&&v.classList.remove(Te),Ke;for(let Ke of L)if(ne===Ke)return Ke}let it=1/0,wt=null;for(let Ke of L){if(Ke.disabled)continue;let Ir=Math.abs(N-Ke.percent);Ir<it&&(it=Ir,wt=Ke)}return wt},ph=()=>L.findIndex(y=>ne===y&&!y.disabled),Gi=y=>{let N;if(Qe===de){let{height:it,top:wt}=v.getBoundingClientRect(),Ke=y.type.indexOf("mouse")!==-1?y.clientY:y.touches[0].clientY;N=Math.min(Math.max(0,Ke-wt),it)*100/it}else{let{width:it,left:wt}=v.getBoundingClientRect(),Ke=y.type.indexOf("mouse")!==-1?y.clientX:y.touches[0].clientX;N=Math.min(Math.max(0,Ke-wt),it)*100/it}if((qt||_e)&&(N=100-N),ne=Ld(y.target,N),ne&&Cd(L,ne),Mt&&L.length>1&&vt!==void 0){let it=L[0],wt=L[L.length-1],Ke=it.percent+vt<0,Ir=wt.percent+vt>100;if(Ke||Ir)return;for(let Bn=0;Bn<L.length;Bn++)nr(Bn,L[Bn].percent+vt);return}let ge=ph();ge!==-1&&(nr(ge,N),ne==null||ne.$pointer.focus())},Tn=y=>{if(bt||document.activeElement!==g||ne!=null&&ne.disabled)return;y.stopPropagation(),y.preventDefault();let N=y.deltaY<0,ge=qt||_e,it=N?!ge:ge,wt=ph();wt!==-1&&(it?zs(wt,L[wt].percent):Fs(wt,L[wt].percent))},fh=y=>{bt||ir||(Qe===de?_e?nr(y,100):nr(y,0):qt?Fs(y,L[y].percent):zs(y,L[y].percent))},gh=y=>{bt||ir||(Qe===de?_e?nr(y,0):nr(y,100):qt?zs(y,L[y].percent):Fs(y,L[y].percent))},mh=y=>{bt||ir||(Qe===de?_e?Fs(y,L[y].percent):zs(y,L[y].percent):qt?nr(y,100):nr(y,0))},yh=y=>{bt||ir||(Qe===de?_e?zs(y,L[y].percent):Fs(y,L[y].percent):qt?nr(y,0):nr(y,100))},Dd=y=>y.classList.contains("panel"),Rd=y=>y.classList.contains("panel-fill"),zs=(y,N)=>{if(N===void 0)return;let ge=In(N);ge==null&&(ge=1),N-=ge,N<0&&(N=0),nr(y,N)},Fs=(y,N)=>{if(N===void 0)return;let ge=In(N);ge==null&&(ge=1),N+=ge,N>100&&(N=100),nr(y,N)},Yi=()=>{!le||le.update({percents:vh(),values:bh(),$pointers:wh(),min:xh(),max:Sh(),data:ho(),step:lo(),round:uo(),type:co(),textMin:Un(),textMax:zn(),rightToLeft:go(),bottomToTop:mo(),pointersOverlap:wo(),pointersMinDistance:po(),pointersMaxDistance:fo(),rangeDragging:xo(),disabled:yo(),keyboardDisabled:vo(),mousewheelDisabled:bo()})},Md=()=>{Yi()},Td=y=>{if(!(Fe||L.length<=1||ze===ce))if(y===0){let N=ct*100/(ze-ce);return Math.max(0,L[y+1].percent-N)}else{let N=Pe*100/(ze-ce);return Math.min(L[y-1].percent+N,100)}},Id=y=>{if(!(Fe||L.length<=1||ze===ce))if(y===L.length-1){let N=ct*100/(ze-ce);return Math.min(L[y-1].percent+N,100)}else{let N=Pe*100/(ze-ce);return Math.max(0,L[y+1].percent-N)}},In=y=>{let N;if(typeof Ne=="function"){let ge=Ue(0,100,ce,ze,y);N=Ne(ge,y)}else N=Ne;if(tt(N)){let ge=ze-ce;return N=ge===0?0:N*100/ge,N}},hs=y=>{if(y===void 0)return;let N=Ue(0,100,ce,ze,y);return ve!==void 0?ve[Math.round(N)]:Vi(N,kr)},Un=()=>ve!==void 0?ve[ce]:ce,zn=()=>ve!==void 0?ve[ze]:ze,lo=()=>Ne,Ud=y=>{var N;return y<=0||Fe?Un():(N=hs(L[y-1].percent))!=null?N:""},zd=y=>{var N;return L.length<=1||y>=L.length-1||Fe?zn():(N=hs(L[y+1].percent))!=null?N:""},vh=()=>L.map(y=>y.percent),bh=()=>L.map(y=>hs(y.percent)),wh=()=>L.map(y=>y.$pointer),xh=()=>ce,Sh=()=>ze,ho=()=>ve,co=()=>Qe,uo=()=>kr,po=()=>Pe,fo=()=>ct,Fd=y=>uh[y],go=()=>qt,mo=()=>_e,yo=()=>bt,vo=()=>ir,bo=()=>sr,wo=()=>Fe,xo=()=>Mt,nr=(y,N)=>{if(N===void 0)return;let ge=In(N);ge!==void 0&&(N=Ci(N,ge));let it=L[y];if(!it)return;let wt=it.updatePosition(N,Td(y),Id(y),Qe,qt,_e);$e==null||$e.updatePosition(Qe,L.map(Ke=>Ke.percent),qt,_e),Yi();for(let Ke of L){let Ir=hs(Ke.percent);Ir!==void 0&&(Ke.setAttr("aria-valuenow",Ir.toString()),Ke.setAttr("aria-valuetext",Ir.toString()))}Nd(),wt&&no(g,L.map(Ke=>hs(Ke.percent)))},Yr=()=>{for(let y=0;y<L.length;y++)nr(y,L[y].percent)},jd=(y,N)=>{ce=ve!==void 0?0:je(y,ao),ze=ve!==void 0?ve.length-1:je(N,Us),Fn(ce),jn(ze)},Nd=()=>{var y,N;for(let ge=0;ge<L.length;ge++){let it=L[ge];it.setAttr("aria-valuemin",((y=Ud(ge))!=null?y:"").toString()),it.setAttr("aria-valuemax",((N=zd(ge))!=null?N:"").toString())}},Fn=y=>{ce=je(y,ao),ce>ze&&(ze=ce+Us),Yr()},jn=y=>{ze=je(y,Us),ze<ce&&(ze=ce+Us),Yr()},$h=y=>{Fe=!0;for(let N=0;N<y.length;N++)Nn(y[N],N);Fe=!1;for(let N=0;N<y.length;N++)Nn(y[N],N)},Nn=(y,N)=>{let ge;ve!==void 0?(ge=y==null?0:Z(y,ve),ge===-1&&(ge=0)):(ge=je(y,ce),ge<ce&&(ge=ce),ge>ze&&(ge=ze));let it=Ue(ce,ze,0,100,ge);nr(N,it)},Wn=y=>{if(y==null){Ne=void 0;return}if(typeof y=="function"){Ne=y,Yr();return}if(tt(y)){Ne=je(y,1);let N=Math.abs(ze-ce);Ne>N&&(Ne=void 0),Yr();return}Ne=void 0},So=y=>{Fe=y,Yr()},$o=y=>{(!tt(y)||y<0)&&(y=0),Pe=y},ko=y=>{(!tt(y)||y<0)&&(y=1/0),ct=y},_o=y=>{bt=y,v.classList.toggle("disabled",bt),bt?v.setAttribute("aria-disabled","true"):v.hasAttribute("aria-disabled")&&v.removeAttribute("aria-disabled")},kh=y=>{ir=y},_h=y=>{sr=y,sr?document.removeEventListener("wheel",Tn):document.addEventListener("wheel",Tn,{passive:!1})},Po=y=>{if(y==null){ve=void 0;return}if(ve=Q(y),ve===void 0||ve.length<=0){ve=void 0;return}Fn(0),jn(ve.length-1),Ne===void 0&&Wn(1)},Co=y=>{var N;typeof y=="string"?Qe=y.trim().toLowerCase()===de?de:Ae:Qe=Ae;let ge=(N=g.shadowRoot)==null?void 0:N.querySelector(".range-slider-box");if(!ge)return;ge.className=`range-slider-box type-${Qe}`,Yr();let it=Qe===de?"vertical":"horizontal";for(let wt of L)wt.setAttr("aria-orientation",it)},Oo=y=>{qt=y,L.length>1&&hh(L,qt,g),Yr(),Yi()},Ao=y=>{_e=y,L.length>1&&hh(L,_e,g),Yr(),Yi()},Eo=y=>{kr=je(y,ls),kr<0&&(kr=ls),Yi()},Ph=y=>{y==null||y.toString().trim().toLowerCase()==="false"?(Oi=void 0,v.style.removeProperty(we),v.classList.remove(Te)):(Oi=y.toString(),v.style.setProperty(we,Oi),v.classList.add(Te))},Ch=(y,N)=>{let ge=L[y];!ge||(ge.setAttr("aria-label",N),uh[y]=N)},Hn=y=>{if(Ot=void 0,L.length<=1){Mt=!1,v.classList.remove(Ze);return}Mt=y,v.classList.toggle(Ze,Mt)},Wd=()=>{_o(rt(g.getAttribute(R))),ir=rt(g.getAttribute(Y)),sr=rt(g.getAttribute(F));let y=Ee(g,/^pointer([0-9]*)-disabled$/,N=>rt(N));for(let N of y){let ge=N[0];!L[ge]||(L[ge].disabled=N[1])}},Hd=()=>{let y=Ee(g,/^aria-label([0-9]*)$/);for(let N of y){let ge=N[0];Ch(ge,N[1])}},Bd=y=>{let N=L.length,ge=L[N-1].$pointer,it=ge.cloneNode(!0);ge.after(it);let wt=G(g,it,N);return wt.setCallbacks(fh,gh,mh,yh),L.push(wt),Nn(y,N),Yr(),Yi(),N},Vd=()=>{let y=L.length,N=L[y-1];return N?(N.destroy(),L.pop(),L.length<=1&&Hn(!1),Yr(),Yi(),y-1):-1};return(()=>{var y,N;for(let it of L)it.setCallbacks(fh,gh,mh,yh);let ge=(y=g.shadowRoot)==null?void 0:y.querySelector(".panel-fill");ge&&($e=De(ge)),Co(g.getAttribute(C)),Oo(rt(g.getAttribute(B))),Ao(rt(g.getAttribute(A))),jd(g.getAttribute(p),g.getAttribute(f)),Wn(g.getAttribute(b)),Po(g.getAttribute(u)),$h(U.map(it=>it[1])),So(rt(g.getAttribute(a))),$o(je(g.getAttribute(o),0)),ko(je(g.getAttribute(l),1/0)),Hn(rt(g.getAttribute(h))),Eo(je(g.getAttribute(w),ls)),Wd(),Hd(),Me=Re(g,v,L),Ph((N=g.getAttribute(ht))!=null?N:ch),v.addEventListener("mousedown",dh),v.addEventListener("mouseup",Mn),v.addEventListener("touchmove",Gi),v.addEventListener("touchstart",Gi),sr||document.addEventListener("wheel",Tn,{passive:!1}),le=Ie(g,Md,{setValues:$h,setMin:Fn,setMax:jn,setStep:Wn,setPointersOverlap:So,setPointersMinDistance:$o,setPointersMaxDistance:ko,setDisabled:_o,setType:Co,setRightToLeft:Oo,setBottomToTop:Ao,setRound:Eo,setKeyboardDisabled:kh,setMousewheelDisabled:_h,setRangeDragging:Hn,setData:Po},{getPercents:vh,getValues:bh,getPointerElements:wh,getMin:xh,getMax:Sh,getStep:lo,getData:ho,getType:co,getRound:uo,getTextMin:Un,getTextMax:zn,isRightToLeft:go,isBottomToTop:mo,isDisabled:yo,isKeyboardDisabled:vo,isMousewheelDisabled:bo,isPointersOverlap:wo,isRangeDraggingEnabled:xo,getPointersMinDistance:po,getPointersMaxDistance:fo}),le.init()})(),{get pointers(){return L},get styles(){return Me},get pluginsManager(){return le},get min(){return Un()},get max(){return zn()},get step(){return lo()},get pointersOverlap(){return wo()},set pointersOverlap(y){So(y)},get pointersMinDistance(){return po()},set pointersMinDistance(y){$o(y)},get pointersMaxDistance(){return fo()},set pointersMaxDistance(y){ko(y)},get disabled(){return yo()},set disabled(y){_o(y)},get data(){return ho()},get type(){return co()},set type(y){Co(y)},get rightToLeft(){return go()},set rightToLeft(y){Oo(y)},get bottomToTop(){return mo()},set bottomToTop(y){Ao(y)},get round(){return uo()},set round(y){Eo(y)},get animateOnClick(){return Oi},set animateOnClick(y){Ph(y)},get keyboardDisabled(){return vo()},set keyboardDisabled(y){kh(y)},get mousewheelDisabled(){return bo()},set mousewheelDisabled(y){_h(y)},get rangeDragging(){return xo()},set rangeDragging(y){Hn(y)},setMin:Fn,setMax:jn,setValue:Nn,setStep:Wn,setData:Po,getTextValue:hs,setAriaLabel:Ch,getAriaLabel:Fd,addPointer:Bd,removePointer:Vd,destroy:()=>{v.removeEventListener("mousedown",dh),v.removeEventListener("mouseup",Mn),v.removeEventListener("touchmove",Gi),v.removeEventListener("touchstart",Gi),document.removeEventListener("wheel",Tn);for(let y of L)y.destroy();le==null||le.destroy()}}},Ad=(g,v,U)=>{let L=ke.find(([le,ce,ze,Ne])=>ce.replace("#","")===v.replace(/\d+/g,""));if(L&&g.styles){let[le,ce,ze,Ne]=L,ve=v.replace(/\D/g,"").trim(),Qe=ve===""||ve==="0"||ve==="1"?0:je(ve,0)-1;g.styles.setStyle(le,U,Qe);return}switch(g&&g.pluginsManager&&g.pluginsManager.onAttrChange(v,U),v){case p:{g.setMin(U);break}case f:{g.setMax(U);break}case b:{g.setStep(U);break}case a:{g.pointersOverlap=rt(U);break}case o:{g.pointersMinDistance=je(U,0);break}case h:{g.rangeDragging=rt(U);break}case l:{g.pointersMaxDistance=je(U,1/0);break}case R:{g.disabled=rt(U);break}case Y:{g.keyboardDisabled=rt(U);break}case F:{g.mousewheelDisabled=rt(U);break}case u:{g.setData(U);break}case C:{g.type=U;break}case B:{g.rightToLeft=rt(U);break}case A:{g.bottomToTop=rt(U);break}case w:{g.round=je(U,ls);break}case P:{g.styles&&(g.styles.theme=U);break}case ht:{g.animateOnClick=U;break}}let ne=null;if(/^value([0-9]*)$/.test(v)&&(ne="value"),/^pointer([0-9]*)-disabled$/.test(v)&&(ne="pointer-disabled"),/^aria-label([0-9]*)$/.test(v)&&(ne="aria-label"),/^pointer([0-9]*)-shape$/.test(v)&&(ne="pointer-shape"),!ne)return;let $e=v.replace(/\D/g,"").trim(),Me=$e===""||$e==="0"||$e==="1"?0:je($e,0)-1;switch(ne){case"value":{g.setValue(U,Me);break}case"pointer-disabled":{let le=g==null?void 0:g.pointers[Me];if(!le)return;le.disabled=rt(U);break}case"aria-label":{g.setAriaLabel(Me,U);break}case"pointer-shape":{g.styles&&g.styles.setPointerShape(Me,U);break}}},Ed=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(g){this.slider&&this.slider.setStep(g)}get step(){var g;return(g=this.slider)==null?void 0:g.step}set disabled(g){this.slider&&(this.slider.disabled=g)}get disabled(){var g,v;return(v=(g=this.slider)==null?void 0:g.disabled)!=null?v:!1}set data(g){var v;(v=this.slider)==null||v.setData(g)}get data(){var g;return(g=this.slider)==null?void 0:g.data}set min(g){var v;(v=this.slider)==null||v.setMin(g)}get min(){var g;return(g=this.slider)==null?void 0:g.min}set max(g){var v;(v=this.slider)==null||v.setMax(g)}get max(){var g;return(g=this.slider)==null?void 0:g.max}set round(g){!this.slider||(this.slider.round=g)}get round(){var g,v;return(v=(g=this.slider)==null?void 0:g.round)!=null?v:ls}set type(g){!this.slider||(this.slider.type=g??Ae)}get type(){var g;return((g=this.slider)==null?void 0:g.type)||Ae}set pointersOverlap(g){!this.slider||(this.slider.pointersOverlap=g)}get pointersOverlap(){var g,v;return(v=(g=this.slider)==null?void 0:g.pointersOverlap)!=null?v:!1}set pointersMinDistance(g){!this.slider||(this.slider.pointersMinDistance=g)}get pointersMinDistance(){var g,v;return(v=(g=this.slider)==null?void 0:g.pointersMinDistance)!=null?v:0}set pointersMaxDistance(g){!this.slider||(this.slider.pointersMaxDistance=g)}get pointersMaxDistance(){var g,v;return(v=(g=this.slider)==null?void 0:g.pointersMaxDistance)!=null?v:1/0}set theme(g){!this.slider||!this.slider.styles||(this.slider.styles.theme=g)}get theme(){var g,v,U;return(U=(v=(g=this.slider)==null?void 0:g.styles)==null?void 0:v.theme)!=null?U:null}set rtl(g){!this.slider||(this.slider.rightToLeft=g)}get rtl(){var g,v;return(v=(g=this.slider)==null?void 0:g.rightToLeft)!=null?v:!1}set btt(g){!this.slider||(this.slider.bottomToTop=g)}get btt(){var g,v;return(v=(g=this.slider)==null?void 0:g.bottomToTop)!=null?v:!1}set keyboardDisabled(g){!this.slider||(this.slider.keyboardDisabled=g)}get keyboardDisabled(){var g,v;return(v=(g=this.slider)==null?void 0:g.keyboardDisabled)!=null?v:!1}set mousewheelDisabled(g){!this.slider||(this.slider.mousewheelDisabled=g)}get mousewheelDisabled(){var g,v;return(v=(g=this.slider)==null?void 0:g.mousewheelDisabled)!=null?v:!1}set animateOnClick(g){!this.slider||(this.slider.animateOnClick=g)}get animateOnClick(){var g;return(g=this.slider)==null?void 0:g.animateOnClick}get rangeDragging(){var g,v;return(v=(g=this.slider)==null?void 0:g.rangeDragging)!=null?v:!1}set rangeDragging(g){this.slider&&(this.slider.rangeDragging=rt(g))}get externalCSSList(){return this._externalCSSList}addPointer(g){var v,U;if(!this.slider)return;let L=(U=(v=this.slider)==null?void 0:v.addPointer(g))!=null?U:0;lh(this,this.slider,L,`value${L+1}`,`ariaLabel${L+1}`,`pointerShape${L+1}`,`pointer${L+1}Disabled`)}removePointer(){var g;!this.slider||(g=this.slider)==null||g.removePointer()}addCSS(g){if(!this.shadowRoot)return;let v=document.createElement("style");v.textContent=g,this.shadowRoot.appendChild(v)}connectedCallback(){var g,v;if(!this.shadowRoot)return;this._externalCSSList=X(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let U=(g=this.shadowRoot)==null?void 0:g.querySelector(".pointer");if(!U)return;let L=(v=this.shadowRoot)==null?void 0:v.getElementById("range-slider");if(!L)return;let ne=Yt(this,U);this.slider=Od(this,L,ne),Pd(this,this.slider),this._observer=new MutationObserver($e=>{$e.forEach(Me=>{var le;if(!this.slider||Me.type!=="attributes")return;let ce=Me.attributeName;!ce||Ad(this.slider,ce,(le=this.getAttribute(ce))!=null?le:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},oo=Ed;window.tcRangeSlider=oo,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",oo),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends oo{})})();const Eb=r=>!isNaN(parseFloat(r))&&isFinite(r),hi=(r,e)=>Eb(r)?Number(r):e,jo=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const Kn=40,Jn=35,Zn=30,Ac="#475569",Ec="#fff",Lc=20,Lb=()=>{let r=null,e=null,t=!1,i=Kn,s=Jn,n=Zn,a=Ac,o=Ec,l="",h="",u,p=[],f=null,b=null;const w=()=>{f==null||f.classList.toggle("is-after",i<=0)},C=()=>{var V;const k=(V=r==null?void 0:r.shadowRoot)==null?void 0:V.querySelector("#range-slider");f=document.createElement("div"),f.classList.add("tooltips"),k.prepend(f),w()},P=k=>{const V=document.createElement("div");return V.style.zIndex=Lc.toString(),V.className=k,V},B=(k,V,ue,se,Le)=>{k&&(V==="vertical"?(k.style.left=`${-i}px`,k.style.top=se??"0"):(k.style.left=ue??"0",k.style.top=`${-i}px`),k.style.width=`${s}px`,k.style.height=`${n}px`,k.style.background=a,k.style.color=o,k.style.zIndex=Le.toString())},A=k=>{let V=k;return typeof u=="function"&&(V=u(k)),h==="prefix"?`${l}${V}`:`${V}${l}`},R=()=>{const k=(e==null?void 0:e.getValues())??[],V=(e==null?void 0:e.getPointerElements())??[],ue=(e==null?void 0:e.getType())??"horizontal";if(k)for(let se=0;se<k.length;se++){const Le=p[se];if(!Le)continue;const qe=(k[se]??"").toString();Le.textContent=A(qe),B(Le,ue,V[se].style.left,V[se].style.top,V[se].style.zIndex)}},Y=()=>{const k=(e==null?void 0:e.getValues())??[];if(k){for(let V=0;V<k.length;V++){const ue=P(`tooltip tooltip-${V+1}`);ue.style.position="absolute",p.push(ue),f==null||f.prepend(ue)}R()}},F=()=>{r&&(b=new ResizeObserver(k=>{for(const V of k)R()}),b.observe(r))},ie=k=>{t=k,t?(C(),Y(),F()):he()},$=k=>{i=k,R()},E=k=>{s=k,R()},I=k=>{n=k,R()},M=k=>{a=k,R()},j=k=>{o=k,R()},T=k=>{l=k,R()},z=k=>{h=k,R()},D=k=>{u=k,R()},q=k=>{if(!t||!k.values)return;const V=(e==null?void 0:e.getPointerElements())??[],ue=(e==null?void 0:e.getType())??"horizontal";for(let se=0;se<k.values.length;se++){const Le=k.values[se],qe=p[se];if(Le===void 0&&qe){qe.remove(),p[se]=void 0;continue}if(Le!==void 0&&!qe){const ht=P(`tooltip tooltip-${se+1}`),oe=(Le??"").toString();ht.textContent=A(oe),ht.style.position="absolute",B(ht,ue,V[se].style.left,V[se].style.top,V[se].style.zIndex),p[se]=ht,f==null||f.append(ht)}if(!qe)continue;const at=(Le??"").toString();qe.textContent=A(at),B(qe,ue,V[se].style.left,V[se].style.top,V[se].style.zIndex)}},he=()=>{f==null||f.remove();for(const k of p)k&&k.remove();p=[],b==null||b.disconnect()};return{get name(){return"Moving Tooltip"},init:(k,V,ue,se)=>{r=k,e=se,i=hi(k.getAttribute("moving-tooltip-distance-to-pointer"),Kn),s=hi(k.getAttribute("moving-tooltip-width"),Jn),n=hi(k.getAttribute("moving-tooltip-height"),Zn),a=k.getAttribute("moving-tooltip-bg")||Ac,o=k.getAttribute("moving-tooltip-text-color")||Ec,l=k.getAttribute("moving-tooltip-units")||"",h=k.getAttribute("moving-tooltip-units-type")||"",ie(jo(k.getAttribute("moving-tooltip")))},update:q,onAttrChange:(k,V)=>{k==="moving-tooltip"&&ie(jo(V)),k==="moving-tooltip-distance-to-pointer"&&$(hi(V,Kn)),k==="moving-tooltip-width"&&E(hi(V,Jn)),k==="moving-tooltip-height"&&I(hi(V,Zn)),k==="moving-tooltip-bg"&&M(V),k==="moving-tooltip-text-color"&&j(V),k==="moving-tooltip-units"&&T(V),k==="moving-tooltip-units-type"&&z(V)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:k=>{ie(jo(k))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:k=>{$(hi(k,Kn))}}},{name:"tooltipWidth",attributes:{get(){return s},set:k=>{E(hi(k,Jn))}}},{name:"tooltipHeight",attributes:{get(){return n},set:k=>{I(hi(k,Zn))}}},{name:"tooltipBg",attributes:{get(){return a},set:k=>{M(k)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:k=>{j(k)}}},{name:"tooltipUnits",attributes:{get(){return l},set:k=>{T(k)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:k=>{z(k)}}},{name:"formatTooltipValue",attributes:{get(){return u},set:k=>{D(k)}}}],css:`
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
  z-index: ${Lc};
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
    `,destroy:he}};window.tcRangeSliderPlugins.push(Lb);(()=>{var r=(o,l,h,u,p)=>{let f=l-o;return f===0?h:(u-h)*(p-o)/f+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,u=null,p=null,f=!1,b=s,w=n,C=()=>{var $;let E=($=o==null?void 0:o.shadowRoot)==null?void 0:$.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),u=document.createElement("div"),u.classList.add("mark-points"),h.append(u),p=document.createElement("div"),p.classList.add("mark-values"),h.append(p),E.append(h)},P=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},B=()=>{var $;if(!h||!l)return;let E=l.getMin(),I=l.getMax(),M=l.getType()==="vertical",j=l.isRightToLeft()||l.isBottomToTop();for(let z=0;z<b;z++){let D=document.createElement("div");D.classList.add("mark",`mark-${z}`);let q=b===0?0:z*100/(b-1);M?j?D.style.top=`${100-q}%`:D.style.top=`${q}%`:j?D.style.left=`${100-q}%`:D.style.left=`${q}%`,u==null||u.append(D)}let T=l.getData();for(let z=0;z<w;z++){let D=document.createElement("div");D.classList.add("mark-value",`mark-value-${z}`);let q=w===0?0:z*100/(w-1),he=r(0,w-1,E,I,z);D.textContent=(T?($=T[Math.round(he)])!=null?$:"":he).toString(),M?j?D.style.top=`${100-q}%`:D.style.top=`${q}%`:j?D.style.left=`${100-q}%`:D.style.left=`${q}%`,p==null||p.append(D)}},A=($,E)=>{ie(),b=$,w=E,b<=0&&(b=s),w<=0&&(w=n),C(),B(),P()},R=$=>{f=$,f?(C(),B(),P()):ie()},Y=$=>{!h||h.style.setProperty("--marks-color",$)},F=$=>{!h||h.style.setProperty("--values-color",$)},ie=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:($,E,I,M)=>{var j,T;l=M,o=$,f=i(o.getAttribute("marks")),f&&(A(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),Y((j=o.getAttribute("marks-color"))!=null?j:"#cbd5e1"),F((T=o.getAttribute("marks-values-color"))!=null?T:"#475569"))},onAttrChange:($,E)=>{$==="marks"&&R(i(E)),$==="marks-count"&&A(t(E,s),w),$==="marks-values-count"&&A(b,t(E,n)),$==="marks-color"&&Y(E),$==="marks-values-color"&&F(E)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return f??!1},set:$=>{R(i($))}}},{name:"marksCount",attributes:{get(){return b??s},set:$=>{A(t($,s),w)}}},{name:"marksValuesCount",attributes:{get(){return b??s},set:$=>{A(b,t($,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:$=>{Y($)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:$=>{F($)}}}],destroy:ie,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Db=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,ii=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Db(e,t,s),s};let Pr=class extends wr{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=me(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)}),this.registry.minmax.addListener(this.UUID,r=>{r&&(this.from=r.min,this.to=r.max)})}disconnectedCallback(){super.disconnectedCallback(),this.registry.range.removeListener(this.UUID),this.registry.minmax.removeListener(this.UUID),this.initialised=!1}firstUpdated(r){super.firstUpdated(r)}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
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

        `}};Pr.styles=pe`

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
    
    `;ii([ye({context:Ml,subscribe:!0}),x()],Pr.prototype,"min",2);ii([ye({context:Tl,subscribe:!0}),x()],Pr.prototype,"max",2);ii([ye({context:Ha,subscribe:!0}),x()],Pr.prototype,"from",2);ii([ye({context:Ba,subscribe:!0}),x()],Pr.prototype,"to",2);ii([x()],Pr.prototype,"hasFixedFrom",2);ii([x()],Pr.prototype,"hasFixedTo",2);ii([ye({context:$n,subscribe:!0}),x()],Pr.prototype,"palette",2);ii([x()],Pr.prototype,"sliderRef",2);ii([x()],Pr.prototype,"initialised",2);Pr=ii([J("registry-range-slider")],Pr);var Mb=Object.defineProperty,Tb=Object.getOwnPropertyDescriptor,En=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mb(e,t,s),s};let _s=class extends wr{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=me()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?O:m`
            <div ${be(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};En([ye({context:Ha,subscribe:!0})],_s.prototype,"from",2);En([ye({context:Ba,subscribe:!0})],_s.prototype,"to",2);En([d({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],_s.prototype,"fixed",2);En([d({type:String,reflect:!0,attribute:!0})],_s.prototype,"separator",2);_s=En([J("registry-range-display")],_s);var Ib=Object.defineProperty,Ub=Object.getOwnPropertyDescriptor,is=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ib(e,t,s),s};let wi=class extends wr{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.tourableElementRef=me()}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return m`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":O}" ${be(this.tourableElementRef)}>

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
        `}};wi.styles=pe`

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


    `;is([x()],wi.prototype,"histogram",2);is([d({type:Boolean,reflect:!0})],wi.prototype,"interactive",2);is([d({type:String,reflect:!0})],wi.prototype,"height",2);is([d({type:String,reflect:!0})],wi.prototype,"heightExpanded",2);is([d({type:Boolean,reflect:!0,converter:Ge(!1)})],wi.prototype,"expandable",2);is([x()],wi.prototype,"expanded",2);wi=is([J("registry-histogram")],wi);var zb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,jb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zb(e,t,s),s};let il=class extends ki{getTourableRoot(){}render(){const e=this.classList.contains("small")?"small":"";return m`
        
            <thermal-dropdown class="download ${e}">
            
                <span slot="invoker">${_(S.download)}</span>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.files.downloadAllFiles()}>${_(S.downloadoriginalfiles)}</thermal-button>
                    <small>${_(S.downloadoriginalfileshint)}</small>
                </div>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.forEveryInstance(t=>t.export.downloadPng())}>${_(S.pngofindividualimages)}</thermal-button>
                    <small>${_(S.pngofindividualimageshint)}</small>
                </div>
            
                <div slot="option">
            
                <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({})}>${_(S.pngofentiregroup)}</thermal-button>
                    <small>${_(S.pngofentiregrouphint)}</small>
                </div>
            
            
                <div slot="option">
                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${_(S.csvofanalysisdata)}</thermal-button>
                    <small>${_(S.csvofanalysisdatahint)}</small>
                </div>
            
            </thermal-dropdown>
        
        `}};il.styles=pe`
    
    `;il=jb([J("group-download-dropdown")],il);var Nb=Object.defineProperty,Ln=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Nb(e,t,s),s};class Ct extends ki{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Ln([ye({context:qa,subscribe:!0}),x()],Ct.prototype,"parentFileProviderElement");Ln([ye({context:ud,subscribe:!0}),x()],Ct.prototype,"loading");Ln([ye({context:Ul,subscribe:!0}),x()],Ct.prototype,"file");Ln([ye({context:cd,subscribe:!0}),x()],Ct.prototype,"failure");Ln([ye({context:Nl,subscribe:!0}),x()],Ct.prototype,"recording");const oh=class oh extends Ct{constructor(){super(...arguments),this.ref=me()}onInstanceCreated(){}onFailure(){}getTourableRoot(){return this.ref.value}render(){return m`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${be(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};oh.styles=pe`
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

    `;let es=oh;var Wb=Object.defineProperty,Hb=Object.getOwnPropertyDescriptor,xd=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wb(e,t,s),s};let ka=class extends ki{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return m`
            <slot>
                <button class="default">${_(S.range).toLowerCase()}</button>
            </slot>
        `}};ka.styles=es.styles;xd([ye({context:Va,subscribe:!0})],ka.prototype,"setter",2);ka=xd([J("group-range-propagator")],ka);var Bb=Object.defineProperty,Vb=Object.getOwnPropertyDescriptor,Gb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bb(e,t,s),s};let sl=class extends ki{getTourableRoot(){}render(){return m`
        
                <button class="default" @click=${()=>this.group.files.downloadAllFiles()}>${_(S.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${()=>this.group.forEveryInstance(r=>r.export.downloadPng())}>${_(S.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${()=>this.group.analysisSync.png.downloadPng({})}>${_(S.pngofentiregroup)}</button>
            
                <button class="default" @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${_(S.csvofanalysisdata)}</button>
        
        `}};sl.styles=pe`

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
    
    `;sl=Gb([J("group-download-buttons")],sl);var Yb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,Xb=(r,e,t,i)=>{for(var s=i>1?void 0:i?qb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yb(e,t,s),s};let nl=class extends Ct{constructor(){super(...arguments),this.container=me()}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(r){const e=this.getContainer();if(e!==void 0)r.mountToDom(e),r.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(r){var e;if(super.updated(r),r.has("file")){const t=r.get("file"),i=this.file;t===void 0&&i!==void 0&&this.container.value&&this.file&&((e=this.file.dom)==null?void 0:e.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return m`
            <div ${be(this.container)} class=${Xt(t)} part="file-canvas-container">
            
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
                        </div>`:O}
            
            </div>

            <slot name="tour"></slot>
        
        `}};nl.styles=pe`

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
    `;nl=Xb([J("file-canvas")],nl);var Kb=Object.defineProperty,Jb=Object.getOwnPropertyDescriptor,Zb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Kb(e,t,s),s};let al=class extends Ct{onInstanceCreated(r){}onFailure(r){}render(){return this.file?m`
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
        `:O}};al.styles=pe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;al=Zb([J("file-share-button")],al);var Qb=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,t0=(r,e,t,i)=>{for(var s=i>1?void 0:i?e0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qb(e,t,s),s};let ol=class extends Ct{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?m`
            <thermal-dialog label=${_(S.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${_(S.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${Ht(this.renderRow(_(S.thermalfilename),this.file.fileName))}

                        ${Ht(this.renderDownloadRow(_(S.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,_(S.thermalfiledownload)))}

                        ${this.file.visibleUrl?Ht(this.renderDownloadRow(_(S.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,_(S.visiblefiledownload))):O}

                        ${Ht(this.renderRow(_(S.time),lt.human(this.file.timestamp)))}

                        ${Ht(this.renderNumericalRow(_(S.duration),this.file.duration,0,"ms"))}

                        ${Ht(this.renderRow(_(S.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Ht(this.renderNumericalRow(_(S.bytesize),this.file.bytesize,0))}
                        
                        ${Ht(this.renderNumericalRow(_(S.minimaltemperature),this.file.min,10,"°C"))}

                        ${Ht(this.renderNumericalRow(_(S.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${_(S.filetype)}</h2>
                    <table>
                    ${Ht(this.renderRow(_(S.type),this.file.reader.parser.name))}
                    ${Ht(this.renderRow(_(S.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${_(S.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>m`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:O}};ol.styles=pe`

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
    
    `;ol=t0([J("file-info-button")],ol);var r0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,s0=(r,e,t,i)=>{for(var s=i>1?void 0:i?i0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&r0(e,t,s),s};let ll=class extends Ct{constructor(){super(...arguments),this.tourableElementRef=me()}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?O:m`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${be(this.tourableElementRef)}>
                    <div class="button">
                        ${this.file?_(S.download):"..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">${_(S.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.downloadPng()}>${_(S.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?m`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${_(S.convertentiresequencetovideo)}</thermal-button>
                        </div>`:O}
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `}};ll.styles=pe`

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
    
    `;ll=s0([J("file-download-dropdown")],ll);const _a=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:Se(r,"m:ss")}),n0=(r,e,t,i)=>{const s=[];let n=1;const a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(_a(o,i,"minor")),n+=1}return e<i&&s.push(_a(e,i,"major")),s},No=60*1e3,Ki=50,fs=3,hl=(r,e)=>{const t=Math.floor(r/Ki),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=No;for(;o<e;)n0(o,l,n,e).forEach(h=>a.push(h)),o+=No,l+=No;return a.push(_a(0,e,"bound")),a.push(_a(e,e,"bound")),a},a0=r=>m`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,Dc=(r,e,t)=>m`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,Sd=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return m`<div class="ticks">
        
        ${e.map(a0)}

        ${Dc(s,Se(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?Dc(n,Se(i,"m:ss:SSS"),"pointer"):O}

    </div>`},$d=pe`

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
            width: ${Ki}px;
            left: -${Ki/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${fs}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${Ki/2}px;
            padding-right: ${Ki/2}px;
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
                top: -${fs}px;
            }

            .tick-pointer {
                width: ${fs*2}px;
                height: ${fs*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${fs}px;
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
            height: ${fs}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${Ki}px;
            position: relative;
            left: -${Ki/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var o0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?l0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o0(e,t,s),s};let It=class extends Ct{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=me(),this.barRef=me(),this.containerRef=me(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.markers=[],this.collapsed=!1,this.ticks=[]}getTourableRoot(){return this.containerRef.value}onInstanceCreated(r){this.containerRef.value&&(this.ticks=hl(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=hl(t.contentRect.width,this.file.duration)),t.contentRect.width<It.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return O;if(r.duration===0)return O;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return m`
            <div class="${Xt(e)}" ${be(this.containerRef)}>


                ${r!==void 0?m`

                        <div class="ticks-horizontal-indent">

                            <notation-timeline></notation-timeline>


                            <div class="${Xt(s)}"  ${be(this.timelineRef)}>

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


                            ${this.currentFrame?Sd(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):O}

                            


                            ${this.hasPlayButton===!0?m`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${_(S.prev)}</thermal-button>


                                        <button class="${Xt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


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

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${_(S.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${_(S.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                </div>

                                `:O}

                            
                        </div>
                    `:O}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?m`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${_(S.date)}:</span> 
                            <span class="inline">${Se(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${_(S.time)}:</span> 
                            <span class="inline">${Se(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${_(S.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(n=this.file)==null?void 0:n.frameCount}</span>
                        </div>
                    </div>`:O}

            <slot name="tour"></slot>

          `}};It.collapseWidth=500;It.styles=pe`
    
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

        ${$d}


        .controls {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }
    
    `;fr([ye({context:Ka,subscribe:!0}),x()],It.prototype,"playing",2);fr([ye({context:Pn,subscribe:!0}),x()],It.prototype,"currentFrame",2);fr([ye({context:Fl,subscribe:!0}),x()],It.prototype,"duration",2);fr([ye({context:pd,subscribe:!0}),x()],It.prototype,"mayStop",2);fr([ye({context:zl,subscribe:!0})],It.prototype,"cursor",2);fr([ye({context:dd,subscribe:!0})],It.prototype,"cursorSetter",2);fr([d({type:String,reflect:!0})],It.prototype,"hasPlayButton",2);fr([d({type:String,reflect:!0})],It.prototype,"hasInfo",2);fr([d({type:String,reflect:!0})],It.prototype,"interactive",2);fr([ye({context:Wl,subscribe:!0})],It.prototype,"markers",2);fr([x()],It.prototype,"collapsed",2);fr([x()],It.prototype,"ticks",2);fr([x()],It.prototype,"pointerMs",2);It=fr([J("file-timeline")],It);var h0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,Vl=(r,e,t,i)=>{for(var s=i>1?void 0:i?c0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h0(e,t,s),s};let on=class extends Ct{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return this.file===void 0?O:m`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option" style="font-size: calc( var(--thermal-fs-sm) * .9);">${_(S.playbackspeed)}</div>

                    ${Object.entries(Cu).map(([r])=>m`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof vi&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};on.styles=pe`

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
    
    `;Vl([d({type:String,reflect:!0})],on.prototype,"enabled",2);Vl([ye({context:jl,subscribe:!0}),x()],on.prototype,"playbackSpeed",2);on=Vl([J("file-playback-speed-dropdown")],on);var u0=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,Gl=(r,e,t,i)=>{for(var s=i>1?void 0:i?d0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&u0(e,t,s),s};let ln=class extends Ct{constructor(){super(...arguments),this.container=me()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return m`
            <div class="container">
            
                <video ${be(this.container)} preload="metadata">

                    ${this.url===void 0?O:m`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};ln.styles=pe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Gl([ye({context:Pn,subscribe:!0}),x()],ln.prototype,"currentFrame",2);Gl([d({type:String,reflect:!0,attribute:!0})],ln.prototype,"url",2);ln=Gl([J("file-video")],ln);const p0=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),Se(t,"mm:ss:SSS")},f0=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var g0=Object.defineProperty,m0=Object.getOwnPropertyDescriptor,si=(r,e,t,i)=>{for(var s=i>1?void 0:i?m0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&g0(e,t,s),s};const Yl={fromAttribute:r=>r===null?null:f0(r),toAttribute:r=>r===null?null:p0(r)};let Hr=class extends Ct{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return O}};si([ye({context:Ka,subscribe:!0}),x()],Hr.prototype,"playing",2);si([ye({context:Xa,subscribe:!0}),x()],Hr.prototype,"ms",2);si([d({type:String,reflect:!0,attribute:!0})],Hr.prototype,"label",2);si([d({type:String,reflect:!0,attribute:!0,converter:Yl})],Hr.prototype,"start",2);si([d({type:String,reflect:!0,attribute:!0,converter:Yl})],Hr.prototype,"end",2);si([d({type:String,reflect:!0,attribute:!0,converter:Yl})],Hr.prototype,"dur",2);si([d({type:String,reflect:!0,attribute:!0})],Hr.prototype,"active",2);si([d({type:String,reflect:!0,attribute:!0})],Hr.prototype,"pauseOnActivate",2);si([d({type:String,reflect:!0,attribute:!0})],Hr.prototype,"say",2);Hr=si([J("file-marker")],Hr);var y0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,ss=(r,e,t,i)=>{for(var s=i>1?void 0:i?v0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&y0(e,t,s),s};let xi=class extends Ct{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return m`

            <div class="${Xt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};xi.styles=pe`
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


    `;ss([ye({context:Fl,subscribe:!0}),x()],xi.prototype,"duration",2);ss([ye({context:Pn,subscribe:!0}),x()],xi.prototype,"currentFrame",2);ss([ye({context:Xa,subscribe:!0}),x()],xi.prototype,"ms",2);ss([d({type:Number,reflect:!0,attribute:!0})],xi.prototype,"start",2);ss([d({type:Number,reflect:!0,attribute:!0})],xi.prototype,"end",2);ss([x()],xi.prototype,"active",2);xi=ss([J("file-marker-timeline")],xi);var b0=Object.defineProperty,w0=Object.getOwnPropertyDescriptor,kd=(r,e,t,i)=>{for(var s=i>1?void 0:i?w0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&b0(e,t,s),s};let Pa=class extends Ct{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return m`
            <div>


            ${this.markers.map(r=>r.active?m`<div class="item">
                    <h2>${r.label}</h2>
                    ${Ht(r.innerHTML)}
                    </div>`:O)}

            
            
            </div>

          `}};Pa.styles=pe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;kd([ye({context:Wl,subscribe:!0})],Pa.prototype,"markers",2);Pa=kd([J("file-marks-content")],Pa);var x0=Object.defineProperty,S0=Object.getOwnPropertyDescriptor,ql=(r,e,t,i)=>{for(var s=i>1?void 0:i?S0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&x0(e,t,s),s};let hn=class extends nt{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return m`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};hn.styles=pe`

    
    `;ql([d()],hn.prototype,"analysis",2);ql([x()],hn.prototype,"name",2);hn=ql([J("analysis-name")],hn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Xl(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var $0=Object.defineProperty,k0=Object.getOwnPropertyDescriptor,Kl=(r,e,t,i)=>{for(var s=i>1?void 0:i?k0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$0(e,t,s),s};let cn=class extends nt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return m`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?O:m`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Xl(ia,r=>m`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};cn.styles=pe`

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
    
    `;Kl([d()],cn.prototype,"analysis",2);Kl([x()],cn.prototype,"color",2);cn=Kl([J("analysis-color")],cn);var _0=Object.defineProperty,P0=Object.getOwnPropertyDescriptor,Rr=(r,e,t,i)=>{for(var s=i>1?void 0:i?P0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_0(e,t,s),s};let hr=class extends nt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return m`

            <div class="table">

                <thermal-field label=${_(S.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${_(S.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${_(S.left)}>
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

                <thermal-field label=${_(S.right)}>
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

                <thermal-field label=${_(S.top)}>
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

                <thermal-field label=${_(S.bottom)}>
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
    
        
        `}};hr.styles=pe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Rr([d()],hr.prototype,"analysis",2);Rr([x()],hr.prototype,"color",2);Rr([x()],hr.prototype,"top",2);Rr([x()],hr.prototype,"left",2);Rr([x()],hr.prototype,"width",2);Rr([x()],hr.prototype,"height",2);Rr([x()],hr.prototype,"type",2);Rr([x()],hr.prototype,"right",2);Rr([x()],hr.prototype,"bottom",2);Rr([x()],hr.prototype,"maxX",2);Rr([x()],hr.prototype,"maxY",2);hr=Rr([J("edit-area")],hr);var C0=Object.defineProperty,O0=Object.getOwnPropertyDescriptor,Ts=(r,e,t,i)=>{for(var s=i>1?void 0:i?O0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&C0(e,t,s),s};let ji=class extends nt{constructor(){super(...arguments),this.topInputRef=me(),this.leftInputRef=me()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return m`

            <div class="table">

                <thermal-field label=${_(S.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${_(S.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${_(S.top)} hint=${_(S.fromto,{from:0,to:this.maxX})}>
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

                <thermal-field label=${_(S.left)} hint=${_(S.fromto,{from:0,to:this.maxX})}>
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
        
        `}};ji.styles=pe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Ts([d()],ji.prototype,"analysis",2);Ts([x()],ji.prototype,"top",2);Ts([x()],ji.prototype,"left",2);Ts([x()],ji.prototype,"maxX",2);Ts([x()],ji.prototype,"maxY",2);ji=Ts([J("edit-point")],ji);var A0=Object.defineProperty,E0=Object.getOwnPropertyDescriptor,Za=(r,e,t,i)=>{for(var s=i>1?void 0:i?E0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&A0(e,t,s),s};let un=class extends nt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return m`

            <thermal-dialog label="${_(S.editsth,{what:_(S[this.type])})}">

                <thermal-button slot="invoker">${_(S.edit)}</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof _r?m`<edit-point .analysis=${this.analysis}></edit-point>`:m`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Za([d()],un.prototype,"analysis",2);Za([x()],un.prototype,"name",2);Za([x()],un.prototype,"type",2);un=Za([J("file-analysis-edit")],un);var L0=Object.defineProperty,D0=Object.getOwnPropertyDescriptor,Sr=(r,e,t,i)=>{for(var s=i>1?void 0:i?D0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&L0(e,t,s),s};let Zt=class extends Ct{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=me(),this.graphRef=me(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return m`

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
                        ></thermal-chart>`:O}
            </div>

            

            </div>
        
        `}};Zt.styles=pe`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Sr([x()],Zt.prototype,"hydrated",2);Sr([d({reflect:!0})],Zt.prototype,"graphWidth",2);Sr([d({reflect:!0})],Zt.prototype,"graphHeight",2);Sr([x()],Zt.prototype,"graphs",2);Sr([ye({context:Pn,subscribe:!0})],Zt.prototype,"currentFrame",2);Sr([ye({context:zl,subscribe:!0})],Zt.prototype,"cursor",2);Sr([ye({context:dd,subscribe:!0})],Zt.prototype,"cursorSetter",2);Sr([x()],Zt.prototype,"shadowLeft",2);Sr([x()],Zt.prototype,"shadowTop",2);Sr([x()],Zt.prototype,"shadowWidth",2);Sr([x()],Zt.prototype,"shadowHeight",2);Sr([ye({context:Na,subscribe:!0})],Zt.prototype,"graphSmooth",2);Zt=Sr([J("file-analysis-graph")],Zt);const Hi="interactive-analysis-context";var R0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,ni=(r,e,t,i)=>{for(var s=i>1?void 0:i?M0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&R0(e,t,s),s};let Cr=class extends nt{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof Ur?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof _r?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return m`
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
            ${this.interactiveanalysis===!0?m`<u aria-hidden="true"></u>`:O}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?m`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${_(S.remove)}</thermal-button>
        </td>`:O}
        
        `}};Cr.styles=pe`
    
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

    `;ni([d()],Cr.prototype,"analysis",2);ni([ye({context:Hi,subscribe:!0})],Cr.prototype,"interactiveanalysis",2);ni([x()],Cr.prototype,"value",2);ni([x()],Cr.prototype,"graph",2);ni([x()],Cr.prototype,"may",2);ni([x()],Cr.prototype,"dimension",2);ni([x()],Cr.prototype,"color",2);ni([d({type:Boolean,reflect:!0,attribute:!0})],Cr.prototype,"selected",2);ni([x()],Cr.prototype,"name",2);Cr=ni([J("file-analysis-table-row")],Cr);var T0=Object.defineProperty,I0=Object.getOwnPropertyDescriptor,Dn=(r,e,t,i)=>{for(var s=i>1?void 0:i?I0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&T0(e,t,s),s};let ts=class extends Ct{constructor(){super(...arguments),this.container=me(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?O:m`

        <div class="overflow" ${be(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?m`<u aria-hidden="true"></u>`:O}
                            <span>${_(S.analysis)}</span>
                            ${this.hasHighlightedData?m`<button @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${_(S.downloadgraphdataascsv)}>CSV</button>`:O}
                        </th>
                        <th>${_(S.avg)}</th>
                        <th>${_(S.min)}</th>
                        <th>${_(S.max)}</th>
                        <th>${_(S.size)}</th>
                        ${this.interactiveanalysis===!0?m`<th></th>`:O}
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
        `}};ts.styles=pe`
    
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

        



    `;Dn([ye({context:Hi,subscribe:!0}),d()],ts.prototype,"interactiveanalysis",2);Dn([x()],ts.prototype,"analysis",2);Dn([x()],ts.prototype,"allSelected",2);Dn([x()],ts.prototype,"hasHighlightedData",2);ts=Dn([J("file-analysis-table")],ts);var U0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,F0=(r,e,t,i)=>{for(var s=i>1?void 0:i?z0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&U0(e,t,s),s};let Rc=class extends es{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};Rc=F0([J("file-download-lrc")],Rc);var j0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,W0=(r,e,t,i)=>{for(var s=i>1?void 0:i?N0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&j0(e,t,s),s};let Mc=class extends es{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng()}getDefaultLabel(){return"png"}};Mc=W0([J("file-download-png")],Mc);var H0=Object.defineProperty,B0=Object.getOwnPropertyDescriptor,Rn=(r,e,t,i)=>{for(var s=i>1?void 0:i?B0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&H0(e,t,s),s};let Ps=class extends es{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};Rn([d({type:String})],Ps.prototype,"label",2);Rn([d({type:Object})],Ps.prototype,"onEnter",2);Rn([d({type:Object})],Ps.prototype,"onLeave",2);Rn([d({type:Object})],Ps.prototype,"onAction",2);Ps=Rn([J("file-button")],Ps);var V0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,_d=(r,e,t,i)=>{for(var s=i>1?void 0:i?G0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&V0(e,t,s),s};let cl=class extends es{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max})}getDefaultLabel(){return _(S.range).toLowerCase()}};_d([ye({context:Va,subscribe:!0})],cl.prototype,"setter",2);cl=_d([J("file-range-propagator")],cl);var Y0=Object.defineProperty,q0=Object.getOwnPropertyDescriptor,Jl=(r,e,t,i)=>{for(var s=i>1?void 0:i?q0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Y0(e,t,s),s};let dn=class extends nt{constructor(){super(...arguments),this.expanded=!1}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}updated(r){super.updated(r),r.has("expanded")&&(this.expanded===!0?this.classList.add("expanded"):this.classList.remove("expanded"))}render(){return m`
            <div class="backdrop" @click=${()=>this.collapse()}></div>
            <div class="container">
                <button class="default" @click=${()=>{this.toggle()}}>${this.label??"..."}</button>
                <nav class="dropdown">
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
        `}};dn.styles=pe`
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



    `;Jl([d({type:String,reflect:!0})],dn.prototype,"label",2);Jl([x()],dn.prototype,"expanded",2);dn=Jl([J("file-dropdown")],dn);var X0=Object.defineProperty,K0=Object.getOwnPropertyDescriptor,ai=(r,e,t,i)=>{for(var s=i>1?void 0:i?K0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&X0(e,t,s),s};let Or=class extends Ct{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!1}getTourableRoot(){}onInstanceCreated(r){this.recorded=lt.human(r.timestamp)}onFailure(){}render(){return m`
        <thermal-app author=${re(this.author)} recorded=${re(this.recorded)} license=${re(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?m`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:O}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${_(S.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${_(S.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${_(S.filerendering)} 
                    hint=${_(S.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${_(S.adjusttimescale)}
                    hint=${_(S.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${_(S.colourpalette)}
                    hint=${_(S.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(S.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:O}

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(S.graphlines)}"
                    hint=${_(S.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:O}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?m`<file-share-button ></file-share-button>`:O}
            
              ${this.showabout===!0?m`<app-info-button ></app-info-button>`:O}

            </thermal-bar>
          </div>
            ${this.interactiveanalysis===!0?m`<group-tool-buttons slot="pre"></group-tool-buttons>`:O}
            
            ${this.showhistogram===!0?m`<registry-histogram slot="pre"></registry-histogram>`:O}

            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?m`<file-analysis-graph slot="post"></file-analysis-graph>`:O}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};Or.styles=pe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;ai([d({type:String,reflect:!0,attribute:!0,converter:Ge(!1)})],Or.prototype,"showembed",2);ai([d({type:String,reflect:!0,attribute:!0,converter:Ge(!1)})],Or.prototype,"showabout",2);ai([d({type:String,reflect:!0,attribute:!0,converter:Ge(!1)})],Or.prototype,"showfullscreen",2);ai([d({type:String,reflect:!0,converter:Ge(!0)})],Or.prototype,"showhistogram",2);ai([ye({context:Hi,subscribe:!0})],Or.prototype,"interactiveanalysis",2);ai([d()],Or.prototype,"author",2);ai([d()],Or.prototype,"recorded",2);ai([d()],Or.prototype,"license",2);ai([d()],Or.prototype,"label",2);Or=ai([J("file-app")],Or);var J0=Object.defineProperty,st=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&J0(e,t,s),s};class Je extends nt{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=me()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}st([d({type:String,reflect:!0})],Je.prototype,"url");st([d({type:String,reflect:!0})],Je.prototype,"visible");st([d({type:String,reflect:!0,attribute:!0})],Je.prototype,"palette");st([d({type:Number,reflect:!0,attribute:!0})],Je.prototype,"opacity");st([d({type:Number,reflect:!0})],Je.prototype,"from");st([d({type:Number,reflect:!0})],Je.prototype,"to");st([d()],Je.prototype,"author");st([d()],Je.prototype,"recorded");st([d()],Je.prototype,"license");st([d()],Je.prototype,"label");st([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],Je.prototype,"showembed");st([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],Je.prototype,"showabout");st([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],Je.prototype,"showtutorial");st([d({type:String,reflect:!1,converter:Ge(!0)})],Je.prototype,"showfullscreen");st([d({type:String,reflect:!0,converter:Ge(!0)})],Je.prototype,"showhistogram");st([ae({context:Hi}),d({type:String,reflect:!0,converter:Ge(!0)})],Je.prototype,"interactiveanalysis");st([d({type:String,reflect:!0})],Je.prototype,"analysis1");st([d({type:String,reflect:!0})],Je.prototype,"analysis2");st([d({type:String,reflect:!0})],Je.prototype,"analysis3");st([d({type:String,reflect:!0})],Je.prototype,"analysis4");st([d({type:String,reflect:!0})],Je.prototype,"analysis5");st([d({type:String,reflect:!0})],Je.prototype,"analysis6");st([d({type:String,reflect:!0})],Je.prototype,"analysis7");st([d({type:String,reflect:!0})],Je.prototype,"ms");st([d({type:String,reflect:!0})],Je.prototype,"speed");st([d({type:String,reflect:!0})],Je.prototype,"autoclear");st([x()],Je.prototype,"hasGraph");st([x()],Je.prototype,"hasAnalysis");st([x()],Je.prototype,"isSequence");var Z0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,ew=(r,e,t,i)=>{for(var s=i>1?void 0:i?Q0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Z0(e,t,s),s};let Tc=class extends Je{render(){return this.url===""?O:m`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${re(this.from)}
        to=${re(this.to)}
        opacity=${re(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}" autoclear=${this.autoclear}>

          <file-provider 
            thermal="${this.url}" 
            visible=${re(this.visible)}
            analysis1=${re(this.analysis1)}
            analysis2=${re(this.analysis2)}
            analysis3=${re(this.analysis3)}
            analysis4=${re(this.analysis4)}
            analysis5=${re(this.analysis5)}
            analysis6=${re(this.analysis6)}
            analysis7=${re(this.analysis7)}
            speed=${re(this.speed)}
            autoclear=${this.autoclear}
          >

              <file-app 
                author=${re(this.author)} 
                recorded=${re(this.recorded)} 
                license=${re(this.license)}
                label=${re(this.label)}  
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


    
    `}};Tc=ew([J("thermal-file-app")],Tc);class tw{constructor(e){this.steps=e,this.onStepInternalActivation=new te}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class Zl{constructor(e){this._active=!1,this.onTourActivationStatus=new te,this.onStepActivation=new te,this.storage=new tw(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new Zl(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var rw=Object.defineProperty,iw=Object.getOwnPropertyDescriptor,zt=(r,e,t,i)=>{for(var s=i>1?void 0:i?iw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rw(e,t,s),s};let _t=class extends Ct{constructor(){super(),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.showtutorial=!1,this.interactiveanalysis=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=me(),this.contentContainerWidth=1e3,this.tourController=Zl.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=lt.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return m`
        <thermal-app author=${re(this.author)} recorded=${re(this.recorded)} license=${re(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar" tour="palette">
            <tour-step placement="right-start" label=${_(S.colourpalette)}>
              ${_(S.palettehint)}
            </tour-step>
          </registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?m`<registry-opacity-slider slot="bar" style="width:4rem" tour="opacity">
            <tour-step slot="tour" label="Visible image">
              Use the slider to show the visible image.
            </tour-step>
            </registry-opacity-slider>`:O}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${_(S.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${_(S.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${_(S.filerendering)} 
                    hint=${_(S.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${_(S.adjusttimescale)}
                    hint=${_(S.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${_(S.colourpalette)}
                    hint=${_(S.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(S.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:O}

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(S.graphlines)}"
                    hint=${_(S.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:O}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown tour="download">
                <tour-step slot="tour" placement="left" label="Downloads">Zde si to stáhněte, vy volové</tour-step>
              </file-download-dropdown>
            
              ${this.showabout===!0?m`<app-info-button></app-info-button>`:O}

              ${this.showtutorial===!0?m`<thermal-button @click=${()=>this.tourController.activate(!1)}>
                ${_(S.tutorial)}
              </thermal-button>`:O}

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
                `:O}

                <div class="content-container__part content-container__left">

                ${this.showhistogram===!0?m`<registry-histogram slot="pre"></registry-histogram>`:O}
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
                        <div class="placeholder-title">${_(S.analysis)}</div>
                        <div>${_(S.analysishint)}</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?m`
                      <div>${_(S[(e=this.tool)==null?void 0:e.description])}</div>
                    `:m`
                      <div>
                        <thermal-button tourstepid="sth4" @click=${()=>this.group.tool.selectTool("add-point")}>${_(S.addpoint)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>${_(S.addrectangle)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>${_(S.addellipsis)}</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?m`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?m`<div class="placeholder">
                      <div class="placeholder-title">${_(S.graph)}</div>
                      <div>${this.hasAnalysis===!1?_(S.graphhint1):Ht(_(S.graphhint2))}</div>
                    </div>`:O}
                  
                  </div>
                  `:O}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>

        <notation-content></notation-content>
    `}};_t.styles=pe`


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
  
  `;zt([d({type:String,reflect:!0,attribute:!0,converter:Ge(!1)})],_t.prototype,"showembed",2);zt([d({type:String,reflect:!0,attribute:!0,converter:Ge(!1)})],_t.prototype,"showabout",2);zt([d({type:String,reflect:!0,attribute:!0,converter:Ge(!1)})],_t.prototype,"showfullscreen",2);zt([d({type:Boolean,reflect:!0,converter:Ge(!0)})],_t.prototype,"showhistogram",2);zt([d({type:String,reflect:!1,attribute:!0})],_t.prototype,"showtutorial",2);zt([ye({context:Hi,subscribe:!0})],_t.prototype,"interactiveanalysis",2);zt([x()],_t.prototype,"hasAnalysis",2);zt([x()],_t.prototype,"hasGraph",2);zt([x()],_t.prototype,"tool",2);zt([x()],_t.prototype,"isSequence",2);zt([d()],_t.prototype,"author",2);zt([d()],_t.prototype,"recorded",2);zt([d()],_t.prototype,"license",2);zt([d()],_t.prototype,"label",2);zt([ae({context:Wu})],_t.prototype,"tourController",2);zt([ae({context:Hu})],_t.prototype,"tourStep",2);zt([x()],_t.prototype,"contentContainerWidth",2);_t=zt([J("desktop-app")],_t);const Ql={fromAttribute:r=>{if(r){const e=r.split(":").map(Number);if(e.some(isNaN))return;if(e.length===3){const[t,i,s]=e;return t*6e4+i*1e3+s}else if(e.length===4){const[t,i,s,n]=e;return t*36e5+i*6e4+s*1e3+n}}},toAttribute:r=>{if(r!==void 0){const e=Math.floor(r/36e5),t=Math.floor(r%36e5/6e4),i=Math.floor(r%6e4/1e3),s=r%1e3,n=String(i).padStart(2,"0"),a=String(s).padStart(3,"0");return e>0?`${e}:${t}:${n}:${a}`:`${t}:${n}:${a}`}}};var sw=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,oi=(r,e,t,i)=>{for(var s=i>1?void 0:i?nw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sw(e,t,s),s};let Ar=class extends nt{constructor(){super(...arguments),this._active=!1}get active(){return this._active}willUpdate(r){super.willUpdate(r),r.has("duration")&&this.from!==void 0&&this.duration!==void 0&&(this.to=this.from+this.duration),r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from),r.has("from")&&!r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from)}activate(){this._active===!1&&(this._active=!0)}deactivate(){this._active===!0&&(this._active=!1)}setMs(r){this.from!==void 0&&this.to!==void 0&&(r>=this.from&&r<this.to?this.activate():this.deactivate())}getRenderContent(){return Array.from(this.slotContent)}getTTSString(){}render(){return m`
            <slot style="display: none;"></slot>
        `}};oi([d({type:Number,reflect:!0,converter:Ql})],Ar.prototype,"from",2);oi([d({type:Number,reflect:!0,converter:Ql})],Ar.prototype,"to",2);oi([d({type:Number,reflect:!0,converter:Ql})],Ar.prototype,"duration",2);oi([d({type:String,reflect:!0})],Ar.prototype,"label",2);oi([d({type:String})],Ar.prototype,"image",2);oi([d({type:String,reflect:!0})],Ar.prototype,"say",2);oi([d({type:String,reflect:!0})],Ar.prototype,"color",2);oi([x()],Ar.prototype,"_active",2);oi([Lr()],Ar.prototype,"slotContent",2);Ar=oi([J("notation-entry")],Ar);const Qa="NotationListContext",eo="NotationCurrentContext",to="NotationDurationContext",pi=r=>r.filter(e=>e instanceof Ar),eh=(r,e)=>{const t=[];for(const i of e.notationList)i.from!==void 0&&i.to!==void 0&&(i.from<=r&&i.to>r?(t.push(i),i.activate()):i.deactivate());return t};var aw=Object.defineProperty,ow=Object.getOwnPropertyDescriptor,ns=(r,e,t,i)=>{for(var s=i>1?void 0:i?ow(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&aw(e,t,s),s};let Ni=class extends Je{constructor(){super(...arguments),this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observer=null}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges(),this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.add(this.UUID,e=>{this.duration=e.timeline.duration,e.timeline.addListener(this.UUID,t=>{this.updateNotationsMs(t)})})}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=pi(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=pi(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=pi(r.assignedElements())}))}updateNotationsMs(r){this.notationCurrent=eh(r,this)}render(){return this.url===""?O:m`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${re(this.from)}
        to=${re(this.to)}
        opacity=${re(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${be(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${re(this.visible)}
            analysis1=${re(this.analysis1)}
            analysis2=${re(this.analysis2)}
            analysis3=${re(this.analysis3)}
            analysis4=${re(this.analysis4)}
            analysis5=${re(this.analysis5)}
            analysis6=${re(this.analysis6)}
            analysis7=${re(this.analysis7)}
            speed=${re(this.speed)}
            autoclear=${this.autoclear}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${re(this.author)} 
              recorded=${re(this.recorded)} 
              license=${re(this.license)}
              label=${re(this.label)}
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


    
    `}};ns([x()],Ni.prototype,"ms",2);ns([x(),Lr({flatten:!0})],Ni.prototype,"_notationSlot",2);ns([x()],Ni.prototype,"notations",2);ns([x(),ae({context:to})],Ni.prototype,"duration",2);ns([x(),ae({context:Qa})],Ni.prototype,"notationList",2);ns([x(),ae({context:eo})],Ni.prototype,"notationCurrent",2);Ni=ns([J("thermal-file-analyser")],Ni);var lw=Object.defineProperty,hw=Object.getOwnPropertyDescriptor,th=(r,e,t,i)=>{for(var s=i>1?void 0:i?hw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lw(e,t,s),s};let pn=class extends nt{constructor(){super(...arguments),this.dropinRef=me(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return m`

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

                            ${this.loaded===!0?m`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:O}

                            <file-dropin ${be(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};pn.styles=pe`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;th([x()],pn.prototype,"dropinRef",2);th([x()],pn.prototype,"loaded",2);pn=th([J("thermal-dropin-app")],pn);var cw=Object.defineProperty,uw=Object.getOwnPropertyDescriptor,Vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?uw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cw(e,t,s),s};let br=class extends nt{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return m`

            ${e?m`<h3 class="row-title">${e}</h3>`:O}

            ${t?m`<p>${t}</p>`:O}

            <section class=${Xt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>m`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};br.styles=pe`

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

    `;Vr([d()],br.prototype,"columns",2);Vr([d()],br.prototype,"breakpoint",2);Vr([d({type:Object})],br.prototype,"files",2);Vr([d({type:String})],br.prototype,"label",2);Vr([d({type:String})],br.prototype,"info",2);Vr([d({type:Number})],br.prototype,"from",2);Vr([d({type:Number})],br.prototype,"to",2);Vr([d({type:Number})],br.prototype,"cursor",2);Vr([d({type:String})],br.prototype,"grouping",2);Vr([x()],br.prototype,"collapsed",2);br=Vr([J("time-group-row")],br);var dw=Object.defineProperty,Is=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&dw(e,t,s),s},At;const as=(At=class extends nt{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.instanceRenderer=new $s(this),this.groupRenderer=new tn(this)}parseFilesProperty(e){return e.split(At.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(At.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(At.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[u,p]=h,f=u.trim(),b=p.trim();switch(f){case At.FILE_THERMAL_KEY:s=b;break;case At.FILE_VISIBLE_KEY:n=b;break;case At.FILE_LABEL_KEY:a=b;break;case At.FILE_NOTE_KEY:o=b;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},At.styles=[$s.styles,tn.styles,pe`
    
        `],At.FILE_RECORD_SEPARATOR=";",At.FILE_SEGMENT_SEPAROATOR="|",At.FILE_COMPONENT_SEPAROATOR="~",At.FILE_THERMAL_KEY="thermal",At.FILE_VISIBLE_KEY="visible",At.FILE_LABEL_KEY="label",At.FILE_NOTE_KEY="note",At);Is([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],as.prototype,"showembed");Is([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],as.prototype,"showabout");Is([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],as.prototype,"showtutorial");Is([d({type:String,reflect:!1,converter:Ge(!0)})],as.prototype,"showfullscreen");Is([d({type:String,reflect:!0,converter:Ge(!0)})],as.prototype,"showhistogram");Is([ae({context:Hi}),d({type:String,reflect:!0,converter:Ge(!0)})],as.prototype,"interactiveanalysis");let rh=as;class pw{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof gi)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof gi)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?gu(e).getTime():this.grouping==="day"?da(e).getTime():this.grouping==="week"?fi(e).getTime():this.grouping==="month"?fa(e).getTime():this.grouping==="year"?vl(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?lu(e).getTime():this.grouping==="day"?au(e).getTime():this.grouping==="week"?ga(e).getTime():this.grouping==="month"?pa(e).getTime():this.grouping==="year"?ou(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:Se(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:Se(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+Se(e,"w")+" of "+Se(e,"yyyy"),info:[lt.humanDate(fi(e).getTime()),lt.humanDate(ga(e).getTime())].join(" - ")}:this.grouping==="month"?{label:Se(e,"MMMM yyyy"),info:[lt.humanDate(fa(e).getTime()),lt.humanDate(pa(e).getTime())].join(" - ")}:this.grouping==="year"?{label:Se(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?lt.human(e):this.grouping==="hour"||this.grouping==="day"?Se(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",lt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var fw=Object.defineProperty,gw=Object.getOwnPropertyDescriptor,mt=(r,e,t,i)=>{for(var s=i>1?void 0:i?gw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fw(e,t,s),s};let pt=class extends rh{constructor(){super(...arguments),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new te,this.onColumns=new te,this.preservetime=!0}connectedCallback(){super.connectedCallback();const t=ja(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(this.log(t,i),t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new pw(this,t),this.onGroupInit.call(this.group)}firstUpdated(r){super.firstUpdated(r),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to});const e=this.files?this.parseFilesProperty(this.files):[];e.length>0?this.grouper.processParsedFiles(e):this.grouper.processEntries(this.entries.filter(t=>t instanceof bi))}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&this.files&&r.get("files")!==void 0){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}render(){return m`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}">

                    <group-provider slug="${this.slug}">

                        <thermal-app
                            author=${re(this.author)}
                            license=${re(this.license)}
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
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${_(S.columns,{num:this.columns})}</div>
                                    </div>

                                    ${this.grouper.numFiles>0?m`

                                        <group-download-dropdown></group-download-dropdown>

                                        <registry-range-full-button></registry-range-full-button>
                                        `:O}

                                ${this.showabout===!0?m`<app-info-button ></app-info-button>`:O}

                                </thermal-bar>

                            </div>


                            ${this.showhistogram===!0?m`<registry-histogram></registry-histogram>`:O}

                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            ${this.interactiveanalysis===!0?m`<group-tool-buttons></group-tool-buttons>`:O}

                            <div class="app-content">

                                    <slot></slot>


                                    ${this.groups.map(r=>this.groupRenderer.renderGroup(r,this.columns,this.grouping,this.preservetime))}            
                            
                            </div>

                            <group-timeline></group-timeline>

                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};pt.styles=[rh.styles,pe`


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


    
    `];mt([d({type:String,reflect:!0,attribute:!0})],pt.prototype,"palette",2);mt([d({type:Number,reflect:!0})],pt.prototype,"from",2);mt([d({type:Number,reflect:!0})],pt.prototype,"to",2);mt([d({type:String,reflect:!0})],pt.prototype,"author",2);mt([d({type:String,reflect:!0})],pt.prototype,"label",2);mt([d({type:String,reflect:!1})],pt.prototype,"description",2);mt([d({type:String,reflect:!0})],pt.prototype,"license",2);mt([x(),Lr({slot:"entry",flatten:!0})],pt.prototype,"entries",2);mt([d({type:String,reflect:!0})],pt.prototype,"slug",2);mt([d()],pt.prototype,"columns",2);mt([d()],pt.prototype,"breakpoint",2);mt([d({type:String,reflect:!0})],pt.prototype,"grouping",2);mt([x()],pt.prototype,"groups",2);mt([d({type:String})],pt.prototype,"files",2);mt([d({type:String,reflect:!0})],pt.prototype,"analysis1",2);mt([d({type:String,reflect:!0})],pt.prototype,"analysis2",2);mt([d({type:String,reflect:!0})],pt.prototype,"analysis3",2);mt([d({type:String,reflect:!0})],pt.prototype,"analysis4",2);mt([d({type:String,reflect:!0})],pt.prototype,"analysis5",2);mt([d({type:String,reflect:!0})],pt.prototype,"analysis6",2);mt([d({type:String,reflect:!0})],pt.prototype,"analysis7",2);mt([d({type:String,reflect:!0,converter:Ge(!1)})],pt.prototype,"preservetime",2);pt=mt([J("thermal-group-app")],pt);var mw=Object.defineProperty,yw=Object.getOwnPropertyDescriptor,Bi=(r,e,t,i)=>{for(var s=i>1?void 0:i?yw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mw(e,t,s),s};let Er=class extends ki{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=me(),this.indicatorRef=me()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof gi?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=hl(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?O:m`<div class="container ticks-horizontal-indent">

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

            ${this.longestDurationInMs!==void 0?Sd(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):O}

        </div>`}};Er.TICK_WIDTH=50;Er.TICK_POINTER_HEIGHT=3;Er.styles=pe`


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


        ${$d}
    
    `;Bi([x()],Er.prototype,"longestDurationInMs",2);Bi([x()],Er.prototype,"ms",2);Bi([x()],Er.prototype,"pointerMs",2);Bi([x()],Er.prototype,"playing",2);Bi([x()],Er.prototype,"instances",2);Bi([x()],Er.prototype,"has",2);Bi([x()],Er.prototype,"ticks",2);Er=Bi([J("group-timeline")],Er);var vw=Object.defineProperty,bw=Object.getOwnPropertyDescriptor,Mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?bw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vw(e,t,s),s};let cr=class extends rh{constructor(){super(...arguments),this.registryProviderRef=me(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=ja(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof Bt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return m`
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
                    <registry-ticks-bar highlightFrom=${re(this.highlightFrom)} highlightTo=${re(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};cr.styles=pe`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;Mr([d({type:String,reflect:!0,attribute:!0})],cr.prototype,"palette",2);Mr([d({type:Number,reflect:!0})],cr.prototype,"from",2);Mr([d({type:Number,reflect:!0})],cr.prototype,"to",2);Mr([d()],cr.prototype,"slug",2);Mr([d({type:String,reflect:!0})],cr.prototype,"grouping",2);Mr([d({type:String,reflect:!0})],cr.prototype,"columns",2);Mr([d({type:Number,reflect:!0})],cr.prototype,"breakpoint",2);Mr([d({type:String,reflect:!0})],cr.prototype,"groups",2);Mr([d({type:String,reflect:!0})],cr.prototype,"autogroups",2);Mr([Lr({flatten:!0}),x()],cr.prototype,"entries",2);Mr([x()],cr.prototype,"registry",2);cr=Mr([J("thermal-registry-app")],cr);var ww=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,Pi=(r,e,t,i)=>{for(var s=i>1?void 0:i?xw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ww(e,t,s),s};let Br=class extends nt{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=me()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await sd(this.elementContext.element.getTourableRoot(),this,{middleware:[id(20),lv({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return m`<div class=${Xt(r)}>

            <div id="arrow" ${this.arrowRef} class="arrow" style="position:absolute;"></div>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${()=>{var n;return(n=this.tour)==null?void 0:n.deactivate()}}>X</button> 
            </div>
            <div class="content">
                
                <slot></slot>

                ${this.youtube?m`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:O}

            </div>

            <div class="buttons">

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?m`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${_(S.back)}</thermal-button>`:O} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?m`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${_(S.next)}</thermal-button>`:O}          
            
            </div>

            

        </div>
        `}};Br.styles=pe`

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
    
    `;Pi([d({type:String})],Br.prototype,"label",2);Pi([x()],Br.prototype,"active",2);Pi([d({type:String,reflect:!0})],Br.prototype,"displayed",2);Pi([d({type:String})],Br.prototype,"placement",2);Pi([ye({context:Wu,subscribe:!0})],Br.prototype,"tour",2);Pi([ye({context:Hu,subscribe:!0})],Br.prototype,"definition",2);Pi([ye({context:Bu,subscribe:!0})],Br.prototype,"elementContext",2);Pi([d({type:String})],Br.prototype,"youtube",2);Br=Pi([J("tour-step")],Br);var Sw=Object.defineProperty,$w=Object.getOwnPropertyDescriptor,$r=(r,e,t,i)=>{for(var s=i>1?void 0:i?$w(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sw(e,t,s),s};let Qt=class extends nt{constructor(){super(...arguments),this.loading=!0,this.cls="md",this.palette="jet",this.showhistogram=!1,this.groupRef=me(),this.group=void 0,this.clsx={xs:1,sm:2,md:3,lg:4,xl:5}}connectedCallback(){super.connectedCallback(),this.url!==void 0&&this.folder}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.disconnect(),this.resizeObserver=void 0}firstUpdated(r){super.firstUpdated(r),this.groupRef.value&&(this.group=this.groupRef.value.group)}updated(r){var e;if(super.updated(r),(r.has("folder")||r.has("url")||r.has("subfolder"))&&(this.folder,this.url&&this.loadData(this.url,this.folder,this.subfolder)),r.has("data")){(e=this.resizeObserver)==null||e.disconnect(),delete this.resizeObserver,this.resizeObserver=new ResizeObserver(i=>{const n=i[0].contentRect.width;if(this.lastWidth!==n){let a="xs";n>500&&(a="sm"),n>900&&(a="md"),n>1300&&(a="lg"),n>1600&&(a="xl"),this.cls=a,this.lastWidth=n}});const t=this.renderRoot.querySelector(".files");t&&this.resizeObserver.observe(t)}}getUrl(r,e,t){return t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e}async loadData(r,e,t){try{this.loading=!0,this.group&&this.group.files.clearAllListeners();const i=t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e,s=await fetch(i,{});s.ok?(this.data=await s.json(),this.loading=!1,this.data.success===!1&&(this.error=`The remote folder <code>${i}</code> was not found!`)):(this.error=`The remote folder <code>${i}</code> was not found!`,this.loading=!1)}catch{this.error=`The remote folder <code>${r}</code> was not found!`,this.loading=!1}}renderloading(){return m`<div>

            Načítám vzdálenou složku ${this.folder} from ${this.url} 
        
        </div>`}renderData(r){return m`
            <div class="files ${this.cls}">
                ${r.files.map(e=>this.renderFile(e))}
            </div>
        `}renderFile(r){return m`<div class="file">
            <div class="file-inner">
                <file-provider 
                    thermal="${r.lrc}" 
                    visible=${re(r.png)}
                    batch="true"
                >

                    <div class="file-header">
                        <h2><span>${lt.human(r.timestamp*1e3)}</span></h2>
                        <div>
                            <file-download-lrc></file-download-lrc>
                            <file-download-png></file-download-png>
                            <file-range-propagator></file-range-propagator>
                            <file-info-button>
                                <file-button slot="invoker" label="${_(S.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>

                        </div>
                    </div>
                    
                    <file-canvas></file-canvas>
                    <file-timeline hasPlayButton="false" hasInfo="false"></file-timeline>
                    <file-analysis-table interactiveanalysis="true"></file-analysis-table>
                </file-provider>
            </div>
        </div>`}clsToStr(r){return _(S.columns,{num:this.clsx[r]})}renderColumnsSwitch(){return m`<thermal-dropdown>
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

                        ${this.data.info.description?m`<p>${this.data.info.description}</p>`:O}

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
            `}return O}render(){var e;let r=_(S.loading)+"...";return((e=this.data)==null?void 0:e.info)!==void 0&&(r=this.data.info.name),this.error!==void 0&&(r="Error"),m`
            <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                <registry-provider slug="folders_app_registry">
                    <group-provider slug="folders_app_group" ${be(this.groupRef)}>
        
                        <thermal-app
                            author=${re(this.author)}
                            license=${re(this.license)}
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

                            ${this.showhistogram?m`<registry-histogram></registry-histogram>`:O}
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>`:O}
                            
                        ${this.error?Ht(this.error):O}

                        ${this.error===void 0&&this.data?this.renderData(this.data):O}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`}};Qt.styles=pe`


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

    `;$r([d({type:String,reflect:!0})],Qt.prototype,"url",2);$r([d({type:String,reflect:!0})],Qt.prototype,"subfolder",2);$r([d({type:String,reflect:!0})],Qt.prototype,"folder",2);$r([x()],Qt.prototype,"error",2);$r([x()],Qt.prototype,"loading",2);$r([x()],Qt.prototype,"data",2);$r([x()],Qt.prototype,"label",2);$r([x()],Qt.prototype,"cls",2);$r([d({type:String,reflect:!0})],Qt.prototype,"license",2);$r([d({type:String,reflect:!0})],Qt.prototype,"author",2);$r([d({type:String,reflect:!0,attribute:!0})],Qt.prototype,"palette",2);$r([d({type:String,reflect:!0,converter:Ge(!0)})],Qt.prototype,"showhistogram",2);Qt=$r([J("remote-folder-app")],Qt);var ci=(r=>(r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(ci||{});class Wo{constructor(e,t){c(this,"url");c(this,"query");this.api_endpoint=e,this.subfolder=t,this.url=new URL(this.api_endpoint),this.query=this.url.searchParams,this.subfolder!==void 0&&this.query.set("scope",this.subfolder)}setOnly(e){return this.query.set("only",e),this}setExclude(e){return this.query.set("exclude",e),this}setGrid(e){e===!0?this.query.set("grid","true"):this.query.delete("grid")}async info(){return this.fetch()}async folder(e){return this.query.set("folder",e),this.fetch()}async everything(){return this.query.set("everything","true"),this.fetch()}async hours(){return this.query.set("hours","true"),this.fetch()}async days(){return this.query.set("days","true"),this.fetch()}async weeks(){return this.query.set("weeks","true"),this.fetch()}async months(){return this.query.set("months","true"),this.fetch()}async years(){return this.query.set("years","true"),this.fetch()}async grid(e){switch(e){case"hours":return await this.hours();case"days":return await this.days();case"weeks":return await this.days();case"months":return await this.months();case"years":return await this.years();default:return await this.hours()}}async fetch(){return console.info("Fetching",this.url),await(await fetch(this.url)).json()}get object(){return this.url}}const kw={lessThanXSeconds:{one:{regular:"méně než 1 sekunda",past:"před méně než 1 sekundou",future:"za méně než 1 sekundu"},few:{regular:"méně než {{count}} sekundy",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekundy"},many:{regular:"méně než {{count}} sekund",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekund"}},xSeconds:{one:{regular:"1 sekunda",past:"před 1 sekundou",future:"za 1 sekundu"},few:{regular:"{{count}} sekundy",past:"před {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"před {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než 1 minuta",past:"před méně než 1 minutou",future:"za méně než 1 minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"1 minuta",past:"před 1 minutou",future:"za 1 minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně 1 hodina",past:"přibližně před 1 hodinou",future:"přibližně za 1 hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"1 hodina",past:"před 1 hodinou",future:"za 1 hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"1 den",past:"před 1 dnem",future:"za 1 den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXWeeks:{one:{regular:"přibližně 1 týden",past:"přibližně před 1 týdnem",future:"přibližně za 1 týden"},few:{regular:"přibližně {{count}} týdny",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdny"},many:{regular:"přibližně {{count}} týdnů",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdnů"}},xWeeks:{one:{regular:"1 týden",past:"před 1 týdnem",future:"za 1 týden"},few:{regular:"{{count}} týdny",past:"před {{count}} týdny",future:"za {{count}} týdny"},many:{regular:"{{count}} týdnů",past:"před {{count}} týdny",future:"za {{count}} týdnů"}},aboutXMonths:{one:{regular:"přibližně 1 měsíc",past:"přibližně před 1 měsícem",future:"přibližně za 1 měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"1 měsíc",past:"před 1 měsícem",future:"za 1 měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně 1 rok",past:"přibližně před 1 rokem",future:"přibližně za 1 rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"1 rok",past:"před 1 rokem",future:"za 1 rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než 1 rok",past:"před více než 1 rokem",future:"za více než 1 rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro 1 rok",past:"skoro před 1 rokem",future:"skoro za 1 rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}},_w=(r,e,t)=>{let i;const s=kw[r];s.type==="other"?i=s.other:e===1?i=s.one:e>1&&e<5?i=s.few:i=s.many;const n=(t==null?void 0:t.addSuffix)===!0,a=t==null?void 0:t.comparison;let o;return n&&a===-1?o=i.past:n&&a===1?o=i.future:o=i.regular,o.replace("{{count}}",String(e))},Pw={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},Cw={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Ow={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Aw={date:Tt({formats:Pw,defaultWidth:"full"}),time:Tt({formats:Cw,defaultWidth:"full"}),dateTime:Tt({formats:Ow,defaultWidth:"full"})},Ew=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],Lw={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:r=>{const e=r.getDay();return"'v "+Ew[e]+" o' p"},other:"P"},Dw=(r,e)=>{const t=Lw[r];return typeof t=="function"?t(e):t},Rw={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},Mw={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},Tw={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},Iw={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},Uw={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},zw={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},Fw={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},jw=(r,e)=>Number(r)+".",Nw={ordinalNumber:jw,era:ut({values:Rw,defaultWidth:"wide"}),quarter:ut({values:Mw,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ut({values:Tw,defaultWidth:"wide",formattingValues:Iw,defaultFormattingWidth:"wide"}),day:ut({values:Uw,defaultWidth:"wide"}),dayPeriod:ut({values:zw,defaultWidth:"wide",formattingValues:Fw,defaultFormattingWidth:"wide"})},Ww=/^(\d+)\.?/i,Hw=/\d+/i,Bw={narrow:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},Vw={any:[/^p[řr]/i,/^(po|n)/i]},Gw={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},Yw={any:[/1/i,/2/i,/3/i,/4/i]},qw={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},Xw={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},Kw={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},Jw={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[úu]t/i,/^st/i,/^[čc]t/i,/^p[áa]/i,/^so/i]},Zw={any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i},Qw={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},e1={ordinalNumber:mn({matchPattern:Ww,parsePattern:Hw,valueCallback:r=>parseInt(r,10)}),era:dt({matchPatterns:Bw,defaultMatchWidth:"wide",parsePatterns:Vw,defaultParseWidth:"any"}),quarter:dt({matchPatterns:Gw,defaultMatchWidth:"wide",parsePatterns:Yw,defaultParseWidth:"any",valueCallback:r=>r+1}),month:dt({matchPatterns:qw,defaultMatchWidth:"wide",parsePatterns:Xw,defaultParseWidth:"any"}),day:dt({matchPatterns:Kw,defaultMatchWidth:"wide",parsePatterns:Jw,defaultParseWidth:"any"}),dayPeriod:dt({matchPatterns:Zw,defaultMatchWidth:"any",parsePatterns:Qw,defaultParseWidth:"any"})},t1={code:"cs",formatDistance:_w,formatLong:Aw,formatRelative:Dw,localize:Nw,match:e1,options:{weekStartsOn:1,firstWeekContainsDate:4}},r1={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},i1=(r,e,t)=>{let i;const s=r1[r];return typeof s=="string"?i=s:e===1?i=s.one:e===2&&s.two?i=s.two:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"mewn "+i:i+" yn ôl":i},s1={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},n1={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},a1={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o1={date:Tt({formats:s1,defaultWidth:"full"}),time:Tt({formats:n1,defaultWidth:"full"}),dateTime:Tt({formats:a1,defaultWidth:"full"})},l1={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},h1=(r,e,t,i)=>l1[r],c1={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},u1={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},d1={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},p1={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},f1={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},g1={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},m1=(r,e)=>{const t=Number(r);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||t===80||t>=100)return t+"fed";return t+"ain"},y1={ordinalNumber:m1,era:ut({values:c1,defaultWidth:"wide"}),quarter:ut({values:u1,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ut({values:d1,defaultWidth:"wide"}),day:ut({values:p1,defaultWidth:"wide"}),dayPeriod:ut({values:f1,defaultWidth:"wide",formattingValues:g1,defaultFormattingWidth:"wide"})},v1=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,b1=/\d+/i,w1={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},x1={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},S1={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},$1={any:[/1/i,/2/i,/3/i,/4/i]},k1={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},_1={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},P1={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},C1={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},O1={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},A1={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},E1={ordinalNumber:mn({matchPattern:v1,parsePattern:b1,valueCallback:r=>parseInt(r,10)}),era:dt({matchPatterns:w1,defaultMatchWidth:"wide",parsePatterns:x1,defaultParseWidth:"any"}),quarter:dt({matchPatterns:S1,defaultMatchWidth:"wide",parsePatterns:$1,defaultParseWidth:"any",valueCallback:r=>r+1}),month:dt({matchPatterns:k1,defaultMatchWidth:"wide",parsePatterns:_1,defaultParseWidth:"any"}),day:dt({matchPatterns:P1,defaultMatchWidth:"wide",parsePatterns:C1,defaultParseWidth:"any"}),dayPeriod:dt({matchPatterns:O1,defaultMatchWidth:"any",parsePatterns:A1,defaultParseWidth:"any"})},L1={code:"cy",formatDistance:i1,formatLong:o1,formatRelative:h1,localize:y1,match:E1,options:{weekStartsOn:0,firstWeekContainsDate:1}},Ic={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},D1=(r,e,t)=>{let i;const s=t!=null&&t.addSuffix?Ic[r].withPreposition:Ic[r].standalone;return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:"vor "+i:i},R1={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},M1={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},T1={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},I1={date:Tt({formats:R1,defaultWidth:"full"}),time:Tt({formats:M1,defaultWidth:"full"}),dateTime:Tt({formats:T1,defaultWidth:"full"})},U1={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},z1=(r,e,t,i)=>U1[r],F1={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},j1={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ul={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},N1={narrow:ul.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ul.wide},W1={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},H1={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},B1={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},V1=r=>Number(r)+".",G1={ordinalNumber:V1,era:ut({values:F1,defaultWidth:"wide"}),quarter:ut({values:j1,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ut({values:ul,formattingValues:N1,defaultWidth:"wide"}),day:ut({values:W1,defaultWidth:"wide"}),dayPeriod:ut({values:H1,defaultWidth:"wide",formattingValues:B1,defaultFormattingWidth:"wide"})},Y1=/^(\d+)(\.)?/i,q1=/\d+/i,X1={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},K1={any:[/^v/i,/^n/i]},J1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Z1={any:[/1/i,/2/i,/3/i,/4/i]},Q1={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},ex={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tx={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},rx={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},ix={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},sx={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},nx={ordinalNumber:mn({matchPattern:Y1,parsePattern:q1,valueCallback:r=>parseInt(r)}),era:dt({matchPatterns:X1,defaultMatchWidth:"wide",parsePatterns:K1,defaultParseWidth:"any"}),quarter:dt({matchPatterns:J1,defaultMatchWidth:"wide",parsePatterns:Z1,defaultParseWidth:"any",valueCallback:r=>r+1}),month:dt({matchPatterns:Q1,defaultMatchWidth:"wide",parsePatterns:ex,defaultParseWidth:"any"}),day:dt({matchPatterns:tx,defaultMatchWidth:"wide",parsePatterns:rx,defaultParseWidth:"any"}),dayPeriod:dt({matchPatterns:ix,defaultMatchWidth:"wide",parsePatterns:sx,defaultParseWidth:"any"})},ax={code:"de",formatDistance:D1,formatLong:I1,formatRelative:z1,localize:G1,match:nx,options:{weekStartsOn:1,firstWeekContainsDate:4}},ox={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},lx={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},hx={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},cx={date:Tt({formats:ox,defaultWidth:"full"}),time:Tt({formats:lx,defaultWidth:"full"}),dateTime:Tt({formats:hx,defaultWidth:"full"})},ux={code:"en-GB",formatDistance:hu,formatLong:cx,formatRelative:cu,localize:uu,match:du,options:{weekStartsOn:1,firstWeekContainsDate:4}},dx={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},px=(r,e,t)=>{let i;const s=dx[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dans "+i:"il y a "+i:i},fx={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},gx={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},mx={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yx={date:Tt({formats:fx,defaultWidth:"full"}),time:Tt({formats:gx,defaultWidth:"full"}),dateTime:Tt({formats:mx,defaultWidth:"full"})},vx={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},bx=(r,e,t,i)=>vx[r],wx={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},xx={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},Sx={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},$x={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},kx={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},_x=(r,e)=>{const t=Number(r),i=e==null?void 0:e.unit;if(t===0)return"0";const s=["year","week","hour","minute","second"];let n;return t===1?n=i&&s.includes(i)?"ère":"er":n="ème",t+n},Px=["MMM","MMMM"],Cx={preprocessor:(r,e)=>r.getDate()===1||!e.some(i=>i.isToken&&Px.includes(i.value))?e:e.map(i=>i.isToken&&i.value==="do"?{isToken:!0,value:"d"}:i),ordinalNumber:_x,era:ut({values:wx,defaultWidth:"wide"}),quarter:ut({values:xx,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ut({values:Sx,defaultWidth:"wide"}),day:ut({values:$x,defaultWidth:"wide"}),dayPeriod:ut({values:kx,defaultWidth:"wide"})},Ox=/^(\d+)(ième|ère|ème|er|e)?/i,Ax=/\d+/i,Ex={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},Lx={any:[/^av/i,/^ap/i]},Dx={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},Rx={any:[/1/i,/2/i,/3/i,/4/i]},Mx={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},Tx={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ix={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},Ux={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},zx={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},Fx={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},jx={ordinalNumber:mn({matchPattern:Ox,parsePattern:Ax,valueCallback:r=>parseInt(r)}),era:dt({matchPatterns:Ex,defaultMatchWidth:"wide",parsePatterns:Lx,defaultParseWidth:"any"}),quarter:dt({matchPatterns:Dx,defaultMatchWidth:"wide",parsePatterns:Rx,defaultParseWidth:"any",valueCallback:r=>r+1}),month:dt({matchPatterns:Mx,defaultMatchWidth:"wide",parsePatterns:Tx,defaultParseWidth:"any"}),day:dt({matchPatterns:Ix,defaultMatchWidth:"wide",parsePatterns:Ux,defaultParseWidth:"any"}),dayPeriod:dt({matchPatterns:zx,defaultMatchWidth:"any",parsePatterns:Fx,defaultParseWidth:"any"})},Nx={code:"fr",formatDistance:px,formatLong:yx,formatRelative:bx,localize:Cx,match:jx,options:{weekStartsOn:1,firstWeekContainsDate:4}};var Wx=Object.defineProperty,Hx=Object.getOwnPropertyDescriptor,Dt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wx(e,t,s),s};const Bx={en:ux,fr:Nx,de:ax,cy:L1,cs:t1};let St=class extends nt{constructor(){super(...arguments),this.palette="jet",this.enablegrouping=!1,this.loadingInfo=!1,this.loadingData=!1,this.only=[],this.state=0,this.by=ci.HOURS,this.folders={},this.registryRef=me(),this.interactiveAnalysis=!0}connectedCallback(){super.connectedCallback();const r=()=>{this.getBoundingClientRect().top<-50?this.classList.add("is-pinned"):this.classList.remove("is-pinned")};window.addEventListener("scroll",r),window.addEventListener("resize",r)}updated(r){super.updated(r),(r.has("url")||r.has("subfolder"))&&this.loadInfo(this.url,this.subfolder),(r.has("only")||r.has("by"))&&this.url!==void 0&&this.loadData(this.only,this.by,this.url,this.subfolder)}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}getApiUrl(r,e){return e!==void 0?`${r}?subfolder="${e}"`:r}async loadInfo(r,e){this.loadingInfo=!0;try{const i=await new Wo(r,e).info();this.log("json>>>",i),this.info=i,this.folders=i.folders,this.loadingInfo=!1}catch{this.error="There was an error loading info"}}async loadDataOne(r,e,t){this.loadingData=!1,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=await new Wo(e,t).folder(r);this.log("folder",r,s),this.scrollToComponent(),this.dataOnly=s,this.loadingData=!1,this.registryRef.value&&this.registryRef.value.registry.groups.addListener(this.UUID,n=>{n.forEach(a=>a.files.addListener(this.UUID,o=>{o[0]&&a.analysisSync.turnOn(o[0])}))})}async loadDataMultiple(r,e,t,i){var a;this.loadingData=!0,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=new Wo(t,i);s.setOnly(r.join(",")),s.setGrid(!0);const n=await s.grid(e);this.scrollToComponent(),this.dataMultiple=n,this.loadingData=!1,(a=this.registryRef.value)==null||a.registry.groups.removeListener(this.UUID)}async loadData(r,e,t,i){r.length>1?this.loadDataMultiple(r,e,t,i):r.length===1&&this.loadDataOne(r[0],t,i)}renderMainScreen(){return m`
<div class="screen screen-main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(r=>m`
        <button class="screen-main-folder" @click=${()=>this.actionOpenOneFolder(r.folder)}>
            <h1>${r.name}</h1>
            ${r.description!==void 0?m`<p>${r.description}</p>`:O}
            <div>${_(S.numfiles,{num:r.lrc_count})}</div>
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
                <file-range-propagator></file-range-propagator>

                <file-dropdown label="...">
                    <file-info-button>
                        <file-button slot="invoker" label=${_(S.info).toLowerCase()}></file-button>
                    </file-info-button>
                    <file-download-lrc></file-download-lrc>
                    <file-download-png></file-download-png>
                </file-dropdown>

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
                    ${this.renderFileInner(r,()=>lt.human(r.timestamp))}
                    </div>`)}
            
            </group-provider>   
        `}renderMultiple(){if(this.loadingData||this.dataMultiple===void 0)return this.renderLoading("Načítám data...");const r=this.dataMultiple.data,t=Object.entries(Object.values(Object.values(this.dataMultiple.data))[0]).map(([i,s])=>({name:s.name,key:i})).length;return m`

            <table class="affected">

                <tbody>
                ${Object.entries(r).map(([i,s])=>{let n;const a=parseInt(i);return this.by===ci.HOURS?n=Se(a*1e3,"d. M. yyyy - HH")+":00":this.by===ci.DAYS?n=Se(a*1e3,"d. M. yyyy"):this.by===ci.WEEKS?n=Se(a*1e3,"wo"):this.by===ci.MONTHS?n=Se(a*1e3,"LLLL yyyy",{locale:Bx[this.locale]}):this.by===ci.YEARS&&(n=Se(a*1e3,"yyyy")),m`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${t}">
                                <div>
                                    <h2>${n}</h2>
                                    <group-provider slug="${i}" class="buttons">
                                        <group-range-propagator></group-range-propagator>

                                        <file-dropdown label="${_(S.download).toLowerCase()}">
                                            <group-download-buttons></group-download-buttons>
                                        </file-dropdown>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>
                        <group-provider slug="${i}" class="row">
                            ${Object.values(s).map(o=>m`<td class="cell-content">
                                    ${Object.values(o.files).map(l=>this.renderFileInner(l,h=>{const u=h.timestamp;return this.by===ci.HOURS||this.by===ci.DAYS?Se(u,"HH:ii"):lt.human(u)}))}
                                </td>`)}
                        </group-provider>
                    `})}
                </tbody>
            
            </table>

        `}renderTimeToggle(){const r=["hours","days","weeks","months","years"];return m`
<thermal-dropdown>
    <span slot="invoker">${_(S[`by${this.by}`])}</span>
    ${r.map(e=>m`
    <div slot="option" @click=${()=>this.by=e}>
        <thermal-button>${_(S[`by${e}`])}</thermal-button>
    </div>
    `)}
</thermal-dropdown>
        `}renderInfo(){if(this.state===0)return O;let r;if(this.state===1){const e=this.folders[this.only[0]],t=Object.values(this.folders).filter(n=>n.folder!==e.folder),i=m`<thermal-dropdown variant="background" class="selector">
                <span slot="invoker">${e.name}</span>

                ${t.map(n=>m`<div slot="option" @click=${()=>this.actionOpenOneFolder(n.folder)}>
                    <thermal-button>${n.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`,s=t.map((n,a)=>m`<thermal-button @click=${()=>this.actionToggleFolder(n.folder)}>
                <span class="button-inline-icon">+</span> ${n.name}
            </thermal-button> ${a!==t.length-1?` ${_(S.or)} `:O}`);r=m`${_(S.showingfolder)} ${i}. 
            
            ${t.length>0?m` ${_(S.doyouwanttoadd)} ${s}?`:O}
            `}else if(this.state===2){const e=[],t=[];Object.values(this.folders).forEach(i=>{this.only.includes(i.folder)?e.push(i):t.push(i)}),r=m`

                ${_(S.showingfolders)}
                ${e.map((i,s)=>m`<thermal-button 
                    title="${_(S.remove)}" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(i.folder)}
                >
                    ${i.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${s!==e.length-1?` ${_(S.and)} `:O}`)}
                ${_(S.groupped)} ${this.renderTimeToggle()}.
            

            ${t.length>0?m`${_(S.youmayalsoadd)} ${t.map((i,s)=>m`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(i.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${i.name}
                    </thermal-button>
                    ${s!==t.length-1?` ${_(S.or)} `:O}
                `)}.`:O}

            `}return r===void 0?O:m`<div class="info">
            ${r}
        </div>`}renderBrowser(){const r=Object.values(this.folders).filter(e=>this.only.includes(e.folder));return m`

        <nav class="info-sticky-content">

            <div class="info-sticky-content-wrapper">

                <div class="info-sticky-content-collapser">
                    ${this.renderHeader()}
                </div>


                ${this.enablegrouping?this.renderInfo():O}
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
            </table>`:O}

        </nav>

        

        <section>
            ${this.state===1?this.renderOne():O}
            ${this.state===2?this.renderMultiple():O}
        </section>
        
`}renderApp(){return this.info===void 0?this.renderLoading("Načítám základní informaci"):this.state===0?this.renderMainScreen():this.renderBrowser()}renderHeader(){var r;return m`
        
        ${this.state!==0?m`<thermal-button 
                    @click=${this.actionCloseToHomepage.bind(this)}
                    variant="foreground"
                >
                ${_(S.close)}
            </thermal-button>

            ${this.state===1&&this.enablegrouping===!1?m`
            <thermal-dropdown variant="background" class="selector">

                <span slot="invoker">${this.folders[this.only[0]].name}</span>

                ${Object.values(this.folders).filter(e=>!this.only.includes(e.folder)).map(e=>m`<div slot="option" @click=${()=>this.actionOpenOneFolder(e.folder)}>
                <thermal-button>${e.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`:O}

            <registry-palette-dropdown></registry-palette-dropdown>
            <registry-range-full-button></registry-range-full-button>

            <!--
            
            <thermal-dialog label="${_(S.info)}">
                <thermal-button slot="invoker">${_(S.info)}</thermal-button>
                <div slot="content">

                    <ul class="tree">
                        <li>${(r=this.info)==null?void 0:r.url_host}</li>
                        <ul>

                            ${this.state===1&&this.dataOnly!==void 0?m`<li>/${this.only[0]}/
                                    <ul>
                                        ${this.dataOnly.files.map(e=>m`<li>${e.file_name}</li>`)}
                                    </ul>
                                </li>`:O}

                            ${this.state===2&&this.dataMultiple!==void 0?m`
                                    ${Object.values(this.dataMultiple.data).map(e=>m`<li>${e}</li>`)}
                                `:O}
                            
                        </ul>
                    </ul>   
                
                </div>
            </thermal-dialog>

            -->

            ${this.state===1&&this.dataOnly!==void 0?m`<group-provider slug="${this.dataOnly.info.folder}">
                    <group-download-dropdown></group-download-dropdown>
                </group-provider>`:O}
            <registry-opacity-slider></registry-opacity-slider>
            <group-tool-buttons showhint="false"></group-tool-buttons>
            `:O}
        
        `}render(){const r=this.loadingInfo===!0?_(S.loading)+"...":this.label&&this.label.trim().length>0?this.label:_(S.remotefoldersbrowser);return m`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${be(this.registryRef)}>

        <thermal-app author="${re(this.author)}" license="${re(this.license)}">

        ${this.state===0?m`
            <thermal-button variant="foreground" slot="bar" @click=${this.actionCloseToHomepage.bind(this)}>${r}</thermal-button>
            `:O}
            <header class="screen-browser-header" slot="bar">



            <thermal-bar>

                ${this.renderHeader()}
            
            </thermal-bar>
        
        </header>
        
            <div class=${Xt({screen:!0,"screen-main":this.state===0,"screen-browser":[1,2].includes(this.state),"screen-browser__one":this.state===1,"screen-browser__multiple":this.state===2})}>
                ${this.renderApp()}
            </div>

        </thermal-app>

    </registry-provider>
</manager-provider>
        
        `}};St.styles=pe`

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
        // background-color: blue;
        // padding: 4px;

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

.info-sticky-content-collapser {
    display: flex;
    gap: 5px;
    width: 100%;
    align-items: center;
    overflow: hidden;
    transition: max-height .1s ease-in-out;
    max-height: 0px;
}

:host(.is-pinned) .info-sticky-content-collapser {
    max-height: 300px;
    transition: max-height .5s ease-in-out;
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
    
    `;Dt([d({type:String,reflect:!0})],St.prototype,"label",2);Dt([d({type:String,reflect:!0})],St.prototype,"license",2);Dt([d({type:String,reflect:!0})],St.prototype,"author",2);Dt([d({type:String,reflect:!0,attribute:!0})],St.prototype,"palette",2);Dt([d({type:Boolean,reflect:!0,converter:Ge(!0)})],St.prototype,"enablegrouping",2);Dt([d({type:String,reflect:!0})],St.prototype,"url",2);Dt([d({type:String,reflect:!0})],St.prototype,"subfolder",2);Dt([x()],St.prototype,"info",2);Dt([x()],St.prototype,"error",2);Dt([x()],St.prototype,"loadingInfo",2);Dt([x()],St.prototype,"loadingData",2);Dt([x()],St.prototype,"only",2);Dt([x()],St.prototype,"state",2);Dt([x()],St.prototype,"by",2);Dt([x()],St.prototype,"dataOnly",2);Dt([x()],St.prototype,"dataMultiple",2);Dt([x()],St.prototype,"folders",2);Dt([ae({context:Hi})],St.prototype,"interactiveAnalysis",2);St=Dt([J("remote-browser-app")],St);var Vx=Object.defineProperty,Gx=Object.getOwnPropertyDescriptor,Tr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vx(e,t,s),s};let ur=class extends nt{constructor(){super(...arguments),this.by="days",this.loading=!1,this.heightRange=0,this.heightFolders=0,this.registryRef=me(),this.palette="jet"}connectedCallback(){super.connectedCallback()}updated(r){super.updated(r),(r.has("by")||r.has("url")||r.has("subfolder"))&&this.loadData(this.by,this.url,this.subfolder)}getUrl(r,e,t){let i=e+`?${r}&grid`;return t&&(i+=`&scope=${t}`),i}async loadData(r,e,t){this.loading=!0,this.data=void 0,this.registryRef.value&&this.registryRef.value.registry.groups.removeAllGroups();try{const i=this.getUrl(r,e,t),s=await fetch(i,{});if(s.ok){const n=await s.json(),a=Object.entries(n.data).map(([o,l])=>{const h=Object.entries(l);h.sort((p,f)=>p[0]<f[0]?-1:1);const u=Object.fromEntries(h);return[o,u]});n.data=Object.fromEntries(a),this.data=n,this.loading=!1,this.log(this.data),this.observer=new ResizeObserver(o=>{this.log(o),o[0]&&(this.heightFolders=this.getFoldersHeight(),this.heightRange=this.getRangeHeight())}),this.observer.observe(this)}else throw new Error("Data not OK!")}catch{this.loading=!1}}getRangeHeight(){const r=this.renderRoot.querySelector("#range");return console.log(r),r!==null?r.clientHeight:0}getFoldersHeight(){const r=this.renderRoot.querySelector("#folders");return r!==null?r.clientHeight:0}getGroupLabel(r){return this.by==="hours"?Se(r,"d. M.yyyy - mm:ss"):this.by==="days"?Se(r,"d. M. yyyy"):this.by==="weeks"?Se(r,"I")+" roku "+Se(r,"yyyy"):this.by==="months"?Se(r,"M"):this.by==="years"?Se(r,"yyyy"):r.toString()}getItemLabel(r){return this.by==="hours"?Se(r,"h:mm:ss"):this.by==="days"?Se(r,"H:mm:ss"):this.by==="weeks"?Se(r,"I")+" roku "+Se(r,"yyyy"):this.by==="months"?Se(r,"M"):this.by==="years"?Se(r,"yyyy"):r.toString()}renderFile(r){return m`
            <file-provider
                batch="true"
                thermal="${r.lrc}"
                visible="${re(r.png)}"
            >

                <article class="file">

                    <header>

                        <h4>${this.getItemLabel(r.timestamp*1e3)}</h4>

                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                        <file-range-propagator></file-range-propagator>
                        <file-info-button>
                            <file-button slot="invoker" label="${_(S.info).toLowerCase()}"></file-button>
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
                                    <group-provider slug=${re(s)}>
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

                        <group-provider class="group-files" slug=${re(s)}>
                            ${Object.values(n).map(o=>m`<td style="width: ${i};">
                                        <div class="cell-group">

                                        ${o.count>0?Object.values(o.files).map(this.renderFile.bind(this)):O}

                                        </div>
                                </td>`)}
                        </group-provider>
                    `})}

            </table>
            
        `}render(){const r=this.loading?_(S.loading)+"":this.label??"Remote folder";return m`
                <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                    <registry-provider slug="folders_app_registry" ${be(this.registryRef)}>
            
                            <thermal-app
                                author=${re(this.author)}
                                license=${re(this.license)}
                            >
    
                                <thermal-button variant="foreground" interactive="false" slot="bar">
                                    ${r}
                                </thermal-button>


                                ${this.data?this.renderGrid(this.data):O}
    
                    
                        </thermal-app>
                </registry-provider>
            </manager-provider>`}};ur.styles=pe`
    
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
    
    `;Tr([d({type:String,reflect:!0})],ur.prototype,"url",2);Tr([d({type:String,reflect:!0})],ur.prototype,"subfolder",2);Tr([d({type:String,reflect:!0})],ur.prototype,"by",2);Tr([x()],ur.prototype,"loading",2);Tr([d({type:String,reflect:!0})],ur.prototype,"license",2);Tr([d({type:String,reflect:!0})],ur.prototype,"label",2);Tr([d({type:String,reflect:!0})],ur.prototype,"author",2);Tr([x()],ur.prototype,"data",2);Tr([x()],ur.prototype,"heightRange",2);Tr([x()],ur.prototype,"heightFolders",2);Tr([d({type:String,reflect:!0,attribute:!0})],ur.prototype,"palette",2);ur=Tr([J("remote-grid-app")],ur);var Yx=Object.defineProperty,qx=Object.getOwnPropertyDescriptor,ro=(r,e,t,i)=>{for(var s=i>1?void 0:i?qx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yx(e,t,s),s};let Cs=class extends nt{constructor(){super(...arguments),this.showlabel=!0,this.showTime=!0}renderEntry(e){const t=this.showlabel===!0?e.label:O,i=this.showTime===!0&&e.from!==void 0&&e.to!==void 0?[Se(e.from,"mm:ss.SSS"),Se(e.to,"mm:ss.SSS")].join(" - "):O,s=e.getRenderContent(),n=e.image!==void 0?m`<img src="${e.image}" class="builtin-image" />`:O;return m`<article>

            ${t!==O?m`<h1>${t}</h1>`:O}

            ${i!==O?m`<div class="time">${i}</div>`:O}

            ${n}

            ${s.length>0?m`<div class="content">
                    ${s}
                </div>`:O}
        </article>`}render(){return m`${Xl(this.entries,this.renderEntry.bind(this))}`}};Cs.styles=pe`
    
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
    
    `;ro([x(),ye({context:eo,subscribe:!0})],Cs.prototype,"entries",2);ro([d({converter:Ge(!0)})],Cs.prototype,"showlabel",2);ro([d({converter:Ge(!0)})],Cs.prototype,"showTime",2);Cs=ro([J("notation-content")],Cs);var Xx=Object.defineProperty,Kx=Object.getOwnPropertyDescriptor,os=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xx(e,t,s),s};let Wi=class extends nt{constructor(){super(...arguments),this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observer=null}connectedCallback(){super.connectedCallback()}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');this.log("SLOT",r),r&&(this.log("SLOT",r.assignedElements()),this.notationList=pi(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=pi(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=pi(r.assignedElements())}))}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges()}willUpdate(r){super.willUpdate(r),this.log("Changed",r)}updateNotationsMs(r){this.notationCurrent=eh(r,this)}render(){return m`
        
            <div>Toto je test notatora</div>

            <div>
                Počet ${this.notationList.length}
            </div>

            <div>${[1,20,1e3,1e3*15,1e3*60,1e3*1e3].map(r=>m`<button @click=${()=>this.updateNotationsMs(r)}>${r}</button>`)}</div>

            <div>
                <h2>Aktivní</h2>

                <slot name="notation"></slot>
            </div>

            <notation-timeline></notation-timeline>

            <notation-content></notation-content>
        
        `}};os([x()],Wi.prototype,"ms",2);os([x(),Lr({flatten:!0})],Wi.prototype,"_notationSlot",2);os([x()],Wi.prototype,"notations",2);os([x(),ae({context:to})],Wi.prototype,"duration",2);os([x(),ae({context:Qa})],Wi.prototype,"notationList",2);os([x(),ae({context:eo})],Wi.prototype,"notationCurrent",2);Wi=os([J("notation-test")],Wi);var Jx=Object.defineProperty,Zx=Object.getOwnPropertyDescriptor,ih=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jx(e,t,s),s};let fn=class extends nt{renderEntry(r){if(r.from!==void 0&&r.to!==void 0){const e=r.from/this.duration*100,i=r.to/this.duration*100-e;return m`<div class="entry" style="left: ${e}%; width: ${i}%;">
                ${r.label!==void 0?m`<div class="entry-tooltip">
                    <div>${r.label}</div>
                </div>`:O}
            </div>`}return O}render(){return m`<div class="container">
            ${Xl(this.entries,this.renderEntry.bind(this))}
        </div>`}};fn.styles=pe`
    
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

    `;ih([x(),ye({context:Qa,subscribe:!0})],fn.prototype,"entries",2);ih([ye({context:to,subscribe:!0})],fn.prototype,"duration",2);fn=ih([J("notation-timeline")],fn);var Qx=Object.defineProperty,eS=Object.getOwnPropertyDescriptor,Ye=(r,e,t,i)=>{for(var s=i>1?void 0:i?eS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qx(e,t,s),s};let He=class extends nt{constructor(){super(...arguments),this.fileProviderRef=me(),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.collapsed=!1,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observerMutation=null}connectedCallback(){super.connectedCallback(),this.observerResize=new ResizeObserver(r=>{const e=r[0];e&&(e.contentRect.width>1e3?this.collapsed===!0&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0))}),this.observerResize.observe(this)}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges(),this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.add(this.UUID,e=>{this.duration=e.timeline.duration,e.timeline.addListener(this.UUID,t=>{this.ms=t,this.updateNotationsMs(t)})})}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=pi(r.assignedElements()),this.observerMutation=new MutationObserver(()=>{this.notationList=pi(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observerMutation)==null||t.disconnect(),this.notationList=pi(r.assignedElements())}))}updateNotationsMs(r){this.notationCurrent=eh(r,this)}render(){var t;const r=this.fileProviderRef.value===void 0?_(S.loading):this.label??((t=this.fileProviderRef.value.file)==null?void 0:t.fileName)??_(S.file),e={content:!0,content__collapsed:this.collapsed,content__expanded:!this.collapsed};return m`<manager-provider
      slug="manager_${this.UUID}"
      palette=${this.palette}
      autoclear=${this.autoclear}
    >
      <registry-provider 
        slug="registry_${this.UUID}"
        from=${re(this.from)}
        to=${re(this.to)}
        opacity=${re(this.opacity)}
        autoclear=${this.autoclear}
      >
        <group-provider 
          slug="group_${this.UUID}"
        >
          
          <file-provider
            ${be(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${re(this.visible)}
            analysis1=${re(this.analysis1)}
            analysis2=${re(this.analysis2)}
            analysis3=${re(this.analysis3)}
            analysis4=${re(this.analysis4)}
            analysis5=${re(this.analysis5)}
            analysis6=${re(this.analysis6)}
            analysis7=${re(this.analysis7)}
            speed=${re(this.speed)}
            autoclear=${this.autoclear}
          >
            
            <thermal-app
              author=${re(this.author)} 
              recorded=${re(this.recorded)} 
              license=${re(this.license)}
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
    
    `}};He.styles=pe`
  
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
  
  `;Ye([d({type:String,reflect:!0})],He.prototype,"url",2);Ye([d({type:String,reflect:!0})],He.prototype,"visible",2);Ye([d({type:String,reflect:!0,attribute:!0})],He.prototype,"palette",2);Ye([d({type:Number,reflect:!0,attribute:!0})],He.prototype,"opacity",2);Ye([d({type:Number,reflect:!0})],He.prototype,"from",2);Ye([d({type:Number,reflect:!0})],He.prototype,"to",2);Ye([d()],He.prototype,"author",2);Ye([d()],He.prototype,"recorded",2);Ye([d()],He.prototype,"license",2);Ye([d()],He.prototype,"label",2);Ye([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],He.prototype,"showembed",2);Ye([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],He.prototype,"showabout",2);Ye([d({type:String,reflect:!1,attribute:!0,converter:Ge(!1)})],He.prototype,"showtutorial",2);Ye([d({type:String,reflect:!1,converter:Ge(!0)})],He.prototype,"showfullscreen",2);Ye([d({type:String,reflect:!0,converter:Ge(!0)})],He.prototype,"showhistogram",2);Ye([ae({context:Hi}),d({type:String,reflect:!0,converter:Ge(!0)})],He.prototype,"interactiveanalysis",2);Ye([d({type:String,reflect:!0})],He.prototype,"analysis1",2);Ye([d({type:String,reflect:!0})],He.prototype,"analysis2",2);Ye([d({type:String,reflect:!0})],He.prototype,"analysis3",2);Ye([d({type:String,reflect:!0})],He.prototype,"analysis4",2);Ye([d({type:String,reflect:!0})],He.prototype,"analysis5",2);Ye([d({type:String,reflect:!0})],He.prototype,"analysis6",2);Ye([d({type:String,reflect:!0})],He.prototype,"analysis7",2);Ye([d({type:String,reflect:!0})],He.prototype,"ms",2);Ye([d({type:String,reflect:!0})],He.prototype,"speed",2);Ye([d({type:String,reflect:!0})],He.prototype,"autoclear",2);Ye([x()],He.prototype,"collapsed",2);Ye([x(),Lr({flatten:!0})],He.prototype,"_notationSlot",2);Ye([x()],He.prototype,"notations",2);Ye([x(),ae({context:to})],He.prototype,"duration",2);Ye([x(),ae({context:Qa})],He.prototype,"notationList",2);Ye([x(),ae({context:eo})],He.prototype,"notationCurrent",2);He=Ye([J("thermal-lesson-app")],He);Jp();Zp();console.info(`@labir/embed ${zc}
Author: ${qd}`);
