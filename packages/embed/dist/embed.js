var Vl=Object.defineProperty;var Yl=(t,e,r)=>e in t?Vl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(Yl(t,typeof e!="symbol"?e+"":e,r),r);const An="1.2.38",ql="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=globalThis,On=Ys.ShadowRoot&&(Ys.ShadyCSS===void 0||Ys.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,En=Symbol(),_a=new WeakMap;let ao=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==En)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(On&&e===void 0){const s=r!==void 0&&r.length===1;s&&(e=_a.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&_a.set(r,e))}return e}toString(){return this.cssText}};const Gl=t=>new ao(typeof t=="string"?t:t+"",void 0,En),Ae=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((s,i,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new ao(r,t,En)},Xl=(t,e)=>{if(On)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const s=document.createElement("style"),i=Ys.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},ka=On?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const s of e.cssRules)r+=s.cssText;return Gl(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zl,defineProperty:Kl,getOwnPropertyDescriptor:Ql,getOwnPropertyNames:Jl,getOwnPropertySymbols:ec,getPrototypeOf:tc}=Object,ir=globalThis,Ca=ir.trustedTypes,rc=Ca?Ca.emptyScript:"",an=ir.reactiveElementPolyfillSupport,rs=(t,e)=>t,Zs={toAttribute(t,e){switch(e){case Boolean:t=t?rc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Dn=(t,e)=>!Zl(t,e),Sa={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:Dn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ir.litPropertyMetadata??(ir.litPropertyMetadata=new WeakMap);let Er=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Sa){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,r);i!==void 0&&Kl(this.prototype,e,i)}}static getPropertyDescriptor(e,r,s){const{get:i,set:n}=Ql(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const l=i==null?void 0:i.call(this);n.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Sa}static _$Ei(){if(this.hasOwnProperty(rs("elementProperties")))return;const e=tc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(rs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rs("properties"))){const r=this.properties,s=[...Jl(r),...ec(r)];for(const i of s)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)r.unshift(ka(i))}else e!==void 0&&r.push(ka(e));return r}static _$Eu(e,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EC(e,r){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const a=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:Zs).toAttribute(r,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,r){var n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Zs;this._$Em=i,this[i]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Dn)(this[e],r))return;this.P(e,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,s){this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Er.elementStyles=[],Er.shadowRootOptions={mode:"open"},Er[rs("elementProperties")]=new Map,Er[rs("finalized")]=new Map,an==null||an({ReactiveElement:Er}),(ir.reactiveElementVersions??(ir.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=globalThis,Ks=ss.trustedTypes,$a=Ks?Ks.createPolicy("lit-html",{createHTML:t=>t}):void 0,oo="$lit$",sr=`lit$${Math.random().toFixed(9).slice(2)}$`,lo="?"+sr,sc=`<${lo}>`,br=document,as=()=>br.createComment(""),os=t=>t===null||typeof t!="object"&&typeof t!="function",co=Array.isArray,ic=t=>co(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",on=`[ 	
\f\r]`,Jr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pa=/-->/g,Aa=/>/g,fr=RegExp(`>|${on}(?:([^\\s"'>=/]+)(${on}*=${on}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oa=/'/g,Ea=/"/g,ho=/^(?:script|style|textarea|title)$/i,nc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),A=nc(1),nr=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Da=new WeakMap,mr=br.createTreeWalker(br,129);function uo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return $a!==void 0?$a.createHTML(e):e}const ac=(t,e)=>{const r=t.length-1,s=[];let i,n=e===2?"<svg>":"",a=Jr;for(let l=0;l<r;l++){const h=t[l];let p,g,f=-1,b=0;for(;b<h.length&&(a.lastIndex=b,g=a.exec(h),g!==null);)b=a.lastIndex,a===Jr?g[1]==="!--"?a=Pa:g[1]!==void 0?a=Aa:g[2]!==void 0?(ho.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=fr):g[3]!==void 0&&(a=fr):a===fr?g[0]===">"?(a=i??Jr,f=-1):g[1]===void 0?f=-2:(f=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?fr:g[3]==='"'?Ea:Oa):a===Ea||a===Oa?a=fr:a===Pa||a===Aa?a=Jr:(a=fr,i=void 0);const w=a===fr&&t[l+1].startsWith("/>")?" ":"";n+=a===Jr?h+sc:f>=0?(s.push(p),h.slice(0,f)+oo+h.slice(f)+sr+w):h+sr+(f===-2?l:w)}return[uo(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),s]};let vn=class po{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,a=0;const l=e.length-1,h=this.parts,[p,g]=ac(e,r);if(this.el=po.createElement(p,s),mr.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=mr.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(oo)){const b=g[a++],w=i.getAttribute(f).split(sr),_=/([.?@])?(.*)/.exec(b);h.push({type:1,index:n,name:_[2],strings:w,ctor:_[1]==="."?lc:_[1]==="?"?cc:_[1]==="@"?hc:li}),i.removeAttribute(f)}else f.startsWith(sr)&&(h.push({type:6,index:n}),i.removeAttribute(f));if(ho.test(i.tagName)){const f=i.textContent.split(sr),b=f.length-1;if(b>0){i.textContent=Ks?Ks.emptyScript:"";for(let w=0;w<b;w++)i.append(f[w],as()),mr.nextNode(),h.push({type:2,index:++n});i.append(f[b],as())}}}else if(i.nodeType===8)if(i.data===lo)h.push({type:2,index:n});else{let f=-1;for(;(f=i.data.indexOf(sr,f+1))!==-1;)h.push({type:7,index:n}),f+=sr.length-1}n++}}static createElement(e,r){const s=br.createElement("template");return s.innerHTML=e,s}};function Lr(t,e,r=t,s){var a,l;if(e===nr)return e;let i=s!==void 0?(a=r._$Co)==null?void 0:a[s]:r._$Cl;const n=os(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(e=Lr(t,i._$AS(t,e.values),i,s)),e}let oc=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??br).importNode(r,!0);mr.currentNode=i;let n=mr.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new ms(n,n.nextSibling,this,e):h.type===1?p=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(p=new dc(n,this,e)),this._$AV.push(p),h=s[++l]}a!==(h==null?void 0:h.index)&&(n=mr.nextNode(),a++)}return mr.currentNode=br,i}p(e){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}};class ms{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Lr(this,e,r),os(e)?e===X||e==null||e===""?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==nr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ic(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==X&&os(this._$AH)?this._$AA.nextSibling.data=e:this.T(br.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=vn.createElement(uo(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(r);else{const a=new oc(i,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=Da.get(e.strings);return r===void 0&&Da.set(e.strings,r=new vn(e)),r}k(e){co(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const n of e)i===r.length?r.push(s=new ms(this.S(as()),this.S(as()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let li=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,i,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=X}_$AI(e,r=this,s,i){const n=this.strings;let a=!1;if(n===void 0)e=Lr(this,e,r,0),a=!os(e)||e!==this._$AH&&e!==nr,a&&(this._$AH=e);else{const l=e;let h,p;for(e=n[0],h=0;h<n.length-1;h++)p=Lr(this,l[s+h],r,h),p===nr&&(p=this._$AH[h]),a||(a=!os(p)||p!==this._$AH[h]),p===X?e=X:e!==X&&(e+=(p??"")+n[h+1]),this._$AH[h]=p}a&&!i&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},lc=class extends li{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}};class cc extends li{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class hc extends li{constructor(e,r,s,i,n){super(e,r,s,i,n),this.type=5}_$AI(e,r=this){if((e=Lr(this,e,r,0)??X)===nr)return;const s=this._$AH,i=e===X&&s!==X||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==X&&(s===X||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let dc=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Lr(this,e)}};const ln=ss.litHtmlPolyfillSupport;ln==null||ln(vn,ms),(ss.litHtmlVersions??(ss.litHtmlVersions=[])).push("3.1.4");const uc=(t,e,r)=>{const s=(r==null?void 0:r.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(r==null?void 0:r.renderBefore)??null;s._$litPart$=i=new ms(e.insertBefore(as(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends Er{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=uc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return nr}};var no;st._$litElement$=!0,st.finalized=!0,(no=globalThis.litElementHydrateSupport)==null||no.call(globalThis,{LitElement:st});const cn=globalThis.litElementPolyfillSupport;cn==null||cn({LitElement:st});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pc={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:Dn},fc=(t=pc,e,r)=>{const{kind:s,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),s==="accessor"){const{name:a}=r;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,h,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(s==="setter"){const{name:a}=r;return function(l){const h=this[a];e.call(this,l),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+s)};function N(t){return(e,r)=>typeof r=="object"?fc(t,e,r):((s,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,a?{...s,wrapped:!0}:s),a?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t){return N({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vs(t){return(e,r)=>{const{slot:s,selector:i}=t??{},n="slot"+(s?`[name=${s}]`:":not([name])");return gc(e,r,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return i===void 0?l:l.filter(p=>p.matches(i))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const mc={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Hs(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Bs(t){return t.toString().indexOf("`")===-1}Bs(t=>t``)||Bs(t=>t`\0`)||Bs(t=>t`\n`)||Bs(t=>t`\u0000`);Hs``&&Hs`\0`&&Hs`\n`&&Hs`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let vc="google#safe";function bc(){if(typeof window<"u")return window.trustedTypes}function fo(){var t;return(t=bc())!==null&&t!==void 0?t:null}let zs;function yc(){var t,e;if(zs===void 0)try{zs=(e=(t=fo())===null||t===void 0?void 0:t.createPolicy(vc,{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r}))!==null&&e!==void 0?e:null}catch{zs=null}return zs}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class go{constructor(e,r){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Ta(t){var e;const r=t,s=(e=yc())===null||e===void 0?void 0:e.createScriptURL(r);return s??new go(r,mc)}function wc(t){var e;if(!((e=fo())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof go)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let r="";throw new Error(r)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function xc(t,...e){if(e.length===0)return Ta(t[0]);t[0].toLowerCase();let r=t[0];for(let s=0;s<e.length;s++)r+=encodeURIComponent(e[s])+t[s+1];return Ta(r)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function _c(t){var e;const r=t.document,s=(e=r.querySelector)===null||e===void 0?void 0:e.call(r,"script[nonce]");return s&&(s.nonce||s.getAttribute("nonce"))||""}function kc(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,r=_c(e||window);r&&t.setAttribute("nonce",r)}function Cc(t,e,r){t.src=wc(e),kc(t)}/**
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
 */const Sc=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Cc(r,xc`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function mo(t={}){await Sc;const{version:e="current",packages:r=["corechart"],language:s=document.documentElement.lang||"en",mapsApiKey:i}=t;return google.charts.load(e,{packages:r,language:s,mapsApiKey:i})}async function La(t){if(await mo(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function $c(t){return await mo(),new google.visualization.ChartWrapper({container:t})}/**
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
 */var Kt=function(t,e,r,s){var i=arguments.length,n=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,r):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,s);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n};const Ra=["ready","select"],Pc={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class Pt extends st{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return A`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){$c(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Ra,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Pc[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const r=this.chartWrapper.getChart();r!==e&&this.propagateEvents(this.events.filter(i=>!Ra.includes(i)),r);const s=this.shadowRoot.getElementById("styles");s.children.length||this.localizeGlobalStylesheets(s)}),this.redraw()}propagateEvents(e,r){for(const s of e)google.visualization.events.addListener(r,s,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${s}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const r=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===r)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:r}=this;if(!(!e||!r))try{const s=await La({cols:r});s.addRows(e),this._data=s}catch(s){this.shadowRoot.getElementById("chartdiv").textContent=String(s)}}dataChanged(){let e=this.data,r;if(!e)return;let s=!1;try{e=JSON.parse(e)}catch{s=typeof e=="string"||e instanceof String}s?r=fetch(e).then(i=>i.json()):r=Promise.resolve(e),r.then(La).then(i=>{this._data=i})}localizeGlobalStylesheets(e){const r=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const s of r){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",s.getAttribute("href")),e.appendChild(i)}}}Pt.styles=Ae`
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
  `;Kt([N({type:String,reflect:!0})],Pt.prototype,"type",void 0);Kt([N({type:Array})],Pt.prototype,"events",void 0);Kt([N({type:Object,hasChanged:()=>!0})],Pt.prototype,"options",void 0);Kt([N({type:Array})],Pt.prototype,"cols",void 0);Kt([N({type:Array})],Pt.prototype,"rows",void 0);Kt([N({type:String})],Pt.prototype,"data",void 0);Kt([N({type:Object})],Pt.prototype,"view",void 0);Kt([N({type:Array})],Pt.prototype,"selection",void 0);Kt([N({type:Object})],Pt.prototype,"_data",void 0);customElements.define("google-chart",Pt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ac=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ci=t=>(...e)=>({_$litDirective$:t,values:e});let Ln=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this._$Ct=e,this._$AM=r,this._$Ci=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=(t,e)=>{var s;const r=t._$AN;if(r===void 0)return!1;for(const i of r)(s=i._$AO)==null||s.call(i,e,!1),is(i,e);return!0},Qs=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},vo=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Dc(e)}};function Oc(t){this._$AN!==void 0?(Qs(this),this._$AM=t,vo(this)):this._$AM=t}function Ec(t,e=!1,r=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let n=r;n<s.length;n++)is(s[n],!1),Qs(s[n]);else s!=null&&(is(s,!1),Qs(s));else is(this,t)}const Dc=t=>{t.type==Tn.CHILD&&(t._$AP??(t._$AP=Ec),t._$AQ??(t._$AQ=Oc))};class Tc extends Ln{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,s){super._$AT(e,r,s),vo(this),this.isConnected=e._$AU}_$AO(e,r=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),r&&(is(this,e),Qs(this))}setValue(e){if(Ac(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=()=>new Lc;let Lc=class{};const hn=new WeakMap,je=ci(class extends Tc{render(t){return X}update(t,[e]){var s;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(s=t.options)==null?void 0:s.host,this.rt(this.ct=t.element)),X}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=hn.get(e);r===void 0&&(r=new WeakMap,hn.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=hn.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Rc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,bo=(t,e,r,s)=>{for(var i=s>1?void 0:s?Mc(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Rc(e,r,i),i};let ls=class extends st{constructor(){super(),this.dialogRef=Ie(),this.closeButtonRef=Ie(),this.invokerRef=Ie()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return A`
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
        `}};ls.shadowRootOptions={...st.shadowRootOptions,mode:"open"};ls.styles=Ae`

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

        
    
    `;bo([N({type:String,reflect:!0})],ls.prototype,"label",2);ls=bo([ue("thermal-dialog")],ls);var Uc=Object.defineProperty,Fc=Object.getOwnPropertyDescriptor,hi=(t,e,r,s)=>{for(var i=s>1?void 0:s?Fc(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Uc(e,r,i),i};let Vt=class extends st{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return A`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Vt.VARIANTS=["slate","primary","foreground","background"];Vt.shadowRootOptions={...st.shadowRootOptions,mode:"open"};Vt.styles=Ae`

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
    
    `;hi([N({type:String,converter:{fromAttribute:t=>Vt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Vt.prototype,"variant",2);hi([N({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],Vt.prototype,"interactive",2);hi([N({type:String})],Vt.prototype,"size",2);Vt=hi([ue("thermal-button")],Vt);const Rr=Math.min,Ht=Math.max,Js=Math.round,ar=t=>({x:t,y:t}),Ic={left:"right",right:"left",bottom:"top",top:"bottom"},jc={start:"end",end:"start"};function Ma(t,e,r){return Ht(t,Rr(e,r))}function bs(t,e){return typeof t=="function"?t(e):t}function Yt(t){return t.split("-")[0]}function di(t){return t.split("-")[1]}function yo(t){return t==="x"?"y":"x"}function wo(t){return t==="y"?"height":"width"}function ys(t){return["top","bottom"].includes(Yt(t))?"y":"x"}function xo(t){return yo(ys(t))}function Wc(t,e,r){r===void 0&&(r=!1);const s=di(t),i=xo(t),n=wo(i);let a=i==="x"?s===(r?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=ei(a)),[a,ei(a)]}function Nc(t){const e=ei(t);return[bn(t),e,bn(e)]}function bn(t){return t.replace(/start|end/g,e=>jc[e])}function Hc(t,e,r){const s=["left","right"],i=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:s:e?s:i;case"left":case"right":return e?n:a;default:return[]}}function Bc(t,e,r,s){const i=di(t);let n=Hc(Yt(t),r==="start",s);return i&&(n=n.map(a=>a+"-"+i),e&&(n=n.concat(n.map(bn)))),n}function ei(t){return t.replace(/left|right|bottom|top/g,e=>Ic[e])}function zc(t){return{top:0,right:0,bottom:0,left:0,...t}}function _o(t){return typeof t!="number"?zc(t):{top:t,right:t,bottom:t,left:t}}function Mr(t){const{x:e,y:r,width:s,height:i}=t;return{width:s,height:i,top:r,left:e,right:e+s,bottom:r+i,x:e,y:r}}function Ua(t,e,r){let{reference:s,floating:i}=t;const n=ys(e),a=xo(e),l=wo(a),h=Yt(e),p=n==="y",g=s.x+s.width/2-i.width/2,f=s.y+s.height/2-i.height/2,b=s[l]/2-i[l]/2;let w;switch(h){case"top":w={x:g,y:s.y-i.height};break;case"bottom":w={x:g,y:s.y+s.height};break;case"right":w={x:s.x+s.width,y:f};break;case"left":w={x:s.x-i.width,y:f};break;default:w={x:s.x,y:s.y}}switch(di(e)){case"start":w[a]-=b*(r&&p?-1:1);break;case"end":w[a]+=b*(r&&p?-1:1);break}return w}const Vc=async(t,e,r)=>{const{placement:s="bottom",strategy:i="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:g,y:f}=Ua(p,s,h),b=s,w={},_=0;for(let P=0;P<l.length;P++){const{name:k,fn:U}=l[P],{x:M,y:j,data:B,reset:W}=await U({x:g,y:f,initialPlacement:s,placement:b,strategy:i,middlewareData:w,rects:p,platform:a,elements:{reference:t,floating:e}});g=M??g,f=j??f,w={...w,[k]:{...w[k],...B}},W&&_<=50&&(_++,typeof W=="object"&&(W.placement&&(b=W.placement),W.rects&&(p=W.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):W.rects),{x:g,y:f}=Ua(p,b,h)),P=-1)}return{x:g,y:f,placement:b,strategy:i,middlewareData:w}};async function ko(t,e){var r;e===void 0&&(e={});const{x:s,y:i,platform:n,rects:a,elements:l,strategy:h}=t,{boundary:p="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:b=!1,padding:w=0}=bs(e,t),_=_o(w),k=l[b?f==="floating"?"reference":"floating":f],U=Mr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(k)))==null||r?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:g,strategy:h})),M=f==="floating"?{x:s,y:i,width:a.floating.width,height:a.floating.height}:a.reference,j=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(j))?await(n.getScale==null?void 0:n.getScale(j))||{x:1,y:1}:{x:1,y:1},W=Mr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:M,offsetParent:j,strategy:h}):M);return{top:(U.top-W.top+_.top)/B.y,bottom:(W.bottom-U.bottom+_.bottom)/B.y,left:(U.left-W.left+_.left)/B.x,right:(W.right-U.right+_.right)/B.x}}const Yc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,s;const{placement:i,middlewareData:n,rects:a,initialPlacement:l,platform:h,elements:p}=e,{mainAxis:g=!0,crossAxis:f=!0,fallbackPlacements:b,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:P=!0,...k}=bs(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const U=Yt(i),M=Yt(l)===l,j=await(h.isRTL==null?void 0:h.isRTL(p.floating)),B=b||(M||!P?[ei(l)]:Nc(l));!b&&_!=="none"&&B.push(...Bc(l,P,_,j));const W=[l,...B],ae=await ko(e,k),O=[];let V=((s=n.flip)==null?void 0:s.overflows)||[];if(g&&O.push(ae[U]),f){const q=Wc(i,a,j);O.push(ae[q[0]],ae[q[1]])}if(V=[...V,{placement:i,overflows:O}],!O.every(q=>q<=0)){var Y,Z;const q=(((Y=n.flip)==null?void 0:Y.index)||0)+1,re=W[q];if(re)return{data:{index:q,overflows:V},reset:{placement:re}};let se=(Z=V.filter(ce=>ce.overflows[0]<=0).sort((ce,De)=>ce.overflows[1]-De.overflows[1])[0])==null?void 0:Z.placement;if(!se)switch(w){case"bestFit":{var oe;const ce=(oe=V.map(De=>[De.placement,De.overflows.filter(We=>We>0).reduce((We,Re)=>We+Re,0)]).sort((De,We)=>De[1]-We[1])[0])==null?void 0:oe[0];ce&&(se=ce);break}case"initialPlacement":se=l;break}if(i!==se)return{reset:{placement:se}}}return{}}}};function Co(t){const e=Rr(...t.map(n=>n.left)),r=Rr(...t.map(n=>n.top)),s=Ht(...t.map(n=>n.right)),i=Ht(...t.map(n=>n.bottom));return{x:e,y:r,width:s-e,height:i-r}}function qc(t){const e=t.slice().sort((i,n)=>i.y-n.y),r=[];let s=null;for(let i=0;i<e.length;i++){const n=e[i];!s||n.y-s.y>s.height/2?r.push([n]):r[r.length-1].push(n),s=n}return r.map(i=>Mr(Co(i)))}const Gc=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:s,rects:i,platform:n,strategy:a}=e,{padding:l=2,x:h,y:p}=bs(t,e),g=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(s.reference))||[]),f=qc(g),b=Mr(Co(g)),w=_o(l);function _(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&p!=null)return f.find(k=>h>k.left-w.left&&h<k.right+w.right&&p>k.top-w.top&&p<k.bottom+w.bottom)||b;if(f.length>=2){if(ys(r)==="y"){const Z=f[0],oe=f[f.length-1],q=Yt(r)==="top",re=Z.top,se=oe.bottom,ce=q?Z.left:oe.left,De=q?Z.right:oe.right,We=De-ce,Re=se-re;return{top:re,bottom:se,left:ce,right:De,width:We,height:Re,x:ce,y:re}}const k=Yt(r)==="left",U=Ht(...f.map(Z=>Z.right)),M=Rr(...f.map(Z=>Z.left)),j=f.filter(Z=>k?Z.left===M:Z.right===U),B=j[0].top,W=j[j.length-1].bottom,ae=M,O=U,V=O-ae,Y=W-B;return{top:B,bottom:W,left:ae,right:O,width:V,height:Y,x:ae,y:B}}return b}const P=await n.getElementRects({reference:{getBoundingClientRect:_},floating:s.floating,strategy:a});return i.reference.x!==P.reference.x||i.reference.y!==P.reference.y||i.reference.width!==P.reference.width||i.reference.height!==P.reference.height?{reset:{rects:P}}:{}}}};async function Xc(t,e){const{placement:r,platform:s,elements:i}=t,n=await(s.isRTL==null?void 0:s.isRTL(i.floating)),a=Yt(r),l=di(r),h=ys(r)==="y",p=["left","top"].includes(a)?-1:1,g=n&&h?-1:1,f=bs(e,t);let{mainAxis:b,crossAxis:w,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof _=="number"&&(w=l==="end"?_*-1:_),h?{x:w*g,y:b*p}:{x:b*p,y:w*g}}const Zc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,s;const{x:i,y:n,placement:a,middlewareData:l}=e,h=await Xc(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:i+h.x,y:n+h.y,data:{...h,placement:a}}}}},Kc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:s,placement:i}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:k=>{let{x:U,y:M}=k;return{x:U,y:M}}},...h}=bs(t,e),p={x:r,y:s},g=await ko(e,h),f=ys(Yt(i)),b=yo(f);let w=p[b],_=p[f];if(n){const k=b==="y"?"top":"left",U=b==="y"?"bottom":"right",M=w+g[k],j=w-g[U];w=Ma(M,w,j)}if(a){const k=f==="y"?"top":"left",U=f==="y"?"bottom":"right",M=_+g[k],j=_-g[U];_=Ma(M,_,j)}const P=l.fn({...e,[b]:w,[f]:_});return{...P,data:{x:P.x-r,y:P.y-s}}}}};function Yr(t){return So(t)?(t.nodeName||"").toLowerCase():"#document"}function ft(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function cr(t){var e;return(e=(So(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function So(t){return t instanceof Node||t instanceof ft(t).Node}function Rt(t){return t instanceof Element||t instanceof ft(t).Element}function Mt(t){return t instanceof HTMLElement||t instanceof ft(t).HTMLElement}function Fa(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ft(t).ShadowRoot}function ws(t){const{overflow:e,overflowX:r,overflowY:s,display:i}=St(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+r)&&!["inline","contents"].includes(i)}function Qc(t){return["table","td","th"].includes(Yr(t))}function ui(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Rn(t){const e=Mn(),r=St(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(r.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(r.contain||"").includes(s))}function Jc(t){let e=or(t);for(;Mt(e)&&!Ur(e);){if(ui(e))return null;if(Rn(e))return e;e=or(e)}return null}function Mn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ur(t){return["html","body","#document"].includes(Yr(t))}function St(t){return ft(t).getComputedStyle(t)}function pi(t){return Rt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function or(t){if(Yr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Fa(t)&&t.host||cr(t);return Fa(e)?e.host:e}function $o(t){const e=or(t);return Ur(e)?t.ownerDocument?t.ownerDocument.body:t.body:Mt(e)&&ws(e)?e:$o(e)}function yn(t,e,r){var s;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=$o(t),n=i===((s=t.ownerDocument)==null?void 0:s.body),a=ft(i);return n?e.concat(a,a.visualViewport||[],ws(i)?i:[],a.frameElement&&r?yn(a.frameElement):[]):e.concat(i,yn(i,[],r))}function Po(t){const e=St(t);let r=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const i=Mt(t),n=i?t.offsetWidth:r,a=i?t.offsetHeight:s,l=Js(r)!==n||Js(s)!==a;return l&&(r=n,s=a),{width:r,height:s,$:l}}function Ao(t){return Rt(t)?t:t.contextElement}function Tr(t){const e=Ao(t);if(!Mt(e))return ar(1);const r=e.getBoundingClientRect(),{width:s,height:i,$:n}=Po(e);let a=(n?Js(r.width):r.width)/s,l=(n?Js(r.height):r.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const eh=ar(0);function Oo(t){const e=ft(t);return!Mn()||!e.visualViewport?eh:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function th(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ft(t)?!1:e}function cs(t,e,r,s){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=Ao(t);let a=ar(1);e&&(s?Rt(s)&&(a=Tr(s)):a=Tr(t));const l=th(n,r,s)?Oo(n):ar(0);let h=(i.left+l.x)/a.x,p=(i.top+l.y)/a.y,g=i.width/a.x,f=i.height/a.y;if(n){const b=ft(n),w=s&&Rt(s)?ft(s):s;let _=b,P=_.frameElement;for(;P&&s&&w!==_;){const k=Tr(P),U=P.getBoundingClientRect(),M=St(P),j=U.left+(P.clientLeft+parseFloat(M.paddingLeft))*k.x,B=U.top+(P.clientTop+parseFloat(M.paddingTop))*k.y;h*=k.x,p*=k.y,g*=k.x,f*=k.y,h+=j,p+=B,_=ft(P),P=_.frameElement}}return Mr({width:g,height:f,x:h,y:p})}function rh(t){let{elements:e,rect:r,offsetParent:s,strategy:i}=t;const n=i==="fixed",a=cr(s),l=e?ui(e.floating):!1;if(s===a||l&&n)return r;let h={scrollLeft:0,scrollTop:0},p=ar(1);const g=ar(0),f=Mt(s);if((f||!f&&!n)&&((Yr(s)!=="body"||ws(a))&&(h=pi(s)),Mt(s))){const b=cs(s);p=Tr(s),g.x=b.x+s.clientLeft,g.y=b.y+s.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+g.x,y:r.y*p.y-h.scrollTop*p.y+g.y}}function sh(t){return Array.from(t.getClientRects())}function Eo(t){return cs(cr(t)).left+pi(t).scrollLeft}function ih(t){const e=cr(t),r=pi(t),s=t.ownerDocument.body,i=Ht(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),n=Ht(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let a=-r.scrollLeft+Eo(t);const l=-r.scrollTop;return St(s).direction==="rtl"&&(a+=Ht(e.clientWidth,s.clientWidth)-i),{width:i,height:n,x:a,y:l}}function nh(t,e){const r=ft(t),s=cr(t),i=r.visualViewport;let n=s.clientWidth,a=s.clientHeight,l=0,h=0;if(i){n=i.width,a=i.height;const p=Mn();(!p||p&&e==="fixed")&&(l=i.offsetLeft,h=i.offsetTop)}return{width:n,height:a,x:l,y:h}}function ah(t,e){const r=cs(t,!0,e==="fixed"),s=r.top+t.clientTop,i=r.left+t.clientLeft,n=Mt(t)?Tr(t):ar(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,h=i*n.x,p=s*n.y;return{width:a,height:l,x:h,y:p}}function Ia(t,e,r){let s;if(e==="viewport")s=nh(t,r);else if(e==="document")s=ih(cr(t));else if(Rt(e))s=ah(e,r);else{const i=Oo(t);s={...e,x:e.x-i.x,y:e.y-i.y}}return Mr(s)}function Do(t,e){const r=or(t);return r===e||!Rt(r)||Ur(r)?!1:St(r).position==="fixed"||Do(r,e)}function oh(t,e){const r=e.get(t);if(r)return r;let s=yn(t,[],!1).filter(l=>Rt(l)&&Yr(l)!=="body"),i=null;const n=St(t).position==="fixed";let a=n?or(t):t;for(;Rt(a)&&!Ur(a);){const l=St(a),h=Rn(a);!h&&l.position==="fixed"&&(i=null),(n?!h&&!i:!h&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ws(a)&&!h&&Do(t,a))?s=s.filter(g=>g!==a):i=l,a=or(a)}return e.set(t,s),s}function lh(t){let{element:e,boundary:r,rootBoundary:s,strategy:i}=t;const a=[...r==="clippingAncestors"?ui(e)?[]:oh(e,this._c):[].concat(r),s],l=a[0],h=a.reduce((p,g)=>{const f=Ia(e,g,i);return p.top=Ht(f.top,p.top),p.right=Rr(f.right,p.right),p.bottom=Rr(f.bottom,p.bottom),p.left=Ht(f.left,p.left),p},Ia(e,l,i));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function ch(t){const{width:e,height:r}=Po(t);return{width:e,height:r}}function hh(t,e,r){const s=Mt(e),i=cr(e),n=r==="fixed",a=cs(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const h=ar(0);if(s||!s&&!n)if((Yr(e)!=="body"||ws(i))&&(l=pi(e)),s){const f=cs(e,!0,n,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else i&&(h.x=Eo(i));const p=a.left+l.scrollLeft-h.x,g=a.top+l.scrollTop-h.y;return{x:p,y:g,width:a.width,height:a.height}}function dn(t){return St(t).position==="static"}function ja(t,e){return!Mt(t)||St(t).position==="fixed"?null:e?e(t):t.offsetParent}function To(t,e){const r=ft(t);if(ui(t))return r;if(!Mt(t)){let i=or(t);for(;i&&!Ur(i);){if(Rt(i)&&!dn(i))return i;i=or(i)}return r}let s=ja(t,e);for(;s&&Qc(s)&&dn(s);)s=ja(s,e);return s&&Ur(s)&&dn(s)&&!Rn(s)?r:s||Jc(t)||r}const dh=async function(t){const e=this.getOffsetParent||To,r=this.getDimensions,s=await r(t.floating);return{reference:hh(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function uh(t){return St(t).direction==="rtl"}const ph={convertOffsetParentRelativeRectToViewportRelativeRect:rh,getDocumentElement:cr,getClippingRect:lh,getOffsetParent:To,getElementRects:dh,getClientRects:sh,getDimensions:ch,getScale:Tr,isElement:Rt,isRTL:uh},fh=Zc,gh=Kc,mh=Yc,vh=Gc,bh=(t,e,r)=>{const s=new Map,i={platform:ph,...r},n={...i.platform,_c:s};return Vc(t,e,{...i,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=ci(class extends Ln{constructor(t){var e;if(super(t),t.type!==Tn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((s=this.nt)!=null&&s.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(i=this.nt)!=null&&i.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return nr}});var yh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,xs=(t,e,r,s)=>{for(var i=s>1?void 0:s?wh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&yh(e,r,i),i};let qt=class extends st{constructor(){super(...arguments),this.dropdownRef=Ie(),this.invokerRef=Ie(),this.optionsRef=Ie(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){bh(this.invokerRef.value,this.optionsRef.value,{middleware:[fh(2),mh(),vh(),gh()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var s,i,n,a;t==="open"&&(r==="open"?((s=this.optionsRef.value)==null||s.classList.add("dropdown-options__show"),(i=this.dropdownRef.value)==null||i.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return A`

            <div class="dropdown" ${je(this.dropdownRef)}>

                <thermal-button class="${Bt(t)}" ${je(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?A`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:A`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};qt.shadowRootOptions={...st.shadowRootOptions,mode:"open"};qt.styles=Ae`

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
    
    `;xs([vs({slot:"option"})],qt.prototype,"_options",2);xs([N({type:String,reflect:!0})],qt.prototype,"open",2);xs([N({type:String,reflect:!0,attribute:!0}),R()],qt.prototype,"interactive",2);xs([N({type:String,reflect:!0})],qt.prototype,"variant",2);qt=xs([ue("thermal-dropdown")],qt);var xh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,fi=(t,e,r,s)=>{for(var i=s>1?void 0:s?_h(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&xh(e,r,i),i};let Fr=class extends st{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Ie(),this.contentRef=Ie(),this.rulerContentRef=Ie()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const s=this.contentRef.value.clientWidth;this.lastContentWidth=s}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return A`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${je(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${je(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${je(this.contentRef)}>

                    ${this.collapsed===!1?A`
                        <slot></slot>    
                    `:X}
                
                </div>

            </div>

            ${this.collapsed?A`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:X}
        
        `}};Fr.styles=Ae`

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

    `;fi([R()],Fr.prototype,"collapsed",2);fi([R()],Fr.prototype,"lastContentWidth",2);fi([R()],Fr.prototype,"drawerRef",2);Fr=fi([ue("thermal-bar")],Fr);var kh=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,kr=(t,e,r,s)=>{for(var i=s>1?void 0:s?Ch(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&kh(e,r,i),i};let Gt=class extends st{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Ie(),this.contentRef=Ie()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,a=r.contentRect.width,l=n-175,h=a-0,p=this.contentRef.value.offsetHeight,g=4/3;let f=0,b=0;p<l?(console.log("priorita šířky"),f=h,b=f/g):(console.log("priorita výšky"),b=l,f=b*g),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${b}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var s;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(s=this.appRef.value)==null||s.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return A`

        <div class="container ${this.dark?"dark":"normal"}" ${je(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?A`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?A`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?A`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:A`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:X}

                -->
                
            </div> 
        `:""}

        ${this.pre.length>=0?A`
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
        
        `}};Gt.styles=Ae`

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
    
    `;kr([vs({slot:"bar",flatten:!0})],Gt.prototype,"barItems",2);kr([vs({slot:"bar",flatten:!0})],Gt.prototype,"barElements",2);kr([vs({slot:"pre",flatten:!0})],Gt.prototype,"pre",2);kr([N({type:String,reflect:!0})],Gt.prototype,"fullscreen",2);kr([N({type:String,reflect:!0,attribute:!0})],Gt.prototype,"showfullscreen",2);kr([N({type:String,reflect:!0,attribute:!0})],Gt.prototype,"dark",2);Gt=kr([ue("thermal-app")],Gt);var Sh=Object.defineProperty,$h=Object.getOwnPropertyDescriptor,Ph=(t,e,r,s)=>{for(var i=s>1?void 0:s?$h(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Sh(e,r,i),i};let wn=class extends st{render(){return A`
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
                        <p>version ${An}</p>
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
        `}};wn.styles=Ae`

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
    
    `;wn=Ph([ue("app-info-button")],wn);function _t(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function yr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Lo=6048e5,Ah=864e5;let Oh={};function gi(){return Oh}function hs(t,e){var l,h,p,g;const r=gi(),s=(e==null?void 0:e.weekStartsOn)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((g=(p=r.locale)==null?void 0:p.options)==null?void 0:g.weekStartsOn)??0,i=_t(t),n=i.getDay(),a=(n<s?7:0)+n-s;return i.setDate(i.getDate()-a),i.setHours(0,0,0,0),i}function ti(t){return hs(t,{weekStartsOn:1})}function Ro(t){const e=_t(t),r=e.getFullYear(),s=yr(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=ti(s),n=yr(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=ti(n);return e.getTime()>=i.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function Wa(t){const e=_t(t);return e.setHours(0,0,0,0),e}function Na(t){const e=_t(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Eh(t,e){const r=Wa(t),s=Wa(e),i=+r-Na(r),n=+s-Na(s);return Math.round((i-n)/Ah)}function Dh(t){const e=Ro(t),r=yr(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),ti(r)}function Th(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Mo(t){if(!Th(t)&&typeof t!="number")return!1;const e=_t(t);return!isNaN(Number(e))}function Lh(t){const e=_t(t),r=yr(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Rh={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Mh=(t,e,r)=>{let s;const i=Rh[t];return typeof i=="string"?s=i:e===1?s=i.one:s=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+s:s+" ago":s};function un(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const Uh={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Fh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ih={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},jh={date:un({formats:Uh,defaultWidth:"full"}),time:un({formats:Fh,defaultWidth:"full"}),dateTime:un({formats:Ih,defaultWidth:"full"})},Wh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Nh=(t,e,r,s)=>Wh[t];function es(t){return(e,r)=>{const s=r!=null&&r.context?String(r.context):"standalone";let i;if(s==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;i=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;i=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return i[n]}}const Hh={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Bh={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},zh={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Vh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Yh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Gh=(t,e)=>{const r=Number(t),s=r%100;if(s>20||s<10)switch(s%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Xh={ordinalNumber:Gh,era:es({values:Hh,defaultWidth:"wide"}),quarter:es({values:Bh,defaultWidth:"wide",argumentCallback:t=>t-1}),month:es({values:zh,defaultWidth:"wide"}),day:es({values:Vh,defaultWidth:"wide"}),dayPeriod:es({values:Yh,defaultWidth:"wide",formattingValues:qh,defaultFormattingWidth:"wide"})};function ts(t){return(e,r={})=>{const s=r.width,i=s&&t.matchPatterns[s]||t.matchPatterns[t.defaultMatchWidth],n=e.match(i);if(!n)return null;const a=n[0],l=s&&t.parsePatterns[s]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(l)?Kh(l,f=>f.test(a)):Zh(l,f=>f.test(a));let p;p=t.valueCallback?t.valueCallback(h):h,p=r.valueCallback?r.valueCallback(p):p;const g=e.slice(a.length);return{value:p,rest:g}}}function Zh(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Kh(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Qh(t){return(e,r={})=>{const s=e.match(t.matchPattern);if(!s)return null;const i=s[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(i.length);return{value:a,rest:l}}}const Jh=/^(\d+)(th|st|nd|rd)?/i,ed=/\d+/i,td={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rd={any:[/^b/i,/^(a|c)/i]},sd={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},id={any:[/1/i,/2/i,/3/i,/4/i]},nd={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ad={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},od={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ld={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},cd={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},hd={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},dd={ordinalNumber:Qh({matchPattern:Jh,parsePattern:ed,valueCallback:t=>parseInt(t,10)}),era:ts({matchPatterns:td,defaultMatchWidth:"wide",parsePatterns:rd,defaultParseWidth:"any"}),quarter:ts({matchPatterns:sd,defaultMatchWidth:"wide",parsePatterns:id,defaultParseWidth:"any",valueCallback:t=>t+1}),month:ts({matchPatterns:nd,defaultMatchWidth:"wide",parsePatterns:ad,defaultParseWidth:"any"}),day:ts({matchPatterns:od,defaultMatchWidth:"wide",parsePatterns:ld,defaultParseWidth:"any"}),dayPeriod:ts({matchPatterns:cd,defaultMatchWidth:"any",parsePatterns:hd,defaultParseWidth:"any"})},ud={code:"en-US",formatDistance:Mh,formatLong:jh,formatRelative:Nh,localize:Xh,match:dd,options:{weekStartsOn:0,firstWeekContainsDate:1}};function pd(t){const e=_t(t);return Eh(e,Lh(e))+1}function fd(t){const e=_t(t),r=+ti(e)-+Dh(e);return Math.round(r/Lo)+1}function Uo(t,e){var g,f,b,w;const r=_t(t),s=r.getFullYear(),i=gi(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((w=(b=i.locale)==null?void 0:b.options)==null?void 0:w.firstWeekContainsDate)??1,a=yr(t,0);a.setFullYear(s+1,0,n),a.setHours(0,0,0,0);const l=hs(a,e),h=yr(t,0);h.setFullYear(s,0,n),h.setHours(0,0,0,0);const p=hs(h,e);return r.getTime()>=l.getTime()?s+1:r.getTime()>=p.getTime()?s:s-1}function gd(t,e){var l,h,p,g;const r=gi(),s=(e==null?void 0:e.firstWeekContainsDate)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(p=r.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,i=Uo(t,e),n=yr(t,0);return n.setFullYear(i,0,s),n.setHours(0,0,0,0),hs(n,e)}function md(t,e){const r=_t(t),s=+hs(r,e)-+gd(r,e);return Math.round(s/Lo)+1}function we(t,e){const r=t<0?"-":"",s=Math.abs(t).toString().padStart(e,"0");return r+s}const rr={y(t,e){const r=t.getFullYear(),s=r>0?r:1-r;return we(e==="yy"?s%100:s,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):we(r+1,2)},d(t,e){return we(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return we(t.getHours()%12||12,e.length)},H(t,e){return we(t.getHours(),e.length)},m(t,e){return we(t.getMinutes(),e.length)},s(t,e){return we(t.getSeconds(),e.length)},S(t,e){const r=e.length,s=t.getMilliseconds(),i=Math.trunc(s*Math.pow(10,r-3));return we(i,e.length)}},Ar={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ha={G:function(t,e,r){const s=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(s,{width:"abbreviated"});case"GGGGG":return r.era(s,{width:"narrow"});case"GGGG":default:return r.era(s,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const s=t.getFullYear(),i=s>0?s:1-s;return r.ordinalNumber(i,{unit:"year"})}return rr.y(t,e)},Y:function(t,e,r,s){const i=Uo(t,s),n=i>0?i:1-i;if(e==="YY"){const a=n%100;return we(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):we(n,e.length)},R:function(t,e){const r=Ro(t);return we(r,e.length)},u:function(t,e){const r=t.getFullYear();return we(r,e.length)},Q:function(t,e,r){const s=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(s);case"QQ":return we(s,2);case"Qo":return r.ordinalNumber(s,{unit:"quarter"});case"QQQ":return r.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(s,{width:"wide",context:"formatting"})}},q:function(t,e,r){const s=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(s);case"qq":return we(s,2);case"qo":return r.ordinalNumber(s,{unit:"quarter"});case"qqq":return r.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(s,{width:"wide",context:"standalone"})}},M:function(t,e,r){const s=t.getMonth();switch(e){case"M":case"MM":return rr.M(t,e);case"Mo":return r.ordinalNumber(s+1,{unit:"month"});case"MMM":return r.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(s,{width:"wide",context:"formatting"})}},L:function(t,e,r){const s=t.getMonth();switch(e){case"L":return String(s+1);case"LL":return we(s+1,2);case"Lo":return r.ordinalNumber(s+1,{unit:"month"});case"LLL":return r.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(s,{width:"wide",context:"standalone"})}},w:function(t,e,r,s){const i=md(t,s);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):we(i,e.length)},I:function(t,e,r){const s=fd(t);return e==="Io"?r.ordinalNumber(s,{unit:"week"}):we(s,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):rr.d(t,e)},D:function(t,e,r){const s=pd(t);return e==="Do"?r.ordinalNumber(s,{unit:"dayOfYear"}):we(s,e.length)},E:function(t,e,r){const s=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(s,{width:"short",context:"formatting"});case"EEEE":default:return r.day(s,{width:"wide",context:"formatting"})}},e:function(t,e,r,s){const i=t.getDay(),n=(i-s.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return we(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,s){const i=t.getDay(),n=(i-s.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return we(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){const s=t.getDay(),i=s===0?7:s;switch(e){case"i":return String(i);case"ii":return we(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(s,{width:"short",context:"formatting"});case"iiii":default:return r.day(s,{width:"wide",context:"formatting"})}},a:function(t,e,r){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){const s=t.getHours();let i;switch(s===12?i=Ar.noon:s===0?i=Ar.midnight:i=s/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){const s=t.getHours();let i;switch(s>=17?i=Ar.evening:s>=12?i=Ar.afternoon:s>=4?i=Ar.morning:i=Ar.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let s=t.getHours()%12;return s===0&&(s=12),r.ordinalNumber(s,{unit:"hour"})}return rr.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):rr.H(t,e)},K:function(t,e,r){const s=t.getHours()%12;return e==="Ko"?r.ordinalNumber(s,{unit:"hour"}):we(s,e.length)},k:function(t,e,r){let s=t.getHours();return s===0&&(s=24),e==="ko"?r.ordinalNumber(s,{unit:"hour"}):we(s,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):rr.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):rr.s(t,e)},S:function(t,e){return rr.S(t,e)},X:function(t,e,r){const s=t.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return za(s);case"XXXX":case"XX":return gr(s);case"XXXXX":case"XXX":default:return gr(s,":")}},x:function(t,e,r){const s=t.getTimezoneOffset();switch(e){case"x":return za(s);case"xxxx":case"xx":return gr(s);case"xxxxx":case"xxx":default:return gr(s,":")}},O:function(t,e,r){const s=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ba(s,":");case"OOOO":default:return"GMT"+gr(s,":")}},z:function(t,e,r){const s=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ba(s,":");case"zzzz":default:return"GMT"+gr(s,":")}},t:function(t,e,r){const s=Math.trunc(t.getTime()/1e3);return we(s,e.length)},T:function(t,e,r){const s=t.getTime();return we(s,e.length)}};function Ba(t,e=""){const r=t>0?"-":"+",s=Math.abs(t),i=Math.trunc(s/60),n=s%60;return n===0?r+String(i):r+String(i)+e+we(n,2)}function za(t,e){return t%60===0?(t>0?"-":"+")+we(Math.abs(t)/60,2):gr(t,e)}function gr(t,e=""){const r=t>0?"-":"+",s=Math.abs(t),i=we(Math.trunc(s/60),2),n=we(s%60,2);return r+i+e+n}const Va=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Fo=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},vd=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],s=r[1],i=r[2];if(!i)return Va(t,e);let n;switch(s){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Va(s,e)).replace("{{time}}",Fo(i,e))},bd={p:Fo,P:vd},yd=/^D+$/,wd=/^Y+$/,xd=["D","DD","YY","YYYY"];function _d(t){return yd.test(t)}function kd(t){return wd.test(t)}function Cd(t,e,r){const s=Sd(t,e,r);if(console.warn(s),xd.includes(t))throw new RangeError(s)}function Sd(t,e,r){const s=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${s} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $d=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ad=/^'([^]*?)'?$/,Od=/''/g,Ed=/[a-zA-Z]/;function zt(t,e,r){var g,f,b,w;const s=gi(),i=s.locale??ud,n=s.firstWeekContainsDate??((f=(g=s.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??1,a=s.weekStartsOn??((w=(b=s.locale)==null?void 0:b.options)==null?void 0:w.weekStartsOn)??0,l=_t(t);if(!Mo(l))throw new RangeError("Invalid time value");let h=e.match(Pd).map(_=>{const P=_[0];if(P==="p"||P==="P"){const k=bd[P];return k(_,i.formatLong)}return _}).join("").match($d).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const P=_[0];if(P==="'")return{isToken:!1,value:Dd(_)};if(Ha[P])return{isToken:!0,value:_};if(P.match(Ed))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return{isToken:!1,value:_}});i.localize.preprocessor&&(h=i.localize.preprocessor(l,h));const p={firstWeekContainsDate:n,weekStartsOn:a,locale:i};return h.map(_=>{if(!_.isToken)return _.value;const P=_.value;(kd(P)||_d(P))&&Cd(P,e,String(t));const k=Ha[P[0]];return k(l,P,i.localize,p)}).join("")}function Dd(t){const e=t.match(Ad);return e?e[1].replace(Od,"'"):t}function pn(t,e){const r=_t(t);if(!Mo(r))throw new RangeError("Invalid time value");const s=(e==null?void 0:e.format)??"extended",i=(e==null?void 0:e.representation)??"complete";let n="";const a=s==="extended"?"-":"",l=s==="extended"?":":"";if(i!=="time"){const h=we(r.getDate(),2),p=we(r.getMonth()+1,2);n=`${we(r.getFullYear(),4)}${a}${p}${a}${h}`}if(i!=="date"){const h=we(r.getHours(),2),p=we(r.getMinutes(),2),g=we(r.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${l}${p}${l}${g}`}return n}var Td={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Ld=`\r
`,Rd="\uFEFF",mi=t=>Object.assign({},Td,t);class Md extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class Ud extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class Fd extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Id extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var qr=t=>t,gt=t=>t,ns=qr,vi=qr,Ir=qr,Ya=qr,qa=qr,jd=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},Wd=t=>Ya(typeof t=="object"?t.key:t),Nd=t=>qa(typeof t=="object"?t.displayLabel:t),Hd=(t,...e)=>e.reduce((r,s)=>s(r),t),Bd=t=>e=>t.useBom?vi(gt(e)+Rd):e,zd=t=>e=>t.showTitle?Un(vi(gt(e)+t.title))(Ir("")):e,Un=t=>e=>vi(gt(t)+gt(e)+Ld),Io=t=>(e,r)=>Vd(t)(Ir(gt(e)+gt(r))),Vd=t=>e=>qr(gt(e)+t.fieldSeparator),Yd=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new Ud("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let s=Ir("");for(let i=0;i<e.length;i++){const n=Nd(e[i]);s=Io(t)(s,jo(t,gt(n)))}return s=Ir(gt(s).slice(0,-1)),Un(r)(s)},qd=(t,e,r)=>s=>{let i=s;for(var n=0;n<r.length;n++){let a=Ir("");for(let l=0;l<e.length;l++){const h=Wd(e[l]),p=r[n][gt(h)];a=Io(t)(a,jo(t,p))}a=Ir(gt(a).slice(0,-1)),i=Un(i)(a)}return i},Gd=t=>+t===t&&(!isFinite(t)||!!(t%1)),Xd=(t,e)=>{if(Gd(e)){if(t.decimalSeparator==="locale")return ns(e.toLocaleString());if(t.decimalSeparator)return ns(e.toString().replace(".",t.decimalSeparator))}return ns(e.toString())},qs=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+jd(e,t.quoteCharacter)+t.quoteCharacter),ns(r)},Zd=(t,e)=>{const r=e?"true":"false";return ns(t.boolDisplay[r])},Kd=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?qs(t,t.replaceUndefinedWith+""):e===null?qs(t,"null"):qs(t,""),jo=(t,e)=>{if(typeof e=="number")return Xd(t,e);if(typeof e=="string")return qs(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Zd(t,e);if(e===null||typeof e>"u")return Kd(t,e);throw new Id(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Qd=t=>e=>{const r=mi(t),s=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let i=Hd(vi(""),Bd(r),zd(r),Yd(r,s),qd(r,s,e));if(gt(i).length<1)throw new Md("Output is empty. Is your data formatted correctly?");return i},Jd=t=>e=>{const r=mi(t),s=gt(e),i=r.useTextFile?"plain":"csv";return new Blob([s],{type:`text/${i};charset=utf8;`})},eu=t=>e=>{if(!window)throw new Fd("Downloading only supported in a browser environment.");const r=Jd(t)(e),s=mi(t),i=s.useTextFile?"txt":"csv",n=`${s.filename}.${i}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ru(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(r,s,i.get?i:{enumerable:!0,get:function(){return t[s]}})}),r}var xn={exports:{}};const su={},iu=Object.freeze(Object.defineProperty({__proto__:null,default:su},Symbol.toStringTag,{value:"Module"})),Or=ru(iu);/**
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
 */(function(t,e){(function(r,s){s(e)})(tu,function(r){var s={},i={exports:{}};(function(C){var E=function(Q){return typeof Q<"u"&&Q.versions!=null&&Q.versions.node!=null&&Q+""=="[object process]"};C.exports.isNode=E,C.exports.platform=typeof process<"u"&&E(process)?"node":"browser";var D=C.exports.platform==="node"&&Or;C.exports.isMainThread=C.exports.platform==="node"?(!D||D.isMainThread)&&!process.connected:typeof Window<"u",C.exports.cpus=C.exports.platform==="browser"?self.navigator.hardwareConcurrency:Or.cpus().length})(i);var n=i.exports,a={},l;function h(){if(l)return a;l=1;function C(Q,Ce){var ne=this;if(!(this instanceof C))throw new SyntaxError("Constructor must be called with the new operator");if(typeof Q!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Te=[],xe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var H=function(le,ve){Te.push(le),xe.push(ve)};this.then=function(S,le){return new C(function(ve,Ve){var Je=S?E(S,ve,Ve):ve,Dt=le?E(le,ve,Ve):Ve;H(Je,Dt)},ne)};var _e=function(le){return ne.resolved=!0,ne.rejected=!1,ne.pending=!1,Te.forEach(function(ve){ve(le)}),H=function(Ve,Je){Ve(le)},_e=x=function(){},ne},x=function(le){return ne.resolved=!1,ne.rejected=!0,ne.pending=!1,xe.forEach(function(ve){ve(le)}),H=function(Ve,Je){Je(le)},_e=x=function(){},ne};this.cancel=function(){return Ce?Ce.cancel():x(new D),ne},this.timeout=function(S){if(Ce)Ce.timeout(S);else{var le=setTimeout(function(){x(new T("Promise timed out after "+S+" ms"))},S);ne.always(function(){clearTimeout(le)})}return ne},Q(function(S){_e(S)},function(S){x(S)})}function E(Q,Ce,ne){return function(Te){try{var xe=Q(Te);xe&&typeof xe.then=="function"&&typeof xe.catch=="function"?xe.then(Ce,ne):Ce(xe)}catch(H){ne(H)}}}C.prototype.catch=function(Q){return this.then(null,Q)},C.prototype.always=function(Q){return this.then(Q,Q)},C.all=function(Q){return new C(function(Ce,ne){var Te=Q.length,xe=[];Te?Q.forEach(function(H,_e){H.then(function(x){xe[_e]=x,Te--,Te==0&&Ce(xe)},function(x){Te=0,ne(x)})}):Ce(xe)})},C.defer=function(){var Q={};return Q.promise=new C(function(Ce,ne){Q.resolve=Ce,Q.reject=ne}),Q};function D(Q){this.message=Q||"promise cancelled",this.stack=new Error().stack}D.prototype=new Error,D.prototype.constructor=Error,D.prototype.name="CancellationError",C.CancellationError=D;function T(Q){this.message=Q||"timeout exceeded",this.stack=new Error().stack}return T.prototype=new Error,T.prototype.constructor=Error,T.prototype.name="TimeoutError",C.TimeoutError=T,a.Promise=C,a}function p(C,E){(E==null||E>C.length)&&(E=C.length);for(var D=0,T=Array(E);D<E;D++)T[D]=C[D];return T}function g(C,E){var D=typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"];if(!D){if(Array.isArray(C)||(D=U(C))||E){D&&(C=D);var T=0,Q=function(){};return{s:Q,n:function(){return T>=C.length?{done:!0}:{done:!1,value:C[T++]}},e:function(xe){throw xe},f:Q}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ce,ne=!0,Te=!1;return{s:function(){D=D.call(C)},n:function(){var xe=D.next();return ne=xe.done,xe},e:function(xe){Te=!0,Ce=xe},f:function(){try{ne||D.return==null||D.return()}finally{if(Te)throw Ce}}}}function f(C,E,D){return(E=P(E))in C?Object.defineProperty(C,E,{value:D,enumerable:!0,configurable:!0,writable:!0}):C[E]=D,C}function b(C,E){var D=Object.keys(C);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(C);E&&(T=T.filter(function(Q){return Object.getOwnPropertyDescriptor(C,Q).enumerable})),D.push.apply(D,T)}return D}function w(C){for(var E=1;E<arguments.length;E++){var D=arguments[E]!=null?arguments[E]:{};E%2?b(Object(D),!0).forEach(function(T){f(C,T,D[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(D)):b(Object(D)).forEach(function(T){Object.defineProperty(C,T,Object.getOwnPropertyDescriptor(D,T))})}return C}function _(C,E){if(typeof C!="object"||!C)return C;var D=C[Symbol.toPrimitive];if(D!==void 0){var T=D.call(C,E||"default");if(typeof T!="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return(E==="string"?String:Number)(C)}function P(C){var E=_(C,"string");return typeof E=="symbol"?E:E+""}function k(C){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},k(C)}function U(C,E){if(C){if(typeof C=="string")return p(C,E);var D={}.toString.call(C).slice(8,-1);return D==="Object"&&C.constructor&&(D=C.constructor.name),D==="Map"||D==="Set"?Array.from(C):D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)?p(C,E):void 0}}var M={exports:{}},j={},B;function W(){return B||(B=1,j.validateOptions=function(E,D,T){if(E){var Q=E?Object.keys(E):[],Ce=Q.find(function(Te){return!D.includes(Te)});if(Ce)throw new Error('Object "'+T+'" contains an unknown option "'+Ce+'"');var ne=D.find(function(Te){return Object.prototype[Te]&&!Q.includes(Te)});if(ne)throw new Error('Object "'+T+'" contains an inherited option "'+ne+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return E}},j.workerOptsNames=["credentials","name","type"],j.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],j.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),j}var ae,O;function V(){return O||(O=1,ae=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ae}var Y;function Z(){if(Y)return M.exports;Y=1;var C=h(),E=C.Promise,D=n,T=W(),Q=T.validateOptions,Ce=T.forkOptsNames,ne=T.workerThreadOptsNames,Te=T.workerOptsNames,xe="__workerpool-terminate__";function H(){var K=x();if(!K)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return K}function _e(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function x(){try{return Or}catch(K){if(k(K)==="object"&&K!==null&&K.code==="MODULE_NOT_FOUND")return null;throw K}}function S(){if(D.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var K=new Blob([V()],{type:"text/javascript"});return window.URL.createObjectURL(K)}else return __dirname+"/worker.js"}function le(K,he){if(he.workerType==="web")return _e(),ve(K,he.workerOpts,Worker);if(he.workerType==="thread")return $=H(),Ve(K,$,he);if(he.workerType==="process"||!he.workerType)return Je(K,Dt(he),Or);if(D.platform==="browser")return _e(),ve(K,he.workerOpts,Worker);var $=x();return $?Ve(K,$,he):Je(K,Dt(he),Or)}function ve(K,he,$){Q(he,Te,"workerOpts");var ie=new $(K,he);return ie.isBrowserWorker=!0,ie.on=function(Se,ke){this.addEventListener(Se,function(Fe){ke(Fe.data)})},ie.send=function(Se,ke){this.postMessage(Se,ke)},ie}function Ve(K,he,$){var ie,Se;Q($==null?void 0:$.workerThreadOpts,ne,"workerThreadOpts");var ke=new he.Worker(K,w({stdout:(ie=$==null?void 0:$.emitStdStreams)!==null&&ie!==void 0?ie:!1,stderr:(Se=$==null?void 0:$.emitStdStreams)!==null&&Se!==void 0?Se:!1},$==null?void 0:$.workerThreadOpts));return ke.isWorkerThread=!0,ke.send=function(Fe,be){this.postMessage(Fe,be)},ke.kill=function(){return this.terminate(),!0},ke.disconnect=function(){this.terminate()},$!=null&&$.emitStdStreams&&(ke.stdout.on("data",function(Fe){return ke.emit("stdout",Fe)}),ke.stderr.on("data",function(Fe){return ke.emit("stderr",Fe)})),ke}function Je(K,he,$){Q(he.forkOpts,Ce,"forkOpts");var ie=$.fork(K,he.forkArgs,he.forkOpts),Se=ie.send;return ie.send=function(ke){return Se.call(ie,ke)},he.emitStdStreams&&(ie.stdout.on("data",function(ke){return ie.emit("stdout",ke)}),ie.stderr.on("data",function(ke){return ie.emit("stderr",ke)})),ie.isChildProcess=!0,ie}function Dt(K){K=K||{};var he=process.execArgv.join(" "),$=he.indexOf("--inspect")!==-1,ie=he.indexOf("--debug-brk")!==-1,Se=[];return $&&(Se.push("--inspect="+K.debugPort),ie&&Se.push("--debug-brk")),process.execArgv.forEach(function(ke){ke.indexOf("--max-old-space-size")>-1&&Se.push(ke)}),Object.assign({},K,{forkArgs:K.forkArgs,forkOpts:Object.assign({},K.forkOpts,{execArgv:(K.forkOpts&&K.forkOpts.execArgv||[]).concat(Se),stdio:K.emitStdStreams?"pipe":void 0})})}function pt(K){for(var he=new Error(""),$=Object.keys(K),ie=0;ie<$.length;ie++)he[$[ie]]=K[$[ie]];return he}function bt(K,he){if(Object.keys(K.processing).length===1){var $=Object.values(K.processing)[0];$.options&&typeof $.options.on=="function"&&$.options.on(he)}}function er(K,he){var $=this,ie=he||{};this.script=K||S(),this.worker=le(this.script,ie),this.debugPort=ie.debugPort,this.forkOpts=ie.forkOpts,this.forkArgs=ie.forkArgs,this.workerOpts=ie.workerOpts,this.workerThreadOpts=ie.workerThreadOpts,this.workerTerminateTimeout=ie.workerTerminateTimeout,K||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(be){bt($,{stdout:be.toString()})}),this.worker.on("stderr",function(be){bt($,{stderr:be.toString()})}),this.worker.on("message",function(be){if(!$.terminated)if(typeof be=="string"&&be==="ready")$.worker.ready=!0,ke();else{var at=be.id,Ye=$.processing[at];Ye!==void 0&&(be.isEvent?Ye.options&&typeof Ye.options.on=="function"&&Ye.options.on(be.payload):(delete $.processing[at],$.terminating===!0&&$.terminate(),be.error?Ye.resolver.reject(pt(be.error)):Ye.resolver.resolve(be.result)))}});function Se(be){$.terminated=!0;for(var at in $.processing)$.processing[at]!==void 0&&$.processing[at].resolver.reject(be);$.processing=Object.create(null)}function ke(){var be=g($.requestQueue.splice(0)),at;try{for(be.s();!(at=be.n()).done;){var Ye=at.value;$.worker.send(Ye.message,Ye.transfer)}}catch(Es){be.e(Es)}finally{be.f()}}var Fe=this.worker;this.worker.on("error",Se),this.worker.on("exit",function(be,at){var Ye=`Workerpool Worker terminated Unexpectedly
`;Ye+="    exitCode: `"+be+"`\n",Ye+="    signalCode: `"+at+"`\n",Ye+="    workerpool.script: `"+$.script+"`\n",Ye+="    spawnArgs: `"+Fe.spawnargs+"`\n",Ye+="    spawnfile: `"+Fe.spawnfile+"`\n",Ye+="    stdout: `"+Fe.stdout+"`\n",Ye+="    stderr: `"+Fe.stderr+"`\n",Se(new Error(Ye))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return er.prototype.methods=function(){return this.exec("methods")},er.prototype.exec=function(K,he,$,ie){$||($=E.defer());var Se=++this.lastId;this.processing[Se]={id:Se,resolver:$,options:ie};var ke={message:{id:Se,method:K,params:he},transfer:ie&&ie.transfer};this.terminated?$.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ke.message,ke.transfer):this.requestQueue.push(ke);var Fe=this;return $.promise.catch(function(be){if(be instanceof E.CancellationError||be instanceof E.TimeoutError)return delete Fe.processing[Se],Fe.terminateAndNotify(!0).then(function(){throw be},function(at){throw at});throw be})},er.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},er.prototype.terminate=function(K,he){var $=this;if(K){for(var ie in this.processing)this.processing[ie]!==void 0&&this.processing[ie].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof he=="function"&&(this.terminationHandler=he),this.busy())this.terminating=!0;else{var Se=function(be){if($.terminated=!0,$.cleaning=!1,$.worker!=null&&$.worker.removeAllListeners&&$.worker.removeAllListeners("message"),$.worker=null,$.terminating=!1,$.terminationHandler)$.terminationHandler(be,$);else if(be)throw be};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Se(new Error("worker already killed!"));return}var ke=setTimeout(function(){$.worker&&$.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ke),$.worker&&($.worker.killed=!0),Se()}),this.worker.ready?this.worker.send(xe):this.requestQueue.push({message:xe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Se()}},er.prototype.terminateAndNotify=function(K,he){var $=E.defer();return he&&$.promise.timeout(he),this.terminate(K,function(ie,Se){ie?$.reject(ie):$.resolve(Se)}),$.promise},M.exports=er,M.exports._tryRequireWorkerThreads=x,M.exports._setupProcessWorker=Je,M.exports._setupBrowserWorker=ve,M.exports._setupWorkerThreadWorker=Ve,M.exports.ensureWorkerThreads=H,M.exports}var oe,q;function re(){if(q)return oe;q=1;var C=65535;oe=E;function E(){this.ports=Object.create(null),this.length=0}return E.prototype.nextAvailableStartingAt=function(D){for(;this.ports[D]===!0;)D++;if(D>=C)throw new Error("WorkerPool debug port limit reached: "+D+">= "+C);return this.ports[D]=!0,this.length++,D},E.prototype.releasePort=function(D){delete this.ports[D],this.length--},oe}var se,ce;function De(){if(ce)return se;ce=1;var C=h(),E=C.Promise,D=Z(),T=n,Q=re(),Ce=new Q;function ne(x,S){typeof x=="string"?this.script=x||null:(this.script=null,S=x),this.workers=[],this.tasks=[],S=S||{},this.forkArgs=Object.freeze(S.forkArgs||[]),this.forkOpts=Object.freeze(S.forkOpts||{}),this.workerOpts=Object.freeze(S.workerOpts||{}),this.workerThreadOpts=Object.freeze(S.workerThreadOpts||{}),this.debugPortStart=S.debugPortStart||43210,this.nodeWorker=S.nodeWorker,this.workerType=S.workerType||S.nodeWorker||"auto",this.maxQueueSize=S.maxQueueSize||1/0,this.workerTerminateTimeout=S.workerTerminateTimeout||1e3,this.onCreateWorker=S.onCreateWorker||function(){return null},this.onTerminateWorker=S.onTerminateWorker||function(){return null},this.emitStdStreams=S.emitStdStreams||!1,S&&"maxWorkers"in S?(Te(S.maxWorkers),this.maxWorkers=S.maxWorkers):this.maxWorkers=Math.max((T.cpus||4)-1,1),S&&"minWorkers"in S&&(S.minWorkers==="max"?this.minWorkers=this.maxWorkers:(xe(S.minWorkers),this.minWorkers=S.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&D.ensureWorkerThreads()}ne.prototype.exec=function(x,S,le){if(S&&!Array.isArray(S))throw new TypeError('Array expected as argument "params"');if(typeof x=="string"){var ve=E.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Ve=this.tasks,Je={method:x,params:S,resolver:ve,timeout:null,options:le};Ve.push(Je);var Dt=ve.promise.timeout;return ve.promise.timeout=function(bt){return Ve.indexOf(Je)!==-1?(Je.timeout=bt,ve.promise):Dt.call(ve.promise,bt)},this._next(),ve.promise}else{if(typeof x=="function")return this.exec("run",[String(x),S],le);throw new TypeError('Function or string expected as argument "method"')}},ne.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var x=this;return this.exec("methods").then(function(S){var le={};return S.forEach(function(ve){le[ve]=function(){return x.exec(ve,Array.prototype.slice.call(arguments))}}),le})},ne.prototype._next=function(){if(this.tasks.length>0){var x=this._getWorker();if(x){var S=this,le=this.tasks.shift();if(le.resolver.promise.pending){var ve=x.exec(le.method,le.params,le.resolver,le.options).then(S._boundNext).catch(function(){if(x.terminated)return S._removeWorker(x)}).then(function(){S._next()});typeof le.timeout=="number"&&ve.timeout(le.timeout)}else S._next()}}},ne.prototype._getWorker=function(){for(var x=this.workers,S=0;S<x.length;S++){var le=x[S];if(le.busy()===!1)return le}return x.length<this.maxWorkers?(le=this._createWorkerHandler(),x.push(le),le):null},ne.prototype._removeWorker=function(x){var S=this;return Ce.releasePort(x.debugPort),this._removeWorkerFromList(x),this._ensureMinWorkers(),new E(function(le,ve){x.terminate(!1,function(Ve){S.onTerminateWorker({forkArgs:x.forkArgs,forkOpts:x.forkOpts,workerThreadOpts:x.workerThreadOpts,script:x.script}),Ve?ve(Ve):le(x)})})},ne.prototype._removeWorkerFromList=function(x){var S=this.workers.indexOf(x);S!==-1&&this.workers.splice(S,1)},ne.prototype.terminate=function(x,S){var le=this;this.tasks.forEach(function(pt){pt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ve=function(bt){Ce.releasePort(bt.debugPort),this._removeWorkerFromList(bt)},Ve=ve.bind(this),Je=[],Dt=this.workers.slice();return Dt.forEach(function(pt){var bt=pt.terminateAndNotify(x,S).then(Ve).always(function(){le.onTerminateWorker({forkArgs:pt.forkArgs,forkOpts:pt.forkOpts,workerThreadOpts:pt.workerThreadOpts,script:pt.script})});Je.push(bt)}),E.all(Je)},ne.prototype.stats=function(){var x=this.workers.length,S=this.workers.filter(function(le){return le.busy()}).length;return{totalWorkers:x,busyWorkers:S,idleWorkers:x-S,pendingTasks:this.tasks.length,activeTasks:S}},ne.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var x=this.workers.length;x<this.minWorkers;x++)this.workers.push(this._createWorkerHandler())},ne.prototype._createWorkerHandler=function(){var x=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new D(x.script||this.script,{forkArgs:x.forkArgs||this.forkArgs,forkOpts:x.forkOpts||this.forkOpts,workerOpts:x.workerOpts||this.workerOpts,workerThreadOpts:x.workerThreadOpts||this.workerThreadOpts,debugPort:Ce.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Te(x){if(!H(x)||!_e(x)||x<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function xe(x){if(!H(x)||!_e(x)||x<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function H(x){return typeof x=="number"}function _e(x){return Math.round(x)==x}return se=ne,se}var We={},Re,dt;function ut(){if(dt)return Re;dt=1;function C(E,D){this.message=E,this.transfer=D}return Re=C,Re}var Nt;function At(){return Nt||(Nt=1,function(C){var E=ut(),D="__workerpool-terminate__",T={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")T.on=function(H,_e){addEventListener(H,function(x){_e(x.data)})},T.send=function(H,_e){_e?postMessage(H,_e):postMessage(H)};else if(typeof process<"u"){var Q;try{Q=Or}catch(H){if(!(k(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND"))throw H}if(Q&&Q.parentPort!==null){var Ce=Q.parentPort;T.send=Ce.postMessage.bind(Ce),T.on=Ce.on.bind(Ce),T.exit=process.exit.bind(process)}else T.on=process.on.bind(process),T.send=function(H){process.send(H)},T.on("disconnect",function(){process.exit(1)}),T.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ne(H){return Object.getOwnPropertyNames(H).reduce(function(_e,x){return Object.defineProperty(_e,x,{value:H[x],enumerable:!0})},{})}function Te(H){return H&&typeof H.then=="function"&&typeof H.catch=="function"}T.methods={},T.methods.run=function(_e,x){var S=new Function("return ("+_e+").apply(null, arguments);");return S.apply(S,x)},T.methods.methods=function(){return Object.keys(T.methods)},T.terminationHandler=void 0,T.cleanupAndExit=function(H){var _e=function(){T.exit(H)};if(!T.terminationHandler)return _e();var x=T.terminationHandler(H);Te(x)?x.then(_e,_e):_e()};var xe=null;T.on("message",function(H){if(H===D)return T.cleanupAndExit(0);try{var _e=T.methods[H.method];if(_e){xe=H.id;var x=_e.apply(_e,H.params);Te(x)?x.then(function(S){S instanceof E?T.send({id:H.id,result:S.message,error:null},S.transfer):T.send({id:H.id,result:S,error:null}),xe=null}).catch(function(S){T.send({id:H.id,result:null,error:ne(S)}),xe=null}):(x instanceof E?T.send({id:H.id,result:x.message,error:null},x.transfer):T.send({id:H.id,result:x,error:null}),xe=null)}else throw new Error('Unknown method "'+H.method+'"')}catch(S){T.send({id:H.id,result:null,error:ne(S)})}}),T.register=function(H,_e){if(H)for(var x in H)H.hasOwnProperty(x)&&(T.methods[x]=H[x]);_e&&(T.terminationHandler=_e.onTerminate),T.send("ready")},T.emit=function(H){if(xe){if(H instanceof E){T.send({id:xe,isEvent:!0,payload:H.message},H.transfer);return}T.send({id:xe,isEvent:!0,payload:H})}},C.add=T.register,C.emit=T.emit}(We)),We}var Ot=n.platform,Et=n.isMainThread,kt=n.cpus;function Me(C,E){var D=De();return new D(C,E)}var Qe=s.pool=Me;function dr(C,E){var D=At();D.add(C,E)}var nt=s.worker=dr;function Ue(C){var E=At();E.emit(C)}var Os=s.workerEmit=Ue,Oi=h(),qe=Oi.Promise,Ei=s.Promise=qe,Di=s.Transfer=ut(),Ti=s.platform=Ot,Li=s.isMainThread=Et,Ri=s.cpus=kt;r.Promise=Ei,r.Transfer=Di,r.cpus=Ri,r.default=s,r.isMainThread=Li,r.platform=Ti,r.pool=Qe,r.worker=nt,r.workerEmit=Os,Object.defineProperty(r,"__esModule",{value:!0})})})(xn,xn.exports);var nu=xn.exports,it=class{constructor(t,e){c(this,"_value");c(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Wo=class extends it{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},au=class extends it{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},ou=class extends it{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const s={...e};return e.from<r.min&&(s.from=r.min),e.to>r.max&&(s.to=r.max),s}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,s=this.parent.histogram.value.filter(n=>n.height>=r),i={from:s[0].from,to:s[s.length-1].to};this.fixedRange?this.setFixedRange(i):this.imposeRange(i)}}},lu=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},cu=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],hu=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],du=lu(),vr={iron:{pixels:hu,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:cu,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:du,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},uu=class extends it{get availablePalettes(){return vr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},mn,pu=(mn=class{},c(mn,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),mn),ze,fu=(ze=class extends pu{static humanRangeDates(e,r){return e=ze.inputToDate(e),r=ze.inputToDate(r),e.getUTCDate()===r.getUTCDate()?ze.humanDate(e):[ze.humanDate(e),ze.humanDate(r)].join(" - ")}static human(e){return`${ze.humanDate(e)} ${ze.humanTime(e,!0)} `}},c(ze,"isoDate",e=>(e=ze.inputToDate(e),pn(e,{representation:"date"}))),c(ze,"isoTime",e=>(e=ze.inputToDate(e),pn(e,{representation:"time"}))),c(ze,"isoComplete",e=>(e=ze.inputToDate(e),pn(e))),c(ze,"humanTime",(e,r=!1)=>(e=ze.inputToDate(e),zt(e,r?"HH:mm:ss":"HH:mm"))),c(ze,"humanDate",(e,r=!1)=>(e=ze.inputToDate(e),zt(e,r?"d. M.":"d. M. yyyy"))),ze),bi=class{},gu=class extends bi{constructor(e,r,s,i,n,a,l,h,p,g,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=s,this.height=i,this.timestamp=a,this.duration=l,this.min=h,this.max=p,this.frameCount=g,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,r){const s=r*this.width+e;return this.pixels[s]}getColorAtPoint(e,r){var a,l;const s=this.getTemperatureAtPoint(e,r),i=(a=this.group.registry.range.value)==null?void 0:a.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(i!==void 0&&n!==void 0){const p=(s-i)/(n-i),g=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[g]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},yi=class{constructor(t){c(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Lt=class _n{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=_n.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=_n.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},mu=class extends yi{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Lt.createCanvasContainer(),this.canvas=Lt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(s,i,n,a,l,h)=>{const g=new OffscreenCanvas(n,a).getContext("2d"),f=i-s;for(let _=0;_<=n;_++)for(let P=0;P<=a;P++){const k=_+P*n;let U=l[k];U<s&&(U=s),U>i&&(U=i);const j=(U-s)/f,B=Math.round(255*j),W=h[B];g.fillStyle=W,g.fillRect(_,P,1,1)}const b=g.getImageData(0,0,n,a);return await createImageBitmap(b)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},vu=class extends yi{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Lt.createCursorLayerRoot(),this.center=Lt.createCursorLayerCenter(),this.axisX=Lt.createCursorLayerX(),this.axisY=Lt.createCursorLayerY(),this.label=Lt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const s=this.instance.root.offsetWidth/this.instance.width,i=Math.round(e*s),n=Math.round(r*s);this.center.style.left=this.px(i),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,s){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${s.toFixed(3)} °C`)}setLabel(e,r,s){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=s)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},bu=class extends yi{constructor(e){super(e);c(this,"container");this.container=Lt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},yu=class extends yi{constructor(e,r){super(e);c(this,"container");c(this,"image");this._url=r,this.container=Lt.createVisibleLayer(),this._url&&(this.image=Lt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},me=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},wu=class{constructor(t,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const s=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),i=s.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(i.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,l)=>{const h=i[l];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{s.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Fn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},xu=class extends it{constructor(e,r,s,i){super(e,Math.max(Math.min(r,s.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new me);c(this,"callbacksPlay",new me);c(this,"callbacksPause",new me);c(this,"callbacksStop",new me);c(this,"callbacksEnd",new me);c(this,"callbacksChangeFrame",new me);this.steps=s,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new wu(this,i)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Fn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),zt(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),s=Math.ceil(r*this.steps.length)+5,i=this._validateIndex(s-40),n=this._validateIndex(s),l=this.steps.slice(i,n).reverse().find(h=>h.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),s=Math.floor(r*this.steps.length)-5,i=this._validateIndex(s),n=this._validateIndex(s+40),l=this.steps.slice(i,n).find(h=>h.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const s=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),s}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},_u=class extends it{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},ku=class extends it{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new me)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",s=>{s.data.size>0&&(this.recordedChunks.push(s.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const s={mimeType:this.mimeType},i=new MediaRecorder(e,s);return{stream:e,recorder:i,options:s}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),s=document.createElement("a");s.style.display="none",s.href=r,s.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Cu=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},No=class{constructor(t,e,r){c(this,"_selected",!1);c(this,"onSelected",new me);c(this,"onDeselected",new me);c(this,"onValues",new me);c(this,"onMoveOrResize",new me);c(this,"layerRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new me);c(this,"initialColor");c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"_graphMinActive",!1);c(this,"_graphMaxActive",!1);c(this,"_graphAvgActive",!1);c(this,"onGraphActivation",new me);c(this,"ready",!1);this.key=t,this.file=e,this.initialColor=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}get graphMinActive(){return this._graphMinActive}get graphMaxActive(){return this._graphMaxActive}get graphAvgActive(){return this._graphAvgActive}emitGraphActivation(){this.onGraphActivation.call(this._graphMinActive,this._graphMaxActive,this._graphAvgActive)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},Ho=class{constructor(t,e,r,s,i){c(this,"_x");c(this,"onX",new me);c(this,"_y");c(this,"onY",new me);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new me);c(this,"onMouseLeave",new me);c(this,"onActivate",new me);c(this,"onDeactivate",new me);this.key=t,this.analysis=s,this._x=r,this._y=e,this._color=i,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(i),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,s=this.x-r,i=this.x+r,n=this.y-r,a=this.y+r;return e>=s&&e<=i&&t>=n&&t<=a}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},ht,Su=(ht=class extends Ho{constructor(r,s,i,n,a){super(r,s,i,n,a);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(r=1){return Math.round(ht.size*r).toString()+"px"}mayMoveToX(r){return r<=this.file.width&&r>=0}mayMoveToY(r){return r<=this.file.height&&r>=0}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top=ht.sizePx(-.5),r.style.left=ht.sizePx(-.5),r.style.width=ht.sizePx(),r.style.height=ht.sizePx(),r}buildAxisX(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="100%",r.style.height="1px",r.style.left="0px",r.style.top=ht.sizePx(.5),r}buildAxisY(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="1px",r.style.height="100%",r.style.left=ht.sizePx(.5),r.style.top="0px",r}buildCenter(){const r=document.createElement("div");r.style.position="absolute",r.style.top=`calc( ${ht.sizePx(.5)} - 3px )`,r.style.left=`calc( ${ht.sizePx(.5)} - 3px )`,r.style.width="5px",r.style.height="5px",r.style.borderStyle="solid",r.style.borderWidth="1px";const s=this.analysis.file.getColorAtPoint(this.x,this.y);return s&&(r.style.backgroundColor=s),r}onSetColor(r){this.axisX&&(this.axisX.style.backgroundColor=r),this.axisY&&(this.axisY.style.backgroundColor=r),this.center&&(this.center.style.borderColor=r)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(r=void 0){var s,i,n;if(r===void 0)(s=this.axisX)==null||s.style.removeProperty("box-shadow"),(i=this.axisY)==null||i.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${r}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(ht,"size",20),ht),Dr=class Bo extends No{constructor(r,s,i,n,a){super(r,i,s);c(this,"center");c(this,"_graph");this.top=n,this.left=a,this.width=1,this.height=1,this.center=new Su("center",n,a,this,s),this.points.set("center",this.center),this.center.projectInnerPositionToDom(),this.center.onX.set("update point",l=>{this.left=l}),this.center.onY.set("update point",l=>{this.top=l}),this.recalculateValues()}get graph(){return this._graph||(this._graph=new zo(this)),this._graph}static addAtPoint(r,s,i,n,a){return new Bo(r,s,i,n,a)}setColorCallback(r){this.center.setColor(r)}isWithin(r,s){return this.center.isWithin(s,r)}getValues(){const r=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:r,max:r,avg:r}}async getAnalysisData(){return await this.file.service.pointAnalysisData(this.center.x,this.center.y)}},zo=class{constructor(t){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new me);c(this,"onGraphData",new me);c(this,"onAnalysisSelection",new me);this.analysis=t,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(t){this._value=t,this.onGraphData.call(t,this.analysis)}setMinActivation(t){this._min!==t&&(this._min=t,this.emitGraphActivation())}setMaxActivation(t){this._max!==t&&(this._max=t,this.emitGraphActivation())}setAvgActivation(t){this._avg!==t&&(this._avg=t,this.emitGraphActivation())}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const r=await e.getAnalysisData();this.value=r});const t=await this.getGraphData();this.value=t}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof Dr)return this._avg?[this.analysis.initialColor]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(this.analysis.initialColor)}),t}getGraphLabels(){if(this.analysis instanceof Dr)return this._avg?[this.analysis.key]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(`${this.analysis.key} ${e}`)}),t}hasDataToPrint(){return this.analysis instanceof Dr?this._avg:this._min||this._max||this._avg}getDtaAtTime(t){if(this.analysis instanceof Dr)return this._avg?[this.value[t]]:[];const e=[],r=this.value;return this._min&&e.push(r[t].min),this._max&&e.push(r[t].max),this._avg&&e.push(r[t].avg),e}},$u=class extends Ho{constructor(t,e,r,s,i){super(t,e,r,s,i),this._color=i,this.setColor(i)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Pu=class extends $u{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,r=>{e.x!==r&&(e.x=r)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,r=>{e.y!==r&&(e.y=r)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Vo=class extends No{constructor(e,r,s,i,n,a,l){super(e,s,r);c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let h=n,p=i;a!==void 0&&l!==void 0&&(h=n+a,p=i+l),this.area=this.buildArea(i,n,a,l),this.tl=this.addPoint("tl",i,n),this.tr=this.addPoint("tr",i,h),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,h),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(g=>g.projectInnerPositionToDom())}get graph(){return this._graph||(this._graph=new zo(this)),this._graph}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,s,i){const n=Math.min(e,i),a=Math.max(e,i),l=Math.min(r,s),p=Math.max(r,s)-l,g=a-n;return{top:n,left:l,width:p,height:g}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,r=0,s=this.file.height,i=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<s&&(s=n.y),n.y>i&&(i=n.y)}),this.left=e,this.top=s,this.width=r-e,this.height=i-s,this.area.left=this.left,this.area.height=this.height,this.area.width=this.width,this.area.top=this.top}addPoint(e,r,s){const i=new Pu(e,r,s,this,this.color);return this.points.set(e,i),i}},Yo=class{constructor(t,e,r,s,i){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=t,this.build(),this.top=e,this.left=s,this.width=r,this.height=i}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},Ga=class extends Yo{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},Xa=class Gs extends Vo{static startAddingAtPoint(e,r,s,i,n){const a=new Gs(e,r,s,i,n);return a.br.activate(),a}static build(e,r,s,i,n,a,l){const{top:h,left:p,width:g,height:f}=Gs.calculateDimensionsFromCorners(i,n,a,l);return new Gs(e,r,s,h,p,g,f)}buildArea(e,r,s,i){return s!==void 0&&i!==void 0?new Ga(this,e,r,e+s,r+i):new Ga(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,s=this.top,i=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=s;p<i;p++){const g=this.file.width*p;for(let f=e;f<=r;f++)if(this.isWithin(f,p)){const b=this.file.pixels[g+f];b<n&&(n=b),b>a&&(a=b),h+=b,l++}}return{min:n,max:a,avg:h/l}}isWithin(e,r){const s=this.left+this.width/2,i=this.top+this.height/2,n=(e-s)/(this.width/2),a=(r-i)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.service.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},Za=class extends Yo{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},Ka=class Xs extends Vo{static startAddingAtPoint(e,r,s,i,n){const a=new Xs(e,r,s,i,n);return a.br.activate(),a}static build(e,r,s,i,n,a,l){const{top:h,left:p,width:g,height:f}=Xs.calculateDimensionsFromCorners(i,n,a,l);return new Xs(e,r,s,h,p,g,f)}buildArea(e,r,s,i){return s!==void 0&&i!==void 0?new Za(this,e,r,e+s,r+i):new Za(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,s=this.top,i=this.top+this.height;let n=1/0,a=-1/0,l=0,h=0;for(let p=s;p<i;p++){const g=this.file.width*p;for(let f=e;f<=r;f++){const b=this.file.pixels[g+f];b<n&&(n=b),b>a&&(a=b),h+=b,l++}}return{min:n,max:a,avg:h/l}}async getAnalysisData(){return await this.file.service.rectAnalysisData(this.left,this.top,this.width,this.height)}},Au=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new me);c(this,"onRemove",new me);c(this,"onSelectionChange",new me);c(this,"colors",["orange","lightblue","green","brown","yellow","blue","pink"]);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var r;this.has(e)&&((r=this.get(e))==null||r.remove(),this.delete(e),this.layers=this.layers.filter(s=>s.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,r){const s=Ka.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(s),s}placeRectAt(e,r,s,i,n){const a=Ka.build(e,this.getNextColor(),this.drive.parent,r,s,i,n);return this.addAnalysis(a),a}createEllipsisFrom(e,r){const s=Xa.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(s),s}placeEllipsisAt(e,r,s,i,n){const a=Xa.build(e,this.getNextColor(),this.drive.parent,r,s,i,n);return this.addAnalysis(a),a}createPointAt(e,r){const s=Dr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(s),s}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.length;return e<this.colors.length?this.colors[e]:this.colors[e%this.colors.length]}getNextName(e){return`${e} ${this.all.length}`}},Ou=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,s)=>{const i=e?s.arrayOfActivePoints:s.arrayOfPoints;return[...r,...i]},[])}},Eu=class extends it{constructor(){super(...arguments);c(this,"layers",new Au(this));c(this,"points",new Ou(this));c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const r=this.listenerLayerContainer.clientWidth,s=this.parent.width,n=e.layerX/r,a=Math.round(s*n),l=this.listenerLayerContainer.clientHeight,h=this.parent.height,g=e.layerY/l;return{top:Math.round(h*g),left:a}}activateListeners(){this.bindedPointerMoveListener=e=>{const r=this.getRelativePosition(e);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,r.top,r.left);const i=s.isWithin(r.top,r.left);i?this.currentTool.onPointEnter(s):i||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=e=>{const r=this.getRelativePosition(e);this.currentTool.onCanvasClick(r.top,r.left,this.parent),this.points.all.forEach(s=>{s.isWithin(r.top,r.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},Du=class{constructor(t){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new me);c(this,"onAddGraph",new me);c(this,"onRemoveGraph",new me);this.drive=t,this.layers.onAdd.set(this.listenerKey,async e=>{const r=e.graph;this.addGraph(r),r.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(t){this._graphs.set(t.analysis.key,t),this.onAddGraph.call(t)}removeGraph(t){this._graphs.delete(t),this.onRemoveGraph.call(t)}get output(){return this._output}set output(t){this._output=t,this.onOutput.call(t)}refreshOutput(){const t={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{t.values[0].push(...e.getGraphLabels()),t.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((r,s)=>{let i=t.values[s+1];i===void 0&&(i=[zt(parseInt(r),"m:ss:SSS")],t.values[s+1]=i),i.push(...e.getDtaAtTime(parseInt(r)))})}),this.output=t,t}hasGraph(){return Object.values(this.graphs).find(t=>t.hasDataToPrint()).length>0}generateExportData(){const t={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const r of this.graphs.values()){const s=r.getGraphLabels();for(const i of s)e.push({key:i,displayLabel:`${i} (${r.analysis.initialColor}, ${r.analysis.width} x ${r.analysis.height} px)`});r.value&&Object.keys(r.value).forEach((i,n)=>{if(!Object.keys(t).includes(i)){const l=parseInt(i),h=l+r.analysis.file.timestamp;t[i]={[e[0].key]:zt(l,"m:ss:SSS")+" ",[e[1].key]:zt(h,"d. M.y m:ss:SSS")+" ",[e[2].key]:l,[e[3].key]:h}}const a=r.getDtaAtTime(parseInt(i));s.forEach((l,h)=>{t[i][l]=a[h]})})}return{header:e,data:Object.values(t)}}},Tu=class extends it{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new me);c(this,"listeners",new Du(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async r=>{this.value=r,r.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:r}=this.listeners.generateExportData(),s=mi({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:r}),i=Qd(s)(e);eu(s)(i)}},qo=class Go extends gu{constructor(r,s,i,n,a,l,h,p,g,f,b,w,_,P,k,U,M){super(r,s.thermalUrl,i,n,g,a,h,b,w,l,s.visibleUrl);c(this,"_export");this.group=r,this.service=s,this.width=i,this.height=n,this.timestamp=a,this.frameCount=l,this.duration=h,this.frameInterval=p,this.fps=f,this.min=b,this.max=w,this.bytesize=_,this.averageEmissivity=P,this.averageReflectedKelvins=k,this.firstFrame=U,this.timelineData=M,this.pixels=U.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new Cu(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new mu(this),this.visibleLayer=new yu(this,this.visibleUrl),this.cursorLayer=new vu(this),this.listenerLayer=new bu(this),this.cursorValue=new _u(this,void 0),this.timeline=new xu(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new ku(this,!1),this.analysis=new Eu(this,[]),this.analysisData=new Tu(this),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}this.analysis.value.forEach(s=>s.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(r,s,i,n){return new Go(r,s,i.width,i.height,i.timestamp,i.frameCount,i.duration,i.frameInterval,n.pixels,i.fps,i.min,i.max,i.bytesize,i.averageEmissivity,i.averageReflectedKelvins,n,i.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=r=>{this.cursorLayer.show=!0,this.isHover=!0;const s=this.width,i=this.root.clientWidth,n=s/i,a=Math.round(r.offsetX*n),l=Math.round(r.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:a,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(r){if(r!==void 0){const s=this.group.tool.value.getLabelValue(r.x,r.y,this);this.cursorLayer.setLabel(r.x,r.y,s),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(r)}},Lu=class extends it{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},Ru=class extends Wo{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},wi=class{constructor(t){c(this,"active",!1);this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Xo=class extends wi{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,s)=>s===void 0?"":s.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},In=class extends wi{},Mu=class extends In{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,s)=>{const i=s.group.tool.tools.inspect.getLabelValue(e,r,s);return`X:${e}<br />Y:${r}<br />${i}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,s){s.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,s){e.isInSelectedLayer()&&e.active&&(e.x=s,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Uu=class extends In{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,r,s)=>{const i=s.group.tool.tools.inspect.getLabelValue(e,r,s);return`X:${e}<br />Y:${r}<br />${i}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,s){s.analysis.layers.createPointAt(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis)}onPointMove(){}onPointLeave(){}onPointEnter(){}},Fu=class extends In{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,r,s)=>{const i=s.group.tool.tools.inspect.getLabelValue(e,r,s);return`X:${e}<br />Y:${r}<br />${i}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,s){s.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,r,s){e.isInSelectedLayer()&&e.active&&(e.x=s,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Iu=class extends wi{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,r,s){e.isInSelectedLayer()&&e.active&&(e.x=s,e.y=r,e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,r,s){const i=s.getTemperatureAtPoint(e,r),n=s.analysis.layers.all.filter(l=>l.isWithin(e,r)).map(l=>l.selected?`<span style="color:${l.initialColor}">${l.key}</span>`:`<s style="color:${l.initialColor}">${l.key}</s>`);return`${n.length>0?n.join("<br />")+"<br />":""}${i&&i.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${r}`}},ju=[Xo,Uu,Fu,Mu,Iu],Wu=t=>{const e=ju.map(r=>{const s=new r(t);return[s.key,s]});return Object.fromEntries(e)},Nu=class extends it{constructor(e,r){super(e,r);c(this,"_tools",Wu(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof wi?this.value=e:this.value=this.tools[e]}},Hu=class extends bi{constructor(e,r,s,i){super();c(this,"hash",Math.random());c(this,"minmax",new Ru(this,void 0));c(this,"tool",new Nu(this,new Xo(this)));c(this,"files",new Lu(this,[]));c(this,"cursorPosition",new au(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=s,this.description=i}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Zo=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},ri=class Ko extends Zo{constructor(e,r,s){super(e),this.code=r,this.message=s}isSuccess(){return!1}static fromError(e){return new Ko(e.url,e.code,e.message)}},Qo=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},jr=class extends Zo{constructor(e,r,s,i,n){super(i,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=r,this.parser=s,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async pointAnalysisData(e,r){return await this.parser.pointAnalysisData(this.buffer,e,r)}async rectAnalysisData(e,r,s,i){return await this.parser.rectAnalysisData(this.buffer,e,r,s,i)}async ellipsisAnalysisData(e,r,s,i){return await this.parser.ellipsisAnalysisData(this.buffer,e,r,s,i)}async createInstance(e){const r=await this.baseInfo(),s=await this.frameData(0),i=qo.fromService(e,this,r,s);return e.files.addFile(i),i}},Bu=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),s=e.getUint16(19,!0),i=t.byteLength,n=(Y,Z)=>{const oe=Y.getBigInt64(Z,!0),q=62135596800000n,re=10000n,se=24n*60n*60n*1000n*re,ce=0x4000000000000000n,De=0x8000000000000000n;let Re=oe&0x3fffffffffffffffn;oe&De&&(Re>ce-se&&(Re-=ce),Re<0&&(Re+=se));const ut=Re/re-q;return Number(ut)},a=n(e,5),l=e.getUint8(15);let h=2;l===1&&(h=4);const p=57,g=r*s*h,f=p+g,b=t.slice(25),w=b.byteLength/f,_=Y=>{const Z=Y*f,oe=Z+f,q=b.slice(Z,oe),re=new DataView(q),se=re.getFloat32(8,!0),ce=re.getFloat32(12,!0),De=n(re,0),We=re.getFloat32(24,!0),Re=re.getFloat32(28,!0);return{timestamp:De,min:se,max:ce,emissivity:We,reflectedKelvins:Re}},P=[];for(let Y=0;Y<w;Y++){const Z=_(Y);P.push(Z)}const k={emissivity:0,reflectedKelvins:0};let U=1/0,M=-1/0;const j=[];P.forEach(Y=>{k.emissivity=k.emissivity+Y.emissivity,k.reflectedKelvins=k.reflectedKelvins+Y.reflectedKelvins,Y.min<U&&(U=Y.min),Y.max>M&&(M=Y.max),j.push(Y.timestamp)});const B=j[0],W=[];j.forEach((Y,Z)=>{const oe=j[Z+1];let q=0;oe===void 0&&(q=0),q=oe-Y;const re=Y-B;W.push({absolute:Y,relative:re,offset:isNaN(q)?0:q,index:Z})});const ae=P[P.length-1].timestamp-P[0].timestamp,O=ae/w,V=1e3/O;return{width:r,height:s,timestamp:a,bytesize:i,frameCount:w,duration:ae,frameInterval:O,fps:V,timeline:W,min:U,max:M,averageEmissivity:k.emissivity/P.length,averageReflectedKelvins:k.reflectedKelvins/P.length}},zu=(t,e)=>{const r=new DataView(t.slice(0,25)),s=r.getUint8(15),i=r.getUint16(17,!0),n=r.getUint16(19,!0),a=s===1?4:2,l=57,h=i*n*a,p=l+h,g=t.slice(25),f=e*p,b=f+p;return{array:g.slice(f,b),dataType:s}},Vu=async(t,e)=>{const r=new DataView(t),s=r.getBigInt64(0,!0),i=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,h=0x8000000000000000n;let g=s&0x3fffffffffffffffn;s&h&&(g>l-a&&(g-=l),g<0&&(g+=a));const b=g/n-i,w=Number(b),_=r.getFloat32(8,!0),P=r.getFloat32(12,!0),k=r.getFloat32(24,!0),U=r.getFloat32(28,!0),M=t.slice(57);let j=[];if(e===0){const B=new Uint16Array(M),W=Math.abs(_-P),ae=65535;B.forEach(O=>{const V=O/ae;j.push(_+W*V)})}else e===1&&(j=Array.from(new Float32Array(M)));return{timestamp:w,min:_,max:P,emissivity:k,reflectedKelvins:U,pixels:j}},Yu=async(t,e,r)=>{const s=new DataView(t),i=s.getUint16(17,!0),n=s.getUint16(19,!0),a=(U,M)=>{const j=U.getBigInt64(M,!0),B=62135596800000n,W=10000n,ae=24n*60n*60n*1000n*W,O=0x4000000000000000n,V=0x8000000000000000n;let Z=j&0x3fffffffffffffffn;j&V&&(Z>O-ae&&(Z-=O),Z<0&&(Z+=ae));const q=Z/W-B;return Number(q)},l=s.getUint8(15);let h=2;l===1&&(h=4);const p=57,g=i*n*h,f=p+g,b=t.slice(25),w=b.byteLength/f,_={},P=U=>{const M=U*f,j=M+f,B=b.slice(M,j),W=new DataView(B),ae=a(W,0),O=W.getFloat32(8,!0),Y=W.getFloat32(12,!0)-O,oe=57+r*h*i+e*h;let q=0;if(l===1)q=W.getFloat32(oe,!0);else if(l===0){console.log("jsem uvnitř varia");const ce=W.getInt16(oe,!0)/65535;q=O+Y*ce}return{timestamp:ae,temperature:q}};let k=0;for(let U=0;U<w;U++){const M=P(U);k===0&&(k=M.timestamp),_[M.timestamp-k]=M.temperature}return _},qu=async(t,e,r,s,i)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(j,B)=>{const W=j.getBigInt64(B,!0),ae=62135596800000n,O=10000n,V=24n*60n*60n*1000n*O,Y=0x4000000000000000n,Z=0x8000000000000000n;let q=W&0x3fffffffffffffffn;W&Z&&(q>Y-V&&(q-=Y),q<0&&(q+=V));const se=q/O-ae;return Number(se)},p=n.getUint8(15);let g=2;p===1&&(g=4);const f=57,b=a*l*g,w=f+b,_=t.slice(25),P=_.byteLength/w,k={},U=j=>{const B=j*w,W=B+w,ae=_.slice(B,W),O=new DataView(ae),V=h(O,0),Y=O.getFloat32(8,!0),oe=O.getFloat32(12,!0)-Y,q=57,re=e,se=e+s,ce=r,De=r+i;let We=1/0,Re=-1/0,dt=0,ut=0;for(let At=ce;At<=De;At++){const Ot=At*a;for(let Et=re;Et<=se;Et++){const kt=q+(Ot+Et)*g;let Me=NaN;if(p===1)Me=O.getFloat32(kt,!0);else{const nt=O.getInt16(kt,!0)/65535;Me=Y+oe*nt}Me<We&&(We=Me),Me>Re&&(Re=Me),ut+=Me,dt++}}const Nt={min:We,max:Re,avg:ut/dt,count:dt};return{timestamp:V,result:Nt}};let M=0;for(let j=0;j<P;j++){const B=U(j);M===0&&(M=B.timestamp),k[B.timestamp-M]=B.result}return k},Gu=async t=>{let e=[];const r=async k=>{const U=new DataView(k.slice(0,25)),M=U.getUint8(15),j=U.getUint16(17,!0),B=U.getUint16(19,!0),W=M===1?4:2,ae=57,O=j*B*W,V=ae+O,Y=k.slice(25),Z=Y.byteLength/V;let oe=[];for(let q=0;q<Z;q++){const se=q*V+57,ce=se+O,De=Y.slice(se,ce);M===0||M===1&&(oe=oe.concat(Array.from(new Float32Array(De))))}return oe};(await Promise.all(t.map(k=>r(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,U)=>k-U);const i=e[0],n=e[e.length-1],a=Math.abs(i-n),l=200,h=a/l,p=[];let g=[...e];for(let k=0;k<l;k++){const U=i+h*k,M=U+h,j=g.findIndex(V=>V>M),W=g.slice(0,j-1).length,ae=W/e.length*100,O={from:U,to:M,count:W,percentage:ae};p.push(O),g=g.slice(j)}const f=[...p].sort((k,U)=>k.percentage-U.percentage),b=f[0].percentage,w=f[f.length-1].percentage,_=Math.abs(b-w);return p.map(k=>({...k,height:k.percentage/_*100}))},Xu=(t,e)=>{const r=e.endsWith("lrc"),i=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&i},Zu=async(t,e,r,s,i)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),h=(B,W)=>{const ae=B.getBigInt64(W,!0),O=62135596800000n,V=10000n,Y=24n*60n*60n*1000n*V,Z=0x4000000000000000n,oe=0x8000000000000000n;let re=ae&0x3fffffffffffffffn;ae&oe&&(re>Z-Y&&(re-=Z),re<0&&(re+=Y));const ce=re/V-O;return Number(ce)},p=n.getUint8(15);let g=2;p===1&&(g=4);const f=57,b=a*l*g,w=f+b,_=t.slice(25),P=_.byteLength/w,k={},U=(B,W)=>{const ae=e+s/2,O=r+i/2,V=(B-ae)/(s/2),Y=(W-O)/(i/2);return V*V+Y*Y<=1},M=B=>{const W=B*w,ae=W+w,O=_.slice(W,ae),V=new DataView(O),Y=h(V,0),Z=V.getFloat32(8,!0),q=V.getFloat32(12,!0)-Z,re=57,se=e,ce=e+s,De=r,We=r+i;let Re=1/0,dt=-1/0,ut=0,Nt=0;for(let Ot=De;Ot<=We;Ot++){const Et=Ot*a;for(let kt=se;kt<=ce;kt++)if(U(kt,Ot)){const Me=re+(Et+kt)*g;let Qe=NaN;if(p===1)Qe=V.getFloat32(Me,!0);else{const Ue=V.getInt16(Me,!0)/65535;Qe=Z+q*Ue}Qe<Re&&(Re=Qe),Qe>dt&&(dt=Qe),Nt+=Qe,ut++}}const At={min:Re,max:dt,avg:Nt/ut,count:ut};return{timestamp:Y,result:At}};let j=0;for(let B=0;B<P;B++){const W=M(B);j===0&&(j=W.timestamp),k[W.timestamp-j]=W.result}return k},Ku=[{extension:"lrc",minme:"application/octet-stream"}],Qu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Ku,is:Xu,baseInfo:Bu,getFrameSubset:zu,frameData:Vu,registryHistogram:Gu,pointAnalysisData:Yu,rectAnalysisData:qu,ellipsisAnalysisData:Zu},Jo=Object.freeze(Qu),Ju={LrcParser:Jo},el=Object.values(Ju),tl=(t,e)=>{const r=el.find(s=>s.is(t,e));if(r===void 0)throw new Qo(2,e,`No parser found for '${e}'.`);return r},rl=el.map(t=>t.extensions),ep=rl.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),tp=class sl{constructor(e,r,s){c(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=s}static fromUrl(e,r,s){return new sl(e,r,s)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new ri(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const s=await r.arrayBuffer();try{const i=tl(s,this.thermalUrl);return this.pocessTheService(new jr(this.service,s,i,this.thermalUrl,this.visibleUrl))}catch(i){if(i instanceof Qo)return this.pocessTheService(ri.fromError(i));throw i}}pocessTheService(e){return e}},rp=class il{constructor(e,r){c(this,"_hover",!1);c(this,"onMouseEnter",new me);c(this,"onMouseLeave",new me);c(this,"onDrop",new me);c(this,"onProcessingEnd",new me);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const s=new il(e,r);return s.hydrate(),s}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],s=e.dataTransfer;if(s&&s.files){for(const i of Array.from(s.files))if(i){const n=await this.service.loadUploadedFile(i);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const s=r.files[0],i=await this.service.loadUploadedFile(s);this.onDrop.call([i]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=ep,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},sp=class{constructor(t){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const s=new jn(t).addOrGetRegistry(e);return{service:s.service,registry:s}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=tl(e,t.name);return new jr(this,e,r,t.name)}catch(e){return new ri(t.name,3,e.message)}}handleDropzone(t){return rp.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=tp.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const s=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,s),s}}},ip=class extends it{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},np=class extends it{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,s){if(this._map.has(e))return this._map.get(e);const i=new Hu(this.parent,e,r,s);return this._map.set(e,i),this.value.push(i),this.value=[...this.value],i}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},ap=class extends it{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(s=>s.getPixelsForHistogram()));this.parent.pool.exec((r,s,i,n,a)=>{let h=r.reduce((w,_)=>{const P=_.reduce((k,U)=>[...k,...U],[]);return[...w,...P]},[]).sort((w,_)=>w-_);const p=n/a;let g=s+p;const f=new Map;let b=0;for(;g!==!1;){const w=h.findIndex(k=>k>g),_=h.slice(0,w).length;f.set(g-p/2,_),b+=_,h=h.slice(w);const P=g+p;g=P<i?P:!1}return{result:f,resultCount:b}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(i=>i.files.value).reduce((i,n)=>(i=i.concat(n),i),[]).map(i=>i.service.buffer),s=await this.parent.pool.exec(Jo.registryHistogram,[r]);this.value=s}},op=class extends it{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},lp=class extends Wo{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,s)=>s.minmax.value===void 0?r:{min:s.minmax.value.min<r.min?s.minmax.value.min:r.min,max:s.minmax.value.max>r.max?s.minmax.value.max:r.max},{min:1/0,max:-1/0})}},cp=class extends bi{constructor(e,r,s){super();c(this,"hash",Math.random());c(this,"groups",new np(this,[]));c(this,"opacity",new ip(this,1));c(this,"minmax",new lp(this,void 0));c(this,"loading",new op(this,!1));c(this,"range",new ou(this,void 0));c(this,"histogram",new ap(this,[]));c(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,s&&s.histogramResolution!==void 0&&s.histogramResolution>0&&this.histogram.setResolution(s.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([s,i])=>{const n=this.groups.addOrGetGroup(s),a=await Promise.all(i.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(r.map(async({group:s,groupFiles:i})=>await Promise.all(i.map(async a=>a instanceof jr?await a.createInstance(s):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const s=this.groups.addOrGetGroup(r),i=await this.service.loadFile(e.thermalUrl,e.visibleUrl);i instanceof jr&&await i.createInstance(s),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},jn=class extends bi{constructor(e,r){super();c(this,"id");c(this,"service",new sp(this));c(this,"registries",{});c(this,"palette",new uu(this,"jet"));c(this,"pool");this.pool=e||nu.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new cp(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nl=class extends Event{constructor(e,r,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qa=class{constructor(e,r,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new nl(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hp{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const s=r||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:s}]of this.subscriptions)r(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,r,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dp=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Ja extends hp{constructor(e,r,s){var i,n;super(r.context!==void 0?r.initialValue:s),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const h=new Set;for(const[p,{consumerHost:g}]of this.subscriptions)h.has(p)||(h.add(p),g.dispatchEvent(new nl(this.context,p,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(i=this.host).addController)==null||n.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new dp(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee({context:t}){return(e,r)=>{const s=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){s.set(this,new Ja(this,{context:t}))}),{get(){return e.get.call(this)},set(i){var n;return(n=s.get(this))==null||n.setValue(i),e.set.call(this,i)},init(i){var n;return(n=s.get(this))==null||n.setValue(i),i}};{e.constructor.addInitializer(a=>{s.set(a,new Ja(a,{context:t}))});const i=Object.getOwnPropertyDescriptor(e,r);let n;if(i===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){s.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=i.set;n={...i,set(l){s.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe({context:t,subscribe:e}){return(r,s)=>{typeof s=="object"?s.addInitializer(function(){new Qa(this,{context:t,callback:i=>{r.set.call(this,i)},subscribe:e})}):r.constructor.addInitializer(i=>{new Qa(i,{context:t,callback:n=>{i[s]=n},subscribe:e})})}}let Vs;const up=new Uint8Array(16);function pp(){if(!Vs&&(Vs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Vs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Vs(up)}const et=[];for(let t=0;t<256;++t)et.push((t+256).toString(16).slice(1));function fp(t,e=0){return et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]}const gp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),eo={randomUUID:gp};function mp(t,e,r){if(eo.randomUUID&&!e&&!t)return eo.randomUUID();t=t||{};const s=t.random||(t.rng||pp)();return s[6]=s[6]&15|64,s[8]=s[8]&63|128,fp(s)}class _s extends st{constructor(){super(...arguments),this.UUID=mp()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const al="manager-instance",xi="manager-palette-context",vp=new jn,bp="__internal_default_registry",yp="__internal_default_group",wp=t=>t.addOrGetRegistry(bp),xp=t=>t.groups.addOrGetGroup(yp);var _p=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,_i=(t,e,r,s)=>{for(var i=s>1?void 0:s?kp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&_p(e,r,i),i};let wr=class extends _s{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:vr.jet}}connectedCallback(){super.connectedCallback();let t=vp;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=wr.sanitizeStringPalette(this.palette.key);e.palette=r,t=new jn(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const s=wr.sanitizeStringPalette(r);this.manager.palette.setPalette(s)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(vr).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:vr[t]}}render(){return A`<slot></slot>`}};_i([Ee({context:al})],wr.prototype,"manager",2);_i([N({type:String,reflect:!0,attribute:!0})],wr.prototype,"slug",2);_i([Ee({context:xi}),N({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:vr[t]}),toAttribute:t=>t.key.toString()}})],wr.prototype,"palette",2);wr=_i([ue("manager-provider")],wr);var Cp=Object.defineProperty,Sp=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&Cp(e,r,i),i};class Wn extends _s{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}Sp([fe({context:al,subscribe:!0}),R()],Wn.prototype,"manager");const ol="registry-instance",ll="registry-opacity",Nn="registry-range-from",Hn="registry-range-to",$p="registry-loading",cl="registry-min",hl="registry-max";var Pp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,Qt=(t,e,r,s)=>{for(var i=s>1?void 0:s?Ap(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Pp(e,r,i),i};let Ut=class extends Wn{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=wp(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var s;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r&&this.registry){const i=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};i.value!==void 0?(this.from!==((s=i.value)==null?void 0:s.from)||this.to!==i.value.to)&&i.setFixedRange(n):i.setFixedRange(n)}}if(t==="opacity"){const i=Math.min(1,Math.max(0,this.opacity));i!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(i)}}render(){return A`<slot></slot>`}};Qt([N({type:String,reflect:!0,attribute:!0})],Ut.prototype,"slug",2);Qt([Ee({context:ol})],Ut.prototype,"registry",2);Qt([Ee({context:ll}),N({type:Number,reflect:!0,attribute:!0})],Ut.prototype,"opacity",2);Qt([Ee({context:cl}),R()],Ut.prototype,"min",2);Qt([Ee({context:hl}),R()],Ut.prototype,"max",2);Qt([Ee({context:Nn}),N({type:Number,reflect:!0,attribute:!0})],Ut.prototype,"from",2);Qt([Ee({context:Hn}),N({type:Number,reflect:!0,attribute:!0})],Ut.prototype,"to",2);Qt([Ee({context:$p}),N({type:String,reflect:!0,attribute:!0})],Ut.prototype,"loading",2);Ut=Qt([ue("registry-provider")],Ut);var Op=Object.defineProperty,Ep=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&Op(e,r,i),i};class vt extends Wn{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}Ep([fe({context:ol,subscribe:!0})],vt.prototype,"registry");const dl="group-instance",ul="tool-context",pl="tools-context";var Dp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,ks=(t,e,r,s)=>{for(var i=s>1?void 0:s?Tp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Dp(e,r,i),i};let Wr=class extends vt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=xp(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return A`<slot></slot>`}};ks([N({type:String,attribute:!0,reflect:!0})],Wr.prototype,"slug",2);ks([Ee({context:dl})],Wr.prototype,"group",2);ks([Ee({context:ul})],Wr.prototype,"tool",2);ks([Ee({context:pl})],Wr.prototype,"tools",2);Wr=ks([ue("group-provider")],Wr);var Lp=Object.defineProperty,Rp=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&Lp(e,r,i),i};class Cs extends vt{constructor(){super()}connectedCallback(){super.connectedCallback()}}Rp([fe({context:dl,subscribe:!0})],Cs.prototype,"group");const fl="file",gl="failure",ml="file-loading",Mp="file-loaded",Bn="file-provider-element",zn="file-ms-context",Vn="file-cursor",Yn="file-cursor-setter",ki="playback",qn="duration",Gn="playing",vl="playbackSpeed",bl="recording",yl="mayStop",Up="analysislist",Xn="file-markers-context";var Fp=Object.defineProperty,rt=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&Fp(e,r,i),i};class Ze extends Cs{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const r=this.file.timeline._convertPercenttRelative(e),s=this.file.timeline.findPreviousRelative(r);this.cursor={absolute:s.absolute,ms:s.relative,percentage:e}}},this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new me,this.onSuccess=new me,this.onFailure=new me}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}attributeChangedCallback(e,r,s){var i,n,a;if(super.attributeChangedCallback(e,r,s),e==="ms"&&s&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(s)));l!==this.currentFrame.ms&&((i=this.file)==null||i.timeline.setRelativeTime(l))}e==="playing"&&(s==="true"?(n=this.file)==null||n.timeline.play():s==="false"&&((a=this.file)==null||a.timeline.pause())),e==="playbackspeed"&&this.file&&s&&Object.keys(Fn).includes(s)&&(this.file.timeline.playbackSpeed=parseFloat(s)),e==="recording"&&this.file&&(this.recording===!0&&s==="false"?this.file.recording.end():this.recording===!1&&s==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.playbackSpeed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}rt([Ee({context:fl}),R()],Ze.prototype,"file");rt([Ee({context:gl}),R()],Ze.prototype,"failure");rt([Ee({context:ml}),R()],Ze.prototype,"loading");rt([Ee({context:Mp}),R()],Ze.prototype,"ready");rt([Ee({context:Gn}),N({type:String,reflect:!0,attribute:!0})],Ze.prototype,"playing");rt([Ee({context:qn}),R()],Ze.prototype,"duration");rt([Ee({context:ki}),R()],Ze.prototype,"currentFrame");rt([Ee({context:Vn})],Ze.prototype,"cursor");rt([Ee({context:Yn})],Ze.prototype,"cursorSetter");rt([Ee({context:zn}),N({type:Number,reflect:!0,attribute:!0})],Ze.prototype,"ms");rt([Ee({context:vl}),N({type:Number,reflect:!0,attribute:!0})],Ze.prototype,"playbackSpeed");rt([Ee({context:bl}),N({type:String,reflect:!0,attribute:!0})],Ze.prototype,"recording");rt([Ee({context:yl}),R()],Ze.prototype,"mayStop");rt([vs({slot:"mark",flatten:!0})],Ze.prototype,"marksQueriedInternally");rt([Ee({context:Xn})],Ze.prototype,"marksProvidedBelow");rt([Ee({context:Up})],Ze.prototype,"analysis");var Ip=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,Ci=(t,e,r,s)=>{for(var i=s>1?void 0:s?jp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Ip(e,r,i),i};let ds=class extends Ze{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof jr?await e.createInstance(this.group).then(r=>(this.file=r,this.onSuccess.call(r),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(t=>{t instanceof qo?this.recieveInstance(t):this.failure=t})}render(){return A`
            <slot></slot>
            <slot name="mark"></slot>
        `}};Ci([Ee({context:Bn})],ds.prototype,"providedSelf",2);Ci([N({type:String,attribute:!0,reflect:!0})],ds.prototype,"thermal",2);Ci([N({type:String,attribute:!0,reflect:!0})],ds.prototype,"visible",2);ds=Ci([ue("file-provider")],ds);var Wp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Gr=(t,e,r,s)=>{for(var i=s>1?void 0:s?Np(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Wp(e,r,i),i};let lr=class extends Ze{constructor(){super(...arguments),this.providedSelf=this,this.container=Ie(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof jr){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof ri&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return A`

                    <div class="container">
                        <div ${je(this.container)} class="${Bt(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${rl.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return A`
            ${this.ready?A`<slot></slot>`:X}
            <slot name="mark"></slot>
        `}};lr.styles=Ae`

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
    
    `;Gr([Ee({context:Bn})],lr.prototype,"providedSelf",2);Gr([R()],lr.prototype,"container",2);Gr([R()],lr.prototype,"ready",2);Gr([R()],lr.prototype,"hover",2);Gr([R()],lr.prototype,"listener",2);lr=Gr([ue("file-dropin")],lr);var Hp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,Zn=(t,e,r,s)=>{for(var i=s>1?void 0:s?Bp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Hp(e,r,i),i};let us=class extends Cs{constructor(){super(...arguments),this.container=Ie(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return A`

            <div class="container">
            
                <div ${je(this.container)} class="${Bt(t)}"></div>

            </div>
        
        `}};us.styles=Ae`

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
    
    `;Zn([R()],us.prototype,"container",2);Zn([R()],us.prototype,"hover",2);us=Zn([ue("group-dropin")],us);var zp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,wl=(t,e,r,s)=>{for(var i=s>1?void 0:s?Vp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&zp(e,r,i),i};let si=class extends vt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return A`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return A`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(vr).map(([t,e])=>A`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};si.styles=Ae`

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

    `;wl([fe({context:xi,subscribe:!0})],si.prototype,"value",2);si=wl([ue("registry-palette-dropdown")],si);var Yp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,xl=(t,e,r,s)=>{for(var i=s>1?void 0:s?qp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Yp(e,r,i),i};let ii=class extends vt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return A`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return A`
            <div class="container">
                ${Object.entries(vr).map(([t,e])=>A`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};ii.styles=Ae`

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

    `;xl([fe({context:xi,subscribe:!0}),R()],ii.prototype,"value",2);ii=xl([ue("registry-palette-buttons")],ii);var Gp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,_l=(t,e,r,s)=>{for(var i=s>1?void 0:s?Xp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Gp(e,r,i),i};let ni=class extends vt{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return A`
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
        `}};ni.styles=Ae`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;_l([fe({context:ll,subscribe:!0})],ni.prototype,"value",2);ni=_l([ue("registry-opacity-slider")],ni);var Zp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,Qp=(t,e,r,s)=>{for(var i=s>1?void 0:s?Kp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Zp(e,r,i),i};let to=class extends vt{doAction(){this.registry.range.applyAuto()}render(){return A`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};to=Qp([ue("registry-range-auto-button")],to);var Jp=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,tf=(t,e,r,s)=>{for(var i=s>1?void 0:s?ef(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Jp(e,r,i),i};let ro=class extends vt{doAction(){this.registry.range.applyMinmax()}render(){return A`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};ro=tf([ue("registry-range-full-button")],ro);var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,Si=(t,e,r,s)=>{for(var i=s>1?void 0:s?sf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&rf(e,r,i),i};let Ft=class extends vt{constructor(){super(...arguments),this.ticksRef=Ie(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,s,i){const n=(t-e)*(i-s)/(r-e)+s;return this.clamp(n,s,i)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],s=Math.floor(e/Ft.TICK_WIDTH)-2,i=100/s;for(let n=1;n<s;n++)r.push(i*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return A`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${je(this.ticksRef)}>

                    ${this.ticks.map(t=>A`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Ft.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Ft.TICK_WIDTH=40;Ft.TICK_FIXED=2;Ft.styles=Ae`

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


    `;Si([N({type:String,reflect:!0})],Ft.prototype,"placement",2);Si([R()],Ft.prototype,"minmax",2);Si([R()],Ft.prototype,"ticks",2);Ft=Si([ue("registry-ticks-bar")],Ft);var nf=Object.defineProperty,af=Object.getOwnPropertyDescriptor,Ss=(t,e,r,s)=>{for(var i=s>1?void 0:s?af(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&nf(e,r,i),i};let Nr=class extends vt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return A`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return A`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Ss([R()],Nr.prototype,"minmax",2);Ss([R()],Nr.prototype,"range",2);Ss([R()],Nr.prototype,"opacity",2);Ss([R()],Nr.prototype,"palette",2);Nr=Ss([ue("registry-log")],Nr);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,u,v)=>u in o?t(o,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[u]=v,s=(o,u,v)=>(r(o,typeof u!="symbol"?u+"":u,v),v),i=(o,u)=>` ${u&&u.length>0?u.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",h="pointers-max-distance",p="range-dragging",g="data",f="min",b="max",w="step",_="round",P="type",k="theme",U="rtl",M="btt",j="disabled",B="keyboard-disabled",W="mousewheel-disabled",ae="slider-width",O="slider-height",V="slider-radius",Y="slider-bg",Z="slider-bg-hover",oe="slider-bg-fill",q="pointer-width",re="pointer-height",se="pointer-radius",ce="pointer-bg",De="pointer-bg-hover",We="pointer-bg-focus",Re="pointer-shadow",dt="pointer-shadow-hover",ut="pointer-shadow-focus",Nt="pointer-border",At="pointer-border-hover",Ot="pointer-border-focus",Et="animate-onclick",kt="css-links",Me="vertical",Qe="horizontal",dr=(o,u,v,m,L)=>{let J=u-o;return J===0?v:(m-v)*(L-o)/J+v},nt=o=>!isNaN(parseFloat(o))&&isFinite(o),Ue=(o,u)=>nt(o)?Number(o):u,Os=(o,u)=>u===0?0:Math.round(o/u)*u,Oi=(o,u=1/0)=>{if(u===1/0)return o;let v=e(10,u);return Math.round(o*v)/v},qe=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Ei=(o,u)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},Di=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},Ti=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},Li=(o,u)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},Ri=(o,u)=>{if(!u||u.length<=0)return;let v=u.map(L=>nt(L)?Ue(L,L):L),m={values:v||[]};m.value=v[0],m.value0=v[0],m.value1=v[0];for(let L=1;L<v.length;L++)m[`value${L+1}`]=v[L];o.dispatchEvent(new CustomEvent("change",{detail:m}))},C=(o,u,v)=>{let m=0,L,J,de,F,I=!1,pe=(te,Le,Xe,Ge,Ne,He)=>{let ot=m;Xe!==void 0&&te>Xe&&(te=Xe),Le!==void 0&&te<Le&&(te=Le),m=te;let lt=m;return(Ge===Me&&He||Ge===Qe&&Ne)&&(lt=100-lt),Ge===Me?u.style.top=`${lt}%`:u.style.left=`${lt}%`,ot!==m},ye=te=>te===u||u.contains(te),G=(te,Le,Xe,Ge)=>{L=te,J=Le,de=Xe,F=Ge},Pe=te=>{I=te,u.classList.toggle("disabled",I),I?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},yt=(te,Le)=>{Le==null?u.removeAttribute(te):u.setAttribute(te,Le)},tt=te=>u.getAttribute(te),ee=te=>{if(!I){switch(te.key){case"ArrowLeft":{te.preventDefault(),typeof L=="function"&&L(v);break}case"ArrowRight":{te.preventDefault(),typeof J=="function"&&J(v);break}case"ArrowUp":{te.preventDefault(),typeof de=="function"&&de(v);break}case"ArrowDown":{te.preventDefault(),typeof F=="function"&&F(v);break}}Li(o,te)}},ge=()=>{I||Ei(o,u)};return u.className=`pointer pointer-${v}`,u.addEventListener("keydown",ee),u.addEventListener("click",ge),{$pointer:u,get percent(){return m},get disabled(){return I},set disabled(te){Pe(te)},updatePosition:pe,isClicked:ye,setCallbacks:G,setAttr:yt,getAttr:tt,destroy:()=>{u.removeEventListener("keydown",ee),u.removeEventListener("click",ge),u.remove()}}},E=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let u=o.split(","),v=[],m=!0;for(let L=0;L<u.length;L++){let J=u[L].trim();J!==""&&(v.push(J),nt(J)||(m=!1))}return m?v.map(L=>Number(L)):v},D=(o,u)=>u?u.findIndex(v=>v===o||v.toString().trim()===o.toString().trim()):-1,T=o=>({updatePosition:(u,v,m,L)=>{if(v.length<=0)return;let J=v.length===1,de=v[0],F=v[v.length-1];u===Me?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),J?o.style.height=`${de}%`:o.style.height=`${Math.abs(de-F)}%`,L?(o.style.bottom="0%",J?o.style.top="auto":o.style.top=`${Math.min(100-F,100-de)}%`):(o.style.bottom="auto",J?o.style.top="0%":o.style.top=`${Math.min(de,F)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),J?o.style.width=`${de}%`:o.style.width=`${Math.abs(de-F)}%`,m?(o.style.right="0%",J?o.style.left="auto":o.style.left=`${Math.min(100-F,100-de)}%`):(o.style.right="auto",J?o.style.left="0%":o.style.left=`${Math.min(de,F)}%`))}}),Q="--animate-onclick",Ce="--width",ne="--height",Te="--panel-bg-border-radius",xe="--panel-bg",H="--panel-bg-hover",_e="--panel-bg-fill",x="--pointer-width",S="--pointer-height",le="--pointer-border-radius",ve="--pointer-bg",Ve="--pointer-bg-hover",Je="--pointer-bg-focus",Dt="--pointer-shadow",pt="--pointer-shadow-hover",bt="--pointer-shadow-focus",er="--pointer-border",K="--pointer-border-hover",he="--pointer-border-focus",$=(o,u,v)=>{let m=new Map;for(let L of o.attributes){let J=L.nodeName.trim().toLowerCase();if(!u.test(J))continue;let de=J.replace(/\D/g,"").trim(),F=de===""||de==="0"||de==="1"?0:Ue(de,0)-1,I=v&&typeof v=="function"?v(L.value):L.value;m.set(F,I)}return m},ie=o=>{if(!o)return null;let u=o.getAttribute(kt);if(!u)return null;let v=u.split(";"),m=[];for(let L of v)L.trim()!==""&&m.push(L.trim());return m},Se=[[Ce,ae,"sliderWidth",null],[ne,O,"sliderHeight",null],[Te,V,"sliderRadius",null],[xe,Y,"sliderBg",null],[H,Z,"sliderBgHover",null],[_e,oe,"sliderBgFill",null],[x,q,"pointer#Width",/^pointer([0-9]*)-width$/],[S,re,"pointer#Height",/^pointer([0-9]*)-height$/],[le,se,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ve,ce,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ve,De,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Je,We,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Dt,Re,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[pt,dt,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[bt,ut,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[er,Nt,"pointer#Border",/^pointer([0-9]*)-border$/],[K,At,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[he,Ot,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ke=(o,u,v)=>{let m=null,L=[],J=new Map,de=(ee,ge=u)=>{let te=[...ge.classList];for(let Le of te)Le.startsWith(ee)&&u.classList.remove(Le)},F=()=>{de("shape");let ee=u.querySelectorAll(".pointer");for(let ge of ee)de("shape",ge)},I=ee=>{m=ee,de("theme-"),typeof ee=="string"&&u.classList.add(`theme-${ee}`)},pe=()=>{if(F(),!(L.length<=0)){u.classList.add("shape",`shape-${L[0]}`);for(let ee=1;ee<L.length;ee++){let ge=L[ee];if(!ge)continue;let te=u.querySelector(`.pointer-${ee}`);!te||te.classList.add("shape",`shape-${ge}`)}}},ye=(ee,ge)=>{L[ee]=ge,pe()},G=()=>{F();let ee=$(o,/^pointer([0-9]*)-shape$/);if(!(ee.size<=0)){for(let ge of ee){let te=ge[0];L[te]=ge[1]}pe()}},Pe=(ee,ge)=>`${ee}-${ge}`,yt=(ee,ge,te)=>{let Le=v[te];if(!Le)return;let Xe=te===0?u:Le.$pointer;if(ge==null){J.has(Pe(ee,te))&&J.delete(Pe(ee,te)),Xe.style.removeProperty(ee);return}J.set(Pe(ee,te),ge),Xe.style.setProperty(ee,ge)},tt=(ee,ge)=>J.get(Pe(ee,ge));return(()=>{for(let ee of Se){let[ge,te,Le,Xe]=ee;if(Xe){let Ne=$(o,Xe);for(let He of Ne){let ot=He[0],lt=He[1];yt(ge,lt,ot)}}else{let Ne=o.getAttribute(te);yt(ge,Ne,0)}let Ge=[];if(Le.indexOf("#")===-1)Ge.push([Le,0]);else{Ge.push([Le.replace("#",""),0]),Ge.push([Le.replace("#","0"),0]),Ge.push([Le.replace("#","1"),0]);for(let Ne=1;Ne<v.length;Ne++)Ge.push([Le.replace("#",(Ne+1).toString()),Ne])}for(let Ne of Ge)try{let He=Ne[0],ot=Ne[1];Object.prototype.hasOwnProperty.call(o,He)||Object.defineProperty(o,He,{get(){return tt(ge,ot)},set:lt=>{yt(ge,lt,ot)}})}catch(He){console.error(He)}}I(o.getAttribute(k)),G()})(),{setStyle:yt,getStyle:tt,get theme(){return m},set theme(ee){I(ee)},get pointerShapes(){return L},setPointerShape:ye}},Fe="animate-on-click",be="range-dragging",at=(o,u,v,m)=>{let L=[],J=ye=>{for(let G of L)G.update&&typeof G.update=="function"&&G.update(ye)},de=()=>{for(let ye of L)ye.destroy&&typeof ye.destroy=="function"&&ye.destroy()},F=(ye,G)=>{for(let Pe of L)Pe.onAttrChange&&typeof Pe.onAttrChange=="function"&&Pe.onAttrChange(ye,G)},I=ye=>{if(ye.gettersAndSetters){for(let G of ye.gettersAndSetters)if(!(!G.name||!G.attributes))try{Object.prototype.hasOwnProperty.call(o,G.name)||Object.defineProperty(o,G.name,G.attributes)}catch(Pe){console.error("defineSettersGetters error:",Pe)}}},pe=ye=>{var G;if(!ye.css)return;let Pe=(G=o.shadowRoot)==null?void 0:G.querySelector("style");!Pe||(Pe.innerHTML+=ye.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ye of window.tcRangeSliderPlugins){let G=ye();L.push(G),G.init&&typeof G.init=="function"&&(G.init(o,u,v,m),I(G),pe(G))}},update:J,onAttrChange:F,destroy:de}},Ye=10,Es=20,Cl=(o,u)=>{let v=new Map,m=/^value([0-9]*)$/;for(let F of o.attributes){let I=F.nodeName.trim().toLowerCase();if(!m.test(I))continue;let pe=I.replace("value","").trim(),ye=pe===""||pe==="0"||pe==="1"?0:Ue(pe,0)-1,G=nt(F.value)?Ue(F.value,0):F.value;v.set(ye,G)}let L=Math.max(...Array.from(v.keys())),J=[];J.push([C(o,u,0),v.get(0)]);let de=u;for(let F=1;F<=L;F++){let I=u.cloneNode(!0);de.after(I),de=I,J.push([C(o,I,F),v.get(F)])}return J},ra=(o,u,v,m,L,J,de)=>{try{Object.defineProperty(o,m,{configurable:!0,get(){if(!u)return;let F=u.pointers[v];if(!F)return;let I=u.getTextValue(F.percent);return nt(I)?Ue(I,I):I},set:F=>{u.pointers[v]?u==null||u.setValue(F,v):u==null||u.addPointer(F)}}),Object.defineProperty(o,L,{configurable:!0,get(){var F,I;return(I=(F=u==null?void 0:u.pointers[v])==null?void 0:F.getAttr("aria-label"))!=null?I:void 0},set:F=>{!u||u.setAriaLabel(v,F)}}),Object.defineProperty(o,J,{configurable:!0,get(){var F,I;return(I=(F=u==null?void 0:u.styles)==null?void 0:F.pointerShapes[v])!=null?I:null},set:F=>{!u||!u.styles||u.styles.setPointerShape(v,F)}}),Object.defineProperty(o,de,{configurable:!0,get(){var F;return(F=u==null?void 0:u.pointers[v].disabled)!=null?F:!1},set:F=>{if(!u)return;let I=u==null?void 0:u.pointers[v];!I||(I.disabled=F)}})}catch(F){console.error(F)}},Sl=(o,u)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let m=2;m<Ye;m++)v.push([`value${m}`,`ariaLabel${m}`,`pointer${m}Shape`,`pointer${m}Disabled`,m-1]);for(let m of v)ra(o,u,m[4],m[0],m[1],m[2],m[3])},sa=(o,u,v)=>{var m;let L=(m=v.shadowRoot)==null?void 0:m.querySelector(".container");if(L)for(let J of o)u?L.prepend(J.$pointer):L.append(J.$pointer)},$l=(o,u)=>{if(!(!u||o.length<=1)){for(let v of o)v.$pointer.style.zIndex=Es.toString();u.$pointer.style.zIndex=(Es*2).toString()}},Mi=0,Zr=100,$r=2,ia="0.3s",Pl=(o,u,v)=>{let m=v.map(d=>d[0]),L=null,J=null,de=null,F=null,I=Mi,pe=Zr,ye,G,Pe=Qe,yt=$r,tt=!1,ee=!1,ge=!1,te=0,Le=1/0,Xe=!1,Ge,Ne,He=!1,ot=!1,lt=!1,tr=ia,na=[],aa=d=>{He||(d.preventDefault&&d.preventDefault(),ur(d),window.addEventListener("mousemove",ur),window.addEventListener("mouseup",Ds),Di(o,d))},Ds=d=>{He||(Ge=void 0,Ne=void 0,window.removeEventListener("mousemove",ur),window.removeEventListener("mouseup",Ds),tr&&u.classList.add(Fe),Ti(o,d))},El=(d,y)=>{if(m.length<=0)return;if(m.length===1)return m[0].isClicked(d)&&tr&&u.classList.remove(Fe),m[0];let z=Tl(d);if(Xe){let $e=y,Ct=Ls($e);Ct!==void 0&&($e=Os($e,Ct)),z?(Ge=$e,Ne=0,tr&&u.classList.remove(Fe)):Ge!==void 0&&(Ne=$e-Ge,Ge=$e)}if(!Dl(d)&&!z){for(let $e of m)if(!(!$e.isClicked(d)||$e.disabled))return tr&&u.classList.remove(Fe),$e;for(let $e of m)if(L===$e)return $e}let Oe=1/0,Be=null;for(let $e of m){if($e.disabled)continue;let Ct=Math.abs(y-$e.percent);Ct<Oe&&(Oe=Ct,Be=$e)}return Be},oa=()=>m.findIndex(d=>L===d&&!d.disabled),ur=d=>{let y;if(Pe===Me){let{height:Oe,top:Be}=u.getBoundingClientRect(),$e=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;y=Math.min(Math.max(0,$e-Be),Oe)*100/Oe}else{let{width:Oe,left:Be}=u.getBoundingClientRect(),$e=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;y=Math.min(Math.max(0,$e-Be),Oe)*100/Oe}if((tt||ee)&&(y=100-y),L=El(d.target,y),L&&$l(m,L),Xe&&m.length>1&&Ne!==void 0){let Oe=m[0],Be=m[m.length-1],$e=Oe.percent+Ne<0,Ct=Be.percent+Ne>100;if($e||Ct)return;for(let Ns=0;Ns<m.length;Ns++)ct(Ns,m[Ns].percent+Ne);return}let z=oa();z!==-1&&(ct(z,y),L==null||L.$pointer.focus())},Ts=d=>{if(He||document.activeElement!==o||L!=null&&L.disabled)return;d.stopPropagation(),d.preventDefault();let y=d.deltaY<0,z=tt||ee,Oe=y?!z:z,Be=oa();Be!==-1&&(Oe?Kr(Be,m[Be].percent):Qr(Be,m[Be].percent))},la=d=>{He||ot||(Pe===Me?ee?ct(d,100):ct(d,0):tt?Qr(d,m[d].percent):Kr(d,m[d].percent))},ca=d=>{He||ot||(Pe===Me?ee?ct(d,0):ct(d,100):tt?Kr(d,m[d].percent):Qr(d,m[d].percent))},ha=d=>{He||ot||(Pe===Me?ee?Qr(d,m[d].percent):Kr(d,m[d].percent):tt?ct(d,100):ct(d,0))},da=d=>{He||ot||(Pe===Me?ee?Kr(d,m[d].percent):Qr(d,m[d].percent):tt?ct(d,0):ct(d,100))},Dl=d=>d.classList.contains("panel"),Tl=d=>d.classList.contains("panel-fill"),Kr=(d,y)=>{if(y===void 0)return;let z=Ls(y);z==null&&(z=1),y-=z,y<0&&(y=0),ct(d,y)},Qr=(d,y)=>{if(y===void 0)return;let z=Ls(y);z==null&&(z=1),y+=z,y>100&&(y=100),ct(d,y)},pr=()=>{!F||F.update({percents:ua(),values:pa(),$pointers:fa(),min:ga(),max:ma(),data:Ii(),step:Fi(),round:Wi(),type:ji(),textMin:Rs(),textMax:Ms(),rightToLeft:Bi(),bottomToTop:zi(),pointersOverlap:Gi(),pointersMinDistance:Ni(),pointersMaxDistance:Hi(),rangeDragging:Xi(),disabled:Vi(),keyboardDisabled:Yi(),mousewheelDisabled:qi()})},Ll=()=>{pr()},Rl=d=>{if(!(ge||m.length<=1||pe===I))if(d===0){let y=Le*100/(pe-I);return Math.max(0,m[d+1].percent-y)}else{let y=te*100/(pe-I);return Math.min(m[d-1].percent+y,100)}},Ml=d=>{if(!(ge||m.length<=1||pe===I))if(d===m.length-1){let y=Le*100/(pe-I);return Math.min(m[d-1].percent+y,100)}else{let y=te*100/(pe-I);return Math.max(0,m[d+1].percent-y)}},Ls=d=>{let y;if(typeof ye=="function"){let z=dr(0,100,I,pe,d);y=ye(z,d)}else y=ye;if(nt(y)){let z=pe-I;return y=z===0?0:y*100/z,y}},Pr=d=>{if(d===void 0)return;let y=dr(0,100,I,pe,d);return G!==void 0?G[Math.round(y)]:Oi(y,yt)},Rs=()=>G!==void 0?G[I]:I,Ms=()=>G!==void 0?G[pe]:pe,Fi=()=>ye,Ul=d=>{var y;return d<=0||ge?Rs():(y=Pr(m[d-1].percent))!=null?y:""},Fl=d=>{var y;return m.length<=1||d>=m.length-1||ge?Ms():(y=Pr(m[d+1].percent))!=null?y:""},ua=()=>m.map(d=>d.percent),pa=()=>m.map(d=>Pr(d.percent)),fa=()=>m.map(d=>d.$pointer),ga=()=>I,ma=()=>pe,Ii=()=>G,ji=()=>Pe,Wi=()=>yt,Ni=()=>te,Hi=()=>Le,Il=d=>na[d],Bi=()=>tt,zi=()=>ee,Vi=()=>He,Yi=()=>ot,qi=()=>lt,Gi=()=>ge,Xi=()=>Xe,ct=(d,y)=>{if(y===void 0)return;let z=Ls(y);z!==void 0&&(y=Os(y,z));let Oe=m[d];if(!Oe)return;let Be=Oe.updatePosition(y,Rl(d),Ml(d),Pe,tt,ee);J==null||J.updatePosition(Pe,m.map($e=>$e.percent),tt,ee),pr();for(let $e of m){let Ct=Pr($e.percent);Ct!==void 0&&($e.setAttr("aria-valuenow",Ct.toString()),$e.setAttr("aria-valuetext",Ct.toString()))}Wl(),Be&&Ri(o,m.map($e=>Pr($e.percent)))},Tt=()=>{for(let d=0;d<m.length;d++)ct(d,m[d].percent)},jl=(d,y)=>{I=G!==void 0?0:Ue(d,Mi),pe=G!==void 0?G.length-1:Ue(y,Zr),Us(I),Fs(pe)},Wl=()=>{var d,y;for(let z=0;z<m.length;z++){let Oe=m[z];Oe.setAttr("aria-valuemin",((d=Ul(z))!=null?d:"").toString()),Oe.setAttr("aria-valuemax",((y=Fl(z))!=null?y:"").toString())}},Us=d=>{I=Ue(d,Mi),I>pe&&(pe=I+Zr),Tt()},Fs=d=>{pe=Ue(d,Zr),pe<I&&(pe=I+Zr),Tt()},va=d=>{ge=!0;for(let y=0;y<d.length;y++)Is(d[y],y);ge=!1;for(let y=0;y<d.length;y++)Is(d[y],y)},Is=(d,y)=>{let z;G!==void 0?(z=d==null?0:D(d,G),z===-1&&(z=0)):(z=Ue(d,I),z<I&&(z=I),z>pe&&(z=pe));let Oe=dr(I,pe,0,100,z);ct(y,Oe)},js=d=>{if(d==null){ye=void 0;return}if(typeof d=="function"){ye=d,Tt();return}if(nt(d)){ye=Ue(d,1);let y=Math.abs(pe-I);ye>y&&(ye=void 0),Tt();return}ye=void 0},Zi=d=>{ge=d,Tt()},Ki=d=>{(!nt(d)||d<0)&&(d=0),te=d},Qi=d=>{(!nt(d)||d<0)&&(d=1/0),Le=d},Ji=d=>{He=d,u.classList.toggle("disabled",He),He?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},ba=d=>{ot=d},ya=d=>{lt=d,lt?document.removeEventListener("wheel",Ts):document.addEventListener("wheel",Ts,{passive:!1})},en=d=>{if(d==null){G=void 0;return}if(G=E(d),G===void 0||G.length<=0){G=void 0;return}Us(0),Fs(G.length-1),ye===void 0&&js(1)},tn=d=>{var y;typeof d=="string"?Pe=d.trim().toLowerCase()===Me?Me:Qe:Pe=Qe;let z=(y=o.shadowRoot)==null?void 0:y.querySelector(".range-slider-box");if(!z)return;z.className=`range-slider-box type-${Pe}`,Tt();let Oe=Pe===Me?"vertical":"horizontal";for(let Be of m)Be.setAttr("aria-orientation",Oe)},rn=d=>{tt=d,m.length>1&&sa(m,tt,o),Tt(),pr()},sn=d=>{ee=d,m.length>1&&sa(m,ee,o),Tt(),pr()},nn=d=>{yt=Ue(d,$r),yt<0&&(yt=$r),pr()},wa=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(tr=void 0,u.style.removeProperty(Q),u.classList.remove(Fe)):(tr=d.toString(),u.style.setProperty(Q,tr),u.classList.add(Fe))},xa=(d,y)=>{let z=m[d];!z||(z.setAttr("aria-label",y),na[d]=y)},Ws=d=>{if(Ge=void 0,m.length<=1){Xe=!1,u.classList.remove(be);return}Xe=d,u.classList.toggle(be,Xe)},Nl=()=>{Ji(qe(o.getAttribute(j))),ot=qe(o.getAttribute(B)),lt=qe(o.getAttribute(W));let d=$(o,/^pointer([0-9]*)-disabled$/,y=>qe(y));for(let y of d){let z=y[0];!m[z]||(m[z].disabled=y[1])}},Hl=()=>{let d=$(o,/^aria-label([0-9]*)$/);for(let y of d){let z=y[0];xa(z,y[1])}},Bl=d=>{let y=m.length,z=m[y-1].$pointer,Oe=z.cloneNode(!0);z.after(Oe);let Be=C(o,Oe,y);return Be.setCallbacks(la,ca,ha,da),m.push(Be),Is(d,y),Tt(),pr(),y},zl=()=>{let d=m.length,y=m[d-1];return y?(y.destroy(),m.pop(),m.length<=1&&Ws(!1),Tt(),pr(),d-1):-1};return(()=>{var d,y;for(let Oe of m)Oe.setCallbacks(la,ca,ha,da);let z=(d=o.shadowRoot)==null?void 0:d.querySelector(".panel-fill");z&&(J=T(z)),tn(o.getAttribute(P)),rn(qe(o.getAttribute(U))),sn(qe(o.getAttribute(M))),jl(o.getAttribute(f),o.getAttribute(b)),js(o.getAttribute(w)),en(o.getAttribute(g)),va(v.map(Oe=>Oe[1])),Zi(qe(o.getAttribute(a))),Ki(Ue(o.getAttribute(l),0)),Qi(Ue(o.getAttribute(h),1/0)),Ws(qe(o.getAttribute(p))),nn(Ue(o.getAttribute(_),$r)),Nl(),Hl(),de=ke(o,u,m),wa((y=o.getAttribute(Et))!=null?y:ia),u.addEventListener("mousedown",aa),u.addEventListener("mouseup",Ds),u.addEventListener("touchmove",ur),u.addEventListener("touchstart",ur),lt||document.addEventListener("wheel",Ts,{passive:!1}),F=at(o,Ll,{setValues:va,setMin:Us,setMax:Fs,setStep:js,setPointersOverlap:Zi,setPointersMinDistance:Ki,setPointersMaxDistance:Qi,setDisabled:Ji,setType:tn,setRightToLeft:rn,setBottomToTop:sn,setRound:nn,setKeyboardDisabled:ba,setMousewheelDisabled:ya,setRangeDragging:Ws,setData:en},{getPercents:ua,getValues:pa,getPointerElements:fa,getMin:ga,getMax:ma,getStep:Fi,getData:Ii,getType:ji,getRound:Wi,getTextMin:Rs,getTextMax:Ms,isRightToLeft:Bi,isBottomToTop:zi,isDisabled:Vi,isKeyboardDisabled:Yi,isMousewheelDisabled:qi,isPointersOverlap:Gi,isRangeDraggingEnabled:Xi,getPointersMinDistance:Ni,getPointersMaxDistance:Hi}),F.init()})(),{get pointers(){return m},get styles(){return de},get pluginsManager(){return F},get min(){return Rs()},get max(){return Ms()},get step(){return Fi()},get pointersOverlap(){return Gi()},set pointersOverlap(d){Zi(d)},get pointersMinDistance(){return Ni()},set pointersMinDistance(d){Ki(d)},get pointersMaxDistance(){return Hi()},set pointersMaxDistance(d){Qi(d)},get disabled(){return Vi()},set disabled(d){Ji(d)},get data(){return Ii()},get type(){return ji()},set type(d){tn(d)},get rightToLeft(){return Bi()},set rightToLeft(d){rn(d)},get bottomToTop(){return zi()},set bottomToTop(d){sn(d)},get round(){return Wi()},set round(d){nn(d)},get animateOnClick(){return tr},set animateOnClick(d){wa(d)},get keyboardDisabled(){return Yi()},set keyboardDisabled(d){ba(d)},get mousewheelDisabled(){return qi()},set mousewheelDisabled(d){ya(d)},get rangeDragging(){return Xi()},set rangeDragging(d){Ws(d)},setMin:Us,setMax:Fs,setValue:Is,setStep:js,setData:en,getTextValue:Pr,setAriaLabel:xa,getAriaLabel:Il,addPointer:Bl,removePointer:zl,destroy:()=>{u.removeEventListener("mousedown",aa),u.removeEventListener("mouseup",Ds),u.removeEventListener("touchmove",ur),u.removeEventListener("touchstart",ur),document.removeEventListener("wheel",Ts);for(let d of m)d.destroy();F==null||F.destroy()}}},Al=(o,u,v)=>{let m=Se.find(([F,I,pe,ye])=>I.replace("#","")===u.replace(/\d+/g,""));if(m&&o.styles){let[F,I,pe,ye]=m,G=u.replace(/\D/g,"").trim(),Pe=G===""||G==="0"||G==="1"?0:Ue(G,0)-1;o.styles.setStyle(F,v,Pe);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(u,v),u){case f:{o.setMin(v);break}case b:{o.setMax(v);break}case w:{o.setStep(v);break}case a:{o.pointersOverlap=qe(v);break}case l:{o.pointersMinDistance=Ue(v,0);break}case p:{o.rangeDragging=qe(v);break}case h:{o.pointersMaxDistance=Ue(v,1/0);break}case j:{o.disabled=qe(v);break}case B:{o.keyboardDisabled=qe(v);break}case W:{o.mousewheelDisabled=qe(v);break}case g:{o.setData(v);break}case P:{o.type=v;break}case U:{o.rightToLeft=qe(v);break}case M:{o.bottomToTop=qe(v);break}case _:{o.round=Ue(v,$r);break}case k:{o.styles&&(o.styles.theme=v);break}case Et:{o.animateOnClick=v;break}}let L=null;if(/^value([0-9]*)$/.test(u)&&(L="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(L="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(L="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(L="pointer-shape"),!L)return;let J=u.replace(/\D/g,"").trim(),de=J===""||J==="0"||J==="1"?0:Ue(J,0)-1;switch(L){case"value":{o.setValue(v,de);break}case"pointer-disabled":{let F=o==null?void 0:o.pointers[de];if(!F)return;F.disabled=qe(v);break}case"aria-label":{o.setAriaLabel(de,v);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(de,v);break}}},Ol=class extends HTMLElement{constructor(){super(),s(this,"slider"),s(this,"_externalCSSList",[]),s(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.disabled)!=null?u:!1}set data(o){var u;(u=this.slider)==null||u.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var u;(u=this.slider)==null||u.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var u;(u=this.slider)==null||u.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,u;return(u=(o=this.slider)==null?void 0:o.round)!=null?u:$r}set type(o){!this.slider||(this.slider.type=o??Qe)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Qe}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?u:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?u:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?u:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,u,v;return(v=(u=(o=this.slider)==null?void 0:o.styles)==null?void 0:u.theme)!=null?v:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,u;return(u=(o=this.slider)==null?void 0:o.rightToLeft)!=null?u:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,u;return(u=(o=this.slider)==null?void 0:o.bottomToTop)!=null?u:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?u:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,u;return(u=(o=this.slider)==null?void 0:o.rangeDragging)!=null?u:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=qe(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var u,v;if(!this.slider)return;let m=(v=(u=this.slider)==null?void 0:u.addPointer(o))!=null?v:0;ra(this,this.slider,m,`value${m+1}`,`ariaLabel${m+1}`,`pointerShape${m+1}`,`pointer${m+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=o,this.shadowRoot.appendChild(u)}connectedCallback(){var o,u;if(!this.shadowRoot)return;this._externalCSSList=ie(this),this.shadowRoot.innerHTML=i(n,this._externalCSSList);let v=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!v)return;let m=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!m)return;let L=Cl(this,v);this.slider=Pl(this,m,L),Sl(this,this.slider),this._observer=new MutationObserver(J=>{J.forEach(de=>{var F;if(!this.slider||de.type!=="attributes")return;let I=de.attributeName;!I||Al(this.slider,I,(F=this.getAttribute(I))!=null?F:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Ui=Ol;window.tcRangeSlider=Ui,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Ui),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Ui{})})();(()=>{var t=(l,h,p,g,f)=>{let b=h-l;return b===0?p:(g-p)*(f-l)/b+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,h)=>e(l)?Number(l):h,s=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var i=11,n=11,a=()=>{let l=null,h=null,p=null,g=null,f=null,b=!1,w=i,_=n,P=()=>{var O;let V=(O=l==null?void 0:l.shadowRoot)==null?void 0:O.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),g=document.createElement("div"),g.classList.add("mark-points"),p.append(g),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),V.append(p)},k=()=>{!h||!p||p.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},U=()=>{var O;if(!p||!h)return;let V=h.getMin(),Y=h.getMax(),Z=h.getType()==="vertical",oe=h.isRightToLeft()||h.isBottomToTop();for(let re=0;re<w;re++){let se=document.createElement("div");se.classList.add("mark",`mark-${re}`);let ce=w===0?0:re*100/(w-1);Z?oe?se.style.top=`${100-ce}%`:se.style.top=`${ce}%`:oe?se.style.left=`${100-ce}%`:se.style.left=`${ce}%`,g==null||g.append(se)}let q=h.getData();for(let re=0;re<_;re++){let se=document.createElement("div");se.classList.add("mark-value",`mark-value-${re}`);let ce=_===0?0:re*100/(_-1),De=t(0,_-1,V,Y,re);se.textContent=(q?(O=q[Math.round(De)])!=null?O:"":De).toString(),Z?oe?se.style.top=`${100-ce}%`:se.style.top=`${ce}%`:oe?se.style.left=`${100-ce}%`:se.style.left=`${ce}%`,f==null||f.append(se)}},M=(O,V)=>{ae(),w=O,_=V,w<=0&&(w=i),_<=0&&(_=n),P(),U(),k()},j=O=>{b=O,b?(P(),U(),k()):ae()},B=O=>{!p||p.style.setProperty("--marks-color",O)},W=O=>{!p||p.style.setProperty("--values-color",O)},ae=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(O,V,Y,Z)=>{var oe,q;h=Z,l=O,b=s(l.getAttribute("marks")),b&&(M(r(l.getAttribute("marks-count"),i),r(l.getAttribute("marks-values-count"),n)),B((oe=l.getAttribute("marks-color"))!=null?oe:"#cbd5e1"),W((q=l.getAttribute("marks-values-color"))!=null?q:"#475569"))},onAttrChange:(O,V)=>{O==="marks"&&j(s(V)),O==="marks-count"&&M(r(V,i),_),O==="marks-values-count"&&M(w,r(V,n)),O==="marks-color"&&B(V),O==="marks-values-color"&&W(V)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return b??!1},set:O=>{j(s(O))}}},{name:"marksCount",attributes:{get(){return w??i},set:O=>{M(r(O,i),_)}}},{name:"marksValuesCount",attributes:{get(){return w??i},set:O=>{M(w,r(O,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:O=>{B(O)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:O=>{W(O)}}}],destroy:ae,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var of=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,jt=(t,e,r,s)=>{for(var i=s>1?void 0:s?lf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&of(e,r,i),i};let xt=class extends vt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Ie(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.setFixedRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const i=r.detail;this.from=i.value1,this.to=i.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?A`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:A`

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

        `}};xt.styles=Ae`

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
    
    `;jt([fe({context:cl,subscribe:!0}),R()],xt.prototype,"min",2);jt([fe({context:hl,subscribe:!0}),R()],xt.prototype,"max",2);jt([fe({context:Nn,subscribe:!0}),R()],xt.prototype,"from",2);jt([fe({context:Hn,subscribe:!0}),R()],xt.prototype,"to",2);jt([R()],xt.prototype,"hasFixedFrom",2);jt([R()],xt.prototype,"hasFixedTo",2);jt([fe({context:xi,subscribe:!0}),R()],xt.prototype,"palette",2);jt([R()],xt.prototype,"sliderRef",2);jt([R()],xt.prototype,"initialised",2);xt=jt([ue("registry-range-slider")],xt);var cf=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,$s=(t,e,r,s)=>{for(var i=s>1?void 0:s?hf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&cf(e,r,i),i};let Hr=class extends vt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?X:A`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};$s([fe({context:Nn,subscribe:!0})],Hr.prototype,"from",2);$s([fe({context:Hn,subscribe:!0})],Hr.prototype,"to",2);$s([N({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],Hr.prototype,"fixed",2);$s([N({type:String,reflect:!0,attribute:!0})],Hr.prototype,"separator",2);Hr=$s([ue("registry-range-display")],Hr);var df=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,$i=(t,e,r,s)=>{for(var i=s>1?void 0:s?uf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&df(e,r,i),i};let Br=class extends vt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return A`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":X}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>A`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():A`
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
        `}};Br.styles=Ae`

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


    `;$i([R()],Br.prototype,"histogram",2);$i([N({type:Boolean,reflect:!0})],Br.prototype,"interactive",2);$i([N({type:String,reflect:!0})],Br.prototype,"height",2);Br=$i([ue("registry-histogram")],Br);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ai extends Ln{constructor(e){if(super(e),this.it=X,e.type!==Tn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===X||e==null)return this._t=void 0,this.it=e;if(e===nr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ai.directiveName="unsafeHTML",ai.resultType=1;const wt=ci(ai);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kn extends ai{}kn.directiveName="unsafeSVG",kn.resultType=2;const pf=ci(kn);var ff=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,Pi=(t,e,r,s)=>{for(var i=s>1?void 0:s?gf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&ff(e,r,i),i};let zr=class extends Cs{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",t=>{this.hint=t.description})}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?X:A`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return A`
                        
                        <button 
                            class=${Bt(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${pf(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};zr.styles=Ae`

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

    `;Pi([fe({context:ul,subscribe:!0}),R()],zr.prototype,"value",2);Pi([fe({context:pl,subscribe:!0}),R()],zr.prototype,"tools",2);Pi([R()],zr.prototype,"hint",2);zr=Pi([ue("group-tool-buttons")],zr);var mf=Object.defineProperty,Ps=(t,e,r,s)=>{for(var i=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(e,r,i)||i);return i&&mf(e,r,i),i};class Ke extends Cs{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Ps([fe({context:Bn,subscribe:!0}),R()],Ke.prototype,"parentFileProviderElement");Ps([fe({context:ml,subscribe:!0}),R()],Ke.prototype,"loading");Ps([fe({context:fl,subscribe:!0}),R()],Ke.prototype,"file");Ps([fe({context:gl,subscribe:!0}),R()],Ke.prototype,"failure");Ps([fe({context:bl,subscribe:!0}),R()],Ke.prototype,"recording");var vf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,yf=(t,e,r,s)=>{for(var i=s>1?void 0:s?bf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&vf(e,r,i),i};let Cn=class extends Ke{constructor(){super(...arguments),this.container=Ie()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var s,i;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return A`
            <div ${je(this.container)} class=${Bt(r)} part="file-canvas-container">
            
                ${this.loading===!0?A`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?A`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                File loading error
                            </div>

                            <div class="error-url">
                                ${(s=this.failure)==null?void 0:s.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${(i=this.failure)==null?void 0:i.message}
                            </div>
                        </div>`:X}
            
            </div>
        
        `}};Cn.styles=Ae`
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
    `;Cn=yf([ue("file-canvas")],Cn);var wf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,_f=(t,e,r,s)=>{for(var i=s>1?void 0:s?xf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&wf(e,r,i),i};let Sn=class extends Ke{onInstanceCreated(t){}onFailure(t){}render(){return this.file?A`
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
        `:X}};Sn.styles=Ae`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Sn=_f([ue("file-share-button")],Sn);var kf=Object.defineProperty,Cf=Object.getOwnPropertyDescriptor,Sf=(t,e,r,s)=>{for(var i=s>1?void 0:s?Cf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&kf(e,r,i),i};let $n=class extends Ke{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,s){const i=e.toFixed(r),n=s!==void 0?i+" "+s:i;return this.renderRow(t,n)}renderDownloadRow(t,e,r,s){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${s}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?A`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${wt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${wt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?wt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):X}

                        ${wt(this.renderRow("Time",fu.human(this.file.timestamp)))}

                        ${wt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${wt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${wt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${wt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${wt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${wt(this.renderRow("Type",this.file.service.parser.name))}
                    ${wt(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(t=>A`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:X}};$n.styles=Ae`

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
    
    `;$n=Sf([ue("file-info-button")],$n);var $f=Object.defineProperty,Pf=Object.getOwnPropertyDescriptor,Af=(t,e,r,s)=>{for(var i=s>1?void 0:s?Pf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&$f(e,r,i),i};let Pn=class extends Ke{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?X:A`

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

                    ${this.file.timeline.isSequence?A`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:X}
            
            </thermal-dropdown>

        
        `}};Pn.styles=Ae`

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
    
    `;Pn=Af([ue("file-download-dropdown")],Pn);var Of=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,Jt=(t,e,r,s)=>{for(var i=s>1?void 0:s?Ef(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Of(e,r,i),i};let mt=class extends Ke{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Ie(),this.barRef=Ie(),this.containerRef=Ie(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<mt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}handleBarHover(t){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(r)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,l;const t=this.file;if(t===void 0)return X;if(t.duration===0)return X;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},s={item:!0,button:!0,...r},i={item:!0,timeline:!0,...r};return A`
            <div class="${Bt(e)}" ${je(this.containerRef)}>


                ${t!==void 0?A`
                        <div class="container">

                            <div class="${Bt(s)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?A`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:A`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>


                            <div class="${Bt(i)}"  ${je(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${je(this.barRef)}></div>
                                </div>

                                <div>
                                    ${this.markers.map(h=>A`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:X}

            
            
            </div>

            ${this.currentFrame!==void 0?A`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${zt(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${zt(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:X}

          `}};mt.collapseWidth=500;mt.styles=Ae`
    
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
    
    `;Jt([fe({context:Gn,subscribe:!0}),R()],mt.prototype,"playing",2);Jt([fe({context:ki,subscribe:!0}),R()],mt.prototype,"currentFrame",2);Jt([fe({context:qn,subscribe:!0}),R()],mt.prototype,"duration",2);Jt([fe({context:yl,subscribe:!0}),R()],mt.prototype,"mayStop",2);Jt([fe({context:Vn,subscribe:!0})],mt.prototype,"cursor",2);Jt([fe({context:Yn,subscribe:!0})],mt.prototype,"cursorSetter",2);Jt([fe({context:Xn,subscribe:!0})],mt.prototype,"markers",2);Jt([R()],mt.prototype,"collapsed",2);mt=Jt([ue("file-timeline")],mt);var Df=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,Kn=(t,e,r,s)=>{for(var i=s>1?void 0:s?Tf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Df(e,r,i),i};let ps=class extends Ke{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?X:A`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Fn).map(([t])=>A`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof qt&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};ps.styles=Ae`

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
    
    `;Kn([N({type:String,reflect:!0})],ps.prototype,"enabled",2);Kn([fe({context:vl,subscribe:!0}),R()],ps.prototype,"playbackSpeed",2);ps=Kn([ue("file-playback-speed-dropdown")],ps);var Lf=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,Qn=(t,e,r,s)=>{for(var i=s>1?void 0:s?Rf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Lf(e,r,i),i};let fs=class extends Ke{constructor(){super(...arguments),this.container=Ie()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return A`
            <div class="container">
            
                <video ${je(this.container)} preload="metadata">

                    ${this.url===void 0?X:A`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};fs.styles=Ae`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Qn([fe({context:ki,subscribe:!0}),R()],fs.prototype,"currentFrame",2);Qn([N({type:String,reflect:!0,attribute:!0})],fs.prototype,"url",2);fs=Qn([ue("file-video")],fs);const Mf=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),zt(r,"mm:ss:SSS")},Uf=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const s=parseInt(r[0]),i=parseInt(r[1]),n=parseInt(r[2]);return s*60*1e3+i*1e3+n};var Ff=Object.defineProperty,If=Object.getOwnPropertyDescriptor,Wt=(t,e,r,s)=>{for(var i=s>1?void 0:s?If(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Ff(e,r,i),i};const Jn={fromAttribute:t=>t===null?null:Uf(t),toAttribute:t=>t===null?null:Mf(t)};let $t=class extends Ke{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,s){var i;super.attributeChangedCallback(e,r,s),this.log(e,r,s),e==="active"&&s==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((i=this.file)==null||i.timeline.pause())):e==="active"&&s==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(i=>i.lang==="cs-CZ");if(r)return r;const s=e.find(i=>i.default===!0);return s||null}render(){return X}};Wt([fe({context:Gn,subscribe:!0}),R()],$t.prototype,"playing",2);Wt([fe({context:zn,subscribe:!0}),R()],$t.prototype,"ms",2);Wt([N({type:String,reflect:!0,attribute:!0})],$t.prototype,"label",2);Wt([N({type:String,reflect:!0,attribute:!0,converter:Jn})],$t.prototype,"start",2);Wt([N({type:String,reflect:!0,attribute:!0,converter:Jn})],$t.prototype,"end",2);Wt([N({type:String,reflect:!0,attribute:!0,converter:Jn})],$t.prototype,"dur",2);Wt([N({type:String,reflect:!0,attribute:!0})],$t.prototype,"active",2);Wt([N({type:String,reflect:!0,attribute:!0})],$t.prototype,"pauseOnActivate",2);Wt([N({type:String,reflect:!0,attribute:!0})],$t.prototype,"say",2);$t=Wt([ue("file-marker")],$t);var jf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,Cr=(t,e,r,s)=>{for(var i=s>1?void 0:s?Wf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&jf(e,r,i),i};let Xt=class extends Ke{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return A`

            <div class="${Bt(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Xt.styles=Ae`
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


    `;Cr([fe({context:qn,subscribe:!0}),R()],Xt.prototype,"duration",2);Cr([fe({context:ki,subscribe:!0}),R()],Xt.prototype,"currentFrame",2);Cr([fe({context:zn,subscribe:!0}),R()],Xt.prototype,"ms",2);Cr([N({type:Number,reflect:!0,attribute:!0})],Xt.prototype,"start",2);Cr([N({type:Number,reflect:!0,attribute:!0})],Xt.prototype,"end",2);Cr([R()],Xt.prototype,"active",2);Xt=Cr([ue("file-marker-timeline")],Xt);var Nf=Object.defineProperty,Hf=Object.getOwnPropertyDescriptor,kl=(t,e,r,s)=>{for(var i=s>1?void 0:s?Hf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Nf(e,r,i),i};let oi=class extends Ke{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return A`
            <div>


            ${this.markers.map(t=>t.active?A`<div class="item">
                    <h2>${t.label}</h2>
                    ${wt(t.innerHTML)}
                    </div>`:X)}

            
            
            </div>

          `}};oi.styles=Ae`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;kl([fe({context:Xn,subscribe:!0})],oi.prototype,"markers",2);oi=kl([ue("file-marks-content")],oi);var Bf=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,As=(t,e,r,s)=>{for(var i=s>1?void 0:s?zf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Bf(e,r,i),i};let xr=class extends Ke{constructor(){super(...arguments),this.graphWidth=0,this.container=Ie(),this.graphRef=Ie(),this.graphs={values:[[]],colors:[]}}onInstanceCreated(t){t.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=t.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(r=>{if(this.graphWidth=r[0].contentRect.width,this.graphRef.value){console.log(">",this.graphRef.value),this.graphRef.value.addEventListener("google-chart-render",console.log);const s=document.getElementsByTagName("svg"),i=document.getElementsByTagName("SVG");console.log(s,i),this.graphRef.value.addEventListener("on",console.log)}}).observe(this.container.value)),this.graphRef.value&&(console.log(">",this.graphRef.value.view.width),this.graphRef.value.addEventListener("mousemove",console.log))}onFailure(){}render(){return A`

            <div>${this.cursor&&Object.entries(this.cursor).map((t,e)=>`${t}: ${e}`).join("; ")}</div>
        
            <div ${je(this.container)}>
                ${this.graphs.colors.length>0?A`<google-chart 
                        ${je(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},width:this.graphWidth,chartArea:{width:"80%",border:"1px solid red"}}}
                        ></google-chart>`:X}
            </div>
        
        `}};xr.styles=Ae`
    
        google-chart {
            width: 100%;
            height: 500px;
        }
    `;As([R()],xr.prototype,"graphWidth",2);As([R()],xr.prototype,"graphs",2);As([fe({context:Vn,subscribe:!0})],xr.prototype,"cursor",2);As([fe({context:Yn,subscribe:!0})],xr.prototype,"cursorSetter",2);xr=As([ue("file-analysis-graph")],xr);var Vf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,hr=(t,e,r,s)=>{for(var i=s>1?void 0:s?Yf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Vf(e,r,i),i};let It=class extends _s{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID));const r=this.analysis;this.selected=r.selected,this.color=r.initialColor,this.dimension=r.width+"x"+r.height,this.value={min:r.min,max:r.max,avg:r.avg},r.file.timeline.isSequence?this.may=r instanceof Dr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:r.graph.state.MIN,max:r.graph.state.MAX,avg:r.graph.state.AVG},r.onMoveOrResize.set(this.UUID,s=>{this.dimension=s.width+"x"+s.height}),r.onValues.set(this.UUID,(s,i,n)=>{this.value={min:s,max:i,avg:n}}),r.graph.onGraphActivation.set(this.UUID,(s,i,n)=>{this.graph={min:s,max:i,avg:n}}),r.onSelected.set(this.UUID,()=>{this.selected=!0}),r.onDeselected.set(this.UUID,()=>{this.selected=!1})}}valueOrNothing(t){return t===void 0?"-":t.toFixed(2)+" °C"}renderCell(t,e,r,s){return A`
            <td class="${e?"may":"mayNot"} ${r?"active":"inactive"}">

                ${e?A`
                        <button
                            @click=${s}
                            style="background-color: ${r?this.color:"transparent"}"
                            title="${r?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(t)}
                        </button>
                    `:this.valueOrNothing(t)}

            </td>
        `}render(){return A`
        
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
        
        `}};It.styles=Ae`
    
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

    `;hr([N()],It.prototype,"analysis",2);hr([R()],It.prototype,"value",2);hr([R()],It.prototype,"graph",2);hr([R()],It.prototype,"may",2);hr([R()],It.prototype,"dimension",2);hr([R()],It.prototype,"color",2);hr([N({type:Boolean,reflect:!0,attribute:!0})],It.prototype,"selected",2);It=hr([ue("file-analysis-table-row")],It);var qf=Object.defineProperty,Gf=Object.getOwnPropertyDescriptor,Ai=(t,e,r,s)=>{for(var i=s>1?void 0:s?Gf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&qf(e,r,i),i};let Vr=class extends Ke{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(t){console.log(t)}onInstanceCreated(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?X:A`


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
                        ${this.hasHighlightedData?A`<thermal-button variant="foreground" @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:X}
                    </th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(t=>A`
                                <file-analysis-table-row
                                    .analysis=${t}
                                ></file-analysis-table-row>
                            `)}
            
            </tbody>
        `}};Vr.styles=Ae`
    
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

        



    `;Ai([R()],Vr.prototype,"analysis",2);Ai([R()],Vr.prototype,"allSelected",2);Ai([R()],Vr.prototype,"hasHighlightedData",2);Vr=Ai([ue("file-analysis-table")],Vr);var Xf=Object.defineProperty,Zf=Object.getOwnPropertyDescriptor,Sr=(t,e,r,s)=>{for(var i=s>1?void 0:s?Zf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Xf(e,r,i),i};let Zt=class extends Ke{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return A`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?A`<file-share-button ></file-share-button>`:X}
              ${this.showabout===!0?A`<app-info-button ></app-info-button>`:X}
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
    `}};Zt.styles=Ae`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Sr([N({type:Number})],Zt.prototype,"from",2);Sr([N({type:Number})],Zt.prototype,"to",2);Sr([N({type:Number})],Zt.prototype,"speed",2);Sr([N({type:String,reflect:!0,attribute:!0})],Zt.prototype,"showembed",2);Sr([N({type:String,reflect:!0,attribute:!0})],Zt.prototype,"showabout",2);Sr([N({type:String,reflect:!0,attribute:!0})],Zt.prototype,"showfullscreen",2);Zt=Sr([ue("file-app")],Zt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fn=t=>t??X;var Kf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,Xr=(t,e,r,s)=>{for(var i=s>1?void 0:s?Qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Kf(e,r,i),i};let _r=class extends _s{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?X:A`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${fn(this.from)} to=${fn(this.to)} speed=${fn(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Xr([N({type:String,reflect:!0})],_r.prototype,"palette",2);Xr([N({type:Number})],_r.prototype,"from",2);Xr([N({type:Number})],_r.prototype,"to",2);Xr([N({type:Number,reflect:!0})],_r.prototype,"speed",2);Xr([N({type:String,reflect:!0})],_r.prototype,"url",2);_r=Xr([ue("thermal-file-app")],_r);var Jf=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,ea=(t,e,r,s)=>{for(var i=s>1?void 0:s?eg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Jf(e,r,i),i};let gs=class extends _s{constructor(){super(...arguments),this.dropinRef=Ie(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return A`

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

                            ${this.loaded===!0?A`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:X}

                            <file-dropin ${je(this.dropinRef)}>

                                <file-app showembed="false" showabout="false"></file-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};gs.styles=Ae`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;ea([R()],gs.prototype,"dropinRef",2);ea([R()],gs.prototype,"loaded",2);gs=ea([ue("thermal-dropin-app")],gs);const gn=window.matchMedia("(prefers-color-scheme: dark)"),ta="thermal-dark-mode",so=()=>{document.body.classList.add(ta)},tg=()=>{document.body.classList.remove(ta)},rg=()=>{gn.matches&&so();const t=e=>{e.matches?so():tg()};gn.addEventListener("change",t),gn.addListener(t)},sg=()=>{const t=document.createElement("link");t.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(t)},ig=An.toString().replaceAll(".","-"),ng=t=>`thermal__${t}__${ig}`,io=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",ng(t)),r.innerHTML=e,document.head.appendChild(r)},ag=()=>{io("rootVariables",`

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


            
        
        `),io("darkModeOverrides",`
        
            body.${ta} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};sg();console.info(`@labir/embed ${An}
    Author: ${ql}
    `);rg();ag();document.addEventListener("DOMContentLoaded",()=>{});
