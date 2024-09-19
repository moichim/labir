var fl=Object.defineProperty;var vl=(t,e,r)=>e in t?fl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var h=(t,e,r)=>(vl(t,typeof e!="symbol"?e+"":e,r),r);var Ha,On,Fe,at;const Ws="1.2.35",bl="Jan J\xE1chim <jachim5@gmail.com>";/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const $i=globalThis,zs=$i.ShadowRoot&&($i.ShadyCSS===void 0||$i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ys=Symbol(),so=new WeakMap;let no=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Ys)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(zs&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=so.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&so.set(e,t))}return t}toString(){return this.cssText}};const yl=t=>new no(typeof t=="string"?t:t+"",void 0,Ys),Ie=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new no(r,t,Ys)},Al=(t,e)=>{if(zs)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=$i.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},oo=zs?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return yl(r)})(t):t;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{is:wl,defineProperty:xl,getOwnPropertyDescriptor:kl,getOwnPropertyNames:Cl,getOwnPropertySymbols:El,getPrototypeOf:Sl}=Object,Wt=globalThis,ao=Wt.trustedTypes,Il=ao?ao.emptyScript:"",Gs=Wt.reactiveElementPolyfillSupport,Ur=(t,e)=>t,Ri={toAttribute(t,e){switch(e){case Boolean:t=t?Il:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Vs=(t,e)=>!wl(t,e),lo={attribute:!0,type:String,converter:Ri,reflect:!1,hasChanged:Vs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Wt.litPropertyMetadata??(Wt.litPropertyMetadata=new WeakMap);class mr extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=lo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&xl(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=kl(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??lo}static _$Ei(){if(this.hasOwnProperty(Ur("elementProperties")))return;const e=Sl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ur("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ur("properties"))){const r=this.properties,i=[...Cl(r),...El(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(oo(s))}else e!==void 0&&r.push(oo(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Al(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Ri).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Ri;this._$Em=s,this[s]=l.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Vs)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}mr.elementStyles=[],mr.shadowRootOptions={mode:"open"},mr[Ur("elementProperties")]=new Map,mr[Ur("finalized")]=new Map,Gs==null||Gs({ReactiveElement:mr}),(Wt.reactiveElementVersions??(Wt.reactiveElementVersions=[])).push("2.0.4");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Tr=globalThis,Di=Tr.trustedTypes,ho=Di?Di.createPolicy("lit-html",{createHTML:t=>t}):void 0,co="$lit$",zt=`lit$${Math.random().toFixed(9).slice(2)}$`,uo="?"+zt,Bl=`<${uo}>`,er=document,Fr=()=>er.createComment(""),jr=t=>t===null||typeof t!="object"&&typeof t!="function",po=Array.isArray,Ll=t=>po(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",qs=`[ 	
\f\r]`,Nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,go=/-->/g,mo=/>/g,tr=RegExp(`>|${qs}(?:([^\\s"'>=/]+)(${qs}*=${qs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fo=/'/g,vo=/"/g,bo=/^(?:script|style|textarea|title)$/i,Pl=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),L=Pl(1),Yt=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),yo=new WeakMap,rr=er.createTreeWalker(er,129);function Ao(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ho!==void 0?ho.createHTML(e):e}const $l=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",o=Nr;for(let l=0;l<r;l++){const u=t[l];let p,f,m=-1,y=0;for(;y<u.length&&(o.lastIndex=y,f=o.exec(u),f!==null);)y=o.lastIndex,o===Nr?f[1]==="!--"?o=go:f[1]!==void 0?o=mo:f[2]!==void 0?(bo.test(f[2])&&(s=RegExp("</"+f[2],"g")),o=tr):f[3]!==void 0&&(o=tr):o===tr?f[0]===">"?(o=s??Nr,m=-1):f[1]===void 0?m=-2:(m=o.lastIndex-f[2].length,p=f[1],o=f[3]===void 0?tr:f[3]==='"'?vo:fo):o===vo||o===fo?o=tr:o===go||o===mo?o=Nr:(o=tr,s=void 0);const k=o===tr&&t[l+1].startsWith("/>")?" ":"";n+=o===Nr?u+Bl:m>=0?(i.push(p),u.slice(0,m)+co+u.slice(m)+zt+k):u+zt+(m===-2?l:k)}return[Ao(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class di{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,u=this.parts,[p,f]=$l(e,r);if(this.el=di.createElement(p,i),rr.currentNode=this.el.content,r===2){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=rr.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const m of s.getAttributeNames())if(m.endsWith(co)){const y=f[o++],k=s.getAttribute(m).split(zt),x=/([.?@])?(.*)/.exec(y);u.push({type:1,index:n,name:x[2],strings:k,ctor:x[1]==="."?Dl:x[1]==="?"?Ml:x[1]==="@"?_l:Mi}),s.removeAttribute(m)}else m.startsWith(zt)&&(u.push({type:6,index:n}),s.removeAttribute(m));if(bo.test(s.tagName)){const m=s.textContent.split(zt),y=m.length-1;if(y>0){s.textContent=Di?Di.emptyScript:"";for(let k=0;k<y;k++)s.append(m[k],Fr()),rr.nextNode(),u.push({type:2,index:++n});s.append(m[y],Fr())}}}else if(s.nodeType===8)if(s.data===uo)u.push({type:2,index:n});else{let m=-1;for(;(m=s.data.indexOf(zt,m+1))!==-1;)u.push({type:7,index:n}),m+=zt.length-1}n++}}static createElement(e,r){const i=er.createElement("template");return i.innerHTML=e,i}}function fr(t,e,r=t,i){var o,l;if(e===Yt)return e;let s=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const n=jr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=fr(t,s._$AS(t,e.values),s,i)),e}class Rl{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??er).importNode(r,!0);rr.currentNode=s;let n=rr.nextNode(),o=0,l=0,u=i[0];for(;u!==void 0;){if(o===u.index){let p;u.type===2?p=new ui(n,n.nextSibling,this,e):u.type===1?p=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(p=new Ol(n,this,e)),this._$AV.push(p),u=i[++l]}o!==(u==null?void 0:u.index)&&(n=rr.nextNode(),o++)}return rr.currentNode=er,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class ui{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=fr(this,e,r),jr(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==Yt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ll(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==N&&jr(this._$AH)?this._$AA.nextSibling.data=e:this.T(er.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=di.createElement(Ao(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const o=new Rl(s,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let r=yo.get(e.strings);return r===void 0&&yo.set(e.strings,r=new di(e)),r}k(e){po(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new ui(this.S(Fr()),this.S(Fr()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Mi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}_$AI(e,r=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=fr(this,e,r,0),o=!jr(e)||e!==this._$AH&&e!==Yt,o&&(this._$AH=e);else{const l=e;let u,p;for(e=n[0],u=0;u<n.length-1;u++)p=fr(this,l[i+u],r,u),p===Yt&&(p=this._$AH[u]),o||(o=!jr(p)||p!==this._$AH[u]),p===N?e=N:e!==N&&(e+=(p??"")+n[u+1]),this._$AH[u]=p}o&&!s&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Dl extends Mi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}class Ml extends Mi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}}class _l extends Mi{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=fr(this,e,r,0)??N)===Yt)return;const i=this._$AH,s=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==N&&(i===N||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Ol{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){fr(this,e)}}const Xs=Tr.litHtmlPolyfillSupport;Xs==null||Xs(di,ui),(Tr.litHtmlVersions??(Tr.litHtmlVersions=[])).push("3.1.4");const Ql=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new ui(e.insertBefore(Fr(),n),n,void 0,r??{})}return s._$AI(t),s};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let st=class extends mr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ql(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Yt}};st._$litElement$=!0,st.finalized=!0,(Ha=globalThis.litElementHydrateSupport)==null||Ha.call(globalThis,{LitElement:st});const Js=globalThis.litElementPolyfillSupport;Js==null||Js({LitElement:st}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const te=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ul={attribute:!0,type:String,converter:Ri,reflect:!1,hasChanged:Vs},Tl=(t=Ul,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,u,t)},init(l){return l!==void 0&&this.P(o,void 0,t),l}}}if(i==="setter"){const{name:o}=r;return function(l){const u=this[o];e.call(this,l),this.requestUpdate(o,u,t)}}throw Error("Unsupported decorator location: "+i)};function U(t){return(e,r)=>typeof r=="object"?Tl(t,e,r):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function M(t){return U({...t,state:!0,attribute:!1})}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Fl=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Hr(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Fl(e,r,{get(){var u;const o=(u=this.renderRoot)==null?void 0:u.querySelector(n),l=(o==null?void 0:o.assignedElements(t))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const jl=t=>t.strings===void 0;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ks={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_i=t=>(...e)=>({_$litDirective$:t,values:e});let Zs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Wr=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),Wr(s,e);return!0},Oi=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},wo=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Wl(e)}};function Nl(t){this._$AN!==void 0?(Oi(this),this._$AM=t,wo(this)):this._$AM=t}function Hl(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)Wr(i[n],!1),Oi(i[n]);else i!=null&&(Wr(i,!1),Oi(i));else Wr(this,t)}const Wl=t=>{t.type==Ks.CHILD&&(t._$AP??(t._$AP=Hl),t._$AQ??(t._$AQ=Nl))};class zl extends Zs{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),wo(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(Wr(this,e),Oi(this))}setValue(e){if(jl(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const De=()=>new Yl;class Yl{}const en=new WeakMap,Te=_i(class extends zl{render(t){return N}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),N}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=en.get(e);r===void 0&&(r=new WeakMap,en.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=en.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Gl=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,xo=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vl(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Gl(e,r,s),s};let zr=class extends st{constructor(){super(),this.dialogRef=De(),this.closeButtonRef=De(),this.invokerRef=De()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return L`
            <slot name="invoker" ${Te(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Te(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Te(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};zr.shadowRootOptions={...st.shadowRootOptions,mode:"open"},zr.styles=Ie`

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

        
    
    `,xo([U({type:String,reflect:!0})],zr.prototype,"label",2),zr=xo([te("thermal-dialog")],zr);var ql=Object.defineProperty,Xl=Object.getOwnPropertyDescriptor,Qi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xl(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ql(e,r,s),s};let Rt=class extends st{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return L`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Rt.VARIANTS=["slate","primary","foreground","background"],Rt.shadowRootOptions={...st.shadowRootOptions,mode:"open"},Rt.styles=Ie`

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
    
    `,Qi([U({type:String,converter:{fromAttribute:t=>Rt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Rt.prototype,"variant",2),Qi([U({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],Rt.prototype,"interactive",2),Qi([U({type:String})],Rt.prototype,"size",2),Rt=Qi([te("thermal-button")],Rt);const vr=Math.min,Dt=Math.max,Ui=Math.round,Gt=t=>({x:t,y:t}),Jl={left:"right",right:"left",bottom:"top",top:"bottom"},Kl={start:"end",end:"start"};function ko(t,e,r){return Dt(t,vr(e,r))}function Yr(t,e){return typeof t=="function"?t(e):t}function Mt(t){return t.split("-")[0]}function Ti(t){return t.split("-")[1]}function Co(t){return t==="x"?"y":"x"}function Eo(t){return t==="y"?"height":"width"}function Gr(t){return["top","bottom"].includes(Mt(t))?"y":"x"}function So(t){return Co(Gr(t))}function Zl(t,e,r){r===void 0&&(r=!1);const i=Ti(t),s=So(t),n=Eo(s);let o=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=Fi(o)),[o,Fi(o)]}function eh(t){const e=Fi(t);return[tn(t),e,tn(e)]}function tn(t){return t.replace(/start|end/g,e=>Kl[e])}function th(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function rh(t,e,r,i){const s=Ti(t);let n=th(Mt(t),r==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(tn)))),n}function Fi(t){return t.replace(/left|right|bottom|top/g,e=>Jl[e])}function ih(t){return{top:0,right:0,bottom:0,left:0,...t}}function Io(t){return typeof t!="number"?ih(t):{top:t,right:t,bottom:t,left:t}}function br(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Bo(t,e,r){let{reference:i,floating:s}=t;const n=Gr(e),o=So(e),l=Eo(o),u=Mt(e),p=n==="y",f=i.x+i.width/2-s.width/2,m=i.y+i.height/2-s.height/2,y=i[l]/2-s[l]/2;let k;switch(u){case"top":k={x:f,y:i.y-s.height};break;case"bottom":k={x:f,y:i.y+i.height};break;case"right":k={x:i.x+i.width,y:m};break;case"left":k={x:i.x-s.width,y:m};break;default:k={x:i.x,y:i.y}}switch(Ti(e)){case"start":k[o]-=y*(r&&p?-1:1);break;case"end":k[o]+=y*(r&&p?-1:1);break}return k}const sh=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,l=n.filter(Boolean),u=await(o.isRTL==null?void 0:o.isRTL(e));let p=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:f,y:m}=Bo(p,i,u),y=i,k={},x=0;for(let C=0;C<l.length;C++){const{name:R,fn:q}=l[C],{x:T,y:K,data:pe,reset:fe}=await q({x:f,y:m,initialPlacement:i,placement:y,strategy:s,middlewareData:k,rects:p,platform:o,elements:{reference:t,floating:e}});f=T??f,m=K??m,k={...k,[R]:{...k[R],...pe}},fe&&x<=50&&(x++,typeof fe=="object"&&(fe.placement&&(y=fe.placement),fe.rects&&(p=fe.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):fe.rects),{x:f,y:m}=Bo(p,y,u)),C=-1)}return{x:f,y:m,placement:y,strategy:s,middlewareData:k}};async function Lo(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:o,elements:l,strategy:u}=t,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:y=!1,padding:k=0}=Yr(e,t),x=Io(k),C=l[y?m==="floating"?"reference":"floating":m],R=br(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(C)))==null||r?C:C.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:f,strategy:u})),q=m==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,T=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),K=await(n.isElement==null?void 0:n.isElement(T))?await(n.getScale==null?void 0:n.getScale(T))||{x:1,y:1}:{x:1,y:1},pe=br(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:q,offsetParent:T,strategy:u}):q);return{top:(R.top-pe.top+x.top)/K.y,bottom:(pe.bottom-R.bottom+x.bottom)/K.y,left:(R.left-pe.left+x.left)/K.x,right:(pe.right-R.right+x.right)/K.x}}const nh=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:o,initialPlacement:l,platform:u,elements:p}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:y,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:C=!0,...R}=Yr(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const q=Mt(s),T=Mt(l)===l,K=await(u.isRTL==null?void 0:u.isRTL(p.floating)),pe=y||(T||!C?[Fi(l)]:eh(l));!y&&x!=="none"&&pe.push(...rh(l,C,x,K));const fe=[l,...pe],Re=await Lo(e,R),j=[];let Ee=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&j.push(Re[q]),m){const ge=Zl(s,o,K);j.push(Re[ge[0]],Re[ge[1]])}if(Ee=[...Ee,{placement:s,overflows:j}],!j.every(ge=>ge<=0)){var ie,se;const ge=(((ie=n.flip)==null?void 0:ie.index)||0)+1,le=fe[ge];if(le)return{data:{index:ge,overflows:Ee},reset:{placement:le}};let he=(se=Ee.filter(xe=>xe.overflows[0]<=0).sort((xe,je)=>xe.overflows[1]-je.overflows[1])[0])==null?void 0:se.placement;if(!he)switch(k){case"bestFit":{var ve;const xe=(ve=Ee.map(je=>[je.placement,je.overflows.filter(Ne=>Ne>0).reduce((Ne,lt)=>Ne+lt,0)]).sort((je,Ne)=>je[1]-Ne[1])[0])==null?void 0:ve[0];xe&&(he=xe);break}case"initialPlacement":he=l;break}if(s!==he)return{reset:{placement:he}}}return{}}}};function Po(t){const e=vr(...t.map(n=>n.left)),r=vr(...t.map(n=>n.top)),i=Dt(...t.map(n=>n.right)),s=Dt(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function oh(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>br(Po(s)))}const ah=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:o}=e,{padding:l=2,x:u,y:p}=Yr(t,e),f=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),m=oh(f),y=br(Po(f)),k=Io(l);function x(){if(m.length===2&&m[0].left>m[1].right&&u!=null&&p!=null)return m.find(R=>u>R.left-k.left&&u<R.right+k.right&&p>R.top-k.top&&p<R.bottom+k.bottom)||y;if(m.length>=2){if(Gr(r)==="y"){const se=m[0],ve=m[m.length-1],ge=Mt(r)==="top",le=se.top,he=ve.bottom,xe=ge?se.left:ve.left,je=ge?se.right:ve.right,Ne=je-xe,lt=he-le;return{top:le,bottom:he,left:xe,right:je,width:Ne,height:lt,x:xe,y:le}}const R=Mt(r)==="left",q=Dt(...m.map(se=>se.right)),T=vr(...m.map(se=>se.left)),K=m.filter(se=>R?se.left===T:se.right===q),pe=K[0].top,fe=K[K.length-1].bottom,Re=T,j=q,Ee=j-Re,ie=fe-pe;return{top:pe,bottom:fe,left:Re,right:j,width:Ee,height:ie,x:Re,y:pe}}return y}const C=await n.getElementRects({reference:{getBoundingClientRect:x},floating:i.floating,strategy:o});return s.reference.x!==C.reference.x||s.reference.y!==C.reference.y||s.reference.width!==C.reference.width||s.reference.height!==C.reference.height?{reset:{rects:C}}:{}}}};async function lh(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=Mt(r),l=Ti(r),u=Gr(r)==="y",p=["left","top"].includes(o)?-1:1,f=n&&u?-1:1,m=Yr(e,t);let{mainAxis:y,crossAxis:k,alignmentAxis:x}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return l&&typeof x=="number"&&(k=l==="end"?x*-1:x),u?{x:k*f,y:y*p}:{x:y*p,y:k*f}}const hh=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:o,middlewareData:l}=e,u=await lh(e,t);return o===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+u.x,y:n+u.y,data:{...u,placement:o}}}}},ch=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:R=>{let{x:q,y:T}=R;return{x:q,y:T}}},...u}=Yr(t,e),p={x:r,y:i},f=await Lo(e,u),m=Gr(Mt(s)),y=Co(m);let k=p[y],x=p[m];if(n){const R=y==="y"?"top":"left",q=y==="y"?"bottom":"right",T=k+f[R],K=k-f[q];k=ko(T,k,K)}if(o){const R=m==="y"?"top":"left",q=m==="y"?"bottom":"right",T=x+f[R],K=x-f[q];x=ko(T,x,K)}const C=l.fn({...e,[y]:k,[m]:x});return{...C,data:{x:C.x-r,y:C.y-i}}}}};function yr(t){return $o(t)?(t.nodeName||"").toLowerCase():"#document"}function ct(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Vt(t){var e;return(e=($o(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $o(t){return t instanceof Node||t instanceof ct(t).Node}function Et(t){return t instanceof Element||t instanceof ct(t).Element}function St(t){return t instanceof HTMLElement||t instanceof ct(t).HTMLElement}function Ro(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ct(t).ShadowRoot}function Vr(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=yt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function dh(t){return["table","td","th"].includes(yr(t))}function ji(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function rn(t){const e=sn(),r=yt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function uh(t){let e=qt(t);for(;St(e)&&!Ar(e);){if(ji(e))return null;if(rn(e))return e;e=qt(e)}return null}function sn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ar(t){return["html","body","#document"].includes(yr(t))}function yt(t){return ct(t).getComputedStyle(t)}function Ni(t){return Et(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function qt(t){if(yr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ro(t)&&t.host||Vt(t);return Ro(e)?e.host:e}function Do(t){const e=qt(t);return Ar(e)?t.ownerDocument?t.ownerDocument.body:t.body:St(e)&&Vr(e)?e:Do(e)}function nn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Do(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),o=ct(s);return n?e.concat(o,o.visualViewport||[],Vr(s)?s:[],o.frameElement&&r?nn(o.frameElement):[]):e.concat(s,nn(s,[],r))}function Mo(t){const e=yt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=St(t),n=s?t.offsetWidth:r,o=s?t.offsetHeight:i,l=Ui(r)!==n||Ui(i)!==o;return l&&(r=n,i=o),{width:r,height:i,$:l}}function _o(t){return Et(t)?t:t.contextElement}function wr(t){const e=_o(t);if(!St(e))return Gt(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=Mo(e);let o=(n?Ui(r.width):r.width)/i,l=(n?Ui(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const ph=Gt(0);function Oo(t){const e=ct(t);return!sn()||!e.visualViewport?ph:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function gh(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ct(t)?!1:e}function qr(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=_o(t);let o=Gt(1);e&&(i?Et(i)&&(o=wr(i)):o=wr(t));const l=gh(n,r,i)?Oo(n):Gt(0);let u=(s.left+l.x)/o.x,p=(s.top+l.y)/o.y,f=s.width/o.x,m=s.height/o.y;if(n){const y=ct(n),k=i&&Et(i)?ct(i):i;let x=y,C=x.frameElement;for(;C&&i&&k!==x;){const R=wr(C),q=C.getBoundingClientRect(),T=yt(C),K=q.left+(C.clientLeft+parseFloat(T.paddingLeft))*R.x,pe=q.top+(C.clientTop+parseFloat(T.paddingTop))*R.y;u*=R.x,p*=R.y,f*=R.x,m*=R.y,u+=K,p+=pe,x=ct(C),C=x.frameElement}}return br({width:f,height:m,x:u,y:p})}function mh(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",o=Vt(i),l=e?ji(e.floating):!1;if(i===o||l&&n)return r;let u={scrollLeft:0,scrollTop:0},p=Gt(1);const f=Gt(0),m=St(i);if((m||!m&&!n)&&((yr(i)!=="body"||Vr(o))&&(u=Ni(i)),St(i))){const y=qr(i);p=wr(i),f.x=y.x+i.clientLeft,f.y=y.y+i.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-u.scrollLeft*p.x+f.x,y:r.y*p.y-u.scrollTop*p.y+f.y}}function fh(t){return Array.from(t.getClientRects())}function Qo(t){return qr(Vt(t)).left+Ni(t).scrollLeft}function vh(t){const e=Vt(t),r=Ni(t),i=t.ownerDocument.body,s=Dt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Dt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Qo(t);const l=-r.scrollTop;return yt(i).direction==="rtl"&&(o+=Dt(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:l}}function bh(t,e){const r=ct(t),i=Vt(t),s=r.visualViewport;let n=i.clientWidth,o=i.clientHeight,l=0,u=0;if(s){n=s.width,o=s.height;const p=sn();(!p||p&&e==="fixed")&&(l=s.offsetLeft,u=s.offsetTop)}return{width:n,height:o,x:l,y:u}}function yh(t,e){const r=qr(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=St(t)?wr(t):Gt(1),o=t.clientWidth*n.x,l=t.clientHeight*n.y,u=s*n.x,p=i*n.y;return{width:o,height:l,x:u,y:p}}function Uo(t,e,r){let i;if(e==="viewport")i=bh(t,r);else if(e==="document")i=vh(Vt(t));else if(Et(e))i=yh(e,r);else{const s=Oo(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return br(i)}function To(t,e){const r=qt(t);return r===e||!Et(r)||Ar(r)?!1:yt(r).position==="fixed"||To(r,e)}function Ah(t,e){const r=e.get(t);if(r)return r;let i=nn(t,[],!1).filter(l=>Et(l)&&yr(l)!=="body"),s=null;const n=yt(t).position==="fixed";let o=n?qt(t):t;for(;Et(o)&&!Ar(o);){const l=yt(o),u=rn(o);!u&&l.position==="fixed"&&(s=null),(n?!u&&!s:!u&&l.position==="static"&&s&&["absolute","fixed"].includes(s.position)||Vr(o)&&!u&&To(t,o))?i=i.filter(p=>p!==o):s=l,o=qt(o)}return e.set(t,i),i}function wh(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const n=[...r==="clippingAncestors"?ji(e)?[]:Ah(e,this._c):[].concat(r),i],o=n[0],l=n.reduce((u,p)=>{const f=Uo(e,p,s);return u.top=Dt(f.top,u.top),u.right=vr(f.right,u.right),u.bottom=vr(f.bottom,u.bottom),u.left=Dt(f.left,u.left),u},Uo(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xh(t){const{width:e,height:r}=Mo(t);return{width:e,height:r}}function kh(t,e,r){const i=St(e),s=Vt(e),n=r==="fixed",o=qr(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const u=Gt(0);if(i||!i&&!n)if((yr(e)!=="body"||Vr(s))&&(l=Ni(e)),i){const m=qr(e,!0,n,e);u.x=m.x+e.clientLeft,u.y=m.y+e.clientTop}else s&&(u.x=Qo(s));const p=o.left+l.scrollLeft-u.x,f=o.top+l.scrollTop-u.y;return{x:p,y:f,width:o.width,height:o.height}}function on(t){return yt(t).position==="static"}function Fo(t,e){return!St(t)||yt(t).position==="fixed"?null:e?e(t):t.offsetParent}function jo(t,e){const r=ct(t);if(ji(t))return r;if(!St(t)){let s=qt(t);for(;s&&!Ar(s);){if(Et(s)&&!on(s))return s;s=qt(s)}return r}let i=Fo(t,e);for(;i&&dh(i)&&on(i);)i=Fo(i,e);return i&&Ar(i)&&on(i)&&!rn(i)?r:i||uh(t)||r}const Ch=async function(t){const e=this.getOffsetParent||jo,r=this.getDimensions,i=await r(t.floating);return{reference:kh(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Eh(t){return yt(t).direction==="rtl"}const Sh={convertOffsetParentRelativeRectToViewportRelativeRect:mh,getDocumentElement:Vt,getClippingRect:wh,getOffsetParent:jo,getElementRects:Ch,getClientRects:fh,getDimensions:xh,getScale:wr,isElement:Et,isRTL:Eh},Ih=hh,Bh=ch,Lh=nh,Ph=ah,$h=(t,e,r)=>{const i=new Map,s={platform:Sh,...r},n={...s.platform,_c:i};return sh(t,e,{...s,platform:n})};/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const _t=_i(class extends Zs{constructor(t){var e;if(super(t),t.type!==Ks.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Yt}});var Rh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Xr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Rh(e,r,s),s};let Ot=class extends st{constructor(){super(...arguments),this.dropdownRef=De(),this.invokerRef=De(),this.optionsRef=De(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){$h(this.invokerRef.value,this.optionsRef.value,{middleware:[Ih(2),Lh(),Ph(),Bh()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,o;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(o=this.dropdownRef.value)==null||o.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return L`

            <div class="dropdown" ${Te(this.dropdownRef)}>

                <thermal-button class="${_t(t)}" ${Te(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?L`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:L`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Te(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Ot.shadowRootOptions={...st.shadowRootOptions,mode:"open"},Ot.styles=Ie`

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
    
    `,Xr([Hr({slot:"option"})],Ot.prototype,"_options",2),Xr([U({type:String,reflect:!0})],Ot.prototype,"open",2),Xr([U({type:String,reflect:!0,attribute:!0}),M()],Ot.prototype,"interactive",2),Xr([U({type:String,reflect:!0})],Ot.prototype,"variant",2),Ot=Xr([te("thermal-dropdown")],Ot);var Mh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Hi=(t,e,r,i)=>{for(var s=i>1?void 0:i?_h(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Mh(e,r,s),s};let xr=class extends st{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=De(),this.contentRef=De(),this.rulerContentRef=De()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return L`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Te(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Te(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Te(this.contentRef)}>

                    ${this.collapsed===!1?L`
                        <slot></slot>    
                    `:N}
                
                </div>

            </div>

            ${this.collapsed?L`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:N}
        
        `}};xr.styles=Ie`

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

    `,Hi([M()],xr.prototype,"collapsed",2),Hi([M()],xr.prototype,"lastContentWidth",2),Hi([M()],xr.prototype,"drawerRef",2),xr=Hi([te("thermal-bar")],xr);var Oh=Object.defineProperty,Qh=Object.getOwnPropertyDescriptor,ir=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Oh(e,r,s),s};let Qt=class extends st{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=De(),this.contentRef=De()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const i=r.contentRect.height,s=r.contentRect.width,n=i-175,o=s-0,l=this.contentRef.value.offsetHeight,u=4/3;let p=0,f=0;l<n?(console.log("priorita \u0161\xED\u0159ky"),p=o,f=p/u):(console.log("priorita v\xFD\u0161ky"),f=n,p=f*u),this.contentRef.value.setAttribute("style",`width: ${p}px !important; height: ${f}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return L`

        <div class="container ${this.dark?"dark":"normal"}" ${Te(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?L`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?L`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?L`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:L`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:N}

                -->
                
            </div> 
        `:""}

        ${this.pre.length>=0?L`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Te(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

        </div>
        
        `}};Qt.styles=Ie`

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
    
    `,ir([Hr({slot:"bar",flatten:!0})],Qt.prototype,"barItems",2),ir([Hr({slot:"bar",flatten:!0})],Qt.prototype,"barElements",2),ir([Hr({slot:"pre",flatten:!0})],Qt.prototype,"pre",2),ir([U({type:String,reflect:!0})],Qt.prototype,"fullscreen",2),ir([U({type:String,reflect:!0,attribute:!0})],Qt.prototype,"showfullscreen",2),ir([U({type:String,reflect:!0,attribute:!0})],Qt.prototype,"dark",2),Qt=ir([te("thermal-app")],Qt);var Uh=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Fh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Th(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Uh(e,r,s),s};let an=class extends st{render(){return L`
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
                        <p>version ${Ws}</p>
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
        `}};an.styles=Ie`

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
    
    `,an=Fh([te("app-info-button")],an);function gt(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function sr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const No=6048e5,jh=864e5;let Nh={};function Wi(){return Nh}function Jr(t,e){var l,u,p,f;const r=Wi(),i=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??r.weekStartsOn??((f=(p=r.locale)==null?void 0:p.options)==null?void 0:f.weekStartsOn)??0,s=gt(t),n=s.getDay(),o=(n<i?7:0)+n-i;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function zi(t){return Jr(t,{weekStartsOn:1})}function Ho(t){const e=gt(t),r=e.getFullYear(),i=sr(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=zi(i),n=sr(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const o=zi(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=o.getTime()?r:r-1}function Wo(t){const e=gt(t);return e.setHours(0,0,0,0),e}function zo(t){const e=gt(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Hh(t,e){const r=Wo(t),i=Wo(e),s=+r-zo(r),n=+i-zo(i);return Math.round((s-n)/jh)}function Wh(t){const e=Ho(t),r=sr(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),zi(r)}function zh(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Yo(t){if(!zh(t)&&typeof t!="number")return!1;const e=gt(t);return!isNaN(Number(e))}function Yh(t){const e=gt(t),r=sr(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Gh={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Vh=(t,e,r)=>{let i;const s=Gh[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function ln(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const qh={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Xh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Jh={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Kh={date:ln({formats:qh,defaultWidth:"full"}),time:ln({formats:Xh,defaultWidth:"full"}),dateTime:ln({formats:Jh,defaultWidth:"full"})},Zh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ec=(t,e,r,i)=>Zh[t];function Kr(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):o;s=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[o]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const tc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ic={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sc={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},oc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ac=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},lc={ordinalNumber:ac,era:Kr({values:tc,defaultWidth:"wide"}),quarter:Kr({values:rc,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Kr({values:ic,defaultWidth:"wide"}),day:Kr({values:sc,defaultWidth:"wide"}),dayPeriod:Kr({values:nc,defaultWidth:"wide",formattingValues:oc,defaultFormattingWidth:"wide"})};function Zr(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const o=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?cc(l,m=>m.test(o)):hc(l,m=>m.test(o));let p;p=t.valueCallback?t.valueCallback(u):u,p=r.valueCallback?r.valueCallback(p):p;const f=e.slice(o.length);return{value:p,rest:f}}}function hc(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function cc(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function dc(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let o=t.valueCallback?t.valueCallback(n[0]):n[0];o=r.valueCallback?r.valueCallback(o):o;const l=e.slice(s.length);return{value:o,rest:l}}}const uc=/^(\d+)(th|st|nd|rd)?/i,pc=/\d+/i,gc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mc={any:[/^b/i,/^(a|c)/i]},fc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vc={any:[/1/i,/2/i,/3/i,/4/i]},bc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ac={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},wc={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},xc={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kc={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Cc={ordinalNumber:dc({matchPattern:uc,parsePattern:pc,valueCallback:t=>parseInt(t,10)}),era:Zr({matchPatterns:gc,defaultMatchWidth:"wide",parsePatterns:mc,defaultParseWidth:"any"}),quarter:Zr({matchPatterns:fc,defaultMatchWidth:"wide",parsePatterns:vc,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Zr({matchPatterns:bc,defaultMatchWidth:"wide",parsePatterns:yc,defaultParseWidth:"any"}),day:Zr({matchPatterns:Ac,defaultMatchWidth:"wide",parsePatterns:wc,defaultParseWidth:"any"}),dayPeriod:Zr({matchPatterns:xc,defaultMatchWidth:"any",parsePatterns:kc,defaultParseWidth:"any"})},Ec={code:"en-US",formatDistance:Vh,formatLong:Kh,formatRelative:ec,localize:lc,match:Cc,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Sc(t){const e=gt(t);return Hh(e,Yh(e))+1}function Ic(t){const e=gt(t),r=+zi(e)-+Wh(e);return Math.round(r/No)+1}function Go(t,e){var f,m,y,k;const r=gt(t),i=r.getFullYear(),s=Wi(),n=(e==null?void 0:e.firstWeekContainsDate)??((m=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??s.firstWeekContainsDate??((k=(y=s.locale)==null?void 0:y.options)==null?void 0:k.firstWeekContainsDate)??1,o=sr(t,0);o.setFullYear(i+1,0,n),o.setHours(0,0,0,0);const l=Jr(o,e),u=sr(t,0);u.setFullYear(i,0,n),u.setHours(0,0,0,0);const p=Jr(u,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function Bc(t,e){var o,l,u,p;const r=Wi(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((p=(u=r.locale)==null?void 0:u.options)==null?void 0:p.firstWeekContainsDate)??1,s=Go(t,e),n=sr(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Jr(n,e)}function Lc(t,e){const r=gt(t),i=+Jr(r,e)-+Bc(r,e);return Math.round(i/No)+1}function ae(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Xt={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return ae(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):ae(r+1,2)},d(t,e){return ae(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return ae(t.getHours()%12||12,e.length)},H(t,e){return ae(t.getHours(),e.length)},m(t,e){return ae(t.getMinutes(),e.length)},s(t,e){return ae(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return ae(s,e.length)}},kr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Vo={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Xt.y(t,e)},Y:function(t,e,r,i){const s=Go(t,i),n=s>0?s:1-s;if(e==="YY"){const o=n%100;return ae(o,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):ae(n,e.length)},R:function(t,e){const r=Ho(t);return ae(r,e.length)},u:function(t,e){const r=t.getFullYear();return ae(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ae(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ae(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Xt.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ae(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Lc(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):ae(s,e.length)},I:function(t,e,r){const i=Ic(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):ae(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Xt.d(t,e)},D:function(t,e,r){const i=Sc(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ae(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return ae(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return ae(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return ae(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=kr.noon:i===0?s=kr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=kr.evening:i>=12?s=kr.afternoon:i>=4?s=kr.morning:s=kr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Xt.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Xt.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ae(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):ae(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Xt.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Xt.s(t,e)},S:function(t,e){return Xt.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Xo(i);case"XXXX":case"XX":return nr(i);case"XXXXX":case"XXX":default:return nr(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return Xo(i);case"xxxx":case"xx":return nr(i);case"xxxxx":case"xxx":default:return nr(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+qo(i,":");case"OOOO":default:return"GMT"+nr(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+qo(i,":");case"zzzz":default:return"GMT"+nr(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return ae(i,e.length)},T:function(t,e,r){const i=t.getTime();return ae(i,e.length)}};function qo(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+ae(n,2)}function Xo(t,e){return t%60===0?(t>0?"-":"+")+ae(Math.abs(t)/60,2):nr(t,e)}function nr(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=ae(Math.trunc(i/60),2),n=ae(i%60,2);return r+s+e+n}const Jo=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ko=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Pc=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return Jo(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Jo(i,e)).replace("{{time}}",Ko(s,e))},$c={p:Ko,P:Pc},Rc=/^D+$/,Dc=/^Y+$/,Mc=["D","DD","YY","YYYY"];function _c(t){return Rc.test(t)}function Oc(t){return Dc.test(t)}function Qc(t,e,r){const i=Uc(t,e,r);if(console.warn(i),Mc.includes(t))throw new RangeError(i)}function Uc(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Tc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Fc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jc=/^'([^]*?)'?$/,Nc=/''/g,Hc=/[a-zA-Z]/;function Cr(t,e,r){var f,m,y,k;const i=Wi(),s=i.locale??Ec,n=i.firstWeekContainsDate??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=i.weekStartsOn??((k=(y=i.locale)==null?void 0:y.options)==null?void 0:k.weekStartsOn)??0,l=gt(t);if(!Yo(l))throw new RangeError("Invalid time value");let u=e.match(Fc).map(x=>{const C=x[0];if(C==="p"||C==="P"){const R=$c[C];return R(x,s.formatLong)}return x}).join("").match(Tc).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const C=x[0];if(C==="'")return{isToken:!1,value:Wc(x)};if(Vo[C])return{isToken:!0,value:x};if(C.match(Hc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+C+"`");return{isToken:!1,value:x}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const p={firstWeekContainsDate:n,weekStartsOn:o,locale:s};return u.map(x=>{if(!x.isToken)return x.value;const C=x.value;(Oc(C)||_c(C))&&Qc(C,e,String(t));const R=Vo[C[0]];return R(l,C,s.localize,p)}).join("")}function Wc(t){const e=t.match(jc);return e?e[1].replace(Nc,"'"):t}function hn(t,e){const r=gt(t);if(!Yo(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const o=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const u=ae(r.getDate(),2),p=ae(r.getMonth()+1,2);n=`${ae(r.getFullYear(),4)}${o}${p}${o}${u}`}if(s!=="date"){const u=ae(r.getHours(),2),p=ae(r.getMinutes(),2),f=ae(r.getSeconds(),2);n=`${n}${n===""?"":" "}${u}${l}${p}${l}${f}`}return n}var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yc(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var cn={exports:{}};const Gc={},Vc=Object.freeze(Object.defineProperty({__proto__:null,default:Gc},Symbol.toStringTag,{value:"Module"})),Er=Yc(Vc);/**
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
*/(function(t,e){(function(r,i){i(e)})(zc,function(r){var i={},s={exports:{}};(function(w){var P=function(I){return typeof I<"u"&&I.versions!=null&&I.versions.node!=null&&I+""=="[object process]"};w.exports.isNode=P,w.exports.platform=typeof process<"u"&&P(process)?"node":"browser";var B=w.exports.platform==="node"&&Er;w.exports.isMainThread=w.exports.platform==="node"?(!B||B.isMainThread)&&!process.connected:typeof Window<"u",w.exports.cpus=w.exports.platform==="browser"?self.navigator.hardwareConcurrency:Er.cpus().length})(s);var n=s.exports,o={},l;function u(){if(l)return o;l=1;function w(X,be){var z=this;if(!(this instanceof w))throw new SyntaxError("Constructor must be called with the new operator");if(typeof X!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var _e=[],ce=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var O=function(E,J){_e.push(E),ce.push(J)};this.then=function(E,J){return new w(function(Se,Ve){var Ze=E?P(E,Se,Ve):Se,kt=J?P(J,Se,Ve):Ve;O(Ze,kt)},z)};var de=function(E){return z.resolved=!0,z.rejected=!1,z.pending=!1,_e.forEach(function(J){J(E)}),O=function(J,Se){J(E)},de=A=function(){},z},A=function(E){return z.resolved=!1,z.rejected=!0,z.pending=!1,ce.forEach(function(J){J(E)}),O=function(J,Se){Se(E)},de=A=function(){},z};this.cancel=function(){return be?be.cancel():A(new B),z},this.timeout=function(E){if(be)be.timeout(E);else{var J=setTimeout(function(){A(new I("Promise timed out after "+E+" ms"))},E);z.always(function(){clearTimeout(J)})}return z},X(function(E){de(E)},function(E){A(E)})}function P(X,be,z){return function(_e){try{var ce=X(_e);ce&&typeof ce.then=="function"&&typeof ce.catch=="function"?ce.then(be,z):be(ce)}catch(O){z(O)}}}w.prototype.catch=function(X){return this.then(null,X)},w.prototype.always=function(X){return this.then(X,X)},w.all=function(X){return new w(function(be,z){var _e=X.length,ce=[];_e?X.forEach(function(O,de){O.then(function(A){ce[de]=A,_e--,_e==0&&be(ce)},function(A){_e=0,z(A)})}):be(ce)})},w.defer=function(){var X={};return X.promise=new w(function(be,z){X.resolve=be,X.reject=z}),X};function B(X){this.message=X||"promise cancelled",this.stack=new Error().stack}B.prototype=new Error,B.prototype.constructor=Error,B.prototype.name="CancellationError",w.CancellationError=B;function I(X){this.message=X||"timeout exceeded",this.stack=new Error().stack}return I.prototype=new Error,I.prototype.constructor=Error,I.prototype.name="TimeoutError",w.TimeoutError=I,o.Promise=w,o}function p(w,P){(P==null||P>w.length)&&(P=w.length);for(var B=0,I=Array(P);B<P;B++)I[B]=w[B];return I}function f(w,P){var B=typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(!B){if(Array.isArray(w)||(B=q(w))||P){B&&(w=B);var I=0,X=function(){};return{s:X,n:function(){return I>=w.length?{done:!0}:{done:!1,value:w[I++]}},e:function(ce){throw ce},f:X}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var be,z=!0,_e=!1;return{s:function(){B=B.call(w)},n:function(){var ce=B.next();return z=ce.done,ce},e:function(ce){_e=!0,be=ce},f:function(){try{z||B.return==null||B.return()}finally{if(_e)throw be}}}}function m(w,P,B){return(P=C(P))in w?Object.defineProperty(w,P,{value:B,enumerable:!0,configurable:!0,writable:!0}):w[P]=B,w}function y(w,P){var B=Object.keys(w);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(w);P&&(I=I.filter(function(X){return Object.getOwnPropertyDescriptor(w,X).enumerable})),B.push.apply(B,I)}return B}function k(w){for(var P=1;P<arguments.length;P++){var B=arguments[P]!=null?arguments[P]:{};P%2?y(Object(B),!0).forEach(function(I){m(w,I,B[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(B)):y(Object(B)).forEach(function(I){Object.defineProperty(w,I,Object.getOwnPropertyDescriptor(B,I))})}return w}function x(w,P){if(typeof w!="object"||!w)return w;var B=w[Symbol.toPrimitive];if(B!==void 0){var I=B.call(w,P||"default");if(typeof I!="object")return I;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(w)}function C(w){var P=x(w,"string");return typeof P=="symbol"?P:P+""}function R(w){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},R(w)}function q(w,P){if(w){if(typeof w=="string")return p(w,P);var B={}.toString.call(w).slice(8,-1);return B==="Object"&&w.constructor&&(B=w.constructor.name),B==="Map"||B==="Set"?Array.from(w):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?p(w,P):void 0}}var T={exports:{}},K={},pe;function fe(){return pe||(pe=1,K.validateOptions=function(w,P,B){if(w){var I=w?Object.keys(w):[],X=I.find(function(z){return!P.includes(z)});if(X)throw new Error('Object "'+B+'" contains an unknown option "'+X+'"');var be=P.find(function(z){return Object.prototype[z]&&!I.includes(z)});if(be)throw new Error('Object "'+B+'" contains an inherited option "'+be+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return w}},K.workerOptsNames=["credentials","name","type"],K.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],K.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),K}var Re,j;function Ee(){return j||(j=1,Re=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Re}var ie;function se(){if(ie)return T.exports;ie=1;var w=u(),P=w.Promise,B=n,I=fe(),X=I.validateOptions,be=I.forkOptsNames,z=I.workerThreadOptsNames,_e=I.workerOptsNames,ce="__workerpool-terminate__";function O(){var H=A();if(!H)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return H}function de(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":R(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function A(){try{return Er}catch(H){if(R(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND")return null;throw H}}function E(){if(B.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var H=new Blob([Ee()],{type:"text/javascript"});return window.URL.createObjectURL(H)}else return __dirname+"/worker.js"}function J(H,Z){if(Z.workerType==="web")return de(),Se(H,Z.workerOpts,Worker);if(Z.workerType==="thread")return S=O(),Ve(H,S,Z);if(Z.workerType==="process"||!Z.workerType)return Ze(H,kt(Z),Er);if(B.platform==="browser")return de(),Se(H,Z.workerOpts,Worker);var S=A();return S?Ve(H,S,Z):Ze(H,kt(Z),Er)}function Se(H,Z,S){X(Z,_e,"workerOpts");var V=new S(H,Z);return V.isBrowserWorker=!0,V.on=function(ye,me){this.addEventListener(ye,function(Pe){me(Pe.data)})},V.send=function(ye,me){this.postMessage(ye,me)},V}function Ve(H,Z,S){var V,ye;X(S==null?void 0:S.workerThreadOpts,z,"workerThreadOpts");var me=new Z.Worker(H,k({stdout:(V=S==null?void 0:S.emitStdStreams)!==null&&V!==void 0?V:!1,stderr:(ye=S==null?void 0:S.emitStdStreams)!==null&&ye!==void 0?ye:!1},S==null?void 0:S.workerThreadOpts));return me.isWorkerThread=!0,me.send=function(Pe,Ae){this.postMessage(Pe,Ae)},me.kill=function(){return this.terminate(),!0},me.disconnect=function(){this.terminate()},S!=null&&S.emitStdStreams&&(me.stdout.on("data",function(Pe){return me.emit("stdout",Pe)}),me.stderr.on("data",function(Pe){return me.emit("stderr",Pe)})),me}function Ze(H,Z,S){X(Z.forkOpts,be,"forkOpts");var V=S.fork(H,Z.forkArgs,Z.forkOpts),ye=V.send;return V.send=function(me){return ye.call(V,me)},Z.emitStdStreams&&(V.stdout.on("data",function(me){return V.emit("stdout",me)}),V.stderr.on("data",function(me){return V.emit("stderr",me)})),V.isChildProcess=!0,V}function kt(H){H=H||{};var Z=process.execArgv.join(" "),S=Z.indexOf("--inspect")!==-1,V=Z.indexOf("--debug-brk")!==-1,ye=[];return S&&(ye.push("--inspect="+H.debugPort),V&&ye.push("--debug-brk")),process.execArgv.forEach(function(me){me.indexOf("--max-old-space-size")>-1&&ye.push(me)}),Object.assign({},H,{forkArgs:H.forkArgs,forkOpts:Object.assign({},H.forkOpts,{execArgv:(H.forkOpts&&H.forkOpts.execArgv||[]).concat(ye),stdio:H.emitStdStreams?"pipe":void 0})})}function qe(H){for(var Z=new Error(""),S=Object.keys(H),V=0;V<S.length;V++)Z[S[V]]=H[S[V]];return Z}function ur(H,Z){if(Object.keys(H.processing).length===1){var S=Object.values(H.processing)[0];S.options&&typeof S.options.on=="function"&&S.options.on(Z)}}function Nt(H,Z){var S=this,V=Z||{};this.script=H||E(),this.worker=J(this.script,V),this.debugPort=V.debugPort,this.forkOpts=V.forkOpts,this.forkArgs=V.forkArgs,this.workerOpts=V.workerOpts,this.workerThreadOpts=V.workerThreadOpts,this.workerTerminateTimeout=V.workerTerminateTimeout,H||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Ae){ur(S,{stdout:Ae.toString()})}),this.worker.on("stderr",function(Ae){ur(S,{stderr:Ae.toString()})}),this.worker.on("message",function(Ae){if(!S.terminated)if(typeof Ae=="string"&&Ae==="ready")S.worker.ready=!0,me();else{var et=Ae.id,He=S.processing[et];He!==void 0&&(Ae.isEvent?He.options&&typeof He.options.on=="function"&&He.options.on(Ae.payload):(delete S.processing[et],S.terminating===!0&&S.terminate(),Ae.error?He.resolver.reject(qe(Ae.error)):He.resolver.resolve(Ae.result)))}});function ye(Ae){S.terminated=!0;for(var et in S.processing)S.processing[et]!==void 0&&S.processing[et].resolver.reject(Ae);S.processing=Object.create(null)}function me(){var Ae=f(S.requestQueue.splice(0)),et;try{for(Ae.s();!(et=Ae.n()).done;){var He=et.value;S.worker.send(He.message,He.transfer)}}catch(yi){Ae.e(yi)}finally{Ae.f()}}var Pe=this.worker;this.worker.on("error",ye),this.worker.on("exit",function(Ae,et){var He=`Workerpool Worker terminated Unexpectedly
`;He+="    exitCode: `"+Ae+"`\n",He+="    signalCode: `"+et+"`\n",He+="    workerpool.script: `"+S.script+"`\n",He+="    spawnArgs: `"+Pe.spawnargs+"`\n",He+="    spawnfile: `"+Pe.spawnfile+"`\n",He+="    stdout: `"+Pe.stdout+"`\n",He+="    stderr: `"+Pe.stderr+"`\n",ye(new Error(He))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Nt.prototype.methods=function(){return this.exec("methods")},Nt.prototype.exec=function(H,Z,S,V){S||(S=P.defer());var ye=++this.lastId;this.processing[ye]={id:ye,resolver:S,options:V};var me={message:{id:ye,method:H,params:Z},transfer:V&&V.transfer};this.terminated?S.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(me.message,me.transfer):this.requestQueue.push(me);var Pe=this;return S.promise.catch(function(Ae){if(Ae instanceof P.CancellationError||Ae instanceof P.TimeoutError)return delete Pe.processing[ye],Pe.terminateAndNotify(!0).then(function(){throw Ae},function(et){throw et});throw Ae})},Nt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Nt.prototype.terminate=function(H,Z){var S=this;if(H){for(var V in this.processing)this.processing[V]!==void 0&&this.processing[V].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Z=="function"&&(this.terminationHandler=Z),this.busy())this.terminating=!0;else{var ye=function(Pe){if(S.terminated=!0,S.cleaning=!1,S.worker!=null&&S.worker.removeAllListeners&&S.worker.removeAllListeners("message"),S.worker=null,S.terminating=!1,S.terminationHandler)S.terminationHandler(Pe,S);else if(Pe)throw Pe};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ye(new Error("worker already killed!"));return}var me=setTimeout(function(){S.worker&&S.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(me),S.worker&&(S.worker.killed=!0),ye()}),this.worker.ready?this.worker.send(ce):this.requestQueue.push({message:ce}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ye()}},Nt.prototype.terminateAndNotify=function(H,Z){var S=P.defer();return Z&&S.promise.timeout(Z),this.terminate(H,function(V,ye){V?S.reject(V):S.resolve(ye)}),S.promise},T.exports=Nt,T.exports._tryRequireWorkerThreads=A,T.exports._setupProcessWorker=Ze,T.exports._setupBrowserWorker=Se,T.exports._setupWorkerThreadWorker=Ve,T.exports.ensureWorkerThreads=O,T.exports}var ve,ge;function le(){if(ge)return ve;ge=1;var w=65535;ve=P;function P(){this.ports=Object.create(null),this.length=0}return P.prototype.nextAvailableStartingAt=function(B){for(;this.ports[B]===!0;)B++;if(B>=w)throw new Error("WorkerPool debug port limit reached: "+B+">= "+w);return this.ports[B]=!0,this.length++,B},P.prototype.releasePort=function(B){delete this.ports[B],this.length--},ve}var he,xe;function je(){if(xe)return he;xe=1;var w=u(),P=w.Promise,B=se(),I=n,X=le(),be=new X;function z(A,E){typeof A=="string"?this.script=A||null:(this.script=null,E=A),this.workers=[],this.tasks=[],E=E||{},this.forkArgs=Object.freeze(E.forkArgs||[]),this.forkOpts=Object.freeze(E.forkOpts||{}),this.workerOpts=Object.freeze(E.workerOpts||{}),this.workerThreadOpts=Object.freeze(E.workerThreadOpts||{}),this.debugPortStart=E.debugPortStart||43210,this.nodeWorker=E.nodeWorker,this.workerType=E.workerType||E.nodeWorker||"auto",this.maxQueueSize=E.maxQueueSize||1/0,this.workerTerminateTimeout=E.workerTerminateTimeout||1e3,this.onCreateWorker=E.onCreateWorker||function(){return null},this.onTerminateWorker=E.onTerminateWorker||function(){return null},this.emitStdStreams=E.emitStdStreams||!1,E&&"maxWorkers"in E?(_e(E.maxWorkers),this.maxWorkers=E.maxWorkers):this.maxWorkers=Math.max((I.cpus||4)-1,1),E&&"minWorkers"in E&&(E.minWorkers==="max"?this.minWorkers=this.maxWorkers:(ce(E.minWorkers),this.minWorkers=E.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&B.ensureWorkerThreads()}z.prototype.exec=function(A,E,J){if(E&&!Array.isArray(E))throw new TypeError('Array expected as argument "params"');if(typeof A=="string"){var Se=P.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ve=this.tasks,Ze={method:A,params:E,resolver:Se,timeout:null,options:J};Ve.push(Ze);var kt=Se.promise.timeout;return Se.promise.timeout=function(qe){return Ve.indexOf(Ze)!==-1?(Ze.timeout=qe,Se.promise):kt.call(Se.promise,qe)},this._next(),Se.promise}else{if(typeof A=="function")return this.exec("run",[String(A),E],J);throw new TypeError('Function or string expected as argument "method"')}},z.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var A=this;return this.exec("methods").then(function(E){var J={};return E.forEach(function(Se){J[Se]=function(){return A.exec(Se,Array.prototype.slice.call(arguments))}}),J})},z.prototype._next=function(){if(this.tasks.length>0){var A=this._getWorker();if(A){var E=this,J=this.tasks.shift();if(J.resolver.promise.pending){var Se=A.exec(J.method,J.params,J.resolver,J.options).then(E._boundNext).catch(function(){if(A.terminated)return E._removeWorker(A)}).then(function(){E._next()});typeof J.timeout=="number"&&Se.timeout(J.timeout)}else E._next()}}},z.prototype._getWorker=function(){for(var A=this.workers,E=0;E<A.length;E++){var J=A[E];if(J.busy()===!1)return J}return A.length<this.maxWorkers?(J=this._createWorkerHandler(),A.push(J),J):null},z.prototype._removeWorker=function(A){var E=this;return be.releasePort(A.debugPort),this._removeWorkerFromList(A),this._ensureMinWorkers(),new P(function(J,Se){A.terminate(!1,function(Ve){E.onTerminateWorker({forkArgs:A.forkArgs,forkOpts:A.forkOpts,workerThreadOpts:A.workerThreadOpts,script:A.script}),Ve?Se(Ve):J(A)})})},z.prototype._removeWorkerFromList=function(A){var E=this.workers.indexOf(A);E!==-1&&this.workers.splice(E,1)},z.prototype.terminate=function(A,E){var J=this;this.tasks.forEach(function(qe){qe.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var Se=function(qe){be.releasePort(qe.debugPort),this._removeWorkerFromList(qe)},Ve=Se.bind(this),Ze=[],kt=this.workers.slice();return kt.forEach(function(qe){var ur=qe.terminateAndNotify(A,E).then(Ve).always(function(){J.onTerminateWorker({forkArgs:qe.forkArgs,forkOpts:qe.forkOpts,workerThreadOpts:qe.workerThreadOpts,script:qe.script})});Ze.push(ur)}),P.all(Ze)},z.prototype.stats=function(){var A=this.workers.length,E=this.workers.filter(function(J){return J.busy()}).length;return{totalWorkers:A,busyWorkers:E,idleWorkers:A-E,pendingTasks:this.tasks.length,activeTasks:E}},z.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var A=this.workers.length;A<this.minWorkers;A++)this.workers.push(this._createWorkerHandler())},z.prototype._createWorkerHandler=function(){var A=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new B(A.script||this.script,{forkArgs:A.forkArgs||this.forkArgs,forkOpts:A.forkOpts||this.forkOpts,workerOpts:A.workerOpts||this.workerOpts,workerThreadOpts:A.workerThreadOpts||this.workerThreadOpts,debugPort:be.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function _e(A){if(!O(A)||!de(A)||A<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function ce(A){if(!O(A)||!de(A)||A<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function O(A){return typeof A=="number"}function de(A){return Math.round(A)==A}return he=z,he}var Ne={},lt,pi;function gi(){if(pi)return lt;pi=1;function w(P,B){this.message=P,this.transfer=B}return lt=w,lt}var mi;function fi(){return mi||(mi=1,function(w){var P=gi(),B="__workerpool-terminate__",I={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")I.on=function(O,de){addEventListener(O,function(A){de(A.data)})},I.send=function(O,de){de?postMessage(O,de):postMessage(O)};else if(typeof process<"u"){var X;try{X=Er}catch(O){if(!(R(O)==="object"&&O!==null&&O.code==="MODULE_NOT_FOUND"))throw O}if(X&&X.parentPort!==null){var be=X.parentPort;I.send=be.postMessage.bind(be),I.on=be.on.bind(be),I.exit=process.exit.bind(process)}else I.on=process.on.bind(process),I.send=function(O){process.send(O)},I.on("disconnect",function(){process.exit(1)}),I.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function z(O){return Object.getOwnPropertyNames(O).reduce(function(de,A){return Object.defineProperty(de,A,{value:O[A],enumerable:!0})},{})}function _e(O){return O&&typeof O.then=="function"&&typeof O.catch=="function"}I.methods={},I.methods.run=function(O,de){var A=new Function("return ("+O+").apply(null, arguments);");return A.apply(A,de)},I.methods.methods=function(){return Object.keys(I.methods)},I.terminationHandler=void 0,I.cleanupAndExit=function(O){var de=function(){I.exit(O)};if(!I.terminationHandler)return de();var A=I.terminationHandler(O);_e(A)?A.then(de,de):de()};var ce=null;I.on("message",function(O){if(O===B)return I.cleanupAndExit(0);try{var de=I.methods[O.method];if(de){ce=O.id;var A=de.apply(de,O.params);_e(A)?A.then(function(E){E instanceof P?I.send({id:O.id,result:E.message,error:null},E.transfer):I.send({id:O.id,result:E,error:null}),ce=null}).catch(function(E){I.send({id:O.id,result:null,error:z(E)}),ce=null}):(A instanceof P?I.send({id:O.id,result:A.message,error:null},A.transfer):I.send({id:O.id,result:A,error:null}),ce=null)}else throw new Error('Unknown method "'+O.method+'"')}catch(E){I.send({id:O.id,result:null,error:z(E)})}}),I.register=function(O,de){if(O)for(var A in O)O.hasOwnProperty(A)&&(I.methods[A]=O[A]);de&&(I.terminationHandler=de.onTerminate),I.send("ready")},I.emit=function(O){if(ce){if(O instanceof P){I.send({id:ce,isEvent:!0,payload:O.message},O.transfer);return}I.send({id:ce,isEvent:!0,payload:O})}},w.add=I.register,w.emit=I.emit}(Ne)),Ne}var us=n.platform,vi=n.isMainThread,ps=n.cpus;function ht(w,P){var B=je();return new B(w,P)}var jt=i.pool=ht;function Mr(w,P){var B=fi();B.add(w,P)}var vt=i.worker=Mr;function Me(w){var P=fi();P.emit(w)}var bi=i.workerEmit=Me,gs=u(),We=gs.Promise,ms=i.Promise=We,fs=i.Transfer=gi(),vs=i.platform=us,bs=i.isMainThread=vi,ys=i.cpus=ps;r.Promise=ms,r.Transfer=fs,r.cpus=ys,r.default=i,r.isMainThread=bs,r.platform=vs,r.pool=jt,r.worker=vt,r.workerEmit=bi,Object.defineProperty(r,"__esModule",{value:!0})})})(cn,cn.exports);var qc=cn.exports,nt=class{constructor(t,e){h(this,"_value");h(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Zo=class extends nt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Xc=class extends nt{constructor(){super(...arguments);h(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Jc=class extends nt{constructor(){super(...arguments);h(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const i={...e};return e.from<r.min&&(i.from=r.min),e.to>r.max&&(i.to=r.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=e),i={from:r[0].from,to:r[r.length-1].to};this.fixedRange?this.setFixedRange(i):this.imposeRange(i)}}},Kc=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Zc=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],ed=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],td=Kc(),or={iron:{pixels:ed,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Zc,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:td,name:"Stupn\u011B \u0161ed\xE9",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},rd=class extends nt{get availablePalettes(){return or}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},id=(On=class{},h(On,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),On),sd=(Fe=class extends id{static humanRangeDates(e,r){return e=Fe.inputToDate(e),r=Fe.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Fe.humanDate(e):[Fe.humanDate(e),Fe.humanDate(r)].join(" - ")}static human(e){return`${Fe.humanDate(e)} ${Fe.humanTime(e,!0)} `}},h(Fe,"isoDate",e=>(e=Fe.inputToDate(e),hn(e,{representation:"date"}))),h(Fe,"isoTime",e=>(e=Fe.inputToDate(e),hn(e,{representation:"time"}))),h(Fe,"isoComplete",e=>(e=Fe.inputToDate(e),hn(e))),h(Fe,"humanTime",(e,r=!1)=>(e=Fe.inputToDate(e),Cr(e,r?"HH:mm:ss":"HH:mm"))),h(Fe,"humanDate",(e,r=!1)=>(e=Fe.inputToDate(e),Cr(e,r?"d. M.":"d. M. yyyy"))),Fe),Yi=class{},nd=class extends Yi{constructor(e,r,i,s,n,o,l,u,p,f,m){super();h(this,"id");h(this,"horizontalLimit");h(this,"verticalLimit");h(this,"group");h(this,"url");h(this,"thermalUrl");h(this,"visibleUrl");h(this,"fileName");h(this,"frameCount");h(this,"signature","unknown");h(this,"version",-1);h(this,"streamCount",-1);h(this,"fileDataType",-1);h(this,"unit",-1);h(this,"width");h(this,"height");h(this,"timestamp");h(this,"duration");h(this,"min");h(this,"max");h(this,"_isHover",!1);h(this,"root",null);h(this,"canvasLayer");h(this,"visibleLayer");h(this,"cursorLayer");h(this,"listenerLayer");h(this,"timeline");h(this,"cursorValue");h(this,"analysis");h(this,"recording");h(this,"_mounted",!1);h(this,"_pixels");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=m,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=o,this.duration=l,this.min=u,this.max=p,this.frameCount=f,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}getColorAtPoint(e,r){var o,l;const i=this.getTemperatureAtPoint(e,r),s=(o=this.group.registry.range.value)==null?void 0:o.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(s!==void 0&&n!==void 0){const u=(i-s)/(n-s),p=Math.round(255*u);return this.group.registry.palette.currentPalette.pixels[p]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},Gi=class{constructor(t){h(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},It=class Qn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Qn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Qn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},od=class extends Gi{constructor(e){super(e);h(this,"container");h(this,"canvas");h(this,"context");h(this,"_opacity",1);this.container=It.createCanvasContainer(),this.canvas=It.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,o,l,u)=>{const p=new OffscreenCanvas(n,o).getContext("2d"),f=s-i;for(let y=0;y<=n;y++)for(let k=0;k<=o;k++){const x=y+k*n;let C=l[x];C<i&&(C=i),C>s&&(C=s);const R=(C-i)/f,q=Math.round(255*R),T=u[q];p.fillStyle=T,p.fillRect(y,k,1,1)}const m=p.getImageData(0,0,n,o);return await createImageBitmap(m)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},ad=class extends Gi{constructor(e){super(e);h(this,"layerRoot");h(this,"center");h(this,"axisX");h(this,"axisY");h(this,"label");h(this,"_show",!1);h(this,"_hover",!1);this.layerRoot=It.createCursorLayerRoot(),this.center=It.createCursorLayerCenter(),this.axisX=It.createCursorLayerX(),this.axisY=It.createCursorLayerY(),this.label=It.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(r*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${i.toFixed(3)} \xB0C`)}setLabel(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} \xB0C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},ld=class extends Gi{constructor(e){super(e);h(this,"container");this.container=It.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},hd=class extends Gi{constructor(e,r){super(e);h(this,"container");h(this,"image");this._url=r,this.container=It.createVisibleLayer(),this._url&&(this.image=It.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Be=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},cd=class{constructor(t,e){h(this,"_currentFrame");h(this,"bufferSize",4);h(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(n=>n.index>=e&&n.index<r),s=i.filter(n=>!this.preloadedSteps.includes(n));return(await Promise.all(s.map(n=>this.drive.parent.service.frameData(n.index)))).forEach((n,o)=>{const l=s[o];this.buffer.set(l,n)}),this.preloadedSteps.forEach(n=>{i.includes(n)||this.buffer.delete(n)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},dn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},dd=class extends nt{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));h(this,"_playbackSpeed",1);h(this,"startTimestampRelative");h(this,"endTimestampRelative");h(this,"stepsByAbsolute",new Map);h(this,"stepsByRelative",new Map);h(this,"stepsByIndex",new Map);h(this,"relativeSteps",[]);h(this,"_currentStep");h(this,"isSequence");h(this,"_isPlaying",!1);h(this,"timer");h(this,"buffer");h(this,"callbackdPlaybackSpeed",new Be);h(this,"callbacksPlay",new Be);h(this,"callbacksPause",new Be);h(this,"callbacksStop",new Be);h(this,"callbacksEnd",new Be);h(this,"callbacksChangeFrame",new Be);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new cd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return dn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),Cr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(l=>l.relative<=e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokou\u0161\xEDm se hr\xE1t"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},ud=class extends nt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},pd=class extends nt{constructor(){super(...arguments);h(this,"stream");h(this,"recorder");h(this,"mimeType");h(this,"_isRecording",!1);h(this,"_mayStop",!0);h(this,"recordedChunks",[]);h(this,"callbackMayStop",new Be)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(s=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(s)&&(this.mimeType=s)});const r={mimeType:this.mimeType},i=new MediaRecorder(e,r);return{stream:e,recorder:i,options:r}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},gd=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},ea=class{constructor(t,e,r){h(this,"_selected",!1);h(this,"onSelected",new Be);h(this,"onDeselected",new Be);h(this,"onValues",new Be);h(this,"onMoveOrResize",new Be);h(this,"layerRoot");h(this,"points",new Map);h(this,"left");h(this,"top");h(this,"width");h(this,"height");h(this,"_min");h(this,"_max");h(this,"_avg");h(this,"_color","black");h(this,"onSetColor",new Be);h(this,"initialColor");h(this,"activeColor","yellow");h(this,"inactiveColor","black");h(this,"ready",!1);this.key=t,this.file=e,this.initialColor=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},ta=class{constructor(t,e,r,i,s){h(this,"_x");h(this,"onX",new Be);h(this,"_y");h(this,"onY",new Be);h(this,"_color");h(this,"_active",!1);h(this,"_isHover",!1);h(this,"_isDragging",!1);h(this,"container");h(this,"innerElement");h(this,"onMouseEnter",new Be);h(this,"onMouseLeave",new Be);h(this,"onActivate",new Be);h(this,"onDeactivate",new Be);this.key=t,this.analysis=i,this._x=r,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,o=this.y+r;return e>=i&&e<=s&&t>=n&&t<=o}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},md=class extends ta{constructor(t,e,r,i,s){super(t,e,r,i,s),this._color=s,this.setColor(s)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},fd=class extends md{constructor(){super(...arguments);h(this,"isMoving",!1)}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,r=>{e.x!==r&&(e.x=r)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,r=>{e.y!==r&&(e.y=r)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},ra=class extends ea{constructor(e,r,i,s,n,o,l){super(e,i,r);h(this,"tl");h(this,"tr");h(this,"bl");h(this,"br");h(this,"area");let u=n,p=s;o!==void 0&&l!==void 0&&(u=n+o,p=s+l),this.area=this.buildArea(s,n,o,l),this.tl=this.addPoint("tl",s,n),this.tr=this.addPoint("tr",s,u),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,u),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(f=>f.projectInnerPositionToDom())}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,i,s){const n=Math.min(e,s),o=Math.max(e,s),l=Math.min(r,i),u=Math.max(r,i)-l,p=o-n;return{top:n,left:l,width:u,height:p}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,r=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=r-e,this.height=s-i,this.area.left=this.left,this.area.height=this.height,this.area.width=this.width,this.area.top=this.top}addPoint(e,r,i){const s=new fd(e,r,i,this,this.color);return this.points.set(e,s),s}},ia=class{constructor(t,e,r,i,s){h(this,"element");h(this,"_top");h(this,"_width");h(this,"_left");h(this,"_height");this.analysis=t,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},sa=class extends ia{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},na=class cs extends ra{static startAddingAtPoint(e,r,i,s,n){const o=new cs(e,r,i,s,n);return o.br.activate(),o}static build(e,r,i,s,n,o,l){const{top:u,left:p,width:f,height:m}=cs.calculateDimensionsFromCorners(s,n,o,l);return new cs(e,r,i,u,p,f,m)}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new sa(this,e,r,e+i,r+s):new sa(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,o=-1/0,l=0,u=0;for(let p=i;p<s;p++){const f=this.file.width*p;for(let m=e;m<=r;m++)if(this.isWithin(m,p)){const y=this.file.pixels[f+m];y<n&&(n=y),y>o&&(o=y),u+=y,l++}}return{min:n,max:o,avg:u/l}}isWithin(e,r){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),o=(r-s)/(this.height/2);return n*n+o*o<=1}},vd=(at=class extends ta{constructor(r,i,s,n,o){super(r,i,s,n,o);h(this,"axisX");h(this,"axisY");h(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(r=1){return Math.round(at.size*r).toString()+"px"}mayMoveToX(r){return r<=this.file.width&&r>=0}mayMoveToY(r){return r<=this.file.height&&r>=0}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top=at.sizePx(-.5),r.style.left=at.sizePx(-.5),r.style.width=at.sizePx(),r.style.height=at.sizePx(),r}buildAxisX(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="100%",r.style.height="1px",r.style.left="0px",r.style.top=at.sizePx(.5),r}buildAxisY(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="1px",r.style.height="100%",r.style.left=at.sizePx(.5),r.style.top="0px",r}buildCenter(){const r=document.createElement("div");r.style.position="absolute",r.style.top=`calc( ${at.sizePx(.5)} - 3px )`,r.style.left=`calc( ${at.sizePx(.5)} - 3px )`,r.style.width="5px",r.style.height="5px",r.style.borderStyle="solid",r.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(r.style.backgroundColor=i),r}onSetColor(r){this.axisX&&(this.axisX.style.backgroundColor=r),this.axisY&&(this.axisY.style.backgroundColor=r),this.center&&(this.center.style.borderColor=r)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(r=void 0){var i,s,n;if(r===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const o=`0 0 5px 2px ${r}`;this.axisX&&(this.axisX.style.boxShadow=o),this.axisY&&(this.axisY.style.boxShadow=o),this.center&&(this.center.style.boxShadow=o)}}},h(at,"size",20),at),bd=class Wa extends ea{constructor(r,i,s,n,o){super(r,s,i);h(this,"center");this.top=n,this.left=o,this.width=1,this.height=1,this.center=new vd("center",n,o,this,i),this.points.set("center",this.center),this.center.projectInnerPositionToDom()}static addAtPoint(r,i,s,n,o){return new Wa(r,i,s,n,o)}setColorCallback(r){this.center.setColor(r)}isWithin(r,i){return this.center.isWithin(i,r)}getValues(){const r=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:r,max:r,avg:r}}},oa=class extends ia{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},aa=class ds extends ra{static startAddingAtPoint(e,r,i,s,n){const o=new ds(e,r,i,s,n);return o.br.activate(),o}static build(e,r,i,s,n,o,l){const{top:u,left:p,width:f,height:m}=ds.calculateDimensionsFromCorners(s,n,o,l);return new ds(e,r,i,u,p,f,m)}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new oa(this,e,r,e+i,r+s):new oa(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,o=-1/0,l=0,u=0;for(let p=i;p<s;p++){const f=this.file.width*p;for(let m=e;m<=r;m++){const y=this.file.pixels[f+m];y<n&&(n=y),y>o&&(o=y),u+=y,l++}}return{min:n,max:o,avg:u/l}}},yd=class extends Map{constructor(e){super();h(this,"layers",[]);h(this,"onAdd",new Be);h(this,"onRemove",new Be);h(this,"onSelectionChange",new Be);h(this,"colors",["orange","lightblue","green","brown","yellow","blue","pink"]);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var r;this.has(e)&&((r=this.get(e))==null||r.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,r){const i=aa.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeRectAt(e,r,i,s,n){const o=aa.build(e,this.getNextColor(),this.drive.parent,r,i,s,n);return this.addAnalysis(o),o}createEllipsisFrom(e,r){const i=na.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeEllipsisAt(e,r,i,s,n){const o=na.build(e,this.getNextColor(),this.drive.parent,r,i,s,n);return this.addAnalysis(o),o}createPointAt(e,r){const i=bd.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.length;return e<this.colors.length?this.colors[e]:this.colors[e%this.colors.length]}getNextName(e){return`${e} ${this.all.length}`}},Ad=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...r,...s]},[])}},wd=class extends nt{constructor(){super(...arguments);h(this,"layers",new yd(this));h(this,"points",new Ad(this));h(this,"bindedPointerMoveListener");h(this,"bindedPointerDownListener");h(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const r=this.listenerLayerContainer.clientWidth,i=this.parent.width,s=e.layerX/r,n=Math.round(i*s),o=this.listenerLayerContainer.clientHeight,l=this.parent.height,u=e.layerY/o;return{top:Math.round(l*u),left:n}}activateListeners(){this.bindedPointerMoveListener=e=>{const r=this.getRelativePosition(e);this.points.all.forEach(i=>{i.active&&this.currentTool.onPointMove(i,r.top,r.left);const s=i.isWithin(r.top,r.left);s?this.currentTool.onPointEnter(i):s||this.currentTool.onPointLeave(i)})},this.bindedPointerDownListener=e=>{const r=this.getRelativePosition(e);this.currentTool.onCanvasClick(r.top,r.left,this.parent),this.points.all.forEach(i=>{i.isWithin(r.top,r.left)&&this.currentTool.onPointDown(i)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},la=class za extends nd{constructor(r,i,s,n,o,l,u,p,f,m,y,k,x,C,R,q,T){super(r,i.thermalUrl,s,n,f,o,u,y,k,l,i.visibleUrl);h(this,"_export");this.group=r,this.service=i,this.width=s,this.height=n,this.timestamp=o,this.frameCount=l,this.duration=u,this.frameInterval=p,this.fps=m,this.min=y,this.max=k,this.bytesize=x,this.averageEmissivity=C,this.averageReflectedKelvins=R,this.firstFrame=q,this.timelineData=T,this.pixels=q.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new gd(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new od(this),this.visibleLayer=new hd(this,this.visibleUrl),this.cursorLayer=new ad(this),this.listenerLayer=new ld(this),this.cursorValue=new ud(this,void 0),this.timeline=new dd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new pd(this,!1),this.analysis=new wd(this,[]),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}this.analysis.value.forEach(i=>i.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new za(r,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=r=>{this.cursorLayer.show=!0,this.isHover=!0;const i=this.width,s=this.root.clientWidth,n=i/s,o=Math.round(r.offsetX*n),l=Math.round(r.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:o,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(r){if(r!==void 0){const i=this.group.tool.value.getLabelValue(r.x,r.y,this);this.cursorLayer.setLabel(r.x,r.y,i),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(r)}},xd=class extends nt{constructor(){super(...arguments);h(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},kd=class extends Zo{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},Vi=class{constructor(t){h(this,"active",!1);this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},ha=class extends Vi{constructor(){super(...arguments);h(this,"key","inspect");h(this,"name","Inspect temperatures");h(this,"description","Use mouse to inspect temperature values.");h(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);h(this,"getLabelValue",(e,r,i)=>i===void 0?"":i.getTemperatureAtPoint(e,r).toFixed(2)+" \xB0C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},un=class extends Vi{},Cd=class extends un{constructor(){super(...arguments);h(this,"key","add-ellipsis");h(this,"name","Add an elyptical analysis");h(this,"description","Click and drag to add an elyptical analysis.");h(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);h(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call())}onPointLeave(){}onPointEnter(){}},Ed=class extends un{constructor(){super(...arguments);h(this,"key","add-point");h(this,"name","Add a point analysis");h(this,"description","Click to add a point analysis.");h(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);h(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createPointAt(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call()}onPointMove(){}onPointLeave(){}onPointEnter(){}},Sd=class extends un{constructor(){super(...arguments);h(this,"key","add-rect");h(this,"name","Add a rectangular analysis");h(this,"description","Click and drag to add a rectangular analysis.");h(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);h(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call())}onPointLeave(){}onPointEnter(){}},Id=class extends Vi{constructor(){super(...arguments);h(this,"key","edit");h(this,"name","Edit analysis");h(this,"description","Drag corners of any selected analysis.");h(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call())}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,r,i){const s=i.analysis.layers.all.filter(n=>n.isWithin(e,r)).map(n=>n.selected?`<span style="color:${n.initialColor}">${n.key}</span>`:`<s style="color:${n.initialColor}">${n.key}</s>`);return`${s.length>0?s.join("<br />")+"<br />":""}X: ${e}<br />Y: ${r}`}},Bd=[ha,Ed,Sd,Cd,Id],Ld=t=>{const e=Bd.map(r=>{const i=new r(t);return[i.key,i]});return Object.fromEntries(e)},Pd=class extends nt{constructor(e,r){super(e,r);h(this,"_tools",Ld(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof Vi?this.value=e:this.value=this.tools[e]}},$d=class extends Yi{constructor(e,r,i,s){super();h(this,"hash",Math.random());h(this,"minmax",new kd(this,void 0));h(this,"tool",new Pd(this,new ha(this)));h(this,"files",new xd(this,[]));h(this,"cursorPosition",new Xc(this,void 0));h(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},ca=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},qi=class Ya extends ca{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new Ya(e.url,e.code,e.message)}},da=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Sr=class extends ca{constructor(e,r,i,s,n){super(s,n);h(this,"id",Math.random());h(this,"baseInfoCache");h(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),s=la.fromService(e,this,r,i);return e.files.addFile(s),s}},Rd=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(ie,se)=>{const ve=ie.getBigInt64(se,!0),ge=62135596800000n,le=10000n,he=24n*60n*60n*1000n*le,xe=0x4000000000000000n,je=0x8000000000000000n;let Ne=ve&0x3fffffffffffffffn;ve&je&&(Ne>xe-he&&(Ne-=xe),Ne<0&&(Ne+=he));const lt=Ne/le-ge;return Number(lt)},o=n(e,5),l=e.getUint8(15);let u=2;l===1&&(u=4);const p=57,f=r*i*u,m=p+f,y=t.slice(25),k=y.byteLength/m,x=ie=>{const se=ie*m,ve=se+m,ge=y.slice(se,ve),le=new DataView(ge),he=le.getFloat32(8,!0),xe=le.getFloat32(12,!0),je=n(le,0),Ne=le.getFloat32(24,!0),lt=le.getFloat32(28,!0);return{timestamp:je,min:he,max:xe,emissivity:Ne,reflectedKelvins:lt}},C=[];for(let ie=0;ie<k;ie++){const se=x(ie);C.push(se)}const R={emissivity:0,reflectedKelvins:0};let q=1/0,T=-1/0;const K=[];C.forEach(ie=>{R.emissivity=R.emissivity+ie.emissivity,R.reflectedKelvins=R.reflectedKelvins+ie.reflectedKelvins,ie.min<q&&(q=ie.min),ie.max>T&&(T=ie.max),K.push(ie.timestamp)});const pe=K[0],fe=[];K.forEach((ie,se)=>{const ve=K[se+1];let ge=0;ve===void 0&&(ge=0),ge=ve-ie;const le=ie-pe;fe.push({absolute:ie,relative:le,offset:isNaN(ge)?0:ge,index:se})});const Re=C[C.length-1].timestamp-C[0].timestamp,j=Re/k,Ee=1e3/j;return{width:r,height:i,timestamp:o,bytesize:s,frameCount:k,duration:Re,frameInterval:j,fps:Ee,timeline:fe,min:q,max:T,averageEmissivity:R.emissivity/C.length,averageReflectedKelvins:R.reflectedKelvins/C.length}},Dd=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),o=i===1?4:2,l=57,u=s*n*o,p=l+u,f=t.slice(25),m=e*p,y=m+p;return{array:f.slice(m,y),dataType:i}},Md=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,o=24n*60n*60n*1000n*n,l=0x4000000000000000n,u=0x8000000000000000n;let p=i&0x3fffffffffffffffn;i&u&&(p>l-o&&(p-=l),p<0&&(p+=o));const f=p/n-s,m=Number(f),y=r.getFloat32(8,!0),k=r.getFloat32(12,!0),x=r.getFloat32(24,!0),C=r.getFloat32(28,!0),R=t.slice(57);let q=[];if(e===0){const T=new Uint16Array(R),K=Math.abs(y-k),pe=65535;T.forEach(fe=>{const Re=fe/pe;q.push(y+K*Re)})}else e===1&&(q=Array.from(new Float32Array(R)));return{timestamp:m,min:y,max:k,emissivity:x,reflectedKelvins:C,pixels:q}},_d=async t=>{let e=[];const r=async x=>{const C=new DataView(x.slice(0,25)),R=C.getUint8(15),q=C.getUint16(17,!0),T=C.getUint16(19,!0),K=R===1?4:2,pe=57,fe=q*T*K,Re=pe+fe,j=x.slice(25),Ee=j.byteLength/Re;let ie=[];for(let se=0;se<Ee;se++){const ve=se*Re+57,ge=ve+fe,le=j.slice(ve,ge);R===0||R===1&&(ie=ie.concat(Array.from(new Float32Array(le))))}return ie};(await Promise.all(t.map(x=>r(x)))).forEach(x=>{e=e.concat(x)}),e.sort((x,C)=>x-C);const i=e[0],s=e[e.length-1],n=Math.abs(i-s),o=200,l=n/o,u=[];let p=[...e];for(let x=0;x<o;x++){const C=i+l*x,R=C+l,q=p.findIndex(fe=>fe>R),T=p.slice(0,q-1).length,K=T/e.length*100,pe={from:C,to:R,count:T,percentage:K};u.push(pe),p=p.slice(q)}const f=[...u].sort((x,C)=>x.percentage-C.percentage),m=f[0].percentage,y=f[f.length-1].percentage,k=Math.abs(m-y);return u.map(x=>({...x,height:x.percentage/k*100}))},Od=(t,e)=>{const r=e.endsWith("lrc"),i=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&i},Qd=[{extension:"lrc",minme:"application/octet-stream"}],Ud={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Qd,is:Od,baseInfo:Rd,getFrameSubset:Dd,frameData:Md,registryHistogram:_d},ua=Object.freeze(Ud),Td={LrcParser:ua},pa=Object.values(Td),ga=(t,e)=>{const r=pa.find(i=>i.is(t,e));if(r===void 0)throw new da(2,e,`No parser found for '${e}'.`);return r},ma=pa.map(t=>t.extensions),Fd=ma.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),jd=class Ga{constructor(e,r,i){h(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new Ga(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new qi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=ga(i,this.thermalUrl);return this.pocessTheService(new Sr(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof da)return this.pocessTheService(qi.fromError(s));throw s}}pocessTheService(e){return e}},Nd=class Va{constructor(e,r){h(this,"_hover",!1);h(this,"onMouseEnter",new Be);h(this,"onMouseLeave",new Be);h(this,"onDrop",new Be);h(this,"onProcessingEnd",new Be);h(this,"input");h(this,"hydrated",!1);h(this,"bindedEnterListener");h(this,"bindedLeaveListener");h(this,"bindedDropListener");h(this,"bindedInputChangeListener");h(this,"bindedDragoverListener");h(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const i=new Va(e,r);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const i=r.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Fd,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},Hd=class{constructor(t){h(this,"requestsByUrl",new Map);h(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const r=new pn(t).addOrGetRegistry(e);return{service:r.service,registry:r}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=ga(e,t.name);return new Sr(this,e,r,t.name)}catch(e){return new qi(t.name,3,e.message)}}handleDropzone(t){return Nd.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=jd.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},Wd=class extends nt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},zd=class extends nt{constructor(){super(...arguments);h(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new $d(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Yd=class extends nt{constructor(){super(...arguments);h(this,"_resolution",150);h(this,"buffer",new Map);h(this,"bufferPixelsCount",0);h(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,o)=>{let l=r.reduce((y,k)=>{const x=k.reduce((C,R)=>[...C,...R],[]);return[...y,...x]},[]).sort((y,k)=>y-k);const u=n/o;let p=i+u;const f=new Map;let m=0;for(;p!==!1;){const y=l.findIndex(C=>C>p),k=l.slice(0,y).length;f.set(p-u/2,k),m+=k,l=l.slice(y);const x=p+u;p=x<s?x:!1}return{result:f,resultCount:m}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const e=this.parent.groups.value.map(i=>i.files.value).reduce((i,s)=>(i=i.concat(s),i),[]).map(i=>i.service.buffer),r=await this.parent.pool.exec(ua.registryHistogram,[e]);this.value=r}},Gd=class extends nt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Vd=class extends Zo{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((e,r)=>r.minmax.value===void 0?e:{min:r.minmax.value.min<e.min?r.minmax.value.min:e.min,max:r.minmax.value.max>e.max?r.minmax.value.max:e.max},{min:1/0,max:-1/0})}},qd=class extends Yi{constructor(e,r,i){super();h(this,"hash",Math.random());h(this,"groups",new zd(this,[]));h(this,"opacity",new Wd(this,1));h(this,"minmax",new Vd(this,void 0));h(this,"loading",new Gd(this,!1));h(this,"range",new Jc(this,void 0));h(this,"histogram",new Yd(this,[]));h(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),o=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:o}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async n=>n instanceof Sr?await n.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Sr&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Xd="AGFzbQEAAAABMgpgAX8AYAJ/fwBgAABgAn9/AX9gBH9/f38AYAN/f34AYAABf2AAAXxgAX8Bf2ABfwF8AhgCA2VudgVhYm9ydAAEA2VudgRzZWVkAAcDFRQDAAABAgABAQUCBgMDCAACAAIBCQUDAQABBk8PfwFBAAt/AUEAC38BQQALfwFBAAt/AUEAC38BQQALfwFBAAt/AUEAC38BQQALfwFBAAt/AUEAC34BQgALfgFCAAt/AEGQDQt/AUGojQILB08IA2FkZAACBV9fbmV3AA4FX19waW4ADwdfX3VucGluABAJX19jb2xsZWN0ABELX19ydHRpX2Jhc2UDDQZtZW1vcnkCAAhiYXNlSW5mbwAVCAETDAETCoUfFAcAIAAgAWoLYQEBfyAAKAIEQXxxIgFFBEAgACgCCEUgAEGojQJJcUUEQEEAQZAJQYABQRIQAAALDwsgACgCCCIARQRAQQBBkAlBhAFBEBAAAAsgASAANgIIIAAgASAAKAIEQQNxcjYCBAufAQEDfyAAIwFGBEAgACgCCCIBRQRAQQBBkAlBlAFBHhAAAAsgASQBCyAAEAMjAiEBIAAoAgwiAkECTQR/QQEFIAJBkA0oAgBLBEBB8AlBsApBFUEcEAAACyACQQJ0QZQNaigCAEEgcQshAyABKAIIIQIgACMARUECIAMbIAFyNgIEIAAgAjYCCCACIAAgAigCBEEDcXI2AgQgASAANgIIC18AIAAgATYCACABBEAgAEUEQEEAQZAJQacCQQ4QAAALIwAgAUEUayIBKAIEQQNxRgRAIABBFGsoAgRBA3EiACMARUYEQCABEAQFIwNBAUYgAEEDRnEEQCABEAQLCwsLC2IBAn9B8AkQB0GgCBAHQeAKEAdBoAwQB0HgDBAHIwciASgCBEF8cSEAA0AgACABRwRAIAAoAgRBA3FBA0cEQEEAQZAJQaABQRAQAAALIABBFGoQEiAAKAIEQXxxIQAMAQsLCycAIABFBEAPCyMAIABBFGsiACgCBEEDcUYEQCAAEAQjBkEBaiQGCwuKAgEEfyABKAIAIgNBAXFFBEBBAEHgC0GMAkEOEAAACyADQXxxIgNBDEkEQEEAQeALQY4CQQ4QAAALIANBgAJJBH8gA0EEdgVBH0H8////AyADIANB/P///wNPGyIDZ2siBEEHayECIAMgBEEEa3ZBEHMLIgNBEEkgAkEXSXFFBEBBAEHgC0GcAkEOEAAACyABKAIIIQUgASgCBCIEBEAgBCAFNgIICyAFBEAgBSAENgIECyABIAAgAkEEdCADakECdGoiASgCYEYEQCABIAU2AmAgBUUEQCAAIAJBAnRqIgEoAgRBfiADd3EhAyABIAM2AgQgA0UEQCAAIAAoAgBBfiACd3E2AgALCwsLwwMBBX8gAUUEQEEAQeALQckBQQ4QAAALIAEoAgAiA0EBcUUEQEEAQeALQcsBQQ4QAAALIAFBBGogASgCAEF8cWoiBCgCACICQQFxBEAgACAEEAggASADQQRqIAJBfHFqIgM2AgAgAUEEaiABKAIAQXxxaiIEKAIAIQILIANBAnEEQCABQQRrKAIAIgEoAgAiBkEBcUUEQEEAQeALQd0BQRAQAAALIAAgARAIIAEgBkEEaiADQXxxaiIDNgIACyAEIAJBAnI2AgAgA0F8cSICQQxJBEBBAEHgC0HpAUEOEAAACyAEIAFBBGogAmpHBEBBAEHgC0HqAUEOEAAACyAEQQRrIAE2AgAgAkGAAkkEfyACQQR2BUEfQfz///8DIAIgAkH8////A08bIgJnayIDQQdrIQUgAiADQQRrdkEQcwsiAkEQSSAFQRdJcUUEQEEAQeALQfsBQQ4QAAALIAAgBUEEdCACakECdGooAmAhAyABQQA2AgQgASADNgIIIAMEQCADIAE2AgQLIAAgBUEEdCACakECdGogATYCYCAAIAAoAgBBASAFdHI2AgAgACAFQQJ0aiIAIAAoAgRBASACdHI2AgQLzgEBA38gAiABrVQEQEEAQeALQf4CQQ4QAAALIAFBE2pBcHFBBGshASAAKAKgDCIDBEAgA0EEaiABSwRAQQBB4AtBhQNBEBAAAAsgAyABQRBrIgVGBEAgAygCACEEIAUhAQsFIABBpAxqIAFLBEBBAEHgC0GSA0EFEAAACwsgAqdBcHEgAWsiA0EUSQRADwsgASAEQQJxIANBCGsiA0EBcnI2AgAgAUEANgIEIAFBADYCCCABQQRqIANqIgNBAjYCACAAIAM2AqAMIAAgARAJC5cBAQJ/PwAiAUEATAR/QQEgAWtAAEEASAVBAAsEQAALQbCNAkEANgIAQdCZAkEANgIAA0AgAEEXSQRAIABBAnRBsI0CakEANgIEQQAhAQNAIAFBEEkEQCAAQQR0IAFqQQJ0QbCNAmpBADYCYCABQQFqIQEMAQsLIABBAWohAAwBCwtBsI0CQdSZAj8ArEIQhhAKQbCNAiQJC+UDAQN/AkACQAJAAkAjAw4DAAECAwtBASQDQQAkBhAGIwIkASMGDwsjAEUhASMBKAIEQXxxIQADQCAAIwJHBEAgACQBIAEgACgCBCICQQNxRwRAIAAgAkF8cSABcjYCBEEAJAYgAEEUahASIwYPCyAAKAIEQXxxIQAMAQsLQQAkBhAGIwIjASgCBEF8cUYEQCMOIQADQCAAQaiNAkkEQCAAKAIAEAcgAEEEaiEADAELCyMBKAIEQXxxIQADQCAAIwJHBEAgASAAKAIEIgJBA3FHBEAgACACQXxxIAFyNgIEIABBFGoQEgsgACgCBEF8cSEADAELCyMIIQAjAiQIIAAkAiABJAAgACgCBEF8cSQBQQIkAwsjBg8LIwEiACMCRwRAIAAoAgQiAUF8cSQBIwBFIAFBA3FHBEBBAEGQCUHlAUEUEAAACyAAQaiNAkkEQCAAQQA2AgQgAEEANgIIBSMEIAAoAgBBfHFBBGprJAQgAEEEaiIAQaiNAk8EQCMJRQRAEAsLIwkhASAAQQRrIQIgAEEPcUEBIAAbBH9BAQUgAigCAEEBcQsEQEEAQeALQbIEQQMQAAALIAIgAigCAEEBcjYCACABIAIQCQsLQQoPCyMCIwI2AgQjAiMCNgIIQQAkAwtBAAvaAQEBfyABQYACSQRAIAFBBHYhAQUgAUH+////AUkEQCABQQFBGyABZ2t0akEBayEBCyABQR8gAWdrIgJBBGt2QRBzIQEgAkEHayECCyABQRBJIAJBF0lxRQRAQQBB4AtBzgJBDhAAAAsgACACQQJ0aigCBEF/IAF0cSIBBH8gACABaCACQQR0akECdGooAmAFIAAoAgBBfyACQQFqdHEiAQR/IAAgAWgiAUECdGooAgQiAkUEQEEAQeALQdsCQRIQAAALIAAgAmggAUEEdGpBAnRqKAJgBUEACwsLxQQBBX8gAEHs////A08EQEHgCkGQCUGFAkEfEAAACyMEIwVPBEACQEGAECECA0AgAhAMayECIwNFBEAjBK1CyAF+QuQAgKdBgAhqJAUMAgsgAkEASg0ACyMEIwQjBWtBgAhJQQp0aiQFCwsjCUUEQBALCyMJIQQgAEEQaiICQfz///8DSwRAQeAKQeALQc0DQR0QAAALIAQgAkEMTQR/QQwFIAJBE2pBcHFBBGsLIgUQDSICRQRAPwAiAiAFQYACTwR/IAVB/v///wFJBH8gBUEBQRsgBWdrdGpBAWsFIAULBSAFC0EEIAQoAqAMIAJBEHRBBGtHdGpB//8DakGAgHxxQRB2IgMgAiADShtAAEEASARAIANAAEEASARAAAsLIAQgAkEQdD8ArEIQhhAKIAQgBRANIgJFBEBBAEHgC0HzA0EQEAAACwsgBSACKAIAQXxxSwRAQQBB4AtB9QNBDhAAAAsgBCACEAggAigCACEGIAVBBGpBD3EEQEEAQeALQekCQQ4QAAALIAZBfHEgBWsiA0EQTwRAIAIgBSAGQQJxcjYCACACQQRqIAVqIgUgA0EEa0EBcjYCACAEIAUQCQUgAiAGQX5xNgIAIAJBBGogAigCAEF8cWoiAyADKAIAQX1xNgIACyACIAE2AgwgAiAANgIQIwgiASgCCCEDIAIgASMAcjYCBCACIAM2AgggAyACIAMoAgRBA3FyNgIEIAEgAjYCCCMEIAIoAgBBfHFBBGpqJAQgAkEUaiIBQQAgAPwLACABC2EBA38gAARAIABBFGsiASgCBEEDcUEDRgRAQaAMQZAJQdICQQcQAAALIAEQAyMHIgMoAgghAiABIANBA3I2AgQgASACNgIIIAIgASACKAIEQQNxcjYCBCADIAE2AggLIAALbgECfyAARQRADwsgAEEUayIBKAIEQQNxQQNHBEBB4AxBkAlB4AJBBRAAAAsjA0EBRgRAIAEQBAUgARADIwgiACgCCCECIAEgACMAcjYCBCABIAI2AgggAiABIAIoAgRBA3FyNgIEIAAgATYCCAsLOQAjA0EASgRAA0AjAwRAEAwaDAELCwsQDBoDQCMDBEAQDBoMAQsLIwStQsgBfkLkAICnQYAIaiQFCzcAAkACQAJAAkACQAJAIABBCGsoAgAOBQABAgUFBAsPCw8LDwsACwALIAAoAgAiAARAIAAQBwsLVgBBxAlBwAk2AgBByAlBwAk2AgBBwAkkAj8AQRB0QaiNAmtBAXYkBUGUC0GQCzYCAEGYC0GQCzYCAEGQCyQHQbQLQbALNgIAQbgLQbALNgIAQbALJAgLawAjDkEEayQOIw5BqA1IBEBBwI0CQfCNAkEBQQEQAAALIw5BADYCACMOIAA2AgAgAUEfdiAAKAIIIAFBAmpIcgRAQfAJQdAIQc8AQQcQAAALIw4gADYCACABIAAoAgRqLwEAGiMOQQRqJA4LwgQCAn4CfyMOQQRrJA4CQAJAIw5BqA1IDQEjDiAANgIAIw5BCGskDiMOQagNSA0BIw5CADcDACMOIAA2AgAjDgJ/Iw5BCGskDgJAIw5BqA1IDQAjDkIANwMAIw4gADYCACAAQRRrKAIQIQQjDkEANgIAIw4gADYCBCMOQQxrJA4jDkGoDUgNACMOQgA3AwAjDkEANgIIIw5BDEEEEA4iAzYCACMOIAM2AgQgA0EAEAUjDiADNgIEIANBADYCBCMOIAM2AgQgA0EANgIIIw4gADYCBCAAQRRrKAIQIARJIARB/P///wNLcgRAQaAIQdAIQRlBBxAAAAsjDiADNgIEIw4gADYCCCADIAAQBSMOIAM2AgQgAyAANgIEIw4gAzYCBCADIAQ2AggjDkEMaiQOIw5BCGokDiADDAELDAILIgM2AgQjDiADNgIAIANBERAUIw4gAzYCACADQRMQFCMOIAA2AgAgAEEUaygCECEAIw4gAzYCACMKRQRAEAG9IgFQBEBClfip+pe33puefyEBCyABIAFCIYiFQs2Z1ur++uuof34iAUIhiCABhULT2JfU4b+u50R+IgFCIYggAYUkCyMLQn+FIgFCIYggAYVCzZnW6v7666h/fiIBQiGIIAGFQtPYl9Thv67nRH4iAUIhiCABhSQMQQEkCgsjCyECIwwiASQLIAEgAiACQheGhSICQhGIIAKFhSABQhqIhSQMIw5BCGokDiMOQQRqJA4gALcPCwALQcCNAkHwjQJBAUEBEAAACwv0AxMAQYwICwEsAEGYCAsjAgAAABwAAABJAG4AdgBhAGwAaQBkACAAbABlAG4AZwB0AGgAQbwICwE8AEHICAsnAgAAACAAAAB+AGwAaQBiAC8AZABhAHQAYQB2AGkAZQB3AC4AdABzAEH8CAsBPABBiAkLJwIAAAAgAAAAfgBsAGkAYgAvAHIAdAAvAGkAdABjAG0AcwAuAHQAcwBB3AkLATwAQegJCysCAAAAJAAAAEkAbgBkAGUAeAAgAG8AdQB0ACAAbwBmACAAcgBhAG4AZwBlAEGcCgsBLABBqAoLGwIAAAAUAAAAfgBsAGkAYgAvAHIAdAAuAHQAcwBBzAoLATwAQdgKCy8CAAAAKAAAAEEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQBBzAsLATwAQdgLCyUCAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABzAEGMDAsBPABBmAwLMQIAAAAqAAAATwBiAGoAZQBjAHQAIABhAGwAcgBlAGEAZAB5ACAAcABpAG4AbgBlAGQAQcwMCwE8AEHYDAsvAgAAACgAAABPAGIAagBlAGMAdAAgAGkAcwAgAG4AbwB0ACAAcABpAG4AbgBlAGQAQZANCw0FAAAAIAAAACAAAAAg",Jd=Uint8Array.from(atob(Xd),t=>t.charCodeAt(0)),Kd={env:{abort:()=>{throw new Error("Abort!")},seed:()=>{}}},Zd=class{constructor(){h(this,"wasm")}async init(){this.wasm=await WebAssembly.instantiate(Jd,Kd).then(t=>t.instance)}add(t,e){if(this.wasm===void 0)throw new Error("Wasm not initialized!");return this.wasm.exports.add(t,e)}},pn=class extends Yi{constructor(e,r){super();h(this,"id");h(this,"wasm",new Zd);h(this,"service",new Hd(this));h(this,"registries",{});h(this,"palette",new rd(this,"jet"));h(this,"pool");this.pool=e||qc.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette),this.wasm.init()}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new qd(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let fa=class extends Event{constructor(t,e,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=r??!1}};/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*//**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let va=class{constructor(t,e,r,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){const s=e;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new fa(this.context,this.t,this.subscribe))}};/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class eu{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let tu=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class ba extends eu{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const u=new Set;for(const[p,{consumerHost:f}]of this.subscriptions)u.has(p)||(u.add(p),f.dispatchEvent(new fa(this.context,p,!0)));o.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new tu(this.context))}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Le({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new ba(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new ba(o,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const o=new WeakMap;n={get(){return o.get(this)},set(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ue({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new va(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new va(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let Xi;const ru=new Uint8Array(16);function iu(){if(!Xi&&(Xi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Xi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Xi(ru)}const Xe=[];for(let t=0;t<256;++t)Xe.push((t+256).toString(16).slice(1));function su(t,e=0){return Xe[t[e+0]]+Xe[t[e+1]]+Xe[t[e+2]]+Xe[t[e+3]]+"-"+Xe[t[e+4]]+Xe[t[e+5]]+"-"+Xe[t[e+6]]+Xe[t[e+7]]+"-"+Xe[t[e+8]]+Xe[t[e+9]]+"-"+Xe[t[e+10]]+Xe[t[e+11]]+Xe[t[e+12]]+Xe[t[e+13]]+Xe[t[e+14]]+Xe[t[e+15]]}const nu=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ya={randomUUID:nu};function ou(t,e,r){if(ya.randomUUID&&!e&&!t)return ya.randomUUID();t=t||{};const i=t.random||(t.rng||iu)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,su(i)}class Ji extends st{constructor(){super(...arguments),this.UUID=ou()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const Aa="manager-instance",Ki="manager-palette-context",au=new pn,lu="__internal_default_registry",hu="__internal_default_group",cu=t=>t.addOrGetRegistry(lu),du=t=>t.groups.addOrGetGroup(hu);var uu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,Zi=(t,e,r,i)=>{for(var s=i>1?void 0:i?pu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&uu(e,r,s),s};let ar=class extends Ji{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:or.jet}}connectedCallback(){super.connectedCallback();let t=au;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=ar.sanitizeStringPalette(this.palette.key);e.palette=r,t=new pn(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)}),setTimeout(()=>{this.log(this.manager.wasm.add(42,1))},0)}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=ar.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(or).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:or[t]}}render(){return L`<slot></slot>`}};Zi([Le({context:Aa})],ar.prototype,"manager",2),Zi([U({type:String,reflect:!0,attribute:!0})],ar.prototype,"slug",2),Zi([Le({context:Ki}),U({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:or[t]}),toAttribute:t=>t.key.toString()}})],ar.prototype,"palette",2),ar=Zi([te("manager-provider")],ar);var gu=Object.defineProperty,mu=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&gu(e,r,s),s};class gn extends Ji{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}mu([ue({context:Aa,subscribe:!0}),M()],gn.prototype,"manager");const wa="registry-instance",xa="registry-opacity",mn="registry-range-from",fn="registry-range-to",fu="registry-loading",ka="registry-min",Ca="registry-max";var vu=Object.defineProperty,bu=Object.getOwnPropertyDescriptor,Ut=(t,e,r,i)=>{for(var s=i>1?void 0:i?bu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&vu(e,r,s),s};let Bt=class extends gn{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=cu(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var i;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.setFixedRange(n):s.setFixedRange(n)}}if(t==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return L`<slot></slot>`}};Ut([U({type:String,reflect:!0,attribute:!0})],Bt.prototype,"slug",2),Ut([Le({context:wa})],Bt.prototype,"registry",2),Ut([Le({context:xa}),U({type:Number,reflect:!0,attribute:!0})],Bt.prototype,"opacity",2),Ut([Le({context:ka}),M()],Bt.prototype,"min",2),Ut([Le({context:Ca}),M()],Bt.prototype,"max",2),Ut([Le({context:mn}),U({type:Number,reflect:!0,attribute:!0})],Bt.prototype,"from",2),Ut([Le({context:fn}),U({type:Number,reflect:!0,attribute:!0})],Bt.prototype,"to",2),Ut([Le({context:fu}),U({type:String,reflect:!0,attribute:!0})],Bt.prototype,"loading",2),Bt=Ut([te("registry-provider")],Bt);var yu=Object.defineProperty,Au=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&yu(e,r,s),s};class dt extends gn{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}Au([ue({context:wa,subscribe:!0})],dt.prototype,"registry");const Ea="group-instance",Sa="tool-context",Ia="tools-context";var wu=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,ei=(t,e,r,i)=>{for(var s=i>1?void 0:i?xu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&wu(e,r,s),s};let Ir=class extends dt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=du(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return L`<slot></slot>`}};ei([U({type:String,attribute:!0,reflect:!0})],Ir.prototype,"slug",2),ei([Le({context:Ea})],Ir.prototype,"group",2),ei([Le({context:Sa})],Ir.prototype,"tool",2),ei([Le({context:Ia})],Ir.prototype,"tools",2),Ir=ei([te("group-provider")],Ir);var ku=Object.defineProperty,Cu=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&ku(e,r,s),s};class ti extends dt{constructor(){super()}connectedCallback(){super.connectedCallback()}}Cu([ue({context:Ea,subscribe:!0})],ti.prototype,"group");const Ba="file",La="failure",Pa="file-loading",Eu="file-loaded",vn="file-provider-element",bn="file-ms-context",es="playback",yn="duration",An="playing",$a="playbackSpeed",Ra="recording",Da="mayStop",Ma="analysislist",wn="file-markers-context";var Su=Object.defineProperty,ot=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Su(e,r,s),s};class Ke extends ti{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Be,this.onSuccess=new Be,this.onFailure=new Be}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}attributeChangedCallback(e,r,i){var s,n,o;if(super.attributeChangedCallback(e,r,i),e==="ms"&&i&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(i)));l!==this.currentFrame.ms&&((s=this.file)==null||s.timeline.setRelativeTime(l))}e==="playing"&&(i==="true"?(n=this.file)==null||n.timeline.play():i==="false"&&((o=this.file)==null||o.timeline.pause())),e==="playbackspeed"&&this.file&&i&&Object.keys(dn).includes(i)&&(this.file.timeline.playbackSpeed=parseFloat(i)),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.playbackSpeed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}ot([Le({context:Ba}),M()],Ke.prototype,"file"),ot([Le({context:La}),M()],Ke.prototype,"failure"),ot([Le({context:Pa}),M()],Ke.prototype,"loading"),ot([Le({context:Eu}),M()],Ke.prototype,"ready"),ot([Le({context:An}),U({type:String,reflect:!0,attribute:!0})],Ke.prototype,"playing"),ot([Le({context:yn}),M()],Ke.prototype,"duration"),ot([Le({context:es}),M()],Ke.prototype,"currentFrame"),ot([Le({context:bn}),U({type:Number,reflect:!0,attribute:!0})],Ke.prototype,"ms"),ot([Le({context:$a}),U({type:Number,reflect:!0,attribute:!0})],Ke.prototype,"playbackSpeed"),ot([Le({context:Ra}),U({type:String,reflect:!0,attribute:!0})],Ke.prototype,"recording"),ot([Le({context:Da}),M()],Ke.prototype,"mayStop"),ot([Hr({slot:"mark",flatten:!0})],Ke.prototype,"marksQueriedInternally"),ot([Le({context:wn})],Ke.prototype,"marksProvidedBelow"),ot([Le({context:Ma})],Ke.prototype,"analysis");var Iu=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,ts=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Iu(e,r,s),s};let ri=class extends Ke{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async t=>t instanceof Sr?await t.createInstance(this.group).then(e=>(this.file=e,this.onSuccess.call(e),this.clearCallbacks(),e.group.registry.postLoadedProcessing(),e)):(this.failure=t,this.onFailure.call(this.failure),this.clearCallbacks(),t)).then(t=>(this.loading=!1,t))}connectedCallback(){super.connectedCallback(),this.load().then(t=>{t instanceof la?this.recieveInstance(t):this.failure=t})}render(){return L`
            <slot></slot>
            <slot name="mark"></slot>
        `}};ts([Le({context:vn})],ri.prototype,"providedSelf",2),ts([U({type:String,attribute:!0,reflect:!0})],ri.prototype,"thermal",2),ts([U({type:String,attribute:!0,reflect:!0})],ri.prototype,"visible",2),ri=ts([te("file-provider")],ri);var Lu=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,Br=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Lu(e,r,s),s};let Jt=class extends Ke{constructor(){super(...arguments),this.providedSelf=this,this.container=De(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof Sr){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof qi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return L`

                    <div class="container">
                        <div ${Te(this.container)} class="${_t(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${ma.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return L`
            ${this.ready?L`<slot></slot>`:N}
            <slot name="mark"></slot>
        `}};Jt.styles=Ie`

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
    
    `,Br([Le({context:vn})],Jt.prototype,"providedSelf",2),Br([M()],Jt.prototype,"container",2),Br([M()],Jt.prototype,"ready",2),Br([M()],Jt.prototype,"hover",2),Br([M()],Jt.prototype,"listener",2),Jt=Br([te("file-dropin")],Jt);var $u=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,xn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ru(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&$u(e,r,s),s};let ii=class extends ti{constructor(){super(...arguments),this.container=De(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return L`

            <div class="container">
            
                <div ${Te(this.container)} class="${_t(t)}"></div>

            </div>
        
        `}};ii.styles=Ie`

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
    
    `,xn([M()],ii.prototype,"container",2),xn([M()],ii.prototype,"hover",2),ii=xn([te("group-dropin")],ii);var Du=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,_a=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Du(e,r,s),s};let rs=class extends dt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return L`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return L`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(or).map(([t,e])=>L`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};rs.styles=Ie`

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

    `,_a([ue({context:Ki,subscribe:!0})],rs.prototype,"value",2),rs=_a([te("registry-palette-dropdown")],rs);var _u=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,Oa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ou(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&_u(e,r,s),s};let is=class extends dt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return L`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return L`
            <div class="container">
                ${Object.entries(or).map(([t,e])=>L`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};is.styles=Ie`

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

    `,Oa([ue({context:Ki,subscribe:!0}),M()],is.prototype,"value",2),is=Oa([te("registry-palette-buttons")],is);var Qu=Object.defineProperty,Uu=Object.getOwnPropertyDescriptor,Qa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Uu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Qu(e,r,s),s};let ss=class extends dt{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return L`
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
        `}};ss.styles=Ie`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `,Qa([ue({context:xa,subscribe:!0})],ss.prototype,"value",2),ss=Qa([te("registry-opacity-slider")],ss);var Tu=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,ju=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Tu(e,r,s),s};let Ua=class extends dt{doAction(){this.registry.range.applyAuto()}render(){return L`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Ua=ju([te("registry-range-auto-button")],Ua);var Nu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,Wu=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Nu(e,r,s),s};let Ta=class extends dt{doAction(){this.registry.range.applyMinmax()}render(){return L`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Ta=Wu([te("registry-range-full-button")],Ta);var zu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,ns=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&zu(e,r,s),s};let Lt=class extends dt{constructor(){super(...arguments),this.ticksRef=De(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/Lt.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return L`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Te(this.ticksRef)}>

                    ${this.ticks.map(t=>L`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Lt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Lt.TICK_WIDTH=40,Lt.TICK_FIXED=2,Lt.styles=Ie`

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


    `,ns([U({type:String,reflect:!0})],Lt.prototype,"placement",2),ns([M()],Lt.prototype,"minmax",2),ns([M()],Lt.prototype,"ticks",2),Lt=ns([te("registry-ticks-bar")],Lt);var Gu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,si=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Gu(e,r,s),s};let Lr=class extends dt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return L`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return L`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};si([M()],Lr.prototype,"minmax",2),si([M()],Lr.prototype,"range",2),si([M()],Lr.prototype,"opacity",2),si([M()],Lr.prototype,"palette",2),Lr=si([te("registry-log")],Lr),(()=>{var t=Object.defineProperty,e=Math.pow,r=(a,c,v)=>c in a?t(a,c,{enumerable:!0,configurable:!0,writable:!0,value:v}):a[c]=v,i=(a,c,v)=>(r(a,typeof c!="symbol"?c+"":c,v),v),s=(a,c)=>` ${c&&c.length>0?c.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${a} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",o="pointers-overlap",l="pointers-min-distance",u="pointers-max-distance",p="range-dragging",f="data",m="min",y="max",k="step",x="round",C="type",R="theme",q="rtl",T="btt",K="disabled",pe="keyboard-disabled",fe="mousewheel-disabled",Re="slider-width",j="slider-height",Ee="slider-radius",ie="slider-bg",se="slider-bg-hover",ve="slider-bg-fill",ge="pointer-width",le="pointer-height",he="pointer-radius",xe="pointer-bg",je="pointer-bg-hover",Ne="pointer-bg-focus",lt="pointer-shadow",pi="pointer-shadow-hover",gi="pointer-shadow-focus",mi="pointer-border",fi="pointer-border-hover",us="pointer-border-focus",vi="animate-onclick",ps="css-links",ht="vertical",jt="horizontal",Mr=(a,c,v,g,$)=>{let W=c-a;return W===0?v:(g-v)*($-a)/W+v},vt=a=>!isNaN(parseFloat(a))&&isFinite(a),Me=(a,c)=>vt(a)?Number(a):c,bi=(a,c)=>c===0?0:Math.round(a/c)*c,gs=(a,c=1/0)=>{if(c===1/0)return a;let v=e(10,c);return Math.round(a*v)/v},We=a=>a==null?!1:typeof a=="boolean"?a:a.trim().toLowerCase()==="true",ms=(a,c)=>{a.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:c}}))},fs=(a,c)=>{a.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:c}}))},vs=(a,c)=>{a.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:c}}))},bs=(a,c)=>{a.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:c}}))},ys=(a,c)=>{if(!c||c.length<=0)return;let v=c.map($=>vt($)?Me($,$):$),g={values:v||[]};g.value=v[0],g.value0=v[0],g.value1=v[0];for(let $=1;$<v.length;$++)g[`value${$+1}`]=v[$];a.dispatchEvent(new CustomEvent("change",{detail:g}))},w=(a,c,v)=>{let g=0,$,W,ee,D,_=!1,re=(G,$e,Ye,ze,Oe,Qe)=>{let tt=g;Ye!==void 0&&G>Ye&&(G=Ye),$e!==void 0&&G<$e&&(G=$e),g=G;let rt=g;return(ze===ht&&Qe||ze===jt&&Oe)&&(rt=100-rt),ze===ht?c.style.top=`${rt}%`:c.style.left=`${rt}%`,tt!==g},oe=G=>G===c||c.contains(G),F=(G,$e,Ye,ze)=>{$=G,W=$e,ee=Ye,D=ze},ke=G=>{_=G,c.classList.toggle("disabled",_),_?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},pt=(G,$e)=>{$e==null?c.removeAttribute(G):c.setAttribute(G,$e)},Je=G=>c.getAttribute(G),Y=G=>{if(!_){switch(G.key){case"ArrowLeft":{G.preventDefault(),typeof $=="function"&&$(v);break}case"ArrowRight":{G.preventDefault(),typeof W=="function"&&W(v);break}case"ArrowUp":{G.preventDefault(),typeof ee=="function"&&ee(v);break}case"ArrowDown":{G.preventDefault(),typeof D=="function"&&D(v);break}}bs(a,G)}},ne=()=>{_||ms(a,c)};return c.className=`pointer pointer-${v}`,c.addEventListener("keydown",Y),c.addEventListener("click",ne),{$pointer:c,get percent(){return g},get disabled(){return _},set disabled(G){ke(G)},updatePosition:re,isClicked:oe,setCallbacks:F,setAttr:pt,getAttr:Je,destroy:()=>{c.removeEventListener("keydown",Y),c.removeEventListener("click",ne),c.remove()}}},P=a=>{if(a==null)return;if(Array.isArray(a))return a;if(a.trim()==="")return;let c=a.split(","),v=[],g=!0;for(let $=0;$<c.length;$++){let W=c[$].trim();W!==""&&(v.push(W),vt(W)||(g=!1))}return g?v.map($=>Number($)):v},B=(a,c)=>c?c.findIndex(v=>v===a||v.toString().trim()===a.toString().trim()):-1,I=a=>({updatePosition:(c,v,g,$)=>{if(v.length<=0)return;let W=v.length===1,ee=v[0],D=v[v.length-1];c===ht?(a.style.removeProperty("width"),a.style.removeProperty("right"),a.style.removeProperty("left"),W?a.style.height=`${ee}%`:a.style.height=`${Math.abs(ee-D)}%`,$?(a.style.bottom="0%",W?a.style.top="auto":a.style.top=`${Math.min(100-D,100-ee)}%`):(a.style.bottom="auto",W?a.style.top="0%":a.style.top=`${Math.min(ee,D)}%`)):(a.style.removeProperty("height"),a.style.removeProperty("top"),a.style.removeProperty("bottom"),W?a.style.width=`${ee}%`:a.style.width=`${Math.abs(ee-D)}%`,g?(a.style.right="0%",W?a.style.left="auto":a.style.left=`${Math.min(100-D,100-ee)}%`):(a.style.right="auto",W?a.style.left="0%":a.style.left=`${Math.min(ee,D)}%`))}}),X="--animate-onclick",be="--width",z="--height",_e="--panel-bg-border-radius",ce="--panel-bg",O="--panel-bg-hover",de="--panel-bg-fill",A="--pointer-width",E="--pointer-height",J="--pointer-border-radius",Se="--pointer-bg",Ve="--pointer-bg-hover",Ze="--pointer-bg-focus",kt="--pointer-shadow",qe="--pointer-shadow-hover",ur="--pointer-shadow-focus",Nt="--pointer-border",H="--pointer-border-hover",Z="--pointer-border-focus",S=(a,c,v)=>{let g=new Map;for(let $ of a.attributes){let W=$.nodeName.trim().toLowerCase();if(!c.test(W))continue;let ee=W.replace(/\D/g,"").trim(),D=ee===""||ee==="0"||ee==="1"?0:Me(ee,0)-1,_=v&&typeof v=="function"?v($.value):$.value;g.set(D,_)}return g},V=a=>{if(!a)return null;let c=a.getAttribute(ps);if(!c)return null;let v=c.split(";"),g=[];for(let $ of v)$.trim()!==""&&g.push($.trim());return g},ye=[[be,Re,"sliderWidth",null],[z,j,"sliderHeight",null],[_e,Ee,"sliderRadius",null],[ce,ie,"sliderBg",null],[O,se,"sliderBgHover",null],[de,ve,"sliderBgFill",null],[A,ge,"pointer#Width",/^pointer([0-9]*)-width$/],[E,le,"pointer#Height",/^pointer([0-9]*)-height$/],[J,he,"pointer#Radius",/^pointer([0-9]*)-radius$/],[Se,xe,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ve,je,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ze,Ne,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[kt,lt,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[qe,pi,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[ur,gi,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Nt,mi,"pointer#Border",/^pointer([0-9]*)-border$/],[H,fi,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Z,us,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],me=(a,c,v)=>{let g=null,$=[],W=new Map,ee=(Y,ne=c)=>{let G=[...ne.classList];for(let $e of G)$e.startsWith(Y)&&c.classList.remove($e)},D=()=>{ee("shape");let Y=c.querySelectorAll(".pointer");for(let ne of Y)ee("shape",ne)},_=Y=>{g=Y,ee("theme-"),typeof Y=="string"&&c.classList.add(`theme-${Y}`)},re=()=>{if(D(),!($.length<=0)){c.classList.add("shape",`shape-${$[0]}`);for(let Y=1;Y<$.length;Y++){let ne=$[Y];if(!ne)continue;let G=c.querySelector(`.pointer-${Y}`);!G||G.classList.add("shape",`shape-${ne}`)}}},oe=(Y,ne)=>{$[Y]=ne,re()},F=()=>{D();let Y=S(a,/^pointer([0-9]*)-shape$/);if(!(Y.size<=0)){for(let ne of Y){let G=ne[0];$[G]=ne[1]}re()}},ke=(Y,ne)=>`${Y}-${ne}`,pt=(Y,ne,G)=>{let $e=v[G];if(!$e)return;let Ye=G===0?c:$e.$pointer;if(ne==null){W.has(ke(Y,G))&&W.delete(ke(Y,G)),Ye.style.removeProperty(Y);return}W.set(ke(Y,G),ne),Ye.style.setProperty(Y,ne)},Je=(Y,ne)=>W.get(ke(Y,ne));return(()=>{for(let Y of ye){let[ne,G,$e,Ye]=Y;if(Ye){let Oe=S(a,Ye);for(let Qe of Oe){let tt=Qe[0],rt=Qe[1];pt(ne,rt,tt)}}else{let Oe=a.getAttribute(G);pt(ne,Oe,0)}let ze=[];if($e.indexOf("#")===-1)ze.push([$e,0]);else{ze.push([$e.replace("#",""),0]),ze.push([$e.replace("#","0"),0]),ze.push([$e.replace("#","1"),0]);for(let Oe=1;Oe<v.length;Oe++)ze.push([$e.replace("#",(Oe+1).toString()),Oe])}for(let Oe of ze)try{let Qe=Oe[0],tt=Oe[1];Object.prototype.hasOwnProperty.call(a,Qe)||Object.defineProperty(a,Qe,{get(){return Je(ne,tt)},set:rt=>{pt(ne,rt,tt)}})}catch(Qe){console.error(Qe)}}_(a.getAttribute(R)),F()})(),{setStyle:pt,getStyle:Je,get theme(){return g},set theme(Y){_(Y)},get pointerShapes(){return $},setPointerShape:oe}},Pe="animate-on-click",Ae="range-dragging",et=(a,c,v,g)=>{let $=[],W=oe=>{for(let F of $)F.update&&typeof F.update=="function"&&F.update(oe)},ee=()=>{for(let oe of $)oe.destroy&&typeof oe.destroy=="function"&&oe.destroy()},D=(oe,F)=>{for(let ke of $)ke.onAttrChange&&typeof ke.onAttrChange=="function"&&ke.onAttrChange(oe,F)},_=oe=>{if(oe.gettersAndSetters){for(let F of oe.gettersAndSetters)if(!(!F.name||!F.attributes))try{Object.prototype.hasOwnProperty.call(a,F.name)||Object.defineProperty(a,F.name,F.attributes)}catch(ke){console.error("defineSettersGetters error:",ke)}}},re=oe=>{var F;if(!oe.css)return;let ke=(F=a.shadowRoot)==null?void 0:F.querySelector("style");!ke||(ke.innerHTML+=oe.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let oe of window.tcRangeSliderPlugins){let F=oe();$.push(F),F.init&&typeof F.init=="function"&&(F.init(a,c,v,g),_(F),re(F))}},update:W,onAttrChange:D,destroy:ee}},He=10,yi=20,qa=(a,c)=>{let v=new Map,g=/^value([0-9]*)$/;for(let D of a.attributes){let _=D.nodeName.trim().toLowerCase();if(!g.test(_))continue;let re=_.replace("value","").trim(),oe=re===""||re==="0"||re==="1"?0:Me(re,0)-1,F=vt(D.value)?Me(D.value,0):D.value;v.set(oe,F)}let $=Math.max(...Array.from(v.keys())),W=[];W.push([w(a,c,0),v.get(0)]);let ee=c;for(let D=1;D<=$;D++){let _=c.cloneNode(!0);ee.after(_),ee=_,W.push([w(a,_,D),v.get(D)])}return W},Un=(a,c,v,g,$,W,ee)=>{try{Object.defineProperty(a,g,{configurable:!0,get(){if(!c)return;let D=c.pointers[v];if(!D)return;let _=c.getTextValue(D.percent);return vt(_)?Me(_,_):_},set:D=>{c.pointers[v]?c==null||c.setValue(D,v):c==null||c.addPointer(D)}}),Object.defineProperty(a,$,{configurable:!0,get(){var D,_;return(_=(D=c==null?void 0:c.pointers[v])==null?void 0:D.getAttr("aria-label"))!=null?_:void 0},set:D=>{!c||c.setAriaLabel(v,D)}}),Object.defineProperty(a,W,{configurable:!0,get(){var D,_;return(_=(D=c==null?void 0:c.styles)==null?void 0:D.pointerShapes[v])!=null?_:null},set:D=>{!c||!c.styles||c.styles.setPointerShape(v,D)}}),Object.defineProperty(a,ee,{configurable:!0,get(){var D;return(D=c==null?void 0:c.pointers[v].disabled)!=null?D:!1},set:D=>{if(!c)return;let _=c==null?void 0:c.pointers[v];!_||(_.disabled=D)}})}catch(D){console.error(D)}},Xa=(a,c)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<He;g++)v.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of v)Un(a,c,g[4],g[0],g[1],g[2],g[3])},Tn=(a,c,v)=>{var g;let $=(g=v.shadowRoot)==null?void 0:g.querySelector(".container");if($)for(let W of a)c?$.prepend(W.$pointer):$.append(W.$pointer)},Ja=(a,c)=>{if(!(!c||a.length<=1)){for(let v of a)v.$pointer.style.zIndex=yi.toString();c.$pointer.style.zIndex=(yi*2).toString()}},As=0,_r=100,pr=2,Fn="0.3s",Ka=(a,c,v)=>{let g=v.map(d=>d[0]),$=null,W=null,ee=null,D=null,_=As,re=_r,oe,F,ke=jt,pt=pr,Je=!1,Y=!1,ne=!1,G=0,$e=1/0,Ye=!1,ze,Oe,Qe=!1,tt=!1,rt=!1,Ht=Fn,jn=[],Nn=d=>{Qe||(d.preventDefault&&d.preventDefault(),Kt(d),window.addEventListener("mousemove",Kt),window.addEventListener("mouseup",Ai),fs(a,d))},Ai=d=>{Qe||(ze=void 0,Oe=void 0,window.removeEventListener("mousemove",Kt),window.removeEventListener("mouseup",Ai),Ht&&c.classList.add(Pe),vs(a,d))},tl=(d,b)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(d)&&Ht&&c.classList.remove(Pe),g[0];let Q=il(d);if(Ye){let we=b,bt=xi(we);bt!==void 0&&(we=bi(we,bt)),Q?(ze=we,Oe=0,Ht&&c.classList.remove(Pe)):ze!==void 0&&(Oe=we-ze,ze=we)}if(!rl(d)&&!Q){for(let we of g)if(!(!we.isClicked(d)||we.disabled))return Ht&&c.classList.remove(Pe),we;for(let we of g)if($===we)return we}let Ce=1/0,Ue=null;for(let we of g){if(we.disabled)continue;let bt=Math.abs(b-we.percent);bt<Ce&&(Ce=bt,Ue=we)}return Ue},Hn=()=>g.findIndex(d=>$===d&&!d.disabled),Kt=d=>{let b;if(ke===ht){let{height:Ce,top:Ue}=c.getBoundingClientRect(),we=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;b=Math.min(Math.max(0,we-Ue),Ce)*100/Ce}else{let{width:Ce,left:Ue}=c.getBoundingClientRect(),we=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;b=Math.min(Math.max(0,we-Ue),Ce)*100/Ce}if((Je||Y)&&(b=100-b),$=tl(d.target,b),$&&Ja(g,$),Ye&&g.length>1&&Oe!==void 0){let Ce=g[0],Ue=g[g.length-1],we=Ce.percent+Oe<0,bt=Ue.percent+Oe>100;if(we||bt)return;for(let Pi=0;Pi<g.length;Pi++)it(Pi,g[Pi].percent+Oe);return}let Q=Hn();Q!==-1&&(it(Q,b),$==null||$.$pointer.focus())},wi=d=>{if(Qe||document.activeElement!==a||$!=null&&$.disabled)return;d.stopPropagation(),d.preventDefault();let b=d.deltaY<0,Q=Je||Y,Ce=b?!Q:Q,Ue=Hn();Ue!==-1&&(Ce?Or(Ue,g[Ue].percent):Qr(Ue,g[Ue].percent))},Wn=d=>{Qe||tt||(ke===ht?Y?it(d,100):it(d,0):Je?Qr(d,g[d].percent):Or(d,g[d].percent))},zn=d=>{Qe||tt||(ke===ht?Y?it(d,0):it(d,100):Je?Or(d,g[d].percent):Qr(d,g[d].percent))},Yn=d=>{Qe||tt||(ke===ht?Y?Qr(d,g[d].percent):Or(d,g[d].percent):Je?it(d,100):it(d,0))},Gn=d=>{Qe||tt||(ke===ht?Y?Or(d,g[d].percent):Qr(d,g[d].percent):Je?it(d,0):it(d,100))},rl=d=>d.classList.contains("panel"),il=d=>d.classList.contains("panel-fill"),Or=(d,b)=>{if(b===void 0)return;let Q=xi(b);Q==null&&(Q=1),b-=Q,b<0&&(b=0),it(d,b)},Qr=(d,b)=>{if(b===void 0)return;let Q=xi(b);Q==null&&(Q=1),b+=Q,b>100&&(b=100),it(d,b)},Zt=()=>{!D||D.update({percents:Vn(),values:qn(),$pointers:Xn(),min:Jn(),max:Kn(),data:ks(),step:xs(),round:Es(),type:Cs(),textMin:ki(),textMax:Ci(),rightToLeft:Bs(),bottomToTop:Ls(),pointersOverlap:Ds(),pointersMinDistance:Ss(),pointersMaxDistance:Is(),rangeDragging:Ms(),disabled:Ps(),keyboardDisabled:$s(),mousewheelDisabled:Rs()})},sl=()=>{Zt()},nl=d=>{if(!(ne||g.length<=1||re===_))if(d===0){let b=$e*100/(re-_);return Math.max(0,g[d+1].percent-b)}else{let b=G*100/(re-_);return Math.min(g[d-1].percent+b,100)}},ol=d=>{if(!(ne||g.length<=1||re===_))if(d===g.length-1){let b=$e*100/(re-_);return Math.min(g[d-1].percent+b,100)}else{let b=G*100/(re-_);return Math.max(0,g[d+1].percent-b)}},xi=d=>{let b;if(typeof oe=="function"){let Q=Mr(0,100,_,re,d);b=oe(Q,d)}else b=oe;if(vt(b)){let Q=re-_;return b=Q===0?0:b*100/Q,b}},gr=d=>{if(d===void 0)return;let b=Mr(0,100,_,re,d);return F!==void 0?F[Math.round(b)]:gs(b,pt)},ki=()=>F!==void 0?F[_]:_,Ci=()=>F!==void 0?F[re]:re,xs=()=>oe,al=d=>{var b;return d<=0||ne?ki():(b=gr(g[d-1].percent))!=null?b:""},ll=d=>{var b;return g.length<=1||d>=g.length-1||ne?Ci():(b=gr(g[d+1].percent))!=null?b:""},Vn=()=>g.map(d=>d.percent),qn=()=>g.map(d=>gr(d.percent)),Xn=()=>g.map(d=>d.$pointer),Jn=()=>_,Kn=()=>re,ks=()=>F,Cs=()=>ke,Es=()=>pt,Ss=()=>G,Is=()=>$e,hl=d=>jn[d],Bs=()=>Je,Ls=()=>Y,Ps=()=>Qe,$s=()=>tt,Rs=()=>rt,Ds=()=>ne,Ms=()=>Ye,it=(d,b)=>{if(b===void 0)return;let Q=xi(b);Q!==void 0&&(b=bi(b,Q));let Ce=g[d];if(!Ce)return;let Ue=Ce.updatePosition(b,nl(d),ol(d),ke,Je,Y);W==null||W.updatePosition(ke,g.map(we=>we.percent),Je,Y),Zt();for(let we of g){let bt=gr(we.percent);bt!==void 0&&(we.setAttr("aria-valuenow",bt.toString()),we.setAttr("aria-valuetext",bt.toString()))}dl(),Ue&&ys(a,g.map(we=>gr(we.percent)))},Ct=()=>{for(let d=0;d<g.length;d++)it(d,g[d].percent)},cl=(d,b)=>{_=F!==void 0?0:Me(d,As),re=F!==void 0?F.length-1:Me(b,_r),Ei(_),Si(re)},dl=()=>{var d,b;for(let Q=0;Q<g.length;Q++){let Ce=g[Q];Ce.setAttr("aria-valuemin",((d=al(Q))!=null?d:"").toString()),Ce.setAttr("aria-valuemax",((b=ll(Q))!=null?b:"").toString())}},Ei=d=>{_=Me(d,As),_>re&&(re=_+_r),Ct()},Si=d=>{re=Me(d,_r),re<_&&(re=_+_r),Ct()},Zn=d=>{ne=!0;for(let b=0;b<d.length;b++)Ii(d[b],b);ne=!1;for(let b=0;b<d.length;b++)Ii(d[b],b)},Ii=(d,b)=>{let Q;F!==void 0?(Q=d==null?0:B(d,F),Q===-1&&(Q=0)):(Q=Me(d,_),Q<_&&(Q=_),Q>re&&(Q=re));let Ce=Mr(_,re,0,100,Q);it(b,Ce)},Bi=d=>{if(d==null){oe=void 0;return}if(typeof d=="function"){oe=d,Ct();return}if(vt(d)){oe=Me(d,1);let b=Math.abs(re-_);oe>b&&(oe=void 0),Ct();return}oe=void 0},_s=d=>{ne=d,Ct()},Os=d=>{(!vt(d)||d<0)&&(d=0),G=d},Qs=d=>{(!vt(d)||d<0)&&(d=1/0),$e=d},Us=d=>{Qe=d,c.classList.toggle("disabled",Qe),Qe?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},eo=d=>{tt=d},to=d=>{rt=d,rt?document.removeEventListener("wheel",wi):document.addEventListener("wheel",wi,{passive:!1})},Ts=d=>{if(d==null){F=void 0;return}if(F=P(d),F===void 0||F.length<=0){F=void 0;return}Ei(0),Si(F.length-1),oe===void 0&&Bi(1)},Fs=d=>{var b;typeof d=="string"?ke=d.trim().toLowerCase()===ht?ht:jt:ke=jt;let Q=(b=a.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!Q)return;Q.className=`range-slider-box type-${ke}`,Ct();let Ce=ke===ht?"vertical":"horizontal";for(let Ue of g)Ue.setAttr("aria-orientation",Ce)},js=d=>{Je=d,g.length>1&&Tn(g,Je,a),Ct(),Zt()},Ns=d=>{Y=d,g.length>1&&Tn(g,Y,a),Ct(),Zt()},Hs=d=>{pt=Me(d,pr),pt<0&&(pt=pr),Zt()},ro=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(Ht=void 0,c.style.removeProperty(X),c.classList.remove(Pe)):(Ht=d.toString(),c.style.setProperty(X,Ht),c.classList.add(Pe))},io=(d,b)=>{let Q=g[d];!Q||(Q.setAttr("aria-label",b),jn[d]=b)},Li=d=>{if(ze=void 0,g.length<=1){Ye=!1,c.classList.remove(Ae);return}Ye=d,c.classList.toggle(Ae,Ye)},ul=()=>{Us(We(a.getAttribute(K))),tt=We(a.getAttribute(pe)),rt=We(a.getAttribute(fe));let d=S(a,/^pointer([0-9]*)-disabled$/,b=>We(b));for(let b of d){let Q=b[0];!g[Q]||(g[Q].disabled=b[1])}},pl=()=>{let d=S(a,/^aria-label([0-9]*)$/);for(let b of d){let Q=b[0];io(Q,b[1])}},gl=d=>{let b=g.length,Q=g[b-1].$pointer,Ce=Q.cloneNode(!0);Q.after(Ce);let Ue=w(a,Ce,b);return Ue.setCallbacks(Wn,zn,Yn,Gn),g.push(Ue),Ii(d,b),Ct(),Zt(),b},ml=()=>{let d=g.length,b=g[d-1];return b?(b.destroy(),g.pop(),g.length<=1&&Li(!1),Ct(),Zt(),d-1):-1};return(()=>{var d,b;for(let Ce of g)Ce.setCallbacks(Wn,zn,Yn,Gn);let Q=(d=a.shadowRoot)==null?void 0:d.querySelector(".panel-fill");Q&&(W=I(Q)),Fs(a.getAttribute(C)),js(We(a.getAttribute(q))),Ns(We(a.getAttribute(T))),cl(a.getAttribute(m),a.getAttribute(y)),Bi(a.getAttribute(k)),Ts(a.getAttribute(f)),Zn(v.map(Ce=>Ce[1])),_s(We(a.getAttribute(o))),Os(Me(a.getAttribute(l),0)),Qs(Me(a.getAttribute(u),1/0)),Li(We(a.getAttribute(p))),Hs(Me(a.getAttribute(x),pr)),ul(),pl(),ee=me(a,c,g),ro((b=a.getAttribute(vi))!=null?b:Fn),c.addEventListener("mousedown",Nn),c.addEventListener("mouseup",Ai),c.addEventListener("touchmove",Kt),c.addEventListener("touchstart",Kt),rt||document.addEventListener("wheel",wi,{passive:!1}),D=et(a,sl,{setValues:Zn,setMin:Ei,setMax:Si,setStep:Bi,setPointersOverlap:_s,setPointersMinDistance:Os,setPointersMaxDistance:Qs,setDisabled:Us,setType:Fs,setRightToLeft:js,setBottomToTop:Ns,setRound:Hs,setKeyboardDisabled:eo,setMousewheelDisabled:to,setRangeDragging:Li,setData:Ts},{getPercents:Vn,getValues:qn,getPointerElements:Xn,getMin:Jn,getMax:Kn,getStep:xs,getData:ks,getType:Cs,getRound:Es,getTextMin:ki,getTextMax:Ci,isRightToLeft:Bs,isBottomToTop:Ls,isDisabled:Ps,isKeyboardDisabled:$s,isMousewheelDisabled:Rs,isPointersOverlap:Ds,isRangeDraggingEnabled:Ms,getPointersMinDistance:Ss,getPointersMaxDistance:Is}),D.init()})(),{get pointers(){return g},get styles(){return ee},get pluginsManager(){return D},get min(){return ki()},get max(){return Ci()},get step(){return xs()},get pointersOverlap(){return Ds()},set pointersOverlap(d){_s(d)},get pointersMinDistance(){return Ss()},set pointersMinDistance(d){Os(d)},get pointersMaxDistance(){return Is()},set pointersMaxDistance(d){Qs(d)},get disabled(){return Ps()},set disabled(d){Us(d)},get data(){return ks()},get type(){return Cs()},set type(d){Fs(d)},get rightToLeft(){return Bs()},set rightToLeft(d){js(d)},get bottomToTop(){return Ls()},set bottomToTop(d){Ns(d)},get round(){return Es()},set round(d){Hs(d)},get animateOnClick(){return Ht},set animateOnClick(d){ro(d)},get keyboardDisabled(){return $s()},set keyboardDisabled(d){eo(d)},get mousewheelDisabled(){return Rs()},set mousewheelDisabled(d){to(d)},get rangeDragging(){return Ms()},set rangeDragging(d){Li(d)},setMin:Ei,setMax:Si,setValue:Ii,setStep:Bi,setData:Ts,getTextValue:gr,setAriaLabel:io,getAriaLabel:hl,addPointer:gl,removePointer:ml,destroy:()=>{c.removeEventListener("mousedown",Nn),c.removeEventListener("mouseup",Ai),c.removeEventListener("touchmove",Kt),c.removeEventListener("touchstart",Kt),document.removeEventListener("wheel",wi);for(let d of g)d.destroy();D==null||D.destroy()}}},Za=(a,c,v)=>{let g=ye.find(([D,_,re,oe])=>_.replace("#","")===c.replace(/\d+/g,""));if(g&&a.styles){let[D,_,re,oe]=g,F=c.replace(/\D/g,"").trim(),ke=F===""||F==="0"||F==="1"?0:Me(F,0)-1;a.styles.setStyle(D,v,ke);return}switch(a&&a.pluginsManager&&a.pluginsManager.onAttrChange(c,v),c){case m:{a.setMin(v);break}case y:{a.setMax(v);break}case k:{a.setStep(v);break}case o:{a.pointersOverlap=We(v);break}case l:{a.pointersMinDistance=Me(v,0);break}case p:{a.rangeDragging=We(v);break}case u:{a.pointersMaxDistance=Me(v,1/0);break}case K:{a.disabled=We(v);break}case pe:{a.keyboardDisabled=We(v);break}case fe:{a.mousewheelDisabled=We(v);break}case f:{a.setData(v);break}case C:{a.type=v;break}case q:{a.rightToLeft=We(v);break}case T:{a.bottomToTop=We(v);break}case x:{a.round=Me(v,pr);break}case R:{a.styles&&(a.styles.theme=v);break}case vi:{a.animateOnClick=v;break}}let $=null;if(/^value([0-9]*)$/.test(c)&&($="value"),/^pointer([0-9]*)-disabled$/.test(c)&&($="pointer-disabled"),/^aria-label([0-9]*)$/.test(c)&&($="aria-label"),/^pointer([0-9]*)-shape$/.test(c)&&($="pointer-shape"),!$)return;let W=c.replace(/\D/g,"").trim(),ee=W===""||W==="0"||W==="1"?0:Me(W,0)-1;switch($){case"value":{a.setValue(v,ee);break}case"pointer-disabled":{let D=a==null?void 0:a.pointers[ee];if(!D)return;D.disabled=We(v);break}case"aria-label":{a.setAriaLabel(ee,v);break}case"pointer-shape":{a.styles&&a.styles.setPointerShape(ee,v);break}}},el=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(a){this.slider&&this.slider.setStep(a)}get step(){var a;return(a=this.slider)==null?void 0:a.step}set disabled(a){this.slider&&(this.slider.disabled=a)}get disabled(){var a,c;return(c=(a=this.slider)==null?void 0:a.disabled)!=null?c:!1}set data(a){var c;(c=this.slider)==null||c.setData(a)}get data(){var a;return(a=this.slider)==null?void 0:a.data}set min(a){var c;(c=this.slider)==null||c.setMin(a)}get min(){var a;return(a=this.slider)==null?void 0:a.min}set max(a){var c;(c=this.slider)==null||c.setMax(a)}get max(){var a;return(a=this.slider)==null?void 0:a.max}set round(a){!this.slider||(this.slider.round=a)}get round(){var a,c;return(c=(a=this.slider)==null?void 0:a.round)!=null?c:pr}set type(a){!this.slider||(this.slider.type=a??jt)}get type(){var a;return((a=this.slider)==null?void 0:a.type)||jt}set pointersOverlap(a){!this.slider||(this.slider.pointersOverlap=a)}get pointersOverlap(){var a,c;return(c=(a=this.slider)==null?void 0:a.pointersOverlap)!=null?c:!1}set pointersMinDistance(a){!this.slider||(this.slider.pointersMinDistance=a)}get pointersMinDistance(){var a,c;return(c=(a=this.slider)==null?void 0:a.pointersMinDistance)!=null?c:0}set pointersMaxDistance(a){!this.slider||(this.slider.pointersMaxDistance=a)}get pointersMaxDistance(){var a,c;return(c=(a=this.slider)==null?void 0:a.pointersMaxDistance)!=null?c:1/0}set theme(a){!this.slider||!this.slider.styles||(this.slider.styles.theme=a)}get theme(){var a,c,v;return(v=(c=(a=this.slider)==null?void 0:a.styles)==null?void 0:c.theme)!=null?v:null}set rtl(a){!this.slider||(this.slider.rightToLeft=a)}get rtl(){var a,c;return(c=(a=this.slider)==null?void 0:a.rightToLeft)!=null?c:!1}set btt(a){!this.slider||(this.slider.bottomToTop=a)}get btt(){var a,c;return(c=(a=this.slider)==null?void 0:a.bottomToTop)!=null?c:!1}set keyboardDisabled(a){!this.slider||(this.slider.keyboardDisabled=a)}get keyboardDisabled(){var a,c;return(c=(a=this.slider)==null?void 0:a.keyboardDisabled)!=null?c:!1}set mousewheelDisabled(a){!this.slider||(this.slider.mousewheelDisabled=a)}get mousewheelDisabled(){var a,c;return(c=(a=this.slider)==null?void 0:a.mousewheelDisabled)!=null?c:!1}set animateOnClick(a){!this.slider||(this.slider.animateOnClick=a)}get animateOnClick(){var a;return(a=this.slider)==null?void 0:a.animateOnClick}get rangeDragging(){var a,c;return(c=(a=this.slider)==null?void 0:a.rangeDragging)!=null?c:!1}set rangeDragging(a){this.slider&&(this.slider.rangeDragging=We(a))}get externalCSSList(){return this._externalCSSList}addPointer(a){var c,v;if(!this.slider)return;let g=(v=(c=this.slider)==null?void 0:c.addPointer(a))!=null?v:0;Un(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var a;!this.slider||(a=this.slider)==null||a.removePointer()}addCSS(a){if(!this.shadowRoot)return;let c=document.createElement("style");c.textContent=a,this.shadowRoot.appendChild(c)}connectedCallback(){var a,c;if(!this.shadowRoot)return;this._externalCSSList=V(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(a=this.shadowRoot)==null?void 0:a.querySelector(".pointer");if(!v)return;let g=(c=this.shadowRoot)==null?void 0:c.getElementById("range-slider");if(!g)return;let $=qa(this,v);this.slider=Ka(this,g,$),Xa(this,this.slider),this._observer=new MutationObserver(W=>{W.forEach(ee=>{var D;if(!this.slider||ee.type!=="attributes")return;let _=ee.attributeName;!_||Za(this.slider,_,(D=this.getAttribute(_))!=null?D:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},ws=el;window.tcRangeSlider=ws,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",ws),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends ws{})})(),(()=>{var t=(l,u,p,f,m)=>{let y=u-l;return y===0?p:(f-p)*(m-l)/y+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,u)=>e(l)?Number(l):u,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,o=()=>{let l=null,u=null,p=null,f=null,m=null,y=!1,k=s,x=n,C=()=>{var j;let Ee=(j=l==null?void 0:l.shadowRoot)==null?void 0:j.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),f=document.createElement("div"),f.classList.add("mark-points"),p.append(f),m=document.createElement("div"),m.classList.add("mark-values"),p.append(m),Ee.append(p)},R=()=>{!u||!p||p.classList.toggle("is-reversed",u.isRightToLeft()||u.isBottomToTop())},q=()=>{var j;if(!p||!u)return;let Ee=u.getMin(),ie=u.getMax(),se=u.getType()==="vertical",ve=u.isRightToLeft()||u.isBottomToTop();for(let le=0;le<k;le++){let he=document.createElement("div");he.classList.add("mark",`mark-${le}`);let xe=k===0?0:le*100/(k-1);se?ve?he.style.top=`${100-xe}%`:he.style.top=`${xe}%`:ve?he.style.left=`${100-xe}%`:he.style.left=`${xe}%`,f==null||f.append(he)}let ge=u.getData();for(let le=0;le<x;le++){let he=document.createElement("div");he.classList.add("mark-value",`mark-value-${le}`);let xe=x===0?0:le*100/(x-1),je=t(0,x-1,Ee,ie,le);he.textContent=(ge?(j=ge[Math.round(je)])!=null?j:"":je).toString(),se?ve?he.style.top=`${100-xe}%`:he.style.top=`${xe}%`:ve?he.style.left=`${100-xe}%`:he.style.left=`${xe}%`,m==null||m.append(he)}},T=(j,Ee)=>{Re(),k=j,x=Ee,k<=0&&(k=s),x<=0&&(x=n),C(),q(),R()},K=j=>{y=j,y?(C(),q(),R()):Re()},pe=j=>{!p||p.style.setProperty("--marks-color",j)},fe=j=>{!p||p.style.setProperty("--values-color",j)},Re=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(j,Ee,ie,se)=>{var ve,ge;u=se,l=j,y=i(l.getAttribute("marks")),y&&(T(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),pe((ve=l.getAttribute("marks-color"))!=null?ve:"#cbd5e1"),fe((ge=l.getAttribute("marks-values-color"))!=null?ge:"#475569"))},onAttrChange:(j,Ee)=>{j==="marks"&&K(i(Ee)),j==="marks-count"&&T(r(Ee,s),x),j==="marks-values-count"&&T(k,r(Ee,n)),j==="marks-color"&&pe(Ee),j==="marks-values-color"&&fe(Ee)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return y??!1},set:j=>{K(i(j))}}},{name:"marksCount",attributes:{get(){return k??s},set:j=>{T(r(j,s),x)}}},{name:"marksValuesCount",attributes:{get(){return k??s},set:j=>{T(k,r(j,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:j=>{pe(j)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:j=>{fe(j)}}}],destroy:Re,css:`
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
    `}};window.tcRangeSliderPlugins.push(o)})();var qu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,Pt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&qu(e,r,s),s};let mt=class extends dt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=De(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.setFixedRange({from:t.from,to:t.to})}sliderDownListener(t){const e=t.detail;this.from=e.value1,this.to=e.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const i=r.detail;this.from=i.value1,this.to=i.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?L`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:L`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Te(this.sliderRef)}
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

        `}};mt.styles=Ie`

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
    
    `,Pt([ue({context:ka,subscribe:!0}),M()],mt.prototype,"min",2),Pt([ue({context:Ca,subscribe:!0}),M()],mt.prototype,"max",2),Pt([ue({context:mn,subscribe:!0}),M()],mt.prototype,"from",2),Pt([ue({context:fn,subscribe:!0}),M()],mt.prototype,"to",2),Pt([M()],mt.prototype,"hasFixedFrom",2),Pt([M()],mt.prototype,"hasFixedTo",2),Pt([ue({context:Ki,subscribe:!0}),M()],mt.prototype,"palette",2),Pt([M()],mt.prototype,"sliderRef",2),Pt([M()],mt.prototype,"initialised",2),mt=Pt([te("registry-range-slider")],mt);var Ju=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,ni=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ku(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ju(e,r,s),s};let Pr=class extends dt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?N:L`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};ni([ue({context:mn,subscribe:!0})],Pr.prototype,"from",2),ni([ue({context:fn,subscribe:!0})],Pr.prototype,"to",2),ni([U({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],Pr.prototype,"fixed",2),ni([U({type:String,reflect:!0,attribute:!0})],Pr.prototype,"separator",2),Pr=ni([te("registry-range-display")],Pr);var Zu=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,os=(t,e,r,i)=>{for(var s=i>1?void 0:i?ep(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Zu(e,r,s),s};let $r=class extends dt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return L`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":N}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>L`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():L`
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
        `}};$r.styles=Ie`

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


    `,os([M()],$r.prototype,"histogram",2),os([U({type:Boolean,reflect:!0})],$r.prototype,"interactive",2),os([U({type:String,reflect:!0})],$r.prototype,"height",2),$r=os([te("registry-histogram")],$r);/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class as extends Zs{constructor(e){if(super(e),this.it=N,e.type!==Ks.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===Yt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}as.directiveName="unsafeHTML",as.resultType=1;const ft=_i(as);/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class kn extends as{}kn.directiveName="unsafeSVG",kn.resultType=2;const tp=_i(kn);var rp=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,ls=(t,e,r,i)=>{for(var s=i>1?void 0:i?ip(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&rp(e,r,s),s};let Rr=class extends ti{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",t=>{this.hint=t.description})}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?N:L`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return L`
                        
                        <button 
                            class=${_t(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${tp(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Rr.styles=Ie`

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

    `,ls([ue({context:Sa,subscribe:!0}),M()],Rr.prototype,"value",2),ls([ue({context:Ia,subscribe:!0}),M()],Rr.prototype,"tools",2),ls([M()],Rr.prototype,"hint",2),Rr=ls([te("group-tool-buttons")],Rr);var sp=Object.defineProperty,oi=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&sp(e,r,s),s};class Ge extends ti{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent nen\xED v souboru!")}}oi([ue({context:vn,subscribe:!0}),M()],Ge.prototype,"parentFileProviderElement"),oi([ue({context:Pa,subscribe:!0}),M()],Ge.prototype,"loading"),oi([ue({context:Ba,subscribe:!0}),M()],Ge.prototype,"file"),oi([ue({context:La,subscribe:!0}),M()],Ge.prototype,"failure"),oi([ue({context:Ra,subscribe:!0}),M()],Ge.prototype,"recording");var np=Object.defineProperty,op=Object.getOwnPropertyDescriptor,ap=(t,e,r,i)=>{for(var s=i>1?void 0:i?op(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&np(e,r,s),s};let Cn=class extends Ge{constructor(){super(...arguments),this.container=De()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return L`
            <div ${Te(this.container)} class=${_t(r)} part="file-canvas-container">
            
                ${this.loading===!0?L`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?L`<div class="error-wrapper">
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
                        </div>`:N}
            
            </div>
        
        `}};Cn.styles=Ie`
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
    `,Cn=ap([te("file-canvas")],Cn);var lp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,cp=(t,e,r,i)=>{for(var s=i>1?void 0:i?hp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&lp(e,r,s),s};let En=class extends Ge{onInstanceCreated(t){}onFailure(t){}render(){return this.file?L`
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
        `:N}};En.styles=Ie`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `,En=cp([te("file-share-button")],En);var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,pp=(t,e,r,i)=>{for(var s=i>1?void 0:i?up(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&dp(e,r,s),s};let Sn=class extends Ge{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?L`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${ft(this.renderRow("Thermal file name",this.file.fileName))}

                        ${ft(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?ft(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):N}

                        ${ft(this.renderRow("Time",sd.human(this.file.timestamp)))}

                        ${ft(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${ft(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${ft(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${ft(this.renderNumericalRow("Maximal temperature",this.file.max,10,"\xB0C"))}

                        ${ft(this.renderNumericalRow("Minimal temperature",this.file.min,10,"\xB0C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${ft(this.renderRow("Type",this.file.service.parser.name))}
                    ${ft(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>L`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:N}};Sn.styles=Ie`

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
    
    `,Sn=pp([te("file-info-button")],Sn);var gp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,fp=(t,e,r,i)=>{for(var s=i>1?void 0:i?mp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&gp(e,r,s),s};let In=class extends Ge{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?N:L`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this.file?"Download":"Na\u010D\xEDt\xE1m..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">Download original file (${this.file.service.parser.extensions[0].extension.toUpperCase()})</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.exportAsPng()}>Export current frame as PNG image</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?L`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:N}
            
            </thermal-dropdown>

        
        `}};In.styles=Ie`

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
    
    `,In=fp([te("file-download-dropdown")],In);var vp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,lr=(t,e,r,i)=>{for(var s=i>1?void 0:i?bp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&vp(e,r,s),s};let At=class extends Ge{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=De(),this.barRef=De(),this.containerRef=De(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<At.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const e=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(e)}}render(){var n,o,l;const t=this.file;if(t===void 0||t.duration===0)return N;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return L`
            <div class="${_t(e)}" ${Te(this.containerRef)}>


                ${t!==void 0?L`
                        <div class="container">

                            <div class="${_t(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?L`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:L`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>

                            <div class="${_t(s)}"  ${Te(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Te(this.barRef)}></div>
                                </div>

                                <div>
                                    ${this.markers.map(u=>L`<file-marker-timeline start=${u.fromMs} end=${u.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(o=this.duration)==null?void 0:o.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:N}

            
            
            </div>

            ${this.currentFrame!==void 0?L`<div class="small real ${this.collapsed?"collapsed":""}">
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
                    </div>`:N}

          `}};At.collapseWidth=500,At.styles=Ie`
    
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
    
    `,lr([ue({context:An,subscribe:!0}),M()],At.prototype,"playing",2),lr([ue({context:es,subscribe:!0}),M()],At.prototype,"currentFrame",2),lr([ue({context:yn,subscribe:!0}),M()],At.prototype,"duration",2),lr([ue({context:Da,subscribe:!0}),M()],At.prototype,"mayStop",2),lr([ue({context:wn,subscribe:!0})],At.prototype,"markers",2),lr([M()],At.prototype,"collapsed",2),At=lr([te("file-timeline")],At);var yp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,Bn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ap(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&yp(e,r,s),s};let ai=class extends Ge{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?N:L`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(dn).map(([t])=>L`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof Ot&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};ai.styles=Ie`

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
    
    `,Bn([U({type:String,reflect:!0})],ai.prototype,"enabled",2),Bn([ue({context:$a,subscribe:!0}),M()],ai.prototype,"playbackSpeed",2),ai=Bn([te("file-playback-speed-dropdown")],ai);var wp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,Ln=(t,e,r,i)=>{for(var s=i>1?void 0:i?xp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&wp(e,r,s),s};let li=class extends Ge{constructor(){super(...arguments),this.container=De()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return L`
            <div class="container">
            
                <video ${Te(this.container)} preload="metadata">

                    ${this.url===void 0?N:L`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};li.styles=Ie`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `,Ln([ue({context:es,subscribe:!0}),M()],li.prototype,"currentFrame",2),Ln([U({type:String,reflect:!0,attribute:!0})],li.prototype,"url",2),li=Ln([te("file-video")],li);const kp=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),Cr(r,"mm:ss:SSS")},Cp=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(r[0]),s=parseInt(r[1]),n=parseInt(r[2]);return i*60*1e3+s*1e3+n};var Ep=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,$t=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ep(e,r,s),s};const Pn={fromAttribute:t=>t===null?null:Cp(t),toAttribute:t=>t===null?null:kp(t)};let wt=class extends Ge{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),this.log(t,e,r),t==="active"&&r==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((i=this.file)==null||i.timeline.pause())):t==="active"&&r==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const t=await this.getVoice();t&&(this.utterance.voice=t),this.utterance.voice=t,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var e;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((e=this.file)==null||e.timeline.play())}}}async getVoice(){const t=await window.speechSynthesis.getVoices(),e=t.find(i=>i.lang==="cs-CZ");return e||t.find(i=>i.default===!0)||null}render(){return N}};$t([ue({context:An,subscribe:!0}),M()],wt.prototype,"playing",2),$t([ue({context:bn,subscribe:!0}),M()],wt.prototype,"ms",2),$t([U({type:String,reflect:!0,attribute:!0})],wt.prototype,"label",2),$t([U({type:String,reflect:!0,attribute:!0,converter:Pn})],wt.prototype,"start",2),$t([U({type:String,reflect:!0,attribute:!0,converter:Pn})],wt.prototype,"end",2),$t([U({type:String,reflect:!0,attribute:!0,converter:Pn})],wt.prototype,"dur",2),$t([U({type:String,reflect:!0,attribute:!0})],wt.prototype,"active",2),$t([U({type:String,reflect:!0,attribute:!0})],wt.prototype,"pauseOnActivate",2),$t([U({type:String,reflect:!0,attribute:!0})],wt.prototype,"say",2),wt=$t([te("file-marker")],wt);var Ip=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,hr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ip(e,r,s),s};let Tt=class extends Ge{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return L`

            <div class="${_t(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Tt.styles=Ie`
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


    `,hr([ue({context:yn,subscribe:!0}),M()],Tt.prototype,"duration",2),hr([ue({context:es,subscribe:!0}),M()],Tt.prototype,"currentFrame",2),hr([ue({context:bn,subscribe:!0}),M()],Tt.prototype,"ms",2),hr([U({type:Number,reflect:!0,attribute:!0})],Tt.prototype,"start",2),hr([U({type:Number,reflect:!0,attribute:!0})],Tt.prototype,"end",2),hr([M()],Tt.prototype,"active",2),Tt=hr([te("file-marker-timeline")],Tt);var Lp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Fa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Lp(e,r,s),s};let hs=class extends Ge{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return L`
            <div>


            ${this.markers.map(t=>t.active?L`<div class="item">
                    <h2>${t.label}</h2>
                    ${ft(t.innerHTML)}
                    </div>`:N)}

            
            
            </div>

          `}};hs.styles=Ie`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `,Fa([ue({context:wn,subscribe:!0})],hs.prototype,"markers",2),hs=Fa([te("file-marks-content")],hs);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function*$p(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}var Rp=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,$n=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Rp(e,r,s),s};let hi=class extends Ge{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1}onInstanceCreated(){this.file!==void 0&&this.file.analysis.layers.onSelectionChange.add(this.UUID,t=>{this.file&&(this.allSelected=this.file.analysis.value.length===t.length)})}onFailure(){}render(){var t;return this.analysis.length===0?N:L`
            <div class="container">

            <table>

                <caption>
                    Current analysis on the file ${(t=this.file)==null?void 0:t.fileName}
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

                    ${$p(this.analysis,e=>L`
                        <file-analysis-row .analysis=${e}></file-analysis-row>
                    `)}

                </tbody>

            </table>
            
            </div>
        
        `}};hi.styles=Ie`
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
    `,$n([ue({context:Ma,subscribe:!0})],hi.prototype,"analysis",2),$n([M()],hi.prototype,"allSelected",2),hi=$n([te("file-analysis-list")],hi);var Mp=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,xt=(t,e,r,i)=>{for(var s=i>1?void 0:i?_p(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Mp(e,r,s),s};let ut=class extends Ge{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.values={min:void 0,max:void 0,avg:void 0},this.selectedRef=De(),this.activeRef=De()}onInstanceCreated(){}onFailure(){}uuid(t){return`${this.UUID}__${t}`}connectedCallback(){super.connectedCallback(),this.hydrate(this.analysis)}hydrate(t){this.log("HYDRATUJI",t.key),this.selected=t.selected,this.color=t.initialColor,this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,t.onSelected.add("__onSelected",e=>{console.log(this.analysis.key,"selected",e.selected,this.selected),this.selected=!0}),t.onDeselected.add("__onDeselected",e=>{console.log(this.analysis.key,"deselected",e.selected,this.selected),this.selected=!1}),t.onValues.add("__onValues",(e,r,i)=>{this.values={min:e,max:r,avg:i}}),t.onResize.add("__onResize",()=>{this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height})}dehydrate(t){this.log("DEHYDRATUJI",t.key),t.onSelected.remove("__onSelected"),t.onDeselected.remove("__onDeselected"),t.onValues.remove("__onValues"),t.onResize.remove("__onResize")}willUpdate(t){if(super.willUpdate(t),t.has("analysis")){const e=t.get("analysis");e&&this.dehydrate(e),this.hydrate(this.analysis)}}temperatureOrNothing(t){return t===void 0?"-":t.toFixed(1)+" \xB0C"}render(){return this.analysis===void 0?N:L`
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
        `}};ut.styles=Ie`

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



    `,xt([U({type:Object,attribute:!0})],ut.prototype,"analysis",2),xt([U({type:String,reflect:!0,attribute:!0})],ut.prototype,"selected",2),xt([U({type:String,reflect:!0,attribute:!0})],ut.prototype,"active",2),xt([M()],ut.prototype,"color",2),xt([M()],ut.prototype,"values",2),xt([M()],ut.prototype,"top",2),xt([M()],ut.prototype,"left",2),xt([M()],ut.prototype,"width",2),xt([M()],ut.prototype,"height",2),xt([M()],ut.prototype,"selectedRef",2),ut=xt([te("file-analysis-row")],ut);var Op=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,cr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Op(e,r,s),s};let Ft=class extends Ge{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(t){super.willUpdate(t),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return L`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Na\u010D\xEDt\xE1m..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?L`<file-share-button ></file-share-button>`:N}
              ${this.showabout===!0?L`<app-info-button ></app-info-button>`:N}
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
    `}};Ft.styles=Ie`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `,cr([U({type:Number})],Ft.prototype,"from",2),cr([U({type:Number})],Ft.prototype,"to",2),cr([U({type:Number})],Ft.prototype,"speed",2),cr([U({type:String,reflect:!0,attribute:!0})],Ft.prototype,"showembed",2),cr([U({type:String,reflect:!0,attribute:!0})],Ft.prototype,"showabout",2),cr([U({type:String,reflect:!0,attribute:!0})],Ft.prototype,"showfullscreen",2),Ft=cr([te("file-app")],Ft);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Rn=t=>t??N;var Up=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,Dr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Tp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Up(e,r,s),s};let dr=class extends Ji{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?N:L`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${Rn(this.from)} to=${Rn(this.to)} speed=${Rn(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Dr([U({type:String,reflect:!0})],dr.prototype,"palette",2),Dr([U({type:Number})],dr.prototype,"from",2),Dr([U({type:Number})],dr.prototype,"to",2),Dr([U({type:Number,reflect:!0})],dr.prototype,"speed",2),Dr([U({type:String,reflect:!0})],dr.prototype,"url",2),dr=Dr([te("thermal-file-app")],dr);var Fp=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,Dn=(t,e,r,i)=>{for(var s=i>1?void 0:i?jp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Fp(e,r,s),s};let ci=class extends Ji{constructor(){super(...arguments),this.dropinRef=De(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return L`

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

                            ${this.loaded===!0?L`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:N}

                            <file-dropin ${Te(this.dropinRef)}>

                                <file-app showembed="false" showabout="false"></file-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};ci.styles=Ie`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `,Dn([M()],ci.prototype,"dropinRef",2),Dn([M()],ci.prototype,"loaded",2),ci=Dn([te("thermal-dropin-app")],ci);const Mn=window.matchMedia("(prefers-color-scheme: dark)"),_n="thermal-dark-mode",ja=()=>{document.body.classList.add(_n)},Np=()=>{document.body.classList.remove(_n)},Hp=()=>{Mn.matches&&ja();const t=e=>{e.matches?ja():Np()};Mn.addEventListener("change",t),Mn.addListener(t)},Wp=Ws.toString().replaceAll(".","-"),zp=t=>`thermal__${t}__${Wp}`,Na=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",zp(t)),r.innerHTML=e,document.head.appendChild(r)},Yp=()=>{Na("rootVariables",`

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


            
        
        `),Na("darkModeOverrides",`
        
            body.${_n} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${Ws}
    Author: ${bl}
    `),Hp(),Yp(),document.addEventListener("DOMContentLoaded",()=>{});
