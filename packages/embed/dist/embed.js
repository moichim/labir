var Pd=Object.defineProperty;var _d=(r,e,t)=>e in r?Pd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(_d(r,typeof e!="symbol"?e+"":e,t),t);const Yo="1.2.64",Cd="Jan Jáchim <jachim5@gmail.com>",Oe=r=>typeof r=="string",Es=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},ah=r=>r==null?"":""+r,Od=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},Ad=/###/g,oh=r=>r&&r.indexOf("###")>-1?r.replace(Ad,"."):r,lh=r=>!r||Oe(r),Ts=(r,e,t)=>{const i=Oe(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(lh(r))return{};const n=oh(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return lh(r)?{}:{obj:r,k:oh(i[s])}},hh=(r,e,t)=>{const{obj:i,k:s}=Ts(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=Ts(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=Ts(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},Ed=(r,e,t,i)=>{const{obj:s,k:n}=Ts(r,e,Object);s[n]=s[n]||[],s[n].push(t)},Gn=(r,e)=>{const{obj:t,k:i}=Ts(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},Ld=(r,e,t)=>{const i=Gn(r,t);return i!==void 0?i:Gn(e,t)},bc=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?Oe(r[i])||r[i]instanceof String||Oe(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):bc(r[i],e[i],t):r[i]=e[i]);return r},ts=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Dd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Rd=r=>Oe(r)?r.replace(/[&<>"'\/]/g,e=>Dd[e]):r;class Td{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Md=[" ",",","?","!",";"],Id=new Td(20),Ud=(r,e,t)=>{e=e||"",t=t||"";const i=Md.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=Id.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},Co=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},Yn=r=>r==null?void 0:r.replace("_","-"),zd={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class qn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||zd,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(Oe(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new qn(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new qn(this.logger,e)}}var Vr=new qn;class ga{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class ch extends ga{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,u;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):Oe(i)&&n?o.push(...i.split(n)):o.push(i)));const l=Gn(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!Oe(i)?l:Co((u=(h=this.data)==null?void 0:h[e])==null?void 0:u[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),hh(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(Oe(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=Gn(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?bc(l,i,n):l={...l,...i},hh(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var wc={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const uh={},dh=r=>!Oe(r)&&typeof r!="boolean"&&typeof r!="number";class Xn extends ga{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Od(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Vr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Ud(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Oe(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:Oe(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(u){const j=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${j}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${j}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const d=this.resolve(e,t);let p=d==null?void 0:d.res;const b=(d==null?void 0:d.usedKey)||a,w=(d==null?void 0:d.exactUsedKey)||a,$=["[object Number]","[object Function]","[object RegExp]"],k=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,H=!this.i18nFormat||this.i18nFormat.handleAsObject,O=t.count!==void 0&&!Oe(t.count),R=Xn.hasDefaultValue(t),Y=O?this.pluralResolver.getSuffix(h,t.count,t):"",F=t.ordinal&&O?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",re=O&&!t.ordinal&&t.count===0,x=re&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${Y}`]||t[`defaultValue${F}`]||t.defaultValue;let A=p;H&&!p&&R&&(A=x);const I=dh(A),T=Object.prototype.toString.apply(A);if(H&&A&&I&&$.indexOf(T)<0&&!(Oe(k)&&Array.isArray(A))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const j=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,A,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(d.res=j,d.usedParams=this.getUsedParamsDetails(t),d):j}if(n){const j=Array.isArray(A),M=j?[]:{},z=j?w:b;for(const D in A)if(Object.prototype.hasOwnProperty.call(A,D)){const q=`${z}${n}${D}`;R&&!p?M[D]=this.translate(q,{...t,defaultValue:dh(x)?x[D]:void 0,joinArrays:!1,ns:o}):M[D]=this.translate(q,{...t,joinArrays:!1,ns:o}),M[D]===q&&(M[D]=A[D])}p=M}}else if(H&&Oe(k)&&Array.isArray(p))p=p.join(k),p&&(p=this.extendTranslation(p,e,t,i));else{let j=!1,M=!1;!this.isValidLookup(p)&&R&&(j=!0,p=x),this.isValidLookup(p)||(M=!0,p=a);const D=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&M?void 0:p,q=R&&x!==p&&this.options.updateMissing;if(M||j||q){if(this.logger.log(q?"updateKey":"missingKey",h,l,a,q?x:p),n){const he=this.resolve(a,{...t,keySeparator:!1});he&&he.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let oe=[];const S=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&S&&S[0])for(let he=0;he<S.length;he++)oe.push(S[he]);else this.options.saveMissingTo==="all"?oe=this.languageUtils.toResolveHierarchy(t.lng||this.language):oe.push(t.lng||this.language);const V=(he,ie,Le)=>{var rt;const Ve=R&&Le!==p?Le:D;this.options.missingKeyHandler?this.options.missingKeyHandler(he,l,ie,Ve,q,t):(rt=this.backendConnector)!=null&&rt.saveMissing&&this.backendConnector.saveMissing(he,l,ie,Ve,q,t),this.emit("missingKey",he,l,ie,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?oe.forEach(he=>{const ie=this.pluralResolver.getSuffixes(he,t);re&&t[`defaultValue${this.options.pluralSeparator}zero`]&&ie.indexOf(`${this.options.pluralSeparator}zero`)<0&&ie.push(`${this.options.pluralSeparator}zero`),ie.forEach(Le=>{V([he],a+Le,t[`defaultValue${Le}`]||x)})}):V(oe,a,x))}p=this.extendTranslation(p,e,t,d,i),M&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${a}`),(M||j)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,j?p:void 0))}return s?(d.res=p,d.usedParams=this.getUsedParamsDetails(t),d):p}extendTranslation(e,t,i,s,n){var h,u;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=Oe(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(d){const w=e.match(this.interpolator.nestingRegexp);p=w&&w.length}let b=i.replace&&!Oe(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),e=this.interpolator.interpolate(e,b,i.lng||this.language||s.usedLng,i),d){const w=e.match(this.interpolator.nestingRegexp),$=w&&w.length;p<$&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var w=arguments.length,$=new Array(w),k=0;k<w;k++)$[k]=arguments[k];return(n==null?void 0:n[0])===$[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${$[0]} in key: ${t[0]}`),null):a.translate(...$,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=Oe(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=wc.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return Oe(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),u=h.key;s=u;let d=h.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const p=t.count!==void 0&&!Oe(t.count),b=p&&!t.ordinal&&t.count===0,w=t.context!==void 0&&(Oe(t.context)||typeof t.context=="number")&&t.context!=="",$=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(k=>{var H,O;this.isValidLookup(i)||(o=k,!uh[`${$[0]}-${k}`]&&((H=this.utils)!=null&&H.hasLoadedNamespace)&&!((O=this.utils)!=null&&O.hasLoadedNamespace(o))&&(uh[`${$[0]}-${k}`]=!0,this.logger.warn(`key "${s}" for languages "${$.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),$.forEach(R=>{var re;if(this.isValidLookup(i))return;a=R;const Y=[u];if((re=this.i18nFormat)!=null&&re.addLookupKeys)this.i18nFormat.addLookupKeys(Y,u,R,k,t);else{let x;p&&(x=this.pluralResolver.getSuffix(R,t.count,t));const A=`${this.options.pluralSeparator}zero`,I=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(Y.push(u+x),t.ordinal&&x.indexOf(I)===0&&Y.push(u+x.replace(I,this.options.pluralSeparator)),b&&Y.push(u+A)),w){const T=`${u}${this.options.contextSeparator}${t.context}`;Y.push(T),p&&(Y.push(T+x),t.ordinal&&x.indexOf(I)===0&&Y.push(T+x.replace(I,this.options.pluralSeparator)),b&&Y.push(T+A))}}let F;for(;F=Y.pop();)this.isValidLookup(i)||(n=F,i=this.getResource(R,k,F,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Oe(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class ph{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Vr.create("languageUtils")}getScriptPartFromCode(e){if(e=Yn(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Yn(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Oe(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Oe(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Oe(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):Oe(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const fh={zero:0,one:1,two:2,few:3,many:4,other:5},gh={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Fd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Vr.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Yn(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),gh;if(!e.match(/-|_/))return gh;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>fh[s]-fh[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const mh=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=Ld(r,e,t);return!n&&s&&Oe(t)&&(n=Co(r,t,i),n===void 0&&(n=Co(e,t,i))),n},go=r=>r.replace(/\$/g,"$$$$");class jd{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vr.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:p,nestingPrefixEscaped:b,nestingSuffix:w,nestingSuffixEscaped:$,nestingOptionsSeparator:k,maxReplaces:H,alwaysFormat:O}=e.interpolation;this.escape=t!==void 0?t:Rd,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?ts(n):a||"{{",this.suffix=o?ts(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=p?ts(p):b||ts("$t("),this.nestingSuffix=w?ts(w):$||ts(")"),this.nestingOptionsSeparator=k||",",this.maxReplaces=H||1e3,this.alwaysFormat=O!==void 0?O:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var b;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=w=>{if(w.indexOf(this.formatSeparator)<0){const O=mh(t,l,w,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(O,void 0,i,{...s,...t,interpolationkey:w}):O}const $=w.split(this.formatSeparator),k=$.shift().trim(),H=$.join(this.formatSeparator).trim();return this.format(mh(t,l,k,this.options.keySeparator,this.options.ignoreJSONStructure),H,i,{...s,...t,interpolationkey:k})};this.resetRegExp();const u=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((b=s==null?void 0:s.interpolation)==null?void 0:b.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:w=>go(w)},{regex:this.regexp,safeValue:w=>this.escapeValue?go(this.escape(w)):go(w)}].forEach(w=>{for(o=0;n=w.regex.exec(e);){const $=n[1].trim();if(a=h($),a===void 0)if(typeof u=="function"){const H=u(e,n,s);a=Oe(H)?H:""}else if(s&&Object.prototype.hasOwnProperty.call(s,$))a="";else if(d){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${$} for interpolating ${e}`),a="";else!Oe(a)&&!this.useRawValueToEscape&&(a=ah(a));const k=w.safeValue(a);if(e=e.replace(n[0],k),d?(w.regex.lastIndex+=a.length,w.regex.lastIndex-=n[0].length):w.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let p=`{${d[1]}`;l=d[0],p=this.interpolate(p,a);const b=p.match(/'/g),w=p.match(/"/g);(((b==null?void 0:b.length)??0)%2===0&&!w||w.length%2!==0)&&(p=p.replace(/'/g,'"'));try{a=JSON.parse(p),h&&(a={...h,...a})}catch($){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,$),`${l}${u}${p}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!Oe(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(d=>d.trim());s[1]=u.shift(),l=u,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!Oe(n))return n;Oe(n)||(n=ah(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const Nd=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=h),h==="false"&&(t[u]=!1),h==="true"&&(t[u]=!0),isNaN(h)||(t[u]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},rs=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(Yn(i),s),e[a]=o),o(t)}};class Wd{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Vr.create("formatter"),this.options=e,this.formats={number:rs((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:rs((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:rs((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:rs((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:rs((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=rs(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var d;const{formatName:h,formatOptions:u}=Nd(l);if(this.formats[h]){let p=o;try{const b=((d=s==null?void 0:s.formatParams)==null?void 0:d[s.interpolationkey])||{},w=b.locale||b.lng||s.locale||s.lng||i;p=this.formats[h](o,w,{...u,...s,...b})}catch(b){this.logger.warn(b)}return p}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const Hd=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Bd extends ga{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Vr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let u=!0;t.forEach(d=>{const p=`${h}|${d}`;!i.reload&&this.store.hasResourceBundle(h,d)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?a[p]===void 0&&(a[p]=!0):(this.state[p]=1,u=!1,a[p]===void 0&&(a[p]=!0),n[p]===void 0&&(n[p]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{Ed(l.loaded,[n],a),Hd(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const u=l.loaded[h];u.length&&u.forEach(d=>{o[h][d]===void 0&&(o[h][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(h&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(u=>o(null,u)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Oe(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Oe(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,u,d,p;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((d=(u=this.services)==null?void 0:u.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((p=this.backend)!=null&&p.create){const b={...a,isUpdate:n},w=this.backend.create.bind(this.backend);if(w.length<6)try{let $;w.length===5?$=w(e,t,i,s,b):$=w(e,t,i,s),$&&typeof $.then=="function"?$.then(k=>o(null,k)).catch(o):o(null,$)}catch($){o($)}else w(e,t,i,s,o,b)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const yh=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),Oe(r[1])&&(e.defaultValue=r[1]),Oe(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),vh=r=>{var e,t;return Oe(r.ns)&&(r.ns=[r.ns]),Oe(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Oe(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},Rn=()=>{},Vd=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Fs extends ga{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=vh(e),this.services={},this.logger=Vr,this.modules={external:[]},Vd(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(Oe(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=yh();this.options={...s,...this.options,...vh(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Vr.init(n(this.modules.logger),this.options):Vr.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=Wd;const d=new ph(this.options);this.store=new ch(this.options.resources,this.options);const p=this.services;p.logger=Vr,p.resourceStore=this.store,p.languageUtils=d,p.pluralResolver=new Fd(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(p.formatter=n(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new jd(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Bd(n(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(b){for(var w=arguments.length,$=new Array(w>1?w-1:0),k=1;k<w;k++)$[k-1]=arguments[k];e.emit(b,...$)}),this.modules.languageDetector&&(p.languageDetector=n(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=n(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Xn(this.services,this.options),this.translator.on("*",function(b){for(var w=arguments.length,$=new Array(w>1?w-1:0),k=1;k<w;k++)$[k-1]=arguments[k];e.emit(b,...$)}),this.modules.external.forEach(b=>{b.init&&b.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Rn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=Es(),h=()=>{const u=(d,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),i(d,p)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rn;const s=Oe(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=Es();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Rn),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&wc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=Es();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var u,d;!e&&!l&&this.services.languageDetector&&(l=[]);const h=Oe(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(d=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||d.call(u,h)),this.loadResources(h,p=>{a(p,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,u=new Array(h>2?h-2:0),d=2;d<h;d++)u[d-2]=arguments[d];l=s.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const p=s.options.keySeparator||".";let b;return l.keyPrefix&&Array.isArray(a)?b=a.map(w=>`${l.keyPrefix}${p}${w}`):b=l.keyPrefix?`${l.keyPrefix}${p}${a}`:a,s.t(b,l)};return Oe(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=Es();return this.options.ns?(Oe(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Es();Oe(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new ph(yh());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Fs(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rn;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Fs(s);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const o=Object.keys(this.store.data).reduce((l,h)=>(l[h]={...this.store.data[h]},Object.keys(l[h]).reduce((u,d)=>(u[d]={...l[h][d]},u),{})),{});n.store=new ch(o,s),n.services.resourceStore=n.store}return n.translator=new Xn(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),u=1;u<l;u++)h[u-1]=arguments[u];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const dt=Fs.createInstance();dt.createInstance=Fs.createInstance;dt.createInstance;dt.dir;dt.init;dt.loadResources;dt.reloadResources;dt.use;dt.changeLanguage;dt.getFixedT;const _=dt.t;dt.exists;dt.setDefaultNamespace;dt.hasLoadedNamespace;dt.loadNamespaces;dt.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=globalThis,Kn=Ms.trustedTypes,bh=Kn?Kn.createPolicy("lit-html",{createHTML:r=>r}):void 0,xc="$lit$",$i=`lit$${Math.random().toFixed(9).slice(2)}$`,Sc="?"+$i,Gd=`<${Sc}>`,Bi=document,js=()=>Bi.createComment(""),Ns=r=>r===null||typeof r!="object"&&typeof r!="function",qo=Array.isArray,Yd=r=>qo(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",mo=`[ 	
\f\r]`,Ls=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wh=/-->/g,xh=/>/g,ji=RegExp(`>|${mo}(?:([^\\s"'>=/]+)(${mo}*=${mo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sh=/'/g,$h=/"/g,$c=/^(?:script|style|textarea|title)$/i,qd=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=qd(1),_i=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),kh=new WeakMap,Hi=Bi.createTreeWalker(Bi,129);function kc(r,e){if(!qo(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return bh!==void 0?bh.createHTML(e):e}const Xd=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",a=Ls;for(let o=0;o<t;o++){const l=r[o];let h,u,d=-1,p=0;for(;p<l.length&&(a.lastIndex=p,u=a.exec(l),u!==null);)p=a.lastIndex,a===Ls?u[1]==="!--"?a=wh:u[1]!==void 0?a=xh:u[2]!==void 0?($c.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=ji):u[3]!==void 0&&(a=ji):a===ji?u[0]===">"?(a=s??Ls,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?ji:u[3]==='"'?$h:Sh):a===$h||a===Sh?a=ji:a===wh||a===xh?a=Ls:(a=ji,s=void 0);const b=a===ji&&r[o+1].startsWith("/>")?" ":"";n+=a===Ls?l+Gd:d>=0?(i.push(h),l.slice(0,d)+xc+l.slice(d)+$i+b):l+$i+(d===-2?o:b)}return[kc(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Oo=class Pc{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,u]=Xd(e,t);if(this.el=Pc.createElement(h,i),Hi.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=Hi.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(xc)){const p=u[a++],b=s.getAttribute(d).split($i),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:w[2],strings:b,ctor:w[1]==="."?Jd:w[1]==="?"?Zd:w[1]==="@"?Qd:ma}),s.removeAttribute(d)}else d.startsWith($i)&&(l.push({type:6,index:n}),s.removeAttribute(d));if($c.test(s.tagName)){const d=s.textContent.split($i),p=d.length-1;if(p>0){s.textContent=Kn?Kn.emptyScript:"";for(let b=0;b<p;b++)s.append(d[b],js()),Hi.nextNode(),l.push({type:2,index:++n});s.append(d[p],js())}}}else if(s.nodeType===8)if(s.data===Sc)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf($i,d+1))!==-1;)l.push({type:7,index:n}),d+=$i.length-1}n++}}static createElement(e,t){const i=Bi.createElement("template");return i.innerHTML=e,i}};function hs(r,e,t=r,i){var a,o;if(e===_i)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Ns(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=hs(r,s._$AS(r,e.values),s,i)),e}let Kd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Bi).importNode(t,!0);Hi.currentNode=s;let n=Hi.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new Xo(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new ep(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=Hi.nextNode(),a++)}return Hi.currentNode=Bi,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Xo=class _c{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=hs(this,e,t),Ns(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==_i&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&Ns(this._$AH)?this._$AA.nextSibling.data=e:this.T(Bi.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Oo.createElement(kc(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new Kd(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=kh.get(e.strings);return t===void 0&&kh.set(e.strings,t=new Oo(e)),t}k(e){qo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new _c(this.O(js()),this.O(js()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class ma{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=hs(this,e,t,0),a=!Ns(e)||e!==this._$AH&&e!==_i,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=hs(this,o[i+l],t,l),h===_i&&(h=this._$AH[l]),a||(a=!Ns(h)||h!==this._$AH[l]),h===L?e=L:e!==L&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Jd extends ma{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}class Zd extends ma{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}}let Qd=class extends ma{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=hs(this,e,t,0)??L)===_i)return;const i=this._$AH,s=e===L&&i!==L||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==L&&(i===L||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},ep=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){hs(this,e)}};const yo=Ms.litHtmlPolyfillSupport;yo==null||yo(Oo,Xo),(Ms.litHtmlVersions??(Ms.litHtmlVersions=[])).push("3.2.1");const tp=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new Xo(e.insertBefore(js(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rp=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ya=r=>(...e)=>({_$litDirective$:r,values:e});let Ko=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Is(s,e);return!0},Jn=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Cc=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),np(e)}};function ip(r){this._$AN!==void 0?(Jn(this),this._$AM=r,Cc(this)):this._$AM=r}function sp(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Is(i[n],!1),Jn(i[n]);else i!=null&&(Is(i,!1),Jn(i));else Is(this,r)}const np=r=>{r.type==ai.CHILD&&(r._$AP??(r._$AP=sp),r._$AQ??(r._$AQ=ip))};let ap=class extends Ko{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Cc(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Is(this,e),Jn(this))}setValue(e){if(rp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ph=null,Oc=()=>{};new Promise(r=>{Oc=r});const op={type:"3rdParty",init(r){lp(r)}},lp=r=>{Ph=r,Oc(Ph)},_h=new Map,hp=()=>{_h.forEach((r,e)=>{(e.isConnected===!1||cp(e)===!1)&&_h.delete(e)})};setInterval(hp,1e4);const cp=r=>{const e=r.part;if(e.type===ai.ATTRIBUTE)return e.element.isConnected;if(e.type===ai.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===ai.PROPERTY||e.type===ai.BOOLEAN_ATTRIBUTE||e.type===ai.EVENT||e.type===ai.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:up,forEach:dp}=[];function pp(r){return dp.call(up.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const Ch=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,fp=function(r,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!Ch.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!Ch.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},Oh={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=fp(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var gp={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return Oh.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&Oh.create(t,r,i,s,n)}},mp={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let Ds=null;const Ah=()=>{if(Ds!==null)return Ds;try{Ds=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{Ds=!1}return Ds};var yp={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&Ah())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&Ah()&&window.localStorage.setItem(t,r)}};let Rs=null;const Eh=()=>{if(Rs!==null)return Rs;try{Rs=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{Rs=!1}return Rs};var vp={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&Eh())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&Eh()&&window.sessionStorage.setItem(t,r)}},bp={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},wp={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},xp={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},Sp={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let Ac=!1;try{document.cookie,Ac=!0}catch{}const Ec=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Ac||Ec.splice(1,1);const $p=()=>({order:Ec,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class Lc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=pp(t,this.options||{},$p()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(gp),this.addDetector(mp),this.addDetector(yp),this.addDetector(vp),this.addDetector(bp),this.addDetector(wp),this.addDetector(xp),this.addDetector(Sp)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}Lc.type="languageDetector";const kp={loading:"Loading",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automaticrange",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visible file name",visiblefileurl:"Visible file URL",visiblefiledownload:"Visible file download",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser"},Pp={loading:"Loading",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visible",visiblefileurl:"URL de l'image visible",visiblefiledownload:"Télécharger l'image visible",time:"Temps",duration:"Duration",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Type du fichier",type:"Type",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous également afficher",youmayalsoadd:"Vous pouvez également afficher",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Cadre",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes douces",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieur",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieur",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format csv",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants"},_p={loading:"Načítám",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek"},Cp={loading:"Loading",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r llun isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch y wraddfa thermol yn awtomatig neu cyflewch y wraddfa i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangosfa thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weladwy",visiblefileurl:"URL ffeil weladwy",visiblefiledownload:"Lawrlwythwch y ffeil weladwy",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"grwpio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau dangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"fesul dydd",byhours:"fesul awr",byweeks:"fesul wythnos",bymonths:"fesul mis",byyears:"fesul blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y llun isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y llun isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y llun isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell"},Op={loading:"Loading",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner"};dt.use(op).use(Lc).init({fallbackLng:"en",resources:{cs:{translation:_p},cy:{translation:Cp},de:{translation:Op},en:{translation:kp},fr:{translation:Pp}}});window.i18next=dt;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=globalThis,Jo=Nn.ShadowRoot&&(Nn.ShadyCSS===void 0||Nn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zo=Symbol(),Lh=new WeakMap;let Dc=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Zo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Jo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Lh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Lh.set(t,e))}return e}toString(){return this.cssText}};const Ap=r=>new Dc(typeof r=="string"?r:r+"",void 0,Zo),me=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Dc(t,r,Zo)},Ep=(r,e)=>{if(Jo)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Nn.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Dh=Jo?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ap(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Lp,defineProperty:Dp,getOwnPropertyDescriptor:Rp,getOwnPropertyNames:Tp,getOwnPropertySymbols:Mp,getPrototypeOf:Ip}=Object,ki=globalThis,Rh=ki.trustedTypes,Up=Rh?Rh.emptyScript:"",vo=ki.reactiveElementPolyfillSupport,Us=(r,e)=>r,Zn={toAttribute(r,e){switch(e){case Boolean:r=r?Up:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Qo=(r,e)=>!Lp(r,e),Th={attribute:!0,type:String,converter:Zn,reflect:!1,hasChanged:Qo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ki.litPropertyMetadata??(ki.litPropertyMetadata=new WeakMap);let as=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Th){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Dp(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Rp(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Th}static _$Ei(){if(this.hasOwnProperty(Us("elementProperties")))return;const e=Ip(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Us("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Us("properties"))){const t=this.properties,i=[...Tp(t),...Mp(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Dh(s))}else e!==void 0&&t.push(Dh(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ep(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Zn).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Zn;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Qo)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};as.elementStyles=[],as.shadowRootOptions={mode:"open"},as[Us("elementProperties")]=new Map,as[Us("finalized")]=new Map,vo==null||vo({ReactiveElement:as}),(ki.reactiveElementVersions??(ki.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fr=class extends as{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return _i}};var vc;fr._$litElement$=!0,fr.finalized=!0,(vc=globalThis.litElementHydrateSupport)==null||vc.call(globalThis,{LitElement:fr});const bo=globalThis.litElementPolyfillSupport;bo==null||bo({LitElement:fr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zp={attribute:!0,type:String,converter:Zn,reflect:!1,hasChanged:Qo},Fp=(r=zp,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(e,t)=>typeof t=="object"?Fp(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jp=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ti(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return jp(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Np={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Tn(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Mn(r){return r.toString().indexOf("`")===-1}Mn(r=>r``)||Mn(r=>r`\0`)||Mn(r=>r`\n`)||Mn(r=>r`\u0000`);Tn``&&Tn`\0`&&Tn`\n`&&Tn`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Wp="google#safe";function Hp(){if(typeof window<"u")return window.trustedTypes}function Rc(){var r;return(r=Hp())!==null&&r!==void 0?r:null}let In;function Bp(){var r,e;if(In===void 0)try{In=(e=(r=Rc())===null||r===void 0?void 0:r.createPolicy(Wp,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{In=null}return In}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Tc{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Mh(r){var e;const t=r,i=(e=Bp())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Tc(t,Np)}function Vp(r){var e;if(!((e=Rc())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Tc)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Gp(r,...e){if(e.length===0)return Mh(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return Mh(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Yp(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function qp(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=Yp(e||window);t&&r.setAttribute("nonce",t)}function Xp(r,e,t){r.src=Vp(e),qp(r)}/**
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
 */const Kp=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Xp(t,Gp`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Mc(r={}){await Kp;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Ih(r){if(await Mc(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Jp(r){return await Mc(),new google.visualization.ChartWrapper({container:r})}const Ic=6048e5,Zp=864e5,Uh=Symbol.for("constructDateFrom");function Ci(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&Uh in r?r[Uh](e):r instanceof Date?new r.constructor(e):new Date(e)}function At(r,e){return Ci(e||r,r)}let Qp={};function rn(){return Qp}function li(r,e){var o,l,h,u;const t=rn(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??0,s=At(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function Qn(r,e){return li(r,{...e,weekStartsOn:1})}function Uc(r,e){const t=At(r,e==null?void 0:e.in),i=t.getFullYear(),s=Ci(t,0);s.setFullYear(i+1,0,4),s.setHours(0,0,0,0);const n=Qn(s),a=Ci(t,0);a.setFullYear(i,0,4),a.setHours(0,0,0,0);const o=Qn(a);return t.getTime()>=n.getTime()?i+1:t.getTime()>=o.getTime()?i:i-1}function zh(r){const e=At(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function ef(r,...e){const t=Ci.bind(null,e.find(i=>typeof i=="object"));return e.map(t)}function ea(r,e){const t=At(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function tf(r,e,t){const[i,s]=ef(t==null?void 0:t.in,r,e),n=ea(i),a=ea(s),o=+n-zh(n),l=+a-zh(a);return Math.round((o-l)/Zp)}function rf(r,e){const t=Uc(r,e),i=Ci(r,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),Qn(i)}function sf(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function zc(r){return!(!sf(r)&&typeof r!="number"||isNaN(+At(r)))}function Fc(r,e){const t=At(r,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function ta(r,e){const t=At(r,e==null?void 0:e.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function ra(r,e){const t=At(r,e==null?void 0:e.in);return t.setDate(1),t.setHours(0,0,0,0),t}function jc(r,e){const t=At(r,e==null?void 0:e.in),i=t.getFullYear();return t.setFullYear(i+1,0,0),t.setHours(23,59,59,999),t}function el(r,e){const t=At(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Nc(r,e){const t=At(r,e==null?void 0:e.in);return t.setMinutes(59,59,999),t}function ia(r,e){var o,l;const t=rn(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=At(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const nf={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Wc=(r,e,t)=>{let i;const s=nf[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Rt(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const af={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},of={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},lf={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},hf={date:Rt({formats:af,defaultWidth:"full"}),time:Rt({formats:of,defaultWidth:"full"}),dateTime:Rt({formats:lf,defaultWidth:"full"})},cf={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Hc=(r,e,t,i)=>cf[r];function ot(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const uf={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},df={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},pf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ff={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},gf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},yf=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Bc={ordinalNumber:yf,era:ot({values:uf,defaultWidth:"wide"}),quarter:ot({values:df,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ot({values:pf,defaultWidth:"wide"}),day:ot({values:ff,defaultWidth:"wide"}),dayPeriod:ot({values:gf,defaultWidth:"wide",formattingValues:mf,defaultFormattingWidth:"wide"})};function lt(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?bf(o,d=>d.test(a)):vf(o,d=>d.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const u=e.slice(a.length);return{value:h,rest:u}}}function vf(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function bf(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function sn(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const wf=/^(\d+)(th|st|nd|rd)?/i,xf=/\d+/i,Sf={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$f={any:[/^b/i,/^(a|c)/i]},kf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pf={any:[/1/i,/2/i,/3/i,/4/i]},_f={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Cf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Of={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Af={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ef={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Lf={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Vc={ordinalNumber:sn({matchPattern:wf,parsePattern:xf,valueCallback:r=>parseInt(r,10)}),era:lt({matchPatterns:Sf,defaultMatchWidth:"wide",parsePatterns:$f,defaultParseWidth:"any"}),quarter:lt({matchPatterns:kf,defaultMatchWidth:"wide",parsePatterns:Pf,defaultParseWidth:"any",valueCallback:r=>r+1}),month:lt({matchPatterns:_f,defaultMatchWidth:"wide",parsePatterns:Cf,defaultParseWidth:"any"}),day:lt({matchPatterns:Of,defaultMatchWidth:"wide",parsePatterns:Af,defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:Ef,defaultMatchWidth:"any",parsePatterns:Lf,defaultParseWidth:"any"})},Df={code:"en-US",formatDistance:Wc,formatLong:hf,formatRelative:Hc,localize:Bc,match:Vc,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Rf(r,e){const t=At(r,e==null?void 0:e.in);return tf(t,el(t))+1}function Tf(r,e){const t=At(r,e==null?void 0:e.in),i=+Qn(t)-+rf(t);return Math.round(i/Ic)+1}function Gc(r,e){var u,d,p,b;const t=At(r,e==null?void 0:e.in),i=t.getFullYear(),s=rn(),n=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((b=(p=s.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,a=Ci((e==null?void 0:e.in)||r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=li(a,e),l=Ci((e==null?void 0:e.in)||r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=li(l,e);return+t>=+o?i+1:+t>=+h?i:i-1}function Mf(r,e){var o,l,h,u;const t=rn(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,s=Gc(r,e),n=Ci((e==null?void 0:e.in)||r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),li(n,e)}function If(r,e){const t=At(r,e==null?void 0:e.in),i=+li(t,e)-+Mf(t,e);return Math.round(i/Ic)+1}function We(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Si={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return We(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):We(t+1,2)},d(r,e){return We(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return We(r.getHours()%12||12,e.length)},H(r,e){return We(r.getHours(),e.length)},m(r,e){return We(r.getMinutes(),e.length)},s(r,e){return We(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return We(s,e.length)}},is={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Fh={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Si.y(r,e)},Y:function(r,e,t,i){const s=Gc(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return We(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):We(n,e.length)},R:function(r,e){const t=Uc(r);return We(t,e.length)},u:function(r,e){const t=r.getFullYear();return We(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return We(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return We(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Si.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return We(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=If(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):We(s,e.length)},I:function(r,e,t){const i=Tf(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):We(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Si.d(r,e)},D:function(r,e,t){const i=Rf(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):We(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return We(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return We(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return We(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=is.noon:i===0?s=is.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=is.evening:i>=12?s=is.afternoon:i>=4?s=is.morning:s=is.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Si.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Si.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):We(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):We(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Si.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Si.s(r,e)},S:function(r,e){return Si.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Nh(i);case"XXXX":case"XX":return Ni(i);case"XXXXX":case"XXX":default:return Ni(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return Nh(i);case"xxxx":case"xx":return Ni(i);case"xxxxx":case"xxx":default:return Ni(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+jh(i,":");case"OOOO":default:return"GMT"+Ni(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+jh(i,":");case"zzzz":default:return"GMT"+Ni(i,":")}},t:function(r,e,t){const i=Math.trunc(+r/1e3);return We(i,e.length)},T:function(r,e,t){return We(+r,e.length)}};function jh(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+We(n,2)}function Nh(r,e){return r%60===0?(r>0?"-":"+")+We(Math.abs(r)/60,2):Ni(r,e)}function Ni(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=We(Math.trunc(i/60),2),n=We(i%60,2);return t+s+e+n}const Wh=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Yc=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Uf=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Wh(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Wh(i,e)).replace("{{time}}",Yc(s,e))},zf={p:Yc,P:Uf},Ff=/^D+$/,jf=/^Y+$/,Nf=["D","DD","YY","YYYY"];function Wf(r){return Ff.test(r)}function Hf(r){return jf.test(r)}function Bf(r,e,t){const i=Vf(r,e,t);if(console.warn(i),Nf.includes(r))throw new RangeError(i)}function Vf(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Gf=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yf=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,qf=/^'([^]*?)'?$/,Xf=/''/g,Kf=/[a-zA-Z]/;function _e(r,e,t){var u,d,p,b,w,$,k,H;const i=rn(),s=(t==null?void 0:t.locale)??i.locale??Df,n=(t==null?void 0:t.firstWeekContainsDate)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(p=i.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??(($=(w=t==null?void 0:t.locale)==null?void 0:w.options)==null?void 0:$.weekStartsOn)??i.weekStartsOn??((H=(k=i.locale)==null?void 0:k.options)==null?void 0:H.weekStartsOn)??0,o=At(r,t==null?void 0:t.in);if(!zc(o))throw new RangeError("Invalid time value");let l=e.match(Yf).map(O=>{const R=O[0];if(R==="p"||R==="P"){const Y=zf[R];return Y(O,s.formatLong)}return O}).join("").match(Gf).map(O=>{if(O==="''")return{isToken:!1,value:"'"};const R=O[0];if(R==="'")return{isToken:!1,value:Jf(O)};if(Fh[R])return{isToken:!0,value:O};if(R.match(Kf))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return{isToken:!1,value:O}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(O=>{if(!O.isToken)return O.value;const R=O.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Hf(R)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Wf(R))&&Bf(R,e,String(r));const Y=Fh[R[0]];return Y(o,R,s.localize,h)}).join("")}function Jf(r){const e=r.match(qf);return e?e[1].replace(Xf,"'"):r}function wo(r,e){const t=At(r,e==null?void 0:e.in);if(!zc(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=We(t.getDate(),2),h=We(t.getMonth()+1,2);n=`${We(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=We(t.getHours(),2),h=We(t.getMinutes(),2),u=We(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${u}`}return n}function qc(r,e){const t=At(r,e==null?void 0:e.in);return t.setMinutes(0,0,0),t}var Ao;(function(r){r.csv="text/csv",r.tsv="text/tab-separated-values",r.plain="text/plain"})(Ao||(Ao={}));var vs=r=>r,mr=r=>r,zs=vs,va=vs,cs=vs,Hh=vs,Bh=vs,Zf={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:Ao.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Qf=`\r
`,eg="\uFEFF",nn=r=>Object.assign({},Zf,r);class tg extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class rg extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class ig extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class sg extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var ng=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},ag=r=>Hh(typeof r=="object"?r.key:r),og=r=>Bh(typeof r=="object"?r.displayLabel:r),lg=(r,...e)=>e.reduce((t,i)=>i(t),r),hg=r=>e=>r.useBom?va(mr(e)+eg):e,cg=r=>e=>r.showTitle?tl(va(mr(e)+r.title))(cs("")):e,tl=r=>e=>va(mr(r)+mr(e)+Qf),Xc=r=>(e,t)=>ug(r)(cs(mr(e)+mr(t))),ug=r=>e=>vs(mr(e)+r.fieldSeparator),dg=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new rg("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=cs("");for(let s=0;s<e.length;s++){const n=og(e[s]);i=Xc(r)(i,Kc(r,mr(n)))}return i=cs(mr(i).slice(0,-1)),tl(t)(i)},pg=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=cs("");for(let o=0;o<e.length;o++){const l=ag(e[o]),h=t[n][mr(l)];a=Xc(r)(a,Kc(r,h))}a=cs(mr(a).slice(0,-1)),s=tl(s)(a)}return s},fg=r=>+r===r&&(!isFinite(r)||!!(r%1)),gg=(r,e)=>{if(fg(e)){if(r.decimalSeparator==="locale")return zs(e.toLocaleString());if(r.decimalSeparator)return zs(e.toString().replace(".",r.decimalSeparator))}return zs(e.toString())},Wn=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+ng(e,r.quoteCharacter)+r.quoteCharacter),zs(t)},mg=(r,e)=>{const t=e?"true":"false";return zs(r.boolDisplay[t])},yg=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?Wn(r,r.replaceUndefinedWith+""):e===null?Wn(r,"null"):Wn(r,""),Kc=(r,e)=>{if(typeof e=="number")return gg(r,e);if(typeof e=="string")return Wn(r,e);if(typeof e=="boolean"&&r.boolDisplay)return mg(r,e);if(e===null||typeof e>"u")return yg(r,e);throw new sg(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Jc=r=>e=>{const t=nn(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=lg(va(""),hg(t),cg(t),dg(t,i),pg(t,i,e));if(mr(s).length<1)throw new tg("Output is empty. Is your data formatted correctly?");return s},vg=r=>e=>{const t=nn(r),i=mr(e),s=t.useTextFile?"text/plain":t.mediaType;return new Blob([i],{type:`${s};charset=utf8;`})},Zc=r=>e=>{if(!window)throw new ig("Downloading only supported in a browser environment.");const t=vg(r)(e),i=nn(r),s=i.useTextFile?"txt":i.fileExtension,n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function xg(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var Qc={exports:{}};(function(r){(function(e){var t=R(),i=Y(),s=F(),n=re(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:u,toJpeg:d,toBlob:p,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(x,A){return A=A||{},b(A),Promise.resolve(x).then(function(T){return $(T,A.filter,!0)}).then(k).then(H).then(I).then(function(T){return O(T,A.width||t.width(x),A.height||t.height(x))});function I(T){return A.bgcolor&&(T.style.backgroundColor=A.bgcolor),A.width&&(T.style.width=A.width+"px"),A.height&&(T.style.height=A.height+"px"),A.style&&Object.keys(A.style).forEach(function(j){T.style[j]=A.style[j]}),T}}function h(x,A){return w(x,A||{}).then(function(I){return I.getContext("2d").getImageData(0,0,t.width(x),t.height(x)).data})}function u(x,A){return w(x,A||{}).then(function(I){return I.toDataURL()})}function d(x,A){return A=A||{},w(x,A).then(function(I){return I.toDataURL("image/jpeg",A.quality||1)})}function p(x,A){return w(x,A||{}).then(t.canvasToBlob)}function b(x){typeof x.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=x.imagePlaceholder,typeof x.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=x.cacheBust}function w(x,A){return l(x,A).then(t.makeImage).then(t.delay(100)).then(function(T){var j=I(x);return j.getContext("2d").drawImage(T,0,0),j});function I(T){var j=document.createElement("canvas");if(j.width=A.width||t.width(T),j.height=A.height||t.height(T),A.bgcolor){var M=j.getContext("2d");M.fillStyle=A.bgcolor,M.fillRect(0,0,j.width,j.height)}return j}}function $(x,A,I){if(!I&&A&&!A(x))return Promise.resolve();return Promise.resolve(x).then(T).then(function(z){return j(x,z,A)}).then(function(z){return M(x,z)});function T(z){return z instanceof HTMLCanvasElement?t.makeImage(z.toDataURL()):z.cloneNode(!1)}function j(z,D,q){var oe=z.childNodes;if(oe.length===0)return Promise.resolve(D);return S(D,t.asArray(oe),q).then(function(){return D});function S(V,he,ie){var Le=Promise.resolve();return he.forEach(function(Ve){Le=Le.then(function(){return $(Ve,ie)}).then(function(rt){rt&&V.appendChild(rt)})}),Le}}function M(z,D){if(!(D instanceof Element))return D;return Promise.resolve().then(q).then(oe).then(S).then(V).then(function(){return D});function q(){he(window.getComputedStyle(z),D.style);function he(ie,Le){ie.cssText?Le.cssText=ie.cssText:Ve(ie,Le);function Ve(rt,nt){t.asArray(rt).forEach(function(ne){nt.setProperty(ne,rt.getPropertyValue(ne),rt.getPropertyPriority(ne))})}}}function oe(){[":before",":after"].forEach(function(ie){he(ie)});function he(ie){var Le=window.getComputedStyle(z,ie),Ve=Le.getPropertyValue("content");if(Ve===""||Ve==="none")return;var rt=t.uid();D.className=D.className+" "+rt;var nt=document.createElement("style");nt.appendChild(ne(rt,ie,Le)),D.appendChild(nt);function ne(ce,Ae,Ue){var Ze="."+ce+":"+Ae,je=Ue.cssText?wi(Ue):Ui(Ue);return document.createTextNode(Ze+"{"+je+"}");function wi(Qe){var pr=Qe.getPropertyValue("content");return Qe.cssText+" content: "+pr+";"}function Ui(Qe){return t.asArray(Qe).map(pr).join("; ")+";";function pr(ii){return ii+": "+Qe.getPropertyValue(ii)+(Qe.getPropertyPriority(ii)?" !important":"")}}}}}function S(){z instanceof HTMLTextAreaElement&&(D.innerHTML=z.value),z instanceof HTMLInputElement&&D.setAttribute("value",z.value)}function V(){D instanceof SVGElement&&(D.setAttribute("xmlns","http://www.w3.org/2000/svg"),D instanceof SVGRectElement&&["width","height"].forEach(function(he){var ie=D.getAttribute(he);ie&&D.style.setProperty(he,ie)}))}}}function k(x){return s.resolveAll().then(function(A){var I=document.createElement("style");return x.appendChild(I),I.appendChild(document.createTextNode(A)),x})}function H(x){return n.inlineAll(x).then(function(){return x})}function O(x,A,I){return Promise.resolve(x).then(function(T){return T.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(T)}).then(t.escapeXhtml).then(function(T){return'<foreignObject x="0" y="0" width="100%" height="100%">'+T+"</foreignObject>"}).then(function(T){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+A+'" height="'+I+'">'+T+"</svg>"}).then(function(T){return"data:image/svg+xml;charset=utf-8,"+T})}function R(){return{escape:V,parseExtension:A,mimeType:I,dataAsUrl:S,isDataUrl:T,canvasToBlob:M,resolveUrl:z,getAndEncode:oe,uid:D(),delay:he,asArray:ie,escapeXhtml:Le,makeImage:q,width:Ve,height:rt};function x(){var ne="application/font-woff",ce="image/jpeg";return{woff:ne,woff2:ne,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ce,jpeg:ce,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function A(ne){var ce=/\.([^\.\/]*?)$/g.exec(ne);return ce?ce[1]:""}function I(ne){var ce=A(ne).toLowerCase();return x()[ce]||""}function T(ne){return ne.search(/^(data:)/)!==-1}function j(ne){return new Promise(function(ce){for(var Ae=window.atob(ne.toDataURL().split(",")[1]),Ue=Ae.length,Ze=new Uint8Array(Ue),je=0;je<Ue;je++)Ze[je]=Ae.charCodeAt(je);ce(new Blob([Ze],{type:"image/png"}))})}function M(ne){return ne.toBlob?new Promise(function(ce){ne.toBlob(ce)}):j(ne)}function z(ne,ce){var Ae=document.implementation.createHTMLDocument(),Ue=Ae.createElement("base");Ae.head.appendChild(Ue);var Ze=Ae.createElement("a");return Ae.body.appendChild(Ze),Ue.href=ce,Ze.href=ne,Ze.href}function D(){var ne=0;return function(){return"u"+ce()+ne++;function ce(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function q(ne){return new Promise(function(ce,Ae){var Ue=new Image;Ue.onload=function(){ce(Ue)},Ue.onerror=Ae,Ue.src=ne})}function oe(ne){var ce=3e4;return o.impl.options.cacheBust&&(ne+=(/\?/.test(ne)?"&":"?")+new Date().getTime()),new Promise(function(Ae){var Ue=new XMLHttpRequest;Ue.onreadystatechange=wi,Ue.ontimeout=Ui,Ue.responseType="blob",Ue.timeout=ce,Ue.open("GET",ne,!0),Ue.send();var Ze;if(o.impl.options.imagePlaceholder){var je=o.impl.options.imagePlaceholder.split(/,/);je&&je[1]&&(Ze=je[1])}function wi(){if(Ue.readyState===4){if(Ue.status!==200){Ze?Ae(Ze):Qe("cannot fetch resource: "+ne+", status: "+Ue.status);return}var pr=new FileReader;pr.onloadend=function(){var ii=pr.result.split(/,/)[1];Ae(ii)},pr.readAsDataURL(Ue.response)}}function Ui(){Ze?Ae(Ze):Qe("timeout of "+ce+"ms occured while fetching resource: "+ne)}function Qe(pr){console.error(pr),Ae("")}})}function S(ne,ce){return"data:"+ce+";base64,"+ne}function V(ne){return ne.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function he(ne){return function(ce){return new Promise(function(Ae){setTimeout(function(){Ae(ce)},ne)})}}function ie(ne){for(var ce=[],Ae=ne.length,Ue=0;Ue<Ae;Ue++)ce.push(ne[Ue]);return ce}function Le(ne){return ne.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Ve(ne){var ce=nt(ne,"border-left-width"),Ae=nt(ne,"border-right-width");return ne.scrollWidth+ce+Ae}function rt(ne){var ce=nt(ne,"border-top-width"),Ae=nt(ne,"border-bottom-width");return ne.scrollHeight+ce+Ae}function nt(ne,ce){var Ae=window.getComputedStyle(ne).getPropertyValue(ce);return parseFloat(Ae.replace("px",""))}}function Y(){var x=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:j,shouldProcess:A,impl:{readUrls:I,inline:T}};function A(M){return M.search(x)!==-1}function I(M){for(var z=[],D;(D=x.exec(M))!==null;)z.push(D[1]);return z.filter(function(q){return!t.isDataUrl(q)})}function T(M,z,D,q){return Promise.resolve(z).then(function(S){return D?t.resolveUrl(S,D):S}).then(q||t.getAndEncode).then(function(S){return t.dataAsUrl(S,t.mimeType(z))}).then(function(S){return M.replace(oe(z),"$1"+S+"$3")});function oe(S){return new RegExp(`(url\\(['"]?)(`+t.escape(S)+`)(['"]?\\))`,"g")}}function j(M,z,D){if(q())return Promise.resolve(M);return Promise.resolve(M).then(I).then(function(oe){var S=Promise.resolve(M);return oe.forEach(function(V){S=S.then(function(he){return T(he,V,z,D)})}),S});function q(){return!A(M)}}}function F(){return{resolveAll:x,impl:{readAll:A}};function x(){return A().then(function(I){return Promise.all(I.map(function(T){return T.resolve()}))}).then(function(I){return I.join(`
`)})}function A(){return Promise.resolve(t.asArray(document.styleSheets)).then(T).then(I).then(function(M){return M.map(j)});function I(M){return M.filter(function(z){return z.type===CSSRule.FONT_FACE_RULE}).filter(function(z){return i.shouldProcess(z.style.getPropertyValue("src"))})}function T(M){var z=[];return M.forEach(function(D){try{t.asArray(D.cssRules||[]).forEach(z.push.bind(z))}catch(q){console.log("Error while reading CSS rules from "+D.href,q.toString())}}),z}function j(M){return{resolve:function(){var D=(M.parentStyleSheet||{}).href;return i.inlineAll(M.cssText,D)},src:function(){return M.style.getPropertyValue("src")}}}}}function re(){return{inlineAll:A,impl:{newImage:x}};function x(I){return{inline:T};function T(j){return t.isDataUrl(I.src)?Promise.resolve():Promise.resolve(I.src).then(j||t.getAndEncode).then(function(M){return t.dataAsUrl(M,t.mimeType(I.src))}).then(function(M){return new Promise(function(z,D){I.onload=z,I.onerror=D,I.src=M})})}}function A(I){if(!(I instanceof Element))return Promise.resolve(I);return T(I).then(function(){return I instanceof HTMLImageElement?x(I).inline():Promise.all(t.asArray(I.childNodes).map(function(j){return A(j)}))});function T(j){var M=j.style.getPropertyValue("background");return M?i.inlineAll(M).then(function(z){j.style.setProperty("background",z,j.style.getPropertyPriority("background"))}).then(function(){return j}):Promise.resolve(j)}}}})()})(Qc);var Sg=Qc.exports;const $g=wg(Sg);var Eo={exports:{}};const kg={},Pg=Object.freeze(Object.defineProperty({__proto__:null,default:kg},Symbol.toStringTag,{value:"Module"})),ss=xg(Pg);/**
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
 */(function(r,e){(function(t,i){i(e)})(bg,function(t){var i={},s={exports:{}};(function(G){var Z=function(be){return typeof be<"u"&&be.versions!=null&&be.versions.node!=null&&be+""=="[object process]"};G.exports.isNode=Z,G.exports.platform=typeof process<"u"&&Z(process)?"node":"browser";var J=G.exports.platform==="node"&&ss;G.exports.isMainThread=G.exports.platform==="node"?(!J||J.isMainThread)&&!process.connected:typeof Window<"u",G.exports.cpus=G.exports.platform==="browser"?self.navigator.hardwareConcurrency:ss.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function G(be,Ge){var W=this;if(!(this instanceof G))throw new SyntaxError("Constructor must be called with the new operator");if(typeof be!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var it=[],Be=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var xt=function(B,de){it.push(B),Be.push(de)};this.then=function(K,B){return new G(function(de,Ce){var He=K?Z(K,de,Ce):de,Ut=B?Z(B,de,Ce):Ce;xt(He,Ut)},W)};var Lt=function(B){return W.resolved=!0,W.rejected=!1,W.pending=!1,it.forEach(function(de){de(B)}),xt=function(Ce,He){Ce(B)},Lt=Q=function(){},W},Q=function(B){return W.resolved=!1,W.rejected=!0,W.pending=!1,Be.forEach(function(de){de(B)}),xt=function(Ce,He){He(B)},Lt=Q=function(){},W};this.cancel=function(){return Ge?Ge.cancel():Q(new J),W},this.timeout=function(K){if(Ge)Ge.timeout(K);else{var B=setTimeout(function(){Q(new De("Promise timed out after "+K+" ms"))},K);W.always(function(){clearTimeout(B)})}return W},be(function(K){Lt(K)},function(K){Q(K)})}function Z(be,Ge,W){return function(it){try{var Be=be(it);Be&&typeof Be.then=="function"&&typeof Be.catch=="function"?Be.then(Ge,W):Ge(Be)}catch(xt){W(xt)}}}G.prototype.catch=function(be){return this.then(null,be)},G.prototype.always=function(be){return this.then(be,be)},G.prototype.finally=function(be){var Ge=this,W=function(){return new G(function(Be){return Be()}).then(be).then(function(){return Ge})};return this.then(W,W)},G.all=function(be){return new G(function(Ge,W){var it=be.length,Be=[];it?be.forEach(function(xt,Lt){xt.then(function(Q){Be[Lt]=Q,it--,it==0&&Ge(Be)},function(Q){it=0,W(Q)})}):Ge(Be)})},G.defer=function(){var be={};return be.promise=new G(function(Ge,W){be.resolve=Ge,be.reject=W}),be};function J(be){this.message=be||"promise cancelled",this.stack=new Error().stack}J.prototype=new Error,J.prototype.constructor=Error,J.prototype.name="CancellationError",G.CancellationError=J;function De(be){this.message=be||"timeout exceeded",this.stack=new Error().stack}return De.prototype=new Error,De.prototype.constructor=Error,De.prototype.name="TimeoutError",G.TimeoutError=De,a.Promise=G,a}function h(G,Z){(Z==null||Z>G.length)&&(Z=G.length);for(var J=0,De=Array(Z);J<Z;J++)De[J]=G[J];return De}function u(G,Z){var J=typeof Symbol<"u"&&G[Symbol.iterator]||G["@@iterator"];if(!J){if(Array.isArray(G)||(J=H(G))||Z){J&&(G=J);var De=0,be=function(){};return{s:be,n:function(){return De>=G.length?{done:!0}:{done:!1,value:G[De++]}},e:function(Be){throw Be},f:be}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ge,W=!0,it=!1;return{s:function(){J=J.call(G)},n:function(){var Be=J.next();return W=Be.done,Be},e:function(Be){it=!0,Ge=Be},f:function(){try{W||J.return==null||J.return()}finally{if(it)throw Ge}}}}function d(G,Z,J){return(Z=$(Z))in G?Object.defineProperty(G,Z,{value:J,enumerable:!0,configurable:!0,writable:!0}):G[Z]=J,G}function p(G,Z){var J=Object.keys(G);if(Object.getOwnPropertySymbols){var De=Object.getOwnPropertySymbols(G);Z&&(De=De.filter(function(be){return Object.getOwnPropertyDescriptor(G,be).enumerable})),J.push.apply(J,De)}return J}function b(G){for(var Z=1;Z<arguments.length;Z++){var J=arguments[Z]!=null?arguments[Z]:{};Z%2?p(Object(J),!0).forEach(function(De){d(G,De,J[De])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(J)):p(Object(J)).forEach(function(De){Object.defineProperty(G,De,Object.getOwnPropertyDescriptor(J,De))})}return G}function w(G,Z){if(typeof G!="object"||!G)return G;var J=G[Symbol.toPrimitive];if(J!==void 0){var De=J.call(G,Z||"default");if(typeof De!="object")return De;throw new TypeError("@@toPrimitive must return a primitive value.")}return(Z==="string"?String:Number)(G)}function $(G){var Z=w(G,"string");return typeof Z=="symbol"?Z:Z+""}function k(G){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Z){return typeof Z}:function(Z){return Z&&typeof Symbol=="function"&&Z.constructor===Symbol&&Z!==Symbol.prototype?"symbol":typeof Z},k(G)}function H(G,Z){if(G){if(typeof G=="string")return h(G,Z);var J={}.toString.call(G).slice(8,-1);return J==="Object"&&G.constructor&&(J=G.constructor.name),J==="Map"||J==="Set"?Array.from(G):J==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(J)?h(G,Z):void 0}}var O={exports:{}},R={},Y;function F(){return Y||(Y=1,R.validateOptions=function(Z,J,De){if(Z){var be=Z?Object.keys(Z):[],Ge=be.find(function(it){return!J.includes(it)});if(Ge)throw new Error('Object "'+De+'" contains an unknown option "'+Ge+'"');var W=J.find(function(it){return Object.prototype[it]&&!be.includes(it)});if(W)throw new Error('Object "'+De+'" contains an inherited option "'+W+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return Z}},R.workerOptsNames=["credentials","name","type"],R.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],R.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),R}var re,x;function A(){return x||(x=1,re=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return i.all([o,r]).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),re}var I;function T(){if(I)return O.exports;I=1;var G=l(),Z=G.Promise,J=n,De=F(),be=De.validateOptions,Ge=De.forkOptsNames,W=De.workerThreadOptsNames,it=De.workerOptsNames,Be="__workerpool-terminate__",xt="__workerpool-cleanup__";function Lt(){var xe=K();if(!xe)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return xe}function Q(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function K(){try{return ss}catch(xe){if(k(xe)==="object"&&xe!==null&&xe.code==="MODULE_NOT_FOUND")return null;throw xe}}function B(){if(J.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var xe=new Blob([A()],{type:"text/javascript"});return window.URL.createObjectURL(xe)}else return __dirname+"/worker.js"}function de(xe,Ee){if(Ee.workerType==="web")return Q(),Ce(xe,Ee.workerOpts,Worker);if(Ee.workerType==="thread")return X=Lt(),He(xe,X,Ee);if(Ee.workerType==="process"||!Ee.workerType)return Ut(xe,Bt(Ee),ss);if(J.platform==="browser")return Q(),Ce(xe,Ee.workerOpts,Worker);var X=K();return X?He(xe,X,Ee):Ut(xe,Bt(Ee),ss)}function Ce(xe,Ee,X){be(Ee,it,"workerOpts");var $e=new X(xe,Ee);return $e.isBrowserWorker=!0,$e.on=function(Re,Me){this.addEventListener(Re,function(Xe){Me(Xe.data)})},$e.send=function(Re,Me){this.postMessage(Re,Me)},$e}function He(xe,Ee,X){var $e,Re;be(X==null?void 0:X.workerThreadOpts,W,"workerThreadOpts");var Me=new Ee.Worker(xe,b({stdout:($e=X==null?void 0:X.emitStdStreams)!==null&&$e!==void 0?$e:!1,stderr:(Re=X==null?void 0:X.emitStdStreams)!==null&&Re!==void 0?Re:!1},X==null?void 0:X.workerThreadOpts));return Me.isWorkerThread=!0,Me.send=function(Xe,Ie){this.postMessage(Xe,Ie)},Me.kill=function(){return this.terminate(),!0},Me.disconnect=function(){this.terminate()},X!=null&&X.emitStdStreams&&(Me.stdout.on("data",function(Xe){return Me.emit("stdout",Xe)}),Me.stderr.on("data",function(Xe){return Me.emit("stderr",Xe)})),Me}function Ut(xe,Ee,X){be(Ee.forkOpts,Ge,"forkOpts");var $e=X.fork(xe,Ee.forkArgs,Ee.forkOpts),Re=$e.send;return $e.send=function(Me){return Re.call($e,Me)},Ee.emitStdStreams&&($e.stdout.on("data",function(Me){return $e.emit("stdout",Me)}),$e.stderr.on("data",function(Me){return $e.emit("stderr",Me)})),$e.isChildProcess=!0,$e}function Bt(xe){xe=xe||{};var Ee=process.execArgv.join(" "),X=Ee.indexOf("--inspect")!==-1,$e=Ee.indexOf("--debug-brk")!==-1,Re=[];return X&&(Re.push("--inspect="+xe.debugPort),$e&&Re.push("--debug-brk")),process.execArgv.forEach(function(Me){Me.indexOf("--max-old-space-size")>-1&&Re.push(Me)}),Object.assign({},xe,{forkArgs:xe.forkArgs,forkOpts:Object.assign({},xe.forkOpts,{execArgv:(xe.forkOpts&&xe.forkOpts.execArgv||[]).concat(Re),stdio:xe.emitStdStreams?"pipe":void 0})})}function Qt(xe){for(var Ee=new Error(""),X=Object.keys(xe),$e=0;$e<X.length;$e++)Ee[X[$e]]=xe[X[$e]];return Ee}function er(xe,Ee){if(Object.keys(xe.processing).length===1){var X=Object.values(xe.processing)[0];X.options&&typeof X.options.on=="function"&&X.options.on(Ee)}}function Wr(xe,Ee){var X=this,$e=Ee||{};this.script=xe||B(),this.worker=de(this.script,$e),this.debugPort=$e.debugPort,this.forkOpts=$e.forkOpts,this.forkArgs=$e.forkArgs,this.workerOpts=$e.workerOpts,this.workerThreadOpts=$e.workerThreadOpts,this.workerTerminateTimeout=$e.workerTerminateTimeout,xe||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Ie){er(X,{stdout:Ie.toString()})}),this.worker.on("stderr",function(Ie){er(X,{stderr:Ie.toString()})}),this.worker.on("message",function(Ie){if(!X.terminated)if(typeof Ie=="string"&&Ie==="ready")X.worker.ready=!0,Me();else{var zt=Ie.id,ut=X.processing[zt];if(ut!==void 0&&(Ie.isEvent?ut.options&&typeof ut.options.on=="function"&&ut.options.on(Ie.payload):(delete X.processing[zt],X.terminating===!0&&X.terminate(),Ie.error?ut.resolver.reject(Qt(Ie.error)):ut.resolver.resolve(Ie.result))),Ie.method===xt){var Vt=X.tracking[Ie.id];Vt!==void 0&&(Ie.error?(clearTimeout(Vt.timeoutId),Vt.resolver.reject(Qt(Ie.error))):(X.tracking&&clearTimeout(Vt.timeoutId),Vt.resolver.resolve(Vt.result))),delete X.tracking[zt]}}});function Re(Ie){X.terminated=!0;for(var zt in X.processing)X.processing[zt]!==void 0&&X.processing[zt].resolver.reject(Ie);X.processing=Object.create(null)}function Me(){var Ie=u(X.requestQueue.splice(0)),zt;try{for(Ie.s();!(zt=Ie.n()).done;){var ut=zt.value;X.worker.send(ut.message,ut.transfer)}}catch(Vt){Ie.e(Vt)}finally{Ie.f()}}var Xe=this.worker;this.worker.on("error",Re),this.worker.on("exit",function(Ie,zt){var ut=`Workerpool Worker terminated Unexpectedly
`;ut+="    exitCode: `"+Ie+"`\n",ut+="    signalCode: `"+zt+"`\n",ut+="    workerpool.script: `"+X.script+"`\n",ut+="    spawnArgs: `"+Xe.spawnargs+"`\n",ut+="    spawnfile: `"+Xe.spawnfile+"`\n",ut+="    stdout: `"+Xe.stdout+"`\n",ut+="    stderr: `"+Xe.stderr+"`\n",Re(new Error(ut))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Wr.prototype.methods=function(){return this.exec("methods")},Wr.prototype.exec=function(xe,Ee,X,$e){X||(X=Z.defer());var Re=++this.lastId;this.processing[Re]={id:Re,resolver:X,options:$e};var Me={message:{id:Re,method:xe,params:Ee},transfer:$e&&$e.transfer};this.terminated?X.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Me.message,Me.transfer):this.requestQueue.push(Me);var Xe=this;return X.promise.catch(function(Ie){if(Ie instanceof Z.CancellationError||Ie instanceof Z.TimeoutError)return Xe.tracking[Re]={id:Re,resolver:Z.defer()},delete Xe.processing[Re],Xe.tracking[Re].resolver.promise=Xe.tracking[Re].resolver.promise.catch(function(zt){delete Xe.tracking[Re];var ut=Xe.terminateAndNotify(!0).then(function(){throw zt},function(Vt){throw Vt});return ut}),Xe.worker.send({id:Re,method:xt}),Xe.tracking[Re].timeoutId=setTimeout(function(){Xe.tracking[Re].resolver.reject(Ie)},Xe.workerTerminateTimeout),Xe.tracking[Re].resolver.promise;throw Ie})},Wr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Wr.prototype.terminate=function(xe,Ee){var X=this;if(xe){for(var $e in this.processing)this.processing[$e]!==void 0&&this.processing[$e].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var Re=0,Me=Object.values(X.tracking);Re<Me.length;Re++){var Xe=Me[Re];clearTimeout(Xe.timeoutId),Xe.resolver.reject(new Error("Worker Terminating"))}if(X.tracking=Object.create(null),typeof Ee=="function"&&(this.terminationHandler=Ee),this.busy())this.terminating=!0;else{var Ie=function(Vt){if(X.terminated=!0,X.cleaning=!1,X.worker!=null&&X.worker.removeAllListeners&&X.worker.removeAllListeners("message"),X.worker=null,X.terminating=!1,X.terminationHandler)X.terminationHandler(Vt,X);else if(Vt)throw Vt};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ie(new Error("worker already killed!"));return}var zt=setTimeout(function(){X.worker&&X.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(zt),X.worker&&(X.worker.killed=!0),Ie()}),this.worker.ready?this.worker.send(Be):this.requestQueue.push({message:Be}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ie()}},Wr.prototype.terminateAndNotify=function(xe,Ee){var X=Z.defer();return Ee&&X.promise.timeout(Ee),this.terminate(xe,function($e,Re){$e?X.reject($e):X.resolve(Re)}),X.promise},O.exports=Wr,O.exports._tryRequireWorkerThreads=K,O.exports._setupProcessWorker=Ut,O.exports._setupBrowserWorker=Ce,O.exports._setupWorkerThreadWorker=He,O.exports.ensureWorkerThreads=Lt,O.exports}var j,M;function z(){if(M)return j;M=1;var G=65535;j=Z;function Z(){this.ports=Object.create(null),this.length=0}return Z.prototype.nextAvailableStartingAt=function(J){for(;this.ports[J]===!0;)J++;if(J>=G)throw new Error("WorkerPool debug port limit reached: "+J+">= "+G);return this.ports[J]=!0,this.length++,J},Z.prototype.releasePort=function(J){delete this.ports[J],this.length--},j}var D,q;function oe(){if(q)return D;q=1;var G=l(),Z=G.Promise,J=T(),De=n,be=z(),Ge=new be;function W(Q,K){typeof Q=="string"?this.script=Q||null:(this.script=null,K=Q),this.workers=[],this.tasks=[],K=K||{},this.forkArgs=Object.freeze(K.forkArgs||[]),this.forkOpts=Object.freeze(K.forkOpts||{}),this.workerOpts=Object.freeze(K.workerOpts||{}),this.workerThreadOpts=Object.freeze(K.workerThreadOpts||{}),this.debugPortStart=K.debugPortStart||43210,this.nodeWorker=K.nodeWorker,this.workerType=K.workerType||K.nodeWorker||"auto",this.maxQueueSize=K.maxQueueSize||1/0,this.workerTerminateTimeout=K.workerTerminateTimeout||1e3,this.onCreateWorker=K.onCreateWorker||function(){return null},this.onTerminateWorker=K.onTerminateWorker||function(){return null},this.emitStdStreams=K.emitStdStreams||!1,K&&"maxWorkers"in K?(it(K.maxWorkers),this.maxWorkers=K.maxWorkers):this.maxWorkers=Math.max((De.cpus||4)-1,1),K&&"minWorkers"in K&&(K.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Be(K.minWorkers),this.minWorkers=K.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&J.ensureWorkerThreads()}W.prototype.exec=function(Q,K,B){if(K&&!Array.isArray(K))throw new TypeError('Array expected as argument "params"');if(typeof Q=="string"){var de=Z.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ce=this.tasks,He={method:Q,params:K,resolver:de,timeout:null,options:B};Ce.push(He);var Ut=de.promise.timeout;return de.promise.timeout=function(Qt){return Ce.indexOf(He)!==-1?(He.timeout=Qt,de.promise):Ut.call(de.promise,Qt)},this._next(),de.promise}else{if(typeof Q=="function")return this.exec("run",[String(Q),K],B);throw new TypeError('Function or string expected as argument "method"')}},W.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var Q=this;return this.exec("methods").then(function(K){var B={};return K.forEach(function(de){B[de]=function(){return Q.exec(de,Array.prototype.slice.call(arguments))}}),B})},W.prototype._next=function(){if(this.tasks.length>0){var Q=this._getWorker();if(Q){var K=this,B=this.tasks.shift();if(B.resolver.promise.pending){var de=Q.exec(B.method,B.params,B.resolver,B.options).then(K._boundNext).catch(function(){if(Q.terminated)return K._removeWorker(Q)}).then(function(){K._next()});typeof B.timeout=="number"&&de.timeout(B.timeout)}else K._next()}}},W.prototype._getWorker=function(){for(var Q=this.workers,K=0;K<Q.length;K++){var B=Q[K];if(B.busy()===!1)return B}return Q.length<this.maxWorkers?(B=this._createWorkerHandler(),Q.push(B),B):null},W.prototype._removeWorker=function(Q){var K=this;return Ge.releasePort(Q.debugPort),this._removeWorkerFromList(Q),this._ensureMinWorkers(),new Z(function(B,de){Q.terminate(!1,function(Ce){K.onTerminateWorker({forkArgs:Q.forkArgs,forkOpts:Q.forkOpts,workerThreadOpts:Q.workerThreadOpts,script:Q.script}),Ce?de(Ce):B(Q)})})},W.prototype._removeWorkerFromList=function(Q){var K=this.workers.indexOf(Q);K!==-1&&this.workers.splice(K,1)},W.prototype.terminate=function(Q,K){var B=this;this.tasks.forEach(function(Bt){Bt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var de=function(Qt){Ge.releasePort(Qt.debugPort),this._removeWorkerFromList(Qt)},Ce=de.bind(this),He=[],Ut=this.workers.slice();return Ut.forEach(function(Bt){var Qt=Bt.terminateAndNotify(Q,K).then(Ce).always(function(){B.onTerminateWorker({forkArgs:Bt.forkArgs,forkOpts:Bt.forkOpts,workerThreadOpts:Bt.workerThreadOpts,script:Bt.script})});He.push(Qt)}),Z.all(He)},W.prototype.stats=function(){var Q=this.workers.length,K=this.workers.filter(function(B){return B.busy()}).length;return{totalWorkers:Q,busyWorkers:K,idleWorkers:Q-K,pendingTasks:this.tasks.length,activeTasks:K}},W.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var Q=this.workers.length;Q<this.minWorkers;Q++)this.workers.push(this._createWorkerHandler())},W.prototype._createWorkerHandler=function(){var Q=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new J(Q.script||this.script,{forkArgs:Q.forkArgs||this.forkArgs,forkOpts:Q.forkOpts||this.forkOpts,workerOpts:Q.workerOpts||this.workerOpts,workerThreadOpts:Q.workerThreadOpts||this.workerThreadOpts,debugPort:Ge.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function it(Q){if(!xt(Q)||!Lt(Q)||Q<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Be(Q){if(!xt(Q)||!Lt(Q)||Q<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function xt(Q){return typeof Q=="number"}function Lt(Q){return Math.round(Q)==Q}return D=W,D}var S={},V,he;function ie(){if(he)return V;he=1;function G(Z,J){this.message=Z,this.transfer=J}return V=G,V}var Le;function Ve(){return Le||(Le=1,function(G){var Z=ie(),J=l().Promise,De="__workerpool-terminate__",be="__workerpool-cleanup__",Ge=1e3,W={exit:function(){}},it={addAbortListener:function(de){W.abortListeners.push(de)},emit:W.emit};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")W.on=function(B,de){addEventListener(B,function(Ce){de(Ce.data)})},W.send=function(B,de){de?postMessage(B,de):postMessage(B)};else if(typeof process<"u"){var Be;try{Be=ss}catch(B){if(!(k(B)==="object"&&B!==null&&B.code==="MODULE_NOT_FOUND"))throw B}if(Be&&Be.parentPort!==null){var xt=Be.parentPort;W.send=xt.postMessage.bind(xt),W.on=xt.on.bind(xt),W.exit=process.exit.bind(process)}else W.on=process.on.bind(process),W.send=function(B){process.send(B)},W.on("disconnect",function(){process.exit(1)}),W.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Lt(B){return Object.getOwnPropertyNames(B).reduce(function(de,Ce){return Object.defineProperty(de,Ce,{value:B[Ce],enumerable:!0})},{})}function Q(B){return B&&typeof B.then=="function"&&typeof B.catch=="function"}W.methods={},W.methods.run=function(de,Ce){var He=new Function("return ("+de+").apply(this, arguments);");return He.worker=it,He.apply(He,Ce)},W.methods.methods=function(){return Object.keys(W.methods)},W.terminationHandler=void 0,W.abortListenerTimeout=Ge,W.abortListeners=[],W.terminateAndExit=function(B){var de=function(){W.exit(B)};if(!W.terminationHandler)return de();var Ce=W.terminationHandler(B);return Q(Ce)?(Ce.then(de,de),Ce):(de(),new J(function(He,Ut){Ut(new Error("Worker terminating"))}))},W.cleanup=function(B){if(!W.abortListeners.length)return W.send({id:B,method:be,error:Lt(new Error("Worker terminating"))}),new J(function(er){er()});var de=function(){W.exit()},Ce=function(){W.abortListeners.length||(W.abortListeners=[])},He=W.abortListeners.map(function(er){return er()}),Ut,Bt=new J(function(er,Wr){Ut=setTimeout(function(){Wr(new Error("Timeout occured waiting for abort handler, killing worker"))},W.abortListenerTimeout)}),Qt=J.all(He).then(function(){clearTimeout(Ut),Ce()},function(){clearTimeout(Ut),de()});return J.all([Qt,Bt]).then(function(){W.send({id:B,method:be,error:null})},function(er){W.send({id:B,method:be,error:er?Lt(er):null})})};var K=null;W.on("message",function(B){if(B===De)return W.terminateAndExit(0);if(B.method===be)return W.cleanup(B.id);try{var de=W.methods[B.method];if(de){K=B.id;var Ce=de.apply(de,B.params);Q(Ce)?Ce.then(function(He){He instanceof Z?W.send({id:B.id,result:He.message,error:null},He.transfer):W.send({id:B.id,result:He,error:null}),K=null}).catch(function(He){W.send({id:B.id,result:null,error:Lt(He)}),K=null}):(Ce instanceof Z?W.send({id:B.id,result:Ce.message,error:null},Ce.transfer):W.send({id:B.id,result:Ce,error:null}),K=null)}else throw new Error('Unknown method "'+B.method+'"')}catch(He){W.send({id:B.id,result:null,error:Lt(He)})}}),W.register=function(B,de){if(B)for(var Ce in B)B.hasOwnProperty(Ce)&&(W.methods[Ce]=B[Ce],W.methods[Ce].worker=it);de&&(W.terminationHandler=de.onTerminate,W.abortListenerTimeout=de.abortListenerTimeout||Ge),W.send("ready")},W.emit=function(B){if(K){if(B instanceof Z){W.send({id:K,isEvent:!0,payload:B.message},B.transfer);return}W.send({id:K,isEvent:!0,payload:B})}},G.add=W.register,G.emit=W.emit}(S)),S}var rt=n.platform,nt=n.isMainThread,ne=n.cpus;function ce(G,Z){var J=oe();return new J(G,Z)}var Ae=i.pool=ce;function Ue(G,Z){var J=Ve();J.add(G,Z)}var Ze=i.worker=Ue;function je(G){var Z=Ve();Z.emit(G)}var wi=i.workerEmit=je,Ui=l(),Qe=Ui.Promise,pr=i.Promise=Qe,ii=i.Transfer=ie(),Na=i.platform=rt,Wa=i.isMainThread=nt,Ha=i.cpus=ne;t.Promise=pr,t.Transfer=ii,t.cpus=Ha,t.default=i,t.isMainThread=Wa,t.platform=Na,t.pool=Ae,t.worker=Ze,t.workerEmit=wi,Object.defineProperty(t,"__esModule",{value:!0})})})(Eo,Eo.exports);var _g=Eo.exports,kt=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},eu=class extends kt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Cg=class extends kt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Og=class extends kt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,t=this.parent.histogram.value.filter(s=>s.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},Ag=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},Eg=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Lg=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Dg=Ag(),Gr={iron:{pixels:Lg,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:Eg,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:Dg,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Rg=class extends kt{get availablePalettes(){return Gr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},_o,Tg=(_o=class{},c(_o,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),_o),bt,st=(bt=class extends Tg{static humanRangeDates(e,t){return e=bt.inputToDate(e),t=bt.inputToDate(t),e.getUTCDate()===t.getUTCDate()?bt.humanDate(e):[bt.humanDate(e),bt.humanDate(t)].join(" - ")}static human(e){return`${bt.humanDate(e)} ${bt.humanTime(e,!0)} `}},c(bt,"isoDate",e=>(e=bt.inputToDate(e),wo(e,{representation:"date"}))),c(bt,"isoTime",e=>(e=bt.inputToDate(e),wo(e,{representation:"time"}))),c(bt,"isoComplete",e=>(e=bt.inputToDate(e),wo(e))),c(bt,"humanTime",(e,t=!1)=>(e=bt.inputToDate(e),_e(e,t?"HH:mm:ss":"HH:mm"))),c(bt,"humanDate",(e,t=!1)=>(e=bt.inputToDate(e),_e(e,t?"d. M.":"d. M. yyyy"))),bt),ee=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},ba=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new ee);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},ft=class{constructor(r,e,t){c(this,"onSerializableChange",new ee);c(this,"_selected",!1);c(this,"onSelected",new ee);c(this,"onDeselected",new ee);c(this,"onValues",new ee);c(this,"onMoveOrResize",new ee);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new ee);c(this,"_initialColor");c(this,"onSetInitialColor",new ee);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new ee);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},tu=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new ee);c(this,"pxY");c(this,"_y");c(this,"onY",new ee);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new ee);c(this,"onMouseLeave",new ee);c(this,"onActivate",new ee);c(this,"onDeactivate",new ee);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},sr,Mg=(sr=class extends tu{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(sr.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=sr.sizePx(-.5),t.style.left=sr.sizePx(-.5),t.style.width=sr.sizePx(),t.style.height=sr.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=sr.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=sr.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${sr.sizePx(.5)} - 3px )`,t.style.left=`calc( ${sr.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(sr,"size",20),sr),$r=class ru extends ft{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new Mg("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new iu(this)),this._graph}static addAtPoint(t,i,s,n,a){return new ru(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(u=>u.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=ft.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=ft.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=ft.serializedGetNumericalValueByKey(i,"top"),h=ft.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},iu=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new ee);c(this,"onGraphData",new ee);c(this,"onAnalysisSelection",new ee);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof $r)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof $r)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof $r?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof $r)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},Ig=class extends tu{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Ug=class extends Ig{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Rr=class extends ft{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new iu(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,u=a-n;return{top:n,left:o,width:h,height:u}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Ug(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(b=>b.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=ft.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=ft.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=ft.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=ft.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=ft.serializedGetNumericalValueByKey(t,"top"),u=ft.serializedGetNumericalValueByKey(t,"left"),d=ft.serializedGetNumericalValueByKey(t,"width"),p=ft.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),u!==void 0&&u!==this.left&&(this.setLeft(u),i=!0),d!==void 0&&d!==this.width&&(this.setWidth(d),i=!0),p!==void 0&&p!==this.height&&(this.setHeight(p),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},su=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},Vh=class extends su{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},Gh=class Hn extends Rr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Hn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=Hn.calculateDimensionsFromCorners(s,n,a,o),p=new Hn(e,t,i,l,h,u,d);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Vh(this,e,t,e+i,t+s):new Vh(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++)if(this.isWithin(d,h)){const p=this.file.pixels[u+d];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},Yh=class extends su{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},qh=class Bn extends Rr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new Bn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=Bn.calculateDimensionsFromCorners(s,n,a,o),p=new Bn(e,t,i,l,h,u,d);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Yh(this,e,t,e+i,t+s):new Yh(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++){const p=this.file.pixels[u+d];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},Vn=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],zg=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new ee);c(this,"onRemove",new ee);c(this,"onSelectionChange",new ee);c(this,"colors",Vn);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=qh.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=qh.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=Gh.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=Gh.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=$r.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=$r.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=Vn.filter(i=>!e.includes(i));return t.length>0?t[0]:Vn[0]}getNextName(e){return`${e} ${this.all.length}`}},Fg=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},jg=class extends kt{constructor(){super(...arguments);c(this,"layers",new zg(this));c(this,"points",new Fg(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,u=e.layerY/o;return{top:Math.round(l*u),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Ng=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new ee);c(this,"onAddGraph",new ee);c(this,"onRemoveGraph",new ee);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:_e(a,"m:ss:SSS")+" ",[e[1].key]:_e(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},Wg=class extends kt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new ee);c(this,"listeners",new Ng(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=nn({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=Jc(i)(e);Zc(i)(s)}},Hg=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new ee);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},ls,nu=(ls=class extends kt{constructor(){super(...arguments);c(this,"onSlotInit",new ee);c(this,"onSlotRemove",new ee);c(this,"onSlot1Assignement",new ee);c(this,"onSlot2Assignement",new ee);c(this,"onSlot3Assignement",new ee);c(this,"onSlot4Assignement",new ee);c(this,"onSlot5Assignement",new ee);c(this,"onSlot6Assignement",new ee);c(this,"onSlot7Assignement",new ee);c(this,"onSlot1Serialize",new ee);c(this,"onSlot2Serialize",new ee);c(this,"onSlot3Serialize",new ee);c(this,"onSlot4Serialize",new ee);c(this,"onSlot5Serialize",new ee);c(this,"onSlot6Serialize",new ee);c(this,"onSlot7Serialize",new ee)}getNextFreeSlotNumber(){for(let t=1;t<=ls.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new Hg(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(k=>k.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=ft.serializedGetNumericalValueByKey(s,"top"),l=ft.serializedGetNumericalValueByKey(s,"left");const h=ft.serializedGetStringValueByKey(s,"color");let u=ft.serializedGetNumericalValueByKey(s,"width"),d=ft.serializedGetNumericalValueByKey(s,"height");const p=ft.serializedSegmentsHasExact(s,"avg"),b=ft.serializedSegmentsHasExact(s,"min"),w=ft.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let $;if(a==="point"){if(o===void 0||l===void 0)return;$=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||u===void 0||d===void 0)return;u<0&&(u=0),u+l>this.parent.width-1&&(u=this.parent.width-l-1),d<0&&(d=0),d+o>this.parent.height-1&&(d=this.parent.height-o-1),$=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,u+l,d+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,u+l,d+o,h,!1)}if($!==void 0){if($ instanceof $r?p&&$.graph.setAvgActivation(!0):$ instanceof Rr&&(p&&$.graph.setAvgActivation(!0),b&&$.graph.setMinActivation(!0),w&&$.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const k=this.getNextFreeSlotNumber();k!==void 0&&this.assignSlot(k,$)}else i!==void 0&&this.assignSlot(i,$);return $}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(ls,"MAX_SLOTS",7),ls),Bg=class extends kt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},Vg=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",1);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},au={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Gg=class extends kt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new ee);c(this,"callbacksPlay",new ee);c(this,"callbacksPause",new ee);c(this,"callbacksStop",new ee);c(this,"callbacksEnd",new ee);c(this,"callbacksChangeFrame",new ee);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Vg(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return au[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),_e(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);console.log(e),this.setRelativeTime(e.relative)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(l=>l.relative<e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Yg=class extends kt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new ee)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},wa=class{},Ot,qg=(Ot=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(Ot.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Ot.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Ot.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Ot.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Ot.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Ot.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Ot.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Ot.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(Ot,"CLASS_BASE","thermalImageRoot"),c(Ot,"CLASS_BUILT",Ot.CLASS_BASE+"__built"),c(Ot,"CLASS_HYDRATED",Ot.CLASS_BASE+"__mounted"),c(Ot,"CLASS_HOVER",Ot.CLASS_BASE+"__hover"),Ot),Xg=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new ee),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},Kg=class extends wa{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Xg(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new qg(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),u=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[u]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},xa=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){var r,e;this._mounted&&((r=this.instance.dom)==null?void 0:r.root)!==null&&(this._mounted=!1,(e=this.instance.dom)==null||e.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Br=class Lo{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Lo.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Lo.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Jg=class extends xa{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=Br.createVisibleLayer(),this._url&&(this.image=Br.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Zg=class extends xa{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Br.createCanvasContainer(),this.canvas=Br.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof $r?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,u)=>{const p=new OffscreenCanvas(a,o).getContext("2d"),b=n-s,w=u.map(O=>({id:O[1],type:O[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let O=0;O<a;O++)for(let R=0;R<o;R++){const Y=O+R*a,F=l[Y];let re=F;re<s&&(re=s),re>n&&(re=n);const A=(re-s)/b,I=Math.round(255*A),T=h[I];p.fillStyle=T,p.fillRect(O,R,1,1);const j=(M,z,D,q,oe,S)=>{const V=D+oe/2,he=q+S/2,ie=(M-V)/(oe/2),Le=(z-he)/(S/2);return ie*ie+Le*Le<=1};u.forEach((M,z)=>{const D=w[z],[q,oe,S,V,he,ie]=M;q==="point"?O===V&&R===S&&(D.avg.value=F):q==="rectangle"?O>=V&&O<V+he&&R>=S&&R<S+ie&&(F<D.min.value&&(D.min.value=F),F>D.max.value&&(D.max.value=F),D.avg.count=D.avg.count+1,D.avg.sum=D.avg.sum+F):q==="ellipsis"&&j(O,R,V,S,a,o)&&(F<D.min.value&&(D.min.value=F),F>D.max.value&&(D.max.value=F),D.avg.count=D.avg.count+1,D.avg.sum=D.avg.sum+F)})}const $=w.map(O=>({id:O.id,min:O.min.value!==1/0?O.min.value:void 0,max:O.max.value!==-1/0?O.max.value:void 0,avg:O.type==="point"?O.avg.value:O.avg.sum/O.avg.count})),k=p.getImageData(0,0,a,o);return{image:await createImageBitmap(k),stats:$}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Qg=class extends xa{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Br.createCursorLayerRoot(),this.center=Br.createCursorLayerCenter(),this.axisX=Br.createCursorLayerX(),this.axisY=Br.createCursorLayerY(),this.label=Br.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},em=class extends xa{constructor(e){super(e);c(this,"container");this.container=Br.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},ou=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Oi=class extends ou{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=an.fromService(t,i,s,n);return t.files.addFile(a),a}},St,lu=(St=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new ee)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=St.FONT_SIZE_NORMAL,s="normal",n=St.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=St.FONT_SIZE_NORMAL,i.style.fontFamily=St.FONT_FAMILY,i.style.color=St.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){$g.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const u=e.clientWidth,d=60,b=u/(d+40),w=document.createElement("div");w.style.width="100%",w.style.position="relative",w.style.paddingLeft=d/2+"px",w.style.paddingRight=d/2+"px",w.style.boxSizing="border-box";const $=document.createElement("div");$.style.width="100%",$.style.position="relative",$.style.backgroundColor=o,$.style.height="30px";const k=i-t,H=s-t,O=n-t,R=H/k*100,Y=O/k*100,F=document.createElement("div");F.style.position="absolute",F.style.backgroundImage=a,F.style.height="100%",F.style.top="0px",F.style.left=R+"%",F.style.width=Y-R+"%",$.appendChild(F),w.appendChild($);const re=document.createElement("div");re.style.width="100%",re.style.height="40px",re.style.position="relative";const x=(T,j=!1,M,z)=>{const D=T/k*100,q=document.createElement("div");q.style.position="absolute",q.style.top="0px",q.style.left=`calc( ${D}% - ${d/2}px )`,q.style.width=d+"px",q.style.textAlign="center",q.style.lineHeight="0px";const oe=document.createElement("div"),S=document.createElement("div"),V=document.createElement("div"),he=7,ie=he+"px";oe.innerHTML=(t+T).toFixed(2)+" °C",oe.style.display="inline-block",oe.style.fontSize=St.FONT_SIZE_SMALL,oe.style.lineHeight="1em",oe.style.padding="3px",oe.style.position="relative",S.style.width="100%",S.style.height=ie,S.style.textAlign="center",S.style.position="relative",S.style.lineHeight="0px",V.style.content="",V.style.display="inline-block",j?(V.style.width=he*2+"px",V.style.height=he*2+"px",V.style.rotate="45deg",V.style.backgroundColor=z,oe.style.backgroundColor=z,oe.style.zIndex="99",oe.style.color=M):(V.style.width="1px",V.style.height=ie,V.style.backgroundColor=M),S.appendChild(V),q.appendChild(S),q.appendChild(oe),re.appendChild(q)};if(h){const T=document.createElement("div");T.style.position="absolute",T.style.border=`2px solid ${l}`,T.style.height="100%",T.style.boxSizing="border-box";const j=(h.from-t)/k*100,M=(h.to-t)/k*100-j;T.style.left=j+"%",T.style.width=M+"%",$.appendChild(T),x(h.from-t,!0,"white",o),x(h.to-t,!0,"white",o)}const A=k/b;let I=0;for(;I<=k;)x(I,!1,l,"transparent"),I=I+A;return x(H,!0,"white",l),x(O,!0,"white",l),w.appendChild(re),w}},c(St,"FONT_SIZE_NORMAL","16px"),c(St,"FONT_SIZE_SMALL","12px"),c(St,"COLOR_BASE","black"),c(St,"COLOR_GRAY","gray"),c(St,"COLOR_LIGHT","lightgray"),c(St,"WIDTH","1600px"),c(St,"FONT_FAMILY","sans-serif"),c(St,"GAP_BASE","10px"),c(St,"GAP_SMALL","5px"),c(St,"DEBUG",!1),St),jt,tm=(jt=class extends lu{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...jt.DEFAULT_PARAMS,...t,fileName:i}}onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i);s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),n.service.loadFile(this.file.thermalUrl).then(async o=>{if(o instanceof Oi){this.localInstance=await o.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){const h=this.file.group.registry.minmax.value.min,u=this.file.group.registry.minmax.value.max,d=h!==this.file.meta.current.min||u!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,u,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",d)),this.localInstance.mountToDom(this.container);const p=this.localInstance;if(p.dom&&p.dom.visibleLayer&&(p.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const b=document.createElement("table");b.style.width="100%",b.style.borderCollapse="collapse";const w=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach($=>{const k=this.createElementWithText("th",$,jt.FONT_SIZE_SMALL,void 0,jt.COLOR_GRAY);k.style.padding=jt.GAP_SMALL+"px",k.style.textAlign="left",w.appendChild(k)}),b.appendChild(w),this.container.appendChild(b),this.file.slots.forEveryExistingSlot(($,k)=>{var O;const H=(O=this.localInstance)==null?void 0:O.slots.createFromSerialized($.serialized,k);if(H){const R=document.createElement("tr"),Y=this.createElementWithText("td",$.analysis.name,jt.FONT_SIZE_SMALL,void 0,$.analysis.initialColor);Y.style.borderTop=`1px solid ${jt.COLOR_LIGHT}`,Y.style.padding=`${jt.GAP_SMALL}px 0px ${jt.GAP_SMALL} 0px`,R.appendChild(Y);const F=(re,x)=>{const A=this.createElementWithText("td",x?x.toFixed(3)+" °C":"",jt.FONT_SIZE_SMALL,void 0);A.style.borderTop=`1px solid ${jt.COLOR_LIGHT}`,A.style.paddingTop=`${jt.GAP_SMALL}px`,A.style.paddingBottom=`${jt.GAP_SMALL}px`,R.appendChild(A)};$.analysis instanceof Rr?(F($.analysis.initialColor,H.avg),F($.analysis.initialColor,H.min),F($.analysis.initialColor,H.max)):$.analysis instanceof $r&&(F($.analysis.initialColor,H.avg),F($.analysis.initialColor),F($.analysis.initialColor)),b.appendChild(R)}})}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},1e3)}}})}},c(jt,"DEFAULT_PARAMS",{fileName:"sth",width:1200,showAnalysis:!0,backgroundColor:"white"}),jt),an=class hu extends Kg{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new ba(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new tm(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Zg(this),visibleLayer:new Jg(this,this.visibleUrl),cursorLayer:new Qg(this),listenerLayer:new em(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new Bg(this,void 0),this.timeline=new Gg(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Yg(this,!1),this.analysis=new jg(this,[]),this.analysisData=new Wg(this),this.slots=new nu(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new hu(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},rm=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof Rr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof Rr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof Rr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof Rr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:st.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof Rr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=nn({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=Jc(s)(i);Zc(s)(n)}},Je,im=(Je=class extends lu{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=Je.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,Je.FONT_SIZE_SMALL,"normal",Je.COLOR_BASE);l.style.paddingTop=Je.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,Je.FONT_SIZE_SMALL,void 0,Je.COLOR_GRAY);s.style.paddingTop=Je.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${st.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,Je.FONT_SIZE_SMALL,void 0,Je.COLOR_GRAY);return n.style.paddingTop=Je.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=Je.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${st.human(t.timeline.currentStep.absolute)}`,Je.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(u=>u.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const u=document.createElement("tr");["","AVG","MIN","MAX"].forEach(d=>{const p=this.createElementWithText("th",d,Je.FONT_SIZE_SMALL,void 0,Je.COLOR_GRAY);p.style.padding=Je.GAP_SMALL+"px",p.style.textAlign="left",u.appendChild(p)}),h.appendChild(u),a.appendChild(h),l.slots.forEveryExistingSlot((d,p)=>{const b=t.slots.createFromSerialized(d.serialized,p);if(b){const w=document.createElement("tr"),$=this.createElementWithText("td",d.analysis.name,Je.FONT_SIZE_SMALL,void 0,d.analysis.initialColor);$.style.borderTop=`1px solid ${Je.COLOR_LIGHT}`,$.style.padding=`${Je.GAP_SMALL}px 0px ${Je.GAP_SMALL} 0px`,w.appendChild($);const k=(H,O)=>{const R=this.createElementWithText("td",O?O.toFixed(3)+" °C":"",Je.FONT_SIZE_SMALL,void 0);R.style.borderTop=`1px solid ${Je.COLOR_LIGHT}`,R.style.paddingTop=`${Je.GAP_SMALL}px`,R.style.paddingBottom=`${Je.GAP_SMALL}px`,w.appendChild(R)};d.analysis instanceof Rr?(k(d.analysis.initialColor,b.avg),k(d.analysis.initialColor,b.min),k(d.analysis.initialColor,b.max)):d.analysis instanceof $r&&(k(d.analysis.initialColor,b.avg),k(d.analysis.initialColor),k(d.analysis.initialColor)),h.appendChild(w)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(u=>u.thermalUrl);let l;o.forEach(u=>{l=n.batch.request(u,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",u=>{const d=100/t.columns;u.forEach(p=>{p instanceof an&&this.buildInstance(p,d,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...Je.DEFAULT_PROPS,fileName:i}:{...Je.DEFAULT_PROPS,...t,fileName:i}}},c(Je,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),Je),Pi,sm=(Pi=class extends kt{constructor(){super(...arguments);c(this,"onSlotSync",new ee);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){if(i===1)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(Pi.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(Pi.LISTENER_KEY),n.delete(Pi.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const u=(a=n.slots.getSlot(l))==null?void 0:a.serialized,d=h.serialized;if(u!==d)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(d);else{const p=n.slots.createFromSerialized(d,l);p==null||p.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new rm(this)),this._csv}get png(){return this._png||(this._png=new im(this)),this._png}},c(Pi,"LISTENER_KEY","__analysis__sync"),Pi),nm=class extends kt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof an?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},am=class extends eu{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},om=class extends kt{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new ee);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new ee);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new ee);c(this,"_duration",0);c(this,"onDurationChanged",new ee);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof an);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},lm=class extends wa{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new am(this,void 0));c(this,"files",new nm(this,[]));c(this,"cursorPosition",new Cg(this,void 0));c(this,"analysisSync",new sm(this,!1));c(this,"_playback");c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});c(this,"filters",new ba(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get tool(){return this.registry.manager.tool}get playback(){return this._playback||(this._playback=new om(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}getInstances(){return this.files.value}startBatch(e){return this.registry.batch.getBatchById(e)}},hi=class cu extends ou{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new cu(e.url,e.code,e.message)}},uu=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},hm=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(I,T)=>{const j=I.getBigInt64(T,!0),M=62135596800000n,z=10000n,D=24n*60n*60n*1000n*z,q=0x4000000000000000n,oe=0x8000000000000000n;let V=j&0x3fffffffffffffffn;j&oe&&(V>q-D&&(V-=q),V<0&&(V+=D));const ie=V/z-M;return Number(ie)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,u=l+h,d=r.slice(25),p=d.byteLength/u,b=I=>{const T=I*u,j=T+u,M=d.slice(T,j),z=new DataView(M),D=z.getFloat32(8,!0),q=z.getFloat32(12,!0),oe=n(z,0),S=z.getFloat32(24,!0),V=z.getFloat32(28,!0);return{timestamp:oe,min:D,max:q,emissivity:S,reflectedKelvins:V}},w=[];for(let I=0;I<p;I++){const T=b(I);w.push(T)}const $={emissivity:0,reflectedKelvins:0};let k=1/0,H=-1/0;const O=[];w.forEach(I=>{$.emissivity=$.emissivity+I.emissivity,$.reflectedKelvins=$.reflectedKelvins+I.reflectedKelvins,I.min<k&&(k=I.min),I.max>H&&(H=I.max),O.push(I.timestamp)});const R=O[0],Y=[];O.forEach((I,T)=>{const j=O[T+1];let M=0;j===void 0&&(M=0),M=j-I;const z=I-R;Y.push({absolute:I,relative:z,offset:isNaN(M)?0:M,index:T})});const F=w[w.length-1].timestamp-w[0].timestamp,re=F/p,x=1e3/re,A=w[0].timestamp;return{width:t,height:i,timestamp:A,bytesize:s,frameCount:p,duration:F,frameInterval:re,fps:x,timeline:Y,min:k,max:H,averageEmissivity:$.emissivity/w.length,averageReflectedKelvins:$.reflectedKelvins/w.length}},cm=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,u=r.slice(25),d=e*h,p=d+h;return{array:u.slice(d,p),dataType:i}},um=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let u=i&0x3fffffffffffffffn;i&l&&(u>o-a&&(u-=o),u<0&&(u+=a));const p=u/n-s,b=Number(p),w=t.getFloat32(8,!0),$=t.getFloat32(12,!0),k=t.getFloat32(24,!0),H=t.getFloat32(28,!0),O=r.slice(57);let R=[];if(e===0){const Y=new Uint16Array(O),F=Math.abs(w-$),re=65535;Y.forEach(x=>{const A=x/re;R.push(w+F*A)})}else e===1&&(R=Array.from(new Float32Array(O)));return{timestamp:b,min:w,max:$,emissivity:k,reflectedKelvins:H,pixels:R}},dm=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(H,O)=>{const R=H.getBigInt64(O,!0),Y=62135596800000n,F=10000n,re=24n*60n*60n*1000n*F,x=0x4000000000000000n,A=0x8000000000000000n;let T=R&0x3fffffffffffffffn;R&A&&(T>x-re&&(T-=x),T<0&&(T+=re));const M=T/F-Y;return Number(M)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,u=s*n*l,d=h+u,p=r.slice(25),b=p.byteLength/d,w={},$=H=>{const O=H*d,R=O+d,Y=p.slice(O,R),F=new DataView(Y),re=a(F,0),x=F.getFloat32(8,!0),I=F.getFloat32(12,!0)-x,j=57+t*l*s+e*l;let M=0;if(o===1)M=F.getFloat32(j,!0);else if(o===0){const q=F.getInt16(j,!0)/65535;M=x+I*q}return{timestamp:re,temperature:M}};let k=0;for(let H=0;H<b;H++){const O=$(H);k===0&&(k=O.timestamp),w[O.timestamp-k]=O.temperature}return w},pm=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(R,Y)=>{const F=R.getBigInt64(Y,!0),re=62135596800000n,x=10000n,A=24n*60n*60n*1000n*x,I=0x4000000000000000n,T=0x8000000000000000n;let M=F&0x3fffffffffffffffn;F&T&&(M>I-A&&(M-=I),M<0&&(M+=A));const D=M/x-re;return Number(D)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,p=a*o*u,b=d+p,w=r.slice(25),$=w.byteLength/b,k={},H=R=>{const Y=R*b,F=Y+b,re=w.slice(Y,F),x=new DataView(re),A=l(x,0),I=x.getFloat32(8,!0),j=x.getFloat32(12,!0)-I,M=57,z=e,D=e+i,q=t,oe=t+s;let S=1/0,V=-1/0,he=0,ie=0;for(let Ve=q;Ve<=oe;Ve++){const rt=Ve*a;for(let nt=z;nt<=D;nt++){const ne=M+(rt+nt)*u;let ce=NaN;if(h===1)ce=x.getFloat32(ne,!0);else{const Ze=x.getInt16(ne,!0)/65535;ce=I+j*Ze}ce<S&&(S=ce),ce>V&&(V=ce),ie+=ce,he++}}const Le={min:S,max:V,avg:ie/he,count:he};return{timestamp:A,result:Le}};let O=0;for(let R=0;R<$;R++){const Y=H(R);O===0&&(O=Y.timestamp),k[Y.timestamp-O]=Y.result}return k},fm=async r=>{let e=[];const t=async k=>{const H=new DataView(k.slice(0,25)),O=H.getUint8(15),R=H.getUint16(17,!0),Y=H.getUint16(19,!0),F=O===1?4:2,re=57,x=R*Y*F,A=re+x,I=k.slice(25),T=I.byteLength/A;let j=[];for(let M=0;M<T;M++){const D=M*A+57,q=D+x,oe=I.slice(D,q);O===0||O===1&&(j=j.concat(Array.from(new Float32Array(oe))))}return j};(await Promise.all(r.map(k=>t(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,H)=>k-H);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,l=a/o,h=[];let u=[...e];for(let k=0;k<o;k++){const H=s+l*k,O=H+l,R=u.findIndex(A=>A>O),F=u.slice(0,R-1).length,re=F/e.length*100,x={from:H,to:O,count:F,percentage:re};h.push(x),u=u.slice(R)}const d=[...h].sort((k,H)=>k.percentage-H.percentage),p=d[0].percentage,b=d[d.length-1].percentage,w=Math.abs(p-b);return h.map(k=>({...k,height:k.percentage/w*100}))},gm=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},mm=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(Y,F)=>{const re=Y.getBigInt64(F,!0),x=62135596800000n,A=10000n,I=24n*60n*60n*1000n*A,T=0x4000000000000000n,j=0x8000000000000000n;let z=re&0x3fffffffffffffffn;re&j&&(z>T-I&&(z-=T),z<0&&(z+=I));const q=z/A-x;return Number(q)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,p=a*o*u,b=d+p,w=r.slice(25),$=w.byteLength/b,k={},H=(Y,F)=>{const re=e+i/2,x=t+s/2,A=(Y-re)/(i/2),I=(F-x)/(s/2);return A*A+I*I<=1},O=Y=>{const F=Y*b,re=F+b,x=w.slice(F,re),A=new DataView(x),I=l(A,0),T=A.getFloat32(8,!0),M=A.getFloat32(12,!0)-T,z=57,D=e,q=e+i,oe=t,S=t+s;let V=1/0,he=-1/0,ie=0,Le=0;for(let rt=oe;rt<=S;rt++){const nt=rt*a;for(let ne=D;ne<=q;ne++)if(H(ne,rt)){const ce=z+(nt+ne)*u;let Ae=NaN;if(h===1)Ae=A.getFloat32(ce,!0);else{const je=A.getInt16(ce,!0)/65535;Ae=T+M*je}Ae<V&&(V=Ae),Ae>he&&(he=Ae),Le+=Ae,ie++}}const Ve={min:V,max:he,avg:Le/ie,count:ie};return{timestamp:I,result:Ve}};let R=0;for(let Y=0;Y<$;Y++){const F=O(Y);R===0&&(R=F.timestamp),k[F.timestamp-R]=F.result}return k},ym=[{extension:"lrc",minme:"application/octet-stream"}],vm={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:ym,is:gm,baseInfo:hm,getFrameSubset:cm,frameData:um,registryHistogram:fm,pointAnalysisData:dm,rectAnalysisData:pm,ellipsisAnalysisData:mm},du=Object.freeze(vm),bm={LrcParser:du},pu=Object.values(bm),fu=(r,e)=>{const t=pu.find(i=>i.is(r,e));if(t===void 0)throw new uu(2,e,`No parser found for '${e}'.`);return t},gu=pu.map(r=>r.extensions),wm=gu.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),xm=class mu{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new mu(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new hi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=fu(i,this.thermalUrl);return this.pocessTheService(new Oi(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof uu)return this.pocessTheService(hi.fromError(s));throw s}}pocessTheService(e){return e}},Sm=class yu{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new ee);c(this,"onMouseLeave",new ee);c(this,"onDrop",new ee);c(this,"onProcessingEnd",new ee);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new yu(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=wm,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},$m=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new il(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=fu(e,r.name);return new Oi(this,e,t,r.name)}catch(e){return new hi(r.name,3,e.message)}}handleDropzone(r){return Sm.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=xm.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},km=class extends kt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},Pm=class extends kt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},Xh=class Do{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new ee);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Do(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Do(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof Oi?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},_m=class{constructor(r){c(this,"onBatchComplete",new ee);c(this,"set",new Set);this.registry=r}get size(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=Xh.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=Xh.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.size===0&&this.registry.loading.markAsLoaded()}},Cm=class extends kt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},Om=class extends kt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new lm(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Am=class extends kt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((b,w)=>{const $=w.reduce((k,H)=>[...k,...H],[]);return[...b,...$]},[]).sort((b,w)=>b-w);const h=n/a;let u=i+h;const d=new Map;let p=0;for(;u!==!1;){const b=l.findIndex(k=>k>u),w=l.slice(0,b).length;d.set(u-h/2,w),p+=w,l=l.slice(b);const $=u+h;u=$<s?$:!1}return{result:d,resultCount:p}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(du.registryHistogram,[t]);this.value=i}},Em=class extends kt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},Lm=class extends eu{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Dm=class extends wa{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new Om(this,[]));c(this,"_batch");c(this,"onProcessingStart",new ee);c(this,"onProcessingEnd",new ee);c(this,"opacity",new Cm(this,1));c(this,"minmax",new Lm(this,void 0));c(this,"loading",new Em(this,!1));c(this,"range",new Og(this,void 0));c(this,"histogram",new Am(this,[]));c(this,"palette");c(this,"filters",new ba(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof Oi?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset(),this.loading.markAsLoading();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Oi&&await s.createInstance(i),this.loading.markAsLoaded(),this.postLoadedProcessing()}get batch(){return this._batch||(this._batch=new _m(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},Sa=class{constructor(r){c(this,"active",!1);this.manager=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},rl=class extends Sa{},Rm=class extends rl{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=nu.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Tm=class extends rl{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Mm=class extends rl{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},Im=class extends Sa{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},vu=class extends Sa{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Um=[vu,Mm,Tm,Rm,Im],zm=r=>{const e=Um.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},Fm=class extends kt{constructor(e,t){super(e,t);c(this,"_tools",zm(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof Sa?this.value=e:this.value=this.tools[e]}},il=class extends wa{constructor(e,t){super();c(this,"id");c(this,"service",new $m(this));c(this,"registries",{});c(this,"palette",new Rg(this,"jet"));c(this,"smooth",new Pm(this,!1));c(this,"graphSmooth",new km(this,!1));c(this,"tool",new Fm(this,new vu(this)));c(this,"pool");c(this,"filters",new ba(this));this.pool=e||_g.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Dm(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}},jm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,cr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jm(e,t,s),s};const Kh=["ready","select"],Wm={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Yt=class extends fr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new ee,this.left=0,this.top=0,this.w=0,this.h=0}render(){return m`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Jp(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(Kh,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Wm[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!Kh.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await Ih({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(Ih).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Yt.styles=me`
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
  `;cr([g({type:String,reflect:!0})],Yt.prototype,"type",2);cr([g({type:Array})],Yt.prototype,"events",2);cr([g({type:Object,hasChanged:()=>!0})],Yt.prototype,"options",2);cr([g({type:Array})],Yt.prototype,"cols",2);cr([g({type:Array})],Yt.prototype,"rows",2);cr([g({type:String})],Yt.prototype,"data",2);cr([g({type:Object})],Yt.prototype,"view",2);cr([g({type:Array})],Yt.prototype,"selection",2);cr([g({type:Object})],Yt.prototype,"_data",2);cr([g({type:Number,reflect:!0})],Yt.prototype,"left",2);cr([g({type:Number,reflect:!0})],Yt.prototype,"top",2);cr([g({type:Number,reflect:!0})],Yt.prototype,"w",2);cr([g({type:Number,reflect:!0})],Yt.prototype,"h",2);Yt=cr([te("thermal-chart")],Yt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=()=>new Hm;class Hm{}const xo=new WeakMap,we=ya(class extends ap{render(r){return L}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),L}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=xo.get(e);t===void 0&&(t=new WeakMap,xo.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=xo.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var P=(r=>(r.loading="loading",r.next="next",r.prev="prev",r.back="back",r.close="close",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.numfiles="numfiles",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.showingfolder="showingfolder",r.showingfolders="showingfolders",r.and="and",r.or="or",r.doyouwanttoadd="doyouwanttoadd",r.youmayalsoadd="youmayalsoadd",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.groupped="groupped",r.bydays="bydays",r.byhours="byhours",r.byweeks="byweeks",r.bymonths="bymonths",r.byyears="byyears",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.reload="reload",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r.remotefoldersbrowser="remotefoldersbrowser",r))(P||{});const Bm=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],Jh=Object.fromEntries(Bm.map(r=>[r.code,r]));var Vm=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,bu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vm(e,t,s),s};let Ws=class extends fr{constructor(){super(),this.dialogRef=ge(),this.closeButtonRef=ge(),this.invokerRef=ge()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return m`
            <slot name="invoker" ${we(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${we(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${we(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Ws.shadowRootOptions={...fr.shadowRootOptions,mode:"open"};Ws.styles=me`

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

        
    
    `;bu([g({type:String,reflect:!0})],Ws.prototype,"label",2);Ws=bu([te("thermal-dialog")],Ws);let Un;const Ym=new Uint8Array(16);function qm(){if(!Un&&(Un=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Un))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Un(Ym)}const Ft=[];for(let r=0;r<256;++r)Ft.push((r+256).toString(16).slice(1));function Xm(r,e=0){return Ft[r[e+0]]+Ft[r[e+1]]+Ft[r[e+2]]+Ft[r[e+3]]+"-"+Ft[r[e+4]]+Ft[r[e+5]]+"-"+Ft[r[e+6]]+Ft[r[e+7]]+"-"+Ft[r[e+8]]+Ft[r[e+9]]+"-"+Ft[r[e+10]]+Ft[r[e+11]]+Ft[r[e+12]]+Ft[r[e+13]]+Ft[r[e+14]]+Ft[r[e+15]]}const Km=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Zh={randomUUID:Km};function Jm(r,e,t){if(Zh.randomUUID&&!e&&!r)return Zh.randomUUID();r=r||{};const i=r.random||(r.rng||qm)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Xm(i)}var Zm=Object.defineProperty,Qm=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Zm(e,t,s),s};const Il=class Il extends fr{constructor(){super(...arguments),this.locale=dt.language}get UUID(){return this._UUID===void 0&&(this._UUID=Jm()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),dt.on("languageChanged",e=>{this.locale=e})}};Il.shadowRootOptions={...fr.shadowRootOptions,mode:"open"};let gt=Il;Qm([C()],gt.prototype,"locale");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wu=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qh=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new wu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ey{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ty=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class ec extends ey{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:u}]of this.subscriptions)l.has(h)||(l.add(h),u.dispatchEvent(new wu(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ty(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new ec(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new ec(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Qh(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Qh(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}const xu="tour-context",Su="tour-step",$u="tourable-element";var ry=Object.defineProperty,ku=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&ry(e,t,s),s};class qi extends gt{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}ku([g({type:String})],qi.prototype,"tour");ku([ue({context:$u})],qi.prototype,"tourableElement");var iy=Object.defineProperty,sy=Object.getOwnPropertyDescriptor,$a=(r,e,t,i)=>{for(var s=i>1?void 0:i?sy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&iy(e,t,s),s};let ci=class extends qi{constructor(){super(...arguments),this.tourableElementRef=ge(),this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return m`
            <button class="${this.variant}" ${we(this.tourableElementRef)} part="btn">
                <slot></slot>
            </button>
        `}};ci.VARIANTS=["slate","primary","foreground","background"];ci.shadowRootOptions={...fr.shadowRootOptions,mode:"open"};ci.styles=me`

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
    
    `;$a([g({type:String,converter:{fromAttribute:r=>{if(ci.VARIANTS.includes(r))return r},toAttribute:r=>r},reflect:!1})],ci.prototype,"variant",2);$a([g({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],ci.prototype,"interactive",2);$a([g({type:String})],ci.prototype,"size",2);ci=$a([te("thermal-button")],ci);const Ai=Math.min,oi=Math.max,sa=Math.round,Yr=r=>({x:r,y:r}),ny={left:"right",right:"left",bottom:"top",top:"bottom"},ay={start:"end",end:"start"};function Ro(r,e,t){return oi(r,Ai(e,t))}function bs(r,e){return typeof r=="function"?r(e):r}function ui(r){return r.split("-")[0]}function on(r){return r.split("-")[1]}function Pu(r){return r==="x"?"y":"x"}function sl(r){return r==="y"?"height":"width"}function ln(r){return["top","bottom"].includes(ui(r))?"y":"x"}function nl(r){return Pu(ln(r))}function oy(r,e,t){t===void 0&&(t=!1);const i=on(r),s=nl(r),n=sl(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=na(a)),[a,na(a)]}function ly(r){const e=na(r);return[To(r),e,To(e)]}function To(r){return r.replace(/start|end/g,e=>ay[e])}function hy(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function cy(r,e,t,i){const s=on(r);let n=hy(ui(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(To)))),n}function na(r){return r.replace(/left|right|bottom|top/g,e=>ny[e])}function uy(r){return{top:0,right:0,bottom:0,left:0,...r}}function al(r){return typeof r!="number"?uy(r):{top:r,right:r,bottom:r,left:r}}function us(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function tc(r,e,t){let{reference:i,floating:s}=r;const n=ln(e),a=nl(e),o=sl(a),l=ui(e),h=n==="y",u=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,p=i[o]/2-s[o]/2;let b;switch(l){case"top":b={x:u,y:i.y-s.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:d};break;case"left":b={x:i.x-s.width,y:d};break;default:b={x:i.x,y:i.y}}switch(on(e)){case"start":b[a]-=p*(t&&h?-1:1);break;case"end":b[a]+=p*(t&&h?-1:1);break}return b}const dy=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:u,y:d}=tc(h,i,l),p=i,b={},w=0;for(let $=0;$<o.length;$++){const{name:k,fn:H}=o[$],{x:O,y:R,data:Y,reset:F}=await H({x:u,y:d,initialPlacement:i,placement:p,strategy:s,middlewareData:b,rects:h,platform:a,elements:{reference:r,floating:e}});u=O??u,d=R??d,b={...b,[k]:{...b[k],...Y}},F&&w<=50&&(w++,typeof F=="object"&&(F.placement&&(p=F.placement),F.rects&&(h=F.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):F.rects),{x:u,y:d}=tc(h,p,l)),$=-1)}return{x:u,y:d,placement:p,strategy:s,middlewareData:b}};async function _u(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:b=0}=bs(e,r),w=al(b),k=o[p?d==="floating"?"reference":"floating":d],H=us(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(k)))==null||t?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:u,strategy:l})),O=d==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,R=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),Y=await(n.isElement==null?void 0:n.isElement(R))?await(n.getScale==null?void 0:n.getScale(R))||{x:1,y:1}:{x:1,y:1},F=us(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:O,offsetParent:R,strategy:l}):O);return{top:(H.top-F.top+w.top)/Y.y,bottom:(F.bottom-H.bottom+w.bottom)/Y.y,left:(H.left-F.left+w.left)/Y.x,right:(F.right-H.right+w.right)/Y.x}}const py=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:u=0}=bs(r,e)||{};if(h==null)return{};const d=al(u),p={x:t,y:i},b=nl(s),w=sl(b),$=await a.getDimensions(h),k=b==="y",H=k?"top":"left",O=k?"bottom":"right",R=k?"clientHeight":"clientWidth",Y=n.reference[w]+n.reference[b]-p[b]-n.floating[w],F=p[b]-n.reference[b],re=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let x=re?re[R]:0;(!x||!await(a.isElement==null?void 0:a.isElement(re)))&&(x=o.floating[R]||n.floating[w]);const A=Y/2-F/2,I=x/2-$[w]/2-1,T=Ai(d[H],I),j=Ai(d[O],I),M=T,z=x-$[w]-j,D=x/2-$[w]/2+A,q=Ro(M,D,z),oe=!l.arrow&&on(s)!=null&&D!==q&&n.reference[w]/2-(D<M?T:j)-$[w]/2<0,S=oe?D<M?D-M:D-z:0;return{[b]:p[b]+S,data:{[b]:q,centerOffset:D-q-S,...oe&&{alignmentOffset:S}},reset:oe}}}),fy=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:$=!0,...k}=bs(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const H=ui(s),O=ui(o)===o,R=await(l.isRTL==null?void 0:l.isRTL(h.floating)),Y=p||(O||!$?[na(o)]:ly(o));!p&&w!=="none"&&Y.push(...cy(o,$,w,R));const F=[o,...Y],re=await _u(e,k),x=[];let A=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&x.push(re[H]),d){const M=oy(s,a,R);x.push(re[M[0]],re[M[1]])}if(A=[...A,{placement:s,overflows:x}],!x.every(M=>M<=0)){var I,T;const M=(((I=n.flip)==null?void 0:I.index)||0)+1,z=F[M];if(z)return{data:{index:M,overflows:A},reset:{placement:z}};let D=(T=A.filter(q=>q.overflows[0]<=0).sort((q,oe)=>q.overflows[1]-oe.overflows[1])[0])==null?void 0:T.placement;if(!D)switch(b){case"bestFit":{var j;const q=(j=A.map(oe=>[oe.placement,oe.overflows.filter(S=>S>0).reduce((S,V)=>S+V,0)]).sort((oe,S)=>oe[1]-S[1])[0])==null?void 0:j[0];q&&(D=q);break}case"initialPlacement":D=o;break}if(s!==D)return{reset:{placement:D}}}return{}}}};function Cu(r){const e=Ai(...r.map(n=>n.left)),t=Ai(...r.map(n=>n.top)),i=oi(...r.map(n=>n.right)),s=oi(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function gy(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>us(Cu(s)))}const my=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=bs(r,e),u=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),d=gy(u),p=us(Cu(u)),b=al(o);function w(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&h!=null)return d.find(k=>l>k.left-b.left&&l<k.right+b.right&&h>k.top-b.top&&h<k.bottom+b.bottom)||p;if(d.length>=2){if(ln(t)==="y"){const T=d[0],j=d[d.length-1],M=ui(t)==="top",z=T.top,D=j.bottom,q=M?T.left:j.left,oe=M?T.right:j.right,S=oe-q,V=D-z;return{top:z,bottom:D,left:q,right:oe,width:S,height:V,x:q,y:z}}const k=ui(t)==="left",H=oi(...d.map(T=>T.right)),O=Ai(...d.map(T=>T.left)),R=d.filter(T=>k?T.left===O:T.right===H),Y=R[0].top,F=R[R.length-1].bottom,re=O,x=H,A=x-re,I=F-Y;return{top:Y,bottom:F,left:re,right:x,width:A,height:I,x:re,y:Y}}return p}const $=await n.getElementRects({reference:{getBoundingClientRect:w},floating:i.floating,strategy:a});return s.reference.x!==$.reference.x||s.reference.y!==$.reference.y||s.reference.width!==$.reference.width||s.reference.height!==$.reference.height?{reset:{rects:$}}:{}}}};async function yy(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=ui(t),o=on(t),l=ln(t)==="y",h=["left","top"].includes(a)?-1:1,u=n&&l?-1:1,d=bs(e,r);let{mainAxis:p,crossAxis:b,alignmentAxis:w}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return o&&typeof w=="number"&&(b=o==="end"?w*-1:w),l?{x:b*u,y:p*h}:{x:p*h,y:b*u}}const vy=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await yy(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},by=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:k=>{let{x:H,y:O}=k;return{x:H,y:O}}},...l}=bs(r,e),h={x:t,y:i},u=await _u(e,l),d=ln(ui(s)),p=Pu(d);let b=h[p],w=h[d];if(n){const k=p==="y"?"top":"left",H=p==="y"?"bottom":"right",O=b+u[k],R=b-u[H];b=Ro(O,b,R)}if(a){const k=d==="y"?"top":"left",H=d==="y"?"bottom":"right",O=w+u[k],R=w-u[H];w=Ro(O,w,R)}const $=o.fn({...e,[p]:b,[d]:w});return{...$,data:{x:$.x-t,y:$.y-i}}}}};function ka(){return typeof window<"u"}function ws(r){return Ou(r)?(r.nodeName||"").toLowerCase():"#document"}function gr(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function mi(r){var e;return(e=(Ou(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function Ou(r){return ka()?r instanceof Node||r instanceof gr(r).Node:!1}function Tr(r){return ka()?r instanceof Element||r instanceof gr(r).Element:!1}function qr(r){return ka()?r instanceof HTMLElement||r instanceof gr(r).HTMLElement:!1}function rc(r){return!ka()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof gr(r).ShadowRoot}function hn(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Mr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function wy(r){return["table","td","th"].includes(ws(r))}function Pa(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function ol(r){const e=ll(),t=Tr(r)?Mr(r):r;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function xy(r){let e=Ei(r);for(;qr(e)&&!ds(e);){if(ol(e))return e;if(Pa(e))return null;e=Ei(e)}return null}function ll(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ds(r){return["html","body","#document"].includes(ws(r))}function Mr(r){return gr(r).getComputedStyle(r)}function _a(r){return Tr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function Ei(r){if(ws(r)==="html")return r;const e=r.assignedSlot||r.parentNode||rc(r)&&r.host||mi(r);return rc(e)?e.host:e}function Au(r){const e=Ei(r);return ds(e)?r.ownerDocument?r.ownerDocument.body:r.body:qr(e)&&hn(e)?e:Au(e)}function Mo(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Au(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=gr(s);if(n){const o=Io(a);return e.concat(a,a.visualViewport||[],hn(s)?s:[],o&&t?Mo(o):[])}return e.concat(s,Mo(s,[],t))}function Io(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function Eu(r){const e=Mr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=qr(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=sa(t)!==n||sa(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function Lu(r){return Tr(r)?r:r.contextElement}function os(r){const e=Lu(r);if(!qr(e))return Yr(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=Eu(e);let a=(n?sa(t.width):t.width)/i,o=(n?sa(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const Sy=Yr(0);function Du(r){const e=gr(r);return!ll()||!e.visualViewport?Sy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $y(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==gr(r)?!1:e}function Hs(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=Lu(r);let a=Yr(1);e&&(i?Tr(i)&&(a=os(i)):a=os(r));const o=$y(n,t,i)?Du(n):Yr(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,u=s.width/a.x,d=s.height/a.y;if(n){const p=gr(n),b=i&&Tr(i)?gr(i):i;let w=p,$=Io(w);for(;$&&i&&b!==w;){const k=os($),H=$.getBoundingClientRect(),O=Mr($),R=H.left+($.clientLeft+parseFloat(O.paddingLeft))*k.x,Y=H.top+($.clientTop+parseFloat(O.paddingTop))*k.y;l*=k.x,h*=k.y,u*=k.x,d*=k.y,l+=R,h+=Y,w=gr($),$=Io(w)}}return us({width:u,height:d,x:l,y:h})}function hl(r,e){const t=_a(r).scrollLeft;return e?e.left+t:Hs(mi(r)).left+t}function Ru(r,e,t){t===void 0&&(t=!1);const i=r.getBoundingClientRect(),s=i.left+e.scrollLeft-(t?0:hl(r,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function ky(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=mi(i),o=e?Pa(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=Yr(1);const u=Yr(0),d=qr(i);if((d||!d&&!n)&&((ws(i)!=="body"||hn(a))&&(l=_a(i)),qr(i))){const b=Hs(i);h=os(i),u.x=b.x+i.clientLeft,u.y=b.y+i.clientTop}const p=a&&!d&&!n?Ru(a,l,!0):Yr(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+u.x+p.x,y:t.y*h.y-l.scrollTop*h.y+u.y+p.y}}function Py(r){return Array.from(r.getClientRects())}function _y(r){const e=mi(r),t=_a(r),i=r.ownerDocument.body,s=oi(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=oi(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+hl(r);const o=-t.scrollTop;return Mr(i).direction==="rtl"&&(a+=oi(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function Cy(r,e){const t=gr(r),i=mi(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=ll();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function Oy(r,e){const t=Hs(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=qr(r)?os(r):Yr(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function ic(r,e,t){let i;if(e==="viewport")i=Cy(r,t);else if(e==="document")i=_y(mi(r));else if(Tr(e))i=Oy(e,t);else{const s=Du(r);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return us(i)}function Tu(r,e){const t=Ei(r);return t===e||!Tr(t)||ds(t)?!1:Mr(t).position==="fixed"||Tu(t,e)}function Ay(r,e){const t=e.get(r);if(t)return t;let i=Mo(r,[],!1).filter(o=>Tr(o)&&ws(o)!=="body"),s=null;const n=Mr(r).position==="fixed";let a=n?Ei(r):r;for(;Tr(a)&&!ds(a);){const o=Mr(a),l=ol(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||hn(a)&&!l&&Tu(r,a))?i=i.filter(u=>u!==a):s=o,a=Ei(a)}return e.set(r,i),i}function Ey(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?Pa(e)?[]:Ay(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,u)=>{const d=ic(e,u,s);return h.top=oi(d.top,h.top),h.right=Ai(d.right,h.right),h.bottom=Ai(d.bottom,h.bottom),h.left=oi(d.left,h.left),h},ic(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ly(r){const{width:e,height:t}=Eu(r);return{width:e,height:t}}function Dy(r,e,t){const i=qr(e),s=mi(e),n=t==="fixed",a=Hs(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=Yr(0);if(i||!i&&!n)if((ws(e)!=="body"||hn(s))&&(o=_a(e)),i){const p=Hs(e,!0,n,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else s&&(l.x=hl(s));const h=s&&!i&&!n?Ru(s,o):Yr(0),u=a.left+o.scrollLeft-l.x-h.x,d=a.top+o.scrollTop-l.y-h.y;return{x:u,y:d,width:a.width,height:a.height}}function So(r){return Mr(r).position==="static"}function sc(r,e){if(!qr(r)||Mr(r).position==="fixed")return null;if(e)return e(r);let t=r.offsetParent;return mi(r)===t&&(t=t.ownerDocument.body),t}function Mu(r,e){const t=gr(r);if(Pa(r))return t;if(!qr(r)){let s=Ei(r);for(;s&&!ds(s);){if(Tr(s)&&!So(s))return s;s=Ei(s)}return t}let i=sc(r,e);for(;i&&wy(i)&&So(i);)i=sc(i,e);return i&&ds(i)&&So(i)&&!ol(i)?t:i||xy(r)||t}const Ry=async function(r){const e=this.getOffsetParent||Mu,t=this.getDimensions,i=await t(r.floating);return{reference:Dy(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ty(r){return Mr(r).direction==="rtl"}const My={convertOffsetParentRelativeRectToViewportRelativeRect:ky,getDocumentElement:mi,getClippingRect:Ey,getOffsetParent:Mu,getElementRects:Ry,getClientRects:Py,getDimensions:Ly,getScale:os,isElement:Tr,isRTL:Ty},Iu=vy,Iy=by,Uy=fy,zy=py,Fy=my,Uu=(r,e,t)=>{const i=new Map,s={platform:My,...t},n={...s.platform,_c:i};return dy(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=ya(class extends Ko{constructor(r){var e;if(super(r),r.type!==ai.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return _i}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=r=>r??L;var jy=Object.defineProperty,Ny=Object.getOwnPropertyDescriptor,cn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ny(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jy(e,t,s),s};let di=class extends qi{constructor(){super(...arguments),this.dropdownRef=ge(),this.invokerRef=ge(),this.optionsRef=ge(),this.open="close",this.interactive="on"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Uu(this.invokerRef.value,this.optionsRef.value,{middleware:[Iu(2),Uy(),Fy(),Iy()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return m`

            <div class="dropdown" ${we(this.dropdownRef)}>

                <thermal-button 
                    class="${Xt(r)}" 
                    ${we(this.invokerRef)} 
                    @click=${this.toggle.bind(this)} 
                    variant="${fe(this.variant)}" 
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
                <div class="dropdown-options" ${we(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>

            <slot> name="tour"</slot>
        
        `}};di.shadowRootOptions={...fr.shadowRootOptions,mode:"open"};di.styles=me`

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
    
    `;cn([Ti({slot:"option"})],di.prototype,"_options",2);cn([g({type:String,reflect:!0})],di.prototype,"open",2);cn([g({type:String,reflect:!0,attribute:!0}),C()],di.prototype,"interactive",2);cn([C(),g({type:String,reflect:!0,attribute:!0})],di.prototype,"variant",2);di=cn([te("thermal-dropdown")],di);var Wy=Object.defineProperty,Hy=Object.getOwnPropertyDescriptor,Ca=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wy(e,t,s),s};let ps=class extends fr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=ge(),this.contentRef=ge(),this.rulerContentRef=ge()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return m`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${we(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${we(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${we(this.contentRef)}>

                    ${this.collapsed===!1?m`
                        <slot></slot>    
                    `:L}
                
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
            `:L}
        
        `}};ps.styles=me`

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

    `;Ca([C()],ps.prototype,"collapsed",2);Ca([C()],ps.prototype,"lastContentWidth",2);Ca([C()],ps.prototype,"drawerRef",2);ps=Ca([te("thermal-bar")],ps);var By=Object.defineProperty,Vy=Object.getOwnPropertyDescriptor,Or=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&By(e,t,s),s};let nr=class extends gt{constructor(){super(...arguments),this.language=dt.language,this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=ge(),this.contentRef=ge()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),dt.on("languageChanged",()=>{this.language=dt.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,o=n-175,l=a-0,h=this.contentRef.value.offsetHeight,u=4/3;let d=0,p=0;h<o?(console.log("priorita šířky"),d=l,p=d/u):(console.log("priorita výšky"),p=o,d=p*u),this.contentRef.value.setAttribute("style",`width: ${d}px !important; height: ${p}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return m`

        <div class="container ${this.dark?"dark":"normal"}" ${we(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?m`
            <div class="bar">

                <slot name="label">
                    ${this.label?m`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`:L}
                </slot>

                <slot name="bar"></slot>

                <slot name="close"></slot>

                <thermal-dropdown >

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(r=>m`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{dt.changeLanguage(r),this.language=r}}
                            >${Jh[r].flag} ${Jh[r].name}</thermal-button>
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
                `:L}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?m`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${we(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?m`<div class="credits">

                    ${this.recorded?m`<div>
                            <div class="credits-field">${_(P.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:L}

                    ${this.author?m`<div>
                            <div class="credits-field">${_(P.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:L}

                    ${this.license?m`<div>
                            <div class="credits-field">${_(P.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:L}

                </div>`:L}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};nr.styles=me`

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
    
    `;Or([C()],nr.prototype,"language",2);Or([Ti({slot:"bar",flatten:!0})],nr.prototype,"barElements",2);Or([Ti({slot:"pre",flatten:!0})],nr.prototype,"preElements",2);Or([Ti({slot:"content",flatten:!0})],nr.prototype,"contentElements",2);Or([g({type:String,reflect:!0})],nr.prototype,"fullscreen",2);Or([g({type:String,reflect:!0,attribute:!0})],nr.prototype,"showfullscreen",2);Or([g({type:String,reflect:!0,attribute:!0})],nr.prototype,"dark",2);Or([g()],nr.prototype,"author",2);Or([g()],nr.prototype,"recorded",2);Or([g()],nr.prototype,"license",2);Or([g()],nr.prototype,"label",2);nr=Or([te("thermal-app")],nr);var Gy=Object.defineProperty,Yy=Object.getOwnPropertyDescriptor,cl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gy(e,t,s),s};let Bs=class extends fr{render(){return m`

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
        
        `}};Bs.styles=me`
    
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

    `;cl([g({type:String})],Bs.prototype,"label",2);cl([g({type:String})],Bs.prototype,"hint",2);Bs=cl([te("thermal-field")],Bs);var qy=Object.defineProperty,Xy=Object.getOwnPropertyDescriptor,xs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qy(e,t,s),s};let pi=class extends gt{render(){return L}};xs([g({type:String,reflect:!0,attribute:!0})],pi.prototype,"thermal",2);xs([g({type:String,reflect:!0,attribute:!0})],pi.prototype,"visible",2);xs([g({type:String,reflect:!0,attribute:!0})],pi.prototype,"author",2);xs([g({type:String,reflect:!0,attribute:!0})],pi.prototype,"note",2);xs([g({type:String,reflect:!0,attribute:!0})],pi.prototype,"label",2);pi=xs([te("time-entry")],pi);const Ky=new il;window.Thermal={managers:new Map};window.Thermal.managers.set("default",Ky);const Oa=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new il(void 0,e);return window.Thermal.managers.set(r,t),t}},Jy=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class aa extends Ko{constructor(e){if(super(e),this.it=L,e.type!==ai.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===L||e==null)return this._t=void 0,this.it=e;if(e===_i)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}aa.directiveName="unsafeHTML",aa.resultType=1;const Nt=ya(aa),Ul=class Ul{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?L:m`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${_(P.note).toLocaleLowerCase()}</button>
            <div slot="content">${Nt(t)}</div>
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
                        </div>`:L}
                    
                    <file-analysis-table></file-analysis-table>

                </file-mirror>

            </article>
        
        </div>`}};Ul.styles=me`


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

    `;let fs=Ul;const zl=class zl{constructor(e){this.element=e,this.instanceRenderer=new fs(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?m`
                <div class="group-header">
                
                    ${e?m`<h2 class="group-title">${e}</h2>`:L}

                    ${t?m`<p class="group-info">${t}</p>`:L}

                </div>
            `:L}renderGroup(e,t,i,s){const n=this.trimmedString(e.label),a=this.trimmedString(e.info),o={"group-files":!0,[`group-files-${t}`]:!0};return m`

            <section class="${Xt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(n,a)}

                <div class=${Xt(o)}>

                    ${e.files.map(({instance:h,innerHtml:u,label:d,time:p})=>this.instanceRenderer.renderInstance(h,p,s,d,u))}

                </div>

            </section>

        `}};zl.styles=me`


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

    `;let Vs=zl,Zy=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof hi)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?qc(e).getTime():this.grouping==="day"?ea(e).getTime():this.grouping==="week"?li(e).getTime():this.grouping==="month"?ra(e).getTime():this.grouping==="year"?el(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Nc(e).getTime():this.grouping==="day"?Fc(e).getTime():this.grouping==="week"?ia(e).getTime():this.grouping==="month"?ta(e).getTime():this.grouping==="year"?jc(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:_e(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:_e(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+_e(e,"w")+" of "+_e(e,"yyyy"),info:[st.humanDate(li(e).getTime()),st.humanDate(ia(e).getTime())].join(" - ")}:this.grouping==="month"?{label:_e(e,"MMMM yyyy"),info:[st.humanDate(ra(e).getTime()),st.humanDate(ta(e).getTime())].join(" - ")}:this.grouping==="year"?{label:_e(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?st.human(e):this.grouping==="hour"||this.grouping==="day"?_e(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",st.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var Qy=Object.defineProperty,ev=Object.getOwnPropertyDescriptor,ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?ev(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qy(e,t,s),s};let Wt=class extends gt{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=Oa(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new Zy(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof pi))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return m`
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

                `:L}

        `}};Wt.styles=[fs.styles,Vs.styles,me`

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
    
    `];ur([C(),Ti({slot:"entry",flatten:!0})],Wt.prototype,"entries",2);ur([C()],Wt.prototype,"groups",2);ur([C()],Wt.prototype,"instances",2);ur([g()],Wt.prototype,"columns",2);ur([g()],Wt.prototype,"breakpoint",2);ur([g({type:Number,reflect:!0})],Wt.prototype,"width",2);ur([g({type:String,reflect:!0})],Wt.prototype,"grouping",2);ur([g()],Wt.prototype,"name",2);ur([g()],Wt.prototype,"slug",2);ur([C()],Wt.prototype,"scopeSlug",2);ur([g({type:Object})],Wt.prototype,"onInstanceEnter",2);ur([g({type:Object})],Wt.prototype,"onInstanceLeave",2);ur([g({type:Object})],Wt.prototype,"groupRenderer",2);Wt=ur([te("time-group")],Wt);var tv=Object.defineProperty,rv=Object.getOwnPropertyDescriptor,Ss=(r,e,t,i)=>{for(var s=i>1?void 0:i?rv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tv(e,t,s),s};const ul={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let Li=class extends gt{constructor(){super(...arguments),this.tRef=ge(),this.vRef=ge(),this.vunitsRef=ge(),this.haRef=ge(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){const t=this[e],i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?Nt(i):i;return m`
            <div class="field">

                <div class="column column__label">
                    <label for=${e}>
                        ${t}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${we(r)} 
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

                    ${l?m`<label for=${e}>${l}</label>`:L}

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
                        ${Nt(_(P.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?m`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:L}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,"t",_(P.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",_(P.windspeed),m`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${we(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",_(P.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):L}
                </div>
                

            </thermal-app>
        `}};Li.styles=me`

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


    `;Ss([g({type:String,reflect:!0,attribute:!0,converter:ul})],Li.prototype,"t",2);Ss([g({type:String,reflect:!0,attribute:!0,converter:ul})],Li.prototype,"v",2);Ss([g({type:String,reflect:!0,attribute:!0,converter:ul})],Li.prototype,"ha",2);Ss([C()],Li.prototype,"ta",2);Ss([g({type:String,reflect:!0,attribute:!0})],Li.prototype,"vunits",2);Li=Ss([te("apparent-temperature-aat")],Li);var iv=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,nv=(r,e,t,i)=>{for(var s=i>1?void 0:i?sv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&iv(e,t,s),s};let Uo=class extends qi{constructor(){super(...arguments),this.tourableElementRef=ge()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-button slot="invoker" ${we(this.tourableElementRef)}>About</thermal-button>
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
                        <p>version ${Yo}</p>
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
        `}};Uo.styles=me`

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
    
    `;Uo=nv([te("app-info-button")],Uo);const dl="manager-instance",un="manager-palette-context",pl="manager-smooth-context",Aa="manager-graph-function-context",dn="tool-context",pn="tools-context";var av=Object.defineProperty,zu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&av(e,t,s),s};class Ea extends qi{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Gr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=Oa(this.slug,e);this.manager=i,this.tool=this.manager.tool.value,this.tools=this.manager.tool.tools}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&Jy(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t}),this.manager.tool.addListener(this.UUIDManagerListeners,t=>{this.tool=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(Gr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:Gr[e]}}render(){return m`<slot></slot>`}}zu([ue({context:dn})],Ea.prototype,"tool");zu([ue({context:pn})],Ea.prototype,"tools");var ov=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,yi=(r,e,t,i)=>{for(var s=i>1?void 0:i?lv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ov(e,t,s),s};let Xr=class extends Ea{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Gr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};yi([ue({context:dl})],Xr.prototype,"manager",2);yi([g({type:String,reflect:!0,attribute:!0})],Xr.prototype,"slug",2);yi([ue({context:un}),g({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:Gr[r]}),toAttribute:r=>r.key.toString()}})],Xr.prototype,"palette",2);yi([ue({context:pl}),g({type:String,reflect:!0,attribute:!0})],Xr.prototype,"smooth",2);yi([ue({context:Aa}),g({type:String,reflect:!0,attribute:!0})],Xr.prototype,"graphSmooth",2);yi([g({type:Boolean,reflect:!0})],Xr.prototype,"autoclear",2);yi([ue({context:dn})],Xr.prototype,"tool",2);yi([ue({context:pn})],Xr.prototype,"tools",2);Xr=yi([te("manager-provider")],Xr);var hv=Object.defineProperty,cv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&hv(e,t,s),s};class $s extends qi{connectedCallback(){super.connectedCallback(),this.manager}}cv([ye({context:dl,subscribe:!0}),C()],$s.prototype,"manager");const fl="registry-instance",gl="registry-opacity",La="registry-range-from",Da="registry-range-to",Fu="registry-loading",ml="registry-min",yl="registry-max",ju="registry-highlight",Ra="registry-highlight-setter";var uv=Object.defineProperty,Nu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&uv(e,t,s),s};class Ta extends $s{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return m`<slot></slot>`}}Nu([ue({context:ju})],Ta.prototype,"highlight");Nu([ue({context:Ra})],Ta.prototype,"setHighlight");var dv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,Jr=(r,e,t,i)=>{for(var s=i>1?void 0:i?pv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dv(e,t,s),s};let Ir=class extends Ta{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};Jr([g({type:String,reflect:!0,attribute:!0})],Ir.prototype,"slug",2);Jr([ue({context:fl})],Ir.prototype,"registry",2);Jr([ue({context:gl}),g({type:Number,reflect:!0,attribute:!0})],Ir.prototype,"opacity",2);Jr([ue({context:ml}),C()],Ir.prototype,"min",2);Jr([ue({context:yl}),C()],Ir.prototype,"max",2);Jr([ue({context:La}),g({type:Number,reflect:!0,attribute:!0})],Ir.prototype,"from",2);Jr([ue({context:Da}),g({type:Number,reflect:!0,attribute:!0})],Ir.prototype,"to",2);Jr([ue({context:Fu}),g({type:String,reflect:!0,attribute:!0})],Ir.prototype,"loading",2);Jr([g({type:Boolean,reflect:!0})],Ir.prototype,"autoclear",2);Ir=Jr([te("registry-provider")],Ir);var fv=Object.defineProperty,gv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&fv(e,t,s),s};class vr extends $s{connectedCallback(){super.connectedCallback(),this.registry}}gv([ye({context:fl,subscribe:!0})],vr.prototype,"registry");class Wu extends vr{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug)}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return m`<slot></slot>`}}const vl="group-instance";var mv=Object.defineProperty,yv=Object.getOwnPropertyDescriptor,Ma=(r,e,t,i)=>{for(var s=i>1?void 0:i?yv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mv(e,t,s),s};let Gs=class extends Wu{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Ma([g({type:String,attribute:!0,reflect:!0})],Gs.prototype,"slug",2);Ma([ue({context:vl})],Gs.prototype,"group",2);Ma([g({type:Boolean,reflect:!0})],Gs.prototype,"autoclear",2);Gs=Ma([te("group-provider")],Gs);var vv=Object.defineProperty,bv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&vv(e,t,s),s};class Mi extends vr{constructor(){super()}connectedCallback(){super.connectedCallback()}}bv([ye({context:vl,subscribe:!0})],Mi.prototype,"group");const bl="file",Hu="failure",Bu="file-loading",wv="file-loaded",Ia="file-provider-element",Ua="file-ms-context",wl="file-cursor",Vu="file-cursor-setter",fn="playback",xl="duration",za="playing",Sl="playbackSpeed",$l="recording",Gu="mayStop",xv="analysislist",kl="file-markers-context";var Sv=Object.defineProperty,Zt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Sv(e,t,s),s};class Mt extends Mi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new ee,this.onSuccess=new ee,this.onFailure=new ee,this.onInstanceCreated=new ee}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!==void 0&&i.trim().length>0){const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return m`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}Zt([ue({context:bl}),C()],Mt.prototype,"file");Zt([ue({context:Hu}),C()],Mt.prototype,"failure");Zt([ue({context:Bu}),C()],Mt.prototype,"loading");Zt([ue({context:wv})],Mt.prototype,"ready");Zt([ue({context:xl}),C()],Mt.prototype,"duration");Zt([ue({context:fn})],Mt.prototype,"currentFrame");Zt([ue({context:wl})],Mt.prototype,"cursor");Zt([ue({context:Ua})],Mt.prototype,"ms");Zt([ue({context:Sl})],Mt.prototype,"speed");Zt([ue({context:$l})],Mt.prototype,"recording");Zt([ue({context:za})],Mt.prototype,"playing");Zt([ue({context:Gu}),C()],Mt.prototype,"mayStop");Zt([Ti({slot:"mark",flatten:!0})],Mt.prototype,"marksQueriedInternally");Zt([ue({context:kl})],Mt.prototype,"marksProvidedBelow");Zt([ue({context:xv})],Mt.prototype,"analysis");var $v=Object.defineProperty,kv=Object.getOwnPropertyDescriptor,qt=(r,e,t,i)=>{for(var s=i>1?void 0:i?kv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$v(e,t,s),s};let Ht=class extends Mt{constructor(){super(...arguments),this.ms=0,this.providedSelf=this,this.recording=!1,this.playing=!1}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Oi?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof an?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof hi&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};qt([g({type:Number,reflect:!0,attribute:!0}),ue({context:Ua})],Ht.prototype,"ms",2);qt([g({type:Number,reflect:!0,attribute:!0}),ue({context:Sl})],Ht.prototype,"speed",2);qt([ue({context:Ia})],Ht.prototype,"providedSelf",2);qt([g({type:String,reflect:!0,attribute:!0}),ue({context:$l})],Ht.prototype,"recording",2);qt([g({type:String,reflect:!0,attribute:!0}),ue({context:za})],Ht.prototype,"playing",2);qt([g({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Ht.prototype,"batch",2);qt([g({type:String,attribute:!0,reflect:!0})],Ht.prototype,"thermal",2);qt([g({type:String,attribute:!0,reflect:!0})],Ht.prototype,"visible",2);qt([g({type:String,reflect:!0,attribute:!0})],Ht.prototype,"analysis1",2);qt([g({type:String,reflect:!0,attribute:!0})],Ht.prototype,"analysis2",2);qt([g({type:String,reflect:!0,attribute:!0})],Ht.prototype,"analysis3",2);qt([g({type:String,reflect:!0,attribute:!0})],Ht.prototype,"analysis4",2);qt([g({type:String,reflect:!0,attribute:!0})],Ht.prototype,"analysis5",2);qt([g({type:String,reflect:!0,attribute:!0})],Ht.prototype,"analysis6",2);qt([g({type:String,reflect:!0,attribute:!0})],Ht.prototype,"analysis7",2);Ht=qt([te("file-provider")],Ht);var Pv=Object.defineProperty,_v=Object.getOwnPropertyDescriptor,ks=(r,e,t,i)=>{for(var s=i>1?void 0:i?_v(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pv(e,t,s),s};let Di=class extends Mt{constructor(){super(...arguments),this.providedSelf=this,this.container=ge(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof Oi){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof hi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return m`

                    <div class="container">
                        <div ${we(this.container)} class="${Xt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${gu.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return m`
            ${this.ready?m`<slot></slot>`:L}
            <slot name="mark"></slot>
        `}};Di.styles=me`

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
    
    `;ks([ue({context:Ia})],Di.prototype,"providedSelf",2);ks([C()],Di.prototype,"container",2);ks([C()],Di.prototype,"ready",2);ks([C()],Di.prototype,"hover",2);ks([C()],Di.prototype,"listener",2);Di=ks([te("file-dropin")],Di);var Cv=Object.defineProperty,Ov=Object.getOwnPropertyDescriptor,Pl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ov(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cv(e,t,s),s};let Ys=class extends Mi{constructor(){super(...arguments),this.container=ge(),this.hover=!1,this.tourableElementRef=ge()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1})}}render(){const r={dropin:!0,hover:this.hover};return m`

            <div class="container" ${we(this.tourableElementRef)}>
            
                <div ${we(this.container)} class="${Xt(r)}"></div>

            </div>

            <slot name="tour"></slot>
        
        `}};Ys.styles=me`

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
    
    `;Pl([C()],Ys.prototype,"container",2);Pl([C()],Ys.prototype,"hover",2);Ys=Pl([te("group-dropin")],Ys);var Av=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,vi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ev(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Av(e,t,s),s};let Kr=class extends Ea{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Gr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};vi([ue({context:dl})],Kr.prototype,"manager",2);vi([g({type:String})],Kr.prototype,"slug",2);vi([ue({context:un}),g({type:String,converter:{fromAttribute:r=>({key:r,data:Gr[r]}),toAttribute:r=>r.key.toString()}})],Kr.prototype,"palette",2);vi([ue({context:pl}),g({type:String})],Kr.prototype,"smooth",2);vi([ue({context:Aa}),g({type:String})],Kr.prototype,"graphSmooth",2);vi([g({type:Boolean})],Kr.prototype,"autoclear",2);vi([ue({context:dn})],Kr.prototype,"tool",2);vi([ue({context:pn})],Kr.prototype,"tools",2);Kr=vi([te("manager-mirror")],Kr);var Lv=Object.defineProperty,Dv=Object.getOwnPropertyDescriptor,Zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lv(e,t,s),s};let Ur=class extends Ta{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};Zr([g({type:String,reflect:!0,attribute:!0})],Ur.prototype,"slug",2);Zr([ue({context:fl})],Ur.prototype,"registry",2);Zr([ue({context:gl}),g({type:Number,reflect:!0,attribute:!0})],Ur.prototype,"opacity",2);Zr([ue({context:ml}),C()],Ur.prototype,"min",2);Zr([ue({context:yl}),C()],Ur.prototype,"max",2);Zr([ue({context:La}),g({type:Number})],Ur.prototype,"from",2);Zr([ue({context:Da}),g({type:Number})],Ur.prototype,"to",2);Zr([ue({context:Fu}),g({type:String})],Ur.prototype,"loading",2);Zr([g({type:Boolean})],Ur.prototype,"autoclear",2);Ur=Zr([te("registry-mirror")],Ur);var Rv=Object.defineProperty,Tv=Object.getOwnPropertyDescriptor,Fa=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rv(e,t,s),s};let qs=class extends Wu{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Fa([g({type:String})],qs.prototype,"slug",2);Fa([ue({context:vl})],qs.prototype,"group",2);Fa([g({type:Boolean})],qs.prototype,"autoclear",2);qs=Fa([te("group-mirror")],qs);var Mv=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,br=(r,e,t,i)=>{for(var s=i>1?void 0:i?Iv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mv(e,t,s),s};let ar=class extends Mt{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};br([ue({context:Ia})],ar.prototype,"providedSelf",2);br([ue({context:bl}),g()],ar.prototype,"file",2);br([g({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],ar.prototype,"batch",2);br([g({type:String})],ar.prototype,"thermal",2);br([g({type:String})],ar.prototype,"visible",2);br([g({type:String})],ar.prototype,"analysis1",2);br([g({type:String})],ar.prototype,"analysis2",2);br([g({type:String})],ar.prototype,"analysis3",2);br([g({type:String})],ar.prototype,"analysis4",2);br([g({type:String})],ar.prototype,"analysis5",2);br([g({type:String})],ar.prototype,"analysis6",2);br([g({type:String})],ar.prototype,"analysis7",2);ar=br([te("file-mirror")],ar);var Uv=Object.defineProperty,zv=Object.getOwnPropertyDescriptor,Yu=(r,e,t,i)=>{for(var s=i>1?void 0:i?zv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Uv(e,t,s),s};let oa=class extends vr{constructor(){super(...arguments),this.tourableElemtnRef=ge()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return m`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return m`

            <thermal-dropdown variant="foreground" ${we(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Gr).map(([r,e])=>m`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};oa.styles=me`

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

    `;Yu([ye({context:un,subscribe:!0})],oa.prototype,"value",2);oa=Yu([te("registry-palette-dropdown")],oa);var Fv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,qu=(r,e,t,i)=>{for(var s=i>1?void 0:i?jv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fv(e,t,s),s};let la=class extends vr{constructor(){super(...arguments),this.tourableElementRef=ge()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return m`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${_(P.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return m`
            <div class="container" ${we(this.tourableElementRef)}>
                ${Object.entries(Gr).map(([r,e])=>m`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};la.styles=me`

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

    `;qu([ye({context:un,subscribe:!0}),C()],la.prototype,"value",2);la=qu([te("registry-palette-buttons")],la);var Nv=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,Xu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nv(e,t,s),s};let ha=class extends $s{constructor(){super(...arguments),this.tourableElementRef=ge()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`

            <div ${we(this.tourableElementRef)}>

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
        `}};ha.styles=me`
    
        :host {}

    `;Xu([ye({context:pl,subscribe:!0})],ha.prototype,"smooth",2);ha=Xu([te("manager-smooth-switch")],ha);var Hv=Object.defineProperty,Bv=Object.getOwnPropertyDescriptor,Ku=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hv(e,t,s),s};let ca=class extends $s{constructor(){super(...arguments),this.tourableElementRef=ge()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`

            <div ${we(this.tourableElementRef)}>

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
        `}};ca.styles=me`
    
        :host {}

    `;Ku([ye({context:Aa,subscribe:!0})],ca.prototype,"smooth",2);ca=Ku([te("manager-graph-smooth-switch")],ca);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zo extends aa{}zo.directiveName="unsafeSVG",zo.resultType=2;const Ju=ya(zo),ct=r=>({fromAttribute:i=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:i=>i===!0?"true":"false"});var Vv=Object.defineProperty,Gv=Object.getOwnPropertyDescriptor,gn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vv(e,t,s),s};let Vi=class extends $s{constructor(){super(...arguments),this.tourableElementRef=ge(),this.showhint=!0}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.manager.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.manager.tool.selectTool(e)}render(){return this.manager===void 0?L:m`
                <div class="switchers" ${we(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:this.value!==void 0?t.key===this.value.key:!1};return m`
                        
                        <button 
                            class=${Xt(i)} 
                            @click=${()=>{this.manager.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Ju(t.icon)}
                        </button>
                        
                    `})}
                </div>

                ${this.showhint===!0?m` <div class="current">
                        <div class="tool-description">${_(P[this.hint])}</div>
                    </div>`:L}

                <slot name="tour"></slot>
        `}};Vi.styles=me`

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

    `;gn([ye({context:dn,subscribe:!0}),C()],Vi.prototype,"value",2);gn([ye({context:pn,subscribe:!0}),C()],Vi.prototype,"tools",2);gn([C()],Vi.prototype,"hint",2);gn([g({type:String,reflect:!0,converter:ct(!1)})],Vi.prototype,"showhint",2);Vi=gn([te("group-tool-buttons")],Vi);var Yv=Object.defineProperty,qv=Object.getOwnPropertyDescriptor,_l=(r,e,t,i)=>{for(var s=i>1?void 0:i?qv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yv(e,t,s),s};let Xs=class extends Mi{constructor(){super(...arguments),this.tourableElementRef=ge()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?L:m`

            <aside ${we(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return m`
                        
                        <button 
                            class=${Xt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${_(P[e.name])}
                            
                        >
                            ${Ju(e.icon)}
                        </button>
                        
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};Xs.styles=me`

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

    `;_l([ye({context:dn,subscribe:!0}),C()],Xs.prototype,"value",2);_l([ye({context:pn,subscribe:!0}),C()],Xs.prototype,"tools",2);Xs=_l([te("group-tool-bar")],Xs);var Xv=Object.defineProperty,Kv=Object.getOwnPropertyDescriptor,Zu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xv(e,t,s),s};let ua=class extends vr{constructor(){super(...arguments),this.containerRef=ge()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return m`
            <div ${we(this.containerRef)}>
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
        `}};ua.styles=me`

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
    
    `;Zu([ye({context:gl,subscribe:!0})],ua.prototype,"value",2);ua=Zu([te("registry-opacity-slider")],ua);var Jv=Object.defineProperty,Zv=Object.getOwnPropertyDescriptor,Qv=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jv(e,t,s),s};let nc=class extends vr{constructor(){super(...arguments),this.buttonRef=ge()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return m`
            <thermal-button ${we(this.buttonRef)} @click=${this.doAction}>${_(P.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};nc=Qv([te("registry-range-auto-button")],nc);var eb=Object.defineProperty,tb=Object.getOwnPropertyDescriptor,Qu=(r,e,t,i)=>{for(var s=i>1?void 0:i?tb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&eb(e,t,s),s};let Fo=class extends vr{constructor(){super(...arguments),this.buttonRef=ge()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return m`
            <thermal-button 
                ${we(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${_(P.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};Qu([ye({context:Ra,subscribe:!0})],Fo.prototype,"setter",2);Fo=Qu([te("registry-range-full-button")],Fo);var rb=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,mn=(r,e,t,i)=>{for(var s=i>1?void 0:i?ib(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rb(e,t,s),s};let zr=class extends vr{constructor(){super(...arguments),this.ticksRef=ge(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=ge()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.ticksRef.value&&this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/zr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return m`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${we(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${we(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?m`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:L}

                    ${this.ticks.map(t=>m`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(zr.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};zr.TICK_WIDTH=40;zr.TICK_FIXED=2;zr.styles=me`

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


    `;mn([ye({context:ju,subscribe:!0})],zr.prototype,"highlight",2);mn([g({type:String,reflect:!0})],zr.prototype,"placement",2);mn([C()],zr.prototype,"minmax",2);mn([C()],zr.prototype,"ticks",2);zr=mn([te("registry-ticks-bar")],zr);var sb=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,yn=(r,e,t,i)=>{for(var s=i>1?void 0:i?nb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sb(e,t,s),s};let gs=class extends vr{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return m`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return m`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};yn([C()],gs.prototype,"minmax",2);yn([C()],gs.prototype,"range",2);yn([C()],gs.prototype,"opacity",2);yn([C()],gs.prototype,"palette",2);gs=yn([te("registry-log")],gs);(()=>{var r=Object.defineProperty,e=Math.pow,t=(f,v,U)=>v in f?r(f,v,{enumerable:!0,configurable:!0,writable:!0,value:U}):f[v]=U,i=(f,v,U)=>(t(f,typeof v!="symbol"?v+"":v,U),U),s=(f,v)=>` ${v&&v.length>0?v.map(U=>`<link rel="stylesheet" href="${U}" />`).join(""):""} <style> ${f} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",u="data",d="min",p="max",b="step",w="round",$="type",k="theme",H="rtl",O="btt",R="disabled",Y="keyboard-disabled",F="mousewheel-disabled",re="slider-width",x="slider-height",A="slider-radius",I="slider-bg",T="slider-bg-hover",j="slider-bg-fill",M="pointer-width",z="pointer-height",D="pointer-radius",q="pointer-bg",oe="pointer-bg-hover",S="pointer-bg-focus",V="pointer-shadow",he="pointer-shadow-hover",ie="pointer-shadow-focus",Le="pointer-border",Ve="pointer-border-hover",rt="pointer-border-focus",nt="animate-onclick",ne="css-links",ce="vertical",Ae="horizontal",Ue=(f,v,U,E,se)=>{let Se=v-f;return Se===0?U:(E-U)*(se-f)/Se+U},Ze=f=>!isNaN(parseFloat(f))&&isFinite(f),je=(f,v)=>Ze(f)?Number(f):v,wi=(f,v)=>v===0?0:Math.round(f/v)*v,Ui=(f,v=1/0)=>{if(v===1/0)return f;let U=e(10,v);return Math.round(f*U)/U},Qe=f=>f==null?!1:typeof f=="boolean"?f:f.trim().toLowerCase()==="true",pr=(f,v)=>{f.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:v}}))},ii=(f,v)=>{f.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:v}}))},Na=(f,v)=>{f.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:v}}))},Wa=(f,v)=>{f.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:v}}))},Ha=(f,v)=>{if(!v||v.length<=0)return;let U=v.map(se=>Ze(se)?je(se,se):se),E={values:U||[]};E.value=U[0],E.value0=U[0],E.value1=U[0];for(let se=1;se<U.length;se++)E[`value${se+1}`]=U[se];f.dispatchEvent(new CustomEvent("change",{detail:E}))},G=(f,v,U)=>{let E=0,se,Se,Te,ae,le=!1,ze=(Pe,at,Dt,_t,mt,yt)=>{let tr=E;Dt!==void 0&&Pe>Dt&&(Pe=Dt),at!==void 0&&Pe<at&&(Pe=at),E=Pe;let rr=E;return(_t===ce&&yt||_t===Ae&&mt)&&(rr=100-rr),_t===ce?v.style.top=`${rr}%`:v.style.left=`${rr}%`,tr!==E},Ne=Pe=>Pe===v||v.contains(Pe),ve=(Pe,at,Dt,_t)=>{se=Pe,Se=at,Te=Dt,ae=_t},Ke=Pe=>{le=Pe,v.classList.toggle("disabled",le),le?v.setAttribute("aria-disabled","true"):v.hasAttribute("aria-disabled")&&v.removeAttribute("aria-disabled")},Sr=(Pe,at)=>{at==null?v.removeAttribute(Pe):v.setAttribute(Pe,at)},Gt=Pe=>v.getAttribute(Pe),ke=Pe=>{if(!le){switch(Pe.key){case"ArrowLeft":{Pe.preventDefault(),typeof se=="function"&&se(U);break}case"ArrowRight":{Pe.preventDefault(),typeof Se=="function"&&Se(U);break}case"ArrowUp":{Pe.preventDefault(),typeof Te=="function"&&Te(U);break}case"ArrowDown":{Pe.preventDefault(),typeof ae=="function"&&ae(U);break}}Wa(f,Pe)}},Fe=()=>{le||pr(f,v)};return v.className=`pointer pointer-${U}`,v.addEventListener("keydown",ke),v.addEventListener("click",Fe),{$pointer:v,get percent(){return E},get disabled(){return le},set disabled(Pe){Ke(Pe)},updatePosition:ze,isClicked:Ne,setCallbacks:ve,setAttr:Sr,getAttr:Gt,destroy:()=>{v.removeEventListener("keydown",ke),v.removeEventListener("click",Fe),v.remove()}}},Z=f=>{if(f==null)return;if(Array.isArray(f))return f;if(f.trim()==="")return;let v=f.split(","),U=[],E=!0;for(let se=0;se<v.length;se++){let Se=v[se].trim();Se!==""&&(U.push(Se),Ze(Se)||(E=!1))}return E?U.map(se=>Number(se)):U},J=(f,v)=>v?v.findIndex(U=>U===f||U.toString().trim()===f.toString().trim()):-1,De=f=>({updatePosition:(v,U,E,se)=>{if(U.length<=0)return;let Se=U.length===1,Te=U[0],ae=U[U.length-1];v===ce?(f.style.removeProperty("width"),f.style.removeProperty("right"),f.style.removeProperty("left"),Se?f.style.height=`${Te}%`:f.style.height=`${Math.abs(Te-ae)}%`,se?(f.style.bottom="0%",Se?f.style.top="auto":f.style.top=`${Math.min(100-ae,100-Te)}%`):(f.style.bottom="auto",Se?f.style.top="0%":f.style.top=`${Math.min(Te,ae)}%`)):(f.style.removeProperty("height"),f.style.removeProperty("top"),f.style.removeProperty("bottom"),Se?f.style.width=`${Te}%`:f.style.width=`${Math.abs(Te-ae)}%`,E?(f.style.right="0%",Se?f.style.left="auto":f.style.left=`${Math.min(100-ae,100-Te)}%`):(f.style.right="auto",Se?f.style.left="0%":f.style.left=`${Math.min(Te,ae)}%`))}}),be="--animate-onclick",Ge="--width",W="--height",it="--panel-bg-border-radius",Be="--panel-bg",xt="--panel-bg-hover",Lt="--panel-bg-fill",Q="--pointer-width",K="--pointer-height",B="--pointer-border-radius",de="--pointer-bg",Ce="--pointer-bg-hover",He="--pointer-bg-focus",Ut="--pointer-shadow",Bt="--pointer-shadow-hover",Qt="--pointer-shadow-focus",er="--pointer-border",Wr="--pointer-border-hover",xe="--pointer-border-focus",Ee=(f,v,U)=>{let E=new Map;for(let se of f.attributes){let Se=se.nodeName.trim().toLowerCase();if(!v.test(Se))continue;let Te=Se.replace(/\D/g,"").trim(),ae=Te===""||Te==="0"||Te==="1"?0:je(Te,0)-1,le=U&&typeof U=="function"?U(se.value):se.value;E.set(ae,le)}return E},X=f=>{if(!f)return null;let v=f.getAttribute(ne);if(!v)return null;let U=v.split(";"),E=[];for(let se of U)se.trim()!==""&&E.push(se.trim());return E},$e=[[Ge,re,"sliderWidth",null],[W,x,"sliderHeight",null],[it,A,"sliderRadius",null],[Be,I,"sliderBg",null],[xt,T,"sliderBgHover",null],[Lt,j,"sliderBgFill",null],[Q,M,"pointer#Width",/^pointer([0-9]*)-width$/],[K,z,"pointer#Height",/^pointer([0-9]*)-height$/],[B,D,"pointer#Radius",/^pointer([0-9]*)-radius$/],[de,q,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ce,oe,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[He,S,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Ut,V,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Bt,he,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Qt,ie,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[er,Le,"pointer#Border",/^pointer([0-9]*)-border$/],[Wr,Ve,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[xe,rt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Re=(f,v,U)=>{let E=null,se=[],Se=new Map,Te=(ke,Fe=v)=>{let Pe=[...Fe.classList];for(let at of Pe)at.startsWith(ke)&&v.classList.remove(at)},ae=()=>{Te("shape");let ke=v.querySelectorAll(".pointer");for(let Fe of ke)Te("shape",Fe)},le=ke=>{E=ke,Te("theme-"),typeof ke=="string"&&v.classList.add(`theme-${ke}`)},ze=()=>{if(ae(),!(se.length<=0)){v.classList.add("shape",`shape-${se[0]}`);for(let ke=1;ke<se.length;ke++){let Fe=se[ke];if(!Fe)continue;let Pe=v.querySelector(`.pointer-${ke}`);!Pe||Pe.classList.add("shape",`shape-${Fe}`)}}},Ne=(ke,Fe)=>{se[ke]=Fe,ze()},ve=()=>{ae();let ke=Ee(f,/^pointer([0-9]*)-shape$/);if(!(ke.size<=0)){for(let Fe of ke){let Pe=Fe[0];se[Pe]=Fe[1]}ze()}},Ke=(ke,Fe)=>`${ke}-${Fe}`,Sr=(ke,Fe,Pe)=>{let at=U[Pe];if(!at)return;let Dt=Pe===0?v:at.$pointer;if(Fe==null){Se.has(Ke(ke,Pe))&&Se.delete(Ke(ke,Pe)),Dt.style.removeProperty(ke);return}Se.set(Ke(ke,Pe),Fe),Dt.style.setProperty(ke,Fe)},Gt=(ke,Fe)=>Se.get(Ke(ke,Fe));return(()=>{for(let ke of $e){let[Fe,Pe,at,Dt]=ke;if(Dt){let mt=Ee(f,Dt);for(let yt of mt){let tr=yt[0],rr=yt[1];Sr(Fe,rr,tr)}}else{let mt=f.getAttribute(Pe);Sr(Fe,mt,0)}let _t=[];if(at.indexOf("#")===-1)_t.push([at,0]);else{_t.push([at.replace("#",""),0]),_t.push([at.replace("#","0"),0]),_t.push([at.replace("#","1"),0]);for(let mt=1;mt<U.length;mt++)_t.push([at.replace("#",(mt+1).toString()),mt])}for(let mt of _t)try{let yt=mt[0],tr=mt[1];Object.prototype.hasOwnProperty.call(f,yt)||Object.defineProperty(f,yt,{get(){return Gt(Fe,tr)},set:rr=>{Sr(Fe,rr,tr)}})}catch(yt){console.error(yt)}}le(f.getAttribute(k)),ve()})(),{setStyle:Sr,getStyle:Gt,get theme(){return E},set theme(ke){le(ke)},get pointerShapes(){return se},setPointerShape:Ne}},Me="animate-on-click",Xe="range-dragging",Ie=(f,v,U,E)=>{let se=[],Se=Ne=>{for(let ve of se)ve.update&&typeof ve.update=="function"&&ve.update(Ne)},Te=()=>{for(let Ne of se)Ne.destroy&&typeof Ne.destroy=="function"&&Ne.destroy()},ae=(Ne,ve)=>{for(let Ke of se)Ke.onAttrChange&&typeof Ke.onAttrChange=="function"&&Ke.onAttrChange(Ne,ve)},le=Ne=>{if(Ne.gettersAndSetters){for(let ve of Ne.gettersAndSetters)if(!(!ve.name||!ve.attributes))try{Object.prototype.hasOwnProperty.call(f,ve.name)||Object.defineProperty(f,ve.name,ve.attributes)}catch(Ke){console.error("defineSettersGetters error:",Ke)}}},ze=Ne=>{var ve;if(!Ne.css)return;let Ke=(ve=f.shadowRoot)==null?void 0:ve.querySelector("style");!Ke||(Ke.innerHTML+=Ne.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Ne of window.tcRangeSliderPlugins){let ve=Ne();se.push(ve),ve.init&&typeof ve.init=="function"&&(ve.init(f,v,U,E),le(ve),ze(ve))}},update:Se,onAttrChange:ae,destroy:Te}},zt=10,ut=20,Vt=(f,v)=>{let U=new Map,E=/^value([0-9]*)$/;for(let ae of f.attributes){let le=ae.nodeName.trim().toLowerCase();if(!E.test(le))continue;let ze=le.replace("value","").trim(),Ne=ze===""||ze==="0"||ze==="1"?0:je(ze,0)-1,ve=Ze(ae.value)?je(ae.value,0):ae.value;U.set(Ne,ve)}let se=Math.max(...Array.from(U.keys())),Se=[];Se.push([G(f,v,0),U.get(0)]);let Te=v;for(let ae=1;ae<=se;ae++){let le=v.cloneNode(!0);Te.after(le),Te=le,Se.push([G(f,le,ae),U.get(ae)])}return Se},jl=(f,v,U,E,se,Se,Te)=>{try{Object.defineProperty(f,E,{configurable:!0,get(){if(!v)return;let ae=v.pointers[U];if(!ae)return;let le=v.getTextValue(ae.percent);return Ze(le)?je(le,le):le},set:ae=>{v.pointers[U]?v==null||v.setValue(ae,U):v==null||v.addPointer(ae)}}),Object.defineProperty(f,se,{configurable:!0,get(){var ae,le;return(le=(ae=v==null?void 0:v.pointers[U])==null?void 0:ae.getAttr("aria-label"))!=null?le:void 0},set:ae=>{!v||v.setAriaLabel(U,ae)}}),Object.defineProperty(f,Se,{configurable:!0,get(){var ae,le;return(le=(ae=v==null?void 0:v.styles)==null?void 0:ae.pointerShapes[U])!=null?le:null},set:ae=>{!v||!v.styles||v.styles.setPointerShape(U,ae)}}),Object.defineProperty(f,Te,{configurable:!0,get(){var ae;return(ae=v==null?void 0:v.pointers[U].disabled)!=null?ae:!1},set:ae=>{if(!v)return;let le=v==null?void 0:v.pointers[U];!le||(le.disabled=ae)}})}catch(ae){console.error(ae)}},nd=(f,v)=>{let U=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let E=2;E<zt;E++)U.push([`value${E}`,`ariaLabel${E}`,`pointer${E}Shape`,`pointer${E}Disabled`,E-1]);for(let E of U)jl(f,v,E[4],E[0],E[1],E[2],E[3])},Nl=(f,v,U)=>{var E;let se=(E=U.shadowRoot)==null?void 0:E.querySelector(".container");if(se)for(let Se of f)v?se.prepend(Se.$pointer):se.append(Se.$pointer)},ad=(f,v)=>{if(!(!v||f.length<=1)){for(let U of f)U.$pointer.style.zIndex=ut.toString();v.$pointer.style.zIndex=(ut*2).toString()}},Ba=0,Cs=100,Qi=2,Wl="0.3s",od=(f,v,U)=>{let E=U.map(y=>y[0]),se=null,Se=null,Te=null,ae=null,le=Ba,ze=Cs,Ne,ve,Ke=Ae,Sr=Qi,Gt=!1,ke=!1,Fe=!1,Pe=0,at=1/0,Dt=!1,_t,mt,yt=!1,tr=!1,rr=!1,xi=Wl,Hl=[],Bl=y=>{yt||(y.preventDefault&&y.preventDefault(),zi(y),window.addEventListener("mousemove",zi),window.addEventListener("mouseup",Sn),ii(f,y))},Sn=y=>{yt||(_t=void 0,mt=void 0,window.removeEventListener("mousemove",zi),window.removeEventListener("mouseup",Sn),xi&&v.classList.add(Me),Na(f,y))},cd=(y,N)=>{if(E.length<=0)return;if(E.length===1)return E[0].isClicked(y)&&xi&&v.classList.remove(Me),E[0];let pe=dd(y);if(Dt){let Ye=N,Dr=kn(Ye);Dr!==void 0&&(Ye=wi(Ye,Dr)),pe?(_t=Ye,mt=0,xi&&v.classList.remove(Me)):_t!==void 0&&(mt=Ye-_t,_t=Ye)}if(!ud(y)&&!pe){for(let Ye of E)if(!(!Ye.isClicked(y)||Ye.disabled))return xi&&v.classList.remove(Me),Ye;for(let Ye of E)if(se===Ye)return Ye}let et=1/0,vt=null;for(let Ye of E){if(Ye.disabled)continue;let Dr=Math.abs(N-Ye.percent);Dr<et&&(et=Dr,vt=Ye)}return vt},Vl=()=>E.findIndex(y=>se===y&&!y.disabled),zi=y=>{let N;if(Ke===ce){let{height:et,top:vt}=v.getBoundingClientRect(),Ye=y.type.indexOf("mouse")!==-1?y.clientY:y.touches[0].clientY;N=Math.min(Math.max(0,Ye-vt),et)*100/et}else{let{width:et,left:vt}=v.getBoundingClientRect(),Ye=y.type.indexOf("mouse")!==-1?y.clientX:y.touches[0].clientX;N=Math.min(Math.max(0,Ye-vt),et)*100/et}if((Gt||ke)&&(N=100-N),se=cd(y.target,N),se&&ad(E,se),Dt&&E.length>1&&mt!==void 0){let et=E[0],vt=E[E.length-1],Ye=et.percent+mt<0,Dr=vt.percent+mt>100;if(Ye||Dr)return;for(let Dn=0;Dn<E.length;Dn++)ir(Dn,E[Dn].percent+mt);return}let pe=Vl();pe!==-1&&(ir(pe,N),se==null||se.$pointer.focus())},$n=y=>{if(yt||document.activeElement!==f||se!=null&&se.disabled)return;y.stopPropagation(),y.preventDefault();let N=y.deltaY<0,pe=Gt||ke,et=N?!pe:pe,vt=Vl();vt!==-1&&(et?Os(vt,E[vt].percent):As(vt,E[vt].percent))},Gl=y=>{yt||tr||(Ke===ce?ke?ir(y,100):ir(y,0):Gt?As(y,E[y].percent):Os(y,E[y].percent))},Yl=y=>{yt||tr||(Ke===ce?ke?ir(y,0):ir(y,100):Gt?Os(y,E[y].percent):As(y,E[y].percent))},ql=y=>{yt||tr||(Ke===ce?ke?As(y,E[y].percent):Os(y,E[y].percent):Gt?ir(y,100):ir(y,0))},Xl=y=>{yt||tr||(Ke===ce?ke?Os(y,E[y].percent):As(y,E[y].percent):Gt?ir(y,0):ir(y,100))},ud=y=>y.classList.contains("panel"),dd=y=>y.classList.contains("panel-fill"),Os=(y,N)=>{if(N===void 0)return;let pe=kn(N);pe==null&&(pe=1),N-=pe,N<0&&(N=0),ir(y,N)},As=(y,N)=>{if(N===void 0)return;let pe=kn(N);pe==null&&(pe=1),N+=pe,N>100&&(N=100),ir(y,N)},Fi=()=>{!ae||ae.update({percents:Kl(),values:Jl(),$pointers:Zl(),min:Ql(),max:eh(),data:Ya(),step:Ga(),round:Xa(),type:qa(),textMin:Pn(),textMax:_n(),rightToLeft:Za(),bottomToTop:Qa(),pointersOverlap:io(),pointersMinDistance:Ka(),pointersMaxDistance:Ja(),rangeDragging:so(),disabled:eo(),keyboardDisabled:to(),mousewheelDisabled:ro()})},pd=()=>{Fi()},fd=y=>{if(!(Fe||E.length<=1||ze===le))if(y===0){let N=at*100/(ze-le);return Math.max(0,E[y+1].percent-N)}else{let N=Pe*100/(ze-le);return Math.min(E[y-1].percent+N,100)}},gd=y=>{if(!(Fe||E.length<=1||ze===le))if(y===E.length-1){let N=at*100/(ze-le);return Math.min(E[y-1].percent+N,100)}else{let N=Pe*100/(ze-le);return Math.max(0,E[y+1].percent-N)}},kn=y=>{let N;if(typeof Ne=="function"){let pe=Ue(0,100,le,ze,y);N=Ne(pe,y)}else N=Ne;if(Ze(N)){let pe=ze-le;return N=pe===0?0:N*100/pe,N}},es=y=>{if(y===void 0)return;let N=Ue(0,100,le,ze,y);return ve!==void 0?ve[Math.round(N)]:Ui(N,Sr)},Pn=()=>ve!==void 0?ve[le]:le,_n=()=>ve!==void 0?ve[ze]:ze,Ga=()=>Ne,md=y=>{var N;return y<=0||Fe?Pn():(N=es(E[y-1].percent))!=null?N:""},yd=y=>{var N;return E.length<=1||y>=E.length-1||Fe?_n():(N=es(E[y+1].percent))!=null?N:""},Kl=()=>E.map(y=>y.percent),Jl=()=>E.map(y=>es(y.percent)),Zl=()=>E.map(y=>y.$pointer),Ql=()=>le,eh=()=>ze,Ya=()=>ve,qa=()=>Ke,Xa=()=>Sr,Ka=()=>Pe,Ja=()=>at,vd=y=>Hl[y],Za=()=>Gt,Qa=()=>ke,eo=()=>yt,to=()=>tr,ro=()=>rr,io=()=>Fe,so=()=>Dt,ir=(y,N)=>{if(N===void 0)return;let pe=kn(N);pe!==void 0&&(N=wi(N,pe));let et=E[y];if(!et)return;let vt=et.updatePosition(N,fd(y),gd(y),Ke,Gt,ke);Se==null||Se.updatePosition(Ke,E.map(Ye=>Ye.percent),Gt,ke),Fi();for(let Ye of E){let Dr=es(Ye.percent);Dr!==void 0&&(Ye.setAttr("aria-valuenow",Dr.toString()),Ye.setAttr("aria-valuetext",Dr.toString()))}wd(),vt&&Ha(f,E.map(Ye=>es(Ye.percent)))},Hr=()=>{for(let y=0;y<E.length;y++)ir(y,E[y].percent)},bd=(y,N)=>{le=ve!==void 0?0:je(y,Ba),ze=ve!==void 0?ve.length-1:je(N,Cs),Cn(le),On(ze)},wd=()=>{var y,N;for(let pe=0;pe<E.length;pe++){let et=E[pe];et.setAttr("aria-valuemin",((y=md(pe))!=null?y:"").toString()),et.setAttr("aria-valuemax",((N=yd(pe))!=null?N:"").toString())}},Cn=y=>{le=je(y,Ba),le>ze&&(ze=le+Cs),Hr()},On=y=>{ze=je(y,Cs),ze<le&&(ze=le+Cs),Hr()},th=y=>{Fe=!0;for(let N=0;N<y.length;N++)An(y[N],N);Fe=!1;for(let N=0;N<y.length;N++)An(y[N],N)},An=(y,N)=>{let pe;ve!==void 0?(pe=y==null?0:J(y,ve),pe===-1&&(pe=0)):(pe=je(y,le),pe<le&&(pe=le),pe>ze&&(pe=ze));let et=Ue(le,ze,0,100,pe);ir(N,et)},En=y=>{if(y==null){Ne=void 0;return}if(typeof y=="function"){Ne=y,Hr();return}if(Ze(y)){Ne=je(y,1);let N=Math.abs(ze-le);Ne>N&&(Ne=void 0),Hr();return}Ne=void 0},no=y=>{Fe=y,Hr()},ao=y=>{(!Ze(y)||y<0)&&(y=0),Pe=y},oo=y=>{(!Ze(y)||y<0)&&(y=1/0),at=y},lo=y=>{yt=y,v.classList.toggle("disabled",yt),yt?v.setAttribute("aria-disabled","true"):v.hasAttribute("aria-disabled")&&v.removeAttribute("aria-disabled")},rh=y=>{tr=y},ih=y=>{rr=y,rr?document.removeEventListener("wheel",$n):document.addEventListener("wheel",$n,{passive:!1})},ho=y=>{if(y==null){ve=void 0;return}if(ve=Z(y),ve===void 0||ve.length<=0){ve=void 0;return}Cn(0),On(ve.length-1),Ne===void 0&&En(1)},co=y=>{var N;typeof y=="string"?Ke=y.trim().toLowerCase()===ce?ce:Ae:Ke=Ae;let pe=(N=f.shadowRoot)==null?void 0:N.querySelector(".range-slider-box");if(!pe)return;pe.className=`range-slider-box type-${Ke}`,Hr();let et=Ke===ce?"vertical":"horizontal";for(let vt of E)vt.setAttr("aria-orientation",et)},uo=y=>{Gt=y,E.length>1&&Nl(E,Gt,f),Hr(),Fi()},po=y=>{ke=y,E.length>1&&Nl(E,ke,f),Hr(),Fi()},fo=y=>{Sr=je(y,Qi),Sr<0&&(Sr=Qi),Fi()},sh=y=>{y==null||y.toString().trim().toLowerCase()==="false"?(xi=void 0,v.style.removeProperty(be),v.classList.remove(Me)):(xi=y.toString(),v.style.setProperty(be,xi),v.classList.add(Me))},nh=(y,N)=>{let pe=E[y];!pe||(pe.setAttr("aria-label",N),Hl[y]=N)},Ln=y=>{if(_t=void 0,E.length<=1){Dt=!1,v.classList.remove(Xe);return}Dt=y,v.classList.toggle(Xe,Dt)},xd=()=>{lo(Qe(f.getAttribute(R))),tr=Qe(f.getAttribute(Y)),rr=Qe(f.getAttribute(F));let y=Ee(f,/^pointer([0-9]*)-disabled$/,N=>Qe(N));for(let N of y){let pe=N[0];!E[pe]||(E[pe].disabled=N[1])}},Sd=()=>{let y=Ee(f,/^aria-label([0-9]*)$/);for(let N of y){let pe=N[0];nh(pe,N[1])}},$d=y=>{let N=E.length,pe=E[N-1].$pointer,et=pe.cloneNode(!0);pe.after(et);let vt=G(f,et,N);return vt.setCallbacks(Gl,Yl,ql,Xl),E.push(vt),An(y,N),Hr(),Fi(),N},kd=()=>{let y=E.length,N=E[y-1];return N?(N.destroy(),E.pop(),E.length<=1&&Ln(!1),Hr(),Fi(),y-1):-1};return(()=>{var y,N;for(let et of E)et.setCallbacks(Gl,Yl,ql,Xl);let pe=(y=f.shadowRoot)==null?void 0:y.querySelector(".panel-fill");pe&&(Se=De(pe)),co(f.getAttribute($)),uo(Qe(f.getAttribute(H))),po(Qe(f.getAttribute(O))),bd(f.getAttribute(d),f.getAttribute(p)),En(f.getAttribute(b)),ho(f.getAttribute(u)),th(U.map(et=>et[1])),no(Qe(f.getAttribute(a))),ao(je(f.getAttribute(o),0)),oo(je(f.getAttribute(l),1/0)),Ln(Qe(f.getAttribute(h))),fo(je(f.getAttribute(w),Qi)),xd(),Sd(),Te=Re(f,v,E),sh((N=f.getAttribute(nt))!=null?N:Wl),v.addEventListener("mousedown",Bl),v.addEventListener("mouseup",Sn),v.addEventListener("touchmove",zi),v.addEventListener("touchstart",zi),rr||document.addEventListener("wheel",$n,{passive:!1}),ae=Ie(f,pd,{setValues:th,setMin:Cn,setMax:On,setStep:En,setPointersOverlap:no,setPointersMinDistance:ao,setPointersMaxDistance:oo,setDisabled:lo,setType:co,setRightToLeft:uo,setBottomToTop:po,setRound:fo,setKeyboardDisabled:rh,setMousewheelDisabled:ih,setRangeDragging:Ln,setData:ho},{getPercents:Kl,getValues:Jl,getPointerElements:Zl,getMin:Ql,getMax:eh,getStep:Ga,getData:Ya,getType:qa,getRound:Xa,getTextMin:Pn,getTextMax:_n,isRightToLeft:Za,isBottomToTop:Qa,isDisabled:eo,isKeyboardDisabled:to,isMousewheelDisabled:ro,isPointersOverlap:io,isRangeDraggingEnabled:so,getPointersMinDistance:Ka,getPointersMaxDistance:Ja}),ae.init()})(),{get pointers(){return E},get styles(){return Te},get pluginsManager(){return ae},get min(){return Pn()},get max(){return _n()},get step(){return Ga()},get pointersOverlap(){return io()},set pointersOverlap(y){no(y)},get pointersMinDistance(){return Ka()},set pointersMinDistance(y){ao(y)},get pointersMaxDistance(){return Ja()},set pointersMaxDistance(y){oo(y)},get disabled(){return eo()},set disabled(y){lo(y)},get data(){return Ya()},get type(){return qa()},set type(y){co(y)},get rightToLeft(){return Za()},set rightToLeft(y){uo(y)},get bottomToTop(){return Qa()},set bottomToTop(y){po(y)},get round(){return Xa()},set round(y){fo(y)},get animateOnClick(){return xi},set animateOnClick(y){sh(y)},get keyboardDisabled(){return to()},set keyboardDisabled(y){rh(y)},get mousewheelDisabled(){return ro()},set mousewheelDisabled(y){ih(y)},get rangeDragging(){return so()},set rangeDragging(y){Ln(y)},setMin:Cn,setMax:On,setValue:An,setStep:En,setData:ho,getTextValue:es,setAriaLabel:nh,getAriaLabel:vd,addPointer:$d,removePointer:kd,destroy:()=>{v.removeEventListener("mousedown",Bl),v.removeEventListener("mouseup",Sn),v.removeEventListener("touchmove",zi),v.removeEventListener("touchstart",zi),document.removeEventListener("wheel",$n);for(let y of E)y.destroy();ae==null||ae.destroy()}}},ld=(f,v,U)=>{let E=$e.find(([ae,le,ze,Ne])=>le.replace("#","")===v.replace(/\d+/g,""));if(E&&f.styles){let[ae,le,ze,Ne]=E,ve=v.replace(/\D/g,"").trim(),Ke=ve===""||ve==="0"||ve==="1"?0:je(ve,0)-1;f.styles.setStyle(ae,U,Ke);return}switch(f&&f.pluginsManager&&f.pluginsManager.onAttrChange(v,U),v){case d:{f.setMin(U);break}case p:{f.setMax(U);break}case b:{f.setStep(U);break}case a:{f.pointersOverlap=Qe(U);break}case o:{f.pointersMinDistance=je(U,0);break}case h:{f.rangeDragging=Qe(U);break}case l:{f.pointersMaxDistance=je(U,1/0);break}case R:{f.disabled=Qe(U);break}case Y:{f.keyboardDisabled=Qe(U);break}case F:{f.mousewheelDisabled=Qe(U);break}case u:{f.setData(U);break}case $:{f.type=U;break}case H:{f.rightToLeft=Qe(U);break}case O:{f.bottomToTop=Qe(U);break}case w:{f.round=je(U,Qi);break}case k:{f.styles&&(f.styles.theme=U);break}case nt:{f.animateOnClick=U;break}}let se=null;if(/^value([0-9]*)$/.test(v)&&(se="value"),/^pointer([0-9]*)-disabled$/.test(v)&&(se="pointer-disabled"),/^aria-label([0-9]*)$/.test(v)&&(se="aria-label"),/^pointer([0-9]*)-shape$/.test(v)&&(se="pointer-shape"),!se)return;let Se=v.replace(/\D/g,"").trim(),Te=Se===""||Se==="0"||Se==="1"?0:je(Se,0)-1;switch(se){case"value":{f.setValue(U,Te);break}case"pointer-disabled":{let ae=f==null?void 0:f.pointers[Te];if(!ae)return;ae.disabled=Qe(U);break}case"aria-label":{f.setAriaLabel(Te,U);break}case"pointer-shape":{f.styles&&f.styles.setPointerShape(Te,U);break}}},hd=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(f){this.slider&&this.slider.setStep(f)}get step(){var f;return(f=this.slider)==null?void 0:f.step}set disabled(f){this.slider&&(this.slider.disabled=f)}get disabled(){var f,v;return(v=(f=this.slider)==null?void 0:f.disabled)!=null?v:!1}set data(f){var v;(v=this.slider)==null||v.setData(f)}get data(){var f;return(f=this.slider)==null?void 0:f.data}set min(f){var v;(v=this.slider)==null||v.setMin(f)}get min(){var f;return(f=this.slider)==null?void 0:f.min}set max(f){var v;(v=this.slider)==null||v.setMax(f)}get max(){var f;return(f=this.slider)==null?void 0:f.max}set round(f){!this.slider||(this.slider.round=f)}get round(){var f,v;return(v=(f=this.slider)==null?void 0:f.round)!=null?v:Qi}set type(f){!this.slider||(this.slider.type=f??Ae)}get type(){var f;return((f=this.slider)==null?void 0:f.type)||Ae}set pointersOverlap(f){!this.slider||(this.slider.pointersOverlap=f)}get pointersOverlap(){var f,v;return(v=(f=this.slider)==null?void 0:f.pointersOverlap)!=null?v:!1}set pointersMinDistance(f){!this.slider||(this.slider.pointersMinDistance=f)}get pointersMinDistance(){var f,v;return(v=(f=this.slider)==null?void 0:f.pointersMinDistance)!=null?v:0}set pointersMaxDistance(f){!this.slider||(this.slider.pointersMaxDistance=f)}get pointersMaxDistance(){var f,v;return(v=(f=this.slider)==null?void 0:f.pointersMaxDistance)!=null?v:1/0}set theme(f){!this.slider||!this.slider.styles||(this.slider.styles.theme=f)}get theme(){var f,v,U;return(U=(v=(f=this.slider)==null?void 0:f.styles)==null?void 0:v.theme)!=null?U:null}set rtl(f){!this.slider||(this.slider.rightToLeft=f)}get rtl(){var f,v;return(v=(f=this.slider)==null?void 0:f.rightToLeft)!=null?v:!1}set btt(f){!this.slider||(this.slider.bottomToTop=f)}get btt(){var f,v;return(v=(f=this.slider)==null?void 0:f.bottomToTop)!=null?v:!1}set keyboardDisabled(f){!this.slider||(this.slider.keyboardDisabled=f)}get keyboardDisabled(){var f,v;return(v=(f=this.slider)==null?void 0:f.keyboardDisabled)!=null?v:!1}set mousewheelDisabled(f){!this.slider||(this.slider.mousewheelDisabled=f)}get mousewheelDisabled(){var f,v;return(v=(f=this.slider)==null?void 0:f.mousewheelDisabled)!=null?v:!1}set animateOnClick(f){!this.slider||(this.slider.animateOnClick=f)}get animateOnClick(){var f;return(f=this.slider)==null?void 0:f.animateOnClick}get rangeDragging(){var f,v;return(v=(f=this.slider)==null?void 0:f.rangeDragging)!=null?v:!1}set rangeDragging(f){this.slider&&(this.slider.rangeDragging=Qe(f))}get externalCSSList(){return this._externalCSSList}addPointer(f){var v,U;if(!this.slider)return;let E=(U=(v=this.slider)==null?void 0:v.addPointer(f))!=null?U:0;jl(this,this.slider,E,`value${E+1}`,`ariaLabel${E+1}`,`pointerShape${E+1}`,`pointer${E+1}Disabled`)}removePointer(){var f;!this.slider||(f=this.slider)==null||f.removePointer()}addCSS(f){if(!this.shadowRoot)return;let v=document.createElement("style");v.textContent=f,this.shadowRoot.appendChild(v)}connectedCallback(){var f,v;if(!this.shadowRoot)return;this._externalCSSList=X(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let U=(f=this.shadowRoot)==null?void 0:f.querySelector(".pointer");if(!U)return;let E=(v=this.shadowRoot)==null?void 0:v.getElementById("range-slider");if(!E)return;let se=Vt(this,U);this.slider=od(this,E,se),nd(this,this.slider),this._observer=new MutationObserver(Se=>{Se.forEach(Te=>{var ae;if(!this.slider||Te.type!=="attributes")return;let le=Te.attributeName;!le||ld(this.slider,le,(ae=this.getAttribute(le))!=null?ae:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Va=hd;window.tcRangeSlider=Va,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Va),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Va{})})();const ab=r=>!isNaN(parseFloat(r))&&isFinite(r),si=(r,e)=>ab(r)?Number(r):e,$o=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const zn=40,Fn=35,jn=30,ac="#475569",oc="#fff",lc=20,ob=()=>{let r=null,e=null,t=!1,i=zn,s=Fn,n=jn,a=ac,o=oc,l="",h="",u,d=[],p=null,b=null;const w=()=>{p==null||p.classList.toggle("is-after",i<=0)},$=()=>{var V;const S=(V=r==null?void 0:r.shadowRoot)==null?void 0:V.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("tooltips"),S.prepend(p),w()},k=S=>{const V=document.createElement("div");return V.style.zIndex=lc.toString(),V.className=S,V},H=(S,V,he,ie,Le)=>{S&&(V==="vertical"?(S.style.left=`${-i}px`,S.style.top=ie??"0"):(S.style.left=he??"0",S.style.top=`${-i}px`),S.style.width=`${s}px`,S.style.height=`${n}px`,S.style.background=a,S.style.color=o,S.style.zIndex=Le.toString())},O=S=>{let V=S;return typeof u=="function"&&(V=u(S)),h==="prefix"?`${l}${V}`:`${V}${l}`},R=()=>{const S=(e==null?void 0:e.getValues())??[],V=(e==null?void 0:e.getPointerElements())??[],he=(e==null?void 0:e.getType())??"horizontal";if(S)for(let ie=0;ie<S.length;ie++){const Le=d[ie];if(!Le)continue;const Ve=(S[ie]??"").toString();Le.textContent=O(Ve),H(Le,he,V[ie].style.left,V[ie].style.top,V[ie].style.zIndex)}},Y=()=>{const S=(e==null?void 0:e.getValues())??[];if(S){for(let V=0;V<S.length;V++){const he=k(`tooltip tooltip-${V+1}`);he.style.position="absolute",d.push(he),p==null||p.prepend(he)}R()}},F=()=>{r&&(b=new ResizeObserver(S=>{for(const V of S)R()}),b.observe(r))},re=S=>{t=S,t?($(),Y(),F()):oe()},x=S=>{i=S,R()},A=S=>{s=S,R()},I=S=>{n=S,R()},T=S=>{a=S,R()},j=S=>{o=S,R()},M=S=>{l=S,R()},z=S=>{h=S,R()},D=S=>{u=S,R()},q=S=>{if(!t||!S.values)return;const V=(e==null?void 0:e.getPointerElements())??[],he=(e==null?void 0:e.getType())??"horizontal";for(let ie=0;ie<S.values.length;ie++){const Le=S.values[ie],Ve=d[ie];if(Le===void 0&&Ve){Ve.remove(),d[ie]=void 0;continue}if(Le!==void 0&&!Ve){const nt=k(`tooltip tooltip-${ie+1}`),ne=(Le??"").toString();nt.textContent=O(ne),nt.style.position="absolute",H(nt,he,V[ie].style.left,V[ie].style.top,V[ie].style.zIndex),d[ie]=nt,p==null||p.append(nt)}if(!Ve)continue;const rt=(Le??"").toString();Ve.textContent=O(rt),H(Ve,he,V[ie].style.left,V[ie].style.top,V[ie].style.zIndex)}},oe=()=>{p==null||p.remove();for(const S of d)S&&S.remove();d=[],b==null||b.disconnect()};return{get name(){return"Moving Tooltip"},init:(S,V,he,ie)=>{r=S,e=ie,i=si(S.getAttribute("moving-tooltip-distance-to-pointer"),zn),s=si(S.getAttribute("moving-tooltip-width"),Fn),n=si(S.getAttribute("moving-tooltip-height"),jn),a=S.getAttribute("moving-tooltip-bg")||ac,o=S.getAttribute("moving-tooltip-text-color")||oc,l=S.getAttribute("moving-tooltip-units")||"",h=S.getAttribute("moving-tooltip-units-type")||"",re($o(S.getAttribute("moving-tooltip")))},update:q,onAttrChange:(S,V)=>{S==="moving-tooltip"&&re($o(V)),S==="moving-tooltip-distance-to-pointer"&&x(si(V,zn)),S==="moving-tooltip-width"&&A(si(V,Fn)),S==="moving-tooltip-height"&&I(si(V,jn)),S==="moving-tooltip-bg"&&T(V),S==="moving-tooltip-text-color"&&j(V),S==="moving-tooltip-units"&&M(V),S==="moving-tooltip-units-type"&&z(V)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:S=>{re($o(S))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:S=>{x(si(S,zn))}}},{name:"tooltipWidth",attributes:{get(){return s},set:S=>{A(si(S,Fn))}}},{name:"tooltipHeight",attributes:{get(){return n},set:S=>{I(si(S,jn))}}},{name:"tooltipBg",attributes:{get(){return a},set:S=>{T(S)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:S=>{j(S)}}},{name:"tooltipUnits",attributes:{get(){return l},set:S=>{M(S)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:S=>{z(S)}}},{name:"formatTooltipValue",attributes:{get(){return u},set:S=>{D(S)}}}],css:`
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
  z-index: ${lc};
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
    `,destroy:oe}};window.tcRangeSliderPlugins.push(ob);(()=>{var r=(o,l,h,u,d)=>{let p=l-o;return p===0?h:(u-h)*(d-o)/p+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,u=null,d=null,p=!1,b=s,w=n,$=()=>{var x;let A=(x=o==null?void 0:o.shadowRoot)==null?void 0:x.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),u=document.createElement("div"),u.classList.add("mark-points"),h.append(u),d=document.createElement("div"),d.classList.add("mark-values"),h.append(d),A.append(h)},k=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},H=()=>{var x;if(!h||!l)return;let A=l.getMin(),I=l.getMax(),T=l.getType()==="vertical",j=l.isRightToLeft()||l.isBottomToTop();for(let z=0;z<b;z++){let D=document.createElement("div");D.classList.add("mark",`mark-${z}`);let q=b===0?0:z*100/(b-1);T?j?D.style.top=`${100-q}%`:D.style.top=`${q}%`:j?D.style.left=`${100-q}%`:D.style.left=`${q}%`,u==null||u.append(D)}let M=l.getData();for(let z=0;z<w;z++){let D=document.createElement("div");D.classList.add("mark-value",`mark-value-${z}`);let q=w===0?0:z*100/(w-1),oe=r(0,w-1,A,I,z);D.textContent=(M?(x=M[Math.round(oe)])!=null?x:"":oe).toString(),T?j?D.style.top=`${100-q}%`:D.style.top=`${q}%`:j?D.style.left=`${100-q}%`:D.style.left=`${q}%`,d==null||d.append(D)}},O=(x,A)=>{re(),b=x,w=A,b<=0&&(b=s),w<=0&&(w=n),$(),H(),k()},R=x=>{p=x,p?($(),H(),k()):re()},Y=x=>{!h||h.style.setProperty("--marks-color",x)},F=x=>{!h||h.style.setProperty("--values-color",x)},re=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(x,A,I,T)=>{var j,M;l=T,o=x,p=i(o.getAttribute("marks")),p&&(O(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),Y((j=o.getAttribute("marks-color"))!=null?j:"#cbd5e1"),F((M=o.getAttribute("marks-values-color"))!=null?M:"#475569"))},onAttrChange:(x,A)=>{x==="marks"&&R(i(A)),x==="marks-count"&&O(t(A,s),w),x==="marks-values-count"&&O(b,t(A,n)),x==="marks-color"&&Y(A),x==="marks-values-color"&&F(A)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return p??!1},set:x=>{R(i(x))}}},{name:"marksCount",attributes:{get(){return b??s},set:x=>{O(t(x,s),w)}}},{name:"marksValuesCount",attributes:{get(){return b??s},set:x=>{O(b,t(x,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:x=>{Y(x)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:x=>{F(x)}}}],destroy:re,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var lb=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,Qr=(r,e,t,i)=>{for(var s=i>1?void 0:i?hb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lb(e,t,s),s};let kr=class extends vr{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=ge(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)}),this.registry.minmax.addListener(this.UUID,r=>{r&&(this.from=r.min,this.to=r.max)})}disconnectedCallback(){super.disconnectedCallback(),this.registry.range.removeListener(this.UUID),this.registry.minmax.removeListener(this.UUID),this.initialised=!1}firstUpdated(r){super.firstUpdated(r)}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
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
                ${we(this.sliderRef)}
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

        `}};kr.styles=me`

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
    
    `;Qr([ye({context:ml,subscribe:!0}),C()],kr.prototype,"min",2);Qr([ye({context:yl,subscribe:!0}),C()],kr.prototype,"max",2);Qr([ye({context:La,subscribe:!0}),C()],kr.prototype,"from",2);Qr([ye({context:Da,subscribe:!0}),C()],kr.prototype,"to",2);Qr([C()],kr.prototype,"hasFixedFrom",2);Qr([C()],kr.prototype,"hasFixedTo",2);Qr([ye({context:un,subscribe:!0}),C()],kr.prototype,"palette",2);Qr([C()],kr.prototype,"sliderRef",2);Qr([C()],kr.prototype,"initialised",2);kr=Qr([te("registry-range-slider")],kr);var cb=Object.defineProperty,ub=Object.getOwnPropertyDescriptor,vn=(r,e,t,i)=>{for(var s=i>1?void 0:i?ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cb(e,t,s),s};let ms=class extends vr{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=ge()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?L:m`
            <div ${we(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};vn([ye({context:La,subscribe:!0})],ms.prototype,"from",2);vn([ye({context:Da,subscribe:!0})],ms.prototype,"to",2);vn([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],ms.prototype,"fixed",2);vn([g({type:String,reflect:!0,attribute:!0})],ms.prototype,"separator",2);ms=vn([te("registry-range-display")],ms);var db=Object.defineProperty,pb=Object.getOwnPropertyDescriptor,Xi=(r,e,t,i)=>{for(var s=i>1?void 0:i?pb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&db(e,t,s),s};let fi=class extends vr{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.tourableElementRef=ge()}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return m`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":L}" ${we(this.tourableElementRef)}>

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
        `}};fi.styles=me`

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


    `;Xi([C()],fi.prototype,"histogram",2);Xi([g({type:Boolean,reflect:!0})],fi.prototype,"interactive",2);Xi([g({type:String,reflect:!0})],fi.prototype,"height",2);Xi([g({type:String,reflect:!0})],fi.prototype,"heightExpanded",2);Xi([g({type:Boolean,reflect:!0,converter:ct(!1)})],fi.prototype,"expandable",2);Xi([C()],fi.prototype,"expanded",2);fi=Xi([te("registry-histogram")],fi);var fb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,mb=(r,e,t,i)=>{for(var s=i>1?void 0:i?gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fb(e,t,s),s};let hc=class extends Mi{getTourableRoot(){}render(){return m`
        
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
        
        `}};hc=mb([te("group-download-dropdown")],hc);var yb=Object.defineProperty,bn=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&yb(e,t,s),s};class Pt extends Mi{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}bn([ye({context:Ia,subscribe:!0}),C()],Pt.prototype,"parentFileProviderElement");bn([ye({context:Bu,subscribe:!0}),C()],Pt.prototype,"loading");bn([ye({context:bl,subscribe:!0}),C()],Pt.prototype,"file");bn([ye({context:Hu,subscribe:!0}),C()],Pt.prototype,"failure");bn([ye({context:$l,subscribe:!0}),C()],Pt.prototype,"recording");const Fl=class Fl extends Pt{constructor(){super(...arguments),this.ref=ge()}onInstanceCreated(){}onFailure(){}getTourableRoot(){return this.ref.value}render(){return m`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${we(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};Fl.styles=me`
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

    `;let Gi=Fl;var vb=Object.defineProperty,bb=Object.getOwnPropertyDescriptor,ed=(r,e,t,i)=>{for(var s=i>1?void 0:i?bb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vb(e,t,s),s};let da=class extends Mi{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return m`
            <slot>
                <button class="default">${_(P.range).toLowerCase()}</button>
            </slot>
        `}};da.styles=Gi.styles;ed([ye({context:Ra,subscribe:!0})],da.prototype,"setter",2);da=ed([te("group-range-propagator")],da);var wb=Object.defineProperty,xb=Object.getOwnPropertyDescriptor,Sb=(r,e,t,i)=>{for(var s=i>1?void 0:i?xb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wb(e,t,s),s};let jo=class extends Pt{constructor(){super(...arguments),this.container=ge()}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(r){const e=this.getContainer();if(e!==void 0)r.mountToDom(e),r.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(r){var e;if(super.updated(r),r.has("file")){const t=r.get("file"),i=this.file;t===void 0&&i!==void 0&&this.container.value&&this.file&&((e=this.file.dom)==null?void 0:e.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return m`
            <div ${we(this.container)} class=${Xt(t)} part="file-canvas-container">
            
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
                        </div>`:L}
            
            </div>

            <slot name="tour"></slot>
        
        `}};jo.styles=me`

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
    `;jo=Sb([te("file-canvas")],jo);var $b=Object.defineProperty,kb=Object.getOwnPropertyDescriptor,Pb=(r,e,t,i)=>{for(var s=i>1?void 0:i?kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$b(e,t,s),s};let No=class extends Pt{onInstanceCreated(r){}onFailure(r){}render(){return this.file?m`
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
        `:L}};No.styles=me`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;No=Pb([te("file-share-button")],No);var _b=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,Ob=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_b(e,t,s),s};let Wo=class extends Pt{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
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

                        ${Nt(this.renderRow(_(P.thermalfilename),this.file.fileName))}

                        ${Nt(this.renderDownloadRow(_(P.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,_(P.thermalfiledownload)))}

                        ${this.file.visibleUrl?Nt(this.renderDownloadRow(_(P.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,_(P.visiblefiledownload))):L}

                        ${Nt(this.renderRow(_(P.time),st.human(this.file.timestamp)))}

                        ${Nt(this.renderNumericalRow(_(P.duration),this.file.duration,0,"ms"))}

                        ${Nt(this.renderRow(_(P.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Nt(this.renderNumericalRow(_(P.bytesize),this.file.bytesize,0))}
                        
                        ${Nt(this.renderNumericalRow(_(P.minimaltemperature),this.file.min,10,"°C"))}

                        ${Nt(this.renderNumericalRow(_(P.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${_(P.filetype)}</h2>
                    <table>
                    ${Nt(this.renderRow(_(P.type),this.file.reader.parser.name))}
                    ${Nt(this.renderRow(_(P.description),this.file.reader.parser.description))}

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
        `:L}};Wo.styles=me`

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
    
    `;Wo=Ob([te("file-info-button")],Wo);var Ab=Object.defineProperty,Eb=Object.getOwnPropertyDescriptor,Lb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Eb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ab(e,t,s),s};let Ho=class extends Pt{constructor(){super(...arguments),this.tourableElementRef=ge()}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?L:m`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${we(this.tourableElementRef)}>
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
                        </div>`:L}
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `}};Ho.styles=me`

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
    
    `;Ho=Lb([te("file-download-dropdown")],Ho);const pa=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:_e(r,"m:ss")}),Db=(r,e,t,i)=>{const s=[];let n=1;const a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(pa(o,i,"minor")),n+=1}return e<i&&s.push(pa(e,i,"major")),s},ko=60*1e3,Wi=50,ns=3,Bo=(r,e)=>{const t=Math.floor(r/Wi),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=ko;for(;o<e;)Db(o,l,n,e).forEach(h=>a.push(h)),o+=ko,l+=ko;return a.push(pa(0,e,"bound")),a.push(pa(e,e,"bound")),a},Rb=r=>m`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,cc=(r,e,t)=>m`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,td=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return m`<div class="ticks">
        
        ${e.map(Rb)}

        ${cc(s,_e(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?cc(n,_e(i,"m:ss:SSS"),"pointer"):L}

    </div>`},rd=me`

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
            width: ${Wi}px;
            left: -${Wi/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${ns}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${Wi/2}px;
            padding-right: ${Wi/2}px;
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
                top: -${ns}px;
            }

            .tick-pointer {
                width: ${ns*2}px;
                height: ${ns*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${ns}px;
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
            height: ${ns}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${Wi}px;
            position: relative;
            left: -${Wi/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var Tb=Object.defineProperty,Mb=Object.getOwnPropertyDescriptor,dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tb(e,t,s),s};let Tt=class extends Pt{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=ge(),this.barRef=ge(),this.containerRef=ge(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.markers=[],this.collapsed=!1,this.ticks=[]}getTourableRoot(){return this.containerRef.value}onInstanceCreated(r){this.containerRef.value&&(this.ticks=Bo(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=Bo(t.contentRect.width,this.file.duration)),t.contentRect.width<Tt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return L;if(r.duration===0)return L;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return m`
            <div class="${Xt(e)}" ${we(this.containerRef)}>


                ${r!==void 0?m`
                        <div class="ticks-horizontal-indent">


                            <div class="${Xt(s)}"  ${we(this.timelineRef)}>
                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${we(this.barRef)}></div>
                                    ${this.cursor?m`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(a=>m`<file-marker-timeline start=${a.fromMs} end=${a.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>


                            ${this.currentFrame?td(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):L}

                            


                            ${this.hasPlayButton===!0?m`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${_(P.prev)}</thermal-button>


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

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${_(P.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${_(P.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                </div>

                                `:L}

                            
                        </div>
                    `:L}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?m`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${_(P.date)}:</span> 
                            <span class="inline">${_e(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${_(P.time)}:</span> 
                            <span class="inline">${_e(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${_(P.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(n=this.file)==null?void 0:n.frameCount}</span>
                        </div>
                    </div>`:L}

            <slot name="tour"></slot>

          `}};Tt.collapseWidth=500;Tt.styles=me`
    
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

        ${rd}


        .controls {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }
    
    `;dr([ye({context:za,subscribe:!0}),C()],Tt.prototype,"playing",2);dr([ye({context:fn,subscribe:!0}),C()],Tt.prototype,"currentFrame",2);dr([ye({context:xl,subscribe:!0}),C()],Tt.prototype,"duration",2);dr([ye({context:Gu,subscribe:!0}),C()],Tt.prototype,"mayStop",2);dr([ye({context:wl,subscribe:!0})],Tt.prototype,"cursor",2);dr([ye({context:Vu,subscribe:!0})],Tt.prototype,"cursorSetter",2);dr([g({type:String,reflect:!0})],Tt.prototype,"hasPlayButton",2);dr([g({type:String,reflect:!0})],Tt.prototype,"hasInfo",2);dr([g({type:String,reflect:!0})],Tt.prototype,"interactive",2);dr([ye({context:kl,subscribe:!0})],Tt.prototype,"markers",2);dr([C()],Tt.prototype,"collapsed",2);dr([C()],Tt.prototype,"ticks",2);dr([C()],Tt.prototype,"pointerMs",2);Tt=dr([te("file-timeline")],Tt);var Ib=Object.defineProperty,Ub=Object.getOwnPropertyDescriptor,Cl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ib(e,t,s),s};let Ks=class extends Pt{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return this.file===void 0?L:m`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(au).map(([r])=>m`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof di&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Ks.styles=me`

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
    
    `;Cl([g({type:String,reflect:!0})],Ks.prototype,"enabled",2);Cl([ye({context:Sl,subscribe:!0}),C()],Ks.prototype,"playbackSpeed",2);Ks=Cl([te("file-playback-speed-dropdown")],Ks);var zb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,Ol=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zb(e,t,s),s};let Js=class extends Pt{constructor(){super(...arguments),this.container=ge()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return m`
            <div class="container">
            
                <video ${we(this.container)} preload="metadata">

                    ${this.url===void 0?L:m`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Js.styles=me`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Ol([ye({context:fn,subscribe:!0}),C()],Js.prototype,"currentFrame",2);Ol([g({type:String,reflect:!0,attribute:!0})],Js.prototype,"url",2);Js=Ol([te("file-video")],Js);const jb=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),_e(t,"mm:ss:SSS")},Nb=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var Wb=Object.defineProperty,Hb=Object.getOwnPropertyDescriptor,ei=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wb(e,t,s),s};const Al={fromAttribute:r=>r===null?null:Nb(r),toAttribute:r=>r===null?null:jb(r)};let Fr=class extends Pt{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return L}};ei([ye({context:za,subscribe:!0}),C()],Fr.prototype,"playing",2);ei([ye({context:Ua,subscribe:!0}),C()],Fr.prototype,"ms",2);ei([g({type:String,reflect:!0,attribute:!0})],Fr.prototype,"label",2);ei([g({type:String,reflect:!0,attribute:!0,converter:Al})],Fr.prototype,"start",2);ei([g({type:String,reflect:!0,attribute:!0,converter:Al})],Fr.prototype,"end",2);ei([g({type:String,reflect:!0,attribute:!0,converter:Al})],Fr.prototype,"dur",2);ei([g({type:String,reflect:!0,attribute:!0})],Fr.prototype,"active",2);ei([g({type:String,reflect:!0,attribute:!0})],Fr.prototype,"pauseOnActivate",2);ei([g({type:String,reflect:!0,attribute:!0})],Fr.prototype,"say",2);Fr=ei([te("file-marker")],Fr);var Bb=Object.defineProperty,Vb=Object.getOwnPropertyDescriptor,Ki=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bb(e,t,s),s};let gi=class extends Pt{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return m`

            <div class="${Xt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};gi.styles=me`
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


    `;Ki([ye({context:xl,subscribe:!0}),C()],gi.prototype,"duration",2);Ki([ye({context:fn,subscribe:!0}),C()],gi.prototype,"currentFrame",2);Ki([ye({context:Ua,subscribe:!0}),C()],gi.prototype,"ms",2);Ki([g({type:Number,reflect:!0,attribute:!0})],gi.prototype,"start",2);Ki([g({type:Number,reflect:!0,attribute:!0})],gi.prototype,"end",2);Ki([C()],gi.prototype,"active",2);gi=Ki([te("file-marker-timeline")],gi);var Gb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,id=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gb(e,t,s),s};let fa=class extends Pt{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return m`
            <div>


            ${this.markers.map(r=>r.active?m`<div class="item">
                    <h2>${r.label}</h2>
                    ${Nt(r.innerHTML)}
                    </div>`:L)}

            
            
            </div>

          `}};fa.styles=me`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;id([ye({context:kl,subscribe:!0})],fa.prototype,"markers",2);fa=id([te("file-marks-content")],fa);var qb=Object.defineProperty,Xb=Object.getOwnPropertyDescriptor,El=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qb(e,t,s),s};let Zs=class extends gt{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return m`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Zs.styles=me`

    
    `;El([g()],Zs.prototype,"analysis",2);El([C()],Zs.prototype,"name",2);Zs=El([te("analysis-name")],Zs);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Kb(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Jb=Object.defineProperty,Zb=Object.getOwnPropertyDescriptor,Ll=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jb(e,t,s),s};let Qs=class extends gt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return m`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?L:m`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Kb(Vn,r=>m`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Qs.styles=me`

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
    
    `;Ll([g()],Qs.prototype,"analysis",2);Ll([C()],Qs.prototype,"color",2);Qs=Ll([te("analysis-color")],Qs);var Qb=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,Ar=(r,e,t,i)=>{for(var s=i>1?void 0:i?e0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qb(e,t,s),s};let or=class extends gt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return m`

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
    
        
        `}};or.styles=me`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Ar([g()],or.prototype,"analysis",2);Ar([C()],or.prototype,"color",2);Ar([C()],or.prototype,"top",2);Ar([C()],or.prototype,"left",2);Ar([C()],or.prototype,"width",2);Ar([C()],or.prototype,"height",2);Ar([C()],or.prototype,"type",2);Ar([C()],or.prototype,"right",2);Ar([C()],or.prototype,"bottom",2);Ar([C()],or.prototype,"maxX",2);Ar([C()],or.prototype,"maxY",2);or=Ar([te("edit-area")],or);var t0=Object.defineProperty,r0=Object.getOwnPropertyDescriptor,Ps=(r,e,t,i)=>{for(var s=i>1?void 0:i?r0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&t0(e,t,s),s};let Ri=class extends gt{constructor(){super(...arguments),this.topInputRef=ge(),this.leftInputRef=ge()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return m`

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
        
        `}};Ri.styles=me`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Ps([g()],Ri.prototype,"analysis",2);Ps([C()],Ri.prototype,"top",2);Ps([C()],Ri.prototype,"left",2);Ps([C()],Ri.prototype,"maxX",2);Ps([C()],Ri.prototype,"maxY",2);Ri=Ps([te("edit-point")],Ri);var i0=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,ja=(r,e,t,i)=>{for(var s=i>1?void 0:i?s0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&i0(e,t,s),s};let en=class extends gt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return m`

            <thermal-dialog label="${_(P.editsth,{what:_(P[this.type])})}">

                <thermal-button slot="invoker">${_(P.edit)}</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof $r?m`<edit-point .analysis=${this.analysis}></edit-point>`:m`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};ja([g()],en.prototype,"analysis",2);ja([C()],en.prototype,"name",2);ja([C()],en.prototype,"type",2);en=ja([te("file-analysis-edit")],en);var n0=Object.defineProperty,a0=Object.getOwnPropertyDescriptor,wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?a0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&n0(e,t,s),s};let Kt=class extends Pt{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=ge(),this.graphRef=ge(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return m`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&m`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&m`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${we(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?m`<thermal-chart 
                        ${we(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:L}
            </div>

            

            </div>
        
        `}};Kt.styles=me`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;wr([C()],Kt.prototype,"hydrated",2);wr([g({reflect:!0})],Kt.prototype,"graphWidth",2);wr([g({reflect:!0})],Kt.prototype,"graphHeight",2);wr([C()],Kt.prototype,"graphs",2);wr([ye({context:fn,subscribe:!0})],Kt.prototype,"currentFrame",2);wr([ye({context:wl,subscribe:!0})],Kt.prototype,"cursor",2);wr([ye({context:Vu,subscribe:!0})],Kt.prototype,"cursorSetter",2);wr([C()],Kt.prototype,"shadowLeft",2);wr([C()],Kt.prototype,"shadowTop",2);wr([C()],Kt.prototype,"shadowWidth",2);wr([C()],Kt.prototype,"shadowHeight",2);wr([ye({context:Aa,subscribe:!0})],Kt.prototype,"graphSmooth",2);Kt=wr([te("file-analysis-graph")],Kt);const Ji="interactive-analysis-context";var o0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,ti=(r,e,t,i)=>{for(var s=i>1?void 0:i?l0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o0(e,t,s),s};let Pr=class extends gt{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof Rr?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof $r?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return m`
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
            ${this.interactiveanalysis===!0?m`<u aria-hidden="true"></u>`:L}
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
        </td>`:L}
        
        `}};Pr.styles=me`
    
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

    `;ti([g()],Pr.prototype,"analysis",2);ti([ye({context:Ji,subscribe:!0})],Pr.prototype,"interactiveanalysis",2);ti([C()],Pr.prototype,"value",2);ti([C()],Pr.prototype,"graph",2);ti([C()],Pr.prototype,"may",2);ti([C()],Pr.prototype,"dimension",2);ti([C()],Pr.prototype,"color",2);ti([g({type:Boolean,reflect:!0,attribute:!0})],Pr.prototype,"selected",2);ti([C()],Pr.prototype,"name",2);Pr=ti([te("file-analysis-table-row")],Pr);var h0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,wn=(r,e,t,i)=>{for(var s=i>1?void 0:i?c0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h0(e,t,s),s};let Yi=class extends Pt{constructor(){super(...arguments),this.container=ge(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?L:m`

        <div class="overflow" ${we(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?m`<u aria-hidden="true"></u>`:L}
                            <span>${_(P.analysis)}</span>
                            ${this.hasHighlightedData?m`<button @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${_(P.downloadgraphdataascsv)}>CSV</button>`:L}
                        </th>
                        <th>${_(P.avg)}</th>
                        <th>${_(P.min)}</th>
                        <th>${_(P.max)}</th>
                        <th>${_(P.size)}</th>
                        ${this.interactiveanalysis===!0?m`<th></th>`:L}
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
        `}};Yi.styles=me`
    
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

        



    `;wn([ye({context:Ji,subscribe:!0}),g()],Yi.prototype,"interactiveanalysis",2);wn([C()],Yi.prototype,"analysis",2);wn([C()],Yi.prototype,"allSelected",2);wn([C()],Yi.prototype,"hasHighlightedData",2);Yi=wn([te("file-analysis-table")],Yi);var u0=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,p0=(r,e,t,i)=>{for(var s=i>1?void 0:i?d0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&u0(e,t,s),s};let uc=class extends Gi{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};uc=p0([te("file-download-lrc")],uc);var f0=Object.defineProperty,g0=Object.getOwnPropertyDescriptor,m0=(r,e,t,i)=>{for(var s=i>1?void 0:i?g0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&f0(e,t,s),s};let dc=class extends Gi{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng()}getDefaultLabel(){return"png"}};dc=m0([te("file-download-png")],dc);var y0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,xn=(r,e,t,i)=>{for(var s=i>1?void 0:i?v0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&y0(e,t,s),s};let ys=class extends Gi{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};xn([g({type:String})],ys.prototype,"label",2);xn([g({type:Object})],ys.prototype,"onEnter",2);xn([g({type:Object})],ys.prototype,"onLeave",2);xn([g({type:Object})],ys.prototype,"onAction",2);ys=xn([te("file-button")],ys);var b0=Object.defineProperty,w0=Object.getOwnPropertyDescriptor,sd=(r,e,t,i)=>{for(var s=i>1?void 0:i?w0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&b0(e,t,s),s};let Vo=class extends Gi{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max})}getDefaultLabel(){return _(P.range).toLowerCase()}};sd([ye({context:Ra,subscribe:!0})],Vo.prototype,"setter",2);Vo=sd([te("file-range-propagator")],Vo);var x0=Object.defineProperty,S0=Object.getOwnPropertyDescriptor,ri=(r,e,t,i)=>{for(var s=i>1?void 0:i?S0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&x0(e,t,s),s};let _r=class extends Pt{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!1}getTourableRoot(){}onInstanceCreated(r){this.recorded=st.human(r.timestamp)}onFailure(){}render(){return m`
        <thermal-app author=${fe(this.author)} recorded=${fe(this.recorded)} license=${fe(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?m`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:L}
          
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
                  `:L}

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(P.graphlines)}"
                    hint=${_(P.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:L}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?m`<file-share-button ></file-share-button>`:L}
            
              ${this.showabout===!0?m`<app-info-button ></app-info-button>`:L}

            </thermal-bar>
          </div>
            ${this.interactiveanalysis===!0?m`<group-tool-buttons slot="pre"></group-tool-buttons>`:L}
            
            ${this.showhistogram===!0?m`<registry-histogram slot="pre"></registry-histogram>`:L}

            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?m`<file-analysis-graph slot="post"></file-analysis-graph>`:L}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};_r.styles=me`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;ri([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],_r.prototype,"showembed",2);ri([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],_r.prototype,"showabout",2);ri([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],_r.prototype,"showfullscreen",2);ri([g({type:String,reflect:!0,converter:ct(!0)})],_r.prototype,"showhistogram",2);ri([ye({context:Ji,subscribe:!0})],_r.prototype,"interactiveanalysis",2);ri([g()],_r.prototype,"author",2);ri([g()],_r.prototype,"recorded",2);ri([g()],_r.prototype,"license",2);ri([g()],_r.prototype,"label",2);_r=ri([te("file-app")],_r);var $0=Object.defineProperty,tt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&$0(e,t,s),s};class qe extends gt{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=ge()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}tt([g({type:String,reflect:!0})],qe.prototype,"url");tt([g({type:String,reflect:!0})],qe.prototype,"visible");tt([g({type:String,reflect:!0,attribute:!0})],qe.prototype,"palette");tt([g({type:Number,reflect:!0,attribute:!0})],qe.prototype,"opacity");tt([g({type:Number,reflect:!0})],qe.prototype,"from");tt([g({type:Number,reflect:!0})],qe.prototype,"to");tt([g()],qe.prototype,"author");tt([g()],qe.prototype,"recorded");tt([g()],qe.prototype,"license");tt([g()],qe.prototype,"label");tt([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],qe.prototype,"showembed");tt([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],qe.prototype,"showabout");tt([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],qe.prototype,"showtutorial");tt([g({type:String,reflect:!1,converter:ct(!0)})],qe.prototype,"showfullscreen");tt([g({type:String,reflect:!0,converter:ct(!0)})],qe.prototype,"showhistogram");tt([ue({context:Ji}),g({type:String,reflect:!0,converter:ct(!0)})],qe.prototype,"interactiveanalysis");tt([g({type:String,reflect:!0})],qe.prototype,"analysis1");tt([g({type:String,reflect:!0})],qe.prototype,"analysis2");tt([g({type:String,reflect:!0})],qe.prototype,"analysis3");tt([g({type:String,reflect:!0})],qe.prototype,"analysis4");tt([g({type:String,reflect:!0})],qe.prototype,"analysis5");tt([g({type:String,reflect:!0})],qe.prototype,"analysis6");tt([g({type:String,reflect:!0})],qe.prototype,"analysis7");tt([g({type:String,reflect:!0})],qe.prototype,"ms");tt([g({type:String,reflect:!0})],qe.prototype,"speed");tt([g({type:String,reflect:!0})],qe.prototype,"autoclear");tt([C()],qe.prototype,"hasGraph");tt([C()],qe.prototype,"hasAnalysis");tt([C()],qe.prototype,"isSequence");var k0=Object.defineProperty,P0=Object.getOwnPropertyDescriptor,_0=(r,e,t,i)=>{for(var s=i>1?void 0:i?P0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&k0(e,t,s),s};let pc=class extends qe{render(){return this.url===""?L:m`

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


    
    `}};pc=_0([te("thermal-file-app")],pc);class C0{constructor(e){this.steps=e,this.onStepInternalActivation=new ee}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class Dl{constructor(e){this._active=!1,this.onTourActivationStatus=new ee,this.onStepActivation=new ee,this.storage=new C0(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new Dl(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var O0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,It=(r,e,t,i)=>{for(var s=i>1?void 0:i?A0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&O0(e,t,s),s};let $t=class extends Pt{constructor(){super(),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.showtutorial=!1,this.interactiveanalysis=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=ge(),this.contentContainerWidth=1e3,this.tourController=Dl.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=st.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return m`
        <thermal-app author=${fe(this.author)} recorded=${fe(this.recorded)} license=${fe(this.license)}>

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
            </registry-opacity-slider>`:L}
          
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
                  `:L}

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(P.graphlines)}"
                    hint=${_(P.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:L}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown tour="download">
                <tour-step slot="tour" placement="left" label="Downloads">Zde si to stáhněte, vy volové</tour-step>
              </file-download-dropdown>
            
              ${this.showabout===!0?m`<app-info-button></app-info-button>`:L}

              ${this.showtutorial===!0?m`<thermal-button @click=${()=>this.tourController.activate(!1)}>
                ${_(P.tutorial)}
              </thermal-button>`:L}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${we(this.contentContainerRef)}>

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
                `:L}

                <div class="content-container__part content-container__left">

                ${this.showhistogram===!0?m`<registry-histogram slot="pre"></registry-histogram>`:L}
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
                      <div>${this.hasAnalysis===!1?_(P.graphhint1):Nt(_(P.graphhint2))}</div>
                    </div>`:L}
                  
                  </div>
                  `:L}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};$t.styles=me`


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
  
  `;It([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],$t.prototype,"showembed",2);It([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],$t.prototype,"showabout",2);It([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],$t.prototype,"showfullscreen",2);It([g({type:Boolean,reflect:!0,converter:ct(!0)})],$t.prototype,"showhistogram",2);It([g({type:String,reflect:!1,attribute:!0})],$t.prototype,"showtutorial",2);It([ye({context:Ji,subscribe:!0})],$t.prototype,"interactiveanalysis",2);It([C()],$t.prototype,"hasAnalysis",2);It([C()],$t.prototype,"hasGraph",2);It([C()],$t.prototype,"tool",2);It([C()],$t.prototype,"isSequence",2);It([g()],$t.prototype,"author",2);It([g()],$t.prototype,"recorded",2);It([g()],$t.prototype,"license",2);It([g()],$t.prototype,"label",2);It([ue({context:xu})],$t.prototype,"tourController",2);It([ue({context:Su})],$t.prototype,"tourStep",2);It([C()],$t.prototype,"contentContainerWidth",2);$t=It([te("desktop-app")],$t);var E0=Object.defineProperty,L0=Object.getOwnPropertyDescriptor,D0=(r,e,t,i)=>{for(var s=i>1?void 0:i?L0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&E0(e,t,s),s};let fc=class extends qe{render(){return this.url===""?L:m`

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
            ${we(this.fileProviderRef)}
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


    
    `}};fc=D0([te("thermal-file-analyser")],fc);var R0=Object.defineProperty,T0=Object.getOwnPropertyDescriptor,Rl=(r,e,t,i)=>{for(var s=i>1?void 0:i?T0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&R0(e,t,s),s};let tn=class extends gt{constructor(){super(...arguments),this.dropinRef=ge(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return m`

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

                            ${this.loaded===!0?m`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:L}

                            <file-dropin ${we(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};tn.styles=me`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Rl([C()],tn.prototype,"dropinRef",2);Rl([C()],tn.prototype,"loaded",2);tn=Rl([te("thermal-dropin-app")],tn);var M0=Object.defineProperty,I0=Object.getOwnPropertyDescriptor,Nr=(r,e,t,i)=>{for(var s=i>1?void 0:i?I0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&M0(e,t,s),s};let yr=class extends gt{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return m`

            ${e?m`<h3 class="row-title">${e}</h3>`:L}

            ${t?m`<p>${t}</p>`:L}

            <section class=${Xt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>m`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};yr.styles=me`

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

    `;Nr([g()],yr.prototype,"columns",2);Nr([g()],yr.prototype,"breakpoint",2);Nr([g({type:Object})],yr.prototype,"files",2);Nr([g({type:String})],yr.prototype,"label",2);Nr([g({type:String})],yr.prototype,"info",2);Nr([g({type:Number})],yr.prototype,"from",2);Nr([g({type:Number})],yr.prototype,"to",2);Nr([g({type:Number})],yr.prototype,"cursor",2);Nr([g({type:String})],yr.prototype,"grouping",2);Nr([C()],yr.prototype,"collapsed",2);yr=Nr([te("time-group-row")],yr);var U0=Object.defineProperty,_s=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&U0(e,t,s),s},Ct;const Zi=(Ct=class extends gt{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.instanceRenderer=new fs(this),this.groupRenderer=new Vs(this)}parseFilesProperty(e){return e.split(Ct.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(Ct.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(Ct.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[u,d]=h,p=u.trim(),b=d.trim();switch(p){case Ct.FILE_THERMAL_KEY:s=b;break;case Ct.FILE_VISIBLE_KEY:n=b;break;case Ct.FILE_LABEL_KEY:a=b;break;case Ct.FILE_NOTE_KEY:o=b;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},Ct.styles=[fs.styles,Vs.styles,me`
    
        `],Ct.FILE_RECORD_SEPARATOR=";",Ct.FILE_SEGMENT_SEPAROATOR="|",Ct.FILE_COMPONENT_SEPAROATOR="~",Ct.FILE_THERMAL_KEY="thermal",Ct.FILE_VISIBLE_KEY="visible",Ct.FILE_LABEL_KEY="label",Ct.FILE_NOTE_KEY="note",Ct);_s([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],Zi.prototype,"showembed");_s([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],Zi.prototype,"showabout");_s([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],Zi.prototype,"showtutorial");_s([g({type:String,reflect:!1,converter:ct(!0)})],Zi.prototype,"showfullscreen");_s([g({type:String,reflect:!0,converter:ct(!0)})],Zi.prototype,"showhistogram");_s([ue({context:Ji}),g({type:String,reflect:!0,converter:ct(!0)})],Zi.prototype,"interactiveanalysis");let Tl=Zi;class z0{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof hi)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof hi)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?qc(e).getTime():this.grouping==="day"?ea(e).getTime():this.grouping==="week"?li(e).getTime():this.grouping==="month"?ra(e).getTime():this.grouping==="year"?el(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Nc(e).getTime():this.grouping==="day"?Fc(e).getTime():this.grouping==="week"?ia(e).getTime():this.grouping==="month"?ta(e).getTime():this.grouping==="year"?jc(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:_e(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:_e(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+_e(e,"w")+" of "+_e(e,"yyyy"),info:[st.humanDate(li(e).getTime()),st.humanDate(ia(e).getTime())].join(" - ")}:this.grouping==="month"?{label:_e(e,"MMMM yyyy"),info:[st.humanDate(ra(e).getTime()),st.humanDate(ta(e).getTime())].join(" - ")}:this.grouping==="year"?{label:_e(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?st.human(e):this.grouping==="hour"||this.grouping==="day"?_e(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",st.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var F0=Object.defineProperty,j0=Object.getOwnPropertyDescriptor,pt=(r,e,t,i)=>{for(var s=i>1?void 0:i?j0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&F0(e,t,s),s};let ht=class extends Tl{constructor(){super(...arguments),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new ee,this.onColumns=new ee,this.preservetime=!0}connectedCallback(){super.connectedCallback();const t=Oa(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(this.log(t,i),t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new z0(this,t),this.onGroupInit.call(this.group)}firstUpdated(r){super.firstUpdated(r),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to});const e=this.files?this.parseFilesProperty(this.files):[];e.length>0?this.grouper.processParsedFiles(e):this.grouper.processEntries(this.entries.filter(t=>t instanceof pi))}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&this.files&&r.get("files")!==void 0){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}render(){return m`

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
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${_(P.columns,{num:this.columns})}</div>
                                    </div>

                                    ${this.grouper.numFiles>0?m`

                                        <group-download-dropdown></group-download-dropdown>

                                        <registry-range-full-button></registry-range-full-button>
                                        `:L}

                                ${this.showabout===!0?m`<app-info-button ></app-info-button>`:L}

                                </thermal-bar>

                            </div>


                            ${this.showhistogram===!0?m`<registry-histogram></registry-histogram>`:L}

                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            ${this.interactiveanalysis===!0?m`<group-tool-buttons></group-tool-buttons>`:L}

                            <div class="app-content">

                                    <slot></slot>


                                    ${this.groups.map(r=>this.groupRenderer.renderGroup(r,this.columns,this.grouping,this.preservetime))}            
                            
                            </div>

                            <group-timeline></group-timeline>

                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};ht.styles=[Tl.styles,me`


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


    
    `];pt([g({type:String,reflect:!0,attribute:!0})],ht.prototype,"palette",2);pt([g({type:Number,reflect:!0})],ht.prototype,"from",2);pt([g({type:Number,reflect:!0})],ht.prototype,"to",2);pt([g({type:String,reflect:!0})],ht.prototype,"author",2);pt([g({type:String,reflect:!0})],ht.prototype,"label",2);pt([g({type:String,reflect:!1})],ht.prototype,"description",2);pt([g({type:String,reflect:!0})],ht.prototype,"license",2);pt([C(),Ti({slot:"entry",flatten:!0})],ht.prototype,"entries",2);pt([g({type:String,reflect:!0})],ht.prototype,"slug",2);pt([g()],ht.prototype,"columns",2);pt([g()],ht.prototype,"breakpoint",2);pt([g({type:String,reflect:!0})],ht.prototype,"grouping",2);pt([C()],ht.prototype,"groups",2);pt([g({type:String})],ht.prototype,"files",2);pt([g({type:String,reflect:!0})],ht.prototype,"analysis1",2);pt([g({type:String,reflect:!0})],ht.prototype,"analysis2",2);pt([g({type:String,reflect:!0})],ht.prototype,"analysis3",2);pt([g({type:String,reflect:!0})],ht.prototype,"analysis4",2);pt([g({type:String,reflect:!0})],ht.prototype,"analysis5",2);pt([g({type:String,reflect:!0})],ht.prototype,"analysis6",2);pt([g({type:String,reflect:!0})],ht.prototype,"analysis7",2);pt([g({type:String,reflect:!0,converter:ct(!1)})],ht.prototype,"preservetime",2);ht=pt([te("thermal-group-app")],ht);var N0=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,Ii=(r,e,t,i)=>{for(var s=i>1?void 0:i?W0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&N0(e,t,s),s};let Cr=class extends Mi{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=ge(),this.indicatorRef=ge()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof hi?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=Bo(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?L:m`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${we(this.timelineRef)}
                @click=${r=>this.handleTimelineClick(r)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${we(this.indicatorRef)}></div>
            </div>

            ${this.longestDurationInMs!==void 0?td(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):L}

        </div>`}};Cr.TICK_WIDTH=50;Cr.TICK_POINTER_HEIGHT=3;Cr.styles=me`


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


        ${rd}
    
    `;Ii([C()],Cr.prototype,"longestDurationInMs",2);Ii([C()],Cr.prototype,"ms",2);Ii([C()],Cr.prototype,"pointerMs",2);Ii([C()],Cr.prototype,"playing",2);Ii([C()],Cr.prototype,"instances",2);Ii([C()],Cr.prototype,"has",2);Ii([C()],Cr.prototype,"ticks",2);Cr=Ii([te("group-timeline")],Cr);var H0=Object.defineProperty,B0=Object.getOwnPropertyDescriptor,Er=(r,e,t,i)=>{for(var s=i>1?void 0:i?B0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&H0(e,t,s),s};let lr=class extends Tl{constructor(){super(...arguments),this.registryProviderRef=ge(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=Oa(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof Wt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return m`
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
        `}};lr.styles=me`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;Er([g({type:String,reflect:!0,attribute:!0})],lr.prototype,"palette",2);Er([g({type:Number,reflect:!0})],lr.prototype,"from",2);Er([g({type:Number,reflect:!0})],lr.prototype,"to",2);Er([g()],lr.prototype,"slug",2);Er([g({type:String,reflect:!0})],lr.prototype,"grouping",2);Er([g({type:String,reflect:!0})],lr.prototype,"columns",2);Er([g({type:Number,reflect:!0})],lr.prototype,"breakpoint",2);Er([g({type:String,reflect:!0})],lr.prototype,"groups",2);Er([g({type:String,reflect:!0})],lr.prototype,"autogroups",2);Er([Ti({flatten:!0}),C()],lr.prototype,"entries",2);Er([C()],lr.prototype,"registry",2);lr=Er([te("thermal-registry-app")],lr);var V0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,bi=(r,e,t,i)=>{for(var s=i>1?void 0:i?G0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&V0(e,t,s),s};let jr=class extends gt{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=ge()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await Uu(this.elementContext.element.getTourableRoot(),this,{middleware:[Iu(20),zy({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return m`<div class=${Xt(r)}>

            <div id="arrow" ${this.arrowRef} class="arrow" style="position:absolute;"></div>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${()=>{var n;return(n=this.tour)==null?void 0:n.deactivate()}}>X</button> 
            </div>
            <div class="content">
                
                <slot></slot>

                ${this.youtube?m`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:L}

            </div>

            <div class="buttons">

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?m`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${_(P.back)}</thermal-button>`:L} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?m`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${_(P.next)}</thermal-button>`:L}          
            
            </div>

            

        </div>
        `}};jr.styles=me`

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
    
    `;bi([g({type:String})],jr.prototype,"label",2);bi([C()],jr.prototype,"active",2);bi([g({type:String,reflect:!0})],jr.prototype,"displayed",2);bi([g({type:String})],jr.prototype,"placement",2);bi([ye({context:xu,subscribe:!0})],jr.prototype,"tour",2);bi([ye({context:Su,subscribe:!0})],jr.prototype,"definition",2);bi([ye({context:$u,subscribe:!0})],jr.prototype,"elementContext",2);bi([g({type:String})],jr.prototype,"youtube",2);jr=bi([te("tour-step")],jr);var Y0=Object.defineProperty,q0=Object.getOwnPropertyDescriptor,xr=(r,e,t,i)=>{for(var s=i>1?void 0:i?q0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Y0(e,t,s),s};let Jt=class extends gt{constructor(){super(...arguments),this.loading=!0,this.cls="md",this.palette="jet",this.showhistogram=!1,this.groupRef=ge(),this.group=void 0,this.clsx={xs:1,sm:2,md:3,lg:4,xl:5}}connectedCallback(){super.connectedCallback(),this.url!==void 0&&this.folder}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.disconnect(),this.resizeObserver=void 0}firstUpdated(r){super.firstUpdated(r),this.groupRef.value&&(this.group=this.groupRef.value.group)}updated(r){var e;if(super.updated(r),(r.has("folder")||r.has("url")||r.has("subfolder"))&&(this.folder,this.url&&this.loadData(this.url,this.folder,this.subfolder)),r.has("data")){(e=this.resizeObserver)==null||e.disconnect(),delete this.resizeObserver,this.resizeObserver=new ResizeObserver(i=>{const n=i[0].contentRect.width;if(this.lastWidth!==n){let a="xs";n>500&&(a="sm"),n>900&&(a="md"),n>1300&&(a="lg"),n>1600&&(a="xl"),this.cls=a,this.lastWidth=n}});const t=this.renderRoot.querySelector(".files");t&&this.resizeObserver.observe(t)}}getUrl(r,e,t){return t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e}async loadData(r,e,t){try{this.loading=!0,this.group&&this.group.files.clearAllListeners();const i=t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e,s=await fetch(i,{});s.ok?(this.data=await s.json(),this.loading=!1,this.data.success===!1&&(this.error=`The remote folder <code>${i}</code> was not found!`)):(this.error=`The remote folder <code>${i}</code> was not found!`,this.loading=!1)}catch{this.error=`The remote folder <code>${r}</code> was not found!`,this.loading=!1}}renderloading(){return m`<div>

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

                        ${this.data.info.description?m`<p>${this.data.info.description}</p>`:L}

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
            `}return L}render(){var e;let r=_(P.loading)+"...";return((e=this.data)==null?void 0:e.info)!==void 0&&(r=this.data.info.name),this.error!==void 0&&(r="Error"),m`
            <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                <registry-provider slug="folders_app_registry">
                    <group-provider slug="folders_app_group" ${we(this.groupRef)}>
        
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

                            ${this.showhistogram?m`<registry-histogram></registry-histogram>`:L}
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>`:L}
                            
                        ${this.error?Nt(this.error):L}

                        ${this.error===void 0&&this.data?this.renderData(this.data):L}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`}};Jt.styles=me`


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

    `;xr([g({type:String,reflect:!0})],Jt.prototype,"url",2);xr([g({type:String,reflect:!0})],Jt.prototype,"subfolder",2);xr([g({type:String,reflect:!0})],Jt.prototype,"folder",2);xr([C()],Jt.prototype,"error",2);xr([C()],Jt.prototype,"loading",2);xr([C()],Jt.prototype,"data",2);xr([C()],Jt.prototype,"label",2);xr([C()],Jt.prototype,"cls",2);xr([g({type:String,reflect:!0})],Jt.prototype,"license",2);xr([g({type:String,reflect:!0})],Jt.prototype,"author",2);xr([g({type:String,reflect:!0,attribute:!0})],Jt.prototype,"palette",2);xr([g({type:String,reflect:!0,converter:ct(!0)})],Jt.prototype,"showhistogram",2);Jt=xr([te("remote-folder-app")],Jt);var ni=(r=>(r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(ni||{});const X0={lessThanXSeconds:{one:{regular:"méně než 1 sekunda",past:"před méně než 1 sekundou",future:"za méně než 1 sekundu"},few:{regular:"méně než {{count}} sekundy",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekundy"},many:{regular:"méně než {{count}} sekund",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekund"}},xSeconds:{one:{regular:"1 sekunda",past:"před 1 sekundou",future:"za 1 sekundu"},few:{regular:"{{count}} sekundy",past:"před {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"před {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než 1 minuta",past:"před méně než 1 minutou",future:"za méně než 1 minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"1 minuta",past:"před 1 minutou",future:"za 1 minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně 1 hodina",past:"přibližně před 1 hodinou",future:"přibližně za 1 hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"1 hodina",past:"před 1 hodinou",future:"za 1 hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"1 den",past:"před 1 dnem",future:"za 1 den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXWeeks:{one:{regular:"přibližně 1 týden",past:"přibližně před 1 týdnem",future:"přibližně za 1 týden"},few:{regular:"přibližně {{count}} týdny",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdny"},many:{regular:"přibližně {{count}} týdnů",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdnů"}},xWeeks:{one:{regular:"1 týden",past:"před 1 týdnem",future:"za 1 týden"},few:{regular:"{{count}} týdny",past:"před {{count}} týdny",future:"za {{count}} týdny"},many:{regular:"{{count}} týdnů",past:"před {{count}} týdny",future:"za {{count}} týdnů"}},aboutXMonths:{one:{regular:"přibližně 1 měsíc",past:"přibližně před 1 měsícem",future:"přibližně za 1 měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"1 měsíc",past:"před 1 měsícem",future:"za 1 měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně 1 rok",past:"přibližně před 1 rokem",future:"přibližně za 1 rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"1 rok",past:"před 1 rokem",future:"za 1 rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než 1 rok",past:"před více než 1 rokem",future:"za více než 1 rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro 1 rok",past:"skoro před 1 rokem",future:"skoro za 1 rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}},K0=(r,e,t)=>{let i;const s=X0[r];s.type==="other"?i=s.other:e===1?i=s.one:e>1&&e<5?i=s.few:i=s.many;const n=(t==null?void 0:t.addSuffix)===!0,a=t==null?void 0:t.comparison;let o;return n&&a===-1?o=i.past:n&&a===1?o=i.future:o=i.regular,o.replace("{{count}}",String(e))},J0={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},Z0={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Q0={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ew={date:Rt({formats:J0,defaultWidth:"full"}),time:Rt({formats:Z0,defaultWidth:"full"}),dateTime:Rt({formats:Q0,defaultWidth:"full"})},tw=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],rw={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:r=>{const e=r.getDay();return"'v "+tw[e]+" o' p"},other:"P"},iw=(r,e)=>{const t=rw[r];return typeof t=="function"?t(e):t},sw={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},nw={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},aw={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},ow={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},lw={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},hw={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},cw={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},uw=(r,e)=>Number(r)+".",dw={ordinalNumber:uw,era:ot({values:sw,defaultWidth:"wide"}),quarter:ot({values:nw,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ot({values:aw,defaultWidth:"wide",formattingValues:ow,defaultFormattingWidth:"wide"}),day:ot({values:lw,defaultWidth:"wide"}),dayPeriod:ot({values:hw,defaultWidth:"wide",formattingValues:cw,defaultFormattingWidth:"wide"})},pw=/^(\d+)\.?/i,fw=/\d+/i,gw={narrow:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},mw={any:[/^p[řr]/i,/^(po|n)/i]},yw={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},vw={any:[/1/i,/2/i,/3/i,/4/i]},bw={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},ww={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},xw={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},Sw={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[úu]t/i,/^st/i,/^[čc]t/i,/^p[áa]/i,/^so/i]},$w={any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i},kw={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},Pw={ordinalNumber:sn({matchPattern:pw,parsePattern:fw,valueCallback:r=>parseInt(r,10)}),era:lt({matchPatterns:gw,defaultMatchWidth:"wide",parsePatterns:mw,defaultParseWidth:"any"}),quarter:lt({matchPatterns:yw,defaultMatchWidth:"wide",parsePatterns:vw,defaultParseWidth:"any",valueCallback:r=>r+1}),month:lt({matchPatterns:bw,defaultMatchWidth:"wide",parsePatterns:ww,defaultParseWidth:"any"}),day:lt({matchPatterns:xw,defaultMatchWidth:"wide",parsePatterns:Sw,defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:$w,defaultMatchWidth:"any",parsePatterns:kw,defaultParseWidth:"any"})},_w={code:"cs",formatDistance:K0,formatLong:ew,formatRelative:iw,localize:dw,match:Pw,options:{weekStartsOn:1,firstWeekContainsDate:4}},Cw={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},Ow=(r,e,t)=>{let i;const s=Cw[r];return typeof s=="string"?i=s:e===1?i=s.one:e===2&&s.two?i=s.two:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"mewn "+i:i+" yn ôl":i},Aw={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Ew={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Lw={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Dw={date:Rt({formats:Aw,defaultWidth:"full"}),time:Rt({formats:Ew,defaultWidth:"full"}),dateTime:Rt({formats:Lw,defaultWidth:"full"})},Rw={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},Tw=(r,e,t,i)=>Rw[r],Mw={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},Iw={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},Uw={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},zw={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},Fw={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},jw={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},Nw=(r,e)=>{const t=Number(r);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||t===80||t>=100)return t+"fed";return t+"ain"},Ww={ordinalNumber:Nw,era:ot({values:Mw,defaultWidth:"wide"}),quarter:ot({values:Iw,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ot({values:Uw,defaultWidth:"wide"}),day:ot({values:zw,defaultWidth:"wide"}),dayPeriod:ot({values:Fw,defaultWidth:"wide",formattingValues:jw,defaultFormattingWidth:"wide"})},Hw=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,Bw=/\d+/i,Vw={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},Gw={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},Yw={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},qw={any:[/1/i,/2/i,/3/i,/4/i]},Xw={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},Kw={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},Jw={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},Zw={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},Qw={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},e1={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},t1={ordinalNumber:sn({matchPattern:Hw,parsePattern:Bw,valueCallback:r=>parseInt(r,10)}),era:lt({matchPatterns:Vw,defaultMatchWidth:"wide",parsePatterns:Gw,defaultParseWidth:"any"}),quarter:lt({matchPatterns:Yw,defaultMatchWidth:"wide",parsePatterns:qw,defaultParseWidth:"any",valueCallback:r=>r+1}),month:lt({matchPatterns:Xw,defaultMatchWidth:"wide",parsePatterns:Kw,defaultParseWidth:"any"}),day:lt({matchPatterns:Jw,defaultMatchWidth:"wide",parsePatterns:Zw,defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:Qw,defaultMatchWidth:"any",parsePatterns:e1,defaultParseWidth:"any"})},r1={code:"cy",formatDistance:Ow,formatLong:Dw,formatRelative:Tw,localize:Ww,match:t1,options:{weekStartsOn:0,firstWeekContainsDate:1}},gc={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},i1=(r,e,t)=>{let i;const s=t!=null&&t.addSuffix?gc[r].withPreposition:gc[r].standalone;return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:"vor "+i:i},s1={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},n1={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},a1={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},o1={date:Rt({formats:s1,defaultWidth:"full"}),time:Rt({formats:n1,defaultWidth:"full"}),dateTime:Rt({formats:a1,defaultWidth:"full"})},l1={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},h1=(r,e,t,i)=>l1[r],c1={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},u1={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Go={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},d1={narrow:Go.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Go.wide},p1={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},f1={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},g1={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},m1=r=>Number(r)+".",y1={ordinalNumber:m1,era:ot({values:c1,defaultWidth:"wide"}),quarter:ot({values:u1,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ot({values:Go,formattingValues:d1,defaultWidth:"wide"}),day:ot({values:p1,defaultWidth:"wide"}),dayPeriod:ot({values:f1,defaultWidth:"wide",formattingValues:g1,defaultFormattingWidth:"wide"})},v1=/^(\d+)(\.)?/i,b1=/\d+/i,w1={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},x1={any:[/^v/i,/^n/i]},S1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},$1={any:[/1/i,/2/i,/3/i,/4/i]},k1={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},P1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_1={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},C1={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},O1={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},A1={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},E1={ordinalNumber:sn({matchPattern:v1,parsePattern:b1,valueCallback:r=>parseInt(r)}),era:lt({matchPatterns:w1,defaultMatchWidth:"wide",parsePatterns:x1,defaultParseWidth:"any"}),quarter:lt({matchPatterns:S1,defaultMatchWidth:"wide",parsePatterns:$1,defaultParseWidth:"any",valueCallback:r=>r+1}),month:lt({matchPatterns:k1,defaultMatchWidth:"wide",parsePatterns:P1,defaultParseWidth:"any"}),day:lt({matchPatterns:_1,defaultMatchWidth:"wide",parsePatterns:C1,defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:O1,defaultMatchWidth:"wide",parsePatterns:A1,defaultParseWidth:"any"})},L1={code:"de",formatDistance:i1,formatLong:o1,formatRelative:h1,localize:y1,match:E1,options:{weekStartsOn:1,firstWeekContainsDate:4}},D1={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},R1={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},T1={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},M1={date:Rt({formats:D1,defaultWidth:"full"}),time:Rt({formats:R1,defaultWidth:"full"}),dateTime:Rt({formats:T1,defaultWidth:"full"})},I1={code:"en-GB",formatDistance:Wc,formatLong:M1,formatRelative:Hc,localize:Bc,match:Vc,options:{weekStartsOn:1,firstWeekContainsDate:4}},U1={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},z1=(r,e,t)=>{let i;const s=U1[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dans "+i:"il y a "+i:i},F1={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},j1={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},N1={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},W1={date:Rt({formats:F1,defaultWidth:"full"}),time:Rt({formats:j1,defaultWidth:"full"}),dateTime:Rt({formats:N1,defaultWidth:"full"})},H1={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},B1=(r,e,t,i)=>H1[r],V1={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},G1={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},Y1={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},q1={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},X1={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},K1=(r,e)=>{const t=Number(r),i=e==null?void 0:e.unit;if(t===0)return"0";const s=["year","week","hour","minute","second"];let n;return t===1?n=i&&s.includes(i)?"ère":"er":n="ème",t+n},J1=["MMM","MMMM"],Z1={preprocessor:(r,e)=>r.getDate()===1||!e.some(i=>i.isToken&&J1.includes(i.value))?e:e.map(i=>i.isToken&&i.value==="do"?{isToken:!0,value:"d"}:i),ordinalNumber:K1,era:ot({values:V1,defaultWidth:"wide"}),quarter:ot({values:G1,defaultWidth:"wide",argumentCallback:r=>r-1}),month:ot({values:Y1,defaultWidth:"wide"}),day:ot({values:q1,defaultWidth:"wide"}),dayPeriod:ot({values:X1,defaultWidth:"wide"})},Q1=/^(\d+)(ième|ère|ème|er|e)?/i,ex=/\d+/i,tx={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},rx={any:[/^av/i,/^ap/i]},ix={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},sx={any:[/1/i,/2/i,/3/i,/4/i]},nx={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},ax={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},ox={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},lx={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},hx={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},cx={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},ux={ordinalNumber:sn({matchPattern:Q1,parsePattern:ex,valueCallback:r=>parseInt(r)}),era:lt({matchPatterns:tx,defaultMatchWidth:"wide",parsePatterns:rx,defaultParseWidth:"any"}),quarter:lt({matchPatterns:ix,defaultMatchWidth:"wide",parsePatterns:sx,defaultParseWidth:"any",valueCallback:r=>r+1}),month:lt({matchPatterns:nx,defaultMatchWidth:"wide",parsePatterns:ax,defaultParseWidth:"any"}),day:lt({matchPatterns:ox,defaultMatchWidth:"wide",parsePatterns:lx,defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:hx,defaultMatchWidth:"any",parsePatterns:cx,defaultParseWidth:"any"})},dx={code:"fr",formatDistance:z1,formatLong:W1,formatRelative:B1,localize:Z1,match:ux,options:{weekStartsOn:1,firstWeekContainsDate:4}};var px=Object.defineProperty,fx=Object.getOwnPropertyDescriptor,Et=(r,e,t,i)=>{for(var s=i>1?void 0:i?fx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&px(e,t,s),s};const gx={en:I1,fr:dx,de:L1,cy:r1,cs:_w};let wt=class extends gt{constructor(){super(...arguments),this.palette="jet",this.enablegrouping=!1,this.loadingInfo=!1,this.loadingData=!1,this.only=[],this.state=0,this.by=ni.HOURS,this.folders={},this.registryRef=ge(),this.interactiveAnalysis=!0}updated(r){super.updated(r),(r.has("url")||r.has("subfolder"))&&this.loadInfo(this.url,this.subfolder),(r.has("only")||r.has("by"))&&this.url!==void 0&&this.loadData(this.only,this.by,this.url,this.subfolder)}getApiUrl(r,e){return e!==void 0?`${r}?subfolder="${e}"`:r}async loadInfo(r,e){this.loadingInfo=!0;const t=e!==void 0?`${r}?scope=${e}`:r,i=await fetch(t);if(i.ok){const s=await i.json();this.info=s,this.folders=s.folders,this.loadingInfo=!1}}async loadData(r,e,t,i){if(this.dataOnly=void 0,this.dataMultiple=void 0,r.length===0)return;this.loadingData=!0;const s=[];i&&s.push(`scope=${i}`);const n=r.length===1;n?s.push(r[0]):(s.push(e),s.push(`only=${r.join(",")}`),s.push("grid"));const a=t+"?"+s.join("&"),o=async h=>{const u=await fetch(h);if(u.ok){const d=await u.json();if("data"in d){const p=Object.entries(d.data).map(([b,w])=>{const $=Object.entries(w);$.sort((H,O)=>H[0]<O[0]?-1:1);const k=Object.fromEntries($);return[b,k]});d.data=Object.fromEntries(p)}return d}return!1},l=n?await o(a):await o(a);this.registryRef.value&&(this.state===1?this.registryRef.value.registry.groups.addListener(this.UUID,h=>{h.forEach(u=>u.files.addListener(this.UUID,d=>{d[0]&&u.analysisSync.turnOn(d[0])}))}):this.registryRef.value.registry.groups.removeListener(this.UUID)),l===!1?this.error="There was an error loading data":"files"in l?this.dataOnly=l:"folders"in l&&(this.dataMultiple=l),this.loadingData=!1}renderMainScreen(){return m`
<div class="screen screen-main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(r=>m`
        <button class="screen-main-folder" @click=${()=>this.actionOpenOneFolder(r.folder)}>
            <h1>${r.name}</h1>
            ${r.description!==void 0?m`<p>${r.description}</p>`:L}
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
                    ${this.renderFileInner(r,()=>st.human(r.timestamp*1e3))}
                    </div>`)}
            
            </group-provider>   
        `}renderMultiple(){if(this.loadingData||this.dataMultiple===void 0)return this.renderLoading("Načítám data...");const r=this.dataMultiple.data,t=Object.entries(Object.values(Object.values(this.dataMultiple.data))[0]).map(([i,s])=>({name:s.name,key:i})).length;return m`

            <table class="affected">

                <tbody>
                ${Object.entries(r).map(([i,s])=>{let n;const a=parseInt(i)*1e3;return this.by===ni.HOURS?n=_e(a,"d. M. yyyy - HH")+":00":this.by===ni.DAYS?n=_e(a,"d. M. yyyy"):this.by===ni.WEEKS?n=_e(a,"wo"):this.by===ni.MONTHS?n=_e(a,"LLLL yyyy",{locale:gx[this.locale]}):this.by===ni.YEARS&&(n=_e(a,"yyyy")),m`
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
                                    ${Object.values(o.files).map(l=>this.renderFileInner(l,h=>{const u=h.timestamp*1e3;return this.by===ni.HOURS||this.by===ni.DAYS?_e(u,"HH:ii"):st.human(u)}))}
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
        `}renderInfo(){if(this.state===0)return L;let r;if(this.state===1){const e=this.folders[this.only[0]],t=Object.values(this.folders).filter(n=>n.folder!==e.folder),i=m`<thermal-dropdown variant="background" class="selector">
                <span slot="invoker">${e.name}</span>

                ${t.map(n=>m`<div slot="option" @click=${()=>this.actionOpenOneFolder(n.folder)}>
                    <thermal-button>${n.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`,s=t.map((n,a)=>m`<thermal-button @click=${()=>this.actionToggleFolder(n.folder)}>
                <span class="button-inline-icon">+</span> ${n.name}
            </thermal-button> ${a!==t.length-1?` ${_(P.or)} `:L}`);r=m`${_(P.showingfolder)} ${i}. 
            
            ${t.length>0?m` ${_(P.doyouwanttoadd)} ${s}?`:L}
            `}else if(this.state===2){const e=[],t=[];Object.values(this.folders).forEach(i=>{this.only.includes(i.folder)?e.push(i):t.push(i)}),r=m`

                ${_(P.showingfolders)}
                ${e.map((i,s)=>m`<thermal-button 
                    title="${_(P.remove)}" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(i.folder)}
                >
                    ${i.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${s!==e.length-1?` ${_(P.and)} `:L}`)}
                ${_(P.groupped)} ${this.renderTimeToggle()}.
            

            ${t.length>0?m`${_(P.youmayalsoadd)} ${t.map((i,s)=>m`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(i.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${i.name}
                    </thermal-button>
                    ${s!==t.length-1?` ${_(P.or)} `:L}
                `)}.`:L}

            `}return r===void 0?L:m`<div class="info">
            ${r}
        </div>`}renderBrowser(){const r=Object.values(this.folders).filter(e=>this.only.includes(e.folder));return m`

        <nav class="info-sticky-content">

            <div class="info-sticky-content-wrapper">

                ${this.enablegrouping?this.renderInfo():L}
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
            </table>`:L}

        </nav>

        

        <section>
            ${this.state===1?this.renderOne():L}
            ${this.state===2?this.renderMultiple():L}
        </section>
        
`}renderApp(){return this.info===void 0?this.renderLoading("Načítám základní informaci"):this.state===0?this.renderMainScreen():this.renderBrowser()}render(){var e;const r=this.loadingInfo===!0?_(P.loading)+"...":this.label&&this.label.trim().length>0?this.label:_(P.remotefoldersbrowser);return m`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${we(this.registryRef)}>

        <thermal-app author="${fe(this.author)}" license="${fe(this.license)}">

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

                </thermal-dropdown>`:L}

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
                                    </li>`:L}

                                ${this.state===2&&this.dataMultiple!==void 0?m`
                                        ${Object.values(this.dataMultiple.data).map(t=>m`<li>${t}</li>`)}
                                    `:L}
                                
                            </ul>
                        </ul>   
                    
                    </div>
                </thermal-dialog>
                ${this.state===1&&this.dataOnly!==void 0?m`<group-provider slug="${this.dataOnly.info.folder}">
                        <group-download-dropdown></group-download-dropdown>
                    </group-provider>`:L}
                <registry-opacity-slider></registry-opacity-slider>
                `:L}
            
            </thermal-bar>
        
        </header>
        
            <div class=${Xt({screen:!0,"screen-main":this.state===0,"screen-browser":[1,2].includes(this.state),"screen-browser__one":this.state===1,"screen-browser__multiple":this.state===2})}>
                ${this.renderApp()}
            </div>

        </thermal-app>

    </registry-provider>
</manager-provider>
        
        `}};wt.styles=me`

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
    
    `;Et([g({type:String,reflect:!0})],wt.prototype,"label",2);Et([g({type:String,reflect:!0})],wt.prototype,"license",2);Et([g({type:String,reflect:!0})],wt.prototype,"author",2);Et([g({type:String,reflect:!0,attribute:!0})],wt.prototype,"palette",2);Et([g({type:Boolean,reflect:!0,converter:ct(!0)})],wt.prototype,"enablegrouping",2);Et([g({type:String,reflect:!0})],wt.prototype,"url",2);Et([g({type:String,reflect:!0})],wt.prototype,"subfolder",2);Et([C()],wt.prototype,"info",2);Et([C()],wt.prototype,"error",2);Et([C()],wt.prototype,"loadingInfo",2);Et([C()],wt.prototype,"loadingData",2);Et([C()],wt.prototype,"only",2);Et([C()],wt.prototype,"state",2);Et([C()],wt.prototype,"by",2);Et([C()],wt.prototype,"dataOnly",2);Et([C()],wt.prototype,"dataMultiple",2);Et([C()],wt.prototype,"folders",2);Et([ue({context:Ji})],wt.prototype,"interactiveAnalysis",2);wt=Et([te("remote-browser-app")],wt);var mx=Object.defineProperty,yx=Object.getOwnPropertyDescriptor,Lr=(r,e,t,i)=>{for(var s=i>1?void 0:i?yx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mx(e,t,s),s};let hr=class extends gt{constructor(){super(...arguments),this.by="days",this.loading=!1,this.heightRange=0,this.heightFolders=0,this.registryRef=ge(),this.palette="jet"}connectedCallback(){super.connectedCallback()}updated(r){super.updated(r),(r.has("by")||r.has("url")||r.has("subfolder"))&&this.loadData(this.by,this.url,this.subfolder)}getUrl(r,e,t){let i=e+`?${r}&grid`;return t&&(i+=`&scope=${t}`),i}async loadData(r,e,t){this.loading=!0,this.data=void 0,this.registryRef.value&&this.registryRef.value.registry.groups.removeAllGroups();try{const i=this.getUrl(r,e,t),s=await fetch(i,{});if(s.ok){const n=await s.json(),a=Object.entries(n.data).map(([o,l])=>{const h=Object.entries(l);h.sort((d,p)=>d[0]<p[0]?-1:1);const u=Object.fromEntries(h);return[o,u]});n.data=Object.fromEntries(a),this.data=n,this.loading=!1,this.log(this.data),this.observer=new ResizeObserver(o=>{this.log(o),o[0]&&(this.heightFolders=this.getFoldersHeight(),this.heightRange=this.getRangeHeight())}),this.observer.observe(this)}else throw new Error("Data not OK!")}catch{this.loading=!1}}getRangeHeight(){const r=this.renderRoot.querySelector("#range");return console.log(r),r!==null?r.clientHeight:0}getFoldersHeight(){const r=this.renderRoot.querySelector("#folders");return r!==null?r.clientHeight:0}getGroupLabel(r){return this.by==="hours"?_e(r,"d. M.yyyy - mm:ss"):this.by==="days"?_e(r,"d. M. yyyy"):this.by==="weeks"?_e(r,"I")+" roku "+_e(r,"yyyy"):this.by==="months"?_e(r,"M"):this.by==="years"?_e(r,"yyyy"):r.toString()}getItemLabel(r){return this.by==="hours"?_e(r,"h:mm:ss"):this.by==="days"?_e(r,"H:mm:ss"):this.by==="weeks"?_e(r,"I")+" roku "+_e(r,"yyyy"):this.by==="months"?_e(r,"M"):this.by==="years"?_e(r,"yyyy"):r.toString()}renderFile(r){return m`
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
                                    <group-provider slug=${fe(s)}>
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

                        <group-provider class="group-files" slug=${fe(s)}>
                            ${Object.values(n).map(o=>m`<td style="width: ${i};">
                                        <div class="cell-group">

                                        ${o.count>0?Object.values(o.files).map(this.renderFile.bind(this)):L}

                                        </div>
                                </td>`)}
                        </group-provider>
                    `})}

            </table>
            
        `}render(){const r=this.loading?_(P.loading)+"":this.label??"Remote folder";return m`
                <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                    <registry-provider slug="folders_app_registry" ${we(this.registryRef)}>
            
                            <thermal-app
                                author=${fe(this.author)}
                                license=${fe(this.license)}
                            >
    
                                <thermal-button variant="foreground" interactive="false" slot="bar">
                                    ${r}
                                </thermal-button>


                                ${this.data?this.renderGrid(this.data):L}
    
                    
                        </thermal-app>
                </registry-provider>
            </manager-provider>`}};hr.styles=me`
    
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
    
    `;Lr([g({type:String,reflect:!0})],hr.prototype,"url",2);Lr([g({type:String,reflect:!0})],hr.prototype,"subfolder",2);Lr([g({type:String,reflect:!0})],hr.prototype,"by",2);Lr([C()],hr.prototype,"loading",2);Lr([g({type:String,reflect:!0})],hr.prototype,"license",2);Lr([g({type:String,reflect:!0})],hr.prototype,"label",2);Lr([g({type:String,reflect:!0})],hr.prototype,"author",2);Lr([C()],hr.prototype,"data",2);Lr([C()],hr.prototype,"heightRange",2);Lr([C()],hr.prototype,"heightFolders",2);Lr([g({type:String,reflect:!0,attribute:!0})],hr.prototype,"palette",2);hr=Lr([te("remote-grid-app")],hr);const Po=window.matchMedia("(prefers-color-scheme: dark)"),Ml="thermal-dark-mode",mc=()=>{document.body.classList.add(Ml)},vx=()=>{document.body.classList.remove(Ml)},bx=()=>{Po.matches&&mc();const r=e=>{e.matches?mc():vx()};Po.addEventListener("change",r),Po.addListener(r)},wx=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)},xx=Yo.toString().replaceAll(".","-"),Sx=r=>`thermal__${r}__${xx}`,yc=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",Sx(r)),t.innerHTML=e,document.head.appendChild(t)},$x=()=>{yc("rootVariables",`

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


            
        
        `),yc("darkModeOverrides",`
        
            body.${Ml} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};wx();console.info(`@labir/embed ${Yo}
Author: ${Cd}`);bx();$x();
