var El=Object.defineProperty;var Dl=(r,e,t)=>e in r?El(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(Dl(r,typeof e!="symbol"?e+"":e,t),t);const yn="1.2.37",Tl="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=globalThis,wn=Ni.ShadowRoot&&(Ni.ShadyCSS===void 0||Ni.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xn=Symbol(),ua=new WeakMap;let Ga=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==xn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(wn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ua.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ua.set(t,e))}return e}toString(){return this.cssText}};const Ll=r=>new Ga(typeof r=="string"?r:r+"",void 0,xn),Oe=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Ga(t,r,xn)},Rl=(r,e)=>{if(wn)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Ni.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},pa=wn?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ll(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ml,defineProperty:Ul,getOwnPropertyDescriptor:Fl,getOwnPropertyNames:Il,getOwnPropertySymbols:jl,getPrototypeOf:Wl}=Object,tr=globalThis,fa=tr.trustedTypes,Nl=fa?fa.emptyScript:"",Ks=tr.reactiveElementPolyfillSupport,Kr=(r,e)=>r,zi={toAttribute(r,e){switch(e){case Boolean:r=r?Nl:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},_n=(r,e)=>!Ml(r,e),ga={attribute:!0,type:String,converter:zi,reflect:!1,hasChanged:_n};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),tr.litPropertyMetadata??(tr.litPropertyMetadata=new WeakMap);class Ar extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ga){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ul(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Fl(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ga}static _$Ei(){if(this.hasOwnProperty(Kr("elementProperties")))return;const e=Wl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Kr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Kr("properties"))){const t=this.properties,i=[...Il(t),...jl(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(pa(s))}else e!==void 0&&t.push(pa(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Rl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:zi).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:zi;this._$Em=s,this[s]=l.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??_n)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}Ar.elementStyles=[],Ar.shadowRootOptions={mode:"open"},Ar[Kr("elementProperties")]=new Map,Ar[Kr("finalized")]=new Map,Ks==null||Ks({ReactiveElement:Ar}),(tr.reactiveElementVersions??(tr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=globalThis,Vi=Qr.trustedTypes,ma=Vi?Vi.createPolicy("lit-html",{createHTML:r=>r}):void 0,Xa="$lit$",er=`lit$${Math.random().toFixed(9).slice(2)}$`,Za="?"+er,Hl=`<${Za}>`,gr=document,ei=()=>gr.createComment(""),ti=r=>r===null||typeof r!="object"&&typeof r!="function",Ka=Array.isArray,Bl=r=>Ka(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Qs=`[ 	
\f\r]`,Gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,va=/-->/g,ba=/>/g,dr=RegExp(`>|${Qs}(?:([^\\s"'>=/]+)(${Qs}*=${Qs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ya=/'/g,wa=/"/g,Qa=/^(?:script|style|textarea|title)$/i,zl=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),A=zl(1),rr=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),xa=new WeakMap,pr=gr.createTreeWalker(gr,129);function Ja(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ma!==void 0?ma.createHTML(e):e}const Vl=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",a=Gr;for(let l=0;l<t;l++){const h=r[l];let p,g,f=-1,b=0;for(;b<h.length&&(a.lastIndex=b,g=a.exec(h),g!==null);)b=a.lastIndex,a===Gr?g[1]==="!--"?a=va:g[1]!==void 0?a=ba:g[2]!==void 0?(Qa.test(g[2])&&(s=RegExp("</"+g[2],"g")),a=dr):g[3]!==void 0&&(a=dr):a===dr?g[0]===">"?(a=s??Gr,f=-1):g[1]===void 0?f=-2:(f=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?dr:g[3]==='"'?wa:ya):a===wa||a===ya?a=dr:a===va||a===ba?a=Gr:(a=dr,s=void 0);const w=a===dr&&r[l+1].startsWith("/>")?" ":"";n+=a===Gr?h+Hl:f>=0?(i.push(p),h.slice(0,f)+Xa+h.slice(f)+er+w):h+er+(f===-2?l:w)}return[Ja(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class ri{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,h=this.parts,[p,g]=Vl(e,t);if(this.el=ri.createElement(p,i),pr.currentNode=this.el.content,t===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=pr.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Xa)){const b=g[a++],w=s.getAttribute(f).split(er),_=/([.?@])?(.*)/.exec(b);h.push({type:1,index:n,name:_[2],strings:w,ctor:_[1]==="."?ql:_[1]==="?"?Gl:_[1]==="@"?Xl:is}),s.removeAttribute(f)}else f.startsWith(er)&&(h.push({type:6,index:n}),s.removeAttribute(f));if(Qa.test(s.tagName)){const f=s.textContent.split(er),b=f.length-1;if(b>0){s.textContent=Vi?Vi.emptyScript:"";for(let w=0;w<b;w++)s.append(f[w],ei()),pr.nextNode(),h.push({type:2,index:++n});s.append(f[b],ei())}}}else if(s.nodeType===8)if(s.data===Za)h.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(er,f+1))!==-1;)h.push({type:7,index:n}),f+=er.length-1}n++}}static createElement(e,t){const i=gr.createElement("template");return i.innerHTML=e,i}}function Dr(r,e,t=r,i){var a,l;if(e===rr)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=ti(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=Dr(r,s._$AS(r,e.values),s,i)),e}class Yl{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??gr).importNode(t,!0);pr.currentNode=s;let n=pr.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new ui(n,n.nextSibling,this,e):h.type===1?p=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(p=new Zl(n,this,e)),this._$AV.push(p),h=i[++l]}a!==(h==null?void 0:h.index)&&(n=pr.nextNode(),a++)}return pr.currentNode=gr,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ui{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Dr(this,e,t),ti(e)?e===Z||e==null||e===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==rr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Bl(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Z&&ti(this._$AH)?this._$AA.nextSibling.data=e:this.T(gr.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ri.createElement(Ja(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new Yl(s,this),l=a.u(this.options);a.p(t),this.T(l),this._$AH=a}}_$AC(e){let t=xa.get(e.strings);return t===void 0&&xa.set(e.strings,t=new ri(e)),t}k(e){Ka(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new ui(this.S(ei()),this.S(ei()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class is{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Dr(this,e,t,0),a=!ti(e)||e!==this._$AH&&e!==rr,a&&(this._$AH=e);else{const l=e;let h,p;for(e=n[0],h=0;h<n.length-1;h++)p=Dr(this,l[i+h],t,h),p===rr&&(p=this._$AH[h]),a||(a=!ti(p)||p!==this._$AH[h]),p===Z?e=Z:e!==Z&&(e+=(p??"")+n[h+1]),this._$AH[h]=p}a&&!s&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ql extends is{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class Gl extends is{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class Xl extends is{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Dr(this,e,t,0)??Z)===rr)return;const i=this._$AH,s=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Z&&(i===Z||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Zl{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Dr(this,e)}}const Js=Qr.litHtmlPolyfillSupport;Js==null||Js(ri,ui),(Qr.litHtmlVersions??(Qr.litHtmlVersions=[])).push("3.1.4");const Kl=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new ui(e.insertBefore(ei(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rt=class extends Ar{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Kl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return rr}};var qa;rt._$litElement$=!0,rt.finalized=!0,(qa=globalThis.litElementHydrateSupport)==null||qa.call(globalThis,{LitElement:rt});const en=globalThis.litElementPolyfillSupport;en==null||en({LitElement:rt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ql={attribute:!0,type:String,converter:zi,reflect:!1,hasChanged:_n},Jl=(r=Ql,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,h,r)},init(l){return l!==void 0&&this.P(a,void 0,r),l}}}if(i==="setter"){const{name:a}=t;return function(l){const h=this[a];e.call(this,l),this.requestUpdate(a,h,r)}}throw Error("Unsupported decorator location: "+i)};function N(r){return(e,t)=>typeof t=="object"?Jl(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(r){return N({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ec=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pi(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return ec(e,t,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(n),l=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const tc={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Fi(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Ii(r){return r.toString().indexOf("`")===-1}Ii(r=>r``)||Ii(r=>r`\0`)||Ii(r=>r`\n`)||Ii(r=>r`\u0000`);Fi``&&Fi`\0`&&Fi`\n`&&Fi`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let rc="google#safe";function ic(){if(typeof window<"u")return window.trustedTypes}function eo(){var r;return(r=ic())!==null&&r!==void 0?r:null}let ji;function sc(){var r,e;if(ji===void 0)try{ji=(e=(r=eo())===null||r===void 0?void 0:r.createPolicy(rc,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{ji=null}return ji}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class to{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function _a(r){var e;const t=r,i=(e=sc())===null||e===void 0?void 0:e.createScriptURL(t);return i??new to(t,tc)}function nc(r){var e;if(!((e=eo())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof to)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function ac(r,...e){if(e.length===0)return _a(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return _a(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function oc(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function lc(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=oc(e||window);t&&r.setAttribute("nonce",t)}function cc(r,e,t){r.src=nc(e),lc(r)}/**
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
 */const hc=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),cc(t,ac`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function ro(r={}){await hc;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function ka(r){if(await ro(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function dc(r){return await ro(),new google.visualization.ChartWrapper({container:r})}/**
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
 */var Xt=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var l=r.length-1;l>=0;l--)(a=r[l])&&(n=(s<3?a(n):s>3?a(e,t,n):a(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const Ca=["ready","select"],uc={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class St extends rt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return A`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){dc(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Ca,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(uc[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(s=>!Ca.includes(s)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(!(!e||!t))try{const i=await ka({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,t;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?t=fetch(e).then(s=>s.json()):t=Promise.resolve(e),t.then(ka).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}St.styles=Oe`
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
  `;Xt([N({type:String,reflect:!0})],St.prototype,"type",void 0);Xt([N({type:Array})],St.prototype,"events",void 0);Xt([N({type:Object,hasChanged:()=>!0})],St.prototype,"options",void 0);Xt([N({type:Array})],St.prototype,"cols",void 0);Xt([N({type:Array})],St.prototype,"rows",void 0);Xt([N({type:String})],St.prototype,"data",void 0);Xt([N({type:Object})],St.prototype,"view",void 0);Xt([N({type:Array})],St.prototype,"selection",void 0);Xt([N({type:Object})],St.prototype,"_data",void 0);customElements.define("google-chart",St);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pc=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ss=r=>(...e)=>({_$litDirective$:r,values:e});let Cn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Jr(s,e);return!0},Yi=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},io=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),mc(e)}};function fc(r){this._$AN!==void 0?(Yi(this),this._$AM=r,io(this)):this._$AM=r}function gc(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Jr(i[n],!1),Yi(i[n]);else i!=null&&(Jr(i,!1),Yi(i));else Jr(this,r)}const mc=r=>{r.type==kn.CHILD&&(r._$AP??(r._$AP=gc),r._$AQ??(r._$AQ=fc))};class vc extends Cn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),io(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Jr(this,e),Yi(this))}setValue(e){if(pc(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=()=>new bc;class bc{}const tn=new WeakMap,We=ss(class extends vc{render(r){return Z}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),Z}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=tn.get(e);t===void 0&&(t=new WeakMap,tn.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=tn.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var yc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,so=(r,e,t,i)=>{for(var s=i>1?void 0:i?wc(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yc(e,t,s),s};let ii=class extends rt{constructor(){super(),this.dialogRef=je(),this.closeButtonRef=je(),this.invokerRef=je()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return A`
            <slot name="invoker" ${We(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${We(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${We(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};ii.shadowRootOptions={...rt.shadowRootOptions,mode:"open"};ii.styles=Oe`

        .dialog {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
            border-radius: var( --thermal-radius );
            border-color: var( --thermal-slate );
            border-width: 1px;
            padding: calc( var( --thermal-gap ) * 1.5 );
            font-size: var( --thermal-fs-small );

            &::backdrop {
                backdrop-filter: blur(10px);
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

        
    
    `;so([N({type:String,reflect:!0})],ii.prototype,"label",2);ii=so([ue("thermal-dialog")],ii);var xc=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,ns=(r,e,t,i)=>{for(var s=i>1?void 0:i?_c(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xc(e,t,s),s};let Bt=class extends rt{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return A`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Bt.VARIANTS=["slate","primary","foreground","background"];Bt.shadowRootOptions={...rt.shadowRootOptions,mode:"open"};Bt.styles=Oe`

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
    
    `;ns([N({type:String,converter:{fromAttribute:r=>Bt.VARIANTS.includes(r)?r:"slate",toAttribute:r=>r}})],Bt.prototype,"variant",2);ns([N({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],Bt.prototype,"interactive",2);ns([N({type:String})],Bt.prototype,"size",2);Bt=ns([ue("thermal-button")],Bt);const Tr=Math.min,Nt=Math.max,qi=Math.round,ir=r=>({x:r,y:r}),kc={left:"right",right:"left",bottom:"top",top:"bottom"},Cc={start:"end",end:"start"};function $a(r,e,t){return Nt(r,Tr(e,t))}function fi(r,e){return typeof r=="function"?r(e):r}function zt(r){return r.split("-")[0]}function as(r){return r.split("-")[1]}function no(r){return r==="x"?"y":"x"}function ao(r){return r==="y"?"height":"width"}function gi(r){return["top","bottom"].includes(zt(r))?"y":"x"}function oo(r){return no(gi(r))}function $c(r,e,t){t===void 0&&(t=!1);const i=as(r),s=oo(r),n=ao(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Gi(a)),[a,Gi(a)]}function Sc(r){const e=Gi(r);return[cn(r),e,cn(e)]}function cn(r){return r.replace(/start|end/g,e=>Cc[e])}function Pc(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function Ac(r,e,t,i){const s=as(r);let n=Pc(zt(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(cn)))),n}function Gi(r){return r.replace(/left|right|bottom|top/g,e=>kc[e])}function Oc(r){return{top:0,right:0,bottom:0,left:0,...r}}function lo(r){return typeof r!="number"?Oc(r):{top:r,right:r,bottom:r,left:r}}function Lr(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function Sa(r,e,t){let{reference:i,floating:s}=r;const n=gi(e),a=oo(e),l=ao(a),h=zt(e),p=n==="y",g=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,b=i[l]/2-s[l]/2;let w;switch(h){case"top":w={x:g,y:i.y-s.height};break;case"bottom":w={x:g,y:i.y+i.height};break;case"right":w={x:i.x+i.width,y:f};break;case"left":w={x:i.x-s.width,y:f};break;default:w={x:i.x,y:i.y}}switch(as(e)){case"start":w[a]-=b*(t&&p?-1:1);break;case"end":w[a]+=b*(t&&p?-1:1);break}return w}const Ec=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,l=n.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:g,y:f}=Sa(p,i,h),b=i,w={},_=0;for(let P=0;P<l.length;P++){const{name:k,fn:U}=l[P],{x:R,y:j,data:B,reset:W}=await U({x:g,y:f,initialPlacement:i,placement:b,strategy:s,middlewareData:w,rects:p,platform:a,elements:{reference:r,floating:e}});g=R??g,f=j??f,w={...w,[k]:{...w[k],...B}},W&&_<=50&&(_++,typeof W=="object"&&(W.placement&&(b=W.placement),W.rects&&(p=W.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):W.rects),{x:g,y:f}=Sa(p,b,h)),P=-1)}return{x:g,y:f,placement:b,strategy:s,middlewareData:w}};async function co(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:h}=r,{boundary:p="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:b=!1,padding:w=0}=fi(e,r),_=lo(w),k=l[b?f==="floating"?"reference":"floating":f],U=Lr(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(k)))==null||t?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:g,strategy:h})),R=f==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,j=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(j))?await(n.getScale==null?void 0:n.getScale(j))||{x:1,y:1}:{x:1,y:1},W=Lr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:R,offsetParent:j,strategy:h}):R);return{top:(U.top-W.top+_.top)/B.y,bottom:(W.bottom-U.bottom+_.bottom)/B.y,left:(U.left-W.left+_.left)/B.x,right:(W.right-U.right+_.right)/B.x}}const Dc=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:h,elements:p}=e,{mainAxis:g=!0,crossAxis:f=!0,fallbackPlacements:b,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:P=!0,...k}=fi(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const U=zt(s),R=zt(l)===l,j=await(h.isRTL==null?void 0:h.isRTL(p.floating)),B=b||(R||!P?[Gi(l)]:Sc(l));!b&&_!=="none"&&B.push(...Ac(l,P,_,j));const W=[l,...B],ae=await co(e,k),O=[];let V=((i=n.flip)==null?void 0:i.overflows)||[];if(g&&O.push(ae[U]),f){const q=$c(s,a,j);O.push(ae[q[0]],ae[q[1]])}if(V=[...V,{placement:s,overflows:O}],!O.every(q=>q<=0)){var Y,X;const q=(((Y=n.flip)==null?void 0:Y.index)||0)+1,re=W[q];if(re)return{data:{index:q,overflows:V},reset:{placement:re}};let ie=(X=V.filter(ce=>ce.overflows[0]<=0).sort((ce,De)=>ce.overflows[1]-De.overflows[1])[0])==null?void 0:X.placement;if(!ie)switch(w){case"bestFit":{var oe;const ce=(oe=V.map(De=>[De.placement,De.overflows.filter(Ie=>Ie>0).reduce((Ie,Re)=>Ie+Re,0)]).sort((De,Ie)=>De[1]-Ie[1])[0])==null?void 0:oe[0];ce&&(ie=ce);break}case"initialPlacement":ie=l;break}if(s!==ie)return{reset:{placement:ie}}}return{}}}};function ho(r){const e=Tr(...r.map(n=>n.left)),t=Tr(...r.map(n=>n.top)),i=Nt(...r.map(n=>n.right)),s=Nt(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function Tc(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>Lr(ho(s)))}const Lc=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:l=2,x:h,y:p}=fi(r,e),g=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=Tc(g),b=Lr(ho(g)),w=lo(l);function _(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&p!=null)return f.find(k=>h>k.left-w.left&&h<k.right+w.right&&p>k.top-w.top&&p<k.bottom+w.bottom)||b;if(f.length>=2){if(gi(t)==="y"){const X=f[0],oe=f[f.length-1],q=zt(t)==="top",re=X.top,ie=oe.bottom,ce=q?X.left:oe.left,De=q?X.right:oe.right,Ie=De-ce,Re=ie-re;return{top:re,bottom:ie,left:ce,right:De,width:Ie,height:Re,x:ce,y:re}}const k=zt(t)==="left",U=Nt(...f.map(X=>X.right)),R=Tr(...f.map(X=>X.left)),j=f.filter(X=>k?X.left===R:X.right===U),B=j[0].top,W=j[j.length-1].bottom,ae=R,O=U,V=O-ae,Y=W-B;return{top:B,bottom:W,left:ae,right:O,width:V,height:Y,x:ae,y:B}}return b}const P=await n.getElementRects({reference:{getBoundingClientRect:_},floating:i.floating,strategy:a});return s.reference.x!==P.reference.x||s.reference.y!==P.reference.y||s.reference.width!==P.reference.width||s.reference.height!==P.reference.height?{reset:{rects:P}}:{}}}};async function Rc(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=zt(t),l=as(t),h=gi(t)==="y",p=["left","top"].includes(a)?-1:1,g=n&&h?-1:1,f=fi(e,r);let{mainAxis:b,crossAxis:w,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof _=="number"&&(w=l==="end"?_*-1:_),h?{x:w*g,y:b*p}:{x:b*p,y:w*g}}const Mc=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:l}=e,h=await Rc(e,r);return a===((t=l.offset)==null?void 0:t.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:a}}}}},Uc=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:k=>{let{x:U,y:R}=k;return{x:U,y:R}}},...h}=fi(r,e),p={x:t,y:i},g=await co(e,h),f=gi(zt(s)),b=no(f);let w=p[b],_=p[f];if(n){const k=b==="y"?"top":"left",U=b==="y"?"bottom":"right",R=w+g[k],j=w-g[U];w=$a(R,w,j)}if(a){const k=f==="y"?"top":"left",U=f==="y"?"bottom":"right",R=_+g[k],j=_-g[U];_=$a(R,_,j)}const P=l.fn({...e,[b]:w,[f]:_});return{...P,data:{x:P.x-t,y:P.y-i}}}}};function Hr(r){return uo(r)?(r.nodeName||"").toLowerCase():"#document"}function ft(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function ar(r){var e;return(e=(uo(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function uo(r){return r instanceof Node||r instanceof ft(r).Node}function Lt(r){return r instanceof Element||r instanceof ft(r).Element}function Rt(r){return r instanceof HTMLElement||r instanceof ft(r).HTMLElement}function Pa(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof ft(r).ShadowRoot}function mi(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=kt(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function Fc(r){return["table","td","th"].includes(Hr(r))}function os(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function $n(r){const e=Sn(),t=kt(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function Ic(r){let e=sr(r);for(;Rt(e)&&!Rr(e);){if(os(e))return null;if($n(e))return e;e=sr(e)}return null}function Sn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Rr(r){return["html","body","#document"].includes(Hr(r))}function kt(r){return ft(r).getComputedStyle(r)}function ls(r){return Lt(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function sr(r){if(Hr(r)==="html")return r;const e=r.assignedSlot||r.parentNode||Pa(r)&&r.host||ar(r);return Pa(e)?e.host:e}function po(r){const e=sr(r);return Rr(e)?r.ownerDocument?r.ownerDocument.body:r.body:Rt(e)&&mi(e)?e:po(e)}function hn(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=po(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=ft(s);return n?e.concat(a,a.visualViewport||[],mi(s)?s:[],a.frameElement&&t?hn(a.frameElement):[]):e.concat(s,hn(s,[],t))}function fo(r){const e=kt(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Rt(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,l=qi(t)!==n||qi(i)!==a;return l&&(t=n,i=a),{width:t,height:i,$:l}}function go(r){return Lt(r)?r:r.contextElement}function Er(r){const e=go(r);if(!Rt(e))return ir(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=fo(e);let a=(n?qi(t.width):t.width)/i,l=(n?qi(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const jc=ir(0);function mo(r){const e=ft(r);return!Sn()||!e.visualViewport?jc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Wc(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==ft(r)?!1:e}function si(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=go(r);let a=ir(1);e&&(i?Lt(i)&&(a=Er(i)):a=Er(r));const l=Wc(n,t,i)?mo(n):ir(0);let h=(s.left+l.x)/a.x,p=(s.top+l.y)/a.y,g=s.width/a.x,f=s.height/a.y;if(n){const b=ft(n),w=i&&Lt(i)?ft(i):i;let _=b,P=_.frameElement;for(;P&&i&&w!==_;){const k=Er(P),U=P.getBoundingClientRect(),R=kt(P),j=U.left+(P.clientLeft+parseFloat(R.paddingLeft))*k.x,B=U.top+(P.clientTop+parseFloat(R.paddingTop))*k.y;h*=k.x,p*=k.y,g*=k.x,f*=k.y,h+=j,p+=B,_=ft(P),P=_.frameElement}}return Lr({width:g,height:f,x:h,y:p})}function Nc(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=ar(i),l=e?os(e.floating):!1;if(i===a||l&&n)return t;let h={scrollLeft:0,scrollTop:0},p=ir(1);const g=ir(0),f=Rt(i);if((f||!f&&!n)&&((Hr(i)!=="body"||mi(a))&&(h=ls(i)),Rt(i))){const b=si(i);p=Er(i),g.x=b.x+i.clientLeft,g.y=b.y+i.clientTop}return{width:t.width*p.x,height:t.height*p.y,x:t.x*p.x-h.scrollLeft*p.x+g.x,y:t.y*p.y-h.scrollTop*p.y+g.y}}function Hc(r){return Array.from(r.getClientRects())}function vo(r){return si(ar(r)).left+ls(r).scrollLeft}function Bc(r){const e=ar(r),t=ls(r),i=r.ownerDocument.body,s=Nt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Nt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+vo(r);const l=-t.scrollTop;return kt(i).direction==="rtl"&&(a+=Nt(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function zc(r,e){const t=ft(r),i=ar(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,h=0;if(s){n=s.width,a=s.height;const p=Sn();(!p||p&&e==="fixed")&&(l=s.offsetLeft,h=s.offsetTop)}return{width:n,height:a,x:l,y:h}}function Vc(r,e){const t=si(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=Rt(r)?Er(r):ir(1),a=r.clientWidth*n.x,l=r.clientHeight*n.y,h=s*n.x,p=i*n.y;return{width:a,height:l,x:h,y:p}}function Aa(r,e,t){let i;if(e==="viewport")i=zc(r,t);else if(e==="document")i=Bc(ar(r));else if(Lt(e))i=Vc(e,t);else{const s=mo(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return Lr(i)}function bo(r,e){const t=sr(r);return t===e||!Lt(t)||Rr(t)?!1:kt(t).position==="fixed"||bo(t,e)}function Yc(r,e){const t=e.get(r);if(t)return t;let i=hn(r,[],!1).filter(l=>Lt(l)&&Hr(l)!=="body"),s=null;const n=kt(r).position==="fixed";let a=n?sr(r):r;for(;Lt(a)&&!Rr(a);){const l=kt(a),h=$n(a);!h&&l.position==="fixed"&&(s=null),(n?!h&&!s:!h&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||mi(a)&&!h&&bo(r,a))?i=i.filter(g=>g!==a):s=l,a=sr(a)}return e.set(r,i),i}function qc(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?os(e)?[]:Yc(e,this._c):[].concat(t),i],l=a[0],h=a.reduce((p,g)=>{const f=Aa(e,g,s);return p.top=Nt(f.top,p.top),p.right=Tr(f.right,p.right),p.bottom=Tr(f.bottom,p.bottom),p.left=Nt(f.left,p.left),p},Aa(e,l,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function Gc(r){const{width:e,height:t}=fo(r);return{width:e,height:t}}function Xc(r,e,t){const i=Rt(e),s=ar(e),n=t==="fixed",a=si(r,!0,n,e);let l={scrollLeft:0,scrollTop:0};const h=ir(0);if(i||!i&&!n)if((Hr(e)!=="body"||mi(s))&&(l=ls(e)),i){const f=si(e,!0,n,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else s&&(h.x=vo(s));const p=a.left+l.scrollLeft-h.x,g=a.top+l.scrollTop-h.y;return{x:p,y:g,width:a.width,height:a.height}}function rn(r){return kt(r).position==="static"}function Oa(r,e){return!Rt(r)||kt(r).position==="fixed"?null:e?e(r):r.offsetParent}function yo(r,e){const t=ft(r);if(os(r))return t;if(!Rt(r)){let s=sr(r);for(;s&&!Rr(s);){if(Lt(s)&&!rn(s))return s;s=sr(s)}return t}let i=Oa(r,e);for(;i&&Fc(i)&&rn(i);)i=Oa(i,e);return i&&Rr(i)&&rn(i)&&!$n(i)?t:i||Ic(r)||t}const Zc=async function(r){const e=this.getOffsetParent||yo,t=this.getDimensions,i=await t(r.floating);return{reference:Xc(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Kc(r){return kt(r).direction==="rtl"}const Qc={convertOffsetParentRelativeRectToViewportRelativeRect:Nc,getDocumentElement:ar,getClippingRect:qc,getOffsetParent:yo,getElementRects:Zc,getClientRects:Hc,getDimensions:Gc,getScale:Er,isElement:Lt,isRTL:Kc},Jc=Mc,eh=Uc,th=Dc,rh=Lc,ih=(r,e,t)=>{const i=new Map,s={platform:Qc,...t},n={...s.platform,_c:i};return Ec(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=ss(class extends Cn{constructor(r){var e;if(super(r),r.type!==kn.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return rr}});var sh=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,vi=(r,e,t,i)=>{for(var s=i>1?void 0:i?nh(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sh(e,t,s),s};let Vt=class extends rt{constructor(){super(...arguments),this.dropdownRef=je(),this.invokerRef=je(),this.optionsRef=je(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){ih(this.invokerRef.value,this.optionsRef.value,{middleware:[Jc(2),th(),rh(),eh()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return A`

            <div class="dropdown" ${We(this.dropdownRef)}>

                <thermal-button class="${Ht(r)}" ${We(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?A`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:A`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${We(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Vt.shadowRootOptions={...rt.shadowRootOptions,mode:"open"};Vt.styles=Oe`

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
    
    `;vi([pi({slot:"option"})],Vt.prototype,"_options",2);vi([N({type:String,reflect:!0})],Vt.prototype,"open",2);vi([N({type:String,reflect:!0,attribute:!0}),M()],Vt.prototype,"interactive",2);vi([N({type:String,reflect:!0})],Vt.prototype,"variant",2);Vt=vi([ue("thermal-dropdown")],Vt);var ah=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,cs=(r,e,t,i)=>{for(var s=i>1?void 0:i?oh(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ah(e,t,s),s};let Mr=class extends rt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=je(),this.contentRef=je(),this.rulerContentRef=je()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return A`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${We(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${We(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${We(this.contentRef)}>

                    ${this.collapsed===!1?A`
                        <slot></slot>    
                    `:Z}
                
                </div>

            </div>

            ${this.collapsed?A`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:Z}
        
        `}};Mr.styles=Oe`

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

    `;cs([M()],Mr.prototype,"collapsed",2);cs([M()],Mr.prototype,"lastContentWidth",2);cs([M()],Mr.prototype,"drawerRef",2);Mr=cs([ue("thermal-bar")],Mr);var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?ch(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lh(e,t,s),s};let Yt=class extends rt{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=je(),this.contentRef=je()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,l=n-175,h=a-0,p=this.contentRef.value.offsetHeight,g=4/3;let f=0,b=0;p<l?(console.log("priorita šířky"),f=h,b=f/g):(console.log("priorita výšky"),b=l,f=b*g),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${b}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return A`

        <div class="container ${this.dark?"dark":"normal"}" ${We(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?A`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?A`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?A`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:A`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:Z}

                -->
                
            </div> 
        `:""}

        ${this.pre.length>=0?A`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${We(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

        </div>
        
        `}};Yt.styles=Oe`

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
    
    `;wr([pi({slot:"bar",flatten:!0})],Yt.prototype,"barItems",2);wr([pi({slot:"bar",flatten:!0})],Yt.prototype,"barElements",2);wr([pi({slot:"pre",flatten:!0})],Yt.prototype,"pre",2);wr([N({type:String,reflect:!0})],Yt.prototype,"fullscreen",2);wr([N({type:String,reflect:!0,attribute:!0})],Yt.prototype,"showfullscreen",2);wr([N({type:String,reflect:!0,attribute:!0})],Yt.prototype,"dark",2);Yt=wr([ue("thermal-app")],Yt);var hh=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,uh=(r,e,t,i)=>{for(var s=i>1?void 0:i?dh(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hh(e,t,s),s};let dn=class extends rt{render(){return A`
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
                        <p>version ${yn}</p>
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
        `}};dn.styles=Oe`

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
    
    `;dn=uh([ue("app-info-button")],dn);function wt(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function mr(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const wo=6048e5,ph=864e5;let fh={};function hs(){return fh}function ni(r,e){var l,h,p,g;const t=hs(),i=(e==null?void 0:e.weekStartsOn)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((g=(p=t.locale)==null?void 0:p.options)==null?void 0:g.weekStartsOn)??0,s=wt(r),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function Xi(r){return ni(r,{weekStartsOn:1})}function xo(r){const e=wt(r),t=e.getFullYear(),i=mr(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=Xi(i),n=mr(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const a=Xi(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function Ea(r){const e=wt(r);return e.setHours(0,0,0,0),e}function Da(r){const e=wt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function gh(r,e){const t=Ea(r),i=Ea(e),s=+t-Da(t),n=+i-Da(i);return Math.round((s-n)/ph)}function mh(r){const e=xo(r),t=mr(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),Xi(t)}function vh(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function _o(r){if(!vh(r)&&typeof r!="number")return!1;const e=wt(r);return!isNaN(Number(e))}function bh(r){const e=wt(r),t=mr(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const yh={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},wh=(r,e,t)=>{let i;const s=yh[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function sn(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const xh={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},_h={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},kh={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ch={date:sn({formats:xh,defaultWidth:"full"}),time:sn({formats:_h,defaultWidth:"full"}),dateTime:sn({formats:kh,defaultWidth:"full"})},$h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Sh=(r,e,t,i)=>$h[r];function Xr(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,l=t!=null&&t.width?String(t.width):a;s=r.formattingValues[l]||r.formattingValues[a]}else{const a=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[l]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const Ph={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ah={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Oh={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Eh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Dh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Th={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Lh=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Rh={ordinalNumber:Lh,era:Xr({values:Ph,defaultWidth:"wide"}),quarter:Xr({values:Ah,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Xr({values:Oh,defaultWidth:"wide"}),day:Xr({values:Eh,defaultWidth:"wide"}),dayPeriod:Xr({values:Dh,defaultWidth:"wide",formattingValues:Th,defaultFormattingWidth:"wide"})};function Zr(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],l=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],h=Array.isArray(l)?Uh(l,f=>f.test(a)):Mh(l,f=>f.test(a));let p;p=r.valueCallback?r.valueCallback(h):h,p=t.valueCallback?t.valueCallback(p):p;const g=e.slice(a.length);return{value:p,rest:g}}}function Mh(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function Uh(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Fh(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const Ih=/^(\d+)(th|st|nd|rd)?/i,jh=/\d+/i,Wh={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Nh={any:[/^b/i,/^(a|c)/i]},Hh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Bh={any:[/1/i,/2/i,/3/i,/4/i]},zh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Vh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Yh={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},qh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Gh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Zh={ordinalNumber:Fh({matchPattern:Ih,parsePattern:jh,valueCallback:r=>parseInt(r,10)}),era:Zr({matchPatterns:Wh,defaultMatchWidth:"wide",parsePatterns:Nh,defaultParseWidth:"any"}),quarter:Zr({matchPatterns:Hh,defaultMatchWidth:"wide",parsePatterns:Bh,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Zr({matchPatterns:zh,defaultMatchWidth:"wide",parsePatterns:Vh,defaultParseWidth:"any"}),day:Zr({matchPatterns:Yh,defaultMatchWidth:"wide",parsePatterns:qh,defaultParseWidth:"any"}),dayPeriod:Zr({matchPatterns:Gh,defaultMatchWidth:"any",parsePatterns:Xh,defaultParseWidth:"any"})},Kh={code:"en-US",formatDistance:wh,formatLong:Ch,formatRelative:Sh,localize:Rh,match:Zh,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Qh(r){const e=wt(r);return gh(e,bh(e))+1}function Jh(r){const e=wt(r),t=+Xi(e)-+mh(e);return Math.round(t/wo)+1}function ko(r,e){var g,f,b,w;const t=wt(r),i=t.getFullYear(),s=hs(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((w=(b=s.locale)==null?void 0:b.options)==null?void 0:w.firstWeekContainsDate)??1,a=mr(r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=ni(a,e),h=mr(r,0);h.setFullYear(i,0,n),h.setHours(0,0,0,0);const p=ni(h,e);return t.getTime()>=l.getTime()?i+1:t.getTime()>=p.getTime()?i:i-1}function ed(r,e){var l,h,p,g;const t=hs(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??t.firstWeekContainsDate??((g=(p=t.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,s=ko(r,e),n=mr(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),ni(n,e)}function td(r,e){const t=wt(r),i=+ni(t,e)-+ed(t,e);return Math.round(i/wo)+1}function be(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Jt={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return be(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):be(t+1,2)},d(r,e){return be(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return be(r.getHours()%12||12,e.length)},H(r,e){return be(r.getHours(),e.length)},m(r,e){return be(r.getMinutes(),e.length)},s(r,e){return be(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return be(s,e.length)}},Sr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ta={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Jt.y(r,e)},Y:function(r,e,t,i){const s=ko(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return be(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):be(n,e.length)},R:function(r,e){const t=xo(r);return be(t,e.length)},u:function(r,e){const t=r.getFullYear();return be(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return be(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return be(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Jt.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return be(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=td(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):be(s,e.length)},I:function(r,e,t){const i=Jh(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):be(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Jt.d(r,e)},D:function(r,e,t){const i=Qh(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):be(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return be(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return be(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return be(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=Sr.noon:i===0?s=Sr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=Sr.evening:i>=12?s=Sr.afternoon:i>=4?s=Sr.morning:s=Sr.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Jt.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Jt.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):be(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):be(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Jt.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Jt.s(r,e)},S:function(r,e){return Jt.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Ra(i);case"XXXX":case"XX":return ur(i);case"XXXXX":case"XXX":default:return ur(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return Ra(i);case"xxxx":case"xx":return ur(i);case"xxxxx":case"xxx":default:return ur(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+La(i,":");case"OOOO":default:return"GMT"+ur(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+La(i,":");case"zzzz":default:return"GMT"+ur(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return be(i,e.length)},T:function(r,e,t){const i=r.getTime();return be(i,e.length)}};function La(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+be(n,2)}function Ra(r,e){return r%60===0?(r>0?"-":"+")+be(Math.abs(r)/60,2):ur(r,e)}function ur(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=be(Math.trunc(i/60),2),n=be(i%60,2);return t+s+e+n}const Ma=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Co=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},rd=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Ma(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Ma(i,e)).replace("{{time}}",Co(s,e))},id={p:Co,P:rd},sd=/^D+$/,nd=/^Y+$/,ad=["D","DD","YY","YYYY"];function od(r){return sd.test(r)}function ld(r){return nd.test(r)}function cd(r,e,t){const i=hd(r,e,t);if(console.warn(i),ad.includes(r))throw new RangeError(i)}function hd(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const dd=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ud=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pd=/^'([^]*?)'?$/,fd=/''/g,gd=/[a-zA-Z]/;function vr(r,e,t){var g,f,b,w;const i=hs(),s=i.locale??Kh,n=i.firstWeekContainsDate??((f=(g=i.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??((w=(b=i.locale)==null?void 0:b.options)==null?void 0:w.weekStartsOn)??0,l=wt(r);if(!_o(l))throw new RangeError("Invalid time value");let h=e.match(ud).map(_=>{const P=_[0];if(P==="p"||P==="P"){const k=id[P];return k(_,s.formatLong)}return _}).join("").match(dd).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const P=_[0];if(P==="'")return{isToken:!1,value:md(_)};if(Ta[P])return{isToken:!0,value:_};if(P.match(gd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return{isToken:!1,value:_}});s.localize.preprocessor&&(h=s.localize.preprocessor(l,h));const p={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return h.map(_=>{if(!_.isToken)return _.value;const P=_.value;(ld(P)||od(P))&&cd(P,e,String(r));const k=Ta[P[0]];return k(l,P,s.localize,p)}).join("")}function md(r){const e=r.match(pd);return e?e[1].replace(fd,"'"):r}function nn(r,e){const t=wt(r);if(!_o(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const h=be(t.getDate(),2),p=be(t.getMonth()+1,2);n=`${be(t.getFullYear(),4)}${a}${p}${a}${h}`}if(s!=="date"){const h=be(t.getHours(),2),p=be(t.getMinutes(),2),g=be(t.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${l}${p}${l}${g}`}return n}var vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bd(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var un={exports:{}};const yd={},wd=Object.freeze(Object.defineProperty({__proto__:null,default:yd},Symbol.toStringTag,{value:"Module"})),Pr=bd(wd);/**
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
 */(function(r,e){(function(t,i){i(e)})(vd,function(t){var i={},s={exports:{}};(function(C){var E=function(Q){return typeof Q<"u"&&Q.versions!=null&&Q.versions.node!=null&&Q+""=="[object process]"};C.exports.isNode=E,C.exports.platform=typeof process<"u"&&E(process)?"node":"browser";var D=C.exports.platform==="node"&&Pr;C.exports.isMainThread=C.exports.platform==="node"?(!D||D.isMainThread)&&!process.connected:typeof Window<"u",C.exports.cpus=C.exports.platform==="browser"?self.navigator.hardwareConcurrency:Pr.cpus().length})(s);var n=s.exports,a={},l;function h(){if(l)return a;l=1;function C(Q,Ce){var ne=this;if(!(this instanceof C))throw new SyntaxError("Constructor must be called with the new operator");if(typeof Q!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Te=[],we=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var H=function(le,ge){Te.push(le),we.push(ge)};this.then=function($,le){return new C(function(ge,Ve){var Qe=$?E($,ge,Ve):ge,Et=le?E(le,ge,Ve):Ve;H(Qe,Et)},ne)};var xe=function(le){return ne.resolved=!0,ne.rejected=!1,ne.pending=!1,Te.forEach(function(ge){ge(le)}),H=function(Ve,Qe){Ve(le)},xe=x=function(){},ne},x=function(le){return ne.resolved=!1,ne.rejected=!0,ne.pending=!1,we.forEach(function(ge){ge(le)}),H=function(Ve,Qe){Qe(le)},xe=x=function(){},ne};this.cancel=function(){return Ce?Ce.cancel():x(new D),ne},this.timeout=function($){if(Ce)Ce.timeout($);else{var le=setTimeout(function(){x(new T("Promise timed out after "+$+" ms"))},$);ne.always(function(){clearTimeout(le)})}return ne},Q(function($){xe($)},function($){x($)})}function E(Q,Ce,ne){return function(Te){try{var we=Q(Te);we&&typeof we.then=="function"&&typeof we.catch=="function"?we.then(Ce,ne):Ce(we)}catch(H){ne(H)}}}C.prototype.catch=function(Q){return this.then(null,Q)},C.prototype.always=function(Q){return this.then(Q,Q)},C.all=function(Q){return new C(function(Ce,ne){var Te=Q.length,we=[];Te?Q.forEach(function(H,xe){H.then(function(x){we[xe]=x,Te--,Te==0&&Ce(we)},function(x){Te=0,ne(x)})}):Ce(we)})},C.defer=function(){var Q={};return Q.promise=new C(function(Ce,ne){Q.resolve=Ce,Q.reject=ne}),Q};function D(Q){this.message=Q||"promise cancelled",this.stack=new Error().stack}D.prototype=new Error,D.prototype.constructor=Error,D.prototype.name="CancellationError",C.CancellationError=D;function T(Q){this.message=Q||"timeout exceeded",this.stack=new Error().stack}return T.prototype=new Error,T.prototype.constructor=Error,T.prototype.name="TimeoutError",C.TimeoutError=T,a.Promise=C,a}function p(C,E){(E==null||E>C.length)&&(E=C.length);for(var D=0,T=Array(E);D<E;D++)T[D]=C[D];return T}function g(C,E){var D=typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"];if(!D){if(Array.isArray(C)||(D=U(C))||E){D&&(C=D);var T=0,Q=function(){};return{s:Q,n:function(){return T>=C.length?{done:!0}:{done:!1,value:C[T++]}},e:function(we){throw we},f:Q}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ce,ne=!0,Te=!1;return{s:function(){D=D.call(C)},n:function(){var we=D.next();return ne=we.done,we},e:function(we){Te=!0,Ce=we},f:function(){try{ne||D.return==null||D.return()}finally{if(Te)throw Ce}}}}function f(C,E,D){return(E=P(E))in C?Object.defineProperty(C,E,{value:D,enumerable:!0,configurable:!0,writable:!0}):C[E]=D,C}function b(C,E){var D=Object.keys(C);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(C);E&&(T=T.filter(function(Q){return Object.getOwnPropertyDescriptor(C,Q).enumerable})),D.push.apply(D,T)}return D}function w(C){for(var E=1;E<arguments.length;E++){var D=arguments[E]!=null?arguments[E]:{};E%2?b(Object(D),!0).forEach(function(T){f(C,T,D[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(D)):b(Object(D)).forEach(function(T){Object.defineProperty(C,T,Object.getOwnPropertyDescriptor(D,T))})}return C}function _(C,E){if(typeof C!="object"||!C)return C;var D=C[Symbol.toPrimitive];if(D!==void 0){var T=D.call(C,E||"default");if(typeof T!="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return(E==="string"?String:Number)(C)}function P(C){var E=_(C,"string");return typeof E=="symbol"?E:E+""}function k(C){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},k(C)}function U(C,E){if(C){if(typeof C=="string")return p(C,E);var D={}.toString.call(C).slice(8,-1);return D==="Object"&&C.constructor&&(D=C.constructor.name),D==="Map"||D==="Set"?Array.from(C):D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)?p(C,E):void 0}}var R={exports:{}},j={},B;function W(){return B||(B=1,j.validateOptions=function(E,D,T){if(E){var Q=E?Object.keys(E):[],Ce=Q.find(function(Te){return!D.includes(Te)});if(Ce)throw new Error('Object "'+T+'" contains an unknown option "'+Ce+'"');var ne=D.find(function(Te){return Object.prototype[Te]&&!Q.includes(Te)});if(ne)throw new Error('Object "'+T+'" contains an inherited option "'+ne+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return E}},j.workerOptsNames=["credentials","name","type"],j.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],j.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),j}var ae,O;function V(){return O||(O=1,ae=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ae}var Y;function X(){if(Y)return R.exports;Y=1;var C=h(),E=C.Promise,D=n,T=W(),Q=T.validateOptions,Ce=T.forkOptsNames,ne=T.workerThreadOptsNames,Te=T.workerOptsNames,we="__workerpool-terminate__";function H(){var K=x();if(!K)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return K}function xe(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function x(){try{return Pr}catch(K){if(k(K)==="object"&&K!==null&&K.code==="MODULE_NOT_FOUND")return null;throw K}}function $(){if(D.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var K=new Blob([V()],{type:"text/javascript"});return window.URL.createObjectURL(K)}else return __dirname+"/worker.js"}function le(K,he){if(he.workerType==="web")return xe(),ge(K,he.workerOpts,Worker);if(he.workerType==="thread")return S=H(),Ve(K,S,he);if(he.workerType==="process"||!he.workerType)return Qe(K,Et(he),Pr);if(D.platform==="browser")return xe(),ge(K,he.workerOpts,Worker);var S=x();return S?Ve(K,S,he):Qe(K,Et(he),Pr)}function ge(K,he,S){Q(he,Te,"workerOpts");var se=new S(K,he);return se.isBrowserWorker=!0,se.on=function($e,ke){this.addEventListener($e,function(Fe){ke(Fe.data)})},se.send=function($e,ke){this.postMessage($e,ke)},se}function Ve(K,he,S){var se,$e;Q(S==null?void 0:S.workerThreadOpts,ne,"workerThreadOpts");var ke=new he.Worker(K,w({stdout:(se=S==null?void 0:S.emitStdStreams)!==null&&se!==void 0?se:!1,stderr:($e=S==null?void 0:S.emitStdStreams)!==null&&$e!==void 0?$e:!1},S==null?void 0:S.workerThreadOpts));return ke.isWorkerThread=!0,ke.send=function(Fe,me){this.postMessage(Fe,me)},ke.kill=function(){return this.terminate(),!0},ke.disconnect=function(){this.terminate()},S!=null&&S.emitStdStreams&&(ke.stdout.on("data",function(Fe){return ke.emit("stdout",Fe)}),ke.stderr.on("data",function(Fe){return ke.emit("stderr",Fe)})),ke}function Qe(K,he,S){Q(he.forkOpts,Ce,"forkOpts");var se=S.fork(K,he.forkArgs,he.forkOpts),$e=se.send;return se.send=function(ke){return $e.call(se,ke)},he.emitStdStreams&&(se.stdout.on("data",function(ke){return se.emit("stdout",ke)}),se.stderr.on("data",function(ke){return se.emit("stderr",ke)})),se.isChildProcess=!0,se}function Et(K){K=K||{};var he=process.execArgv.join(" "),S=he.indexOf("--inspect")!==-1,se=he.indexOf("--debug-brk")!==-1,$e=[];return S&&($e.push("--inspect="+K.debugPort),se&&$e.push("--debug-brk")),process.execArgv.forEach(function(ke){ke.indexOf("--max-old-space-size")>-1&&$e.push(ke)}),Object.assign({},K,{forkArgs:K.forkArgs,forkOpts:Object.assign({},K.forkOpts,{execArgv:(K.forkOpts&&K.forkOpts.execArgv||[]).concat($e),stdio:K.emitStdStreams?"pipe":void 0})})}function pt(K){for(var he=new Error(""),S=Object.keys(K),se=0;se<S.length;se++)he[S[se]]=K[S[se]];return he}function mt(K,he){if(Object.keys(K.processing).length===1){var S=Object.values(K.processing)[0];S.options&&typeof S.options.on=="function"&&S.options.on(he)}}function Kt(K,he){var S=this,se=he||{};this.script=K||$(),this.worker=le(this.script,se),this.debugPort=se.debugPort,this.forkOpts=se.forkOpts,this.forkArgs=se.forkArgs,this.workerOpts=se.workerOpts,this.workerThreadOpts=se.workerThreadOpts,this.workerTerminateTimeout=se.workerTerminateTimeout,K||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(me){mt(S,{stdout:me.toString()})}),this.worker.on("stderr",function(me){mt(S,{stderr:me.toString()})}),this.worker.on("message",function(me){if(!S.terminated)if(typeof me=="string"&&me==="ready")S.worker.ready=!0,ke();else{var nt=me.id,Ye=S.processing[nt];Ye!==void 0&&(me.isEvent?Ye.options&&typeof Ye.options.on=="function"&&Ye.options.on(me.payload):(delete S.processing[nt],S.terminating===!0&&S.terminate(),me.error?Ye.resolver.reject(pt(me.error)):Ye.resolver.resolve(me.result)))}});function $e(me){S.terminated=!0;for(var nt in S.processing)S.processing[nt]!==void 0&&S.processing[nt].resolver.reject(me);S.processing=Object.create(null)}function ke(){var me=g(S.requestQueue.splice(0)),nt;try{for(me.s();!(nt=me.n()).done;){var Ye=nt.value;S.worker.send(Ye.message,Ye.transfer)}}catch($i){me.e($i)}finally{me.f()}}var Fe=this.worker;this.worker.on("error",$e),this.worker.on("exit",function(me,nt){var Ye=`Workerpool Worker terminated Unexpectedly
`;Ye+="    exitCode: `"+me+"`\n",Ye+="    signalCode: `"+nt+"`\n",Ye+="    workerpool.script: `"+S.script+"`\n",Ye+="    spawnArgs: `"+Fe.spawnargs+"`\n",Ye+="    spawnfile: `"+Fe.spawnfile+"`\n",Ye+="    stdout: `"+Fe.stdout+"`\n",Ye+="    stderr: `"+Fe.stderr+"`\n",$e(new Error(Ye))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Kt.prototype.methods=function(){return this.exec("methods")},Kt.prototype.exec=function(K,he,S,se){S||(S=E.defer());var $e=++this.lastId;this.processing[$e]={id:$e,resolver:S,options:se};var ke={message:{id:$e,method:K,params:he},transfer:se&&se.transfer};this.terminated?S.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ke.message,ke.transfer):this.requestQueue.push(ke);var Fe=this;return S.promise.catch(function(me){if(me instanceof E.CancellationError||me instanceof E.TimeoutError)return delete Fe.processing[$e],Fe.terminateAndNotify(!0).then(function(){throw me},function(nt){throw nt});throw me})},Kt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Kt.prototype.terminate=function(K,he){var S=this;if(K){for(var se in this.processing)this.processing[se]!==void 0&&this.processing[se].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof he=="function"&&(this.terminationHandler=he),this.busy())this.terminating=!0;else{var $e=function(me){if(S.terminated=!0,S.cleaning=!1,S.worker!=null&&S.worker.removeAllListeners&&S.worker.removeAllListeners("message"),S.worker=null,S.terminating=!1,S.terminationHandler)S.terminationHandler(me,S);else if(me)throw me};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){$e(new Error("worker already killed!"));return}var ke=setTimeout(function(){S.worker&&S.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ke),S.worker&&(S.worker.killed=!0),$e()}),this.worker.ready?this.worker.send(we):this.requestQueue.push({message:we}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");$e()}},Kt.prototype.terminateAndNotify=function(K,he){var S=E.defer();return he&&S.promise.timeout(he),this.terminate(K,function(se,$e){se?S.reject(se):S.resolve($e)}),S.promise},R.exports=Kt,R.exports._tryRequireWorkerThreads=x,R.exports._setupProcessWorker=Qe,R.exports._setupBrowserWorker=ge,R.exports._setupWorkerThreadWorker=Ve,R.exports.ensureWorkerThreads=H,R.exports}var oe,q;function re(){if(q)return oe;q=1;var C=65535;oe=E;function E(){this.ports=Object.create(null),this.length=0}return E.prototype.nextAvailableStartingAt=function(D){for(;this.ports[D]===!0;)D++;if(D>=C)throw new Error("WorkerPool debug port limit reached: "+D+">= "+C);return this.ports[D]=!0,this.length++,D},E.prototype.releasePort=function(D){delete this.ports[D],this.length--},oe}var ie,ce;function De(){if(ce)return ie;ce=1;var C=h(),E=C.Promise,D=X(),T=n,Q=re(),Ce=new Q;function ne(x,$){typeof x=="string"?this.script=x||null:(this.script=null,$=x),this.workers=[],this.tasks=[],$=$||{},this.forkArgs=Object.freeze($.forkArgs||[]),this.forkOpts=Object.freeze($.forkOpts||{}),this.workerOpts=Object.freeze($.workerOpts||{}),this.workerThreadOpts=Object.freeze($.workerThreadOpts||{}),this.debugPortStart=$.debugPortStart||43210,this.nodeWorker=$.nodeWorker,this.workerType=$.workerType||$.nodeWorker||"auto",this.maxQueueSize=$.maxQueueSize||1/0,this.workerTerminateTimeout=$.workerTerminateTimeout||1e3,this.onCreateWorker=$.onCreateWorker||function(){return null},this.onTerminateWorker=$.onTerminateWorker||function(){return null},this.emitStdStreams=$.emitStdStreams||!1,$&&"maxWorkers"in $?(Te($.maxWorkers),this.maxWorkers=$.maxWorkers):this.maxWorkers=Math.max((T.cpus||4)-1,1),$&&"minWorkers"in $&&($.minWorkers==="max"?this.minWorkers=this.maxWorkers:(we($.minWorkers),this.minWorkers=$.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&D.ensureWorkerThreads()}ne.prototype.exec=function(x,$,le){if($&&!Array.isArray($))throw new TypeError('Array expected as argument "params"');if(typeof x=="string"){var ge=E.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ve=this.tasks,Qe={method:x,params:$,resolver:ge,timeout:null,options:le};Ve.push(Qe);var Et=ge.promise.timeout;return ge.promise.timeout=function(mt){return Ve.indexOf(Qe)!==-1?(Qe.timeout=mt,ge.promise):Et.call(ge.promise,mt)},this._next(),ge.promise}else{if(typeof x=="function")return this.exec("run",[String(x),$],le);throw new TypeError('Function or string expected as argument "method"')}},ne.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var x=this;return this.exec("methods").then(function($){var le={};return $.forEach(function(ge){le[ge]=function(){return x.exec(ge,Array.prototype.slice.call(arguments))}}),le})},ne.prototype._next=function(){if(this.tasks.length>0){var x=this._getWorker();if(x){var $=this,le=this.tasks.shift();if(le.resolver.promise.pending){var ge=x.exec(le.method,le.params,le.resolver,le.options).then($._boundNext).catch(function(){if(x.terminated)return $._removeWorker(x)}).then(function(){$._next()});typeof le.timeout=="number"&&ge.timeout(le.timeout)}else $._next()}}},ne.prototype._getWorker=function(){for(var x=this.workers,$=0;$<x.length;$++){var le=x[$];if(le.busy()===!1)return le}return x.length<this.maxWorkers?(le=this._createWorkerHandler(),x.push(le),le):null},ne.prototype._removeWorker=function(x){var $=this;return Ce.releasePort(x.debugPort),this._removeWorkerFromList(x),this._ensureMinWorkers(),new E(function(le,ge){x.terminate(!1,function(Ve){$.onTerminateWorker({forkArgs:x.forkArgs,forkOpts:x.forkOpts,workerThreadOpts:x.workerThreadOpts,script:x.script}),Ve?ge(Ve):le(x)})})},ne.prototype._removeWorkerFromList=function(x){var $=this.workers.indexOf(x);$!==-1&&this.workers.splice($,1)},ne.prototype.terminate=function(x,$){var le=this;this.tasks.forEach(function(pt){pt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ge=function(mt){Ce.releasePort(mt.debugPort),this._removeWorkerFromList(mt)},Ve=ge.bind(this),Qe=[],Et=this.workers.slice();return Et.forEach(function(pt){var mt=pt.terminateAndNotify(x,$).then(Ve).always(function(){le.onTerminateWorker({forkArgs:pt.forkArgs,forkOpts:pt.forkOpts,workerThreadOpts:pt.workerThreadOpts,script:pt.script})});Qe.push(mt)}),E.all(Qe)},ne.prototype.stats=function(){var x=this.workers.length,$=this.workers.filter(function(le){return le.busy()}).length;return{totalWorkers:x,busyWorkers:$,idleWorkers:x-$,pendingTasks:this.tasks.length,activeTasks:$}},ne.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var x=this.workers.length;x<this.minWorkers;x++)this.workers.push(this._createWorkerHandler())},ne.prototype._createWorkerHandler=function(){var x=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new D(x.script||this.script,{forkArgs:x.forkArgs||this.forkArgs,forkOpts:x.forkOpts||this.forkOpts,workerOpts:x.workerOpts||this.workerOpts,workerThreadOpts:x.workerThreadOpts||this.workerThreadOpts,debugPort:Ce.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Te(x){if(!H(x)||!xe(x)||x<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function we(x){if(!H(x)||!xe(x)||x<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function H(x){return typeof x=="number"}function xe(x){return Math.round(x)==x}return ie=ne,ie}var Ie={},Re,dt;function ut(){if(dt)return Re;dt=1;function C(E,D){this.message=E,this.transfer=D}return Re=C,Re}var Wt;function Pt(){return Wt||(Wt=1,function(C){var E=ut(),D="__workerpool-terminate__",T={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")T.on=function(H,xe){addEventListener(H,function(x){xe(x.data)})},T.send=function(H,xe){xe?postMessage(H,xe):postMessage(H)};else if(typeof process<"u"){var Q;try{Q=Pr}catch(H){if(!(k(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND"))throw H}if(Q&&Q.parentPort!==null){var Ce=Q.parentPort;T.send=Ce.postMessage.bind(Ce),T.on=Ce.on.bind(Ce),T.exit=process.exit.bind(process)}else T.on=process.on.bind(process),T.send=function(H){process.send(H)},T.on("disconnect",function(){process.exit(1)}),T.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ne(H){return Object.getOwnPropertyNames(H).reduce(function(xe,x){return Object.defineProperty(xe,x,{value:H[x],enumerable:!0})},{})}function Te(H){return H&&typeof H.then=="function"&&typeof H.catch=="function"}T.methods={},T.methods.run=function(xe,x){var $=new Function("return ("+xe+").apply(null, arguments);");return $.apply($,x)},T.methods.methods=function(){return Object.keys(T.methods)},T.terminationHandler=void 0,T.cleanupAndExit=function(H){var xe=function(){T.exit(H)};if(!T.terminationHandler)return xe();var x=T.terminationHandler(H);Te(x)?x.then(xe,xe):xe()};var we=null;T.on("message",function(H){if(H===D)return T.cleanupAndExit(0);try{var xe=T.methods[H.method];if(xe){we=H.id;var x=xe.apply(xe,H.params);Te(x)?x.then(function($){$ instanceof E?T.send({id:H.id,result:$.message,error:null},$.transfer):T.send({id:H.id,result:$,error:null}),we=null}).catch(function($){T.send({id:H.id,result:null,error:ne($)}),we=null}):(x instanceof E?T.send({id:H.id,result:x.message,error:null},x.transfer):T.send({id:H.id,result:x,error:null}),we=null)}else throw new Error('Unknown method "'+H.method+'"')}catch($){T.send({id:H.id,result:null,error:ne($)})}}),T.register=function(H,xe){if(H)for(var x in H)H.hasOwnProperty(x)&&(T.methods[x]=H[x]);xe&&(T.terminationHandler=xe.onTerminate),T.send("ready")},T.emit=function(H){if(we){if(H instanceof E){T.send({id:we,isEvent:!0,payload:H.message},H.transfer);return}T.send({id:we,isEvent:!0,payload:H})}},C.add=T.register,C.emit=T.emit}(Ie)),Ie}var At=n.platform,Ot=n.isMainThread,xt=n.cpus;function Me(C,E){var D=De();return new D(C,E)}var Ke=i.pool=Me;function lr(C,E){var D=Pt();D.add(C,E)}var st=i.worker=lr;function Ue(C){var E=Pt();E.emit(C)}var Ci=i.workerEmit=Ue,xs=h(),qe=xs.Promise,_s=i.Promise=qe,ks=i.Transfer=ut(),Cs=i.platform=At,$s=i.isMainThread=Ot,Ss=i.cpus=xt;t.Promise=_s,t.Transfer=ks,t.cpus=Ss,t.default=i,t.isMainThread=$s,t.platform=Cs,t.pool=Ke,t.worker=st,t.workerEmit=Ci,Object.defineProperty(t,"__esModule",{value:!0})})})(un,un.exports);var xd=un.exports,it=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},$o=class extends it{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},_d=class extends it{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},kd=class extends it{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const t=e.from;e.from=e.to,e.to=t}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const t=this.parent.minmax.value;if(t===void 0)return e;const i={...e};return e.from<t.min&&(i.from=t.min),e.to>t.max&&(i.to=t.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(t=>t.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const t=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=t),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},Cd=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},$d=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Sd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Pd=Cd(),fr={iron:{pixels:Sd,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:$d,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Pd,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Ad=class extends it{get availablePalettes(){return fr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},ln,Od=(ln=class{},c(ln,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),ln),ze,Ed=(ze=class extends Od{static humanRangeDates(e,t){return e=ze.inputToDate(e),t=ze.inputToDate(t),e.getUTCDate()===t.getUTCDate()?ze.humanDate(e):[ze.humanDate(e),ze.humanDate(t)].join(" - ")}static human(e){return`${ze.humanDate(e)} ${ze.humanTime(e,!0)} `}},c(ze,"isoDate",e=>(e=ze.inputToDate(e),nn(e,{representation:"date"}))),c(ze,"isoTime",e=>(e=ze.inputToDate(e),nn(e,{representation:"time"}))),c(ze,"isoComplete",e=>(e=ze.inputToDate(e),nn(e))),c(ze,"humanTime",(e,t=!1)=>(e=ze.inputToDate(e),vr(e,t?"HH:mm:ss":"HH:mm"))),c(ze,"humanDate",(e,t=!1)=>(e=ze.inputToDate(e),vr(e,t?"d. M.":"d. M. yyyy"))),ze),ds=class{},Dd=class extends ds{constructor(e,t,i,s,n,a,l,h,p,g,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(t),this.url=t,this.thermalUrl=t,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=a,this.duration=l,this.min=h,this.max=p,this.frameCount=g,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,t){const i=t*this.width+e;return this.pixels[i]}getColorAtPoint(e,t){var a,l;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(s!==void 0&&n!==void 0){const p=(i-s)/(n-s),g=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[g]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},us=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Tt=class pn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=pn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=pn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Td=class extends us{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Tt.createCanvasContainer(),this.canvas=Tt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),t=await this.pool.exec(async(i,s,n,a,l,h)=>{const g=new OffscreenCanvas(n,a).getContext("2d"),f=s-i;for(let _=0;_<=n;_++)for(let P=0;P<=a;P++){const k=_+P*n;let U=l[k];U<i&&(U=i),U>s&&(U=s);const j=(U-i)/f,B=Math.round(255*j),W=h[B];g.fillStyle=W,g.fillRect(_,P,1,1)}const b=g.getImageData(0,0,n,a);return await createImageBitmap(b)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(t,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Ld=class extends us{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Tt.createCursorLayerRoot(),this.center=Tt.createCursorLayerCenter(),this.axisX=Tt.createCursorLayerX(),this.axisY=Tt.createCursorLayerY(),this.label=Tt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Rd=class extends us{constructor(e){super(e);c(this,"container");this.container=Tt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Md=class extends us{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=Tt.createVisibleLayer(),this._url&&(this.image=Tt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},ye=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},Ud=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.service.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,l)=>{const h=s[l];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Pn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Fd=class extends it{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new ye);c(this,"callbacksPlay",new ye);c(this,"callbacksPause",new ye);c(this,"callbacksStop",new ye);c(this,"callbacksEnd",new ye);c(this,"callbacksChangeFrame",new ye);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Ud(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Pn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),vr(t,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(h=>h.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(h=>h.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Id=class extends it{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0)return;const t=r+e*this.parent.width;return this.parent.pixels[t]}},jd=class extends it{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new ye)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Wd=class{constructor(r){this.file=r}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},So=class{constructor(r,e,t){c(this,"_selected",!1);c(this,"onSelected",new ye);c(this,"onDeselected",new ye);c(this,"onValues",new ye);c(this,"onMoveOrResize",new ye);c(this,"layerRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new ye);c(this,"initialColor");c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"_graphMinActive",!1);c(this,"_graphMaxActive",!1);c(this,"_graphAvgActive",!1);c(this,"onGraphActivation",new ye);c(this,"ready",!1);this.key=r,this.file=e,this.initialColor=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get graphMinActive(){return this._graphMinActive}get graphMaxActive(){return this._graphMaxActive}get graphAvgActive(){return this._graphAvgActive}emitGraphActivation(){this.onGraphActivation.call(this._graphMinActive,this._graphMaxActive,this._graphAvgActive)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(t=>t.key!==this.key).forEach(t=>{t.selected&&t.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(r=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}},Po=class{constructor(r,e,t,i,s){c(this,"_x");c(this,"onX",new ye);c(this,"_y");c(this,"onY",new ye);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new ye);c(this,"onMouseLeave",new ye);c(this,"onActivate",new ye);c(this,"onDeactivate",new ye);this.key=r,this.analysis=i,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(r){if(this.mayMoveToX(r)){const e=this._x;this._x=r,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(r){if(this.mayMoveToY(r)){const e=this._y;this._y=r,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}projectInnerPositionToDom(){if(this.container){const r=this.getPercentageCoordinates();this.container.style.left=`${r.x}%`,this.container.style.top=`${r.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},ct,Nd=(ct=class extends Po{constructor(t,i,s,n,a){super(t,i,s,n,a);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(t=1){return Math.round(ct.size*t).toString()+"px"}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top=ct.sizePx(-.5),t.style.left=ct.sizePx(-.5),t.style.width=ct.sizePx(),t.style.height=ct.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=ct.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=ct.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${ct.sizePx(.5)} - 3px )`,t.style.left=`calc( ${ct.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(ct,"size",20),ct),Or=class Ao extends So{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this.top=n,this.left=a,this.width=1,this.height=1,this.center=new Nd("center",n,a,this,i),this.points.set("center",this.center),this.center.projectInnerPositionToDom(),this.center.onX.set("update point",l=>{this.left=l}),this.center.onY.set("update point",l=>{this.top=l})}get graph(){return this._graph||(this._graph=new Oo(this)),this._graph}static addAtPoint(t,i,s,n,a){return new Ao(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.service.pointAnalysisData(this.center.x,this.center.y)}},Oo=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new ye);c(this,"onGraphData",new ye);c(this,"onAnalysisSelection",new ye);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation())}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation())}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation())}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof Or)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof Or)return this._avg?[this.analysis.key]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.key} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof Or?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof Or)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},Hd=class extends Po{constructor(r,e,t,i,s){super(r,e,t,i,s),this._color=s,this.setColor(s)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Bd=class extends Hd{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,t=>{e.x!==t&&(e.x=t)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,t=>{e.y!==t&&(e.y=t)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Eo=class extends So{constructor(e,t,i,s,n,a,l){super(e,i,t);c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let h=n,p=s;a!==void 0&&l!==void 0&&(h=n+a,p=s+l),this.area=this.buildArea(s,n,a,l),this.tl=this.addPoint("tl",s,n),this.tr=this.addPoint("tr",s,h),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,h),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(g=>g.projectInnerPositionToDom())}get graph(){return this._graph||(this._graph=new Oo(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),l=Math.min(t,i),p=Math.max(t,i)-l,g=a-n;return{top:n,left:l,width:p,height:g}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=t-e,this.height=s-i,this.area.left=this.left,this.area.height=this.height,this.area.width=this.width,this.area.top=this.top}addPoint(e,t,i){const s=new Bd(e,t,i,this,this.color);return this.points.set(e,s),s}},Do=class{constructor(r,e,t,i,s){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},Ua=class extends Do{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},Fa=class Hi extends Eo{static startAddingAtPoint(e,t,i,s,n){const a=new Hi(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,l){const{top:h,left:p,width:g,height:f}=Hi.calculateDimensionsFromCorners(s,n,a,l);return new Hi(e,t,i,h,p,g,f)}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Ua(this,e,t,e+i,t+s):new Ua(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=i;p<s;p++){const g=this.file.width*p;for(let f=e;f<=t;f++)if(this.isWithin(f,p)){const b=this.file.pixels[g+f];b<n&&(n=b),b>a&&(a=b),h+=b,l++}}return{min:n,max:a,avg:h/l}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.service.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},Ia=class extends Do{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},ja=class Bi extends Eo{static startAddingAtPoint(e,t,i,s,n){const a=new Bi(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,l){const{top:h,left:p,width:g,height:f}=Bi.calculateDimensionsFromCorners(s,n,a,l);return new Bi(e,t,i,h,p,g,f)}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Ia(this,e,t,e+i,t+s):new Ia(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=i;p<s;p++){const g=this.file.width*p;for(let f=e;f<=t;f++){const b=this.file.pixels[g+f];b<n&&(n=b),b>a&&(a=b),h+=b,l++}}return{min:n,max:a,avg:h/l}}async getAnalysisData(){return await this.file.service.rectAnalysisData(this.top,this.left,this.width,this.height)}},zd=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new ye);c(this,"onRemove",new ye);c(this,"onSelectionChange",new ye);c(this,"colors",["orange","lightblue","green","brown","yellow","blue","pink"]);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var t;this.has(e)&&((t=this.get(e))==null||t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,t){const i=ja.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}placeRectAt(e,t,i,s,n){const a=ja.build(e,this.getNextColor(),this.drive.parent,t,i,s,n);return this.addAnalysis(a),a}createEllipsisFrom(e,t){const i=Fa.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}placeEllipsisAt(e,t,i,s,n){const a=Fa.build(e,this.getNextColor(),this.drive.parent,t,i,s,n);return this.addAnalysis(a),a}createPointAt(e,t){const i=Or.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.length;return e<this.colors.length?this.colors[e]:this.colors[e%this.colors.length]}getNextName(e){return`${e} ${this.all.length}`}},Vd=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},Yd=class extends it{constructor(){super(...arguments);c(this,"layers",new zd(this));c(this,"points",new Vd(this));c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const t=this.listenerLayerContainer.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),l=this.listenerLayerContainer.clientHeight,h=this.parent.height,g=e.layerY/l;return{top:Math.round(h*g),left:a}}activateListeners(){this.bindedPointerMoveListener=e=>{const t=this.getRelativePosition(e);this.points.all.forEach(i=>{i.active&&this.currentTool.onPointMove(i,t.top,t.left);const s=i.isWithin(t.top,t.left);s?this.currentTool.onPointEnter(i):s||this.currentTool.onPointLeave(i)})},this.bindedPointerDownListener=e=>{const t=this.getRelativePosition(e);this.currentTool.onCanvasClick(t.top,t.left,this.parent),this.points.all.forEach(i=>{i.isWithin(t.top,t.left)&&this.currentTool.onPointDown(i)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},qd=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new ye);c(this,"onAddGraph",new ye);c(this,"onRemoveGraph",new ye);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];s===void 0&&(s=[vr(parseInt(t),"m:ss:SSS")],r.values[i+1]=s),s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}},Gd=class extends it{constructor(e){super(e,{values:[[]],colors:[]});c(this,"listeners",new qd(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t})}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}},To=class Lo extends Dd{constructor(t,i,s,n,a,l,h,p,g,f,b,w,_,P,k,U,R){super(t,i.thermalUrl,s,n,g,a,h,b,w,l,i.visibleUrl);c(this,"_export");this.group=t,this.service=i,this.width=s,this.height=n,this.timestamp=a,this.frameCount=l,this.duration=h,this.frameInterval=p,this.fps=f,this.min=b,this.max=w,this.bytesize=_,this.averageEmissivity=P,this.averageReflectedKelvins=k,this.firstFrame=U,this.timelineData=R,this.pixels=U.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const t=new Wd(this);this._export=t}return this._export}postInit(){return this.canvasLayer=new Td(this),this.visibleLayer=new Md(this,this.visibleUrl),this.cursorLayer=new Ld(this),this.listenerLayer=new Rd(this),this.cursorValue=new Id(this,void 0),this.timeline=new Fd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new jd(this,!1),this.analysis=new Yd(this,[]),this.analysisData=new Gd(this),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}this.analysis.value.forEach(i=>i.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new Lo(t,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=t=>{this.cursorLayer.show=!0,this.isHover=!0;const i=this.width,s=this.root.clientWidth,n=i/s,a=Math.round(t.offsetX*n),l=Math.round(t.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:a,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(t){if(t!==void 0){const i=this.group.tool.value.getLabelValue(t.x,t.y,this);this.cursorLayer.setLabel(t.x,t.y,i),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(t)}},Xd=class extends it{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.url,t))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},Zd=class extends $o{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},ps=class{constructor(r){c(this,"active",!1);this.group=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Ro=class extends ps{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>i===void 0?"":i.getTemperatureAtPoint(e,t).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},An=class extends ps{},Kd=class extends An{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Qd=class extends An{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis)}onPointMove(){}onPointLeave(){}onPointEnter(){}},Jd=class extends An{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},eu=class extends ps{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.analysis.layers.all.filter(a=>a.isWithin(e,t)).map(a=>a.selected?`<span style="color:${a.initialColor}">${a.key}</span>`:`<s style="color:${a.initialColor}">${a.key}</s>`);return`${s.length>0?s.join("<br />")+"<br />":""}X: ${e}<br />Y: ${t}`}},tu=[Ro,Qd,Jd,Kd,eu],ru=r=>{const e=tu.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},iu=class extends it{constructor(e,t){super(e,t);c(this,"_tools",ru(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof ps?this.value=e:this.value=this.tools[e]}},su=class extends ds{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new Zd(this,void 0));c(this,"tool",new iu(this,new Ro(this)));c(this,"files",new Xd(this,[]));c(this,"cursorPosition",new _d(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});this.registry=e,this.id=t,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Mo=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Zi=class Uo extends Mo{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new Uo(e.url,e.code,e.message)}},Fo=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},Ur=class extends Mo{constructor(e,t,i,s,n){super(s,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=t,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const t=this.getFrameSubset(e);return await this.parser.frameData(t.array,t.dataType)}async pointAnalysisData(e,t){return await this.parser.pointAnalysisData(this.buffer,e,t)}async rectAnalysisData(e,t,i,s){return await this.parser.rectAnalysisData(this.buffer,e,t,i,s)}async ellipsisAnalysisData(e,t,i,s){return await this.parser.ellipsisAnalysisData(this.buffer,e,t,i,s)}async createInstance(e){const t=await this.baseInfo(),i=await this.frameData(0),s=To.fromService(e,this,t,i);return e.files.addFile(s),s}},nu=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(Y,X)=>{const oe=Y.getBigInt64(X,!0),q=62135596800000n,re=10000n,ie=24n*60n*60n*1000n*re,ce=0x4000000000000000n,De=0x8000000000000000n;let Re=oe&0x3fffffffffffffffn;oe&De&&(Re>ce-ie&&(Re-=ce),Re<0&&(Re+=ie));const ut=Re/re-q;return Number(ut)},a=n(e,5),l=e.getUint8(15);let h=2;l===1&&(h=4);const p=57,g=t*i*h,f=p+g,b=r.slice(25),w=b.byteLength/f,_=Y=>{const X=Y*f,oe=X+f,q=b.slice(X,oe),re=new DataView(q),ie=re.getFloat32(8,!0),ce=re.getFloat32(12,!0),De=n(re,0),Ie=re.getFloat32(24,!0),Re=re.getFloat32(28,!0);return{timestamp:De,min:ie,max:ce,emissivity:Ie,reflectedKelvins:Re}},P=[];for(let Y=0;Y<w;Y++){const X=_(Y);P.push(X)}const k={emissivity:0,reflectedKelvins:0};let U=1/0,R=-1/0;const j=[];P.forEach(Y=>{k.emissivity=k.emissivity+Y.emissivity,k.reflectedKelvins=k.reflectedKelvins+Y.reflectedKelvins,Y.min<U&&(U=Y.min),Y.max>R&&(R=Y.max),j.push(Y.timestamp)});const B=j[0],W=[];j.forEach((Y,X)=>{const oe=j[X+1];let q=0;oe===void 0&&(q=0),q=oe-Y;const re=Y-B;W.push({absolute:Y,relative:re,offset:isNaN(q)?0:q,index:X})});const ae=P[P.length-1].timestamp-P[0].timestamp,O=ae/w,V=1e3/O;return{width:t,height:i,timestamp:a,bytesize:s,frameCount:w,duration:ae,frameInterval:O,fps:V,timeline:W,min:U,max:R,averageEmissivity:k.emissivity/P.length,averageReflectedKelvins:k.reflectedKelvins/P.length}},au=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,l=57,h=s*n*a,p=l+h,g=r.slice(25),f=e*p,b=f+p;return{array:g.slice(f,b),dataType:i}},ou=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,h=0x8000000000000000n;let g=i&0x3fffffffffffffffn;i&h&&(g>l-a&&(g-=l),g<0&&(g+=a));const b=g/n-s,w=Number(b),_=t.getFloat32(8,!0),P=t.getFloat32(12,!0),k=t.getFloat32(24,!0),U=t.getFloat32(28,!0),R=r.slice(57);let j=[];if(e===0){const B=new Uint16Array(R),W=Math.abs(_-P),ae=65535;B.forEach(O=>{const V=O/ae;j.push(_+W*V)})}else e===1&&(j=Array.from(new Float32Array(R)));return{timestamp:w,min:_,max:P,emissivity:k,reflectedKelvins:U,pixels:j}},lu=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(U,R)=>{const j=U.getBigInt64(R,!0),B=62135596800000n,W=10000n,ae=24n*60n*60n*1000n*W,O=0x4000000000000000n,V=0x8000000000000000n;let X=j&0x3fffffffffffffffn;j&V&&(X>O-ae&&(X-=O),X<0&&(X+=ae));const q=X/W-B;return Number(q)},l=i.getUint8(15);let h=2;l===1&&(h=4);const p=57,g=s*n*h,f=p+g,b=r.slice(25),w=b.byteLength/f,_={},P=U=>{const R=U*f,j=R+f,B=b.slice(R,j),W=new DataView(B),ae=a(W,0),O=W.getFloat32(8,!0),Y=W.getFloat32(12,!0)-O,oe=57+t*h*s+e*h;let q=0;if(l===1)q=W.getFloat32(oe,!0);else if(l===0){console.log("jsem uvnitř varia");const ce=W.getInt16(oe,!0)/65535;q=O+Y*ce}return{timestamp:ae,temperature:q}};let k=0;for(let U=0;U<w;U++){const R=P(U);k===0&&(k=R.timestamp),_[R.timestamp-k]=R.temperature}return _},cu=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(j,B)=>{const W=j.getBigInt64(B,!0),ae=62135596800000n,O=10000n,V=24n*60n*60n*1000n*O,Y=0x4000000000000000n,X=0x8000000000000000n;let q=W&0x3fffffffffffffffn;W&X&&(q>Y-V&&(q-=Y),q<0&&(q+=V));const ie=q/O-ae;return Number(ie)},p=n.getUint8(15);let g=2;p===1&&(g=4);const f=57,b=a*l*g,w=f+b,_=r.slice(25),P=_.byteLength/w,k={},U=j=>{const B=j*w,W=B+w,ae=_.slice(B,W),O=new DataView(ae),V=h(O,0),Y=O.getFloat32(8,!0),oe=O.getFloat32(12,!0)-Y,q=57,re=e,ie=e+i,ce=t,De=t+s;let Ie=1/0,Re=-1/0,dt=0,ut=0;for(let Pt=ce;Pt<=De;Pt++){const At=Pt*a;for(let Ot=re;Ot<=ie;Ot++){const xt=q+(At+Ot)*g;let Me=NaN;if(p===1)Me=O.getFloat32(xt,!0);else{const st=O.getInt16(xt,!0)/65535;Me=Y+oe*st}Me<Ie&&(Ie=Me),Me>Re&&(Re=Me),ut+=Me,dt++}}const Wt={min:Ie,max:Re,avg:ut/dt,count:dt};return{timestamp:V,result:Wt}};let R=0;for(let j=0;j<P;j++){const B=U(j);R===0&&(R=B.timestamp),k[B.timestamp-R]=B.result}return k},hu=async r=>{let e=[];const t=async k=>{const U=new DataView(k.slice(0,25)),R=U.getUint8(15),j=U.getUint16(17,!0),B=U.getUint16(19,!0),W=R===1?4:2,ae=57,O=j*B*W,V=ae+O,Y=k.slice(25),X=Y.byteLength/V;let oe=[];for(let q=0;q<X;q++){const ie=q*V+57,ce=ie+O,De=Y.slice(ie,ce);R===0||R===1&&(oe=oe.concat(Array.from(new Float32Array(De))))}return oe};(await Promise.all(r.map(k=>t(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,U)=>k-U);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),l=200,h=a/l,p=[];let g=[...e];for(let k=0;k<l;k++){const U=s+h*k,R=U+h,j=g.findIndex(V=>V>R),W=g.slice(0,j-1).length,ae=W/e.length*100,O={from:U,to:R,count:W,percentage:ae};p.push(O),g=g.slice(j)}const f=[...p].sort((k,U)=>k.percentage-U.percentage),b=f[0].percentage,w=f[f.length-1].percentage,_=Math.abs(b-w);return p.map(k=>({...k,height:k.percentage/_*100}))},du=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},uu=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(B,W)=>{const ae=B.getBigInt64(W,!0),O=62135596800000n,V=10000n,Y=24n*60n*60n*1000n*V,X=0x4000000000000000n,oe=0x8000000000000000n;let re=ae&0x3fffffffffffffffn;ae&oe&&(re>X-Y&&(re-=X),re<0&&(re+=Y));const ce=re/V-O;return Number(ce)},p=n.getUint8(15);let g=2;p===1&&(g=4);const f=57,b=a*l*g,w=f+b,_=r.slice(25),P=_.byteLength/w,k={},U=(B,W)=>{const ae=e+i/2,O=t+s/2,V=(B-ae)/(i/2),Y=(W-O)/(s/2);return V*V+Y*Y<=1},R=B=>{const W=B*w,ae=W+w,O=_.slice(W,ae),V=new DataView(O),Y=h(V,0),X=V.getFloat32(8,!0),q=V.getFloat32(12,!0)-X,re=57,ie=e,ce=e+i,De=t,Ie=t+s;let Re=1/0,dt=-1/0,ut=0,Wt=0;for(let At=De;At<=Ie;At++){const Ot=At*a;for(let xt=ie;xt<=ce;xt++)if(U(xt,At)){const Me=re+(Ot+xt)*g;let Ke=NaN;if(p===1)Ke=V.getFloat32(Me,!0);else{const Ue=V.getInt16(Me,!0)/65535;Ke=X+q*Ue}Ke<Re&&(Re=Ke),Ke>dt&&(dt=Ke),Wt+=Ke,ut++}}const Pt={min:Re,max:dt,avg:Wt/ut,count:ut};return{timestamp:Y,result:Pt}};let j=0;for(let B=0;B<P;B++){const W=R(B);j===0&&(j=W.timestamp),k[W.timestamp-j]=W.result}return k},pu=[{extension:"lrc",minme:"application/octet-stream"}],fu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:pu,is:du,baseInfo:nu,getFrameSubset:au,frameData:ou,registryHistogram:hu,pointAnalysisData:lu,rectAnalysisData:cu,ellipsisAnalysisData:uu},Io=Object.freeze(fu),gu={LrcParser:Io},jo=Object.values(gu),Wo=(r,e)=>{const t=jo.find(i=>i.is(r,e));if(t===void 0)throw new Fo(2,e,`No parser found for '${e}'.`);return t},No=jo.map(r=>r.extensions),mu=No.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),vu=class Ho{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new Ho(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new Zi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=Wo(i,this.thermalUrl);return this.pocessTheService(new Ur(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof Fo)return this.pocessTheService(Zi.fromError(s));throw s}}pocessTheService(e){return e}},bu=class Bo{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new ye);c(this,"onMouseLeave",new ye);c(this,"onDrop",new ye);c(this,"onProcessingEnd",new ye);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new Bo(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=mu,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},yu=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new On(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=Wo(e,r.name);return new Ur(this,e,t,r.name)}catch(e){return new Zi(r.name,3,e.message)}}handleDropzone(r){return bu.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=vu.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},wu=class extends it{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},xu=class extends it{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new su(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},_u=class extends it{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let h=t.reduce((w,_)=>{const P=_.reduce((k,U)=>[...k,...U],[]);return[...w,...P]},[]).sort((w,_)=>w-_);const p=n/a;let g=i+p;const f=new Map;let b=0;for(;g!==!1;){const w=h.findIndex(k=>k>g),_=h.slice(0,w).length;f.set(g-p/2,_),b+=_,h=h.slice(w);const P=g+p;g=P<s?P:!1}return{result:f,resultCount:b}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(Io.registryHistogram,[t]);this.value=i}},ku=class extends it{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Cu=class extends $o{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},$u=class extends ds{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new xu(this,[]));c(this,"opacity",new wu(this,1));c(this,"minmax",new Cu(this,void 0));c(this,"loading",new ku(this,!1));c(this,"range",new kd(this,void 0));c(this,"histogram",new _u(this,[]));c(this,"palette");this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof Ur?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Ur&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,t){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},On=class extends ds{constructor(e,t){super();c(this,"id");c(this,"service",new yu(this));c(this,"registries",{});c(this,"palette",new Ad(this,"jet"));c(this,"pool");this.pool=e||xd.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new $u(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zo=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wa=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new zo(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Su{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pu=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Na extends Su{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const h=new Set;for(const[p,{consumerHost:g}]of this.subscriptions)h.has(p)||(h.add(p),g.dispatchEvent(new zo(this.context,p,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Pu(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Na(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Na(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Wa(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Wa(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let Wi;const Au=new Uint8Array(16);function Ou(){if(!Wi&&(Wi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Wi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Wi(Au)}const Je=[];for(let r=0;r<256;++r)Je.push((r+256).toString(16).slice(1));function Eu(r,e=0){return Je[r[e+0]]+Je[r[e+1]]+Je[r[e+2]]+Je[r[e+3]]+"-"+Je[r[e+4]]+Je[r[e+5]]+"-"+Je[r[e+6]]+Je[r[e+7]]+"-"+Je[r[e+8]]+Je[r[e+9]]+"-"+Je[r[e+10]]+Je[r[e+11]]+Je[r[e+12]]+Je[r[e+13]]+Je[r[e+14]]+Je[r[e+15]]}const Du=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ha={randomUUID:Du};function Tu(r,e,t){if(Ha.randomUUID&&!e&&!r)return Ha.randomUUID();r=r||{};const i=r.random||(r.rng||Ou)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Eu(i)}class bi extends rt{constructor(){super(...arguments),this.UUID=Tu()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const Vo="manager-instance",fs="manager-palette-context",Lu=new On,Ru="__internal_default_registry",Mu="__internal_default_group",Uu=r=>r.addOrGetRegistry(Ru),Fu=r=>r.groups.addOrGetGroup(Mu);var Iu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,gs=(r,e,t,i)=>{for(var s=i>1?void 0:i?ju(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Iu(e,t,s),s};let br=class extends bi{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:fr.jet}}connectedCallback(){super.connectedCallback();let r=Lu;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},t=br.sanitizeStringPalette(this.palette.key);e.palette=t,r=new On(void 0,e)}this.manager=r,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(r,e,t){if(super.attributeChangedCallback(r,e,t),r==="palette"&&this.manager){const i=br.sanitizeStringPalette(t);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(r){let e=!0;return r==null?e=!1:Object.keys(fr).includes(r)||(e=!1),e?r:"jet"}setPalette(r){this.palette={key:r,data:fr[r]}}render(){return A`<slot></slot>`}};gs([Ee({context:Vo})],br.prototype,"manager",2);gs([N({type:String,reflect:!0,attribute:!0})],br.prototype,"slug",2);gs([Ee({context:fs}),N({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:fr[r]}),toAttribute:r=>r.key.toString()}})],br.prototype,"palette",2);br=gs([ue("manager-provider")],br);var Wu=Object.defineProperty,Nu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Wu(e,t,s),s};class En extends bi{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}Nu([_e({context:Vo,subscribe:!0}),M()],En.prototype,"manager");const Yo="registry-instance",qo="registry-opacity",Dn="registry-range-from",Tn="registry-range-to",Hu="registry-loading",Go="registry-min",Xo="registry-max";var Bu=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,Zt=(r,e,t,i)=>{for(var s=i>1?void 0:i?zu(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bu(e,t,s),s};let Mt=class extends En{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let r=Uu(this.manager);this.slug===void 0&&(r=this.manager.addOrGetRegistry(this.slug)),this.registry=r,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(r,e,t){var i;if(super.attributeChangedCallback(r,e,t),(r==="from"||r==="to")&&t&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:r==="from"?parseFloat(t):this.from,to:r==="to"?parseFloat(t):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.setFixedRange(n):s.setFixedRange(n)}}if(r==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return A`<slot></slot>`}};Zt([N({type:String,reflect:!0,attribute:!0})],Mt.prototype,"slug",2);Zt([Ee({context:Yo})],Mt.prototype,"registry",2);Zt([Ee({context:qo}),N({type:Number,reflect:!0,attribute:!0})],Mt.prototype,"opacity",2);Zt([Ee({context:Go}),M()],Mt.prototype,"min",2);Zt([Ee({context:Xo}),M()],Mt.prototype,"max",2);Zt([Ee({context:Dn}),N({type:Number,reflect:!0,attribute:!0})],Mt.prototype,"from",2);Zt([Ee({context:Tn}),N({type:Number,reflect:!0,attribute:!0})],Mt.prototype,"to",2);Zt([Ee({context:Hu}),N({type:String,reflect:!0,attribute:!0})],Mt.prototype,"loading",2);Mt=Zt([ue("registry-provider")],Mt);var Vu=Object.defineProperty,Yu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Vu(e,t,s),s};class gt extends En{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}Yu([_e({context:Yo,subscribe:!0})],gt.prototype,"registry");const Zo="group-instance",Ko="tool-context",Qo="tools-context";var qu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,yi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gu(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qu(e,t,s),s};let Fr=class extends gt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=Fu(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,r=>{this.tool=r})}render(){return A`<slot></slot>`}};yi([N({type:String,attribute:!0,reflect:!0})],Fr.prototype,"slug",2);yi([Ee({context:Zo})],Fr.prototype,"group",2);yi([Ee({context:Ko})],Fr.prototype,"tool",2);yi([Ee({context:Qo})],Fr.prototype,"tools",2);Fr=yi([ue("group-provider")],Fr);var Xu=Object.defineProperty,Zu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Xu(e,t,s),s};class wi extends gt{constructor(){super()}connectedCallback(){super.connectedCallback()}}Zu([_e({context:Zo,subscribe:!0})],wi.prototype,"group");const Jo="file",el="failure",tl="file-loading",Ku="file-loaded",Ln="file-provider-element",Rn="file-ms-context",ms="playback",Mn="duration",Un="playing",rl="playbackSpeed",il="recording",sl="mayStop",Qu="analysislist",Fn="file-markers-context";var Ju=Object.defineProperty,ht=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Ju(e,t,s),s};class tt extends wi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new ye,this.onSuccess=new ye,this.onFailure=new ye}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}attributeChangedCallback(e,t,i){var s,n,a;if(super.attributeChangedCallback(e,t,i),e==="ms"&&i&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(i)));l!==this.currentFrame.ms&&((s=this.file)==null||s.timeline.setRelativeTime(l))}e==="playing"&&(i==="true"?(n=this.file)==null||n.timeline.play():i==="false"&&((a=this.file)==null||a.timeline.pause())),e==="playbackspeed"&&this.file&&i&&Object.keys(Pn).includes(i)&&(this.file.timeline.playbackSpeed=parseFloat(i)),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.playbackSpeed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}ht([Ee({context:Jo}),M()],tt.prototype,"file");ht([Ee({context:el}),M()],tt.prototype,"failure");ht([Ee({context:tl}),M()],tt.prototype,"loading");ht([Ee({context:Ku}),M()],tt.prototype,"ready");ht([Ee({context:Un}),N({type:String,reflect:!0,attribute:!0})],tt.prototype,"playing");ht([Ee({context:Mn}),M()],tt.prototype,"duration");ht([Ee({context:ms}),M()],tt.prototype,"currentFrame");ht([Ee({context:Rn}),N({type:Number,reflect:!0,attribute:!0})],tt.prototype,"ms");ht([Ee({context:rl}),N({type:Number,reflect:!0,attribute:!0})],tt.prototype,"playbackSpeed");ht([Ee({context:il}),N({type:String,reflect:!0,attribute:!0})],tt.prototype,"recording");ht([Ee({context:sl}),M()],tt.prototype,"mayStop");ht([pi({slot:"mark",flatten:!0})],tt.prototype,"marksQueriedInternally");ht([Ee({context:Fn})],tt.prototype,"marksProvidedBelow");ht([Ee({context:Qu})],tt.prototype,"analysis");var ep=Object.defineProperty,tp=Object.getOwnPropertyDescriptor,vs=(r,e,t,i)=>{for(var s=i>1?void 0:i?tp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ep(e,t,s),s};let ai=class extends tt{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Ur?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.clearCallbacks(),t.group.registry.postLoadedProcessing(),t)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(r=>{r instanceof To?this.recieveInstance(r):this.failure=r})}render(){return A`
            <slot></slot>
            <slot name="mark"></slot>
        `}};vs([Ee({context:Ln})],ai.prototype,"providedSelf",2);vs([N({type:String,attribute:!0,reflect:!0})],ai.prototype,"thermal",2);vs([N({type:String,attribute:!0,reflect:!0})],ai.prototype,"visible",2);ai=vs([ue("file-provider")],ai);var rp=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,Br=(r,e,t,i)=>{for(var s=i>1?void 0:i?ip(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rp(e,t,s),s};let nr=class extends tt{constructor(){super(...arguments),this.providedSelf=this,this.container=je(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof Ur){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Zi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return A`

                    <div class="container">
                        <div ${We(this.container)} class="${Ht(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${No.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return A`
            ${this.ready?A`<slot></slot>`:Z}
            <slot name="mark"></slot>
        `}};nr.styles=Oe`

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
    
    `;Br([Ee({context:Ln})],nr.prototype,"providedSelf",2);Br([M()],nr.prototype,"container",2);Br([M()],nr.prototype,"ready",2);Br([M()],nr.prototype,"hover",2);Br([M()],nr.prototype,"listener",2);nr=Br([ue("file-dropin")],nr);var sp=Object.defineProperty,np=Object.getOwnPropertyDescriptor,In=(r,e,t,i)=>{for(var s=i>1?void 0:i?np(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sp(e,t,s),s};let oi=class extends wi{constructor(){super(...arguments),this.container=je(),this.hover=!1}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const r={dropin:!0,hover:this.hover};return A`

            <div class="container">
            
                <div ${We(this.container)} class="${Ht(r)}"></div>

            </div>
        
        `}};oi.styles=Oe`

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
    
    `;In([M()],oi.prototype,"container",2);In([M()],oi.prototype,"hover",2);oi=In([ue("group-dropin")],oi);var ap=Object.defineProperty,op=Object.getOwnPropertyDescriptor,nl=(r,e,t,i)=>{for(var s=i>1?void 0:i?op(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ap(e,t,s),s};let Ki=class extends gt{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return A`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return A`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(fr).map(([r,e])=>A`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};Ki.styles=Oe`

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
        border-radius: 1rem;
    }

    `;nl([_e({context:fs,subscribe:!0})],Ki.prototype,"value",2);Ki=nl([ue("registry-palette-dropdown")],Ki);var lp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,al=(r,e,t,i)=>{for(var s=i>1?void 0:i?cp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lp(e,t,s),s};let Qi=class extends gt{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return A`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${r.name}</span>
            </div>
        
        `}render(){return A`
            <div class="container">
                ${Object.entries(fr).map(([r,e])=>A`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};Qi.styles=Oe`

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
        border-radius: 1rem;
    }

    `;al([_e({context:fs,subscribe:!0}),M()],Qi.prototype,"value",2);Qi=al([ue("registry-palette-buttons")],Qi);var hp=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,ol=(r,e,t,i)=>{for(var s=i>1?void 0:i?dp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hp(e,t,s),s};let Ji=class extends gt{connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return A`
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
        `}};Ji.styles=Oe`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;ol([_e({context:qo,subscribe:!0})],Ji.prototype,"value",2);Ji=ol([ue("registry-opacity-slider")],Ji);var up=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,fp=(r,e,t,i)=>{for(var s=i>1?void 0:i?pp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&up(e,t,s),s};let Ba=class extends gt{doAction(){this.registry.range.applyAuto()}render(){return A`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Ba=fp([ue("registry-range-auto-button")],Ba);var gp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,vp=(r,e,t,i)=>{for(var s=i>1?void 0:i?mp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gp(e,t,s),s};let za=class extends gt{doAction(){this.registry.range.applyMinmax()}render(){return A`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};za=vp([ue("registry-range-full-button")],za);var bp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,bs=(r,e,t,i)=>{for(var s=i>1?void 0:i?yp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bp(e,t,s),s};let Ut=class extends gt{constructor(){super(...arguments),this.ticksRef=je(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Ut.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){return A`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${We(this.ticksRef)}>

                    ${this.ticks.map(r=>A`
                            <div class="tick" >
                                <div class="tick-value">
                                ${r.value.toFixed(Ut.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Ut.TICK_WIDTH=40;Ut.TICK_FIXED=2;Ut.styles=Oe`

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


    `;bs([N({type:String,reflect:!0})],Ut.prototype,"placement",2);bs([M()],Ut.prototype,"minmax",2);bs([M()],Ut.prototype,"ticks",2);Ut=bs([ue("registry-ticks-bar")],Ut);var wp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,xi=(r,e,t,i)=>{for(var s=i>1?void 0:i?xp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wp(e,t,s),s};let Ir=class extends gt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return A`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return A`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};xi([M()],Ir.prototype,"minmax",2);xi([M()],Ir.prototype,"range",2);xi([M()],Ir.prototype,"opacity",2);xi([M()],Ir.prototype,"palette",2);Ir=xi([ue("registry-log")],Ir);(()=>{var r=Object.defineProperty,e=Math.pow,t=(o,u,v)=>u in o?r(o,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[u]=v,i=(o,u,v)=>(t(o,typeof u!="symbol"?u+"":u,v),v),s=(o,u)=>` ${u&&u.length>0?u.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",h="pointers-max-distance",p="range-dragging",g="data",f="min",b="max",w="step",_="round",P="type",k="theme",U="rtl",R="btt",j="disabled",B="keyboard-disabled",W="mousewheel-disabled",ae="slider-width",O="slider-height",V="slider-radius",Y="slider-bg",X="slider-bg-hover",oe="slider-bg-fill",q="pointer-width",re="pointer-height",ie="pointer-radius",ce="pointer-bg",De="pointer-bg-hover",Ie="pointer-bg-focus",Re="pointer-shadow",dt="pointer-shadow-hover",ut="pointer-shadow-focus",Wt="pointer-border",Pt="pointer-border-hover",At="pointer-border-focus",Ot="animate-onclick",xt="css-links",Me="vertical",Ke="horizontal",lr=(o,u,v,m,L)=>{let J=u-o;return J===0?v:(m-v)*(L-o)/J+v},st=o=>!isNaN(parseFloat(o))&&isFinite(o),Ue=(o,u)=>st(o)?Number(o):u,Ci=(o,u)=>u===0?0:Math.round(o/u)*u,xs=(o,u=1/0)=>{if(u===1/0)return o;let v=e(10,u);return Math.round(o*v)/v},qe=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",_s=(o,u)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},ks=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},Cs=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},$s=(o,u)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},Ss=(o,u)=>{if(!u||u.length<=0)return;let v=u.map(L=>st(L)?Ue(L,L):L),m={values:v||[]};m.value=v[0],m.value0=v[0],m.value1=v[0];for(let L=1;L<v.length;L++)m[`value${L+1}`]=v[L];o.dispatchEvent(new CustomEvent("change",{detail:m}))},C=(o,u,v)=>{let m=0,L,J,de,F,I=!1,pe=(te,Le,Xe,Ge,Ne,He)=>{let at=m;Xe!==void 0&&te>Xe&&(te=Xe),Le!==void 0&&te<Le&&(te=Le),m=te;let ot=m;return(Ge===Me&&He||Ge===Ke&&Ne)&&(ot=100-ot),Ge===Me?u.style.top=`${ot}%`:u.style.left=`${ot}%`,at!==m},ve=te=>te===u||u.contains(te),G=(te,Le,Xe,Ge)=>{L=te,J=Le,de=Xe,F=Ge},Pe=te=>{I=te,u.classList.toggle("disabled",I),I?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},vt=(te,Le)=>{Le==null?u.removeAttribute(te):u.setAttribute(te,Le)},et=te=>u.getAttribute(te),ee=te=>{if(!I){switch(te.key){case"ArrowLeft":{te.preventDefault(),typeof L=="function"&&L(v);break}case"ArrowRight":{te.preventDefault(),typeof J=="function"&&J(v);break}case"ArrowUp":{te.preventDefault(),typeof de=="function"&&de(v);break}case"ArrowDown":{te.preventDefault(),typeof F=="function"&&F(v);break}}$s(o,te)}},fe=()=>{I||_s(o,u)};return u.className=`pointer pointer-${v}`,u.addEventListener("keydown",ee),u.addEventListener("click",fe),{$pointer:u,get percent(){return m},get disabled(){return I},set disabled(te){Pe(te)},updatePosition:pe,isClicked:ve,setCallbacks:G,setAttr:vt,getAttr:et,destroy:()=>{u.removeEventListener("keydown",ee),u.removeEventListener("click",fe),u.remove()}}},E=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let u=o.split(","),v=[],m=!0;for(let L=0;L<u.length;L++){let J=u[L].trim();J!==""&&(v.push(J),st(J)||(m=!1))}return m?v.map(L=>Number(L)):v},D=(o,u)=>u?u.findIndex(v=>v===o||v.toString().trim()===o.toString().trim()):-1,T=o=>({updatePosition:(u,v,m,L)=>{if(v.length<=0)return;let J=v.length===1,de=v[0],F=v[v.length-1];u===Me?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),J?o.style.height=`${de}%`:o.style.height=`${Math.abs(de-F)}%`,L?(o.style.bottom="0%",J?o.style.top="auto":o.style.top=`${Math.min(100-F,100-de)}%`):(o.style.bottom="auto",J?o.style.top="0%":o.style.top=`${Math.min(de,F)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),J?o.style.width=`${de}%`:o.style.width=`${Math.abs(de-F)}%`,m?(o.style.right="0%",J?o.style.left="auto":o.style.left=`${Math.min(100-F,100-de)}%`):(o.style.right="auto",J?o.style.left="0%":o.style.left=`${Math.min(de,F)}%`))}}),Q="--animate-onclick",Ce="--width",ne="--height",Te="--panel-bg-border-radius",we="--panel-bg",H="--panel-bg-hover",xe="--panel-bg-fill",x="--pointer-width",$="--pointer-height",le="--pointer-border-radius",ge="--pointer-bg",Ve="--pointer-bg-hover",Qe="--pointer-bg-focus",Et="--pointer-shadow",pt="--pointer-shadow-hover",mt="--pointer-shadow-focus",Kt="--pointer-border",K="--pointer-border-hover",he="--pointer-border-focus",S=(o,u,v)=>{let m=new Map;for(let L of o.attributes){let J=L.nodeName.trim().toLowerCase();if(!u.test(J))continue;let de=J.replace(/\D/g,"").trim(),F=de===""||de==="0"||de==="1"?0:Ue(de,0)-1,I=v&&typeof v=="function"?v(L.value):L.value;m.set(F,I)}return m},se=o=>{if(!o)return null;let u=o.getAttribute(xt);if(!u)return null;let v=u.split(";"),m=[];for(let L of v)L.trim()!==""&&m.push(L.trim());return m},$e=[[Ce,ae,"sliderWidth",null],[ne,O,"sliderHeight",null],[Te,V,"sliderRadius",null],[we,Y,"sliderBg",null],[H,X,"sliderBgHover",null],[xe,oe,"sliderBgFill",null],[x,q,"pointer#Width",/^pointer([0-9]*)-width$/],[$,re,"pointer#Height",/^pointer([0-9]*)-height$/],[le,ie,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ge,ce,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ve,De,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Qe,Ie,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Et,Re,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[pt,dt,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[mt,ut,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Kt,Wt,"pointer#Border",/^pointer([0-9]*)-border$/],[K,Pt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[he,At,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ke=(o,u,v)=>{let m=null,L=[],J=new Map,de=(ee,fe=u)=>{let te=[...fe.classList];for(let Le of te)Le.startsWith(ee)&&u.classList.remove(Le)},F=()=>{de("shape");let ee=u.querySelectorAll(".pointer");for(let fe of ee)de("shape",fe)},I=ee=>{m=ee,de("theme-"),typeof ee=="string"&&u.classList.add(`theme-${ee}`)},pe=()=>{if(F(),!(L.length<=0)){u.classList.add("shape",`shape-${L[0]}`);for(let ee=1;ee<L.length;ee++){let fe=L[ee];if(!fe)continue;let te=u.querySelector(`.pointer-${ee}`);!te||te.classList.add("shape",`shape-${fe}`)}}},ve=(ee,fe)=>{L[ee]=fe,pe()},G=()=>{F();let ee=S(o,/^pointer([0-9]*)-shape$/);if(!(ee.size<=0)){for(let fe of ee){let te=fe[0];L[te]=fe[1]}pe()}},Pe=(ee,fe)=>`${ee}-${fe}`,vt=(ee,fe,te)=>{let Le=v[te];if(!Le)return;let Xe=te===0?u:Le.$pointer;if(fe==null){J.has(Pe(ee,te))&&J.delete(Pe(ee,te)),Xe.style.removeProperty(ee);return}J.set(Pe(ee,te),fe),Xe.style.setProperty(ee,fe)},et=(ee,fe)=>J.get(Pe(ee,fe));return(()=>{for(let ee of $e){let[fe,te,Le,Xe]=ee;if(Xe){let Ne=S(o,Xe);for(let He of Ne){let at=He[0],ot=He[1];vt(fe,ot,at)}}else{let Ne=o.getAttribute(te);vt(fe,Ne,0)}let Ge=[];if(Le.indexOf("#")===-1)Ge.push([Le,0]);else{Ge.push([Le.replace("#",""),0]),Ge.push([Le.replace("#","0"),0]),Ge.push([Le.replace("#","1"),0]);for(let Ne=1;Ne<v.length;Ne++)Ge.push([Le.replace("#",(Ne+1).toString()),Ne])}for(let Ne of Ge)try{let He=Ne[0],at=Ne[1];Object.prototype.hasOwnProperty.call(o,He)||Object.defineProperty(o,He,{get(){return et(fe,at)},set:ot=>{vt(fe,ot,at)}})}catch(He){console.error(He)}}I(o.getAttribute(k)),G()})(),{setStyle:vt,getStyle:et,get theme(){return m},set theme(ee){I(ee)},get pointerShapes(){return L},setPointerShape:ve}},Fe="animate-on-click",me="range-dragging",nt=(o,u,v,m)=>{let L=[],J=ve=>{for(let G of L)G.update&&typeof G.update=="function"&&G.update(ve)},de=()=>{for(let ve of L)ve.destroy&&typeof ve.destroy=="function"&&ve.destroy()},F=(ve,G)=>{for(let Pe of L)Pe.onAttrChange&&typeof Pe.onAttrChange=="function"&&Pe.onAttrChange(ve,G)},I=ve=>{if(ve.gettersAndSetters){for(let G of ve.gettersAndSetters)if(!(!G.name||!G.attributes))try{Object.prototype.hasOwnProperty.call(o,G.name)||Object.defineProperty(o,G.name,G.attributes)}catch(Pe){console.error("defineSettersGetters error:",Pe)}}},pe=ve=>{var G;if(!ve.css)return;let Pe=(G=o.shadowRoot)==null?void 0:G.querySelector("style");!Pe||(Pe.innerHTML+=ve.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ve of window.tcRangeSliderPlugins){let G=ve();L.push(G),G.init&&typeof G.init=="function"&&(G.init(o,u,v,m),I(G),pe(G))}},update:J,onAttrChange:F,destroy:de}},Ye=10,$i=20,cl=(o,u)=>{let v=new Map,m=/^value([0-9]*)$/;for(let F of o.attributes){let I=F.nodeName.trim().toLowerCase();if(!m.test(I))continue;let pe=I.replace("value","").trim(),ve=pe===""||pe==="0"||pe==="1"?0:Ue(pe,0)-1,G=st(F.value)?Ue(F.value,0):F.value;v.set(ve,G)}let L=Math.max(...Array.from(v.keys())),J=[];J.push([C(o,u,0),v.get(0)]);let de=u;for(let F=1;F<=L;F++){let I=u.cloneNode(!0);de.after(I),de=I,J.push([C(o,I,F),v.get(F)])}return J},Yn=(o,u,v,m,L,J,de)=>{try{Object.defineProperty(o,m,{configurable:!0,get(){if(!u)return;let F=u.pointers[v];if(!F)return;let I=u.getTextValue(F.percent);return st(I)?Ue(I,I):I},set:F=>{u.pointers[v]?u==null||u.setValue(F,v):u==null||u.addPointer(F)}}),Object.defineProperty(o,L,{configurable:!0,get(){var F,I;return(I=(F=u==null?void 0:u.pointers[v])==null?void 0:F.getAttr("aria-label"))!=null?I:void 0},set:F=>{!u||u.setAriaLabel(v,F)}}),Object.defineProperty(o,J,{configurable:!0,get(){var F,I;return(I=(F=u==null?void 0:u.styles)==null?void 0:F.pointerShapes[v])!=null?I:null},set:F=>{!u||!u.styles||u.styles.setPointerShape(v,F)}}),Object.defineProperty(o,de,{configurable:!0,get(){var F;return(F=u==null?void 0:u.pointers[v].disabled)!=null?F:!1},set:F=>{if(!u)return;let I=u==null?void 0:u.pointers[v];!I||(I.disabled=F)}})}catch(F){console.error(F)}},hl=(o,u)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let m=2;m<Ye;m++)v.push([`value${m}`,`ariaLabel${m}`,`pointer${m}Shape`,`pointer${m}Disabled`,m-1]);for(let m of v)Yn(o,u,m[4],m[0],m[1],m[2],m[3])},qn=(o,u,v)=>{var m;let L=(m=v.shadowRoot)==null?void 0:m.querySelector(".container");if(L)for(let J of o)u?L.prepend(J.$pointer):L.append(J.$pointer)},dl=(o,u)=>{if(!(!u||o.length<=1)){for(let v of o)v.$pointer.style.zIndex=$i.toString();u.$pointer.style.zIndex=($i*2).toString()}},Ps=0,Vr=100,Cr=2,Gn="0.3s",ul=(o,u,v)=>{let m=v.map(d=>d[0]),L=null,J=null,de=null,F=null,I=Ps,pe=Vr,ve,G,Pe=Ke,vt=Cr,et=!1,ee=!1,fe=!1,te=0,Le=1/0,Xe=!1,Ge,Ne,He=!1,at=!1,ot=!1,Qt=Gn,Xn=[],Zn=d=>{He||(d.preventDefault&&d.preventDefault(),cr(d),window.addEventListener("mousemove",cr),window.addEventListener("mouseup",Si),ks(o,d))},Si=d=>{He||(Ge=void 0,Ne=void 0,window.removeEventListener("mousemove",cr),window.removeEventListener("mouseup",Si),Qt&&u.classList.add(Fe),Cs(o,d))},gl=(d,y)=>{if(m.length<=0)return;if(m.length===1)return m[0].isClicked(d)&&Qt&&u.classList.remove(Fe),m[0];let z=vl(d);if(Xe){let Se=y,_t=Ai(Se);_t!==void 0&&(Se=Ci(Se,_t)),z?(Ge=Se,Ne=0,Qt&&u.classList.remove(Fe)):Ge!==void 0&&(Ne=Se-Ge,Ge=Se)}if(!ml(d)&&!z){for(let Se of m)if(!(!Se.isClicked(d)||Se.disabled))return Qt&&u.classList.remove(Fe),Se;for(let Se of m)if(L===Se)return Se}let Ae=1/0,Be=null;for(let Se of m){if(Se.disabled)continue;let _t=Math.abs(y-Se.percent);_t<Ae&&(Ae=_t,Be=Se)}return Be},Kn=()=>m.findIndex(d=>L===d&&!d.disabled),cr=d=>{let y;if(Pe===Me){let{height:Ae,top:Be}=u.getBoundingClientRect(),Se=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;y=Math.min(Math.max(0,Se-Be),Ae)*100/Ae}else{let{width:Ae,left:Be}=u.getBoundingClientRect(),Se=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;y=Math.min(Math.max(0,Se-Be),Ae)*100/Ae}if((et||ee)&&(y=100-y),L=gl(d.target,y),L&&dl(m,L),Xe&&m.length>1&&Ne!==void 0){let Ae=m[0],Be=m[m.length-1],Se=Ae.percent+Ne<0,_t=Be.percent+Ne>100;if(Se||_t)return;for(let Ui=0;Ui<m.length;Ui++)lt(Ui,m[Ui].percent+Ne);return}let z=Kn();z!==-1&&(lt(z,y),L==null||L.$pointer.focus())},Pi=d=>{if(He||document.activeElement!==o||L!=null&&L.disabled)return;d.stopPropagation(),d.preventDefault();let y=d.deltaY<0,z=et||ee,Ae=y?!z:z,Be=Kn();Be!==-1&&(Ae?Yr(Be,m[Be].percent):qr(Be,m[Be].percent))},Qn=d=>{He||at||(Pe===Me?ee?lt(d,100):lt(d,0):et?qr(d,m[d].percent):Yr(d,m[d].percent))},Jn=d=>{He||at||(Pe===Me?ee?lt(d,0):lt(d,100):et?Yr(d,m[d].percent):qr(d,m[d].percent))},ea=d=>{He||at||(Pe===Me?ee?qr(d,m[d].percent):Yr(d,m[d].percent):et?lt(d,100):lt(d,0))},ta=d=>{He||at||(Pe===Me?ee?Yr(d,m[d].percent):qr(d,m[d].percent):et?lt(d,0):lt(d,100))},ml=d=>d.classList.contains("panel"),vl=d=>d.classList.contains("panel-fill"),Yr=(d,y)=>{if(y===void 0)return;let z=Ai(y);z==null&&(z=1),y-=z,y<0&&(y=0),lt(d,y)},qr=(d,y)=>{if(y===void 0)return;let z=Ai(y);z==null&&(z=1),y+=z,y>100&&(y=100),lt(d,y)},hr=()=>{!F||F.update({percents:ra(),values:ia(),$pointers:sa(),min:na(),max:aa(),data:Es(),step:Os(),round:Ts(),type:Ds(),textMin:Oi(),textMax:Ei(),rightToLeft:Ms(),bottomToTop:Us(),pointersOverlap:Ws(),pointersMinDistance:Ls(),pointersMaxDistance:Rs(),rangeDragging:Ns(),disabled:Fs(),keyboardDisabled:Is(),mousewheelDisabled:js()})},bl=()=>{hr()},yl=d=>{if(!(fe||m.length<=1||pe===I))if(d===0){let y=Le*100/(pe-I);return Math.max(0,m[d+1].percent-y)}else{let y=te*100/(pe-I);return Math.min(m[d-1].percent+y,100)}},wl=d=>{if(!(fe||m.length<=1||pe===I))if(d===m.length-1){let y=Le*100/(pe-I);return Math.min(m[d-1].percent+y,100)}else{let y=te*100/(pe-I);return Math.max(0,m[d+1].percent-y)}},Ai=d=>{let y;if(typeof ve=="function"){let z=lr(0,100,I,pe,d);y=ve(z,d)}else y=ve;if(st(y)){let z=pe-I;return y=z===0?0:y*100/z,y}},$r=d=>{if(d===void 0)return;let y=lr(0,100,I,pe,d);return G!==void 0?G[Math.round(y)]:xs(y,vt)},Oi=()=>G!==void 0?G[I]:I,Ei=()=>G!==void 0?G[pe]:pe,Os=()=>ve,xl=d=>{var y;return d<=0||fe?Oi():(y=$r(m[d-1].percent))!=null?y:""},_l=d=>{var y;return m.length<=1||d>=m.length-1||fe?Ei():(y=$r(m[d+1].percent))!=null?y:""},ra=()=>m.map(d=>d.percent),ia=()=>m.map(d=>$r(d.percent)),sa=()=>m.map(d=>d.$pointer),na=()=>I,aa=()=>pe,Es=()=>G,Ds=()=>Pe,Ts=()=>vt,Ls=()=>te,Rs=()=>Le,kl=d=>Xn[d],Ms=()=>et,Us=()=>ee,Fs=()=>He,Is=()=>at,js=()=>ot,Ws=()=>fe,Ns=()=>Xe,lt=(d,y)=>{if(y===void 0)return;let z=Ai(y);z!==void 0&&(y=Ci(y,z));let Ae=m[d];if(!Ae)return;let Be=Ae.updatePosition(y,yl(d),wl(d),Pe,et,ee);J==null||J.updatePosition(Pe,m.map(Se=>Se.percent),et,ee),hr();for(let Se of m){let _t=$r(Se.percent);_t!==void 0&&(Se.setAttr("aria-valuenow",_t.toString()),Se.setAttr("aria-valuetext",_t.toString()))}$l(),Be&&Ss(o,m.map(Se=>$r(Se.percent)))},Dt=()=>{for(let d=0;d<m.length;d++)lt(d,m[d].percent)},Cl=(d,y)=>{I=G!==void 0?0:Ue(d,Ps),pe=G!==void 0?G.length-1:Ue(y,Vr),Di(I),Ti(pe)},$l=()=>{var d,y;for(let z=0;z<m.length;z++){let Ae=m[z];Ae.setAttr("aria-valuemin",((d=xl(z))!=null?d:"").toString()),Ae.setAttr("aria-valuemax",((y=_l(z))!=null?y:"").toString())}},Di=d=>{I=Ue(d,Ps),I>pe&&(pe=I+Vr),Dt()},Ti=d=>{pe=Ue(d,Vr),pe<I&&(pe=I+Vr),Dt()},oa=d=>{fe=!0;for(let y=0;y<d.length;y++)Li(d[y],y);fe=!1;for(let y=0;y<d.length;y++)Li(d[y],y)},Li=(d,y)=>{let z;G!==void 0?(z=d==null?0:D(d,G),z===-1&&(z=0)):(z=Ue(d,I),z<I&&(z=I),z>pe&&(z=pe));let Ae=lr(I,pe,0,100,z);lt(y,Ae)},Ri=d=>{if(d==null){ve=void 0;return}if(typeof d=="function"){ve=d,Dt();return}if(st(d)){ve=Ue(d,1);let y=Math.abs(pe-I);ve>y&&(ve=void 0),Dt();return}ve=void 0},Hs=d=>{fe=d,Dt()},Bs=d=>{(!st(d)||d<0)&&(d=0),te=d},zs=d=>{(!st(d)||d<0)&&(d=1/0),Le=d},Vs=d=>{He=d,u.classList.toggle("disabled",He),He?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},la=d=>{at=d},ca=d=>{ot=d,ot?document.removeEventListener("wheel",Pi):document.addEventListener("wheel",Pi,{passive:!1})},Ys=d=>{if(d==null){G=void 0;return}if(G=E(d),G===void 0||G.length<=0){G=void 0;return}Di(0),Ti(G.length-1),ve===void 0&&Ri(1)},qs=d=>{var y;typeof d=="string"?Pe=d.trim().toLowerCase()===Me?Me:Ke:Pe=Ke;let z=(y=o.shadowRoot)==null?void 0:y.querySelector(".range-slider-box");if(!z)return;z.className=`range-slider-box type-${Pe}`,Dt();let Ae=Pe===Me?"vertical":"horizontal";for(let Be of m)Be.setAttr("aria-orientation",Ae)},Gs=d=>{et=d,m.length>1&&qn(m,et,o),Dt(),hr()},Xs=d=>{ee=d,m.length>1&&qn(m,ee,o),Dt(),hr()},Zs=d=>{vt=Ue(d,Cr),vt<0&&(vt=Cr),hr()},ha=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(Qt=void 0,u.style.removeProperty(Q),u.classList.remove(Fe)):(Qt=d.toString(),u.style.setProperty(Q,Qt),u.classList.add(Fe))},da=(d,y)=>{let z=m[d];!z||(z.setAttr("aria-label",y),Xn[d]=y)},Mi=d=>{if(Ge=void 0,m.length<=1){Xe=!1,u.classList.remove(me);return}Xe=d,u.classList.toggle(me,Xe)},Sl=()=>{Vs(qe(o.getAttribute(j))),at=qe(o.getAttribute(B)),ot=qe(o.getAttribute(W));let d=S(o,/^pointer([0-9]*)-disabled$/,y=>qe(y));for(let y of d){let z=y[0];!m[z]||(m[z].disabled=y[1])}},Pl=()=>{let d=S(o,/^aria-label([0-9]*)$/);for(let y of d){let z=y[0];da(z,y[1])}},Al=d=>{let y=m.length,z=m[y-1].$pointer,Ae=z.cloneNode(!0);z.after(Ae);let Be=C(o,Ae,y);return Be.setCallbacks(Qn,Jn,ea,ta),m.push(Be),Li(d,y),Dt(),hr(),y},Ol=()=>{let d=m.length,y=m[d-1];return y?(y.destroy(),m.pop(),m.length<=1&&Mi(!1),Dt(),hr(),d-1):-1};return(()=>{var d,y;for(let Ae of m)Ae.setCallbacks(Qn,Jn,ea,ta);let z=(d=o.shadowRoot)==null?void 0:d.querySelector(".panel-fill");z&&(J=T(z)),qs(o.getAttribute(P)),Gs(qe(o.getAttribute(U))),Xs(qe(o.getAttribute(R))),Cl(o.getAttribute(f),o.getAttribute(b)),Ri(o.getAttribute(w)),Ys(o.getAttribute(g)),oa(v.map(Ae=>Ae[1])),Hs(qe(o.getAttribute(a))),Bs(Ue(o.getAttribute(l),0)),zs(Ue(o.getAttribute(h),1/0)),Mi(qe(o.getAttribute(p))),Zs(Ue(o.getAttribute(_),Cr)),Sl(),Pl(),de=ke(o,u,m),ha((y=o.getAttribute(Ot))!=null?y:Gn),u.addEventListener("mousedown",Zn),u.addEventListener("mouseup",Si),u.addEventListener("touchmove",cr),u.addEventListener("touchstart",cr),ot||document.addEventListener("wheel",Pi,{passive:!1}),F=nt(o,bl,{setValues:oa,setMin:Di,setMax:Ti,setStep:Ri,setPointersOverlap:Hs,setPointersMinDistance:Bs,setPointersMaxDistance:zs,setDisabled:Vs,setType:qs,setRightToLeft:Gs,setBottomToTop:Xs,setRound:Zs,setKeyboardDisabled:la,setMousewheelDisabled:ca,setRangeDragging:Mi,setData:Ys},{getPercents:ra,getValues:ia,getPointerElements:sa,getMin:na,getMax:aa,getStep:Os,getData:Es,getType:Ds,getRound:Ts,getTextMin:Oi,getTextMax:Ei,isRightToLeft:Ms,isBottomToTop:Us,isDisabled:Fs,isKeyboardDisabled:Is,isMousewheelDisabled:js,isPointersOverlap:Ws,isRangeDraggingEnabled:Ns,getPointersMinDistance:Ls,getPointersMaxDistance:Rs}),F.init()})(),{get pointers(){return m},get styles(){return de},get pluginsManager(){return F},get min(){return Oi()},get max(){return Ei()},get step(){return Os()},get pointersOverlap(){return Ws()},set pointersOverlap(d){Hs(d)},get pointersMinDistance(){return Ls()},set pointersMinDistance(d){Bs(d)},get pointersMaxDistance(){return Rs()},set pointersMaxDistance(d){zs(d)},get disabled(){return Fs()},set disabled(d){Vs(d)},get data(){return Es()},get type(){return Ds()},set type(d){qs(d)},get rightToLeft(){return Ms()},set rightToLeft(d){Gs(d)},get bottomToTop(){return Us()},set bottomToTop(d){Xs(d)},get round(){return Ts()},set round(d){Zs(d)},get animateOnClick(){return Qt},set animateOnClick(d){ha(d)},get keyboardDisabled(){return Is()},set keyboardDisabled(d){la(d)},get mousewheelDisabled(){return js()},set mousewheelDisabled(d){ca(d)},get rangeDragging(){return Ns()},set rangeDragging(d){Mi(d)},setMin:Di,setMax:Ti,setValue:Li,setStep:Ri,setData:Ys,getTextValue:$r,setAriaLabel:da,getAriaLabel:kl,addPointer:Al,removePointer:Ol,destroy:()=>{u.removeEventListener("mousedown",Zn),u.removeEventListener("mouseup",Si),u.removeEventListener("touchmove",cr),u.removeEventListener("touchstart",cr),document.removeEventListener("wheel",Pi);for(let d of m)d.destroy();F==null||F.destroy()}}},pl=(o,u,v)=>{let m=$e.find(([F,I,pe,ve])=>I.replace("#","")===u.replace(/\d+/g,""));if(m&&o.styles){let[F,I,pe,ve]=m,G=u.replace(/\D/g,"").trim(),Pe=G===""||G==="0"||G==="1"?0:Ue(G,0)-1;o.styles.setStyle(F,v,Pe);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(u,v),u){case f:{o.setMin(v);break}case b:{o.setMax(v);break}case w:{o.setStep(v);break}case a:{o.pointersOverlap=qe(v);break}case l:{o.pointersMinDistance=Ue(v,0);break}case p:{o.rangeDragging=qe(v);break}case h:{o.pointersMaxDistance=Ue(v,1/0);break}case j:{o.disabled=qe(v);break}case B:{o.keyboardDisabled=qe(v);break}case W:{o.mousewheelDisabled=qe(v);break}case g:{o.setData(v);break}case P:{o.type=v;break}case U:{o.rightToLeft=qe(v);break}case R:{o.bottomToTop=qe(v);break}case _:{o.round=Ue(v,Cr);break}case k:{o.styles&&(o.styles.theme=v);break}case Ot:{o.animateOnClick=v;break}}let L=null;if(/^value([0-9]*)$/.test(u)&&(L="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(L="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(L="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(L="pointer-shape"),!L)return;let J=u.replace(/\D/g,"").trim(),de=J===""||J==="0"||J==="1"?0:Ue(J,0)-1;switch(L){case"value":{o.setValue(v,de);break}case"pointer-disabled":{let F=o==null?void 0:o.pointers[de];if(!F)return;F.disabled=qe(v);break}case"aria-label":{o.setAriaLabel(de,v);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(de,v);break}}},fl=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.disabled)!=null?u:!1}set data(o){var u;(u=this.slider)==null||u.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var u;(u=this.slider)==null||u.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var u;(u=this.slider)==null||u.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,u;return(u=(o=this.slider)==null?void 0:o.round)!=null?u:Cr}set type(o){!this.slider||(this.slider.type=o??Ke)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Ke}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?u:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?u:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?u:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,u,v;return(v=(u=(o=this.slider)==null?void 0:o.styles)==null?void 0:u.theme)!=null?v:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,u;return(u=(o=this.slider)==null?void 0:o.rightToLeft)!=null?u:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,u;return(u=(o=this.slider)==null?void 0:o.bottomToTop)!=null?u:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?u:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,u;return(u=(o=this.slider)==null?void 0:o.rangeDragging)!=null?u:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=qe(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var u,v;if(!this.slider)return;let m=(v=(u=this.slider)==null?void 0:u.addPointer(o))!=null?v:0;Yn(this,this.slider,m,`value${m+1}`,`ariaLabel${m+1}`,`pointerShape${m+1}`,`pointer${m+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=o,this.shadowRoot.appendChild(u)}connectedCallback(){var o,u;if(!this.shadowRoot)return;this._externalCSSList=se(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!v)return;let m=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!m)return;let L=cl(this,v);this.slider=ul(this,m,L),hl(this,this.slider),this._observer=new MutationObserver(J=>{J.forEach(de=>{var F;if(!this.slider||de.type!=="attributes")return;let I=de.attributeName;!I||pl(this.slider,I,(F=this.getAttribute(I))!=null?F:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},As=fl;window.tcRangeSlider=As,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",As),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends As{})})();(()=>{var r=(l,h,p,g,f)=>{let b=h-l;return b===0?p:(g-p)*(f-l)/b+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),t=(l,h)=>e(l)?Number(l):h,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,h=null,p=null,g=null,f=null,b=!1,w=s,_=n,P=()=>{var O;let V=(O=l==null?void 0:l.shadowRoot)==null?void 0:O.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),g=document.createElement("div"),g.classList.add("mark-points"),p.append(g),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),V.append(p)},k=()=>{!h||!p||p.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},U=()=>{var O;if(!p||!h)return;let V=h.getMin(),Y=h.getMax(),X=h.getType()==="vertical",oe=h.isRightToLeft()||h.isBottomToTop();for(let re=0;re<w;re++){let ie=document.createElement("div");ie.classList.add("mark",`mark-${re}`);let ce=w===0?0:re*100/(w-1);X?oe?ie.style.top=`${100-ce}%`:ie.style.top=`${ce}%`:oe?ie.style.left=`${100-ce}%`:ie.style.left=`${ce}%`,g==null||g.append(ie)}let q=h.getData();for(let re=0;re<_;re++){let ie=document.createElement("div");ie.classList.add("mark-value",`mark-value-${re}`);let ce=_===0?0:re*100/(_-1),De=r(0,_-1,V,Y,re);ie.textContent=(q?(O=q[Math.round(De)])!=null?O:"":De).toString(),X?oe?ie.style.top=`${100-ce}%`:ie.style.top=`${ce}%`:oe?ie.style.left=`${100-ce}%`:ie.style.left=`${ce}%`,f==null||f.append(ie)}},R=(O,V)=>{ae(),w=O,_=V,w<=0&&(w=s),_<=0&&(_=n),P(),U(),k()},j=O=>{b=O,b?(P(),U(),k()):ae()},B=O=>{!p||p.style.setProperty("--marks-color",O)},W=O=>{!p||p.style.setProperty("--values-color",O)},ae=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(O,V,Y,X)=>{var oe,q;h=X,l=O,b=i(l.getAttribute("marks")),b&&(R(t(l.getAttribute("marks-count"),s),t(l.getAttribute("marks-values-count"),n)),B((oe=l.getAttribute("marks-color"))!=null?oe:"#cbd5e1"),W((q=l.getAttribute("marks-values-color"))!=null?q:"#475569"))},onAttrChange:(O,V)=>{O==="marks"&&j(i(V)),O==="marks-count"&&R(t(V,s),_),O==="marks-values-count"&&R(w,t(V,n)),O==="marks-color"&&B(V),O==="marks-values-color"&&W(V)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return b??!1},set:O=>{j(i(O))}}},{name:"marksCount",attributes:{get(){return w??s},set:O=>{R(t(O,s),_)}}},{name:"marksValuesCount",attributes:{get(){return w??s},set:O=>{R(w,t(O,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:O=>{B(O)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:O=>{W(O)}}}],destroy:ae,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var _p=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,It=(r,e,t,i)=>{for(var s=i>1?void 0:i?kp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_p(e,t,s),s};let yt=class extends gt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=je(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)})}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.setFixedRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?A`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:A`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${We(this.sliderRef)}
                slider-width="100%"
                slider-height="0.9rem"
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

        `}};yt.styles=Oe`

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
                height: .9rem;
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
    
    `;It([_e({context:Go,subscribe:!0}),M()],yt.prototype,"min",2);It([_e({context:Xo,subscribe:!0}),M()],yt.prototype,"max",2);It([_e({context:Dn,subscribe:!0}),M()],yt.prototype,"from",2);It([_e({context:Tn,subscribe:!0}),M()],yt.prototype,"to",2);It([M()],yt.prototype,"hasFixedFrom",2);It([M()],yt.prototype,"hasFixedTo",2);It([_e({context:fs,subscribe:!0}),M()],yt.prototype,"palette",2);It([M()],yt.prototype,"sliderRef",2);It([M()],yt.prototype,"initialised",2);yt=It([ue("registry-range-slider")],yt);var Cp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,_i=(r,e,t,i)=>{for(var s=i>1?void 0:i?$p(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cp(e,t,s),s};let jr=class extends gt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var r,e;return this.from===void 0||this.to===void 0?Z:A`
            <div>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};_i([_e({context:Dn,subscribe:!0})],jr.prototype,"from",2);_i([_e({context:Tn,subscribe:!0})],jr.prototype,"to",2);_i([N({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],jr.prototype,"fixed",2);_i([N({type:String,reflect:!0,attribute:!0})],jr.prototype,"separator",2);jr=_i([ue("registry-range-display")],jr);var Sp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,ys=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sp(e,t,s),s};let Wr=class extends gt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return A`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":Z}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(r=>A`
                            <div class="histogram-bar">
                                <div style="height: ${r.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():A`
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
        `}};Wr.styles=Oe`

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


    `;ys([M()],Wr.prototype,"histogram",2);ys([N({type:Boolean,reflect:!0})],Wr.prototype,"interactive",2);ys([N({type:String,reflect:!0})],Wr.prototype,"height",2);Wr=ys([ue("registry-histogram")],Wr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class es extends Cn{constructor(e){if(super(e),this.it=Z,e.type!==kn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Z||e==null)return this._t=void 0,this.it=e;if(e===rr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}es.directiveName="unsafeHTML",es.resultType=1;const bt=ss(es);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fn extends es{}fn.directiveName="unsafeSVG",fn.resultType=2;const Ap=ss(fn);var Op=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,ws=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ep(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Op(e,t,s),s};let Nr=class extends wi{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",r=>{this.hint=r.description})}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?Z:A`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return A`
                        
                        <button 
                            class=${Ht(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Ap(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Nr.styles=Oe`

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

    `;ws([_e({context:Ko,subscribe:!0}),M()],Nr.prototype,"value",2);ws([_e({context:Qo,subscribe:!0}),M()],Nr.prototype,"tools",2);ws([M()],Nr.prototype,"hint",2);Nr=ws([ue("group-tool-buttons")],Nr);var Dp=Object.defineProperty,ki=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Dp(e,t,s),s};class Ze extends wi{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}ki([_e({context:Ln,subscribe:!0}),M()],Ze.prototype,"parentFileProviderElement");ki([_e({context:tl,subscribe:!0}),M()],Ze.prototype,"loading");ki([_e({context:Jo,subscribe:!0}),M()],Ze.prototype,"file");ki([_e({context:el,subscribe:!0}),M()],Ze.prototype,"failure");ki([_e({context:il,subscribe:!0}),M()],Ze.prototype,"recording");var Tp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Rp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Lp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tp(e,t,s),s};let gn=class extends Ze{constructor(){super(...arguments),this.container=je()}onInstanceCreated(r){if(this.container.value!==void 0)r.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return A`
            <div ${We(this.container)} class=${Ht(t)} part="file-canvas-container">
            
                ${this.loading===!0?A`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:r===!0?A`<div class="error-wrapper">
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
                        </div>`:Z}
            
            </div>
        
        `}};gn.styles=Oe`
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
            width: 2rem;
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
    `;gn=Rp([ue("file-canvas")],gn);var Mp=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,Fp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Up(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mp(e,t,s),s};let mn=class extends Ze{onInstanceCreated(r){}onFailure(r){}render(){return this.file?A`
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
        `:Z}};mn.styles=Oe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;mn=Fp([ue("file-share-button")],mn);var Ip=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,Wp=(r,e,t,i)=>{for(var s=i>1?void 0:i?jp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ip(e,t,s),s};let vn=class extends Ze{onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?A`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${bt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${bt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?bt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):Z}

                        ${bt(this.renderRow("Time",Ed.human(this.file.timestamp)))}

                        ${bt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${bt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${bt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${bt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${bt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${bt(this.renderRow("Type",this.file.service.parser.name))}
                    ${bt(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(r=>A`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:Z}};vn.styles=Oe`

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
            font-size: 1.4rem;
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
            padding-left: 1rem;
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
    
    `;vn=Wp([ue("file-info-button")],vn);var Np=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,Bp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Np(e,t,s),s};let bn=class extends Ze{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?Z:A`

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

                    ${this.file.timeline.isSequence?A`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:Z}
            
            </thermal-dropdown>

        
        `}};bn.styles=Oe`

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
    
    `;bn=Bp([ue("file-download-dropdown")],bn);var zp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,xr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zp(e,t,s),s};let Ct=class extends Ze{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=je(),this.barRef=je(),this.containerRef=je(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<Ct.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}render(){var n,a,l;const r=this.file;if(r===void 0)return Z;if(r.duration===0)return Z;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return A`
            <div class="${Ht(e)}" ${We(this.containerRef)}>


                ${r!==void 0?A`
                        <div class="container">

                            <div class="${Ht(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?A`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:A`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>

                            <div class="${Ht(s)}"  ${We(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${We(this.barRef)}></div>
                                </div>

                                <div>
                                    ${this.markers.map(h=>A`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:Z}

            
            
            </div>

            ${this.currentFrame!==void 0?A`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${vr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${vr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:Z}

          `}};Ct.collapseWidth=500;Ct.styles=Oe`
    
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
            gap: 1rem;
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
    
    `;xr([_e({context:Un,subscribe:!0}),M()],Ct.prototype,"playing",2);xr([_e({context:ms,subscribe:!0}),M()],Ct.prototype,"currentFrame",2);xr([_e({context:Mn,subscribe:!0}),M()],Ct.prototype,"duration",2);xr([_e({context:sl,subscribe:!0}),M()],Ct.prototype,"mayStop",2);xr([_e({context:Fn,subscribe:!0})],Ct.prototype,"markers",2);xr([M()],Ct.prototype,"collapsed",2);Ct=xr([ue("file-timeline")],Ct);var Yp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,jn=(r,e,t,i)=>{for(var s=i>1?void 0:i?qp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yp(e,t,s),s};let li=class extends Ze{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?Z:A`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Pn).map(([r])=>A`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&(console.log(t.parentElement),t.parentElement instanceof Vt&&t.parentElement.setClose())}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};li.styles=Oe`

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
    
    `;jn([N({type:String,reflect:!0})],li.prototype,"enabled",2);jn([_e({context:rl,subscribe:!0}),M()],li.prototype,"playbackSpeed",2);li=jn([ue("file-playback-speed-dropdown")],li);var Gp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Wn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gp(e,t,s),s};let ci=class extends Ze{constructor(){super(...arguments),this.container=je()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return A`
            <div class="container">
            
                <video ${We(this.container)} preload="metadata">

                    ${this.url===void 0?Z:A`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};ci.styles=Oe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Wn([_e({context:ms,subscribe:!0}),M()],ci.prototype,"currentFrame",2);Wn([N({type:String,reflect:!0,attribute:!0})],ci.prototype,"url",2);ci=Wn([ue("file-video")],ci);const Zp=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),vr(t,"mm:ss:SSS")},Kp=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var Qp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qp(e,t,s),s};const Nn={fromAttribute:r=>r===null?null:Kp(r),toAttribute:r=>r===null?null:Zp(r)};let $t=class extends Ze{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),this.log(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return Z}};jt([_e({context:Un,subscribe:!0}),M()],$t.prototype,"playing",2);jt([_e({context:Rn,subscribe:!0}),M()],$t.prototype,"ms",2);jt([N({type:String,reflect:!0,attribute:!0})],$t.prototype,"label",2);jt([N({type:String,reflect:!0,attribute:!0,converter:Nn})],$t.prototype,"start",2);jt([N({type:String,reflect:!0,attribute:!0,converter:Nn})],$t.prototype,"end",2);jt([N({type:String,reflect:!0,attribute:!0,converter:Nn})],$t.prototype,"dur",2);jt([N({type:String,reflect:!0,attribute:!0})],$t.prototype,"active",2);jt([N({type:String,reflect:!0,attribute:!0})],$t.prototype,"pauseOnActivate",2);jt([N({type:String,reflect:!0,attribute:!0})],$t.prototype,"say",2);$t=jt([ue("file-marker")],$t);var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,_r=(r,e,t,i)=>{for(var s=i>1?void 0:i?tf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ef(e,t,s),s};let qt=class extends Ze{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return A`

            <div class="${Ht(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};qt.styles=Oe`
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


    `;_r([_e({context:Mn,subscribe:!0}),M()],qt.prototype,"duration",2);_r([_e({context:ms,subscribe:!0}),M()],qt.prototype,"currentFrame",2);_r([_e({context:Rn,subscribe:!0}),M()],qt.prototype,"ms",2);_r([N({type:Number,reflect:!0,attribute:!0})],qt.prototype,"start",2);_r([N({type:Number,reflect:!0,attribute:!0})],qt.prototype,"end",2);_r([M()],qt.prototype,"active",2);qt=_r([ue("file-marker-timeline")],qt);var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,ll=(r,e,t,i)=>{for(var s=i>1?void 0:i?sf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rf(e,t,s),s};let ts=class extends Ze{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return A`
            <div>


            ${this.markers.map(r=>r.active?A`<div class="item">
                    <h2>${r.label}</h2>
                    ${bt(r.innerHTML)}
                    </div>`:Z)}

            
            
            </div>

          `}};ts.styles=Oe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;ll([_e({context:Fn,subscribe:!0})],ts.prototype,"markers",2);ts=ll([ue("file-marks-content")],ts);var nf=Object.defineProperty,af=Object.getOwnPropertyDescriptor,Hn=(r,e,t,i)=>{for(var s=i>1?void 0:i?af(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nf(e,t,s),s};let rs=class extends Ze{constructor(){super(...arguments),this.graphWidth=0,this.container=je(),this.graphs={values:[[]],colors:[]}}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{console.log(t),this.graphWidth=t[0].contentRect.width}).observe(this.container.value))}onFailure(){}render(){return A`
        
            <div ${We(this.container)}>
                ${this.graphs.colors.length>0?A`<google-chart 
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},width:this.graphWidth}}
                        ></google-chart>`:Z}
            </div>
        
        `}};Hn([M()],rs.prototype,"graphWidth",2);Hn([M()],rs.prototype,"graphs",2);rs=Hn([ue("file-analysis-graph")],rs);var of=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,or=(r,e,t,i)=>{for(var s=i>1?void 0:i?lf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&of(e,t,s),s};let Ft=class extends bi{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID));const t=this.analysis;this.selected=t.selected,this.color=t.initialColor,this.dimension=t.width+"x"+t.height,this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof Or?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onMoveOrResize.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),t.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),t.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return A`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?A`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"}"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

            </td>
        `}render(){return A`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"}"
            @click=${()=>{this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0)}}
        >
            <u aria-hidden="true"></u>
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.key}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg),console.log("WTF!!",this.analysis.graph.state)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min),console.log("WTF!!",this.analysis.graph.state)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max),console.log("WTF!!",this.analysis.graph.state)})}
        <td>${this.dimension}</td>
        <td>
        <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>Remove</thermal-button>
        </td>
        
        `}};Ft.styles=Oe`
    
        :host {
            display: table-row;
            font-size: var( --thermal-fs-sm ) !important;
        }

        button, td {
            font-size: var( --thermal-fs-sm ) !important;
            color: var( --thermal-foreground);
        }

        .may button {
            border: 1px solid var( --thermal-slate-light );
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

    `;or([N()],Ft.prototype,"analysis",2);or([M()],Ft.prototype,"value",2);or([M()],Ft.prototype,"graph",2);or([M()],Ft.prototype,"may",2);or([M()],Ft.prototype,"dimension",2);or([M()],Ft.prototype,"color",2);or([N({type:Boolean,reflect:!0,attribute:!0})],Ft.prototype,"selected",2);Ft=or([ue("file-analysis-table-row")],Ft);var cf=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,Bn=(r,e,t,i)=>{for(var s=i>1?void 0:i?hf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cf(e,t,s),s};let hi=class extends Ze{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1}onFailure(r){console.log(r)}onInstanceCreated(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value}render(){return this.analysis.length===0||this.file===void 0?Z:A`


            <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

            <thead>

                <tr>
                    <th
                        class="all ${this.allSelected?"yes":"no"}"
                        @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                    >
                        <u aria-hidden="true"></u>
                        <span>Analysis</span>
                    </th>
                    <th>Avg</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Size</th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(r=>A`
                                <file-analysis-table-row
                                    .analysis=${r}
                                ></file-analysis-table-row>
                            `)}
            
            </tbody>
        `}};hi.styles=Oe`
    
        :host {
            display: table;
            width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            td, th {
                padding: .5rem;
            }
        }

        th {
            text-align: left;
        }

        th, td, button {
            font-size: var( --thermal-fs-sm ) !important;
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

        



    `;Bn([M()],hi.prototype,"analysis",2);Bn([M()],hi.prototype,"allSelected",2);hi=Bn([ue("file-analysis-table")],hi);var df=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,kr=(r,e,t,i)=>{for(var s=i>1?void 0:i?uf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&df(e,t,s),s};let Gt=class extends Ze{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return A`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?A`<file-share-button ></file-share-button>`:Z}
              ${this.showabout===!0?A`<app-info-button ></app-info-button>`:Z}
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
    `}};Gt.styles=Oe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;kr([N({type:Number})],Gt.prototype,"from",2);kr([N({type:Number})],Gt.prototype,"to",2);kr([N({type:Number})],Gt.prototype,"speed",2);kr([N({type:String,reflect:!0,attribute:!0})],Gt.prototype,"showembed",2);kr([N({type:String,reflect:!0,attribute:!0})],Gt.prototype,"showabout",2);kr([N({type:String,reflect:!0,attribute:!0})],Gt.prototype,"showfullscreen",2);Gt=kr([ue("file-app")],Gt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an=r=>r??Z;var pf=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?ff(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pf(e,t,s),s};let yr=class extends bi{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?Z:A`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${an(this.from)} to=${an(this.to)} speed=${an(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};zr([N({type:String,reflect:!0})],yr.prototype,"palette",2);zr([N({type:Number})],yr.prototype,"from",2);zr([N({type:Number})],yr.prototype,"to",2);zr([N({type:Number,reflect:!0})],yr.prototype,"speed",2);zr([N({type:String,reflect:!0})],yr.prototype,"url",2);yr=zr([ue("thermal-file-app")],yr);var gf=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,zn=(r,e,t,i)=>{for(var s=i>1?void 0:i?mf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gf(e,t,s),s};let di=class extends bi{constructor(){super(...arguments),this.dropinRef=je(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return A`

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

                            ${this.loaded===!0?A`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:Z}

                            <file-dropin ${We(this.dropinRef)}>

                                <file-app showembed="false" showabout="false"></file-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};di.styles=Oe`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;zn([M()],di.prototype,"dropinRef",2);zn([M()],di.prototype,"loaded",2);di=zn([ue("thermal-dropin-app")],di);const on=window.matchMedia("(prefers-color-scheme: dark)"),Vn="thermal-dark-mode",Va=()=>{document.body.classList.add(Vn)},vf=()=>{document.body.classList.remove(Vn)},bf=()=>{on.matches&&Va();const r=e=>{e.matches?Va():vf()};on.addEventListener("change",r),on.addListener(r)},yf=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)},wf=yn.toString().replaceAll(".","-"),xf=r=>`thermal__${r}__${wf}`,Ya=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",xf(r)),t.innerHTML=e,document.head.appendChild(t)},_f=()=>{Ya("rootVariables",`

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


            
        
        `),Ya("darkModeOverrides",`
        
            body.${Vn} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};yf();console.info(`@labir/embed ${yn}
    Author: ${Tl}
    `);bf();_f();document.addEventListener("DOMContentLoaded",()=>{});
