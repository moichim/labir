var Do=Object.defineProperty;var Mo=(t,e,r)=>e in t?Do(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var g=(t,e,r)=>(Mo(t,typeof e!="symbol"?e+"":e,r),r);const Lo="@labir/embed",ea="1.2.26",Fo="Embedded display of thermograms",Uo="dist/embed.js",jo="module",ta={type:"git",url:"https://github.com/moichim/labir"},Wo={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},ra="Jan Jáchim <jachim5@gmail.com>",No="ISC",Io={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@types/uuid":"^9.0.8","date-fns":"^3.6.0",lit:"^3.1.4","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11",workerpool:"^9.1.3"},Ho={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},ia={name:Lo,version:ea,description:Fo,main:Uo,type:jo,repository:ta,scripts:Wo,author:ra,license:No,dependencies:Io,devDependencies:Ho};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=globalThis,Bn=li.ShadowRoot&&(li.ShadyCSS===void 0||li.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vn=Symbol(),ks=new WeakMap;let na=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Vn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Bn&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=ks.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ks.set(r,e))}return e}toString(){return this.cssText}};const Bo=t=>new na(typeof t=="string"?t:t+"",void 0,Vn),He=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,n,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1],t[0]);return new na(r,t,Vn)},Vo=(t,e)=>{if(Bn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),n=li.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,t.appendChild(i)}},_s=Bn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Bo(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zo,defineProperty:qo,getOwnPropertyDescriptor:Yo,getOwnPropertyNames:Go,getOwnPropertySymbols:Xo,getPrototypeOf:Qo}=Object,Mt=globalThis,$s=Mt.trustedTypes,Ko=$s?$s.emptyScript:"",vn=Mt.reactiveElementPolyfillSupport,Sr=(t,e)=>t,ui={toAttribute(t,e){switch(e){case Boolean:t=t?Ko:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},zn=(t,e)=>!zo(t,e),Ss={attribute:!0,type:String,converter:ui,reflect:!1,hasChanged:zn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Mt.litPropertyMetadata??(Mt.litPropertyMetadata=new WeakMap);let nr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ss){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,r);n!==void 0&&qo(this.prototype,e,n)}}static getPropertyDescriptor(e,r,i){const{get:n,set:s}=Yo(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return n==null?void 0:n.call(this)},set(a){const u=n==null?void 0:n.call(this);s.call(this,a),this.requestUpdate(e,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ss}static _$Ei(){if(this.hasOwnProperty(Sr("elementProperties")))return;const e=Qo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Sr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sr("properties"))){const r=this.properties,i=[...Go(r),...Xo(r)];for(const n of i)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)r.unshift(_s(n))}else e!==void 0&&r.push(_s(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const a=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:ui).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,r){var s;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:ui;this._$Em=n,this[n]=u.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??zn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,a]of n)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};nr.elementStyles=[],nr.shadowRootOptions={mode:"open"},nr[Sr("elementProperties")]=new Map,nr[Sr("finalized")]=new Map,vn==null||vn({ReactiveElement:nr}),(Mt.reactiveElementVersions??(Mt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=globalThis,di=Pr.trustedTypes,Ps=di?di.createPolicy("lit-html",{createHTML:t=>t}):void 0,sa="$lit$",Dt=`lit$${Math.random().toFixed(9).slice(2)}$`,aa="?"+Dt,Zo=`<${aa}>`,Gt=document,Ar=()=>Gt.createComment(""),Tr=t=>t===null||typeof t!="object"&&typeof t!="function",oa=Array.isArray,Jo=t=>oa(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",bn=`[ 	
\f\r]`,kr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cs=/-->/g,Os=/>/g,Vt=RegExp(`>|${bn}(?:([^\\s"'>=/]+)(${bn}*=${bn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Es=/'/g,As=/"/g,la=/^(?:script|style|textarea|title)$/i,el=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),F=el(1),Lt=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Ts=new WeakMap,Yt=Gt.createTreeWalker(Gt,129);function ca(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ps!==void 0?Ps.createHTML(e):e}const tl=(t,e)=>{const r=t.length-1,i=[];let n,s=e===2?"<svg>":"",a=kr;for(let u=0;u<r;u++){const d=t[u];let h,m,f=-1,$=0;for(;$<d.length&&(a.lastIndex=$,m=a.exec(d),m!==null);)$=a.lastIndex,a===kr?m[1]==="!--"?a=Cs:m[1]!==void 0?a=Os:m[2]!==void 0?(la.test(m[2])&&(n=RegExp("</"+m[2],"g")),a=Vt):m[3]!==void 0&&(a=Vt):a===Vt?m[0]===">"?(a=n??kr,f=-1):m[1]===void 0?f=-2:(f=a.lastIndex-m[2].length,h=m[1],a=m[3]===void 0?Vt:m[3]==='"'?As:Es):a===As||a===Es?a=Vt:a===Cs||a===Os?a=kr:(a=Vt,n=void 0);const x=a===Vt&&t[u+1].startsWith("/>")?" ":"";s+=a===kr?d+Zo:f>=0?(i.push(h),d.slice(0,f)+sa+d.slice(f)+Dt+x):d+Dt+(f===-2?u:x)}return[ca(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let On=class ua{constructor({strings:e,_$litType$:r},i){let n;this.parts=[];let s=0,a=0;const u=e.length-1,d=this.parts,[h,m]=tl(e,r);if(this.el=ua.createElement(h,i),Yt.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(n=Yt.nextNode())!==null&&d.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const f of n.getAttributeNames())if(f.endsWith(sa)){const $=m[a++],x=n.getAttribute(f).split(Dt),k=/([.?@])?(.*)/.exec($);d.push({type:1,index:s,name:k[2],strings:x,ctor:k[1]==="."?il:k[1]==="?"?nl:k[1]==="@"?sl:ki}),n.removeAttribute(f)}else f.startsWith(Dt)&&(d.push({type:6,index:s}),n.removeAttribute(f));if(la.test(n.tagName)){const f=n.textContent.split(Dt),$=f.length-1;if($>0){n.textContent=di?di.emptyScript:"";for(let x=0;x<$;x++)n.append(f[x],Ar()),Yt.nextNode(),d.push({type:2,index:++s});n.append(f[$],Ar())}}}else if(n.nodeType===8)if(n.data===aa)d.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(Dt,f+1))!==-1;)d.push({type:7,index:s}),f+=Dt.length-1}s++}}static createElement(e,r){const i=Gt.createElement("template");return i.innerHTML=e,i}};function ar(t,e,r=t,i){var a,u;if(e===Lt)return e;let n=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const s=Tr(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((u=n==null?void 0:n._$AO)==null||u.call(n,!1),s===void 0?n=void 0:(n=new s(t),n._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=n:r._$Cl=n),n!==void 0&&(e=ar(t,n._$AS(t,e.values),n,i)),e}let rl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??Gt).importNode(r,!0);Yt.currentNode=n;let s=Yt.nextNode(),a=0,u=0,d=i[0];for(;d!==void 0;){if(a===d.index){let h;d.type===2?h=new jr(s,s.nextSibling,this,e):d.type===1?h=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(h=new al(s,this,e)),this._$AV.push(h),d=i[++u]}a!==(d==null?void 0:d.index)&&(s=Yt.nextNode(),a++)}return Yt.currentNode=Gt,n}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class jr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,n){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ar(this,e,r),Tr(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==Lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Jo(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==K&&Tr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Gt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=On.createElement(ca(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(r);else{const a=new rl(n,this),u=a.u(this.options);a.p(r),this.T(u),this._$AH=a}}_$AC(e){let r=Ts.get(e.strings);return r===void 0&&Ts.set(e.strings,r=new On(e)),r}k(e){oa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of e)n===r.length?r.push(i=new jr(this.S(Ar()),this.S(Ar()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let ki=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,n,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(e,r=this,i,n){const s=this.strings;let a=!1;if(s===void 0)e=ar(this,e,r,0),a=!Tr(e)||e!==this._$AH&&e!==Lt,a&&(this._$AH=e);else{const u=e;let d,h;for(e=s[0],d=0;d<s.length-1;d++)h=ar(this,u[i+d],r,d),h===Lt&&(h=this._$AH[d]),a||(a=!Tr(h)||h!==this._$AH[d]),h===K?e=K:e!==K&&(e+=(h??"")+s[d+1]),this._$AH[d]=h}a&&!n&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},il=class extends ki{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}};class nl extends ki{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class sl extends ki{constructor(e,r,i,n,s){super(e,r,i,n,s),this.type=5}_$AI(e,r=this){if((e=ar(this,e,r,0)??K)===Lt)return;const i=this._$AH,n=e===K&&i!==K||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==K&&(i===K||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let al=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ar(this,e)}};const yn=Pr.litHtmlPolyfillSupport;yn==null||yn(On,jr),(Pr.litHtmlVersions??(Pr.litHtmlVersions=[])).push("3.1.4");const ol=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(r==null?void 0:r.renderBefore)??null;i._$litPart$=n=new jr(e.insertBefore(Ar(),s),s,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ne=class extends nr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ol(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Lt}};var Js;Ne._$litElement$=!0,Ne.finalized=!0,(Js=globalThis.litElementHydrateSupport)==null||Js.call(globalThis,{LitElement:Ne});const wn=globalThis.litElementPolyfillSupport;wn==null||wn({LitElement:Ne});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ll={attribute:!0,type:String,converter:ui,reflect:!1,hasChanged:zn},cl=(t=ll,e,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(u){const d=e.get.call(this);e.set.call(this,u),this.requestUpdate(a,d,t)},init(u){return u!==void 0&&this.P(a,void 0,t),u}}}if(i==="setter"){const{name:a}=r;return function(u){const d=this[a];e.call(this,u),this.requestUpdate(a,d,t)}}throw Error("Unsupported decorator location: "+i)};function ne(t){return(e,r)=>typeof r=="object"?cl(t,e,r):((i,n,s)=>{const a=n.hasOwnProperty(s);return n.constructor.createProperty(s,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(n,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(t){return ne({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _i(t){return(e,r)=>{const{slot:i,selector:n}=t??{},s="slot"+(i?`[name=${i}]`:":not([name])");return ul(e,r,{get(){var d;const a=(d=this.renderRoot)==null?void 0:d.querySelector(s),u=(a==null?void 0:a.assignedElements(t))??[];return n===void 0?u:u.filter(h=>h.matches(n))}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dl=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yn=t=>(...e)=>({_$litDirective$:t,values:e});let Gn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cr=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const n of r)(i=n._$AO)==null||i.call(n,e,!1),Cr(n,e);return!0},hi=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},da=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),fl(e)}};function hl(t){this._$AN!==void 0?(hi(this),this._$AM=t,da(this)):this._$AM=t}function pl(t,e=!1,r=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let s=r;s<i.length;s++)Cr(i[s],!1),hi(i[s]);else i!=null&&(Cr(i,!1),hi(i));else Cr(this,t)}const fl=t=>{t.type==qn.CHILD&&(t._$AP??(t._$AP=pl),t._$AQ??(t._$AQ=hl))};class ml extends Gn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),da(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),r&&(Cr(this,e),hi(this))}setValue(e){if(dl(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=()=>new gl;let gl=class{};const xn=new WeakMap,Ge=Yn(class extends ml{render(t){return K}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),K}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=xn.get(e);r===void 0&&(r=new WeakMap,xn.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=xn.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var vl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,ha=(t,e,r,i)=>{for(var n=i>1?void 0:i?bl(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&vl(e,r,n),n};let Rr=class extends Ne{constructor(){super(),this.dialogRef=Ye(),this.closeButtonRef=Ye(),this.invokerRef=Ye()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return F`
            <slot name="invoker" ${Ge(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Ge(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Ge(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Rr.shadowRootOptions={...Ne.shadowRootOptions,mode:"open"};Rr.styles=He`

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

        
    
    `;ha([ne({type:String,reflect:!0})],Rr.prototype,"label",2);Rr=ha([Se("thermal-dialog")],Rr);var yl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,$i=(t,e,r,i)=>{for(var n=i>1?void 0:i?wl(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&yl(e,r,n),n};let St=class extends Ne{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return F`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};St.VARIANTS=["slate","primary","foreground","background"];St.shadowRootOptions={...Ne.shadowRootOptions,mode:"open"};St.styles=He`

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
    
    `;$i([ne({type:String,converter:{fromAttribute:t=>St.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],St.prototype,"variant",2);$i([ne({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],St.prototype,"interactive",2);$i([ne({type:String})],St.prototype,"size",2);St=$i([Se("thermal-button")],St);const or=Math.min,$t=Math.max,pi=Math.round,Ft=t=>({x:t,y:t}),xl={left:"right",right:"left",bottom:"top",top:"bottom"},kl={start:"end",end:"start"};function Rs(t,e,r){return $t(t,or(e,r))}function Wr(t,e){return typeof t=="function"?t(e):t}function Pt(t){return t.split("-")[0]}function Si(t){return t.split("-")[1]}function pa(t){return t==="x"?"y":"x"}function fa(t){return t==="y"?"height":"width"}function Nr(t){return["top","bottom"].includes(Pt(t))?"y":"x"}function ma(t){return pa(Nr(t))}function _l(t,e,r){r===void 0&&(r=!1);const i=Si(t),n=ma(t),s=fa(n);let a=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=fi(a)),[a,fi(a)]}function $l(t){const e=fi(t);return[En(t),e,En(e)]}function En(t){return t.replace(/start|end/g,e=>kl[e])}function Sl(t,e,r){const i=["left","right"],n=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?n:i:e?i:n;case"left":case"right":return e?s:a;default:return[]}}function Pl(t,e,r,i){const n=Si(t);let s=Sl(Pt(t),r==="start",i);return n&&(s=s.map(a=>a+"-"+n),e&&(s=s.concat(s.map(En)))),s}function fi(t){return t.replace(/left|right|bottom|top/g,e=>xl[e])}function Cl(t){return{top:0,right:0,bottom:0,left:0,...t}}function ga(t){return typeof t!="number"?Cl(t):{top:t,right:t,bottom:t,left:t}}function lr(t){const{x:e,y:r,width:i,height:n}=t;return{width:i,height:n,top:r,left:e,right:e+i,bottom:r+n,x:e,y:r}}function Ds(t,e,r){let{reference:i,floating:n}=t;const s=Nr(e),a=ma(e),u=fa(a),d=Pt(e),h=s==="y",m=i.x+i.width/2-n.width/2,f=i.y+i.height/2-n.height/2,$=i[u]/2-n[u]/2;let x;switch(d){case"top":x={x:m,y:i.y-n.height};break;case"bottom":x={x:m,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:f};break;case"left":x={x:i.x-n.width,y:f};break;default:x={x:i.x,y:i.y}}switch(Si(e)){case"start":x[a]-=$*(r&&h?-1:1);break;case"end":x[a]+=$*(r&&h?-1:1);break}return x}const Ol=async(t,e,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:a}=r,u=s.filter(Boolean),d=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:t,floating:e,strategy:n}),{x:m,y:f}=Ds(h,i,d),$=i,x={},k=0;for(let O=0;O<u.length;O++){const{name:P,fn:U}=u[O],{x:j,y:H,data:ue,reset:ee}=await U({x:m,y:f,initialPlacement:i,placement:$,strategy:n,middlewareData:x,rects:h,platform:a,elements:{reference:t,floating:e}});m=j??m,f=H??f,x={...x,[P]:{...x[P],...ue}},ee&&k<=50&&(k++,typeof ee=="object"&&(ee.placement&&($=ee.placement),ee.rects&&(h=ee.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:n}):ee.rects),{x:m,y:f}=Ds(h,$,d)),O=-1)}return{x:m,y:f,placement:$,strategy:n,middlewareData:x}};async function va(t,e){var r;e===void 0&&(e={});const{x:i,y:n,platform:s,rects:a,elements:u,strategy:d}=t,{boundary:h="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:$=!1,padding:x=0}=Wr(e,t),k=ga(x),P=u[$?f==="floating"?"reference":"floating":f],U=lr(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(P)))==null||r?P:P.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(u.floating)),boundary:h,rootBoundary:m,strategy:d})),j=f==="floating"?{x:i,y:n,width:a.floating.width,height:a.floating.height}:a.reference,H=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u.floating)),ue=await(s.isElement==null?void 0:s.isElement(H))?await(s.getScale==null?void 0:s.getScale(H))||{x:1,y:1}:{x:1,y:1},ee=lr(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:j,offsetParent:H,strategy:d}):j);return{top:(U.top-ee.top+k.top)/ue.y,bottom:(ee.bottom-U.bottom+k.bottom)/ue.y,left:(U.left-ee.left+k.left)/ue.x,right:(ee.right-U.right+k.right)/ue.x}}const El=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:n,middlewareData:s,rects:a,initialPlacement:u,platform:d,elements:h}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:$,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:O=!0,...P}=Wr(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const U=Pt(n),j=Pt(u)===u,H=await(d.isRTL==null?void 0:d.isRTL(h.floating)),ue=$||(j||!O?[fi(u)]:$l(u));!$&&k!=="none"&&ue.push(...Pl(u,O,k,H));const ee=[u,...ue],Pe=await va(e,P),W=[];let me=((i=s.flip)==null?void 0:i.overflows)||[];if(m&&W.push(Pe[U]),f){const he=_l(n,a,H);W.push(Pe[he[0]],Pe[he[1]])}if(me=[...me,{placement:n,overflows:W}],!W.every(he=>he<=0)){var se,de;const he=(((se=s.flip)==null?void 0:se.index)||0)+1,ge=ee[he];if(ge)return{data:{index:he,overflows:me},reset:{placement:ge}};let te=(de=me.filter(be=>be.overflows[0]<=0).sort((be,Ae)=>be.overflows[1]-Ae.overflows[1])[0])==null?void 0:de.placement;if(!te)switch(x){case"bestFit":{var ve;const be=(ve=me.map(Ae=>[Ae.placement,Ae.overflows.filter(Qe=>Qe>0).reduce((Qe,Ve)=>Qe+Ve,0)]).sort((Ae,Qe)=>Ae[1]-Qe[1])[0])==null?void 0:ve[0];be&&(te=be);break}case"initialPlacement":te=u;break}if(n!==te)return{reset:{placement:te}}}return{}}}};function ba(t){const e=or(...t.map(s=>s.left)),r=or(...t.map(s=>s.top)),i=$t(...t.map(s=>s.right)),n=$t(...t.map(s=>s.bottom));return{x:e,y:r,width:i-e,height:n-r}}function Al(t){const e=t.slice().sort((n,s)=>n.y-s.y),r=[];let i=null;for(let n=0;n<e.length;n++){const s=e[n];!i||s.y-i.y>i.height/2?r.push([s]):r[r.length-1].push(s),i=s}return r.map(n=>lr(ba(n)))}const Tl=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:n,platform:s,strategy:a}=e,{padding:u=2,x:d,y:h}=Wr(t,e),m=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(i.reference))||[]),f=Al(m),$=lr(ba(m)),x=ga(u);function k(){if(f.length===2&&f[0].left>f[1].right&&d!=null&&h!=null)return f.find(P=>d>P.left-x.left&&d<P.right+x.right&&h>P.top-x.top&&h<P.bottom+x.bottom)||$;if(f.length>=2){if(Nr(r)==="y"){const de=f[0],ve=f[f.length-1],he=Pt(r)==="top",ge=de.top,te=ve.bottom,be=he?de.left:ve.left,Ae=he?de.right:ve.right,Qe=Ae-be,Ve=te-ge;return{top:ge,bottom:te,left:be,right:Ae,width:Qe,height:Ve,x:be,y:ge}}const P=Pt(r)==="left",U=$t(...f.map(de=>de.right)),j=or(...f.map(de=>de.left)),H=f.filter(de=>P?de.left===j:de.right===U),ue=H[0].top,ee=H[H.length-1].bottom,Pe=j,W=U,me=W-Pe,se=ee-ue;return{top:ue,bottom:ee,left:Pe,right:W,width:me,height:se,x:Pe,y:ue}}return $}const O=await s.getElementRects({reference:{getBoundingClientRect:k},floating:i.floating,strategy:a});return n.reference.x!==O.reference.x||n.reference.y!==O.reference.y||n.reference.width!==O.reference.width||n.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function Rl(t,e){const{placement:r,platform:i,elements:n}=t,s=await(i.isRTL==null?void 0:i.isRTL(n.floating)),a=Pt(r),u=Si(r),d=Nr(r)==="y",h=["left","top"].includes(a)?-1:1,m=s&&d?-1:1,f=Wr(e,t);let{mainAxis:$,crossAxis:x,alignmentAxis:k}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return u&&typeof k=="number"&&(x=u==="end"?k*-1:k),d?{x:x*m,y:$*h}:{x:$*h,y:x*m}}const Dl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:n,y:s,placement:a,middlewareData:u}=e,d=await Rl(e,t);return a===((r=u.offset)==null?void 0:r.placement)&&(i=u.arrow)!=null&&i.alignmentOffset?{}:{x:n+d.x,y:s+d.y,data:{...d,placement:a}}}}},Ml=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:n}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:u={fn:P=>{let{x:U,y:j}=P;return{x:U,y:j}}},...d}=Wr(t,e),h={x:r,y:i},m=await va(e,d),f=Nr(Pt(n)),$=pa(f);let x=h[$],k=h[f];if(s){const P=$==="y"?"top":"left",U=$==="y"?"bottom":"right",j=x+m[P],H=x-m[U];x=Rs(j,x,H)}if(a){const P=f==="y"?"top":"left",U=f==="y"?"bottom":"right",j=k+m[P],H=k-m[U];k=Rs(j,k,H)}const O=u.fn({...e,[$]:x,[f]:k});return{...O,data:{x:O.x-r,y:O.y-i}}}}};function mr(t){return ya(t)?(t.nodeName||"").toLowerCase():"#document"}function st(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Wt(t){var e;return(e=(ya(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ya(t){return t instanceof Node||t instanceof st(t).Node}function wt(t){return t instanceof Element||t instanceof st(t).Element}function xt(t){return t instanceof HTMLElement||t instanceof st(t).HTMLElement}function Ms(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof st(t).ShadowRoot}function Ir(t){const{overflow:e,overflowX:r,overflowY:i,display:n}=mt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(n)}function Ll(t){return["table","td","th"].includes(mr(t))}function Pi(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Xn(t){const e=Qn(),r=mt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Fl(t){let e=Ut(t);for(;xt(e)&&!cr(e);){if(Pi(e))return null;if(Xn(e))return e;e=Ut(e)}return null}function Qn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function cr(t){return["html","body","#document"].includes(mr(t))}function mt(t){return st(t).getComputedStyle(t)}function Ci(t){return wt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Ut(t){if(mr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ms(t)&&t.host||Wt(t);return Ms(e)?e.host:e}function wa(t){const e=Ut(t);return cr(e)?t.ownerDocument?t.ownerDocument.body:t.body:xt(e)&&Ir(e)?e:wa(e)}function An(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=wa(t),s=n===((i=t.ownerDocument)==null?void 0:i.body),a=st(n);return s?e.concat(a,a.visualViewport||[],Ir(n)?n:[],a.frameElement&&r?An(a.frameElement):[]):e.concat(n,An(n,[],r))}function xa(t){const e=mt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=xt(t),s=n?t.offsetWidth:r,a=n?t.offsetHeight:i,u=pi(r)!==s||pi(i)!==a;return u&&(r=s,i=a),{width:r,height:i,$:u}}function ka(t){return wt(t)?t:t.contextElement}function sr(t){const e=ka(t);if(!xt(e))return Ft(1);const r=e.getBoundingClientRect(),{width:i,height:n,$:s}=xa(e);let a=(s?pi(r.width):r.width)/i,u=(s?pi(r.height):r.height)/n;return(!a||!Number.isFinite(a))&&(a=1),(!u||!Number.isFinite(u))&&(u=1),{x:a,y:u}}const Ul=Ft(0);function _a(t){const e=st(t);return!Qn()||!e.visualViewport?Ul:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function jl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==st(t)?!1:e}function Dr(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),s=ka(t);let a=Ft(1);e&&(i?wt(i)&&(a=sr(i)):a=sr(t));const u=jl(s,r,i)?_a(s):Ft(0);let d=(n.left+u.x)/a.x,h=(n.top+u.y)/a.y,m=n.width/a.x,f=n.height/a.y;if(s){const $=st(s),x=i&&wt(i)?st(i):i;let k=$,O=k.frameElement;for(;O&&i&&x!==k;){const P=sr(O),U=O.getBoundingClientRect(),j=mt(O),H=U.left+(O.clientLeft+parseFloat(j.paddingLeft))*P.x,ue=U.top+(O.clientTop+parseFloat(j.paddingTop))*P.y;d*=P.x,h*=P.y,m*=P.x,f*=P.y,d+=H,h+=ue,k=st(O),O=k.frameElement}}return lr({width:m,height:f,x:d,y:h})}function Wl(t){let{elements:e,rect:r,offsetParent:i,strategy:n}=t;const s=n==="fixed",a=Wt(i),u=e?Pi(e.floating):!1;if(i===a||u&&s)return r;let d={scrollLeft:0,scrollTop:0},h=Ft(1);const m=Ft(0),f=xt(i);if((f||!f&&!s)&&((mr(i)!=="body"||Ir(a))&&(d=Ci(i)),xt(i))){const $=Dr(i);h=sr(i),m.x=$.x+i.clientLeft,m.y=$.y+i.clientTop}return{width:r.width*h.x,height:r.height*h.y,x:r.x*h.x-d.scrollLeft*h.x+m.x,y:r.y*h.y-d.scrollTop*h.y+m.y}}function Nl(t){return Array.from(t.getClientRects())}function $a(t){return Dr(Wt(t)).left+Ci(t).scrollLeft}function Il(t){const e=Wt(t),r=Ci(t),i=t.ownerDocument.body,n=$t(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=$t(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+$a(t);const u=-r.scrollTop;return mt(i).direction==="rtl"&&(a+=$t(e.clientWidth,i.clientWidth)-n),{width:n,height:s,x:a,y:u}}function Hl(t,e){const r=st(t),i=Wt(t),n=r.visualViewport;let s=i.clientWidth,a=i.clientHeight,u=0,d=0;if(n){s=n.width,a=n.height;const h=Qn();(!h||h&&e==="fixed")&&(u=n.offsetLeft,d=n.offsetTop)}return{width:s,height:a,x:u,y:d}}function Bl(t,e){const r=Dr(t,!0,e==="fixed"),i=r.top+t.clientTop,n=r.left+t.clientLeft,s=xt(t)?sr(t):Ft(1),a=t.clientWidth*s.x,u=t.clientHeight*s.y,d=n*s.x,h=i*s.y;return{width:a,height:u,x:d,y:h}}function Ls(t,e,r){let i;if(e==="viewport")i=Hl(t,r);else if(e==="document")i=Il(Wt(t));else if(wt(e))i=Bl(e,r);else{const n=_a(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return lr(i)}function Sa(t,e){const r=Ut(t);return r===e||!wt(r)||cr(r)?!1:mt(r).position==="fixed"||Sa(r,e)}function Vl(t,e){const r=e.get(t);if(r)return r;let i=An(t,[],!1).filter(u=>wt(u)&&mr(u)!=="body"),n=null;const s=mt(t).position==="fixed";let a=s?Ut(t):t;for(;wt(a)&&!cr(a);){const u=mt(a),d=Xn(a);!d&&u.position==="fixed"&&(n=null),(s?!d&&!n:!d&&u.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Ir(a)&&!d&&Sa(t,a))?i=i.filter(m=>m!==a):n=u,a=Ut(a)}return e.set(t,i),i}function zl(t){let{element:e,boundary:r,rootBoundary:i,strategy:n}=t;const a=[...r==="clippingAncestors"?Pi(e)?[]:Vl(e,this._c):[].concat(r),i],u=a[0],d=a.reduce((h,m)=>{const f=Ls(e,m,n);return h.top=$t(f.top,h.top),h.right=or(f.right,h.right),h.bottom=or(f.bottom,h.bottom),h.left=$t(f.left,h.left),h},Ls(e,u,n));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function ql(t){const{width:e,height:r}=xa(t);return{width:e,height:r}}function Yl(t,e,r){const i=xt(e),n=Wt(e),s=r==="fixed",a=Dr(t,!0,s,e);let u={scrollLeft:0,scrollTop:0};const d=Ft(0);if(i||!i&&!s)if((mr(e)!=="body"||Ir(n))&&(u=Ci(e)),i){const f=Dr(e,!0,s,e);d.x=f.x+e.clientLeft,d.y=f.y+e.clientTop}else n&&(d.x=$a(n));const h=a.left+u.scrollLeft-d.x,m=a.top+u.scrollTop-d.y;return{x:h,y:m,width:a.width,height:a.height}}function kn(t){return mt(t).position==="static"}function Fs(t,e){return!xt(t)||mt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Pa(t,e){const r=st(t);if(Pi(t))return r;if(!xt(t)){let n=Ut(t);for(;n&&!cr(n);){if(wt(n)&&!kn(n))return n;n=Ut(n)}return r}let i=Fs(t,e);for(;i&&Ll(i)&&kn(i);)i=Fs(i,e);return i&&cr(i)&&kn(i)&&!Xn(i)?r:i||Fl(t)||r}const Gl=async function(t){const e=this.getOffsetParent||Pa,r=this.getDimensions,i=await r(t.floating);return{reference:Yl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Xl(t){return mt(t).direction==="rtl"}const Ql={convertOffsetParentRelativeRectToViewportRelativeRect:Wl,getDocumentElement:Wt,getClippingRect:zl,getOffsetParent:Pa,getElementRects:Gl,getClientRects:Nl,getDimensions:ql,getScale:sr,isElement:wt,isRTL:Xl},Kl=Dl,Zl=Ml,Jl=El,ec=Tl,tc=(t,e,r)=>{const i=new Map,n={platform:Ql,...r},s={...n.platform,_c:i};return Ol(t,e,{...n,platform:s})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=Yn(class extends Gn{constructor(t){var e;if(super(t),t.type!==qn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const a=!!e[s];a===this.st.has(s)||(n=this.nt)!=null&&n.has(s)||(a?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return Lt}});var rc=Object.defineProperty,ic=Object.getOwnPropertyDescriptor,Hr=(t,e,r,i)=>{for(var n=i>1?void 0:i?ic(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&rc(e,r,n),n};let Ct=class extends Ne{constructor(){super(...arguments),this.dropdownRef=Ye(),this.invokerRef=Ye(),this.optionsRef=Ye(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){tc(this.invokerRef.value,this.optionsRef.value,{middleware:[Kl(2),Jl(),ec(),Zl()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,n,s,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(n=this.dropdownRef.value)==null||n.classList.add("dropdown__open")):((s=this.optionsRef.value)==null||s.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return F`

            <div class="dropdown" ${Ge(this.dropdownRef)}>

                <thermal-button class="${Or(t)}" ${Ge(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?F`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:F`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Ge(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Ct.shadowRootOptions={...Ne.shadowRootOptions,mode:"open"};Ct.styles=He`

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
    
    `;Hr([_i({slot:"option"})],Ct.prototype,"_options",2);Hr([ne({type:String,reflect:!0})],Ct.prototype,"open",2);Hr([ne({type:String,reflect:!0,attribute:!0}),J()],Ct.prototype,"interactive",2);Hr([ne({type:String,reflect:!0})],Ct.prototype,"variant",2);Ct=Hr([Se("thermal-dropdown")],Ct);var nc=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,Oi=(t,e,r,i)=>{for(var n=i>1?void 0:i?sc(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&nc(e,r,n),n};let ur=class extends Ne{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Ye(),this.contentRef=Ye(),this.rulerContentRef=Ye()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return F`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ge(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ge(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ge(this.contentRef)}>

                    ${this.collapsed===!1?F`
                        <slot></slot>    
                    `:K}
                
                </div>

            </div>

            ${this.collapsed?F`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:K}
        
        `}};ur.styles=He`

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

    `;Oi([J()],ur.prototype,"collapsed",2);Oi([J()],ur.prototype,"lastContentWidth",2);Oi([J()],ur.prototype,"drawerRef",2);ur=Oi([Se("thermal-bar")],ur);var ac=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,Br=(t,e,r,i)=>{for(var n=i>1?void 0:i?oc(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&ac(e,r,n),n};let Xt=class extends Ne{constructor(){super(...arguments),this.fullscreen="off",this.appRef=Ye(),this.contentRef=Ye()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){console.log("fullscreen"),this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const s=r.contentRect.height,a=r.contentRect.width,u=s-175,d=a-0,h=this.contentRef.value.offsetHeight,m=4/3;let f=0,$=0;h<u?(console.log("priorita šířky"),f=d,$=f/m):(console.log("priorita výšky"),$=u,f=$*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${$}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return F`

        <div class="container" ${Ge(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?F`
            <div class="bar">
                <slot name="bar"></slot>
                <thermal-button slot="bar" @click=${this.toggleFullscreen.bind(this)}>
                <div style="width: calc( var( --thermal-gap ) * .9 );line-height: 0;">
                ${this.fullscreen==="on"?F`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:F`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
            </div> 
        `:""}

        ${this.pre.length>=0?F`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Ge(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

        </div>
        
        `}};Xt.styles=He`

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
    
    `;Br([_i({slot:"bar",flatten:!0})],Xt.prototype,"barItems",2);Br([_i({slot:"bar",flatten:!0})],Xt.prototype,"barElements",2);Br([_i({slot:"pre",flatten:!0})],Xt.prototype,"pre",2);Br([ne({type:String,reflect:!0})],Xt.prototype,"fullscreen",2);Xt=Br([Se("thermal-app")],Xt);var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,uc=(t,e,r,i)=>{for(var n=i>1?void 0:i?cc(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&lc(e,r,n),n};let Tn=class extends Ne{render(){return F`
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
                        <p>version ${ia.version}</p>
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
        `}};Tn.styles=He`

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
    
    `;Tn=uc([Se("app-info-button")],Tn);function ut(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Qt(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Ca=6048e5,dc=864e5;let hc={};function Ei(){return hc}function Mr(t,e){var u,d,h,m;const r=Ei(),i=(e==null?void 0:e.weekStartsOn)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,n=ut(t),s=n.getDay(),a=(s<i?7:0)+s-i;return n.setDate(n.getDate()-a),n.setHours(0,0,0,0),n}function mi(t){return Mr(t,{weekStartsOn:1})}function Oa(t){const e=ut(t),r=e.getFullYear(),i=Qt(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const n=mi(i),s=Qt(t,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const a=mi(s);return e.getTime()>=n.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function Us(t){const e=ut(t);return e.setHours(0,0,0,0),e}function js(t){const e=ut(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function pc(t,e){const r=Us(t),i=Us(e),n=+r-js(r),s=+i-js(i);return Math.round((n-s)/dc)}function fc(t){const e=Oa(t),r=Qt(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),mi(r)}function mc(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ea(t){if(!mc(t)&&typeof t!="number")return!1;const e=ut(t);return!isNaN(Number(e))}function gc(t){const e=ut(t),r=Qt(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const vc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bc=(t,e,r)=>{let i;const n=vc[t];return typeof n=="string"?i=n:e===1?i=n.one:i=n.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function _n(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const yc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},xc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},kc={date:_n({formats:yc,defaultWidth:"full"}),time:_n({formats:wc,defaultWidth:"full"}),dateTime:_n({formats:xc,defaultWidth:"full"})},_c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$c=(t,e,r,i)=>_c[t];function _r(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let n;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,u=r!=null&&r.width?String(r.width):a;n=t.formattingValues[u]||t.formattingValues[a]}else{const a=t.defaultWidth,u=r!=null&&r.width?String(r.width):t.defaultWidth;n=t.values[u]||t.values[a]}const s=t.argumentCallback?t.argumentCallback(e):e;return n[s]}}const Sc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Pc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Cc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Oc={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ec={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ac={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Tc=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Rc={ordinalNumber:Tc,era:_r({values:Sc,defaultWidth:"wide"}),quarter:_r({values:Pc,defaultWidth:"wide",argumentCallback:t=>t-1}),month:_r({values:Cc,defaultWidth:"wide"}),day:_r({values:Oc,defaultWidth:"wide"}),dayPeriod:_r({values:Ec,defaultWidth:"wide",formattingValues:Ac,defaultFormattingWidth:"wide"})};function $r(t){return(e,r={})=>{const i=r.width,n=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=e.match(n);if(!s)return null;const a=s[0],u=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?Mc(u,f=>f.test(a)):Dc(u,f=>f.test(a));let h;h=t.valueCallback?t.valueCallback(d):d,h=r.valueCallback?r.valueCallback(h):h;const m=e.slice(a.length);return{value:h,rest:m}}}function Dc(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Mc(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Lc(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const n=i[0],s=e.match(t.parsePattern);if(!s)return null;let a=t.valueCallback?t.valueCallback(s[0]):s[0];a=r.valueCallback?r.valueCallback(a):a;const u=e.slice(n.length);return{value:a,rest:u}}}const Fc=/^(\d+)(th|st|nd|rd)?/i,Uc=/\d+/i,jc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Wc={any:[/^b/i,/^(a|c)/i]},Nc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ic={any:[/1/i,/2/i,/3/i,/4/i]},Hc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Bc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zc={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},qc={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Yc={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gc={ordinalNumber:Lc({matchPattern:Fc,parsePattern:Uc,valueCallback:t=>parseInt(t,10)}),era:$r({matchPatterns:jc,defaultMatchWidth:"wide",parsePatterns:Wc,defaultParseWidth:"any"}),quarter:$r({matchPatterns:Nc,defaultMatchWidth:"wide",parsePatterns:Ic,defaultParseWidth:"any",valueCallback:t=>t+1}),month:$r({matchPatterns:Hc,defaultMatchWidth:"wide",parsePatterns:Bc,defaultParseWidth:"any"}),day:$r({matchPatterns:Vc,defaultMatchWidth:"wide",parsePatterns:zc,defaultParseWidth:"any"}),dayPeriod:$r({matchPatterns:qc,defaultMatchWidth:"any",parsePatterns:Yc,defaultParseWidth:"any"})},Xc={code:"en-US",formatDistance:bc,formatLong:kc,formatRelative:$c,localize:Rc,match:Gc,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Qc(t){const e=ut(t);return pc(e,gc(e))+1}function Kc(t){const e=ut(t),r=+mi(e)-+fc(e);return Math.round(r/Ca)+1}function Aa(t,e){var m,f,$,x;const r=ut(t),i=r.getFullYear(),n=Ei(),s=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??n.firstWeekContainsDate??((x=($=n.locale)==null?void 0:$.options)==null?void 0:x.firstWeekContainsDate)??1,a=Qt(t,0);a.setFullYear(i+1,0,s),a.setHours(0,0,0,0);const u=Mr(a,e),d=Qt(t,0);d.setFullYear(i,0,s),d.setHours(0,0,0,0);const h=Mr(d,e);return r.getTime()>=u.getTime()?i+1:r.getTime()>=h.getTime()?i:i-1}function Zc(t,e){var u,d,h,m;const r=Ei(),i=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,n=Aa(t,e),s=Qt(t,0);return s.setFullYear(n,0,i),s.setHours(0,0,0,0),Mr(s,e)}function Jc(t,e){const r=ut(t),i=+Mr(r,e)-+Zc(r,e);return Math.round(i/Ca)+1}function ce(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Rt={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return ce(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):ce(r+1,2)},d(t,e){return ce(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return ce(t.getHours()%12||12,e.length)},H(t,e){return ce(t.getHours(),e.length)},m(t,e){return ce(t.getMinutes(),e.length)},s(t,e){return ce(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),n=Math.trunc(i*Math.pow(10,r-3));return ce(n,e.length)}},rr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ws={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),n=i>0?i:1-i;return r.ordinalNumber(n,{unit:"year"})}return Rt.y(t,e)},Y:function(t,e,r,i){const n=Aa(t,i),s=n>0?n:1-n;if(e==="YY"){const a=s%100;return ce(a,2)}return e==="Yo"?r.ordinalNumber(s,{unit:"year"}):ce(s,e.length)},R:function(t,e){const r=Oa(t);return ce(r,e.length)},u:function(t,e){const r=t.getFullYear();return ce(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ce(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ce(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Rt.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ce(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const n=Jc(t,i);return e==="wo"?r.ordinalNumber(n,{unit:"week"}):ce(n,e.length)},I:function(t,e,r){const i=Kc(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):ce(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Rt.d(t,e)},D:function(t,e,r){const i=Qc(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ce(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const n=t.getDay(),s=(n-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return ce(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const n=t.getDay(),s=(n-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return ce(s,e.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),n=i===0?7:i;switch(e){case"i":return String(n);case"ii":return ce(n,e.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let n;switch(i===12?n=rr.noon:i===0?n=rr.midnight:n=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let n;switch(i>=17?n=rr.evening:i>=12?n=rr.afternoon:i>=4?n=rr.morning:n=rr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Rt.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Rt.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ce(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):ce(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Rt.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Rt.s(t,e)},S:function(t,e){return Rt.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Is(i);case"XXXX":case"XX":return zt(i);case"XXXXX":case"XXX":default:return zt(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return Is(i);case"xxxx":case"xx":return zt(i);case"xxxxx":case"xxx":default:return zt(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ns(i,":");case"OOOO":default:return"GMT"+zt(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ns(i,":");case"zzzz":default:return"GMT"+zt(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return ce(i,e.length)},T:function(t,e,r){const i=t.getTime();return ce(i,e.length)}};function Ns(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),n=Math.trunc(i/60),s=i%60;return s===0?r+String(n):r+String(n)+e+ce(s,2)}function Is(t,e){return t%60===0?(t>0?"-":"+")+ce(Math.abs(t)/60,2):zt(t,e)}function zt(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),n=ce(Math.trunc(i/60),2),s=ce(i%60,2);return r+n+e+s}const Hs=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ta=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},eu=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],n=r[2];if(!n)return Hs(t,e);let s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Hs(i,e)).replace("{{time}}",Ta(n,e))},tu={p:Ta,P:eu},ru=/^D+$/,iu=/^Y+$/,nu=["D","DD","YY","YYYY"];function su(t){return ru.test(t)}function au(t){return iu.test(t)}function ou(t,e,r){const i=lu(t,e,r);if(console.warn(i),nu.includes(t))throw new RangeError(i)}function lu(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const cu=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,uu=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,du=/^'([^]*?)'?$/,hu=/''/g,pu=/[a-zA-Z]/;function Lr(t,e,r){var m,f,$,x;const i=Ei(),n=i.locale??Xc,s=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??((x=($=i.locale)==null?void 0:$.options)==null?void 0:x.weekStartsOn)??0,u=ut(t);if(!Ea(u))throw new RangeError("Invalid time value");let d=e.match(uu).map(k=>{const O=k[0];if(O==="p"||O==="P"){const P=tu[O];return P(k,n.formatLong)}return k}).join("").match(cu).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const O=k[0];if(O==="'")return{isToken:!1,value:fu(k)};if(Ws[O])return{isToken:!0,value:k};if(O.match(pu))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:k}});n.localize.preprocessor&&(d=n.localize.preprocessor(u,d));const h={firstWeekContainsDate:s,weekStartsOn:a,locale:n};return d.map(k=>{if(!k.isToken)return k.value;const O=k.value;(au(O)||su(O))&&ou(O,e,String(t));const P=Ws[O[0]];return P(u,O,n.localize,h)}).join("")}function fu(t){const e=t.match(du);return e?e[1].replace(hu,"'"):t}function $n(t,e){const r=ut(t);if(!Ea(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",n=(e==null?void 0:e.representation)??"complete";let s="";const a=i==="extended"?"-":"",u=i==="extended"?":":"";if(n!=="time"){const d=ce(r.getDate(),2),h=ce(r.getMonth()+1,2);s=`${ce(r.getFullYear(),4)}${a}${h}${a}${d}`}if(n!=="date"){const d=ce(r.getHours(),2),h=ce(r.getMinutes(),2),m=ce(r.getSeconds(),2);s=`${s}${s===""?"":" "}${d}${u}${h}${u}${m}`}return s}var mu={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},gu=`\r
`,vu="\uFEFF",Ai=t=>Object.assign({},mu,t);class bu extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class yu extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class wu extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class xu extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var gr=t=>t,at=t=>t,Er=gr,Ti=gr,dr=gr,Bs=gr,Vs=gr,ku=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},_u=t=>Bs(typeof t=="object"?t.key:t),$u=t=>Vs(typeof t=="object"?t.displayLabel:t),Su=(t,...e)=>e.reduce((r,i)=>i(r),t),Pu=t=>e=>t.useBom?Ti(at(e)+vu):e,Cu=t=>e=>t.showTitle?Kn(Ti(at(e)+t.title))(dr("")):e,Kn=t=>e=>Ti(at(t)+at(e)+gu),Ra=t=>(e,r)=>Ou(t)(dr(at(e)+at(r))),Ou=t=>e=>gr(at(e)+t.fieldSeparator),Eu=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new yu("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=dr("");for(let n=0;n<e.length;n++){const s=$u(e[n]);i=Ra(t)(i,Da(t,at(s)))}return i=dr(at(i).slice(0,-1)),Kn(r)(i)},Au=(t,e,r)=>i=>{let n=i;for(var s=0;s<r.length;s++){let a=dr("");for(let u=0;u<e.length;u++){const d=_u(e[u]),h=r[s][at(d)];a=Ra(t)(a,Da(t,h))}a=dr(at(a).slice(0,-1)),n=Kn(n)(a)}return n},Tu=t=>+t===t&&(!isFinite(t)||!!(t%1)),Ru=(t,e)=>{if(Tu(e)){if(t.decimalSeparator==="locale")return Er(e.toLocaleString());if(t.decimalSeparator)return Er(e.toString().replace(".",t.decimalSeparator))}return Er(e.toString())},ci=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+ku(e,t.quoteCharacter)+t.quoteCharacter),Er(r)},Du=(t,e)=>{const r=e?"true":"false";return Er(t.boolDisplay[r])},Mu=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?ci(t,t.replaceUndefinedWith+""):e===null?ci(t,"null"):ci(t,""),Da=(t,e)=>{if(typeof e=="number")return Ru(t,e);if(typeof e=="string")return ci(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Du(t,e);if(e===null||typeof e>"u")return Mu(t,e);throw new xu(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Lu=t=>e=>{const r=Ai(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let n=Su(Ti(""),Pu(r),Cu(r),Eu(r,i),Au(r,i,e));if(at(n).length<1)throw new bu("Output is empty. Is your data formatted correctly?");return n},Fu=t=>e=>{const r=Ai(t),i=at(e),n=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${n};charset=utf8;`})},Uu=t=>e=>{if(!window)throw new wu("Downloading only supported in a browser environment.");const r=Fu(t)(e),i=Ai(t),n=i.useTextFile?"txt":"csv",s=`${i.filename}.${n}`,a=document.createElement("a");a.download=s,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wu(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return t[i]}})}),r}var Rn={exports:{}};const Nu={},Iu=Object.freeze(Object.defineProperty({__proto__:null,default:Nu},Symbol.toStringTag,{value:"Module"})),ir=Wu(Iu);/**
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
 */(function(t,e){(function(r,i){i(e)})(ju,function(r){var i={},n={exports:{}};(function(w){var C=function(B){return typeof B<"u"&&B.versions!=null&&B.versions.node!=null&&B+""=="[object process]"};w.exports.isNode=C,w.exports.platform=typeof process<"u"&&C(process)?"node":"browser";var E=w.exports.platform==="node"&&ir;w.exports.isMainThread=w.exports.platform==="node"?(!E||E.isMainThread)&&!process.connected:typeof Window<"u",w.exports.cpus=w.exports.platform==="browser"?self.navigator.hardwareConcurrency:ir.cpus().length})(n);var s=n.exports,a={},u;function d(){if(u)return a;u=1;function w(B,we){var G=this;if(!(this instanceof w))throw new SyntaxError("Constructor must be called with the new operator");if(typeof B!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Ce=[],pe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var M=function(X,ae){Ce.push(X),pe.push(ae)};this.then=function(_,X){return new w(function(ae,Fe){var ze=_?C(_,ae,Fe):ae,vt=X?C(X,ae,Fe):Fe;M(ze,vt)},G)};var fe=function(X){return G.resolved=!0,G.rejected=!1,G.pending=!1,Ce.forEach(function(ae){ae(X)}),M=function(Fe,ze){Fe(X)},fe=y=function(){},G},y=function(X){return G.resolved=!1,G.rejected=!0,G.pending=!1,pe.forEach(function(ae){ae(X)}),M=function(Fe,ze){ze(X)},fe=y=function(){},G};this.cancel=function(){return we?we.cancel():y(new E),G},this.timeout=function(_){if(we)we.timeout(_);else{var X=setTimeout(function(){y(new A("Promise timed out after "+_+" ms"))},_);G.always(function(){clearTimeout(X)})}return G},B(function(_){fe(_)},function(_){y(_)})}function C(B,we,G){return function(Ce){try{var pe=B(Ce);pe&&typeof pe.then=="function"&&typeof pe.catch=="function"?pe.then(we,G):we(pe)}catch(M){G(M)}}}w.prototype.catch=function(B){return this.then(null,B)},w.prototype.always=function(B){return this.then(B,B)},w.all=function(B){return new w(function(we,G){var Ce=B.length,pe=[];Ce?B.forEach(function(M,fe){M.then(function(y){pe[fe]=y,Ce--,Ce==0&&we(pe)},function(y){Ce=0,G(y)})}):we(pe)})},w.defer=function(){var B={};return B.promise=new w(function(we,G){B.resolve=we,B.reject=G}),B};function E(B){this.message=B||"promise cancelled",this.stack=new Error().stack}E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="CancellationError",w.CancellationError=E;function A(B){this.message=B||"timeout exceeded",this.stack=new Error().stack}return A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="TimeoutError",w.TimeoutError=A,a.Promise=w,a}function h(w,C){(C==null||C>w.length)&&(C=w.length);for(var E=0,A=Array(C);E<C;E++)A[E]=w[E];return A}function m(w,C){var E=typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(!E){if(Array.isArray(w)||(E=U(w))||C){E&&(w=E);var A=0,B=function(){};return{s:B,n:function(){return A>=w.length?{done:!0}:{done:!1,value:w[A++]}},e:function(pe){throw pe},f:B}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var we,G=!0,Ce=!1;return{s:function(){E=E.call(w)},n:function(){var pe=E.next();return G=pe.done,pe},e:function(pe){Ce=!0,we=pe},f:function(){try{G||E.return==null||E.return()}finally{if(Ce)throw we}}}}function f(w,C,E){return(C=O(C))in w?Object.defineProperty(w,C,{value:E,enumerable:!0,configurable:!0,writable:!0}):w[C]=E,w}function $(w,C){var E=Object.keys(w);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(w);C&&(A=A.filter(function(B){return Object.getOwnPropertyDescriptor(w,B).enumerable})),E.push.apply(E,A)}return E}function x(w){for(var C=1;C<arguments.length;C++){var E=arguments[C]!=null?arguments[C]:{};C%2?$(Object(E),!0).forEach(function(A){f(w,A,E[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(E)):$(Object(E)).forEach(function(A){Object.defineProperty(w,A,Object.getOwnPropertyDescriptor(E,A))})}return w}function k(w,C){if(typeof w!="object"||!w)return w;var E=w[Symbol.toPrimitive];if(E!==void 0){var A=E.call(w,C||"default");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(C==="string"?String:Number)(w)}function O(w){var C=k(w,"string");return typeof C=="symbol"?C:C+""}function P(w){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},P(w)}function U(w,C){if(w){if(typeof w=="string")return h(w,C);var E={}.toString.call(w).slice(8,-1);return E==="Object"&&w.constructor&&(E=w.constructor.name),E==="Map"||E==="Set"?Array.from(w):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?h(w,C):void 0}}var j={exports:{}},H={},ue;function ee(){return ue||(ue=1,H.validateOptions=function(C,E,A){if(C){var B=C?Object.keys(C):[],we=B.find(function(Ce){return!E.includes(Ce)});if(we)throw new Error('Object "'+A+'" contains an unknown option "'+we+'"');var G=E.find(function(Ce){return Object.prototype[Ce]&&!B.includes(Ce)});if(G)throw new Error('Object "'+A+'" contains an inherited option "'+G+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return C}},H.workerOptsNames=["credentials","name","type"],H.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],H.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),H}var Pe,W;function me(){return W||(W=1,Pe=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Pe}var se;function de(){if(se)return j.exports;se=1;var w=d(),C=w.Promise,E=s,A=ee(),B=A.validateOptions,we=A.forkOptsNames,G=A.workerThreadOptsNames,Ce=A.workerOptsNames,pe="__workerpool-terminate__";function M(){var I=y();if(!I)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return I}function fe(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":P(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function y(){try{return ir}catch(I){if(P(I)==="object"&&I!==null&&I.code==="MODULE_NOT_FOUND")return null;throw I}}function _(){if(E.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var I=new Blob([me()],{type:"text/javascript"});return window.URL.createObjectURL(I)}else return __dirname+"/worker.js"}function X(I,Q){if(Q.workerType==="web")return fe(),ae(I,Q.workerOpts,Worker);if(Q.workerType==="thread")return S=M(),Fe(I,S,Q);if(Q.workerType==="process"||!Q.workerType)return ze(I,vt(Q),ir);if(E.platform==="browser")return fe(),ae(I,Q.workerOpts,Worker);var S=y();return S?Fe(I,S,Q):ze(I,vt(Q),ir)}function ae(I,Q,S){B(Q,Ce,"workerOpts");var Y=new S(I,Q);return Y.isBrowserWorker=!0,Y.on=function(xe,ye){this.addEventListener(xe,function(Ee){ye(Ee.data)})},Y.send=function(xe,ye){this.postMessage(xe,ye)},Y}function Fe(I,Q,S){var Y,xe;B(S==null?void 0:S.workerThreadOpts,G,"workerThreadOpts");var ye=new Q.Worker(I,x({stdout:(Y=S==null?void 0:S.emitStdStreams)!==null&&Y!==void 0?Y:!1,stderr:(xe=S==null?void 0:S.emitStdStreams)!==null&&xe!==void 0?xe:!1},S==null?void 0:S.workerThreadOpts));return ye.isWorkerThread=!0,ye.send=function(Ee,oe){this.postMessage(Ee,oe)},ye.kill=function(){return this.terminate(),!0},ye.disconnect=function(){this.terminate()},S!=null&&S.emitStdStreams&&(ye.stdout.on("data",function(Ee){return ye.emit("stdout",Ee)}),ye.stderr.on("data",function(Ee){return ye.emit("stderr",Ee)})),ye}function ze(I,Q,S){B(Q.forkOpts,we,"forkOpts");var Y=S.fork(I,Q.forkArgs,Q.forkOpts),xe=Y.send;return Y.send=function(ye){return xe.call(Y,ye)},Q.emitStdStreams&&(Y.stdout.on("data",function(ye){return Y.emit("stdout",ye)}),Y.stderr.on("data",function(ye){return Y.emit("stderr",ye)})),Y.isChildProcess=!0,Y}function vt(I){I=I||{};var Q=process.execArgv.join(" "),S=Q.indexOf("--inspect")!==-1,Y=Q.indexOf("--debug-brk")!==-1,xe=[];return S&&(xe.push("--inspect="+I.debugPort),Y&&xe.push("--debug-brk")),process.execArgv.forEach(function(ye){ye.indexOf("--max-old-space-size")>-1&&xe.push(ye)}),Object.assign({},I,{forkArgs:I.forkArgs,forkOpts:Object.assign({},I.forkOpts,{execArgv:(I.forkOpts&&I.forkOpts.execArgv||[]).concat(xe),stdio:I.emitStdStreams?"pipe":void 0})})}function nt(I){for(var Q=new Error(""),S=Object.keys(I),Y=0;Y<S.length;Y++)Q[S[Y]]=I[S[Y]];return Q}function ot(I,Q){if(Object.keys(I.processing).length===1){var S=Object.values(I.processing)[0];S.options&&typeof S.options.on=="function"&&S.options.on(Q)}}function At(I,Q){var S=this,Y=Q||{};this.script=I||_(),this.worker=X(this.script,Y),this.debugPort=Y.debugPort,this.forkOpts=Y.forkOpts,this.forkArgs=Y.forkArgs,this.workerOpts=Y.workerOpts,this.workerThreadOpts=Y.workerThreadOpts,this.workerTerminateTimeout=Y.workerTerminateTimeout,I||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(oe){ot(S,{stdout:oe.toString()})}),this.worker.on("stderr",function(oe){ot(S,{stderr:oe.toString()})}),this.worker.on("message",function(oe){if(!S.terminated)if(typeof oe=="string"&&oe==="ready")S.worker.ready=!0,ye();else{var Je=oe.id,Ue=S.processing[Je];Ue!==void 0&&(oe.isEvent?Ue.options&&typeof Ue.options.on=="function"&&Ue.options.on(oe.payload):(delete S.processing[Je],S.terminating===!0&&S.terminate(),oe.error?Ue.resolver.reject(nt(oe.error)):Ue.resolver.resolve(oe.result)))}});function xe(oe){S.terminated=!0;for(var Je in S.processing)S.processing[Je]!==void 0&&S.processing[Je].resolver.reject(oe);S.processing=Object.create(null)}function ye(){var oe=m(S.requestQueue.splice(0)),Je;try{for(oe.s();!(Je=oe.n()).done;){var Ue=Je.value;S.worker.send(Ue.message,Ue.transfer)}}catch(Xr){oe.e(Xr)}finally{oe.f()}}var Ee=this.worker;this.worker.on("error",xe),this.worker.on("exit",function(oe,Je){var Ue=`Workerpool Worker terminated Unexpectedly
`;Ue+="    exitCode: `"+oe+"`\n",Ue+="    signalCode: `"+Je+"`\n",Ue+="    workerpool.script: `"+S.script+"`\n",Ue+="    spawnArgs: `"+Ee.spawnargs+"`\n",Ue+="    spawnfile: `"+Ee.spawnfile+"`\n",Ue+="    stdout: `"+Ee.stdout+"`\n",Ue+="    stderr: `"+Ee.stderr+"`\n",xe(new Error(Ue))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return At.prototype.methods=function(){return this.exec("methods")},At.prototype.exec=function(I,Q,S,Y){S||(S=C.defer());var xe=++this.lastId;this.processing[xe]={id:xe,resolver:S,options:Y};var ye={message:{id:xe,method:I,params:Q},transfer:Y&&Y.transfer};this.terminated?S.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ye.message,ye.transfer):this.requestQueue.push(ye);var Ee=this;return S.promise.catch(function(oe){if(oe instanceof C.CancellationError||oe instanceof C.TimeoutError)return delete Ee.processing[xe],Ee.terminateAndNotify(!0).then(function(){throw oe},function(Je){throw Je});throw oe})},At.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},At.prototype.terminate=function(I,Q){var S=this;if(I){for(var Y in this.processing)this.processing[Y]!==void 0&&this.processing[Y].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Q=="function"&&(this.terminationHandler=Q),this.busy())this.terminating=!0;else{var xe=function(oe){if(S.terminated=!0,S.cleaning=!1,S.worker!=null&&S.worker.removeAllListeners&&S.worker.removeAllListeners("message"),S.worker=null,S.terminating=!1,S.terminationHandler)S.terminationHandler(oe,S);else if(oe)throw oe};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){xe(new Error("worker already killed!"));return}var ye=setTimeout(function(){S.worker&&S.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ye),S.worker&&(S.worker.killed=!0),xe()}),this.worker.ready?this.worker.send(pe):this.requestQueue.push({message:pe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");xe()}},At.prototype.terminateAndNotify=function(I,Q){var S=C.defer();return Q&&S.promise.timeout(Q),this.terminate(I,function(Y,xe){Y?S.reject(Y):S.resolve(xe)}),S.promise},j.exports=At,j.exports._tryRequireWorkerThreads=y,j.exports._setupProcessWorker=ze,j.exports._setupBrowserWorker=ae,j.exports._setupWorkerThreadWorker=Fe,j.exports.ensureWorkerThreads=M,j.exports}var ve,he;function ge(){if(he)return ve;he=1;var w=65535;ve=C;function C(){this.ports=Object.create(null),this.length=0}return C.prototype.nextAvailableStartingAt=function(E){for(;this.ports[E]===!0;)E++;if(E>=w)throw new Error("WorkerPool debug port limit reached: "+E+">= "+w);return this.ports[E]=!0,this.length++,E},C.prototype.releasePort=function(E){delete this.ports[E],this.length--},ve}var te,be;function Ae(){if(be)return te;be=1;var w=d(),C=w.Promise,E=de(),A=s,B=ge(),we=new B;function G(y,_){typeof y=="string"?this.script=y||null:(this.script=null,_=y),this.workers=[],this.tasks=[],_=_||{},this.forkArgs=Object.freeze(_.forkArgs||[]),this.forkOpts=Object.freeze(_.forkOpts||{}),this.workerOpts=Object.freeze(_.workerOpts||{}),this.workerThreadOpts=Object.freeze(_.workerThreadOpts||{}),this.debugPortStart=_.debugPortStart||43210,this.nodeWorker=_.nodeWorker,this.workerType=_.workerType||_.nodeWorker||"auto",this.maxQueueSize=_.maxQueueSize||1/0,this.workerTerminateTimeout=_.workerTerminateTimeout||1e3,this.onCreateWorker=_.onCreateWorker||function(){return null},this.onTerminateWorker=_.onTerminateWorker||function(){return null},this.emitStdStreams=_.emitStdStreams||!1,_&&"maxWorkers"in _?(Ce(_.maxWorkers),this.maxWorkers=_.maxWorkers):this.maxWorkers=Math.max((A.cpus||4)-1,1),_&&"minWorkers"in _&&(_.minWorkers==="max"?this.minWorkers=this.maxWorkers:(pe(_.minWorkers),this.minWorkers=_.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&E.ensureWorkerThreads()}G.prototype.exec=function(y,_,X){if(_&&!Array.isArray(_))throw new TypeError('Array expected as argument "params"');if(typeof y=="string"){var ae=C.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Fe=this.tasks,ze={method:y,params:_,resolver:ae,timeout:null,options:X};Fe.push(ze);var vt=ae.promise.timeout;return ae.promise.timeout=function(ot){return Fe.indexOf(ze)!==-1?(ze.timeout=ot,ae.promise):vt.call(ae.promise,ot)},this._next(),ae.promise}else{if(typeof y=="function")return this.exec("run",[String(y),_],X);throw new TypeError('Function or string expected as argument "method"')}},G.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var y=this;return this.exec("methods").then(function(_){var X={};return _.forEach(function(ae){X[ae]=function(){return y.exec(ae,Array.prototype.slice.call(arguments))}}),X})},G.prototype._next=function(){if(this.tasks.length>0){var y=this._getWorker();if(y){var _=this,X=this.tasks.shift();if(X.resolver.promise.pending){var ae=y.exec(X.method,X.params,X.resolver,X.options).then(_._boundNext).catch(function(){if(y.terminated)return _._removeWorker(y)}).then(function(){_._next()});typeof X.timeout=="number"&&ae.timeout(X.timeout)}else _._next()}}},G.prototype._getWorker=function(){for(var y=this.workers,_=0;_<y.length;_++){var X=y[_];if(X.busy()===!1)return X}return y.length<this.maxWorkers?(X=this._createWorkerHandler(),y.push(X),X):null},G.prototype._removeWorker=function(y){var _=this;return we.releasePort(y.debugPort),this._removeWorkerFromList(y),this._ensureMinWorkers(),new C(function(X,ae){y.terminate(!1,function(Fe){_.onTerminateWorker({forkArgs:y.forkArgs,forkOpts:y.forkOpts,workerThreadOpts:y.workerThreadOpts,script:y.script}),Fe?ae(Fe):X(y)})})},G.prototype._removeWorkerFromList=function(y){var _=this.workers.indexOf(y);_!==-1&&this.workers.splice(_,1)},G.prototype.terminate=function(y,_){var X=this;this.tasks.forEach(function(nt){nt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ae=function(ot){we.releasePort(ot.debugPort),this._removeWorkerFromList(ot)},Fe=ae.bind(this),ze=[],vt=this.workers.slice();return vt.forEach(function(nt){var ot=nt.terminateAndNotify(y,_).then(Fe).always(function(){X.onTerminateWorker({forkArgs:nt.forkArgs,forkOpts:nt.forkOpts,workerThreadOpts:nt.workerThreadOpts,script:nt.script})});ze.push(ot)}),C.all(ze)},G.prototype.stats=function(){var y=this.workers.length,_=this.workers.filter(function(X){return X.busy()}).length;return{totalWorkers:y,busyWorkers:_,idleWorkers:y-_,pendingTasks:this.tasks.length,activeTasks:_}},G.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var y=this.workers.length;y<this.minWorkers;y++)this.workers.push(this._createWorkerHandler())},G.prototype._createWorkerHandler=function(){var y=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new E(y.script||this.script,{forkArgs:y.forkArgs||this.forkArgs,forkOpts:y.forkOpts||this.forkOpts,workerOpts:y.workerOpts||this.workerOpts,workerThreadOpts:y.workerThreadOpts||this.workerThreadOpts,debugPort:we.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Ce(y){if(!M(y)||!fe(y)||y<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function pe(y){if(!M(y)||!fe(y)||y<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function M(y){return typeof y=="number"}function fe(y){return Math.round(y)==y}return te=G,te}var Qe={},Ve,vr;function Jt(){if(vr)return Ve;vr=1;function w(C,E){this.message=C,this.transfer=E}return Ve=w,Ve}var zr;function qr(){return zr||(zr=1,function(w){var C=Jt(),E="__workerpool-terminate__",A={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")A.on=function(M,fe){addEventListener(M,function(y){fe(y.data)})},A.send=function(M,fe){fe?postMessage(M,fe):postMessage(M)};else if(typeof process<"u"){var B;try{B=ir}catch(M){if(!(P(M)==="object"&&M!==null&&M.code==="MODULE_NOT_FOUND"))throw M}if(B&&B.parentPort!==null){var we=B.parentPort;A.send=we.postMessage.bind(we),A.on=we.on.bind(we),A.exit=process.exit.bind(process)}else A.on=process.on.bind(process),A.send=function(M){process.send(M)},A.on("disconnect",function(){process.exit(1)}),A.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function G(M){return Object.getOwnPropertyNames(M).reduce(function(fe,y){return Object.defineProperty(fe,y,{value:M[y],enumerable:!0})},{})}function Ce(M){return M&&typeof M.then=="function"&&typeof M.catch=="function"}A.methods={},A.methods.run=function(fe,y){var _=new Function("return ("+fe+").apply(null, arguments);");return _.apply(_,y)},A.methods.methods=function(){return Object.keys(A.methods)},A.terminationHandler=void 0,A.cleanupAndExit=function(M){var fe=function(){A.exit(M)};if(!A.terminationHandler)return fe();var y=A.terminationHandler(M);Ce(y)?y.then(fe,fe):fe()};var pe=null;A.on("message",function(M){if(M===E)return A.cleanupAndExit(0);try{var fe=A.methods[M.method];if(fe){pe=M.id;var y=fe.apply(fe,M.params);Ce(y)?y.then(function(_){_ instanceof C?A.send({id:M.id,result:_.message,error:null},_.transfer):A.send({id:M.id,result:_,error:null}),pe=null}).catch(function(_){A.send({id:M.id,result:null,error:G(_)}),pe=null}):(y instanceof C?A.send({id:M.id,result:y.message,error:null},y.transfer):A.send({id:M.id,result:y,error:null}),pe=null)}else throw new Error('Unknown method "'+M.method+'"')}catch(_){A.send({id:M.id,result:null,error:G(_)})}}),A.register=function(M,fe){if(M)for(var y in M)M.hasOwnProperty(y)&&(A.methods[y]=M[y]);fe&&(A.terminationHandler=fe.onTerminate),A.send("ready")},A.emit=function(M){if(pe){if(M instanceof C){A.send({id:pe,isEvent:!0,payload:M.message},M.transfer);return}A.send({id:pe,isEvent:!0,payload:M})}},w.add=A.register,w.emit=A.emit}(Qe)),Qe}var ji=s.platform,Yr=s.isMainThread,Wi=s.cpus;function it(w,C){var E=Ae();return new E(w,C)}var Et=i.pool=it;function br(w,C){var E=qr();E.add(w,C)}var ht=i.worker=br;function Te(w){var C=qr();C.emit(w)}var Gr=i.workerEmit=Te,Ni=d(),je=Ni.Promise,Ii=i.Promise=je,Hi=i.Transfer=Jt(),Bi=i.platform=ji,Vi=i.isMainThread=Yr,zi=i.cpus=Wi;r.Promise=Ii,r.Transfer=Hi,r.cpus=zi,r.default=i,r.isMainThread=Vi,r.platform=Bi,r.pool=Et,r.worker=ht,r.workerEmit=Gr,Object.defineProperty(r,"__esModule",{value:!0})})})(Rn,Rn.exports);var Hu=Rn.exports,dt=class{constructor(t,e){g(this,"_value");g(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Ma=class extends dt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Bu=class extends dt{constructor(){super(...arguments);g(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Vu=class extends dt{constructor(){super(...arguments);g(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const i={...e};return e.from<r.min&&(i.from=r.min),e.to>r.max&&(i.to=r.max),i}afterSetEffect(e){console.log(e),e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(s=>s.height>=r),n={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(n):this.imposeRange(n)}}},zu=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},qu=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Yu=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Gu=zu(),Ri={iron:{pixels:Yu,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:qu,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Gu,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Xu=class extends dt{get availablePalettes(){return Ri}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},Cn,Qu=(Cn=class{},g(Cn,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),Cn),Le,Ku=(Le=class extends Qu{static humanRangeDates(e,r){return e=Le.inputToDate(e),r=Le.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Le.humanDate(e):[Le.humanDate(e),Le.humanDate(r)].join(" - ")}static human(e){return`${Le.humanDate(e)} ${Le.humanTime(e,!0)} `}},g(Le,"isoDate",e=>(e=Le.inputToDate(e),$n(e,{representation:"date"}))),g(Le,"isoTime",e=>(e=Le.inputToDate(e),$n(e,{representation:"time"}))),g(Le,"isoComplete",e=>(e=Le.inputToDate(e),$n(e))),g(Le,"humanTime",(e,r=!1)=>(e=Le.inputToDate(e),Lr(e,r?"HH:mm:ss":"HH:mm"))),g(Le,"humanDate",(e,r=!1)=>(e=Le.inputToDate(e),Lr(e,r?"d. M.":"d. M. yyyy"))),Le),Di=class{},La=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},zs=class Fa extends La{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new Fa(e.url,e.code,e.message)}},Ua=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Zu=class extends Di{constructor(e,r,i,n,s,a,u,d,h,m,f){super();g(this,"id");g(this,"horizontalLimit");g(this,"verticalLimit");g(this,"group");g(this,"url");g(this,"thermalUrl");g(this,"visibleUrl");g(this,"fileName");g(this,"frameCount");g(this,"frames",[]);g(this,"signature","unknown");g(this,"version",-1);g(this,"streamCount",-1);g(this,"fileDataType",-1);g(this,"unit",-1);g(this,"width");g(this,"height");g(this,"timestamp");g(this,"duration");g(this,"min");g(this,"max");g(this,"_isHover",!1);g(this,"root",null);g(this,"canvasLayer");g(this,"visibleLayer");g(this,"cursorLayer");g(this,"listenerLayer");g(this,"timeline");g(this,"cursorValue");g(this,"recording");g(this,"_mounted",!1);g(this,"_pixels");g(this,"_onHover");g(this,"_onClick");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=n,this.timestamp=a,this.duration=u,this.min=d,this.max=h,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=s}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const r=this.width,i=this.root.clientWidth,n=r/i,s=Math.round(e.offsetX*n),a=Math.round(e.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:s,y:a}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){this.cursorValue.recalculateFromCursor(e),e!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(e.x,e.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},Mi=class{constructor(t){g(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},yt=class Dn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=Dn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=Dn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},Ju=class extends Mi{constructor(e){super(e);g(this,"container");g(this,"canvas");g(this,"context");g(this,"_opacity",1);this.container=yt.createCanvasContainer(),this.canvas=yt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,n,s,a,u,d)=>{const m=new OffscreenCanvas(s,a).getContext("2d"),f=n-i;for(let k=0;k<=s;k++)for(let O=0;O<=a;O++){const P=k+O*s;let U=u[P];U<i&&(U=i),U>n&&(U=n);const H=(U-i)/f,ue=Math.round(255*H),ee=d[ue];m.fillStyle=ee,m.fillRect(k,O,1,1)}const $=m.getImageData(0,0,s,a);return await createImageBitmap($)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},ed=class extends Mi{constructor(e){super(e);g(this,"layerRoot");g(this,"center");g(this,"axisX");g(this,"axisY");g(this,"label");g(this,"_show",!1);g(this,"_hover",!1);this.layerRoot=yt.createCursorLayerRoot(),this.center=yt.createCursorLayerCenter(),this.axisX=yt.createCursorLayerX(),this.axisY=yt.createCursorLayerY(),this.label=yt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(e,r,i){if(this.instance.root!==null){const n=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*n),a=Math.round(r*n);this.center.style.left=this.px(s),this.center.style.top=this.px(a),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${i.toFixed(3)} °C`}}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},td=class extends Mi{constructor(e){super(e);g(this,"container");this.container=yt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},rd=class extends Mi{constructor(e,r){super(e);g(this,"container");g(this,"image");this._url=r,this.container=yt.createVisibleLayer(),this._url&&(this.image=yt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},qt=class{constructor(){g(this,"callbacks",new Map)}add(t,e){this.callbacks.set(t,e)}remove(t){this.callbacks.delete(t)}call(...t){this.callbacks.forEach(e=>e(...t))}},id=class{constructor(t,e){g(this,"_currentFrame");g(this,"bufferSize",4);g(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),n=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(n.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,u)=>{const d=n[u];this.buffer.set(d,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},ja={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},nd=class extends dt{constructor(e,r,i,n){super(e,Math.max(Math.min(r,i.length),0));g(this,"_playbackSpeed",1);g(this,"startTimestampRelative");g(this,"endTimestampRelative");g(this,"stepsByAbsolute",new Map);g(this,"stepsByRelative",new Map);g(this,"stepsByIndex",new Map);g(this,"relativeSteps",[]);g(this,"_currentStep");g(this,"isSequence");g(this,"_isPlaying",!1);g(this,"timer");g(this,"buffer");g(this,"callbackdPlaybackSpeed",new qt);g(this,"callbacksPlay",new qt);g(this,"callbacksPause",new qt);g(this,"callbacksStop",new qt);g(this,"callbacksEnd",new qt);g(this,"callbacksChangeFrame",new qt);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(s=>{this.stepsByIndex.set(s.index,s),this.stepsByAbsolute.set(s.absolute,s),this.stepsByRelative.set(s.relative,s),this.relativeSteps.push(s.relative)}),this.buffer=new id(this,n)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return ja[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),Lr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,n=this._validateIndex(i-40),s=this._validateIndex(i),u=this.steps.slice(n,s).reverse().find(d=>d.relative<=e);return u!==void 0?u:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,n=this._validateIndex(i),s=this._validateIndex(i+40),u=this.steps.slice(n,s).find(d=>d.relative>e);return u!==void 0?u:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},sd=class extends dt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},ad=class extends dt{constructor(){super(...arguments);g(this,"stream");g(this,"recorder");g(this,"mimeType");g(this,"_isRecording",!1);g(this,"_mayStop",!0);g(this,"recordedChunks",[]);g(this,"callbackMayStop",new qt)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.remove(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(s=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(s)&&(this.mimeType=s)});const i={mimeType:this.mimeType},n=new MediaRecorder(e,i);return{stream:e,recorder:n,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},od=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(t="__thermal-data"){const e=Ai({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",t)}),r=this.file.frames.map(n=>{const{pixels:s,...a}=n;return a}),i=Lu(e)(r);Uu(e)(i)}},Wa=class Na extends Zu{constructor(r,i,n,s,a,u,d,h,m,f,$,x,k,O,P,U,j){super(r,i.thermalUrl,n,s,m,a,d,$,x,u,i.visibleUrl);g(this,"_export");this.group=r,this.service=i,this.width=n,this.height=s,this.timestamp=a,this.frameCount=u,this.duration=d,this.frameInterval=h,this.fps=f,this.min=$,this.max=x,this.bytesize=k,this.averageEmissivity=O,this.averageReflectedKelvins=P,this.firstFrame=U,this.timelineData=j,this.pixels=U.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new od(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new Ju(this),this.visibleLayer=new rd(this,this.visibleUrl),this.cursorLayer=new ed(this),this.listenerLayer=new td(this),this.cursorValue=new sd(this,void 0),this.timeline=new nd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new ad(this,!1),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const i=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(i)}}getPixelsForHistogram(){return[]}static fromService(r,i,n,s){return new Na(r,i,n.width,n.height,n.timestamp,n.frameCount,n.duration,n.frameInterval,s.pixels,n.fps,n.min,n.max,n.bytesize,n.averageEmissivity,n.averageReflectedKelvins,s,n.timeline).postInit()}},gi=class extends La{constructor(e,r,i,n,s){super(n,s);g(this,"id",Math.random());g(this,"baseInfoCache");g(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),n=Wa.fromService(e,this,r,i);return e.files.addFile(n),n}},ld=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),n=t.byteLength,s=(se,de)=>{const ve=se.getBigInt64(de,!0),he=62135596800000n,ge=10000n,te=24n*60n*60n*1000n*ge,be=0x4000000000000000n,Ae=0x8000000000000000n;let Ve=ve&0x3fffffffffffffffn;ve&Ae&&(Ve>be-te&&(Ve-=be),Ve<0&&(Ve+=te));const Jt=Ve/ge-he;return Number(Jt)},a=s(e,5),u=e.getUint8(15);let d=2;u===1&&(d=4);const h=57,m=r*i*d,f=h+m,$=t.slice(25),x=$.byteLength/f,k=se=>{const de=se*f,ve=de+f,he=$.slice(de,ve),ge=new DataView(he),te=ge.getFloat32(8,!0),be=ge.getFloat32(12,!0),Ae=s(ge,0),Qe=ge.getFloat32(24,!0),Ve=ge.getFloat32(28,!0);return{timestamp:Ae,min:te,max:be,emissivity:Qe,reflectedKelvins:Ve}},O=[];for(let se=0;se<x;se++){const de=k(se);O.push(de)}const P={emissivity:0,reflectedKelvins:0};let U=1/0,j=-1/0;const H=[];O.forEach(se=>{P.emissivity=P.emissivity+se.emissivity,P.reflectedKelvins=P.reflectedKelvins+se.reflectedKelvins,se.min<U&&(U=se.min),se.max>j&&(j=se.max),H.push(se.timestamp)});const ue=H[0],ee=[];H.forEach((se,de)=>{const ve=H[de+1];let he=0;ve===void 0&&(he=0),he=ve-se;const ge=se-ue;ee.push({absolute:se,relative:ge,offset:isNaN(he)?0:he,index:de})});const Pe=O[O.length-1].timestamp-O[0].timestamp,W=Pe/x,me=1e3/W;return{width:r,height:i,timestamp:a,bytesize:n,frameCount:x,duration:Pe,frameInterval:W,fps:me,timeline:ee,min:U,max:j,averageEmissivity:P.emissivity/O.length,averageReflectedKelvins:P.reflectedKelvins/O.length}},cd=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),n=r.getUint16(17,!0),s=r.getUint16(19,!0),a=i===1?4:2,u=57,d=n*s*a,h=u+d,m=t.slice(25),f=e*h,$=f+h;return{array:m.slice(f,$),dataType:i}},ud=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),n=62135596800000n,s=10000n,a=24n*60n*60n*1000n*s,u=0x4000000000000000n,d=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&d&&(m>u-a&&(m-=u),m<0&&(m+=a));const $=m/s-n,x=Number($),k=r.getFloat32(8,!0),O=r.getFloat32(12,!0),P=r.getFloat32(24,!0),U=r.getFloat32(28,!0),j=t.slice(57);let H=[];if(e===0){const ue=new Uint16Array(j),ee=Math.abs(k-O),Pe=65535;ue.forEach(W=>{const me=W/Pe;H.push(k+ee*me)})}else e===1&&(H=Array.from(new Float32Array(j)));return{timestamp:x,min:k,max:O,emissivity:P,reflectedKelvins:U,pixels:H}},dd=async t=>{let e=[];const r=async P=>{const U=new DataView(P.slice(0,25)),j=U.getUint8(15),H=U.getUint16(17,!0),ue=U.getUint16(19,!0),ee=j===1?4:2,Pe=57,W=H*ue*ee,me=Pe+W,se=P.slice(25),de=se.byteLength/me;let ve=[];for(let he=0;he<de;he++){const te=he*me+57,be=te+W,Ae=se.slice(te,be);j===0||j===1&&(ve=ve.concat(Array.from(new Float32Array(Ae))))}return ve};(await Promise.all(t.map(P=>r(P)))).forEach(P=>{e=e.concat(P)}),e.sort((P,U)=>P-U);const n=e[0],s=e[e.length-1],a=Math.abs(n-s),u=200,d=a/u,h=[];let m=[...e];for(let P=0;P<u;P++){const U=n+d*P,j=U+d,H=m.findIndex(me=>me>j),ee=m.slice(0,H-1).length,Pe=ee/e.length*100,W={from:U,to:j,count:ee,percentage:Pe};h.push(W),m=m.slice(H)}const f=[...h].sort((P,U)=>P.percentage-U.percentage),$=f[0].percentage,x=f[f.length-1].percentage,k=Math.abs($-x);return h.map(P=>({...P,height:P.percentage/k*100}))},hd=(t,e)=>{const r=e.endsWith("lrc"),n=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&n},pd=[{extension:"lrc",minme:"application/octet-stream"}],fd={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:pd,is:hd,baseInfo:ld,getFrameSubset:cd,frameData:ud,registryHistogram:dd},Ia=Object.freeze(fd),md={LrcParser:Ia},Ha=Object.values(md),gd=(t,e)=>{const r=Ha.find(i=>i.is(t,e));if(r===void 0)throw new Ua(2,e,`No parser found for '${e}'.`);return r};Ha.map(t=>t.extensions);var vd=class Ba{constructor(e,r,i){g(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new Ba(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new zs(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const n=gd(i,this.thermalUrl);return this.pocessTheService(new gi(this.service,i,n,this.thermalUrl,this.visibleUrl))}catch(n){if(n instanceof Ua)return this.pocessTheService(zs.fromError(n));throw n}}pocessTheService(e){return e}},bd=class{constructor(t){g(this,"requestsByUrl",new Map);g(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new Zn(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=vd.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},yd=class extends dt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},wd=class extends dt{constructor(){super(...arguments);g(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},xd=class extends Ma{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},Va=class extends Di{constructor(e,r,i,n){super();g(this,"hash",Math.random());g(this,"minmax",new xd(this,void 0));g(this,"files",new wd(this,[]));g(this,"cursorPosition",new Bu(this,void 0));g(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=n}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},kd=class extends dt{constructor(){super(...arguments);g(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const n=new Va(this.parent,e,r,i);return this._map.set(e,n),this.value.push(n),this.value=[...this.value],n}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},_d=class extends dt{constructor(){super(...arguments);g(this,"_resolution",150);g(this,"buffer",new Map);g(this,"bufferPixelsCount",0);g(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,n,s,a)=>{let d=r.reduce((x,k)=>{const O=k.reduce((P,U)=>[...P,...U],[]);return[...x,...O]},[]).sort((x,k)=>x-k);const h=s/a;let m=i+h;const f=new Map;let $=0;for(;m!==!1;){const x=d.findIndex(P=>P>m),k=d.slice(0,x).length;f.set(m-h/2,k),$+=k,d=d.slice(x);const O=m+h;m=O<n?O:!1}return{result:f,resultCount:$}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(n=>n.files.value).reduce((n,s)=>(n=n.concat(s),n),[]).map(n=>n.service.buffer),i=await this.parent.pool.exec(Ia.registryHistogram,[r]);this.value=i}},$d=class extends dt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Sd=class extends Ma{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Pd=class extends Di{constructor(e,r,i){super();g(this,"hash",Math.random());g(this,"groups",new kd(this,[]));g(this,"opacity",new yd(this,1));g(this,"minmax",new Sd(this,void 0));g(this,"loading",new $d(this,!1));g(this,"range",new Vu(this,void 0));g(this,"histogram",new _d(this,[]));g(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,n])=>{const s=this.groups.addOrGetGroup(i),a=await Promise.all(n.map(u=>this.service.loadFile(u.thermalUrl,u.visibleUrl)));return{group:s,groupFiles:a}}));await Promise.all(r.map(async({group:i,groupFiles:n})=>await Promise.all(n.map(async a=>a instanceof gi?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),n=await this.service.loadFile(e.thermalUrl,e.visibleUrl);n instanceof gi&&await n.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Zn=class extends Di{constructor(e,r){super();g(this,"id");g(this,"service",new bd(this));g(this,"registries",{});g(this,"palette",new Xu(this,"jet"));g(this,"pool");this.pool=e||Hu.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Pd(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};let oi;const Cd=new Uint8Array(16);function Od(){if(!oi&&(oi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!oi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return oi(Cd)}const qe=[];for(let t=0;t<256;++t)qe.push((t+256).toString(16).slice(1));function Ed(t,e=0){return qe[t[e+0]]+qe[t[e+1]]+qe[t[e+2]]+qe[t[e+3]]+"-"+qe[t[e+4]]+qe[t[e+5]]+"-"+qe[t[e+6]]+qe[t[e+7]]+"-"+qe[t[e+8]]+qe[t[e+9]]+"-"+qe[t[e+10]]+qe[t[e+11]]+qe[t[e+12]]+qe[t[e+13]]+qe[t[e+14]]+qe[t[e+15]]}const Ad=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),qs={randomUUID:Ad};function Td(t,e,r){if(qs.randomUUID&&!e&&!t)return qs.randomUUID();t=t||{};const i=t.random||(t.rng||Od)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Ed(i)}const ts=class ts extends Ne{constructor(){super(...arguments),this.UUID=Td()}log(...e){console.log(this.tagName,this.UUID,...e)}};ts.shadowRootOptions={...Ne.shadowRootOptions,mode:"open"};let Fr=ts;var Rd=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,za=(t,e,r,i)=>{for(var n=i>1?void 0:i?Dd(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Rd(e,r,n),n};let Ur=class extends Fr{constructor(){super(...arguments),this.manager=new Zn,this.palette="jet"}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"){const i=Ur.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(Ri).includes(t)||(e=!1),e?t:"jet"}render(){return F`<slot></slot>`}};za([ne({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>Ur.sanitizeStringPalette(t),toAttribute:t=>t.toString()}})],Ur.prototype,"palette",2);Ur=za([Se("manager-provider")],Ur);const Md=new Zn,Ld="__internal_default_registry",Fd="__internal_default_group",Mn=t=>t.addOrGetRegistry(Ld),Ln=t=>t.groups.addOrGetGroup(Fd);class qa extends Fr{constructor(){super(),this.manager=this.getParentManagerOrDefault()}getParentManagerOrDefault(){let r=this.parentElement,i;for(;r&&!i;)if(console.warn("jedu skrz",this,r),"manager"in r)console.info("Našel jsem manažera",r.manager),i=r.manager,r=null;else if(r.parentElement!==null)r=r.parentElement;else if(r instanceof Ne){const n=r.getRootNode();console.info("našel jsem root",n),"host"in n?r=n.host:(n instanceof DocumentFragment,r=null)}else r=r.parentElement;return i||Md}}var Ud=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,Ya=(t,e,r,i)=>{for(var n=i>1?void 0:i?jd(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ud(e,r,n),n};let vi=class extends qa{get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this.id?this._registry=this.manager.addOrGetRegistry(this.id):this._registry=Mn(this.manager)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r)}render(){return F`<slot></slot>`}};Ya([ne({type:String,attribute:!0,reflect:!0})],vi.prototype,"id",2);vi=Ya([Se("registry-provider")],vi);class gt extends qa{get registry(){return this._registry}constructor(){super()}connectedCallback(){super.connectedCallback(),this._registry=this.getParentRegistry()}getParentRegistry(){let e=this.parentElement,r;if(e===null)return Mn(this.manager);for(;e&&r===void 0;)if(e instanceof vi&&(r=e.registry),e instanceof Ne)if(e.parentElement)e=e.parentElement;else{const i=e.getRootNode();"host"in i&&(e=i.host)}else e=e.parentElement;return r||Mn(this.manager)}}var Wd=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,Ga=(t,e,r,i)=>{for(var n=i>1?void 0:i?Nd(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Wd(e,r,n),n};let Fn=class extends gt{get group(){return this._group}connectedCallback(){super.connectedCallback(),this.id?this._group=this.registry.groups.addOrGetGroup(this.id):this._group=Ln(this.registry)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r)}render(){return F`<slot></slot>`}};Ga([ne({type:String,attribute:!0,reflect:!0})],Fn.prototype,"id",2);Fn=Ga([Se("group-provider")],Fn);class Xa extends gt{get group(){return this._group}constructor(){super()}connectedCallback(){super.connectedCallback(),this._group=this.getParentGroup()}getParentGroup(){let e=this.parentElement,r;if(!e)return Ln(this.registry);for(;e&&!r;)if("group"in e&&e.group instanceof Va&&(r=e.group,e=null),e)if(e.parentElement)e=e.parentElement;else if(e instanceof Ne){const i=e.getRootNode();"host"in i&&(e=i.host)}else e=e.parentElement;return r||Ln(this.registry)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qa=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ys=class{constructor(e,r,i,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const s=r;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Qa(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Id{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hd=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Gs extends Id{constructor(e,r,i){var n,s;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const u=a.composedPath()[0];a.context===this.context&&u!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,u,a.subscribe))},this.onProviderRequest=a=>{const u=a.composedPath()[0];if(a.context!==this.context||u===this.host)return;const d=new Set;for(const[h,{consumerHost:m}]of this.subscriptions)d.has(h)||(d.add(h),m.dispatchEvent(new Qa(this.context,h,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(s=(n=this.host).addController)==null||s.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Hd(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nt({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Gs(this,{context:t}))}),{get(){return e.get.call(this)},set(n){var s;return(s=i.get(this))==null||s.setValue(n),e.set.call(this,n)},init(n){var s;return(s=i.get(this))==null||s.setValue(n),n}};{e.constructor.addInitializer(a=>{i.set(a,new Gs(a,{context:t}))});const n=Object.getOwnPropertyDescriptor(e,r);let s;if(n===void 0){const a=new WeakMap;s={get(){return a.get(this)},set(u){i.get(this).setValue(u),a.set(this,u)},configurable:!0,enumerable:!0}}else{const a=n.set;s={...n,set(u){i.get(this).setValue(u),a==null||a.call(this,u)}}}return void Object.defineProperty(e,r,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new Ys(this,{context:t,callback:n=>{r.set.call(this,n)},subscribe:e})}):r.constructor.addInitializer(n=>{new Ys(n,{context:t,callback:s=>{n[i]=s},subscribe:e})})}}const Ka="playback",Za="duration",Ja="playing",eo="file",to="failure",ro="playbackSpeed",io="recording",no="mayStop";var Bd=Object.defineProperty,Vd=Object.getOwnPropertyDescriptor,Ze=(t,e,r,i)=>{for(var n=i>1?void 0:i?Vd(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Bd(e,r,n),n};let Ie=class extends Xa{constructor(){super(...arguments),this.loading=!1,this.playing=!1,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.callbacks={success:new Map,failure:new Map,loading:new Map}}async load(){return this.loading=!0,this.callbacks.loading.forEach(e=>e()),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof gi?(this.reader=e,await this.reader.createInstance(this.group).then(r=>(this.instance=r,this.file=r,this.callbacks.success.forEach(i=>i(r)),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r))):(this.error=e,this.callbacks.failure.forEach(r=>r(this.error)),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}bindCanvasOnMount(t){this.canvasElement=t}connectedCallback(){super.connectedCallback(),this.load().then(t=>{if(t instanceof Wa){this.duration={ms:t.timeline.duration,time:t.timeline.formatDuration(t.timeline.duration)};const e=()=>{this.playing=!0},r=()=>{this.playing=!1};t.timeline.callbacksPlay.add(this.UUID,e),t.timeline.callbacksPause.add(this.UUID,r),t.timeline.callbacksStop.add(this.UUID,r),t.timeline.callbacksEnd.add(this.UUID,r),this.currentFrame={ms:t.timeline.currentMs,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:t.timeline.currentStep.index,absolute:t.timeline.currentStep.absolute},t.timeline.callbacksChangeFrame.add(this.UUID,i=>{this.currentFrame={ms:i.relative,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:i.index,absolute:i.absolute}}),t.timeline.callbackdPlaybackSpeed.add(this.UUID,i=>this.playbackSpeed=i),t.recording.addListener(this.UUID,i=>this.recording=i),t.recording.callbackMayStop.add(this.UUID,i=>this.mayStop=i)}else this.failure=t})}play(){this.file&&this.file.timeline.play()}pause(){this.file&&this.file.timeline.pause()}stop(){this.file&&this.file.timeline.stop()}registerSuccessCallback(t,e){this.callbacks.success.set(t,e)}registerFailureCallback(t,e){this.callbacks.failure.set(t,e)}registerLoadingCallback(t,e){this.callbacks.loading.set(t,e)}clearCallbacks(){this.callbacks.success.clear(),this.callbacks.failure.clear(),this.callbacks.loading.clear()}render(){return F`<slot></slot>`}};Ze([J()],Ie.prototype,"reader",2);Ze([J()],Ie.prototype,"instance",2);Ze([J()],Ie.prototype,"loading",2);Ze([J()],Ie.prototype,"error",2);Ze([Nt({context:Ja}),ne({type:String,reflect:!0,attribute:!0})],Ie.prototype,"playing",2);Ze([Nt({context:Za}),J()],Ie.prototype,"duration",2);Ze([Nt({context:Ka}),J()],Ie.prototype,"currentFrame",2);Ze([Nt({context:eo}),J()],Ie.prototype,"file",2);Ze([Nt({context:to}),J()],Ie.prototype,"failure",2);Ze([Nt({context:ro}),J()],Ie.prototype,"playbackSpeed",2);Ze([Nt({context:io}),J()],Ie.prototype,"recording",2);Ze([Nt({context:no}),J()],Ie.prototype,"mayStop",2);Ze([ne({type:String,attribute:!0,reflect:!0})],Ie.prototype,"thermal",2);Ze([ne({type:String,attribute:!0,reflect:!0})],Ie.prototype,"visible",2);Ze([J()],Ie.prototype,"canvasElement",2);Ie=Ze([Se("file-provider")],Ie);var zd=Object.defineProperty,Ot=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&zd(e,r,n),n};class Xe extends Xa{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.playing=!1,this.recording=!1,this.mayStop=!0}connectedCallback(){if(super.connectedCallback(),this.parentFileProviderElement=this.getParentFile(),this.parentFileProviderElement)this.parentFileProviderElement.registerLoadingCallback(this.internalCallbackUUID,()=>{this.loading=!0}),this.parentFileProviderElement.registerSuccessCallback(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.registerFailureCallback(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.registerSuccessCallback(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.registerFailureCallback(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}getParentFile(){let e=this.parentElement,r;if(e){if(e instanceof Ie)return e;for(;e&&!r;)if(e instanceof Ie)r=e,e=null;else if(e instanceof Ne)if(e.parentElement)e=e.parentElement;else{const i=e.getRootNode();"host"in i&&(e=i.host)}else e=e.parentElement;return r}}}Ot([J()],Xe.prototype,"loading");Ot([It({context:Ja,subscribe:!0}),J()],Xe.prototype,"playing");Ot([It({context:Za,subscribe:!0}),J()],Xe.prototype,"duration");Ot([It({context:Ka,subscribe:!0}),J()],Xe.prototype,"currentFrame");Ot([It({context:eo,subscribe:!0}),J()],Xe.prototype,"file");Ot([It({context:to,subscribe:!0}),J()],Xe.prototype,"failure");Ot([It({context:ro,subscribe:!0}),J()],Xe.prototype,"playbackSpeed");Ot([It({context:io,subscribe:!0}),J()],Xe.prototype,"recording");Ot([It({context:no,subscribe:!0}),J()],Xe.prototype,"mayStop");var qd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Gd=(t,e,r,i)=>{for(var n=i>1?void 0:i?Yd(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&qd(e,r,n),n};let Un=class extends Xe{constructor(){super(...arguments),this.container=Ye()}onLoadingStart(){}onInstanceCreated(t){if(this.container.value!==void 0&&this.parentFileProviderElement!==void 0)t.mountToDom(this.container.value),this.parentFileProviderElement.bindCanvasOnMount(this);else throw this.log(this.parentFileProviderElement,this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,n;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return F`
            <div ${Ge(this.container)} class=${Or(r)} part="file-canvas-container">
            
                ${this.loading===!0?F`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?F`<div class="error-wrapper">
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
                        </div>`:K}
            
            </div>
        
        `}};Un.styles=He`
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
    `;Un=Gd([Se("file-canvas")],Un);var Xd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,so=(t,e,r,i)=>{for(var n=i>1?void 0:i?Qd(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Xd(e,r,n),n};let bi=class extends gt{connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.registry.palette.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.palette.removeListener(this.UUID)}onSelect(t){this.registry.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return F`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return F`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Ri).map(([t,e])=>F`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};bi.styles=He`

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

    `;so([ne({type:String,reflect:!0,attribute:!0})],bi.prototype,"value",2);bi=so([Se("registry-palette-dropdown")],bi);var Kd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,ao=(t,e,r,i)=>{for(var n=i>1?void 0:i?Zd(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Kd(e,r,n),n};let yi=class extends gt{connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const t=e=>{this.value!==e&&(this.value=e,this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}onInputChange(t){const e=parseFloat(t.target.value);this.value=e,this.registry.opacity.imposeOpacity(e)}updated(t){super.updated(t),t.has("value")&&parseFloat(t.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return F`
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
        `}};yi.styles=He`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;ao([ne({type:Number,reflect:!0,attribute:!0})],yi.prototype,"value",2);yi=ao([Se("registry-opacity-slider")],yi);var Jd=Object.defineProperty,eh=Object.getOwnPropertyDescriptor,th=(t,e,r,i)=>{for(var n=i>1?void 0:i?eh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Jd(e,r,n),n};let jn=class extends Xe{onLoadingStart(){}onInstanceCreated(t){}onFailure(t){}render(){return this.file?F`
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
        `:K}};jn.styles=He`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;jn=th([Se("file-share-button")],jn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wn extends Gn{constructor(e){if(super(e),this.it=K,e.type!==qn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===K||e==null)return this._t=void 0,this.it=e;if(e===Lt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Wn.directiveName="unsafeHTML",Wn.resultType=1;const ft=Yn(Wn);var rh=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,nh=(t,e,r,i)=>{for(var n=i>1?void 0:i?ih(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&rh(e,r,n),n};let Nn=class extends Xe{onLoadingStart(){}onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const n=e.toFixed(r),s=i!==void 0?n+" "+i:n;return this.renderRow(t,s)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?F`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${ft(this.renderRow("Thermal file name",this.file.fileName))}

                        ${ft(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?ft(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):K}

                        ${ft(this.renderRow("Time",Ku.human(this.file.timestamp)))}

                        ${ft(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${ft(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${ft(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${ft(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${ft(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${ft(this.renderRow("Type",this.file.service.parser.name))}
                    ${ft(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>F`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:K}};Nn.styles=He`

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
    
    `;Nn=nh([Se("file-info-button")],Nn);var sh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,oh=(t,e,r,i)=>{for(var n=i>1?void 0:i?ah(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&sh(e,r,n),n};let Xs=class extends gt{doAction(){this.registry.range.applyAuto()}render(){return F`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Xs=oh([Se("registry-range-auto-button")],Xs);var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,uh=(t,e,r,i)=>{for(var n=i>1?void 0:i?ch(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&lh(e,r,n),n};let Qs=class extends gt{doAction(){this.registry.range.applyMinmax()}render(){return F`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Qs=uh([Se("registry-range-full-button")],Qs);var dh=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,Li=(t,e,r,i)=>{for(var n=i>1?void 0:i?hh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&dh(e,r,n),n};let kt=class extends gt{constructor(){super(...arguments),this.ticksRef=Ye(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,n){const s=(t-e)*(n-i)/(r-e)+i;return this.clamp(s,i,n)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/kt.TICK_WIDTH)-2,n=100/i;for(let s=1;s<i;s++)r.push(n*s);r.push(100),this.ticks=r.map(s=>this.calculateOneTick(t,s)).filter(s=>s!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return F`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Ge(this.ticksRef)}>

                    ${this.ticks.map(t=>F`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(kt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};kt.TICK_WIDTH=40;kt.TICK_FIXED=2;kt.styles=He`

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


    `;Li([ne({type:String,reflect:!0})],kt.prototype,"placement",2);Li([J()],kt.prototype,"minmax",2);Li([J()],kt.prototype,"ticks",2);kt=Li([Se("registry-ticks-bar")],kt);var ph=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,Vr=(t,e,r,i)=>{for(var n=i>1?void 0:i?fh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&ph(e,r,n),n};let hr=class extends gt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return F`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return F`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Vr([J()],hr.prototype,"minmax",2);Vr([J()],hr.prototype,"range",2);Vr([J()],hr.prototype,"opacity",2);Vr([J()],hr.prototype,"palette",2);hr=Vr([Se("registry-log")],hr);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,c,v)=>c in o?t(o,c,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[c]=v,i=(o,c,v)=>(r(o,typeof c!="symbol"?c+"":c,v),v),n=(o,c)=>` ${c&&c.length>0?c.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,s=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",u="pointers-min-distance",d="pointers-max-distance",h="range-dragging",m="data",f="min",$="max",x="step",k="round",O="type",P="theme",U="rtl",j="btt",H="disabled",ue="keyboard-disabled",ee="mousewheel-disabled",Pe="slider-width",W="slider-height",me="slider-radius",se="slider-bg",de="slider-bg-hover",ve="slider-bg-fill",he="pointer-width",ge="pointer-height",te="pointer-radius",be="pointer-bg",Ae="pointer-bg-hover",Qe="pointer-bg-focus",Ve="pointer-shadow",vr="pointer-shadow-hover",Jt="pointer-shadow-focus",zr="pointer-border",qr="pointer-border-hover",ji="pointer-border-focus",Yr="animate-onclick",Wi="css-links",it="vertical",Et="horizontal",br=(o,c,v,p,T)=>{let V=c-o;return V===0?v:(p-v)*(T-o)/V+v},ht=o=>!isNaN(parseFloat(o))&&isFinite(o),Te=(o,c)=>ht(o)?Number(o):c,Gr=(o,c)=>c===0?0:Math.round(o/c)*c,Ni=(o,c=1/0)=>{if(c===1/0)return o;let v=e(10,c);return Math.round(o*v)/v},je=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Ii=(o,c)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:c}}))},Hi=(o,c)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:c}}))},Bi=(o,c)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:c}}))},Vi=(o,c)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:c}}))},zi=(o,c)=>{if(!c||c.length<=0)return;let v=c.map(T=>ht(T)?Te(T,T):T),p={values:v||[]};p.value=v[0],p.value0=v[0],p.value1=v[0];for(let T=1;T<v.length;T++)p[`value${T+1}`]=v[T];o.dispatchEvent(new CustomEvent("change",{detail:p}))},w=(o,c,v)=>{let p=0,T,V,Z,R,D=!1,re=(q,Oe,Be,We,Re,De)=>{let et=p;Be!==void 0&&q>Be&&(q=Be),Oe!==void 0&&q<Oe&&(q=Oe),p=q;let tt=p;return(We===it&&De||We===Et&&Re)&&(tt=100-tt),We===it?c.style.top=`${tt}%`:c.style.left=`${tt}%`,et!==p},le=q=>q===c||c.contains(q),N=(q,Oe,Be,We)=>{T=q,V=Oe,Z=Be,R=We},_e=q=>{D=q,c.classList.toggle("disabled",D),D?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},lt=(q,Oe)=>{Oe==null?c.removeAttribute(q):c.setAttribute(q,Oe)},Ke=q=>c.getAttribute(q),z=q=>{if(!D){switch(q.key){case"ArrowLeft":{q.preventDefault(),typeof T=="function"&&T(v);break}case"ArrowRight":{q.preventDefault(),typeof V=="function"&&V(v);break}case"ArrowUp":{q.preventDefault(),typeof Z=="function"&&Z(v);break}case"ArrowDown":{q.preventDefault(),typeof R=="function"&&R(v);break}}Vi(o,q)}},ie=()=>{D||Ii(o,c)};return c.className=`pointer pointer-${v}`,c.addEventListener("keydown",z),c.addEventListener("click",ie),{$pointer:c,get percent(){return p},get disabled(){return D},set disabled(q){_e(q)},updatePosition:re,isClicked:le,setCallbacks:N,setAttr:lt,getAttr:Ke,destroy:()=>{c.removeEventListener("keydown",z),c.removeEventListener("click",ie),c.remove()}}},C=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let c=o.split(","),v=[],p=!0;for(let T=0;T<c.length;T++){let V=c[T].trim();V!==""&&(v.push(V),ht(V)||(p=!1))}return p?v.map(T=>Number(T)):v},E=(o,c)=>c?c.findIndex(v=>v===o||v.toString().trim()===o.toString().trim()):-1,A=o=>({updatePosition:(c,v,p,T)=>{if(v.length<=0)return;let V=v.length===1,Z=v[0],R=v[v.length-1];c===it?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),V?o.style.height=`${Z}%`:o.style.height=`${Math.abs(Z-R)}%`,T?(o.style.bottom="0%",V?o.style.top="auto":o.style.top=`${Math.min(100-R,100-Z)}%`):(o.style.bottom="auto",V?o.style.top="0%":o.style.top=`${Math.min(Z,R)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),V?o.style.width=`${Z}%`:o.style.width=`${Math.abs(Z-R)}%`,p?(o.style.right="0%",V?o.style.left="auto":o.style.left=`${Math.min(100-R,100-Z)}%`):(o.style.right="auto",V?o.style.left="0%":o.style.left=`${Math.min(Z,R)}%`))}}),B="--animate-onclick",we="--width",G="--height",Ce="--panel-bg-border-radius",pe="--panel-bg",M="--panel-bg-hover",fe="--panel-bg-fill",y="--pointer-width",_="--pointer-height",X="--pointer-border-radius",ae="--pointer-bg",Fe="--pointer-bg-hover",ze="--pointer-bg-focus",vt="--pointer-shadow",nt="--pointer-shadow-hover",ot="--pointer-shadow-focus",At="--pointer-border",I="--pointer-border-hover",Q="--pointer-border-focus",S=(o,c,v)=>{let p=new Map;for(let T of o.attributes){let V=T.nodeName.trim().toLowerCase();if(!c.test(V))continue;let Z=V.replace(/\D/g,"").trim(),R=Z===""||Z==="0"||Z==="1"?0:Te(Z,0)-1,D=v&&typeof v=="function"?v(T.value):T.value;p.set(R,D)}return p},Y=o=>{if(!o)return null;let c=o.getAttribute(Wi);if(!c)return null;let v=c.split(";"),p=[];for(let T of v)T.trim()!==""&&p.push(T.trim());return p},xe=[[we,Pe,"sliderWidth",null],[G,W,"sliderHeight",null],[Ce,me,"sliderRadius",null],[pe,se,"sliderBg",null],[M,de,"sliderBgHover",null],[fe,ve,"sliderBgFill",null],[y,he,"pointer#Width",/^pointer([0-9]*)-width$/],[_,ge,"pointer#Height",/^pointer([0-9]*)-height$/],[X,te,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ae,be,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Fe,Ae,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[ze,Qe,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[vt,Ve,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[nt,vr,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[ot,Jt,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[At,zr,"pointer#Border",/^pointer([0-9]*)-border$/],[I,qr,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Q,ji,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ye=(o,c,v)=>{let p=null,T=[],V=new Map,Z=(z,ie=c)=>{let q=[...ie.classList];for(let Oe of q)Oe.startsWith(z)&&c.classList.remove(Oe)},R=()=>{Z("shape");let z=c.querySelectorAll(".pointer");for(let ie of z)Z("shape",ie)},D=z=>{p=z,Z("theme-"),typeof z=="string"&&c.classList.add(`theme-${z}`)},re=()=>{if(R(),!(T.length<=0)){c.classList.add("shape",`shape-${T[0]}`);for(let z=1;z<T.length;z++){let ie=T[z];if(!ie)continue;let q=c.querySelector(`.pointer-${z}`);!q||q.classList.add("shape",`shape-${ie}`)}}},le=(z,ie)=>{T[z]=ie,re()},N=()=>{R();let z=S(o,/^pointer([0-9]*)-shape$/);if(!(z.size<=0)){for(let ie of z){let q=ie[0];T[q]=ie[1]}re()}},_e=(z,ie)=>`${z}-${ie}`,lt=(z,ie,q)=>{let Oe=v[q];if(!Oe)return;let Be=q===0?c:Oe.$pointer;if(ie==null){V.has(_e(z,q))&&V.delete(_e(z,q)),Be.style.removeProperty(z);return}V.set(_e(z,q),ie),Be.style.setProperty(z,ie)},Ke=(z,ie)=>V.get(_e(z,ie));return(()=>{for(let z of xe){let[ie,q,Oe,Be]=z;if(Be){let Re=S(o,Be);for(let De of Re){let et=De[0],tt=De[1];lt(ie,tt,et)}}else{let Re=o.getAttribute(q);lt(ie,Re,0)}let We=[];if(Oe.indexOf("#")===-1)We.push([Oe,0]);else{We.push([Oe.replace("#",""),0]),We.push([Oe.replace("#","0"),0]),We.push([Oe.replace("#","1"),0]);for(let Re=1;Re<v.length;Re++)We.push([Oe.replace("#",(Re+1).toString()),Re])}for(let Re of We)try{let De=Re[0],et=Re[1];Object.prototype.hasOwnProperty.call(o,De)||Object.defineProperty(o,De,{get(){return Ke(ie,et)},set:tt=>{lt(ie,tt,et)}})}catch(De){console.error(De)}}D(o.getAttribute(P)),N()})(),{setStyle:lt,getStyle:Ke,get theme(){return p},set theme(z){D(z)},get pointerShapes(){return T},setPointerShape:le}},Ee="animate-on-click",oe="range-dragging",Je=(o,c,v,p)=>{let T=[],V=le=>{for(let N of T)N.update&&typeof N.update=="function"&&N.update(le)},Z=()=>{for(let le of T)le.destroy&&typeof le.destroy=="function"&&le.destroy()},R=(le,N)=>{for(let _e of T)_e.onAttrChange&&typeof _e.onAttrChange=="function"&&_e.onAttrChange(le,N)},D=le=>{if(le.gettersAndSetters){for(let N of le.gettersAndSetters)if(!(!N.name||!N.attributes))try{Object.prototype.hasOwnProperty.call(o,N.name)||Object.defineProperty(o,N.name,N.attributes)}catch(_e){console.error("defineSettersGetters error:",_e)}}},re=le=>{var N;if(!le.css)return;let _e=(N=o.shadowRoot)==null?void 0:N.querySelector("style");!_e||(_e.innerHTML+=le.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let le of window.tcRangeSliderPlugins){let N=le();T.push(N),N.init&&typeof N.init=="function"&&(N.init(o,c,v,p),D(N),re(N))}},update:V,onAttrChange:R,destroy:Z}},Ue=10,Xr=20,ho=(o,c)=>{let v=new Map,p=/^value([0-9]*)$/;for(let R of o.attributes){let D=R.nodeName.trim().toLowerCase();if(!p.test(D))continue;let re=D.replace("value","").trim(),le=re===""||re==="0"||re==="1"?0:Te(re,0)-1,N=ht(R.value)?Te(R.value,0):R.value;v.set(le,N)}let T=Math.max(...Array.from(v.keys())),V=[];V.push([w(o,c,0),v.get(0)]);let Z=c;for(let R=1;R<=T;R++){let D=c.cloneNode(!0);Z.after(D),Z=D,V.push([w(o,D,R),v.get(R)])}return V},rs=(o,c,v,p,T,V,Z)=>{try{Object.defineProperty(o,p,{configurable:!0,get(){if(!c)return;let R=c.pointers[v];if(!R)return;let D=c.getTextValue(R.percent);return ht(D)?Te(D,D):D},set:R=>{c.pointers[v]?c==null||c.setValue(R,v):c==null||c.addPointer(R)}}),Object.defineProperty(o,T,{configurable:!0,get(){var R,D;return(D=(R=c==null?void 0:c.pointers[v])==null?void 0:R.getAttr("aria-label"))!=null?D:void 0},set:R=>{!c||c.setAriaLabel(v,R)}}),Object.defineProperty(o,V,{configurable:!0,get(){var R,D;return(D=(R=c==null?void 0:c.styles)==null?void 0:R.pointerShapes[v])!=null?D:null},set:R=>{!c||!c.styles||c.styles.setPointerShape(v,R)}}),Object.defineProperty(o,Z,{configurable:!0,get(){var R;return(R=c==null?void 0:c.pointers[v].disabled)!=null?R:!1},set:R=>{if(!c)return;let D=c==null?void 0:c.pointers[v];!D||(D.disabled=R)}})}catch(R){console.error(R)}},po=(o,c)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let p=2;p<Ue;p++)v.push([`value${p}`,`ariaLabel${p}`,`pointer${p}Shape`,`pointer${p}Disabled`,p-1]);for(let p of v)rs(o,c,p[4],p[0],p[1],p[2],p[3])},is=(o,c,v)=>{var p;let T=(p=v.shadowRoot)==null?void 0:p.querySelector(".container");if(T)for(let V of o)c?T.prepend(V.$pointer):T.append(V.$pointer)},fo=(o,c)=>{if(!(!c||o.length<=1)){for(let v of o)v.$pointer.style.zIndex=Xr.toString();c.$pointer.style.zIndex=(Xr*2).toString()}},qi=0,yr=100,er=2,ns="0.3s",mo=(o,c,v)=>{let p=v.map(l=>l[0]),T=null,V=null,Z=null,R=null,D=qi,re=yr,le,N,_e=Et,lt=er,Ke=!1,z=!1,ie=!1,q=0,Oe=1/0,Be=!1,We,Re,De=!1,et=!1,tt=!1,Tt=ns,ss=[],as=l=>{De||(l.preventDefault&&l.preventDefault(),Ht(l),window.addEventListener("mousemove",Ht),window.addEventListener("mouseup",Qr),Hi(o,l))},Qr=l=>{De||(We=void 0,Re=void 0,window.removeEventListener("mousemove",Ht),window.removeEventListener("mouseup",Qr),Tt&&c.classList.add(Ee),Bi(o,l))},bo=(l,b)=>{if(p.length<=0)return;if(p.length===1)return p[0].isClicked(l)&&Tt&&c.classList.remove(Ee),p[0];let L=wo(l);if(Be){let ke=b,pt=Zr(ke);pt!==void 0&&(ke=Gr(ke,pt)),L?(We=ke,Re=0,Tt&&c.classList.remove(Ee)):We!==void 0&&(Re=ke-We,We=ke)}if(!yo(l)&&!L){for(let ke of p)if(!(!ke.isClicked(l)||ke.disabled))return Tt&&c.classList.remove(Ee),ke;for(let ke of p)if(T===ke)return ke}let $e=1/0,Me=null;for(let ke of p){if(ke.disabled)continue;let pt=Math.abs(b-ke.percent);pt<$e&&($e=pt,Me=ke)}return Me},os=()=>p.findIndex(l=>T===l&&!l.disabled),Ht=l=>{let b;if(_e===it){let{height:$e,top:Me}=c.getBoundingClientRect(),ke=l.type.indexOf("mouse")!==-1?l.clientY:l.touches[0].clientY;b=Math.min(Math.max(0,ke-Me),$e)*100/$e}else{let{width:$e,left:Me}=c.getBoundingClientRect(),ke=l.type.indexOf("mouse")!==-1?l.clientX:l.touches[0].clientX;b=Math.min(Math.max(0,ke-Me),$e)*100/$e}if((Ke||z)&&(b=100-b),T=bo(l.target,b),T&&fo(p,T),Be&&p.length>1&&Re!==void 0){let $e=p[0],Me=p[p.length-1],ke=$e.percent+Re<0,pt=Me.percent+Re>100;if(ke||pt)return;for(let ai=0;ai<p.length;ai++)rt(ai,p[ai].percent+Re);return}let L=os();L!==-1&&(rt(L,b),T==null||T.$pointer.focus())},Kr=l=>{if(De||document.activeElement!==o||T!=null&&T.disabled)return;l.stopPropagation(),l.preventDefault();let b=l.deltaY<0,L=Ke||z,$e=b?!L:L,Me=os();Me!==-1&&($e?wr(Me,p[Me].percent):xr(Me,p[Me].percent))},ls=l=>{De||et||(_e===it?z?rt(l,100):rt(l,0):Ke?xr(l,p[l].percent):wr(l,p[l].percent))},cs=l=>{De||et||(_e===it?z?rt(l,0):rt(l,100):Ke?wr(l,p[l].percent):xr(l,p[l].percent))},us=l=>{De||et||(_e===it?z?xr(l,p[l].percent):wr(l,p[l].percent):Ke?rt(l,100):rt(l,0))},ds=l=>{De||et||(_e===it?z?wr(l,p[l].percent):xr(l,p[l].percent):Ke?rt(l,0):rt(l,100))},yo=l=>l.classList.contains("panel"),wo=l=>l.classList.contains("panel-fill"),wr=(l,b)=>{if(b===void 0)return;let L=Zr(b);L==null&&(L=1),b-=L,b<0&&(b=0),rt(l,b)},xr=(l,b)=>{if(b===void 0)return;let L=Zr(b);L==null&&(L=1),b+=L,b>100&&(b=100),rt(l,b)},Bt=()=>{!R||R.update({percents:hs(),values:ps(),$pointers:fs(),min:ms(),max:gs(),data:Xi(),step:Gi(),round:Ki(),type:Qi(),textMin:Jr(),textMax:ei(),rightToLeft:en(),bottomToTop:tn(),pointersOverlap:an(),pointersMinDistance:Zi(),pointersMaxDistance:Ji(),rangeDragging:on(),disabled:rn(),keyboardDisabled:nn(),mousewheelDisabled:sn()})},xo=()=>{Bt()},ko=l=>{if(!(ie||p.length<=1||re===D))if(l===0){let b=Oe*100/(re-D);return Math.max(0,p[l+1].percent-b)}else{let b=q*100/(re-D);return Math.min(p[l-1].percent+b,100)}},_o=l=>{if(!(ie||p.length<=1||re===D))if(l===p.length-1){let b=Oe*100/(re-D);return Math.min(p[l-1].percent+b,100)}else{let b=q*100/(re-D);return Math.max(0,p[l+1].percent-b)}},Zr=l=>{let b;if(typeof le=="function"){let L=br(0,100,D,re,l);b=le(L,l)}else b=le;if(ht(b)){let L=re-D;return b=L===0?0:b*100/L,b}},tr=l=>{if(l===void 0)return;let b=br(0,100,D,re,l);return N!==void 0?N[Math.round(b)]:Ni(b,lt)},Jr=()=>N!==void 0?N[D]:D,ei=()=>N!==void 0?N[re]:re,Gi=()=>le,$o=l=>{var b;return l<=0||ie?Jr():(b=tr(p[l-1].percent))!=null?b:""},So=l=>{var b;return p.length<=1||l>=p.length-1||ie?ei():(b=tr(p[l+1].percent))!=null?b:""},hs=()=>p.map(l=>l.percent),ps=()=>p.map(l=>tr(l.percent)),fs=()=>p.map(l=>l.$pointer),ms=()=>D,gs=()=>re,Xi=()=>N,Qi=()=>_e,Ki=()=>lt,Zi=()=>q,Ji=()=>Oe,Po=l=>ss[l],en=()=>Ke,tn=()=>z,rn=()=>De,nn=()=>et,sn=()=>tt,an=()=>ie,on=()=>Be,rt=(l,b)=>{if(b===void 0)return;let L=Zr(b);L!==void 0&&(b=Gr(b,L));let $e=p[l];if(!$e)return;let Me=$e.updatePosition(b,ko(l),_o(l),_e,Ke,z);V==null||V.updatePosition(_e,p.map(ke=>ke.percent),Ke,z),Bt();for(let ke of p){let pt=tr(ke.percent);pt!==void 0&&(ke.setAttr("aria-valuenow",pt.toString()),ke.setAttr("aria-valuetext",pt.toString()))}Oo(),Me&&zi(o,p.map(ke=>tr(ke.percent)))},bt=()=>{for(let l=0;l<p.length;l++)rt(l,p[l].percent)},Co=(l,b)=>{D=N!==void 0?0:Te(l,qi),re=N!==void 0?N.length-1:Te(b,yr),ti(D),ri(re)},Oo=()=>{var l,b;for(let L=0;L<p.length;L++){let $e=p[L];$e.setAttr("aria-valuemin",((l=$o(L))!=null?l:"").toString()),$e.setAttr("aria-valuemax",((b=So(L))!=null?b:"").toString())}},ti=l=>{D=Te(l,qi),D>re&&(re=D+yr),bt()},ri=l=>{re=Te(l,yr),re<D&&(re=D+yr),bt()},vs=l=>{ie=!0;for(let b=0;b<l.length;b++)ii(l[b],b);ie=!1;for(let b=0;b<l.length;b++)ii(l[b],b)},ii=(l,b)=>{let L;N!==void 0?(L=l==null?0:E(l,N),L===-1&&(L=0)):(L=Te(l,D),L<D&&(L=D),L>re&&(L=re));let $e=br(D,re,0,100,L);rt(b,$e)},ni=l=>{if(l==null){le=void 0;return}if(typeof l=="function"){le=l,bt();return}if(ht(l)){le=Te(l,1);let b=Math.abs(re-D);le>b&&(le=void 0),bt();return}le=void 0},ln=l=>{ie=l,bt()},cn=l=>{(!ht(l)||l<0)&&(l=0),q=l},un=l=>{(!ht(l)||l<0)&&(l=1/0),Oe=l},dn=l=>{De=l,c.classList.toggle("disabled",De),De?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},bs=l=>{et=l},ys=l=>{tt=l,tt?document.removeEventListener("wheel",Kr):document.addEventListener("wheel",Kr,{passive:!1})},hn=l=>{if(l==null){N=void 0;return}if(N=C(l),N===void 0||N.length<=0){N=void 0;return}ti(0),ri(N.length-1),le===void 0&&ni(1)},pn=l=>{var b;typeof l=="string"?_e=l.trim().toLowerCase()===it?it:Et:_e=Et;let L=(b=o.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!L)return;L.className=`range-slider-box type-${_e}`,bt();let $e=_e===it?"vertical":"horizontal";for(let Me of p)Me.setAttr("aria-orientation",$e)},fn=l=>{Ke=l,p.length>1&&is(p,Ke,o),bt(),Bt()},mn=l=>{z=l,p.length>1&&is(p,z,o),bt(),Bt()},gn=l=>{lt=Te(l,er),lt<0&&(lt=er),Bt()},ws=l=>{l==null||l.toString().trim().toLowerCase()==="false"?(Tt=void 0,c.style.removeProperty(B),c.classList.remove(Ee)):(Tt=l.toString(),c.style.setProperty(B,Tt),c.classList.add(Ee))},xs=(l,b)=>{let L=p[l];!L||(L.setAttr("aria-label",b),ss[l]=b)},si=l=>{if(We=void 0,p.length<=1){Be=!1,c.classList.remove(oe);return}Be=l,c.classList.toggle(oe,Be)},Eo=()=>{dn(je(o.getAttribute(H))),et=je(o.getAttribute(ue)),tt=je(o.getAttribute(ee));let l=S(o,/^pointer([0-9]*)-disabled$/,b=>je(b));for(let b of l){let L=b[0];!p[L]||(p[L].disabled=b[1])}},Ao=()=>{let l=S(o,/^aria-label([0-9]*)$/);for(let b of l){let L=b[0];xs(L,b[1])}},To=l=>{let b=p.length,L=p[b-1].$pointer,$e=L.cloneNode(!0);L.after($e);let Me=w(o,$e,b);return Me.setCallbacks(ls,cs,us,ds),p.push(Me),ii(l,b),bt(),Bt(),b},Ro=()=>{let l=p.length,b=p[l-1];return b?(b.destroy(),p.pop(),p.length<=1&&si(!1),bt(),Bt(),l-1):-1};return(()=>{var l,b;for(let $e of p)$e.setCallbacks(ls,cs,us,ds);let L=(l=o.shadowRoot)==null?void 0:l.querySelector(".panel-fill");L&&(V=A(L)),pn(o.getAttribute(O)),fn(je(o.getAttribute(U))),mn(je(o.getAttribute(j))),Co(o.getAttribute(f),o.getAttribute($)),ni(o.getAttribute(x)),hn(o.getAttribute(m)),vs(v.map($e=>$e[1])),ln(je(o.getAttribute(a))),cn(Te(o.getAttribute(u),0)),un(Te(o.getAttribute(d),1/0)),si(je(o.getAttribute(h))),gn(Te(o.getAttribute(k),er)),Eo(),Ao(),Z=ye(o,c,p),ws((b=o.getAttribute(Yr))!=null?b:ns),c.addEventListener("mousedown",as),c.addEventListener("mouseup",Qr),c.addEventListener("touchmove",Ht),c.addEventListener("touchstart",Ht),tt||document.addEventListener("wheel",Kr,{passive:!1}),R=Je(o,xo,{setValues:vs,setMin:ti,setMax:ri,setStep:ni,setPointersOverlap:ln,setPointersMinDistance:cn,setPointersMaxDistance:un,setDisabled:dn,setType:pn,setRightToLeft:fn,setBottomToTop:mn,setRound:gn,setKeyboardDisabled:bs,setMousewheelDisabled:ys,setRangeDragging:si,setData:hn},{getPercents:hs,getValues:ps,getPointerElements:fs,getMin:ms,getMax:gs,getStep:Gi,getData:Xi,getType:Qi,getRound:Ki,getTextMin:Jr,getTextMax:ei,isRightToLeft:en,isBottomToTop:tn,isDisabled:rn,isKeyboardDisabled:nn,isMousewheelDisabled:sn,isPointersOverlap:an,isRangeDraggingEnabled:on,getPointersMinDistance:Zi,getPointersMaxDistance:Ji}),R.init()})(),{get pointers(){return p},get styles(){return Z},get pluginsManager(){return R},get min(){return Jr()},get max(){return ei()},get step(){return Gi()},get pointersOverlap(){return an()},set pointersOverlap(l){ln(l)},get pointersMinDistance(){return Zi()},set pointersMinDistance(l){cn(l)},get pointersMaxDistance(){return Ji()},set pointersMaxDistance(l){un(l)},get disabled(){return rn()},set disabled(l){dn(l)},get data(){return Xi()},get type(){return Qi()},set type(l){pn(l)},get rightToLeft(){return en()},set rightToLeft(l){fn(l)},get bottomToTop(){return tn()},set bottomToTop(l){mn(l)},get round(){return Ki()},set round(l){gn(l)},get animateOnClick(){return Tt},set animateOnClick(l){ws(l)},get keyboardDisabled(){return nn()},set keyboardDisabled(l){bs(l)},get mousewheelDisabled(){return sn()},set mousewheelDisabled(l){ys(l)},get rangeDragging(){return on()},set rangeDragging(l){si(l)},setMin:ti,setMax:ri,setValue:ii,setStep:ni,setData:hn,getTextValue:tr,setAriaLabel:xs,getAriaLabel:Po,addPointer:To,removePointer:Ro,destroy:()=>{c.removeEventListener("mousedown",as),c.removeEventListener("mouseup",Qr),c.removeEventListener("touchmove",Ht),c.removeEventListener("touchstart",Ht),document.removeEventListener("wheel",Kr);for(let l of p)l.destroy();R==null||R.destroy()}}},go=(o,c,v)=>{let p=xe.find(([R,D,re,le])=>D.replace("#","")===c.replace(/\d+/g,""));if(p&&o.styles){let[R,D,re,le]=p,N=c.replace(/\D/g,"").trim(),_e=N===""||N==="0"||N==="1"?0:Te(N,0)-1;o.styles.setStyle(R,v,_e);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(c,v),c){case f:{o.setMin(v);break}case $:{o.setMax(v);break}case x:{o.setStep(v);break}case a:{o.pointersOverlap=je(v);break}case u:{o.pointersMinDistance=Te(v,0);break}case h:{o.rangeDragging=je(v);break}case d:{o.pointersMaxDistance=Te(v,1/0);break}case H:{o.disabled=je(v);break}case ue:{o.keyboardDisabled=je(v);break}case ee:{o.mousewheelDisabled=je(v);break}case m:{o.setData(v);break}case O:{o.type=v;break}case U:{o.rightToLeft=je(v);break}case j:{o.bottomToTop=je(v);break}case k:{o.round=Te(v,er);break}case P:{o.styles&&(o.styles.theme=v);break}case Yr:{o.animateOnClick=v;break}}let T=null;if(/^value([0-9]*)$/.test(c)&&(T="value"),/^pointer([0-9]*)-disabled$/.test(c)&&(T="pointer-disabled"),/^aria-label([0-9]*)$/.test(c)&&(T="aria-label"),/^pointer([0-9]*)-shape$/.test(c)&&(T="pointer-shape"),!T)return;let V=c.replace(/\D/g,"").trim(),Z=V===""||V==="0"||V==="1"?0:Te(V,0)-1;switch(T){case"value":{o.setValue(v,Z);break}case"pointer-disabled":{let R=o==null?void 0:o.pointers[Z];if(!R)return;R.disabled=je(v);break}case"aria-label":{o.setAriaLabel(Z,v);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(Z,v);break}}},vo=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.disabled)!=null?c:!1}set data(o){var c;(c=this.slider)==null||c.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var c;(c=this.slider)==null||c.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var c;(c=this.slider)==null||c.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,c;return(c=(o=this.slider)==null?void 0:o.round)!=null?c:er}set type(o){!this.slider||(this.slider.type=o??Et)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Et}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?c:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?c:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?c:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,c,v;return(v=(c=(o=this.slider)==null?void 0:o.styles)==null?void 0:c.theme)!=null?v:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,c;return(c=(o=this.slider)==null?void 0:o.rightToLeft)!=null?c:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,c;return(c=(o=this.slider)==null?void 0:o.bottomToTop)!=null?c:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?c:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?c:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,c;return(c=(o=this.slider)==null?void 0:o.rangeDragging)!=null?c:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=je(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var c,v;if(!this.slider)return;let p=(v=(c=this.slider)==null?void 0:c.addPointer(o))!=null?v:0;rs(this,this.slider,p,`value${p+1}`,`ariaLabel${p+1}`,`pointerShape${p+1}`,`pointer${p+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let c=document.createElement("style");c.textContent=o,this.shadowRoot.appendChild(c)}connectedCallback(){var o,c;if(!this.shadowRoot)return;this._externalCSSList=Y(this),this.shadowRoot.innerHTML=n(s,this._externalCSSList);let v=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!v)return;let p=(c=this.shadowRoot)==null?void 0:c.getElementById("range-slider");if(!p)return;let T=ho(this,v);this.slider=mo(this,p,T),po(this,this.slider),this._observer=new MutationObserver(V=>{V.forEach(Z=>{var R;if(!this.slider||Z.type!=="attributes")return;let D=Z.attributeName;!D||go(this.slider,D,(R=this.getAttribute(D))!=null?R:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Yi=vo;window.tcRangeSlider=Yi,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Yi),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Yi{})})();(()=>{var t=(u,d,h,m,f)=>{let $=d-u;return $===0?h:(m-h)*(f-u)/$+h},e=u=>!isNaN(parseFloat(u))&&isFinite(u),r=(u,d)=>e(u)?Number(u):d,i=u=>u==null?!1:typeof u=="boolean"?u:u.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var n=11,s=11,a=()=>{let u=null,d=null,h=null,m=null,f=null,$=!1,x=n,k=s,O=()=>{var W;let me=(W=u==null?void 0:u.shadowRoot)==null?void 0:W.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),h.append(m),f=document.createElement("div"),f.classList.add("mark-values"),h.append(f),me.append(h)},P=()=>{!d||!h||h.classList.toggle("is-reversed",d.isRightToLeft()||d.isBottomToTop())},U=()=>{var W;if(!h||!d)return;let me=d.getMin(),se=d.getMax(),de=d.getType()==="vertical",ve=d.isRightToLeft()||d.isBottomToTop();for(let ge=0;ge<x;ge++){let te=document.createElement("div");te.classList.add("mark",`mark-${ge}`);let be=x===0?0:ge*100/(x-1);de?ve?te.style.top=`${100-be}%`:te.style.top=`${be}%`:ve?te.style.left=`${100-be}%`:te.style.left=`${be}%`,m==null||m.append(te)}let he=d.getData();for(let ge=0;ge<k;ge++){let te=document.createElement("div");te.classList.add("mark-value",`mark-value-${ge}`);let be=k===0?0:ge*100/(k-1),Ae=t(0,k-1,me,se,ge);te.textContent=(he?(W=he[Math.round(Ae)])!=null?W:"":Ae).toString(),de?ve?te.style.top=`${100-be}%`:te.style.top=`${be}%`:ve?te.style.left=`${100-be}%`:te.style.left=`${be}%`,f==null||f.append(te)}},j=(W,me)=>{Pe(),x=W,k=me,x<=0&&(x=n),k<=0&&(k=s),O(),U(),P()},H=W=>{$=W,$?(O(),U(),P()):Pe()},ue=W=>{!h||h.style.setProperty("--marks-color",W)},ee=W=>{!h||h.style.setProperty("--values-color",W)},Pe=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(W,me,se,de)=>{var ve,he;d=de,u=W,$=i(u.getAttribute("marks")),$&&(j(r(u.getAttribute("marks-count"),n),r(u.getAttribute("marks-values-count"),s)),ue((ve=u.getAttribute("marks-color"))!=null?ve:"#cbd5e1"),ee((he=u.getAttribute("marks-values-color"))!=null?he:"#475569"))},onAttrChange:(W,me)=>{W==="marks"&&H(i(me)),W==="marks-count"&&j(r(me,n),k),W==="marks-values-count"&&j(x,r(me,s)),W==="marks-color"&&ue(me),W==="marks-values-color"&&ee(me)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return $??!1},set:W=>{H(i(W))}}},{name:"marksCount",attributes:{get(){return x??n},set:W=>{j(r(W,n),k)}}},{name:"marksValuesCount",attributes:{get(){return x??n},set:W=>{j(x,r(W,s))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:W=>{ue(W)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:W=>{ee(W)}}}],destroy:Pe,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var mh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,_t=(t,e,r,i)=>{for(var n=i>1?void 0:i?gh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&mh(e,r,n),n};let ct=class extends gt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Ye(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.UUID,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.UUID,t=>{t&&(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.setFixedRange({from:t.from,to:t.to})}firstUpdated(t){super.firstUpdated(t),this.from&&this.to&&this.registry.range.setFixedRange({from:this.from,to:this.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const n=r.detail;this.from=n.value1,this.to=n.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?F`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:F`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Ge(this.sliderRef)}
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

        `}};ct.styles=He`

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
    
    `;_t([ne({type:Number,reflect:!1})],ct.prototype,"min",2);_t([ne({type:Number,reflect:!1})],ct.prototype,"max",2);_t([ne({type:Number,reflect:!0})],ct.prototype,"from",2);_t([ne({type:Number,reflect:!0})],ct.prototype,"to",2);_t([J()],ct.prototype,"hasFixedFrom",2);_t([J()],ct.prototype,"hasFixedTo",2);_t([J()],ct.prototype,"palette",2);_t([J()],ct.prototype,"sliderRef",2);_t([J()],ct.prototype,"initialised",2);ct=_t([Se("registry-range-slider")],ct);var vh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,yh=(t,e,r,i)=>{for(var n=i>1?void 0:i?bh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&vh(e,r,n),n};let In=class extends Xe{onLoadingStart(){}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?K:F`

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

                    ${this.file.timeline.isSequence?F`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:K}
            
            </thermal-dropdown>

        
        `}};In.styles=He`

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
    
    `;In=yh([Se("file-download-dropdown")],In);var wh=Object.defineProperty,xh=Object.getOwnPropertyDescriptor,Fi=(t,e,r,i)=>{for(var n=i>1?void 0:i?xh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&wh(e,r,n),n};let pr=class extends gt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return F`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":K}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>F`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():F`
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
        `}};pr.styles=He`

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


    `;Fi([J()],pr.prototype,"histogram",2);Fi([ne({type:Boolean,reflect:!0})],pr.prototype,"interactive",2);Fi([ne({type:String,reflect:!0})],pr.prototype,"height",2);pr=Fi([Se("registry-histogram")],pr);var kh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Jn=(t,e,r,i)=>{for(var n=i>1?void 0:i?_h(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&kh(e,r,n),n};let Kt=class extends Xe{constructor(){super(...arguments),this.timelineRef=Ye(),this.barRef=Ye(),this.containerRef=Ye(),this.collapsed=!1,this.highlights=[]}onLoadingStart(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<Kt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}recieveHighlights(t){this.highlights=t}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.parentFileProviderElement)==null||t.stop():(e=this.parentFileProviderElement)==null||e.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}render(){var s,a,u;const t=this.file;if(t===void 0)return K;if(t.duration===0)return K;if(this.parentFileProviderElement===void 0)return K;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},n={item:!0,timeline:!0,...r};return F`
            <div class="${Or(e)}" ${Ge(this.containerRef)}>


                ${t!==void 0?F`
                        <div class="container">

                            <div class="${Or(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?F`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:F`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(s=this.currentFrame)==null?void 0:s.time}
                            </div>

                            <div class="${Or(n)}" @click=${this.handleBarClick.bind(this)} ${Ge(this.timelineRef)}>
                                <div class="timeline-bar">
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Ge(this.barRef)}></div>
                                </div>
                                <div class="timeline-marks">
                                    ${this.highlights.length>0?this.highlights.map(d=>{const h=d.fromMs/t.duration*100,m=(d.toMs-d.fromMs)/t.duration*100;return F`
                                        <div class="mark" style="left: ${h}%; width: ${m}%"></div>
                                    `}):K}
                                </div>
                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:K}

            
            
            </div>

            ${this.currentFrame!==void 0?F`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${Lr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${Lr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(u=this.file)==null?void 0:u.frameCount}</span>
                        </div>
                    </div>`:K}

          `}};Kt.collapseWidth=500;Kt.styles=He`
    
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
    
    `;Jn([J()],Kt.prototype,"collapsed",2);Jn([J()],Kt.prototype,"highlights",2);Kt=Jn([Se("file-timeline")],Kt);var $h=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,oo=(t,e,r,i)=>{for(var n=i>1?void 0:i?Sh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&$h(e,r,n),n};let wi=class extends Xe{constructor(){super(...arguments),this.enabled="on"}onLoadingStart(){}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?K:F`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(ja).map(([t])=>F`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof Ct&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};wi.styles=He`

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
    
    `;oo([ne({type:String,reflect:!0})],wi.prototype,"enabled",2);wi=oo([Se("file-playback-speed-dropdown")],wi);var Ph=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,lo=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ch(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ph(e,r,n),n};let xi=class extends gt{connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.registry.palette.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.palette.removeListener(this.UUID)}onSelect(t){this.registry.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return F`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return F`
            <div class="container">
                ${Object.entries(Ri).map(([t,e])=>F`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};xi.styles=He`

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

    `;lo([ne({type:String,reflect:!0,attribute:!0})],xi.prototype,"value",2);xi=lo([Se("registry-palette-buttons")],xi);var Oh=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,co=(t,e,r,i)=>{for(var n=i>1?void 0:i?Eh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Oh(e,r,n),n};let Hn=class extends Xe{onLoadingStart(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback()}onInstanceCreated(t){}onFailure(t){}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.log(t,e,r)}willUpdate(t){super.willUpdate(t)}render(){return this.file===void 0&&this.failure===void 0?this.renderLoading():this.file!==void 0?this.renderSuccess():this.renderFailure()}renderLoading(){return F`<div>Načítám</div>`}renderSuccess(){var t;return F`<div>${(t=this.file)==null?void 0:t.fileName}</div>`}renderFailure(){var t;return F`<div>${(t=this.failure)==null?void 0:t.message}</div>`}};co([ne({type:String,attribute:!0,reflect:!0})],Hn.prototype,"uuid",2);Hn=co([Se("test-component")],Hn);var Ah=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Ui=(t,e,r,i)=>{for(var n=i>1?void 0:i?Th(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ah(e,r,n),n};let fr=class extends Xe{constructor(){super(...arguments),this.speed=1}onLoadingStart(){}onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return F`
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
    `}};fr.styles=He`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }
  
  `;Ui([ne({type:Number})],fr.prototype,"from",2);Ui([ne({type:Number})],fr.prototype,"to",2);Ui([ne({type:Number})],fr.prototype,"speed",2);fr=Ui([Se("file-app")],fr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn=t=>t??K;var Rh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Zt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Dh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Rh(e,r,n),n};let jt=class extends Fr{constructor(){super(...arguments),this.palette="jet",this.speed=1,this.url=""}render(){return this.url===""?K:F`

    <manager-provider id="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider id="registry_${this.UUID}">

        <group-provider id="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${Sn(this.from)} to=${Sn(this.to)} speed=${Sn(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Zt([ne({type:String,reflect:!0})],jt.prototype,"palette",2);Zt([ne({type:Number})],jt.prototype,"from",2);Zt([ne({type:Number})],jt.prototype,"to",2);Zt([ne({type:Number,reflect:!0})],jt.prototype,"speed",2);Zt([ne({type:Number,reflect:!0})],jt.prototype,"time",2);Zt([ne({type:String,reflect:!0})],jt.prototype,"url",2);jt=Zt([Se("thermal-file-app")],jt);const Pn=window.matchMedia("(prefers-color-scheme: dark)"),es="thermal-dark-mode",Ks=()=>{document.body.classList.add(es)},Mh=()=>{document.body.classList.remove(es)},Lh=()=>{Pn.matches&&Ks();const t=e=>{e.matches?Ks():Mh()};Pn.addEventListener("change",t),Pn.addListener(t)},Fh=ia.version.toString().replaceAll(".","-"),uo=t=>`thermal__${t}__${Fh}`,Uh=t=>document.getElementById(uo(t))!==null,Zs=(t,e)=>{if(!Uh(t)){const r=document.createElement("style");r.setAttribute("id",uo(t)),r.innerHTML=e,document.head.appendChild(r)}},jh=()=>{Zs("rootVariables",`

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


            
        
        `),Zs("darkModeOverrides",`
        
            body.${es} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${ea}
    Author: ${ra}
    Repository: ${ta.url}
    `);Lh();jh();document.addEventListener("DOMContentLoaded",()=>{});
