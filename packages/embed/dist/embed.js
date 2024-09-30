var Jl=Object.defineProperty;var ec=(t,e,r)=>e in t?Jl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(ec(t,typeof e!="symbol"?e+"":e,r),r);const En="1.2.38",tc="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qi=globalThis,Dn=qi.ShadowRoot&&(qi.ShadyCSS===void 0||qi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tn=Symbol(),Sa=new WeakMap;let uo=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Tn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Dn&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Sa.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Sa.set(r,e))}return e}toString(){return this.cssText}};const rc=t=>new uo(typeof t=="string"?t:t+"",void 0,Tn),Pe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new uo(r,t,Tn)},ic=(t,e)=>{if(Dn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=qi.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},$a=Dn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return rc(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sc,defineProperty:nc,getOwnPropertyDescriptor:ac,getOwnPropertyNames:oc,getOwnPropertySymbols:lc,getPrototypeOf:cc}=Object,lr=globalThis,Pa=lr.trustedTypes,hc=Pa?Pa.emptyScript:"",ln=lr.reactiveElementPolyfillSupport,ni=(t,e)=>t,Qi={toAttribute(t,e){switch(e){case Boolean:t=t?hc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ln=(t,e)=>!sc(t,e),Aa={attribute:!0,type:String,converter:Qi,reflect:!1,hasChanged:Ln};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),lr.litPropertyMetadata??(lr.litPropertyMetadata=new WeakMap);let Lr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Aa){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&nc(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=ac(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Aa}static _$Ei(){if(this.hasOwnProperty(ni("elementProperties")))return;const e=cc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ni("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ni("properties"))){const r=this.properties,i=[...oc(r),...lc(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift($a(s))}else e!==void 0&&r.push($a(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ic(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Qi).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Qi;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ln)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Lr.elementStyles=[],Lr.shadowRootOptions={mode:"open"},Lr[ni("elementProperties")]=new Map,Lr[ni("finalized")]=new Map,ln==null||ln({ReactiveElement:Lr}),(lr.reactiveElementVersions??(lr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=globalThis,Ji=ai.trustedTypes,Oa=Ji?Ji.createPolicy("lit-html",{createHTML:t=>t}):void 0,po="$lit$",or=`lit$${Math.random().toFixed(9).slice(2)}$`,fo="?"+or,dc=`<${fo}>`,_r=document,ci=()=>_r.createComment(""),hi=t=>t===null||typeof t!="object"&&typeof t!="function",go=Array.isArray,uc=t=>go(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",cn=`[ 	
\f\r]`,ri=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ea=/-->/g,Da=/>/g,br=RegExp(`>|${cn}(?:([^\\s"'>=/]+)(${cn}*=${cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ta=/'/g,La=/"/g,mo=/^(?:script|style|textarea|title)$/i,pc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),$=pc(1),cr=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Ra=new WeakMap,wr=_r.createTreeWalker(_r,129);function vo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oa!==void 0?Oa.createHTML(e):e}const fc=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",a=ri;for(let l=0;l<r;l++){const h=t[l];let p,g,f=-1,b=0;for(;b<h.length&&(a.lastIndex=b,g=a.exec(h),g!==null);)b=a.lastIndex,a===ri?g[1]==="!--"?a=Ea:g[1]!==void 0?a=Da:g[2]!==void 0?(mo.test(g[2])&&(s=RegExp("</"+g[2],"g")),a=br):g[3]!==void 0&&(a=br):a===br?g[0]===">"?(a=s??ri,f=-1):g[1]===void 0?f=-2:(f=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?br:g[3]==='"'?La:Ta):a===La||a===Ta?a=br:a===Ea||a===Da?a=ri:(a=br,s=void 0);const w=a===br&&t[l+1].startsWith("/>")?" ":"";n+=a===ri?h+dc:f>=0?(i.push(p),h.slice(0,f)+po+h.slice(f)+or+w):h+or+(f===-2?l:w)}return[vo(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let yn=class bo{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,h=this.parts,[p,g]=fc(e,r);if(this.el=bo.createElement(p,i),wr.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=wr.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(po)){const b=g[a++],w=s.getAttribute(f).split(or),_=/([.?@])?(.*)/.exec(b);h.push({type:1,index:n,name:_[2],strings:w,ctor:_[1]==="."?mc:_[1]==="?"?vc:_[1]==="@"?bc:hs}),s.removeAttribute(f)}else f.startsWith(or)&&(h.push({type:6,index:n}),s.removeAttribute(f));if(mo.test(s.tagName)){const f=s.textContent.split(or),b=f.length-1;if(b>0){s.textContent=Ji?Ji.emptyScript:"";for(let w=0;w<b;w++)s.append(f[w],ci()),wr.nextNode(),h.push({type:2,index:++n});s.append(f[b],ci())}}}else if(s.nodeType===8)if(s.data===fo)h.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(or,f+1))!==-1;)h.push({type:7,index:n}),f+=or.length-1}n++}}static createElement(e,r){const i=_r.createElement("template");return i.innerHTML=e,i}};function Ur(t,e,r=t,i){var a,l;if(e===cr)return e;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=hi(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=Ur(t,s._$AS(t,e.values),s,i)),e}let gc=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??_r).importNode(r,!0);wr.currentNode=s;let n=wr.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new yi(n,n.nextSibling,this,e):h.type===1?p=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(p=new yc(n,this,e)),this._$AV.push(p),h=i[++l]}a!==(h==null?void 0:h.index)&&(n=wr.nextNode(),a++)}return wr.currentNode=_r,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class yi{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ur(this,e,r),hi(e)?e===X||e==null||e===""?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==cr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):uc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==X&&hi(this._$AH)?this._$AA.nextSibling.data=e:this.T(_r.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=yn.createElement(vo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new gc(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=Ra.get(e.strings);return r===void 0&&Ra.set(e.strings,r=new yn(e)),r}k(e){go(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new yi(this.S(ci()),this.S(ci()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let hs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(e,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Ur(this,e,r,0),a=!hi(e)||e!==this._$AH&&e!==cr,a&&(this._$AH=e);else{const l=e;let h,p;for(e=n[0],h=0;h<n.length-1;h++)p=Ur(this,l[i+h],r,h),p===cr&&(p=this._$AH[h]),a||(a=!hi(p)||p!==this._$AH[h]),p===X?e=X:e!==X&&(e+=(p??"")+n[h+1]),this._$AH[h]=p}a&&!s&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},mc=class extends hs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}};class vc extends hs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class bc extends hs{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Ur(this,e,r,0)??X)===cr)return;const i=this._$AH,s=e===X&&i!==X||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==X&&(i===X||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let yc=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ur(this,e)}};const hn=ai.litHtmlPolyfillSupport;hn==null||hn(yn,yi),(ai.litHtmlVersions??(ai.litHtmlVersions=[])).push("3.1.4");const wc=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new yi(e.insertBefore(ci(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rt=class extends Lr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return cr}};var ho;rt._$litElement$=!0,rt.finalized=!0,(ho=globalThis.litElementHydrateSupport)==null||ho.call(globalThis,{LitElement:rt});const dn=globalThis.litElementPolyfillSupport;dn==null||dn({LitElement:rt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xc={attribute:!0,type:String,converter:Qi,reflect:!1,hasChanged:Ln},_c=(t=xc,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,h,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const h=this[a];e.call(this,l),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+i)};function O(t){return(e,r)=>typeof r=="object"?_c(t,e,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t){return O({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wi(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return kc(e,r,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Cc={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function zi(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Vi(t){return t.toString().indexOf("`")===-1}Vi(t=>t``)||Vi(t=>t`\0`)||Vi(t=>t`\n`)||Vi(t=>t`\u0000`);zi``&&zi`\0`&&zi`\n`&&zi`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Sc="google#safe";function $c(){if(typeof window<"u")return window.trustedTypes}function yo(){var t;return(t=$c())!==null&&t!==void 0?t:null}let Yi;function Pc(){var t,e;if(Yi===void 0)try{Yi=(e=(t=yo())===null||t===void 0?void 0:t.createPolicy(Sc,{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r}))!==null&&e!==void 0?e:null}catch{Yi=null}return Yi}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class wo{constructor(e,r){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Ma(t){var e;const r=t,i=(e=Pc())===null||e===void 0?void 0:e.createScriptURL(r);return i??new wo(r,Cc)}function Ac(t){var e;if(!((e=yo())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof wo)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let r="";throw new Error(r)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function xo(t,...e){if(e.length===0)return Ma(t[0]);t[0].toLowerCase();let r=t[0];for(let i=0;i<e.length;i++)r+=encodeURIComponent(e[i])+t[i+1];return Ma(r)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Oc(t){var e;const r=t.document,i=(e=r.querySelector)===null||e===void 0?void 0:e.call(r,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Ec(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,r=Oc(e||window);r&&t.setAttribute("nonce",r)}function _o(t,e,r){t.src=Ac(e),Ec(t)}/**
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
 */const Dc=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),_o(r,xo`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function ko(t={}){await Dc;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function Ua(t){if(await ko(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Tc(t){return await ko(),new google.visualization.ChartWrapper({container:t})}/**
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
 */var er=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(s<3?a(n):s>3?a(e,r,n):a(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Fa=["ready","select"],Lc={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class Et extends rt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return $`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Tc(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Fa,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Lc[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(s=>!Fa.includes(s)),r);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,r){for(const i of e)google.visualization.events.addListener(r,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const i=await Ua({cols:r});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,r;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?r=fetch(e).then(s=>s.json()):r=Promise.resolve(e),r.then(Ua).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of r){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}Et.styles=Pe`
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
  `;er([O({type:String,reflect:!0})],Et.prototype,"type",void 0);er([O({type:Array})],Et.prototype,"events",void 0);er([O({type:Object,hasChanged:()=>!0})],Et.prototype,"options",void 0);er([O({type:Array})],Et.prototype,"cols",void 0);er([O({type:Array})],Et.prototype,"rows",void 0);er([O({type:String})],Et.prototype,"data",void 0);er([O({type:Object})],Et.prototype,"view",void 0);er([O({type:Array})],Et.prototype,"selection",void 0);er([O({type:Object})],Et.prototype,"_data",void 0);customElements.define("google-chart",Et);/**
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
 */const Rc=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),_o(r,xo`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function Co(t={}){await Rc;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function Ia(t){if(await Co(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Mc(t){return await Co(),new google.visualization.ChartWrapper({container:t})}function Ct(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function kr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const So=6048e5,Uc=864e5;let Fc={};function ds(){return Fc}function di(t,e){var l,h,p,g;const r=ds(),i=(e==null?void 0:e.weekStartsOn)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((g=(p=r.locale)==null?void 0:p.options)==null?void 0:g.weekStartsOn)??0,s=Ct(t),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function es(t){return di(t,{weekStartsOn:1})}function $o(t){const e=Ct(t),r=e.getFullYear(),i=kr(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=es(i),n=kr(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=es(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function ja(t){const e=Ct(t);return e.setHours(0,0,0,0),e}function Wa(t){const e=Ct(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Ic(t,e){const r=ja(t),i=ja(e),s=+r-Wa(r),n=+i-Wa(i);return Math.round((s-n)/Uc)}function jc(t){const e=$o(t),r=kr(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),es(r)}function Wc(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Po(t){if(!Wc(t)&&typeof t!="number")return!1;const e=Ct(t);return!isNaN(Number(e))}function Nc(t){const e=Ct(t),r=kr(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Hc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Bc=(t,e,r)=>{let i;const s=Hc[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function un(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const zc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Vc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Yc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Gc={date:un({formats:zc,defaultWidth:"full"}),time:un({formats:Vc,defaultWidth:"full"}),dateTime:un({formats:Yc,defaultWidth:"full"})},qc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Xc=(t,e,r,i)=>qc[t];function ii(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const Kc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Zc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Qc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Jc={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},th={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},rh=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ih={ordinalNumber:rh,era:ii({values:Kc,defaultWidth:"wide"}),quarter:ii({values:Zc,defaultWidth:"wide",argumentCallback:t=>t-1}),month:ii({values:Qc,defaultWidth:"wide"}),day:ii({values:Jc,defaultWidth:"wide"}),dayPeriod:ii({values:eh,defaultWidth:"wide",formattingValues:th,defaultFormattingWidth:"wide"})};function si(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(l)?nh(l,f=>f.test(a)):sh(l,f=>f.test(a));let p;p=t.valueCallback?t.valueCallback(h):h,p=r.valueCallback?r.valueCallback(p):p;const g=e.slice(a.length);return{value:p,rest:g}}}function sh(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function nh(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function ah(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const oh=/^(\d+)(th|st|nd|rd)?/i,lh=/\d+/i,ch={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},hh={any:[/^b/i,/^(a|c)/i]},dh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},uh={any:[/1/i,/2/i,/3/i,/4/i]},ph={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},fh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gh={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},mh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},bh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},yh={ordinalNumber:ah({matchPattern:oh,parsePattern:lh,valueCallback:t=>parseInt(t,10)}),era:si({matchPatterns:ch,defaultMatchWidth:"wide",parsePatterns:hh,defaultParseWidth:"any"}),quarter:si({matchPatterns:dh,defaultMatchWidth:"wide",parsePatterns:uh,defaultParseWidth:"any",valueCallback:t=>t+1}),month:si({matchPatterns:ph,defaultMatchWidth:"wide",parsePatterns:fh,defaultParseWidth:"any"}),day:si({matchPatterns:gh,defaultMatchWidth:"wide",parsePatterns:mh,defaultParseWidth:"any"}),dayPeriod:si({matchPatterns:vh,defaultMatchWidth:"any",parsePatterns:bh,defaultParseWidth:"any"})},wh={code:"en-US",formatDistance:Bc,formatLong:Gc,formatRelative:Xc,localize:ih,match:yh,options:{weekStartsOn:0,firstWeekContainsDate:1}};function xh(t){const e=Ct(t);return Ic(e,Nc(e))+1}function _h(t){const e=Ct(t),r=+es(e)-+jc(e);return Math.round(r/So)+1}function Ao(t,e){var g,f,b,w;const r=Ct(t),i=r.getFullYear(),s=ds(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((w=(b=s.locale)==null?void 0:b.options)==null?void 0:w.firstWeekContainsDate)??1,a=kr(t,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=di(a,e),h=kr(t,0);h.setFullYear(i,0,n),h.setHours(0,0,0,0);const p=di(h,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function kh(t,e){var l,h,p,g;const r=ds(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(p=r.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,s=Ao(t,e),n=kr(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),di(n,e)}function Ch(t,e){const r=Ct(t),i=+di(r,e)-+kh(r,e);return Math.round(i/So)+1}function we(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const ar={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return we(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):we(r+1,2)},d(t,e){return we(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return we(t.getHours()%12||12,e.length)},H(t,e){return we(t.getHours(),e.length)},m(t,e){return we(t.getMinutes(),e.length)},s(t,e){return we(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return we(s,e.length)}},Dr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Na={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return ar.y(t,e)},Y:function(t,e,r,i){const s=Ao(t,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return we(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):we(n,e.length)},R:function(t,e){const r=$o(t);return we(r,e.length)},u:function(t,e){const r=t.getFullYear();return we(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return we(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return we(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return ar.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return we(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Ch(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):we(s,e.length)},I:function(t,e,r){const i=_h(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):we(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):ar.d(t,e)},D:function(t,e,r){const i=xh(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):we(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return we(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return we(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return we(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=Dr.noon:i===0?s=Dr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=Dr.evening:i>=12?s=Dr.afternoon:i>=4?s=Dr.morning:s=Dr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return ar.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):ar.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):we(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):we(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):ar.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):ar.s(t,e)},S:function(t,e){return ar.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Ba(i);case"XXXX":case"XX":return yr(i);case"XXXXX":case"XXX":default:return yr(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return Ba(i);case"xxxx":case"xx":return yr(i);case"xxxxx":case"xxx":default:return yr(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ha(i,":");case"OOOO":default:return"GMT"+yr(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ha(i,":");case"zzzz":default:return"GMT"+yr(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return we(i,e.length)},T:function(t,e,r){const i=t.getTime();return we(i,e.length)}};function Ha(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+we(n,2)}function Ba(t,e){return t%60===0?(t>0?"-":"+")+we(Math.abs(t)/60,2):yr(t,e)}function yr(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=we(Math.trunc(i/60),2),n=we(i%60,2);return r+s+e+n}const za=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Oo=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Sh=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return za(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",za(i,e)).replace("{{time}}",Oo(s,e))},$h={p:Oo,P:Sh},Ph=/^D+$/,Ah=/^Y+$/,Oh=["D","DD","YY","YYYY"];function Eh(t){return Ph.test(t)}function Dh(t){return Ah.test(t)}function Th(t,e,r){const i=Lh(t,e,r);if(console.warn(i),Oh.includes(t))throw new RangeError(i)}function Lh(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Rh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Uh=/^'([^]*?)'?$/,Fh=/''/g,Ih=/[a-zA-Z]/;function Vt(t,e,r){var g,f,b,w;const i=ds(),s=i.locale??wh,n=i.firstWeekContainsDate??((f=(g=i.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??((w=(b=i.locale)==null?void 0:b.options)==null?void 0:w.weekStartsOn)??0,l=Ct(t);if(!Po(l))throw new RangeError("Invalid time value");let h=e.match(Mh).map(_=>{const A=_[0];if(A==="p"||A==="P"){const k=$h[A];return k(_,s.formatLong)}return _}).join("").match(Rh).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const A=_[0];if(A==="'")return{isToken:!1,value:jh(_)};if(Na[A])return{isToken:!0,value:_};if(A.match(Ih))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:_}});s.localize.preprocessor&&(h=s.localize.preprocessor(l,h));const p={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return h.map(_=>{if(!_.isToken)return _.value;const A=_.value;(Dh(A)||Eh(A))&&Th(A,e,String(t));const k=Na[A[0]];return k(l,A,s.localize,p)}).join("")}function jh(t){const e=t.match(Uh);return e?e[1].replace(Fh,"'"):t}function pn(t,e){const r=Ct(t);if(!Po(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const h=we(r.getDate(),2),p=we(r.getMonth()+1,2);n=`${we(r.getFullYear(),4)}${a}${p}${a}${h}`}if(s!=="date"){const h=we(r.getHours(),2),p=we(r.getMinutes(),2),g=we(r.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${l}${p}${l}${g}`}return n}var Wh={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Nh=`\r
`,Hh="\uFEFF",us=t=>Object.assign({},Wh,t);class Bh extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class zh extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class Vh extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Yh extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Xr=t=>t,mt=t=>t,oi=Xr,ps=Xr,Fr=Xr,Va=Xr,Ya=Xr,Gh=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},qh=t=>Va(typeof t=="object"?t.key:t),Xh=t=>Ya(typeof t=="object"?t.displayLabel:t),Kh=(t,...e)=>e.reduce((r,i)=>i(r),t),Zh=t=>e=>t.useBom?ps(mt(e)+Hh):e,Qh=t=>e=>t.showTitle?Rn(ps(mt(e)+t.title))(Fr("")):e,Rn=t=>e=>ps(mt(t)+mt(e)+Nh),Eo=t=>(e,r)=>Jh(t)(Fr(mt(e)+mt(r))),Jh=t=>e=>Xr(mt(e)+t.fieldSeparator),ed=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new zh("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Fr("");for(let s=0;s<e.length;s++){const n=Xh(e[s]);i=Eo(t)(i,Do(t,mt(n)))}return i=Fr(mt(i).slice(0,-1)),Rn(r)(i)},td=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=Fr("");for(let l=0;l<e.length;l++){const h=qh(e[l]),p=r[n][mt(h)];a=Eo(t)(a,Do(t,p))}a=Fr(mt(a).slice(0,-1)),s=Rn(s)(a)}return s},rd=t=>+t===t&&(!isFinite(t)||!!(t%1)),id=(t,e)=>{if(rd(e)){if(t.decimalSeparator==="locale")return oi(e.toLocaleString());if(t.decimalSeparator)return oi(e.toString().replace(".",t.decimalSeparator))}return oi(e.toString())},Xi=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+Gh(e,t.quoteCharacter)+t.quoteCharacter),oi(r)},sd=(t,e)=>{const r=e?"true":"false";return oi(t.boolDisplay[r])},nd=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?Xi(t,t.replaceUndefinedWith+""):e===null?Xi(t,"null"):Xi(t,""),Do=(t,e)=>{if(typeof e=="number")return id(t,e);if(typeof e=="string")return Xi(t,e);if(typeof e=="boolean"&&t.boolDisplay)return sd(t,e);if(e===null||typeof e>"u")return nd(t,e);throw new Yh(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},ad=t=>e=>{const r=us(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=Kh(ps(""),Zh(r),Qh(r),ed(r,i),td(r,i,e));if(mt(s).length<1)throw new Bh("Output is empty. Is your data formatted correctly?");return s},od=t=>e=>{const r=us(t),i=mt(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},ld=t=>e=>{if(!window)throw new Vh("Downloading only supported in a browser environment.");const r=od(t)(e),i=us(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hd(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var wn={exports:{}};const dd={},ud=Object.freeze(Object.defineProperty({__proto__:null,default:dd},Symbol.toStringTag,{value:"Module"})),Tr=hd(ud);/**
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
 */(function(t,e){(function(r,i){i(e)})(cd,function(r){var i={},s={exports:{}};(function(C){var D=function(Q){return typeof Q<"u"&&Q.versions!=null&&Q.versions.node!=null&&Q+""=="[object process]"};C.exports.isNode=D,C.exports.platform=typeof process<"u"&&D(process)?"node":"browser";var T=C.exports.platform==="node"&&Tr;C.exports.isMainThread=C.exports.platform==="node"?(!T||T.isMainThread)&&!process.connected:typeof Window<"u",C.exports.cpus=C.exports.platform==="browser"?self.navigator.hardwareConcurrency:Tr.cpus().length})(s);var n=s.exports,a={},l;function h(){if(l)return a;l=1;function C(Q,Ce){var ne=this;if(!(this instanceof C))throw new SyntaxError("Constructor must be called with the new operator");if(typeof Q!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Te=[],xe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var H=function(le,ve){Te.push(le),xe.push(ve)};this.then=function(S,le){return new C(function(ve,Ve){var Je=S?D(S,ve,Ve):ve,Rt=le?D(le,ve,Ve):Ve;H(Je,Rt)},ne)};var _e=function(le){return ne.resolved=!0,ne.rejected=!1,ne.pending=!1,Te.forEach(function(ve){ve(le)}),H=function(Ve,Je){Ve(le)},_e=x=function(){},ne},x=function(le){return ne.resolved=!1,ne.rejected=!0,ne.pending=!1,xe.forEach(function(ve){ve(le)}),H=function(Ve,Je){Je(le)},_e=x=function(){},ne};this.cancel=function(){return Ce?Ce.cancel():x(new T),ne},this.timeout=function(S){if(Ce)Ce.timeout(S);else{var le=setTimeout(function(){x(new L("Promise timed out after "+S+" ms"))},S);ne.always(function(){clearTimeout(le)})}return ne},Q(function(S){_e(S)},function(S){x(S)})}function D(Q,Ce,ne){return function(Te){try{var xe=Q(Te);xe&&typeof xe.then=="function"&&typeof xe.catch=="function"?xe.then(Ce,ne):Ce(xe)}catch(H){ne(H)}}}C.prototype.catch=function(Q){return this.then(null,Q)},C.prototype.always=function(Q){return this.then(Q,Q)},C.all=function(Q){return new C(function(Ce,ne){var Te=Q.length,xe=[];Te?Q.forEach(function(H,_e){H.then(function(x){xe[_e]=x,Te--,Te==0&&Ce(xe)},function(x){Te=0,ne(x)})}):Ce(xe)})},C.defer=function(){var Q={};return Q.promise=new C(function(Ce,ne){Q.resolve=Ce,Q.reject=ne}),Q};function T(Q){this.message=Q||"promise cancelled",this.stack=new Error().stack}T.prototype=new Error,T.prototype.constructor=Error,T.prototype.name="CancellationError",C.CancellationError=T;function L(Q){this.message=Q||"timeout exceeded",this.stack=new Error().stack}return L.prototype=new Error,L.prototype.constructor=Error,L.prototype.name="TimeoutError",C.TimeoutError=L,a.Promise=C,a}function p(C,D){(D==null||D>C.length)&&(D=C.length);for(var T=0,L=Array(D);T<D;T++)L[T]=C[T];return L}function g(C,D){var T=typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"];if(!T){if(Array.isArray(C)||(T=F(C))||D){T&&(C=T);var L=0,Q=function(){};return{s:Q,n:function(){return L>=C.length?{done:!0}:{done:!1,value:C[L++]}},e:function(xe){throw xe},f:Q}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ce,ne=!0,Te=!1;return{s:function(){T=T.call(C)},n:function(){var xe=T.next();return ne=xe.done,xe},e:function(xe){Te=!0,Ce=xe},f:function(){try{ne||T.return==null||T.return()}finally{if(Te)throw Ce}}}}function f(C,D,T){return(D=A(D))in C?Object.defineProperty(C,D,{value:T,enumerable:!0,configurable:!0,writable:!0}):C[D]=T,C}function b(C,D){var T=Object.keys(C);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(C);D&&(L=L.filter(function(Q){return Object.getOwnPropertyDescriptor(C,Q).enumerable})),T.push.apply(T,L)}return T}function w(C){for(var D=1;D<arguments.length;D++){var T=arguments[D]!=null?arguments[D]:{};D%2?b(Object(T),!0).forEach(function(L){f(C,L,T[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(T)):b(Object(T)).forEach(function(L){Object.defineProperty(C,L,Object.getOwnPropertyDescriptor(T,L))})}return C}function _(C,D){if(typeof C!="object"||!C)return C;var T=C[Symbol.toPrimitive];if(T!==void 0){var L=T.call(C,D||"default");if(typeof L!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return(D==="string"?String:Number)(C)}function A(C){var D=_(C,"string");return typeof D=="symbol"?D:D+""}function k(C){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},k(C)}function F(C,D){if(C){if(typeof C=="string")return p(C,D);var T={}.toString.call(C).slice(8,-1);return T==="Object"&&C.constructor&&(T=C.constructor.name),T==="Map"||T==="Set"?Array.from(C):T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)?p(C,D):void 0}}var U={exports:{}},W={},B;function N(){return B||(B=1,W.validateOptions=function(D,T,L){if(D){var Q=D?Object.keys(D):[],Ce=Q.find(function(Te){return!T.includes(Te)});if(Ce)throw new Error('Object "'+L+'" contains an unknown option "'+Ce+'"');var ne=T.find(function(Te){return Object.prototype[Te]&&!Q.includes(Te)});if(ne)throw new Error('Object "'+L+'" contains an inherited option "'+ne+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return D}},W.workerOptsNames=["credentials","name","type"],W.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],W.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),W}var ae,E;function V(){return E||(E=1,ae=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ae}var Y;function K(){if(Y)return U.exports;Y=1;var C=h(),D=C.Promise,T=n,L=N(),Q=L.validateOptions,Ce=L.forkOptsNames,ne=L.workerThreadOptsNames,Te=L.workerOptsNames,xe="__workerpool-terminate__";function H(){var Z=x();if(!Z)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return Z}function _e(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function x(){try{return Tr}catch(Z){if(k(Z)==="object"&&Z!==null&&Z.code==="MODULE_NOT_FOUND")return null;throw Z}}function S(){if(T.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var Z=new Blob([V()],{type:"text/javascript"});return window.URL.createObjectURL(Z)}else return __dirname+"/worker.js"}function le(Z,he){if(he.workerType==="web")return _e(),ve(Z,he.workerOpts,Worker);if(he.workerType==="thread")return P=H(),Ve(Z,P,he);if(he.workerType==="process"||!he.workerType)return Je(Z,Rt(he),Tr);if(T.platform==="browser")return _e(),ve(Z,he.workerOpts,Worker);var P=x();return P?Ve(Z,P,he):Je(Z,Rt(he),Tr)}function ve(Z,he,P){Q(he,Te,"workerOpts");var se=new P(Z,he);return se.isBrowserWorker=!0,se.on=function(Se,ke){this.addEventListener(Se,function(Fe){ke(Fe.data)})},se.send=function(Se,ke){this.postMessage(Se,ke)},se}function Ve(Z,he,P){var se,Se;Q(P==null?void 0:P.workerThreadOpts,ne,"workerThreadOpts");var ke=new he.Worker(Z,w({stdout:(se=P==null?void 0:P.emitStdStreams)!==null&&se!==void 0?se:!1,stderr:(Se=P==null?void 0:P.emitStdStreams)!==null&&Se!==void 0?Se:!1},P==null?void 0:P.workerThreadOpts));return ke.isWorkerThread=!0,ke.send=function(Fe,be){this.postMessage(Fe,be)},ke.kill=function(){return this.terminate(),!0},ke.disconnect=function(){this.terminate()},P!=null&&P.emitStdStreams&&(ke.stdout.on("data",function(Fe){return ke.emit("stdout",Fe)}),ke.stderr.on("data",function(Fe){return ke.emit("stderr",Fe)})),ke}function Je(Z,he,P){Q(he.forkOpts,Ce,"forkOpts");var se=P.fork(Z,he.forkArgs,he.forkOpts),Se=se.send;return se.send=function(ke){return Se.call(se,ke)},he.emitStdStreams&&(se.stdout.on("data",function(ke){return se.emit("stdout",ke)}),se.stderr.on("data",function(ke){return se.emit("stderr",ke)})),se.isChildProcess=!0,se}function Rt(Z){Z=Z||{};var he=process.execArgv.join(" "),P=he.indexOf("--inspect")!==-1,se=he.indexOf("--debug-brk")!==-1,Se=[];return P&&(Se.push("--inspect="+Z.debugPort),se&&Se.push("--debug-brk")),process.execArgv.forEach(function(ke){ke.indexOf("--max-old-space-size")>-1&&Se.push(ke)}),Object.assign({},Z,{forkArgs:Z.forkArgs,forkOpts:Object.assign({},Z.forkOpts,{execArgv:(Z.forkOpts&&Z.forkOpts.execArgv||[]).concat(Se),stdio:Z.emitStdStreams?"pipe":void 0})})}function ft(Z){for(var he=new Error(""),P=Object.keys(Z),se=0;se<P.length;se++)he[P[se]]=Z[P[se]];return he}function wt(Z,he){if(Object.keys(Z.processing).length===1){var P=Object.values(Z.processing)[0];P.options&&typeof P.options.on=="function"&&P.options.on(he)}}function sr(Z,he){var P=this,se=he||{};this.script=Z||S(),this.worker=le(this.script,se),this.debugPort=se.debugPort,this.forkOpts=se.forkOpts,this.forkArgs=se.forkArgs,this.workerOpts=se.workerOpts,this.workerThreadOpts=se.workerThreadOpts,this.workerTerminateTimeout=se.workerTerminateTimeout,Z||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(be){wt(P,{stdout:be.toString()})}),this.worker.on("stderr",function(be){wt(P,{stderr:be.toString()})}),this.worker.on("message",function(be){if(!P.terminated)if(typeof be=="string"&&be==="ready")P.worker.ready=!0,ke();else{var ot=be.id,Ye=P.processing[ot];Ye!==void 0&&(be.isEvent?Ye.options&&typeof Ye.options.on=="function"&&Ye.options.on(be.payload):(delete P.processing[ot],P.terminating===!0&&P.terminate(),be.error?Ye.resolver.reject(ft(be.error)):Ye.resolver.resolve(be.result)))}});function Se(be){P.terminated=!0;for(var ot in P.processing)P.processing[ot]!==void 0&&P.processing[ot].resolver.reject(be);P.processing=Object.create(null)}function ke(){var be=g(P.requestQueue.splice(0)),ot;try{for(be.s();!(ot=be.n()).done;){var Ye=ot.value;P.worker.send(Ye.message,Ye.transfer)}}catch(Ti){be.e(Ti)}finally{be.f()}}var Fe=this.worker;this.worker.on("error",Se),this.worker.on("exit",function(be,ot){var Ye=`Workerpool Worker terminated Unexpectedly
`;Ye+="    exitCode: `"+be+"`\n",Ye+="    signalCode: `"+ot+"`\n",Ye+="    workerpool.script: `"+P.script+"`\n",Ye+="    spawnArgs: `"+Fe.spawnargs+"`\n",Ye+="    spawnfile: `"+Fe.spawnfile+"`\n",Ye+="    stdout: `"+Fe.stdout+"`\n",Ye+="    stderr: `"+Fe.stderr+"`\n",Se(new Error(Ye))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return sr.prototype.methods=function(){return this.exec("methods")},sr.prototype.exec=function(Z,he,P,se){P||(P=D.defer());var Se=++this.lastId;this.processing[Se]={id:Se,resolver:P,options:se};var ke={message:{id:Se,method:Z,params:he},transfer:se&&se.transfer};this.terminated?P.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ke.message,ke.transfer):this.requestQueue.push(ke);var Fe=this;return P.promise.catch(function(be){if(be instanceof D.CancellationError||be instanceof D.TimeoutError)return delete Fe.processing[Se],Fe.terminateAndNotify(!0).then(function(){throw be},function(ot){throw ot});throw be})},sr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},sr.prototype.terminate=function(Z,he){var P=this;if(Z){for(var se in this.processing)this.processing[se]!==void 0&&this.processing[se].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof he=="function"&&(this.terminationHandler=he),this.busy())this.terminating=!0;else{var Se=function(be){if(P.terminated=!0,P.cleaning=!1,P.worker!=null&&P.worker.removeAllListeners&&P.worker.removeAllListeners("message"),P.worker=null,P.terminating=!1,P.terminationHandler)P.terminationHandler(be,P);else if(be)throw be};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Se(new Error("worker already killed!"));return}var ke=setTimeout(function(){P.worker&&P.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ke),P.worker&&(P.worker.killed=!0),Se()}),this.worker.ready?this.worker.send(xe):this.requestQueue.push({message:xe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Se()}},sr.prototype.terminateAndNotify=function(Z,he){var P=D.defer();return he&&P.promise.timeout(he),this.terminate(Z,function(se,Se){se?P.reject(se):P.resolve(Se)}),P.promise},U.exports=sr,U.exports._tryRequireWorkerThreads=x,U.exports._setupProcessWorker=Je,U.exports._setupBrowserWorker=ve,U.exports._setupWorkerThreadWorker=Ve,U.exports.ensureWorkerThreads=H,U.exports}var oe,G;function re(){if(G)return oe;G=1;var C=65535;oe=D;function D(){this.ports=Object.create(null),this.length=0}return D.prototype.nextAvailableStartingAt=function(T){for(;this.ports[T]===!0;)T++;if(T>=C)throw new Error("WorkerPool debug port limit reached: "+T+">= "+C);return this.ports[T]=!0,this.length++,T},D.prototype.releasePort=function(T){delete this.ports[T],this.length--},oe}var ie,ce;function De(){if(ce)return ie;ce=1;var C=h(),D=C.Promise,T=K(),L=n,Q=re(),Ce=new Q;function ne(x,S){typeof x=="string"?this.script=x||null:(this.script=null,S=x),this.workers=[],this.tasks=[],S=S||{},this.forkArgs=Object.freeze(S.forkArgs||[]),this.forkOpts=Object.freeze(S.forkOpts||{}),this.workerOpts=Object.freeze(S.workerOpts||{}),this.workerThreadOpts=Object.freeze(S.workerThreadOpts||{}),this.debugPortStart=S.debugPortStart||43210,this.nodeWorker=S.nodeWorker,this.workerType=S.workerType||S.nodeWorker||"auto",this.maxQueueSize=S.maxQueueSize||1/0,this.workerTerminateTimeout=S.workerTerminateTimeout||1e3,this.onCreateWorker=S.onCreateWorker||function(){return null},this.onTerminateWorker=S.onTerminateWorker||function(){return null},this.emitStdStreams=S.emitStdStreams||!1,S&&"maxWorkers"in S?(Te(S.maxWorkers),this.maxWorkers=S.maxWorkers):this.maxWorkers=Math.max((L.cpus||4)-1,1),S&&"minWorkers"in S&&(S.minWorkers==="max"?this.minWorkers=this.maxWorkers:(xe(S.minWorkers),this.minWorkers=S.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&T.ensureWorkerThreads()}ne.prototype.exec=function(x,S,le){if(S&&!Array.isArray(S))throw new TypeError('Array expected as argument "params"');if(typeof x=="string"){var ve=D.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ve=this.tasks,Je={method:x,params:S,resolver:ve,timeout:null,options:le};Ve.push(Je);var Rt=ve.promise.timeout;return ve.promise.timeout=function(wt){return Ve.indexOf(Je)!==-1?(Je.timeout=wt,ve.promise):Rt.call(ve.promise,wt)},this._next(),ve.promise}else{if(typeof x=="function")return this.exec("run",[String(x),S],le);throw new TypeError('Function or string expected as argument "method"')}},ne.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var x=this;return this.exec("methods").then(function(S){var le={};return S.forEach(function(ve){le[ve]=function(){return x.exec(ve,Array.prototype.slice.call(arguments))}}),le})},ne.prototype._next=function(){if(this.tasks.length>0){var x=this._getWorker();if(x){var S=this,le=this.tasks.shift();if(le.resolver.promise.pending){var ve=x.exec(le.method,le.params,le.resolver,le.options).then(S._boundNext).catch(function(){if(x.terminated)return S._removeWorker(x)}).then(function(){S._next()});typeof le.timeout=="number"&&ve.timeout(le.timeout)}else S._next()}}},ne.prototype._getWorker=function(){for(var x=this.workers,S=0;S<x.length;S++){var le=x[S];if(le.busy()===!1)return le}return x.length<this.maxWorkers?(le=this._createWorkerHandler(),x.push(le),le):null},ne.prototype._removeWorker=function(x){var S=this;return Ce.releasePort(x.debugPort),this._removeWorkerFromList(x),this._ensureMinWorkers(),new D(function(le,ve){x.terminate(!1,function(Ve){S.onTerminateWorker({forkArgs:x.forkArgs,forkOpts:x.forkOpts,workerThreadOpts:x.workerThreadOpts,script:x.script}),Ve?ve(Ve):le(x)})})},ne.prototype._removeWorkerFromList=function(x){var S=this.workers.indexOf(x);S!==-1&&this.workers.splice(S,1)},ne.prototype.terminate=function(x,S){var le=this;this.tasks.forEach(function(ft){ft.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ve=function(wt){Ce.releasePort(wt.debugPort),this._removeWorkerFromList(wt)},Ve=ve.bind(this),Je=[],Rt=this.workers.slice();return Rt.forEach(function(ft){var wt=ft.terminateAndNotify(x,S).then(Ve).always(function(){le.onTerminateWorker({forkArgs:ft.forkArgs,forkOpts:ft.forkOpts,workerThreadOpts:ft.workerThreadOpts,script:ft.script})});Je.push(wt)}),D.all(Je)},ne.prototype.stats=function(){var x=this.workers.length,S=this.workers.filter(function(le){return le.busy()}).length;return{totalWorkers:x,busyWorkers:S,idleWorkers:x-S,pendingTasks:this.tasks.length,activeTasks:S}},ne.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var x=this.workers.length;x<this.minWorkers;x++)this.workers.push(this._createWorkerHandler())},ne.prototype._createWorkerHandler=function(){var x=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new T(x.script||this.script,{forkArgs:x.forkArgs||this.forkArgs,forkOpts:x.forkOpts||this.forkOpts,workerOpts:x.workerOpts||this.workerOpts,workerThreadOpts:x.workerThreadOpts||this.workerThreadOpts,debugPort:Ce.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Te(x){if(!H(x)||!_e(x)||x<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function xe(x){if(!H(x)||!_e(x)||x<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function H(x){return typeof x=="number"}function _e(x){return Math.round(x)==x}return ie=ne,ie}var We={},Re,ut;function pt(){if(ut)return Re;ut=1;function C(D,T){this.message=D,this.transfer=T}return Re=C,Re}var zt;function Dt(){return zt||(zt=1,function(C){var D=pt(),T="__workerpool-terminate__",L={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")L.on=function(H,_e){addEventListener(H,function(x){_e(x.data)})},L.send=function(H,_e){_e?postMessage(H,_e):postMessage(H)};else if(typeof process<"u"){var Q;try{Q=Tr}catch(H){if(!(k(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND"))throw H}if(Q&&Q.parentPort!==null){var Ce=Q.parentPort;L.send=Ce.postMessage.bind(Ce),L.on=Ce.on.bind(Ce),L.exit=process.exit.bind(process)}else L.on=process.on.bind(process),L.send=function(H){process.send(H)},L.on("disconnect",function(){process.exit(1)}),L.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ne(H){return Object.getOwnPropertyNames(H).reduce(function(_e,x){return Object.defineProperty(_e,x,{value:H[x],enumerable:!0})},{})}function Te(H){return H&&typeof H.then=="function"&&typeof H.catch=="function"}L.methods={},L.methods.run=function(_e,x){var S=new Function("return ("+_e+").apply(null, arguments);");return S.apply(S,x)},L.methods.methods=function(){return Object.keys(L.methods)},L.terminationHandler=void 0,L.cleanupAndExit=function(H){var _e=function(){L.exit(H)};if(!L.terminationHandler)return _e();var x=L.terminationHandler(H);Te(x)?x.then(_e,_e):_e()};var xe=null;L.on("message",function(H){if(H===T)return L.cleanupAndExit(0);try{var _e=L.methods[H.method];if(_e){xe=H.id;var x=_e.apply(_e,H.params);Te(x)?x.then(function(S){S instanceof D?L.send({id:H.id,result:S.message,error:null},S.transfer):L.send({id:H.id,result:S,error:null}),xe=null}).catch(function(S){L.send({id:H.id,result:null,error:ne(S)}),xe=null}):(x instanceof D?L.send({id:H.id,result:x.message,error:null},x.transfer):L.send({id:H.id,result:x,error:null}),xe=null)}else throw new Error('Unknown method "'+H.method+'"')}catch(S){L.send({id:H.id,result:null,error:ne(S)})}}),L.register=function(H,_e){if(H)for(var x in H)H.hasOwnProperty(x)&&(L.methods[x]=H[x]);_e&&(L.terminationHandler=_e.onTerminate),L.send("ready")},L.emit=function(H){if(xe){if(H instanceof D){L.send({id:xe,isEvent:!0,payload:H.message},H.transfer);return}L.send({id:xe,isEvent:!0,payload:H})}},C.add=L.register,C.emit=L.emit}(We)),We}var Tt=n.platform,Lt=n.isMainThread,St=n.cpus;function Me(C,D){var T=De();return new T(C,D)}var Qe=i.pool=Me;function gr(C,D){var T=Dt();T.add(C,D)}var at=i.worker=gr;function Ue(C){var D=Dt();D.emit(C)}var Di=i.workerEmit=Ue,Ds=h(),Ge=Ds.Promise,Ts=i.Promise=Ge,Ls=i.Transfer=pt(),Rs=i.platform=Tt,Ms=i.isMainThread=Lt,Us=i.cpus=St;r.Promise=Ts,r.Transfer=Ls,r.cpus=Us,r.default=i,r.isMainThread=Ms,r.platform=Rs,r.pool=Qe,r.worker=at,r.workerEmit=Di,Object.defineProperty(r,"__esModule",{value:!0})})})(wn,wn.exports);var pd=wn.exports,nt=class{constructor(t,e){c(this,"_value");c(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},To=class extends nt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},fd=class extends nt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},gd=class extends nt{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const i={...e};return e.from<r.min&&(i.from=r.min),e.to>r.max&&(i.to=r.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=r),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},md=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},vd=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],bd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],yd=md(),xr={iron:{pixels:bd,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:vd,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:yd,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},wd=class extends nt{get availablePalettes(){return xr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},bn,xd=(bn=class{},c(bn,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),bn),ze,_d=(ze=class extends xd{static humanRangeDates(e,r){return e=ze.inputToDate(e),r=ze.inputToDate(r),e.getUTCDate()===r.getUTCDate()?ze.humanDate(e):[ze.humanDate(e),ze.humanDate(r)].join(" - ")}static human(e){return`${ze.humanDate(e)} ${ze.humanTime(e,!0)} `}},c(ze,"isoDate",e=>(e=ze.inputToDate(e),pn(e,{representation:"date"}))),c(ze,"isoTime",e=>(e=ze.inputToDate(e),pn(e,{representation:"time"}))),c(ze,"isoComplete",e=>(e=ze.inputToDate(e),pn(e))),c(ze,"humanTime",(e,r=!1)=>(e=ze.inputToDate(e),Vt(e,r?"HH:mm:ss":"HH:mm"))),c(ze,"humanDate",(e,r=!1)=>(e=ze.inputToDate(e),Vt(e,r?"d. M.":"d. M. yyyy"))),ze),fs=class{},kd=class extends fs{constructor(e,r,i,s,n,a,l,h,p,g,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=a,this.duration=l,this.min=h,this.max=p,this.frameCount=g,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}getColorAtPoint(e,r){var a,l;const i=this.getTemperatureAtPoint(e,r),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(s!==void 0&&n!==void 0){const p=(i-s)/(n-s),g=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[g]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},gs=class{constructor(t){c(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Ut=class xn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=xn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=xn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Cd=class extends gs{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Ut.createCanvasContainer(),this.canvas=Ut.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,a,l,h)=>{const g=new OffscreenCanvas(n,a).getContext("2d"),f=s-i;for(let _=0;_<=n;_++)for(let A=0;A<=a;A++){const k=_+A*n;let F=l[k];F<i&&(F=i),F>s&&(F=s);const W=(F-i)/f,B=Math.round(255*W),N=h[B];g.fillStyle=N,g.fillRect(_,A,1,1)}const b=g.getImageData(0,0,n,a);return await createImageBitmap(b)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},Sd=class extends gs{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Ut.createCursorLayerRoot(),this.center=Ut.createCursorLayerCenter(),this.axisX=Ut.createCursorLayerX(),this.axisY=Ut.createCursorLayerY(),this.label=Ut.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(r*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},$d=class extends gs{constructor(e){super(e);c(this,"container");this.container=Ut.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Pd=class extends gs{constructor(e,r){super(e);c(this,"container");c(this,"image");this._url=r,this.container=Ut.createVisibleLayer(),this._url&&(this.image=Ut.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},fe=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},Ad=class{constructor(t,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,l)=>{const h=s[l];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Mn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Od=class extends nt{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new fe);c(this,"callbacksPlay",new fe);c(this,"callbacksPause",new fe);c(this,"callbacksStop",new fe);c(this,"callbacksEnd",new fe);c(this,"callbacksChangeFrame",new fe);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Ad(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Mn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),Vt(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(h=>h.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(h=>h.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Ed=class extends nt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},Dd=class extends nt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new fe)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Td=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},Lo=class{constructor(t,e,r){c(this,"_selected",!1);c(this,"onSelected",new fe);c(this,"onDeselected",new fe);c(this,"onValues",new fe);c(this,"onMoveOrResize",new fe);c(this,"layerRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new fe);c(this,"initialColor");c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"_graphMinActive",!1);c(this,"_graphMaxActive",!1);c(this,"_graphAvgActive",!1);c(this,"onGraphActivation",new fe);c(this,"ready",!1);this.key=t,this.file=e,this.initialColor=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}get graphMinActive(){return this._graphMinActive}get graphMaxActive(){return this._graphMaxActive}get graphAvgActive(){return this._graphAvgActive}emitGraphActivation(){this.onGraphActivation.call(this._graphMinActive,this._graphMaxActive,this._graphAvgActive)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},Ro=class{constructor(t,e,r,i,s){c(this,"_x");c(this,"onX",new fe);c(this,"_y");c(this,"onY",new fe);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new fe);c(this,"onMouseLeave",new fe);c(this,"onActivate",new fe);c(this,"onDeactivate",new fe);this.key=t,this.analysis=i,this._x=r,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,a=this.y+r;return e>=i&&e<=s&&t>=n&&t<=a}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},dt,Ld=(dt=class extends Ro{constructor(r,i,s,n,a){super(r,i,s,n,a);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(r=1){return Math.round(dt.size*r).toString()+"px"}mayMoveToX(r){return r<=this.file.width&&r>=0}mayMoveToY(r){return r<=this.file.height&&r>=0}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top=dt.sizePx(-.5),r.style.left=dt.sizePx(-.5),r.style.width=dt.sizePx(),r.style.height=dt.sizePx(),r}buildAxisX(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="100%",r.style.height="1px",r.style.left="0px",r.style.top=dt.sizePx(.5),r}buildAxisY(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="1px",r.style.height="100%",r.style.left=dt.sizePx(.5),r.style.top="0px",r}buildCenter(){const r=document.createElement("div");r.style.position="absolute",r.style.top=`calc( ${dt.sizePx(.5)} - 3px )`,r.style.left=`calc( ${dt.sizePx(.5)} - 3px )`,r.style.width="5px",r.style.height="5px",r.style.borderStyle="solid",r.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(r.style.backgroundColor=i),r}onSetColor(r){this.axisX&&(this.axisX.style.backgroundColor=r),this.axisY&&(this.axisY.style.backgroundColor=r),this.center&&(this.center.style.borderColor=r)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(r=void 0){var i,s,n;if(r===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${r}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(dt,"size",20),dt),Rr=class Mo extends Lo{constructor(r,i,s,n,a){super(r,s,i);c(this,"center");c(this,"_graph");this.top=n,this.left=a,this.width=1,this.height=1,this.center=new Ld("center",n,a,this,i),this.points.set("center",this.center),this.center.projectInnerPositionToDom(),this.center.onX.set("update point",l=>{this.left=l}),this.center.onY.set("update point",l=>{this.top=l}),this.recalculateValues()}get graph(){return this._graph||(this._graph=new Uo(this)),this._graph}static addAtPoint(r,i,s,n,a){return new Mo(r,i,s,n,a)}setColorCallback(r){this.center.setColor(r)}isWithin(r,i){return this.center.isWithin(i,r)}getValues(){const r=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:r,max:r,avg:r}}async getAnalysisData(){return await this.file.service.pointAnalysisData(this.center.x,this.center.y)}},Uo=class{constructor(t){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new fe);c(this,"onGraphData",new fe);c(this,"onAnalysisSelection",new fe);this.analysis=t,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(t){this._value=t,this.onGraphData.call(t,this.analysis)}setMinActivation(t){this._min!==t&&(this._min=t,this.emitGraphActivation())}setMaxActivation(t){this._max!==t&&(this._max=t,this.emitGraphActivation())}setAvgActivation(t){this._avg!==t&&(this._avg=t,this.emitGraphActivation())}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const r=await e.getAnalysisData();this.value=r});const t=await this.getGraphData();this.value=t}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof Rr)return this._avg?[this.analysis.initialColor]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(this.analysis.initialColor)}),t}getGraphLabels(){if(this.analysis instanceof Rr)return this._avg?[this.analysis.key]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(`${this.analysis.key} ${e}`)}),t}hasDataToPrint(){return this.analysis instanceof Rr?this._avg:this._min||this._max||this._avg}getDtaAtTime(t){if(this.analysis instanceof Rr)return this._avg?[this.value[t]]:[];const e=[],r=this.value;return this._min&&e.push(r[t].min),this._max&&e.push(r[t].max),this._avg&&e.push(r[t].avg),e}},Rd=class extends Ro{constructor(t,e,r,i,s){super(t,e,r,i,s),this._color=s,this.setColor(s)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Md=class extends Rd{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,r=>{e.x!==r&&(e.x=r)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,r=>{e.y!==r&&(e.y=r)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Fo=class extends Lo{constructor(e,r,i,s,n,a,l){super(e,i,r);c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let h=n,p=s;a!==void 0&&l!==void 0&&(h=n+a,p=s+l),this.area=this.buildArea(s,n,a,l),this.tl=this.addPoint("tl",s,n),this.tr=this.addPoint("tr",s,h),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,h),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(g=>g.projectInnerPositionToDom())}get graph(){return this._graph||(this._graph=new Uo(this)),this._graph}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,i,s){const n=Math.min(e,s),a=Math.max(e,s),l=Math.min(r,i),p=Math.max(r,i)-l,g=a-n;return{top:n,left:l,width:p,height:g}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,r=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=r-e,this.height=s-i,this.area.left=this.left,this.area.height=this.height,this.area.width=this.width,this.area.top=this.top}addPoint(e,r,i){const s=new Md(e,r,i,this,this.color);return this.points.set(e,s),s}},Io=class{constructor(t,e,r,i,s){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=t,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},Ga=class extends Io{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},qa=class Ki extends Fo{static startAddingAtPoint(e,r,i,s,n){const a=new Ki(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,l){const{top:h,left:p,width:g,height:f}=Ki.calculateDimensionsFromCorners(s,n,a,l);return new Ki(e,r,i,h,p,g,f)}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new Ga(this,e,r,e+i,r+s):new Ga(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=i;p<s;p++){const g=this.file.width*p;for(let f=e;f<=r;f++)if(this.isWithin(f,p)){const b=this.file.pixels[g+f];b<n&&(n=b),b>a&&(a=b),h+=b,l++}}return{min:n,max:a,avg:h/l}}isWithin(e,r){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(r-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.service.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},Xa=class extends Io{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},Ka=class Zi extends Fo{static startAddingAtPoint(e,r,i,s,n){const a=new Zi(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,l){const{top:h,left:p,width:g,height:f}=Zi.calculateDimensionsFromCorners(s,n,a,l);return new Zi(e,r,i,h,p,g,f)}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new Xa(this,e,r,e+i,r+s):new Xa(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=i;p<s;p++){const g=this.file.width*p;for(let f=e;f<=r;f++){const b=this.file.pixels[g+f];b<n&&(n=b),b>a&&(a=b),h+=b,l++}}return{min:n,max:a,avg:h/l}}async getAnalysisData(){return await this.file.service.rectAnalysisData(this.left,this.top,this.width,this.height)}},Ud=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new fe);c(this,"onRemove",new fe);c(this,"onSelectionChange",new fe);c(this,"colors",["orange","lightblue","green","brown","yellow","blue","pink"]);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var r;this.has(e)&&((r=this.get(e))==null||r.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,r){const i=Ka.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeRectAt(e,r,i,s,n){const a=Ka.build(e,this.getNextColor(),this.drive.parent,r,i,s,n);return this.addAnalysis(a),a}createEllipsisFrom(e,r){const i=qa.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}placeEllipsisAt(e,r,i,s,n){const a=qa.build(e,this.getNextColor(),this.drive.parent,r,i,s,n);return this.addAnalysis(a),a}createPointAt(e,r){const i=Rr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i),i}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.length;return e<this.colors.length?this.colors[e]:this.colors[e%this.colors.length]}getNextName(e){return`${e} ${this.all.length}`}},Fd=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...r,...s]},[])}},Id=class extends nt{constructor(){super(...arguments);c(this,"layers",new Ud(this));c(this,"points",new Fd(this));c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const r=this.listenerLayerContainer.clientWidth,i=this.parent.width,n=e.layerX/r,a=Math.round(i*n),l=this.listenerLayerContainer.clientHeight,h=this.parent.height,g=e.layerY/l;return{top:Math.round(h*g),left:a}}activateListeners(){this.bindedPointerMoveListener=e=>{const r=this.getRelativePosition(e);this.points.all.forEach(i=>{i.active&&this.currentTool.onPointMove(i,r.top,r.left);const s=i.isWithin(r.top,r.left);s?this.currentTool.onPointEnter(i):s||this.currentTool.onPointLeave(i)})},this.bindedPointerDownListener=e=>{const r=this.getRelativePosition(e);this.currentTool.onCanvasClick(r.top,r.left,this.parent),this.points.all.forEach(i=>{i.isWithin(r.top,r.left)&&this.currentTool.onPointDown(i)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},jd=class{constructor(t){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new fe);c(this,"onAddGraph",new fe);c(this,"onRemoveGraph",new fe);this.drive=t,this.layers.onAdd.set(this.listenerKey,async e=>{const r=e.graph;this.addGraph(r),r.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(t){this._graphs.set(t.analysis.key,t),this.onAddGraph.call(t)}removeGraph(t){this._graphs.delete(t),this.onRemoveGraph.call(t)}get output(){return this._output}set output(t){this._output=t,this.onOutput.call(t)}refreshOutput(){const t={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{t.values[0].push(...e.getGraphLabels()),t.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((r,i)=>{let s=t.values[i+1];s===void 0&&(s=[Vt(parseInt(r),"m:ss:SSS")],t.values[i+1]=s),s.push(...e.getDtaAtTime(parseInt(r)))})}),this.output=t,t}hasGraph(){return Object.values(this.graphs).find(t=>t.hasDataToPrint()).length>0}generateExportData(){const t={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const r of this.graphs.values()){const i=r.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${r.analysis.initialColor}, ${r.analysis.width} x ${r.analysis.height} px)`});r.value&&Object.keys(r.value).forEach((s,n)=>{if(!Object.keys(t).includes(s)){const l=parseInt(s),h=l+r.analysis.file.timestamp;t[s]={[e[0].key]:Vt(l,"m:ss:SSS")+" ",[e[1].key]:Vt(h,"d. M.y m:ss:SSS")+" ",[e[2].key]:l,[e[3].key]:h}}const a=r.getDtaAtTime(parseInt(s));i.forEach((l,h)=>{t[s][l]=a[h]})})}return{header:e,data:Object.values(t)}}},Wd=class extends nt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new fe);c(this,"listeners",new jd(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async r=>{this.value=r,r.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:r}=this.listeners.generateExportData(),i=us({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:r}),s=ad(i)(e);ld(i)(s)}},jo=class Wo extends kd{constructor(r,i,s,n,a,l,h,p,g,f,b,w,_,A,k,F,U){super(r,i.thermalUrl,s,n,g,a,h,b,w,l,i.visibleUrl);c(this,"_export");this.group=r,this.service=i,this.width=s,this.height=n,this.timestamp=a,this.frameCount=l,this.duration=h,this.frameInterval=p,this.fps=f,this.min=b,this.max=w,this.bytesize=_,this.averageEmissivity=A,this.averageReflectedKelvins=k,this.firstFrame=F,this.timelineData=U,this.pixels=F.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new Td(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new Cd(this),this.visibleLayer=new Pd(this,this.visibleUrl),this.cursorLayer=new Sd(this),this.listenerLayer=new $d(this),this.cursorValue=new Ed(this,void 0),this.timeline=new Od(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Dd(this,!1),this.analysis=new Id(this,[]),this.analysisData=new Wd(this),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}this.analysis.value.forEach(i=>i.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new Wo(r,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=r=>{this.cursorLayer.show=!0,this.isHover=!0;const i=this.width,s=this.root.clientWidth,n=i/s,a=Math.round(r.offsetX*n),l=Math.round(r.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:a,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(r){if(r!==void 0){const i=this.group.tool.value.getLabelValue(r.x,r.y,this);this.cursorLayer.setLabel(r.x,r.y,i),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(r)}},Nd=class extends nt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},Hd=class extends To{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},ms=class{constructor(t){c(this,"active",!1);this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},No=class extends ms{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>i===void 0?"":i.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Un=class extends ms{},Bd=class extends Un{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},zd=class extends Un{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createPointAt(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis)}onPointMove(){}onPointLeave(){}onPointEnter(){}},Vd=class extends Un{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Yd=class extends ms{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,r,i){const s=i.getTemperatureAtPoint(e,r),n=i.analysis.layers.all.filter(l=>l.isWithin(e,r)).map(l=>l.selected?`<span style="color:${l.initialColor}">${l.key}</span>`:`<s style="color:${l.initialColor}">${l.key}</s>`);return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${r}`}},Gd=[No,zd,Vd,Bd,Yd],qd=t=>{const e=Gd.map(r=>{const i=new r(t);return[i.key,i]});return Object.fromEntries(e)},Xd=class extends nt{constructor(e,r){super(e,r);c(this,"_tools",qd(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof ms?this.value=e:this.value=this.tools[e]}},Kd=class extends fs{constructor(e,r,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new Hd(this,void 0));c(this,"tool",new Xd(this,new No(this)));c(this,"files",new Nd(this,[]));c(this,"cursorPosition",new fd(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Ho=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},ts=class Bo extends Ho{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new Bo(e.url,e.code,e.message)}},zo=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Ir=class extends Ho{constructor(e,r,i,s,n){super(s,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async pointAnalysisData(e,r){return await this.parser.pointAnalysisData(this.buffer,e,r)}async rectAnalysisData(e,r,i,s){return await this.parser.rectAnalysisData(this.buffer,e,r,i,s)}async ellipsisAnalysisData(e,r,i,s){return await this.parser.ellipsisAnalysisData(this.buffer,e,r,i,s)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),s=jo.fromService(e,this,r,i);return e.files.addFile(s),s}},Zd=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(Y,K)=>{const oe=Y.getBigInt64(K,!0),G=62135596800000n,re=10000n,ie=24n*60n*60n*1000n*re,ce=0x4000000000000000n,De=0x8000000000000000n;let Re=oe&0x3fffffffffffffffn;oe&De&&(Re>ce-ie&&(Re-=ce),Re<0&&(Re+=ie));const pt=Re/re-G;return Number(pt)},a=n(e,5),l=e.getUint8(15);let h=2;l===1&&(h=4);const p=57,g=r*i*h,f=p+g,b=t.slice(25),w=b.byteLength/f,_=Y=>{const K=Y*f,oe=K+f,G=b.slice(K,oe),re=new DataView(G),ie=re.getFloat32(8,!0),ce=re.getFloat32(12,!0),De=n(re,0),We=re.getFloat32(24,!0),Re=re.getFloat32(28,!0);return{timestamp:De,min:ie,max:ce,emissivity:We,reflectedKelvins:Re}},A=[];for(let Y=0;Y<w;Y++){const K=_(Y);A.push(K)}const k={emissivity:0,reflectedKelvins:0};let F=1/0,U=-1/0;const W=[];A.forEach(Y=>{k.emissivity=k.emissivity+Y.emissivity,k.reflectedKelvins=k.reflectedKelvins+Y.reflectedKelvins,Y.min<F&&(F=Y.min),Y.max>U&&(U=Y.max),W.push(Y.timestamp)});const B=W[0],N=[];W.forEach((Y,K)=>{const oe=W[K+1];let G=0;oe===void 0&&(G=0),G=oe-Y;const re=Y-B;N.push({absolute:Y,relative:re,offset:isNaN(G)?0:G,index:K})});const ae=A[A.length-1].timestamp-A[0].timestamp,E=ae/w,V=1e3/E;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:w,duration:ae,frameInterval:E,fps:V,timeline:N,min:F,max:U,averageEmissivity:k.emissivity/A.length,averageReflectedKelvins:k.reflectedKelvins/A.length}},Qd=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),a=i===1?4:2,l=57,h=s*n*a,p=l+h,g=t.slice(25),f=e*p,b=f+p;return{array:g.slice(f,b),dataType:i}},Jd=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,h=0x8000000000000000n;let g=i&0x3fffffffffffffffn;i&h&&(g>l-a&&(g-=l),g<0&&(g+=a));const b=g/n-s,w=Number(b),_=r.getFloat32(8,!0),A=r.getFloat32(12,!0),k=r.getFloat32(24,!0),F=r.getFloat32(28,!0),U=t.slice(57);let W=[];if(e===0){const B=new Uint16Array(U),N=Math.abs(_-A),ae=65535;B.forEach(E=>{const V=E/ae;W.push(_+N*V)})}else e===1&&(W=Array.from(new Float32Array(U)));return{timestamp:w,min:_,max:A,emissivity:k,reflectedKelvins:F,pixels:W}},eu=async(t,e,r)=>{const i=new DataView(t),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(F,U)=>{const W=F.getBigInt64(U,!0),B=62135596800000n,N=10000n,ae=24n*60n*60n*1000n*N,E=0x4000000000000000n,V=0x8000000000000000n;let K=W&0x3fffffffffffffffn;W&V&&(K>E-ae&&(K-=E),K<0&&(K+=ae));const G=K/N-B;return Number(G)},l=i.getUint8(15);let h=2;l===1&&(h=4);const p=57,g=s*n*h,f=p+g,b=t.slice(25),w=b.byteLength/f,_={},A=F=>{const U=F*f,W=U+f,B=b.slice(U,W),N=new DataView(B),ae=a(N,0),E=N.getFloat32(8,!0),Y=N.getFloat32(12,!0)-E,oe=57+r*h*s+e*h;let G=0;if(l===1)G=N.getFloat32(oe,!0);else if(l===0){console.log("jsem uvnitř varia");const ce=N.getInt16(oe,!0)/65535;G=E+Y*ce}return{timestamp:ae,temperature:G}};let k=0;for(let F=0;F<w;F++){const U=A(F);k===0&&(k=U.timestamp),_[U.timestamp-k]=U.temperature}return _},tu=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(W,B)=>{const N=W.getBigInt64(B,!0),ae=62135596800000n,E=10000n,V=24n*60n*60n*1000n*E,Y=0x4000000000000000n,K=0x8000000000000000n;let G=N&0x3fffffffffffffffn;N&K&&(G>Y-V&&(G-=Y),G<0&&(G+=V));const ie=G/E-ae;return Number(ie)},p=n.getUint8(15);let g=2;p===1&&(g=4);const f=57,b=a*l*g,w=f+b,_=t.slice(25),A=_.byteLength/w,k={},F=W=>{const B=W*w,N=B+w,ae=_.slice(B,N),E=new DataView(ae),V=h(E,0),Y=E.getFloat32(8,!0),oe=E.getFloat32(12,!0)-Y,G=57,re=e,ie=e+i,ce=r,De=r+s;let We=1/0,Re=-1/0,ut=0,pt=0;for(let Dt=ce;Dt<=De;Dt++){const Tt=Dt*a;for(let Lt=re;Lt<=ie;Lt++){const St=G+(Tt+Lt)*g;let Me=NaN;if(p===1)Me=E.getFloat32(St,!0);else{const at=E.getInt16(St,!0)/65535;Me=Y+oe*at}Me<We&&(We=Me),Me>Re&&(Re=Me),pt+=Me,ut++}}const zt={min:We,max:Re,avg:pt/ut,count:ut};return{timestamp:V,result:zt}};let U=0;for(let W=0;W<A;W++){const B=F(W);U===0&&(U=B.timestamp),k[B.timestamp-U]=B.result}return k},ru=async t=>{let e=[];const r=async k=>{const F=new DataView(k.slice(0,25)),U=F.getUint8(15),W=F.getUint16(17,!0),B=F.getUint16(19,!0),N=U===1?4:2,ae=57,E=W*B*N,V=ae+E,Y=k.slice(25),K=Y.byteLength/V;let oe=[];for(let G=0;G<K;G++){const ie=G*V+57,ce=ie+E,De=Y.slice(ie,ce);U===0||U===1&&(oe=oe.concat(Array.from(new Float32Array(De))))}return oe};(await Promise.all(t.map(k=>r(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,F)=>k-F);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),l=200,h=a/l,p=[];let g=[...e];for(let k=0;k<l;k++){const F=s+h*k,U=F+h,W=g.findIndex(V=>V>U),N=g.slice(0,W-1).length,ae=N/e.length*100,E={from:F,to:U,count:N,percentage:ae};p.push(E),g=g.slice(W)}const f=[...p].sort((k,F)=>k.percentage-F.percentage),b=f[0].percentage,w=f[f.length-1].percentage,_=Math.abs(b-w);return p.map(k=>({...k,height:k.percentage/_*100}))},iu=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},su=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(B,N)=>{const ae=B.getBigInt64(N,!0),E=62135596800000n,V=10000n,Y=24n*60n*60n*1000n*V,K=0x4000000000000000n,oe=0x8000000000000000n;let re=ae&0x3fffffffffffffffn;ae&oe&&(re>K-Y&&(re-=K),re<0&&(re+=Y));const ce=re/V-E;return Number(ce)},p=n.getUint8(15);let g=2;p===1&&(g=4);const f=57,b=a*l*g,w=f+b,_=t.slice(25),A=_.byteLength/w,k={},F=(B,N)=>{const ae=e+i/2,E=r+s/2,V=(B-ae)/(i/2),Y=(N-E)/(s/2);return V*V+Y*Y<=1},U=B=>{const N=B*w,ae=N+w,E=_.slice(N,ae),V=new DataView(E),Y=h(V,0),K=V.getFloat32(8,!0),G=V.getFloat32(12,!0)-K,re=57,ie=e,ce=e+i,De=r,We=r+s;let Re=1/0,ut=-1/0,pt=0,zt=0;for(let Tt=De;Tt<=We;Tt++){const Lt=Tt*a;for(let St=ie;St<=ce;St++)if(F(St,Tt)){const Me=re+(Lt+St)*g;let Qe=NaN;if(p===1)Qe=V.getFloat32(Me,!0);else{const Ue=V.getInt16(Me,!0)/65535;Qe=K+G*Ue}Qe<Re&&(Re=Qe),Qe>ut&&(ut=Qe),zt+=Qe,pt++}}const Dt={min:Re,max:ut,avg:zt/pt,count:pt};return{timestamp:Y,result:Dt}};let W=0;for(let B=0;B<A;B++){const N=U(B);W===0&&(W=N.timestamp),k[N.timestamp-W]=N.result}return k},nu=[{extension:"lrc",minme:"application/octet-stream"}],au={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:nu,is:iu,baseInfo:Zd,getFrameSubset:Qd,frameData:Jd,registryHistogram:ru,pointAnalysisData:eu,rectAnalysisData:tu,ellipsisAnalysisData:su},Vo=Object.freeze(au),ou={LrcParser:Vo},Yo=Object.values(ou),Go=(t,e)=>{const r=Yo.find(i=>i.is(t,e));if(r===void 0)throw new zo(2,e,`No parser found for '${e}'.`);return r},qo=Yo.map(t=>t.extensions),lu=qo.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),cu=class Xo{constructor(e,r,i){c(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new Xo(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new ts(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=Go(i,this.thermalUrl);return this.pocessTheService(new Ir(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof zo)return this.pocessTheService(ts.fromError(s));throw s}}pocessTheService(e){return e}},hu=class Ko{constructor(e,r){c(this,"_hover",!1);c(this,"onMouseEnter",new fe);c(this,"onMouseLeave",new fe);c(this,"onDrop",new fe);c(this,"onProcessingEnd",new fe);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const i=new Ko(e,r);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const i=r.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=lu,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},du=class{constructor(t){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new Fn(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=Go(e,t.name);return new Ir(this,e,r,t.name)}catch(e){return new ts(t.name,3,e.message)}}handleDropzone(t){return hu.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=cu.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},uu=class extends nt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},pu=class extends nt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new Kd(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},fu=class extends nt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,a)=>{let h=r.reduce((w,_)=>{const A=_.reduce((k,F)=>[...k,...F],[]);return[...w,...A]},[]).sort((w,_)=>w-_);const p=n/a;let g=i+p;const f=new Map;let b=0;for(;g!==!1;){const w=h.findIndex(k=>k>g),_=h.slice(0,w).length;f.set(g-p/2,_),b+=_,h=h.slice(w);const A=g+p;g=A<s?A:!1}return{result:f,resultCount:b}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(Vo.registryHistogram,[r]);this.value=i}},gu=class extends nt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},mu=class extends To{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},vu=class extends fs{constructor(e,r,i){super();c(this,"hash",Math.random());c(this,"groups",new pu(this,[]));c(this,"opacity",new uu(this,1));c(this,"minmax",new mu(this,void 0));c(this,"loading",new gu(this,!1));c(this,"range",new gd(this,void 0));c(this,"histogram",new fu(this,[]));c(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof Ir?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Ir&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Fn=class extends fs{constructor(e,r){super();c(this,"id");c(this,"service",new du(this));c(this,"registries",{});c(this,"palette",new wd(this,"jet"));c(this,"pool");this.pool=e||pd.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new vu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}},bu=Object.defineProperty,bt=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&bu(e,r,s),s};const Za=["ready","select"],yu={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"},sa=class sa extends rt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new fe,this.left=0,this.top=0,this.w=0,this.h=0}render(){return $`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Mc(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.onWrapper.call(e),this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Za,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(yu[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(s=>!Za.includes(s)),r);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,r){for(const i of e)google.visualization.events.addListener(r,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const e=this.chartWrapper.visualization.ha.O;this.left=e.left,this.top=e.top,this.w=e.width,this.h=e.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const i=await Ia({cols:r});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,r;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?r=fetch(e).then(s=>s.json()):r=Promise.resolve(e),r.then(Ia).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of r){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}};sa.styles=Pe`
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
  `;let it=sa;bt([O({type:String,reflect:!0})],it.prototype,"type");bt([O({type:Array})],it.prototype,"events");bt([O({type:Object,hasChanged:()=>!0})],it.prototype,"options");bt([O({type:Array})],it.prototype,"cols");bt([O({type:Array})],it.prototype,"rows");bt([O({type:String})],it.prototype,"data");bt([O({type:Object})],it.prototype,"view");bt([O({type:Array})],it.prototype,"selection");bt([O({type:Object})],it.prototype,"_data");bt([O({type:Number,reflect:!0})],it.prototype,"left");bt([O({type:Number,reflect:!0})],it.prototype,"top");bt([O({type:Number,reflect:!0})],it.prototype,"w");bt([O({type:Number,reflect:!0})],it.prototype,"h");customElements.define("thermal-chart",it);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wu=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const In={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vs=t=>(...e)=>({_$litDirective$:t,values:e});let jn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),li(s,e);return!0},rs=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Zo=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),ku(e)}};function xu(t){this._$AN!==void 0?(rs(this),this._$AM=t,Zo(this)):this._$AM=t}function _u(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)li(i[n],!1),rs(i[n]);else i!=null&&(li(i,!1),rs(i));else li(this,t)}const ku=t=>{t.type==In.CHILD&&(t._$AP??(t._$AP=_u),t._$AQ??(t._$AQ=xu))};class Cu extends jn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Zo(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(li(this,e),rs(this))}setValue(e){if(wu(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=()=>new Su;class Su{}const fn=new WeakMap,je=vs(class extends Cu{render(t){return X}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),X}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=fn.get(e);r===void 0&&(r=new WeakMap,fn.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=fn.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var $u=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,Qo=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&$u(e,r,s),s};let ui=class extends rt{constructor(){super(),this.dialogRef=Ie(),this.closeButtonRef=Ie(),this.invokerRef=Ie()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return $`
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
        `}};ui.shadowRootOptions={...rt.shadowRootOptions,mode:"open"};ui.styles=Pe`

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

        
    
    `;Qo([O({type:String,reflect:!0})],ui.prototype,"label",2);ui=Qo([ue("thermal-dialog")],ui);var Au=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,bs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ou(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Au(e,r,s),s};let qt=class extends rt{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return $`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};qt.VARIANTS=["slate","primary","foreground","background"];qt.shadowRootOptions={...rt.shadowRootOptions,mode:"open"};qt.styles=Pe`

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
    
    `;bs([O({type:String,converter:{fromAttribute:t=>qt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],qt.prototype,"variant",2);bs([O({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],qt.prototype,"interactive",2);bs([O({type:String})],qt.prototype,"size",2);qt=bs([ue("thermal-button")],qt);const jr=Math.min,Yt=Math.max,is=Math.round,hr=t=>({x:t,y:t}),Eu={left:"right",right:"left",bottom:"top",top:"bottom"},Du={start:"end",end:"start"};function Qa(t,e,r){return Yt(t,jr(e,r))}function xi(t,e){return typeof t=="function"?t(e):t}function Xt(t){return t.split("-")[0]}function ys(t){return t.split("-")[1]}function Jo(t){return t==="x"?"y":"x"}function el(t){return t==="y"?"height":"width"}function _i(t){return["top","bottom"].includes(Xt(t))?"y":"x"}function tl(t){return Jo(_i(t))}function Tu(t,e,r){r===void 0&&(r=!1);const i=ys(t),s=tl(t),n=el(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=ss(a)),[a,ss(a)]}function Lu(t){const e=ss(t);return[_n(t),e,_n(e)]}function _n(t){return t.replace(/start|end/g,e=>Du[e])}function Ru(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function Mu(t,e,r,i){const s=ys(t);let n=Ru(Xt(t),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(_n)))),n}function ss(t){return t.replace(/left|right|bottom|top/g,e=>Eu[e])}function Uu(t){return{top:0,right:0,bottom:0,left:0,...t}}function rl(t){return typeof t!="number"?Uu(t):{top:t,right:t,bottom:t,left:t}}function Wr(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Ja(t,e,r){let{reference:i,floating:s}=t;const n=_i(e),a=tl(e),l=el(a),h=Xt(e),p=n==="y",g=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,b=i[l]/2-s[l]/2;let w;switch(h){case"top":w={x:g,y:i.y-s.height};break;case"bottom":w={x:g,y:i.y+i.height};break;case"right":w={x:i.x+i.width,y:f};break;case"left":w={x:i.x-s.width,y:f};break;default:w={x:i.x,y:i.y}}switch(ys(e)){case"start":w[a]-=b*(r&&p?-1:1);break;case"end":w[a]+=b*(r&&p?-1:1);break}return w}const Fu=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:g,y:f}=Ja(p,i,h),b=i,w={},_=0;for(let A=0;A<l.length;A++){const{name:k,fn:F}=l[A],{x:U,y:W,data:B,reset:N}=await F({x:g,y:f,initialPlacement:i,placement:b,strategy:s,middlewareData:w,rects:p,platform:a,elements:{reference:t,floating:e}});g=U??g,f=W??f,w={...w,[k]:{...w[k],...B}},N&&_<=50&&(_++,typeof N=="object"&&(N.placement&&(b=N.placement),N.rects&&(p=N.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):N.rects),{x:g,y:f}=Ja(p,b,h)),A=-1)}return{x:g,y:f,placement:b,strategy:s,middlewareData:w}};async function il(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:h}=t,{boundary:p="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:b=!1,padding:w=0}=xi(e,t),_=rl(w),k=l[b?f==="floating"?"reference":"floating":f],F=Wr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(k)))==null||r?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:g,strategy:h})),U=f==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,W=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(W))?await(n.getScale==null?void 0:n.getScale(W))||{x:1,y:1}:{x:1,y:1},N=Wr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:U,offsetParent:W,strategy:h}):U);return{top:(F.top-N.top+_.top)/B.y,bottom:(N.bottom-F.bottom+_.bottom)/B.y,left:(F.left-N.left+_.left)/B.x,right:(N.right-F.right+_.right)/B.x}}const Iu=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:h,elements:p}=e,{mainAxis:g=!0,crossAxis:f=!0,fallbackPlacements:b,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:A=!0,...k}=xi(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const F=Xt(s),U=Xt(l)===l,W=await(h.isRTL==null?void 0:h.isRTL(p.floating)),B=b||(U||!A?[ss(l)]:Lu(l));!b&&_!=="none"&&B.push(...Mu(l,A,_,W));const N=[l,...B],ae=await il(e,k),E=[];let V=((i=n.flip)==null?void 0:i.overflows)||[];if(g&&E.push(ae[F]),f){const G=Tu(s,a,W);E.push(ae[G[0]],ae[G[1]])}if(V=[...V,{placement:s,overflows:E}],!E.every(G=>G<=0)){var Y,K;const G=(((Y=n.flip)==null?void 0:Y.index)||0)+1,re=N[G];if(re)return{data:{index:G,overflows:V},reset:{placement:re}};let ie=(K=V.filter(ce=>ce.overflows[0]<=0).sort((ce,De)=>ce.overflows[1]-De.overflows[1])[0])==null?void 0:K.placement;if(!ie)switch(w){case"bestFit":{var oe;const ce=(oe=V.map(De=>[De.placement,De.overflows.filter(We=>We>0).reduce((We,Re)=>We+Re,0)]).sort((De,We)=>De[1]-We[1])[0])==null?void 0:oe[0];ce&&(ie=ce);break}case"initialPlacement":ie=l;break}if(s!==ie)return{reset:{placement:ie}}}return{}}}};function sl(t){const e=jr(...t.map(n=>n.left)),r=jr(...t.map(n=>n.top)),i=Yt(...t.map(n=>n.right)),s=Yt(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function ju(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>Wr(sl(s)))}const Wu=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:l=2,x:h,y:p}=xi(t,e),g=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=ju(g),b=Wr(sl(g)),w=rl(l);function _(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&p!=null)return f.find(k=>h>k.left-w.left&&h<k.right+w.right&&p>k.top-w.top&&p<k.bottom+w.bottom)||b;if(f.length>=2){if(_i(r)==="y"){const K=f[0],oe=f[f.length-1],G=Xt(r)==="top",re=K.top,ie=oe.bottom,ce=G?K.left:oe.left,De=G?K.right:oe.right,We=De-ce,Re=ie-re;return{top:re,bottom:ie,left:ce,right:De,width:We,height:Re,x:ce,y:re}}const k=Xt(r)==="left",F=Yt(...f.map(K=>K.right)),U=jr(...f.map(K=>K.left)),W=f.filter(K=>k?K.left===U:K.right===F),B=W[0].top,N=W[W.length-1].bottom,ae=U,E=F,V=E-ae,Y=N-B;return{top:B,bottom:N,left:ae,right:E,width:V,height:Y,x:ae,y:B}}return b}const A=await n.getElementRects({reference:{getBoundingClientRect:_},floating:i.floating,strategy:a});return s.reference.x!==A.reference.x||s.reference.y!==A.reference.y||s.reference.width!==A.reference.width||s.reference.height!==A.reference.height?{reset:{rects:A}}:{}}}};async function Nu(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Xt(r),l=ys(r),h=_i(r)==="y",p=["left","top"].includes(a)?-1:1,g=n&&h?-1:1,f=xi(e,t);let{mainAxis:b,crossAxis:w,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof _=="number"&&(w=l==="end"?_*-1:_),h?{x:w*g,y:b*p}:{x:b*p,y:w*g}}const Hu=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=e,h=await Nu(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:a}}}}},Bu=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:k=>{let{x:F,y:U}=k;return{x:F,y:U}}},...h}=xi(t,e),p={x:r,y:i},g=await il(e,h),f=_i(Xt(s)),b=Jo(f);let w=p[b],_=p[f];if(n){const k=b==="y"?"top":"left",F=b==="y"?"bottom":"right",U=w+g[k],W=w-g[F];w=Qa(U,w,W)}if(a){const k=f==="y"?"top":"left",F=f==="y"?"bottom":"right",U=_+g[k],W=_-g[F];_=Qa(U,_,W)}const A=l.fn({...e,[b]:w,[f]:_});return{...A,data:{x:A.x-r,y:A.y-i}}}}};function Kr(t){return nl(t)?(t.nodeName||"").toLowerCase():"#document"}function gt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function pr(t){var e;return(e=(nl(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function nl(t){return t instanceof Node||t instanceof gt(t).Node}function Ft(t){return t instanceof Element||t instanceof gt(t).Element}function It(t){return t instanceof HTMLElement||t instanceof gt(t).HTMLElement}function eo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof gt(t).ShadowRoot}function ki(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=Pt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function zu(t){return["table","td","th"].includes(Kr(t))}function ws(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Wn(t){const e=Nn(),r=Pt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Vu(t){let e=dr(t);for(;It(e)&&!Nr(e);){if(ws(e))return null;if(Wn(e))return e;e=dr(e)}return null}function Nn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Nr(t){return["html","body","#document"].includes(Kr(t))}function Pt(t){return gt(t).getComputedStyle(t)}function xs(t){return Ft(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function dr(t){if(Kr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||eo(t)&&t.host||pr(t);return eo(e)?e.host:e}function al(t){const e=dr(t);return Nr(e)?t.ownerDocument?t.ownerDocument.body:t.body:It(e)&&ki(e)?e:al(e)}function kn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=al(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),a=gt(s);return n?e.concat(a,a.visualViewport||[],ki(s)?s:[],a.frameElement&&r?kn(a.frameElement):[]):e.concat(s,kn(s,[],r))}function ol(t){const e=Pt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=It(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,l=is(r)!==n||is(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function ll(t){return Ft(t)?t:t.contextElement}function Mr(t){const e=ll(t);if(!It(e))return hr(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=ol(e);let a=(n?is(r.width):r.width)/i,l=(n?is(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Yu=hr(0);function cl(t){const e=gt(t);return!Nn()||!e.visualViewport?Yu:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Gu(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==gt(t)?!1:e}function pi(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=ll(t);let a=hr(1);e&&(i?Ft(i)&&(a=Mr(i)):a=Mr(t));const l=Gu(n,r,i)?cl(n):hr(0);let h=(s.left+l.x)/a.x,p=(s.top+l.y)/a.y,g=s.width/a.x,f=s.height/a.y;if(n){const b=gt(n),w=i&&Ft(i)?gt(i):i;let _=b,A=_.frameElement;for(;A&&i&&w!==_;){const k=Mr(A),F=A.getBoundingClientRect(),U=Pt(A),W=F.left+(A.clientLeft+parseFloat(U.paddingLeft))*k.x,B=F.top+(A.clientTop+parseFloat(U.paddingTop))*k.y;h*=k.x,p*=k.y,g*=k.x,f*=k.y,h+=W,p+=B,_=gt(A),A=_.frameElement}}return Wr({width:g,height:f,x:h,y:p})}function qu(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",a=pr(i),l=e?ws(e.floating):!1;if(i===a||l&&n)return r;let h={scrollLeft:0,scrollTop:0},p=hr(1);const g=hr(0),f=It(i);if((f||!f&&!n)&&((Kr(i)!=="body"||ki(a))&&(h=xs(i)),It(i))){const b=pi(i);p=Mr(i),g.x=b.x+i.clientLeft,g.y=b.y+i.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+g.x,y:r.y*p.y-h.scrollTop*p.y+g.y}}function Xu(t){return Array.from(t.getClientRects())}function hl(t){return pi(pr(t)).left+xs(t).scrollLeft}function Ku(t){const e=pr(t),r=xs(t),i=t.ownerDocument.body,s=Yt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Yt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+hl(t);const l=-r.scrollTop;return Pt(i).direction==="rtl"&&(a+=Yt(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function Zu(t,e){const r=gt(t),i=pr(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,h=0;if(s){n=s.width,a=s.height;const p=Nn();(!p||p&&e==="fixed")&&(l=s.offsetLeft,h=s.offsetTop)}return{width:n,height:a,x:l,y:h}}function Qu(t,e){const r=pi(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=It(t)?Mr(t):hr(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,h=s*n.x,p=i*n.y;return{width:a,height:l,x:h,y:p}}function to(t,e,r){let i;if(e==="viewport")i=Zu(t,r);else if(e==="document")i=Ku(pr(t));else if(Ft(e))i=Qu(e,r);else{const s=cl(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return Wr(i)}function dl(t,e){const r=dr(t);return r===e||!Ft(r)||Nr(r)?!1:Pt(r).position==="fixed"||dl(r,e)}function Ju(t,e){const r=e.get(t);if(r)return r;let i=kn(t,[],!1).filter(l=>Ft(l)&&Kr(l)!=="body"),s=null;const n=Pt(t).position==="fixed";let a=n?dr(t):t;for(;Ft(a)&&!Nr(a);){const l=Pt(a),h=Wn(a);!h&&l.position==="fixed"&&(s=null),(n?!h&&!s:!h&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ki(a)&&!h&&dl(t,a))?i=i.filter(g=>g!==a):s=l,a=dr(a)}return e.set(t,i),i}function ep(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const a=[...r==="clippingAncestors"?ws(e)?[]:Ju(e,this._c):[].concat(r),i],l=a[0],h=a.reduce((p,g)=>{const f=to(e,g,s);return p.top=Yt(f.top,p.top),p.right=jr(f.right,p.right),p.bottom=jr(f.bottom,p.bottom),p.left=Yt(f.left,p.left),p},to(e,l,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function tp(t){const{width:e,height:r}=ol(t);return{width:e,height:r}}function rp(t,e,r){const i=It(e),s=pr(e),n=r==="fixed",a=pi(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const h=hr(0);if(i||!i&&!n)if((Kr(e)!=="body"||ki(s))&&(l=xs(e)),i){const f=pi(e,!0,n,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else s&&(h.x=hl(s));const p=a.left+l.scrollLeft-h.x,g=a.top+l.scrollTop-h.y;return{x:p,y:g,width:a.width,height:a.height}}function gn(t){return Pt(t).position==="static"}function ro(t,e){return!It(t)||Pt(t).position==="fixed"?null:e?e(t):t.offsetParent}function ul(t,e){const r=gt(t);if(ws(t))return r;if(!It(t)){let s=dr(t);for(;s&&!Nr(s);){if(Ft(s)&&!gn(s))return s;s=dr(s)}return r}let i=ro(t,e);for(;i&&zu(i)&&gn(i);)i=ro(i,e);return i&&Nr(i)&&gn(i)&&!Wn(i)?r:i||Vu(t)||r}const ip=async function(t){const e=this.getOffsetParent||ul,r=this.getDimensions,i=await r(t.floating);return{reference:rp(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function sp(t){return Pt(t).direction==="rtl"}const np={convertOffsetParentRelativeRectToViewportRelativeRect:qu,getDocumentElement:pr,getClippingRect:ep,getOffsetParent:ul,getElementRects:ip,getClientRects:Xu,getDimensions:tp,getScale:Mr,isElement:Ft,isRTL:sp},ap=Hu,op=Bu,lp=Iu,cp=Wu,hp=(t,e,r)=>{const i=new Map,s={platform:np,...r},n={...s.platform,_c:i};return Fu(t,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=vs(class extends jn{constructor(t){var e;if(super(t),t.type!==In.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return cr}});var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,Ci=(t,e,r,i)=>{for(var s=i>1?void 0:i?up(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&dp(e,r,s),s};let Kt=class extends rt{constructor(){super(...arguments),this.dropdownRef=Ie(),this.invokerRef=Ie(),this.optionsRef=Ie(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){hp(this.invokerRef.value,this.optionsRef.value,{middleware:[ap(2),lp(),cp(),op()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return $`

            <div class="dropdown" ${je(this.dropdownRef)}>

                <thermal-button class="${Gt(t)}" ${je(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?$`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:$`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};Kt.shadowRootOptions={...rt.shadowRootOptions,mode:"open"};Kt.styles=Pe`

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
    
    `;Ci([wi({slot:"option"})],Kt.prototype,"_options",2);Ci([O({type:String,reflect:!0})],Kt.prototype,"open",2);Ci([O({type:String,reflect:!0,attribute:!0}),R()],Kt.prototype,"interactive",2);Ci([O({type:String,reflect:!0})],Kt.prototype,"variant",2);Kt=Ci([ue("thermal-dropdown")],Kt);var pp=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,_s=(t,e,r,i)=>{for(var s=i>1?void 0:i?fp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&pp(e,r,s),s};let Hr=class extends rt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Ie(),this.contentRef=Ie(),this.rulerContentRef=Ie()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return $`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${je(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${je(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${je(this.contentRef)}>

                    ${this.collapsed===!1?$`
                        <slot></slot>    
                    `:X}
                
                </div>

            </div>

            ${this.collapsed?$`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:X}
        
        `}};Hr.styles=Pe`

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

    `;_s([R()],Hr.prototype,"collapsed",2);_s([R()],Hr.prototype,"lastContentWidth",2);_s([R()],Hr.prototype,"drawerRef",2);Hr=_s([ue("thermal-bar")],Hr);var gp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,$r=(t,e,r,i)=>{for(var s=i>1?void 0:i?mp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&gp(e,r,s),s};let Zt=class extends rt{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Ie(),this.contentRef=Ie()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,a=r.contentRect.width,l=n-175,h=a-0,p=this.contentRef.value.offsetHeight,g=4/3;let f=0,b=0;p<l?(console.log("priorita šířky"),f=h,b=f/g):(console.log("priorita výšky"),b=l,f=b*g),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${b}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return $`

        <div class="container ${this.dark?"dark":"normal"}" ${je(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?$`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?$`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?$`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:$`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:X}

                -->
                
            </div> 
        `:""}

        ${this.pre.length>=0?$`
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
        
        `}};Zt.styles=Pe`

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
    
    `;$r([wi({slot:"bar",flatten:!0})],Zt.prototype,"barItems",2);$r([wi({slot:"bar",flatten:!0})],Zt.prototype,"barElements",2);$r([wi({slot:"pre",flatten:!0})],Zt.prototype,"pre",2);$r([O({type:String,reflect:!0})],Zt.prototype,"fullscreen",2);$r([O({type:String,reflect:!0,attribute:!0})],Zt.prototype,"showfullscreen",2);$r([O({type:String,reflect:!0,attribute:!0})],Zt.prototype,"dark",2);Zt=$r([ue("thermal-app")],Zt);var vp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,yp=(t,e,r,i)=>{for(var s=i>1?void 0:i?bp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&vp(e,r,s),s};let Cn=class extends rt{render(){return $`
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
                        <p>version ${En}</p>
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
        `}};Cn.styles=Pe`

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
    
    `;Cn=yp([ue("app-info-button")],Cn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pl=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let io=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new pl(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wp{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xp=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class so extends wp{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const h=new Set;for(const[p,{consumerHost:g}]of this.subscriptions)h.has(p)||(h.add(p),g.dispatchEvent(new pl(this.context,p,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new xp(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new so(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new so(a,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new io(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new io(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let Gi;const _p=new Uint8Array(16);function kp(){if(!Gi&&(Gi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Gi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Gi(_p)}const et=[];for(let t=0;t<256;++t)et.push((t+256).toString(16).slice(1));function Cp(t,e=0){return et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]}const Sp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),no={randomUUID:Sp};function $p(t,e,r){if(no.randomUUID&&!e&&!t)return no.randomUUID();t=t||{};const i=t.random||(t.rng||kp)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Cp(i)}class Si extends rt{constructor(){super(...arguments),this.UUID=$p()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const fl="manager-instance",ks="manager-palette-context",Pp=new Fn,Ap="__internal_default_registry",Op="__internal_default_group",Ep=t=>t.addOrGetRegistry(Ap),Dp=t=>t.groups.addOrGetGroup(Op);var Tp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Cs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Lp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Tp(e,r,s),s};let Cr=class extends Si{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:xr.jet}}connectedCallback(){super.connectedCallback();let t=Pp;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=Cr.sanitizeStringPalette(this.palette.key);e.palette=r,t=new Fn(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=Cr.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(xr).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:xr[t]}}render(){return $`<slot></slot>`}};Cs([Ee({context:fl})],Cr.prototype,"manager",2);Cs([O({type:String,reflect:!0,attribute:!0})],Cr.prototype,"slug",2);Cs([Ee({context:ks}),O({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:xr[t]}),toAttribute:t=>t.key.toString()}})],Cr.prototype,"palette",2);Cr=Cs([ue("manager-provider")],Cr);var Rp=Object.defineProperty,Mp=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Rp(e,r,s),s};class Hn extends Si{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}Mp([ge({context:fl,subscribe:!0}),R()],Hn.prototype,"manager");const gl="registry-instance",ml="registry-opacity",Bn="registry-range-from",zn="registry-range-to",Up="registry-loading",vl="registry-min",bl="registry-max";var Fp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,tr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ip(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Fp(e,r,s),s};let jt=class extends Hn{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=Ep(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var i;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.setFixedRange(n):s.setFixedRange(n)}}if(t==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return $`<slot></slot>`}};tr([O({type:String,reflect:!0,attribute:!0})],jt.prototype,"slug",2);tr([Ee({context:gl})],jt.prototype,"registry",2);tr([Ee({context:ml}),O({type:Number,reflect:!0,attribute:!0})],jt.prototype,"opacity",2);tr([Ee({context:vl}),R()],jt.prototype,"min",2);tr([Ee({context:bl}),R()],jt.prototype,"max",2);tr([Ee({context:Bn}),O({type:Number,reflect:!0,attribute:!0})],jt.prototype,"from",2);tr([Ee({context:zn}),O({type:Number,reflect:!0,attribute:!0})],jt.prototype,"to",2);tr([Ee({context:Up}),O({type:String,reflect:!0,attribute:!0})],jt.prototype,"loading",2);jt=tr([ue("registry-provider")],jt);var jp=Object.defineProperty,Wp=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&jp(e,r,s),s};class yt extends Hn{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}Wp([ge({context:gl,subscribe:!0})],yt.prototype,"registry");const yl="group-instance",wl="tool-context",xl="tools-context";var Np=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,$i=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Np(e,r,s),s};let Br=class extends yt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=Dp(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return $`<slot></slot>`}};$i([O({type:String,attribute:!0,reflect:!0})],Br.prototype,"slug",2);$i([Ee({context:yl})],Br.prototype,"group",2);$i([Ee({context:wl})],Br.prototype,"tool",2);$i([Ee({context:xl})],Br.prototype,"tools",2);Br=$i([ue("group-provider")],Br);var Bp=Object.defineProperty,zp=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Bp(e,r,s),s};class Pi extends yt{constructor(){super()}connectedCallback(){super.connectedCallback()}}zp([ge({context:yl,subscribe:!0})],Pi.prototype,"group");const _l="file",kl="failure",Cl="file-loading",Vp="file-loaded",Vn="file-provider-element",Yn="file-ms-context",Gn="file-cursor",qn="file-cursor-setter",Ss="playback",Xn="duration",Kn="playing",Sl="playbackSpeed",$l="recording",Pl="mayStop",Yp="analysislist",Zn="file-markers-context";var Gp=Object.defineProperty,st=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Gp(e,r,s),s};class Ke extends Pi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const r=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(r);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new fe,this.onSuccess=new fe,this.onFailure=new fe}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}attributeChangedCallback(e,r,i){var s,n,a;if(super.attributeChangedCallback(e,r,i),e==="ms"&&i&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(i)));l!==this.currentFrame.ms&&((s=this.file)==null||s.timeline.setRelativeTime(l))}e==="playing"&&(i==="true"?(n=this.file)==null||n.timeline.play():i==="false"&&((a=this.file)==null||a.timeline.pause())),e==="playbackspeed"&&this.file&&i&&Object.keys(Mn).includes(i)&&(this.file.timeline.playbackSpeed=parseFloat(i)),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.playbackSpeed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}st([Ee({context:_l}),R()],Ke.prototype,"file");st([Ee({context:kl}),R()],Ke.prototype,"failure");st([Ee({context:Cl}),R()],Ke.prototype,"loading");st([Ee({context:Vp}),R()],Ke.prototype,"ready");st([Ee({context:Kn}),O({type:String,reflect:!0,attribute:!0})],Ke.prototype,"playing");st([Ee({context:Xn}),R()],Ke.prototype,"duration");st([Ee({context:Ss}),R()],Ke.prototype,"currentFrame");st([Ee({context:Gn})],Ke.prototype,"cursor");st([Ee({context:qn})],Ke.prototype,"cursorSetter");st([Ee({context:Yn}),O({type:Number,reflect:!0,attribute:!0})],Ke.prototype,"ms");st([Ee({context:Sl}),O({type:Number,reflect:!0,attribute:!0})],Ke.prototype,"playbackSpeed");st([Ee({context:$l}),O({type:String,reflect:!0,attribute:!0})],Ke.prototype,"recording");st([Ee({context:Pl}),R()],Ke.prototype,"mayStop");st([wi({slot:"mark",flatten:!0})],Ke.prototype,"marksQueriedInternally");st([Ee({context:Zn})],Ke.prototype,"marksProvidedBelow");st([Ee({context:Yp})],Ke.prototype,"analysis");var qp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,$s=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&qp(e,r,s),s};let fi=class extends Ke{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Ir?await e.createInstance(this.group).then(r=>(this.file=r,this.onSuccess.call(r),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(t=>{t instanceof jo?this.recieveInstance(t):this.failure=t})}render(){return $`
            <slot></slot>
            <slot name="mark"></slot>
        `}};$s([Ee({context:Vn})],fi.prototype,"providedSelf",2);$s([O({type:String,attribute:!0,reflect:!0})],fi.prototype,"thermal",2);$s([O({type:String,attribute:!0,reflect:!0})],fi.prototype,"visible",2);fi=$s([ue("file-provider")],fi);var Kp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Zr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Kp(e,r,s),s};let ur=class extends Ke{constructor(){super(...arguments),this.providedSelf=this,this.container=Ie(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof Ir){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof ts&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return $`

                    <div class="container">
                        <div ${je(this.container)} class="${Gt(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${qo.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return $`
            ${this.ready?$`<slot></slot>`:X}
            <slot name="mark"></slot>
        `}};ur.styles=Pe`

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
    
    `;Zr([Ee({context:Vn})],ur.prototype,"providedSelf",2);Zr([R()],ur.prototype,"container",2);Zr([R()],ur.prototype,"ready",2);Zr([R()],ur.prototype,"hover",2);Zr([R()],ur.prototype,"listener",2);ur=Zr([ue("file-dropin")],ur);var Qp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,Qn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Qp(e,r,s),s};let gi=class extends Pi{constructor(){super(...arguments),this.container=Ie(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return $`

            <div class="container">
            
                <div ${je(this.container)} class="${Gt(t)}"></div>

            </div>
        
        `}};gi.styles=Pe`

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
    
    `;Qn([R()],gi.prototype,"container",2);Qn([R()],gi.prototype,"hover",2);gi=Qn([ue("group-dropin")],gi);var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,Al=(t,e,r,i)=>{for(var s=i>1?void 0:i?tf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ef(e,r,s),s};let ns=class extends yt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return $`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return $`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(xr).map(([t,e])=>$`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};ns.styles=Pe`

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

    `;Al([ge({context:ks,subscribe:!0})],ns.prototype,"value",2);ns=Al([ue("registry-palette-dropdown")],ns);var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,Ol=(t,e,r,i)=>{for(var s=i>1?void 0:i?sf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&rf(e,r,s),s};let as=class extends yt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return $`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return $`
            <div class="container">
                ${Object.entries(xr).map(([t,e])=>$`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};as.styles=Pe`

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

    `;Ol([ge({context:ks,subscribe:!0}),R()],as.prototype,"value",2);as=Ol([ue("registry-palette-buttons")],as);var nf=Object.defineProperty,af=Object.getOwnPropertyDescriptor,El=(t,e,r,i)=>{for(var s=i>1?void 0:i?af(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&nf(e,r,s),s};let os=class extends yt{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return $`
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
        `}};os.styles=Pe`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;El([ge({context:ml,subscribe:!0})],os.prototype,"value",2);os=El([ue("registry-opacity-slider")],os);var of=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,cf=(t,e,r,i)=>{for(var s=i>1?void 0:i?lf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&of(e,r,s),s};let ao=class extends yt{doAction(){this.registry.range.applyAuto()}render(){return $`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};ao=cf([ue("registry-range-auto-button")],ao);var hf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,uf=(t,e,r,i)=>{for(var s=i>1?void 0:i?df(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hf(e,r,s),s};let oo=class extends yt{doAction(){this.registry.range.applyMinmax()}render(){return $`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};oo=uf([ue("registry-range-full-button")],oo);var pf=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,Ps=(t,e,r,i)=>{for(var s=i>1?void 0:i?ff(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&pf(e,r,s),s};let Wt=class extends yt{constructor(){super(...arguments),this.ticksRef=Ie(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/Wt.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return $`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${je(this.ticksRef)}>

                    ${this.ticks.map(t=>$`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Wt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Wt.TICK_WIDTH=40;Wt.TICK_FIXED=2;Wt.styles=Pe`

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


    `;Ps([O({type:String,reflect:!0})],Wt.prototype,"placement",2);Ps([R()],Wt.prototype,"minmax",2);Ps([R()],Wt.prototype,"ticks",2);Wt=Ps([ue("registry-ticks-bar")],Wt);var gf=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,Ai=(t,e,r,i)=>{for(var s=i>1?void 0:i?mf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&gf(e,r,s),s};let zr=class extends yt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return $`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return $`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Ai([R()],zr.prototype,"minmax",2);Ai([R()],zr.prototype,"range",2);Ai([R()],zr.prototype,"opacity",2);Ai([R()],zr.prototype,"palette",2);zr=Ai([ue("registry-log")],zr);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,u,v)=>u in o?t(o,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[u]=v,i=(o,u,v)=>(r(o,typeof u!="symbol"?u+"":u,v),v),s=(o,u)=>` ${u&&u.length>0?u.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",h="pointers-max-distance",p="range-dragging",g="data",f="min",b="max",w="step",_="round",A="type",k="theme",F="rtl",U="btt",W="disabled",B="keyboard-disabled",N="mousewheel-disabled",ae="slider-width",E="slider-height",V="slider-radius",Y="slider-bg",K="slider-bg-hover",oe="slider-bg-fill",G="pointer-width",re="pointer-height",ie="pointer-radius",ce="pointer-bg",De="pointer-bg-hover",We="pointer-bg-focus",Re="pointer-shadow",ut="pointer-shadow-hover",pt="pointer-shadow-focus",zt="pointer-border",Dt="pointer-border-hover",Tt="pointer-border-focus",Lt="animate-onclick",St="css-links",Me="vertical",Qe="horizontal",gr=(o,u,v,m,M)=>{let J=u-o;return J===0?v:(m-v)*(M-o)/J+v},at=o=>!isNaN(parseFloat(o))&&isFinite(o),Ue=(o,u)=>at(o)?Number(o):u,Di=(o,u)=>u===0?0:Math.round(o/u)*u,Ds=(o,u=1/0)=>{if(u===1/0)return o;let v=e(10,u);return Math.round(o*v)/v},Ge=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Ts=(o,u)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},Ls=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},Rs=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},Ms=(o,u)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},Us=(o,u)=>{if(!u||u.length<=0)return;let v=u.map(M=>at(M)?Ue(M,M):M),m={values:v||[]};m.value=v[0],m.value0=v[0],m.value1=v[0];for(let M=1;M<v.length;M++)m[`value${M+1}`]=v[M];o.dispatchEvent(new CustomEvent("change",{detail:m}))},C=(o,u,v)=>{let m=0,M,J,de,I,j=!1,pe=(te,Le,Xe,qe,Ne,He)=>{let lt=m;Xe!==void 0&&te>Xe&&(te=Xe),Le!==void 0&&te<Le&&(te=Le),m=te;let ct=m;return(qe===Me&&He||qe===Qe&&Ne)&&(ct=100-ct),qe===Me?u.style.top=`${ct}%`:u.style.left=`${ct}%`,lt!==m},ye=te=>te===u||u.contains(te),q=(te,Le,Xe,qe)=>{M=te,J=Le,de=Xe,I=qe},Ae=te=>{j=te,u.classList.toggle("disabled",j),j?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},xt=(te,Le)=>{Le==null?u.removeAttribute(te):u.setAttribute(te,Le)},tt=te=>u.getAttribute(te),ee=te=>{if(!j){switch(te.key){case"ArrowLeft":{te.preventDefault(),typeof M=="function"&&M(v);break}case"ArrowRight":{te.preventDefault(),typeof J=="function"&&J(v);break}case"ArrowUp":{te.preventDefault(),typeof de=="function"&&de(v);break}case"ArrowDown":{te.preventDefault(),typeof I=="function"&&I(v);break}}Ms(o,te)}},me=()=>{j||Ts(o,u)};return u.className=`pointer pointer-${v}`,u.addEventListener("keydown",ee),u.addEventListener("click",me),{$pointer:u,get percent(){return m},get disabled(){return j},set disabled(te){Ae(te)},updatePosition:pe,isClicked:ye,setCallbacks:q,setAttr:xt,getAttr:tt,destroy:()=>{u.removeEventListener("keydown",ee),u.removeEventListener("click",me),u.remove()}}},D=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let u=o.split(","),v=[],m=!0;for(let M=0;M<u.length;M++){let J=u[M].trim();J!==""&&(v.push(J),at(J)||(m=!1))}return m?v.map(M=>Number(M)):v},T=(o,u)=>u?u.findIndex(v=>v===o||v.toString().trim()===o.toString().trim()):-1,L=o=>({updatePosition:(u,v,m,M)=>{if(v.length<=0)return;let J=v.length===1,de=v[0],I=v[v.length-1];u===Me?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),J?o.style.height=`${de}%`:o.style.height=`${Math.abs(de-I)}%`,M?(o.style.bottom="0%",J?o.style.top="auto":o.style.top=`${Math.min(100-I,100-de)}%`):(o.style.bottom="auto",J?o.style.top="0%":o.style.top=`${Math.min(de,I)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),J?o.style.width=`${de}%`:o.style.width=`${Math.abs(de-I)}%`,m?(o.style.right="0%",J?o.style.left="auto":o.style.left=`${Math.min(100-I,100-de)}%`):(o.style.right="auto",J?o.style.left="0%":o.style.left=`${Math.min(de,I)}%`))}}),Q="--animate-onclick",Ce="--width",ne="--height",Te="--panel-bg-border-radius",xe="--panel-bg",H="--panel-bg-hover",_e="--panel-bg-fill",x="--pointer-width",S="--pointer-height",le="--pointer-border-radius",ve="--pointer-bg",Ve="--pointer-bg-hover",Je="--pointer-bg-focus",Rt="--pointer-shadow",ft="--pointer-shadow-hover",wt="--pointer-shadow-focus",sr="--pointer-border",Z="--pointer-border-hover",he="--pointer-border-focus",P=(o,u,v)=>{let m=new Map;for(let M of o.attributes){let J=M.nodeName.trim().toLowerCase();if(!u.test(J))continue;let de=J.replace(/\D/g,"").trim(),I=de===""||de==="0"||de==="1"?0:Ue(de,0)-1,j=v&&typeof v=="function"?v(M.value):M.value;m.set(I,j)}return m},se=o=>{if(!o)return null;let u=o.getAttribute(St);if(!u)return null;let v=u.split(";"),m=[];for(let M of v)M.trim()!==""&&m.push(M.trim());return m},Se=[[Ce,ae,"sliderWidth",null],[ne,E,"sliderHeight",null],[Te,V,"sliderRadius",null],[xe,Y,"sliderBg",null],[H,K,"sliderBgHover",null],[_e,oe,"sliderBgFill",null],[x,G,"pointer#Width",/^pointer([0-9]*)-width$/],[S,re,"pointer#Height",/^pointer([0-9]*)-height$/],[le,ie,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ve,ce,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ve,De,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Je,We,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Rt,Re,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[ft,ut,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[wt,pt,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[sr,zt,"pointer#Border",/^pointer([0-9]*)-border$/],[Z,Dt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[he,Tt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ke=(o,u,v)=>{let m=null,M=[],J=new Map,de=(ee,me=u)=>{let te=[...me.classList];for(let Le of te)Le.startsWith(ee)&&u.classList.remove(Le)},I=()=>{de("shape");let ee=u.querySelectorAll(".pointer");for(let me of ee)de("shape",me)},j=ee=>{m=ee,de("theme-"),typeof ee=="string"&&u.classList.add(`theme-${ee}`)},pe=()=>{if(I(),!(M.length<=0)){u.classList.add("shape",`shape-${M[0]}`);for(let ee=1;ee<M.length;ee++){let me=M[ee];if(!me)continue;let te=u.querySelector(`.pointer-${ee}`);!te||te.classList.add("shape",`shape-${me}`)}}},ye=(ee,me)=>{M[ee]=me,pe()},q=()=>{I();let ee=P(o,/^pointer([0-9]*)-shape$/);if(!(ee.size<=0)){for(let me of ee){let te=me[0];M[te]=me[1]}pe()}},Ae=(ee,me)=>`${ee}-${me}`,xt=(ee,me,te)=>{let Le=v[te];if(!Le)return;let Xe=te===0?u:Le.$pointer;if(me==null){J.has(Ae(ee,te))&&J.delete(Ae(ee,te)),Xe.style.removeProperty(ee);return}J.set(Ae(ee,te),me),Xe.style.setProperty(ee,me)},tt=(ee,me)=>J.get(Ae(ee,me));return(()=>{for(let ee of Se){let[me,te,Le,Xe]=ee;if(Xe){let Ne=P(o,Xe);for(let He of Ne){let lt=He[0],ct=He[1];xt(me,ct,lt)}}else{let Ne=o.getAttribute(te);xt(me,Ne,0)}let qe=[];if(Le.indexOf("#")===-1)qe.push([Le,0]);else{qe.push([Le.replace("#",""),0]),qe.push([Le.replace("#","0"),0]),qe.push([Le.replace("#","1"),0]);for(let Ne=1;Ne<v.length;Ne++)qe.push([Le.replace("#",(Ne+1).toString()),Ne])}for(let Ne of qe)try{let He=Ne[0],lt=Ne[1];Object.prototype.hasOwnProperty.call(o,He)||Object.defineProperty(o,He,{get(){return tt(me,lt)},set:ct=>{xt(me,ct,lt)}})}catch(He){console.error(He)}}j(o.getAttribute(k)),q()})(),{setStyle:xt,getStyle:tt,get theme(){return m},set theme(ee){j(ee)},get pointerShapes(){return M},setPointerShape:ye}},Fe="animate-on-click",be="range-dragging",ot=(o,u,v,m)=>{let M=[],J=ye=>{for(let q of M)q.update&&typeof q.update=="function"&&q.update(ye)},de=()=>{for(let ye of M)ye.destroy&&typeof ye.destroy=="function"&&ye.destroy()},I=(ye,q)=>{for(let Ae of M)Ae.onAttrChange&&typeof Ae.onAttrChange=="function"&&Ae.onAttrChange(ye,q)},j=ye=>{if(ye.gettersAndSetters){for(let q of ye.gettersAndSetters)if(!(!q.name||!q.attributes))try{Object.prototype.hasOwnProperty.call(o,q.name)||Object.defineProperty(o,q.name,q.attributes)}catch(Ae){console.error("defineSettersGetters error:",Ae)}}},pe=ye=>{var q;if(!ye.css)return;let Ae=(q=o.shadowRoot)==null?void 0:q.querySelector("style");!Ae||(Ae.innerHTML+=ye.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ye of window.tcRangeSliderPlugins){let q=ye();M.push(q),q.init&&typeof q.init=="function"&&(q.init(o,u,v,m),j(q),pe(q))}},update:J,onAttrChange:I,destroy:de}},Ye=10,Ti=20,Tl=(o,u)=>{let v=new Map,m=/^value([0-9]*)$/;for(let I of o.attributes){let j=I.nodeName.trim().toLowerCase();if(!m.test(j))continue;let pe=j.replace("value","").trim(),ye=pe===""||pe==="0"||pe==="1"?0:Ue(pe,0)-1,q=at(I.value)?Ue(I.value,0):I.value;v.set(ye,q)}let M=Math.max(...Array.from(v.keys())),J=[];J.push([C(o,u,0),v.get(0)]);let de=u;for(let I=1;I<=M;I++){let j=u.cloneNode(!0);de.after(j),de=j,J.push([C(o,j,I),v.get(I)])}return J},na=(o,u,v,m,M,J,de)=>{try{Object.defineProperty(o,m,{configurable:!0,get(){if(!u)return;let I=u.pointers[v];if(!I)return;let j=u.getTextValue(I.percent);return at(j)?Ue(j,j):j},set:I=>{u.pointers[v]?u==null||u.setValue(I,v):u==null||u.addPointer(I)}}),Object.defineProperty(o,M,{configurable:!0,get(){var I,j;return(j=(I=u==null?void 0:u.pointers[v])==null?void 0:I.getAttr("aria-label"))!=null?j:void 0},set:I=>{!u||u.setAriaLabel(v,I)}}),Object.defineProperty(o,J,{configurable:!0,get(){var I,j;return(j=(I=u==null?void 0:u.styles)==null?void 0:I.pointerShapes[v])!=null?j:null},set:I=>{!u||!u.styles||u.styles.setPointerShape(v,I)}}),Object.defineProperty(o,de,{configurable:!0,get(){var I;return(I=u==null?void 0:u.pointers[v].disabled)!=null?I:!1},set:I=>{if(!u)return;let j=u==null?void 0:u.pointers[v];!j||(j.disabled=I)}})}catch(I){console.error(I)}},Ll=(o,u)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let m=2;m<Ye;m++)v.push([`value${m}`,`ariaLabel${m}`,`pointer${m}Shape`,`pointer${m}Disabled`,m-1]);for(let m of v)na(o,u,m[4],m[0],m[1],m[2],m[3])},aa=(o,u,v)=>{var m;let M=(m=v.shadowRoot)==null?void 0:m.querySelector(".container");if(M)for(let J of o)u?M.prepend(J.$pointer):M.append(J.$pointer)},Rl=(o,u)=>{if(!(!u||o.length<=1)){for(let v of o)v.$pointer.style.zIndex=Ti.toString();u.$pointer.style.zIndex=(Ti*2).toString()}},Fs=0,Jr=100,Or=2,oa="0.3s",Ml=(o,u,v)=>{let m=v.map(d=>d[0]),M=null,J=null,de=null,I=null,j=Fs,pe=Jr,ye,q,Ae=Qe,xt=Or,tt=!1,ee=!1,me=!1,te=0,Le=1/0,Xe=!1,qe,Ne,He=!1,lt=!1,ct=!1,nr=oa,la=[],ca=d=>{He||(d.preventDefault&&d.preventDefault(),mr(d),window.addEventListener("mousemove",mr),window.addEventListener("mouseup",Li),Ls(o,d))},Li=d=>{He||(qe=void 0,Ne=void 0,window.removeEventListener("mousemove",mr),window.removeEventListener("mouseup",Li),nr&&u.classList.add(Fe),Rs(o,d))},Il=(d,y)=>{if(m.length<=0)return;if(m.length===1)return m[0].isClicked(d)&&nr&&u.classList.remove(Fe),m[0];let z=Wl(d);if(Xe){let $e=y,$t=Mi($e);$t!==void 0&&($e=Di($e,$t)),z?(qe=$e,Ne=0,nr&&u.classList.remove(Fe)):qe!==void 0&&(Ne=$e-qe,qe=$e)}if(!jl(d)&&!z){for(let $e of m)if(!(!$e.isClicked(d)||$e.disabled))return nr&&u.classList.remove(Fe),$e;for(let $e of m)if(M===$e)return $e}let Oe=1/0,Be=null;for(let $e of m){if($e.disabled)continue;let $t=Math.abs(y-$e.percent);$t<Oe&&(Oe=$t,Be=$e)}return Be},ha=()=>m.findIndex(d=>M===d&&!d.disabled),mr=d=>{let y;if(Ae===Me){let{height:Oe,top:Be}=u.getBoundingClientRect(),$e=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;y=Math.min(Math.max(0,$e-Be),Oe)*100/Oe}else{let{width:Oe,left:Be}=u.getBoundingClientRect(),$e=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;y=Math.min(Math.max(0,$e-Be),Oe)*100/Oe}if((tt||ee)&&(y=100-y),M=Il(d.target,y),M&&Rl(m,M),Xe&&m.length>1&&Ne!==void 0){let Oe=m[0],Be=m[m.length-1],$e=Oe.percent+Ne<0,$t=Be.percent+Ne>100;if($e||$t)return;for(let Bi=0;Bi<m.length;Bi++)ht(Bi,m[Bi].percent+Ne);return}let z=ha();z!==-1&&(ht(z,y),M==null||M.$pointer.focus())},Ri=d=>{if(He||document.activeElement!==o||M!=null&&M.disabled)return;d.stopPropagation(),d.preventDefault();let y=d.deltaY<0,z=tt||ee,Oe=y?!z:z,Be=ha();Be!==-1&&(Oe?ei(Be,m[Be].percent):ti(Be,m[Be].percent))},da=d=>{He||lt||(Ae===Me?ee?ht(d,100):ht(d,0):tt?ti(d,m[d].percent):ei(d,m[d].percent))},ua=d=>{He||lt||(Ae===Me?ee?ht(d,0):ht(d,100):tt?ei(d,m[d].percent):ti(d,m[d].percent))},pa=d=>{He||lt||(Ae===Me?ee?ti(d,m[d].percent):ei(d,m[d].percent):tt?ht(d,100):ht(d,0))},fa=d=>{He||lt||(Ae===Me?ee?ei(d,m[d].percent):ti(d,m[d].percent):tt?ht(d,0):ht(d,100))},jl=d=>d.classList.contains("panel"),Wl=d=>d.classList.contains("panel-fill"),ei=(d,y)=>{if(y===void 0)return;let z=Mi(y);z==null&&(z=1),y-=z,y<0&&(y=0),ht(d,y)},ti=(d,y)=>{if(y===void 0)return;let z=Mi(y);z==null&&(z=1),y+=z,y>100&&(y=100),ht(d,y)},vr=()=>{!I||I.update({percents:ga(),values:ma(),$pointers:va(),min:ba(),max:ya(),data:Ws(),step:js(),round:Hs(),type:Ns(),textMin:Ui(),textMax:Fi(),rightToLeft:Vs(),bottomToTop:Ys(),pointersOverlap:Ks(),pointersMinDistance:Bs(),pointersMaxDistance:zs(),rangeDragging:Zs(),disabled:Gs(),keyboardDisabled:qs(),mousewheelDisabled:Xs()})},Nl=()=>{vr()},Hl=d=>{if(!(me||m.length<=1||pe===j))if(d===0){let y=Le*100/(pe-j);return Math.max(0,m[d+1].percent-y)}else{let y=te*100/(pe-j);return Math.min(m[d-1].percent+y,100)}},Bl=d=>{if(!(me||m.length<=1||pe===j))if(d===m.length-1){let y=Le*100/(pe-j);return Math.min(m[d-1].percent+y,100)}else{let y=te*100/(pe-j);return Math.max(0,m[d+1].percent-y)}},Mi=d=>{let y;if(typeof ye=="function"){let z=gr(0,100,j,pe,d);y=ye(z,d)}else y=ye;if(at(y)){let z=pe-j;return y=z===0?0:y*100/z,y}},Er=d=>{if(d===void 0)return;let y=gr(0,100,j,pe,d);return q!==void 0?q[Math.round(y)]:Ds(y,xt)},Ui=()=>q!==void 0?q[j]:j,Fi=()=>q!==void 0?q[pe]:pe,js=()=>ye,zl=d=>{var y;return d<=0||me?Ui():(y=Er(m[d-1].percent))!=null?y:""},Vl=d=>{var y;return m.length<=1||d>=m.length-1||me?Fi():(y=Er(m[d+1].percent))!=null?y:""},ga=()=>m.map(d=>d.percent),ma=()=>m.map(d=>Er(d.percent)),va=()=>m.map(d=>d.$pointer),ba=()=>j,ya=()=>pe,Ws=()=>q,Ns=()=>Ae,Hs=()=>xt,Bs=()=>te,zs=()=>Le,Yl=d=>la[d],Vs=()=>tt,Ys=()=>ee,Gs=()=>He,qs=()=>lt,Xs=()=>ct,Ks=()=>me,Zs=()=>Xe,ht=(d,y)=>{if(y===void 0)return;let z=Mi(y);z!==void 0&&(y=Di(y,z));let Oe=m[d];if(!Oe)return;let Be=Oe.updatePosition(y,Hl(d),Bl(d),Ae,tt,ee);J==null||J.updatePosition(Ae,m.map($e=>$e.percent),tt,ee),vr();for(let $e of m){let $t=Er($e.percent);$t!==void 0&&($e.setAttr("aria-valuenow",$t.toString()),$e.setAttr("aria-valuetext",$t.toString()))}ql(),Be&&Us(o,m.map($e=>Er($e.percent)))},Mt=()=>{for(let d=0;d<m.length;d++)ht(d,m[d].percent)},Gl=(d,y)=>{j=q!==void 0?0:Ue(d,Fs),pe=q!==void 0?q.length-1:Ue(y,Jr),Ii(j),ji(pe)},ql=()=>{var d,y;for(let z=0;z<m.length;z++){let Oe=m[z];Oe.setAttr("aria-valuemin",((d=zl(z))!=null?d:"").toString()),Oe.setAttr("aria-valuemax",((y=Vl(z))!=null?y:"").toString())}},Ii=d=>{j=Ue(d,Fs),j>pe&&(pe=j+Jr),Mt()},ji=d=>{pe=Ue(d,Jr),pe<j&&(pe=j+Jr),Mt()},wa=d=>{me=!0;for(let y=0;y<d.length;y++)Wi(d[y],y);me=!1;for(let y=0;y<d.length;y++)Wi(d[y],y)},Wi=(d,y)=>{let z;q!==void 0?(z=d==null?0:T(d,q),z===-1&&(z=0)):(z=Ue(d,j),z<j&&(z=j),z>pe&&(z=pe));let Oe=gr(j,pe,0,100,z);ht(y,Oe)},Ni=d=>{if(d==null){ye=void 0;return}if(typeof d=="function"){ye=d,Mt();return}if(at(d)){ye=Ue(d,1);let y=Math.abs(pe-j);ye>y&&(ye=void 0),Mt();return}ye=void 0},Qs=d=>{me=d,Mt()},Js=d=>{(!at(d)||d<0)&&(d=0),te=d},en=d=>{(!at(d)||d<0)&&(d=1/0),Le=d},tn=d=>{He=d,u.classList.toggle("disabled",He),He?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},xa=d=>{lt=d},_a=d=>{ct=d,ct?document.removeEventListener("wheel",Ri):document.addEventListener("wheel",Ri,{passive:!1})},rn=d=>{if(d==null){q=void 0;return}if(q=D(d),q===void 0||q.length<=0){q=void 0;return}Ii(0),ji(q.length-1),ye===void 0&&Ni(1)},sn=d=>{var y;typeof d=="string"?Ae=d.trim().toLowerCase()===Me?Me:Qe:Ae=Qe;let z=(y=o.shadowRoot)==null?void 0:y.querySelector(".range-slider-box");if(!z)return;z.className=`range-slider-box type-${Ae}`,Mt();let Oe=Ae===Me?"vertical":"horizontal";for(let Be of m)Be.setAttr("aria-orientation",Oe)},nn=d=>{tt=d,m.length>1&&aa(m,tt,o),Mt(),vr()},an=d=>{ee=d,m.length>1&&aa(m,ee,o),Mt(),vr()},on=d=>{xt=Ue(d,Or),xt<0&&(xt=Or),vr()},ka=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(nr=void 0,u.style.removeProperty(Q),u.classList.remove(Fe)):(nr=d.toString(),u.style.setProperty(Q,nr),u.classList.add(Fe))},Ca=(d,y)=>{let z=m[d];!z||(z.setAttr("aria-label",y),la[d]=y)},Hi=d=>{if(qe=void 0,m.length<=1){Xe=!1,u.classList.remove(be);return}Xe=d,u.classList.toggle(be,Xe)},Xl=()=>{tn(Ge(o.getAttribute(W))),lt=Ge(o.getAttribute(B)),ct=Ge(o.getAttribute(N));let d=P(o,/^pointer([0-9]*)-disabled$/,y=>Ge(y));for(let y of d){let z=y[0];!m[z]||(m[z].disabled=y[1])}},Kl=()=>{let d=P(o,/^aria-label([0-9]*)$/);for(let y of d){let z=y[0];Ca(z,y[1])}},Zl=d=>{let y=m.length,z=m[y-1].$pointer,Oe=z.cloneNode(!0);z.after(Oe);let Be=C(o,Oe,y);return Be.setCallbacks(da,ua,pa,fa),m.push(Be),Wi(d,y),Mt(),vr(),y},Ql=()=>{let d=m.length,y=m[d-1];return y?(y.destroy(),m.pop(),m.length<=1&&Hi(!1),Mt(),vr(),d-1):-1};return(()=>{var d,y;for(let Oe of m)Oe.setCallbacks(da,ua,pa,fa);let z=(d=o.shadowRoot)==null?void 0:d.querySelector(".panel-fill");z&&(J=L(z)),sn(o.getAttribute(A)),nn(Ge(o.getAttribute(F))),an(Ge(o.getAttribute(U))),Gl(o.getAttribute(f),o.getAttribute(b)),Ni(o.getAttribute(w)),rn(o.getAttribute(g)),wa(v.map(Oe=>Oe[1])),Qs(Ge(o.getAttribute(a))),Js(Ue(o.getAttribute(l),0)),en(Ue(o.getAttribute(h),1/0)),Hi(Ge(o.getAttribute(p))),on(Ue(o.getAttribute(_),Or)),Xl(),Kl(),de=ke(o,u,m),ka((y=o.getAttribute(Lt))!=null?y:oa),u.addEventListener("mousedown",ca),u.addEventListener("mouseup",Li),u.addEventListener("touchmove",mr),u.addEventListener("touchstart",mr),ct||document.addEventListener("wheel",Ri,{passive:!1}),I=ot(o,Nl,{setValues:wa,setMin:Ii,setMax:ji,setStep:Ni,setPointersOverlap:Qs,setPointersMinDistance:Js,setPointersMaxDistance:en,setDisabled:tn,setType:sn,setRightToLeft:nn,setBottomToTop:an,setRound:on,setKeyboardDisabled:xa,setMousewheelDisabled:_a,setRangeDragging:Hi,setData:rn},{getPercents:ga,getValues:ma,getPointerElements:va,getMin:ba,getMax:ya,getStep:js,getData:Ws,getType:Ns,getRound:Hs,getTextMin:Ui,getTextMax:Fi,isRightToLeft:Vs,isBottomToTop:Ys,isDisabled:Gs,isKeyboardDisabled:qs,isMousewheelDisabled:Xs,isPointersOverlap:Ks,isRangeDraggingEnabled:Zs,getPointersMinDistance:Bs,getPointersMaxDistance:zs}),I.init()})(),{get pointers(){return m},get styles(){return de},get pluginsManager(){return I},get min(){return Ui()},get max(){return Fi()},get step(){return js()},get pointersOverlap(){return Ks()},set pointersOverlap(d){Qs(d)},get pointersMinDistance(){return Bs()},set pointersMinDistance(d){Js(d)},get pointersMaxDistance(){return zs()},set pointersMaxDistance(d){en(d)},get disabled(){return Gs()},set disabled(d){tn(d)},get data(){return Ws()},get type(){return Ns()},set type(d){sn(d)},get rightToLeft(){return Vs()},set rightToLeft(d){nn(d)},get bottomToTop(){return Ys()},set bottomToTop(d){an(d)},get round(){return Hs()},set round(d){on(d)},get animateOnClick(){return nr},set animateOnClick(d){ka(d)},get keyboardDisabled(){return qs()},set keyboardDisabled(d){xa(d)},get mousewheelDisabled(){return Xs()},set mousewheelDisabled(d){_a(d)},get rangeDragging(){return Zs()},set rangeDragging(d){Hi(d)},setMin:Ii,setMax:ji,setValue:Wi,setStep:Ni,setData:rn,getTextValue:Er,setAriaLabel:Ca,getAriaLabel:Yl,addPointer:Zl,removePointer:Ql,destroy:()=>{u.removeEventListener("mousedown",ca),u.removeEventListener("mouseup",Li),u.removeEventListener("touchmove",mr),u.removeEventListener("touchstart",mr),document.removeEventListener("wheel",Ri);for(let d of m)d.destroy();I==null||I.destroy()}}},Ul=(o,u,v)=>{let m=Se.find(([I,j,pe,ye])=>j.replace("#","")===u.replace(/\d+/g,""));if(m&&o.styles){let[I,j,pe,ye]=m,q=u.replace(/\D/g,"").trim(),Ae=q===""||q==="0"||q==="1"?0:Ue(q,0)-1;o.styles.setStyle(I,v,Ae);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(u,v),u){case f:{o.setMin(v);break}case b:{o.setMax(v);break}case w:{o.setStep(v);break}case a:{o.pointersOverlap=Ge(v);break}case l:{o.pointersMinDistance=Ue(v,0);break}case p:{o.rangeDragging=Ge(v);break}case h:{o.pointersMaxDistance=Ue(v,1/0);break}case W:{o.disabled=Ge(v);break}case B:{o.keyboardDisabled=Ge(v);break}case N:{o.mousewheelDisabled=Ge(v);break}case g:{o.setData(v);break}case A:{o.type=v;break}case F:{o.rightToLeft=Ge(v);break}case U:{o.bottomToTop=Ge(v);break}case _:{o.round=Ue(v,Or);break}case k:{o.styles&&(o.styles.theme=v);break}case Lt:{o.animateOnClick=v;break}}let M=null;if(/^value([0-9]*)$/.test(u)&&(M="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(M="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(M="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(M="pointer-shape"),!M)return;let J=u.replace(/\D/g,"").trim(),de=J===""||J==="0"||J==="1"?0:Ue(J,0)-1;switch(M){case"value":{o.setValue(v,de);break}case"pointer-disabled":{let I=o==null?void 0:o.pointers[de];if(!I)return;I.disabled=Ge(v);break}case"aria-label":{o.setAriaLabel(de,v);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(de,v);break}}},Fl=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.disabled)!=null?u:!1}set data(o){var u;(u=this.slider)==null||u.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var u;(u=this.slider)==null||u.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var u;(u=this.slider)==null||u.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,u;return(u=(o=this.slider)==null?void 0:o.round)!=null?u:Or}set type(o){!this.slider||(this.slider.type=o??Qe)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Qe}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?u:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?u:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?u:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,u,v;return(v=(u=(o=this.slider)==null?void 0:o.styles)==null?void 0:u.theme)!=null?v:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,u;return(u=(o=this.slider)==null?void 0:o.rightToLeft)!=null?u:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,u;return(u=(o=this.slider)==null?void 0:o.bottomToTop)!=null?u:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?u:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,u;return(u=(o=this.slider)==null?void 0:o.rangeDragging)!=null?u:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ge(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var u,v;if(!this.slider)return;let m=(v=(u=this.slider)==null?void 0:u.addPointer(o))!=null?v:0;na(this,this.slider,m,`value${m+1}`,`ariaLabel${m+1}`,`pointerShape${m+1}`,`pointer${m+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=o,this.shadowRoot.appendChild(u)}connectedCallback(){var o,u;if(!this.shadowRoot)return;this._externalCSSList=se(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!v)return;let m=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!m)return;let M=Tl(this,v);this.slider=Ml(this,m,M),Ll(this,this.slider),this._observer=new MutationObserver(J=>{J.forEach(de=>{var I;if(!this.slider||de.type!=="attributes")return;let j=de.attributeName;!j||Ul(this.slider,j,(I=this.getAttribute(j))!=null?I:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Is=Fl;window.tcRangeSlider=Is,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Is),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Is{})})();(()=>{var t=(l,h,p,g,f)=>{let b=h-l;return b===0?p:(g-p)*(f-l)/b+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,h)=>e(l)?Number(l):h,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,h=null,p=null,g=null,f=null,b=!1,w=s,_=n,A=()=>{var E;let V=(E=l==null?void 0:l.shadowRoot)==null?void 0:E.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),g=document.createElement("div"),g.classList.add("mark-points"),p.append(g),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),V.append(p)},k=()=>{!h||!p||p.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},F=()=>{var E;if(!p||!h)return;let V=h.getMin(),Y=h.getMax(),K=h.getType()==="vertical",oe=h.isRightToLeft()||h.isBottomToTop();for(let re=0;re<w;re++){let ie=document.createElement("div");ie.classList.add("mark",`mark-${re}`);let ce=w===0?0:re*100/(w-1);K?oe?ie.style.top=`${100-ce}%`:ie.style.top=`${ce}%`:oe?ie.style.left=`${100-ce}%`:ie.style.left=`${ce}%`,g==null||g.append(ie)}let G=h.getData();for(let re=0;re<_;re++){let ie=document.createElement("div");ie.classList.add("mark-value",`mark-value-${re}`);let ce=_===0?0:re*100/(_-1),De=t(0,_-1,V,Y,re);ie.textContent=(G?(E=G[Math.round(De)])!=null?E:"":De).toString(),K?oe?ie.style.top=`${100-ce}%`:ie.style.top=`${ce}%`:oe?ie.style.left=`${100-ce}%`:ie.style.left=`${ce}%`,f==null||f.append(ie)}},U=(E,V)=>{ae(),w=E,_=V,w<=0&&(w=s),_<=0&&(_=n),A(),F(),k()},W=E=>{b=E,b?(A(),F(),k()):ae()},B=E=>{!p||p.style.setProperty("--marks-color",E)},N=E=>{!p||p.style.setProperty("--values-color",E)},ae=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(E,V,Y,K)=>{var oe,G;h=K,l=E,b=i(l.getAttribute("marks")),b&&(U(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),B((oe=l.getAttribute("marks-color"))!=null?oe:"#cbd5e1"),N((G=l.getAttribute("marks-values-color"))!=null?G:"#475569"))},onAttrChange:(E,V)=>{E==="marks"&&W(i(V)),E==="marks-count"&&U(r(V,s),_),E==="marks-values-count"&&U(w,r(V,n)),E==="marks-color"&&B(V),E==="marks-values-color"&&N(V)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return b??!1},set:E=>{W(i(E))}}},{name:"marksCount",attributes:{get(){return w??s},set:E=>{U(r(E,s),_)}}},{name:"marksValuesCount",attributes:{get(){return w??s},set:E=>{U(w,r(E,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:E=>{B(E)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:E=>{N(E)}}}],destroy:ae,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var vf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,Ht=(t,e,r,i)=>{for(var s=i>1?void 0:i?bf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&vf(e,r,s),s};let kt=class extends yt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Ie(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.setFixedRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?$`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:$`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${je(this.sliderRef)}
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

        `}};kt.styles=Pe`

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
    
    `;Ht([ge({context:vl,subscribe:!0}),R()],kt.prototype,"min",2);Ht([ge({context:bl,subscribe:!0}),R()],kt.prototype,"max",2);Ht([ge({context:Bn,subscribe:!0}),R()],kt.prototype,"from",2);Ht([ge({context:zn,subscribe:!0}),R()],kt.prototype,"to",2);Ht([R()],kt.prototype,"hasFixedFrom",2);Ht([R()],kt.prototype,"hasFixedTo",2);Ht([ge({context:ks,subscribe:!0}),R()],kt.prototype,"palette",2);Ht([R()],kt.prototype,"sliderRef",2);Ht([R()],kt.prototype,"initialised",2);kt=Ht([ue("registry-range-slider")],kt);var yf=Object.defineProperty,wf=Object.getOwnPropertyDescriptor,Oi=(t,e,r,i)=>{for(var s=i>1?void 0:i?wf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&yf(e,r,s),s};let Vr=class extends yt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?X:$`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Oi([ge({context:Bn,subscribe:!0})],Vr.prototype,"from",2);Oi([ge({context:zn,subscribe:!0})],Vr.prototype,"to",2);Oi([O({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],Vr.prototype,"fixed",2);Oi([O({type:String,reflect:!0,attribute:!0})],Vr.prototype,"separator",2);Vr=Oi([ue("registry-range-display")],Vr);var xf=Object.defineProperty,_f=Object.getOwnPropertyDescriptor,As=(t,e,r,i)=>{for(var s=i>1?void 0:i?_f(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&xf(e,r,s),s};let Yr=class extends yt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return $`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":X}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>$`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():$`
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
        `}};Yr.styles=Pe`

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


    `;As([R()],Yr.prototype,"histogram",2);As([O({type:Boolean,reflect:!0})],Yr.prototype,"interactive",2);As([O({type:String,reflect:!0})],Yr.prototype,"height",2);Yr=As([ue("registry-histogram")],Yr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ls extends jn{constructor(e){if(super(e),this.it=X,e.type!==In.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===X||e==null)return this._t=void 0,this.it=e;if(e===cr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ls.directiveName="unsafeHTML",ls.resultType=1;const _t=vs(ls);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Sn extends ls{}Sn.directiveName="unsafeSVG",Sn.resultType=2;const kf=vs(Sn);var Cf=Object.defineProperty,Sf=Object.getOwnPropertyDescriptor,Os=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Cf(e,r,s),s};let Gr=class extends Pi{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",t=>{this.hint=t.description})}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?X:$`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return $`
                        
                        <button 
                            class=${Gt(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${kf(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Gr.styles=Pe`

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

    `;Os([ge({context:wl,subscribe:!0}),R()],Gr.prototype,"value",2);Os([ge({context:xl,subscribe:!0}),R()],Gr.prototype,"tools",2);Os([R()],Gr.prototype,"hint",2);Gr=Os([ue("group-tool-buttons")],Gr);var $f=Object.defineProperty,Ei=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&$f(e,r,s),s};class Ze extends Pi{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Ei([ge({context:Vn,subscribe:!0}),R()],Ze.prototype,"parentFileProviderElement");Ei([ge({context:Cl,subscribe:!0}),R()],Ze.prototype,"loading");Ei([ge({context:_l,subscribe:!0}),R()],Ze.prototype,"file");Ei([ge({context:kl,subscribe:!0}),R()],Ze.prototype,"failure");Ei([ge({context:$l,subscribe:!0}),R()],Ze.prototype,"recording");var Pf=Object.defineProperty,Af=Object.getOwnPropertyDescriptor,Of=(t,e,r,i)=>{for(var s=i>1?void 0:i?Af(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Pf(e,r,s),s};let $n=class extends Ze{constructor(){super(...arguments),this.container=Ie()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return $`
            <div ${je(this.container)} class=${Gt(r)} part="file-canvas-container">
            
                ${this.loading===!0?$`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?$`<div class="error-wrapper">
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
                        </div>`:X}
            
            </div>
        
        `}};$n.styles=Pe`
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
    `;$n=Of([ue("file-canvas")],$n);var Ef=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,Tf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Df(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ef(e,r,s),s};let Pn=class extends Ze{onInstanceCreated(t){}onFailure(t){}render(){return this.file?$`
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
        `:X}};Pn.styles=Pe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Pn=Tf([ue("file-share-button")],Pn);var Lf=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,Mf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Lf(e,r,s),s};let An=class extends Ze{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?$`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${_t(this.renderRow("Thermal file name",this.file.fileName))}

                        ${_t(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?_t(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):X}

                        ${_t(this.renderRow("Time",_d.human(this.file.timestamp)))}

                        ${_t(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${_t(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${_t(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${_t(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${_t(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${_t(this.renderRow("Type",this.file.service.parser.name))}
                    ${_t(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>$`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:X}};An.styles=Pe`

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
    
    `;An=Mf([ue("file-info-button")],An);var Uf=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,If=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ff(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Uf(e,r,s),s};let On=class extends Ze{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?X:$`

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

                    ${this.file.timeline.isSequence?$`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:X}
            
            </thermal-dropdown>

        
        `}};On.styles=Pe`

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
    
    `;On=If([ue("file-download-dropdown")],On);var jf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,rr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&jf(e,r,s),s};let vt=class extends Ze{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Ie(),this.barRef=Ie(),this.containerRef=Ie(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<vt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}handleBarHover(t){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(r)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,l;const t=this.file;if(t===void 0)return X;if(t.duration===0)return X;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return $`
            <div class="${Gt(e)}" ${je(this.containerRef)}>


                ${t!==void 0?$`
                        <div class="container">

                            <div class="${Gt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?$`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:$`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>


                            <div class="${Gt(s)}"  ${je(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${je(this.barRef)}></div>
                                    ${this.cursor?$`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(h=>$`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:X}

            
            
            </div>

            ${this.currentFrame!==void 0?$`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${Vt(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${Vt(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:X}

          `}};vt.collapseWidth=500;vt.styles=Pe`
    
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
    
    `;rr([ge({context:Kn,subscribe:!0}),R()],vt.prototype,"playing",2);rr([ge({context:Ss,subscribe:!0}),R()],vt.prototype,"currentFrame",2);rr([ge({context:Xn,subscribe:!0}),R()],vt.prototype,"duration",2);rr([ge({context:Pl,subscribe:!0}),R()],vt.prototype,"mayStop",2);rr([ge({context:Gn,subscribe:!0})],vt.prototype,"cursor",2);rr([ge({context:qn,subscribe:!0})],vt.prototype,"cursorSetter",2);rr([ge({context:Zn,subscribe:!0})],vt.prototype,"markers",2);rr([R()],vt.prototype,"collapsed",2);vt=rr([ue("file-timeline")],vt);var Nf=Object.defineProperty,Hf=Object.getOwnPropertyDescriptor,Jn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Nf(e,r,s),s};let mi=class extends Ze{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?X:$`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Mn).map(([t])=>$`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof Kt&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};mi.styles=Pe`

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
    
    `;Jn([O({type:String,reflect:!0})],mi.prototype,"enabled",2);Jn([ge({context:Sl,subscribe:!0}),R()],mi.prototype,"playbackSpeed",2);mi=Jn([ue("file-playback-speed-dropdown")],mi);var Bf=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,ea=(t,e,r,i)=>{for(var s=i>1?void 0:i?zf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Bf(e,r,s),s};let vi=class extends Ze{constructor(){super(...arguments),this.container=Ie()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return $`
            <div class="container">
            
                <video ${je(this.container)} preload="metadata">

                    ${this.url===void 0?X:$`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};vi.styles=Pe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;ea([ge({context:Ss,subscribe:!0}),R()],vi.prototype,"currentFrame",2);ea([O({type:String,reflect:!0,attribute:!0})],vi.prototype,"url",2);vi=ea([ue("file-video")],vi);const Vf=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),Vt(r,"mm:ss:SSS")},Yf=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(r[0]),s=parseInt(r[1]),n=parseInt(r[2]);return i*60*1e3+s*1e3+n};var Gf=Object.defineProperty,qf=Object.getOwnPropertyDescriptor,Bt=(t,e,r,i)=>{for(var s=i>1?void 0:i?qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Gf(e,r,s),s};const ta={fromAttribute:t=>t===null?null:Yf(t),toAttribute:t=>t===null?null:Vf(t)};let At=class extends Ze{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,i){var s;super.attributeChangedCallback(e,r,i),this.log(e,r,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(s=>s.lang==="cs-CZ");if(r)return r;const i=e.find(s=>s.default===!0);return i||null}render(){return X}};Bt([ge({context:Kn,subscribe:!0}),R()],At.prototype,"playing",2);Bt([ge({context:Yn,subscribe:!0}),R()],At.prototype,"ms",2);Bt([O({type:String,reflect:!0,attribute:!0})],At.prototype,"label",2);Bt([O({type:String,reflect:!0,attribute:!0,converter:ta})],At.prototype,"start",2);Bt([O({type:String,reflect:!0,attribute:!0,converter:ta})],At.prototype,"end",2);Bt([O({type:String,reflect:!0,attribute:!0,converter:ta})],At.prototype,"dur",2);Bt([O({type:String,reflect:!0,attribute:!0})],At.prototype,"active",2);Bt([O({type:String,reflect:!0,attribute:!0})],At.prototype,"pauseOnActivate",2);Bt([O({type:String,reflect:!0,attribute:!0})],At.prototype,"say",2);At=Bt([ue("file-marker")],At);var Xf=Object.defineProperty,Kf=Object.getOwnPropertyDescriptor,Pr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Kf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Xf(e,r,s),s};let Qt=class extends Ze{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return $`

            <div class="${Gt(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Qt.styles=Pe`
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


    `;Pr([ge({context:Xn,subscribe:!0}),R()],Qt.prototype,"duration",2);Pr([ge({context:Ss,subscribe:!0}),R()],Qt.prototype,"currentFrame",2);Pr([ge({context:Yn,subscribe:!0}),R()],Qt.prototype,"ms",2);Pr([O({type:Number,reflect:!0,attribute:!0})],Qt.prototype,"start",2);Pr([O({type:Number,reflect:!0,attribute:!0})],Qt.prototype,"end",2);Pr([R()],Qt.prototype,"active",2);Qt=Pr([ue("file-marker-timeline")],Qt);var Zf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,Dl=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Zf(e,r,s),s};let cs=class extends Ze{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return $`
            <div>


            ${this.markers.map(t=>t.active?$`<div class="item">
                    <h2>${t.label}</h2>
                    ${_t(t.innerHTML)}
                    </div>`:X)}

            
            
            </div>

          `}};cs.styles=Pe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Dl([ge({context:Zn,subscribe:!0})],cs.prototype,"markers",2);cs=Dl([ue("file-marks-content")],cs);var Jf=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,ir=(t,e,r,i)=>{for(var s=i>1?void 0:i?eg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Jf(e,r,s),s};let Ot=class extends Ze{constructor(){super(...arguments),this.graphWidth=0,this.container=Ie(),this.graphRef=Ie(),this.graphs={values:[[]],colors:[]},this.left=0,this.top=0,this.width=0,this.height=0}onInstanceCreated(t){t.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=t.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(r=>{this.graphWidth=r[0].contentRect.width,this.graphRef.value&&(this.left=this.graphRef.value.left,this.top=this.graphRef.value.top,this.width=this.graphRef.value.w,this.height=this.graphRef.value.h)}).observe(this.container.value))}onFailure(){}update(t){super.update(t),this.graphRef.value&&(this.left=this.graphRef.value.left,this.top=this.graphRef.value.top,this.width=this.graphRef.value.w,this.height=this.graphRef.value.h)}render(){return $`

            <div style="position: relative; background-color: white;">

            <div style="position: absolute; top:${this.top}px; left: ${this.left}px; width: ${this.width}px; height: ${this.height}px;">
                ${this.cursor&&$`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${je(this.container)}>
                ${this.graphs.colors.length>0?$`<thermal-chart 
                        ${je(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},width:this.graphWidth,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:X}
            </div>

            

            </div>
        
        `}};Ot.styles=Pe`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 500px;
        }
    `;ir([R()],Ot.prototype,"graphWidth",2);ir([R()],Ot.prototype,"graphs",2);ir([ge({context:Gn,subscribe:!0})],Ot.prototype,"cursor",2);ir([ge({context:qn,subscribe:!0})],Ot.prototype,"cursorSetter",2);ir([R()],Ot.prototype,"left",2);ir([R()],Ot.prototype,"top",2);ir([R()],Ot.prototype,"width",2);ir([R()],Ot.prototype,"height",2);Ot=ir([ue("file-analysis-graph")],Ot);var tg=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,fr=(t,e,r,i)=>{for(var s=i>1?void 0:i?rg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&tg(e,r,s),s};let Nt=class extends Si{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID));const r=this.analysis;this.selected=r.selected,this.color=r.initialColor,this.dimension=r.width+"x"+r.height,this.value={min:r.min,max:r.max,avg:r.avg},r.file.timeline.isSequence?this.may=r instanceof Rr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:r.graph.state.MIN,max:r.graph.state.MAX,avg:r.graph.state.AVG},r.onMoveOrResize.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),r.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),r.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),r.onSelected.set(this.UUID,()=>{this.selected=!0}),r.onDeselected.set(this.UUID,()=>{this.selected=!1})}}valueOrNothing(t){return t===void 0?"-":t.toFixed(2)+" °C"}renderCell(t,e,r,i){return $`
            <td class="${e?"may":"mayNot"} ${r?"active":"inactive"}">

                ${e?$`
                        <button
                            @click=${i}
                            style="background-color: ${r?this.color:"transparent"}"
                            title="${r?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(t)}
                        </button>
                    `:this.valueOrNothing(t)}

            </td>
        `}render(){return $`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"}"
            @click=${()=>{this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0)}}
        >
            <u aria-hidden="true"></u>
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.key}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg),console.log("WTF!!",this.analysis.graph.state)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min),console.log("WTF!!",this.analysis.graph.state)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max),console.log("WTF!!",this.analysis.graph.state)})}
        <td>${this.dimension}</td>
        <td>
        <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>Remove</thermal-button>
        </td>
        
        `}};Nt.styles=Pe`
    
        :host {
            display: table-row;
            font-size: var( --thermal-fs-sm ) !important;
        }

        button, td {
            font-size: var( --thermal-fs-sm ) !important;
            color: var( --thermal-foreground);
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

    `;fr([O()],Nt.prototype,"analysis",2);fr([R()],Nt.prototype,"value",2);fr([R()],Nt.prototype,"graph",2);fr([R()],Nt.prototype,"may",2);fr([R()],Nt.prototype,"dimension",2);fr([R()],Nt.prototype,"color",2);fr([O({type:Boolean,reflect:!0,attribute:!0})],Nt.prototype,"selected",2);Nt=fr([ue("file-analysis-table-row")],Nt);var ig=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,Es=(t,e,r,i)=>{for(var s=i>1?void 0:i?sg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ig(e,r,s),s};let qr=class extends Ze{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(t){console.log(t)}onInstanceCreated(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?X:$`


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
                        ${this.hasHighlightedData?$`<thermal-button variant="foreground" @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:X}
                    </th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(t=>$`
                                <file-analysis-table-row
                                    .analysis=${t}
                                ></file-analysis-table-row>
                            `)}
            
            </tbody>
        `}};qr.styles=Pe`
    
        :host {
            display: table;
            width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            td, th {
                padding: .5rem;
            }
        }

        th {
            text-align: left;
        }

        th, td, button {
            font-size: var( --thermal-fs-sm ) !important;
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

        



    `;Es([R()],qr.prototype,"analysis",2);Es([R()],qr.prototype,"allSelected",2);Es([R()],qr.prototype,"hasHighlightedData",2);qr=Es([ue("file-analysis-table")],qr);var ng=Object.defineProperty,ag=Object.getOwnPropertyDescriptor,Ar=(t,e,r,i)=>{for(var s=i>1?void 0:i?ag(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ng(e,r,s),s};let Jt=class extends Ze{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return $`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?$`<file-share-button ></file-share-button>`:X}
              ${this.showabout===!0?$`<app-info-button ></app-info-button>`:X}
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
    `}};Jt.styles=Pe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Ar([O({type:Number})],Jt.prototype,"from",2);Ar([O({type:Number})],Jt.prototype,"to",2);Ar([O({type:Number})],Jt.prototype,"speed",2);Ar([O({type:String,reflect:!0,attribute:!0})],Jt.prototype,"showembed",2);Ar([O({type:String,reflect:!0,attribute:!0})],Jt.prototype,"showabout",2);Ar([O({type:String,reflect:!0,attribute:!0})],Jt.prototype,"showfullscreen",2);Jt=Ar([ue("file-app")],Jt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=t=>t??X;var og=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,Qr=(t,e,r,i)=>{for(var s=i>1?void 0:i?lg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&og(e,r,s),s};let Sr=class extends Si{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?X:$`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${mn(this.from)} to=${mn(this.to)} speed=${mn(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Qr([O({type:String,reflect:!0})],Sr.prototype,"palette",2);Qr([O({type:Number})],Sr.prototype,"from",2);Qr([O({type:Number})],Sr.prototype,"to",2);Qr([O({type:Number,reflect:!0})],Sr.prototype,"speed",2);Qr([O({type:String,reflect:!0})],Sr.prototype,"url",2);Sr=Qr([ue("thermal-file-app")],Sr);var cg=Object.defineProperty,hg=Object.getOwnPropertyDescriptor,ra=(t,e,r,i)=>{for(var s=i>1?void 0:i?hg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&cg(e,r,s),s};let bi=class extends Si{constructor(){super(...arguments),this.dropinRef=Ie(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return $`

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

                            ${this.loaded===!0?$`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:X}

                            <file-dropin ${je(this.dropinRef)}>

                                <file-app showembed="false" showabout="false"></file-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};bi.styles=Pe`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;ra([R()],bi.prototype,"dropinRef",2);ra([R()],bi.prototype,"loaded",2);bi=ra([ue("thermal-dropin-app")],bi);const vn=window.matchMedia("(prefers-color-scheme: dark)"),ia="thermal-dark-mode",lo=()=>{document.body.classList.add(ia)},dg=()=>{document.body.classList.remove(ia)},ug=()=>{vn.matches&&lo();const t=e=>{e.matches?lo():dg()};vn.addEventListener("change",t),vn.addListener(t)},pg=()=>{const t=document.createElement("link");t.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(t)},fg=En.toString().replaceAll(".","-"),gg=t=>`thermal__${t}__${fg}`,co=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",gg(t)),r.innerHTML=e,document.head.appendChild(r)},mg=()=>{co("rootVariables",`

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


            
        
        `),co("darkModeOverrides",`
        
            body.${ia} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};pg();console.info(`@labir/embed ${En}
    Author: ${tc}
    `);ug();mg();document.addEventListener("DOMContentLoaded",()=>{});
