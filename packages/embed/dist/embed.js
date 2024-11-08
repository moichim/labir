var $h=Object.defineProperty;var Ch=(t,e,r)=>e in t?$h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var o=(t,e,r)=>(Ch(t,typeof e!="symbol"?e+"":e,r),r);const Xn="1.2.51",kh="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds=globalThis,qn=ds.ShadowRoot&&(ds.ShadyCSS===void 0||ds.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kn=Symbol(),Za=new WeakMap;let Fo=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(qn&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Za.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Za.set(r,e))}return e}toString(){return this.cssText}};const Ah=t=>new Fo(typeof t=="string"?t:t+"",void 0,Kn),me=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Fo(r,t,Kn)},Ph=(t,e)=>{if(qn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=ds.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Qa=qn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Ah(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oh,defineProperty:Dh,getOwnPropertyDescriptor:Eh,getOwnPropertyNames:Lh,getOwnPropertySymbols:Th,getPrototypeOf:Rh}=Object,xr=globalThis,Ja=xr.trustedTypes,Mh=Ja?Ja.emptyScript:"",An=xr.reactiveElementPolyfillSupport,yi=(t,e)=>t,gs={toAttribute(t,e){switch(e){case Boolean:t=t?Mh:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Zn=(t,e)=>!Oh(t,e),eo={attribute:!0,type:String,converter:gs,reflect:!1,hasChanged:Zn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),xr.litPropertyMetadata??(xr.litPropertyMetadata=new WeakMap);let Br=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=eo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&Dh(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=Eh(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??eo}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;const e=Rh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){const r=this.properties,i=[...Lh(r),...Th(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(Qa(s))}else e!==void 0&&r.push(Qa(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ph(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:gs).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:gs;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Zn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Br.elementStyles=[],Br.shadowRootOptions={mode:"open"},Br[yi("elementProperties")]=new Map,Br[yi("finalized")]=new Map,An==null||An({ReactiveElement:Br}),(xr.reactiveElementVersions??(xr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=globalThis,vs=bi.trustedTypes,to=vs?vs.createPolicy("lit-html",{createHTML:t=>t}):void 0,jo="$lit$",wr=`lit$${Math.random().toFixed(9).slice(2)}$`,zo="?"+wr,Uh=`<${zo}>`,Ir=document,Si=()=>Ir.createComment(""),_i=t=>t===null||typeof t!="object"&&typeof t!="function",No=Array.isArray,Ih=t=>No(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Pn=`[ 	
\f\r]`,mi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ro=/-->/g,io=/>/g,Tr=RegExp(`>|${Pn}(?:([^\\s"'>=/]+)(${Pn}*=${Pn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),so=/'/g,no=/"/g,Wo=/^(?:script|style|textarea|title)$/i,Fh=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),v=Fh(1),Sr=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),ao=new WeakMap,Mr=Ir.createTreeWalker(Ir,129);function Ho(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return to!==void 0?to.createHTML(e):e}const jh=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",a=mi;for(let l=0;l<r;l++){const c=t[l];let p,f,m=-1,b=0;for(;b<c.length&&(a.lastIndex=b,f=a.exec(c),f!==null);)b=a.lastIndex,a===mi?f[1]==="!--"?a=ro:f[1]!==void 0?a=io:f[2]!==void 0?(Wo.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=Tr):f[3]!==void 0&&(a=Tr):a===Tr?f[0]===">"?(a=s??mi,m=-1):f[1]===void 0?m=-2:(m=a.lastIndex-f[2].length,p=f[1],a=f[3]===void 0?Tr:f[3]==='"'?no:so):a===no||a===so?a=Tr:a===ro||a===io?a=mi:(a=Tr,s=void 0);const S=a===Tr&&t[l+1].startsWith("/>")?" ":"";n+=a===mi?c+Uh:m>=0?(i.push(p),c.slice(0,m)+jo+c.slice(m)+wr+S):c+wr+(m===-2?l:S)}return[Ho(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let In=class Bo{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,c=this.parts,[p,f]=jh(e,r);if(this.el=Bo.createElement(p,i),Mr.currentNode=this.el.content,r===2){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=Mr.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const m of s.getAttributeNames())if(m.endsWith(jo)){const b=f[a++],S=s.getAttribute(m).split(wr),C=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:C[2],strings:S,ctor:C[1]==="."?Nh:C[1]==="?"?Wh:C[1]==="@"?Hh:Ds}),s.removeAttribute(m)}else m.startsWith(wr)&&(c.push({type:6,index:n}),s.removeAttribute(m));if(Wo.test(s.tagName)){const m=s.textContent.split(wr),b=m.length-1;if(b>0){s.textContent=vs?vs.emptyScript:"";for(let S=0;S<b;S++)s.append(m[S],Si()),Mr.nextNode(),c.push({type:2,index:++n});s.append(m[b],Si())}}}else if(s.nodeType===8)if(s.data===zo)c.push({type:2,index:n});else{let m=-1;for(;(m=s.data.indexOf(wr,m+1))!==-1;)c.push({type:7,index:n}),m+=wr.length-1}n++}}static createElement(e,r){const i=Ir.createElement("template");return i.innerHTML=e,i}};function Gr(t,e,r=t,i){var a,l;if(e===Sr)return e;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=_i(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=Gr(t,s._$AS(t,e.values),s,i)),e}let zh=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Ir).importNode(r,!0);Mr.currentNode=s;let n=Mr.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let p;c.type===2?p=new Ui(n,n.nextSibling,this,e):c.type===1?p=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(p=new Bh(n,this,e)),this._$AV.push(p),c=i[++l]}a!==(c==null?void 0:c.index)&&(n=Mr.nextNode(),a++)}return Mr.currentNode=Ir,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class Ui{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Gr(this,e,r),_i(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==Sr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ih(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==U&&_i(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ir.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=In.createElement(Ho(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new zh(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=ao.get(e.strings);return r===void 0&&ao.set(e.strings,r=new In(e)),r}k(e){No(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new Ui(this.S(Si()),this.S(Si()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let Ds=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}_$AI(e,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Gr(this,e,r,0),a=!_i(e)||e!==this._$AH&&e!==Sr,a&&(this._$AH=e);else{const l=e;let c,p;for(e=n[0],c=0;c<n.length-1;c++)p=Gr(this,l[i+c],r,c),p===Sr&&(p=this._$AH[c]),a||(a=!_i(p)||p!==this._$AH[c]),p===U?e=U:e!==U&&(e+=(p??"")+n[c+1]),this._$AH[c]=p}a&&!s&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Nh=class extends Ds{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}};class Wh extends Ds{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}}class Hh extends Ds{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Gr(this,e,r,0)??U)===Sr)return;const i=this._$AH,s=e===U&&i!==U||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==U&&(i===U||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let Bh=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Gr(this,e)}};const On=bi.litHtmlPolyfillSupport;On==null||On(In,Ui),(bi.litHtmlVersions??(bi.litHtmlVersions=[])).push("3.1.4");const Vh=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Ui(e.insertBefore(Si(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class extends Br{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Sr}};var Io;ot._$litElement$=!0,ot.finalized=!0,(Io=globalThis.litElementHydrateSupport)==null||Io.call(globalThis,{LitElement:ot});const Dn=globalThis.litElementPolyfillSupport;Dn==null||Dn({LitElement:ot});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yh={attribute:!0,type:String,converter:gs,reflect:!1,hasChanged:Zn},Gh=(t=Yh,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,c,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const c=this[a];e.call(this,l),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+i)};function y(t){return(e,r)=>typeof r=="object"?Gh(t,e,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(t){return y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xh=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ii(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Xh(e,r,{get(){var c;const a=(c=this.renderRoot)==null?void 0:c.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const qh={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function os(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function ls(t){return t.toString().indexOf("`")===-1}ls(t=>t``)||ls(t=>t`\0`)||ls(t=>t`\n`)||ls(t=>t`\u0000`);os``&&os`\0`&&os`\n`&&os`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Kh="google#safe";function Zh(){if(typeof window<"u")return window.trustedTypes}function Vo(){var t;return(t=Zh())!==null&&t!==void 0?t:null}let hs;function Qh(){var t,e;if(hs===void 0)try{hs=(e=(t=Vo())===null||t===void 0?void 0:t.createPolicy(Kh,{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r}))!==null&&e!==void 0?e:null}catch{hs=null}return hs}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Yo{constructor(e,r){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function oo(t){var e;const r=t,i=(e=Qh())===null||e===void 0?void 0:e.createScriptURL(r);return i??new Yo(r,qh)}function Jh(t){var e;if(!((e=Vo())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof Yo)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let r="";throw new Error(r)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function ec(t,...e){if(e.length===0)return oo(t[0]);t[0].toLowerCase();let r=t[0];for(let i=0;i<e.length;i++)r+=encodeURIComponent(e[i])+t[i+1];return oo(r)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function tc(t){var e;const r=t.document,i=(e=r.querySelector)===null||e===void 0?void 0:e.call(r,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function rc(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,r=tc(e||window);r&&t.setAttribute("nonce",r)}function ic(t,e,r){t.src=Jh(e),rc(t)}/**
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
 */const sc=new Promise((t,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),ic(r,ec`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}});async function Go(t={}){await sc;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function lo(t){if(await Go(),t==null)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw t.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function nc(t){return await Go(),new google.visualization.ChartWrapper({container:t})}function It(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Fr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Xo=6048e5,ac=864e5;let oc={};function Es(){return oc}function $i(t,e){var l,c,p,f;const r=Es(),i=(e==null?void 0:e.weekStartsOn)??((c=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??r.weekStartsOn??((f=(p=r.locale)==null?void 0:p.options)==null?void 0:f.weekStartsOn)??0,s=It(t),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function ys(t){return $i(t,{weekStartsOn:1})}function qo(t){const e=It(t),r=e.getFullYear(),i=Fr(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=ys(i),n=Fr(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=ys(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function ho(t){const e=It(t);return e.setHours(0,0,0,0),e}function co(t){const e=It(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function lc(t,e){const r=ho(t),i=ho(e),s=+r-co(r),n=+i-co(i);return Math.round((s-n)/ac)}function hc(t){const e=qo(t),r=Fr(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),ys(r)}function cc(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ko(t){if(!cc(t)&&typeof t!="number")return!1;const e=It(t);return!isNaN(Number(e))}function dc(t){const e=It(t),r=Fr(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const uc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},pc=(t,e,r)=>{let i;const s=uc[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function En(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const fc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},mc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},gc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},vc={date:En({formats:fc,defaultWidth:"full"}),time:En({formats:mc,defaultWidth:"full"}),dateTime:En({formats:gc,defaultWidth:"full"})},yc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},bc=(t,e,r,i)=>yc[t];function gi(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const wc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},xc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Sc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},_c={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$c={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Cc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},kc=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Ac={ordinalNumber:kc,era:gi({values:wc,defaultWidth:"wide"}),quarter:gi({values:xc,defaultWidth:"wide",argumentCallback:t=>t-1}),month:gi({values:Sc,defaultWidth:"wide"}),day:gi({values:_c,defaultWidth:"wide"}),dayPeriod:gi({values:$c,defaultWidth:"wide",formattingValues:Cc,defaultFormattingWidth:"wide"})};function vi(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(l)?Oc(l,m=>m.test(a)):Pc(l,m=>m.test(a));let p;p=t.valueCallback?t.valueCallback(c):c,p=r.valueCallback?r.valueCallback(p):p;const f=e.slice(a.length);return{value:p,rest:f}}}function Pc(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Oc(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Dc(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const Ec=/^(\d+)(th|st|nd|rd)?/i,Lc=/\d+/i,Tc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Rc={any:[/^b/i,/^(a|c)/i]},Mc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Uc={any:[/1/i,/2/i,/3/i,/4/i]},Ic={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Fc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},jc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zc={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Nc={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Wc={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Hc={ordinalNumber:Dc({matchPattern:Ec,parsePattern:Lc,valueCallback:t=>parseInt(t,10)}),era:vi({matchPatterns:Tc,defaultMatchWidth:"wide",parsePatterns:Rc,defaultParseWidth:"any"}),quarter:vi({matchPatterns:Mc,defaultMatchWidth:"wide",parsePatterns:Uc,defaultParseWidth:"any",valueCallback:t=>t+1}),month:vi({matchPatterns:Ic,defaultMatchWidth:"wide",parsePatterns:Fc,defaultParseWidth:"any"}),day:vi({matchPatterns:jc,defaultMatchWidth:"wide",parsePatterns:zc,defaultParseWidth:"any"}),dayPeriod:vi({matchPatterns:Nc,defaultMatchWidth:"any",parsePatterns:Wc,defaultParseWidth:"any"})},Bc={code:"en-US",formatDistance:pc,formatLong:vc,formatRelative:bc,localize:Ac,match:Hc,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Vc(t){const e=It(t);return lc(e,dc(e))+1}function Yc(t){const e=It(t),r=+ys(e)-+hc(e);return Math.round(r/Xo)+1}function Zo(t,e){var f,m,b,S;const r=It(t),i=r.getFullYear(),s=Es(),n=(e==null?void 0:e.firstWeekContainsDate)??((m=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??s.firstWeekContainsDate??((S=(b=s.locale)==null?void 0:b.options)==null?void 0:S.firstWeekContainsDate)??1,a=Fr(t,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=$i(a,e),c=Fr(t,0);c.setFullYear(i,0,n),c.setHours(0,0,0,0);const p=$i(c,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function Gc(t,e){var l,c,p,f;const r=Es(),i=(e==null?void 0:e.firstWeekContainsDate)??((c=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??r.firstWeekContainsDate??((f=(p=r.locale)==null?void 0:p.options)==null?void 0:f.firstWeekContainsDate)??1,s=Zo(t,e),n=Fr(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),$i(n,e)}function Xc(t,e){const r=It(t),i=+$i(r,e)-+Gc(r,e);return Math.round(i/Xo)+1}function Se(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const br={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return Se(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):Se(r+1,2)},d(t,e){return Se(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return Se(t.getHours()%12||12,e.length)},H(t,e){return Se(t.getHours(),e.length)},m(t,e){return Se(t.getMinutes(),e.length)},s(t,e){return Se(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return Se(s,e.length)}},Wr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},uo={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return br.y(t,e)},Y:function(t,e,r,i){const s=Zo(t,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return Se(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):Se(n,e.length)},R:function(t,e){const r=qo(t);return Se(r,e.length)},u:function(t,e){const r=t.getFullYear();return Se(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return Se(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return Se(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return br.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return Se(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Xc(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):Se(s,e.length)},I:function(t,e,r){const i=Yc(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):Se(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):br.d(t,e)},D:function(t,e,r){const i=Vc(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Se(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return Se(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return Se(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return Se(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=Wr.noon:i===0?s=Wr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=Wr.evening:i>=12?s=Wr.afternoon:i>=4?s=Wr.morning:s=Wr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return br.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):br.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):br.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):br.s(t,e)},S:function(t,e){return br.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return fo(i);case"XXXX":case"XX":return Rr(i);case"XXXXX":case"XXX":default:return Rr(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return fo(i);case"xxxx":case"xx":return Rr(i);case"xxxxx":case"xxx":default:return Rr(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+po(i,":");case"OOOO":default:return"GMT"+Rr(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+po(i,":");case"zzzz":default:return"GMT"+Rr(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return Se(i,e.length)},T:function(t,e,r){const i=t.getTime();return Se(i,e.length)}};function po(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+Se(n,2)}function fo(t,e){return t%60===0?(t>0?"-":"+")+Se(Math.abs(t)/60,2):Rr(t,e)}function Rr(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Se(Math.trunc(i/60),2),n=Se(i%60,2);return r+s+e+n}const mo=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Qo=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},qc=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return mo(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",mo(i,e)).replace("{{time}}",Qo(s,e))},Kc={p:Qo,P:qc},Zc=/^D+$/,Qc=/^Y+$/,Jc=["D","DD","YY","YYYY"];function ed(t){return Zc.test(t)}function td(t){return Qc.test(t)}function rd(t,e,r){const i=id(t,e,r);if(console.warn(i),Jc.includes(t))throw new RangeError(i)}function id(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const sd=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ad=/^'([^]*?)'?$/,od=/''/g,ld=/[a-zA-Z]/;function _r(t,e,r){var f,m,b,S;const i=Es(),s=i.locale??Bc,n=i.firstWeekContainsDate??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=i.weekStartsOn??((S=(b=i.locale)==null?void 0:b.options)==null?void 0:S.weekStartsOn)??0,l=It(t);if(!Ko(l))throw new RangeError("Invalid time value");let c=e.match(nd).map(C=>{const A=C[0];if(A==="p"||A==="P"){const k=Kc[A];return k(C,s.formatLong)}return C}).join("").match(sd).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const A=C[0];if(A==="'")return{isToken:!1,value:hd(C)};if(uo[A])return{isToken:!0,value:C};if(A.match(ld))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:C}});s.localize.preprocessor&&(c=s.localize.preprocessor(l,c));const p={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return c.map(C=>{if(!C.isToken)return C.value;const A=C.value;(td(A)||ed(A))&&rd(A,e,String(t));const k=uo[A[0]];return k(l,A,s.localize,p)}).join("")}function hd(t){const e=t.match(ad);return e?e[1].replace(od,"'"):t}function Ln(t,e){const r=It(t);if(!Ko(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const c=Se(r.getDate(),2),p=Se(r.getMonth()+1,2);n=`${Se(r.getFullYear(),4)}${a}${p}${a}${c}`}if(s!=="date"){const c=Se(r.getHours(),2),p=Se(r.getMinutes(),2),f=Se(r.getSeconds(),2);n=`${n}${n===""?"":" "}${c}${l}${p}${l}${f}`}return n}var cd={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},dd=`\r
`,ud="\uFEFF",Ls=t=>Object.assign({},cd,t);class pd extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class fd extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class md extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class gd extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var ai=t=>t,Ct=t=>t,wi=ai,Ts=ai,Xr=ai,go=ai,vo=ai,vd=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},yd=t=>go(typeof t=="object"?t.key:t),bd=t=>vo(typeof t=="object"?t.displayLabel:t),wd=(t,...e)=>e.reduce((r,i)=>i(r),t),xd=t=>e=>t.useBom?Ts(Ct(e)+ud):e,Sd=t=>e=>t.showTitle?Qn(Ts(Ct(e)+t.title))(Xr("")):e,Qn=t=>e=>Ts(Ct(t)+Ct(e)+dd),Jo=t=>(e,r)=>_d(t)(Xr(Ct(e)+Ct(r))),_d=t=>e=>ai(Ct(e)+t.fieldSeparator),$d=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new fd("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Xr("");for(let s=0;s<e.length;s++){const n=bd(e[s]);i=Jo(t)(i,el(t,Ct(n)))}return i=Xr(Ct(i).slice(0,-1)),Qn(r)(i)},Cd=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=Xr("");for(let l=0;l<e.length;l++){const c=yd(e[l]),p=r[n][Ct(c)];a=Jo(t)(a,el(t,p))}a=Xr(Ct(a).slice(0,-1)),s=Qn(s)(a)}return s},kd=t=>+t===t&&(!isFinite(t)||!!(t%1)),Ad=(t,e)=>{if(kd(e)){if(t.decimalSeparator==="locale")return wi(e.toLocaleString());if(t.decimalSeparator)return wi(e.toString().replace(".",t.decimalSeparator))}return wi(e.toString())},us=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+vd(e,t.quoteCharacter)+t.quoteCharacter),wi(r)},Pd=(t,e)=>{const r=e?"true":"false";return wi(t.boolDisplay[r])},Od=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?us(t,t.replaceUndefinedWith+""):e===null?us(t,"null"):us(t,""),el=(t,e)=>{if(typeof e=="number")return Ad(t,e);if(typeof e=="string")return us(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Pd(t,e);if(e===null||typeof e>"u")return Od(t,e);throw new gd(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Dd=t=>e=>{const r=Ls(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=wd(Ts(""),xd(r),Sd(r),$d(r,i),Cd(r,i,e));if(Ct(s).length<1)throw new pd("Output is empty. Is your data formatted correctly?");return s},Ed=t=>e=>{const r=Ls(t),i=Ct(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Ld=t=>e=>{if(!window)throw new md("Downloading only supported in a browser environment.");const r=Ed(t)(e),i=Ls(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rd(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var Fn={exports:{}};const Md={},Ud=Object.freeze(Object.defineProperty({__proto__:null,default:Md},Symbol.toStringTag,{value:"Module"})),Hr=Rd(Ud);/**
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
 */(function(t,e){(function(r,i){i(e)})(Td,function(r){var i={},s={exports:{}};(function(P){var L=function(ee){return typeof ee<"u"&&ee.versions!=null&&ee.versions.node!=null&&ee+""=="[object process]"};P.exports.isNode=L,P.exports.platform=typeof process<"u"&&L(process)?"node":"browser";var T=P.exports.platform==="node"&&Hr;P.exports.isMainThread=P.exports.platform==="node"?(!T||T.isMainThread)&&!process.connected:typeof Window<"u",P.exports.cpus=P.exports.platform==="browser"?self.navigator.hardwareConcurrency:Hr.cpus().length})(s);var n=s.exports,a={},l;function c(){if(l)return a;l=1;function P(ee,ke){var oe=this;if(!(this instanceof P))throw new SyntaxError("Constructor must be called with the new operator");if(typeof ee!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Me=[],_e=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var H=function(de,be){Me.push(de),_e.push(be)};this.then=function(O,de){return new P(function(be,qe){var nt=O?L(O,be,qe):be,Xt=de?L(de,be,qe):qe;H(nt,Xt)},oe)};var $e=function(de){return oe.resolved=!0,oe.rejected=!1,oe.pending=!1,Me.forEach(function(be){be(de)}),H=function(qe,nt){qe(de)},$e=$=function(){},oe},$=function(de){return oe.resolved=!1,oe.rejected=!0,oe.pending=!1,_e.forEach(function(be){be(de)}),H=function(qe,nt){nt(de)},$e=$=function(){},oe};this.cancel=function(){return ke?ke.cancel():$(new T),oe},this.timeout=function(O){if(ke)ke.timeout(O);else{var de=setTimeout(function(){$(new R("Promise timed out after "+O+" ms"))},O);oe.always(function(){clearTimeout(de)})}return oe},ee(function(O){$e(O)},function(O){$(O)})}function L(ee,ke,oe){return function(Me){try{var _e=ee(Me);_e&&typeof _e.then=="function"&&typeof _e.catch=="function"?_e.then(ke,oe):ke(_e)}catch(H){oe(H)}}}P.prototype.catch=function(ee){return this.then(null,ee)},P.prototype.always=function(ee){return this.then(ee,ee)},P.all=function(ee){return new P(function(ke,oe){var Me=ee.length,_e=[];Me?ee.forEach(function(H,$e){H.then(function($){_e[$e]=$,Me--,Me==0&&ke(_e)},function($){Me=0,oe($)})}):ke(_e)})},P.defer=function(){var ee={};return ee.promise=new P(function(ke,oe){ee.resolve=ke,ee.reject=oe}),ee};function T(ee){this.message=ee||"promise cancelled",this.stack=new Error().stack}T.prototype=new Error,T.prototype.constructor=Error,T.prototype.name="CancellationError",P.CancellationError=T;function R(ee){this.message=ee||"timeout exceeded",this.stack=new Error().stack}return R.prototype=new Error,R.prototype.constructor=Error,R.prototype.name="TimeoutError",P.TimeoutError=R,a.Promise=P,a}function p(P,L){(L==null||L>P.length)&&(L=P.length);for(var T=0,R=Array(L);T<L;T++)R[T]=P[T];return R}function f(P,L){var T=typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(!T){if(Array.isArray(P)||(T=z(P))||L){T&&(P=T);var R=0,ee=function(){};return{s:ee,n:function(){return R>=P.length?{done:!0}:{done:!1,value:P[R++]}},e:function(_e){throw _e},f:ee}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ke,oe=!0,Me=!1;return{s:function(){T=T.call(P)},n:function(){var _e=T.next();return oe=_e.done,_e},e:function(_e){Me=!0,ke=_e},f:function(){try{oe||T.return==null||T.return()}finally{if(Me)throw ke}}}}function m(P,L,T){return(L=A(L))in P?Object.defineProperty(P,L,{value:T,enumerable:!0,configurable:!0,writable:!0}):P[L]=T,P}function b(P,L){var T=Object.keys(P);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(P);L&&(R=R.filter(function(ee){return Object.getOwnPropertyDescriptor(P,ee).enumerable})),T.push.apply(T,R)}return T}function S(P){for(var L=1;L<arguments.length;L++){var T=arguments[L]!=null?arguments[L]:{};L%2?b(Object(T),!0).forEach(function(R){m(P,R,T[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(T)):b(Object(T)).forEach(function(R){Object.defineProperty(P,R,Object.getOwnPropertyDescriptor(T,R))})}return P}function C(P,L){if(typeof P!="object"||!P)return P;var T=P[Symbol.toPrimitive];if(T!==void 0){var R=T.call(P,L||"default");if(typeof R!="object")return R;throw new TypeError("@@toPrimitive must return a primitive value.")}return(L==="string"?String:Number)(P)}function A(P){var L=C(P,"string");return typeof L=="symbol"?L:L+""}function k(P){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},k(P)}function z(P,L){if(P){if(typeof P=="string")return p(P,L);var T={}.toString.call(P).slice(8,-1);return T==="Object"&&P.constructor&&(T=P.constructor.name),T==="Map"||T==="Set"?Array.from(P):T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)?p(P,L):void 0}}var I={exports:{}},N={},V;function W(){return V||(V=1,N.validateOptions=function(L,T,R){if(L){var ee=L?Object.keys(L):[],ke=ee.find(function(Me){return!T.includes(Me)});if(ke)throw new Error('Object "'+R+'" contains an unknown option "'+ke+'"');var oe=T.find(function(Me){return Object.prototype[Me]&&!ee.includes(Me)});if(oe)throw new Error('Object "'+R+'" contains an inherited option "'+oe+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return L}},N.workerOptsNames=["credentials","name","type"],N.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],N.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),N}var he,E;function G(){return E||(E=1,he=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),he}var X;function Q(){if(X)return I.exports;X=1;var P=c(),L=P.Promise,T=n,R=W(),ee=R.validateOptions,ke=R.forkOptsNames,oe=R.workerThreadOptsNames,Me=R.workerOptsNames,_e="__workerpool-terminate__";function H(){var J=$();if(!J)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return J}function $e(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function $(){try{return Hr}catch(J){if(k(J)==="object"&&J!==null&&J.code==="MODULE_NOT_FOUND")return null;throw J}}function O(){if(T.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var J=new Blob([G()],{type:"text/javascript"});return window.URL.createObjectURL(J)}else return __dirname+"/worker.js"}function de(J,pe){if(pe.workerType==="web")return $e(),be(J,pe.workerOpts,Worker);if(pe.workerType==="thread")return D=H(),qe(J,D,pe);if(pe.workerType==="process"||!pe.workerType)return nt(J,Xt(pe),Hr);if(T.platform==="browser")return $e(),be(J,pe.workerOpts,Worker);var D=$();return D?qe(J,D,pe):nt(J,Xt(pe),Hr)}function be(J,pe,D){ee(pe,Me,"workerOpts");var ae=new D(J,pe);return ae.isBrowserWorker=!0,ae.on=function(Ae,Ce){this.addEventListener(Ae,function(We){Ce(We.data)})},ae.send=function(Ae,Ce){this.postMessage(Ae,Ce)},ae}function qe(J,pe,D){var ae,Ae;ee(D==null?void 0:D.workerThreadOpts,oe,"workerThreadOpts");var Ce=new pe.Worker(J,S({stdout:(ae=D==null?void 0:D.emitStdStreams)!==null&&ae!==void 0?ae:!1,stderr:(Ae=D==null?void 0:D.emitStdStreams)!==null&&Ae!==void 0?Ae:!1},D==null?void 0:D.workerThreadOpts));return Ce.isWorkerThread=!0,Ce.send=function(We,we){this.postMessage(We,we)},Ce.kill=function(){return this.terminate(),!0},Ce.disconnect=function(){this.terminate()},D!=null&&D.emitStdStreams&&(Ce.stdout.on("data",function(We){return Ce.emit("stdout",We)}),Ce.stderr.on("data",function(We){return Ce.emit("stderr",We)})),Ce}function nt(J,pe,D){ee(pe.forkOpts,ke,"forkOpts");var ae=D.fork(J,pe.forkArgs,pe.forkOpts),Ae=ae.send;return ae.send=function(Ce){return Ae.call(ae,Ce)},pe.emitStdStreams&&(ae.stdout.on("data",function(Ce){return ae.emit("stdout",Ce)}),ae.stderr.on("data",function(Ce){return ae.emit("stderr",Ce)})),ae.isChildProcess=!0,ae}function Xt(J){J=J||{};var pe=process.execArgv.join(" "),D=pe.indexOf("--inspect")!==-1,ae=pe.indexOf("--debug-brk")!==-1,Ae=[];return D&&(Ae.push("--inspect="+J.debugPort),ae&&Ae.push("--debug-brk")),process.execArgv.forEach(function(Ce){Ce.indexOf("--max-old-space-size")>-1&&Ae.push(Ce)}),Object.assign({},J,{forkArgs:J.forkArgs,forkOpts:Object.assign({},J.forkOpts,{execArgv:(J.forkOpts&&J.forkOpts.execArgv||[]).concat(Ae),stdio:J.emitStdStreams?"pipe":void 0})})}function _t(J){for(var pe=new Error(""),D=Object.keys(J),ae=0;ae<D.length;ae++)pe[D[ae]]=J[D[ae]];return pe}function Dt(J,pe){if(Object.keys(J.processing).length===1){var D=Object.values(J.processing)[0];D.options&&typeof D.options.on=="function"&&D.options.on(pe)}}function vr(J,pe){var D=this,ae=pe||{};this.script=J||O(),this.worker=de(this.script,ae),this.debugPort=ae.debugPort,this.forkOpts=ae.forkOpts,this.forkArgs=ae.forkArgs,this.workerOpts=ae.workerOpts,this.workerThreadOpts=ae.workerThreadOpts,this.workerTerminateTimeout=ae.workerTerminateTimeout,J||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(we){Dt(D,{stdout:we.toString()})}),this.worker.on("stderr",function(we){Dt(D,{stderr:we.toString()})}),this.worker.on("message",function(we){if(!D.terminated)if(typeof we=="string"&&we==="ready")D.worker.ready=!0,Ce();else{var ft=we.id,Ke=D.processing[ft];Ke!==void 0&&(we.isEvent?Ke.options&&typeof Ke.options.on=="function"&&Ke.options.on(we.payload):(delete D.processing[ft],D.terminating===!0&&D.terminate(),we.error?Ke.resolver.reject(_t(we.error)):Ke.resolver.resolve(we.result)))}});function Ae(we){D.terminated=!0;for(var ft in D.processing)D.processing[ft]!==void 0&&D.processing[ft].resolver.reject(we);D.processing=Object.create(null)}function Ce(){var we=f(D.requestQueue.splice(0)),ft;try{for(we.s();!(ft=we.n()).done;){var Ke=ft.value;D.worker.send(Ke.message,Ke.transfer)}}catch(qi){we.e(qi)}finally{we.f()}}var We=this.worker;this.worker.on("error",Ae),this.worker.on("exit",function(we,ft){var Ke=`Workerpool Worker terminated Unexpectedly
`;Ke+="    exitCode: `"+we+"`\n",Ke+="    signalCode: `"+ft+"`\n",Ke+="    workerpool.script: `"+D.script+"`\n",Ke+="    spawnArgs: `"+We.spawnargs+"`\n",Ke+="    spawnfile: `"+We.spawnfile+"`\n",Ke+="    stdout: `"+We.stdout+"`\n",Ke+="    stderr: `"+We.stderr+"`\n",Ae(new Error(Ke))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return vr.prototype.methods=function(){return this.exec("methods")},vr.prototype.exec=function(J,pe,D,ae){D||(D=L.defer());var Ae=++this.lastId;this.processing[Ae]={id:Ae,resolver:D,options:ae};var Ce={message:{id:Ae,method:J,params:pe},transfer:ae&&ae.transfer};this.terminated?D.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Ce.message,Ce.transfer):this.requestQueue.push(Ce);var We=this;return D.promise.catch(function(we){if(we instanceof L.CancellationError||we instanceof L.TimeoutError)return delete We.processing[Ae],We.terminateAndNotify(!0).then(function(){throw we},function(ft){throw ft});throw we})},vr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},vr.prototype.terminate=function(J,pe){var D=this;if(J){for(var ae in this.processing)this.processing[ae]!==void 0&&this.processing[ae].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof pe=="function"&&(this.terminationHandler=pe),this.busy())this.terminating=!0;else{var Ae=function(we){if(D.terminated=!0,D.cleaning=!1,D.worker!=null&&D.worker.removeAllListeners&&D.worker.removeAllListeners("message"),D.worker=null,D.terminating=!1,D.terminationHandler)D.terminationHandler(we,D);else if(we)throw we};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ae(new Error("worker already killed!"));return}var Ce=setTimeout(function(){D.worker&&D.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Ce),D.worker&&(D.worker.killed=!0),Ae()}),this.worker.ready?this.worker.send(_e):this.requestQueue.push({message:_e}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ae()}},vr.prototype.terminateAndNotify=function(J,pe){var D=L.defer();return pe&&D.promise.timeout(pe),this.terminate(J,function(ae,Ae){ae?D.reject(ae):D.resolve(Ae)}),D.promise},I.exports=vr,I.exports._tryRequireWorkerThreads=$,I.exports._setupProcessWorker=nt,I.exports._setupBrowserWorker=be,I.exports._setupWorkerThreadWorker=qe,I.exports.ensureWorkerThreads=H,I.exports}var ce,q;function se(){if(q)return ce;q=1;var P=65535;ce=L;function L(){this.ports=Object.create(null),this.length=0}return L.prototype.nextAvailableStartingAt=function(T){for(;this.ports[T]===!0;)T++;if(T>=P)throw new Error("WorkerPool debug port limit reached: "+T+">= "+P);return this.ports[T]=!0,this.length++,T},L.prototype.releasePort=function(T){delete this.ports[T],this.length--},ce}var ne,ue;function Re(){if(ue)return ne;ue=1;var P=c(),L=P.Promise,T=Q(),R=n,ee=se(),ke=new ee;function oe($,O){typeof $=="string"?this.script=$||null:(this.script=null,O=$),this.workers=[],this.tasks=[],O=O||{},this.forkArgs=Object.freeze(O.forkArgs||[]),this.forkOpts=Object.freeze(O.forkOpts||{}),this.workerOpts=Object.freeze(O.workerOpts||{}),this.workerThreadOpts=Object.freeze(O.workerThreadOpts||{}),this.debugPortStart=O.debugPortStart||43210,this.nodeWorker=O.nodeWorker,this.workerType=O.workerType||O.nodeWorker||"auto",this.maxQueueSize=O.maxQueueSize||1/0,this.workerTerminateTimeout=O.workerTerminateTimeout||1e3,this.onCreateWorker=O.onCreateWorker||function(){return null},this.onTerminateWorker=O.onTerminateWorker||function(){return null},this.emitStdStreams=O.emitStdStreams||!1,O&&"maxWorkers"in O?(Me(O.maxWorkers),this.maxWorkers=O.maxWorkers):this.maxWorkers=Math.max((R.cpus||4)-1,1),O&&"minWorkers"in O&&(O.minWorkers==="max"?this.minWorkers=this.maxWorkers:(_e(O.minWorkers),this.minWorkers=O.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&T.ensureWorkerThreads()}oe.prototype.exec=function($,O,de){if(O&&!Array.isArray(O))throw new TypeError('Array expected as argument "params"');if(typeof $=="string"){var be=L.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var qe=this.tasks,nt={method:$,params:O,resolver:be,timeout:null,options:de};qe.push(nt);var Xt=be.promise.timeout;return be.promise.timeout=function(Dt){return qe.indexOf(nt)!==-1?(nt.timeout=Dt,be.promise):Xt.call(be.promise,Dt)},this._next(),be.promise}else{if(typeof $=="function")return this.exec("run",[String($),O],de);throw new TypeError('Function or string expected as argument "method"')}},oe.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var $=this;return this.exec("methods").then(function(O){var de={};return O.forEach(function(be){de[be]=function(){return $.exec(be,Array.prototype.slice.call(arguments))}}),de})},oe.prototype._next=function(){if(this.tasks.length>0){var $=this._getWorker();if($){var O=this,de=this.tasks.shift();if(de.resolver.promise.pending){var be=$.exec(de.method,de.params,de.resolver,de.options).then(O._boundNext).catch(function(){if($.terminated)return O._removeWorker($)}).then(function(){O._next()});typeof de.timeout=="number"&&be.timeout(de.timeout)}else O._next()}}},oe.prototype._getWorker=function(){for(var $=this.workers,O=0;O<$.length;O++){var de=$[O];if(de.busy()===!1)return de}return $.length<this.maxWorkers?(de=this._createWorkerHandler(),$.push(de),de):null},oe.prototype._removeWorker=function($){var O=this;return ke.releasePort($.debugPort),this._removeWorkerFromList($),this._ensureMinWorkers(),new L(function(de,be){$.terminate(!1,function(qe){O.onTerminateWorker({forkArgs:$.forkArgs,forkOpts:$.forkOpts,workerThreadOpts:$.workerThreadOpts,script:$.script}),qe?be(qe):de($)})})},oe.prototype._removeWorkerFromList=function($){var O=this.workers.indexOf($);O!==-1&&this.workers.splice(O,1)},oe.prototype.terminate=function($,O){var de=this;this.tasks.forEach(function(_t){_t.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var be=function(Dt){ke.releasePort(Dt.debugPort),this._removeWorkerFromList(Dt)},qe=be.bind(this),nt=[],Xt=this.workers.slice();return Xt.forEach(function(_t){var Dt=_t.terminateAndNotify($,O).then(qe).always(function(){de.onTerminateWorker({forkArgs:_t.forkArgs,forkOpts:_t.forkOpts,workerThreadOpts:_t.workerThreadOpts,script:_t.script})});nt.push(Dt)}),L.all(nt)},oe.prototype.stats=function(){var $=this.workers.length,O=this.workers.filter(function(de){return de.busy()}).length;return{totalWorkers:$,busyWorkers:O,idleWorkers:$-O,pendingTasks:this.tasks.length,activeTasks:O}},oe.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var $=this.workers.length;$<this.minWorkers;$++)this.workers.push(this._createWorkerHandler())},oe.prototype._createWorkerHandler=function(){var $=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new T($.script||this.script,{forkArgs:$.forkArgs||this.forkArgs,forkOpts:$.forkOpts||this.forkOpts,workerOpts:$.workerOpts||this.workerOpts,workerThreadOpts:$.workerThreadOpts||this.workerThreadOpts,debugPort:ke.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Me($){if(!H($)||!$e($)||$<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function _e($){if(!H($)||!$e($)||$<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function H($){return typeof $=="number"}function $e($){return Math.round($)==$}return ne=oe,ne}var He={},Ie,xt;function St(){if(xt)return Ie;xt=1;function P(L,T){this.message=L,this.transfer=T}return Ie=P,Ie}var ar;function Vt(){return ar||(ar=1,function(P){var L=St(),T="__workerpool-terminate__",R={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")R.on=function(H,$e){addEventListener(H,function($){$e($.data)})},R.send=function(H,$e){$e?postMessage(H,$e):postMessage(H)};else if(typeof process<"u"){var ee;try{ee=Hr}catch(H){if(!(k(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND"))throw H}if(ee&&ee.parentPort!==null){var ke=ee.parentPort;R.send=ke.postMessage.bind(ke),R.on=ke.on.bind(ke),R.exit=process.exit.bind(process)}else R.on=process.on.bind(process),R.send=function(H){process.send(H)},R.on("disconnect",function(){process.exit(1)}),R.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function oe(H){return Object.getOwnPropertyNames(H).reduce(function($e,$){return Object.defineProperty($e,$,{value:H[$],enumerable:!0})},{})}function Me(H){return H&&typeof H.then=="function"&&typeof H.catch=="function"}R.methods={},R.methods.run=function($e,$){var O=new Function("return ("+$e+").apply(null, arguments);");return O.apply(O,$)},R.methods.methods=function(){return Object.keys(R.methods)},R.terminationHandler=void 0,R.cleanupAndExit=function(H){var $e=function(){R.exit(H)};if(!R.terminationHandler)return $e();var $=R.terminationHandler(H);Me($)?$.then($e,$e):$e()};var _e=null;R.on("message",function(H){if(H===T)return R.cleanupAndExit(0);try{var $e=R.methods[H.method];if($e){_e=H.id;var $=$e.apply($e,H.params);Me($)?$.then(function(O){O instanceof L?R.send({id:H.id,result:O.message,error:null},O.transfer):R.send({id:H.id,result:O,error:null}),_e=null}).catch(function(O){R.send({id:H.id,result:null,error:oe(O)}),_e=null}):($ instanceof L?R.send({id:H.id,result:$.message,error:null},$.transfer):R.send({id:H.id,result:$,error:null}),_e=null)}else throw new Error('Unknown method "'+H.method+'"')}catch(O){R.send({id:H.id,result:null,error:oe(O)})}}),R.register=function(H,$e){if(H)for(var $ in H)H.hasOwnProperty($)&&(R.methods[$]=H[$]);$e&&(R.terminationHandler=$e.onTerminate),R.send("ready")},R.emit=function(H){if(_e){if(H instanceof L){R.send({id:_e,isEvent:!0,payload:H.message},H.transfer);return}R.send({id:_e,isEvent:!0,payload:H})}},P.add=R.register,P.emit=R.emit}(He)),He}var Yt=n.platform,Gt=n.isMainThread,jt=n.cpus;function ze(P,L){var T=Re();return new T(P,L)}var st=i.pool=ze;function Dr(P,L){var T=Vt();T.add(P,L)}var pt=i.worker=Dr;function Ne(P){var L=Vt();L.emit(P)}var Xi=i.workerEmit=Ne,Ks=c(),Ze=Ks.Promise,Zs=i.Promise=Ze,Qs=i.Transfer=St(),Js=i.platform=Yt,en=i.isMainThread=Gt,tn=i.cpus=jt;r.Promise=Zs,r.Transfer=Qs,r.cpus=tn,r.default=i,r.isMainThread=en,r.platform=Js,r.pool=st,r.worker=pt,r.workerEmit=Xi,Object.defineProperty(r,"__esModule",{value:!0})})})(Fn,Fn.exports);var Id=Fn.exports,rt=class{constructor(t,e){o(this,"_value");o(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},tl=class extends rt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Fd=class extends rt{constructor(){super(...arguments);o(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},jd=class extends rt{get currentRange(){return this.value}validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){if(this.parent.minmax.value){const t={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(t)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=e),i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},zd=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Nd=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Wd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Hd=zd(),Ur={iron:{pixels:Wd,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Nd,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Hd,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Bd=class extends rt{get availablePalettes(){return Ur}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},Un,Vd=(Un=class{},o(Un,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),Un),Xe,Jn=(Xe=class extends Vd{static humanRangeDates(e,r){return e=Xe.inputToDate(e),r=Xe.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Xe.humanDate(e):[Xe.humanDate(e),Xe.humanDate(r)].join(" - ")}static human(e){return`${Xe.humanDate(e)} ${Xe.humanTime(e,!0)} `}},o(Xe,"isoDate",e=>(e=Xe.inputToDate(e),Ln(e,{representation:"date"}))),o(Xe,"isoTime",e=>(e=Xe.inputToDate(e),Ln(e,{representation:"time"}))),o(Xe,"isoComplete",e=>(e=Xe.inputToDate(e),Ln(e))),o(Xe,"humanTime",(e,r=!1)=>(e=Xe.inputToDate(e),_r(e,r?"HH:mm:ss":"HH:mm"))),o(Xe,"humanDate",(e,r=!1)=>(e=Xe.inputToDate(e),_r(e,r?"d. M.":"d. M. yyyy"))),Xe),Rs=class{},Je,Yd=(Je=class{constructor(e,r){o(this,"_built",!1);o(this,"_hydrated",!1);o(this,"_hover",!1);o(this,"_canvasLayer");o(this,"_visibleLayer");o(this,"_cursorLayer");o(this,"_listenerLayer");this.parent=e,this.root=r,this.root.classList.add(Je.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Je.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Je.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Je.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Je.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Je.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Je.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),this.root.removeChild(this._canvasLayer.getLayerRoot()),this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),this.root.removeChild(this._visibleLayer.getLayerRoot()),this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),this.root.removeChild(this._cursorLayer.getLayerRoot()),this._cursorLayer=void 0),this._listenerLayer&&(this.dehydrate(),this._listenerLayer.unmount(),this.root.removeChild(this._listenerLayer.getLayerRoot()),this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Je.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},o(Je,"CLASS_BASE","thermalImageRoot"),o(Je,"CLASS_BUILT",Je.CLASS_BASE+"__built"),o(Je,"CLASS_HYDRATED",Je.CLASS_BASE+"__mounted"),o(Je,"CLASS_HOVER",Je.CLASS_BASE+"__hover"),Je),B=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach(e=>e(...t))}},Gd=class{constructor(t){o(this,"_current");o(this,"onChange",new B);this._current=t}get current(){return this._current}get width(){return this.current.width}get height(){return this.current.height}set(t){this._current=t,this.onChange.call(this.current)}},Xd=class extends Rs{constructor(e,r,i,s,n){super();o(this,"id");o(this,"horizontalLimit");o(this,"verticalLimit");o(this,"group");o(this,"thermalUrl");o(this,"visibleUrl");o(this,"fileName");o(this,"signature","unknown");o(this,"version",-1);o(this,"streamCount",-1);o(this,"fileDataType",-1);o(this,"unit",-1);o(this,"meta");o(this,"_dom");o(this,"timeline");o(this,"cursorValue");o(this,"analysis");o(this,"recording");o(this,"_mounted",!1);o(this,"_built",!1);o(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Gd(r),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new Yd(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}draw(){this.dom&&this.dom.canvasLayer&&this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}getColorAtPoint(e,r){var a,l;const i=this.getTemperatureAtPoint(e,r),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(s!==void 0&&n!==void 0){const p=(i-s)/(n-s),f=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[f]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&(this.dom.canvasLayer.opacity=e)}},Ms=class{constructor(t){o(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Kt=class jn{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=jn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=jn.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},qd=class extends Ms{constructor(e){super(e);o(this,"container");o(this,"canvas");o(this,"context");o(this,"_opacity",1);this.container=Kt.createCanvasContainer(),this.canvas=Kt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,a,l,c)=>{const f=new OffscreenCanvas(n,a).getContext("2d"),m=s-i;for(let C=0;C<=n;C++)for(let A=0;A<=a;A++){const k=C+A*n;let z=l[k];z<i&&(z=i),z>s&&(z=s);const N=(z-i)/m,V=Math.round(255*N),W=c[V];f.fillStyle=W,f.fillRect(C,A,1,1)}const b=f.getImageData(0,0,n,a);return await createImageBitmap(b)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},Kd=class extends Ms{constructor(e){super(e);o(this,"layerRoot");o(this,"center");o(this,"axisX");o(this,"axisY");o(this,"label");o(this,"_show",!1);o(this,"_hover",!1);this.layerRoot=Kt.createCursorLayerRoot(),this.center=Kt.createCursorLayerCenter(),this.axisX=Kt.createCursorLayerX(),this.axisY=Kt.createCursorLayerY(),this.label=Kt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(r*i),a=100/this.instance.width/2,l=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${l}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Zd=class extends Ms{constructor(e){super(e);o(this,"container");this.container=Kt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Qd=class extends Ms{constructor(e,r){super(e);o(this,"container");o(this,"image");this._url=r,this.container=Kt.createVisibleLayer(),this._url&&(this.image=Kt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Jd=class{constructor(t,e){o(this,"_currentFrame");o(this,"bufferSize",4);o(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.reader.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,l)=>{const c=s[l];this.buffer.set(c,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},rl={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},eu=class extends rt{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));o(this,"_playbackSpeed",1);o(this,"startTimestampRelative");o(this,"endTimestampRelative");o(this,"stepsByAbsolute",new Map);o(this,"stepsByRelative",new Map);o(this,"stepsByIndex",new Map);o(this,"relativeSteps",[]);o(this,"_currentStep");o(this,"isSequence");o(this,"_isPlaying",!1);o(this,"timer");o(this,"buffer");o(this,"callbackdPlaybackSpeed",new B);o(this,"callbacksPlay",new B);o(this,"callbacksPause",new B);o(this,"callbacksStop",new B);o(this,"callbacksEnd",new B);o(this,"callbacksChangeFrame",new B);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Jd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return rl[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),_r(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(c=>c.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(c=>c.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},tu=class extends rt{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},ru=class extends rt{constructor(){super(...arguments);o(this,"stream");o(this,"recorder");o(this,"mimeType");o(this,"_isRecording",!1);o(this,"_mayStop",!0);o(this,"recordedChunks",[]);o(this,"callbackMayStop",new B)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},iu=class{constructor(t){this.file=t}canvasAsPng(){var t,e;return(e=(t=this.file.dom)==null?void 0:t.canvasLayer)==null?void 0:e.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},Be=class{constructor(t,e,r){o(this,"onSerializableChange",new B);o(this,"_selected",!1);o(this,"onSelected",new B);o(this,"onDeselected",new B);o(this,"onValues",new B);o(this,"onMoveOrResize",new B);o(this,"layerRoot");o(this,"points",new Map);o(this,"_top");o(this,"_left");o(this,"_width");o(this,"_height");o(this,"_min");o(this,"_max");o(this,"_avg");o(this,"_color","black");o(this,"onSetColor",new B);o(this,"_initialColor");o(this,"onSetInitialColor",new B);o(this,"activeColor","yellow");o(this,"inactiveColor","black");o(this,"ready",!1);o(this,"nameInitial");o(this,"_name");o(this,"onSetName",new B);this.key=t,this.file=e,this._initialColor=r,this.nameInitial=t,this._name=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")})}serializedIsValid(t){const e=t.split(";").map(r=>r.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(t){if(isNaN(t)||t===this.top)return;const{top:e,height:r}=this.getVerticalDimensionFromNewValue(t,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),r!==this.height&&(this._height=r,this.onSetHeight(r),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(t){if(isNaN(t)||t===this.left)return;const{left:e,width:r}=this.getHorizontalDimensionsFromNewValue(t,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),r!==this.width&&(this._width=r,this.onSetWidth(r),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(t){if(t===this.height)return;const e=this.validateWidth(t);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(t){if(t===this.height)return;const e=this.validateHeight(t);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(t){if(isNaN(t)||t===this.bottom)return;const{top:e,height:r}=this.getVerticalDimensionFromNewValue(t,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),r!==this.height&&(this._height=r,this.onSetHeight(r),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(t){if(isNaN(t)||t===this.right)return;const{left:e,width:r}=this.getHorizontalDimensionsFromNewValue(t,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),r!==this.width&&(this._width=r,this.onSetWidth(r),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}get initialColor(){return this._initialColor}setInitialColor(t){t!==this.initialColor&&(this._initialColor=t,this.onSetInitialColor.call(t),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(t))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(t){t!==this.name&&(this._name=t,this.onSerializableChange.call(this,"name"),this.onSetName.call(t))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),t===!0&&this.layers.all.filter(r=>r.key!==this.key).forEach(r=>{r.selected&&r.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),t===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(t,e){return!!t.find(r=>r===e)}static serializedGetStringValueByKey(t,e){const r=new RegExp(`${e}:*`),i=t.find(s=>{if(s.match(r))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(t,e){const r=new RegExp(`${e}:\\d+`),i=t.find(s=>s.match(r));if(i!==void 0)return parseInt(i.split(":")[1])}},il=class{constructor(t,e,r,i,s,n,a){o(this,"pxX");o(this,"_x");o(this,"onX",new B);o(this,"pxY");o(this,"_y");o(this,"onY",new B);o(this,"_color");o(this,"_active",!1);o(this,"_isHover",!1);o(this,"_isDragging",!1);o(this,"container");o(this,"innerElement");o(this,"onMouseEnter",new B);o(this,"onMouseLeave",new B);o(this,"onActivate",new B);o(this,"onDeactivate",new B);this.key=t,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=r,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(r,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(t){const{x:e,placement:r}=this.analyzeXFromTool(t);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,r);this.container.style.left=s,this.sideEffectOnXFromTool(e,r),this.onX.call(this.x,i)}}setXDirectly(t,e){if(this.mayMoveToX(t)){const r=this.x;this._x=t;const i=this.getXStyle(t,e);this.container.style.left=i,this.onX.call(this.x,r)}}setYFromTool(t){const{y:e,placement:r}=this.analyzeYFromTool(t);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,r);this.container.style.top=s,this.sideEffectOnYFromTool(e,r),this.onY.call(this.y,i)}}setYDirectly(t,e){if(this.mayMoveToY(t)){const r=this.y;this._y=t;const i=this.getYStyle(t,e);this.container.style.top=i,this.onY.call(this.y,r)}}getXStyle(t,e){const r=this.calculatePercentageX(t),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(r,i)}getYStyle(t,e){const r=this.calculatePercentageY(t),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(r,i)}formatPositionStyle(t,e){return e===0||isNaN(e)?`${t}%`:`calc( ${t}% + ${e}% )`}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,a=this.y+r;return e>=i&&e<=s&&t>=n&&t<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(t){return t/this.analysis.file.width*100}calculatePercentageY(t){return t/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},yt,su=(yt=class extends il{constructor(r,i,s,n,a){super(r,i,s,n,a,2,2);o(this,"axisX");o(this,"axisY");o(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(r=1){return Math.round(yt.size*r).toString()+"px"}analyzeXFromTool(r){return{x:r,placement:2}}analyzeYFromTool(r){return{y:r,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(r){return r<=this.file.width&&r>=0}mayMoveToY(r){return r<=this.file.height&&r>=0}createInnerElement(){const r=document.createElement("div");return r.classList.add("innerElement"),r.style.position="absolute",r.style.top=yt.sizePx(-.5),r.style.left=yt.sizePx(-.5),r.style.width=yt.sizePx(),r.style.height=yt.sizePx(),r}buildAxisX(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="100%",r.style.height="1px",r.style.left="0px",r.style.top=yt.sizePx(.5),r}buildAxisY(){const r=document.createElement("div");return r.style.position="absolute",r.style.width="1px",r.style.height="100%",r.style.left=yt.sizePx(.5),r.style.top="0px",r}buildCenter(){const r=document.createElement("div");r.style.position="absolute",r.style.top=`calc( ${yt.sizePx(.5)} - 3px )`,r.style.left=`calc( ${yt.sizePx(.5)} - 3px )`,r.style.width="5px",r.style.height="5px",r.style.borderStyle="solid",r.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(r.style.backgroundColor=i),r}onSetColor(r){this.axisX&&(this.axisX.style.backgroundColor=r),this.axisY&&(this.axisY.style.backgroundColor=r),this.center&&(this.center.style.borderColor=r)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(r=void 0){var i,s,n;if(r===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${r}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},o(yt,"size",20),yt),or=class sl extends Be{constructor(r,i,s,n,a){super(r,s,i);o(this,"center");o(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new su("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new nl(this)),this._graph}static addAtPoint(r,i,s,n,a){return new sl(r,i,s,n,a)}setColorCallback(r){this.center.setColor(r)}isWithin(r,i){return this.center.isWithin(i,r)}getValues(){const r=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:r,max:r,avg:r}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(r){this.center.setXDirectly(r,2),this.onSerializableChange.call(this,"left")}onSetTop(r){this.center.setYDirectly(r,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(r){const i=Math.min(this.file.height-1,Math.max(0,Math.round(r)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(r){const i=Math.min(this.file.width-1,Math.max(0,Math.round(r)));return{left:i,right:i,width:0}}recievedSerialized(r){if(!this.serializedIsValid(r))return;const i=r.split(";").map(f=>f.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=Be.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const l=Be.serializedGetStringValueByKey(i,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const c=Be.serializedGetNumericalValueByKey(i,"top"),p=Be.serializedGetNumericalValueByKey(i,"left");c!==void 0&&(this.setTop(c),s=!0),p!==void 0&&(this.setLeft(p),s=!0),s&&this.recalculateValues()}toSerialized(){const r=[];return r.push(this.name),r.push("point"),r.push(`top:${this.top}`),r.push(`left:${this.left}`),r.push(`color:${this.initialColor}`),this.graph.state.AVG&&r.push("avg"),r.join(";")}},nl=class{constructor(t){o(this,"_min",!1);o(this,"_max",!1);o(this,"_avg",!1);o(this,"_value");o(this,"onGraphActivation",new B);o(this,"onGraphData",new B);o(this,"onAnalysisSelection",new B);this.analysis=t,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(t){this._value=t,this.onGraphData.call(t,this.analysis)}setMinActivation(t){this._min!==t&&(this._min=t,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(t){this._max!==t&&(this._max=t,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(t){this._avg!==t&&(this._avg=t,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const r=await e.getAnalysisData();this.value=r});const t=await this.getGraphData();this.value=t}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof or)return this._avg?[this.analysis.initialColor]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(this.analysis.initialColor)}),t}getGraphLabels(){if(this.analysis instanceof or)return this._avg?[this.analysis.name]:[];const t=[];return Object.entries(this.state).forEach(([e,r])=>{r&&t.push(`${this.analysis.name} ${e}`)}),t}hasDataToPrint(){return this.analysis instanceof or?this._avg:this._min||this._max||this._avg}getDtaAtTime(t){if(this.analysis instanceof or)return this._avg?[this.value[t]]:[];const e=[],r=this.value;return this._min&&e.push(r[t].min),this._max&&e.push(r[t].max),this._avg&&e.push(r[t].avg),e}},nu=class extends il{constructor(t,e,r,i,s,n,a){super(t,e,r,i,s,n,a)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},au=class extends nu{constructor(){super(...arguments);o(this,"_pairX");o(this,"_pairY");o(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const r=this.isLeftSide?1:3;return{x:e,placement:r}}analyzeYFromTool(e){const r=this.isTopSide?1:3;return{y:e,placement:r}}sideEffectOnXFromTool(e,r){this.pairX.setXDirectly(e,r),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,r){this.pairY.setYDirectly(e,r),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},ea=class extends Be{constructor(e,r,i,s,n,a,l){super(e,i,r);o(this,"wPx",(100/this.file.width/2).toString()+"%");o(this,"hPx",(100/this.file.height/2).toString()+"%");o(this,"tl");o(this,"tr");o(this,"bl");o(this,"br");o(this,"area");o(this,"_graph");let c=n,p=s;a!==void 0&&l!==void 0&&(c=n+a,p=s+l),this.area=this.buildArea(s,n,a,l),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,c,3,1),this.bl=this.addPoint("bl",p,n,1,3),this.br=this.addPoint("br",p,c,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new nl(this)),this._graph}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}static calculateDimensionsFromCorners(e,r,i,s){const n=Math.min(e,s),a=Math.max(e,s),l=Math.min(r,i),p=Math.max(r,i)-l,f=a-n;return{top:n,left:l,width:p,height:f}}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,r=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=r-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,r,i,s,n){const a=new au(e,r,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const r=this.file.width-1-this.left;return Math.max(0,Math.min(r,Math.round(e)))}validateHeight(e){const r=this.file.height-1-this.top;return Math.max(0,Math.min(r,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,r=>{r.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,r=>{r.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,r=>{r.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,r=>{r.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,r=>{r.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,r=>{r.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,r=>{r.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,r=>{r.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,r){const i=Math.round(e),s=this.file.height-1,n=r==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:r==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,r){const i=Math.round(e),s=this.file.width-1,n=r==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:r==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,r){e.forEach(i=>r(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const r=e.split(";").map(S=>S.trim());let i=!1;const s=r[0];s!==this.name&&this.setName(s);const n=Be.serializedSegmentsHasExact(r,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=Be.serializedSegmentsHasExact(r,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const l=Be.serializedSegmentsHasExact(r,"max");l!==this.graph.state.MAX&&this.graph.setMaxActivation(l);const c=Be.serializedGetStringValueByKey(r,"color");c===void 0||c!==this.initialColor&&this.setInitialColor(c);const p=Be.serializedGetNumericalValueByKey(r,"top"),f=Be.serializedGetNumericalValueByKey(r,"left"),m=Be.serializedGetNumericalValueByKey(r,"width"),b=Be.serializedGetNumericalValueByKey(r,"height");p!==void 0&&p!==this.top&&(this.setTop(p),i=!0),f!==void 0&&f!==this.left&&(this.setLeft(f),i=!0),m!==void 0&&m!==this.width&&(this.setWidth(m),i=!0),b!==void 0&&b!==this.height&&(this.setHeight(b),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},al=class{constructor(t,e,r,i,s){o(this,"pxX");o(this,"pxY");o(this,"element");o(this,"_top");o(this,"_width");o(this,"_left");o(this,"_height");this.analysis=t,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},yo=class extends al{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},bo=class ps extends ea{getType(){return"ellipsis"}static startAddingAtPoint(e,r,i,s,n){const a=new ps(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,l){const{top:c,left:p,width:f,height:m}=ps.calculateDimensionsFromCorners(s,n,a,l),b=new ps(e,r,i,c,p,f,m);return b.recalculateValues(),b}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new yo(this,e,r,e+i,r+s):new yo(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,c=0;for(let p=i;p<s;p++){const f=this.file.width*p;for(let m=e;m<=r;m++)if(this.isWithin(m,p)){const b=this.file.pixels[f+m];b<n&&(n=b),b>a&&(a=b),c+=b,l++}}return{min:n,max:a,avg:c/l}}isWithin(e,r){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(r-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},wo=class extends al{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},xo=class fs extends ea{getType(){return"rectangle"}static startAddingAtPoint(e,r,i,s,n){const a=new fs(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,l){const{top:c,left:p,width:f,height:m}=fs.calculateDimensionsFromCorners(s,n,a,l),b=new fs(e,r,i,c,p,f,m);return b.recalculateValues(),b}buildArea(e,r,i,s){return i!==void 0&&s!==void 0?new wo(this,e,r,e+i,r+s):new wo(this,e,r,e,r)}getValues(){const e=this.left,r=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,l=0,c=0;for(let p=i;p<s;p++){const f=this.file.width*p;for(let m=e;m<=r;m++){const b=this.file.pixels[f+m];b<n&&(n=b),b>a&&(a=b),c+=b,l++}}return{min:n,max:a,avg:c/l}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},ms=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],ou=class extends Map{constructor(e){super();o(this,"layers",[]);o(this,"onAdd",new B);o(this,"onRemove",new B);o(this,"onSelectionChange",new B);o(this,"colors",ms);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,r){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=r===!0?this.slots.getNextFreeSlotNumber():r===!1?void 0:r;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const r=this.get(e);r&&(this.slots.unassignAnalysisFromItsSlot(r),r.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,r){const i=xo.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i,!1),i}placeRectAt(e,r,i,s,n,a,l){const c=xo.build(e,a??this.getNextColor(),this.drive.parent,r,i,s,n);return c.ready=!0,this.addAnalysis(c,l),c}createEllipsisFrom(e,r){const i=bo.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,r,i,s,n,a,l){const c=bo.build(e,a??this.getNextColor(),this.drive.parent,r,i,s,n);return c.ready=!0,this.addAnalysis(c,l),c}createPointAt(e,r){const i=or.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,r);return this.addAnalysis(i,!0),i}placePointAt(e,r,i,s,n){const a=or.addAtPoint(e,s??this.getNextColor(),this.drive.parent,r,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),r=ms.filter(i=>!e.includes(i));return r.length>0?r[0]:ms[0]}getNextName(e){return`${e} ${this.all.length}`}},lu=class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce((r,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...r,...s]},[])}},hu=class extends rt{constructor(){super(...arguments);o(this,"layers",new ou(this));o(this,"points",new lu(this));o(this,"listener");o(this,"bindedPointerMoveListener");o(this,"bindedPointerDownListener");o(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const r=this.listener.clientWidth,i=this.parent.width,n=e.layerX/r,a=Math.round(i*n),l=this.listener.clientHeight,c=this.parent.height,f=e.layerY/l;return{top:Math.round(c*f),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=r=>{const i=this.getRelativePosition(r);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=r=>{const i=this.getRelativePosition(r);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(r=>{this.currentTool.onPointUp(r)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},cu=class{constructor(t){o(this,"listenerKey","___listen-to-graphs___");o(this,"_graphs",new Map);o(this,"_output",{values:[[]],colors:[]});o(this,"onOutput",new B);o(this,"onAddGraph",new B);o(this,"onRemoveGraph",new B);this.drive=t,this.layers.onAdd.set(this.listenerKey,async e=>{const r=e.graph;this.addGraph(r),r.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),r.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),r.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(t){this._graphs.set(t.analysis.key,t),this.onAddGraph.call(t)}removeGraph(t){this._graphs.delete(t),this.onRemoveGraph.call(t)}get output(){return this._output}set output(t){this._output=t,this.onOutput.call(t)}refreshOutput(){const t={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{t.values[0].push(...e.getGraphLabels()),t.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((r,i)=>{let s=t.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(r)),s=[a],t.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(r)))})}),this.output=t,t}hasGraph(){return Object.values(this.graphs).find(t=>t.hasDataToPrint()).length>0}generateExportData(){const t={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const r of this.graphs.values()){const i=r.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${r.analysis.initialColor}, ${r.analysis.width} x ${r.analysis.height} px)`});r.value&&Object.keys(r.value).forEach(s=>{if(!Object.keys(t).includes(s)){const a=parseInt(s),l=a+r.analysis.file.timestamp;t[s]={[e[0].key]:_r(a,"m:ss:SSS")+" ",[e[1].key]:_r(l,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:l}}const n=r.getDtaAtTime(parseInt(s));i.forEach((a,l)=>{t[s][a]=n[l]})})}return{header:e,data:Object.values(t)}}},du=class extends rt{constructor(e){super(e,{values:[[]],colors:[]});o(this,"_hasActiveGraphs",!1);o(this,"onGraphsPresence",new B);o(this,"listeners",new cu(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async r=>{this.value=r,r.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:r}=this.listeners.generateExportData(),i=Ls({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:r}),s=Dd(i)(e);Ld(i)(s)}},uu=class{constructor(t,e){o(this,"_analysis");o(this,"_serialized");o(this,"onSerialize",new B);o(this,"enqueuedSerialisation");this.slot=t,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(t){return`slot ${this.slot} ${t}`}dehydrate(t){t.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(t){t.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(t){this.analysis.recievedSerialized(t);const e=this.analysis.toSerialized();e!==t&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(t){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(t)}},Yr,ol=(Yr=class extends rt{constructor(){super(...arguments);o(this,"onSlotInit",new B);o(this,"onSlotRemove",new B);o(this,"onSlot1Assignement",new B);o(this,"onSlot2Assignement",new B);o(this,"onSlot3Assignement",new B);o(this,"onSlot4Assignement",new B);o(this,"onSlot5Assignement",new B);o(this,"onSlot6Assignement",new B);o(this,"onSlot7Assignement",new B);o(this,"onSlot1Serialize",new B);o(this,"onSlot2Serialize",new B);o(this,"onSlot3Serialize",new B);o(this,"onSlot4Serialize",new B);o(this,"onSlot5Serialize",new B);o(this,"onSlot6Serialize",new B);o(this,"onSlot7Serialize",new B)}getNextFreeSlotNumber(){for(let r=1;r<=Yr.MAX_SLOTS;r++)if(!this.hasSlot(r))return r}assignSlot(r,i){this.getSlot(r)!==void 0&&this.removeSlotAndAnalysis(r);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new uu(r,i);this.value.set(r,a);const l=this.getOnAssignementManager(r),c=this.getOnSerializeManager(r);return l&&l.call(a),c&&c.call(a.serialized),this.onSlotInit.call(r,a),this.callEffectsAndListeners(),a}hasSlot(r){return this.value.has(r)}getSlot(r){return this.value.get(r)}getAnalysisSlot(r){for(const i of this.value.values())if(i.analysis.key===r.key)return i.slot}removeSlotAndAnalysis(r){const i=this.value.get(r);if(i){const s=i.analysis;this.emitOnAssignement(r,void 0),this.value.delete(r),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(r){for(const i of this.value.values())i.analysis.key===r.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.callEffectsAndListeners())}createFromSerialized(r,i){const s=r.split(";").map(k=>k.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let l=Be.serializedGetNumericalValueByKey(s,"top"),c=Be.serializedGetNumericalValueByKey(s,"left");const p=Be.serializedGetStringValueByKey(s,"color");let f=Be.serializedGetNumericalValueByKey(s,"width"),m=Be.serializedGetNumericalValueByKey(s,"height");const b=Be.serializedSegmentsHasExact(s,"avg"),S=Be.serializedSegmentsHasExact(s,"min"),C=Be.serializedSegmentsHasExact(s,"max");l!==void 0&&(l<0&&(l=0),l>this.parent.height-1&&(l=this.parent.height-1)),c!==void 0&&(c<0&&(c=0),c>this.parent.width-1&&(c=this.parent.width-1));let A;if(a==="point"){if(l===void 0||c===void 0)return;A=this.parent.analysis.layers.placePointAt(n,l,c,p,!1)}else{if(l===void 0||c===void 0||f===void 0||m===void 0)return;f<0&&(f=0),f+c>this.parent.width-1&&(f=this.parent.width-c-1),m<0&&(m=0),m+l>this.parent.height-1&&(m=this.parent.height-l-1),A=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,l,c,f+c,m+l,p,!1):this.parent.analysis.layers.placeEllipsisAt(n,l,c,f+c,m+l,p,!1)}if(A!==void 0){if(A instanceof or?b&&A.graph.setAvgActivation(!0):A instanceof ea&&(b&&A.graph.setAvgActivation(!0),S&&A.graph.setMinActivation(!0),C&&A.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const k=this.getNextFreeSlotNumber();k!==void 0&&this.assignSlot(k,A)}else i!==void 0&&this.assignSlot(i,A);return A}}validate(r){return r}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(r=>r(this.value))}emitOnAssignement(r,i){const s=this.getOnAssignementManager(r);s&&s.call(i);const n=this.getOnSerializeManager(r);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(r,i):this.onSlotRemove.call(r)}emitSerializedValue(r,i){const s=this.getOnSerializeManager(r);s&&s.call(i)}getOnSerializeManager(r){if(r===1)return this.onSlot1Serialize;if(r===2)return this.onSlot2Serialize;if(r===3)return this.onSlot3Serialize;if(r===4)return this.onSlot4Serialize;if(r===5)return this.onSlot5Serialize;if(r===6)return this.onSlot6Serialize;if(r===7)return this.onSlot7Serialize}getOnAssignementManager(r){if(r===1)return this.onSlot1Assignement;if(r===2)return this.onSlot2Assignement;if(r===3)return this.onSlot3Assignement;if(r===4)return this.onSlot4Assignement;if(r===5)return this.onSlot5Assignement;if(r===6)return this.onSlot6Assignement;if(r===7)return this.onSlot7Assignement}getSlotValue(r){var i;if(this.hasSlot(r))return(i=this.getSlot(r))==null?void 0:i.serialized}},o(Yr,"MAX_SLOTS",7),Yr),Us=class{constructor(t){o(this,"_layers",[]);o(this,"onLayers",new B);this.parent=t}get layers(){return this._layers}setLayers(t){t.length!==this._layers.length&&(this._layers=t,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(t=>t.bypass===!1)}addFilter(t){this.layers.includes(t)&&console.error(`filter ${t} is already in ${this.parent}`),this._layers.push(t),this.onLayers.call(this.layers)}removeFilter(t){this.layers.includes(t)&&(this._layers=this.layers.filter(e=>e!==t),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(t=>{t.applyAllAvailableFilters()})}getFiltersArray(){}},ta=class ll extends Xd{constructor(r,i,s,n){super(r,s,n.pixels,i.thermalUrl,i.visibleUrl);o(this,"slots");o(this,"_export");o(this,"filters",new Us(this));this.group=r,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const r=new iu(this);this._export=r}return this._export}createInnerDom(){return{canvasLayer:new qd(this),visibleLayer:new Qd(this,this.visibleUrl),cursorLayer:new Kd(this),listenerLayer:new Zd(this)}}hydrateListener(r){if(!r.listenerLayer||!r.cursorLayer)return;const i=r.listenerLayer.getLayerRoot();i&&(r.parent.analysis.activateListeners(i),r.listenerLayer.getLayerRoot().onmousemove=s=>{r.cursorLayer&&r.cursorLayer.setShow(!0),r.setHover(!0);const n=r.parent.meta.width,a=r.root.clientWidth,l=n/a,c=Math.round(s.offsetX*l),p=Math.round(s.offsetY*l);r.parent.group.cursorPosition.recieveCursorPosition({x:c,y:p})},r.listenerLayer.getLayerRoot().onmouseleave=()=>{r.cursorLayer&&r.cursorLayer.setShow(!1),r.setHover(!1),r.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(r){r.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new tu(this,void 0),this.timeline=new eu(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new ru(this,!1),this.analysis=new hu(this,[]),this.analysisData=new du(this),this.slots=new ol(this,new Map),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){var i;if(this.dom&&this.dom.built){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}this.analysis.value.forEach(s=>s.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new ll(r,i,s,n).buildServices()}recieveCursorPosition(r){var i,s,n;if(r!==void 0){const a=this.group.tool.value.getLabelValue(r.x,r.y,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(r.x,r.y,a),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(r)}getInstances(){return[this]}getAllApplicableFilters(){const r=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...r,...i,...s,...n]}async applyAllAvailableFilters(){const r=this.getAllApplicableFilters();this.reader.applyFilters(r);const i=await this.reader.baseInfo(),s=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const n=this.root;this.unmountFromDom(),this.mountToDom(n)}this.meta.set(i),this.setPixels(s.pixels)}},pu=class extends rt{constructor(){super(...arguments);o(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.thermalUrl,r))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const r=e instanceof ta?e:this.map.get(e);r&&(r.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==r.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},fu=class extends tl{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},Is=class{constructor(t){o(this,"active",!1);this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},hl=class extends Is{constructor(){super(...arguments);o(this,"key","inspect");o(this,"name","Inspect temperatures");o(this,"description","Use mouse to inspect temperature values.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);o(this,"getLabelValue",(e,r,i)=>i===void 0?"":i.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},ra=class extends Is{},mu=class extends ra{constructor(){super(...arguments);o(this,"key","add-ellipsis");o(this,"name","Add an elyptical analysis");o(this,"description","Click and drag on the thermogram to add an elyptical analysis.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);o(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createEllipsisFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=ol.MAX_SLOTS){const r=e.analysis.file.slots.getNextFreeSlotNumber();console.log(r),r!==void 0&&e.file.slots.assignSlot(r,e.analysis)}}}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(r),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},gu=class extends ra{constructor(){super(...arguments);o(this,"key","add-point");o(this,"name","Add a point analysis");o(this,"description","Click on the thermogram to add a point analysis.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);o(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createPointAt(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},vu=class extends ra{constructor(){super(...arguments);o(this,"key","add-rect");o(this,"name","Add a rectangular analysis");o(this,"description","Click and drag on the thermogram to add a rectangular analysis.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);o(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,r,i){i.analysis.layers.createRectFrom(e,r).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const r=e.analysis.file.slots.getNextFreeSlotNumber();r!==void 0&&e.file.slots.assignSlot(r,e.analysis)}}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(r),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},yu=class extends Is{constructor(){super(...arguments);o(this,"key","edit");o(this,"name","Edit analysis");o(this,"description","Drag corners of any selected analysis.");o(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(r),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,r,i){const s=i.getTemperatureAtPoint(e,r),n=i.analysis.layers.all.filter(f=>f.isWithin(e,r)).map(f=>{const m=f.selected?"span":"s";return`<${m} style="color: ${f.initialColor};">
                    ${f.name}
                </${m}>`}),a=i.analysis.points.all.filter(f=>f.isHover).map(f=>`<span style="color: ${f.analysis.initialColor}">${f.analysis.name} - HANDLE: ${f.key}: X: ${f.x} Y: ${f.y}</span>`),l=n.length>0?n.join("<br />")+"<br />":"",c=a.length>0?a.join("<br />")+"<br />":"";return`${c.length>0?c:l}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${r}`}},bu=[hl,gu,vu,mu,yu],wu=t=>{const e=bu.map(r=>{const i=new r(t);return[i.key,i]});return Object.fromEntries(e)},xu=class extends rt{constructor(e,r){super(e,r);o(this,"_tools",wu(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof Is?this.value=e:this.value=this.tools[e]}},Su=class extends Rs{constructor(e,r,i,s){super();o(this,"hash",Math.random());o(this,"minmax",new fu(this,void 0));o(this,"tool",new xu(this,new hl(this)));o(this,"files",new pu(this,[]));o(this,"cursorPosition",new Fd(this,void 0));o(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});o(this,"filters",new Us(this));this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}getInstances(){return this.files.value}},cl=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},bs=class dl extends cl{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new dl(e.url,e.code,e.message)}},ul=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},qr=class pl extends cl{constructor(r,i,s,n,a,l){super(n,a);o(this,"id",Math.random());o(this,"baseInfoCache");o(this,"fileName");o(this,"originalBuffer");o(this,"_buffer");this.service=r,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),l===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(r){this._buffer=r}isSuccess(){return!0}copyBuffer(r){const i=new ArrayBuffer(r.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(r)),s.buffer}cloneForInstance(){return new pl(this.service,this.buffer,this.parser,this.thermalUrl,this.visibleUrl,!0)}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const r=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=r,r}getFrameSubset(r){return this.parser.getFrameSubset(this.buffer,r)}async frameData(r){const i=this.getFrameSubset(r);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(r,i){return await this.parser.pointAnalysisData(this.buffer,r,i)}async rectAnalysisData(r,i,s,n){return await this.parser.rectAnalysisData(this.buffer,r,i,s,n)}async ellipsisAnalysisData(r,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,r,i,s,n)}async applyFilters(r){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(let i of r)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(r){const i=this.cloneForInstance(),s=[...r.registry.manager.filters.getActiveFilters(),...r.registry.filters.getActiveFilters(),...r.filters.getActiveFilters()];await i.applyFilters(s);const n=await i.baseInfo(),a=await i.frameData(0),l=ta.fromService(r,i,n,a);return r.files.addFile(l),l}},_u=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(X,Q)=>{const ce=X.getBigInt64(Q,!0),q=62135596800000n,se=10000n,ne=24n*60n*60n*1000n*se,ue=0x4000000000000000n,Re=0x8000000000000000n;let Ie=ce&0x3fffffffffffffffn;ce&Re&&(Ie>ue-ne&&(Ie-=ue),Ie<0&&(Ie+=ne));const St=Ie/se-q;return Number(St)},a=n(e,5),l=e.getUint8(15);let c=2;l===1&&(c=4);const p=57,f=r*i*c,m=p+f,b=t.slice(25),S=b.byteLength/m,C=X=>{const Q=X*m,ce=Q+m,q=b.slice(Q,ce),se=new DataView(q),ne=se.getFloat32(8,!0),ue=se.getFloat32(12,!0),Re=n(se,0),He=se.getFloat32(24,!0),Ie=se.getFloat32(28,!0);return{timestamp:Re,min:ne,max:ue,emissivity:He,reflectedKelvins:Ie}},A=[];for(let X=0;X<S;X++){const Q=C(X);A.push(Q)}const k={emissivity:0,reflectedKelvins:0};let z=1/0,I=-1/0;const N=[];A.forEach(X=>{k.emissivity=k.emissivity+X.emissivity,k.reflectedKelvins=k.reflectedKelvins+X.reflectedKelvins,X.min<z&&(z=X.min),X.max>I&&(I=X.max),N.push(X.timestamp)});const V=N[0],W=[];N.forEach((X,Q)=>{const ce=N[Q+1];let q=0;ce===void 0&&(q=0),q=ce-X;const se=X-V;W.push({absolute:X,relative:se,offset:isNaN(q)?0:q,index:Q})});const he=A[A.length-1].timestamp-A[0].timestamp,E=he/S,G=1e3/E;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:S,duration:he,frameInterval:E,fps:G,timeline:W,min:z,max:I,averageEmissivity:k.emissivity/A.length,averageReflectedKelvins:k.reflectedKelvins/A.length}},$u=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),a=i===1?4:2,l=57,c=s*n*a,p=l+c,f=t.slice(25),m=e*p,b=m+p;return{array:f.slice(m,b),dataType:i}},Cu=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,c=0x8000000000000000n;let f=i&0x3fffffffffffffffn;i&c&&(f>l-a&&(f-=l),f<0&&(f+=a));const b=f/n-s,S=Number(b),C=r.getFloat32(8,!0),A=r.getFloat32(12,!0),k=r.getFloat32(24,!0),z=r.getFloat32(28,!0),I=t.slice(57);let N=[];if(e===0){const V=new Uint16Array(I),W=Math.abs(C-A),he=65535;V.forEach(E=>{const G=E/he;N.push(C+W*G)})}else e===1&&(N=Array.from(new Float32Array(I)));return{timestamp:S,min:C,max:A,emissivity:k,reflectedKelvins:z,pixels:N}},ku=async(t,e,r)=>{const i=new DataView(t),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(z,I)=>{const N=z.getBigInt64(I,!0),V=62135596800000n,W=10000n,he=24n*60n*60n*1000n*W,E=0x4000000000000000n,G=0x8000000000000000n;let Q=N&0x3fffffffffffffffn;N&G&&(Q>E-he&&(Q-=E),Q<0&&(Q+=he));const q=Q/W-V;return Number(q)},l=i.getUint8(15);let c=2;l===1&&(c=4);const p=57,f=s*n*c,m=p+f,b=t.slice(25),S=b.byteLength/m,C={},A=z=>{const I=z*m,N=I+m,V=b.slice(I,N),W=new DataView(V),he=a(W,0),E=W.getFloat32(8,!0),X=W.getFloat32(12,!0)-E,ce=57+r*c*s+e*c;let q=0;if(l===1)q=W.getFloat32(ce,!0);else if(l===0){const ue=W.getInt16(ce,!0)/65535;q=E+X*ue}return{timestamp:he,temperature:q}};let k=0;for(let z=0;z<S;z++){const I=A(z);k===0&&(k=I.timestamp),C[I.timestamp-k]=I.temperature}return C},Au=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),c=(N,V)=>{const W=N.getBigInt64(V,!0),he=62135596800000n,E=10000n,G=24n*60n*60n*1000n*E,X=0x4000000000000000n,Q=0x8000000000000000n;let q=W&0x3fffffffffffffffn;W&Q&&(q>X-G&&(q-=X),q<0&&(q+=G));const ne=q/E-he;return Number(ne)},p=n.getUint8(15);let f=2;p===1&&(f=4);const m=57,b=a*l*f,S=m+b,C=t.slice(25),A=C.byteLength/S,k={},z=N=>{const V=N*S,W=V+S,he=C.slice(V,W),E=new DataView(he),G=c(E,0),X=E.getFloat32(8,!0),ce=E.getFloat32(12,!0)-X,q=57,se=e,ne=e+i,ue=r,Re=r+s;let He=1/0,Ie=-1/0,xt=0,St=0;for(let Vt=ue;Vt<=Re;Vt++){const Yt=Vt*a;for(let Gt=se;Gt<=ne;Gt++){const jt=q+(Yt+Gt)*f;let ze=NaN;if(p===1)ze=E.getFloat32(jt,!0);else{const pt=E.getInt16(jt,!0)/65535;ze=X+ce*pt}ze<He&&(He=ze),ze>Ie&&(Ie=ze),St+=ze,xt++}}const ar={min:He,max:Ie,avg:St/xt,count:xt};return{timestamp:G,result:ar}};let I=0;for(let N=0;N<A;N++){const V=z(N);I===0&&(I=V.timestamp),k[V.timestamp-I]=V.result}return k},Pu=async t=>{let e=[];const r=async k=>{const z=new DataView(k.slice(0,25)),I=z.getUint8(15),N=z.getUint16(17,!0),V=z.getUint16(19,!0),W=I===1?4:2,he=57,E=N*V*W,G=he+E,X=k.slice(25),Q=X.byteLength/G;let ce=[];for(let q=0;q<Q;q++){const ne=q*G+57,ue=ne+E,Re=X.slice(ne,ue);I===0||I===1&&(ce=ce.concat(Array.from(new Float32Array(Re))))}return ce};(await Promise.all(t.map(k=>r(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,z)=>k-z);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),l=200,c=a/l,p=[];let f=[...e];for(let k=0;k<l;k++){const z=s+c*k,I=z+c,N=f.findIndex(G=>G>I),W=f.slice(0,N-1).length,he=W/e.length*100,E={from:z,to:I,count:W,percentage:he};p.push(E),f=f.slice(N)}const m=[...p].sort((k,z)=>k.percentage-z.percentage),b=m[0].percentage,S=m[m.length-1].percentage,C=Math.abs(b-S);return p.map(k=>({...k,height:k.percentage/C*100}))},Ou=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},Du=async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),l=n.getUint16(19,!0),c=(V,W)=>{const he=V.getBigInt64(W,!0),E=62135596800000n,G=10000n,X=24n*60n*60n*1000n*G,Q=0x4000000000000000n,ce=0x8000000000000000n;let se=he&0x3fffffffffffffffn;he&ce&&(se>Q-X&&(se-=Q),se<0&&(se+=X));const ue=se/G-E;return Number(ue)},p=n.getUint8(15);let f=2;p===1&&(f=4);const m=57,b=a*l*f,S=m+b,C=t.slice(25),A=C.byteLength/S,k={},z=(V,W)=>{const he=e+i/2,E=r+s/2,G=(V-he)/(i/2),X=(W-E)/(s/2);return G*G+X*X<=1},I=V=>{const W=V*S,he=W+S,E=C.slice(W,he),G=new DataView(E),X=c(G,0),Q=G.getFloat32(8,!0),q=G.getFloat32(12,!0)-Q,se=57,ne=e,ue=e+i,Re=r,He=r+s;let Ie=1/0,xt=-1/0,St=0,ar=0;for(let Yt=Re;Yt<=He;Yt++){const Gt=Yt*a;for(let jt=ne;jt<=ue;jt++)if(z(jt,Yt)){const ze=se+(Gt+jt)*f;let st=NaN;if(p===1)st=G.getFloat32(ze,!0);else{const Ne=G.getInt16(ze,!0)/65535;st=Q+q*Ne}st<Ie&&(Ie=st),st>xt&&(xt=st),ar+=st,St++}}const Vt={min:Ie,max:xt,avg:ar/St,count:St};return{timestamp:X,result:Vt}};let N=0;for(let V=0;V<A;V++){const W=I(V);N===0&&(N=W.timestamp),k[W.timestamp-N]=W.result}return k},Eu=[{extension:"lrc",minme:"application/octet-stream"}],Lu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Eu,is:Ou,baseInfo:_u,getFrameSubset:$u,frameData:Cu,registryHistogram:Pu,pointAnalysisData:ku,rectAnalysisData:Au,ellipsisAnalysisData:Du},fl=Object.freeze(Lu),Tu={LrcParser:fl},ml=Object.values(Tu),gl=(t,e)=>{const r=ml.find(i=>i.is(t,e));if(r===void 0)throw new ul(2,e,`No parser found for '${e}'.`);return r},vl=ml.map(t=>t.extensions),Ru=vl.map(t=>t.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Mu=class yl{constructor(e,r,i){o(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new yl(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new bs(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=gl(i,this.thermalUrl);return this.pocessTheService(new qr(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof ul)return this.pocessTheService(bs.fromError(s));throw s}}pocessTheService(e){return e}},Uu=class bl{constructor(e,r){o(this,"_hover",!1);o(this,"onMouseEnter",new B);o(this,"onMouseLeave",new B);o(this,"onDrop",new B);o(this,"onProcessingEnd",new B);o(this,"input");o(this,"hydrated",!1);o(this,"bindedEnterListener");o(this,"bindedLeaveListener");o(this,"bindedDropListener");o(this,"bindedInputChangeListener");o(this,"bindedDragoverListener");o(this,"bindedClickListener");this.service=e,this.element=r,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const i=new bl(e,r);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const r=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);r.push(n)}}return this.onDrop.call(r),this.handleLeave(),r}async handleInputChange(e){e.preventDefault();const r=e.target;if(r.files){const i=r.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Ru,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},Iu=class{constructor(t){o(this,"requestsByUrl",new Map);o(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new ia(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=gl(e,t.name);return new qr(this,e,r,t.name)}catch(e){return new bs(t.name,3,e.message)}}handleDropzone(t){return Uu.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=Mu.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},Fu=class extends rt{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},ju=class extends rt{constructor(){super(...arguments);o(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new Su(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},zu=class extends rt{constructor(){super(...arguments);o(this,"_resolution",150);o(this,"buffer",new Map);o(this,"bufferPixelsCount",0);o(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,a)=>{let c=r.reduce((S,C)=>{const A=C.reduce((k,z)=>[...k,...z],[]);return[...S,...A]},[]).sort((S,C)=>S-C);const p=n/a;let f=i+p;const m=new Map;let b=0;for(;f!==!1;){const S=c.findIndex(k=>k>f),C=c.slice(0,S).length;m.set(f-p/2,C),b+=C,c=c.slice(S);const A=f+p;f=A<s?A:!1}return{result:m,resultCount:b}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(fl.registryHistogram,[r]);this.value=i}},Nu=class extends rt{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Wu=class extends tl{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Hu=class extends Rs{constructor(e,r,i){super();o(this,"hash",Math.random());o(this,"groups",new ju(this,[]));o(this,"opacity",new Fu(this,1));o(this,"minmax",new Wu(this,void 0));o(this,"loading",new Nu(this,!1));o(this,"range",new jd(this,void 0));o(this,"histogram",new zu(this,[]));o(this,"palette");o(this,"filters",new Us(this));this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof qr?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof qr&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async postLoadedProcessing(){if(this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),r=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||r!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(r=>{e=[...e,...r.getInstances()]}),e}},Bu=class extends rt{validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>e.forEveryInstance(r=>{r.canvasLayer.canvas.style.imageRendering=t===!0?"auto":"pixelated"}))}setSmooth(t){this.value=t}},Vu=class extends rt{validate(t){return t}afterSetEffect(){}setGraphSmooth(t){this.value=t}},ia=class extends Rs{constructor(e,r){super();o(this,"id");o(this,"service",new Iu(this));o(this,"registries",{});o(this,"palette",new Bd(this,"jet"));o(this,"smooth",new Bu(this,!1));o(this,"graphSmooth",new Vu(this,!1));o(this,"pool");o(this,"filters",new Us(this));this.pool=e||Id.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Hu(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(r=>{e=[...e,...r.getInstances()]}),e}},Yu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,wt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Gu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Yu(e,r,s),s};const So=["ready","select"],Xu={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let ht=class extends ot{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new B,this.left=0,this.top=0,this.w=0,this.h=0}render(){return v`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){nc(this.shadowRoot.getElementById("chartdiv")).then(t=>{this.chartWrapper=t,this.onWrapper.call(t),this.typeChanged(),google.visualization.events.addListener(t,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(t,"select",()=>{this.selection=t.getChart().getSelection()}),this.propagateEvents(So,t)})}updated(t){t.has("type")&&this.typeChanged(),(t.has("rows")||t.has("cols"))&&this.rowsOrColumnsChanged(),t.has("data")&&this.dataChanged(),t.has("view")&&this.viewChanged(),(t.has("_data")||t.has("options"))&&this.redraw(),t.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Xu[this.type]||this.type);const t=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==t&&this.propagateEvents(this.events.filter(i=>!So.includes(i)),e);const r=this.shadowRoot.getElementById("styles");r.children.length||this.localizeGlobalStylesheets(r)}),this.redraw()}propagateEvents(t,e){for(const r of t)google.visualization.events.addListener(e,r,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${r}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const t=this.chartWrapper.getChart();if(t!=null&&t.setSelection){if(this.type==="timeline"){const e=JSON.stringify(t.getSelection());if(JSON.stringify(this.selection)===e)return}t.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const t=this.chartWrapper.visualization.ha.O;this.left=t.left,this.top=t.top,this.w=t.width,this.h=t.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const t=this.chartWrapper.getChart();return t&&t.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:t,cols:e}=this;if(!(!t||!e))try{const r=await lo({cols:e});r.addRows(t),this._data=r}catch(r){this.shadowRoot.getElementById("chartdiv").textContent=String(r)}}dataChanged(){let t=this.data,e;if(!t)return;let r=!1;try{t=JSON.parse(t)}catch{r=typeof t=="string"||t instanceof String}r?e=fetch(t).then(i=>i.json()):e=Promise.resolve(t),e.then(lo).then(i=>{this._data=i})}localizeGlobalStylesheets(t){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const r of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",r.getAttribute("href")),t.appendChild(i)}}};ht.styles=me`
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
  `;wt([y({type:String,reflect:!0})],ht.prototype,"type",2);wt([y({type:Array})],ht.prototype,"events",2);wt([y({type:Object,hasChanged:()=>!0})],ht.prototype,"options",2);wt([y({type:Array})],ht.prototype,"cols",2);wt([y({type:Array})],ht.prototype,"rows",2);wt([y({type:String})],ht.prototype,"data",2);wt([y({type:Object})],ht.prototype,"view",2);wt([y({type:Array})],ht.prototype,"selection",2);wt([y({type:Object})],ht.prototype,"_data",2);wt([y({type:Number,reflect:!0})],ht.prototype,"left",2);wt([y({type:Number,reflect:!0})],ht.prototype,"top",2);wt([y({type:Number,reflect:!0})],ht.prototype,"w",2);wt([y({type:Number,reflect:!0})],ht.prototype,"h",2);ht=wt([Z("thermal-chart")],ht);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qu=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fs=t=>(...e)=>({_$litDirective$:t,values:e});let na=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),xi(s,e);return!0},ws=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},wl=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Qu(e)}};function Ku(t){this._$AN!==void 0?(ws(this),this._$AM=t,wl(this)):this._$AM=t}function Zu(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)xi(i[n],!1),ws(i[n]);else i!=null&&(xi(i,!1),ws(i));else xi(this,t)}const Qu=t=>{t.type==sa.CHILD&&(t._$AP??(t._$AP=Zu),t._$AQ??(t._$AQ=Ku))};class Ju extends na{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),wl(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(xi(this,e),ws(this))}setValue(e){if(qu(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=()=>new ep;class ep{}const Tn=new WeakMap,Fe=Fs(class extends Ju{render(t){return U}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),U}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=Tn.get(e);r===void 0&&(r=new WeakMap,Tn.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Tn.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var tp=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,xl=(t,e,r,i)=>{for(var s=i>1?void 0:i?rp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&tp(e,r,s),s};let Ci=class extends ot{constructor(){super(),this.dialogRef=Le(),this.closeButtonRef=Le(),this.invokerRef=Le()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return v`
            <slot name="invoker" ${Fe(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Fe(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Fe(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Ci.shadowRootOptions={...ot.shadowRootOptions,mode:"open"};Ci.styles=me`

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

        
    
    `;xl([y({type:String,reflect:!0})],Ci.prototype,"label",2);Ci=xl([Z("thermal-dialog")],Ci);var ip=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,js=(t,e,r,i)=>{for(var s=i>1?void 0:i?sp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ip(e,r,s),s};let hr=class extends ot{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return v`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};hr.VARIANTS=["slate","primary","foreground","background"];hr.shadowRootOptions={...ot.shadowRootOptions,mode:"open"};hr.styles=me`

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
    
    `;js([y({type:String,converter:{fromAttribute:t=>hr.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],hr.prototype,"variant",2);js([y({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],hr.prototype,"interactive",2);js([y({type:String})],hr.prototype,"size",2);hr=js([Z("thermal-button")],hr);const Kr=Math.min,lr=Math.max,xs=Math.round,$r=t=>({x:t,y:t}),np={left:"right",right:"left",bottom:"top",top:"bottom"},ap={start:"end",end:"start"};function _o(t,e,r){return lr(t,Kr(e,r))}function Fi(t,e){return typeof t=="function"?t(e):t}function cr(t){return t.split("-")[0]}function zs(t){return t.split("-")[1]}function Sl(t){return t==="x"?"y":"x"}function _l(t){return t==="y"?"height":"width"}function ji(t){return["top","bottom"].includes(cr(t))?"y":"x"}function $l(t){return Sl(ji(t))}function op(t,e,r){r===void 0&&(r=!1);const i=zs(t),s=$l(t),n=_l(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Ss(a)),[a,Ss(a)]}function lp(t){const e=Ss(t);return[zn(t),e,zn(e)]}function zn(t){return t.replace(/start|end/g,e=>ap[e])}function hp(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function cp(t,e,r,i){const s=zs(t);let n=hp(cr(t),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(zn)))),n}function Ss(t){return t.replace(/left|right|bottom|top/g,e=>np[e])}function dp(t){return{top:0,right:0,bottom:0,left:0,...t}}function Cl(t){return typeof t!="number"?dp(t):{top:t,right:t,bottom:t,left:t}}function Zr(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function $o(t,e,r){let{reference:i,floating:s}=t;const n=ji(e),a=$l(e),l=_l(a),c=cr(e),p=n==="y",f=i.x+i.width/2-s.width/2,m=i.y+i.height/2-s.height/2,b=i[l]/2-s[l]/2;let S;switch(c){case"top":S={x:f,y:i.y-s.height};break;case"bottom":S={x:f,y:i.y+i.height};break;case"right":S={x:i.x+i.width,y:m};break;case"left":S={x:i.x-s.width,y:m};break;default:S={x:i.x,y:i.y}}switch(zs(e)){case"start":S[a]-=b*(r&&p?-1:1);break;case"end":S[a]+=b*(r&&p?-1:1);break}return S}const up=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:f,y:m}=$o(p,i,c),b=i,S={},C=0;for(let A=0;A<l.length;A++){const{name:k,fn:z}=l[A],{x:I,y:N,data:V,reset:W}=await z({x:f,y:m,initialPlacement:i,placement:b,strategy:s,middlewareData:S,rects:p,platform:a,elements:{reference:t,floating:e}});f=I??f,m=N??m,S={...S,[k]:{...S[k],...V}},W&&C<=50&&(C++,typeof W=="object"&&(W.placement&&(b=W.placement),W.rects&&(p=W.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):W.rects),{x:f,y:m}=$o(p,b,c)),A=-1)}return{x:f,y:m,placement:b,strategy:s,middlewareData:S}};async function kl(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:b=!1,padding:S=0}=Fi(e,t),C=Cl(S),k=l[b?m==="floating"?"reference":"floating":m],z=Zr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(k)))==null||r?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:f,strategy:c})),I=m==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,N=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),V=await(n.isElement==null?void 0:n.isElement(N))?await(n.getScale==null?void 0:n.getScale(N))||{x:1,y:1}:{x:1,y:1},W=Zr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:I,offsetParent:N,strategy:c}):I);return{top:(z.top-W.top+C.top)/V.y,bottom:(W.bottom-z.bottom+C.bottom)/V.y,left:(z.left-W.left+C.left)/V.x,right:(W.right-z.right+C.right)/V.x}}const pp=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:c,elements:p}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:A=!0,...k}=Fi(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const z=cr(s),I=cr(l)===l,N=await(c.isRTL==null?void 0:c.isRTL(p.floating)),V=b||(I||!A?[Ss(l)]:lp(l));!b&&C!=="none"&&V.push(...cp(l,A,C,N));const W=[l,...V],he=await kl(e,k),E=[];let G=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&E.push(he[z]),m){const q=op(s,a,N);E.push(he[q[0]],he[q[1]])}if(G=[...G,{placement:s,overflows:E}],!E.every(q=>q<=0)){var X,Q;const q=(((X=n.flip)==null?void 0:X.index)||0)+1,se=W[q];if(se)return{data:{index:q,overflows:G},reset:{placement:se}};let ne=(Q=G.filter(ue=>ue.overflows[0]<=0).sort((ue,Re)=>ue.overflows[1]-Re.overflows[1])[0])==null?void 0:Q.placement;if(!ne)switch(S){case"bestFit":{var ce;const ue=(ce=G.map(Re=>[Re.placement,Re.overflows.filter(He=>He>0).reduce((He,Ie)=>He+Ie,0)]).sort((Re,He)=>Re[1]-He[1])[0])==null?void 0:ce[0];ue&&(ne=ue);break}case"initialPlacement":ne=l;break}if(s!==ne)return{reset:{placement:ne}}}return{}}}};function Al(t){const e=Kr(...t.map(n=>n.left)),r=Kr(...t.map(n=>n.top)),i=lr(...t.map(n=>n.right)),s=lr(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function fp(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>Zr(Al(s)))}const mp=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:l=2,x:c,y:p}=Fi(t,e),f=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),m=fp(f),b=Zr(Al(f)),S=Cl(l);function C(){if(m.length===2&&m[0].left>m[1].right&&c!=null&&p!=null)return m.find(k=>c>k.left-S.left&&c<k.right+S.right&&p>k.top-S.top&&p<k.bottom+S.bottom)||b;if(m.length>=2){if(ji(r)==="y"){const Q=m[0],ce=m[m.length-1],q=cr(r)==="top",se=Q.top,ne=ce.bottom,ue=q?Q.left:ce.left,Re=q?Q.right:ce.right,He=Re-ue,Ie=ne-se;return{top:se,bottom:ne,left:ue,right:Re,width:He,height:Ie,x:ue,y:se}}const k=cr(r)==="left",z=lr(...m.map(Q=>Q.right)),I=Kr(...m.map(Q=>Q.left)),N=m.filter(Q=>k?Q.left===I:Q.right===z),V=N[0].top,W=N[N.length-1].bottom,he=I,E=z,G=E-he,X=W-V;return{top:V,bottom:W,left:he,right:E,width:G,height:X,x:he,y:V}}return b}const A=await n.getElementRects({reference:{getBoundingClientRect:C},floating:i.floating,strategy:a});return s.reference.x!==A.reference.x||s.reference.y!==A.reference.y||s.reference.width!==A.reference.width||s.reference.height!==A.reference.height?{reset:{rects:A}}:{}}}};async function gp(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=cr(r),l=zs(r),c=ji(r)==="y",p=["left","top"].includes(a)?-1:1,f=n&&c?-1:1,m=Fi(e,t);let{mainAxis:b,crossAxis:S,alignmentAxis:C}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return l&&typeof C=="number"&&(S=l==="end"?C*-1:C),c?{x:S*f,y:b*p}:{x:b*p,y:S*f}}const vp=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=e,c=await gp(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+c.x,y:n+c.y,data:{...c,placement:a}}}}},yp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:k=>{let{x:z,y:I}=k;return{x:z,y:I}}},...c}=Fi(t,e),p={x:r,y:i},f=await kl(e,c),m=ji(cr(s)),b=Sl(m);let S=p[b],C=p[m];if(n){const k=b==="y"?"top":"left",z=b==="y"?"bottom":"right",I=S+f[k],N=S-f[z];S=_o(I,S,N)}if(a){const k=m==="y"?"top":"left",z=m==="y"?"bottom":"right",I=C+f[k],N=C-f[z];C=_o(I,C,N)}const A=l.fn({...e,[b]:S,[m]:C});return{...A,data:{x:A.x-r,y:A.y-i}}}}};function oi(t){return Pl(t)?(t.nodeName||"").toLowerCase():"#document"}function $t(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Pr(t){var e;return(e=(Pl(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pl(t){return t instanceof Node||t instanceof $t(t).Node}function Qt(t){return t instanceof Element||t instanceof $t(t).Element}function Jt(t){return t instanceof HTMLElement||t instanceof $t(t).HTMLElement}function Co(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $t(t).ShadowRoot}function zi(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=Nt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function bp(t){return["table","td","th"].includes(oi(t))}function Ns(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function aa(t){const e=oa(),r=Nt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function wp(t){let e=Cr(t);for(;Jt(e)&&!Qr(e);){if(Ns(e))return null;if(aa(e))return e;e=Cr(e)}return null}function oa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Qr(t){return["html","body","#document"].includes(oi(t))}function Nt(t){return $t(t).getComputedStyle(t)}function Ws(t){return Qt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Cr(t){if(oi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Co(t)&&t.host||Pr(t);return Co(e)?e.host:e}function Ol(t){const e=Cr(t);return Qr(e)?t.ownerDocument?t.ownerDocument.body:t.body:Jt(e)&&zi(e)?e:Ol(e)}function Nn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Ol(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),a=$t(s);return n?e.concat(a,a.visualViewport||[],zi(s)?s:[],a.frameElement&&r?Nn(a.frameElement):[]):e.concat(s,Nn(s,[],r))}function Dl(t){const e=Nt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Jt(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,l=xs(r)!==n||xs(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function El(t){return Qt(t)?t:t.contextElement}function Vr(t){const e=El(t);if(!Jt(e))return $r(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=Dl(e);let a=(n?xs(r.width):r.width)/i,l=(n?xs(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const xp=$r(0);function Ll(t){const e=$t(t);return!oa()||!e.visualViewport?xp:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Sp(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==$t(t)?!1:e}function ki(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=El(t);let a=$r(1);e&&(i?Qt(i)&&(a=Vr(i)):a=Vr(t));const l=Sp(n,r,i)?Ll(n):$r(0);let c=(s.left+l.x)/a.x,p=(s.top+l.y)/a.y,f=s.width/a.x,m=s.height/a.y;if(n){const b=$t(n),S=i&&Qt(i)?$t(i):i;let C=b,A=C.frameElement;for(;A&&i&&S!==C;){const k=Vr(A),z=A.getBoundingClientRect(),I=Nt(A),N=z.left+(A.clientLeft+parseFloat(I.paddingLeft))*k.x,V=z.top+(A.clientTop+parseFloat(I.paddingTop))*k.y;c*=k.x,p*=k.y,f*=k.x,m*=k.y,c+=N,p+=V,C=$t(A),A=C.frameElement}}return Zr({width:f,height:m,x:c,y:p})}function _p(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",a=Pr(i),l=e?Ns(e.floating):!1;if(i===a||l&&n)return r;let c={scrollLeft:0,scrollTop:0},p=$r(1);const f=$r(0),m=Jt(i);if((m||!m&&!n)&&((oi(i)!=="body"||zi(a))&&(c=Ws(i)),Jt(i))){const b=ki(i);p=Vr(i),f.x=b.x+i.clientLeft,f.y=b.y+i.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-c.scrollLeft*p.x+f.x,y:r.y*p.y-c.scrollTop*p.y+f.y}}function $p(t){return Array.from(t.getClientRects())}function Tl(t){return ki(Pr(t)).left+Ws(t).scrollLeft}function Cp(t){const e=Pr(t),r=Ws(t),i=t.ownerDocument.body,s=lr(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=lr(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+Tl(t);const l=-r.scrollTop;return Nt(i).direction==="rtl"&&(a+=lr(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function kp(t,e){const r=$t(t),i=Pr(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,c=0;if(s){n=s.width,a=s.height;const p=oa();(!p||p&&e==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:n,height:a,x:l,y:c}}function Ap(t,e){const r=ki(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Jt(t)?Vr(t):$r(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,c=s*n.x,p=i*n.y;return{width:a,height:l,x:c,y:p}}function ko(t,e,r){let i;if(e==="viewport")i=kp(t,r);else if(e==="document")i=Cp(Pr(t));else if(Qt(e))i=Ap(e,r);else{const s=Ll(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return Zr(i)}function Rl(t,e){const r=Cr(t);return r===e||!Qt(r)||Qr(r)?!1:Nt(r).position==="fixed"||Rl(r,e)}function Pp(t,e){const r=e.get(t);if(r)return r;let i=Nn(t,[],!1).filter(l=>Qt(l)&&oi(l)!=="body"),s=null;const n=Nt(t).position==="fixed";let a=n?Cr(t):t;for(;Qt(a)&&!Qr(a);){const l=Nt(a),c=aa(a);!c&&l.position==="fixed"&&(s=null),(n?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||zi(a)&&!c&&Rl(t,a))?i=i.filter(f=>f!==a):s=l,a=Cr(a)}return e.set(t,i),i}function Op(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const a=[...r==="clippingAncestors"?Ns(e)?[]:Pp(e,this._c):[].concat(r),i],l=a[0],c=a.reduce((p,f)=>{const m=ko(e,f,s);return p.top=lr(m.top,p.top),p.right=Kr(m.right,p.right),p.bottom=Kr(m.bottom,p.bottom),p.left=lr(m.left,p.left),p},ko(e,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Dp(t){const{width:e,height:r}=Dl(t);return{width:e,height:r}}function Ep(t,e,r){const i=Jt(e),s=Pr(e),n=r==="fixed",a=ki(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const c=$r(0);if(i||!i&&!n)if((oi(e)!=="body"||zi(s))&&(l=Ws(e)),i){const m=ki(e,!0,n,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else s&&(c.x=Tl(s));const p=a.left+l.scrollLeft-c.x,f=a.top+l.scrollTop-c.y;return{x:p,y:f,width:a.width,height:a.height}}function Rn(t){return Nt(t).position==="static"}function Ao(t,e){return!Jt(t)||Nt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ml(t,e){const r=$t(t);if(Ns(t))return r;if(!Jt(t)){let s=Cr(t);for(;s&&!Qr(s);){if(Qt(s)&&!Rn(s))return s;s=Cr(s)}return r}let i=Ao(t,e);for(;i&&bp(i)&&Rn(i);)i=Ao(i,e);return i&&Qr(i)&&Rn(i)&&!aa(i)?r:i||wp(t)||r}const Lp=async function(t){const e=this.getOffsetParent||Ml,r=this.getDimensions,i=await r(t.floating);return{reference:Ep(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Tp(t){return Nt(t).direction==="rtl"}const Rp={convertOffsetParentRelativeRectToViewportRelativeRect:_p,getDocumentElement:Pr,getClippingRect:Op,getOffsetParent:Ml,getElementRects:Lp,getClientRects:$p,getDimensions:Dp,getScale:Vr,isElement:Qt,isRTL:Tp},Mp=vp,Up=yp,Ip=pp,Fp=mp,jp=(t,e,r)=>{const i=new Map,s={platform:Rp,...r},n={...s.platform,_c:i};return up(t,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=Fs(class extends na{constructor(t){var e;if(super(t),t.type!==sa.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Sr}});var zp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Ni=(t,e,r,i)=>{for(var s=i>1?void 0:i?Np(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zp(e,r,s),s};let dr=class extends ot{constructor(){super(...arguments),this.dropdownRef=Le(),this.invokerRef=Le(),this.optionsRef=Le(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){jp(this.invokerRef.value,this.optionsRef.value,{middleware:[Mp(2),Ip(),Fp(),Up()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return v`

            <div class="dropdown" ${Fe(this.dropdownRef)}>

                <thermal-button class="${Zt(t)}" ${Fe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?v`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:v`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Fe(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};dr.shadowRootOptions={...ot.shadowRootOptions,mode:"open"};dr.styles=me`

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
    
    `;Ni([Ii({slot:"option"})],dr.prototype,"_options",2);Ni([y({type:String,reflect:!0})],dr.prototype,"open",2);Ni([y({type:String,reflect:!0,attribute:!0}),x()],dr.prototype,"interactive",2);Ni([y({type:String,reflect:!0})],dr.prototype,"variant",2);dr=Ni([Z("thermal-dropdown")],dr);var Wp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,Hs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Wp(e,r,s),s};let Jr=class extends ot{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Le(),this.contentRef=Le(),this.rulerContentRef=Le()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return v`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Fe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Fe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Fe(this.contentRef)}>

                    ${this.collapsed===!1?v`
                        <slot></slot>    
                    `:U}
                
                </div>

            </div>

            ${this.collapsed?v`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:U}
        
        `}};Jr.styles=me`

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

    `;Hs([x()],Jr.prototype,"collapsed",2);Hs([x()],Jr.prototype,"lastContentWidth",2);Hs([x()],Jr.prototype,"drawerRef",2);Jr=Hs([Z("thermal-bar")],Jr);var Bp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,ir=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Bp(e,r,s),s};let Tt=class extends ot{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Le(),this.contentRef=Le()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,a=r.contentRect.width,l=n-175,c=a-0,p=this.contentRef.value.offsetHeight,f=4/3;let m=0,b=0;p<l?(console.log("priorita šířky"),m=c,b=m/f):(console.log("priorita výšky"),b=l,m=b*f),this.contentRef.value.setAttribute("style",`width: ${m}px !important; height: ${b}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return v`

        <div class="container ${this.dark?"dark":"normal"}" ${Fe(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?v`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?v`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?v`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:v`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:U}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?v`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Fe(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?v`<div class="credits">

                    ${this.recorded?v`<div>
                            <div class="credits-field">Recorded at:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:U}

                    ${this.author?v`<div>
                            <div class="credits-field">Author:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:U}

                    ${this.license?v`<div>
                            <div class="credits-field">License:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:U}

                </div>`:U}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};Tt.styles=me`

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
    
    `;ir([Ii({slot:"bar",flatten:!0})],Tt.prototype,"barElements",2);ir([Ii({slot:"pre",flatten:!0})],Tt.prototype,"preElements",2);ir([Ii({slot:"content",flatten:!0})],Tt.prototype,"contentElements",2);ir([y({type:String,reflect:!0})],Tt.prototype,"fullscreen",2);ir([y({type:String,reflect:!0,attribute:!0})],Tt.prototype,"showfullscreen",2);ir([y({type:String,reflect:!0,attribute:!0})],Tt.prototype,"dark",2);ir([y()],Tt.prototype,"author",2);ir([y()],Tt.prototype,"recorded",2);ir([y()],Tt.prototype,"license",2);Tt=ir([Z("thermal-app")],Tt);var Yp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,la=(t,e,r,i)=>{for(var s=i>1?void 0:i?Gp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Yp(e,r,s),s};let Ai=class extends ot{render(){return v`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&v`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};Ai.styles=me`
    
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

    `;la([y({type:String})],Ai.prototype,"label",2);la([y({type:String})],Ai.prototype,"hint",2);Ai=la([Z("thermal-field")],Ai);var Xp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,Kp=(t,e,r,i)=>{for(var s=i>1?void 0:i?qp(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Xp(e,r,s),s};let Wn=class extends ot{render(){return v`
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
                        <p>version ${Xn}</p>
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
        `}};Wn.styles=me`

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
    
    `;Wn=Kp([Z("app-info-button")],Wn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ul=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Po=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ul(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zp{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qp=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Oo extends Zp{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const c=new Set;for(const[p,{consumerHost:f}]of this.subscriptions)c.has(p)||(c.add(p),f.dispatchEvent(new Ul(this.context,p,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Qp(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oe({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Oo(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Oo(a,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new Po(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new Po(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let cs;const Jp=new Uint8Array(16);function ef(){if(!cs&&(cs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!cs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return cs(Jp)}const at=[];for(let t=0;t<256;++t)at.push((t+256).toString(16).slice(1));function tf(t,e=0){return at[t[e+0]]+at[t[e+1]]+at[t[e+2]]+at[t[e+3]]+"-"+at[t[e+4]]+at[t[e+5]]+"-"+at[t[e+6]]+at[t[e+7]]+"-"+at[t[e+8]]+at[t[e+9]]+"-"+at[t[e+10]]+at[t[e+11]]+at[t[e+12]]+at[t[e+13]]+at[t[e+14]]+at[t[e+15]]}const rf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Do={randomUUID:rf};function sf(t,e,r){if(Do.randomUUID&&!e&&!t)return Do.randomUUID();t=t||{};const i=t.random||(t.rng||ef)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,tf(i)}const Da=class Da extends ot{constructor(){super(...arguments),this.UUID=sf()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}};Da.shadowRootOptions={...ot.shadowRootOptions,mode:"open"};let Rt=Da;const Il="manager-instance",Bs="manager-palette-context",Fl="manager-smooth-context",ha="manager-graph-function-context",nf=new ia,af="__internal_default_registry",of="__internal_default_group",lf=t=>t.addOrGetRegistry(af),hf=t=>t.groups.addOrGetGroup(of);var cf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,li=(t,e,r,i)=>{for(var s=i>1?void 0:i?df(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&cf(e,r,s),s};let ur=class extends Rt{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Ur.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();let t=nf;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=ur.sanitizeStringPalette(this.palette.key);e.palette=r,t=new ia(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)}),this.manager.smooth.addListener(this.UUIDManagerListeners,e=>{this.smooth=e}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,e=>{this.graphSmooth=e})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=ur.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(Ur).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:Ur[t]}}render(){return v`<slot></slot>`}};li([Oe({context:Il})],ur.prototype,"manager",2);li([y({type:String,reflect:!0,attribute:!0})],ur.prototype,"slug",2);li([Oe({context:Bs}),y({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:Ur[t]}),toAttribute:t=>t.key.toString()}})],ur.prototype,"palette",2);li([Oe({context:Fl}),y({type:String,reflect:!0,attribute:!0})],ur.prototype,"smooth",2);li([Oe({context:ha}),y({type:String,reflect:!0,attribute:!0})],ur.prototype,"graphSmooth",2);ur=li([Z("manager-provider")],ur);var uf=Object.defineProperty,pf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&uf(e,r,s),s};class Wi extends Rt{connectedCallback(){super.connectedCallback(),this.manager}}pf([le({context:Il,subscribe:!0}),x()],Wi.prototype,"manager");const jl="registry-instance",zl="registry-opacity",ca="registry-range-from",da="registry-range-to",ff="registry-loading",Nl="registry-min",Wl="registry-max";var mf=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,fr=(t,e,r,i)=>{for(var s=i>1?void 0:i?gf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&mf(e,r,s),s};let er=class extends Wi{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=lf(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(t){if(super.updated(t),(t.has("from")||t.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),t.has("opacity")){const e=Math.min(1,Math.max(0,this.opacity));e!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(e)}}render(){return v`<slot></slot>`}};fr([y({type:String,reflect:!0,attribute:!0})],er.prototype,"slug",2);fr([Oe({context:jl})],er.prototype,"registry",2);fr([Oe({context:zl}),y({type:Number,reflect:!0,attribute:!0})],er.prototype,"opacity",2);fr([Oe({context:Nl}),x()],er.prototype,"min",2);fr([Oe({context:Wl}),x()],er.prototype,"max",2);fr([Oe({context:ca}),y({type:Number,reflect:!0,attribute:!0})],er.prototype,"from",2);fr([Oe({context:da}),y({type:Number,reflect:!0,attribute:!0})],er.prototype,"to",2);fr([Oe({context:ff}),y({type:String,reflect:!0,attribute:!0})],er.prototype,"loading",2);er=fr([Z("registry-provider")],er);var vf=Object.defineProperty,yf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&vf(e,r,s),s};class At extends Wi{connectedCallback(){super.connectedCallback(),this.registry}}yf([le({context:jl,subscribe:!0})],At.prototype,"registry");const Hl="group-instance",ua="tool-context",pa="tools-context";var bf=Object.defineProperty,wf=Object.getOwnPropertyDescriptor,Hi=(t,e,r,i)=>{for(var s=i>1?void 0:i?wf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&bf(e,r,s),s};let ei=class extends At{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=hf(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return v`<slot></slot>`}};Hi([y({type:String,attribute:!0,reflect:!0})],ei.prototype,"slug",2);Hi([Oe({context:Hl})],ei.prototype,"group",2);Hi([Oe({context:ua})],ei.prototype,"tool",2);Hi([Oe({context:pa})],ei.prototype,"tools",2);ei=Hi([Z("group-provider")],ei);var xf=Object.defineProperty,Sf=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&xf(e,r,s),s};class hi extends At{constructor(){super()}connectedCallback(){super.connectedCallback()}}Sf([le({context:Hl,subscribe:!0})],hi.prototype,"group");const Bl="file",Vl="failure",Yl="file-loading",_f="file-loaded",fa="file-provider-element",ma="file-ms-context",ga="file-cursor",va="file-cursor-setter",Bi="playback",ya="duration",ba="playing",Gl="playbackSpeed",Xl="recording",ql="mayStop",$f="analysislist",wa="file-markers-context";var Cf=Object.defineProperty,ct=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Cf(e,r,s),s};class it extends hi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const r=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(r);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new B,this.onSuccess=new B,this.onFailure=new B,this.onInstanceCreated=new B}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(r=>console.log(r.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const r=Math.min(this.duration.ms,Math.max(0,this.ms));r!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(r)}e.has("playbackspeed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause())}attributeChangedCallback(e,r,i){super.attributeChangedCallback(e,r,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=r=>{this.currentFrame={ms:r.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:r.index,absolute:r.absolute},this.ms=r.relative},this.playbackSpeedCallback=r=>{this.speed=r},this.recordingCallback=r=>{this.recording=r},this.mayStopCallback=r=>{this.mayStop=r},this.analysisCallback=r=>{this.analysis=r},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}}ct([Oe({context:Bl}),x()],it.prototype,"file");ct([Oe({context:Vl}),x()],it.prototype,"failure");ct([Oe({context:Yl}),x()],it.prototype,"loading");ct([Oe({context:_f}),x()],it.prototype,"ready");ct([Oe({context:ba}),y({type:String,reflect:!0,attribute:!0})],it.prototype,"playing");ct([Oe({context:ya}),x()],it.prototype,"duration");ct([Oe({context:Bi}),x()],it.prototype,"currentFrame");ct([Oe({context:ga})],it.prototype,"cursor");ct([Oe({context:va})],it.prototype,"cursorSetter");ct([Oe({context:ma}),y({type:Number,reflect:!0,attribute:!0})],it.prototype,"ms");ct([Oe({context:Gl}),y({type:Number,reflect:!0,attribute:!0})],it.prototype,"speed");ct([Oe({context:Xl}),y({type:String,reflect:!0,attribute:!0})],it.prototype,"recording");ct([Oe({context:ql}),x()],it.prototype,"mayStop");ct([Ii({slot:"mark",flatten:!0})],it.prototype,"marksQueriedInternally");ct([Oe({context:wa})],it.prototype,"marksProvidedBelow");ct([Oe({context:$f})],it.prototype,"analysis");var kf=Object.defineProperty,Af=Object.getOwnPropertyDescriptor,Bt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Af(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&kf(e,r,s),s};let Mt=class extends it{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof qr?await e.createInstance(this.group).then(r=>(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),r.group.registry.postLoadedProcessing(),this.loading=!1,r)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e)).then(e=>{e instanceof ta?this.recieveInstance(e):this.failure=e})}createInitialAnalysis(t,e,r){if(r!==void 0&&r.trim().length>0){const i=t.slots.createFromSerialized(r,e);i==null||i.setSelected(!1,!0)}}handleLoaded(t){t.slots.onSlot1Serialize.set(this.UUID,e=>this.analysis1=e),t.slots.onSlot2Serialize.set(this.UUID,e=>this.analysis2=e),t.slots.onSlot3Serialize.set(this.UUID,e=>this.analysis3=e),t.slots.onSlot4Serialize.set(this.UUID,e=>this.analysis4=e),t.slots.onSlot5Serialize.set(this.UUID,e=>this.analysis5=e),t.slots.onSlot6Serialize.set(this.UUID,e=>this.analysis6=e),t.slots.onSlot7Serialize.set(this.UUID,e=>this.analysis7=e),this.createInitialAnalysis(t,1,this.analysis1),this.createInitialAnalysis(t,2,this.analysis2),this.createInitialAnalysis(t,3,this.analysis3),this.createInitialAnalysis(t,4,this.analysis4),this.createInitialAnalysis(t,5,this.analysis5),this.createInitialAnalysis(t,6,this.analysis6),this.createInitialAnalysis(t,7,this.analysis7)}assignAppropriateField(t,e){t===1?this.analysis1=e:t===2?this.analysis2=e:t===3?this.analysis3=e:t===4?this.analysis4=e:t===5?this.analysis5=e:t===6?this.analysis6=e:t===7&&(this.analysis7=e)}connectedCallback(){super.connectedCallback(),this.load()}updated(t){if(super.updated(t),t.has("thermal")){const e=t.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}this.handleAnalysisUpdate(1,t),this.handleAnalysisUpdate(2,t),this.handleAnalysisUpdate(3,t),this.handleAnalysisUpdate(4,t),this.handleAnalysisUpdate(5,t),this.handleAnalysisUpdate(6,t),this.handleAnalysisUpdate(7,t)}handleAnalysisUpdate(t,e){const r=`analysis${t}`;if(e.has(r)){const i=e.get(r),s=this[r];if(this.file){const n=this.file.slots.getSlot(t);if(n===void 0&&s&&s.trim().length>0&&(!i||(i==null?void 0:i.trim().length)>0)){const a=this.file.slots.createFromSerialized(s,t);a==null||a.setSelected(!1,!0)}else n!==void 0&&i&&(!s||(s==null?void 0:s.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(t):n&&s&&(n==null||n.recieveSerialized(s))}}}render(){return v`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};Bt([Oe({context:fa})],Mt.prototype,"providedSelf",2);Bt([y({type:String,attribute:!0,reflect:!0})],Mt.prototype,"thermal",2);Bt([y({type:String,attribute:!0,reflect:!0})],Mt.prototype,"visible",2);Bt([y({type:String,reflect:!0,attribute:!0})],Mt.prototype,"analysis1",2);Bt([y({type:String,reflect:!0,attribute:!0})],Mt.prototype,"analysis2",2);Bt([y({type:String,reflect:!0,attribute:!0})],Mt.prototype,"analysis3",2);Bt([y({type:String,reflect:!0,attribute:!0})],Mt.prototype,"analysis4",2);Bt([y({type:String,reflect:!0,attribute:!0})],Mt.prototype,"analysis5",2);Bt([y({type:String,reflect:!0,attribute:!0})],Mt.prototype,"analysis6",2);Bt([y({type:String,reflect:!0,attribute:!0})],Mt.prototype,"analysis7",2);Mt=Bt([Z("file-provider")],Mt);var Pf=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,ci=(t,e,r,i)=>{for(var s=i>1?void 0:i?Of(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Pf(e,r,s),s};let kr=class extends it{constructor(){super(...arguments),this.providedSelf=this,this.container=Le(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof qr){const r=await e.createInstance(this.group);this.file=r,this.onSuccess.call(r),this.recieveInstance(r),r.group.registry.postLoadedProcessing()}else e instanceof bs&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const t={dropin:!0,hover:this.hover};return v`

                    <div class="container">
                        <div ${Fe(this.container)} class="${Zt(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${vl.map(e=>e.map(r=>"."+r.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,r;(r=(e=this.listener)==null?void 0:e.input)==null||r.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return v`
            ${this.ready?v`<slot></slot>`:U}
            <slot name="mark"></slot>
        `}};kr.styles=me`

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
    
    `;ci([Oe({context:fa})],kr.prototype,"providedSelf",2);ci([x()],kr.prototype,"container",2);ci([x()],kr.prototype,"ready",2);ci([x()],kr.prototype,"hover",2);ci([x()],kr.prototype,"listener",2);kr=ci([Z("file-dropin")],kr);var Df=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,xa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ef(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Df(e,r,s),s};let Pi=class extends hi{constructor(){super(...arguments),this.container=Le(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const t={dropin:!0,hover:this.hover};return v`

            <div class="container">
            
                <div ${Fe(this.container)} class="${Zt(t)}"></div>

            </div>
        
        `}};Pi.styles=me`

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
    
    `;xa([x()],Pi.prototype,"container",2);xa([x()],Pi.prototype,"hover",2);Pi=xa([Z("group-dropin")],Pi);var Lf=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,Kl=(t,e,r,i)=>{for(var s=i>1?void 0:i?Tf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Lf(e,r,s),s};let _s=class extends At{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return v`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return v`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Ur).map(([t,e])=>v`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};_s.styles=me`

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

    `;Kl([le({context:Bs,subscribe:!0})],_s.prototype,"value",2);_s=Kl([Z("registry-palette-dropdown")],_s);var Rf=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,Zl=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Rf(e,r,s),s};let $s=class extends At{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return v`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return v`
            <div class="container">
                ${Object.entries(Ur).map(([t,e])=>v`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};$s.styles=me`

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

    `;Zl([le({context:Bs,subscribe:!0}),x()],$s.prototype,"value",2);$s=Zl([Z("registry-palette-buttons")],$s);var Uf=Object.defineProperty,If=Object.getOwnPropertyDescriptor,Ql=(t,e,r,i)=>{for(var s=i>1?void 0:i?If(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Uf(e,r,s),s};let Cs=class extends Wi{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.smooth.setSmooth(!1)}
            >Pixelated</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.smooth.setSmooth(!0)}
            >Smooth</thermal-button>
        `}};Cs.styles=me`
    
        :host {}

    `;Ql([le({context:Fl,subscribe:!0})],Cs.prototype,"smooth",2);Cs=Ql([Z("manager-smooth-switch")],Cs);var Ff=Object.defineProperty,jf=Object.getOwnPropertyDescriptor,Jl=(t,e,r,i)=>{for(var s=i>1?void 0:i?jf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ff(e,r,s),s};let ks=class extends Wi{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
            >Straight lines</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
            >Smooth lines</thermal-button>
        `}};ks.styles=me`
    
        :host {}

    `;Jl([le({context:ha,subscribe:!0})],ks.prototype,"smooth",2);ks=Jl([Z("manager-graph-smooth-switch")],ks);var zf=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,eh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Nf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zf(e,r,s),s};let As=class extends At{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return v`
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
            <div class="thermal-opacity-container">
                <div>VIS</div>
                <div>${this.value}</div>
                <div>IR</div>
            </div>
            <slot></slot>
        `}};As.styles=me`

        :host {
        }

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
            display: block;
            width: 100%;
            cursor: pointer;
        }
        
        .thermal-opacity-container {
            display: flex;
            width: 100%;
            align-items: space-between;
            justify-content: space-between;
            color: var( --thermal-slate-dark );
            font-size: calc( var( --thermal-fs-sm ) * .7 );
        }
    
    `;eh([le({context:zl,subscribe:!0})],As.prototype,"value",2);As=eh([Z("registry-opacity-slider")],As);var Wf=Object.defineProperty,Hf=Object.getOwnPropertyDescriptor,Bf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Wf(e,r,s),s};let Eo=class extends At{doAction(){this.registry.range.applyAuto()}render(){return v`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Eo=Bf([Z("registry-range-auto-button")],Eo);var Vf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,Gf=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Vf(e,r,s),s};let Lo=class extends At{doAction(){this.registry.range.applyMinmax()}render(){return v`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Lo=Gf([Z("registry-range-full-button")],Lo);var Xf=Object.defineProperty,qf=Object.getOwnPropertyDescriptor,Vs=(t,e,r,i)=>{for(var s=i>1?void 0:i?qf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Xf(e,r,s),s};let tr=class extends At{constructor(){super(...arguments),this.ticksRef=Le(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/tr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return v`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Fe(this.ticksRef)}>

                    ${this.ticks.map(t=>v`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(tr.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};tr.TICK_WIDTH=40;tr.TICK_FIXED=2;tr.styles=me`

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


    `;Vs([y({type:String,reflect:!0})],tr.prototype,"placement",2);Vs([x()],tr.prototype,"minmax",2);Vs([x()],tr.prototype,"ticks",2);tr=Vs([Z("registry-ticks-bar")],tr);var Kf=Object.defineProperty,Zf=Object.getOwnPropertyDescriptor,Vi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Kf(e,r,s),s};let ti=class extends At{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return v`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return v`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};Vi([x()],ti.prototype,"minmax",2);Vi([x()],ti.prototype,"range",2);Vi([x()],ti.prototype,"opacity",2);Vi([x()],ti.prototype,"palette",2);ti=Vi([Z("registry-log")],ti);(()=>{var t=Object.defineProperty,e=Math.pow,r=(h,u,w)=>u in h?t(h,u,{enumerable:!0,configurable:!0,writable:!0,value:w}):h[u]=w,i=(h,u,w)=>(r(h,typeof u!="symbol"?u+"":u,w),w),s=(h,u)=>` ${u&&u.length>0?u.map(w=>`<link rel="stylesheet" href="${w}" />`).join(""):""} <style> ${h} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",c="pointers-max-distance",p="range-dragging",f="data",m="min",b="max",S="step",C="round",A="type",k="theme",z="rtl",I="btt",N="disabled",V="keyboard-disabled",W="mousewheel-disabled",he="slider-width",E="slider-height",G="slider-radius",X="slider-bg",Q="slider-bg-hover",ce="slider-bg-fill",q="pointer-width",se="pointer-height",ne="pointer-radius",ue="pointer-bg",Re="pointer-bg-hover",He="pointer-bg-focus",Ie="pointer-shadow",xt="pointer-shadow-hover",St="pointer-shadow-focus",ar="pointer-border",Vt="pointer-border-hover",Yt="pointer-border-focus",Gt="animate-onclick",jt="css-links",ze="vertical",st="horizontal",Dr=(h,u,w,g,M)=>{let te=u-h;return te===0?w:(g-w)*(M-h)/te+w},pt=h=>!isNaN(parseFloat(h))&&isFinite(h),Ne=(h,u)=>pt(h)?Number(h):u,Xi=(h,u)=>u===0?0:Math.round(h/u)*u,Ks=(h,u=1/0)=>{if(u===1/0)return h;let w=e(10,u);return Math.round(h*w)/w},Ze=h=>h==null?!1:typeof h=="boolean"?h:h.trim().toLowerCase()==="true",Zs=(h,u)=>{h.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},Qs=(h,u)=>{h.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},Js=(h,u)=>{h.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},en=(h,u)=>{h.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},tn=(h,u)=>{if(!u||u.length<=0)return;let w=u.map(M=>pt(M)?Ne(M,M):M),g={values:w||[]};g.value=w[0],g.value0=w[0],g.value1=w[0];for(let M=1;M<w.length;M++)g[`value${M+1}`]=w[M];h.dispatchEvent(new CustomEvent("change",{detail:g}))},P=(h,u,w)=>{let g=0,M,te,fe,F,j=!1,ve=(ie,Ue,tt,Qe,Ve,Ye)=>{let mt=g;tt!==void 0&&ie>tt&&(ie=tt),Ue!==void 0&&ie<Ue&&(ie=Ue),g=ie;let gt=g;return(Qe===ze&&Ye||Qe===st&&Ve)&&(gt=100-gt),Qe===ze?u.style.top=`${gt}%`:u.style.left=`${gt}%`,mt!==g},xe=ie=>ie===u||u.contains(ie),K=(ie,Ue,tt,Qe)=>{M=ie,te=Ue,fe=tt,F=Qe},De=ie=>{j=ie,u.classList.toggle("disabled",j),j?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},Et=(ie,Ue)=>{Ue==null?u.removeAttribute(ie):u.setAttribute(ie,Ue)},lt=ie=>u.getAttribute(ie),re=ie=>{if(!j){switch(ie.key){case"ArrowLeft":{ie.preventDefault(),typeof M=="function"&&M(w);break}case"ArrowRight":{ie.preventDefault(),typeof te=="function"&&te(w);break}case"ArrowUp":{ie.preventDefault(),typeof fe=="function"&&fe(w);break}case"ArrowDown":{ie.preventDefault(),typeof F=="function"&&F(w);break}}en(h,ie)}},ye=()=>{j||Zs(h,u)};return u.className=`pointer pointer-${w}`,u.addEventListener("keydown",re),u.addEventListener("click",ye),{$pointer:u,get percent(){return g},get disabled(){return j},set disabled(ie){De(ie)},updatePosition:ve,isClicked:xe,setCallbacks:K,setAttr:Et,getAttr:lt,destroy:()=>{u.removeEventListener("keydown",re),u.removeEventListener("click",ye),u.remove()}}},L=h=>{if(h==null)return;if(Array.isArray(h))return h;if(h.trim()==="")return;let u=h.split(","),w=[],g=!0;for(let M=0;M<u.length;M++){let te=u[M].trim();te!==""&&(w.push(te),pt(te)||(g=!1))}return g?w.map(M=>Number(M)):w},T=(h,u)=>u?u.findIndex(w=>w===h||w.toString().trim()===h.toString().trim()):-1,R=h=>({updatePosition:(u,w,g,M)=>{if(w.length<=0)return;let te=w.length===1,fe=w[0],F=w[w.length-1];u===ze?(h.style.removeProperty("width"),h.style.removeProperty("right"),h.style.removeProperty("left"),te?h.style.height=`${fe}%`:h.style.height=`${Math.abs(fe-F)}%`,M?(h.style.bottom="0%",te?h.style.top="auto":h.style.top=`${Math.min(100-F,100-fe)}%`):(h.style.bottom="auto",te?h.style.top="0%":h.style.top=`${Math.min(fe,F)}%`)):(h.style.removeProperty("height"),h.style.removeProperty("top"),h.style.removeProperty("bottom"),te?h.style.width=`${fe}%`:h.style.width=`${Math.abs(fe-F)}%`,g?(h.style.right="0%",te?h.style.left="auto":h.style.left=`${Math.min(100-F,100-fe)}%`):(h.style.right="auto",te?h.style.left="0%":h.style.left=`${Math.min(fe,F)}%`))}}),ee="--animate-onclick",ke="--width",oe="--height",Me="--panel-bg-border-radius",_e="--panel-bg",H="--panel-bg-hover",$e="--panel-bg-fill",$="--pointer-width",O="--pointer-height",de="--pointer-border-radius",be="--pointer-bg",qe="--pointer-bg-hover",nt="--pointer-bg-focus",Xt="--pointer-shadow",_t="--pointer-shadow-hover",Dt="--pointer-shadow-focus",vr="--pointer-border",J="--pointer-border-hover",pe="--pointer-border-focus",D=(h,u,w)=>{let g=new Map;for(let M of h.attributes){let te=M.nodeName.trim().toLowerCase();if(!u.test(te))continue;let fe=te.replace(/\D/g,"").trim(),F=fe===""||fe==="0"||fe==="1"?0:Ne(fe,0)-1,j=w&&typeof w=="function"?w(M.value):M.value;g.set(F,j)}return g},ae=h=>{if(!h)return null;let u=h.getAttribute(jt);if(!u)return null;let w=u.split(";"),g=[];for(let M of w)M.trim()!==""&&g.push(M.trim());return g},Ae=[[ke,he,"sliderWidth",null],[oe,E,"sliderHeight",null],[Me,G,"sliderRadius",null],[_e,X,"sliderBg",null],[H,Q,"sliderBgHover",null],[$e,ce,"sliderBgFill",null],[$,q,"pointer#Width",/^pointer([0-9]*)-width$/],[O,se,"pointer#Height",/^pointer([0-9]*)-height$/],[de,ne,"pointer#Radius",/^pointer([0-9]*)-radius$/],[be,ue,"pointer#Bg",/^pointer([0-9]*)-bg$/],[qe,Re,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[nt,He,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Xt,Ie,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[_t,xt,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Dt,St,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[vr,ar,"pointer#Border",/^pointer([0-9]*)-border$/],[J,Vt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[pe,Yt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Ce=(h,u,w)=>{let g=null,M=[],te=new Map,fe=(re,ye=u)=>{let ie=[...ye.classList];for(let Ue of ie)Ue.startsWith(re)&&u.classList.remove(Ue)},F=()=>{fe("shape");let re=u.querySelectorAll(".pointer");for(let ye of re)fe("shape",ye)},j=re=>{g=re,fe("theme-"),typeof re=="string"&&u.classList.add(`theme-${re}`)},ve=()=>{if(F(),!(M.length<=0)){u.classList.add("shape",`shape-${M[0]}`);for(let re=1;re<M.length;re++){let ye=M[re];if(!ye)continue;let ie=u.querySelector(`.pointer-${re}`);!ie||ie.classList.add("shape",`shape-${ye}`)}}},xe=(re,ye)=>{M[re]=ye,ve()},K=()=>{F();let re=D(h,/^pointer([0-9]*)-shape$/);if(!(re.size<=0)){for(let ye of re){let ie=ye[0];M[ie]=ye[1]}ve()}},De=(re,ye)=>`${re}-${ye}`,Et=(re,ye,ie)=>{let Ue=w[ie];if(!Ue)return;let tt=ie===0?u:Ue.$pointer;if(ye==null){te.has(De(re,ie))&&te.delete(De(re,ie)),tt.style.removeProperty(re);return}te.set(De(re,ie),ye),tt.style.setProperty(re,ye)},lt=(re,ye)=>te.get(De(re,ye));return(()=>{for(let re of Ae){let[ye,ie,Ue,tt]=re;if(tt){let Ve=D(h,tt);for(let Ye of Ve){let mt=Ye[0],gt=Ye[1];Et(ye,gt,mt)}}else{let Ve=h.getAttribute(ie);Et(ye,Ve,0)}let Qe=[];if(Ue.indexOf("#")===-1)Qe.push([Ue,0]);else{Qe.push([Ue.replace("#",""),0]),Qe.push([Ue.replace("#","0"),0]),Qe.push([Ue.replace("#","1"),0]);for(let Ve=1;Ve<w.length;Ve++)Qe.push([Ue.replace("#",(Ve+1).toString()),Ve])}for(let Ve of Qe)try{let Ye=Ve[0],mt=Ve[1];Object.prototype.hasOwnProperty.call(h,Ye)||Object.defineProperty(h,Ye,{get(){return lt(ye,mt)},set:gt=>{Et(ye,gt,mt)}})}catch(Ye){console.error(Ye)}}j(h.getAttribute(k)),K()})(),{setStyle:Et,getStyle:lt,get theme(){return g},set theme(re){j(re)},get pointerShapes(){return M},setPointerShape:xe}},We="animate-on-click",we="range-dragging",ft=(h,u,w,g)=>{let M=[],te=xe=>{for(let K of M)K.update&&typeof K.update=="function"&&K.update(xe)},fe=()=>{for(let xe of M)xe.destroy&&typeof xe.destroy=="function"&&xe.destroy()},F=(xe,K)=>{for(let De of M)De.onAttrChange&&typeof De.onAttrChange=="function"&&De.onAttrChange(xe,K)},j=xe=>{if(xe.gettersAndSetters){for(let K of xe.gettersAndSetters)if(!(!K.name||!K.attributes))try{Object.prototype.hasOwnProperty.call(h,K.name)||Object.defineProperty(h,K.name,K.attributes)}catch(De){console.error("defineSettersGetters error:",De)}}},ve=xe=>{var K;if(!xe.css)return;let De=(K=h.shadowRoot)==null?void 0:K.querySelector("style");!De||(De.innerHTML+=xe.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let xe of window.tcRangeSliderPlugins){let K=xe();M.push(K),K.init&&typeof K.init=="function"&&(K.init(h,u,w,g),j(K),ve(K))}},update:te,onAttrChange:F,destroy:fe}},Ke=10,qi=20,ih=(h,u)=>{let w=new Map,g=/^value([0-9]*)$/;for(let F of h.attributes){let j=F.nodeName.trim().toLowerCase();if(!g.test(j))continue;let ve=j.replace("value","").trim(),xe=ve===""||ve==="0"||ve==="1"?0:Ne(ve,0)-1,K=pt(F.value)?Ne(F.value,0):F.value;w.set(xe,K)}let M=Math.max(...Array.from(w.keys())),te=[];te.push([P(h,u,0),w.get(0)]);let fe=u;for(let F=1;F<=M;F++){let j=u.cloneNode(!0);fe.after(j),fe=j,te.push([P(h,j,F),w.get(F)])}return te},Ea=(h,u,w,g,M,te,fe)=>{try{Object.defineProperty(h,g,{configurable:!0,get(){if(!u)return;let F=u.pointers[w];if(!F)return;let j=u.getTextValue(F.percent);return pt(j)?Ne(j,j):j},set:F=>{u.pointers[w]?u==null||u.setValue(F,w):u==null||u.addPointer(F)}}),Object.defineProperty(h,M,{configurable:!0,get(){var F,j;return(j=(F=u==null?void 0:u.pointers[w])==null?void 0:F.getAttr("aria-label"))!=null?j:void 0},set:F=>{!u||u.setAriaLabel(w,F)}}),Object.defineProperty(h,te,{configurable:!0,get(){var F,j;return(j=(F=u==null?void 0:u.styles)==null?void 0:F.pointerShapes[w])!=null?j:null},set:F=>{!u||!u.styles||u.styles.setPointerShape(w,F)}}),Object.defineProperty(h,fe,{configurable:!0,get(){var F;return(F=u==null?void 0:u.pointers[w].disabled)!=null?F:!1},set:F=>{if(!u)return;let j=u==null?void 0:u.pointers[w];!j||(j.disabled=F)}})}catch(F){console.error(F)}},sh=(h,u)=>{let w=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Ke;g++)w.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of w)Ea(h,u,g[4],g[0],g[1],g[2],g[3])},La=(h,u,w)=>{var g;let M=(g=w.shadowRoot)==null?void 0:g.querySelector(".container");if(M)for(let te of h)u?M.prepend(te.$pointer):M.append(te.$pointer)},nh=(h,u)=>{if(!(!u||h.length<=1)){for(let w of h)w.$pointer.style.zIndex=qi.toString();u.$pointer.style.zIndex=(qi*2).toString()}},rn=0,ui=100,zr=2,Ta="0.3s",ah=(h,u,w)=>{let g=w.map(d=>d[0]),M=null,te=null,fe=null,F=null,j=rn,ve=ui,xe,K,De=st,Et=zr,lt=!1,re=!1,ye=!1,ie=0,Ue=1/0,tt=!1,Qe,Ve,Ye=!1,mt=!1,gt=!1,yr=Ta,Ra=[],Ma=d=>{Ye||(d.preventDefault&&d.preventDefault(),Er(d),window.addEventListener("mousemove",Er),window.addEventListener("mouseup",Ki),Qs(h,d))},Ki=d=>{Ye||(Qe=void 0,Ve=void 0,window.removeEventListener("mousemove",Er),window.removeEventListener("mouseup",Ki),yr&&u.classList.add(We),Js(h,d))},hh=(d,_)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(d)&&yr&&u.classList.remove(We),g[0];let Y=dh(d);if(tt){let Pe=_,zt=Qi(Pe);zt!==void 0&&(Pe=Xi(Pe,zt)),Y?(Qe=Pe,Ve=0,yr&&u.classList.remove(We)):Qe!==void 0&&(Ve=Pe-Qe,Qe=Pe)}if(!ch(d)&&!Y){for(let Pe of g)if(!(!Pe.isClicked(d)||Pe.disabled))return yr&&u.classList.remove(We),Pe;for(let Pe of g)if(M===Pe)return Pe}let Ee=1/0,Ge=null;for(let Pe of g){if(Pe.disabled)continue;let zt=Math.abs(_-Pe.percent);zt<Ee&&(Ee=zt,Ge=Pe)}return Ge},Ua=()=>g.findIndex(d=>M===d&&!d.disabled),Er=d=>{let _;if(De===ze){let{height:Ee,top:Ge}=u.getBoundingClientRect(),Pe=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;_=Math.min(Math.max(0,Pe-Ge),Ee)*100/Ee}else{let{width:Ee,left:Ge}=u.getBoundingClientRect(),Pe=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;_=Math.min(Math.max(0,Pe-Ge),Ee)*100/Ee}if((lt||re)&&(_=100-_),M=hh(d.target,_),M&&nh(g,M),tt&&g.length>1&&Ve!==void 0){let Ee=g[0],Ge=g[g.length-1],Pe=Ee.percent+Ve<0,zt=Ge.percent+Ve>100;if(Pe||zt)return;for(let as=0;as<g.length;as++)vt(as,g[as].percent+Ve);return}let Y=Ua();Y!==-1&&(vt(Y,_),M==null||M.$pointer.focus())},Zi=d=>{if(Ye||document.activeElement!==h||M!=null&&M.disabled)return;d.stopPropagation(),d.preventDefault();let _=d.deltaY<0,Y=lt||re,Ee=_?!Y:Y,Ge=Ua();Ge!==-1&&(Ee?pi(Ge,g[Ge].percent):fi(Ge,g[Ge].percent))},Ia=d=>{Ye||mt||(De===ze?re?vt(d,100):vt(d,0):lt?fi(d,g[d].percent):pi(d,g[d].percent))},Fa=d=>{Ye||mt||(De===ze?re?vt(d,0):vt(d,100):lt?pi(d,g[d].percent):fi(d,g[d].percent))},ja=d=>{Ye||mt||(De===ze?re?fi(d,g[d].percent):pi(d,g[d].percent):lt?vt(d,100):vt(d,0))},za=d=>{Ye||mt||(De===ze?re?pi(d,g[d].percent):fi(d,g[d].percent):lt?vt(d,0):vt(d,100))},ch=d=>d.classList.contains("panel"),dh=d=>d.classList.contains("panel-fill"),pi=(d,_)=>{if(_===void 0)return;let Y=Qi(_);Y==null&&(Y=1),_-=Y,_<0&&(_=0),vt(d,_)},fi=(d,_)=>{if(_===void 0)return;let Y=Qi(_);Y==null&&(Y=1),_+=Y,_>100&&(_=100),vt(d,_)},Lr=()=>{!F||F.update({percents:Na(),values:Wa(),$pointers:Ha(),min:Ba(),max:Va(),data:an(),step:nn(),round:ln(),type:on(),textMin:Ji(),textMax:es(),rightToLeft:dn(),bottomToTop:un(),pointersOverlap:gn(),pointersMinDistance:hn(),pointersMaxDistance:cn(),rangeDragging:vn(),disabled:pn(),keyboardDisabled:fn(),mousewheelDisabled:mn()})},uh=()=>{Lr()},ph=d=>{if(!(ye||g.length<=1||ve===j))if(d===0){let _=Ue*100/(ve-j);return Math.max(0,g[d+1].percent-_)}else{let _=ie*100/(ve-j);return Math.min(g[d-1].percent+_,100)}},fh=d=>{if(!(ye||g.length<=1||ve===j))if(d===g.length-1){let _=Ue*100/(ve-j);return Math.min(g[d-1].percent+_,100)}else{let _=ie*100/(ve-j);return Math.max(0,g[d+1].percent-_)}},Qi=d=>{let _;if(typeof xe=="function"){let Y=Dr(0,100,j,ve,d);_=xe(Y,d)}else _=xe;if(pt(_)){let Y=ve-j;return _=Y===0?0:_*100/Y,_}},Nr=d=>{if(d===void 0)return;let _=Dr(0,100,j,ve,d);return K!==void 0?K[Math.round(_)]:Ks(_,Et)},Ji=()=>K!==void 0?K[j]:j,es=()=>K!==void 0?K[ve]:ve,nn=()=>xe,mh=d=>{var _;return d<=0||ye?Ji():(_=Nr(g[d-1].percent))!=null?_:""},gh=d=>{var _;return g.length<=1||d>=g.length-1||ye?es():(_=Nr(g[d+1].percent))!=null?_:""},Na=()=>g.map(d=>d.percent),Wa=()=>g.map(d=>Nr(d.percent)),Ha=()=>g.map(d=>d.$pointer),Ba=()=>j,Va=()=>ve,an=()=>K,on=()=>De,ln=()=>Et,hn=()=>ie,cn=()=>Ue,vh=d=>Ra[d],dn=()=>lt,un=()=>re,pn=()=>Ye,fn=()=>mt,mn=()=>gt,gn=()=>ye,vn=()=>tt,vt=(d,_)=>{if(_===void 0)return;let Y=Qi(_);Y!==void 0&&(_=Xi(_,Y));let Ee=g[d];if(!Ee)return;let Ge=Ee.updatePosition(_,ph(d),fh(d),De,lt,re);te==null||te.updatePosition(De,g.map(Pe=>Pe.percent),lt,re),Lr();for(let Pe of g){let zt=Nr(Pe.percent);zt!==void 0&&(Pe.setAttr("aria-valuenow",zt.toString()),Pe.setAttr("aria-valuetext",zt.toString()))}bh(),Ge&&tn(h,g.map(Pe=>Nr(Pe.percent)))},qt=()=>{for(let d=0;d<g.length;d++)vt(d,g[d].percent)},yh=(d,_)=>{j=K!==void 0?0:Ne(d,rn),ve=K!==void 0?K.length-1:Ne(_,ui),ts(j),rs(ve)},bh=()=>{var d,_;for(let Y=0;Y<g.length;Y++){let Ee=g[Y];Ee.setAttr("aria-valuemin",((d=mh(Y))!=null?d:"").toString()),Ee.setAttr("aria-valuemax",((_=gh(Y))!=null?_:"").toString())}},ts=d=>{j=Ne(d,rn),j>ve&&(ve=j+ui),qt()},rs=d=>{ve=Ne(d,ui),ve<j&&(ve=j+ui),qt()},Ya=d=>{ye=!0;for(let _=0;_<d.length;_++)is(d[_],_);ye=!1;for(let _=0;_<d.length;_++)is(d[_],_)},is=(d,_)=>{let Y;K!==void 0?(Y=d==null?0:T(d,K),Y===-1&&(Y=0)):(Y=Ne(d,j),Y<j&&(Y=j),Y>ve&&(Y=ve));let Ee=Dr(j,ve,0,100,Y);vt(_,Ee)},ss=d=>{if(d==null){xe=void 0;return}if(typeof d=="function"){xe=d,qt();return}if(pt(d)){xe=Ne(d,1);let _=Math.abs(ve-j);xe>_&&(xe=void 0),qt();return}xe=void 0},yn=d=>{ye=d,qt()},bn=d=>{(!pt(d)||d<0)&&(d=0),ie=d},wn=d=>{(!pt(d)||d<0)&&(d=1/0),Ue=d},xn=d=>{Ye=d,u.classList.toggle("disabled",Ye),Ye?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},Ga=d=>{mt=d},Xa=d=>{gt=d,gt?document.removeEventListener("wheel",Zi):document.addEventListener("wheel",Zi,{passive:!1})},Sn=d=>{if(d==null){K=void 0;return}if(K=L(d),K===void 0||K.length<=0){K=void 0;return}ts(0),rs(K.length-1),xe===void 0&&ss(1)},_n=d=>{var _;typeof d=="string"?De=d.trim().toLowerCase()===ze?ze:st:De=st;let Y=(_=h.shadowRoot)==null?void 0:_.querySelector(".range-slider-box");if(!Y)return;Y.className=`range-slider-box type-${De}`,qt();let Ee=De===ze?"vertical":"horizontal";for(let Ge of g)Ge.setAttr("aria-orientation",Ee)},$n=d=>{lt=d,g.length>1&&La(g,lt,h),qt(),Lr()},Cn=d=>{re=d,g.length>1&&La(g,re,h),qt(),Lr()},kn=d=>{Et=Ne(d,zr),Et<0&&(Et=zr),Lr()},qa=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(yr=void 0,u.style.removeProperty(ee),u.classList.remove(We)):(yr=d.toString(),u.style.setProperty(ee,yr),u.classList.add(We))},Ka=(d,_)=>{let Y=g[d];!Y||(Y.setAttr("aria-label",_),Ra[d]=_)},ns=d=>{if(Qe=void 0,g.length<=1){tt=!1,u.classList.remove(we);return}tt=d,u.classList.toggle(we,tt)},wh=()=>{xn(Ze(h.getAttribute(N))),mt=Ze(h.getAttribute(V)),gt=Ze(h.getAttribute(W));let d=D(h,/^pointer([0-9]*)-disabled$/,_=>Ze(_));for(let _ of d){let Y=_[0];!g[Y]||(g[Y].disabled=_[1])}},xh=()=>{let d=D(h,/^aria-label([0-9]*)$/);for(let _ of d){let Y=_[0];Ka(Y,_[1])}},Sh=d=>{let _=g.length,Y=g[_-1].$pointer,Ee=Y.cloneNode(!0);Y.after(Ee);let Ge=P(h,Ee,_);return Ge.setCallbacks(Ia,Fa,ja,za),g.push(Ge),is(d,_),qt(),Lr(),_},_h=()=>{let d=g.length,_=g[d-1];return _?(_.destroy(),g.pop(),g.length<=1&&ns(!1),qt(),Lr(),d-1):-1};return(()=>{var d,_;for(let Ee of g)Ee.setCallbacks(Ia,Fa,ja,za);let Y=(d=h.shadowRoot)==null?void 0:d.querySelector(".panel-fill");Y&&(te=R(Y)),_n(h.getAttribute(A)),$n(Ze(h.getAttribute(z))),Cn(Ze(h.getAttribute(I))),yh(h.getAttribute(m),h.getAttribute(b)),ss(h.getAttribute(S)),Sn(h.getAttribute(f)),Ya(w.map(Ee=>Ee[1])),yn(Ze(h.getAttribute(a))),bn(Ne(h.getAttribute(l),0)),wn(Ne(h.getAttribute(c),1/0)),ns(Ze(h.getAttribute(p))),kn(Ne(h.getAttribute(C),zr)),wh(),xh(),fe=Ce(h,u,g),qa((_=h.getAttribute(Gt))!=null?_:Ta),u.addEventListener("mousedown",Ma),u.addEventListener("mouseup",Ki),u.addEventListener("touchmove",Er),u.addEventListener("touchstart",Er),gt||document.addEventListener("wheel",Zi,{passive:!1}),F=ft(h,uh,{setValues:Ya,setMin:ts,setMax:rs,setStep:ss,setPointersOverlap:yn,setPointersMinDistance:bn,setPointersMaxDistance:wn,setDisabled:xn,setType:_n,setRightToLeft:$n,setBottomToTop:Cn,setRound:kn,setKeyboardDisabled:Ga,setMousewheelDisabled:Xa,setRangeDragging:ns,setData:Sn},{getPercents:Na,getValues:Wa,getPointerElements:Ha,getMin:Ba,getMax:Va,getStep:nn,getData:an,getType:on,getRound:ln,getTextMin:Ji,getTextMax:es,isRightToLeft:dn,isBottomToTop:un,isDisabled:pn,isKeyboardDisabled:fn,isMousewheelDisabled:mn,isPointersOverlap:gn,isRangeDraggingEnabled:vn,getPointersMinDistance:hn,getPointersMaxDistance:cn}),F.init()})(),{get pointers(){return g},get styles(){return fe},get pluginsManager(){return F},get min(){return Ji()},get max(){return es()},get step(){return nn()},get pointersOverlap(){return gn()},set pointersOverlap(d){yn(d)},get pointersMinDistance(){return hn()},set pointersMinDistance(d){bn(d)},get pointersMaxDistance(){return cn()},set pointersMaxDistance(d){wn(d)},get disabled(){return pn()},set disabled(d){xn(d)},get data(){return an()},get type(){return on()},set type(d){_n(d)},get rightToLeft(){return dn()},set rightToLeft(d){$n(d)},get bottomToTop(){return un()},set bottomToTop(d){Cn(d)},get round(){return ln()},set round(d){kn(d)},get animateOnClick(){return yr},set animateOnClick(d){qa(d)},get keyboardDisabled(){return fn()},set keyboardDisabled(d){Ga(d)},get mousewheelDisabled(){return mn()},set mousewheelDisabled(d){Xa(d)},get rangeDragging(){return vn()},set rangeDragging(d){ns(d)},setMin:ts,setMax:rs,setValue:is,setStep:ss,setData:Sn,getTextValue:Nr,setAriaLabel:Ka,getAriaLabel:vh,addPointer:Sh,removePointer:_h,destroy:()=>{u.removeEventListener("mousedown",Ma),u.removeEventListener("mouseup",Ki),u.removeEventListener("touchmove",Er),u.removeEventListener("touchstart",Er),document.removeEventListener("wheel",Zi);for(let d of g)d.destroy();F==null||F.destroy()}}},oh=(h,u,w)=>{let g=Ae.find(([F,j,ve,xe])=>j.replace("#","")===u.replace(/\d+/g,""));if(g&&h.styles){let[F,j,ve,xe]=g,K=u.replace(/\D/g,"").trim(),De=K===""||K==="0"||K==="1"?0:Ne(K,0)-1;h.styles.setStyle(F,w,De);return}switch(h&&h.pluginsManager&&h.pluginsManager.onAttrChange(u,w),u){case m:{h.setMin(w);break}case b:{h.setMax(w);break}case S:{h.setStep(w);break}case a:{h.pointersOverlap=Ze(w);break}case l:{h.pointersMinDistance=Ne(w,0);break}case p:{h.rangeDragging=Ze(w);break}case c:{h.pointersMaxDistance=Ne(w,1/0);break}case N:{h.disabled=Ze(w);break}case V:{h.keyboardDisabled=Ze(w);break}case W:{h.mousewheelDisabled=Ze(w);break}case f:{h.setData(w);break}case A:{h.type=w;break}case z:{h.rightToLeft=Ze(w);break}case I:{h.bottomToTop=Ze(w);break}case C:{h.round=Ne(w,zr);break}case k:{h.styles&&(h.styles.theme=w);break}case Gt:{h.animateOnClick=w;break}}let M=null;if(/^value([0-9]*)$/.test(u)&&(M="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(M="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(M="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(M="pointer-shape"),!M)return;let te=u.replace(/\D/g,"").trim(),fe=te===""||te==="0"||te==="1"?0:Ne(te,0)-1;switch(M){case"value":{h.setValue(w,fe);break}case"pointer-disabled":{let F=h==null?void 0:h.pointers[fe];if(!F)return;F.disabled=Ze(w);break}case"aria-label":{h.setAriaLabel(fe,w);break}case"pointer-shape":{h.styles&&h.styles.setPointerShape(fe,w);break}}},lh=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(h){this.slider&&this.slider.setStep(h)}get step(){var h;return(h=this.slider)==null?void 0:h.step}set disabled(h){this.slider&&(this.slider.disabled=h)}get disabled(){var h,u;return(u=(h=this.slider)==null?void 0:h.disabled)!=null?u:!1}set data(h){var u;(u=this.slider)==null||u.setData(h)}get data(){var h;return(h=this.slider)==null?void 0:h.data}set min(h){var u;(u=this.slider)==null||u.setMin(h)}get min(){var h;return(h=this.slider)==null?void 0:h.min}set max(h){var u;(u=this.slider)==null||u.setMax(h)}get max(){var h;return(h=this.slider)==null?void 0:h.max}set round(h){!this.slider||(this.slider.round=h)}get round(){var h,u;return(u=(h=this.slider)==null?void 0:h.round)!=null?u:zr}set type(h){!this.slider||(this.slider.type=h??st)}get type(){var h;return((h=this.slider)==null?void 0:h.type)||st}set pointersOverlap(h){!this.slider||(this.slider.pointersOverlap=h)}get pointersOverlap(){var h,u;return(u=(h=this.slider)==null?void 0:h.pointersOverlap)!=null?u:!1}set pointersMinDistance(h){!this.slider||(this.slider.pointersMinDistance=h)}get pointersMinDistance(){var h,u;return(u=(h=this.slider)==null?void 0:h.pointersMinDistance)!=null?u:0}set pointersMaxDistance(h){!this.slider||(this.slider.pointersMaxDistance=h)}get pointersMaxDistance(){var h,u;return(u=(h=this.slider)==null?void 0:h.pointersMaxDistance)!=null?u:1/0}set theme(h){!this.slider||!this.slider.styles||(this.slider.styles.theme=h)}get theme(){var h,u,w;return(w=(u=(h=this.slider)==null?void 0:h.styles)==null?void 0:u.theme)!=null?w:null}set rtl(h){!this.slider||(this.slider.rightToLeft=h)}get rtl(){var h,u;return(u=(h=this.slider)==null?void 0:h.rightToLeft)!=null?u:!1}set btt(h){!this.slider||(this.slider.bottomToTop=h)}get btt(){var h,u;return(u=(h=this.slider)==null?void 0:h.bottomToTop)!=null?u:!1}set keyboardDisabled(h){!this.slider||(this.slider.keyboardDisabled=h)}get keyboardDisabled(){var h,u;return(u=(h=this.slider)==null?void 0:h.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(h){!this.slider||(this.slider.mousewheelDisabled=h)}get mousewheelDisabled(){var h,u;return(u=(h=this.slider)==null?void 0:h.mousewheelDisabled)!=null?u:!1}set animateOnClick(h){!this.slider||(this.slider.animateOnClick=h)}get animateOnClick(){var h;return(h=this.slider)==null?void 0:h.animateOnClick}get rangeDragging(){var h,u;return(u=(h=this.slider)==null?void 0:h.rangeDragging)!=null?u:!1}set rangeDragging(h){this.slider&&(this.slider.rangeDragging=Ze(h))}get externalCSSList(){return this._externalCSSList}addPointer(h){var u,w;if(!this.slider)return;let g=(w=(u=this.slider)==null?void 0:u.addPointer(h))!=null?w:0;Ea(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var h;!this.slider||(h=this.slider)==null||h.removePointer()}addCSS(h){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=h,this.shadowRoot.appendChild(u)}connectedCallback(){var h,u;if(!this.shadowRoot)return;this._externalCSSList=ae(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let w=(h=this.shadowRoot)==null?void 0:h.querySelector(".pointer");if(!w)return;let g=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!g)return;let M=ih(this,w);this.slider=ah(this,g,M),sh(this,this.slider),this._observer=new MutationObserver(te=>{te.forEach(fe=>{var F;if(!this.slider||fe.type!=="attributes")return;let j=fe.attributeName;!j||oh(this.slider,j,(F=this.getAttribute(j))!=null?F:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},sn=lh;window.tcRangeSlider=sn,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",sn),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends sn{})})();(()=>{var t=(l,c,p,f,m)=>{let b=c-l;return b===0?p:(f-p)*(m-l)/b+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,c)=>e(l)?Number(l):c,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,c=null,p=null,f=null,m=null,b=!1,S=s,C=n,A=()=>{var E;let G=(E=l==null?void 0:l.shadowRoot)==null?void 0:E.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),f=document.createElement("div"),f.classList.add("mark-points"),p.append(f),m=document.createElement("div"),m.classList.add("mark-values"),p.append(m),G.append(p)},k=()=>{!c||!p||p.classList.toggle("is-reversed",c.isRightToLeft()||c.isBottomToTop())},z=()=>{var E;if(!p||!c)return;let G=c.getMin(),X=c.getMax(),Q=c.getType()==="vertical",ce=c.isRightToLeft()||c.isBottomToTop();for(let se=0;se<S;se++){let ne=document.createElement("div");ne.classList.add("mark",`mark-${se}`);let ue=S===0?0:se*100/(S-1);Q?ce?ne.style.top=`${100-ue}%`:ne.style.top=`${ue}%`:ce?ne.style.left=`${100-ue}%`:ne.style.left=`${ue}%`,f==null||f.append(ne)}let q=c.getData();for(let se=0;se<C;se++){let ne=document.createElement("div");ne.classList.add("mark-value",`mark-value-${se}`);let ue=C===0?0:se*100/(C-1),Re=t(0,C-1,G,X,se);ne.textContent=(q?(E=q[Math.round(Re)])!=null?E:"":Re).toString(),Q?ce?ne.style.top=`${100-ue}%`:ne.style.top=`${ue}%`:ce?ne.style.left=`${100-ue}%`:ne.style.left=`${ue}%`,m==null||m.append(ne)}},I=(E,G)=>{he(),S=E,C=G,S<=0&&(S=s),C<=0&&(C=n),A(),z(),k()},N=E=>{b=E,b?(A(),z(),k()):he()},V=E=>{!p||p.style.setProperty("--marks-color",E)},W=E=>{!p||p.style.setProperty("--values-color",E)},he=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(E,G,X,Q)=>{var ce,q;c=Q,l=E,b=i(l.getAttribute("marks")),b&&(I(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),V((ce=l.getAttribute("marks-color"))!=null?ce:"#cbd5e1"),W((q=l.getAttribute("marks-values-color"))!=null?q:"#475569"))},onAttrChange:(E,G)=>{E==="marks"&&N(i(G)),E==="marks-count"&&I(r(G,s),C),E==="marks-values-count"&&I(S,r(G,n)),E==="marks-color"&&V(G),E==="marks-values-color"&&W(G)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return b??!1},set:E=>{N(i(E))}}},{name:"marksCount",attributes:{get(){return S??s},set:E=>{I(r(E,s),C)}}},{name:"marksValuesCount",attributes:{get(){return S??s},set:E=>{I(S,r(E,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:E=>{V(E)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:E=>{W(E)}}}],destroy:he,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Qf=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,sr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jf(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Qf(e,r,s),s};let Ut=class extends At{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Le(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.imposeRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?v`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:v`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Fe(this.sliderRef)}
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

        `}};Ut.styles=me`

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
    
    `;sr([le({context:Nl,subscribe:!0}),x()],Ut.prototype,"min",2);sr([le({context:Wl,subscribe:!0}),x()],Ut.prototype,"max",2);sr([le({context:ca,subscribe:!0}),x()],Ut.prototype,"from",2);sr([le({context:da,subscribe:!0}),x()],Ut.prototype,"to",2);sr([x()],Ut.prototype,"hasFixedFrom",2);sr([x()],Ut.prototype,"hasFixedTo",2);sr([le({context:Bs,subscribe:!0}),x()],Ut.prototype,"palette",2);sr([x()],Ut.prototype,"sliderRef",2);sr([x()],Ut.prototype,"initialised",2);Ut=sr([Z("registry-range-slider")],Ut);var em=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,Yi=(t,e,r,i)=>{for(var s=i>1?void 0:i?tm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&em(e,r,s),s};let ri=class extends At{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?U:v`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Yi([le({context:ca,subscribe:!0})],ri.prototype,"from",2);Yi([le({context:da,subscribe:!0})],ri.prototype,"to",2);Yi([y({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],ri.prototype,"fixed",2);Yi([y({type:String,reflect:!0,attribute:!0})],ri.prototype,"separator",2);ri=Yi([Z("registry-range-display")],ri);var rm=Object.defineProperty,im=Object.getOwnPropertyDescriptor,Ys=(t,e,r,i)=>{for(var s=i>1?void 0:i?im(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&rm(e,r,s),s};let ii=class extends At{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return v`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":U}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>v`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():v`
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
        `}};ii.styles=me`

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


    `;Ys([x()],ii.prototype,"histogram",2);Ys([y({type:Boolean,reflect:!0})],ii.prototype,"interactive",2);Ys([y({type:String,reflect:!0})],ii.prototype,"height",2);ii=Ys([Z("registry-histogram")],ii);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ps extends na{constructor(e){if(super(e),this.it=U,e.type!==sa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||e==null)return this._t=void 0,this.it=e;if(e===Sr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ps.directiveName="unsafeHTML",Ps.resultType=1;const Lt=Fs(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hn extends Ps{}Hn.directiveName="unsafeSVG",Hn.resultType=2;const th=Fs(Hn);var sm=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,Gs=(t,e,r,i)=>{for(var s=i>1?void 0:i?nm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&sm(e,r,s),s};let si=class extends hi{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?U:v`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([e,r])=>{const i={[e]:!0,button:!0,switch:!0,active:r.key===this.value.key};return v`
                        
                        <button 
                            class=${Zt(i)} 
                            @click=${()=>{this.group.tool.selectTool(r)}}
                            @mouseenter=${()=>{this.hint=r.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${th(r.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};si.styles=me`

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

    `;Gs([le({context:ua,subscribe:!0}),x()],si.prototype,"value",2);Gs([le({context:pa,subscribe:!0}),x()],si.prototype,"tools",2);Gs([x()],si.prototype,"hint",2);si=Gs([Z("group-tool-buttons")],si);var am=Object.defineProperty,om=Object.getOwnPropertyDescriptor,Sa=(t,e,r,i)=>{for(var s=i>1?void 0:i?om(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&am(e,r,s),s};let Oi=class extends hi{connectedCallback(){super.connectedCallback()}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?U:v`
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return v`
                        
                        <button 
                            class=${Zt(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${e.name}
                        >
                            ${th(e.icon)}
                        </button>
                        
                    `})}
        `}};Oi.styles=me`

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

    `;Sa([le({context:ua,subscribe:!0}),x()],Oi.prototype,"value",2);Sa([le({context:pa,subscribe:!0}),x()],Oi.prototype,"tools",2);Oi=Sa([Z("group-tool-bar")],Oi);var lm=Object.defineProperty,Gi=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&lm(e,r,s),s};class et extends hi{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Gi([le({context:fa,subscribe:!0}),x()],et.prototype,"parentFileProviderElement");Gi([le({context:Yl,subscribe:!0}),x()],et.prototype,"loading");Gi([le({context:Bl,subscribe:!0}),x()],et.prototype,"file");Gi([le({context:Vl,subscribe:!0}),x()],et.prototype,"failure");Gi([le({context:Xl,subscribe:!0}),x()],et.prototype,"recording");var hm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,dm=(t,e,r,i)=>{for(var s=i>1?void 0:i?cm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hm(e,r,s),s};let Bn=class extends et{constructor(){super(...arguments),this.container=Le()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value),t.draw();else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(t){if(super.updated(t),t.has("file")){const e=t.get("file"),r=this.file;e===void 0&&r!==void 0&&this.container.value&&this.file&&this.file.mountedBaseLayers===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return v`
            <div ${Fe(this.container)} class=${Zt(r)} part="file-canvas-container">
            
                ${this.loading===!0?v`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?v`<div class="error-wrapper">
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
                        </div>`:U}
            
            </div>
        
        `}};Bn.styles=me`
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
    `;Bn=dm([Z("file-canvas")],Bn);var um=Object.defineProperty,pm=Object.getOwnPropertyDescriptor,fm=(t,e,r,i)=>{for(var s=i>1?void 0:i?pm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&um(e,r,s),s};let Vn=class extends et{onInstanceCreated(t){}onFailure(t){}render(){return this.file?v`
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
        `:U}};Vn.styles=me`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Vn=fm([Z("file-share-button")],Vn);var mm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,vm=(t,e,r,i)=>{for(var s=i>1?void 0:i?gm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&mm(e,r,s),s};let Yn=class extends et{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?v`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${Lt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${Lt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?Lt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):U}

                        ${Lt(this.renderRow("Time",Jn.human(this.file.timestamp)))}

                        ${Lt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${Lt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Lt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${Lt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${Lt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${Lt(this.renderRow("Type",this.file.reader.parser.name))}
                    ${Lt(this.renderRow("Description",this.file.reader.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.reader.parser.devices.map(t=>v`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:U}};Yn.styles=me`

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
    
    `;Yn=vm([Z("file-info-button")],Yn);var ym=Object.defineProperty,bm=Object.getOwnPropertyDescriptor,wm=(t,e,r,i)=>{for(var s=i>1?void 0:i?bm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ym(e,r,s),s};let Gn=class extends et{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?U:v`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this.file?"Download":"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">Download original file (${this.file.reader.parser.extensions[0].extension.toUpperCase()})</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.canvasAsPng()}>Export current frame as PNG image</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?v`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:U}
            
            </thermal-dropdown>

        
        `}};Gn.styles=me`

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
    
    `;Gn=wm([Z("file-download-dropdown")],Gn);var xm=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,mr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&xm(e,r,s),s};let kt=class extends et{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Le(),this.barRef=Le(),this.containerRef=Le(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<kt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}handleBarHover(t){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(r)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,l;const t=this.file;if(t===void 0)return U;if(t.duration===0)return U;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return v`
            <div class="${Zt(e)}" ${Fe(this.containerRef)}>


                ${t!==void 0?v`
                        <div class="container">

                            <div class="${Zt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?v`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:v`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>


                            <div class="${Zt(s)}"  ${Fe(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Fe(this.barRef)}></div>
                                    ${this.cursor?v`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(c=>v`<file-marker-timeline start=${c.fromMs} end=${c.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:U}

            
            
            </div>

            ${this.currentFrame!==void 0?v`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${_r(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${_r(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:U}

          `}};kt.collapseWidth=500;kt.styles=me`
    
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
    
    `;mr([le({context:ba,subscribe:!0}),x()],kt.prototype,"playing",2);mr([le({context:Bi,subscribe:!0}),x()],kt.prototype,"currentFrame",2);mr([le({context:ya,subscribe:!0}),x()],kt.prototype,"duration",2);mr([le({context:ql,subscribe:!0}),x()],kt.prototype,"mayStop",2);mr([le({context:ga,subscribe:!0})],kt.prototype,"cursor",2);mr([le({context:va,subscribe:!0})],kt.prototype,"cursorSetter",2);mr([le({context:wa,subscribe:!0})],kt.prototype,"markers",2);mr([x()],kt.prototype,"collapsed",2);kt=mr([Z("file-timeline")],kt);var _m=Object.defineProperty,$m=Object.getOwnPropertyDescriptor,_a=(t,e,r,i)=>{for(var s=i>1?void 0:i?$m(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&_m(e,r,s),s};let Di=class extends et{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?U:v`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(rl).map(([t])=>v`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof dr&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Di.styles=me`

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
    
    `;_a([y({type:String,reflect:!0})],Di.prototype,"enabled",2);_a([le({context:Gl,subscribe:!0}),x()],Di.prototype,"playbackSpeed",2);Di=_a([Z("file-playback-speed-dropdown")],Di);var Cm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,$a=(t,e,r,i)=>{for(var s=i>1?void 0:i?km(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Cm(e,r,s),s};let Ei=class extends et{constructor(){super(...arguments),this.container=Le()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return v`
            <div class="container">
            
                <video ${Fe(this.container)} preload="metadata">

                    ${this.url===void 0?U:v`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Ei.styles=me`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;$a([le({context:Bi,subscribe:!0}),x()],Ei.prototype,"currentFrame",2);$a([y({type:String,reflect:!0,attribute:!0})],Ei.prototype,"url",2);Ei=$a([Z("file-video")],Ei);const Am=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),_r(r,"mm:ss:SSS")},Pm=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(r[0]),s=parseInt(r[1]),n=parseInt(r[2]);return i*60*1e3+s*1e3+n};var Om=Object.defineProperty,Dm=Object.getOwnPropertyDescriptor,nr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Om(e,r,s),s};const Ca={fromAttribute:t=>t===null?null:Pm(t),toAttribute:t=>t===null?null:Am(t)};let Wt=class extends et{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,i){var s;super.attributeChangedCallback(e,r,i),this.log(e,r,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(s=>s.lang==="cs-CZ");if(r)return r;const i=e.find(s=>s.default===!0);return i||null}render(){return U}};nr([le({context:ba,subscribe:!0}),x()],Wt.prototype,"playing",2);nr([le({context:ma,subscribe:!0}),x()],Wt.prototype,"ms",2);nr([y({type:String,reflect:!0,attribute:!0})],Wt.prototype,"label",2);nr([y({type:String,reflect:!0,attribute:!0,converter:Ca})],Wt.prototype,"start",2);nr([y({type:String,reflect:!0,attribute:!0,converter:Ca})],Wt.prototype,"end",2);nr([y({type:String,reflect:!0,attribute:!0,converter:Ca})],Wt.prototype,"dur",2);nr([y({type:String,reflect:!0,attribute:!0})],Wt.prototype,"active",2);nr([y({type:String,reflect:!0,attribute:!0})],Wt.prototype,"pauseOnActivate",2);nr([y({type:String,reflect:!0,attribute:!0})],Wt.prototype,"say",2);Wt=nr([Z("file-marker")],Wt);var Em=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,jr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Lm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Em(e,r,s),s};let pr=class extends et{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return v`

            <div class="${Zt(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};pr.styles=me`
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


    `;jr([le({context:ya,subscribe:!0}),x()],pr.prototype,"duration",2);jr([le({context:Bi,subscribe:!0}),x()],pr.prototype,"currentFrame",2);jr([le({context:ma,subscribe:!0}),x()],pr.prototype,"ms",2);jr([y({type:Number,reflect:!0,attribute:!0})],pr.prototype,"start",2);jr([y({type:Number,reflect:!0,attribute:!0})],pr.prototype,"end",2);jr([x()],pr.prototype,"active",2);pr=jr([Z("file-marker-timeline")],pr);var Tm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,rh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Tm(e,r,s),s};let Os=class extends et{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return v`
            <div>


            ${this.markers.map(t=>t.active?v`<div class="item">
                    <h2>${t.label}</h2>
                    ${Lt(t.innerHTML)}
                    </div>`:U)}

            
            
            </div>

          `}};Os.styles=me`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;rh([le({context:wa,subscribe:!0})],Os.prototype,"markers",2);Os=rh([Z("file-marks-content")],Os);var Mm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,ka=(t,e,r,i)=>{for(var s=i>1?void 0:i?Um(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Mm(e,r,s),s};let Li=class extends Rt{updated(e){if(super.updated(e),e.has("analysis")){const r=e.get("analysis");r&&r.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return v`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const r=e.target,i=r.value!==""?r.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Li.styles=me`

    
    `;ka([y()],Li.prototype,"analysis",2);ka([x()],Li.prototype,"name",2);Li=ka([Z("analysis-name")],Li);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Im(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}var Fm=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,Aa=(t,e,r,i)=>{for(var s=i>1?void 0:i?jm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Fm(e,r,s),s};let Ti=class extends Rt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const r=this.analysis;this.color=r.initialColor,r.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(t){return v`<i style="background-color: ${t};" aria-hidden></i><span>${t}</span>`}render(){return this.color===void 0?U:v`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Im(ms,t=>v`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(t)}}>
                        ${this.renderColor(t)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Ti.styles=me`

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
    
    `;Aa([y()],Ti.prototype,"analysis",2);Aa([x()],Ti.prototype,"color",2);Ti=Aa([Z("analysis-color")],Ti);var zm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Ft=(t,e,r,i)=>{for(var s=i>1?void 0:i?Nm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zm(e,r,s),s};let bt=class extends Rt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height,this.right=r.left+r.width,this.bottom=r.top+r.height,this.maxX=r.file.width,this.maxY=r.file.height,r.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

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
    
        
        `}};bt.styles=me`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Ft([y()],bt.prototype,"analysis",2);Ft([x()],bt.prototype,"color",2);Ft([x()],bt.prototype,"top",2);Ft([x()],bt.prototype,"left",2);Ft([x()],bt.prototype,"width",2);Ft([x()],bt.prototype,"height",2);Ft([x()],bt.prototype,"type",2);Ft([x()],bt.prototype,"right",2);Ft([x()],bt.prototype,"bottom",2);Ft([x()],bt.prototype,"maxX",2);Ft([x()],bt.prototype,"maxY",2);bt=Ft([Z("edit-area")],bt);var Wm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,di=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Wm(e,r,s),s};let Ar=class extends Rt{constructor(){super(...arguments),this.topInputRef=Le(),this.leftInputRef=Le()}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.maxX=r.file.width,this.maxY=r.file.height,r.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

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
        
        `}};Ar.styles=me`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;di([y()],Ar.prototype,"analysis",2);di([x()],Ar.prototype,"top",2);di([x()],Ar.prototype,"left",2);di([x()],Ar.prototype,"maxX",2);di([x()],Ar.prototype,"maxY",2);Ar=di([Z("edit-point")],Ar);var Bm=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,Xs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Bm(e,r,s),s};let Ri=class extends Rt{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetName.delete(this.UUID);const r=this.analysis;this.name=r.name,this.type=r.getType(),r.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return v`

            <thermal-dialog label="Edit ${this.type} analysis">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof or?v`<edit-point .analysis=${this.analysis}></edit-point>`:v`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Xs([y()],Ri.prototype,"analysis",2);Xs([x()],Ri.prototype,"name",2);Xs([x()],Ri.prototype,"type",2);Ri=Xs([Z("file-analysis-edit")],Ri);var Ym=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,Pt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Gm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ym(e,r,s),s};let dt=class extends et{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=Le(),this.graphRef=Le(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(t){t.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=t.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(r=>{this.graphWidth=r[0].contentRect.width,this.graphHeight=r[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,t=>{this.graphs=t}),this.hydrated=!0)}onFailure(){}update(t){super.update(t),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return v`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&v`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&v`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${Fe(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?v`<thermal-chart 
                        ${Fe(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:U}
            </div>

            

            </div>
        
        `}};dt.styles=me`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Pt([x()],dt.prototype,"hydrated",2);Pt([y({reflect:!0})],dt.prototype,"graphWidth",2);Pt([y({reflect:!0})],dt.prototype,"graphHeight",2);Pt([x()],dt.prototype,"graphs",2);Pt([le({context:Bi,subscribe:!0})],dt.prototype,"currentFrame",2);Pt([le({context:ga,subscribe:!0})],dt.prototype,"cursor",2);Pt([le({context:va,subscribe:!0})],dt.prototype,"cursorSetter",2);Pt([x()],dt.prototype,"shadowLeft",2);Pt([x()],dt.prototype,"shadowTop",2);Pt([x()],dt.prototype,"shadowWidth",2);Pt([x()],dt.prototype,"shadowHeight",2);Pt([le({context:ha,subscribe:!0})],dt.prototype,"graphSmooth",2);dt=Pt([Z("file-analysis-graph")],dt);var Xm=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,gr=(t,e,r,i)=>{for(var s=i>1?void 0:i?qm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Xm(e,r,s),s};let Ht=class extends Rt{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const r=this.analysis;this.name=r.name,this.selected=r.selected,this.color=r.initialColor,this.dimension=r.width+"x"+r.height,this.value={min:r.min,max:r.max,avg:r.avg},r.file.timeline.isSequence?this.may=r instanceof or?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:r.graph.state.MIN,max:r.graph.state.MAX,avg:r.graph.state.AVG},r.onSerializableChange.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),r.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),r.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),r.onSelected.set(this.UUID,()=>{this.selected=!0}),r.onDeselected.set(this.UUID,()=>{this.selected=!1}),r.onSetInitialColor.set(this.UUID,i=>{this.color=i}),r.onSetName.set(this.UUID,i=>{this.name=i})}}valueOrNothing(t){return t===void 0?"-":t.toFixed(2)+" °C"}renderCell(t,e,r,i){return v`
            <td class="${e?"may":"mayNot"} ${r?"active":"inactive"}">

                ${e?v`
                        <button
                            @click=${i}
                            style="background-color: ${r?this.color:"transparent"};"
                            title="${r?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(t)}
                        </button>
                    `:this.valueOrNothing(t)}

            </td>
        `}render(){return v`
        
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
        
        `}};Ht.styles=me`
    
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

    `;gr([y()],Ht.prototype,"analysis",2);gr([x()],Ht.prototype,"value",2);gr([x()],Ht.prototype,"graph",2);gr([x()],Ht.prototype,"may",2);gr([x()],Ht.prototype,"dimension",2);gr([x()],Ht.prototype,"color",2);gr([y({type:Boolean,reflect:!0,attribute:!0})],Ht.prototype,"selected",2);gr([x()],Ht.prototype,"name",2);Ht=gr([Z("file-analysis-table-row")],Ht);var Km=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,qs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Km(e,r,s),s};let ni=class extends et{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(t){console.log(t)}onInstanceCreated(t){this.hydrate(t)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(t){super.updated(t),t.has("file")&&this.file&&this.hydrate(this.file)}hydrate(t){t.analysis.addListener(this.UUID,e=>{this.analysis=e}),t.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length}),t.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?U:v`

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
                        ${this.hasHighlightedData?v`<thermal-button variant="foreground" @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:U}
                    </th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(t=>v`
                                <file-analysis-table-row
                                    .analysis=${t}
                                ></file-analysis-table-row>
                            `)}
            
            </tbody>

            </table>

            </div>
        `}};ni.styles=me`
    
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

        



    `;qs([x()],ni.prototype,"analysis",2);qs([x()],ni.prototype,"allSelected",2);qs([x()],ni.prototype,"hasHighlightedData",2);ni=qs([Z("file-analysis-table")],ni);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=t=>t??U;var Qm=Object.defineProperty,Jm=Object.getOwnPropertyDescriptor,Or=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jm(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Qm(e,r,s),s};let rr=class extends et{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(t){this.recorded=Jn.human(t.timestamp)}onFailure(){}render(){return v`
        <thermal-app author=${ge(this.author)} recorded=${ge(this.recorded)} license=${ge(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?v`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:U}
          
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

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:U}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:U}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:U}

            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?v`<file-analysis-graph slot="post"></file-analysis-graph>`:U}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};rr.styles=me`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Or([y({type:String,reflect:!0,attribute:!0})],rr.prototype,"showembed",2);Or([y({type:String,reflect:!0,attribute:!0})],rr.prototype,"showabout",2);Or([y({type:String,reflect:!0,attribute:!0})],rr.prototype,"showfullscreen",2);Or([y()],rr.prototype,"author",2);Or([y()],rr.prototype,"recorded",2);Or([y()],rr.prototype,"license",2);Or([y()],rr.prototype,"label",2);rr=Or([Z("file-app")],rr);var eg=Object.defineProperty,je=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&eg(e,r,s),s};class Te extends Rt{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=Le()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const r=e.analysisData.value.values.length>1;r!==this.hasGraph&&(this.hasGraph=r);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}je([y({type:String,reflect:!0})],Te.prototype,"url");je([y({type:String,reflect:!0})],Te.prototype,"visible");je([y({type:String,reflect:!0,attribute:!0})],Te.prototype,"palette");je([y({type:Number,reflect:!0,attribute:!0})],Te.prototype,"opacity");je([y({type:Number,reflect:!0})],Te.prototype,"from");je([y({type:Number,reflect:!0})],Te.prototype,"to");je([y()],Te.prototype,"author");je([y()],Te.prototype,"recorded");je([y()],Te.prototype,"license");je([y()],Te.prototype,"label");je([y({type:String,reflect:!1,attribute:!0})],Te.prototype,"showembed");je([y({type:String,reflect:!1,attribute:!0})],Te.prototype,"showabout");je([y({type:String,reflect:!1})],Te.prototype,"showfullscreen");je([y({type:String,reflect:!0})],Te.prototype,"analysis1");je([y({type:String,reflect:!0})],Te.prototype,"analysis2");je([y({type:String,reflect:!0})],Te.prototype,"analysis3");je([y({type:String,reflect:!0})],Te.prototype,"analysis4");je([y({type:String,reflect:!0})],Te.prototype,"analysis5");je([y({type:String,reflect:!0})],Te.prototype,"analysis6");je([y({type:String,reflect:!0})],Te.prototype,"analysis7");je([y({type:String,reflect:!0})],Te.prototype,"ms");je([y({type:String,reflect:!0})],Te.prototype,"speed");je([x()],Te.prototype,"hasGraph");je([x()],Te.prototype,"hasAnalysis");je([x()],Te.prototype,"isSequence");var tg=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,ig=(t,e,r,i)=>{for(var s=i>1?void 0:i?rg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&tg(e,r,s),s};let To=class extends Te{render(){return this.url===""?U:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${ge(this.from)}
        to=${ge(this.to)}
        opacity=${ge(this.opacity)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}" 
            visible=${ge(this.visible)}
            analysis1=${ge(this.analysis1)}
            analysis2=${ge(this.analysis2)}
            analysis3=${ge(this.analysis3)}
            analysis4=${ge(this.analysis4)}
            analysis5=${ge(this.analysis5)}
            analysis6=${ge(this.analysis6)}
            analysis7=${ge(this.analysis7)}
            speed=${ge(this.speed)}
          >

              <file-app 
                author=${ge(this.author)} 
                recorded=${ge(this.recorded)} 
                license=${ge(this.license)}
                label=${ge(this.label)}  
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};To=ig([Z("thermal-file-app")],To);var sg=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,Ot=(t,e,r,i)=>{for(var s=i>1?void 0:i?ng(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&sg(e,r,s),s};let ut=class extends et{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=Le(),this.contentContainerWidth=1e3}onInstanceCreated(t){this.recorded=Jn.human(t.timestamp),this.hasAnalysis=t.analysis.layers.all.length>0,this.hasGraph=t.analysisData.value.values.length>1,this.isSequence=t.timeline.isSequence,t.timeline.addListener(this.UUID,()=>{this.isSequence=t.timeline.isSequence}),t.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),t.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(t){super.firstUpdated(t),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(r=>{this.contentContainerWidth=r[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var t,e;return v`
        <thermal-app author=${ge(this.author)} recorded=${ge(this.recorded)} license=${ge(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?v`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:U}
          
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

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:U}

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Graph lines"
                    hint="'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'."
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:U}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>

              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:U}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:U}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${Fe(this.contentContainerRef)}>

                <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?v`<group-tool-bar></group-tool-bar>`:v`<group-tool-buttons></group-tool-buttons>`}
                </div>

                <div class="content-container__part content-container__left">

                  <registry-histogram slot="pre"></registry-histogram>
                  <registry-range-slider slot="pre"></registry-range-slider>
                  <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
                  <!--<registry-range-display></registry-range-display>-->

                  <file-canvas></file-canvas>
                  <file-timeline></file-timeline>
                </div>

                <div class="content-container__part content-container__right ${this.isSequence?"content-container__right__sequence":""}">

                  <div class="part analysis">
                    ${this.hasAnalysis?v`<file-analysis-table></file-analysis-table>`:v`<div class="placeholder">
                        <div class="placeholder-title">Analysis</div>
                        <div>You may select areas or points on the thermogram to see statistics here!</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((t=this.tool)==null?void 0:t.key)??"")?v`
                      <div>${(e=this.tool)==null?void 0:e.description}</div>
                    `:v`
                      <div>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-point")}>Add a point analysis</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>Add a rectangle analysis</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>Add a ellipsis analysis</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?v`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?v`<div class="placeholder">
                      <div class="placeholder-title">Graph</div>
                      <div>${this.hasAnalysis===!1?"Add analysis first to see the graph!":v`Click on an analysis <span style="display: inline-block;padding: 1px 4px; border-radius: var(--thermal-gap); border: 1px solid var(--thermal-slate);">value</span> to see its graph here!`}</div>
                    </div>`:U}
                  
                  </div>
                  `:U}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};ut.styles=me`

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
  
  `;Ot([y({type:String,reflect:!0,attribute:!0})],ut.prototype,"showembed",2);Ot([y({type:String,reflect:!0,attribute:!0})],ut.prototype,"showabout",2);Ot([y({type:String,reflect:!0,attribute:!0})],ut.prototype,"showfullscreen",2);Ot([x()],ut.prototype,"hasAnalysis",2);Ot([x()],ut.prototype,"hasGraph",2);Ot([x()],ut.prototype,"tool",2);Ot([x()],ut.prototype,"isSequence",2);Ot([y()],ut.prototype,"author",2);Ot([y()],ut.prototype,"recorded",2);Ot([y()],ut.prototype,"license",2);Ot([y()],ut.prototype,"label",2);Ot([x()],ut.prototype,"contentContainerWidth",2);ut=Ot([Z("desktop-app")],ut);var ag=Object.defineProperty,og=Object.getOwnPropertyDescriptor,lg=(t,e,r,i)=>{for(var s=i>1?void 0:i?og(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ag(e,r,s),s};let Ro=class extends Te{render(){return this.url===""?U:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${ge(this.from)}
        to=${ge(this.to)}
        opacity=${ge(this.opacity)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${Fe(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${ge(this.visible)}
            analysis1=${ge(this.analysis1)}
            analysis2=${ge(this.analysis2)}
            analysis3=${ge(this.analysis3)}
            analysis4=${ge(this.analysis4)}
            analysis5=${ge(this.analysis5)}
            analysis6=${ge(this.analysis6)}
            analysis7=${ge(this.analysis7)}
            speed=${ge(this.speed)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${ge(this.author)} 
              recorded=${ge(this.recorded)} 
              license=${ge(this.license)}
              label=${ge(this.label)}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Ro=lg([Z("thermal-desktop-app")],Ro);var hg=Object.defineProperty,cg=Object.getOwnPropertyDescriptor,Pa=(t,e,r,i)=>{for(var s=i>1?void 0:i?cg(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hg(e,r,s),s};let Mi=class extends Rt{constructor(){super(...arguments),this.dropinRef=Le(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var r;(r=this.dropinRef.value)==null||r.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return v`

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

                            ${this.loaded===!0?v`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:U}

                            <file-dropin ${Fe(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};Mi.styles=me`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Pa([x()],Mi.prototype,"dropinRef",2);Pa([x()],Mi.prototype,"loaded",2);Mi=Pa([Z("thermal-dropin-app")],Mi);const Mn=window.matchMedia("(prefers-color-scheme: dark)"),Oa="thermal-dark-mode",Mo=()=>{document.body.classList.add(Oa)},dg=()=>{document.body.classList.remove(Oa)},ug=()=>{Mn.matches&&Mo();const t=e=>{e.matches?Mo():dg()};Mn.addEventListener("change",t),Mn.addListener(t)},pg=()=>{const t=document.createElement("link");t.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(t)},fg=Xn.toString().replaceAll(".","-"),mg=t=>`thermal__${t}__${fg}`,Uo=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",mg(t)),r.innerHTML=e,document.head.appendChild(r)},gg=()=>{Uo("rootVariables",`

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
        
            body.${Oa} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};pg();console.info(`@labir/embed ${Xn}
Author: ${kh}`);ug();gg();document.addEventListener("DOMContentLoaded",()=>{});
