var Oc=Object.defineProperty;var Dc=(t,e,r)=>e in t?Oc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(Dc(t,typeof e!="symbol"?e+"":e,r),r);const Kn="1.2.42",Ec="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=globalThis,Zn=fs.ShadowRoot&&(fs.ShadyCSS===void 0||fs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qn=Symbol(),Ja=new WeakMap;let Wo=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Qn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Zn&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Ja.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ja.set(r,e))}return e}toString(){return this.cssText}};const Tc=t=>new Wo(typeof t=="string"?t:t+"",void 0,Qn),pe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Wo(r,t,Qn)},Lc=(t,e)=>{if(Zn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=fs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},eo=Zn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Tc(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Rc,defineProperty:Mc,getOwnPropertyDescriptor:Uc,getOwnPropertyNames:Ic,getOwnPropertySymbols:Fc,getPrototypeOf:jc}=Object,Sr=globalThis,to=Sr.trustedTypes,Wc=to?to.emptyScript:"",On=Sr.reactiveElementPolyfillSupport,xi=(t,e)=>t,bs={toAttribute(t,e){switch(e){case Boolean:t=t?Wc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Jn=(t,e)=>!Rc(t,e),ro={attribute:!0,type:String,converter:bs,reflect:!1,hasChanged:Jn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Sr.litPropertyMetadata??(Sr.litPropertyMetadata=new WeakMap);let qr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ro){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&Mc(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=Uc(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ro}static _$Ei(){if(this.hasOwnProperty(xi("elementProperties")))return;const e=jc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xi("properties"))){const r=this.properties,i=[...Ic(r),...Fc(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(eo(s))}else e!==void 0&&r.push(eo(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:bs).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:bs;this._$Em=s,this[s]=o.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Jn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};qr.elementStyles=[],qr.shadowRootOptions={mode:"open"},qr[xi("elementProperties")]=new Map,qr[xi("finalized")]=new Map,On==null||On({ReactiveElement:qr}),(Sr.reactiveElementVersions??(Sr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=globalThis,ws=_i.trustedTypes,io=ws?ws.createPolicy("lit-html",{createHTML:t=>t}):void 0,No="$lit$",_r=`lit$${Math.random().toFixed(9).slice(2)}$`,Ho="?"+_r,Nc=`<${Ho}>`,jr=document,Ci=()=>jr.createComment(""),ki=t=>t===null||typeof t!="object"&&typeof t!="function",Bo=Array.isArray,Hc=t=>Bo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Dn=`[ 	
\f\r]`,yi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,so=/-->/g,no=/>/g,Mr=RegExp(`>|${Dn}(?:([^\\s"'>=/]+)(${Dn}*=${Dn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ao=/'/g,oo=/"/g,zo=/^(?:script|style|textarea|title)$/i,Bc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),y=Bc(1),Cr=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),lo=new WeakMap,Ir=jr.createTreeWalker(jr,129);function Vo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return io!==void 0?io.createHTML(e):e}const zc=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",a=yi;for(let o=0;o<r;o++){const h=t[o];let p,m,f=-1,b=0;for(;b<h.length&&(a.lastIndex=b,m=a.exec(h),m!==null);)b=a.lastIndex,a===yi?m[1]==="!--"?a=so:m[1]!==void 0?a=no:m[2]!==void 0?(zo.test(m[2])&&(s=RegExp("</"+m[2],"g")),a=Mr):m[3]!==void 0&&(a=Mr):a===Mr?m[0]===">"?(a=s??yi,f=-1):m[1]===void 0?f=-2:(f=a.lastIndex-m[2].length,p=m[1],a=m[3]===void 0?Mr:m[3]==='"'?oo:ao):a===oo||a===ao?a=Mr:a===so||a===no?a=yi:(a=Mr,s=void 0);const $=a===Mr&&t[o+1].startsWith("/>")?" ":"";n+=a===yi?h+Nc:f>=0?(i.push(p),h.slice(0,f)+No+h.slice(f)+_r+$):h+_r+(f===-2?o:$)}return[Vo(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let jn=class Yo{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,h=this.parts,[p,m]=zc(e,r);if(this.el=Yo.createElement(p,i),Ir.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Ir.nextNode())!==null&&h.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(No)){const b=m[a++],$=s.getAttribute(f).split(_r),C=/([.?@])?(.*)/.exec(b);h.push({type:1,index:n,name:C[2],strings:$,ctor:C[1]==="."?Yc:C[1]==="?"?Gc:C[1]==="@"?qc:Ls}),s.removeAttribute(f)}else f.startsWith(_r)&&(h.push({type:6,index:n}),s.removeAttribute(f));if(zo.test(s.tagName)){const f=s.textContent.split(_r),b=f.length-1;if(b>0){s.textContent=ws?ws.emptyScript:"";for(let $=0;$<b;$++)s.append(f[$],Ci()),Ir.nextNode(),h.push({type:2,index:++n});s.append(f[b],Ci())}}}else if(s.nodeType===8)if(s.data===Ho)h.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(_r,f+1))!==-1;)h.push({type:7,index:n}),f+=_r.length-1}n++}}static createElement(e,r){const i=jr.createElement("template");return i.innerHTML=e,i}};function Kr(t,e,r=t,i){var a,o;if(e===Cr)return e;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=ki(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=Kr(t,s._$AS(t,e.values),s,i)),e}let Vc=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??jr).importNode(r,!0);Ir.currentNode=s;let n=Ir.nextNode(),a=0,o=0,h=i[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new ji(n,n.nextSibling,this,e):h.type===1?p=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(p=new Xc(n,this,e)),this._$AV.push(p),h=i[++o]}a!==(h==null?void 0:h.index)&&(n=Ir.nextNode(),a++)}return Ir.currentNode=jr,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class ji{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Kr(this,e,r),ki(e)?e===W||e==null||e===""?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==Cr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Hc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==W&&ki(this._$AH)?this._$AA.nextSibling.data=e:this.T(jr.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=jn.createElement(Vo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new Vc(s,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(e){let r=lo.get(e.strings);return r===void 0&&lo.set(e.strings,r=new jn(e)),r}k(e){Bo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new ji(this.S(Ci()),this.S(Ci()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let Ls=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Kr(this,e,r,0),a=!ki(e)||e!==this._$AH&&e!==Cr,a&&(this._$AH=e);else{const o=e;let h,p;for(e=n[0],h=0;h<n.length-1;h++)p=Kr(this,o[i+h],r,h),p===Cr&&(p=this._$AH[h]),a||(a=!ki(p)||p!==this._$AH[h]),p===W?e=W:e!==W&&(e+=(p??"")+n[h+1]),this._$AH[h]=p}a&&!s&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Yc=class extends Ls{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}};class Gc extends Ls{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class qc extends Ls{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Kr(this,e,r,0)??W)===Cr)return;const i=this._$AH,s=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let Xc=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Kr(this,e)}};const En=_i.litHtmlPolyfillSupport;En==null||En(jn,ji),(_i.litHtmlVersions??(_i.litHtmlVersions=[])).push("3.1.4");const Kc=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new ji(e.insertBefore(Ci(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qe=class extends qr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Kc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Cr}};var jo;Qe._$litElement$=!0,Qe.finalized=!0,(jo=globalThis.litElementHydrateSupport)==null||jo.call(globalThis,{LitElement:Qe});const Tn=globalThis.litElementPolyfillSupport;Tn==null||Tn({LitElement:Qe});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zc={attribute:!0,type:String,converter:bs,reflect:!1,hasChanged:Jn},Qc=(t=Zc,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(o){const h=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,h,t)},init(o){return o!==void 0&&this.P(a,void 0,t),o}}}if(i==="setter"){const{name:a}=r;return function(o){const h=this[a];e.call(this,o),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+i)};function g(t){return(e,r)=>typeof r=="object"?Qc(t,e,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(t){return g({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wi(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Jc(e,r,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(n),o=(a==null?void 0:a.assignedElements(t))??[];return s===void 0?o:o.filter(p=>p.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const eh={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function hs(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function ds(t){return t.toString().indexOf("`")===-1}ds(t=>t``)||ds(t=>t`\0`)||ds(t=>t`\n`)||ds(t=>t`\u0000`);hs``&&hs`\0`&&hs`\n`&&hs`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let th="google#safe";function rh(){if(typeof window<"u")return window.trustedTypes}function Go(){var t;return(t=rh())!==null&&t!==void 0?t:null}let us;function ih(){var t,e;if(us===void 0)try{us=(e=(t=Go())===null||t===void 0?void 0:t.createPolicy(th,{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r}))!==null&&e!==void 0?e:null}catch{us=null}return us}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class qo{constructor(e,r){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function co(t){var e;const r=t,i=(e=ih())===null||e===void 0?void 0:e.createScriptURL(r);return i??new qo(r,eh)}function sh(t){var e;if(!((e=Go())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof qo)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let r="";throw new Error(r)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Xo(t,...e){if(e.length===0)return co(t[0]);t[0].toLowerCase();let r=t[0];for(let i=0;i<e.length;i++)r+=encodeURIComponent(e[i])+t[i+1];return co(r)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function nh(t){var e;const r=t.document,i=(e=r.querySelector)===null||e===void 0?void 0:e.call(r,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function ah(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,r=nh(e||window);r&&t.setAttribute("nonce",r)}function Ko(t,e,r){t.src=sh(e),ah(t)}/**
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
 */const oh=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Ko(r,Xo`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function Zo(t={}){await oh;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function ho(t){if(await Zo(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function lh(t){return await Zo(),new google.visualization.ChartWrapper({container:t})}/**
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
 */var mr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(s<3?a(n):s>3?a(e,r,n):a(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const uo=["ready","select"],ch={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class Vt extends Qe{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return y`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){lh(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(uo,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(ch[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(s=>!uo.includes(s)),r);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,r){for(const i of e)google.visualization.events.addListener(r,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const i=await ho({cols:r});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,r;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?r=fetch(e).then(s=>s.json()):r=Promise.resolve(e),r.then(ho).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of r){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}Vt.styles=pe`
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
  `;mr([g({type:String,reflect:!0})],Vt.prototype,"type",void 0);mr([g({type:Array})],Vt.prototype,"events",void 0);mr([g({type:Object,hasChanged:()=>!0})],Vt.prototype,"options",void 0);mr([g({type:Array})],Vt.prototype,"cols",void 0);mr([g({type:Array})],Vt.prototype,"rows",void 0);mr([g({type:String})],Vt.prototype,"data",void 0);mr([g({type:Object})],Vt.prototype,"view",void 0);mr([g({type:Array})],Vt.prototype,"selection",void 0);mr([g({type:Object})],Vt.prototype,"_data",void 0);customElements.define("google-chart",Vt);/**
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
 */const hh=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Ko(r,Xo`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function Qo(t={}){await hh;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function po(t){if(await Qo(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function dh(t){return await Qo(),new google.visualization.ChartWrapper({container:t})}function Ft(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Wr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Jo=6048e5,uh=864e5;let ph={};function Rs(){return ph}function Pi(t,e){var o,h,p,m;const r=Rs(),i=(e==null?void 0:e.weekStartsOn)??((h=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.weekStartsOn)??0,s=Ft(t),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function xs(t){return Pi(t,{weekStartsOn:1})}function el(t){const e=Ft(t),r=e.getFullYear(),i=Wr(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=xs(i),n=Wr(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=xs(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function fo(t){const e=Ft(t);return e.setHours(0,0,0,0),e}function mo(t){const e=Ft(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function fh(t,e){const r=fo(t),i=fo(e),s=+r-mo(r),n=+i-mo(i);return Math.round((s-n)/uh)}function mh(t){const e=el(t),r=Wr(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),xs(r)}function gh(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function tl(t){if(!gh(t)&&typeof t!="number")return!1;const e=Ft(t);return!isNaN(Number(e))}function vh(t){const e=Ft(t),r=Wr(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const yh={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bh=(t,e,r)=>{let i;const s=yh[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Ln(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const wh={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},xh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_h={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$h={date:Ln({formats:wh,defaultWidth:"full"}),time:Ln({formats:xh,defaultWidth:"full"}),dateTime:Ln({formats:_h,defaultWidth:"full"})},Sh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ch=(t,e,r,i)=>Sh[t];function bi(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,o=r!=null&&r.width?String(r.width):a;s=t.formattingValues[o]||t.formattingValues[a]}else{const a=t.defaultWidth,o=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[o]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const kh={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ph={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ah={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Oh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Dh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Eh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Th=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Lh={ordinalNumber:Th,era:bi({values:kh,defaultWidth:"wide"}),quarter:bi({values:Ph,defaultWidth:"wide",argumentCallback:t=>t-1}),month:bi({values:Ah,defaultWidth:"wide"}),day:bi({values:Oh,defaultWidth:"wide"}),dayPeriod:bi({values:Dh,defaultWidth:"wide",formattingValues:Eh,defaultFormattingWidth:"wide"})};function wi(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(o)?Mh(o,f=>f.test(a)):Rh(o,f=>f.test(a));let p;p=t.valueCallback?t.valueCallback(h):h,p=r.valueCallback?r.valueCallback(p):p;const m=e.slice(a.length);return{value:p,rest:m}}}function Rh(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Mh(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Uh(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const Ih=/^(\d+)(th|st|nd|rd)?/i,Fh=/\d+/i,jh={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Wh={any:[/^b/i,/^(a|c)/i]},Nh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Hh={any:[/1/i,/2/i,/3/i,/4/i]},Bh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},zh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vh={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Yh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Gh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},qh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Xh={ordinalNumber:Uh({matchPattern:Ih,parsePattern:Fh,valueCallback:t=>parseInt(t,10)}),era:wi({matchPatterns:jh,defaultMatchWidth:"wide",parsePatterns:Wh,defaultParseWidth:"any"}),quarter:wi({matchPatterns:Nh,defaultMatchWidth:"wide",parsePatterns:Hh,defaultParseWidth:"any",valueCallback:t=>t+1}),month:wi({matchPatterns:Bh,defaultMatchWidth:"wide",parsePatterns:zh,defaultParseWidth:"any"}),day:wi({matchPatterns:Vh,defaultMatchWidth:"wide",parsePatterns:Yh,defaultParseWidth:"any"}),dayPeriod:wi({matchPatterns:Gh,defaultMatchWidth:"any",parsePatterns:qh,defaultParseWidth:"any"})},Kh={code:"en-US",formatDistance:bh,formatLong:$h,formatRelative:Ch,localize:Lh,match:Xh,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Zh(t){const e=Ft(t);return fh(e,vh(e))+1}function Qh(t){const e=Ft(t),r=+xs(e)-+mh(e);return Math.round(r/Jo)+1}function rl(t,e){var m,f,b,$;const r=Ft(t),i=r.getFullYear(),s=Rs(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??(($=(b=s.locale)==null?void 0:b.options)==null?void 0:$.firstWeekContainsDate)??1,a=Wr(t,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Pi(a,e),h=Wr(t,0);h.setFullYear(i,0,n),h.setHours(0,0,0,0);const p=Pi(h,e);return r.getTime()>=o.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function Jh(t,e){var o,h,p,m;const r=Rs(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,s=rl(t,e),n=Wr(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Pi(n,e)}function ed(t,e){const r=Ft(t),i=+Pi(r,e)-+Jh(r,e);return Math.round(i/Jo)+1}function xe(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const xr={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return xe(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):xe(r+1,2)},d(t,e){return xe(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return xe(t.getHours()%12||12,e.length)},H(t,e){return xe(t.getHours(),e.length)},m(t,e){return xe(t.getMinutes(),e.length)},s(t,e){return xe(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return xe(s,e.length)}},Yr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},go={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return xr.y(t,e)},Y:function(t,e,r,i){const s=rl(t,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return xe(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):xe(n,e.length)},R:function(t,e){const r=el(t);return xe(r,e.length)},u:function(t,e){const r=t.getFullYear();return xe(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return xe(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return xe(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return xr.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return xe(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=ed(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):xe(s,e.length)},I:function(t,e,r){const i=Qh(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):xe(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):xr.d(t,e)},D:function(t,e,r){const i=Zh(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):xe(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return xe(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return xe(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return xe(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=Yr.noon:i===0?s=Yr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=Yr.evening:i>=12?s=Yr.afternoon:i>=4?s=Yr.morning:s=Yr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return xr.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):xr.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):xe(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):xe(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):xr.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):xr.s(t,e)},S:function(t,e){return xr.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return yo(i);case"XXXX":case"XX":return Ur(i);case"XXXXX":case"XXX":default:return Ur(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return yo(i);case"xxxx":case"xx":return Ur(i);case"xxxxx":case"xxx":default:return Ur(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+vo(i,":");case"OOOO":default:return"GMT"+Ur(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+vo(i,":");case"zzzz":default:return"GMT"+Ur(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return xe(i,e.length)},T:function(t,e,r){const i=t.getTime();return xe(i,e.length)}};function vo(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+xe(n,2)}function yo(t,e){return t%60===0?(t>0?"-":"+")+xe(Math.abs(t)/60,2):Ur(t,e)}function Ur(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=xe(Math.trunc(i/60),2),n=xe(i%60,2);return r+s+e+n}const bo=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},il=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},td=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return bo(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",bo(i,e)).replace("{{time}}",il(s,e))},rd={p:il,P:td},id=/^D+$/,sd=/^Y+$/,nd=["D","DD","YY","YYYY"];function ad(t){return id.test(t)}function od(t){return sd.test(t)}function ld(t,e,r){const i=cd(t,e,r);if(console.warn(i),nd.includes(t))throw new RangeError(i)}function cd(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const hd=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,dd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ud=/^'([^]*?)'?$/,pd=/''/g,fd=/[a-zA-Z]/;function kr(t,e,r){var m,f,b,$;const i=Rs(),s=i.locale??Kh,n=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??(($=(b=i.locale)==null?void 0:b.options)==null?void 0:$.weekStartsOn)??0,o=Ft(t);if(!tl(o))throw new RangeError("Invalid time value");let h=e.match(dd).map(C=>{const D=C[0];if(D==="p"||D==="P"){const k=rd[D];return k(C,s.formatLong)}return C}).join("").match(hd).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const D=C[0];if(D==="'")return{isToken:!1,value:md(C)};if(go[D])return{isToken:!0,value:C};if(D.match(fd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:C}});s.localize.preprocessor&&(h=s.localize.preprocessor(o,h));const p={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return h.map(C=>{if(!C.isToken)return C.value;const D=C.value;(od(D)||ad(D))&&ld(D,e,String(t));const k=go[D[0]];return k(o,D,s.localize,p)}).join("")}function md(t){const e=t.match(ud);return e?e[1].replace(pd,"'"):t}function Rn(t,e){const r=Ft(t);if(!tl(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const h=xe(r.getDate(),2),p=xe(r.getMonth()+1,2);n=`${xe(r.getFullYear(),4)}${a}${p}${a}${h}`}if(s!=="date"){const h=xe(r.getHours(),2),p=xe(r.getMinutes(),2),m=xe(r.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${o}${p}${o}${m}`}return n}var gd={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},vd=`\r
`,yd="\uFEFF",Ms=t=>Object.assign({},gd,t);class bd extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class wd extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class xd extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class _d extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var ci=t=>t,Ct=t=>t,$i=ci,Us=ci,Zr=ci,wo=ci,xo=ci,$d=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},Sd=t=>wo(typeof t=="object"?t.key:t),Cd=t=>xo(typeof t=="object"?t.displayLabel:t),kd=(t,...e)=>e.reduce((r,i)=>i(r),t),Pd=t=>e=>t.useBom?Us(Ct(e)+yd):e,Ad=t=>e=>t.showTitle?ea(Us(Ct(e)+t.title))(Zr("")):e,ea=t=>e=>Us(Ct(t)+Ct(e)+vd),sl=t=>(e,r)=>Od(t)(Zr(Ct(e)+Ct(r))),Od=t=>e=>ci(Ct(e)+t.fieldSeparator),Dd=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new wd("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Zr("");for(let s=0;s<e.length;s++){const n=Cd(e[s]);i=sl(t)(i,nl(t,Ct(n)))}return i=Zr(Ct(i).slice(0,-1)),ea(r)(i)},Ed=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=Zr("");for(let o=0;o<e.length;o++){const h=Sd(e[o]),p=r[n][Ct(h)];a=sl(t)(a,nl(t,p))}a=Zr(Ct(a).slice(0,-1)),s=ea(s)(a)}return s},Td=t=>+t===t&&(!isFinite(t)||!!(t%1)),Ld=(t,e)=>{if(Td(e)){if(t.decimalSeparator==="locale")return $i(e.toLocaleString());if(t.decimalSeparator)return $i(e.toString().replace(".",t.decimalSeparator))}return $i(e.toString())},ms=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+$d(e,t.quoteCharacter)+t.quoteCharacter),$i(r)},Rd=(t,e)=>{const r=e?"true":"false";return $i(t.boolDisplay[r])},Md=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?ms(t,t.replaceUndefinedWith+""):e===null?ms(t,"null"):ms(t,""),nl=(t,e)=>{if(typeof e=="number")return Ld(t,e);if(typeof e=="string")return ms(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Rd(t,e);if(e===null||typeof e>"u")return Md(t,e);throw new _d(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Ud=t=>e=>{const r=Ms(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=kd(Us(""),Pd(r),Ad(r),Dd(r,i),Ed(r,i,e));if(Ct(s).length<1)throw new bd("Output is empty. Is your data formatted correctly?");return s},Id=t=>e=>{const r=Ms(t),i=Ct(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Fd=t=>e=>{if(!window)throw new xd("Downloading only supported in a browser environment.");const r=Id(t)(e),i=Ms(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wd(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var Wn={exports:{}};const Nd={},Hd=Object.freeze(Object.defineProperty({__proto__:null,default:Nd},Symbol.toStringTag,{value:"Module"})),Gr=Wd(Hd);/**
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
 */(function(t,e){(function(r,i){i(e)})(jd,function(r){var i={},s={exports:{}};(function(P){var T=function(J){return typeof J<"u"&&J.versions!=null&&J.versions.node!=null&&J+""=="[object process]"};P.exports.isNode=T,P.exports.platform=typeof process<"u"&&T(process)?"node":"browser";var L=P.exports.platform==="node"&&Gr;P.exports.isMainThread=P.exports.platform==="node"?(!L||L.isMainThread)&&!process.connected:typeof Window<"u",P.exports.cpus=P.exports.platform==="browser"?self.navigator.hardwareConcurrency:Gr.cpus().length})(s);var n=s.exports,a={},o;function h(){if(o)return a;o=1;function P(J,ke){var ae=this;if(!(this instanceof P))throw new SyntaxError("Constructor must be called with the new operator");if(typeof J!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Le=[],_e=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var B=function(he,ye){Le.push(he),_e.push(ye)};this.then=function(A,he){return new P(function(ye,Ye){var st=A?T(A,ye,Ye):ye,Zt=he?T(he,ye,Ye):Ye;B(st,Zt)},ae)};var $e=function(he){return ae.resolved=!0,ae.rejected=!1,ae.pending=!1,Le.forEach(function(ye){ye(he)}),B=function(Ye,st){Ye(he)},$e=S=function(){},ae},S=function(he){return ae.resolved=!1,ae.rejected=!0,ae.pending=!1,_e.forEach(function(ye){ye(he)}),B=function(Ye,st){st(he)},$e=S=function(){},ae};this.cancel=function(){return ke?ke.cancel():S(new L),ae},this.timeout=function(A){if(ke)ke.timeout(A);else{var he=setTimeout(function(){S(new R("Promise timed out after "+A+" ms"))},A);ae.always(function(){clearTimeout(he)})}return ae},J(function(A){$e(A)},function(A){S(A)})}function T(J,ke,ae){return function(Le){try{var _e=J(Le);_e&&typeof _e.then=="function"&&typeof _e.catch=="function"?_e.then(ke,ae):ke(_e)}catch(B){ae(B)}}}P.prototype.catch=function(J){return this.then(null,J)},P.prototype.always=function(J){return this.then(J,J)},P.all=function(J){return new P(function(ke,ae){var Le=J.length,_e=[];Le?J.forEach(function(B,$e){B.then(function(S){_e[$e]=S,Le--,Le==0&&ke(_e)},function(S){Le=0,ae(S)})}):ke(_e)})},P.defer=function(){var J={};return J.promise=new P(function(ke,ae){J.resolve=ke,J.reject=ae}),J};function L(J){this.message=J||"promise cancelled",this.stack=new Error().stack}L.prototype=new Error,L.prototype.constructor=Error,L.prototype.name="CancellationError",P.CancellationError=L;function R(J){this.message=J||"timeout exceeded",this.stack=new Error().stack}return R.prototype=new Error,R.prototype.constructor=Error,R.prototype.name="TimeoutError",P.TimeoutError=R,a.Promise=P,a}function p(P,T){(T==null||T>P.length)&&(T=P.length);for(var L=0,R=Array(T);L<T;L++)R[L]=P[L];return R}function m(P,T){var L=typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(!L){if(Array.isArray(P)||(L=I(P))||T){L&&(P=L);var R=0,J=function(){};return{s:J,n:function(){return R>=P.length?{done:!0}:{done:!1,value:P[R++]}},e:function(_e){throw _e},f:J}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ke,ae=!0,Le=!1;return{s:function(){L=L.call(P)},n:function(){var _e=L.next();return ae=_e.done,_e},e:function(_e){Le=!0,ke=_e},f:function(){try{ae||L.return==null||L.return()}finally{if(Le)throw ke}}}}function f(P,T,L){return(T=D(T))in P?Object.defineProperty(P,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):P[T]=L,P}function b(P,T){var L=Object.keys(P);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(P);T&&(R=R.filter(function(J){return Object.getOwnPropertyDescriptor(P,J).enumerable})),L.push.apply(L,R)}return L}function $(P){for(var T=1;T<arguments.length;T++){var L=arguments[T]!=null?arguments[T]:{};T%2?b(Object(L),!0).forEach(function(R){f(P,R,L[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(L)):b(Object(L)).forEach(function(R){Object.defineProperty(P,R,Object.getOwnPropertyDescriptor(L,R))})}return P}function C(P,T){if(typeof P!="object"||!P)return P;var L=P[Symbol.toPrimitive];if(L!==void 0){var R=L.call(P,T||"default");if(typeof R!="object")return R;throw new TypeError("@@toPrimitive must return a primitive value.")}return(T==="string"?String:Number)(P)}function D(P){var T=C(P,"string");return typeof T=="symbol"?T:T+""}function k(P){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},k(P)}function I(P,T){if(P){if(typeof P=="string")return p(P,T);var L={}.toString.call(P).slice(8,-1);return L==="Object"&&P.constructor&&(L=P.constructor.name),L==="Map"||L==="Set"?Array.from(P):L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)?p(P,T):void 0}}var U={exports:{}},N={},z;function H(){return z||(z=1,N.validateOptions=function(T,L,R){if(T){var J=T?Object.keys(T):[],ke=J.find(function(Le){return!L.includes(Le)});if(ke)throw new Error('Object "'+R+'" contains an unknown option "'+ke+'"');var ae=L.find(function(Le){return Object.prototype[Le]&&!J.includes(Le)});if(ae)throw new Error('Object "'+R+'" contains an inherited option "'+ae+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return T}},N.workerOptsNames=["credentials","name","type"],N.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],N.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),N}var le,E;function Y(){return E||(E=1,le=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),le}var G;function K(){if(G)return U.exports;G=1;var P=h(),T=P.Promise,L=n,R=H(),J=R.validateOptions,ke=R.forkOptsNames,ae=R.workerThreadOptsNames,Le=R.workerOptsNames,_e="__workerpool-terminate__";function B(){var Q=S();if(!Q)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return Q}function $e(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function S(){try{return Gr}catch(Q){if(k(Q)==="object"&&Q!==null&&Q.code==="MODULE_NOT_FOUND")return null;throw Q}}function A(){if(L.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var Q=new Blob([Y()],{type:"text/javascript"});return window.URL.createObjectURL(Q)}else return __dirname+"/worker.js"}function he(Q,ue){if(ue.workerType==="web")return $e(),ye(Q,ue.workerOpts,Worker);if(ue.workerType==="thread")return O=B(),Ye(Q,O,ue);if(ue.workerType==="process"||!ue.workerType)return st(Q,Zt(ue),Gr);if(L.platform==="browser")return $e(),ye(Q,ue.workerOpts,Worker);var O=S();return O?Ye(Q,O,ue):st(Q,Zt(ue),Gr)}function ye(Q,ue,O){J(ue,Le,"workerOpts");var ne=new O(Q,ue);return ne.isBrowserWorker=!0,ne.on=function(Pe,Ce){this.addEventListener(Pe,function(We){Ce(We.data)})},ne.send=function(Pe,Ce){this.postMessage(Pe,Ce)},ne}function Ye(Q,ue,O){var ne,Pe;J(O==null?void 0:O.workerThreadOpts,ae,"workerThreadOpts");var Ce=new ue.Worker(Q,$({stdout:(ne=O==null?void 0:O.emitStdStreams)!==null&&ne!==void 0?ne:!1,stderr:(Pe=O==null?void 0:O.emitStdStreams)!==null&&Pe!==void 0?Pe:!1},O==null?void 0:O.workerThreadOpts));return Ce.isWorkerThread=!0,Ce.send=function(We,be){this.postMessage(We,be)},Ce.kill=function(){return this.terminate(),!0},Ce.disconnect=function(){this.terminate()},O!=null&&O.emitStdStreams&&(Ce.stdout.on("data",function(We){return Ce.emit("stdout",We)}),Ce.stderr.on("data",function(We){return Ce.emit("stderr",We)})),Ce}function st(Q,ue,O){J(ue.forkOpts,ke,"forkOpts");var ne=O.fork(Q,ue.forkArgs,ue.forkOpts),Pe=ne.send;return ne.send=function(Ce){return Pe.call(ne,Ce)},ue.emitStdStreams&&(ne.stdout.on("data",function(Ce){return ne.emit("stdout",Ce)}),ne.stderr.on("data",function(Ce){return ne.emit("stderr",Ce)})),ne.isChildProcess=!0,ne}function Zt(Q){Q=Q||{};var ue=process.execArgv.join(" "),O=ue.indexOf("--inspect")!==-1,ne=ue.indexOf("--debug-brk")!==-1,Pe=[];return O&&(Pe.push("--inspect="+Q.debugPort),ne&&Pe.push("--debug-brk")),process.execArgv.forEach(function(Ce){Ce.indexOf("--max-old-space-size")>-1&&Pe.push(Ce)}),Object.assign({},Q,{forkArgs:Q.forkArgs,forkOpts:Object.assign({},Q.forkOpts,{execArgv:(Q.forkOpts&&Q.forkOpts.execArgv||[]).concat(Pe),stdio:Q.emitStdStreams?"pipe":void 0})})}function $t(Q){for(var ue=new Error(""),O=Object.keys(Q),ne=0;ne<O.length;ne++)ue[O[ne]]=Q[O[ne]];return ue}function Tt(Q,ue){if(Object.keys(Q.processing).length===1){var O=Object.values(Q.processing)[0];O.options&&typeof O.options.on=="function"&&O.options.on(ue)}}function br(Q,ue){var O=this,ne=ue||{};this.script=Q||A(),this.worker=he(this.script,ne),this.debugPort=ne.debugPort,this.forkOpts=ne.forkOpts,this.forkArgs=ne.forkArgs,this.workerOpts=ne.workerOpts,this.workerThreadOpts=ne.workerThreadOpts,this.workerTerminateTimeout=ne.workerTerminateTimeout,Q||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(be){Tt(O,{stdout:be.toString()})}),this.worker.on("stderr",function(be){Tt(O,{stderr:be.toString()})}),this.worker.on("message",function(be){if(!O.terminated)if(typeof be=="string"&&be==="ready")O.worker.ready=!0,Ce();else{var mt=be.id,Ge=O.processing[mt];Ge!==void 0&&(be.isEvent?Ge.options&&typeof Ge.options.on=="function"&&Ge.options.on(be.payload):(delete O.processing[mt],O.terminating===!0&&O.terminate(),be.error?Ge.resolver.reject($t(be.error)):Ge.resolver.resolve(be.result)))}});function Pe(be){O.terminated=!0;for(var mt in O.processing)O.processing[mt]!==void 0&&O.processing[mt].resolver.reject(be);O.processing=Object.create(null)}function Ce(){var be=m(O.requestQueue.splice(0)),mt;try{for(be.s();!(mt=be.n()).done;){var Ge=mt.value;O.worker.send(Ge.message,Ge.transfer)}}catch(Qi){be.e(Qi)}finally{be.f()}}var We=this.worker;this.worker.on("error",Pe),this.worker.on("exit",function(be,mt){var Ge=`Workerpool Worker terminated Unexpectedly
`;Ge+="    exitCode: `"+be+"`\n",Ge+="    signalCode: `"+mt+"`\n",Ge+="    workerpool.script: `"+O.script+"`\n",Ge+="    spawnArgs: `"+We.spawnargs+"`\n",Ge+="    spawnfile: `"+We.spawnfile+"`\n",Ge+="    stdout: `"+We.stdout+"`\n",Ge+="    stderr: `"+We.stderr+"`\n",Pe(new Error(Ge))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return br.prototype.methods=function(){return this.exec("methods")},br.prototype.exec=function(Q,ue,O,ne){O||(O=T.defer());var Pe=++this.lastId;this.processing[Pe]={id:Pe,resolver:O,options:ne};var Ce={message:{id:Pe,method:Q,params:ue},transfer:ne&&ne.transfer};this.terminated?O.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Ce.message,Ce.transfer):this.requestQueue.push(Ce);var We=this;return O.promise.catch(function(be){if(be instanceof T.CancellationError||be instanceof T.TimeoutError)return delete We.processing[Pe],We.terminateAndNotify(!0).then(function(){throw be},function(mt){throw mt});throw be})},br.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},br.prototype.terminate=function(Q,ue){var O=this;if(Q){for(var ne in this.processing)this.processing[ne]!==void 0&&this.processing[ne].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof ue=="function"&&(this.terminationHandler=ue),this.busy())this.terminating=!0;else{var Pe=function(be){if(O.terminated=!0,O.cleaning=!1,O.worker!=null&&O.worker.removeAllListeners&&O.worker.removeAllListeners("message"),O.worker=null,O.terminating=!1,O.terminationHandler)O.terminationHandler(be,O);else if(be)throw be};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Pe(new Error("worker already killed!"));return}var Ce=setTimeout(function(){O.worker&&O.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Ce),O.worker&&(O.worker.killed=!0),Pe()}),this.worker.ready?this.worker.send(_e):this.requestQueue.push({message:_e}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Pe()}},br.prototype.terminateAndNotify=function(Q,ue){var O=T.defer();return ue&&O.promise.timeout(ue),this.terminate(Q,function(ne,Pe){ne?O.reject(ne):O.resolve(Pe)}),O.promise},U.exports=br,U.exports._tryRequireWorkerThreads=S,U.exports._setupProcessWorker=st,U.exports._setupBrowserWorker=ye,U.exports._setupWorkerThreadWorker=Ye,U.exports.ensureWorkerThreads=B,U.exports}var ce,q;function ie(){if(q)return ce;q=1;var P=65535;ce=T;function T(){this.ports=Object.create(null),this.length=0}return T.prototype.nextAvailableStartingAt=function(L){for(;this.ports[L]===!0;)L++;if(L>=P)throw new Error("WorkerPool debug port limit reached: "+L+">= "+P);return this.ports[L]=!0,this.length++,L},T.prototype.releasePort=function(L){delete this.ports[L],this.length--},ce}var se,de;function Te(){if(de)return se;de=1;var P=h(),T=P.Promise,L=K(),R=n,J=ie(),ke=new J;function ae(S,A){typeof S=="string"?this.script=S||null:(this.script=null,A=S),this.workers=[],this.tasks=[],A=A||{},this.forkArgs=Object.freeze(A.forkArgs||[]),this.forkOpts=Object.freeze(A.forkOpts||{}),this.workerOpts=Object.freeze(A.workerOpts||{}),this.workerThreadOpts=Object.freeze(A.workerThreadOpts||{}),this.debugPortStart=A.debugPortStart||43210,this.nodeWorker=A.nodeWorker,this.workerType=A.workerType||A.nodeWorker||"auto",this.maxQueueSize=A.maxQueueSize||1/0,this.workerTerminateTimeout=A.workerTerminateTimeout||1e3,this.onCreateWorker=A.onCreateWorker||function(){return null},this.onTerminateWorker=A.onTerminateWorker||function(){return null},this.emitStdStreams=A.emitStdStreams||!1,A&&"maxWorkers"in A?(Le(A.maxWorkers),this.maxWorkers=A.maxWorkers):this.maxWorkers=Math.max((R.cpus||4)-1,1),A&&"minWorkers"in A&&(A.minWorkers==="max"?this.minWorkers=this.maxWorkers:(_e(A.minWorkers),this.minWorkers=A.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&L.ensureWorkerThreads()}ae.prototype.exec=function(S,A,he){if(A&&!Array.isArray(A))throw new TypeError('Array expected as argument "params"');if(typeof S=="string"){var ye=T.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ye=this.tasks,st={method:S,params:A,resolver:ye,timeout:null,options:he};Ye.push(st);var Zt=ye.promise.timeout;return ye.promise.timeout=function(Tt){return Ye.indexOf(st)!==-1?(st.timeout=Tt,ye.promise):Zt.call(ye.promise,Tt)},this._next(),ye.promise}else{if(typeof S=="function")return this.exec("run",[String(S),A],he);throw new TypeError('Function or string expected as argument "method"')}},ae.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var S=this;return this.exec("methods").then(function(A){var he={};return A.forEach(function(ye){he[ye]=function(){return S.exec(ye,Array.prototype.slice.call(arguments))}}),he})},ae.prototype._next=function(){if(this.tasks.length>0){var S=this._getWorker();if(S){var A=this,he=this.tasks.shift();if(he.resolver.promise.pending){var ye=S.exec(he.method,he.params,he.resolver,he.options).then(A._boundNext).catch(function(){if(S.terminated)return A._removeWorker(S)}).then(function(){A._next()});typeof he.timeout=="number"&&ye.timeout(he.timeout)}else A._next()}}},ae.prototype._getWorker=function(){for(var S=this.workers,A=0;A<S.length;A++){var he=S[A];if(he.busy()===!1)return he}return S.length<this.maxWorkers?(he=this._createWorkerHandler(),S.push(he),he):null},ae.prototype._removeWorker=function(S){var A=this;return ke.releasePort(S.debugPort),this._removeWorkerFromList(S),this._ensureMinWorkers(),new T(function(he,ye){S.terminate(!1,function(Ye){A.onTerminateWorker({forkArgs:S.forkArgs,forkOpts:S.forkOpts,workerThreadOpts:S.workerThreadOpts,script:S.script}),Ye?ye(Ye):he(S)})})},ae.prototype._removeWorkerFromList=function(S){var A=this.workers.indexOf(S);A!==-1&&this.workers.splice(A,1)},ae.prototype.terminate=function(S,A){var he=this;this.tasks.forEach(function($t){$t.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ye=function(Tt){ke.releasePort(Tt.debugPort),this._removeWorkerFromList(Tt)},Ye=ye.bind(this),st=[],Zt=this.workers.slice();return Zt.forEach(function($t){var Tt=$t.terminateAndNotify(S,A).then(Ye).always(function(){he.onTerminateWorker({forkArgs:$t.forkArgs,forkOpts:$t.forkOpts,workerThreadOpts:$t.workerThreadOpts,script:$t.script})});st.push(Tt)}),T.all(st)},ae.prototype.stats=function(){var S=this.workers.length,A=this.workers.filter(function(he){return he.busy()}).length;return{totalWorkers:S,busyWorkers:A,idleWorkers:S-A,pendingTasks:this.tasks.length,activeTasks:A}},ae.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var S=this.workers.length;S<this.minWorkers;S++)this.workers.push(this._createWorkerHandler())},ae.prototype._createWorkerHandler=function(){var S=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new L(S.script||this.script,{forkArgs:S.forkArgs||this.forkArgs,forkOpts:S.forkOpts||this.forkOpts,workerOpts:S.workerOpts||this.workerOpts,workerThreadOpts:S.workerThreadOpts||this.workerThreadOpts,debugPort:ke.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Le(S){if(!B(S)||!$e(S)||S<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function _e(S){if(!B(S)||!$e(S)||S<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function B(S){return typeof S=="number"}function $e(S){return Math.round(S)==S}return se=ae,se}var Ne={},Ue,xt;function _t(){if(xt)return Ue;xt=1;function P(T,L){this.message=T,this.transfer=L}return Ue=P,Ue}var lr;function qt(){return lr||(lr=1,function(P){var T=_t(),L="__workerpool-terminate__",R={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")R.on=function(B,$e){addEventListener(B,function(S){$e(S.data)})},R.send=function(B,$e){$e?postMessage(B,$e):postMessage(B)};else if(typeof process<"u"){var J;try{J=Gr}catch(B){if(!(k(B)==="object"&&B!==null&&B.code==="MODULE_NOT_FOUND"))throw B}if(J&&J.parentPort!==null){var ke=J.parentPort;R.send=ke.postMessage.bind(ke),R.on=ke.on.bind(ke),R.exit=process.exit.bind(process)}else R.on=process.on.bind(process),R.send=function(B){process.send(B)},R.on("disconnect",function(){process.exit(1)}),R.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ae(B){return Object.getOwnPropertyNames(B).reduce(function($e,S){return Object.defineProperty($e,S,{value:B[S],enumerable:!0})},{})}function Le(B){return B&&typeof B.then=="function"&&typeof B.catch=="function"}R.methods={},R.methods.run=function($e,S){var A=new Function("return ("+$e+").apply(null, arguments);");return A.apply(A,S)},R.methods.methods=function(){return Object.keys(R.methods)},R.terminationHandler=void 0,R.cleanupAndExit=function(B){var $e=function(){R.exit(B)};if(!R.terminationHandler)return $e();var S=R.terminationHandler(B);Le(S)?S.then($e,$e):$e()};var _e=null;R.on("message",function(B){if(B===L)return R.cleanupAndExit(0);try{var $e=R.methods[B.method];if($e){_e=B.id;var S=$e.apply($e,B.params);Le(S)?S.then(function(A){A instanceof T?R.send({id:B.id,result:A.message,error:null},A.transfer):R.send({id:B.id,result:A,error:null}),_e=null}).catch(function(A){R.send({id:B.id,result:null,error:ae(A)}),_e=null}):(S instanceof T?R.send({id:B.id,result:S.message,error:null},S.transfer):R.send({id:B.id,result:S,error:null}),_e=null)}else throw new Error('Unknown method "'+B.method+'"')}catch(A){R.send({id:B.id,result:null,error:ae(A)})}}),R.register=function(B,$e){if(B)for(var S in B)B.hasOwnProperty(S)&&(R.methods[S]=B[S]);$e&&(R.terminationHandler=$e.onTerminate),R.send("ready")},R.emit=function(B){if(_e){if(B instanceof T){R.send({id:_e,isEvent:!0,payload:B.message},B.transfer);return}R.send({id:_e,isEvent:!0,payload:B})}},P.add=R.register,P.emit=R.emit}(Ne)),Ne}var Xt=n.platform,Kt=n.isMainThread,Wt=n.cpus;function Ie(P,T){var L=Te();return new L(P,T)}var it=i.pool=Ie;function Tr(P,T){var L=qt();L.add(P,T)}var ft=i.worker=Tr;function Fe(P){var T=qt();T.emit(P)}var Zi=i.workerEmit=Fe,Qs=h(),qe=Qs.Promise,Js=i.Promise=qe,en=i.Transfer=_t(),tn=i.platform=Xt,rn=i.isMainThread=Kt,sn=i.cpus=Wt;r.Promise=Js,r.Transfer=en,r.cpus=sn,r.default=i,r.isMainThread=rn,r.platform=tn,r.pool=it,r.worker=ft,r.workerEmit=Zi,Object.defineProperty(r,"__esModule",{value:!0})})})(Wn,Wn.exports);var Bd=Wn.exports,at=class{constructor(t,e){c(this,"_value");c(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},al=class extends at{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},zd=class extends at{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Vd=class extends at{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const i={...e};return e.from<r.min&&(i.from=r.min),e.to>r.max&&(i.to=r.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=r),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},Yd=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Gd=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],qd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Xd=Yd(),Fr={iron:{pixels:qd,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Gd,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Xd,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Kd=class extends at{get availablePalettes(){return Fr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},Fn,Zd=(Fn=class{},c(Fn,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),Fn),Ve,ta=(Ve=class extends Zd{static humanRangeDates(e,r){return e=Ve.inputToDate(e),r=Ve.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Ve.humanDate(e):[Ve.humanDate(e),Ve.humanDate(r)].join(" - ")}static human(e){return`${Ve.humanDate(e)} ${Ve.humanTime(e,!0)} `}},c(Ve,"isoDate",e=>(e=Ve.inputToDate(e),Rn(e,{representation:"date"}))),c(Ve,"isoTime",e=>(e=Ve.inputToDate(e),Rn(e,{representation:"time"}))),c(Ve,"isoComplete",e=>(e=Ve.inputToDate(e),Rn(e))),c(Ve,"humanTime",(e,r=!1)=>(e=Ve.inputToDate(e),kr(e,r?"HH:mm:ss":"HH:mm"))),c(Ve,"humanDate",(e,r=!1)=>(e=Ve.inputToDate(e),kr(e,r?"d. M.":"d. M. yyyy"))),Ve),Is=class{},Qd=class extends Is{constructor(e,r,i,s,n,a,o,h,p,m,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=a,this.duration=o,this.min=h,this.max=p,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}getColorAtPoint(e,r){var a,o;const i=this.getTemperatureAtPoint(e,r),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const p=(i-s)/(n-s),m=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[m]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},Fs=class{constructor(t){c(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Jt=class Nn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Nn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Nn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Jd=class extends Fs{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Jt.createCanvasContainer(),this.canvas=Jt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,a,o,h)=>{const m=new OffscreenCanvas(n,a).getContext("2d"),f=s-i;for(let C=0;C<=n;C++)for(let D=0;D<=a;D++){const k=C+D*n;let I=o[k];I<i&&(I=i),I>s&&(I=s);const N=(I-i)/f,z=Math.round(255*N),H=h[z];m.fillStyle=H,m.fillRect(C,D,1,1)}const b=m.getImageData(0,0,n,a);return await createImageBitmap(b)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},eu=class extends Fs{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Jt.createCursorLayerRoot(),this.center=Jt.createCursorLayerCenter(),this.axisX=Jt.createCursorLayerX(),this.axisY=Jt.createCursorLayerY(),this.label=Jt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(r*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},tu=class extends Fs{constructor(e){super(e);c(this,"container");this.container=Jt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},ru=class extends Fs{constructor(e,r){super(e);c(this,"container");c(this,"image");this._url=r,this.container=Jt.createVisibleLayer(),this._url&&(this.image=Jt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},me=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},iu=class{constructor(t,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,o)=>{const h=s[o];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},ra={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},su=class extends at{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new me);c(this,"callbacksPlay",new me);c(this,"callbacksPause",new me);c(this,"callbacksStop",new me);c(this,"callbacksEnd",new me);c(this,"callbacksChangeFrame",new me);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new iu(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return ra[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),kr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(h=>h.relative<=e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(h=>h.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},nu=class extends at{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},au=class extends at{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new me)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},ou=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},ol=class{constructor(t,e,r){c(this,"_selected",!1);c(this,"onSelected",new me);c(this,"onDeselected",new me);c(this,"onValues",new me);c(this,"onMoveOrResize",new me);c(this,"layerRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new me);c(this,"_initialColor");c(this,"onSetInitialColor",new me);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"_graphMinActive",!1);c(this,"_graphMaxActive",!1);c(this,"_graphAvgActive",!1);c(this,"onGraphActivation",new me);c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new me);this.key=t,this.file=e,this._initialColor=r,this.nameInitial=t,this._name=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}get initialColor(){return this._initialColor}setInitialColor(t){this._initialColor=t,this.onSetInitialColor.call(t),this.selected===!0&&this.setColor(t)}get graphMinActive(){return this._graphMinActive}get graphMaxActive(){return this._graphMaxActive}get graphAvgActive(){return this._graphAvgActive}emitGraphActivation(){this.onGraphActivation.call(this._graphMinActive,this._graphMaxActive,this._graphAvgActive)}get name(){return this._name}setName(t){this._name=t,this.onSetName.call(t)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},ll=class{constructor(t,e,r,i,s){c(this,"pxX");c(this,"_x");c(this,"onX",new me);c(this,"pxY");c(this,"_y");c(this,"onY",new me);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new me);c(this,"onMouseLeave",new me);c(this,"onActivate",new me);c(this,"onDeactivate",new me);this.key=t,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=r,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,a=this.y+r;return e>=i&&e<=s&&t>=n&&t<=a}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},bt,lu=(bt=class extends ll{constructor(r,i,s,n,a){super(r,i,s,n,a);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(r=1){return Math.round(bt.size*r).toString()+"px"}getPercentXTranslationFromValue(){return this.pxX/2}getPercentYTranslationFromValue(){return this.pxY/2}mayMoveToX(r){return r<=this.file.width&&r>=0}mayMoveToY(r){return r<=this.file.height&&r>=0}createInnerElement(){const r=document.createElement("div");return r.classList.add("innerElement"),r.style.position="absolute",r.style.top=bt.sizePx(-.5),r.style.left=bt.sizePx(-.5),r.style.width=bt.sizePx(),r.style.height=bt.sizePx(),r}buildAxisX(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="100%",r.style.height="1px",r.style.left="0px",r.style.top=bt.sizePx(.5),r}buildAxisY(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="1px",r.style.height="100%",r.style.left=bt.sizePx(.5),r.style.top="0px",r}buildCenter(){const r=document.createElement("div");r.style.position="absolute",r.style.top=`calc( ${bt.sizePx(.5)} - 3px )`,r.style.left=`calc( ${bt.sizePx(.5)} - 3px )`,r.style.width="5px",r.style.height="5px",r.style.borderStyle="solid",r.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(r.style.backgroundColor=i),r}onSetColor(r){this.axisX&&(this.axisX.style.backgroundColor=r),this.axisY&&(this.axisY.style.backgroundColor=r),this.center&&(this.center.style.borderColor=r)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(r=void 0){var i,s,n;if(r===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${r}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(bt,"size",20),bt),$r=class cl extends ol{constructor(r,i,s,n,a){super(r,s,i);c(this,"center");c(this,"_graph");this.top=n,this.left=a,this.width=1,this.height=1,this.center=new lu("center",n,a,this,i),this.points.set("center",this.center),this.center.projectInnerPositionToDom(),this.center.onX.set("update point",o=>{this.left=o}),this.center.onY.set("update point",o=>{this.top=o}),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new hl(this)),this._graph}static addAtPoint(r,i,s,n,a){return new cl(r,i,s,n,a)}setColorCallback(r){this.center.setColor(r)}isWithin(r,i){return this.center.isWithin(i,r)}getValues(){const r=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:r,max:r,avg:r}}async getAnalysisData(){return await this.file.service.pointAnalysisData(this.center.x,this.center.y)}setLeft(r){const i=Math.max(0,Math.min(this.file.width,Math.round(r)));this.center.x=i}setTop(r){const i=Math.max(0,Math.min(this.file.height,Math.round(r)));this.center.y=i}},hl=class{constructor(t){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new me);c(this,"onGraphData",new me);c(this,"onAnalysisSelection",new me);this.analysis=t,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(t){this._value=t,this.onGraphData.call(t,this.analysis)}setMinActivation(t){this._min!==t&&(this._min=t,this.emitGraphActivation())}setMaxActivation(t){this._max!==t&&(this._max=t,this.emitGraphActivation())}setAvgActivation(t){this._avg!==t&&(this._avg=t,this.emitGraphActivation())}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const r=await e.getAnalysisData();this.value=r});const t=await this.getGraphData();this.value=t}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof $r)return this._avg?[this.analysis.initialColor]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(this.analysis.initialColor)}),t}getGraphLabels(){if(this.analysis instanceof $r)return this._avg?[this.analysis.name]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(`${this.analysis.name} ${e}`)}),t}hasDataToPrint(){return this.analysis instanceof $r?this._avg:this._min||this._max||this._avg}getDtaAtTime(t){if(this.analysis instanceof $r)return this._avg?[this.value[t]]:[];const e=[],r=this.value;return this._min&&e.push(r[t].min),this._max&&e.push(r[t].max),this._avg&&e.push(r[t].avg),e}},cu=class extends ll{constructor(t,e,r,i,s){super(t,e,r,i,s),this._color=s,this.setColor(s)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},hu=class extends cu{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}getPercentXTranslationFromValue(e){return this.analysis.width+this.analysis.left===e?this.pxX:0}getPercentYTranslationFromValue(e){return this.analysis.height+this.analysis.top===e?this.pxY:0}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,r=>{e.x!==r&&(e.x=r)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,r=>{e.y!==r&&(e.y=r)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},dl=class extends ol{constructor(e,r,i,s,n,a,o){super(e,i,r);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let h=n,p=s;a!==void 0&&o!==void 0&&(h=n+a,p=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n),this.tr=this.addPoint("tr",s,h),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,h),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(m=>m.projectInnerPositionToDom())}get graph(){return this._graph||(this._graph=new hl(this)),this._graph}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(r,i),p=Math.max(r,i)-o,m=a-n;return{top:n,left:o,width:p,height:m}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,r=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=r-e,this.height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,r,i){const s=new hu(e,r,i,this,this.color);return this.points.set(e,s),s}setLeft(e){this.leftmostPoint.x=e}setRight(e){this.rightmostPoint.x=e}setTop(e){this.topmostPoint.y=e}setBottom(e){this.bottommostPoint.y=e}get leftmostPoint(){let e=this.tl;return this.points.forEach(r=>{r.x<e.x&&(e=r)}),e}get rightmostPoint(){let e=this.tr;return this.points.forEach(r=>{r.x>e.x&&(e=r)}),e}get topmostPoint(){let e=this.tl;return this.points.forEach(r=>{r.y<e.y&&(e=r)}),e}get bottommostPoint(){let e=this.br;return this.points.forEach(r=>{r.y>e.y&&(e=r)}),e}},ul=class{constructor(t,e,r,i,s){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=t,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},_o=class extends ul{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},$o=class gs extends dl{getType(){return"ellipsis"}static startAddingAtPoint(e,r,i,s,n){const a=new gs(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,o){const{top:h,left:p,width:m,height:f}=gs.calculateDimensionsFromCorners(s,n,a,o),b=new gs(e,r,i,h,p,m,f);return b.recalculateValues(),b}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new _o(this,e,r,e+i,r+s):new _o(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,h=0;for(let p=i;p<s;p++){const m=this.file.width*p;for(let f=e;f<=r;f++)if(this.isWithin(f,p)){const b=this.file.pixels[m+f];b<n&&(n=b),b>a&&(a=b),h+=b,o++}}return{min:n,max:a,avg:h/o}}isWithin(e,r){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(r-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.service.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},So=class extends ul{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},Co=class vs extends dl{getType(){return"rectangle"}static startAddingAtPoint(e,r,i,s,n){const a=new vs(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,o){const{top:h,left:p,width:m,height:f}=vs.calculateDimensionsFromCorners(s,n,a,o),b=new vs(e,r,i,h,p,m,f);return b.recalculateValues(),b}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new So(this,e,r,e+i,r+s):new So(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,h=0;for(let p=i;p<s;p++){const m=this.file.width*p;for(let f=e;f<=r;f++){const b=this.file.pixels[m+f];b<n&&(n=b),b>a&&(a=b),h+=b,o++}}return{min:n,max:a,avg:h/o}}async getAnalysisData(){return await this.file.service.rectAnalysisData(this.left,this.top,this.width,this.height)}},ys=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],du=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new me);c(this,"onRemove",new me);c(this,"onSelectionChange",new me);c(this,"colors",ys);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var r;this.has(e)&&((r=this.get(e))==null||r.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,r){const i=Co.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeRectAt(e,r,i,s,n,a){const o=Co.build(e,a??this.getNextColor(),this.drive.parent,r,i,s,n);return o.ready=!0,this.addAnalysis(o),o}createEllipsisFrom(e,r){const i=$o.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeEllipsisAt(e,r,i,s,n,a){const o=$o.build(e,a??this.getNextColor(),this.drive.parent,r,i,s,n);return o.ready=!0,this.addAnalysis(o),o}createPointAt(e,r){const i=$r.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placePointAt(e,r,i,s){const n=$r.addAtPoint(e,s??this.getNextColor(),this.drive.parent,r,i);return n.ready=!0,this.addAnalysis(n),n}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),r=ys.filter(i=>!e.includes(i));return r.length>0?r[0]:ys[0]}getNextName(e){return`${e} ${this.all.length}`}},uu=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...r,...s]},[])}},pu=class extends at{constructor(){super(...arguments);c(this,"layers",new du(this));c(this,"points",new uu(this));c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const r=this.listenerLayerContainer.clientWidth,i=this.parent.width,n=e.layerX/r,a=Math.round(i*n),o=this.listenerLayerContainer.clientHeight,h=this.parent.height,m=e.layerY/o;return{top:Math.round(h*m),left:a}}activateListeners(){this.bindedPointerMoveListener=e=>{const r=this.getRelativePosition(e);this.points.all.forEach(i=>{i.active&&this.currentTool.onPointMove(i,r.top,r.left);const s=i.isWithin(r.top,r.left);s?this.currentTool.onPointEnter(i):s||this.currentTool.onPointLeave(i)})},this.bindedPointerDownListener=e=>{const r=this.getRelativePosition(e);this.currentTool.onCanvasClick(r.top,r.left,this.parent),this.points.all.forEach(i=>{i.isWithin(r.top,r.left)&&this.currentTool.onPointDown(i)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},fu=class{constructor(t){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new me);c(this,"onAddGraph",new me);c(this,"onRemoveGraph",new me);this.drive=t,this.layers.onAdd.set(this.listenerKey,async e=>{const r=e.graph;this.addGraph(r),r.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),r.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(t){this._graphs.set(t.analysis.key,t),this.onAddGraph.call(t)}removeGraph(t){this._graphs.delete(t),this.onRemoveGraph.call(t)}get output(){return this._output}set output(t){this._output=t,this.onOutput.call(t)}refreshOutput(){const t={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{t.values[0].push(...e.getGraphLabels()),t.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((r,i)=>{let s=t.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(r)),s=[a],t.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(r)))})}),this.output=t,t}hasGraph(){return Object.values(this.graphs).find(t=>t.hasDataToPrint()).length>0}generateExportData(){const t={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const r of this.graphs.values()){const i=r.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${r.analysis.initialColor}, ${r.analysis.width} x ${r.analysis.height} px)`});r.value&&Object.keys(r.value).forEach(s=>{if(!Object.keys(t).includes(s)){const a=parseInt(s),o=a+r.analysis.file.timestamp;t[s]={[e[0].key]:kr(a,"m:ss:SSS")+" ",[e[1].key]:kr(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=r.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{t[s][a]=n[o]})})}return{header:e,data:Object.values(t)}}},mu=class extends at{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new me);c(this,"listeners",new fu(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async r=>{this.value=r,r.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:r}=this.listeners.generateExportData(),i=Ms({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:r}),s=Ud(i)(e);Fd(i)(s)}},pl=class fl extends Qd{constructor(r,i,s,n,a,o,h,p,m,f,b,$,C,D,k,I,U){super(r,i.thermalUrl,s,n,m,a,h,b,$,o,i.visibleUrl);c(this,"_export");this.group=r,this.service=i,this.width=s,this.height=n,this.timestamp=a,this.frameCount=o,this.duration=h,this.frameInterval=p,this.fps=f,this.min=b,this.max=$,this.bytesize=C,this.averageEmissivity=D,this.averageReflectedKelvins=k,this.firstFrame=I,this.timelineData=U,this.pixels=I.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new ou(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new Jd(this),this.visibleLayer=new ru(this,this.visibleUrl),this.cursorLayer=new eu(this),this.listenerLayer=new tu(this),this.cursorValue=new nu(this,void 0),this.timeline=new su(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new au(this,!1),this.analysis=new pu(this,[]),this.analysisData=new mu(this),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}this.analysis.value.forEach(i=>i.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new fl(r,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=r=>{this.cursorLayer.show=!0,this.isHover=!0;const i=this.width,s=this.root.clientWidth,n=i/s,a=Math.round(r.offsetX*n),o=Math.round(r.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:a,y:o})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(r){if(r!==void 0){const i=this.group.tool.value.getLabelValue(r.x,r.y,this);this.cursorLayer.setLabel(r.x,r.y,i),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(r)}},gu=class extends at{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},vu=class extends al{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},js=class{constructor(t){c(this,"active",!1);this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},ml=class extends js{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>i===void 0?"":i.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},ia=class extends js{},yu=class extends ia{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag on the thermogram to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},bu=class extends ia{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click on the thermogram to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createPointAt(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis)}onPointMove(){}onPointLeave(){}onPointEnter(){}},wu=class extends ia{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag on the thermogram to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},xu=class extends js{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,r,i){const s=i.getTemperatureAtPoint(e,r),n=i.analysis.layers.all.filter(o=>o.isWithin(e,r)).map(o=>o.selected?`<span style="color:${o.initialColor}">${o.name}</span>`:`<s style="color:${o.initialColor}">${o.name}</s>`);return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${r}`}},_u=[ml,bu,wu,yu,xu],$u=t=>{const e=_u.map(r=>{const i=new r(t);return[i.key,i]});return Object.fromEntries(e)},Su=class extends at{constructor(e,r){super(e,r);c(this,"_tools",$u(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof js?this.value=e:this.value=this.tools[e]}},Cu=class extends Is{constructor(e,r,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new vu(this,void 0));c(this,"tool",new Su(this,new ml(this)));c(this,"files",new gu(this,[]));c(this,"cursorPosition",new zd(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},gl=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},_s=class vl extends gl{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new vl(e.url,e.code,e.message)}},yl=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Qr=class extends gl{constructor(e,r,i,s,n){super(s,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async pointAnalysisData(e,r){return await this.parser.pointAnalysisData(this.buffer,e,r)}async rectAnalysisData(e,r,i,s){return await this.parser.rectAnalysisData(this.buffer,e,r,i,s)}async ellipsisAnalysisData(e,r,i,s){return await this.parser.ellipsisAnalysisData(this.buffer,e,r,i,s)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),s=pl.fromService(e,this,r,i);return e.files.addFile(s),s}},ku=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(G,K)=>{const ce=G.getBigInt64(K,!0),q=62135596800000n,ie=10000n,se=24n*60n*60n*1000n*ie,de=0x4000000000000000n,Te=0x8000000000000000n;let Ue=ce&0x3fffffffffffffffn;ce&Te&&(Ue>de-se&&(Ue-=de),Ue<0&&(Ue+=se));const _t=Ue/ie-q;return Number(_t)},a=n(e,5),o=e.getUint8(15);let h=2;o===1&&(h=4);const p=57,m=r*i*h,f=p+m,b=t.slice(25),$=b.byteLength/f,C=G=>{const K=G*f,ce=K+f,q=b.slice(K,ce),ie=new DataView(q),se=ie.getFloat32(8,!0),de=ie.getFloat32(12,!0),Te=n(ie,0),Ne=ie.getFloat32(24,!0),Ue=ie.getFloat32(28,!0);return{timestamp:Te,min:se,max:de,emissivity:Ne,reflectedKelvins:Ue}},D=[];for(let G=0;G<$;G++){const K=C(G);D.push(K)}const k={emissivity:0,reflectedKelvins:0};let I=1/0,U=-1/0;const N=[];D.forEach(G=>{k.emissivity=k.emissivity+G.emissivity,k.reflectedKelvins=k.reflectedKelvins+G.reflectedKelvins,G.min<I&&(I=G.min),G.max>U&&(U=G.max),N.push(G.timestamp)});const z=N[0],H=[];N.forEach((G,K)=>{const ce=N[K+1];let q=0;ce===void 0&&(q=0),q=ce-G;const ie=G-z;H.push({absolute:G,relative:ie,offset:isNaN(q)?0:q,index:K})});const le=D[D.length-1].timestamp-D[0].timestamp,E=le/$,Y=1e3/E;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:$,duration:le,frameInterval:E,fps:Y,timeline:H,min:I,max:U,averageEmissivity:k.emissivity/D.length,averageReflectedKelvins:k.reflectedKelvins/D.length}},Pu=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),a=i===1?4:2,o=57,h=s*n*a,p=o+h,m=t.slice(25),f=e*p,b=f+p;return{array:m.slice(f,b),dataType:i}},Au=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,h=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&h&&(m>o-a&&(m-=o),m<0&&(m+=a));const b=m/n-s,$=Number(b),C=r.getFloat32(8,!0),D=r.getFloat32(12,!0),k=r.getFloat32(24,!0),I=r.getFloat32(28,!0),U=t.slice(57);let N=[];if(e===0){const z=new Uint16Array(U),H=Math.abs(C-D),le=65535;z.forEach(E=>{const Y=E/le;N.push(C+H*Y)})}else e===1&&(N=Array.from(new Float32Array(U)));return{timestamp:$,min:C,max:D,emissivity:k,reflectedKelvins:I,pixels:N}},Ou=async(t,e,r)=>{const i=new DataView(t),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(I,U)=>{const N=I.getBigInt64(U,!0),z=62135596800000n,H=10000n,le=24n*60n*60n*1000n*H,E=0x4000000000000000n,Y=0x8000000000000000n;let K=N&0x3fffffffffffffffn;N&Y&&(K>E-le&&(K-=E),K<0&&(K+=le));const q=K/H-z;return Number(q)},o=i.getUint8(15);let h=2;o===1&&(h=4);const p=57,m=s*n*h,f=p+m,b=t.slice(25),$=b.byteLength/f,C={},D=I=>{const U=I*f,N=U+f,z=b.slice(U,N),H=new DataView(z),le=a(H,0),E=H.getFloat32(8,!0),G=H.getFloat32(12,!0)-E,ce=57+r*h*s+e*h;let q=0;if(o===1)q=H.getFloat32(ce,!0);else if(o===0){console.log("jsem uvnitř varia");const de=H.getInt16(ce,!0)/65535;q=E+G*de}return{timestamp:le,temperature:q}};let k=0;for(let I=0;I<$;I++){const U=D(I);k===0&&(k=U.timestamp),C[U.timestamp-k]=U.temperature}return C},Du=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),o=n.getUint16(19,!0),h=(N,z)=>{const H=N.getBigInt64(z,!0),le=62135596800000n,E=10000n,Y=24n*60n*60n*1000n*E,G=0x4000000000000000n,K=0x8000000000000000n;let q=H&0x3fffffffffffffffn;H&K&&(q>G-Y&&(q-=G),q<0&&(q+=Y));const se=q/E-le;return Number(se)},p=n.getUint8(15);let m=2;p===1&&(m=4);const f=57,b=a*o*m,$=f+b,C=t.slice(25),D=C.byteLength/$,k={},I=N=>{const z=N*$,H=z+$,le=C.slice(z,H),E=new DataView(le),Y=h(E,0),G=E.getFloat32(8,!0),ce=E.getFloat32(12,!0)-G,q=57,ie=e,se=e+i,de=r,Te=r+s;let Ne=1/0,Ue=-1/0,xt=0,_t=0;for(let qt=de;qt<=Te;qt++){const Xt=qt*a;for(let Kt=ie;Kt<=se;Kt++){const Wt=q+(Xt+Kt)*m;let Ie=NaN;if(p===1)Ie=E.getFloat32(Wt,!0);else{const ft=E.getInt16(Wt,!0)/65535;Ie=G+ce*ft}Ie<Ne&&(Ne=Ie),Ie>Ue&&(Ue=Ie),_t+=Ie,xt++}}const lr={min:Ne,max:Ue,avg:_t/xt,count:xt};return{timestamp:Y,result:lr}};let U=0;for(let N=0;N<D;N++){const z=I(N);U===0&&(U=z.timestamp),k[z.timestamp-U]=z.result}return k},Eu=async t=>{let e=[];const r=async k=>{const I=new DataView(k.slice(0,25)),U=I.getUint8(15),N=I.getUint16(17,!0),z=I.getUint16(19,!0),H=U===1?4:2,le=57,E=N*z*H,Y=le+E,G=k.slice(25),K=G.byteLength/Y;let ce=[];for(let q=0;q<K;q++){const se=q*Y+57,de=se+E,Te=G.slice(se,de);U===0||U===1&&(ce=ce.concat(Array.from(new Float32Array(Te))))}return ce};(await Promise.all(t.map(k=>r(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,I)=>k-I);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,h=a/o,p=[];let m=[...e];for(let k=0;k<o;k++){const I=s+h*k,U=I+h,N=m.findIndex(Y=>Y>U),H=m.slice(0,N-1).length,le=H/e.length*100,E={from:I,to:U,count:H,percentage:le};p.push(E),m=m.slice(N)}const f=[...p].sort((k,I)=>k.percentage-I.percentage),b=f[0].percentage,$=f[f.length-1].percentage,C=Math.abs(b-$);return p.map(k=>({...k,height:k.percentage/C*100}))},Tu=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},Lu=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),o=n.getUint16(19,!0),h=(z,H)=>{const le=z.getBigInt64(H,!0),E=62135596800000n,Y=10000n,G=24n*60n*60n*1000n*Y,K=0x4000000000000000n,ce=0x8000000000000000n;let ie=le&0x3fffffffffffffffn;le&ce&&(ie>K-G&&(ie-=K),ie<0&&(ie+=G));const de=ie/Y-E;return Number(de)},p=n.getUint8(15);let m=2;p===1&&(m=4);const f=57,b=a*o*m,$=f+b,C=t.slice(25),D=C.byteLength/$,k={},I=(z,H)=>{const le=e+i/2,E=r+s/2,Y=(z-le)/(i/2),G=(H-E)/(s/2);return Y*Y+G*G<=1},U=z=>{const H=z*$,le=H+$,E=C.slice(H,le),Y=new DataView(E),G=h(Y,0),K=Y.getFloat32(8,!0),q=Y.getFloat32(12,!0)-K,ie=57,se=e,de=e+i,Te=r,Ne=r+s;let Ue=1/0,xt=-1/0,_t=0,lr=0;for(let Xt=Te;Xt<=Ne;Xt++){const Kt=Xt*a;for(let Wt=se;Wt<=de;Wt++)if(I(Wt,Xt)){const Ie=ie+(Kt+Wt)*m;let it=NaN;if(p===1)it=Y.getFloat32(Ie,!0);else{const Fe=Y.getInt16(Ie,!0)/65535;it=K+q*Fe}it<Ue&&(Ue=it),it>xt&&(xt=it),lr+=it,_t++}}const qt={min:Ue,max:xt,avg:lr/_t,count:_t};return{timestamp:G,result:qt}};let N=0;for(let z=0;z<D;z++){const H=U(z);N===0&&(N=H.timestamp),k[H.timestamp-N]=H.result}return k},Ru=[{extension:"lrc",minme:"application/octet-stream"}],Mu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Ru,is:Tu,baseInfo:ku,getFrameSubset:Pu,frameData:Au,registryHistogram:Eu,pointAnalysisData:Ou,rectAnalysisData:Du,ellipsisAnalysisData:Lu},bl=Object.freeze(Mu),Uu={LrcParser:bl},wl=Object.values(Uu),xl=(t,e)=>{const r=wl.find(i=>i.is(t,e));if(r===void 0)throw new yl(2,e,`No parser found for '${e}'.`);return r},_l=wl.map(t=>t.extensions),Iu=_l.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Fu=class $l{constructor(e,r,i){c(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new $l(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new _s(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=xl(i,this.thermalUrl);return this.pocessTheService(new Qr(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof yl)return this.pocessTheService(_s.fromError(s));throw s}}pocessTheService(e){return e}},ju=class Sl{constructor(e,r){c(this,"_hover",!1);c(this,"onMouseEnter",new me);c(this,"onMouseLeave",new me);c(this,"onDrop",new me);c(this,"onProcessingEnd",new me);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const i=new Sl(e,r);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const i=r.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Iu,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},Wu=class{constructor(t){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new sa(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=xl(e,t.name);return new Qr(this,e,r,t.name)}catch(e){return new _s(t.name,3,e.message)}}handleDropzone(t){return ju.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=Fu.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},Nu=class extends at{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},Hu=class extends at{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new Cu(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Bu=class extends at{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,a)=>{let h=r.reduce(($,C)=>{const D=C.reduce((k,I)=>[...k,...I],[]);return[...$,...D]},[]).sort(($,C)=>$-C);const p=n/a;let m=i+p;const f=new Map;let b=0;for(;m!==!1;){const $=h.findIndex(k=>k>m),C=h.slice(0,$).length;f.set(m-p/2,C),b+=C,h=h.slice($);const D=m+p;m=D<s?D:!1}return{result:f,resultCount:b}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(bl.registryHistogram,[r]);this.value=i}},zu=class extends at{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Vu=class extends al{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Yu=class extends Is{constructor(e,r,i){super();c(this,"hash",Math.random());c(this,"groups",new Hu(this,[]));c(this,"opacity",new Nu(this,1));c(this,"minmax",new Vu(this,void 0));c(this,"loading",new zu(this,!1));c(this,"range",new Vd(this,void 0));c(this,"histogram",new Bu(this,[]));c(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof Qr?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Qr&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Gu=class extends at{validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>e.forEveryInstance(r=>{r.canvasLayer.canvas.style.imageRendering=t===!0?"auto":"pixelated"}))}setSmooth(t){this.value=t}},qu=class extends at{validate(t){return t}afterSetEffect(){}setGraphSmooth(t){this.value=t}},sa=class extends Is{constructor(e,r){super();c(this,"id");c(this,"service",new Wu(this));c(this,"registries",{});c(this,"palette",new Kd(this,"jet"));c(this,"smooth",new Gu(this,!1));c(this,"graphSmooth",new qu(this,!1));c(this,"pool");this.pool=e||Bd.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Yu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}},Xu=Object.defineProperty,Ot=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Xu(e,r,s),s};const ko=["ready","select"],Ku={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"},Ea=class Ea extends Qe{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new me,this.left=0,this.top=0,this.w=0,this.h=0}render(){return y`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){dh(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.onWrapper.call(e),this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(ko,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Ku[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(s=>!ko.includes(s)),r);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,r){for(const i of e)google.visualization.events.addListener(r,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const e=this.chartWrapper.visualization.ha.O;this.left=e.left,this.top=e.top,this.w=e.width,this.h=e.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const i=await po({cols:r});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,r;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?r=fetch(e).then(s=>s.json()):r=Promise.resolve(e),r.then(po).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of r){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}};Ea.styles=pe`
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
  `;let ht=Ea;Ot([g({type:String,reflect:!0})],ht.prototype,"type");Ot([g({type:Array})],ht.prototype,"events");Ot([g({type:Object,hasChanged:()=>!0})],ht.prototype,"options");Ot([g({type:Array})],ht.prototype,"cols");Ot([g({type:Array})],ht.prototype,"rows");Ot([g({type:String})],ht.prototype,"data");Ot([g({type:Object})],ht.prototype,"view");Ot([g({type:Array})],ht.prototype,"selection");Ot([g({type:Object})],ht.prototype,"_data");Ot([g({type:Number,reflect:!0})],ht.prototype,"left");Ot([g({type:Number,reflect:!0})],ht.prototype,"top");Ot([g({type:Number,reflect:!0})],ht.prototype,"w");Ot([g({type:Number,reflect:!0})],ht.prototype,"h");customElements.define("thermal-chart",ht);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zu=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const na={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ws=t=>(...e)=>({_$litDirective$:t,values:e});let aa=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),Si(s,e);return!0},$s=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Cl=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),ep(e)}};function Qu(t){this._$AN!==void 0?($s(this),this._$AM=t,Cl(this)):this._$AM=t}function Ju(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)Si(i[n],!1),$s(i[n]);else i!=null&&(Si(i,!1),$s(i));else Si(this,t)}const ep=t=>{t.type==na.CHILD&&(t._$AP??(t._$AP=Ju),t._$AQ??(t._$AQ=Qu))};class tp extends aa{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Cl(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(Si(this,e),$s(this))}setValue(e){if(Zu(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=()=>new rp;class rp{}const Mn=new WeakMap,je=Ws(class extends tp{render(t){return W}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),W}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=Mn.get(e);r===void 0&&(r=new WeakMap,Mn.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Mn.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ip=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,kl=(t,e,r,i)=>{for(var s=i>1?void 0:i?sp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ip(e,r,s),s};let Ai=class extends Qe{constructor(){super(),this.dialogRef=Me(),this.closeButtonRef=Me(),this.invokerRef=Me()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return y`
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
        `}};Ai.shadowRootOptions={...Qe.shadowRootOptions,mode:"open"};Ai.styles=pe`

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

        
    
    `;kl([g({type:String,reflect:!0})],Ai.prototype,"label",2);Ai=kl([Z("thermal-dialog")],Ai);var np=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,Ns=(t,e,r,i)=>{for(var s=i>1?void 0:i?ap(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&np(e,r,s),s};let hr=class extends Qe{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return y`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};hr.VARIANTS=["slate","primary","foreground","background"];hr.shadowRootOptions={...Qe.shadowRootOptions,mode:"open"};hr.styles=pe`

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
    
    `;Ns([g({type:String,converter:{fromAttribute:t=>hr.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],hr.prototype,"variant",2);Ns([g({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],hr.prototype,"interactive",2);Ns([g({type:String})],hr.prototype,"size",2);hr=Ns([Z("thermal-button")],hr);const Jr=Math.min,cr=Math.max,Ss=Math.round,Pr=t=>({x:t,y:t}),op={left:"right",right:"left",bottom:"top",top:"bottom"},lp={start:"end",end:"start"};function Po(t,e,r){return cr(t,Jr(e,r))}function Ni(t,e){return typeof t=="function"?t(e):t}function dr(t){return t.split("-")[0]}function Hs(t){return t.split("-")[1]}function Pl(t){return t==="x"?"y":"x"}function Al(t){return t==="y"?"height":"width"}function Hi(t){return["top","bottom"].includes(dr(t))?"y":"x"}function Ol(t){return Pl(Hi(t))}function cp(t,e,r){r===void 0&&(r=!1);const i=Hs(t),s=Ol(t),n=Al(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Cs(a)),[a,Cs(a)]}function hp(t){const e=Cs(t);return[Hn(t),e,Hn(e)]}function Hn(t){return t.replace(/start|end/g,e=>lp[e])}function dp(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function up(t,e,r,i){const s=Hs(t);let n=dp(dr(t),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Hn)))),n}function Cs(t){return t.replace(/left|right|bottom|top/g,e=>op[e])}function pp(t){return{top:0,right:0,bottom:0,left:0,...t}}function Dl(t){return typeof t!="number"?pp(t):{top:t,right:t,bottom:t,left:t}}function ei(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Ao(t,e,r){let{reference:i,floating:s}=t;const n=Hi(e),a=Ol(e),o=Al(a),h=dr(e),p=n==="y",m=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,b=i[o]/2-s[o]/2;let $;switch(h){case"top":$={x:m,y:i.y-s.height};break;case"bottom":$={x:m,y:i.y+i.height};break;case"right":$={x:i.x+i.width,y:f};break;case"left":$={x:i.x-s.width,y:f};break;default:$={x:i.x,y:i.y}}switch(Hs(e)){case"start":$[a]-=b*(r&&p?-1:1);break;case"end":$[a]+=b*(r&&p?-1:1);break}return $}const fp=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,o=n.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:m,y:f}=Ao(p,i,h),b=i,$={},C=0;for(let D=0;D<o.length;D++){const{name:k,fn:I}=o[D],{x:U,y:N,data:z,reset:H}=await I({x:m,y:f,initialPlacement:i,placement:b,strategy:s,middlewareData:$,rects:p,platform:a,elements:{reference:t,floating:e}});m=U??m,f=N??f,$={...$,[k]:{...$[k],...z}},H&&C<=50&&(C++,typeof H=="object"&&(H.placement&&(b=H.placement),H.rects&&(p=H.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):H.rects),{x:m,y:f}=Ao(p,b,h)),D=-1)}return{x:m,y:f,placement:b,strategy:s,middlewareData:$}};async function El(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:h}=t,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:b=!1,padding:$=0}=Ni(e,t),C=Dl($),k=o[b?f==="floating"?"reference":"floating":f],I=ei(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(k)))==null||r?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:p,rootBoundary:m,strategy:h})),U=f==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,N=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),z=await(n.isElement==null?void 0:n.isElement(N))?await(n.getScale==null?void 0:n.getScale(N))||{x:1,y:1}:{x:1,y:1},H=ei(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:U,offsetParent:N,strategy:h}):U);return{top:(I.top-H.top+C.top)/z.y,bottom:(H.bottom-I.bottom+C.bottom)/z.y,left:(I.left-H.left+C.left)/z.x,right:(H.right-I.right+C.right)/z.x}}const mp=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:h,elements:p}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:b,fallbackStrategy:$="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:D=!0,...k}=Ni(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const I=dr(s),U=dr(o)===o,N=await(h.isRTL==null?void 0:h.isRTL(p.floating)),z=b||(U||!D?[Cs(o)]:hp(o));!b&&C!=="none"&&z.push(...up(o,D,C,N));const H=[o,...z],le=await El(e,k),E=[];let Y=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&E.push(le[I]),f){const q=cp(s,a,N);E.push(le[q[0]],le[q[1]])}if(Y=[...Y,{placement:s,overflows:E}],!E.every(q=>q<=0)){var G,K;const q=(((G=n.flip)==null?void 0:G.index)||0)+1,ie=H[q];if(ie)return{data:{index:q,overflows:Y},reset:{placement:ie}};let se=(K=Y.filter(de=>de.overflows[0]<=0).sort((de,Te)=>de.overflows[1]-Te.overflows[1])[0])==null?void 0:K.placement;if(!se)switch($){case"bestFit":{var ce;const de=(ce=Y.map(Te=>[Te.placement,Te.overflows.filter(Ne=>Ne>0).reduce((Ne,Ue)=>Ne+Ue,0)]).sort((Te,Ne)=>Te[1]-Ne[1])[0])==null?void 0:ce[0];de&&(se=de);break}case"initialPlacement":se=o;break}if(s!==se)return{reset:{placement:se}}}return{}}}};function Tl(t){const e=Jr(...t.map(n=>n.left)),r=Jr(...t.map(n=>n.top)),i=cr(...t.map(n=>n.right)),s=cr(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function gp(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>ei(Tl(s)))}const vp=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:h,y:p}=Ni(t,e),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=gp(m),b=ei(Tl(m)),$=Dl(o);function C(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&p!=null)return f.find(k=>h>k.left-$.left&&h<k.right+$.right&&p>k.top-$.top&&p<k.bottom+$.bottom)||b;if(f.length>=2){if(Hi(r)==="y"){const K=f[0],ce=f[f.length-1],q=dr(r)==="top",ie=K.top,se=ce.bottom,de=q?K.left:ce.left,Te=q?K.right:ce.right,Ne=Te-de,Ue=se-ie;return{top:ie,bottom:se,left:de,right:Te,width:Ne,height:Ue,x:de,y:ie}}const k=dr(r)==="left",I=cr(...f.map(K=>K.right)),U=Jr(...f.map(K=>K.left)),N=f.filter(K=>k?K.left===U:K.right===I),z=N[0].top,H=N[N.length-1].bottom,le=U,E=I,Y=E-le,G=H-z;return{top:z,bottom:H,left:le,right:E,width:Y,height:G,x:le,y:z}}return b}const D=await n.getElementRects({reference:{getBoundingClientRect:C},floating:i.floating,strategy:a});return s.reference.x!==D.reference.x||s.reference.y!==D.reference.y||s.reference.width!==D.reference.width||s.reference.height!==D.reference.height?{reset:{rects:D}}:{}}}};async function yp(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=dr(r),o=Hs(r),h=Hi(r)==="y",p=["left","top"].includes(a)?-1:1,m=n&&h?-1:1,f=Ni(e,t);let{mainAxis:b,crossAxis:$,alignmentAxis:C}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return o&&typeof C=="number"&&($=o==="end"?C*-1:C),h?{x:$*m,y:b*p}:{x:b*p,y:$*m}}const bp=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:o}=e,h=await yp(e,t);return a===((r=o.offset)==null?void 0:r.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:a}}}}},wp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:k=>{let{x:I,y:U}=k;return{x:I,y:U}}},...h}=Ni(t,e),p={x:r,y:i},m=await El(e,h),f=Hi(dr(s)),b=Pl(f);let $=p[b],C=p[f];if(n){const k=b==="y"?"top":"left",I=b==="y"?"bottom":"right",U=$+m[k],N=$-m[I];$=Po(U,$,N)}if(a){const k=f==="y"?"top":"left",I=f==="y"?"bottom":"right",U=C+m[k],N=C-m[I];C=Po(U,C,N)}const D=o.fn({...e,[b]:$,[f]:C});return{...D,data:{x:D.x-r,y:D.y-i}}}}};function hi(t){return Ll(t)?(t.nodeName||"").toLowerCase():"#document"}function St(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Er(t){var e;return(e=(Ll(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ll(t){return t instanceof Node||t instanceof St(t).Node}function tr(t){return t instanceof Element||t instanceof St(t).Element}function rr(t){return t instanceof HTMLElement||t instanceof St(t).HTMLElement}function Oo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof St(t).ShadowRoot}function Bi(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=Ht(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function xp(t){return["table","td","th"].includes(hi(t))}function Bs(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function oa(t){const e=la(),r=Ht(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function _p(t){let e=Ar(t);for(;rr(e)&&!ti(e);){if(Bs(e))return null;if(oa(e))return e;e=Ar(e)}return null}function la(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ti(t){return["html","body","#document"].includes(hi(t))}function Ht(t){return St(t).getComputedStyle(t)}function zs(t){return tr(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Ar(t){if(hi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Oo(t)&&t.host||Er(t);return Oo(e)?e.host:e}function Rl(t){const e=Ar(t);return ti(e)?t.ownerDocument?t.ownerDocument.body:t.body:rr(e)&&Bi(e)?e:Rl(e)}function Bn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Rl(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),a=St(s);return n?e.concat(a,a.visualViewport||[],Bi(s)?s:[],a.frameElement&&r?Bn(a.frameElement):[]):e.concat(s,Bn(s,[],r))}function Ml(t){const e=Ht(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=rr(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,o=Ss(r)!==n||Ss(i)!==a;return o&&(r=n,i=a),{width:r,height:i,$:o}}function Ul(t){return tr(t)?t:t.contextElement}function Xr(t){const e=Ul(t);if(!rr(e))return Pr(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=Ml(e);let a=(n?Ss(r.width):r.width)/i,o=(n?Ss(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const $p=Pr(0);function Il(t){const e=St(t);return!la()||!e.visualViewport?$p:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Sp(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==St(t)?!1:e}function Oi(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=Ul(t);let a=Pr(1);e&&(i?tr(i)&&(a=Xr(i)):a=Xr(t));const o=Sp(n,r,i)?Il(n):Pr(0);let h=(s.left+o.x)/a.x,p=(s.top+o.y)/a.y,m=s.width/a.x,f=s.height/a.y;if(n){const b=St(n),$=i&&tr(i)?St(i):i;let C=b,D=C.frameElement;for(;D&&i&&$!==C;){const k=Xr(D),I=D.getBoundingClientRect(),U=Ht(D),N=I.left+(D.clientLeft+parseFloat(U.paddingLeft))*k.x,z=I.top+(D.clientTop+parseFloat(U.paddingTop))*k.y;h*=k.x,p*=k.y,m*=k.x,f*=k.y,h+=N,p+=z,C=St(D),D=C.frameElement}}return ei({width:m,height:f,x:h,y:p})}function Cp(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",a=Er(i),o=e?Bs(e.floating):!1;if(i===a||o&&n)return r;let h={scrollLeft:0,scrollTop:0},p=Pr(1);const m=Pr(0),f=rr(i);if((f||!f&&!n)&&((hi(i)!=="body"||Bi(a))&&(h=zs(i)),rr(i))){const b=Oi(i);p=Xr(i),m.x=b.x+i.clientLeft,m.y=b.y+i.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+m.x,y:r.y*p.y-h.scrollTop*p.y+m.y}}function kp(t){return Array.from(t.getClientRects())}function Fl(t){return Oi(Er(t)).left+zs(t).scrollLeft}function Pp(t){const e=Er(t),r=zs(t),i=t.ownerDocument.body,s=cr(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=cr(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+Fl(t);const o=-r.scrollTop;return Ht(i).direction==="rtl"&&(a+=cr(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function Ap(t,e){const r=St(t),i=Er(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,h=0;if(s){n=s.width,a=s.height;const p=la();(!p||p&&e==="fixed")&&(o=s.offsetLeft,h=s.offsetTop)}return{width:n,height:a,x:o,y:h}}function Op(t,e){const r=Oi(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=rr(t)?Xr(t):Pr(1),a=t.clientWidth*n.x,o=t.clientHeight*n.y,h=s*n.x,p=i*n.y;return{width:a,height:o,x:h,y:p}}function Do(t,e,r){let i;if(e==="viewport")i=Ap(t,r);else if(e==="document")i=Pp(Er(t));else if(tr(e))i=Op(e,r);else{const s=Il(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return ei(i)}function jl(t,e){const r=Ar(t);return r===e||!tr(r)||ti(r)?!1:Ht(r).position==="fixed"||jl(r,e)}function Dp(t,e){const r=e.get(t);if(r)return r;let i=Bn(t,[],!1).filter(o=>tr(o)&&hi(o)!=="body"),s=null;const n=Ht(t).position==="fixed";let a=n?Ar(t):t;for(;tr(a)&&!ti(a);){const o=Ht(a),h=oa(a);!h&&o.position==="fixed"&&(s=null),(n?!h&&!s:!h&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Bi(a)&&!h&&jl(t,a))?i=i.filter(m=>m!==a):s=o,a=Ar(a)}return e.set(t,i),i}function Ep(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const a=[...r==="clippingAncestors"?Bs(e)?[]:Dp(e,this._c):[].concat(r),i],o=a[0],h=a.reduce((p,m)=>{const f=Do(e,m,s);return p.top=cr(f.top,p.top),p.right=Jr(f.right,p.right),p.bottom=Jr(f.bottom,p.bottom),p.left=cr(f.left,p.left),p},Do(e,o,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function Tp(t){const{width:e,height:r}=Ml(t);return{width:e,height:r}}function Lp(t,e,r){const i=rr(e),s=Er(e),n=r==="fixed",a=Oi(t,!0,n,e);let o={scrollLeft:0,scrollTop:0};const h=Pr(0);if(i||!i&&!n)if((hi(e)!=="body"||Bi(s))&&(o=zs(e)),i){const f=Oi(e,!0,n,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else s&&(h.x=Fl(s));const p=a.left+o.scrollLeft-h.x,m=a.top+o.scrollTop-h.y;return{x:p,y:m,width:a.width,height:a.height}}function Un(t){return Ht(t).position==="static"}function Eo(t,e){return!rr(t)||Ht(t).position==="fixed"?null:e?e(t):t.offsetParent}function Wl(t,e){const r=St(t);if(Bs(t))return r;if(!rr(t)){let s=Ar(t);for(;s&&!ti(s);){if(tr(s)&&!Un(s))return s;s=Ar(s)}return r}let i=Eo(t,e);for(;i&&xp(i)&&Un(i);)i=Eo(i,e);return i&&ti(i)&&Un(i)&&!oa(i)?r:i||_p(t)||r}const Rp=async function(t){const e=this.getOffsetParent||Wl,r=this.getDimensions,i=await r(t.floating);return{reference:Lp(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Mp(t){return Ht(t).direction==="rtl"}const Up={convertOffsetParentRelativeRectToViewportRelativeRect:Cp,getDocumentElement:Er,getClippingRect:Ep,getOffsetParent:Wl,getElementRects:Rp,getClientRects:kp,getDimensions:Tp,getScale:Xr,isElement:tr,isRTL:Mp},Ip=bp,Fp=wp,jp=mp,Wp=vp,Np=(t,e,r)=>{const i=new Map,s={platform:Up,...r},n={...s.platform,_c:i};return fp(t,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=Ws(class extends aa{constructor(t){var e;if(super(t),t.type!==na.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Cr}});var Hp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,zi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Hp(e,r,s),s};let ur=class extends Qe{constructor(){super(...arguments),this.dropdownRef=Me(),this.invokerRef=Me(),this.optionsRef=Me(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Np(this.invokerRef.value,this.optionsRef.value,{middleware:[Ip(2),jp(),Wp(),Fp()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return y`

            <div class="dropdown" ${je(this.dropdownRef)}>

                <thermal-button class="${er(t)}" ${je(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?y`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:y`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};ur.shadowRootOptions={...Qe.shadowRootOptions,mode:"open"};ur.styles=pe`

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
    
    `;zi([Wi({slot:"option"})],ur.prototype,"_options",2);zi([g({type:String,reflect:!0})],ur.prototype,"open",2);zi([g({type:String,reflect:!0,attribute:!0}),x()],ur.prototype,"interactive",2);zi([g({type:String,reflect:!0})],ur.prototype,"variant",2);ur=zi([Z("thermal-dropdown")],ur);var zp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,Vs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zp(e,r,s),s};let ri=class extends Qe{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Me(),this.contentRef=Me(),this.rulerContentRef=Me()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return y`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${je(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${je(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${je(this.contentRef)}>

                    ${this.collapsed===!1?y`
                        <slot></slot>    
                    `:W}
                
                </div>

            </div>

            ${this.collapsed?y`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:W}
        
        `}};ri.styles=pe`

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

    `;Vs([x()],ri.prototype,"collapsed",2);Vs([x()],ri.prototype,"lastContentWidth",2);Vs([x()],ri.prototype,"drawerRef",2);ri=Vs([Z("thermal-bar")],ri);var Yp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,nr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Gp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Yp(e,r,s),s};let Mt=class extends Qe{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Me(),this.contentRef=Me()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,a=r.contentRect.width,o=n-175,h=a-0,p=this.contentRef.value.offsetHeight,m=4/3;let f=0,b=0;p<o?(console.log("priorita šířky"),f=h,b=f/m):(console.log("priorita výšky"),b=o,f=b*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${b}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return y`

        <div class="container ${this.dark?"dark":"normal"}" ${je(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?y`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?y`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?y`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:y`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:W}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?y`
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

            ${this.author||this.license||this.recorded?y`<div class="credits">

                    ${this.recorded?y`<div>
                            <div class="credits-field">Recorded at:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:W}

                    ${this.author?y`<div>
                            <div class="credits-field">Author:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:W}

                    ${this.license?y`<div>
                            <div class="credits-field">License:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:W}

                </div>`:W}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};Mt.styles=pe`

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
    
    `;nr([Wi({slot:"bar",flatten:!0})],Mt.prototype,"barElements",2);nr([Wi({slot:"pre",flatten:!0})],Mt.prototype,"preElements",2);nr([Wi({slot:"content",flatten:!0})],Mt.prototype,"contentElements",2);nr([g({type:String,reflect:!0})],Mt.prototype,"fullscreen",2);nr([g({type:String,reflect:!0,attribute:!0})],Mt.prototype,"showfullscreen",2);nr([g({type:String,reflect:!0,attribute:!0})],Mt.prototype,"dark",2);nr([g()],Mt.prototype,"author",2);nr([g()],Mt.prototype,"recorded",2);nr([g()],Mt.prototype,"license",2);Mt=nr([Z("thermal-app")],Mt);var qp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,ca=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&qp(e,r,s),s};let Di=class extends Qe{render(){return y`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&y`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};Di.styles=pe`
    
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

    `;ca([g({type:String})],Di.prototype,"label",2);ca([g({type:String})],Di.prototype,"hint",2);Di=ca([Z("thermal-field")],Di);var Kp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Qp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Kp(e,r,s),s};let zn=class extends Qe{render(){return y`
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
                        <p>version ${Kn}</p>
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
        `}};zn.styles=pe`

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
    
    `;zn=Qp([Z("app-info-button")],zn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nl=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let To=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Nl(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Jp{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ef=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Lo extends Jp{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const h=new Set;for(const[p,{consumerHost:m}]of this.subscriptions)h.has(p)||(h.add(p),m.dispatchEvent(new Nl(this.context,p,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ef(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oe({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Lo(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Lo(a,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oe({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new To(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new To(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let ps;const tf=new Uint8Array(16);function rf(){if(!ps&&(ps=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ps))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ps(tf)}const nt=[];for(let t=0;t<256;++t)nt.push((t+256).toString(16).slice(1));function sf(t,e=0){return nt[t[e+0]]+nt[t[e+1]]+nt[t[e+2]]+nt[t[e+3]]+"-"+nt[t[e+4]]+nt[t[e+5]]+"-"+nt[t[e+6]]+nt[t[e+7]]+"-"+nt[t[e+8]]+nt[t[e+9]]+"-"+nt[t[e+10]]+nt[t[e+11]]+nt[t[e+12]]+nt[t[e+13]]+nt[t[e+14]]+nt[t[e+15]]}const nf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ro={randomUUID:nf};function af(t,e,r){if(Ro.randomUUID&&!e&&!t)return Ro.randomUUID();t=t||{};const i=t.random||(t.rng||rf)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,sf(i)}const Ta=class Ta extends Qe{constructor(){super(...arguments),this.UUID=af()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}};Ta.shadowRootOptions={...Qe.shadowRootOptions,mode:"open"};let kt=Ta;const Hl="manager-instance",Ys="manager-palette-context",Bl="manager-smooth-context",ha="manager-graph-function-context",of=new sa,lf="__internal_default_registry",cf="__internal_default_group",hf=t=>t.addOrGetRegistry(lf),df=t=>t.groups.addOrGetGroup(cf);var uf=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,di=(t,e,r,i)=>{for(var s=i>1?void 0:i?pf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&uf(e,r,s),s};let pr=class extends kt{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Fr.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();let t=of;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=pr.sanitizeStringPalette(this.palette.key);e.palette=r,t=new sa(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)}),this.manager.smooth.addListener(this.UUIDManagerListeners,e=>{this.smooth=e}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,e=>{this.graphSmooth=e})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=pr.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(Fr).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:Fr[t]}}render(){return y`<slot></slot>`}};di([Oe({context:Hl})],pr.prototype,"manager",2);di([g({type:String,reflect:!0,attribute:!0})],pr.prototype,"slug",2);di([Oe({context:Ys}),g({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:Fr[t]}),toAttribute:t=>t.key.toString()}})],pr.prototype,"palette",2);di([Oe({context:Bl}),g({type:String,reflect:!0,attribute:!0})],pr.prototype,"smooth",2);di([Oe({context:ha}),g({type:String,reflect:!0,attribute:!0})],pr.prototype,"graphSmooth",2);pr=di([Z("manager-provider")],pr);var ff=Object.defineProperty,mf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&ff(e,r,s),s};class Vi extends kt{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}mf([oe({context:Hl,subscribe:!0}),x()],Vi.prototype,"manager");const zl="registry-instance",Vl="registry-opacity",da="registry-range-from",ua="registry-range-to",gf="registry-loading",Yl="registry-min",Gl="registry-max";var vf=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,gr=(t,e,r,i)=>{for(var s=i>1?void 0:i?yf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&vf(e,r,s),s};let ir=class extends Vi{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=hf(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var i;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.imposeRange(n):s.imposeRange(n)}}if(t==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return y`<slot></slot>`}};gr([g({type:String,reflect:!0,attribute:!0})],ir.prototype,"slug",2);gr([Oe({context:zl})],ir.prototype,"registry",2);gr([Oe({context:Vl}),g({type:Number,reflect:!0,attribute:!0})],ir.prototype,"opacity",2);gr([Oe({context:Yl}),x()],ir.prototype,"min",2);gr([Oe({context:Gl}),x()],ir.prototype,"max",2);gr([Oe({context:da}),g({type:Number,reflect:!0,attribute:!0})],ir.prototype,"from",2);gr([Oe({context:ua}),g({type:Number,reflect:!0,attribute:!0})],ir.prototype,"to",2);gr([Oe({context:gf}),g({type:String,reflect:!0,attribute:!0})],ir.prototype,"loading",2);ir=gr([Z("registry-provider")],ir);var bf=Object.defineProperty,wf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&bf(e,r,s),s};class Dt extends Vi{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}wf([oe({context:zl,subscribe:!0})],Dt.prototype,"registry");const ql="group-instance",pa="tool-context",fa="tools-context";var xf=Object.defineProperty,_f=Object.getOwnPropertyDescriptor,Yi=(t,e,r,i)=>{for(var s=i>1?void 0:i?_f(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&xf(e,r,s),s};let ii=class extends Dt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=df(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return y`<slot></slot>`}};Yi([g({type:String,attribute:!0,reflect:!0})],ii.prototype,"slug",2);Yi([Oe({context:ql})],ii.prototype,"group",2);Yi([Oe({context:pa})],ii.prototype,"tool",2);Yi([Oe({context:fa})],ii.prototype,"tools",2);ii=Yi([Z("group-provider")],ii);const Nr=t=>{const e=t.split(";"),r=p=>!!e.find(m=>m===p),i=p=>{const m=new RegExp(`${p}:*`),f=e.find(b=>{if(b.match(m))return isNaN(parseInt(b.split(":")[1]))});return f==null?void 0:f.split(":")[1].trim()},s=p=>{const m=new RegExp(`${p}:\\d+`),f=e.find(b=>b.match(m));if(f===void 0)throw new Error(`Error parsing analysis property '${p}'!`);return parseInt(f.split(":")[1])},n=e[0],a=e[1].trim(),o=i("color");let h;return a==="point"?h={name:n,type:a,color:o,top:s("top"),left:s("left"),avg:r("avg")}:h={name:n,type:a,color:o,top:s("top"),left:s("left"),width:s("width"),height:s("height"),avg:r("avg"),min:r("min"),max:r("max")},h},Hr=t=>{const e=[],r=(n,a)=>{a!==void 0&&e.push(`${n}:${a}`)},i=(n,a)=>{e.push(`${n}:${a}`)},s=(n,a)=>{a&&e.push(n)};if(e.push(t.name),e.push(t.type),r("color",t.color),t.type==="point"){const n=t;i("top",n.top),i("left",n.left),s("avg",n.avg)}else{const n=t;i("top",n.top),i("left",n.left),i("width",n.width),i("height",n.height),s("avg",n.avg),s("min",n.min),s("max",n.max)}return e.join(";")};var $f=Object.defineProperty,Sf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&$f(e,r,s),s};class ui extends Dt{constructor(){super()}connectedCallback(){super.connectedCallback()}}Sf([oe({context:ql,subscribe:!0})],ui.prototype,"group");const Xl="file",Kl="failure",Zl="file-loading",Cf="file-loaded",ma="file-provider-element",ga="file-ms-context",va="file-cursor",ya="file-cursor-setter",Gi="playback",ba="duration",wa="playing",Ql="playbackSpeed",Jl="recording",ec="mayStop",kf="analysislist",xa="file-markers-context";var Pf=Object.defineProperty,dt=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Pf(e,r,s),s};class rt extends ui{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const r=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(r);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new me,this.onSuccess=new me,this.onFailure=new me}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}attributeChangedCallback(e,r,i){var s,n,a;if(super.attributeChangedCallback(e,r,i),e==="ms"&&i&&this.duration&&this.currentFrame){const o=Math.min(this.duration.ms,Math.max(0,parseInt(i)));o!==this.currentFrame.ms&&((s=this.file)==null||s.timeline.setRelativeTime(o))}e==="playing"&&(i==="true"?(n=this.file)==null||n.timeline.play():i==="false"&&((a=this.file)==null||a.timeline.pause())),e==="playbackspeed"&&this.file&&i&&Object.keys(ra).includes(i)&&(this.file.timeline.playbackSpeed=parseFloat(i)),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.playbackSpeed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}dt([Oe({context:Xl}),x()],rt.prototype,"file");dt([Oe({context:Kl}),x()],rt.prototype,"failure");dt([Oe({context:Zl}),x()],rt.prototype,"loading");dt([Oe({context:Cf}),x()],rt.prototype,"ready");dt([Oe({context:wa}),g({type:String,reflect:!0,attribute:!0})],rt.prototype,"playing");dt([Oe({context:ba}),x()],rt.prototype,"duration");dt([Oe({context:Gi}),x()],rt.prototype,"currentFrame");dt([Oe({context:va})],rt.prototype,"cursor");dt([Oe({context:ya})],rt.prototype,"cursorSetter");dt([Oe({context:ga}),g({type:Number,reflect:!0,attribute:!0})],rt.prototype,"ms");dt([Oe({context:Ql}),g({type:Number,reflect:!0,attribute:!0})],rt.prototype,"playbackSpeed");dt([Oe({context:Jl}),g({type:String,reflect:!0,attribute:!0})],rt.prototype,"recording");dt([Oe({context:ec}),x()],rt.prototype,"mayStop");dt([Wi({slot:"mark",flatten:!0})],rt.prototype,"marksQueriedInternally");dt([Oe({context:xa})],rt.prototype,"marksProvidedBelow");dt([Oe({context:kf})],rt.prototype,"analysis");var Af=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,Yt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Of(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Af(e,r,s),s};let Ut=class extends rt{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Qr?await e.createInstance(this.group).then(r=>(this.file=r,this.onSuccess.call(r),this.clearCallbacks(),this.handleLoaded(r),r.group.registry.postLoadedProcessing(),r)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}handleLoaded(t){this.handleAnalysis(t,this.analysis1),this.handleAnalysis(t,this.analysis2),this.handleAnalysis(t,this.analysis3),this.handleAnalysis(t,this.analysis4),this.handleAnalysis(t,this.analysis5),this.handleAnalysis(t,this.analysis6),this.handleAnalysis(t,this.analysis7)}handleAnalysis(t,e){if(e===void 0)return;let r;if(e.type==="point"){const i=e;r=t.analysis.layers.placePointAt(i.name,i.top,i.left,i.color),i.avg&&r.graph.setAvgActivation(!0)}else{const i=e;i.type==="rectangle"?r=t.analysis.layers.placeRectAt(i.name,i.top,i.left,i.width,i.height,i.color):i.type==="ellipsis"&&(r=t.analysis.layers.placeEllipsisAt(i.name,i.top,i.left,i.width,i.height,i.color)),r==null||r.graph.setAvgActivation(i.avg),r==null||r.graph.setMinActivation(i.min),r==null||r.graph.setMaxActivation(i.max)}r==null||r.setSelected(),this.log(r)}connectedCallback(){super.connectedCallback(),this.load().then(t=>{t instanceof pl?this.recieveInstance(t):this.failure=t})}render(){return y`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};Yt([Oe({context:ma})],Ut.prototype,"providedSelf",2);Yt([g({type:String,attribute:!0,reflect:!0})],Ut.prototype,"thermal",2);Yt([g({type:String,attribute:!0,reflect:!0})],Ut.prototype,"visible",2);Yt([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Nr.bind(void 0),toAttribute:Hr.bind(void 0)}})],Ut.prototype,"analysis1",2);Yt([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Nr.bind(void 0),toAttribute:Hr.bind(void 0)}})],Ut.prototype,"analysis2",2);Yt([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Nr.bind(void 0),toAttribute:Hr.bind(void 0)}})],Ut.prototype,"analysis3",2);Yt([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Nr.bind(void 0),toAttribute:Hr.bind(void 0)}})],Ut.prototype,"analysis4",2);Yt([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Nr.bind(void 0),toAttribute:Hr.bind(void 0)}})],Ut.prototype,"analysis5",2);Yt([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Nr.bind(void 0),toAttribute:Hr.bind(void 0)}})],Ut.prototype,"analysis6",2);Yt([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Nr.bind(void 0),toAttribute:Hr.bind(void 0)}})],Ut.prototype,"analysis7",2);Ut=Yt([Z("file-provider")],Ut);var Df=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,pi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ef(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Df(e,r,s),s};let Or=class extends rt{constructor(){super(...arguments),this.providedSelf=this,this.container=Me(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof Qr){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof _s&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return y`

                    <div class="container">
                        <div ${je(this.container)} class="${er(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${_l.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return y`
            ${this.ready?y`<slot></slot>`:W}
            <slot name="mark"></slot>
        `}};Or.styles=pe`

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
    
    `;pi([Oe({context:ma})],Or.prototype,"providedSelf",2);pi([x()],Or.prototype,"container",2);pi([x()],Or.prototype,"ready",2);pi([x()],Or.prototype,"hover",2);pi([x()],Or.prototype,"listener",2);Or=pi([Z("file-dropin")],Or);var Tf=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,_a=(t,e,r,i)=>{for(var s=i>1?void 0:i?Lf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Tf(e,r,s),s};let Ei=class extends ui{constructor(){super(...arguments),this.container=Me(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return y`

            <div class="container">
            
                <div ${je(this.container)} class="${er(t)}"></div>

            </div>
        
        `}};Ei.styles=pe`

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
    
    `;_a([x()],Ei.prototype,"container",2);_a([x()],Ei.prototype,"hover",2);Ei=_a([Z("group-dropin")],Ei);var Rf=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,tc=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Rf(e,r,s),s};let ks=class extends Dt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return y`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return y`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Fr).map(([t,e])=>y`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};ks.styles=pe`

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

    `;tc([oe({context:Ys,subscribe:!0})],ks.prototype,"value",2);ks=tc([Z("registry-palette-dropdown")],ks);var Uf=Object.defineProperty,If=Object.getOwnPropertyDescriptor,rc=(t,e,r,i)=>{for(var s=i>1?void 0:i?If(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Uf(e,r,s),s};let Ps=class extends Dt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return y`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return y`
            <div class="container">
                ${Object.entries(Fr).map(([t,e])=>y`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};Ps.styles=pe`

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

    `;rc([oe({context:Ys,subscribe:!0}),x()],Ps.prototype,"value",2);Ps=rc([Z("registry-palette-buttons")],Ps);var Ff=Object.defineProperty,jf=Object.getOwnPropertyDescriptor,ic=(t,e,r,i)=>{for(var s=i>1?void 0:i?jf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ff(e,r,s),s};let As=class extends Vi{connectedCallback(){super.connectedCallback()}render(){return y`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.smooth.setSmooth(!1)}
            >Pixelated</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.smooth.setSmooth(!0)}
            >Smooth</thermal-button>
        `}};As.styles=pe`
    
        :host {}

    `;ic([oe({context:Bl,subscribe:!0})],As.prototype,"smooth",2);As=ic([Z("manager-smooth-switch")],As);var Wf=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,sc=(t,e,r,i)=>{for(var s=i>1?void 0:i?Nf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Wf(e,r,s),s};let Os=class extends Vi{connectedCallback(){super.connectedCallback()}render(){return y`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
            >Straight lines</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
            >Smooth lines</thermal-button>
        `}};Os.styles=pe`
    
        :host {}

    `;sc([oe({context:ha,subscribe:!0})],Os.prototype,"smooth",2);Os=sc([Z("manager-graph-smooth-switch")],Os);var Hf=Object.defineProperty,Bf=Object.getOwnPropertyDescriptor,nc=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Hf(e,r,s),s};let Ds=class extends Dt{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return y`
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
        `}};Ds.styles=pe`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;nc([oe({context:Vl,subscribe:!0})],Ds.prototype,"value",2);Ds=nc([Z("registry-opacity-slider")],Ds);var zf=Object.defineProperty,Vf=Object.getOwnPropertyDescriptor,Yf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zf(e,r,s),s};let Mo=class extends Dt{doAction(){this.registry.range.applyAuto()}render(){return y`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Mo=Yf([Z("registry-range-auto-button")],Mo);var Gf=Object.defineProperty,qf=Object.getOwnPropertyDescriptor,Xf=(t,e,r,i)=>{for(var s=i>1?void 0:i?qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Gf(e,r,s),s};let Uo=class extends Dt{doAction(){this.registry.range.applyMinmax()}render(){return y`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Uo=Xf([Z("registry-range-full-button")],Uo);var Kf=Object.defineProperty,Zf=Object.getOwnPropertyDescriptor,Gs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Kf(e,r,s),s};let sr=class extends Dt{constructor(){super(...arguments),this.ticksRef=Me(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/sr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return y`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${je(this.ticksRef)}>

                    ${this.ticks.map(t=>y`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(sr.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};sr.TICK_WIDTH=40;sr.TICK_FIXED=2;sr.styles=pe`

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


    `;Gs([g({type:String,reflect:!0})],sr.prototype,"placement",2);Gs([x()],sr.prototype,"minmax",2);Gs([x()],sr.prototype,"ticks",2);sr=Gs([Z("registry-ticks-bar")],sr);var Qf=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,qi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Qf(e,r,s),s};let si=class extends Dt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return y`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return y`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};qi([x()],si.prototype,"minmax",2);qi([x()],si.prototype,"range",2);qi([x()],si.prototype,"opacity",2);qi([x()],si.prototype,"palette",2);si=qi([Z("registry-log")],si);(()=>{var t=Object.defineProperty,e=Math.pow,r=(l,u,w)=>u in l?t(l,u,{enumerable:!0,configurable:!0,writable:!0,value:w}):l[u]=w,i=(l,u,w)=>(r(l,typeof u!="symbol"?u+"":u,w),w),s=(l,u)=>` ${u&&u.length>0?u.map(w=>`<link rel="stylesheet" href="${w}" />`).join(""):""} <style> ${l} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",h="pointers-max-distance",p="range-dragging",m="data",f="min",b="max",$="step",C="round",D="type",k="theme",I="rtl",U="btt",N="disabled",z="keyboard-disabled",H="mousewheel-disabled",le="slider-width",E="slider-height",Y="slider-radius",G="slider-bg",K="slider-bg-hover",ce="slider-bg-fill",q="pointer-width",ie="pointer-height",se="pointer-radius",de="pointer-bg",Te="pointer-bg-hover",Ne="pointer-bg-focus",Ue="pointer-shadow",xt="pointer-shadow-hover",_t="pointer-shadow-focus",lr="pointer-border",qt="pointer-border-hover",Xt="pointer-border-focus",Kt="animate-onclick",Wt="css-links",Ie="vertical",it="horizontal",Tr=(l,u,w,v,M)=>{let ee=u-l;return ee===0?w:(v-w)*(M-l)/ee+w},ft=l=>!isNaN(parseFloat(l))&&isFinite(l),Fe=(l,u)=>ft(l)?Number(l):u,Zi=(l,u)=>u===0?0:Math.round(l/u)*u,Qs=(l,u=1/0)=>{if(u===1/0)return l;let w=e(10,u);return Math.round(l*w)/w},qe=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true",Js=(l,u)=>{l.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},en=(l,u)=>{l.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},tn=(l,u)=>{l.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},rn=(l,u)=>{l.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},sn=(l,u)=>{if(!u||u.length<=0)return;let w=u.map(M=>ft(M)?Fe(M,M):M),v={values:w||[]};v.value=w[0],v.value0=w[0],v.value1=w[0];for(let M=1;M<w.length;M++)v[`value${M+1}`]=w[M];l.dispatchEvent(new CustomEvent("change",{detail:v}))},P=(l,u,w)=>{let v=0,M,ee,fe,F,j=!1,ge=(re,Re,Ze,Xe,He,Be)=>{let gt=v;Ze!==void 0&&re>Ze&&(re=Ze),Re!==void 0&&re<Re&&(re=Re),v=re;let vt=v;return(Xe===Ie&&Be||Xe===it&&He)&&(vt=100-vt),Xe===Ie?u.style.top=`${vt}%`:u.style.left=`${vt}%`,gt!==v},we=re=>re===u||u.contains(re),X=(re,Re,Ze,Xe)=>{M=re,ee=Re,fe=Ze,F=Xe},De=re=>{j=re,u.classList.toggle("disabled",j),j?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},Lt=(re,Re)=>{Re==null?u.removeAttribute(re):u.setAttribute(re,Re)},ct=re=>u.getAttribute(re),te=re=>{if(!j){switch(re.key){case"ArrowLeft":{re.preventDefault(),typeof M=="function"&&M(w);break}case"ArrowRight":{re.preventDefault(),typeof ee=="function"&&ee(w);break}case"ArrowUp":{re.preventDefault(),typeof fe=="function"&&fe(w);break}case"ArrowDown":{re.preventDefault(),typeof F=="function"&&F(w);break}}rn(l,re)}},ve=()=>{j||Js(l,u)};return u.className=`pointer pointer-${w}`,u.addEventListener("keydown",te),u.addEventListener("click",ve),{$pointer:u,get percent(){return v},get disabled(){return j},set disabled(re){De(re)},updatePosition:ge,isClicked:we,setCallbacks:X,setAttr:Lt,getAttr:ct,destroy:()=>{u.removeEventListener("keydown",te),u.removeEventListener("click",ve),u.remove()}}},T=l=>{if(l==null)return;if(Array.isArray(l))return l;if(l.trim()==="")return;let u=l.split(","),w=[],v=!0;for(let M=0;M<u.length;M++){let ee=u[M].trim();ee!==""&&(w.push(ee),ft(ee)||(v=!1))}return v?w.map(M=>Number(M)):w},L=(l,u)=>u?u.findIndex(w=>w===l||w.toString().trim()===l.toString().trim()):-1,R=l=>({updatePosition:(u,w,v,M)=>{if(w.length<=0)return;let ee=w.length===1,fe=w[0],F=w[w.length-1];u===Ie?(l.style.removeProperty("width"),l.style.removeProperty("right"),l.style.removeProperty("left"),ee?l.style.height=`${fe}%`:l.style.height=`${Math.abs(fe-F)}%`,M?(l.style.bottom="0%",ee?l.style.top="auto":l.style.top=`${Math.min(100-F,100-fe)}%`):(l.style.bottom="auto",ee?l.style.top="0%":l.style.top=`${Math.min(fe,F)}%`)):(l.style.removeProperty("height"),l.style.removeProperty("top"),l.style.removeProperty("bottom"),ee?l.style.width=`${fe}%`:l.style.width=`${Math.abs(fe-F)}%`,v?(l.style.right="0%",ee?l.style.left="auto":l.style.left=`${Math.min(100-F,100-fe)}%`):(l.style.right="auto",ee?l.style.left="0%":l.style.left=`${Math.min(fe,F)}%`))}}),J="--animate-onclick",ke="--width",ae="--height",Le="--panel-bg-border-radius",_e="--panel-bg",B="--panel-bg-hover",$e="--panel-bg-fill",S="--pointer-width",A="--pointer-height",he="--pointer-border-radius",ye="--pointer-bg",Ye="--pointer-bg-hover",st="--pointer-bg-focus",Zt="--pointer-shadow",$t="--pointer-shadow-hover",Tt="--pointer-shadow-focus",br="--pointer-border",Q="--pointer-border-hover",ue="--pointer-border-focus",O=(l,u,w)=>{let v=new Map;for(let M of l.attributes){let ee=M.nodeName.trim().toLowerCase();if(!u.test(ee))continue;let fe=ee.replace(/\D/g,"").trim(),F=fe===""||fe==="0"||fe==="1"?0:Fe(fe,0)-1,j=w&&typeof w=="function"?w(M.value):M.value;v.set(F,j)}return v},ne=l=>{if(!l)return null;let u=l.getAttribute(Wt);if(!u)return null;let w=u.split(";"),v=[];for(let M of w)M.trim()!==""&&v.push(M.trim());return v},Pe=[[ke,le,"sliderWidth",null],[ae,E,"sliderHeight",null],[Le,Y,"sliderRadius",null],[_e,G,"sliderBg",null],[B,K,"sliderBgHover",null],[$e,ce,"sliderBgFill",null],[S,q,"pointer#Width",/^pointer([0-9]*)-width$/],[A,ie,"pointer#Height",/^pointer([0-9]*)-height$/],[he,se,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ye,de,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ye,Te,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[st,Ne,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Zt,Ue,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[$t,xt,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Tt,_t,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[br,lr,"pointer#Border",/^pointer([0-9]*)-border$/],[Q,qt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[ue,Xt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Ce=(l,u,w)=>{let v=null,M=[],ee=new Map,fe=(te,ve=u)=>{let re=[...ve.classList];for(let Re of re)Re.startsWith(te)&&u.classList.remove(Re)},F=()=>{fe("shape");let te=u.querySelectorAll(".pointer");for(let ve of te)fe("shape",ve)},j=te=>{v=te,fe("theme-"),typeof te=="string"&&u.classList.add(`theme-${te}`)},ge=()=>{if(F(),!(M.length<=0)){u.classList.add("shape",`shape-${M[0]}`);for(let te=1;te<M.length;te++){let ve=M[te];if(!ve)continue;let re=u.querySelector(`.pointer-${te}`);!re||re.classList.add("shape",`shape-${ve}`)}}},we=(te,ve)=>{M[te]=ve,ge()},X=()=>{F();let te=O(l,/^pointer([0-9]*)-shape$/);if(!(te.size<=0)){for(let ve of te){let re=ve[0];M[re]=ve[1]}ge()}},De=(te,ve)=>`${te}-${ve}`,Lt=(te,ve,re)=>{let Re=w[re];if(!Re)return;let Ze=re===0?u:Re.$pointer;if(ve==null){ee.has(De(te,re))&&ee.delete(De(te,re)),Ze.style.removeProperty(te);return}ee.set(De(te,re),ve),Ze.style.setProperty(te,ve)},ct=(te,ve)=>ee.get(De(te,ve));return(()=>{for(let te of Pe){let[ve,re,Re,Ze]=te;if(Ze){let He=O(l,Ze);for(let Be of He){let gt=Be[0],vt=Be[1];Lt(ve,vt,gt)}}else{let He=l.getAttribute(re);Lt(ve,He,0)}let Xe=[];if(Re.indexOf("#")===-1)Xe.push([Re,0]);else{Xe.push([Re.replace("#",""),0]),Xe.push([Re.replace("#","0"),0]),Xe.push([Re.replace("#","1"),0]);for(let He=1;He<w.length;He++)Xe.push([Re.replace("#",(He+1).toString()),He])}for(let He of Xe)try{let Be=He[0],gt=He[1];Object.prototype.hasOwnProperty.call(l,Be)||Object.defineProperty(l,Be,{get(){return ct(ve,gt)},set:vt=>{Lt(ve,vt,gt)}})}catch(Be){console.error(Be)}}j(l.getAttribute(k)),X()})(),{setStyle:Lt,getStyle:ct,get theme(){return v},set theme(te){j(te)},get pointerShapes(){return M},setPointerShape:we}},We="animate-on-click",be="range-dragging",mt=(l,u,w,v)=>{let M=[],ee=we=>{for(let X of M)X.update&&typeof X.update=="function"&&X.update(we)},fe=()=>{for(let we of M)we.destroy&&typeof we.destroy=="function"&&we.destroy()},F=(we,X)=>{for(let De of M)De.onAttrChange&&typeof De.onAttrChange=="function"&&De.onAttrChange(we,X)},j=we=>{if(we.gettersAndSetters){for(let X of we.gettersAndSetters)if(!(!X.name||!X.attributes))try{Object.prototype.hasOwnProperty.call(l,X.name)||Object.defineProperty(l,X.name,X.attributes)}catch(De){console.error("defineSettersGetters error:",De)}}},ge=we=>{var X;if(!we.css)return;let De=(X=l.shadowRoot)==null?void 0:X.querySelector("style");!De||(De.innerHTML+=we.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let we of window.tcRangeSliderPlugins){let X=we();M.push(X),X.init&&typeof X.init=="function"&&(X.init(l,u,w,v),j(X),ge(X))}},update:ee,onAttrChange:F,destroy:fe}},Ge=10,Qi=20,lc=(l,u)=>{let w=new Map,v=/^value([0-9]*)$/;for(let F of l.attributes){let j=F.nodeName.trim().toLowerCase();if(!v.test(j))continue;let ge=j.replace("value","").trim(),we=ge===""||ge==="0"||ge==="1"?0:Fe(ge,0)-1,X=ft(F.value)?Fe(F.value,0):F.value;w.set(we,X)}let M=Math.max(...Array.from(w.keys())),ee=[];ee.push([P(l,u,0),w.get(0)]);let fe=u;for(let F=1;F<=M;F++){let j=u.cloneNode(!0);fe.after(j),fe=j,ee.push([P(l,j,F),w.get(F)])}return ee},La=(l,u,w,v,M,ee,fe)=>{try{Object.defineProperty(l,v,{configurable:!0,get(){if(!u)return;let F=u.pointers[w];if(!F)return;let j=u.getTextValue(F.percent);return ft(j)?Fe(j,j):j},set:F=>{u.pointers[w]?u==null||u.setValue(F,w):u==null||u.addPointer(F)}}),Object.defineProperty(l,M,{configurable:!0,get(){var F,j;return(j=(F=u==null?void 0:u.pointers[w])==null?void 0:F.getAttr("aria-label"))!=null?j:void 0},set:F=>{!u||u.setAriaLabel(w,F)}}),Object.defineProperty(l,ee,{configurable:!0,get(){var F,j;return(j=(F=u==null?void 0:u.styles)==null?void 0:F.pointerShapes[w])!=null?j:null},set:F=>{!u||!u.styles||u.styles.setPointerShape(w,F)}}),Object.defineProperty(l,fe,{configurable:!0,get(){var F;return(F=u==null?void 0:u.pointers[w].disabled)!=null?F:!1},set:F=>{if(!u)return;let j=u==null?void 0:u.pointers[w];!j||(j.disabled=F)}})}catch(F){console.error(F)}},cc=(l,u)=>{let w=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let v=2;v<Ge;v++)w.push([`value${v}`,`ariaLabel${v}`,`pointer${v}Shape`,`pointer${v}Disabled`,v-1]);for(let v of w)La(l,u,v[4],v[0],v[1],v[2],v[3])},Ra=(l,u,w)=>{var v;let M=(v=w.shadowRoot)==null?void 0:v.querySelector(".container");if(M)for(let ee of l)u?M.prepend(ee.$pointer):M.append(ee.$pointer)},hc=(l,u)=>{if(!(!u||l.length<=1)){for(let w of l)w.$pointer.style.zIndex=Qi.toString();u.$pointer.style.zIndex=(Qi*2).toString()}},nn=0,mi=100,zr=2,Ma="0.3s",dc=(l,u,w)=>{let v=w.map(d=>d[0]),M=null,ee=null,fe=null,F=null,j=nn,ge=mi,we,X,De=it,Lt=zr,ct=!1,te=!1,ve=!1,re=0,Re=1/0,Ze=!1,Xe,He,Be=!1,gt=!1,vt=!1,wr=Ma,Ua=[],Ia=d=>{Be||(d.preventDefault&&d.preventDefault(),Lr(d),window.addEventListener("mousemove",Lr),window.addEventListener("mouseup",Ji),en(l,d))},Ji=d=>{Be||(Xe=void 0,He=void 0,window.removeEventListener("mousemove",Lr),window.removeEventListener("mouseup",Ji),wr&&u.classList.add(We),tn(l,d))},fc=(d,_)=>{if(v.length<=0)return;if(v.length===1)return v[0].isClicked(d)&&wr&&u.classList.remove(We),v[0];let V=gc(d);if(Ze){let Ae=_,Nt=ts(Ae);Nt!==void 0&&(Ae=Zi(Ae,Nt)),V?(Xe=Ae,He=0,wr&&u.classList.remove(We)):Xe!==void 0&&(He=Ae-Xe,Xe=Ae)}if(!mc(d)&&!V){for(let Ae of v)if(!(!Ae.isClicked(d)||Ae.disabled))return wr&&u.classList.remove(We),Ae;for(let Ae of v)if(M===Ae)return Ae}let Ee=1/0,ze=null;for(let Ae of v){if(Ae.disabled)continue;let Nt=Math.abs(_-Ae.percent);Nt<Ee&&(Ee=Nt,ze=Ae)}return ze},Fa=()=>v.findIndex(d=>M===d&&!d.disabled),Lr=d=>{let _;if(De===Ie){let{height:Ee,top:ze}=u.getBoundingClientRect(),Ae=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;_=Math.min(Math.max(0,Ae-ze),Ee)*100/Ee}else{let{width:Ee,left:ze}=u.getBoundingClientRect(),Ae=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;_=Math.min(Math.max(0,Ae-ze),Ee)*100/Ee}if((ct||te)&&(_=100-_),M=fc(d.target,_),M&&hc(v,M),Ze&&v.length>1&&He!==void 0){let Ee=v[0],ze=v[v.length-1],Ae=Ee.percent+He<0,Nt=ze.percent+He>100;if(Ae||Nt)return;for(let cs=0;cs<v.length;cs++)yt(cs,v[cs].percent+He);return}let V=Fa();V!==-1&&(yt(V,_),M==null||M.$pointer.focus())},es=d=>{if(Be||document.activeElement!==l||M!=null&&M.disabled)return;d.stopPropagation(),d.preventDefault();let _=d.deltaY<0,V=ct||te,Ee=_?!V:V,ze=Fa();ze!==-1&&(Ee?gi(ze,v[ze].percent):vi(ze,v[ze].percent))},ja=d=>{Be||gt||(De===Ie?te?yt(d,100):yt(d,0):ct?vi(d,v[d].percent):gi(d,v[d].percent))},Wa=d=>{Be||gt||(De===Ie?te?yt(d,0):yt(d,100):ct?gi(d,v[d].percent):vi(d,v[d].percent))},Na=d=>{Be||gt||(De===Ie?te?vi(d,v[d].percent):gi(d,v[d].percent):ct?yt(d,100):yt(d,0))},Ha=d=>{Be||gt||(De===Ie?te?gi(d,v[d].percent):vi(d,v[d].percent):ct?yt(d,0):yt(d,100))},mc=d=>d.classList.contains("panel"),gc=d=>d.classList.contains("panel-fill"),gi=(d,_)=>{if(_===void 0)return;let V=ts(_);V==null&&(V=1),_-=V,_<0&&(_=0),yt(d,_)},vi=(d,_)=>{if(_===void 0)return;let V=ts(_);V==null&&(V=1),_+=V,_>100&&(_=100),yt(d,_)},Rr=()=>{!F||F.update({percents:Ba(),values:za(),$pointers:Va(),min:Ya(),max:Ga(),data:ln(),step:on(),round:hn(),type:cn(),textMin:rs(),textMax:is(),rightToLeft:pn(),bottomToTop:fn(),pointersOverlap:yn(),pointersMinDistance:dn(),pointersMaxDistance:un(),rangeDragging:bn(),disabled:mn(),keyboardDisabled:gn(),mousewheelDisabled:vn()})},vc=()=>{Rr()},yc=d=>{if(!(ve||v.length<=1||ge===j))if(d===0){let _=Re*100/(ge-j);return Math.max(0,v[d+1].percent-_)}else{let _=re*100/(ge-j);return Math.min(v[d-1].percent+_,100)}},bc=d=>{if(!(ve||v.length<=1||ge===j))if(d===v.length-1){let _=Re*100/(ge-j);return Math.min(v[d-1].percent+_,100)}else{let _=re*100/(ge-j);return Math.max(0,v[d+1].percent-_)}},ts=d=>{let _;if(typeof we=="function"){let V=Tr(0,100,j,ge,d);_=we(V,d)}else _=we;if(ft(_)){let V=ge-j;return _=V===0?0:_*100/V,_}},Vr=d=>{if(d===void 0)return;let _=Tr(0,100,j,ge,d);return X!==void 0?X[Math.round(_)]:Qs(_,Lt)},rs=()=>X!==void 0?X[j]:j,is=()=>X!==void 0?X[ge]:ge,on=()=>we,wc=d=>{var _;return d<=0||ve?rs():(_=Vr(v[d-1].percent))!=null?_:""},xc=d=>{var _;return v.length<=1||d>=v.length-1||ve?is():(_=Vr(v[d+1].percent))!=null?_:""},Ba=()=>v.map(d=>d.percent),za=()=>v.map(d=>Vr(d.percent)),Va=()=>v.map(d=>d.$pointer),Ya=()=>j,Ga=()=>ge,ln=()=>X,cn=()=>De,hn=()=>Lt,dn=()=>re,un=()=>Re,_c=d=>Ua[d],pn=()=>ct,fn=()=>te,mn=()=>Be,gn=()=>gt,vn=()=>vt,yn=()=>ve,bn=()=>Ze,yt=(d,_)=>{if(_===void 0)return;let V=ts(_);V!==void 0&&(_=Zi(_,V));let Ee=v[d];if(!Ee)return;let ze=Ee.updatePosition(_,yc(d),bc(d),De,ct,te);ee==null||ee.updatePosition(De,v.map(Ae=>Ae.percent),ct,te),Rr();for(let Ae of v){let Nt=Vr(Ae.percent);Nt!==void 0&&(Ae.setAttr("aria-valuenow",Nt.toString()),Ae.setAttr("aria-valuetext",Nt.toString()))}Sc(),ze&&sn(l,v.map(Ae=>Vr(Ae.percent)))},Qt=()=>{for(let d=0;d<v.length;d++)yt(d,v[d].percent)},$c=(d,_)=>{j=X!==void 0?0:Fe(d,nn),ge=X!==void 0?X.length-1:Fe(_,mi),ss(j),ns(ge)},Sc=()=>{var d,_;for(let V=0;V<v.length;V++){let Ee=v[V];Ee.setAttr("aria-valuemin",((d=wc(V))!=null?d:"").toString()),Ee.setAttr("aria-valuemax",((_=xc(V))!=null?_:"").toString())}},ss=d=>{j=Fe(d,nn),j>ge&&(ge=j+mi),Qt()},ns=d=>{ge=Fe(d,mi),ge<j&&(ge=j+mi),Qt()},qa=d=>{ve=!0;for(let _=0;_<d.length;_++)as(d[_],_);ve=!1;for(let _=0;_<d.length;_++)as(d[_],_)},as=(d,_)=>{let V;X!==void 0?(V=d==null?0:L(d,X),V===-1&&(V=0)):(V=Fe(d,j),V<j&&(V=j),V>ge&&(V=ge));let Ee=Tr(j,ge,0,100,V);yt(_,Ee)},os=d=>{if(d==null){we=void 0;return}if(typeof d=="function"){we=d,Qt();return}if(ft(d)){we=Fe(d,1);let _=Math.abs(ge-j);we>_&&(we=void 0),Qt();return}we=void 0},wn=d=>{ve=d,Qt()},xn=d=>{(!ft(d)||d<0)&&(d=0),re=d},_n=d=>{(!ft(d)||d<0)&&(d=1/0),Re=d},$n=d=>{Be=d,u.classList.toggle("disabled",Be),Be?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},Xa=d=>{gt=d},Ka=d=>{vt=d,vt?document.removeEventListener("wheel",es):document.addEventListener("wheel",es,{passive:!1})},Sn=d=>{if(d==null){X=void 0;return}if(X=T(d),X===void 0||X.length<=0){X=void 0;return}ss(0),ns(X.length-1),we===void 0&&os(1)},Cn=d=>{var _;typeof d=="string"?De=d.trim().toLowerCase()===Ie?Ie:it:De=it;let V=(_=l.shadowRoot)==null?void 0:_.querySelector(".range-slider-box");if(!V)return;V.className=`range-slider-box type-${De}`,Qt();let Ee=De===Ie?"vertical":"horizontal";for(let ze of v)ze.setAttr("aria-orientation",Ee)},kn=d=>{ct=d,v.length>1&&Ra(v,ct,l),Qt(),Rr()},Pn=d=>{te=d,v.length>1&&Ra(v,te,l),Qt(),Rr()},An=d=>{Lt=Fe(d,zr),Lt<0&&(Lt=zr),Rr()},Za=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(wr=void 0,u.style.removeProperty(J),u.classList.remove(We)):(wr=d.toString(),u.style.setProperty(J,wr),u.classList.add(We))},Qa=(d,_)=>{let V=v[d];!V||(V.setAttr("aria-label",_),Ua[d]=_)},ls=d=>{if(Xe=void 0,v.length<=1){Ze=!1,u.classList.remove(be);return}Ze=d,u.classList.toggle(be,Ze)},Cc=()=>{$n(qe(l.getAttribute(N))),gt=qe(l.getAttribute(z)),vt=qe(l.getAttribute(H));let d=O(l,/^pointer([0-9]*)-disabled$/,_=>qe(_));for(let _ of d){let V=_[0];!v[V]||(v[V].disabled=_[1])}},kc=()=>{let d=O(l,/^aria-label([0-9]*)$/);for(let _ of d){let V=_[0];Qa(V,_[1])}},Pc=d=>{let _=v.length,V=v[_-1].$pointer,Ee=V.cloneNode(!0);V.after(Ee);let ze=P(l,Ee,_);return ze.setCallbacks(ja,Wa,Na,Ha),v.push(ze),as(d,_),Qt(),Rr(),_},Ac=()=>{let d=v.length,_=v[d-1];return _?(_.destroy(),v.pop(),v.length<=1&&ls(!1),Qt(),Rr(),d-1):-1};return(()=>{var d,_;for(let Ee of v)Ee.setCallbacks(ja,Wa,Na,Ha);let V=(d=l.shadowRoot)==null?void 0:d.querySelector(".panel-fill");V&&(ee=R(V)),Cn(l.getAttribute(D)),kn(qe(l.getAttribute(I))),Pn(qe(l.getAttribute(U))),$c(l.getAttribute(f),l.getAttribute(b)),os(l.getAttribute($)),Sn(l.getAttribute(m)),qa(w.map(Ee=>Ee[1])),wn(qe(l.getAttribute(a))),xn(Fe(l.getAttribute(o),0)),_n(Fe(l.getAttribute(h),1/0)),ls(qe(l.getAttribute(p))),An(Fe(l.getAttribute(C),zr)),Cc(),kc(),fe=Ce(l,u,v),Za((_=l.getAttribute(Kt))!=null?_:Ma),u.addEventListener("mousedown",Ia),u.addEventListener("mouseup",Ji),u.addEventListener("touchmove",Lr),u.addEventListener("touchstart",Lr),vt||document.addEventListener("wheel",es,{passive:!1}),F=mt(l,vc,{setValues:qa,setMin:ss,setMax:ns,setStep:os,setPointersOverlap:wn,setPointersMinDistance:xn,setPointersMaxDistance:_n,setDisabled:$n,setType:Cn,setRightToLeft:kn,setBottomToTop:Pn,setRound:An,setKeyboardDisabled:Xa,setMousewheelDisabled:Ka,setRangeDragging:ls,setData:Sn},{getPercents:Ba,getValues:za,getPointerElements:Va,getMin:Ya,getMax:Ga,getStep:on,getData:ln,getType:cn,getRound:hn,getTextMin:rs,getTextMax:is,isRightToLeft:pn,isBottomToTop:fn,isDisabled:mn,isKeyboardDisabled:gn,isMousewheelDisabled:vn,isPointersOverlap:yn,isRangeDraggingEnabled:bn,getPointersMinDistance:dn,getPointersMaxDistance:un}),F.init()})(),{get pointers(){return v},get styles(){return fe},get pluginsManager(){return F},get min(){return rs()},get max(){return is()},get step(){return on()},get pointersOverlap(){return yn()},set pointersOverlap(d){wn(d)},get pointersMinDistance(){return dn()},set pointersMinDistance(d){xn(d)},get pointersMaxDistance(){return un()},set pointersMaxDistance(d){_n(d)},get disabled(){return mn()},set disabled(d){$n(d)},get data(){return ln()},get type(){return cn()},set type(d){Cn(d)},get rightToLeft(){return pn()},set rightToLeft(d){kn(d)},get bottomToTop(){return fn()},set bottomToTop(d){Pn(d)},get round(){return hn()},set round(d){An(d)},get animateOnClick(){return wr},set animateOnClick(d){Za(d)},get keyboardDisabled(){return gn()},set keyboardDisabled(d){Xa(d)},get mousewheelDisabled(){return vn()},set mousewheelDisabled(d){Ka(d)},get rangeDragging(){return bn()},set rangeDragging(d){ls(d)},setMin:ss,setMax:ns,setValue:as,setStep:os,setData:Sn,getTextValue:Vr,setAriaLabel:Qa,getAriaLabel:_c,addPointer:Pc,removePointer:Ac,destroy:()=>{u.removeEventListener("mousedown",Ia),u.removeEventListener("mouseup",Ji),u.removeEventListener("touchmove",Lr),u.removeEventListener("touchstart",Lr),document.removeEventListener("wheel",es);for(let d of v)d.destroy();F==null||F.destroy()}}},uc=(l,u,w)=>{let v=Pe.find(([F,j,ge,we])=>j.replace("#","")===u.replace(/\d+/g,""));if(v&&l.styles){let[F,j,ge,we]=v,X=u.replace(/\D/g,"").trim(),De=X===""||X==="0"||X==="1"?0:Fe(X,0)-1;l.styles.setStyle(F,w,De);return}switch(l&&l.pluginsManager&&l.pluginsManager.onAttrChange(u,w),u){case f:{l.setMin(w);break}case b:{l.setMax(w);break}case $:{l.setStep(w);break}case a:{l.pointersOverlap=qe(w);break}case o:{l.pointersMinDistance=Fe(w,0);break}case p:{l.rangeDragging=qe(w);break}case h:{l.pointersMaxDistance=Fe(w,1/0);break}case N:{l.disabled=qe(w);break}case z:{l.keyboardDisabled=qe(w);break}case H:{l.mousewheelDisabled=qe(w);break}case m:{l.setData(w);break}case D:{l.type=w;break}case I:{l.rightToLeft=qe(w);break}case U:{l.bottomToTop=qe(w);break}case C:{l.round=Fe(w,zr);break}case k:{l.styles&&(l.styles.theme=w);break}case Kt:{l.animateOnClick=w;break}}let M=null;if(/^value([0-9]*)$/.test(u)&&(M="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(M="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(M="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(M="pointer-shape"),!M)return;let ee=u.replace(/\D/g,"").trim(),fe=ee===""||ee==="0"||ee==="1"?0:Fe(ee,0)-1;switch(M){case"value":{l.setValue(w,fe);break}case"pointer-disabled":{let F=l==null?void 0:l.pointers[fe];if(!F)return;F.disabled=qe(w);break}case"aria-label":{l.setAriaLabel(fe,w);break}case"pointer-shape":{l.styles&&l.styles.setPointerShape(fe,w);break}}},pc=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(l){this.slider&&this.slider.setStep(l)}get step(){var l;return(l=this.slider)==null?void 0:l.step}set disabled(l){this.slider&&(this.slider.disabled=l)}get disabled(){var l,u;return(u=(l=this.slider)==null?void 0:l.disabled)!=null?u:!1}set data(l){var u;(u=this.slider)==null||u.setData(l)}get data(){var l;return(l=this.slider)==null?void 0:l.data}set min(l){var u;(u=this.slider)==null||u.setMin(l)}get min(){var l;return(l=this.slider)==null?void 0:l.min}set max(l){var u;(u=this.slider)==null||u.setMax(l)}get max(){var l;return(l=this.slider)==null?void 0:l.max}set round(l){!this.slider||(this.slider.round=l)}get round(){var l,u;return(u=(l=this.slider)==null?void 0:l.round)!=null?u:zr}set type(l){!this.slider||(this.slider.type=l??it)}get type(){var l;return((l=this.slider)==null?void 0:l.type)||it}set pointersOverlap(l){!this.slider||(this.slider.pointersOverlap=l)}get pointersOverlap(){var l,u;return(u=(l=this.slider)==null?void 0:l.pointersOverlap)!=null?u:!1}set pointersMinDistance(l){!this.slider||(this.slider.pointersMinDistance=l)}get pointersMinDistance(){var l,u;return(u=(l=this.slider)==null?void 0:l.pointersMinDistance)!=null?u:0}set pointersMaxDistance(l){!this.slider||(this.slider.pointersMaxDistance=l)}get pointersMaxDistance(){var l,u;return(u=(l=this.slider)==null?void 0:l.pointersMaxDistance)!=null?u:1/0}set theme(l){!this.slider||!this.slider.styles||(this.slider.styles.theme=l)}get theme(){var l,u,w;return(w=(u=(l=this.slider)==null?void 0:l.styles)==null?void 0:u.theme)!=null?w:null}set rtl(l){!this.slider||(this.slider.rightToLeft=l)}get rtl(){var l,u;return(u=(l=this.slider)==null?void 0:l.rightToLeft)!=null?u:!1}set btt(l){!this.slider||(this.slider.bottomToTop=l)}get btt(){var l,u;return(u=(l=this.slider)==null?void 0:l.bottomToTop)!=null?u:!1}set keyboardDisabled(l){!this.slider||(this.slider.keyboardDisabled=l)}get keyboardDisabled(){var l,u;return(u=(l=this.slider)==null?void 0:l.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(l){!this.slider||(this.slider.mousewheelDisabled=l)}get mousewheelDisabled(){var l,u;return(u=(l=this.slider)==null?void 0:l.mousewheelDisabled)!=null?u:!1}set animateOnClick(l){!this.slider||(this.slider.animateOnClick=l)}get animateOnClick(){var l;return(l=this.slider)==null?void 0:l.animateOnClick}get rangeDragging(){var l,u;return(u=(l=this.slider)==null?void 0:l.rangeDragging)!=null?u:!1}set rangeDragging(l){this.slider&&(this.slider.rangeDragging=qe(l))}get externalCSSList(){return this._externalCSSList}addPointer(l){var u,w;if(!this.slider)return;let v=(w=(u=this.slider)==null?void 0:u.addPointer(l))!=null?w:0;La(this,this.slider,v,`value${v+1}`,`ariaLabel${v+1}`,`pointerShape${v+1}`,`pointer${v+1}Disabled`)}removePointer(){var l;!this.slider||(l=this.slider)==null||l.removePointer()}addCSS(l){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=l,this.shadowRoot.appendChild(u)}connectedCallback(){var l,u;if(!this.shadowRoot)return;this._externalCSSList=ne(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let w=(l=this.shadowRoot)==null?void 0:l.querySelector(".pointer");if(!w)return;let v=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!v)return;let M=lc(this,w);this.slider=dc(this,v,M),cc(this,this.slider),this._observer=new MutationObserver(ee=>{ee.forEach(fe=>{var F;if(!this.slider||fe.type!=="attributes")return;let j=fe.attributeName;!j||uc(this.slider,j,(F=this.getAttribute(j))!=null?F:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},an=pc;window.tcRangeSlider=an,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",an),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends an{})})();(()=>{var t=(o,h,p,m,f)=>{let b=h-o;return b===0?p:(m-p)*(f-o)/b+p},e=o=>!isNaN(parseFloat(o))&&isFinite(o),r=(o,h)=>e(o)?Number(o):h,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,h=null,p=null,m=null,f=null,b=!1,$=s,C=n,D=()=>{var E;let Y=(E=o==null?void 0:o.shadowRoot)==null?void 0:E.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),p.append(m),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),Y.append(p)},k=()=>{!h||!p||p.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},I=()=>{var E;if(!p||!h)return;let Y=h.getMin(),G=h.getMax(),K=h.getType()==="vertical",ce=h.isRightToLeft()||h.isBottomToTop();for(let ie=0;ie<$;ie++){let se=document.createElement("div");se.classList.add("mark",`mark-${ie}`);let de=$===0?0:ie*100/($-1);K?ce?se.style.top=`${100-de}%`:se.style.top=`${de}%`:ce?se.style.left=`${100-de}%`:se.style.left=`${de}%`,m==null||m.append(se)}let q=h.getData();for(let ie=0;ie<C;ie++){let se=document.createElement("div");se.classList.add("mark-value",`mark-value-${ie}`);let de=C===0?0:ie*100/(C-1),Te=t(0,C-1,Y,G,ie);se.textContent=(q?(E=q[Math.round(Te)])!=null?E:"":Te).toString(),K?ce?se.style.top=`${100-de}%`:se.style.top=`${de}%`:ce?se.style.left=`${100-de}%`:se.style.left=`${de}%`,f==null||f.append(se)}},U=(E,Y)=>{le(),$=E,C=Y,$<=0&&($=s),C<=0&&(C=n),D(),I(),k()},N=E=>{b=E,b?(D(),I(),k()):le()},z=E=>{!p||p.style.setProperty("--marks-color",E)},H=E=>{!p||p.style.setProperty("--values-color",E)},le=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(E,Y,G,K)=>{var ce,q;h=K,o=E,b=i(o.getAttribute("marks")),b&&(U(r(o.getAttribute("marks-count"),s),r(o.getAttribute("marks-values-count"),n)),z((ce=o.getAttribute("marks-color"))!=null?ce:"#cbd5e1"),H((q=o.getAttribute("marks-values-color"))!=null?q:"#475569"))},onAttrChange:(E,Y)=>{E==="marks"&&N(i(Y)),E==="marks-count"&&U(r(Y,s),C),E==="marks-values-count"&&U($,r(Y,n)),E==="marks-color"&&z(Y),E==="marks-values-color"&&H(Y)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return b??!1},set:E=>{N(i(E))}}},{name:"marksCount",attributes:{get(){return $??s},set:E=>{U(r(E,s),C)}}},{name:"marksValuesCount",attributes:{get(){return $??s},set:E=>{U($,r(E,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:E=>{z(E)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:E=>{H(E)}}}],destroy:le,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var em=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,ar=(t,e,r,i)=>{for(var s=i>1?void 0:i?tm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&em(e,r,s),s};let It=class extends Dt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Me(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.imposeRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?y`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:y`

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

        `}};It.styles=pe`

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
    
    `;ar([oe({context:Yl,subscribe:!0}),x()],It.prototype,"min",2);ar([oe({context:Gl,subscribe:!0}),x()],It.prototype,"max",2);ar([oe({context:da,subscribe:!0}),x()],It.prototype,"from",2);ar([oe({context:ua,subscribe:!0}),x()],It.prototype,"to",2);ar([x()],It.prototype,"hasFixedFrom",2);ar([x()],It.prototype,"hasFixedTo",2);ar([oe({context:Ys,subscribe:!0}),x()],It.prototype,"palette",2);ar([x()],It.prototype,"sliderRef",2);ar([x()],It.prototype,"initialised",2);It=ar([Z("registry-range-slider")],It);var rm=Object.defineProperty,im=Object.getOwnPropertyDescriptor,Xi=(t,e,r,i)=>{for(var s=i>1?void 0:i?im(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&rm(e,r,s),s};let ni=class extends Dt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?W:y`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Xi([oe({context:da,subscribe:!0})],ni.prototype,"from",2);Xi([oe({context:ua,subscribe:!0})],ni.prototype,"to",2);Xi([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],ni.prototype,"fixed",2);Xi([g({type:String,reflect:!0,attribute:!0})],ni.prototype,"separator",2);ni=Xi([Z("registry-range-display")],ni);var sm=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,qs=(t,e,r,i)=>{for(var s=i>1?void 0:i?nm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&sm(e,r,s),s};let ai=class extends Dt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return y`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":W}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>y`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():y`
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
        `}};ai.styles=pe`

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


    `;qs([x()],ai.prototype,"histogram",2);qs([g({type:Boolean,reflect:!0})],ai.prototype,"interactive",2);qs([g({type:String,reflect:!0})],ai.prototype,"height",2);ai=qs([Z("registry-histogram")],ai);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Es extends aa{constructor(e){if(super(e),this.it=W,e.type!==na.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===W||e==null)return this._t=void 0,this.it=e;if(e===Cr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Es.directiveName="unsafeHTML",Es.resultType=1;const Rt=Ws(Es);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vn extends Es{}Vn.directiveName="unsafeSVG",Vn.resultType=2;const ac=Ws(Vn);var am=Object.defineProperty,om=Object.getOwnPropertyDescriptor,Xs=(t,e,r,i)=>{for(var s=i>1?void 0:i?om(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&am(e,r,s),s};let oi=class extends ui{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?W:y`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([e,r])=>{const i={[e]:!0,button:!0,switch:!0,active:r.key===this.value.key};return y`
                        
                        <button 
                            class=${er(i)} 
                            @click=${()=>{this.group.tool.selectTool(r)}}
                            @mouseenter=${()=>{this.hint=r.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${ac(r.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};oi.styles=pe`

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

    `;Xs([oe({context:pa,subscribe:!0}),x()],oi.prototype,"value",2);Xs([oe({context:fa,subscribe:!0}),x()],oi.prototype,"tools",2);Xs([x()],oi.prototype,"hint",2);oi=Xs([Z("group-tool-buttons")],oi);var lm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,$a=(t,e,r,i)=>{for(var s=i>1?void 0:i?cm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&lm(e,r,s),s};let Ti=class extends ui{connectedCallback(){super.connectedCallback()}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?W:y`
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return y`
                        
                        <button 
                            class=${er(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${e.name}
                        >
                            ${ac(e.icon)}
                        </button>
                        
                    `})}
        `}};Ti.styles=pe`

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

    `;$a([oe({context:pa,subscribe:!0}),x()],Ti.prototype,"value",2);$a([oe({context:fa,subscribe:!0}),x()],Ti.prototype,"tools",2);Ti=$a([Z("group-tool-bar")],Ti);var hm=Object.defineProperty,Ki=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&hm(e,r,s),s};class Ke extends ui{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Ki([oe({context:ma,subscribe:!0}),x()],Ke.prototype,"parentFileProviderElement");Ki([oe({context:Zl,subscribe:!0}),x()],Ke.prototype,"loading");Ki([oe({context:Xl,subscribe:!0}),x()],Ke.prototype,"file");Ki([oe({context:Kl,subscribe:!0}),x()],Ke.prototype,"failure");Ki([oe({context:Jl,subscribe:!0}),x()],Ke.prototype,"recording");var dm=Object.defineProperty,um=Object.getOwnPropertyDescriptor,pm=(t,e,r,i)=>{for(var s=i>1?void 0:i?um(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&dm(e,r,s),s};let Yn=class extends Ke{constructor(){super(...arguments),this.container=Me()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return y`
            <div ${je(this.container)} class=${er(r)} part="file-canvas-container">
            
                ${this.loading===!0?y`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?y`<div class="error-wrapper">
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
                        </div>`:W}
            
            </div>
        
        `}};Yn.styles=pe`
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
    `;Yn=pm([Z("file-canvas")],Yn);var fm=Object.defineProperty,mm=Object.getOwnPropertyDescriptor,gm=(t,e,r,i)=>{for(var s=i>1?void 0:i?mm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&fm(e,r,s),s};let Gn=class extends Ke{onInstanceCreated(t){}onFailure(t){}render(){return this.file?y`
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
        `:W}};Gn.styles=pe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Gn=gm([Z("file-share-button")],Gn);var vm=Object.defineProperty,ym=Object.getOwnPropertyDescriptor,bm=(t,e,r,i)=>{for(var s=i>1?void 0:i?ym(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&vm(e,r,s),s};let qn=class extends Ke{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?y`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${Rt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${Rt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?Rt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):W}

                        ${Rt(this.renderRow("Time",ta.human(this.file.timestamp)))}

                        ${Rt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${Rt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Rt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${Rt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${Rt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${Rt(this.renderRow("Type",this.file.service.parser.name))}
                    ${Rt(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>y`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:W}};qn.styles=pe`

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
    
    `;qn=bm([Z("file-info-button")],qn);var wm=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,_m=(t,e,r,i)=>{for(var s=i>1?void 0:i?xm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&wm(e,r,s),s};let Xn=class extends Ke{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?W:y`

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

                    ${this.file.timeline.isSequence?y`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:W}
            
            </thermal-dropdown>

        
        `}};Xn.styles=pe`

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
    
    `;Xn=_m([Z("file-download-dropdown")],Xn);var $m=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,vr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&$m(e,r,s),s};let Pt=class extends Ke{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Me(),this.barRef=Me(),this.containerRef=Me(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<Pt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}handleBarHover(t){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(r)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,o;const t=this.file;if(t===void 0)return W;if(t.duration===0)return W;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return y`
            <div class="${er(e)}" ${je(this.containerRef)}>


                ${t!==void 0?y`
                        <div class="container">

                            <div class="${er(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?y`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:y`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>


                            <div class="${er(s)}"  ${je(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${je(this.barRef)}></div>
                                    ${this.cursor?y`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(h=>y`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:W}

            
            
            </div>

            ${this.currentFrame!==void 0?y`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${kr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${kr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(o=this.file)==null?void 0:o.frameCount}</span>
                        </div>
                    </div>`:W}

          `}};Pt.collapseWidth=500;Pt.styles=pe`
    
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
    
    `;vr([oe({context:wa,subscribe:!0}),x()],Pt.prototype,"playing",2);vr([oe({context:Gi,subscribe:!0}),x()],Pt.prototype,"currentFrame",2);vr([oe({context:ba,subscribe:!0}),x()],Pt.prototype,"duration",2);vr([oe({context:ec,subscribe:!0}),x()],Pt.prototype,"mayStop",2);vr([oe({context:va,subscribe:!0})],Pt.prototype,"cursor",2);vr([oe({context:ya,subscribe:!0})],Pt.prototype,"cursorSetter",2);vr([oe({context:xa,subscribe:!0})],Pt.prototype,"markers",2);vr([x()],Pt.prototype,"collapsed",2);Pt=vr([Z("file-timeline")],Pt);var Cm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,Sa=(t,e,r,i)=>{for(var s=i>1?void 0:i?km(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Cm(e,r,s),s};let Li=class extends Ke{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?W:y`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(ra).map(([t])=>y`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof ur&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Li.styles=pe`

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
    
    `;Sa([g({type:String,reflect:!0})],Li.prototype,"enabled",2);Sa([oe({context:Ql,subscribe:!0}),x()],Li.prototype,"playbackSpeed",2);Li=Sa([Z("file-playback-speed-dropdown")],Li);var Pm=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,Ca=(t,e,r,i)=>{for(var s=i>1?void 0:i?Am(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Pm(e,r,s),s};let Ri=class extends Ke{constructor(){super(...arguments),this.container=Me()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return y`
            <div class="container">
            
                <video ${je(this.container)} preload="metadata">

                    ${this.url===void 0?W:y`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Ri.styles=pe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Ca([oe({context:Gi,subscribe:!0}),x()],Ri.prototype,"currentFrame",2);Ca([g({type:String,reflect:!0,attribute:!0})],Ri.prototype,"url",2);Ri=Ca([Z("file-video")],Ri);const Om=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),kr(r,"mm:ss:SSS")},Dm=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(r[0]),s=parseInt(r[1]),n=parseInt(r[2]);return i*60*1e3+s*1e3+n};var Em=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,or=(t,e,r,i)=>{for(var s=i>1?void 0:i?Tm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Em(e,r,s),s};const ka={fromAttribute:t=>t===null?null:Dm(t),toAttribute:t=>t===null?null:Om(t)};let Bt=class extends Ke{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,i){var s;super.attributeChangedCallback(e,r,i),this.log(e,r,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(s=>s.lang==="cs-CZ");if(r)return r;const i=e.find(s=>s.default===!0);return i||null}render(){return W}};or([oe({context:wa,subscribe:!0}),x()],Bt.prototype,"playing",2);or([oe({context:ga,subscribe:!0}),x()],Bt.prototype,"ms",2);or([g({type:String,reflect:!0,attribute:!0})],Bt.prototype,"label",2);or([g({type:String,reflect:!0,attribute:!0,converter:ka})],Bt.prototype,"start",2);or([g({type:String,reflect:!0,attribute:!0,converter:ka})],Bt.prototype,"end",2);or([g({type:String,reflect:!0,attribute:!0,converter:ka})],Bt.prototype,"dur",2);or([g({type:String,reflect:!0,attribute:!0})],Bt.prototype,"active",2);or([g({type:String,reflect:!0,attribute:!0})],Bt.prototype,"pauseOnActivate",2);or([g({type:String,reflect:!0,attribute:!0})],Bt.prototype,"say",2);Bt=or([Z("file-marker")],Bt);var Lm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,Br=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Lm(e,r,s),s};let fr=class extends Ke{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return y`

            <div class="${er(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};fr.styles=pe`
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


    `;Br([oe({context:ba,subscribe:!0}),x()],fr.prototype,"duration",2);Br([oe({context:Gi,subscribe:!0}),x()],fr.prototype,"currentFrame",2);Br([oe({context:ga,subscribe:!0}),x()],fr.prototype,"ms",2);Br([g({type:Number,reflect:!0,attribute:!0})],fr.prototype,"start",2);Br([g({type:Number,reflect:!0,attribute:!0})],fr.prototype,"end",2);Br([x()],fr.prototype,"active",2);fr=Br([Z("file-marker-timeline")],fr);var Mm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,oc=(t,e,r,i)=>{for(var s=i>1?void 0:i?Um(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Mm(e,r,s),s};let Ts=class extends Ke{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return y`
            <div>


            ${this.markers.map(t=>t.active?y`<div class="item">
                    <h2>${t.label}</h2>
                    ${Rt(t.innerHTML)}
                    </div>`:W)}

            
            
            </div>

          `}};Ts.styles=pe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;oc([oe({context:xa,subscribe:!0})],Ts.prototype,"markers",2);Ts=oc([Z("file-marks-content")],Ts);var Im=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,Pa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Im(e,r,s),s};let Mi=class extends kt{updated(e){if(super.updated(e),e.has("analysis")){const r=e.get("analysis");r&&r.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return y`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const r=e.target,i=r.value!==""?r.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Mi.styles=pe`

    
    `;Pa([g()],Mi.prototype,"analysis",2);Pa([x()],Mi.prototype,"name",2);Mi=Pa([Z("analysis-name")],Mi);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*jm(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}var Wm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Aa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Nm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Wm(e,r,s),s};let Ui=class extends kt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const r=this.analysis;this.color=r.initialColor,r.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(t){return y`<i style="background-color: ${t};" aria-hidden></i><span>${t}</span>`}render(){return this.color===void 0?W:y`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${jm(ys,t=>y`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(t)}}>
                        ${this.renderColor(t)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Ui.styles=pe`

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
    
    `;Aa([g()],Ui.prototype,"analysis",2);Aa([x()],Ui.prototype,"color",2);Ui=Aa([Z("analysis-color")],Ui);var Hm=Object.defineProperty,Bm=Object.getOwnPropertyDescriptor,jt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Hm(e,r,s),s};let wt=class extends kt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onMoveOrResize.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height,this.right=r.left+r.width,this.bottom=r.top+r.height,this.maxX=r.file.width,this.maxY=r.file.height,r.onMoveOrResize.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return y`

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
    
        
        `}};wt.styles=pe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;jt([g()],wt.prototype,"analysis",2);jt([x()],wt.prototype,"color",2);jt([x()],wt.prototype,"top",2);jt([x()],wt.prototype,"left",2);jt([x()],wt.prototype,"width",2);jt([x()],wt.prototype,"height",2);jt([x()],wt.prototype,"type",2);jt([x()],wt.prototype,"right",2);jt([x()],wt.prototype,"bottom",2);jt([x()],wt.prototype,"maxX",2);jt([x()],wt.prototype,"maxY",2);wt=jt([Z("edit-area")],wt);var zm=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,fi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zm(e,r,s),s};let Dr=class extends kt{constructor(){super(...arguments),this.topInputRef=Me(),this.leftInputRef=Me()}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onMoveOrResize.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.maxX=r.file.width,this.maxY=r.file.height,r.onMoveOrResize.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return y`

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
        
        `}};Dr.styles=pe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;fi([g()],Dr.prototype,"analysis",2);fi([x()],Dr.prototype,"top",2);fi([x()],Dr.prototype,"left",2);fi([x()],Dr.prototype,"maxX",2);fi([x()],Dr.prototype,"maxY",2);Dr=fi([Z("edit-point")],Dr);var Ym=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,Ks=(t,e,r,i)=>{for(var s=i>1?void 0:i?Gm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ym(e,r,s),s};let Ii=class extends kt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetName.delete(this.UUID);const r=this.analysis;this.name=r.name,this.type=r.getType(),r.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return y`

            <thermal-dialog label="Edit ${this.type} analysis">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof $r?y`<edit-point .analysis=${this.analysis}></edit-point>`:y`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Ks([g()],Ii.prototype,"analysis",2);Ks([x()],Ii.prototype,"name",2);Ks([x()],Ii.prototype,"type",2);Ii=Ks([Z("file-analysis-edit")],Ii);var qm=Object.defineProperty,Xm=Object.getOwnPropertyDescriptor,Et=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&qm(e,r,s),s};let pt=class extends Ke{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=Me(),this.graphRef=Me(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(t){t.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=t.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(r=>{this.graphWidth=r[0].contentRect.width,this.graphHeight=r[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,t=>{this.graphs=t}),this.hydrated=!0)}onFailure(){}update(t){super.update(t),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return y`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&y`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&y`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${je(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?y`<thermal-chart 
                        ${je(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:W}
            </div>

            

            </div>
        
        `}};pt.styles=pe`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Et([x()],pt.prototype,"hydrated",2);Et([g({reflect:!0})],pt.prototype,"graphWidth",2);Et([g({reflect:!0})],pt.prototype,"graphHeight",2);Et([x()],pt.prototype,"graphs",2);Et([oe({context:Gi,subscribe:!0})],pt.prototype,"currentFrame",2);Et([oe({context:va,subscribe:!0})],pt.prototype,"cursor",2);Et([oe({context:ya,subscribe:!0})],pt.prototype,"cursorSetter",2);Et([x()],pt.prototype,"shadowLeft",2);Et([x()],pt.prototype,"shadowTop",2);Et([x()],pt.prototype,"shadowWidth",2);Et([x()],pt.prototype,"shadowHeight",2);Et([oe({context:ha,subscribe:!0})],pt.prototype,"graphSmooth",2);pt=Et([Z("file-analysis-graph")],pt);var Km=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,yr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Km(e,r,s),s};let zt=class extends kt{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const r=this.analysis;this.name=r.name,this.selected=r.selected,this.color=r.initialColor,this.dimension=r.width+"x"+r.height,this.value={min:r.min,max:r.max,avg:r.avg},r.file.timeline.isSequence?this.may=r instanceof $r?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:r.graph.state.MIN,max:r.graph.state.MAX,avg:r.graph.state.AVG},r.onMoveOrResize.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),r.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),r.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),r.onSelected.set(this.UUID,()=>{this.selected=!0}),r.onDeselected.set(this.UUID,()=>{this.selected=!1}),r.onSetInitialColor.set(this.UUID,i=>{this.color=i}),r.onSetName.set(this.UUID,i=>{this.name=i})}}valueOrNothing(t){return t===void 0?"-":t.toFixed(2)+" °C"}renderCell(t,e,r,i){return y`
            <td class="${e?"may":"mayNot"} ${r?"active":"inactive"}">

                ${e?y`
                        <button
                            @click=${i}
                            style="background-color: ${r?this.color:"transparent"};"
                            title="${r?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(t)}
                        </button>
                    `:this.valueOrNothing(t)}

            </td>
        `}render(){return y`
        
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
        
        `}};zt.styles=pe`
    
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

    `;yr([g()],zt.prototype,"analysis",2);yr([x()],zt.prototype,"value",2);yr([x()],zt.prototype,"graph",2);yr([x()],zt.prototype,"may",2);yr([x()],zt.prototype,"dimension",2);yr([x()],zt.prototype,"color",2);yr([g({type:Boolean,reflect:!0,attribute:!0})],zt.prototype,"selected",2);yr([x()],zt.prototype,"name",2);zt=yr([Z("file-analysis-table-row")],zt);var Qm=Object.defineProperty,Jm=Object.getOwnPropertyDescriptor,Zs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Qm(e,r,s),s};let li=class extends Ke{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(t){console.log(t)}onInstanceCreated(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}hydrate(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?W:y`

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
                        ${this.hasHighlightedData?y`<thermal-button variant="foreground" @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:W}
                    </th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(t=>y`
                                <file-analysis-table-row
                                    .analysis=${t}
                                ></file-analysis-table-row>
                            `)}
            
            </tbody>

            </table>

            </div>
        `}};li.styles=pe`
    
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

        



    `;Zs([x()],li.prototype,"analysis",2);Zs([x()],li.prototype,"allSelected",2);Zs([x()],li.prototype,"hasHighlightedData",2);li=Zs([Z("file-analysis-table")],li);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=t=>t??W;var eg=Object.defineProperty,tg=Object.getOwnPropertyDescriptor,Gt=(t,e,r,i)=>{for(var s=i>1?void 0:i?tg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&eg(e,r,s),s};let At=class extends Ke{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(t){this.recorded=ta.human(t.timestamp)}onFailure(){}willUpdate(t){super.willUpdate(t),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}))}render(){return y`
        <thermal-app author=${Se(this.author)} recorded=${Se(this.recorded)} license=${Se(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label??this.file.fileName:"Loading..."}</thermal-button>

          
  
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

                  ${this.file&&this.file.timeline.isSequence?y` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:W}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?y`<file-share-button ></file-share-button>`:W}
            
              ${this.showabout===!0?y`<app-info-button ></app-info-button>`:W}

            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            ${this.file&&this.file.timeline.isSequence?y`<file-analysis-graph slot="post"></file-analysis-graph>`:W}



          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};At.styles=pe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Gt([g({type:Number})],At.prototype,"from",2);Gt([g({type:Number})],At.prototype,"to",2);Gt([g({type:Number})],At.prototype,"speed",2);Gt([g({type:String,reflect:!0,attribute:!0})],At.prototype,"showembed",2);Gt([g({type:String,reflect:!0,attribute:!0})],At.prototype,"showabout",2);Gt([g({type:String,reflect:!0,attribute:!0})],At.prototype,"showfullscreen",2);Gt([g()],At.prototype,"author",2);Gt([g()],At.prototype,"recorded",2);Gt([g()],At.prototype,"license",2);Gt([g()],At.prototype,"label",2);At=Gt([Z("file-app")],At);var rg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,ot=(t,e,r,i)=>{for(var s=i>1?void 0:i?ig(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&rg(e,r,s),s};let Je=class extends kt{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?W:y`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}" 
            analysis1=${Se(this.analysis1)}
            analysis2=${Se(this.analysis2)}
            analysis3=${Se(this.analysis3)}
            analysis4=${Se(this.analysis4)}
            analysis5=${Se(this.analysis5)}
            analysis6=${Se(this.analysis6)}
            analysis7=${Se(this.analysis7)}
          >

              <file-app 
                from=${Se(this.from)} 
                to=${Se(this.to)} 
                speed=${Se(this.speed)} 
                author=${Se(this.author)} 
                recorded=${Se(this.recorded)} 
                license=${Se(this.license)}
                label=${Se(this.label)}  
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};ot([g({type:String,reflect:!0})],Je.prototype,"palette",2);ot([g({type:Number})],Je.prototype,"from",2);ot([g({type:Number})],Je.prototype,"to",2);ot([g({type:Number,reflect:!0})],Je.prototype,"speed",2);ot([g({type:String,reflect:!0})],Je.prototype,"url",2);ot([g({type:String,reflect:!0})],Je.prototype,"analysis1",2);ot([g({type:String,reflect:!0})],Je.prototype,"analysis2",2);ot([g({type:String,reflect:!0})],Je.prototype,"analysis3",2);ot([g({type:String,reflect:!0})],Je.prototype,"analysis4",2);ot([g({type:String,reflect:!0})],Je.prototype,"analysis5",2);ot([g({type:String,reflect:!0})],Je.prototype,"analysis6",2);ot([g({type:String,reflect:!0})],Je.prototype,"analysis7",2);ot([g()],Je.prototype,"author",2);ot([g()],Je.prototype,"recorded",2);ot([g()],Je.prototype,"license",2);ot([g()],Je.prototype,"label",2);Je=ot([Z("thermal-file-app")],Je);var sg=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,ut=(t,e,r,i)=>{for(var s=i>1?void 0:i?ng(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&sg(e,r,s),s};let et=class extends Ke{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=Me(),this.contentContainerWidth=1e3}onInstanceCreated(t){this.recorded=ta.human(t.timestamp),this.hasAnalysis=t.analysis.layers.all.length>0,this.hasGraph=t.analysisData.value.values.length>1,this.isSequence=t.timeline.isSequence,t.timeline.addListener(this.UUID,()=>{this.isSequence=t.timeline.isSequence}),t.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),t.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(t){super.firstUpdated(t),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(r=>{this.contentContainerWidth=r[0].contentRect.width}).observe(this.contentContainerRef.value))}willUpdate(t){super.willUpdate(t),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}))}render(){var t,e;return y`
        <thermal-app author=${Se(this.author)} recorded=${Se(this.recorded)} license=${Se(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label??this.file.fileName:"Loading..."}</thermal-button>

          
  
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

                  ${this.file&&this.file.timeline.isSequence?y` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:W}

                  ${this.file&&this.file.timeline.isSequence?y` <thermal-field 
                    label="Graph lines"
                    hint="'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'."
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:W}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?y`<file-share-button ></file-share-button>`:W}
            
              ${this.showabout===!0?y`<app-info-button ></app-info-button>`:W}


            


            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${je(this.contentContainerRef)}>

                <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?y`<group-tool-bar></group-tool-bar>`:y`<group-tool-buttons></group-tool-buttons>`}
                </div>

                <div class="content-container__part content-container__left">


                  <registry-histogram slot="pre"></registry-histogram>
                  <registry-range-slider slot="pre"></registry-range-slider>
                  <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>

                  <file-canvas></file-canvas>
                  <file-timeline></file-timeline>
                </div>

                <div class="content-container__part content-container__right ${this.isSequence?"content-container__right__sequence":""}">

                  <div class="part analysis">
                    ${this.hasAnalysis?y`<file-analysis-table></file-analysis-table>`:y`<div class="placeholder">
                        <div class="placeholder-title">Analysis</div>
                        <div>You may select areas or points on the thermogram to see statistics here!</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((t=this.tool)==null?void 0:t.key)??"")?y`
                      <div>${(e=this.tool)==null?void 0:e.description}</div>
                    `:y`
                      <div>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-point")}>Add a point analysis</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>Add a rectangle analysis</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>Add a ellipsis analysis</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?y`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?y`<div class="placeholder">
                      <div class="placeholder-title">Graph</div>
                      <div>${this.hasAnalysis===!1?"Add analysis first to see the graph!":y`Click on an analysis <span style="display: inline-block;padding: 1px 4px; border-radius: var(--thermal-gap); border: 1px solid var(--thermal-slate);">value</span> to see its graph here!`}</div>
                    </div>`:W}
                  
                  </div>
                  `:W}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};et.styles=pe`

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
  
  `;ut([g({type:Number})],et.prototype,"from",2);ut([g({type:Number})],et.prototype,"to",2);ut([g({type:Number})],et.prototype,"speed",2);ut([g({type:String,reflect:!0,attribute:!0})],et.prototype,"showembed",2);ut([g({type:String,reflect:!0,attribute:!0})],et.prototype,"showabout",2);ut([g({type:String,reflect:!0,attribute:!0})],et.prototype,"showfullscreen",2);ut([x()],et.prototype,"hasAnalysis",2);ut([x()],et.prototype,"hasGraph",2);ut([x()],et.prototype,"tool",2);ut([x()],et.prototype,"isSequence",2);ut([g()],et.prototype,"author",2);ut([g()],et.prototype,"recorded",2);ut([g()],et.prototype,"license",2);ut([g()],et.prototype,"label",2);ut([x()],et.prototype,"contentContainerWidth",2);et=ut([Z("desktop-app")],et);var ag=Object.defineProperty,og=Object.getOwnPropertyDescriptor,lt=(t,e,r,i)=>{for(var s=i>1?void 0:i?og(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ag(e,r,s),s};let tt=class extends kt{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?W:y`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}"
            analysis1=${Se(this.analysis1)}
            analysis2=${Se(this.analysis2)}
            analysis3=${Se(this.analysis3)}
            analysis4=${Se(this.analysis4)}
            analysis5=${Se(this.analysis5)}
            analysis6=${Se(this.analysis6)}
            analysis7=${Se(this.analysis7)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              from=${Se(this.from)} 
              to=${Se(this.to)} 
              speed=${Se(this.speed)} 
              author=${Se(this.author)} 
              recorded=${Se(this.recorded)} 
              license=${Se(this.license)}
              label=${Se(this.label)}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};lt([g({type:String,reflect:!0})],tt.prototype,"palette",2);lt([g({type:Number})],tt.prototype,"from",2);lt([g({type:Number})],tt.prototype,"to",2);lt([g({type:Number,reflect:!0})],tt.prototype,"speed",2);lt([g({type:String,reflect:!0})],tt.prototype,"url",2);lt([g({type:String,reflect:!0})],tt.prototype,"analysis1",2);lt([g({type:String,reflect:!0})],tt.prototype,"analysis2",2);lt([g({type:String,reflect:!0})],tt.prototype,"analysis3",2);lt([g({type:String,reflect:!0})],tt.prototype,"analysis4",2);lt([g({type:String,reflect:!0})],tt.prototype,"analysis5",2);lt([g({type:String,reflect:!0})],tt.prototype,"analysis6",2);lt([g({type:String,reflect:!0})],tt.prototype,"analysis7",2);lt([g()],tt.prototype,"author",2);lt([g()],tt.prototype,"recorded",2);lt([g()],tt.prototype,"license",2);lt([g()],tt.prototype,"label",2);tt=lt([Z("thermal-desktop-app")],tt);var lg=Object.defineProperty,cg=Object.getOwnPropertyDescriptor,Oa=(t,e,r,i)=>{for(var s=i>1?void 0:i?cg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&lg(e,r,s),s};let Fi=class extends kt{constructor(){super(...arguments),this.dropinRef=Me(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return y`

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

                            ${this.loaded===!0?y`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:W}

                            <file-dropin ${je(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};Fi.styles=pe`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Oa([x()],Fi.prototype,"dropinRef",2);Oa([x()],Fi.prototype,"loaded",2);Fi=Oa([Z("thermal-dropin-app")],Fi);const In=window.matchMedia("(prefers-color-scheme: dark)"),Da="thermal-dark-mode",Io=()=>{document.body.classList.add(Da)},hg=()=>{document.body.classList.remove(Da)},dg=()=>{In.matches&&Io();const t=e=>{e.matches?Io():hg()};In.addEventListener("change",t),In.addListener(t)},ug=()=>{const t=document.createElement("link");t.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(t)},pg=Kn.toString().replaceAll(".","-"),fg=t=>`thermal__${t}__${pg}`,Fo=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",fg(t)),r.innerHTML=e,document.head.appendChild(r)},mg=()=>{Fo("rootVariables",`

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


            
        
        `),Fo("darkModeOverrides",`
        
            body.${Da} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};ug();console.info(`@labir/embed ${Kn}
Author: ${Ec}`);dg();mg();document.addEventListener("DOMContentLoaded",()=>{});
