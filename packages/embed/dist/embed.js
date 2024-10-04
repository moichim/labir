var uc=Object.defineProperty;var pc=(t,e,r)=>e in t?uc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(pc(t,typeof e!="symbol"?e+"":e,r),r);const Wn="1.2.40",fc="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs=globalThis,Nn=rs.ShadowRoot&&(rs.ShadyCSS===void 0||rs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bn=Symbol(),Fa=new WeakMap;let $o=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Bn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Nn&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Fa.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Fa.set(r,e))}return e}toString(){return this.cssText}};const mc=t=>new $o(typeof t=="string"?t:t+"",void 0,Bn),ve=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new $o(r,t,Bn)},gc=(t,e)=>{if(Nn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=rs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},ja=Nn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return mc(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vc,defineProperty:yc,getOwnPropertyDescriptor:bc,getOwnPropertyNames:wc,getOwnPropertySymbols:xc,getPrototypeOf:_c}=Object,dr=globalThis,Wa=dr.trustedTypes,Cc=Wa?Wa.emptyScript:"",yn=dr.reactiveElementPolyfillSupport,hi=(t,e)=>t,os={toAttribute(t,e){switch(e){case Boolean:t=t?Cc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Hn=(t,e)=>!vc(t,e),Na={attribute:!0,type:String,converter:os,reflect:!1,hasChanged:Hn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),dr.litPropertyMetadata??(dr.litPropertyMetadata=new WeakMap);let Fr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Na){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&yc(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=bc(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Na}static _$Ei(){if(this.hasOwnProperty(hi("elementProperties")))return;const e=_c(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(hi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hi("properties"))){const r=this.properties,i=[...wc(r),...xc(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(ja(s))}else e!==void 0&&r.push(ja(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:os).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:os;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Hn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Fr.elementStyles=[],Fr.shadowRootOptions={mode:"open"},Fr[hi("elementProperties")]=new Map,Fr[hi("finalized")]=new Map,yn==null||yn({ReactiveElement:Fr}),(dr.reactiveElementVersions??(dr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=globalThis,ls=di.trustedTypes,Ba=ls?ls.createPolicy("lit-html",{createHTML:t=>t}):void 0,So="$lit$",hr=`lit$${Math.random().toFixed(9).slice(2)}$`,Po="?"+hr,kc=`<${Po}>`,Pr=document,fi=()=>Pr.createComment(""),mi=t=>t===null||typeof t!="object"&&typeof t!="function",Ao=Array.isArray,$c=t=>Ao(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",bn=`[ 	
\f\r]`,oi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ha=/-->/g,za=/>/g,_r=RegExp(`>|${bn}(?:([^\\s"'>=/]+)(${bn}*=${bn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Va=/'/g,Ya=/"/g,Oo=/^(?:script|style|textarea|title)$/i,Sc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),_=Sc(1),ur=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Ga=new WeakMap,kr=Pr.createTreeWalker(Pr,129);function Eo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ba!==void 0?Ba.createHTML(e):e}const Pc=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",a=oi;for(let l=0;l<r;l++){const h=t[l];let p,m,f=-1,y=0;for(;y<h.length&&(a.lastIndex=y,m=a.exec(h),m!==null);)y=a.lastIndex,a===oi?m[1]==="!--"?a=Ha:m[1]!==void 0?a=za:m[2]!==void 0?(Oo.test(m[2])&&(s=RegExp("</"+m[2],"g")),a=_r):m[3]!==void 0&&(a=_r):a===_r?m[0]===">"?(a=s??oi,f=-1):m[1]===void 0?f=-2:(f=a.lastIndex-m[2].length,p=m[1],a=m[3]===void 0?_r:m[3]==='"'?Ya:Va):a===Ya||a===Va?a=_r:a===Ha||a===za?a=oi:(a=_r,s=void 0);const w=a===_r&&t[l+1].startsWith("/>")?" ":"";n+=a===oi?h+kc:f>=0?(i.push(p),h.slice(0,f)+So+h.slice(f)+hr+w):h+hr+(f===-2?l:w)}return[Eo(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let On=class Do{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,h=this.parts,[p,m]=Pc(e,r);if(this.el=Do.createElement(p,i),kr.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=kr.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(So)){const y=m[a++],w=s.getAttribute(f).split(hr),k=/([.?@])?(.*)/.exec(y);h.push({type:1,index:n,name:k[2],strings:w,ctor:k[1]==="."?Oc:k[1]==="?"?Ec:k[1]==="@"?Dc:bs}),s.removeAttribute(f)}else f.startsWith(hr)&&(h.push({type:6,index:n}),s.removeAttribute(f));if(Oo.test(s.tagName)){const f=s.textContent.split(hr),y=f.length-1;if(y>0){s.textContent=ls?ls.emptyScript:"";for(let w=0;w<y;w++)s.append(f[w],fi()),kr.nextNode(),h.push({type:2,index:++n});s.append(f[y],fi())}}}else if(s.nodeType===8)if(s.data===Po)h.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(hr,f+1))!==-1;)h.push({type:7,index:n}),f+=hr.length-1}n++}}static createElement(e,r){const i=Pr.createElement("template");return i.innerHTML=e,i}};function Wr(t,e,r=t,i){var a,l;if(e===ur)return e;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=mi(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=Wr(t,s._$AS(t,e.values),s,i)),e}let Ac=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Pr).importNode(r,!0);kr.currentNode=s;let n=kr.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new Ai(n,n.nextSibling,this,e):h.type===1?p=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(p=new Tc(n,this,e)),this._$AV.push(p),h=i[++l]}a!==(h==null?void 0:h.index)&&(n=kr.nextNode(),a++)}return kr.currentNode=Pr,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class Ai{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Wr(this,e,r),mi(e)?e===G||e==null||e===""?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==ur&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$c(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==G&&mi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pr.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=On.createElement(Eo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new Ac(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=Ga.get(e.strings);return r===void 0&&Ga.set(e.strings,r=new On(e)),r}k(e){Ao(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new Ai(this.S(fi()),this.S(fi()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let bs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Wr(this,e,r,0),a=!mi(e)||e!==this._$AH&&e!==ur,a&&(this._$AH=e);else{const l=e;let h,p;for(e=n[0],h=0;h<n.length-1;h++)p=Wr(this,l[i+h],r,h),p===ur&&(p=this._$AH[h]),a||(a=!mi(p)||p!==this._$AH[h]),p===G?e=G:e!==G&&(e+=(p??"")+n[h+1]),this._$AH[h]=p}a&&!s&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Oc=class extends bs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}};class Ec extends bs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class Dc extends bs{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Wr(this,e,r,0)??G)===ur)return;const i=this._$AH,s=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let Tc=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Wr(this,e)}};const wn=di.litHtmlPolyfillSupport;wn==null||wn(On,Ai),(di.litHtmlVersions??(di.litHtmlVersions=[])).push("3.1.4");const Rc=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Ai(e.insertBefore(fi(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tt=class extends Fr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ur}};var ko;tt._$litElement$=!0,tt.finalized=!0,(ko=globalThis.litElementHydrateSupport)==null||ko.call(globalThis,{LitElement:tt});const xn=globalThis.litElementPolyfillSupport;xn==null||xn({LitElement:tt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lc={attribute:!0,type:String,converter:os,reflect:!1,hasChanged:Hn},Mc=(t=Lc,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,h,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const h=this[a];e.call(this,l),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+i)};function A(t){return(e,r)=>typeof r=="object"?Mc(t,e,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(t){return A({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oi(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Uc(e,r,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ic={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Qi(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Ji(t){return t.toString().indexOf("`")===-1}Ji(t=>t``)||Ji(t=>t`\0`)||Ji(t=>t`\n`)||Ji(t=>t`\u0000`);Qi``&&Qi`\0`&&Qi`\n`&&Qi`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Fc="google#safe";function jc(){if(typeof window<"u")return window.trustedTypes}function To(){var t;return(t=jc())!==null&&t!==void 0?t:null}let es;function Wc(){var t,e;if(es===void 0)try{es=(e=(t=To())===null||t===void 0?void 0:t.createPolicy(Fc,{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r}))!==null&&e!==void 0?e:null}catch{es=null}return es}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Ro{constructor(e,r){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function qa(t){var e;const r=t,i=(e=Wc())===null||e===void 0?void 0:e.createScriptURL(r);return i??new Ro(r,Ic)}function Nc(t){var e;if(!((e=To())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof Ro)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let r="";throw new Error(r)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Lo(t,...e){if(e.length===0)return qa(t[0]);t[0].toLowerCase();let r=t[0];for(let i=0;i<e.length;i++)r+=encodeURIComponent(e[i])+t[i+1];return qa(r)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Bc(t){var e;const r=t.document,i=(e=r.querySelector)===null||e===void 0?void 0:e.call(r,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Hc(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,r=Bc(e||window);r&&t.setAttribute("nonce",r)}function Mo(t,e,r){t.src=Nc(e),Hc(t)}/**
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
 */const zc=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Mo(r,Lo`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function Uo(t={}){await zc;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function Xa(t){if(await Uo(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Vc(t){return await Uo(),new google.visualization.ChartWrapper({container:t})}/**
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
 */var rr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(s<3?a(n):s>3?a(e,r,n):a(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Ka=["ready","select"],Yc={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class Rt extends tt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return _`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Vc(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Ka,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Yc[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(s=>!Ka.includes(s)),r);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,r){for(const i of e)google.visualization.events.addListener(r,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const i=await Xa({cols:r});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,r;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?r=fetch(e).then(s=>s.json()):r=Promise.resolve(e),r.then(Xa).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of r){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}Rt.styles=ve`
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
  `;rr([A({type:String,reflect:!0})],Rt.prototype,"type",void 0);rr([A({type:Array})],Rt.prototype,"events",void 0);rr([A({type:Object,hasChanged:()=>!0})],Rt.prototype,"options",void 0);rr([A({type:Array})],Rt.prototype,"cols",void 0);rr([A({type:Array})],Rt.prototype,"rows",void 0);rr([A({type:String})],Rt.prototype,"data",void 0);rr([A({type:Object})],Rt.prototype,"view",void 0);rr([A({type:Array})],Rt.prototype,"selection",void 0);rr([A({type:Object})],Rt.prototype,"_data",void 0);customElements.define("google-chart",Rt);/**
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
 */const Gc=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Mo(r,Lo`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function Io(t={}){await Gc;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function Za(t){if(await Io(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function qc(t){return await Io(),new google.visualization.ChartWrapper({container:t})}function $t(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Ar(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Fo=6048e5,Xc=864e5;let Kc={};function ws(){return Kc}function gi(t,e){var l,h,p,m;const r=ws(),i=(e==null?void 0:e.weekStartsOn)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.weekStartsOn)??0,s=$t(t),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function cs(t){return gi(t,{weekStartsOn:1})}function jo(t){const e=$t(t),r=e.getFullYear(),i=Ar(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=cs(i),n=Ar(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=cs(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function Qa(t){const e=$t(t);return e.setHours(0,0,0,0),e}function Ja(t){const e=$t(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Zc(t,e){const r=Qa(t),i=Qa(e),s=+r-Ja(r),n=+i-Ja(i);return Math.round((s-n)/Xc)}function Qc(t){const e=jo(t),r=Ar(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),cs(r)}function Jc(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Wo(t){if(!Jc(t)&&typeof t!="number")return!1;const e=$t(t);return!isNaN(Number(e))}function eh(t){const e=$t(t),r=Ar(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const th={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},rh=(t,e,r)=>{let i;const s=th[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function _n(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const ih={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},sh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},nh={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ah={date:_n({formats:ih,defaultWidth:"full"}),time:_n({formats:sh,defaultWidth:"full"}),dateTime:_n({formats:nh,defaultWidth:"full"})},oh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lh=(t,e,r,i)=>oh[t];function li(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const ch={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},hh={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dh={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},uh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ph={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},fh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},mh=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},gh={ordinalNumber:mh,era:li({values:ch,defaultWidth:"wide"}),quarter:li({values:hh,defaultWidth:"wide",argumentCallback:t=>t-1}),month:li({values:dh,defaultWidth:"wide"}),day:li({values:uh,defaultWidth:"wide"}),dayPeriod:li({values:ph,defaultWidth:"wide",formattingValues:fh,defaultFormattingWidth:"wide"})};function ci(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(l)?yh(l,f=>f.test(a)):vh(l,f=>f.test(a));let p;p=t.valueCallback?t.valueCallback(h):h,p=r.valueCallback?r.valueCallback(p):p;const m=e.slice(a.length);return{value:p,rest:m}}}function vh(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function yh(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function bh(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const wh=/^(\d+)(th|st|nd|rd)?/i,xh=/\d+/i,_h={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ch={any:[/^b/i,/^(a|c)/i]},kh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},$h={any:[/1/i,/2/i,/3/i,/4/i]},Sh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ph={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ah={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Oh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Eh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Th={ordinalNumber:bh({matchPattern:wh,parsePattern:xh,valueCallback:t=>parseInt(t,10)}),era:ci({matchPatterns:_h,defaultMatchWidth:"wide",parsePatterns:Ch,defaultParseWidth:"any"}),quarter:ci({matchPatterns:kh,defaultMatchWidth:"wide",parsePatterns:$h,defaultParseWidth:"any",valueCallback:t=>t+1}),month:ci({matchPatterns:Sh,defaultMatchWidth:"wide",parsePatterns:Ph,defaultParseWidth:"any"}),day:ci({matchPatterns:Ah,defaultMatchWidth:"wide",parsePatterns:Oh,defaultParseWidth:"any"}),dayPeriod:ci({matchPatterns:Eh,defaultMatchWidth:"any",parsePatterns:Dh,defaultParseWidth:"any"})},Rh={code:"en-US",formatDistance:rh,formatLong:ah,formatRelative:lh,localize:gh,match:Th,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Lh(t){const e=$t(t);return Zc(e,eh(e))+1}function Mh(t){const e=$t(t),r=+cs(e)-+Qc(e);return Math.round(r/Fo)+1}function No(t,e){var m,f,y,w;const r=$t(t),i=r.getFullYear(),s=ws(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((w=(y=s.locale)==null?void 0:y.options)==null?void 0:w.firstWeekContainsDate)??1,a=Ar(t,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=gi(a,e),h=Ar(t,0);h.setFullYear(i,0,n),h.setHours(0,0,0,0);const p=gi(h,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function Uh(t,e){var l,h,p,m;const r=ws(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,s=No(t,e),n=Ar(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),gi(n,e)}function Ih(t,e){const r=$t(t),i=+gi(r,e)-+Uh(r,e);return Math.round(i/Fo)+1}function xe(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const cr={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return xe(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):xe(r+1,2)},d(t,e){return xe(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return xe(t.getHours()%12||12,e.length)},H(t,e){return xe(t.getHours(),e.length)},m(t,e){return xe(t.getMinutes(),e.length)},s(t,e){return xe(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return xe(s,e.length)}},Ur={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},eo={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return cr.y(t,e)},Y:function(t,e,r,i){const s=No(t,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return xe(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):xe(n,e.length)},R:function(t,e){const r=jo(t);return xe(r,e.length)},u:function(t,e){const r=t.getFullYear();return xe(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return xe(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return xe(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return cr.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return xe(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Ih(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):xe(s,e.length)},I:function(t,e,r){const i=Mh(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):xe(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):cr.d(t,e)},D:function(t,e,r){const i=Lh(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):xe(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return xe(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return xe(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return xe(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=Ur.noon:i===0?s=Ur.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=Ur.evening:i>=12?s=Ur.afternoon:i>=4?s=Ur.morning:s=Ur.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return cr.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):cr.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):xe(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):xe(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):cr.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):cr.s(t,e)},S:function(t,e){return cr.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return ro(i);case"XXXX":case"XX":return Cr(i);case"XXXXX":case"XXX":default:return Cr(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return ro(i);case"xxxx":case"xx":return Cr(i);case"xxxxx":case"xxx":default:return Cr(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+to(i,":");case"OOOO":default:return"GMT"+Cr(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+to(i,":");case"zzzz":default:return"GMT"+Cr(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return xe(i,e.length)},T:function(t,e,r){const i=t.getTime();return xe(i,e.length)}};function to(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+xe(n,2)}function ro(t,e){return t%60===0?(t>0?"-":"+")+xe(Math.abs(t)/60,2):Cr(t,e)}function Cr(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=xe(Math.trunc(i/60),2),n=xe(i%60,2);return r+s+e+n}const io=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Bo=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Fh=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return io(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",io(i,e)).replace("{{time}}",Bo(s,e))},jh={p:Bo,P:Fh},Wh=/^D+$/,Nh=/^Y+$/,Bh=["D","DD","YY","YYYY"];function Hh(t){return Wh.test(t)}function zh(t){return Nh.test(t)}function Vh(t,e,r){const i=Yh(t,e,r);if(console.warn(i),Bh.includes(t))throw new RangeError(i)}function Yh(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Gh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,qh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Xh=/^'([^]*?)'?$/,Kh=/''/g,Zh=/[a-zA-Z]/;function pr(t,e,r){var m,f,y,w;const i=ws(),s=i.locale??Rh,n=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??((w=(y=i.locale)==null?void 0:y.options)==null?void 0:w.weekStartsOn)??0,l=$t(t);if(!Wo(l))throw new RangeError("Invalid time value");let h=e.match(qh).map(k=>{const E=k[0];if(E==="p"||E==="P"){const $=jh[E];return $(k,s.formatLong)}return k}).join("").match(Gh).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const E=k[0];if(E==="'")return{isToken:!1,value:Qh(k)};if(eo[E])return{isToken:!0,value:k};if(E.match(Zh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:k}});s.localize.preprocessor&&(h=s.localize.preprocessor(l,h));const p={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return h.map(k=>{if(!k.isToken)return k.value;const E=k.value;(zh(E)||Hh(E))&&Vh(E,e,String(t));const $=eo[E[0]];return $(l,E,s.localize,p)}).join("")}function Qh(t){const e=t.match(Xh);return e?e[1].replace(Kh,"'"):t}function Cn(t,e){const r=$t(t);if(!Wo(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const h=xe(r.getDate(),2),p=xe(r.getMonth()+1,2);n=`${xe(r.getFullYear(),4)}${a}${p}${a}${h}`}if(s!=="date"){const h=xe(r.getHours(),2),p=xe(r.getMinutes(),2),m=xe(r.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${l}${p}${l}${m}`}return n}var Jh={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},ed=`\r
`,td="\uFEFF",xs=t=>Object.assign({},Jh,t);class rd extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class id extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class sd extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class nd extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Jr=t=>t,vt=t=>t,ui=Jr,_s=Jr,Nr=Jr,so=Jr,no=Jr,ad=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},od=t=>so(typeof t=="object"?t.key:t),ld=t=>no(typeof t=="object"?t.displayLabel:t),cd=(t,...e)=>e.reduce((r,i)=>i(r),t),hd=t=>e=>t.useBom?_s(vt(e)+td):e,dd=t=>e=>t.showTitle?zn(_s(vt(e)+t.title))(Nr("")):e,zn=t=>e=>_s(vt(t)+vt(e)+ed),Ho=t=>(e,r)=>ud(t)(Nr(vt(e)+vt(r))),ud=t=>e=>Jr(vt(e)+t.fieldSeparator),pd=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new id("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Nr("");for(let s=0;s<e.length;s++){const n=ld(e[s]);i=Ho(t)(i,zo(t,vt(n)))}return i=Nr(vt(i).slice(0,-1)),zn(r)(i)},fd=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=Nr("");for(let l=0;l<e.length;l++){const h=od(e[l]),p=r[n][vt(h)];a=Ho(t)(a,zo(t,p))}a=Nr(vt(a).slice(0,-1)),s=zn(s)(a)}return s},md=t=>+t===t&&(!isFinite(t)||!!(t%1)),gd=(t,e)=>{if(md(e)){if(t.decimalSeparator==="locale")return ui(e.toLocaleString());if(t.decimalSeparator)return ui(e.toString().replace(".",t.decimalSeparator))}return ui(e.toString())},is=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+ad(e,t.quoteCharacter)+t.quoteCharacter),ui(r)},vd=(t,e)=>{const r=e?"true":"false";return ui(t.boolDisplay[r])},yd=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?is(t,t.replaceUndefinedWith+""):e===null?is(t,"null"):is(t,""),zo=(t,e)=>{if(typeof e=="number")return gd(t,e);if(typeof e=="string")return is(t,e);if(typeof e=="boolean"&&t.boolDisplay)return vd(t,e);if(e===null||typeof e>"u")return yd(t,e);throw new nd(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},bd=t=>e=>{const r=xs(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=cd(_s(""),hd(r),dd(r),pd(r,i),fd(r,i,e));if(vt(s).length<1)throw new rd("Output is empty. Is your data formatted correctly?");return s},wd=t=>e=>{const r=xs(t),i=vt(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},xd=t=>e=>{if(!window)throw new sd("Downloading only supported in a browser environment.");const r=wd(t)(e),i=xs(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},_d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cd(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var En={exports:{}};const kd={},$d=Object.freeze(Object.defineProperty({__proto__:null,default:kd},Symbol.toStringTag,{value:"Module"})),Ir=Cd($d);/**
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
 */(function(t,e){(function(r,i){i(e)})(_d,function(r){var i={},s={exports:{}};(function(S){var T=function(Q){return typeof Q<"u"&&Q.versions!=null&&Q.versions.node!=null&&Q+""=="[object process]"};S.exports.isNode=T,S.exports.platform=typeof process<"u"&&T(process)?"node":"browser";var R=S.exports.platform==="node"&&Ir;S.exports.isMainThread=S.exports.platform==="node"?(!R||R.isMainThread)&&!process.connected:typeof Window<"u",S.exports.cpus=S.exports.platform==="browser"?self.navigator.hardwareConcurrency:Ir.cpus().length})(s);var n=s.exports,a={},l;function h(){if(l)return a;l=1;function S(Q,$e){var ae=this;if(!(this instanceof S))throw new SyntaxError("Constructor must be called with the new operator");if(typeof Q!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Te=[],_e=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var B=function(ce,ye){Te.push(ce),_e.push(ye)};this.then=function(P,ce){return new S(function(ye,Ve){var Je=P?T(P,ye,Ve):ye,It=ce?T(ce,ye,Ve):Ve;B(Je,It)},ae)};var Ce=function(ce){return ae.resolved=!0,ae.rejected=!1,ae.pending=!1,Te.forEach(function(ye){ye(ce)}),B=function(Ve,Je){Ve(ce)},Ce=x=function(){},ae},x=function(ce){return ae.resolved=!1,ae.rejected=!0,ae.pending=!1,_e.forEach(function(ye){ye(ce)}),B=function(Ve,Je){Je(ce)},Ce=x=function(){},ae};this.cancel=function(){return $e?$e.cancel():x(new R),ae},this.timeout=function(P){if($e)$e.timeout(P);else{var ce=setTimeout(function(){x(new L("Promise timed out after "+P+" ms"))},P);ae.always(function(){clearTimeout(ce)})}return ae},Q(function(P){Ce(P)},function(P){x(P)})}function T(Q,$e,ae){return function(Te){try{var _e=Q(Te);_e&&typeof _e.then=="function"&&typeof _e.catch=="function"?_e.then($e,ae):$e(_e)}catch(B){ae(B)}}}S.prototype.catch=function(Q){return this.then(null,Q)},S.prototype.always=function(Q){return this.then(Q,Q)},S.all=function(Q){return new S(function($e,ae){var Te=Q.length,_e=[];Te?Q.forEach(function(B,Ce){B.then(function(x){_e[Ce]=x,Te--,Te==0&&$e(_e)},function(x){Te=0,ae(x)})}):$e(_e)})},S.defer=function(){var Q={};return Q.promise=new S(function($e,ae){Q.resolve=$e,Q.reject=ae}),Q};function R(Q){this.message=Q||"promise cancelled",this.stack=new Error().stack}R.prototype=new Error,R.prototype.constructor=Error,R.prototype.name="CancellationError",S.CancellationError=R;function L(Q){this.message=Q||"timeout exceeded",this.stack=new Error().stack}return L.prototype=new Error,L.prototype.constructor=Error,L.prototype.name="TimeoutError",S.TimeoutError=L,a.Promise=S,a}function p(S,T){(T==null||T>S.length)&&(T=S.length);for(var R=0,L=Array(T);R<T;R++)L[R]=S[R];return L}function m(S,T){var R=typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(!R){if(Array.isArray(S)||(R=I(S))||T){R&&(S=R);var L=0,Q=function(){};return{s:Q,n:function(){return L>=S.length?{done:!0}:{done:!1,value:S[L++]}},e:function(_e){throw _e},f:Q}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $e,ae=!0,Te=!1;return{s:function(){R=R.call(S)},n:function(){var _e=R.next();return ae=_e.done,_e},e:function(_e){Te=!0,$e=_e},f:function(){try{ae||R.return==null||R.return()}finally{if(Te)throw $e}}}}function f(S,T,R){return(T=E(T))in S?Object.defineProperty(S,T,{value:R,enumerable:!0,configurable:!0,writable:!0}):S[T]=R,S}function y(S,T){var R=Object.keys(S);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(S);T&&(L=L.filter(function(Q){return Object.getOwnPropertyDescriptor(S,Q).enumerable})),R.push.apply(R,L)}return R}function w(S){for(var T=1;T<arguments.length;T++){var R=arguments[T]!=null?arguments[T]:{};T%2?y(Object(R),!0).forEach(function(L){f(S,L,R[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(R)):y(Object(R)).forEach(function(L){Object.defineProperty(S,L,Object.getOwnPropertyDescriptor(R,L))})}return S}function k(S,T){if(typeof S!="object"||!S)return S;var R=S[Symbol.toPrimitive];if(R!==void 0){var L=R.call(S,T||"default");if(typeof L!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return(T==="string"?String:Number)(S)}function E(S){var T=k(S,"string");return typeof T=="symbol"?T:T+""}function $(S){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},$(S)}function I(S,T){if(S){if(typeof S=="string")return p(S,T);var R={}.toString.call(S).slice(8,-1);return R==="Object"&&S.constructor&&(R=S.constructor.name),R==="Map"||R==="Set"?Array.from(S):R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)?p(S,T):void 0}}var U={exports:{}},W={},H;function N(){return H||(H=1,W.validateOptions=function(T,R,L){if(T){var Q=T?Object.keys(T):[],$e=Q.find(function(Te){return!R.includes(Te)});if($e)throw new Error('Object "'+L+'" contains an unknown option "'+$e+'"');var ae=R.find(function(Te){return Object.prototype[Te]&&!Q.includes(Te)});if(ae)throw new Error('Object "'+L+'" contains an inherited option "'+ae+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return T}},W.workerOptsNames=["credentials","name","type"],W.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],W.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),W}var oe,D;function V(){return D||(D=1,oe=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),oe}var Y;function K(){if(Y)return U.exports;Y=1;var S=h(),T=S.Promise,R=n,L=N(),Q=L.validateOptions,$e=L.forkOptsNames,ae=L.workerThreadOptsNames,Te=L.workerOptsNames,_e="__workerpool-terminate__";function B(){var Z=x();if(!Z)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return Z}function Ce(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":$(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function x(){try{return Ir}catch(Z){if($(Z)==="object"&&Z!==null&&Z.code==="MODULE_NOT_FOUND")return null;throw Z}}function P(){if(R.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var Z=new Blob([V()],{type:"text/javascript"});return window.URL.createObjectURL(Z)}else return __dirname+"/worker.js"}function ce(Z,de){if(de.workerType==="web")return Ce(),ye(Z,de.workerOpts,Worker);if(de.workerType==="thread")return O=B(),Ve(Z,O,de);if(de.workerType==="process"||!de.workerType)return Je(Z,It(de),Ir);if(R.platform==="browser")return Ce(),ye(Z,de.workerOpts,Worker);var O=x();return O?Ve(Z,O,de):Je(Z,It(de),Ir)}function ye(Z,de,O){Q(de,Te,"workerOpts");var se=new O(Z,de);return se.isBrowserWorker=!0,se.on=function(Se,ke){this.addEventListener(Se,function(Fe){ke(Fe.data)})},se.send=function(Se,ke){this.postMessage(Se,ke)},se}function Ve(Z,de,O){var se,Se;Q(O==null?void 0:O.workerThreadOpts,ae,"workerThreadOpts");var ke=new de.Worker(Z,w({stdout:(se=O==null?void 0:O.emitStdStreams)!==null&&se!==void 0?se:!1,stderr:(Se=O==null?void 0:O.emitStdStreams)!==null&&Se!==void 0?Se:!1},O==null?void 0:O.workerThreadOpts));return ke.isWorkerThread=!0,ke.send=function(Fe,be){this.postMessage(Fe,be)},ke.kill=function(){return this.terminate(),!0},ke.disconnect=function(){this.terminate()},O!=null&&O.emitStdStreams&&(ke.stdout.on("data",function(Fe){return ke.emit("stdout",Fe)}),ke.stderr.on("data",function(Fe){return ke.emit("stderr",Fe)})),ke}function Je(Z,de,O){Q(de.forkOpts,$e,"forkOpts");var se=O.fork(Z,de.forkArgs,de.forkOpts),Se=se.send;return se.send=function(ke){return Se.call(se,ke)},de.emitStdStreams&&(se.stdout.on("data",function(ke){return se.emit("stdout",ke)}),se.stderr.on("data",function(ke){return se.emit("stderr",ke)})),se.isChildProcess=!0,se}function It(Z){Z=Z||{};var de=process.execArgv.join(" "),O=de.indexOf("--inspect")!==-1,se=de.indexOf("--debug-brk")!==-1,Se=[];return O&&(Se.push("--inspect="+Z.debugPort),se&&Se.push("--debug-brk")),process.execArgv.forEach(function(ke){ke.indexOf("--max-old-space-size")>-1&&Se.push(ke)}),Object.assign({},Z,{forkArgs:Z.forkArgs,forkOpts:Object.assign({},Z.forkOpts,{execArgv:(Z.forkOpts&&Z.forkOpts.execArgv||[]).concat(Se),stdio:Z.emitStdStreams?"pipe":void 0})})}function mt(Z){for(var de=new Error(""),O=Object.keys(Z),se=0;se<O.length;se++)de[O[se]]=Z[O[se]];return de}function xt(Z,de){if(Object.keys(Z.processing).length===1){var O=Object.values(Z.processing)[0];O.options&&typeof O.options.on=="function"&&O.options.on(de)}}function or(Z,de){var O=this,se=de||{};this.script=Z||P(),this.worker=ce(this.script,se),this.debugPort=se.debugPort,this.forkOpts=se.forkOpts,this.forkArgs=se.forkArgs,this.workerOpts=se.workerOpts,this.workerThreadOpts=se.workerThreadOpts,this.workerTerminateTimeout=se.workerTerminateTimeout,Z||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(be){xt(O,{stdout:be.toString()})}),this.worker.on("stderr",function(be){xt(O,{stderr:be.toString()})}),this.worker.on("message",function(be){if(!O.terminated)if(typeof be=="string"&&be==="ready")O.worker.ready=!0,ke();else{var ot=be.id,Ye=O.processing[ot];Ye!==void 0&&(be.isEvent?Ye.options&&typeof Ye.options.on=="function"&&Ye.options.on(be.payload):(delete O.processing[ot],O.terminating===!0&&O.terminate(),be.error?Ye.resolver.reject(mt(be.error)):Ye.resolver.resolve(be.result)))}});function Se(be){O.terminated=!0;for(var ot in O.processing)O.processing[ot]!==void 0&&O.processing[ot].resolver.reject(be);O.processing=Object.create(null)}function ke(){var be=m(O.requestQueue.splice(0)),ot;try{for(be.s();!(ot=be.n()).done;){var Ye=ot.value;O.worker.send(Ye.message,Ye.transfer)}}catch(Wi){be.e(Wi)}finally{be.f()}}var Fe=this.worker;this.worker.on("error",Se),this.worker.on("exit",function(be,ot){var Ye=`Workerpool Worker terminated Unexpectedly
`;Ye+="    exitCode: `"+be+"`\n",Ye+="    signalCode: `"+ot+"`\n",Ye+="    workerpool.script: `"+O.script+"`\n",Ye+="    spawnArgs: `"+Fe.spawnargs+"`\n",Ye+="    spawnfile: `"+Fe.spawnfile+"`\n",Ye+="    stdout: `"+Fe.stdout+"`\n",Ye+="    stderr: `"+Fe.stderr+"`\n",Se(new Error(Ye))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return or.prototype.methods=function(){return this.exec("methods")},or.prototype.exec=function(Z,de,O,se){O||(O=T.defer());var Se=++this.lastId;this.processing[Se]={id:Se,resolver:O,options:se};var ke={message:{id:Se,method:Z,params:de},transfer:se&&se.transfer};this.terminated?O.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ke.message,ke.transfer):this.requestQueue.push(ke);var Fe=this;return O.promise.catch(function(be){if(be instanceof T.CancellationError||be instanceof T.TimeoutError)return delete Fe.processing[Se],Fe.terminateAndNotify(!0).then(function(){throw be},function(ot){throw ot});throw be})},or.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},or.prototype.terminate=function(Z,de){var O=this;if(Z){for(var se in this.processing)this.processing[se]!==void 0&&this.processing[se].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof de=="function"&&(this.terminationHandler=de),this.busy())this.terminating=!0;else{var Se=function(be){if(O.terminated=!0,O.cleaning=!1,O.worker!=null&&O.worker.removeAllListeners&&O.worker.removeAllListeners("message"),O.worker=null,O.terminating=!1,O.terminationHandler)O.terminationHandler(be,O);else if(be)throw be};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Se(new Error("worker already killed!"));return}var ke=setTimeout(function(){O.worker&&O.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ke),O.worker&&(O.worker.killed=!0),Se()}),this.worker.ready?this.worker.send(_e):this.requestQueue.push({message:_e}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Se()}},or.prototype.terminateAndNotify=function(Z,de){var O=T.defer();return de&&O.promise.timeout(de),this.terminate(Z,function(se,Se){se?O.reject(se):O.resolve(Se)}),O.promise},U.exports=or,U.exports._tryRequireWorkerThreads=x,U.exports._setupProcessWorker=Je,U.exports._setupBrowserWorker=ye,U.exports._setupWorkerThreadWorker=Ve,U.exports.ensureWorkerThreads=B,U.exports}var le,q;function re(){if(q)return le;q=1;var S=65535;le=T;function T(){this.ports=Object.create(null),this.length=0}return T.prototype.nextAvailableStartingAt=function(R){for(;this.ports[R]===!0;)R++;if(R>=S)throw new Error("WorkerPool debug port limit reached: "+R+">= "+S);return this.ports[R]=!0,this.length++,R},T.prototype.releasePort=function(R){delete this.ports[R],this.length--},le}var ie,he;function De(){if(he)return ie;he=1;var S=h(),T=S.Promise,R=K(),L=n,Q=re(),$e=new Q;function ae(x,P){typeof x=="string"?this.script=x||null:(this.script=null,P=x),this.workers=[],this.tasks=[],P=P||{},this.forkArgs=Object.freeze(P.forkArgs||[]),this.forkOpts=Object.freeze(P.forkOpts||{}),this.workerOpts=Object.freeze(P.workerOpts||{}),this.workerThreadOpts=Object.freeze(P.workerThreadOpts||{}),this.debugPortStart=P.debugPortStart||43210,this.nodeWorker=P.nodeWorker,this.workerType=P.workerType||P.nodeWorker||"auto",this.maxQueueSize=P.maxQueueSize||1/0,this.workerTerminateTimeout=P.workerTerminateTimeout||1e3,this.onCreateWorker=P.onCreateWorker||function(){return null},this.onTerminateWorker=P.onTerminateWorker||function(){return null},this.emitStdStreams=P.emitStdStreams||!1,P&&"maxWorkers"in P?(Te(P.maxWorkers),this.maxWorkers=P.maxWorkers):this.maxWorkers=Math.max((L.cpus||4)-1,1),P&&"minWorkers"in P&&(P.minWorkers==="max"?this.minWorkers=this.maxWorkers:(_e(P.minWorkers),this.minWorkers=P.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&R.ensureWorkerThreads()}ae.prototype.exec=function(x,P,ce){if(P&&!Array.isArray(P))throw new TypeError('Array expected as argument "params"');if(typeof x=="string"){var ye=T.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ve=this.tasks,Je={method:x,params:P,resolver:ye,timeout:null,options:ce};Ve.push(Je);var It=ye.promise.timeout;return ye.promise.timeout=function(xt){return Ve.indexOf(Je)!==-1?(Je.timeout=xt,ye.promise):It.call(ye.promise,xt)},this._next(),ye.promise}else{if(typeof x=="function")return this.exec("run",[String(x),P],ce);throw new TypeError('Function or string expected as argument "method"')}},ae.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var x=this;return this.exec("methods").then(function(P){var ce={};return P.forEach(function(ye){ce[ye]=function(){return x.exec(ye,Array.prototype.slice.call(arguments))}}),ce})},ae.prototype._next=function(){if(this.tasks.length>0){var x=this._getWorker();if(x){var P=this,ce=this.tasks.shift();if(ce.resolver.promise.pending){var ye=x.exec(ce.method,ce.params,ce.resolver,ce.options).then(P._boundNext).catch(function(){if(x.terminated)return P._removeWorker(x)}).then(function(){P._next()});typeof ce.timeout=="number"&&ye.timeout(ce.timeout)}else P._next()}}},ae.prototype._getWorker=function(){for(var x=this.workers,P=0;P<x.length;P++){var ce=x[P];if(ce.busy()===!1)return ce}return x.length<this.maxWorkers?(ce=this._createWorkerHandler(),x.push(ce),ce):null},ae.prototype._removeWorker=function(x){var P=this;return $e.releasePort(x.debugPort),this._removeWorkerFromList(x),this._ensureMinWorkers(),new T(function(ce,ye){x.terminate(!1,function(Ve){P.onTerminateWorker({forkArgs:x.forkArgs,forkOpts:x.forkOpts,workerThreadOpts:x.workerThreadOpts,script:x.script}),Ve?ye(Ve):ce(x)})})},ae.prototype._removeWorkerFromList=function(x){var P=this.workers.indexOf(x);P!==-1&&this.workers.splice(P,1)},ae.prototype.terminate=function(x,P){var ce=this;this.tasks.forEach(function(mt){mt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ye=function(xt){$e.releasePort(xt.debugPort),this._removeWorkerFromList(xt)},Ve=ye.bind(this),Je=[],It=this.workers.slice();return It.forEach(function(mt){var xt=mt.terminateAndNotify(x,P).then(Ve).always(function(){ce.onTerminateWorker({forkArgs:mt.forkArgs,forkOpts:mt.forkOpts,workerThreadOpts:mt.workerThreadOpts,script:mt.script})});Je.push(xt)}),T.all(Je)},ae.prototype.stats=function(){var x=this.workers.length,P=this.workers.filter(function(ce){return ce.busy()}).length;return{totalWorkers:x,busyWorkers:P,idleWorkers:x-P,pendingTasks:this.tasks.length,activeTasks:P}},ae.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var x=this.workers.length;x<this.minWorkers;x++)this.workers.push(this._createWorkerHandler())},ae.prototype._createWorkerHandler=function(){var x=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new R(x.script||this.script,{forkArgs:x.forkArgs||this.forkArgs,forkOpts:x.forkOpts||this.forkOpts,workerOpts:x.workerOpts||this.workerOpts,workerThreadOpts:x.workerThreadOpts||this.workerThreadOpts,debugPort:$e.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Te(x){if(!B(x)||!Ce(x)||x<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function _e(x){if(!B(x)||!Ce(x)||x<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function B(x){return typeof x=="number"}function Ce(x){return Math.round(x)==x}return ie=ae,ie}var We={},Le,pt;function ft(){if(pt)return Le;pt=1;function S(T,R){this.message=T,this.transfer=R}return Le=S,Le}var Gt;function Lt(){return Gt||(Gt=1,function(S){var T=ft(),R="__workerpool-terminate__",L={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")L.on=function(B,Ce){addEventListener(B,function(x){Ce(x.data)})},L.send=function(B,Ce){Ce?postMessage(B,Ce):postMessage(B)};else if(typeof process<"u"){var Q;try{Q=Ir}catch(B){if(!($(B)==="object"&&B!==null&&B.code==="MODULE_NOT_FOUND"))throw B}if(Q&&Q.parentPort!==null){var $e=Q.parentPort;L.send=$e.postMessage.bind($e),L.on=$e.on.bind($e),L.exit=process.exit.bind(process)}else L.on=process.on.bind(process),L.send=function(B){process.send(B)},L.on("disconnect",function(){process.exit(1)}),L.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ae(B){return Object.getOwnPropertyNames(B).reduce(function(Ce,x){return Object.defineProperty(Ce,x,{value:B[x],enumerable:!0})},{})}function Te(B){return B&&typeof B.then=="function"&&typeof B.catch=="function"}L.methods={},L.methods.run=function(Ce,x){var P=new Function("return ("+Ce+").apply(null, arguments);");return P.apply(P,x)},L.methods.methods=function(){return Object.keys(L.methods)},L.terminationHandler=void 0,L.cleanupAndExit=function(B){var Ce=function(){L.exit(B)};if(!L.terminationHandler)return Ce();var x=L.terminationHandler(B);Te(x)?x.then(Ce,Ce):Ce()};var _e=null;L.on("message",function(B){if(B===R)return L.cleanupAndExit(0);try{var Ce=L.methods[B.method];if(Ce){_e=B.id;var x=Ce.apply(Ce,B.params);Te(x)?x.then(function(P){P instanceof T?L.send({id:B.id,result:P.message,error:null},P.transfer):L.send({id:B.id,result:P,error:null}),_e=null}).catch(function(P){L.send({id:B.id,result:null,error:ae(P)}),_e=null}):(x instanceof T?L.send({id:B.id,result:x.message,error:null},x.transfer):L.send({id:B.id,result:x,error:null}),_e=null)}else throw new Error('Unknown method "'+B.method+'"')}catch(P){L.send({id:B.id,result:null,error:ae(P)})}}),L.register=function(B,Ce){if(B)for(var x in B)B.hasOwnProperty(x)&&(L.methods[x]=B[x]);Ce&&(L.terminationHandler=Ce.onTerminate),L.send("ready")},L.emit=function(B){if(_e){if(B instanceof T){L.send({id:_e,isEvent:!0,payload:B.message},B.transfer);return}L.send({id:_e,isEvent:!0,payload:B})}},S.add=L.register,S.emit=L.emit}(We)),We}var Mt=n.platform,Ut=n.isMainThread,Pt=n.cpus;function Ue(S,T){var R=De();return new R(S,T)}var Qe=i.pool=Ue;function br(S,T){var R=Lt();R.add(S,T)}var at=i.worker=br;function Ie(S){var T=Lt();T.emit(S)}var ji=i.workerEmit=Ie,Ns=h(),Ge=Ns.Promise,Bs=i.Promise=Ge,Hs=i.Transfer=ft(),zs=i.platform=Mt,Vs=i.isMainThread=Ut,Ys=i.cpus=Pt;r.Promise=Bs,r.Transfer=Hs,r.cpus=Ys,r.default=i,r.isMainThread=Vs,r.platform=zs,r.pool=Qe,r.worker=at,r.workerEmit=ji,Object.defineProperty(r,"__esModule",{value:!0})})})(En,En.exports);var Sd=En.exports,nt=class{constructor(t,e){c(this,"_value");c(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Vo=class extends nt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Pd=class extends nt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Ad=class extends nt{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const i={...e};return e.from<r.min&&(i.from=r.min),e.to>r.max&&(i.to=r.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=r),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},Od=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Ed=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Dd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Td=Od(),Sr={iron:{pixels:Dd,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Ed,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Td,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Rd=class extends nt{get availablePalettes(){return Sr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},An,Ld=(An=class{},c(An,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),An),ze,Md=(ze=class extends Ld{static humanRangeDates(e,r){return e=ze.inputToDate(e),r=ze.inputToDate(r),e.getUTCDate()===r.getUTCDate()?ze.humanDate(e):[ze.humanDate(e),ze.humanDate(r)].join(" - ")}static human(e){return`${ze.humanDate(e)} ${ze.humanTime(e,!0)} `}},c(ze,"isoDate",e=>(e=ze.inputToDate(e),Cn(e,{representation:"date"}))),c(ze,"isoTime",e=>(e=ze.inputToDate(e),Cn(e,{representation:"time"}))),c(ze,"isoComplete",e=>(e=ze.inputToDate(e),Cn(e))),c(ze,"humanTime",(e,r=!1)=>(e=ze.inputToDate(e),pr(e,r?"HH:mm:ss":"HH:mm"))),c(ze,"humanDate",(e,r=!1)=>(e=ze.inputToDate(e),pr(e,r?"d. M.":"d. M. yyyy"))),ze),Cs=class{},Ud=class extends Cs{constructor(e,r,i,s,n,a,l,h,p,m,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=a,this.duration=l,this.min=h,this.max=p,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}getColorAtPoint(e,r){var a,l;const i=this.getTemperatureAtPoint(e,r),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(s!==void 0&&n!==void 0){const p=(i-s)/(n-s),m=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[m]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},ks=class{constructor(t){c(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},jt=class Dn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Dn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Dn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Id=class extends ks{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=jt.createCanvasContainer(),this.canvas=jt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,a,l,h)=>{const m=new OffscreenCanvas(n,a).getContext("2d"),f=s-i;for(let k=0;k<=n;k++)for(let E=0;E<=a;E++){const $=k+E*n;let I=l[$];I<i&&(I=i),I>s&&(I=s);const W=(I-i)/f,H=Math.round(255*W),N=h[H];m.fillStyle=N,m.fillRect(k,E,1,1)}const y=m.getImageData(0,0,n,a);return await createImageBitmap(y)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},Fd=class extends ks{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=jt.createCursorLayerRoot(),this.center=jt.createCursorLayerCenter(),this.axisX=jt.createCursorLayerX(),this.axisY=jt.createCursorLayerY(),this.label=jt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(r*i),a=100/this.instance.width/2,l=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${l}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},jd=class extends ks{constructor(e){super(e);c(this,"container");this.container=jt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Wd=class extends ks{constructor(e,r){super(e);c(this,"container");c(this,"image");this._url=r,this.container=jt.createVisibleLayer(),this._url&&(this.image=jt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},pe=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},Nd=class{constructor(t,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,l)=>{const h=s[l];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Vn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Bd=class extends nt{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new pe);c(this,"callbacksPlay",new pe);c(this,"callbacksPause",new pe);c(this,"callbacksStop",new pe);c(this,"callbacksEnd",new pe);c(this,"callbacksChangeFrame",new pe);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Nd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Vn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),pr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(h=>h.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(h=>h.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Hd=class extends nt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},zd=class extends nt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new pe)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Vd=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},Yo=class{constructor(t,e,r){c(this,"_selected",!1);c(this,"onSelected",new pe);c(this,"onDeselected",new pe);c(this,"onValues",new pe);c(this,"onMoveOrResize",new pe);c(this,"layerRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new pe);c(this,"_initialColor");c(this,"onSetInitialColor",new pe);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"_graphMinActive",!1);c(this,"_graphMaxActive",!1);c(this,"_graphAvgActive",!1);c(this,"onGraphActivation",new pe);c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new pe);this.key=t,this.file=e,this._initialColor=r,this.nameInitial=t,this._name=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}get initialColor(){return this._initialColor}setInitialColor(t){this._initialColor=t,this.onSetInitialColor.call(t),this.selected===!0&&this.setColor(t)}get graphMinActive(){return this._graphMinActive}get graphMaxActive(){return this._graphMaxActive}get graphAvgActive(){return this._graphAvgActive}emitGraphActivation(){this.onGraphActivation.call(this._graphMinActive,this._graphMaxActive,this._graphAvgActive)}get name(){return this._name}setName(t){this._name=t,this.onSetName.call(t)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},Go=class{constructor(t,e,r,i,s){c(this,"pxX");c(this,"_x");c(this,"onX",new pe);c(this,"pxY");c(this,"_y");c(this,"onY",new pe);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new pe);c(this,"onMouseLeave",new pe);c(this,"onActivate",new pe);c(this,"onDeactivate",new pe);this.key=t,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=r,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,a=this.y+r;return e>=i&&e<=s&&t>=n&&t<=a}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},dt,Yd=(dt=class extends Go{constructor(r,i,s,n,a){super(r,i,s,n,a);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(r=1){return Math.round(dt.size*r).toString()+"px"}getPercentXTranslationFromValue(){return this.pxX/2}getPercentYTranslationFromValue(){return this.pxY/2}mayMoveToX(r){return r<=this.file.width&&r>=0}mayMoveToY(r){return r<=this.file.height&&r>=0}createInnerElement(){const r=document.createElement("div");return r.classList.add("innerElement"),r.style.position="absolute",r.style.top=dt.sizePx(-.5),r.style.left=dt.sizePx(-.5),r.style.width=dt.sizePx(),r.style.height=dt.sizePx(),r}buildAxisX(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="100%",r.style.height="1px",r.style.left="0px",r.style.top=dt.sizePx(.5),r}buildAxisY(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="1px",r.style.height="100%",r.style.left=dt.sizePx(.5),r.style.top="0px",r}buildCenter(){const r=document.createElement("div");r.style.position="absolute",r.style.top=`calc( ${dt.sizePx(.5)} - 3px )`,r.style.left=`calc( ${dt.sizePx(.5)} - 3px )`,r.style.width="5px",r.style.height="5px",r.style.borderStyle="solid",r.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(r.style.backgroundColor=i),r}onSetColor(r){this.axisX&&(this.axisX.style.backgroundColor=r),this.axisY&&(this.axisY.style.backgroundColor=r),this.center&&(this.center.style.borderColor=r)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(r=void 0){var i,s,n;if(r===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${r}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(dt,"size",20),dt),$r=class qo extends Yo{constructor(r,i,s,n,a){super(r,s,i);c(this,"center");c(this,"_graph");this.top=n,this.left=a,this.width=1,this.height=1,this.center=new Yd("center",n,a,this,i),this.points.set("center",this.center),this.center.projectInnerPositionToDom(),this.center.onX.set("update point",l=>{this.left=l}),this.center.onY.set("update point",l=>{this.top=l}),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new Xo(this)),this._graph}static addAtPoint(r,i,s,n,a){return new qo(r,i,s,n,a)}setColorCallback(r){this.center.setColor(r)}isWithin(r,i){return this.center.isWithin(i,r)}getValues(){const r=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:r,max:r,avg:r}}async getAnalysisData(){return await this.file.service.pointAnalysisData(this.center.x,this.center.y)}setLeft(r){const i=Math.max(0,Math.min(this.file.width,Math.round(r)));this.center.x=i}setTop(r){const i=Math.max(0,Math.min(this.file.height,Math.round(r)));this.center.y=i}},Xo=class{constructor(t){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new pe);c(this,"onGraphData",new pe);c(this,"onAnalysisSelection",new pe);this.analysis=t,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(t){this._value=t,this.onGraphData.call(t,this.analysis)}setMinActivation(t){this._min!==t&&(this._min=t,this.emitGraphActivation())}setMaxActivation(t){this._max!==t&&(this._max=t,this.emitGraphActivation())}setAvgActivation(t){this._avg!==t&&(this._avg=t,this.emitGraphActivation())}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const r=await e.getAnalysisData();this.value=r});const t=await this.getGraphData();this.value=t}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof $r)return this._avg?[this.analysis.initialColor]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(this.analysis.initialColor)}),t}getGraphLabels(){if(this.analysis instanceof $r)return this._avg?[this.analysis.name]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(`${this.analysis.name} ${e}`)}),t}hasDataToPrint(){return this.analysis instanceof $r?this._avg:this._min||this._max||this._avg}getDtaAtTime(t){if(this.analysis instanceof $r)return this._avg?[this.value[t]]:[];const e=[],r=this.value;return this._min&&e.push(r[t].min),this._max&&e.push(r[t].max),this._avg&&e.push(r[t].avg),e}},Gd=class extends Go{constructor(t,e,r,i,s){super(t,e,r,i,s),this._color=s,this.setColor(s)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},qd=class extends Gd{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}getPercentXTranslationFromValue(e){return this.analysis.width+this.analysis.left===e?this.pxX:0}getPercentYTranslationFromValue(e){return this.analysis.height+this.analysis.top===e?this.pxY:0}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,r=>{e.x!==r&&(e.x=r)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,r=>{e.y!==r&&(e.y=r)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Ko=class extends Yo{constructor(e,r,i,s,n,a,l){super(e,i,r);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let h=n,p=s;a!==void 0&&l!==void 0&&(h=n+a,p=s+l),this.area=this.buildArea(s,n,a,l),this.tl=this.addPoint("tl",s,n),this.tr=this.addPoint("tr",s,h),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,h),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(m=>m.projectInnerPositionToDom())}get graph(){return this._graph||(this._graph=new Xo(this)),this._graph}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,i,s){const n=Math.min(e,s),a=Math.max(e,s),l=Math.min(r,i),p=Math.max(r,i)-l,m=a-n;return{top:n,left:l,width:p,height:m}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,r=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=r-e,this.height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,r,i){const s=new qd(e,r,i,this,this.color);return this.points.set(e,s),s}setLeft(e){this.leftmostPoint.x=e}setRight(e){this.rightmostPoint.x=e}setTop(e){this.topmostPoint.y=e}setBottom(e){this.bottommostPoint.y=e}get leftmostPoint(){let e=this.tl;return this.points.forEach(r=>{r.x<e.x&&(e=r)}),e}get rightmostPoint(){let e=this.tr;return this.points.forEach(r=>{r.x>e.x&&(e=r)}),e}get topmostPoint(){let e=this.tl;return this.points.forEach(r=>{r.y<e.y&&(e=r)}),e}get bottommostPoint(){let e=this.br;return this.points.forEach(r=>{r.y>e.y&&(e=r)}),e}},Zo=class{constructor(t,e,r,i,s){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=t,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},ao=class extends Zo{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},oo=class ss extends Ko{getType(){return"ellipsis"}static startAddingAtPoint(e,r,i,s,n){const a=new ss(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,l){const{top:h,left:p,width:m,height:f}=ss.calculateDimensionsFromCorners(s,n,a,l);return new ss(e,r,i,h,p,m,f)}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new ao(this,e,r,e+i,r+s):new ao(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=i;p<s;p++){const m=this.file.width*p;for(let f=e;f<=r;f++)if(this.isWithin(f,p)){const y=this.file.pixels[m+f];y<n&&(n=y),y>a&&(a=y),h+=y,l++}}return{min:n,max:a,avg:h/l}}isWithin(e,r){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(r-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.service.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},lo=class extends Zo{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},co=class ns extends Ko{getType(){return"rectangle"}static startAddingAtPoint(e,r,i,s,n){const a=new ns(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,l){const{top:h,left:p,width:m,height:f}=ns.calculateDimensionsFromCorners(s,n,a,l);return new ns(e,r,i,h,p,m,f)}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new lo(this,e,r,e+i,r+s):new lo(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=i;p<s;p++){const m=this.file.width*p;for(let f=e;f<=r;f++){const y=this.file.pixels[m+f];y<n&&(n=y),y>a&&(a=y),h+=y,l++}}return{min:n,max:a,avg:h/l}}async getAnalysisData(){return await this.file.service.rectAnalysisData(this.left,this.top,this.width,this.height)}},as=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],Xd=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new pe);c(this,"onRemove",new pe);c(this,"onSelectionChange",new pe);c(this,"colors",as);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var r;this.has(e)&&((r=this.get(e))==null||r.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,r){const i=co.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeRectAt(e,r,i,s,n){const a=co.build(e,this.getNextColor(),this.drive.parent,r,i,s,n);return this.addAnalysis(a),a}createEllipsisFrom(e,r){const i=oo.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeEllipsisAt(e,r,i,s,n){const a=oo.build(e,this.getNextColor(),this.drive.parent,r,i,s,n);return this.addAnalysis(a),a}createPointAt(e,r){const i=$r.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),r=as.filter(i=>!e.includes(i));return r.length>0?r[0]:as[0]}getNextName(e){return`${e} ${this.all.length}`}},Kd=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...r,...s]},[])}},Zd=class extends nt{constructor(){super(...arguments);c(this,"layers",new Xd(this));c(this,"points",new Kd(this));c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const r=this.listenerLayerContainer.clientWidth,i=this.parent.width,n=e.layerX/r,a=Math.round(i*n),l=this.listenerLayerContainer.clientHeight,h=this.parent.height,m=e.layerY/l;return{top:Math.round(h*m),left:a}}activateListeners(){this.bindedPointerMoveListener=e=>{const r=this.getRelativePosition(e);this.points.all.forEach(i=>{i.active&&this.currentTool.onPointMove(i,r.top,r.left);const s=i.isWithin(r.top,r.left);s?this.currentTool.onPointEnter(i):s||this.currentTool.onPointLeave(i)})},this.bindedPointerDownListener=e=>{const r=this.getRelativePosition(e);this.currentTool.onCanvasClick(r.top,r.left,this.parent),this.points.all.forEach(i=>{i.isWithin(r.top,r.left)&&this.currentTool.onPointDown(i)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},Qd=class{constructor(t){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new pe);c(this,"onAddGraph",new pe);c(this,"onRemoveGraph",new pe);this.drive=t,this.layers.onAdd.set(this.listenerKey,async e=>{const r=e.graph;this.addGraph(r),r.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),r.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(t){this._graphs.set(t.analysis.key,t),this.onAddGraph.call(t)}removeGraph(t){this._graphs.delete(t),this.onRemoveGraph.call(t)}get output(){return this._output}set output(t){this._output=t,this.onOutput.call(t)}refreshOutput(){const t={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{t.values[0].push(...e.getGraphLabels()),t.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((r,i)=>{let s=t.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(r)),s=[a],t.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(r)))})}),this.output=t,t}hasGraph(){return Object.values(this.graphs).find(t=>t.hasDataToPrint()).length>0}generateExportData(){const t={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const r of this.graphs.values()){const i=r.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${r.analysis.initialColor}, ${r.analysis.width} x ${r.analysis.height} px)`});r.value&&Object.keys(r.value).forEach(s=>{if(!Object.keys(t).includes(s)){const a=parseInt(s),l=a+r.analysis.file.timestamp;t[s]={[e[0].key]:pr(a,"m:ss:SSS")+" ",[e[1].key]:pr(l,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:l}}const n=r.getDtaAtTime(parseInt(s));i.forEach((a,l)=>{t[s][a]=n[l]})})}return{header:e,data:Object.values(t)}}},Jd=class extends nt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new pe);c(this,"listeners",new Qd(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async r=>{this.value=r,r.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:r}=this.listeners.generateExportData(),i=xs({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:r}),s=bd(i)(e);xd(i)(s)}},Qo=class Jo extends Ud{constructor(r,i,s,n,a,l,h,p,m,f,y,w,k,E,$,I,U){super(r,i.thermalUrl,s,n,m,a,h,y,w,l,i.visibleUrl);c(this,"_export");this.group=r,this.service=i,this.width=s,this.height=n,this.timestamp=a,this.frameCount=l,this.duration=h,this.frameInterval=p,this.fps=f,this.min=y,this.max=w,this.bytesize=k,this.averageEmissivity=E,this.averageReflectedKelvins=$,this.firstFrame=I,this.timelineData=U,this.pixels=I.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new Vd(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new Id(this),this.visibleLayer=new Wd(this,this.visibleUrl),this.cursorLayer=new Fd(this),this.listenerLayer=new jd(this),this.cursorValue=new Hd(this,void 0),this.timeline=new Bd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new zd(this,!1),this.analysis=new Zd(this,[]),this.analysisData=new Jd(this),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}this.analysis.value.forEach(i=>i.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new Jo(r,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=r=>{this.cursorLayer.show=!0,this.isHover=!0;const i=this.width,s=this.root.clientWidth,n=i/s,a=Math.round(r.offsetX*n),l=Math.round(r.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:a,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(r){if(r!==void 0){const i=this.group.tool.value.getLabelValue(r.x,r.y,this);this.cursorLayer.setLabel(r.x,r.y,i),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(r)}},eu=class extends nt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},tu=class extends Vo{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},$s=class{constructor(t){c(this,"active",!1);this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},el=class extends $s{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>i===void 0?"":i.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Yn=class extends $s{},ru=class extends Yn{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},iu=class extends Yn{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createPointAt(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis)}onPointMove(){}onPointLeave(){}onPointEnter(){}},su=class extends Yn{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},nu=class extends $s{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,r,i){const s=i.getTemperatureAtPoint(e,r),n=i.analysis.layers.all.filter(l=>l.isWithin(e,r)).map(l=>l.selected?`<span style="color:${l.initialColor}">${l.key}</span>`:`<s style="color:${l.initialColor}">${l.key}</s>`);return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${r}`}},au=[el,iu,su,ru,nu],ou=t=>{const e=au.map(r=>{const i=new r(t);return[i.key,i]});return Object.fromEntries(e)},lu=class extends nt{constructor(e,r){super(e,r);c(this,"_tools",ou(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof $s?this.value=e:this.value=this.tools[e]}},cu=class extends Cs{constructor(e,r,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new tu(this,void 0));c(this,"tool",new lu(this,new el(this)));c(this,"files",new eu(this,[]));c(this,"cursorPosition",new Pd(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},tl=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},hs=class rl extends tl{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new rl(e.url,e.code,e.message)}},il=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Br=class extends tl{constructor(e,r,i,s,n){super(s,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async pointAnalysisData(e,r){return await this.parser.pointAnalysisData(this.buffer,e,r)}async rectAnalysisData(e,r,i,s){return await this.parser.rectAnalysisData(this.buffer,e,r,i,s)}async ellipsisAnalysisData(e,r,i,s){return await this.parser.ellipsisAnalysisData(this.buffer,e,r,i,s)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),s=Qo.fromService(e,this,r,i);return e.files.addFile(s),s}},hu=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(Y,K)=>{const le=Y.getBigInt64(K,!0),q=62135596800000n,re=10000n,ie=24n*60n*60n*1000n*re,he=0x4000000000000000n,De=0x8000000000000000n;let Le=le&0x3fffffffffffffffn;le&De&&(Le>he-ie&&(Le-=he),Le<0&&(Le+=ie));const ft=Le/re-q;return Number(ft)},a=n(e,5),l=e.getUint8(15);let h=2;l===1&&(h=4);const p=57,m=r*i*h,f=p+m,y=t.slice(25),w=y.byteLength/f,k=Y=>{const K=Y*f,le=K+f,q=y.slice(K,le),re=new DataView(q),ie=re.getFloat32(8,!0),he=re.getFloat32(12,!0),De=n(re,0),We=re.getFloat32(24,!0),Le=re.getFloat32(28,!0);return{timestamp:De,min:ie,max:he,emissivity:We,reflectedKelvins:Le}},E=[];for(let Y=0;Y<w;Y++){const K=k(Y);E.push(K)}const $={emissivity:0,reflectedKelvins:0};let I=1/0,U=-1/0;const W=[];E.forEach(Y=>{$.emissivity=$.emissivity+Y.emissivity,$.reflectedKelvins=$.reflectedKelvins+Y.reflectedKelvins,Y.min<I&&(I=Y.min),Y.max>U&&(U=Y.max),W.push(Y.timestamp)});const H=W[0],N=[];W.forEach((Y,K)=>{const le=W[K+1];let q=0;le===void 0&&(q=0),q=le-Y;const re=Y-H;N.push({absolute:Y,relative:re,offset:isNaN(q)?0:q,index:K})});const oe=E[E.length-1].timestamp-E[0].timestamp,D=oe/w,V=1e3/D;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:w,duration:oe,frameInterval:D,fps:V,timeline:N,min:I,max:U,averageEmissivity:$.emissivity/E.length,averageReflectedKelvins:$.reflectedKelvins/E.length}},du=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),a=i===1?4:2,l=57,h=s*n*a,p=l+h,m=t.slice(25),f=e*p,y=f+p;return{array:m.slice(f,y),dataType:i}},uu=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,h=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&h&&(m>l-a&&(m-=l),m<0&&(m+=a));const y=m/n-s,w=Number(y),k=r.getFloat32(8,!0),E=r.getFloat32(12,!0),$=r.getFloat32(24,!0),I=r.getFloat32(28,!0),U=t.slice(57);let W=[];if(e===0){const H=new Uint16Array(U),N=Math.abs(k-E),oe=65535;H.forEach(D=>{const V=D/oe;W.push(k+N*V)})}else e===1&&(W=Array.from(new Float32Array(U)));return{timestamp:w,min:k,max:E,emissivity:$,reflectedKelvins:I,pixels:W}},pu=async(t,e,r)=>{const i=new DataView(t),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(I,U)=>{const W=I.getBigInt64(U,!0),H=62135596800000n,N=10000n,oe=24n*60n*60n*1000n*N,D=0x4000000000000000n,V=0x8000000000000000n;let K=W&0x3fffffffffffffffn;W&V&&(K>D-oe&&(K-=D),K<0&&(K+=oe));const q=K/N-H;return Number(q)},l=i.getUint8(15);let h=2;l===1&&(h=4);const p=57,m=s*n*h,f=p+m,y=t.slice(25),w=y.byteLength/f,k={},E=I=>{const U=I*f,W=U+f,H=y.slice(U,W),N=new DataView(H),oe=a(N,0),D=N.getFloat32(8,!0),Y=N.getFloat32(12,!0)-D,le=57+r*h*s+e*h;let q=0;if(l===1)q=N.getFloat32(le,!0);else if(l===0){console.log("jsem uvnitř varia");const he=N.getInt16(le,!0)/65535;q=D+Y*he}return{timestamp:oe,temperature:q}};let $=0;for(let I=0;I<w;I++){const U=E(I);$===0&&($=U.timestamp),k[U.timestamp-$]=U.temperature}return k},fu=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(W,H)=>{const N=W.getBigInt64(H,!0),oe=62135596800000n,D=10000n,V=24n*60n*60n*1000n*D,Y=0x4000000000000000n,K=0x8000000000000000n;let q=N&0x3fffffffffffffffn;N&K&&(q>Y-V&&(q-=Y),q<0&&(q+=V));const ie=q/D-oe;return Number(ie)},p=n.getUint8(15);let m=2;p===1&&(m=4);const f=57,y=a*l*m,w=f+y,k=t.slice(25),E=k.byteLength/w,$={},I=W=>{const H=W*w,N=H+w,oe=k.slice(H,N),D=new DataView(oe),V=h(D,0),Y=D.getFloat32(8,!0),le=D.getFloat32(12,!0)-Y,q=57,re=e,ie=e+i,he=r,De=r+s;let We=1/0,Le=-1/0,pt=0,ft=0;for(let Lt=he;Lt<=De;Lt++){const Mt=Lt*a;for(let Ut=re;Ut<=ie;Ut++){const Pt=q+(Mt+Ut)*m;let Ue=NaN;if(p===1)Ue=D.getFloat32(Pt,!0);else{const at=D.getInt16(Pt,!0)/65535;Ue=Y+le*at}Ue<We&&(We=Ue),Ue>Le&&(Le=Ue),ft+=Ue,pt++}}const Gt={min:We,max:Le,avg:ft/pt,count:pt};return{timestamp:V,result:Gt}};let U=0;for(let W=0;W<E;W++){const H=I(W);U===0&&(U=H.timestamp),$[H.timestamp-U]=H.result}return $},mu=async t=>{let e=[];const r=async $=>{const I=new DataView($.slice(0,25)),U=I.getUint8(15),W=I.getUint16(17,!0),H=I.getUint16(19,!0),N=U===1?4:2,oe=57,D=W*H*N,V=oe+D,Y=$.slice(25),K=Y.byteLength/V;let le=[];for(let q=0;q<K;q++){const ie=q*V+57,he=ie+D,De=Y.slice(ie,he);U===0||U===1&&(le=le.concat(Array.from(new Float32Array(De))))}return le};(await Promise.all(t.map($=>r($)))).forEach($=>{e=e.concat($)}),e.sort(($,I)=>$-I);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),l=200,h=a/l,p=[];let m=[...e];for(let $=0;$<l;$++){const I=s+h*$,U=I+h,W=m.findIndex(V=>V>U),N=m.slice(0,W-1).length,oe=N/e.length*100,D={from:I,to:U,count:N,percentage:oe};p.push(D),m=m.slice(W)}const f=[...p].sort(($,I)=>$.percentage-I.percentage),y=f[0].percentage,w=f[f.length-1].percentage,k=Math.abs(y-w);return p.map($=>({...$,height:$.percentage/k*100}))},gu=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},vu=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(H,N)=>{const oe=H.getBigInt64(N,!0),D=62135596800000n,V=10000n,Y=24n*60n*60n*1000n*V,K=0x4000000000000000n,le=0x8000000000000000n;let re=oe&0x3fffffffffffffffn;oe&le&&(re>K-Y&&(re-=K),re<0&&(re+=Y));const he=re/V-D;return Number(he)},p=n.getUint8(15);let m=2;p===1&&(m=4);const f=57,y=a*l*m,w=f+y,k=t.slice(25),E=k.byteLength/w,$={},I=(H,N)=>{const oe=e+i/2,D=r+s/2,V=(H-oe)/(i/2),Y=(N-D)/(s/2);return V*V+Y*Y<=1},U=H=>{const N=H*w,oe=N+w,D=k.slice(N,oe),V=new DataView(D),Y=h(V,0),K=V.getFloat32(8,!0),q=V.getFloat32(12,!0)-K,re=57,ie=e,he=e+i,De=r,We=r+s;let Le=1/0,pt=-1/0,ft=0,Gt=0;for(let Mt=De;Mt<=We;Mt++){const Ut=Mt*a;for(let Pt=ie;Pt<=he;Pt++)if(I(Pt,Mt)){const Ue=re+(Ut+Pt)*m;let Qe=NaN;if(p===1)Qe=V.getFloat32(Ue,!0);else{const Ie=V.getInt16(Ue,!0)/65535;Qe=K+q*Ie}Qe<Le&&(Le=Qe),Qe>pt&&(pt=Qe),Gt+=Qe,ft++}}const Lt={min:Le,max:pt,avg:Gt/ft,count:ft};return{timestamp:Y,result:Lt}};let W=0;for(let H=0;H<E;H++){const N=U(H);W===0&&(W=N.timestamp),$[N.timestamp-W]=N.result}return $},yu=[{extension:"lrc",minme:"application/octet-stream"}],bu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:yu,is:gu,baseInfo:hu,getFrameSubset:du,frameData:uu,registryHistogram:mu,pointAnalysisData:pu,rectAnalysisData:fu,ellipsisAnalysisData:vu},sl=Object.freeze(bu),wu={LrcParser:sl},nl=Object.values(wu),al=(t,e)=>{const r=nl.find(i=>i.is(t,e));if(r===void 0)throw new il(2,e,`No parser found for '${e}'.`);return r},ol=nl.map(t=>t.extensions),xu=ol.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),_u=class ll{constructor(e,r,i){c(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new ll(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new hs(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=al(i,this.thermalUrl);return this.pocessTheService(new Br(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof il)return this.pocessTheService(hs.fromError(s));throw s}}pocessTheService(e){return e}},Cu=class cl{constructor(e,r){c(this,"_hover",!1);c(this,"onMouseEnter",new pe);c(this,"onMouseLeave",new pe);c(this,"onDrop",new pe);c(this,"onProcessingEnd",new pe);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const i=new cl(e,r);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const i=r.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=xu,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},ku=class{constructor(t){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new Gn(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=al(e,t.name);return new Br(this,e,r,t.name)}catch(e){return new hs(t.name,3,e.message)}}handleDropzone(t){return Cu.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=_u.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},$u=class extends nt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},Su=class extends nt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new cu(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Pu=class extends nt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,a)=>{let h=r.reduce((w,k)=>{const E=k.reduce(($,I)=>[...$,...I],[]);return[...w,...E]},[]).sort((w,k)=>w-k);const p=n/a;let m=i+p;const f=new Map;let y=0;for(;m!==!1;){const w=h.findIndex($=>$>m),k=h.slice(0,w).length;f.set(m-p/2,k),y+=k,h=h.slice(w);const E=m+p;m=E<s?E:!1}return{result:f,resultCount:y}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(sl.registryHistogram,[r]);this.value=i}},Au=class extends nt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Ou=class extends Vo{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Eu=class extends Cs{constructor(e,r,i){super();c(this,"hash",Math.random());c(this,"groups",new Su(this,[]));c(this,"opacity",new $u(this,1));c(this,"minmax",new Ou(this,void 0));c(this,"loading",new Au(this,!1));c(this,"range",new Ad(this,void 0));c(this,"histogram",new Pu(this,[]));c(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof Br?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Br&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Gn=class extends Cs{constructor(e,r){super();c(this,"id");c(this,"service",new ku(this));c(this,"registries",{});c(this,"palette",new Rd(this,"jet"));c(this,"pool");this.pool=e||Sd.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Eu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}},Du=Object.defineProperty,bt=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Du(e,r,s),s};const ho=["ready","select"],Tu={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"},va=class va extends tt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new pe,this.left=0,this.top=0,this.w=0,this.h=0}render(){return _`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){qc(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.onWrapper.call(e),this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(ho,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Tu[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(s=>!ho.includes(s)),r);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,r){for(const i of e)google.visualization.events.addListener(r,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const e=this.chartWrapper.visualization.ha.O;this.left=e.left,this.top=e.top,this.w=e.width,this.h=e.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const i=await Za({cols:r});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,r;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?r=fetch(e).then(s=>s.json()):r=Promise.resolve(e),r.then(Za).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of r){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}};va.styles=ve`
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
  `;let it=va;bt([A({type:String,reflect:!0})],it.prototype,"type");bt([A({type:Array})],it.prototype,"events");bt([A({type:Object,hasChanged:()=>!0})],it.prototype,"options");bt([A({type:Array})],it.prototype,"cols");bt([A({type:Array})],it.prototype,"rows");bt([A({type:String})],it.prototype,"data");bt([A({type:Object})],it.prototype,"view");bt([A({type:Array})],it.prototype,"selection");bt([A({type:Object})],it.prototype,"_data");bt([A({type:Number,reflect:!0})],it.prototype,"left");bt([A({type:Number,reflect:!0})],it.prototype,"top");bt([A({type:Number,reflect:!0})],it.prototype,"w");bt([A({type:Number,reflect:!0})],it.prototype,"h");customElements.define("thermal-chart",it);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ru=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ss=t=>(...e)=>({_$litDirective$:t,values:e});let Xn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pi=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),pi(s,e);return!0},ds=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},hl=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Uu(e)}};function Lu(t){this._$AN!==void 0?(ds(this),this._$AM=t,hl(this)):this._$AM=t}function Mu(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)pi(i[n],!1),ds(i[n]);else i!=null&&(pi(i,!1),ds(i));else pi(this,t)}const Uu=t=>{t.type==qn.CHILD&&(t._$AP??(t._$AP=Mu),t._$AQ??(t._$AQ=Lu))};class Iu extends Xn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),hl(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(pi(this,e),ds(this))}setValue(e){if(Ru(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=()=>new Fu;class Fu{}const kn=new WeakMap,je=Ss(class extends Iu{render(t){return G}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),G}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=kn.get(e);r===void 0&&(r=new WeakMap,kn.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=kn.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ju=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,dl=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ju(e,r,s),s};let vi=class extends tt{constructor(){super(),this.dialogRef=Me(),this.closeButtonRef=Me(),this.invokerRef=Me()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return _`
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
        `}};vi.shadowRootOptions={...tt.shadowRootOptions,mode:"open"};vi.styles=ve`

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

        
    
    `;dl([A({type:String,reflect:!0})],vi.prototype,"label",2);vi=dl([ne("thermal-dialog")],vi);var Nu=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,Ps=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Nu(e,r,s),s};let Kt=class extends tt{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return _`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Kt.VARIANTS=["slate","primary","foreground","background"];Kt.shadowRootOptions={...tt.shadowRootOptions,mode:"open"};Kt.styles=ve`

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
    
    `;Ps([A({type:String,converter:{fromAttribute:t=>Kt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Kt.prototype,"variant",2);Ps([A({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],Kt.prototype,"interactive",2);Ps([A({type:String})],Kt.prototype,"size",2);Kt=Ps([ne("thermal-button")],Kt);const Hr=Math.min,qt=Math.max,us=Math.round,fr=t=>({x:t,y:t}),Hu={left:"right",right:"left",bottom:"top",top:"bottom"},zu={start:"end",end:"start"};function uo(t,e,r){return qt(t,Hr(e,r))}function Ei(t,e){return typeof t=="function"?t(e):t}function Zt(t){return t.split("-")[0]}function As(t){return t.split("-")[1]}function ul(t){return t==="x"?"y":"x"}function pl(t){return t==="y"?"height":"width"}function Di(t){return["top","bottom"].includes(Zt(t))?"y":"x"}function fl(t){return ul(Di(t))}function Vu(t,e,r){r===void 0&&(r=!1);const i=As(t),s=fl(t),n=pl(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=ps(a)),[a,ps(a)]}function Yu(t){const e=ps(t);return[Tn(t),e,Tn(e)]}function Tn(t){return t.replace(/start|end/g,e=>zu[e])}function Gu(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function qu(t,e,r,i){const s=As(t);let n=Gu(Zt(t),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Tn)))),n}function ps(t){return t.replace(/left|right|bottom|top/g,e=>Hu[e])}function Xu(t){return{top:0,right:0,bottom:0,left:0,...t}}function ml(t){return typeof t!="number"?Xu(t):{top:t,right:t,bottom:t,left:t}}function zr(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function po(t,e,r){let{reference:i,floating:s}=t;const n=Di(e),a=fl(e),l=pl(a),h=Zt(e),p=n==="y",m=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,y=i[l]/2-s[l]/2;let w;switch(h){case"top":w={x:m,y:i.y-s.height};break;case"bottom":w={x:m,y:i.y+i.height};break;case"right":w={x:i.x+i.width,y:f};break;case"left":w={x:i.x-s.width,y:f};break;default:w={x:i.x,y:i.y}}switch(As(e)){case"start":w[a]-=y*(r&&p?-1:1);break;case"end":w[a]+=y*(r&&p?-1:1);break}return w}const Ku=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:m,y:f}=po(p,i,h),y=i,w={},k=0;for(let E=0;E<l.length;E++){const{name:$,fn:I}=l[E],{x:U,y:W,data:H,reset:N}=await I({x:m,y:f,initialPlacement:i,placement:y,strategy:s,middlewareData:w,rects:p,platform:a,elements:{reference:t,floating:e}});m=U??m,f=W??f,w={...w,[$]:{...w[$],...H}},N&&k<=50&&(k++,typeof N=="object"&&(N.placement&&(y=N.placement),N.rects&&(p=N.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):N.rects),{x:m,y:f}=po(p,y,h)),E=-1)}return{x:m,y:f,placement:y,strategy:s,middlewareData:w}};async function gl(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:h}=t,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:y=!1,padding:w=0}=Ei(e,t),k=ml(w),$=l[y?f==="floating"?"reference":"floating":f],I=zr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement($)))==null||r?$:$.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:m,strategy:h})),U=f==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,W=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),H=await(n.isElement==null?void 0:n.isElement(W))?await(n.getScale==null?void 0:n.getScale(W))||{x:1,y:1}:{x:1,y:1},N=zr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:U,offsetParent:W,strategy:h}):U);return{top:(I.top-N.top+k.top)/H.y,bottom:(N.bottom-I.bottom+k.bottom)/H.y,left:(I.left-N.left+k.left)/H.x,right:(N.right-I.right+k.right)/H.x}}const Zu=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:h,elements:p}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:y,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:E=!0,...$}=Ei(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const I=Zt(s),U=Zt(l)===l,W=await(h.isRTL==null?void 0:h.isRTL(p.floating)),H=y||(U||!E?[ps(l)]:Yu(l));!y&&k!=="none"&&H.push(...qu(l,E,k,W));const N=[l,...H],oe=await gl(e,$),D=[];let V=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&D.push(oe[I]),f){const q=Vu(s,a,W);D.push(oe[q[0]],oe[q[1]])}if(V=[...V,{placement:s,overflows:D}],!D.every(q=>q<=0)){var Y,K;const q=(((Y=n.flip)==null?void 0:Y.index)||0)+1,re=N[q];if(re)return{data:{index:q,overflows:V},reset:{placement:re}};let ie=(K=V.filter(he=>he.overflows[0]<=0).sort((he,De)=>he.overflows[1]-De.overflows[1])[0])==null?void 0:K.placement;if(!ie)switch(w){case"bestFit":{var le;const he=(le=V.map(De=>[De.placement,De.overflows.filter(We=>We>0).reduce((We,Le)=>We+Le,0)]).sort((De,We)=>De[1]-We[1])[0])==null?void 0:le[0];he&&(ie=he);break}case"initialPlacement":ie=l;break}if(s!==ie)return{reset:{placement:ie}}}return{}}}};function vl(t){const e=Hr(...t.map(n=>n.left)),r=Hr(...t.map(n=>n.top)),i=qt(...t.map(n=>n.right)),s=qt(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function Qu(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>zr(vl(s)))}const Ju=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:l=2,x:h,y:p}=Ei(t,e),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=Qu(m),y=zr(vl(m)),w=ml(l);function k(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&p!=null)return f.find($=>h>$.left-w.left&&h<$.right+w.right&&p>$.top-w.top&&p<$.bottom+w.bottom)||y;if(f.length>=2){if(Di(r)==="y"){const K=f[0],le=f[f.length-1],q=Zt(r)==="top",re=K.top,ie=le.bottom,he=q?K.left:le.left,De=q?K.right:le.right,We=De-he,Le=ie-re;return{top:re,bottom:ie,left:he,right:De,width:We,height:Le,x:he,y:re}}const $=Zt(r)==="left",I=qt(...f.map(K=>K.right)),U=Hr(...f.map(K=>K.left)),W=f.filter(K=>$?K.left===U:K.right===I),H=W[0].top,N=W[W.length-1].bottom,oe=U,D=I,V=D-oe,Y=N-H;return{top:H,bottom:N,left:oe,right:D,width:V,height:Y,x:oe,y:H}}return y}const E=await n.getElementRects({reference:{getBoundingClientRect:k},floating:i.floating,strategy:a});return s.reference.x!==E.reference.x||s.reference.y!==E.reference.y||s.reference.width!==E.reference.width||s.reference.height!==E.reference.height?{reset:{rects:E}}:{}}}};async function ep(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Zt(r),l=As(r),h=Di(r)==="y",p=["left","top"].includes(a)?-1:1,m=n&&h?-1:1,f=Ei(e,t);let{mainAxis:y,crossAxis:w,alignmentAxis:k}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof k=="number"&&(w=l==="end"?k*-1:k),h?{x:w*m,y:y*p}:{x:y*p,y:w*m}}const tp=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=e,h=await ep(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:a}}}}},rp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:$=>{let{x:I,y:U}=$;return{x:I,y:U}}},...h}=Ei(t,e),p={x:r,y:i},m=await gl(e,h),f=Di(Zt(s)),y=ul(f);let w=p[y],k=p[f];if(n){const $=y==="y"?"top":"left",I=y==="y"?"bottom":"right",U=w+m[$],W=w-m[I];w=uo(U,w,W)}if(a){const $=f==="y"?"top":"left",I=f==="y"?"bottom":"right",U=k+m[$],W=k-m[I];k=uo(U,k,W)}const E=l.fn({...e,[y]:w,[f]:k});return{...E,data:{x:E.x-r,y:E.y-i}}}}};function ei(t){return yl(t)?(t.nodeName||"").toLowerCase():"#document"}function gt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function yr(t){var e;return(e=(yl(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function yl(t){return t instanceof Node||t instanceof gt(t).Node}function Wt(t){return t instanceof Element||t instanceof gt(t).Element}function Nt(t){return t instanceof HTMLElement||t instanceof gt(t).HTMLElement}function fo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof gt(t).ShadowRoot}function Ti(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=Ot(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function ip(t){return["table","td","th"].includes(ei(t))}function Os(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Kn(t){const e=Zn(),r=Ot(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function sp(t){let e=mr(t);for(;Nt(e)&&!Vr(e);){if(Os(e))return null;if(Kn(e))return e;e=mr(e)}return null}function Zn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vr(t){return["html","body","#document"].includes(ei(t))}function Ot(t){return gt(t).getComputedStyle(t)}function Es(t){return Wt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function mr(t){if(ei(t)==="html")return t;const e=t.assignedSlot||t.parentNode||fo(t)&&t.host||yr(t);return fo(e)?e.host:e}function bl(t){const e=mr(t);return Vr(e)?t.ownerDocument?t.ownerDocument.body:t.body:Nt(e)&&Ti(e)?e:bl(e)}function Rn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=bl(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),a=gt(s);return n?e.concat(a,a.visualViewport||[],Ti(s)?s:[],a.frameElement&&r?Rn(a.frameElement):[]):e.concat(s,Rn(s,[],r))}function wl(t){const e=Ot(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Nt(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,l=us(r)!==n||us(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function xl(t){return Wt(t)?t:t.contextElement}function jr(t){const e=xl(t);if(!Nt(e))return fr(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=wl(e);let a=(n?us(r.width):r.width)/i,l=(n?us(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const np=fr(0);function _l(t){const e=gt(t);return!Zn()||!e.visualViewport?np:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ap(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==gt(t)?!1:e}function yi(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=xl(t);let a=fr(1);e&&(i?Wt(i)&&(a=jr(i)):a=jr(t));const l=ap(n,r,i)?_l(n):fr(0);let h=(s.left+l.x)/a.x,p=(s.top+l.y)/a.y,m=s.width/a.x,f=s.height/a.y;if(n){const y=gt(n),w=i&&Wt(i)?gt(i):i;let k=y,E=k.frameElement;for(;E&&i&&w!==k;){const $=jr(E),I=E.getBoundingClientRect(),U=Ot(E),W=I.left+(E.clientLeft+parseFloat(U.paddingLeft))*$.x,H=I.top+(E.clientTop+parseFloat(U.paddingTop))*$.y;h*=$.x,p*=$.y,m*=$.x,f*=$.y,h+=W,p+=H,k=gt(E),E=k.frameElement}}return zr({width:m,height:f,x:h,y:p})}function op(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",a=yr(i),l=e?Os(e.floating):!1;if(i===a||l&&n)return r;let h={scrollLeft:0,scrollTop:0},p=fr(1);const m=fr(0),f=Nt(i);if((f||!f&&!n)&&((ei(i)!=="body"||Ti(a))&&(h=Es(i)),Nt(i))){const y=yi(i);p=jr(i),m.x=y.x+i.clientLeft,m.y=y.y+i.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+m.x,y:r.y*p.y-h.scrollTop*p.y+m.y}}function lp(t){return Array.from(t.getClientRects())}function Cl(t){return yi(yr(t)).left+Es(t).scrollLeft}function cp(t){const e=yr(t),r=Es(t),i=t.ownerDocument.body,s=qt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=qt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+Cl(t);const l=-r.scrollTop;return Ot(i).direction==="rtl"&&(a+=qt(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function hp(t,e){const r=gt(t),i=yr(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,h=0;if(s){n=s.width,a=s.height;const p=Zn();(!p||p&&e==="fixed")&&(l=s.offsetLeft,h=s.offsetTop)}return{width:n,height:a,x:l,y:h}}function dp(t,e){const r=yi(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Nt(t)?jr(t):fr(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,h=s*n.x,p=i*n.y;return{width:a,height:l,x:h,y:p}}function mo(t,e,r){let i;if(e==="viewport")i=hp(t,r);else if(e==="document")i=cp(yr(t));else if(Wt(e))i=dp(e,r);else{const s=_l(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return zr(i)}function kl(t,e){const r=mr(t);return r===e||!Wt(r)||Vr(r)?!1:Ot(r).position==="fixed"||kl(r,e)}function up(t,e){const r=e.get(t);if(r)return r;let i=Rn(t,[],!1).filter(l=>Wt(l)&&ei(l)!=="body"),s=null;const n=Ot(t).position==="fixed";let a=n?mr(t):t;for(;Wt(a)&&!Vr(a);){const l=Ot(a),h=Kn(a);!h&&l.position==="fixed"&&(s=null),(n?!h&&!s:!h&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ti(a)&&!h&&kl(t,a))?i=i.filter(m=>m!==a):s=l,a=mr(a)}return e.set(t,i),i}function pp(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const a=[...r==="clippingAncestors"?Os(e)?[]:up(e,this._c):[].concat(r),i],l=a[0],h=a.reduce((p,m)=>{const f=mo(e,m,s);return p.top=qt(f.top,p.top),p.right=Hr(f.right,p.right),p.bottom=Hr(f.bottom,p.bottom),p.left=qt(f.left,p.left),p},mo(e,l,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function fp(t){const{width:e,height:r}=wl(t);return{width:e,height:r}}function mp(t,e,r){const i=Nt(e),s=yr(e),n=r==="fixed",a=yi(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const h=fr(0);if(i||!i&&!n)if((ei(e)!=="body"||Ti(s))&&(l=Es(e)),i){const f=yi(e,!0,n,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else s&&(h.x=Cl(s));const p=a.left+l.scrollLeft-h.x,m=a.top+l.scrollTop-h.y;return{x:p,y:m,width:a.width,height:a.height}}function $n(t){return Ot(t).position==="static"}function go(t,e){return!Nt(t)||Ot(t).position==="fixed"?null:e?e(t):t.offsetParent}function $l(t,e){const r=gt(t);if(Os(t))return r;if(!Nt(t)){let s=mr(t);for(;s&&!Vr(s);){if(Wt(s)&&!$n(s))return s;s=mr(s)}return r}let i=go(t,e);for(;i&&ip(i)&&$n(i);)i=go(i,e);return i&&Vr(i)&&$n(i)&&!Kn(i)?r:i||sp(t)||r}const gp=async function(t){const e=this.getOffsetParent||$l,r=this.getDimensions,i=await r(t.floating);return{reference:mp(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function vp(t){return Ot(t).direction==="rtl"}const yp={convertOffsetParentRelativeRectToViewportRelativeRect:op,getDocumentElement:yr,getClippingRect:pp,getOffsetParent:$l,getElementRects:gp,getClientRects:lp,getDimensions:fp,getScale:jr,isElement:Wt,isRTL:vp},bp=tp,wp=rp,xp=Zu,_p=Ju,Cp=(t,e,r)=>{const i=new Map,s={platform:yp,...r},n={...s.platform,_c:i};return Ku(t,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Ss(class extends Xn{constructor(t){var e;if(super(t),t.type!==qn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return ur}});var kp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,Ri=(t,e,r,i)=>{for(var s=i>1?void 0:i?$p(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&kp(e,r,s),s};let Qt=class extends tt{constructor(){super(...arguments),this.dropdownRef=Me(),this.invokerRef=Me(),this.optionsRef=Me(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Cp(this.invokerRef.value,this.optionsRef.value,{middleware:[bp(2),xp(),_p(),wp()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return _`

            <div class="dropdown" ${je(this.dropdownRef)}>

                <thermal-button class="${Xt(t)}" ${je(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?_`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:_`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};Qt.shadowRootOptions={...tt.shadowRootOptions,mode:"open"};Qt.styles=ve`

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
    
    `;Ri([Oi({slot:"option"})],Qt.prototype,"_options",2);Ri([A({type:String,reflect:!0})],Qt.prototype,"open",2);Ri([A({type:String,reflect:!0,attribute:!0}),C()],Qt.prototype,"interactive",2);Ri([A({type:String,reflect:!0})],Qt.prototype,"variant",2);Qt=Ri([ne("thermal-dropdown")],Qt);var Sp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Ds=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Sp(e,r,s),s};let Yr=class extends tt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Me(),this.contentRef=Me(),this.rulerContentRef=Me()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return _`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${je(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${je(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${je(this.contentRef)}>

                    ${this.collapsed===!1?_`
                        <slot></slot>    
                    `:G}
                
                </div>

            </div>

            ${this.collapsed?_`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:G}
        
        `}};Yr.styles=ve`

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

    `;Ds([C()],Yr.prototype,"collapsed",2);Ds([C()],Yr.prototype,"lastContentWidth",2);Ds([C()],Yr.prototype,"drawerRef",2);Yr=Ds([ne("thermal-bar")],Yr);var Ap=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,Dr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Op(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ap(e,r,s),s};let Jt=class extends tt{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Me(),this.contentRef=Me()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,a=r.contentRect.width,l=n-175,h=a-0,p=this.contentRef.value.offsetHeight,m=4/3;let f=0,y=0;p<l?(console.log("priorita šířky"),f=h,y=f/m):(console.log("priorita výšky"),y=l,f=y*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${y}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return _`

        <div class="container ${this.dark?"dark":"normal"}" ${je(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?_`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?_`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?_`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:_`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:G}

                -->
                
            </div> 
        `:""}

        ${this.pre.length>=0?_`
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
        
        `}};Jt.styles=ve`

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
    
    `;Dr([Oi({slot:"bar",flatten:!0})],Jt.prototype,"barItems",2);Dr([Oi({slot:"bar",flatten:!0})],Jt.prototype,"barElements",2);Dr([Oi({slot:"pre",flatten:!0})],Jt.prototype,"pre",2);Dr([A({type:String,reflect:!0})],Jt.prototype,"fullscreen",2);Dr([A({type:String,reflect:!0,attribute:!0})],Jt.prototype,"showfullscreen",2);Dr([A({type:String,reflect:!0,attribute:!0})],Jt.prototype,"dark",2);Jt=Dr([ne("thermal-app")],Jt);var Ep=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Qn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ep(e,r,s),s};let bi=class extends tt{render(){return _`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&_`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};bi.styles=ve`
    
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
            font-size: calc( var( --thermal-fs-sm ) * .8 );
            padding-top: .2em;
            opacity: .8;
        }

    `;Qn([A({type:String})],bi.prototype,"label",2);Qn([A({type:String})],bi.prototype,"hint",2);bi=Qn([ne("thermal-field")],bi);var Tp=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Lp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Tp(e,r,s),s};let Ln=class extends tt{render(){return _`
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
                        <p>version ${Wn}</p>
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
        `}};Ln.styles=ve`

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
    
    `;Ln=Lp([ne("app-info-button")],Ln);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Sl=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vo=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Sl(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mp{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Up=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class yo extends Mp{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const h=new Set;for(const[p,{consumerHost:m}]of this.subscriptions)h.has(p)||(h.add(p),m.dispatchEvent(new Sl(this.context,p,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Up(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new yo(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new yo(a,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new vo(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new vo(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let ts;const Ip=new Uint8Array(16);function Fp(){if(!ts&&(ts=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ts))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ts(Ip)}const et=[];for(let t=0;t<256;++t)et.push((t+256).toString(16).slice(1));function jp(t,e=0){return et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]}const Wp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),bo={randomUUID:Wp};function Np(t,e,r){if(bo.randomUUID&&!e&&!t)return bo.randomUUID();t=t||{};const i=t.random||(t.rng||Fp)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,jp(i)}class zt extends tt{constructor(){super(...arguments),this.UUID=Np()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const Pl="manager-instance",Ts="manager-palette-context",Bp=new Gn,Hp="__internal_default_registry",zp="__internal_default_group",Vp=t=>t.addOrGetRegistry(Hp),Yp=t=>t.groups.addOrGetGroup(zp);var Gp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,Rs=(t,e,r,i)=>{for(var s=i>1?void 0:i?qp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Gp(e,r,s),s};let Or=class extends zt{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Sr.jet}}connectedCallback(){super.connectedCallback();let t=Bp;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=Or.sanitizeStringPalette(this.palette.key);e.palette=r,t=new Gn(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=Or.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(Sr).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:Sr[t]}}render(){return _`<slot></slot>`}};Rs([Ee({context:Pl})],Or.prototype,"manager",2);Rs([A({type:String,reflect:!0,attribute:!0})],Or.prototype,"slug",2);Rs([Ee({context:Ts}),A({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:Sr[t]}),toAttribute:t=>t.key.toString()}})],Or.prototype,"palette",2);Or=Rs([ne("manager-provider")],Or);var Xp=Object.defineProperty,Kp=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Xp(e,r,s),s};class Jn extends zt{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}Kp([me({context:Pl,subscribe:!0}),C()],Jn.prototype,"manager");const Al="registry-instance",Ol="registry-opacity",ea="registry-range-from",ta="registry-range-to",Zp="registry-loading",El="registry-min",Dl="registry-max";var Qp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,ir=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Qp(e,r,s),s};let Bt=class extends Jn{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=Vp(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var i;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.setFixedRange(n):s.setFixedRange(n)}}if(t==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return _`<slot></slot>`}};ir([A({type:String,reflect:!0,attribute:!0})],Bt.prototype,"slug",2);ir([Ee({context:Al})],Bt.prototype,"registry",2);ir([Ee({context:Ol}),A({type:Number,reflect:!0,attribute:!0})],Bt.prototype,"opacity",2);ir([Ee({context:El}),C()],Bt.prototype,"min",2);ir([Ee({context:Dl}),C()],Bt.prototype,"max",2);ir([Ee({context:ea}),A({type:Number,reflect:!0,attribute:!0})],Bt.prototype,"from",2);ir([Ee({context:ta}),A({type:Number,reflect:!0,attribute:!0})],Bt.prototype,"to",2);ir([Ee({context:Zp}),A({type:String,reflect:!0,attribute:!0})],Bt.prototype,"loading",2);Bt=ir([ne("registry-provider")],Bt);var ef=Object.defineProperty,tf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&ef(e,r,s),s};class wt extends Jn{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}tf([me({context:Al,subscribe:!0})],wt.prototype,"registry");const Tl="group-instance",Rl="tool-context",Ll="tools-context";var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,Li=(t,e,r,i)=>{for(var s=i>1?void 0:i?sf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&rf(e,r,s),s};let Gr=class extends wt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=Yp(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return _`<slot></slot>`}};Li([A({type:String,attribute:!0,reflect:!0})],Gr.prototype,"slug",2);Li([Ee({context:Tl})],Gr.prototype,"group",2);Li([Ee({context:Rl})],Gr.prototype,"tool",2);Li([Ee({context:Ll})],Gr.prototype,"tools",2);Gr=Li([ne("group-provider")],Gr);var nf=Object.defineProperty,af=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&nf(e,r,s),s};class Mi extends wt{constructor(){super()}connectedCallback(){super.connectedCallback()}}af([me({context:Tl,subscribe:!0})],Mi.prototype,"group");const Ml="file",Ul="failure",Il="file-loading",of="file-loaded",ra="file-provider-element",ia="file-ms-context",sa="file-cursor",na="file-cursor-setter",Ls="playback",aa="duration",oa="playing",Fl="playbackSpeed",jl="recording",Wl="mayStop",lf="analysislist",la="file-markers-context";var cf=Object.defineProperty,st=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&cf(e,r,s),s};class Ke extends Mi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const r=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(r);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new pe,this.onSuccess=new pe,this.onFailure=new pe}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}attributeChangedCallback(e,r,i){var s,n,a;if(super.attributeChangedCallback(e,r,i),e==="ms"&&i&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(i)));l!==this.currentFrame.ms&&((s=this.file)==null||s.timeline.setRelativeTime(l))}e==="playing"&&(i==="true"?(n=this.file)==null||n.timeline.play():i==="false"&&((a=this.file)==null||a.timeline.pause())),e==="playbackspeed"&&this.file&&i&&Object.keys(Vn).includes(i)&&(this.file.timeline.playbackSpeed=parseFloat(i)),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.playbackSpeed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}st([Ee({context:Ml}),C()],Ke.prototype,"file");st([Ee({context:Ul}),C()],Ke.prototype,"failure");st([Ee({context:Il}),C()],Ke.prototype,"loading");st([Ee({context:of}),C()],Ke.prototype,"ready");st([Ee({context:oa}),A({type:String,reflect:!0,attribute:!0})],Ke.prototype,"playing");st([Ee({context:aa}),C()],Ke.prototype,"duration");st([Ee({context:Ls}),C()],Ke.prototype,"currentFrame");st([Ee({context:sa})],Ke.prototype,"cursor");st([Ee({context:na})],Ke.prototype,"cursorSetter");st([Ee({context:ia}),A({type:Number,reflect:!0,attribute:!0})],Ke.prototype,"ms");st([Ee({context:Fl}),A({type:Number,reflect:!0,attribute:!0})],Ke.prototype,"playbackSpeed");st([Ee({context:jl}),A({type:String,reflect:!0,attribute:!0})],Ke.prototype,"recording");st([Ee({context:Wl}),C()],Ke.prototype,"mayStop");st([Oi({slot:"mark",flatten:!0})],Ke.prototype,"marksQueriedInternally");st([Ee({context:la})],Ke.prototype,"marksProvidedBelow");st([Ee({context:lf})],Ke.prototype,"analysis");var hf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,Ms=(t,e,r,i)=>{for(var s=i>1?void 0:i?df(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hf(e,r,s),s};let wi=class extends Ke{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Br?await e.createInstance(this.group).then(r=>(this.file=r,this.onSuccess.call(r),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(t=>{t instanceof Qo?this.recieveInstance(t):this.failure=t})}render(){return _`
            <slot></slot>
            <slot name="mark"></slot>
        `}};Ms([Ee({context:ra})],wi.prototype,"providedSelf",2);Ms([A({type:String,attribute:!0,reflect:!0})],wi.prototype,"thermal",2);Ms([A({type:String,attribute:!0,reflect:!0})],wi.prototype,"visible",2);wi=Ms([ne("file-provider")],wi);var uf=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,ti=(t,e,r,i)=>{for(var s=i>1?void 0:i?pf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&uf(e,r,s),s};let gr=class extends Ke{constructor(){super(...arguments),this.providedSelf=this,this.container=Me(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof Br){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof hs&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return _`

                    <div class="container">
                        <div ${je(this.container)} class="${Xt(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${ol.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return _`
            ${this.ready?_`<slot></slot>`:G}
            <slot name="mark"></slot>
        `}};gr.styles=ve`

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
    
    `;ti([Ee({context:ra})],gr.prototype,"providedSelf",2);ti([C()],gr.prototype,"container",2);ti([C()],gr.prototype,"ready",2);ti([C()],gr.prototype,"hover",2);ti([C()],gr.prototype,"listener",2);gr=ti([ne("file-dropin")],gr);var ff=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,ca=(t,e,r,i)=>{for(var s=i>1?void 0:i?mf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ff(e,r,s),s};let xi=class extends Mi{constructor(){super(...arguments),this.container=Me(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return _`

            <div class="container">
            
                <div ${je(this.container)} class="${Xt(t)}"></div>

            </div>
        
        `}};xi.styles=ve`

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
    
    `;ca([C()],xi.prototype,"container",2);ca([C()],xi.prototype,"hover",2);xi=ca([ne("group-dropin")],xi);var gf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,Nl=(t,e,r,i)=>{for(var s=i>1?void 0:i?vf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&gf(e,r,s),s};let fs=class extends wt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return _`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return _`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Sr).map(([t,e])=>_`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};fs.styles=ve`

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

    `;Nl([me({context:Ts,subscribe:!0})],fs.prototype,"value",2);fs=Nl([ne("registry-palette-dropdown")],fs);var yf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,Bl=(t,e,r,i)=>{for(var s=i>1?void 0:i?bf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&yf(e,r,s),s};let ms=class extends wt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return _`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return _`
            <div class="container">
                ${Object.entries(Sr).map(([t,e])=>_`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};ms.styles=ve`

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

    `;Bl([me({context:Ts,subscribe:!0}),C()],ms.prototype,"value",2);ms=Bl([ne("registry-palette-buttons")],ms);var wf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,Hl=(t,e,r,i)=>{for(var s=i>1?void 0:i?xf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&wf(e,r,s),s};let gs=class extends wt{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return _`
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
        `}};gs.styles=ve`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;Hl([me({context:Ol,subscribe:!0})],gs.prototype,"value",2);gs=Hl([ne("registry-opacity-slider")],gs);var _f=Object.defineProperty,Cf=Object.getOwnPropertyDescriptor,kf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Cf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&_f(e,r,s),s};let wo=class extends wt{doAction(){this.registry.range.applyAuto()}render(){return _`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};wo=kf([ne("registry-range-auto-button")],wo);var $f=Object.defineProperty,Sf=Object.getOwnPropertyDescriptor,Pf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&$f(e,r,s),s};let xo=class extends wt{doAction(){this.registry.range.applyMinmax()}render(){return _`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};xo=Pf([ne("registry-range-full-button")],xo);var Af=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,Us=(t,e,r,i)=>{for(var s=i>1?void 0:i?Of(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Af(e,r,s),s};let Ht=class extends wt{constructor(){super(...arguments),this.ticksRef=Me(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/Ht.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return _`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${je(this.ticksRef)}>

                    ${this.ticks.map(t=>_`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Ht.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Ht.TICK_WIDTH=40;Ht.TICK_FIXED=2;Ht.styles=ve`

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


    `;Us([A({type:String,reflect:!0})],Ht.prototype,"placement",2);Us([C()],Ht.prototype,"minmax",2);Us([C()],Ht.prototype,"ticks",2);Ht=Us([ne("registry-ticks-bar")],Ht);var Ef=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,Ui=(t,e,r,i)=>{for(var s=i>1?void 0:i?Df(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ef(e,r,s),s};let qr=class extends wt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return _`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return _`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Ui([C()],qr.prototype,"minmax",2);Ui([C()],qr.prototype,"range",2);Ui([C()],qr.prototype,"opacity",2);Ui([C()],qr.prototype,"palette",2);qr=Ui([ne("registry-log")],qr);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,u,v)=>u in o?t(o,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[u]=v,i=(o,u,v)=>(r(o,typeof u!="symbol"?u+"":u,v),v),s=(o,u)=>` ${u&&u.length>0?u.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",h="pointers-max-distance",p="range-dragging",m="data",f="min",y="max",w="step",k="round",E="type",$="theme",I="rtl",U="btt",W="disabled",H="keyboard-disabled",N="mousewheel-disabled",oe="slider-width",D="slider-height",V="slider-radius",Y="slider-bg",K="slider-bg-hover",le="slider-bg-fill",q="pointer-width",re="pointer-height",ie="pointer-radius",he="pointer-bg",De="pointer-bg-hover",We="pointer-bg-focus",Le="pointer-shadow",pt="pointer-shadow-hover",ft="pointer-shadow-focus",Gt="pointer-border",Lt="pointer-border-hover",Mt="pointer-border-focus",Ut="animate-onclick",Pt="css-links",Ue="vertical",Qe="horizontal",br=(o,u,v,g,M)=>{let J=u-o;return J===0?v:(g-v)*(M-o)/J+v},at=o=>!isNaN(parseFloat(o))&&isFinite(o),Ie=(o,u)=>at(o)?Number(o):u,ji=(o,u)=>u===0?0:Math.round(o/u)*u,Ns=(o,u=1/0)=>{if(u===1/0)return o;let v=e(10,u);return Math.round(o*v)/v},Ge=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Bs=(o,u)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},Hs=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},zs=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},Vs=(o,u)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},Ys=(o,u)=>{if(!u||u.length<=0)return;let v=u.map(M=>at(M)?Ie(M,M):M),g={values:v||[]};g.value=v[0],g.value0=v[0],g.value1=v[0];for(let M=1;M<v.length;M++)g[`value${M+1}`]=v[M];o.dispatchEvent(new CustomEvent("change",{detail:g}))},S=(o,u,v)=>{let g=0,M,J,ue,F,j=!1,fe=(te,Re,Xe,qe,Ne,Be)=>{let lt=g;Xe!==void 0&&te>Xe&&(te=Xe),Re!==void 0&&te<Re&&(te=Re),g=te;let ct=g;return(qe===Ue&&Be||qe===Qe&&Ne)&&(ct=100-ct),qe===Ue?u.style.top=`${ct}%`:u.style.left=`${ct}%`,lt!==g},we=te=>te===u||u.contains(te),X=(te,Re,Xe,qe)=>{M=te,J=Re,ue=Xe,F=qe},Ae=te=>{j=te,u.classList.toggle("disabled",j),j?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},_t=(te,Re)=>{Re==null?u.removeAttribute(te):u.setAttribute(te,Re)},rt=te=>u.getAttribute(te),ee=te=>{if(!j){switch(te.key){case"ArrowLeft":{te.preventDefault(),typeof M=="function"&&M(v);break}case"ArrowRight":{te.preventDefault(),typeof J=="function"&&J(v);break}case"ArrowUp":{te.preventDefault(),typeof ue=="function"&&ue(v);break}case"ArrowDown":{te.preventDefault(),typeof F=="function"&&F(v);break}}Vs(o,te)}},ge=()=>{j||Bs(o,u)};return u.className=`pointer pointer-${v}`,u.addEventListener("keydown",ee),u.addEventListener("click",ge),{$pointer:u,get percent(){return g},get disabled(){return j},set disabled(te){Ae(te)},updatePosition:fe,isClicked:we,setCallbacks:X,setAttr:_t,getAttr:rt,destroy:()=>{u.removeEventListener("keydown",ee),u.removeEventListener("click",ge),u.remove()}}},T=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let u=o.split(","),v=[],g=!0;for(let M=0;M<u.length;M++){let J=u[M].trim();J!==""&&(v.push(J),at(J)||(g=!1))}return g?v.map(M=>Number(M)):v},R=(o,u)=>u?u.findIndex(v=>v===o||v.toString().trim()===o.toString().trim()):-1,L=o=>({updatePosition:(u,v,g,M)=>{if(v.length<=0)return;let J=v.length===1,ue=v[0],F=v[v.length-1];u===Ue?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),J?o.style.height=`${ue}%`:o.style.height=`${Math.abs(ue-F)}%`,M?(o.style.bottom="0%",J?o.style.top="auto":o.style.top=`${Math.min(100-F,100-ue)}%`):(o.style.bottom="auto",J?o.style.top="0%":o.style.top=`${Math.min(ue,F)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),J?o.style.width=`${ue}%`:o.style.width=`${Math.abs(ue-F)}%`,g?(o.style.right="0%",J?o.style.left="auto":o.style.left=`${Math.min(100-F,100-ue)}%`):(o.style.right="auto",J?o.style.left="0%":o.style.left=`${Math.min(ue,F)}%`))}}),Q="--animate-onclick",$e="--width",ae="--height",Te="--panel-bg-border-radius",_e="--panel-bg",B="--panel-bg-hover",Ce="--panel-bg-fill",x="--pointer-width",P="--pointer-height",ce="--pointer-border-radius",ye="--pointer-bg",Ve="--pointer-bg-hover",Je="--pointer-bg-focus",It="--pointer-shadow",mt="--pointer-shadow-hover",xt="--pointer-shadow-focus",or="--pointer-border",Z="--pointer-border-hover",de="--pointer-border-focus",O=(o,u,v)=>{let g=new Map;for(let M of o.attributes){let J=M.nodeName.trim().toLowerCase();if(!u.test(J))continue;let ue=J.replace(/\D/g,"").trim(),F=ue===""||ue==="0"||ue==="1"?0:Ie(ue,0)-1,j=v&&typeof v=="function"?v(M.value):M.value;g.set(F,j)}return g},se=o=>{if(!o)return null;let u=o.getAttribute(Pt);if(!u)return null;let v=u.split(";"),g=[];for(let M of v)M.trim()!==""&&g.push(M.trim());return g},Se=[[$e,oe,"sliderWidth",null],[ae,D,"sliderHeight",null],[Te,V,"sliderRadius",null],[_e,Y,"sliderBg",null],[B,K,"sliderBgHover",null],[Ce,le,"sliderBgFill",null],[x,q,"pointer#Width",/^pointer([0-9]*)-width$/],[P,re,"pointer#Height",/^pointer([0-9]*)-height$/],[ce,ie,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ye,he,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ve,De,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Je,We,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[It,Le,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[mt,pt,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[xt,ft,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[or,Gt,"pointer#Border",/^pointer([0-9]*)-border$/],[Z,Lt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[de,Mt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ke=(o,u,v)=>{let g=null,M=[],J=new Map,ue=(ee,ge=u)=>{let te=[...ge.classList];for(let Re of te)Re.startsWith(ee)&&u.classList.remove(Re)},F=()=>{ue("shape");let ee=u.querySelectorAll(".pointer");for(let ge of ee)ue("shape",ge)},j=ee=>{g=ee,ue("theme-"),typeof ee=="string"&&u.classList.add(`theme-${ee}`)},fe=()=>{if(F(),!(M.length<=0)){u.classList.add("shape",`shape-${M[0]}`);for(let ee=1;ee<M.length;ee++){let ge=M[ee];if(!ge)continue;let te=u.querySelector(`.pointer-${ee}`);!te||te.classList.add("shape",`shape-${ge}`)}}},we=(ee,ge)=>{M[ee]=ge,fe()},X=()=>{F();let ee=O(o,/^pointer([0-9]*)-shape$/);if(!(ee.size<=0)){for(let ge of ee){let te=ge[0];M[te]=ge[1]}fe()}},Ae=(ee,ge)=>`${ee}-${ge}`,_t=(ee,ge,te)=>{let Re=v[te];if(!Re)return;let Xe=te===0?u:Re.$pointer;if(ge==null){J.has(Ae(ee,te))&&J.delete(Ae(ee,te)),Xe.style.removeProperty(ee);return}J.set(Ae(ee,te),ge),Xe.style.setProperty(ee,ge)},rt=(ee,ge)=>J.get(Ae(ee,ge));return(()=>{for(let ee of Se){let[ge,te,Re,Xe]=ee;if(Xe){let Ne=O(o,Xe);for(let Be of Ne){let lt=Be[0],ct=Be[1];_t(ge,ct,lt)}}else{let Ne=o.getAttribute(te);_t(ge,Ne,0)}let qe=[];if(Re.indexOf("#")===-1)qe.push([Re,0]);else{qe.push([Re.replace("#",""),0]),qe.push([Re.replace("#","0"),0]),qe.push([Re.replace("#","1"),0]);for(let Ne=1;Ne<v.length;Ne++)qe.push([Re.replace("#",(Ne+1).toString()),Ne])}for(let Ne of qe)try{let Be=Ne[0],lt=Ne[1];Object.prototype.hasOwnProperty.call(o,Be)||Object.defineProperty(o,Be,{get(){return rt(ge,lt)},set:ct=>{_t(ge,ct,lt)}})}catch(Be){console.error(Be)}}j(o.getAttribute($)),X()})(),{setStyle:_t,getStyle:rt,get theme(){return g},set theme(ee){j(ee)},get pointerShapes(){return M},setPointerShape:we}},Fe="animate-on-click",be="range-dragging",ot=(o,u,v,g)=>{let M=[],J=we=>{for(let X of M)X.update&&typeof X.update=="function"&&X.update(we)},ue=()=>{for(let we of M)we.destroy&&typeof we.destroy=="function"&&we.destroy()},F=(we,X)=>{for(let Ae of M)Ae.onAttrChange&&typeof Ae.onAttrChange=="function"&&Ae.onAttrChange(we,X)},j=we=>{if(we.gettersAndSetters){for(let X of we.gettersAndSetters)if(!(!X.name||!X.attributes))try{Object.prototype.hasOwnProperty.call(o,X.name)||Object.defineProperty(o,X.name,X.attributes)}catch(Ae){console.error("defineSettersGetters error:",Ae)}}},fe=we=>{var X;if(!we.css)return;let Ae=(X=o.shadowRoot)==null?void 0:X.querySelector("style");!Ae||(Ae.innerHTML+=we.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let we of window.tcRangeSliderPlugins){let X=we();M.push(X),X.init&&typeof X.init=="function"&&(X.init(o,u,v,g),j(X),fe(X))}},update:J,onAttrChange:F,destroy:ue}},Ye=10,Wi=20,Vl=(o,u)=>{let v=new Map,g=/^value([0-9]*)$/;for(let F of o.attributes){let j=F.nodeName.trim().toLowerCase();if(!g.test(j))continue;let fe=j.replace("value","").trim(),we=fe===""||fe==="0"||fe==="1"?0:Ie(fe,0)-1,X=at(F.value)?Ie(F.value,0):F.value;v.set(we,X)}let M=Math.max(...Array.from(v.keys())),J=[];J.push([S(o,u,0),v.get(0)]);let ue=u;for(let F=1;F<=M;F++){let j=u.cloneNode(!0);ue.after(j),ue=j,J.push([S(o,j,F),v.get(F)])}return J},ya=(o,u,v,g,M,J,ue)=>{try{Object.defineProperty(o,g,{configurable:!0,get(){if(!u)return;let F=u.pointers[v];if(!F)return;let j=u.getTextValue(F.percent);return at(j)?Ie(j,j):j},set:F=>{u.pointers[v]?u==null||u.setValue(F,v):u==null||u.addPointer(F)}}),Object.defineProperty(o,M,{configurable:!0,get(){var F,j;return(j=(F=u==null?void 0:u.pointers[v])==null?void 0:F.getAttr("aria-label"))!=null?j:void 0},set:F=>{!u||u.setAriaLabel(v,F)}}),Object.defineProperty(o,J,{configurable:!0,get(){var F,j;return(j=(F=u==null?void 0:u.styles)==null?void 0:F.pointerShapes[v])!=null?j:null},set:F=>{!u||!u.styles||u.styles.setPointerShape(v,F)}}),Object.defineProperty(o,ue,{configurable:!0,get(){var F;return(F=u==null?void 0:u.pointers[v].disabled)!=null?F:!1},set:F=>{if(!u)return;let j=u==null?void 0:u.pointers[v];!j||(j.disabled=F)}})}catch(F){console.error(F)}},Yl=(o,u)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Ye;g++)v.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of v)ya(o,u,g[4],g[0],g[1],g[2],g[3])},ba=(o,u,v)=>{var g;let M=(g=v.shadowRoot)==null?void 0:g.querySelector(".container");if(M)for(let J of o)u?M.prepend(J.$pointer):M.append(J.$pointer)},Gl=(o,u)=>{if(!(!u||o.length<=1)){for(let v of o)v.$pointer.style.zIndex=Wi.toString();u.$pointer.style.zIndex=(Wi*2).toString()}},Gs=0,si=100,Lr=2,wa="0.3s",ql=(o,u,v)=>{let g=v.map(d=>d[0]),M=null,J=null,ue=null,F=null,j=Gs,fe=si,we,X,Ae=Qe,_t=Lr,rt=!1,ee=!1,ge=!1,te=0,Re=1/0,Xe=!1,qe,Ne,Be=!1,lt=!1,ct=!1,lr=wa,xa=[],_a=d=>{Be||(d.preventDefault&&d.preventDefault(),wr(d),window.addEventListener("mousemove",wr),window.addEventListener("mouseup",Ni),Hs(o,d))},Ni=d=>{Be||(qe=void 0,Ne=void 0,window.removeEventListener("mousemove",wr),window.removeEventListener("mouseup",Ni),lr&&u.classList.add(Fe),zs(o,d))},Zl=(d,b)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(d)&&lr&&u.classList.remove(Fe),g[0];let z=Jl(d);if(Xe){let Pe=b,At=Hi(Pe);At!==void 0&&(Pe=ji(Pe,At)),z?(qe=Pe,Ne=0,lr&&u.classList.remove(Fe)):qe!==void 0&&(Ne=Pe-qe,qe=Pe)}if(!Ql(d)&&!z){for(let Pe of g)if(!(!Pe.isClicked(d)||Pe.disabled))return lr&&u.classList.remove(Fe),Pe;for(let Pe of g)if(M===Pe)return Pe}let Oe=1/0,He=null;for(let Pe of g){if(Pe.disabled)continue;let At=Math.abs(b-Pe.percent);At<Oe&&(Oe=At,He=Pe)}return He},Ca=()=>g.findIndex(d=>M===d&&!d.disabled),wr=d=>{let b;if(Ae===Ue){let{height:Oe,top:He}=u.getBoundingClientRect(),Pe=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;b=Math.min(Math.max(0,Pe-He),Oe)*100/Oe}else{let{width:Oe,left:He}=u.getBoundingClientRect(),Pe=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;b=Math.min(Math.max(0,Pe-He),Oe)*100/Oe}if((rt||ee)&&(b=100-b),M=Zl(d.target,b),M&&Gl(g,M),Xe&&g.length>1&&Ne!==void 0){let Oe=g[0],He=g[g.length-1],Pe=Oe.percent+Ne<0,At=He.percent+Ne>100;if(Pe||At)return;for(let Zi=0;Zi<g.length;Zi++)ht(Zi,g[Zi].percent+Ne);return}let z=Ca();z!==-1&&(ht(z,b),M==null||M.$pointer.focus())},Bi=d=>{if(Be||document.activeElement!==o||M!=null&&M.disabled)return;d.stopPropagation(),d.preventDefault();let b=d.deltaY<0,z=rt||ee,Oe=b?!z:z,He=Ca();He!==-1&&(Oe?ni(He,g[He].percent):ai(He,g[He].percent))},ka=d=>{Be||lt||(Ae===Ue?ee?ht(d,100):ht(d,0):rt?ai(d,g[d].percent):ni(d,g[d].percent))},$a=d=>{Be||lt||(Ae===Ue?ee?ht(d,0):ht(d,100):rt?ni(d,g[d].percent):ai(d,g[d].percent))},Sa=d=>{Be||lt||(Ae===Ue?ee?ai(d,g[d].percent):ni(d,g[d].percent):rt?ht(d,100):ht(d,0))},Pa=d=>{Be||lt||(Ae===Ue?ee?ni(d,g[d].percent):ai(d,g[d].percent):rt?ht(d,0):ht(d,100))},Ql=d=>d.classList.contains("panel"),Jl=d=>d.classList.contains("panel-fill"),ni=(d,b)=>{if(b===void 0)return;let z=Hi(b);z==null&&(z=1),b-=z,b<0&&(b=0),ht(d,b)},ai=(d,b)=>{if(b===void 0)return;let z=Hi(b);z==null&&(z=1),b+=z,b>100&&(b=100),ht(d,b)},xr=()=>{!F||F.update({percents:Aa(),values:Oa(),$pointers:Ea(),min:Da(),max:Ta(),data:Ks(),step:Xs(),round:Qs(),type:Zs(),textMin:zi(),textMax:Vi(),rightToLeft:tn(),bottomToTop:rn(),pointersOverlap:on(),pointersMinDistance:Js(),pointersMaxDistance:en(),rangeDragging:ln(),disabled:sn(),keyboardDisabled:nn(),mousewheelDisabled:an()})},ec=()=>{xr()},tc=d=>{if(!(ge||g.length<=1||fe===j))if(d===0){let b=Re*100/(fe-j);return Math.max(0,g[d+1].percent-b)}else{let b=te*100/(fe-j);return Math.min(g[d-1].percent+b,100)}},rc=d=>{if(!(ge||g.length<=1||fe===j))if(d===g.length-1){let b=Re*100/(fe-j);return Math.min(g[d-1].percent+b,100)}else{let b=te*100/(fe-j);return Math.max(0,g[d+1].percent-b)}},Hi=d=>{let b;if(typeof we=="function"){let z=br(0,100,j,fe,d);b=we(z,d)}else b=we;if(at(b)){let z=fe-j;return b=z===0?0:b*100/z,b}},Mr=d=>{if(d===void 0)return;let b=br(0,100,j,fe,d);return X!==void 0?X[Math.round(b)]:Ns(b,_t)},zi=()=>X!==void 0?X[j]:j,Vi=()=>X!==void 0?X[fe]:fe,Xs=()=>we,ic=d=>{var b;return d<=0||ge?zi():(b=Mr(g[d-1].percent))!=null?b:""},sc=d=>{var b;return g.length<=1||d>=g.length-1||ge?Vi():(b=Mr(g[d+1].percent))!=null?b:""},Aa=()=>g.map(d=>d.percent),Oa=()=>g.map(d=>Mr(d.percent)),Ea=()=>g.map(d=>d.$pointer),Da=()=>j,Ta=()=>fe,Ks=()=>X,Zs=()=>Ae,Qs=()=>_t,Js=()=>te,en=()=>Re,nc=d=>xa[d],tn=()=>rt,rn=()=>ee,sn=()=>Be,nn=()=>lt,an=()=>ct,on=()=>ge,ln=()=>Xe,ht=(d,b)=>{if(b===void 0)return;let z=Hi(b);z!==void 0&&(b=ji(b,z));let Oe=g[d];if(!Oe)return;let He=Oe.updatePosition(b,tc(d),rc(d),Ae,rt,ee);J==null||J.updatePosition(Ae,g.map(Pe=>Pe.percent),rt,ee),xr();for(let Pe of g){let At=Mr(Pe.percent);At!==void 0&&(Pe.setAttr("aria-valuenow",At.toString()),Pe.setAttr("aria-valuetext",At.toString()))}oc(),He&&Ys(o,g.map(Pe=>Mr(Pe.percent)))},Ft=()=>{for(let d=0;d<g.length;d++)ht(d,g[d].percent)},ac=(d,b)=>{j=X!==void 0?0:Ie(d,Gs),fe=X!==void 0?X.length-1:Ie(b,si),Yi(j),Gi(fe)},oc=()=>{var d,b;for(let z=0;z<g.length;z++){let Oe=g[z];Oe.setAttr("aria-valuemin",((d=ic(z))!=null?d:"").toString()),Oe.setAttr("aria-valuemax",((b=sc(z))!=null?b:"").toString())}},Yi=d=>{j=Ie(d,Gs),j>fe&&(fe=j+si),Ft()},Gi=d=>{fe=Ie(d,si),fe<j&&(fe=j+si),Ft()},Ra=d=>{ge=!0;for(let b=0;b<d.length;b++)qi(d[b],b);ge=!1;for(let b=0;b<d.length;b++)qi(d[b],b)},qi=(d,b)=>{let z;X!==void 0?(z=d==null?0:R(d,X),z===-1&&(z=0)):(z=Ie(d,j),z<j&&(z=j),z>fe&&(z=fe));let Oe=br(j,fe,0,100,z);ht(b,Oe)},Xi=d=>{if(d==null){we=void 0;return}if(typeof d=="function"){we=d,Ft();return}if(at(d)){we=Ie(d,1);let b=Math.abs(fe-j);we>b&&(we=void 0),Ft();return}we=void 0},cn=d=>{ge=d,Ft()},hn=d=>{(!at(d)||d<0)&&(d=0),te=d},dn=d=>{(!at(d)||d<0)&&(d=1/0),Re=d},un=d=>{Be=d,u.classList.toggle("disabled",Be),Be?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},La=d=>{lt=d},Ma=d=>{ct=d,ct?document.removeEventListener("wheel",Bi):document.addEventListener("wheel",Bi,{passive:!1})},pn=d=>{if(d==null){X=void 0;return}if(X=T(d),X===void 0||X.length<=0){X=void 0;return}Yi(0),Gi(X.length-1),we===void 0&&Xi(1)},fn=d=>{var b;typeof d=="string"?Ae=d.trim().toLowerCase()===Ue?Ue:Qe:Ae=Qe;let z=(b=o.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!z)return;z.className=`range-slider-box type-${Ae}`,Ft();let Oe=Ae===Ue?"vertical":"horizontal";for(let He of g)He.setAttr("aria-orientation",Oe)},mn=d=>{rt=d,g.length>1&&ba(g,rt,o),Ft(),xr()},gn=d=>{ee=d,g.length>1&&ba(g,ee,o),Ft(),xr()},vn=d=>{_t=Ie(d,Lr),_t<0&&(_t=Lr),xr()},Ua=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(lr=void 0,u.style.removeProperty(Q),u.classList.remove(Fe)):(lr=d.toString(),u.style.setProperty(Q,lr),u.classList.add(Fe))},Ia=(d,b)=>{let z=g[d];!z||(z.setAttr("aria-label",b),xa[d]=b)},Ki=d=>{if(qe=void 0,g.length<=1){Xe=!1,u.classList.remove(be);return}Xe=d,u.classList.toggle(be,Xe)},lc=()=>{un(Ge(o.getAttribute(W))),lt=Ge(o.getAttribute(H)),ct=Ge(o.getAttribute(N));let d=O(o,/^pointer([0-9]*)-disabled$/,b=>Ge(b));for(let b of d){let z=b[0];!g[z]||(g[z].disabled=b[1])}},cc=()=>{let d=O(o,/^aria-label([0-9]*)$/);for(let b of d){let z=b[0];Ia(z,b[1])}},hc=d=>{let b=g.length,z=g[b-1].$pointer,Oe=z.cloneNode(!0);z.after(Oe);let He=S(o,Oe,b);return He.setCallbacks(ka,$a,Sa,Pa),g.push(He),qi(d,b),Ft(),xr(),b},dc=()=>{let d=g.length,b=g[d-1];return b?(b.destroy(),g.pop(),g.length<=1&&Ki(!1),Ft(),xr(),d-1):-1};return(()=>{var d,b;for(let Oe of g)Oe.setCallbacks(ka,$a,Sa,Pa);let z=(d=o.shadowRoot)==null?void 0:d.querySelector(".panel-fill");z&&(J=L(z)),fn(o.getAttribute(E)),mn(Ge(o.getAttribute(I))),gn(Ge(o.getAttribute(U))),ac(o.getAttribute(f),o.getAttribute(y)),Xi(o.getAttribute(w)),pn(o.getAttribute(m)),Ra(v.map(Oe=>Oe[1])),cn(Ge(o.getAttribute(a))),hn(Ie(o.getAttribute(l),0)),dn(Ie(o.getAttribute(h),1/0)),Ki(Ge(o.getAttribute(p))),vn(Ie(o.getAttribute(k),Lr)),lc(),cc(),ue=ke(o,u,g),Ua((b=o.getAttribute(Ut))!=null?b:wa),u.addEventListener("mousedown",_a),u.addEventListener("mouseup",Ni),u.addEventListener("touchmove",wr),u.addEventListener("touchstart",wr),ct||document.addEventListener("wheel",Bi,{passive:!1}),F=ot(o,ec,{setValues:Ra,setMin:Yi,setMax:Gi,setStep:Xi,setPointersOverlap:cn,setPointersMinDistance:hn,setPointersMaxDistance:dn,setDisabled:un,setType:fn,setRightToLeft:mn,setBottomToTop:gn,setRound:vn,setKeyboardDisabled:La,setMousewheelDisabled:Ma,setRangeDragging:Ki,setData:pn},{getPercents:Aa,getValues:Oa,getPointerElements:Ea,getMin:Da,getMax:Ta,getStep:Xs,getData:Ks,getType:Zs,getRound:Qs,getTextMin:zi,getTextMax:Vi,isRightToLeft:tn,isBottomToTop:rn,isDisabled:sn,isKeyboardDisabled:nn,isMousewheelDisabled:an,isPointersOverlap:on,isRangeDraggingEnabled:ln,getPointersMinDistance:Js,getPointersMaxDistance:en}),F.init()})(),{get pointers(){return g},get styles(){return ue},get pluginsManager(){return F},get min(){return zi()},get max(){return Vi()},get step(){return Xs()},get pointersOverlap(){return on()},set pointersOverlap(d){cn(d)},get pointersMinDistance(){return Js()},set pointersMinDistance(d){hn(d)},get pointersMaxDistance(){return en()},set pointersMaxDistance(d){dn(d)},get disabled(){return sn()},set disabled(d){un(d)},get data(){return Ks()},get type(){return Zs()},set type(d){fn(d)},get rightToLeft(){return tn()},set rightToLeft(d){mn(d)},get bottomToTop(){return rn()},set bottomToTop(d){gn(d)},get round(){return Qs()},set round(d){vn(d)},get animateOnClick(){return lr},set animateOnClick(d){Ua(d)},get keyboardDisabled(){return nn()},set keyboardDisabled(d){La(d)},get mousewheelDisabled(){return an()},set mousewheelDisabled(d){Ma(d)},get rangeDragging(){return ln()},set rangeDragging(d){Ki(d)},setMin:Yi,setMax:Gi,setValue:qi,setStep:Xi,setData:pn,getTextValue:Mr,setAriaLabel:Ia,getAriaLabel:nc,addPointer:hc,removePointer:dc,destroy:()=>{u.removeEventListener("mousedown",_a),u.removeEventListener("mouseup",Ni),u.removeEventListener("touchmove",wr),u.removeEventListener("touchstart",wr),document.removeEventListener("wheel",Bi);for(let d of g)d.destroy();F==null||F.destroy()}}},Xl=(o,u,v)=>{let g=Se.find(([F,j,fe,we])=>j.replace("#","")===u.replace(/\d+/g,""));if(g&&o.styles){let[F,j,fe,we]=g,X=u.replace(/\D/g,"").trim(),Ae=X===""||X==="0"||X==="1"?0:Ie(X,0)-1;o.styles.setStyle(F,v,Ae);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(u,v),u){case f:{o.setMin(v);break}case y:{o.setMax(v);break}case w:{o.setStep(v);break}case a:{o.pointersOverlap=Ge(v);break}case l:{o.pointersMinDistance=Ie(v,0);break}case p:{o.rangeDragging=Ge(v);break}case h:{o.pointersMaxDistance=Ie(v,1/0);break}case W:{o.disabled=Ge(v);break}case H:{o.keyboardDisabled=Ge(v);break}case N:{o.mousewheelDisabled=Ge(v);break}case m:{o.setData(v);break}case E:{o.type=v;break}case I:{o.rightToLeft=Ge(v);break}case U:{o.bottomToTop=Ge(v);break}case k:{o.round=Ie(v,Lr);break}case $:{o.styles&&(o.styles.theme=v);break}case Ut:{o.animateOnClick=v;break}}let M=null;if(/^value([0-9]*)$/.test(u)&&(M="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(M="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(M="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(M="pointer-shape"),!M)return;let J=u.replace(/\D/g,"").trim(),ue=J===""||J==="0"||J==="1"?0:Ie(J,0)-1;switch(M){case"value":{o.setValue(v,ue);break}case"pointer-disabled":{let F=o==null?void 0:o.pointers[ue];if(!F)return;F.disabled=Ge(v);break}case"aria-label":{o.setAriaLabel(ue,v);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(ue,v);break}}},Kl=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.disabled)!=null?u:!1}set data(o){var u;(u=this.slider)==null||u.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var u;(u=this.slider)==null||u.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var u;(u=this.slider)==null||u.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,u;return(u=(o=this.slider)==null?void 0:o.round)!=null?u:Lr}set type(o){!this.slider||(this.slider.type=o??Qe)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Qe}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?u:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?u:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?u:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,u,v;return(v=(u=(o=this.slider)==null?void 0:o.styles)==null?void 0:u.theme)!=null?v:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,u;return(u=(o=this.slider)==null?void 0:o.rightToLeft)!=null?u:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,u;return(u=(o=this.slider)==null?void 0:o.bottomToTop)!=null?u:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?u:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,u;return(u=(o=this.slider)==null?void 0:o.rangeDragging)!=null?u:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ge(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var u,v;if(!this.slider)return;let g=(v=(u=this.slider)==null?void 0:u.addPointer(o))!=null?v:0;ya(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=o,this.shadowRoot.appendChild(u)}connectedCallback(){var o,u;if(!this.shadowRoot)return;this._externalCSSList=se(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!v)return;let g=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!g)return;let M=Vl(this,v);this.slider=ql(this,g,M),Yl(this,this.slider),this._observer=new MutationObserver(J=>{J.forEach(ue=>{var F;if(!this.slider||ue.type!=="attributes")return;let j=ue.attributeName;!j||Xl(this.slider,j,(F=this.getAttribute(j))!=null?F:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},qs=Kl;window.tcRangeSlider=qs,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",qs),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends qs{})})();(()=>{var t=(l,h,p,m,f)=>{let y=h-l;return y===0?p:(m-p)*(f-l)/y+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,h)=>e(l)?Number(l):h,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,h=null,p=null,m=null,f=null,y=!1,w=s,k=n,E=()=>{var D;let V=(D=l==null?void 0:l.shadowRoot)==null?void 0:D.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),p.append(m),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),V.append(p)},$=()=>{!h||!p||p.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},I=()=>{var D;if(!p||!h)return;let V=h.getMin(),Y=h.getMax(),K=h.getType()==="vertical",le=h.isRightToLeft()||h.isBottomToTop();for(let re=0;re<w;re++){let ie=document.createElement("div");ie.classList.add("mark",`mark-${re}`);let he=w===0?0:re*100/(w-1);K?le?ie.style.top=`${100-he}%`:ie.style.top=`${he}%`:le?ie.style.left=`${100-he}%`:ie.style.left=`${he}%`,m==null||m.append(ie)}let q=h.getData();for(let re=0;re<k;re++){let ie=document.createElement("div");ie.classList.add("mark-value",`mark-value-${re}`);let he=k===0?0:re*100/(k-1),De=t(0,k-1,V,Y,re);ie.textContent=(q?(D=q[Math.round(De)])!=null?D:"":De).toString(),K?le?ie.style.top=`${100-he}%`:ie.style.top=`${he}%`:le?ie.style.left=`${100-he}%`:ie.style.left=`${he}%`,f==null||f.append(ie)}},U=(D,V)=>{oe(),w=D,k=V,w<=0&&(w=s),k<=0&&(k=n),E(),I(),$()},W=D=>{y=D,y?(E(),I(),$()):oe()},H=D=>{!p||p.style.setProperty("--marks-color",D)},N=D=>{!p||p.style.setProperty("--values-color",D)},oe=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(D,V,Y,K)=>{var le,q;h=K,l=D,y=i(l.getAttribute("marks")),y&&(U(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),H((le=l.getAttribute("marks-color"))!=null?le:"#cbd5e1"),N((q=l.getAttribute("marks-values-color"))!=null?q:"#475569"))},onAttrChange:(D,V)=>{D==="marks"&&W(i(V)),D==="marks-count"&&U(r(V,s),k),D==="marks-values-count"&&U(w,r(V,n)),D==="marks-color"&&H(V),D==="marks-values-color"&&N(V)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return y??!1},set:D=>{W(i(D))}}},{name:"marksCount",attributes:{get(){return w??s},set:D=>{U(r(D,s),k)}}},{name:"marksValuesCount",attributes:{get(){return w??s},set:D=>{U(w,r(D,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:D=>{H(D)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:D=>{N(D)}}}],destroy:oe,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Tf=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,Vt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Tf(e,r,s),s};let kt=class extends wt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Me(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.setFixedRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?_`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:_`

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

        `}};kt.styles=ve`

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
    
    `;Vt([me({context:El,subscribe:!0}),C()],kt.prototype,"min",2);Vt([me({context:Dl,subscribe:!0}),C()],kt.prototype,"max",2);Vt([me({context:ea,subscribe:!0}),C()],kt.prototype,"from",2);Vt([me({context:ta,subscribe:!0}),C()],kt.prototype,"to",2);Vt([C()],kt.prototype,"hasFixedFrom",2);Vt([C()],kt.prototype,"hasFixedTo",2);Vt([me({context:Ts,subscribe:!0}),C()],kt.prototype,"palette",2);Vt([C()],kt.prototype,"sliderRef",2);Vt([C()],kt.prototype,"initialised",2);kt=Vt([ne("registry-range-slider")],kt);var Lf=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,Ii=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Lf(e,r,s),s};let Xr=class extends wt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?G:_`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Ii([me({context:ea,subscribe:!0})],Xr.prototype,"from",2);Ii([me({context:ta,subscribe:!0})],Xr.prototype,"to",2);Ii([A({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],Xr.prototype,"fixed",2);Ii([A({type:String,reflect:!0,attribute:!0})],Xr.prototype,"separator",2);Xr=Ii([ne("registry-range-display")],Xr);var Uf=Object.defineProperty,If=Object.getOwnPropertyDescriptor,Is=(t,e,r,i)=>{for(var s=i>1?void 0:i?If(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Uf(e,r,s),s};let Kr=class extends wt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return _`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":G}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>_`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():_`
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
        `}};Kr.styles=ve`

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


    `;Is([C()],Kr.prototype,"histogram",2);Is([A({type:Boolean,reflect:!0})],Kr.prototype,"interactive",2);Is([A({type:String,reflect:!0})],Kr.prototype,"height",2);Kr=Is([ne("registry-histogram")],Kr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vs extends Xn{constructor(e){if(super(e),this.it=G,e.type!==qn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===G||e==null)return this._t=void 0,this.it=e;if(e===ur)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}vs.directiveName="unsafeHTML",vs.resultType=1;const Ct=Ss(vs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mn extends vs{}Mn.directiveName="unsafeSVG",Mn.resultType=2;const Ff=Ss(Mn);var jf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,Fs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&jf(e,r,s),s};let Zr=class extends Mi{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",t=>{this.hint=t.description})}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?G:_`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return _`
                        
                        <button 
                            class=${Xt(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Ff(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Zr.styles=ve`

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

    `;Fs([me({context:Rl,subscribe:!0}),C()],Zr.prototype,"value",2);Fs([me({context:Ll,subscribe:!0}),C()],Zr.prototype,"tools",2);Fs([C()],Zr.prototype,"hint",2);Zr=Fs([ne("group-tool-buttons")],Zr);var Nf=Object.defineProperty,Fi=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Nf(e,r,s),s};class Ze extends Mi{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Fi([me({context:ra,subscribe:!0}),C()],Ze.prototype,"parentFileProviderElement");Fi([me({context:Il,subscribe:!0}),C()],Ze.prototype,"loading");Fi([me({context:Ml,subscribe:!0}),C()],Ze.prototype,"file");Fi([me({context:Ul,subscribe:!0}),C()],Ze.prototype,"failure");Fi([me({context:jl,subscribe:!0}),C()],Ze.prototype,"recording");var Bf=Object.defineProperty,Hf=Object.getOwnPropertyDescriptor,zf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Bf(e,r,s),s};let Un=class extends Ze{constructor(){super(...arguments),this.container=Me()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return _`
            <div ${je(this.container)} class=${Xt(r)} part="file-canvas-container">
            
                ${this.loading===!0?_`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?_`<div class="error-wrapper">
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
                        </div>`:G}
            
            </div>
        
        `}};Un.styles=ve`
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
    `;Un=zf([ne("file-canvas")],Un);var Vf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,Gf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Vf(e,r,s),s};let In=class extends Ze{onInstanceCreated(t){}onFailure(t){}render(){return this.file?_`
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
        `:G}};In.styles=ve`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;In=Gf([ne("file-share-button")],In);var qf=Object.defineProperty,Xf=Object.getOwnPropertyDescriptor,Kf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&qf(e,r,s),s};let Fn=class extends Ze{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?_`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${Ct(this.renderRow("Thermal file name",this.file.fileName))}

                        ${Ct(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?Ct(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):G}

                        ${Ct(this.renderRow("Time",Md.human(this.file.timestamp)))}

                        ${Ct(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${Ct(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Ct(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${Ct(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${Ct(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${Ct(this.renderRow("Type",this.file.service.parser.name))}
                    ${Ct(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>_`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:G}};Fn.styles=ve`

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
    
    `;Fn=Kf([ne("file-info-button")],Fn);var Zf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,Jf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Zf(e,r,s),s};let jn=class extends Ze{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?G:_`

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

                    ${this.file.timeline.isSequence?_`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:G}
            
            </thermal-dropdown>

        
        `}};jn.styles=ve`

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
    
    `;jn=Jf([ne("file-download-dropdown")],jn);var em=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,sr=(t,e,r,i)=>{for(var s=i>1?void 0:i?tm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&em(e,r,s),s};let yt=class extends Ze{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Me(),this.barRef=Me(),this.containerRef=Me(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<yt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}handleBarHover(t){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(r)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,l;const t=this.file;if(t===void 0)return G;if(t.duration===0)return G;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return _`
            <div class="${Xt(e)}" ${je(this.containerRef)}>


                ${t!==void 0?_`
                        <div class="container">

                            <div class="${Xt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?_`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:_`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>


                            <div class="${Xt(s)}"  ${je(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${je(this.barRef)}></div>
                                    ${this.cursor?_`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(h=>_`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:G}

            
            
            </div>

            ${this.currentFrame!==void 0?_`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${pr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${pr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:G}

          `}};yt.collapseWidth=500;yt.styles=ve`
    
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
    
    `;sr([me({context:oa,subscribe:!0}),C()],yt.prototype,"playing",2);sr([me({context:Ls,subscribe:!0}),C()],yt.prototype,"currentFrame",2);sr([me({context:aa,subscribe:!0}),C()],yt.prototype,"duration",2);sr([me({context:Wl,subscribe:!0}),C()],yt.prototype,"mayStop",2);sr([me({context:sa,subscribe:!0})],yt.prototype,"cursor",2);sr([me({context:na,subscribe:!0})],yt.prototype,"cursorSetter",2);sr([me({context:la,subscribe:!0})],yt.prototype,"markers",2);sr([C()],yt.prototype,"collapsed",2);yt=sr([ne("file-timeline")],yt);var rm=Object.defineProperty,im=Object.getOwnPropertyDescriptor,ha=(t,e,r,i)=>{for(var s=i>1?void 0:i?im(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&rm(e,r,s),s};let _i=class extends Ze{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?G:_`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Vn).map(([t])=>_`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof Qt&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};_i.styles=ve`

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
    
    `;ha([A({type:String,reflect:!0})],_i.prototype,"enabled",2);ha([me({context:Fl,subscribe:!0}),C()],_i.prototype,"playbackSpeed",2);_i=ha([ne("file-playback-speed-dropdown")],_i);var sm=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,da=(t,e,r,i)=>{for(var s=i>1?void 0:i?nm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&sm(e,r,s),s};let Ci=class extends Ze{constructor(){super(...arguments),this.container=Me()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return _`
            <div class="container">
            
                <video ${je(this.container)} preload="metadata">

                    ${this.url===void 0?G:_`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Ci.styles=ve`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;da([me({context:Ls,subscribe:!0}),C()],Ci.prototype,"currentFrame",2);da([A({type:String,reflect:!0,attribute:!0})],Ci.prototype,"url",2);Ci=da([ne("file-video")],Ci);const am=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),pr(r,"mm:ss:SSS")},om=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(r[0]),s=parseInt(r[1]),n=parseInt(r[2]);return i*60*1e3+s*1e3+n};var lm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,Yt=(t,e,r,i)=>{for(var s=i>1?void 0:i?cm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&lm(e,r,s),s};const ua={fromAttribute:t=>t===null?null:om(t),toAttribute:t=>t===null?null:am(t)};let Et=class extends Ze{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,i){var s;super.attributeChangedCallback(e,r,i),this.log(e,r,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(s=>s.lang==="cs-CZ");if(r)return r;const i=e.find(s=>s.default===!0);return i||null}render(){return G}};Yt([me({context:oa,subscribe:!0}),C()],Et.prototype,"playing",2);Yt([me({context:ia,subscribe:!0}),C()],Et.prototype,"ms",2);Yt([A({type:String,reflect:!0,attribute:!0})],Et.prototype,"label",2);Yt([A({type:String,reflect:!0,attribute:!0,converter:ua})],Et.prototype,"start",2);Yt([A({type:String,reflect:!0,attribute:!0,converter:ua})],Et.prototype,"end",2);Yt([A({type:String,reflect:!0,attribute:!0,converter:ua})],Et.prototype,"dur",2);Yt([A({type:String,reflect:!0,attribute:!0})],Et.prototype,"active",2);Yt([A({type:String,reflect:!0,attribute:!0})],Et.prototype,"pauseOnActivate",2);Yt([A({type:String,reflect:!0,attribute:!0})],Et.prototype,"say",2);Et=Yt([ne("file-marker")],Et);var hm=Object.defineProperty,dm=Object.getOwnPropertyDescriptor,Tr=(t,e,r,i)=>{for(var s=i>1?void 0:i?dm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hm(e,r,s),s};let er=class extends Ze{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return _`

            <div class="${Xt(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};er.styles=ve`
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


    `;Tr([me({context:aa,subscribe:!0}),C()],er.prototype,"duration",2);Tr([me({context:Ls,subscribe:!0}),C()],er.prototype,"currentFrame",2);Tr([me({context:ia,subscribe:!0}),C()],er.prototype,"ms",2);Tr([A({type:Number,reflect:!0,attribute:!0})],er.prototype,"start",2);Tr([A({type:Number,reflect:!0,attribute:!0})],er.prototype,"end",2);Tr([C()],er.prototype,"active",2);er=Tr([ne("file-marker-timeline")],er);var um=Object.defineProperty,pm=Object.getOwnPropertyDescriptor,zl=(t,e,r,i)=>{for(var s=i>1?void 0:i?pm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&um(e,r,s),s};let ys=class extends Ze{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return _`
            <div>


            ${this.markers.map(t=>t.active?_`<div class="item">
                    <h2>${t.label}</h2>
                    ${Ct(t.innerHTML)}
                    </div>`:G)}

            
            
            </div>

          `}};ys.styles=ve`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;zl([me({context:la,subscribe:!0})],ys.prototype,"markers",2);ys=zl([ne("file-marks-content")],ys);var fm=Object.defineProperty,mm=Object.getOwnPropertyDescriptor,pa=(t,e,r,i)=>{for(var s=i>1?void 0:i?mm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&fm(e,r,s),s};let ki=class extends zt{updated(e){if(super.updated(e),e.has("analysis")){const r=e.get("analysis");r&&r.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return _`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const r=e.target,i=r.value!==""?r.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};ki.styles=ve`

    
    `;pa([A()],ki.prototype,"analysis",2);pa([C()],ki.prototype,"name",2);ki=pa([ne("analysis-name")],ki);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*gm(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}var vm=Object.defineProperty,ym=Object.getOwnPropertyDescriptor,fa=(t,e,r,i)=>{for(var s=i>1?void 0:i?ym(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&vm(e,r,s),s};let $i=class extends zt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const r=this.analysis;this.color=r.initialColor,r.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(t){return _`<i style="background-color: ${t};" aria-hidden></i><span>${t}</span>`}render(){return this.color===void 0?G:_`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${gm(as,t=>_`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(t)}}>
                        ${this.renderColor(t)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};$i.styles=ve`

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
    
    `;fa([A()],$i.prototype,"analysis",2);fa([C()],$i.prototype,"color",2);$i=fa([ne("analysis-color")],$i);var bm=Object.defineProperty,wm=Object.getOwnPropertyDescriptor,St=(t,e,r,i)=>{for(var s=i>1?void 0:i?wm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&bm(e,r,s),s};let ut=class extends zt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onMoveOrResize.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height,this.right=r.left+r.width,this.bottom=r.top+r.height,this.maxX=r.file.width,this.maxY=r.file.height,r.onMoveOrResize.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return _`

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
    
        
        `}};ut.styles=ve`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;St([A()],ut.prototype,"analysis",2);St([C()],ut.prototype,"color",2);St([C()],ut.prototype,"top",2);St([C()],ut.prototype,"left",2);St([C()],ut.prototype,"width",2);St([C()],ut.prototype,"height",2);St([C()],ut.prototype,"type",2);St([C()],ut.prototype,"right",2);St([C()],ut.prototype,"bottom",2);St([C()],ut.prototype,"maxX",2);St([C()],ut.prototype,"maxY",2);ut=St([ne("edit-area")],ut);var xm=Object.defineProperty,_m=Object.getOwnPropertyDescriptor,ri=(t,e,r,i)=>{for(var s=i>1?void 0:i?_m(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&xm(e,r,s),s};let vr=class extends zt{constructor(){super(...arguments),this.topInputRef=Me(),this.leftInputRef=Me()}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onMoveOrResize.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.maxX=r.file.width,this.maxY=r.file.height,r.onMoveOrResize.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return _`

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
        
        `}};vr.styles=ve`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;ri([A()],vr.prototype,"analysis",2);ri([C()],vr.prototype,"top",2);ri([C()],vr.prototype,"left",2);ri([C()],vr.prototype,"maxX",2);ri([C()],vr.prototype,"maxY",2);vr=ri([ne("edit-point")],vr);var Cm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,js=(t,e,r,i)=>{for(var s=i>1?void 0:i?km(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Cm(e,r,s),s};let Si=class extends zt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetName.delete(this.UUID);const r=this.analysis;this.name=r.name,this.type=r.getType(),r.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return _`

            <thermal-dialog label="Edit ${this.type} analysis">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof $r?_`<edit-point .analysis=${this.analysis}></edit-point>`:_`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};js([A()],Si.prototype,"analysis",2);js([C()],Si.prototype,"name",2);js([C()],Si.prototype,"type",2);Si=js([ne("file-analysis-edit")],Si);var $m=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,nr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&$m(e,r,s),s};let Dt=class extends Ze{constructor(){super(...arguments),this.graphWidth=0,this.container=Me(),this.graphRef=Me(),this.graphs={values:[[]],colors:[]},this.left=0,this.top=0,this.width=0,this.height=0}onInstanceCreated(t){t.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=t.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(r=>{this.graphWidth=r[0].contentRect.width,this.graphRef.value&&(this.left=this.graphRef.value.left,this.top=this.graphRef.value.top,this.width=this.graphRef.value.w,this.height=this.graphRef.value.h)}).observe(this.container.value))}onFailure(){}update(t){super.update(t),this.graphRef.value&&(this.left=this.graphRef.value.left,this.top=this.graphRef.value.top,this.width=this.graphRef.value.w,this.height=this.graphRef.value.h,console.log(this.graphRef.value.chartWrapper))}render(){return _`

            <div style="position: relative; background-color: white;">

            <div style="position: absolute; top:${this.top}px; left: ${this.left}px; width: ${this.width}px; height: ${this.height}px;">
                ${this.cursor&&_`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${je(this.container)}>
                ${this.graphs.colors.length>0?_`<thermal-chart 
                        ${je(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:G}
            </div>

            

            </div>
        
        `}};Dt.styles=ve`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 500px;
        }
    `;nr([C()],Dt.prototype,"graphWidth",2);nr([C()],Dt.prototype,"graphs",2);nr([me({context:sa,subscribe:!0})],Dt.prototype,"cursor",2);nr([me({context:na,subscribe:!0})],Dt.prototype,"cursorSetter",2);nr([C()],Dt.prototype,"left",2);nr([C()],Dt.prototype,"top",2);nr([C()],Dt.prototype,"width",2);nr([C()],Dt.prototype,"height",2);Dt=nr([ne("file-analysis-graph")],Dt);var Pm=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,ar=(t,e,r,i)=>{for(var s=i>1?void 0:i?Am(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Pm(e,r,s),s};let Tt=class extends zt{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const r=this.analysis;this.name=r.name,this.selected=r.selected,this.color=r.initialColor,this.dimension=r.width+"x"+r.height,this.value={min:r.min,max:r.max,avg:r.avg},r.file.timeline.isSequence?this.may=r instanceof $r?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:r.graph.state.MIN,max:r.graph.state.MAX,avg:r.graph.state.AVG},r.onMoveOrResize.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),r.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),r.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),r.onSelected.set(this.UUID,()=>{this.selected=!0}),r.onDeselected.set(this.UUID,()=>{this.selected=!1}),r.onSetInitialColor.set(this.UUID,i=>{this.color=i}),r.onSetName.set(this.UUID,i=>{this.name=i})}}valueOrNothing(t){return t===void 0?"-":t.toFixed(2)+" °C"}renderCell(t,e,r,i){return _`
            <td class="${e?"may":"mayNot"} ${r?"active":"inactive"}">

                ${e?_`
                        <button
                            @click=${i}
                            style="background-color: ${r?this.color:"transparent"};"
                            title="${r?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(t)}
                        </button>
                    `:this.valueOrNothing(t)}

            </td>
        `}render(){return _`
        
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
        
        `}};Tt.styles=ve`
    
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

    `;ar([A()],Tt.prototype,"analysis",2);ar([C()],Tt.prototype,"value",2);ar([C()],Tt.prototype,"graph",2);ar([C()],Tt.prototype,"may",2);ar([C()],Tt.prototype,"dimension",2);ar([C()],Tt.prototype,"color",2);ar([A({type:Boolean,reflect:!0,attribute:!0})],Tt.prototype,"selected",2);ar([C()],Tt.prototype,"name",2);Tt=ar([ne("file-analysis-table-row")],Tt);var Om=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,Ws=(t,e,r,i)=>{for(var s=i>1?void 0:i?Em(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Om(e,r,s),s};let Qr=class extends Ze{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(t){console.log(t)}onInstanceCreated(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?G:_`

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
                        ${this.hasHighlightedData?_`<thermal-button variant="foreground" @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:G}
                    </th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(t=>_`
                                <file-analysis-table-row
                                    .analysis=${t}
                                ></file-analysis-table-row>
                            `)}
            
            </tbody>

            </table>

            </div>
        `}};Qr.styles=ve`
    
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

        



    `;Ws([C()],Qr.prototype,"analysis",2);Ws([C()],Qr.prototype,"allSelected",2);Ws([C()],Qr.prototype,"hasHighlightedData",2);Qr=Ws([ne("file-analysis-table")],Qr);var Dm=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,Rr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Tm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Dm(e,r,s),s};let tr=class extends Ze{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return _`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?_`<file-share-button ></file-share-button>`:G}
              ${this.showabout===!0?_`<app-info-button ></app-info-button>`:G}
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
    `}};tr.styles=ve`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Rr([A({type:Number})],tr.prototype,"from",2);Rr([A({type:Number})],tr.prototype,"to",2);Rr([A({type:Number})],tr.prototype,"speed",2);Rr([A({type:String,reflect:!0,attribute:!0})],tr.prototype,"showembed",2);Rr([A({type:String,reflect:!0,attribute:!0})],tr.prototype,"showabout",2);Rr([A({type:String,reflect:!0,attribute:!0})],tr.prototype,"showfullscreen",2);tr=Rr([ne("file-app")],tr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn=t=>t??G;var Rm=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,ii=(t,e,r,i)=>{for(var s=i>1?void 0:i?Lm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Rm(e,r,s),s};let Er=class extends zt{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?G:_`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${Sn(this.from)} to=${Sn(this.to)} speed=${Sn(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};ii([A({type:String,reflect:!0})],Er.prototype,"palette",2);ii([A({type:Number})],Er.prototype,"from",2);ii([A({type:Number})],Er.prototype,"to",2);ii([A({type:Number,reflect:!0})],Er.prototype,"speed",2);ii([A({type:String,reflect:!0})],Er.prototype,"url",2);Er=ii([ne("thermal-file-app")],Er);var Mm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,ma=(t,e,r,i)=>{for(var s=i>1?void 0:i?Um(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Mm(e,r,s),s};let Pi=class extends zt{constructor(){super(...arguments),this.dropinRef=Me(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return _`

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

                            ${this.loaded===!0?_`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:G}

                            <file-dropin ${je(this.dropinRef)}>

                                <file-app showembed="false" showabout="false"></file-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};Pi.styles=ve`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;ma([C()],Pi.prototype,"dropinRef",2);ma([C()],Pi.prototype,"loaded",2);Pi=ma([ne("thermal-dropin-app")],Pi);const Pn=window.matchMedia("(prefers-color-scheme: dark)"),ga="thermal-dark-mode",_o=()=>{document.body.classList.add(ga)},Im=()=>{document.body.classList.remove(ga)},Fm=()=>{Pn.matches&&_o();const t=e=>{e.matches?_o():Im()};Pn.addEventListener("change",t),Pn.addListener(t)},jm=()=>{const t=document.createElement("link");t.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(t)},Wm=Wn.toString().replaceAll(".","-"),Nm=t=>`thermal__${t}__${Wm}`,Co=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",Nm(t)),r.innerHTML=e,document.head.appendChild(r)},Bm=()=>{Co("rootVariables",`

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


            
        
        `),Co("darkModeOverrides",`
        
            body.${ga} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};jm();console.info(`@labir/embed ${Wn}
    Author: ${fc}
    `);Fm();Bm();document.addEventListener("DOMContentLoaded",()=>{});
