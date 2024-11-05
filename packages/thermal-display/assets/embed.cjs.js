"use strict";var _h=Object.defineProperty;var $h=(t,e,r)=>e in t?_h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var o=(t,e,r)=>($h(t,typeof e!="symbol"?e+"":e,r),r);const Yn="1.2.47",Ch="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=globalThis,Gn=cs.ShadowRoot&&(cs.ShadyCSS===void 0||cs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xn=Symbol(),qa=new WeakMap;let Io=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Xn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Gn&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=qa.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&qa.set(r,e))}return e}toString(){return this.cssText}};const kh=t=>new Io(typeof t=="string"?t:t+"",void 0,Xn),me=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Io(r,t,Xn)},Ph=(t,e)=>{if(Gn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=cs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Ka=Gn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return kh(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ah,defineProperty:Oh,getOwnPropertyDescriptor:Dh,getOwnPropertyNames:Eh,getOwnPropertySymbols:Th,getPrototypeOf:Lh}=Object,wr=globalThis,Za=wr.trustedTypes,Rh=Za?Za.emptyScript:"",Cn=wr.reactiveElementPolyfillSupport,yi=(t,e)=>t,ms={toAttribute(t,e){switch(e){case Boolean:t=t?Rh:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},qn=(t,e)=>!Ah(t,e),Qa={attribute:!0,type:String,converter:ms,reflect:!1,hasChanged:qn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),wr.litPropertyMetadata??(wr.litPropertyMetadata=new WeakMap);let Hr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Qa){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&Oh(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=Dh(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qa}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;const e=Lh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){const r=this.properties,i=[...Eh(r),...Th(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(Ka(s))}else e!==void 0&&r.push(Ka(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ph(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ms).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:ms;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??qn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Hr.elementStyles=[],Hr.shadowRootOptions={mode:"open"},Hr[yi("elementProperties")]=new Map,Hr[yi("finalized")]=new Map,Cn==null||Cn({ReactiveElement:Hr}),(wr.reactiveElementVersions??(wr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=globalThis,gs=bi.trustedTypes,Ja=gs?gs.createPolicy("lit-html",{createHTML:t=>t}):void 0,Fo="$lit$",br=`lit$${Math.random().toFixed(9).slice(2)}$`,No="?"+br,Mh=`<${No}>`,Ur=document,Si=()=>Ur.createComment(""),_i=t=>t===null||typeof t!="object"&&typeof t!="function",zo=Array.isArray,Uh=t=>zo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",kn=`[ 	
\f\r]`,fi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eo=/-->/g,to=/>/g,Tr=RegExp(`>|${kn}(?:([^\\s"'>=/]+)(${kn}*=${kn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ro=/'/g,io=/"/g,jo=/^(?:script|style|textarea|title)$/i,Ih=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),v=Ih(1),xr=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),so=new WeakMap,Rr=Ur.createTreeWalker(Ur,129);function Wo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ja!==void 0?Ja.createHTML(e):e}const Fh=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",a=fi;for(let l=0;l<r;l++){const c=t[l];let p,f,m=-1,y=0;for(;y<c.length&&(a.lastIndex=y,f=a.exec(c),f!==null);)y=a.lastIndex,a===fi?f[1]==="!--"?a=eo:f[1]!==void 0?a=to:f[2]!==void 0?(jo.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=Tr):f[3]!==void 0&&(a=Tr):a===Tr?f[0]===">"?(a=s??fi,m=-1):f[1]===void 0?m=-2:(m=a.lastIndex-f[2].length,p=f[1],a=f[3]===void 0?Tr:f[3]==='"'?io:ro):a===io||a===ro?a=Tr:a===eo||a===to?a=fi:(a=Tr,s=void 0);const S=a===Tr&&t[l+1].startsWith("/>")?" ":"";n+=a===fi?c+Mh:m>=0?(i.push(p),c.slice(0,m)+Fo+c.slice(m)+br+S):c+br+(m===-2?l:S)}return[Wo(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let Mn=class Ho{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,c=this.parts,[p,f]=Fh(e,r);if(this.el=Ho.createElement(p,i),Rr.currentNode=this.el.content,r===2){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=Rr.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const m of s.getAttributeNames())if(m.endsWith(Fo)){const y=f[a++],S=s.getAttribute(m).split(br),C=/([.?@])?(.*)/.exec(y);c.push({type:1,index:n,name:C[2],strings:S,ctor:C[1]==="."?zh:C[1]==="?"?jh:C[1]==="@"?Wh:Os}),s.removeAttribute(m)}else m.startsWith(br)&&(c.push({type:6,index:n}),s.removeAttribute(m));if(jo.test(s.tagName)){const m=s.textContent.split(br),y=m.length-1;if(y>0){s.textContent=gs?gs.emptyScript:"";for(let S=0;S<y;S++)s.append(m[S],Si()),Rr.nextNode(),c.push({type:2,index:++n});s.append(m[y],Si())}}}else if(s.nodeType===8)if(s.data===No)c.push({type:2,index:n});else{let m=-1;for(;(m=s.data.indexOf(br,m+1))!==-1;)c.push({type:7,index:n}),m+=br.length-1}n++}}static createElement(e,r){const i=Ur.createElement("template");return i.innerHTML=e,i}};function Yr(t,e,r=t,i){var a,l;if(e===xr)return e;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=_i(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=Yr(t,s._$AS(t,e.values),s,i)),e}let Nh=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Ur).importNode(r,!0);Rr.currentNode=s;let n=Rr.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let p;c.type===2?p=new Ui(n,n.nextSibling,this,e):c.type===1?p=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(p=new Hh(n,this,e)),this._$AV.push(p),c=i[++l]}a!==(c==null?void 0:c.index)&&(n=Rr.nextNode(),a++)}return Rr.currentNode=Ur,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class Ui{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Yr(this,e,r),_i(e)?e===z||e==null||e===""?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==xr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Uh(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==z&&_i(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ur.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Mn.createElement(Wo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new Nh(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=so.get(e.strings);return r===void 0&&so.set(e.strings,r=new Mn(e)),r}k(e){zo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new Ui(this.S(Si()),this.S(Si()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let Os=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}_$AI(e,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Yr(this,e,r,0),a=!_i(e)||e!==this._$AH&&e!==xr,a&&(this._$AH=e);else{const l=e;let c,p;for(e=n[0],c=0;c<n.length-1;c++)p=Yr(this,l[i+c],r,c),p===xr&&(p=this._$AH[c]),a||(a=!_i(p)||p!==this._$AH[c]),p===z?e=z:e!==z&&(e+=(p??"")+n[c+1]),this._$AH[c]=p}a&&!s&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zh=class extends Os{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}};class jh extends Os{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}}class Wh extends Os{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Yr(this,e,r,0)??z)===xr)return;const i=this._$AH,s=e===z&&i!==z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==z&&(i===z||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let Hh=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Yr(this,e)}};const Pn=bi.litHtmlPolyfillSupport;Pn==null||Pn(Mn,Ui),(bi.litHtmlVersions??(bi.litHtmlVersions=[])).push("3.1.4");const Bh=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Ui(e.insertBefore(Si(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends Hr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return xr}};var Uo;at._$litElement$=!0,at.finalized=!0,(Uo=globalThis.litElementHydrateSupport)==null||Uo.call(globalThis,{LitElement:at});const An=globalThis.litElementPolyfillSupport;An==null||An({LitElement:at});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vh={attribute:!0,type:String,converter:ms,reflect:!1,hasChanged:qn},Yh=(t=Vh,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,c,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const c=this[a];e.call(this,l),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+i)};function b(t){return(e,r)=>typeof r=="object"?Yh(t,e,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(t){return b({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gh=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ii(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Gh(e,r,{get(){var c;const a=(c=this.renderRoot)==null?void 0:c.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Bo={};function Xh(t){if(process.env.NODE_ENV!=="production"&&t!==Bo)throw new Error("Bad secret")}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function qh(t,e){if(!Zh(t)||e+1!==t.length)throw new TypeError(`
    ############################## ERROR ##############################

    It looks like you are trying to call a template tag function (fn\`...\`)
    using the normal function syntax (fn(...)), which is not supported.

    The functions in the safevalues library are not designed to be called
    like normal functions, and doing so invalidates the security guarantees
    that safevalues provides.

    If you are stuck and not sure how to proceed, please reach out to us
    instead through:
     - https://github.com/google/safevalues/issues

    ############################## ERROR ##############################`)}function vi(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function os(t){return t.toString().indexOf("`")===-1}const no=os(t=>t``)||os(t=>t`\0`)||os(t=>t`\n`)||os(t=>t`\u0000`),Kh=vi``&&vi`\0`&&vi`\n`&&vi`\u0000`;function Zh(t){return!(!Array.isArray(t)||!Array.isArray(t.raw)||t.length!==t.raw.length||!no&&t===t.raw||(!no||Kh)&&!vi(t))}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Qh="google#safe";function Jh(){if(typeof window<"u")return window.trustedTypes}function Vo(){var t;return(t=Jh())!==null&&t!==void 0?t:null}let ls;function ec(){var t,e;if(ls===void 0)try{ls=(e=(t=Vo())===null||t===void 0?void 0:t.createPolicy(Qh,{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r}))!==null&&e!==void 0?e:null}catch{ls=null}return ls}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Yo{constructor(e,r){Xh(r),this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function ao(t){var e;const r=t,i=(e=ec())===null||e===void 0?void 0:e.createScriptURL(r);return i??new Yo(r,Bo)}function tc(t){var e;if(!((e=Vo())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof Yo)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let r="";throw process.env.NODE_ENV!=="production"&&(r="Unexpected type when unwrapping TrustedResourceUrl"),new Error(r)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function rc(t){if(!(/^https:\/\//.test(t)||/^\/\//.test(t)))return!1;const e=t.indexOf("//")+2,r=t.indexOf("/",e);if(r<=e)throw new Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");const i=t.substring(e,r);if(!/^[0-9a-z.:-]+$/i.test(i))throw new Error("The origin contains unsupported characters.");if(!/^[^:]*(:[0-9]+)?$/i.test(i))throw new Error("Invalid port number.");if(!/(^|\.)[a-z][^.]*$/i.test(i))throw new Error("The top-level domain must start with a letter.");return!0}function ic(t){if(!/^about:blank/.test(t))return!1;if(t!=="about:blank"&&!/^about:blank#/.test(t))throw new Error("The about url is invalid.");return!0}function sc(t){if(!/^\//.test(t))return!1;if(t==="/"||t.length>1&&t[1]!=="/"&&t[1]!=="\\")return!0;throw new Error("The path start in the url is invalid.")}function nc(t,...e){if(process.env.NODE_ENV!=="production"&&qh(t,e.length),e.length===0)return ao(t[0]);const r=t[0].toLowerCase();if(process.env.NODE_ENV!=="production"){if(/^data:/.test(r))throw new Error("Data URLs cannot have expressions in the template literal input.");if(!rc(r)&&!sc(r)&&!ic(r))throw new Error("Trying to interpolate expressions in an unsupported url format.")}let i=t[0];for(let s=0;s<e.length;s++)i+=encodeURIComponent(e[s])+t[s+1];return ao(i)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function ac(t){var e;const r=t.document,i=(e=r.querySelector)===null||e===void 0?void 0:e.call(r,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function oc(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,r=ac(e||window);r&&t.setAttribute("nonce",r)}function lc(t,e,r){t.src=tc(e),oc(t)}/**
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
 */const hc=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),lc(r,nc`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function Go(t={}){await hc;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function oo(t){if(await Go(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function cc(t){return await Go(),new google.visualization.ChartWrapper({container:t})}function Ut(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Ir(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Xo=6048e5,dc=864e5;let uc={};function Ds(){return uc}function $i(t,e){var l,c,p,f;const r=Ds(),i=(e==null?void 0:e.weekStartsOn)??((c=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??r.weekStartsOn??((f=(p=r.locale)==null?void 0:p.options)==null?void 0:f.weekStartsOn)??0,s=Ut(t),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function vs(t){return $i(t,{weekStartsOn:1})}function qo(t){const e=Ut(t),r=e.getFullYear(),i=Ir(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=vs(i),n=Ir(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=vs(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function lo(t){const e=Ut(t);return e.setHours(0,0,0,0),e}function ho(t){const e=Ut(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function pc(t,e){const r=lo(t),i=lo(e),s=+r-ho(r),n=+i-ho(i);return Math.round((s-n)/dc)}function fc(t){const e=qo(t),r=Ir(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),vs(r)}function mc(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ko(t){if(!mc(t)&&typeof t!="number")return!1;const e=Ut(t);return!isNaN(Number(e))}function gc(t){const e=Ut(t),r=Ir(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const vc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},yc=(t,e,r)=>{let i;const s=vc[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function On(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const bc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},xc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Sc={date:On({formats:bc,defaultWidth:"full"}),time:On({formats:wc,defaultWidth:"full"}),dateTime:On({formats:xc,defaultWidth:"full"})},_c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$c=(t,e,r,i)=>_c[t];function mi(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const Cc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},kc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Pc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ac={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Oc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Dc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ec=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Tc={ordinalNumber:Ec,era:mi({values:Cc,defaultWidth:"wide"}),quarter:mi({values:kc,defaultWidth:"wide",argumentCallback:t=>t-1}),month:mi({values:Pc,defaultWidth:"wide"}),day:mi({values:Ac,defaultWidth:"wide"}),dayPeriod:mi({values:Oc,defaultWidth:"wide",formattingValues:Dc,defaultFormattingWidth:"wide"})};function gi(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(l)?Rc(l,m=>m.test(a)):Lc(l,m=>m.test(a));let p;p=t.valueCallback?t.valueCallback(c):c,p=r.valueCallback?r.valueCallback(p):p;const f=e.slice(a.length);return{value:p,rest:f}}}function Lc(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Rc(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Mc(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const Uc=/^(\d+)(th|st|nd|rd)?/i,Ic=/\d+/i,Fc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Nc={any:[/^b/i,/^(a|c)/i]},zc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},jc={any:[/1/i,/2/i,/3/i,/4/i]},Wc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Hc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Bc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Vc={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Yc={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Gc={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Xc={ordinalNumber:Mc({matchPattern:Uc,parsePattern:Ic,valueCallback:t=>parseInt(t,10)}),era:gi({matchPatterns:Fc,defaultMatchWidth:"wide",parsePatterns:Nc,defaultParseWidth:"any"}),quarter:gi({matchPatterns:zc,defaultMatchWidth:"wide",parsePatterns:jc,defaultParseWidth:"any",valueCallback:t=>t+1}),month:gi({matchPatterns:Wc,defaultMatchWidth:"wide",parsePatterns:Hc,defaultParseWidth:"any"}),day:gi({matchPatterns:Bc,defaultMatchWidth:"wide",parsePatterns:Vc,defaultParseWidth:"any"}),dayPeriod:gi({matchPatterns:Yc,defaultMatchWidth:"any",parsePatterns:Gc,defaultParseWidth:"any"})},qc={code:"en-US",formatDistance:yc,formatLong:Sc,formatRelative:$c,localize:Tc,match:Xc,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Kc(t){const e=Ut(t);return pc(e,gc(e))+1}function Zc(t){const e=Ut(t),r=+vs(e)-+fc(e);return Math.round(r/Xo)+1}function Zo(t,e){var f,m,y,S;const r=Ut(t),i=r.getFullYear(),s=Ds(),n=(e==null?void 0:e.firstWeekContainsDate)??((m=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??s.firstWeekContainsDate??((S=(y=s.locale)==null?void 0:y.options)==null?void 0:S.firstWeekContainsDate)??1,a=Ir(t,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=$i(a,e),c=Ir(t,0);c.setFullYear(i,0,n),c.setHours(0,0,0,0);const p=$i(c,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function Qc(t,e){var l,c,p,f;const r=Ds(),i=(e==null?void 0:e.firstWeekContainsDate)??((c=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??r.firstWeekContainsDate??((f=(p=r.locale)==null?void 0:p.options)==null?void 0:f.firstWeekContainsDate)??1,s=Zo(t,e),n=Ir(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),$i(n,e)}function Jc(t,e){const r=Ut(t),i=+$i(r,e)-+Qc(r,e);return Math.round(i/Xo)+1}function xe(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const yr={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return xe(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):xe(r+1,2)},d(t,e){return xe(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return xe(t.getHours()%12||12,e.length)},H(t,e){return xe(t.getHours(),e.length)},m(t,e){return xe(t.getMinutes(),e.length)},s(t,e){return xe(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return xe(s,e.length)}},jr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},co={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return yr.y(t,e)},Y:function(t,e,r,i){const s=Zo(t,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return xe(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):xe(n,e.length)},R:function(t,e){const r=qo(t);return xe(r,e.length)},u:function(t,e){const r=t.getFullYear();return xe(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return xe(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return xe(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return yr.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return xe(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Jc(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):xe(s,e.length)},I:function(t,e,r){const i=Zc(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):xe(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):yr.d(t,e)},D:function(t,e,r){const i=Kc(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):xe(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return xe(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return xe(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return xe(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=jr.noon:i===0?s=jr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=jr.evening:i>=12?s=jr.afternoon:i>=4?s=jr.morning:s=jr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return yr.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):yr.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):xe(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):xe(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):yr.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):yr.s(t,e)},S:function(t,e){return yr.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return po(i);case"XXXX":case"XX":return Lr(i);case"XXXXX":case"XXX":default:return Lr(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return po(i);case"xxxx":case"xx":return Lr(i);case"xxxxx":case"xxx":default:return Lr(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+uo(i,":");case"OOOO":default:return"GMT"+Lr(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+uo(i,":");case"zzzz":default:return"GMT"+Lr(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return xe(i,e.length)},T:function(t,e,r){const i=t.getTime();return xe(i,e.length)}};function uo(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+xe(n,2)}function po(t,e){return t%60===0?(t>0?"-":"+")+xe(Math.abs(t)/60,2):Lr(t,e)}function Lr(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=xe(Math.trunc(i/60),2),n=xe(i%60,2);return r+s+e+n}const fo=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Qo=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},ed=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return fo(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",fo(i,e)).replace("{{time}}",Qo(s,e))},td={p:Qo,P:ed},rd=/^D+$/,id=/^Y+$/,sd=["D","DD","YY","YYYY"];function nd(t){return rd.test(t)}function ad(t){return id.test(t)}function od(t,e,r){const i=ld(t,e,r);if(console.warn(i),sd.includes(t))throw new RangeError(i)}function ld(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const hd=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dd=/^'([^]*?)'?$/,ud=/''/g,pd=/[a-zA-Z]/;function Sr(t,e,r){var f,m,y,S;const i=Ds(),s=i.locale??qc,n=i.firstWeekContainsDate??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=i.weekStartsOn??((S=(y=i.locale)==null?void 0:y.options)==null?void 0:S.weekStartsOn)??0,l=Ut(t);if(!Ko(l))throw new RangeError("Invalid time value");let c=e.match(cd).map(C=>{const P=C[0];if(P==="p"||P==="P"){const k=td[P];return k(C,s.formatLong)}return C}).join("").match(hd).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const P=C[0];if(P==="'")return{isToken:!1,value:fd(C)};if(co[P])return{isToken:!0,value:C};if(P.match(pd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return{isToken:!1,value:C}});s.localize.preprocessor&&(c=s.localize.preprocessor(l,c));const p={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return c.map(C=>{if(!C.isToken)return C.value;const P=C.value;(ad(P)||nd(P))&&od(P,e,String(t));const k=co[P[0]];return k(l,P,s.localize,p)}).join("")}function fd(t){const e=t.match(dd);return e?e[1].replace(ud,"'"):t}function Dn(t,e){const r=Ut(t);if(!Ko(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const c=xe(r.getDate(),2),p=xe(r.getMonth()+1,2);n=`${xe(r.getFullYear(),4)}${a}${p}${a}${c}`}if(s!=="date"){const c=xe(r.getHours(),2),p=xe(r.getMinutes(),2),f=xe(r.getSeconds(),2);n=`${n}${n===""?"":" "}${c}${l}${p}${l}${f}`}return n}var md={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},gd=`\r
`,vd="\uFEFF",Es=t=>Object.assign({},md,t);class yd extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class bd extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class wd extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class xd extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var ni=t=>t,$t=t=>t,wi=ni,Ts=ni,Gr=ni,mo=ni,go=ni,Sd=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},_d=t=>mo(typeof t=="object"?t.key:t),$d=t=>go(typeof t=="object"?t.displayLabel:t),Cd=(t,...e)=>e.reduce((r,i)=>i(r),t),kd=t=>e=>t.useBom?Ts($t(e)+vd):e,Pd=t=>e=>t.showTitle?Kn(Ts($t(e)+t.title))(Gr("")):e,Kn=t=>e=>Ts($t(t)+$t(e)+gd),Jo=t=>(e,r)=>Ad(t)(Gr($t(e)+$t(r))),Ad=t=>e=>ni($t(e)+t.fieldSeparator),Od=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new bd("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Gr("");for(let s=0;s<e.length;s++){const n=$d(e[s]);i=Jo(t)(i,el(t,$t(n)))}return i=Gr($t(i).slice(0,-1)),Kn(r)(i)},Dd=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=Gr("");for(let l=0;l<e.length;l++){const c=_d(e[l]),p=r[n][$t(c)];a=Jo(t)(a,el(t,p))}a=Gr($t(a).slice(0,-1)),s=Kn(s)(a)}return s},Ed=t=>+t===t&&(!isFinite(t)||!!(t%1)),Td=(t,e)=>{if(Ed(e)){if(t.decimalSeparator==="locale")return wi(e.toLocaleString());if(t.decimalSeparator)return wi(e.toString().replace(".",t.decimalSeparator))}return wi(e.toString())},ds=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+Sd(e,t.quoteCharacter)+t.quoteCharacter),wi(r)},Ld=(t,e)=>{const r=e?"true":"false";return wi(t.boolDisplay[r])},Rd=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?ds(t,t.replaceUndefinedWith+""):e===null?ds(t,"null"):ds(t,""),el=(t,e)=>{if(typeof e=="number")return Td(t,e);if(typeof e=="string")return ds(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Ld(t,e);if(e===null||typeof e>"u")return Rd(t,e);throw new xd(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Md=t=>e=>{const r=Es(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=Cd(Ts(""),kd(r),Pd(r),Od(r,i),Dd(r,i,e));if($t(s).length<1)throw new yd("Output is empty. Is your data formatted correctly?");return s},Ud=t=>e=>{const r=Es(t),i=$t(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Id=t=>e=>{if(!window)throw new wd("Downloading only supported in a browser environment.");const r=Ud(t)(e),i=Es(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nd(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var Un={exports:{}};const zd={},jd=Object.freeze(Object.defineProperty({__proto__:null,default:zd},Symbol.toStringTag,{value:"Module"})),Wr=Nd(jd);/**
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
 */(function(t,e){(function(r,i){i(e)})(Fd,function(r){var i={},s={exports:{}};(function(A){var T=function(ee){return typeof ee<"u"&&ee.versions!=null&&ee.versions.node!=null&&ee+""=="[object process]"};A.exports.isNode=T,A.exports.platform=typeof process<"u"&&T(process)?"node":"browser";var L=A.exports.platform==="node"&&Wr;A.exports.isMainThread=A.exports.platform==="node"?(!L||L.isMainThread)&&!process.connected:typeof Window<"u",A.exports.cpus=A.exports.platform==="browser"?self.navigator.hardwareConcurrency:Wr.cpus().length})(s);var n=s.exports,a={},l;function c(){if(l)return a;l=1;function A(ee,ke){var oe=this;if(!(this instanceof A))throw new SyntaxError("Constructor must be called with the new operator");if(typeof ee!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Re=[],Se=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var H=function(de,ye){Re.push(de),Se.push(ye)};this.then=function(O,de){return new A(function(ye,qe){var st=O?T(O,ye,qe):ye,Gt=de?T(de,ye,qe):qe;H(st,Gt)},oe)};var _e=function(de){return oe.resolved=!0,oe.rejected=!1,oe.pending=!1,Re.forEach(function(ye){ye(de)}),H=function(qe,st){qe(de)},_e=$=function(){},oe},$=function(de){return oe.resolved=!1,oe.rejected=!0,oe.pending=!1,Se.forEach(function(ye){ye(de)}),H=function(qe,st){st(de)},_e=$=function(){},oe};this.cancel=function(){return ke?ke.cancel():$(new L),oe},this.timeout=function(O){if(ke)ke.timeout(O);else{var de=setTimeout(function(){$(new R("Promise timed out after "+O+" ms"))},O);oe.always(function(){clearTimeout(de)})}return oe},ee(function(O){_e(O)},function(O){$(O)})}function T(ee,ke,oe){return function(Re){try{var Se=ee(Re);Se&&typeof Se.then=="function"&&typeof Se.catch=="function"?Se.then(ke,oe):ke(Se)}catch(H){oe(H)}}}A.prototype.catch=function(ee){return this.then(null,ee)},A.prototype.always=function(ee){return this.then(ee,ee)},A.all=function(ee){return new A(function(ke,oe){var Re=ee.length,Se=[];Re?ee.forEach(function(H,_e){H.then(function($){Se[_e]=$,Re--,Re==0&&ke(Se)},function($){Re=0,oe($)})}):ke(Se)})},A.defer=function(){var ee={};return ee.promise=new A(function(ke,oe){ee.resolve=ke,ee.reject=oe}),ee};function L(ee){this.message=ee||"promise cancelled",this.stack=new Error().stack}L.prototype=new Error,L.prototype.constructor=Error,L.prototype.name="CancellationError",A.CancellationError=L;function R(ee){this.message=ee||"timeout exceeded",this.stack=new Error().stack}return R.prototype=new Error,R.prototype.constructor=Error,R.prototype.name="TimeoutError",A.TimeoutError=R,a.Promise=A,a}function p(A,T){(T==null||T>A.length)&&(T=A.length);for(var L=0,R=Array(T);L<T;L++)R[L]=A[L];return R}function f(A,T){var L=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(!L){if(Array.isArray(A)||(L=I(A))||T){L&&(A=L);var R=0,ee=function(){};return{s:ee,n:function(){return R>=A.length?{done:!0}:{done:!1,value:A[R++]}},e:function(Se){throw Se},f:ee}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ke,oe=!0,Re=!1;return{s:function(){L=L.call(A)},n:function(){var Se=L.next();return oe=Se.done,Se},e:function(Se){Re=!0,ke=Se},f:function(){try{oe||L.return==null||L.return()}finally{if(Re)throw ke}}}}function m(A,T,L){return(T=P(T))in A?Object.defineProperty(A,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):A[T]=L,A}function y(A,T){var L=Object.keys(A);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(A);T&&(R=R.filter(function(ee){return Object.getOwnPropertyDescriptor(A,ee).enumerable})),L.push.apply(L,R)}return L}function S(A){for(var T=1;T<arguments.length;T++){var L=arguments[T]!=null?arguments[T]:{};T%2?y(Object(L),!0).forEach(function(R){m(A,R,L[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(L)):y(Object(L)).forEach(function(R){Object.defineProperty(A,R,Object.getOwnPropertyDescriptor(L,R))})}return A}function C(A,T){if(typeof A!="object"||!A)return A;var L=A[Symbol.toPrimitive];if(L!==void 0){var R=L.call(A,T||"default");if(typeof R!="object")return R;throw new TypeError("@@toPrimitive must return a primitive value.")}return(T==="string"?String:Number)(A)}function P(A){var T=C(A,"string");return typeof T=="symbol"?T:T+""}function k(A){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},k(A)}function I(A,T){if(A){if(typeof A=="string")return p(A,T);var L={}.toString.call(A).slice(8,-1);return L==="Object"&&A.constructor&&(L=A.constructor.name),L==="Map"||L==="Set"?Array.from(A):L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)?p(A,T):void 0}}var U={exports:{}},j={},B;function W(){return B||(B=1,j.validateOptions=function(T,L,R){if(T){var ee=T?Object.keys(T):[],ke=ee.find(function(Re){return!L.includes(Re)});if(ke)throw new Error('Object "'+R+'" contains an unknown option "'+ke+'"');var oe=L.find(function(Re){return Object.prototype[Re]&&!ee.includes(Re)});if(oe)throw new Error('Object "'+R+'" contains an inherited option "'+oe+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return T}},j.workerOptsNames=["credentials","name","type"],j.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],j.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),j}var he,E;function G(){return E||(E=1,he=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),he}var X;function Q(){if(X)return U.exports;X=1;var A=c(),T=A.Promise,L=n,R=W(),ee=R.validateOptions,ke=R.forkOptsNames,oe=R.workerThreadOptsNames,Re=R.workerOptsNames,Se="__workerpool-terminate__";function H(){var J=$();if(!J)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return J}function _e(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function $(){try{return Wr}catch(J){if(k(J)==="object"&&J!==null&&J.code==="MODULE_NOT_FOUND")return null;throw J}}function O(){if(L.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var J=new Blob([G()],{type:"text/javascript"});return window.URL.createObjectURL(J)}else return __dirname+"/worker.js"}function de(J,pe){if(pe.workerType==="web")return _e(),ye(J,pe.workerOpts,Worker);if(pe.workerType==="thread")return D=H(),qe(J,D,pe);if(pe.workerType==="process"||!pe.workerType)return st(J,Gt(pe),Wr);if(L.platform==="browser")return _e(),ye(J,pe.workerOpts,Worker);var D=$();return D?qe(J,D,pe):st(J,Gt(pe),Wr)}function ye(J,pe,D){ee(pe,Re,"workerOpts");var ae=new D(J,pe);return ae.isBrowserWorker=!0,ae.on=function(Pe,Ce){this.addEventListener(Pe,function(je){Ce(je.data)})},ae.send=function(Pe,Ce){this.postMessage(Pe,Ce)},ae}function qe(J,pe,D){var ae,Pe;ee(D==null?void 0:D.workerThreadOpts,oe,"workerThreadOpts");var Ce=new pe.Worker(J,S({stdout:(ae=D==null?void 0:D.emitStdStreams)!==null&&ae!==void 0?ae:!1,stderr:(Pe=D==null?void 0:D.emitStdStreams)!==null&&Pe!==void 0?Pe:!1},D==null?void 0:D.workerThreadOpts));return Ce.isWorkerThread=!0,Ce.send=function(je,be){this.postMessage(je,be)},Ce.kill=function(){return this.terminate(),!0},Ce.disconnect=function(){this.terminate()},D!=null&&D.emitStdStreams&&(Ce.stdout.on("data",function(je){return Ce.emit("stdout",je)}),Ce.stderr.on("data",function(je){return Ce.emit("stderr",je)})),Ce}function st(J,pe,D){ee(pe.forkOpts,ke,"forkOpts");var ae=D.fork(J,pe.forkArgs,pe.forkOpts),Pe=ae.send;return ae.send=function(Ce){return Pe.call(ae,Ce)},pe.emitStdStreams&&(ae.stdout.on("data",function(Ce){return ae.emit("stdout",Ce)}),ae.stderr.on("data",function(Ce){return ae.emit("stderr",Ce)})),ae.isChildProcess=!0,ae}function Gt(J){J=J||{};var pe=process.execArgv.join(" "),D=pe.indexOf("--inspect")!==-1,ae=pe.indexOf("--debug-brk")!==-1,Pe=[];return D&&(Pe.push("--inspect="+J.debugPort),ae&&Pe.push("--debug-brk")),process.execArgv.forEach(function(Ce){Ce.indexOf("--max-old-space-size")>-1&&Pe.push(Ce)}),Object.assign({},J,{forkArgs:J.forkArgs,forkOpts:Object.assign({},J.forkOpts,{execArgv:(J.forkOpts&&J.forkOpts.execArgv||[]).concat(Pe),stdio:J.emitStdStreams?"pipe":void 0})})}function St(J){for(var pe=new Error(""),D=Object.keys(J),ae=0;ae<D.length;ae++)pe[D[ae]]=J[D[ae]];return pe}function Ot(J,pe){if(Object.keys(J.processing).length===1){var D=Object.values(J.processing)[0];D.options&&typeof D.options.on=="function"&&D.options.on(pe)}}function gr(J,pe){var D=this,ae=pe||{};this.script=J||O(),this.worker=de(this.script,ae),this.debugPort=ae.debugPort,this.forkOpts=ae.forkOpts,this.forkArgs=ae.forkArgs,this.workerOpts=ae.workerOpts,this.workerThreadOpts=ae.workerThreadOpts,this.workerTerminateTimeout=ae.workerTerminateTimeout,J||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(be){Ot(D,{stdout:be.toString()})}),this.worker.on("stderr",function(be){Ot(D,{stderr:be.toString()})}),this.worker.on("message",function(be){if(!D.terminated)if(typeof be=="string"&&be==="ready")D.worker.ready=!0,Ce();else{var pt=be.id,Ke=D.processing[pt];Ke!==void 0&&(be.isEvent?Ke.options&&typeof Ke.options.on=="function"&&Ke.options.on(be.payload):(delete D.processing[pt],D.terminating===!0&&D.terminate(),be.error?Ke.resolver.reject(St(be.error)):Ke.resolver.resolve(be.result)))}});function Pe(be){D.terminated=!0;for(var pt in D.processing)D.processing[pt]!==void 0&&D.processing[pt].resolver.reject(be);D.processing=Object.create(null)}function Ce(){var be=f(D.requestQueue.splice(0)),pt;try{for(be.s();!(pt=be.n()).done;){var Ke=pt.value;D.worker.send(Ke.message,Ke.transfer)}}catch(qi){be.e(qi)}finally{be.f()}}var je=this.worker;this.worker.on("error",Pe),this.worker.on("exit",function(be,pt){var Ke=`Workerpool Worker terminated Unexpectedly
`;Ke+="    exitCode: `"+be+"`\n",Ke+="    signalCode: `"+pt+"`\n",Ke+="    workerpool.script: `"+D.script+"`\n",Ke+="    spawnArgs: `"+je.spawnargs+"`\n",Ke+="    spawnfile: `"+je.spawnfile+"`\n",Ke+="    stdout: `"+je.stdout+"`\n",Ke+="    stderr: `"+je.stderr+"`\n",Pe(new Error(Ke))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return gr.prototype.methods=function(){return this.exec("methods")},gr.prototype.exec=function(J,pe,D,ae){D||(D=T.defer());var Pe=++this.lastId;this.processing[Pe]={id:Pe,resolver:D,options:ae};var Ce={message:{id:Pe,method:J,params:pe},transfer:ae&&ae.transfer};this.terminated?D.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Ce.message,Ce.transfer):this.requestQueue.push(Ce);var je=this;return D.promise.catch(function(be){if(be instanceof T.CancellationError||be instanceof T.TimeoutError)return delete je.processing[Pe],je.terminateAndNotify(!0).then(function(){throw be},function(pt){throw pt});throw be})},gr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},gr.prototype.terminate=function(J,pe){var D=this;if(J){for(var ae in this.processing)this.processing[ae]!==void 0&&this.processing[ae].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof pe=="function"&&(this.terminationHandler=pe),this.busy())this.terminating=!0;else{var Pe=function(be){if(D.terminated=!0,D.cleaning=!1,D.worker!=null&&D.worker.removeAllListeners&&D.worker.removeAllListeners("message"),D.worker=null,D.terminating=!1,D.terminationHandler)D.terminationHandler(be,D);else if(be)throw be};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Pe(new Error("worker already killed!"));return}var Ce=setTimeout(function(){D.worker&&D.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Ce),D.worker&&(D.worker.killed=!0),Pe()}),this.worker.ready?this.worker.send(Se):this.requestQueue.push({message:Se}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Pe()}},gr.prototype.terminateAndNotify=function(J,pe){var D=T.defer();return pe&&D.promise.timeout(pe),this.terminate(J,function(ae,Pe){ae?D.reject(ae):D.resolve(Pe)}),D.promise},U.exports=gr,U.exports._tryRequireWorkerThreads=$,U.exports._setupProcessWorker=st,U.exports._setupBrowserWorker=ye,U.exports._setupWorkerThreadWorker=qe,U.exports.ensureWorkerThreads=H,U.exports}var ce,q;function se(){if(q)return ce;q=1;var A=65535;ce=T;function T(){this.ports=Object.create(null),this.length=0}return T.prototype.nextAvailableStartingAt=function(L){for(;this.ports[L]===!0;)L++;if(L>=A)throw new Error("WorkerPool debug port limit reached: "+L+">= "+A);return this.ports[L]=!0,this.length++,L},T.prototype.releasePort=function(L){delete this.ports[L],this.length--},ce}var ne,ue;function Le(){if(ue)return ne;ue=1;var A=c(),T=A.Promise,L=Q(),R=n,ee=se(),ke=new ee;function oe($,O){typeof $=="string"?this.script=$||null:(this.script=null,O=$),this.workers=[],this.tasks=[],O=O||{},this.forkArgs=Object.freeze(O.forkArgs||[]),this.forkOpts=Object.freeze(O.forkOpts||{}),this.workerOpts=Object.freeze(O.workerOpts||{}),this.workerThreadOpts=Object.freeze(O.workerThreadOpts||{}),this.debugPortStart=O.debugPortStart||43210,this.nodeWorker=O.nodeWorker,this.workerType=O.workerType||O.nodeWorker||"auto",this.maxQueueSize=O.maxQueueSize||1/0,this.workerTerminateTimeout=O.workerTerminateTimeout||1e3,this.onCreateWorker=O.onCreateWorker||function(){return null},this.onTerminateWorker=O.onTerminateWorker||function(){return null},this.emitStdStreams=O.emitStdStreams||!1,O&&"maxWorkers"in O?(Re(O.maxWorkers),this.maxWorkers=O.maxWorkers):this.maxWorkers=Math.max((R.cpus||4)-1,1),O&&"minWorkers"in O&&(O.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Se(O.minWorkers),this.minWorkers=O.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&L.ensureWorkerThreads()}oe.prototype.exec=function($,O,de){if(O&&!Array.isArray(O))throw new TypeError('Array expected as argument "params"');if(typeof $=="string"){var ye=T.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var qe=this.tasks,st={method:$,params:O,resolver:ye,timeout:null,options:de};qe.push(st);var Gt=ye.promise.timeout;return ye.promise.timeout=function(Ot){return qe.indexOf(st)!==-1?(st.timeout=Ot,ye.promise):Gt.call(ye.promise,Ot)},this._next(),ye.promise}else{if(typeof $=="function")return this.exec("run",[String($),O],de);throw new TypeError('Function or string expected as argument "method"')}},oe.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var $=this;return this.exec("methods").then(function(O){var de={};return O.forEach(function(ye){de[ye]=function(){return $.exec(ye,Array.prototype.slice.call(arguments))}}),de})},oe.prototype._next=function(){if(this.tasks.length>0){var $=this._getWorker();if($){var O=this,de=this.tasks.shift();if(de.resolver.promise.pending){var ye=$.exec(de.method,de.params,de.resolver,de.options).then(O._boundNext).catch(function(){if($.terminated)return O._removeWorker($)}).then(function(){O._next()});typeof de.timeout=="number"&&ye.timeout(de.timeout)}else O._next()}}},oe.prototype._getWorker=function(){for(var $=this.workers,O=0;O<$.length;O++){var de=$[O];if(de.busy()===!1)return de}return $.length<this.maxWorkers?(de=this._createWorkerHandler(),$.push(de),de):null},oe.prototype._removeWorker=function($){var O=this;return ke.releasePort($.debugPort),this._removeWorkerFromList($),this._ensureMinWorkers(),new T(function(de,ye){$.terminate(!1,function(qe){O.onTerminateWorker({forkArgs:$.forkArgs,forkOpts:$.forkOpts,workerThreadOpts:$.workerThreadOpts,script:$.script}),qe?ye(qe):de($)})})},oe.prototype._removeWorkerFromList=function($){var O=this.workers.indexOf($);O!==-1&&this.workers.splice(O,1)},oe.prototype.terminate=function($,O){var de=this;this.tasks.forEach(function(St){St.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ye=function(Ot){ke.releasePort(Ot.debugPort),this._removeWorkerFromList(Ot)},qe=ye.bind(this),st=[],Gt=this.workers.slice();return Gt.forEach(function(St){var Ot=St.terminateAndNotify($,O).then(qe).always(function(){de.onTerminateWorker({forkArgs:St.forkArgs,forkOpts:St.forkOpts,workerThreadOpts:St.workerThreadOpts,script:St.script})});st.push(Ot)}),T.all(st)},oe.prototype.stats=function(){var $=this.workers.length,O=this.workers.filter(function(de){return de.busy()}).length;return{totalWorkers:$,busyWorkers:O,idleWorkers:$-O,pendingTasks:this.tasks.length,activeTasks:O}},oe.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var $=this.workers.length;$<this.minWorkers;$++)this.workers.push(this._createWorkerHandler())},oe.prototype._createWorkerHandler=function(){var $=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new L($.script||this.script,{forkArgs:$.forkArgs||this.forkArgs,forkOpts:$.forkOpts||this.forkOpts,workerOpts:$.workerOpts||this.workerOpts,workerThreadOpts:$.workerThreadOpts||this.workerThreadOpts,debugPort:ke.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Re($){if(!H($)||!_e($)||$<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Se($){if(!H($)||!_e($)||$<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function H($){return typeof $=="number"}function _e($){return Math.round($)==$}return ne=oe,ne}var He={},Ue,wt;function xt(){if(wt)return Ue;wt=1;function A(T,L){this.message=T,this.transfer=L}return Ue=A,Ue}var nr;function Bt(){return nr||(nr=1,function(A){var T=xt(),L="__workerpool-terminate__",R={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")R.on=function(H,_e){addEventListener(H,function($){_e($.data)})},R.send=function(H,_e){_e?postMessage(H,_e):postMessage(H)};else if(typeof process<"u"){var ee;try{ee=Wr}catch(H){if(!(k(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND"))throw H}if(ee&&ee.parentPort!==null){var ke=ee.parentPort;R.send=ke.postMessage.bind(ke),R.on=ke.on.bind(ke),R.exit=process.exit.bind(process)}else R.on=process.on.bind(process),R.send=function(H){process.send(H)},R.on("disconnect",function(){process.exit(1)}),R.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function oe(H){return Object.getOwnPropertyNames(H).reduce(function(_e,$){return Object.defineProperty(_e,$,{value:H[$],enumerable:!0})},{})}function Re(H){return H&&typeof H.then=="function"&&typeof H.catch=="function"}R.methods={},R.methods.run=function(_e,$){var O=new Function("return ("+_e+").apply(null, arguments);");return O.apply(O,$)},R.methods.methods=function(){return Object.keys(R.methods)},R.terminationHandler=void 0,R.cleanupAndExit=function(H){var _e=function(){R.exit(H)};if(!R.terminationHandler)return _e();var $=R.terminationHandler(H);Re($)?$.then(_e,_e):_e()};var Se=null;R.on("message",function(H){if(H===L)return R.cleanupAndExit(0);try{var _e=R.methods[H.method];if(_e){Se=H.id;var $=_e.apply(_e,H.params);Re($)?$.then(function(O){O instanceof T?R.send({id:H.id,result:O.message,error:null},O.transfer):R.send({id:H.id,result:O,error:null}),Se=null}).catch(function(O){R.send({id:H.id,result:null,error:oe(O)}),Se=null}):($ instanceof T?R.send({id:H.id,result:$.message,error:null},$.transfer):R.send({id:H.id,result:$,error:null}),Se=null)}else throw new Error('Unknown method "'+H.method+'"')}catch(O){R.send({id:H.id,result:null,error:oe(O)})}}),R.register=function(H,_e){if(H)for(var $ in H)H.hasOwnProperty($)&&(R.methods[$]=H[$]);_e&&(R.terminationHandler=_e.onTerminate),R.send("ready")},R.emit=function(H){if(Se){if(H instanceof T){R.send({id:Se,isEvent:!0,payload:H.message},H.transfer);return}R.send({id:Se,isEvent:!0,payload:H})}},A.add=R.register,A.emit=R.emit}(He)),He}var Vt=n.platform,Yt=n.isMainThread,Ft=n.cpus;function Ne(A,T){var L=Le();return new L(A,T)}var it=i.pool=Ne;function Or(A,T){var L=Bt();L.add(A,T)}var ut=i.worker=Or;function ze(A){var T=Bt();T.emit(A)}var Xi=i.workerEmit=ze,Xs=c(),Ze=Xs.Promise,qs=i.Promise=Ze,Ks=i.Transfer=xt(),Zs=i.platform=Vt,Qs=i.isMainThread=Yt,Js=i.cpus=Ft;r.Promise=qs,r.Transfer=Ks,r.cpus=Js,r.default=i,r.isMainThread=Qs,r.platform=Zs,r.pool=it,r.worker=ut,r.workerEmit=Xi,Object.defineProperty(r,"__esModule",{value:!0})})})(Un,Un.exports);var Wd=Un.exports,tt=class{constructor(t,e){o(this,"_value");o(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},tl=class extends tt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Hd=class extends tt{constructor(){super(...arguments);o(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Bd=class extends tt{get currentRange(){return this.value}validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){if(this.parent.minmax.value){const t={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(t)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=e),i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},Vd=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Yd=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Gd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Xd=Vd(),Mr={iron:{pixels:Gd,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Yd,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Xd,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},qd=class extends tt{get availablePalettes(){return Mr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},Rn,Kd=(Rn=class{},o(Rn,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),Rn),Xe,Zn=(Xe=class extends Kd{static humanRangeDates(e,r){return e=Xe.inputToDate(e),r=Xe.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Xe.humanDate(e):[Xe.humanDate(e),Xe.humanDate(r)].join(" - ")}static human(e){return`${Xe.humanDate(e)} ${Xe.humanTime(e,!0)} `}},o(Xe,"isoDate",e=>(e=Xe.inputToDate(e),Dn(e,{representation:"date"}))),o(Xe,"isoTime",e=>(e=Xe.inputToDate(e),Dn(e,{representation:"time"}))),o(Xe,"isoComplete",e=>(e=Xe.inputToDate(e),Dn(e))),o(Xe,"humanTime",(e,r=!1)=>(e=Xe.inputToDate(e),Sr(e,r?"HH:mm:ss":"HH:mm"))),o(Xe,"humanDate",(e,r=!1)=>(e=Xe.inputToDate(e),Sr(e,r?"d. M.":"d. M. yyyy"))),Xe),Ls=class{},Zd=class extends Ls{constructor(e,r,i,s,n,a,l,c,p,f,m){super();o(this,"id");o(this,"horizontalLimit");o(this,"verticalLimit");o(this,"group");o(this,"url");o(this,"thermalUrl");o(this,"visibleUrl");o(this,"fileName");o(this,"frameCount");o(this,"signature","unknown");o(this,"version",-1);o(this,"streamCount",-1);o(this,"fileDataType",-1);o(this,"unit",-1);o(this,"width");o(this,"height");o(this,"timestamp");o(this,"duration");o(this,"min");o(this,"max");o(this,"_isHover",!1);o(this,"root",null);o(this,"canvasLayer");o(this,"visibleLayer");o(this,"cursorLayer");o(this,"listenerLayer");o(this,"timeline");o(this,"cursorValue");o(this,"analysis");o(this,"recording");o(this,"_mounted",!1);o(this,"_pixels");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=m,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=a,this.duration=l,this.min=c,this.max=p,this.frameCount=f,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}getColorAtPoint(e,r){var a,l;const i=this.getTemperatureAtPoint(e,r),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(s!==void 0&&n!==void 0){const p=(i-s)/(n-s),f=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[f]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},Rs=class{constructor(t){o(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},qt=class In{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=In.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=In.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Qd=class extends Rs{constructor(e){super(e);o(this,"container");o(this,"canvas");o(this,"context");o(this,"_opacity",1);this.container=qt.createCanvasContainer(),this.canvas=qt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,a,l,c)=>{const f=new OffscreenCanvas(n,a).getContext("2d"),m=s-i;for(let C=0;C<=n;C++)for(let P=0;P<=a;P++){const k=C+P*n;let I=l[k];I<i&&(I=i),I>s&&(I=s);const j=(I-i)/m,B=Math.round(255*j),W=c[B];f.fillStyle=W,f.fillRect(C,P,1,1)}const y=f.getImageData(0,0,n,a);return await createImageBitmap(y)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},Jd=class extends Rs{constructor(e){super(e);o(this,"layerRoot");o(this,"center");o(this,"axisX");o(this,"axisY");o(this,"label");o(this,"_show",!1);o(this,"_hover",!1);this.layerRoot=qt.createCursorLayerRoot(),this.center=qt.createCursorLayerCenter(),this.axisX=qt.createCursorLayerX(),this.axisY=qt.createCursorLayerY(),this.label=qt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(r*i),a=100/this.instance.width/2,l=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${l}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},eu=class extends Rs{constructor(e){super(e);o(this,"container");this.container=qt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},tu=class extends Rs{constructor(e,r){super(e);o(this,"container");o(this,"image");this._url=r,this.container=qt.createVisibleLayer(),this._url&&(this.image=qt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Y=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},ru=class{constructor(t,e){o(this,"_currentFrame");o(this,"bufferSize",4);o(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,l)=>{const c=s[l];this.buffer.set(c,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},rl={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},iu=class extends tt{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));o(this,"_playbackSpeed",1);o(this,"startTimestampRelative");o(this,"endTimestampRelative");o(this,"stepsByAbsolute",new Map);o(this,"stepsByRelative",new Map);o(this,"stepsByIndex",new Map);o(this,"relativeSteps",[]);o(this,"_currentStep");o(this,"isSequence");o(this,"_isPlaying",!1);o(this,"timer");o(this,"buffer");o(this,"callbackdPlaybackSpeed",new Y);o(this,"callbacksPlay",new Y);o(this,"callbacksPause",new Y);o(this,"callbacksStop",new Y);o(this,"callbacksEnd",new Y);o(this,"callbacksChangeFrame",new Y);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new ru(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return rl[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),Sr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(c=>c.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(c=>c.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},su=class extends tt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},nu=class extends tt{constructor(){super(...arguments);o(this,"stream");o(this,"recorder");o(this,"mimeType");o(this,"_isRecording",!1);o(this,"_mayStop",!0);o(this,"recordedChunks",[]);o(this,"callbackMayStop",new Y)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},au=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},Be=class{constructor(t,e,r){o(this,"onSerializableChange",new Y);o(this,"_selected",!1);o(this,"onSelected",new Y);o(this,"onDeselected",new Y);o(this,"onValues",new Y);o(this,"onMoveOrResize",new Y);o(this,"layerRoot");o(this,"points",new Map);o(this,"_top");o(this,"_left");o(this,"_width");o(this,"_height");o(this,"_min");o(this,"_max");o(this,"_avg");o(this,"_color","black");o(this,"onSetColor",new Y);o(this,"_initialColor");o(this,"onSetInitialColor",new Y);o(this,"activeColor","yellow");o(this,"inactiveColor","black");o(this,"ready",!1);o(this,"nameInitial");o(this,"_name");o(this,"onSetName",new Y);this.key=t,this.file=e,this._initialColor=r,this.nameInitial=t,this._name=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")})}serializedIsValid(t){const e=t.split(";").map(r=>r.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(t){if(isNaN(t)||t===this.top)return;const{top:e,height:r}=this.getVerticalDimensionFromNewValue(t,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),r!==this.height&&(this._height=r,this.onSetHeight(r),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(t){if(isNaN(t)||t===this.left)return;const{left:e,width:r}=this.getHorizontalDimensionsFromNewValue(t,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),r!==this.width&&(this._width=r,this.onSetWidth(r),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(t){if(t===this.height)return;const e=this.validateWidth(t);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(t){if(t===this.height)return;const e=this.validateHeight(t);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(t){if(isNaN(t)||t===this.bottom)return;const{top:e,height:r}=this.getVerticalDimensionFromNewValue(t,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),r!==this.height&&(this._height=r,this.onSetHeight(r),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(t){if(isNaN(t)||t===this.right)return;const{left:e,width:r}=this.getHorizontalDimensionsFromNewValue(t,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),r!==this.width&&(this._width=r,this.onSetWidth(r),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}get initialColor(){return this._initialColor}setInitialColor(t){t!==this.initialColor&&(this._initialColor=t,this.onSetInitialColor.call(t),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(t))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(t){t!==this.name&&(this._name=t,this.onSerializableChange.call(this,"name"),this.onSetName.call(t))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(t,e){return!!t.find(r=>r===e)}static serializedGetStringValueByKey(t,e){const r=new RegExp(`${e}:*`),i=t.find(s=>{if(s.match(r))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(t,e){const r=new RegExp(`${e}:\\d+`),i=t.find(s=>s.match(r));if(i!==void 0)return parseInt(i.split(":")[1])}},il=class{constructor(t,e,r,i,s,n,a){o(this,"pxX");o(this,"_x");o(this,"onX",new Y);o(this,"pxY");o(this,"_y");o(this,"onY",new Y);o(this,"_color");o(this,"_active",!1);o(this,"_isHover",!1);o(this,"_isDragging",!1);o(this,"container");o(this,"innerElement");o(this,"onMouseEnter",new Y);o(this,"onMouseLeave",new Y);o(this,"onActivate",new Y);o(this,"onDeactivate",new Y);this.key=t,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=r,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(r,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(t){const{x:e,placement:r}=this.analyzeXFromTool(t);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,r);this.container.style.left=s,this.sideEffectOnXFromTool(e,r),this.onX.call(this.x,i)}}setXDirectly(t,e){if(this.mayMoveToX(t)){const r=this.x;this._x=t;const i=this.getXStyle(t,e);this.container.style.left=i,this.onX.call(this.x,r)}}setYFromTool(t){const{y:e,placement:r}=this.analyzeYFromTool(t);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,r);this.container.style.top=s,this.sideEffectOnYFromTool(e,r),this.onY.call(this.y,i)}}setYDirectly(t,e){if(this.mayMoveToY(t)){const r=this.y;this._y=t;const i=this.getYStyle(t,e);this.container.style.top=i,this.onY.call(this.y,r)}}getXStyle(t,e){const r=this.calculatePercentageX(t),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(r,i)}getYStyle(t,e){const r=this.calculatePercentageY(t),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(r,i)}formatPositionStyle(t,e){return e===0||isNaN(e)?`${t}%`:`calc( ${t}% + ${e}% )`}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,a=this.y+r;return e>=i&&e<=s&&t>=n&&t<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(t){return t/this.analysis.file.width*100}calculatePercentageY(t){return t/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},vt,ou=(vt=class extends il{constructor(r,i,s,n,a){super(r,i,s,n,a,2,2);o(this,"axisX");o(this,"axisY");o(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(r=1){return Math.round(vt.size*r).toString()+"px"}analyzeXFromTool(r){return{x:r,placement:2}}analyzeYFromTool(r){return{y:r,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(r){return r<=this.file.width&&r>=0}mayMoveToY(r){return r<=this.file.height&&r>=0}createInnerElement(){const r=document.createElement("div");return r.classList.add("innerElement"),r.style.position="absolute",r.style.top=vt.sizePx(-.5),r.style.left=vt.sizePx(-.5),r.style.width=vt.sizePx(),r.style.height=vt.sizePx(),r}buildAxisX(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="100%",r.style.height="1px",r.style.left="0px",r.style.top=vt.sizePx(.5),r}buildAxisY(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="1px",r.style.height="100%",r.style.left=vt.sizePx(.5),r.style.top="0px",r}buildCenter(){const r=document.createElement("div");r.style.position="absolute",r.style.top=`calc( ${vt.sizePx(.5)} - 3px )`,r.style.left=`calc( ${vt.sizePx(.5)} - 3px )`,r.style.width="5px",r.style.height="5px",r.style.borderStyle="solid",r.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(r.style.backgroundColor=i),r}onSetColor(r){this.axisX&&(this.axisX.style.backgroundColor=r),this.axisY&&(this.axisY.style.backgroundColor=r),this.center&&(this.center.style.borderColor=r)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(r=void 0){var i,s,n;if(r===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${r}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},o(vt,"size",20),vt),ar=class sl extends Be{constructor(r,i,s,n,a){super(r,s,i);o(this,"center");o(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new ou("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new nl(this)),this._graph}static addAtPoint(r,i,s,n,a){return new sl(r,i,s,n,a)}setColorCallback(r){this.center.setColor(r)}isWithin(r,i){return this.center.isWithin(i,r)}getValues(){const r=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:r,max:r,avg:r}}async getAnalysisData(){return await this.file.service.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(r){this.center.setXDirectly(r,2),this.onSerializableChange.call(this,"left")}onSetTop(r){this.center.setYDirectly(r,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(r){const i=Math.min(this.file.height-1,Math.max(0,Math.round(r)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(r){const i=Math.min(this.file.width-1,Math.max(0,Math.round(r)));return{left:i,right:i,width:0}}recievedSerialized(r){if(!this.serializedIsValid(r))return;const i=r.split(";").map(f=>f.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=Be.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const l=Be.serializedGetStringValueByKey(i,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const c=Be.serializedGetNumericalValueByKey(i,"top"),p=Be.serializedGetNumericalValueByKey(i,"left");c!==void 0&&(this.setTop(c),s=!0),p!==void 0&&(this.setLeft(p),s=!0),s&&this.recalculateValues()}toSerialized(){const r=[];return r.push(this.name),r.push("point"),r.push(`top:${this.top}`),r.push(`left:${this.left}`),r.push(`color:${this.initialColor}`),this.graph.state.AVG&&r.push("avg"),r.join(";")}},nl=class{constructor(t){o(this,"_min",!1);o(this,"_max",!1);o(this,"_avg",!1);o(this,"_value");o(this,"onGraphActivation",new Y);o(this,"onGraphData",new Y);o(this,"onAnalysisSelection",new Y);this.analysis=t,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(t){this._value=t,this.onGraphData.call(t,this.analysis)}setMinActivation(t){this._min!==t&&(this._min=t,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(t){this._max!==t&&(this._max=t,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(t){this._avg!==t&&(this._avg=t,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const r=await e.getAnalysisData();this.value=r});const t=await this.getGraphData();this.value=t}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof ar)return this._avg?[this.analysis.initialColor]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(this.analysis.initialColor)}),t}getGraphLabels(){if(this.analysis instanceof ar)return this._avg?[this.analysis.name]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(`${this.analysis.name} ${e}`)}),t}hasDataToPrint(){return this.analysis instanceof ar?this._avg:this._min||this._max||this._avg}getDtaAtTime(t){if(this.analysis instanceof ar)return this._avg?[this.value[t]]:[];const e=[],r=this.value;return this._min&&e.push(r[t].min),this._max&&e.push(r[t].max),this._avg&&e.push(r[t].avg),e}},lu=class extends il{constructor(t,e,r,i,s,n,a){super(t,e,r,i,s,n,a)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},hu=class extends lu{constructor(){super(...arguments);o(this,"_pairX");o(this,"_pairY");o(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const r=this.isLeftSide?1:3;return{x:e,placement:r}}analyzeYFromTool(e){const r=this.isTopSide?1:3;return{y:e,placement:r}}sideEffectOnXFromTool(e,r){this.pairX.setXDirectly(e,r),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,r){this.pairY.setYDirectly(e,r),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Qn=class extends Be{constructor(e,r,i,s,n,a,l){super(e,i,r);o(this,"wPx",(100/this.file.width/2).toString()+"%");o(this,"hPx",(100/this.file.height/2).toString()+"%");o(this,"tl");o(this,"tr");o(this,"bl");o(this,"br");o(this,"area");o(this,"_graph");let c=n,p=s;a!==void 0&&l!==void 0&&(c=n+a,p=s+l),this.area=this.buildArea(s,n,a,l),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,c,3,1),this.bl=this.addPoint("bl",p,n,1,3),this.br=this.addPoint("br",p,c,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new nl(this)),this._graph}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,i,s){const n=Math.min(e,s),a=Math.max(e,s),l=Math.min(r,i),p=Math.max(r,i)-l,f=a-n;return{top:n,left:l,width:p,height:f}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,r=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=r-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,r,i,s,n){const a=new hu(e,r,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const r=this.file.width-1-this.left;return Math.max(0,Math.min(r,Math.round(e)))}validateHeight(e){const r=this.file.height-1-this.top;return Math.max(0,Math.min(r,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,r=>{r.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,r=>{r.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,r=>{r.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,r=>{r.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,r=>{r.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,r=>{r.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,r=>{r.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,r=>{r.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,r){const i=Math.round(e),s=this.file.height-1,n=r==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:r==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,r){const i=Math.round(e),s=this.file.width-1,n=r==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:r==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,r){e.forEach(i=>r(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const r=e.split(";").map(S=>S.trim());let i=!1;const s=r[0];s!==this.name&&this.setName(s);const n=Be.serializedSegmentsHasExact(r,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=Be.serializedSegmentsHasExact(r,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const l=Be.serializedSegmentsHasExact(r,"max");l!==this.graph.state.MAX&&this.graph.setMaxActivation(l);const c=Be.serializedGetStringValueByKey(r,"color");c===void 0||c!==this.initialColor&&this.setInitialColor(c);const p=Be.serializedGetNumericalValueByKey(r,"top"),f=Be.serializedGetNumericalValueByKey(r,"left"),m=Be.serializedGetNumericalValueByKey(r,"width"),y=Be.serializedGetNumericalValueByKey(r,"height");p!==void 0&&p!==this.top&&(this.setTop(p),i=!0),f!==void 0&&f!==this.left&&(this.setLeft(f),i=!0),m!==void 0&&m!==this.width&&(this.setWidth(m),i=!0),y!==void 0&&y!==this.height&&(this.setHeight(y),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},al=class{constructor(t,e,r,i,s){o(this,"pxX");o(this,"pxY");o(this,"element");o(this,"_top");o(this,"_width");o(this,"_left");o(this,"_height");this.analysis=t,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},vo=class extends al{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},yo=class us extends Qn{getType(){return"ellipsis"}static startAddingAtPoint(e,r,i,s,n){const a=new us(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,l){const{top:c,left:p,width:f,height:m}=us.calculateDimensionsFromCorners(s,n,a,l),y=new us(e,r,i,c,p,f,m);return y.recalculateValues(),y}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new vo(this,e,r,e+i,r+s):new vo(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,c=0;for(let p=i;p<s;p++){const f=this.file.width*p;for(let m=e;m<=r;m++)if(this.isWithin(m,p)){const y=this.file.pixels[f+m];y<n&&(n=y),y>a&&(a=y),c+=y,l++}}return{min:n,max:a,avg:c/l}}isWithin(e,r){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(r-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.service.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},bo=class extends al{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},wo=class ps extends Qn{getType(){return"rectangle"}static startAddingAtPoint(e,r,i,s,n){const a=new ps(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,l){const{top:c,left:p,width:f,height:m}=ps.calculateDimensionsFromCorners(s,n,a,l),y=new ps(e,r,i,c,p,f,m);return y.recalculateValues(),y}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new bo(this,e,r,e+i,r+s):new bo(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,c=0;for(let p=i;p<s;p++){const f=this.file.width*p;for(let m=e;m<=r;m++){const y=this.file.pixels[f+m];y<n&&(n=y),y>a&&(a=y),c+=y,l++}}return{min:n,max:a,avg:c/l}}async getAnalysisData(){return await this.file.service.rectAnalysisData(this.left,this.top,this.width,this.height)}},fs=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],cu=class extends Map{constructor(e){super();o(this,"layers",[]);o(this,"onAdd",new Y);o(this,"onRemove",new Y);o(this,"onSelectionChange",new Y);o(this,"colors",fs);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,r){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=r===!0?this.slots.getNextFreeSlotNumber():r===!1?void 0:r;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const r=this.get(e);r&&(this.slots.unassignAnalysisFromItsSlot(r),r.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,r){const i=wo.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i,!1),i}placeRectAt(e,r,i,s,n,a,l){const c=wo.build(e,a??this.getNextColor(),this.drive.parent,r,i,s,n);return c.ready=!0,this.addAnalysis(c,l),c}createEllipsisFrom(e,r){const i=yo.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,r,i,s,n,a,l){const c=yo.build(e,a??this.getNextColor(),this.drive.parent,r,i,s,n);return c.ready=!0,this.addAnalysis(c,l),c}createPointAt(e,r){const i=ar.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i,!0),i}placePointAt(e,r,i,s,n){const a=ar.addAtPoint(e,s??this.getNextColor(),this.drive.parent,r,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),r=fs.filter(i=>!e.includes(i));return r.length>0?r[0]:fs[0]}getNextName(e){return`${e} ${this.all.length}`}},du=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...r,...s]},[])}},uu=class extends tt{constructor(){super(...arguments);o(this,"layers",new cu(this));o(this,"points",new du(this));o(this,"bindedPointerMoveListener");o(this,"bindedPointerDownListener");o(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const r=this.listenerLayerContainer.clientWidth,i=this.parent.width,n=e.layerX/r,a=Math.round(i*n),l=this.listenerLayerContainer.clientHeight,c=this.parent.height,f=e.layerY/l;return{top:Math.round(c*f),left:a}}activateListeners(){this.bindedPointerMoveListener=e=>{const r=this.getRelativePosition(e);this.points.all.forEach(i=>{i.active&&this.currentTool.onPointMove(i,r.top,r.left);const s=i.isWithin(r.top,r.left);s?this.currentTool.onPointEnter(i):s||this.currentTool.onPointLeave(i)})},this.bindedPointerDownListener=e=>{const r=this.getRelativePosition(e);this.currentTool.onCanvasClick(r.top,r.left,this.parent),this.points.all.forEach(i=>{i.isWithin(r.top,r.left)&&this.currentTool.onPointDown(i)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},pu=class{constructor(t){o(this,"listenerKey","___listen-to-graphs___");o(this,"_graphs",new Map);o(this,"_output",{values:[[]],colors:[]});o(this,"onOutput",new Y);o(this,"onAddGraph",new Y);o(this,"onRemoveGraph",new Y);this.drive=t,this.layers.onAdd.set(this.listenerKey,async e=>{const r=e.graph;this.addGraph(r),r.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),r.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(t){this._graphs.set(t.analysis.key,t),this.onAddGraph.call(t)}removeGraph(t){this._graphs.delete(t),this.onRemoveGraph.call(t)}get output(){return this._output}set output(t){this._output=t,this.onOutput.call(t)}refreshOutput(){const t={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{t.values[0].push(...e.getGraphLabels()),t.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((r,i)=>{let s=t.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(r)),s=[a],t.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(r)))})}),this.output=t,t}hasGraph(){return Object.values(this.graphs).find(t=>t.hasDataToPrint()).length>0}generateExportData(){const t={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const r of this.graphs.values()){const i=r.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${r.analysis.initialColor}, ${r.analysis.width} x ${r.analysis.height} px)`});r.value&&Object.keys(r.value).forEach(s=>{if(!Object.keys(t).includes(s)){const a=parseInt(s),l=a+r.analysis.file.timestamp;t[s]={[e[0].key]:Sr(a,"m:ss:SSS")+" ",[e[1].key]:Sr(l,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:l}}const n=r.getDtaAtTime(parseInt(s));i.forEach((a,l)=>{t[s][a]=n[l]})})}return{header:e,data:Object.values(t)}}},fu=class extends tt{constructor(e){super(e,{values:[[]],colors:[]});o(this,"_hasActiveGraphs",!1);o(this,"onGraphsPresence",new Y);o(this,"listeners",new pu(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async r=>{this.value=r,r.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:r}=this.listeners.generateExportData(),i=Es({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:r}),s=Md(i)(e);Id(i)(s)}},mu=class{constructor(t,e){o(this,"_analysis");o(this,"_serialized");o(this,"onSerialize",new Y);o(this,"enqueuedSerialisation");this.slot=t,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(t){return`slot ${this.slot} ${t}`}dehydrate(t){t.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(t){t.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(t){this.analysis.recievedSerialized(t);const e=this.analysis.toSerialized();e!==t&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(t){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(t)}},Vr,ol=(Vr=class extends tt{constructor(){super(...arguments);o(this,"onSlotInit",new Y);o(this,"onSlotRemove",new Y);o(this,"onSlot1Assignement",new Y);o(this,"onSlot2Assignement",new Y);o(this,"onSlot3Assignement",new Y);o(this,"onSlot4Assignement",new Y);o(this,"onSlot5Assignement",new Y);o(this,"onSlot6Assignement",new Y);o(this,"onSlot7Assignement",new Y);o(this,"onSlot1Serialize",new Y);o(this,"onSlot2Serialize",new Y);o(this,"onSlot3Serialize",new Y);o(this,"onSlot4Serialize",new Y);o(this,"onSlot5Serialize",new Y);o(this,"onSlot6Serialize",new Y);o(this,"onSlot7Serialize",new Y)}getNextFreeSlotNumber(){for(let r=1;r<=Vr.MAX_SLOTS;r++)if(!this.hasSlot(r))return r}assignSlot(r,i){this.getSlot(r)!==void 0&&this.removeSlotAndAnalysis(r);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new mu(r,i);this.value.set(r,a);const l=this.getOnAssignementManager(r),c=this.getOnSerializeManager(r);return l&&l.call(a),c&&c.call(a.serialized),this.onSlotInit.call(r,a),this.callEffectsAndListeners(),a}hasSlot(r){return this.value.has(r)}getSlot(r){return this.value.get(r)}getAnalysisSlot(r){for(const i of this.value.values())if(i.analysis.key===r.key)return i.slot}removeSlotAndAnalysis(r){const i=this.value.get(r);if(i){const s=i.analysis;this.emitOnAssignement(r,void 0),this.value.delete(r),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(r){for(const i of this.value.values())i.analysis.key===r.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.callEffectsAndListeners())}createFromSerialized(r,i){const s=r.split(";").map(k=>k.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let l=Be.serializedGetNumericalValueByKey(s,"top"),c=Be.serializedGetNumericalValueByKey(s,"left");const p=Be.serializedGetStringValueByKey(s,"color");let f=Be.serializedGetNumericalValueByKey(s,"width"),m=Be.serializedGetNumericalValueByKey(s,"height");const y=Be.serializedSegmentsHasExact(s,"avg"),S=Be.serializedSegmentsHasExact(s,"min"),C=Be.serializedSegmentsHasExact(s,"max");l!==void 0&&(l<0&&(l=0),l>this.parent.height-1&&(l=this.parent.height-1)),c!==void 0&&(c<0&&(c=0),c>this.parent.width-1&&(c=this.parent.width-1));let P;if(a==="point"){if(l===void 0||c===void 0)return;P=this.parent.analysis.layers.placePointAt(n,l,c,p,!1)}else{if(l===void 0||c===void 0||f===void 0||m===void 0)return;f<0&&(f=0),f+c>this.parent.width-1&&(f=this.parent.width-c-1),m<0&&(m=0),m+l>this.parent.height-1&&(m=this.parent.height-l-1),P=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,l,c,f+c,m+l,p,!1):this.parent.analysis.layers.placeEllipsisAt(n,l,c,f+c,m+l,p,!1)}if(P!==void 0){if(P instanceof ar?y&&P.graph.setAvgActivation(!0):P instanceof Qn&&(y&&P.graph.setAvgActivation(!0),S&&P.graph.setMinActivation(!0),C&&P.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const k=this.getNextFreeSlotNumber();k!==void 0&&this.assignSlot(k,P)}else i!==void 0&&this.assignSlot(i,P);return P}}validate(r){return r}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(r=>r(this.value))}emitOnAssignement(r,i){const s=this.getOnAssignementManager(r);s&&s.call(i);const n=this.getOnSerializeManager(r);n&&n.call(i==null?void 0:i.serialized),i?this.onSlotInit.call(r,i):this.onSlotRemove.call(r)}emitSerializedValue(r,i){const s=this.getOnSerializeManager(r);s&&s.call(i)}getOnSerializeManager(r){if(r===1)return this.onSlot1Serialize;if(r===2)return this.onSlot2Serialize;if(r===3)return this.onSlot3Serialize;if(r===4)return this.onSlot4Serialize;if(r===5)return this.onSlot5Serialize;if(r===6)return this.onSlot6Serialize;if(r===7)return this.onSlot7Serialize}getOnAssignementManager(r){if(r===1)return this.onSlot1Assignement;if(r===2)return this.onSlot2Assignement;if(r===3)return this.onSlot3Assignement;if(r===4)return this.onSlot4Assignement;if(r===5)return this.onSlot5Assignement;if(r===6)return this.onSlot6Assignement;if(r===7)return this.onSlot7Assignement}getSlotValue(r){var i;if(this.hasSlot(r))return(i=this.getSlot(r))==null?void 0:i.serialized}},o(Vr,"MAX_SLOTS",7),Vr),Jn=class ll extends Zd{constructor(r,i,s,n,a,l,c,p,f,m,y,S,C,P,k,I,U){super(r,i.thermalUrl,s,n,f,a,c,y,S,l,i.visibleUrl);o(this,"slots");o(this,"_export");this.group=r,this.service=i,this.width=s,this.height=n,this.timestamp=a,this.frameCount=l,this.duration=c,this.frameInterval=p,this.fps=m,this.min=y,this.max=S,this.bytesize=C,this.averageEmissivity=P,this.averageReflectedKelvins=k,this.firstFrame=I,this.timelineData=U,this.pixels=I.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new au(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new Qd(this),this.visibleLayer=new tu(this,this.visibleUrl),this.cursorLayer=new Jd(this),this.listenerLayer=new eu(this),this.cursorValue=new su(this,void 0),this.timeline=new iu(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new nu(this,!1),this.analysis=new uu(this,[]),this.analysisData=new fu(this),this.slots=new ol(this,new Map),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}this.analysis.value.forEach(i=>i.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new ll(r,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=r=>{this.cursorLayer.show=!0,this.isHover=!0;const i=this.width,s=this.root.clientWidth,n=i/s,a=Math.round(r.offsetX*n),l=Math.round(r.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:a,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(r){if(r!==void 0){const i=this.group.tool.value.getLabelValue(r.x,r.y,this);this.cursorLayer.setLabel(r.x,r.y,i),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(r)}},gu=class extends tt{constructor(){super(...arguments);o(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeFile(e){const r=e instanceof Jn?e:this.map.get(e);r&&(r.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==r.url))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},vu=class extends tl{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},Ms=class{constructor(t){o(this,"active",!1);this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},hl=class extends Ms{constructor(){super(...arguments);o(this,"key","inspect");o(this,"name","Inspect temperatures");o(this,"description","Use mouse to inspect temperature values.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);o(this,"getLabelValue",(e,r,i)=>i===void 0?"":i.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},ea=class extends Ms{},yu=class extends ea{constructor(){super(...arguments);o(this,"key","add-ellipsis");o(this,"name","Add an elyptical analysis");o(this,"description","Click and drag on the thermogram to add an elyptical analysis.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);o(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=ol.MAX_SLOTS){const r=e.analysis.file.slots.getNextFreeSlotNumber();console.log(r),r!==void 0&&e.file.slots.assignSlot(r,e.analysis)}}}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(r),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},bu=class extends ea{constructor(){super(...arguments);o(this,"key","add-point");o(this,"name","Add a point analysis");o(this,"description","Click on the thermogram to add a point analysis.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);o(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createPointAt(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},wu=class extends ea{constructor(){super(...arguments);o(this,"key","add-rect");o(this,"name","Add a rectangular analysis");o(this,"description","Click and drag on the thermogram to add a rectangular analysis.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);o(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const r=e.analysis.file.slots.getNextFreeSlotNumber();r!==void 0&&e.file.slots.assignSlot(r,e.analysis)}}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(r),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},xu=class extends Ms{constructor(){super(...arguments);o(this,"key","edit");o(this,"name","Edit analysis");o(this,"description","Drag corners of any selected analysis.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(r),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,r,i){const s=i.getTemperatureAtPoint(e,r),n=i.analysis.layers.all.filter(f=>f.isWithin(e,r)).map(f=>{const m=f.selected?"span":"s";return`<${m} style="color: ${f.initialColor};">
                    ${f.name}
                </${m}>`}),a=i.analysis.points.all.filter(f=>f.isHover).map(f=>`<span style="color: ${f.analysis.initialColor}">${f.analysis.name} - HANDLE: ${f.key}: X: ${f.x} Y: ${f.y}</span>`),l=n.length>0?n.join("<br />")+"<br />":"",c=a.length>0?a.join("<br />")+"<br />":"";return`${c.length>0?c:l}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${r}`}},Su=[hl,bu,wu,yu,xu],_u=t=>{const e=Su.map(r=>{const i=new r(t);return[i.key,i]});return Object.fromEntries(e)},$u=class extends tt{constructor(e,r){super(e,r);o(this,"_tools",_u(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof Ms?this.value=e:this.value=this.tools[e]}},Cu=class extends Ls{constructor(e,r,i,s){super();o(this,"hash",Math.random());o(this,"minmax",new vu(this,void 0));o(this,"tool",new $u(this,new hl(this)));o(this,"files",new gu(this,[]));o(this,"cursorPosition",new Hd(this,void 0));o(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},cl=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},ys=class dl extends cl{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new dl(e.url,e.code,e.message)}},ul=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Xr=class extends cl{constructor(e,r,i,s,n){super(s,n);o(this,"id",Math.random());o(this,"baseInfoCache");o(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async pointAnalysisData(e,r){return await this.parser.pointAnalysisData(this.buffer,e,r)}async rectAnalysisData(e,r,i,s){return await this.parser.rectAnalysisData(this.buffer,e,r,i,s)}async ellipsisAnalysisData(e,r,i,s){return await this.parser.ellipsisAnalysisData(this.buffer,e,r,i,s)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),s=Jn.fromService(e,this,r,i);return e.files.addFile(s),s}},ku=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(X,Q)=>{const ce=X.getBigInt64(Q,!0),q=62135596800000n,se=10000n,ne=24n*60n*60n*1000n*se,ue=0x4000000000000000n,Le=0x8000000000000000n;let Ue=ce&0x3fffffffffffffffn;ce&Le&&(Ue>ue-ne&&(Ue-=ue),Ue<0&&(Ue+=ne));const xt=Ue/se-q;return Number(xt)},a=n(e,5),l=e.getUint8(15);let c=2;l===1&&(c=4);const p=57,f=r*i*c,m=p+f,y=t.slice(25),S=y.byteLength/m,C=X=>{const Q=X*m,ce=Q+m,q=y.slice(Q,ce),se=new DataView(q),ne=se.getFloat32(8,!0),ue=se.getFloat32(12,!0),Le=n(se,0),He=se.getFloat32(24,!0),Ue=se.getFloat32(28,!0);return{timestamp:Le,min:ne,max:ue,emissivity:He,reflectedKelvins:Ue}},P=[];for(let X=0;X<S;X++){const Q=C(X);P.push(Q)}const k={emissivity:0,reflectedKelvins:0};let I=1/0,U=-1/0;const j=[];P.forEach(X=>{k.emissivity=k.emissivity+X.emissivity,k.reflectedKelvins=k.reflectedKelvins+X.reflectedKelvins,X.min<I&&(I=X.min),X.max>U&&(U=X.max),j.push(X.timestamp)});const B=j[0],W=[];j.forEach((X,Q)=>{const ce=j[Q+1];let q=0;ce===void 0&&(q=0),q=ce-X;const se=X-B;W.push({absolute:X,relative:se,offset:isNaN(q)?0:q,index:Q})});const he=P[P.length-1].timestamp-P[0].timestamp,E=he/S,G=1e3/E;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:S,duration:he,frameInterval:E,fps:G,timeline:W,min:I,max:U,averageEmissivity:k.emissivity/P.length,averageReflectedKelvins:k.reflectedKelvins/P.length}},Pu=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),a=i===1?4:2,l=57,c=s*n*a,p=l+c,f=t.slice(25),m=e*p,y=m+p;return{array:f.slice(m,y),dataType:i}},Au=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,c=0x8000000000000000n;let f=i&0x3fffffffffffffffn;i&c&&(f>l-a&&(f-=l),f<0&&(f+=a));const y=f/n-s,S=Number(y),C=r.getFloat32(8,!0),P=r.getFloat32(12,!0),k=r.getFloat32(24,!0),I=r.getFloat32(28,!0),U=t.slice(57);let j=[];if(e===0){const B=new Uint16Array(U),W=Math.abs(C-P),he=65535;B.forEach(E=>{const G=E/he;j.push(C+W*G)})}else e===1&&(j=Array.from(new Float32Array(U)));return{timestamp:S,min:C,max:P,emissivity:k,reflectedKelvins:I,pixels:j}},Ou=async(t,e,r)=>{const i=new DataView(t),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(I,U)=>{const j=I.getBigInt64(U,!0),B=62135596800000n,W=10000n,he=24n*60n*60n*1000n*W,E=0x4000000000000000n,G=0x8000000000000000n;let Q=j&0x3fffffffffffffffn;j&G&&(Q>E-he&&(Q-=E),Q<0&&(Q+=he));const q=Q/W-B;return Number(q)},l=i.getUint8(15);let c=2;l===1&&(c=4);const p=57,f=s*n*c,m=p+f,y=t.slice(25),S=y.byteLength/m,C={},P=I=>{const U=I*m,j=U+m,B=y.slice(U,j),W=new DataView(B),he=a(W,0),E=W.getFloat32(8,!0),X=W.getFloat32(12,!0)-E,ce=57+r*c*s+e*c;let q=0;if(l===1)q=W.getFloat32(ce,!0);else if(l===0){console.log("jsem uvnitř varia");const ue=W.getInt16(ce,!0)/65535;q=E+X*ue}return{timestamp:he,temperature:q}};let k=0;for(let I=0;I<S;I++){const U=P(I);k===0&&(k=U.timestamp),C[U.timestamp-k]=U.temperature}return C},Du=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),c=(j,B)=>{const W=j.getBigInt64(B,!0),he=62135596800000n,E=10000n,G=24n*60n*60n*1000n*E,X=0x4000000000000000n,Q=0x8000000000000000n;let q=W&0x3fffffffffffffffn;W&Q&&(q>X-G&&(q-=X),q<0&&(q+=G));const ne=q/E-he;return Number(ne)},p=n.getUint8(15);let f=2;p===1&&(f=4);const m=57,y=a*l*f,S=m+y,C=t.slice(25),P=C.byteLength/S,k={},I=j=>{const B=j*S,W=B+S,he=C.slice(B,W),E=new DataView(he),G=c(E,0),X=E.getFloat32(8,!0),ce=E.getFloat32(12,!0)-X,q=57,se=e,ne=e+i,ue=r,Le=r+s;let He=1/0,Ue=-1/0,wt=0,xt=0;for(let Bt=ue;Bt<=Le;Bt++){const Vt=Bt*a;for(let Yt=se;Yt<=ne;Yt++){const Ft=q+(Vt+Yt)*f;let Ne=NaN;if(p===1)Ne=E.getFloat32(Ft,!0);else{const ut=E.getInt16(Ft,!0)/65535;Ne=X+ce*ut}Ne<He&&(He=Ne),Ne>Ue&&(Ue=Ne),xt+=Ne,wt++}}const nr={min:He,max:Ue,avg:xt/wt,count:wt};return{timestamp:G,result:nr}};let U=0;for(let j=0;j<P;j++){const B=I(j);U===0&&(U=B.timestamp),k[B.timestamp-U]=B.result}return k},Eu=async t=>{let e=[];const r=async k=>{const I=new DataView(k.slice(0,25)),U=I.getUint8(15),j=I.getUint16(17,!0),B=I.getUint16(19,!0),W=U===1?4:2,he=57,E=j*B*W,G=he+E,X=k.slice(25),Q=X.byteLength/G;let ce=[];for(let q=0;q<Q;q++){const ne=q*G+57,ue=ne+E,Le=X.slice(ne,ue);U===0||U===1&&(ce=ce.concat(Array.from(new Float32Array(Le))))}return ce};(await Promise.all(t.map(k=>r(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,I)=>k-I);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),l=200,c=a/l,p=[];let f=[...e];for(let k=0;k<l;k++){const I=s+c*k,U=I+c,j=f.findIndex(G=>G>U),W=f.slice(0,j-1).length,he=W/e.length*100,E={from:I,to:U,count:W,percentage:he};p.push(E),f=f.slice(j)}const m=[...p].sort((k,I)=>k.percentage-I.percentage),y=m[0].percentage,S=m[m.length-1].percentage,C=Math.abs(y-S);return p.map(k=>({...k,height:k.percentage/C*100}))},Tu=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},Lu=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),c=(B,W)=>{const he=B.getBigInt64(W,!0),E=62135596800000n,G=10000n,X=24n*60n*60n*1000n*G,Q=0x4000000000000000n,ce=0x8000000000000000n;let se=he&0x3fffffffffffffffn;he&ce&&(se>Q-X&&(se-=Q),se<0&&(se+=X));const ue=se/G-E;return Number(ue)},p=n.getUint8(15);let f=2;p===1&&(f=4);const m=57,y=a*l*f,S=m+y,C=t.slice(25),P=C.byteLength/S,k={},I=(B,W)=>{const he=e+i/2,E=r+s/2,G=(B-he)/(i/2),X=(W-E)/(s/2);return G*G+X*X<=1},U=B=>{const W=B*S,he=W+S,E=C.slice(W,he),G=new DataView(E),X=c(G,0),Q=G.getFloat32(8,!0),q=G.getFloat32(12,!0)-Q,se=57,ne=e,ue=e+i,Le=r,He=r+s;let Ue=1/0,wt=-1/0,xt=0,nr=0;for(let Vt=Le;Vt<=He;Vt++){const Yt=Vt*a;for(let Ft=ne;Ft<=ue;Ft++)if(I(Ft,Vt)){const Ne=se+(Yt+Ft)*f;let it=NaN;if(p===1)it=G.getFloat32(Ne,!0);else{const ze=G.getInt16(Ne,!0)/65535;it=Q+q*ze}it<Ue&&(Ue=it),it>wt&&(wt=it),nr+=it,xt++}}const Bt={min:Ue,max:wt,avg:nr/xt,count:xt};return{timestamp:X,result:Bt}};let j=0;for(let B=0;B<P;B++){const W=U(B);j===0&&(j=W.timestamp),k[W.timestamp-j]=W.result}return k},Ru=[{extension:"lrc",minme:"application/octet-stream"}],Mu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Ru,is:Tu,baseInfo:ku,getFrameSubset:Pu,frameData:Au,registryHistogram:Eu,pointAnalysisData:Ou,rectAnalysisData:Du,ellipsisAnalysisData:Lu},pl=Object.freeze(Mu),Uu={LrcParser:pl},fl=Object.values(Uu),ml=(t,e)=>{const r=fl.find(i=>i.is(t,e));if(r===void 0)throw new ul(2,e,`No parser found for '${e}'.`);return r},gl=fl.map(t=>t.extensions),Iu=gl.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Fu=class vl{constructor(e,r,i){o(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new vl(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new ys(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=ml(i,this.thermalUrl);return this.pocessTheService(new Xr(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof ul)return this.pocessTheService(ys.fromError(s));throw s}}pocessTheService(e){return e}},Nu=class yl{constructor(e,r){o(this,"_hover",!1);o(this,"onMouseEnter",new Y);o(this,"onMouseLeave",new Y);o(this,"onDrop",new Y);o(this,"onProcessingEnd",new Y);o(this,"input");o(this,"hydrated",!1);o(this,"bindedEnterListener");o(this,"bindedLeaveListener");o(this,"bindedDropListener");o(this,"bindedInputChangeListener");o(this,"bindedDragoverListener");o(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const i=new yl(e,r);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const i=r.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Iu,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},zu=class{constructor(t){o(this,"requestsByUrl",new Map);o(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new ta(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=ml(e,t.name);return new Xr(this,e,r,t.name)}catch(e){return new ys(t.name,3,e.message)}}handleDropzone(t){return Nu.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=Fu.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},ju=class extends tt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},Wu=class extends tt{constructor(){super(...arguments);o(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new Cu(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Hu=class extends tt{constructor(){super(...arguments);o(this,"_resolution",150);o(this,"buffer",new Map);o(this,"bufferPixelsCount",0);o(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,a)=>{let c=r.reduce((S,C)=>{const P=C.reduce((k,I)=>[...k,...I],[]);return[...S,...P]},[]).sort((S,C)=>S-C);const p=n/a;let f=i+p;const m=new Map;let y=0;for(;f!==!1;){const S=c.findIndex(k=>k>f),C=c.slice(0,S).length;m.set(f-p/2,C),y+=C,c=c.slice(S);const P=f+p;f=P<s?P:!1}return{result:m,resultCount:y}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(pl.registryHistogram,[r]);this.value=i}},Bu=class extends tt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Vu=class extends tl{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Yu=class extends Ls{constructor(e,r,i){super();o(this,"hash",Math.random());o(this,"groups",new Wu(this,[]));o(this,"opacity",new ju(this,1));o(this,"minmax",new Vu(this,void 0));o(this,"loading",new Bu(this,!1));o(this,"range",new Bd(this,void 0));o(this,"histogram",new Hu(this,[]));o(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof Xr?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Xr&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async postLoadedProcessing(){if(this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),r=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||r!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Gu=class extends tt{validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>e.forEveryInstance(r=>{r.canvasLayer.canvas.style.imageRendering=t===!0?"auto":"pixelated"}))}setSmooth(t){this.value=t}},Xu=class extends tt{validate(t){return t}afterSetEffect(){}setGraphSmooth(t){this.value=t}},ta=class extends Ls{constructor(e,r){super();o(this,"id");o(this,"service",new zu(this));o(this,"registries",{});o(this,"palette",new qd(this,"jet"));o(this,"smooth",new Gu(this,!1));o(this,"graphSmooth",new Xu(this,!1));o(this,"pool");this.pool=e||Wd.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Yu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}},qu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,bt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ku(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&qu(e,r,s),s};const xo=["ready","select"],Zu={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let lt=class extends at{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new Y,this.left=0,this.top=0,this.w=0,this.h=0}render(){return v`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){cc(this.shadowRoot.getElementById("chartdiv")).then(t=>{this.chartWrapper=t,this.onWrapper.call(t),this.typeChanged(),google.visualization.events.addListener(t,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(t,"select",()=>{this.selection=t.getChart().getSelection()}),this.propagateEvents(xo,t)})}updated(t){t.has("type")&&this.typeChanged(),(t.has("rows")||t.has("cols"))&&this.rowsOrColumnsChanged(),t.has("data")&&this.dataChanged(),t.has("view")&&this.viewChanged(),(t.has("_data")||t.has("options"))&&this.redraw(),t.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Zu[this.type]||this.type);const t=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==t&&this.propagateEvents(this.events.filter(i=>!xo.includes(i)),e);const r=this.shadowRoot.getElementById("styles");r.children.length||this.localizeGlobalStylesheets(r)}),this.redraw()}propagateEvents(t,e){for(const r of t)google.visualization.events.addListener(e,r,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${r}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const t=this.chartWrapper.getChart();if(t!=null&&t.setSelection){if(this.type==="timeline"){const e=JSON.stringify(t.getSelection());if(JSON.stringify(this.selection)===e)return}t.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const t=this.chartWrapper.visualization.ha.O;this.left=t.left,this.top=t.top,this.w=t.width,this.h=t.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const t=this.chartWrapper.getChart();return t&&t.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:t,cols:e}=this;if(!(!t||!e))try{const r=await oo({cols:e});r.addRows(t),this._data=r}catch(r){this.shadowRoot.getElementById("chartdiv").textContent=String(r)}}dataChanged(){let t=this.data,e;if(!t)return;let r=!1;try{t=JSON.parse(t)}catch{r=typeof t=="string"||t instanceof String}r?e=fetch(t).then(i=>i.json()):e=Promise.resolve(t),e.then(oo).then(i=>{this._data=i})}localizeGlobalStylesheets(t){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const r of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",r.getAttribute("href")),t.appendChild(i)}}};lt.styles=me`
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
  `;bt([b({type:String,reflect:!0})],lt.prototype,"type",2);bt([b({type:Array})],lt.prototype,"events",2);bt([b({type:Object,hasChanged:()=>!0})],lt.prototype,"options",2);bt([b({type:Array})],lt.prototype,"cols",2);bt([b({type:Array})],lt.prototype,"rows",2);bt([b({type:String})],lt.prototype,"data",2);bt([b({type:Object})],lt.prototype,"view",2);bt([b({type:Array})],lt.prototype,"selection",2);bt([b({type:Object})],lt.prototype,"_data",2);bt([b({type:Number,reflect:!0})],lt.prototype,"left",2);bt([b({type:Number,reflect:!0})],lt.prototype,"top",2);bt([b({type:Number,reflect:!0})],lt.prototype,"w",2);bt([b({type:Number,reflect:!0})],lt.prototype,"h",2);lt=bt([Z("thermal-chart")],lt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qu=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ra={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Us=t=>(...e)=>({_$litDirective$:t,values:e});let ia=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),xi(s,e);return!0},bs=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},bl=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),tp(e)}};function Ju(t){this._$AN!==void 0?(bs(this),this._$AM=t,bl(this)):this._$AM=t}function ep(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)xi(i[n],!1),bs(i[n]);else i!=null&&(xi(i,!1),bs(i));else xi(this,t)}const tp=t=>{t.type==ra.CHILD&&(t._$AP??(t._$AP=ep),t._$AQ??(t._$AQ=Ju))};class rp extends ia{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),bl(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(xi(this,e),bs(this))}setValue(e){if(Qu(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=()=>new ip;class ip{}const En=new WeakMap,Ie=Us(class extends rp{render(t){return z}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),z}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=En.get(e);r===void 0&&(r=new WeakMap,En.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=En.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var sp=Object.defineProperty,np=Object.getOwnPropertyDescriptor,wl=(t,e,r,i)=>{for(var s=i>1?void 0:i?np(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&sp(e,r,s),s};let Ci=class extends at{constructor(){super(),this.dialogRef=Te(),this.closeButtonRef=Te(),this.invokerRef=Te()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return v`
            <slot name="invoker" ${Ie(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Ie(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Ie(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Ci.shadowRootOptions={...at.shadowRootOptions,mode:"open"};Ci.styles=me`

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

        
    
    `;wl([b({type:String,reflect:!0})],Ci.prototype,"label",2);Ci=wl([Z("thermal-dialog")],Ci);var ap=Object.defineProperty,op=Object.getOwnPropertyDescriptor,Is=(t,e,r,i)=>{for(var s=i>1?void 0:i?op(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ap(e,r,s),s};let lr=class extends at{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return v`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};lr.VARIANTS=["slate","primary","foreground","background"];lr.shadowRootOptions={...at.shadowRootOptions,mode:"open"};lr.styles=me`

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
    
    `;Is([b({type:String,converter:{fromAttribute:t=>lr.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],lr.prototype,"variant",2);Is([b({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],lr.prototype,"interactive",2);Is([b({type:String})],lr.prototype,"size",2);lr=Is([Z("thermal-button")],lr);const qr=Math.min,or=Math.max,ws=Math.round,_r=t=>({x:t,y:t}),lp={left:"right",right:"left",bottom:"top",top:"bottom"},hp={start:"end",end:"start"};function So(t,e,r){return or(t,qr(e,r))}function Fi(t,e){return typeof t=="function"?t(e):t}function hr(t){return t.split("-")[0]}function Fs(t){return t.split("-")[1]}function xl(t){return t==="x"?"y":"x"}function Sl(t){return t==="y"?"height":"width"}function Ni(t){return["top","bottom"].includes(hr(t))?"y":"x"}function _l(t){return xl(Ni(t))}function cp(t,e,r){r===void 0&&(r=!1);const i=Fs(t),s=_l(t),n=Sl(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=xs(a)),[a,xs(a)]}function dp(t){const e=xs(t);return[Fn(t),e,Fn(e)]}function Fn(t){return t.replace(/start|end/g,e=>hp[e])}function up(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function pp(t,e,r,i){const s=Fs(t);let n=up(hr(t),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Fn)))),n}function xs(t){return t.replace(/left|right|bottom|top/g,e=>lp[e])}function fp(t){return{top:0,right:0,bottom:0,left:0,...t}}function $l(t){return typeof t!="number"?fp(t):{top:t,right:t,bottom:t,left:t}}function Kr(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function _o(t,e,r){let{reference:i,floating:s}=t;const n=Ni(e),a=_l(e),l=Sl(a),c=hr(e),p=n==="y",f=i.x+i.width/2-s.width/2,m=i.y+i.height/2-s.height/2,y=i[l]/2-s[l]/2;let S;switch(c){case"top":S={x:f,y:i.y-s.height};break;case"bottom":S={x:f,y:i.y+i.height};break;case"right":S={x:i.x+i.width,y:m};break;case"left":S={x:i.x-s.width,y:m};break;default:S={x:i.x,y:i.y}}switch(Fs(e)){case"start":S[a]-=y*(r&&p?-1:1);break;case"end":S[a]+=y*(r&&p?-1:1);break}return S}const mp=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:f,y:m}=_o(p,i,c),y=i,S={},C=0;for(let P=0;P<l.length;P++){const{name:k,fn:I}=l[P],{x:U,y:j,data:B,reset:W}=await I({x:f,y:m,initialPlacement:i,placement:y,strategy:s,middlewareData:S,rects:p,platform:a,elements:{reference:t,floating:e}});f=U??f,m=j??m,S={...S,[k]:{...S[k],...B}},W&&C<=50&&(C++,typeof W=="object"&&(W.placement&&(y=W.placement),W.rects&&(p=W.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):W.rects),{x:f,y:m}=_o(p,y,c)),P=-1)}return{x:f,y:m,placement:y,strategy:s,middlewareData:S}};async function Cl(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:y=!1,padding:S=0}=Fi(e,t),C=$l(S),k=l[y?m==="floating"?"reference":"floating":m],I=Kr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(k)))==null||r?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:f,strategy:c})),U=m==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,j=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(j))?await(n.getScale==null?void 0:n.getScale(j))||{x:1,y:1}:{x:1,y:1},W=Kr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:U,offsetParent:j,strategy:c}):U);return{top:(I.top-W.top+C.top)/B.y,bottom:(W.bottom-I.bottom+C.bottom)/B.y,left:(I.left-W.left+C.left)/B.x,right:(W.right-I.right+C.right)/B.x}}const gp=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:c,elements:p}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:y,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:P=!0,...k}=Fi(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const I=hr(s),U=hr(l)===l,j=await(c.isRTL==null?void 0:c.isRTL(p.floating)),B=y||(U||!P?[xs(l)]:dp(l));!y&&C!=="none"&&B.push(...pp(l,P,C,j));const W=[l,...B],he=await Cl(e,k),E=[];let G=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&E.push(he[I]),m){const q=cp(s,a,j);E.push(he[q[0]],he[q[1]])}if(G=[...G,{placement:s,overflows:E}],!E.every(q=>q<=0)){var X,Q;const q=(((X=n.flip)==null?void 0:X.index)||0)+1,se=W[q];if(se)return{data:{index:q,overflows:G},reset:{placement:se}};let ne=(Q=G.filter(ue=>ue.overflows[0]<=0).sort((ue,Le)=>ue.overflows[1]-Le.overflows[1])[0])==null?void 0:Q.placement;if(!ne)switch(S){case"bestFit":{var ce;const ue=(ce=G.map(Le=>[Le.placement,Le.overflows.filter(He=>He>0).reduce((He,Ue)=>He+Ue,0)]).sort((Le,He)=>Le[1]-He[1])[0])==null?void 0:ce[0];ue&&(ne=ue);break}case"initialPlacement":ne=l;break}if(s!==ne)return{reset:{placement:ne}}}return{}}}};function kl(t){const e=qr(...t.map(n=>n.left)),r=qr(...t.map(n=>n.top)),i=or(...t.map(n=>n.right)),s=or(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function vp(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>Kr(kl(s)))}const yp=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:l=2,x:c,y:p}=Fi(t,e),f=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),m=vp(f),y=Kr(kl(f)),S=$l(l);function C(){if(m.length===2&&m[0].left>m[1].right&&c!=null&&p!=null)return m.find(k=>c>k.left-S.left&&c<k.right+S.right&&p>k.top-S.top&&p<k.bottom+S.bottom)||y;if(m.length>=2){if(Ni(r)==="y"){const Q=m[0],ce=m[m.length-1],q=hr(r)==="top",se=Q.top,ne=ce.bottom,ue=q?Q.left:ce.left,Le=q?Q.right:ce.right,He=Le-ue,Ue=ne-se;return{top:se,bottom:ne,left:ue,right:Le,width:He,height:Ue,x:ue,y:se}}const k=hr(r)==="left",I=or(...m.map(Q=>Q.right)),U=qr(...m.map(Q=>Q.left)),j=m.filter(Q=>k?Q.left===U:Q.right===I),B=j[0].top,W=j[j.length-1].bottom,he=U,E=I,G=E-he,X=W-B;return{top:B,bottom:W,left:he,right:E,width:G,height:X,x:he,y:B}}return y}const P=await n.getElementRects({reference:{getBoundingClientRect:C},floating:i.floating,strategy:a});return s.reference.x!==P.reference.x||s.reference.y!==P.reference.y||s.reference.width!==P.reference.width||s.reference.height!==P.reference.height?{reset:{rects:P}}:{}}}};async function bp(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=hr(r),l=Fs(r),c=Ni(r)==="y",p=["left","top"].includes(a)?-1:1,f=n&&c?-1:1,m=Fi(e,t);let{mainAxis:y,crossAxis:S,alignmentAxis:C}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return l&&typeof C=="number"&&(S=l==="end"?C*-1:C),c?{x:S*f,y:y*p}:{x:y*p,y:S*f}}const wp=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=e,c=await bp(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+c.x,y:n+c.y,data:{...c,placement:a}}}}},xp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:k=>{let{x:I,y:U}=k;return{x:I,y:U}}},...c}=Fi(t,e),p={x:r,y:i},f=await Cl(e,c),m=Ni(hr(s)),y=xl(m);let S=p[y],C=p[m];if(n){const k=y==="y"?"top":"left",I=y==="y"?"bottom":"right",U=S+f[k],j=S-f[I];S=So(U,S,j)}if(a){const k=m==="y"?"top":"left",I=m==="y"?"bottom":"right",U=C+f[k],j=C-f[I];C=So(U,C,j)}const P=l.fn({...e,[y]:S,[m]:C});return{...P,data:{x:P.x-r,y:P.y-i}}}}};function ai(t){return Pl(t)?(t.nodeName||"").toLowerCase():"#document"}function _t(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Pr(t){var e;return(e=(Pl(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pl(t){return t instanceof Node||t instanceof _t(t).Node}function Zt(t){return t instanceof Element||t instanceof _t(t).Element}function Qt(t){return t instanceof HTMLElement||t instanceof _t(t).HTMLElement}function $o(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof _t(t).ShadowRoot}function zi(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=zt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function Sp(t){return["table","td","th"].includes(ai(t))}function Ns(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function sa(t){const e=na(),r=zt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function _p(t){let e=$r(t);for(;Qt(e)&&!Zr(e);){if(Ns(e))return null;if(sa(e))return e;e=$r(e)}return null}function na(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Zr(t){return["html","body","#document"].includes(ai(t))}function zt(t){return _t(t).getComputedStyle(t)}function zs(t){return Zt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $r(t){if(ai(t)==="html")return t;const e=t.assignedSlot||t.parentNode||$o(t)&&t.host||Pr(t);return $o(e)?e.host:e}function Al(t){const e=$r(t);return Zr(e)?t.ownerDocument?t.ownerDocument.body:t.body:Qt(e)&&zi(e)?e:Al(e)}function Nn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Al(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),a=_t(s);return n?e.concat(a,a.visualViewport||[],zi(s)?s:[],a.frameElement&&r?Nn(a.frameElement):[]):e.concat(s,Nn(s,[],r))}function Ol(t){const e=zt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Qt(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,l=ws(r)!==n||ws(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function Dl(t){return Zt(t)?t:t.contextElement}function Br(t){const e=Dl(t);if(!Qt(e))return _r(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=Ol(e);let a=(n?ws(r.width):r.width)/i,l=(n?ws(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const $p=_r(0);function El(t){const e=_t(t);return!na()||!e.visualViewport?$p:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Cp(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==_t(t)?!1:e}function ki(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=Dl(t);let a=_r(1);e&&(i?Zt(i)&&(a=Br(i)):a=Br(t));const l=Cp(n,r,i)?El(n):_r(0);let c=(s.left+l.x)/a.x,p=(s.top+l.y)/a.y,f=s.width/a.x,m=s.height/a.y;if(n){const y=_t(n),S=i&&Zt(i)?_t(i):i;let C=y,P=C.frameElement;for(;P&&i&&S!==C;){const k=Br(P),I=P.getBoundingClientRect(),U=zt(P),j=I.left+(P.clientLeft+parseFloat(U.paddingLeft))*k.x,B=I.top+(P.clientTop+parseFloat(U.paddingTop))*k.y;c*=k.x,p*=k.y,f*=k.x,m*=k.y,c+=j,p+=B,C=_t(P),P=C.frameElement}}return Kr({width:f,height:m,x:c,y:p})}function kp(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",a=Pr(i),l=e?Ns(e.floating):!1;if(i===a||l&&n)return r;let c={scrollLeft:0,scrollTop:0},p=_r(1);const f=_r(0),m=Qt(i);if((m||!m&&!n)&&((ai(i)!=="body"||zi(a))&&(c=zs(i)),Qt(i))){const y=ki(i);p=Br(i),f.x=y.x+i.clientLeft,f.y=y.y+i.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-c.scrollLeft*p.x+f.x,y:r.y*p.y-c.scrollTop*p.y+f.y}}function Pp(t){return Array.from(t.getClientRects())}function Tl(t){return ki(Pr(t)).left+zs(t).scrollLeft}function Ap(t){const e=Pr(t),r=zs(t),i=t.ownerDocument.body,s=or(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=or(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+Tl(t);const l=-r.scrollTop;return zt(i).direction==="rtl"&&(a+=or(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function Op(t,e){const r=_t(t),i=Pr(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,c=0;if(s){n=s.width,a=s.height;const p=na();(!p||p&&e==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:n,height:a,x:l,y:c}}function Dp(t,e){const r=ki(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Qt(t)?Br(t):_r(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,c=s*n.x,p=i*n.y;return{width:a,height:l,x:c,y:p}}function Co(t,e,r){let i;if(e==="viewport")i=Op(t,r);else if(e==="document")i=Ap(Pr(t));else if(Zt(e))i=Dp(e,r);else{const s=El(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return Kr(i)}function Ll(t,e){const r=$r(t);return r===e||!Zt(r)||Zr(r)?!1:zt(r).position==="fixed"||Ll(r,e)}function Ep(t,e){const r=e.get(t);if(r)return r;let i=Nn(t,[],!1).filter(l=>Zt(l)&&ai(l)!=="body"),s=null;const n=zt(t).position==="fixed";let a=n?$r(t):t;for(;Zt(a)&&!Zr(a);){const l=zt(a),c=sa(a);!c&&l.position==="fixed"&&(s=null),(n?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||zi(a)&&!c&&Ll(t,a))?i=i.filter(f=>f!==a):s=l,a=$r(a)}return e.set(t,i),i}function Tp(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const a=[...r==="clippingAncestors"?Ns(e)?[]:Ep(e,this._c):[].concat(r),i],l=a[0],c=a.reduce((p,f)=>{const m=Co(e,f,s);return p.top=or(m.top,p.top),p.right=qr(m.right,p.right),p.bottom=qr(m.bottom,p.bottom),p.left=or(m.left,p.left),p},Co(e,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Lp(t){const{width:e,height:r}=Ol(t);return{width:e,height:r}}function Rp(t,e,r){const i=Qt(e),s=Pr(e),n=r==="fixed",a=ki(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const c=_r(0);if(i||!i&&!n)if((ai(e)!=="body"||zi(s))&&(l=zs(e)),i){const m=ki(e,!0,n,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else s&&(c.x=Tl(s));const p=a.left+l.scrollLeft-c.x,f=a.top+l.scrollTop-c.y;return{x:p,y:f,width:a.width,height:a.height}}function Tn(t){return zt(t).position==="static"}function ko(t,e){return!Qt(t)||zt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Rl(t,e){const r=_t(t);if(Ns(t))return r;if(!Qt(t)){let s=$r(t);for(;s&&!Zr(s);){if(Zt(s)&&!Tn(s))return s;s=$r(s)}return r}let i=ko(t,e);for(;i&&Sp(i)&&Tn(i);)i=ko(i,e);return i&&Zr(i)&&Tn(i)&&!sa(i)?r:i||_p(t)||r}const Mp=async function(t){const e=this.getOffsetParent||Rl,r=this.getDimensions,i=await r(t.floating);return{reference:Rp(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Up(t){return zt(t).direction==="rtl"}const Ip={convertOffsetParentRelativeRectToViewportRelativeRect:kp,getDocumentElement:Pr,getClippingRect:Tp,getOffsetParent:Rl,getElementRects:Mp,getClientRects:Pp,getDimensions:Lp,getScale:Br,isElement:Zt,isRTL:Up},Fp=wp,Np=xp,zp=gp,jp=yp,Wp=(t,e,r)=>{const i=new Map,s={platform:Ip,...r},n={...s.platform,_c:i};return mp(t,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=Us(class extends ia{constructor(t){var e;if(super(t),t.type!==ra.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return xr}});var Hp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,ji=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Hp(e,r,s),s};let cr=class extends at{constructor(){super(...arguments),this.dropdownRef=Te(),this.invokerRef=Te(),this.optionsRef=Te(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Wp(this.invokerRef.value,this.optionsRef.value,{middleware:[Fp(2),zp(),jp(),Np()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return v`

            <div class="dropdown" ${Ie(this.dropdownRef)}>

                <thermal-button class="${Kt(t)}" ${Ie(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
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
                <div class="dropdown-options" ${Ie(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};cr.shadowRootOptions={...at.shadowRootOptions,mode:"open"};cr.styles=me`

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
    
    `;ji([Ii({slot:"option"})],cr.prototype,"_options",2);ji([b({type:String,reflect:!0})],cr.prototype,"open",2);ji([b({type:String,reflect:!0,attribute:!0}),x()],cr.prototype,"interactive",2);ji([b({type:String,reflect:!0})],cr.prototype,"variant",2);cr=ji([Z("thermal-dropdown")],cr);var Vp=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,js=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Vp(e,r,s),s};let Qr=class extends at{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Te(),this.contentRef=Te(),this.rulerContentRef=Te()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return v`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ie(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ie(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ie(this.contentRef)}>

                    ${this.collapsed===!1?v`
                        <slot></slot>    
                    `:z}
                
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
            `:z}
        
        `}};Qr.styles=me`

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

    `;js([x()],Qr.prototype,"collapsed",2);js([x()],Qr.prototype,"lastContentWidth",2);js([x()],Qr.prototype,"drawerRef",2);Qr=js([Z("thermal-bar")],Qr);var Gp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,rr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Gp(e,r,s),s};let Tt=class extends at{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Te(),this.contentRef=Te()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,a=r.contentRect.width,l=n-175,c=a-0,p=this.contentRef.value.offsetHeight,f=4/3;let m=0,y=0;p<l?(console.log("priorita šířky"),m=c,y=m/f):(console.log("priorita výšky"),y=l,m=y*f),this.contentRef.value.setAttribute("style",`width: ${m}px !important; height: ${y}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return v`

        <div class="container ${this.dark?"dark":"normal"}" ${Ie(this.appRef)}>

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
                `:z}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?v`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Ie(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?v`<div class="credits">

                    ${this.recorded?v`<div>
                            <div class="credits-field">Recorded at:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:z}

                    ${this.author?v`<div>
                            <div class="credits-field">Author:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:z}

                    ${this.license?v`<div>
                            <div class="credits-field">License:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:z}

                </div>`:z}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};Tt.styles=me`

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
                content: "Description:";
                opacity: .5;
                font-size: calc( var(--thermal-fs-sm) * 0.8 );
                display: block;
                padding-bottom: calc( var(--thermal-gap) * .5);
            }
        }
    
    `;rr([Ii({slot:"bar",flatten:!0})],Tt.prototype,"barElements",2);rr([Ii({slot:"pre",flatten:!0})],Tt.prototype,"preElements",2);rr([Ii({slot:"content",flatten:!0})],Tt.prototype,"contentElements",2);rr([b({type:String,reflect:!0})],Tt.prototype,"fullscreen",2);rr([b({type:String,reflect:!0,attribute:!0})],Tt.prototype,"showfullscreen",2);rr([b({type:String,reflect:!0,attribute:!0})],Tt.prototype,"dark",2);rr([b()],Tt.prototype,"author",2);rr([b()],Tt.prototype,"recorded",2);rr([b()],Tt.prototype,"license",2);Tt=rr([Z("thermal-app")],Tt);var qp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,aa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Kp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&qp(e,r,s),s};let Pi=class extends at{render(){return v`

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
        
        `}};Pi.styles=me`
    
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

    `;aa([b({type:String})],Pi.prototype,"label",2);aa([b({type:String})],Pi.prototype,"hint",2);Pi=aa([Z("thermal-field")],Pi);var Zp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,Jp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Zp(e,r,s),s};let zn=class extends at{render(){return v`
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
                        <p>version ${Yn}</p>
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
        `}};zn.styles=me`

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
    
    `;zn=Jp([Z("app-info-button")],zn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ml=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Po=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ml(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ef{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tf=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Ao extends ef{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const c=new Set;for(const[p,{consumerHost:f}]of this.subscriptions)c.has(p)||(c.add(p),f.dispatchEvent(new Ml(this.context,p,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new tf(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oe({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Ao(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Ao(a,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new Po(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new Po(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let hs;const rf=new Uint8Array(16);function sf(){if(!hs&&(hs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!hs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return hs(rf)}const nt=[];for(let t=0;t<256;++t)nt.push((t+256).toString(16).slice(1));function nf(t,e=0){return nt[t[e+0]]+nt[t[e+1]]+nt[t[e+2]]+nt[t[e+3]]+"-"+nt[t[e+4]]+nt[t[e+5]]+"-"+nt[t[e+6]]+nt[t[e+7]]+"-"+nt[t[e+8]]+nt[t[e+9]]+"-"+nt[t[e+10]]+nt[t[e+11]]+nt[t[e+12]]+nt[t[e+13]]+nt[t[e+14]]+nt[t[e+15]]}const af=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Oo={randomUUID:af};function of(t,e,r){if(Oo.randomUUID&&!e&&!t)return Oo.randomUUID();t=t||{};const i=t.random||(t.rng||sf)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,nf(i)}const Aa=class Aa extends at{constructor(){super(...arguments),this.UUID=of()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}};Aa.shadowRootOptions={...at.shadowRootOptions,mode:"open"};let Lt=Aa;const Ul="manager-instance",Ws="manager-palette-context",Il="manager-smooth-context",oa="manager-graph-function-context",lf=new ta,hf="__internal_default_registry",cf="__internal_default_group",df=t=>t.addOrGetRegistry(hf),uf=t=>t.groups.addOrGetGroup(cf);var pf=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,oi=(t,e,r,i)=>{for(var s=i>1?void 0:i?ff(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&pf(e,r,s),s};let dr=class extends Lt{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Mr.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();let t=lf;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=dr.sanitizeStringPalette(this.palette.key);e.palette=r,t=new ta(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)}),this.manager.smooth.addListener(this.UUIDManagerListeners,e=>{this.smooth=e}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,e=>{this.graphSmooth=e})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=dr.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(Mr).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:Mr[t]}}render(){return v`<slot></slot>`}};oi([Oe({context:Ul})],dr.prototype,"manager",2);oi([b({type:String,reflect:!0,attribute:!0})],dr.prototype,"slug",2);oi([Oe({context:Ws}),b({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:Mr[t]}),toAttribute:t=>t.key.toString()}})],dr.prototype,"palette",2);oi([Oe({context:Il}),b({type:String,reflect:!0,attribute:!0})],dr.prototype,"smooth",2);oi([Oe({context:oa}),b({type:String,reflect:!0,attribute:!0})],dr.prototype,"graphSmooth",2);dr=oi([Z("manager-provider")],dr);var mf=Object.defineProperty,gf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&mf(e,r,s),s};class Wi extends Lt{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}gf([le({context:Ul,subscribe:!0}),x()],Wi.prototype,"manager");const Fl="registry-instance",Nl="registry-opacity",la="registry-range-from",ha="registry-range-to",vf="registry-loading",zl="registry-min",jl="registry-max";var yf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,pr=(t,e,r,i)=>{for(var s=i>1?void 0:i?bf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&yf(e,r,s),s};let Jt=class extends Wi{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=df(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(t){super.updated(t),(t.has("from")||t.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="opacity"){const i=Math.min(1,Math.max(0,this.opacity));i!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(i)}}render(){return v`<slot></slot>`}};pr([b({type:String,reflect:!0,attribute:!0})],Jt.prototype,"slug",2);pr([Oe({context:Fl})],Jt.prototype,"registry",2);pr([Oe({context:Nl}),b({type:Number,reflect:!0,attribute:!0})],Jt.prototype,"opacity",2);pr([Oe({context:zl}),x()],Jt.prototype,"min",2);pr([Oe({context:jl}),x()],Jt.prototype,"max",2);pr([Oe({context:la}),b({type:Number,reflect:!0,attribute:!0})],Jt.prototype,"from",2);pr([Oe({context:ha}),b({type:Number,reflect:!0,attribute:!0})],Jt.prototype,"to",2);pr([Oe({context:vf}),b({type:String,reflect:!0,attribute:!0})],Jt.prototype,"loading",2);Jt=pr([Z("registry-provider")],Jt);var wf=Object.defineProperty,xf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&wf(e,r,s),s};class kt extends Wi{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}xf([le({context:Fl,subscribe:!0})],kt.prototype,"registry");const Wl="group-instance",ca="tool-context",da="tools-context";var Sf=Object.defineProperty,_f=Object.getOwnPropertyDescriptor,Hi=(t,e,r,i)=>{for(var s=i>1?void 0:i?_f(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Sf(e,r,s),s};let Jr=class extends kt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=uf(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return v`<slot></slot>`}};Hi([b({type:String,attribute:!0,reflect:!0})],Jr.prototype,"slug",2);Hi([Oe({context:Wl})],Jr.prototype,"group",2);Hi([Oe({context:ca})],Jr.prototype,"tool",2);Hi([Oe({context:da})],Jr.prototype,"tools",2);Jr=Hi([Z("group-provider")],Jr);var $f=Object.defineProperty,Cf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&$f(e,r,s),s};class li extends kt{constructor(){super()}connectedCallback(){super.connectedCallback()}}Cf([le({context:Wl,subscribe:!0})],li.prototype,"group");const Hl="file",Bl="failure",Vl="file-loading",kf="file-loaded",ua="file-provider-element",pa="file-ms-context",fa="file-cursor",ma="file-cursor-setter",Bi="playback",ga="duration",va="playing",Yl="playbackSpeed",Gl="recording",Xl="mayStop",Pf="analysislist",ya="file-markers-context";var Af=Object.defineProperty,ht=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Af(e,r,s),s};class rt extends li{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const r=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(r);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Y,this.onSuccess=new Y,this.onFailure=new Y,this.onInstanceCreated=new Y}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const r=Math.min(this.duration.ms,Math.max(0,this.ms));r!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(r)}e.has("playbackspeed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause())}attributeChangedCallback(e,r,i){super.attributeChangedCallback(e,r,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.speed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}}ht([Oe({context:Hl}),x()],rt.prototype,"file");ht([Oe({context:Bl}),x()],rt.prototype,"failure");ht([Oe({context:Vl}),x()],rt.prototype,"loading");ht([Oe({context:kf}),x()],rt.prototype,"ready");ht([Oe({context:va}),b({type:String,reflect:!0,attribute:!0})],rt.prototype,"playing");ht([Oe({context:ga}),x()],rt.prototype,"duration");ht([Oe({context:Bi}),x()],rt.prototype,"currentFrame");ht([Oe({context:fa})],rt.prototype,"cursor");ht([Oe({context:ma})],rt.prototype,"cursorSetter");ht([Oe({context:pa}),b({type:Number,reflect:!0,attribute:!0})],rt.prototype,"ms");ht([Oe({context:Yl}),b({type:Number,reflect:!0,attribute:!0})],rt.prototype,"speed");ht([Oe({context:Gl}),b({type:String,reflect:!0,attribute:!0})],rt.prototype,"recording");ht([Oe({context:Xl}),x()],rt.prototype,"mayStop");ht([Ii({slot:"mark",flatten:!0})],rt.prototype,"marksQueriedInternally");ht([Oe({context:ya})],rt.prototype,"marksProvidedBelow");ht([Oe({context:Pf})],rt.prototype,"analysis");var Of=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,Ht=(t,e,r,i)=>{for(var s=i>1?void 0:i?Df(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Of(e,r,s),s};let Rt=class extends rt{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Xr?await e.createInstance(this.group).then(r=>(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),r.group.registry.postLoadedProcessing(),this.loading=!1,r)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e)).then(e=>{e instanceof Jn?this.recieveInstance(e):this.failure=e})}createInitialAnalysis(t,e,r){if(r!==void 0&&r.trim().length>0){const i=t.slots.createFromSerialized(r,e);i==null||i.setSelected(!1,!0)}}handleLoaded(t){t.slots.onSlot1Serialize.set(this.UUID,e=>this.analysis1=e),t.slots.onSlot2Serialize.set(this.UUID,e=>this.analysis2=e),t.slots.onSlot3Serialize.set(this.UUID,e=>this.analysis3=e),t.slots.onSlot4Serialize.set(this.UUID,e=>this.analysis4=e),t.slots.onSlot5Serialize.set(this.UUID,e=>this.analysis5=e),t.slots.onSlot6Serialize.set(this.UUID,e=>this.analysis6=e),t.slots.onSlot7Serialize.set(this.UUID,e=>this.analysis7=e),this.createInitialAnalysis(t,1,this.analysis1),this.createInitialAnalysis(t,2,this.analysis2),this.createInitialAnalysis(t,3,this.analysis3),this.createInitialAnalysis(t,4,this.analysis4),this.createInitialAnalysis(t,5,this.analysis5),this.createInitialAnalysis(t,6,this.analysis6),this.createInitialAnalysis(t,7,this.analysis7)}assignAppropriateField(t,e){t===1?this.analysis1=e:t===2?this.analysis2=e:t===3?this.analysis3=e:t===4?this.analysis4=e:t===5?this.analysis5=e:t===6?this.analysis6=e:t===7&&(this.analysis7=e)}connectedCallback(){super.connectedCallback(),this.load()}updated(t){if(super.updated(t),t.has("thermal")){const e=t.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}this.handleAnalysisUpdate(1,t),this.handleAnalysisUpdate(2,t),this.handleAnalysisUpdate(3,t),this.handleAnalysisUpdate(4,t),this.handleAnalysisUpdate(5,t),this.handleAnalysisUpdate(6,t),this.handleAnalysisUpdate(7,t)}handleAnalysisUpdate(t,e){const r=`analysis${t}`;if(e.has(r)){const i=e.get(r),s=this[r];if(this.file){const n=this.file.slots.getSlot(t);if(n===void 0&&s&&s.trim().length>0&&(!i||(i==null?void 0:i.trim().length)>0)){const a=this.file.slots.createFromSerialized(s,t);a==null||a.setSelected(!1,!0)}else n!==void 0&&i&&!s&&(s==null?void 0:s.trim().length)===0?this.file.slots.removeSlotAndAnalysis(t):n&&s&&(n==null||n.recieveSerialized(s))}}}render(){return v`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};Ht([Oe({context:ua})],Rt.prototype,"providedSelf",2);Ht([b({type:String,attribute:!0,reflect:!0})],Rt.prototype,"thermal",2);Ht([b({type:String,attribute:!0,reflect:!0})],Rt.prototype,"visible",2);Ht([b({type:String,reflect:!0,attribute:!0})],Rt.prototype,"analysis1",2);Ht([b({type:String,reflect:!0,attribute:!0})],Rt.prototype,"analysis2",2);Ht([b({type:String,reflect:!0,attribute:!0})],Rt.prototype,"analysis3",2);Ht([b({type:String,reflect:!0,attribute:!0})],Rt.prototype,"analysis4",2);Ht([b({type:String,reflect:!0,attribute:!0})],Rt.prototype,"analysis5",2);Ht([b({type:String,reflect:!0,attribute:!0})],Rt.prototype,"analysis6",2);Ht([b({type:String,reflect:!0,attribute:!0})],Rt.prototype,"analysis7",2);Rt=Ht([Z("file-provider")],Rt);var Ef=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,hi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Tf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ef(e,r,s),s};let Cr=class extends rt{constructor(){super(...arguments),this.providedSelf=this,this.container=Te(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof Xr){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof ys&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return v`

                    <div class="container">
                        <div ${Ie(this.container)} class="${Kt(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${gl.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return v`
            ${this.ready?v`<slot></slot>`:z}
            <slot name="mark"></slot>
        `}};Cr.styles=me`

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
    
    `;hi([Oe({context:ua})],Cr.prototype,"providedSelf",2);hi([x()],Cr.prototype,"container",2);hi([x()],Cr.prototype,"ready",2);hi([x()],Cr.prototype,"hover",2);hi([x()],Cr.prototype,"listener",2);Cr=hi([Z("file-dropin")],Cr);var Lf=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,ba=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Lf(e,r,s),s};let Ai=class extends li{constructor(){super(...arguments),this.container=Te(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return v`

            <div class="container">
            
                <div ${Ie(this.container)} class="${Kt(t)}"></div>

            </div>
        
        `}};Ai.styles=me`

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
    
    `;ba([x()],Ai.prototype,"container",2);ba([x()],Ai.prototype,"hover",2);Ai=ba([Z("group-dropin")],Ai);var Mf=Object.defineProperty,Uf=Object.getOwnPropertyDescriptor,ql=(t,e,r,i)=>{for(var s=i>1?void 0:i?Uf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Mf(e,r,s),s};let Ss=class extends kt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return v`

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

                ${Object.entries(Mr).map(([t,e])=>v`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};Ss.styles=me`

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

    `;ql([le({context:Ws,subscribe:!0})],Ss.prototype,"value",2);Ss=ql([Z("registry-palette-dropdown")],Ss);var If=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,Kl=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ff(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&If(e,r,s),s};let _s=class extends kt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return v`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return v`
            <div class="container">
                ${Object.entries(Mr).map(([t,e])=>v`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};_s.styles=me`

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

    `;Kl([le({context:Ws,subscribe:!0}),x()],_s.prototype,"value",2);_s=Kl([Z("registry-palette-buttons")],_s);var Nf=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,Zl=(t,e,r,i)=>{for(var s=i>1?void 0:i?zf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Nf(e,r,s),s};let $s=class extends Wi{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.smooth.setSmooth(!1)}
            >Pixelated</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.smooth.setSmooth(!0)}
            >Smooth</thermal-button>
        `}};$s.styles=me`
    
        :host {}

    `;Zl([le({context:Il,subscribe:!0})],$s.prototype,"smooth",2);$s=Zl([Z("manager-smooth-switch")],$s);var jf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,Ql=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&jf(e,r,s),s};let Cs=class extends Wi{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
            >Straight lines</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
            >Smooth lines</thermal-button>
        `}};Cs.styles=me`
    
        :host {}

    `;Ql([le({context:oa,subscribe:!0})],Cs.prototype,"smooth",2);Cs=Ql([Z("manager-graph-smooth-switch")],Cs);var Hf=Object.defineProperty,Bf=Object.getOwnPropertyDescriptor,Jl=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Hf(e,r,s),s};let ks=class extends kt{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return v`
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
        `}};ks.styles=me`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;Jl([le({context:Nl,subscribe:!0})],ks.prototype,"value",2);ks=Jl([Z("registry-opacity-slider")],ks);var Vf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,Gf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Vf(e,r,s),s};let Do=class extends kt{doAction(){this.registry.range.applyAuto()}render(){return v`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Do=Gf([Z("registry-range-auto-button")],Do);var Xf=Object.defineProperty,qf=Object.getOwnPropertyDescriptor,Kf=(t,e,r,i)=>{for(var s=i>1?void 0:i?qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Xf(e,r,s),s};let Eo=class extends kt{doAction(){this.registry.range.applyMinmax()}render(){return v`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Eo=Kf([Z("registry-range-full-button")],Eo);var Zf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,Hs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Zf(e,r,s),s};let er=class extends kt{constructor(){super(...arguments),this.ticksRef=Te(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/er.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return v`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Ie(this.ticksRef)}>

                    ${this.ticks.map(t=>v`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(er.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};er.TICK_WIDTH=40;er.TICK_FIXED=2;er.styles=me`

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


    `;Hs([b({type:String,reflect:!0})],er.prototype,"placement",2);Hs([x()],er.prototype,"minmax",2);Hs([x()],er.prototype,"ticks",2);er=Hs([Z("registry-ticks-bar")],er);var Jf=Object.defineProperty,em=Object.getOwnPropertyDescriptor,Vi=(t,e,r,i)=>{for(var s=i>1?void 0:i?em(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Jf(e,r,s),s};let ei=class extends kt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return v`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return v`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Vi([x()],ei.prototype,"minmax",2);Vi([x()],ei.prototype,"range",2);Vi([x()],ei.prototype,"opacity",2);Vi([x()],ei.prototype,"palette",2);ei=Vi([Z("registry-log")],ei);(()=>{var t=Object.defineProperty,e=Math.pow,r=(h,u,w)=>u in h?t(h,u,{enumerable:!0,configurable:!0,writable:!0,value:w}):h[u]=w,i=(h,u,w)=>(r(h,typeof u!="symbol"?u+"":u,w),w),s=(h,u)=>` ${u&&u.length>0?u.map(w=>`<link rel="stylesheet" href="${w}" />`).join(""):""} <style> ${h} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",c="pointers-max-distance",p="range-dragging",f="data",m="min",y="max",S="step",C="round",P="type",k="theme",I="rtl",U="btt",j="disabled",B="keyboard-disabled",W="mousewheel-disabled",he="slider-width",E="slider-height",G="slider-radius",X="slider-bg",Q="slider-bg-hover",ce="slider-bg-fill",q="pointer-width",se="pointer-height",ne="pointer-radius",ue="pointer-bg",Le="pointer-bg-hover",He="pointer-bg-focus",Ue="pointer-shadow",wt="pointer-shadow-hover",xt="pointer-shadow-focus",nr="pointer-border",Bt="pointer-border-hover",Vt="pointer-border-focus",Yt="animate-onclick",Ft="css-links",Ne="vertical",it="horizontal",Or=(h,u,w,g,M)=>{let te=u-h;return te===0?w:(g-w)*(M-h)/te+w},ut=h=>!isNaN(parseFloat(h))&&isFinite(h),ze=(h,u)=>ut(h)?Number(h):u,Xi=(h,u)=>u===0?0:Math.round(h/u)*u,Xs=(h,u=1/0)=>{if(u===1/0)return h;let w=e(10,u);return Math.round(h*w)/w},Ze=h=>h==null?!1:typeof h=="boolean"?h:h.trim().toLowerCase()==="true",qs=(h,u)=>{h.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},Ks=(h,u)=>{h.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},Zs=(h,u)=>{h.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},Qs=(h,u)=>{h.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},Js=(h,u)=>{if(!u||u.length<=0)return;let w=u.map(M=>ut(M)?ze(M,M):M),g={values:w||[]};g.value=w[0],g.value0=w[0],g.value1=w[0];for(let M=1;M<w.length;M++)g[`value${M+1}`]=w[M];h.dispatchEvent(new CustomEvent("change",{detail:g}))},A=(h,u,w)=>{let g=0,M,te,fe,F,N=!1,ge=(ie,Me,et,Qe,Ve,Ye)=>{let ft=g;et!==void 0&&ie>et&&(ie=et),Me!==void 0&&ie<Me&&(ie=Me),g=ie;let mt=g;return(Qe===Ne&&Ye||Qe===it&&Ve)&&(mt=100-mt),Qe===Ne?u.style.top=`${mt}%`:u.style.left=`${mt}%`,ft!==g},we=ie=>ie===u||u.contains(ie),K=(ie,Me,et,Qe)=>{M=ie,te=Me,fe=et,F=Qe},De=ie=>{N=ie,u.classList.toggle("disabled",N),N?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},Dt=(ie,Me)=>{Me==null?u.removeAttribute(ie):u.setAttribute(ie,Me)},ot=ie=>u.getAttribute(ie),re=ie=>{if(!N){switch(ie.key){case"ArrowLeft":{ie.preventDefault(),typeof M=="function"&&M(w);break}case"ArrowRight":{ie.preventDefault(),typeof te=="function"&&te(w);break}case"ArrowUp":{ie.preventDefault(),typeof fe=="function"&&fe(w);break}case"ArrowDown":{ie.preventDefault(),typeof F=="function"&&F(w);break}}Qs(h,ie)}},ve=()=>{N||qs(h,u)};return u.className=`pointer pointer-${w}`,u.addEventListener("keydown",re),u.addEventListener("click",ve),{$pointer:u,get percent(){return g},get disabled(){return N},set disabled(ie){De(ie)},updatePosition:ge,isClicked:we,setCallbacks:K,setAttr:Dt,getAttr:ot,destroy:()=>{u.removeEventListener("keydown",re),u.removeEventListener("click",ve),u.remove()}}},T=h=>{if(h==null)return;if(Array.isArray(h))return h;if(h.trim()==="")return;let u=h.split(","),w=[],g=!0;for(let M=0;M<u.length;M++){let te=u[M].trim();te!==""&&(w.push(te),ut(te)||(g=!1))}return g?w.map(M=>Number(M)):w},L=(h,u)=>u?u.findIndex(w=>w===h||w.toString().trim()===h.toString().trim()):-1,R=h=>({updatePosition:(u,w,g,M)=>{if(w.length<=0)return;let te=w.length===1,fe=w[0],F=w[w.length-1];u===Ne?(h.style.removeProperty("width"),h.style.removeProperty("right"),h.style.removeProperty("left"),te?h.style.height=`${fe}%`:h.style.height=`${Math.abs(fe-F)}%`,M?(h.style.bottom="0%",te?h.style.top="auto":h.style.top=`${Math.min(100-F,100-fe)}%`):(h.style.bottom="auto",te?h.style.top="0%":h.style.top=`${Math.min(fe,F)}%`)):(h.style.removeProperty("height"),h.style.removeProperty("top"),h.style.removeProperty("bottom"),te?h.style.width=`${fe}%`:h.style.width=`${Math.abs(fe-F)}%`,g?(h.style.right="0%",te?h.style.left="auto":h.style.left=`${Math.min(100-F,100-fe)}%`):(h.style.right="auto",te?h.style.left="0%":h.style.left=`${Math.min(fe,F)}%`))}}),ee="--animate-onclick",ke="--width",oe="--height",Re="--panel-bg-border-radius",Se="--panel-bg",H="--panel-bg-hover",_e="--panel-bg-fill",$="--pointer-width",O="--pointer-height",de="--pointer-border-radius",ye="--pointer-bg",qe="--pointer-bg-hover",st="--pointer-bg-focus",Gt="--pointer-shadow",St="--pointer-shadow-hover",Ot="--pointer-shadow-focus",gr="--pointer-border",J="--pointer-border-hover",pe="--pointer-border-focus",D=(h,u,w)=>{let g=new Map;for(let M of h.attributes){let te=M.nodeName.trim().toLowerCase();if(!u.test(te))continue;let fe=te.replace(/\D/g,"").trim(),F=fe===""||fe==="0"||fe==="1"?0:ze(fe,0)-1,N=w&&typeof w=="function"?w(M.value):M.value;g.set(F,N)}return g},ae=h=>{if(!h)return null;let u=h.getAttribute(Ft);if(!u)return null;let w=u.split(";"),g=[];for(let M of w)M.trim()!==""&&g.push(M.trim());return g},Pe=[[ke,he,"sliderWidth",null],[oe,E,"sliderHeight",null],[Re,G,"sliderRadius",null],[Se,X,"sliderBg",null],[H,Q,"sliderBgHover",null],[_e,ce,"sliderBgFill",null],[$,q,"pointer#Width",/^pointer([0-9]*)-width$/],[O,se,"pointer#Height",/^pointer([0-9]*)-height$/],[de,ne,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ye,ue,"pointer#Bg",/^pointer([0-9]*)-bg$/],[qe,Le,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[st,He,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Gt,Ue,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[St,wt,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Ot,xt,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[gr,nr,"pointer#Border",/^pointer([0-9]*)-border$/],[J,Bt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[pe,Vt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Ce=(h,u,w)=>{let g=null,M=[],te=new Map,fe=(re,ve=u)=>{let ie=[...ve.classList];for(let Me of ie)Me.startsWith(re)&&u.classList.remove(Me)},F=()=>{fe("shape");let re=u.querySelectorAll(".pointer");for(let ve of re)fe("shape",ve)},N=re=>{g=re,fe("theme-"),typeof re=="string"&&u.classList.add(`theme-${re}`)},ge=()=>{if(F(),!(M.length<=0)){u.classList.add("shape",`shape-${M[0]}`);for(let re=1;re<M.length;re++){let ve=M[re];if(!ve)continue;let ie=u.querySelector(`.pointer-${re}`);!ie||ie.classList.add("shape",`shape-${ve}`)}}},we=(re,ve)=>{M[re]=ve,ge()},K=()=>{F();let re=D(h,/^pointer([0-9]*)-shape$/);if(!(re.size<=0)){for(let ve of re){let ie=ve[0];M[ie]=ve[1]}ge()}},De=(re,ve)=>`${re}-${ve}`,Dt=(re,ve,ie)=>{let Me=w[ie];if(!Me)return;let et=ie===0?u:Me.$pointer;if(ve==null){te.has(De(re,ie))&&te.delete(De(re,ie)),et.style.removeProperty(re);return}te.set(De(re,ie),ve),et.style.setProperty(re,ve)},ot=(re,ve)=>te.get(De(re,ve));return(()=>{for(let re of Pe){let[ve,ie,Me,et]=re;if(et){let Ve=D(h,et);for(let Ye of Ve){let ft=Ye[0],mt=Ye[1];Dt(ve,mt,ft)}}else{let Ve=h.getAttribute(ie);Dt(ve,Ve,0)}let Qe=[];if(Me.indexOf("#")===-1)Qe.push([Me,0]);else{Qe.push([Me.replace("#",""),0]),Qe.push([Me.replace("#","0"),0]),Qe.push([Me.replace("#","1"),0]);for(let Ve=1;Ve<w.length;Ve++)Qe.push([Me.replace("#",(Ve+1).toString()),Ve])}for(let Ve of Qe)try{let Ye=Ve[0],ft=Ve[1];Object.prototype.hasOwnProperty.call(h,Ye)||Object.defineProperty(h,Ye,{get(){return ot(ve,ft)},set:mt=>{Dt(ve,mt,ft)}})}catch(Ye){console.error(Ye)}}N(h.getAttribute(k)),K()})(),{setStyle:Dt,getStyle:ot,get theme(){return g},set theme(re){N(re)},get pointerShapes(){return M},setPointerShape:we}},je="animate-on-click",be="range-dragging",pt=(h,u,w,g)=>{let M=[],te=we=>{for(let K of M)K.update&&typeof K.update=="function"&&K.update(we)},fe=()=>{for(let we of M)we.destroy&&typeof we.destroy=="function"&&we.destroy()},F=(we,K)=>{for(let De of M)De.onAttrChange&&typeof De.onAttrChange=="function"&&De.onAttrChange(we,K)},N=we=>{if(we.gettersAndSetters){for(let K of we.gettersAndSetters)if(!(!K.name||!K.attributes))try{Object.prototype.hasOwnProperty.call(h,K.name)||Object.defineProperty(h,K.name,K.attributes)}catch(De){console.error("defineSettersGetters error:",De)}}},ge=we=>{var K;if(!we.css)return;let De=(K=h.shadowRoot)==null?void 0:K.querySelector("style");!De||(De.innerHTML+=we.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let we of window.tcRangeSliderPlugins){let K=we();M.push(K),K.init&&typeof K.init=="function"&&(K.init(h,u,w,g),N(K),ge(K))}},update:te,onAttrChange:F,destroy:fe}},Ke=10,qi=20,rh=(h,u)=>{let w=new Map,g=/^value([0-9]*)$/;for(let F of h.attributes){let N=F.nodeName.trim().toLowerCase();if(!g.test(N))continue;let ge=N.replace("value","").trim(),we=ge===""||ge==="0"||ge==="1"?0:ze(ge,0)-1,K=ut(F.value)?ze(F.value,0):F.value;w.set(we,K)}let M=Math.max(...Array.from(w.keys())),te=[];te.push([A(h,u,0),w.get(0)]);let fe=u;for(let F=1;F<=M;F++){let N=u.cloneNode(!0);fe.after(N),fe=N,te.push([A(h,N,F),w.get(F)])}return te},Oa=(h,u,w,g,M,te,fe)=>{try{Object.defineProperty(h,g,{configurable:!0,get(){if(!u)return;let F=u.pointers[w];if(!F)return;let N=u.getTextValue(F.percent);return ut(N)?ze(N,N):N},set:F=>{u.pointers[w]?u==null||u.setValue(F,w):u==null||u.addPointer(F)}}),Object.defineProperty(h,M,{configurable:!0,get(){var F,N;return(N=(F=u==null?void 0:u.pointers[w])==null?void 0:F.getAttr("aria-label"))!=null?N:void 0},set:F=>{!u||u.setAriaLabel(w,F)}}),Object.defineProperty(h,te,{configurable:!0,get(){var F,N;return(N=(F=u==null?void 0:u.styles)==null?void 0:F.pointerShapes[w])!=null?N:null},set:F=>{!u||!u.styles||u.styles.setPointerShape(w,F)}}),Object.defineProperty(h,fe,{configurable:!0,get(){var F;return(F=u==null?void 0:u.pointers[w].disabled)!=null?F:!1},set:F=>{if(!u)return;let N=u==null?void 0:u.pointers[w];!N||(N.disabled=F)}})}catch(F){console.error(F)}},ih=(h,u)=>{let w=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Ke;g++)w.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of w)Oa(h,u,g[4],g[0],g[1],g[2],g[3])},Da=(h,u,w)=>{var g;let M=(g=w.shadowRoot)==null?void 0:g.querySelector(".container");if(M)for(let te of h)u?M.prepend(te.$pointer):M.append(te.$pointer)},sh=(h,u)=>{if(!(!u||h.length<=1)){for(let w of h)w.$pointer.style.zIndex=qi.toString();u.$pointer.style.zIndex=(qi*2).toString()}},en=0,di=100,Nr=2,Ea="0.3s",nh=(h,u,w)=>{let g=w.map(d=>d[0]),M=null,te=null,fe=null,F=null,N=en,ge=di,we,K,De=it,Dt=Nr,ot=!1,re=!1,ve=!1,ie=0,Me=1/0,et=!1,Qe,Ve,Ye=!1,ft=!1,mt=!1,vr=Ea,Ta=[],La=d=>{Ye||(d.preventDefault&&d.preventDefault(),Dr(d),window.addEventListener("mousemove",Dr),window.addEventListener("mouseup",Ki),Ks(h,d))},Ki=d=>{Ye||(Qe=void 0,Ve=void 0,window.removeEventListener("mousemove",Dr),window.removeEventListener("mouseup",Ki),vr&&u.classList.add(je),Zs(h,d))},lh=(d,_)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(d)&&vr&&u.classList.remove(je),g[0];let V=ch(d);if(et){let Ae=_,Nt=Qi(Ae);Nt!==void 0&&(Ae=Xi(Ae,Nt)),V?(Qe=Ae,Ve=0,vr&&u.classList.remove(je)):Qe!==void 0&&(Ve=Ae-Qe,Qe=Ae)}if(!hh(d)&&!V){for(let Ae of g)if(!(!Ae.isClicked(d)||Ae.disabled))return vr&&u.classList.remove(je),Ae;for(let Ae of g)if(M===Ae)return Ae}let Ee=1/0,Ge=null;for(let Ae of g){if(Ae.disabled)continue;let Nt=Math.abs(_-Ae.percent);Nt<Ee&&(Ee=Nt,Ge=Ae)}return Ge},Ra=()=>g.findIndex(d=>M===d&&!d.disabled),Dr=d=>{let _;if(De===Ne){let{height:Ee,top:Ge}=u.getBoundingClientRect(),Ae=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;_=Math.min(Math.max(0,Ae-Ge),Ee)*100/Ee}else{let{width:Ee,left:Ge}=u.getBoundingClientRect(),Ae=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;_=Math.min(Math.max(0,Ae-Ge),Ee)*100/Ee}if((ot||re)&&(_=100-_),M=lh(d.target,_),M&&sh(g,M),et&&g.length>1&&Ve!==void 0){let Ee=g[0],Ge=g[g.length-1],Ae=Ee.percent+Ve<0,Nt=Ge.percent+Ve>100;if(Ae||Nt)return;for(let as=0;as<g.length;as++)gt(as,g[as].percent+Ve);return}let V=Ra();V!==-1&&(gt(V,_),M==null||M.$pointer.focus())},Zi=d=>{if(Ye||document.activeElement!==h||M!=null&&M.disabled)return;d.stopPropagation(),d.preventDefault();let _=d.deltaY<0,V=ot||re,Ee=_?!V:V,Ge=Ra();Ge!==-1&&(Ee?ui(Ge,g[Ge].percent):pi(Ge,g[Ge].percent))},Ma=d=>{Ye||ft||(De===Ne?re?gt(d,100):gt(d,0):ot?pi(d,g[d].percent):ui(d,g[d].percent))},Ua=d=>{Ye||ft||(De===Ne?re?gt(d,0):gt(d,100):ot?ui(d,g[d].percent):pi(d,g[d].percent))},Ia=d=>{Ye||ft||(De===Ne?re?pi(d,g[d].percent):ui(d,g[d].percent):ot?gt(d,100):gt(d,0))},Fa=d=>{Ye||ft||(De===Ne?re?ui(d,g[d].percent):pi(d,g[d].percent):ot?gt(d,0):gt(d,100))},hh=d=>d.classList.contains("panel"),ch=d=>d.classList.contains("panel-fill"),ui=(d,_)=>{if(_===void 0)return;let V=Qi(_);V==null&&(V=1),_-=V,_<0&&(_=0),gt(d,_)},pi=(d,_)=>{if(_===void 0)return;let V=Qi(_);V==null&&(V=1),_+=V,_>100&&(_=100),gt(d,_)},Er=()=>{!F||F.update({percents:Na(),values:za(),$pointers:ja(),min:Wa(),max:Ha(),data:sn(),step:rn(),round:an(),type:nn(),textMin:Ji(),textMax:es(),rightToLeft:hn(),bottomToTop:cn(),pointersOverlap:fn(),pointersMinDistance:on(),pointersMaxDistance:ln(),rangeDragging:mn(),disabled:dn(),keyboardDisabled:un(),mousewheelDisabled:pn()})},dh=()=>{Er()},uh=d=>{if(!(ve||g.length<=1||ge===N))if(d===0){let _=Me*100/(ge-N);return Math.max(0,g[d+1].percent-_)}else{let _=ie*100/(ge-N);return Math.min(g[d-1].percent+_,100)}},ph=d=>{if(!(ve||g.length<=1||ge===N))if(d===g.length-1){let _=Me*100/(ge-N);return Math.min(g[d-1].percent+_,100)}else{let _=ie*100/(ge-N);return Math.max(0,g[d+1].percent-_)}},Qi=d=>{let _;if(typeof we=="function"){let V=Or(0,100,N,ge,d);_=we(V,d)}else _=we;if(ut(_)){let V=ge-N;return _=V===0?0:_*100/V,_}},zr=d=>{if(d===void 0)return;let _=Or(0,100,N,ge,d);return K!==void 0?K[Math.round(_)]:Xs(_,Dt)},Ji=()=>K!==void 0?K[N]:N,es=()=>K!==void 0?K[ge]:ge,rn=()=>we,fh=d=>{var _;return d<=0||ve?Ji():(_=zr(g[d-1].percent))!=null?_:""},mh=d=>{var _;return g.length<=1||d>=g.length-1||ve?es():(_=zr(g[d+1].percent))!=null?_:""},Na=()=>g.map(d=>d.percent),za=()=>g.map(d=>zr(d.percent)),ja=()=>g.map(d=>d.$pointer),Wa=()=>N,Ha=()=>ge,sn=()=>K,nn=()=>De,an=()=>Dt,on=()=>ie,ln=()=>Me,gh=d=>Ta[d],hn=()=>ot,cn=()=>re,dn=()=>Ye,un=()=>ft,pn=()=>mt,fn=()=>ve,mn=()=>et,gt=(d,_)=>{if(_===void 0)return;let V=Qi(_);V!==void 0&&(_=Xi(_,V));let Ee=g[d];if(!Ee)return;let Ge=Ee.updatePosition(_,uh(d),ph(d),De,ot,re);te==null||te.updatePosition(De,g.map(Ae=>Ae.percent),ot,re),Er();for(let Ae of g){let Nt=zr(Ae.percent);Nt!==void 0&&(Ae.setAttr("aria-valuenow",Nt.toString()),Ae.setAttr("aria-valuetext",Nt.toString()))}yh(),Ge&&Js(h,g.map(Ae=>zr(Ae.percent)))},Xt=()=>{for(let d=0;d<g.length;d++)gt(d,g[d].percent)},vh=(d,_)=>{N=K!==void 0?0:ze(d,en),ge=K!==void 0?K.length-1:ze(_,di),ts(N),rs(ge)},yh=()=>{var d,_;for(let V=0;V<g.length;V++){let Ee=g[V];Ee.setAttr("aria-valuemin",((d=fh(V))!=null?d:"").toString()),Ee.setAttr("aria-valuemax",((_=mh(V))!=null?_:"").toString())}},ts=d=>{N=ze(d,en),N>ge&&(ge=N+di),Xt()},rs=d=>{ge=ze(d,di),ge<N&&(ge=N+di),Xt()},Ba=d=>{ve=!0;for(let _=0;_<d.length;_++)is(d[_],_);ve=!1;for(let _=0;_<d.length;_++)is(d[_],_)},is=(d,_)=>{let V;K!==void 0?(V=d==null?0:L(d,K),V===-1&&(V=0)):(V=ze(d,N),V<N&&(V=N),V>ge&&(V=ge));let Ee=Or(N,ge,0,100,V);gt(_,Ee)},ss=d=>{if(d==null){we=void 0;return}if(typeof d=="function"){we=d,Xt();return}if(ut(d)){we=ze(d,1);let _=Math.abs(ge-N);we>_&&(we=void 0),Xt();return}we=void 0},gn=d=>{ve=d,Xt()},vn=d=>{(!ut(d)||d<0)&&(d=0),ie=d},yn=d=>{(!ut(d)||d<0)&&(d=1/0),Me=d},bn=d=>{Ye=d,u.classList.toggle("disabled",Ye),Ye?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},Va=d=>{ft=d},Ya=d=>{mt=d,mt?document.removeEventListener("wheel",Zi):document.addEventListener("wheel",Zi,{passive:!1})},wn=d=>{if(d==null){K=void 0;return}if(K=T(d),K===void 0||K.length<=0){K=void 0;return}ts(0),rs(K.length-1),we===void 0&&ss(1)},xn=d=>{var _;typeof d=="string"?De=d.trim().toLowerCase()===Ne?Ne:it:De=it;let V=(_=h.shadowRoot)==null?void 0:_.querySelector(".range-slider-box");if(!V)return;V.className=`range-slider-box type-${De}`,Xt();let Ee=De===Ne?"vertical":"horizontal";for(let Ge of g)Ge.setAttr("aria-orientation",Ee)},Sn=d=>{ot=d,g.length>1&&Da(g,ot,h),Xt(),Er()},_n=d=>{re=d,g.length>1&&Da(g,re,h),Xt(),Er()},$n=d=>{Dt=ze(d,Nr),Dt<0&&(Dt=Nr),Er()},Ga=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(vr=void 0,u.style.removeProperty(ee),u.classList.remove(je)):(vr=d.toString(),u.style.setProperty(ee,vr),u.classList.add(je))},Xa=(d,_)=>{let V=g[d];!V||(V.setAttr("aria-label",_),Ta[d]=_)},ns=d=>{if(Qe=void 0,g.length<=1){et=!1,u.classList.remove(be);return}et=d,u.classList.toggle(be,et)},bh=()=>{bn(Ze(h.getAttribute(j))),ft=Ze(h.getAttribute(B)),mt=Ze(h.getAttribute(W));let d=D(h,/^pointer([0-9]*)-disabled$/,_=>Ze(_));for(let _ of d){let V=_[0];!g[V]||(g[V].disabled=_[1])}},wh=()=>{let d=D(h,/^aria-label([0-9]*)$/);for(let _ of d){let V=_[0];Xa(V,_[1])}},xh=d=>{let _=g.length,V=g[_-1].$pointer,Ee=V.cloneNode(!0);V.after(Ee);let Ge=A(h,Ee,_);return Ge.setCallbacks(Ma,Ua,Ia,Fa),g.push(Ge),is(d,_),Xt(),Er(),_},Sh=()=>{let d=g.length,_=g[d-1];return _?(_.destroy(),g.pop(),g.length<=1&&ns(!1),Xt(),Er(),d-1):-1};return(()=>{var d,_;for(let Ee of g)Ee.setCallbacks(Ma,Ua,Ia,Fa);let V=(d=h.shadowRoot)==null?void 0:d.querySelector(".panel-fill");V&&(te=R(V)),xn(h.getAttribute(P)),Sn(Ze(h.getAttribute(I))),_n(Ze(h.getAttribute(U))),vh(h.getAttribute(m),h.getAttribute(y)),ss(h.getAttribute(S)),wn(h.getAttribute(f)),Ba(w.map(Ee=>Ee[1])),gn(Ze(h.getAttribute(a))),vn(ze(h.getAttribute(l),0)),yn(ze(h.getAttribute(c),1/0)),ns(Ze(h.getAttribute(p))),$n(ze(h.getAttribute(C),Nr)),bh(),wh(),fe=Ce(h,u,g),Ga((_=h.getAttribute(Yt))!=null?_:Ea),u.addEventListener("mousedown",La),u.addEventListener("mouseup",Ki),u.addEventListener("touchmove",Dr),u.addEventListener("touchstart",Dr),mt||document.addEventListener("wheel",Zi,{passive:!1}),F=pt(h,dh,{setValues:Ba,setMin:ts,setMax:rs,setStep:ss,setPointersOverlap:gn,setPointersMinDistance:vn,setPointersMaxDistance:yn,setDisabled:bn,setType:xn,setRightToLeft:Sn,setBottomToTop:_n,setRound:$n,setKeyboardDisabled:Va,setMousewheelDisabled:Ya,setRangeDragging:ns,setData:wn},{getPercents:Na,getValues:za,getPointerElements:ja,getMin:Wa,getMax:Ha,getStep:rn,getData:sn,getType:nn,getRound:an,getTextMin:Ji,getTextMax:es,isRightToLeft:hn,isBottomToTop:cn,isDisabled:dn,isKeyboardDisabled:un,isMousewheelDisabled:pn,isPointersOverlap:fn,isRangeDraggingEnabled:mn,getPointersMinDistance:on,getPointersMaxDistance:ln}),F.init()})(),{get pointers(){return g},get styles(){return fe},get pluginsManager(){return F},get min(){return Ji()},get max(){return es()},get step(){return rn()},get pointersOverlap(){return fn()},set pointersOverlap(d){gn(d)},get pointersMinDistance(){return on()},set pointersMinDistance(d){vn(d)},get pointersMaxDistance(){return ln()},set pointersMaxDistance(d){yn(d)},get disabled(){return dn()},set disabled(d){bn(d)},get data(){return sn()},get type(){return nn()},set type(d){xn(d)},get rightToLeft(){return hn()},set rightToLeft(d){Sn(d)},get bottomToTop(){return cn()},set bottomToTop(d){_n(d)},get round(){return an()},set round(d){$n(d)},get animateOnClick(){return vr},set animateOnClick(d){Ga(d)},get keyboardDisabled(){return un()},set keyboardDisabled(d){Va(d)},get mousewheelDisabled(){return pn()},set mousewheelDisabled(d){Ya(d)},get rangeDragging(){return mn()},set rangeDragging(d){ns(d)},setMin:ts,setMax:rs,setValue:is,setStep:ss,setData:wn,getTextValue:zr,setAriaLabel:Xa,getAriaLabel:gh,addPointer:xh,removePointer:Sh,destroy:()=>{u.removeEventListener("mousedown",La),u.removeEventListener("mouseup",Ki),u.removeEventListener("touchmove",Dr),u.removeEventListener("touchstart",Dr),document.removeEventListener("wheel",Zi);for(let d of g)d.destroy();F==null||F.destroy()}}},ah=(h,u,w)=>{let g=Pe.find(([F,N,ge,we])=>N.replace("#","")===u.replace(/\d+/g,""));if(g&&h.styles){let[F,N,ge,we]=g,K=u.replace(/\D/g,"").trim(),De=K===""||K==="0"||K==="1"?0:ze(K,0)-1;h.styles.setStyle(F,w,De);return}switch(h&&h.pluginsManager&&h.pluginsManager.onAttrChange(u,w),u){case m:{h.setMin(w);break}case y:{h.setMax(w);break}case S:{h.setStep(w);break}case a:{h.pointersOverlap=Ze(w);break}case l:{h.pointersMinDistance=ze(w,0);break}case p:{h.rangeDragging=Ze(w);break}case c:{h.pointersMaxDistance=ze(w,1/0);break}case j:{h.disabled=Ze(w);break}case B:{h.keyboardDisabled=Ze(w);break}case W:{h.mousewheelDisabled=Ze(w);break}case f:{h.setData(w);break}case P:{h.type=w;break}case I:{h.rightToLeft=Ze(w);break}case U:{h.bottomToTop=Ze(w);break}case C:{h.round=ze(w,Nr);break}case k:{h.styles&&(h.styles.theme=w);break}case Yt:{h.animateOnClick=w;break}}let M=null;if(/^value([0-9]*)$/.test(u)&&(M="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(M="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(M="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(M="pointer-shape"),!M)return;let te=u.replace(/\D/g,"").trim(),fe=te===""||te==="0"||te==="1"?0:ze(te,0)-1;switch(M){case"value":{h.setValue(w,fe);break}case"pointer-disabled":{let F=h==null?void 0:h.pointers[fe];if(!F)return;F.disabled=Ze(w);break}case"aria-label":{h.setAriaLabel(fe,w);break}case"pointer-shape":{h.styles&&h.styles.setPointerShape(fe,w);break}}},oh=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(h){this.slider&&this.slider.setStep(h)}get step(){var h;return(h=this.slider)==null?void 0:h.step}set disabled(h){this.slider&&(this.slider.disabled=h)}get disabled(){var h,u;return(u=(h=this.slider)==null?void 0:h.disabled)!=null?u:!1}set data(h){var u;(u=this.slider)==null||u.setData(h)}get data(){var h;return(h=this.slider)==null?void 0:h.data}set min(h){var u;(u=this.slider)==null||u.setMin(h)}get min(){var h;return(h=this.slider)==null?void 0:h.min}set max(h){var u;(u=this.slider)==null||u.setMax(h)}get max(){var h;return(h=this.slider)==null?void 0:h.max}set round(h){!this.slider||(this.slider.round=h)}get round(){var h,u;return(u=(h=this.slider)==null?void 0:h.round)!=null?u:Nr}set type(h){!this.slider||(this.slider.type=h??it)}get type(){var h;return((h=this.slider)==null?void 0:h.type)||it}set pointersOverlap(h){!this.slider||(this.slider.pointersOverlap=h)}get pointersOverlap(){var h,u;return(u=(h=this.slider)==null?void 0:h.pointersOverlap)!=null?u:!1}set pointersMinDistance(h){!this.slider||(this.slider.pointersMinDistance=h)}get pointersMinDistance(){var h,u;return(u=(h=this.slider)==null?void 0:h.pointersMinDistance)!=null?u:0}set pointersMaxDistance(h){!this.slider||(this.slider.pointersMaxDistance=h)}get pointersMaxDistance(){var h,u;return(u=(h=this.slider)==null?void 0:h.pointersMaxDistance)!=null?u:1/0}set theme(h){!this.slider||!this.slider.styles||(this.slider.styles.theme=h)}get theme(){var h,u,w;return(w=(u=(h=this.slider)==null?void 0:h.styles)==null?void 0:u.theme)!=null?w:null}set rtl(h){!this.slider||(this.slider.rightToLeft=h)}get rtl(){var h,u;return(u=(h=this.slider)==null?void 0:h.rightToLeft)!=null?u:!1}set btt(h){!this.slider||(this.slider.bottomToTop=h)}get btt(){var h,u;return(u=(h=this.slider)==null?void 0:h.bottomToTop)!=null?u:!1}set keyboardDisabled(h){!this.slider||(this.slider.keyboardDisabled=h)}get keyboardDisabled(){var h,u;return(u=(h=this.slider)==null?void 0:h.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(h){!this.slider||(this.slider.mousewheelDisabled=h)}get mousewheelDisabled(){var h,u;return(u=(h=this.slider)==null?void 0:h.mousewheelDisabled)!=null?u:!1}set animateOnClick(h){!this.slider||(this.slider.animateOnClick=h)}get animateOnClick(){var h;return(h=this.slider)==null?void 0:h.animateOnClick}get rangeDragging(){var h,u;return(u=(h=this.slider)==null?void 0:h.rangeDragging)!=null?u:!1}set rangeDragging(h){this.slider&&(this.slider.rangeDragging=Ze(h))}get externalCSSList(){return this._externalCSSList}addPointer(h){var u,w;if(!this.slider)return;let g=(w=(u=this.slider)==null?void 0:u.addPointer(h))!=null?w:0;Oa(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var h;!this.slider||(h=this.slider)==null||h.removePointer()}addCSS(h){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=h,this.shadowRoot.appendChild(u)}connectedCallback(){var h,u;if(!this.shadowRoot)return;this._externalCSSList=ae(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let w=(h=this.shadowRoot)==null?void 0:h.querySelector(".pointer");if(!w)return;let g=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!g)return;let M=rh(this,w);this.slider=nh(this,g,M),ih(this,this.slider),this._observer=new MutationObserver(te=>{te.forEach(fe=>{var F;if(!this.slider||fe.type!=="attributes")return;let N=fe.attributeName;!N||ah(this.slider,N,(F=this.getAttribute(N))!=null?F:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},tn=oh;window.tcRangeSlider=tn,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",tn),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends tn{})})();(()=>{var t=(l,c,p,f,m)=>{let y=c-l;return y===0?p:(f-p)*(m-l)/y+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,c)=>e(l)?Number(l):c,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,c=null,p=null,f=null,m=null,y=!1,S=s,C=n,P=()=>{var E;let G=(E=l==null?void 0:l.shadowRoot)==null?void 0:E.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),f=document.createElement("div"),f.classList.add("mark-points"),p.append(f),m=document.createElement("div"),m.classList.add("mark-values"),p.append(m),G.append(p)},k=()=>{!c||!p||p.classList.toggle("is-reversed",c.isRightToLeft()||c.isBottomToTop())},I=()=>{var E;if(!p||!c)return;let G=c.getMin(),X=c.getMax(),Q=c.getType()==="vertical",ce=c.isRightToLeft()||c.isBottomToTop();for(let se=0;se<S;se++){let ne=document.createElement("div");ne.classList.add("mark",`mark-${se}`);let ue=S===0?0:se*100/(S-1);Q?ce?ne.style.top=`${100-ue}%`:ne.style.top=`${ue}%`:ce?ne.style.left=`${100-ue}%`:ne.style.left=`${ue}%`,f==null||f.append(ne)}let q=c.getData();for(let se=0;se<C;se++){let ne=document.createElement("div");ne.classList.add("mark-value",`mark-value-${se}`);let ue=C===0?0:se*100/(C-1),Le=t(0,C-1,G,X,se);ne.textContent=(q?(E=q[Math.round(Le)])!=null?E:"":Le).toString(),Q?ce?ne.style.top=`${100-ue}%`:ne.style.top=`${ue}%`:ce?ne.style.left=`${100-ue}%`:ne.style.left=`${ue}%`,m==null||m.append(ne)}},U=(E,G)=>{he(),S=E,C=G,S<=0&&(S=s),C<=0&&(C=n),P(),I(),k()},j=E=>{y=E,y?(P(),I(),k()):he()},B=E=>{!p||p.style.setProperty("--marks-color",E)},W=E=>{!p||p.style.setProperty("--values-color",E)},he=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(E,G,X,Q)=>{var ce,q;c=Q,l=E,y=i(l.getAttribute("marks")),y&&(U(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),B((ce=l.getAttribute("marks-color"))!=null?ce:"#cbd5e1"),W((q=l.getAttribute("marks-values-color"))!=null?q:"#475569"))},onAttrChange:(E,G)=>{E==="marks"&&j(i(G)),E==="marks-count"&&U(r(G,s),C),E==="marks-values-count"&&U(S,r(G,n)),E==="marks-color"&&B(G),E==="marks-values-color"&&W(G)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return y??!1},set:E=>{j(i(E))}}},{name:"marksCount",attributes:{get(){return S??s},set:E=>{U(r(E,s),C)}}},{name:"marksValuesCount",attributes:{get(){return S??s},set:E=>{U(S,r(E,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:E=>{B(E)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:E=>{W(E)}}}],destroy:he,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var tm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,ir=(t,e,r,i)=>{for(var s=i>1?void 0:i?rm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&tm(e,r,s),s};let Mt=class extends kt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Te(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.imposeRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?v`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:v`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Ie(this.sliderRef)}
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

        `}};Mt.styles=me`

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
    
    `;ir([le({context:zl,subscribe:!0}),x()],Mt.prototype,"min",2);ir([le({context:jl,subscribe:!0}),x()],Mt.prototype,"max",2);ir([le({context:la,subscribe:!0}),x()],Mt.prototype,"from",2);ir([le({context:ha,subscribe:!0}),x()],Mt.prototype,"to",2);ir([x()],Mt.prototype,"hasFixedFrom",2);ir([x()],Mt.prototype,"hasFixedTo",2);ir([le({context:Ws,subscribe:!0}),x()],Mt.prototype,"palette",2);ir([x()],Mt.prototype,"sliderRef",2);ir([x()],Mt.prototype,"initialised",2);Mt=ir([Z("registry-range-slider")],Mt);var im=Object.defineProperty,sm=Object.getOwnPropertyDescriptor,Yi=(t,e,r,i)=>{for(var s=i>1?void 0:i?sm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&im(e,r,s),s};let ti=class extends kt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?z:v`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Yi([le({context:la,subscribe:!0})],ti.prototype,"from",2);Yi([le({context:ha,subscribe:!0})],ti.prototype,"to",2);Yi([b({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],ti.prototype,"fixed",2);Yi([b({type:String,reflect:!0,attribute:!0})],ti.prototype,"separator",2);ti=Yi([Z("registry-range-display")],ti);var nm=Object.defineProperty,am=Object.getOwnPropertyDescriptor,Bs=(t,e,r,i)=>{for(var s=i>1?void 0:i?am(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&nm(e,r,s),s};let ri=class extends kt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return v`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":z}">

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
        `}};ri.styles=me`

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


    `;Bs([x()],ri.prototype,"histogram",2);Bs([b({type:Boolean,reflect:!0})],ri.prototype,"interactive",2);Bs([b({type:String,reflect:!0})],ri.prototype,"height",2);ri=Bs([Z("registry-histogram")],ri);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ps extends ia{constructor(e){if(super(e),this.it=z,e.type!==ra.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===z||e==null)return this._t=void 0,this.it=e;if(e===xr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ps.directiveName="unsafeHTML",Ps.resultType=1;const Et=Us(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class jn extends Ps{}jn.directiveName="unsafeSVG",jn.resultType=2;const eh=Us(jn);var om=Object.defineProperty,lm=Object.getOwnPropertyDescriptor,Vs=(t,e,r,i)=>{for(var s=i>1?void 0:i?lm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&om(e,r,s),s};let ii=class extends li{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?z:v`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([e,r])=>{const i={[e]:!0,button:!0,switch:!0,active:r.key===this.value.key};return v`
                        
                        <button 
                            class=${Kt(i)} 
                            @click=${()=>{this.group.tool.selectTool(r)}}
                            @mouseenter=${()=>{this.hint=r.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${eh(r.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};ii.styles=me`

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

    `;Vs([le({context:ca,subscribe:!0}),x()],ii.prototype,"value",2);Vs([le({context:da,subscribe:!0}),x()],ii.prototype,"tools",2);Vs([x()],ii.prototype,"hint",2);ii=Vs([Z("group-tool-buttons")],ii);var hm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,wa=(t,e,r,i)=>{for(var s=i>1?void 0:i?cm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hm(e,r,s),s};let Oi=class extends li{connectedCallback(){super.connectedCallback()}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?z:v`
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return v`
                        
                        <button 
                            class=${Kt(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${e.name}
                        >
                            ${eh(e.icon)}
                        </button>
                        
                    `})}
        `}};Oi.styles=me`

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

    `;wa([le({context:ca,subscribe:!0}),x()],Oi.prototype,"value",2);wa([le({context:da,subscribe:!0}),x()],Oi.prototype,"tools",2);Oi=wa([Z("group-tool-bar")],Oi);var dm=Object.defineProperty,Gi=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&dm(e,r,s),s};class Je extends li{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Gi([le({context:ua,subscribe:!0}),x()],Je.prototype,"parentFileProviderElement");Gi([le({context:Vl,subscribe:!0}),x()],Je.prototype,"loading");Gi([le({context:Hl,subscribe:!0}),x()],Je.prototype,"file");Gi([le({context:Bl,subscribe:!0}),x()],Je.prototype,"failure");Gi([le({context:Gl,subscribe:!0}),x()],Je.prototype,"recording");var um=Object.defineProperty,pm=Object.getOwnPropertyDescriptor,fm=(t,e,r,i)=>{for(var s=i>1?void 0:i?pm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&um(e,r,s),s};let Wn=class extends Je{constructor(){super(...arguments),this.container=Te()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value),t.draw();else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(t){if(super.updated(t),t.has("file")){const e=t.get("file"),r=this.file;e===void 0&&r!==void 0&&this.container.value&&this.file&&this.file.mountedBaseLayers===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return v`
            <div ${Ie(this.container)} class=${Kt(r)} part="file-canvas-container">
            
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
                                ${(i=this.failure)==null?void 0:i.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${(s=this.failure)==null?void 0:s.message}
                            </div>
                        </div>`:z}
            
            </div>
        
        `}};Wn.styles=me`
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
    `;Wn=fm([Z("file-canvas")],Wn);var mm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,vm=(t,e,r,i)=>{for(var s=i>1?void 0:i?gm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&mm(e,r,s),s};let Hn=class extends Je{onInstanceCreated(t){}onFailure(t){}render(){return this.file?v`
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
        `:z}};Hn.styles=me`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Hn=vm([Z("file-share-button")],Hn);var ym=Object.defineProperty,bm=Object.getOwnPropertyDescriptor,wm=(t,e,r,i)=>{for(var s=i>1?void 0:i?bm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ym(e,r,s),s};let Bn=class extends Je{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?v`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${Et(this.renderRow("Thermal file name",this.file.fileName))}

                        ${Et(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?Et(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):z}

                        ${Et(this.renderRow("Time",Zn.human(this.file.timestamp)))}

                        ${Et(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${Et(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Et(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${Et(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${Et(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${Et(this.renderRow("Type",this.file.service.parser.name))}
                    ${Et(this.renderRow("Description",this.file.service.parser.description))}

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
        `:z}};Bn.styles=me`

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
    
    `;Bn=wm([Z("file-info-button")],Bn);var xm=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,_m=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&xm(e,r,s),s};let Vn=class extends Je{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?z:v`

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
                        </div>`:z}
            
            </thermal-dropdown>

        
        `}};Vn.styles=me`

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
    
    `;Vn=_m([Z("file-download-dropdown")],Vn);var $m=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,fr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Cm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&$m(e,r,s),s};let Ct=class extends Je{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Te(),this.barRef=Te(),this.containerRef=Te(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<Ct.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}handleBarHover(t){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(r)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,l;const t=this.file;if(t===void 0)return z;if(t.duration===0)return z;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return v`
            <div class="${Kt(e)}" ${Ie(this.containerRef)}>


                ${t!==void 0?v`
                        <div class="container">

                            <div class="${Kt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


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


                            <div class="${Kt(s)}"  ${Ie(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Ie(this.barRef)}></div>
                                    ${this.cursor?v`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(c=>v`<file-marker-timeline start=${c.fromMs} end=${c.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:z}

            
            
            </div>

            ${this.currentFrame!==void 0?v`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${Sr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${Sr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:z}

          `}};Ct.collapseWidth=500;Ct.styles=me`
    
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
    
    `;fr([le({context:va,subscribe:!0}),x()],Ct.prototype,"playing",2);fr([le({context:Bi,subscribe:!0}),x()],Ct.prototype,"currentFrame",2);fr([le({context:ga,subscribe:!0}),x()],Ct.prototype,"duration",2);fr([le({context:Xl,subscribe:!0}),x()],Ct.prototype,"mayStop",2);fr([le({context:fa,subscribe:!0})],Ct.prototype,"cursor",2);fr([le({context:ma,subscribe:!0})],Ct.prototype,"cursorSetter",2);fr([le({context:ya,subscribe:!0})],Ct.prototype,"markers",2);fr([x()],Ct.prototype,"collapsed",2);Ct=fr([Z("file-timeline")],Ct);var km=Object.defineProperty,Pm=Object.getOwnPropertyDescriptor,xa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&km(e,r,s),s};let Di=class extends Je{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?z:v`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(rl).map(([t])=>v`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof cr&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Di.styles=me`

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
    
    `;xa([b({type:String,reflect:!0})],Di.prototype,"enabled",2);xa([le({context:Yl,subscribe:!0}),x()],Di.prototype,"playbackSpeed",2);Di=xa([Z("file-playback-speed-dropdown")],Di);var Am=Object.defineProperty,Om=Object.getOwnPropertyDescriptor,Sa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Om(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Am(e,r,s),s};let Ei=class extends Je{constructor(){super(...arguments),this.container=Te()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return v`
            <div class="container">
            
                <video ${Ie(this.container)} preload="metadata">

                    ${this.url===void 0?z:v`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Ei.styles=me`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Sa([le({context:Bi,subscribe:!0}),x()],Ei.prototype,"currentFrame",2);Sa([b({type:String,reflect:!0,attribute:!0})],Ei.prototype,"url",2);Ei=Sa([Z("file-video")],Ei);const Dm=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),Sr(r,"mm:ss:SSS")},Em=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(r[0]),s=parseInt(r[1]),n=parseInt(r[2]);return i*60*1e3+s*1e3+n};var Tm=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,sr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Lm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Tm(e,r,s),s};const _a={fromAttribute:t=>t===null?null:Em(t),toAttribute:t=>t===null?null:Dm(t)};let jt=class extends Je{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,i){var s;super.attributeChangedCallback(e,r,i),this.log(e,r,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(s=>s.lang==="cs-CZ");if(r)return r;const i=e.find(s=>s.default===!0);return i||null}render(){return z}};sr([le({context:va,subscribe:!0}),x()],jt.prototype,"playing",2);sr([le({context:pa,subscribe:!0}),x()],jt.prototype,"ms",2);sr([b({type:String,reflect:!0,attribute:!0})],jt.prototype,"label",2);sr([b({type:String,reflect:!0,attribute:!0,converter:_a})],jt.prototype,"start",2);sr([b({type:String,reflect:!0,attribute:!0,converter:_a})],jt.prototype,"end",2);sr([b({type:String,reflect:!0,attribute:!0,converter:_a})],jt.prototype,"dur",2);sr([b({type:String,reflect:!0,attribute:!0})],jt.prototype,"active",2);sr([b({type:String,reflect:!0,attribute:!0})],jt.prototype,"pauseOnActivate",2);sr([b({type:String,reflect:!0,attribute:!0})],jt.prototype,"say",2);jt=sr([Z("file-marker")],jt);var Rm=Object.defineProperty,Mm=Object.getOwnPropertyDescriptor,Fr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Rm(e,r,s),s};let ur=class extends Je{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return v`

            <div class="${Kt(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};ur.styles=me`
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


    `;Fr([le({context:ga,subscribe:!0}),x()],ur.prototype,"duration",2);Fr([le({context:Bi,subscribe:!0}),x()],ur.prototype,"currentFrame",2);Fr([le({context:pa,subscribe:!0}),x()],ur.prototype,"ms",2);Fr([b({type:Number,reflect:!0,attribute:!0})],ur.prototype,"start",2);Fr([b({type:Number,reflect:!0,attribute:!0})],ur.prototype,"end",2);Fr([x()],ur.prototype,"active",2);ur=Fr([Z("file-marker-timeline")],ur);var Um=Object.defineProperty,Im=Object.getOwnPropertyDescriptor,th=(t,e,r,i)=>{for(var s=i>1?void 0:i?Im(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Um(e,r,s),s};let As=class extends Je{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return v`
            <div>


            ${this.markers.map(t=>t.active?v`<div class="item">
                    <h2>${t.label}</h2>
                    ${Et(t.innerHTML)}
                    </div>`:z)}

            
            
            </div>

          `}};As.styles=me`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;th([le({context:ya,subscribe:!0})],As.prototype,"markers",2);As=th([Z("file-marks-content")],As);var Fm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,$a=(t,e,r,i)=>{for(var s=i>1?void 0:i?Nm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Fm(e,r,s),s};let Ti=class extends Lt{updated(e){if(super.updated(e),e.has("analysis")){const r=e.get("analysis");r&&r.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return v`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const r=e.target,i=r.value!==""?r.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Ti.styles=me`

    
    `;$a([b()],Ti.prototype,"analysis",2);$a([x()],Ti.prototype,"name",2);Ti=$a([Z("analysis-name")],Ti);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*zm(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}var jm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,Ca=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&jm(e,r,s),s};let Li=class extends Lt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const r=this.analysis;this.color=r.initialColor,r.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(t){return v`<i style="background-color: ${t};" aria-hidden></i><span>${t}</span>`}render(){return this.color===void 0?z:v`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${zm(fs,t=>v`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(t)}}>
                        ${this.renderColor(t)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Li.styles=me`

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
    
    `;Ca([b()],Li.prototype,"analysis",2);Ca([x()],Li.prototype,"color",2);Li=Ca([Z("analysis-color")],Li);var Hm=Object.defineProperty,Bm=Object.getOwnPropertyDescriptor,It=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Hm(e,r,s),s};let yt=class extends Lt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height,this.right=r.left+r.width,this.bottom=r.top+r.height,this.maxX=r.file.width,this.maxY=r.file.height,r.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

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
    
        
        `}};yt.styles=me`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;It([b()],yt.prototype,"analysis",2);It([x()],yt.prototype,"color",2);It([x()],yt.prototype,"top",2);It([x()],yt.prototype,"left",2);It([x()],yt.prototype,"width",2);It([x()],yt.prototype,"height",2);It([x()],yt.prototype,"type",2);It([x()],yt.prototype,"right",2);It([x()],yt.prototype,"bottom",2);It([x()],yt.prototype,"maxX",2);It([x()],yt.prototype,"maxY",2);yt=It([Z("edit-area")],yt);var Vm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,ci=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ym(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Vm(e,r,s),s};let kr=class extends Lt{constructor(){super(...arguments),this.topInputRef=Te(),this.leftInputRef=Te()}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.maxX=r.file.width,this.maxY=r.file.height,r.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

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
        
        `}};kr.styles=me`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;ci([b()],kr.prototype,"analysis",2);ci([x()],kr.prototype,"top",2);ci([x()],kr.prototype,"left",2);ci([x()],kr.prototype,"maxX",2);ci([x()],kr.prototype,"maxY",2);kr=ci([Z("edit-point")],kr);var Gm=Object.defineProperty,Xm=Object.getOwnPropertyDescriptor,Ys=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Gm(e,r,s),s};let Ri=class extends Lt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetName.delete(this.UUID);const r=this.analysis;this.name=r.name,this.type=r.getType(),r.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return v`

            <thermal-dialog label="Edit ${this.type} analysis">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof ar?v`<edit-point .analysis=${this.analysis}></edit-point>`:v`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Ys([b()],Ri.prototype,"analysis",2);Ys([x()],Ri.prototype,"name",2);Ys([x()],Ri.prototype,"type",2);Ri=Ys([Z("file-analysis-edit")],Ri);var qm=Object.defineProperty,Km=Object.getOwnPropertyDescriptor,Pt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Km(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&qm(e,r,s),s};let ct=class extends Je{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=Te(),this.graphRef=Te(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(t){t.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=t.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(r=>{this.graphWidth=r[0].contentRect.width,this.graphHeight=r[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,t=>{this.graphs=t}),this.hydrated=!0)}onFailure(){}update(t){super.update(t),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return v`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&v`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&v`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${Ie(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?v`<thermal-chart 
                        ${Ie(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:z}
            </div>

            

            </div>
        
        `}};ct.styles=me`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Pt([x()],ct.prototype,"hydrated",2);Pt([b({reflect:!0})],ct.prototype,"graphWidth",2);Pt([b({reflect:!0})],ct.prototype,"graphHeight",2);Pt([x()],ct.prototype,"graphs",2);Pt([le({context:Bi,subscribe:!0})],ct.prototype,"currentFrame",2);Pt([le({context:fa,subscribe:!0})],ct.prototype,"cursor",2);Pt([le({context:ma,subscribe:!0})],ct.prototype,"cursorSetter",2);Pt([x()],ct.prototype,"shadowLeft",2);Pt([x()],ct.prototype,"shadowTop",2);Pt([x()],ct.prototype,"shadowWidth",2);Pt([x()],ct.prototype,"shadowHeight",2);Pt([le({context:oa,subscribe:!0})],ct.prototype,"graphSmooth",2);ct=Pt([Z("file-analysis-graph")],ct);var Zm=Object.defineProperty,Qm=Object.getOwnPropertyDescriptor,mr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Zm(e,r,s),s};let Wt=class extends Lt{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const r=this.analysis;this.name=r.name,this.selected=r.selected,this.color=r.initialColor,this.dimension=r.width+"x"+r.height,this.value={min:r.min,max:r.max,avg:r.avg},r.file.timeline.isSequence?this.may=r instanceof ar?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:r.graph.state.MIN,max:r.graph.state.MAX,avg:r.graph.state.AVG},r.onSerializableChange.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),r.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),r.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),r.onSelected.set(this.UUID,()=>{this.selected=!0}),r.onDeselected.set(this.UUID,()=>{this.selected=!1}),r.onSetInitialColor.set(this.UUID,i=>{this.color=i}),r.onSetName.set(this.UUID,i=>{this.name=i})}}valueOrNothing(t){return t===void 0?"-":t.toFixed(2)+" °C"}renderCell(t,e,r,i){return v`
            <td class="${e?"may":"mayNot"} ${r?"active":"inactive"}">

                ${e?v`
                        <button
                            @click=${i}
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
        
        `}};Wt.styles=me`
    
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

    `;mr([b()],Wt.prototype,"analysis",2);mr([x()],Wt.prototype,"value",2);mr([x()],Wt.prototype,"graph",2);mr([x()],Wt.prototype,"may",2);mr([x()],Wt.prototype,"dimension",2);mr([x()],Wt.prototype,"color",2);mr([b({type:Boolean,reflect:!0,attribute:!0})],Wt.prototype,"selected",2);mr([x()],Wt.prototype,"name",2);Wt=mr([Z("file-analysis-table-row")],Wt);var Jm=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,Gs=(t,e,r,i)=>{for(var s=i>1?void 0:i?eg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Jm(e,r,s),s};let si=class extends Je{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(t){console.log(t)}onInstanceCreated(t){this.hydrate(t)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(t){super.updated(t),t.has("file")&&this.file&&this.hydrate(this.file)}hydrate(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?z:v`

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
                        ${this.hasHighlightedData?v`<thermal-button variant="foreground" @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:z}
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
        `}};si.styles=me`
    
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

        



    `;Gs([x()],si.prototype,"analysis",2);Gs([x()],si.prototype,"allSelected",2);Gs([x()],si.prototype,"hasHighlightedData",2);si=Gs([Z("file-analysis-table")],si);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=t=>t??z;var tg=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,Ar=(t,e,r,i)=>{for(var s=i>1?void 0:i?rg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&tg(e,r,s),s};let tr=class extends Je{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(t){this.recorded=Zn.human(t.timestamp)}onFailure(){}render(){return v`
        <thermal-app author=${$e(this.author)} recorded=${$e(this.recorded)} license=${$e(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
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
                  `:z}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:z}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:z}

            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?v`<file-analysis-graph slot="post"></file-analysis-graph>`:z}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};tr.styles=me`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Ar([b({type:String,reflect:!0,attribute:!0})],tr.prototype,"showembed",2);Ar([b({type:String,reflect:!0,attribute:!0})],tr.prototype,"showabout",2);Ar([b({type:String,reflect:!0,attribute:!0})],tr.prototype,"showfullscreen",2);Ar([b()],tr.prototype,"author",2);Ar([b()],tr.prototype,"recorded",2);Ar([b()],tr.prototype,"license",2);Ar([b()],tr.prototype,"label",2);tr=Ar([Z("file-app")],tr);var ig=Object.defineProperty,We=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&ig(e,r,s),s};class Fe extends Lt{constructor(){super(...arguments),this.palette="jet",this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=Te()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const r=e.analysisData.value.values.length>1;r!==this.hasGraph&&(this.hasGraph=r);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}We([b({type:String,reflect:!0})],Fe.prototype,"url");We([b({type:String,reflect:!0,attribute:!0})],Fe.prototype,"palette");We([b({type:Number,reflect:!0})],Fe.prototype,"from");We([b({type:Number,reflect:!0})],Fe.prototype,"to");We([b()],Fe.prototype,"author");We([b()],Fe.prototype,"recorded");We([b()],Fe.prototype,"license");We([b()],Fe.prototype,"label");We([b({type:String,reflect:!1,attribute:!0})],Fe.prototype,"showembed");We([b({type:String,reflect:!1,attribute:!0})],Fe.prototype,"showabout");We([b({type:String,reflect:!1})],Fe.prototype,"showfullscreen");We([b({type:String,reflect:!0})],Fe.prototype,"analysis1");We([b({type:String,reflect:!0})],Fe.prototype,"analysis2");We([b({type:String,reflect:!0})],Fe.prototype,"analysis3");We([b({type:String,reflect:!0})],Fe.prototype,"analysis4");We([b({type:String,reflect:!0})],Fe.prototype,"analysis5");We([b({type:String,reflect:!0})],Fe.prototype,"analysis6");We([b({type:String,reflect:!0})],Fe.prototype,"analysis7");We([b({type:String,reflect:!0})],Fe.prototype,"ms");We([b({type:String,reflect:!0})],Fe.prototype,"speed");We([x()],Fe.prototype,"hasGraph");We([x()],Fe.prototype,"hasAnalysis");We([x()],Fe.prototype,"isSequence");var sg=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,ag=(t,e,r,i)=>{for(var s=i>1?void 0:i?ng(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&sg(e,r,s),s};let To=class extends Fe{render(){return this.url===""?z:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${$e(this.from)}
        to=${$e(this.to)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}" 
            analysis1=${$e(this.analysis1)}
            analysis2=${$e(this.analysis2)}
            analysis3=${$e(this.analysis3)}
            analysis4=${$e(this.analysis4)}
            analysis5=${$e(this.analysis5)}
            analysis6=${$e(this.analysis6)}
            analysis7=${$e(this.analysis7)}
            speed=${$e(this.speed)}
          >

              <file-app 
                author=${$e(this.author)} 
                recorded=${$e(this.recorded)} 
                license=${$e(this.license)}
                label=${$e(this.label)}  
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};To=ag([Z("thermal-file-app")],To);var og=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,At=(t,e,r,i)=>{for(var s=i>1?void 0:i?lg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&og(e,r,s),s};let dt=class extends Je{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=Te(),this.contentContainerWidth=1e3}onInstanceCreated(t){this.recorded=Zn.human(t.timestamp),this.hasAnalysis=t.analysis.layers.all.length>0,this.hasGraph=t.analysisData.value.values.length>1,this.isSequence=t.timeline.isSequence,t.timeline.addListener(this.UUID,()=>{this.isSequence=t.timeline.isSequence}),t.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),t.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(t){super.firstUpdated(t),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(r=>{this.contentContainerWidth=r[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var t,e;return v`
        <thermal-app author=${$e(this.author)} recorded=${$e(this.recorded)} license=${$e(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
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
                  `:z}

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Graph lines"
                    hint="'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'."
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:z}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>

              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:z}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:z}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${Ie(this.contentContainerRef)}>

                <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?v`<group-tool-bar></group-tool-bar>`:v`<group-tool-buttons></group-tool-buttons>`}
                </div>

                <div class="content-container__part content-container__left">


                  <registry-histogram slot="pre"></registry-histogram>
                  <registry-range-slider slot="pre"></registry-range-slider>
                  <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
                  <!--<registry-range-display></registry-range-display>-->

                  <file-canvas></file-canvas>
                  <file-timeline></file-timeline>
                </div>

                <div class="content-container__part content-container__right ${this.isSequence?"content-container__right__sequence":""}">

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

                  ${this.isSequence?v`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?v`<div class="placeholder">
                      <div class="placeholder-title">Graph</div>
                      <div>${this.hasAnalysis===!1?"Add analysis first to see the graph!":v`Click on an analysis <span style="display: inline-block;padding: 1px 4px; border-radius: var(--thermal-gap); border: 1px solid var(--thermal-slate);">value</span> to see its graph here!`}</div>
                    </div>`:z}
                  
                  </div>
                  `:z}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};dt.styles=me`

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
  
  `;At([b({type:String,reflect:!0,attribute:!0})],dt.prototype,"showembed",2);At([b({type:String,reflect:!0,attribute:!0})],dt.prototype,"showabout",2);At([b({type:String,reflect:!0,attribute:!0})],dt.prototype,"showfullscreen",2);At([x()],dt.prototype,"hasAnalysis",2);At([x()],dt.prototype,"hasGraph",2);At([x()],dt.prototype,"tool",2);At([x()],dt.prototype,"isSequence",2);At([b()],dt.prototype,"author",2);At([b()],dt.prototype,"recorded",2);At([b()],dt.prototype,"license",2);At([b()],dt.prototype,"label",2);At([x()],dt.prototype,"contentContainerWidth",2);dt=At([Z("desktop-app")],dt);var hg=Object.defineProperty,cg=Object.getOwnPropertyDescriptor,dg=(t,e,r,i)=>{for(var s=i>1?void 0:i?cg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hg(e,r,s),s};let Lo=class extends Fe{render(){return this.url===""?z:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${$e(this.from)}
        to=${$e(this.to)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${Ie(this.fileProviderRef)}
            thermal="${this.url}"
            analysis1=${$e(this.analysis1)}
            analysis2=${$e(this.analysis2)}
            analysis3=${$e(this.analysis3)}
            analysis4=${$e(this.analysis4)}
            analysis5=${$e(this.analysis5)}
            analysis6=${$e(this.analysis6)}
            analysis7=${$e(this.analysis7)}
            speed=${$e(this.speed)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${$e(this.author)} 
              recorded=${$e(this.recorded)} 
              license=${$e(this.license)}
              label=${$e(this.label)}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Lo=dg([Z("thermal-desktop-app")],Lo);var ug=Object.defineProperty,pg=Object.getOwnPropertyDescriptor,ka=(t,e,r,i)=>{for(var s=i>1?void 0:i?pg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ug(e,r,s),s};let Mi=class extends Lt{constructor(){super(...arguments),this.dropinRef=Te(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return v`

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

                            ${this.loaded===!0?v`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:z}

                            <file-dropin ${Ie(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};Mi.styles=me`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;ka([x()],Mi.prototype,"dropinRef",2);ka([x()],Mi.prototype,"loaded",2);Mi=ka([Z("thermal-dropin-app")],Mi);const Ln=window.matchMedia("(prefers-color-scheme: dark)"),Pa="thermal-dark-mode",Ro=()=>{document.body.classList.add(Pa)},fg=()=>{document.body.classList.remove(Pa)},mg=()=>{Ln.matches&&Ro();const t=e=>{e.matches?Ro():fg()};Ln.addEventListener("change",t),Ln.addListener(t)},gg=()=>{const t=document.createElement("link");t.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(t)},vg=Yn.toString().replaceAll(".","-"),yg=t=>`thermal__${t}__${vg}`,Mo=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",yg(t)),r.innerHTML=e,document.head.appendChild(r)},bg=()=>{Mo("rootVariables",`

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


            
        
        `),Mo("darkModeOverrides",`
        
            body.${Pa} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};gg();console.info(`@labir/embed ${Yn}
Author: ${Ch}`);mg();bg();document.addEventListener("DOMContentLoaded",()=>{});
