var uo=Object.defineProperty;var ho=(t,e,r)=>e in t?uo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var g=(t,e,r)=>(ho(t,typeof e!="symbol"?e+"":e,r),r);const po="@labir/embed",js="1.2.24",fo="Embedded display of thermograms",mo="dist/embed.js",go="module",Us={type:"git",url:"https://github.com/moichim/labir"},vo={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},Ws="Jan Jáchim <jachim5@gmail.com>",bo="ISC",yo={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@types/uuid":"^9.0.8","date-fns":"^3.6.0",lit:"^3.1.4","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11",workerpool:"^9.1.3"},wo={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},Ns={name:po,version:js,description:fo,main:mo,type:go,repository:Us,scripts:vo,author:Ws,license:bo,dependencies:yo,devDependencies:wo};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr=globalThis,En=Kr.ShadowRoot&&(Kr.ShadyCSS===void 0||Kr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,An=Symbol(),os=new WeakMap;let Is=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==An)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(En&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=os.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&os.set(r,e))}return e}toString(){return this.cssText}};const xo=t=>new Is(typeof t=="string"?t:t+"",void 0,An),Ie=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,n,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1],t[0]);return new Is(r,t,An)},ko=(t,e)=>{if(En)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),n=Kr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,t.appendChild(i)}},ls=En?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return xo(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_o,defineProperty:$o,getOwnPropertyDescriptor:Po,getOwnPropertyNames:So,getOwnPropertySymbols:Co,getPrototypeOf:Oo}=Object,Et=globalThis,cs=Et.trustedTypes,Eo=cs?cs.emptyScript:"",tn=Et.reactiveElementPolyfillSupport,br=(t,e)=>t,Zr={toAttribute(t,e){switch(e){case Boolean:t=t?Eo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Tn=(t,e)=>!_o(t,e),us={attribute:!0,type:String,converter:Zr,reflect:!1,hasChanged:Tn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Et.litPropertyMetadata??(Et.litPropertyMetadata=new WeakMap);class Kt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=us){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,r);n!==void 0&&$o(this.prototype,e,n)}}static getPropertyDescriptor(e,r,i){const{get:n,set:s}=Po(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return n==null?void 0:n.call(this)},set(a){const u=n==null?void 0:n.call(this);s.call(this,a),this.requestUpdate(e,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??us}static _$Ei(){if(this.hasOwnProperty(br("elementProperties")))return;const e=Oo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(br("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(br("properties"))){const r=this.properties,i=[...So(r),...Co(r)];for(const n of i)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)r.unshift(ls(n))}else e!==void 0&&r.push(ls(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ko(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const a=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Zr).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,r){var s;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Zr;this._$Em=n,this[n]=u.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Tn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,a]of n)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[br("elementProperties")]=new Map,Kt[br("finalized")]=new Map,tn==null||tn({ReactiveElement:Kt}),(Et.reactiveElementVersions??(Et.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr=globalThis,Jr=yr.trustedTypes,hs=Jr?Jr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Hs="$lit$",Ot=`lit$${Math.random().toFixed(9).slice(2)}$`,Bs="?"+Ot,Ao=`<${Bs}>`,Nt=document,xr=()=>Nt.createComment(""),kr=t=>t===null||typeof t!="object"&&typeof t!="function",Vs=Array.isArray,To=t=>Vs(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",rn=`[ 	
\f\r]`,fr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ds=/-->/g,ps=/>/g,jt=RegExp(`>|${rn}(?:([^\\s"'>=/]+)(${rn}*=${rn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fs=/'/g,ms=/"/g,zs=/^(?:script|style|textarea|title)$/i,Do=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),W=Do(1),At=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),gs=new WeakMap,Wt=Nt.createTreeWalker(Nt,129);function qs(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return hs!==void 0?hs.createHTML(e):e}const Mo=(t,e)=>{const r=t.length-1,i=[];let n,s=e===2?"<svg>":"",a=fr;for(let u=0;u<r;u++){const h=t[u];let d,m,f=-1,S=0;for(;S<h.length&&(a.lastIndex=S,m=a.exec(h),m!==null);)S=a.lastIndex,a===fr?m[1]==="!--"?a=ds:m[1]!==void 0?a=ps:m[2]!==void 0?(zs.test(m[2])&&(n=RegExp("</"+m[2],"g")),a=jt):m[3]!==void 0&&(a=jt):a===jt?m[0]===">"?(a=n??fr,f=-1):m[1]===void 0?f=-2:(f=a.lastIndex-m[2].length,d=m[1],a=m[3]===void 0?jt:m[3]==='"'?ms:fs):a===ms||a===fs?a=jt:a===ds||a===ps?a=fr:(a=jt,n=void 0);const x=a===jt&&t[u+1].startsWith("/>")?" ":"";s+=a===fr?h+Ao:f>=0?(i.push(d),h.slice(0,f)+Hs+h.slice(f)+Ot+x):h+Ot+(f===-2?u:x)}return[qs(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class _r{constructor({strings:e,_$litType$:r},i){let n;this.parts=[];let s=0,a=0;const u=e.length-1,h=this.parts,[d,m]=Mo(e,r);if(this.el=_r.createElement(d,i),Wt.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(n=Wt.nextNode())!==null&&h.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const f of n.getAttributeNames())if(f.endsWith(Hs)){const S=m[a++],x=n.getAttribute(f).split(Ot),k=/([.?@])?(.*)/.exec(S);h.push({type:1,index:s,name:k[2],strings:x,ctor:k[1]==="."?Ro:k[1]==="?"?Fo:k[1]==="@"?jo:ui}),n.removeAttribute(f)}else f.startsWith(Ot)&&(h.push({type:6,index:s}),n.removeAttribute(f));if(zs.test(n.tagName)){const f=n.textContent.split(Ot),S=f.length-1;if(S>0){n.textContent=Jr?Jr.emptyScript:"";for(let x=0;x<S;x++)n.append(f[x],xr()),Wt.nextNode(),h.push({type:2,index:++s});n.append(f[S],xr())}}}else if(n.nodeType===8)if(n.data===Bs)h.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(Ot,f+1))!==-1;)h.push({type:7,index:s}),f+=Ot.length-1}s++}}static createElement(e,r){const i=Nt.createElement("template");return i.innerHTML=e,i}}function Jt(t,e,r=t,i){var a,u;if(e===At)return e;let n=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const s=kr(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((u=n==null?void 0:n._$AO)==null||u.call(n,!1),s===void 0?n=void 0:(n=new s(t),n._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=n:r._$Cl=n),n!==void 0&&(e=Jt(t,n._$AS(t,e.values),n,i)),e}class Lo{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??Nt).importNode(r,!0);Wt.currentNode=n;let s=Wt.nextNode(),a=0,u=0,h=i[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Or(s,s.nextSibling,this,e):h.type===1?d=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(d=new Uo(s,this,e)),this._$AV.push(d),h=i[++u]}a!==(h==null?void 0:h.index)&&(s=Wt.nextNode(),a++)}return Wt.currentNode=Nt,n}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class Or{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,n){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Jt(this,e,r),kr(e)?e===J||e==null||e===""?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==At&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):To(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==J&&kr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Nt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=_r.createElement(qs(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(r);else{const a=new Lo(n,this),u=a.u(this.options);a.p(r),this.T(u),this._$AH=a}}_$AC(e){let r=gs.get(e.strings);return r===void 0&&gs.set(e.strings,r=new _r(e)),r}k(e){Vs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of e)n===r.length?r.push(i=new Or(this.S(xr()),this.S(xr()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class ui{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,n,s){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(e,r=this,i,n){const s=this.strings;let a=!1;if(s===void 0)e=Jt(this,e,r,0),a=!kr(e)||e!==this._$AH&&e!==At,a&&(this._$AH=e);else{const u=e;let h,d;for(e=s[0],h=0;h<s.length-1;h++)d=Jt(this,u[i+h],r,h),d===At&&(d=this._$AH[h]),a||(a=!kr(d)||d!==this._$AH[h]),d===J?e=J:e!==J&&(e+=(d??"")+s[h+1]),this._$AH[h]=d}a&&!n&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ro extends ui{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}}class Fo extends ui{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}}class jo extends ui{constructor(e,r,i,n,s){super(e,r,i,n,s),this.type=5}_$AI(e,r=this){if((e=Jt(this,e,r,0)??J)===At)return;const i=this._$AH,n=e===J&&i!==J||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==J&&(i===J||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Uo{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Jt(this,e)}}const nn=yr.litHtmlPolyfillSupport;nn==null||nn(_r,Or),(yr.litHtmlVersions??(yr.litHtmlVersions=[])).push("3.1.4");const Wo=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(r==null?void 0:r.renderBefore)??null;i._$litPart$=n=new Or(e.insertBefore(xr(),s),s,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ge=class extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wo(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return At}};var Fs;Ge._$litElement$=!0,Ge.finalized=!0,(Fs=globalThis.litElementHydrateSupport)==null||Fs.call(globalThis,{LitElement:Ge});const sn=globalThis.litElementPolyfillSupport;sn==null||sn({LitElement:Ge});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const No={attribute:!0,type:String,converter:Zr,reflect:!1,hasChanged:Tn},Io=(t=No,e,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(u){const h=e.get.call(this);e.set.call(this,u),this.requestUpdate(a,h,t)},init(u){return u!==void 0&&this.P(a,void 0,t),u}}}if(i==="setter"){const{name:a}=r;return function(u){const h=this[a];e.call(this,u),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+i)};function Oe(t){return(e,r)=>typeof r=="object"?Io(t,e,r):((i,n,s)=>{const a=n.hasOwnProperty(s);return n.constructor.createProperty(s,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(n,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ke(t){return Oe({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ho=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hi(t){return(e,r)=>{const{slot:i,selector:n}=t??{},s="slot"+(i?`[name=${i}]`:":not([name])");return Ho(e,r,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(s),u=(a==null?void 0:a.assignedElements(t))??[];return n===void 0?u:u.filter(d=>d.matches(n))}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mn=t=>(...e)=>({_$litDirective$:t,values:e});let Ln=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const n of r)(i=n._$AO)==null||i.call(n,e,!1),wr(n,e);return!0},ei=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Ys=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),qo(e)}};function Vo(t){this._$AN!==void 0?(ei(this),this._$AM=t,Ys(this)):this._$AM=t}function zo(t,e=!1,r=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let s=r;s<i.length;s++)wr(i[s],!1),ei(i[s]);else i!=null&&(wr(i,!1),ei(i));else wr(this,t)}const qo=t=>{t.type==Dn.CHILD&&(t._$AP??(t._$AP=zo),t._$AQ??(t._$AQ=Vo))};class Yo extends Ln{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Ys(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),r&&(wr(this,e),ei(this))}setValue(e){if(Bo(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=()=>new Go;class Go{}const an=new WeakMap,Qe=Mn(class extends Yo{render(t){return J}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),J}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=an.get(e);r===void 0&&(r=new WeakMap,an.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=an.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Xo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Gs=(t,e,r,i)=>{for(var n=i>1?void 0:i?Qo(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Xo(e,r,n),n};let ti=class extends Ge{constructor(){super(),this.dialogRef=Xe(),this.closeButtonRef=Xe(),this.invokerRef=Xe()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return W`
            <slot name="invoker" ${Qe(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Qe(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Qe(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};ti.styles=Ie`

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

        
    
    `;Gs([Oe({type:String,reflect:!0})],ti.prototype,"label",2);ti=Gs([$e("thermal-dialog")],ti);var Ko=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,di=(t,e,r,i)=>{for(var n=i>1?void 0:i?Zo(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ko(e,r,n),n};let Tt=class extends Ge{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return W`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Tt.VARIANTS=["slate","primary","foreground","background"];Tt.styles=Ie`

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
    
    `;di([Oe({type:String,converter:{fromAttribute:t=>Tt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Tt.prototype,"variant",2);di([Oe({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],Tt.prototype,"interactive",2);di([Oe({type:String})],Tt.prototype,"size",2);Tt=di([$e("thermal-button")],Tt);const er=Math.min,xt=Math.max,ri=Math.round,Dt=t=>({x:t,y:t}),Jo={left:"right",right:"left",bottom:"top",top:"bottom"},el={start:"end",end:"start"};function vs(t,e,r){return xt(t,er(e,r))}function Er(t,e){return typeof t=="function"?t(e):t}function kt(t){return t.split("-")[0]}function pi(t){return t.split("-")[1]}function Xs(t){return t==="x"?"y":"x"}function Qs(t){return t==="y"?"height":"width"}function Ar(t){return["top","bottom"].includes(kt(t))?"y":"x"}function Ks(t){return Xs(Ar(t))}function tl(t,e,r){r===void 0&&(r=!1);const i=pi(t),n=Ks(t),s=Qs(n);let a=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=ii(a)),[a,ii(a)]}function rl(t){const e=ii(t);return[dn(t),e,dn(e)]}function dn(t){return t.replace(/start|end/g,e=>el[e])}function il(t,e,r){const i=["left","right"],n=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?n:i:e?i:n;case"left":case"right":return e?s:a;default:return[]}}function nl(t,e,r,i){const n=pi(t);let s=il(kt(t),r==="start",i);return n&&(s=s.map(a=>a+"-"+n),e&&(s=s.concat(s.map(dn)))),s}function ii(t){return t.replace(/left|right|bottom|top/g,e=>Jo[e])}function sl(t){return{top:0,right:0,bottom:0,left:0,...t}}function Zs(t){return typeof t!="number"?sl(t):{top:t,right:t,bottom:t,left:t}}function tr(t){const{x:e,y:r,width:i,height:n}=t;return{width:i,height:n,top:r,left:e,right:e+i,bottom:r+n,x:e,y:r}}function bs(t,e,r){let{reference:i,floating:n}=t;const s=Ar(e),a=Ks(e),u=Qs(a),h=kt(e),d=s==="y",m=i.x+i.width/2-n.width/2,f=i.y+i.height/2-n.height/2,S=i[u]/2-n[u]/2;let x;switch(h){case"top":x={x:m,y:i.y-n.height};break;case"bottom":x={x:m,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:f};break;case"left":x={x:i.x-n.width,y:f};break;default:x={x:i.x,y:i.y}}switch(pi(e)){case"start":x[a]-=S*(r&&d?-1:1);break;case"end":x[a]+=S*(r&&d?-1:1);break}return x}const al=async(t,e,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:a}=r,u=s.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let d=await a.getElementRects({reference:t,floating:e,strategy:n}),{x:m,y:f}=bs(d,i,h),S=i,x={},k=0;for(let O=0;O<u.length;O++){const{name:P,fn:F}=u[O],{x:U,y:H,data:le,reset:Z}=await F({x:m,y:f,initialPlacement:i,placement:S,strategy:n,middlewareData:x,rects:d,platform:a,elements:{reference:t,floating:e}});m=U??m,f=H??f,x={...x,[P]:{...x[P],...le}},Z&&k<=50&&(k++,typeof Z=="object"&&(Z.placement&&(S=Z.placement),Z.rects&&(d=Z.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:n}):Z.rects),{x:m,y:f}=bs(d,S,h)),O=-1)}return{x:m,y:f,placement:S,strategy:n,middlewareData:x}};async function Js(t,e){var r;e===void 0&&(e={});const{x:i,y:n,platform:s,rects:a,elements:u,strategy:h}=t,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:S=!1,padding:x=0}=Er(e,t),k=Zs(x),P=u[S?f==="floating"?"reference":"floating":f],F=tr(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(P)))==null||r?P:P.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(u.floating)),boundary:d,rootBoundary:m,strategy:h})),U=f==="floating"?{x:i,y:n,width:a.floating.width,height:a.floating.height}:a.reference,H=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u.floating)),le=await(s.isElement==null?void 0:s.isElement(H))?await(s.getScale==null?void 0:s.getScale(H))||{x:1,y:1}:{x:1,y:1},Z=tr(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:U,offsetParent:H,strategy:h}):U);return{top:(F.top-Z.top+k.top)/le.y,bottom:(Z.bottom-F.bottom+k.bottom)/le.y,left:(F.left-Z.left+k.left)/le.x,right:(Z.right-F.right+k.right)/le.x}}const ol=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:n,middlewareData:s,rects:a,initialPlacement:u,platform:h,elements:d}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:S,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:O=!0,...P}=Er(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const F=kt(n),U=kt(u)===u,H=await(h.isRTL==null?void 0:h.isRTL(d.floating)),le=S||(U||!O?[ii(u)]:rl(u));!S&&k!=="none"&&le.push(...nl(u,O,k,H));const Z=[u,...le],Pe=await Js(e,P),j=[];let pe=((i=s.flip)==null?void 0:i.overflows)||[];if(m&&j.push(Pe[F]),f){const ue=tl(n,a,H);j.push(Pe[ue[0]],Pe[ue[1]])}if(pe=[...pe,{placement:n,overflows:j}],!j.every(ue=>ue<=0)){var ie,ce;const ue=(((ie=s.flip)==null?void 0:ie.index)||0)+1,fe=Z[ue];if(fe)return{data:{index:ue,overflows:pe},reset:{placement:fe}};let ee=(ce=pe.filter(ge=>ge.overflows[0]<=0).sort((ge,Ae)=>ge.overflows[1]-Ae.overflows[1])[0])==null?void 0:ce.placement;if(!ee)switch(x){case"bestFit":{var me;const ge=(me=pe.map(Ae=>[Ae.placement,Ae.overflows.filter(qe=>qe>0).reduce((qe,He)=>qe+He,0)]).sort((Ae,qe)=>Ae[1]-qe[1])[0])==null?void 0:me[0];ge&&(ee=ge);break}case"initialPlacement":ee=u;break}if(n!==ee)return{reset:{placement:ee}}}return{}}}};function ea(t){const e=er(...t.map(s=>s.left)),r=er(...t.map(s=>s.top)),i=xt(...t.map(s=>s.right)),n=xt(...t.map(s=>s.bottom));return{x:e,y:r,width:i-e,height:n-r}}function ll(t){const e=t.slice().sort((n,s)=>n.y-s.y),r=[];let i=null;for(let n=0;n<e.length;n++){const s=e[n];!i||s.y-i.y>i.height/2?r.push([s]):r[r.length-1].push(s),i=s}return r.map(n=>tr(ea(n)))}const cl=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:n,platform:s,strategy:a}=e,{padding:u=2,x:h,y:d}=Er(t,e),m=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(i.reference))||[]),f=ll(m),S=tr(ea(m)),x=Zs(u);function k(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&d!=null)return f.find(P=>h>P.left-x.left&&h<P.right+x.right&&d>P.top-x.top&&d<P.bottom+x.bottom)||S;if(f.length>=2){if(Ar(r)==="y"){const ce=f[0],me=f[f.length-1],ue=kt(r)==="top",fe=ce.top,ee=me.bottom,ge=ue?ce.left:me.left,Ae=ue?ce.right:me.right,qe=Ae-ge,He=ee-fe;return{top:fe,bottom:ee,left:ge,right:Ae,width:qe,height:He,x:ge,y:fe}}const P=kt(r)==="left",F=xt(...f.map(ce=>ce.right)),U=er(...f.map(ce=>ce.left)),H=f.filter(ce=>P?ce.left===U:ce.right===F),le=H[0].top,Z=H[H.length-1].bottom,Pe=U,j=F,pe=j-Pe,ie=Z-le;return{top:le,bottom:Z,left:Pe,right:j,width:pe,height:ie,x:Pe,y:le}}return S}const O=await s.getElementRects({reference:{getBoundingClientRect:k},floating:i.floating,strategy:a});return n.reference.x!==O.reference.x||n.reference.y!==O.reference.y||n.reference.width!==O.reference.width||n.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function ul(t,e){const{placement:r,platform:i,elements:n}=t,s=await(i.isRTL==null?void 0:i.isRTL(n.floating)),a=kt(r),u=pi(r),h=Ar(r)==="y",d=["left","top"].includes(a)?-1:1,m=s&&h?-1:1,f=Er(e,t);let{mainAxis:S,crossAxis:x,alignmentAxis:k}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return u&&typeof k=="number"&&(x=u==="end"?k*-1:k),h?{x:x*m,y:S*d}:{x:S*d,y:x*m}}const hl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:n,y:s,placement:a,middlewareData:u}=e,h=await ul(e,t);return a===((r=u.offset)==null?void 0:r.placement)&&(i=u.arrow)!=null&&i.alignmentOffset?{}:{x:n+h.x,y:s+h.y,data:{...h,placement:a}}}}},dl=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:n}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:u={fn:P=>{let{x:F,y:U}=P;return{x:F,y:U}}},...h}=Er(t,e),d={x:r,y:i},m=await Js(e,h),f=Ar(kt(n)),S=Xs(f);let x=d[S],k=d[f];if(s){const P=S==="y"?"top":"left",F=S==="y"?"bottom":"right",U=x+m[P],H=x-m[F];x=vs(U,x,H)}if(a){const P=f==="y"?"top":"left",F=f==="y"?"bottom":"right",U=k+m[P],H=k-m[F];k=vs(U,k,H)}const O=u.fn({...e,[S]:x,[f]:k});return{...O,data:{x:O.x-r,y:O.y-i}}}}};function ar(t){return ta(t)?(t.nodeName||"").toLowerCase():"#document"}function st(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Lt(t){var e;return(e=(ta(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ta(t){return t instanceof Node||t instanceof st(t).Node}function vt(t){return t instanceof Element||t instanceof st(t).Element}function bt(t){return t instanceof HTMLElement||t instanceof st(t).HTMLElement}function ys(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof st(t).ShadowRoot}function Tr(t){const{overflow:e,overflowX:r,overflowY:i,display:n}=dt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(n)}function pl(t){return["table","td","th"].includes(ar(t))}function fi(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Rn(t){const e=Fn(),r=dt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function fl(t){let e=Mt(t);for(;bt(e)&&!rr(e);){if(fi(e))return null;if(Rn(e))return e;e=Mt(e)}return null}function Fn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rr(t){return["html","body","#document"].includes(ar(t))}function dt(t){return st(t).getComputedStyle(t)}function mi(t){return vt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Mt(t){if(ar(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ys(t)&&t.host||Lt(t);return ys(e)?e.host:e}function ra(t){const e=Mt(t);return rr(e)?t.ownerDocument?t.ownerDocument.body:t.body:bt(e)&&Tr(e)?e:ra(e)}function pn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=ra(t),s=n===((i=t.ownerDocument)==null?void 0:i.body),a=st(n);return s?e.concat(a,a.visualViewport||[],Tr(n)?n:[],a.frameElement&&r?pn(a.frameElement):[]):e.concat(n,pn(n,[],r))}function ia(t){const e=dt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=bt(t),s=n?t.offsetWidth:r,a=n?t.offsetHeight:i,u=ri(r)!==s||ri(i)!==a;return u&&(r=s,i=a),{width:r,height:i,$:u}}function na(t){return vt(t)?t:t.contextElement}function Zt(t){const e=na(t);if(!bt(e))return Dt(1);const r=e.getBoundingClientRect(),{width:i,height:n,$:s}=ia(e);let a=(s?ri(r.width):r.width)/i,u=(s?ri(r.height):r.height)/n;return(!a||!Number.isFinite(a))&&(a=1),(!u||!Number.isFinite(u))&&(u=1),{x:a,y:u}}const ml=Dt(0);function sa(t){const e=st(t);return!Fn()||!e.visualViewport?ml:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function gl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==st(t)?!1:e}function $r(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),s=na(t);let a=Dt(1);e&&(i?vt(i)&&(a=Zt(i)):a=Zt(t));const u=gl(s,r,i)?sa(s):Dt(0);let h=(n.left+u.x)/a.x,d=(n.top+u.y)/a.y,m=n.width/a.x,f=n.height/a.y;if(s){const S=st(s),x=i&&vt(i)?st(i):i;let k=S,O=k.frameElement;for(;O&&i&&x!==k;){const P=Zt(O),F=O.getBoundingClientRect(),U=dt(O),H=F.left+(O.clientLeft+parseFloat(U.paddingLeft))*P.x,le=F.top+(O.clientTop+parseFloat(U.paddingTop))*P.y;h*=P.x,d*=P.y,m*=P.x,f*=P.y,h+=H,d+=le,k=st(O),O=k.frameElement}}return tr({width:m,height:f,x:h,y:d})}function vl(t){let{elements:e,rect:r,offsetParent:i,strategy:n}=t;const s=n==="fixed",a=Lt(i),u=e?fi(e.floating):!1;if(i===a||u&&s)return r;let h={scrollLeft:0,scrollTop:0},d=Dt(1);const m=Dt(0),f=bt(i);if((f||!f&&!s)&&((ar(i)!=="body"||Tr(a))&&(h=mi(i)),bt(i))){const S=$r(i);d=Zt(i),m.x=S.x+i.clientLeft,m.y=S.y+i.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-h.scrollLeft*d.x+m.x,y:r.y*d.y-h.scrollTop*d.y+m.y}}function bl(t){return Array.from(t.getClientRects())}function aa(t){return $r(Lt(t)).left+mi(t).scrollLeft}function yl(t){const e=Lt(t),r=mi(t),i=t.ownerDocument.body,n=xt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=xt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+aa(t);const u=-r.scrollTop;return dt(i).direction==="rtl"&&(a+=xt(e.clientWidth,i.clientWidth)-n),{width:n,height:s,x:a,y:u}}function wl(t,e){const r=st(t),i=Lt(t),n=r.visualViewport;let s=i.clientWidth,a=i.clientHeight,u=0,h=0;if(n){s=n.width,a=n.height;const d=Fn();(!d||d&&e==="fixed")&&(u=n.offsetLeft,h=n.offsetTop)}return{width:s,height:a,x:u,y:h}}function xl(t,e){const r=$r(t,!0,e==="fixed"),i=r.top+t.clientTop,n=r.left+t.clientLeft,s=bt(t)?Zt(t):Dt(1),a=t.clientWidth*s.x,u=t.clientHeight*s.y,h=n*s.x,d=i*s.y;return{width:a,height:u,x:h,y:d}}function ws(t,e,r){let i;if(e==="viewport")i=wl(t,r);else if(e==="document")i=yl(Lt(t));else if(vt(e))i=xl(e,r);else{const n=sa(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return tr(i)}function oa(t,e){const r=Mt(t);return r===e||!vt(r)||rr(r)?!1:dt(r).position==="fixed"||oa(r,e)}function kl(t,e){const r=e.get(t);if(r)return r;let i=pn(t,[],!1).filter(u=>vt(u)&&ar(u)!=="body"),n=null;const s=dt(t).position==="fixed";let a=s?Mt(t):t;for(;vt(a)&&!rr(a);){const u=dt(a),h=Rn(a);!h&&u.position==="fixed"&&(n=null),(s?!h&&!n:!h&&u.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Tr(a)&&!h&&oa(t,a))?i=i.filter(m=>m!==a):n=u,a=Mt(a)}return e.set(t,i),i}function _l(t){let{element:e,boundary:r,rootBoundary:i,strategy:n}=t;const a=[...r==="clippingAncestors"?fi(e)?[]:kl(e,this._c):[].concat(r),i],u=a[0],h=a.reduce((d,m)=>{const f=ws(e,m,n);return d.top=xt(f.top,d.top),d.right=er(f.right,d.right),d.bottom=er(f.bottom,d.bottom),d.left=xt(f.left,d.left),d},ws(e,u,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function $l(t){const{width:e,height:r}=ia(t);return{width:e,height:r}}function Pl(t,e,r){const i=bt(e),n=Lt(e),s=r==="fixed",a=$r(t,!0,s,e);let u={scrollLeft:0,scrollTop:0};const h=Dt(0);if(i||!i&&!s)if((ar(e)!=="body"||Tr(n))&&(u=mi(e)),i){const f=$r(e,!0,s,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else n&&(h.x=aa(n));const d=a.left+u.scrollLeft-h.x,m=a.top+u.scrollTop-h.y;return{x:d,y:m,width:a.width,height:a.height}}function on(t){return dt(t).position==="static"}function xs(t,e){return!bt(t)||dt(t).position==="fixed"?null:e?e(t):t.offsetParent}function la(t,e){const r=st(t);if(fi(t))return r;if(!bt(t)){let n=Mt(t);for(;n&&!rr(n);){if(vt(n)&&!on(n))return n;n=Mt(n)}return r}let i=xs(t,e);for(;i&&pl(i)&&on(i);)i=xs(i,e);return i&&rr(i)&&on(i)&&!Rn(i)?r:i||fl(t)||r}const Sl=async function(t){const e=this.getOffsetParent||la,r=this.getDimensions,i=await r(t.floating);return{reference:Pl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Cl(t){return dt(t).direction==="rtl"}const Ol={convertOffsetParentRelativeRectToViewportRelativeRect:vl,getDocumentElement:Lt,getClippingRect:_l,getOffsetParent:la,getElementRects:Sl,getClientRects:bl,getDimensions:$l,getScale:Zt,isElement:vt,isRTL:Cl},El=hl,Al=dl,Tl=ol,Dl=cl,Ml=(t,e,r)=>{const i=new Map,n={platform:Ol,...r},s={...n.platform,_c:i};return al(t,e,{...n,platform:s})};var Ll=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,gi=(t,e,r,i)=>{for(var n=i>1?void 0:i?Rl(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ll(e,r,n),n};let It=class extends Ge{constructor(){super(...arguments),this.dropdownRef=Xe(),this.invokerRef=Xe(),this.optionsRef=Xe(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Ml(this.invokerRef.value,this.optionsRef.value,{middleware:[El(2),Tl(),Dl(),Al()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,n,s,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(n=this.dropdownRef.value)==null||n.classList.add("dropdown__open")):((s=this.optionsRef.value)==null||s.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){return W`

            <div class="dropdown" ${Qe(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${Qe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?W`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:W`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Qe(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};It.styles=Ie`

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
    
    `;gi([hi({slot:"option"})],It.prototype,"_options",2);gi([Oe({type:String,reflect:!0})],It.prototype,"open",2);gi([Oe({type:String,reflect:!0})],It.prototype,"variant",2);It=gi([$e("thermal-dropdown")],It);var Fl=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,vi=(t,e,r,i)=>{for(var n=i>1?void 0:i?jl(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Fl(e,r,n),n};let ir=class extends Ge{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Xe(),this.contentRef=Xe(),this.rulerContentRef=Xe()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return W`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Qe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Qe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Qe(this.contentRef)}>

                    ${this.collapsed===!1?W`
                        <slot></slot>    
                    `:J}
                
                </div>

            </div>

            ${this.collapsed?W`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:J}
        
        `}};ir.styles=Ie`

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

    `;vi([ke()],ir.prototype,"collapsed",2);vi([ke()],ir.prototype,"lastContentWidth",2);vi([ke()],ir.prototype,"drawerRef",2);ir=vi([$e("thermal-bar")],ir);var Ul=Object.defineProperty,Wl=Object.getOwnPropertyDescriptor,Dr=(t,e,r,i)=>{for(var n=i>1?void 0:i?Wl(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ul(e,r,n),n};let Ht=class extends Ge{constructor(){super(...arguments),this.fullscreen="off",this.appRef=Xe()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){console.log("fullscreen"),this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return W`

        <div class="container" ${Qe(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?W`
            <div class="bar">
                <slot name="bar"></slot>
                <thermal-button slot="bar" @click=${this.toggleFullscreen.bind(this)}>
                <div style="width: calc( var( --thermal-gap ) * .9 );line-height: 0;">
                ${this.fullscreen==="on"?W`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:W`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
            </div> 
        `:""}

        ${this.pre.length>=0?W`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content">
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

        </div>
        
        `}};Ht.styles=Ie`

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
        }
    
    `;Dr([hi({slot:"bar",flatten:!0})],Ht.prototype,"barItems",2);Dr([hi({slot:"bar",flatten:!0})],Ht.prototype,"barElements",2);Dr([hi({slot:"pre",flatten:!0})],Ht.prototype,"pre",2);Dr([Oe({type:String,reflect:!0})],Ht.prototype,"fullscreen",2);Ht=Dr([$e("thermal-app")],Ht);var Nl=Object.defineProperty,Il=Object.getOwnPropertyDescriptor,Hl=(t,e,r,i)=>{for(var n=i>1?void 0:i?Il(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Nl(e,r,n),n};let fn=class extends Ge{render(){return W`
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
                        <p>version ${Ns.version}</p>
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
        `}};fn.styles=Ie`

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
    
    `;fn=Hl([$e("app-info-button")],fn);function lt(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Bt(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const ca=6048e5,Bl=864e5;let Vl={};function bi(){return Vl}function Pr(t,e){var u,h,d,m;const r=bi(),i=(e==null?void 0:e.weekStartsOn)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,n=lt(t),s=n.getDay(),a=(s<i?7:0)+s-i;return n.setDate(n.getDate()-a),n.setHours(0,0,0,0),n}function ni(t){return Pr(t,{weekStartsOn:1})}function ua(t){const e=lt(t),r=e.getFullYear(),i=Bt(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const n=ni(i),s=Bt(t,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const a=ni(s);return e.getTime()>=n.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function ks(t){const e=lt(t);return e.setHours(0,0,0,0),e}function _s(t){const e=lt(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function zl(t,e){const r=ks(t),i=ks(e),n=+r-_s(r),s=+i-_s(i);return Math.round((n-s)/Bl)}function ql(t){const e=ua(t),r=Bt(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),ni(r)}function Yl(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ha(t){if(!Yl(t)&&typeof t!="number")return!1;const e=lt(t);return!isNaN(Number(e))}function Gl(t){const e=lt(t),r=Bt(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Xl={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ql=(t,e,r)=>{let i;const n=Xl[t];return typeof n=="string"?i=n:e===1?i=n.one:i=n.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function ln(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const Kl={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Zl={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Jl={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ec={date:ln({formats:Kl,defaultWidth:"full"}),time:ln({formats:Zl,defaultWidth:"full"}),dateTime:ln({formats:Jl,defaultWidth:"full"})},tc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},rc=(t,e,r,i)=>tc[t];function mr(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let n;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,u=r!=null&&r.width?String(r.width):a;n=t.formattingValues[u]||t.formattingValues[a]}else{const a=t.defaultWidth,u=r!=null&&r.width?String(r.width):t.defaultWidth;n=t.values[u]||t.values[a]}const s=t.argumentCallback?t.argumentCallback(e):e;return n[s]}}const ic={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},nc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},sc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ac={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},oc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},lc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},cc=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},uc={ordinalNumber:cc,era:mr({values:ic,defaultWidth:"wide"}),quarter:mr({values:nc,defaultWidth:"wide",argumentCallback:t=>t-1}),month:mr({values:sc,defaultWidth:"wide"}),day:mr({values:ac,defaultWidth:"wide"}),dayPeriod:mr({values:oc,defaultWidth:"wide",formattingValues:lc,defaultFormattingWidth:"wide"})};function gr(t){return(e,r={})=>{const i=r.width,n=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=e.match(n);if(!s)return null;const a=s[0],u=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(u)?dc(u,f=>f.test(a)):hc(u,f=>f.test(a));let d;d=t.valueCallback?t.valueCallback(h):h,d=r.valueCallback?r.valueCallback(d):d;const m=e.slice(a.length);return{value:d,rest:m}}}function hc(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function dc(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function pc(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const n=i[0],s=e.match(t.parsePattern);if(!s)return null;let a=t.valueCallback?t.valueCallback(s[0]):s[0];a=r.valueCallback?r.valueCallback(a):a;const u=e.slice(n.length);return{value:a,rest:u}}}const fc=/^(\d+)(th|st|nd|rd)?/i,mc=/\d+/i,gc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},vc={any:[/^b/i,/^(a|c)/i]},bc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},yc={any:[/1/i,/2/i,/3/i,/4/i]},wc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},xc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},_c={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$c={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Pc={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Sc={ordinalNumber:pc({matchPattern:fc,parsePattern:mc,valueCallback:t=>parseInt(t,10)}),era:gr({matchPatterns:gc,defaultMatchWidth:"wide",parsePatterns:vc,defaultParseWidth:"any"}),quarter:gr({matchPatterns:bc,defaultMatchWidth:"wide",parsePatterns:yc,defaultParseWidth:"any",valueCallback:t=>t+1}),month:gr({matchPatterns:wc,defaultMatchWidth:"wide",parsePatterns:xc,defaultParseWidth:"any"}),day:gr({matchPatterns:kc,defaultMatchWidth:"wide",parsePatterns:_c,defaultParseWidth:"any"}),dayPeriod:gr({matchPatterns:$c,defaultMatchWidth:"any",parsePatterns:Pc,defaultParseWidth:"any"})},Cc={code:"en-US",formatDistance:Ql,formatLong:ec,formatRelative:rc,localize:uc,match:Sc,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Oc(t){const e=lt(t);return zl(e,Gl(e))+1}function Ec(t){const e=lt(t),r=+ni(e)-+ql(e);return Math.round(r/ca)+1}function da(t,e){var m,f,S,x;const r=lt(t),i=r.getFullYear(),n=bi(),s=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??n.firstWeekContainsDate??((x=(S=n.locale)==null?void 0:S.options)==null?void 0:x.firstWeekContainsDate)??1,a=Bt(t,0);a.setFullYear(i+1,0,s),a.setHours(0,0,0,0);const u=Pr(a,e),h=Bt(t,0);h.setFullYear(i,0,s),h.setHours(0,0,0,0);const d=Pr(h,e);return r.getTime()>=u.getTime()?i+1:r.getTime()>=d.getTime()?i:i-1}function Ac(t,e){var u,h,d,m;const r=bi(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,n=da(t,e),s=Bt(t,0);return s.setFullYear(n,0,i),s.setHours(0,0,0,0),Pr(s,e)}function Tc(t,e){const r=lt(t),i=+Pr(r,e)-+Ac(r,e);return Math.round(i/ca)+1}function oe(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Ct={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return oe(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):oe(r+1,2)},d(t,e){return oe(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return oe(t.getHours()%12||12,e.length)},H(t,e){return oe(t.getHours(),e.length)},m(t,e){return oe(t.getMinutes(),e.length)},s(t,e){return oe(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),n=Math.trunc(i*Math.pow(10,r-3));return oe(n,e.length)}},Xt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},$s={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),n=i>0?i:1-i;return r.ordinalNumber(n,{unit:"year"})}return Ct.y(t,e)},Y:function(t,e,r,i){const n=da(t,i),s=n>0?n:1-n;if(e==="YY"){const a=s%100;return oe(a,2)}return e==="Yo"?r.ordinalNumber(s,{unit:"year"}):oe(s,e.length)},R:function(t,e){const r=ua(t);return oe(r,e.length)},u:function(t,e){const r=t.getFullYear();return oe(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return oe(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return oe(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Ct.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return oe(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const n=Tc(t,i);return e==="wo"?r.ordinalNumber(n,{unit:"week"}):oe(n,e.length)},I:function(t,e,r){const i=Ec(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):oe(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Ct.d(t,e)},D:function(t,e,r){const i=Oc(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):oe(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const n=t.getDay(),s=(n-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return oe(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const n=t.getDay(),s=(n-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return oe(s,e.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),n=i===0?7:i;switch(e){case"i":return String(n);case"ii":return oe(n,e.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let n;switch(i===12?n=Xt.noon:i===0?n=Xt.midnight:n=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let n;switch(i>=17?n=Xt.evening:i>=12?n=Xt.afternoon:i>=4?n=Xt.morning:n=Xt.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Ct.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Ct.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):oe(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):oe(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ct.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Ct.s(t,e)},S:function(t,e){return Ct.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Ss(i);case"XXXX":case"XX":return Ut(i);case"XXXXX":case"XXX":default:return Ut(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return Ss(i);case"xxxx":case"xx":return Ut(i);case"xxxxx":case"xxx":default:return Ut(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ps(i,":");case"OOOO":default:return"GMT"+Ut(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ps(i,":");case"zzzz":default:return"GMT"+Ut(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return oe(i,e.length)},T:function(t,e,r){const i=t.getTime();return oe(i,e.length)}};function Ps(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),n=Math.trunc(i/60),s=i%60;return s===0?r+String(n):r+String(n)+e+oe(s,2)}function Ss(t,e){return t%60===0?(t>0?"-":"+")+oe(Math.abs(t)/60,2):Ut(t,e)}function Ut(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),n=oe(Math.trunc(i/60),2),s=oe(i%60,2);return r+n+e+s}const Cs=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},pa=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Dc=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],n=r[2];if(!n)return Cs(t,e);let s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Cs(i,e)).replace("{{time}}",pa(n,e))},Mc={p:pa,P:Dc},Lc=/^D+$/,Rc=/^Y+$/,Fc=["D","DD","YY","YYYY"];function jc(t){return Lc.test(t)}function Uc(t){return Rc.test(t)}function Wc(t,e,r){const i=Nc(t,e,r);if(console.warn(i),Fc.includes(t))throw new RangeError(i)}function Nc(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ic=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Hc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bc=/^'([^]*?)'?$/,Vc=/''/g,zc=/[a-zA-Z]/;function Sr(t,e,r){var m,f,S,x;const i=bi(),n=i.locale??Cc,s=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??((x=(S=i.locale)==null?void 0:S.options)==null?void 0:x.weekStartsOn)??0,u=lt(t);if(!ha(u))throw new RangeError("Invalid time value");let h=e.match(Hc).map(k=>{const O=k[0];if(O==="p"||O==="P"){const P=Mc[O];return P(k,n.formatLong)}return k}).join("").match(Ic).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const O=k[0];if(O==="'")return{isToken:!1,value:qc(k)};if($s[O])return{isToken:!0,value:k};if(O.match(zc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:k}});n.localize.preprocessor&&(h=n.localize.preprocessor(u,h));const d={firstWeekContainsDate:s,weekStartsOn:a,locale:n};return h.map(k=>{if(!k.isToken)return k.value;const O=k.value;(Uc(O)||jc(O))&&Wc(O,e,String(t));const P=$s[O[0]];return P(u,O,n.localize,d)}).join("")}function qc(t){const e=t.match(Bc);return e?e[1].replace(Vc,"'"):t}function cn(t,e){const r=lt(t);if(!ha(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",n=(e==null?void 0:e.representation)??"complete";let s="";const a=i==="extended"?"-":"",u=i==="extended"?":":"";if(n!=="time"){const h=oe(r.getDate(),2),d=oe(r.getMonth()+1,2);s=`${oe(r.getFullYear(),4)}${a}${d}${a}${h}`}if(n!=="date"){const h=oe(r.getHours(),2),d=oe(r.getMinutes(),2),m=oe(r.getSeconds(),2);s=`${s}${s===""?"":" "}${h}${u}${d}${u}${m}`}return s}var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gc(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return t[i]}})}),r}var mn={exports:{}};const Xc={},Qc=Object.freeze(Object.defineProperty({__proto__:null,default:Xc},Symbol.toStringTag,{value:"Module"})),Qt=Gc(Qc);/**
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
 */(function(t,e){(function(r,i){i(e)})(Yc,function(r){var i={},n={exports:{}};(function(w){var C=function(B){return typeof B<"u"&&B.versions!=null&&B.versions.node!=null&&B+""=="[object process]"};w.exports.isNode=C,w.exports.platform=typeof process<"u"&&C(process)?"node":"browser";var E=w.exports.platform==="node"&&Qt;w.exports.isMainThread=w.exports.platform==="node"?(!E||E.isMainThread)&&!process.connected:typeof Window<"u",w.exports.cpus=w.exports.platform==="browser"?self.navigator.hardwareConcurrency:Qt.cpus().length})(n);var s=n.exports,a={},u;function h(){if(u)return a;u=1;function w(B,be){var G=this;if(!(this instanceof w))throw new SyntaxError("Constructor must be called with the new operator");if(typeof B!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Se=[],he=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var L=function(X,ne){Se.push(X),he.push(ne)};this.then=function(_,X){return new w(function(ne,Fe){var Be=_?C(_,ne,Fe):ne,ft=X?C(X,ne,Fe):Fe;L(Be,ft)},G)};var de=function(X){return G.resolved=!0,G.rejected=!1,G.pending=!1,Se.forEach(function(ne){ne(X)}),L=function(Fe,Be){Fe(X)},de=y=function(){},G},y=function(X){return G.resolved=!1,G.rejected=!0,G.pending=!1,he.forEach(function(ne){ne(X)}),L=function(Fe,Be){Be(X)},de=y=function(){},G};this.cancel=function(){return be?be.cancel():y(new E),G},this.timeout=function(_){if(be)be.timeout(_);else{var X=setTimeout(function(){y(new A("Promise timed out after "+_+" ms"))},_);G.always(function(){clearTimeout(X)})}return G},B(function(_){de(_)},function(_){y(_)})}function C(B,be,G){return function(Se){try{var he=B(Se);he&&typeof he.then=="function"&&typeof he.catch=="function"?he.then(be,G):be(he)}catch(L){G(L)}}}w.prototype.catch=function(B){return this.then(null,B)},w.prototype.always=function(B){return this.then(B,B)},w.all=function(B){return new w(function(be,G){var Se=B.length,he=[];Se?B.forEach(function(L,de){L.then(function(y){he[de]=y,Se--,Se==0&&be(he)},function(y){Se=0,G(y)})}):be(he)})},w.defer=function(){var B={};return B.promise=new w(function(be,G){B.resolve=be,B.reject=G}),B};function E(B){this.message=B||"promise cancelled",this.stack=new Error().stack}E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="CancellationError",w.CancellationError=E;function A(B){this.message=B||"timeout exceeded",this.stack=new Error().stack}return A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="TimeoutError",w.TimeoutError=A,a.Promise=w,a}function d(w,C){(C==null||C>w.length)&&(C=w.length);for(var E=0,A=Array(C);E<C;E++)A[E]=w[E];return A}function m(w,C){var E=typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(!E){if(Array.isArray(w)||(E=F(w))||C){E&&(w=E);var A=0,B=function(){};return{s:B,n:function(){return A>=w.length?{done:!0}:{done:!1,value:w[A++]}},e:function(he){throw he},f:B}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var be,G=!0,Se=!1;return{s:function(){E=E.call(w)},n:function(){var he=E.next();return G=he.done,he},e:function(he){Se=!0,be=he},f:function(){try{G||E.return==null||E.return()}finally{if(Se)throw be}}}}function f(w,C,E){return(C=O(C))in w?Object.defineProperty(w,C,{value:E,enumerable:!0,configurable:!0,writable:!0}):w[C]=E,w}function S(w,C){var E=Object.keys(w);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(w);C&&(A=A.filter(function(B){return Object.getOwnPropertyDescriptor(w,B).enumerable})),E.push.apply(E,A)}return E}function x(w){for(var C=1;C<arguments.length;C++){var E=arguments[C]!=null?arguments[C]:{};C%2?S(Object(E),!0).forEach(function(A){f(w,A,E[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(E)):S(Object(E)).forEach(function(A){Object.defineProperty(w,A,Object.getOwnPropertyDescriptor(E,A))})}return w}function k(w,C){if(typeof w!="object"||!w)return w;var E=w[Symbol.toPrimitive];if(E!==void 0){var A=E.call(w,C||"default");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(C==="string"?String:Number)(w)}function O(w){var C=k(w,"string");return typeof C=="symbol"?C:C+""}function P(w){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},P(w)}function F(w,C){if(w){if(typeof w=="string")return d(w,C);var E={}.toString.call(w).slice(8,-1);return E==="Object"&&w.constructor&&(E=w.constructor.name),E==="Map"||E==="Set"?Array.from(w):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?d(w,C):void 0}}var U={exports:{}},H={},le;function Z(){return le||(le=1,H.validateOptions=function(C,E,A){if(C){var B=C?Object.keys(C):[],be=B.find(function(Se){return!E.includes(Se)});if(be)throw new Error('Object "'+A+'" contains an unknown option "'+be+'"');var G=E.find(function(Se){return Object.prototype[Se]&&!B.includes(Se)});if(G)throw new Error('Object "'+A+'" contains an inherited option "'+G+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return C}},H.workerOptsNames=["credentials","name","type"],H.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],H.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),H}var Pe,j;function pe(){return j||(j=1,Pe=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Pe}var ie;function ce(){if(ie)return U.exports;ie=1;var w=h(),C=w.Promise,E=s,A=Z(),B=A.validateOptions,be=A.forkOptsNames,G=A.workerThreadOptsNames,Se=A.workerOptsNames,he="__workerpool-terminate__";function L(){var I=y();if(!I)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return I}function de(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":P(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function y(){try{return Qt}catch(I){if(P(I)==="object"&&I!==null&&I.code==="MODULE_NOT_FOUND")return null;throw I}}function _(){if(E.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var I=new Blob([pe()],{type:"text/javascript"});return window.URL.createObjectURL(I)}else return __dirname+"/worker.js"}function X(I,Q){if(Q.workerType==="web")return de(),ne(I,Q.workerOpts,Worker);if(Q.workerType==="thread")return $=L(),Fe(I,$,Q);if(Q.workerType==="process"||!Q.workerType)return Be(I,ft(Q),Qt);if(E.platform==="browser")return de(),ne(I,Q.workerOpts,Worker);var $=y();return $?Fe(I,$,Q):Be(I,ft(Q),Qt)}function ne(I,Q,$){B(Q,Se,"workerOpts");var Y=new $(I,Q);return Y.isBrowserWorker=!0,Y.on=function(ye,ve){this.addEventListener(ye,function(Ee){ve(Ee.data)})},Y.send=function(ye,ve){this.postMessage(ye,ve)},Y}function Fe(I,Q,$){var Y,ye;B($==null?void 0:$.workerThreadOpts,G,"workerThreadOpts");var ve=new Q.Worker(I,x({stdout:(Y=$==null?void 0:$.emitStdStreams)!==null&&Y!==void 0?Y:!1,stderr:(ye=$==null?void 0:$.emitStdStreams)!==null&&ye!==void 0?ye:!1},$==null?void 0:$.workerThreadOpts));return ve.isWorkerThread=!0,ve.send=function(Ee,se){this.postMessage(Ee,se)},ve.kill=function(){return this.terminate(),!0},ve.disconnect=function(){this.terminate()},$!=null&&$.emitStdStreams&&(ve.stdout.on("data",function(Ee){return ve.emit("stdout",Ee)}),ve.stderr.on("data",function(Ee){return ve.emit("stderr",Ee)})),ve}function Be(I,Q,$){B(Q.forkOpts,be,"forkOpts");var Y=$.fork(I,Q.forkArgs,Q.forkOpts),ye=Y.send;return Y.send=function(ve){return ye.call(Y,ve)},Q.emitStdStreams&&(Y.stdout.on("data",function(ve){return Y.emit("stdout",ve)}),Y.stderr.on("data",function(ve){return Y.emit("stderr",ve)})),Y.isChildProcess=!0,Y}function ft(I){I=I||{};var Q=process.execArgv.join(" "),$=Q.indexOf("--inspect")!==-1,Y=Q.indexOf("--debug-brk")!==-1,ye=[];return $&&(ye.push("--inspect="+I.debugPort),Y&&ye.push("--debug-brk")),process.execArgv.forEach(function(ve){ve.indexOf("--max-old-space-size")>-1&&ye.push(ve)}),Object.assign({},I,{forkArgs:I.forkArgs,forkOpts:Object.assign({},I.forkOpts,{execArgv:(I.forkOpts&&I.forkOpts.execArgv||[]).concat(ye),stdio:I.emitStdStreams?"pipe":void 0})})}function nt(I){for(var Q=new Error(""),$=Object.keys(I),Y=0;Y<$.length;Y++)Q[$[Y]]=I[$[Y]];return Q}function at(I,Q){if(Object.keys(I.processing).length===1){var $=Object.values(I.processing)[0];$.options&&typeof $.options.on=="function"&&$.options.on(Q)}}function Pt(I,Q){var $=this,Y=Q||{};this.script=I||_(),this.worker=X(this.script,Y),this.debugPort=Y.debugPort,this.forkOpts=Y.forkOpts,this.forkArgs=Y.forkArgs,this.workerOpts=Y.workerOpts,this.workerThreadOpts=Y.workerThreadOpts,this.workerTerminateTimeout=Y.workerTerminateTimeout,I||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(se){at($,{stdout:se.toString()})}),this.worker.on("stderr",function(se){at($,{stderr:se.toString()})}),this.worker.on("message",function(se){if(!$.terminated)if(typeof se=="string"&&se==="ready")$.worker.ready=!0,ve();else{var Ze=se.id,je=$.processing[Ze];je!==void 0&&(se.isEvent?je.options&&typeof je.options.on=="function"&&je.options.on(se.payload):(delete $.processing[Ze],$.terminating===!0&&$.terminate(),se.error?je.resolver.reject(nt(se.error)):je.resolver.resolve(se.result)))}});function ye(se){$.terminated=!0;for(var Ze in $.processing)$.processing[Ze]!==void 0&&$.processing[Ze].resolver.reject(se);$.processing=Object.create(null)}function ve(){var se=m($.requestQueue.splice(0)),Ze;try{for(se.s();!(Ze=se.n()).done;){var je=Ze.value;$.worker.send(je.message,je.transfer)}}catch(Ur){se.e(Ur)}finally{se.f()}}var Ee=this.worker;this.worker.on("error",ye),this.worker.on("exit",function(se,Ze){var je=`Workerpool Worker terminated Unexpectedly
`;je+="    exitCode: `"+se+"`\n",je+="    signalCode: `"+Ze+"`\n",je+="    workerpool.script: `"+$.script+"`\n",je+="    spawnArgs: `"+Ee.spawnargs+"`\n",je+="    spawnfile: `"+Ee.spawnfile+"`\n",je+="    stdout: `"+Ee.stdout+"`\n",je+="    stderr: `"+Ee.stderr+"`\n",ye(new Error(je))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Pt.prototype.methods=function(){return this.exec("methods")},Pt.prototype.exec=function(I,Q,$,Y){$||($=C.defer());var ye=++this.lastId;this.processing[ye]={id:ye,resolver:$,options:Y};var ve={message:{id:ye,method:I,params:Q},transfer:Y&&Y.transfer};this.terminated?$.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ve.message,ve.transfer):this.requestQueue.push(ve);var Ee=this;return $.promise.catch(function(se){if(se instanceof C.CancellationError||se instanceof C.TimeoutError)return delete Ee.processing[ye],Ee.terminateAndNotify(!0).then(function(){throw se},function(Ze){throw Ze});throw se})},Pt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Pt.prototype.terminate=function(I,Q){var $=this;if(I){for(var Y in this.processing)this.processing[Y]!==void 0&&this.processing[Y].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Q=="function"&&(this.terminationHandler=Q),this.busy())this.terminating=!0;else{var ye=function(se){if($.terminated=!0,$.cleaning=!1,$.worker!=null&&$.worker.removeAllListeners&&$.worker.removeAllListeners("message"),$.worker=null,$.terminating=!1,$.terminationHandler)$.terminationHandler(se,$);else if(se)throw se};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ye(new Error("worker already killed!"));return}var ve=setTimeout(function(){$.worker&&$.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ve),$.worker&&($.worker.killed=!0),ye()}),this.worker.ready?this.worker.send(he):this.requestQueue.push({message:he}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ye()}},Pt.prototype.terminateAndNotify=function(I,Q){var $=C.defer();return Q&&$.promise.timeout(Q),this.terminate(I,function(Y,ye){Y?$.reject(Y):$.resolve(ye)}),$.promise},U.exports=Pt,U.exports._tryRequireWorkerThreads=y,U.exports._setupProcessWorker=Be,U.exports._setupBrowserWorker=ne,U.exports._setupWorkerThreadWorker=Fe,U.exports.ensureWorkerThreads=L,U.exports}var me,ue;function fe(){if(ue)return me;ue=1;var w=65535;me=C;function C(){this.ports=Object.create(null),this.length=0}return C.prototype.nextAvailableStartingAt=function(E){for(;this.ports[E]===!0;)E++;if(E>=w)throw new Error("WorkerPool debug port limit reached: "+E+">= "+w);return this.ports[E]=!0,this.length++,E},C.prototype.releasePort=function(E){delete this.ports[E],this.length--},me}var ee,ge;function Ae(){if(ge)return ee;ge=1;var w=h(),C=w.Promise,E=ce(),A=s,B=fe(),be=new B;function G(y,_){typeof y=="string"?this.script=y||null:(this.script=null,_=y),this.workers=[],this.tasks=[],_=_||{},this.forkArgs=Object.freeze(_.forkArgs||[]),this.forkOpts=Object.freeze(_.forkOpts||{}),this.workerOpts=Object.freeze(_.workerOpts||{}),this.workerThreadOpts=Object.freeze(_.workerThreadOpts||{}),this.debugPortStart=_.debugPortStart||43210,this.nodeWorker=_.nodeWorker,this.workerType=_.workerType||_.nodeWorker||"auto",this.maxQueueSize=_.maxQueueSize||1/0,this.workerTerminateTimeout=_.workerTerminateTimeout||1e3,this.onCreateWorker=_.onCreateWorker||function(){return null},this.onTerminateWorker=_.onTerminateWorker||function(){return null},this.emitStdStreams=_.emitStdStreams||!1,_&&"maxWorkers"in _?(Se(_.maxWorkers),this.maxWorkers=_.maxWorkers):this.maxWorkers=Math.max((A.cpus||4)-1,1),_&&"minWorkers"in _&&(_.minWorkers==="max"?this.minWorkers=this.maxWorkers:(he(_.minWorkers),this.minWorkers=_.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&E.ensureWorkerThreads()}G.prototype.exec=function(y,_,X){if(_&&!Array.isArray(_))throw new TypeError('Array expected as argument "params"');if(typeof y=="string"){var ne=C.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Fe=this.tasks,Be={method:y,params:_,resolver:ne,timeout:null,options:X};Fe.push(Be);var ft=ne.promise.timeout;return ne.promise.timeout=function(at){return Fe.indexOf(Be)!==-1?(Be.timeout=at,ne.promise):ft.call(ne.promise,at)},this._next(),ne.promise}else{if(typeof y=="function")return this.exec("run",[String(y),_],X);throw new TypeError('Function or string expected as argument "method"')}},G.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var y=this;return this.exec("methods").then(function(_){var X={};return _.forEach(function(ne){X[ne]=function(){return y.exec(ne,Array.prototype.slice.call(arguments))}}),X})},G.prototype._next=function(){if(this.tasks.length>0){var y=this._getWorker();if(y){var _=this,X=this.tasks.shift();if(X.resolver.promise.pending){var ne=y.exec(X.method,X.params,X.resolver,X.options).then(_._boundNext).catch(function(){if(y.terminated)return _._removeWorker(y)}).then(function(){_._next()});typeof X.timeout=="number"&&ne.timeout(X.timeout)}else _._next()}}},G.prototype._getWorker=function(){for(var y=this.workers,_=0;_<y.length;_++){var X=y[_];if(X.busy()===!1)return X}return y.length<this.maxWorkers?(X=this._createWorkerHandler(),y.push(X),X):null},G.prototype._removeWorker=function(y){var _=this;return be.releasePort(y.debugPort),this._removeWorkerFromList(y),this._ensureMinWorkers(),new C(function(X,ne){y.terminate(!1,function(Fe){_.onTerminateWorker({forkArgs:y.forkArgs,forkOpts:y.forkOpts,workerThreadOpts:y.workerThreadOpts,script:y.script}),Fe?ne(Fe):X(y)})})},G.prototype._removeWorkerFromList=function(y){var _=this.workers.indexOf(y);_!==-1&&this.workers.splice(_,1)},G.prototype.terminate=function(y,_){var X=this;this.tasks.forEach(function(nt){nt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ne=function(at){be.releasePort(at.debugPort),this._removeWorkerFromList(at)},Fe=ne.bind(this),Be=[],ft=this.workers.slice();return ft.forEach(function(nt){var at=nt.terminateAndNotify(y,_).then(Fe).always(function(){X.onTerminateWorker({forkArgs:nt.forkArgs,forkOpts:nt.forkOpts,workerThreadOpts:nt.workerThreadOpts,script:nt.script})});Be.push(at)}),C.all(Be)},G.prototype.stats=function(){var y=this.workers.length,_=this.workers.filter(function(X){return X.busy()}).length;return{totalWorkers:y,busyWorkers:_,idleWorkers:y-_,pendingTasks:this.tasks.length,activeTasks:_}},G.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var y=this.workers.length;y<this.minWorkers;y++)this.workers.push(this._createWorkerHandler())},G.prototype._createWorkerHandler=function(){var y=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new E(y.script||this.script,{forkArgs:y.forkArgs||this.forkArgs,forkOpts:y.forkOpts||this.forkOpts,workerOpts:y.workerOpts||this.workerOpts,workerThreadOpts:y.workerThreadOpts||this.workerThreadOpts,debugPort:be.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Se(y){if(!L(y)||!de(y)||y<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function he(y){if(!L(y)||!de(y)||y<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function L(y){return typeof y=="number"}function de(y){return Math.round(y)==y}return ee=G,ee}var qe={},He,cr;function qt(){if(cr)return He;cr=1;function w(C,E){this.message=C,this.transfer=E}return He=w,He}var Lr;function Rr(){return Lr||(Lr=1,function(w){var C=qt(),E="__workerpool-terminate__",A={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")A.on=function(L,de){addEventListener(L,function(y){de(y.data)})},A.send=function(L,de){de?postMessage(L,de):postMessage(L)};else if(typeof process<"u"){var B;try{B=Qt}catch(L){if(!(P(L)==="object"&&L!==null&&L.code==="MODULE_NOT_FOUND"))throw L}if(B&&B.parentPort!==null){var be=B.parentPort;A.send=be.postMessage.bind(be),A.on=be.on.bind(be),A.exit=process.exit.bind(process)}else A.on=process.on.bind(process),A.send=function(L){process.send(L)},A.on("disconnect",function(){process.exit(1)}),A.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function G(L){return Object.getOwnPropertyNames(L).reduce(function(de,y){return Object.defineProperty(de,y,{value:L[y],enumerable:!0})},{})}function Se(L){return L&&typeof L.then=="function"&&typeof L.catch=="function"}A.methods={},A.methods.run=function(de,y){var _=new Function("return ("+de+").apply(null, arguments);");return _.apply(_,y)},A.methods.methods=function(){return Object.keys(A.methods)},A.terminationHandler=void 0,A.cleanupAndExit=function(L){var de=function(){A.exit(L)};if(!A.terminationHandler)return de();var y=A.terminationHandler(L);Se(y)?y.then(de,de):de()};var he=null;A.on("message",function(L){if(L===E)return A.cleanupAndExit(0);try{var de=A.methods[L.method];if(de){he=L.id;var y=de.apply(de,L.params);Se(y)?y.then(function(_){_ instanceof C?A.send({id:L.id,result:_.message,error:null},_.transfer):A.send({id:L.id,result:_,error:null}),he=null}).catch(function(_){A.send({id:L.id,result:null,error:G(_)}),he=null}):(y instanceof C?A.send({id:L.id,result:y.message,error:null},y.transfer):A.send({id:L.id,result:y,error:null}),he=null)}else throw new Error('Unknown method "'+L.method+'"')}catch(_){A.send({id:L.id,result:null,error:G(_)})}}),A.register=function(L,de){if(L)for(var y in L)L.hasOwnProperty(y)&&(A.methods[y]=L[y]);de&&(A.terminationHandler=de.onTerminate),A.send("ready")},A.emit=function(L){if(he){if(L instanceof C){A.send({id:he,isEvent:!0,payload:L.message},L.transfer);return}A.send({id:he,isEvent:!0,payload:L})}},w.add=A.register,w.emit=A.emit}(qe)),qe}var _i=s.platform,Fr=s.isMainThread,$i=s.cpus;function it(w,C){var E=Ae();return new E(w,C)}var $t=i.pool=it;function ur(w,C){var E=Rr();E.add(w,C)}var ct=i.worker=ur;function Te(w){var C=Rr();C.emit(w)}var jr=i.workerEmit=Te,Pi=h(),Ue=Pi.Promise,Si=i.Promise=Ue,Ci=i.Transfer=qt(),Oi=i.platform=_i,Ei=i.isMainThread=Fr,Ai=i.cpus=$i;r.Promise=Si,r.Transfer=Ci,r.cpus=Ai,r.default=i,r.isMainThread=Ei,r.platform=Oi,r.pool=$t,r.worker=ct,r.workerEmit=jr,Object.defineProperty(r,"__esModule",{value:!0})})})(mn,mn.exports);var Kc=mn.exports,pt=class{constructor(t,e){g(this,"_value");g(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},fa=class extends pt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Zc=class extends pt{constructor(){super(...arguments);g(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Jc=class extends pt{validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(n=>n.height>=e),i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},eu=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},tu=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],ru=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],iu=eu(),jn={iron:{pixels:ru,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:tu,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:iu,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},nu=class extends pt{get availablePalettes(){return jn}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},hn,su=(hn=class{},g(hn,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),hn),Re,au=(Re=class extends su{static humanRangeDates(e,r){return e=Re.inputToDate(e),r=Re.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Re.humanDate(e):[Re.humanDate(e),Re.humanDate(r)].join(" - ")}static human(e){return`${Re.humanDate(e)} ${Re.humanTime(e,!0)} `}},g(Re,"isoDate",e=>(e=Re.inputToDate(e),cn(e,{representation:"date"}))),g(Re,"isoTime",e=>(e=Re.inputToDate(e),cn(e,{representation:"time"}))),g(Re,"isoComplete",e=>(e=Re.inputToDate(e),cn(e))),g(Re,"humanTime",(e,r=!1)=>(e=Re.inputToDate(e),Sr(e,r?"HH:mm:ss":"HH:mm"))),g(Re,"humanDate",(e,r=!1)=>(e=Re.inputToDate(e),Sr(e,r?"d. M.":"d. M. yyyy"))),Re),yi=class{},ma=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},Os=class ga extends ma{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new ga(e.url,e.code,e.message)}},va=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},ou=class extends yi{constructor(e,r,i,n,s,a,u,h,d,m,f){super();g(this,"id");g(this,"horizontalLimit");g(this,"verticalLimit");g(this,"group");g(this,"url");g(this,"thermalUrl");g(this,"visibleUrl");g(this,"fileName");g(this,"frameCount");g(this,"frames",[]);g(this,"signature","unknown");g(this,"version",-1);g(this,"streamCount",-1);g(this,"fileDataType",-1);g(this,"unit",-1);g(this,"width");g(this,"height");g(this,"timestamp");g(this,"duration");g(this,"min");g(this,"max");g(this,"_isHover",!1);g(this,"root",null);g(this,"canvasLayer");g(this,"visibleLayer");g(this,"cursorLayer");g(this,"listenerLayer");g(this,"timeline");g(this,"cursorValue");g(this,"_mounted",!1);g(this,"_pixels");g(this,"_onHover");g(this,"_onClick");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=n,this.timestamp=a,this.duration=u,this.min=h,this.max=d,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=s}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const r=this.width,i=this.root.clientWidth,n=r/i,s=Math.round(e.offsetX*n),a=Math.round(e.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:s,y:a}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){this.cursorValue.recalculateFromCursor(e),e!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(e.x,e.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},wi=class{constructor(t){g(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},gt=class gn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=gn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=gn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},lu=class extends wi{constructor(e){super(e);g(this,"container");g(this,"canvas");g(this,"context");g(this,"_opacity",1);this.container=gt.createCanvasContainer(),this.canvas=gt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,n,s,a,u,h)=>{const m=new OffscreenCanvas(s,a).getContext("2d"),f=n-i;for(let k=0;k<=s;k++)for(let O=0;O<=a;O++){const P=k+O*s;let F=u[P];F<i&&(F=i),F>n&&(F=n);const H=(F-i)/f,le=Math.round(255*H),Z=h[le];m.fillStyle=Z,m.fillRect(k,O,1,1)}const S=m.getImageData(0,0,s,a);return await createImageBitmap(S)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},cu=class extends wi{constructor(e){super(e);g(this,"layerRoot");g(this,"center");g(this,"axisX");g(this,"axisY");g(this,"label");g(this,"_show",!1);g(this,"_hover",!1);this.layerRoot=gt.createCursorLayerRoot(),this.center=gt.createCursorLayerCenter(),this.axisX=gt.createCursorLayerX(),this.axisY=gt.createCursorLayerY(),this.label=gt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(e,r,i){if(this.instance.root!==null){const n=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*n),a=Math.round(r*n);this.center.style.left=this.px(s),this.center.style.top=this.px(a),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${i.toFixed(3)} °C`}}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},uu=class extends wi{constructor(e){super(e);g(this,"container");this.container=gt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},hu=class extends wi{constructor(e,r){super(e);g(this,"container");g(this,"image");this._url=r,this.container=gt.createVisibleLayer(),this._url&&(this.image=gt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},vr=class{constructor(t){g(this,"callbacks",new Map);this.timeline=t}add(t,e){this.callbacks.set(t,e)}remove(t){this.callbacks.delete(t)}call(...t){this.callbacks.forEach(e=>e(...t))}},du=class{constructor(t,e){g(this,"_currentFrame");g(this,"bufferSize",4);g(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),n=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(n.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,u)=>{const h=n[u];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},ba={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},pu=class extends pt{constructor(e,r,i,n){super(e,Math.max(Math.min(r,i.length),0));g(this,"_playbackSpeed",1);g(this,"callbackdPlaybackSpeed",new vr(this));g(this,"startTimestampRelative");g(this,"endTimestampRelative");g(this,"stepsByAbsolute",new Map);g(this,"stepsByRelative",new Map);g(this,"stepsByIndex",new Map);g(this,"relativeSteps",[]);g(this,"_currentStep");g(this,"_onChangeListeners",new Map);g(this,"isSequence");g(this,"_isPlaying",!1);g(this,"timer");g(this,"buffer");g(this,"callbacksPlay",new vr(this));g(this,"callbacksPause",new vr(this));g(this,"callbacksStop",new vr(this));g(this,"callbacksEnd",new vr(this));this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(s=>{this.stepsByIndex.set(s.index,s),this.stepsByAbsolute.set(s.absolute,s),this.stepsByRelative.set(s.relative,s),this.relativeSteps.push(s.relative)}),this.buffer=new du(this,n)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return ba[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),Sr(r,"mm:ss:SSS")}addChangeListener(e,r){this._onChangeListeners.set(e,r)}removeChangeListener(e){this._onChangeListeners.delete(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,n=this._validateIndex(i-40),s=this._validateIndex(i),u=this.steps.slice(n,s).reverse().find(h=>h.relative<=e);return u!==void 0?u:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,n=this._validateIndex(i),s=this._validateIndex(i+40),u=this.steps.slice(n,s).find(h=>h.relative>e);return u!==void 0?u:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this._onChangeListeners.forEach(n=>n(this._currentStep)),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this._onChangeListeners.forEach(r=>r(e)),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},fu=class extends pt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},ya=class wa extends ou{constructor(e,r,i,n,s,a,u,h,d,m,f,S,x,k,O,P,F){super(e,r.thermalUrl,i,n,d,s,u,f,S,a,r.visibleUrl),this.group=e,this.service=r,this.width=i,this.height=n,this.timestamp=s,this.frameCount=a,this.duration=u,this.frameInterval=h,this.fps=m,this.min=f,this.max=S,this.bytesize=x,this.averageEmissivity=k,this.averageReflectedKelvins=O,this.firstFrame=P,this.timelineData=F,this.pixels=P.pixels}exportAsPng(){throw new Error("Method not implemented.")}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}postInit(){return this.canvasLayer=new lu(this),this.visibleLayer=new hu(this,this.visibleUrl),this.cursorLayer=new cu(this),this.listenerLayer=new uu(this),this.cursorValue=new fu(this,void 0),this.timeline=new pu(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this}formatId(e){return`instance_${this.group.id}_${e}`}onSetPixels(e){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const r=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(r)}}getPixelsForHistogram(){return[]}static fromService(e,r,i,n){return new wa(e,r,i.width,i.height,i.timestamp,i.frameCount,i.duration,i.frameInterval,n.pixels,i.fps,i.min,i.max,i.bytesize,i.averageEmissivity,i.averageReflectedKelvins,n,i.timeline).postInit()}},si=class extends ma{constructor(e,r,i,n,s){super(n,s);g(this,"id",Math.random());g(this,"baseInfoCache");g(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),n=ya.fromService(e,this,r,i);return e.files.addFile(n),n}},mu=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),n=t.byteLength,s=(ie,ce)=>{const me=ie.getBigInt64(ce,!0),ue=62135596800000n,fe=10000n,ee=24n*60n*60n*1000n*fe,ge=0x4000000000000000n,Ae=0x8000000000000000n;let He=me&0x3fffffffffffffffn;me&Ae&&(He>ge-ee&&(He-=ge),He<0&&(He+=ee));const qt=He/fe-ue;return Number(qt)},a=s(e,5),u=e.getUint8(15);let h=2;u===1&&(h=4);const d=57,m=r*i*h,f=d+m,S=t.slice(25),x=S.byteLength/f,k=ie=>{const ce=ie*f,me=ce+f,ue=S.slice(ce,me),fe=new DataView(ue),ee=fe.getFloat32(8,!0),ge=fe.getFloat32(12,!0),Ae=s(fe,0),qe=fe.getFloat32(24,!0),He=fe.getFloat32(28,!0);return{timestamp:Ae,min:ee,max:ge,emissivity:qe,reflectedKelvins:He}},O=[];for(let ie=0;ie<x;ie++){const ce=k(ie);O.push(ce)}const P={emissivity:0,reflectedKelvins:0};let F=1/0,U=-1/0;const H=[];O.forEach(ie=>{P.emissivity=P.emissivity+ie.emissivity,P.reflectedKelvins=P.reflectedKelvins+ie.reflectedKelvins,ie.min<F&&(F=ie.min),ie.max>U&&(U=ie.max),H.push(ie.timestamp)});const le=H[0],Z=[];H.forEach((ie,ce)=>{const me=H[ce+1];let ue=0;me===void 0&&(ue=0),ue=me-ie;const fe=ie-le;Z.push({absolute:ie,relative:fe,offset:isNaN(ue)?0:ue,index:ce})});const Pe=O[O.length-1].timestamp-O[0].timestamp,j=Pe/x,pe=1e3/j;return{width:r,height:i,timestamp:a,bytesize:n,frameCount:x,duration:Pe,frameInterval:j,fps:pe,timeline:Z,min:F,max:U,averageEmissivity:P.emissivity/O.length,averageReflectedKelvins:P.reflectedKelvins/O.length}},gu=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),n=r.getUint16(17,!0),s=r.getUint16(19,!0),a=i===1?4:2,u=57,h=n*s*a,d=u+h,m=t.slice(25),f=e*d,S=f+d;return{array:m.slice(f,S),dataType:i}},vu=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),n=62135596800000n,s=10000n,a=24n*60n*60n*1000n*s,u=0x4000000000000000n,h=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&h&&(m>u-a&&(m-=u),m<0&&(m+=a));const S=m/s-n,x=Number(S),k=r.getFloat32(8,!0),O=r.getFloat32(12,!0),P=r.getFloat32(24,!0),F=r.getFloat32(28,!0),U=t.slice(57);let H=[];if(e===0){const le=new Uint16Array(U),Z=Math.abs(k-O),Pe=65535;le.forEach(j=>{const pe=j/Pe;H.push(k+Z*pe)})}else e===1&&(H=Array.from(new Float32Array(U)));return{timestamp:x,min:k,max:O,emissivity:P,reflectedKelvins:F,pixels:H}},bu=async t=>{let e=[];const r=async P=>{const F=new DataView(P.slice(0,25)),U=F.getUint8(15),H=F.getUint16(17,!0),le=F.getUint16(19,!0),Z=U===1?4:2,Pe=57,j=H*le*Z,pe=Pe+j,ie=P.slice(25),ce=ie.byteLength/pe;let me=[];for(let ue=0;ue<ce;ue++){const ee=ue*pe+57,ge=ee+j,Ae=ie.slice(ee,ge);U===0||U===1&&(me=me.concat(Array.from(new Float32Array(Ae))))}return me};(await Promise.all(t.map(P=>r(P)))).forEach(P=>{e=e.concat(P)}),e.sort((P,F)=>P-F);const n=e[0],s=e[e.length-1],a=Math.abs(n-s),u=200,h=a/u,d=[];let m=[...e];for(let P=0;P<u;P++){const F=n+h*P,U=F+h,H=m.findIndex(pe=>pe>U),Z=m.slice(0,H-1).length,Pe=Z/e.length*100,j={from:F,to:U,count:Z,percentage:Pe};d.push(j),m=m.slice(H)}const f=[...d].sort((P,F)=>P.percentage-F.percentage),S=f[0].percentage,x=f[f.length-1].percentage,k=Math.abs(S-x);return d.map(P=>({...P,height:P.percentage/k*100}))},yu=(t,e)=>{const r=e.endsWith("lrc"),n=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&n},wu=[{extension:"lrc",minme:"application/octet-stream"}],xu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:wu,is:yu,baseInfo:mu,getFrameSubset:gu,frameData:vu,registryHistogram:bu},xa=Object.freeze(xu),ku={LrcParser:xa},ka=Object.values(ku),_u=(t,e)=>{const r=ka.find(i=>i.is(t,e));if(r===void 0)throw new va(2,e,`No parser found for '${e}'.`);return r};ka.map(t=>t.extensions);var $u=class _a{constructor(e,r,i){g(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new _a(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new Os(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const n=_u(i,this.thermalUrl);return this.pocessTheService(new si(this.service,i,n,this.thermalUrl,this.visibleUrl))}catch(n){if(n instanceof va)return this.pocessTheService(Os.fromError(n));throw n}}pocessTheService(e){return e}},Pu=class{constructor(t){g(this,"requestsByUrl",new Map);g(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new Un(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=$u.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},Su=class extends pt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},Cu=class extends pt{constructor(){super(...arguments);g(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},Ou=class extends fa{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},$a=class extends yi{constructor(e,r,i,n){super();g(this,"hash",Math.random());g(this,"minmax",new Ou(this,void 0));g(this,"files",new Cu(this,[]));g(this,"cursorPosition",new Zc(this,void 0));g(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=n}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Eu=class extends pt{constructor(){super(...arguments);g(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const n=new $a(this.parent,e,r,i);return this._map.set(e,n),this.value.push(n),this.value=[...this.value],n}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Au=class extends pt{constructor(){super(...arguments);g(this,"_resolution",150);g(this,"buffer",new Map);g(this,"bufferPixelsCount",0);g(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,n,s,a)=>{let h=r.reduce((x,k)=>{const O=k.reduce((P,F)=>[...P,...F],[]);return[...x,...O]},[]).sort((x,k)=>x-k);const d=s/a;let m=i+d;const f=new Map;let S=0;for(;m!==!1;){const x=h.findIndex(P=>P>m),k=h.slice(0,x).length;f.set(m-d/2,k),S+=k,h=h.slice(x);const O=m+d;m=O<n?O:!1}return{result:f,resultCount:S}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(n=>n.files.value).reduce((n,s)=>(n=n.concat(s),n),[]).map(n=>n.service.buffer),i=await this.parent.pool.exec(xa.registryHistogram,[r]);this.value=i}},Tu=class extends pt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Du=class extends fa{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Mu=class extends yi{constructor(e,r,i){super();g(this,"hash",Math.random());g(this,"groups",new Eu(this,[]));g(this,"opacity",new Su(this,1));g(this,"minmax",new Du(this,void 0));g(this,"loading",new Tu(this,!1));g(this,"range",new Jc(this,void 0));g(this,"histogram",new Au(this,[]));g(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,n])=>{const s=this.groups.addOrGetGroup(i),a=await Promise.all(n.map(u=>this.service.loadFile(u.thermalUrl,u.visibleUrl)));return{group:s,groupFiles:a}}));await Promise.all(r.map(async({group:i,groupFiles:n})=>await Promise.all(n.map(async a=>a instanceof si?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),n=await this.service.loadFile(e.thermalUrl,e.visibleUrl);n instanceof si&&await n.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Un=class extends yi{constructor(e,r){super();g(this,"id");g(this,"service",new Pu(this));g(this,"registries",{});g(this,"palette",new nu(this,"jet"));g(this,"pool");this.pool=e||Kc.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Mu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};let Qr;const Lu=new Uint8Array(16);function Ru(){if(!Qr&&(Qr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Qr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Qr(Lu)}const Ve=[];for(let t=0;t<256;++t)Ve.push((t+256).toString(16).slice(1));function Fu(t,e=0){return Ve[t[e+0]]+Ve[t[e+1]]+Ve[t[e+2]]+Ve[t[e+3]]+"-"+Ve[t[e+4]]+Ve[t[e+5]]+"-"+Ve[t[e+6]]+Ve[t[e+7]]+"-"+Ve[t[e+8]]+Ve[t[e+9]]+"-"+Ve[t[e+10]]+Ve[t[e+11]]+Ve[t[e+12]]+Ve[t[e+13]]+Ve[t[e+14]]+Ve[t[e+15]]}const ju=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Es={randomUUID:ju};function Uu(t,e,r){if(Es.randomUUID&&!e&&!t)return Es.randomUUID();t=t||{};const i=t.random||(t.rng||Ru)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Fu(i)}class Wn extends Ge{constructor(){super(...arguments),this.UUID=Uu()}log(...e){console.log(this.tagName,this.UUID,...e)}}var Wu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,Pa=(t,e,r,i)=>{for(var n=i>1?void 0:i?Nu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Wu(e,r,n),n};let Cr=class extends Wn{constructor(){super(...arguments),this.manager=new Un,this.palette="jet"}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"){const i=Cr.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(jn).includes(t)||(e=!1),e?t:"jet"}render(){return W`<slot></slot>`}};Pa([Oe({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>Cr.sanitizeStringPalette(t),toAttribute:t=>t.toString()}})],Cr.prototype,"palette",2);Cr=Pa([$e("manager-provider")],Cr);const Iu=new Un,Hu="__internal_default_registry",Bu="__internal_default_group",vn=t=>t.addOrGetRegistry(Hu),bn=t=>t.groups.addOrGetGroup(Bu);class Sa extends Wn{constructor(){super(),this.manager=this.getParentManagerOrDefault()}getParentManagerOrDefault(){let r=this.parentElement,i;for(this.log(this,r);r&&!i;)if(console.warn("jedu skrz",this,r),"manager"in r)console.info("Našel jsem manažera",r.manager),i=r.manager,r=null;else if(r.parentElement!==null)r=r.parentElement;else if(r instanceof Ge){const n=r.getRootNode();console.info("našel jsem root",n),"host"in n?r=n.host:(n instanceof DocumentFragment,r=null)}else r=r.parentElement;return i||Iu}}var Vu=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,Ca=(t,e,r,i)=>{for(var n=i>1?void 0:i?zu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Vu(e,r,n),n};let ai=class extends Sa{get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this.id?this._registry=this.manager.addOrGetRegistry(this.id):this._registry=vn(this.manager)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r)}render(){return W`<slot></slot>`}};Ca([Oe({type:String,attribute:!0,reflect:!0})],ai.prototype,"id",2);ai=Ca([$e("registry-provider")],ai);class wt extends Sa{get registry(){return this._registry}constructor(){super()}connectedCallback(){super.connectedCallback(),this._registry=this.getParentRegistry()}getParentRegistry(){let e=this.parentElement,r;if(e===null)return vn(this.manager);for(;e&&r===void 0;)if(e instanceof ai&&(r=e.registry),e instanceof Ge)if(e.parentElement)e=e.parentElement;else{const i=e.getRootNode();"host"in i&&(e=i.host)}else e=e.parentElement;return r||vn(this.manager)}}var qu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,Oa=(t,e,r,i)=>{for(var n=i>1?void 0:i?Yu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&qu(e,r,n),n};let yn=class extends wt{get group(){return this._group}connectedCallback(){super.connectedCallback(),this.id?this._group=this.registry.groups.addOrGetGroup(this.id):this._group=bn(this.registry)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r)}render(){return W`<slot></slot>`}};Oa([Oe({type:String,attribute:!0,reflect:!0})],yn.prototype,"id",2);yn=Oa([$e("group-provider")],yn);class Ea extends wt{get group(){return this._group}constructor(){super()}connectedCallback(){super.connectedCallback(),this._group=this.getParentGroup()}getParentGroup(){let e=this.parentElement,r;if(!e)return bn(this.registry);for(;e&&!r;)if("group"in e&&e.group instanceof $a&&(r=e.group,e=null),e)if(e.parentElement)e=e.parentElement;else if(e instanceof Ge){const i=e.getRootNode();"host"in i&&(e=i.host)}else e=e.parentElement;return r||bn(this.registry)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Aa=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let As=class{constructor(e,r,i,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const s=r;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Aa(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gu{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Xu=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Ts extends Gu{constructor(e,r,i){var n,s;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const u=a.composedPath()[0];a.context===this.context&&u!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,u,a.subscribe))},this.onProviderRequest=a=>{const u=a.composedPath()[0];if(a.context!==this.context||u===this.host)return;const h=new Set;for(const[d,{consumerHost:m}]of this.subscriptions)h.has(d)||(h.add(d),m.dispatchEvent(new Aa(this.context,d,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(s=(n=this.host).addController)==null||s.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Xu(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function or({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Ts(this,{context:t}))}),{get(){return e.get.call(this)},set(n){var s;return(s=i.get(this))==null||s.setValue(n),e.set.call(this,n)},init(n){var s;return(s=i.get(this))==null||s.setValue(n),n}};{e.constructor.addInitializer(a=>{i.set(a,new Ts(a,{context:t}))});const n=Object.getOwnPropertyDescriptor(e,r);let s;if(n===void 0){const a=new WeakMap;s={get(){return a.get(this)},set(u){i.get(this).setValue(u),a.set(this,u)},configurable:!0,enumerable:!0}}else{const a=n.set;s={...n,set(u){i.get(this).setValue(u),a==null||a.call(this,u)}}}return void Object.defineProperty(e,r,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lr({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new As(this,{context:t,callback:n=>{r.set.call(this,n)},subscribe:e})}):r.constructor.addInitializer(n=>{new As(n,{context:t,callback:s=>{n[i]=s},subscribe:e})})}}const Ta="playback",Da="duration",Ma="playing",La="file",Ra="failure",Fa="playbackSpeed";var Qu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,rt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ku(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Qu(e,r,n),n};let ze=class extends Ea{constructor(){super(...arguments),this.loading=!1,this.playing=!1,this.playbackSpeed=1,this.callbacks={success:new Map,failure:new Map,loading:new Map}}async load(){return this.loading=!0,this.log("provider se začíná načítat"),this.callbacks.loading.forEach(e=>e()),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof si?(this.reader=e,await this.reader.createInstance(this.group).then(r=>(this.instance=r,this.file=r,this.callbacks.success.forEach(i=>i(r)),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r))):(this.error=e,this.callbacks.failure.forEach(r=>r(this.error)),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}bindCanvasOnMount(t){this.canvasElement=t}connectedCallback(){super.connectedCallback(),this.load().then(t=>{if(t instanceof ya){this.duration={ms:t.timeline.duration,time:t.timeline.formatDuration(t.timeline.duration)};const e=()=>{this.playing=!0},r=()=>{this.playing=!1};t.timeline.callbacksPlay.add(this.UUID,e),t.timeline.callbacksPause.add(this.UUID,r),t.timeline.callbacksStop.add(this.UUID,r),t.timeline.callbacksEnd.add(this.UUID,r),this.currentFrame={ms:t.timeline.currentMs,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:t.timeline.currentStep.index,absolute:t.timeline.currentStep.absolute},t.timeline.addChangeListener(this.UUID,i=>{this.currentFrame={ms:i.relative,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:i.index,absolute:i.absolute}}),t.timeline.callbackdPlaybackSpeed.add(this.UUID,i=>this.playbackSpeed=i)}else this.failure=t})}play(){this.file&&this.file.timeline.play()}pause(){this.file&&this.file.timeline.pause()}stop(){this.file&&this.file.timeline.stop()}registerSuccessCallback(t,e){this.callbacks.success.set(t,e)}registerFailureCallback(t,e){this.callbacks.failure.set(t,e)}registerLoadingCallback(t,e){this.callbacks.loading.set(t,e)}clearCallbacks(){this.callbacks.success.clear(),this.callbacks.failure.clear(),this.callbacks.loading.clear()}render(){return W`<slot></slot>`}};rt([ke()],ze.prototype,"reader",2);rt([ke()],ze.prototype,"instance",2);rt([ke()],ze.prototype,"loading",2);rt([ke()],ze.prototype,"error",2);rt([or({context:Ma}),Oe({type:String,reflect:!0,attribute:!0})],ze.prototype,"playing",2);rt([or({context:Da}),ke()],ze.prototype,"duration",2);rt([or({context:Ta}),ke()],ze.prototype,"currentFrame",2);rt([or({context:La}),ke()],ze.prototype,"file",2);rt([or({context:Ra}),ke()],ze.prototype,"failure",2);rt([or({context:Fa}),ke()],ze.prototype,"playbackSpeed",2);rt([Oe({type:String,attribute:!0,reflect:!0})],ze.prototype,"thermal",2);rt([Oe({type:String,attribute:!0,reflect:!0})],ze.prototype,"visible",2);rt([ke()],ze.prototype,"canvasElement",2);ze=rt([$e("file-provider")],ze);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zu=Mn(class extends Ln{constructor(t){var e;if(super(t),t.type!==Dn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const a=!!e[s];a===this.st.has(s)||(n=this.nt)!=null&&n.has(s)||(a?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return At}});var Ju=Object.defineProperty,Vt=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Ju(e,r,n),n};class Ke extends Ea{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.playing=!1}connectedCallback(){if(this.log("Připojuji",this.tagName,this.parentFileProviderElement,this.parentElement),super.connectedCallback(),this.parentFileProviderElement=this.getParentFile(),this.parentFileProviderElement)this.parentFileProviderElement.registerLoadingCallback(this.internalCallbackUUID,()=>{this.log("načítání začítání"),this.loading=!0}),this.parentFileProviderElement.registerSuccessCallback(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.registerFailureCallback(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.registerSuccessCallback(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.registerFailureCallback(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}getParentFile(){let e=this.parentElement,r;if(e){if(e instanceof ze)return e;for(;e&&!r;){if(e instanceof ze)r=e,e=null;else if(e instanceof Ge)if(e.parentElement)e=e.parentElement;else{const i=e.getRootNode();"host"in i&&(e=i.host)}else e=e.parentElement;this.log(e)}return r}}}Vt([ke()],Ke.prototype,"loading");Vt([lr({context:Ma,subscribe:!0}),ke()],Ke.prototype,"playing");Vt([lr({context:Da,subscribe:!0}),ke()],Ke.prototype,"duration");Vt([lr({context:Ta,subscribe:!0}),ke()],Ke.prototype,"currentFrame");Vt([lr({context:La,subscribe:!0}),ke()],Ke.prototype,"file");Vt([lr({context:Ra,subscribe:!0}),ke()],Ke.prototype,"failure");Vt([lr({context:Fa,subscribe:!0}),ke()],Ke.prototype,"playbackSpeed");var eh=Object.defineProperty,th=Object.getOwnPropertyDescriptor,rh=(t,e,r,i)=>{for(var n=i>1?void 0:i?th(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&eh(e,r,n),n};let wn=class extends Ke{constructor(){super(...arguments),this.container=Xe()}onLoadingStart(){}onInstanceCreated(t){if(this.container.value!==void 0&&this.parentFileProviderElement!==void 0)t.mountToDom(this.container.value),this.parentFileProviderElement.bindCanvasOnMount(this);else throw this.log(this.parentFileProviderElement,this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,n;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return W`
            <div ${Qe(this.container)} class=${Zu(r)} part="file-canvas-container">
            
                ${this.loading===!0?W`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?W`<div class="error-wrapper">
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
                                ${(n=this.failure)==null?void 0:n.message}
                            </div>
                        </div>`:J}
            
            </div>
        
        `}};wn.styles=Ie`
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
    `;wn=rh([$e("file-canvas")],wn);var ih=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,ja=(t,e,r,i)=>{for(var n=i>1?void 0:i?nh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&ih(e,r,n),n};let oi=class extends wt{connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.registry.palette.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.palette.removeListener(this.UUID)}onSelect(t){this.registry.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return W`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return W`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(jn).map(([t,e])=>W`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};oi.styles=Ie`

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

    `;ja([Oe({type:String,reflect:!0,attribute:!0})],oi.prototype,"value",2);oi=ja([$e("registry-palette-dropdown")],oi);var sh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,Ua=(t,e,r,i)=>{for(var n=i>1?void 0:i?ah(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&sh(e,r,n),n};let li=class extends wt{connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const t=e=>{this.value!==e&&(this.value=e,this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}onInputChange(t){const e=parseFloat(t.target.value);this.value=e,this.registry.opacity.imposeOpacity(e)}updated(t){super.updated(t),t.has("value")&&parseFloat(t.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return W`
            <input
                id="handler"
                class="thermal-opacity-handler"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value="${this.value}"
                @input="${this.onInputChange}"
            />
            <slot></slot>
        `}};li.styles=Ie`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;Ua([Oe({type:Number,reflect:!0,attribute:!0})],li.prototype,"value",2);li=Ua([$e("registry-opacity-slider")],li);var oh=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,ch=(t,e,r,i)=>{for(var n=i>1?void 0:i?lh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&oh(e,r,n),n};let xn=class extends Ke{onLoadingStart(){}onInstanceCreated(t){}onFailure(t){}render(){return this.file?W`
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
        `:J}};xn.styles=Ie`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;xn=ch([$e("file-share-button")],xn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kn extends Ln{constructor(e){if(super(e),this.it=J,e.type!==Dn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===J||e==null)return this._t=void 0,this.it=e;if(e===At)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}kn.directiveName="unsafeHTML",kn.resultType=1;const ht=Mn(kn);var uh=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,dh=(t,e,r,i)=>{for(var n=i>1?void 0:i?hh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&uh(e,r,n),n};let _n=class extends Ke{onLoadingStart(){}onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const n=e.toFixed(r),s=i!==void 0?n+" "+i:n;return this.renderRow(t,s)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?W`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${ht(this.renderRow("Thermal file name",this.file.fileName))}

                        ${ht(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?ht(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):J}

                        ${ht(this.renderRow("Time",au.human(this.file.timestamp)))}

                        ${ht(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${ht(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${ht(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${ht(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${ht(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${ht(this.renderRow("Type",this.file.service.parser.name))}
                    ${ht(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>W`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:J}};_n.styles=Ie`

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
    
    `;_n=dh([$e("file-info-button")],_n);var ph=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,mh=(t,e,r,i)=>{for(var n=i>1?void 0:i?fh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&ph(e,r,n),n};let Ds=class extends wt{doAction(){this.registry.range.applyAuto()}render(){return W`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Ds=mh([$e("registry-range-auto-button")],Ds);var gh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,bh=(t,e,r,i)=>{for(var n=i>1?void 0:i?vh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&gh(e,r,n),n};let Ms=class extends wt{doAction(){this.registry.range.applyMinmax()}render(){return W`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Ms=bh([$e("registry-range-full-button")],Ms);var yh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,xi=(t,e,r,i)=>{for(var n=i>1?void 0:i?wh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&yh(e,r,n),n};let yt=class extends wt{constructor(){super(...arguments),this.ticksRef=Xe(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,n){const s=(t-e)*(n-i)/(r-e)+i;return this.clamp(s,i,n)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/yt.TICK_WIDTH)-2,n=100/i;for(let s=1;s<i;s++)r.push(n*s);r.push(100),this.ticks=r.map(s=>this.calculateOneTick(t,s)).filter(s=>s!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return W`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Qe(this.ticksRef)}>

                    ${this.ticks.map(t=>W`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(yt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};yt.TICK_WIDTH=40;yt.TICK_FIXED=2;yt.styles=Ie`

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
                height: 5px;
                //background: currentcolor;
            }
        
        }

        .placement-top {
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


    `;xi([Oe({type:String,reflect:!0})],yt.prototype,"placement",2);xi([ke()],yt.prototype,"minmax",2);xi([ke()],yt.prototype,"ticks",2);yt=xi([$e("registry-ticks-bar")],yt);var xh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Mr=(t,e,r,i)=>{for(var n=i>1?void 0:i?kh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&xh(e,r,n),n};let nr=class extends wt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return W`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return W`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Mr([ke()],nr.prototype,"minmax",2);Mr([ke()],nr.prototype,"range",2);Mr([ke()],nr.prototype,"opacity",2);Mr([ke()],nr.prototype,"palette",2);nr=Mr([$e("registry-log")],nr);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,c,v)=>c in o?t(o,c,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[c]=v,i=(o,c,v)=>(r(o,typeof c!="symbol"?c+"":c,v),v),n=(o,c)=>` ${c&&c.length>0?c.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,s=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",u="pointers-min-distance",h="pointers-max-distance",d="range-dragging",m="data",f="min",S="max",x="step",k="round",O="type",P="theme",F="rtl",U="btt",H="disabled",le="keyboard-disabled",Z="mousewheel-disabled",Pe="slider-width",j="slider-height",pe="slider-radius",ie="slider-bg",ce="slider-bg-hover",me="slider-bg-fill",ue="pointer-width",fe="pointer-height",ee="pointer-radius",ge="pointer-bg",Ae="pointer-bg-hover",qe="pointer-bg-focus",He="pointer-shadow",cr="pointer-shadow-hover",qt="pointer-shadow-focus",Lr="pointer-border",Rr="pointer-border-hover",_i="pointer-border-focus",Fr="animate-onclick",$i="css-links",it="vertical",$t="horizontal",ur=(o,c,v,p,T)=>{let V=c-o;return V===0?v:(p-v)*(T-o)/V+v},ct=o=>!isNaN(parseFloat(o))&&isFinite(o),Te=(o,c)=>ct(o)?Number(o):c,jr=(o,c)=>c===0?0:Math.round(o/c)*c,Pi=(o,c=1/0)=>{if(c===1/0)return o;let v=e(10,c);return Math.round(o*v)/v},Ue=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Si=(o,c)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:c}}))},Ci=(o,c)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:c}}))},Oi=(o,c)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:c}}))},Ei=(o,c)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:c}}))},Ai=(o,c)=>{if(!c||c.length<=0)return;let v=c.map(T=>ct(T)?Te(T,T):T),p={values:v||[]};p.value=v[0],p.value0=v[0],p.value1=v[0];for(let T=1;T<v.length;T++)p[`value${T+1}`]=v[T];o.dispatchEvent(new CustomEvent("change",{detail:p}))},w=(o,c,v)=>{let p=0,T,V,K,D,M=!1,te=(q,Ce,Ne,We,De,Me)=>{let Je=p;Ne!==void 0&&q>Ne&&(q=Ne),Ce!==void 0&&q<Ce&&(q=Ce),p=q;let et=p;return(We===it&&Me||We===$t&&De)&&(et=100-et),We===it?c.style.top=`${et}%`:c.style.left=`${et}%`,Je!==p},ae=q=>q===c||c.contains(q),N=(q,Ce,Ne,We)=>{T=q,V=Ce,K=Ne,D=We},xe=q=>{M=q,c.classList.toggle("disabled",M),M?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},ot=(q,Ce)=>{Ce==null?c.removeAttribute(q):c.setAttribute(q,Ce)},Ye=q=>c.getAttribute(q),z=q=>{if(!M){switch(q.key){case"ArrowLeft":{q.preventDefault(),typeof T=="function"&&T(v);break}case"ArrowRight":{q.preventDefault(),typeof V=="function"&&V(v);break}case"ArrowUp":{q.preventDefault(),typeof K=="function"&&K(v);break}case"ArrowDown":{q.preventDefault(),typeof D=="function"&&D(v);break}}Ei(o,q)}},re=()=>{M||Si(o,c)};return c.className=`pointer pointer-${v}`,c.addEventListener("keydown",z),c.addEventListener("click",re),{$pointer:c,get percent(){return p},get disabled(){return M},set disabled(q){xe(q)},updatePosition:te,isClicked:ae,setCallbacks:N,setAttr:ot,getAttr:Ye,destroy:()=>{c.removeEventListener("keydown",z),c.removeEventListener("click",re),c.remove()}}},C=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let c=o.split(","),v=[],p=!0;for(let T=0;T<c.length;T++){let V=c[T].trim();V!==""&&(v.push(V),ct(V)||(p=!1))}return p?v.map(T=>Number(T)):v},E=(o,c)=>c?c.findIndex(v=>v===o||v.toString().trim()===o.toString().trim()):-1,A=o=>({updatePosition:(c,v,p,T)=>{if(v.length<=0)return;let V=v.length===1,K=v[0],D=v[v.length-1];c===it?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),V?o.style.height=`${K}%`:o.style.height=`${Math.abs(K-D)}%`,T?(o.style.bottom="0%",V?o.style.top="auto":o.style.top=`${Math.min(100-D,100-K)}%`):(o.style.bottom="auto",V?o.style.top="0%":o.style.top=`${Math.min(K,D)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),V?o.style.width=`${K}%`:o.style.width=`${Math.abs(K-D)}%`,p?(o.style.right="0%",V?o.style.left="auto":o.style.left=`${Math.min(100-D,100-K)}%`):(o.style.right="auto",V?o.style.left="0%":o.style.left=`${Math.min(K,D)}%`))}}),B="--animate-onclick",be="--width",G="--height",Se="--panel-bg-border-radius",he="--panel-bg",L="--panel-bg-hover",de="--panel-bg-fill",y="--pointer-width",_="--pointer-height",X="--pointer-border-radius",ne="--pointer-bg",Fe="--pointer-bg-hover",Be="--pointer-bg-focus",ft="--pointer-shadow",nt="--pointer-shadow-hover",at="--pointer-shadow-focus",Pt="--pointer-border",I="--pointer-border-hover",Q="--pointer-border-focus",$=(o,c,v)=>{let p=new Map;for(let T of o.attributes){let V=T.nodeName.trim().toLowerCase();if(!c.test(V))continue;let K=V.replace(/\D/g,"").trim(),D=K===""||K==="0"||K==="1"?0:Te(K,0)-1,M=v&&typeof v=="function"?v(T.value):T.value;p.set(D,M)}return p},Y=o=>{if(!o)return null;let c=o.getAttribute($i);if(!c)return null;let v=c.split(";"),p=[];for(let T of v)T.trim()!==""&&p.push(T.trim());return p},ye=[[be,Pe,"sliderWidth",null],[G,j,"sliderHeight",null],[Se,pe,"sliderRadius",null],[he,ie,"sliderBg",null],[L,ce,"sliderBgHover",null],[de,me,"sliderBgFill",null],[y,ue,"pointer#Width",/^pointer([0-9]*)-width$/],[_,fe,"pointer#Height",/^pointer([0-9]*)-height$/],[X,ee,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ne,ge,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Fe,Ae,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Be,qe,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[ft,He,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[nt,cr,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[at,qt,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Pt,Lr,"pointer#Border",/^pointer([0-9]*)-border$/],[I,Rr,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Q,_i,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ve=(o,c,v)=>{let p=null,T=[],V=new Map,K=(z,re=c)=>{let q=[...re.classList];for(let Ce of q)Ce.startsWith(z)&&c.classList.remove(Ce)},D=()=>{K("shape");let z=c.querySelectorAll(".pointer");for(let re of z)K("shape",re)},M=z=>{p=z,K("theme-"),typeof z=="string"&&c.classList.add(`theme-${z}`)},te=()=>{if(D(),!(T.length<=0)){c.classList.add("shape",`shape-${T[0]}`);for(let z=1;z<T.length;z++){let re=T[z];if(!re)continue;let q=c.querySelector(`.pointer-${z}`);!q||q.classList.add("shape",`shape-${re}`)}}},ae=(z,re)=>{T[z]=re,te()},N=()=>{D();let z=$(o,/^pointer([0-9]*)-shape$/);if(!(z.size<=0)){for(let re of z){let q=re[0];T[q]=re[1]}te()}},xe=(z,re)=>`${z}-${re}`,ot=(z,re,q)=>{let Ce=v[q];if(!Ce)return;let Ne=q===0?c:Ce.$pointer;if(re==null){V.has(xe(z,q))&&V.delete(xe(z,q)),Ne.style.removeProperty(z);return}V.set(xe(z,q),re),Ne.style.setProperty(z,re)},Ye=(z,re)=>V.get(xe(z,re));return(()=>{for(let z of ye){let[re,q,Ce,Ne]=z;if(Ne){let De=$(o,Ne);for(let Me of De){let Je=Me[0],et=Me[1];ot(re,et,Je)}}else{let De=o.getAttribute(q);ot(re,De,0)}let We=[];if(Ce.indexOf("#")===-1)We.push([Ce,0]);else{We.push([Ce.replace("#",""),0]),We.push([Ce.replace("#","0"),0]),We.push([Ce.replace("#","1"),0]);for(let De=1;De<v.length;De++)We.push([Ce.replace("#",(De+1).toString()),De])}for(let De of We)try{let Me=De[0],Je=De[1];Object.prototype.hasOwnProperty.call(o,Me)||Object.defineProperty(o,Me,{get(){return Ye(re,Je)},set:et=>{ot(re,et,Je)}})}catch(Me){console.error(Me)}}M(o.getAttribute(P)),N()})(),{setStyle:ot,getStyle:Ye,get theme(){return p},set theme(z){M(z)},get pointerShapes(){return T},setPointerShape:ae}},Ee="animate-on-click",se="range-dragging",Ze=(o,c,v,p)=>{let T=[],V=ae=>{for(let N of T)N.update&&typeof N.update=="function"&&N.update(ae)},K=()=>{for(let ae of T)ae.destroy&&typeof ae.destroy=="function"&&ae.destroy()},D=(ae,N)=>{for(let xe of T)xe.onAttrChange&&typeof xe.onAttrChange=="function"&&xe.onAttrChange(ae,N)},M=ae=>{if(ae.gettersAndSetters){for(let N of ae.gettersAndSetters)if(!(!N.name||!N.attributes))try{Object.prototype.hasOwnProperty.call(o,N.name)||Object.defineProperty(o,N.name,N.attributes)}catch(xe){console.error("defineSettersGetters error:",xe)}}},te=ae=>{var N;if(!ae.css)return;let xe=(N=o.shadowRoot)==null?void 0:N.querySelector("style");!xe||(xe.innerHTML+=ae.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ae of window.tcRangeSliderPlugins){let N=ae();T.push(N),N.init&&typeof N.init=="function"&&(N.init(o,c,v,p),M(N),te(N))}},update:V,onAttrChange:D,destroy:K}},je=10,Ur=20,Ba=(o,c)=>{let v=new Map,p=/^value([0-9]*)$/;for(let D of o.attributes){let M=D.nodeName.trim().toLowerCase();if(!p.test(M))continue;let te=M.replace("value","").trim(),ae=te===""||te==="0"||te==="1"?0:Te(te,0)-1,N=ct(D.value)?Te(D.value,0):D.value;v.set(ae,N)}let T=Math.max(...Array.from(v.keys())),V=[];V.push([w(o,c,0),v.get(0)]);let K=c;for(let D=1;D<=T;D++){let M=c.cloneNode(!0);K.after(M),K=M,V.push([w(o,M,D),v.get(D)])}return V},In=(o,c,v,p,T,V,K)=>{try{Object.defineProperty(o,p,{configurable:!0,get(){if(!c)return;let D=c.pointers[v];if(!D)return;let M=c.getTextValue(D.percent);return ct(M)?Te(M,M):M},set:D=>{c.pointers[v]?c==null||c.setValue(D,v):c==null||c.addPointer(D)}}),Object.defineProperty(o,T,{configurable:!0,get(){var D,M;return(M=(D=c==null?void 0:c.pointers[v])==null?void 0:D.getAttr("aria-label"))!=null?M:void 0},set:D=>{!c||c.setAriaLabel(v,D)}}),Object.defineProperty(o,V,{configurable:!0,get(){var D,M;return(M=(D=c==null?void 0:c.styles)==null?void 0:D.pointerShapes[v])!=null?M:null},set:D=>{!c||!c.styles||c.styles.setPointerShape(v,D)}}),Object.defineProperty(o,K,{configurable:!0,get(){var D;return(D=c==null?void 0:c.pointers[v].disabled)!=null?D:!1},set:D=>{if(!c)return;let M=c==null?void 0:c.pointers[v];!M||(M.disabled=D)}})}catch(D){console.error(D)}},Va=(o,c)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let p=2;p<je;p++)v.push([`value${p}`,`ariaLabel${p}`,`pointer${p}Shape`,`pointer${p}Disabled`,p-1]);for(let p of v)In(o,c,p[4],p[0],p[1],p[2],p[3])},Hn=(o,c,v)=>{var p;let T=(p=v.shadowRoot)==null?void 0:p.querySelector(".container");if(T)for(let V of o)c?T.prepend(V.$pointer):T.append(V.$pointer)},za=(o,c)=>{if(!(!c||o.length<=1)){for(let v of o)v.$pointer.style.zIndex=Ur.toString();c.$pointer.style.zIndex=(Ur*2).toString()}},Ti=0,hr=100,Yt=2,Bn="0.3s",qa=(o,c,v)=>{let p=v.map(l=>l[0]),T=null,V=null,K=null,D=null,M=Ti,te=hr,ae,N,xe=$t,ot=Yt,Ye=!1,z=!1,re=!1,q=0,Ce=1/0,Ne=!1,We,De,Me=!1,Je=!1,et=!1,St=Bn,Vn=[],zn=l=>{Me||(l.preventDefault&&l.preventDefault(),Rt(l),window.addEventListener("mousemove",Rt),window.addEventListener("mouseup",Wr),Ci(o,l))},Wr=l=>{Me||(We=void 0,De=void 0,window.removeEventListener("mousemove",Rt),window.removeEventListener("mouseup",Wr),St&&c.classList.add(Ee),Oi(o,l))},Xa=(l,b)=>{if(p.length<=0)return;if(p.length===1)return p[0].isClicked(l)&&St&&c.classList.remove(Ee),p[0];let R=Ka(l);if(Ne){let we=b,ut=Ir(we);ut!==void 0&&(we=jr(we,ut)),R?(We=we,De=0,St&&c.classList.remove(Ee)):We!==void 0&&(De=we-We,We=we)}if(!Qa(l)&&!R){for(let we of p)if(!(!we.isClicked(l)||we.disabled))return St&&c.classList.remove(Ee),we;for(let we of p)if(T===we)return we}let _e=1/0,Le=null;for(let we of p){if(we.disabled)continue;let ut=Math.abs(b-we.percent);ut<_e&&(_e=ut,Le=we)}return Le},qn=()=>p.findIndex(l=>T===l&&!l.disabled),Rt=l=>{let b;if(xe===it){let{height:_e,top:Le}=c.getBoundingClientRect(),we=l.type.indexOf("mouse")!==-1?l.clientY:l.touches[0].clientY;b=Math.min(Math.max(0,we-Le),_e)*100/_e}else{let{width:_e,left:Le}=c.getBoundingClientRect(),we=l.type.indexOf("mouse")!==-1?l.clientX:l.touches[0].clientX;b=Math.min(Math.max(0,we-Le),_e)*100/_e}if((Ye||z)&&(b=100-b),T=Xa(l.target,b),T&&za(p,T),Ne&&p.length>1&&De!==void 0){let _e=p[0],Le=p[p.length-1],we=_e.percent+De<0,ut=Le.percent+De>100;if(we||ut)return;for(let Xr=0;Xr<p.length;Xr++)tt(Xr,p[Xr].percent+De);return}let R=qn();R!==-1&&(tt(R,b),T==null||T.$pointer.focus())},Nr=l=>{if(Me||document.activeElement!==o||T!=null&&T.disabled)return;l.stopPropagation(),l.preventDefault();let b=l.deltaY<0,R=Ye||z,_e=b?!R:R,Le=qn();Le!==-1&&(_e?dr(Le,p[Le].percent):pr(Le,p[Le].percent))},Yn=l=>{Me||Je||(xe===it?z?tt(l,100):tt(l,0):Ye?pr(l,p[l].percent):dr(l,p[l].percent))},Gn=l=>{Me||Je||(xe===it?z?tt(l,0):tt(l,100):Ye?dr(l,p[l].percent):pr(l,p[l].percent))},Xn=l=>{Me||Je||(xe===it?z?pr(l,p[l].percent):dr(l,p[l].percent):Ye?tt(l,100):tt(l,0))},Qn=l=>{Me||Je||(xe===it?z?dr(l,p[l].percent):pr(l,p[l].percent):Ye?tt(l,0):tt(l,100))},Qa=l=>l.classList.contains("panel"),Ka=l=>l.classList.contains("panel-fill"),dr=(l,b)=>{if(b===void 0)return;let R=Ir(b);R==null&&(R=1),b-=R,b<0&&(b=0),tt(l,b)},pr=(l,b)=>{if(b===void 0)return;let R=Ir(b);R==null&&(R=1),b+=R,b>100&&(b=100),tt(l,b)},Ft=()=>{!D||D.update({percents:Kn(),values:Zn(),$pointers:Jn(),min:es(),max:ts(),data:Li(),step:Mi(),round:Fi(),type:Ri(),textMin:Hr(),textMax:Br(),rightToLeft:Wi(),bottomToTop:Ni(),pointersOverlap:Vi(),pointersMinDistance:ji(),pointersMaxDistance:Ui(),rangeDragging:zi(),disabled:Ii(),keyboardDisabled:Hi(),mousewheelDisabled:Bi()})},Za=()=>{Ft()},Ja=l=>{if(!(re||p.length<=1||te===M))if(l===0){let b=Ce*100/(te-M);return Math.max(0,p[l+1].percent-b)}else{let b=q*100/(te-M);return Math.min(p[l-1].percent+b,100)}},eo=l=>{if(!(re||p.length<=1||te===M))if(l===p.length-1){let b=Ce*100/(te-M);return Math.min(p[l-1].percent+b,100)}else{let b=q*100/(te-M);return Math.max(0,p[l+1].percent-b)}},Ir=l=>{let b;if(typeof ae=="function"){let R=ur(0,100,M,te,l);b=ae(R,l)}else b=ae;if(ct(b)){let R=te-M;return b=R===0?0:b*100/R,b}},Gt=l=>{if(l===void 0)return;let b=ur(0,100,M,te,l);return N!==void 0?N[Math.round(b)]:Pi(b,ot)},Hr=()=>N!==void 0?N[M]:M,Br=()=>N!==void 0?N[te]:te,Mi=()=>ae,to=l=>{var b;return l<=0||re?Hr():(b=Gt(p[l-1].percent))!=null?b:""},ro=l=>{var b;return p.length<=1||l>=p.length-1||re?Br():(b=Gt(p[l+1].percent))!=null?b:""},Kn=()=>p.map(l=>l.percent),Zn=()=>p.map(l=>Gt(l.percent)),Jn=()=>p.map(l=>l.$pointer),es=()=>M,ts=()=>te,Li=()=>N,Ri=()=>xe,Fi=()=>ot,ji=()=>q,Ui=()=>Ce,io=l=>Vn[l],Wi=()=>Ye,Ni=()=>z,Ii=()=>Me,Hi=()=>Je,Bi=()=>et,Vi=()=>re,zi=()=>Ne,tt=(l,b)=>{if(b===void 0)return;let R=Ir(b);R!==void 0&&(b=jr(b,R));let _e=p[l];if(!_e)return;let Le=_e.updatePosition(b,Ja(l),eo(l),xe,Ye,z);V==null||V.updatePosition(xe,p.map(we=>we.percent),Ye,z),Ft();for(let we of p){let ut=Gt(we.percent);ut!==void 0&&(we.setAttr("aria-valuenow",ut.toString()),we.setAttr("aria-valuetext",ut.toString()))}so(),Le&&Ai(o,p.map(we=>Gt(we.percent)))},mt=()=>{for(let l=0;l<p.length;l++)tt(l,p[l].percent)},no=(l,b)=>{M=N!==void 0?0:Te(l,Ti),te=N!==void 0?N.length-1:Te(b,hr),Vr(M),zr(te)},so=()=>{var l,b;for(let R=0;R<p.length;R++){let _e=p[R];_e.setAttr("aria-valuemin",((l=to(R))!=null?l:"").toString()),_e.setAttr("aria-valuemax",((b=ro(R))!=null?b:"").toString())}},Vr=l=>{M=Te(l,Ti),M>te&&(te=M+hr),mt()},zr=l=>{te=Te(l,hr),te<M&&(te=M+hr),mt()},rs=l=>{re=!0;for(let b=0;b<l.length;b++)qr(l[b],b);re=!1;for(let b=0;b<l.length;b++)qr(l[b],b)},qr=(l,b)=>{let R;N!==void 0?(R=l==null?0:E(l,N),R===-1&&(R=0)):(R=Te(l,M),R<M&&(R=M),R>te&&(R=te));let _e=ur(M,te,0,100,R);tt(b,_e)},Yr=l=>{if(l==null){ae=void 0;return}if(typeof l=="function"){ae=l,mt();return}if(ct(l)){ae=Te(l,1);let b=Math.abs(te-M);ae>b&&(ae=void 0),mt();return}ae=void 0},qi=l=>{re=l,mt()},Yi=l=>{(!ct(l)||l<0)&&(l=0),q=l},Gi=l=>{(!ct(l)||l<0)&&(l=1/0),Ce=l},Xi=l=>{Me=l,c.classList.toggle("disabled",Me),Me?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},is=l=>{Je=l},ns=l=>{et=l,et?document.removeEventListener("wheel",Nr):document.addEventListener("wheel",Nr,{passive:!1})},Qi=l=>{if(l==null){N=void 0;return}if(N=C(l),N===void 0||N.length<=0){N=void 0;return}Vr(0),zr(N.length-1),ae===void 0&&Yr(1)},Ki=l=>{var b;typeof l=="string"?xe=l.trim().toLowerCase()===it?it:$t:xe=$t;let R=(b=o.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!R)return;R.className=`range-slider-box type-${xe}`,mt();let _e=xe===it?"vertical":"horizontal";for(let Le of p)Le.setAttr("aria-orientation",_e)},Zi=l=>{Ye=l,p.length>1&&Hn(p,Ye,o),mt(),Ft()},Ji=l=>{z=l,p.length>1&&Hn(p,z,o),mt(),Ft()},en=l=>{ot=Te(l,Yt),ot<0&&(ot=Yt),Ft()},ss=l=>{l==null||l.toString().trim().toLowerCase()==="false"?(St=void 0,c.style.removeProperty(B),c.classList.remove(Ee)):(St=l.toString(),c.style.setProperty(B,St),c.classList.add(Ee))},as=(l,b)=>{let R=p[l];!R||(R.setAttr("aria-label",b),Vn[l]=b)},Gr=l=>{if(We=void 0,p.length<=1){Ne=!1,c.classList.remove(se);return}Ne=l,c.classList.toggle(se,Ne)},ao=()=>{Xi(Ue(o.getAttribute(H))),Je=Ue(o.getAttribute(le)),et=Ue(o.getAttribute(Z));let l=$(o,/^pointer([0-9]*)-disabled$/,b=>Ue(b));for(let b of l){let R=b[0];!p[R]||(p[R].disabled=b[1])}},oo=()=>{let l=$(o,/^aria-label([0-9]*)$/);for(let b of l){let R=b[0];as(R,b[1])}},lo=l=>{let b=p.length,R=p[b-1].$pointer,_e=R.cloneNode(!0);R.after(_e);let Le=w(o,_e,b);return Le.setCallbacks(Yn,Gn,Xn,Qn),p.push(Le),qr(l,b),mt(),Ft(),b},co=()=>{let l=p.length,b=p[l-1];return b?(b.destroy(),p.pop(),p.length<=1&&Gr(!1),mt(),Ft(),l-1):-1};return(()=>{var l,b;for(let _e of p)_e.setCallbacks(Yn,Gn,Xn,Qn);let R=(l=o.shadowRoot)==null?void 0:l.querySelector(".panel-fill");R&&(V=A(R)),Ki(o.getAttribute(O)),Zi(Ue(o.getAttribute(F))),Ji(Ue(o.getAttribute(U))),no(o.getAttribute(f),o.getAttribute(S)),Yr(o.getAttribute(x)),Qi(o.getAttribute(m)),rs(v.map(_e=>_e[1])),qi(Ue(o.getAttribute(a))),Yi(Te(o.getAttribute(u),0)),Gi(Te(o.getAttribute(h),1/0)),Gr(Ue(o.getAttribute(d))),en(Te(o.getAttribute(k),Yt)),ao(),oo(),K=ve(o,c,p),ss((b=o.getAttribute(Fr))!=null?b:Bn),c.addEventListener("mousedown",zn),c.addEventListener("mouseup",Wr),c.addEventListener("touchmove",Rt),c.addEventListener("touchstart",Rt),et||document.addEventListener("wheel",Nr,{passive:!1}),D=Ze(o,Za,{setValues:rs,setMin:Vr,setMax:zr,setStep:Yr,setPointersOverlap:qi,setPointersMinDistance:Yi,setPointersMaxDistance:Gi,setDisabled:Xi,setType:Ki,setRightToLeft:Zi,setBottomToTop:Ji,setRound:en,setKeyboardDisabled:is,setMousewheelDisabled:ns,setRangeDragging:Gr,setData:Qi},{getPercents:Kn,getValues:Zn,getPointerElements:Jn,getMin:es,getMax:ts,getStep:Mi,getData:Li,getType:Ri,getRound:Fi,getTextMin:Hr,getTextMax:Br,isRightToLeft:Wi,isBottomToTop:Ni,isDisabled:Ii,isKeyboardDisabled:Hi,isMousewheelDisabled:Bi,isPointersOverlap:Vi,isRangeDraggingEnabled:zi,getPointersMinDistance:ji,getPointersMaxDistance:Ui}),D.init()})(),{get pointers(){return p},get styles(){return K},get pluginsManager(){return D},get min(){return Hr()},get max(){return Br()},get step(){return Mi()},get pointersOverlap(){return Vi()},set pointersOverlap(l){qi(l)},get pointersMinDistance(){return ji()},set pointersMinDistance(l){Yi(l)},get pointersMaxDistance(){return Ui()},set pointersMaxDistance(l){Gi(l)},get disabled(){return Ii()},set disabled(l){Xi(l)},get data(){return Li()},get type(){return Ri()},set type(l){Ki(l)},get rightToLeft(){return Wi()},set rightToLeft(l){Zi(l)},get bottomToTop(){return Ni()},set bottomToTop(l){Ji(l)},get round(){return Fi()},set round(l){en(l)},get animateOnClick(){return St},set animateOnClick(l){ss(l)},get keyboardDisabled(){return Hi()},set keyboardDisabled(l){is(l)},get mousewheelDisabled(){return Bi()},set mousewheelDisabled(l){ns(l)},get rangeDragging(){return zi()},set rangeDragging(l){Gr(l)},setMin:Vr,setMax:zr,setValue:qr,setStep:Yr,setData:Qi,getTextValue:Gt,setAriaLabel:as,getAriaLabel:io,addPointer:lo,removePointer:co,destroy:()=>{c.removeEventListener("mousedown",zn),c.removeEventListener("mouseup",Wr),c.removeEventListener("touchmove",Rt),c.removeEventListener("touchstart",Rt),document.removeEventListener("wheel",Nr);for(let l of p)l.destroy();D==null||D.destroy()}}},Ya=(o,c,v)=>{let p=ye.find(([D,M,te,ae])=>M.replace("#","")===c.replace(/\d+/g,""));if(p&&o.styles){let[D,M,te,ae]=p,N=c.replace(/\D/g,"").trim(),xe=N===""||N==="0"||N==="1"?0:Te(N,0)-1;o.styles.setStyle(D,v,xe);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(c,v),c){case f:{o.setMin(v);break}case S:{o.setMax(v);break}case x:{o.setStep(v);break}case a:{o.pointersOverlap=Ue(v);break}case u:{o.pointersMinDistance=Te(v,0);break}case d:{o.rangeDragging=Ue(v);break}case h:{o.pointersMaxDistance=Te(v,1/0);break}case H:{o.disabled=Ue(v);break}case le:{o.keyboardDisabled=Ue(v);break}case Z:{o.mousewheelDisabled=Ue(v);break}case m:{o.setData(v);break}case O:{o.type=v;break}case F:{o.rightToLeft=Ue(v);break}case U:{o.bottomToTop=Ue(v);break}case k:{o.round=Te(v,Yt);break}case P:{o.styles&&(o.styles.theme=v);break}case Fr:{o.animateOnClick=v;break}}let T=null;if(/^value([0-9]*)$/.test(c)&&(T="value"),/^pointer([0-9]*)-disabled$/.test(c)&&(T="pointer-disabled"),/^aria-label([0-9]*)$/.test(c)&&(T="aria-label"),/^pointer([0-9]*)-shape$/.test(c)&&(T="pointer-shape"),!T)return;let V=c.replace(/\D/g,"").trim(),K=V===""||V==="0"||V==="1"?0:Te(V,0)-1;switch(T){case"value":{o.setValue(v,K);break}case"pointer-disabled":{let D=o==null?void 0:o.pointers[K];if(!D)return;D.disabled=Ue(v);break}case"aria-label":{o.setAriaLabel(K,v);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(K,v);break}}},Ga=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.disabled)!=null?c:!1}set data(o){var c;(c=this.slider)==null||c.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var c;(c=this.slider)==null||c.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var c;(c=this.slider)==null||c.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,c;return(c=(o=this.slider)==null?void 0:o.round)!=null?c:Yt}set type(o){!this.slider||(this.slider.type=o??$t)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||$t}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?c:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?c:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?c:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,c,v;return(v=(c=(o=this.slider)==null?void 0:o.styles)==null?void 0:c.theme)!=null?v:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,c;return(c=(o=this.slider)==null?void 0:o.rightToLeft)!=null?c:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,c;return(c=(o=this.slider)==null?void 0:o.bottomToTop)!=null?c:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?c:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?c:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,c;return(c=(o=this.slider)==null?void 0:o.rangeDragging)!=null?c:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ue(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var c,v;if(!this.slider)return;let p=(v=(c=this.slider)==null?void 0:c.addPointer(o))!=null?v:0;In(this,this.slider,p,`value${p+1}`,`ariaLabel${p+1}`,`pointerShape${p+1}`,`pointer${p+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let c=document.createElement("style");c.textContent=o,this.shadowRoot.appendChild(c)}connectedCallback(){var o,c;if(!this.shadowRoot)return;this._externalCSSList=Y(this),this.shadowRoot.innerHTML=n(s,this._externalCSSList);let v=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!v)return;let p=(c=this.shadowRoot)==null?void 0:c.getElementById("range-slider");if(!p)return;let T=Ba(this,v);this.slider=qa(this,p,T),Va(this,this.slider),this._observer=new MutationObserver(V=>{V.forEach(K=>{var D;if(!this.slider||K.type!=="attributes")return;let M=K.attributeName;!M||Ya(this.slider,M,(D=this.getAttribute(M))!=null?D:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Di=Ga;window.tcRangeSlider=Di,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Di),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Di{})})();(()=>{var t=(u,h,d,m,f)=>{let S=h-u;return S===0?d:(m-d)*(f-u)/S+d},e=u=>!isNaN(parseFloat(u))&&isFinite(u),r=(u,h)=>e(u)?Number(u):h,i=u=>u==null?!1:typeof u=="boolean"?u:u.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var n=11,s=11,a=()=>{let u=null,h=null,d=null,m=null,f=null,S=!1,x=n,k=s,O=()=>{var j;let pe=(j=u==null?void 0:u.shadowRoot)==null?void 0:j.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),d.append(m),f=document.createElement("div"),f.classList.add("mark-values"),d.append(f),pe.append(d)},P=()=>{!h||!d||d.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},F=()=>{var j;if(!d||!h)return;let pe=h.getMin(),ie=h.getMax(),ce=h.getType()==="vertical",me=h.isRightToLeft()||h.isBottomToTop();for(let fe=0;fe<x;fe++){let ee=document.createElement("div");ee.classList.add("mark",`mark-${fe}`);let ge=x===0?0:fe*100/(x-1);ce?me?ee.style.top=`${100-ge}%`:ee.style.top=`${ge}%`:me?ee.style.left=`${100-ge}%`:ee.style.left=`${ge}%`,m==null||m.append(ee)}let ue=h.getData();for(let fe=0;fe<k;fe++){let ee=document.createElement("div");ee.classList.add("mark-value",`mark-value-${fe}`);let ge=k===0?0:fe*100/(k-1),Ae=t(0,k-1,pe,ie,fe);ee.textContent=(ue?(j=ue[Math.round(Ae)])!=null?j:"":Ae).toString(),ce?me?ee.style.top=`${100-ge}%`:ee.style.top=`${ge}%`:me?ee.style.left=`${100-ge}%`:ee.style.left=`${ge}%`,f==null||f.append(ee)}},U=(j,pe)=>{Pe(),x=j,k=pe,x<=0&&(x=n),k<=0&&(k=s),O(),F(),P()},H=j=>{S=j,S?(O(),F(),P()):Pe()},le=j=>{!d||d.style.setProperty("--marks-color",j)},Z=j=>{!d||d.style.setProperty("--values-color",j)},Pe=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(j,pe,ie,ce)=>{var me,ue;h=ce,u=j,S=i(u.getAttribute("marks")),S&&(U(r(u.getAttribute("marks-count"),n),r(u.getAttribute("marks-values-count"),s)),le((me=u.getAttribute("marks-color"))!=null?me:"#cbd5e1"),Z((ue=u.getAttribute("marks-values-color"))!=null?ue:"#475569"))},onAttrChange:(j,pe)=>{j==="marks"&&H(i(pe)),j==="marks-count"&&U(r(pe,n),k),j==="marks-values-count"&&U(x,r(pe,s)),j==="marks-color"&&le(pe),j==="marks-values-color"&&Z(pe)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return S??!1},set:j=>{H(i(j))}}},{name:"marksCount",attributes:{get(){return x??n},set:j=>{U(r(j,n),k)}}},{name:"marksValuesCount",attributes:{get(){return x??n},set:j=>{U(x,r(j,s))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:j=>{le(j)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:j=>{Z(j)}}}],destroy:Pe,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var _h=Object.defineProperty,$h=Object.getOwnPropertyDescriptor,zt=(t,e,r,i)=>{for(var n=i>1?void 0:i?$h(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&_h(e,r,n),n};let _t=class extends wt{constructor(){super(...arguments),this.sliderRef=Xe()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.UUID,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.UUID,t=>{t&&(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}firstUpdated(t){super.firstUpdated(t);const e=this.sliderRef.value;e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const n=r.detail;this.from=n.value1,this.to=n.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return W`

        <div class="container ${this.canRanderSlider()?"ready":"loading"}">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Qe(this.sliderRef)}
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
                slider-bg-fill="${this.palette.gradient}"

                pointer-bg="${this.palette.pixels[0]}"
                pointer2-bg="${this.palette.pixels[this.palette.pixels.length-1]}"
                
                generate-labels="true"
                
            ></tc-range-slider>

        </div>

        `}};_t.styles=Ie`

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
    
    `;zt([Oe({type:Number,reflect:!0})],_t.prototype,"min",2);zt([Oe({type:Number,reflect:!0})],_t.prototype,"max",2);zt([Oe({type:Number,reflect:!0})],_t.prototype,"from",2);zt([Oe({type:Number,reflect:!0})],_t.prototype,"to",2);zt([ke()],_t.prototype,"palette",2);zt([ke()],_t.prototype,"sliderRef",2);_t=zt([$e("registry-range-slider")],_t);var Ph=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,Ch=(t,e,r,i)=>{for(var n=i>1?void 0:i?Sh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ph(e,r,n),n};let $n=class extends Ke{onLoadingStart(){}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?J:W`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this.file?"Download":"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.exportAsPng()}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.exportThermalDataAsSvg()}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

        
        `}};$n.styles=Ie`

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
    
    `;$n=Ch([$e("file-download-dropdown")],$n);var Oh=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,ki=(t,e,r,i)=>{for(var n=i>1?void 0:i?Eh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Oh(e,r,n),n};let sr=class extends wt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return W`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":J}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>W`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():W`
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
        `}};sr.styles=Ie`

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


    `;ki([ke()],sr.prototype,"histogram",2);ki([Oe({type:Boolean,reflect:!0})],sr.prototype,"interactive",2);ki([Oe({type:String,reflect:!0})],sr.prototype,"height",2);sr=ki([$e("registry-histogram")],sr);var Ah=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Wa=(t,e,r,i)=>{for(var n=i>1?void 0:i?Th(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ah(e,r,n),n};let ci=class extends Ke{constructor(){super(...arguments),this.timelineRef=Xe(),this.barRef=Xe(),this.highlights=[]}onLoadingStart(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}applyBarClick(t){if(this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}recieveHighlights(t){this.highlights=t}render(){var e,r;const t=this.file;return t===void 0||t.duration===0||this.parentFileProviderElement===void 0?J:W`
            <div class="container">


                ${t!==void 0?W`
                        <div class="container">

                            <div class="item button" @click=${this.playing?this.parentFileProviderElement.pause.bind(this.parentFileProviderElement):this.parentFileProviderElement.play.bind(this.parentFileProviderElement)}>


                                ${this.playing?W`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:W`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor">
                                ${(e=this.currentFrame)==null?void 0:e.time}
                            </div>

                            <div class="item timeline" @click=${this.applyBarClick.bind(this)} ${Qe(this.timelineRef)}>
                                <div class="timeline-bar">
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Qe(this.barRef)}></div>
                                </div>
                                <div class="timeline-marks">
                                    ${this.highlights.length>0?this.highlights.map(i=>{const n=i.fromMs/t.duration*100,s=(i.toMs-i.fromMs)/t.duration*100;return W`
                                        <div class="mark" style="left: ${n}%; width: ${s}%"></div>
                                    `}):J}
                                </div>
                            </div>

                            <div class="item">${(r=this.duration)==null?void 0:r.time}</div>
                        </div>
                    `:J}

            <file-playback-speed-dropdown></file-playback-speed-dropdown>
            
            </div>

            ${this.currentFrame!==void 0?W`<div class="small real">
                    <div>
                        <span class="label">Date:</span> ${Sr(this.currentFrame.absolute,"d. L. Y")}</div>
                    <div><span class="label">Time:</span> ${Sr(this.currentFrame.absolute,"H:mm:ss:SSS")}</div>
                    <div>`:J}

          `}};ci.styles=Ie`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

        }

        .item {
        
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
            width: calc( var( --thermal-gap ) * 5 );
        }

        .duration {
        
        }

        .small {
            font-size: var( --thermal-fs-small );
        }

        .real {
            display: flex;
            gap: 1rem;

            .label { opacity: .5; }
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
    
    `;Wa([ke()],ci.prototype,"highlights",2);ci=Wa([$e("file-timeline")],ci);var Dh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,Lh=(t,e,r,i)=>{for(var n=i>1?void 0:i?Mh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Dh(e,r,n),n};let Pn=class extends Ke{onLoadingStart(){}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?J:W`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(ba).map(([t])=>W`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof It&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Pn.styles=Ie`

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
    
    `;Pn=Lh([$e("file-playback-speed-dropdown")],Pn);var Rh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Na=(t,e,r,i)=>{for(var n=i>1?void 0:i?Fh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Rh(e,r,n),n};let Sn=class extends Ke{onLoadingStart(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback()}onInstanceCreated(t){}onFailure(t){}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.log(t,e,r)}willUpdate(t){super.willUpdate(t)}render(){return this.file===void 0&&this.failure===void 0?this.renderLoading():this.file!==void 0?this.renderSuccess():this.renderFailure()}renderLoading(){return W`<div>Načítám</div>`}renderSuccess(){var t;return W`<div>${(t=this.file)==null?void 0:t.fileName}</div>`}renderFailure(){var t;return W`<div>${(t=this.failure)==null?void 0:t.message}</div>`}};Na([Oe({type:String,attribute:!0,reflect:!0})],Sn.prototype,"uuid",2);Sn=Na([$e("test-component")],Sn);var jh=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,Wh=(t,e,r,i)=>{for(var n=i>1?void 0:i?Uh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&jh(e,r,n),n};let Cn=class extends Ke{onLoadingStart(){}onInstanceCreated(){}onFailure(){}render(){return W`
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

            <registry-ticks-bar slot="pre"></registry-ticks-bar>
            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
        </thermal-app>
    `}};Cn.styles=Ie`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
    }
  
  `;Cn=Wh([$e("file-app")],Cn);var Nh=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,Ia=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ih(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Nh(e,r,n),n};let On=class extends Wn{constructor(){super(...arguments),this.url=""}render(){return this.url===""?J:W`

    <manager-provider id="manager_${this.UUID}">

      <registry-provider id="registry_${this.UUID}">

        <group-provider id="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Ia([Oe({type:String,reflect:!0})],On.prototype,"url",2);On=Ia([$e("thermal-file-app")],On);const un=window.matchMedia("(prefers-color-scheme: dark)"),Nn="thermal-dark-mode",Ls=()=>{document.body.classList.add(Nn)},Hh=()=>{document.body.classList.remove(Nn)},Bh=()=>{un.matches&&Ls();const t=e=>{e.matches?Ls():Hh()};un.addEventListener("change",t),un.addListener(t)},Vh=Ns.version.toString().replaceAll(".","-"),Ha=t=>`thermal__${t}__${Vh}`,zh=t=>document.getElementById(Ha(t))!==null,Rs=(t,e)=>{if(!zh(t)){const r=document.createElement("style");r.setAttribute("id",Ha(t)),r.innerHTML=e,document.head.appendChild(r)}},qh=()=>{Rs("rootVariables",`

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


            
        
        `),Rs("darkModeOverrides",`
        
            body.${Nn} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${js}
    Author: ${Ws}
    Repository: ${Us.url}
    `);Bh();qh();document.addEventListener("DOMContentLoaded",()=>{});
