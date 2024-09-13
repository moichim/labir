var Sl=Object.defineProperty;var Pl=(t,e,r)=>e in t?Sl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(Pl(t,typeof e!="symbol"?e+"":e,r),r);const bn="1.2.32",Ol="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ti=globalThis,yn=Ti.ShadowRoot&&(Ti.ShadyCSS===void 0||Ti.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wn=Symbol(),ho=new WeakMap;let Yo=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==wn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(yn&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=ho.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ho.set(r,e))}return e}toString(){return this.cssText}};const El=t=>new Yo(typeof t=="string"?t:t+"",void 0,wn),Pe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Yo(r,t,wn)},Al=(t,e)=>{if(yn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=Ti.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},uo=yn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return El(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Dl,defineProperty:Rl,getOwnPropertyDescriptor:Ll,getOwnPropertyNames:Tl,getOwnPropertySymbols:Ml,getPrototypeOf:Ul}=Object,qt=globalThis,po=qt.trustedTypes,Fl=po?po.emptyScript:"",Gs=qt.reactiveElementPolyfillSupport,zr=(t,e)=>t,ji={toAttribute(t,e){switch(e){case Boolean:t=t?Fl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},xn=(t,e)=>!Dl(t,e),fo={attribute:!0,type:String,converter:ji,reflect:!1,hasChanged:xn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),qt.litPropertyMetadata??(qt.litPropertyMetadata=new WeakMap);let br=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=fo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&Rl(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=Ll(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fo}static _$Ei(){if(this.hasOwnProperty(zr("elementProperties")))return;const e=Ul(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zr("properties"))){const r=this.properties,i=[...Tl(r),...Ml(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(uo(s))}else e!==void 0&&r.push(uo(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Al(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ji).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ji;this._$Em=s,this[s]=l.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??xn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};br.elementStyles=[],br.shadowRootOptions={mode:"open"},br[zr("elementProperties")]=new Map,br[zr("finalized")]=new Map,Gs==null||Gs({ReactiveElement:br}),(qt.reactiveElementVersions??(qt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=globalThis,Ii=Yr.trustedTypes,mo=Ii?Ii.createPolicy("lit-html",{createHTML:t=>t}):void 0,qo="$lit$",Yt=`lit$${Math.random().toFixed(9).slice(2)}$`,Xo="?"+Yt,jl=`<${Xo}>`,nr=document,Gr=()=>nr.createComment(""),Qr=t=>t===null||typeof t!="object"&&typeof t!="function",Go=Array.isArray,Il=t=>Go(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Qs=`[ 	
\f\r]`,Hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,go=/-->/g,vo=/>/g,tr=RegExp(`>|${Qs}(?:([^\\s"'>=/]+)(${Qs}*=${Qs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bo=/'/g,yo=/"/g,Qo=/^(?:script|style|textarea|title)$/i,Wl=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),D=Wl(1),Xt=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),wo=new WeakMap,ir=nr.createTreeWalker(nr,129);function Zo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return mo!==void 0?mo.createHTML(e):e}const Nl=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",o=Hr;for(let l=0;l<r;l++){const u=t[l];let p,m,f=-1,y=0;for(;y<u.length&&(o.lastIndex=y,m=o.exec(u),m!==null);)y=o.lastIndex,o===Hr?m[1]==="!--"?o=go:m[1]!==void 0?o=vo:m[2]!==void 0?(Qo.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=tr):m[3]!==void 0&&(o=tr):o===tr?m[0]===">"?(o=s??Hr,f=-1):m[1]===void 0?f=-2:(f=o.lastIndex-m[2].length,p=m[1],o=m[3]===void 0?tr:m[3]==='"'?yo:bo):o===yo||o===bo?o=tr:o===go||o===vo?o=Hr:(o=tr,s=void 0);const _=o===tr&&t[l+1].startsWith("/>")?" ":"";n+=o===Hr?u+jl:f>=0?(i.push(p),u.slice(0,f)+qo+u.slice(f)+Yt+_):u+Yt+(f===-2?l:_)}return[Zo(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let an=class Ko{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,u=this.parts,[p,m]=Nl(e,r);if(this.el=Ko.createElement(p,i),ir.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=ir.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(qo)){const y=m[o++],_=s.getAttribute(f).split(Yt),k=/([.?@])?(.*)/.exec(y);u.push({type:1,index:n,name:k[2],strings:_,ctor:k[1]==="."?Bl:k[1]==="?"?Vl:k[1]==="@"?zl:Qi}),s.removeAttribute(f)}else f.startsWith(Yt)&&(u.push({type:6,index:n}),s.removeAttribute(f));if(Qo.test(s.tagName)){const f=s.textContent.split(Yt),y=f.length-1;if(y>0){s.textContent=Ii?Ii.emptyScript:"";for(let _=0;_<y;_++)s.append(f[_],Gr()),ir.nextNode(),u.push({type:2,index:++n});s.append(f[y],Gr())}}}else if(s.nodeType===8)if(s.data===Xo)u.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(Yt,f+1))!==-1;)u.push({type:7,index:n}),f+=Yt.length-1}n++}}static createElement(e,r){const i=nr.createElement("template");return i.innerHTML=e,i}};function wr(t,e,r=t,i){var o,l;if(e===Xt)return e;let s=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const n=Qr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=wr(t,s._$AS(t,e.values),s,i)),e}let Hl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??nr).importNode(r,!0);ir.currentNode=s;let n=ir.nextNode(),o=0,l=0,u=i[0];for(;u!==void 0;){if(o===u.index){let p;u.type===2?p=new oi(n,n.nextSibling,this,e):u.type===1?p=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(p=new Yl(n,this,e)),this._$AV.push(p),u=i[++l]}o!==(u==null?void 0:u.index)&&(n=ir.nextNode(),o++)}return ir.currentNode=nr,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class oi{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=wr(this,e,r),Qr(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Xt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Il(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==B&&Qr(this._$AH)?this._$AA.nextSibling.data=e:this.T(nr.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=an.createElement(Zo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const o=new Hl(s,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let r=wo.get(e.strings);return r===void 0&&wo.set(e.strings,r=new an(e)),r}k(e){Go(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new oi(this.S(Gr()),this.S(Gr()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let Qi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(e,r=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=wr(this,e,r,0),o=!Qr(e)||e!==this._$AH&&e!==Xt,o&&(this._$AH=e);else{const l=e;let u,p;for(e=n[0],u=0;u<n.length-1;u++)p=wr(this,l[i+u],r,u),p===Xt&&(p=this._$AH[u]),o||(o=!Qr(p)||p!==this._$AH[u]),p===B?e=B:e!==B&&(e+=(p??"")+n[u+1]),this._$AH[u]=p}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Bl=class extends Qi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};class Vl extends Qi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class zl extends Qi{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=wr(this,e,r,0)??B)===Xt)return;const i=this._$AH,s=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let Yl=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){wr(this,e)}};const Zs=Yr.litHtmlPolyfillSupport;Zs==null||Zs(an,oi),(Yr.litHtmlVersions??(Yr.litHtmlVersions=[])).push("3.1.4");const ql=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new oi(e.insertBefore(Gr(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends br{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ql(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Xt}};var zo;st._$litElement$=!0,st.finalized=!0,(zo=globalThis.litElementHydrateSupport)==null||zo.call(globalThis,{LitElement:st});const Ks=globalThis.litElementPolyfillSupport;Ks==null||Ks({LitElement:st});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xl={attribute:!0,type:String,converter:ji,reflect:!1,hasChanged:xn},Gl=(t=Xl,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,u,t)},init(l){return l!==void 0&&this.P(o,void 0,t),l}}}if(i==="setter"){const{name:o}=r;return function(l){const u=this[o];e.call(this,l),this.requestUpdate(o,u,t)}}throw Error("Unsupported decorator location: "+i)};function I(t){return(e,r)=>typeof r=="object"?Gl(t,e,r):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(t){return I({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ql=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ai(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Ql(e,r,{get(){var u;const o=(u=this.renderRoot)==null?void 0:u.querySelector(n),l=(o==null?void 0:o.assignedElements(t))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zl=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zi=t=>(...e)=>({_$litDirective$:t,values:e});let kn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),qr(s,e);return!0},Wi=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Jo=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),ec(e)}};function Kl(t){this._$AN!==void 0?(Wi(this),this._$AM=t,Jo(this)):this._$AM=t}function Jl(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)qr(i[n],!1),Wi(i[n]);else i!=null&&(qr(i,!1),Wi(i));else qr(this,t)}const ec=t=>{t.type==_n.CHILD&&(t._$AP??(t._$AP=Jl),t._$AQ??(t._$AQ=Kl))};class tc extends kn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Jo(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(qr(this,e),Wi(this))}setValue(e){if(Zl(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=()=>new rc;let rc=class{};const Js=new WeakMap,Ne=Zi(class extends tc{render(t){return B}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),B}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=Js.get(e);r===void 0&&(r=new WeakMap,Js.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Js.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ic=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,ea=(t,e,r,i)=>{for(var s=i>1?void 0:i?sc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ic(e,r,s),s};let Zr=class extends st{constructor(){super(),this.dialogRef=Te(),this.closeButtonRef=Te(),this.invokerRef=Te()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return D`
            <slot name="invoker" ${Ne(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Ne(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Ne(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Zr.shadowRootOptions={...st.shadowRootOptions,mode:"open"};Zr.styles=Pe`

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

        
    
    `;ea([I({type:String,reflect:!0})],Zr.prototype,"label",2);Zr=ea([re("thermal-dialog")],Zr);var nc=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,Ki=(t,e,r,i)=>{for(var s=i>1?void 0:i?oc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&nc(e,r,s),s};let Mt=class extends st{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return D`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Mt.VARIANTS=["slate","primary","foreground","background"];Mt.shadowRootOptions={...st.shadowRootOptions,mode:"open"};Mt.styles=Pe`

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
    
    `;Ki([I({type:String,converter:{fromAttribute:t=>Mt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Mt.prototype,"variant",2);Ki([I({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],Mt.prototype,"interactive",2);Ki([I({type:String})],Mt.prototype,"size",2);Mt=Ki([re("thermal-button")],Mt);const xr=Math.min,Lt=Math.max,Ni=Math.round,Gt=t=>({x:t,y:t}),ac={left:"right",right:"left",bottom:"top",top:"bottom"},lc={start:"end",end:"start"};function xo(t,e,r){return Lt(t,xr(e,r))}function li(t,e){return typeof t=="function"?t(e):t}function Ut(t){return t.split("-")[0]}function Ji(t){return t.split("-")[1]}function ta(t){return t==="x"?"y":"x"}function ra(t){return t==="y"?"height":"width"}function ci(t){return["top","bottom"].includes(Ut(t))?"y":"x"}function ia(t){return ta(ci(t))}function cc(t,e,r){r===void 0&&(r=!1);const i=Ji(t),s=ia(t),n=ra(s);let o=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=Hi(o)),[o,Hi(o)]}function hc(t){const e=Hi(t);return[ln(t),e,ln(e)]}function ln(t){return t.replace(/start|end/g,e=>lc[e])}function dc(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function uc(t,e,r,i){const s=Ji(t);let n=dc(Ut(t),r==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(ln)))),n}function Hi(t){return t.replace(/left|right|bottom|top/g,e=>ac[e])}function pc(t){return{top:0,right:0,bottom:0,left:0,...t}}function sa(t){return typeof t!="number"?pc(t):{top:t,right:t,bottom:t,left:t}}function _r(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function _o(t,e,r){let{reference:i,floating:s}=t;const n=ci(e),o=ia(e),l=ra(o),u=Ut(e),p=n==="y",m=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,y=i[l]/2-s[l]/2;let _;switch(u){case"top":_={x:m,y:i.y-s.height};break;case"bottom":_={x:m,y:i.y+i.height};break;case"right":_={x:i.x+i.width,y:f};break;case"left":_={x:i.x-s.width,y:f};break;default:_={x:i.x,y:i.y}}switch(Ji(e)){case"start":_[o]-=y*(r&&p?-1:1);break;case"end":_[o]+=y*(r&&p?-1:1);break}return _}const fc=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,l=n.filter(Boolean),u=await(o.isRTL==null?void 0:o.isRTL(e));let p=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:m,y:f}=_o(p,i,u),y=i,_={},k=0;for(let O=0;O<l.length;O++){const{name:S,fn:j}=l[O],{x:W,y:z,data:de,reset:te}=await j({x:m,y:f,initialPlacement:i,placement:y,strategy:s,middlewareData:_,rects:p,platform:o,elements:{reference:t,floating:e}});m=W??m,f=z??f,_={..._,[S]:{..._[S],...de}},te&&k<=50&&(k++,typeof te=="object"&&(te.placement&&(y=te.placement),te.rects&&(p=te.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):te.rects),{x:m,y:f}=_o(p,y,u)),O=-1)}return{x:m,y:f,placement:y,strategy:s,middlewareData:_}};async function na(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:o,elements:l,strategy:u}=t,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:y=!1,padding:_=0}=li(e,t),k=sa(_),S=l[y?f==="floating"?"reference":"floating":f],j=_r(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(S)))==null||r?S:S.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:m,strategy:u})),W=f==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,z=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),de=await(n.isElement==null?void 0:n.isElement(z))?await(n.getScale==null?void 0:n.getScale(z))||{x:1,y:1}:{x:1,y:1},te=_r(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:W,offsetParent:z,strategy:u}):W);return{top:(j.top-te.top+k.top)/de.y,bottom:(te.bottom-j.bottom+k.bottom)/de.y,left:(j.left-te.left+k.left)/de.x,right:(te.right-j.right+k.right)/de.x}}const mc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:o,initialPlacement:l,platform:u,elements:p}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:y,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:O=!0,...S}=li(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const j=Ut(s),W=Ut(l)===l,z=await(u.isRTL==null?void 0:u.isRTL(p.floating)),de=y||(W||!O?[Hi(l)]:hc(l));!y&&k!=="none"&&de.push(...uc(l,O,k,z));const te=[l,...de],Ee=await na(e,S),N=[];let ve=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&N.push(Ee[j]),f){const pe=cc(s,o,z);N.push(Ee[pe[0]],Ee[pe[1]])}if(ve=[...ve,{placement:s,overflows:N}],!N.every(pe=>pe<=0)){var oe,ue;const pe=(((oe=n.flip)==null?void 0:oe.index)||0)+1,be=te[pe];if(be)return{data:{index:pe,overflows:ve},reset:{placement:be}};let ie=(ue=ve.filter(we=>we.overflows[0]<=0).sort((we,Me)=>we.overflows[1]-Me.overflows[1])[0])==null?void 0:ue.placement;if(!ie)switch(_){case"bestFit":{var ye;const we=(ye=ve.map(Me=>[Me.placement,Me.overflows.filter(Ze=>Ze>0).reduce((Ze,Xe)=>Ze+Xe,0)]).sort((Me,Ze)=>Me[1]-Ze[1])[0])==null?void 0:ye[0];we&&(ie=we);break}case"initialPlacement":ie=l;break}if(s!==ie)return{reset:{placement:ie}}}return{}}}};function oa(t){const e=xr(...t.map(n=>n.left)),r=xr(...t.map(n=>n.top)),i=Lt(...t.map(n=>n.right)),s=Lt(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function gc(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>_r(oa(s)))}const vc=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:o}=e,{padding:l=2,x:u,y:p}=li(t,e),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=gc(m),y=_r(oa(m)),_=sa(l);function k(){if(f.length===2&&f[0].left>f[1].right&&u!=null&&p!=null)return f.find(S=>u>S.left-_.left&&u<S.right+_.right&&p>S.top-_.top&&p<S.bottom+_.bottom)||y;if(f.length>=2){if(ci(r)==="y"){const ue=f[0],ye=f[f.length-1],pe=Ut(r)==="top",be=ue.top,ie=ye.bottom,we=pe?ue.left:ye.left,Me=pe?ue.right:ye.right,Ze=Me-we,Xe=ie-be;return{top:be,bottom:ie,left:we,right:Me,width:Ze,height:Xe,x:we,y:be}}const S=Ut(r)==="left",j=Lt(...f.map(ue=>ue.right)),W=xr(...f.map(ue=>ue.left)),z=f.filter(ue=>S?ue.left===W:ue.right===j),de=z[0].top,te=z[z.length-1].bottom,Ee=W,N=j,ve=N-Ee,oe=te-de;return{top:de,bottom:te,left:Ee,right:N,width:ve,height:oe,x:Ee,y:de}}return y}const O=await n.getElementRects({reference:{getBoundingClientRect:k},floating:i.floating,strategy:o});return s.reference.x!==O.reference.x||s.reference.y!==O.reference.y||s.reference.width!==O.reference.width||s.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function bc(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=Ut(r),l=Ji(r),u=ci(r)==="y",p=["left","top"].includes(o)?-1:1,m=n&&u?-1:1,f=li(e,t);let{mainAxis:y,crossAxis:_,alignmentAxis:k}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof k=="number"&&(_=l==="end"?k*-1:k),u?{x:_*m,y:y*p}:{x:y*p,y:_*m}}const yc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:o,middlewareData:l}=e,u=await bc(e,t);return o===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+u.x,y:n+u.y,data:{...u,placement:o}}}}},wc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:S=>{let{x:j,y:W}=S;return{x:j,y:W}}},...u}=li(t,e),p={x:r,y:i},m=await na(e,u),f=ci(Ut(s)),y=ta(f);let _=p[y],k=p[f];if(n){const S=y==="y"?"top":"left",j=y==="y"?"bottom":"right",W=_+m[S],z=_-m[j];_=xo(W,_,z)}if(o){const S=f==="y"?"top":"left",j=f==="y"?"bottom":"right",W=k+m[S],z=k-m[j];k=xo(W,k,z)}const O=l.fn({...e,[y]:_,[f]:k});return{...O,data:{x:O.x-r,y:O.y-i}}}}};function Lr(t){return aa(t)?(t.nodeName||"").toLowerCase():"#document"}function ct(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Kt(t){var e;return(e=(aa(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function aa(t){return t instanceof Node||t instanceof ct(t).Node}function Pt(t){return t instanceof Element||t instanceof ct(t).Element}function Ot(t){return t instanceof HTMLElement||t instanceof ct(t).HTMLElement}function ko(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ct(t).ShadowRoot}function hi(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=wt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function xc(t){return["table","td","th"].includes(Lr(t))}function es(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function $n(t){const e=Cn(),r=wt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function _c(t){let e=Qt(t);for(;Ot(e)&&!kr(e);){if(es(e))return null;if($n(e))return e;e=Qt(e)}return null}function Cn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function kr(t){return["html","body","#document"].includes(Lr(t))}function wt(t){return ct(t).getComputedStyle(t)}function ts(t){return Pt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Qt(t){if(Lr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ko(t)&&t.host||Kt(t);return ko(e)?e.host:e}function la(t){const e=Qt(t);return kr(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ot(e)&&hi(e)?e:la(e)}function cn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=la(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),o=ct(s);return n?e.concat(o,o.visualViewport||[],hi(s)?s:[],o.frameElement&&r?cn(o.frameElement):[]):e.concat(s,cn(s,[],r))}function ca(t){const e=wt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Ot(t),n=s?t.offsetWidth:r,o=s?t.offsetHeight:i,l=Ni(r)!==n||Ni(i)!==o;return l&&(r=n,i=o),{width:r,height:i,$:l}}function ha(t){return Pt(t)?t:t.contextElement}function yr(t){const e=ha(t);if(!Ot(e))return Gt(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=ca(e);let o=(n?Ni(r.width):r.width)/i,l=(n?Ni(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const kc=Gt(0);function da(t){const e=ct(t);return!Cn()||!e.visualViewport?kc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $c(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ct(t)?!1:e}function Kr(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=ha(t);let o=Gt(1);e&&(i?Pt(i)&&(o=yr(i)):o=yr(t));const l=$c(n,r,i)?da(n):Gt(0);let u=(s.left+l.x)/o.x,p=(s.top+l.y)/o.y,m=s.width/o.x,f=s.height/o.y;if(n){const y=ct(n),_=i&&Pt(i)?ct(i):i;let k=y,O=k.frameElement;for(;O&&i&&_!==k;){const S=yr(O),j=O.getBoundingClientRect(),W=wt(O),z=j.left+(O.clientLeft+parseFloat(W.paddingLeft))*S.x,de=j.top+(O.clientTop+parseFloat(W.paddingTop))*S.y;u*=S.x,p*=S.y,m*=S.x,f*=S.y,u+=z,p+=de,k=ct(O),O=k.frameElement}}return _r({width:m,height:f,x:u,y:p})}function Cc(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",o=Kt(i),l=e?es(e.floating):!1;if(i===o||l&&n)return r;let u={scrollLeft:0,scrollTop:0},p=Gt(1);const m=Gt(0),f=Ot(i);if((f||!f&&!n)&&((Lr(i)!=="body"||hi(o))&&(u=ts(i)),Ot(i))){const y=Kr(i);p=yr(i),m.x=y.x+i.clientLeft,m.y=y.y+i.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-u.scrollLeft*p.x+m.x,y:r.y*p.y-u.scrollTop*p.y+m.y}}function Sc(t){return Array.from(t.getClientRects())}function ua(t){return Kr(Kt(t)).left+ts(t).scrollLeft}function Pc(t){const e=Kt(t),r=ts(t),i=t.ownerDocument.body,s=Lt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Lt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+ua(t);const l=-r.scrollTop;return wt(i).direction==="rtl"&&(o+=Lt(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:l}}function Oc(t,e){const r=ct(t),i=Kt(t),s=r.visualViewport;let n=i.clientWidth,o=i.clientHeight,l=0,u=0;if(s){n=s.width,o=s.height;const p=Cn();(!p||p&&e==="fixed")&&(l=s.offsetLeft,u=s.offsetTop)}return{width:n,height:o,x:l,y:u}}function Ec(t,e){const r=Kr(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Ot(t)?yr(t):Gt(1),o=t.clientWidth*n.x,l=t.clientHeight*n.y,u=s*n.x,p=i*n.y;return{width:o,height:l,x:u,y:p}}function $o(t,e,r){let i;if(e==="viewport")i=Oc(t,r);else if(e==="document")i=Pc(Kt(t));else if(Pt(e))i=Ec(e,r);else{const s=da(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return _r(i)}function pa(t,e){const r=Qt(t);return r===e||!Pt(r)||kr(r)?!1:wt(r).position==="fixed"||pa(r,e)}function Ac(t,e){const r=e.get(t);if(r)return r;let i=cn(t,[],!1).filter(l=>Pt(l)&&Lr(l)!=="body"),s=null;const n=wt(t).position==="fixed";let o=n?Qt(t):t;for(;Pt(o)&&!kr(o);){const l=wt(o),u=$n(o);!u&&l.position==="fixed"&&(s=null),(n?!u&&!s:!u&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||hi(o)&&!u&&pa(t,o))?i=i.filter(m=>m!==o):s=l,o=Qt(o)}return e.set(t,i),i}function Dc(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const o=[...r==="clippingAncestors"?es(e)?[]:Ac(e,this._c):[].concat(r),i],l=o[0],u=o.reduce((p,m)=>{const f=$o(e,m,s);return p.top=Lt(f.top,p.top),p.right=xr(f.right,p.right),p.bottom=xr(f.bottom,p.bottom),p.left=Lt(f.left,p.left),p},$o(e,l,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Rc(t){const{width:e,height:r}=ca(t);return{width:e,height:r}}function Lc(t,e,r){const i=Ot(e),s=Kt(e),n=r==="fixed",o=Kr(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const u=Gt(0);if(i||!i&&!n)if((Lr(e)!=="body"||hi(s))&&(l=ts(e)),i){const f=Kr(e,!0,n,e);u.x=f.x+e.clientLeft,u.y=f.y+e.clientTop}else s&&(u.x=ua(s));const p=o.left+l.scrollLeft-u.x,m=o.top+l.scrollTop-u.y;return{x:p,y:m,width:o.width,height:o.height}}function en(t){return wt(t).position==="static"}function Co(t,e){return!Ot(t)||wt(t).position==="fixed"?null:e?e(t):t.offsetParent}function fa(t,e){const r=ct(t);if(es(t))return r;if(!Ot(t)){let s=Qt(t);for(;s&&!kr(s);){if(Pt(s)&&!en(s))return s;s=Qt(s)}return r}let i=Co(t,e);for(;i&&xc(i)&&en(i);)i=Co(i,e);return i&&kr(i)&&en(i)&&!$n(i)?r:i||_c(t)||r}const Tc=async function(t){const e=this.getOffsetParent||fa,r=this.getDimensions,i=await r(t.floating);return{reference:Lc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Mc(t){return wt(t).direction==="rtl"}const Uc={convertOffsetParentRelativeRectToViewportRelativeRect:Cc,getDocumentElement:Kt,getClippingRect:Dc,getOffsetParent:fa,getElementRects:Tc,getClientRects:Sc,getDimensions:Rc,getScale:yr,isElement:Pt,isRTL:Mc},Fc=yc,jc=wc,Ic=mc,Wc=vc,Nc=(t,e,r)=>{const i=new Map,s={platform:Uc,...r},n={...s.platform,_c:i};return fc(t,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=Zi(class extends kn{constructor(t){var e;if(super(t),t.type!==_n.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Xt}});var Hc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,di=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Hc(e,r,s),s};let Ft=class extends st{constructor(){super(...arguments),this.dropdownRef=Te(),this.invokerRef=Te(),this.optionsRef=Te(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Nc(this.invokerRef.value,this.optionsRef.value,{middleware:[Fc(2),Ic(),Wc(),jc()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,o;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(o=this.dropdownRef.value)==null||o.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return D`

            <div class="dropdown" ${Ne(this.dropdownRef)}>

                <thermal-button class="${Tt(t)}" ${Ne(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?D`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:D`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Ne(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Ft.shadowRootOptions={...st.shadowRootOptions,mode:"open"};Ft.styles=Pe`

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
    
    `;di([ai({slot:"option"})],Ft.prototype,"_options",2);di([I({type:String,reflect:!0})],Ft.prototype,"open",2);di([I({type:String,reflect:!0,attribute:!0}),L()],Ft.prototype,"interactive",2);di([I({type:String,reflect:!0})],Ft.prototype,"variant",2);Ft=di([re("thermal-dropdown")],Ft);var Vc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,rs=(t,e,r,i)=>{for(var s=i>1?void 0:i?zc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Vc(e,r,s),s};let $r=class extends st{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Te(),this.contentRef=Te(),this.rulerContentRef=Te()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return D`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ne(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ne(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ne(this.contentRef)}>

                    ${this.collapsed===!1?D`
                        <slot></slot>    
                    `:B}
                
                </div>

            </div>

            ${this.collapsed?D`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:B}
        
        `}};$r.styles=Pe`

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

    `;rs([L()],$r.prototype,"collapsed",2);rs([L()],$r.prototype,"lastContentWidth",2);rs([L()],$r.prototype,"drawerRef",2);$r=rs([re("thermal-bar")],$r);var Yc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,cr=(t,e,r,i)=>{for(var s=i>1?void 0:i?qc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Yc(e,r,s),s};let jt=class extends st{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Te(),this.contentRef=Te()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,o=r.contentRect.width,l=n-175,u=o-0,p=this.contentRef.value.offsetHeight,m=4/3;let f=0,y=0;p<l?(console.log("priorita šířky"),f=u,y=f/m):(console.log("priorita výšky"),y=l,f=y*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${y}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return D`

        <div class="container ${this.dark?"dark":"normal"}" ${Ne(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?D`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?D`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?D`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:D`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:B}

                -->
                
            </div> 
        `:""}

        ${this.pre.length>=0?D`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Ne(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

        </div>
        
        `}};jt.styles=Pe`

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
    
    `;cr([ai({slot:"bar",flatten:!0})],jt.prototype,"barItems",2);cr([ai({slot:"bar",flatten:!0})],jt.prototype,"barElements",2);cr([ai({slot:"pre",flatten:!0})],jt.prototype,"pre",2);cr([I({type:String,reflect:!0})],jt.prototype,"fullscreen",2);cr([I({type:String,reflect:!0,attribute:!0})],jt.prototype,"showfullscreen",2);cr([I({type:String,reflect:!0,attribute:!0})],jt.prototype,"dark",2);jt=cr([re("thermal-app")],jt);var Xc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Qc=(t,e,r,i)=>{for(var s=i>1?void 0:i?Gc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Xc(e,r,s),s};let hn=class extends st{render(){return D`
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
                        <p>version ${bn}</p>
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
        `}};hn.styles=Pe`

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
    
    `;hn=Qc([re("app-info-button")],hn);function vt(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function or(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const ma=6048e5,Zc=864e5;let Kc={};function is(){return Kc}function Jr(t,e){var l,u,p,m;const r=is(),i=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??r.weekStartsOn??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.weekStartsOn)??0,s=vt(t),n=s.getDay(),o=(n<i?7:0)+n-i;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function Bi(t){return Jr(t,{weekStartsOn:1})}function ga(t){const e=vt(t),r=e.getFullYear(),i=or(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=Bi(i),n=or(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const o=Bi(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=o.getTime()?r:r-1}function So(t){const e=vt(t);return e.setHours(0,0,0,0),e}function Po(t){const e=vt(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Jc(t,e){const r=So(t),i=So(e),s=+r-Po(r),n=+i-Po(i);return Math.round((s-n)/Zc)}function eh(t){const e=ga(t),r=or(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),Bi(r)}function th(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function va(t){if(!th(t)&&typeof t!="number")return!1;const e=vt(t);return!isNaN(Number(e))}function rh(t){const e=vt(t),r=or(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const ih={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},sh=(t,e,r)=>{let i;const s=ih[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function tn(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const nh={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},oh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ah={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},lh={date:tn({formats:nh,defaultWidth:"full"}),time:tn({formats:oh,defaultWidth:"full"}),dateTime:tn({formats:ah,defaultWidth:"full"})},ch={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},hh=(t,e,r,i)=>ch[t];function Br(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):o;s=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[o]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const dh={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},uh={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ph={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},fh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},mh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},gh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vh=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},bh={ordinalNumber:vh,era:Br({values:dh,defaultWidth:"wide"}),quarter:Br({values:uh,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Br({values:ph,defaultWidth:"wide"}),day:Br({values:fh,defaultWidth:"wide"}),dayPeriod:Br({values:mh,defaultWidth:"wide",formattingValues:gh,defaultFormattingWidth:"wide"})};function Vr(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const o=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?wh(l,f=>f.test(o)):yh(l,f=>f.test(o));let p;p=t.valueCallback?t.valueCallback(u):u,p=r.valueCallback?r.valueCallback(p):p;const m=e.slice(o.length);return{value:p,rest:m}}}function yh(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function wh(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function xh(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let o=t.valueCallback?t.valueCallback(n[0]):n[0];o=r.valueCallback?r.valueCallback(o):o;const l=e.slice(s.length);return{value:o,rest:l}}}const _h=/^(\d+)(th|st|nd|rd)?/i,kh=/\d+/i,$h={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ch={any:[/^b/i,/^(a|c)/i]},Sh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ph={any:[/1/i,/2/i,/3/i,/4/i]},Oh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Eh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ah={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Dh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Rh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Lh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Th={ordinalNumber:xh({matchPattern:_h,parsePattern:kh,valueCallback:t=>parseInt(t,10)}),era:Vr({matchPatterns:$h,defaultMatchWidth:"wide",parsePatterns:Ch,defaultParseWidth:"any"}),quarter:Vr({matchPatterns:Sh,defaultMatchWidth:"wide",parsePatterns:Ph,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Vr({matchPatterns:Oh,defaultMatchWidth:"wide",parsePatterns:Eh,defaultParseWidth:"any"}),day:Vr({matchPatterns:Ah,defaultMatchWidth:"wide",parsePatterns:Dh,defaultParseWidth:"any"}),dayPeriod:Vr({matchPatterns:Rh,defaultMatchWidth:"any",parsePatterns:Lh,defaultParseWidth:"any"})},Mh={code:"en-US",formatDistance:sh,formatLong:lh,formatRelative:hh,localize:bh,match:Th,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Uh(t){const e=vt(t);return Jc(e,rh(e))+1}function Fh(t){const e=vt(t),r=+Bi(e)-+eh(e);return Math.round(r/ma)+1}function ba(t,e){var m,f,y,_;const r=vt(t),i=r.getFullYear(),s=is(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((_=(y=s.locale)==null?void 0:y.options)==null?void 0:_.firstWeekContainsDate)??1,o=or(t,0);o.setFullYear(i+1,0,n),o.setHours(0,0,0,0);const l=Jr(o,e),u=or(t,0);u.setFullYear(i,0,n),u.setHours(0,0,0,0);const p=Jr(u,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function jh(t,e){var l,u,p,m;const r=is(),i=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,s=ba(t,e),n=or(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Jr(n,e)}function Ih(t,e){const r=vt(t),i=+Jr(r,e)-+jh(r,e);return Math.round(i/ma)+1}function he(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const zt={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return he(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):he(r+1,2)},d(t,e){return he(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return he(t.getHours()%12||12,e.length)},H(t,e){return he(t.getHours(),e.length)},m(t,e){return he(t.getMinutes(),e.length)},s(t,e){return he(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return he(s,e.length)}},gr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Oo={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return zt.y(t,e)},Y:function(t,e,r,i){const s=ba(t,i),n=s>0?s:1-s;if(e==="YY"){const o=n%100;return he(o,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):he(n,e.length)},R:function(t,e){const r=ga(t);return he(r,e.length)},u:function(t,e){const r=t.getFullYear();return he(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return he(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return he(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return zt.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return he(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Ih(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):he(s,e.length)},I:function(t,e,r){const i=Fh(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):he(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):zt.d(t,e)},D:function(t,e,r){const i=Uh(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):he(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return he(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return he(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return he(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=gr.noon:i===0?s=gr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=gr.evening:i>=12?s=gr.afternoon:i>=4?s=gr.morning:s=gr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return zt.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):zt.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):he(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):he(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):zt.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):zt.s(t,e)},S:function(t,e){return zt.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Ao(i);case"XXXX":case"XX":return rr(i);case"XXXXX":case"XXX":default:return rr(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return Ao(i);case"xxxx":case"xx":return rr(i);case"xxxxx":case"xxx":default:return rr(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Eo(i,":");case"OOOO":default:return"GMT"+rr(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Eo(i,":");case"zzzz":default:return"GMT"+rr(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return he(i,e.length)},T:function(t,e,r){const i=t.getTime();return he(i,e.length)}};function Eo(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+he(n,2)}function Ao(t,e){return t%60===0?(t>0?"-":"+")+he(Math.abs(t)/60,2):rr(t,e)}function rr(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=he(Math.trunc(i/60),2),n=he(i%60,2);return r+s+e+n}const Do=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ya=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Wh=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return Do(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Do(i,e)).replace("{{time}}",ya(s,e))},Nh={p:ya,P:Wh},Hh=/^D+$/,Bh=/^Y+$/,Vh=["D","DD","YY","YYYY"];function zh(t){return Hh.test(t)}function Yh(t){return Bh.test(t)}function qh(t,e,r){const i=Xh(t,e,r);if(console.warn(i),Vh.includes(t))throw new RangeError(i)}function Xh(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Gh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Zh=/^'([^]*?)'?$/,Kh=/''/g,Jh=/[a-zA-Z]/;function Cr(t,e,r){var m,f,y,_;const i=is(),s=i.locale??Mh,n=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,o=i.weekStartsOn??((_=(y=i.locale)==null?void 0:y.options)==null?void 0:_.weekStartsOn)??0,l=vt(t);if(!va(l))throw new RangeError("Invalid time value");let u=e.match(Qh).map(k=>{const O=k[0];if(O==="p"||O==="P"){const S=Nh[O];return S(k,s.formatLong)}return k}).join("").match(Gh).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const O=k[0];if(O==="'")return{isToken:!1,value:ed(k)};if(Oo[O])return{isToken:!0,value:k};if(O.match(Jh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:k}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const p={firstWeekContainsDate:n,weekStartsOn:o,locale:s};return u.map(k=>{if(!k.isToken)return k.value;const O=k.value;(Yh(O)||zh(O))&&qh(O,e,String(t));const S=Oo[O[0]];return S(l,O,s.localize,p)}).join("")}function ed(t){const e=t.match(Zh);return e?e[1].replace(Kh,"'"):t}function rn(t,e){const r=vt(t);if(!va(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const o=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const u=he(r.getDate(),2),p=he(r.getMonth()+1,2);n=`${he(r.getFullYear(),4)}${o}${p}${o}${u}`}if(s!=="date"){const u=he(r.getHours(),2),p=he(r.getMinutes(),2),m=he(r.getSeconds(),2);n=`${n}${n===""?"":" "}${u}${l}${p}${l}${m}`}return n}var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rd(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var dn={exports:{}};const id={},sd=Object.freeze(Object.defineProperty({__proto__:null,default:id},Symbol.toStringTag,{value:"Module"})),vr=rd(sd);/**
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
 */(function(t,e){(function(r,i){i(e)})(td,function(r){var i={},s={exports:{}};(function(x){var P=function(Y){return typeof Y<"u"&&Y.versions!=null&&Y.versions.node!=null&&Y+""=="[object process]"};x.exports.isNode=P,x.exports.platform=typeof process<"u"&&P(process)?"node":"browser";var E=x.exports.platform==="node"&&vr;x.exports.isMainThread=x.exports.platform==="node"?(!E||E.isMainThread)&&!process.connected:typeof Window<"u",x.exports.cpus=x.exports.platform==="browser"?self.navigator.hardwareConcurrency:vr.cpus().length})(s);var n=s.exports,o={},l;function u(){if(l)return o;l=1;function x(Y,_e){var Z=this;if(!(this instanceof x))throw new SyntaxError("Constructor must be called with the new operator");if(typeof Y!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Ae=[],fe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var U=function(K,ae){Ae.push(K),fe.push(ae)};this.then=function($,K){return new x(function(ae,He){var Ge=$?P($,ae,He):ae,$t=K?P(K,ae,He):He;U(Ge,$t)},Z)};var me=function(K){return Z.resolved=!0,Z.rejected=!1,Z.pending=!1,Ae.forEach(function(ae){ae(K)}),U=function(He,Ge){He(K)},me=w=function(){},Z},w=function(K){return Z.resolved=!1,Z.rejected=!0,Z.pending=!1,fe.forEach(function(ae){ae(K)}),U=function(He,Ge){Ge(K)},me=w=function(){},Z};this.cancel=function(){return _e?_e.cancel():w(new E),Z},this.timeout=function($){if(_e)_e.timeout($);else{var K=setTimeout(function(){w(new A("Promise timed out after "+$+" ms"))},$);Z.always(function(){clearTimeout(K)})}return Z},Y(function($){me($)},function($){w($)})}function P(Y,_e,Z){return function(Ae){try{var fe=Y(Ae);fe&&typeof fe.then=="function"&&typeof fe.catch=="function"?fe.then(_e,Z):_e(fe)}catch(U){Z(U)}}}x.prototype.catch=function(Y){return this.then(null,Y)},x.prototype.always=function(Y){return this.then(Y,Y)},x.all=function(Y){return new x(function(_e,Z){var Ae=Y.length,fe=[];Ae?Y.forEach(function(U,me){U.then(function(w){fe[me]=w,Ae--,Ae==0&&_e(fe)},function(w){Ae=0,Z(w)})}):_e(fe)})},x.defer=function(){var Y={};return Y.promise=new x(function(_e,Z){Y.resolve=_e,Y.reject=Z}),Y};function E(Y){this.message=Y||"promise cancelled",this.stack=new Error().stack}E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="CancellationError",x.CancellationError=E;function A(Y){this.message=Y||"timeout exceeded",this.stack=new Error().stack}return A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="TimeoutError",x.TimeoutError=A,o.Promise=x,o}function p(x,P){(P==null||P>x.length)&&(P=x.length);for(var E=0,A=Array(P);E<P;E++)A[E]=x[E];return A}function m(x,P){var E=typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(!E){if(Array.isArray(x)||(E=j(x))||P){E&&(x=E);var A=0,Y=function(){};return{s:Y,n:function(){return A>=x.length?{done:!0}:{done:!1,value:x[A++]}},e:function(fe){throw fe},f:Y}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _e,Z=!0,Ae=!1;return{s:function(){E=E.call(x)},n:function(){var fe=E.next();return Z=fe.done,fe},e:function(fe){Ae=!0,_e=fe},f:function(){try{Z||E.return==null||E.return()}finally{if(Ae)throw _e}}}}function f(x,P,E){return(P=O(P))in x?Object.defineProperty(x,P,{value:E,enumerable:!0,configurable:!0,writable:!0}):x[P]=E,x}function y(x,P){var E=Object.keys(x);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(x);P&&(A=A.filter(function(Y){return Object.getOwnPropertyDescriptor(x,Y).enumerable})),E.push.apply(E,A)}return E}function _(x){for(var P=1;P<arguments.length;P++){var E=arguments[P]!=null?arguments[P]:{};P%2?y(Object(E),!0).forEach(function(A){f(x,A,E[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(E)):y(Object(E)).forEach(function(A){Object.defineProperty(x,A,Object.getOwnPropertyDescriptor(E,A))})}return x}function k(x,P){if(typeof x!="object"||!x)return x;var E=x[Symbol.toPrimitive];if(E!==void 0){var A=E.call(x,P||"default");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(x)}function O(x){var P=k(x,"string");return typeof P=="symbol"?P:P+""}function S(x){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},S(x)}function j(x,P){if(x){if(typeof x=="string")return p(x,P);var E={}.toString.call(x).slice(8,-1);return E==="Object"&&x.constructor&&(E=x.constructor.name),E==="Map"||E==="Set"?Array.from(x):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?p(x,P):void 0}}var W={exports:{}},z={},de;function te(){return de||(de=1,z.validateOptions=function(P,E,A){if(P){var Y=P?Object.keys(P):[],_e=Y.find(function(Ae){return!E.includes(Ae)});if(_e)throw new Error('Object "'+A+'" contains an unknown option "'+_e+'"');var Z=E.find(function(Ae){return Object.prototype[Ae]&&!Y.includes(Ae)});if(Z)throw new Error('Object "'+A+'" contains an inherited option "'+Z+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return P}},z.workerOptsNames=["credentials","name","type"],z.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],z.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),z}var Ee,N;function ve(){return N||(N=1,Ee=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Ee}var oe;function ue(){if(oe)return W.exports;oe=1;var x=u(),P=x.Promise,E=n,A=te(),Y=A.validateOptions,_e=A.forkOptsNames,Z=A.workerThreadOptsNames,Ae=A.workerOptsNames,fe="__workerpool-terminate__";function U(){var V=w();if(!V)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return V}function me(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":S(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function w(){try{return vr}catch(V){if(S(V)==="object"&&V!==null&&V.code==="MODULE_NOT_FOUND")return null;throw V}}function $(){if(E.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var V=new Blob([ve()],{type:"text/javascript"});return window.URL.createObjectURL(V)}else return __dirname+"/worker.js"}function K(V,J){if(J.workerType==="web")return me(),ae(V,J.workerOpts,Worker);if(J.workerType==="thread")return C=U(),He(V,C,J);if(J.workerType==="process"||!J.workerType)return Ge(V,$t(J),vr);if(E.platform==="browser")return me(),ae(V,J.workerOpts,Worker);var C=w();return C?He(V,C,J):Ge(V,$t(J),vr)}function ae(V,J,C){Y(J,Ae,"workerOpts");var Q=new C(V,J);return Q.isBrowserWorker=!0,Q.on=function(ke,xe){this.addEventListener(ke,function(Le){xe(Le.data)})},Q.send=function(ke,xe){this.postMessage(ke,xe)},Q}function He(V,J,C){var Q,ke;Y(C==null?void 0:C.workerThreadOpts,Z,"workerThreadOpts");var xe=new J.Worker(V,_({stdout:(Q=C==null?void 0:C.emitStdStreams)!==null&&Q!==void 0?Q:!1,stderr:(ke=C==null?void 0:C.emitStdStreams)!==null&&ke!==void 0?ke:!1},C==null?void 0:C.workerThreadOpts));return xe.isWorkerThread=!0,xe.send=function(Le,le){this.postMessage(Le,le)},xe.kill=function(){return this.terminate(),!0},xe.disconnect=function(){this.terminate()},C!=null&&C.emitStdStreams&&(xe.stdout.on("data",function(Le){return xe.emit("stdout",Le)}),xe.stderr.on("data",function(Le){return xe.emit("stderr",Le)})),xe}function Ge(V,J,C){Y(J.forkOpts,_e,"forkOpts");var Q=C.fork(V,J.forkArgs,J.forkOpts),ke=Q.send;return Q.send=function(xe){return ke.call(Q,xe)},J.emitStdStreams&&(Q.stdout.on("data",function(xe){return Q.emit("stdout",xe)}),Q.stderr.on("data",function(xe){return Q.emit("stderr",xe)})),Q.isChildProcess=!0,Q}function $t(V){V=V||{};var J=process.execArgv.join(" "),C=J.indexOf("--inspect")!==-1,Q=J.indexOf("--debug-brk")!==-1,ke=[];return C&&(ke.push("--inspect="+V.debugPort),Q&&ke.push("--debug-brk")),process.execArgv.forEach(function(xe){xe.indexOf("--max-old-space-size")>-1&&ke.push(xe)}),Object.assign({},V,{forkArgs:V.forkArgs,forkOpts:Object.assign({},V.forkOpts,{execArgv:(V.forkOpts&&V.forkOpts.execArgv||[]).concat(ke),stdio:V.emitStdStreams?"pipe":void 0})})}function lt(V){for(var J=new Error(""),C=Object.keys(V),Q=0;Q<C.length;Q++)J[C[Q]]=V[C[Q]];return J}function pt(V,J){if(Object.keys(V.processing).length===1){var C=Object.values(V.processing)[0];C.options&&typeof C.options.on=="function"&&C.options.on(J)}}function Bt(V,J){var C=this,Q=J||{};this.script=V||$(),this.worker=K(this.script,Q),this.debugPort=Q.debugPort,this.forkOpts=Q.forkOpts,this.forkArgs=Q.forkArgs,this.workerOpts=Q.workerOpts,this.workerThreadOpts=Q.workerThreadOpts,this.workerTerminateTimeout=Q.workerTerminateTimeout,V||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(le){pt(C,{stdout:le.toString()})}),this.worker.on("stderr",function(le){pt(C,{stderr:le.toString()})}),this.worker.on("message",function(le){if(!C.terminated)if(typeof le=="string"&&le==="ready")C.worker.ready=!0,xe();else{var et=le.id,Be=C.processing[et];Be!==void 0&&(le.isEvent?Be.options&&typeof Be.options.on=="function"&&Be.options.on(le.payload):(delete C.processing[et],C.terminating===!0&&C.terminate(),le.error?Be.resolver.reject(lt(le.error)):Be.resolver.resolve(le.result)))}});function ke(le){C.terminated=!0;for(var et in C.processing)C.processing[et]!==void 0&&C.processing[et].resolver.reject(le);C.processing=Object.create(null)}function xe(){var le=m(C.requestQueue.splice(0)),et;try{for(le.s();!(et=le.n()).done;){var Be=et.value;C.worker.send(Be.message,Be.transfer)}}catch(xi){le.e(xi)}finally{le.f()}}var Le=this.worker;this.worker.on("error",ke),this.worker.on("exit",function(le,et){var Be=`Workerpool Worker terminated Unexpectedly
`;Be+="    exitCode: `"+le+"`\n",Be+="    signalCode: `"+et+"`\n",Be+="    workerpool.script: `"+C.script+"`\n",Be+="    spawnArgs: `"+Le.spawnargs+"`\n",Be+="    spawnfile: `"+Le.spawnfile+"`\n",Be+="    stdout: `"+Le.stdout+"`\n",Be+="    stderr: `"+Le.stderr+"`\n",ke(new Error(Be))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Bt.prototype.methods=function(){return this.exec("methods")},Bt.prototype.exec=function(V,J,C,Q){C||(C=P.defer());var ke=++this.lastId;this.processing[ke]={id:ke,resolver:C,options:Q};var xe={message:{id:ke,method:V,params:J},transfer:Q&&Q.transfer};this.terminated?C.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(xe.message,xe.transfer):this.requestQueue.push(xe);var Le=this;return C.promise.catch(function(le){if(le instanceof P.CancellationError||le instanceof P.TimeoutError)return delete Le.processing[ke],Le.terminateAndNotify(!0).then(function(){throw le},function(et){throw et});throw le})},Bt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Bt.prototype.terminate=function(V,J){var C=this;if(V){for(var Q in this.processing)this.processing[Q]!==void 0&&this.processing[Q].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof J=="function"&&(this.terminationHandler=J),this.busy())this.terminating=!0;else{var ke=function(le){if(C.terminated=!0,C.cleaning=!1,C.worker!=null&&C.worker.removeAllListeners&&C.worker.removeAllListeners("message"),C.worker=null,C.terminating=!1,C.terminationHandler)C.terminationHandler(le,C);else if(le)throw le};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ke(new Error("worker already killed!"));return}var xe=setTimeout(function(){C.worker&&C.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(xe),C.worker&&(C.worker.killed=!0),ke()}),this.worker.ready?this.worker.send(fe):this.requestQueue.push({message:fe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ke()}},Bt.prototype.terminateAndNotify=function(V,J){var C=P.defer();return J&&C.promise.timeout(J),this.terminate(V,function(Q,ke){Q?C.reject(Q):C.resolve(ke)}),C.promise},W.exports=Bt,W.exports._tryRequireWorkerThreads=w,W.exports._setupProcessWorker=Ge,W.exports._setupBrowserWorker=ae,W.exports._setupWorkerThreadWorker=He,W.exports.ensureWorkerThreads=U,W.exports}var ye,pe;function be(){if(pe)return ye;pe=1;var x=65535;ye=P;function P(){this.ports=Object.create(null),this.length=0}return P.prototype.nextAvailableStartingAt=function(E){for(;this.ports[E]===!0;)E++;if(E>=x)throw new Error("WorkerPool debug port limit reached: "+E+">= "+x);return this.ports[E]=!0,this.length++,E},P.prototype.releasePort=function(E){delete this.ports[E],this.length--},ye}var ie,we;function Me(){if(we)return ie;we=1;var x=u(),P=x.Promise,E=ue(),A=n,Y=be(),_e=new Y;function Z(w,$){typeof w=="string"?this.script=w||null:(this.script=null,$=w),this.workers=[],this.tasks=[],$=$||{},this.forkArgs=Object.freeze($.forkArgs||[]),this.forkOpts=Object.freeze($.forkOpts||{}),this.workerOpts=Object.freeze($.workerOpts||{}),this.workerThreadOpts=Object.freeze($.workerThreadOpts||{}),this.debugPortStart=$.debugPortStart||43210,this.nodeWorker=$.nodeWorker,this.workerType=$.workerType||$.nodeWorker||"auto",this.maxQueueSize=$.maxQueueSize||1/0,this.workerTerminateTimeout=$.workerTerminateTimeout||1e3,this.onCreateWorker=$.onCreateWorker||function(){return null},this.onTerminateWorker=$.onTerminateWorker||function(){return null},this.emitStdStreams=$.emitStdStreams||!1,$&&"maxWorkers"in $?(Ae($.maxWorkers),this.maxWorkers=$.maxWorkers):this.maxWorkers=Math.max((A.cpus||4)-1,1),$&&"minWorkers"in $&&($.minWorkers==="max"?this.minWorkers=this.maxWorkers:(fe($.minWorkers),this.minWorkers=$.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&E.ensureWorkerThreads()}Z.prototype.exec=function(w,$,K){if($&&!Array.isArray($))throw new TypeError('Array expected as argument "params"');if(typeof w=="string"){var ae=P.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var He=this.tasks,Ge={method:w,params:$,resolver:ae,timeout:null,options:K};He.push(Ge);var $t=ae.promise.timeout;return ae.promise.timeout=function(pt){return He.indexOf(Ge)!==-1?(Ge.timeout=pt,ae.promise):$t.call(ae.promise,pt)},this._next(),ae.promise}else{if(typeof w=="function")return this.exec("run",[String(w),$],K);throw new TypeError('Function or string expected as argument "method"')}},Z.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var w=this;return this.exec("methods").then(function($){var K={};return $.forEach(function(ae){K[ae]=function(){return w.exec(ae,Array.prototype.slice.call(arguments))}}),K})},Z.prototype._next=function(){if(this.tasks.length>0){var w=this._getWorker();if(w){var $=this,K=this.tasks.shift();if(K.resolver.promise.pending){var ae=w.exec(K.method,K.params,K.resolver,K.options).then($._boundNext).catch(function(){if(w.terminated)return $._removeWorker(w)}).then(function(){$._next()});typeof K.timeout=="number"&&ae.timeout(K.timeout)}else $._next()}}},Z.prototype._getWorker=function(){for(var w=this.workers,$=0;$<w.length;$++){var K=w[$];if(K.busy()===!1)return K}return w.length<this.maxWorkers?(K=this._createWorkerHandler(),w.push(K),K):null},Z.prototype._removeWorker=function(w){var $=this;return _e.releasePort(w.debugPort),this._removeWorkerFromList(w),this._ensureMinWorkers(),new P(function(K,ae){w.terminate(!1,function(He){$.onTerminateWorker({forkArgs:w.forkArgs,forkOpts:w.forkOpts,workerThreadOpts:w.workerThreadOpts,script:w.script}),He?ae(He):K(w)})})},Z.prototype._removeWorkerFromList=function(w){var $=this.workers.indexOf(w);$!==-1&&this.workers.splice($,1)},Z.prototype.terminate=function(w,$){var K=this;this.tasks.forEach(function(lt){lt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ae=function(pt){_e.releasePort(pt.debugPort),this._removeWorkerFromList(pt)},He=ae.bind(this),Ge=[],$t=this.workers.slice();return $t.forEach(function(lt){var pt=lt.terminateAndNotify(w,$).then(He).always(function(){K.onTerminateWorker({forkArgs:lt.forkArgs,forkOpts:lt.forkOpts,workerThreadOpts:lt.workerThreadOpts,script:lt.script})});Ge.push(pt)}),P.all(Ge)},Z.prototype.stats=function(){var w=this.workers.length,$=this.workers.filter(function(K){return K.busy()}).length;return{totalWorkers:w,busyWorkers:$,idleWorkers:w-$,pendingTasks:this.tasks.length,activeTasks:$}},Z.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var w=this.workers.length;w<this.minWorkers;w++)this.workers.push(this._createWorkerHandler())},Z.prototype._createWorkerHandler=function(){var w=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new E(w.script||this.script,{forkArgs:w.forkArgs||this.forkArgs,forkOpts:w.forkOpts||this.forkOpts,workerOpts:w.workerOpts||this.workerOpts,workerThreadOpts:w.workerThreadOpts||this.workerThreadOpts,debugPort:_e.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Ae(w){if(!U(w)||!me(w)||w<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function fe(w){if(!U(w)||!me(w)||w<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function U(w){return typeof w=="number"}function me(w){return Math.round(w)==w}return ie=Z,ie}var Ze={},Xe,Fr;function pr(){if(Fr)return Xe;Fr=1;function x(P,E){this.message=P,this.transfer=E}return Xe=x,Xe}var vi;function bi(){return vi||(vi=1,function(x){var P=pr(),E="__workerpool-terminate__",A={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")A.on=function(U,me){addEventListener(U,function(w){me(w.data)})},A.send=function(U,me){me?postMessage(U,me):postMessage(U)};else if(typeof process<"u"){var Y;try{Y=vr}catch(U){if(!(S(U)==="object"&&U!==null&&U.code==="MODULE_NOT_FOUND"))throw U}if(Y&&Y.parentPort!==null){var _e=Y.parentPort;A.send=_e.postMessage.bind(_e),A.on=_e.on.bind(_e),A.exit=process.exit.bind(process)}else A.on=process.on.bind(process),A.send=function(U){process.send(U)},A.on("disconnect",function(){process.exit(1)}),A.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Z(U){return Object.getOwnPropertyNames(U).reduce(function(me,w){return Object.defineProperty(me,w,{value:U[w],enumerable:!0})},{})}function Ae(U){return U&&typeof U.then=="function"&&typeof U.catch=="function"}A.methods={},A.methods.run=function(me,w){var $=new Function("return ("+me+").apply(null, arguments);");return $.apply($,w)},A.methods.methods=function(){return Object.keys(A.methods)},A.terminationHandler=void 0,A.cleanupAndExit=function(U){var me=function(){A.exit(U)};if(!A.terminationHandler)return me();var w=A.terminationHandler(U);Ae(w)?w.then(me,me):me()};var fe=null;A.on("message",function(U){if(U===E)return A.cleanupAndExit(0);try{var me=A.methods[U.method];if(me){fe=U.id;var w=me.apply(me,U.params);Ae(w)?w.then(function($){$ instanceof P?A.send({id:U.id,result:$.message,error:null},$.transfer):A.send({id:U.id,result:$,error:null}),fe=null}).catch(function($){A.send({id:U.id,result:null,error:Z($)}),fe=null}):(w instanceof P?A.send({id:U.id,result:w.message,error:null},w.transfer):A.send({id:U.id,result:w,error:null}),fe=null)}else throw new Error('Unknown method "'+U.method+'"')}catch($){A.send({id:U.id,result:null,error:Z($)})}}),A.register=function(U,me){if(U)for(var w in U)U.hasOwnProperty(w)&&(A.methods[w]=U[w]);me&&(A.terminationHandler=me.onTerminate),A.send("ready")},A.emit=function(U){if(fe){if(U instanceof P){A.send({id:fe,isEvent:!0,payload:U.message},U.transfer);return}A.send({id:fe,isEvent:!0,payload:U})}},x.add=A.register,x.emit=A.emit}(Ze)),Ze}var vs=n.platform,yi=n.isMainThread,bs=n.cpus;function at(x,P){var E=Me();return new E(x,P)}var Ht=i.pool=at;function jr(x,P){var E=bi();E.add(x,P)}var bt=i.worker=jr;function Ue(x){var P=bi();P.emit(x)}var wi=i.workerEmit=Ue,ys=u(),Ve=ys.Promise,ws=i.Promise=Ve,xs=i.Transfer=pr(),_s=i.platform=vs,ks=i.isMainThread=yi,$s=i.cpus=bs;r.Promise=ws,r.Transfer=xs,r.cpus=$s,r.default=i,r.isMainThread=ks,r.platform=_s,r.pool=Ht,r.worker=bt,r.workerEmit=wi,Object.defineProperty(r,"__esModule",{value:!0})})})(dn,dn.exports);var nd=dn.exports,od={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},ad=`\r
`,ld="\uFEFF",ss=t=>Object.assign({},od,t);class cd extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class hd extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class dd extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class ud extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Tr=t=>t,ht=t=>t,Xr=Tr,ns=Tr,Sr=Tr,Ro=Tr,Lo=Tr,pd=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},fd=t=>Ro(typeof t=="object"?t.key:t),md=t=>Lo(typeof t=="object"?t.displayLabel:t),gd=(t,...e)=>e.reduce((r,i)=>i(r),t),vd=t=>e=>t.useBom?ns(ht(e)+ld):e,bd=t=>e=>t.showTitle?Sn(ns(ht(e)+t.title))(Sr("")):e,Sn=t=>e=>ns(ht(t)+ht(e)+ad),wa=t=>(e,r)=>yd(t)(Sr(ht(e)+ht(r))),yd=t=>e=>Tr(ht(e)+t.fieldSeparator),wd=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new hd("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Sr("");for(let s=0;s<e.length;s++){const n=md(e[s]);i=wa(t)(i,xa(t,ht(n)))}return i=Sr(ht(i).slice(0,-1)),Sn(r)(i)},xd=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let o=Sr("");for(let l=0;l<e.length;l++){const u=fd(e[l]),p=r[n][ht(u)];o=wa(t)(o,xa(t,p))}o=Sr(ht(o).slice(0,-1)),s=Sn(s)(o)}return s},_d=t=>+t===t&&(!isFinite(t)||!!(t%1)),kd=(t,e)=>{if(_d(e)){if(t.decimalSeparator==="locale")return Xr(e.toLocaleString());if(t.decimalSeparator)return Xr(e.toString().replace(".",t.decimalSeparator))}return Xr(e.toString())},Mi=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+pd(e,t.quoteCharacter)+t.quoteCharacter),Xr(r)},$d=(t,e)=>{const r=e?"true":"false";return Xr(t.boolDisplay[r])},Cd=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?Mi(t,t.replaceUndefinedWith+""):e===null?Mi(t,"null"):Mi(t,""),xa=(t,e)=>{if(typeof e=="number")return kd(t,e);if(typeof e=="string")return Mi(t,e);if(typeof e=="boolean"&&t.boolDisplay)return $d(t,e);if(e===null||typeof e>"u")return Cd(t,e);throw new ud(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Sd=t=>e=>{const r=ss(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=gd(ns(""),vd(r),bd(r),wd(r,i),xd(r,i,e));if(ht(s).length<1)throw new cd("Output is empty. Is your data formatted correctly?");return s},Pd=t=>e=>{const r=ss(t),i=ht(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Od=t=>e=>{if(!window)throw new dd("Downloading only supported in a browser environment.");const r=Pd(t)(e),i=ss(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,o=document.createElement("a");o.download=n,o.href=URL.createObjectURL(r),o.setAttribute("visibility","hidden"),document.body.appendChild(o),o.click(),document.body.removeChild(o)},nt=class{constructor(t,e){c(this,"_value");c(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},_a=class extends nt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Ed=class extends nt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Ad=class extends nt{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const i={...e};return e.from<r.min&&(i.from=r.min),e.to>r.max&&(i.to=r.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=r),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},Dd=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Rd=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Ld=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Td=Dd(),sr={iron:{pixels:Ld,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Rd,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Td,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Md=class extends nt{get availablePalettes(){return sr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},on,Ud=(on=class{},c(on,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),on),We,Fd=(We=class extends Ud{static humanRangeDates(e,r){return e=We.inputToDate(e),r=We.inputToDate(r),e.getUTCDate()===r.getUTCDate()?We.humanDate(e):[We.humanDate(e),We.humanDate(r)].join(" - ")}static human(e){return`${We.humanDate(e)} ${We.humanTime(e,!0)} `}},c(We,"isoDate",e=>(e=We.inputToDate(e),rn(e,{representation:"date"}))),c(We,"isoTime",e=>(e=We.inputToDate(e),rn(e,{representation:"time"}))),c(We,"isoComplete",e=>(e=We.inputToDate(e),rn(e))),c(We,"humanTime",(e,r=!1)=>(e=We.inputToDate(e),Cr(e,r?"HH:mm:ss":"HH:mm"))),c(We,"humanDate",(e,r=!1)=>(e=We.inputToDate(e),Cr(e,r?"d. M.":"d. M. yyyy"))),We),os=class{},ka=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},Vi=class $a extends ka{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new $a(e.url,e.code,e.message)}},Ca=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Re=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},jd=class{constructor(t,e,r){c(this,"_selected",!1);c(this,"onSelected",new Re);c(this,"onDeselected",new Re);c(this,"onResize",new Re);c(this,"layerRoot");c(this,"renderRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new Re);c(this,"ready",!1);c(this,"onValues",new Re);this.key=t,this.file=e,this.initialColor=r,this.renderRoot=this.file.canvasLayer.getLayerRoot(),this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot)}get selected(){return this._selected}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor("black"),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},Id=class{constructor(t,e,r,i,s){c(this,"_x");c(this,"onX",new Re);c(this,"_y");c(this,"onY",new Re);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"container");c(this,"innerElement");this.key=t,this.analysis=i,this._x=r,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.innerElement&&(this.innerElement.style.backgroundColor=this._color)}get active(){return this._active}get isHover(){return this._isHover}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,o=this.y+r;return e>=i&&e<=s&&t>=n&&t<=o}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){this.onMouseEnter()}mouseLeave(){this.onMouseLeave()}activate(){this._active=!0,this.onActivate()}deactivate(){this._active=!1,this.onDeactivate()}},Wd=class extends Id{constructor(t,e,r,i,s){super(t,e,r,i,s),this._color=s,this.setColor(s)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}onMouseEnter(){this._isHover=!0,this.innerElement&&(this.innerElement.style.boxShadow="0px 0px 10px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}onMouseLeave(){this._isHover=!1,this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Sa=class extends Wd{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}syncXWith(e){this.onX.add(`sync X with ${e.key} `,r=>{e.x!==r&&(e.x=r)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,r=>{e.y!==r&&(e.y=r)})}onPointerDown(){throw new Error("Method not implemented.")}onPointerUp(){throw new Error("Method not implemented.")}onMove(){throw new Error("Method not implemented.")}onActivate(){this.innerElement&&(this.innerElement.style.backgroundColor="yellow")}onDeactivate(){this.innerElement&&(this.innerElement.style.backgroundColor=this.color)}},Pa=class extends jd{constructor(e,r,i,s,n,o,l){super(e,i,r);c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");let u=n,p=s;o!==void 0&&l!==void 0&&(u=n+o,p=s+l),this.area=this.buildArea(s,n,o,l),this.tl=this.addPoint("tl",s,n),this.tr=this.addPoint("tr",s,u),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,u),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onResize.add("sync the area",()=>{this.calculateBounds(),this.recalculateValues()})}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,i,s){const n=Math.min(e,s),o=Math.max(e,s),l=Math.min(r,i),p=Math.max(r,i)-l,m=o-n;return{top:n,left:l,width:p,height:m}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}init(){this.points.forEach(e=>e.createInnerElement()),this.points.forEach(e=>e.projectInnerPositionToDom())}draw(){}calculateBounds(){let e=this.file.width,r=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=r-e,this.height=s-i,this.area.left=this.left,this.area.height=this.height,this.area.width=this.width,this.area.top=this.top}addPoint(e,r,i){const s=new Sa(e,r,i,this,this.color);return this.points.set(e,s),s}},Oa=class{constructor(t,e,r,i,s){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=t,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},To=class extends Oa{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},Mo=class Ui extends Pa{static startAddingAtPoint(e,r,i,s,n){const o=new Ui(e,r,i,s,n);return o.br.activate(),o}static build(e,r,i,s,n,o,l){const{top:u,left:p,width:m,height:f}=Ui.calculateDimensionsFromCorners(s,n,o,l);return new Ui(e,r,i,u,p,m,f)}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new To(this,e,r,e+i,r+s):new To(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,o=-1/0,l=0,u=0;for(let p=i;p<s;p++){const m=this.file.width*p;for(let f=e;f<=r;f++){const y=this.file.pixels[m+f];y<n&&(n=y),y>o&&(o=y),u+=y,l++}}return{min:n,max:o,avg:u/l}}},Uo=class extends Oa{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},Fo=class Fi extends Pa{static startAddingAtPoint(e,r,i,s,n){const o=new Fi(e,r,i,s,n);return o.br.activate(),o}static build(e,r,i,s,n,o,l){const{top:u,left:p,width:m,height:f}=Fi.calculateDimensionsFromCorners(s,n,o,l);return new Fi(e,r,i,u,p,m,f)}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new Uo(this,e,r,e+i,r+s):new Uo(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,o=-1/0,l=0,u=0;for(let p=i;p<s;p++){const m=this.file.width*p;for(let f=e;f<=r;f++){const y=this.file.pixels[m+f];y<n&&(n=y),y>o&&(o=y),u+=y,l++}}return{min:n,max:o,avg:u/l}}},Nd=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new Re);c(this,"onRemove",new Re);c(this,"onSelectionChange",new Re);c(this,"colors",["orange","lightblue","green","brown","yellow","blue","pink"]);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),e.init(),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var r;this.has(e)&&((r=this.get(e))==null||r.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,r){const i=Fo.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeRectAt(e,r,i,s,n){const o=Fo.build(e,this.getNextColor(),this.drive.parent,r,i,s,n);return this.addAnalysis(o),o}createEllipsisFrom(e,r){const i=Mo.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeEllipsisAt(e,r,i,s,n){const o=Mo.build(e,this.getNextColor(),this.drive.parent,r,i,s,n);return this.addAnalysis(o),o}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.length;return e<this.colors.length?this.colors[e]:this.colors[e%this.colors.length]}getNextName(e){return`${e} ${this.all.length}`}},Hd=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...r,...s]},[])}},Bd=class extends nt{constructor(){super(...arguments);c(this,"layers",new Nd(this));c(this,"points",new Hd(this))}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(e){}getLayerRoot(){return this.parent.listenerLayer.getLayerRoot()}getRelativePosition(e){const r=this.getLayerRoot().clientWidth,i=this.parent.width,n=e.layerX/r,o=Math.round(i*n),l=this.getLayerRoot().clientHeight,u=this.parent.height,m=e.layerY/l;return{top:Math.round(u*m),left:o}}activateListeners(){this.getLayerRoot().addEventListener("pointermove",e=>{const r=this.getRelativePosition(e),i=this.parent.group.tool.value;this.points.all.forEach(s=>{s.active&&i.onPointMove(s,r.top,r.left);const n=s.isWithin(r.top,r.left);n&&!s.isHover?i.onPointEnter(s):!n&&s.isHover&&i.onPointLeave(s)})}),this.getLayerRoot().addEventListener("pointerdown",e=>{const r=this.getRelativePosition(e),i=this.parent.group.tool.value;i.onCanvasClick(r.top,r.left,this.parent),this.points.all.forEach(s=>{s.isWithin(r.top,r.left)&&i.onPointDown(s)})}),this.getLayerRoot().addEventListener("pointerup",()=>{const e=this.parent.group.tool.value;this.points.all.forEach(r=>{e.onPointUp(r)})})}deactivateListeners(){}},Vd=class extends os{constructor(e,r,i,s,n,o,l,u,p,m,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"frames",[]);c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis",new Bd(this,[]));c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");c(this,"_onHover");c(this,"_onClick");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=o,this.duration=l,this.min=u,this.max=p,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e),this.analysis.value.forEach(r=>r.recalculateValues())}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const r=this.width,i=this.root.clientWidth,s=r/i,n=Math.round(e.offsetX*s),o=Math.round(e.offsetY*s);this.group.cursorPosition.recieveCursorPosition({x:n,y:o}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){if(e!==void 0){const r=this.group.tool.value.getLabelValue(e.x,e.y,this);this.cursorLayer.setLabel(e.x,e.y,r),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(e)}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},as=class{constructor(t){c(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},St=class un{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=un.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=un.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},zd=class extends as{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=St.createCanvasContainer(),this.canvas=St.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,o,l,u)=>{const m=new OffscreenCanvas(n,o).getContext("2d"),f=s-i;for(let k=0;k<=n;k++)for(let O=0;O<=o;O++){const S=k+O*n;let j=l[S];j<i&&(j=i),j>s&&(j=s);const z=(j-i)/f,de=Math.round(255*z),te=u[de];m.fillStyle=te,m.fillRect(k,O,1,1)}const y=m.getImageData(0,0,n,o);return await createImageBitmap(y)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},Yd=class extends as{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=St.createCursorLayerRoot(),this.center=St.createCursorLayerCenter(),this.axisX=St.createCursorLayerX(),this.axisY=St.createCursorLayerY(),this.label=St.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(r*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},qd=class extends as{constructor(e){super(e);c(this,"container");this.container=St.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Xd=class extends as{constructor(e,r){super(e);c(this,"container");c(this,"image");this._url=r,this.container=St.createVisibleLayer(),this._url&&(this.image=St.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Gd=class{constructor(t,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(o=>o.index>=e&&o.index<r),s=i.filter(o=>!this.preloadedSteps.includes(o));return(await Promise.all(s.map(o=>this.drive.parent.service.frameData(o.index)))).forEach((o,l)=>{const u=s[l];this.buffer.set(u,o)}),this.preloadedSteps.forEach(o=>{i.includes(o)||this.buffer.delete(o)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Pn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Qd=class extends nt{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new Re);c(this,"callbacksPlay",new Re);c(this,"callbacksPause",new Re);c(this,"callbacksStop",new Re);c(this,"callbacksEnd",new Re);c(this,"callbacksChangeFrame",new Re);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Gd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Pn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),Cr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(u=>u.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(u=>u.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Zd=class extends nt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},Kd=class extends nt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new Re)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Jd=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(t="__thermal-data"){const e=ss({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",t)}),r=this.file.frames.map(s=>{const{pixels:n,...o}=s;return o}),i=Sd(e)(r);Od(e)(i)}},Ea=class Aa extends Vd{constructor(r,i,s,n,o,l,u,p,m,f,y,_,k,O,S,j,W){super(r,i.thermalUrl,s,n,m,o,u,y,_,l,i.visibleUrl);c(this,"_export");this.group=r,this.service=i,this.width=s,this.height=n,this.timestamp=o,this.frameCount=l,this.duration=u,this.frameInterval=p,this.fps=f,this.min=y,this.max=_,this.bytesize=k,this.averageEmissivity=O,this.averageReflectedKelvins=S,this.firstFrame=j,this.timelineData=W,this.pixels=j.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new Jd(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new zd(this),this.visibleLayer=new Xd(this,this.visibleUrl),this.cursorLayer=new Yd(this),this.listenerLayer=new qd(this),this.cursorValue=new Zd(this,void 0),this.timeline=new Qd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Kd(this,!1),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new Aa(r,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}},Pr=class extends ka{constructor(e,r,i,s,n){super(s,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),s=Ea.fromService(e,this,r,i);return e.files.addFile(s),s}},eu=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(oe,ue)=>{const ye=oe.getBigInt64(ue,!0),pe=62135596800000n,be=10000n,ie=24n*60n*60n*1000n*be,we=0x4000000000000000n,Me=0x8000000000000000n;let Xe=ye&0x3fffffffffffffffn;ye&Me&&(Xe>we-ie&&(Xe-=we),Xe<0&&(Xe+=ie));const pr=Xe/be-pe;return Number(pr)},o=n(e,5),l=e.getUint8(15);let u=2;l===1&&(u=4);const p=57,m=r*i*u,f=p+m,y=t.slice(25),_=y.byteLength/f,k=oe=>{const ue=oe*f,ye=ue+f,pe=y.slice(ue,ye),be=new DataView(pe),ie=be.getFloat32(8,!0),we=be.getFloat32(12,!0),Me=n(be,0),Ze=be.getFloat32(24,!0),Xe=be.getFloat32(28,!0);return{timestamp:Me,min:ie,max:we,emissivity:Ze,reflectedKelvins:Xe}},O=[];for(let oe=0;oe<_;oe++){const ue=k(oe);O.push(ue)}const S={emissivity:0,reflectedKelvins:0};let j=1/0,W=-1/0;const z=[];O.forEach(oe=>{S.emissivity=S.emissivity+oe.emissivity,S.reflectedKelvins=S.reflectedKelvins+oe.reflectedKelvins,oe.min<j&&(j=oe.min),oe.max>W&&(W=oe.max),z.push(oe.timestamp)});const de=z[0],te=[];z.forEach((oe,ue)=>{const ye=z[ue+1];let pe=0;ye===void 0&&(pe=0),pe=ye-oe;const be=oe-de;te.push({absolute:oe,relative:be,offset:isNaN(pe)?0:pe,index:ue})});const Ee=O[O.length-1].timestamp-O[0].timestamp,N=Ee/_,ve=1e3/N;return{width:r,height:i,timestamp:o,bytesize:s,frameCount:_,duration:Ee,frameInterval:N,fps:ve,timeline:te,min:j,max:W,averageEmissivity:S.emissivity/O.length,averageReflectedKelvins:S.reflectedKelvins/O.length}},tu=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),o=i===1?4:2,l=57,u=s*n*o,p=l+u,m=t.slice(25),f=e*p,y=f+p;return{array:m.slice(f,y),dataType:i}},ru=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,o=24n*60n*60n*1000n*n,l=0x4000000000000000n,u=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&u&&(m>l-o&&(m-=l),m<0&&(m+=o));const y=m/n-s,_=Number(y),k=r.getFloat32(8,!0),O=r.getFloat32(12,!0),S=r.getFloat32(24,!0),j=r.getFloat32(28,!0),W=t.slice(57);let z=[];if(e===0){const de=new Uint16Array(W),te=Math.abs(k-O),Ee=65535;de.forEach(N=>{const ve=N/Ee;z.push(k+te*ve)})}else e===1&&(z=Array.from(new Float32Array(W)));return{timestamp:_,min:k,max:O,emissivity:S,reflectedKelvins:j,pixels:z}},iu=async t=>{let e=[];const r=async S=>{const j=new DataView(S.slice(0,25)),W=j.getUint8(15),z=j.getUint16(17,!0),de=j.getUint16(19,!0),te=W===1?4:2,Ee=57,N=z*de*te,ve=Ee+N,oe=S.slice(25),ue=oe.byteLength/ve;let ye=[];for(let pe=0;pe<ue;pe++){const ie=pe*ve+57,we=ie+N,Me=oe.slice(ie,we);W===0||W===1&&(ye=ye.concat(Array.from(new Float32Array(Me))))}return ye};(await Promise.all(t.map(S=>r(S)))).forEach(S=>{e=e.concat(S)}),e.sort((S,j)=>S-j);const s=e[0],n=e[e.length-1],o=Math.abs(s-n),l=200,u=o/l,p=[];let m=[...e];for(let S=0;S<l;S++){const j=s+u*S,W=j+u,z=m.findIndex(ve=>ve>W),te=m.slice(0,z-1).length,Ee=te/e.length*100,N={from:j,to:W,count:te,percentage:Ee};p.push(N),m=m.slice(z)}const f=[...p].sort((S,j)=>S.percentage-j.percentage),y=f[0].percentage,_=f[f.length-1].percentage,k=Math.abs(y-_);return p.map(S=>({...S,height:S.percentage/k*100}))},su=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},nu=[{extension:"lrc",minme:"application/octet-stream"}],ou={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:nu,is:su,baseInfo:eu,getFrameSubset:tu,frameData:ru,registryHistogram:iu},Da=Object.freeze(ou),au={LrcParser:Da},Ra=Object.values(au),La=(t,e)=>{const r=Ra.find(i=>i.is(t,e));if(r===void 0)throw new Ca(2,e,`No parser found for '${e}'.`);return r},Ta=Ra.map(t=>t.extensions),lu=Ta.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),cu=class Ma{constructor(e,r,i){c(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new Ma(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new Vi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=La(i,this.thermalUrl);return this.pocessTheService(new Pr(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof Ca)return this.pocessTheService(Vi.fromError(s));throw s}}pocessTheService(e){return e}},hu=class Ua{constructor(e,r){c(this,"_hover",!1);c(this,"onMouseEnter",new Re);c(this,"onMouseLeave",new Re);c(this,"onDrop",new Re);c(this,"onProcessingEnd",new Re);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const i=new Ua(e,r);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const i=r.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=lu,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},du=class{constructor(t){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new On(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=La(e,t.name);return new Pr(this,e,r,t.name)}catch(e){return new Vi(t.name,3,e.message)}}handleDropzone(t){return hu.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=cu.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},uu=class extends nt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},pu=class extends nt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},fu=class extends _a{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},ls=class{constructor(t){this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Fa=class extends ls{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"active",!1);c(this,"getLabelValue",(e,r,i)=>i===void 0?"":i.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onCanvasClick(){}onCanvasLeave(){}onActivate(){}onDeactivate(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},ja=class extends ls{},mu=class extends ja{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"active",!1);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onCanvasClick(e,r,i){i.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.recalculateValues(),(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onCanvasLeave(){}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onResize.call())}onPointLeave(){}onPointEnter(){}},gu=class extends ja{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"active",!1);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onCanvasClick(e,r,i){i.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.recalculateValues(),(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onCanvasLeave(){}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onResize.call())}onPointLeave(){}onPointEnter(){}},vu=class extends ls{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`);c(this,"active",!1)}getLabelValue(e,r,i){const s=i.analysis.layers.all.filter(o=>o.isWithin(e,r)).map(o=>o.selected?`<span style="color:${o.initialColor}">${o.key}</span>`:`<s style="color:${o.initialColor}">${o.key}</s>`);return`${s.length>0?s.join("<br />")+"<br />":""}X: ${e}<br />Y: ${r}`}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(e){e.isInSelectedLayer()&&e.mouseEnter()}onPointLeave(e){e.isInSelectedLayer()&&e.analysis.ready&&e.mouseLeave()}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&e.isWithin(r,i)&&(e.x=i,e.y=r,e instanceof Sa&&e.analysis.onResize.call())}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}},bu={inspect:Fa,addRectangle:gu,addEllipsis:mu,edit:vu},yu=class extends nt{constructor(e,r){super(e,r);c(this,"_tools",Object.fromEntries(Object.entries(bu).map(([e,r])=>[e,new r(this.parent)])))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof ls?this.value=e:this.value=this.tools[e]}},wu=class extends os{constructor(e,r,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new fu(this,void 0));c(this,"tool",new yu(this,new Fa(this)));c(this,"files",new pu(this,[]));c(this,"cursorPosition",new Ed(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},xu=class extends nt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new wu(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},_u=class extends nt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,o)=>{let u=r.reduce((_,k)=>{const O=k.reduce((S,j)=>[...S,...j],[]);return[..._,...O]},[]).sort((_,k)=>_-k);const p=n/o;let m=i+p;const f=new Map;let y=0;for(;m!==!1;){const _=u.findIndex(S=>S>m),k=u.slice(0,_).length;f.set(m-p/2,k),y+=k,u=u.slice(_);const O=m+p;m=O<s?O:!1}return{result:f,resultCount:y}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(Da.registryHistogram,[r]);this.value=i}},ku=class extends nt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},$u=class extends _a{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Cu=class extends os{constructor(e,r,i){super();c(this,"hash",Math.random());c(this,"groups",new xu(this,[]));c(this,"opacity",new uu(this,1));c(this,"minmax",new $u(this,void 0));c(this,"loading",new ku(this,!1));c(this,"range",new Ad(this,void 0));c(this,"histogram",new _u(this,[]));c(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),o=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:o}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async o=>o instanceof Pr?await o.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Pr&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},On=class extends os{constructor(e,r){super();c(this,"id");c(this,"service",new du(this));c(this,"registries",{});c(this,"palette",new Md(this,"jet"));c(this,"pool");this.pool=e||nd.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Cu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ia=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jo=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ia(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Su{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pu=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Io extends Su{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const u=new Set;for(const[p,{consumerHost:m}]of this.subscriptions)u.has(p)||(u.add(p),m.dispatchEvent(new Ia(this.context,p,!0)));o.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Pu(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oe({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Io(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new Io(o,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const o=new WeakMap;n={get(){return o.get(this)},set(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new jo(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new jo(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let Li;const Ou=new Uint8Array(16);function Eu(){if(!Li&&(Li=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Li))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Li(Ou)}const Qe=[];for(let t=0;t<256;++t)Qe.push((t+256).toString(16).slice(1));function Au(t,e=0){return Qe[t[e+0]]+Qe[t[e+1]]+Qe[t[e+2]]+Qe[t[e+3]]+"-"+Qe[t[e+4]]+Qe[t[e+5]]+"-"+Qe[t[e+6]]+Qe[t[e+7]]+"-"+Qe[t[e+8]]+Qe[t[e+9]]+"-"+Qe[t[e+10]]+Qe[t[e+11]]+Qe[t[e+12]]+Qe[t[e+13]]+Qe[t[e+14]]+Qe[t[e+15]]}const Du=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Wo={randomUUID:Du};function Ru(t,e,r){if(Wo.randomUUID&&!e&&!t)return Wo.randomUUID();t=t||{};const i=t.random||(t.rng||Eu)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Au(i)}class cs extends st{constructor(){super(...arguments),this.UUID=Ru()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const Wa="manager-instance",hs="manager-palette-context",Lu=new On,Tu="__internal_default_registry",Mu="__internal_default_group",Uu=t=>t.addOrGetRegistry(Tu),Fu=t=>t.groups.addOrGetGroup(Mu);var ju=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,ds=(t,e,r,i)=>{for(var s=i>1?void 0:i?Iu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ju(e,r,s),s};let ar=class extends cs{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:sr.jet}}connectedCallback(){super.connectedCallback();let t=Lu;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=ar.sanitizeStringPalette(this.palette.key);e.palette=r,t=new On(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=ar.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(sr).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:sr[t]}}render(){return D`<slot></slot>`}};ds([Oe({context:Wa})],ar.prototype,"manager",2);ds([I({type:String,reflect:!0,attribute:!0})],ar.prototype,"slug",2);ds([Oe({context:hs}),I({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:sr[t]}),toAttribute:t=>t.key.toString()}})],ar.prototype,"palette",2);ar=ds([re("manager-provider")],ar);var Wu=Object.defineProperty,Nu=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Wu(e,r,s),s};class En extends cs{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}Nu([ge({context:Wa,subscribe:!0}),L()],En.prototype,"manager");const Na="registry-instance",Ha="registry-opacity",An="registry-range-from",Dn="registry-range-to",Hu="registry-loading",Ba="registry-min",Va="registry-max";var Bu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,Nt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Bu(e,r,s),s};let Et=class extends En{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=Uu(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var i;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.setFixedRange(n):s.setFixedRange(n)}}if(t==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return D`<slot></slot>`}};Nt([I({type:String,reflect:!0,attribute:!0})],Et.prototype,"slug",2);Nt([Oe({context:Na})],Et.prototype,"registry",2);Nt([Oe({context:Ha}),I({type:Number,reflect:!0,attribute:!0})],Et.prototype,"opacity",2);Nt([Oe({context:Ba}),L()],Et.prototype,"min",2);Nt([Oe({context:Va}),L()],Et.prototype,"max",2);Nt([Oe({context:An}),I({type:Number,reflect:!0,attribute:!0})],Et.prototype,"from",2);Nt([Oe({context:Dn}),I({type:Number,reflect:!0,attribute:!0})],Et.prototype,"to",2);Nt([Oe({context:Hu}),I({type:String,reflect:!0,attribute:!0})],Et.prototype,"loading",2);Et=Nt([re("registry-provider")],Et);var zu=Object.defineProperty,Yu=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&zu(e,r,s),s};class ut extends En{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}Yu([ge({context:Na,subscribe:!0})],ut.prototype,"registry");const za="group-instance",Ya="tool-context",qa="tools-context";var qu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,ui=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&qu(e,r,s),s};let Or=class extends ut{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=Fu(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return D`<slot></slot>`}};ui([I({type:String,attribute:!0,reflect:!0})],Or.prototype,"slug",2);ui([Oe({context:za})],Or.prototype,"group",2);ui([Oe({context:Ya})],Or.prototype,"tool",2);ui([Oe({context:qa})],Or.prototype,"tools",2);Or=ui([re("group-provider")],Or);var Gu=Object.defineProperty,Qu=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Gu(e,r,s),s};class pi extends ut{constructor(){super()}connectedCallback(){super.connectedCallback()}}Qu([ge({context:za,subscribe:!0})],pi.prototype,"group");const Xa="file",Ga="failure",Qa="file-loading",Zu="file-loaded",Rn="file-provider-element",Ln="file-ms-context",us="playback",Tn="duration",Mn="playing",Za="playbackSpeed",Ka="recording",Ja="mayStop",el="analysislist",Un="file-markers-context";var Ku=Object.defineProperty,ot=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Ku(e,r,s),s};class Je extends pi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Re,this.onSuccess=new Re,this.onFailure=new Re}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}attributeChangedCallback(e,r,i){var s,n,o;if(super.attributeChangedCallback(e,r,i),e==="ms"&&i&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(i)));l!==this.currentFrame.ms&&((s=this.file)==null||s.timeline.setRelativeTime(l))}e==="playing"&&(i==="true"?(n=this.file)==null||n.timeline.play():i==="false"&&((o=this.file)==null||o.timeline.pause())),e==="playbackspeed"&&this.file&&i&&Object.keys(Pn).includes(i)&&(this.file.timeline.playbackSpeed=parseFloat(i)),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.playbackSpeed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}ot([Oe({context:Xa}),L()],Je.prototype,"file");ot([Oe({context:Ga}),L()],Je.prototype,"failure");ot([Oe({context:Qa}),L()],Je.prototype,"loading");ot([Oe({context:Zu}),L()],Je.prototype,"ready");ot([Oe({context:Mn}),I({type:String,reflect:!0,attribute:!0})],Je.prototype,"playing");ot([Oe({context:Tn}),L()],Je.prototype,"duration");ot([Oe({context:us}),L()],Je.prototype,"currentFrame");ot([Oe({context:Ln}),I({type:Number,reflect:!0,attribute:!0})],Je.prototype,"ms");ot([Oe({context:Za}),I({type:Number,reflect:!0,attribute:!0})],Je.prototype,"playbackSpeed");ot([Oe({context:Ka}),I({type:String,reflect:!0,attribute:!0})],Je.prototype,"recording");ot([Oe({context:Ja}),L()],Je.prototype,"mayStop");ot([ai({slot:"mark",flatten:!0})],Je.prototype,"marksQueriedInternally");ot([Oe({context:Un})],Je.prototype,"marksProvidedBelow");ot([Oe({context:el})],Je.prototype,"analysis");var Ju=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,ps=(t,e,r,i)=>{for(var s=i>1?void 0:i?ep(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ju(e,r,s),s};let ei=class extends Je{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Pr?await e.createInstance(this.group).then(r=>(this.file=r,this.onSuccess.call(r),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(t=>{t instanceof Ea?this.recieveInstance(t):this.failure=t})}render(){return D`
            <slot></slot>
            <slot name="mark"></slot>
        `}};ps([Oe({context:Rn})],ei.prototype,"providedSelf",2);ps([I({type:String,attribute:!0,reflect:!0})],ei.prototype,"thermal",2);ps([I({type:String,attribute:!0,reflect:!0})],ei.prototype,"visible",2);ei=ps([re("file-provider")],ei);var tp=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,Mr=(t,e,r,i)=>{for(var s=i>1?void 0:i?rp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&tp(e,r,s),s};let Zt=class extends Je{constructor(){super(...arguments),this.providedSelf=this,this.container=Te(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof Pr){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof Vi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return D`

                    <div class="container">
                        <div ${Ne(this.container)} class="${Tt(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${Ta.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return D`
            ${this.ready?D`<slot></slot>`:B}
            <slot name="mark"></slot>
        `}};Zt.styles=Pe`

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
    
    `;Mr([Oe({context:Rn})],Zt.prototype,"providedSelf",2);Mr([L()],Zt.prototype,"container",2);Mr([L()],Zt.prototype,"ready",2);Mr([L()],Zt.prototype,"hover",2);Mr([L()],Zt.prototype,"listener",2);Zt=Mr([re("file-dropin")],Zt);var ip=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,Fn=(t,e,r,i)=>{for(var s=i>1?void 0:i?sp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ip(e,r,s),s};let ti=class extends pi{constructor(){super(...arguments),this.container=Te(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return D`

            <div class="container">
            
                <div ${Ne(this.container)} class="${Tt(t)}"></div>

            </div>
        
        `}};ti.styles=Pe`

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
    
    `;Fn([L()],ti.prototype,"container",2);Fn([L()],ti.prototype,"hover",2);ti=Fn([re("group-dropin")],ti);var np=Object.defineProperty,op=Object.getOwnPropertyDescriptor,tl=(t,e,r,i)=>{for(var s=i>1?void 0:i?op(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&np(e,r,s),s};let zi=class extends ut{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return D`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return D`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(sr).map(([t,e])=>D`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};zi.styles=Pe`

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

    `;tl([ge({context:hs,subscribe:!0})],zi.prototype,"value",2);zi=tl([re("registry-palette-dropdown")],zi);var ap=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,rl=(t,e,r,i)=>{for(var s=i>1?void 0:i?lp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ap(e,r,s),s};let Yi=class extends ut{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return D`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return D`
            <div class="container">
                ${Object.entries(sr).map(([t,e])=>D`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};Yi.styles=Pe`

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

    `;rl([ge({context:hs,subscribe:!0}),L()],Yi.prototype,"value",2);Yi=rl([re("registry-palette-buttons")],Yi);var cp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,il=(t,e,r,i)=>{for(var s=i>1?void 0:i?hp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&cp(e,r,s),s};let qi=class extends ut{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return D`
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
        `}};qi.styles=Pe`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;il([ge({context:Ha,subscribe:!0})],qi.prototype,"value",2);qi=il([re("registry-opacity-slider")],qi);var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,pp=(t,e,r,i)=>{for(var s=i>1?void 0:i?up(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&dp(e,r,s),s};let No=class extends ut{doAction(){this.registry.range.applyAuto()}render(){return D`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};No=pp([re("registry-range-auto-button")],No);var fp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,gp=(t,e,r,i)=>{for(var s=i>1?void 0:i?mp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&fp(e,r,s),s};let Ho=class extends ut{doAction(){this.registry.range.applyMinmax()}render(){return D`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Ho=gp([re("registry-range-full-button")],Ho);var vp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,fs=(t,e,r,i)=>{for(var s=i>1?void 0:i?bp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&vp(e,r,s),s};let At=class extends ut{constructor(){super(...arguments),this.ticksRef=Te(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/At.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return D`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Ne(this.ticksRef)}>

                    ${this.ticks.map(t=>D`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(At.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};At.TICK_WIDTH=40;At.TICK_FIXED=2;At.styles=Pe`

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


    `;fs([I({type:String,reflect:!0})],At.prototype,"placement",2);fs([L()],At.prototype,"minmax",2);fs([L()],At.prototype,"ticks",2);At=fs([re("registry-ticks-bar")],At);var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,fi=(t,e,r,i)=>{for(var s=i>1?void 0:i?wp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&yp(e,r,s),s};let Er=class extends ut{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return D`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return D`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};fi([L()],Er.prototype,"minmax",2);fi([L()],Er.prototype,"range",2);fi([L()],Er.prototype,"opacity",2);fi([L()],Er.prototype,"palette",2);Er=fi([re("registry-log")],Er);(()=>{var t=Object.defineProperty,e=Math.pow,r=(a,d,v)=>d in a?t(a,d,{enumerable:!0,configurable:!0,writable:!0,value:v}):a[d]=v,i=(a,d,v)=>(r(a,typeof d!="symbol"?d+"":d,v),v),s=(a,d)=>` ${d&&d.length>0?d.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${a} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",o="pointers-overlap",l="pointers-min-distance",u="pointers-max-distance",p="range-dragging",m="data",f="min",y="max",_="step",k="round",O="type",S="theme",j="rtl",W="btt",z="disabled",de="keyboard-disabled",te="mousewheel-disabled",Ee="slider-width",N="slider-height",ve="slider-radius",oe="slider-bg",ue="slider-bg-hover",ye="slider-bg-fill",pe="pointer-width",be="pointer-height",ie="pointer-radius",we="pointer-bg",Me="pointer-bg-hover",Ze="pointer-bg-focus",Xe="pointer-shadow",Fr="pointer-shadow-hover",pr="pointer-shadow-focus",vi="pointer-border",bi="pointer-border-hover",vs="pointer-border-focus",yi="animate-onclick",bs="css-links",at="vertical",Ht="horizontal",jr=(a,d,v,g,R)=>{let q=d-a;return q===0?v:(g-v)*(R-a)/q+v},bt=a=>!isNaN(parseFloat(a))&&isFinite(a),Ue=(a,d)=>bt(a)?Number(a):d,wi=(a,d)=>d===0?0:Math.round(a/d)*d,ys=(a,d=1/0)=>{if(d===1/0)return a;let v=e(10,d);return Math.round(a*v)/v},Ve=a=>a==null?!1:typeof a=="boolean"?a:a.trim().toLowerCase()==="true",ws=(a,d)=>{a.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:d}}))},xs=(a,d)=>{a.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:d}}))},_s=(a,d)=>{a.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:d}}))},ks=(a,d)=>{a.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:d}}))},$s=(a,d)=>{if(!d||d.length<=0)return;let v=d.map(R=>bt(R)?Ue(R,R):R),g={values:v||[]};g.value=v[0],g.value0=v[0],g.value1=v[0];for(let R=1;R<v.length;R++)g[`value${R+1}`]=v[R];a.dispatchEvent(new CustomEvent("change",{detail:g}))},x=(a,d,v)=>{let g=0,R,q,ee,T,M=!1,se=(G,De,Ye,ze,Fe,je)=>{let tt=g;Ye!==void 0&&G>Ye&&(G=Ye),De!==void 0&&G<De&&(G=De),g=G;let rt=g;return(ze===at&&je||ze===Ht&&Fe)&&(rt=100-rt),ze===at?d.style.top=`${rt}%`:d.style.left=`${rt}%`,tt!==g},ce=G=>G===d||d.contains(G),H=(G,De,Ye,ze)=>{R=G,q=De,ee=Ye,T=ze},Ce=G=>{M=G,d.classList.toggle("disabled",M),M?d.setAttribute("aria-disabled","true"):d.hasAttribute("aria-disabled")&&d.removeAttribute("aria-disabled")},ft=(G,De)=>{De==null?d.removeAttribute(G):d.setAttribute(G,De)},Ke=G=>d.getAttribute(G),X=G=>{if(!M){switch(G.key){case"ArrowLeft":{G.preventDefault(),typeof R=="function"&&R(v);break}case"ArrowRight":{G.preventDefault(),typeof q=="function"&&q(v);break}case"ArrowUp":{G.preventDefault(),typeof ee=="function"&&ee(v);break}case"ArrowDown":{G.preventDefault(),typeof T=="function"&&T(v);break}}ks(a,G)}},ne=()=>{M||ws(a,d)};return d.className=`pointer pointer-${v}`,d.addEventListener("keydown",X),d.addEventListener("click",ne),{$pointer:d,get percent(){return g},get disabled(){return M},set disabled(G){Ce(G)},updatePosition:se,isClicked:ce,setCallbacks:H,setAttr:ft,getAttr:Ke,destroy:()=>{d.removeEventListener("keydown",X),d.removeEventListener("click",ne),d.remove()}}},P=a=>{if(a==null)return;if(Array.isArray(a))return a;if(a.trim()==="")return;let d=a.split(","),v=[],g=!0;for(let R=0;R<d.length;R++){let q=d[R].trim();q!==""&&(v.push(q),bt(q)||(g=!1))}return g?v.map(R=>Number(R)):v},E=(a,d)=>d?d.findIndex(v=>v===a||v.toString().trim()===a.toString().trim()):-1,A=a=>({updatePosition:(d,v,g,R)=>{if(v.length<=0)return;let q=v.length===1,ee=v[0],T=v[v.length-1];d===at?(a.style.removeProperty("width"),a.style.removeProperty("right"),a.style.removeProperty("left"),q?a.style.height=`${ee}%`:a.style.height=`${Math.abs(ee-T)}%`,R?(a.style.bottom="0%",q?a.style.top="auto":a.style.top=`${Math.min(100-T,100-ee)}%`):(a.style.bottom="auto",q?a.style.top="0%":a.style.top=`${Math.min(ee,T)}%`)):(a.style.removeProperty("height"),a.style.removeProperty("top"),a.style.removeProperty("bottom"),q?a.style.width=`${ee}%`:a.style.width=`${Math.abs(ee-T)}%`,g?(a.style.right="0%",q?a.style.left="auto":a.style.left=`${Math.min(100-T,100-ee)}%`):(a.style.right="auto",q?a.style.left="0%":a.style.left=`${Math.min(ee,T)}%`))}}),Y="--animate-onclick",_e="--width",Z="--height",Ae="--panel-bg-border-radius",fe="--panel-bg",U="--panel-bg-hover",me="--panel-bg-fill",w="--pointer-width",$="--pointer-height",K="--pointer-border-radius",ae="--pointer-bg",He="--pointer-bg-hover",Ge="--pointer-bg-focus",$t="--pointer-shadow",lt="--pointer-shadow-hover",pt="--pointer-shadow-focus",Bt="--pointer-border",V="--pointer-border-hover",J="--pointer-border-focus",C=(a,d,v)=>{let g=new Map;for(let R of a.attributes){let q=R.nodeName.trim().toLowerCase();if(!d.test(q))continue;let ee=q.replace(/\D/g,"").trim(),T=ee===""||ee==="0"||ee==="1"?0:Ue(ee,0)-1,M=v&&typeof v=="function"?v(R.value):R.value;g.set(T,M)}return g},Q=a=>{if(!a)return null;let d=a.getAttribute(bs);if(!d)return null;let v=d.split(";"),g=[];for(let R of v)R.trim()!==""&&g.push(R.trim());return g},ke=[[_e,Ee,"sliderWidth",null],[Z,N,"sliderHeight",null],[Ae,ve,"sliderRadius",null],[fe,oe,"sliderBg",null],[U,ue,"sliderBgHover",null],[me,ye,"sliderBgFill",null],[w,pe,"pointer#Width",/^pointer([0-9]*)-width$/],[$,be,"pointer#Height",/^pointer([0-9]*)-height$/],[K,ie,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ae,we,"pointer#Bg",/^pointer([0-9]*)-bg$/],[He,Me,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ge,Ze,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[$t,Xe,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[lt,Fr,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[pt,pr,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Bt,vi,"pointer#Border",/^pointer([0-9]*)-border$/],[V,bi,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[J,vs,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],xe=(a,d,v)=>{let g=null,R=[],q=new Map,ee=(X,ne=d)=>{let G=[...ne.classList];for(let De of G)De.startsWith(X)&&d.classList.remove(De)},T=()=>{ee("shape");let X=d.querySelectorAll(".pointer");for(let ne of X)ee("shape",ne)},M=X=>{g=X,ee("theme-"),typeof X=="string"&&d.classList.add(`theme-${X}`)},se=()=>{if(T(),!(R.length<=0)){d.classList.add("shape",`shape-${R[0]}`);for(let X=1;X<R.length;X++){let ne=R[X];if(!ne)continue;let G=d.querySelector(`.pointer-${X}`);!G||G.classList.add("shape",`shape-${ne}`)}}},ce=(X,ne)=>{R[X]=ne,se()},H=()=>{T();let X=C(a,/^pointer([0-9]*)-shape$/);if(!(X.size<=0)){for(let ne of X){let G=ne[0];R[G]=ne[1]}se()}},Ce=(X,ne)=>`${X}-${ne}`,ft=(X,ne,G)=>{let De=v[G];if(!De)return;let Ye=G===0?d:De.$pointer;if(ne==null){q.has(Ce(X,G))&&q.delete(Ce(X,G)),Ye.style.removeProperty(X);return}q.set(Ce(X,G),ne),Ye.style.setProperty(X,ne)},Ke=(X,ne)=>q.get(Ce(X,ne));return(()=>{for(let X of ke){let[ne,G,De,Ye]=X;if(Ye){let Fe=C(a,Ye);for(let je of Fe){let tt=je[0],rt=je[1];ft(ne,rt,tt)}}else{let Fe=a.getAttribute(G);ft(ne,Fe,0)}let ze=[];if(De.indexOf("#")===-1)ze.push([De,0]);else{ze.push([De.replace("#",""),0]),ze.push([De.replace("#","0"),0]),ze.push([De.replace("#","1"),0]);for(let Fe=1;Fe<v.length;Fe++)ze.push([De.replace("#",(Fe+1).toString()),Fe])}for(let Fe of ze)try{let je=Fe[0],tt=Fe[1];Object.prototype.hasOwnProperty.call(a,je)||Object.defineProperty(a,je,{get(){return Ke(ne,tt)},set:rt=>{ft(ne,rt,tt)}})}catch(je){console.error(je)}}M(a.getAttribute(S)),H()})(),{setStyle:ft,getStyle:Ke,get theme(){return g},set theme(X){M(X)},get pointerShapes(){return R},setPointerShape:ce}},Le="animate-on-click",le="range-dragging",et=(a,d,v,g)=>{let R=[],q=ce=>{for(let H of R)H.update&&typeof H.update=="function"&&H.update(ce)},ee=()=>{for(let ce of R)ce.destroy&&typeof ce.destroy=="function"&&ce.destroy()},T=(ce,H)=>{for(let Ce of R)Ce.onAttrChange&&typeof Ce.onAttrChange=="function"&&Ce.onAttrChange(ce,H)},M=ce=>{if(ce.gettersAndSetters){for(let H of ce.gettersAndSetters)if(!(!H.name||!H.attributes))try{Object.prototype.hasOwnProperty.call(a,H.name)||Object.defineProperty(a,H.name,H.attributes)}catch(Ce){console.error("defineSettersGetters error:",Ce)}}},se=ce=>{var H;if(!ce.css)return;let Ce=(H=a.shadowRoot)==null?void 0:H.querySelector("style");!Ce||(Ce.innerHTML+=ce.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ce of window.tcRangeSliderPlugins){let H=ce();R.push(H),H.init&&typeof H.init=="function"&&(H.init(a,d,v,g),M(H),se(H))}},update:q,onAttrChange:T,destroy:ee}},Be=10,xi=20,nl=(a,d)=>{let v=new Map,g=/^value([0-9]*)$/;for(let T of a.attributes){let M=T.nodeName.trim().toLowerCase();if(!g.test(M))continue;let se=M.replace("value","").trim(),ce=se===""||se==="0"||se==="1"?0:Ue(se,0)-1,H=bt(T.value)?Ue(T.value,0):T.value;v.set(ce,H)}let R=Math.max(...Array.from(v.keys())),q=[];q.push([x(a,d,0),v.get(0)]);let ee=d;for(let T=1;T<=R;T++){let M=d.cloneNode(!0);ee.after(M),ee=M,q.push([x(a,M,T),v.get(T)])}return q},Vn=(a,d,v,g,R,q,ee)=>{try{Object.defineProperty(a,g,{configurable:!0,get(){if(!d)return;let T=d.pointers[v];if(!T)return;let M=d.getTextValue(T.percent);return bt(M)?Ue(M,M):M},set:T=>{d.pointers[v]?d==null||d.setValue(T,v):d==null||d.addPointer(T)}}),Object.defineProperty(a,R,{configurable:!0,get(){var T,M;return(M=(T=d==null?void 0:d.pointers[v])==null?void 0:T.getAttr("aria-label"))!=null?M:void 0},set:T=>{!d||d.setAriaLabel(v,T)}}),Object.defineProperty(a,q,{configurable:!0,get(){var T,M;return(M=(T=d==null?void 0:d.styles)==null?void 0:T.pointerShapes[v])!=null?M:null},set:T=>{!d||!d.styles||d.styles.setPointerShape(v,T)}}),Object.defineProperty(a,ee,{configurable:!0,get(){var T;return(T=d==null?void 0:d.pointers[v].disabled)!=null?T:!1},set:T=>{if(!d)return;let M=d==null?void 0:d.pointers[v];!M||(M.disabled=T)}})}catch(T){console.error(T)}},ol=(a,d)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Be;g++)v.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of v)Vn(a,d,g[4],g[0],g[1],g[2],g[3])},zn=(a,d,v)=>{var g;let R=(g=v.shadowRoot)==null?void 0:g.querySelector(".container");if(R)for(let q of a)d?R.prepend(q.$pointer):R.append(q.$pointer)},al=(a,d)=>{if(!(!d||a.length<=1)){for(let v of a)v.$pointer.style.zIndex=xi.toString();d.$pointer.style.zIndex=(xi*2).toString()}},Cs=0,Ir=100,fr=2,Yn="0.3s",ll=(a,d,v)=>{let g=v.map(h=>h[0]),R=null,q=null,ee=null,T=null,M=Cs,se=Ir,ce,H,Ce=Ht,ft=fr,Ke=!1,X=!1,ne=!1,G=0,De=1/0,Ye=!1,ze,Fe,je=!1,tt=!1,rt=!1,Vt=Yn,qn=[],Xn=h=>{je||(h.preventDefault&&h.preventDefault(),Jt(h),window.addEventListener("mousemove",Jt),window.addEventListener("mouseup",_i),xs(a,h))},_i=h=>{je||(ze=void 0,Fe=void 0,window.removeEventListener("mousemove",Jt),window.removeEventListener("mouseup",_i),Vt&&d.classList.add(Le),_s(a,h))},dl=(h,b)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(h)&&Vt&&d.classList.remove(Le),g[0];let F=pl(h);if(Ye){let $e=b,yt=$i($e);yt!==void 0&&($e=wi($e,yt)),F?(ze=$e,Fe=0,Vt&&d.classList.remove(Le)):ze!==void 0&&(Fe=$e-ze,ze=$e)}if(!ul(h)&&!F){for(let $e of g)if(!(!$e.isClicked(h)||$e.disabled))return Vt&&d.classList.remove(Le),$e;for(let $e of g)if(R===$e)return $e}let Se=1/0,Ie=null;for(let $e of g){if($e.disabled)continue;let yt=Math.abs(b-$e.percent);yt<Se&&(Se=yt,Ie=$e)}return Ie},Gn=()=>g.findIndex(h=>R===h&&!h.disabled),Jt=h=>{let b;if(Ce===at){let{height:Se,top:Ie}=d.getBoundingClientRect(),$e=h.type.indexOf("mouse")!==-1?h.clientY:h.touches[0].clientY;b=Math.min(Math.max(0,$e-Ie),Se)*100/Se}else{let{width:Se,left:Ie}=d.getBoundingClientRect(),$e=h.type.indexOf("mouse")!==-1?h.clientX:h.touches[0].clientX;b=Math.min(Math.max(0,$e-Ie),Se)*100/Se}if((Ke||X)&&(b=100-b),R=dl(h.target,b),R&&al(g,R),Ye&&g.length>1&&Fe!==void 0){let Se=g[0],Ie=g[g.length-1],$e=Se.percent+Fe<0,yt=Ie.percent+Fe>100;if($e||yt)return;for(let Ri=0;Ri<g.length;Ri++)it(Ri,g[Ri].percent+Fe);return}let F=Gn();F!==-1&&(it(F,b),R==null||R.$pointer.focus())},ki=h=>{if(je||document.activeElement!==a||R!=null&&R.disabled)return;h.stopPropagation(),h.preventDefault();let b=h.deltaY<0,F=Ke||X,Se=b?!F:F,Ie=Gn();Ie!==-1&&(Se?Wr(Ie,g[Ie].percent):Nr(Ie,g[Ie].percent))},Qn=h=>{je||tt||(Ce===at?X?it(h,100):it(h,0):Ke?Nr(h,g[h].percent):Wr(h,g[h].percent))},Zn=h=>{je||tt||(Ce===at?X?it(h,0):it(h,100):Ke?Wr(h,g[h].percent):Nr(h,g[h].percent))},Kn=h=>{je||tt||(Ce===at?X?Nr(h,g[h].percent):Wr(h,g[h].percent):Ke?it(h,100):it(h,0))},Jn=h=>{je||tt||(Ce===at?X?Wr(h,g[h].percent):Nr(h,g[h].percent):Ke?it(h,0):it(h,100))},ul=h=>h.classList.contains("panel"),pl=h=>h.classList.contains("panel-fill"),Wr=(h,b)=>{if(b===void 0)return;let F=$i(b);F==null&&(F=1),b-=F,b<0&&(b=0),it(h,b)},Nr=(h,b)=>{if(b===void 0)return;let F=$i(b);F==null&&(F=1),b+=F,b>100&&(b=100),it(h,b)},er=()=>{!T||T.update({percents:eo(),values:to(),$pointers:ro(),min:io(),max:so(),data:Os(),step:Ps(),round:As(),type:Es(),textMin:Ci(),textMax:Si(),rightToLeft:Ls(),bottomToTop:Ts(),pointersOverlap:js(),pointersMinDistance:Ds(),pointersMaxDistance:Rs(),rangeDragging:Is(),disabled:Ms(),keyboardDisabled:Us(),mousewheelDisabled:Fs()})},fl=()=>{er()},ml=h=>{if(!(ne||g.length<=1||se===M))if(h===0){let b=De*100/(se-M);return Math.max(0,g[h+1].percent-b)}else{let b=G*100/(se-M);return Math.min(g[h-1].percent+b,100)}},gl=h=>{if(!(ne||g.length<=1||se===M))if(h===g.length-1){let b=De*100/(se-M);return Math.min(g[h-1].percent+b,100)}else{let b=G*100/(se-M);return Math.max(0,g[h+1].percent-b)}},$i=h=>{let b;if(typeof ce=="function"){let F=jr(0,100,M,se,h);b=ce(F,h)}else b=ce;if(bt(b)){let F=se-M;return b=F===0?0:b*100/F,b}},mr=h=>{if(h===void 0)return;let b=jr(0,100,M,se,h);return H!==void 0?H[Math.round(b)]:ys(b,ft)},Ci=()=>H!==void 0?H[M]:M,Si=()=>H!==void 0?H[se]:se,Ps=()=>ce,vl=h=>{var b;return h<=0||ne?Ci():(b=mr(g[h-1].percent))!=null?b:""},bl=h=>{var b;return g.length<=1||h>=g.length-1||ne?Si():(b=mr(g[h+1].percent))!=null?b:""},eo=()=>g.map(h=>h.percent),to=()=>g.map(h=>mr(h.percent)),ro=()=>g.map(h=>h.$pointer),io=()=>M,so=()=>se,Os=()=>H,Es=()=>Ce,As=()=>ft,Ds=()=>G,Rs=()=>De,yl=h=>qn[h],Ls=()=>Ke,Ts=()=>X,Ms=()=>je,Us=()=>tt,Fs=()=>rt,js=()=>ne,Is=()=>Ye,it=(h,b)=>{if(b===void 0)return;let F=$i(b);F!==void 0&&(b=wi(b,F));let Se=g[h];if(!Se)return;let Ie=Se.updatePosition(b,ml(h),gl(h),Ce,Ke,X);q==null||q.updatePosition(Ce,g.map($e=>$e.percent),Ke,X),er();for(let $e of g){let yt=mr($e.percent);yt!==void 0&&($e.setAttr("aria-valuenow",yt.toString()),$e.setAttr("aria-valuetext",yt.toString()))}xl(),Ie&&$s(a,g.map($e=>mr($e.percent)))},Ct=()=>{for(let h=0;h<g.length;h++)it(h,g[h].percent)},wl=(h,b)=>{M=H!==void 0?0:Ue(h,Cs),se=H!==void 0?H.length-1:Ue(b,Ir),Pi(M),Oi(se)},xl=()=>{var h,b;for(let F=0;F<g.length;F++){let Se=g[F];Se.setAttr("aria-valuemin",((h=vl(F))!=null?h:"").toString()),Se.setAttr("aria-valuemax",((b=bl(F))!=null?b:"").toString())}},Pi=h=>{M=Ue(h,Cs),M>se&&(se=M+Ir),Ct()},Oi=h=>{se=Ue(h,Ir),se<M&&(se=M+Ir),Ct()},no=h=>{ne=!0;for(let b=0;b<h.length;b++)Ei(h[b],b);ne=!1;for(let b=0;b<h.length;b++)Ei(h[b],b)},Ei=(h,b)=>{let F;H!==void 0?(F=h==null?0:E(h,H),F===-1&&(F=0)):(F=Ue(h,M),F<M&&(F=M),F>se&&(F=se));let Se=jr(M,se,0,100,F);it(b,Se)},Ai=h=>{if(h==null){ce=void 0;return}if(typeof h=="function"){ce=h,Ct();return}if(bt(h)){ce=Ue(h,1);let b=Math.abs(se-M);ce>b&&(ce=void 0),Ct();return}ce=void 0},Ws=h=>{ne=h,Ct()},Ns=h=>{(!bt(h)||h<0)&&(h=0),G=h},Hs=h=>{(!bt(h)||h<0)&&(h=1/0),De=h},Bs=h=>{je=h,d.classList.toggle("disabled",je),je?d.setAttribute("aria-disabled","true"):d.hasAttribute("aria-disabled")&&d.removeAttribute("aria-disabled")},oo=h=>{tt=h},ao=h=>{rt=h,rt?document.removeEventListener("wheel",ki):document.addEventListener("wheel",ki,{passive:!1})},Vs=h=>{if(h==null){H=void 0;return}if(H=P(h),H===void 0||H.length<=0){H=void 0;return}Pi(0),Oi(H.length-1),ce===void 0&&Ai(1)},zs=h=>{var b;typeof h=="string"?Ce=h.trim().toLowerCase()===at?at:Ht:Ce=Ht;let F=(b=a.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!F)return;F.className=`range-slider-box type-${Ce}`,Ct();let Se=Ce===at?"vertical":"horizontal";for(let Ie of g)Ie.setAttr("aria-orientation",Se)},Ys=h=>{Ke=h,g.length>1&&zn(g,Ke,a),Ct(),er()},qs=h=>{X=h,g.length>1&&zn(g,X,a),Ct(),er()},Xs=h=>{ft=Ue(h,fr),ft<0&&(ft=fr),er()},lo=h=>{h==null||h.toString().trim().toLowerCase()==="false"?(Vt=void 0,d.style.removeProperty(Y),d.classList.remove(Le)):(Vt=h.toString(),d.style.setProperty(Y,Vt),d.classList.add(Le))},co=(h,b)=>{let F=g[h];!F||(F.setAttr("aria-label",b),qn[h]=b)},Di=h=>{if(ze=void 0,g.length<=1){Ye=!1,d.classList.remove(le);return}Ye=h,d.classList.toggle(le,Ye)},_l=()=>{Bs(Ve(a.getAttribute(z))),tt=Ve(a.getAttribute(de)),rt=Ve(a.getAttribute(te));let h=C(a,/^pointer([0-9]*)-disabled$/,b=>Ve(b));for(let b of h){let F=b[0];!g[F]||(g[F].disabled=b[1])}},kl=()=>{let h=C(a,/^aria-label([0-9]*)$/);for(let b of h){let F=b[0];co(F,b[1])}},$l=h=>{let b=g.length,F=g[b-1].$pointer,Se=F.cloneNode(!0);F.after(Se);let Ie=x(a,Se,b);return Ie.setCallbacks(Qn,Zn,Kn,Jn),g.push(Ie),Ei(h,b),Ct(),er(),b},Cl=()=>{let h=g.length,b=g[h-1];return b?(b.destroy(),g.pop(),g.length<=1&&Di(!1),Ct(),er(),h-1):-1};return(()=>{var h,b;for(let Se of g)Se.setCallbacks(Qn,Zn,Kn,Jn);let F=(h=a.shadowRoot)==null?void 0:h.querySelector(".panel-fill");F&&(q=A(F)),zs(a.getAttribute(O)),Ys(Ve(a.getAttribute(j))),qs(Ve(a.getAttribute(W))),wl(a.getAttribute(f),a.getAttribute(y)),Ai(a.getAttribute(_)),Vs(a.getAttribute(m)),no(v.map(Se=>Se[1])),Ws(Ve(a.getAttribute(o))),Ns(Ue(a.getAttribute(l),0)),Hs(Ue(a.getAttribute(u),1/0)),Di(Ve(a.getAttribute(p))),Xs(Ue(a.getAttribute(k),fr)),_l(),kl(),ee=xe(a,d,g),lo((b=a.getAttribute(yi))!=null?b:Yn),d.addEventListener("mousedown",Xn),d.addEventListener("mouseup",_i),d.addEventListener("touchmove",Jt),d.addEventListener("touchstart",Jt),rt||document.addEventListener("wheel",ki,{passive:!1}),T=et(a,fl,{setValues:no,setMin:Pi,setMax:Oi,setStep:Ai,setPointersOverlap:Ws,setPointersMinDistance:Ns,setPointersMaxDistance:Hs,setDisabled:Bs,setType:zs,setRightToLeft:Ys,setBottomToTop:qs,setRound:Xs,setKeyboardDisabled:oo,setMousewheelDisabled:ao,setRangeDragging:Di,setData:Vs},{getPercents:eo,getValues:to,getPointerElements:ro,getMin:io,getMax:so,getStep:Ps,getData:Os,getType:Es,getRound:As,getTextMin:Ci,getTextMax:Si,isRightToLeft:Ls,isBottomToTop:Ts,isDisabled:Ms,isKeyboardDisabled:Us,isMousewheelDisabled:Fs,isPointersOverlap:js,isRangeDraggingEnabled:Is,getPointersMinDistance:Ds,getPointersMaxDistance:Rs}),T.init()})(),{get pointers(){return g},get styles(){return ee},get pluginsManager(){return T},get min(){return Ci()},get max(){return Si()},get step(){return Ps()},get pointersOverlap(){return js()},set pointersOverlap(h){Ws(h)},get pointersMinDistance(){return Ds()},set pointersMinDistance(h){Ns(h)},get pointersMaxDistance(){return Rs()},set pointersMaxDistance(h){Hs(h)},get disabled(){return Ms()},set disabled(h){Bs(h)},get data(){return Os()},get type(){return Es()},set type(h){zs(h)},get rightToLeft(){return Ls()},set rightToLeft(h){Ys(h)},get bottomToTop(){return Ts()},set bottomToTop(h){qs(h)},get round(){return As()},set round(h){Xs(h)},get animateOnClick(){return Vt},set animateOnClick(h){lo(h)},get keyboardDisabled(){return Us()},set keyboardDisabled(h){oo(h)},get mousewheelDisabled(){return Fs()},set mousewheelDisabled(h){ao(h)},get rangeDragging(){return Is()},set rangeDragging(h){Di(h)},setMin:Pi,setMax:Oi,setValue:Ei,setStep:Ai,setData:Vs,getTextValue:mr,setAriaLabel:co,getAriaLabel:yl,addPointer:$l,removePointer:Cl,destroy:()=>{d.removeEventListener("mousedown",Xn),d.removeEventListener("mouseup",_i),d.removeEventListener("touchmove",Jt),d.removeEventListener("touchstart",Jt),document.removeEventListener("wheel",ki);for(let h of g)h.destroy();T==null||T.destroy()}}},cl=(a,d,v)=>{let g=ke.find(([T,M,se,ce])=>M.replace("#","")===d.replace(/\d+/g,""));if(g&&a.styles){let[T,M,se,ce]=g,H=d.replace(/\D/g,"").trim(),Ce=H===""||H==="0"||H==="1"?0:Ue(H,0)-1;a.styles.setStyle(T,v,Ce);return}switch(a&&a.pluginsManager&&a.pluginsManager.onAttrChange(d,v),d){case f:{a.setMin(v);break}case y:{a.setMax(v);break}case _:{a.setStep(v);break}case o:{a.pointersOverlap=Ve(v);break}case l:{a.pointersMinDistance=Ue(v,0);break}case p:{a.rangeDragging=Ve(v);break}case u:{a.pointersMaxDistance=Ue(v,1/0);break}case z:{a.disabled=Ve(v);break}case de:{a.keyboardDisabled=Ve(v);break}case te:{a.mousewheelDisabled=Ve(v);break}case m:{a.setData(v);break}case O:{a.type=v;break}case j:{a.rightToLeft=Ve(v);break}case W:{a.bottomToTop=Ve(v);break}case k:{a.round=Ue(v,fr);break}case S:{a.styles&&(a.styles.theme=v);break}case yi:{a.animateOnClick=v;break}}let R=null;if(/^value([0-9]*)$/.test(d)&&(R="value"),/^pointer([0-9]*)-disabled$/.test(d)&&(R="pointer-disabled"),/^aria-label([0-9]*)$/.test(d)&&(R="aria-label"),/^pointer([0-9]*)-shape$/.test(d)&&(R="pointer-shape"),!R)return;let q=d.replace(/\D/g,"").trim(),ee=q===""||q==="0"||q==="1"?0:Ue(q,0)-1;switch(R){case"value":{a.setValue(v,ee);break}case"pointer-disabled":{let T=a==null?void 0:a.pointers[ee];if(!T)return;T.disabled=Ve(v);break}case"aria-label":{a.setAriaLabel(ee,v);break}case"pointer-shape":{a.styles&&a.styles.setPointerShape(ee,v);break}}},hl=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(a){this.slider&&this.slider.setStep(a)}get step(){var a;return(a=this.slider)==null?void 0:a.step}set disabled(a){this.slider&&(this.slider.disabled=a)}get disabled(){var a,d;return(d=(a=this.slider)==null?void 0:a.disabled)!=null?d:!1}set data(a){var d;(d=this.slider)==null||d.setData(a)}get data(){var a;return(a=this.slider)==null?void 0:a.data}set min(a){var d;(d=this.slider)==null||d.setMin(a)}get min(){var a;return(a=this.slider)==null?void 0:a.min}set max(a){var d;(d=this.slider)==null||d.setMax(a)}get max(){var a;return(a=this.slider)==null?void 0:a.max}set round(a){!this.slider||(this.slider.round=a)}get round(){var a,d;return(d=(a=this.slider)==null?void 0:a.round)!=null?d:fr}set type(a){!this.slider||(this.slider.type=a??Ht)}get type(){var a;return((a=this.slider)==null?void 0:a.type)||Ht}set pointersOverlap(a){!this.slider||(this.slider.pointersOverlap=a)}get pointersOverlap(){var a,d;return(d=(a=this.slider)==null?void 0:a.pointersOverlap)!=null?d:!1}set pointersMinDistance(a){!this.slider||(this.slider.pointersMinDistance=a)}get pointersMinDistance(){var a,d;return(d=(a=this.slider)==null?void 0:a.pointersMinDistance)!=null?d:0}set pointersMaxDistance(a){!this.slider||(this.slider.pointersMaxDistance=a)}get pointersMaxDistance(){var a,d;return(d=(a=this.slider)==null?void 0:a.pointersMaxDistance)!=null?d:1/0}set theme(a){!this.slider||!this.slider.styles||(this.slider.styles.theme=a)}get theme(){var a,d,v;return(v=(d=(a=this.slider)==null?void 0:a.styles)==null?void 0:d.theme)!=null?v:null}set rtl(a){!this.slider||(this.slider.rightToLeft=a)}get rtl(){var a,d;return(d=(a=this.slider)==null?void 0:a.rightToLeft)!=null?d:!1}set btt(a){!this.slider||(this.slider.bottomToTop=a)}get btt(){var a,d;return(d=(a=this.slider)==null?void 0:a.bottomToTop)!=null?d:!1}set keyboardDisabled(a){!this.slider||(this.slider.keyboardDisabled=a)}get keyboardDisabled(){var a,d;return(d=(a=this.slider)==null?void 0:a.keyboardDisabled)!=null?d:!1}set mousewheelDisabled(a){!this.slider||(this.slider.mousewheelDisabled=a)}get mousewheelDisabled(){var a,d;return(d=(a=this.slider)==null?void 0:a.mousewheelDisabled)!=null?d:!1}set animateOnClick(a){!this.slider||(this.slider.animateOnClick=a)}get animateOnClick(){var a;return(a=this.slider)==null?void 0:a.animateOnClick}get rangeDragging(){var a,d;return(d=(a=this.slider)==null?void 0:a.rangeDragging)!=null?d:!1}set rangeDragging(a){this.slider&&(this.slider.rangeDragging=Ve(a))}get externalCSSList(){return this._externalCSSList}addPointer(a){var d,v;if(!this.slider)return;let g=(v=(d=this.slider)==null?void 0:d.addPointer(a))!=null?v:0;Vn(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var a;!this.slider||(a=this.slider)==null||a.removePointer()}addCSS(a){if(!this.shadowRoot)return;let d=document.createElement("style");d.textContent=a,this.shadowRoot.appendChild(d)}connectedCallback(){var a,d;if(!this.shadowRoot)return;this._externalCSSList=Q(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(a=this.shadowRoot)==null?void 0:a.querySelector(".pointer");if(!v)return;let g=(d=this.shadowRoot)==null?void 0:d.getElementById("range-slider");if(!g)return;let R=nl(this,v);this.slider=ll(this,g,R),ol(this,this.slider),this._observer=new MutationObserver(q=>{q.forEach(ee=>{var T;if(!this.slider||ee.type!=="attributes")return;let M=ee.attributeName;!M||cl(this.slider,M,(T=this.getAttribute(M))!=null?T:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Ss=hl;window.tcRangeSlider=Ss,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Ss),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Ss{})})();(()=>{var t=(l,u,p,m,f)=>{let y=u-l;return y===0?p:(m-p)*(f-l)/y+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,u)=>e(l)?Number(l):u,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,o=()=>{let l=null,u=null,p=null,m=null,f=null,y=!1,_=s,k=n,O=()=>{var N;let ve=(N=l==null?void 0:l.shadowRoot)==null?void 0:N.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),p.append(m),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),ve.append(p)},S=()=>{!u||!p||p.classList.toggle("is-reversed",u.isRightToLeft()||u.isBottomToTop())},j=()=>{var N;if(!p||!u)return;let ve=u.getMin(),oe=u.getMax(),ue=u.getType()==="vertical",ye=u.isRightToLeft()||u.isBottomToTop();for(let be=0;be<_;be++){let ie=document.createElement("div");ie.classList.add("mark",`mark-${be}`);let we=_===0?0:be*100/(_-1);ue?ye?ie.style.top=`${100-we}%`:ie.style.top=`${we}%`:ye?ie.style.left=`${100-we}%`:ie.style.left=`${we}%`,m==null||m.append(ie)}let pe=u.getData();for(let be=0;be<k;be++){let ie=document.createElement("div");ie.classList.add("mark-value",`mark-value-${be}`);let we=k===0?0:be*100/(k-1),Me=t(0,k-1,ve,oe,be);ie.textContent=(pe?(N=pe[Math.round(Me)])!=null?N:"":Me).toString(),ue?ye?ie.style.top=`${100-we}%`:ie.style.top=`${we}%`:ye?ie.style.left=`${100-we}%`:ie.style.left=`${we}%`,f==null||f.append(ie)}},W=(N,ve)=>{Ee(),_=N,k=ve,_<=0&&(_=s),k<=0&&(k=n),O(),j(),S()},z=N=>{y=N,y?(O(),j(),S()):Ee()},de=N=>{!p||p.style.setProperty("--marks-color",N)},te=N=>{!p||p.style.setProperty("--values-color",N)},Ee=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(N,ve,oe,ue)=>{var ye,pe;u=ue,l=N,y=i(l.getAttribute("marks")),y&&(W(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),de((ye=l.getAttribute("marks-color"))!=null?ye:"#cbd5e1"),te((pe=l.getAttribute("marks-values-color"))!=null?pe:"#475569"))},onAttrChange:(N,ve)=>{N==="marks"&&z(i(ve)),N==="marks-count"&&W(r(ve,s),k),N==="marks-values-count"&&W(_,r(ve,n)),N==="marks-color"&&de(ve),N==="marks-values-color"&&te(ve)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return y??!1},set:N=>{z(i(N))}}},{name:"marksCount",attributes:{get(){return _??s},set:N=>{W(r(N,s),k)}}},{name:"marksValuesCount",attributes:{get(){return _??s},set:N=>{W(_,r(N,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:N=>{de(N)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:N=>{te(N)}}}],destroy:Ee,css:`
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
    `}};window.tcRangeSliderPlugins.push(o)})();var xp=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,Dt=(t,e,r,i)=>{for(var s=i>1?void 0:i?_p(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&xp(e,r,s),s};let gt=class extends ut{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Te(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.setFixedRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?D`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:D`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Ne(this.sliderRef)}
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

        `}};gt.styles=Pe`

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
    
    `;Dt([ge({context:Ba,subscribe:!0}),L()],gt.prototype,"min",2);Dt([ge({context:Va,subscribe:!0}),L()],gt.prototype,"max",2);Dt([ge({context:An,subscribe:!0}),L()],gt.prototype,"from",2);Dt([ge({context:Dn,subscribe:!0}),L()],gt.prototype,"to",2);Dt([L()],gt.prototype,"hasFixedFrom",2);Dt([L()],gt.prototype,"hasFixedTo",2);Dt([ge({context:hs,subscribe:!0}),L()],gt.prototype,"palette",2);Dt([L()],gt.prototype,"sliderRef",2);Dt([L()],gt.prototype,"initialised",2);gt=Dt([re("registry-range-slider")],gt);var kp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,mi=(t,e,r,i)=>{for(var s=i>1?void 0:i?$p(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&kp(e,r,s),s};let Ar=class extends ut{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?B:D`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};mi([ge({context:An,subscribe:!0})],Ar.prototype,"from",2);mi([ge({context:Dn,subscribe:!0})],Ar.prototype,"to",2);mi([I({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],Ar.prototype,"fixed",2);mi([I({type:String,reflect:!0,attribute:!0})],Ar.prototype,"separator",2);Ar=mi([re("registry-range-display")],Ar);var Cp=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,ms=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Cp(e,r,s),s};let Dr=class extends ut{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return D`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":B}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>D`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():D`
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
        `}};Dr.styles=Pe`

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


    `;ms([L()],Dr.prototype,"histogram",2);ms([I({type:Boolean,reflect:!0})],Dr.prototype,"interactive",2);ms([I({type:String,reflect:!0})],Dr.prototype,"height",2);Dr=ms([re("registry-histogram")],Dr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xi extends kn{constructor(e){if(super(e),this.it=B,e.type!==_n.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===B||e==null)return this._t=void 0,this.it=e;if(e===Xt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Xi.directiveName="unsafeHTML",Xi.resultType=1;const mt=Zi(Xi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pn extends Xi{}pn.directiveName="unsafeSVG",pn.resultType=2;const Pp=Zi(pn);var Op=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,gs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ep(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Op(e,r,s),s};let Rr=class extends pi{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",t=>{this.hint=t.description})}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?B:D`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return D`
                        
                        <button 
                            class=${Tt(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Pp(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Rr.styles=Pe`

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

    `;gs([ge({context:Ya,subscribe:!0}),L()],Rr.prototype,"value",2);gs([ge({context:qa,subscribe:!0}),L()],Rr.prototype,"tools",2);gs([L()],Rr.prototype,"hint",2);Rr=gs([re("group-tool-buttons")],Rr);var Ap=Object.defineProperty,gi=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Ap(e,r,s),s};class qe extends pi{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}gi([ge({context:Rn,subscribe:!0}),L()],qe.prototype,"parentFileProviderElement");gi([ge({context:Qa,subscribe:!0}),L()],qe.prototype,"loading");gi([ge({context:Xa,subscribe:!0}),L()],qe.prototype,"file");gi([ge({context:Ga,subscribe:!0}),L()],qe.prototype,"failure");gi([ge({context:Ka,subscribe:!0}),L()],qe.prototype,"recording");var Dp=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Lp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Dp(e,r,s),s};let fn=class extends qe{constructor(){super(...arguments),this.container=Te()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return D`
            <div ${Ne(this.container)} class=${Tt(r)} part="file-canvas-container">
            
                ${this.loading===!0?D`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?D`<div class="error-wrapper">
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
                        </div>`:B}
            
            </div>
        
        `}};fn.styles=Pe`
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
    `;fn=Lp([re("file-canvas")],fn);var Tp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,Up=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Tp(e,r,s),s};let mn=class extends qe{onInstanceCreated(t){}onFailure(t){}render(){return this.file?D`
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
        `:B}};mn.styles=Pe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;mn=Up([re("file-share-button")],mn);var Fp=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,Ip=(t,e,r,i)=>{for(var s=i>1?void 0:i?jp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Fp(e,r,s),s};let gn=class extends qe{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?D`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${mt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${mt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?mt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):B}

                        ${mt(this.renderRow("Time",Fd.human(this.file.timestamp)))}

                        ${mt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${mt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${mt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${mt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${mt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${mt(this.renderRow("Type",this.file.service.parser.name))}
                    ${mt(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>D`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:B}};gn.styles=Pe`

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
    
    `;gn=Ip([re("file-info-button")],gn);var Wp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Hp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Np(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Wp(e,r,s),s};let vn=class extends qe{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?B:D`

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

                    ${this.file.timeline.isSequence?D`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:B}
            
            </thermal-dropdown>

        
        `}};vn.styles=Pe`

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
    
    `;vn=Hp([re("file-download-dropdown")],vn);var Bp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,hr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Bp(e,r,s),s};let xt=class extends qe{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Te(),this.barRef=Te(),this.containerRef=Te(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<xt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}render(){var n,o,l;const t=this.file;if(t===void 0)return B;if(t.duration===0)return B;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return D`
            <div class="${Tt(e)}" ${Ne(this.containerRef)}>


                ${t!==void 0?D`
                        <div class="container">

                            <div class="${Tt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?D`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:D`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>

                            <div class="${Tt(s)}"  ${Ne(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Ne(this.barRef)}></div>
                                </div>

                                <div>
                                    ${this.markers.map(u=>D`<file-marker-timeline start=${u.fromMs} end=${u.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(o=this.duration)==null?void 0:o.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:B}

            
            
            </div>

            ${this.currentFrame!==void 0?D`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${Cr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${Cr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:B}

          `}};xt.collapseWidth=500;xt.styles=Pe`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

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
    
    `;hr([ge({context:Mn,subscribe:!0}),L()],xt.prototype,"playing",2);hr([ge({context:us,subscribe:!0}),L()],xt.prototype,"currentFrame",2);hr([ge({context:Tn,subscribe:!0}),L()],xt.prototype,"duration",2);hr([ge({context:Ja,subscribe:!0}),L()],xt.prototype,"mayStop",2);hr([ge({context:Un,subscribe:!0})],xt.prototype,"markers",2);hr([L()],xt.prototype,"collapsed",2);xt=hr([re("file-timeline")],xt);var zp=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,jn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&zp(e,r,s),s};let ri=class extends qe{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?B:D`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Pn).map(([t])=>D`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof Ft&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};ri.styles=Pe`

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
    
    `;jn([I({type:String,reflect:!0})],ri.prototype,"enabled",2);jn([ge({context:Za,subscribe:!0}),L()],ri.prototype,"playbackSpeed",2);ri=jn([re("file-playback-speed-dropdown")],ri);var qp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,In=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&qp(e,r,s),s};let ii=class extends qe{constructor(){super(...arguments),this.container=Te()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return D`
            <div class="container">
            
                <video ${Ne(this.container)} preload="metadata">

                    ${this.url===void 0?B:D`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};ii.styles=Pe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;In([ge({context:us,subscribe:!0}),L()],ii.prototype,"currentFrame",2);In([I({type:String,reflect:!0,attribute:!0})],ii.prototype,"url",2);ii=In([re("file-video")],ii);const Gp=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),Cr(r,"mm:ss:SSS")},Qp=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(r[0]),s=parseInt(r[1]),n=parseInt(r[2]);return i*60*1e3+s*1e3+n};var Zp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,Rt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Kp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Zp(e,r,s),s};const Wn={fromAttribute:t=>t===null?null:Qp(t),toAttribute:t=>t===null?null:Gp(t)};let _t=class extends qe{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,i){var s;super.attributeChangedCallback(e,r,i),this.log(e,r,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(s=>s.lang==="cs-CZ");if(r)return r;const i=e.find(s=>s.default===!0);return i||null}render(){return B}};Rt([ge({context:Mn,subscribe:!0}),L()],_t.prototype,"playing",2);Rt([ge({context:Ln,subscribe:!0}),L()],_t.prototype,"ms",2);Rt([I({type:String,reflect:!0,attribute:!0})],_t.prototype,"label",2);Rt([I({type:String,reflect:!0,attribute:!0,converter:Wn})],_t.prototype,"start",2);Rt([I({type:String,reflect:!0,attribute:!0,converter:Wn})],_t.prototype,"end",2);Rt([I({type:String,reflect:!0,attribute:!0,converter:Wn})],_t.prototype,"dur",2);Rt([I({type:String,reflect:!0,attribute:!0})],_t.prototype,"active",2);Rt([I({type:String,reflect:!0,attribute:!0})],_t.prototype,"pauseOnActivate",2);Rt([I({type:String,reflect:!0,attribute:!0})],_t.prototype,"say",2);_t=Rt([re("file-marker")],_t);var Jp=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,dr=(t,e,r,i)=>{for(var s=i>1?void 0:i?ef(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Jp(e,r,s),s};let It=class extends qe{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return D`

            <div class="${Tt(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};It.styles=Pe`
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


    `;dr([ge({context:Tn,subscribe:!0}),L()],It.prototype,"duration",2);dr([ge({context:us,subscribe:!0}),L()],It.prototype,"currentFrame",2);dr([ge({context:Ln,subscribe:!0}),L()],It.prototype,"ms",2);dr([I({type:Number,reflect:!0,attribute:!0})],It.prototype,"start",2);dr([I({type:Number,reflect:!0,attribute:!0})],It.prototype,"end",2);dr([L()],It.prototype,"active",2);It=dr([re("file-marker-timeline")],It);var tf=Object.defineProperty,rf=Object.getOwnPropertyDescriptor,sl=(t,e,r,i)=>{for(var s=i>1?void 0:i?rf(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&tf(e,r,s),s};let Gi=class extends qe{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return D`
            <div>


            ${this.markers.map(t=>t.active?D`<div class="item">
                    <h2>${t.label}</h2>
                    ${mt(t.innerHTML)}
                    </div>`:B)}

            
            
            </div>

          `}};Gi.styles=Pe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;sl([ge({context:Un,subscribe:!0})],Gi.prototype,"markers",2);Gi=sl([re("file-marks-content")],Gi);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*sf(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}var nf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,Nn=(t,e,r,i)=>{for(var s=i>1?void 0:i?of(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&nf(e,r,s),s};let si=class extends qe{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1}onInstanceCreated(){this.file!==void 0&&this.file.analysis.layers.onSelectionChange.add(this.UUID,e=>{this.file&&(this.allSelected=this.file.analysis.value.length===e.length)})}onFailure(){}render(){var e;return this.analysis.length===0?B:D`
            <div class="container">

            <table>

                <caption>
                    Current analysis on the file ${(e=this.file)==null?void 0:e.fileName}
                </caption>

                <thead>
                    <tr>
                        <th 
                            class="interactive" 
                            @click=${()=>{this.file&&(this.allSelected?(this.file.analysis.layers.deselectAll(),this.allSelected=!1):(this.allSelected=!0,this.file.analysis.layers.selectAll()))}}
                        >
                            <div 
                                class="selected ${this.allSelected?"all":""}"
                            ></div>
                            Analysis
                        </th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Avg</th>
                        <th>Size</th>
                    </tr>
                </thead>

                <tbody>

                    ${sf(this.analysis,r=>D`
                        <file-analysis-row .analysis=${r}></file-analysis-row>
                    `)}

                </tbody>

            </table>
            
            </div>
        
        `}};si.styles=Pe`
        .container {

            white-space: nowrap;
        
            overflow: hidden;
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
            margin-top: calc( var( --thermal-gap ) / 3 );
            color: var( --thermal-foreground );
        
        }

        .container table {
            width: 100%;
            border-collapse:collapse;
            font-size: var( --thermal-fs-small );
        }

        .container table caption {
            display: none !important;
        }

        .container table th {
            text-align: left;
            padding: calc( var( --thermal-gap ) / 3 );
        }

        .container table file-analysis-row {
            border-bottom: 1px var( --thermal-foreground ) dotted;
        }

        .container table file-analysis-row:first-child {
            border-top: 1px var( --thermal-foreground ) dotted;
        }

        .selected {
            width: calc( var( --thermal-gap ) / 2 );
            height: calc( var( --thermal-gap ) / 2 );
            border-radius: 50%;
            border: 2px solid var( --thermal-slate );
            display: inline-block;
            cursor: pointer;

            &.all {
                background-color: var( --thermal-foreground );
            }
        }

        .container .interactive {
        
            cursor: pointer;
            user-select: none;

            &:hover {
                color: var( --thermal-primary );
            }
        
        }
    `;Nn([ge({context:el,subscribe:!0})],si.prototype,"analysis",2);Nn([L()],si.prototype,"allSelected",2);si=Nn([re("file-analysis-list")],si);var af=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,kt=(t,e,r,i)=>{for(var s=i>1?void 0:i?lf(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&af(e,r,s),s};let dt=class extends qe{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.values={min:void 0,max:void 0,avg:void 0},this.selectedRef=Te(),this.activeRef=Te()}onInstanceCreated(){}onFailure(){}uuid(t){return`${this.UUID}__${t}`}connectedCallback(){super.connectedCallback(),this.hydrate(this.analysis)}hydrate(t){this.log("HYDRATUJI",t.key),this.selected=t.selected,this.color=t.initialColor,this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,t.onSelected.add("__onSelected",e=>{console.log(this.analysis.key,"selected",e.selected,this.selected),this.selected=!0}),t.onDeselected.add("__onDeselected",e=>{console.log(this.analysis.key,"deselected",e.selected,this.selected),this.selected=!1}),t.onValues.add("__onValues",(e,r,i)=>{this.values={min:e,max:r,avg:i}}),t.onResize.add("__onResize",()=>{this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height})}dehydrate(t){this.log("DEHYDRATUJI",t.key),t.onSelected.remove("__onSelected"),t.onDeselected.remove("__onDeselected"),t.onValues.remove("__onValues"),t.onResize.remove("__onResize")}willUpdate(t){if(super.willUpdate(t),t.has("analysis")){const e=t.get("analysis");e&&this.dehydrate(e),this.hydrate(this.analysis)}}temperatureOrNothing(t){return t===void 0?"-":t.toFixed(1)+" °C"}render(){return this.analysis===void 0?B:D`
                <td @click=${()=>{this.analysis.selected?this.analysis.setDeselected():this.analysis.setSelected()}} class="interactive-toggle">
                    <div class="selected"></div>
                    <span class="color" style="background-color:${this.analysis.initialColor};"></span>
                    <span class="title">${this.analysis.key}</span>
                </td>
                <td>${this.temperatureOrNothing(this.values.min)}</td>
                <td>${this.temperatureOrNothing(this.values.max)}</td>
                <td>${this.temperatureOrNothing(this.values.avg)}</td>
                <td>
                    ${this.width} x ${this.height} px
                </td>
                <td>
                    <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>Remove</thermal-button>
                </td>
        `}};dt.styles=Pe`

        :host {

            display: table-row;
            transiton: all .3s ease-in-out;
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
 
        }

        .interactive-toggle {
            cursor: pointer;
            transiton: all .3s ease-in-out;
            user-select: none;
        }

        .interactive-toggle:hover {
            color: var( --thermal-primary );
        }

        :host td {
            padding: calc( var( --thermal-gap ) / 3 );
        }

        .color {
            content: "";
            display: inline-block;
            width: 1rem;
            height: var(--thermal-fs);
        }

        .selected {
            width: calc( var( --thermal-gap ) / 2 );
            height: calc( var( --thermal-gap ) / 2 );
            border-radius: 50%;
            border: 2px solid var( --thermal-slate );
            display: inline-block;
        }

        :host([selected="true"]) {
            background: var(--thermal-background);
            .selected {
                background-color: var( --thermal-foreground )
            }

        }

        :host([selected="false"]) .title {
            text-decoration: line-through;
        }



    `;kt([I({type:Object,attribute:!0})],dt.prototype,"analysis",2);kt([I({type:String,reflect:!0,attribute:!0})],dt.prototype,"selected",2);kt([I({type:String,reflect:!0,attribute:!0})],dt.prototype,"active",2);kt([L()],dt.prototype,"color",2);kt([L()],dt.prototype,"values",2);kt([L()],dt.prototype,"top",2);kt([L()],dt.prototype,"left",2);kt([L()],dt.prototype,"width",2);kt([L()],dt.prototype,"height",2);kt([L()],dt.prototype,"selectedRef",2);dt=kt([re("file-analysis-row")],dt);var cf=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,ur=(t,e,r,i)=>{for(var s=i>1?void 0:i?hf(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&cf(e,r,s),s};let Wt=class extends qe{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return D`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?D`<file-share-button ></file-share-button>`:B}
              ${this.showabout===!0?D`<app-info-button ></app-info-button>`:B}
            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            
            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-list slot="post"></file-analysis-list>
        </thermal-app>
    `}};Wt.styles=Pe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;ur([I({type:Number})],Wt.prototype,"from",2);ur([I({type:Number})],Wt.prototype,"to",2);ur([I({type:Number})],Wt.prototype,"speed",2);ur([I({type:String,reflect:!0,attribute:!0})],Wt.prototype,"showembed",2);ur([I({type:String,reflect:!0,attribute:!0})],Wt.prototype,"showabout",2);ur([I({type:String,reflect:!0,attribute:!0})],Wt.prototype,"showfullscreen",2);Wt=ur([re("file-app")],Wt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sn=t=>t??B;var df=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,Ur=(t,e,r,i)=>{for(var s=i>1?void 0:i?uf(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&df(e,r,s),s};let lr=class extends cs{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?B:D`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${sn(this.from)} to=${sn(this.to)} speed=${sn(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Ur([I({type:String,reflect:!0})],lr.prototype,"palette",2);Ur([I({type:Number})],lr.prototype,"from",2);Ur([I({type:Number})],lr.prototype,"to",2);Ur([I({type:Number,reflect:!0})],lr.prototype,"speed",2);Ur([I({type:String,reflect:!0})],lr.prototype,"url",2);lr=Ur([re("thermal-file-app")],lr);var pf=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,Hn=(t,e,r,i)=>{for(var s=i>1?void 0:i?ff(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&pf(e,r,s),s};let ni=class extends cs{constructor(){super(...arguments),this.dropinRef=Te(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return D`

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

                            ${this.loaded===!0?D`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:B}

                            <file-dropin ${Ne(this.dropinRef)}>

                                <file-app showembed="false" showabout="false"></file-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};ni.styles=Pe`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Hn([L()],ni.prototype,"dropinRef",2);Hn([L()],ni.prototype,"loaded",2);ni=Hn([re("thermal-dropin-app")],ni);const nn=window.matchMedia("(prefers-color-scheme: dark)"),Bn="thermal-dark-mode",Bo=()=>{document.body.classList.add(Bn)},mf=()=>{document.body.classList.remove(Bn)},gf=()=>{nn.matches&&Bo();const t=e=>{e.matches?Bo():mf()};nn.addEventListener("change",t),nn.addListener(t)},vf=bn.toString().replaceAll(".","-"),bf=t=>`thermal__${t}__${vf}`,Vo=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",bf(t)),r.innerHTML=e,document.head.appendChild(r)},yf=()=>{Vo("rootVariables",`

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


            
        
        `),Vo("darkModeOverrides",`
        
            body.${Bn} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${bn}
    Author: ${Ol}
    `);gf();yf();document.addEventListener("DOMContentLoaded",()=>{});
