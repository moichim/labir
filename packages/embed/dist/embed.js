var Wa=Object.defineProperty;var Ia=(t,e,r)=>e in t?Wa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var g=(t,e,r)=>(Ia(t,typeof e!="symbol"?e+"":e,r),r);const Na="@labir/embed",so="1.2.28",Ha="Embedded display of thermograms",Ba="dist/embed.js",Va="module",no={type:"git",url:"https://github.com/moichim/labir"},za={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},oo="Jan Jáchim <jachim5@gmail.com>",qa="ISC",Ya={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@types/uuid":"^9.0.8","date-fns":"^3.6.0",lit:"^3.1.4","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11",workerpool:"^9.1.3"},Ga={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},ao={name:Na,version:so,description:Ha,main:Ba,type:Va,repository:no,scripts:za,author:oo,license:qa,dependencies:Ya,devDependencies:Ga};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=globalThis,Hs=ui.ShadowRoot&&(ui.ShadyCSS===void 0||ui.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bs=Symbol(),Pn=new WeakMap;let lo=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Bs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Hs&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Pn.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Pn.set(r,e))}return e}toString(){return this.cssText}};const Xa=t=>new lo(typeof t=="string"?t:t+"",void 0,Bs),Ne=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new lo(r,t,Bs)},Qa=(t,e)=>{if(Hs)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=ui.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Cn=Hs?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Xa(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ka,defineProperty:Za,getOwnPropertyDescriptor:Ja,getOwnPropertyNames:el,getOwnPropertySymbols:tl,getPrototypeOf:rl}=Object,jt=globalThis,On=jt.trustedTypes,il=On?On.emptyScript:"",ys=jt.reactiveElementPolyfillSupport,Er=(t,e)=>t,hi={toAttribute(t,e){switch(e){case Boolean:t=t?il:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Vs=(t,e)=>!Ka(t,e),En={attribute:!0,type:String,converter:hi,reflect:!1,hasChanged:Vs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),jt.litPropertyMetadata??(jt.litPropertyMetadata=new WeakMap);let ar=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=En){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&Za(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=Ja(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const u=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??En}static _$Ei(){if(this.hasOwnProperty(Er("elementProperties")))return;const e=rl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Er("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Er("properties"))){const r=this.properties,i=[...el(r),...tl(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(Cn(s))}else e!==void 0&&r.push(Cn(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qa(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:hi).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),u=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:hi;this._$Em=s,this[s]=u.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Vs)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};ar.elementStyles=[],ar.shadowRootOptions={mode:"open"},ar[Er("elementProperties")]=new Map,ar[Er("finalized")]=new Map,ys==null||ys({ReactiveElement:ar}),(jt.reactiveElementVersions??(jt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=globalThis,pi=Ar.trustedTypes,An=pi?pi.createPolicy("lit-html",{createHTML:t=>t}):void 0,co="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,uo="?"+Ft,sl=`<${uo}>`,Qt=document,Mr=()=>Qt.createComment(""),Lr=t=>t===null||typeof t!="object"&&typeof t!="function",ho=Array.isArray,nl=t=>ho(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ws=`[ 	
\f\r]`,Pr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tn=/-->/g,Rn=/>/g,zt=RegExp(`>|${ws}(?:([^\\s"'>=/]+)(${ws}*=${ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dn=/'/g,Mn=/"/g,po=/^(?:script|style|textarea|title)$/i,ol=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),U=ol(1),Wt=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Ln=new WeakMap,Gt=Qt.createTreeWalker(Qt,129);function fo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return An!==void 0?An.createHTML(e):e}const al=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",o=Pr;for(let u=0;u<r;u++){const d=t[u];let h,m,f=-1,$=0;for(;$<d.length&&(o.lastIndex=$,m=o.exec(d),m!==null);)$=o.lastIndex,o===Pr?m[1]==="!--"?o=Tn:m[1]!==void 0?o=Rn:m[2]!==void 0?(po.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=zt):m[3]!==void 0&&(o=zt):o===zt?m[0]===">"?(o=s??Pr,f=-1):m[1]===void 0?f=-2:(f=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?zt:m[3]==='"'?Mn:Dn):o===Mn||o===Dn?o=zt:o===Tn||o===Rn?o=Pr:(o=zt,s=void 0);const x=o===zt&&t[u+1].startsWith("/>")?" ":"";n+=o===Pr?d+sl:f>=0?(i.push(h),d.slice(0,f)+co+d.slice(f)+Ft+x):d+Ft+(f===-2?u:x)}return[fo(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let As=class mo{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0;const u=e.length-1,d=this.parts,[h,m]=al(e,r);if(this.el=mo.createElement(h,i),Gt.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Gt.nextNode())!==null&&d.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(co)){const $=m[o++],x=s.getAttribute(f).split(Ft),k=/([.?@])?(.*)/.exec($);d.push({type:1,index:n,name:k[2],strings:x,ctor:k[1]==="."?cl:k[1]==="?"?ul:k[1]==="@"?dl:$i}),s.removeAttribute(f)}else f.startsWith(Ft)&&(d.push({type:6,index:n}),s.removeAttribute(f));if(po.test(s.tagName)){const f=s.textContent.split(Ft),$=f.length-1;if($>0){s.textContent=pi?pi.emptyScript:"";for(let x=0;x<$;x++)s.append(f[x],Mr()),Gt.nextNode(),d.push({type:2,index:++n});s.append(f[$],Mr())}}}else if(s.nodeType===8)if(s.data===uo)d.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(Ft,f+1))!==-1;)d.push({type:7,index:n}),f+=Ft.length-1}n++}}static createElement(e,r){const i=Qt.createElement("template");return i.innerHTML=e,i}};function cr(t,e,r=t,i){var o,u;if(e===Wt)return e;let s=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const n=Lr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((u=s==null?void 0:s._$AO)==null||u.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=cr(t,s._$AS(t,e.values),s,i)),e}let ll=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Qt).importNode(r,!0);Gt.currentNode=s;let n=Gt.nextNode(),o=0,u=0,d=i[0];for(;d!==void 0;){if(o===d.index){let h;d.type===2?h=new Ir(n,n.nextSibling,this,e):d.type===1?h=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(h=new hl(n,this,e)),this._$AV.push(h),d=i[++u]}o!==(d==null?void 0:d.index)&&(n=Gt.nextNode(),o++)}return Gt.currentNode=Qt,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class Ir{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=cr(this,e,r),Lr(e)?e===J||e==null||e===""?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==Wt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):nl(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==J&&Lr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Qt.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=As.createElement(fo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const o=new ll(s,this),u=o.u(this.options);o.p(r),this.T(u),this._$AH=o}}_$AC(e){let r=Ln.get(e.strings);return r===void 0&&Ln.set(e.strings,r=new As(e)),r}k(e){ho(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new Ir(this.S(Mr()),this.S(Mr()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let $i=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(e,r=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=cr(this,e,r,0),o=!Lr(e)||e!==this._$AH&&e!==Wt,o&&(this._$AH=e);else{const u=e;let d,h;for(e=n[0],d=0;d<n.length-1;d++)h=cr(this,u[i+d],r,d),h===Wt&&(h=this._$AH[d]),o||(o=!Lr(h)||h!==this._$AH[d]),h===J?e=J:e!==J&&(e+=(h??"")+n[d+1]),this._$AH[d]=h}o&&!s&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},cl=class extends $i{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}};class ul extends $i{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}}class dl extends $i{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=cr(this,e,r,0)??J)===Wt)return;const i=this._$AH,s=e===J&&i!==J||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==J&&(i===J||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let hl=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){cr(this,e)}};const xs=Ar.litHtmlPolyfillSupport;xs==null||xs(As,Ir),(Ar.litHtmlVersions??(Ar.litHtmlVersions=[])).push("3.1.4");const pl=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Ir(e.insertBefore(Mr(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends ar{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Wt}};var io;st._$litElement$=!0,st.finalized=!0,(io=globalThis.litElementHydrateSupport)==null||io.call(globalThis,{LitElement:st});const ks=globalThis.litElementPolyfillSupport;ks==null||ks({LitElement:st});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fl={attribute:!0,type:String,converter:hi,reflect:!1,hasChanged:Vs},ml=(t=fl,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(u){const d=e.get.call(this);e.set.call(this,u),this.requestUpdate(o,d,t)},init(u){return u!==void 0&&this.P(o,void 0,t),u}}}if(i==="setter"){const{name:o}=r;return function(u){const d=this[o];e.call(this,u),this.requestUpdate(o,d,t)}}throw Error("Unsupported decorator location: "+i)};function se(t){return(e,r)=>typeof r=="object"?ml(t,e,r):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(t){return se({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Si(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return gl(e,r,{get(){var d;const o=(d=this.renderRoot)==null?void 0:d.querySelector(n),u=(o==null?void 0:o.assignedElements(t))??[];return s===void 0?u:u.filter(h=>h.matches(s))}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vl=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qs=t=>(...e)=>({_$litDirective$:t,values:e});let Ys=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),Tr(s,e);return!0},fi=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},go=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),wl(e)}};function bl(t){this._$AN!==void 0?(fi(this),this._$AM=t,go(this)):this._$AM=t}function yl(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)Tr(i[n],!1),fi(i[n]);else i!=null&&(Tr(i,!1),fi(i));else Tr(this,t)}const wl=t=>{t.type==zs.CHILD&&(t._$AP??(t._$AP=yl),t._$AQ??(t._$AQ=bl))};class xl extends Ys{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),go(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(Tr(this,e),fi(this))}setValue(e){if(vl(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=()=>new kl;let kl=class{};const _s=new WeakMap,Xe=qs(class extends xl{render(t){return J}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),J}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=_s.get(e);r===void 0&&(r=new WeakMap,_s.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=_s.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var _l=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,vo=(t,e,r,i)=>{for(var s=i>1?void 0:i?$l(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&_l(e,r,s),s};let Ur=class extends st{constructor(){super(),this.dialogRef=Ge(),this.closeButtonRef=Ge(),this.invokerRef=Ge()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return U`
            <slot name="invoker" ${Xe(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Xe(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Xe(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Ur.shadowRootOptions={...st.shadowRootOptions,mode:"open"};Ur.styles=Ne`

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

        
    
    `;vo([se({type:String,reflect:!0})],Ur.prototype,"label",2);Ur=vo([Se("thermal-dialog")],Ur);var Sl=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,Pi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pl(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Sl(e,r,s),s};let Et=class extends st{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return U`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Et.VARIANTS=["slate","primary","foreground","background"];Et.shadowRootOptions={...st.shadowRootOptions,mode:"open"};Et.styles=Ne`

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
    
    `;Pi([se({type:String,converter:{fromAttribute:t=>Et.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Et.prototype,"variant",2);Pi([se({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],Et.prototype,"interactive",2);Pi([se({type:String})],Et.prototype,"size",2);Et=Pi([Se("thermal-button")],Et);const ur=Math.min,Ot=Math.max,mi=Math.round,It=t=>({x:t,y:t}),Cl={left:"right",right:"left",bottom:"top",top:"bottom"},Ol={start:"end",end:"start"};function Un(t,e,r){return Ot(t,ur(e,r))}function Nr(t,e){return typeof t=="function"?t(e):t}function At(t){return t.split("-")[0]}function Ci(t){return t.split("-")[1]}function bo(t){return t==="x"?"y":"x"}function yo(t){return t==="y"?"height":"width"}function Hr(t){return["top","bottom"].includes(At(t))?"y":"x"}function wo(t){return bo(Hr(t))}function El(t,e,r){r===void 0&&(r=!1);const i=Ci(t),s=wo(t),n=yo(s);let o=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=gi(o)),[o,gi(o)]}function Al(t){const e=gi(t);return[Ts(t),e,Ts(e)]}function Ts(t){return t.replace(/start|end/g,e=>Ol[e])}function Tl(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function Rl(t,e,r,i){const s=Ci(t);let n=Tl(At(t),r==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(Ts)))),n}function gi(t){return t.replace(/left|right|bottom|top/g,e=>Cl[e])}function Dl(t){return{top:0,right:0,bottom:0,left:0,...t}}function xo(t){return typeof t!="number"?Dl(t):{top:t,right:t,bottom:t,left:t}}function dr(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Fn(t,e,r){let{reference:i,floating:s}=t;const n=Hr(e),o=wo(e),u=yo(o),d=At(e),h=n==="y",m=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,$=i[u]/2-s[u]/2;let x;switch(d){case"top":x={x:m,y:i.y-s.height};break;case"bottom":x={x:m,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:f};break;case"left":x={x:i.x-s.width,y:f};break;default:x={x:i.x,y:i.y}}switch(Ci(e)){case"start":x[o]-=$*(r&&h?-1:1);break;case"end":x[o]+=$*(r&&h?-1:1);break}return x}const Ml=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,u=n.filter(Boolean),d=await(o.isRTL==null?void 0:o.isRTL(e));let h=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:m,y:f}=Fn(h,i,d),$=i,x={},k=0;for(let O=0;O<u.length;O++){const{name:P,fn:F}=u[O],{x:j,y:H,data:ue,reset:ee}=await F({x:m,y:f,initialPlacement:i,placement:$,strategy:s,middlewareData:x,rects:h,platform:o,elements:{reference:t,floating:e}});m=j??m,f=H??f,x={...x,[P]:{...x[P],...ue}},ee&&k<=50&&(k++,typeof ee=="object"&&(ee.placement&&($=ee.placement),ee.rects&&(h=ee.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):ee.rects),{x:m,y:f}=Fn(h,$,d)),O=-1)}return{x:m,y:f,placement:$,strategy:s,middlewareData:x}};async function ko(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:o,elements:u,strategy:d}=t,{boundary:h="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:$=!1,padding:x=0}=Nr(e,t),k=xo(x),P=u[$?f==="floating"?"reference":"floating":f],F=dr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(P)))==null||r?P:P.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(u.floating)),boundary:h,rootBoundary:m,strategy:d})),j=f==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,H=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u.floating)),ue=await(n.isElement==null?void 0:n.isElement(H))?await(n.getScale==null?void 0:n.getScale(H))||{x:1,y:1}:{x:1,y:1},ee=dr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:j,offsetParent:H,strategy:d}):j);return{top:(F.top-ee.top+k.top)/ue.y,bottom:(ee.bottom-F.bottom+k.bottom)/ue.y,left:(F.left-ee.left+k.left)/ue.x,right:(ee.right-F.right+k.right)/ue.x}}const Ll=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:o,initialPlacement:u,platform:d,elements:h}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:$,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:O=!0,...P}=Nr(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const F=At(s),j=At(u)===u,H=await(d.isRTL==null?void 0:d.isRTL(h.floating)),ue=$||(j||!O?[gi(u)]:Al(u));!$&&k!=="none"&&ue.push(...Rl(u,O,k,H));const ee=[u,...ue],Pe=await ko(e,P),W=[];let me=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&W.push(Pe[F]),f){const he=El(s,o,H);W.push(Pe[he[0]],Pe[he[1]])}if(me=[...me,{placement:s,overflows:W}],!W.every(he=>he<=0)){var ne,de;const he=(((ne=n.flip)==null?void 0:ne.index)||0)+1,ge=ee[he];if(ge)return{data:{index:he,overflows:me},reset:{placement:ge}};let te=(de=me.filter(be=>be.overflows[0]<=0).sort((be,Ae)=>be.overflows[1]-Ae.overflows[1])[0])==null?void 0:de.placement;if(!te)switch(x){case"bestFit":{var ve;const be=(ve=me.map(Ae=>[Ae.placement,Ae.overflows.filter(Ke=>Ke>0).reduce((Ke,ze)=>Ke+ze,0)]).sort((Ae,Ke)=>Ae[1]-Ke[1])[0])==null?void 0:ve[0];be&&(te=be);break}case"initialPlacement":te=u;break}if(s!==te)return{reset:{placement:te}}}return{}}}};function _o(t){const e=ur(...t.map(n=>n.left)),r=ur(...t.map(n=>n.top)),i=Ot(...t.map(n=>n.right)),s=Ot(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function Ul(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>dr(_o(s)))}const Fl=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:o}=e,{padding:u=2,x:d,y:h}=Nr(t,e),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=Ul(m),$=dr(_o(m)),x=xo(u);function k(){if(f.length===2&&f[0].left>f[1].right&&d!=null&&h!=null)return f.find(P=>d>P.left-x.left&&d<P.right+x.right&&h>P.top-x.top&&h<P.bottom+x.bottom)||$;if(f.length>=2){if(Hr(r)==="y"){const de=f[0],ve=f[f.length-1],he=At(r)==="top",ge=de.top,te=ve.bottom,be=he?de.left:ve.left,Ae=he?de.right:ve.right,Ke=Ae-be,ze=te-ge;return{top:ge,bottom:te,left:be,right:Ae,width:Ke,height:ze,x:be,y:ge}}const P=At(r)==="left",F=Ot(...f.map(de=>de.right)),j=ur(...f.map(de=>de.left)),H=f.filter(de=>P?de.left===j:de.right===F),ue=H[0].top,ee=H[H.length-1].bottom,Pe=j,W=F,me=W-Pe,ne=ee-ue;return{top:ue,bottom:ee,left:Pe,right:W,width:me,height:ne,x:Pe,y:ue}}return $}const O=await n.getElementRects({reference:{getBoundingClientRect:k},floating:i.floating,strategy:o});return s.reference.x!==O.reference.x||s.reference.y!==O.reference.y||s.reference.width!==O.reference.width||s.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function jl(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=At(r),u=Ci(r),d=Hr(r)==="y",h=["left","top"].includes(o)?-1:1,m=n&&d?-1:1,f=Nr(e,t);let{mainAxis:$,crossAxis:x,alignmentAxis:k}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return u&&typeof k=="number"&&(x=u==="end"?k*-1:k),d?{x:x*m,y:$*h}:{x:$*h,y:x*m}}const Wl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:o,middlewareData:u}=e,d=await jl(e,t);return o===((r=u.offset)==null?void 0:r.placement)&&(i=u.arrow)!=null&&i.alignmentOffset?{}:{x:s+d.x,y:n+d.y,data:{...d,placement:o}}}}},Il=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:u={fn:P=>{let{x:F,y:j}=P;return{x:F,y:j}}},...d}=Nr(t,e),h={x:r,y:i},m=await ko(e,d),f=Hr(At(s)),$=bo(f);let x=h[$],k=h[f];if(n){const P=$==="y"?"top":"left",F=$==="y"?"bottom":"right",j=x+m[P],H=x-m[F];x=Un(j,x,H)}if(o){const P=f==="y"?"top":"left",F=f==="y"?"bottom":"right",j=k+m[P],H=k-m[F];k=Un(j,k,H)}const O=u.fn({...e,[$]:x,[f]:k});return{...O,data:{x:O.x-r,y:O.y-i}}}}};function br(t){return $o(t)?(t.nodeName||"").toLowerCase():"#document"}function at(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ht(t){var e;return(e=($o(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $o(t){return t instanceof Node||t instanceof at(t).Node}function kt(t){return t instanceof Element||t instanceof at(t).Element}function _t(t){return t instanceof HTMLElement||t instanceof at(t).HTMLElement}function jn(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof at(t).ShadowRoot}function Br(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=bt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function Nl(t){return["table","td","th"].includes(br(t))}function Oi(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Gs(t){const e=Xs(),r=bt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Hl(t){let e=Nt(t);for(;_t(e)&&!hr(e);){if(Oi(e))return null;if(Gs(e))return e;e=Nt(e)}return null}function Xs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hr(t){return["html","body","#document"].includes(br(t))}function bt(t){return at(t).getComputedStyle(t)}function Ei(t){return kt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Nt(t){if(br(t)==="html")return t;const e=t.assignedSlot||t.parentNode||jn(t)&&t.host||Ht(t);return jn(e)?e.host:e}function So(t){const e=Nt(t);return hr(e)?t.ownerDocument?t.ownerDocument.body:t.body:_t(e)&&Br(e)?e:So(e)}function Rs(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=So(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),o=at(s);return n?e.concat(o,o.visualViewport||[],Br(s)?s:[],o.frameElement&&r?Rs(o.frameElement):[]):e.concat(s,Rs(s,[],r))}function Po(t){const e=bt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=_t(t),n=s?t.offsetWidth:r,o=s?t.offsetHeight:i,u=mi(r)!==n||mi(i)!==o;return u&&(r=n,i=o),{width:r,height:i,$:u}}function Co(t){return kt(t)?t:t.contextElement}function lr(t){const e=Co(t);if(!_t(e))return It(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=Po(e);let o=(n?mi(r.width):r.width)/i,u=(n?mi(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!u||!Number.isFinite(u))&&(u=1),{x:o,y:u}}const Bl=It(0);function Oo(t){const e=at(t);return!Xs()||!e.visualViewport?Bl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Vl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==at(t)?!1:e}function Fr(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=Co(t);let o=It(1);e&&(i?kt(i)&&(o=lr(i)):o=lr(t));const u=Vl(n,r,i)?Oo(n):It(0);let d=(s.left+u.x)/o.x,h=(s.top+u.y)/o.y,m=s.width/o.x,f=s.height/o.y;if(n){const $=at(n),x=i&&kt(i)?at(i):i;let k=$,O=k.frameElement;for(;O&&i&&x!==k;){const P=lr(O),F=O.getBoundingClientRect(),j=bt(O),H=F.left+(O.clientLeft+parseFloat(j.paddingLeft))*P.x,ue=F.top+(O.clientTop+parseFloat(j.paddingTop))*P.y;d*=P.x,h*=P.y,m*=P.x,f*=P.y,d+=H,h+=ue,k=at(O),O=k.frameElement}}return dr({width:m,height:f,x:d,y:h})}function zl(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",o=Ht(i),u=e?Oi(e.floating):!1;if(i===o||u&&n)return r;let d={scrollLeft:0,scrollTop:0},h=It(1);const m=It(0),f=_t(i);if((f||!f&&!n)&&((br(i)!=="body"||Br(o))&&(d=Ei(i)),_t(i))){const $=Fr(i);h=lr(i),m.x=$.x+i.clientLeft,m.y=$.y+i.clientTop}return{width:r.width*h.x,height:r.height*h.y,x:r.x*h.x-d.scrollLeft*h.x+m.x,y:r.y*h.y-d.scrollTop*h.y+m.y}}function ql(t){return Array.from(t.getClientRects())}function Eo(t){return Fr(Ht(t)).left+Ei(t).scrollLeft}function Yl(t){const e=Ht(t),r=Ei(t),i=t.ownerDocument.body,s=Ot(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Ot(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Eo(t);const u=-r.scrollTop;return bt(i).direction==="rtl"&&(o+=Ot(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:u}}function Gl(t,e){const r=at(t),i=Ht(t),s=r.visualViewport;let n=i.clientWidth,o=i.clientHeight,u=0,d=0;if(s){n=s.width,o=s.height;const h=Xs();(!h||h&&e==="fixed")&&(u=s.offsetLeft,d=s.offsetTop)}return{width:n,height:o,x:u,y:d}}function Xl(t,e){const r=Fr(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=_t(t)?lr(t):It(1),o=t.clientWidth*n.x,u=t.clientHeight*n.y,d=s*n.x,h=i*n.y;return{width:o,height:u,x:d,y:h}}function Wn(t,e,r){let i;if(e==="viewport")i=Gl(t,r);else if(e==="document")i=Yl(Ht(t));else if(kt(e))i=Xl(e,r);else{const s=Oo(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return dr(i)}function Ao(t,e){const r=Nt(t);return r===e||!kt(r)||hr(r)?!1:bt(r).position==="fixed"||Ao(r,e)}function Ql(t,e){const r=e.get(t);if(r)return r;let i=Rs(t,[],!1).filter(u=>kt(u)&&br(u)!=="body"),s=null;const n=bt(t).position==="fixed";let o=n?Nt(t):t;for(;kt(o)&&!hr(o);){const u=bt(o),d=Gs(o);!d&&u.position==="fixed"&&(s=null),(n?!d&&!s:!d&&u.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Br(o)&&!d&&Ao(t,o))?i=i.filter(m=>m!==o):s=u,o=Nt(o)}return e.set(t,i),i}function Kl(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const o=[...r==="clippingAncestors"?Oi(e)?[]:Ql(e,this._c):[].concat(r),i],u=o[0],d=o.reduce((h,m)=>{const f=Wn(e,m,s);return h.top=Ot(f.top,h.top),h.right=ur(f.right,h.right),h.bottom=ur(f.bottom,h.bottom),h.left=Ot(f.left,h.left),h},Wn(e,u,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Zl(t){const{width:e,height:r}=Po(t);return{width:e,height:r}}function Jl(t,e,r){const i=_t(e),s=Ht(e),n=r==="fixed",o=Fr(t,!0,n,e);let u={scrollLeft:0,scrollTop:0};const d=It(0);if(i||!i&&!n)if((br(e)!=="body"||Br(s))&&(u=Ei(e)),i){const f=Fr(e,!0,n,e);d.x=f.x+e.clientLeft,d.y=f.y+e.clientTop}else s&&(d.x=Eo(s));const h=o.left+u.scrollLeft-d.x,m=o.top+u.scrollTop-d.y;return{x:h,y:m,width:o.width,height:o.height}}function $s(t){return bt(t).position==="static"}function In(t,e){return!_t(t)||bt(t).position==="fixed"?null:e?e(t):t.offsetParent}function To(t,e){const r=at(t);if(Oi(t))return r;if(!_t(t)){let s=Nt(t);for(;s&&!hr(s);){if(kt(s)&&!$s(s))return s;s=Nt(s)}return r}let i=In(t,e);for(;i&&Nl(i)&&$s(i);)i=In(i,e);return i&&hr(i)&&$s(i)&&!Gs(i)?r:i||Hl(t)||r}const ec=async function(t){const e=this.getOffsetParent||To,r=this.getDimensions,i=await r(t.floating);return{reference:Jl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function tc(t){return bt(t).direction==="rtl"}const rc={convertOffsetParentRelativeRectToViewportRelativeRect:zl,getDocumentElement:Ht,getClippingRect:Kl,getOffsetParent:To,getElementRects:ec,getClientRects:ql,getDimensions:Zl,getScale:lr,isElement:kt,isRTL:tc},ic=Wl,sc=Il,nc=Ll,oc=Fl,ac=(t,e,r)=>{const i=new Map,s={platform:rc,...r},n={...s.platform,_c:i};return Ml(t,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=qs(class extends Ys{constructor(t){var e;if(super(t),t.type!==zs.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Wt}});var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,Vr=(t,e,r,i)=>{for(var s=i>1?void 0:i?cc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&lc(e,r,s),s};let Tt=class extends st{constructor(){super(...arguments),this.dropdownRef=Ge(),this.invokerRef=Ge(),this.optionsRef=Ge(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){ac(this.invokerRef.value,this.optionsRef.value,{middleware:[ic(2),nc(),oc(),sc()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,o;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(o=this.dropdownRef.value)==null||o.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return U`

            <div class="dropdown" ${Xe(this.dropdownRef)}>

                <thermal-button class="${Rr(t)}" ${Xe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?U`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:U`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Xe(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Tt.shadowRootOptions={...st.shadowRootOptions,mode:"open"};Tt.styles=Ne`

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
    
    `;Vr([Si({slot:"option"})],Tt.prototype,"_options",2);Vr([se({type:String,reflect:!0})],Tt.prototype,"open",2);Vr([se({type:String,reflect:!0,attribute:!0}),X()],Tt.prototype,"interactive",2);Vr([se({type:String,reflect:!0})],Tt.prototype,"variant",2);Tt=Vr([Se("thermal-dropdown")],Tt);var uc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,Ai=(t,e,r,i)=>{for(var s=i>1?void 0:i?dc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&uc(e,r,s),s};let pr=class extends st{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Ge(),this.contentRef=Ge(),this.rulerContentRef=Ge()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return U`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Xe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Xe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Xe(this.contentRef)}>

                    ${this.collapsed===!1?U`
                        <slot></slot>    
                    `:J}
                
                </div>

            </div>

            ${this.collapsed?U`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:J}
        
        `}};pr.styles=Ne`

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

    `;Ai([X()],pr.prototype,"collapsed",2);Ai([X()],pr.prototype,"lastContentWidth",2);Ai([X()],pr.prototype,"drawerRef",2);pr=Ai([Se("thermal-bar")],pr);var hc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,zr=(t,e,r,i)=>{for(var s=i>1?void 0:i?pc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&hc(e,r,s),s};let Kt=class extends st{constructor(){super(...arguments),this.fullscreen="off",this.appRef=Ge(),this.contentRef=Ge()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){console.log("fullscreen"),this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,o=r.contentRect.width,u=n-175,d=o-0,h=this.contentRef.value.offsetHeight,m=4/3;let f=0,$=0;h<u?(console.log("priorita šířky"),f=d,$=f/m):(console.log("priorita výšky"),$=u,f=$*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${$}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return U`

        <div class="container" ${Xe(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?U`
            <div class="bar">
                <slot name="bar"></slot>
                <thermal-button slot="bar" @click=${this.toggleFullscreen.bind(this)}>
                <div style="width: calc( var( --thermal-gap ) * .9 );line-height: 0;">
                ${this.fullscreen==="on"?U`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:U`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
            </div> 
        `:""}

        ${this.pre.length>=0?U`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Xe(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

        </div>
        
        `}};Kt.styles=Ne`

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
    
    `;zr([Si({slot:"bar",flatten:!0})],Kt.prototype,"barItems",2);zr([Si({slot:"bar",flatten:!0})],Kt.prototype,"barElements",2);zr([Si({slot:"pre",flatten:!0})],Kt.prototype,"pre",2);zr([se({type:String,reflect:!0})],Kt.prototype,"fullscreen",2);Kt=zr([Se("thermal-app")],Kt);var fc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,gc=(t,e,r,i)=>{for(var s=i>1?void 0:i?mc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&fc(e,r,s),s};let Ds=class extends st{render(){return U`
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
                        <p>version ${ao.version}</p>
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
        `}};Ds.styles=Ne`

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
    
    `;Ds=gc([Se("app-info-button")],Ds);function ht(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Zt(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Ro=6048e5,vc=864e5;let bc={};function Ti(){return bc}function jr(t,e){var u,d,h,m;const r=Ti(),i=(e==null?void 0:e.weekStartsOn)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,s=ht(t),n=s.getDay(),o=(n<i?7:0)+n-i;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function vi(t){return jr(t,{weekStartsOn:1})}function Do(t){const e=ht(t),r=e.getFullYear(),i=Zt(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=vi(i),n=Zt(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const o=vi(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=o.getTime()?r:r-1}function Nn(t){const e=ht(t);return e.setHours(0,0,0,0),e}function Hn(t){const e=ht(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function yc(t,e){const r=Nn(t),i=Nn(e),s=+r-Hn(r),n=+i-Hn(i);return Math.round((s-n)/vc)}function wc(t){const e=Do(t),r=Zt(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),vi(r)}function xc(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Mo(t){if(!xc(t)&&typeof t!="number")return!1;const e=ht(t);return!isNaN(Number(e))}function kc(t){const e=ht(t),r=Zt(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const _c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$c=(t,e,r)=>{let i;const s=_c[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Ss(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const Sc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Pc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Cc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Oc={date:Ss({formats:Sc,defaultWidth:"full"}),time:Ss({formats:Pc,defaultWidth:"full"}),dateTime:Ss({formats:Cc,defaultWidth:"full"})},Ec={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ac=(t,e,r,i)=>Ec[t];function Cr(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,u=r!=null&&r.width?String(r.width):o;s=t.formattingValues[u]||t.formattingValues[o]}else{const o=t.defaultWidth,u=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[u]||t.values[o]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const Tc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Rc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Dc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Mc={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Lc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Uc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Fc=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},jc={ordinalNumber:Fc,era:Cr({values:Tc,defaultWidth:"wide"}),quarter:Cr({values:Rc,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Cr({values:Dc,defaultWidth:"wide"}),day:Cr({values:Mc,defaultWidth:"wide"}),dayPeriod:Cr({values:Lc,defaultWidth:"wide",formattingValues:Uc,defaultFormattingWidth:"wide"})};function Or(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const o=n[0],u=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?Ic(u,f=>f.test(o)):Wc(u,f=>f.test(o));let h;h=t.valueCallback?t.valueCallback(d):d,h=r.valueCallback?r.valueCallback(h):h;const m=e.slice(o.length);return{value:h,rest:m}}}function Wc(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Ic(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Nc(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let o=t.valueCallback?t.valueCallback(n[0]):n[0];o=r.valueCallback?r.valueCallback(o):o;const u=e.slice(s.length);return{value:o,rest:u}}}const Hc=/^(\d+)(th|st|nd|rd)?/i,Bc=/\d+/i,Vc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},zc={any:[/^b/i,/^(a|c)/i]},qc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Yc={any:[/1/i,/2/i,/3/i,/4/i]},Gc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Xc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Qc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Kc={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Zc={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Jc={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},eu={ordinalNumber:Nc({matchPattern:Hc,parsePattern:Bc,valueCallback:t=>parseInt(t,10)}),era:Or({matchPatterns:Vc,defaultMatchWidth:"wide",parsePatterns:zc,defaultParseWidth:"any"}),quarter:Or({matchPatterns:qc,defaultMatchWidth:"wide",parsePatterns:Yc,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Or({matchPatterns:Gc,defaultMatchWidth:"wide",parsePatterns:Xc,defaultParseWidth:"any"}),day:Or({matchPatterns:Qc,defaultMatchWidth:"wide",parsePatterns:Kc,defaultParseWidth:"any"}),dayPeriod:Or({matchPatterns:Zc,defaultMatchWidth:"any",parsePatterns:Jc,defaultParseWidth:"any"})},tu={code:"en-US",formatDistance:$c,formatLong:Oc,formatRelative:Ac,localize:jc,match:eu,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ru(t){const e=ht(t);return yc(e,kc(e))+1}function iu(t){const e=ht(t),r=+vi(e)-+wc(e);return Math.round(r/Ro)+1}function Lo(t,e){var m,f,$,x;const r=ht(t),i=r.getFullYear(),s=Ti(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((x=($=s.locale)==null?void 0:$.options)==null?void 0:x.firstWeekContainsDate)??1,o=Zt(t,0);o.setFullYear(i+1,0,n),o.setHours(0,0,0,0);const u=jr(o,e),d=Zt(t,0);d.setFullYear(i,0,n),d.setHours(0,0,0,0);const h=jr(d,e);return r.getTime()>=u.getTime()?i+1:r.getTime()>=h.getTime()?i:i-1}function su(t,e){var u,d,h,m;const r=Ti(),i=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,s=Lo(t,e),n=Zt(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),jr(n,e)}function nu(t,e){const r=ht(t),i=+jr(r,e)-+su(r,e);return Math.round(i/Ro)+1}function ce(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Ut={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return ce(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):ce(r+1,2)},d(t,e){return ce(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return ce(t.getHours()%12||12,e.length)},H(t,e){return ce(t.getHours(),e.length)},m(t,e){return ce(t.getMinutes(),e.length)},s(t,e){return ce(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return ce(s,e.length)}},nr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Bn={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Ut.y(t,e)},Y:function(t,e,r,i){const s=Lo(t,i),n=s>0?s:1-s;if(e==="YY"){const o=n%100;return ce(o,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):ce(n,e.length)},R:function(t,e){const r=Do(t);return ce(r,e.length)},u:function(t,e){const r=t.getFullYear();return ce(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ce(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ce(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Ut.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ce(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=nu(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):ce(s,e.length)},I:function(t,e,r){const i=iu(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):ce(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Ut.d(t,e)},D:function(t,e,r){const i=ru(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ce(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return ce(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return ce(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return ce(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=nr.noon:i===0?s=nr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=nr.evening:i>=12?s=nr.afternoon:i>=4?s=nr.morning:s=nr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Ut.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Ut.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ce(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):ce(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ut.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Ut.s(t,e)},S:function(t,e){return Ut.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return zn(i);case"XXXX":case"XX":return qt(i);case"XXXXX":case"XXX":default:return qt(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return zn(i);case"xxxx":case"xx":return qt(i);case"xxxxx":case"xxx":default:return qt(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Vn(i,":");case"OOOO":default:return"GMT"+qt(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Vn(i,":");case"zzzz":default:return"GMT"+qt(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return ce(i,e.length)},T:function(t,e,r){const i=t.getTime();return ce(i,e.length)}};function Vn(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+ce(n,2)}function zn(t,e){return t%60===0?(t>0?"-":"+")+ce(Math.abs(t)/60,2):qt(t,e)}function qt(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=ce(Math.trunc(i/60),2),n=ce(i%60,2);return r+s+e+n}const qn=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Uo=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},ou=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return qn(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",qn(i,e)).replace("{{time}}",Uo(s,e))},au={p:Uo,P:ou},lu=/^D+$/,cu=/^Y+$/,uu=["D","DD","YY","YYYY"];function du(t){return lu.test(t)}function hu(t){return cu.test(t)}function pu(t,e,r){const i=fu(t,e,r);if(console.warn(i),uu.includes(t))throw new RangeError(i)}function fu(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const mu=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gu=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,vu=/^'([^]*?)'?$/,bu=/''/g,yu=/[a-zA-Z]/;function Wr(t,e,r){var m,f,$,x;const i=Ti(),s=i.locale??tu,n=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,o=i.weekStartsOn??((x=($=i.locale)==null?void 0:$.options)==null?void 0:x.weekStartsOn)??0,u=ht(t);if(!Mo(u))throw new RangeError("Invalid time value");let d=e.match(gu).map(k=>{const O=k[0];if(O==="p"||O==="P"){const P=au[O];return P(k,s.formatLong)}return k}).join("").match(mu).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const O=k[0];if(O==="'")return{isToken:!1,value:wu(k)};if(Bn[O])return{isToken:!0,value:k};if(O.match(yu))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:k}});s.localize.preprocessor&&(d=s.localize.preprocessor(u,d));const h={firstWeekContainsDate:n,weekStartsOn:o,locale:s};return d.map(k=>{if(!k.isToken)return k.value;const O=k.value;(hu(O)||du(O))&&pu(O,e,String(t));const P=Bn[O[0]];return P(u,O,s.localize,h)}).join("")}function wu(t){const e=t.match(vu);return e?e[1].replace(bu,"'"):t}function Ps(t,e){const r=ht(t);if(!Mo(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const o=i==="extended"?"-":"",u=i==="extended"?":":"";if(s!=="time"){const d=ce(r.getDate(),2),h=ce(r.getMonth()+1,2);n=`${ce(r.getFullYear(),4)}${o}${h}${o}${d}`}if(s!=="date"){const d=ce(r.getHours(),2),h=ce(r.getMinutes(),2),m=ce(r.getSeconds(),2);n=`${n}${n===""?"":" "}${d}${u}${h}${u}${m}`}return n}var xu={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},ku=`\r
`,_u="\uFEFF",Ri=t=>Object.assign({},xu,t);class $u extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class Su extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class Pu extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Cu extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var yr=t=>t,lt=t=>t,Dr=yr,Di=yr,fr=yr,Yn=yr,Gn=yr,Ou=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},Eu=t=>Yn(typeof t=="object"?t.key:t),Au=t=>Gn(typeof t=="object"?t.displayLabel:t),Tu=(t,...e)=>e.reduce((r,i)=>i(r),t),Ru=t=>e=>t.useBom?Di(lt(e)+_u):e,Du=t=>e=>t.showTitle?Qs(Di(lt(e)+t.title))(fr("")):e,Qs=t=>e=>Di(lt(t)+lt(e)+ku),Fo=t=>(e,r)=>Mu(t)(fr(lt(e)+lt(r))),Mu=t=>e=>yr(lt(e)+t.fieldSeparator),Lu=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new Su("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=fr("");for(let s=0;s<e.length;s++){const n=Au(e[s]);i=Fo(t)(i,jo(t,lt(n)))}return i=fr(lt(i).slice(0,-1)),Qs(r)(i)},Uu=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let o=fr("");for(let u=0;u<e.length;u++){const d=Eu(e[u]),h=r[n][lt(d)];o=Fo(t)(o,jo(t,h))}o=fr(lt(o).slice(0,-1)),s=Qs(s)(o)}return s},Fu=t=>+t===t&&(!isFinite(t)||!!(t%1)),ju=(t,e)=>{if(Fu(e)){if(t.decimalSeparator==="locale")return Dr(e.toLocaleString());if(t.decimalSeparator)return Dr(e.toString().replace(".",t.decimalSeparator))}return Dr(e.toString())},di=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+Ou(e,t.quoteCharacter)+t.quoteCharacter),Dr(r)},Wu=(t,e)=>{const r=e?"true":"false";return Dr(t.boolDisplay[r])},Iu=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?di(t,t.replaceUndefinedWith+""):e===null?di(t,"null"):di(t,""),jo=(t,e)=>{if(typeof e=="number")return ju(t,e);if(typeof e=="string")return di(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Wu(t,e);if(e===null||typeof e>"u")return Iu(t,e);throw new Cu(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Nu=t=>e=>{const r=Ri(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=Tu(Di(""),Ru(r),Du(r),Lu(r,i),Uu(r,i,e));if(lt(s).length<1)throw new $u("Output is empty. Is your data formatted correctly?");return s},Hu=t=>e=>{const r=Ri(t),i=lt(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Bu=t=>e=>{if(!window)throw new Pu("Downloading only supported in a browser environment.");const r=Hu(t)(e),i=Ri(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,o=document.createElement("a");o.download=n,o.href=URL.createObjectURL(r),o.setAttribute("visibility","hidden"),document.body.appendChild(o),o.click(),document.body.removeChild(o)},Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zu(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var Ms={exports:{}};const qu={},Yu=Object.freeze(Object.defineProperty({__proto__:null,default:qu},Symbol.toStringTag,{value:"Module"})),or=zu(Yu);/**
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
 */(function(t,e){(function(r,i){i(e)})(Vu,function(r){var i={},s={exports:{}};(function(w){var C=function(B){return typeof B<"u"&&B.versions!=null&&B.versions.node!=null&&B+""=="[object process]"};w.exports.isNode=C,w.exports.platform=typeof process<"u"&&C(process)?"node":"browser";var E=w.exports.platform==="node"&&or;w.exports.isMainThread=w.exports.platform==="node"?(!E||E.isMainThread)&&!process.connected:typeof Window<"u",w.exports.cpus=w.exports.platform==="browser"?self.navigator.hardwareConcurrency:or.cpus().length})(s);var n=s.exports,o={},u;function d(){if(u)return o;u=1;function w(B,we){var G=this;if(!(this instanceof w))throw new SyntaxError("Constructor must be called with the new operator");if(typeof B!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Ce=[],pe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var M=function(Q,oe){Ce.push(Q),pe.push(oe)};this.then=function(_,Q){return new w(function(oe,Ue){var qe=_?C(_,oe,Ue):oe,yt=Q?C(Q,oe,Ue):Ue;M(qe,yt)},G)};var fe=function(Q){return G.resolved=!0,G.rejected=!1,G.pending=!1,Ce.forEach(function(oe){oe(Q)}),M=function(Ue,qe){Ue(Q)},fe=y=function(){},G},y=function(Q){return G.resolved=!1,G.rejected=!0,G.pending=!1,pe.forEach(function(oe){oe(Q)}),M=function(Ue,qe){qe(Q)},fe=y=function(){},G};this.cancel=function(){return we?we.cancel():y(new E),G},this.timeout=function(_){if(we)we.timeout(_);else{var Q=setTimeout(function(){y(new A("Promise timed out after "+_+" ms"))},_);G.always(function(){clearTimeout(Q)})}return G},B(function(_){fe(_)},function(_){y(_)})}function C(B,we,G){return function(Ce){try{var pe=B(Ce);pe&&typeof pe.then=="function"&&typeof pe.catch=="function"?pe.then(we,G):we(pe)}catch(M){G(M)}}}w.prototype.catch=function(B){return this.then(null,B)},w.prototype.always=function(B){return this.then(B,B)},w.all=function(B){return new w(function(we,G){var Ce=B.length,pe=[];Ce?B.forEach(function(M,fe){M.then(function(y){pe[fe]=y,Ce--,Ce==0&&we(pe)},function(y){Ce=0,G(y)})}):we(pe)})},w.defer=function(){var B={};return B.promise=new w(function(we,G){B.resolve=we,B.reject=G}),B};function E(B){this.message=B||"promise cancelled",this.stack=new Error().stack}E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="CancellationError",w.CancellationError=E;function A(B){this.message=B||"timeout exceeded",this.stack=new Error().stack}return A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="TimeoutError",w.TimeoutError=A,o.Promise=w,o}function h(w,C){(C==null||C>w.length)&&(C=w.length);for(var E=0,A=Array(C);E<C;E++)A[E]=w[E];return A}function m(w,C){var E=typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(!E){if(Array.isArray(w)||(E=F(w))||C){E&&(w=E);var A=0,B=function(){};return{s:B,n:function(){return A>=w.length?{done:!0}:{done:!1,value:w[A++]}},e:function(pe){throw pe},f:B}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var we,G=!0,Ce=!1;return{s:function(){E=E.call(w)},n:function(){var pe=E.next();return G=pe.done,pe},e:function(pe){Ce=!0,we=pe},f:function(){try{G||E.return==null||E.return()}finally{if(Ce)throw we}}}}function f(w,C,E){return(C=O(C))in w?Object.defineProperty(w,C,{value:E,enumerable:!0,configurable:!0,writable:!0}):w[C]=E,w}function $(w,C){var E=Object.keys(w);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(w);C&&(A=A.filter(function(B){return Object.getOwnPropertyDescriptor(w,B).enumerable})),E.push.apply(E,A)}return E}function x(w){for(var C=1;C<arguments.length;C++){var E=arguments[C]!=null?arguments[C]:{};C%2?$(Object(E),!0).forEach(function(A){f(w,A,E[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(E)):$(Object(E)).forEach(function(A){Object.defineProperty(w,A,Object.getOwnPropertyDescriptor(E,A))})}return w}function k(w,C){if(typeof w!="object"||!w)return w;var E=w[Symbol.toPrimitive];if(E!==void 0){var A=E.call(w,C||"default");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(C==="string"?String:Number)(w)}function O(w){var C=k(w,"string");return typeof C=="symbol"?C:C+""}function P(w){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},P(w)}function F(w,C){if(w){if(typeof w=="string")return h(w,C);var E={}.toString.call(w).slice(8,-1);return E==="Object"&&w.constructor&&(E=w.constructor.name),E==="Map"||E==="Set"?Array.from(w):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?h(w,C):void 0}}var j={exports:{}},H={},ue;function ee(){return ue||(ue=1,H.validateOptions=function(C,E,A){if(C){var B=C?Object.keys(C):[],we=B.find(function(Ce){return!E.includes(Ce)});if(we)throw new Error('Object "'+A+'" contains an unknown option "'+we+'"');var G=E.find(function(Ce){return Object.prototype[Ce]&&!B.includes(Ce)});if(G)throw new Error('Object "'+A+'" contains an inherited option "'+G+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return C}},H.workerOptsNames=["credentials","name","type"],H.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],H.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),H}var Pe,W;function me(){return W||(W=1,Pe=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Pe}var ne;function de(){if(ne)return j.exports;ne=1;var w=d(),C=w.Promise,E=n,A=ee(),B=A.validateOptions,we=A.forkOptsNames,G=A.workerThreadOptsNames,Ce=A.workerOptsNames,pe="__workerpool-terminate__";function M(){var N=y();if(!N)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return N}function fe(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":P(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function y(){try{return or}catch(N){if(P(N)==="object"&&N!==null&&N.code==="MODULE_NOT_FOUND")return null;throw N}}function _(){if(E.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var N=new Blob([me()],{type:"text/javascript"});return window.URL.createObjectURL(N)}else return __dirname+"/worker.js"}function Q(N,K){if(K.workerType==="web")return fe(),oe(N,K.workerOpts,Worker);if(K.workerType==="thread")return S=M(),Ue(N,S,K);if(K.workerType==="process"||!K.workerType)return qe(N,yt(K),or);if(E.platform==="browser")return fe(),oe(N,K.workerOpts,Worker);var S=y();return S?Ue(N,S,K):qe(N,yt(K),or)}function oe(N,K,S){B(K,Ce,"workerOpts");var Y=new S(N,K);return Y.isBrowserWorker=!0,Y.on=function(xe,ye){this.addEventListener(xe,function(Ee){ye(Ee.data)})},Y.send=function(xe,ye){this.postMessage(xe,ye)},Y}function Ue(N,K,S){var Y,xe;B(S==null?void 0:S.workerThreadOpts,G,"workerThreadOpts");var ye=new K.Worker(N,x({stdout:(Y=S==null?void 0:S.emitStdStreams)!==null&&Y!==void 0?Y:!1,stderr:(xe=S==null?void 0:S.emitStdStreams)!==null&&xe!==void 0?xe:!1},S==null?void 0:S.workerThreadOpts));return ye.isWorkerThread=!0,ye.send=function(Ee,ae){this.postMessage(Ee,ae)},ye.kill=function(){return this.terminate(),!0},ye.disconnect=function(){this.terminate()},S!=null&&S.emitStdStreams&&(ye.stdout.on("data",function(Ee){return ye.emit("stdout",Ee)}),ye.stderr.on("data",function(Ee){return ye.emit("stderr",Ee)})),ye}function qe(N,K,S){B(K.forkOpts,we,"forkOpts");var Y=S.fork(N,K.forkArgs,K.forkOpts),xe=Y.send;return Y.send=function(ye){return xe.call(Y,ye)},K.emitStdStreams&&(Y.stdout.on("data",function(ye){return Y.emit("stdout",ye)}),Y.stderr.on("data",function(ye){return Y.emit("stderr",ye)})),Y.isChildProcess=!0,Y}function yt(N){N=N||{};var K=process.execArgv.join(" "),S=K.indexOf("--inspect")!==-1,Y=K.indexOf("--debug-brk")!==-1,xe=[];return S&&(xe.push("--inspect="+N.debugPort),Y&&xe.push("--debug-brk")),process.execArgv.forEach(function(ye){ye.indexOf("--max-old-space-size")>-1&&xe.push(ye)}),Object.assign({},N,{forkArgs:N.forkArgs,forkOpts:Object.assign({},N.forkOpts,{execArgv:(N.forkOpts&&N.forkOpts.execArgv||[]).concat(xe),stdio:N.emitStdStreams?"pipe":void 0})})}function ot(N){for(var K=new Error(""),S=Object.keys(N),Y=0;Y<S.length;Y++)K[S[Y]]=N[S[Y]];return K}function ct(N,K){if(Object.keys(N.processing).length===1){var S=Object.values(N.processing)[0];S.options&&typeof S.options.on=="function"&&S.options.on(K)}}function Mt(N,K){var S=this,Y=K||{};this.script=N||_(),this.worker=Q(this.script,Y),this.debugPort=Y.debugPort,this.forkOpts=Y.forkOpts,this.forkArgs=Y.forkArgs,this.workerOpts=Y.workerOpts,this.workerThreadOpts=Y.workerThreadOpts,this.workerTerminateTimeout=Y.workerTerminateTimeout,N||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(ae){ct(S,{stdout:ae.toString()})}),this.worker.on("stderr",function(ae){ct(S,{stderr:ae.toString()})}),this.worker.on("message",function(ae){if(!S.terminated)if(typeof ae=="string"&&ae==="ready")S.worker.ready=!0,ye();else{var et=ae.id,Fe=S.processing[et];Fe!==void 0&&(ae.isEvent?Fe.options&&typeof Fe.options.on=="function"&&Fe.options.on(ae.payload):(delete S.processing[et],S.terminating===!0&&S.terminate(),ae.error?Fe.resolver.reject(ot(ae.error)):Fe.resolver.resolve(ae.result)))}});function xe(ae){S.terminated=!0;for(var et in S.processing)S.processing[et]!==void 0&&S.processing[et].resolver.reject(ae);S.processing=Object.create(null)}function ye(){var ae=m(S.requestQueue.splice(0)),et;try{for(ae.s();!(et=ae.n()).done;){var Fe=et.value;S.worker.send(Fe.message,Fe.transfer)}}catch(Kr){ae.e(Kr)}finally{ae.f()}}var Ee=this.worker;this.worker.on("error",xe),this.worker.on("exit",function(ae,et){var Fe=`Workerpool Worker terminated Unexpectedly
`;Fe+="    exitCode: `"+ae+"`\n",Fe+="    signalCode: `"+et+"`\n",Fe+="    workerpool.script: `"+S.script+"`\n",Fe+="    spawnArgs: `"+Ee.spawnargs+"`\n",Fe+="    spawnfile: `"+Ee.spawnfile+"`\n",Fe+="    stdout: `"+Ee.stdout+"`\n",Fe+="    stderr: `"+Ee.stderr+"`\n",xe(new Error(Fe))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Mt.prototype.methods=function(){return this.exec("methods")},Mt.prototype.exec=function(N,K,S,Y){S||(S=C.defer());var xe=++this.lastId;this.processing[xe]={id:xe,resolver:S,options:Y};var ye={message:{id:xe,method:N,params:K},transfer:Y&&Y.transfer};this.terminated?S.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ye.message,ye.transfer):this.requestQueue.push(ye);var Ee=this;return S.promise.catch(function(ae){if(ae instanceof C.CancellationError||ae instanceof C.TimeoutError)return delete Ee.processing[xe],Ee.terminateAndNotify(!0).then(function(){throw ae},function(et){throw et});throw ae})},Mt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Mt.prototype.terminate=function(N,K){var S=this;if(N){for(var Y in this.processing)this.processing[Y]!==void 0&&this.processing[Y].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof K=="function"&&(this.terminationHandler=K),this.busy())this.terminating=!0;else{var xe=function(ae){if(S.terminated=!0,S.cleaning=!1,S.worker!=null&&S.worker.removeAllListeners&&S.worker.removeAllListeners("message"),S.worker=null,S.terminating=!1,S.terminationHandler)S.terminationHandler(ae,S);else if(ae)throw ae};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){xe(new Error("worker already killed!"));return}var ye=setTimeout(function(){S.worker&&S.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ye),S.worker&&(S.worker.killed=!0),xe()}),this.worker.ready?this.worker.send(pe):this.requestQueue.push({message:pe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");xe()}},Mt.prototype.terminateAndNotify=function(N,K){var S=C.defer();return K&&S.promise.timeout(K),this.terminate(N,function(Y,xe){Y?S.reject(Y):S.resolve(xe)}),S.promise},j.exports=Mt,j.exports._tryRequireWorkerThreads=y,j.exports._setupProcessWorker=qe,j.exports._setupBrowserWorker=oe,j.exports._setupWorkerThreadWorker=Ue,j.exports.ensureWorkerThreads=M,j.exports}var ve,he;function ge(){if(he)return ve;he=1;var w=65535;ve=C;function C(){this.ports=Object.create(null),this.length=0}return C.prototype.nextAvailableStartingAt=function(E){for(;this.ports[E]===!0;)E++;if(E>=w)throw new Error("WorkerPool debug port limit reached: "+E+">= "+w);return this.ports[E]=!0,this.length++,E},C.prototype.releasePort=function(E){delete this.ports[E],this.length--},ve}var te,be;function Ae(){if(be)return te;be=1;var w=d(),C=w.Promise,E=de(),A=n,B=ge(),we=new B;function G(y,_){typeof y=="string"?this.script=y||null:(this.script=null,_=y),this.workers=[],this.tasks=[],_=_||{},this.forkArgs=Object.freeze(_.forkArgs||[]),this.forkOpts=Object.freeze(_.forkOpts||{}),this.workerOpts=Object.freeze(_.workerOpts||{}),this.workerThreadOpts=Object.freeze(_.workerThreadOpts||{}),this.debugPortStart=_.debugPortStart||43210,this.nodeWorker=_.nodeWorker,this.workerType=_.workerType||_.nodeWorker||"auto",this.maxQueueSize=_.maxQueueSize||1/0,this.workerTerminateTimeout=_.workerTerminateTimeout||1e3,this.onCreateWorker=_.onCreateWorker||function(){return null},this.onTerminateWorker=_.onTerminateWorker||function(){return null},this.emitStdStreams=_.emitStdStreams||!1,_&&"maxWorkers"in _?(Ce(_.maxWorkers),this.maxWorkers=_.maxWorkers):this.maxWorkers=Math.max((A.cpus||4)-1,1),_&&"minWorkers"in _&&(_.minWorkers==="max"?this.minWorkers=this.maxWorkers:(pe(_.minWorkers),this.minWorkers=_.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&E.ensureWorkerThreads()}G.prototype.exec=function(y,_,Q){if(_&&!Array.isArray(_))throw new TypeError('Array expected as argument "params"');if(typeof y=="string"){var oe=C.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ue=this.tasks,qe={method:y,params:_,resolver:oe,timeout:null,options:Q};Ue.push(qe);var yt=oe.promise.timeout;return oe.promise.timeout=function(ct){return Ue.indexOf(qe)!==-1?(qe.timeout=ct,oe.promise):yt.call(oe.promise,ct)},this._next(),oe.promise}else{if(typeof y=="function")return this.exec("run",[String(y),_],Q);throw new TypeError('Function or string expected as argument "method"')}},G.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var y=this;return this.exec("methods").then(function(_){var Q={};return _.forEach(function(oe){Q[oe]=function(){return y.exec(oe,Array.prototype.slice.call(arguments))}}),Q})},G.prototype._next=function(){if(this.tasks.length>0){var y=this._getWorker();if(y){var _=this,Q=this.tasks.shift();if(Q.resolver.promise.pending){var oe=y.exec(Q.method,Q.params,Q.resolver,Q.options).then(_._boundNext).catch(function(){if(y.terminated)return _._removeWorker(y)}).then(function(){_._next()});typeof Q.timeout=="number"&&oe.timeout(Q.timeout)}else _._next()}}},G.prototype._getWorker=function(){for(var y=this.workers,_=0;_<y.length;_++){var Q=y[_];if(Q.busy()===!1)return Q}return y.length<this.maxWorkers?(Q=this._createWorkerHandler(),y.push(Q),Q):null},G.prototype._removeWorker=function(y){var _=this;return we.releasePort(y.debugPort),this._removeWorkerFromList(y),this._ensureMinWorkers(),new C(function(Q,oe){y.terminate(!1,function(Ue){_.onTerminateWorker({forkArgs:y.forkArgs,forkOpts:y.forkOpts,workerThreadOpts:y.workerThreadOpts,script:y.script}),Ue?oe(Ue):Q(y)})})},G.prototype._removeWorkerFromList=function(y){var _=this.workers.indexOf(y);_!==-1&&this.workers.splice(_,1)},G.prototype.terminate=function(y,_){var Q=this;this.tasks.forEach(function(ot){ot.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var oe=function(ct){we.releasePort(ct.debugPort),this._removeWorkerFromList(ct)},Ue=oe.bind(this),qe=[],yt=this.workers.slice();return yt.forEach(function(ot){var ct=ot.terminateAndNotify(y,_).then(Ue).always(function(){Q.onTerminateWorker({forkArgs:ot.forkArgs,forkOpts:ot.forkOpts,workerThreadOpts:ot.workerThreadOpts,script:ot.script})});qe.push(ct)}),C.all(qe)},G.prototype.stats=function(){var y=this.workers.length,_=this.workers.filter(function(Q){return Q.busy()}).length;return{totalWorkers:y,busyWorkers:_,idleWorkers:y-_,pendingTasks:this.tasks.length,activeTasks:_}},G.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var y=this.workers.length;y<this.minWorkers;y++)this.workers.push(this._createWorkerHandler())},G.prototype._createWorkerHandler=function(){var y=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new E(y.script||this.script,{forkArgs:y.forkArgs||this.forkArgs,forkOpts:y.forkOpts||this.forkOpts,workerOpts:y.workerOpts||this.workerOpts,workerThreadOpts:y.workerThreadOpts||this.workerThreadOpts,debugPort:we.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Ce(y){if(!M(y)||!fe(y)||y<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function pe(y){if(!M(y)||!fe(y)||y<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function M(y){return typeof y=="number"}function fe(y){return Math.round(y)==y}return te=G,te}var Ke={},ze,xr;function rr(){if(xr)return ze;xr=1;function w(C,E){this.message=C,this.transfer=E}return ze=w,ze}var Yr;function Gr(){return Yr||(Yr=1,function(w){var C=rr(),E="__workerpool-terminate__",A={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")A.on=function(M,fe){addEventListener(M,function(y){fe(y.data)})},A.send=function(M,fe){fe?postMessage(M,fe):postMessage(M)};else if(typeof process<"u"){var B;try{B=or}catch(M){if(!(P(M)==="object"&&M!==null&&M.code==="MODULE_NOT_FOUND"))throw M}if(B&&B.parentPort!==null){var we=B.parentPort;A.send=we.postMessage.bind(we),A.on=we.on.bind(we),A.exit=process.exit.bind(process)}else A.on=process.on.bind(process),A.send=function(M){process.send(M)},A.on("disconnect",function(){process.exit(1)}),A.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function G(M){return Object.getOwnPropertyNames(M).reduce(function(fe,y){return Object.defineProperty(fe,y,{value:M[y],enumerable:!0})},{})}function Ce(M){return M&&typeof M.then=="function"&&typeof M.catch=="function"}A.methods={},A.methods.run=function(fe,y){var _=new Function("return ("+fe+").apply(null, arguments);");return _.apply(_,y)},A.methods.methods=function(){return Object.keys(A.methods)},A.terminationHandler=void 0,A.cleanupAndExit=function(M){var fe=function(){A.exit(M)};if(!A.terminationHandler)return fe();var y=A.terminationHandler(M);Ce(y)?y.then(fe,fe):fe()};var pe=null;A.on("message",function(M){if(M===E)return A.cleanupAndExit(0);try{var fe=A.methods[M.method];if(fe){pe=M.id;var y=fe.apply(fe,M.params);Ce(y)?y.then(function(_){_ instanceof C?A.send({id:M.id,result:_.message,error:null},_.transfer):A.send({id:M.id,result:_,error:null}),pe=null}).catch(function(_){A.send({id:M.id,result:null,error:G(_)}),pe=null}):(y instanceof C?A.send({id:M.id,result:y.message,error:null},y.transfer):A.send({id:M.id,result:y,error:null}),pe=null)}else throw new Error('Unknown method "'+M.method+'"')}catch(_){A.send({id:M.id,result:null,error:G(_)})}}),A.register=function(M,fe){if(M)for(var y in M)M.hasOwnProperty(y)&&(A.methods[y]=M[y]);fe&&(A.terminationHandler=fe.onTerminate),A.send("ready")},A.emit=function(M){if(pe){if(M instanceof C){A.send({id:pe,isEvent:!0,payload:M.message},M.transfer);return}A.send({id:pe,isEvent:!0,payload:M})}},w.add=A.register,w.emit=A.emit}(Ke)),Ke}var Ni=n.platform,Xr=n.isMainThread,Hi=n.cpus;function nt(w,C){var E=Ae();return new E(w,C)}var Dt=i.pool=nt;function kr(w,C){var E=Gr();E.add(w,C)}var mt=i.worker=kr;function Te(w){var C=Gr();C.emit(w)}var Qr=i.workerEmit=Te,Bi=d(),We=Bi.Promise,Vi=i.Promise=We,zi=i.Transfer=rr(),qi=i.platform=Ni,Yi=i.isMainThread=Xr,Gi=i.cpus=Hi;r.Promise=Vi,r.Transfer=zi,r.cpus=Gi,r.default=i,r.isMainThread=Yi,r.platform=qi,r.pool=Dt,r.worker=mt,r.workerEmit=Qr,Object.defineProperty(r,"__esModule",{value:!0})})})(Ms,Ms.exports);var Gu=Ms.exports,pt=class{constructor(t,e){g(this,"_value");g(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Wo=class extends pt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Xu=class extends pt{constructor(){super(...arguments);g(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Qu=class extends pt{constructor(){super(...arguments);g(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const i={...e};return e.from<r.min&&(i.from=r.min),e.to>r.max&&(i.to=r.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=r),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},Ku=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Zu=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Ju=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],ed=Ku(),Xt={iron:{pixels:Ju,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Zu,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:ed,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},td=class extends pt{get availablePalettes(){return Xt}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},Es,rd=(Es=class{},g(Es,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),Es),Le,id=(Le=class extends rd{static humanRangeDates(e,r){return e=Le.inputToDate(e),r=Le.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Le.humanDate(e):[Le.humanDate(e),Le.humanDate(r)].join(" - ")}static human(e){return`${Le.humanDate(e)} ${Le.humanTime(e,!0)} `}},g(Le,"isoDate",e=>(e=Le.inputToDate(e),Ps(e,{representation:"date"}))),g(Le,"isoTime",e=>(e=Le.inputToDate(e),Ps(e,{representation:"time"}))),g(Le,"isoComplete",e=>(e=Le.inputToDate(e),Ps(e))),g(Le,"humanTime",(e,r=!1)=>(e=Le.inputToDate(e),Wr(e,r?"HH:mm:ss":"HH:mm"))),g(Le,"humanDate",(e,r=!1)=>(e=Le.inputToDate(e),Wr(e,r?"d. M.":"d. M. yyyy"))),Le),Mi=class{},Io=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},Xn=class No extends Io{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new No(e.url,e.code,e.message)}},Ho=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},sd=class extends Mi{constructor(e,r,i,s,n,o,u,d,h,m,f){super();g(this,"id");g(this,"horizontalLimit");g(this,"verticalLimit");g(this,"group");g(this,"url");g(this,"thermalUrl");g(this,"visibleUrl");g(this,"fileName");g(this,"frameCount");g(this,"frames",[]);g(this,"signature","unknown");g(this,"version",-1);g(this,"streamCount",-1);g(this,"fileDataType",-1);g(this,"unit",-1);g(this,"width");g(this,"height");g(this,"timestamp");g(this,"duration");g(this,"min");g(this,"max");g(this,"_isHover",!1);g(this,"root",null);g(this,"canvasLayer");g(this,"visibleLayer");g(this,"cursorLayer");g(this,"listenerLayer");g(this,"timeline");g(this,"cursorValue");g(this,"recording");g(this,"_mounted",!1);g(this,"_pixels");g(this,"_onHover");g(this,"_onClick");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=o,this.duration=u,this.min=d,this.max=h,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const r=this.width,i=this.root.clientWidth,s=r/i,n=Math.round(e.offsetX*s),o=Math.round(e.offsetY*s);this.group.cursorPosition.recieveCursorPosition({x:n,y:o}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){this.cursorValue.recalculateFromCursor(e),e!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(e.x,e.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},Li=class{constructor(t){g(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},xt=class Ls{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=Ls.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=Ls.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},nd=class extends Li{constructor(e){super(e);g(this,"container");g(this,"canvas");g(this,"context");g(this,"_opacity",1);this.container=xt.createCanvasContainer(),this.canvas=xt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,o,u,d)=>{const m=new OffscreenCanvas(n,o).getContext("2d"),f=s-i;for(let k=0;k<=n;k++)for(let O=0;O<=o;O++){const P=k+O*n;let F=u[P];F<i&&(F=i),F>s&&(F=s);const H=(F-i)/f,ue=Math.round(255*H),ee=d[ue];m.fillStyle=ee,m.fillRect(k,O,1,1)}const $=m.getImageData(0,0,n,o);return await createImageBitmap($)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},od=class extends Li{constructor(e){super(e);g(this,"layerRoot");g(this,"center");g(this,"axisX");g(this,"axisY");g(this,"label");g(this,"_show",!1);g(this,"_hover",!1);this.layerRoot=xt.createCursorLayerRoot(),this.center=xt.createCursorLayerCenter(),this.axisX=xt.createCursorLayerX(),this.axisY=xt.createCursorLayerY(),this.label=xt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(e,r,i){if(this.instance.root!==null){const s=this.instance.root.offsetWidth/this.instance.width,n=Math.round(e*s),o=Math.round(r*s);this.center.style.left=this.px(n),this.center.style.top=this.px(o),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${i.toFixed(3)} °C`}}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},ad=class extends Li{constructor(e){super(e);g(this,"container");this.container=xt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},ld=class extends Li{constructor(e,r){super(e);g(this,"container");g(this,"image");this._url=r,this.container=xt.createVisibleLayer(),this._url&&(this.image=xt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Yt=class{constructor(){g(this,"callbacks",new Map)}add(t,e){this.callbacks.set(t,e)}remove(t){this.callbacks.delete(t)}call(...t){this.callbacks.forEach(e=>e(...t))}},cd=class{constructor(t,e){g(this,"_currentFrame");g(this,"bufferSize",4);g(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(o=>o.index>=e&&o.index<r),s=i.filter(o=>!this.preloadedSteps.includes(o));return(await Promise.all(s.map(o=>this.drive.parent.service.frameData(o.index)))).forEach((o,u)=>{const d=s[u];this.buffer.set(d,o)}),this.preloadedSteps.forEach(o=>{i.includes(o)||this.buffer.delete(o)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Ks={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},ud=class extends pt{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));g(this,"_playbackSpeed",1);g(this,"startTimestampRelative");g(this,"endTimestampRelative");g(this,"stepsByAbsolute",new Map);g(this,"stepsByRelative",new Map);g(this,"stepsByIndex",new Map);g(this,"relativeSteps",[]);g(this,"_currentStep");g(this,"isSequence");g(this,"_isPlaying",!1);g(this,"timer");g(this,"buffer");g(this,"callbackdPlaybackSpeed",new Yt);g(this,"callbacksPlay",new Yt);g(this,"callbacksPause",new Yt);g(this,"callbacksStop",new Yt);g(this,"callbacksEnd",new Yt);g(this,"callbacksChangeFrame",new Yt);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new cd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Ks[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),Wr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),u=this.steps.slice(s,n).reverse().find(d=>d.relative<=e);return u!==void 0?u:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),u=this.steps.slice(s,n).find(d=>d.relative>e);return u!==void 0?u:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},dd=class extends pt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},hd=class extends pt{constructor(){super(...arguments);g(this,"stream");g(this,"recorder");g(this,"mimeType");g(this,"_isRecording",!1);g(this,"_mayStop",!0);g(this,"recordedChunks",[]);g(this,"callbackMayStop",new Yt)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.remove(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},pd=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(t="__thermal-data"){const e=Ri({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",t)}),r=this.file.frames.map(s=>{const{pixels:n,...o}=s;return o}),i=Nu(e)(r);Bu(e)(i)}},Bo=class Vo extends sd{constructor(r,i,s,n,o,u,d,h,m,f,$,x,k,O,P,F,j){super(r,i.thermalUrl,s,n,m,o,d,$,x,u,i.visibleUrl);g(this,"_export");this.group=r,this.service=i,this.width=s,this.height=n,this.timestamp=o,this.frameCount=u,this.duration=d,this.frameInterval=h,this.fps=f,this.min=$,this.max=x,this.bytesize=k,this.averageEmissivity=O,this.averageReflectedKelvins=P,this.firstFrame=F,this.timelineData=j,this.pixels=F.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new pd(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new nd(this),this.visibleLayer=new ld(this,this.visibleUrl),this.cursorLayer=new od(this),this.listenerLayer=new ad(this),this.cursorValue=new dd(this,void 0),this.timeline=new ud(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new hd(this,!1),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const i=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(i)}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new Vo(r,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}},bi=class extends Io{constructor(e,r,i,s,n){super(s,n);g(this,"id",Math.random());g(this,"baseInfoCache");g(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),s=Bo.fromService(e,this,r,i);return e.files.addFile(s),s}},fd=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(ne,de)=>{const ve=ne.getBigInt64(de,!0),he=62135596800000n,ge=10000n,te=24n*60n*60n*1000n*ge,be=0x4000000000000000n,Ae=0x8000000000000000n;let ze=ve&0x3fffffffffffffffn;ve&Ae&&(ze>be-te&&(ze-=be),ze<0&&(ze+=te));const rr=ze/ge-he;return Number(rr)},o=n(e,5),u=e.getUint8(15);let d=2;u===1&&(d=4);const h=57,m=r*i*d,f=h+m,$=t.slice(25),x=$.byteLength/f,k=ne=>{const de=ne*f,ve=de+f,he=$.slice(de,ve),ge=new DataView(he),te=ge.getFloat32(8,!0),be=ge.getFloat32(12,!0),Ae=n(ge,0),Ke=ge.getFloat32(24,!0),ze=ge.getFloat32(28,!0);return{timestamp:Ae,min:te,max:be,emissivity:Ke,reflectedKelvins:ze}},O=[];for(let ne=0;ne<x;ne++){const de=k(ne);O.push(de)}const P={emissivity:0,reflectedKelvins:0};let F=1/0,j=-1/0;const H=[];O.forEach(ne=>{P.emissivity=P.emissivity+ne.emissivity,P.reflectedKelvins=P.reflectedKelvins+ne.reflectedKelvins,ne.min<F&&(F=ne.min),ne.max>j&&(j=ne.max),H.push(ne.timestamp)});const ue=H[0],ee=[];H.forEach((ne,de)=>{const ve=H[de+1];let he=0;ve===void 0&&(he=0),he=ve-ne;const ge=ne-ue;ee.push({absolute:ne,relative:ge,offset:isNaN(he)?0:he,index:de})});const Pe=O[O.length-1].timestamp-O[0].timestamp,W=Pe/x,me=1e3/W;return{width:r,height:i,timestamp:o,bytesize:s,frameCount:x,duration:Pe,frameInterval:W,fps:me,timeline:ee,min:F,max:j,averageEmissivity:P.emissivity/O.length,averageReflectedKelvins:P.reflectedKelvins/O.length}},md=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),o=i===1?4:2,u=57,d=s*n*o,h=u+d,m=t.slice(25),f=e*h,$=f+h;return{array:m.slice(f,$),dataType:i}},gd=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,o=24n*60n*60n*1000n*n,u=0x4000000000000000n,d=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&d&&(m>u-o&&(m-=u),m<0&&(m+=o));const $=m/n-s,x=Number($),k=r.getFloat32(8,!0),O=r.getFloat32(12,!0),P=r.getFloat32(24,!0),F=r.getFloat32(28,!0),j=t.slice(57);let H=[];if(e===0){const ue=new Uint16Array(j),ee=Math.abs(k-O),Pe=65535;ue.forEach(W=>{const me=W/Pe;H.push(k+ee*me)})}else e===1&&(H=Array.from(new Float32Array(j)));return{timestamp:x,min:k,max:O,emissivity:P,reflectedKelvins:F,pixels:H}},vd=async t=>{let e=[];const r=async P=>{const F=new DataView(P.slice(0,25)),j=F.getUint8(15),H=F.getUint16(17,!0),ue=F.getUint16(19,!0),ee=j===1?4:2,Pe=57,W=H*ue*ee,me=Pe+W,ne=P.slice(25),de=ne.byteLength/me;let ve=[];for(let he=0;he<de;he++){const te=he*me+57,be=te+W,Ae=ne.slice(te,be);j===0||j===1&&(ve=ve.concat(Array.from(new Float32Array(Ae))))}return ve};(await Promise.all(t.map(P=>r(P)))).forEach(P=>{e=e.concat(P)}),e.sort((P,F)=>P-F);const s=e[0],n=e[e.length-1],o=Math.abs(s-n),u=200,d=o/u,h=[];let m=[...e];for(let P=0;P<u;P++){const F=s+d*P,j=F+d,H=m.findIndex(me=>me>j),ee=m.slice(0,H-1).length,Pe=ee/e.length*100,W={from:F,to:j,count:ee,percentage:Pe};h.push(W),m=m.slice(H)}const f=[...h].sort((P,F)=>P.percentage-F.percentage),$=f[0].percentage,x=f[f.length-1].percentage,k=Math.abs($-x);return h.map(P=>({...P,height:P.percentage/k*100}))},bd=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},yd=[{extension:"lrc",minme:"application/octet-stream"}],wd={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:yd,is:bd,baseInfo:fd,getFrameSubset:md,frameData:gd,registryHistogram:vd},zo=Object.freeze(wd),xd={LrcParser:zo},qo=Object.values(xd),kd=(t,e)=>{const r=qo.find(i=>i.is(t,e));if(r===void 0)throw new Ho(2,e,`No parser found for '${e}'.`);return r};qo.map(t=>t.extensions);var _d=class Yo{constructor(e,r,i){g(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new Yo(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new Xn(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=kd(i,this.thermalUrl);return this.pocessTheService(new bi(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof Ho)return this.pocessTheService(Xn.fromError(s));throw s}}pocessTheService(e){return e}},$d=class{constructor(t){g(this,"requestsByUrl",new Map);g(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new Zs(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=_d.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},Sd=class extends pt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},Pd=class extends pt{constructor(){super(...arguments);g(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},Cd=class extends Wo{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},Od=class extends Mi{constructor(e,r,i,s){super();g(this,"hash",Math.random());g(this,"minmax",new Cd(this,void 0));g(this,"files",new Pd(this,[]));g(this,"cursorPosition",new Xu(this,void 0));g(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Ed=class extends pt{constructor(){super(...arguments);g(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new Od(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Ad=class extends pt{constructor(){super(...arguments);g(this,"_resolution",150);g(this,"buffer",new Map);g(this,"bufferPixelsCount",0);g(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,o)=>{let d=r.reduce((x,k)=>{const O=k.reduce((P,F)=>[...P,...F],[]);return[...x,...O]},[]).sort((x,k)=>x-k);const h=n/o;let m=i+h;const f=new Map;let $=0;for(;m!==!1;){const x=d.findIndex(P=>P>m),k=d.slice(0,x).length;f.set(m-h/2,k),$+=k,d=d.slice(x);const O=m+h;m=O<s?O:!1}return{result:f,resultCount:$}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(zo.registryHistogram,[r]);this.value=i}},Td=class extends pt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Rd=class extends Wo{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Dd=class extends Mi{constructor(e,r,i){super();g(this,"hash",Math.random());g(this,"groups",new Ed(this,[]));g(this,"opacity",new Sd(this,1));g(this,"minmax",new Rd(this,void 0));g(this,"loading",new Td(this,!1));g(this,"range",new Qu(this,void 0));g(this,"histogram",new Ad(this,[]));g(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),o=await Promise.all(s.map(u=>this.service.loadFile(u.thermalUrl,u.visibleUrl)));return{group:n,groupFiles:o}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async o=>o instanceof bi?await o.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof bi&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Zs=class extends Mi{constructor(e,r){super();g(this,"id");g(this,"service",new $d(this));g(this,"registries",{});g(this,"palette",new td(this,"jet"));g(this,"pool");this.pool=e||Gu.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Dd(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Go=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qn=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Go(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Md{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ld=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Kn extends Md{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=o=>{const u=o.composedPath()[0];o.context===this.context&&u!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,u,o.subscribe))},this.onProviderRequest=o=>{const u=o.composedPath()[0];if(o.context!==this.context||u===this.host)return;const d=new Set;for(const[h,{consumerHost:m}]of this.subscriptions)d.has(h)||(d.add(h),m.dispatchEvent(new Go(this.context,h,!0)));o.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ld(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function He({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Kn(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new Kn(o,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const o=new WeakMap;n={get(){return o.get(this)},set(u){i.get(this).setValue(u),o.set(this,u)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set(u){i.get(this).setValue(u),o==null||o.call(this,u)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new Qn(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new Qn(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let ci;const Ud=new Uint8Array(16);function Fd(){if(!ci&&(ci=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ci))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ci(Ud)}const Ye=[];for(let t=0;t<256;++t)Ye.push((t+256).toString(16).slice(1));function jd(t,e=0){return Ye[t[e+0]]+Ye[t[e+1]]+Ye[t[e+2]]+Ye[t[e+3]]+"-"+Ye[t[e+4]]+Ye[t[e+5]]+"-"+Ye[t[e+6]]+Ye[t[e+7]]+"-"+Ye[t[e+8]]+Ye[t[e+9]]+"-"+Ye[t[e+10]]+Ye[t[e+11]]+Ye[t[e+12]]+Ye[t[e+13]]+Ye[t[e+14]]+Ye[t[e+15]]}const Wd=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Zn={randomUUID:Wd};function Id(t,e,r){if(Zn.randomUUID&&!e&&!t)return Zn.randomUUID();t=t||{};const i=t.random||(t.rng||Fd)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,jd(i)}class Js extends st{constructor(){super(...arguments),this.UUID=Id()}log(...e){console.log(this.tagName,this.UUID,...e)}}const Xo="manager-instance",Ui="manager-palette-context",Nd=new Zs,Hd="__internal_default_registry",Bd="__internal_default_group",Vd=t=>t.addOrGetRegistry(Hd),zd=t=>t.groups.addOrGetGroup(Bd);var qd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Fi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yd(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&qd(e,r,s),s};let Jt=class extends Js{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Xt.jet}}connectedCallback(){super.connectedCallback();let t=Nd;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=Jt.sanitizeStringPalette(this.palette.key);e.palette=r,t=new Zs(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=Jt.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(Xt).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:Xt[t]}}render(){return U`<slot></slot>`}};Fi([He({context:Xo})],Jt.prototype,"manager",2);Fi([se({type:String,reflect:!0,attribute:!0})],Jt.prototype,"slug",2);Fi([He({context:Ui}),se({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:Xt[t]}),toAttribute:t=>t.key.toString()}})],Jt.prototype,"palette",2);Jt=Fi([Se("manager-provider")],Jt);var Gd=Object.defineProperty,Xd=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Gd(e,r,s),s};class en extends Js{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}Xd([je({context:Xo,subscribe:!0}),X()],en.prototype,"manager");const Qo="registry-instance",Ko="registry-opacity",Zo="registry-range-from",Jo="registry-range-to",Qd="registry-loading",ea="registry-min",ta="registry-max";var Kd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,Rt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zd(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Kd(e,r,s),s};let $t=class extends en{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=Vd(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e})}attributeChangedCallback(t,e,r){var i;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.imposeRange(n):s.imposeRange(n)}}if(t==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return U`<slot></slot>`}};Rt([se({type:String,reflect:!0,attribute:!0})],$t.prototype,"slug",2);Rt([He({context:Qo})],$t.prototype,"registry",2);Rt([He({context:Ko}),se({type:Number,reflect:!0,attribute:!0})],$t.prototype,"opacity",2);Rt([He({context:ea}),X()],$t.prototype,"min",2);Rt([He({context:ta}),X()],$t.prototype,"max",2);Rt([He({context:Zo}),se({type:Number,reflect:!0,attribute:!0})],$t.prototype,"from",2);Rt([He({context:Jo}),se({type:Number,reflect:!0,attribute:!0})],$t.prototype,"to",2);Rt([He({context:Qd}),se({type:String,reflect:!0,attribute:!0})],$t.prototype,"loading",2);$t=Rt([Se("registry-provider")],$t);var Jd=Object.defineProperty,eh=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Jd(e,r,s),s};class ft extends en{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}eh([je({context:Qo,subscribe:!0})],ft.prototype,"registry");const ra="group-instance";var th=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,tn=(t,e,r,i)=>{for(var s=i>1?void 0:i?rh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&th(e,r,s),s};let yi=class extends ft{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=zd(this.registry)}render(){return U`<slot></slot>`}};tn([se({type:String,attribute:!0,reflect:!0})],yi.prototype,"slug",2);tn([He({context:ra})],yi.prototype,"group",2);yi=tn([Se("group-provider")],yi);var ih=Object.defineProperty,sh=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&ih(e,r,s),s};class rn extends ft{constructor(){super()}connectedCallback(){super.connectedCallback()}}sh([je({context:ra,subscribe:!0})],rn.prototype,"group");const ia="file-provider-element",sa="playback",na="duration",oa="playing",aa="file",la="failure",ca="playbackSpeed",ua="recording",da="mayStop";var nh=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,Je=(t,e,r,i)=>{for(var s=i>1?void 0:i?oh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&nh(e,r,s),s};let Qe=class extends rn{constructor(){super(...arguments),this.element=this,this.loading=!1,this.playing=!1,this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.callbacks={success:new Map,failure:new Map,loading:new Map}}async load(){return this.loading=!0,this.callbacks.loading.forEach(e=>e()),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof bi?(this.reader=e,await this.reader.createInstance(this.group).then(r=>(this.file=r,this.callbacks.success.forEach(i=>i(r)),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r))):(this.error=e,this.callbacks.failure.forEach(r=>r(this.error)),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(t=>{if(t instanceof Bo){this.duration={ms:t.timeline.duration,time:t.timeline.formatDuration(t.timeline.duration)};const e=()=>{this.playing=!0},r=()=>{this.playing=!1};t.timeline.callbacksPlay.add(this.UUID,e),t.timeline.callbacksPause.add(this.UUID,r),t.timeline.callbacksStop.add(this.UUID,r),t.timeline.callbacksEnd.add(this.UUID,r),this.currentFrame={ms:t.timeline.currentMs,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:t.timeline.currentStep.index,absolute:t.timeline.currentStep.absolute},t.timeline.callbacksChangeFrame.add(this.UUID,i=>{this.currentFrame={ms:i.relative,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:i.index,absolute:i.absolute},this.ms=i.relative}),t.timeline.callbackdPlaybackSpeed.add(this.UUID,i=>this.playbackSpeed=i),t.recording.addListener(this.UUID,i=>this.recording=i),t.recording.callbackMayStop.add(this.UUID,i=>this.mayStop=i)}else this.failure=t})}attributeChangedCallback(t,e,r){var i,s,n;if(super.attributeChangedCallback(t,e,r),t==="ms"&&r&&this.duration&&this.currentFrame){const o=Math.min(this.duration.ms,Math.max(0,parseInt(r)));o!==this.currentFrame.ms&&((i=this.file)==null||i.timeline.setRelativeTime(o))}t==="playing"&&(r==="true"?(s=this.file)==null||s.timeline.play():r==="false"&&((n=this.file)==null||n.timeline.pause())),t==="playbackspeed"&&this.file&&r&&Object.keys(Ks).includes(r)&&(this.file.timeline.playbackSpeed=parseFloat(r)),t==="recording"&&this.file&&(this.recording===!0&&r==="false"?this.file.recording.end():this.recording===!1&&r==="true"&&this.file.recording.start())}registerSuccessCallback(t,e){this.callbacks.success.set(t,e)}registerFailureCallback(t,e){this.callbacks.failure.set(t,e)}clearCallbacks(){this.callbacks.success.clear(),this.callbacks.failure.clear(),this.callbacks.loading.clear()}render(){return U`<slot></slot>`}};Je([He({context:ia})],Qe.prototype,"element",2);Je([X()],Qe.prototype,"reader",2);Je([X()],Qe.prototype,"loading",2);Je([X()],Qe.prototype,"error",2);Je([He({context:oa}),se({type:String,reflect:!0,attribute:!0})],Qe.prototype,"playing",2);Je([He({context:na}),X()],Qe.prototype,"duration",2);Je([He({context:sa}),X()],Qe.prototype,"currentFrame",2);Je([se({type:Number,reflect:!0,attribute:!0})],Qe.prototype,"ms",2);Je([He({context:aa}),X()],Qe.prototype,"file",2);Je([He({context:la}),X()],Qe.prototype,"failure",2);Je([He({context:ca}),se({type:Number,reflect:!0,attribute:!0})],Qe.prototype,"playbackSpeed",2);Je([He({context:ua}),se({type:String,reflect:!0,attribute:!0})],Qe.prototype,"recording",2);Je([He({context:da}),X()],Qe.prototype,"mayStop",2);Je([se({type:String,attribute:!0,reflect:!0})],Qe.prototype,"thermal",2);Je([se({type:String,attribute:!0,reflect:!0})],Qe.prototype,"visible",2);Qe=Je([Se("file-provider")],Qe);var ah=Object.defineProperty,Pt=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&ah(e,r,s),s};class Ve extends rn{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.playing=!1,this.recording=!1,this.mayStop=!0}connectedCallback(){if(super.connectedCallback(),this.parentFileProviderElement)this.parentFileProviderElement.registerSuccessCallback(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.registerFailureCallback(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.registerSuccessCallback(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.registerFailureCallback(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Pt([je({context:ia,subscribe:!0}),X()],Ve.prototype,"parentFileProviderElement");Pt([X()],Ve.prototype,"loading");Pt([je({context:oa,subscribe:!0}),X()],Ve.prototype,"playing");Pt([je({context:na,subscribe:!0}),X()],Ve.prototype,"duration");Pt([je({context:sa,subscribe:!0}),X()],Ve.prototype,"currentFrame");Pt([je({context:aa,subscribe:!0}),X()],Ve.prototype,"file");Pt([je({context:la,subscribe:!0}),X()],Ve.prototype,"failure");Pt([je({context:ca,subscribe:!0}),X()],Ve.prototype,"playbackSpeed");Pt([je({context:ua,subscribe:!0}),X()],Ve.prototype,"recording");Pt([je({context:da,subscribe:!0}),X()],Ve.prototype,"mayStop");var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,uh=(t,e,r,i)=>{for(var s=i>1?void 0:i?ch(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&lh(e,r,s),s};let Us=class extends Ve{constructor(){super(...arguments),this.container=Ge()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return U`
            <div ${Xe(this.container)} class=${Rr(r)} part="file-canvas-container">
            
                ${this.loading===!0?U`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?U`<div class="error-wrapper">
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
                        </div>`:J}
            
            </div>
        
        `}};Us.styles=Ne`
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
    `;Us=uh([Se("file-canvas")],Us);var dh=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,ha=(t,e,r,i)=>{for(var s=i>1?void 0:i?hh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&dh(e,r,s),s};let wi=class extends ft{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return U`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return U`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Xt).map(([t,e])=>U`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};wi.styles=Ne`

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

    `;ha([je({context:Ui,subscribe:!0})],wi.prototype,"value",2);wi=ha([Se("registry-palette-dropdown")],wi);var ph=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,pa=(t,e,r,i)=>{for(var s=i>1?void 0:i?fh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ph(e,r,s),s};let xi=class extends ft{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return U`
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
        `}};xi.styles=Ne`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;pa([je({context:Ko,subscribe:!0})],xi.prototype,"value",2);xi=pa([Se("registry-opacity-slider")],xi);var mh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,vh=(t,e,r,i)=>{for(var s=i>1?void 0:i?gh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&mh(e,r,s),s};let Fs=class extends Ve{onInstanceCreated(t){}onFailure(t){}render(){return this.file?U`
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
        `:J}};Fs.styles=Ne`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Fs=vh([Se("file-share-button")],Fs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class js extends Ys{constructor(e){if(super(e),this.it=J,e.type!==zs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===J||e==null)return this._t=void 0,this.it=e;if(e===Wt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}js.directiveName="unsafeHTML",js.resultType=1;const vt=qs(js);var bh=Object.defineProperty,yh=Object.getOwnPropertyDescriptor,wh=(t,e,r,i)=>{for(var s=i>1?void 0:i?yh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&bh(e,r,s),s};let Ws=class extends Ve{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?U`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${vt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${vt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?vt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):J}

                        ${vt(this.renderRow("Time",id.human(this.file.timestamp)))}

                        ${vt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${vt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${vt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${vt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${vt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${vt(this.renderRow("Type",this.file.service.parser.name))}
                    ${vt(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>U`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:J}};Ws.styles=Ne`

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
    
    `;Ws=wh([Se("file-info-button")],Ws);var xh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,_h=(t,e,r,i)=>{for(var s=i>1?void 0:i?kh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&xh(e,r,s),s};let Jn=class extends ft{doAction(){this.registry.range.applyAuto()}render(){return U`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Jn=_h([Se("registry-range-auto-button")],Jn);var $h=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,Ph=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&$h(e,r,s),s};let eo=class extends ft{doAction(){this.registry.range.applyMinmax()}render(){return U`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};eo=Ph([Se("registry-range-full-button")],eo);var Ch=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,ji=(t,e,r,i)=>{for(var s=i>1?void 0:i?Oh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ch(e,r,s),s};let St=class extends ft{constructor(){super(...arguments),this.ticksRef=Ge(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/St.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return U`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Xe(this.ticksRef)}>

                    ${this.ticks.map(t=>U`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(St.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};St.TICK_WIDTH=40;St.TICK_FIXED=2;St.styles=Ne`

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


    `;ji([se({type:String,reflect:!0})],St.prototype,"placement",2);ji([X()],St.prototype,"minmax",2);ji([X()],St.prototype,"ticks",2);St=ji([Se("registry-ticks-bar")],St);var Eh=Object.defineProperty,Ah=Object.getOwnPropertyDescriptor,qr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ah(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Eh(e,r,s),s};let mr=class extends ft{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return U`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return U`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};qr([X()],mr.prototype,"minmax",2);qr([X()],mr.prototype,"range",2);qr([X()],mr.prototype,"opacity",2);qr([X()],mr.prototype,"palette",2);mr=qr([Se("registry-log")],mr);(()=>{var t=Object.defineProperty,e=Math.pow,r=(a,c,v)=>c in a?t(a,c,{enumerable:!0,configurable:!0,writable:!0,value:v}):a[c]=v,i=(a,c,v)=>(r(a,typeof c!="symbol"?c+"":c,v),v),s=(a,c)=>` ${c&&c.length>0?c.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${a} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",o="pointers-overlap",u="pointers-min-distance",d="pointers-max-distance",h="range-dragging",m="data",f="min",$="max",x="step",k="round",O="type",P="theme",F="rtl",j="btt",H="disabled",ue="keyboard-disabled",ee="mousewheel-disabled",Pe="slider-width",W="slider-height",me="slider-radius",ne="slider-bg",de="slider-bg-hover",ve="slider-bg-fill",he="pointer-width",ge="pointer-height",te="pointer-radius",be="pointer-bg",Ae="pointer-bg-hover",Ke="pointer-bg-focus",ze="pointer-shadow",xr="pointer-shadow-hover",rr="pointer-shadow-focus",Yr="pointer-border",Gr="pointer-border-hover",Ni="pointer-border-focus",Xr="animate-onclick",Hi="css-links",nt="vertical",Dt="horizontal",kr=(a,c,v,p,T)=>{let V=c-a;return V===0?v:(p-v)*(T-a)/V+v},mt=a=>!isNaN(parseFloat(a))&&isFinite(a),Te=(a,c)=>mt(a)?Number(a):c,Qr=(a,c)=>c===0?0:Math.round(a/c)*c,Bi=(a,c=1/0)=>{if(c===1/0)return a;let v=e(10,c);return Math.round(a*v)/v},We=a=>a==null?!1:typeof a=="boolean"?a:a.trim().toLowerCase()==="true",Vi=(a,c)=>{a.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:c}}))},zi=(a,c)=>{a.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:c}}))},qi=(a,c)=>{a.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:c}}))},Yi=(a,c)=>{a.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:c}}))},Gi=(a,c)=>{if(!c||c.length<=0)return;let v=c.map(T=>mt(T)?Te(T,T):T),p={values:v||[]};p.value=v[0],p.value0=v[0],p.value1=v[0];for(let T=1;T<v.length;T++)p[`value${T+1}`]=v[T];a.dispatchEvent(new CustomEvent("change",{detail:p}))},w=(a,c,v)=>{let p=0,T,V,Z,R,D=!1,re=(q,Oe,Be,Ie,Re,De)=>{let tt=p;Be!==void 0&&q>Be&&(q=Be),Oe!==void 0&&q<Oe&&(q=Oe),p=q;let rt=p;return(Ie===nt&&De||Ie===Dt&&Re)&&(rt=100-rt),Ie===nt?c.style.top=`${rt}%`:c.style.left=`${rt}%`,tt!==p},le=q=>q===c||c.contains(q),I=(q,Oe,Be,Ie)=>{T=q,V=Oe,Z=Be,R=Ie},_e=q=>{D=q,c.classList.toggle("disabled",D),D?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},ut=(q,Oe)=>{Oe==null?c.removeAttribute(q):c.setAttribute(q,Oe)},Ze=q=>c.getAttribute(q),z=q=>{if(!D){switch(q.key){case"ArrowLeft":{q.preventDefault(),typeof T=="function"&&T(v);break}case"ArrowRight":{q.preventDefault(),typeof V=="function"&&V(v);break}case"ArrowUp":{q.preventDefault(),typeof Z=="function"&&Z(v);break}case"ArrowDown":{q.preventDefault(),typeof R=="function"&&R(v);break}}Yi(a,q)}},ie=()=>{D||Vi(a,c)};return c.className=`pointer pointer-${v}`,c.addEventListener("keydown",z),c.addEventListener("click",ie),{$pointer:c,get percent(){return p},get disabled(){return D},set disabled(q){_e(q)},updatePosition:re,isClicked:le,setCallbacks:I,setAttr:ut,getAttr:Ze,destroy:()=>{c.removeEventListener("keydown",z),c.removeEventListener("click",ie),c.remove()}}},C=a=>{if(a==null)return;if(Array.isArray(a))return a;if(a.trim()==="")return;let c=a.split(","),v=[],p=!0;for(let T=0;T<c.length;T++){let V=c[T].trim();V!==""&&(v.push(V),mt(V)||(p=!1))}return p?v.map(T=>Number(T)):v},E=(a,c)=>c?c.findIndex(v=>v===a||v.toString().trim()===a.toString().trim()):-1,A=a=>({updatePosition:(c,v,p,T)=>{if(v.length<=0)return;let V=v.length===1,Z=v[0],R=v[v.length-1];c===nt?(a.style.removeProperty("width"),a.style.removeProperty("right"),a.style.removeProperty("left"),V?a.style.height=`${Z}%`:a.style.height=`${Math.abs(Z-R)}%`,T?(a.style.bottom="0%",V?a.style.top="auto":a.style.top=`${Math.min(100-R,100-Z)}%`):(a.style.bottom="auto",V?a.style.top="0%":a.style.top=`${Math.min(Z,R)}%`)):(a.style.removeProperty("height"),a.style.removeProperty("top"),a.style.removeProperty("bottom"),V?a.style.width=`${Z}%`:a.style.width=`${Math.abs(Z-R)}%`,p?(a.style.right="0%",V?a.style.left="auto":a.style.left=`${Math.min(100-R,100-Z)}%`):(a.style.right="auto",V?a.style.left="0%":a.style.left=`${Math.min(Z,R)}%`))}}),B="--animate-onclick",we="--width",G="--height",Ce="--panel-bg-border-radius",pe="--panel-bg",M="--panel-bg-hover",fe="--panel-bg-fill",y="--pointer-width",_="--pointer-height",Q="--pointer-border-radius",oe="--pointer-bg",Ue="--pointer-bg-hover",qe="--pointer-bg-focus",yt="--pointer-shadow",ot="--pointer-shadow-hover",ct="--pointer-shadow-focus",Mt="--pointer-border",N="--pointer-border-hover",K="--pointer-border-focus",S=(a,c,v)=>{let p=new Map;for(let T of a.attributes){let V=T.nodeName.trim().toLowerCase();if(!c.test(V))continue;let Z=V.replace(/\D/g,"").trim(),R=Z===""||Z==="0"||Z==="1"?0:Te(Z,0)-1,D=v&&typeof v=="function"?v(T.value):T.value;p.set(R,D)}return p},Y=a=>{if(!a)return null;let c=a.getAttribute(Hi);if(!c)return null;let v=c.split(";"),p=[];for(let T of v)T.trim()!==""&&p.push(T.trim());return p},xe=[[we,Pe,"sliderWidth",null],[G,W,"sliderHeight",null],[Ce,me,"sliderRadius",null],[pe,ne,"sliderBg",null],[M,de,"sliderBgHover",null],[fe,ve,"sliderBgFill",null],[y,he,"pointer#Width",/^pointer([0-9]*)-width$/],[_,ge,"pointer#Height",/^pointer([0-9]*)-height$/],[Q,te,"pointer#Radius",/^pointer([0-9]*)-radius$/],[oe,be,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ue,Ae,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[qe,Ke,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[yt,ze,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[ot,xr,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[ct,rr,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Mt,Yr,"pointer#Border",/^pointer([0-9]*)-border$/],[N,Gr,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[K,Ni,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ye=(a,c,v)=>{let p=null,T=[],V=new Map,Z=(z,ie=c)=>{let q=[...ie.classList];for(let Oe of q)Oe.startsWith(z)&&c.classList.remove(Oe)},R=()=>{Z("shape");let z=c.querySelectorAll(".pointer");for(let ie of z)Z("shape",ie)},D=z=>{p=z,Z("theme-"),typeof z=="string"&&c.classList.add(`theme-${z}`)},re=()=>{if(R(),!(T.length<=0)){c.classList.add("shape",`shape-${T[0]}`);for(let z=1;z<T.length;z++){let ie=T[z];if(!ie)continue;let q=c.querySelector(`.pointer-${z}`);!q||q.classList.add("shape",`shape-${ie}`)}}},le=(z,ie)=>{T[z]=ie,re()},I=()=>{R();let z=S(a,/^pointer([0-9]*)-shape$/);if(!(z.size<=0)){for(let ie of z){let q=ie[0];T[q]=ie[1]}re()}},_e=(z,ie)=>`${z}-${ie}`,ut=(z,ie,q)=>{let Oe=v[q];if(!Oe)return;let Be=q===0?c:Oe.$pointer;if(ie==null){V.has(_e(z,q))&&V.delete(_e(z,q)),Be.style.removeProperty(z);return}V.set(_e(z,q),ie),Be.style.setProperty(z,ie)},Ze=(z,ie)=>V.get(_e(z,ie));return(()=>{for(let z of xe){let[ie,q,Oe,Be]=z;if(Be){let Re=S(a,Be);for(let De of Re){let tt=De[0],rt=De[1];ut(ie,rt,tt)}}else{let Re=a.getAttribute(q);ut(ie,Re,0)}let Ie=[];if(Oe.indexOf("#")===-1)Ie.push([Oe,0]);else{Ie.push([Oe.replace("#",""),0]),Ie.push([Oe.replace("#","0"),0]),Ie.push([Oe.replace("#","1"),0]);for(let Re=1;Re<v.length;Re++)Ie.push([Oe.replace("#",(Re+1).toString()),Re])}for(let Re of Ie)try{let De=Re[0],tt=Re[1];Object.prototype.hasOwnProperty.call(a,De)||Object.defineProperty(a,De,{get(){return Ze(ie,tt)},set:rt=>{ut(ie,rt,tt)}})}catch(De){console.error(De)}}D(a.getAttribute(P)),I()})(),{setStyle:ut,getStyle:Ze,get theme(){return p},set theme(z){D(z)},get pointerShapes(){return T},setPointerShape:le}},Ee="animate-on-click",ae="range-dragging",et=(a,c,v,p)=>{let T=[],V=le=>{for(let I of T)I.update&&typeof I.update=="function"&&I.update(le)},Z=()=>{for(let le of T)le.destroy&&typeof le.destroy=="function"&&le.destroy()},R=(le,I)=>{for(let _e of T)_e.onAttrChange&&typeof _e.onAttrChange=="function"&&_e.onAttrChange(le,I)},D=le=>{if(le.gettersAndSetters){for(let I of le.gettersAndSetters)if(!(!I.name||!I.attributes))try{Object.prototype.hasOwnProperty.call(a,I.name)||Object.defineProperty(a,I.name,I.attributes)}catch(_e){console.error("defineSettersGetters error:",_e)}}},re=le=>{var I;if(!le.css)return;let _e=(I=a.shadowRoot)==null?void 0:I.querySelector("style");!_e||(_e.innerHTML+=le.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let le of window.tcRangeSliderPlugins){let I=le();T.push(I),I.init&&typeof I.init=="function"&&(I.init(a,c,v,p),D(I),re(I))}},update:V,onAttrChange:R,destroy:Z}},Fe=10,Kr=20,ba=(a,c)=>{let v=new Map,p=/^value([0-9]*)$/;for(let R of a.attributes){let D=R.nodeName.trim().toLowerCase();if(!p.test(D))continue;let re=D.replace("value","").trim(),le=re===""||re==="0"||re==="1"?0:Te(re,0)-1,I=mt(R.value)?Te(R.value,0):R.value;v.set(le,I)}let T=Math.max(...Array.from(v.keys())),V=[];V.push([w(a,c,0),v.get(0)]);let Z=c;for(let R=1;R<=T;R++){let D=c.cloneNode(!0);Z.after(D),Z=D,V.push([w(a,D,R),v.get(R)])}return V},on=(a,c,v,p,T,V,Z)=>{try{Object.defineProperty(a,p,{configurable:!0,get(){if(!c)return;let R=c.pointers[v];if(!R)return;let D=c.getTextValue(R.percent);return mt(D)?Te(D,D):D},set:R=>{c.pointers[v]?c==null||c.setValue(R,v):c==null||c.addPointer(R)}}),Object.defineProperty(a,T,{configurable:!0,get(){var R,D;return(D=(R=c==null?void 0:c.pointers[v])==null?void 0:R.getAttr("aria-label"))!=null?D:void 0},set:R=>{!c||c.setAriaLabel(v,R)}}),Object.defineProperty(a,V,{configurable:!0,get(){var R,D;return(D=(R=c==null?void 0:c.styles)==null?void 0:R.pointerShapes[v])!=null?D:null},set:R=>{!c||!c.styles||c.styles.setPointerShape(v,R)}}),Object.defineProperty(a,Z,{configurable:!0,get(){var R;return(R=c==null?void 0:c.pointers[v].disabled)!=null?R:!1},set:R=>{if(!c)return;let D=c==null?void 0:c.pointers[v];!D||(D.disabled=R)}})}catch(R){console.error(R)}},ya=(a,c)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let p=2;p<Fe;p++)v.push([`value${p}`,`ariaLabel${p}`,`pointer${p}Shape`,`pointer${p}Disabled`,p-1]);for(let p of v)on(a,c,p[4],p[0],p[1],p[2],p[3])},an=(a,c,v)=>{var p;let T=(p=v.shadowRoot)==null?void 0:p.querySelector(".container");if(T)for(let V of a)c?T.prepend(V.$pointer):T.append(V.$pointer)},wa=(a,c)=>{if(!(!c||a.length<=1)){for(let v of a)v.$pointer.style.zIndex=Kr.toString();c.$pointer.style.zIndex=(Kr*2).toString()}},Xi=0,_r=100,ir=2,ln="0.3s",xa=(a,c,v)=>{let p=v.map(l=>l[0]),T=null,V=null,Z=null,R=null,D=Xi,re=_r,le,I,_e=Dt,ut=ir,Ze=!1,z=!1,ie=!1,q=0,Oe=1/0,Be=!1,Ie,Re,De=!1,tt=!1,rt=!1,Lt=ln,cn=[],un=l=>{De||(l.preventDefault&&l.preventDefault(),Bt(l),window.addEventListener("mousemove",Bt),window.addEventListener("mouseup",Zr),zi(a,l))},Zr=l=>{De||(Ie=void 0,Re=void 0,window.removeEventListener("mousemove",Bt),window.removeEventListener("mouseup",Zr),Lt&&c.classList.add(Ee),qi(a,l))},$a=(l,b)=>{if(p.length<=0)return;if(p.length===1)return p[0].isClicked(l)&&Lt&&c.classList.remove(Ee),p[0];let L=Pa(l);if(Be){let ke=b,gt=ei(ke);gt!==void 0&&(ke=Qr(ke,gt)),L?(Ie=ke,Re=0,Lt&&c.classList.remove(Ee)):Ie!==void 0&&(Re=ke-Ie,Ie=ke)}if(!Sa(l)&&!L){for(let ke of p)if(!(!ke.isClicked(l)||ke.disabled))return Lt&&c.classList.remove(Ee),ke;for(let ke of p)if(T===ke)return ke}let $e=1/0,Me=null;for(let ke of p){if(ke.disabled)continue;let gt=Math.abs(b-ke.percent);gt<$e&&($e=gt,Me=ke)}return Me},dn=()=>p.findIndex(l=>T===l&&!l.disabled),Bt=l=>{let b;if(_e===nt){let{height:$e,top:Me}=c.getBoundingClientRect(),ke=l.type.indexOf("mouse")!==-1?l.clientY:l.touches[0].clientY;b=Math.min(Math.max(0,ke-Me),$e)*100/$e}else{let{width:$e,left:Me}=c.getBoundingClientRect(),ke=l.type.indexOf("mouse")!==-1?l.clientX:l.touches[0].clientX;b=Math.min(Math.max(0,ke-Me),$e)*100/$e}if((Ze||z)&&(b=100-b),T=$a(l.target,b),T&&wa(p,T),Be&&p.length>1&&Re!==void 0){let $e=p[0],Me=p[p.length-1],ke=$e.percent+Re<0,gt=Me.percent+Re>100;if(ke||gt)return;for(let li=0;li<p.length;li++)it(li,p[li].percent+Re);return}let L=dn();L!==-1&&(it(L,b),T==null||T.$pointer.focus())},Jr=l=>{if(De||document.activeElement!==a||T!=null&&T.disabled)return;l.stopPropagation(),l.preventDefault();let b=l.deltaY<0,L=Ze||z,$e=b?!L:L,Me=dn();Me!==-1&&($e?$r(Me,p[Me].percent):Sr(Me,p[Me].percent))},hn=l=>{De||tt||(_e===nt?z?it(l,100):it(l,0):Ze?Sr(l,p[l].percent):$r(l,p[l].percent))},pn=l=>{De||tt||(_e===nt?z?it(l,0):it(l,100):Ze?$r(l,p[l].percent):Sr(l,p[l].percent))},fn=l=>{De||tt||(_e===nt?z?Sr(l,p[l].percent):$r(l,p[l].percent):Ze?it(l,100):it(l,0))},mn=l=>{De||tt||(_e===nt?z?$r(l,p[l].percent):Sr(l,p[l].percent):Ze?it(l,0):it(l,100))},Sa=l=>l.classList.contains("panel"),Pa=l=>l.classList.contains("panel-fill"),$r=(l,b)=>{if(b===void 0)return;let L=ei(b);L==null&&(L=1),b-=L,b<0&&(b=0),it(l,b)},Sr=(l,b)=>{if(b===void 0)return;let L=ei(b);L==null&&(L=1),b+=L,b>100&&(b=100),it(l,b)},Vt=()=>{!R||R.update({percents:gn(),values:vn(),$pointers:bn(),min:yn(),max:wn(),data:Zi(),step:Ki(),round:es(),type:Ji(),textMin:ti(),textMax:ri(),rightToLeft:is(),bottomToTop:ss(),pointersOverlap:ls(),pointersMinDistance:ts(),pointersMaxDistance:rs(),rangeDragging:cs(),disabled:ns(),keyboardDisabled:os(),mousewheelDisabled:as()})},Ca=()=>{Vt()},Oa=l=>{if(!(ie||p.length<=1||re===D))if(l===0){let b=Oe*100/(re-D);return Math.max(0,p[l+1].percent-b)}else{let b=q*100/(re-D);return Math.min(p[l-1].percent+b,100)}},Ea=l=>{if(!(ie||p.length<=1||re===D))if(l===p.length-1){let b=Oe*100/(re-D);return Math.min(p[l-1].percent+b,100)}else{let b=q*100/(re-D);return Math.max(0,p[l+1].percent-b)}},ei=l=>{let b;if(typeof le=="function"){let L=kr(0,100,D,re,l);b=le(L,l)}else b=le;if(mt(b)){let L=re-D;return b=L===0?0:b*100/L,b}},sr=l=>{if(l===void 0)return;let b=kr(0,100,D,re,l);return I!==void 0?I[Math.round(b)]:Bi(b,ut)},ti=()=>I!==void 0?I[D]:D,ri=()=>I!==void 0?I[re]:re,Ki=()=>le,Aa=l=>{var b;return l<=0||ie?ti():(b=sr(p[l-1].percent))!=null?b:""},Ta=l=>{var b;return p.length<=1||l>=p.length-1||ie?ri():(b=sr(p[l+1].percent))!=null?b:""},gn=()=>p.map(l=>l.percent),vn=()=>p.map(l=>sr(l.percent)),bn=()=>p.map(l=>l.$pointer),yn=()=>D,wn=()=>re,Zi=()=>I,Ji=()=>_e,es=()=>ut,ts=()=>q,rs=()=>Oe,Ra=l=>cn[l],is=()=>Ze,ss=()=>z,ns=()=>De,os=()=>tt,as=()=>rt,ls=()=>ie,cs=()=>Be,it=(l,b)=>{if(b===void 0)return;let L=ei(b);L!==void 0&&(b=Qr(b,L));let $e=p[l];if(!$e)return;let Me=$e.updatePosition(b,Oa(l),Ea(l),_e,Ze,z);V==null||V.updatePosition(_e,p.map(ke=>ke.percent),Ze,z),Vt();for(let ke of p){let gt=sr(ke.percent);gt!==void 0&&(ke.setAttr("aria-valuenow",gt.toString()),ke.setAttr("aria-valuetext",gt.toString()))}Ma(),Me&&Gi(a,p.map(ke=>sr(ke.percent)))},wt=()=>{for(let l=0;l<p.length;l++)it(l,p[l].percent)},Da=(l,b)=>{D=I!==void 0?0:Te(l,Xi),re=I!==void 0?I.length-1:Te(b,_r),ii(D),si(re)},Ma=()=>{var l,b;for(let L=0;L<p.length;L++){let $e=p[L];$e.setAttr("aria-valuemin",((l=Aa(L))!=null?l:"").toString()),$e.setAttr("aria-valuemax",((b=Ta(L))!=null?b:"").toString())}},ii=l=>{D=Te(l,Xi),D>re&&(re=D+_r),wt()},si=l=>{re=Te(l,_r),re<D&&(re=D+_r),wt()},xn=l=>{ie=!0;for(let b=0;b<l.length;b++)ni(l[b],b);ie=!1;for(let b=0;b<l.length;b++)ni(l[b],b)},ni=(l,b)=>{let L;I!==void 0?(L=l==null?0:E(l,I),L===-1&&(L=0)):(L=Te(l,D),L<D&&(L=D),L>re&&(L=re));let $e=kr(D,re,0,100,L);it(b,$e)},oi=l=>{if(l==null){le=void 0;return}if(typeof l=="function"){le=l,wt();return}if(mt(l)){le=Te(l,1);let b=Math.abs(re-D);le>b&&(le=void 0),wt();return}le=void 0},us=l=>{ie=l,wt()},ds=l=>{(!mt(l)||l<0)&&(l=0),q=l},hs=l=>{(!mt(l)||l<0)&&(l=1/0),Oe=l},ps=l=>{De=l,c.classList.toggle("disabled",De),De?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},kn=l=>{tt=l},_n=l=>{rt=l,rt?document.removeEventListener("wheel",Jr):document.addEventListener("wheel",Jr,{passive:!1})},fs=l=>{if(l==null){I=void 0;return}if(I=C(l),I===void 0||I.length<=0){I=void 0;return}ii(0),si(I.length-1),le===void 0&&oi(1)},ms=l=>{var b;typeof l=="string"?_e=l.trim().toLowerCase()===nt?nt:Dt:_e=Dt;let L=(b=a.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!L)return;L.className=`range-slider-box type-${_e}`,wt();let $e=_e===nt?"vertical":"horizontal";for(let Me of p)Me.setAttr("aria-orientation",$e)},gs=l=>{Ze=l,p.length>1&&an(p,Ze,a),wt(),Vt()},vs=l=>{z=l,p.length>1&&an(p,z,a),wt(),Vt()},bs=l=>{ut=Te(l,ir),ut<0&&(ut=ir),Vt()},$n=l=>{l==null||l.toString().trim().toLowerCase()==="false"?(Lt=void 0,c.style.removeProperty(B),c.classList.remove(Ee)):(Lt=l.toString(),c.style.setProperty(B,Lt),c.classList.add(Ee))},Sn=(l,b)=>{let L=p[l];!L||(L.setAttr("aria-label",b),cn[l]=b)},ai=l=>{if(Ie=void 0,p.length<=1){Be=!1,c.classList.remove(ae);return}Be=l,c.classList.toggle(ae,Be)},La=()=>{ps(We(a.getAttribute(H))),tt=We(a.getAttribute(ue)),rt=We(a.getAttribute(ee));let l=S(a,/^pointer([0-9]*)-disabled$/,b=>We(b));for(let b of l){let L=b[0];!p[L]||(p[L].disabled=b[1])}},Ua=()=>{let l=S(a,/^aria-label([0-9]*)$/);for(let b of l){let L=b[0];Sn(L,b[1])}},Fa=l=>{let b=p.length,L=p[b-1].$pointer,$e=L.cloneNode(!0);L.after($e);let Me=w(a,$e,b);return Me.setCallbacks(hn,pn,fn,mn),p.push(Me),ni(l,b),wt(),Vt(),b},ja=()=>{let l=p.length,b=p[l-1];return b?(b.destroy(),p.pop(),p.length<=1&&ai(!1),wt(),Vt(),l-1):-1};return(()=>{var l,b;for(let $e of p)$e.setCallbacks(hn,pn,fn,mn);let L=(l=a.shadowRoot)==null?void 0:l.querySelector(".panel-fill");L&&(V=A(L)),ms(a.getAttribute(O)),gs(We(a.getAttribute(F))),vs(We(a.getAttribute(j))),Da(a.getAttribute(f),a.getAttribute($)),oi(a.getAttribute(x)),fs(a.getAttribute(m)),xn(v.map($e=>$e[1])),us(We(a.getAttribute(o))),ds(Te(a.getAttribute(u),0)),hs(Te(a.getAttribute(d),1/0)),ai(We(a.getAttribute(h))),bs(Te(a.getAttribute(k),ir)),La(),Ua(),Z=ye(a,c,p),$n((b=a.getAttribute(Xr))!=null?b:ln),c.addEventListener("mousedown",un),c.addEventListener("mouseup",Zr),c.addEventListener("touchmove",Bt),c.addEventListener("touchstart",Bt),rt||document.addEventListener("wheel",Jr,{passive:!1}),R=et(a,Ca,{setValues:xn,setMin:ii,setMax:si,setStep:oi,setPointersOverlap:us,setPointersMinDistance:ds,setPointersMaxDistance:hs,setDisabled:ps,setType:ms,setRightToLeft:gs,setBottomToTop:vs,setRound:bs,setKeyboardDisabled:kn,setMousewheelDisabled:_n,setRangeDragging:ai,setData:fs},{getPercents:gn,getValues:vn,getPointerElements:bn,getMin:yn,getMax:wn,getStep:Ki,getData:Zi,getType:Ji,getRound:es,getTextMin:ti,getTextMax:ri,isRightToLeft:is,isBottomToTop:ss,isDisabled:ns,isKeyboardDisabled:os,isMousewheelDisabled:as,isPointersOverlap:ls,isRangeDraggingEnabled:cs,getPointersMinDistance:ts,getPointersMaxDistance:rs}),R.init()})(),{get pointers(){return p},get styles(){return Z},get pluginsManager(){return R},get min(){return ti()},get max(){return ri()},get step(){return Ki()},get pointersOverlap(){return ls()},set pointersOverlap(l){us(l)},get pointersMinDistance(){return ts()},set pointersMinDistance(l){ds(l)},get pointersMaxDistance(){return rs()},set pointersMaxDistance(l){hs(l)},get disabled(){return ns()},set disabled(l){ps(l)},get data(){return Zi()},get type(){return Ji()},set type(l){ms(l)},get rightToLeft(){return is()},set rightToLeft(l){gs(l)},get bottomToTop(){return ss()},set bottomToTop(l){vs(l)},get round(){return es()},set round(l){bs(l)},get animateOnClick(){return Lt},set animateOnClick(l){$n(l)},get keyboardDisabled(){return os()},set keyboardDisabled(l){kn(l)},get mousewheelDisabled(){return as()},set mousewheelDisabled(l){_n(l)},get rangeDragging(){return cs()},set rangeDragging(l){ai(l)},setMin:ii,setMax:si,setValue:ni,setStep:oi,setData:fs,getTextValue:sr,setAriaLabel:Sn,getAriaLabel:Ra,addPointer:Fa,removePointer:ja,destroy:()=>{c.removeEventListener("mousedown",un),c.removeEventListener("mouseup",Zr),c.removeEventListener("touchmove",Bt),c.removeEventListener("touchstart",Bt),document.removeEventListener("wheel",Jr);for(let l of p)l.destroy();R==null||R.destroy()}}},ka=(a,c,v)=>{let p=xe.find(([R,D,re,le])=>D.replace("#","")===c.replace(/\d+/g,""));if(p&&a.styles){let[R,D,re,le]=p,I=c.replace(/\D/g,"").trim(),_e=I===""||I==="0"||I==="1"?0:Te(I,0)-1;a.styles.setStyle(R,v,_e);return}switch(a&&a.pluginsManager&&a.pluginsManager.onAttrChange(c,v),c){case f:{a.setMin(v);break}case $:{a.setMax(v);break}case x:{a.setStep(v);break}case o:{a.pointersOverlap=We(v);break}case u:{a.pointersMinDistance=Te(v,0);break}case h:{a.rangeDragging=We(v);break}case d:{a.pointersMaxDistance=Te(v,1/0);break}case H:{a.disabled=We(v);break}case ue:{a.keyboardDisabled=We(v);break}case ee:{a.mousewheelDisabled=We(v);break}case m:{a.setData(v);break}case O:{a.type=v;break}case F:{a.rightToLeft=We(v);break}case j:{a.bottomToTop=We(v);break}case k:{a.round=Te(v,ir);break}case P:{a.styles&&(a.styles.theme=v);break}case Xr:{a.animateOnClick=v;break}}let T=null;if(/^value([0-9]*)$/.test(c)&&(T="value"),/^pointer([0-9]*)-disabled$/.test(c)&&(T="pointer-disabled"),/^aria-label([0-9]*)$/.test(c)&&(T="aria-label"),/^pointer([0-9]*)-shape$/.test(c)&&(T="pointer-shape"),!T)return;let V=c.replace(/\D/g,"").trim(),Z=V===""||V==="0"||V==="1"?0:Te(V,0)-1;switch(T){case"value":{a.setValue(v,Z);break}case"pointer-disabled":{let R=a==null?void 0:a.pointers[Z];if(!R)return;R.disabled=We(v);break}case"aria-label":{a.setAriaLabel(Z,v);break}case"pointer-shape":{a.styles&&a.styles.setPointerShape(Z,v);break}}},_a=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(a){this.slider&&this.slider.setStep(a)}get step(){var a;return(a=this.slider)==null?void 0:a.step}set disabled(a){this.slider&&(this.slider.disabled=a)}get disabled(){var a,c;return(c=(a=this.slider)==null?void 0:a.disabled)!=null?c:!1}set data(a){var c;(c=this.slider)==null||c.setData(a)}get data(){var a;return(a=this.slider)==null?void 0:a.data}set min(a){var c;(c=this.slider)==null||c.setMin(a)}get min(){var a;return(a=this.slider)==null?void 0:a.min}set max(a){var c;(c=this.slider)==null||c.setMax(a)}get max(){var a;return(a=this.slider)==null?void 0:a.max}set round(a){!this.slider||(this.slider.round=a)}get round(){var a,c;return(c=(a=this.slider)==null?void 0:a.round)!=null?c:ir}set type(a){!this.slider||(this.slider.type=a??Dt)}get type(){var a;return((a=this.slider)==null?void 0:a.type)||Dt}set pointersOverlap(a){!this.slider||(this.slider.pointersOverlap=a)}get pointersOverlap(){var a,c;return(c=(a=this.slider)==null?void 0:a.pointersOverlap)!=null?c:!1}set pointersMinDistance(a){!this.slider||(this.slider.pointersMinDistance=a)}get pointersMinDistance(){var a,c;return(c=(a=this.slider)==null?void 0:a.pointersMinDistance)!=null?c:0}set pointersMaxDistance(a){!this.slider||(this.slider.pointersMaxDistance=a)}get pointersMaxDistance(){var a,c;return(c=(a=this.slider)==null?void 0:a.pointersMaxDistance)!=null?c:1/0}set theme(a){!this.slider||!this.slider.styles||(this.slider.styles.theme=a)}get theme(){var a,c,v;return(v=(c=(a=this.slider)==null?void 0:a.styles)==null?void 0:c.theme)!=null?v:null}set rtl(a){!this.slider||(this.slider.rightToLeft=a)}get rtl(){var a,c;return(c=(a=this.slider)==null?void 0:a.rightToLeft)!=null?c:!1}set btt(a){!this.slider||(this.slider.bottomToTop=a)}get btt(){var a,c;return(c=(a=this.slider)==null?void 0:a.bottomToTop)!=null?c:!1}set keyboardDisabled(a){!this.slider||(this.slider.keyboardDisabled=a)}get keyboardDisabled(){var a,c;return(c=(a=this.slider)==null?void 0:a.keyboardDisabled)!=null?c:!1}set mousewheelDisabled(a){!this.slider||(this.slider.mousewheelDisabled=a)}get mousewheelDisabled(){var a,c;return(c=(a=this.slider)==null?void 0:a.mousewheelDisabled)!=null?c:!1}set animateOnClick(a){!this.slider||(this.slider.animateOnClick=a)}get animateOnClick(){var a;return(a=this.slider)==null?void 0:a.animateOnClick}get rangeDragging(){var a,c;return(c=(a=this.slider)==null?void 0:a.rangeDragging)!=null?c:!1}set rangeDragging(a){this.slider&&(this.slider.rangeDragging=We(a))}get externalCSSList(){return this._externalCSSList}addPointer(a){var c,v;if(!this.slider)return;let p=(v=(c=this.slider)==null?void 0:c.addPointer(a))!=null?v:0;on(this,this.slider,p,`value${p+1}`,`ariaLabel${p+1}`,`pointerShape${p+1}`,`pointer${p+1}Disabled`)}removePointer(){var a;!this.slider||(a=this.slider)==null||a.removePointer()}addCSS(a){if(!this.shadowRoot)return;let c=document.createElement("style");c.textContent=a,this.shadowRoot.appendChild(c)}connectedCallback(){var a,c;if(!this.shadowRoot)return;this._externalCSSList=Y(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(a=this.shadowRoot)==null?void 0:a.querySelector(".pointer");if(!v)return;let p=(c=this.shadowRoot)==null?void 0:c.getElementById("range-slider");if(!p)return;let T=ba(this,v);this.slider=xa(this,p,T),ya(this,this.slider),this._observer=new MutationObserver(V=>{V.forEach(Z=>{var R;if(!this.slider||Z.type!=="attributes")return;let D=Z.attributeName;!D||ka(this.slider,D,(R=this.getAttribute(D))!=null?R:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Qi=_a;window.tcRangeSlider=Qi,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Qi),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Qi{})})();(()=>{var t=(u,d,h,m,f)=>{let $=d-u;return $===0?h:(m-h)*(f-u)/$+h},e=u=>!isNaN(parseFloat(u))&&isFinite(u),r=(u,d)=>e(u)?Number(u):d,i=u=>u==null?!1:typeof u=="boolean"?u:u.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,o=()=>{let u=null,d=null,h=null,m=null,f=null,$=!1,x=s,k=n,O=()=>{var W;let me=(W=u==null?void 0:u.shadowRoot)==null?void 0:W.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),h.append(m),f=document.createElement("div"),f.classList.add("mark-values"),h.append(f),me.append(h)},P=()=>{!d||!h||h.classList.toggle("is-reversed",d.isRightToLeft()||d.isBottomToTop())},F=()=>{var W;if(!h||!d)return;let me=d.getMin(),ne=d.getMax(),de=d.getType()==="vertical",ve=d.isRightToLeft()||d.isBottomToTop();for(let ge=0;ge<x;ge++){let te=document.createElement("div");te.classList.add("mark",`mark-${ge}`);let be=x===0?0:ge*100/(x-1);de?ve?te.style.top=`${100-be}%`:te.style.top=`${be}%`:ve?te.style.left=`${100-be}%`:te.style.left=`${be}%`,m==null||m.append(te)}let he=d.getData();for(let ge=0;ge<k;ge++){let te=document.createElement("div");te.classList.add("mark-value",`mark-value-${ge}`);let be=k===0?0:ge*100/(k-1),Ae=t(0,k-1,me,ne,ge);te.textContent=(he?(W=he[Math.round(Ae)])!=null?W:"":Ae).toString(),de?ve?te.style.top=`${100-be}%`:te.style.top=`${be}%`:ve?te.style.left=`${100-be}%`:te.style.left=`${be}%`,f==null||f.append(te)}},j=(W,me)=>{Pe(),x=W,k=me,x<=0&&(x=s),k<=0&&(k=n),O(),F(),P()},H=W=>{$=W,$?(O(),F(),P()):Pe()},ue=W=>{!h||h.style.setProperty("--marks-color",W)},ee=W=>{!h||h.style.setProperty("--values-color",W)},Pe=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(W,me,ne,de)=>{var ve,he;d=de,u=W,$=i(u.getAttribute("marks")),$&&(j(r(u.getAttribute("marks-count"),s),r(u.getAttribute("marks-values-count"),n)),ue((ve=u.getAttribute("marks-color"))!=null?ve:"#cbd5e1"),ee((he=u.getAttribute("marks-values-color"))!=null?he:"#475569"))},onAttrChange:(W,me)=>{W==="marks"&&H(i(me)),W==="marks-count"&&j(r(me,s),k),W==="marks-values-count"&&j(x,r(me,n)),W==="marks-color"&&ue(me),W==="marks-values-color"&&ee(me)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return $??!1},set:W=>{H(i(W))}}},{name:"marksCount",attributes:{get(){return x??s},set:W=>{j(r(W,s),k)}}},{name:"marksValuesCount",attributes:{get(){return x??s},set:W=>{j(x,r(W,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:W=>{ue(W)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:W=>{ee(W)}}}],destroy:Pe,css:`
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
    `}};window.tcRangeSliderPlugins.push(o)})();var Th=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,Ct=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Th(e,r,s),s};let dt=class extends ft{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Ge(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.imposeRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?U`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:U`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Xe(this.sliderRef)}
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

        `}};dt.styles=Ne`

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
    
    `;Ct([je({context:ea,subscribe:!0}),X()],dt.prototype,"min",2);Ct([je({context:ta,subscribe:!0}),X()],dt.prototype,"max",2);Ct([je({context:Zo,subscribe:!0}),X()],dt.prototype,"from",2);Ct([je({context:Jo,subscribe:!0}),X()],dt.prototype,"to",2);Ct([X()],dt.prototype,"hasFixedFrom",2);Ct([X()],dt.prototype,"hasFixedTo",2);Ct([je({context:Ui,subscribe:!0}),X()],dt.prototype,"palette",2);Ct([X()],dt.prototype,"sliderRef",2);Ct([X()],dt.prototype,"initialised",2);dt=Ct([Se("registry-range-slider")],dt);var Dh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,Lh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Dh(e,r,s),s};let Is=class extends Ve{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?J:U`

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

                    ${this.file.timeline.isSequence?U`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:J}
            
            </thermal-dropdown>

        
        `}};Is.styles=Ne`

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
    
    `;Is=Lh([Se("file-download-dropdown")],Is);var Uh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Wi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Uh(e,r,s),s};let gr=class extends ft{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return U`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":J}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>U`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():U`
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
        `}};gr.styles=Ne`

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


    `;Wi([X()],gr.prototype,"histogram",2);Wi([se({type:Boolean,reflect:!0})],gr.prototype,"interactive",2);Wi([se({type:String,reflect:!0})],gr.prototype,"height",2);gr=Wi([Se("registry-histogram")],gr);var jh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,sn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&jh(e,r,s),s};let er=class extends Ve{constructor(){super(...arguments),this.timelineRef=Ge(),this.barRef=Ge(),this.containerRef=Ge(),this.collapsed=!1,this.highlights=[]}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<er.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}recieveHighlights(t){this.highlights=t}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.log(r),this.file.timeline.setValueByPercent(r)}}render(){var n,o,u;const t=this.file;if(t===void 0)return J;if(t.duration===0)return J;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return U`
            <div class="${Rr(e)}" ${Xe(this.containerRef)}>


                ${t!==void 0?U`
                        <div class="container">

                            <div class="${Rr(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?U`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:U`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>

                            <div class="${Rr(s)}" @click=${this.handleBarClick.bind(this)} ${Xe(this.timelineRef)}>
                                <div class="timeline-bar">
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Xe(this.barRef)}></div>
                                </div>
                                <div class="timeline-marks">
                                    ${this.highlights.length>0?this.highlights.map(d=>{const h=d.fromMs/t.duration*100,m=(d.toMs-d.fromMs)/t.duration*100;return U`
                                        <div class="mark" style="left: ${h}%; width: ${m}%"></div>
                                    `}):J}
                                </div>
                            </div>

                            <div class="item inline small">${(o=this.duration)==null?void 0:o.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:J}

            
            
            </div>

            ${this.currentFrame!==void 0?U`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${Wr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${Wr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(u=this.file)==null?void 0:u.frameCount}</span>
                        </div>
                    </div>`:J}

          `}};er.collapseWidth=500;er.styles=Ne`
    
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
            background: var( --thermal-slate );
            height: var( --thermal-gap );
            cursor: pointer;
        }
        .timeline-bar {
            width: 100%;
            height: 100%;
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
    
    `;sn([X()],er.prototype,"collapsed",2);sn([X()],er.prototype,"highlights",2);er=sn([Se("file-timeline")],er);var Ih=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,fa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Nh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ih(e,r,s),s};let ki=class extends Ve{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?J:U`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Ks).map(([t])=>U`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof Tt&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};ki.styles=Ne`

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
    
    `;fa([se({type:String,reflect:!0})],ki.prototype,"enabled",2);ki=fa([Se("file-playback-speed-dropdown")],ki);var Hh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,ma=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Hh(e,r,s),s};let _i=class extends ft{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return U`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return U`
            <div class="container">
                ${Object.entries(Xt).map(([t,e])=>U`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};_i.styles=Ne`

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

    `;ma([je({context:Ui,subscribe:!0}),X()],_i.prototype,"value",2);_i=ma([Se("registry-palette-buttons")],_i);var Vh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,ga=(t,e,r,i)=>{for(var s=i>1?void 0:i?zh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Vh(e,r,s),s};let Ns=class extends Ve{connectedCallback(){super.connectedCallback()}onInstanceCreated(t){}onFailure(t){}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.log(t,e,r)}willUpdate(t){super.willUpdate(t)}render(){return this.file===void 0&&this.failure===void 0?this.renderLoading():this.file!==void 0?this.renderSuccess():this.renderFailure()}renderLoading(){return U`<div>Načítám</div>`}renderSuccess(){var t;return U`<div>${(t=this.file)==null?void 0:t.fileName}</div>`}renderFailure(){var t;return U`<div>${(t=this.failure)==null?void 0:t.message}</div>`}};ga([se({type:String,attribute:!0,reflect:!0})],Ns.prototype,"uuid",2);Ns=ga([Se("test-component")],Ns);var qh=Object.defineProperty,Yh=Object.getOwnPropertyDescriptor,Ii=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&qh(e,r,s),s};let vr=class extends Ve{onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return U`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar slot="bar">
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              <file-share-button ></file-share-button>
              <app-info-button ></app-info-button>
            </thermal-bar>
          </div>
            
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>

            
            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
        </thermal-app>
    `}};vr.styles=Ne`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }
  
  `;Ii([se({type:Number})],vr.prototype,"from",2);Ii([se({type:Number})],vr.prototype,"to",2);Ii([se({type:Number})],vr.prototype,"speed",2);vr=Ii([Se("file-app")],vr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs=t=>t??J;var Gh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,wr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Gh(e,r,s),s};let tr=class extends Js{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?J:U`

    <manager-provider id="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider id="registry_${this.UUID}">

        <group-provider id="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${Cs(this.from)} to=${Cs(this.to)} speed=${Cs(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};wr([se({type:String,reflect:!0})],tr.prototype,"palette",2);wr([se({type:Number})],tr.prototype,"from",2);wr([se({type:Number})],tr.prototype,"to",2);wr([se({type:Number,reflect:!0})],tr.prototype,"speed",2);wr([se({type:String,reflect:!0})],tr.prototype,"url",2);tr=wr([Se("thermal-file-app")],tr);const Os=window.matchMedia("(prefers-color-scheme: dark)"),nn="thermal-dark-mode",to=()=>{document.body.classList.add(nn)},Qh=()=>{document.body.classList.remove(nn)},Kh=()=>{Os.matches&&to();const t=e=>{e.matches?to():Qh()};Os.addEventListener("change",t),Os.addListener(t)},Zh=ao.version.toString().replaceAll(".","-"),va=t=>`thermal__${t}__${Zh}`,Jh=t=>document.getElementById(va(t))!==null,ro=(t,e)=>{if(!Jh(t)){const r=document.createElement("style");r.setAttribute("id",va(t)),r.innerHTML=e,document.head.appendChild(r)}},ep=()=>{ro("rootVariables",`

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


            
        
        `),ro("darkModeOverrides",`
        
            body.${nn} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${so}
    Author: ${oo}
    Repository: ${no.url}
    `);Kh();ep();document.addEventListener("DOMContentLoaded",()=>{});
