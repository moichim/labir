var Xa=Object.defineProperty;var Qa=(t,e,r)=>e in t?Xa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var v=(t,e,r)=>(Qa(t,typeof e!="symbol"?e+"":e,r),r);const Ka="@labir/embed",Ds="1.2.23",Za="Embedded display of thermograms",Ja="dist/embed.js",eo="module",Ms={type:"git",url:"https://github.com/moichim/labir"},to={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},Rs="Jan Jáchim <jachim5@gmail.com>",ro="ISC",no={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@types/uuid":"^9.0.8","date-fns":"^3.6.0",lit:"^3.1.4","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11",workerpool:"^9.1.3"},io={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},Ls={name:Ka,version:Ds,description:Za,main:Ja,type:eo,repository:Ms,scripts:to,author:Rs,license:ro,dependencies:no,devDependencies:io};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=globalThis,ki=qr.ShadowRoot&&(qr.ShadyCSS===void 0||qr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$i=Symbol(),rs=new WeakMap;let js=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==$i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(ki&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=rs.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&rs.set(r,e))}return e}toString(){return this.cssText}};const so=t=>new js(typeof t=="string"?t:t+"",void 0,$i),ze=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new js(r,t,$i)},ao=(t,e)=>{if(ki)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=qr.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},ns=ki?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return so(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oo,defineProperty:lo,getOwnPropertyDescriptor:co,getOwnPropertyNames:uo,getOwnPropertySymbols:ho,getPrototypeOf:po}=Object,Ot=globalThis,is=Ot.trustedTypes,fo=is?is.emptyScript:"",Jn=Ot.reactiveElementPolyfillSupport,mr=(t,e)=>t,Gr={toAttribute(t,e){switch(e){case Boolean:t=t?fo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Pi=(t,e)=>!oo(t,e),ss={attribute:!0,type:String,converter:Gr,reflect:!1,hasChanged:Pi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ot.litPropertyMetadata??(Ot.litPropertyMetadata=new WeakMap);class Qt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ss){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&lo(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:s}=co(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const u=i==null?void 0:i.call(this);s.call(this,a),this.requestUpdate(e,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ss}static _$Ei(){if(this.hasOwnProperty(mr("elementProperties")))return;const e=po(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mr("properties"))){const r=this.properties,n=[...uo(r),...ho(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(ns(i))}else e!==void 0&&r.push(ns(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ao(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const a=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:Gr).toAttribute(r,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,r){var s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Gr;this._$Em=i,this[i]=u.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Pi)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}Qt.elementStyles=[],Qt.shadowRootOptions={mode:"open"},Qt[mr("elementProperties")]=new Map,Qt[mr("finalized")]=new Map,Jn==null||Jn({ReactiveElement:Qt}),(Ot.reactiveElementVersions??(Ot.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=globalThis,Xr=vr.trustedTypes,as=Xr?Xr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Fs="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,Us="?"+Ct,go=`<${Us}>`,Wt=document,yr=()=>Wt.createComment(""),wr=t=>t===null||typeof t!="object"&&typeof t!="function",Ns=Array.isArray,mo=t=>Ns(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ei=`[ 	
\f\r]`,pr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,os=/-->/g,ls=/>/g,Ft=RegExp(`>|${ei}(?:([^\\s"'>=/]+)(${ei}*=${ei}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cs=/'/g,us=/"/g,Ws=/^(?:script|style|textarea|title)$/i,vo=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Y=vo(1),Et=Symbol.for("lit-noChange"),de=Symbol.for("lit-nothing"),hs=new WeakMap,Nt=Wt.createTreeWalker(Wt,129);function Is(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return as!==void 0?as.createHTML(e):e}const bo=(t,e)=>{const r=t.length-1,n=[];let i,s=e===2?"<svg>":"",a=pr;for(let u=0;u<r;u++){const h=t[u];let d,g,f=-1,S=0;for(;S<h.length&&(a.lastIndex=S,g=a.exec(h),g!==null);)S=a.lastIndex,a===pr?g[1]==="!--"?a=os:g[1]!==void 0?a=ls:g[2]!==void 0?(Ws.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=Ft):g[3]!==void 0&&(a=Ft):a===Ft?g[0]===">"?(a=i??pr,f=-1):g[1]===void 0?f=-2:(f=a.lastIndex-g[2].length,d=g[1],a=g[3]===void 0?Ft:g[3]==='"'?us:cs):a===us||a===cs?a=Ft:a===os||a===ls?a=pr:(a=Ft,i=void 0);const x=a===Ft&&t[u+1].startsWith("/>")?" ":"";s+=a===pr?h+go:f>=0?(n.push(d),h.slice(0,f)+Fs+h.slice(f)+Ct+x):h+Ct+(f===-2?u:x)}return[Is(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class xr{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let s=0,a=0;const u=e.length-1,h=this.parts,[d,g]=bo(e,r);if(this.el=xr.createElement(d,n),Nt.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Nt.nextNode())!==null&&h.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Fs)){const S=g[a++],x=i.getAttribute(f).split(Ct),_=/([.?@])?(.*)/.exec(S);h.push({type:1,index:s,name:_[2],strings:x,ctor:_[1]==="."?wo:_[1]==="?"?xo:_[1]==="@"?_o:on}),i.removeAttribute(f)}else f.startsWith(Ct)&&(h.push({type:6,index:s}),i.removeAttribute(f));if(Ws.test(i.tagName)){const f=i.textContent.split(Ct),S=f.length-1;if(S>0){i.textContent=Xr?Xr.emptyScript:"";for(let x=0;x<S;x++)i.append(f[x],yr()),Nt.nextNode(),h.push({type:2,index:++s});i.append(f[S],yr())}}}else if(i.nodeType===8)if(i.data===Us)h.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(Ct,f+1))!==-1;)h.push({type:7,index:s}),f+=Ct.length-1}s++}}static createElement(e,r){const n=Wt.createElement("template");return n.innerHTML=e,n}}function Zt(t,e,r=t,n){var a,u;if(e===Et)return e;let i=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const s=wr(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((u=i==null?void 0:i._$AO)==null||u.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=Zt(t,i._$AS(t,e.values),i,n)),e}class yo{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??Wt).importNode(r,!0);Nt.currentNode=i;let s=Nt.nextNode(),a=0,u=0,h=n[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new $r(s,s.nextSibling,this,e):h.type===1?d=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(d=new ko(s,this,e)),this._$AV.push(d),h=n[++u]}a!==(h==null?void 0:h.index)&&(s=Nt.nextNode(),a++)}return Nt.currentNode=Wt,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class $r{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=de,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Zt(this,e,r),wr(e)?e===de||e==null||e===""?(this._$AH!==de&&this._$AR(),this._$AH=de):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):mo(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==de&&wr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Wt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=xr.createElement(Is(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(r);else{const a=new yo(i,this),u=a.u(this.options);a.p(r),this.T(u),this._$AH=a}}_$AC(e){let r=hs.get(e.strings);return r===void 0&&hs.set(e.strings,r=new xr(e)),r}k(e){Ns(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of e)i===r.length?r.push(n=new $r(this.S(yr()),this.S(yr()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class on{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,s){this.type=1,this._$AH=de,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=de}_$AI(e,r=this,n,i){const s=this.strings;let a=!1;if(s===void 0)e=Zt(this,e,r,0),a=!wr(e)||e!==this._$AH&&e!==Et,a&&(this._$AH=e);else{const u=e;let h,d;for(e=s[0],h=0;h<s.length-1;h++)d=Zt(this,u[n+h],r,h),d===Et&&(d=this._$AH[h]),a||(a=!wr(d)||d!==this._$AH[h]),d===de?e=de:e!==de&&(e+=(d??"")+s[h+1]),this._$AH[h]=d}a&&!i&&this.j(e)}j(e){e===de?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wo extends on{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===de?void 0:e}}class xo extends on{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==de)}}class _o extends on{constructor(e,r,n,i,s){super(e,r,n,i,s),this.type=5}_$AI(e,r=this){if((e=Zt(this,e,r,0)??de)===Et)return;const n=this._$AH,i=e===de&&n!==de||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==de&&(n===de||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class ko{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Zt(this,e)}}const ti=vr.litHtmlPolyfillSupport;ti==null||ti(xr,$r),(vr.litHtmlVersions??(vr.litHtmlVersions=[])).push("3.1.4");const $o=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new $r(e.insertBefore(yr(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qe=class extends Qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$o(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Et}};var Ts;qe._$litElement$=!0,qe.finalized=!0,(Ts=globalThis.litElementHydrateSupport)==null||Ts.call(globalThis,{LitElement:qe});const ri=globalThis.litElementPolyfillSupport;ri==null||ri({LitElement:qe});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po={attribute:!0,type:String,converter:Gr,reflect:!1,hasChanged:Pi},So=(t=Po,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),n==="accessor"){const{name:a}=r;return{set(u){const h=e.get.call(this);e.set.call(this,u),this.requestUpdate(a,h,t)},init(u){return u!==void 0&&this.P(a,void 0,t),u}}}if(n==="setter"){const{name:a}=r;return function(u){const h=this[a];e.call(this,u),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+n)};function Ee(t){return(e,r)=>typeof r=="object"?So(t,e,r):((n,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(t){return Ee({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ln(t){return(e,r)=>{const{slot:n,selector:i}=t??{},s="slot"+(n?`[name=${n}]`:":not([name])");return Co(e,r,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(s),u=(a==null?void 0:a.assignedElements(t))??[];return i===void 0?u:u.filter(d=>d.matches(i))}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ci=t=>(...e)=>({_$litDirective$:t,values:e});class Oi{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const br=(t,e)=>{var n;const r=t._$AN;if(r===void 0)return!1;for(const i of r)(n=i._$AO)==null||n.call(i,e,!1),br(i,e);return!0},Qr=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Hs=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),To(e)}};function Eo(t){this._$AN!==void 0?(Qr(this),this._$AM=t,Hs(this)):this._$AM=t}function Ao(t,e=!1,r=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let s=r;s<n.length;s++)br(n[s],!1),Qr(n[s]);else n!=null&&(br(n,!1),Qr(n));else br(this,t)}const To=t=>{t.type==Si.CHILD&&(t._$AP??(t._$AP=Ao),t._$AQ??(t._$AQ=Eo))};class Do extends Oi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,n){super._$AT(e,r,n),Hs(this),this.isConnected=e._$AU}_$AO(e,r=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),r&&(br(this,e),Qr(this))}setValue(e){if(Oo(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=()=>new Mo;class Mo{}const ni=new WeakMap,Je=Ci(class extends Do{render(t){return de}update(t,[e]){var n;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),de}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=ni.get(e);r===void 0&&(r=new WeakMap,ni.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=ni.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ro=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,Bs=(t,e,r,n)=>{for(var i=n>1?void 0:n?Lo(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Ro(e,r,i),i};let Kr=class extends qe{constructor(){super(),this.dialogRef=Ge(),this.closeButtonRef=Ge(),this.invokerRef=Ge()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return Y`
            <slot name="invoker" ${Je(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Je(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Je(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Kr.styles=ze`

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

        
    
    `;Bs([Ee({type:String,reflect:!0})],Kr.prototype,"label",2);Kr=Bs([Se("thermal-dialog")],Kr);var jo=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,cn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Fo(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&jo(e,r,i),i};let At=class extends qe{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return Y`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};At.VARIANTS=["slate","primary","foreground","background"];At.styles=ze`

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
    
    `;cn([Ee({type:String,converter:{fromAttribute:t=>At.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],At.prototype,"variant",2);cn([Ee({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],At.prototype,"interactive",2);cn([Ee({type:String})],At.prototype,"size",2);At=cn([Se("thermal-button")],At);const Jt=Math.min,yt=Math.max,Zr=Math.round,Tt=t=>({x:t,y:t}),Uo={left:"right",right:"left",bottom:"top",top:"bottom"},No={start:"end",end:"start"};function ds(t,e,r){return yt(t,Jt(e,r))}function Pr(t,e){return typeof t=="function"?t(e):t}function wt(t){return t.split("-")[0]}function un(t){return t.split("-")[1]}function zs(t){return t==="x"?"y":"x"}function Vs(t){return t==="y"?"height":"width"}function Sr(t){return["top","bottom"].includes(wt(t))?"y":"x"}function Ys(t){return zs(Sr(t))}function Wo(t,e,r){r===void 0&&(r=!1);const n=un(t),i=Ys(t),s=Vs(i);let a=i==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=Jr(a)),[a,Jr(a)]}function Io(t){const e=Jr(t);return[ci(t),e,ci(e)]}function ci(t){return t.replace(/start|end/g,e=>No[e])}function Ho(t,e,r){const n=["left","right"],i=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:n:e?n:i;case"left":case"right":return e?s:a;default:return[]}}function Bo(t,e,r,n){const i=un(t);let s=Ho(wt(t),r==="start",n);return i&&(s=s.map(a=>a+"-"+i),e&&(s=s.concat(s.map(ci)))),s}function Jr(t){return t.replace(/left|right|bottom|top/g,e=>Uo[e])}function zo(t){return{top:0,right:0,bottom:0,left:0,...t}}function qs(t){return typeof t!="number"?zo(t):{top:t,right:t,bottom:t,left:t}}function er(t){const{x:e,y:r,width:n,height:i}=t;return{width:n,height:i,top:r,left:e,right:e+n,bottom:r+i,x:e,y:r}}function ps(t,e,r){let{reference:n,floating:i}=t;const s=Sr(e),a=Ys(e),u=Vs(a),h=wt(e),d=s==="y",g=n.x+n.width/2-i.width/2,f=n.y+n.height/2-i.height/2,S=n[u]/2-i[u]/2;let x;switch(h){case"top":x={x:g,y:n.y-i.height};break;case"bottom":x={x:g,y:n.y+n.height};break;case"right":x={x:n.x+n.width,y:f};break;case"left":x={x:n.x-i.width,y:f};break;default:x={x:n.x,y:n.y}}switch(un(e)){case"start":x[a]-=S*(r&&d?-1:1);break;case"end":x[a]+=S*(r&&d?-1:1);break}return x}const Vo=async(t,e,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:a}=r,u=s.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let d=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:g,y:f}=ps(d,n,h),S=n,x={},_=0;for(let O=0;O<u.length;O++){const{name:P,fn:j}=u[O],{x:U,y:I,data:oe,reset:Z}=await j({x:g,y:f,initialPlacement:n,placement:S,strategy:i,middlewareData:x,rects:d,platform:a,elements:{reference:t,floating:e}});g=U??g,f=I??f,x={...x,[P]:{...x[P],...oe}},Z&&_<=50&&(_++,typeof Z=="object"&&(Z.placement&&(S=Z.placement),Z.rects&&(d=Z.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):Z.rects),{x:g,y:f}=ps(d,S,h)),O=-1)}return{x:g,y:f,placement:S,strategy:i,middlewareData:x}};async function Gs(t,e){var r;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:a,elements:u,strategy:h}=t,{boundary:d="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:S=!1,padding:x=0}=Pr(e,t),_=qs(x),P=u[S?f==="floating"?"reference":"floating":f],j=er(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(P)))==null||r?P:P.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(u.floating)),boundary:d,rootBoundary:g,strategy:h})),U=f==="floating"?{x:n,y:i,width:a.floating.width,height:a.floating.height}:a.reference,I=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u.floating)),oe=await(s.isElement==null?void 0:s.isElement(I))?await(s.getScale==null?void 0:s.getScale(I))||{x:1,y:1}:{x:1,y:1},Z=er(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:U,offsetParent:I,strategy:h}):U);return{top:(j.top-Z.top+_.top)/oe.y,bottom:(Z.bottom-j.bottom+_.bottom)/oe.y,left:(j.left-Z.left+_.left)/oe.x,right:(Z.right-j.right+_.right)/oe.x}}const Yo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,n;const{placement:i,middlewareData:s,rects:a,initialPlacement:u,platform:h,elements:d}=e,{mainAxis:g=!0,crossAxis:f=!0,fallbackPlacements:S,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:O=!0,...P}=Pr(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const j=wt(i),U=wt(u)===u,I=await(h.isRTL==null?void 0:h.isRTL(d.floating)),oe=S||(U||!O?[Jr(u)]:Io(u));!S&&_!=="none"&&oe.push(...Bo(u,O,_,I));const Z=[u,...oe],ke=await Gs(e,P),F=[];let pe=((n=s.flip)==null?void 0:n.overflows)||[];if(g&&F.push(ke[j]),f){const ce=Wo(i,a,I);F.push(ke[ce[0]],ke[ce[1]])}if(pe=[...pe,{placement:i,overflows:F}],!F.every(ce=>ce<=0)){var re,le;const ce=(((re=s.flip)==null?void 0:re.index)||0)+1,fe=Z[ce];if(fe)return{data:{index:ce,overflows:pe},reset:{placement:fe}};let J=(le=pe.filter(me=>me.overflows[0]<=0).sort((me,Ae)=>me.overflows[1]-Ae.overflows[1])[0])==null?void 0:le.placement;if(!J)switch(x){case"bestFit":{var ge;const me=(ge=pe.map(Ae=>[Ae.placement,Ae.overflows.filter(Ve=>Ve>0).reduce((Ve,Ie)=>Ve+Ie,0)]).sort((Ae,Ve)=>Ae[1]-Ve[1])[0])==null?void 0:ge[0];me&&(J=me);break}case"initialPlacement":J=u;break}if(i!==J)return{reset:{placement:J}}}return{}}}};function Xs(t){const e=Jt(...t.map(s=>s.left)),r=Jt(...t.map(s=>s.top)),n=yt(...t.map(s=>s.right)),i=yt(...t.map(s=>s.bottom));return{x:e,y:r,width:n-e,height:i-r}}function qo(t){const e=t.slice().sort((i,s)=>i.y-s.y),r=[];let n=null;for(let i=0;i<e.length;i++){const s=e[i];!n||s.y-n.y>n.height/2?r.push([s]):r[r.length-1].push(s),n=s}return r.map(i=>er(Xs(i)))}const Go=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:n,rects:i,platform:s,strategy:a}=e,{padding:u=2,x:h,y:d}=Pr(t,e),g=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(n.reference))||[]),f=qo(g),S=er(Xs(g)),x=qs(u);function _(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&d!=null)return f.find(P=>h>P.left-x.left&&h<P.right+x.right&&d>P.top-x.top&&d<P.bottom+x.bottom)||S;if(f.length>=2){if(Sr(r)==="y"){const le=f[0],ge=f[f.length-1],ce=wt(r)==="top",fe=le.top,J=ge.bottom,me=ce?le.left:ge.left,Ae=ce?le.right:ge.right,Ve=Ae-me,Ie=J-fe;return{top:fe,bottom:J,left:me,right:Ae,width:Ve,height:Ie,x:me,y:fe}}const P=wt(r)==="left",j=yt(...f.map(le=>le.right)),U=Jt(...f.map(le=>le.left)),I=f.filter(le=>P?le.left===U:le.right===j),oe=I[0].top,Z=I[I.length-1].bottom,ke=U,F=j,pe=F-ke,re=Z-oe;return{top:oe,bottom:Z,left:ke,right:F,width:pe,height:re,x:ke,y:oe}}return S}const O=await s.getElementRects({reference:{getBoundingClientRect:_},floating:n.floating,strategy:a});return i.reference.x!==O.reference.x||i.reference.y!==O.reference.y||i.reference.width!==O.reference.width||i.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function Xo(t,e){const{placement:r,platform:n,elements:i}=t,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),a=wt(r),u=un(r),h=Sr(r)==="y",d=["left","top"].includes(a)?-1:1,g=s&&h?-1:1,f=Pr(e,t);let{mainAxis:S,crossAxis:x,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return u&&typeof _=="number"&&(x=u==="end"?_*-1:_),h?{x:x*g,y:S*d}:{x:S*d,y:x*g}}const Qo=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,n;const{x:i,y:s,placement:a,middlewareData:u}=e,h=await Xo(e,t);return a===((r=u.offset)==null?void 0:r.placement)&&(n=u.arrow)!=null&&n.alignmentOffset?{}:{x:i+h.x,y:s+h.y,data:{...h,placement:a}}}}},Ko=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:u={fn:P=>{let{x:j,y:U}=P;return{x:j,y:U}}},...h}=Pr(t,e),d={x:r,y:n},g=await Gs(e,h),f=Sr(wt(i)),S=zs(f);let x=d[S],_=d[f];if(s){const P=S==="y"?"top":"left",j=S==="y"?"bottom":"right",U=x+g[P],I=x-g[j];x=ds(U,x,I)}if(a){const P=f==="y"?"top":"left",j=f==="y"?"bottom":"right",U=_+g[P],I=_-g[j];_=ds(U,_,I)}const O=u.fn({...e,[S]:x,[f]:_});return{...O,data:{x:O.x-r,y:O.y-n}}}}};function or(t){return Qs(t)?(t.nodeName||"").toLowerCase():"#document"}function rt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Mt(t){var e;return(e=(Qs(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Qs(t){return t instanceof Node||t instanceof rt(t).Node}function gt(t){return t instanceof Element||t instanceof rt(t).Element}function mt(t){return t instanceof HTMLElement||t instanceof rt(t).HTMLElement}function fs(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof rt(t).ShadowRoot}function Cr(t){const{overflow:e,overflowX:r,overflowY:n,display:i}=ct(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+r)&&!["inline","contents"].includes(i)}function Zo(t){return["table","td","th"].includes(or(t))}function hn(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ei(t){const e=Ai(),r=ct(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Jo(t){let e=Dt(t);for(;mt(e)&&!tr(e);){if(hn(e))return null;if(Ei(e))return e;e=Dt(e)}return null}function Ai(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tr(t){return["html","body","#document"].includes(or(t))}function ct(t){return rt(t).getComputedStyle(t)}function dn(t){return gt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Dt(t){if(or(t)==="html")return t;const e=t.assignedSlot||t.parentNode||fs(t)&&t.host||Mt(t);return fs(e)?e.host:e}function Ks(t){const e=Dt(t);return tr(e)?t.ownerDocument?t.ownerDocument.body:t.body:mt(e)&&Cr(e)?e:Ks(e)}function ui(t,e,r){var n;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=Ks(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),a=rt(i);return s?e.concat(a,a.visualViewport||[],Cr(i)?i:[],a.frameElement&&r?ui(a.frameElement):[]):e.concat(i,ui(i,[],r))}function Zs(t){const e=ct(t);let r=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=mt(t),s=i?t.offsetWidth:r,a=i?t.offsetHeight:n,u=Zr(r)!==s||Zr(n)!==a;return u&&(r=s,n=a),{width:r,height:n,$:u}}function Js(t){return gt(t)?t:t.contextElement}function Kt(t){const e=Js(t);if(!mt(e))return Tt(1);const r=e.getBoundingClientRect(),{width:n,height:i,$:s}=Zs(e);let a=(s?Zr(r.width):r.width)/n,u=(s?Zr(r.height):r.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!u||!Number.isFinite(u))&&(u=1),{x:a,y:u}}const el=Tt(0);function ea(t){const e=rt(t);return!Ai()||!e.visualViewport?el:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function tl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==rt(t)?!1:e}function _r(t,e,r,n){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),s=Js(t);let a=Tt(1);e&&(n?gt(n)&&(a=Kt(n)):a=Kt(t));const u=tl(s,r,n)?ea(s):Tt(0);let h=(i.left+u.x)/a.x,d=(i.top+u.y)/a.y,g=i.width/a.x,f=i.height/a.y;if(s){const S=rt(s),x=n&&gt(n)?rt(n):n;let _=S,O=_.frameElement;for(;O&&n&&x!==_;){const P=Kt(O),j=O.getBoundingClientRect(),U=ct(O),I=j.left+(O.clientLeft+parseFloat(U.paddingLeft))*P.x,oe=j.top+(O.clientTop+parseFloat(U.paddingTop))*P.y;h*=P.x,d*=P.y,g*=P.x,f*=P.y,h+=I,d+=oe,_=rt(O),O=_.frameElement}}return er({width:g,height:f,x:h,y:d})}function rl(t){let{elements:e,rect:r,offsetParent:n,strategy:i}=t;const s=i==="fixed",a=Mt(n),u=e?hn(e.floating):!1;if(n===a||u&&s)return r;let h={scrollLeft:0,scrollTop:0},d=Tt(1);const g=Tt(0),f=mt(n);if((f||!f&&!s)&&((or(n)!=="body"||Cr(a))&&(h=dn(n)),mt(n))){const S=_r(n);d=Kt(n),g.x=S.x+n.clientLeft,g.y=S.y+n.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-h.scrollLeft*d.x+g.x,y:r.y*d.y-h.scrollTop*d.y+g.y}}function nl(t){return Array.from(t.getClientRects())}function ta(t){return _r(Mt(t)).left+dn(t).scrollLeft}function il(t){const e=Mt(t),r=dn(t),n=t.ownerDocument.body,i=yt(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=yt(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let a=-r.scrollLeft+ta(t);const u=-r.scrollTop;return ct(n).direction==="rtl"&&(a+=yt(e.clientWidth,n.clientWidth)-i),{width:i,height:s,x:a,y:u}}function sl(t,e){const r=rt(t),n=Mt(t),i=r.visualViewport;let s=n.clientWidth,a=n.clientHeight,u=0,h=0;if(i){s=i.width,a=i.height;const d=Ai();(!d||d&&e==="fixed")&&(u=i.offsetLeft,h=i.offsetTop)}return{width:s,height:a,x:u,y:h}}function al(t,e){const r=_r(t,!0,e==="fixed"),n=r.top+t.clientTop,i=r.left+t.clientLeft,s=mt(t)?Kt(t):Tt(1),a=t.clientWidth*s.x,u=t.clientHeight*s.y,h=i*s.x,d=n*s.y;return{width:a,height:u,x:h,y:d}}function gs(t,e,r){let n;if(e==="viewport")n=sl(t,r);else if(e==="document")n=il(Mt(t));else if(gt(e))n=al(e,r);else{const i=ea(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return er(n)}function ra(t,e){const r=Dt(t);return r===e||!gt(r)||tr(r)?!1:ct(r).position==="fixed"||ra(r,e)}function ol(t,e){const r=e.get(t);if(r)return r;let n=ui(t,[],!1).filter(u=>gt(u)&&or(u)!=="body"),i=null;const s=ct(t).position==="fixed";let a=s?Dt(t):t;for(;gt(a)&&!tr(a);){const u=ct(a),h=Ei(a);!h&&u.position==="fixed"&&(i=null),(s?!h&&!i:!h&&u.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Cr(a)&&!h&&ra(t,a))?n=n.filter(g=>g!==a):i=u,a=Dt(a)}return e.set(t,n),n}function ll(t){let{element:e,boundary:r,rootBoundary:n,strategy:i}=t;const a=[...r==="clippingAncestors"?hn(e)?[]:ol(e,this._c):[].concat(r),n],u=a[0],h=a.reduce((d,g)=>{const f=gs(e,g,i);return d.top=yt(f.top,d.top),d.right=Jt(f.right,d.right),d.bottom=Jt(f.bottom,d.bottom),d.left=yt(f.left,d.left),d},gs(e,u,i));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function cl(t){const{width:e,height:r}=Zs(t);return{width:e,height:r}}function ul(t,e,r){const n=mt(e),i=Mt(e),s=r==="fixed",a=_r(t,!0,s,e);let u={scrollLeft:0,scrollTop:0};const h=Tt(0);if(n||!n&&!s)if((or(e)!=="body"||Cr(i))&&(u=dn(e)),n){const f=_r(e,!0,s,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else i&&(h.x=ta(i));const d=a.left+u.scrollLeft-h.x,g=a.top+u.scrollTop-h.y;return{x:d,y:g,width:a.width,height:a.height}}function ii(t){return ct(t).position==="static"}function ms(t,e){return!mt(t)||ct(t).position==="fixed"?null:e?e(t):t.offsetParent}function na(t,e){const r=rt(t);if(hn(t))return r;if(!mt(t)){let i=Dt(t);for(;i&&!tr(i);){if(gt(i)&&!ii(i))return i;i=Dt(i)}return r}let n=ms(t,e);for(;n&&Zo(n)&&ii(n);)n=ms(n,e);return n&&tr(n)&&ii(n)&&!Ei(n)?r:n||Jo(t)||r}const hl=async function(t){const e=this.getOffsetParent||na,r=this.getDimensions,n=await r(t.floating);return{reference:ul(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function dl(t){return ct(t).direction==="rtl"}const pl={convertOffsetParentRelativeRectToViewportRelativeRect:rl,getDocumentElement:Mt,getClippingRect:ll,getOffsetParent:na,getElementRects:hl,getClientRects:nl,getDimensions:cl,getScale:Kt,isElement:gt,isRTL:dl},fl=Qo,gl=Ko,ml=Yo,vl=Go,bl=(t,e,r)=>{const n=new Map,i={platform:pl,...r},s={...i.platform,_c:n};return Vo(t,e,{...i,platform:s})};var yl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,pn=(t,e,r,n)=>{for(var i=n>1?void 0:n?wl(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&yl(e,r,i),i};let rr=class extends qe{constructor(){super(...arguments),this.dropdownRef=Ge(),this.invokerRef=Ge(),this.optionsRef=Ge(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){bl(this.invokerRef.value,this.optionsRef.value,{middleware:[fl(2),ml(),vl(),gl()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var n,i,s,a;t==="open"&&(r==="open"?((n=this.optionsRef.value)==null||n.classList.add("dropdown-options__show"),(i=this.dropdownRef.value)==null||i.classList.add("dropdown__open")):((s=this.optionsRef.value)==null||s.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){return Y`

            <div class="dropdown" ${Je(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${Je(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?Y`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:Y`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Je(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};rr.styles=ze`

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
    
    `;pn([ln({slot:"option"})],rr.prototype,"_options",2);pn([Ee({type:String,reflect:!0})],rr.prototype,"open",2);pn([Ee({type:String,reflect:!0})],rr.prototype,"variant",2);rr=pn([Se("thermal-dropdown")],rr);var xl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,fn=(t,e,r,n)=>{for(var i=n>1?void 0:n?_l(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&xl(e,r,i),i};let nr=class extends qe{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Ge(),this.contentRef=Ge(),this.rulerContentRef=Ge()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const n=this.contentRef.value.clientWidth;this.lastContentWidth=n}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return Y`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Je(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Je(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Je(this.contentRef)}>

                    ${this.collapsed===!1?Y`
                        <slot></slot>    
                    `:de}
                
                </div>

            </div>

            ${this.collapsed?Y`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:de}
        
        `}};nr.styles=ze`

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

    `;fn([Ce()],nr.prototype,"collapsed",2);fn([Ce()],nr.prototype,"lastContentWidth",2);fn([Ce()],nr.prototype,"drawerRef",2);nr=fn([Se("thermal-bar")],nr);var kl=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,gn=(t,e,r,n)=>{for(var i=n>1?void 0:n?$l(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&kl(e,r,i),i};let ir=class extends qe{constructor(){super()}render(){return Y`

        <div class="container">
            
        ${this.barElements.length>=0?Y`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        `:""}

        ${this.pre.length>=0?Y`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}


        <slot></slot>

        </div>
        
        `}};ir.styles=ze`

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
    
    `;gn([ln({slot:"bar",flatten:!0})],ir.prototype,"barItems",2);gn([ln({slot:"bar",flatten:!0})],ir.prototype,"barElements",2);gn([ln({slot:"pre",flatten:!0})],ir.prototype,"pre",2);ir=gn([Se("thermal-app")],ir);var Pl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,Cl=(t,e,r,n)=>{for(var i=n>1?void 0:n?Sl(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Pl(e,r,i),i};let hi=class extends qe{render(){return Y`
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
                        <p>version ${Ls.version}</p>
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
        `}};hi.styles=ze`

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
    
    `;hi=Cl([Se("app-info-button")],hi);function st(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function It(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const ia=6048e5,Ol=864e5;let El={};function mn(){return El}function kr(t,e){var u,h,d,g;const r=mn(),n=(e==null?void 0:e.weekStartsOn)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((g=(d=r.locale)==null?void 0:d.options)==null?void 0:g.weekStartsOn)??0,i=st(t),s=i.getDay(),a=(s<n?7:0)+s-n;return i.setDate(i.getDate()-a),i.setHours(0,0,0,0),i}function en(t){return kr(t,{weekStartsOn:1})}function sa(t){const e=st(t),r=e.getFullYear(),n=It(t,0);n.setFullYear(r+1,0,4),n.setHours(0,0,0,0);const i=en(n),s=It(t,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const a=en(s);return e.getTime()>=i.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function vs(t){const e=st(t);return e.setHours(0,0,0,0),e}function bs(t){const e=st(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Al(t,e){const r=vs(t),n=vs(e),i=+r-bs(r),s=+n-bs(n);return Math.round((i-s)/Ol)}function Tl(t){const e=sa(t),r=It(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),en(r)}function Dl(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function aa(t){if(!Dl(t)&&typeof t!="number")return!1;const e=st(t);return!isNaN(Number(e))}function Ml(t){const e=st(t),r=It(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Rl={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ll=(t,e,r)=>{let n;const i=Rl[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};function si(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const jl={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Fl={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ul={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Nl={date:si({formats:jl,defaultWidth:"full"}),time:si({formats:Fl,defaultWidth:"full"}),dateTime:si({formats:Ul,defaultWidth:"full"})},Wl={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Il=(t,e,r,n)=>Wl[t];function fr(t){return(e,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let i;if(n==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,u=r!=null&&r.width?String(r.width):a;i=t.formattingValues[u]||t.formattingValues[a]}else{const a=t.defaultWidth,u=r!=null&&r.width?String(r.width):t.defaultWidth;i=t.values[u]||t.values[a]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const Hl={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Bl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},zl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Vl={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Yl={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ql={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Gl=(t,e)=>{const r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Xl={ordinalNumber:Gl,era:fr({values:Hl,defaultWidth:"wide"}),quarter:fr({values:Bl,defaultWidth:"wide",argumentCallback:t=>t-1}),month:fr({values:zl,defaultWidth:"wide"}),day:fr({values:Vl,defaultWidth:"wide"}),dayPeriod:fr({values:Yl,defaultWidth:"wide",formattingValues:ql,defaultFormattingWidth:"wide"})};function gr(t){return(e,r={})=>{const n=r.width,i=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const a=s[0],u=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(u)?Kl(u,f=>f.test(a)):Ql(u,f=>f.test(a));let d;d=t.valueCallback?t.valueCallback(h):h,d=r.valueCallback?r.valueCallback(d):d;const g=e.slice(a.length);return{value:d,rest:g}}}function Ql(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Kl(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Zl(t){return(e,r={})=>{const n=e.match(t.matchPattern);if(!n)return null;const i=n[0],s=e.match(t.parsePattern);if(!s)return null;let a=t.valueCallback?t.valueCallback(s[0]):s[0];a=r.valueCallback?r.valueCallback(a):a;const u=e.slice(i.length);return{value:a,rest:u}}}const Jl=/^(\d+)(th|st|nd|rd)?/i,ec=/\d+/i,tc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rc={any:[/^b/i,/^(a|c)/i]},nc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ic={any:[/1/i,/2/i,/3/i,/4/i]},sc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ac={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},oc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},lc={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},cc={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},uc={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},hc={ordinalNumber:Zl({matchPattern:Jl,parsePattern:ec,valueCallback:t=>parseInt(t,10)}),era:gr({matchPatterns:tc,defaultMatchWidth:"wide",parsePatterns:rc,defaultParseWidth:"any"}),quarter:gr({matchPatterns:nc,defaultMatchWidth:"wide",parsePatterns:ic,defaultParseWidth:"any",valueCallback:t=>t+1}),month:gr({matchPatterns:sc,defaultMatchWidth:"wide",parsePatterns:ac,defaultParseWidth:"any"}),day:gr({matchPatterns:oc,defaultMatchWidth:"wide",parsePatterns:lc,defaultParseWidth:"any"}),dayPeriod:gr({matchPatterns:cc,defaultMatchWidth:"any",parsePatterns:uc,defaultParseWidth:"any"})},dc={code:"en-US",formatDistance:Ll,formatLong:Nl,formatRelative:Il,localize:Xl,match:hc,options:{weekStartsOn:0,firstWeekContainsDate:1}};function pc(t){const e=st(t);return Al(e,Ml(e))+1}function fc(t){const e=st(t),r=+en(e)-+Tl(e);return Math.round(r/ia)+1}function oa(t,e){var g,f,S,x;const r=st(t),n=r.getFullYear(),i=mn(),s=(e==null?void 0:e.firstWeekContainsDate)??((f=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((x=(S=i.locale)==null?void 0:S.options)==null?void 0:x.firstWeekContainsDate)??1,a=It(t,0);a.setFullYear(n+1,0,s),a.setHours(0,0,0,0);const u=kr(a,e),h=It(t,0);h.setFullYear(n,0,s),h.setHours(0,0,0,0);const d=kr(h,e);return r.getTime()>=u.getTime()?n+1:r.getTime()>=d.getTime()?n:n-1}function gc(t,e){var u,h,d,g;const r=mn(),n=(e==null?void 0:e.firstWeekContainsDate)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(d=r.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??1,i=oa(t,e),s=It(t,0);return s.setFullYear(i,0,n),s.setHours(0,0,0,0),kr(s,e)}function mc(t,e){const r=st(t),n=+kr(r,e)-+gc(r,e);return Math.round(n/ia)+1}function ae(t,e){const r=t<0?"-":"",n=Math.abs(t).toString().padStart(e,"0");return r+n}const St={y(t,e){const r=t.getFullYear(),n=r>0?r:1-r;return ae(e==="yy"?n%100:n,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):ae(r+1,2)},d(t,e){return ae(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return ae(t.getHours()%12||12,e.length)},H(t,e){return ae(t.getHours(),e.length)},m(t,e){return ae(t.getMinutes(),e.length)},s(t,e){return ae(t.getSeconds(),e.length)},S(t,e){const r=e.length,n=t.getMilliseconds(),i=Math.trunc(n*Math.pow(10,r-3));return ae(i,e.length)}},Gt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ys={G:function(t,e,r){const n=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const n=t.getFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return St.y(t,e)},Y:function(t,e,r,n){const i=oa(t,n),s=i>0?i:1-i;if(e==="YY"){const a=s%100;return ae(a,2)}return e==="Yo"?r.ordinalNumber(s,{unit:"year"}):ae(s,e.length)},R:function(t,e){const r=sa(t);return ae(r,e.length)},u:function(t,e){const r=t.getFullYear();return ae(r,e.length)},Q:function(t,e,r){const n=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return ae(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){const n=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return ae(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){const n=t.getMonth();switch(e){case"M":case"MM":return St.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){const n=t.getMonth();switch(e){case"L":return String(n+1);case"LL":return ae(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){const i=mc(t,n);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):ae(i,e.length)},I:function(t,e,r){const n=fc(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):ae(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):St.d(t,e)},D:function(t,e,r){const n=pc(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):ae(n,e.length)},E:function(t,e,r){const n=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){const i=t.getDay(),s=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return ae(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){const i=t.getDay(),s=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return ae(s,e.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){const n=t.getDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return ae(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){const n=t.getHours();let i;switch(n===12?i=Gt.noon:n===0?i=Gt.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){const n=t.getHours();let i;switch(n>=17?i=Gt.evening:n>=12?i=Gt.afternoon:n>=4?i=Gt.morning:i=Gt.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let n=t.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return St.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):St.H(t,e)},K:function(t,e,r){const n=t.getHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):ae(n,e.length)},k:function(t,e,r){let n=t.getHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):ae(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):St.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):St.s(t,e)},S:function(t,e){return St.S(t,e)},X:function(t,e,r){const n=t.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return xs(n);case"XXXX":case"XX":return Ut(n);case"XXXXX":case"XXX":default:return Ut(n,":")}},x:function(t,e,r){const n=t.getTimezoneOffset();switch(e){case"x":return xs(n);case"xxxx":case"xx":return Ut(n);case"xxxxx":case"xxx":default:return Ut(n,":")}},O:function(t,e,r){const n=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ws(n,":");case"OOOO":default:return"GMT"+Ut(n,":")}},z:function(t,e,r){const n=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ws(n,":");case"zzzz":default:return"GMT"+Ut(n,":")}},t:function(t,e,r){const n=Math.trunc(t.getTime()/1e3);return ae(n,e.length)},T:function(t,e,r){const n=t.getTime();return ae(n,e.length)}};function ws(t,e=""){const r=t>0?"-":"+",n=Math.abs(t),i=Math.trunc(n/60),s=n%60;return s===0?r+String(i):r+String(i)+e+ae(s,2)}function xs(t,e){return t%60===0?(t>0?"-":"+")+ae(Math.abs(t)/60,2):Ut(t,e)}function Ut(t,e=""){const r=t>0?"-":"+",n=Math.abs(t),i=ae(Math.trunc(n/60),2),s=ae(n%60,2);return r+i+e+s}const _s=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},la=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},vc=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return _s(t,e);let s;switch(n){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",_s(n,e)).replace("{{time}}",la(i,e))},bc={p:la,P:vc},yc=/^D+$/,wc=/^Y+$/,xc=["D","DD","YY","YYYY"];function _c(t){return yc.test(t)}function kc(t){return wc.test(t)}function $c(t,e,r){const n=Pc(t,e,r);if(console.warn(n),xc.includes(t))throw new RangeError(n)}function Pc(t,e,r){const n=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Sc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Cc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Oc=/^'([^]*?)'?$/,Ec=/''/g,Ac=/[a-zA-Z]/;function ks(t,e,r){var g,f,S,x;const n=mn(),i=n.locale??dc,s=n.firstWeekContainsDate??((f=(g=n.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??1,a=n.weekStartsOn??((x=(S=n.locale)==null?void 0:S.options)==null?void 0:x.weekStartsOn)??0,u=st(t);if(!aa(u))throw new RangeError("Invalid time value");let h=e.match(Cc).map(_=>{const O=_[0];if(O==="p"||O==="P"){const P=bc[O];return P(_,i.formatLong)}return _}).join("").match(Sc).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const O=_[0];if(O==="'")return{isToken:!1,value:Tc(_)};if(ys[O])return{isToken:!0,value:_};if(O.match(Ac))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:_}});i.localize.preprocessor&&(h=i.localize.preprocessor(u,h));const d={firstWeekContainsDate:s,weekStartsOn:a,locale:i};return h.map(_=>{if(!_.isToken)return _.value;const O=_.value;(kc(O)||_c(O))&&$c(O,e,String(t));const P=ys[O[0]];return P(u,O,i.localize,d)}).join("")}function Tc(t){const e=t.match(Oc);return e?e[1].replace(Ec,"'"):t}function ai(t,e){const r=st(t);if(!aa(r))throw new RangeError("Invalid time value");const n=(e==null?void 0:e.format)??"extended",i=(e==null?void 0:e.representation)??"complete";let s="";const a=n==="extended"?"-":"",u=n==="extended"?":":"";if(i!=="time"){const h=ae(r.getDate(),2),d=ae(r.getMonth()+1,2);s=`${ae(r.getFullYear(),4)}${a}${d}${a}${h}`}if(i!=="date"){const h=ae(r.getHours(),2),d=ae(r.getMinutes(),2),g=ae(r.getSeconds(),2);s=`${s}${s===""?"":" "}${h}${u}${d}${u}${g}`}return s}var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mc(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),r}var di={exports:{}};const Rc={},Lc=Object.freeze(Object.defineProperty({__proto__:null,default:Rc},Symbol.toStringTag,{value:"Module"})),Xt=Mc(Lc);/**
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
 */(function(t,e){(function(r,n){n(e)})(Dc,function(r){var n={},i={exports:{}};(function(w){var C=function(H){return typeof H<"u"&&H.versions!=null&&H.versions.node!=null&&H+""=="[object process]"};w.exports.isNode=C,w.exports.platform=typeof process<"u"&&C(process)?"node":"browser";var E=w.exports.platform==="node"&&Xt;w.exports.isMainThread=w.exports.platform==="node"?(!E||E.isMainThread)&&!process.connected:typeof Window<"u",w.exports.cpus=w.exports.platform==="browser"?self.navigator.hardwareConcurrency:Xt.cpus().length})(i);var s=i.exports,a={},u;function h(){if(u)return a;u=1;function w(H,be){var G=this;if(!(this instanceof w))throw new SyntaxError("Constructor must be called with the new operator");if(typeof H!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var $e=[],ue=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var R=function(X,ne){$e.push(X),ue.push(ne)};this.then=function(k,X){return new w(function(ne,je){var He=k?C(k,ne,je):ne,dt=X?C(X,ne,je):je;R(He,dt)},G)};var he=function(X){return G.resolved=!0,G.rejected=!1,G.pending=!1,$e.forEach(function(ne){ne(X)}),R=function(je,He){je(X)},he=y=function(){},G},y=function(X){return G.resolved=!1,G.rejected=!0,G.pending=!1,ue.forEach(function(ne){ne(X)}),R=function(je,He){He(X)},he=y=function(){},G};this.cancel=function(){return be?be.cancel():y(new E),G},this.timeout=function(k){if(be)be.timeout(k);else{var X=setTimeout(function(){y(new A("Promise timed out after "+k+" ms"))},k);G.always(function(){clearTimeout(X)})}return G},H(function(k){he(k)},function(k){y(k)})}function C(H,be,G){return function($e){try{var ue=H($e);ue&&typeof ue.then=="function"&&typeof ue.catch=="function"?ue.then(be,G):be(ue)}catch(R){G(R)}}}w.prototype.catch=function(H){return this.then(null,H)},w.prototype.always=function(H){return this.then(H,H)},w.all=function(H){return new w(function(be,G){var $e=H.length,ue=[];$e?H.forEach(function(R,he){R.then(function(y){ue[he]=y,$e--,$e==0&&be(ue)},function(y){$e=0,G(y)})}):be(ue)})},w.defer=function(){var H={};return H.promise=new w(function(be,G){H.resolve=be,H.reject=G}),H};function E(H){this.message=H||"promise cancelled",this.stack=new Error().stack}E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="CancellationError",w.CancellationError=E;function A(H){this.message=H||"timeout exceeded",this.stack=new Error().stack}return A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="TimeoutError",w.TimeoutError=A,a.Promise=w,a}function d(w,C){(C==null||C>w.length)&&(C=w.length);for(var E=0,A=Array(C);E<C;E++)A[E]=w[E];return A}function g(w,C){var E=typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(!E){if(Array.isArray(w)||(E=j(w))||C){E&&(w=E);var A=0,H=function(){};return{s:H,n:function(){return A>=w.length?{done:!0}:{done:!1,value:w[A++]}},e:function(ue){throw ue},f:H}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var be,G=!0,$e=!1;return{s:function(){E=E.call(w)},n:function(){var ue=E.next();return G=ue.done,ue},e:function(ue){$e=!0,be=ue},f:function(){try{G||E.return==null||E.return()}finally{if($e)throw be}}}}function f(w,C,E){return(C=O(C))in w?Object.defineProperty(w,C,{value:E,enumerable:!0,configurable:!0,writable:!0}):w[C]=E,w}function S(w,C){var E=Object.keys(w);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(w);C&&(A=A.filter(function(H){return Object.getOwnPropertyDescriptor(w,H).enumerable})),E.push.apply(E,A)}return E}function x(w){for(var C=1;C<arguments.length;C++){var E=arguments[C]!=null?arguments[C]:{};C%2?S(Object(E),!0).forEach(function(A){f(w,A,E[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(E)):S(Object(E)).forEach(function(A){Object.defineProperty(w,A,Object.getOwnPropertyDescriptor(E,A))})}return w}function _(w,C){if(typeof w!="object"||!w)return w;var E=w[Symbol.toPrimitive];if(E!==void 0){var A=E.call(w,C||"default");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(C==="string"?String:Number)(w)}function O(w){var C=_(w,"string");return typeof C=="symbol"?C:C+""}function P(w){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},P(w)}function j(w,C){if(w){if(typeof w=="string")return d(w,C);var E={}.toString.call(w).slice(8,-1);return E==="Object"&&w.constructor&&(E=w.constructor.name),E==="Map"||E==="Set"?Array.from(w):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?d(w,C):void 0}}var U={exports:{}},I={},oe;function Z(){return oe||(oe=1,I.validateOptions=function(C,E,A){if(C){var H=C?Object.keys(C):[],be=H.find(function($e){return!E.includes($e)});if(be)throw new Error('Object "'+A+'" contains an unknown option "'+be+'"');var G=E.find(function($e){return Object.prototype[$e]&&!H.includes($e)});if(G)throw new Error('Object "'+A+'" contains an inherited option "'+G+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return C}},I.workerOptsNames=["credentials","name","type"],I.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],I.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),I}var ke,F;function pe(){return F||(F=1,ke=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ke}var re;function le(){if(re)return U.exports;re=1;var w=h(),C=w.Promise,E=s,A=Z(),H=A.validateOptions,be=A.forkOptsNames,G=A.workerThreadOptsNames,$e=A.workerOptsNames,ue="__workerpool-terminate__";function R(){var W=y();if(!W)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return W}function he(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":P(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function y(){try{return Xt}catch(W){if(P(W)==="object"&&W!==null&&W.code==="MODULE_NOT_FOUND")return null;throw W}}function k(){if(E.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var W=new Blob([pe()],{type:"text/javascript"});return window.URL.createObjectURL(W)}else return __dirname+"/worker.js"}function X(W,Q){if(Q.workerType==="web")return he(),ne(W,Q.workerOpts,Worker);if(Q.workerType==="thread")return $=R(),je(W,$,Q);if(Q.workerType==="process"||!Q.workerType)return He(W,dt(Q),Xt);if(E.platform==="browser")return he(),ne(W,Q.workerOpts,Worker);var $=y();return $?je(W,$,Q):He(W,dt(Q),Xt)}function ne(W,Q,$){H(Q,$e,"workerOpts");var q=new $(W,Q);return q.isBrowserWorker=!0,q.on=function(ye,ve){this.addEventListener(ye,function(Oe){ve(Oe.data)})},q.send=function(ye,ve){this.postMessage(ye,ve)},q}function je(W,Q,$){var q,ye;H($==null?void 0:$.workerThreadOpts,G,"workerThreadOpts");var ve=new Q.Worker(W,x({stdout:(q=$==null?void 0:$.emitStdStreams)!==null&&q!==void 0?q:!1,stderr:(ye=$==null?void 0:$.emitStdStreams)!==null&&ye!==void 0?ye:!1},$==null?void 0:$.workerThreadOpts));return ve.isWorkerThread=!0,ve.send=function(Oe,ie){this.postMessage(Oe,ie)},ve.kill=function(){return this.terminate(),!0},ve.disconnect=function(){this.terminate()},$!=null&&$.emitStdStreams&&(ve.stdout.on("data",function(Oe){return ve.emit("stdout",Oe)}),ve.stderr.on("data",function(Oe){return ve.emit("stderr",Oe)})),ve}function He(W,Q,$){H(Q.forkOpts,be,"forkOpts");var q=$.fork(W,Q.forkArgs,Q.forkOpts),ye=q.send;return q.send=function(ve){return ye.call(q,ve)},Q.emitStdStreams&&(q.stdout.on("data",function(ve){return q.emit("stdout",ve)}),q.stderr.on("data",function(ve){return q.emit("stderr",ve)})),q.isChildProcess=!0,q}function dt(W){W=W||{};var Q=process.execArgv.join(" "),$=Q.indexOf("--inspect")!==-1,q=Q.indexOf("--debug-brk")!==-1,ye=[];return $&&(ye.push("--inspect="+W.debugPort),q&&ye.push("--debug-brk")),process.execArgv.forEach(function(ve){ve.indexOf("--max-old-space-size")>-1&&ye.push(ve)}),Object.assign({},W,{forkArgs:W.forkArgs,forkOpts:Object.assign({},W.forkOpts,{execArgv:(W.forkOpts&&W.forkOpts.execArgv||[]).concat(ye),stdio:W.emitStdStreams?"pipe":void 0})})}function tt(W){for(var Q=new Error(""),$=Object.keys(W),q=0;q<$.length;q++)Q[$[q]]=W[$[q]];return Q}function nt(W,Q){if(Object.keys(W.processing).length===1){var $=Object.values(W.processing)[0];$.options&&typeof $.options.on=="function"&&$.options.on(Q)}}function $t(W,Q){var $=this,q=Q||{};this.script=W||k(),this.worker=X(this.script,q),this.debugPort=q.debugPort,this.forkOpts=q.forkOpts,this.forkArgs=q.forkArgs,this.workerOpts=q.workerOpts,this.workerThreadOpts=q.workerThreadOpts,this.workerTerminateTimeout=q.workerTerminateTimeout,W||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(ie){nt($,{stdout:ie.toString()})}),this.worker.on("stderr",function(ie){nt($,{stderr:ie.toString()})}),this.worker.on("message",function(ie){if(!$.terminated)if(typeof ie=="string"&&ie==="ready")$.worker.ready=!0,ve();else{var Xe=ie.id,Fe=$.processing[Xe];Fe!==void 0&&(ie.isEvent?Fe.options&&typeof Fe.options.on=="function"&&Fe.options.on(ie.payload):(delete $.processing[Xe],$.terminating===!0&&$.terminate(),ie.error?Fe.resolver.reject(tt(ie.error)):Fe.resolver.resolve(ie.result)))}});function ye(ie){$.terminated=!0;for(var Xe in $.processing)$.processing[Xe]!==void 0&&$.processing[Xe].resolver.reject(ie);$.processing=Object.create(null)}function ve(){var ie=g($.requestQueue.splice(0)),Xe;try{for(ie.s();!(Xe=ie.n()).done;){var Fe=Xe.value;$.worker.send(Fe.message,Fe.transfer)}}catch(Rr){ie.e(Rr)}finally{ie.f()}}var Oe=this.worker;this.worker.on("error",ye),this.worker.on("exit",function(ie,Xe){var Fe=`Workerpool Worker terminated Unexpectedly
`;Fe+="    exitCode: `"+ie+"`\n",Fe+="    signalCode: `"+Xe+"`\n",Fe+="    workerpool.script: `"+$.script+"`\n",Fe+="    spawnArgs: `"+Oe.spawnargs+"`\n",Fe+="    spawnfile: `"+Oe.spawnfile+"`\n",Fe+="    stdout: `"+Oe.stdout+"`\n",Fe+="    stderr: `"+Oe.stderr+"`\n",ye(new Error(Fe))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return $t.prototype.methods=function(){return this.exec("methods")},$t.prototype.exec=function(W,Q,$,q){$||($=C.defer());var ye=++this.lastId;this.processing[ye]={id:ye,resolver:$,options:q};var ve={message:{id:ye,method:W,params:Q},transfer:q&&q.transfer};this.terminated?$.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ve.message,ve.transfer):this.requestQueue.push(ve);var Oe=this;return $.promise.catch(function(ie){if(ie instanceof C.CancellationError||ie instanceof C.TimeoutError)return delete Oe.processing[ye],Oe.terminateAndNotify(!0).then(function(){throw ie},function(Xe){throw Xe});throw ie})},$t.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},$t.prototype.terminate=function(W,Q){var $=this;if(W){for(var q in this.processing)this.processing[q]!==void 0&&this.processing[q].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Q=="function"&&(this.terminationHandler=Q),this.busy())this.terminating=!0;else{var ye=function(ie){if($.terminated=!0,$.cleaning=!1,$.worker!=null&&$.worker.removeAllListeners&&$.worker.removeAllListeners("message"),$.worker=null,$.terminating=!1,$.terminationHandler)$.terminationHandler(ie,$);else if(ie)throw ie};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ye(new Error("worker already killed!"));return}var ve=setTimeout(function(){$.worker&&$.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ve),$.worker&&($.worker.killed=!0),ye()}),this.worker.ready?this.worker.send(ue):this.requestQueue.push({message:ue}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ye()}},$t.prototype.terminateAndNotify=function(W,Q){var $=C.defer();return Q&&$.promise.timeout(Q),this.terminate(W,function(q,ye){q?$.reject(q):$.resolve(ye)}),$.promise},U.exports=$t,U.exports._tryRequireWorkerThreads=y,U.exports._setupProcessWorker=He,U.exports._setupBrowserWorker=ne,U.exports._setupWorkerThreadWorker=je,U.exports.ensureWorkerThreads=R,U.exports}var ge,ce;function fe(){if(ce)return ge;ce=1;var w=65535;ge=C;function C(){this.ports=Object.create(null),this.length=0}return C.prototype.nextAvailableStartingAt=function(E){for(;this.ports[E]===!0;)E++;if(E>=w)throw new Error("WorkerPool debug port limit reached: "+E+">= "+w);return this.ports[E]=!0,this.length++,E},C.prototype.releasePort=function(E){delete this.ports[E],this.length--},ge}var J,me;function Ae(){if(me)return J;me=1;var w=h(),C=w.Promise,E=le(),A=s,H=fe(),be=new H;function G(y,k){typeof y=="string"?this.script=y||null:(this.script=null,k=y),this.workers=[],this.tasks=[],k=k||{},this.forkArgs=Object.freeze(k.forkArgs||[]),this.forkOpts=Object.freeze(k.forkOpts||{}),this.workerOpts=Object.freeze(k.workerOpts||{}),this.workerThreadOpts=Object.freeze(k.workerThreadOpts||{}),this.debugPortStart=k.debugPortStart||43210,this.nodeWorker=k.nodeWorker,this.workerType=k.workerType||k.nodeWorker||"auto",this.maxQueueSize=k.maxQueueSize||1/0,this.workerTerminateTimeout=k.workerTerminateTimeout||1e3,this.onCreateWorker=k.onCreateWorker||function(){return null},this.onTerminateWorker=k.onTerminateWorker||function(){return null},this.emitStdStreams=k.emitStdStreams||!1,k&&"maxWorkers"in k?($e(k.maxWorkers),this.maxWorkers=k.maxWorkers):this.maxWorkers=Math.max((A.cpus||4)-1,1),k&&"minWorkers"in k&&(k.minWorkers==="max"?this.minWorkers=this.maxWorkers:(ue(k.minWorkers),this.minWorkers=k.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&E.ensureWorkerThreads()}G.prototype.exec=function(y,k,X){if(k&&!Array.isArray(k))throw new TypeError('Array expected as argument "params"');if(typeof y=="string"){var ne=C.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var je=this.tasks,He={method:y,params:k,resolver:ne,timeout:null,options:X};je.push(He);var dt=ne.promise.timeout;return ne.promise.timeout=function(nt){return je.indexOf(He)!==-1?(He.timeout=nt,ne.promise):dt.call(ne.promise,nt)},this._next(),ne.promise}else{if(typeof y=="function")return this.exec("run",[String(y),k],X);throw new TypeError('Function or string expected as argument "method"')}},G.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var y=this;return this.exec("methods").then(function(k){var X={};return k.forEach(function(ne){X[ne]=function(){return y.exec(ne,Array.prototype.slice.call(arguments))}}),X})},G.prototype._next=function(){if(this.tasks.length>0){var y=this._getWorker();if(y){var k=this,X=this.tasks.shift();if(X.resolver.promise.pending){var ne=y.exec(X.method,X.params,X.resolver,X.options).then(k._boundNext).catch(function(){if(y.terminated)return k._removeWorker(y)}).then(function(){k._next()});typeof X.timeout=="number"&&ne.timeout(X.timeout)}else k._next()}}},G.prototype._getWorker=function(){for(var y=this.workers,k=0;k<y.length;k++){var X=y[k];if(X.busy()===!1)return X}return y.length<this.maxWorkers?(X=this._createWorkerHandler(),y.push(X),X):null},G.prototype._removeWorker=function(y){var k=this;return be.releasePort(y.debugPort),this._removeWorkerFromList(y),this._ensureMinWorkers(),new C(function(X,ne){y.terminate(!1,function(je){k.onTerminateWorker({forkArgs:y.forkArgs,forkOpts:y.forkOpts,workerThreadOpts:y.workerThreadOpts,script:y.script}),je?ne(je):X(y)})})},G.prototype._removeWorkerFromList=function(y){var k=this.workers.indexOf(y);k!==-1&&this.workers.splice(k,1)},G.prototype.terminate=function(y,k){var X=this;this.tasks.forEach(function(tt){tt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ne=function(nt){be.releasePort(nt.debugPort),this._removeWorkerFromList(nt)},je=ne.bind(this),He=[],dt=this.workers.slice();return dt.forEach(function(tt){var nt=tt.terminateAndNotify(y,k).then(je).always(function(){X.onTerminateWorker({forkArgs:tt.forkArgs,forkOpts:tt.forkOpts,workerThreadOpts:tt.workerThreadOpts,script:tt.script})});He.push(nt)}),C.all(He)},G.prototype.stats=function(){var y=this.workers.length,k=this.workers.filter(function(X){return X.busy()}).length;return{totalWorkers:y,busyWorkers:k,idleWorkers:y-k,pendingTasks:this.tasks.length,activeTasks:k}},G.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var y=this.workers.length;y<this.minWorkers;y++)this.workers.push(this._createWorkerHandler())},G.prototype._createWorkerHandler=function(){var y=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new E(y.script||this.script,{forkArgs:y.forkArgs||this.forkArgs,forkOpts:y.forkOpts||this.forkOpts,workerOpts:y.workerOpts||this.workerOpts,workerThreadOpts:y.workerThreadOpts||this.workerThreadOpts,debugPort:be.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function $e(y){if(!R(y)||!he(y)||y<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function ue(y){if(!R(y)||!he(y)||y<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function R(y){return typeof y=="number"}function he(y){return Math.round(y)==y}return J=G,J}var Ve={},Ie,lr;function Vt(){if(lr)return Ie;lr=1;function w(C,E){this.message=C,this.transfer=E}return Ie=w,Ie}var Ar;function Tr(){return Ar||(Ar=1,function(w){var C=Vt(),E="__workerpool-terminate__",A={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")A.on=function(R,he){addEventListener(R,function(y){he(y.data)})},A.send=function(R,he){he?postMessage(R,he):postMessage(R)};else if(typeof process<"u"){var H;try{H=Xt}catch(R){if(!(P(R)==="object"&&R!==null&&R.code==="MODULE_NOT_FOUND"))throw R}if(H&&H.parentPort!==null){var be=H.parentPort;A.send=be.postMessage.bind(be),A.on=be.on.bind(be),A.exit=process.exit.bind(process)}else A.on=process.on.bind(process),A.send=function(R){process.send(R)},A.on("disconnect",function(){process.exit(1)}),A.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function G(R){return Object.getOwnPropertyNames(R).reduce(function(he,y){return Object.defineProperty(he,y,{value:R[y],enumerable:!0})},{})}function $e(R){return R&&typeof R.then=="function"&&typeof R.catch=="function"}A.methods={},A.methods.run=function(he,y){var k=new Function("return ("+he+").apply(null, arguments);");return k.apply(k,y)},A.methods.methods=function(){return Object.keys(A.methods)},A.terminationHandler=void 0,A.cleanupAndExit=function(R){var he=function(){A.exit(R)};if(!A.terminationHandler)return he();var y=A.terminationHandler(R);$e(y)?y.then(he,he):he()};var ue=null;A.on("message",function(R){if(R===E)return A.cleanupAndExit(0);try{var he=A.methods[R.method];if(he){ue=R.id;var y=he.apply(he,R.params);$e(y)?y.then(function(k){k instanceof C?A.send({id:R.id,result:k.message,error:null},k.transfer):A.send({id:R.id,result:k,error:null}),ue=null}).catch(function(k){A.send({id:R.id,result:null,error:G(k)}),ue=null}):(y instanceof C?A.send({id:R.id,result:y.message,error:null},y.transfer):A.send({id:R.id,result:y,error:null}),ue=null)}else throw new Error('Unknown method "'+R.method+'"')}catch(k){A.send({id:R.id,result:null,error:G(k)})}}),A.register=function(R,he){if(R)for(var y in R)R.hasOwnProperty(y)&&(A.methods[y]=R[y]);he&&(A.terminationHandler=he.onTerminate),A.send("ready")},A.emit=function(R){if(ue){if(R instanceof C){A.send({id:ue,isEvent:!0,payload:R.message},R.transfer);return}A.send({id:ue,isEvent:!0,payload:R})}},w.add=A.register,w.emit=A.emit}(Ve)),Ve}var xn=s.platform,Dr=s.isMainThread,_n=s.cpus;function et(w,C){var E=Ae();return new E(w,C)}var kt=n.pool=et;function cr(w,C){var E=Tr();E.add(w,C)}var at=n.worker=cr;function Te(w){var C=Tr();C.emit(w)}var Mr=n.workerEmit=Te,kn=h(),Ue=kn.Promise,$n=n.Promise=Ue,Pn=n.Transfer=Vt(),Sn=n.platform=xn,Cn=n.isMainThread=Dr,On=n.cpus=_n;r.Promise=$n,r.Transfer=Pn,r.cpus=On,r.default=n,r.isMainThread=Cn,r.platform=Sn,r.pool=kt,r.worker=at,r.workerEmit=Mr,Object.defineProperty(r,"__esModule",{value:!0})})})(di,di.exports);var jc=di.exports,ht=class{constructor(t,e){v(this,"_value");v(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},ca=class extends ht{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Fc=class extends ht{constructor(){super(...arguments);v(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Uc=class extends ht{validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(i=>i.height>=e),n={from:r[0].from,to:r[r.length-1].to};this.imposeRange(n)}}},Nc=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Wc=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Ic=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Hc=Nc(),Ti={iron:{pixels:Ic,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Wc,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Hc,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Bc=class extends ht{get availablePalettes(){return Ti}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},li,zc=(li=class{},v(li,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),li),Le,Vc=(Le=class extends zc{static humanRangeDates(e,r){return e=Le.inputToDate(e),r=Le.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Le.humanDate(e):[Le.humanDate(e),Le.humanDate(r)].join(" - ")}static human(e){return`${Le.humanDate(e)} ${Le.humanTime(e,!0)} `}},v(Le,"isoDate",e=>(e=Le.inputToDate(e),ai(e,{representation:"date"}))),v(Le,"isoTime",e=>(e=Le.inputToDate(e),ai(e,{representation:"time"}))),v(Le,"isoComplete",e=>(e=Le.inputToDate(e),ai(e))),v(Le,"humanTime",(e,r=!1)=>(e=Le.inputToDate(e),ks(e,r?"HH:mm:ss":"HH:mm"))),v(Le,"humanDate",(e,r=!1)=>(e=Le.inputToDate(e),ks(e,r?"d. M.":"d. M. yyyy"))),Le),vn=class{},ua=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},$s=class ha extends ua{constructor(e,r,n){super(e),this.code=r,this.message=n}isSuccess(){return!1}static fromError(e){return new ha(e.url,e.code,e.message)}},da=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Yc=class extends vn{constructor(e,r,n,i,s,a,u,h,d,g,f){super();v(this,"id");v(this,"horizontalLimit");v(this,"verticalLimit");v(this,"group");v(this,"url");v(this,"thermalUrl");v(this,"visibleUrl");v(this,"fileName");v(this,"frameCount");v(this,"frames",[]);v(this,"signature","unknown");v(this,"version",-1);v(this,"streamCount",-1);v(this,"fileDataType",-1);v(this,"unit",-1);v(this,"width");v(this,"height");v(this,"timestamp");v(this,"duration");v(this,"min");v(this,"max");v(this,"_isHover",!1);v(this,"root",null);v(this,"canvasLayer");v(this,"visibleLayer");v(this,"cursorLayer");v(this,"listenerLayer");v(this,"timeline");v(this,"cursorValue");v(this,"_mounted",!1);v(this,"_pixels");v(this,"_onHover");v(this,"_onClick");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=n,this.height=i,this.timestamp=a,this.duration=u,this.min=h,this.max=d,this.frameCount=g,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=s}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const r=this.width,n=this.root.clientWidth,i=r/n,s=Math.round(e.offsetX*i),a=Math.round(e.offsetY*i);this.group.cursorPosition.recieveCursorPosition({x:s,y:a}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){this.cursorValue.recalculateFromCursor(e),e!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(e.x,e.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(e,r){const n=r*this.width+e;return this.pixels[n]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},bn=class{constructor(t){v(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},ft=class pi{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=pi.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=pi.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},qc=class extends bn{constructor(e){super(e);v(this,"container");v(this,"canvas");v(this,"context");v(this,"_opacity",1);this.container=ft.createCanvasContainer(),this.canvas=ft.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(n,i,s,a,u,h)=>{const g=new OffscreenCanvas(s,a).getContext("2d"),f=i-n;for(let _=0;_<=s;_++)for(let O=0;O<=a;O++){const P=_+O*s;let j=u[P];j<n&&(j=n),j>i&&(j=i);const I=(j-n)/f,oe=Math.round(255*I),Z=h[oe];g.fillStyle=Z,g.fillRect(_,O,1,1)}const S=g.getImageData(0,0,s,a);return await createImageBitmap(S)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},Gc=class extends bn{constructor(e){super(e);v(this,"layerRoot");v(this,"center");v(this,"axisX");v(this,"axisY");v(this,"label");v(this,"_show",!1);v(this,"_hover",!1);this.layerRoot=ft.createCursorLayerRoot(),this.center=ft.createCursorLayerCenter(),this.axisX=ft.createCursorLayerX(),this.axisY=ft.createCursorLayerY(),this.label=ft.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(e,r,n){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),a=Math.round(r*i);this.center.style.left=this.px(s),this.center.style.top=this.px(a),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${n.toFixed(3)} °C`}}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Xc=class extends bn{constructor(e){super(e);v(this,"container");this.container=ft.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Qc=class extends bn{constructor(e,r){super(e);v(this,"container");v(this,"image");this._url=r,this.container=ft.createVisibleLayer(),this._url&&(this.image=ft.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Kc=class{constructor(t,e){v(this,"_currentFrame");v(this,"bufferSize",4);v(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const n=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),i=n.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(i.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,u)=>{const h=i[u];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{n.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Zc=class extends ht{constructor(e,r,n,i){super(e,Math.max(Math.min(r,n.length),0));v(this,"startTimestampRelative");v(this,"endTimestampRelative");v(this,"stepsByAbsolute",new Map);v(this,"stepsByRelative",new Map);v(this,"stepsByIndex",new Map);v(this,"relativeSteps",[]);v(this,"_currentStep");v(this,"_onChangeListeners",new Map);v(this,"isSequence");v(this,"_isPlayying",!1);v(this,"timer");v(this,"buffer");this.steps=n,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(s=>{this.stepsByIndex.set(s.index,s),this.stepsByAbsolute.set(s.absolute,s),this.stepsByRelative.set(s.relative,s),this.relativeSteps.push(s.relative)}),this.buffer=new Kc(this,i)}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlayying}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}addChangeListener(e,r){this._onChangeListeners.set(e,r)}removeChangeListener(e){this._onChangeListeners.delete(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),n=Math.ceil(r*this.steps.length)+5,i=this._validateIndex(n-40),s=this._validateIndex(n),u=this.steps.slice(i,s).reverse().find(h=>h.relative<=e);return u!==void 0?u:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),n=Math.floor(r*this.steps.length)-5,i=this._validateIndex(n),s=this._validateIndex(n+40),u=this.steps.slice(i,s).find(h=>h.relative>e);return u!==void 0?u:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);return r!==this._currentStep?(this._currentStep=r,await this.buffer.recieveStep(this._currentStep)):{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlayying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlayying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.createNextStepTimer())):this._isPlayying=!1},this._currentStep.offset))}play(){this.steps.length>1&&(this._isPlayying=!0,this.createNextStepTimer())}pause(){this._isPlayying=!1,clearTimeout(this.timer)}stop(){this.pause(),this.value=0}},Jc=class extends ht{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},eu=class pa extends Yc{constructor(e,r,n,i,s,a,u,h,d,g,f,S,x,_,O,P,j){super(e,r.thermalUrl,n,i,d,s,u,f,S,a,r.visibleUrl),this.group=e,this.service=r,this.width=n,this.height=i,this.timestamp=s,this.frameCount=a,this.duration=u,this.frameInterval=h,this.fps=g,this.min=f,this.max=S,this.bytesize=x,this.averageEmissivity=_,this.averageReflectedKelvins=O,this.firstFrame=P,this.timelineData=j,this.pixels=P.pixels}exportAsPng(){throw new Error("Method not implemented.")}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}postInit(){return this.canvasLayer=new qc(this),this.visibleLayer=new Qc(this,this.visibleUrl),this.cursorLayer=new Gc(this),this.listenerLayer=new Xc(this),this.cursorValue=new Jc(this,void 0),this.timeline=new Zc(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this}formatId(e){return`instance_${this.group.id}_${e}`}onSetPixels(e){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const r=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(r)}}getPixelsForHistogram(){return[]}static fromService(e,r,n,i){return new pa(e,r,n.width,n.height,n.timestamp,n.frameCount,n.duration,n.frameInterval,i.pixels,n.fps,n.min,n.max,n.bytesize,n.averageEmissivity,n.averageReflectedKelvins,i,n.timeline).postInit()}},tn=class extends ua{constructor(e,r,n,i,s){super(i,s);v(this,"id",Math.random());v(this,"baseInfoCache");v(this,"fileName");this.service=e,this.buffer=r,this.parser=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async createInstance(e){const r=await this.baseInfo(),n=await this.frameData(0),i=eu.fromService(e,this,r,n);return e.files.addFile(i),i}},tu=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),n=e.getUint16(19,!0),i=t.byteLength,s=(re,le)=>{const ge=re.getBigInt64(le,!0),ce=62135596800000n,fe=10000n,J=24n*60n*60n*1000n*fe,me=0x4000000000000000n,Ae=0x8000000000000000n;let Ie=ge&0x3fffffffffffffffn;ge&Ae&&(Ie>me-J&&(Ie-=me),Ie<0&&(Ie+=J));const Vt=Ie/fe-ce;return Number(Vt)},a=s(e,5),u=e.getUint8(15);let h=2;u===1&&(h=4);const d=57,g=r*n*h,f=d+g,S=t.slice(25),x=S.byteLength/f,_=re=>{const le=re*f,ge=le+f,ce=S.slice(le,ge),fe=new DataView(ce),J=fe.getFloat32(8,!0),me=fe.getFloat32(12,!0),Ae=s(fe,0),Ve=fe.getFloat32(24,!0),Ie=fe.getFloat32(28,!0);return{timestamp:Ae,min:J,max:me,emissivity:Ve,reflectedKelvins:Ie}},O=[];for(let re=0;re<x;re++){const le=_(re);O.push(le)}const P={emissivity:0,reflectedKelvins:0};let j=1/0,U=-1/0;const I=[];O.forEach(re=>{P.emissivity=P.emissivity+re.emissivity,P.reflectedKelvins=P.reflectedKelvins+re.reflectedKelvins,re.min<j&&(j=re.min),re.max>U&&(U=re.max),I.push(re.timestamp)});const oe=I[0],Z=[];I.forEach((re,le)=>{const ge=I[le+1];let ce=0;ge===void 0&&(ce=0),ce=ge-re;const fe=re-oe;Z.push({absolute:re,relative:fe,offset:isNaN(ce)?0:ce,index:le})});const ke=O[O.length-1].timestamp-O[0].timestamp,F=ke/x,pe=1e3/F;return{width:r,height:n,timestamp:a,bytesize:i,frameCount:x,duration:ke,frameInterval:F,fps:pe,timeline:Z,min:j,max:U,averageEmissivity:P.emissivity/O.length,averageReflectedKelvins:P.reflectedKelvins/O.length}},ru=(t,e)=>{const r=new DataView(t.slice(0,25)),n=r.getUint8(15),i=r.getUint16(17,!0),s=r.getUint16(19,!0),a=n===1?4:2,u=57,h=i*s*a,d=u+h,g=t.slice(25),f=e*d,S=f+d;return{array:g.slice(f,S),dataType:n}},nu=async(t,e)=>{const r=new DataView(t),n=r.getBigInt64(0,!0),i=62135596800000n,s=10000n,a=24n*60n*60n*1000n*s,u=0x4000000000000000n,h=0x8000000000000000n;let g=n&0x3fffffffffffffffn;n&h&&(g>u-a&&(g-=u),g<0&&(g+=a));const S=g/s-i,x=Number(S),_=r.getFloat32(8,!0),O=r.getFloat32(12,!0),P=r.getFloat32(24,!0),j=r.getFloat32(28,!0),U=t.slice(57);let I=[];if(e===0){const oe=new Uint16Array(U),Z=Math.abs(_-O),ke=65535;oe.forEach(F=>{const pe=F/ke;I.push(_+Z*pe)})}else e===1&&(I=Array.from(new Float32Array(U)));return{timestamp:x,min:_,max:O,emissivity:P,reflectedKelvins:j,pixels:I}},iu=async t=>{let e=[];const r=async P=>{const j=new DataView(P.slice(0,25)),U=j.getUint8(15),I=j.getUint16(17,!0),oe=j.getUint16(19,!0),Z=U===1?4:2,ke=57,F=I*oe*Z,pe=ke+F,re=P.slice(25),le=re.byteLength/pe;let ge=[];for(let ce=0;ce<le;ce++){const J=ce*pe+57,me=J+F,Ae=re.slice(J,me);U===0||U===1&&(ge=ge.concat(Array.from(new Float32Array(Ae))))}return ge};(await Promise.all(t.map(P=>r(P)))).forEach(P=>{e=e.concat(P)}),e.sort((P,j)=>P-j);const i=e[0],s=e[e.length-1],a=Math.abs(i-s),u=200,h=a/u,d=[];let g=[...e];for(let P=0;P<u;P++){const j=i+h*P,U=j+h,I=g.findIndex(pe=>pe>U),Z=g.slice(0,I-1).length,ke=Z/e.length*100,F={from:j,to:U,count:Z,percentage:ke};d.push(F),g=g.slice(I)}const f=[...d].sort((P,j)=>P.percentage-j.percentage),S=f[0].percentage,x=f[f.length-1].percentage,_=Math.abs(S-x);return d.map(P=>({...P,height:P.percentage/_*100}))},su=(t,e)=>{const r=e.endsWith("lrc"),i=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&i},au=[{extension:"lrc",minme:"application/octet-stream"}],ou={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:au,is:su,baseInfo:tu,getFrameSubset:ru,frameData:nu,registryHistogram:iu},fa=Object.freeze(ou),lu={LrcParser:fa},ga=Object.values(lu),cu=(t,e)=>{const r=ga.find(n=>n.is(t,e));if(r===void 0)throw new da(2,e,`No parser found for '${e}'.`);return r};ga.map(t=>t.extensions);var uu=class ma{constructor(e,r,n){v(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=n}static fromUrl(e,r,n){return new ma(e,r,n)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new $s(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const n=await r.arrayBuffer();try{const i=cu(n,this.thermalUrl);return this.pocessTheService(new tn(this.service,n,i,this.thermalUrl,this.visibleUrl))}catch(i){if(i instanceof da)return this.pocessTheService($s.fromError(i));throw i}}pocessTheService(e){return e}},hu=class{constructor(t){v(this,"requestsByUrl",new Map);v(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const n=new Di(t).addOrGetRegistry(e);return{service:n.service,registry:n}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=uu.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const n=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,n),n}}},du=class extends ht{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},pu=class extends ht{constructor(){super(...arguments);v(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},fu=class extends ca{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},va=class extends vn{constructor(e,r,n,i){super();v(this,"hash",Math.random());v(this,"minmax",new fu(this,void 0));v(this,"files",new pu(this,[]));v(this,"cursorPosition",new Fc(this,void 0));v(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=n,this.description=i}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},gu=class extends ht{constructor(){super(...arguments);v(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,n){if(this._map.has(e))return this._map.get(e);const i=new va(this.parent,e,r,n);return this._map.set(e,i),this.value.push(i),this.value=[...this.value],i}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},mu=class extends ht{constructor(){super(...arguments);v(this,"_resolution",150);v(this,"buffer",new Map);v(this,"bufferPixelsCount",0);v(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(n=>n.getPixelsForHistogram()));this.parent.pool.exec((r,n,i,s,a)=>{let h=r.reduce((x,_)=>{const O=_.reduce((P,j)=>[...P,...j],[]);return[...x,...O]},[]).sort((x,_)=>x-_);const d=s/a;let g=n+d;const f=new Map;let S=0;for(;g!==!1;){const x=h.findIndex(P=>P>g),_=h.slice(0,x).length;f.set(g-d/2,_),S+=_,h=h.slice(x);const O=g+d;g=O<i?O:!1}return{result:f,resultCount:S}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(i=>i.files.value).reduce((i,s)=>(i=i.concat(s),i),[]).map(i=>i.service.buffer),n=await this.parent.pool.exec(fa.registryHistogram,[r]);this.value=n}},vu=class extends ht{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},bu=class extends ca{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,n)=>n.minmax.value===void 0?r:{min:n.minmax.value.min<r.min?n.minmax.value.min:r.min,max:n.minmax.value.max>r.max?n.minmax.value.max:r.max},{min:1/0,max:-1/0})}},yu=class extends vn{constructor(e,r,n){super();v(this,"hash",Math.random());v(this,"groups",new gu(this,[]));v(this,"opacity",new du(this,1));v(this,"minmax",new bu(this,void 0));v(this,"loading",new vu(this,!1));v(this,"range",new Uc(this,void 0));v(this,"histogram",new mu(this,[]));v(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,n&&n.histogramResolution!==void 0&&n.histogramResolution>0&&this.histogram.setResolution(n.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([n,i])=>{const s=this.groups.addOrGetGroup(n),a=await Promise.all(i.map(u=>this.service.loadFile(u.thermalUrl,u.visibleUrl)));return{group:s,groupFiles:a}}));await Promise.all(r.map(async({group:n,groupFiles:i})=>await Promise.all(i.map(async a=>a instanceof tn?await a.createInstance(n):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const n=this.groups.addOrGetGroup(r),i=await this.service.loadFile(e.thermalUrl,e.visibleUrl);i instanceof tn&&await i.createInstance(n),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Di=class extends vn{constructor(e,r){super();v(this,"id");v(this,"service",new hu(this));v(this,"registries",{});v(this,"palette",new Bc(this,"jet"));v(this,"pool");this.pool=e||jc.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new yu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};let Yr;const wu=new Uint8Array(16);function xu(){if(!Yr&&(Yr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Yr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Yr(wu)}const Be=[];for(let t=0;t<256;++t)Be.push((t+256).toString(16).slice(1));function _u(t,e=0){return Be[t[e+0]]+Be[t[e+1]]+Be[t[e+2]]+Be[t[e+3]]+"-"+Be[t[e+4]]+Be[t[e+5]]+"-"+Be[t[e+6]]+Be[t[e+7]]+"-"+Be[t[e+8]]+Be[t[e+9]]+"-"+Be[t[e+10]]+Be[t[e+11]]+Be[t[e+12]]+Be[t[e+13]]+Be[t[e+14]]+Be[t[e+15]]}const ku=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ps={randomUUID:ku};function $u(t,e,r){if(Ps.randomUUID&&!e&&!t)return Ps.randomUUID();t=t||{};const n=t.random||(t.rng||xu)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,_u(n)}class ba extends qe{constructor(){super(...arguments),this.UUID=$u()}log(...e){console.log(this.tagName,this.UUID,...e)}}var Pu=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,ya=(t,e,r,n)=>{for(var i=n>1?void 0:n?Su(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Pu(e,r,i),i};let Ht=class extends ba{constructor(){super(...arguments),this.manager=new Di,this.palette="jet"}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"){const n=Ht.sanitizeStringPalette(r);this.manager.palette.setPalette(n)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(Ti).includes(t)||(e=!1),e?t:"jet"}render(){return Y`<slot></slot>`}};ya([Ee({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>Ht.sanitizeStringPalette(t),toAttribute:t=>t.toString()}})],Ht.prototype,"palette",2);Ht=ya([Se("manager-provider")],Ht);const Ss=new Di,Cu="__internal_default_registry",Ou="__internal_default_group",Eu=t=>{var n;console.warn("firstParent",t);let e=t,r;if(!e)return Ss;for(;e&&!r;)if(console.log(e,e instanceof Ht,e.parentElement),e instanceof Ht)r=e.manager,e=null;else if(e.parentElement!==null)e=e.parentElement;else if(e instanceof qe){const i=e.getRootNode();if("host"in i)e=i.host;else if(i instanceof DocumentFragment){console.warn("jsem fragment",i);const s=i.getRootNode();console.log((n=s.parentElement)==null?void 0:n.getRootNode().parentElement),e=null}else e=null;console.warn("nový nod",e)}else e=e.parentElement;return r||Ss},fi=t=>t.addOrGetRegistry(Cu),gi=t=>t.groups.addOrGetGroup(Ou);class Mi extends ba{constructor(){super(),this.manager=Eu(this.parentElement)}}var Au=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,wa=(t,e,r,n)=>{for(var i=n>1?void 0:n?Tu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Au(e,r,i),i};let rn=class extends Mi{get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this.id?this._registry=this.manager.addOrGetRegistry(this.id):this._registry=fi(this.manager)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r)}render(){return Y`<slot></slot>`}};wa([Ee({type:String,attribute:!0,reflect:!0})],rn.prototype,"id",2);rn=wa([Se("registry-provider")],rn);class _t extends Mi{get registry(){return this._registry}constructor(){super()}connectedCallback(){super.connectedCallback(),this._registry=this.getParentRegistry()}getParentRegistry(){let e=this.parentElement,r;if(e===null)return fi(this.manager);for(;e&&r===void 0;)if(e instanceof rn&&(r=e.registry),e instanceof qe)if(e.parentElement)e=e.parentElement;else{const n=e.getRootNode();"host"in n&&(e=n.host)}else e=e.parentElement;return r||fi(this.manager)}}var Du=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,xa=(t,e,r,n)=>{for(var i=n>1?void 0:n?Mu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Du(e,r,i),i};let mi=class extends _t{get group(){return this._group}connectedCallback(){super.connectedCallback(),this.id?this._group=this.registry.groups.addOrGetGroup(this.id):this._group=gi(this.registry)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r)}render(){return Y`<slot></slot>`}};xa([Ee({type:String,attribute:!0,reflect:!0})],mi.prototype,"id",2);mi=xa([Se("group-provider")],mi);class _a extends _t{get group(){return this._group}constructor(){super()}connectedCallback(){super.connectedCallback(),this._group=this.getParentGroup()}getParentGroup(){let e=this.parentElement,r;if(!e)return gi(this.registry);for(;e&&!r;)if("group"in e&&e.group instanceof va&&(r=e.group,e=null),e)if(e.parentElement)e=e.parentElement;else if(e instanceof qe){const n=e.getRootNode();"host"in n&&(e=n.host)}else e=e.parentElement;return r||gi(this.registry)}}var Ru=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Rt=(t,e,r,n)=>{for(var i=n>1?void 0:n?Lu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Ru(e,r,i),i};let ut=class extends _a{constructor(){super(...arguments),this.loading=!1,this.callbacks={success:new Map,failure:new Map,loading:new Map}}async load(){return this.loading=!0,this.log("provider se začíná načítat"),this.callbacks.loading.forEach(e=>e()),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof tn?(this.reader=e,await this.reader.createInstance(this.group).then(r=>(this.instance=r,this.callbacks.success.forEach(n=>n(r)),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r))):(this.error=e,this.callbacks.failure.forEach(r=>r(this.error)),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}bindCanvasOnMount(t){this.canvasElement=t}connectedCallback(){this.log("Připojuji",this.tagName),super.connectedCallback(),this.load()}registerSuccessCallback(t,e){this.callbacks.success.set(t,e)}registerFailureCallback(t,e){this.callbacks.failure.set(t,e)}registerLoadingCallback(t,e){this.callbacks.loading.set(t,e)}clearCallbacks(){this.callbacks.success.clear(),this.callbacks.failure.clear(),this.callbacks.loading.clear()}render(){return Y`<slot></slot>`}};Rt([Ce()],ut.prototype,"reader",2);Rt([Ce()],ut.prototype,"instance",2);Rt([Ce()],ut.prototype,"loading",2);Rt([Ce()],ut.prototype,"error",2);Rt([Ee({type:String,attribute:!0,reflect:!0})],ut.prototype,"thermal",2);Rt([Ee({type:String,attribute:!0,reflect:!0})],ut.prototype,"visible",2);Rt([Ce()],ut.prototype,"canvasElement",2);ut=Rt([Se("file-provider")],ut);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ju=Ci(class extends Oi{constructor(t){var e;if(super(t),t.type!==Si.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const a=!!e[s];a===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(a?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return Et}});var Fu=Object.defineProperty,Ri=(t,e,r,n)=>{for(var i=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=a(e,r,i)||i);return i&&Fu(e,r,i),i};class bt extends _a{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0}connectedCallback(){if(this.log("Připojuji",this.tagName,this.parentFileProviderElement,this.parentElement),super.connectedCallback(),this.parentFileProviderElement=this.getParentFile(),this.parentFileProviderElement)this.parentFileProviderElement.registerLoadingCallback(this.internalCallbackUUID,()=>{this.log("načítání začítání"),this.loading=!0}),this.parentFileProviderElement.registerSuccessCallback(this.internalCallbackUUID,e=>{this.instance=e,this.loading=!1}),this.parentFileProviderElement.registerFailureCallback(this.internalCallbackUUID,e=>{this.error=e,this.loading=!1}),this.parentFileProviderElement.registerSuccessCallback(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.registerFailureCallback(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}getParentFile(){let e=this.parentElement,r;if(e){if(e instanceof ut)return e;for(;e&&!r;)if(e instanceof ut)r=e,e=null;else if(e instanceof qe)if(e.parentElement)e=e.parentElement;else{const n=e.getRootNode();"host"in n&&(e=n.host)}else e=e.parentElement;return r}}}Ri([Ce()],bt.prototype,"loading");Ri([Ce()],bt.prototype,"instance");Ri([Ce()],bt.prototype,"error");var Uu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,Wu=(t,e,r,n)=>{for(var i=n>1?void 0:n?Nu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Uu(e,r,i),i};let vi=class extends bt{constructor(){super(...arguments),this.container=Ge()}onLoadingStart(){}onInstanceCreated(t){if(this.container.value!==void 0&&this.parentFileProviderElement!==void 0)t.mountToDom(this.container.value),this.parentFileProviderElement.bindCanvasOnMount(this);else throw this.log(this.parentFileProviderElement,this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var n,i;const t=this.loading===!1&&this.error!==void 0,e=this.loading===!1&&this.instance!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return Y`
            <div ${Je(this.container)} class=${ju(r)} part="file-canvas-container">
            
                ${this.loading===!0?Y`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?Y`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                File loading error
                            </div>

                            <div class="error-url">
                                ${(n=this.error)==null?void 0:n.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${(i=this.error)==null?void 0:i.message}
                            </div>
                        </div>`:de}
            
            </div>
        
        `}};vi.styles=ze`
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
    `;vi=Wu([Se("file-canvas")],vi);var Iu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,ka=(t,e,r,n)=>{for(var i=n>1?void 0:n?Hu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Iu(e,r,i),i};let nn=class extends Mi{connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value,this.log(this.manager);const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.manager.palette.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.manager.palette.removeListener(this.UUID)}onSelect(t){this.manager.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return Y`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return Y`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Ti).map(([t,e])=>Y`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};nn.styles=ze`

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

    `;ka([Ee({type:String,reflect:!0,attribute:!0})],nn.prototype,"value",2);nn=ka([Se("manager-palette-dropdown")],nn);var Bu=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,$a=(t,e,r,n)=>{for(var i=n>1?void 0:n?zu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Bu(e,r,i),i};let sn=class extends _t{connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const t=e=>{this.value!==e&&(this.value=e,this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}onInputChange(t){const e=parseFloat(t.target.value);this.value=e,this.registry.opacity.imposeOpacity(e)}updated(t){super.updated(t),t.has("value")&&parseFloat(t.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return Y`
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
        `}};sn.styles=ze`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;$a([Ee({type:Number,reflect:!0,attribute:!0})],sn.prototype,"value",2);sn=$a([Se("registry-opacity-slider")],sn);var Vu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,qu=(t,e,r,n)=>{for(var i=n>1?void 0:n?Yu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Vu(e,r,i),i};let bi=class extends bt{onLoadingStart(){}onInstanceCreated(t){}onFailure(t){}render(){return this.instance?Y`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${this.instance.url}&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `:de}};bi.styles=ze`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;bi=qu([Se("file-share-button")],bi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yi extends Oi{constructor(e){if(super(e),this.it=de,e.type!==Si.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===de||e==null)return this._t=void 0,this.it=e;if(e===Et)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}yi.directiveName="unsafeHTML",yi.resultType=1;const lt=Ci(yi);var Gu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,Qu=(t,e,r,n)=>{for(var i=n>1?void 0:n?Xu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Gu(e,r,i),i};let wi=class extends bt{onLoadingStart(){}onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,n){const i=e.toFixed(r),s=n!==void 0?i+" "+n:i;return this.renderRow(t,s)}renderDownloadRow(t,e,r,n){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${n}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.instance?Y`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${lt(this.renderRow("Thermal file name",this.instance.fileName))}

                        ${lt(this.renderDownloadRow("Thermal file URL",this.instance.thermalUrl,this.instance.thermalUrl,"Download thermal file"))}

                        ${this.instance.visibleUrl?lt(this.renderDownloadRow("Visible file URL",this.instance.visibleUrl,this.instance.visibleUrl,"Download visible file")):de}

                        ${lt(this.renderRow("Time",Vc.human(this.instance.timestamp)))}

                        ${lt(this.renderNumericalRow("Duration",this.instance.duration,0,"ms"))}

                        ${lt(this.renderRow("Resolution",`${this.instance.width} x ${this.instance.height} px <small class="opaque">${this.instance.pixels.length} pixels</small>`))}

                        ${lt(this.renderNumericalRow("Bytesize",this.instance.bytesize,0))}
                        
                        ${lt(this.renderNumericalRow("Maximal temperature",this.instance.max,10,"°C"))}

                        ${lt(this.renderNumericalRow("Minimal temperature",this.instance.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${lt(this.renderRow("Type",this.instance.service.parser.name))}
                    ${lt(this.renderRow("Description",this.instance.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.instance.service.parser.devices.map(t=>Y`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:de}};wi.styles=ze`

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
    
    `;wi=Qu([Se("file-info-button")],wi);var Ku=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,Ju=(t,e,r,n)=>{for(var i=n>1?void 0:n?Zu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Ku(e,r,i),i};let Cs=class extends _t{doAction(){this.registry.range.applyAuto()}render(){return Y`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Cs=Ju([Se("registry-range-auto-button")],Cs);var eh=Object.defineProperty,th=Object.getOwnPropertyDescriptor,rh=(t,e,r,n)=>{for(var i=n>1?void 0:n?th(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&eh(e,r,i),i};let Os=class extends _t{doAction(){this.registry.range.applyMinmax()}render(){return Y`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Os=rh([Se("registry-range-full-button")],Os);var nh=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,yn=(t,e,r,n)=>{for(var i=n>1?void 0:n?ih(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&nh(e,r,i),i};let vt=class extends _t{constructor(){super(...arguments),this.ticksRef=Ge(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,n,i){const s=(t-e)*(i-n)/(r-e)+n;return this.clamp(s,n,i)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],n=Math.floor(e/vt.TICK_WIDTH)-2,i=100/n;for(let s=1;s<n;s++)r.push(i*s);r.push(100),this.ticks=r.map(s=>this.calculateOneTick(t,s)).filter(s=>s!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return Y`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Je(this.ticksRef)}>

                    ${this.ticks.map(t=>Y`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(vt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};vt.TICK_WIDTH=40;vt.TICK_FIXED=2;vt.styles=ze`

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


    `;yn([Ee({type:String,reflect:!0})],vt.prototype,"placement",2);yn([Ce()],vt.prototype,"minmax",2);yn([Ce()],vt.prototype,"ticks",2);vt=yn([Se("registry-ticks-bar")],vt);var sh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,Or=(t,e,r,n)=>{for(var i=n>1?void 0:n?ah(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&sh(e,r,i),i};let sr=class extends _t{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return Y`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return Y`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Or([Ce()],sr.prototype,"minmax",2);Or([Ce()],sr.prototype,"range",2);Or([Ce()],sr.prototype,"opacity",2);Or([Ce()],sr.prototype,"palette",2);sr=Or([Se("registry-log")],sr);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,c,m)=>c in o?t(o,c,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[c]=m,n=(o,c,m)=>(r(o,typeof c!="symbol"?c+"":c,m),m),i=(o,c)=>` ${c&&c.length>0?c.map(m=>`<link rel="stylesheet" href="${m}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,s=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",u="pointers-min-distance",h="pointers-max-distance",d="range-dragging",g="data",f="min",S="max",x="step",_="round",O="type",P="theme",j="rtl",U="btt",I="disabled",oe="keyboard-disabled",Z="mousewheel-disabled",ke="slider-width",F="slider-height",pe="slider-radius",re="slider-bg",le="slider-bg-hover",ge="slider-bg-fill",ce="pointer-width",fe="pointer-height",J="pointer-radius",me="pointer-bg",Ae="pointer-bg-hover",Ve="pointer-bg-focus",Ie="pointer-shadow",lr="pointer-shadow-hover",Vt="pointer-shadow-focus",Ar="pointer-border",Tr="pointer-border-hover",xn="pointer-border-focus",Dr="animate-onclick",_n="css-links",et="vertical",kt="horizontal",cr=(o,c,m,p,T)=>{let B=c-o;return B===0?m:(p-m)*(T-o)/B+m},at=o=>!isNaN(parseFloat(o))&&isFinite(o),Te=(o,c)=>at(o)?Number(o):c,Mr=(o,c)=>c===0?0:Math.round(o/c)*c,kn=(o,c=1/0)=>{if(c===1/0)return o;let m=e(10,c);return Math.round(o*m)/m},Ue=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",$n=(o,c)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:c}}))},Pn=(o,c)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:c}}))},Sn=(o,c)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:c}}))},Cn=(o,c)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:c}}))},On=(o,c)=>{if(!c||c.length<=0)return;let m=c.map(T=>at(T)?Te(T,T):T),p={values:m||[]};p.value=m[0],p.value0=m[0],p.value1=m[0];for(let T=1;T<m.length;T++)p[`value${T+1}`]=m[T];o.dispatchEvent(new CustomEvent("change",{detail:p}))},w=(o,c,m)=>{let p=0,T,B,K,D,M=!1,ee=(V,Pe,We,Ne,De,Me)=>{let Qe=p;We!==void 0&&V>We&&(V=We),Pe!==void 0&&V<Pe&&(V=Pe),p=V;let Ke=p;return(Ne===et&&Me||Ne===kt&&De)&&(Ke=100-Ke),Ne===et?c.style.top=`${Ke}%`:c.style.left=`${Ke}%`,Qe!==p},se=V=>V===c||c.contains(V),N=(V,Pe,We,Ne)=>{T=V,B=Pe,K=We,D=Ne},xe=V=>{M=V,c.classList.toggle("disabled",M),M?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},it=(V,Pe)=>{Pe==null?c.removeAttribute(V):c.setAttribute(V,Pe)},Ye=V=>c.getAttribute(V),z=V=>{if(!M){switch(V.key){case"ArrowLeft":{V.preventDefault(),typeof T=="function"&&T(m);break}case"ArrowRight":{V.preventDefault(),typeof B=="function"&&B(m);break}case"ArrowUp":{V.preventDefault(),typeof K=="function"&&K(m);break}case"ArrowDown":{V.preventDefault(),typeof D=="function"&&D(m);break}}Cn(o,V)}},te=()=>{M||$n(o,c)};return c.className=`pointer pointer-${m}`,c.addEventListener("keydown",z),c.addEventListener("click",te),{$pointer:c,get percent(){return p},get disabled(){return M},set disabled(V){xe(V)},updatePosition:ee,isClicked:se,setCallbacks:N,setAttr:it,getAttr:Ye,destroy:()=>{c.removeEventListener("keydown",z),c.removeEventListener("click",te),c.remove()}}},C=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let c=o.split(","),m=[],p=!0;for(let T=0;T<c.length;T++){let B=c[T].trim();B!==""&&(m.push(B),at(B)||(p=!1))}return p?m.map(T=>Number(T)):m},E=(o,c)=>c?c.findIndex(m=>m===o||m.toString().trim()===o.toString().trim()):-1,A=o=>({updatePosition:(c,m,p,T)=>{if(m.length<=0)return;let B=m.length===1,K=m[0],D=m[m.length-1];c===et?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),B?o.style.height=`${K}%`:o.style.height=`${Math.abs(K-D)}%`,T?(o.style.bottom="0%",B?o.style.top="auto":o.style.top=`${Math.min(100-D,100-K)}%`):(o.style.bottom="auto",B?o.style.top="0%":o.style.top=`${Math.min(K,D)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),B?o.style.width=`${K}%`:o.style.width=`${Math.abs(K-D)}%`,p?(o.style.right="0%",B?o.style.left="auto":o.style.left=`${Math.min(100-D,100-K)}%`):(o.style.right="auto",B?o.style.left="0%":o.style.left=`${Math.min(K,D)}%`))}}),H="--animate-onclick",be="--width",G="--height",$e="--panel-bg-border-radius",ue="--panel-bg",R="--panel-bg-hover",he="--panel-bg-fill",y="--pointer-width",k="--pointer-height",X="--pointer-border-radius",ne="--pointer-bg",je="--pointer-bg-hover",He="--pointer-bg-focus",dt="--pointer-shadow",tt="--pointer-shadow-hover",nt="--pointer-shadow-focus",$t="--pointer-border",W="--pointer-border-hover",Q="--pointer-border-focus",$=(o,c,m)=>{let p=new Map;for(let T of o.attributes){let B=T.nodeName.trim().toLowerCase();if(!c.test(B))continue;let K=B.replace(/\D/g,"").trim(),D=K===""||K==="0"||K==="1"?0:Te(K,0)-1,M=m&&typeof m=="function"?m(T.value):T.value;p.set(D,M)}return p},q=o=>{if(!o)return null;let c=o.getAttribute(_n);if(!c)return null;let m=c.split(";"),p=[];for(let T of m)T.trim()!==""&&p.push(T.trim());return p},ye=[[be,ke,"sliderWidth",null],[G,F,"sliderHeight",null],[$e,pe,"sliderRadius",null],[ue,re,"sliderBg",null],[R,le,"sliderBgHover",null],[he,ge,"sliderBgFill",null],[y,ce,"pointer#Width",/^pointer([0-9]*)-width$/],[k,fe,"pointer#Height",/^pointer([0-9]*)-height$/],[X,J,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ne,me,"pointer#Bg",/^pointer([0-9]*)-bg$/],[je,Ae,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[He,Ve,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[dt,Ie,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[tt,lr,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[nt,Vt,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[$t,Ar,"pointer#Border",/^pointer([0-9]*)-border$/],[W,Tr,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Q,xn,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ve=(o,c,m)=>{let p=null,T=[],B=new Map,K=(z,te=c)=>{let V=[...te.classList];for(let Pe of V)Pe.startsWith(z)&&c.classList.remove(Pe)},D=()=>{K("shape");let z=c.querySelectorAll(".pointer");for(let te of z)K("shape",te)},M=z=>{p=z,K("theme-"),typeof z=="string"&&c.classList.add(`theme-${z}`)},ee=()=>{if(D(),!(T.length<=0)){c.classList.add("shape",`shape-${T[0]}`);for(let z=1;z<T.length;z++){let te=T[z];if(!te)continue;let V=c.querySelector(`.pointer-${z}`);!V||V.classList.add("shape",`shape-${te}`)}}},se=(z,te)=>{T[z]=te,ee()},N=()=>{D();let z=$(o,/^pointer([0-9]*)-shape$/);if(!(z.size<=0)){for(let te of z){let V=te[0];T[V]=te[1]}ee()}},xe=(z,te)=>`${z}-${te}`,it=(z,te,V)=>{let Pe=m[V];if(!Pe)return;let We=V===0?c:Pe.$pointer;if(te==null){B.has(xe(z,V))&&B.delete(xe(z,V)),We.style.removeProperty(z);return}B.set(xe(z,V),te),We.style.setProperty(z,te)},Ye=(z,te)=>B.get(xe(z,te));return(()=>{for(let z of ye){let[te,V,Pe,We]=z;if(We){let De=$(o,We);for(let Me of De){let Qe=Me[0],Ke=Me[1];it(te,Ke,Qe)}}else{let De=o.getAttribute(V);it(te,De,0)}let Ne=[];if(Pe.indexOf("#")===-1)Ne.push([Pe,0]);else{Ne.push([Pe.replace("#",""),0]),Ne.push([Pe.replace("#","0"),0]),Ne.push([Pe.replace("#","1"),0]);for(let De=1;De<m.length;De++)Ne.push([Pe.replace("#",(De+1).toString()),De])}for(let De of Ne)try{let Me=De[0],Qe=De[1];Object.prototype.hasOwnProperty.call(o,Me)||Object.defineProperty(o,Me,{get(){return Ye(te,Qe)},set:Ke=>{it(te,Ke,Qe)}})}catch(Me){console.error(Me)}}M(o.getAttribute(P)),N()})(),{setStyle:it,getStyle:Ye,get theme(){return p},set theme(z){M(z)},get pointerShapes(){return T},setPointerShape:se}},Oe="animate-on-click",ie="range-dragging",Xe=(o,c,m,p)=>{let T=[],B=se=>{for(let N of T)N.update&&typeof N.update=="function"&&N.update(se)},K=()=>{for(let se of T)se.destroy&&typeof se.destroy=="function"&&se.destroy()},D=(se,N)=>{for(let xe of T)xe.onAttrChange&&typeof xe.onAttrChange=="function"&&xe.onAttrChange(se,N)},M=se=>{if(se.gettersAndSetters){for(let N of se.gettersAndSetters)if(!(!N.name||!N.attributes))try{Object.prototype.hasOwnProperty.call(o,N.name)||Object.defineProperty(o,N.name,N.attributes)}catch(xe){console.error("defineSettersGetters error:",xe)}}},ee=se=>{var N;if(!se.css)return;let xe=(N=o.shadowRoot)==null?void 0:N.querySelector("style");!xe||(xe.innerHTML+=se.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let se of window.tcRangeSliderPlugins){let N=se();T.push(N),N.init&&typeof N.init=="function"&&(N.init(o,c,m,p),M(N),ee(N))}},update:B,onAttrChange:D,destroy:K}},Fe=10,Rr=20,Oa=(o,c)=>{let m=new Map,p=/^value([0-9]*)$/;for(let D of o.attributes){let M=D.nodeName.trim().toLowerCase();if(!p.test(M))continue;let ee=M.replace("value","").trim(),se=ee===""||ee==="0"||ee==="1"?0:Te(ee,0)-1,N=at(D.value)?Te(D.value,0):D.value;m.set(se,N)}let T=Math.max(...Array.from(m.keys())),B=[];B.push([w(o,c,0),m.get(0)]);let K=c;for(let D=1;D<=T;D++){let M=c.cloneNode(!0);K.after(M),K=M,B.push([w(o,M,D),m.get(D)])}return B},ji=(o,c,m,p,T,B,K)=>{try{Object.defineProperty(o,p,{configurable:!0,get(){if(!c)return;let D=c.pointers[m];if(!D)return;let M=c.getTextValue(D.percent);return at(M)?Te(M,M):M},set:D=>{c.pointers[m]?c==null||c.setValue(D,m):c==null||c.addPointer(D)}}),Object.defineProperty(o,T,{configurable:!0,get(){var D,M;return(M=(D=c==null?void 0:c.pointers[m])==null?void 0:D.getAttr("aria-label"))!=null?M:void 0},set:D=>{!c||c.setAriaLabel(m,D)}}),Object.defineProperty(o,B,{configurable:!0,get(){var D,M;return(M=(D=c==null?void 0:c.styles)==null?void 0:D.pointerShapes[m])!=null?M:null},set:D=>{!c||!c.styles||c.styles.setPointerShape(m,D)}}),Object.defineProperty(o,K,{configurable:!0,get(){var D;return(D=c==null?void 0:c.pointers[m].disabled)!=null?D:!1},set:D=>{if(!c)return;let M=c==null?void 0:c.pointers[m];!M||(M.disabled=D)}})}catch(D){console.error(D)}},Ea=(o,c)=>{let m=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let p=2;p<Fe;p++)m.push([`value${p}`,`ariaLabel${p}`,`pointer${p}Shape`,`pointer${p}Disabled`,p-1]);for(let p of m)ji(o,c,p[4],p[0],p[1],p[2],p[3])},Fi=(o,c,m)=>{var p;let T=(p=m.shadowRoot)==null?void 0:p.querySelector(".container");if(T)for(let B of o)c?T.prepend(B.$pointer):T.append(B.$pointer)},Aa=(o,c)=>{if(!(!c||o.length<=1)){for(let m of o)m.$pointer.style.zIndex=Rr.toString();c.$pointer.style.zIndex=(Rr*2).toString()}},En=0,ur=100,Yt=2,Ui="0.3s",Ta=(o,c,m)=>{let p=m.map(l=>l[0]),T=null,B=null,K=null,D=null,M=En,ee=ur,se,N,xe=kt,it=Yt,Ye=!1,z=!1,te=!1,V=0,Pe=1/0,We=!1,Ne,De,Me=!1,Qe=!1,Ke=!1,Pt=Ui,Ni=[],Wi=l=>{Me||(l.preventDefault&&l.preventDefault(),Lt(l),window.addEventListener("mousemove",Lt),window.addEventListener("mouseup",Lr),Pn(o,l))},Lr=l=>{Me||(Ne=void 0,De=void 0,window.removeEventListener("mousemove",Lt),window.removeEventListener("mouseup",Lr),Pt&&c.classList.add(Oe),Sn(o,l))},Ra=(l,b)=>{if(p.length<=0)return;if(p.length===1)return p[0].isClicked(l)&&Pt&&c.classList.remove(Oe),p[0];let L=ja(l);if(We){let we=b,ot=Fr(we);ot!==void 0&&(we=Mr(we,ot)),L?(Ne=we,De=0,Pt&&c.classList.remove(Oe)):Ne!==void 0&&(De=we-Ne,Ne=we)}if(!La(l)&&!L){for(let we of p)if(!(!we.isClicked(l)||we.disabled))return Pt&&c.classList.remove(Oe),we;for(let we of p)if(T===we)return we}let _e=1/0,Re=null;for(let we of p){if(we.disabled)continue;let ot=Math.abs(b-we.percent);ot<_e&&(_e=ot,Re=we)}return Re},Ii=()=>p.findIndex(l=>T===l&&!l.disabled),Lt=l=>{let b;if(xe===et){let{height:_e,top:Re}=c.getBoundingClientRect(),we=l.type.indexOf("mouse")!==-1?l.clientY:l.touches[0].clientY;b=Math.min(Math.max(0,we-Re),_e)*100/_e}else{let{width:_e,left:Re}=c.getBoundingClientRect(),we=l.type.indexOf("mouse")!==-1?l.clientX:l.touches[0].clientX;b=Math.min(Math.max(0,we-Re),_e)*100/_e}if((Ye||z)&&(b=100-b),T=Ra(l.target,b),T&&Aa(p,T),We&&p.length>1&&De!==void 0){let _e=p[0],Re=p[p.length-1],we=_e.percent+De<0,ot=Re.percent+De>100;if(we||ot)return;for(let Vr=0;Vr<p.length;Vr++)Ze(Vr,p[Vr].percent+De);return}let L=Ii();L!==-1&&(Ze(L,b),T==null||T.$pointer.focus())},jr=l=>{if(Me||document.activeElement!==o||T!=null&&T.disabled)return;l.stopPropagation(),l.preventDefault();let b=l.deltaY<0,L=Ye||z,_e=b?!L:L,Re=Ii();Re!==-1&&(_e?hr(Re,p[Re].percent):dr(Re,p[Re].percent))},Hi=l=>{Me||Qe||(xe===et?z?Ze(l,100):Ze(l,0):Ye?dr(l,p[l].percent):hr(l,p[l].percent))},Bi=l=>{Me||Qe||(xe===et?z?Ze(l,0):Ze(l,100):Ye?hr(l,p[l].percent):dr(l,p[l].percent))},zi=l=>{Me||Qe||(xe===et?z?dr(l,p[l].percent):hr(l,p[l].percent):Ye?Ze(l,100):Ze(l,0))},Vi=l=>{Me||Qe||(xe===et?z?hr(l,p[l].percent):dr(l,p[l].percent):Ye?Ze(l,0):Ze(l,100))},La=l=>l.classList.contains("panel"),ja=l=>l.classList.contains("panel-fill"),hr=(l,b)=>{if(b===void 0)return;let L=Fr(b);L==null&&(L=1),b-=L,b<0&&(b=0),Ze(l,b)},dr=(l,b)=>{if(b===void 0)return;let L=Fr(b);L==null&&(L=1),b+=L,b>100&&(b=100),Ze(l,b)},jt=()=>{!D||D.update({percents:Yi(),values:qi(),$pointers:Gi(),min:Xi(),max:Qi(),data:Dn(),step:Tn(),round:Rn(),type:Mn(),textMin:Ur(),textMax:Nr(),rightToLeft:Fn(),bottomToTop:Un(),pointersOverlap:Hn(),pointersMinDistance:Ln(),pointersMaxDistance:jn(),rangeDragging:Bn(),disabled:Nn(),keyboardDisabled:Wn(),mousewheelDisabled:In()})},Fa=()=>{jt()},Ua=l=>{if(!(te||p.length<=1||ee===M))if(l===0){let b=Pe*100/(ee-M);return Math.max(0,p[l+1].percent-b)}else{let b=V*100/(ee-M);return Math.min(p[l-1].percent+b,100)}},Na=l=>{if(!(te||p.length<=1||ee===M))if(l===p.length-1){let b=Pe*100/(ee-M);return Math.min(p[l-1].percent+b,100)}else{let b=V*100/(ee-M);return Math.max(0,p[l+1].percent-b)}},Fr=l=>{let b;if(typeof se=="function"){let L=cr(0,100,M,ee,l);b=se(L,l)}else b=se;if(at(b)){let L=ee-M;return b=L===0?0:b*100/L,b}},qt=l=>{if(l===void 0)return;let b=cr(0,100,M,ee,l);return N!==void 0?N[Math.round(b)]:kn(b,it)},Ur=()=>N!==void 0?N[M]:M,Nr=()=>N!==void 0?N[ee]:ee,Tn=()=>se,Wa=l=>{var b;return l<=0||te?Ur():(b=qt(p[l-1].percent))!=null?b:""},Ia=l=>{var b;return p.length<=1||l>=p.length-1||te?Nr():(b=qt(p[l+1].percent))!=null?b:""},Yi=()=>p.map(l=>l.percent),qi=()=>p.map(l=>qt(l.percent)),Gi=()=>p.map(l=>l.$pointer),Xi=()=>M,Qi=()=>ee,Dn=()=>N,Mn=()=>xe,Rn=()=>it,Ln=()=>V,jn=()=>Pe,Ha=l=>Ni[l],Fn=()=>Ye,Un=()=>z,Nn=()=>Me,Wn=()=>Qe,In=()=>Ke,Hn=()=>te,Bn=()=>We,Ze=(l,b)=>{if(b===void 0)return;let L=Fr(b);L!==void 0&&(b=Mr(b,L));let _e=p[l];if(!_e)return;let Re=_e.updatePosition(b,Ua(l),Na(l),xe,Ye,z);B==null||B.updatePosition(xe,p.map(we=>we.percent),Ye,z),jt();for(let we of p){let ot=qt(we.percent);ot!==void 0&&(we.setAttr("aria-valuenow",ot.toString()),we.setAttr("aria-valuetext",ot.toString()))}za(),Re&&On(o,p.map(we=>qt(we.percent)))},pt=()=>{for(let l=0;l<p.length;l++)Ze(l,p[l].percent)},Ba=(l,b)=>{M=N!==void 0?0:Te(l,En),ee=N!==void 0?N.length-1:Te(b,ur),Wr(M),Ir(ee)},za=()=>{var l,b;for(let L=0;L<p.length;L++){let _e=p[L];_e.setAttr("aria-valuemin",((l=Wa(L))!=null?l:"").toString()),_e.setAttr("aria-valuemax",((b=Ia(L))!=null?b:"").toString())}},Wr=l=>{M=Te(l,En),M>ee&&(ee=M+ur),pt()},Ir=l=>{ee=Te(l,ur),ee<M&&(ee=M+ur),pt()},Ki=l=>{te=!0;for(let b=0;b<l.length;b++)Hr(l[b],b);te=!1;for(let b=0;b<l.length;b++)Hr(l[b],b)},Hr=(l,b)=>{let L;N!==void 0?(L=l==null?0:E(l,N),L===-1&&(L=0)):(L=Te(l,M),L<M&&(L=M),L>ee&&(L=ee));let _e=cr(M,ee,0,100,L);Ze(b,_e)},Br=l=>{if(l==null){se=void 0;return}if(typeof l=="function"){se=l,pt();return}if(at(l)){se=Te(l,1);let b=Math.abs(ee-M);se>b&&(se=void 0),pt();return}se=void 0},zn=l=>{te=l,pt()},Vn=l=>{(!at(l)||l<0)&&(l=0),V=l},Yn=l=>{(!at(l)||l<0)&&(l=1/0),Pe=l},qn=l=>{Me=l,c.classList.toggle("disabled",Me),Me?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},Zi=l=>{Qe=l},Ji=l=>{Ke=l,Ke?document.removeEventListener("wheel",jr):document.addEventListener("wheel",jr,{passive:!1})},Gn=l=>{if(l==null){N=void 0;return}if(N=C(l),N===void 0||N.length<=0){N=void 0;return}Wr(0),Ir(N.length-1),se===void 0&&Br(1)},Xn=l=>{var b;typeof l=="string"?xe=l.trim().toLowerCase()===et?et:kt:xe=kt;let L=(b=o.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!L)return;L.className=`range-slider-box type-${xe}`,pt();let _e=xe===et?"vertical":"horizontal";for(let Re of p)Re.setAttr("aria-orientation",_e)},Qn=l=>{Ye=l,p.length>1&&Fi(p,Ye,o),pt(),jt()},Kn=l=>{z=l,p.length>1&&Fi(p,z,o),pt(),jt()},Zn=l=>{it=Te(l,Yt),it<0&&(it=Yt),jt()},es=l=>{l==null||l.toString().trim().toLowerCase()==="false"?(Pt=void 0,c.style.removeProperty(H),c.classList.remove(Oe)):(Pt=l.toString(),c.style.setProperty(H,Pt),c.classList.add(Oe))},ts=(l,b)=>{let L=p[l];!L||(L.setAttr("aria-label",b),Ni[l]=b)},zr=l=>{if(Ne=void 0,p.length<=1){We=!1,c.classList.remove(ie);return}We=l,c.classList.toggle(ie,We)},Va=()=>{qn(Ue(o.getAttribute(I))),Qe=Ue(o.getAttribute(oe)),Ke=Ue(o.getAttribute(Z));let l=$(o,/^pointer([0-9]*)-disabled$/,b=>Ue(b));for(let b of l){let L=b[0];!p[L]||(p[L].disabled=b[1])}},Ya=()=>{let l=$(o,/^aria-label([0-9]*)$/);for(let b of l){let L=b[0];ts(L,b[1])}},qa=l=>{let b=p.length,L=p[b-1].$pointer,_e=L.cloneNode(!0);L.after(_e);let Re=w(o,_e,b);return Re.setCallbacks(Hi,Bi,zi,Vi),p.push(Re),Hr(l,b),pt(),jt(),b},Ga=()=>{let l=p.length,b=p[l-1];return b?(b.destroy(),p.pop(),p.length<=1&&zr(!1),pt(),jt(),l-1):-1};return(()=>{var l,b;for(let _e of p)_e.setCallbacks(Hi,Bi,zi,Vi);let L=(l=o.shadowRoot)==null?void 0:l.querySelector(".panel-fill");L&&(B=A(L)),Xn(o.getAttribute(O)),Qn(Ue(o.getAttribute(j))),Kn(Ue(o.getAttribute(U))),Ba(o.getAttribute(f),o.getAttribute(S)),Br(o.getAttribute(x)),Gn(o.getAttribute(g)),Ki(m.map(_e=>_e[1])),zn(Ue(o.getAttribute(a))),Vn(Te(o.getAttribute(u),0)),Yn(Te(o.getAttribute(h),1/0)),zr(Ue(o.getAttribute(d))),Zn(Te(o.getAttribute(_),Yt)),Va(),Ya(),K=ve(o,c,p),es((b=o.getAttribute(Dr))!=null?b:Ui),c.addEventListener("mousedown",Wi),c.addEventListener("mouseup",Lr),c.addEventListener("touchmove",Lt),c.addEventListener("touchstart",Lt),Ke||document.addEventListener("wheel",jr,{passive:!1}),D=Xe(o,Fa,{setValues:Ki,setMin:Wr,setMax:Ir,setStep:Br,setPointersOverlap:zn,setPointersMinDistance:Vn,setPointersMaxDistance:Yn,setDisabled:qn,setType:Xn,setRightToLeft:Qn,setBottomToTop:Kn,setRound:Zn,setKeyboardDisabled:Zi,setMousewheelDisabled:Ji,setRangeDragging:zr,setData:Gn},{getPercents:Yi,getValues:qi,getPointerElements:Gi,getMin:Xi,getMax:Qi,getStep:Tn,getData:Dn,getType:Mn,getRound:Rn,getTextMin:Ur,getTextMax:Nr,isRightToLeft:Fn,isBottomToTop:Un,isDisabled:Nn,isKeyboardDisabled:Wn,isMousewheelDisabled:In,isPointersOverlap:Hn,isRangeDraggingEnabled:Bn,getPointersMinDistance:Ln,getPointersMaxDistance:jn}),D.init()})(),{get pointers(){return p},get styles(){return K},get pluginsManager(){return D},get min(){return Ur()},get max(){return Nr()},get step(){return Tn()},get pointersOverlap(){return Hn()},set pointersOverlap(l){zn(l)},get pointersMinDistance(){return Ln()},set pointersMinDistance(l){Vn(l)},get pointersMaxDistance(){return jn()},set pointersMaxDistance(l){Yn(l)},get disabled(){return Nn()},set disabled(l){qn(l)},get data(){return Dn()},get type(){return Mn()},set type(l){Xn(l)},get rightToLeft(){return Fn()},set rightToLeft(l){Qn(l)},get bottomToTop(){return Un()},set bottomToTop(l){Kn(l)},get round(){return Rn()},set round(l){Zn(l)},get animateOnClick(){return Pt},set animateOnClick(l){es(l)},get keyboardDisabled(){return Wn()},set keyboardDisabled(l){Zi(l)},get mousewheelDisabled(){return In()},set mousewheelDisabled(l){Ji(l)},get rangeDragging(){return Bn()},set rangeDragging(l){zr(l)},setMin:Wr,setMax:Ir,setValue:Hr,setStep:Br,setData:Gn,getTextValue:qt,setAriaLabel:ts,getAriaLabel:Ha,addPointer:qa,removePointer:Ga,destroy:()=>{c.removeEventListener("mousedown",Wi),c.removeEventListener("mouseup",Lr),c.removeEventListener("touchmove",Lt),c.removeEventListener("touchstart",Lt),document.removeEventListener("wheel",jr);for(let l of p)l.destroy();D==null||D.destroy()}}},Da=(o,c,m)=>{let p=ye.find(([D,M,ee,se])=>M.replace("#","")===c.replace(/\d+/g,""));if(p&&o.styles){let[D,M,ee,se]=p,N=c.replace(/\D/g,"").trim(),xe=N===""||N==="0"||N==="1"?0:Te(N,0)-1;o.styles.setStyle(D,m,xe);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(c,m),c){case f:{o.setMin(m);break}case S:{o.setMax(m);break}case x:{o.setStep(m);break}case a:{o.pointersOverlap=Ue(m);break}case u:{o.pointersMinDistance=Te(m,0);break}case d:{o.rangeDragging=Ue(m);break}case h:{o.pointersMaxDistance=Te(m,1/0);break}case I:{o.disabled=Ue(m);break}case oe:{o.keyboardDisabled=Ue(m);break}case Z:{o.mousewheelDisabled=Ue(m);break}case g:{o.setData(m);break}case O:{o.type=m;break}case j:{o.rightToLeft=Ue(m);break}case U:{o.bottomToTop=Ue(m);break}case _:{o.round=Te(m,Yt);break}case P:{o.styles&&(o.styles.theme=m);break}case Dr:{o.animateOnClick=m;break}}let T=null;if(/^value([0-9]*)$/.test(c)&&(T="value"),/^pointer([0-9]*)-disabled$/.test(c)&&(T="pointer-disabled"),/^aria-label([0-9]*)$/.test(c)&&(T="aria-label"),/^pointer([0-9]*)-shape$/.test(c)&&(T="pointer-shape"),!T)return;let B=c.replace(/\D/g,"").trim(),K=B===""||B==="0"||B==="1"?0:Te(B,0)-1;switch(T){case"value":{o.setValue(m,K);break}case"pointer-disabled":{let D=o==null?void 0:o.pointers[K];if(!D)return;D.disabled=Ue(m);break}case"aria-label":{o.setAriaLabel(K,m);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(K,m);break}}},Ma=class extends HTMLElement{constructor(){super(),n(this,"slider"),n(this,"_externalCSSList",[]),n(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.disabled)!=null?c:!1}set data(o){var c;(c=this.slider)==null||c.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var c;(c=this.slider)==null||c.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var c;(c=this.slider)==null||c.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,c;return(c=(o=this.slider)==null?void 0:o.round)!=null?c:Yt}set type(o){!this.slider||(this.slider.type=o??kt)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||kt}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?c:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?c:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?c:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,c,m;return(m=(c=(o=this.slider)==null?void 0:o.styles)==null?void 0:c.theme)!=null?m:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,c;return(c=(o=this.slider)==null?void 0:o.rightToLeft)!=null?c:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,c;return(c=(o=this.slider)==null?void 0:o.bottomToTop)!=null?c:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?c:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?c:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,c;return(c=(o=this.slider)==null?void 0:o.rangeDragging)!=null?c:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ue(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var c,m;if(!this.slider)return;let p=(m=(c=this.slider)==null?void 0:c.addPointer(o))!=null?m:0;ji(this,this.slider,p,`value${p+1}`,`ariaLabel${p+1}`,`pointerShape${p+1}`,`pointer${p+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let c=document.createElement("style");c.textContent=o,this.shadowRoot.appendChild(c)}connectedCallback(){var o,c;if(!this.shadowRoot)return;this._externalCSSList=q(this),this.shadowRoot.innerHTML=i(s,this._externalCSSList);let m=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!m)return;let p=(c=this.shadowRoot)==null?void 0:c.getElementById("range-slider");if(!p)return;let T=Oa(this,m);this.slider=Ta(this,p,T),Ea(this,this.slider),this._observer=new MutationObserver(B=>{B.forEach(K=>{var D;if(!this.slider||K.type!=="attributes")return;let M=K.attributeName;!M||Da(this.slider,M,(D=this.getAttribute(M))!=null?D:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},An=Ma;window.tcRangeSlider=An,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",An),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends An{})})();(()=>{var t=(u,h,d,g,f)=>{let S=h-u;return S===0?d:(g-d)*(f-u)/S+d},e=u=>!isNaN(parseFloat(u))&&isFinite(u),r=(u,h)=>e(u)?Number(u):h,n=u=>u==null?!1:typeof u=="boolean"?u:u.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var i=11,s=11,a=()=>{let u=null,h=null,d=null,g=null,f=null,S=!1,x=i,_=s,O=()=>{var F;let pe=(F=u==null?void 0:u.shadowRoot)==null?void 0:F.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),g=document.createElement("div"),g.classList.add("mark-points"),d.append(g),f=document.createElement("div"),f.classList.add("mark-values"),d.append(f),pe.append(d)},P=()=>{!h||!d||d.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},j=()=>{var F;if(!d||!h)return;let pe=h.getMin(),re=h.getMax(),le=h.getType()==="vertical",ge=h.isRightToLeft()||h.isBottomToTop();for(let fe=0;fe<x;fe++){let J=document.createElement("div");J.classList.add("mark",`mark-${fe}`);let me=x===0?0:fe*100/(x-1);le?ge?J.style.top=`${100-me}%`:J.style.top=`${me}%`:ge?J.style.left=`${100-me}%`:J.style.left=`${me}%`,g==null||g.append(J)}let ce=h.getData();for(let fe=0;fe<_;fe++){let J=document.createElement("div");J.classList.add("mark-value",`mark-value-${fe}`);let me=_===0?0:fe*100/(_-1),Ae=t(0,_-1,pe,re,fe);J.textContent=(ce?(F=ce[Math.round(Ae)])!=null?F:"":Ae).toString(),le?ge?J.style.top=`${100-me}%`:J.style.top=`${me}%`:ge?J.style.left=`${100-me}%`:J.style.left=`${me}%`,f==null||f.append(J)}},U=(F,pe)=>{ke(),x=F,_=pe,x<=0&&(x=i),_<=0&&(_=s),O(),j(),P()},I=F=>{S=F,S?(O(),j(),P()):ke()},oe=F=>{!d||d.style.setProperty("--marks-color",F)},Z=F=>{!d||d.style.setProperty("--values-color",F)},ke=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(F,pe,re,le)=>{var ge,ce;h=le,u=F,S=n(u.getAttribute("marks")),S&&(U(r(u.getAttribute("marks-count"),i),r(u.getAttribute("marks-values-count"),s)),oe((ge=u.getAttribute("marks-color"))!=null?ge:"#cbd5e1"),Z((ce=u.getAttribute("marks-values-color"))!=null?ce:"#475569"))},onAttrChange:(F,pe)=>{F==="marks"&&I(n(pe)),F==="marks-count"&&U(r(pe,i),_),F==="marks-values-count"&&U(x,r(pe,s)),F==="marks-color"&&oe(pe),F==="marks-values-color"&&Z(pe)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return S??!1},set:F=>{I(n(F))}}},{name:"marksCount",attributes:{get(){return x??i},set:F=>{U(r(F,i),_)}}},{name:"marksValuesCount",attributes:{get(){return x??i},set:F=>{U(x,r(F,s))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:F=>{oe(F)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:F=>{Z(F)}}}],destroy:ke,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var oh=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,zt=(t,e,r,n)=>{for(var i=n>1?void 0:n?lh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&oh(e,r,i),i};let xt=class extends _t{constructor(){super(...arguments),this.sliderRef=Ge()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.UUID,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.UUID,t=>{t&&(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}firstUpdated(t){super.firstUpdated(t);const e=this.sliderRef.value;e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const i=r.detail;this.from=i.value1,this.to=i.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return Y`

        <div class="container ${this.canRanderSlider()?"ready":"loading"}">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Je(this.sliderRef)}
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

        `}};xt.styles=ze`

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
    
    `;zt([Ee({type:Number,reflect:!0})],xt.prototype,"min",2);zt([Ee({type:Number,reflect:!0})],xt.prototype,"max",2);zt([Ee({type:Number,reflect:!0})],xt.prototype,"from",2);zt([Ee({type:Number,reflect:!0})],xt.prototype,"to",2);zt([Ce()],xt.prototype,"palette",2);zt([Ce()],xt.prototype,"sliderRef",2);xt=zt([Se("registry-range-slider")],xt);var ch=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,hh=(t,e,r,n)=>{for(var i=n>1?void 0:n?uh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&ch(e,r,i),i};let xi=class extends bt{onLoadingStart(){}onInstanceCreated(){}onFailure(){}render(){return this.instance===void 0?de:Y`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this.instance?"Download":"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.instance.thermalUrl)}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.instance.exportAsPng()}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.instance.exportThermalDataAsSvg()}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

        
        `}};xi.styles=ze`

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
    
    `;xi=hh([Se("file-download-dropdown")],xi);var dh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,wn=(t,e,r,n)=>{for(var i=n>1?void 0:n?ph(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&dh(e,r,i),i};let ar=class extends _t{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return Y`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":de}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>Y`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():Y`
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
        `}};ar.styles=ze`

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


    `;wn([Ce()],ar.prototype,"histogram",2);wn([Ee({type:Boolean,reflect:!0})],ar.prototype,"interactive",2);wn([Ee({type:String,reflect:!0})],ar.prototype,"height",2);ar=wn([Se("registry-histogram")],ar);var fh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,Er=(t,e,r,n)=>{for(var i=n>1?void 0:n?gh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&fh(e,r,i),i};let Bt=class extends bt{constructor(){super(...arguments),this.playing=!1,this.percentage=0,this.ms="0:00:000",this.timelineRef=Ge(),this.barRef=Ge(),this.highlights=[]}onLoadingStart(){var t;(t=this.instance)==null||t.timeline.removeListener(this.UUID)}onInstanceCreated(t){t.timeline.addListener(this.UUID,e=>{this.percentage=e/t.duration*100,this.ms=this.formatDuration(t.timeline.value)})}onFailure(){var t;(t=this.instance)==null||t.timeline.removeListener(this.UUID)}formatDuration(t){const e=t%1e3,r=1e3*60,n=Math.floor(t/r),i=(t-n*r-e)/1e3,s=(a,u)=>{const h=a.toString();if(h.length===u)return h;if(h.length<u){const d=u-h.length;let g="";for(let f=0;f<d;f++)g=g+"0";return g+h}};return[n,s(i,2),s(e,3)].join(":")}play(){this.instance&&(this.playing=!0,this.instance.timeline.play())}pause(){this.instance&&(this.playing=!1,this.instance.timeline.pause())}applyBar(t){if(this.timelineRef.value&&this.barRef.value&&this.instance){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.instance.timeline.setValueByPercent(r)}}recieveHighlights(t){this.highlights=t}render(){const t=this.instance;return t===void 0||t.duration===0?de:Y`
            <div class="container">


                ${t!==void 0?Y`
                        <div class="container">

                            <div class="item button" @click=${this.playing?this.pause.bind(this):this.play.bind(this)}>


                                ${this.playing?Y`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:Y`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor">
                                ${this.ms}
                            </div>

                            <div class="item timeline" @click=${this.applyBar.bind(this)} ${Je(this.timelineRef)}>
                                <div class="timeline-bar">
                                    <div class="bar" style="width: ${this.percentage}%" ${Je(this.barRef)}></div>
                                </div>
                                <div class="timeline-marks">
                                    ${this.highlights.length>0?this.highlights.map(e=>{const r=e.fromMs/t.duration*100,n=(e.toMs-e.fromMs)/t.duration*100;return Y`
                                        <div class="mark" style="left: ${r}%; width: ${n}%"></div>
                                    `}):de}
                                </div>
                            </div>

                            <div class="item">${this.formatDuration(t.timeline.duration)}</div>
                        </div>
                    `:de}
            
            </div>

          `}};Bt.styles=ze`
    
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
    
    `;Er([Ce()],Bt.prototype,"playing",2);Er([Ce()],Bt.prototype,"percentage",2);Er([Ce()],Bt.prototype,"ms",2);Er([Ce()],Bt.prototype,"highlights",2);Bt=Er([Se("file-timeline")],Bt);var mh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,Pa=(t,e,r,n)=>{for(var i=n>1?void 0:n?vh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&mh(e,r,i),i};let _i=class extends bt{connectedCallback(){super.connectedCallback()}onInstanceCreated(t){}onFailure(t){}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.log(t,e,r)}willUpdate(t){super.willUpdate(t)}render(){return this.instance===void 0&&this.error===void 0?this.renderLoading():this.instance!==void 0?this.renderSuccess():this.renderFailure()}renderLoading(){return Y`<div>Načítám</div>`}renderSuccess(){var t;return Y`<div>${(t=this.instance)==null?void 0:t.fileName}</div>`}renderFailure(){var t;return Y`<div>${(t=this.error)==null?void 0:t.message}</div>`}};Pa([Ee({type:String,attribute:!0,reflect:!0})],_i.prototype,"uuid",2);_i=Pa([Se("test-component")],_i);var bh=Object.defineProperty,yh=Object.getOwnPropertyDescriptor,Sa=(t,e,r,n)=>{for(var i=n>1?void 0:n?yh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&bh(e,r,i),i};let an=class extends bt{constructor(){super(...arguments),this.fullscreen="off",this.appRef=Ge()}onLoadingStart(){}onInstanceCreated(){}onFailure(){}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(t,e,r){var n;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(n=this.appRef.value)==null||n.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return Y`
        <thermal-app>
          <thermal-button slot="bar" variant="foreground" interactive="false">${this.instance?this.instance.fileName:"Načítám..."}</thermal-button>

            <file-info-button slot="bar"></file-info-button>
            <file-download-dropdown slot="bar"></file-download-dropdown>
            
            <manager-palette-dropdown slot="bar"></manager-palette-dropdown>
            <registry-range-auto-button slot="bar"></registry-range-auto-button>
            <registry-range-full-button slot="bar"></registry-range-full-button>
            <file-share-button slot="bar"></file-share-button>
            <app-info-button slot="bar"></app-info-button>
            
            <registry-histogram></registry-histogram>
            <registry-range-slider></registry-range-slider>

            <registry-ticks-bar></registry-ticks-bar>
            <file-canvas></file-canvas>
            <file-timeline></file-timeline>
        </thermal-app>
    `}};an.styles=ze`

    .container {

      padding: calc( var( --thermal-gap ) / 3 );
      background-color: var( --thermal-slate-light );
      border: 1px solid var( --thermal-slate );
      border-radius: var( --thermal-radius );
      // box-shadow: var( --thermal-shadow );

    }

    .fullscreen-on {

      border: 0;
      border-radius: 0;
      // background: var( --thermal-slate-base-dark );

      ::part( file-canvas-wrapper ) {

        display: flex;
        align-items: center;
        justify-content: center;

        padding: var( --thermal-gap );
        box-sizing: border-box;
        height: 100%;

      }

      ::part( file-canvas-container ) {

        max-width: 100vw;
        max-height: 100vh;
        
        aspect-ratio: 4 / 3;
        margin:: 0 auto;7

        width: 80vw;

      }

      @media ( min-height: 800px ) {
        ::part( file-canvas-container ) {
            width: 70vw;
        }
      }
    }
  
  `;Sa([Ee({type:String,reflect:!0})],an.prototype,"fullscreen",2);an=Sa([Se("file-app")],an);const oi=window.matchMedia("(prefers-color-scheme: dark)"),Li="thermal-dark-mode",Es=()=>{document.body.classList.add(Li)},wh=()=>{document.body.classList.remove(Li)},xh=()=>{oi.matches&&Es();const t=e=>{e.matches?Es():wh()};oi.addEventListener("change",t),oi.addListener(t)},_h=Ls.version.toString().replaceAll(".","-"),Ca=t=>`thermal__${t}__${_h}`,kh=t=>document.getElementById(Ca(t))!==null,As=(t,e)=>{if(!kh(t)){const r=document.createElement("style");r.setAttribute("id",Ca(t)),r.innerHTML=e,document.head.appendChild(r)}},$h=()=>{As("rootVariables",`

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


            
        
        `),As("darkModeOverrides",`
        
            body.${Li} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${Ds}
    Author: ${Rs}
    Repository: ${Ms.url}
    `);xh();$h();document.addEventListener("DOMContentLoaded",()=>{});
