var Sc=Object.defineProperty;var kc=(t,e,r)=>e in t?Sc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(kc(t,typeof e!="symbol"?e+"":e,r),r);const qn="1.2.41",Pc="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=globalThis,Xn=di.ShadowRoot&&(di.ShadyCSS===void 0||di.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kn=Symbol(),Xa=new WeakMap;let Uo=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==Kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Xn&&e===void 0){const s=r!==void 0&&r.length===1;s&&(e=Xa.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Xa.set(r,e))}return e}toString(){return this.cssText}};const Ac=t=>new Uo(typeof t=="string"?t:t+"",void 0,Kn),pe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((s,i,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new Uo(r,t,Kn)},Oc=(t,e)=>{if(Xn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const s=document.createElement("style"),i=di.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},Ka=Xn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const s of e.cssRules)r+=s.cssText;return Ac(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Dc,defineProperty:Ec,getOwnPropertyDescriptor:Tc,getOwnPropertyNames:Lc,getOwnPropertySymbols:Rc,getPrototypeOf:Mc}=Object,fr=globalThis,Za=fr.trustedTypes,Uc=Za?Za.emptyScript:"",Pn=fr.reactiveElementPolyfillSupport,vs=(t,e)=>t,gi={toAttribute(t,e){switch(e){case Boolean:t=t?Uc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Zn=(t,e)=>!Dc(t,e),Qa={attribute:!0,type:String,converter:gi,reflect:!1,hasChanged:Zn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),fr.litPropertyMetadata??(fr.litPropertyMetadata=new WeakMap);let Nr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Qa){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,r);i!==void 0&&Ec(this.prototype,e,i)}}static getPropertyDescriptor(e,r,s){const{get:i,set:n}=Tc(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const l=i==null?void 0:i.call(this);n.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qa}static _$Ei(){if(this.hasOwnProperty(vs("elementProperties")))return;const e=Mc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vs("properties"))){const r=this.properties,s=[...Lc(r),...Rc(r)];for(const i of s)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)r.unshift(Ka(i))}else e!==void 0&&r.push(Ka(e));return r}static _$Eu(e,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EC(e,r){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const a=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:gi).toAttribute(r,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,r){var n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:gi;this._$Em=i,this[i]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Zn)(this[e],r))return;this.P(e,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,s){this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Nr.elementStyles=[],Nr.shadowRootOptions={mode:"open"},Nr[vs("elementProperties")]=new Map,Nr[vs("finalized")]=new Map,Pn==null||Pn({ReactiveElement:Nr}),(fr.reactiveElementVersions??(fr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys=globalThis,vi=ys.trustedTypes,Ja=vi?vi.createPolicy("lit-html",{createHTML:t=>t}):void 0,Io="$lit$",pr=`lit$${Math.random().toFixed(9).slice(2)}$`,Fo="?"+pr,Ic=`<${Fo}>`,Dr=document,xs=()=>Dr.createComment(""),_s=t=>t===null||typeof t!="object"&&typeof t!="function",jo=Array.isArray,Fc=t=>jo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",An=`[ 	
\f\r]`,fs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eo=/-->/g,to=/>/g,Sr=RegExp(`>|${An}(?:([^\\s"'>=/]+)(${An}*=${An}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ro=/'/g,so=/"/g,Wo=/^(?:script|style|textarea|title)$/i,jc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),v=jc(1),mr=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),io=new WeakMap,Pr=Dr.createTreeWalker(Dr,129);function No(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ja!==void 0?Ja.createHTML(e):e}const Wc=(t,e)=>{const r=t.length-1,s=[];let i,n=e===2?"<svg>":"",a=fs;for(let l=0;l<r;l++){const h=t[l];let p,m,f=-1,b=0;for(;b<h.length&&(a.lastIndex=b,m=a.exec(h),m!==null);)b=a.lastIndex,a===fs?m[1]==="!--"?a=eo:m[1]!==void 0?a=to:m[2]!==void 0?(Wo.test(m[2])&&(i=RegExp("</"+m[2],"g")),a=Sr):m[3]!==void 0&&(a=Sr):a===Sr?m[0]===">"?(a=i??fs,f=-1):m[1]===void 0?f=-2:(f=a.lastIndex-m[2].length,p=m[1],a=m[3]===void 0?Sr:m[3]==='"'?so:ro):a===so||a===ro?a=Sr:a===eo||a===to?a=fs:(a=Sr,i=void 0);const x=a===Sr&&t[l+1].startsWith("/>")?" ":"";n+=a===fs?h+Ic:f>=0?(s.push(p),h.slice(0,f)+Io+h.slice(f)+pr+x):h+pr+(f===-2?l:x)}return[No(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),s]};let In=class Ho{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,a=0;const l=e.length-1,h=this.parts,[p,m]=Wc(e,r);if(this.el=Ho.createElement(p,s),Pr.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Pr.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Io)){const b=m[a++],x=i.getAttribute(f).split(pr),S=/([.?@])?(.*)/.exec(b);h.push({type:1,index:n,name:S[2],strings:x,ctor:S[1]==="."?Hc:S[1]==="?"?Bc:S[1]==="@"?zc:Di}),i.removeAttribute(f)}else f.startsWith(pr)&&(h.push({type:6,index:n}),i.removeAttribute(f));if(Wo.test(i.tagName)){const f=i.textContent.split(pr),b=f.length-1;if(b>0){i.textContent=vi?vi.emptyScript:"";for(let x=0;x<b;x++)i.append(f[x],xs()),Pr.nextNode(),h.push({type:2,index:++n});i.append(f[b],xs())}}}else if(i.nodeType===8)if(i.data===Fo)h.push({type:2,index:n});else{let f=-1;for(;(f=i.data.indexOf(pr,f+1))!==-1;)h.push({type:7,index:n}),f+=pr.length-1}n++}}static createElement(e,r){const s=Dr.createElement("template");return s.innerHTML=e,s}};function zr(t,e,r=t,s){var a,l;if(e===mr)return e;let i=s!==void 0?(a=r._$Co)==null?void 0:a[s]:r._$Cl;const n=_s(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(e=zr(t,i._$AS(t,e.values),i,s)),e}let Nc=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??Dr).importNode(r,!0);Pr.currentNode=i;let n=Pr.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new Us(n,n.nextSibling,this,e):h.type===1?p=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(p=new Vc(n,this,e)),this._$AV.push(p),h=s[++l]}a!==(h==null?void 0:h.index)&&(n=Pr.nextNode(),a++)}return Pr.currentNode=Dr,i}p(e){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}};class Us{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=zr(this,e,r),_s(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==mr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==B&&_s(this._$AH)?this._$AA.nextSibling.data=e:this.T(Dr.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=In.createElement(No(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(r);else{const a=new Nc(i,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=io.get(e.strings);return r===void 0&&io.set(e.strings,r=new In(e)),r}k(e){jo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const n of e)i===r.length?r.push(s=new Us(this.S(xs()),this.S(xs()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let Di=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,i,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}_$AI(e,r=this,s,i){const n=this.strings;let a=!1;if(n===void 0)e=zr(this,e,r,0),a=!_s(e)||e!==this._$AH&&e!==mr,a&&(this._$AH=e);else{const l=e;let h,p;for(e=n[0],h=0;h<n.length-1;h++)p=zr(this,l[s+h],r,h),p===mr&&(p=this._$AH[h]),a||(a=!_s(p)||p!==this._$AH[h]),p===B?e=B:e!==B&&(e+=(p??"")+n[h+1]),this._$AH[h]=p}a&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Hc=class extends Di{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};class Bc extends Di{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class zc extends Di{constructor(e,r,s,i,n){super(e,r,s,i,n),this.type=5}_$AI(e,r=this){if((e=zr(this,e,r,0)??B)===mr)return;const s=this._$AH,i=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let Vc=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){zr(this,e)}};const On=ys.litHtmlPolyfillSupport;On==null||On(In,Us),(ys.litHtmlVersions??(ys.litHtmlVersions=[])).push("3.1.4");const Yc=(t,e,r)=>{const s=(r==null?void 0:r.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(r==null?void 0:r.renderBefore)??null;s._$litPart$=i=new Us(e.insertBefore(xs(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tt=class extends Nr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return mr}};var Mo;tt._$litElement$=!0,tt.finalized=!0,(Mo=globalThis.litElementHydrateSupport)==null||Mo.call(globalThis,{LitElement:tt});const Dn=globalThis.litElementPolyfillSupport;Dn==null||Dn({LitElement:tt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gc={attribute:!0,type:String,converter:gi,reflect:!1,hasChanged:Zn},qc=(t=Gc,e,r)=>{const{kind:s,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),s==="accessor"){const{name:a}=r;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,h,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(s==="setter"){const{name:a}=r;return function(l){const h=this[a];e.call(this,l),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+s)};function _(t){return(e,r)=>typeof r=="object"?qc(t,e,r):((s,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,a?{...s,wrapped:!0}:s),a?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(t){return _({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Is(t){return(e,r)=>{const{slot:s,selector:i}=t??{},n="slot"+(s?`[name=${s}]`:":not([name])");return Xc(e,r,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return i===void 0?l:l.filter(p=>p.matches(i))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Kc={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function oi(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function li(t){return t.toString().indexOf("`")===-1}li(t=>t``)||li(t=>t`\0`)||li(t=>t`\n`)||li(t=>t`\u0000`);oi``&&oi`\0`&&oi`\n`&&oi`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Zc="google#safe";function Qc(){if(typeof window<"u")return window.trustedTypes}function Bo(){var t;return(t=Qc())!==null&&t!==void 0?t:null}let ci;function Jc(){var t,e;if(ci===void 0)try{ci=(e=(t=Bo())===null||t===void 0?void 0:t.createPolicy(Zc,{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r}))!==null&&e!==void 0?e:null}catch{ci=null}return ci}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class zo{constructor(e,r){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function no(t){var e;const r=t,s=(e=Jc())===null||e===void 0?void 0:e.createScriptURL(r);return s??new zo(r,Kc)}function eh(t){var e;if(!((e=Bo())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof zo)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let r="";throw new Error(r)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Vo(t,...e){if(e.length===0)return no(t[0]);t[0].toLowerCase();let r=t[0];for(let s=0;s<e.length;s++)r+=encodeURIComponent(e[s])+t[s+1];return no(r)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function th(t){var e;const r=t.document,s=(e=r.querySelector)===null||e===void 0?void 0:e.call(r,"script[nonce]");return s&&(s.nonce||s.getAttribute("nonce"))||""}function rh(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,r=th(e||window);r&&t.setAttribute("nonce",r)}function Yo(t,e,r){t.src=eh(e),rh(t)}/**
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
 */const sh=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Yo(r,Vo`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function Go(t={}){await sh;const{version:e="current",packages:r=["corechart"],language:s=document.documentElement.lang||"en",mapsApiKey:i}=t;return google.charts.load(e,{packages:r,language:s,mapsApiKey:i})}async function ao(t){if(await Go(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function ih(t){return await Go(),new google.visualization.ChartWrapper({container:t})}/**
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
 */var ar=function(t,e,r,s){var i=arguments.length,n=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,r):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,s);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n};const oo=["ready","select"],nh={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class Mt extends tt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return v`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){ih(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(oo,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(nh[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(i=>!oo.includes(i)),r);const s=this.shadowRoot.getElementById("styles");s.children.length||this.localizeGlobalStylesheets(s)}),this.redraw()}propagateEvents(e,r){for(const s of e)google.visualization.events.addListener(r,s,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${s}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const s=await ao({cols:r});s.addRows(e),this._data=s}catch(s){this.shadowRoot.getElementById("chartdiv").textContent=String(s)}}dataChanged(){let e=this.data,r;if(!e)return;let s=!1;try{e=JSON.parse(e)}catch{s=typeof e=="string"||e instanceof String}s?r=fetch(e).then(i=>i.json()):r=Promise.resolve(e),r.then(ao).then(i=>{this._data=i})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const s of r){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",s.getAttribute("href")),e.appendChild(i)}}}Mt.styles=pe`
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
  `;ar([_({type:String,reflect:!0})],Mt.prototype,"type",void 0);ar([_({type:Array})],Mt.prototype,"events",void 0);ar([_({type:Object,hasChanged:()=>!0})],Mt.prototype,"options",void 0);ar([_({type:Array})],Mt.prototype,"cols",void 0);ar([_({type:Array})],Mt.prototype,"rows",void 0);ar([_({type:String})],Mt.prototype,"data",void 0);ar([_({type:Object})],Mt.prototype,"view",void 0);ar([_({type:Array})],Mt.prototype,"selection",void 0);ar([_({type:Object})],Mt.prototype,"_data",void 0);customElements.define("google-chart",Mt);/**
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
 */const ah=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Yo(r,Vo`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function qo(t={}){await ah;const{version:e="current",packages:r=["corechart"],language:s=document.documentElement.lang||"en",mapsApiKey:i}=t;return google.charts.load(e,{packages:r,language:s,mapsApiKey:i})}async function lo(t){if(await qo(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function oh(t){return await qo(),new google.visualization.ChartWrapper({container:t})}function At(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Er(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Xo=6048e5,lh=864e5;let ch={};function Ei(){return ch}function $s(t,e){var l,h,p,m;const r=Ei(),s=(e==null?void 0:e.weekStartsOn)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.weekStartsOn)??0,i=At(t),n=i.getDay(),a=(n<s?7:0)+n-s;return i.setDate(i.getDate()-a),i.setHours(0,0,0,0),i}function yi(t){return $s(t,{weekStartsOn:1})}function Ko(t){const e=At(t),r=e.getFullYear(),s=Er(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=yi(s),n=Er(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=yi(n);return e.getTime()>=i.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function co(t){const e=At(t);return e.setHours(0,0,0,0),e}function ho(t){const e=At(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function hh(t,e){const r=co(t),s=co(e),i=+r-ho(r),n=+s-ho(s);return Math.round((i-n)/lh)}function dh(t){const e=Ko(t),r=Er(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),yi(r)}function uh(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Zo(t){if(!uh(t)&&typeof t!="number")return!1;const e=At(t);return!isNaN(Number(e))}function ph(t){const e=At(t),r=Er(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const fh={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},mh=(t,e,r)=>{let s;const i=fh[t];return typeof i=="string"?s=i:e===1?s=i.one:s=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+s:s+" ago":s};function En(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const gh={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},vh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},yh={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bh={date:En({formats:gh,defaultWidth:"full"}),time:En({formats:vh,defaultWidth:"full"}),dateTime:En({formats:yh,defaultWidth:"full"})},wh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xh=(t,e,r,s)=>wh[t];function ms(t){return(e,r)=>{const s=r!=null&&r.context?String(r.context):"standalone";let i;if(s==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;i=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;i=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return i[n]}}const _h={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$h={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ch={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Sh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},kh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ph={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ah=(t,e)=>{const r=Number(t),s=r%100;if(s>20||s<10)switch(s%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Oh={ordinalNumber:Ah,era:ms({values:_h,defaultWidth:"wide"}),quarter:ms({values:$h,defaultWidth:"wide",argumentCallback:t=>t-1}),month:ms({values:Ch,defaultWidth:"wide"}),day:ms({values:Sh,defaultWidth:"wide"}),dayPeriod:ms({values:kh,defaultWidth:"wide",formattingValues:Ph,defaultFormattingWidth:"wide"})};function gs(t){return(e,r={})=>{const s=r.width,i=s&&t.matchPatterns[s]||t.matchPatterns[t.defaultMatchWidth],n=e.match(i);if(!n)return null;const a=n[0],l=s&&t.parsePatterns[s]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(l)?Eh(l,f=>f.test(a)):Dh(l,f=>f.test(a));let p;p=t.valueCallback?t.valueCallback(h):h,p=r.valueCallback?r.valueCallback(p):p;const m=e.slice(a.length);return{value:p,rest:m}}}function Dh(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Eh(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Th(t){return(e,r={})=>{const s=e.match(t.matchPattern);if(!s)return null;const i=s[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(i.length);return{value:a,rest:l}}}const Lh=/^(\d+)(th|st|nd|rd)?/i,Rh=/\d+/i,Mh={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Uh={any:[/^b/i,/^(a|c)/i]},Ih={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Fh={any:[/1/i,/2/i,/3/i,/4/i]},jh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Wh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Nh={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Hh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Bh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},zh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Vh={ordinalNumber:Th({matchPattern:Lh,parsePattern:Rh,valueCallback:t=>parseInt(t,10)}),era:gs({matchPatterns:Mh,defaultMatchWidth:"wide",parsePatterns:Uh,defaultParseWidth:"any"}),quarter:gs({matchPatterns:Ih,defaultMatchWidth:"wide",parsePatterns:Fh,defaultParseWidth:"any",valueCallback:t=>t+1}),month:gs({matchPatterns:jh,defaultMatchWidth:"wide",parsePatterns:Wh,defaultParseWidth:"any"}),day:gs({matchPatterns:Nh,defaultMatchWidth:"wide",parsePatterns:Hh,defaultParseWidth:"any"}),dayPeriod:gs({matchPatterns:Bh,defaultMatchWidth:"any",parsePatterns:zh,defaultParseWidth:"any"})},Yh={code:"en-US",formatDistance:mh,formatLong:bh,formatRelative:xh,localize:Oh,match:Vh,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Gh(t){const e=At(t);return hh(e,ph(e))+1}function qh(t){const e=At(t),r=+yi(e)-+dh(e);return Math.round(r/Xo)+1}function Qo(t,e){var m,f,b,x;const r=At(t),s=r.getFullYear(),i=Ei(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((x=(b=i.locale)==null?void 0:b.options)==null?void 0:x.firstWeekContainsDate)??1,a=Er(t,0);a.setFullYear(s+1,0,n),a.setHours(0,0,0,0);const l=$s(a,e),h=Er(t,0);h.setFullYear(s,0,n),h.setHours(0,0,0,0);const p=$s(h,e);return r.getTime()>=l.getTime()?s+1:r.getTime()>=p.getTime()?s:s-1}function Xh(t,e){var l,h,p,m;const r=Ei(),s=(e==null?void 0:e.firstWeekContainsDate)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,i=Qo(t,e),n=Er(t,0);return n.setFullYear(i,0,s),n.setHours(0,0,0,0),$s(n,e)}function Kh(t,e){const r=At(t),s=+$s(r,e)-+Xh(r,e);return Math.round(s/Xo)+1}function xe(t,e){const r=t<0?"-":"",s=Math.abs(t).toString().padStart(e,"0");return r+s}const ur={y(t,e){const r=t.getFullYear(),s=r>0?r:1-r;return xe(e==="yy"?s%100:s,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):xe(r+1,2)},d(t,e){return xe(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return xe(t.getHours()%12||12,e.length)},H(t,e){return xe(t.getHours(),e.length)},m(t,e){return xe(t.getMinutes(),e.length)},s(t,e){return xe(t.getSeconds(),e.length)},S(t,e){const r=e.length,s=t.getMilliseconds(),i=Math.trunc(s*Math.pow(10,r-3));return xe(i,e.length)}},jr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},uo={G:function(t,e,r){const s=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(s,{width:"abbreviated"});case"GGGGG":return r.era(s,{width:"narrow"});case"GGGG":default:return r.era(s,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const s=t.getFullYear(),i=s>0?s:1-s;return r.ordinalNumber(i,{unit:"year"})}return ur.y(t,e)},Y:function(t,e,r,s){const i=Qo(t,s),n=i>0?i:1-i;if(e==="YY"){const a=n%100;return xe(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):xe(n,e.length)},R:function(t,e){const r=Ko(t);return xe(r,e.length)},u:function(t,e){const r=t.getFullYear();return xe(r,e.length)},Q:function(t,e,r){const s=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(s);case"QQ":return xe(s,2);case"Qo":return r.ordinalNumber(s,{unit:"quarter"});case"QQQ":return r.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(s,{width:"wide",context:"formatting"})}},q:function(t,e,r){const s=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(s);case"qq":return xe(s,2);case"qo":return r.ordinalNumber(s,{unit:"quarter"});case"qqq":return r.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(s,{width:"wide",context:"standalone"})}},M:function(t,e,r){const s=t.getMonth();switch(e){case"M":case"MM":return ur.M(t,e);case"Mo":return r.ordinalNumber(s+1,{unit:"month"});case"MMM":return r.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(s,{width:"wide",context:"formatting"})}},L:function(t,e,r){const s=t.getMonth();switch(e){case"L":return String(s+1);case"LL":return xe(s+1,2);case"Lo":return r.ordinalNumber(s+1,{unit:"month"});case"LLL":return r.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(s,{width:"wide",context:"standalone"})}},w:function(t,e,r,s){const i=Kh(t,s);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):xe(i,e.length)},I:function(t,e,r){const s=qh(t);return e==="Io"?r.ordinalNumber(s,{unit:"week"}):xe(s,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):ur.d(t,e)},D:function(t,e,r){const s=Gh(t);return e==="Do"?r.ordinalNumber(s,{unit:"dayOfYear"}):xe(s,e.length)},E:function(t,e,r){const s=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(s,{width:"short",context:"formatting"});case"EEEE":default:return r.day(s,{width:"wide",context:"formatting"})}},e:function(t,e,r,s){const i=t.getDay(),n=(i-s.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return xe(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,s){const i=t.getDay(),n=(i-s.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return xe(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){const s=t.getDay(),i=s===0?7:s;switch(e){case"i":return String(i);case"ii":return xe(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(s,{width:"short",context:"formatting"});case"iiii":default:return r.day(s,{width:"wide",context:"formatting"})}},a:function(t,e,r){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){const s=t.getHours();let i;switch(s===12?i=jr.noon:s===0?i=jr.midnight:i=s/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){const s=t.getHours();let i;switch(s>=17?i=jr.evening:s>=12?i=jr.afternoon:s>=4?i=jr.morning:i=jr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let s=t.getHours()%12;return s===0&&(s=12),r.ordinalNumber(s,{unit:"hour"})}return ur.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):ur.H(t,e)},K:function(t,e,r){const s=t.getHours()%12;return e==="Ko"?r.ordinalNumber(s,{unit:"hour"}):xe(s,e.length)},k:function(t,e,r){let s=t.getHours();return s===0&&(s=24),e==="ko"?r.ordinalNumber(s,{unit:"hour"}):xe(s,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):ur.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):ur.s(t,e)},S:function(t,e){return ur.S(t,e)},X:function(t,e,r){const s=t.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return fo(s);case"XXXX":case"XX":return kr(s);case"XXXXX":case"XXX":default:return kr(s,":")}},x:function(t,e,r){const s=t.getTimezoneOffset();switch(e){case"x":return fo(s);case"xxxx":case"xx":return kr(s);case"xxxxx":case"xxx":default:return kr(s,":")}},O:function(t,e,r){const s=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+po(s,":");case"OOOO":default:return"GMT"+kr(s,":")}},z:function(t,e,r){const s=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+po(s,":");case"zzzz":default:return"GMT"+kr(s,":")}},t:function(t,e,r){const s=Math.trunc(t.getTime()/1e3);return xe(s,e.length)},T:function(t,e,r){const s=t.getTime();return xe(s,e.length)}};function po(t,e=""){const r=t>0?"-":"+",s=Math.abs(t),i=Math.trunc(s/60),n=s%60;return n===0?r+String(i):r+String(i)+e+xe(n,2)}function fo(t,e){return t%60===0?(t>0?"-":"+")+xe(Math.abs(t)/60,2):kr(t,e)}function kr(t,e=""){const r=t>0?"-":"+",s=Math.abs(t),i=xe(Math.trunc(s/60),2),n=xe(s%60,2);return r+i+e+n}const mo=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Jo=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Zh=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],s=r[1],i=r[2];if(!i)return mo(t,e);let n;switch(s){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",mo(s,e)).replace("{{time}}",Jo(i,e))},Qh={p:Jo,P:Zh},Jh=/^D+$/,ed=/^Y+$/,td=["D","DD","YY","YYYY"];function rd(t){return Jh.test(t)}function sd(t){return ed.test(t)}function id(t,e,r){const s=nd(t,e,r);if(console.warn(s),td.includes(t))throw new RangeError(s)}function nd(t,e,r){const s=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${s} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ad=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,od=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ld=/^'([^]*?)'?$/,cd=/''/g,hd=/[a-zA-Z]/;function gr(t,e,r){var m,f,b,x;const s=Ei(),i=s.locale??Yh,n=s.firstWeekContainsDate??((f=(m=s.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,a=s.weekStartsOn??((x=(b=s.locale)==null?void 0:b.options)==null?void 0:x.weekStartsOn)??0,l=At(t);if(!Zo(l))throw new RangeError("Invalid time value");let h=e.match(od).map(S=>{const D=S[0];if(D==="p"||D==="P"){const k=Qh[D];return k(S,i.formatLong)}return S}).join("").match(ad).map(S=>{if(S==="''")return{isToken:!1,value:"'"};const D=S[0];if(D==="'")return{isToken:!1,value:dd(S)};if(uo[D])return{isToken:!0,value:S};if(D.match(hd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:S}});i.localize.preprocessor&&(h=i.localize.preprocessor(l,h));const p={firstWeekContainsDate:n,weekStartsOn:a,locale:i};return h.map(S=>{if(!S.isToken)return S.value;const D=S.value;(sd(D)||rd(D))&&id(D,e,String(t));const k=uo[D[0]];return k(l,D,i.localize,p)}).join("")}function dd(t){const e=t.match(ld);return e?e[1].replace(cd,"'"):t}function Tn(t,e){const r=At(t);if(!Zo(r))throw new RangeError("Invalid time value");const s=(e==null?void 0:e.format)??"extended",i=(e==null?void 0:e.representation)??"complete";let n="";const a=s==="extended"?"-":"",l=s==="extended"?":":"";if(i!=="time"){const h=xe(r.getDate(),2),p=xe(r.getMonth()+1,2);n=`${xe(r.getFullYear(),4)}${a}${p}${a}${h}`}if(i!=="date"){const h=xe(r.getHours(),2),p=xe(r.getMinutes(),2),m=xe(r.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${l}${p}${l}${m}`}return n}var ud={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},pd=`\r
`,fd="\uFEFF",Ti=t=>Object.assign({},ud,t);class md extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class gd extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class vd extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class yd extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var ss=t=>t,yt=t=>t,bs=ss,Li=ss,Vr=ss,go=ss,vo=ss,bd=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},wd=t=>go(typeof t=="object"?t.key:t),xd=t=>vo(typeof t=="object"?t.displayLabel:t),_d=(t,...e)=>e.reduce((r,s)=>s(r),t),$d=t=>e=>t.useBom?Li(yt(e)+fd):e,Cd=t=>e=>t.showTitle?Qn(Li(yt(e)+t.title))(Vr("")):e,Qn=t=>e=>Li(yt(t)+yt(e)+pd),el=t=>(e,r)=>Sd(t)(Vr(yt(e)+yt(r))),Sd=t=>e=>ss(yt(e)+t.fieldSeparator),kd=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new gd("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let s=Vr("");for(let i=0;i<e.length;i++){const n=xd(e[i]);s=el(t)(s,tl(t,yt(n)))}return s=Vr(yt(s).slice(0,-1)),Qn(r)(s)},Pd=(t,e,r)=>s=>{let i=s;for(var n=0;n<r.length;n++){let a=Vr("");for(let l=0;l<e.length;l++){const h=wd(e[l]),p=r[n][yt(h)];a=el(t)(a,tl(t,p))}a=Vr(yt(a).slice(0,-1)),i=Qn(i)(a)}return i},Ad=t=>+t===t&&(!isFinite(t)||!!(t%1)),Od=(t,e)=>{if(Ad(e)){if(t.decimalSeparator==="locale")return bs(e.toLocaleString());if(t.decimalSeparator)return bs(e.toString().replace(".",t.decimalSeparator))}return bs(e.toString())},ui=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+bd(e,t.quoteCharacter)+t.quoteCharacter),bs(r)},Dd=(t,e)=>{const r=e?"true":"false";return bs(t.boolDisplay[r])},Ed=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?ui(t,t.replaceUndefinedWith+""):e===null?ui(t,"null"):ui(t,""),tl=(t,e)=>{if(typeof e=="number")return Od(t,e);if(typeof e=="string")return ui(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Dd(t,e);if(e===null||typeof e>"u")return Ed(t,e);throw new yd(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Td=t=>e=>{const r=Ti(t),s=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let i=_d(Li(""),$d(r),Cd(r),kd(r,s),Pd(r,s,e));if(yt(i).length<1)throw new md("Output is empty. Is your data formatted correctly?");return i},Ld=t=>e=>{const r=Ti(t),s=yt(e),i=r.useTextFile?"plain":"csv";return new Blob([s],{type:`text/${i};charset=utf8;`})},Rd=t=>e=>{if(!window)throw new vd("Downloading only supported in a browser environment.");const r=Ld(t)(e),s=Ti(t),i=s.useTextFile?"txt":"csv",n=`${s.filename}.${i}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ud(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(r,s,i.get?i:{enumerable:!0,get:function(){return t[s]}})}),r}var Fn={exports:{}};const Id={},Fd=Object.freeze(Object.defineProperty({__proto__:null,default:Id},Symbol.toStringTag,{value:"Module"})),Wr=Ud(Fd);/**
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
 */(function(t,e){(function(r,s){s(e)})(Md,function(r){var s={},i={exports:{}};(function(P){var T=function(J){return typeof J<"u"&&J.versions!=null&&J.versions.node!=null&&J+""=="[object process]"};P.exports.isNode=T,P.exports.platform=typeof process<"u"&&T(process)?"node":"browser";var L=P.exports.platform==="node"&&Wr;P.exports.isMainThread=P.exports.platform==="node"?(!L||L.isMainThread)&&!process.connected:typeof Window<"u",P.exports.cpus=P.exports.platform==="browser"?self.navigator.hardwareConcurrency:Wr.cpus().length})(i);var n=i.exports,a={},l;function h(){if(l)return a;l=1;function P(J,Se){var ae=this;if(!(this instanceof P))throw new SyntaxError("Constructor must be called with the new operator");if(typeof J!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Te=[],_e=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var H=function(he,ye){Te.push(he),_e.push(ye)};this.then=function(A,he){return new P(function(ye,Ve){var Je=A?T(A,ye,Ve):ye,Wt=he?T(he,ye,Ve):Ve;H(Je,Wt)},ae)};var $e=function(he){return ae.resolved=!0,ae.rejected=!1,ae.pending=!1,Te.forEach(function(ye){ye(he)}),H=function(Ve,Je){Ve(he)},$e=C=function(){},ae},C=function(he){return ae.resolved=!1,ae.rejected=!0,ae.pending=!1,_e.forEach(function(ye){ye(he)}),H=function(Ve,Je){Je(he)},$e=C=function(){},ae};this.cancel=function(){return Se?Se.cancel():C(new L),ae},this.timeout=function(A){if(Se)Se.timeout(A);else{var he=setTimeout(function(){C(new R("Promise timed out after "+A+" ms"))},A);ae.always(function(){clearTimeout(he)})}return ae},J(function(A){$e(A)},function(A){C(A)})}function T(J,Se,ae){return function(Te){try{var _e=J(Te);_e&&typeof _e.then=="function"&&typeof _e.catch=="function"?_e.then(Se,ae):Se(_e)}catch(H){ae(H)}}}P.prototype.catch=function(J){return this.then(null,J)},P.prototype.always=function(J){return this.then(J,J)},P.all=function(J){return new P(function(Se,ae){var Te=J.length,_e=[];Te?J.forEach(function(H,$e){H.then(function(C){_e[$e]=C,Te--,Te==0&&Se(_e)},function(C){Te=0,ae(C)})}):Se(_e)})},P.defer=function(){var J={};return J.promise=new P(function(Se,ae){J.resolve=Se,J.reject=ae}),J};function L(J){this.message=J||"promise cancelled",this.stack=new Error().stack}L.prototype=new Error,L.prototype.constructor=Error,L.prototype.name="CancellationError",P.CancellationError=L;function R(J){this.message=J||"timeout exceeded",this.stack=new Error().stack}return R.prototype=new Error,R.prototype.constructor=Error,R.prototype.name="TimeoutError",P.TimeoutError=R,a.Promise=P,a}function p(P,T){(T==null||T>P.length)&&(T=P.length);for(var L=0,R=Array(T);L<T;L++)R[L]=P[L];return R}function m(P,T){var L=typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(!L){if(Array.isArray(P)||(L=I(P))||T){L&&(P=L);var R=0,J=function(){};return{s:J,n:function(){return R>=P.length?{done:!0}:{done:!1,value:P[R++]}},e:function(_e){throw _e},f:J}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Se,ae=!0,Te=!1;return{s:function(){L=L.call(P)},n:function(){var _e=L.next();return ae=_e.done,_e},e:function(_e){Te=!0,Se=_e},f:function(){try{ae||L.return==null||L.return()}finally{if(Te)throw Se}}}}function f(P,T,L){return(T=D(T))in P?Object.defineProperty(P,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):P[T]=L,P}function b(P,T){var L=Object.keys(P);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(P);T&&(R=R.filter(function(J){return Object.getOwnPropertyDescriptor(P,J).enumerable})),L.push.apply(L,R)}return L}function x(P){for(var T=1;T<arguments.length;T++){var L=arguments[T]!=null?arguments[T]:{};T%2?b(Object(L),!0).forEach(function(R){f(P,R,L[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(L)):b(Object(L)).forEach(function(R){Object.defineProperty(P,R,Object.getOwnPropertyDescriptor(L,R))})}return P}function S(P,T){if(typeof P!="object"||!P)return P;var L=P[Symbol.toPrimitive];if(L!==void 0){var R=L.call(P,T||"default");if(typeof R!="object")return R;throw new TypeError("@@toPrimitive must return a primitive value.")}return(T==="string"?String:Number)(P)}function D(P){var T=S(P,"string");return typeof T=="symbol"?T:T+""}function k(P){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},k(P)}function I(P,T){if(P){if(typeof P=="string")return p(P,T);var L={}.toString.call(P).slice(8,-1);return L==="Object"&&P.constructor&&(L=P.constructor.name),L==="Map"||L==="Set"?Array.from(P):L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)?p(P,T):void 0}}var U={exports:{}},W={},z;function N(){return z||(z=1,W.validateOptions=function(T,L,R){if(T){var J=T?Object.keys(T):[],Se=J.find(function(Te){return!L.includes(Te)});if(Se)throw new Error('Object "'+R+'" contains an unknown option "'+Se+'"');var ae=L.find(function(Te){return Object.prototype[Te]&&!J.includes(Te)});if(ae)throw new Error('Object "'+R+'" contains an inherited option "'+ae+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return T}},W.workerOptsNames=["credentials","name","type"],W.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],W.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),W}var le,E;function Y(){return E||(E=1,le=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),le}var G;function K(){if(G)return U.exports;G=1;var P=h(),T=P.Promise,L=n,R=N(),J=R.validateOptions,Se=R.forkOptsNames,ae=R.workerThreadOptsNames,Te=R.workerOptsNames,_e="__workerpool-terminate__";function H(){var Q=C();if(!Q)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return Q}function $e(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function C(){try{return Wr}catch(Q){if(k(Q)==="object"&&Q!==null&&Q.code==="MODULE_NOT_FOUND")return null;throw Q}}function A(){if(L.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var Q=new Blob([Y()],{type:"text/javascript"});return window.URL.createObjectURL(Q)}else return __dirname+"/worker.js"}function he(Q,ue){if(ue.workerType==="web")return $e(),ye(Q,ue.workerOpts,Worker);if(ue.workerType==="thread")return O=H(),Ve(Q,O,ue);if(ue.workerType==="process"||!ue.workerType)return Je(Q,Wt(ue),Wr);if(L.platform==="browser")return $e(),ye(Q,ue.workerOpts,Worker);var O=C();return O?Ve(Q,O,ue):Je(Q,Wt(ue),Wr)}function ye(Q,ue,O){J(ue,Te,"workerOpts");var ne=new O(Q,ue);return ne.isBrowserWorker=!0,ne.on=function(ke,Ce){this.addEventListener(ke,function(Fe){Ce(Fe.data)})},ne.send=function(ke,Ce){this.postMessage(ke,Ce)},ne}function Ve(Q,ue,O){var ne,ke;J(O==null?void 0:O.workerThreadOpts,ae,"workerThreadOpts");var Ce=new ue.Worker(Q,x({stdout:(ne=O==null?void 0:O.emitStdStreams)!==null&&ne!==void 0?ne:!1,stderr:(ke=O==null?void 0:O.emitStdStreams)!==null&&ke!==void 0?ke:!1},O==null?void 0:O.workerThreadOpts));return Ce.isWorkerThread=!0,Ce.send=function(Fe,be){this.postMessage(Fe,be)},Ce.kill=function(){return this.terminate(),!0},Ce.disconnect=function(){this.terminate()},O!=null&&O.emitStdStreams&&(Ce.stdout.on("data",function(Fe){return Ce.emit("stdout",Fe)}),Ce.stderr.on("data",function(Fe){return Ce.emit("stderr",Fe)})),Ce}function Je(Q,ue,O){J(ue.forkOpts,Se,"forkOpts");var ne=O.fork(Q,ue.forkArgs,ue.forkOpts),ke=ne.send;return ne.send=function(Ce){return ke.call(ne,Ce)},ue.emitStdStreams&&(ne.stdout.on("data",function(Ce){return ne.emit("stdout",Ce)}),ne.stderr.on("data",function(Ce){return ne.emit("stderr",Ce)})),ne.isChildProcess=!0,ne}function Wt(Q){Q=Q||{};var ue=process.execArgv.join(" "),O=ue.indexOf("--inspect")!==-1,ne=ue.indexOf("--debug-brk")!==-1,ke=[];return O&&(ke.push("--inspect="+Q.debugPort),ne&&ke.push("--debug-brk")),process.execArgv.forEach(function(Ce){Ce.indexOf("--max-old-space-size")>-1&&ke.push(Ce)}),Object.assign({},Q,{forkArgs:Q.forkArgs,forkOpts:Object.assign({},Q.forkOpts,{execArgv:(Q.forkOpts&&Q.forkOpts.execArgv||[]).concat(ke),stdio:Q.emitStdStreams?"pipe":void 0})})}function gt(Q){for(var ue=new Error(""),O=Object.keys(Q),ne=0;ne<O.length;ne++)ue[O[ne]]=Q[O[ne]];return ue}function $t(Q,ue){if(Object.keys(Q.processing).length===1){var O=Object.values(Q.processing)[0];O.options&&typeof O.options.on=="function"&&O.options.on(ue)}}function hr(Q,ue){var O=this,ne=ue||{};this.script=Q||A(),this.worker=he(this.script,ne),this.debugPort=ne.debugPort,this.forkOpts=ne.forkOpts,this.forkArgs=ne.forkArgs,this.workerOpts=ne.workerOpts,this.workerThreadOpts=ne.workerThreadOpts,this.workerTerminateTimeout=ne.workerTerminateTimeout,Q||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(be){$t(O,{stdout:be.toString()})}),this.worker.on("stderr",function(be){$t(O,{stderr:be.toString()})}),this.worker.on("message",function(be){if(!O.terminated)if(typeof be=="string"&&be==="ready")O.worker.ready=!0,Ce();else{var lt=be.id,Ye=O.processing[lt];Ye!==void 0&&(be.isEvent?Ye.options&&typeof Ye.options.on=="function"&&Ye.options.on(be.payload):(delete O.processing[lt],O.terminating===!0&&O.terminate(),be.error?Ye.resolver.reject(gt(be.error)):Ye.resolver.resolve(be.result)))}});function ke(be){O.terminated=!0;for(var lt in O.processing)O.processing[lt]!==void 0&&O.processing[lt].resolver.reject(be);O.processing=Object.create(null)}function Ce(){var be=m(O.requestQueue.splice(0)),lt;try{for(be.s();!(lt=be.n()).done;){var Ye=lt.value;O.worker.send(Ye.message,Ye.transfer)}}catch(Xs){be.e(Xs)}finally{be.f()}}var Fe=this.worker;this.worker.on("error",ke),this.worker.on("exit",function(be,lt){var Ye=`Workerpool Worker terminated Unexpectedly
`;Ye+="    exitCode: `"+be+"`\n",Ye+="    signalCode: `"+lt+"`\n",Ye+="    workerpool.script: `"+O.script+"`\n",Ye+="    spawnArgs: `"+Fe.spawnargs+"`\n",Ye+="    spawnfile: `"+Fe.spawnfile+"`\n",Ye+="    stdout: `"+Fe.stdout+"`\n",Ye+="    stderr: `"+Fe.stderr+"`\n",ke(new Error(Ye))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return hr.prototype.methods=function(){return this.exec("methods")},hr.prototype.exec=function(Q,ue,O,ne){O||(O=T.defer());var ke=++this.lastId;this.processing[ke]={id:ke,resolver:O,options:ne};var Ce={message:{id:ke,method:Q,params:ue},transfer:ne&&ne.transfer};this.terminated?O.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Ce.message,Ce.transfer):this.requestQueue.push(Ce);var Fe=this;return O.promise.catch(function(be){if(be instanceof T.CancellationError||be instanceof T.TimeoutError)return delete Fe.processing[ke],Fe.terminateAndNotify(!0).then(function(){throw be},function(lt){throw lt});throw be})},hr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},hr.prototype.terminate=function(Q,ue){var O=this;if(Q){for(var ne in this.processing)this.processing[ne]!==void 0&&this.processing[ne].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof ue=="function"&&(this.terminationHandler=ue),this.busy())this.terminating=!0;else{var ke=function(be){if(O.terminated=!0,O.cleaning=!1,O.worker!=null&&O.worker.removeAllListeners&&O.worker.removeAllListeners("message"),O.worker=null,O.terminating=!1,O.terminationHandler)O.terminationHandler(be,O);else if(be)throw be};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ke(new Error("worker already killed!"));return}var Ce=setTimeout(function(){O.worker&&O.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Ce),O.worker&&(O.worker.killed=!0),ke()}),this.worker.ready?this.worker.send(_e):this.requestQueue.push({message:_e}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ke()}},hr.prototype.terminateAndNotify=function(Q,ue){var O=T.defer();return ue&&O.promise.timeout(ue),this.terminate(Q,function(ne,ke){ne?O.reject(ne):O.resolve(ke)}),O.promise},U.exports=hr,U.exports._tryRequireWorkerThreads=C,U.exports._setupProcessWorker=Je,U.exports._setupBrowserWorker=ye,U.exports._setupWorkerThreadWorker=Ve,U.exports.ensureWorkerThreads=H,U.exports}var ce,q;function se(){if(q)return ce;q=1;var P=65535;ce=T;function T(){this.ports=Object.create(null),this.length=0}return T.prototype.nextAvailableStartingAt=function(L){for(;this.ports[L]===!0;)L++;if(L>=P)throw new Error("WorkerPool debug port limit reached: "+L+">= "+P);return this.ports[L]=!0,this.length++,L},T.prototype.releasePort=function(L){delete this.ports[L],this.length--},ce}var ie,de;function Ee(){if(de)return ie;de=1;var P=h(),T=P.Promise,L=K(),R=n,J=se(),Se=new J;function ae(C,A){typeof C=="string"?this.script=C||null:(this.script=null,A=C),this.workers=[],this.tasks=[],A=A||{},this.forkArgs=Object.freeze(A.forkArgs||[]),this.forkOpts=Object.freeze(A.forkOpts||{}),this.workerOpts=Object.freeze(A.workerOpts||{}),this.workerThreadOpts=Object.freeze(A.workerThreadOpts||{}),this.debugPortStart=A.debugPortStart||43210,this.nodeWorker=A.nodeWorker,this.workerType=A.workerType||A.nodeWorker||"auto",this.maxQueueSize=A.maxQueueSize||1/0,this.workerTerminateTimeout=A.workerTerminateTimeout||1e3,this.onCreateWorker=A.onCreateWorker||function(){return null},this.onTerminateWorker=A.onTerminateWorker||function(){return null},this.emitStdStreams=A.emitStdStreams||!1,A&&"maxWorkers"in A?(Te(A.maxWorkers),this.maxWorkers=A.maxWorkers):this.maxWorkers=Math.max((R.cpus||4)-1,1),A&&"minWorkers"in A&&(A.minWorkers==="max"?this.minWorkers=this.maxWorkers:(_e(A.minWorkers),this.minWorkers=A.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&L.ensureWorkerThreads()}ae.prototype.exec=function(C,A,he){if(A&&!Array.isArray(A))throw new TypeError('Array expected as argument "params"');if(typeof C=="string"){var ye=T.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ve=this.tasks,Je={method:C,params:A,resolver:ye,timeout:null,options:he};Ve.push(Je);var Wt=ye.promise.timeout;return ye.promise.timeout=function($t){return Ve.indexOf(Je)!==-1?(Je.timeout=$t,ye.promise):Wt.call(ye.promise,$t)},this._next(),ye.promise}else{if(typeof C=="function")return this.exec("run",[String(C),A],he);throw new TypeError('Function or string expected as argument "method"')}},ae.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var C=this;return this.exec("methods").then(function(A){var he={};return A.forEach(function(ye){he[ye]=function(){return C.exec(ye,Array.prototype.slice.call(arguments))}}),he})},ae.prototype._next=function(){if(this.tasks.length>0){var C=this._getWorker();if(C){var A=this,he=this.tasks.shift();if(he.resolver.promise.pending){var ye=C.exec(he.method,he.params,he.resolver,he.options).then(A._boundNext).catch(function(){if(C.terminated)return A._removeWorker(C)}).then(function(){A._next()});typeof he.timeout=="number"&&ye.timeout(he.timeout)}else A._next()}}},ae.prototype._getWorker=function(){for(var C=this.workers,A=0;A<C.length;A++){var he=C[A];if(he.busy()===!1)return he}return C.length<this.maxWorkers?(he=this._createWorkerHandler(),C.push(he),he):null},ae.prototype._removeWorker=function(C){var A=this;return Se.releasePort(C.debugPort),this._removeWorkerFromList(C),this._ensureMinWorkers(),new T(function(he,ye){C.terminate(!1,function(Ve){A.onTerminateWorker({forkArgs:C.forkArgs,forkOpts:C.forkOpts,workerThreadOpts:C.workerThreadOpts,script:C.script}),Ve?ye(Ve):he(C)})})},ae.prototype._removeWorkerFromList=function(C){var A=this.workers.indexOf(C);A!==-1&&this.workers.splice(A,1)},ae.prototype.terminate=function(C,A){var he=this;this.tasks.forEach(function(gt){gt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ye=function($t){Se.releasePort($t.debugPort),this._removeWorkerFromList($t)},Ve=ye.bind(this),Je=[],Wt=this.workers.slice();return Wt.forEach(function(gt){var $t=gt.terminateAndNotify(C,A).then(Ve).always(function(){he.onTerminateWorker({forkArgs:gt.forkArgs,forkOpts:gt.forkOpts,workerThreadOpts:gt.workerThreadOpts,script:gt.script})});Je.push($t)}),T.all(Je)},ae.prototype.stats=function(){var C=this.workers.length,A=this.workers.filter(function(he){return he.busy()}).length;return{totalWorkers:C,busyWorkers:A,idleWorkers:C-A,pendingTasks:this.tasks.length,activeTasks:A}},ae.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var C=this.workers.length;C<this.minWorkers;C++)this.workers.push(this._createWorkerHandler())},ae.prototype._createWorkerHandler=function(){var C=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new L(C.script||this.script,{forkArgs:C.forkArgs||this.forkArgs,forkOpts:C.forkOpts||this.forkOpts,workerOpts:C.workerOpts||this.workerOpts,workerThreadOpts:C.workerThreadOpts||this.workerThreadOpts,debugPort:Se.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Te(C){if(!H(C)||!$e(C)||C<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function _e(C){if(!H(C)||!$e(C)||C<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function H(C){return typeof C=="number"}function $e(C){return Math.round(C)==C}return ie=ae,ie}var We={},Re,ft;function mt(){if(ft)return Re;ft=1;function P(T,L){this.message=T,this.transfer=L}return Re=P,Re}var Zt;function It(){return Zt||(Zt=1,function(P){var T=mt(),L="__workerpool-terminate__",R={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")R.on=function(H,$e){addEventListener(H,function(C){$e(C.data)})},R.send=function(H,$e){$e?postMessage(H,$e):postMessage(H)};else if(typeof process<"u"){var J;try{J=Wr}catch(H){if(!(k(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND"))throw H}if(J&&J.parentPort!==null){var Se=J.parentPort;R.send=Se.postMessage.bind(Se),R.on=Se.on.bind(Se),R.exit=process.exit.bind(process)}else R.on=process.on.bind(process),R.send=function(H){process.send(H)},R.on("disconnect",function(){process.exit(1)}),R.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ae(H){return Object.getOwnPropertyNames(H).reduce(function($e,C){return Object.defineProperty($e,C,{value:H[C],enumerable:!0})},{})}function Te(H){return H&&typeof H.then=="function"&&typeof H.catch=="function"}R.methods={},R.methods.run=function($e,C){var A=new Function("return ("+$e+").apply(null, arguments);");return A.apply(A,C)},R.methods.methods=function(){return Object.keys(R.methods)},R.terminationHandler=void 0,R.cleanupAndExit=function(H){var $e=function(){R.exit(H)};if(!R.terminationHandler)return $e();var C=R.terminationHandler(H);Te(C)?C.then($e,$e):$e()};var _e=null;R.on("message",function(H){if(H===L)return R.cleanupAndExit(0);try{var $e=R.methods[H.method];if($e){_e=H.id;var C=$e.apply($e,H.params);Te(C)?C.then(function(A){A instanceof T?R.send({id:H.id,result:A.message,error:null},A.transfer):R.send({id:H.id,result:A,error:null}),_e=null}).catch(function(A){R.send({id:H.id,result:null,error:ae(A)}),_e=null}):(C instanceof T?R.send({id:H.id,result:C.message,error:null},C.transfer):R.send({id:H.id,result:C,error:null}),_e=null)}else throw new Error('Unknown method "'+H.method+'"')}catch(A){R.send({id:H.id,result:null,error:ae(A)})}}),R.register=function(H,$e){if(H)for(var C in H)H.hasOwnProperty(C)&&(R.methods[C]=H[C]);$e&&(R.terminationHandler=$e.onTerminate),R.send("ready")},R.emit=function(H){if(_e){if(H instanceof T){R.send({id:_e,isEvent:!0,payload:H.message},H.transfer);return}R.send({id:_e,isEvent:!0,payload:H})}},P.add=R.register,P.emit=R.emit}(We)),We}var Ft=n.platform,jt=n.isMainThread,Dt=n.cpus;function Ue(P,T){var L=Ee();return new L(P,T)}var Qe=s.pool=Ue;function _r(P,T){var L=It();L.add(P,T)}var ot=s.worker=_r;function Ie(P){var T=It();T.emit(P)}var qs=s.workerEmit=Ie,Ki=h(),Ge=Ki.Promise,Zi=s.Promise=Ge,Qi=s.Transfer=mt(),Ji=s.platform=Ft,en=s.isMainThread=jt,tn=s.cpus=Dt;r.Promise=Zi,r.Transfer=Qi,r.cpus=tn,r.default=s,r.isMainThread=en,r.platform=Ji,r.pool=Qe,r.worker=ot,r.workerEmit=qs,Object.defineProperty(r,"__esModule",{value:!0})})})(Fn,Fn.exports);var jd=Fn.exports,rt=class{constructor(t,e){c(this,"_value");c(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},rl=class extends rt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Wd=class extends rt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Nd=class extends rt{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const s={...e};return e.from<r.min&&(s.from=r.min),e.to>r.max&&(s.to=r.max),s}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,s=this.parent.histogram.value.filter(n=>n.height>=r),i={from:s[0].from,to:s[s.length-1].to};this.fixedRange?this.setFixedRange(i):this.imposeRange(i)}}},Hd=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Bd=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],zd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Vd=Hd(),Or={iron:{pixels:zd,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Bd,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Vd,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Yd=class extends rt{get availablePalettes(){return Or}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},Un,Gd=(Un=class{},c(Un,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),Un),ze,qd=(ze=class extends Gd{static humanRangeDates(e,r){return e=ze.inputToDate(e),r=ze.inputToDate(r),e.getUTCDate()===r.getUTCDate()?ze.humanDate(e):[ze.humanDate(e),ze.humanDate(r)].join(" - ")}static human(e){return`${ze.humanDate(e)} ${ze.humanTime(e,!0)} `}},c(ze,"isoDate",e=>(e=ze.inputToDate(e),Tn(e,{representation:"date"}))),c(ze,"isoTime",e=>(e=ze.inputToDate(e),Tn(e,{representation:"time"}))),c(ze,"isoComplete",e=>(e=ze.inputToDate(e),Tn(e))),c(ze,"humanTime",(e,r=!1)=>(e=ze.inputToDate(e),gr(e,r?"HH:mm:ss":"HH:mm"))),c(ze,"humanDate",(e,r=!1)=>(e=ze.inputToDate(e),gr(e,r?"d. M.":"d. M. yyyy"))),ze),Ri=class{},Xd=class extends Ri{constructor(e,r,s,i,n,a,l,h,p,m,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=s,this.height=i,this.timestamp=a,this.duration=l,this.min=h,this.max=p,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,r){const s=r*this.width+e;return this.pixels[s]}getColorAtPoint(e,r){var a,l;const s=this.getTemperatureAtPoint(e,r),i=(a=this.group.registry.range.value)==null?void 0:a.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(i!==void 0&&n!==void 0){const p=(s-i)/(n-i),m=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[m]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},Mi=class{constructor(t){c(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Ht=class jn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=jn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=jn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Kd=class extends Mi{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Ht.createCanvasContainer(),this.canvas=Ht.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(s,i,n,a,l,h)=>{const m=new OffscreenCanvas(n,a).getContext("2d"),f=i-s;for(let S=0;S<=n;S++)for(let D=0;D<=a;D++){const k=S+D*n;let I=l[k];I<s&&(I=s),I>i&&(I=i);const W=(I-s)/f,z=Math.round(255*W),N=h[z];m.fillStyle=N,m.fillRect(S,D,1,1)}const b=m.getImageData(0,0,n,a);return await createImageBitmap(b)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},Zd=class extends Mi{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Ht.createCursorLayerRoot(),this.center=Ht.createCursorLayerCenter(),this.axisX=Ht.createCursorLayerX(),this.axisY=Ht.createCursorLayerY(),this.label=Ht.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const s=this.instance.root.offsetWidth/this.instance.width,i=Math.round(e*s),n=Math.round(r*s),a=100/this.instance.width/2,l=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(i)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${l}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,s){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${s.toFixed(3)} °C`)}setLabel(e,r,s){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=s)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Qd=class extends Mi{constructor(e){super(e);c(this,"container");this.container=Ht.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Jd=class extends Mi{constructor(e,r){super(e);c(this,"container");c(this,"image");this._url=r,this.container=Ht.createVisibleLayer(),this._url&&(this.image=Ht.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},me=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},eu=class{constructor(t,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const s=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),i=s.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(i.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,l)=>{const h=i[l];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{s.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Jn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},tu=class extends rt{constructor(e,r,s,i){super(e,Math.max(Math.min(r,s.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new me);c(this,"callbacksPlay",new me);c(this,"callbacksPause",new me);c(this,"callbacksStop",new me);c(this,"callbacksEnd",new me);c(this,"callbacksChangeFrame",new me);this.steps=s,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new eu(this,i)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Jn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),gr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),s=Math.ceil(r*this.steps.length)+5,i=this._validateIndex(s-40),n=this._validateIndex(s),l=this.steps.slice(i,n).reverse().find(h=>h.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),s=Math.floor(r*this.steps.length)-5,i=this._validateIndex(s),n=this._validateIndex(s+40),l=this.steps.slice(i,n).find(h=>h.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const s=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),s}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},ru=class extends rt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},su=class extends rt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new me)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",s=>{s.data.size>0&&(this.recordedChunks.push(s.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const s={mimeType:this.mimeType},i=new MediaRecorder(e,s);return{stream:e,recorder:i,options:s}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),s=document.createElement("a");s.style.display="none",s.href=r,s.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},iu=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},sl=class{constructor(t,e,r){c(this,"_selected",!1);c(this,"onSelected",new me);c(this,"onDeselected",new me);c(this,"onValues",new me);c(this,"onMoveOrResize",new me);c(this,"layerRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new me);c(this,"_initialColor");c(this,"onSetInitialColor",new me);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"_graphMinActive",!1);c(this,"_graphMaxActive",!1);c(this,"_graphAvgActive",!1);c(this,"onGraphActivation",new me);c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new me);this.key=t,this.file=e,this._initialColor=r,this.nameInitial=t,this._name=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}get initialColor(){return this._initialColor}setInitialColor(t){this._initialColor=t,this.onSetInitialColor.call(t),this.selected===!0&&this.setColor(t)}get graphMinActive(){return this._graphMinActive}get graphMaxActive(){return this._graphMaxActive}get graphAvgActive(){return this._graphAvgActive}emitGraphActivation(){this.onGraphActivation.call(this._graphMinActive,this._graphMaxActive,this._graphAvgActive)}get name(){return this._name}setName(t){this._name=t,this.onSetName.call(t)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},il=class{constructor(t,e,r,s,i){c(this,"pxX");c(this,"_x");c(this,"onX",new me);c(this,"pxY");c(this,"_y");c(this,"onY",new me);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new me);c(this,"onMouseLeave",new me);c(this,"onActivate",new me);c(this,"onDeactivate",new me);this.key=t,this.analysis=s,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=r,this._y=e,this._color=i,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(i),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,s=this.x-r,i=this.x+r,n=this.y-r,a=this.y+r;return e>=s&&e<=i&&t>=n&&t<=a}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},ut,nu=(ut=class extends il{constructor(r,s,i,n,a){super(r,s,i,n,a);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(r=1){return Math.round(ut.size*r).toString()+"px"}getPercentXTranslationFromValue(){return this.pxX/2}getPercentYTranslationFromValue(){return this.pxY/2}mayMoveToX(r){return r<=this.file.width&&r>=0}mayMoveToY(r){return r<=this.file.height&&r>=0}createInnerElement(){const r=document.createElement("div");return r.classList.add("innerElement"),r.style.position="absolute",r.style.top=ut.sizePx(-.5),r.style.left=ut.sizePx(-.5),r.style.width=ut.sizePx(),r.style.height=ut.sizePx(),r}buildAxisX(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="100%",r.style.height="1px",r.style.left="0px",r.style.top=ut.sizePx(.5),r}buildAxisY(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="1px",r.style.height="100%",r.style.left=ut.sizePx(.5),r.style.top="0px",r}buildCenter(){const r=document.createElement("div");r.style.position="absolute",r.style.top=`calc( ${ut.sizePx(.5)} - 3px )`,r.style.left=`calc( ${ut.sizePx(.5)} - 3px )`,r.style.width="5px",r.style.height="5px",r.style.borderStyle="solid",r.style.borderWidth="1px";const s=this.analysis.file.getColorAtPoint(this.x,this.y);return s&&(r.style.backgroundColor=s),r}onSetColor(r){this.axisX&&(this.axisX.style.backgroundColor=r),this.axisY&&(this.axisY.style.backgroundColor=r),this.center&&(this.center.style.borderColor=r)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(r=void 0){var s,i,n;if(r===void 0)(s=this.axisX)==null||s.style.removeProperty("box-shadow"),(i=this.axisY)==null||i.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${r}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(ut,"size",20),ut),Ar=class nl extends sl{constructor(r,s,i,n,a){super(r,i,s);c(this,"center");c(this,"_graph");this.top=n,this.left=a,this.width=1,this.height=1,this.center=new nu("center",n,a,this,s),this.points.set("center",this.center),this.center.projectInnerPositionToDom(),this.center.onX.set("update point",l=>{this.left=l}),this.center.onY.set("update point",l=>{this.top=l}),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new al(this)),this._graph}static addAtPoint(r,s,i,n,a){return new nl(r,s,i,n,a)}setColorCallback(r){this.center.setColor(r)}isWithin(r,s){return this.center.isWithin(s,r)}getValues(){const r=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:r,max:r,avg:r}}async getAnalysisData(){return await this.file.service.pointAnalysisData(this.center.x,this.center.y)}setLeft(r){const s=Math.max(0,Math.min(this.file.width,Math.round(r)));this.center.x=s}setTop(r){const s=Math.max(0,Math.min(this.file.height,Math.round(r)));this.center.y=s}},al=class{constructor(t){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new me);c(this,"onGraphData",new me);c(this,"onAnalysisSelection",new me);this.analysis=t,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(t){this._value=t,this.onGraphData.call(t,this.analysis)}setMinActivation(t){this._min!==t&&(this._min=t,this.emitGraphActivation())}setMaxActivation(t){this._max!==t&&(this._max=t,this.emitGraphActivation())}setAvgActivation(t){this._avg!==t&&(this._avg=t,this.emitGraphActivation())}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const r=await e.getAnalysisData();this.value=r});const t=await this.getGraphData();this.value=t}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof Ar)return this._avg?[this.analysis.initialColor]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(this.analysis.initialColor)}),t}getGraphLabels(){if(this.analysis instanceof Ar)return this._avg?[this.analysis.name]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(`${this.analysis.name} ${e}`)}),t}hasDataToPrint(){return this.analysis instanceof Ar?this._avg:this._min||this._max||this._avg}getDtaAtTime(t){if(this.analysis instanceof Ar)return this._avg?[this.value[t]]:[];const e=[],r=this.value;return this._min&&e.push(r[t].min),this._max&&e.push(r[t].max),this._avg&&e.push(r[t].avg),e}},au=class extends il{constructor(t,e,r,s,i){super(t,e,r,s,i),this._color=i,this.setColor(i)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},ou=class extends au{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}getPercentXTranslationFromValue(e){return this.analysis.width+this.analysis.left===e?this.pxX:0}getPercentYTranslationFromValue(e){return this.analysis.height+this.analysis.top===e?this.pxY:0}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,r=>{e.x!==r&&(e.x=r)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,r=>{e.y!==r&&(e.y=r)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},ol=class extends sl{constructor(e,r,s,i,n,a,l){super(e,s,r);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let h=n,p=i;a!==void 0&&l!==void 0&&(h=n+a,p=i+l),this.area=this.buildArea(i,n,a,l),this.tl=this.addPoint("tl",i,n),this.tr=this.addPoint("tr",i,h),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,h),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(m=>m.projectInnerPositionToDom())}get graph(){return this._graph||(this._graph=new al(this)),this._graph}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,s,i){const n=Math.min(e,i),a=Math.max(e,i),l=Math.min(r,s),p=Math.max(r,s)-l,m=a-n;return{top:n,left:l,width:p,height:m}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,r=0,s=this.file.height,i=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<s&&(s=n.y),n.y>i&&(i=n.y)}),this.left=e,this.top=s,this.width=r-e,this.height=i-s,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,r,s){const i=new ou(e,r,s,this,this.color);return this.points.set(e,i),i}setLeft(e){this.leftmostPoint.x=e}setRight(e){this.rightmostPoint.x=e}setTop(e){this.topmostPoint.y=e}setBottom(e){this.bottommostPoint.y=e}get leftmostPoint(){let e=this.tl;return this.points.forEach(r=>{r.x<e.x&&(e=r)}),e}get rightmostPoint(){let e=this.tr;return this.points.forEach(r=>{r.x>e.x&&(e=r)}),e}get topmostPoint(){let e=this.tl;return this.points.forEach(r=>{r.y<e.y&&(e=r)}),e}get bottommostPoint(){let e=this.br;return this.points.forEach(r=>{r.y>e.y&&(e=r)}),e}},ll=class{constructor(t,e,r,s,i){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=t,this.build(),this.top=e,this.left=s,this.width=r,this.height=i}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},yo=class extends ll{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},bo=class pi extends ol{getType(){return"ellipsis"}static startAddingAtPoint(e,r,s,i,n){const a=new pi(e,r,s,i,n);return a.br.activate(),a}static build(e,r,s,i,n,a,l){const{top:h,left:p,width:m,height:f}=pi.calculateDimensionsFromCorners(i,n,a,l);return new pi(e,r,s,h,p,m,f)}buildArea(e,r,s,i){return s!==void 0&&i!==void 0?new yo(this,e,r,e+s,r+i):new yo(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,s=this.top,i=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=s;p<i;p++){const m=this.file.width*p;for(let f=e;f<=r;f++)if(this.isWithin(f,p)){const b=this.file.pixels[m+f];b<n&&(n=b),b>a&&(a=b),h+=b,l++}}return{min:n,max:a,avg:h/l}}isWithin(e,r){const s=this.left+this.width/2,i=this.top+this.height/2,n=(e-s)/(this.width/2),a=(r-i)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.service.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},wo=class extends ll{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},xo=class fi extends ol{getType(){return"rectangle"}static startAddingAtPoint(e,r,s,i,n){const a=new fi(e,r,s,i,n);return a.br.activate(),a}static build(e,r,s,i,n,a,l){const{top:h,left:p,width:m,height:f}=fi.calculateDimensionsFromCorners(i,n,a,l);return new fi(e,r,s,h,p,m,f)}buildArea(e,r,s,i){return s!==void 0&&i!==void 0?new wo(this,e,r,e+s,r+i):new wo(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,s=this.top,i=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=s;p<i;p++){const m=this.file.width*p;for(let f=e;f<=r;f++){const b=this.file.pixels[m+f];b<n&&(n=b),b>a&&(a=b),h+=b,l++}}return{min:n,max:a,avg:h/l}}async getAnalysisData(){return await this.file.service.rectAnalysisData(this.left,this.top,this.width,this.height)}},mi=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],lu=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new me);c(this,"onRemove",new me);c(this,"onSelectionChange",new me);c(this,"colors",mi);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var r;this.has(e)&&((r=this.get(e))==null||r.remove(),this.delete(e),this.layers=this.layers.filter(s=>s.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,r){const s=xo.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(s),s}placeRectAt(e,r,s,i,n){const a=xo.build(e,this.getNextColor(),this.drive.parent,r,s,i,n);return this.addAnalysis(a),a}createEllipsisFrom(e,r){const s=bo.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(s),s}placeEllipsisAt(e,r,s,i,n){const a=bo.build(e,this.getNextColor(),this.drive.parent,r,s,i,n);return this.addAnalysis(a),a}createPointAt(e,r){const s=Ar.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(s),s}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(s=>s.initialColor),r=mi.filter(s=>!e.includes(s));return r.length>0?r[0]:mi[0]}getNextName(e){return`${e} ${this.all.length}`}},cu=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,s)=>{const i=e?s.arrayOfActivePoints:s.arrayOfPoints;return[...r,...i]},[])}},hu=class extends rt{constructor(){super(...arguments);c(this,"layers",new lu(this));c(this,"points",new cu(this));c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const r=this.listenerLayerContainer.clientWidth,s=this.parent.width,n=e.layerX/r,a=Math.round(s*n),l=this.listenerLayerContainer.clientHeight,h=this.parent.height,m=e.layerY/l;return{top:Math.round(h*m),left:a}}activateListeners(){this.bindedPointerMoveListener=e=>{const r=this.getRelativePosition(e);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,r.top,r.left);const i=s.isWithin(r.top,r.left);i?this.currentTool.onPointEnter(s):i||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=e=>{const r=this.getRelativePosition(e);this.currentTool.onCanvasClick(r.top,r.left,this.parent),this.points.all.forEach(s=>{s.isWithin(r.top,r.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},du=class{constructor(t){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new me);c(this,"onAddGraph",new me);c(this,"onRemoveGraph",new me);this.drive=t,this.layers.onAdd.set(this.listenerKey,async e=>{const r=e.graph;this.addGraph(r),r.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),r.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(t){this._graphs.set(t.analysis.key,t),this.onAddGraph.call(t)}removeGraph(t){this._graphs.delete(t),this.onRemoveGraph.call(t)}get output(){return this._output}set output(t){this._output=t,this.onOutput.call(t)}refreshOutput(){const t={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{t.values[0].push(...e.getGraphLabels()),t.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((r,s)=>{let i=t.values[s+1];if(i===void 0){const a=new Date;a.setTime(parseInt(r)),i=[a],t.values[s+1]=i}i.push(...e.getDtaAtTime(parseInt(r)))})}),this.output=t,t}hasGraph(){return Object.values(this.graphs).find(t=>t.hasDataToPrint()).length>0}generateExportData(){const t={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const r of this.graphs.values()){const s=r.getGraphLabels();for(const i of s)e.push({key:i,displayLabel:`${i} (${r.analysis.initialColor}, ${r.analysis.width} x ${r.analysis.height} px)`});r.value&&Object.keys(r.value).forEach(i=>{if(!Object.keys(t).includes(i)){const a=parseInt(i),l=a+r.analysis.file.timestamp;t[i]={[e[0].key]:gr(a,"m:ss:SSS")+" ",[e[1].key]:gr(l,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:l}}const n=r.getDtaAtTime(parseInt(i));s.forEach((a,l)=>{t[i][a]=n[l]})})}return{header:e,data:Object.values(t)}}},uu=class extends rt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new me);c(this,"listeners",new du(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async r=>{this.value=r,r.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:r}=this.listeners.generateExportData(),s=Ti({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:r}),i=Td(s)(e);Rd(s)(i)}},cl=class hl extends Xd{constructor(r,s,i,n,a,l,h,p,m,f,b,x,S,D,k,I,U){super(r,s.thermalUrl,i,n,m,a,h,b,x,l,s.visibleUrl);c(this,"_export");this.group=r,this.service=s,this.width=i,this.height=n,this.timestamp=a,this.frameCount=l,this.duration=h,this.frameInterval=p,this.fps=f,this.min=b,this.max=x,this.bytesize=S,this.averageEmissivity=D,this.averageReflectedKelvins=k,this.firstFrame=I,this.timelineData=U,this.pixels=I.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new iu(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new Kd(this),this.visibleLayer=new Jd(this,this.visibleUrl),this.cursorLayer=new Zd(this),this.listenerLayer=new Qd(this),this.cursorValue=new ru(this,void 0),this.timeline=new tu(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new su(this,!1),this.analysis=new hu(this,[]),this.analysisData=new uu(this),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}this.analysis.value.forEach(s=>s.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(r,s,i,n){return new hl(r,s,i.width,i.height,i.timestamp,i.frameCount,i.duration,i.frameInterval,n.pixels,i.fps,i.min,i.max,i.bytesize,i.averageEmissivity,i.averageReflectedKelvins,n,i.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=r=>{this.cursorLayer.show=!0,this.isHover=!0;const s=this.width,i=this.root.clientWidth,n=s/i,a=Math.round(r.offsetX*n),l=Math.round(r.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:a,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(r){if(r!==void 0){const s=this.group.tool.value.getLabelValue(r.x,r.y,this);this.cursorLayer.setLabel(r.x,r.y,s),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(r)}},pu=class extends rt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},fu=class extends rl{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},Ui=class{constructor(t){c(this,"active",!1);this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},dl=class extends Ui{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,s)=>s===void 0?"":s.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},ea=class extends Ui{},mu=class extends ea{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag on the thermogram to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,s)=>{const i=s.group.tool.tools.inspect.getLabelValue(e,r,s);return`X:${e}<br />Y:${r}<br />${i}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,s){s.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,s){e.isInSelectedLayer()&&e.active&&(e.x=s,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},gu=class extends ea{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click on the thermogram to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,s)=>{const i=s.group.tool.tools.inspect.getLabelValue(e,r,s);return`X:${e}<br />Y:${r}<br />${i}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,s){s.analysis.layers.createPointAt(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis)}onPointMove(){}onPointLeave(){}onPointEnter(){}},vu=class extends ea{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag on the thermogram to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,s)=>{const i=s.group.tool.tools.inspect.getLabelValue(e,r,s);return`X:${e}<br />Y:${r}<br />${i}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,s){s.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,s){e.isInSelectedLayer()&&e.active&&(e.x=s,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},yu=class extends Ui{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,r,s){e.isInSelectedLayer()&&e.active&&(e.x=s,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,r,s){const i=s.getTemperatureAtPoint(e,r),n=s.analysis.layers.all.filter(l=>l.isWithin(e,r)).map(l=>l.selected?`<span style="color:${l.initialColor}">${l.name}</span>`:`<s style="color:${l.initialColor}">${l.name}</s>`);return`${n.length>0?n.join("<br />")+"<br />":""}${i&&i.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${r}`}},bu=[dl,gu,vu,mu,yu],wu=t=>{const e=bu.map(r=>{const s=new r(t);return[s.key,s]});return Object.fromEntries(e)},xu=class extends rt{constructor(e,r){super(e,r);c(this,"_tools",wu(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof Ui?this.value=e:this.value=this.tools[e]}},_u=class extends Ri{constructor(e,r,s,i){super();c(this,"hash",Math.random());c(this,"minmax",new fu(this,void 0));c(this,"tool",new xu(this,new dl(this)));c(this,"files",new pu(this,[]));c(this,"cursorPosition",new Wd(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=s,this.description=i}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},ul=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},bi=class pl extends ul{constructor(e,r,s){super(e),this.code=r,this.message=s}isSuccess(){return!1}static fromError(e){return new pl(e.url,e.code,e.message)}},fl=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Yr=class extends ul{constructor(e,r,s,i,n){super(i,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=r,this.parser=s,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async pointAnalysisData(e,r){return await this.parser.pointAnalysisData(this.buffer,e,r)}async rectAnalysisData(e,r,s,i){return await this.parser.rectAnalysisData(this.buffer,e,r,s,i)}async ellipsisAnalysisData(e,r,s,i){return await this.parser.ellipsisAnalysisData(this.buffer,e,r,s,i)}async createInstance(e){const r=await this.baseInfo(),s=await this.frameData(0),i=cl.fromService(e,this,r,s);return e.files.addFile(i),i}},$u=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),s=e.getUint16(19,!0),i=t.byteLength,n=(G,K)=>{const ce=G.getBigInt64(K,!0),q=62135596800000n,se=10000n,ie=24n*60n*60n*1000n*se,de=0x4000000000000000n,Ee=0x8000000000000000n;let Re=ce&0x3fffffffffffffffn;ce&Ee&&(Re>de-ie&&(Re-=de),Re<0&&(Re+=ie));const mt=Re/se-q;return Number(mt)},a=n(e,5),l=e.getUint8(15);let h=2;l===1&&(h=4);const p=57,m=r*s*h,f=p+m,b=t.slice(25),x=b.byteLength/f,S=G=>{const K=G*f,ce=K+f,q=b.slice(K,ce),se=new DataView(q),ie=se.getFloat32(8,!0),de=se.getFloat32(12,!0),Ee=n(se,0),We=se.getFloat32(24,!0),Re=se.getFloat32(28,!0);return{timestamp:Ee,min:ie,max:de,emissivity:We,reflectedKelvins:Re}},D=[];for(let G=0;G<x;G++){const K=S(G);D.push(K)}const k={emissivity:0,reflectedKelvins:0};let I=1/0,U=-1/0;const W=[];D.forEach(G=>{k.emissivity=k.emissivity+G.emissivity,k.reflectedKelvins=k.reflectedKelvins+G.reflectedKelvins,G.min<I&&(I=G.min),G.max>U&&(U=G.max),W.push(G.timestamp)});const z=W[0],N=[];W.forEach((G,K)=>{const ce=W[K+1];let q=0;ce===void 0&&(q=0),q=ce-G;const se=G-z;N.push({absolute:G,relative:se,offset:isNaN(q)?0:q,index:K})});const le=D[D.length-1].timestamp-D[0].timestamp,E=le/x,Y=1e3/E;return{width:r,height:s,timestamp:a,bytesize:i,frameCount:x,duration:le,frameInterval:E,fps:Y,timeline:N,min:I,max:U,averageEmissivity:k.emissivity/D.length,averageReflectedKelvins:k.reflectedKelvins/D.length}},Cu=(t,e)=>{const r=new DataView(t.slice(0,25)),s=r.getUint8(15),i=r.getUint16(17,!0),n=r.getUint16(19,!0),a=s===1?4:2,l=57,h=i*n*a,p=l+h,m=t.slice(25),f=e*p,b=f+p;return{array:m.slice(f,b),dataType:s}},Su=async(t,e)=>{const r=new DataView(t),s=r.getBigInt64(0,!0),i=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,h=0x8000000000000000n;let m=s&0x3fffffffffffffffn;s&h&&(m>l-a&&(m-=l),m<0&&(m+=a));const b=m/n-i,x=Number(b),S=r.getFloat32(8,!0),D=r.getFloat32(12,!0),k=r.getFloat32(24,!0),I=r.getFloat32(28,!0),U=t.slice(57);let W=[];if(e===0){const z=new Uint16Array(U),N=Math.abs(S-D),le=65535;z.forEach(E=>{const Y=E/le;W.push(S+N*Y)})}else e===1&&(W=Array.from(new Float32Array(U)));return{timestamp:x,min:S,max:D,emissivity:k,reflectedKelvins:I,pixels:W}},ku=async(t,e,r)=>{const s=new DataView(t),i=s.getUint16(17,!0),n=s.getUint16(19,!0),a=(I,U)=>{const W=I.getBigInt64(U,!0),z=62135596800000n,N=10000n,le=24n*60n*60n*1000n*N,E=0x4000000000000000n,Y=0x8000000000000000n;let K=W&0x3fffffffffffffffn;W&Y&&(K>E-le&&(K-=E),K<0&&(K+=le));const q=K/N-z;return Number(q)},l=s.getUint8(15);let h=2;l===1&&(h=4);const p=57,m=i*n*h,f=p+m,b=t.slice(25),x=b.byteLength/f,S={},D=I=>{const U=I*f,W=U+f,z=b.slice(U,W),N=new DataView(z),le=a(N,0),E=N.getFloat32(8,!0),G=N.getFloat32(12,!0)-E,ce=57+r*h*i+e*h;let q=0;if(l===1)q=N.getFloat32(ce,!0);else if(l===0){console.log("jsem uvnitř varia");const de=N.getInt16(ce,!0)/65535;q=E+G*de}return{timestamp:le,temperature:q}};let k=0;for(let I=0;I<x;I++){const U=D(I);k===0&&(k=U.timestamp),S[U.timestamp-k]=U.temperature}return S},Pu=async(t,e,r,s,i)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(W,z)=>{const N=W.getBigInt64(z,!0),le=62135596800000n,E=10000n,Y=24n*60n*60n*1000n*E,G=0x4000000000000000n,K=0x8000000000000000n;let q=N&0x3fffffffffffffffn;N&K&&(q>G-Y&&(q-=G),q<0&&(q+=Y));const ie=q/E-le;return Number(ie)},p=n.getUint8(15);let m=2;p===1&&(m=4);const f=57,b=a*l*m,x=f+b,S=t.slice(25),D=S.byteLength/x,k={},I=W=>{const z=W*x,N=z+x,le=S.slice(z,N),E=new DataView(le),Y=h(E,0),G=E.getFloat32(8,!0),ce=E.getFloat32(12,!0)-G,q=57,se=e,ie=e+s,de=r,Ee=r+i;let We=1/0,Re=-1/0,ft=0,mt=0;for(let It=de;It<=Ee;It++){const Ft=It*a;for(let jt=se;jt<=ie;jt++){const Dt=q+(Ft+jt)*m;let Ue=NaN;if(p===1)Ue=E.getFloat32(Dt,!0);else{const ot=E.getInt16(Dt,!0)/65535;Ue=G+ce*ot}Ue<We&&(We=Ue),Ue>Re&&(Re=Ue),mt+=Ue,ft++}}const Zt={min:We,max:Re,avg:mt/ft,count:ft};return{timestamp:Y,result:Zt}};let U=0;for(let W=0;W<D;W++){const z=I(W);U===0&&(U=z.timestamp),k[z.timestamp-U]=z.result}return k},Au=async t=>{let e=[];const r=async k=>{const I=new DataView(k.slice(0,25)),U=I.getUint8(15),W=I.getUint16(17,!0),z=I.getUint16(19,!0),N=U===1?4:2,le=57,E=W*z*N,Y=le+E,G=k.slice(25),K=G.byteLength/Y;let ce=[];for(let q=0;q<K;q++){const ie=q*Y+57,de=ie+E,Ee=G.slice(ie,de);U===0||U===1&&(ce=ce.concat(Array.from(new Float32Array(Ee))))}return ce};(await Promise.all(t.map(k=>r(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,I)=>k-I);const i=e[0],n=e[e.length-1],a=Math.abs(i-n),l=200,h=a/l,p=[];let m=[...e];for(let k=0;k<l;k++){const I=i+h*k,U=I+h,W=m.findIndex(Y=>Y>U),N=m.slice(0,W-1).length,le=N/e.length*100,E={from:I,to:U,count:N,percentage:le};p.push(E),m=m.slice(W)}const f=[...p].sort((k,I)=>k.percentage-I.percentage),b=f[0].percentage,x=f[f.length-1].percentage,S=Math.abs(b-x);return p.map(k=>({...k,height:k.percentage/S*100}))},Ou=(t,e)=>{const r=e.endsWith("lrc"),i=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&i},Du=async(t,e,r,s,i)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(z,N)=>{const le=z.getBigInt64(N,!0),E=62135596800000n,Y=10000n,G=24n*60n*60n*1000n*Y,K=0x4000000000000000n,ce=0x8000000000000000n;let se=le&0x3fffffffffffffffn;le&ce&&(se>K-G&&(se-=K),se<0&&(se+=G));const de=se/Y-E;return Number(de)},p=n.getUint8(15);let m=2;p===1&&(m=4);const f=57,b=a*l*m,x=f+b,S=t.slice(25),D=S.byteLength/x,k={},I=(z,N)=>{const le=e+s/2,E=r+i/2,Y=(z-le)/(s/2),G=(N-E)/(i/2);return Y*Y+G*G<=1},U=z=>{const N=z*x,le=N+x,E=S.slice(N,le),Y=new DataView(E),G=h(Y,0),K=Y.getFloat32(8,!0),q=Y.getFloat32(12,!0)-K,se=57,ie=e,de=e+s,Ee=r,We=r+i;let Re=1/0,ft=-1/0,mt=0,Zt=0;for(let Ft=Ee;Ft<=We;Ft++){const jt=Ft*a;for(let Dt=ie;Dt<=de;Dt++)if(I(Dt,Ft)){const Ue=se+(jt+Dt)*m;let Qe=NaN;if(p===1)Qe=Y.getFloat32(Ue,!0);else{const Ie=Y.getInt16(Ue,!0)/65535;Qe=K+q*Ie}Qe<Re&&(Re=Qe),Qe>ft&&(ft=Qe),Zt+=Qe,mt++}}const It={min:Re,max:ft,avg:Zt/mt,count:mt};return{timestamp:G,result:It}};let W=0;for(let z=0;z<D;z++){const N=U(z);W===0&&(W=N.timestamp),k[N.timestamp-W]=N.result}return k},Eu=[{extension:"lrc",minme:"application/octet-stream"}],Tu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Eu,is:Ou,baseInfo:$u,getFrameSubset:Cu,frameData:Su,registryHistogram:Au,pointAnalysisData:ku,rectAnalysisData:Pu,ellipsisAnalysisData:Du},ml=Object.freeze(Tu),Lu={LrcParser:ml},gl=Object.values(Lu),vl=(t,e)=>{const r=gl.find(s=>s.is(t,e));if(r===void 0)throw new fl(2,e,`No parser found for '${e}'.`);return r},yl=gl.map(t=>t.extensions),Ru=yl.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Mu=class bl{constructor(e,r,s){c(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=s}static fromUrl(e,r,s){return new bl(e,r,s)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new bi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const s=await r.arrayBuffer();try{const i=vl(s,this.thermalUrl);return this.pocessTheService(new Yr(this.service,s,i,this.thermalUrl,this.visibleUrl))}catch(i){if(i instanceof fl)return this.pocessTheService(bi.fromError(i));throw i}}pocessTheService(e){return e}},Uu=class wl{constructor(e,r){c(this,"_hover",!1);c(this,"onMouseEnter",new me);c(this,"onMouseLeave",new me);c(this,"onDrop",new me);c(this,"onProcessingEnd",new me);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const s=new wl(e,r);return s.hydrate(),s}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],s=e.dataTransfer;if(s&&s.files){for(const i of Array.from(s.files))if(i){const n=await this.service.loadUploadedFile(i);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const s=r.files[0],i=await this.service.loadUploadedFile(s);this.onDrop.call([i]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Ru,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},Iu=class{constructor(t){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const s=new ta(t).addOrGetRegistry(e);return{service:s.service,registry:s}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=vl(e,t.name);return new Yr(this,e,r,t.name)}catch(e){return new bi(t.name,3,e.message)}}handleDropzone(t){return Uu.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=Mu.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const s=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,s),s}}},Fu=class extends rt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},ju=class extends rt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,s){if(this._map.has(e))return this._map.get(e);const i=new _u(this.parent,e,r,s);return this._map.set(e,i),this.value.push(i),this.value=[...this.value],i}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Wu=class extends rt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(s=>s.getPixelsForHistogram()));this.parent.pool.exec((r,s,i,n,a)=>{let h=r.reduce((x,S)=>{const D=S.reduce((k,I)=>[...k,...I],[]);return[...x,...D]},[]).sort((x,S)=>x-S);const p=n/a;let m=s+p;const f=new Map;let b=0;for(;m!==!1;){const x=h.findIndex(k=>k>m),S=h.slice(0,x).length;f.set(m-p/2,S),b+=S,h=h.slice(x);const D=m+p;m=D<i?D:!1}return{result:f,resultCount:b}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(i=>i.files.value).reduce((i,n)=>(i=i.concat(n),i),[]).map(i=>i.service.buffer),s=await this.parent.pool.exec(ml.registryHistogram,[r]);this.value=s}},Nu=class extends rt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Hu=class extends rl{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,s)=>s.minmax.value===void 0?r:{min:s.minmax.value.min<r.min?s.minmax.value.min:r.min,max:s.minmax.value.max>r.max?s.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Bu=class extends Ri{constructor(e,r,s){super();c(this,"hash",Math.random());c(this,"groups",new ju(this,[]));c(this,"opacity",new Fu(this,1));c(this,"minmax",new Hu(this,void 0));c(this,"loading",new Nu(this,!1));c(this,"range",new Nd(this,void 0));c(this,"histogram",new Wu(this,[]));c(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,s&&s.histogramResolution!==void 0&&s.histogramResolution>0&&this.histogram.setResolution(s.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([s,i])=>{const n=this.groups.addOrGetGroup(s),a=await Promise.all(i.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(r.map(async({group:s,groupFiles:i})=>await Promise.all(i.map(async a=>a instanceof Yr?await a.createInstance(s):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const s=this.groups.addOrGetGroup(r),i=await this.service.loadFile(e.thermalUrl,e.visibleUrl);i instanceof Yr&&await i.createInstance(s),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},zu=class extends rt{validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>e.forEveryInstance(r=>{r.canvasLayer.canvas.style.imageRendering=t===!0?"auto":"pixelated"}))}setSmooth(t){this.value=t}},Vu=class extends rt{validate(t){return t}afterSetEffect(){}setGraphSmooth(t){this.value=t}},ta=class extends Ri{constructor(e,r){super();c(this,"id");c(this,"service",new Iu(this));c(this,"registries",{});c(this,"palette",new Yd(this,"jet"));c(this,"smooth",new zu(this,!1));c(this,"graphSmooth",new Vu(this,!1));c(this,"pool");this.pool=e||jd.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Bu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}},Yu=Object.defineProperty,wt=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&Yu(e,r,i),i};const _o=["ready","select"],Gu={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"},Aa=class Aa extends tt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new me,this.left=0,this.top=0,this.w=0,this.h=0}render(){return v`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){oh(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.onWrapper.call(e),this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(_o,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Gu[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(i=>!_o.includes(i)),r);const s=this.shadowRoot.getElementById("styles");s.children.length||this.localizeGlobalStylesheets(s)}),this.redraw()}propagateEvents(e,r){for(const s of e)google.visualization.events.addListener(r,s,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${s}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const e=this.chartWrapper.visualization.ha.O;this.left=e.left,this.top=e.top,this.w=e.width,this.h=e.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const s=await lo({cols:r});s.addRows(e),this._data=s}catch(s){this.shadowRoot.getElementById("chartdiv").textContent=String(s)}}dataChanged(){let e=this.data,r;if(!e)return;let s=!1;try{e=JSON.parse(e)}catch{s=typeof e=="string"||e instanceof String}s?r=fetch(e).then(i=>i.json()):r=Promise.resolve(e),r.then(lo).then(i=>{this._data=i})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const s of r){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",s.getAttribute("href")),e.appendChild(i)}}};Aa.styles=pe`
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
  `;let it=Aa;wt([_({type:String,reflect:!0})],it.prototype,"type");wt([_({type:Array})],it.prototype,"events");wt([_({type:Object,hasChanged:()=>!0})],it.prototype,"options");wt([_({type:Array})],it.prototype,"cols");wt([_({type:Array})],it.prototype,"rows");wt([_({type:String})],it.prototype,"data");wt([_({type:Object})],it.prototype,"view");wt([_({type:Array})],it.prototype,"selection");wt([_({type:Object})],it.prototype,"_data");wt([_({type:Number,reflect:!0})],it.prototype,"left");wt([_({type:Number,reflect:!0})],it.prototype,"top");wt([_({type:Number,reflect:!0})],it.prototype,"w");wt([_({type:Number,reflect:!0})],it.prototype,"h");customElements.define("thermal-chart",it);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qu=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ra={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ii=t=>(...e)=>({_$litDirective$:t,values:e});let sa=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this._$Ct=e,this._$AM=r,this._$Ci=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=(t,e)=>{var s;const r=t._$AN;if(r===void 0)return!1;for(const i of r)(s=i._$AO)==null||s.call(i,e,!1),ws(i,e);return!0},wi=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},xl=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Zu(e)}};function Xu(t){this._$AN!==void 0?(wi(this),this._$AM=t,xl(this)):this._$AM=t}function Ku(t,e=!1,r=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let n=r;n<s.length;n++)ws(s[n],!1),wi(s[n]);else s!=null&&(ws(s,!1),wi(s));else ws(this,t)}const Zu=t=>{t.type==ra.CHILD&&(t._$AP??(t._$AP=Ku),t._$AQ??(t._$AQ=Xu))};class Qu extends sa{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,s){super._$AT(e,r,s),xl(this),this.isConnected=e._$AU}_$AO(e,r=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),r&&(ws(this,e),wi(this))}setValue(e){if(qu(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=()=>new Ju;class Ju{}const Ln=new WeakMap,je=Ii(class extends Qu{render(t){return B}update(t,[e]){var s;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(s=t.options)==null?void 0:s.host,this.rt(this.ct=t.element)),B}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=Ln.get(e);r===void 0&&(r=new WeakMap,Ln.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Ln.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ep=Object.defineProperty,tp=Object.getOwnPropertyDescriptor,_l=(t,e,r,s)=>{for(var i=s>1?void 0:s?tp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&ep(e,r,i),i};let Cs=class extends tt{constructor(){super(),this.dialogRef=Me(),this.closeButtonRef=Me(),this.invokerRef=Me()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return v`
            <slot name="invoker" ${je(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${je(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${je(this.closeButtonRef)} @click=${this.setClose}>

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
                    <thermal-button variant="foreground" @click=${this.setClose}>Close</thermal-button>
                </div>
                
            
            </dialog>
        `}};Cs.shadowRootOptions={...tt.shadowRootOptions,mode:"open"};Cs.styles=pe`

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

        
    
    `;_l([_({type:String,reflect:!0})],Cs.prototype,"label",2);Cs=_l([Z("thermal-dialog")],Cs);var rp=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,Fi=(t,e,r,s)=>{for(var i=s>1?void 0:s?sp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&rp(e,r,i),i};let Jt=class extends tt{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return v`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Jt.VARIANTS=["slate","primary","foreground","background"];Jt.shadowRootOptions={...tt.shadowRootOptions,mode:"open"};Jt.styles=pe`

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
    
    `;Fi([_({type:String,converter:{fromAttribute:t=>Jt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Jt.prototype,"variant",2);Fi([_({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],Jt.prototype,"interactive",2);Fi([_({type:String})],Jt.prototype,"size",2);Jt=Fi([Z("thermal-button")],Jt);const Gr=Math.min,Qt=Math.max,xi=Math.round,vr=t=>({x:t,y:t}),ip={left:"right",right:"left",bottom:"top",top:"bottom"},np={start:"end",end:"start"};function $o(t,e,r){return Qt(t,Gr(e,r))}function Fs(t,e){return typeof t=="function"?t(e):t}function er(t){return t.split("-")[0]}function ji(t){return t.split("-")[1]}function $l(t){return t==="x"?"y":"x"}function Cl(t){return t==="y"?"height":"width"}function js(t){return["top","bottom"].includes(er(t))?"y":"x"}function Sl(t){return $l(js(t))}function ap(t,e,r){r===void 0&&(r=!1);const s=ji(t),i=Sl(t),n=Cl(i);let a=i==="x"?s===(r?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=_i(a)),[a,_i(a)]}function op(t){const e=_i(t);return[Wn(t),e,Wn(e)]}function Wn(t){return t.replace(/start|end/g,e=>np[e])}function lp(t,e,r){const s=["left","right"],i=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:s:e?s:i;case"left":case"right":return e?n:a;default:return[]}}function cp(t,e,r,s){const i=ji(t);let n=lp(er(t),r==="start",s);return i&&(n=n.map(a=>a+"-"+i),e&&(n=n.concat(n.map(Wn)))),n}function _i(t){return t.replace(/left|right|bottom|top/g,e=>ip[e])}function hp(t){return{top:0,right:0,bottom:0,left:0,...t}}function kl(t){return typeof t!="number"?hp(t):{top:t,right:t,bottom:t,left:t}}function qr(t){const{x:e,y:r,width:s,height:i}=t;return{width:s,height:i,top:r,left:e,right:e+s,bottom:r+i,x:e,y:r}}function Co(t,e,r){let{reference:s,floating:i}=t;const n=js(e),a=Sl(e),l=Cl(a),h=er(e),p=n==="y",m=s.x+s.width/2-i.width/2,f=s.y+s.height/2-i.height/2,b=s[l]/2-i[l]/2;let x;switch(h){case"top":x={x:m,y:s.y-i.height};break;case"bottom":x={x:m,y:s.y+s.height};break;case"right":x={x:s.x+s.width,y:f};break;case"left":x={x:s.x-i.width,y:f};break;default:x={x:s.x,y:s.y}}switch(ji(e)){case"start":x[a]-=b*(r&&p?-1:1);break;case"end":x[a]+=b*(r&&p?-1:1);break}return x}const dp=async(t,e,r)=>{const{placement:s="bottom",strategy:i="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:f}=Co(p,s,h),b=s,x={},S=0;for(let D=0;D<l.length;D++){const{name:k,fn:I}=l[D],{x:U,y:W,data:z,reset:N}=await I({x:m,y:f,initialPlacement:s,placement:b,strategy:i,middlewareData:x,rects:p,platform:a,elements:{reference:t,floating:e}});m=U??m,f=W??f,x={...x,[k]:{...x[k],...z}},N&&S<=50&&(S++,typeof N=="object"&&(N.placement&&(b=N.placement),N.rects&&(p=N.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):N.rects),{x:m,y:f}=Co(p,b,h)),D=-1)}return{x:m,y:f,placement:b,strategy:i,middlewareData:x}};async function Pl(t,e){var r;e===void 0&&(e={});const{x:s,y:i,platform:n,rects:a,elements:l,strategy:h}=t,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:b=!1,padding:x=0}=Fs(e,t),S=kl(x),k=l[b?f==="floating"?"reference":"floating":f],I=qr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(k)))==null||r?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:m,strategy:h})),U=f==="floating"?{x:s,y:i,width:a.floating.width,height:a.floating.height}:a.reference,W=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),z=await(n.isElement==null?void 0:n.isElement(W))?await(n.getScale==null?void 0:n.getScale(W))||{x:1,y:1}:{x:1,y:1},N=qr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:U,offsetParent:W,strategy:h}):U);return{top:(I.top-N.top+S.top)/z.y,bottom:(N.bottom-I.bottom+S.bottom)/z.y,left:(I.left-N.left+S.left)/z.x,right:(N.right-I.right+S.right)/z.x}}const up=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,s;const{placement:i,middlewareData:n,rects:a,initialPlacement:l,platform:h,elements:p}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:b,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:D=!0,...k}=Fs(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const I=er(i),U=er(l)===l,W=await(h.isRTL==null?void 0:h.isRTL(p.floating)),z=b||(U||!D?[_i(l)]:op(l));!b&&S!=="none"&&z.push(...cp(l,D,S,W));const N=[l,...z],le=await Pl(e,k),E=[];let Y=((s=n.flip)==null?void 0:s.overflows)||[];if(m&&E.push(le[I]),f){const q=ap(i,a,W);E.push(le[q[0]],le[q[1]])}if(Y=[...Y,{placement:i,overflows:E}],!E.every(q=>q<=0)){var G,K;const q=(((G=n.flip)==null?void 0:G.index)||0)+1,se=N[q];if(se)return{data:{index:q,overflows:Y},reset:{placement:se}};let ie=(K=Y.filter(de=>de.overflows[0]<=0).sort((de,Ee)=>de.overflows[1]-Ee.overflows[1])[0])==null?void 0:K.placement;if(!ie)switch(x){case"bestFit":{var ce;const de=(ce=Y.map(Ee=>[Ee.placement,Ee.overflows.filter(We=>We>0).reduce((We,Re)=>We+Re,0)]).sort((Ee,We)=>Ee[1]-We[1])[0])==null?void 0:ce[0];de&&(ie=de);break}case"initialPlacement":ie=l;break}if(i!==ie)return{reset:{placement:ie}}}return{}}}};function Al(t){const e=Gr(...t.map(n=>n.left)),r=Gr(...t.map(n=>n.top)),s=Qt(...t.map(n=>n.right)),i=Qt(...t.map(n=>n.bottom));return{x:e,y:r,width:s-e,height:i-r}}function pp(t){const e=t.slice().sort((i,n)=>i.y-n.y),r=[];let s=null;for(let i=0;i<e.length;i++){const n=e[i];!s||n.y-s.y>s.height/2?r.push([n]):r[r.length-1].push(n),s=n}return r.map(i=>qr(Al(i)))}const fp=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:s,rects:i,platform:n,strategy:a}=e,{padding:l=2,x:h,y:p}=Fs(t,e),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(s.reference))||[]),f=pp(m),b=qr(Al(m)),x=kl(l);function S(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&p!=null)return f.find(k=>h>k.left-x.left&&h<k.right+x.right&&p>k.top-x.top&&p<k.bottom+x.bottom)||b;if(f.length>=2){if(js(r)==="y"){const K=f[0],ce=f[f.length-1],q=er(r)==="top",se=K.top,ie=ce.bottom,de=q?K.left:ce.left,Ee=q?K.right:ce.right,We=Ee-de,Re=ie-se;return{top:se,bottom:ie,left:de,right:Ee,width:We,height:Re,x:de,y:se}}const k=er(r)==="left",I=Qt(...f.map(K=>K.right)),U=Gr(...f.map(K=>K.left)),W=f.filter(K=>k?K.left===U:K.right===I),z=W[0].top,N=W[W.length-1].bottom,le=U,E=I,Y=E-le,G=N-z;return{top:z,bottom:N,left:le,right:E,width:Y,height:G,x:le,y:z}}return b}const D=await n.getElementRects({reference:{getBoundingClientRect:S},floating:s.floating,strategy:a});return i.reference.x!==D.reference.x||i.reference.y!==D.reference.y||i.reference.width!==D.reference.width||i.reference.height!==D.reference.height?{reset:{rects:D}}:{}}}};async function mp(t,e){const{placement:r,platform:s,elements:i}=t,n=await(s.isRTL==null?void 0:s.isRTL(i.floating)),a=er(r),l=ji(r),h=js(r)==="y",p=["left","top"].includes(a)?-1:1,m=n&&h?-1:1,f=Fs(e,t);let{mainAxis:b,crossAxis:x,alignmentAxis:S}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof S=="number"&&(x=l==="end"?S*-1:S),h?{x:x*m,y:b*p}:{x:b*p,y:x*m}}const gp=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,s;const{x:i,y:n,placement:a,middlewareData:l}=e,h=await mp(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:i+h.x,y:n+h.y,data:{...h,placement:a}}}}},vp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:s,placement:i}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:k=>{let{x:I,y:U}=k;return{x:I,y:U}}},...h}=Fs(t,e),p={x:r,y:s},m=await Pl(e,h),f=js(er(i)),b=$l(f);let x=p[b],S=p[f];if(n){const k=b==="y"?"top":"left",I=b==="y"?"bottom":"right",U=x+m[k],W=x-m[I];x=$o(U,x,W)}if(a){const k=f==="y"?"top":"left",I=f==="y"?"bottom":"right",U=S+m[k],W=S-m[I];S=$o(U,S,W)}const D=l.fn({...e,[b]:x,[f]:S});return{...D,data:{x:D.x-r,y:D.y-s}}}}};function is(t){return Ol(t)?(t.nodeName||"").toLowerCase():"#document"}function vt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function xr(t){var e;return(e=(Ol(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ol(t){return t instanceof Node||t instanceof vt(t).Node}function zt(t){return t instanceof Element||t instanceof vt(t).Element}function Vt(t){return t instanceof HTMLElement||t instanceof vt(t).HTMLElement}function So(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof vt(t).ShadowRoot}function Ws(t){const{overflow:e,overflowX:r,overflowY:s,display:i}=Tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+r)&&!["inline","contents"].includes(i)}function yp(t){return["table","td","th"].includes(is(t))}function Wi(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ia(t){const e=na(),r=Tt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(r.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(r.contain||"").includes(s))}function bp(t){let e=yr(t);for(;Vt(e)&&!Xr(e);){if(Wi(e))return null;if(ia(e))return e;e=yr(e)}return null}function na(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Xr(t){return["html","body","#document"].includes(is(t))}function Tt(t){return vt(t).getComputedStyle(t)}function Ni(t){return zt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function yr(t){if(is(t)==="html")return t;const e=t.assignedSlot||t.parentNode||So(t)&&t.host||xr(t);return So(e)?e.host:e}function Dl(t){const e=yr(t);return Xr(e)?t.ownerDocument?t.ownerDocument.body:t.body:Vt(e)&&Ws(e)?e:Dl(e)}function Nn(t,e,r){var s;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=Dl(t),n=i===((s=t.ownerDocument)==null?void 0:s.body),a=vt(i);return n?e.concat(a,a.visualViewport||[],Ws(i)?i:[],a.frameElement&&r?Nn(a.frameElement):[]):e.concat(i,Nn(i,[],r))}function El(t){const e=Tt(t);let r=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const i=Vt(t),n=i?t.offsetWidth:r,a=i?t.offsetHeight:s,l=xi(r)!==n||xi(s)!==a;return l&&(r=n,s=a),{width:r,height:s,$:l}}function Tl(t){return zt(t)?t:t.contextElement}function Hr(t){const e=Tl(t);if(!Vt(e))return vr(1);const r=e.getBoundingClientRect(),{width:s,height:i,$:n}=El(e);let a=(n?xi(r.width):r.width)/s,l=(n?xi(r.height):r.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const wp=vr(0);function Ll(t){const e=vt(t);return!na()||!e.visualViewport?wp:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function xp(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==vt(t)?!1:e}function Ss(t,e,r,s){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=Tl(t);let a=vr(1);e&&(s?zt(s)&&(a=Hr(s)):a=Hr(t));const l=xp(n,r,s)?Ll(n):vr(0);let h=(i.left+l.x)/a.x,p=(i.top+l.y)/a.y,m=i.width/a.x,f=i.height/a.y;if(n){const b=vt(n),x=s&&zt(s)?vt(s):s;let S=b,D=S.frameElement;for(;D&&s&&x!==S;){const k=Hr(D),I=D.getBoundingClientRect(),U=Tt(D),W=I.left+(D.clientLeft+parseFloat(U.paddingLeft))*k.x,z=I.top+(D.clientTop+parseFloat(U.paddingTop))*k.y;h*=k.x,p*=k.y,m*=k.x,f*=k.y,h+=W,p+=z,S=vt(D),D=S.frameElement}}return qr({width:m,height:f,x:h,y:p})}function _p(t){let{elements:e,rect:r,offsetParent:s,strategy:i}=t;const n=i==="fixed",a=xr(s),l=e?Wi(e.floating):!1;if(s===a||l&&n)return r;let h={scrollLeft:0,scrollTop:0},p=vr(1);const m=vr(0),f=Vt(s);if((f||!f&&!n)&&((is(s)!=="body"||Ws(a))&&(h=Ni(s)),Vt(s))){const b=Ss(s);p=Hr(s),m.x=b.x+s.clientLeft,m.y=b.y+s.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+m.x,y:r.y*p.y-h.scrollTop*p.y+m.y}}function $p(t){return Array.from(t.getClientRects())}function Rl(t){return Ss(xr(t)).left+Ni(t).scrollLeft}function Cp(t){const e=xr(t),r=Ni(t),s=t.ownerDocument.body,i=Qt(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),n=Qt(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let a=-r.scrollLeft+Rl(t);const l=-r.scrollTop;return Tt(s).direction==="rtl"&&(a+=Qt(e.clientWidth,s.clientWidth)-i),{width:i,height:n,x:a,y:l}}function Sp(t,e){const r=vt(t),s=xr(t),i=r.visualViewport;let n=s.clientWidth,a=s.clientHeight,l=0,h=0;if(i){n=i.width,a=i.height;const p=na();(!p||p&&e==="fixed")&&(l=i.offsetLeft,h=i.offsetTop)}return{width:n,height:a,x:l,y:h}}function kp(t,e){const r=Ss(t,!0,e==="fixed"),s=r.top+t.clientTop,i=r.left+t.clientLeft,n=Vt(t)?Hr(t):vr(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,h=i*n.x,p=s*n.y;return{width:a,height:l,x:h,y:p}}function ko(t,e,r){let s;if(e==="viewport")s=Sp(t,r);else if(e==="document")s=Cp(xr(t));else if(zt(e))s=kp(e,r);else{const i=Ll(t);s={...e,x:e.x-i.x,y:e.y-i.y}}return qr(s)}function Ml(t,e){const r=yr(t);return r===e||!zt(r)||Xr(r)?!1:Tt(r).position==="fixed"||Ml(r,e)}function Pp(t,e){const r=e.get(t);if(r)return r;let s=Nn(t,[],!1).filter(l=>zt(l)&&is(l)!=="body"),i=null;const n=Tt(t).position==="fixed";let a=n?yr(t):t;for(;zt(a)&&!Xr(a);){const l=Tt(a),h=ia(a);!h&&l.position==="fixed"&&(i=null),(n?!h&&!i:!h&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ws(a)&&!h&&Ml(t,a))?s=s.filter(m=>m!==a):i=l,a=yr(a)}return e.set(t,s),s}function Ap(t){let{element:e,boundary:r,rootBoundary:s,strategy:i}=t;const a=[...r==="clippingAncestors"?Wi(e)?[]:Pp(e,this._c):[].concat(r),s],l=a[0],h=a.reduce((p,m)=>{const f=ko(e,m,i);return p.top=Qt(f.top,p.top),p.right=Gr(f.right,p.right),p.bottom=Gr(f.bottom,p.bottom),p.left=Qt(f.left,p.left),p},ko(e,l,i));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function Op(t){const{width:e,height:r}=El(t);return{width:e,height:r}}function Dp(t,e,r){const s=Vt(e),i=xr(e),n=r==="fixed",a=Ss(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const h=vr(0);if(s||!s&&!n)if((is(e)!=="body"||Ws(i))&&(l=Ni(e)),s){const f=Ss(e,!0,n,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else i&&(h.x=Rl(i));const p=a.left+l.scrollLeft-h.x,m=a.top+l.scrollTop-h.y;return{x:p,y:m,width:a.width,height:a.height}}function Rn(t){return Tt(t).position==="static"}function Po(t,e){return!Vt(t)||Tt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ul(t,e){const r=vt(t);if(Wi(t))return r;if(!Vt(t)){let i=yr(t);for(;i&&!Xr(i);){if(zt(i)&&!Rn(i))return i;i=yr(i)}return r}let s=Po(t,e);for(;s&&yp(s)&&Rn(s);)s=Po(s,e);return s&&Xr(s)&&Rn(s)&&!ia(s)?r:s||bp(t)||r}const Ep=async function(t){const e=this.getOffsetParent||Ul,r=this.getDimensions,s=await r(t.floating);return{reference:Dp(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Tp(t){return Tt(t).direction==="rtl"}const Lp={convertOffsetParentRelativeRectToViewportRelativeRect:_p,getDocumentElement:xr,getClippingRect:Ap,getOffsetParent:Ul,getElementRects:Ep,getClientRects:$p,getDimensions:Op,getScale:Hr,isElement:zt,isRTL:Tp},Rp=gp,Mp=vp,Up=up,Ip=fp,Fp=(t,e,r)=>{const s=new Map,i={platform:Lp,...r},n={...i.platform,_c:s};return dp(t,e,{...i,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=Ii(class extends sa{constructor(t){var e;if(super(t),t.type!==ra.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((s=this.nt)!=null&&s.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(i=this.nt)!=null&&i.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return mr}});var jp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,Ns=(t,e,r,s)=>{for(var i=s>1?void 0:s?Wp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&jp(e,r,i),i};let tr=class extends tt{constructor(){super(...arguments),this.dropdownRef=Me(),this.invokerRef=Me(),this.optionsRef=Me(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Fp(this.invokerRef.value,this.optionsRef.value,{middleware:[Rp(2),Up(),Ip(),Mp()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var s,i,n,a;t==="open"&&(r==="open"?((s=this.optionsRef.value)==null||s.classList.add("dropdown-options__show"),(i=this.dropdownRef.value)==null||i.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return v`

            <div class="dropdown" ${je(this.dropdownRef)}>

                <thermal-button class="${Bt(t)}" ${je(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?v`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:v`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${je(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};tr.shadowRootOptions={...tt.shadowRootOptions,mode:"open"};tr.styles=pe`

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
    
    `;Ns([Is({slot:"option"})],tr.prototype,"_options",2);Ns([_({type:String,reflect:!0})],tr.prototype,"open",2);Ns([_({type:String,reflect:!0,attribute:!0}),$()],tr.prototype,"interactive",2);Ns([_({type:String,reflect:!0})],tr.prototype,"variant",2);tr=Ns([Z("thermal-dropdown")],tr);var Np=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,Hi=(t,e,r,s)=>{for(var i=s>1?void 0:s?Hp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Np(e,r,i),i};let Kr=class extends tt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Me(),this.contentRef=Me(),this.rulerContentRef=Me()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const s=this.contentRef.value.clientWidth;this.lastContentWidth=s}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return v`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${je(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${je(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${je(this.contentRef)}>

                    ${this.collapsed===!1?v`
                        <slot></slot>    
                    `:B}
                
                </div>

            </div>

            ${this.collapsed?v`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:B}
        
        `}};Kr.styles=pe`

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

    `;Hi([$()],Kr.prototype,"collapsed",2);Hi([$()],Kr.prototype,"lastContentWidth",2);Hi([$()],Kr.prototype,"drawerRef",2);Kr=Hi([Z("thermal-bar")],Kr);var Bp=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,Rr=(t,e,r,s)=>{for(var i=s>1?void 0:s?zp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Bp(e,r,i),i};let rr=class extends tt{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Me(),this.contentRef=Me()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,a=r.contentRect.width,l=n-175,h=a-0,p=this.contentRef.value.offsetHeight,m=4/3;let f=0,b=0;p<l?(console.log("priorita šířky"),f=h,b=f/m):(console.log("priorita výšky"),b=l,f=b*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${b}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var s;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(s=this.appRef.value)==null||s.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return v`

        <div class="container ${this.dark?"dark":"normal"}" ${je(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?v`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?v`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?v`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:v`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:B}

                -->
                
            </div> 
        `:""}

        ${this.pre.length>=0?v`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${je(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

        </div>
        
        `}};rr.styles=pe`

        .dark {
            background-color: var( --thermal-slate ) !important;
        }

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            // box-shadow: var( --thermal-shadow );

            

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
    
    `;Rr([Is({slot:"bar",flatten:!0})],rr.prototype,"barItems",2);Rr([Is({slot:"bar",flatten:!0})],rr.prototype,"barElements",2);Rr([Is({slot:"pre",flatten:!0})],rr.prototype,"pre",2);Rr([_({type:String,reflect:!0})],rr.prototype,"fullscreen",2);Rr([_({type:String,reflect:!0,attribute:!0})],rr.prototype,"showfullscreen",2);Rr([_({type:String,reflect:!0,attribute:!0})],rr.prototype,"dark",2);rr=Rr([Z("thermal-app")],rr);var Vp=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,aa=(t,e,r,s)=>{for(var i=s>1?void 0:s?Yp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Vp(e,r,i),i};let ks=class extends tt{render(){return v`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&v`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};ks.styles=pe`
    
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

    `;aa([_({type:String})],ks.prototype,"label",2);aa([_({type:String})],ks.prototype,"hint",2);ks=aa([Z("thermal-field")],ks);var Gp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,Xp=(t,e,r,s)=>{for(var i=s>1?void 0:s?qp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Gp(e,r,i),i};let Hn=class extends tt{render(){return v`
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
                        <p>version ${qn}</p>
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
            </thermal-dialog-component>
        `}};Hn.styles=pe`

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
    
    `;Hn=Xp([Z("app-info-button")],Hn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Il=class extends Event{constructor(e,r,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ao=class{constructor(e,r,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Il(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Kp{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const s=r||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:s}]of this.subscriptions)r(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,r,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Zp=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Oo extends Kp{constructor(e,r,s){var i,n;super(r.context!==void 0?r.initialValue:s),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const h=new Set;for(const[p,{consumerHost:m}]of this.subscriptions)h.has(p)||(h.add(p),m.dispatchEvent(new Il(this.context,p,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(i=this.host).addController)==null||n.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Zp(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae({context:t}){return(e,r)=>{const s=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){s.set(this,new Oo(this,{context:t}))}),{get(){return e.get.call(this)},set(i){var n;return(n=s.get(this))==null||n.setValue(i),e.set.call(this,i)},init(i){var n;return(n=s.get(this))==null||n.setValue(i),i}};{e.constructor.addInitializer(a=>{s.set(a,new Oo(a,{context:t}))});const i=Object.getOwnPropertyDescriptor(e,r);let n;if(i===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){s.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=i.set;n={...i,set(l){s.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oe({context:t,subscribe:e}){return(r,s)=>{typeof s=="object"?s.addInitializer(function(){new Ao(this,{context:t,callback:i=>{r.set.call(this,i)},subscribe:e})}):r.constructor.addInitializer(i=>{new Ao(i,{context:t,callback:n=>{i[s]=n},subscribe:e})})}}let hi;const Qp=new Uint8Array(16);function Jp(){if(!hi&&(hi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!hi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return hi(Qp)}const et=[];for(let t=0;t<256;++t)et.push((t+256).toString(16).slice(1));function ef(t,e=0){return et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]}const tf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Do={randomUUID:tf};function rf(t,e,r){if(Do.randomUUID&&!e&&!t)return Do.randomUUID();t=t||{};const s=t.random||(t.rng||Jp)();return s[6]=s[6]&15|64,s[8]=s[8]&63|128,ef(s)}class Ut extends tt{constructor(){super(...arguments),this.UUID=rf()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const Fl="manager-instance",Bi="manager-palette-context",jl="manager-smooth-context",oa="manager-graph-function-context",sf=new ta,nf="__internal_default_registry",af="__internal_default_group",of=t=>t.addOrGetRegistry(nf),lf=t=>t.groups.addOrGetGroup(af);var cf=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,ns=(t,e,r,s)=>{for(var i=s>1?void 0:s?hf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&cf(e,r,i),i};let sr=class extends Ut{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Or.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();let t=sf;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=sr.sanitizeStringPalette(this.palette.key);e.palette=r,t=new ta(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)}),this.manager.smooth.addListener(this.UUIDManagerListeners,e=>{this.smooth=e}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,e=>{this.graphSmooth=e})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const s=sr.sanitizeStringPalette(r);this.manager.palette.setPalette(s)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(Or).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:Or[t]}}render(){return v`<slot></slot>`}};ns([Ae({context:Fl})],sr.prototype,"manager",2);ns([_({type:String,reflect:!0,attribute:!0})],sr.prototype,"slug",2);ns([Ae({context:Bi}),_({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:Or[t]}),toAttribute:t=>t.key.toString()}})],sr.prototype,"palette",2);ns([Ae({context:jl}),_({type:String,reflect:!0,attribute:!0})],sr.prototype,"smooth",2);ns([Ae({context:oa}),_({type:String,reflect:!0,attribute:!0})],sr.prototype,"graphSmooth",2);sr=ns([Z("manager-provider")],sr);var df=Object.defineProperty,uf=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&df(e,r,i),i};class Hs extends Ut{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}uf([oe({context:Fl,subscribe:!0}),$()],Hs.prototype,"manager");const Wl="registry-instance",Nl="registry-opacity",la="registry-range-from",ca="registry-range-to",pf="registry-loading",Hl="registry-min",Bl="registry-max";var ff=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,or=(t,e,r,s)=>{for(var i=s>1?void 0:s?mf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&ff(e,r,i),i};let Yt=class extends Hs{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=of(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var s;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r&&this.registry){const i=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};i.value!==void 0?(this.from!==((s=i.value)==null?void 0:s.from)||this.to!==i.value.to)&&i.setFixedRange(n):i.setFixedRange(n)}}if(t==="opacity"){const i=Math.min(1,Math.max(0,this.opacity));i!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(i)}}render(){return v`<slot></slot>`}};or([_({type:String,reflect:!0,attribute:!0})],Yt.prototype,"slug",2);or([Ae({context:Wl})],Yt.prototype,"registry",2);or([Ae({context:Nl}),_({type:Number,reflect:!0,attribute:!0})],Yt.prototype,"opacity",2);or([Ae({context:Hl}),$()],Yt.prototype,"min",2);or([Ae({context:Bl}),$()],Yt.prototype,"max",2);or([Ae({context:la}),_({type:Number,reflect:!0,attribute:!0})],Yt.prototype,"from",2);or([Ae({context:ca}),_({type:Number,reflect:!0,attribute:!0})],Yt.prototype,"to",2);or([Ae({context:pf}),_({type:String,reflect:!0,attribute:!0})],Yt.prototype,"loading",2);Yt=or([Z("registry-provider")],Yt);var gf=Object.defineProperty,vf=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&gf(e,r,i),i};class xt extends Hs{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}vf([oe({context:Wl,subscribe:!0})],xt.prototype,"registry");const zl="group-instance",ha="tool-context",da="tools-context";var yf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,Bs=(t,e,r,s)=>{for(var i=s>1?void 0:s?bf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&yf(e,r,i),i};let Zr=class extends xt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=lf(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return v`<slot></slot>`}};Bs([_({type:String,attribute:!0,reflect:!0})],Zr.prototype,"slug",2);Bs([Ae({context:zl})],Zr.prototype,"group",2);Bs([Ae({context:ha})],Zr.prototype,"tool",2);Bs([Ae({context:da})],Zr.prototype,"tools",2);Zr=Bs([Z("group-provider")],Zr);var wf=Object.defineProperty,xf=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&wf(e,r,i),i};class as extends xt{constructor(){super()}connectedCallback(){super.connectedCallback()}}xf([oe({context:zl,subscribe:!0})],as.prototype,"group");const Vl="file",Yl="failure",Gl="file-loading",_f="file-loaded",ua="file-provider-element",pa="file-ms-context",fa="file-cursor",ma="file-cursor-setter",zs="playback",ga="duration",va="playing",ql="playbackSpeed",Xl="recording",Kl="mayStop",$f="analysislist",ya="file-markers-context";var Cf=Object.defineProperty,nt=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&Cf(e,r,i),i};class Ze extends as{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const r=this.file.timeline._convertPercenttRelative(e),s=this.file.timeline.findPreviousRelative(r);this.cursor={absolute:s.absolute,ms:s.relative,percentage:e}}},this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new me,this.onSuccess=new me,this.onFailure=new me}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}attributeChangedCallback(e,r,s){var i,n,a;if(super.attributeChangedCallback(e,r,s),e==="ms"&&s&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(s)));l!==this.currentFrame.ms&&((i=this.file)==null||i.timeline.setRelativeTime(l))}e==="playing"&&(s==="true"?(n=this.file)==null||n.timeline.play():s==="false"&&((a=this.file)==null||a.timeline.pause())),e==="playbackspeed"&&this.file&&s&&Object.keys(Jn).includes(s)&&(this.file.timeline.playbackSpeed=parseFloat(s)),e==="recording"&&this.file&&(this.recording===!0&&s==="false"?this.file.recording.end():this.recording===!1&&s==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.playbackSpeed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}nt([Ae({context:Vl}),$()],Ze.prototype,"file");nt([Ae({context:Yl}),$()],Ze.prototype,"failure");nt([Ae({context:Gl}),$()],Ze.prototype,"loading");nt([Ae({context:_f}),$()],Ze.prototype,"ready");nt([Ae({context:va}),_({type:String,reflect:!0,attribute:!0})],Ze.prototype,"playing");nt([Ae({context:ga}),$()],Ze.prototype,"duration");nt([Ae({context:zs}),$()],Ze.prototype,"currentFrame");nt([Ae({context:fa})],Ze.prototype,"cursor");nt([Ae({context:ma})],Ze.prototype,"cursorSetter");nt([Ae({context:pa}),_({type:Number,reflect:!0,attribute:!0})],Ze.prototype,"ms");nt([Ae({context:ql}),_({type:Number,reflect:!0,attribute:!0})],Ze.prototype,"playbackSpeed");nt([Ae({context:Xl}),_({type:String,reflect:!0,attribute:!0})],Ze.prototype,"recording");nt([Ae({context:Kl}),$()],Ze.prototype,"mayStop");nt([Is({slot:"mark",flatten:!0})],Ze.prototype,"marksQueriedInternally");nt([Ae({context:ya})],Ze.prototype,"marksProvidedBelow");nt([Ae({context:$f})],Ze.prototype,"analysis");var Sf=Object.defineProperty,kf=Object.getOwnPropertyDescriptor,zi=(t,e,r,s)=>{for(var i=s>1?void 0:s?kf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Sf(e,r,i),i};let Ps=class extends Ze{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Yr?await e.createInstance(this.group).then(r=>(this.file=r,this.onSuccess.call(r),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(t=>{t instanceof cl?this.recieveInstance(t):this.failure=t})}render(){return v`
            <slot></slot>
            <slot name="mark"></slot>
        `}};zi([Ae({context:ua})],Ps.prototype,"providedSelf",2);zi([_({type:String,attribute:!0,reflect:!0})],Ps.prototype,"thermal",2);zi([_({type:String,attribute:!0,reflect:!0})],Ps.prototype,"visible",2);Ps=zi([Z("file-provider")],Ps);var Pf=Object.defineProperty,Af=Object.getOwnPropertyDescriptor,os=(t,e,r,s)=>{for(var i=s>1?void 0:s?Af(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Pf(e,r,i),i};let br=class extends Ze{constructor(){super(...arguments),this.providedSelf=this,this.container=Me(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof Yr){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof bi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return v`

                    <div class="container">
                        <div ${je(this.container)} class="${Bt(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${yl.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return v`
            ${this.ready?v`<slot></slot>`:B}
            <slot name="mark"></slot>
        `}};br.styles=pe`

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
    
    `;os([Ae({context:ua})],br.prototype,"providedSelf",2);os([$()],br.prototype,"container",2);os([$()],br.prototype,"ready",2);os([$()],br.prototype,"hover",2);os([$()],br.prototype,"listener",2);br=os([Z("file-dropin")],br);var Of=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,ba=(t,e,r,s)=>{for(var i=s>1?void 0:s?Df(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Of(e,r,i),i};let As=class extends as{constructor(){super(...arguments),this.container=Me(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return v`

            <div class="container">
            
                <div ${je(this.container)} class="${Bt(t)}"></div>

            </div>
        
        `}};As.styles=pe`

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
    
    `;ba([$()],As.prototype,"container",2);ba([$()],As.prototype,"hover",2);As=ba([Z("group-dropin")],As);var Ef=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,Zl=(t,e,r,s)=>{for(var i=s>1?void 0:s?Tf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Ef(e,r,i),i};let $i=class extends xt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return v`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return v`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Or).map(([t,e])=>v`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};$i.styles=pe`

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

    `;Zl([oe({context:Bi,subscribe:!0})],$i.prototype,"value",2);$i=Zl([Z("registry-palette-dropdown")],$i);var Lf=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,Ql=(t,e,r,s)=>{for(var i=s>1?void 0:s?Rf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Lf(e,r,i),i};let Ci=class extends xt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return v`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return v`
            <div class="container">
                ${Object.entries(Or).map(([t,e])=>v`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};Ci.styles=pe`

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

    `;Ql([oe({context:Bi,subscribe:!0}),$()],Ci.prototype,"value",2);Ci=Ql([Z("registry-palette-buttons")],Ci);var Mf=Object.defineProperty,Uf=Object.getOwnPropertyDescriptor,Jl=(t,e,r,s)=>{for(var i=s>1?void 0:s?Uf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Mf(e,r,i),i};let Si=class extends Hs{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.smooth.setSmooth(!1)}
            >Pixelated</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.smooth.setSmooth(!0)}
            >Smooth</thermal-button>
        `}};Si.styles=pe`
    
        :host {}

    `;Jl([oe({context:jl,subscribe:!0})],Si.prototype,"smooth",2);Si=Jl([Z("manager-smooth-switch")],Si);var If=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,ec=(t,e,r,s)=>{for(var i=s>1?void 0:s?Ff(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&If(e,r,i),i};let ki=class extends Hs{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
            >Straight lines</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
            >Smooth lines</thermal-button>
        `}};ki.styles=pe`
    
        :host {}

    `;ec([oe({context:oa,subscribe:!0})],ki.prototype,"smooth",2);ki=ec([Z("manager-graph-smooth-switch")],ki);var jf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,tc=(t,e,r,s)=>{for(var i=s>1?void 0:s?Wf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&jf(e,r,i),i};let Pi=class extends xt{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return v`
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
            <slot></slot>
        `}};Pi.styles=pe`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;tc([oe({context:Nl,subscribe:!0})],Pi.prototype,"value",2);Pi=tc([Z("registry-opacity-slider")],Pi);var Nf=Object.defineProperty,Hf=Object.getOwnPropertyDescriptor,Bf=(t,e,r,s)=>{for(var i=s>1?void 0:s?Hf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Nf(e,r,i),i};let Eo=class extends xt{doAction(){this.registry.range.applyAuto()}render(){return v`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Eo=Bf([Z("registry-range-auto-button")],Eo);var zf=Object.defineProperty,Vf=Object.getOwnPropertyDescriptor,Yf=(t,e,r,s)=>{for(var i=s>1?void 0:s?Vf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&zf(e,r,i),i};let To=class extends xt{doAction(){this.registry.range.applyMinmax()}render(){return v`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};To=Yf([Z("registry-range-full-button")],To);var Gf=Object.defineProperty,qf=Object.getOwnPropertyDescriptor,Vi=(t,e,r,s)=>{for(var i=s>1?void 0:s?qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Gf(e,r,i),i};let Gt=class extends xt{constructor(){super(...arguments),this.ticksRef=Me(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,s,i){const n=(t-e)*(i-s)/(r-e)+s;return this.clamp(n,s,i)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],s=Math.floor(e/Gt.TICK_WIDTH)-2,i=100/s;for(let n=1;n<s;n++)r.push(i*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return v`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${je(this.ticksRef)}>

                    ${this.ticks.map(t=>v`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Gt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Gt.TICK_WIDTH=40;Gt.TICK_FIXED=2;Gt.styles=pe`

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
                height: 7px;
                //background: currentcolor;
            }
        
        }

        .placement-top {
            margin-top: 10x;
            margin-bottom: calc( var( --thermal-gap ) * .5 );
            .tick {
                &::before {
                    background: currentcolor;
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


    `;Vi([_({type:String,reflect:!0})],Gt.prototype,"placement",2);Vi([$()],Gt.prototype,"minmax",2);Vi([$()],Gt.prototype,"ticks",2);Gt=Vi([Z("registry-ticks-bar")],Gt);var Xf=Object.defineProperty,Kf=Object.getOwnPropertyDescriptor,Vs=(t,e,r,s)=>{for(var i=s>1?void 0:s?Kf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Xf(e,r,i),i};let Qr=class extends xt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return v`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return v`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Vs([$()],Qr.prototype,"minmax",2);Vs([$()],Qr.prototype,"range",2);Vs([$()],Qr.prototype,"opacity",2);Vs([$()],Qr.prototype,"palette",2);Qr=Vs([Z("registry-log")],Qr);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,u,y)=>u in o?t(o,u,{enumerable:!0,configurable:!0,writable:!0,value:y}):o[u]=y,s=(o,u,y)=>(r(o,typeof u!="symbol"?u+"":u,y),y),i=(o,u)=>` ${u&&u.length>0?u.map(y=>`<link rel="stylesheet" href="${y}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",h="pointers-max-distance",p="range-dragging",m="data",f="min",b="max",x="step",S="round",D="type",k="theme",I="rtl",U="btt",W="disabled",z="keyboard-disabled",N="mousewheel-disabled",le="slider-width",E="slider-height",Y="slider-radius",G="slider-bg",K="slider-bg-hover",ce="slider-bg-fill",q="pointer-width",se="pointer-height",ie="pointer-radius",de="pointer-bg",Ee="pointer-bg-hover",We="pointer-bg-focus",Re="pointer-shadow",ft="pointer-shadow-hover",mt="pointer-shadow-focus",Zt="pointer-border",It="pointer-border-hover",Ft="pointer-border-focus",jt="animate-onclick",Dt="css-links",Ue="vertical",Qe="horizontal",_r=(o,u,y,g,M)=>{let ee=u-o;return ee===0?y:(g-y)*(M-o)/ee+y},ot=o=>!isNaN(parseFloat(o))&&isFinite(o),Ie=(o,u)=>ot(o)?Number(o):u,qs=(o,u)=>u===0?0:Math.round(o/u)*u,Ki=(o,u=1/0)=>{if(u===1/0)return o;let y=e(10,u);return Math.round(o*y)/y},Ge=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Zi=(o,u)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},Qi=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},Ji=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},en=(o,u)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},tn=(o,u)=>{if(!u||u.length<=0)return;let y=u.map(M=>ot(M)?Ie(M,M):M),g={values:y||[]};g.value=y[0],g.value0=y[0],g.value1=y[0];for(let M=1;M<y.length;M++)g[`value${M+1}`]=y[M];o.dispatchEvent(new CustomEvent("change",{detail:g}))},P=(o,u,y)=>{let g=0,M,ee,fe,F,j=!1,ge=(re,Le,Ke,qe,Ne,He)=>{let ct=g;Ke!==void 0&&re>Ke&&(re=Ke),Le!==void 0&&re<Le&&(re=Le),g=re;let ht=g;return(qe===Ue&&He||qe===Qe&&Ne)&&(ht=100-ht),qe===Ue?u.style.top=`${ht}%`:u.style.left=`${ht}%`,ct!==g},we=re=>re===u||u.contains(re),X=(re,Le,Ke,qe)=>{M=re,ee=Le,fe=Ke,F=qe},Oe=re=>{j=re,u.classList.toggle("disabled",j),j?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},Ct=(re,Le)=>{Le==null?u.removeAttribute(re):u.setAttribute(re,Le)},st=re=>u.getAttribute(re),te=re=>{if(!j){switch(re.key){case"ArrowLeft":{re.preventDefault(),typeof M=="function"&&M(y);break}case"ArrowRight":{re.preventDefault(),typeof ee=="function"&&ee(y);break}case"ArrowUp":{re.preventDefault(),typeof fe=="function"&&fe(y);break}case"ArrowDown":{re.preventDefault(),typeof F=="function"&&F(y);break}}en(o,re)}},ve=()=>{j||Zi(o,u)};return u.className=`pointer pointer-${y}`,u.addEventListener("keydown",te),u.addEventListener("click",ve),{$pointer:u,get percent(){return g},get disabled(){return j},set disabled(re){Oe(re)},updatePosition:ge,isClicked:we,setCallbacks:X,setAttr:Ct,getAttr:st,destroy:()=>{u.removeEventListener("keydown",te),u.removeEventListener("click",ve),u.remove()}}},T=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let u=o.split(","),y=[],g=!0;for(let M=0;M<u.length;M++){let ee=u[M].trim();ee!==""&&(y.push(ee),ot(ee)||(g=!1))}return g?y.map(M=>Number(M)):y},L=(o,u)=>u?u.findIndex(y=>y===o||y.toString().trim()===o.toString().trim()):-1,R=o=>({updatePosition:(u,y,g,M)=>{if(y.length<=0)return;let ee=y.length===1,fe=y[0],F=y[y.length-1];u===Ue?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),ee?o.style.height=`${fe}%`:o.style.height=`${Math.abs(fe-F)}%`,M?(o.style.bottom="0%",ee?o.style.top="auto":o.style.top=`${Math.min(100-F,100-fe)}%`):(o.style.bottom="auto",ee?o.style.top="0%":o.style.top=`${Math.min(fe,F)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),ee?o.style.width=`${fe}%`:o.style.width=`${Math.abs(fe-F)}%`,g?(o.style.right="0%",ee?o.style.left="auto":o.style.left=`${Math.min(100-F,100-fe)}%`):(o.style.right="auto",ee?o.style.left="0%":o.style.left=`${Math.min(fe,F)}%`))}}),J="--animate-onclick",Se="--width",ae="--height",Te="--panel-bg-border-radius",_e="--panel-bg",H="--panel-bg-hover",$e="--panel-bg-fill",C="--pointer-width",A="--pointer-height",he="--pointer-border-radius",ye="--pointer-bg",Ve="--pointer-bg-hover",Je="--pointer-bg-focus",Wt="--pointer-shadow",gt="--pointer-shadow-hover",$t="--pointer-shadow-focus",hr="--pointer-border",Q="--pointer-border-hover",ue="--pointer-border-focus",O=(o,u,y)=>{let g=new Map;for(let M of o.attributes){let ee=M.nodeName.trim().toLowerCase();if(!u.test(ee))continue;let fe=ee.replace(/\D/g,"").trim(),F=fe===""||fe==="0"||fe==="1"?0:Ie(fe,0)-1,j=y&&typeof y=="function"?y(M.value):M.value;g.set(F,j)}return g},ne=o=>{if(!o)return null;let u=o.getAttribute(Dt);if(!u)return null;let y=u.split(";"),g=[];for(let M of y)M.trim()!==""&&g.push(M.trim());return g},ke=[[Se,le,"sliderWidth",null],[ae,E,"sliderHeight",null],[Te,Y,"sliderRadius",null],[_e,G,"sliderBg",null],[H,K,"sliderBgHover",null],[$e,ce,"sliderBgFill",null],[C,q,"pointer#Width",/^pointer([0-9]*)-width$/],[A,se,"pointer#Height",/^pointer([0-9]*)-height$/],[he,ie,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ye,de,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ve,Ee,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Je,We,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Wt,Re,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[gt,ft,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[$t,mt,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[hr,Zt,"pointer#Border",/^pointer([0-9]*)-border$/],[Q,It,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[ue,Ft,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Ce=(o,u,y)=>{let g=null,M=[],ee=new Map,fe=(te,ve=u)=>{let re=[...ve.classList];for(let Le of re)Le.startsWith(te)&&u.classList.remove(Le)},F=()=>{fe("shape");let te=u.querySelectorAll(".pointer");for(let ve of te)fe("shape",ve)},j=te=>{g=te,fe("theme-"),typeof te=="string"&&u.classList.add(`theme-${te}`)},ge=()=>{if(F(),!(M.length<=0)){u.classList.add("shape",`shape-${M[0]}`);for(let te=1;te<M.length;te++){let ve=M[te];if(!ve)continue;let re=u.querySelector(`.pointer-${te}`);!re||re.classList.add("shape",`shape-${ve}`)}}},we=(te,ve)=>{M[te]=ve,ge()},X=()=>{F();let te=O(o,/^pointer([0-9]*)-shape$/);if(!(te.size<=0)){for(let ve of te){let re=ve[0];M[re]=ve[1]}ge()}},Oe=(te,ve)=>`${te}-${ve}`,Ct=(te,ve,re)=>{let Le=y[re];if(!Le)return;let Ke=re===0?u:Le.$pointer;if(ve==null){ee.has(Oe(te,re))&&ee.delete(Oe(te,re)),Ke.style.removeProperty(te);return}ee.set(Oe(te,re),ve),Ke.style.setProperty(te,ve)},st=(te,ve)=>ee.get(Oe(te,ve));return(()=>{for(let te of ke){let[ve,re,Le,Ke]=te;if(Ke){let Ne=O(o,Ke);for(let He of Ne){let ct=He[0],ht=He[1];Ct(ve,ht,ct)}}else{let Ne=o.getAttribute(re);Ct(ve,Ne,0)}let qe=[];if(Le.indexOf("#")===-1)qe.push([Le,0]);else{qe.push([Le.replace("#",""),0]),qe.push([Le.replace("#","0"),0]),qe.push([Le.replace("#","1"),0]);for(let Ne=1;Ne<y.length;Ne++)qe.push([Le.replace("#",(Ne+1).toString()),Ne])}for(let Ne of qe)try{let He=Ne[0],ct=Ne[1];Object.prototype.hasOwnProperty.call(o,He)||Object.defineProperty(o,He,{get(){return st(ve,ct)},set:ht=>{Ct(ve,ht,ct)}})}catch(He){console.error(He)}}j(o.getAttribute(k)),X()})(),{setStyle:Ct,getStyle:st,get theme(){return g},set theme(te){j(te)},get pointerShapes(){return M},setPointerShape:we}},Fe="animate-on-click",be="range-dragging",lt=(o,u,y,g)=>{let M=[],ee=we=>{for(let X of M)X.update&&typeof X.update=="function"&&X.update(we)},fe=()=>{for(let we of M)we.destroy&&typeof we.destroy=="function"&&we.destroy()},F=(we,X)=>{for(let Oe of M)Oe.onAttrChange&&typeof Oe.onAttrChange=="function"&&Oe.onAttrChange(we,X)},j=we=>{if(we.gettersAndSetters){for(let X of we.gettersAndSetters)if(!(!X.name||!X.attributes))try{Object.prototype.hasOwnProperty.call(o,X.name)||Object.defineProperty(o,X.name,X.attributes)}catch(Oe){console.error("defineSettersGetters error:",Oe)}}},ge=we=>{var X;if(!we.css)return;let Oe=(X=o.shadowRoot)==null?void 0:X.querySelector("style");!Oe||(Oe.innerHTML+=we.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let we of window.tcRangeSliderPlugins){let X=we();M.push(X),X.init&&typeof X.init=="function"&&(X.init(o,u,y,g),j(X),ge(X))}},update:ee,onAttrChange:F,destroy:fe}},Ye=10,Xs=20,ic=(o,u)=>{let y=new Map,g=/^value([0-9]*)$/;for(let F of o.attributes){let j=F.nodeName.trim().toLowerCase();if(!g.test(j))continue;let ge=j.replace("value","").trim(),we=ge===""||ge==="0"||ge==="1"?0:Ie(ge,0)-1,X=ot(F.value)?Ie(F.value,0):F.value;y.set(we,X)}let M=Math.max(...Array.from(y.keys())),ee=[];ee.push([P(o,u,0),y.get(0)]);let fe=u;for(let F=1;F<=M;F++){let j=u.cloneNode(!0);fe.after(j),fe=j,ee.push([P(o,j,F),y.get(F)])}return ee},Oa=(o,u,y,g,M,ee,fe)=>{try{Object.defineProperty(o,g,{configurable:!0,get(){if(!u)return;let F=u.pointers[y];if(!F)return;let j=u.getTextValue(F.percent);return ot(j)?Ie(j,j):j},set:F=>{u.pointers[y]?u==null||u.setValue(F,y):u==null||u.addPointer(F)}}),Object.defineProperty(o,M,{configurable:!0,get(){var F,j;return(j=(F=u==null?void 0:u.pointers[y])==null?void 0:F.getAttr("aria-label"))!=null?j:void 0},set:F=>{!u||u.setAriaLabel(y,F)}}),Object.defineProperty(o,ee,{configurable:!0,get(){var F,j;return(j=(F=u==null?void 0:u.styles)==null?void 0:F.pointerShapes[y])!=null?j:null},set:F=>{!u||!u.styles||u.styles.setPointerShape(y,F)}}),Object.defineProperty(o,fe,{configurable:!0,get(){var F;return(F=u==null?void 0:u.pointers[y].disabled)!=null?F:!1},set:F=>{if(!u)return;let j=u==null?void 0:u.pointers[y];!j||(j.disabled=F)}})}catch(F){console.error(F)}},nc=(o,u)=>{let y=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Ye;g++)y.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of y)Oa(o,u,g[4],g[0],g[1],g[2],g[3])},Da=(o,u,y)=>{var g;let M=(g=y.shadowRoot)==null?void 0:g.querySelector(".container");if(M)for(let ee of o)u?M.prepend(ee.$pointer):M.append(ee.$pointer)},ac=(o,u)=>{if(!(!u||o.length<=1)){for(let y of o)y.$pointer.style.zIndex=Xs.toString();u.$pointer.style.zIndex=(Xs*2).toString()}},rn=0,ds=100,Ir=2,Ea="0.3s",oc=(o,u,y)=>{let g=y.map(d=>d[0]),M=null,ee=null,fe=null,F=null,j=rn,ge=ds,we,X,Oe=Qe,Ct=Ir,st=!1,te=!1,ve=!1,re=0,Le=1/0,Ke=!1,qe,Ne,He=!1,ct=!1,ht=!1,dr=Ea,Ta=[],La=d=>{He||(d.preventDefault&&d.preventDefault(),$r(d),window.addEventListener("mousemove",$r),window.addEventListener("mouseup",Ks),Qi(o,d))},Ks=d=>{He||(qe=void 0,Ne=void 0,window.removeEventListener("mousemove",$r),window.removeEventListener("mouseup",Ks),dr&&u.classList.add(Fe),Ji(o,d))},hc=(d,w)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(d)&&dr&&u.classList.remove(Fe),g[0];let V=uc(d);if(Ke){let Pe=w,Et=Qs(Pe);Et!==void 0&&(Pe=qs(Pe,Et)),V?(qe=Pe,Ne=0,dr&&u.classList.remove(Fe)):qe!==void 0&&(Ne=Pe-qe,qe=Pe)}if(!dc(d)&&!V){for(let Pe of g)if(!(!Pe.isClicked(d)||Pe.disabled))return dr&&u.classList.remove(Fe),Pe;for(let Pe of g)if(M===Pe)return Pe}let De=1/0,Be=null;for(let Pe of g){if(Pe.disabled)continue;let Et=Math.abs(w-Pe.percent);Et<De&&(De=Et,Be=Pe)}return Be},Ra=()=>g.findIndex(d=>M===d&&!d.disabled),$r=d=>{let w;if(Oe===Ue){let{height:De,top:Be}=u.getBoundingClientRect(),Pe=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;w=Math.min(Math.max(0,Pe-Be),De)*100/De}else{let{width:De,left:Be}=u.getBoundingClientRect(),Pe=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;w=Math.min(Math.max(0,Pe-Be),De)*100/De}if((st||te)&&(w=100-w),M=hc(d.target,w),M&&ac(g,M),Ke&&g.length>1&&Ne!==void 0){let De=g[0],Be=g[g.length-1],Pe=De.percent+Ne<0,Et=Be.percent+Ne>100;if(Pe||Et)return;for(let ai=0;ai<g.length;ai++)dt(ai,g[ai].percent+Ne);return}let V=Ra();V!==-1&&(dt(V,w),M==null||M.$pointer.focus())},Zs=d=>{if(He||document.activeElement!==o||M!=null&&M.disabled)return;d.stopPropagation(),d.preventDefault();let w=d.deltaY<0,V=st||te,De=w?!V:V,Be=Ra();Be!==-1&&(De?us(Be,g[Be].percent):ps(Be,g[Be].percent))},Ma=d=>{He||ct||(Oe===Ue?te?dt(d,100):dt(d,0):st?ps(d,g[d].percent):us(d,g[d].percent))},Ua=d=>{He||ct||(Oe===Ue?te?dt(d,0):dt(d,100):st?us(d,g[d].percent):ps(d,g[d].percent))},Ia=d=>{He||ct||(Oe===Ue?te?ps(d,g[d].percent):us(d,g[d].percent):st?dt(d,100):dt(d,0))},Fa=d=>{He||ct||(Oe===Ue?te?us(d,g[d].percent):ps(d,g[d].percent):st?dt(d,0):dt(d,100))},dc=d=>d.classList.contains("panel"),uc=d=>d.classList.contains("panel-fill"),us=(d,w)=>{if(w===void 0)return;let V=Qs(w);V==null&&(V=1),w-=V,w<0&&(w=0),dt(d,w)},ps=(d,w)=>{if(w===void 0)return;let V=Qs(w);V==null&&(V=1),w+=V,w>100&&(w=100),dt(d,w)},Cr=()=>{!F||F.update({percents:ja(),values:Wa(),$pointers:Na(),min:Ha(),max:Ba(),data:an(),step:nn(),round:ln(),type:on(),textMin:Js(),textMax:ei(),rightToLeft:dn(),bottomToTop:un(),pointersOverlap:gn(),pointersMinDistance:cn(),pointersMaxDistance:hn(),rangeDragging:vn(),disabled:pn(),keyboardDisabled:fn(),mousewheelDisabled:mn()})},pc=()=>{Cr()},fc=d=>{if(!(ve||g.length<=1||ge===j))if(d===0){let w=Le*100/(ge-j);return Math.max(0,g[d+1].percent-w)}else{let w=re*100/(ge-j);return Math.min(g[d-1].percent+w,100)}},mc=d=>{if(!(ve||g.length<=1||ge===j))if(d===g.length-1){let w=Le*100/(ge-j);return Math.min(g[d-1].percent+w,100)}else{let w=re*100/(ge-j);return Math.max(0,g[d+1].percent-w)}},Qs=d=>{let w;if(typeof we=="function"){let V=_r(0,100,j,ge,d);w=we(V,d)}else w=we;if(ot(w)){let V=ge-j;return w=V===0?0:w*100/V,w}},Fr=d=>{if(d===void 0)return;let w=_r(0,100,j,ge,d);return X!==void 0?X[Math.round(w)]:Ki(w,Ct)},Js=()=>X!==void 0?X[j]:j,ei=()=>X!==void 0?X[ge]:ge,nn=()=>we,gc=d=>{var w;return d<=0||ve?Js():(w=Fr(g[d-1].percent))!=null?w:""},vc=d=>{var w;return g.length<=1||d>=g.length-1||ve?ei():(w=Fr(g[d+1].percent))!=null?w:""},ja=()=>g.map(d=>d.percent),Wa=()=>g.map(d=>Fr(d.percent)),Na=()=>g.map(d=>d.$pointer),Ha=()=>j,Ba=()=>ge,an=()=>X,on=()=>Oe,ln=()=>Ct,cn=()=>re,hn=()=>Le,yc=d=>Ta[d],dn=()=>st,un=()=>te,pn=()=>He,fn=()=>ct,mn=()=>ht,gn=()=>ve,vn=()=>Ke,dt=(d,w)=>{if(w===void 0)return;let V=Qs(w);V!==void 0&&(w=qs(w,V));let De=g[d];if(!De)return;let Be=De.updatePosition(w,fc(d),mc(d),Oe,st,te);ee==null||ee.updatePosition(Oe,g.map(Pe=>Pe.percent),st,te),Cr();for(let Pe of g){let Et=Fr(Pe.percent);Et!==void 0&&(Pe.setAttr("aria-valuenow",Et.toString()),Pe.setAttr("aria-valuetext",Et.toString()))}wc(),Be&&tn(o,g.map(Pe=>Fr(Pe.percent)))},Nt=()=>{for(let d=0;d<g.length;d++)dt(d,g[d].percent)},bc=(d,w)=>{j=X!==void 0?0:Ie(d,rn),ge=X!==void 0?X.length-1:Ie(w,ds),ti(j),ri(ge)},wc=()=>{var d,w;for(let V=0;V<g.length;V++){let De=g[V];De.setAttr("aria-valuemin",((d=gc(V))!=null?d:"").toString()),De.setAttr("aria-valuemax",((w=vc(V))!=null?w:"").toString())}},ti=d=>{j=Ie(d,rn),j>ge&&(ge=j+ds),Nt()},ri=d=>{ge=Ie(d,ds),ge<j&&(ge=j+ds),Nt()},za=d=>{ve=!0;for(let w=0;w<d.length;w++)si(d[w],w);ve=!1;for(let w=0;w<d.length;w++)si(d[w],w)},si=(d,w)=>{let V;X!==void 0?(V=d==null?0:L(d,X),V===-1&&(V=0)):(V=Ie(d,j),V<j&&(V=j),V>ge&&(V=ge));let De=_r(j,ge,0,100,V);dt(w,De)},ii=d=>{if(d==null){we=void 0;return}if(typeof d=="function"){we=d,Nt();return}if(ot(d)){we=Ie(d,1);let w=Math.abs(ge-j);we>w&&(we=void 0),Nt();return}we=void 0},yn=d=>{ve=d,Nt()},bn=d=>{(!ot(d)||d<0)&&(d=0),re=d},wn=d=>{(!ot(d)||d<0)&&(d=1/0),Le=d},xn=d=>{He=d,u.classList.toggle("disabled",He),He?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},Va=d=>{ct=d},Ya=d=>{ht=d,ht?document.removeEventListener("wheel",Zs):document.addEventListener("wheel",Zs,{passive:!1})},_n=d=>{if(d==null){X=void 0;return}if(X=T(d),X===void 0||X.length<=0){X=void 0;return}ti(0),ri(X.length-1),we===void 0&&ii(1)},$n=d=>{var w;typeof d=="string"?Oe=d.trim().toLowerCase()===Ue?Ue:Qe:Oe=Qe;let V=(w=o.shadowRoot)==null?void 0:w.querySelector(".range-slider-box");if(!V)return;V.className=`range-slider-box type-${Oe}`,Nt();let De=Oe===Ue?"vertical":"horizontal";for(let Be of g)Be.setAttr("aria-orientation",De)},Cn=d=>{st=d,g.length>1&&Da(g,st,o),Nt(),Cr()},Sn=d=>{te=d,g.length>1&&Da(g,te,o),Nt(),Cr()},kn=d=>{Ct=Ie(d,Ir),Ct<0&&(Ct=Ir),Cr()},Ga=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(dr=void 0,u.style.removeProperty(J),u.classList.remove(Fe)):(dr=d.toString(),u.style.setProperty(J,dr),u.classList.add(Fe))},qa=(d,w)=>{let V=g[d];!V||(V.setAttr("aria-label",w),Ta[d]=w)},ni=d=>{if(qe=void 0,g.length<=1){Ke=!1,u.classList.remove(be);return}Ke=d,u.classList.toggle(be,Ke)},xc=()=>{xn(Ge(o.getAttribute(W))),ct=Ge(o.getAttribute(z)),ht=Ge(o.getAttribute(N));let d=O(o,/^pointer([0-9]*)-disabled$/,w=>Ge(w));for(let w of d){let V=w[0];!g[V]||(g[V].disabled=w[1])}},_c=()=>{let d=O(o,/^aria-label([0-9]*)$/);for(let w of d){let V=w[0];qa(V,w[1])}},$c=d=>{let w=g.length,V=g[w-1].$pointer,De=V.cloneNode(!0);V.after(De);let Be=P(o,De,w);return Be.setCallbacks(Ma,Ua,Ia,Fa),g.push(Be),si(d,w),Nt(),Cr(),w},Cc=()=>{let d=g.length,w=g[d-1];return w?(w.destroy(),g.pop(),g.length<=1&&ni(!1),Nt(),Cr(),d-1):-1};return(()=>{var d,w;for(let De of g)De.setCallbacks(Ma,Ua,Ia,Fa);let V=(d=o.shadowRoot)==null?void 0:d.querySelector(".panel-fill");V&&(ee=R(V)),$n(o.getAttribute(D)),Cn(Ge(o.getAttribute(I))),Sn(Ge(o.getAttribute(U))),bc(o.getAttribute(f),o.getAttribute(b)),ii(o.getAttribute(x)),_n(o.getAttribute(m)),za(y.map(De=>De[1])),yn(Ge(o.getAttribute(a))),bn(Ie(o.getAttribute(l),0)),wn(Ie(o.getAttribute(h),1/0)),ni(Ge(o.getAttribute(p))),kn(Ie(o.getAttribute(S),Ir)),xc(),_c(),fe=Ce(o,u,g),Ga((w=o.getAttribute(jt))!=null?w:Ea),u.addEventListener("mousedown",La),u.addEventListener("mouseup",Ks),u.addEventListener("touchmove",$r),u.addEventListener("touchstart",$r),ht||document.addEventListener("wheel",Zs,{passive:!1}),F=lt(o,pc,{setValues:za,setMin:ti,setMax:ri,setStep:ii,setPointersOverlap:yn,setPointersMinDistance:bn,setPointersMaxDistance:wn,setDisabled:xn,setType:$n,setRightToLeft:Cn,setBottomToTop:Sn,setRound:kn,setKeyboardDisabled:Va,setMousewheelDisabled:Ya,setRangeDragging:ni,setData:_n},{getPercents:ja,getValues:Wa,getPointerElements:Na,getMin:Ha,getMax:Ba,getStep:nn,getData:an,getType:on,getRound:ln,getTextMin:Js,getTextMax:ei,isRightToLeft:dn,isBottomToTop:un,isDisabled:pn,isKeyboardDisabled:fn,isMousewheelDisabled:mn,isPointersOverlap:gn,isRangeDraggingEnabled:vn,getPointersMinDistance:cn,getPointersMaxDistance:hn}),F.init()})(),{get pointers(){return g},get styles(){return fe},get pluginsManager(){return F},get min(){return Js()},get max(){return ei()},get step(){return nn()},get pointersOverlap(){return gn()},set pointersOverlap(d){yn(d)},get pointersMinDistance(){return cn()},set pointersMinDistance(d){bn(d)},get pointersMaxDistance(){return hn()},set pointersMaxDistance(d){wn(d)},get disabled(){return pn()},set disabled(d){xn(d)},get data(){return an()},get type(){return on()},set type(d){$n(d)},get rightToLeft(){return dn()},set rightToLeft(d){Cn(d)},get bottomToTop(){return un()},set bottomToTop(d){Sn(d)},get round(){return ln()},set round(d){kn(d)},get animateOnClick(){return dr},set animateOnClick(d){Ga(d)},get keyboardDisabled(){return fn()},set keyboardDisabled(d){Va(d)},get mousewheelDisabled(){return mn()},set mousewheelDisabled(d){Ya(d)},get rangeDragging(){return vn()},set rangeDragging(d){ni(d)},setMin:ti,setMax:ri,setValue:si,setStep:ii,setData:_n,getTextValue:Fr,setAriaLabel:qa,getAriaLabel:yc,addPointer:$c,removePointer:Cc,destroy:()=>{u.removeEventListener("mousedown",La),u.removeEventListener("mouseup",Ks),u.removeEventListener("touchmove",$r),u.removeEventListener("touchstart",$r),document.removeEventListener("wheel",Zs);for(let d of g)d.destroy();F==null||F.destroy()}}},lc=(o,u,y)=>{let g=ke.find(([F,j,ge,we])=>j.replace("#","")===u.replace(/\d+/g,""));if(g&&o.styles){let[F,j,ge,we]=g,X=u.replace(/\D/g,"").trim(),Oe=X===""||X==="0"||X==="1"?0:Ie(X,0)-1;o.styles.setStyle(F,y,Oe);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(u,y),u){case f:{o.setMin(y);break}case b:{o.setMax(y);break}case x:{o.setStep(y);break}case a:{o.pointersOverlap=Ge(y);break}case l:{o.pointersMinDistance=Ie(y,0);break}case p:{o.rangeDragging=Ge(y);break}case h:{o.pointersMaxDistance=Ie(y,1/0);break}case W:{o.disabled=Ge(y);break}case z:{o.keyboardDisabled=Ge(y);break}case N:{o.mousewheelDisabled=Ge(y);break}case m:{o.setData(y);break}case D:{o.type=y;break}case I:{o.rightToLeft=Ge(y);break}case U:{o.bottomToTop=Ge(y);break}case S:{o.round=Ie(y,Ir);break}case k:{o.styles&&(o.styles.theme=y);break}case jt:{o.animateOnClick=y;break}}let M=null;if(/^value([0-9]*)$/.test(u)&&(M="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(M="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(M="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(M="pointer-shape"),!M)return;let ee=u.replace(/\D/g,"").trim(),fe=ee===""||ee==="0"||ee==="1"?0:Ie(ee,0)-1;switch(M){case"value":{o.setValue(y,fe);break}case"pointer-disabled":{let F=o==null?void 0:o.pointers[fe];if(!F)return;F.disabled=Ge(y);break}case"aria-label":{o.setAriaLabel(fe,y);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(fe,y);break}}},cc=class extends HTMLElement{constructor(){super(),s(this,"slider"),s(this,"_externalCSSList",[]),s(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.disabled)!=null?u:!1}set data(o){var u;(u=this.slider)==null||u.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var u;(u=this.slider)==null||u.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var u;(u=this.slider)==null||u.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,u;return(u=(o=this.slider)==null?void 0:o.round)!=null?u:Ir}set type(o){!this.slider||(this.slider.type=o??Qe)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Qe}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?u:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?u:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?u:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,u,y;return(y=(u=(o=this.slider)==null?void 0:o.styles)==null?void 0:u.theme)!=null?y:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,u;return(u=(o=this.slider)==null?void 0:o.rightToLeft)!=null?u:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,u;return(u=(o=this.slider)==null?void 0:o.bottomToTop)!=null?u:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?u:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,u;return(u=(o=this.slider)==null?void 0:o.rangeDragging)!=null?u:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ge(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var u,y;if(!this.slider)return;let g=(y=(u=this.slider)==null?void 0:u.addPointer(o))!=null?y:0;Oa(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=o,this.shadowRoot.appendChild(u)}connectedCallback(){var o,u;if(!this.shadowRoot)return;this._externalCSSList=ne(this),this.shadowRoot.innerHTML=i(n,this._externalCSSList);let y=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!y)return;let g=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!g)return;let M=ic(this,y);this.slider=oc(this,g,M),nc(this,this.slider),this._observer=new MutationObserver(ee=>{ee.forEach(fe=>{var F;if(!this.slider||fe.type!=="attributes")return;let j=fe.attributeName;!j||lc(this.slider,j,(F=this.getAttribute(j))!=null?F:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},sn=cc;window.tcRangeSlider=sn,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",sn),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends sn{})})();(()=>{var t=(l,h,p,m,f)=>{let b=h-l;return b===0?p:(m-p)*(f-l)/b+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,h)=>e(l)?Number(l):h,s=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var i=11,n=11,a=()=>{let l=null,h=null,p=null,m=null,f=null,b=!1,x=i,S=n,D=()=>{var E;let Y=(E=l==null?void 0:l.shadowRoot)==null?void 0:E.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),p.append(m),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),Y.append(p)},k=()=>{!h||!p||p.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},I=()=>{var E;if(!p||!h)return;let Y=h.getMin(),G=h.getMax(),K=h.getType()==="vertical",ce=h.isRightToLeft()||h.isBottomToTop();for(let se=0;se<x;se++){let ie=document.createElement("div");ie.classList.add("mark",`mark-${se}`);let de=x===0?0:se*100/(x-1);K?ce?ie.style.top=`${100-de}%`:ie.style.top=`${de}%`:ce?ie.style.left=`${100-de}%`:ie.style.left=`${de}%`,m==null||m.append(ie)}let q=h.getData();for(let se=0;se<S;se++){let ie=document.createElement("div");ie.classList.add("mark-value",`mark-value-${se}`);let de=S===0?0:se*100/(S-1),Ee=t(0,S-1,Y,G,se);ie.textContent=(q?(E=q[Math.round(Ee)])!=null?E:"":Ee).toString(),K?ce?ie.style.top=`${100-de}%`:ie.style.top=`${de}%`:ce?ie.style.left=`${100-de}%`:ie.style.left=`${de}%`,f==null||f.append(ie)}},U=(E,Y)=>{le(),x=E,S=Y,x<=0&&(x=i),S<=0&&(S=n),D(),I(),k()},W=E=>{b=E,b?(D(),I(),k()):le()},z=E=>{!p||p.style.setProperty("--marks-color",E)},N=E=>{!p||p.style.setProperty("--values-color",E)},le=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(E,Y,G,K)=>{var ce,q;h=K,l=E,b=s(l.getAttribute("marks")),b&&(U(r(l.getAttribute("marks-count"),i),r(l.getAttribute("marks-values-count"),n)),z((ce=l.getAttribute("marks-color"))!=null?ce:"#cbd5e1"),N((q=l.getAttribute("marks-values-color"))!=null?q:"#475569"))},onAttrChange:(E,Y)=>{E==="marks"&&W(s(Y)),E==="marks-count"&&U(r(Y,i),S),E==="marks-values-count"&&U(x,r(Y,n)),E==="marks-color"&&z(Y),E==="marks-values-color"&&N(Y)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return b??!1},set:E=>{W(s(E))}}},{name:"marksCount",attributes:{get(){return x??i},set:E=>{U(r(E,i),S)}}},{name:"marksValuesCount",attributes:{get(){return x??i},set:E=>{U(x,r(E,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:E=>{z(E)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:E=>{N(E)}}}],destroy:le,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Zf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,qt=(t,e,r,s)=>{for(var i=s>1?void 0:s?Qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Zf(e,r,i),i};let kt=class extends xt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Me(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.setFixedRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const i=r.detail;this.from=i.value1,this.to=i.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?v`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:v`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${je(this.sliderRef)}
                slider-width="100%"
                slider-height="calc( var( --thermal-fs-sm ) * 0.9)"
                animate-onclick="false"
                min="${this.min}"
                max="${this.max}"

                value1="${this.from}"
                value2="${this.to}"

                slider-radius="0"

                slider-bg="var( --thermal-slate )"
                slider-bg-hover="var( --thermal-slate )"
                slider-bg-fill="${this.palette.data.gradient}"

                pointer-bg="${this.palette.data.pixels[0]}"
                pointer2-bg="${this.palette.data.pixels[this.palette.data.pixels.length-1]}"
                
                generate-labels="true"
                
            ></tc-range-slider>

        </div>

        `}};kt.styles=pe`

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
    
    `;qt([oe({context:Hl,subscribe:!0}),$()],kt.prototype,"min",2);qt([oe({context:Bl,subscribe:!0}),$()],kt.prototype,"max",2);qt([oe({context:la,subscribe:!0}),$()],kt.prototype,"from",2);qt([oe({context:ca,subscribe:!0}),$()],kt.prototype,"to",2);qt([$()],kt.prototype,"hasFixedFrom",2);qt([$()],kt.prototype,"hasFixedTo",2);qt([oe({context:Bi,subscribe:!0}),$()],kt.prototype,"palette",2);qt([$()],kt.prototype,"sliderRef",2);qt([$()],kt.prototype,"initialised",2);kt=qt([Z("registry-range-slider")],kt);var Jf=Object.defineProperty,em=Object.getOwnPropertyDescriptor,Ys=(t,e,r,s)=>{for(var i=s>1?void 0:s?em(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Jf(e,r,i),i};let Jr=class extends xt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?B:v`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Ys([oe({context:la,subscribe:!0})],Jr.prototype,"from",2);Ys([oe({context:ca,subscribe:!0})],Jr.prototype,"to",2);Ys([_({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],Jr.prototype,"fixed",2);Ys([_({type:String,reflect:!0,attribute:!0})],Jr.prototype,"separator",2);Jr=Ys([Z("registry-range-display")],Jr);var tm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,Yi=(t,e,r,s)=>{for(var i=s>1?void 0:s?rm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&tm(e,r,i),i};let es=class extends xt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return v`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":B}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>v`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():v`
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
        `}};es.styles=pe`

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


    `;Yi([$()],es.prototype,"histogram",2);Yi([_({type:Boolean,reflect:!0})],es.prototype,"interactive",2);Yi([_({type:String,reflect:!0})],es.prototype,"height",2);es=Yi([Z("registry-histogram")],es);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ai extends sa{constructor(e){if(super(e),this.it=B,e.type!==ra.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===B||e==null)return this._t=void 0,this.it=e;if(e===mr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ai.directiveName="unsafeHTML",Ai.resultType=1;const St=Ii(Ai);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bn extends Ai{}Bn.directiveName="unsafeSVG",Bn.resultType=2;const rc=Ii(Bn);var sm=Object.defineProperty,im=Object.getOwnPropertyDescriptor,Gi=(t,e,r,s)=>{for(var i=s>1?void 0:s?im(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&sm(e,r,i),i};let ts=class extends as{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?B:v`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([e,r])=>{const s={[e]:!0,button:!0,switch:!0,active:r.key===this.value.key};return v`
                        
                        <button 
                            class=${Bt(s)} 
                            @click=${()=>{this.group.tool.selectTool(r)}}
                            @mouseenter=${()=>{this.hint=r.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${rc(r.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};ts.styles=pe`

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

    `;Gi([oe({context:ha,subscribe:!0}),$()],ts.prototype,"value",2);Gi([oe({context:da,subscribe:!0}),$()],ts.prototype,"tools",2);Gi([$()],ts.prototype,"hint",2);ts=Gi([Z("group-tool-buttons")],ts);var nm=Object.defineProperty,am=Object.getOwnPropertyDescriptor,wa=(t,e,r,s)=>{for(var i=s>1?void 0:s?am(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&nm(e,r,i),i};let Os=class extends as{connectedCallback(){super.connectedCallback()}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?B:v`
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return v`
                        
                        <button 
                            class=${Bt(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${e.name}
                        >
                            ${rc(e.icon)}
                        </button>
                        
                    `})}
        `}};Os.styles=pe`

    :host {
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

    `;wa([oe({context:ha,subscribe:!0}),$()],Os.prototype,"value",2);wa([oe({context:da,subscribe:!0}),$()],Os.prototype,"tools",2);Os=wa([Z("group-tool-bar")],Os);var om=Object.defineProperty,Gs=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&om(e,r,i),i};class Xe extends as{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Gs([oe({context:ua,subscribe:!0}),$()],Xe.prototype,"parentFileProviderElement");Gs([oe({context:Gl,subscribe:!0}),$()],Xe.prototype,"loading");Gs([oe({context:Vl,subscribe:!0}),$()],Xe.prototype,"file");Gs([oe({context:Yl,subscribe:!0}),$()],Xe.prototype,"failure");Gs([oe({context:Xl,subscribe:!0}),$()],Xe.prototype,"recording");var lm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,hm=(t,e,r,s)=>{for(var i=s>1?void 0:s?cm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&lm(e,r,i),i};let zn=class extends Xe{constructor(){super(...arguments),this.container=Me()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var s,i;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return v`
            <div ${je(this.container)} class=${Bt(r)} part="file-canvas-container">
            
                ${this.loading===!0?v`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?v`<div class="error-wrapper">
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
                                ${(i=this.failure)==null?void 0:i.message}
                            </div>
                        </div>`:B}
            
            </div>
        
        `}};zn.styles=pe`
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
    `;zn=hm([Z("file-canvas")],zn);var dm=Object.defineProperty,um=Object.getOwnPropertyDescriptor,pm=(t,e,r,s)=>{for(var i=s>1?void 0:s?um(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&dm(e,r,i),i};let Vn=class extends Xe{onInstanceCreated(t){}onFailure(t){}render(){return this.file?v`
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
        `:B}};Vn.styles=pe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Vn=pm([Z("file-share-button")],Vn);var fm=Object.defineProperty,mm=Object.getOwnPropertyDescriptor,gm=(t,e,r,s)=>{for(var i=s>1?void 0:s?mm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&fm(e,r,i),i};let Yn=class extends Xe{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,s){const i=e.toFixed(r),n=s!==void 0?i+" "+s:i;return this.renderRow(t,n)}renderDownloadRow(t,e,r,s){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${s}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?v`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${St(this.renderRow("Thermal file name",this.file.fileName))}

                        ${St(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?St(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):B}

                        ${St(this.renderRow("Time",qd.human(this.file.timestamp)))}

                        ${St(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${St(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${St(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${St(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${St(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${St(this.renderRow("Type",this.file.service.parser.name))}
                    ${St(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>v`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:B}};Yn.styles=pe`

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
    
    `;Yn=gm([Z("file-info-button")],Yn);var vm=Object.defineProperty,ym=Object.getOwnPropertyDescriptor,bm=(t,e,r,s)=>{for(var i=s>1?void 0:s?ym(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&vm(e,r,i),i};let Gn=class extends Xe{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?B:v`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this.file?"Download":"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">Download original file (${this.file.service.parser.extensions[0].extension.toUpperCase()})</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.exportAsPng()}>Export current frame as PNG image</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?v`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:B}
            
            </thermal-dropdown>

        
        `}};Gn.styles=pe`

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
    
    `;Gn=bm([Z("file-download-dropdown")],Gn);var wm=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,lr=(t,e,r,s)=>{for(var i=s>1?void 0:s?xm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&wm(e,r,i),i};let bt=class extends Xe{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Me(),this.barRef=Me(),this.containerRef=Me(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<bt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}handleBarHover(t){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(r)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,l;const t=this.file;if(t===void 0)return B;if(t.duration===0)return B;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},s={item:!0,button:!0,...r},i={item:!0,timeline:!0,...r};return v`
            <div class="${Bt(e)}" ${je(this.containerRef)}>


                ${t!==void 0?v`
                        <div class="container">

                            <div class="${Bt(s)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?v`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:v`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>


                            <div class="${Bt(i)}"  ${je(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${je(this.barRef)}></div>
                                    ${this.cursor?v`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(h=>v`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:B}

            
            
            </div>

            ${this.currentFrame!==void 0?v`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${gr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${gr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:B}

          `}};bt.collapseWidth=500;bt.styles=pe`
    
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
    
    `;lr([oe({context:va,subscribe:!0}),$()],bt.prototype,"playing",2);lr([oe({context:zs,subscribe:!0}),$()],bt.prototype,"currentFrame",2);lr([oe({context:ga,subscribe:!0}),$()],bt.prototype,"duration",2);lr([oe({context:Kl,subscribe:!0}),$()],bt.prototype,"mayStop",2);lr([oe({context:fa,subscribe:!0})],bt.prototype,"cursor",2);lr([oe({context:ma,subscribe:!0})],bt.prototype,"cursorSetter",2);lr([oe({context:ya,subscribe:!0})],bt.prototype,"markers",2);lr([$()],bt.prototype,"collapsed",2);bt=lr([Z("file-timeline")],bt);var _m=Object.defineProperty,$m=Object.getOwnPropertyDescriptor,xa=(t,e,r,s)=>{for(var i=s>1?void 0:s?$m(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&_m(e,r,i),i};let Ds=class extends Xe{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?B:v`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Jn).map(([t])=>v`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof tr&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Ds.styles=pe`

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
    
    `;xa([_({type:String,reflect:!0})],Ds.prototype,"enabled",2);xa([oe({context:ql,subscribe:!0}),$()],Ds.prototype,"playbackSpeed",2);Ds=xa([Z("file-playback-speed-dropdown")],Ds);var Cm=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,_a=(t,e,r,s)=>{for(var i=s>1?void 0:s?Sm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Cm(e,r,i),i};let Es=class extends Xe{constructor(){super(...arguments),this.container=Me()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return v`
            <div class="container">
            
                <video ${je(this.container)} preload="metadata">

                    ${this.url===void 0?B:v`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Es.styles=pe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;_a([oe({context:zs,subscribe:!0}),$()],Es.prototype,"currentFrame",2);_a([_({type:String,reflect:!0,attribute:!0})],Es.prototype,"url",2);Es=_a([Z("file-video")],Es);const km=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),gr(r,"mm:ss:SSS")},Pm=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const s=parseInt(r[0]),i=parseInt(r[1]),n=parseInt(r[2]);return s*60*1e3+i*1e3+n};var Am=Object.defineProperty,Om=Object.getOwnPropertyDescriptor,Xt=(t,e,r,s)=>{for(var i=s>1?void 0:s?Om(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Am(e,r,i),i};const $a={fromAttribute:t=>t===null?null:Pm(t),toAttribute:t=>t===null?null:km(t)};let Lt=class extends Xe{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,s){var i;super.attributeChangedCallback(e,r,s),this.log(e,r,s),e==="active"&&s==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((i=this.file)==null||i.timeline.pause())):e==="active"&&s==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(i=>i.lang==="cs-CZ");if(r)return r;const s=e.find(i=>i.default===!0);return s||null}render(){return B}};Xt([oe({context:va,subscribe:!0}),$()],Lt.prototype,"playing",2);Xt([oe({context:pa,subscribe:!0}),$()],Lt.prototype,"ms",2);Xt([_({type:String,reflect:!0,attribute:!0})],Lt.prototype,"label",2);Xt([_({type:String,reflect:!0,attribute:!0,converter:$a})],Lt.prototype,"start",2);Xt([_({type:String,reflect:!0,attribute:!0,converter:$a})],Lt.prototype,"end",2);Xt([_({type:String,reflect:!0,attribute:!0,converter:$a})],Lt.prototype,"dur",2);Xt([_({type:String,reflect:!0,attribute:!0})],Lt.prototype,"active",2);Xt([_({type:String,reflect:!0,attribute:!0})],Lt.prototype,"pauseOnActivate",2);Xt([_({type:String,reflect:!0,attribute:!0})],Lt.prototype,"say",2);Lt=Xt([Z("file-marker")],Lt);var Dm=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,Mr=(t,e,r,s)=>{for(var i=s>1?void 0:s?Em(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Dm(e,r,i),i};let ir=class extends Xe{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return v`

            <div class="${Bt(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};ir.styles=pe`
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


    `;Mr([oe({context:ga,subscribe:!0}),$()],ir.prototype,"duration",2);Mr([oe({context:zs,subscribe:!0}),$()],ir.prototype,"currentFrame",2);Mr([oe({context:pa,subscribe:!0}),$()],ir.prototype,"ms",2);Mr([_({type:Number,reflect:!0,attribute:!0})],ir.prototype,"start",2);Mr([_({type:Number,reflect:!0,attribute:!0})],ir.prototype,"end",2);Mr([$()],ir.prototype,"active",2);ir=Mr([Z("file-marker-timeline")],ir);var Tm=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,sc=(t,e,r,s)=>{for(var i=s>1?void 0:s?Lm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Tm(e,r,i),i};let Oi=class extends Xe{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return v`
            <div>


            ${this.markers.map(t=>t.active?v`<div class="item">
                    <h2>${t.label}</h2>
                    ${St(t.innerHTML)}
                    </div>`:B)}

            
            
            </div>

          `}};Oi.styles=pe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;sc([oe({context:ya,subscribe:!0})],Oi.prototype,"markers",2);Oi=sc([Z("file-marks-content")],Oi);var Rm=Object.defineProperty,Mm=Object.getOwnPropertyDescriptor,Ca=(t,e,r,s)=>{for(var i=s>1?void 0:s?Mm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Rm(e,r,i),i};let Ts=class extends Ut{updated(e){if(super.updated(e),e.has("analysis")){const r=e.get("analysis");r&&r.onSetName.delete(this.UUID);const s=this.analysis;this.name=s.name,s.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return v`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const r=e.target,s=r.value!==""?r.value:this.analysis.nameInitial;this.analysis.setName(s)}}
            />

        `}};Ts.styles=pe`

    
    `;Ca([_()],Ts.prototype,"analysis",2);Ca([$()],Ts.prototype,"name",2);Ts=Ca([Z("analysis-name")],Ts);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Um(t,e){if(t!==void 0){let r=0;for(const s of t)yield e(s,r++)}}var Im=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,Sa=(t,e,r,s)=>{for(var i=s>1?void 0:s?Fm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Im(e,r,i),i};let Ls=class extends Ut{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const r=this.analysis;this.color=r.initialColor,r.onSetInitialColor.set(this.UUID,s=>{this.color=s})}}renderColor(t){return v`<i style="background-color: ${t};" aria-hidden></i><span>${t}</span>`}render(){return this.color===void 0?B:v`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Um(mi,t=>v`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(t)}}>
                        ${this.renderColor(t)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Ls.styles=pe`

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
    
    `;Sa([_()],Ls.prototype,"analysis",2);Sa([$()],Ls.prototype,"color",2);Ls=Sa([Z("analysis-color")],Ls);var jm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,Ot=(t,e,r,s)=>{for(var i=s>1?void 0:s?Wm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&jm(e,r,i),i};let pt=class extends Ut{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onMoveOrResize.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height,this.right=r.left+r.width,this.bottom=r.top+r.height,this.maxX=r.file.width,this.maxY=r.file.height,r.onMoveOrResize.set(this.UUID,s=>{this.top=s.top,this.left=s.left,this.width=s.width,this.height=s.height,this.right=s.left+s.width,this.bottom=s.top+s.height})}}handleInput(t,e){const r=t.target,s=parseInt(r.value);isNaN(s)||(e(s),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

            <div class="table">

                <thermal-field label="Name">
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label="Color">
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label="Left">
                    <input 
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.right!==void 0?this.right-1:this.maxX}
                        @change=${t=>this.handleInput(t,e=>{this.analysis.setLeft(e)})}
                    />
                </thermal-field>

                <thermal-field label="Right">
                    <input 
                        name="left" 
                        value=${this.right} 
                        type="number" 
                        step="1" 
                        min=${this.left!==void 0?this.left+1:0} 
                        max=${this.maxX}
                        @change=${t=>this.handleInput(t,e=>{this.analysis.setRight(e)})}
                    />
                </thermal-field>

                <thermal-field label="Top">
                    <input 
                        name="left" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0"
                        max=${this.bottom!==void 0?this.bottom-1:this.maxY}
                        @change=${t=>this.handleInput(t,e=>{this.analysis.setTop(e)})}
                    />
                </thermal-field>

                <thermal-field label="Bottom">
                    <input 
                        name="left" 
                        value=${this.bottom} 
                        type="number" 
                        step="1" 
                        min=${this.top!==void 0?this.top+1:0}
                        max=${this.maxY}
                        @change=${t=>this.handleInput(t,e=>{this.analysis.setBottom(e)})}
                    />
                </thermal-field>
                

            </div>
    
        
        `}};pt.styles=pe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Ot([_()],pt.prototype,"analysis",2);Ot([$()],pt.prototype,"color",2);Ot([$()],pt.prototype,"top",2);Ot([$()],pt.prototype,"left",2);Ot([$()],pt.prototype,"width",2);Ot([$()],pt.prototype,"height",2);Ot([$()],pt.prototype,"type",2);Ot([$()],pt.prototype,"right",2);Ot([$()],pt.prototype,"bottom",2);Ot([$()],pt.prototype,"maxX",2);Ot([$()],pt.prototype,"maxY",2);pt=Ot([Z("edit-area")],pt);var Nm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,ls=(t,e,r,s)=>{for(var i=s>1?void 0:s?Hm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Nm(e,r,i),i};let wr=class extends Ut{constructor(){super(...arguments),this.topInputRef=Me(),this.leftInputRef=Me()}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onMoveOrResize.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.maxX=r.file.width,this.maxY=r.file.height,r.onMoveOrResize.set(this.UUID,s=>{this.top=s.top,this.left=s.left})}}handleInput(t,e){const r=t.target,s=parseInt(r.value);isNaN(s)||(e(s),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

            <div class="table">

                <thermal-field label="Name">
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label="Color">
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label="Top" hint="From 0 to ${this.maxY}">
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxY}
                        @change=${t=>this.handleInput(t,e=>{this.analysis.setTop(e)})}
                    />
                </thermal-field>

                <thermal-field label="Left" hint="From 0 to ${this.maxX}">
                    <input
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxX}
                        @change=${t=>this.handleInput(t,e=>{this.analysis.setLeft(e)})}
                    />
                </thermal-field>

            </div>
        
        `}};wr.styles=pe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;ls([_()],wr.prototype,"analysis",2);ls([$()],wr.prototype,"top",2);ls([$()],wr.prototype,"left",2);ls([$()],wr.prototype,"maxX",2);ls([$()],wr.prototype,"maxY",2);wr=ls([Z("edit-point")],wr);var Bm=Object.defineProperty,zm=Object.getOwnPropertyDescriptor,qi=(t,e,r,s)=>{for(var i=s>1?void 0:s?zm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Bm(e,r,i),i};let Rs=class extends Ut{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetName.delete(this.UUID);const r=this.analysis;this.name=r.name,this.type=r.getType(),r.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return v`

            <thermal-dialog label="Edit ${this.type} analysis">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof Ar?v`<edit-point .analysis=${this.analysis}></edit-point>`:v`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};qi([_()],Rs.prototype,"analysis",2);qi([$()],Rs.prototype,"name",2);qi([$()],Rs.prototype,"type",2);Rs=qi([Z("file-analysis-edit")],Rs);var Vm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,_t=(t,e,r,s)=>{for(var i=s>1?void 0:s?Ym(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Vm(e,r,i),i};let at=class extends Xe{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=Me(),this.graphRef=Me(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(t){t.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=t.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(r=>{this.graphWidth=r[0].contentRect.width,this.graphHeight=r[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,t=>{this.graphs=t}),this.hydrated=!0)}onFailure(){}update(t){super.update(t),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return v`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&v`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&v`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${je(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?v`<thermal-chart 
                        ${je(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:B}
            </div>

            

            </div>
        
        `}};at.styles=pe`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;_t([$()],at.prototype,"hydrated",2);_t([_({reflect:!0})],at.prototype,"graphWidth",2);_t([_({reflect:!0})],at.prototype,"graphHeight",2);_t([$()],at.prototype,"graphs",2);_t([oe({context:zs,subscribe:!0})],at.prototype,"currentFrame",2);_t([oe({context:fa,subscribe:!0})],at.prototype,"cursor",2);_t([oe({context:ma,subscribe:!0})],at.prototype,"cursorSetter",2);_t([$()],at.prototype,"shadowLeft",2);_t([$()],at.prototype,"shadowTop",2);_t([$()],at.prototype,"shadowWidth",2);_t([$()],at.prototype,"shadowHeight",2);_t([oe({context:oa,subscribe:!0})],at.prototype,"graphSmooth",2);at=_t([Z("file-analysis-graph")],at);var Gm=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,cr=(t,e,r,s)=>{for(var i=s>1?void 0:s?qm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Gm(e,r,i),i};let Rt=class extends Ut{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const r=this.analysis;this.name=r.name,this.selected=r.selected,this.color=r.initialColor,this.dimension=r.width+"x"+r.height,this.value={min:r.min,max:r.max,avg:r.avg},r.file.timeline.isSequence?this.may=r instanceof Ar?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:r.graph.state.MIN,max:r.graph.state.MAX,avg:r.graph.state.AVG},r.onMoveOrResize.set(this.UUID,s=>{this.dimension=s.width+"x"+s.height}),r.onValues.set(this.UUID,(s,i,n)=>{this.value={min:s,max:i,avg:n}}),r.graph.onGraphActivation.set(this.UUID,(s,i,n)=>{this.graph={min:s,max:i,avg:n}}),r.onSelected.set(this.UUID,()=>{this.selected=!0}),r.onDeselected.set(this.UUID,()=>{this.selected=!1}),r.onSetInitialColor.set(this.UUID,s=>{this.color=s}),r.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(t){return t===void 0?"-":t.toFixed(2)+" °C"}renderCell(t,e,r,s){return v`
            <td class="${e?"may":"mayNot"} ${r?"active":"inactive"}">

                ${e?v`
                        <button
                            @click=${s}
                            style="background-color: ${r?this.color:"transparent"};"
                            title="${r?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(t)}
                        </button>
                    `:this.valueOrNothing(t)}

            </td>
        `}render(){return v`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"}"
            @click=${()=>{this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0)}}
        >
            <u aria-hidden="true"></u>
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        <td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>Remove</thermal-button>
        </td>
        
        `}};Rt.styles=pe`
    
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

            cursor: pointer;

            &:hover {
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

    `;cr([_()],Rt.prototype,"analysis",2);cr([$()],Rt.prototype,"value",2);cr([$()],Rt.prototype,"graph",2);cr([$()],Rt.prototype,"may",2);cr([$()],Rt.prototype,"dimension",2);cr([$()],Rt.prototype,"color",2);cr([_({type:Boolean,reflect:!0,attribute:!0})],Rt.prototype,"selected",2);cr([$()],Rt.prototype,"name",2);Rt=cr([Z("file-analysis-table-row")],Rt);var Xm=Object.defineProperty,Km=Object.getOwnPropertyDescriptor,Xi=(t,e,r,s)=>{for(var i=s>1?void 0:s?Km(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Xm(e,r,i),i};let rs=class extends Xe{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(t){console.log(t)}onInstanceCreated(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}hydrate(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?B:v`

        <div class="overflow">

        <table>


            <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

            <thead>

                <tr>
                    <th
                        class="all ${this.allSelected?"yes":"no"}"
                        @click=${()=>{var t,e;this.allSelected?(t=this.file)==null||t.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                    >
                        <u aria-hidden="true"></u>
                        <span>Analysis</span>
                    </th>
                    <th>Avg</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Size</th>
                    <th style="padding-top: 0; padding-bottom: 0;">
                        ${this.hasHighlightedData?v`<thermal-button variant="foreground" @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:B}
                    </th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(t=>v`
                                <file-analysis-table-row
                                    .analysis=${t}
                                ></file-analysis-table-row>
                            `)}
            
            </tbody>

            </table>

            </div>
        `}};rs.styles=pe`
    
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

            cursor: pointer;

            &:hover {
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

        }

        



    `;Xi([$()],rs.prototype,"analysis",2);Xi([$()],rs.prototype,"allSelected",2);Xi([$()],rs.prototype,"hasHighlightedData",2);rs=Xi([Z("file-analysis-table")],rs);var Zm=Object.defineProperty,Qm=Object.getOwnPropertyDescriptor,Ur=(t,e,r,s)=>{for(var i=s>1?void 0:s?Qm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Zm(e,r,i),i};let nr=class extends Xe{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(t){super.willUpdate(t),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return v`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label="Display settings">
                <thermal-button slot="invoker">Display settings</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label="Image rendering" 
                    hint="Pixelated mode disables antialising of the thermogram and enables you to see its pixels as they are."
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label="Adjust time scale"
                    hint="Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max)."
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label="Palette"
                    hint="Select colour palette of thermal display."
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:B}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:B}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:B}


            


            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            <file-analysis-graph slot="post"></file-analysis-graph>
        </thermal-app>
    `}};nr.styles=pe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Ur([_({type:Number})],nr.prototype,"from",2);Ur([_({type:Number})],nr.prototype,"to",2);Ur([_({type:Number})],nr.prototype,"speed",2);Ur([_({type:String,reflect:!0,attribute:!0})],nr.prototype,"showembed",2);Ur([_({type:String,reflect:!0,attribute:!0})],nr.prototype,"showabout",2);Ur([_({type:String,reflect:!0,attribute:!0})],nr.prototype,"showfullscreen",2);nr=Ur([Z("file-app")],nr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br=t=>t??B;var Jm=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,cs=(t,e,r,s)=>{for(var i=s>1?void 0:s?eg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Jm(e,r,i),i};let Tr=class extends Ut{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?B:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${Br(this.from)} to=${Br(this.to)} speed=${Br(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};cs([_({type:String,reflect:!0})],Tr.prototype,"palette",2);cs([_({type:Number})],Tr.prototype,"from",2);cs([_({type:Number})],Tr.prototype,"to",2);cs([_({type:Number,reflect:!0})],Tr.prototype,"speed",2);cs([_({type:String,reflect:!0})],Tr.prototype,"url",2);Tr=cs([Z("thermal-file-app")],Tr);var tg=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,Kt=(t,e,r,s)=>{for(var i=s>1?void 0:s?rg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&tg(e,r,i),i};let Pt=class extends Xe{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0,this.hasAnalysis=!1,this.hasGraph=!1}onInstanceCreated(t){this.hasAnalysis=t.analysis.layers.all.length>0,this.hasGraph=t.analysisData.value.values.length>1,t.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),t.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}willUpdate(t){super.willUpdate(t),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){var t,e;return v`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label="Display settings">
                <thermal-button slot="invoker">Display settings</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label="Image rendering" 
                    hint="'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are."
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label="Adjust time scale"
                    hint="Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max)."
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label="Palette"
                    hint="Select colour palette of thermal display."
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:B}

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Graph lines"
                    hint="'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'."
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:B}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:B}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:B}


            


            </thermal-bar>
          </div>
            
            <div class="content-container">

                <div class="content-container-part content-container__tools">
                  <group-tool-bar></group-tool-bar>
                </div>

                <div class="content-container__part content-container__left">


                  <registry-histogram slot="pre"></registry-histogram>
                  <registry-range-slider slot="pre"></registry-range-slider>
                  <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>

                  <file-canvas></file-canvas>
                  <file-timeline slot="post"></file-timeline>
                </div>

                <div class="content-container__part content-container__right">

                <div class="part analysis">
                  ${this.hasAnalysis?v`<file-analysis-table></file-analysis-table>`:v`<div class="placeholder">
                      <div class="placeholder-title">Analysis</div>
                      <div>You may select areas or points on the thermogram to see statistics here!</div>
                  ${["add-point","add-rect","add-ellipsis"].includes(((t=this.tool)==null?void 0:t.key)??"")?v`
                    <div>${(e=this.tool)==null?void 0:e.description}</div>
                  `:v`
                    <div>
                      <thermal-button @click=${()=>this.group.tool.selectTool("add-point")}>Add a point analysis</thermal-button>
                      <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>Add a rectangle analysis</thermal-button>
                      <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>Add a ellipsis analysis</thermal-button>
                    </div>
                  `}
        
                    </div>`}
                  </div>

                  <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?v`<div class="placeholder">
                      <div class="placeholder-title">Graph</div>
                      <div>${this.hasAnalysis===!1?"Add analysis first to see the graph!":v`Click on an analysis <span style="display: inline-block;padding: 1px 4px; border-radius: var(--thermal-gap); border: 1px solid var(--thermal-slate);">value</span> to see its graph here!`}</div>
                    </div>`:B}
                  
                  </div>
                  
                  
                </div>
              
            </div>
            
            
            
        </thermal-app>
    `}};Pt.styles=pe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }

    .content-container {

      width: 100%;
      display: flex;
      gap: calc( var( --thermal-gap ) * .5 );
    
    }

    .content-container__part {

      flex-grow: 1;
      width: 50%;
    
    }

    .content-container__tools {
      flex-basis: 1rem;
    }

    .part {

      height: 50%;
      position: relative;
      overflow: auto;
    
    }

    .analysis {
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
    
    }

    .placeholder-title {
      font-weight: bold;
    }

    file-analysis-graph {
      
      width: 100%;
      height: 100%;
      
      top: 0;
      left: 0;

      position: absolute;

    }
  
  `;Kt([_({type:Number})],Pt.prototype,"from",2);Kt([_({type:Number})],Pt.prototype,"to",2);Kt([_({type:Number})],Pt.prototype,"speed",2);Kt([_({type:String,reflect:!0,attribute:!0})],Pt.prototype,"showembed",2);Kt([_({type:String,reflect:!0,attribute:!0})],Pt.prototype,"showabout",2);Kt([_({type:String,reflect:!0,attribute:!0})],Pt.prototype,"showfullscreen",2);Kt([$()],Pt.prototype,"hasAnalysis",2);Kt([$()],Pt.prototype,"hasGraph",2);Kt([$()],Pt.prototype,"tool",2);Pt=Kt([Z("desktop-app")],Pt);var sg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,hs=(t,e,r,s)=>{for(var i=s>1?void 0:s?ig(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&sg(e,r,i),i};let Lr=class extends Ut{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?B:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <desktop-app  from=${Br(this.from)} to=${Br(this.to)} speed=${Br(this.speed)}></desktop-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};hs([_({type:String,reflect:!0})],Lr.prototype,"palette",2);hs([_({type:Number})],Lr.prototype,"from",2);hs([_({type:Number})],Lr.prototype,"to",2);hs([_({type:Number,reflect:!0})],Lr.prototype,"speed",2);hs([_({type:String,reflect:!0})],Lr.prototype,"url",2);Lr=hs([Z("thermal-desktop-app")],Lr);var ng=Object.defineProperty,ag=Object.getOwnPropertyDescriptor,ka=(t,e,r,s)=>{for(var i=s>1?void 0:s?ag(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&ng(e,r,i),i};let Ms=class extends Ut{constructor(){super(...arguments),this.dropinRef=Me(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return v`

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

                            ${this.loaded===!0?v`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:B}

                            <file-dropin ${je(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};Ms.styles=pe`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;ka([$()],Ms.prototype,"dropinRef",2);ka([$()],Ms.prototype,"loaded",2);Ms=ka([Z("thermal-dropin-app")],Ms);const Mn=window.matchMedia("(prefers-color-scheme: dark)"),Pa="thermal-dark-mode",Lo=()=>{document.body.classList.add(Pa)},og=()=>{document.body.classList.remove(Pa)},lg=()=>{Mn.matches&&Lo();const t=e=>{e.matches?Lo():og()};Mn.addEventListener("change",t),Mn.addListener(t)},cg=()=>{const t=document.createElement("link");t.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(t)},hg=qn.toString().replaceAll(".","-"),dg=t=>`thermal__${t}__${hg}`,Ro=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",dg(t)),r.innerHTML=e,document.head.appendChild(r)},ug=()=>{Ro("rootVariables",`

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


            
        
        `),Ro("darkModeOverrides",`
        
            body.${Pa} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};cg();console.info(`@labir/embed ${qn}
    Author: ${Pc}
    `);lg();ug();document.addEventListener("DOMContentLoaded",()=>{});
