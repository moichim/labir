var gl=Object.defineProperty;var vl=(r,e,t)=>e in r?gl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(vl(r,typeof e!="symbol"?e+"":e,t),t);const un="1.2.34",bl="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=globalThis,pn=Li.ShadowRoot&&(Li.ShadyCSS===void 0||Li.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fn=Symbol(),so=new WeakMap;let Io=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==fn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(pn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=so.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&so.set(t,e))}return e}toString(){return this.cssText}};const yl=r=>new Io(typeof r=="string"?r:r+"",void 0,fn),Oe=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Io(t,r,fn)},wl=(r,e)=>{if(pn)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Li.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},no=pn?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return yl(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xl,defineProperty:_l,getOwnPropertyDescriptor:kl,getOwnPropertyNames:$l,getOwnPropertySymbols:Pl,getPrototypeOf:Cl}=Object,qt=globalThis,oo=qt.trustedTypes,Sl=oo?oo.emptyScript:"",zs=qt.reactiveElementPolyfillSupport,Br=(r,e)=>r,Mi={toAttribute(r,e){switch(e){case Boolean:r=r?Sl:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},mn=(r,e)=>!xl(r,e),ao={attribute:!0,type:String,converter:Mi,reflect:!1,hasChanged:mn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),qt.litPropertyMetadata??(qt.litPropertyMetadata=new WeakMap);class br extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ao){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&_l(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=kl(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ao}static _$Ei(){if(this.hasOwnProperty(Br("elementProperties")))return;const e=Cl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Br("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Br("properties"))){const t=this.properties,i=[...$l(t),...Pl(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(no(s))}else e!==void 0&&t.push(no(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Mi).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Mi;this._$Em=s,this[s]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??mn)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}br.elementStyles=[],br.shadowRootOptions={mode:"open"},br[Br("elementProperties")]=new Map,br[Br("finalized")]=new Map,zs==null||zs({ReactiveElement:br}),(qt.reactiveElementVersions??(qt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=globalThis,Ui=zr.trustedTypes,lo=Ui?Ui.createPolicy("lit-html",{createHTML:r=>r}):void 0,jo="$lit$",Yt=`lit$${Math.random().toFixed(9).slice(2)}$`,Wo="?"+Yt,Ol=`<${Wo}>`,nr=document,Yr=()=>nr.createComment(""),qr=r=>r===null||typeof r!="object"&&typeof r!="function",No=Array.isArray,Al=r=>No(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Vs=`[ 	
\f\r]`,Wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,co=/-->/g,ho=/>/g,tr=RegExp(`>|${Vs}(?:([^\\s"'>=/]+)(${Vs}*=${Vs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uo=/'/g,po=/"/g,Ho=/^(?:script|style|textarea|title)$/i,El=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),D=El(1),Xt=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),fo=new WeakMap,ir=nr.createTreeWalker(nr,129);function Bo(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return lo!==void 0?lo.createHTML(e):e}const Dl=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=Wr;for(let l=0;l<t;l++){const u=r[l];let p,m,f=-1,y=0;for(;y<u.length&&(o.lastIndex=y,m=o.exec(u),m!==null);)y=o.lastIndex,o===Wr?m[1]==="!--"?o=co:m[1]!==void 0?o=ho:m[2]!==void 0?(Ho.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=tr):m[3]!==void 0&&(o=tr):o===tr?m[0]===">"?(o=s??Wr,f=-1):m[1]===void 0?f=-2:(f=o.lastIndex-m[2].length,p=m[1],o=m[3]===void 0?tr:m[3]==='"'?po:uo):o===po||o===uo?o=tr:o===co||o===ho?o=Wr:(o=tr,s=void 0);const _=o===tr&&r[l+1].startsWith("/>")?" ":"";n+=o===Wr?u+Ol:f>=0?(i.push(p),u.slice(0,f)+jo+u.slice(f)+Yt+_):u+Yt+(f===-2?l:_)}return[Bo(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class Xr{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,u=this.parts,[p,m]=Dl(e,t);if(this.el=Xr.createElement(p,i),ir.currentNode=this.el.content,t===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=ir.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(jo)){const y=m[o++],_=s.getAttribute(f).split(Yt),k=/([.?@])?(.*)/.exec(y);u.push({type:1,index:n,name:k[2],strings:_,ctor:k[1]==="."?Rl:k[1]==="?"?Tl:k[1]==="@"?Ml:qi}),s.removeAttribute(f)}else f.startsWith(Yt)&&(u.push({type:6,index:n}),s.removeAttribute(f));if(Ho.test(s.tagName)){const f=s.textContent.split(Yt),y=f.length-1;if(y>0){s.textContent=Ui?Ui.emptyScript:"";for(let _=0;_<y;_++)s.append(f[_],Yr()),ir.nextNode(),u.push({type:2,index:++n});s.append(f[y],Yr())}}}else if(s.nodeType===8)if(s.data===Wo)u.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(Yt,f+1))!==-1;)u.push({type:7,index:n}),f+=Yt.length-1}n++}}static createElement(e,t){const i=nr.createElement("template");return i.innerHTML=e,i}}function wr(r,e,t=r,i){var o,l;if(e===Xt)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=qr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=wr(r,s._$AS(r,e.values),s,i)),e}class Ll{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??nr).importNode(t,!0);ir.currentNode=s;let n=ir.nextNode(),o=0,l=0,u=i[0];for(;u!==void 0;){if(o===u.index){let p;u.type===2?p=new si(n,n.nextSibling,this,e):u.type===1?p=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(p=new Ul(n,this,e)),this._$AV.push(p),u=i[++l]}o!==(u==null?void 0:u.index)&&(n=ir.nextNode(),o++)}return ir.currentNode=nr,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class si{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=wr(this,e,t),qr(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Xt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Al(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==B&&qr(this._$AH)?this._$AA.nextSibling.data=e:this.T(nr.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Xr.createElement(Bo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new Ll(s,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=fo.get(e.strings);return t===void 0&&fo.set(e.strings,t=new Xr(e)),t}k(e){No(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new si(this.S(Yr()),this.S(Yr()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class qi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=wr(this,e,t,0),o=!qr(e)||e!==this._$AH&&e!==Xt,o&&(this._$AH=e);else{const l=e;let u,p;for(e=n[0],u=0;u<n.length-1;u++)p=wr(this,l[i+u],t,u),p===Xt&&(p=this._$AH[u]),o||(o=!qr(p)||p!==this._$AH[u]),p===B?e=B:e!==B&&(e+=(p??"")+n[u+1]),this._$AH[u]=p}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Rl extends qi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class Tl extends qi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class Ml extends qi{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=wr(this,e,t,0)??B)===Xt)return;const i=this._$AH,s=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ul{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){wr(this,e)}}const Ys=zr.litHtmlPolyfillSupport;Ys==null||Ys(Xr,si),(zr.litHtmlVersions??(zr.litHtmlVersions=[])).push("3.1.4");const Fl=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new si(e.insertBefore(Yr(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nt=class extends br{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Xt}};var Fo;nt._$litElement$=!0,nt.finalized=!0,(Fo=globalThis.litElementHydrateSupport)==null||Fo.call(globalThis,{LitElement:nt});const qs=globalThis.litElementPolyfillSupport;qs==null||qs({LitElement:nt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Il={attribute:!0,type:String,converter:Mi,reflect:!1,hasChanged:mn},jl=(r=Il,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,u,r)},init(l){return l!==void 0&&this.P(o,void 0,r),l}}}if(i==="setter"){const{name:o}=t;return function(l){const u=this[o];e.call(this,l),this.requestUpdate(o,u,r)}}throw Error("Unsupported decorator location: "+i)};function j(r){return(e,t)=>typeof t=="object"?jl(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(r){return j({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wl=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ni(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Wl(e,t,{get(){var u;const o=(u=this.renderRoot)==null?void 0:u.querySelector(n),l=(o==null?void 0:o.assignedElements(r))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nl=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xi=r=>(...e)=>({_$litDirective$:r,values:e});let vn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Vr(s,e);return!0},Fi=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},zo=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),zl(e)}};function Hl(r){this._$AN!==void 0?(Fi(this),this._$AM=r,zo(this)):this._$AM=r}function Bl(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Vr(i[n],!1),Fi(i[n]);else i!=null&&(Vr(i,!1),Fi(i));else Vr(this,r)}const zl=r=>{r.type==gn.CHILD&&(r._$AP??(r._$AP=Bl),r._$AQ??(r._$AQ=Hl))};class Vl extends vn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),zo(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Vr(this,e),Fi(this))}setValue(e){if(Nl(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=()=>new Yl;class Yl{}const Xs=new WeakMap,Ne=Xi(class extends Vl{render(r){return B}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),B}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=Xs.get(e);t===void 0&&(t=new WeakMap,Xs.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=Xs.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ql=Object.defineProperty,Xl=Object.getOwnPropertyDescriptor,Vo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xl(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ql(e,t,s),s};let Gr=class extends nt{constructor(){super(),this.dialogRef=Te(),this.closeButtonRef=Te(),this.invokerRef=Te()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return D`
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
        `}};Gr.shadowRootOptions={...nt.shadowRootOptions,mode:"open"};Gr.styles=Oe`

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

        
    
    `;Vo([j({type:String,reflect:!0})],Gr.prototype,"label",2);Gr=Vo([re("thermal-dialog")],Gr);var Gl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Gi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zl(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Gl(e,t,s),s};let Mt=class extends nt{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return D`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Mt.VARIANTS=["slate","primary","foreground","background"];Mt.shadowRootOptions={...nt.shadowRootOptions,mode:"open"};Mt.styles=Oe`

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
    
    `;Gi([j({type:String,converter:{fromAttribute:r=>Mt.VARIANTS.includes(r)?r:"slate",toAttribute:r=>r}})],Mt.prototype,"variant",2);Gi([j({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],Mt.prototype,"interactive",2);Gi([j({type:String})],Mt.prototype,"size",2);Mt=Gi([re("thermal-button")],Mt);const xr=Math.min,Rt=Math.max,Ii=Math.round,Gt=r=>({x:r,y:r}),Ql={left:"right",right:"left",bottom:"top",top:"bottom"},Kl={start:"end",end:"start"};function mo(r,e,t){return Rt(r,xr(e,t))}function oi(r,e){return typeof r=="function"?r(e):r}function Ut(r){return r.split("-")[0]}function Zi(r){return r.split("-")[1]}function Yo(r){return r==="x"?"y":"x"}function qo(r){return r==="y"?"height":"width"}function ai(r){return["top","bottom"].includes(Ut(r))?"y":"x"}function Xo(r){return Yo(ai(r))}function Jl(r,e,t){t===void 0&&(t=!1);const i=Zi(r),s=Xo(r),n=qo(s);let o=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=ji(o)),[o,ji(o)]}function ec(r){const e=ji(r);return[tn(r),e,tn(e)]}function tn(r){return r.replace(/start|end/g,e=>Kl[e])}function tc(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function rc(r,e,t,i){const s=Zi(r);let n=tc(Ut(r),t==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(tn)))),n}function ji(r){return r.replace(/left|right|bottom|top/g,e=>Ql[e])}function ic(r){return{top:0,right:0,bottom:0,left:0,...r}}function Go(r){return typeof r!="number"?ic(r):{top:r,right:r,bottom:r,left:r}}function _r(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function go(r,e,t){let{reference:i,floating:s}=r;const n=ai(e),o=Xo(e),l=qo(o),u=Ut(e),p=n==="y",m=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,y=i[l]/2-s[l]/2;let _;switch(u){case"top":_={x:m,y:i.y-s.height};break;case"bottom":_={x:m,y:i.y+i.height};break;case"right":_={x:i.x+i.width,y:f};break;case"left":_={x:i.x-s.width,y:f};break;default:_={x:i.x,y:i.y}}switch(Zi(e)){case"start":_[o]-=y*(t&&p?-1:1);break;case"end":_[o]+=y*(t&&p?-1:1);break}return _}const sc=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=t,l=n.filter(Boolean),u=await(o.isRTL==null?void 0:o.isRTL(e));let p=await o.getElementRects({reference:r,floating:e,strategy:s}),{x:m,y:f}=go(p,i,u),y=i,_={},k=0;for(let O=0;O<l.length;O++){const{name:C,fn:I}=l[O],{x:W,y:V,data:de,reset:te}=await I({x:m,y:f,initialPlacement:i,placement:y,strategy:s,middlewareData:_,rects:p,platform:o,elements:{reference:r,floating:e}});m=W??m,f=V??f,_={..._,[C]:{..._[C],...de}},te&&k<=50&&(k++,typeof te=="object"&&(te.placement&&(y=te.placement),te.rects&&(p=te.rects===!0?await o.getElementRects({reference:r,floating:e,strategy:s}):te.rects),{x:m,y:f}=go(p,y,u)),O=-1)}return{x:m,y:f,placement:y,strategy:s,middlewareData:_}};async function Zo(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:o,elements:l,strategy:u}=r,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:y=!1,padding:_=0}=oi(e,r),k=Go(_),C=l[y?f==="floating"?"reference":"floating":f],I=_r(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(C)))==null||t?C:C.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:m,strategy:u})),W=f==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,V=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),de=await(n.isElement==null?void 0:n.isElement(V))?await(n.getScale==null?void 0:n.getScale(V))||{x:1,y:1}:{x:1,y:1},te=_r(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:W,offsetParent:V,strategy:u}):W);return{top:(I.top-te.top+k.top)/de.y,bottom:(te.bottom-I.bottom+k.bottom)/de.y,left:(I.left-te.left+k.left)/de.x,right:(te.right-I.right+k.right)/de.x}}const nc=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:o,initialPlacement:l,platform:u,elements:p}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:y,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:O=!0,...C}=oi(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const I=Ut(s),W=Ut(l)===l,V=await(u.isRTL==null?void 0:u.isRTL(p.floating)),de=y||(W||!O?[ji(l)]:ec(l));!y&&k!=="none"&&de.push(...rc(l,O,k,V));const te=[l,...de],Ee=await Zo(e,C),N=[];let ve=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&N.push(Ee[I]),f){const pe=Jl(s,o,V);N.push(Ee[pe[0]],Ee[pe[1]])}if(ve=[...ve,{placement:s,overflows:N}],!N.every(pe=>pe<=0)){var oe,ue;const pe=(((oe=n.flip)==null?void 0:oe.index)||0)+1,be=te[pe];if(be)return{data:{index:pe,overflows:ve},reset:{placement:be}};let ie=(ue=ve.filter(we=>we.overflows[0]<=0).sort((we,Me)=>we.overflows[1]-Me.overflows[1])[0])==null?void 0:ue.placement;if(!ie)switch(_){case"bestFit":{var ye;const we=(ye=ve.map(Me=>[Me.placement,Me.overflows.filter(Qe=>Qe>0).reduce((Qe,Xe)=>Qe+Xe,0)]).sort((Me,Qe)=>Me[1]-Qe[1])[0])==null?void 0:ye[0];we&&(ie=we);break}case"initialPlacement":ie=l;break}if(s!==ie)return{reset:{placement:ie}}}return{}}}};function Qo(r){const e=xr(...r.map(n=>n.left)),t=xr(...r.map(n=>n.top)),i=Rt(...r.map(n=>n.right)),s=Rt(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function oc(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>_r(Qo(s)))}const ac=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:o}=e,{padding:l=2,x:u,y:p}=oi(r,e),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=oc(m),y=_r(Qo(m)),_=Go(l);function k(){if(f.length===2&&f[0].left>f[1].right&&u!=null&&p!=null)return f.find(C=>u>C.left-_.left&&u<C.right+_.right&&p>C.top-_.top&&p<C.bottom+_.bottom)||y;if(f.length>=2){if(ai(t)==="y"){const ue=f[0],ye=f[f.length-1],pe=Ut(t)==="top",be=ue.top,ie=ye.bottom,we=pe?ue.left:ye.left,Me=pe?ue.right:ye.right,Qe=Me-we,Xe=ie-be;return{top:be,bottom:ie,left:we,right:Me,width:Qe,height:Xe,x:we,y:be}}const C=Ut(t)==="left",I=Rt(...f.map(ue=>ue.right)),W=xr(...f.map(ue=>ue.left)),V=f.filter(ue=>C?ue.left===W:ue.right===I),de=V[0].top,te=V[V.length-1].bottom,Ee=W,N=I,ve=N-Ee,oe=te-de;return{top:de,bottom:te,left:Ee,right:N,width:ve,height:oe,x:Ee,y:de}}return y}const O=await n.getElementRects({reference:{getBoundingClientRect:k},floating:i.floating,strategy:o});return s.reference.x!==O.reference.x||s.reference.y!==O.reference.y||s.reference.width!==O.reference.width||s.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function lc(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=Ut(t),l=Zi(t),u=ai(t)==="y",p=["left","top"].includes(o)?-1:1,m=n&&u?-1:1,f=oi(e,r);let{mainAxis:y,crossAxis:_,alignmentAxis:k}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof k=="number"&&(_=l==="end"?k*-1:k),u?{x:_*m,y:y*p}:{x:y*p,y:_*m}}const cc=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:o,middlewareData:l}=e,u=await lc(e,r);return o===((t=l.offset)==null?void 0:t.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+u.x,y:n+u.y,data:{...u,placement:o}}}}},hc=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:C=>{let{x:I,y:W}=C;return{x:I,y:W}}},...u}=oi(r,e),p={x:t,y:i},m=await Zo(e,u),f=ai(Ut(s)),y=Yo(f);let _=p[y],k=p[f];if(n){const C=y==="y"?"top":"left",I=y==="y"?"bottom":"right",W=_+m[C],V=_-m[I];_=mo(W,_,V)}if(o){const C=f==="y"?"top":"left",I=f==="y"?"bottom":"right",W=k+m[C],V=k-m[I];k=mo(W,k,V)}const O=l.fn({...e,[y]:_,[f]:k});return{...O,data:{x:O.x-t,y:O.y-i}}}}};function Lr(r){return Ko(r)?(r.nodeName||"").toLowerCase():"#document"}function ht(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function Kt(r){var e;return(e=(Ko(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function Ko(r){return r instanceof Node||r instanceof ht(r).Node}function St(r){return r instanceof Element||r instanceof ht(r).Element}function Ot(r){return r instanceof HTMLElement||r instanceof ht(r).HTMLElement}function vo(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof ht(r).ShadowRoot}function li(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=wt(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function dc(r){return["table","td","th"].includes(Lr(r))}function Qi(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function bn(r){const e=yn(),t=wt(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function uc(r){let e=Zt(r);for(;Ot(e)&&!kr(e);){if(Qi(e))return null;if(bn(e))return e;e=Zt(e)}return null}function yn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function kr(r){return["html","body","#document"].includes(Lr(r))}function wt(r){return ht(r).getComputedStyle(r)}function Ki(r){return St(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function Zt(r){if(Lr(r)==="html")return r;const e=r.assignedSlot||r.parentNode||vo(r)&&r.host||Kt(r);return vo(e)?e.host:e}function Jo(r){const e=Zt(r);return kr(e)?r.ownerDocument?r.ownerDocument.body:r.body:Ot(e)&&li(e)?e:Jo(e)}function rn(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Jo(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),o=ht(s);return n?e.concat(o,o.visualViewport||[],li(s)?s:[],o.frameElement&&t?rn(o.frameElement):[]):e.concat(s,rn(s,[],t))}function ea(r){const e=wt(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Ot(r),n=s?r.offsetWidth:t,o=s?r.offsetHeight:i,l=Ii(t)!==n||Ii(i)!==o;return l&&(t=n,i=o),{width:t,height:i,$:l}}function ta(r){return St(r)?r:r.contextElement}function yr(r){const e=ta(r);if(!Ot(e))return Gt(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=ea(e);let o=(n?Ii(t.width):t.width)/i,l=(n?Ii(t.height):t.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const pc=Gt(0);function ra(r){const e=ht(r);return!yn()||!e.visualViewport?pc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function fc(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==ht(r)?!1:e}function Zr(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=ta(r);let o=Gt(1);e&&(i?St(i)&&(o=yr(i)):o=yr(r));const l=fc(n,t,i)?ra(n):Gt(0);let u=(s.left+l.x)/o.x,p=(s.top+l.y)/o.y,m=s.width/o.x,f=s.height/o.y;if(n){const y=ht(n),_=i&&St(i)?ht(i):i;let k=y,O=k.frameElement;for(;O&&i&&_!==k;){const C=yr(O),I=O.getBoundingClientRect(),W=wt(O),V=I.left+(O.clientLeft+parseFloat(W.paddingLeft))*C.x,de=I.top+(O.clientTop+parseFloat(W.paddingTop))*C.y;u*=C.x,p*=C.y,m*=C.x,f*=C.y,u+=V,p+=de,k=ht(O),O=k.frameElement}}return _r({width:m,height:f,x:u,y:p})}function mc(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",o=Kt(i),l=e?Qi(e.floating):!1;if(i===o||l&&n)return t;let u={scrollLeft:0,scrollTop:0},p=Gt(1);const m=Gt(0),f=Ot(i);if((f||!f&&!n)&&((Lr(i)!=="body"||li(o))&&(u=Ki(i)),Ot(i))){const y=Zr(i);p=yr(i),m.x=y.x+i.clientLeft,m.y=y.y+i.clientTop}return{width:t.width*p.x,height:t.height*p.y,x:t.x*p.x-u.scrollLeft*p.x+m.x,y:t.y*p.y-u.scrollTop*p.y+m.y}}function gc(r){return Array.from(r.getClientRects())}function ia(r){return Zr(Kt(r)).left+Ki(r).scrollLeft}function vc(r){const e=Kt(r),t=Ki(r),i=r.ownerDocument.body,s=Rt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Rt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-t.scrollLeft+ia(r);const l=-t.scrollTop;return wt(i).direction==="rtl"&&(o+=Rt(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:l}}function bc(r,e){const t=ht(r),i=Kt(r),s=t.visualViewport;let n=i.clientWidth,o=i.clientHeight,l=0,u=0;if(s){n=s.width,o=s.height;const p=yn();(!p||p&&e==="fixed")&&(l=s.offsetLeft,u=s.offsetTop)}return{width:n,height:o,x:l,y:u}}function yc(r,e){const t=Zr(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=Ot(r)?yr(r):Gt(1),o=r.clientWidth*n.x,l=r.clientHeight*n.y,u=s*n.x,p=i*n.y;return{width:o,height:l,x:u,y:p}}function bo(r,e,t){let i;if(e==="viewport")i=bc(r,t);else if(e==="document")i=vc(Kt(r));else if(St(e))i=yc(e,t);else{const s=ra(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return _r(i)}function sa(r,e){const t=Zt(r);return t===e||!St(t)||kr(t)?!1:wt(t).position==="fixed"||sa(t,e)}function wc(r,e){const t=e.get(r);if(t)return t;let i=rn(r,[],!1).filter(l=>St(l)&&Lr(l)!=="body"),s=null;const n=wt(r).position==="fixed";let o=n?Zt(r):r;for(;St(o)&&!kr(o);){const l=wt(o),u=bn(o);!u&&l.position==="fixed"&&(s=null),(n?!u&&!s:!u&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||li(o)&&!u&&sa(r,o))?i=i.filter(m=>m!==o):s=l,o=Zt(o)}return e.set(r,i),i}function xc(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const o=[...t==="clippingAncestors"?Qi(e)?[]:wc(e,this._c):[].concat(t),i],l=o[0],u=o.reduce((p,m)=>{const f=bo(e,m,s);return p.top=Rt(f.top,p.top),p.right=xr(f.right,p.right),p.bottom=xr(f.bottom,p.bottom),p.left=Rt(f.left,p.left),p},bo(e,l,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function _c(r){const{width:e,height:t}=ea(r);return{width:e,height:t}}function kc(r,e,t){const i=Ot(e),s=Kt(e),n=t==="fixed",o=Zr(r,!0,n,e);let l={scrollLeft:0,scrollTop:0};const u=Gt(0);if(i||!i&&!n)if((Lr(e)!=="body"||li(s))&&(l=Ki(e)),i){const f=Zr(e,!0,n,e);u.x=f.x+e.clientLeft,u.y=f.y+e.clientTop}else s&&(u.x=ia(s));const p=o.left+l.scrollLeft-u.x,m=o.top+l.scrollTop-u.y;return{x:p,y:m,width:o.width,height:o.height}}function Gs(r){return wt(r).position==="static"}function yo(r,e){return!Ot(r)||wt(r).position==="fixed"?null:e?e(r):r.offsetParent}function na(r,e){const t=ht(r);if(Qi(r))return t;if(!Ot(r)){let s=Zt(r);for(;s&&!kr(s);){if(St(s)&&!Gs(s))return s;s=Zt(s)}return t}let i=yo(r,e);for(;i&&dc(i)&&Gs(i);)i=yo(i,e);return i&&kr(i)&&Gs(i)&&!bn(i)?t:i||uc(r)||t}const $c=async function(r){const e=this.getOffsetParent||na,t=this.getDimensions,i=await t(r.floating);return{reference:kc(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Pc(r){return wt(r).direction==="rtl"}const Cc={convertOffsetParentRelativeRectToViewportRelativeRect:mc,getDocumentElement:Kt,getClippingRect:xc,getOffsetParent:na,getElementRects:$c,getClientRects:gc,getDimensions:_c,getScale:yr,isElement:St,isRTL:Pc},Sc=cc,Oc=hc,Ac=nc,Ec=ac,Dc=(r,e,t)=>{const i=new Map,s={platform:Cc,...t},n={...s.platform,_c:i};return sc(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=Xi(class extends vn{constructor(r){var e;if(super(r),r.type!==gn.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Xt}});var Lc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,ci=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rc(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Lc(e,t,s),s};let Ft=class extends nt{constructor(){super(...arguments),this.dropdownRef=Te(),this.invokerRef=Te(),this.optionsRef=Te(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Dc(this.invokerRef.value,this.optionsRef.value,{middleware:[Sc(2),Ac(),Ec(),Oc()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,o;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(o=this.dropdownRef.value)==null||o.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return D`

            <div class="dropdown" ${Ne(this.dropdownRef)}>

                <thermal-button class="${Tt(r)}" ${Ne(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
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
        
        `}};Ft.shadowRootOptions={...nt.shadowRootOptions,mode:"open"};Ft.styles=Oe`

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
    
    `;ci([ni({slot:"option"})],Ft.prototype,"_options",2);ci([j({type:String,reflect:!0})],Ft.prototype,"open",2);ci([j({type:String,reflect:!0,attribute:!0}),R()],Ft.prototype,"interactive",2);ci([j({type:String,reflect:!0})],Ft.prototype,"variant",2);Ft=ci([re("thermal-dropdown")],Ft);var Tc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,Ji=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mc(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Tc(e,t,s),s};let $r=class extends nt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Te(),this.contentRef=Te(),this.rulerContentRef=Te()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return D`

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
        
        `}};$r.styles=Oe`

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

    `;Ji([R()],$r.prototype,"collapsed",2);Ji([R()],$r.prototype,"lastContentWidth",2);Ji([R()],$r.prototype,"drawerRef",2);$r=Ji([re("thermal-bar")],$r);var Uc=Object.defineProperty,Fc=Object.getOwnPropertyDescriptor,cr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fc(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Uc(e,t,s),s};let It=class extends nt{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Te(),this.contentRef=Te()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,o=t.contentRect.width,l=n-175,u=o-0,p=this.contentRef.value.offsetHeight,m=4/3;let f=0,y=0;p<l?(console.log("priorita šířky"),f=u,y=f/m):(console.log("priorita výšky"),y=l,f=y*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${y}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return D`

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
        
        `}};It.styles=Oe`

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
    
    `;cr([ni({slot:"bar",flatten:!0})],It.prototype,"barItems",2);cr([ni({slot:"bar",flatten:!0})],It.prototype,"barElements",2);cr([ni({slot:"pre",flatten:!0})],It.prototype,"pre",2);cr([j({type:String,reflect:!0})],It.prototype,"fullscreen",2);cr([j({type:String,reflect:!0,attribute:!0})],It.prototype,"showfullscreen",2);cr([j({type:String,reflect:!0,attribute:!0})],It.prototype,"dark",2);It=cr([re("thermal-app")],It);var Ic=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Wc=(r,e,t,i)=>{for(var s=i>1?void 0:i?jc(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ic(e,t,s),s};let sn=class extends nt{render(){return D`
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
                        <p>version ${un}</p>
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
        `}};sn.styles=Oe`

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
    
    `;sn=Wc([re("app-info-button")],sn);function vt(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function or(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const oa=6048e5,Nc=864e5;let Hc={};function es(){return Hc}function Qr(r,e){var l,u,p,m;const t=es(),i=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??t.weekStartsOn??((m=(p=t.locale)==null?void 0:p.options)==null?void 0:m.weekStartsOn)??0,s=vt(r),n=s.getDay(),o=(n<i?7:0)+n-i;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function Wi(r){return Qr(r,{weekStartsOn:1})}function aa(r){const e=vt(r),t=e.getFullYear(),i=or(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=Wi(i),n=or(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const o=Wi(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function wo(r){const e=vt(r);return e.setHours(0,0,0,0),e}function xo(r){const e=vt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Bc(r,e){const t=wo(r),i=wo(e),s=+t-xo(t),n=+i-xo(i);return Math.round((s-n)/Nc)}function zc(r){const e=aa(r),t=or(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),Wi(t)}function Vc(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function la(r){if(!Vc(r)&&typeof r!="number")return!1;const e=vt(r);return!isNaN(Number(e))}function Yc(r){const e=vt(r),t=or(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const qc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xc=(r,e,t)=>{let i;const s=qc[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Zs(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Gc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Zc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Qc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Kc={date:Zs({formats:Gc,defaultWidth:"full"}),time:Zs({formats:Zc,defaultWidth:"full"}),dateTime:Zs({formats:Qc,defaultWidth:"full"})},Jc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},eh=(r,e,t,i)=>Jc[r];function Nr(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const o=r.defaultFormattingWidth||r.defaultWidth,l=t!=null&&t.width?String(t.width):o;s=r.formattingValues[l]||r.formattingValues[o]}else{const o=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[l]||r.values[o]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const th={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rh={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ih={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},oh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ah=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},lh={ordinalNumber:ah,era:Nr({values:th,defaultWidth:"wide"}),quarter:Nr({values:rh,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Nr({values:ih,defaultWidth:"wide"}),day:Nr({values:sh,defaultWidth:"wide"}),dayPeriod:Nr({values:nh,defaultWidth:"wide",formattingValues:oh,defaultFormattingWidth:"wide"})};function Hr(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const o=n[0],l=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(l)?hh(l,f=>f.test(o)):ch(l,f=>f.test(o));let p;p=r.valueCallback?r.valueCallback(u):u,p=t.valueCallback?t.valueCallback(p):p;const m=e.slice(o.length);return{value:p,rest:m}}}function ch(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function hh(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function dh(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let o=r.valueCallback?r.valueCallback(n[0]):n[0];o=t.valueCallback?t.valueCallback(o):o;const l=e.slice(s.length);return{value:o,rest:l}}}const uh=/^(\d+)(th|st|nd|rd)?/i,ph=/\d+/i,fh={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mh={any:[/^b/i,/^(a|c)/i]},gh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vh={any:[/1/i,/2/i,/3/i,/4/i]},bh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},wh={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},xh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_h={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},$h={ordinalNumber:dh({matchPattern:uh,parsePattern:ph,valueCallback:r=>parseInt(r,10)}),era:Hr({matchPatterns:fh,defaultMatchWidth:"wide",parsePatterns:mh,defaultParseWidth:"any"}),quarter:Hr({matchPatterns:gh,defaultMatchWidth:"wide",parsePatterns:vh,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Hr({matchPatterns:bh,defaultMatchWidth:"wide",parsePatterns:yh,defaultParseWidth:"any"}),day:Hr({matchPatterns:wh,defaultMatchWidth:"wide",parsePatterns:xh,defaultParseWidth:"any"}),dayPeriod:Hr({matchPatterns:_h,defaultMatchWidth:"any",parsePatterns:kh,defaultParseWidth:"any"})},Ph={code:"en-US",formatDistance:Xc,formatLong:Kc,formatRelative:eh,localize:lh,match:$h,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ch(r){const e=vt(r);return Bc(e,Yc(e))+1}function Sh(r){const e=vt(r),t=+Wi(e)-+zc(e);return Math.round(t/oa)+1}function ca(r,e){var m,f,y,_;const t=vt(r),i=t.getFullYear(),s=es(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((_=(y=s.locale)==null?void 0:y.options)==null?void 0:_.firstWeekContainsDate)??1,o=or(r,0);o.setFullYear(i+1,0,n),o.setHours(0,0,0,0);const l=Qr(o,e),u=or(r,0);u.setFullYear(i,0,n),u.setHours(0,0,0,0);const p=Qr(u,e);return t.getTime()>=l.getTime()?i+1:t.getTime()>=p.getTime()?i:i-1}function Oh(r,e){var l,u,p,m;const t=es(),i=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(p=t.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,s=ca(r,e),n=or(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Qr(n,e)}function Ah(r,e){const t=vt(r),i=+Qr(t,e)-+Oh(t,e);return Math.round(i/oa)+1}function he(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Vt={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return he(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):he(t+1,2)},d(r,e){return he(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return he(r.getHours()%12||12,e.length)},H(r,e){return he(r.getHours(),e.length)},m(r,e){return he(r.getMinutes(),e.length)},s(r,e){return he(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return he(s,e.length)}},gr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_o={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Vt.y(r,e)},Y:function(r,e,t,i){const s=ca(r,i),n=s>0?s:1-s;if(e==="YY"){const o=n%100;return he(o,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):he(n,e.length)},R:function(r,e){const t=aa(r);return he(t,e.length)},u:function(r,e){const t=r.getFullYear();return he(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return he(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return he(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Vt.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return he(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=Ah(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):he(s,e.length)},I:function(r,e,t){const i=Sh(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):he(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Vt.d(r,e)},D:function(r,e,t){const i=Ch(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):he(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return he(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return he(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return he(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=gr.noon:i===0?s=gr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=gr.evening:i>=12?s=gr.afternoon:i>=4?s=gr.morning:s=gr.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Vt.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Vt.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):he(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):he(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Vt.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Vt.s(r,e)},S:function(r,e){return Vt.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return $o(i);case"XXXX":case"XX":return rr(i);case"XXXXX":case"XXX":default:return rr(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return $o(i);case"xxxx":case"xx":return rr(i);case"xxxxx":case"xxx":default:return rr(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ko(i,":");case"OOOO":default:return"GMT"+rr(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ko(i,":");case"zzzz":default:return"GMT"+rr(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return he(i,e.length)},T:function(r,e,t){const i=r.getTime();return he(i,e.length)}};function ko(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+he(n,2)}function $o(r,e){return r%60===0?(r>0?"-":"+")+he(Math.abs(r)/60,2):rr(r,e)}function rr(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=he(Math.trunc(i/60),2),n=he(i%60,2);return t+s+e+n}const Po=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ha=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Eh=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Po(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Po(i,e)).replace("{{time}}",ha(s,e))},Dh={p:ha,P:Eh},Lh=/^D+$/,Rh=/^Y+$/,Th=["D","DD","YY","YYYY"];function Mh(r){return Lh.test(r)}function Uh(r){return Rh.test(r)}function Fh(r,e,t){const i=Ih(r,e,t);if(console.warn(i),Th.includes(r))throw new RangeError(i)}function Ih(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const jh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Wh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Nh=/^'([^]*?)'?$/,Hh=/''/g,Bh=/[a-zA-Z]/;function Pr(r,e,t){var m,f,y,_;const i=es(),s=i.locale??Ph,n=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,o=i.weekStartsOn??((_=(y=i.locale)==null?void 0:y.options)==null?void 0:_.weekStartsOn)??0,l=vt(r);if(!la(l))throw new RangeError("Invalid time value");let u=e.match(Wh).map(k=>{const O=k[0];if(O==="p"||O==="P"){const C=Dh[O];return C(k,s.formatLong)}return k}).join("").match(jh).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const O=k[0];if(O==="'")return{isToken:!1,value:zh(k)};if(_o[O])return{isToken:!0,value:k};if(O.match(Bh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:k}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const p={firstWeekContainsDate:n,weekStartsOn:o,locale:s};return u.map(k=>{if(!k.isToken)return k.value;const O=k.value;(Uh(O)||Mh(O))&&Fh(O,e,String(r));const C=_o[O[0]];return C(l,O,s.localize,p)}).join("")}function zh(r){const e=r.match(Nh);return e?e[1].replace(Hh,"'"):r}function Qs(r,e){const t=vt(r);if(!la(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const o=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const u=he(t.getDate(),2),p=he(t.getMonth()+1,2);n=`${he(t.getFullYear(),4)}${o}${p}${o}${u}`}if(s!=="date"){const u=he(t.getHours(),2),p=he(t.getMinutes(),2),m=he(t.getSeconds(),2);n=`${n}${n===""?"":" "}${u}${l}${p}${l}${m}`}return n}var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yh(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var nn={exports:{}};const qh={},Xh=Object.freeze(Object.defineProperty({__proto__:null,default:qh},Symbol.toStringTag,{value:"Module"})),vr=Yh(Xh);/**
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
 */(function(r,e){(function(t,i){i(e)})(Vh,function(t){var i={},s={exports:{}};(function(x){var S=function(Y){return typeof Y<"u"&&Y.versions!=null&&Y.versions.node!=null&&Y+""=="[object process]"};x.exports.isNode=S,x.exports.platform=typeof process<"u"&&S(process)?"node":"browser";var A=x.exports.platform==="node"&&vr;x.exports.isMainThread=x.exports.platform==="node"?(!A||A.isMainThread)&&!process.connected:typeof Window<"u",x.exports.cpus=x.exports.platform==="browser"?self.navigator.hardwareConcurrency:vr.cpus().length})(s);var n=s.exports,o={},l;function u(){if(l)return o;l=1;function x(Y,_e){var Q=this;if(!(this instanceof x))throw new SyntaxError("Constructor must be called with the new operator");if(typeof Y!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var De=[],fe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var U=function(K,ae){De.push(K),fe.push(ae)};this.then=function($,K){return new x(function(ae,He){var Ge=$?S($,ae,He):ae,$t=K?S(K,ae,He):He;U(Ge,$t)},Q)};var me=function(K){return Q.resolved=!0,Q.rejected=!1,Q.pending=!1,De.forEach(function(ae){ae(K)}),U=function(He,Ge){He(K)},me=w=function(){},Q},w=function(K){return Q.resolved=!1,Q.rejected=!0,Q.pending=!1,fe.forEach(function(ae){ae(K)}),U=function(He,Ge){Ge(K)},me=w=function(){},Q};this.cancel=function(){return _e?_e.cancel():w(new A),Q},this.timeout=function($){if(_e)_e.timeout($);else{var K=setTimeout(function(){w(new E("Promise timed out after "+$+" ms"))},$);Q.always(function(){clearTimeout(K)})}return Q},Y(function($){me($)},function($){w($)})}function S(Y,_e,Q){return function(De){try{var fe=Y(De);fe&&typeof fe.then=="function"&&typeof fe.catch=="function"?fe.then(_e,Q):_e(fe)}catch(U){Q(U)}}}x.prototype.catch=function(Y){return this.then(null,Y)},x.prototype.always=function(Y){return this.then(Y,Y)},x.all=function(Y){return new x(function(_e,Q){var De=Y.length,fe=[];De?Y.forEach(function(U,me){U.then(function(w){fe[me]=w,De--,De==0&&_e(fe)},function(w){De=0,Q(w)})}):_e(fe)})},x.defer=function(){var Y={};return Y.promise=new x(function(_e,Q){Y.resolve=_e,Y.reject=Q}),Y};function A(Y){this.message=Y||"promise cancelled",this.stack=new Error().stack}A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="CancellationError",x.CancellationError=A;function E(Y){this.message=Y||"timeout exceeded",this.stack=new Error().stack}return E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="TimeoutError",x.TimeoutError=E,o.Promise=x,o}function p(x,S){(S==null||S>x.length)&&(S=x.length);for(var A=0,E=Array(S);A<S;A++)E[A]=x[A];return E}function m(x,S){var A=typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(!A){if(Array.isArray(x)||(A=I(x))||S){A&&(x=A);var E=0,Y=function(){};return{s:Y,n:function(){return E>=x.length?{done:!0}:{done:!1,value:x[E++]}},e:function(fe){throw fe},f:Y}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _e,Q=!0,De=!1;return{s:function(){A=A.call(x)},n:function(){var fe=A.next();return Q=fe.done,fe},e:function(fe){De=!0,_e=fe},f:function(){try{Q||A.return==null||A.return()}finally{if(De)throw _e}}}}function f(x,S,A){return(S=O(S))in x?Object.defineProperty(x,S,{value:A,enumerable:!0,configurable:!0,writable:!0}):x[S]=A,x}function y(x,S){var A=Object.keys(x);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(x);S&&(E=E.filter(function(Y){return Object.getOwnPropertyDescriptor(x,Y).enumerable})),A.push.apply(A,E)}return A}function _(x){for(var S=1;S<arguments.length;S++){var A=arguments[S]!=null?arguments[S]:{};S%2?y(Object(A),!0).forEach(function(E){f(x,E,A[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(A)):y(Object(A)).forEach(function(E){Object.defineProperty(x,E,Object.getOwnPropertyDescriptor(A,E))})}return x}function k(x,S){if(typeof x!="object"||!x)return x;var A=x[Symbol.toPrimitive];if(A!==void 0){var E=A.call(x,S||"default");if(typeof E!="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return(S==="string"?String:Number)(x)}function O(x){var S=k(x,"string");return typeof S=="symbol"?S:S+""}function C(x){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},C(x)}function I(x,S){if(x){if(typeof x=="string")return p(x,S);var A={}.toString.call(x).slice(8,-1);return A==="Object"&&x.constructor&&(A=x.constructor.name),A==="Map"||A==="Set"?Array.from(x):A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)?p(x,S):void 0}}var W={exports:{}},V={},de;function te(){return de||(de=1,V.validateOptions=function(S,A,E){if(S){var Y=S?Object.keys(S):[],_e=Y.find(function(De){return!A.includes(De)});if(_e)throw new Error('Object "'+E+'" contains an unknown option "'+_e+'"');var Q=A.find(function(De){return Object.prototype[De]&&!Y.includes(De)});if(Q)throw new Error('Object "'+E+'" contains an inherited option "'+Q+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return S}},V.workerOptsNames=["credentials","name","type"],V.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],V.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),V}var Ee,N;function ve(){return N||(N=1,Ee=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Ee}var oe;function ue(){if(oe)return W.exports;oe=1;var x=u(),S=x.Promise,A=n,E=te(),Y=E.validateOptions,_e=E.forkOptsNames,Q=E.workerThreadOptsNames,De=E.workerOptsNames,fe="__workerpool-terminate__";function U(){var z=w();if(!z)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return z}function me(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":C(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function w(){try{return vr}catch(z){if(C(z)==="object"&&z!==null&&z.code==="MODULE_NOT_FOUND")return null;throw z}}function $(){if(A.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var z=new Blob([ve()],{type:"text/javascript"});return window.URL.createObjectURL(z)}else return __dirname+"/worker.js"}function K(z,J){if(J.workerType==="web")return me(),ae(z,J.workerOpts,Worker);if(J.workerType==="thread")return P=U(),He(z,P,J);if(J.workerType==="process"||!J.workerType)return Ge(z,$t(J),vr);if(A.platform==="browser")return me(),ae(z,J.workerOpts,Worker);var P=w();return P?He(z,P,J):Ge(z,$t(J),vr)}function ae(z,J,P){Y(J,De,"workerOpts");var Z=new P(z,J);return Z.isBrowserWorker=!0,Z.on=function(ke,xe){this.addEventListener(ke,function(Re){xe(Re.data)})},Z.send=function(ke,xe){this.postMessage(ke,xe)},Z}function He(z,J,P){var Z,ke;Y(P==null?void 0:P.workerThreadOpts,Q,"workerThreadOpts");var xe=new J.Worker(z,_({stdout:(Z=P==null?void 0:P.emitStdStreams)!==null&&Z!==void 0?Z:!1,stderr:(ke=P==null?void 0:P.emitStdStreams)!==null&&ke!==void 0?ke:!1},P==null?void 0:P.workerThreadOpts));return xe.isWorkerThread=!0,xe.send=function(Re,le){this.postMessage(Re,le)},xe.kill=function(){return this.terminate(),!0},xe.disconnect=function(){this.terminate()},P!=null&&P.emitStdStreams&&(xe.stdout.on("data",function(Re){return xe.emit("stdout",Re)}),xe.stderr.on("data",function(Re){return xe.emit("stderr",Re)})),xe}function Ge(z,J,P){Y(J.forkOpts,_e,"forkOpts");var Z=P.fork(z,J.forkArgs,J.forkOpts),ke=Z.send;return Z.send=function(xe){return ke.call(Z,xe)},J.emitStdStreams&&(Z.stdout.on("data",function(xe){return Z.emit("stdout",xe)}),Z.stderr.on("data",function(xe){return Z.emit("stderr",xe)})),Z.isChildProcess=!0,Z}function $t(z){z=z||{};var J=process.execArgv.join(" "),P=J.indexOf("--inspect")!==-1,Z=J.indexOf("--debug-brk")!==-1,ke=[];return P&&(ke.push("--inspect="+z.debugPort),Z&&ke.push("--debug-brk")),process.execArgv.forEach(function(xe){xe.indexOf("--max-old-space-size")>-1&&ke.push(xe)}),Object.assign({},z,{forkArgs:z.forkArgs,forkOpts:Object.assign({},z.forkOpts,{execArgv:(z.forkOpts&&z.forkOpts.execArgv||[]).concat(ke),stdio:z.emitStdStreams?"pipe":void 0})})}function ct(z){for(var J=new Error(""),P=Object.keys(z),Z=0;Z<P.length;Z++)J[P[Z]]=z[P[Z]];return J}function pt(z,J){if(Object.keys(z.processing).length===1){var P=Object.values(z.processing)[0];P.options&&typeof P.options.on=="function"&&P.options.on(J)}}function Bt(z,J){var P=this,Z=J||{};this.script=z||$(),this.worker=K(this.script,Z),this.debugPort=Z.debugPort,this.forkOpts=Z.forkOpts,this.forkArgs=Z.forkArgs,this.workerOpts=Z.workerOpts,this.workerThreadOpts=Z.workerThreadOpts,this.workerTerminateTimeout=Z.workerTerminateTimeout,z||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(le){pt(P,{stdout:le.toString()})}),this.worker.on("stderr",function(le){pt(P,{stderr:le.toString()})}),this.worker.on("message",function(le){if(!P.terminated)if(typeof le=="string"&&le==="ready")P.worker.ready=!0,xe();else{var et=le.id,Be=P.processing[et];Be!==void 0&&(le.isEvent?Be.options&&typeof Be.options.on=="function"&&Be.options.on(le.payload):(delete P.processing[et],P.terminating===!0&&P.terminate(),le.error?Be.resolver.reject(ct(le.error)):Be.resolver.resolve(le.result)))}});function ke(le){P.terminated=!0;for(var et in P.processing)P.processing[et]!==void 0&&P.processing[et].resolver.reject(le);P.processing=Object.create(null)}function xe(){var le=m(P.requestQueue.splice(0)),et;try{for(le.s();!(et=le.n()).done;){var Be=et.value;P.worker.send(Be.message,Be.transfer)}}catch(yi){le.e(yi)}finally{le.f()}}var Re=this.worker;this.worker.on("error",ke),this.worker.on("exit",function(le,et){var Be=`Workerpool Worker terminated Unexpectedly
`;Be+="    exitCode: `"+le+"`\n",Be+="    signalCode: `"+et+"`\n",Be+="    workerpool.script: `"+P.script+"`\n",Be+="    spawnArgs: `"+Re.spawnargs+"`\n",Be+="    spawnfile: `"+Re.spawnfile+"`\n",Be+="    stdout: `"+Re.stdout+"`\n",Be+="    stderr: `"+Re.stderr+"`\n",ke(new Error(Be))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Bt.prototype.methods=function(){return this.exec("methods")},Bt.prototype.exec=function(z,J,P,Z){P||(P=S.defer());var ke=++this.lastId;this.processing[ke]={id:ke,resolver:P,options:Z};var xe={message:{id:ke,method:z,params:J},transfer:Z&&Z.transfer};this.terminated?P.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(xe.message,xe.transfer):this.requestQueue.push(xe);var Re=this;return P.promise.catch(function(le){if(le instanceof S.CancellationError||le instanceof S.TimeoutError)return delete Re.processing[ke],Re.terminateAndNotify(!0).then(function(){throw le},function(et){throw et});throw le})},Bt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Bt.prototype.terminate=function(z,J){var P=this;if(z){for(var Z in this.processing)this.processing[Z]!==void 0&&this.processing[Z].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof J=="function"&&(this.terminationHandler=J),this.busy())this.terminating=!0;else{var ke=function(le){if(P.terminated=!0,P.cleaning=!1,P.worker!=null&&P.worker.removeAllListeners&&P.worker.removeAllListeners("message"),P.worker=null,P.terminating=!1,P.terminationHandler)P.terminationHandler(le,P);else if(le)throw le};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ke(new Error("worker already killed!"));return}var xe=setTimeout(function(){P.worker&&P.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(xe),P.worker&&(P.worker.killed=!0),ke()}),this.worker.ready?this.worker.send(fe):this.requestQueue.push({message:fe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ke()}},Bt.prototype.terminateAndNotify=function(z,J){var P=S.defer();return J&&P.promise.timeout(J),this.terminate(z,function(Z,ke){Z?P.reject(Z):P.resolve(ke)}),P.promise},W.exports=Bt,W.exports._tryRequireWorkerThreads=w,W.exports._setupProcessWorker=Ge,W.exports._setupBrowserWorker=ae,W.exports._setupWorkerThreadWorker=He,W.exports.ensureWorkerThreads=U,W.exports}var ye,pe;function be(){if(pe)return ye;pe=1;var x=65535;ye=S;function S(){this.ports=Object.create(null),this.length=0}return S.prototype.nextAvailableStartingAt=function(A){for(;this.ports[A]===!0;)A++;if(A>=x)throw new Error("WorkerPool debug port limit reached: "+A+">= "+x);return this.ports[A]=!0,this.length++,A},S.prototype.releasePort=function(A){delete this.ports[A],this.length--},ye}var ie,we;function Me(){if(we)return ie;we=1;var x=u(),S=x.Promise,A=ue(),E=n,Y=be(),_e=new Y;function Q(w,$){typeof w=="string"?this.script=w||null:(this.script=null,$=w),this.workers=[],this.tasks=[],$=$||{},this.forkArgs=Object.freeze($.forkArgs||[]),this.forkOpts=Object.freeze($.forkOpts||{}),this.workerOpts=Object.freeze($.workerOpts||{}),this.workerThreadOpts=Object.freeze($.workerThreadOpts||{}),this.debugPortStart=$.debugPortStart||43210,this.nodeWorker=$.nodeWorker,this.workerType=$.workerType||$.nodeWorker||"auto",this.maxQueueSize=$.maxQueueSize||1/0,this.workerTerminateTimeout=$.workerTerminateTimeout||1e3,this.onCreateWorker=$.onCreateWorker||function(){return null},this.onTerminateWorker=$.onTerminateWorker||function(){return null},this.emitStdStreams=$.emitStdStreams||!1,$&&"maxWorkers"in $?(De($.maxWorkers),this.maxWorkers=$.maxWorkers):this.maxWorkers=Math.max((E.cpus||4)-1,1),$&&"minWorkers"in $&&($.minWorkers==="max"?this.minWorkers=this.maxWorkers:(fe($.minWorkers),this.minWorkers=$.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&A.ensureWorkerThreads()}Q.prototype.exec=function(w,$,K){if($&&!Array.isArray($))throw new TypeError('Array expected as argument "params"');if(typeof w=="string"){var ae=S.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var He=this.tasks,Ge={method:w,params:$,resolver:ae,timeout:null,options:K};He.push(Ge);var $t=ae.promise.timeout;return ae.promise.timeout=function(pt){return He.indexOf(Ge)!==-1?(Ge.timeout=pt,ae.promise):$t.call(ae.promise,pt)},this._next(),ae.promise}else{if(typeof w=="function")return this.exec("run",[String(w),$],K);throw new TypeError('Function or string expected as argument "method"')}},Q.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var w=this;return this.exec("methods").then(function($){var K={};return $.forEach(function(ae){K[ae]=function(){return w.exec(ae,Array.prototype.slice.call(arguments))}}),K})},Q.prototype._next=function(){if(this.tasks.length>0){var w=this._getWorker();if(w){var $=this,K=this.tasks.shift();if(K.resolver.promise.pending){var ae=w.exec(K.method,K.params,K.resolver,K.options).then($._boundNext).catch(function(){if(w.terminated)return $._removeWorker(w)}).then(function(){$._next()});typeof K.timeout=="number"&&ae.timeout(K.timeout)}else $._next()}}},Q.prototype._getWorker=function(){for(var w=this.workers,$=0;$<w.length;$++){var K=w[$];if(K.busy()===!1)return K}return w.length<this.maxWorkers?(K=this._createWorkerHandler(),w.push(K),K):null},Q.prototype._removeWorker=function(w){var $=this;return _e.releasePort(w.debugPort),this._removeWorkerFromList(w),this._ensureMinWorkers(),new S(function(K,ae){w.terminate(!1,function(He){$.onTerminateWorker({forkArgs:w.forkArgs,forkOpts:w.forkOpts,workerThreadOpts:w.workerThreadOpts,script:w.script}),He?ae(He):K(w)})})},Q.prototype._removeWorkerFromList=function(w){var $=this.workers.indexOf(w);$!==-1&&this.workers.splice($,1)},Q.prototype.terminate=function(w,$){var K=this;this.tasks.forEach(function(ct){ct.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ae=function(pt){_e.releasePort(pt.debugPort),this._removeWorkerFromList(pt)},He=ae.bind(this),Ge=[],$t=this.workers.slice();return $t.forEach(function(ct){var pt=ct.terminateAndNotify(w,$).then(He).always(function(){K.onTerminateWorker({forkArgs:ct.forkArgs,forkOpts:ct.forkOpts,workerThreadOpts:ct.workerThreadOpts,script:ct.script})});Ge.push(pt)}),S.all(Ge)},Q.prototype.stats=function(){var w=this.workers.length,$=this.workers.filter(function(K){return K.busy()}).length;return{totalWorkers:w,busyWorkers:$,idleWorkers:w-$,pendingTasks:this.tasks.length,activeTasks:$}},Q.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var w=this.workers.length;w<this.minWorkers;w++)this.workers.push(this._createWorkerHandler())},Q.prototype._createWorkerHandler=function(){var w=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new A(w.script||this.script,{forkArgs:w.forkArgs||this.forkArgs,forkOpts:w.forkOpts||this.forkOpts,workerOpts:w.workerOpts||this.workerOpts,workerThreadOpts:w.workerThreadOpts||this.workerThreadOpts,debugPort:_e.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function De(w){if(!U(w)||!me(w)||w<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function fe(w){if(!U(w)||!me(w)||w<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function U(w){return typeof w=="number"}function me(w){return Math.round(w)==w}return ie=Q,ie}var Qe={},Xe,Mr;function pr(){if(Mr)return Xe;Mr=1;function x(S,A){this.message=S,this.transfer=A}return Xe=x,Xe}var mi;function gi(){return mi||(mi=1,function(x){var S=pr(),A="__workerpool-terminate__",E={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")E.on=function(U,me){addEventListener(U,function(w){me(w.data)})},E.send=function(U,me){me?postMessage(U,me):postMessage(U)};else if(typeof process<"u"){var Y;try{Y=vr}catch(U){if(!(C(U)==="object"&&U!==null&&U.code==="MODULE_NOT_FOUND"))throw U}if(Y&&Y.parentPort!==null){var _e=Y.parentPort;E.send=_e.postMessage.bind(_e),E.on=_e.on.bind(_e),E.exit=process.exit.bind(process)}else E.on=process.on.bind(process),E.send=function(U){process.send(U)},E.on("disconnect",function(){process.exit(1)}),E.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Q(U){return Object.getOwnPropertyNames(U).reduce(function(me,w){return Object.defineProperty(me,w,{value:U[w],enumerable:!0})},{})}function De(U){return U&&typeof U.then=="function"&&typeof U.catch=="function"}E.methods={},E.methods.run=function(me,w){var $=new Function("return ("+me+").apply(null, arguments);");return $.apply($,w)},E.methods.methods=function(){return Object.keys(E.methods)},E.terminationHandler=void 0,E.cleanupAndExit=function(U){var me=function(){E.exit(U)};if(!E.terminationHandler)return me();var w=E.terminationHandler(U);De(w)?w.then(me,me):me()};var fe=null;E.on("message",function(U){if(U===A)return E.cleanupAndExit(0);try{var me=E.methods[U.method];if(me){fe=U.id;var w=me.apply(me,U.params);De(w)?w.then(function($){$ instanceof S?E.send({id:U.id,result:$.message,error:null},$.transfer):E.send({id:U.id,result:$,error:null}),fe=null}).catch(function($){E.send({id:U.id,result:null,error:Q($)}),fe=null}):(w instanceof S?E.send({id:U.id,result:w.message,error:null},w.transfer):E.send({id:U.id,result:w,error:null}),fe=null)}else throw new Error('Unknown method "'+U.method+'"')}catch($){E.send({id:U.id,result:null,error:Q($)})}}),E.register=function(U,me){if(U)for(var w in U)U.hasOwnProperty(w)&&(E.methods[w]=U[w]);me&&(E.terminationHandler=me.onTerminate),E.send("ready")},E.emit=function(U){if(fe){if(U instanceof S){E.send({id:fe,isEvent:!0,payload:U.message},U.transfer);return}E.send({id:fe,isEvent:!0,payload:U})}},x.add=E.register,x.emit=E.emit}(Qe)),Qe}var us=n.platform,vi=n.isMainThread,ps=n.cpus;function lt(x,S){var A=Me();return new A(x,S)}var Ht=i.pool=lt;function Ur(x,S){var A=gi();A.add(x,S)}var bt=i.worker=Ur;function Ue(x){var S=gi();S.emit(x)}var bi=i.workerEmit=Ue,fs=u(),ze=fs.Promise,ms=i.Promise=ze,gs=i.Transfer=pr(),vs=i.platform=us,bs=i.isMainThread=vi,ys=i.cpus=ps;t.Promise=ms,t.Transfer=gs,t.cpus=ys,t.default=i,t.isMainThread=bs,t.platform=vs,t.pool=Ht,t.worker=bt,t.workerEmit=bi,Object.defineProperty(t,"__esModule",{value:!0})})})(nn,nn.exports);var Gh=nn.exports,ot=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},da=class extends ot{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Zh=class extends ot{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Qh=class extends ot{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const t=e.from;e.from=e.to,e.to=t}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const t=this.parent.minmax.value;if(t===void 0)return e;const i={...e};return e.from<t.min&&(i.from=t.min),e.to>t.max&&(i.to=t.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(t=>t.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const t=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=t),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},Kh=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},Jh=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],ed=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],td=Kh(),sr={iron:{pixels:ed,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Jh,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:td,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},rd=class extends ot{get availablePalettes(){return sr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},en,id=(en=class{},c(en,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),en),We,sd=(We=class extends id{static humanRangeDates(e,t){return e=We.inputToDate(e),t=We.inputToDate(t),e.getUTCDate()===t.getUTCDate()?We.humanDate(e):[We.humanDate(e),We.humanDate(t)].join(" - ")}static human(e){return`${We.humanDate(e)} ${We.humanTime(e,!0)} `}},c(We,"isoDate",e=>(e=We.inputToDate(e),Qs(e,{representation:"date"}))),c(We,"isoTime",e=>(e=We.inputToDate(e),Qs(e,{representation:"time"}))),c(We,"isoComplete",e=>(e=We.inputToDate(e),Qs(e))),c(We,"humanTime",(e,t=!1)=>(e=We.inputToDate(e),Pr(e,t?"HH:mm:ss":"HH:mm"))),c(We,"humanDate",(e,t=!1)=>(e=We.inputToDate(e),Pr(e,t?"d. M.":"d. M. yyyy"))),We),ts=class{},nd=class extends ts{constructor(e,t,i,s,n,o,l,u,p,m,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(t),this.url=t,this.thermalUrl=t,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=o,this.duration=l,this.min=u,this.max=p,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,t){const i=t*this.width+e;return this.pixels[i]}getColorAtPoint(e,t){var o,l;const i=this.getTemperatureAtPoint(e,t),s=(o=this.group.registry.range.value)==null?void 0:o.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(s!==void 0&&n!==void 0){const p=(i-s)/(n-s),m=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[m]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},rs=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Ct=class on{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=on.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=on.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},od=class extends rs{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Ct.createCanvasContainer(),this.canvas=Ct.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),t=await this.pool.exec(async(i,s,n,o,l,u)=>{const m=new OffscreenCanvas(n,o).getContext("2d"),f=s-i;for(let k=0;k<=n;k++)for(let O=0;O<=o;O++){const C=k+O*n;let I=l[C];I<i&&(I=i),I>s&&(I=s);const V=(I-i)/f,de=Math.round(255*V),te=u[de];m.fillStyle=te,m.fillRect(k,O,1,1)}const y=m.getImageData(0,0,n,o);return await createImageBitmap(y)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(t,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},ad=class extends rs{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Ct.createCursorLayerRoot(),this.center=Ct.createCursorLayerCenter(),this.axisX=Ct.createCursorLayerX(),this.axisY=Ct.createCursorLayerY(),this.label=Ct.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},ld=class extends rs{constructor(e){super(e);c(this,"container");this.container=Ct.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},cd=class extends rs{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=Ct.createVisibleLayer(),this._url&&(this.image=Ct.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Se=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},hd=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.service.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(o=>o.index>=e&&o.index<t),s=i.filter(o=>!this.preloadedSteps.includes(o));return(await Promise.all(s.map(o=>this.drive.parent.service.frameData(o.index)))).forEach((o,l)=>{const u=s[l];this.buffer.set(u,o)}),this.preloadedSteps.forEach(o=>{i.includes(o)||this.buffer.delete(o)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},wn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},dd=class extends ot{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new Se);c(this,"callbacksPlay",new Se);c(this,"callbacksPause",new Se);c(this,"callbacksStop",new Se);c(this,"callbacksEnd",new Se);c(this,"callbacksChangeFrame",new Se);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new hd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return wn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),Pr(t,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(u=>u.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(u=>u.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},ud=class extends ot{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0)return;const t=r+e*this.parent.width;return this.parent.pixels[t]}},pd=class extends ot{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new Se)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},fd=class{constructor(r){this.file=r}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},ua=class{constructor(r,e,t){c(this,"_selected",!1);c(this,"onSelected",new Se);c(this,"onDeselected",new Se);c(this,"onValues",new Se);c(this,"onMoveOrResize",new Se);c(this,"layerRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new Se);c(this,"initialColor");c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);this.key=r,this.file=e,this.initialColor=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(t=>t.key!==this.key).forEach(t=>{t.selected&&t.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(r=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}},pa=class{constructor(r,e,t,i,s){c(this,"_x");c(this,"onX",new Se);c(this,"_y");c(this,"onY",new Se);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new Se);c(this,"onMouseLeave",new Se);c(this,"onActivate",new Se);c(this,"onDeactivate",new Se);this.key=r,this.analysis=i,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(r){if(this.mayMoveToX(r)){const e=this._x;this._x=r,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(r){if(this.mayMoveToY(r)){const e=this._y;this._y=r,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,o=this.y+t;return e>=i&&e<=s&&r>=n&&r<=o}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}projectInnerPositionToDom(){if(this.container){const r=this.getPercentageCoordinates();this.container.style.left=`${r.x}%`,this.container.style.top=`${r.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},md=class extends pa{constructor(r,e,t,i,s){super(r,e,t,i,s),this._color=s,this.setColor(s)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},gd=class extends md{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,t=>{e.x!==t&&(e.x=t)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,t=>{e.y!==t&&(e.y=t)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},fa=class extends ua{constructor(e,t,i,s,n,o,l){super(e,i,t);c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");let u=n,p=s;o!==void 0&&l!==void 0&&(u=n+o,p=s+l),this.area=this.buildArea(s,n,o,l),this.tl=this.addPoint("tl",s,n),this.tr=this.addPoint("tr",s,u),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,u),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(m=>m.projectInnerPositionToDom())}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),o=Math.max(e,s),l=Math.min(t,i),p=Math.max(t,i)-l,m=o-n;return{top:n,left:l,width:p,height:m}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=t-e,this.height=s-i,this.area.left=this.left,this.area.height=this.height,this.area.width=this.width,this.area.top=this.top}addPoint(e,t,i){const s=new gd(e,t,i,this,this.color);return this.points.set(e,s),s}},ma=class{constructor(r,e,t,i,s){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},Co=class extends ma{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},So=class Ri extends fa{static startAddingAtPoint(e,t,i,s,n){const o=new Ri(e,t,i,s,n);return o.br.activate(),o}static build(e,t,i,s,n,o,l){const{top:u,left:p,width:m,height:f}=Ri.calculateDimensionsFromCorners(s,n,o,l);return new Ri(e,t,i,u,p,m,f)}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Co(this,e,t,e+i,t+s):new Co(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,o=-1/0,l=0,u=0;for(let p=i;p<s;p++){const m=this.file.width*p;for(let f=e;f<=t;f++)if(this.isWithin(f,p)){const y=this.file.pixels[m+f];y<n&&(n=y),y>o&&(o=y),u+=y,l++}}return{min:n,max:o,avg:u/l}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),o=(t-s)/(this.height/2);return n*n+o*o<=1}},st,vd=(st=class extends pa{constructor(t,i,s,n,o){super(t,i,s,n,o);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(t=1){return Math.round(st.size*t).toString()+"px"}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top=st.sizePx(-.5),t.style.left=st.sizePx(-.5),t.style.width=st.sizePx(),t.style.height=st.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=st.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=st.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${st.sizePx(.5)} - 3px )`,t.style.left=`calc( ${st.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const o=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=o),this.axisY&&(this.axisY.style.boxShadow=o),this.center&&(this.center.style.boxShadow=o)}}},c(st,"size",20),st),bd=class ga extends ua{constructor(t,i,s,n,o){super(t,s,i);c(this,"center");this.top=n,this.left=o,this.width=1,this.height=1,this.center=new vd("center",n,o,this,i),this.points.set("center",this.center),this.center.projectInnerPositionToDom()}static addAtPoint(t,i,s,n,o){return new ga(t,i,s,n,o)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}},Oo=class extends ma{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},Ao=class Ti extends fa{static startAddingAtPoint(e,t,i,s,n){const o=new Ti(e,t,i,s,n);return o.br.activate(),o}static build(e,t,i,s,n,o,l){const{top:u,left:p,width:m,height:f}=Ti.calculateDimensionsFromCorners(s,n,o,l);return new Ti(e,t,i,u,p,m,f)}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Oo(this,e,t,e+i,t+s):new Oo(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,o=-1/0,l=0,u=0;for(let p=i;p<s;p++){const m=this.file.width*p;for(let f=e;f<=t;f++){const y=this.file.pixels[m+f];y<n&&(n=y),y>o&&(o=y),u+=y,l++}}return{min:n,max:o,avg:u/l}}},yd=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new Se);c(this,"onRemove",new Se);c(this,"onSelectionChange",new Se);c(this,"colors",["orange","lightblue","green","brown","yellow","blue","pink"]);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var t;this.has(e)&&((t=this.get(e))==null||t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,t){const i=Ao.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}placeRectAt(e,t,i,s,n){const o=Ao.build(e,this.getNextColor(),this.drive.parent,t,i,s,n);return this.addAnalysis(o),o}createEllipsisFrom(e,t){const i=So.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}placeEllipsisAt(e,t,i,s,n){const o=So.build(e,this.getNextColor(),this.drive.parent,t,i,s,n);return this.addAnalysis(o),o}createPointAt(e,t){const i=bd.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.length;return e<this.colors.length?this.colors[e]:this.colors[e%this.colors.length]}getNextName(e){return`${e} ${this.all.length}`}},wd=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},xd=class extends ot{constructor(){super(...arguments);c(this,"layers",new yd(this));c(this,"points",new wd(this));c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const t=this.listenerLayerContainer.clientWidth,i=this.parent.width,n=e.layerX/t,o=Math.round(i*n),l=this.listenerLayerContainer.clientHeight,u=this.parent.height,m=e.layerY/l;return{top:Math.round(u*m),left:o}}activateListeners(){this.bindedPointerMoveListener=e=>{const t=this.getRelativePosition(e);this.points.all.forEach(i=>{i.active&&this.currentTool.onPointMove(i,t.top,t.left);const s=i.isWithin(t.top,t.left);s?this.currentTool.onPointEnter(i):s||this.currentTool.onPointLeave(i)})},this.bindedPointerDownListener=e=>{const t=this.getRelativePosition(e);this.currentTool.onCanvasClick(t.top,t.left,this.parent),this.points.all.forEach(i=>{i.isWithin(t.top,t.left)&&this.currentTool.onPointDown(i)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},va=class ba extends nd{constructor(t,i,s,n,o,l,u,p,m,f,y,_,k,O,C,I,W){super(t,i.thermalUrl,s,n,m,o,u,y,_,l,i.visibleUrl);c(this,"_export");this.group=t,this.service=i,this.width=s,this.height=n,this.timestamp=o,this.frameCount=l,this.duration=u,this.frameInterval=p,this.fps=f,this.min=y,this.max=_,this.bytesize=k,this.averageEmissivity=O,this.averageReflectedKelvins=C,this.firstFrame=I,this.timelineData=W,this.pixels=I.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const t=new fd(this);this._export=t}return this._export}postInit(){return this.canvasLayer=new od(this),this.visibleLayer=new cd(this,this.visibleUrl),this.cursorLayer=new ad(this),this.listenerLayer=new ld(this),this.cursorValue=new ud(this,void 0),this.timeline=new dd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new pd(this,!1),this.analysis=new xd(this,[]),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}this.analysis.value.forEach(i=>i.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new ba(t,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=t=>{this.cursorLayer.show=!0,this.isHover=!0;const i=this.width,s=this.root.clientWidth,n=i/s,o=Math.round(t.offsetX*n),l=Math.round(t.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:o,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(t){if(t!==void 0){const i=this.group.tool.value.getLabelValue(t.x,t.y,this);this.cursorLayer.setLabel(t.x,t.y,i),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(t)}},_d=class extends ot{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.url,t))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},kd=class extends da{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},is=class{constructor(r){c(this,"active",!1);this.group=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},ya=class extends is{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>i===void 0?"":i.getTemperatureAtPoint(e,t).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},xn=class extends is{},$d=class extends xn{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call())}onPointLeave(){}onPointEnter(){}},Pd=class extends xn{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call()}onPointMove(){}onPointLeave(){}onPointEnter(){}},Cd=class extends xn{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call())}onPointLeave(){}onPointEnter(){}},Sd=class extends is{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call())}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>o.selected?`<span style="color:${o.initialColor}">${o.key}</span>`:`<s style="color:${o.initialColor}">${o.key}</s>`);return`${s.length>0?s.join("<br />")+"<br />":""}X: ${e}<br />Y: ${t}`}},Od=[ya,Pd,Cd,$d,Sd],Ad=r=>{const e=Od.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},Ed=class extends ot{constructor(e,t){super(e,t);c(this,"_tools",Ad(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof is?this.value=e:this.value=this.tools[e]}},Dd=class extends ts{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new kd(this,void 0));c(this,"tool",new Ed(this,new ya(this)));c(this,"files",new _d(this,[]));c(this,"cursorPosition",new Zh(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});this.registry=e,this.id=t,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},wa=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Ni=class xa extends wa{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new xa(e.url,e.code,e.message)}},_a=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},Cr=class extends wa{constructor(e,t,i,s,n){super(s,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=t,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async getPointAnalysisData(e,t){return await this.parser.getPointAnalysisData(this.buffer,e,t)}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const t=this.getFrameSubset(e);return await this.parser.frameData(t.array,t.dataType)}async createInstance(e){const t=await this.baseInfo(),i=await this.frameData(0),s=va.fromService(e,this,t,i);return e.files.addFile(s),s}},Ld=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(oe,ue)=>{const ye=oe.getBigInt64(ue,!0),pe=62135596800000n,be=10000n,ie=24n*60n*60n*1000n*be,we=0x4000000000000000n,Me=0x8000000000000000n;let Xe=ye&0x3fffffffffffffffn;ye&Me&&(Xe>we-ie&&(Xe-=we),Xe<0&&(Xe+=ie));const pr=Xe/be-pe;return Number(pr)},o=n(e,5),l=e.getUint8(15);let u=2;l===1&&(u=4);const p=57,m=t*i*u,f=p+m,y=r.slice(25),_=y.byteLength/f,k=oe=>{const ue=oe*f,ye=ue+f,pe=y.slice(ue,ye),be=new DataView(pe),ie=be.getFloat32(8,!0),we=be.getFloat32(12,!0),Me=n(be,0),Qe=be.getFloat32(24,!0),Xe=be.getFloat32(28,!0);return{timestamp:Me,min:ie,max:we,emissivity:Qe,reflectedKelvins:Xe}},O=[];for(let oe=0;oe<_;oe++){const ue=k(oe);O.push(ue)}const C={emissivity:0,reflectedKelvins:0};let I=1/0,W=-1/0;const V=[];O.forEach(oe=>{C.emissivity=C.emissivity+oe.emissivity,C.reflectedKelvins=C.reflectedKelvins+oe.reflectedKelvins,oe.min<I&&(I=oe.min),oe.max>W&&(W=oe.max),V.push(oe.timestamp)});const de=V[0],te=[];V.forEach((oe,ue)=>{const ye=V[ue+1];let pe=0;ye===void 0&&(pe=0),pe=ye-oe;const be=oe-de;te.push({absolute:oe,relative:be,offset:isNaN(pe)?0:pe,index:ue})});const Ee=O[O.length-1].timestamp-O[0].timestamp,N=Ee/_,ve=1e3/N;return{width:t,height:i,timestamp:o,bytesize:s,frameCount:_,duration:Ee,frameInterval:N,fps:ve,timeline:te,min:I,max:W,averageEmissivity:C.emissivity/O.length,averageReflectedKelvins:C.reflectedKelvins/O.length}},Rd=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),o=i===1?4:2,l=57,u=s*n*o,p=l+u,m=r.slice(25),f=e*p,y=f+p;return{array:m.slice(f,y),dataType:i}},Td=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,o=24n*60n*60n*1000n*n,l=0x4000000000000000n,u=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&u&&(m>l-o&&(m-=l),m<0&&(m+=o));const y=m/n-s,_=Number(y),k=t.getFloat32(8,!0),O=t.getFloat32(12,!0),C=t.getFloat32(24,!0),I=t.getFloat32(28,!0),W=r.slice(57);let V=[];if(e===0){const de=new Uint16Array(W),te=Math.abs(k-O),Ee=65535;de.forEach(N=>{const ve=N/Ee;V.push(k+te*ve)})}else e===1&&(V=Array.from(new Float32Array(W)));return{timestamp:_,min:k,max:O,emissivity:C,reflectedKelvins:I,pixels:V}},Md=async(r,e,t)=>({temperatures:{}}),Ud=async r=>{let e=[];const t=async C=>{const I=new DataView(C.slice(0,25)),W=I.getUint8(15),V=I.getUint16(17,!0),de=I.getUint16(19,!0),te=W===1?4:2,Ee=57,N=V*de*te,ve=Ee+N,oe=C.slice(25),ue=oe.byteLength/ve;let ye=[];for(let pe=0;pe<ue;pe++){const ie=pe*ve+57,we=ie+N,Me=oe.slice(ie,we);W===0||W===1&&(ye=ye.concat(Array.from(new Float32Array(Me))))}return ye};(await Promise.all(r.map(C=>t(C)))).forEach(C=>{e=e.concat(C)}),e.sort((C,I)=>C-I);const s=e[0],n=e[e.length-1],o=Math.abs(s-n),l=200,u=o/l,p=[];let m=[...e];for(let C=0;C<l;C++){const I=s+u*C,W=I+u,V=m.findIndex(ve=>ve>W),te=m.slice(0,V-1).length,Ee=te/e.length*100,N={from:I,to:W,count:te,percentage:Ee};p.push(N),m=m.slice(V)}const f=[...p].sort((C,I)=>C.percentage-I.percentage),y=f[0].percentage,_=f[f.length-1].percentage,k=Math.abs(y-_);return p.map(C=>({...C,height:C.percentage/k*100}))},Fd=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},Id=[{extension:"lrc",minme:"application/octet-stream"}],jd={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Id,is:Fd,baseInfo:Ld,getFrameSubset:Rd,frameData:Td,registryHistogram:Ud,getPointAnalysisData:Md},ka=Object.freeze(jd),Wd={LrcParser:ka},$a=Object.values(Wd),Pa=(r,e)=>{const t=$a.find(i=>i.is(r,e));if(t===void 0)throw new _a(2,e,`No parser found for '${e}'.`);return t},Ca=$a.map(r=>r.extensions),Nd=Ca.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Hd=class Sa{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new Sa(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new Ni(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=Pa(i,this.thermalUrl);return this.pocessTheService(new Cr(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof _a)return this.pocessTheService(Ni.fromError(s));throw s}}pocessTheService(e){return e}},Bd=class Oa{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new Se);c(this,"onMouseLeave",new Se);c(this,"onDrop",new Se);c(this,"onProcessingEnd",new Se);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new Oa(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Nd,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},zd=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new _n(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=Pa(e,r.name);return new Cr(this,e,t,r.name)}catch(e){return new Ni(r.name,3,e.message)}}handleDropzone(r){return Bd.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=Hd.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},Vd=class extends ot{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},Yd=class extends ot{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new Dd(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},qd=class extends ot{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,o)=>{let u=t.reduce((_,k)=>{const O=k.reduce((C,I)=>[...C,...I],[]);return[..._,...O]},[]).sort((_,k)=>_-k);const p=n/o;let m=i+p;const f=new Map;let y=0;for(;m!==!1;){const _=u.findIndex(C=>C>m),k=u.slice(0,_).length;f.set(m-p/2,k),y+=k,u=u.slice(_);const O=m+p;m=O<s?O:!1}return{result:f,resultCount:y}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(ka.registryHistogram,[t]);this.value=i}},Xd=class extends ot{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Gd=class extends da{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Zd=class extends ts{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new Yd(this,[]));c(this,"opacity",new Vd(this,1));c(this,"minmax",new Gd(this,void 0));c(this,"loading",new Xd(this,!1));c(this,"range",new Qh(this,void 0));c(this,"histogram",new qd(this,[]));c(this,"palette");this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),o=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:o}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async o=>o instanceof Cr?await o.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Cr&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,t){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},_n=class extends ts{constructor(e,t){super();c(this,"id");c(this,"service",new zd(this));c(this,"registries",{});c(this,"palette",new rd(this,"jet"));c(this,"pool");this.pool=e||Gh.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Zd(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Aa=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Eo=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Aa(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qd{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Kd=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Do extends Qd{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const u=new Set;for(const[p,{consumerHost:m}]of this.subscriptions)u.has(p)||(u.add(p),m.dispatchEvent(new Aa(this.context,p,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Kd(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Do(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new Do(o,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const o=new WeakMap;n={get(){return o.get(this)},set(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Eo(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Eo(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let Di;const Jd=new Uint8Array(16);function eu(){if(!Di&&(Di=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Di))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Di(Jd)}const Ze=[];for(let r=0;r<256;++r)Ze.push((r+256).toString(16).slice(1));function tu(r,e=0){return Ze[r[e+0]]+Ze[r[e+1]]+Ze[r[e+2]]+Ze[r[e+3]]+"-"+Ze[r[e+4]]+Ze[r[e+5]]+"-"+Ze[r[e+6]]+Ze[r[e+7]]+"-"+Ze[r[e+8]]+Ze[r[e+9]]+"-"+Ze[r[e+10]]+Ze[r[e+11]]+Ze[r[e+12]]+Ze[r[e+13]]+Ze[r[e+14]]+Ze[r[e+15]]}const ru=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Lo={randomUUID:ru};function iu(r,e,t){if(Lo.randomUUID&&!e&&!r)return Lo.randomUUID();r=r||{};const i=r.random||(r.rng||eu)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,tu(i)}class ss extends nt{constructor(){super(...arguments),this.UUID=iu()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const Ea="manager-instance",ns="manager-palette-context",su=new _n,nu="__internal_default_registry",ou="__internal_default_group",au=r=>r.addOrGetRegistry(nu),lu=r=>r.groups.addOrGetGroup(ou);var cu=Object.defineProperty,hu=Object.getOwnPropertyDescriptor,os=(r,e,t,i)=>{for(var s=i>1?void 0:i?hu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&cu(e,t,s),s};let ar=class extends ss{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:sr.jet}}connectedCallback(){super.connectedCallback();let r=su;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},t=ar.sanitizeStringPalette(this.palette.key);e.palette=t,r=new _n(void 0,e)}this.manager=r,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(r,e,t){if(super.attributeChangedCallback(r,e,t),r==="palette"&&this.manager){const i=ar.sanitizeStringPalette(t);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(r){let e=!0;return r==null?e=!1:Object.keys(sr).includes(r)||(e=!1),e?r:"jet"}setPalette(r){this.palette={key:r,data:sr[r]}}render(){return D`<slot></slot>`}};os([Ae({context:Ea})],ar.prototype,"manager",2);os([j({type:String,reflect:!0,attribute:!0})],ar.prototype,"slug",2);os([Ae({context:ns}),j({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:sr[r]}),toAttribute:r=>r.key.toString()}})],ar.prototype,"palette",2);ar=os([re("manager-provider")],ar);var du=Object.defineProperty,uu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&du(e,t,s),s};class kn extends ss{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}uu([ge({context:Ea,subscribe:!0}),R()],kn.prototype,"manager");const Da="registry-instance",La="registry-opacity",$n="registry-range-from",Pn="registry-range-to",pu="registry-loading",Ra="registry-min",Ta="registry-max";var fu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,Nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?mu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&fu(e,t,s),s};let At=class extends kn{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let r=au(this.manager);this.slug===void 0&&(r=this.manager.addOrGetRegistry(this.slug)),this.registry=r,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(r,e,t){var i;if(super.attributeChangedCallback(r,e,t),(r==="from"||r==="to")&&t&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:r==="from"?parseFloat(t):this.from,to:r==="to"?parseFloat(t):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.setFixedRange(n):s.setFixedRange(n)}}if(r==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return D`<slot></slot>`}};Nt([j({type:String,reflect:!0,attribute:!0})],At.prototype,"slug",2);Nt([Ae({context:Da})],At.prototype,"registry",2);Nt([Ae({context:La}),j({type:Number,reflect:!0,attribute:!0})],At.prototype,"opacity",2);Nt([Ae({context:Ra}),R()],At.prototype,"min",2);Nt([Ae({context:Ta}),R()],At.prototype,"max",2);Nt([Ae({context:$n}),j({type:Number,reflect:!0,attribute:!0})],At.prototype,"from",2);Nt([Ae({context:Pn}),j({type:Number,reflect:!0,attribute:!0})],At.prototype,"to",2);Nt([Ae({context:pu}),j({type:String,reflect:!0,attribute:!0})],At.prototype,"loading",2);At=Nt([re("registry-provider")],At);var gu=Object.defineProperty,vu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&gu(e,t,s),s};class ut extends kn{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}vu([ge({context:Da,subscribe:!0})],ut.prototype,"registry");const Ma="group-instance",Ua="tool-context",Fa="tools-context";var bu=Object.defineProperty,yu=Object.getOwnPropertyDescriptor,hi=(r,e,t,i)=>{for(var s=i>1?void 0:i?yu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&bu(e,t,s),s};let Sr=class extends ut{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=lu(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,r=>{this.tool=r})}render(){return D`<slot></slot>`}};hi([j({type:String,attribute:!0,reflect:!0})],Sr.prototype,"slug",2);hi([Ae({context:Ma})],Sr.prototype,"group",2);hi([Ae({context:Ua})],Sr.prototype,"tool",2);hi([Ae({context:Fa})],Sr.prototype,"tools",2);Sr=hi([re("group-provider")],Sr);var wu=Object.defineProperty,xu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&wu(e,t,s),s};class di extends ut{constructor(){super()}connectedCallback(){super.connectedCallback()}}xu([ge({context:Ma,subscribe:!0})],di.prototype,"group");const Ia="file",ja="failure",Wa="file-loading",_u="file-loaded",Cn="file-provider-element",Sn="file-ms-context",as="playback",On="duration",An="playing",Na="playbackSpeed",Ha="recording",Ba="mayStop",za="analysislist",En="file-markers-context";var ku=Object.defineProperty,at=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&ku(e,t,s),s};class Je extends di{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Se,this.onSuccess=new Se,this.onFailure=new Se}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}attributeChangedCallback(e,t,i){var s,n,o;if(super.attributeChangedCallback(e,t,i),e==="ms"&&i&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(i)));l!==this.currentFrame.ms&&((s=this.file)==null||s.timeline.setRelativeTime(l))}e==="playing"&&(i==="true"?(n=this.file)==null||n.timeline.play():i==="false"&&((o=this.file)==null||o.timeline.pause())),e==="playbackspeed"&&this.file&&i&&Object.keys(wn).includes(i)&&(this.file.timeline.playbackSpeed=parseFloat(i)),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.playbackSpeed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}at([Ae({context:Ia}),R()],Je.prototype,"file");at([Ae({context:ja}),R()],Je.prototype,"failure");at([Ae({context:Wa}),R()],Je.prototype,"loading");at([Ae({context:_u}),R()],Je.prototype,"ready");at([Ae({context:An}),j({type:String,reflect:!0,attribute:!0})],Je.prototype,"playing");at([Ae({context:On}),R()],Je.prototype,"duration");at([Ae({context:as}),R()],Je.prototype,"currentFrame");at([Ae({context:Sn}),j({type:Number,reflect:!0,attribute:!0})],Je.prototype,"ms");at([Ae({context:Na}),j({type:Number,reflect:!0,attribute:!0})],Je.prototype,"playbackSpeed");at([Ae({context:Ha}),j({type:String,reflect:!0,attribute:!0})],Je.prototype,"recording");at([Ae({context:Ba}),R()],Je.prototype,"mayStop");at([ni({slot:"mark",flatten:!0})],Je.prototype,"marksQueriedInternally");at([Ae({context:En})],Je.prototype,"marksProvidedBelow");at([Ae({context:za})],Je.prototype,"analysis");var $u=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,ls=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&$u(e,t,s),s};let Kr=class extends Je{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Cr?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.clearCallbacks(),t.group.registry.postLoadedProcessing(),t)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(r=>{r instanceof va?this.recieveInstance(r):this.failure=r})}render(){return D`
            <slot></slot>
            <slot name="mark"></slot>
        `}};ls([Ae({context:Cn})],Kr.prototype,"providedSelf",2);ls([j({type:String,attribute:!0,reflect:!0})],Kr.prototype,"thermal",2);ls([j({type:String,attribute:!0,reflect:!0})],Kr.prototype,"visible",2);Kr=ls([re("file-provider")],Kr);var Cu=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,Rr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Su(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Cu(e,t,s),s};let Qt=class extends Je{constructor(){super(...arguments),this.providedSelf=this,this.container=Te(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof Cr){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Ni&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return D`

                    <div class="container">
                        <div ${Ne(this.container)} class="${Tt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${Ca.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return D`
            ${this.ready?D`<slot></slot>`:B}
            <slot name="mark"></slot>
        `}};Qt.styles=Oe`

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
    
    `;Rr([Ae({context:Cn})],Qt.prototype,"providedSelf",2);Rr([R()],Qt.prototype,"container",2);Rr([R()],Qt.prototype,"ready",2);Rr([R()],Qt.prototype,"hover",2);Rr([R()],Qt.prototype,"listener",2);Qt=Rr([re("file-dropin")],Qt);var Ou=Object.defineProperty,Au=Object.getOwnPropertyDescriptor,Dn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Au(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ou(e,t,s),s};let Jr=class extends di{constructor(){super(...arguments),this.container=Te(),this.hover=!1}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const r={dropin:!0,hover:this.hover};return D`

            <div class="container">
            
                <div ${Ne(this.container)} class="${Tt(r)}"></div>

            </div>
        
        `}};Jr.styles=Oe`

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
    
    `;Dn([R()],Jr.prototype,"container",2);Dn([R()],Jr.prototype,"hover",2);Jr=Dn([re("group-dropin")],Jr);var Eu=Object.defineProperty,Du=Object.getOwnPropertyDescriptor,Va=(r,e,t,i)=>{for(var s=i>1?void 0:i?Du(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Eu(e,t,s),s};let Hi=class extends ut{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return D`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return D`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(sr).map(([r,e])=>D`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};Hi.styles=Oe`

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

    `;Va([ge({context:ns,subscribe:!0})],Hi.prototype,"value",2);Hi=Va([re("registry-palette-dropdown")],Hi);var Lu=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,Ya=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ru(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Lu(e,t,s),s};let Bi=class extends ut{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return D`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${r.name}</span>
            </div>
        
        `}render(){return D`
            <div class="container">
                ${Object.entries(sr).map(([r,e])=>D`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};Bi.styles=Oe`

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

    `;Ya([ge({context:ns,subscribe:!0}),R()],Bi.prototype,"value",2);Bi=Ya([re("registry-palette-buttons")],Bi);var Tu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,qa=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Tu(e,t,s),s};let zi=class extends ut{connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return D`
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
        `}};zi.styles=Oe`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;qa([ge({context:La,subscribe:!0})],zi.prototype,"value",2);zi=qa([re("registry-opacity-slider")],zi);var Uu=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,Iu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Uu(e,t,s),s};let Ro=class extends ut{doAction(){this.registry.range.applyAuto()}render(){return D`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Ro=Iu([re("registry-range-auto-button")],Ro);var ju=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,Nu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ju(e,t,s),s};let To=class extends ut{doAction(){this.registry.range.applyMinmax()}render(){return D`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};To=Nu([re("registry-range-full-button")],To);var Hu=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,cs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Hu(e,t,s),s};let Et=class extends ut{constructor(){super(...arguments),this.ticksRef=Te(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Et.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){return D`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Ne(this.ticksRef)}>

                    ${this.ticks.map(r=>D`
                            <div class="tick" >
                                <div class="tick-value">
                                ${r.value.toFixed(Et.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Et.TICK_WIDTH=40;Et.TICK_FIXED=2;Et.styles=Oe`

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


    `;cs([j({type:String,reflect:!0})],Et.prototype,"placement",2);cs([R()],Et.prototype,"minmax",2);cs([R()],Et.prototype,"ticks",2);Et=cs([re("registry-ticks-bar")],Et);var zu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,ui=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&zu(e,t,s),s};let Or=class extends ut{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return D`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return D`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};ui([R()],Or.prototype,"minmax",2);ui([R()],Or.prototype,"range",2);ui([R()],Or.prototype,"opacity",2);ui([R()],Or.prototype,"palette",2);Or=ui([re("registry-log")],Or);(()=>{var r=Object.defineProperty,e=Math.pow,t=(a,d,v)=>d in a?r(a,d,{enumerable:!0,configurable:!0,writable:!0,value:v}):a[d]=v,i=(a,d,v)=>(t(a,typeof d!="symbol"?d+"":d,v),v),s=(a,d)=>` ${d&&d.length>0?d.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${a} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",o="pointers-overlap",l="pointers-min-distance",u="pointers-max-distance",p="range-dragging",m="data",f="min",y="max",_="step",k="round",O="type",C="theme",I="rtl",W="btt",V="disabled",de="keyboard-disabled",te="mousewheel-disabled",Ee="slider-width",N="slider-height",ve="slider-radius",oe="slider-bg",ue="slider-bg-hover",ye="slider-bg-fill",pe="pointer-width",be="pointer-height",ie="pointer-radius",we="pointer-bg",Me="pointer-bg-hover",Qe="pointer-bg-focus",Xe="pointer-shadow",Mr="pointer-shadow-hover",pr="pointer-shadow-focus",mi="pointer-border",gi="pointer-border-hover",us="pointer-border-focus",vi="animate-onclick",ps="css-links",lt="vertical",Ht="horizontal",Ur=(a,d,v,g,L)=>{let q=d-a;return q===0?v:(g-v)*(L-a)/q+v},bt=a=>!isNaN(parseFloat(a))&&isFinite(a),Ue=(a,d)=>bt(a)?Number(a):d,bi=(a,d)=>d===0?0:Math.round(a/d)*d,fs=(a,d=1/0)=>{if(d===1/0)return a;let v=e(10,d);return Math.round(a*v)/v},ze=a=>a==null?!1:typeof a=="boolean"?a:a.trim().toLowerCase()==="true",ms=(a,d)=>{a.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:d}}))},gs=(a,d)=>{a.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:d}}))},vs=(a,d)=>{a.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:d}}))},bs=(a,d)=>{a.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:d}}))},ys=(a,d)=>{if(!d||d.length<=0)return;let v=d.map(L=>bt(L)?Ue(L,L):L),g={values:v||[]};g.value=v[0],g.value0=v[0],g.value1=v[0];for(let L=1;L<v.length;L++)g[`value${L+1}`]=v[L];a.dispatchEvent(new CustomEvent("change",{detail:g}))},x=(a,d,v)=>{let g=0,L,q,ee,T,M=!1,se=(G,Le,Ye,Ve,Fe,Ie)=>{let tt=g;Ye!==void 0&&G>Ye&&(G=Ye),Le!==void 0&&G<Le&&(G=Le),g=G;let rt=g;return(Ve===lt&&Ie||Ve===Ht&&Fe)&&(rt=100-rt),Ve===lt?d.style.top=`${rt}%`:d.style.left=`${rt}%`,tt!==g},ce=G=>G===d||d.contains(G),H=(G,Le,Ye,Ve)=>{L=G,q=Le,ee=Ye,T=Ve},Pe=G=>{M=G,d.classList.toggle("disabled",M),M?d.setAttribute("aria-disabled","true"):d.hasAttribute("aria-disabled")&&d.removeAttribute("aria-disabled")},ft=(G,Le)=>{Le==null?d.removeAttribute(G):d.setAttribute(G,Le)},Ke=G=>d.getAttribute(G),X=G=>{if(!M){switch(G.key){case"ArrowLeft":{G.preventDefault(),typeof L=="function"&&L(v);break}case"ArrowRight":{G.preventDefault(),typeof q=="function"&&q(v);break}case"ArrowUp":{G.preventDefault(),typeof ee=="function"&&ee(v);break}case"ArrowDown":{G.preventDefault(),typeof T=="function"&&T(v);break}}bs(a,G)}},ne=()=>{M||ms(a,d)};return d.className=`pointer pointer-${v}`,d.addEventListener("keydown",X),d.addEventListener("click",ne),{$pointer:d,get percent(){return g},get disabled(){return M},set disabled(G){Pe(G)},updatePosition:se,isClicked:ce,setCallbacks:H,setAttr:ft,getAttr:Ke,destroy:()=>{d.removeEventListener("keydown",X),d.removeEventListener("click",ne),d.remove()}}},S=a=>{if(a==null)return;if(Array.isArray(a))return a;if(a.trim()==="")return;let d=a.split(","),v=[],g=!0;for(let L=0;L<d.length;L++){let q=d[L].trim();q!==""&&(v.push(q),bt(q)||(g=!1))}return g?v.map(L=>Number(L)):v},A=(a,d)=>d?d.findIndex(v=>v===a||v.toString().trim()===a.toString().trim()):-1,E=a=>({updatePosition:(d,v,g,L)=>{if(v.length<=0)return;let q=v.length===1,ee=v[0],T=v[v.length-1];d===lt?(a.style.removeProperty("width"),a.style.removeProperty("right"),a.style.removeProperty("left"),q?a.style.height=`${ee}%`:a.style.height=`${Math.abs(ee-T)}%`,L?(a.style.bottom="0%",q?a.style.top="auto":a.style.top=`${Math.min(100-T,100-ee)}%`):(a.style.bottom="auto",q?a.style.top="0%":a.style.top=`${Math.min(ee,T)}%`)):(a.style.removeProperty("height"),a.style.removeProperty("top"),a.style.removeProperty("bottom"),q?a.style.width=`${ee}%`:a.style.width=`${Math.abs(ee-T)}%`,g?(a.style.right="0%",q?a.style.left="auto":a.style.left=`${Math.min(100-T,100-ee)}%`):(a.style.right="auto",q?a.style.left="0%":a.style.left=`${Math.min(ee,T)}%`))}}),Y="--animate-onclick",_e="--width",Q="--height",De="--panel-bg-border-radius",fe="--panel-bg",U="--panel-bg-hover",me="--panel-bg-fill",w="--pointer-width",$="--pointer-height",K="--pointer-border-radius",ae="--pointer-bg",He="--pointer-bg-hover",Ge="--pointer-bg-focus",$t="--pointer-shadow",ct="--pointer-shadow-hover",pt="--pointer-shadow-focus",Bt="--pointer-border",z="--pointer-border-hover",J="--pointer-border-focus",P=(a,d,v)=>{let g=new Map;for(let L of a.attributes){let q=L.nodeName.trim().toLowerCase();if(!d.test(q))continue;let ee=q.replace(/\D/g,"").trim(),T=ee===""||ee==="0"||ee==="1"?0:Ue(ee,0)-1,M=v&&typeof v=="function"?v(L.value):L.value;g.set(T,M)}return g},Z=a=>{if(!a)return null;let d=a.getAttribute(ps);if(!d)return null;let v=d.split(";"),g=[];for(let L of v)L.trim()!==""&&g.push(L.trim());return g},ke=[[_e,Ee,"sliderWidth",null],[Q,N,"sliderHeight",null],[De,ve,"sliderRadius",null],[fe,oe,"sliderBg",null],[U,ue,"sliderBgHover",null],[me,ye,"sliderBgFill",null],[w,pe,"pointer#Width",/^pointer([0-9]*)-width$/],[$,be,"pointer#Height",/^pointer([0-9]*)-height$/],[K,ie,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ae,we,"pointer#Bg",/^pointer([0-9]*)-bg$/],[He,Me,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ge,Qe,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[$t,Xe,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[ct,Mr,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[pt,pr,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Bt,mi,"pointer#Border",/^pointer([0-9]*)-border$/],[z,gi,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[J,us,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],xe=(a,d,v)=>{let g=null,L=[],q=new Map,ee=(X,ne=d)=>{let G=[...ne.classList];for(let Le of G)Le.startsWith(X)&&d.classList.remove(Le)},T=()=>{ee("shape");let X=d.querySelectorAll(".pointer");for(let ne of X)ee("shape",ne)},M=X=>{g=X,ee("theme-"),typeof X=="string"&&d.classList.add(`theme-${X}`)},se=()=>{if(T(),!(L.length<=0)){d.classList.add("shape",`shape-${L[0]}`);for(let X=1;X<L.length;X++){let ne=L[X];if(!ne)continue;let G=d.querySelector(`.pointer-${X}`);!G||G.classList.add("shape",`shape-${ne}`)}}},ce=(X,ne)=>{L[X]=ne,se()},H=()=>{T();let X=P(a,/^pointer([0-9]*)-shape$/);if(!(X.size<=0)){for(let ne of X){let G=ne[0];L[G]=ne[1]}se()}},Pe=(X,ne)=>`${X}-${ne}`,ft=(X,ne,G)=>{let Le=v[G];if(!Le)return;let Ye=G===0?d:Le.$pointer;if(ne==null){q.has(Pe(X,G))&&q.delete(Pe(X,G)),Ye.style.removeProperty(X);return}q.set(Pe(X,G),ne),Ye.style.setProperty(X,ne)},Ke=(X,ne)=>q.get(Pe(X,ne));return(()=>{for(let X of ke){let[ne,G,Le,Ye]=X;if(Ye){let Fe=P(a,Ye);for(let Ie of Fe){let tt=Ie[0],rt=Ie[1];ft(ne,rt,tt)}}else{let Fe=a.getAttribute(G);ft(ne,Fe,0)}let Ve=[];if(Le.indexOf("#")===-1)Ve.push([Le,0]);else{Ve.push([Le.replace("#",""),0]),Ve.push([Le.replace("#","0"),0]),Ve.push([Le.replace("#","1"),0]);for(let Fe=1;Fe<v.length;Fe++)Ve.push([Le.replace("#",(Fe+1).toString()),Fe])}for(let Fe of Ve)try{let Ie=Fe[0],tt=Fe[1];Object.prototype.hasOwnProperty.call(a,Ie)||Object.defineProperty(a,Ie,{get(){return Ke(ne,tt)},set:rt=>{ft(ne,rt,tt)}})}catch(Ie){console.error(Ie)}}M(a.getAttribute(C)),H()})(),{setStyle:ft,getStyle:Ke,get theme(){return g},set theme(X){M(X)},get pointerShapes(){return L},setPointerShape:ce}},Re="animate-on-click",le="range-dragging",et=(a,d,v,g)=>{let L=[],q=ce=>{for(let H of L)H.update&&typeof H.update=="function"&&H.update(ce)},ee=()=>{for(let ce of L)ce.destroy&&typeof ce.destroy=="function"&&ce.destroy()},T=(ce,H)=>{for(let Pe of L)Pe.onAttrChange&&typeof Pe.onAttrChange=="function"&&Pe.onAttrChange(ce,H)},M=ce=>{if(ce.gettersAndSetters){for(let H of ce.gettersAndSetters)if(!(!H.name||!H.attributes))try{Object.prototype.hasOwnProperty.call(a,H.name)||Object.defineProperty(a,H.name,H.attributes)}catch(Pe){console.error("defineSettersGetters error:",Pe)}}},se=ce=>{var H;if(!ce.css)return;let Pe=(H=a.shadowRoot)==null?void 0:H.querySelector("style");!Pe||(Pe.innerHTML+=ce.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ce of window.tcRangeSliderPlugins){let H=ce();L.push(H),H.init&&typeof H.init=="function"&&(H.init(a,d,v,g),M(H),se(H))}},update:q,onAttrChange:T,destroy:ee}},Be=10,yi=20,Ga=(a,d)=>{let v=new Map,g=/^value([0-9]*)$/;for(let T of a.attributes){let M=T.nodeName.trim().toLowerCase();if(!g.test(M))continue;let se=M.replace("value","").trim(),ce=se===""||se==="0"||se==="1"?0:Ue(se,0)-1,H=bt(T.value)?Ue(T.value,0):T.value;v.set(ce,H)}let L=Math.max(...Array.from(v.keys())),q=[];q.push([x(a,d,0),v.get(0)]);let ee=d;for(let T=1;T<=L;T++){let M=d.cloneNode(!0);ee.after(M),ee=M,q.push([x(a,M,T),v.get(T)])}return q},In=(a,d,v,g,L,q,ee)=>{try{Object.defineProperty(a,g,{configurable:!0,get(){if(!d)return;let T=d.pointers[v];if(!T)return;let M=d.getTextValue(T.percent);return bt(M)?Ue(M,M):M},set:T=>{d.pointers[v]?d==null||d.setValue(T,v):d==null||d.addPointer(T)}}),Object.defineProperty(a,L,{configurable:!0,get(){var T,M;return(M=(T=d==null?void 0:d.pointers[v])==null?void 0:T.getAttr("aria-label"))!=null?M:void 0},set:T=>{!d||d.setAriaLabel(v,T)}}),Object.defineProperty(a,q,{configurable:!0,get(){var T,M;return(M=(T=d==null?void 0:d.styles)==null?void 0:T.pointerShapes[v])!=null?M:null},set:T=>{!d||!d.styles||d.styles.setPointerShape(v,T)}}),Object.defineProperty(a,ee,{configurable:!0,get(){var T;return(T=d==null?void 0:d.pointers[v].disabled)!=null?T:!1},set:T=>{if(!d)return;let M=d==null?void 0:d.pointers[v];!M||(M.disabled=T)}})}catch(T){console.error(T)}},Za=(a,d)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Be;g++)v.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of v)In(a,d,g[4],g[0],g[1],g[2],g[3])},jn=(a,d,v)=>{var g;let L=(g=v.shadowRoot)==null?void 0:g.querySelector(".container");if(L)for(let q of a)d?L.prepend(q.$pointer):L.append(q.$pointer)},Qa=(a,d)=>{if(!(!d||a.length<=1)){for(let v of a)v.$pointer.style.zIndex=yi.toString();d.$pointer.style.zIndex=(yi*2).toString()}},ws=0,Fr=100,fr=2,Wn="0.3s",Ka=(a,d,v)=>{let g=v.map(h=>h[0]),L=null,q=null,ee=null,T=null,M=ws,se=Fr,ce,H,Pe=Ht,ft=fr,Ke=!1,X=!1,ne=!1,G=0,Le=1/0,Ye=!1,Ve,Fe,Ie=!1,tt=!1,rt=!1,zt=Wn,Nn=[],Hn=h=>{Ie||(h.preventDefault&&h.preventDefault(),Jt(h),window.addEventListener("mousemove",Jt),window.addEventListener("mouseup",wi),gs(a,h))},wi=h=>{Ie||(Ve=void 0,Fe=void 0,window.removeEventListener("mousemove",Jt),window.removeEventListener("mouseup",wi),zt&&d.classList.add(Re),vs(a,h))},tl=(h,b)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(h)&&zt&&d.classList.remove(Re),g[0];let F=il(h);if(Ye){let $e=b,yt=_i($e);yt!==void 0&&($e=bi($e,yt)),F?(Ve=$e,Fe=0,zt&&d.classList.remove(Re)):Ve!==void 0&&(Fe=$e-Ve,Ve=$e)}if(!rl(h)&&!F){for(let $e of g)if(!(!$e.isClicked(h)||$e.disabled))return zt&&d.classList.remove(Re),$e;for(let $e of g)if(L===$e)return $e}let Ce=1/0,je=null;for(let $e of g){if($e.disabled)continue;let yt=Math.abs(b-$e.percent);yt<Ce&&(Ce=yt,je=$e)}return je},Bn=()=>g.findIndex(h=>L===h&&!h.disabled),Jt=h=>{let b;if(Pe===lt){let{height:Ce,top:je}=d.getBoundingClientRect(),$e=h.type.indexOf("mouse")!==-1?h.clientY:h.touches[0].clientY;b=Math.min(Math.max(0,$e-je),Ce)*100/Ce}else{let{width:Ce,left:je}=d.getBoundingClientRect(),$e=h.type.indexOf("mouse")!==-1?h.clientX:h.touches[0].clientX;b=Math.min(Math.max(0,$e-je),Ce)*100/Ce}if((Ke||X)&&(b=100-b),L=tl(h.target,b),L&&Qa(g,L),Ye&&g.length>1&&Fe!==void 0){let Ce=g[0],je=g[g.length-1],$e=Ce.percent+Fe<0,yt=je.percent+Fe>100;if($e||yt)return;for(let Ei=0;Ei<g.length;Ei++)it(Ei,g[Ei].percent+Fe);return}let F=Bn();F!==-1&&(it(F,b),L==null||L.$pointer.focus())},xi=h=>{if(Ie||document.activeElement!==a||L!=null&&L.disabled)return;h.stopPropagation(),h.preventDefault();let b=h.deltaY<0,F=Ke||X,Ce=b?!F:F,je=Bn();je!==-1&&(Ce?Ir(je,g[je].percent):jr(je,g[je].percent))},zn=h=>{Ie||tt||(Pe===lt?X?it(h,100):it(h,0):Ke?jr(h,g[h].percent):Ir(h,g[h].percent))},Vn=h=>{Ie||tt||(Pe===lt?X?it(h,0):it(h,100):Ke?Ir(h,g[h].percent):jr(h,g[h].percent))},Yn=h=>{Ie||tt||(Pe===lt?X?jr(h,g[h].percent):Ir(h,g[h].percent):Ke?it(h,100):it(h,0))},qn=h=>{Ie||tt||(Pe===lt?X?Ir(h,g[h].percent):jr(h,g[h].percent):Ke?it(h,0):it(h,100))},rl=h=>h.classList.contains("panel"),il=h=>h.classList.contains("panel-fill"),Ir=(h,b)=>{if(b===void 0)return;let F=_i(b);F==null&&(F=1),b-=F,b<0&&(b=0),it(h,b)},jr=(h,b)=>{if(b===void 0)return;let F=_i(b);F==null&&(F=1),b+=F,b>100&&(b=100),it(h,b)},er=()=>{!T||T.update({percents:Xn(),values:Gn(),$pointers:Zn(),min:Qn(),max:Kn(),data:ks(),step:_s(),round:Ps(),type:$s(),textMin:ki(),textMax:$i(),rightToLeft:Os(),bottomToTop:As(),pointersOverlap:Rs(),pointersMinDistance:Cs(),pointersMaxDistance:Ss(),rangeDragging:Ts(),disabled:Es(),keyboardDisabled:Ds(),mousewheelDisabled:Ls()})},sl=()=>{er()},nl=h=>{if(!(ne||g.length<=1||se===M))if(h===0){let b=Le*100/(se-M);return Math.max(0,g[h+1].percent-b)}else{let b=G*100/(se-M);return Math.min(g[h-1].percent+b,100)}},ol=h=>{if(!(ne||g.length<=1||se===M))if(h===g.length-1){let b=Le*100/(se-M);return Math.min(g[h-1].percent+b,100)}else{let b=G*100/(se-M);return Math.max(0,g[h+1].percent-b)}},_i=h=>{let b;if(typeof ce=="function"){let F=Ur(0,100,M,se,h);b=ce(F,h)}else b=ce;if(bt(b)){let F=se-M;return b=F===0?0:b*100/F,b}},mr=h=>{if(h===void 0)return;let b=Ur(0,100,M,se,h);return H!==void 0?H[Math.round(b)]:fs(b,ft)},ki=()=>H!==void 0?H[M]:M,$i=()=>H!==void 0?H[se]:se,_s=()=>ce,al=h=>{var b;return h<=0||ne?ki():(b=mr(g[h-1].percent))!=null?b:""},ll=h=>{var b;return g.length<=1||h>=g.length-1||ne?$i():(b=mr(g[h+1].percent))!=null?b:""},Xn=()=>g.map(h=>h.percent),Gn=()=>g.map(h=>mr(h.percent)),Zn=()=>g.map(h=>h.$pointer),Qn=()=>M,Kn=()=>se,ks=()=>H,$s=()=>Pe,Ps=()=>ft,Cs=()=>G,Ss=()=>Le,cl=h=>Nn[h],Os=()=>Ke,As=()=>X,Es=()=>Ie,Ds=()=>tt,Ls=()=>rt,Rs=()=>ne,Ts=()=>Ye,it=(h,b)=>{if(b===void 0)return;let F=_i(b);F!==void 0&&(b=bi(b,F));let Ce=g[h];if(!Ce)return;let je=Ce.updatePosition(b,nl(h),ol(h),Pe,Ke,X);q==null||q.updatePosition(Pe,g.map($e=>$e.percent),Ke,X),er();for(let $e of g){let yt=mr($e.percent);yt!==void 0&&($e.setAttr("aria-valuenow",yt.toString()),$e.setAttr("aria-valuetext",yt.toString()))}dl(),je&&ys(a,g.map($e=>mr($e.percent)))},Pt=()=>{for(let h=0;h<g.length;h++)it(h,g[h].percent)},hl=(h,b)=>{M=H!==void 0?0:Ue(h,ws),se=H!==void 0?H.length-1:Ue(b,Fr),Pi(M),Ci(se)},dl=()=>{var h,b;for(let F=0;F<g.length;F++){let Ce=g[F];Ce.setAttr("aria-valuemin",((h=al(F))!=null?h:"").toString()),Ce.setAttr("aria-valuemax",((b=ll(F))!=null?b:"").toString())}},Pi=h=>{M=Ue(h,ws),M>se&&(se=M+Fr),Pt()},Ci=h=>{se=Ue(h,Fr),se<M&&(se=M+Fr),Pt()},Jn=h=>{ne=!0;for(let b=0;b<h.length;b++)Si(h[b],b);ne=!1;for(let b=0;b<h.length;b++)Si(h[b],b)},Si=(h,b)=>{let F;H!==void 0?(F=h==null?0:A(h,H),F===-1&&(F=0)):(F=Ue(h,M),F<M&&(F=M),F>se&&(F=se));let Ce=Ur(M,se,0,100,F);it(b,Ce)},Oi=h=>{if(h==null){ce=void 0;return}if(typeof h=="function"){ce=h,Pt();return}if(bt(h)){ce=Ue(h,1);let b=Math.abs(se-M);ce>b&&(ce=void 0),Pt();return}ce=void 0},Ms=h=>{ne=h,Pt()},Us=h=>{(!bt(h)||h<0)&&(h=0),G=h},Fs=h=>{(!bt(h)||h<0)&&(h=1/0),Le=h},Is=h=>{Ie=h,d.classList.toggle("disabled",Ie),Ie?d.setAttribute("aria-disabled","true"):d.hasAttribute("aria-disabled")&&d.removeAttribute("aria-disabled")},eo=h=>{tt=h},to=h=>{rt=h,rt?document.removeEventListener("wheel",xi):document.addEventListener("wheel",xi,{passive:!1})},js=h=>{if(h==null){H=void 0;return}if(H=S(h),H===void 0||H.length<=0){H=void 0;return}Pi(0),Ci(H.length-1),ce===void 0&&Oi(1)},Ws=h=>{var b;typeof h=="string"?Pe=h.trim().toLowerCase()===lt?lt:Ht:Pe=Ht;let F=(b=a.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!F)return;F.className=`range-slider-box type-${Pe}`,Pt();let Ce=Pe===lt?"vertical":"horizontal";for(let je of g)je.setAttr("aria-orientation",Ce)},Ns=h=>{Ke=h,g.length>1&&jn(g,Ke,a),Pt(),er()},Hs=h=>{X=h,g.length>1&&jn(g,X,a),Pt(),er()},Bs=h=>{ft=Ue(h,fr),ft<0&&(ft=fr),er()},ro=h=>{h==null||h.toString().trim().toLowerCase()==="false"?(zt=void 0,d.style.removeProperty(Y),d.classList.remove(Re)):(zt=h.toString(),d.style.setProperty(Y,zt),d.classList.add(Re))},io=(h,b)=>{let F=g[h];!F||(F.setAttr("aria-label",b),Nn[h]=b)},Ai=h=>{if(Ve=void 0,g.length<=1){Ye=!1,d.classList.remove(le);return}Ye=h,d.classList.toggle(le,Ye)},ul=()=>{Is(ze(a.getAttribute(V))),tt=ze(a.getAttribute(de)),rt=ze(a.getAttribute(te));let h=P(a,/^pointer([0-9]*)-disabled$/,b=>ze(b));for(let b of h){let F=b[0];!g[F]||(g[F].disabled=b[1])}},pl=()=>{let h=P(a,/^aria-label([0-9]*)$/);for(let b of h){let F=b[0];io(F,b[1])}},fl=h=>{let b=g.length,F=g[b-1].$pointer,Ce=F.cloneNode(!0);F.after(Ce);let je=x(a,Ce,b);return je.setCallbacks(zn,Vn,Yn,qn),g.push(je),Si(h,b),Pt(),er(),b},ml=()=>{let h=g.length,b=g[h-1];return b?(b.destroy(),g.pop(),g.length<=1&&Ai(!1),Pt(),er(),h-1):-1};return(()=>{var h,b;for(let Ce of g)Ce.setCallbacks(zn,Vn,Yn,qn);let F=(h=a.shadowRoot)==null?void 0:h.querySelector(".panel-fill");F&&(q=E(F)),Ws(a.getAttribute(O)),Ns(ze(a.getAttribute(I))),Hs(ze(a.getAttribute(W))),hl(a.getAttribute(f),a.getAttribute(y)),Oi(a.getAttribute(_)),js(a.getAttribute(m)),Jn(v.map(Ce=>Ce[1])),Ms(ze(a.getAttribute(o))),Us(Ue(a.getAttribute(l),0)),Fs(Ue(a.getAttribute(u),1/0)),Ai(ze(a.getAttribute(p))),Bs(Ue(a.getAttribute(k),fr)),ul(),pl(),ee=xe(a,d,g),ro((b=a.getAttribute(vi))!=null?b:Wn),d.addEventListener("mousedown",Hn),d.addEventListener("mouseup",wi),d.addEventListener("touchmove",Jt),d.addEventListener("touchstart",Jt),rt||document.addEventListener("wheel",xi,{passive:!1}),T=et(a,sl,{setValues:Jn,setMin:Pi,setMax:Ci,setStep:Oi,setPointersOverlap:Ms,setPointersMinDistance:Us,setPointersMaxDistance:Fs,setDisabled:Is,setType:Ws,setRightToLeft:Ns,setBottomToTop:Hs,setRound:Bs,setKeyboardDisabled:eo,setMousewheelDisabled:to,setRangeDragging:Ai,setData:js},{getPercents:Xn,getValues:Gn,getPointerElements:Zn,getMin:Qn,getMax:Kn,getStep:_s,getData:ks,getType:$s,getRound:Ps,getTextMin:ki,getTextMax:$i,isRightToLeft:Os,isBottomToTop:As,isDisabled:Es,isKeyboardDisabled:Ds,isMousewheelDisabled:Ls,isPointersOverlap:Rs,isRangeDraggingEnabled:Ts,getPointersMinDistance:Cs,getPointersMaxDistance:Ss}),T.init()})(),{get pointers(){return g},get styles(){return ee},get pluginsManager(){return T},get min(){return ki()},get max(){return $i()},get step(){return _s()},get pointersOverlap(){return Rs()},set pointersOverlap(h){Ms(h)},get pointersMinDistance(){return Cs()},set pointersMinDistance(h){Us(h)},get pointersMaxDistance(){return Ss()},set pointersMaxDistance(h){Fs(h)},get disabled(){return Es()},set disabled(h){Is(h)},get data(){return ks()},get type(){return $s()},set type(h){Ws(h)},get rightToLeft(){return Os()},set rightToLeft(h){Ns(h)},get bottomToTop(){return As()},set bottomToTop(h){Hs(h)},get round(){return Ps()},set round(h){Bs(h)},get animateOnClick(){return zt},set animateOnClick(h){ro(h)},get keyboardDisabled(){return Ds()},set keyboardDisabled(h){eo(h)},get mousewheelDisabled(){return Ls()},set mousewheelDisabled(h){to(h)},get rangeDragging(){return Ts()},set rangeDragging(h){Ai(h)},setMin:Pi,setMax:Ci,setValue:Si,setStep:Oi,setData:js,getTextValue:mr,setAriaLabel:io,getAriaLabel:cl,addPointer:fl,removePointer:ml,destroy:()=>{d.removeEventListener("mousedown",Hn),d.removeEventListener("mouseup",wi),d.removeEventListener("touchmove",Jt),d.removeEventListener("touchstart",Jt),document.removeEventListener("wheel",xi);for(let h of g)h.destroy();T==null||T.destroy()}}},Ja=(a,d,v)=>{let g=ke.find(([T,M,se,ce])=>M.replace("#","")===d.replace(/\d+/g,""));if(g&&a.styles){let[T,M,se,ce]=g,H=d.replace(/\D/g,"").trim(),Pe=H===""||H==="0"||H==="1"?0:Ue(H,0)-1;a.styles.setStyle(T,v,Pe);return}switch(a&&a.pluginsManager&&a.pluginsManager.onAttrChange(d,v),d){case f:{a.setMin(v);break}case y:{a.setMax(v);break}case _:{a.setStep(v);break}case o:{a.pointersOverlap=ze(v);break}case l:{a.pointersMinDistance=Ue(v,0);break}case p:{a.rangeDragging=ze(v);break}case u:{a.pointersMaxDistance=Ue(v,1/0);break}case V:{a.disabled=ze(v);break}case de:{a.keyboardDisabled=ze(v);break}case te:{a.mousewheelDisabled=ze(v);break}case m:{a.setData(v);break}case O:{a.type=v;break}case I:{a.rightToLeft=ze(v);break}case W:{a.bottomToTop=ze(v);break}case k:{a.round=Ue(v,fr);break}case C:{a.styles&&(a.styles.theme=v);break}case vi:{a.animateOnClick=v;break}}let L=null;if(/^value([0-9]*)$/.test(d)&&(L="value"),/^pointer([0-9]*)-disabled$/.test(d)&&(L="pointer-disabled"),/^aria-label([0-9]*)$/.test(d)&&(L="aria-label"),/^pointer([0-9]*)-shape$/.test(d)&&(L="pointer-shape"),!L)return;let q=d.replace(/\D/g,"").trim(),ee=q===""||q==="0"||q==="1"?0:Ue(q,0)-1;switch(L){case"value":{a.setValue(v,ee);break}case"pointer-disabled":{let T=a==null?void 0:a.pointers[ee];if(!T)return;T.disabled=ze(v);break}case"aria-label":{a.setAriaLabel(ee,v);break}case"pointer-shape":{a.styles&&a.styles.setPointerShape(ee,v);break}}},el=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(a){this.slider&&this.slider.setStep(a)}get step(){var a;return(a=this.slider)==null?void 0:a.step}set disabled(a){this.slider&&(this.slider.disabled=a)}get disabled(){var a,d;return(d=(a=this.slider)==null?void 0:a.disabled)!=null?d:!1}set data(a){var d;(d=this.slider)==null||d.setData(a)}get data(){var a;return(a=this.slider)==null?void 0:a.data}set min(a){var d;(d=this.slider)==null||d.setMin(a)}get min(){var a;return(a=this.slider)==null?void 0:a.min}set max(a){var d;(d=this.slider)==null||d.setMax(a)}get max(){var a;return(a=this.slider)==null?void 0:a.max}set round(a){!this.slider||(this.slider.round=a)}get round(){var a,d;return(d=(a=this.slider)==null?void 0:a.round)!=null?d:fr}set type(a){!this.slider||(this.slider.type=a??Ht)}get type(){var a;return((a=this.slider)==null?void 0:a.type)||Ht}set pointersOverlap(a){!this.slider||(this.slider.pointersOverlap=a)}get pointersOverlap(){var a,d;return(d=(a=this.slider)==null?void 0:a.pointersOverlap)!=null?d:!1}set pointersMinDistance(a){!this.slider||(this.slider.pointersMinDistance=a)}get pointersMinDistance(){var a,d;return(d=(a=this.slider)==null?void 0:a.pointersMinDistance)!=null?d:0}set pointersMaxDistance(a){!this.slider||(this.slider.pointersMaxDistance=a)}get pointersMaxDistance(){var a,d;return(d=(a=this.slider)==null?void 0:a.pointersMaxDistance)!=null?d:1/0}set theme(a){!this.slider||!this.slider.styles||(this.slider.styles.theme=a)}get theme(){var a,d,v;return(v=(d=(a=this.slider)==null?void 0:a.styles)==null?void 0:d.theme)!=null?v:null}set rtl(a){!this.slider||(this.slider.rightToLeft=a)}get rtl(){var a,d;return(d=(a=this.slider)==null?void 0:a.rightToLeft)!=null?d:!1}set btt(a){!this.slider||(this.slider.bottomToTop=a)}get btt(){var a,d;return(d=(a=this.slider)==null?void 0:a.bottomToTop)!=null?d:!1}set keyboardDisabled(a){!this.slider||(this.slider.keyboardDisabled=a)}get keyboardDisabled(){var a,d;return(d=(a=this.slider)==null?void 0:a.keyboardDisabled)!=null?d:!1}set mousewheelDisabled(a){!this.slider||(this.slider.mousewheelDisabled=a)}get mousewheelDisabled(){var a,d;return(d=(a=this.slider)==null?void 0:a.mousewheelDisabled)!=null?d:!1}set animateOnClick(a){!this.slider||(this.slider.animateOnClick=a)}get animateOnClick(){var a;return(a=this.slider)==null?void 0:a.animateOnClick}get rangeDragging(){var a,d;return(d=(a=this.slider)==null?void 0:a.rangeDragging)!=null?d:!1}set rangeDragging(a){this.slider&&(this.slider.rangeDragging=ze(a))}get externalCSSList(){return this._externalCSSList}addPointer(a){var d,v;if(!this.slider)return;let g=(v=(d=this.slider)==null?void 0:d.addPointer(a))!=null?v:0;In(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var a;!this.slider||(a=this.slider)==null||a.removePointer()}addCSS(a){if(!this.shadowRoot)return;let d=document.createElement("style");d.textContent=a,this.shadowRoot.appendChild(d)}connectedCallback(){var a,d;if(!this.shadowRoot)return;this._externalCSSList=Z(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(a=this.shadowRoot)==null?void 0:a.querySelector(".pointer");if(!v)return;let g=(d=this.shadowRoot)==null?void 0:d.getElementById("range-slider");if(!g)return;let L=Ga(this,v);this.slider=Ka(this,g,L),Za(this,this.slider),this._observer=new MutationObserver(q=>{q.forEach(ee=>{var T;if(!this.slider||ee.type!=="attributes")return;let M=ee.attributeName;!M||Ja(this.slider,M,(T=this.getAttribute(M))!=null?T:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},xs=el;window.tcRangeSlider=xs,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",xs),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends xs{})})();(()=>{var r=(l,u,p,m,f)=>{let y=u-l;return y===0?p:(m-p)*(f-l)/y+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),t=(l,u)=>e(l)?Number(l):u,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,o=()=>{let l=null,u=null,p=null,m=null,f=null,y=!1,_=s,k=n,O=()=>{var N;let ve=(N=l==null?void 0:l.shadowRoot)==null?void 0:N.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),p.append(m),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),ve.append(p)},C=()=>{!u||!p||p.classList.toggle("is-reversed",u.isRightToLeft()||u.isBottomToTop())},I=()=>{var N;if(!p||!u)return;let ve=u.getMin(),oe=u.getMax(),ue=u.getType()==="vertical",ye=u.isRightToLeft()||u.isBottomToTop();for(let be=0;be<_;be++){let ie=document.createElement("div");ie.classList.add("mark",`mark-${be}`);let we=_===0?0:be*100/(_-1);ue?ye?ie.style.top=`${100-we}%`:ie.style.top=`${we}%`:ye?ie.style.left=`${100-we}%`:ie.style.left=`${we}%`,m==null||m.append(ie)}let pe=u.getData();for(let be=0;be<k;be++){let ie=document.createElement("div");ie.classList.add("mark-value",`mark-value-${be}`);let we=k===0?0:be*100/(k-1),Me=r(0,k-1,ve,oe,be);ie.textContent=(pe?(N=pe[Math.round(Me)])!=null?N:"":Me).toString(),ue?ye?ie.style.top=`${100-we}%`:ie.style.top=`${we}%`:ye?ie.style.left=`${100-we}%`:ie.style.left=`${we}%`,f==null||f.append(ie)}},W=(N,ve)=>{Ee(),_=N,k=ve,_<=0&&(_=s),k<=0&&(k=n),O(),I(),C()},V=N=>{y=N,y?(O(),I(),C()):Ee()},de=N=>{!p||p.style.setProperty("--marks-color",N)},te=N=>{!p||p.style.setProperty("--values-color",N)},Ee=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(N,ve,oe,ue)=>{var ye,pe;u=ue,l=N,y=i(l.getAttribute("marks")),y&&(W(t(l.getAttribute("marks-count"),s),t(l.getAttribute("marks-values-count"),n)),de((ye=l.getAttribute("marks-color"))!=null?ye:"#cbd5e1"),te((pe=l.getAttribute("marks-values-color"))!=null?pe:"#475569"))},onAttrChange:(N,ve)=>{N==="marks"&&V(i(ve)),N==="marks-count"&&W(t(ve,s),k),N==="marks-values-count"&&W(_,t(ve,n)),N==="marks-color"&&de(ve),N==="marks-values-color"&&te(ve)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return y??!1},set:N=>{V(i(N))}}},{name:"marksCount",attributes:{get(){return _??s},set:N=>{W(t(N,s),k)}}},{name:"marksValuesCount",attributes:{get(){return _??s},set:N=>{W(_,t(N,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:N=>{de(N)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:N=>{te(N)}}}],destroy:Ee,css:`
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
    `}};window.tcRangeSliderPlugins.push(o)})();var Yu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Dt=(r,e,t,i)=>{for(var s=i>1?void 0:i?qu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Yu(e,t,s),s};let gt=class extends ut{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Te(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)})}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.setFixedRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?D`
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

        `}};gt.styles=Oe`

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
    
    `;Dt([ge({context:Ra,subscribe:!0}),R()],gt.prototype,"min",2);Dt([ge({context:Ta,subscribe:!0}),R()],gt.prototype,"max",2);Dt([ge({context:$n,subscribe:!0}),R()],gt.prototype,"from",2);Dt([ge({context:Pn,subscribe:!0}),R()],gt.prototype,"to",2);Dt([R()],gt.prototype,"hasFixedFrom",2);Dt([R()],gt.prototype,"hasFixedTo",2);Dt([ge({context:ns,subscribe:!0}),R()],gt.prototype,"palette",2);Dt([R()],gt.prototype,"sliderRef",2);Dt([R()],gt.prototype,"initialised",2);gt=Dt([re("registry-range-slider")],gt);var Xu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,pi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Xu(e,t,s),s};let Ar=class extends ut{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var r,e;return this.from===void 0||this.to===void 0?B:D`
            <div>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};pi([ge({context:$n,subscribe:!0})],Ar.prototype,"from",2);pi([ge({context:Pn,subscribe:!0})],Ar.prototype,"to",2);pi([j({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],Ar.prototype,"fixed",2);pi([j({type:String,reflect:!0,attribute:!0})],Ar.prototype,"separator",2);Ar=pi([re("registry-range-display")],Ar);var Zu=Object.defineProperty,Qu=Object.getOwnPropertyDescriptor,hs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Zu(e,t,s),s};let Er=class extends ut{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return D`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":B}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(r=>D`
                            <div class="histogram-bar">
                                <div style="height: ${r.height}%" class="histogram-bar-inner"></div>
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
        `}};Er.styles=Oe`

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


    `;hs([R()],Er.prototype,"histogram",2);hs([j({type:Boolean,reflect:!0})],Er.prototype,"interactive",2);hs([j({type:String,reflect:!0})],Er.prototype,"height",2);Er=hs([re("registry-histogram")],Er);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vi extends vn{constructor(e){if(super(e),this.it=B,e.type!==gn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===B||e==null)return this._t=void 0,this.it=e;if(e===Xt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Vi.directiveName="unsafeHTML",Vi.resultType=1;const mt=Xi(Vi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class an extends Vi{}an.directiveName="unsafeSVG",an.resultType=2;const Ku=Xi(an);var Ju=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,ds=(r,e,t,i)=>{for(var s=i>1?void 0:i?ep(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ju(e,t,s),s};let Dr=class extends di{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",r=>{this.hint=r.description})}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?B:D`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return D`
                        
                        <button 
                            class=${Tt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Ku(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Dr.styles=Oe`

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

    `;ds([ge({context:Ua,subscribe:!0}),R()],Dr.prototype,"value",2);ds([ge({context:Fa,subscribe:!0}),R()],Dr.prototype,"tools",2);ds([R()],Dr.prototype,"hint",2);Dr=ds([re("group-tool-buttons")],Dr);var tp=Object.defineProperty,fi=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&tp(e,t,s),s};class qe extends di{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}fi([ge({context:Cn,subscribe:!0}),R()],qe.prototype,"parentFileProviderElement");fi([ge({context:Wa,subscribe:!0}),R()],qe.prototype,"loading");fi([ge({context:Ia,subscribe:!0}),R()],qe.prototype,"file");fi([ge({context:ja,subscribe:!0}),R()],qe.prototype,"failure");fi([ge({context:Ha,subscribe:!0}),R()],qe.prototype,"recording");var rp=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,sp=(r,e,t,i)=>{for(var s=i>1?void 0:i?ip(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&rp(e,t,s),s};let ln=class extends qe{constructor(){super(...arguments),this.container=Te()}onInstanceCreated(r){if(this.container.value!==void 0)r.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return D`
            <div ${Ne(this.container)} class=${Tt(t)} part="file-canvas-container">
            
                ${this.loading===!0?D`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:r===!0?D`<div class="error-wrapper">
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
        
        `}};ln.styles=Oe`
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
    `;ln=sp([re("file-canvas")],ln);var np=Object.defineProperty,op=Object.getOwnPropertyDescriptor,ap=(r,e,t,i)=>{for(var s=i>1?void 0:i?op(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&np(e,t,s),s};let cn=class extends qe{onInstanceCreated(r){}onFailure(r){}render(){return this.file?D`
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
        `:B}};cn.styles=Oe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;cn=ap([re("file-share-button")],cn);var lp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,hp=(r,e,t,i)=>{for(var s=i>1?void 0:i?cp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&lp(e,t,s),s};let hn=class extends qe{onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
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

                        ${mt(this.renderRow("Time",sd.human(this.file.timestamp)))}

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
                        <td><ul>${this.file.service.parser.devices.map(r=>D`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:B}};hn.styles=Oe`

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
    
    `;hn=hp([re("file-info-button")],hn);var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,pp=(r,e,t,i)=>{for(var s=i>1?void 0:i?up(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&dp(e,t,s),s};let dn=class extends qe{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?B:D`

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
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:B}
            
            </thermal-dropdown>

        
        `}};dn.styles=Oe`

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
    
    `;dn=pp([re("file-download-dropdown")],dn);var fp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,hr=(r,e,t,i)=>{for(var s=i>1?void 0:i?mp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&fp(e,t,s),s};let xt=class extends qe{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Te(),this.barRef=Te(),this.containerRef=Te(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<xt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}render(){var n,o,l;const r=this.file;if(r===void 0)return B;if(r.duration===0)return B;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return D`
            <div class="${Tt(e)}" ${Ne(this.containerRef)}>


                ${r!==void 0?D`
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
                            <span class="inline">${Pr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${Pr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:B}

          `}};xt.collapseWidth=500;xt.styles=Oe`
    
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
    
    `;hr([ge({context:An,subscribe:!0}),R()],xt.prototype,"playing",2);hr([ge({context:as,subscribe:!0}),R()],xt.prototype,"currentFrame",2);hr([ge({context:On,subscribe:!0}),R()],xt.prototype,"duration",2);hr([ge({context:Ba,subscribe:!0}),R()],xt.prototype,"mayStop",2);hr([ge({context:En,subscribe:!0})],xt.prototype,"markers",2);hr([R()],xt.prototype,"collapsed",2);xt=hr([re("file-timeline")],xt);var gp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,Ln=(r,e,t,i)=>{for(var s=i>1?void 0:i?vp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&gp(e,t,s),s};let ei=class extends qe{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?B:D`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(wn).map(([r])=>D`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&(console.log(t.parentElement),t.parentElement instanceof Ft&&t.parentElement.setClose())}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};ei.styles=Oe`

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
    
    `;Ln([j({type:String,reflect:!0})],ei.prototype,"enabled",2);Ln([ge({context:Na,subscribe:!0}),R()],ei.prototype,"playbackSpeed",2);ei=Ln([re("file-playback-speed-dropdown")],ei);var bp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,Rn=(r,e,t,i)=>{for(var s=i>1?void 0:i?yp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&bp(e,t,s),s};let ti=class extends qe{constructor(){super(...arguments),this.container=Te()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return D`
            <div class="container">
            
                <video ${Ne(this.container)} preload="metadata">

                    ${this.url===void 0?B:D`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};ti.styles=Oe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Rn([ge({context:as,subscribe:!0}),R()],ti.prototype,"currentFrame",2);Rn([j({type:String,reflect:!0,attribute:!0})],ti.prototype,"url",2);ti=Rn([re("file-video")],ti);const wp=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),Pr(t,"mm:ss:SSS")},xp=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var _p=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,Lt=(r,e,t,i)=>{for(var s=i>1?void 0:i?kp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&_p(e,t,s),s};const Tn={fromAttribute:r=>r===null?null:xp(r),toAttribute:r=>r===null?null:wp(r)};let _t=class extends qe{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),this.log(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return B}};Lt([ge({context:An,subscribe:!0}),R()],_t.prototype,"playing",2);Lt([ge({context:Sn,subscribe:!0}),R()],_t.prototype,"ms",2);Lt([j({type:String,reflect:!0,attribute:!0})],_t.prototype,"label",2);Lt([j({type:String,reflect:!0,attribute:!0,converter:Tn})],_t.prototype,"start",2);Lt([j({type:String,reflect:!0,attribute:!0,converter:Tn})],_t.prototype,"end",2);Lt([j({type:String,reflect:!0,attribute:!0,converter:Tn})],_t.prototype,"dur",2);Lt([j({type:String,reflect:!0,attribute:!0})],_t.prototype,"active",2);Lt([j({type:String,reflect:!0,attribute:!0})],_t.prototype,"pauseOnActivate",2);Lt([j({type:String,reflect:!0,attribute:!0})],_t.prototype,"say",2);_t=Lt([re("file-marker")],_t);var $p=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&$p(e,t,s),s};let jt=class extends qe{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return D`

            <div class="${Tt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};jt.styles=Oe`
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


    `;dr([ge({context:On,subscribe:!0}),R()],jt.prototype,"duration",2);dr([ge({context:as,subscribe:!0}),R()],jt.prototype,"currentFrame",2);dr([ge({context:Sn,subscribe:!0}),R()],jt.prototype,"ms",2);dr([j({type:Number,reflect:!0,attribute:!0})],jt.prototype,"start",2);dr([j({type:Number,reflect:!0,attribute:!0})],jt.prototype,"end",2);dr([R()],jt.prototype,"active",2);jt=dr([re("file-marker-timeline")],jt);var Cp=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,Xa=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Cp(e,t,s),s};let Yi=class extends qe{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return D`
            <div>


            ${this.markers.map(r=>r.active?D`<div class="item">
                    <h2>${r.label}</h2>
                    ${mt(r.innerHTML)}
                    </div>`:B)}

            
            
            </div>

          `}};Yi.styles=Oe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Xa([ge({context:En,subscribe:!0})],Yi.prototype,"markers",2);Yi=Xa([re("file-marks-content")],Yi);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Op(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Ap=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,Mn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ep(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ap(e,t,s),s};let ri=class extends qe{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1}onInstanceCreated(){this.file!==void 0&&this.file.analysis.layers.onSelectionChange.add(this.UUID,e=>{this.file&&(this.allSelected=this.file.analysis.value.length===e.length)})}onFailure(){}render(){var e;return this.analysis.length===0?B:D`
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

                    ${Op(this.analysis,t=>D`
                        <file-analysis-row .analysis=${t}></file-analysis-row>
                    `)}

                </tbody>

            </table>
            
            </div>
        
        `}};ri.styles=Oe`
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
    `;Mn([ge({context:za,subscribe:!0})],ri.prototype,"analysis",2);Mn([R()],ri.prototype,"allSelected",2);ri=Mn([re("file-analysis-list")],ri);var Dp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,kt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Lp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Dp(e,t,s),s};let dt=class extends qe{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.values={min:void 0,max:void 0,avg:void 0},this.selectedRef=Te(),this.activeRef=Te()}onInstanceCreated(){}onFailure(){}uuid(r){return`${this.UUID}__${r}`}connectedCallback(){super.connectedCallback(),this.hydrate(this.analysis)}hydrate(r){this.log("HYDRATUJI",r.key),this.selected=r.selected,this.color=r.initialColor,this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height,r.onSelected.add("__onSelected",e=>{console.log(this.analysis.key,"selected",e.selected,this.selected),this.selected=!0}),r.onDeselected.add("__onDeselected",e=>{console.log(this.analysis.key,"deselected",e.selected,this.selected),this.selected=!1}),r.onValues.add("__onValues",(e,t,i)=>{this.values={min:e,max:t,avg:i}}),r.onResize.add("__onResize",()=>{this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height})}dehydrate(r){this.log("DEHYDRATUJI",r.key),r.onSelected.remove("__onSelected"),r.onDeselected.remove("__onDeselected"),r.onValues.remove("__onValues"),r.onResize.remove("__onResize")}willUpdate(r){if(super.willUpdate(r),r.has("analysis")){const e=r.get("analysis");e&&this.dehydrate(e),this.hydrate(this.analysis)}}temperatureOrNothing(r){return r===void 0?"-":r.toFixed(1)+" °C"}render(){return this.analysis===void 0?B:D`
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
        `}};dt.styles=Oe`

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



    `;kt([j({type:Object,attribute:!0})],dt.prototype,"analysis",2);kt([j({type:String,reflect:!0,attribute:!0})],dt.prototype,"selected",2);kt([j({type:String,reflect:!0,attribute:!0})],dt.prototype,"active",2);kt([R()],dt.prototype,"color",2);kt([R()],dt.prototype,"values",2);kt([R()],dt.prototype,"top",2);kt([R()],dt.prototype,"left",2);kt([R()],dt.prototype,"width",2);kt([R()],dt.prototype,"height",2);kt([R()],dt.prototype,"selectedRef",2);dt=kt([re("file-analysis-row")],dt);var Rp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Rp(e,t,s),s};let Wt=class extends qe{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return D`
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
    `}};Wt.styles=Oe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;ur([j({type:Number})],Wt.prototype,"from",2);ur([j({type:Number})],Wt.prototype,"to",2);ur([j({type:Number})],Wt.prototype,"speed",2);ur([j({type:String,reflect:!0,attribute:!0})],Wt.prototype,"showembed",2);ur([j({type:String,reflect:!0,attribute:!0})],Wt.prototype,"showabout",2);ur([j({type:String,reflect:!0,attribute:!0})],Wt.prototype,"showfullscreen",2);Wt=ur([re("file-app")],Wt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks=r=>r??B;var Mp=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,Tr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Up(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Mp(e,t,s),s};let lr=class extends ss{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?B:D`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${Ks(this.from)} to=${Ks(this.to)} speed=${Ks(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Tr([j({type:String,reflect:!0})],lr.prototype,"palette",2);Tr([j({type:Number})],lr.prototype,"from",2);Tr([j({type:Number})],lr.prototype,"to",2);Tr([j({type:Number,reflect:!0})],lr.prototype,"speed",2);Tr([j({type:String,reflect:!0})],lr.prototype,"url",2);lr=Tr([re("thermal-file-app")],lr);var Fp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Un=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ip(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Fp(e,t,s),s};let ii=class extends ss{constructor(){super(...arguments),this.dropinRef=Te(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return D`

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

        `}};ii.styles=Oe`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Un([R()],ii.prototype,"dropinRef",2);Un([R()],ii.prototype,"loaded",2);ii=Un([re("thermal-dropin-app")],ii);const Js=window.matchMedia("(prefers-color-scheme: dark)"),Fn="thermal-dark-mode",Mo=()=>{document.body.classList.add(Fn)},jp=()=>{document.body.classList.remove(Fn)},Wp=()=>{Js.matches&&Mo();const r=e=>{e.matches?Mo():jp()};Js.addEventListener("change",r),Js.addListener(r)},Np=un.toString().replaceAll(".","-"),Hp=r=>`thermal__${r}__${Np}`,Uo=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",Hp(r)),t.innerHTML=e,document.head.appendChild(t)},Bp=()=>{Uo("rootVariables",`

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


            
        
        `),Uo("darkModeOverrides",`
        
            body.${Fn} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${un}
    Author: ${bl}
    `);Wp();Bp();document.addEventListener("DOMContentLoaded",()=>{});
