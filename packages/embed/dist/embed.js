var dc=Object.defineProperty;var pc=(r,e,t)=>e in r?dc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>(pc(r,typeof e!="symbol"?e+"":e,t),t);const Ra="1.2.53",fc="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=globalThis,Ma=Hs.ShadowRoot&&(Hs.ShadyCSS===void 0||Hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ua=Symbol(),zo=new WeakMap;let Cl=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ua)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ma&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=zo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&zo.set(t,e))}return e}toString(){return this.cssText}};const gc=r=>new Cl(typeof r=="string"?r:r+"",void 0,Ua),be=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Cl(t,r,Ua)},mc=(r,e)=>{if(Ma)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Hs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},No=Ma?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return gc(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vc,defineProperty:yc,getOwnPropertyDescriptor:bc,getOwnPropertyNames:wc,getOwnPropertySymbols:xc,getPrototypeOf:Sc}=Object,Gr=globalThis,jo=Gr.trustedTypes,_c=jo?jo.emptyScript:"",da=Gr.reactiveElementPolyfillSupport,Zi=(r,e)=>r,Xs={toAttribute(r,e){switch(e){case Boolean:r=r?_c:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ia=(r,e)=>!vc(r,e),Wo={attribute:!0,type:String,converter:Xs,reflect:!1,hasChanged:Ia};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Gr.litPropertyMetadata??(Gr.litPropertyMetadata=new WeakMap);let wi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Wo){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&yc(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=bc(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wo}static _$Ei(){if(this.hasOwnProperty(Zi("elementProperties")))return;const e=Sc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Zi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zi("properties"))){const t=this.properties,i=[...wc(t),...xc(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(No(s))}else e!==void 0&&t.push(No(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Xs).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Xs;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ia)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};wi.elementStyles=[],wi.shadowRootOptions={mode:"open"},wi[Zi("elementProperties")]=new Map,wi[Zi("finalized")]=new Map,da==null||da({ReactiveElement:wi}),(Gr.reactiveElementVersions??(Gr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qi=globalThis,Ks=Qi.trustedTypes,Bo=Ks?Ks.createPolicy("lit-html",{createHTML:r=>r}):void 0,Al="$lit$",Hr=`lit$${Math.random().toFixed(9).slice(2)}$`,Pl="?"+Hr,$c=`<${Pl}>`,ci=document,ts=()=>ci.createComment(""),rs=r=>r===null||typeof r!="object"&&typeof r!="function",kl=Array.isArray,Cc=r=>kl(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",pa=`[ 	
\f\r]`,qi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ho=/-->/g,Go=/>/g,oi=RegExp(`>|${pa}(?:([^\\s"'>=/]+)(${pa}*=${pa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vo=/'/g,Yo=/"/g,Ol=/^(?:script|style|textarea|title)$/i,Ac=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),v=Ac(1),Yr=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),qo=new WeakMap,hi=ci.createTreeWalker(ci,129);function El(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bo!==void 0?Bo.createHTML(e):e}const Pc=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",a=qi;for(let o=0;o<t;o++){const h=r[o];let u,m,f=-1,y=0;for(;y<h.length&&(a.lastIndex=y,m=a.exec(h),m!==null);)y=a.lastIndex,a===qi?m[1]==="!--"?a=Ho:m[1]!==void 0?a=Go:m[2]!==void 0?(Ol.test(m[2])&&(s=RegExp("</"+m[2],"g")),a=oi):m[3]!==void 0&&(a=oi):a===oi?m[0]===">"?(a=s??qi,f=-1):m[1]===void 0?f=-2:(f=a.lastIndex-m[2].length,u=m[1],a=m[3]===void 0?oi:m[3]==='"'?Yo:Vo):a===Yo||a===Vo?a=oi:a===Ho||a===Go?a=qi:(a=oi,s=void 0);const x=a===oi&&r[o+1].startsWith("/>")?" ":"";n+=a===qi?h+$c:f>=0?(i.push(u),h.slice(0,f)+Al+h.slice(f)+Hr+x):h+Hr+(f===-2?o:x)}return[El(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};let Sa=class Dl{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,h=this.parts,[u,m]=Pc(e,t);if(this.el=Dl.createElement(u,i),hi.currentNode=this.el.content,t===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=hi.nextNode())!==null&&h.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Al)){const y=m[a++],x=s.getAttribute(f).split(Hr),_=/([.?@])?(.*)/.exec(y);h.push({type:1,index:n,name:_[2],strings:x,ctor:_[1]==="."?Oc:_[1]==="?"?Ec:_[1]==="@"?Dc:fn}),s.removeAttribute(f)}else f.startsWith(Hr)&&(h.push({type:6,index:n}),s.removeAttribute(f));if(Ol.test(s.tagName)){const f=s.textContent.split(Hr),y=f.length-1;if(y>0){s.textContent=Ks?Ks.emptyScript:"";for(let x=0;x<y;x++)s.append(f[x],ts()),hi.nextNode(),h.push({type:2,index:++n});s.append(f[y],ts())}}}else if(s.nodeType===8)if(s.data===Pl)h.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(Hr,f+1))!==-1;)h.push({type:7,index:n}),f+=Hr.length-1}n++}}static createElement(e,t){const i=ci.createElement("template");return i.innerHTML=e,i}};function _i(r,e,t=r,i){var a,o;if(e===Yr)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=rs(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=_i(r,s._$AS(r,e.values),s,i)),e}let kc=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??ci).importNode(t,!0);hi.currentNode=s;let n=hi.nextNode(),a=0,o=0,h=i[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new fs(n,n.nextSibling,this,e):h.type===1?u=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(u=new Lc(n,this,e)),this._$AV.push(u),h=i[++o]}a!==(h==null?void 0:h.index)&&(n=hi.nextNode(),a++)}return hi.currentNode=ci,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class fs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_i(this,e,t),rs(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==Yr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Cc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==j&&rs(this._$AH)?this._$AA.nextSibling.data=e:this.T(ci.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Sa.createElement(El(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new kc(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=qo.get(e.strings);return t===void 0&&qo.set(e.strings,t=new Sa(e)),t}k(e){kl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new fs(this.S(ts()),this.S(ts()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}let fn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=_i(this,e,t,0),a=!rs(e)||e!==this._$AH&&e!==Yr,a&&(this._$AH=e);else{const o=e;let h,u;for(e=n[0],h=0;h<n.length-1;h++)u=_i(this,o[i+h],t,h),u===Yr&&(u=this._$AH[h]),a||(a=!rs(u)||u!==this._$AH[h]),u===j?e=j:e!==j&&(e+=(u??"")+n[h+1]),this._$AH[h]=u}a&&!s&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Oc=class extends fn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}};class Ec extends fn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class Dc extends fn{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=_i(this,e,t,0)??j)===Yr)return;const i=this._$AH,s=e===j&&i!==j||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==j&&(i===j||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}let Lc=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){_i(this,e)}};const fa=Qi.litHtmlPolyfillSupport;fa==null||fa(Sa,fs),(Qi.litHtmlVersions??(Qi.litHtmlVersions=[])).push("3.1.4");const Tc=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new fs(e.insertBefore(ts(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _t=class extends wi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Tc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Yr}};var $l;_t._$litElement$=!0,_t.finalized=!0,($l=globalThis.litElementHydrateSupport)==null||$l.call(globalThis,{LitElement:_t});const ga=globalThis.litElementPolyfillSupport;ga==null||ga({LitElement:_t});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rc={attribute:!0,type:String,converter:Xs,reflect:!1,hasChanged:Ia},Mc=(r=Rc,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const h=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,h,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const h=this[a];e.call(this,o),this.requestUpdate(a,h,r)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(e,t)=>typeof t=="object"?Mc(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uc=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ei(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Uc(e,t,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(u=>u.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ic={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ns(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function js(r){return r.toString().indexOf("`")===-1}js(r=>r``)||js(r=>r`\0`)||js(r=>r`\n`)||js(r=>r`\u0000`);Ns``&&Ns`\0`&&Ns`\n`&&Ns`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Fc="google#safe";function zc(){if(typeof window<"u")return window.trustedTypes}function Ll(){var r;return(r=zc())!==null&&r!==void 0?r:null}let Ws;function Nc(){var r,e;if(Ws===void 0)try{Ws=(e=(r=Ll())===null||r===void 0?void 0:r.createPolicy(Fc,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{Ws=null}return Ws}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Tl{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Xo(r){var e;const t=r,i=(e=Nc())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Tl(t,Ic)}function jc(r){var e;if(!((e=Ll())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Tl)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Wc(r,...e){if(e.length===0)return Xo(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return Xo(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Bc(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Hc(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=Bc(e||window);t&&r.setAttribute("nonce",t)}function Gc(r,e,t){r.src=jc(e),Hc(r)}/**
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
 */const Vc=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Gc(t,Wc`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Rl(r={}){await Vc;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Ko(r){if(await Rl(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Yc(r){return await Rl(),new google.visualization.ChartWrapper({container:r})}function gt(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function ui(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const Ml=6048e5,qc=864e5;let Xc={};function gs(){return Xc}function Or(r,e){var o,h,u,m;const t=gs(),i=(e==null?void 0:e.weekStartsOn)??((h=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((m=(u=t.locale)==null?void 0:u.options)==null?void 0:m.weekStartsOn)??0,s=gt(r),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function Zs(r){return Or(r,{weekStartsOn:1})}function Ul(r){const e=gt(r),t=e.getFullYear(),i=ui(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=Zs(i),n=ui(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const a=Zs(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function Qs(r){const e=gt(r);return e.setHours(0,0,0,0),e}function Zo(r){const e=gt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Kc(r,e){const t=Qs(r),i=Qs(e),s=+t-Zo(t),n=+i-Zo(i);return Math.round((s-n)/qc)}function Zc(r){const e=Ul(r),t=ui(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),Zs(t)}function Qc(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Il(r){if(!Qc(r)&&typeof r!="number")return!1;const e=gt(r);return!isNaN(Number(e))}function Fl(r){const e=gt(r);return e.setHours(23,59,59,999),e}function Js(r){const e=gt(r),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function en(r){const e=gt(r);return e.setDate(1),e.setHours(0,0,0,0),e}function zl(r){const e=gt(r),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function Fa(r){const e=gt(r),t=ui(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Nl(r){const e=gt(r);return e.setMinutes(59,59,999),e}function tn(r,e){var o,h;const t=gs(),i=t.weekStartsOn??((h=(o=t.locale)==null?void 0:o.options)==null?void 0:h.weekStartsOn)??0,s=gt(r),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const Jc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},eu=(r,e,t)=>{let i;const s=Jc[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function ma(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const tu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ru={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},iu={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},su={date:ma({formats:tu,defaultWidth:"full"}),time:ma({formats:ru,defaultWidth:"full"}),dateTime:ma({formats:iu,defaultWidth:"full"})},nu={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},au=(r,e,t,i)=>nu[r];function Xi(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const ou={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},lu={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},hu={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},cu={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},uu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},du={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},pu=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},fu={ordinalNumber:pu,era:Xi({values:ou,defaultWidth:"wide"}),quarter:Xi({values:lu,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Xi({values:hu,defaultWidth:"wide"}),day:Xi({values:cu,defaultWidth:"wide"}),dayPeriod:Xi({values:uu,defaultWidth:"wide",formattingValues:du,defaultFormattingWidth:"wide"})};function Ki(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],h=Array.isArray(o)?mu(o,f=>f.test(a)):gu(o,f=>f.test(a));let u;u=r.valueCallback?r.valueCallback(h):h,u=t.valueCallback?t.valueCallback(u):u;const m=e.slice(a.length);return{value:u,rest:m}}}function gu(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function mu(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function vu(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const yu=/^(\d+)(th|st|nd|rd)?/i,bu=/\d+/i,wu={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xu={any:[/^b/i,/^(a|c)/i]},Su={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_u={any:[/1/i,/2/i,/3/i,/4/i]},$u={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Cu={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Au={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pu={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ku={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ou={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Eu={ordinalNumber:vu({matchPattern:yu,parsePattern:bu,valueCallback:r=>parseInt(r,10)}),era:Ki({matchPatterns:wu,defaultMatchWidth:"wide",parsePatterns:xu,defaultParseWidth:"any"}),quarter:Ki({matchPatterns:Su,defaultMatchWidth:"wide",parsePatterns:_u,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Ki({matchPatterns:$u,defaultMatchWidth:"wide",parsePatterns:Cu,defaultParseWidth:"any"}),day:Ki({matchPatterns:Au,defaultMatchWidth:"wide",parsePatterns:Pu,defaultParseWidth:"any"}),dayPeriod:Ki({matchPatterns:ku,defaultMatchWidth:"any",parsePatterns:Ou,defaultParseWidth:"any"})},Du={code:"en-US",formatDistance:eu,formatLong:su,formatRelative:au,localize:fu,match:Eu,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Lu(r){const e=gt(r);return Kc(e,Fa(e))+1}function Tu(r){const e=gt(r),t=+Zs(e)-+Zc(e);return Math.round(t/Ml)+1}function jl(r,e){var m,f,y,x;const t=gt(r),i=t.getFullYear(),s=gs(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((x=(y=s.locale)==null?void 0:y.options)==null?void 0:x.firstWeekContainsDate)??1,a=ui(r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Or(a,e),h=ui(r,0);h.setFullYear(i,0,n),h.setHours(0,0,0,0);const u=Or(h,e);return t.getTime()>=o.getTime()?i+1:t.getTime()>=u.getTime()?i:i-1}function Ru(r,e){var o,h,u,m;const t=gs(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:h.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(u=t.locale)==null?void 0:u.options)==null?void 0:m.firstWeekContainsDate)??1,s=jl(r,e),n=ui(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Or(n,e)}function Mu(r,e){const t=gt(r),i=+Or(t,e)-+Ru(t,e);return Math.round(i/Ml)+1}function De(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Br={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return De(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):De(t+1,2)},d(r,e){return De(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return De(r.getHours()%12||12,e.length)},H(r,e){return De(r.getHours(),e.length)},m(r,e){return De(r.getMinutes(),e.length)},s(r,e){return De(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return De(s,e.length)}},yi={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Qo={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Br.y(r,e)},Y:function(r,e,t,i){const s=jl(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return De(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):De(n,e.length)},R:function(r,e){const t=Ul(r);return De(t,e.length)},u:function(r,e){const t=r.getFullYear();return De(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return De(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return De(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Br.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return De(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=Mu(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):De(s,e.length)},I:function(r,e,t){const i=Tu(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):De(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Br.d(r,e)},D:function(r,e,t){const i=Lu(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):De(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return De(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return De(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return De(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=yi.noon:i===0?s=yi.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=yi.evening:i>=12?s=yi.afternoon:i>=4?s=yi.morning:s=yi.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Br.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Br.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):De(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):De(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Br.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Br.s(r,e)},S:function(r,e){return Br.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return el(i);case"XXXX":case"XX":return li(i);case"XXXXX":case"XXX":default:return li(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return el(i);case"xxxx":case"xx":return li(i);case"xxxxx":case"xxx":default:return li(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Jo(i,":");case"OOOO":default:return"GMT"+li(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Jo(i,":");case"zzzz":default:return"GMT"+li(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return De(i,e.length)},T:function(r,e,t){const i=r.getTime();return De(i,e.length)}};function Jo(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+De(n,2)}function el(r,e){return r%60===0?(r>0?"-":"+")+De(Math.abs(r)/60,2):li(r,e)}function li(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=De(Math.trunc(i/60),2),n=De(i%60,2);return t+s+e+n}const tl=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Wl=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Uu=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return tl(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",tl(i,e)).replace("{{time}}",Wl(s,e))},Iu={p:Wl,P:Uu},Fu=/^D+$/,zu=/^Y+$/,Nu=["D","DD","YY","YYYY"];function ju(r){return Fu.test(r)}function Wu(r){return zu.test(r)}function Bu(r,e,t){const i=Hu(r,e,t);if(console.warn(i),Nu.includes(r))throw new RangeError(i)}function Hu(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Gu=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Vu=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Yu=/^'([^]*?)'?$/,qu=/''/g,Xu=/[a-zA-Z]/;function Qe(r,e,t){var m,f,y,x;const i=gs(),s=i.locale??Du,n=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??((x=(y=i.locale)==null?void 0:y.options)==null?void 0:x.weekStartsOn)??0,o=gt(r);if(!Il(o))throw new RangeError("Invalid time value");let h=e.match(Vu).map(_=>{const $=_[0];if($==="p"||$==="P"){const C=Iu[$];return C(_,s.formatLong)}return _}).join("").match(Gu).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const $=_[0];if($==="'")return{isToken:!1,value:Ku(_)};if(Qo[$])return{isToken:!0,value:_};if($.match(Xu))throw new RangeError("Format string contains an unescaped latin alphabet character `"+$+"`");return{isToken:!1,value:_}});s.localize.preprocessor&&(h=s.localize.preprocessor(o,h));const u={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return h.map(_=>{if(!_.isToken)return _.value;const $=_.value;(Wu($)||ju($))&&Bu($,e,String(r));const C=Qo[$[0]];return C(o,$,s.localize,u)}).join("")}function Ku(r){const e=r.match(Yu);return e?e[1].replace(qu,"'"):r}function va(r,e){const t=gt(r);if(!Il(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const h=De(t.getDate(),2),u=De(t.getMonth()+1,2);n=`${De(t.getFullYear(),4)}${a}${u}${a}${h}`}if(s!=="date"){const h=De(t.getHours(),2),u=De(t.getMinutes(),2),m=De(t.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${o}${u}${o}${m}`}return n}function Bl(r){const e=gt(r);return e.setMinutes(0,0,0),e}var Zu={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Qu=`\r
`,Ju="\uFEFF",ms=r=>Object.assign({},Zu,r);class ed extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class td extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class rd extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class id extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Ii=r=>r,Gt=r=>r,Ji=Ii,gn=Ii,$i=Ii,rl=Ii,il=Ii,sd=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},nd=r=>rl(typeof r=="object"?r.key:r),ad=r=>il(typeof r=="object"?r.displayLabel:r),od=(r,...e)=>e.reduce((t,i)=>i(t),r),ld=r=>e=>r.useBom?gn(Gt(e)+Ju):e,hd=r=>e=>r.showTitle?za(gn(Gt(e)+r.title))($i("")):e,za=r=>e=>gn(Gt(r)+Gt(e)+Qu),Hl=r=>(e,t)=>cd(r)($i(Gt(e)+Gt(t))),cd=r=>e=>Ii(Gt(e)+r.fieldSeparator),ud=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new td("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=$i("");for(let s=0;s<e.length;s++){const n=ad(e[s]);i=Hl(r)(i,Gl(r,Gt(n)))}return i=$i(Gt(i).slice(0,-1)),za(t)(i)},dd=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=$i("");for(let o=0;o<e.length;o++){const h=nd(e[o]),u=t[n][Gt(h)];a=Hl(r)(a,Gl(r,u))}a=$i(Gt(a).slice(0,-1)),s=za(s)(a)}return s},pd=r=>+r===r&&(!isFinite(r)||!!(r%1)),fd=(r,e)=>{if(pd(e)){if(r.decimalSeparator==="locale")return Ji(e.toLocaleString());if(r.decimalSeparator)return Ji(e.toString().replace(".",r.decimalSeparator))}return Ji(e.toString())},Gs=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+sd(e,r.quoteCharacter)+r.quoteCharacter),Ji(t)},gd=(r,e)=>{const t=e?"true":"false";return Ji(r.boolDisplay[t])},md=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?Gs(r,r.replaceUndefinedWith+""):e===null?Gs(r,"null"):Gs(r,""),Gl=(r,e)=>{if(typeof e=="number")return fd(r,e);if(typeof e=="string")return Gs(r,e);if(typeof e=="boolean"&&r.boolDisplay)return gd(r,e);if(e===null||typeof e>"u")return md(r,e);throw new id(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Vl=r=>e=>{const t=ms(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=od(gn(""),ld(t),hd(t),ud(t,i),dd(t,i,e));if(Gt(s).length<1)throw new ed("Output is empty. Is your data formatted correctly?");return s},vd=r=>e=>{const t=ms(r),i=Gt(e),s=t.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Yl=r=>e=>{if(!window)throw new rd("Downloading only supported in a browser environment.");const t=vd(r)(e),i=ms(r),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function wd(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var ql={exports:{}};(function(r){(function(e){var t=I(),i=J(),s=W(),n=se(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:h,toPng:m,toJpeg:f,toBlob:y,toPixelData:u,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function h(w,P){return P=P||{},x(P),Promise.resolve(w).then(function(k){return $(k,P.filter,!0)}).then(C).then(B).then(O).then(function(k){return z(k,P.width||t.width(w),P.height||t.height(w))});function O(k){return P.bgcolor&&(k.style.backgroundColor=P.bgcolor),P.width&&(k.style.width=P.width+"px"),P.height&&(k.style.height=P.height+"px"),P.style&&Object.keys(P.style).forEach(function(N){k.style[N]=P.style[N]}),k}}function u(w,P){return _(w,P||{}).then(function(O){return O.getContext("2d").getImageData(0,0,t.width(w),t.height(w)).data})}function m(w,P){return _(w,P||{}).then(function(O){return O.toDataURL()})}function f(w,P){return P=P||{},_(w,P).then(function(O){return O.toDataURL("image/jpeg",P.quality||1)})}function y(w,P){return _(w,P||{}).then(t.canvasToBlob)}function x(w){typeof w.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=w.imagePlaceholder,typeof w.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=w.cacheBust}function _(w,P){return h(w,P).then(t.makeImage).then(t.delay(100)).then(function(k){var N=O(w);return N.getContext("2d").drawImage(k,0,0),N});function O(k){var N=document.createElement("canvas");if(N.width=P.width||t.width(k),N.height=P.height||t.height(k),P.bgcolor){var L=N.getContext("2d");L.fillStyle=P.bgcolor,L.fillRect(0,0,N.width,N.height)}return N}}function $(w,P,O){if(!O&&P&&!P(w))return Promise.resolve();return Promise.resolve(w).then(k).then(function(T){return N(w,T,P)}).then(function(T){return L(w,T)});function k(T){return T instanceof HTMLCanvasElement?t.makeImage(T.toDataURL()):T.cloneNode(!1)}function N(T,M,Z){var le=T.childNodes;if(le.length===0)return Promise.resolve(M);return ae(M,t.asArray(le),Z).then(function(){return M});function ae(me,ze,Re){var rt=Promise.resolve();return ze.forEach(function(ut){rt=rt.then(function(){return $(ut,Re)}).then(function(et){et&&me.appendChild(et)})}),rt}}function L(T,M){if(!(M instanceof Element))return M;return Promise.resolve().then(Z).then(le).then(ae).then(me).then(function(){return M});function Z(){ze(window.getComputedStyle(T),M.style);function ze(Re,rt){Re.cssText?rt.cssText=Re.cssText:ut(Re,rt);function ut(et,ot){t.asArray(et).forEach(function(K){ot.setProperty(K,et.getPropertyValue(K),et.getPropertyPriority(K))})}}}function le(){[":before",":after"].forEach(function(Re){ze(Re)});function ze(Re){var rt=window.getComputedStyle(T,Re),ut=rt.getPropertyValue("content");if(ut===""||ut==="none")return;var et=t.uid();M.className=M.className+" "+et;var ot=document.createElement("style");ot.appendChild(K(et,Re,rt)),M.appendChild(ot);function K(re,ve,$e){var We="."+re+":"+ve,Pe=$e.cssText?Nr($e):si($e);return document.createTextNode(We+"{"+Pe+"}");function Nr(Be){var Nt=Be.getPropertyValue("content");return Be.cssText+" content: "+Nt+";"}function si(Be){return t.asArray(Be).map(Nt).join("; ")+";";function Nt(Pr){return Pr+": "+Be.getPropertyValue(Pr)+(Be.getPropertyPriority(Pr)?" !important":"")}}}}}function ae(){T instanceof HTMLTextAreaElement&&(M.innerHTML=T.value),T instanceof HTMLInputElement&&M.setAttribute("value",T.value)}function me(){M instanceof SVGElement&&(M.setAttribute("xmlns","http://www.w3.org/2000/svg"),M instanceof SVGRectElement&&["width","height"].forEach(function(ze){var Re=M.getAttribute(ze);Re&&M.style.setProperty(ze,Re)}))}}}function C(w){return s.resolveAll().then(function(P){var O=document.createElement("style");return w.appendChild(O),O.appendChild(document.createTextNode(P)),w})}function B(w){return n.inlineAll(w).then(function(){return w})}function z(w,P,O){return Promise.resolve(w).then(function(k){return k.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(k)}).then(t.escapeXhtml).then(function(k){return'<foreignObject x="0" y="0" width="100%" height="100%">'+k+"</foreignObject>"}).then(function(k){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+P+'" height="'+O+'">'+k+"</svg>"}).then(function(k){return"data:image/svg+xml;charset=utf-8,"+k})}function I(){return{escape:me,parseExtension:P,mimeType:O,dataAsUrl:ae,isDataUrl:k,canvasToBlob:L,resolveUrl:T,getAndEncode:le,uid:M(),delay:ze,asArray:Re,escapeXhtml:rt,makeImage:Z,width:ut,height:et};function w(){var K="application/font-woff",re="image/jpeg";return{woff:K,woff2:K,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:re,jpeg:re,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function P(K){var re=/\.([^\.\/]*?)$/g.exec(K);return re?re[1]:""}function O(K){var re=P(K).toLowerCase();return w()[re]||""}function k(K){return K.search(/^(data:)/)!==-1}function N(K){return new Promise(function(re){for(var ve=window.atob(K.toDataURL().split(",")[1]),$e=ve.length,We=new Uint8Array($e),Pe=0;Pe<$e;Pe++)We[Pe]=ve.charCodeAt(Pe);re(new Blob([We],{type:"image/png"}))})}function L(K){return K.toBlob?new Promise(function(re){K.toBlob(re)}):N(K)}function T(K,re){var ve=document.implementation.createHTMLDocument(),$e=ve.createElement("base");ve.head.appendChild($e);var We=ve.createElement("a");return ve.body.appendChild(We),$e.href=re,We.href=K,We.href}function M(){var K=0;return function(){return"u"+re()+K++;function re(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function Z(K){return new Promise(function(re,ve){var $e=new Image;$e.onload=function(){re($e)},$e.onerror=ve,$e.src=K})}function le(K){var re=3e4;return o.impl.options.cacheBust&&(K+=(/\?/.test(K)?"&":"?")+new Date().getTime()),new Promise(function(ve){var $e=new XMLHttpRequest;$e.onreadystatechange=Nr,$e.ontimeout=si,$e.responseType="blob",$e.timeout=re,$e.open("GET",K,!0),$e.send();var We;if(o.impl.options.imagePlaceholder){var Pe=o.impl.options.imagePlaceholder.split(/,/);Pe&&Pe[1]&&(We=Pe[1])}function Nr(){if($e.readyState===4){if($e.status!==200){We?ve(We):Be("cannot fetch resource: "+K+", status: "+$e.status);return}var Nt=new FileReader;Nt.onloadend=function(){var Pr=Nt.result.split(/,/)[1];ve(Pr)},Nt.readAsDataURL($e.response)}}function si(){We?ve(We):Be("timeout of "+re+"ms occured while fetching resource: "+K)}function Be(Nt){console.error(Nt),ve("")}})}function ae(K,re){return"data:"+re+";base64,"+K}function me(K){return K.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function ze(K){return function(re){return new Promise(function(ve){setTimeout(function(){ve(re)},K)})}}function Re(K){for(var re=[],ve=K.length,$e=0;$e<ve;$e++)re.push(K[$e]);return re}function rt(K){return K.replace(/#/g,"%23").replace(/\n/g,"%0A")}function ut(K){var re=ot(K,"border-left-width"),ve=ot(K,"border-right-width");return K.scrollWidth+re+ve}function et(K){var re=ot(K,"border-top-width"),ve=ot(K,"border-bottom-width");return K.scrollHeight+re+ve}function ot(K,re){var ve=window.getComputedStyle(K).getPropertyValue(re);return parseFloat(ve.replace("px",""))}}function J(){var w=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:N,shouldProcess:P,impl:{readUrls:O,inline:k}};function P(L){return L.search(w)!==-1}function O(L){for(var T=[],M;(M=w.exec(L))!==null;)T.push(M[1]);return T.filter(function(Z){return!t.isDataUrl(Z)})}function k(L,T,M,Z){return Promise.resolve(T).then(function(ae){return M?t.resolveUrl(ae,M):ae}).then(Z||t.getAndEncode).then(function(ae){return t.dataAsUrl(ae,t.mimeType(T))}).then(function(ae){return L.replace(le(T),"$1"+ae+"$3")});function le(ae){return new RegExp(`(url\\(['"]?)(`+t.escape(ae)+`)(['"]?\\))`,"g")}}function N(L,T,M){if(Z())return Promise.resolve(L);return Promise.resolve(L).then(O).then(function(le){var ae=Promise.resolve(L);return le.forEach(function(me){ae=ae.then(function(ze){return k(ze,me,T,M)})}),ae});function Z(){return!P(L)}}}function W(){return{resolveAll:w,impl:{readAll:P}};function w(){return P().then(function(O){return Promise.all(O.map(function(k){return k.resolve()}))}).then(function(O){return O.join(`
`)})}function P(){return Promise.resolve(t.asArray(document.styleSheets)).then(k).then(O).then(function(L){return L.map(N)});function O(L){return L.filter(function(T){return T.type===CSSRule.FONT_FACE_RULE}).filter(function(T){return i.shouldProcess(T.style.getPropertyValue("src"))})}function k(L){var T=[];return L.forEach(function(M){try{t.asArray(M.cssRules||[]).forEach(T.push.bind(T))}catch(Z){console.log("Error while reading CSS rules from "+M.href,Z.toString())}}),T}function N(L){return{resolve:function(){var M=(L.parentStyleSheet||{}).href;return i.inlineAll(L.cssText,M)},src:function(){return L.style.getPropertyValue("src")}}}}}function se(){return{inlineAll:P,impl:{newImage:w}};function w(O){return{inline:k};function k(N){return t.isDataUrl(O.src)?Promise.resolve():Promise.resolve(O.src).then(N||t.getAndEncode).then(function(L){return t.dataAsUrl(L,t.mimeType(O.src))}).then(function(L){return new Promise(function(T,M){O.onload=T,O.onerror=M,O.src=L})})}}function P(O){if(!(O instanceof Element))return Promise.resolve(O);return k(O).then(function(){return O instanceof HTMLImageElement?w(O).inline():Promise.all(t.asArray(O.childNodes).map(function(N){return P(N)}))});function k(N){var L=N.style.getPropertyValue("background");return L?i.inlineAll(L).then(function(T){N.style.setProperty("background",T,N.style.getPropertyPriority("background"))}).then(function(){return N}):Promise.resolve(N)}}}})()})(ql);var xd=ql.exports;const Sd=bd(xd);var _a={exports:{}};const _d={},$d=Object.freeze(Object.defineProperty({__proto__:null,default:_d},Symbol.toStringTag,{value:"Module"})),bi=wd($d);/**
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
 */(function(r,e){(function(t,i){i(e)})(yd,function(t){var i={},s={exports:{}};(function(R){var H=function(he){return typeof he<"u"&&he.versions!=null&&he.versions.node!=null&&he+""=="[object process]"};R.exports.isNode=H,R.exports.platform=typeof process<"u"&&H(process)?"node":"browser";var G=R.exports.platform==="node"&&bi;R.exports.isMainThread=R.exports.platform==="node"?(!G||G.isMainThread)&&!process.connected:typeof Window<"u",R.exports.cpus=R.exports.platform==="browser"?self.navigator.hardwareConcurrency:bi.cpus().length})(s);var n=s.exports,a={},o;function h(){if(o)return a;o=1;function R(he,Ue){var ye=this;if(!(this instanceof R))throw new SyntaxError("Constructor must be called with the new operator");if(typeof he!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Ye=[],Le=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var ee=function(xe,ke){Ye.push(xe),Le.push(ke)};this.then=function(U,xe){return new R(function(ke,lt){var wt=U?H(U,ke,lt):ke,fr=xe?H(xe,ke,lt):lt;ee(wt,fr)},ye)};var Te=function(xe){return ye.resolved=!0,ye.rejected=!1,ye.pending=!1,Ye.forEach(function(ke){ke(xe)}),ee=function(lt,wt){lt(xe)},Te=D=function(){},ye},D=function(xe){return ye.resolved=!1,ye.rejected=!0,ye.pending=!1,Le.forEach(function(ke){ke(xe)}),ee=function(lt,wt){wt(xe)},Te=D=function(){},ye};this.cancel=function(){return Ue?Ue.cancel():D(new G),ye},this.timeout=function(U){if(Ue)Ue.timeout(U);else{var xe=setTimeout(function(){D(new V("Promise timed out after "+U+" ms"))},U);ye.always(function(){clearTimeout(xe)})}return ye},he(function(U){Te(U)},function(U){D(U)})}function H(he,Ue,ye){return function(Ye){try{var Le=he(Ye);Le&&typeof Le.then=="function"&&typeof Le.catch=="function"?Le.then(Ue,ye):Ue(Le)}catch(ee){ye(ee)}}}R.prototype.catch=function(he){return this.then(null,he)},R.prototype.always=function(he){return this.then(he,he)},R.all=function(he){return new R(function(Ue,ye){var Ye=he.length,Le=[];Ye?he.forEach(function(ee,Te){ee.then(function(D){Le[Te]=D,Ye--,Ye==0&&Ue(Le)},function(D){Ye=0,ye(D)})}):Ue(Le)})},R.defer=function(){var he={};return he.promise=new R(function(Ue,ye){he.resolve=Ue,he.reject=ye}),he};function G(he){this.message=he||"promise cancelled",this.stack=new Error().stack}G.prototype=new Error,G.prototype.constructor=Error,G.prototype.name="CancellationError",R.CancellationError=G;function V(he){this.message=he||"timeout exceeded",this.stack=new Error().stack}return V.prototype=new Error,V.prototype.constructor=Error,V.prototype.name="TimeoutError",R.TimeoutError=V,a.Promise=R,a}function u(R,H){(H==null||H>R.length)&&(H=R.length);for(var G=0,V=Array(H);G<H;G++)V[G]=R[G];return V}function m(R,H){var G=typeof Symbol<"u"&&R[Symbol.iterator]||R["@@iterator"];if(!G){if(Array.isArray(R)||(G=B(R))||H){G&&(R=G);var V=0,he=function(){};return{s:he,n:function(){return V>=R.length?{done:!0}:{done:!1,value:R[V++]}},e:function(Le){throw Le},f:he}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ue,ye=!0,Ye=!1;return{s:function(){G=G.call(R)},n:function(){var Le=G.next();return ye=Le.done,Le},e:function(Le){Ye=!0,Ue=Le},f:function(){try{ye||G.return==null||G.return()}finally{if(Ye)throw Ue}}}}function f(R,H,G){return(H=$(H))in R?Object.defineProperty(R,H,{value:G,enumerable:!0,configurable:!0,writable:!0}):R[H]=G,R}function y(R,H){var G=Object.keys(R);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(R);H&&(V=V.filter(function(he){return Object.getOwnPropertyDescriptor(R,he).enumerable})),G.push.apply(G,V)}return G}function x(R){for(var H=1;H<arguments.length;H++){var G=arguments[H]!=null?arguments[H]:{};H%2?y(Object(G),!0).forEach(function(V){f(R,V,G[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(G)):y(Object(G)).forEach(function(V){Object.defineProperty(R,V,Object.getOwnPropertyDescriptor(G,V))})}return R}function _(R,H){if(typeof R!="object"||!R)return R;var G=R[Symbol.toPrimitive];if(G!==void 0){var V=G.call(R,H||"default");if(typeof V!="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return(H==="string"?String:Number)(R)}function $(R){var H=_(R,"string");return typeof H=="symbol"?H:H+""}function C(R){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},C(R)}function B(R,H){if(R){if(typeof R=="string")return u(R,H);var G={}.toString.call(R).slice(8,-1);return G==="Object"&&R.constructor&&(G=R.constructor.name),G==="Map"||G==="Set"?Array.from(R):G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G)?u(R,H):void 0}}var z={exports:{}},I={},J;function W(){return J||(J=1,I.validateOptions=function(H,G,V){if(H){var he=H?Object.keys(H):[],Ue=he.find(function(Ye){return!G.includes(Ye)});if(Ue)throw new Error('Object "'+V+'" contains an unknown option "'+Ue+'"');var ye=G.find(function(Ye){return Object.prototype[Ye]&&!he.includes(Ye)});if(ye)throw new Error('Object "'+V+'" contains an inherited option "'+ye+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return H}},I.workerOptsNames=["credentials","name","type"],I.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],I.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),I}var se,w;function P(){return w||(w=1,se=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),se}var O;function k(){if(O)return z.exports;O=1;var R=h(),H=R.Promise,G=n,V=W(),he=V.validateOptions,Ue=V.forkOptsNames,ye=V.workerThreadOptsNames,Ye=V.workerOptsNames,Le="__workerpool-terminate__";function ee(){var oe=D();if(!oe)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return oe}function Te(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":C(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function D(){try{return bi}catch(oe){if(C(oe)==="object"&&oe!==null&&oe.code==="MODULE_NOT_FOUND")return null;throw oe}}function U(){if(G.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var oe=new Blob([P()],{type:"text/javascript"});return window.URL.createObjectURL(oe)}else return __dirname+"/worker.js"}function xe(oe,Se){if(Se.workerType==="web")return Te(),ke(oe,Se.workerOpts,Worker);if(Se.workerType==="thread")return F=ee(),lt(oe,F,Se);if(Se.workerType==="process"||!Se.workerType)return wt(oe,fr(Se),bi);if(G.platform==="browser")return Te(),ke(oe,Se.workerOpts,Worker);var F=D();return F?lt(oe,F,Se):wt(oe,fr(Se),bi)}function ke(oe,Se,F){he(Se,Ye,"workerOpts");var ge=new F(oe,Se);return ge.isBrowserWorker=!0,ge.on=function(Ie,Me){this.addEventListener(Ie,function(Je){Me(Je.data)})},ge.send=function(Ie,Me){this.postMessage(Ie,Me)},ge}function lt(oe,Se,F){var ge,Ie;he(F==null?void 0:F.workerThreadOpts,ye,"workerThreadOpts");var Me=new Se.Worker(oe,x({stdout:(ge=F==null?void 0:F.emitStdStreams)!==null&&ge!==void 0?ge:!1,stderr:(Ie=F==null?void 0:F.emitStdStreams)!==null&&Ie!==void 0?Ie:!1},F==null?void 0:F.workerThreadOpts));return Me.isWorkerThread=!0,Me.send=function(Je,Oe){this.postMessage(Je,Oe)},Me.kill=function(){return this.terminate(),!0},Me.disconnect=function(){this.terminate()},F!=null&&F.emitStdStreams&&(Me.stdout.on("data",function(Je){return Me.emit("stdout",Je)}),Me.stderr.on("data",function(Je){return Me.emit("stderr",Je)})),Me}function wt(oe,Se,F){he(Se.forkOpts,Ue,"forkOpts");var ge=F.fork(oe,Se.forkArgs,Se.forkOpts),Ie=ge.send;return ge.send=function(Me){return Ie.call(ge,Me)},Se.emitStdStreams&&(ge.stdout.on("data",function(Me){return ge.emit("stdout",Me)}),ge.stderr.on("data",function(Me){return ge.emit("stderr",Me)})),ge.isChildProcess=!0,ge}function fr(oe){oe=oe||{};var Se=process.execArgv.join(" "),F=Se.indexOf("--inspect")!==-1,ge=Se.indexOf("--debug-brk")!==-1,Ie=[];return F&&(Ie.push("--inspect="+oe.debugPort),ge&&Ie.push("--debug-brk")),process.execArgv.forEach(function(Me){Me.indexOf("--max-old-space-size")>-1&&Ie.push(Me)}),Object.assign({},oe,{forkArgs:oe.forkArgs,forkOpts:Object.assign({},oe.forkOpts,{execArgv:(oe.forkOpts&&oe.forkOpts.execArgv||[]).concat(Ie),stdio:oe.emitStdStreams?"pipe":void 0})})}function jt(oe){for(var Se=new Error(""),F=Object.keys(oe),ge=0;ge<F.length;ge++)Se[F[ge]]=oe[F[ge]];return Se}function er(oe,Se){if(Object.keys(oe.processing).length===1){var F=Object.values(oe.processing)[0];F.options&&typeof F.options.on=="function"&&F.options.on(Se)}}function jr(oe,Se){var F=this,ge=Se||{};this.script=oe||U(),this.worker=xe(this.script,ge),this.debugPort=ge.debugPort,this.forkOpts=ge.forkOpts,this.forkArgs=ge.forkArgs,this.workerOpts=ge.workerOpts,this.workerThreadOpts=ge.workerThreadOpts,this.workerTerminateTimeout=ge.workerTerminateTimeout,oe||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Oe){er(F,{stdout:Oe.toString()})}),this.worker.on("stderr",function(Oe){er(F,{stderr:Oe.toString()})}),this.worker.on("message",function(Oe){if(!F.terminated)if(typeof Oe=="string"&&Oe==="ready")F.worker.ready=!0,Me();else{var Et=Oe.id,ht=F.processing[Et];ht!==void 0&&(Oe.isEvent?ht.options&&typeof ht.options.on=="function"&&ht.options.on(Oe.payload):(delete F.processing[Et],F.terminating===!0&&F.terminate(),Oe.error?ht.resolver.reject(jt(Oe.error)):ht.resolver.resolve(Oe.result)))}});function Ie(Oe){F.terminated=!0;for(var Et in F.processing)F.processing[Et]!==void 0&&F.processing[Et].resolver.reject(Oe);F.processing=Object.create(null)}function Me(){var Oe=m(F.requestQueue.splice(0)),Et;try{for(Oe.s();!(Et=Oe.n()).done;){var ht=Et.value;F.worker.send(ht.message,ht.transfer)}}catch(ks){Oe.e(ks)}finally{Oe.f()}}var Je=this.worker;this.worker.on("error",Ie),this.worker.on("exit",function(Oe,Et){var ht=`Workerpool Worker terminated Unexpectedly
`;ht+="    exitCode: `"+Oe+"`\n",ht+="    signalCode: `"+Et+"`\n",ht+="    workerpool.script: `"+F.script+"`\n",ht+="    spawnArgs: `"+Je.spawnargs+"`\n",ht+="    spawnfile: `"+Je.spawnfile+"`\n",ht+="    stdout: `"+Je.stdout+"`\n",ht+="    stderr: `"+Je.stderr+"`\n",Ie(new Error(ht))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return jr.prototype.methods=function(){return this.exec("methods")},jr.prototype.exec=function(oe,Se,F,ge){F||(F=H.defer());var Ie=++this.lastId;this.processing[Ie]={id:Ie,resolver:F,options:ge};var Me={message:{id:Ie,method:oe,params:Se},transfer:ge&&ge.transfer};this.terminated?F.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Me.message,Me.transfer):this.requestQueue.push(Me);var Je=this;return F.promise.catch(function(Oe){if(Oe instanceof H.CancellationError||Oe instanceof H.TimeoutError)return delete Je.processing[Ie],Je.terminateAndNotify(!0).then(function(){throw Oe},function(Et){throw Et});throw Oe})},jr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},jr.prototype.terminate=function(oe,Se){var F=this;if(oe){for(var ge in this.processing)this.processing[ge]!==void 0&&this.processing[ge].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Se=="function"&&(this.terminationHandler=Se),this.busy())this.terminating=!0;else{var Ie=function(Oe){if(F.terminated=!0,F.cleaning=!1,F.worker!=null&&F.worker.removeAllListeners&&F.worker.removeAllListeners("message"),F.worker=null,F.terminating=!1,F.terminationHandler)F.terminationHandler(Oe,F);else if(Oe)throw Oe};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ie(new Error("worker already killed!"));return}var Me=setTimeout(function(){F.worker&&F.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Me),F.worker&&(F.worker.killed=!0),Ie()}),this.worker.ready?this.worker.send(Le):this.requestQueue.push({message:Le}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ie()}},jr.prototype.terminateAndNotify=function(oe,Se){var F=H.defer();return Se&&F.promise.timeout(Se),this.terminate(oe,function(ge,Ie){ge?F.reject(ge):F.resolve(Ie)}),F.promise},z.exports=jr,z.exports._tryRequireWorkerThreads=D,z.exports._setupProcessWorker=wt,z.exports._setupBrowserWorker=ke,z.exports._setupWorkerThreadWorker=lt,z.exports.ensureWorkerThreads=ee,z.exports}var N,L;function T(){if(L)return N;L=1;var R=65535;N=H;function H(){this.ports=Object.create(null),this.length=0}return H.prototype.nextAvailableStartingAt=function(G){for(;this.ports[G]===!0;)G++;if(G>=R)throw new Error("WorkerPool debug port limit reached: "+G+">= "+R);return this.ports[G]=!0,this.length++,G},H.prototype.releasePort=function(G){delete this.ports[G],this.length--},N}var M,Z;function le(){if(Z)return M;Z=1;var R=h(),H=R.Promise,G=k(),V=n,he=T(),Ue=new he;function ye(D,U){typeof D=="string"?this.script=D||null:(this.script=null,U=D),this.workers=[],this.tasks=[],U=U||{},this.forkArgs=Object.freeze(U.forkArgs||[]),this.forkOpts=Object.freeze(U.forkOpts||{}),this.workerOpts=Object.freeze(U.workerOpts||{}),this.workerThreadOpts=Object.freeze(U.workerThreadOpts||{}),this.debugPortStart=U.debugPortStart||43210,this.nodeWorker=U.nodeWorker,this.workerType=U.workerType||U.nodeWorker||"auto",this.maxQueueSize=U.maxQueueSize||1/0,this.workerTerminateTimeout=U.workerTerminateTimeout||1e3,this.onCreateWorker=U.onCreateWorker||function(){return null},this.onTerminateWorker=U.onTerminateWorker||function(){return null},this.emitStdStreams=U.emitStdStreams||!1,U&&"maxWorkers"in U?(Ye(U.maxWorkers),this.maxWorkers=U.maxWorkers):this.maxWorkers=Math.max((V.cpus||4)-1,1),U&&"minWorkers"in U&&(U.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Le(U.minWorkers),this.minWorkers=U.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&G.ensureWorkerThreads()}ye.prototype.exec=function(D,U,xe){if(U&&!Array.isArray(U))throw new TypeError('Array expected as argument "params"');if(typeof D=="string"){var ke=H.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var lt=this.tasks,wt={method:D,params:U,resolver:ke,timeout:null,options:xe};lt.push(wt);var fr=ke.promise.timeout;return ke.promise.timeout=function(er){return lt.indexOf(wt)!==-1?(wt.timeout=er,ke.promise):fr.call(ke.promise,er)},this._next(),ke.promise}else{if(typeof D=="function")return this.exec("run",[String(D),U],xe);throw new TypeError('Function or string expected as argument "method"')}},ye.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var D=this;return this.exec("methods").then(function(U){var xe={};return U.forEach(function(ke){xe[ke]=function(){return D.exec(ke,Array.prototype.slice.call(arguments))}}),xe})},ye.prototype._next=function(){if(this.tasks.length>0){var D=this._getWorker();if(D){var U=this,xe=this.tasks.shift();if(xe.resolver.promise.pending){var ke=D.exec(xe.method,xe.params,xe.resolver,xe.options).then(U._boundNext).catch(function(){if(D.terminated)return U._removeWorker(D)}).then(function(){U._next()});typeof xe.timeout=="number"&&ke.timeout(xe.timeout)}else U._next()}}},ye.prototype._getWorker=function(){for(var D=this.workers,U=0;U<D.length;U++){var xe=D[U];if(xe.busy()===!1)return xe}return D.length<this.maxWorkers?(xe=this._createWorkerHandler(),D.push(xe),xe):null},ye.prototype._removeWorker=function(D){var U=this;return Ue.releasePort(D.debugPort),this._removeWorkerFromList(D),this._ensureMinWorkers(),new H(function(xe,ke){D.terminate(!1,function(lt){U.onTerminateWorker({forkArgs:D.forkArgs,forkOpts:D.forkOpts,workerThreadOpts:D.workerThreadOpts,script:D.script}),lt?ke(lt):xe(D)})})},ye.prototype._removeWorkerFromList=function(D){var U=this.workers.indexOf(D);U!==-1&&this.workers.splice(U,1)},ye.prototype.terminate=function(D,U){var xe=this;this.tasks.forEach(function(jt){jt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ke=function(er){Ue.releasePort(er.debugPort),this._removeWorkerFromList(er)},lt=ke.bind(this),wt=[],fr=this.workers.slice();return fr.forEach(function(jt){var er=jt.terminateAndNotify(D,U).then(lt).always(function(){xe.onTerminateWorker({forkArgs:jt.forkArgs,forkOpts:jt.forkOpts,workerThreadOpts:jt.workerThreadOpts,script:jt.script})});wt.push(er)}),H.all(wt)},ye.prototype.stats=function(){var D=this.workers.length,U=this.workers.filter(function(xe){return xe.busy()}).length;return{totalWorkers:D,busyWorkers:U,idleWorkers:D-U,pendingTasks:this.tasks.length,activeTasks:U}},ye.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var D=this.workers.length;D<this.minWorkers;D++)this.workers.push(this._createWorkerHandler())},ye.prototype._createWorkerHandler=function(){var D=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new G(D.script||this.script,{forkArgs:D.forkArgs||this.forkArgs,forkOpts:D.forkOpts||this.forkOpts,workerOpts:D.workerOpts||this.workerOpts,workerThreadOpts:D.workerThreadOpts||this.workerThreadOpts,debugPort:Ue.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Ye(D){if(!ee(D)||!Te(D)||D<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Le(D){if(!ee(D)||!Te(D)||D<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function ee(D){return typeof D=="number"}function Te(D){return Math.round(D)==D}return M=ye,M}var ae={},me,ze;function Re(){if(ze)return me;ze=1;function R(H,G){this.message=H,this.transfer=G}return me=R,me}var rt;function ut(){return rt||(rt=1,function(R){var H=Re(),G="__workerpool-terminate__",V={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")V.on=function(ee,Te){addEventListener(ee,function(D){Te(D.data)})},V.send=function(ee,Te){Te?postMessage(ee,Te):postMessage(ee)};else if(typeof process<"u"){var he;try{he=bi}catch(ee){if(!(C(ee)==="object"&&ee!==null&&ee.code==="MODULE_NOT_FOUND"))throw ee}if(he&&he.parentPort!==null){var Ue=he.parentPort;V.send=Ue.postMessage.bind(Ue),V.on=Ue.on.bind(Ue),V.exit=process.exit.bind(process)}else V.on=process.on.bind(process),V.send=function(ee){process.send(ee)},V.on("disconnect",function(){process.exit(1)}),V.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ye(ee){return Object.getOwnPropertyNames(ee).reduce(function(Te,D){return Object.defineProperty(Te,D,{value:ee[D],enumerable:!0})},{})}function Ye(ee){return ee&&typeof ee.then=="function"&&typeof ee.catch=="function"}V.methods={},V.methods.run=function(Te,D){var U=new Function("return ("+Te+").apply(null, arguments);");return U.apply(U,D)},V.methods.methods=function(){return Object.keys(V.methods)},V.terminationHandler=void 0,V.cleanupAndExit=function(ee){var Te=function(){V.exit(ee)};if(!V.terminationHandler)return Te();var D=V.terminationHandler(ee);Ye(D)?D.then(Te,Te):Te()};var Le=null;V.on("message",function(ee){if(ee===G)return V.cleanupAndExit(0);try{var Te=V.methods[ee.method];if(Te){Le=ee.id;var D=Te.apply(Te,ee.params);Ye(D)?D.then(function(U){U instanceof H?V.send({id:ee.id,result:U.message,error:null},U.transfer):V.send({id:ee.id,result:U,error:null}),Le=null}).catch(function(U){V.send({id:ee.id,result:null,error:ye(U)}),Le=null}):(D instanceof H?V.send({id:ee.id,result:D.message,error:null},D.transfer):V.send({id:ee.id,result:D,error:null}),Le=null)}else throw new Error('Unknown method "'+ee.method+'"')}catch(U){V.send({id:ee.id,result:null,error:ye(U)})}}),V.register=function(ee,Te){if(ee)for(var D in ee)ee.hasOwnProperty(D)&&(V.methods[D]=ee[D]);Te&&(V.terminationHandler=Te.onTerminate),V.send("ready")},V.emit=function(ee){if(Le){if(ee instanceof H){V.send({id:Le,isEvent:!0,payload:ee.message},ee.transfer);return}V.send({id:Le,isEvent:!0,payload:ee})}},R.add=V.register,R.emit=V.emit}(ae)),ae}var et=n.platform,ot=n.isMainThread,K=n.cpus;function re(R,H){var G=le();return new G(R,H)}var ve=i.pool=re;function $e(R,H){var G=ut();G.add(R,H)}var We=i.worker=$e;function Pe(R){var H=ut();H.emit(R)}var Nr=i.workerEmit=Pe,si=h(),Be=si.Promise,Nt=i.Promise=Be,Pr=i.Transfer=Re(),zn=i.platform=et,Nn=i.isMainThread=ot,jn=i.cpus=K;t.Promise=Nt,t.Transfer=Pr,t.cpus=jn,t.default=i,t.isMainThread=Nn,t.platform=zn,t.pool=ve,t.worker=We,t.workerEmit=Nr,Object.defineProperty(t,"__esModule",{value:!0})})})(_a,_a.exports);var Cd=_a.exports,mt=class{constructor(r,e){l(this,"_value");l(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},Xl=class extends mt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Ad=class extends mt{constructor(){super(...arguments);l(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Pd=class extends mt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,t=this.parent.histogram.value.filter(s=>s.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},kd=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},Od=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Ed=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Dd=kd(),lr={iron:{pixels:Ed,name:"IRON palette",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:Od,name:"JET palette",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:Dd,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Ld=class extends mt{get availablePalettes(){return lr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},xa,Td=(xa=class{},l(xa,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),xa),at,Ze=(at=class extends Td{static humanRangeDates(e,t){return e=at.inputToDate(e),t=at.inputToDate(t),e.getUTCDate()===t.getUTCDate()?at.humanDate(e):[at.humanDate(e),at.humanDate(t)].join(" - ")}static human(e){return`${at.humanDate(e)} ${at.humanTime(e,!0)} `}},l(at,"isoDate",e=>(e=at.inputToDate(e),va(e,{representation:"date"}))),l(at,"isoTime",e=>(e=at.inputToDate(e),va(e,{representation:"time"}))),l(at,"isoComplete",e=>(e=at.inputToDate(e),va(e))),l(at,"humanTime",(e,t=!1)=>(e=at.inputToDate(e),Qe(e,t?"HH:mm:ss":"HH:mm"))),l(at,"humanDate",(e,t=!1)=>(e=at.inputToDate(e),Qe(e,t?"d. M.":"d. M. yyyy"))),at),Q=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},mn=class{constructor(r){l(this,"_layers",[]);l(this,"onLayers",new Q);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},tt=class{constructor(r,e,t){l(this,"onSerializableChange",new Q);l(this,"_selected",!1);l(this,"onSelected",new Q);l(this,"onDeselected",new Q);l(this,"onValues",new Q);l(this,"onMoveOrResize",new Q);l(this,"layerRoot");l(this,"points",new Map);l(this,"_top");l(this,"_left");l(this,"_width");l(this,"_height");l(this,"_min");l(this,"_max");l(this,"_avg");l(this,"_color","black");l(this,"onSetColor",new Q);l(this,"_initialColor");l(this,"onSetInitialColor",new Q);l(this,"activeColor","yellow");l(this,"inactiveColor","black");l(this,"ready",!1);l(this,"nameInitial");l(this,"_name");l(this,"onSetName",new Q);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{console.log("Serializovatelná změna"),this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},Kl=class{constructor(r,e,t,i,s,n,a){l(this,"pxX");l(this,"_x");l(this,"onX",new Q);l(this,"pxY");l(this,"_y");l(this,"onY",new Q);l(this,"_color");l(this,"_active",!1);l(this,"_isHover",!1);l(this,"_isDragging",!1);l(this,"container");l(this,"innerElement");l(this,"onMouseEnter",new Q);l(this,"onMouseLeave",new Q);l(this,"onActivate",new Q);l(this,"onDeactivate",new Q);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},Rt,Rd=(Rt=class extends Kl{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);l(this,"axisX");l(this,"axisY");l(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(Rt.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=Rt.sizePx(-.5),t.style.left=Rt.sizePx(-.5),t.style.width=Rt.sizePx(),t.style.height=Rt.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=Rt.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=Rt.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${Rt.sizePx(.5)} - 3px )`,t.style.left=`calc( ${Rt.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},l(Rt,"size",20),Rt),or=class Zl extends tt{constructor(t,i,s,n,a){super(t,s,i);l(this,"center");l(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new Rd("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new Ql(this)),this._graph}static addAtPoint(t,i,s,n,a){return new Zl(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(m=>m.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=tt.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=tt.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const h=tt.serializedGetNumericalValueByKey(i,"top"),u=tt.serializedGetNumericalValueByKey(i,"left");h!==void 0&&(this.setTop(h),s=!0),u!==void 0&&(this.setLeft(u),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},Ql=class{constructor(r){l(this,"_min",!1);l(this,"_max",!1);l(this,"_avg",!1);l(this,"_value");l(this,"onGraphActivation",new Q);l(this,"onGraphData",new Q);l(this,"onAnalysisSelection",new Q);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof or)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof or)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof or?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof or)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},Md=class extends Kl{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Ud=class extends Md{constructor(){super(...arguments);l(this,"_pairX");l(this,"_pairY");l(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},mr=class extends tt{constructor(e,t,i,s,n,a,o){super(e,i,t);l(this,"wPx",(100/this.file.width/2).toString()+"%");l(this,"hPx",(100/this.file.height/2).toString()+"%");l(this,"tl");l(this,"tr");l(this,"bl");l(this,"br");l(this,"area");l(this,"_graph");let h=n,u=s;a!==void 0&&o!==void 0&&(h=n+a,u=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,h,3,1),this.bl=this.addPoint("bl",u,n,1,3),this.br=this.addPoint("br",u,h,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new Ql(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),u=Math.max(t,i)-o,m=a-n;return{top:n,left:o,width:u,height:m}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Ud(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(x=>x.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=tt.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=tt.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=tt.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const h=tt.serializedGetStringValueByKey(t,"color");h===void 0||h!==this.initialColor&&this.setInitialColor(h);const u=tt.serializedGetNumericalValueByKey(t,"top"),m=tt.serializedGetNumericalValueByKey(t,"left"),f=tt.serializedGetNumericalValueByKey(t,"width"),y=tt.serializedGetNumericalValueByKey(t,"height");u!==void 0&&u!==this.top&&(this.setTop(u),i=!0),m!==void 0&&m!==this.left&&(this.setLeft(m),i=!0),f!==void 0&&f!==this.width&&(this.setWidth(f),i=!0),y!==void 0&&y!==this.height&&(this.setHeight(y),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},Jl=class{constructor(r,e,t,i,s){l(this,"pxX");l(this,"pxY");l(this,"element");l(this,"_top");l(this,"_width");l(this,"_left");l(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},sl=class extends Jl{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},nl=class Vs extends mr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Vs(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:h,left:u,width:m,height:f}=Vs.calculateDimensionsFromCorners(s,n,a,o),y=new Vs(e,t,i,h,u,m,f);return y.recalculateValues(),y}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new sl(this,e,t,e+i,t+s):new sl(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,h=0;for(let u=i;u<s;u++){const m=this.file.width*u;for(let f=e;f<=t;f++)if(this.isWithin(f,u)){const y=this.file.pixels[m+f];y<n&&(n=y),y>a&&(a=y),h+=y,o++}}return{min:n,max:a,avg:h/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},al=class extends Jl{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},ol=class Ys extends mr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new Ys(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:h,left:u,width:m,height:f}=Ys.calculateDimensionsFromCorners(s,n,a,o),y=new Ys(e,t,i,h,u,m,f);return y.recalculateValues(),y}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new al(this,e,t,e+i,t+s):new al(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,h=0;for(let u=i;u<s;u++){const m=this.file.width*u;for(let f=e;f<=t;f++){const y=this.file.pixels[m+f];y<n&&(n=y),y>a&&(a=y),h+=y,o++}}return{min:n,max:a,avg:h/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},qs=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],Id=class extends Map{constructor(e){super();l(this,"layers",[]);l(this,"onAdd",new Q);l(this,"onRemove",new Q);l(this,"onSelectionChange",new Q);l(this,"colors",qs);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=ol.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const h=ol.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return h.ready=!0,this.addAnalysis(h,o),h}createEllipsisFrom(e,t){const i=nl.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const h=nl.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return h.ready=!0,this.addAnalysis(h,o),h}createPointAt(e,t){const i=or.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=or.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=qs.filter(i=>!e.includes(i));return t.length>0?t[0]:qs[0]}getNextName(e){return`${e} ${this.all.length}`}},Fd=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},zd=class extends mt{constructor(){super(...arguments);l(this,"layers",new Id(this));l(this,"points",new Fd(this));l(this,"listener");l(this,"bindedPointerMoveListener");l(this,"bindedPointerDownListener");l(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,h=this.parent.height,m=e.layerY/o;return{top:Math.round(h*m),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Nd=class{constructor(r){l(this,"listenerKey","___listen-to-graphs___");l(this,"_graphs",new Map);l(this,"_output",{values:[[]],colors:[]});l(this,"onOutput",new Q);l(this,"onAddGraph",new Q);l(this,"onRemoveGraph",new Q);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:Qe(a,"m:ss:SSS")+" ",[e[1].key]:Qe(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},jd=class extends mt{constructor(e){super(e,{values:[[]],colors:[]});l(this,"_hasActiveGraphs",!1);l(this,"onGraphsPresence",new Q);l(this,"listeners",new Nd(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=ms({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=Vl(i)(e);Yl(i)(s)}},Wd=class{constructor(r,e){l(this,"_analysis");l(this,"_serialized");l(this,"onSerialize",new Q);l(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},Si,eh=(Si=class extends mt{constructor(){super(...arguments);l(this,"onSlotInit",new Q);l(this,"onSlotRemove",new Q);l(this,"onSlot1Assignement",new Q);l(this,"onSlot2Assignement",new Q);l(this,"onSlot3Assignement",new Q);l(this,"onSlot4Assignement",new Q);l(this,"onSlot5Assignement",new Q);l(this,"onSlot6Assignement",new Q);l(this,"onSlot7Assignement",new Q);l(this,"onSlot1Serialize",new Q);l(this,"onSlot2Serialize",new Q);l(this,"onSlot3Serialize",new Q);l(this,"onSlot4Serialize",new Q);l(this,"onSlot5Serialize",new Q);l(this,"onSlot6Serialize",new Q);l(this,"onSlot7Serialize",new Q)}getNextFreeSlotNumber(){for(let t=1;t<=Si.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new Wd(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),h=this.getOnSerializeManager(t);return o&&o.call(a),h&&h.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(C=>C.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=tt.serializedGetNumericalValueByKey(s,"top"),h=tt.serializedGetNumericalValueByKey(s,"left");const u=tt.serializedGetStringValueByKey(s,"color");let m=tt.serializedGetNumericalValueByKey(s,"width"),f=tt.serializedGetNumericalValueByKey(s,"height");const y=tt.serializedSegmentsHasExact(s,"avg"),x=tt.serializedSegmentsHasExact(s,"min"),_=tt.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),h!==void 0&&(h<0&&(h=0),h>this.parent.width-1&&(h=this.parent.width-1));let $;if(a==="point"){if(o===void 0||h===void 0)return;$=this.parent.analysis.layers.placePointAt(n,o,h,u,!1)}else{if(o===void 0||h===void 0||m===void 0||f===void 0)return;m<0&&(m=0),m+h>this.parent.width-1&&(m=this.parent.width-h-1),f<0&&(f=0),f+o>this.parent.height-1&&(f=this.parent.height-o-1),$=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,h,m+h,f+o,u,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,h,m+h,f+o,u,!1)}if($!==void 0){if($ instanceof or?y&&$.graph.setAvgActivation(!0):$ instanceof mr&&(y&&$.graph.setAvgActivation(!0),x&&$.graph.setMinActivation(!0),_&&$.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const C=this.getNextFreeSlotNumber();C!==void 0&&this.assignSlot(C,$)}else i!==void 0&&this.assignSlot(i,$);return $}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},l(Si,"MAX_SLOTS",7),Si),Bd=class extends mt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},Hd=class{constructor(r,e){l(this,"_currentFrame");l(this,"bufferSize",4);l(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const h=s[o];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},th={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Gd=class extends mt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));l(this,"_playbackSpeed",1);l(this,"startTimestampRelative");l(this,"endTimestampRelative");l(this,"stepsByAbsolute",new Map);l(this,"stepsByRelative",new Map);l(this,"stepsByIndex",new Map);l(this,"relativeSteps",[]);l(this,"_currentStep");l(this,"isSequence");l(this,"_isPlaying",!1);l(this,"timer");l(this,"buffer");l(this,"callbackdPlaybackSpeed",new Q);l(this,"callbacksPlay",new Q);l(this,"callbacksPause",new Q);l(this,"callbacksStop",new Q);l(this,"callbacksEnd",new Q);l(this,"callbacksChangeFrame",new Q);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Hd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return th[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),Qe(t,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(h=>h.relative<=e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(h=>h.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Vd=class extends mt{constructor(){super(...arguments);l(this,"stream");l(this,"recorder");l(this,"mimeType");l(this,"_isRecording",!1);l(this,"_mayStop",!0);l(this,"recordedChunks",[]);l(this,"callbackMayStop",new Q)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},vn=class{},pt,Yd=(pt=class{constructor(e,t){l(this,"_built",!1);l(this,"_hydrated",!1);l(this,"_hover",!1);l(this,"_canvasLayer");l(this,"_visibleLayer");l(this,"_cursorLayer");l(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(pt.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(pt.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(pt.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(pt.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(pt.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(pt.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(pt.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(pt.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},l(pt,"CLASS_BASE","thermalImageRoot"),l(pt,"CLASS_BUILT",pt.CLASS_BASE+"__built"),l(pt,"CLASS_HYDRATED",pt.CLASS_BASE+"__mounted"),l(pt,"CLASS_HOVER",pt.CLASS_BASE+"__hover"),pt),qd=class{constructor(r){l(this,"_current");l(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new Q),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},Xd=class extends vn{constructor(e,t,i,s,n){super();l(this,"id");l(this,"horizontalLimit");l(this,"verticalLimit");l(this,"group");l(this,"thermalUrl");l(this,"visibleUrl");l(this,"fileName");l(this,"signature","unknown");l(this,"version",-1);l(this,"streamCount",-1);l(this,"fileDataType",-1);l(this,"unit",-1);l(this,"meta");l(this,"_dom");l(this,"timeline");l(this,"cursorValue");l(this,"analysis");l(this,"recording");l(this,"_mounted",!1);l(this,"_built",!1);l(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new qd(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new Yd(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}draw(){this.dom&&this.dom.canvasLayer&&this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const u=(i-s)/(n-s),m=Math.round(255*u);return this.group.registry.palette.currentPalette.pixels[m]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&(this.dom.canvasLayer.opacity=e)}},yn=class{constructor(r){l(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},vr=class $a{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=$a.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=$a.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Kd=class extends yn{constructor(e,t){super(e);l(this,"container");l(this,"image");this._url=t,this.container=vr.createVisibleLayer(),this._url&&(this.image=vr.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Zd=class extends yn{constructor(e){super(e);l(this,"container");l(this,"canvas");l(this,"context");l(this,"_opacity",1);this.container=vr.createCanvasContainer(),this.canvas=vr.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=await this.pool.exec(async(i,s,n,a,o,h)=>{const m=new OffscreenCanvas(n,a).getContext("2d"),f=s-i;for(let _=0;_<=n;_++)for(let $=0;$<=a;$++){const C=_+$*n;let B=o[C];B<i&&(B=i),B>s&&(B=s);const I=(B-i)/f,J=Math.round(255*I),W=h[J];m.fillStyle=W,m.fillRect(_,$,1,1)}const y=m.getImageData(0,0,n,a);return await createImageBitmap(y)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(t,0,0)}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return;console.error(t)}}}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Qd=class extends yn{constructor(e){super(e);l(this,"layerRoot");l(this,"center");l(this,"axisX");l(this,"axisY");l(this,"label");l(this,"_show",!1);l(this,"_hover",!1);this.layerRoot=vr.createCursorLayerRoot(),this.center=vr.createCursorLayerCenter(),this.axisX=vr.createCursorLayerX(),this.axisY=vr.createCursorLayerY(),this.label=vr.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Jd=class extends yn{constructor(e){super(e);l(this,"container");this.container=vr.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},rh=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},qr=class ih extends rh{constructor(t,i,s,n,a,o){super(n,a);l(this,"id",Math.random());l(this,"baseInfoCache");l(this,"fileName");l(this,"originalBuffer");l(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return new ih(this.service,this.buffer,this.parser,this.thermalUrl,this.visibleUrl,!0)}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=[...t.registry.manager.filters.getActiveFilters(),...t.registry.filters.getActiveFilters(),...t.filters.getActiveFilters()];await i.applyFilters(s);const n=await i.baseInfo(),a=await i.frameData(0),o=bn.fromService(t,i,n,a);return t.files.addFile(o),o}},ct,sh=(ct=class{constructor(){l(this,"wrapper");l(this,"container");l(this,"_exporting",!1);l(this,"onExportingStatusChange",new Q)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=ct.FONT_SIZE_NORMAL,s="normal",n=ct.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=ct.FONT_SIZE_NORMAL,i.style.fontFamily=ct.FONT_FAMILY,i.style.color=ct.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){Sd.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,h,u){const m=e.clientWidth,f=60,x=m/(f+40),_=document.createElement("div");_.style.width="100%",_.style.position="relative",_.style.paddingLeft=f/2+"px",_.style.paddingRight=f/2+"px",_.style.boxSizing="border-box";const $=document.createElement("div");$.style.width="100%",$.style.position="relative",$.style.backgroundColor=o,$.style.height="30px";const C=i-t,B=s-t,z=n-t,I=B/C*100,J=z/C*100,W=document.createElement("div");W.style.position="absolute",W.style.backgroundImage=a,W.style.height="100%",W.style.top="0px",W.style.left=I+"%",W.style.width=J-I+"%",$.appendChild(W),_.appendChild($);const se=document.createElement("div");se.style.width="100%",se.style.height="40px",se.style.position="relative";const w=(k,N=!1,L,T)=>{const M=k/C*100,Z=document.createElement("div");Z.style.position="absolute",Z.style.top="0px",Z.style.left=`calc( ${M}% - ${f/2}px )`,Z.style.width=f+"px",Z.style.textAlign="center",Z.style.lineHeight="0px";const le=document.createElement("div"),ae=document.createElement("div"),me=document.createElement("div"),ze=7,Re=ze+"px";le.innerHTML=(t+k).toFixed(2)+" °C",le.style.display="inline-block",le.style.fontSize=ct.FONT_SIZE_SMALL,le.style.lineHeight="1em",le.style.padding="3px",le.style.position="relative",ae.style.width="100%",ae.style.height=Re,ae.style.textAlign="center",ae.style.position="relative",ae.style.lineHeight="0px",me.style.content="",me.style.display="inline-block",N?(me.style.width=ze*2+"px",me.style.height=ze*2+"px",me.style.rotate="45deg",me.style.backgroundColor=T,le.style.backgroundColor=T,le.style.zIndex="99",le.style.color=L):(me.style.width="1px",me.style.height=Re,me.style.backgroundColor=L),ae.appendChild(me),Z.appendChild(ae),Z.appendChild(le),se.appendChild(Z)};if(u){const k=document.createElement("div");k.style.position="absolute",k.style.border=`2px solid ${h}`,k.style.height="100%",k.style.boxSizing="border-box";const N=(u.from-t)/C*100,L=(u.to-t)/C*100-N;k.style.left=N+"%",k.style.width=L+"%",$.appendChild(k),w(u.from-t,!0,"white",o),w(u.to-t,!0,"white",o)}const P=C/x;let O=0;for(;O<=C;)w(O,!1,h,"transparent"),O=O+P;return w(B,!0,"white",h),w(z,!0,"white",h),_.appendChild(se),_}},l(ct,"FONT_SIZE_NORMAL","16px"),l(ct,"FONT_SIZE_SMALL","12px"),l(ct,"COLOR_BASE","black"),l(ct,"COLOR_GRAY","gray"),l(ct,"COLOR_LIGHT","lightgray"),l(ct,"WIDTH","1600px"),l(ct,"FONT_FAMILY","sans-serif"),l(ct,"GAP_BASE","10px"),l(ct,"GAP_SMALL","5px"),l(ct,"DEBUG",!1),ct),St,ep=(St=class extends sh{constructor(t){super();l(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...St.DEFAULT_PARAMS,...t,fileName:i}}onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i);s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),n.service.loadFile(this.file.thermalUrl).then(async o=>{if(o instanceof qr&&(this.localInstance=await o.createInstance(a),this.container)){const h=this.file.group.registry.minmax.value.min,u=this.file.group.registry.minmax.value.max,m=h!==this.file.meta.current.min||u!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;if(this.container.appendChild(this.buildHorizontalScale(this.container,h,u,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",m)),this.localInstance.mountToDom(this.container),this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const f=document.createElement("table");f.style.width="100%",f.style.borderCollapse="collapse";const y=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(x=>{const _=this.createElementWithText("th",x,St.FONT_SIZE_SMALL,void 0,St.COLOR_GRAY);_.style.padding=St.GAP_SMALL+"px",_.style.textAlign="left",y.appendChild(_)}),f.appendChild(y),this.container.appendChild(f),this.file.slots.forEveryExistingSlot((x,_)=>{var C;const $=(C=this.localInstance)==null?void 0:C.slots.createFromSerialized(x.serialized,_);if($){const B=document.createElement("tr"),z=this.createElementWithText("td",x.analysis.name,St.FONT_SIZE_SMALL,void 0,x.analysis.initialColor);z.style.borderTop=`1px solid ${St.COLOR_LIGHT}`,z.style.padding=`${St.GAP_SMALL}px 0px ${St.GAP_SMALL} 0px`,B.appendChild(z);const I=(J,W)=>{const se=this.createElementWithText("td",W?W.toFixed(3)+" °C":"",St.FONT_SIZE_SMALL,void 0);se.style.borderTop=`1px solid ${St.COLOR_LIGHT}`,se.style.paddingTop=`${St.GAP_SMALL}px`,se.style.paddingBottom=`${St.GAP_SMALL}px`,B.appendChild(se)};x.analysis instanceof mr?(I(x.analysis.initialColor,$.avg),I(x.analysis.initialColor,$.min),I(x.analysis.initialColor,$.max)):x.analysis instanceof or&&(I(x.analysis.initialColor,$.avg),I(x.analysis.initialColor),I(x.analysis.initialColor)),f.appendChild(B)}})}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},1e3)}})}},l(St,"DEFAULT_PARAMS",{fileName:"sth",width:1200,showAnalysis:!0,backgroundColor:"white"}),St),bn=class nh extends Xd{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);l(this,"slots");l(this,"_export");l(this,"filters",new mn(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new ep(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Zd(this),visibleLayer:new Kd(this,this.visibleUrl),cursorLayer:new Qd(this),listenerLayer:new Jd(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,h=Math.round(s.offsetX*o),u=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:h,y:u})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new Bd(this,void 0),this.timeline=new Gd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Vd(this,!1),this.analysis=new zd(this,[]),this.analysisData=new jd(this),this.slots=new eh(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}this.analysis.value.forEach(s=>s.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new nh(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),h=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,h),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=this.getAllApplicableFilters();this.reader.applyFilters(t);const i=await this.reader.baseInfo(),s=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const n=this.root;this.unmountFromDom(),this.mountToDom(n)}this.meta.set(i),this.setPixels(s.pixels)}},tp=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof mr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof mr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof mr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof mr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:Ze.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof mr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=ms({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t});console.log(i);const n=Vl(s)(i);Yl(s)(n)}},je,rp=(je=class extends sh{constructor(t){super();l(this,"localGroup");l(this,"header");l(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=je.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const h=this.createElementWithText("div",this.group.description,je.FONT_SIZE_SMALL,"normal",je.COLOR_BASE);h.style.paddingTop=je.GAP_SMALL,t.appendChild(h)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,je.FONT_SIZE_SMALL,void 0,je.COLOR_GRAY);s.style.paddingTop=je.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${Ze.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,je.FONT_SIZE_SMALL,void 0,je.COLOR_GRAY);return n.style.paddingTop=je.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=je.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${Ze.human(t.timeline.currentStep.absolute)}`,je.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.list.appendChild(n),t.mountToDom(a),t.draw(),s)){const h=this.group.files.value[0];if(h&&h.analysis.value.length>0){const u=document.createElement("table");u.style.width="100%",u.style.borderCollapse="collapse";const m=document.createElement("tr");["","AVG","MIN","MAX"].forEach(f=>{const y=this.createElementWithText("th",f,je.FONT_SIZE_SMALL,void 0,je.COLOR_GRAY);y.style.padding=je.GAP_SMALL+"px",y.style.textAlign="left",m.appendChild(y)}),u.appendChild(m),a.appendChild(u),h.slots.forEveryExistingSlot((f,y)=>{const x=t.slots.createFromSerialized(f.serialized,y);if(x){const _=document.createElement("tr"),$=this.createElementWithText("td",f.analysis.name,je.FONT_SIZE_SMALL,void 0,f.analysis.initialColor);$.style.borderTop=`1px solid ${je.COLOR_LIGHT}`,$.style.padding=`${je.GAP_SMALL}px 0px ${je.GAP_SMALL} 0px`,_.appendChild($);const C=(B,z)=>{const I=this.createElementWithText("td",z?z.toFixed(3)+" °C":"",je.FONT_SIZE_SMALL,void 0);I.style.borderTop=`1px solid ${je.COLOR_LIGHT}`,I.style.paddingTop=`${je.GAP_SMALL}px`,I.style.paddingBottom=`${je.GAP_SMALL}px`,_.appendChild(I)};f.analysis instanceof mr?(C(f.analysis.initialColor,x.avg),C(f.analysis.initialColor,x.min),C(f.analysis.initialColor,x.max)):f.analysis instanceof or&&(C(f.analysis.initialColor,x.avg),C(f.analysis.initialColor),C(f.analysis.initialColor)),u.appendChild(_)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var u;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(u=this.list)==null||u.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(m=>m.thermalUrl);let h;o.forEach(m=>{h=n.batch.request(m,void 0,a,async()=>{})}),h.onResolve.set("temporary export listener",m=>{const f=100/t.columns;m.forEach(y=>{y instanceof bn&&this.buildInstance(y,f,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...je.DEFAULT_PROPS,fileName:i}:{...je.DEFAULT_PROPS,...t,fileName:i}}},l(je,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),je),Vr,ip=(Vr=class extends mt{constructor(){super(...arguments);l(this,"_currentPointer");l(this,"_csv");l(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){if(i===1)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(Vr.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(a===void 0&&n){const h=o.slots.createFromSerialized(n,i);h==null||h.setSelected()}else a!==void 0&&n?a.recieveSerialized(n):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(Vr.LISTENER_KEY),n.delete(Vr.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[h,u]of s)if(u===void 0)n.slots.removeSlotAndAnalysis(h);else{const m=(a=n.slots.getSlot(h))==null?void 0:a.serialized,f=u.serialized;if(m!==f)if(n.slots.hasSlot(h))(o=n.slots.getSlot(h))==null||o.recieveSerialized(f);else{const y=n.slots.createFromSerialized(f,h);y==null||y.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new tp(this)),this._csv}get png(){return this._png||(this._png=new rp(this)),this._png}},l(Vr,"LISTENER_KEY","__analysis__sync"),Vr),sp=class extends mt{constructor(){super(...arguments);l(this,"_map",new Map)}get map(){return this._map}validate(e){return e}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof bn?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},np=class extends Xl{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},wn=class{constructor(r){l(this,"active",!1);this.group=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},ah=class extends wn{constructor(){super(...arguments);l(this,"key","inspect");l(this,"name","Inspect temperatures");l(this,"description","Use mouse to inspect temperature values.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);l(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Na=class extends wn{},ap=class extends Na{constructor(){super(...arguments);l(this,"key","add-ellipsis");l(this,"name","Add an elyptical analysis");l(this,"description","Click and drag on the thermogram to add an elyptical analysis.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);l(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=eh.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},op=class extends Na{constructor(){super(...arguments);l(this,"key","add-point");l(this,"name","Add a point analysis");l(this,"description","Click on the thermogram to add a point analysis.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);l(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},lp=class extends Na{constructor(){super(...arguments);l(this,"key","add-rect");l(this,"name","Add a rectangular analysis");l(this,"description","Click and drag on the thermogram to add a rectangular analysis.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);l(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},hp=class extends wn{constructor(){super(...arguments);l(this,"key","edit");l(this,"name","Edit analysis");l(this,"description","Drag corners of any selected analysis.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const h=o.selected?"span":"s";return`<${h} style="color: ${o.initialColor};">
                    ${o.name}
                </${h}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},cp=[ah,op,lp,ap,hp],up=r=>{const e=cp.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},dp=class extends mt{constructor(e,t){super(e,t);l(this,"_tools",up(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof wn?this.value=e:this.value=this.tools[e]}},pp=class extends vn{constructor(e,t,i,s){super();l(this,"hash",Math.random());l(this,"minmax",new np(this,void 0));l(this,"tool",new dp(this,new ah(this)));l(this,"files",new sp(this,[]));l(this,"cursorPosition",new Ad(this,void 0));l(this,"analysisSync",new ip(this,!0));l(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});l(this,"filters",new mn(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}getInstances(){return this.files.value}},di=class oh extends rh{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new oh(e.url,e.code,e.message)}},lh=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},fp=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(O,k)=>{const N=O.getBigInt64(k,!0),L=62135596800000n,T=10000n,M=24n*60n*60n*1000n*T,Z=0x4000000000000000n,le=0x8000000000000000n;let me=N&0x3fffffffffffffffn;N&le&&(me>Z-M&&(me-=Z),me<0&&(me+=M));const Re=me/T-L;return Number(Re)},a=n(e,5),o=e.getUint8(15);let h=2;o===1&&(h=4);const u=57,m=t*i*h,f=u+m,y=r.slice(25),x=y.byteLength/f,_=O=>{const k=O*f,N=k+f,L=y.slice(k,N),T=new DataView(L),M=T.getFloat32(8,!0),Z=T.getFloat32(12,!0),le=n(T,0),ae=T.getFloat32(24,!0),me=T.getFloat32(28,!0);return{timestamp:le,min:M,max:Z,emissivity:ae,reflectedKelvins:me}},$=[];for(let O=0;O<x;O++){const k=_(O);$.push(k)}const C={emissivity:0,reflectedKelvins:0};let B=1/0,z=-1/0;const I=[];$.forEach(O=>{C.emissivity=C.emissivity+O.emissivity,C.reflectedKelvins=C.reflectedKelvins+O.reflectedKelvins,O.min<B&&(B=O.min),O.max>z&&(z=O.max),I.push(O.timestamp)});const J=I[0],W=[];I.forEach((O,k)=>{const N=I[k+1];let L=0;N===void 0&&(L=0),L=N-O;const T=O-J;W.push({absolute:O,relative:T,offset:isNaN(L)?0:L,index:k})});const se=$[$.length-1].timestamp-$[0].timestamp,w=se/x,P=1e3/w;return{width:t,height:i,timestamp:a,bytesize:s,frameCount:x,duration:se,frameInterval:w,fps:P,timeline:W,min:B,max:z,averageEmissivity:C.emissivity/$.length,averageReflectedKelvins:C.reflectedKelvins/$.length}},gp=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,h=s*n*a,u=o+h,m=r.slice(25),f=e*u,y=f+u;return{array:m.slice(f,y),dataType:i}},mp=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,h=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&h&&(m>o-a&&(m-=o),m<0&&(m+=a));const y=m/n-s,x=Number(y),_=t.getFloat32(8,!0),$=t.getFloat32(12,!0),C=t.getFloat32(24,!0),B=t.getFloat32(28,!0),z=r.slice(57);let I=[];if(e===0){const J=new Uint16Array(z),W=Math.abs(_-$),se=65535;J.forEach(w=>{const P=w/se;I.push(_+W*P)})}else e===1&&(I=Array.from(new Float32Array(z)));return{timestamp:x,min:_,max:$,emissivity:C,reflectedKelvins:B,pixels:I}},vp=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(B,z)=>{const I=B.getBigInt64(z,!0),J=62135596800000n,W=10000n,se=24n*60n*60n*1000n*W,w=0x4000000000000000n,P=0x8000000000000000n;let k=I&0x3fffffffffffffffn;I&P&&(k>w-se&&(k-=w),k<0&&(k+=se));const L=k/W-J;return Number(L)},o=i.getUint8(15);let h=2;o===1&&(h=4);const u=57,m=s*n*h,f=u+m,y=r.slice(25),x=y.byteLength/f,_={},$=B=>{const z=B*f,I=z+f,J=y.slice(z,I),W=new DataView(J),se=a(W,0),w=W.getFloat32(8,!0),O=W.getFloat32(12,!0)-w,N=57+t*h*s+e*h;let L=0;if(o===1)L=W.getFloat32(N,!0);else if(o===0){const Z=W.getInt16(N,!0)/65535;L=w+O*Z}return{timestamp:se,temperature:L}};let C=0;for(let B=0;B<x;B++){const z=$(B);C===0&&(C=z.timestamp),_[z.timestamp-C]=z.temperature}return _},yp=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),h=(I,J)=>{const W=I.getBigInt64(J,!0),se=62135596800000n,w=10000n,P=24n*60n*60n*1000n*w,O=0x4000000000000000n,k=0x8000000000000000n;let L=W&0x3fffffffffffffffn;W&k&&(L>O-P&&(L-=O),L<0&&(L+=P));const M=L/w-se;return Number(M)},u=n.getUint8(15);let m=2;u===1&&(m=4);const f=57,y=a*o*m,x=f+y,_=r.slice(25),$=_.byteLength/x,C={},B=I=>{const J=I*x,W=J+x,se=_.slice(J,W),w=new DataView(se),P=h(w,0),O=w.getFloat32(8,!0),N=w.getFloat32(12,!0)-O,L=57,T=e,M=e+i,Z=t,le=t+s;let ae=1/0,me=-1/0,ze=0,Re=0;for(let ut=Z;ut<=le;ut++){const et=ut*a;for(let ot=T;ot<=M;ot++){const K=L+(et+ot)*m;let re=NaN;if(u===1)re=w.getFloat32(K,!0);else{const We=w.getInt16(K,!0)/65535;re=O+N*We}re<ae&&(ae=re),re>me&&(me=re),Re+=re,ze++}}const rt={min:ae,max:me,avg:Re/ze,count:ze};return{timestamp:P,result:rt}};let z=0;for(let I=0;I<$;I++){const J=B(I);z===0&&(z=J.timestamp),C[J.timestamp-z]=J.result}return C},bp=async r=>{let e=[];const t=async C=>{const B=new DataView(C.slice(0,25)),z=B.getUint8(15),I=B.getUint16(17,!0),J=B.getUint16(19,!0),W=z===1?4:2,se=57,w=I*J*W,P=se+w,O=C.slice(25),k=O.byteLength/P;let N=[];for(let L=0;L<k;L++){const M=L*P+57,Z=M+w,le=O.slice(M,Z);z===0||z===1&&(N=N.concat(Array.from(new Float32Array(le))))}return N};(await Promise.all(r.map(C=>t(C)))).forEach(C=>{e=e.concat(C)}),e.sort((C,B)=>C-B);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,h=a/o,u=[];let m=[...e];for(let C=0;C<o;C++){const B=s+h*C,z=B+h,I=m.findIndex(P=>P>z),W=m.slice(0,I-1).length,se=W/e.length*100,w={from:B,to:z,count:W,percentage:se};u.push(w),m=m.slice(I)}const f=[...u].sort((C,B)=>C.percentage-B.percentage),y=f[0].percentage,x=f[f.length-1].percentage,_=Math.abs(y-x);return u.map(C=>({...C,height:C.percentage/_*100}))},wp=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},xp=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),h=(J,W)=>{const se=J.getBigInt64(W,!0),w=62135596800000n,P=10000n,O=24n*60n*60n*1000n*P,k=0x4000000000000000n,N=0x8000000000000000n;let T=se&0x3fffffffffffffffn;se&N&&(T>k-O&&(T-=k),T<0&&(T+=O));const Z=T/P-w;return Number(Z)},u=n.getUint8(15);let m=2;u===1&&(m=4);const f=57,y=a*o*m,x=f+y,_=r.slice(25),$=_.byteLength/x,C={},B=(J,W)=>{const se=e+i/2,w=t+s/2,P=(J-se)/(i/2),O=(W-w)/(s/2);return P*P+O*O<=1},z=J=>{const W=J*x,se=W+x,w=_.slice(W,se),P=new DataView(w),O=h(P,0),k=P.getFloat32(8,!0),L=P.getFloat32(12,!0)-k,T=57,M=e,Z=e+i,le=t,ae=t+s;let me=1/0,ze=-1/0,Re=0,rt=0;for(let et=le;et<=ae;et++){const ot=et*a;for(let K=M;K<=Z;K++)if(B(K,et)){const re=T+(ot+K)*m;let ve=NaN;if(u===1)ve=P.getFloat32(re,!0);else{const Pe=P.getInt16(re,!0)/65535;ve=k+L*Pe}ve<me&&(me=ve),ve>ze&&(ze=ve),rt+=ve,Re++}}const ut={min:me,max:ze,avg:rt/Re,count:Re};return{timestamp:O,result:ut}};let I=0;for(let J=0;J<$;J++){const W=z(J);I===0&&(I=W.timestamp),C[W.timestamp-I]=W.result}return C},Sp=[{extension:"lrc",minme:"application/octet-stream"}],_p={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Sp,is:wp,baseInfo:fp,getFrameSubset:gp,frameData:mp,registryHistogram:bp,pointAnalysisData:vp,rectAnalysisData:yp,ellipsisAnalysisData:xp},hh=Object.freeze(_p),$p={LrcParser:hh},ch=Object.values($p),uh=(r,e)=>{const t=ch.find(i=>i.is(r,e));if(t===void 0)throw new lh(2,e,`No parser found for '${e}'.`);return t},dh=ch.map(r=>r.extensions),Cp=dh.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Ap=class ph{constructor(e,t,i){l(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new ph(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new di(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=uh(i,this.thermalUrl);return this.pocessTheService(new qr(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof lh)return this.pocessTheService(di.fromError(s));throw s}}pocessTheService(e){return e}},Pp=class fh{constructor(e,t){l(this,"_hover",!1);l(this,"onMouseEnter",new Q);l(this,"onMouseLeave",new Q);l(this,"onDrop",new Q);l(this,"onProcessingEnd",new Q);l(this,"input");l(this,"hydrated",!1);l(this,"bindedEnterListener");l(this,"bindedLeaveListener");l(this,"bindedDropListener");l(this,"bindedInputChangeListener");l(this,"bindedDragoverListener");l(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new fh(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Cp,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},kp=class{constructor(r){l(this,"requestsByUrl",new Map);l(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new ja(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=uh(e,r.name);return new qr(this,e,t,r.name)}catch(e){return new di(r.name,3,e.message)}}handleDropzone(r){return Pp.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=Ap.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},Op=class extends mt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},Ep=class extends mt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},ll=class Ca{constructor(e,t){l(this,"_loading",!1);l(this,"onResolve",new Q);l(this,"timeout");l(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Ca(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Ca(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async h=>({result:await this.loader.registry.service.loadFile(h.thermalUrl,h.visibleUrl),callback:h.callback,group:h.group}))),a=await Promise.all(n.map(async h=>({result:h.result instanceof qr?await h.result.createInstance(h.group):await h.result,callback:h.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async h=>(await h.callback(h.result),h.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},Dp=class{constructor(r){l(this,"onBatchComplete",new Q);l(this,"set",new Set);this.registry=r}get size(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=ll.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=ll.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.size===0&&this.registry.loading.markAsLoaded()}},Lp=class extends mt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},Tp=class extends mt{constructor(){super(...arguments);l(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new pp(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Rp=class extends mt{constructor(){super(...arguments);l(this,"_resolution",150);l(this,"buffer",new Map);l(this,"bufferPixelsCount",0);l(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let h=t.reduce((x,_)=>{const $=_.reduce((C,B)=>[...C,...B],[]);return[...x,...$]},[]).sort((x,_)=>x-_);const u=n/a;let m=i+u;const f=new Map;let y=0;for(;m!==!1;){const x=h.findIndex(C=>C>m),_=h.slice(0,x).length;f.set(m-u/2,_),y+=_,h=h.slice(x);const $=m+u;m=$<s?$:!1}return{result:f,resultCount:y}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(hh.registryHistogram,[t]);this.value=i}},Mp=class extends mt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},Up=class extends Xl{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Ip=class extends vn{constructor(e,t,i){super();l(this,"hash",Math.random());l(this,"groups",new Tp(this,[]));l(this,"_batch");l(this,"onProcessingStart",new Q);l(this,"onProcessingEnd",new Q);l(this,"opacity",new Lp(this,1));l(this,"minmax",new Up(this,void 0));l(this,"loading",new Mp(this,!1));l(this,"range",new Pd(this,void 0));l(this,"histogram",new Rp(this,[]));l(this,"palette");l(this,"filters",new mn(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof qr?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof qr&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}get batch(){return this._batch||(this._batch=new Dp(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},ja=class extends vn{constructor(e,t){super();l(this,"id");l(this,"service",new kp(this));l(this,"registries",{});l(this,"palette",new Ld(this,"jet"));l(this,"smooth",new Ep(this,!1));l(this,"graphSmooth",new Op(this,!1));l(this,"pool");l(this,"filters",new mn(this));this.pool=e||Cd.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Ip(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}},Fp=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,Ft=(r,e,t,i)=>{for(var s=i>1?void 0:i?zp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fp(e,t,s),s};const hl=["ready","select"],Np={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Ct=class extends _t{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new Q,this.left=0,this.top=0,this.w=0,this.h=0}render(){return v`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Yc(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(hl,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Np[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!hl.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await Ko({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(Ko).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Ct.styles=be`
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
  `;Ft([g({type:String,reflect:!0})],Ct.prototype,"type",2);Ft([g({type:Array})],Ct.prototype,"events",2);Ft([g({type:Object,hasChanged:()=>!0})],Ct.prototype,"options",2);Ft([g({type:Array})],Ct.prototype,"cols",2);Ft([g({type:Array})],Ct.prototype,"rows",2);Ft([g({type:String})],Ct.prototype,"data",2);Ft([g({type:Object})],Ct.prototype,"view",2);Ft([g({type:Array})],Ct.prototype,"selection",2);Ft([g({type:Object})],Ct.prototype,"_data",2);Ft([g({type:Number,reflect:!0})],Ct.prototype,"left",2);Ft([g({type:Number,reflect:!0})],Ct.prototype,"top",2);Ft([g({type:Number,reflect:!0})],Ct.prototype,"w",2);Ft([g({type:Number,reflect:!0})],Ct.prototype,"h",2);Ct=Ft([te("thermal-chart")],Ct);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jp=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xn=r=>(...e)=>({_$litDirective$:r,values:e});let Ba=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),es(s,e);return!0},rn=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},gh=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Hp(e)}};function Wp(r){this._$AN!==void 0?(rn(this),this._$AM=r,gh(this)):this._$AM=r}function Bp(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)es(i[n],!1),rn(i[n]);else i!=null&&(es(i,!1),rn(i));else es(this,r)}const Hp=r=>{r.type==Wa.CHILD&&(r._$AP??(r._$AP=Bp),r._$AQ??(r._$AQ=Wp))};class Gp extends Ba{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),gh(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(es(this,e),rn(this))}setValue(e){if(jp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=()=>new Vp;class Vp{}const ya=new WeakMap,Xe=xn(class extends Gp{render(r){return j}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),j}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=ya.get(e);t===void 0&&(t=new WeakMap,ya.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=ya.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Yp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,mh=(r,e,t,i)=>{for(var s=i>1?void 0:i?qp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yp(e,t,s),s};let is=class extends _t{constructor(){super(),this.dialogRef=Ge(),this.closeButtonRef=Ge(),this.invokerRef=Ge()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return v`
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
        `}};is.shadowRootOptions={..._t.shadowRootOptions,mode:"open"};is.styles=be`

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

        
    
    `;mh([g({type:String,reflect:!0})],is.prototype,"label",2);is=mh([te("thermal-dialog")],is);var Xp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,Sn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xp(e,t,s),s};let Er=class extends _t{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return v`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Er.VARIANTS=["slate","primary","foreground","background"];Er.shadowRootOptions={..._t.shadowRootOptions,mode:"open"};Er.styles=be`

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
    
    `;Sn([g({type:String,converter:{fromAttribute:r=>Er.VARIANTS.includes(r)?r:"slate",toAttribute:r=>r}})],Er.prototype,"variant",2);Sn([g({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],Er.prototype,"interactive",2);Sn([g({type:String})],Er.prototype,"size",2);Er=Sn([te("thermal-button")],Er);const Ci=Math.min,kr=Math.max,sn=Math.round,Xr=r=>({x:r,y:r}),Zp={left:"right",right:"left",bottom:"top",top:"bottom"},Qp={start:"end",end:"start"};function cl(r,e,t){return kr(r,Ci(e,t))}function vs(r,e){return typeof r=="function"?r(e):r}function Dr(r){return r.split("-")[0]}function _n(r){return r.split("-")[1]}function vh(r){return r==="x"?"y":"x"}function yh(r){return r==="y"?"height":"width"}function ys(r){return["top","bottom"].includes(Dr(r))?"y":"x"}function bh(r){return vh(ys(r))}function Jp(r,e,t){t===void 0&&(t=!1);const i=_n(r),s=bh(r),n=yh(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=nn(a)),[a,nn(a)]}function ef(r){const e=nn(r);return[Aa(r),e,Aa(e)]}function Aa(r){return r.replace(/start|end/g,e=>Qp[e])}function tf(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function rf(r,e,t,i){const s=_n(r);let n=tf(Dr(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Aa)))),n}function nn(r){return r.replace(/left|right|bottom|top/g,e=>Zp[e])}function sf(r){return{top:0,right:0,bottom:0,left:0,...r}}function wh(r){return typeof r!="number"?sf(r):{top:r,right:r,bottom:r,left:r}}function Ai(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function ul(r,e,t){let{reference:i,floating:s}=r;const n=ys(e),a=bh(e),o=yh(a),h=Dr(e),u=n==="y",m=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,y=i[o]/2-s[o]/2;let x;switch(h){case"top":x={x:m,y:i.y-s.height};break;case"bottom":x={x:m,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:f};break;case"left":x={x:i.x-s.width,y:f};break;default:x={x:i.x,y:i.y}}switch(_n(e)){case"start":x[a]-=y*(t&&u?-1:1);break;case"end":x[a]+=y*(t&&u?-1:1);break}return x}const nf=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:m,y:f}=ul(u,i,h),y=i,x={},_=0;for(let $=0;$<o.length;$++){const{name:C,fn:B}=o[$],{x:z,y:I,data:J,reset:W}=await B({x:m,y:f,initialPlacement:i,placement:y,strategy:s,middlewareData:x,rects:u,platform:a,elements:{reference:r,floating:e}});m=z??m,f=I??f,x={...x,[C]:{...x[C],...J}},W&&_<=50&&(_++,typeof W=="object"&&(W.placement&&(y=W.placement),W.rects&&(u=W.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):W.rects),{x:m,y:f}=ul(u,y,h)),$=-1)}return{x:m,y:f,placement:y,strategy:s,middlewareData:x}};async function xh(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:h}=r,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:y=!1,padding:x=0}=vs(e,r),_=wh(x),C=o[y?f==="floating"?"reference":"floating":f],B=Ai(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(C)))==null||t?C:C.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:u,rootBoundary:m,strategy:h})),z=f==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,I=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),J=await(n.isElement==null?void 0:n.isElement(I))?await(n.getScale==null?void 0:n.getScale(I))||{x:1,y:1}:{x:1,y:1},W=Ai(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:z,offsetParent:I,strategy:h}):z);return{top:(B.top-W.top+_.top)/J.y,bottom:(W.bottom-B.bottom+_.bottom)/J.y,left:(B.left-W.left+_.left)/J.x,right:(W.right-B.right+_.right)/J.x}}const af=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:h,elements:u}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:y,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:$=!0,...C}=vs(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const B=Dr(s),z=Dr(o)===o,I=await(h.isRTL==null?void 0:h.isRTL(u.floating)),J=y||(z||!$?[nn(o)]:ef(o));!y&&_!=="none"&&J.push(...rf(o,$,_,I));const W=[o,...J],se=await xh(e,C),w=[];let P=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&w.push(se[B]),f){const L=Jp(s,a,I);w.push(se[L[0]],se[L[1]])}if(P=[...P,{placement:s,overflows:w}],!w.every(L=>L<=0)){var O,k;const L=(((O=n.flip)==null?void 0:O.index)||0)+1,T=W[L];if(T)return{data:{index:L,overflows:P},reset:{placement:T}};let M=(k=P.filter(Z=>Z.overflows[0]<=0).sort((Z,le)=>Z.overflows[1]-le.overflows[1])[0])==null?void 0:k.placement;if(!M)switch(x){case"bestFit":{var N;const Z=(N=P.map(le=>[le.placement,le.overflows.filter(ae=>ae>0).reduce((ae,me)=>ae+me,0)]).sort((le,ae)=>le[1]-ae[1])[0])==null?void 0:N[0];Z&&(M=Z);break}case"initialPlacement":M=o;break}if(s!==M)return{reset:{placement:M}}}return{}}}};function Sh(r){const e=Ci(...r.map(n=>n.left)),t=Ci(...r.map(n=>n.top)),i=kr(...r.map(n=>n.right)),s=kr(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function of(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>Ai(Sh(s)))}const lf=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:h,y:u}=vs(r,e),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=of(m),y=Ai(Sh(m)),x=wh(o);function _(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&u!=null)return f.find(C=>h>C.left-x.left&&h<C.right+x.right&&u>C.top-x.top&&u<C.bottom+x.bottom)||y;if(f.length>=2){if(ys(t)==="y"){const k=f[0],N=f[f.length-1],L=Dr(t)==="top",T=k.top,M=N.bottom,Z=L?k.left:N.left,le=L?k.right:N.right,ae=le-Z,me=M-T;return{top:T,bottom:M,left:Z,right:le,width:ae,height:me,x:Z,y:T}}const C=Dr(t)==="left",B=kr(...f.map(k=>k.right)),z=Ci(...f.map(k=>k.left)),I=f.filter(k=>C?k.left===z:k.right===B),J=I[0].top,W=I[I.length-1].bottom,se=z,w=B,P=w-se,O=W-J;return{top:J,bottom:W,left:se,right:w,width:P,height:O,x:se,y:J}}return y}const $=await n.getElementRects({reference:{getBoundingClientRect:_},floating:i.floating,strategy:a});return s.reference.x!==$.reference.x||s.reference.y!==$.reference.y||s.reference.width!==$.reference.width||s.reference.height!==$.reference.height?{reset:{rects:$}}:{}}}};async function hf(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Dr(t),o=_n(t),h=ys(t)==="y",u=["left","top"].includes(a)?-1:1,m=n&&h?-1:1,f=vs(e,r);let{mainAxis:y,crossAxis:x,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return o&&typeof _=="number"&&(x=o==="end"?_*-1:_),h?{x:x*m,y:y*u}:{x:y*u,y:x*m}}const cf=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,h=await hf(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:a}}}}},uf=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:C=>{let{x:B,y:z}=C;return{x:B,y:z}}},...h}=vs(r,e),u={x:t,y:i},m=await xh(e,h),f=ys(Dr(s)),y=vh(f);let x=u[y],_=u[f];if(n){const C=y==="y"?"top":"left",B=y==="y"?"bottom":"right",z=x+m[C],I=x-m[B];x=cl(z,x,I)}if(a){const C=f==="y"?"top":"left",B=f==="y"?"bottom":"right",z=_+m[C],I=_-m[B];_=cl(z,_,I)}const $=o.fn({...e,[y]:x,[f]:_});return{...$,data:{x:$.x-t,y:$.y-i}}}}};function Fi(r){return _h(r)?(r.nodeName||"").toLowerCase():"#document"}function Bt(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function ti(r){var e;return(e=(_h(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function _h(r){return r instanceof Node||r instanceof Bt(r).Node}function yr(r){return r instanceof Element||r instanceof Bt(r).Element}function br(r){return r instanceof HTMLElement||r instanceof Bt(r).HTMLElement}function dl(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof Bt(r).ShadowRoot}function bs(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=hr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function df(r){return["table","td","th"].includes(Fi(r))}function $n(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function Ha(r){const e=Ga(),t=hr(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function pf(r){let e=Kr(r);for(;br(e)&&!Pi(e);){if($n(e))return null;if(Ha(e))return e;e=Kr(e)}return null}function Ga(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Pi(r){return["html","body","#document"].includes(Fi(r))}function hr(r){return Bt(r).getComputedStyle(r)}function Cn(r){return yr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function Kr(r){if(Fi(r)==="html")return r;const e=r.assignedSlot||r.parentNode||dl(r)&&r.host||ti(r);return dl(e)?e.host:e}function $h(r){const e=Kr(r);return Pi(e)?r.ownerDocument?r.ownerDocument.body:r.body:br(e)&&bs(e)?e:$h(e)}function Pa(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=$h(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=Bt(s);return n?e.concat(a,a.visualViewport||[],bs(s)?s:[],a.frameElement&&t?Pa(a.frameElement):[]):e.concat(s,Pa(s,[],t))}function Ch(r){const e=hr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=br(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=sn(t)!==n||sn(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function Ah(r){return yr(r)?r:r.contextElement}function xi(r){const e=Ah(r);if(!br(e))return Xr(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=Ch(e);let a=(n?sn(t.width):t.width)/i,o=(n?sn(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const ff=Xr(0);function Ph(r){const e=Bt(r);return!Ga()||!e.visualViewport?ff:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function gf(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==Bt(r)?!1:e}function ss(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=Ah(r);let a=Xr(1);e&&(i?yr(i)&&(a=xi(i)):a=xi(r));const o=gf(n,t,i)?Ph(n):Xr(0);let h=(s.left+o.x)/a.x,u=(s.top+o.y)/a.y,m=s.width/a.x,f=s.height/a.y;if(n){const y=Bt(n),x=i&&yr(i)?Bt(i):i;let _=y,$=_.frameElement;for(;$&&i&&x!==_;){const C=xi($),B=$.getBoundingClientRect(),z=hr($),I=B.left+($.clientLeft+parseFloat(z.paddingLeft))*C.x,J=B.top+($.clientTop+parseFloat(z.paddingTop))*C.y;h*=C.x,u*=C.y,m*=C.x,f*=C.y,h+=I,u+=J,_=Bt($),$=_.frameElement}}return Ai({width:m,height:f,x:h,y:u})}function mf(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=ti(i),o=e?$n(e.floating):!1;if(i===a||o&&n)return t;let h={scrollLeft:0,scrollTop:0},u=Xr(1);const m=Xr(0),f=br(i);if((f||!f&&!n)&&((Fi(i)!=="body"||bs(a))&&(h=Cn(i)),br(i))){const y=ss(i);u=xi(i),m.x=y.x+i.clientLeft,m.y=y.y+i.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-h.scrollLeft*u.x+m.x,y:t.y*u.y-h.scrollTop*u.y+m.y}}function vf(r){return Array.from(r.getClientRects())}function kh(r){return ss(ti(r)).left+Cn(r).scrollLeft}function yf(r){const e=ti(r),t=Cn(r),i=r.ownerDocument.body,s=kr(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=kr(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+kh(r);const o=-t.scrollTop;return hr(i).direction==="rtl"&&(a+=kr(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function bf(r,e){const t=Bt(r),i=ti(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,h=0;if(s){n=s.width,a=s.height;const u=Ga();(!u||u&&e==="fixed")&&(o=s.offsetLeft,h=s.offsetTop)}return{width:n,height:a,x:o,y:h}}function wf(r,e){const t=ss(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=br(r)?xi(r):Xr(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,h=s*n.x,u=i*n.y;return{width:a,height:o,x:h,y:u}}function pl(r,e,t){let i;if(e==="viewport")i=bf(r,t);else if(e==="document")i=yf(ti(r));else if(yr(e))i=wf(e,t);else{const s=Ph(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return Ai(i)}function Oh(r,e){const t=Kr(r);return t===e||!yr(t)||Pi(t)?!1:hr(t).position==="fixed"||Oh(t,e)}function xf(r,e){const t=e.get(r);if(t)return t;let i=Pa(r,[],!1).filter(o=>yr(o)&&Fi(o)!=="body"),s=null;const n=hr(r).position==="fixed";let a=n?Kr(r):r;for(;yr(a)&&!Pi(a);){const o=hr(a),h=Ha(a);!h&&o.position==="fixed"&&(s=null),(n?!h&&!s:!h&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||bs(a)&&!h&&Oh(r,a))?i=i.filter(m=>m!==a):s=o,a=Kr(a)}return e.set(r,i),i}function Sf(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?$n(e)?[]:xf(e,this._c):[].concat(t),i],o=a[0],h=a.reduce((u,m)=>{const f=pl(e,m,s);return u.top=kr(f.top,u.top),u.right=Ci(f.right,u.right),u.bottom=Ci(f.bottom,u.bottom),u.left=kr(f.left,u.left),u},pl(e,o,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function _f(r){const{width:e,height:t}=Ch(r);return{width:e,height:t}}function $f(r,e,t){const i=br(e),s=ti(e),n=t==="fixed",a=ss(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const h=Xr(0);if(i||!i&&!n)if((Fi(e)!=="body"||bs(s))&&(o=Cn(e)),i){const f=ss(e,!0,n,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else s&&(h.x=kh(s));const u=a.left+o.scrollLeft-h.x,m=a.top+o.scrollTop-h.y;return{x:u,y:m,width:a.width,height:a.height}}function ba(r){return hr(r).position==="static"}function fl(r,e){return!br(r)||hr(r).position==="fixed"?null:e?e(r):r.offsetParent}function Eh(r,e){const t=Bt(r);if($n(r))return t;if(!br(r)){let s=Kr(r);for(;s&&!Pi(s);){if(yr(s)&&!ba(s))return s;s=Kr(s)}return t}let i=fl(r,e);for(;i&&df(i)&&ba(i);)i=fl(i,e);return i&&Pi(i)&&ba(i)&&!Ha(i)?t:i||pf(r)||t}const Cf=async function(r){const e=this.getOffsetParent||Eh,t=this.getDimensions,i=await t(r.floating);return{reference:$f(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Af(r){return hr(r).direction==="rtl"}const Pf={convertOffsetParentRelativeRectToViewportRelativeRect:mf,getDocumentElement:ti,getClippingRect:Sf,getOffsetParent:Eh,getElementRects:Cf,getClientRects:vf,getDimensions:_f,getScale:xi,isElement:yr,isRTL:Af},kf=cf,Of=uf,Ef=af,Df=lf,Lf=(r,e,t)=>{const i=new Map,s={platform:Pf,...t},n={...s.platform,_c:i};return nf(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=xn(class extends Ba{constructor(r){var e;if(super(r),r.type!==Wa.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Yr}});var Tf=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,ws=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tf(e,t,s),s};let Lr=class extends _t{constructor(){super(...arguments),this.dropdownRef=Ge(),this.invokerRef=Ge(),this.optionsRef=Ge(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Lf(this.invokerRef.value,this.optionsRef.value,{middleware:[kf(2),Ef(),Df(),Of()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return v`

            <div class="dropdown" ${Xe(this.dropdownRef)}>

                <thermal-button class="${Ht(r)}" ${Xe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
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
                <div class="dropdown-options" ${Xe(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Lr.shadowRootOptions={..._t.shadowRootOptions,mode:"open"};Lr.styles=be`

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
    
    `;ws([ei({slot:"option"})],Lr.prototype,"_options",2);ws([g({type:String,reflect:!0})],Lr.prototype,"open",2);ws([g({type:String,reflect:!0,attribute:!0}),S()],Lr.prototype,"interactive",2);ws([g({type:String,reflect:!0})],Lr.prototype,"variant",2);Lr=ws([te("thermal-dropdown")],Lr);var Mf=Object.defineProperty,Uf=Object.getOwnPropertyDescriptor,An=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mf(e,t,s),s};let ki=class extends _t{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Ge(),this.contentRef=Ge(),this.rulerContentRef=Ge()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return v`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Xe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Xe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Xe(this.contentRef)}>

                    ${this.collapsed===!1?v`
                        <slot></slot>    
                    `:j}
                
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
            `:j}
        
        `}};ki.styles=be`

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

    `;An([S()],ki.prototype,"collapsed",2);An([S()],ki.prototype,"lastContentWidth",2);An([S()],ki.prototype,"drawerRef",2);ki=An([te("thermal-bar")],ki);var If=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,$r=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ff(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&If(e,t,s),s};let rr=class extends _t{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Ge(),this.contentRef=Ge()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,o=n-175,h=a-0,u=this.contentRef.value.offsetHeight,m=4/3;let f=0,y=0;u<o?(console.log("priorita šířky"),f=h,y=f/m):(console.log("priorita výšky"),y=o,f=y*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${y}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return v`

        <div class="container ${this.dark?"dark":"normal"}" ${Xe(this.appRef)}>

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
                `:j}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?v`
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

            ${this.author||this.license||this.recorded?v`<div class="credits">

                    ${this.recorded?v`<div>
                            <div class="credits-field">Recorded at:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:j}

                    ${this.author?v`<div>
                            <div class="credits-field">Author:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:j}

                    ${this.license?v`<div>
                            <div class="credits-field">License:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:j}

                </div>`:j}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};rr.styles=be`

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
    
    `;$r([ei({slot:"bar",flatten:!0})],rr.prototype,"barElements",2);$r([ei({slot:"pre",flatten:!0})],rr.prototype,"preElements",2);$r([ei({slot:"content",flatten:!0})],rr.prototype,"contentElements",2);$r([g({type:String,reflect:!0})],rr.prototype,"fullscreen",2);$r([g({type:String,reflect:!0,attribute:!0})],rr.prototype,"showfullscreen",2);$r([g({type:String,reflect:!0,attribute:!0})],rr.prototype,"dark",2);$r([g()],rr.prototype,"author",2);$r([g()],rr.prototype,"recorded",2);$r([g()],rr.prototype,"license",2);rr=$r([te("thermal-app")],rr);var zf=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,Va=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zf(e,t,s),s};let ns=class extends _t{render(){return v`

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
        
        `}};ns.styles=be`
    
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

    `;Va([g({type:String})],ns.prototype,"label",2);Va([g({type:String})],ns.prototype,"hint",2);ns=Va([te("thermal-field")],ns);var jf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,Bf=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jf(e,t,s),s};let ka=class extends _t{render(){return v`
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
                        <p>version ${Ra}</p>
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
        `}};ka.styles=be`

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
    
    `;ka=Bf([te("app-info-button")],ka);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dh=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gl=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Dh(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hf{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Gf=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class ml extends Hf{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const h=new Set;for(const[u,{consumerHost:m}]of this.subscriptions)h.has(u)||(h.add(u),m.dispatchEvent(new Dh(this.context,u,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Gf(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new ml(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new ml(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function we({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new gl(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new gl(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let Bs;const Vf=new Uint8Array(16);function Yf(){if(!Bs&&(Bs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Bs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Bs(Vf)}const xt=[];for(let r=0;r<256;++r)xt.push((r+256).toString(16).slice(1));function qf(r,e=0){return xt[r[e+0]]+xt[r[e+1]]+xt[r[e+2]]+xt[r[e+3]]+"-"+xt[r[e+4]]+xt[r[e+5]]+"-"+xt[r[e+6]]+xt[r[e+7]]+"-"+xt[r[e+8]]+xt[r[e+9]]+"-"+xt[r[e+10]]+xt[r[e+11]]+xt[r[e+12]]+xt[r[e+13]]+xt[r[e+14]]+xt[r[e+15]]}const Xf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),vl={randomUUID:Xf};function Kf(r,e,t){if(vl.randomUUID&&!e&&!r)return vl.randomUUID();r=r||{};const i=r.random||(r.rng||Yf)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,qf(i)}const yo=class yo extends _t{get UUID(){return this._UUID===void 0&&(this._UUID=Kf()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}};yo.shadowRootOptions={..._t.shadowRootOptions,mode:"open"};let ft=yo;const Ya="manager-instance",zi="manager-palette-context",qa="manager-smooth-context",Pn="manager-graph-function-context",Zf=new ja;window.Thermal={managers:new Map};window.Thermal.managers.set("default",Zf);const kn=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new ja(void 0,e);return window.Thermal.managers.set(r,t),t}};var Qf=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,Ni=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qf(e,t,s),s};let Tr=class extends ft{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:lr.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();const e={},t=Tr.sanitizeStringPalette(this.palette.key);e.palette=t;let i=kn(this.slug,e);this.log("načítám instanci manažera",this.slug,"našel jsem toto:",i.id),this.manager=i}updated(e){super.updated(e),e.has("palette")&&(e.get("palette"),this.palette)}firstUpdated(e){super.firstUpdated(e),this.log("first updated manager provider"),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=Tr.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}static sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(lr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:lr[e]}}render(){return v`<slot></slot>`}};Ni([de({context:Ya})],Tr.prototype,"manager",2);Ni([g({type:String,reflect:!0,attribute:!0})],Tr.prototype,"slug",2);Ni([de({context:zi}),g({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:lr[r]}),toAttribute:r=>r.key.toString()}})],Tr.prototype,"palette",2);Ni([de({context:qa}),g({type:String,reflect:!0,attribute:!0})],Tr.prototype,"smooth",2);Ni([de({context:Pn}),g({type:String,reflect:!0,attribute:!0})],Tr.prototype,"graphSmooth",2);Tr=Ni([te("manager-provider")],Tr);var eg=Object.defineProperty,tg=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&eg(e,t,s),s};class ji extends ft{connectedCallback(){super.connectedCallback(),this.manager}}tg([we({context:Ya,subscribe:!0}),S()],ji.prototype,"manager");const Xa="registry-instance",Ka="registry-opacity",On="registry-range-from",En="registry-range-to",Lh="registry-loading",Za="registry-min",Qa="registry-max";var rg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,Ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?ig(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rg(e,t,s),s};let wr=class extends ji{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}firstUpdated(e){super.firstUpdated(e),this.log("first updated"),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return v`<slot></slot>`}};Ur([g({type:String,reflect:!0,attribute:!0})],wr.prototype,"slug",2);Ur([de({context:Xa})],wr.prototype,"registry",2);Ur([de({context:Ka}),g({type:Number,reflect:!0,attribute:!0})],wr.prototype,"opacity",2);Ur([de({context:Za}),S()],wr.prototype,"min",2);Ur([de({context:Qa}),S()],wr.prototype,"max",2);Ur([de({context:On}),g({type:Number,reflect:!0,attribute:!0})],wr.prototype,"from",2);Ur([de({context:En}),g({type:Number,reflect:!0,attribute:!0})],wr.prototype,"to",2);Ur([de({context:Lh}),g({type:String,reflect:!0,attribute:!0})],wr.prototype,"loading",2);wr=Ur([te("registry-provider")],wr);var sg=Object.defineProperty,ng=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&sg(e,t,s),s};class zt extends ji{connectedCallback(){super.connectedCallback(),this.registry}}ng([we({context:Xa,subscribe:!0})],zt.prototype,"registry");const Ja="group-instance",Dn="tool-context",Ln="tools-context";var ag=Object.defineProperty,og=Object.getOwnPropertyDescriptor,xs=(r,e,t,i)=>{for(var s=i>1?void 0:i?og(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ag(e,t,s),s};let Oi=class extends zt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),console.log(this.registry),this.group=this.registry.groups.addOrGetGroup(this.slug),this.slug,this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,e=>{this.tool=e})}render(){return v`<slot></slot>`}};xs([g({type:String,attribute:!0,reflect:!0})],Oi.prototype,"slug",2);xs([de({context:Ja})],Oi.prototype,"group",2);xs([de({context:Dn})],Oi.prototype,"tool",2);xs([de({context:Ln})],Oi.prototype,"tools",2);Oi=xs([te("group-provider")],Oi);var lg=Object.defineProperty,hg=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&lg(e,t,s),s};class pi extends zt{constructor(){super()}connectedCallback(){super.connectedCallback()}}hg([we({context:Ja,subscribe:!0})],pi.prototype,"group");const eo="file",Th="failure",Rh="file-loading",cg="file-loaded",Tn="file-provider-element",to="file-ms-context",ro="file-cursor",io="file-cursor-setter",Ss="playback",so="duration",no="playing",Mh="playbackSpeed",Uh="recording",Ih="mayStop",ug="analysislist",ao="file-markers-context";var dg=Object.defineProperty,At=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&dg(e,t,s),s};class vt extends pi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Q,this.onSuccess=new Q,this.onFailure=new Q,this.onInstanceCreated=new Q}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("playbackspeed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}}At([de({context:eo}),S()],vt.prototype,"file");At([de({context:Th}),S()],vt.prototype,"failure");At([de({context:Rh}),S()],vt.prototype,"loading");At([de({context:cg}),S()],vt.prototype,"ready");At([de({context:no}),g({type:String,reflect:!0,attribute:!0})],vt.prototype,"playing");At([de({context:so}),S()],vt.prototype,"duration");At([de({context:Ss}),S()],vt.prototype,"currentFrame");At([de({context:ro})],vt.prototype,"cursor");At([de({context:io})],vt.prototype,"cursorSetter");At([de({context:to}),g({type:Number,reflect:!0,attribute:!0})],vt.prototype,"ms");At([de({context:Mh}),g({type:Number,reflect:!0,attribute:!0})],vt.prototype,"speed");At([de({context:Uh}),g({type:String,reflect:!0,attribute:!0})],vt.prototype,"recording");At([de({context:Ih}),S()],vt.prototype,"mayStop");At([ei({slot:"mark",flatten:!0})],vt.prototype,"marksQueriedInternally");At([de({context:ao})],vt.prototype,"marksProvidedBelow");At([de({context:ug})],vt.prototype,"analysis");var pg=Object.defineProperty,fg=Object.getOwnPropertyDescriptor,sr=(r,e,t,i)=>{for(var s=i>1?void 0:i?fg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pg(e,t,s),s};let Vt=class extends vt{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.log("loading sync"),this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof qr?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.log("loading async",this.thermal,this),this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof bn?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof di&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}createInitialAnalysis(r,e,t){if(t!==void 0&&t.trim().length>0){const i=r.slots.createFromSerialized(t,e);i==null||i.setSelected(!1,!0)}}handleLoaded(r){r.slots.onSlot1Serialize.set(this.UUID,e=>this.analysis1=e),r.slots.onSlot2Serialize.set(this.UUID,e=>this.analysis2=e),r.slots.onSlot3Serialize.set(this.UUID,e=>this.analysis3=e),r.slots.onSlot4Serialize.set(this.UUID,e=>this.analysis4=e),r.slots.onSlot5Serialize.set(this.UUID,e=>this.analysis5=e),r.slots.onSlot6Serialize.set(this.UUID,e=>this.analysis6=e),r.slots.onSlot7Serialize.set(this.UUID,e=>this.analysis7=e),this.createInitialAnalysis(r,1,this.analysis1),this.createInitialAnalysis(r,2,this.analysis2),this.createInitialAnalysis(r,3,this.analysis3),this.createInitialAnalysis(r,4,this.analysis4),this.createInitialAnalysis(r,5,this.analysis5),this.createInitialAnalysis(r,6,this.analysis6),this.createInitialAnalysis(r,7,this.analysis7)}assignAppropriateField(r,e){r===1?this.analysis1=e:r===2?this.analysis2=e:r===3?this.analysis3=e:r===4?this.analysis4=e:r===5?this.analysis5=e:r===6?this.analysis6=e:r===7&&(this.analysis7=e)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}this.handleAnalysisUpdate(1,r),this.handleAnalysisUpdate(2,r),this.handleAnalysisUpdate(3,r),this.handleAnalysisUpdate(4,r),this.handleAnalysisUpdate(5,r),this.handleAnalysisUpdate(6,r),this.handleAnalysisUpdate(7,r)}handleAnalysisUpdate(r,e){const t=`analysis${r}`;if(e.has(t)){const i=e.get(t),s=this[t];if(this.file){const n=this.file.slots.getSlot(r);if(n===void 0&&s&&s.trim().length>0&&(!i||(i==null?void 0:i.trim().length)>0)){const a=this.file.slots.createFromSerialized(s,r);a==null||a.setSelected(!1,!0)}else n!==void 0&&i&&(!s||(s==null?void 0:s.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(r):n&&s&&(n==null||n.recieveSerialized(s))}}}render(){return v`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};sr([de({context:Tn})],Vt.prototype,"providedSelf",2);sr([g({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Vt.prototype,"batch",2);sr([g({type:String,attribute:!0,reflect:!0})],Vt.prototype,"thermal",2);sr([g({type:String,attribute:!0,reflect:!0})],Vt.prototype,"visible",2);sr([g({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis1",2);sr([g({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis2",2);sr([g({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis3",2);sr([g({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis4",2);sr([g({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis5",2);sr([g({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis6",2);sr([g({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis7",2);Vt=sr([te("file-provider")],Vt);var gg=Object.defineProperty,mg=Object.getOwnPropertyDescriptor,Wi=(r,e,t,i)=>{for(var s=i>1?void 0:i?mg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gg(e,t,s),s};let Zr=class extends vt{constructor(){super(...arguments),this.providedSelf=this,this.container=Ge(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof qr){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof di&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return v`

                    <div class="container">
                        <div ${Xe(this.container)} class="${Ht(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${dh.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return v`
            ${this.ready?v`<slot></slot>`:j}
            <slot name="mark"></slot>
        `}};Zr.styles=be`

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
    
    `;Wi([de({context:Tn})],Zr.prototype,"providedSelf",2);Wi([S()],Zr.prototype,"container",2);Wi([S()],Zr.prototype,"ready",2);Wi([S()],Zr.prototype,"hover",2);Wi([S()],Zr.prototype,"listener",2);Zr=Wi([te("file-dropin")],Zr);var vg=Object.defineProperty,yg=Object.getOwnPropertyDescriptor,oo=(r,e,t,i)=>{for(var s=i>1?void 0:i?yg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vg(e,t,s),s};let as=class extends pi{constructor(){super(...arguments),this.container=Ge(),this.hover=!1}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const r={dropin:!0,hover:this.hover};return v`

            <div class="container">
            
                <div ${Xe(this.container)} class="${Ht(r)}"></div>

            </div>
        
        `}};as.styles=be`

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
    
    `;oo([S()],as.prototype,"container",2);oo([S()],as.prototype,"hover",2);as=oo([te("group-dropin")],as);var bg=Object.defineProperty,wg=Object.getOwnPropertyDescriptor,Bi=(r,e,t,i)=>{for(var s=i>1?void 0:i?wg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bg(e,t,s),s};let Rr=class extends ft{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:lr.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();const r={},e=Rr.sanitizeStringPalette(this.palette.key);r.palette=e;let t=kn(this.slug,r);this.manager=t}updated(r){super.updated(r),r.has("palette")&&(r.get("palette"),this.palette)}firstUpdated(r){super.firstUpdated(r),this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)}),this.manager.smooth.addListener(this.UUIDManagerListeners,e=>{this.smooth=e}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,e=>{this.graphSmooth=e})}attributeChangedCallback(r,e,t){if(super.attributeChangedCallback(r,e,t),r==="palette"&&this.manager){const i=Rr.sanitizeStringPalette(t);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(r){let e=!0;return r==null?e=!1:Object.keys(lr).includes(r)||(e=!1),e?r:"jet"}setPalette(r){this.palette={key:r,data:lr[r]}}render(){return v`<slot></slot>`}};Bi([de({context:Ya})],Rr.prototype,"manager",2);Bi([g({type:String})],Rr.prototype,"slug",2);Bi([de({context:zi}),g({type:String,converter:{fromAttribute:r=>({key:r,data:lr[r]}),toAttribute:r=>r.key.toString()}})],Rr.prototype,"palette",2);Bi([de({context:qa}),g({type:String})],Rr.prototype,"smooth",2);Bi([de({context:Pn}),g({type:String})],Rr.prototype,"graphSmooth",2);Rr=Bi([te("manager-mirror")],Rr);var xg=Object.defineProperty,Sg=Object.getOwnPropertyDescriptor,Ir=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xg(e,t,s),s};let xr=class extends ji{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let r=this.manager.addOrGetRegistry(this.slug);this.registry=r,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}firstUpdated(r){super.firstUpdated(r),this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e})}updated(r){if(super.updated(r),(r.has("from")||r.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),r.has("opacity")){const e=Math.min(1,Math.max(0,this.opacity));e!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(e)}}render(){return v`<slot></slot>`}};Ir([g({type:String,reflect:!0,attribute:!0})],xr.prototype,"slug",2);Ir([de({context:Xa})],xr.prototype,"registry",2);Ir([de({context:Ka}),g({type:Number,reflect:!0,attribute:!0})],xr.prototype,"opacity",2);Ir([de({context:Za}),S()],xr.prototype,"min",2);Ir([de({context:Qa}),S()],xr.prototype,"max",2);Ir([de({context:On}),g({type:Number})],xr.prototype,"from",2);Ir([de({context:En}),g({type:Number})],xr.prototype,"to",2);Ir([de({context:Lh}),g({type:String})],xr.prototype,"loading",2);xr=Ir([te("registry-mirror")],xr);var _g=Object.defineProperty,$g=Object.getOwnPropertyDescriptor,_s=(r,e,t,i)=>{for(var s=i>1?void 0:i?$g(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_g(e,t,s),s};let Ei=class extends zt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,r=>{this.tool=r})}render(){return v`<slot></slot>`}};_s([g({type:String})],Ei.prototype,"slug",2);_s([de({context:Ja})],Ei.prototype,"group",2);_s([de({context:Dn})],Ei.prototype,"tool",2);_s([de({context:Ln})],Ei.prototype,"tools",2);Ei=_s([te("group-mirror")],Ei);var Cg=Object.defineProperty,Ag=Object.getOwnPropertyDescriptor,Kt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ag(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cg(e,t,s),s};let Mt=class extends vt{constructor(){super(...arguments),this.providedSelf=this}createInitialAnalysis(r,e,t){if(t!==void 0&&t.trim().length>0){const i=r.slots.createFromSerialized(t,e);i==null||i.setSelected(!1,!0)}}handleLoaded(r){r.slots.onSlot1Serialize.set(this.UUID,e=>this.analysis1=e),r.slots.onSlot2Serialize.set(this.UUID,e=>this.analysis2=e),r.slots.onSlot3Serialize.set(this.UUID,e=>this.analysis3=e),r.slots.onSlot4Serialize.set(this.UUID,e=>this.analysis4=e),r.slots.onSlot5Serialize.set(this.UUID,e=>this.analysis5=e),r.slots.onSlot6Serialize.set(this.UUID,e=>this.analysis6=e),r.slots.onSlot7Serialize.set(this.UUID,e=>this.analysis7=e),this.createInitialAnalysis(r,1,this.analysis1),this.createInitialAnalysis(r,2,this.analysis2),this.createInitialAnalysis(r,3,this.analysis3),this.createInitialAnalysis(r,4,this.analysis4),this.createInitialAnalysis(r,5,this.analysis5),this.createInitialAnalysis(r,6,this.analysis6),this.createInitialAnalysis(r,7,this.analysis7)}assignAppropriateField(r,e){r===1?this.analysis1=e:r===2?this.analysis2=e:r===3?this.analysis3=e:r===4?this.analysis4=e:r===5?this.analysis5=e:r===6?this.analysis6=e:r===7&&(this.analysis7=e)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.file}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}this.handleAnalysisUpdate(1,r),this.handleAnalysisUpdate(2,r),this.handleAnalysisUpdate(3,r),this.handleAnalysisUpdate(4,r),this.handleAnalysisUpdate(5,r),this.handleAnalysisUpdate(6,r),this.handleAnalysisUpdate(7,r),r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}handleAnalysisUpdate(r,e){const t=`analysis${r}`;if(e.has(t)){const i=e.get(t),s=this[t];if(this.file){const n=this.file.slots.getSlot(r);if(n===void 0&&s&&s.trim().length>0&&(!i||(i==null?void 0:i.trim().length)>0)){const a=this.file.slots.createFromSerialized(s,r);a==null||a.setSelected(!1,!0)}else n!==void 0&&i&&(!s||(s==null?void 0:s.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(r):n&&s&&(n==null||n.recieveSerialized(s))}}}render(){return v`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};Kt([de({context:Tn})],Mt.prototype,"providedSelf",2);Kt([de({context:eo}),g()],Mt.prototype,"file",2);Kt([g({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Mt.prototype,"batch",2);Kt([g({type:String})],Mt.prototype,"thermal",2);Kt([g({type:String})],Mt.prototype,"visible",2);Kt([g({type:String})],Mt.prototype,"analysis1",2);Kt([g({type:String})],Mt.prototype,"analysis2",2);Kt([g({type:String})],Mt.prototype,"analysis3",2);Kt([g({type:String})],Mt.prototype,"analysis4",2);Kt([g({type:String})],Mt.prototype,"analysis5",2);Kt([g({type:String})],Mt.prototype,"analysis6",2);Kt([g({type:String})],Mt.prototype,"analysis7",2);Mt=Kt([te("file-mirror")],Mt);var Pg=Object.defineProperty,kg=Object.getOwnPropertyDescriptor,Fh=(r,e,t,i)=>{for(var s=i>1?void 0:i?kg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pg(e,t,s),s};let an=class extends zt{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return v`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return v`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(lr).map(([r,e])=>v`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};an.styles=be`

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

    `;Fh([we({context:zi,subscribe:!0})],an.prototype,"value",2);an=Fh([te("registry-palette-dropdown")],an);var Og=Object.defineProperty,Eg=Object.getOwnPropertyDescriptor,zh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Eg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Og(e,t,s),s};let on=class extends zt{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return v`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${r.name}</span>
            </div>
        
        `}render(){return v`
            <div class="container">
                ${Object.entries(lr).map(([r,e])=>v`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};on.styles=be`

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

    `;zh([we({context:zi,subscribe:!0}),S()],on.prototype,"value",2);on=zh([te("registry-palette-buttons")],on);var Dg=Object.defineProperty,Lg=Object.getOwnPropertyDescriptor,Nh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Lg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Dg(e,t,s),s};let ln=class extends ji{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.smooth.setSmooth(!1)}
            >Pixelated</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.smooth.setSmooth(!0)}
            >Smooth</thermal-button>
        `}};ln.styles=be`
    
        :host {}

    `;Nh([we({context:qa,subscribe:!0})],ln.prototype,"smooth",2);ln=Nh([te("manager-smooth-switch")],ln);var Tg=Object.defineProperty,Rg=Object.getOwnPropertyDescriptor,jh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tg(e,t,s),s};let hn=class extends ji{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
            >Straight lines</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
            >Smooth lines</thermal-button>
        `}};hn.styles=be`
    
        :host {}

    `;jh([we({context:Pn,subscribe:!0})],hn.prototype,"smooth",2);hn=jh([te("manager-graph-smooth-switch")],hn);var Mg=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,Wh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ug(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mg(e,t,s),s};let cn=class extends zt{connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return v`
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
        `}};cn.styles=be`

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
    
    `;Wh([we({context:Ka,subscribe:!0})],cn.prototype,"value",2);cn=Wh([te("registry-opacity-slider")],cn);var Ig=Object.defineProperty,Fg=Object.getOwnPropertyDescriptor,zg=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ig(e,t,s),s};let yl=class extends zt{doAction(){this.registry.range.applyAuto()}render(){return v`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};yl=zg([te("registry-range-auto-button")],yl);var Ng=Object.defineProperty,jg=Object.getOwnPropertyDescriptor,Wg=(r,e,t,i)=>{for(var s=i>1?void 0:i?jg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ng(e,t,s),s};let bl=class extends zt{doAction(){this.registry.range.applyMinmax()}render(){return v`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};bl=Wg([te("registry-range-full-button")],bl);var Bg=Object.defineProperty,Hg=Object.getOwnPropertyDescriptor,fi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bg(e,t,s),s};let Yt=class extends zt{constructor(){super(...arguments),this.ticksRef=Ge(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Yt.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){const r=this.highlightFrom!==void 0&&this.highlightTo!==void 0;let e,t;if(this.registry.minmax.value&&r&&this.highlightFrom!==void 0&&this.highlightTo!==void 0){const i=this.registry.minmax.value.min,s=this.registry.minmax.value.max-i;e=(this.highlightFrom-i)/s*100,t=(this.highlightTo-i)/s*100-e}return v`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Xe(this.ticksRef)}>

                    ${r?v`<div class="highlight" style="position: absolute; top: 2px; height: 3px; left:${e}%; width: ${t}%; background-color: var(--thermal-slate)"></div>`:j}

                    ${this.ticks.map(i=>v`
                            <div class="tick" >
                                <div class="tick-value">
                                ${i.value.toFixed(Yt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                    

                </div>                

            </div>
        
        `}};Yt.TICK_WIDTH=40;Yt.TICK_FIXED=2;Yt.styles=be`

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


    `;fi([g({type:String,reflect:!0})],Yt.prototype,"placement",2);fi([S()],Yt.prototype,"minmax",2);fi([S()],Yt.prototype,"ticks",2);fi([g({type:Number,reflect:!0})],Yt.prototype,"highlightFrom",2);fi([g({type:Number,reflect:!0})],Yt.prototype,"highlightTo",2);fi([we({context:zi,subscribe:!0}),S()],Yt.prototype,"palette",2);Yt=fi([te("registry-ticks-bar")],Yt);var Gg=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,$s=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gg(e,t,s),s};let Di=class extends zt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return v`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return v`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};$s([S()],Di.prototype,"minmax",2);$s([S()],Di.prototype,"range",2);$s([S()],Di.prototype,"opacity",2);$s([S()],Di.prototype,"palette",2);Di=$s([te("registry-log")],Di);(()=>{var r=Object.defineProperty,e=Math.pow,t=(c,p,A)=>p in c?r(c,p,{enumerable:!0,configurable:!0,writable:!0,value:A}):c[p]=A,i=(c,p,A)=>(t(c,typeof p!="symbol"?p+"":p,A),A),s=(c,p)=>` ${p&&p.length>0?p.map(A=>`<link rel="stylesheet" href="${A}" />`).join(""):""} <style> ${c} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",h="pointers-max-distance",u="range-dragging",m="data",f="min",y="max",x="step",_="round",$="type",C="theme",B="rtl",z="btt",I="disabled",J="keyboard-disabled",W="mousewheel-disabled",se="slider-width",w="slider-height",P="slider-radius",O="slider-bg",k="slider-bg-hover",N="slider-bg-fill",L="pointer-width",T="pointer-height",M="pointer-radius",Z="pointer-bg",le="pointer-bg-hover",ae="pointer-bg-focus",me="pointer-shadow",ze="pointer-shadow-hover",Re="pointer-shadow-focus",rt="pointer-border",ut="pointer-border-hover",et="pointer-border-focus",ot="animate-onclick",K="css-links",re="vertical",ve="horizontal",$e=(c,p,A,b,Y)=>{let ue=p-c;return ue===0?A:(b-A)*(Y-c)/ue+A},We=c=>!isNaN(parseFloat(c))&&isFinite(c),Pe=(c,p)=>We(c)?Number(c):p,Nr=(c,p)=>p===0?0:Math.round(c/p)*p,si=(c,p=1/0)=>{if(p===1/0)return c;let A=e(10,p);return Math.round(c*A)/A},Be=c=>c==null?!1:typeof c=="boolean"?c:c.trim().toLowerCase()==="true",Nt=(c,p)=>{c.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:p}}))},Pr=(c,p)=>{c.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:p}}))},zn=(c,p)=>{c.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:p}}))},Nn=(c,p)=>{c.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:p}}))},jn=(c,p)=>{if(!p||p.length<=0)return;let A=p.map(Y=>We(Y)?Pe(Y,Y):Y),b={values:A||[]};b.value=A[0],b.value0=A[0],b.value1=A[0];for(let Y=1;Y<A.length;Y++)b[`value${Y+1}`]=A[Y];c.dispatchEvent(new CustomEvent("change",{detail:b}))},R=(c,p,A)=>{let b=0,Y,ue,_e,q,X=!1,Ce=(fe,qe,bt,dt,it,st)=>{let Dt=b;bt!==void 0&&fe>bt&&(fe=bt),qe!==void 0&&fe<qe&&(fe=qe),b=fe;let Lt=b;return(dt===re&&st||dt===ve&&it)&&(Lt=100-Lt),dt===re?p.style.top=`${Lt}%`:p.style.left=`${Lt}%`,Dt!==b},Ee=fe=>fe===p||p.contains(fe),ne=(fe,qe,bt,dt)=>{Y=fe,ue=qe,_e=bt,q=dt},Ne=fe=>{X=fe,p.classList.toggle("disabled",X),X?p.setAttribute("aria-disabled","true"):p.hasAttribute("aria-disabled")&&p.removeAttribute("aria-disabled")},tr=(fe,qe)=>{qe==null?p.removeAttribute(fe):p.setAttribute(fe,qe)},$t=fe=>p.getAttribute(fe),pe=fe=>{if(!X){switch(fe.key){case"ArrowLeft":{fe.preventDefault(),typeof Y=="function"&&Y(A);break}case"ArrowRight":{fe.preventDefault(),typeof ue=="function"&&ue(A);break}case"ArrowUp":{fe.preventDefault(),typeof _e=="function"&&_e(A);break}case"ArrowDown":{fe.preventDefault(),typeof q=="function"&&q(A);break}}Nn(c,fe)}},Ae=()=>{X||Nt(c,p)};return p.className=`pointer pointer-${A}`,p.addEventListener("keydown",pe),p.addEventListener("click",Ae),{$pointer:p,get percent(){return b},get disabled(){return X},set disabled(fe){Ne(fe)},updatePosition:Ce,isClicked:Ee,setCallbacks:ne,setAttr:tr,getAttr:$t,destroy:()=>{p.removeEventListener("keydown",pe),p.removeEventListener("click",Ae),p.remove()}}},H=c=>{if(c==null)return;if(Array.isArray(c))return c;if(c.trim()==="")return;let p=c.split(","),A=[],b=!0;for(let Y=0;Y<p.length;Y++){let ue=p[Y].trim();ue!==""&&(A.push(ue),We(ue)||(b=!1))}return b?A.map(Y=>Number(Y)):A},G=(c,p)=>p?p.findIndex(A=>A===c||A.toString().trim()===c.toString().trim()):-1,V=c=>({updatePosition:(p,A,b,Y)=>{if(A.length<=0)return;let ue=A.length===1,_e=A[0],q=A[A.length-1];p===re?(c.style.removeProperty("width"),c.style.removeProperty("right"),c.style.removeProperty("left"),ue?c.style.height=`${_e}%`:c.style.height=`${Math.abs(_e-q)}%`,Y?(c.style.bottom="0%",ue?c.style.top="auto":c.style.top=`${Math.min(100-q,100-_e)}%`):(c.style.bottom="auto",ue?c.style.top="0%":c.style.top=`${Math.min(_e,q)}%`)):(c.style.removeProperty("height"),c.style.removeProperty("top"),c.style.removeProperty("bottom"),ue?c.style.width=`${_e}%`:c.style.width=`${Math.abs(_e-q)}%`,b?(c.style.right="0%",ue?c.style.left="auto":c.style.left=`${Math.min(100-q,100-_e)}%`):(c.style.right="auto",ue?c.style.left="0%":c.style.left=`${Math.min(_e,q)}%`))}}),he="--animate-onclick",Ue="--width",ye="--height",Ye="--panel-bg-border-radius",Le="--panel-bg",ee="--panel-bg-hover",Te="--panel-bg-fill",D="--pointer-width",U="--pointer-height",xe="--pointer-border-radius",ke="--pointer-bg",lt="--pointer-bg-hover",wt="--pointer-bg-focus",fr="--pointer-shadow",jt="--pointer-shadow-hover",er="--pointer-shadow-focus",jr="--pointer-border",oe="--pointer-border-hover",Se="--pointer-border-focus",F=(c,p,A)=>{let b=new Map;for(let Y of c.attributes){let ue=Y.nodeName.trim().toLowerCase();if(!p.test(ue))continue;let _e=ue.replace(/\D/g,"").trim(),q=_e===""||_e==="0"||_e==="1"?0:Pe(_e,0)-1,X=A&&typeof A=="function"?A(Y.value):Y.value;b.set(q,X)}return b},ge=c=>{if(!c)return null;let p=c.getAttribute(K);if(!p)return null;let A=p.split(";"),b=[];for(let Y of A)Y.trim()!==""&&b.push(Y.trim());return b},Ie=[[Ue,se,"sliderWidth",null],[ye,w,"sliderHeight",null],[Ye,P,"sliderRadius",null],[Le,O,"sliderBg",null],[ee,k,"sliderBgHover",null],[Te,N,"sliderBgFill",null],[D,L,"pointer#Width",/^pointer([0-9]*)-width$/],[U,T,"pointer#Height",/^pointer([0-9]*)-height$/],[xe,M,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ke,Z,"pointer#Bg",/^pointer([0-9]*)-bg$/],[lt,le,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[wt,ae,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[fr,me,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[jt,ze,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[er,Re,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[jr,rt,"pointer#Border",/^pointer([0-9]*)-border$/],[oe,ut,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Se,et,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Me=(c,p,A)=>{let b=null,Y=[],ue=new Map,_e=(pe,Ae=p)=>{let fe=[...Ae.classList];for(let qe of fe)qe.startsWith(pe)&&p.classList.remove(qe)},q=()=>{_e("shape");let pe=p.querySelectorAll(".pointer");for(let Ae of pe)_e("shape",Ae)},X=pe=>{b=pe,_e("theme-"),typeof pe=="string"&&p.classList.add(`theme-${pe}`)},Ce=()=>{if(q(),!(Y.length<=0)){p.classList.add("shape",`shape-${Y[0]}`);for(let pe=1;pe<Y.length;pe++){let Ae=Y[pe];if(!Ae)continue;let fe=p.querySelector(`.pointer-${pe}`);!fe||fe.classList.add("shape",`shape-${Ae}`)}}},Ee=(pe,Ae)=>{Y[pe]=Ae,Ce()},ne=()=>{q();let pe=F(c,/^pointer([0-9]*)-shape$/);if(!(pe.size<=0)){for(let Ae of pe){let fe=Ae[0];Y[fe]=Ae[1]}Ce()}},Ne=(pe,Ae)=>`${pe}-${Ae}`,tr=(pe,Ae,fe)=>{let qe=A[fe];if(!qe)return;let bt=fe===0?p:qe.$pointer;if(Ae==null){ue.has(Ne(pe,fe))&&ue.delete(Ne(pe,fe)),bt.style.removeProperty(pe);return}ue.set(Ne(pe,fe),Ae),bt.style.setProperty(pe,Ae)},$t=(pe,Ae)=>ue.get(Ne(pe,Ae));return(()=>{for(let pe of Ie){let[Ae,fe,qe,bt]=pe;if(bt){let it=F(c,bt);for(let st of it){let Dt=st[0],Lt=st[1];tr(Ae,Lt,Dt)}}else{let it=c.getAttribute(fe);tr(Ae,it,0)}let dt=[];if(qe.indexOf("#")===-1)dt.push([qe,0]);else{dt.push([qe.replace("#",""),0]),dt.push([qe.replace("#","0"),0]),dt.push([qe.replace("#","1"),0]);for(let it=1;it<A.length;it++)dt.push([qe.replace("#",(it+1).toString()),it])}for(let it of dt)try{let st=it[0],Dt=it[1];Object.prototype.hasOwnProperty.call(c,st)||Object.defineProperty(c,st,{get(){return $t(Ae,Dt)},set:Lt=>{tr(Ae,Lt,Dt)}})}catch(st){console.error(st)}}X(c.getAttribute(C)),ne()})(),{setStyle:tr,getStyle:$t,get theme(){return b},set theme(pe){X(pe)},get pointerShapes(){return Y},setPointerShape:Ee}},Je="animate-on-click",Oe="range-dragging",Et=(c,p,A,b)=>{let Y=[],ue=Ee=>{for(let ne of Y)ne.update&&typeof ne.update=="function"&&ne.update(Ee)},_e=()=>{for(let Ee of Y)Ee.destroy&&typeof Ee.destroy=="function"&&Ee.destroy()},q=(Ee,ne)=>{for(let Ne of Y)Ne.onAttrChange&&typeof Ne.onAttrChange=="function"&&Ne.onAttrChange(Ee,ne)},X=Ee=>{if(Ee.gettersAndSetters){for(let ne of Ee.gettersAndSetters)if(!(!ne.name||!ne.attributes))try{Object.prototype.hasOwnProperty.call(c,ne.name)||Object.defineProperty(c,ne.name,ne.attributes)}catch(Ne){console.error("defineSettersGetters error:",Ne)}}},Ce=Ee=>{var ne;if(!Ee.css)return;let Ne=(ne=c.shadowRoot)==null?void 0:ne.querySelector("style");!Ne||(Ne.innerHTML+=Ee.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Ee of window.tcRangeSliderPlugins){let ne=Ee();Y.push(ne),ne.init&&typeof ne.init=="function"&&(ne.init(c,p,A,b),X(ne),Ce(ne))}},update:ue,onAttrChange:q,destroy:_e}},ht=10,ks=20,Gh=(c,p)=>{let A=new Map,b=/^value([0-9]*)$/;for(let q of c.attributes){let X=q.nodeName.trim().toLowerCase();if(!b.test(X))continue;let Ce=X.replace("value","").trim(),Ee=Ce===""||Ce==="0"||Ce==="1"?0:Pe(Ce,0)-1,ne=We(q.value)?Pe(q.value,0):q.value;A.set(Ee,ne)}let Y=Math.max(...Array.from(A.keys())),ue=[];ue.push([R(c,p,0),A.get(0)]);let _e=p;for(let q=1;q<=Y;q++){let X=p.cloneNode(!0);_e.after(X),_e=X,ue.push([R(c,X,q),A.get(q)])}return ue},bo=(c,p,A,b,Y,ue,_e)=>{try{Object.defineProperty(c,b,{configurable:!0,get(){if(!p)return;let q=p.pointers[A];if(!q)return;let X=p.getTextValue(q.percent);return We(X)?Pe(X,X):X},set:q=>{p.pointers[A]?p==null||p.setValue(q,A):p==null||p.addPointer(q)}}),Object.defineProperty(c,Y,{configurable:!0,get(){var q,X;return(X=(q=p==null?void 0:p.pointers[A])==null?void 0:q.getAttr("aria-label"))!=null?X:void 0},set:q=>{!p||p.setAriaLabel(A,q)}}),Object.defineProperty(c,ue,{configurable:!0,get(){var q,X;return(X=(q=p==null?void 0:p.styles)==null?void 0:q.pointerShapes[A])!=null?X:null},set:q=>{!p||!p.styles||p.styles.setPointerShape(A,q)}}),Object.defineProperty(c,_e,{configurable:!0,get(){var q;return(q=p==null?void 0:p.pointers[A].disabled)!=null?q:!1},set:q=>{if(!p)return;let X=p==null?void 0:p.pointers[A];!X||(X.disabled=q)}})}catch(q){console.error(q)}},Vh=(c,p)=>{let A=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let b=2;b<ht;b++)A.push([`value${b}`,`ariaLabel${b}`,`pointer${b}Shape`,`pointer${b}Disabled`,b-1]);for(let b of A)bo(c,p,b[4],b[0],b[1],b[2],b[3])},wo=(c,p,A)=>{var b;let Y=(b=A.shadowRoot)==null?void 0:b.querySelector(".container");if(Y)for(let ue of c)p?Y.prepend(ue.$pointer):Y.append(ue.$pointer)},Yh=(c,p)=>{if(!(!p||c.length<=1)){for(let A of c)A.$pointer.style.zIndex=ks.toString();p.$pointer.style.zIndex=(ks*2).toString()}},Wn=0,Gi=100,mi=2,xo="0.3s",qh=(c,p,A)=>{let b=A.map(d=>d[0]),Y=null,ue=null,_e=null,q=null,X=Wn,Ce=Gi,Ee,ne,Ne=ve,tr=mi,$t=!1,pe=!1,Ae=!1,fe=0,qe=1/0,bt=!1,dt,it,st=!1,Dt=!1,Lt=!1,Wr=xo,So=[],_o=d=>{st||(d.preventDefault&&d.preventDefault(),ni(d),window.addEventListener("mousemove",ni),window.addEventListener("mouseup",Os),Pr(c,d))},Os=d=>{st||(dt=void 0,it=void 0,window.removeEventListener("mousemove",ni),window.removeEventListener("mouseup",Os),Wr&&p.classList.add(Je),zn(c,d))},Zh=(d,E)=>{if(b.length<=0)return;if(b.length===1)return b[0].isClicked(d)&&Wr&&p.classList.remove(Je),b[0];let ie=Jh(d);if(bt){let Fe=E,ar=Ds(Fe);ar!==void 0&&(Fe=Nr(Fe,ar)),ie?(dt=Fe,it=0,Wr&&p.classList.remove(Je)):dt!==void 0&&(it=Fe-dt,dt=Fe)}if(!Qh(d)&&!ie){for(let Fe of b)if(!(!Fe.isClicked(d)||Fe.disabled))return Wr&&p.classList.remove(Je),Fe;for(let Fe of b)if(Y===Fe)return Fe}let He=1/0,nt=null;for(let Fe of b){if(Fe.disabled)continue;let ar=Math.abs(E-Fe.percent);ar<He&&(He=ar,nt=Fe)}return nt},$o=()=>b.findIndex(d=>Y===d&&!d.disabled),ni=d=>{let E;if(Ne===re){let{height:He,top:nt}=p.getBoundingClientRect(),Fe=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;E=Math.min(Math.max(0,Fe-nt),He)*100/He}else{let{width:He,left:nt}=p.getBoundingClientRect(),Fe=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;E=Math.min(Math.max(0,Fe-nt),He)*100/He}if(($t||pe)&&(E=100-E),Y=Zh(d.target,E),Y&&Yh(b,Y),bt&&b.length>1&&it!==void 0){let He=b[0],nt=b[b.length-1],Fe=He.percent+it<0,ar=nt.percent+it>100;if(Fe||ar)return;for(let zs=0;zs<b.length;zs++)Tt(zs,b[zs].percent+it);return}let ie=$o();ie!==-1&&(Tt(ie,E),Y==null||Y.$pointer.focus())},Es=d=>{if(st||document.activeElement!==c||Y!=null&&Y.disabled)return;d.stopPropagation(),d.preventDefault();let E=d.deltaY<0,ie=$t||pe,He=E?!ie:ie,nt=$o();nt!==-1&&(He?Vi(nt,b[nt].percent):Yi(nt,b[nt].percent))},Co=d=>{st||Dt||(Ne===re?pe?Tt(d,100):Tt(d,0):$t?Yi(d,b[d].percent):Vi(d,b[d].percent))},Ao=d=>{st||Dt||(Ne===re?pe?Tt(d,0):Tt(d,100):$t?Vi(d,b[d].percent):Yi(d,b[d].percent))},Po=d=>{st||Dt||(Ne===re?pe?Yi(d,b[d].percent):Vi(d,b[d].percent):$t?Tt(d,100):Tt(d,0))},ko=d=>{st||Dt||(Ne===re?pe?Vi(d,b[d].percent):Yi(d,b[d].percent):$t?Tt(d,0):Tt(d,100))},Qh=d=>d.classList.contains("panel"),Jh=d=>d.classList.contains("panel-fill"),Vi=(d,E)=>{if(E===void 0)return;let ie=Ds(E);ie==null&&(ie=1),E-=ie,E<0&&(E=0),Tt(d,E)},Yi=(d,E)=>{if(E===void 0)return;let ie=Ds(E);ie==null&&(ie=1),E+=ie,E>100&&(E=100),Tt(d,E)},ai=()=>{!q||q.update({percents:Oo(),values:Eo(),$pointers:Do(),min:Lo(),max:To(),data:Gn(),step:Hn(),round:Yn(),type:Vn(),textMin:Ls(),textMax:Ts(),rightToLeft:Kn(),bottomToTop:Zn(),pointersOverlap:ta(),pointersMinDistance:qn(),pointersMaxDistance:Xn(),rangeDragging:ra(),disabled:Qn(),keyboardDisabled:Jn(),mousewheelDisabled:ea()})},ec=()=>{ai()},tc=d=>{if(!(Ae||b.length<=1||Ce===X))if(d===0){let E=qe*100/(Ce-X);return Math.max(0,b[d+1].percent-E)}else{let E=fe*100/(Ce-X);return Math.min(b[d-1].percent+E,100)}},rc=d=>{if(!(Ae||b.length<=1||Ce===X))if(d===b.length-1){let E=qe*100/(Ce-X);return Math.min(b[d-1].percent+E,100)}else{let E=fe*100/(Ce-X);return Math.max(0,b[d+1].percent-E)}},Ds=d=>{let E;if(typeof Ee=="function"){let ie=$e(0,100,X,Ce,d);E=Ee(ie,d)}else E=Ee;if(We(E)){let ie=Ce-X;return E=ie===0?0:E*100/ie,E}},vi=d=>{if(d===void 0)return;let E=$e(0,100,X,Ce,d);return ne!==void 0?ne[Math.round(E)]:si(E,tr)},Ls=()=>ne!==void 0?ne[X]:X,Ts=()=>ne!==void 0?ne[Ce]:Ce,Hn=()=>Ee,ic=d=>{var E;return d<=0||Ae?Ls():(E=vi(b[d-1].percent))!=null?E:""},sc=d=>{var E;return b.length<=1||d>=b.length-1||Ae?Ts():(E=vi(b[d+1].percent))!=null?E:""},Oo=()=>b.map(d=>d.percent),Eo=()=>b.map(d=>vi(d.percent)),Do=()=>b.map(d=>d.$pointer),Lo=()=>X,To=()=>Ce,Gn=()=>ne,Vn=()=>Ne,Yn=()=>tr,qn=()=>fe,Xn=()=>qe,nc=d=>So[d],Kn=()=>$t,Zn=()=>pe,Qn=()=>st,Jn=()=>Dt,ea=()=>Lt,ta=()=>Ae,ra=()=>bt,Tt=(d,E)=>{if(E===void 0)return;let ie=Ds(E);ie!==void 0&&(E=Nr(E,ie));let He=b[d];if(!He)return;let nt=He.updatePosition(E,tc(d),rc(d),Ne,$t,pe);ue==null||ue.updatePosition(Ne,b.map(Fe=>Fe.percent),$t,pe),ai();for(let Fe of b){let ar=vi(Fe.percent);ar!==void 0&&(Fe.setAttr("aria-valuenow",ar.toString()),Fe.setAttr("aria-valuetext",ar.toString()))}oc(),nt&&jn(c,b.map(Fe=>vi(Fe.percent)))},gr=()=>{for(let d=0;d<b.length;d++)Tt(d,b[d].percent)},ac=(d,E)=>{X=ne!==void 0?0:Pe(d,Wn),Ce=ne!==void 0?ne.length-1:Pe(E,Gi),Rs(X),Ms(Ce)},oc=()=>{var d,E;for(let ie=0;ie<b.length;ie++){let He=b[ie];He.setAttr("aria-valuemin",((d=ic(ie))!=null?d:"").toString()),He.setAttr("aria-valuemax",((E=sc(ie))!=null?E:"").toString())}},Rs=d=>{X=Pe(d,Wn),X>Ce&&(Ce=X+Gi),gr()},Ms=d=>{Ce=Pe(d,Gi),Ce<X&&(Ce=X+Gi),gr()},Ro=d=>{Ae=!0;for(let E=0;E<d.length;E++)Us(d[E],E);Ae=!1;for(let E=0;E<d.length;E++)Us(d[E],E)},Us=(d,E)=>{let ie;ne!==void 0?(ie=d==null?0:G(d,ne),ie===-1&&(ie=0)):(ie=Pe(d,X),ie<X&&(ie=X),ie>Ce&&(ie=Ce));let He=$e(X,Ce,0,100,ie);Tt(E,He)},Is=d=>{if(d==null){Ee=void 0;return}if(typeof d=="function"){Ee=d,gr();return}if(We(d)){Ee=Pe(d,1);let E=Math.abs(Ce-X);Ee>E&&(Ee=void 0),gr();return}Ee=void 0},ia=d=>{Ae=d,gr()},sa=d=>{(!We(d)||d<0)&&(d=0),fe=d},na=d=>{(!We(d)||d<0)&&(d=1/0),qe=d},aa=d=>{st=d,p.classList.toggle("disabled",st),st?p.setAttribute("aria-disabled","true"):p.hasAttribute("aria-disabled")&&p.removeAttribute("aria-disabled")},Mo=d=>{Dt=d},Uo=d=>{Lt=d,Lt?document.removeEventListener("wheel",Es):document.addEventListener("wheel",Es,{passive:!1})},oa=d=>{if(d==null){ne=void 0;return}if(ne=H(d),ne===void 0||ne.length<=0){ne=void 0;return}Rs(0),Ms(ne.length-1),Ee===void 0&&Is(1)},la=d=>{var E;typeof d=="string"?Ne=d.trim().toLowerCase()===re?re:ve:Ne=ve;let ie=(E=c.shadowRoot)==null?void 0:E.querySelector(".range-slider-box");if(!ie)return;ie.className=`range-slider-box type-${Ne}`,gr();let He=Ne===re?"vertical":"horizontal";for(let nt of b)nt.setAttr("aria-orientation",He)},ha=d=>{$t=d,b.length>1&&wo(b,$t,c),gr(),ai()},ca=d=>{pe=d,b.length>1&&wo(b,pe,c),gr(),ai()},ua=d=>{tr=Pe(d,mi),tr<0&&(tr=mi),ai()},Io=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(Wr=void 0,p.style.removeProperty(he),p.classList.remove(Je)):(Wr=d.toString(),p.style.setProperty(he,Wr),p.classList.add(Je))},Fo=(d,E)=>{let ie=b[d];!ie||(ie.setAttr("aria-label",E),So[d]=E)},Fs=d=>{if(dt=void 0,b.length<=1){bt=!1,p.classList.remove(Oe);return}bt=d,p.classList.toggle(Oe,bt)},lc=()=>{aa(Be(c.getAttribute(I))),Dt=Be(c.getAttribute(J)),Lt=Be(c.getAttribute(W));let d=F(c,/^pointer([0-9]*)-disabled$/,E=>Be(E));for(let E of d){let ie=E[0];!b[ie]||(b[ie].disabled=E[1])}},hc=()=>{let d=F(c,/^aria-label([0-9]*)$/);for(let E of d){let ie=E[0];Fo(ie,E[1])}},cc=d=>{let E=b.length,ie=b[E-1].$pointer,He=ie.cloneNode(!0);ie.after(He);let nt=R(c,He,E);return nt.setCallbacks(Co,Ao,Po,ko),b.push(nt),Us(d,E),gr(),ai(),E},uc=()=>{let d=b.length,E=b[d-1];return E?(E.destroy(),b.pop(),b.length<=1&&Fs(!1),gr(),ai(),d-1):-1};return(()=>{var d,E;for(let He of b)He.setCallbacks(Co,Ao,Po,ko);let ie=(d=c.shadowRoot)==null?void 0:d.querySelector(".panel-fill");ie&&(ue=V(ie)),la(c.getAttribute($)),ha(Be(c.getAttribute(B))),ca(Be(c.getAttribute(z))),ac(c.getAttribute(f),c.getAttribute(y)),Is(c.getAttribute(x)),oa(c.getAttribute(m)),Ro(A.map(He=>He[1])),ia(Be(c.getAttribute(a))),sa(Pe(c.getAttribute(o),0)),na(Pe(c.getAttribute(h),1/0)),Fs(Be(c.getAttribute(u))),ua(Pe(c.getAttribute(_),mi)),lc(),hc(),_e=Me(c,p,b),Io((E=c.getAttribute(ot))!=null?E:xo),p.addEventListener("mousedown",_o),p.addEventListener("mouseup",Os),p.addEventListener("touchmove",ni),p.addEventListener("touchstart",ni),Lt||document.addEventListener("wheel",Es,{passive:!1}),q=Et(c,ec,{setValues:Ro,setMin:Rs,setMax:Ms,setStep:Is,setPointersOverlap:ia,setPointersMinDistance:sa,setPointersMaxDistance:na,setDisabled:aa,setType:la,setRightToLeft:ha,setBottomToTop:ca,setRound:ua,setKeyboardDisabled:Mo,setMousewheelDisabled:Uo,setRangeDragging:Fs,setData:oa},{getPercents:Oo,getValues:Eo,getPointerElements:Do,getMin:Lo,getMax:To,getStep:Hn,getData:Gn,getType:Vn,getRound:Yn,getTextMin:Ls,getTextMax:Ts,isRightToLeft:Kn,isBottomToTop:Zn,isDisabled:Qn,isKeyboardDisabled:Jn,isMousewheelDisabled:ea,isPointersOverlap:ta,isRangeDraggingEnabled:ra,getPointersMinDistance:qn,getPointersMaxDistance:Xn}),q.init()})(),{get pointers(){return b},get styles(){return _e},get pluginsManager(){return q},get min(){return Ls()},get max(){return Ts()},get step(){return Hn()},get pointersOverlap(){return ta()},set pointersOverlap(d){ia(d)},get pointersMinDistance(){return qn()},set pointersMinDistance(d){sa(d)},get pointersMaxDistance(){return Xn()},set pointersMaxDistance(d){na(d)},get disabled(){return Qn()},set disabled(d){aa(d)},get data(){return Gn()},get type(){return Vn()},set type(d){la(d)},get rightToLeft(){return Kn()},set rightToLeft(d){ha(d)},get bottomToTop(){return Zn()},set bottomToTop(d){ca(d)},get round(){return Yn()},set round(d){ua(d)},get animateOnClick(){return Wr},set animateOnClick(d){Io(d)},get keyboardDisabled(){return Jn()},set keyboardDisabled(d){Mo(d)},get mousewheelDisabled(){return ea()},set mousewheelDisabled(d){Uo(d)},get rangeDragging(){return ra()},set rangeDragging(d){Fs(d)},setMin:Rs,setMax:Ms,setValue:Us,setStep:Is,setData:oa,getTextValue:vi,setAriaLabel:Fo,getAriaLabel:nc,addPointer:cc,removePointer:uc,destroy:()=>{p.removeEventListener("mousedown",_o),p.removeEventListener("mouseup",Os),p.removeEventListener("touchmove",ni),p.removeEventListener("touchstart",ni),document.removeEventListener("wheel",Es);for(let d of b)d.destroy();q==null||q.destroy()}}},Xh=(c,p,A)=>{let b=Ie.find(([q,X,Ce,Ee])=>X.replace("#","")===p.replace(/\d+/g,""));if(b&&c.styles){let[q,X,Ce,Ee]=b,ne=p.replace(/\D/g,"").trim(),Ne=ne===""||ne==="0"||ne==="1"?0:Pe(ne,0)-1;c.styles.setStyle(q,A,Ne);return}switch(c&&c.pluginsManager&&c.pluginsManager.onAttrChange(p,A),p){case f:{c.setMin(A);break}case y:{c.setMax(A);break}case x:{c.setStep(A);break}case a:{c.pointersOverlap=Be(A);break}case o:{c.pointersMinDistance=Pe(A,0);break}case u:{c.rangeDragging=Be(A);break}case h:{c.pointersMaxDistance=Pe(A,1/0);break}case I:{c.disabled=Be(A);break}case J:{c.keyboardDisabled=Be(A);break}case W:{c.mousewheelDisabled=Be(A);break}case m:{c.setData(A);break}case $:{c.type=A;break}case B:{c.rightToLeft=Be(A);break}case z:{c.bottomToTop=Be(A);break}case _:{c.round=Pe(A,mi);break}case C:{c.styles&&(c.styles.theme=A);break}case ot:{c.animateOnClick=A;break}}let Y=null;if(/^value([0-9]*)$/.test(p)&&(Y="value"),/^pointer([0-9]*)-disabled$/.test(p)&&(Y="pointer-disabled"),/^aria-label([0-9]*)$/.test(p)&&(Y="aria-label"),/^pointer([0-9]*)-shape$/.test(p)&&(Y="pointer-shape"),!Y)return;let ue=p.replace(/\D/g,"").trim(),_e=ue===""||ue==="0"||ue==="1"?0:Pe(ue,0)-1;switch(Y){case"value":{c.setValue(A,_e);break}case"pointer-disabled":{let q=c==null?void 0:c.pointers[_e];if(!q)return;q.disabled=Be(A);break}case"aria-label":{c.setAriaLabel(_e,A);break}case"pointer-shape":{c.styles&&c.styles.setPointerShape(_e,A);break}}},Kh=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(c){this.slider&&this.slider.setStep(c)}get step(){var c;return(c=this.slider)==null?void 0:c.step}set disabled(c){this.slider&&(this.slider.disabled=c)}get disabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.disabled)!=null?p:!1}set data(c){var p;(p=this.slider)==null||p.setData(c)}get data(){var c;return(c=this.slider)==null?void 0:c.data}set min(c){var p;(p=this.slider)==null||p.setMin(c)}get min(){var c;return(c=this.slider)==null?void 0:c.min}set max(c){var p;(p=this.slider)==null||p.setMax(c)}get max(){var c;return(c=this.slider)==null?void 0:c.max}set round(c){!this.slider||(this.slider.round=c)}get round(){var c,p;return(p=(c=this.slider)==null?void 0:c.round)!=null?p:mi}set type(c){!this.slider||(this.slider.type=c??ve)}get type(){var c;return((c=this.slider)==null?void 0:c.type)||ve}set pointersOverlap(c){!this.slider||(this.slider.pointersOverlap=c)}get pointersOverlap(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersOverlap)!=null?p:!1}set pointersMinDistance(c){!this.slider||(this.slider.pointersMinDistance=c)}get pointersMinDistance(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersMinDistance)!=null?p:0}set pointersMaxDistance(c){!this.slider||(this.slider.pointersMaxDistance=c)}get pointersMaxDistance(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersMaxDistance)!=null?p:1/0}set theme(c){!this.slider||!this.slider.styles||(this.slider.styles.theme=c)}get theme(){var c,p,A;return(A=(p=(c=this.slider)==null?void 0:c.styles)==null?void 0:p.theme)!=null?A:null}set rtl(c){!this.slider||(this.slider.rightToLeft=c)}get rtl(){var c,p;return(p=(c=this.slider)==null?void 0:c.rightToLeft)!=null?p:!1}set btt(c){!this.slider||(this.slider.bottomToTop=c)}get btt(){var c,p;return(p=(c=this.slider)==null?void 0:c.bottomToTop)!=null?p:!1}set keyboardDisabled(c){!this.slider||(this.slider.keyboardDisabled=c)}get keyboardDisabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.keyboardDisabled)!=null?p:!1}set mousewheelDisabled(c){!this.slider||(this.slider.mousewheelDisabled=c)}get mousewheelDisabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.mousewheelDisabled)!=null?p:!1}set animateOnClick(c){!this.slider||(this.slider.animateOnClick=c)}get animateOnClick(){var c;return(c=this.slider)==null?void 0:c.animateOnClick}get rangeDragging(){var c,p;return(p=(c=this.slider)==null?void 0:c.rangeDragging)!=null?p:!1}set rangeDragging(c){this.slider&&(this.slider.rangeDragging=Be(c))}get externalCSSList(){return this._externalCSSList}addPointer(c){var p,A;if(!this.slider)return;let b=(A=(p=this.slider)==null?void 0:p.addPointer(c))!=null?A:0;bo(this,this.slider,b,`value${b+1}`,`ariaLabel${b+1}`,`pointerShape${b+1}`,`pointer${b+1}Disabled`)}removePointer(){var c;!this.slider||(c=this.slider)==null||c.removePointer()}addCSS(c){if(!this.shadowRoot)return;let p=document.createElement("style");p.textContent=c,this.shadowRoot.appendChild(p)}connectedCallback(){var c,p;if(!this.shadowRoot)return;this._externalCSSList=ge(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let A=(c=this.shadowRoot)==null?void 0:c.querySelector(".pointer");if(!A)return;let b=(p=this.shadowRoot)==null?void 0:p.getElementById("range-slider");if(!b)return;let Y=Gh(this,A);this.slider=qh(this,b,Y),Vh(this,this.slider),this._observer=new MutationObserver(ue=>{ue.forEach(_e=>{var q;if(!this.slider||_e.type!=="attributes")return;let X=_e.attributeName;!X||Xh(this.slider,X,(q=this.getAttribute(X))!=null?q:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Bn=Kh;window.tcRangeSlider=Bn,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Bn),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Bn{})})();(()=>{var r=(o,h,u,m,f)=>{let y=h-o;return y===0?u:(m-u)*(f-o)/y+u},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,h)=>e(o)?Number(o):h,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,h=null,u=null,m=null,f=null,y=!1,x=s,_=n,$=()=>{var w;let P=(w=o==null?void 0:o.shadowRoot)==null?void 0:w.querySelector("#range-slider");u=document.createElement("div"),u.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),u.append(m),f=document.createElement("div"),f.classList.add("mark-values"),u.append(f),P.append(u)},C=()=>{!h||!u||u.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},B=()=>{var w;if(!u||!h)return;let P=h.getMin(),O=h.getMax(),k=h.getType()==="vertical",N=h.isRightToLeft()||h.isBottomToTop();for(let T=0;T<x;T++){let M=document.createElement("div");M.classList.add("mark",`mark-${T}`);let Z=x===0?0:T*100/(x-1);k?N?M.style.top=`${100-Z}%`:M.style.top=`${Z}%`:N?M.style.left=`${100-Z}%`:M.style.left=`${Z}%`,m==null||m.append(M)}let L=h.getData();for(let T=0;T<_;T++){let M=document.createElement("div");M.classList.add("mark-value",`mark-value-${T}`);let Z=_===0?0:T*100/(_-1),le=r(0,_-1,P,O,T);M.textContent=(L?(w=L[Math.round(le)])!=null?w:"":le).toString(),k?N?M.style.top=`${100-Z}%`:M.style.top=`${Z}%`:N?M.style.left=`${100-Z}%`:M.style.left=`${Z}%`,f==null||f.append(M)}},z=(w,P)=>{se(),x=w,_=P,x<=0&&(x=s),_<=0&&(_=n),$(),B(),C()},I=w=>{y=w,y?($(),B(),C()):se()},J=w=>{!u||u.style.setProperty("--marks-color",w)},W=w=>{!u||u.style.setProperty("--values-color",w)},se=()=>{u==null||u.remove()};return{get name(){return"Marks"},init:(w,P,O,k)=>{var N,L;h=k,o=w,y=i(o.getAttribute("marks")),y&&(z(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),J((N=o.getAttribute("marks-color"))!=null?N:"#cbd5e1"),W((L=o.getAttribute("marks-values-color"))!=null?L:"#475569"))},onAttrChange:(w,P)=>{w==="marks"&&I(i(P)),w==="marks-count"&&z(t(P,s),_),w==="marks-values-count"&&z(x,t(P,n)),w==="marks-color"&&J(P),w==="marks-values-color"&&W(P)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return y??!1},set:w=>{I(i(w))}}},{name:"marksCount",attributes:{get(){return x??s},set:w=>{z(t(w,s),_)}}},{name:"marksValuesCount",attributes:{get(){return x??s},set:w=>{z(x,t(w,n))}}},{name:"marksColor",attributes:{get(){return u==null?void 0:u.style.getPropertyValue("--marks-color")},set:w=>{J(w)}}},{name:"markValuesColor",attributes:{get(){return u==null?void 0:u.style.getPropertyValue("--values-color")},set:w=>{W(w)}}}],destroy:se,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Yg=Object.defineProperty,qg=Object.getOwnPropertyDescriptor,Cr=(r,e,t,i)=>{for(var s=i>1?void 0:i?qg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yg(e,t,s),s};let ir=class extends zt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Ge(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)})}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?v`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:v`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Xe(this.sliderRef)}
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

        `}};ir.styles=be`

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
    
    `;Cr([we({context:Za,subscribe:!0}),S()],ir.prototype,"min",2);Cr([we({context:Qa,subscribe:!0}),S()],ir.prototype,"max",2);Cr([we({context:On,subscribe:!0}),S()],ir.prototype,"from",2);Cr([we({context:En,subscribe:!0}),S()],ir.prototype,"to",2);Cr([S()],ir.prototype,"hasFixedFrom",2);Cr([S()],ir.prototype,"hasFixedTo",2);Cr([we({context:zi,subscribe:!0}),S()],ir.prototype,"palette",2);Cr([S()],ir.prototype,"sliderRef",2);Cr([S()],ir.prototype,"initialised",2);ir=Cr([te("registry-range-slider")],ir);var Xg=Object.defineProperty,Kg=Object.getOwnPropertyDescriptor,Cs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xg(e,t,s),s};let Li=class extends zt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var r,e;return this.from===void 0||this.to===void 0?j:v`
            <div>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Cs([we({context:On,subscribe:!0})],Li.prototype,"from",2);Cs([we({context:En,subscribe:!0})],Li.prototype,"to",2);Cs([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],Li.prototype,"fixed",2);Cs([g({type:String,reflect:!0,attribute:!0})],Li.prototype,"separator",2);Li=Cs([te("registry-range-display")],Li);var Zg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,Rn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zg(e,t,s),s};let Ti=class extends zt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return v`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":j}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(r=>v`
                            <div class="histogram-bar">
                                <div style="height: ${r.height}%" class="histogram-bar-inner"></div>
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
        `}};Ti.styles=be`

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


    `;Rn([S()],Ti.prototype,"histogram",2);Rn([g({type:Boolean,reflect:!0})],Ti.prototype,"interactive",2);Rn([g({type:String,reflect:!0})],Ti.prototype,"height",2);Ti=Rn([te("registry-histogram")],Ti);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class un extends Ba{constructor(e){if(super(e),this.it=j,e.type!==Wa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===Yr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}un.directiveName="unsafeHTML",un.resultType=1;const Wt=xn(un);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oa extends un{}Oa.directiveName="unsafeSVG",Oa.resultType=2;const Bh=xn(Oa);var Jg=Object.defineProperty,em=Object.getOwnPropertyDescriptor,Mn=(r,e,t,i)=>{for(var s=i>1?void 0:i?em(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jg(e,t,s),s};let Ri=class extends pi{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?j:v`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:t.key===this.value.key};return v`
                        
                        <button 
                            class=${Ht(i)} 
                            @click=${()=>{this.group.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Bh(t.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Ri.styles=be`

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

    `;Mn([we({context:Dn,subscribe:!0}),S()],Ri.prototype,"value",2);Mn([we({context:Ln,subscribe:!0}),S()],Ri.prototype,"tools",2);Mn([S()],Ri.prototype,"hint",2);Ri=Mn([te("group-tool-buttons")],Ri);var tm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,lo=(r,e,t,i)=>{for(var s=i>1?void 0:i?rm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tm(e,t,s),s};let os=class extends pi{connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?j:v`
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return v`
                        
                        <button 
                            class=${Ht(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${e.name}
                        >
                            ${Bh(e.icon)}
                        </button>
                        
                    `})}
        `}};os.styles=be`

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

    `;lo([we({context:Dn,subscribe:!0}),S()],os.prototype,"value",2);lo([we({context:Ln,subscribe:!0}),S()],os.prototype,"tools",2);os=lo([te("group-tool-bar")],os);var im=Object.defineProperty,As=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&im(e,t,s),s};class yt extends pi{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),e=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}As([we({context:Tn,subscribe:!0}),S()],yt.prototype,"parentFileProviderElement");As([we({context:Rh,subscribe:!0}),S()],yt.prototype,"loading");As([we({context:eo,subscribe:!0}),S()],yt.prototype,"file");As([we({context:Th,subscribe:!0}),S()],yt.prototype,"failure");As([we({context:Uh,subscribe:!0}),S()],yt.prototype,"recording");var sm=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,am=(r,e,t,i)=>{for(var s=i>1?void 0:i?nm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sm(e,t,s),s};let Ea=class extends yt{constructor(){super(...arguments),this.container=Ge()}getContainer(){return this.container.value}onInstanceCreated(r){const e=this.getContainer();if(e!==void 0)r.mountToDom(e),r.draw();else throw this.log("kontejner!",e),new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(r){var e;if(super.updated(r),r.has("file")){const t=r.get("file"),i=this.file;t===void 0&&i!==void 0&&this.container.value&&this.file&&((e=this.file.dom)==null?void 0:e.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return v`
            <div ${Xe(this.container)} class=${Ht(t)} part="file-canvas-container">
            
                ${this.loading===!0?v`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:r===!0?v`<div class="error-wrapper">
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
                        </div>`:j}
            
            </div>
        
        `}};Ea.styles=be`

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
    `;Ea=am([te("file-canvas")],Ea);var om=Object.defineProperty,lm=Object.getOwnPropertyDescriptor,hm=(r,e,t,i)=>{for(var s=i>1?void 0:i?lm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&om(e,t,s),s};let Da=class extends yt{onInstanceCreated(r){}onFailure(r){}render(){return this.file?v`
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
        `:j}};Da.styles=be`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Da=hm([te("file-share-button")],Da);var cm=Object.defineProperty,um=Object.getOwnPropertyDescriptor,dm=(r,e,t,i)=>{for(var s=i>1?void 0:i?um(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cm(e,t,s),s};let La=class extends yt{onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?v`
            <thermal-dialog label="File info">
                <slot name="invoker" slot="invoker">
                    <thermal-button>File info</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${Wt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${Wt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?Wt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):j}

                        ${Wt(this.renderRow("Time",Ze.human(this.file.timestamp)))}

                        ${Wt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${Wt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Wt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${Wt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${Wt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${Wt(this.renderRow("Type",this.file.reader.parser.name))}
                    ${Wt(this.renderRow("Description",this.file.reader.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>v`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:j}};La.styles=be`

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
    
    `;La=dm([te("file-info-button")],La);var pm=Object.defineProperty,fm=Object.getOwnPropertyDescriptor,gm=(r,e,t,i)=>{for(var s=i>1?void 0:i?fm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pm(e,t,s),s};let Ta=class extends yt{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?j:v`

            <thermal-dropdown variant="foreground">

                <slot name="invoker" slot="invoker">
                    <div class="button">
                        ${this.file?"Download":"Načítám..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">Download original file (${this.file.reader.parser.extensions[0].extension.toUpperCase()})</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.canvasAsPng()}>Export current frame as PNG image</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?v`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:j}
            
            </thermal-dropdown>

        
        `}};Ta.styles=be`

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
    
    `;Ta=gm([te("file-download-dropdown")],Ta);var mm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,Fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?vm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mm(e,t,s),s};let qt=class extends yt{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Ge(),this.barRef=Ge(),this.containerRef=Ge(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<qt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}handleBarHover(r){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(t)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,o;const r=this.file;if(r===void 0)return j;if(r.duration===0)return j;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return v`
            <div class="${Ht(e)}" ${Xe(this.containerRef)}>


                ${r!==void 0?v`
                        <div class="container">

                            <div class="${Ht(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


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


                            <div class="${Ht(s)}"  ${Xe(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Xe(this.barRef)}></div>
                                    ${this.cursor?v`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(h=>v`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:j}

            
            
            </div>

            ${this.currentFrame!==void 0?v`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${Qe(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${Qe(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(o=this.file)==null?void 0:o.frameCount}</span>
                        </div>
                    </div>`:j}

          `}};qt.collapseWidth=500;qt.styles=be`
    
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
    
    `;Fr([we({context:no,subscribe:!0}),S()],qt.prototype,"playing",2);Fr([we({context:Ss,subscribe:!0}),S()],qt.prototype,"currentFrame",2);Fr([we({context:so,subscribe:!0}),S()],qt.prototype,"duration",2);Fr([we({context:Ih,subscribe:!0}),S()],qt.prototype,"mayStop",2);Fr([we({context:ro,subscribe:!0})],qt.prototype,"cursor",2);Fr([we({context:io,subscribe:!0})],qt.prototype,"cursorSetter",2);Fr([we({context:ao,subscribe:!0})],qt.prototype,"markers",2);Fr([S()],qt.prototype,"collapsed",2);qt=Fr([te("file-timeline")],qt);var ym=Object.defineProperty,bm=Object.getOwnPropertyDescriptor,ho=(r,e,t,i)=>{for(var s=i>1?void 0:i?bm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ym(e,t,s),s};let ls=class extends yt{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?j:v`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(th).map(([r])=>v`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&(console.log(t.parentElement),t.parentElement instanceof Lr&&t.parentElement.setClose())}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};ls.styles=be`

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
    
    `;ho([g({type:String,reflect:!0})],ls.prototype,"enabled",2);ho([we({context:Mh,subscribe:!0}),S()],ls.prototype,"playbackSpeed",2);ls=ho([te("file-playback-speed-dropdown")],ls);var wm=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,co=(r,e,t,i)=>{for(var s=i>1?void 0:i?xm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wm(e,t,s),s};let hs=class extends yt{constructor(){super(...arguments),this.container=Ge()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return v`
            <div class="container">
            
                <video ${Xe(this.container)} preload="metadata">

                    ${this.url===void 0?j:v`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};hs.styles=be`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;co([we({context:Ss,subscribe:!0}),S()],hs.prototype,"currentFrame",2);co([g({type:String,reflect:!0,attribute:!0})],hs.prototype,"url",2);hs=co([te("file-video")],hs);const Sm=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),Qe(t,"mm:ss:SSS")},_m=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var $m=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,Ar=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$m(e,t,s),s};const uo={fromAttribute:r=>r===null?null:_m(r),toAttribute:r=>r===null?null:Sm(r)};let cr=class extends yt{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),this.log(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return j}};Ar([we({context:no,subscribe:!0}),S()],cr.prototype,"playing",2);Ar([we({context:to,subscribe:!0}),S()],cr.prototype,"ms",2);Ar([g({type:String,reflect:!0,attribute:!0})],cr.prototype,"label",2);Ar([g({type:String,reflect:!0,attribute:!0,converter:uo})],cr.prototype,"start",2);Ar([g({type:String,reflect:!0,attribute:!0,converter:uo})],cr.prototype,"end",2);Ar([g({type:String,reflect:!0,attribute:!0,converter:uo})],cr.prototype,"dur",2);Ar([g({type:String,reflect:!0,attribute:!0})],cr.prototype,"active",2);Ar([g({type:String,reflect:!0,attribute:!0})],cr.prototype,"pauseOnActivate",2);Ar([g({type:String,reflect:!0,attribute:!0})],cr.prototype,"say",2);cr=Ar([te("file-marker")],cr);var Am=Object.defineProperty,Pm=Object.getOwnPropertyDescriptor,gi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Am(e,t,s),s};let Mr=class extends yt{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return v`

            <div class="${Ht(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Mr.styles=be`
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


    `;gi([we({context:so,subscribe:!0}),S()],Mr.prototype,"duration",2);gi([we({context:Ss,subscribe:!0}),S()],Mr.prototype,"currentFrame",2);gi([we({context:to,subscribe:!0}),S()],Mr.prototype,"ms",2);gi([g({type:Number,reflect:!0,attribute:!0})],Mr.prototype,"start",2);gi([g({type:Number,reflect:!0,attribute:!0})],Mr.prototype,"end",2);gi([S()],Mr.prototype,"active",2);Mr=gi([te("file-marker-timeline")],Mr);var km=Object.defineProperty,Om=Object.getOwnPropertyDescriptor,Hh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Om(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&km(e,t,s),s};let dn=class extends yt{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return v`
            <div>


            ${this.markers.map(r=>r.active?v`<div class="item">
                    <h2>${r.label}</h2>
                    ${Wt(r.innerHTML)}
                    </div>`:j)}

            
            
            </div>

          `}};dn.styles=be`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Hh([we({context:ao,subscribe:!0})],dn.prototype,"markers",2);dn=Hh([te("file-marks-content")],dn);var Em=Object.defineProperty,Dm=Object.getOwnPropertyDescriptor,po=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Em(e,t,s),s};let cs=class extends ft{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return v`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};cs.styles=be`

    
    `;po([g()],cs.prototype,"analysis",2);po([S()],cs.prototype,"name",2);cs=po([te("analysis-name")],cs);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Lm(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Tm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,fo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tm(e,t,s),s};let us=class extends ft{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return v`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?j:v`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Lm(qs,r=>v`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};us.styles=be`

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
    
    `;fo([g()],us.prototype,"analysis",2);fo([S()],us.prototype,"color",2);us=fo([te("analysis-color")],us);var Mm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,nr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Um(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mm(e,t,s),s};let Ut=class extends ft{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

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
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setLeft(e)})}
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
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setRight(e)})}
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
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setTop(e)})}
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
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setBottom(e)})}
                    />
                </thermal-field>
                

            </div>
    
        
        `}};Ut.styles=be`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;nr([g()],Ut.prototype,"analysis",2);nr([S()],Ut.prototype,"color",2);nr([S()],Ut.prototype,"top",2);nr([S()],Ut.prototype,"left",2);nr([S()],Ut.prototype,"width",2);nr([S()],Ut.prototype,"height",2);nr([S()],Ut.prototype,"type",2);nr([S()],Ut.prototype,"right",2);nr([S()],Ut.prototype,"bottom",2);nr([S()],Ut.prototype,"maxX",2);nr([S()],Ut.prototype,"maxY",2);Ut=nr([te("edit-area")],Ut);var Im=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,Hi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Im(e,t,s),s};let Qr=class extends ft{constructor(){super(...arguments),this.topInputRef=Ge(),this.leftInputRef=Ge()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

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
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setTop(e)})}
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
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setLeft(e)})}
                    />
                </thermal-field>

            </div>
        
        `}};Qr.styles=be`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Hi([g()],Qr.prototype,"analysis",2);Hi([S()],Qr.prototype,"top",2);Hi([S()],Qr.prototype,"left",2);Hi([S()],Qr.prototype,"maxX",2);Hi([S()],Qr.prototype,"maxY",2);Qr=Hi([te("edit-point")],Qr);var zm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Un=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zm(e,t,s),s};let ds=class extends ft{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return v`

            <thermal-dialog label="Edit ${this.type} analysis">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof or?v`<edit-point .analysis=${this.analysis}></edit-point>`:v`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Un([g()],ds.prototype,"analysis",2);Un([S()],ds.prototype,"name",2);Un([S()],ds.prototype,"type",2);ds=Un([te("file-analysis-edit")],ds);var jm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,Zt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jm(e,t,s),s};let Pt=class extends yt{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=Ge(),this.graphRef=Ge(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return v`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&v`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&v`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${Xe(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?v`<thermal-chart 
                        ${Xe(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:j}
            </div>

            

            </div>
        
        `}};Pt.styles=be`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Zt([S()],Pt.prototype,"hydrated",2);Zt([g({reflect:!0})],Pt.prototype,"graphWidth",2);Zt([g({reflect:!0})],Pt.prototype,"graphHeight",2);Zt([S()],Pt.prototype,"graphs",2);Zt([we({context:Ss,subscribe:!0})],Pt.prototype,"currentFrame",2);Zt([we({context:ro,subscribe:!0})],Pt.prototype,"cursor",2);Zt([we({context:io,subscribe:!0})],Pt.prototype,"cursorSetter",2);Zt([S()],Pt.prototype,"shadowLeft",2);Zt([S()],Pt.prototype,"shadowTop",2);Zt([S()],Pt.prototype,"shadowWidth",2);Zt([S()],Pt.prototype,"shadowHeight",2);Zt([we({context:Pn,subscribe:!0})],Pt.prototype,"graphSmooth",2);Pt=Zt([te("file-analysis-graph")],Pt);var Bm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bm(e,t,s),s};let ur=class extends ft{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor,this.dimension=t.width+"x"+t.height,this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof or?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),t.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),t.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,i=>{this.color=i}),t.onSetName.set(this.UUID,i=>{this.name=i})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return v`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?v`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"};"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

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
        
        `}};ur.styles=be`
    
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

    `;zr([g()],ur.prototype,"analysis",2);zr([S()],ur.prototype,"value",2);zr([S()],ur.prototype,"graph",2);zr([S()],ur.prototype,"may",2);zr([S()],ur.prototype,"dimension",2);zr([S()],ur.prototype,"color",2);zr([g({type:Boolean,reflect:!0,attribute:!0})],ur.prototype,"selected",2);zr([S()],ur.prototype,"name",2);ur=zr([te("file-analysis-table-row")],ur);var Gm=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,In=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gm(e,t,s),s};let Mi=class extends yt{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?j:v`

        <div class="overflow">

        <table>


            <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

            <thead>

                <tr>
                    <th
                        class="all ${this.allSelected?"yes":"no"}"
                        @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                    >
                        <u aria-hidden="true"></u>
                        <span>Analysis</span>
                    </th>
                    <th>Avg</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Size</th>
                    <th style="padding-top: 0; padding-bottom: 0;">
                        ${this.hasHighlightedData?v`<thermal-button variant="foreground" @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:j}
                    </th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map(r=>v`
                                <file-analysis-table-row
                                    .analysis=${r}
                                ></file-analysis-table-row>
                            `)}
            
            </tbody>

            </table>

            </div>
        `}};Mi.styles=be`
    
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

        



    `;In([S()],Mi.prototype,"analysis",2);In([S()],Mi.prototype,"allSelected",2);In([S()],Mi.prototype,"hasHighlightedData",2);Mi=In([te("file-analysis-table")],Mi);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=r=>r??j;var Ym=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,ri=(r,e,t,i)=>{for(var s=i>1?void 0:i?qm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ym(e,t,s),s};let Sr=class extends yt{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(r){this.recorded=Ze.human(r.timestamp)}onFailure(){}render(){return v`
        <thermal-app author=${ce(this.author)} recorded=${ce(this.recorded)} license=${ce(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?v`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:j}
          
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
                  `:j}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:j}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:j}

            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?v`<file-analysis-graph slot="post"></file-analysis-graph>`:j}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};Sr.styles=be`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;ri([g({type:String,reflect:!0,attribute:!0})],Sr.prototype,"showembed",2);ri([g({type:String,reflect:!0,attribute:!0})],Sr.prototype,"showabout",2);ri([g({type:String,reflect:!0,attribute:!0})],Sr.prototype,"showfullscreen",2);ri([g()],Sr.prototype,"author",2);ri([g()],Sr.prototype,"recorded",2);ri([g()],Sr.prototype,"license",2);ri([g()],Sr.prototype,"label",2);Sr=ri([te("file-app")],Sr);var Xm=Object.defineProperty,Ke=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Xm(e,t,s),s};class Ve extends ft{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=Ge()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}Ke([g({type:String,reflect:!0})],Ve.prototype,"url");Ke([g({type:String,reflect:!0})],Ve.prototype,"visible");Ke([g({type:String,reflect:!0,attribute:!0})],Ve.prototype,"palette");Ke([g({type:Number,reflect:!0,attribute:!0})],Ve.prototype,"opacity");Ke([g({type:Number,reflect:!0})],Ve.prototype,"from");Ke([g({type:Number,reflect:!0})],Ve.prototype,"to");Ke([g()],Ve.prototype,"author");Ke([g()],Ve.prototype,"recorded");Ke([g()],Ve.prototype,"license");Ke([g()],Ve.prototype,"label");Ke([g({type:String,reflect:!1,attribute:!0})],Ve.prototype,"showembed");Ke([g({type:String,reflect:!1,attribute:!0})],Ve.prototype,"showabout");Ke([g({type:String,reflect:!1})],Ve.prototype,"showfullscreen");Ke([g({type:String,reflect:!0})],Ve.prototype,"analysis1");Ke([g({type:String,reflect:!0})],Ve.prototype,"analysis2");Ke([g({type:String,reflect:!0})],Ve.prototype,"analysis3");Ke([g({type:String,reflect:!0})],Ve.prototype,"analysis4");Ke([g({type:String,reflect:!0})],Ve.prototype,"analysis5");Ke([g({type:String,reflect:!0})],Ve.prototype,"analysis6");Ke([g({type:String,reflect:!0})],Ve.prototype,"analysis7");Ke([g({type:String,reflect:!0})],Ve.prototype,"ms");Ke([g({type:String,reflect:!0})],Ve.prototype,"speed");Ke([S()],Ve.prototype,"hasGraph");Ke([S()],Ve.prototype,"hasAnalysis");Ke([S()],Ve.prototype,"isSequence");var Km=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,Qm=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Km(e,t,s),s};let wl=class extends Ve{render(){return this.url===""?j:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${ce(this.from)}
        to=${ce(this.to)}
        opacity=${ce(this.opacity)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}" 
            visible=${ce(this.visible)}
            analysis1=${ce(this.analysis1)}
            analysis2=${ce(this.analysis2)}
            analysis3=${ce(this.analysis3)}
            analysis4=${ce(this.analysis4)}
            analysis5=${ce(this.analysis5)}
            analysis6=${ce(this.analysis6)}
            analysis7=${ce(this.analysis7)}
            speed=${ce(this.speed)}
          >

              <file-app 
                author=${ce(this.author)} 
                recorded=${ce(this.recorded)} 
                license=${ce(this.license)}
                label=${ce(this.label)}  
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};wl=Qm([te("thermal-file-app")],wl);var Jm=Object.defineProperty,ev=Object.getOwnPropertyDescriptor,Qt=(r,e,t,i)=>{for(var s=i>1?void 0:i?ev(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jm(e,t,s),s};let kt=class extends yt{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=Ge(),this.contentContainerWidth=1e3}onInstanceCreated(r){this.recorded=Ze.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return v`
        <thermal-app author=${ce(this.author)} recorded=${ce(this.recorded)} license=${ce(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?v`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:j}
          
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
                  `:j}

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Graph lines"
                    hint="'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'."
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:j}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>

              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:j}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:j}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${Xe(this.contentContainerRef)}>

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
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?v`
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
                    </div>`:j}
                  
                  </div>
                  `:j}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};kt.styles=be`

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
  
  `;Qt([g({type:String,reflect:!0,attribute:!0})],kt.prototype,"showembed",2);Qt([g({type:String,reflect:!0,attribute:!0})],kt.prototype,"showabout",2);Qt([g({type:String,reflect:!0,attribute:!0})],kt.prototype,"showfullscreen",2);Qt([S()],kt.prototype,"hasAnalysis",2);Qt([S()],kt.prototype,"hasGraph",2);Qt([S()],kt.prototype,"tool",2);Qt([S()],kt.prototype,"isSequence",2);Qt([g()],kt.prototype,"author",2);Qt([g()],kt.prototype,"recorded",2);Qt([g()],kt.prototype,"license",2);Qt([g()],kt.prototype,"label",2);Qt([S()],kt.prototype,"contentContainerWidth",2);kt=Qt([te("desktop-app")],kt);var tv=Object.defineProperty,rv=Object.getOwnPropertyDescriptor,iv=(r,e,t,i)=>{for(var s=i>1?void 0:i?rv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tv(e,t,s),s};let xl=class extends Ve{render(){return this.url===""?j:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${ce(this.from)}
        to=${ce(this.to)}
        opacity=${ce(this.opacity)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${Xe(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${ce(this.visible)}
            analysis1=${ce(this.analysis1)}
            analysis2=${ce(this.analysis2)}
            analysis3=${ce(this.analysis3)}
            analysis4=${ce(this.analysis4)}
            analysis5=${ce(this.analysis5)}
            analysis6=${ce(this.analysis6)}
            analysis7=${ce(this.analysis7)}
            speed=${ce(this.speed)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${ce(this.author)} 
              recorded=${ce(this.recorded)} 
              license=${ce(this.license)}
              label=${ce(this.label)}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};xl=iv([te("thermal-file-analyser")],xl);var sv=Object.defineProperty,nv=Object.getOwnPropertyDescriptor,go=(r,e,t,i)=>{for(var s=i>1?void 0:i?nv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sv(e,t,s),s};let ps=class extends ft{constructor(){super(...arguments),this.dropinRef=Ge(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return v`

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

                            ${this.loaded===!0?v`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:j}

                            <file-dropin ${Xe(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};ps.styles=be`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;go([S()],ps.prototype,"dropinRef",2);go([S()],ps.prototype,"loaded",2);ps=go([te("thermal-dropin-app")],ps);var av=Object.defineProperty,ov=Object.getOwnPropertyDescriptor,Ps=(r,e,t,i)=>{for(var s=i>1?void 0:i?ov(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&av(e,t,s),s};let Jr=class extends ft{render(){return j}};Ps([g({type:String,reflect:!0,attribute:!0})],Jr.prototype,"thermal",2);Ps([g({type:String,reflect:!0,attribute:!0})],Jr.prototype,"visible",2);Ps([g({type:String,reflect:!0,attribute:!0})],Jr.prototype,"author",2);Ps([g({type:String,reflect:!0,attribute:!0})],Jr.prototype,"note",2);Jr=Ps([te("time-entry")],Jr);let lv=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof di)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),h={label:a??"",info:o,from:i,to:n,files:[]};s=h,this.groups.set(i,h)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Bl(e).getTime():this.grouping==="day"?Qs(e).getTime():this.grouping==="week"?Or(e).getTime():this.grouping==="month"?en(e).getTime():this.grouping==="year"?Fa(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Nl(e).getTime():this.grouping==="day"?Fl(e).getTime():this.grouping==="week"?tn(e).getTime():this.grouping==="month"?Js(e).getTime():this.grouping==="year"?zl(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:Qe(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:Qe(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+Qe(e,"w")+" of "+Qe(e,"yyyy"),info:[Ze.humanDate(Or(e).getTime()),Ze.humanDate(tn(e).getTime())].join(" - ")}:this.grouping==="month"?{label:Qe(e,"MMMM yyyy"),info:[Ze.humanDate(en(e).getTime()),Ze.humanDate(Js(e).getTime())].join(" - ")}:this.grouping==="year"?{label:Qe(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?Ze.human(e):this.grouping==="hour"||this.grouping==="day"?Qe(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",Ze.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var hv=Object.defineProperty,cv=Object.getOwnPropertyDescriptor,dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?cv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hv(e,t,s),s};let It=class extends ft{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){const i=kn(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new lv(this,i),setTimeout(()=>{this.log("--------",this.grouper),this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof Jr))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return v`
            <slot name="entry"></slot>

            <manager-mirror slug=${this.scopeSlug}>

                    <registry-mirror slug="${this.scopeSlug}">

                        <group-mirror slug="${this.slug}">

                            <group-tool-buttons></group-tool-buttons>

                                <h2>${this.name??this.slug}</h2>

                                <slot></slot>


                                ${this.groups.map(r=>v`
                                
                                    <time-group-row
                                        columns=${this.columns}
                                        breakpoint=${this.breakpoint}
                                        label=${r.label}
                                        info=${r.info}
                                        .files=${r.files}
                                        from=${r.from}
                                        to=${r.to}
                                        grouping=${this.grouping}
                                    ></time-group-row>
                                    
                                `)}


                        </group-mirror>
                    
                    </registry-mirror>

                </manager-mirror>

        `}};It.styles=be`

        :host([width="1"]) {
            width: 100%;
        }
        :host([width="2"]) {
            width: 50%;
        }
        :host([width="3"]) {
            width: 33%;
        }
        :host([width="4"]) {
            width: 25%;
        }
        :host([width="5"]) {
            width: 20%;
        }
        :host([width="6"]) {
            width: calc( 100% / 6  - 5px);
        }
        :host([width="7"]) {
            width: calc( 100% / 7  - 5px);
        }

        .files-list {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
        }

        .file {
            width: 100%;
        }

        @media ( min-width: 700px ) {
        
            .file-list-1 .file { width: 100%; }
        
            .file-list-2 .file { width: calc( 50%  - 5px); }

            .file-list-3 .file { width: calc( 33%  - 5px); }

            .file-list-4 .file { width: calc( 25%  - 5px); }

            .file-list-5 .file { width: calc( 20%  - 5px); }

            .file-list-6 .file { width: calc( 100% / 6  - 5px); }

            .file-list-7 .file { width: calc( 100% / 7  - 5px); }

            .file-list-8 .file { width: calc( 100% / 8  - 5px); }

            .file-list-9 .file { width: calc( 100% / 9  - 5px); }

            .file-list-10 .file { width: calc( 100% / 10  - 5px); }
        
        }


        .file-list-collapsed .file { width: 100% !important; }

        .file-title {
            background: var(--thermal-slate);
            color: var(--thermal-background);
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            padding: calc( var(--thermal-gap) * .5 );
        }
    
    `;dr([S(),ei({slot:"entry",flatten:!0})],It.prototype,"entries",2);dr([S()],It.prototype,"groups",2);dr([S()],It.prototype,"instances",2);dr([g()],It.prototype,"columns",2);dr([g()],It.prototype,"breakpoint",2);dr([g({type:Number,reflect:!0})],It.prototype,"width",2);dr([g({type:String,reflect:!0})],It.prototype,"grouping",2);dr([g()],It.prototype,"name",2);dr([g()],It.prototype,"slug",2);dr([S()],It.prototype,"scopeSlug",2);It=dr([te("time-group")],It);var uv=Object.defineProperty,dv=Object.getOwnPropertyDescriptor,ii=(r,e,t,i)=>{for(var s=i>1?void 0:i?dv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&uv(e,t,s),s};let _r=class extends ft{constructor(){super(...arguments),this.registryProviderRef=Ge(),this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback(),console.log("connected",this.entries)}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof It){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return v`
        <manager-provider slug="${this.slug}">

            <registry-provider slug="${this.slug}">
                <thermal-app>

                    <thermal-button variant="foreground" interactive="false" slot="bar">Skupinové zobrazení</thermal-button>

                    <div slot="bar" style="flex-grow: 4;">
                        
                        <thermal-bar slot="bar">
                            <registry-palette-dropdown></registry-palette-dropdown>

                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{console.log(r.target.value),this.columns=parseInt(r.target.value)}}></input>

                            <input type="range" min="1" max="10" step="1" value=${this.groups} @input=${r=>{console.log(r.target.value),this.groups=parseInt(r.target.value)}}></input>
                        

                            <thermal-dropdown>
                                <span slot="invoker">${this.grouping==="none"?"Do not grop":"Group by "+this.grouping}</span>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="none"}">Do not group</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="hour"}">Group by hour</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="day"}">Group by day</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="week"}">Group by week</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="month"}">Group by month</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="year"}">Group by year</thermal-button>
                                </div>

                            </thermal-dropdown>

                        </thermal-bar>
                        
                    </div>

                    <registry-histogram></registry-histogram>
                    <registry-range-slider></registry-range-slider>
                    <registry-ticks-bar></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};_r.styles=be`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;ii([g()],_r.prototype,"slug",2);ii([g({type:String,reflect:!0})],_r.prototype,"grouping",2);ii([g({type:String,reflect:!0})],_r.prototype,"columns",2);ii([g({type:Number,reflect:!0})],_r.prototype,"breakpoint",2);ii([g({type:String,reflect:!0})],_r.prototype,"groups",2);ii([g({type:String,reflect:!0})],_r.prototype,"autogroups",2);ii([ei({flatten:!0}),S()],_r.prototype,"entries",2);_r=ii([te("time-app")],_r);var pv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,Fn=(r,e,t,i)=>{for(var s=i>1?void 0:i?fv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pv(e,t,s),s};let Ui=class extends pi{connectedCallback(){super.connectedCallback(),this.renderRoot}render(){return v`
            <file-mirror .file=${this.file}>

                <div class="file-title">
                    ${this.label}
                </div>

                <file-canvas></file-canvas>

                <file-timeline></file-timeline>                            <file-analysis-table></file-analysis-table>
            </file-mirror>
        `}};Ui.styles=be`

        :host {
            display: block;
        }
    
        .file-title {
            background: var(--thermal-slate);
            color: var(--thermal-foreground);
        }

    `;Fn([g({type:Object})],Ui.prototype,"file",2);Fn([g({type:String})],Ui.prototype,"innerHtml",2);Fn([g({type:String})],Ui.prototype,"label",2);Ui=Fn([te("time-group-item")],Ui);var gv=Object.defineProperty,mv=Object.getOwnPropertyDescriptor,pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?mv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gv(e,t,s),s};let Xt=class extends ft{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return v`

            ${e?v`<h3 class="row-title">${e}</h3>`:j}

            ${t?v`<p>${t}</p>`:j}

            <section class=${Ht(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:h})=>v`<time-group-item .file=${a} .innerHtml=${o} .label=${h}></time-group-item>`)}
            
            </section>
        
        `}};Xt.styles=be`

        :host {
            display: block;
        }
    
        .row-title {}

        .row-files {}

        .row-files {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
        }

        
            .file-list-1 time-group-item { width: 100%; }
        
            .file-list-2 time-group-item { width: calc( 50%  - 5px); }

            .file-list-3 time-group-item { width: calc( 33%  - 5px); }

            .file-list-4 time-group-item { width: calc( 25%  - 5px); }

            .file-list-5 time-group-item { width: calc( 20%  - 5px); }

            .file-list-6 time-group-item { width: calc( 100% / 6  - 5px); }

            .file-list-7 time-group-item { width: calc( 100% / 7  - 5px); }

            .file-list-8 time-group-item { width: calc( 100% / 8  - 5px); }

            .file-list-9 time-group-item { width: calc( 100% / 9  - 5px); }

            .file-list-10 time-group-item { width: calc( 100% / 10  - 5px); }


        .file-list-collapsed time-group-item { width: 100% !important; }

    `;pr([g()],Xt.prototype,"columns",2);pr([g()],Xt.prototype,"breakpoint",2);pr([g({type:Object})],Xt.prototype,"files",2);pr([g({type:String})],Xt.prototype,"label",2);pr([g({type:String})],Xt.prototype,"info",2);pr([g({type:Number})],Xt.prototype,"from",2);pr([g({type:Number})],Xt.prototype,"to",2);pr([g({type:Number})],Xt.prototype,"cursor",2);pr([g({type:String})],Xt.prototype,"grouping",2);pr([S()],Xt.prototype,"collapsed",2);Xt=pr([te("time-group-row")],Xt);class vv{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof di)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{console.log("hotovost...",this.records),this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),h={label:a??"",info:o,from:i,to:n,files:[]};s=h,this.groups.set(i,h)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values()),this.element.log("______________",this.element.groups)}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Bl(e).getTime():this.grouping==="day"?Qs(e).getTime():this.grouping==="week"?Or(e).getTime():this.grouping==="month"?en(e).getTime():this.grouping==="year"?Fa(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Nl(e).getTime():this.grouping==="day"?Fl(e).getTime():this.grouping==="week"?tn(e).getTime():this.grouping==="month"?Js(e).getTime():this.grouping==="year"?zl(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:Qe(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:Qe(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+Qe(e,"w")+" of "+Qe(e,"yyyy"),info:[Ze.humanDate(Or(e).getTime()),Ze.humanDate(tn(e).getTime())].join(" - ")}:this.grouping==="month"?{label:Qe(e,"MMMM yyyy"),info:[Ze.humanDate(en(e).getTime()),Ze.humanDate(Js(e).getTime())].join(" - ")}:this.grouping==="year"?{label:Qe(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?Ze.human(e):this.grouping==="hour"||this.grouping==="day"?Qe(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",Ze.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var yv=Object.defineProperty,bv=Object.getOwnPropertyDescriptor,Jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?bv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yv(e,t,s),s};let Ot=class extends ft{constructor(){super(...arguments),this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[]}connectedCallback(){super.connectedCallback();const t=kn(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);this.group=t,this.grouper=new vv(this,t)}firstUpdated(r){super.firstUpdated(r),this.grouper.processEntries(this.entries.filter(e=>e instanceof Jr))}updated(r){super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return v`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}">

                    <group-provider slug="${this.slug}">

                        <thermal-app
                            author=${ce(this.author)}
                            license=${ce(this.license)}
                        >
                        
                            <thermal-button 
                                variant="foreground" 
                                interactive="false" 
                                slot="bar"
                            >
                                ${this.label}
                            </thermal-button>

                            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                                    <registry-palette-dropdown></registry-palette-dropdown>

                                    <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>

                                    <thermal-dropdown>
                                        <span slot="invoker">${this.grouping==="none"?"Do not grop":"Group by "+this.grouping}</span>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="none"}">Do not group</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="hour"}">Group by hour</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="day"}">Group by day</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="week"}">Group by week</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="month"}">Group by month</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="year"}">Group by year</thermal-button>
                                        </div>

                                    </thermal-dropdown>

                                    ${this.grouper.numFiles>0?v`
                                            <thermal-dropdown class="download">

                                                <span slot="invoker">Download</span>

                                                <div slot="option">
                                                    <thermal-button @click=${()=>this.grouper.forEveryInstance(r=>r.export.downloadPng())}>PNG of individual images</thermal-button>
                                                    <small>Download all images within this group as PNG</small>
                                                </div>

                                                <div slot="option">

                                                    <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({columns:this.columns})}>PNG of the entire group</thermal-button>
                                                    <small>Download one image with all images and their analysis value</small>
                                                </div>


                                                <div slot="option">
                                                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>CSV of analysis data</thermal-button>
                                                    <small>Download one image with all images and their analysis value</small>
                                                </div>

                                            </thermal-dropdown>

                                            <registry-range-full-button
                                                @mouseenter=${()=>{var r,e;this.highlightFrom=(r=this.group.registry.minmax.value)==null?void 0:r.min,this.highlightTo=(e=this.group.registry.minmax.value)==null?void 0:e.max}}
                                                @focus=${()=>{var r,e;this.highlightFrom=(r=this.group.registry.minmax.value)==null?void 0:r.min,this.highlightTo=(e=this.group.registry.minmax.value)==null?void 0:e.max}}
                                                @mouseleave=${()=>{this.highlightFrom=void 0,this.highlightTo=void 0}}
                                                @blur=${()=>{this.highlightFrom=void 0,this.highlightTo=void 0}}
                                            ></registry-range-full-button>
                                        `:j}

                                </thermal-bar>

                            </div>


                            <registry-histogram highlightFrom=${ce(this.highlightFrom)} highlightTo=${ce(this.highlightTo)}></registry-histogram>
                            <registry-range-slider highlightFrom=${ce(this.highlightFrom)} highlightTo=${ce(this.highlightTo)}></registry-range-slider>
                            <registry-ticks-bar highlightFrom=${ce(this.highlightFrom)} highlightTo=${ce(this.highlightTo)}></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>

                            <div class="app-content">

                                    <slot></slot>

                                ${this.groups.map(r=>{var n,a;const e=r.label.trim().length>0?r.label.trim():void 0,t=((n=r.info)==null?void 0:n.trim())!==""?(a=r.info)==null?void 0:a.trim():void 0,i={"group-files":!0,[`group-files-${this.columns}`]:!0},s={group:!0,group__bordered:this.grouping!=="none"};return v`
                                    <div class=${Ht(s)}>

                                        ${e||t?v`
                                                <div class="group-header">

                                                    ${e?v`<h2 class="group-title">${e}</h2>`:j}

                                                    ${t?v`<p class="group-info">${t}</p>`:j}

                                                </div>
                                            `:j}

                                        

                                        <section class=${Ht(i)}>

                                            ${r.files.map(({instance:o,innerHtml:h,label:u})=>v`
                                                
                                                    <div class="file">

                                                        <article 
                                                            @mouseenter=${()=>{this.highlightFrom=o.min,this.highlightTo=o.max}}
                                                            @mouseleave=${()=>{this.highlightFrom=void 0,this.highlightTo=void 0}}
                                                            >

                                                            <file-mirror .file=${o}>

                                                                <div class="file-title">
                                                                    <h3><span>${u}</span></h3>
                                                                    <div>
                                                                        ${h?v`<thermal-dialog label="Note for ${u}">
                                                                            <button slot="invoker" class="file-info-button" role="button">note</button>
                                                                            <div slot="content">${Wt(h)}</div>
                                                                        </thermal-dialog>`:j}
                                                                        <button 
                                                                            class="file-info-button" 
                                                                            role="button"
                                                                            @click=${()=>o.export.downloadPng()}
                                                                        >png</button>
                                                                        <file-info-button>
                                                                            <button slot="invoker" class="file-info-button" role="button">info</button>
                                                                        </file-info-button>

                                                                        <button 
                                                                            class="file-info-button"    
                                                                            role="button" 
                                                                            @click=${()=>o.group.registry.range.imposeRange({from:o.meta.current.min,to:o.meta.current.max})}
                                                                            @focus=${()=>{this.highlightFrom=o.min,this.highlightTo=o.max}}
                                                                            @blur=${()=>{this.highlightFrom=void 0,this.highlightTo=void 0}}
                                                                        >range</button>
                                                                        
                                                                    </div>
                                                                </div>

                                                                <file-canvas></file-canvas>
                                                                <file-timeline></file-timeline>
                                                                <file-analysis-table></file-analysis-table>
                                                            </file-mirror>

                                                        <article>
                                                    
                                                    </div>
                                                
                                                `)}
                                        
                                        </section>

                                    </div>
                                    `})}
                            
                            </div>

                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};Ot.styles=be`


        .group {

            
        
        }

        .group:not(.group__bordered) {
            margin-top: calc( var( --thermal-gap ) * .5 );
        }

        .group__bordered {
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            margin-top: calc( var( --thermal-gap ) * .5 );
            background-color: color-mix(in srgb, var( --thermal-slate-light ), #fff);
        }

        .group__bordered .group-files {
            padding: calc( var( --thermal-gap ) * .5 );
        }

        .group-files {
            display: flex;
            flex-wrap: wrap;
            width: calc( 100%  + 5px);
            margin: 0 -2.5px;
        }

        .group-files-1 .file { width: 100%; }
        
        .group-files-2 .file { width: 50%; }

        .group-files-3 .file { width: 33%; }

        .group-files-4 .file { width: 25%; }

        .group-files-5 .file { width: 20%; }

        .group-files-6 .file { width: calc( 100% / 6 ); }

        .group-files-7 .file { width: calc( 100% / 7 ); }

        .group-files-8 .file { width: calc( 100% / 8 ); }

        .group-files-9 .file { width: calc( 100% / 9 ); }

        .group-files-10 .file { width: calc( 100% / 10 ); }

        .group-header {

            display: flex;
            gap: var(--thermal-gap);
            align-items: center;
            padding: calc( var( --thermal-gap ) * .5 );
            border-bottom: 1px solid var( --thermal-slate-light );


        
        }

        .group-title {
            margin: 0;
            padding: 0;
            font-size: calc( var(--thermal-fs) * 1.2 );
            color: var( --thermal-foreground );
        }

        .group-info {
            color: var( --thermal-slate );
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
        }



        .file {
            box-sizing: border-box;
            padding: 2.5px;
        }

        .file article {
            border: 1px solid var(--thermal-slate);
            border-bottom: 0;
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            background-color: var(--thermal-slate-light);
        }

        .file thermal-file-mirror {
            display: block;
        }

        .file-title {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var( --thermal-foreground );
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            padding: calc( var(--thermal-fs) * .5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

        .file-title > h3 {
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .file-title > h3 > span {
            white-space: nowrap;
        }

        .file-title > div {
            flex-grow: 1;
            display: flex;
            gap: 5px;
            justify-content: flex-end;
        }

        .file-info-button {
            cursor: pointer;
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
        }

        .file-info-button:hover {
            color: var(--thermal-background);
            background-color: var(--thermal-primary);
        }

        .download {

            small {
                display: block;
                font-size: calc( var( --thermal-fs ) * .8 );
                opacity: .8;
                padding-left: calc( var( --thermal-gap ) * .5 );
                padding-bottom: calc( var( --thermal-gap ) * .5 );
            }
        
        }


    
    `;Jt([g({type:String,reflect:!0})],Ot.prototype,"author",2);Jt([g({type:String,reflect:!0})],Ot.prototype,"label",2);Jt([g({type:String,reflect:!1})],Ot.prototype,"description",2);Jt([g({type:String,reflect:!0})],Ot.prototype,"license",2);Jt([S(),ei({slot:"entry",flatten:!0})],Ot.prototype,"entries",2);Jt([g()],Ot.prototype,"slug",2);Jt([g()],Ot.prototype,"columns",2);Jt([g()],Ot.prototype,"breakpoint",2);Jt([g({type:String,reflect:!0})],Ot.prototype,"grouping",2);Jt([S()],Ot.prototype,"groups",2);Jt([S()],Ot.prototype,"highlightFrom",2);Jt([S()],Ot.prototype,"highlightTo",2);Ot=Jt([te("thermal-group-app")],Ot);var wv=Object.defineProperty,xv=Object.getOwnPropertyDescriptor,mo=(r,e,t,i)=>{for(var s=i>1?void 0:i?xv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wv(e,t,s),s};let pn=class extends ft{connectedCallback(){super.connectedCallback();const r=Math.random().toString(),t=this.group.registry.manager.addOrGetRegistry(r);this.localGroup=t.groups.addOrGetGroup(r)}render(){var e,t,i,s;const r=this.localGroup!==void 0;return v`

            ${r?v`
                    <manager-mirror 
                        slug=${this.localGroup.registry.manager.id}
                        palette=${this.localGroup.registry.palette.value}
                    >
                        <registry-mirror 
                            slug=${this.localGroup.registry.id} 
                            from=${ce((t=(e=this.localGroup)==null?void 0:e.registry.range.value)==null?void 0:t.from)}
                            to=${ce((s=(i=this.localGroup)==null?void 0:i.registry.range.value)==null?void 0:s.to)}
                        >

                            <group-mirror slug=${this.localGroup.id}>

                                ${this.group.files.value.map(n=>v`

                                        <file-provider
                                            thermal=${n.thermalUrl}
                                            visible=${n.visibleUrl}
                                            batch="true"
                                            analysis1="Bopdík;ellipsis;color:red;top:10;left:10;width:100;height:100"
                                        >
                                            <file-canvas></file-canvas>
                                            <file-analysis-table></file-analysis-table>
                                        </file-provider>
                                    
                                    `)}
                            
                            </group-mirror>

                        </registry-mirror>
                    </manager-mirror>
                `:j}
            
        
        `}};mo([g({type:Object})],pn.prototype,"group",2);mo([S()],pn.prototype,"localGroup",2);pn=mo([te("group-export-layout")],pn);const wa=window.matchMedia("(prefers-color-scheme: dark)"),vo="thermal-dark-mode",Sl=()=>{document.body.classList.add(vo)},Sv=()=>{document.body.classList.remove(vo)},_v=()=>{wa.matches&&Sl();const r=e=>{e.matches?Sl():Sv()};wa.addEventListener("change",r),wa.addListener(r)},$v=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)},Cv=Ra.toString().replaceAll(".","-"),Av=r=>`thermal__${r}__${Cv}`,_l=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",Av(r)),t.innerHTML=e,document.head.appendChild(t)},Pv=()=>{_l("rootVariables",`

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


            
        
        `),_l("darkModeOverrides",`
        
            body.${vo} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};$v();console.info(`@labir/embed ${Ra}
Author: ${fc}`);_v();Pv();document.addEventListener("DOMContentLoaded",()=>{});
