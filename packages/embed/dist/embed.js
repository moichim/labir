var Sl=Object.defineProperty;var Ol=(r,e,t)=>e in r?Sl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(Ol(r,typeof e!="symbol"?e+"":e,t),t);const bn="1.2.35",Al="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=globalThis,yn=Fi.ShadowRoot&&(Fi.ShadyCSS===void 0||Fi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wn=Symbol(),co=new WeakMap;let Yo=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==wn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=co.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&co.set(t,e))}return e}toString(){return this.cssText}};const El=r=>new Yo(typeof r=="string"?r:r+"",void 0,wn),Oe=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Yo(t,r,wn)},Dl=(r,e)=>{if(yn)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Fi.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},ho=yn?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return El(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Tl,defineProperty:Ll,getOwnPropertyDescriptor:Rl,getOwnPropertyNames:Ml,getOwnPropertySymbols:Ul,getPrototypeOf:Fl}=Object,Gt=globalThis,uo=Gt.trustedTypes,Il=uo?uo.emptyScript:"",Zs=Gt.reactiveElementPolyfillSupport,Yr=(r,e)=>r,Wi={toAttribute(r,e){switch(e){case Boolean:r=r?Il:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},xn=(r,e)=>!Tl(r,e),po={attribute:!0,type:String,converter:Wi,reflect:!1,hasChanged:xn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Gt.litPropertyMetadata??(Gt.litPropertyMetadata=new WeakMap);class wr extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=po){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ll(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Rl(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??po}static _$Ei(){if(this.hasOwnProperty(Yr("elementProperties")))return;const e=Fl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yr("properties"))){const t=this.properties,i=[...Ml(t),...Ul(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ho(s))}else e!==void 0&&t.push(ho(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Wi).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Wi;this._$Em=s,this[s]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??xn)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}wr.elementStyles=[],wr.shadowRootOptions={mode:"open"},wr[Yr("elementProperties")]=new Map,wr[Yr("finalized")]=new Map,Zs==null||Zs({ReactiveElement:wr}),(Gt.reactiveElementVersions??(Gt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=globalThis,Ni=qr.trustedTypes,fo=Ni?Ni.createPolicy("lit-html",{createHTML:r=>r}):void 0,qo="$lit$",Xt=`lit$${Math.random().toFixed(9).slice(2)}$`,Xo="?"+Xt,jl=`<${Xo}>`,ar=document,Gr=()=>ar.createComment(""),Zr=r=>r===null||typeof r!="object"&&typeof r!="function",Go=Array.isArray,Wl=r=>Go(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Qs=`[ 	
\f\r]`,Br=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,go=/-->/g,mo=/>/g,ir=RegExp(`>|${Qs}(?:([^\\s"'>=/]+)(${Qs}*=${Qs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,bo=/"/g,Zo=/^(?:script|style|textarea|title)$/i,Nl=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),O=Nl(1),Zt=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),yo=new WeakMap,nr=ar.createTreeWalker(ar,129);function Qo(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return fo!==void 0?fo.createHTML(e):e}const Hl=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=Br;for(let l=0;l<t;l++){const h=r[l];let p,g,f=-1,b=0;for(;b<h.length&&(o.lastIndex=b,g=o.exec(h),g!==null);)b=o.lastIndex,o===Br?g[1]==="!--"?o=go:g[1]!==void 0?o=mo:g[2]!==void 0?(Zo.test(g[2])&&(s=RegExp("</"+g[2],"g")),o=ir):g[3]!==void 0&&(o=ir):o===ir?g[0]===">"?(o=s??Br,f=-1):g[1]===void 0?f=-2:(f=o.lastIndex-g[2].length,p=g[1],o=g[3]===void 0?ir:g[3]==='"'?bo:vo):o===bo||o===vo?o=ir:o===go||o===mo?o=Br:(o=ir,s=void 0);const x=o===ir&&r[l+1].startsWith("/>")?" ":"";n+=o===Br?h+jl:f>=0?(i.push(p),h.slice(0,f)+qo+h.slice(f)+Xt+x):h+Xt+(f===-2?l:x)}return[Qo(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class Qr{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,h=this.parts,[p,g]=Hl(e,t);if(this.el=Qr.createElement(p,i),nr.currentNode=this.el.content,t===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=nr.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(qo)){const b=g[o++],x=s.getAttribute(f).split(Xt),C=/([.?@])?(.*)/.exec(b);h.push({type:1,index:n,name:C[2],strings:x,ctor:C[1]==="."?zl:C[1]==="?"?Vl:C[1]==="@"?Yl:Ki}),s.removeAttribute(f)}else f.startsWith(Xt)&&(h.push({type:6,index:n}),s.removeAttribute(f));if(Zo.test(s.tagName)){const f=s.textContent.split(Xt),b=f.length-1;if(b>0){s.textContent=Ni?Ni.emptyScript:"";for(let x=0;x<b;x++)s.append(f[x],Gr()),nr.nextNode(),h.push({type:2,index:++n});s.append(f[b],Gr())}}}else if(s.nodeType===8)if(s.data===Xo)h.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(Xt,f+1))!==-1;)h.push({type:7,index:n}),f+=Xt.length-1}n++}}static createElement(e,t){const i=ar.createElement("template");return i.innerHTML=e,i}}function _r(r,e,t=r,i){var o,l;if(e===Zt)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=Zr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=_r(r,s._$AS(r,e.values),s,i)),e}class Bl{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??ar).importNode(t,!0);nr.currentNode=s;let n=nr.nextNode(),o=0,l=0,h=i[0];for(;h!==void 0;){if(o===h.index){let p;h.type===2?p=new oi(n,n.nextSibling,this,e):h.type===1?p=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(p=new ql(n,this,e)),this._$AV.push(p),h=i[++l]}o!==(h==null?void 0:h.index)&&(n=nr.nextNode(),o++)}return nr.currentNode=ar,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class oi{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_r(this,e,t),Zr(e)?e===z||e==null||e===""?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==Zt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Wl(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==z&&Zr(this._$AH)?this._$AA.nextSibling.data=e:this.T(ar.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Qr.createElement(Qo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new Bl(s,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=yo.get(e.strings);return t===void 0&&yo.set(e.strings,t=new Qr(e)),t}k(e){Go(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new oi(this.S(Gr()),this.S(Gr()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ki{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=_r(this,e,t,0),o=!Zr(e)||e!==this._$AH&&e!==Zt,o&&(this._$AH=e);else{const l=e;let h,p;for(e=n[0],h=0;h<n.length-1;h++)p=_r(this,l[i+h],t,h),p===Zt&&(p=this._$AH[h]),o||(o=!Zr(p)||p!==this._$AH[h]),p===z?e=z:e!==z&&(e+=(p??"")+n[h+1]),this._$AH[h]=p}o&&!s&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class zl extends Ki{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}class Vl extends Ki{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}}class Yl extends Ki{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=_r(this,e,t,0)??z)===Zt)return;const i=this._$AH,s=e===z&&i!==z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==z&&(i===z||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ql{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){_r(this,e)}}const Ks=qr.litHtmlPolyfillSupport;Ks==null||Ks(Qr,oi),(qr.litHtmlVersions??(qr.litHtmlVersions=[])).push("3.1.4");const Xl=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new oi(e.insertBefore(Gr(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let et=class extends wr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Zt}};var Vo;et._$litElement$=!0,et.finalized=!0,(Vo=globalThis.litElementHydrateSupport)==null||Vo.call(globalThis,{LitElement:et});const Js=globalThis.litElementPolyfillSupport;Js==null||Js({LitElement:et});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gl={attribute:!0,type:String,converter:Wi,reflect:!1,hasChanged:xn},Zl=(r=Gl,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,h,r)},init(l){return l!==void 0&&this.P(o,void 0,r),l}}}if(i==="setter"){const{name:o}=t;return function(l){const h=this[o];e.call(this,l),this.requestUpdate(o,h,r)}}throw Error("Unsupported decorator location: "+i)};function F(r){return(e,t)=>typeof t=="object"?Zl(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(r){return F({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ql=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ai(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Ql(e,t,{get(){var h;const o=(h=this.renderRoot)==null?void 0:h.querySelector(n),l=(o==null?void 0:o.assignedElements(r))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Kl={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Li(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Ri(r){return r.toString().indexOf("`")===-1}Ri(r=>r``)||Ri(r=>r`\0`)||Ri(r=>r`\n`)||Ri(r=>r`\u0000`);Li``&&Li`\0`&&Li`\n`&&Li`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Jl="google#safe";function ec(){if(typeof window<"u")return window.trustedTypes}function Ko(){var r;return(r=ec())!==null&&r!==void 0?r:null}let Mi;function tc(){var r,e;if(Mi===void 0)try{Mi=(e=(r=Ko())===null||r===void 0?void 0:r.createPolicy(Jl,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{Mi=null}return Mi}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Jo{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function wo(r){var e;const t=r,i=(e=tc())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Jo(t,Kl)}function rc(r){var e;if(!((e=Ko())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Jo)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function ic(r,...e){if(e.length===0)return wo(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return wo(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function sc(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function nc(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=sc(e||window);t&&r.setAttribute("nonce",t)}function oc(r,e,t){r.src=rc(e),nc(r)}/**
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
 */const ac=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),oc(t,ic`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function ea(r={}){await ac;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function xo(r){if(await ea(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function lc(r){return await ea(),new google.visualization.ChartWrapper({container:r})}/**
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
 */var Ht=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var l=r.length-1;l>=0;l--)(o=r[l])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const _o=["ready","select"],cc={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class kt extends et{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return O`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){lc(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(_o,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(cc[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(s=>!_o.includes(s)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(!(!e||!t))try{const i=await xo({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,t;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?t=fetch(e).then(s=>s.json()):t=Promise.resolve(e),t.then(xo).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}kt.styles=Oe`
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
  `;Ht([F({type:String,reflect:!0})],kt.prototype,"type",void 0);Ht([F({type:Array})],kt.prototype,"events",void 0);Ht([F({type:Object,hasChanged:()=>!0})],kt.prototype,"options",void 0);Ht([F({type:Array})],kt.prototype,"cols",void 0);Ht([F({type:Array})],kt.prototype,"rows",void 0);Ht([F({type:String})],kt.prototype,"data",void 0);Ht([F({type:Object})],kt.prototype,"view",void 0);Ht([F({type:Array})],kt.prototype,"selection",void 0);Ht([F({type:Object})],kt.prototype,"_data",void 0);customElements.define("google-chart",kt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hc=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ji=r=>(...e)=>({_$litDirective$:r,values:e});let kn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Xr(s,e);return!0},Hi=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},ta=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),pc(e)}};function dc(r){this._$AN!==void 0?(Hi(this),this._$AM=r,ta(this)):this._$AM=r}function uc(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Xr(i[n],!1),Hi(i[n]);else i!=null&&(Xr(i,!1),Hi(i));else Xr(this,r)}const pc=r=>{r.type==_n.CHILD&&(r._$AP??(r._$AP=uc),r._$AQ??(r._$AQ=dc))};class fc extends kn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),ta(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Xr(this,e),Hi(this))}setValue(e){if(hc(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=()=>new gc;class gc{}const en=new WeakMap,Ne=Ji(class extends fc{render(r){return z}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),z}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=en.get(e);t===void 0&&(t=new WeakMap,en.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=en.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var mc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,ra=(r,e,t,i)=>{for(var s=i>1?void 0:i?vc(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&mc(e,t,s),s};let Kr=class extends et{constructor(){super(),this.dialogRef=Re(),this.closeButtonRef=Re(),this.invokerRef=Re()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return O`
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
        `}};Kr.shadowRootOptions={...et.shadowRootOptions,mode:"open"};Kr.styles=Oe`

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

        
    
    `;ra([F({type:String,reflect:!0})],Kr.prototype,"label",2);Kr=ra([ae("thermal-dialog")],Kr);var bc=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,es=(r,e,t,i)=>{for(var s=i>1?void 0:i?yc(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&bc(e,t,s),s};let Ut=class extends et{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return O`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Ut.VARIANTS=["slate","primary","foreground","background"];Ut.shadowRootOptions={...et.shadowRootOptions,mode:"open"};Ut.styles=Oe`

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
    
    `;es([F({type:String,converter:{fromAttribute:r=>Ut.VARIANTS.includes(r)?r:"slate",toAttribute:r=>r}})],Ut.prototype,"variant",2);es([F({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],Ut.prototype,"interactive",2);es([F({type:String})],Ut.prototype,"size",2);Ut=es([ae("thermal-button")],Ut);const kr=Math.min,Rt=Math.max,Bi=Math.round,Qt=r=>({x:r,y:r}),wc={left:"right",right:"left",bottom:"top",top:"bottom"},xc={start:"end",end:"start"};function ko(r,e,t){return Rt(r,kr(e,t))}function li(r,e){return typeof r=="function"?r(e):r}function Ft(r){return r.split("-")[0]}function ts(r){return r.split("-")[1]}function ia(r){return r==="x"?"y":"x"}function sa(r){return r==="y"?"height":"width"}function ci(r){return["top","bottom"].includes(Ft(r))?"y":"x"}function na(r){return ia(ci(r))}function _c(r,e,t){t===void 0&&(t=!1);const i=ts(r),s=na(r),n=sa(s);let o=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=zi(o)),[o,zi(o)]}function kc(r){const e=zi(r);return[ln(r),e,ln(e)]}function ln(r){return r.replace(/start|end/g,e=>xc[e])}function Cc(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function $c(r,e,t,i){const s=ts(r);let n=Cc(Ft(r),t==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(ln)))),n}function zi(r){return r.replace(/left|right|bottom|top/g,e=>wc[e])}function Pc(r){return{top:0,right:0,bottom:0,left:0,...r}}function oa(r){return typeof r!="number"?Pc(r):{top:r,right:r,bottom:r,left:r}}function Cr(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function Co(r,e,t){let{reference:i,floating:s}=r;const n=ci(e),o=na(e),l=sa(o),h=Ft(e),p=n==="y",g=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,b=i[l]/2-s[l]/2;let x;switch(h){case"top":x={x:g,y:i.y-s.height};break;case"bottom":x={x:g,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:f};break;case"left":x={x:i.x-s.width,y:f};break;default:x={x:i.x,y:i.y}}switch(ts(e)){case"start":x[o]-=b*(t&&p?-1:1);break;case"end":x[o]+=b*(t&&p?-1:1);break}return x}const Sc=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=t,l=n.filter(Boolean),h=await(o.isRTL==null?void 0:o.isRTL(e));let p=await o.getElementRects({reference:r,floating:e,strategy:s}),{x:g,y:f}=Co(p,i,h),b=i,x={},C=0;for(let S=0;S<l.length;S++){const{name:k,fn:U}=l[S],{x:j,y:H,data:K,reset:J}=await U({x:g,y:f,initialPlacement:i,placement:b,strategy:s,middlewareData:x,rects:p,platform:o,elements:{reference:r,floating:e}});g=j??g,f=H??f,x={...x,[k]:{...x[k],...K}},J&&C<=50&&(C++,typeof J=="object"&&(J.placement&&(b=J.placement),J.rects&&(p=J.rects===!0?await o.getElementRects({reference:r,floating:e,strategy:s}):J.rects),{x:g,y:f}=Co(p,b,h)),S=-1)}return{x:g,y:f,placement:b,strategy:s,middlewareData:x}};async function aa(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:o,elements:l,strategy:h}=r,{boundary:p="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:b=!1,padding:x=0}=li(e,r),C=oa(x),k=l[b?f==="floating"?"reference":"floating":f],U=Cr(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(k)))==null||t?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:g,strategy:h})),j=f==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,H=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),K=await(n.isElement==null?void 0:n.isElement(H))?await(n.getScale==null?void 0:n.getScale(H))||{x:1,y:1}:{x:1,y:1},J=Cr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:j,offsetParent:H,strategy:h}):j);return{top:(U.top-J.top+C.top)/K.y,bottom:(J.bottom-U.bottom+C.bottom)/K.y,left:(U.left-J.left+C.left)/K.x,right:(J.right-U.right+C.right)/K.x}}const Oc=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:o,initialPlacement:l,platform:h,elements:p}=e,{mainAxis:g=!0,crossAxis:f=!0,fallbackPlacements:b,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:S=!0,...k}=li(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const U=Ft(s),j=Ft(l)===l,H=await(h.isRTL==null?void 0:h.isRTL(p.floating)),K=b||(j||!S?[zi(l)]:kc(l));!b&&C!=="none"&&K.push(...$c(l,S,C,H));const J=[l,...K],we=await aa(e,k),W=[];let ce=((i=n.flip)==null?void 0:i.overflows)||[];if(g&&W.push(we[U]),f){const de=_c(s,o,H);W.push(we[de[0]],we[de[1]])}if(ce=[...ce,{placement:s,overflows:W}],!W.every(de=>de<=0)){var ee,oe;const de=(((ee=n.flip)==null?void 0:ee.index)||0)+1,me=J[de];if(me)return{data:{index:de,overflows:ce},reset:{placement:me}};let se=(oe=ce.filter(xe=>xe.overflows[0]<=0).sort((xe,Me)=>xe.overflows[1]-Me.overflows[1])[0])==null?void 0:oe.placement;if(!se)switch(x){case"bestFit":{var ie;const xe=(ie=ce.map(Me=>[Me.placement,Me.overflows.filter(Qe=>Qe>0).reduce((Qe,Xe)=>Qe+Xe,0)]).sort((Me,Qe)=>Me[1]-Qe[1])[0])==null?void 0:ie[0];xe&&(se=xe);break}case"initialPlacement":se=l;break}if(s!==se)return{reset:{placement:se}}}return{}}}};function la(r){const e=kr(...r.map(n=>n.left)),t=kr(...r.map(n=>n.top)),i=Rt(...r.map(n=>n.right)),s=Rt(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function Ac(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>Cr(la(s)))}const Ec=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:o}=e,{padding:l=2,x:h,y:p}=li(r,e),g=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=Ac(g),b=Cr(la(g)),x=oa(l);function C(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&p!=null)return f.find(k=>h>k.left-x.left&&h<k.right+x.right&&p>k.top-x.top&&p<k.bottom+x.bottom)||b;if(f.length>=2){if(ci(t)==="y"){const oe=f[0],ie=f[f.length-1],de=Ft(t)==="top",me=oe.top,se=ie.bottom,xe=de?oe.left:ie.left,Me=de?oe.right:ie.right,Qe=Me-xe,Xe=se-me;return{top:me,bottom:se,left:xe,right:Me,width:Qe,height:Xe,x:xe,y:me}}const k=Ft(t)==="left",U=Rt(...f.map(oe=>oe.right)),j=kr(...f.map(oe=>oe.left)),H=f.filter(oe=>k?oe.left===j:oe.right===U),K=H[0].top,J=H[H.length-1].bottom,we=j,W=U,ce=W-we,ee=J-K;return{top:K,bottom:J,left:we,right:W,width:ce,height:ee,x:we,y:K}}return b}const S=await n.getElementRects({reference:{getBoundingClientRect:C},floating:i.floating,strategy:o});return s.reference.x!==S.reference.x||s.reference.y!==S.reference.y||s.reference.width!==S.reference.width||s.reference.height!==S.reference.height?{reset:{rects:S}}:{}}}};async function Dc(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=Ft(t),l=ts(t),h=ci(t)==="y",p=["left","top"].includes(o)?-1:1,g=n&&h?-1:1,f=li(e,r);let{mainAxis:b,crossAxis:x,alignmentAxis:C}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof C=="number"&&(x=l==="end"?C*-1:C),h?{x:x*g,y:b*p}:{x:b*p,y:x*g}}const Tc=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:o,middlewareData:l}=e,h=await Dc(e,r);return o===((t=l.offset)==null?void 0:t.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:o}}}}},Lc=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:k=>{let{x:U,y:j}=k;return{x:U,y:j}}},...h}=li(r,e),p={x:t,y:i},g=await aa(e,h),f=ci(Ft(s)),b=ia(f);let x=p[b],C=p[f];if(n){const k=b==="y"?"top":"left",U=b==="y"?"bottom":"right",j=x+g[k],H=x-g[U];x=ko(j,x,H)}if(o){const k=f==="y"?"top":"left",U=f==="y"?"bottom":"right",j=C+g[k],H=C-g[U];C=ko(j,C,H)}const S=l.fn({...e,[b]:x,[f]:C});return{...S,data:{x:S.x-t,y:S.y-i}}}}};function Mr(r){return ca(r)?(r.nodeName||"").toLowerCase():"#document"}function ht(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function er(r){var e;return(e=(ca(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function ca(r){return r instanceof Node||r instanceof ht(r).Node}function Ot(r){return r instanceof Element||r instanceof ht(r).Element}function At(r){return r instanceof HTMLElement||r instanceof ht(r).HTMLElement}function $o(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof ht(r).ShadowRoot}function hi(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=wt(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function Rc(r){return["table","td","th"].includes(Mr(r))}function rs(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function Cn(r){const e=$n(),t=wt(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function Mc(r){let e=Kt(r);for(;At(e)&&!$r(e);){if(rs(e))return null;if(Cn(e))return e;e=Kt(e)}return null}function $n(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function $r(r){return["html","body","#document"].includes(Mr(r))}function wt(r){return ht(r).getComputedStyle(r)}function is(r){return Ot(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function Kt(r){if(Mr(r)==="html")return r;const e=r.assignedSlot||r.parentNode||$o(r)&&r.host||er(r);return $o(e)?e.host:e}function ha(r){const e=Kt(r);return $r(e)?r.ownerDocument?r.ownerDocument.body:r.body:At(e)&&hi(e)?e:ha(e)}function cn(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=ha(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),o=ht(s);return n?e.concat(o,o.visualViewport||[],hi(s)?s:[],o.frameElement&&t?cn(o.frameElement):[]):e.concat(s,cn(s,[],t))}function da(r){const e=wt(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=At(r),n=s?r.offsetWidth:t,o=s?r.offsetHeight:i,l=Bi(t)!==n||Bi(i)!==o;return l&&(t=n,i=o),{width:t,height:i,$:l}}function ua(r){return Ot(r)?r:r.contextElement}function xr(r){const e=ua(r);if(!At(e))return Qt(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=da(e);let o=(n?Bi(t.width):t.width)/i,l=(n?Bi(t.height):t.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Uc=Qt(0);function pa(r){const e=ht(r);return!$n()||!e.visualViewport?Uc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Fc(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==ht(r)?!1:e}function Jr(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=ua(r);let o=Qt(1);e&&(i?Ot(i)&&(o=xr(i)):o=xr(r));const l=Fc(n,t,i)?pa(n):Qt(0);let h=(s.left+l.x)/o.x,p=(s.top+l.y)/o.y,g=s.width/o.x,f=s.height/o.y;if(n){const b=ht(n),x=i&&Ot(i)?ht(i):i;let C=b,S=C.frameElement;for(;S&&i&&x!==C;){const k=xr(S),U=S.getBoundingClientRect(),j=wt(S),H=U.left+(S.clientLeft+parseFloat(j.paddingLeft))*k.x,K=U.top+(S.clientTop+parseFloat(j.paddingTop))*k.y;h*=k.x,p*=k.y,g*=k.x,f*=k.y,h+=H,p+=K,C=ht(S),S=C.frameElement}}return Cr({width:g,height:f,x:h,y:p})}function Ic(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",o=er(i),l=e?rs(e.floating):!1;if(i===o||l&&n)return t;let h={scrollLeft:0,scrollTop:0},p=Qt(1);const g=Qt(0),f=At(i);if((f||!f&&!n)&&((Mr(i)!=="body"||hi(o))&&(h=is(i)),At(i))){const b=Jr(i);p=xr(i),g.x=b.x+i.clientLeft,g.y=b.y+i.clientTop}return{width:t.width*p.x,height:t.height*p.y,x:t.x*p.x-h.scrollLeft*p.x+g.x,y:t.y*p.y-h.scrollTop*p.y+g.y}}function jc(r){return Array.from(r.getClientRects())}function fa(r){return Jr(er(r)).left+is(r).scrollLeft}function Wc(r){const e=er(r),t=is(r),i=r.ownerDocument.body,s=Rt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Rt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-t.scrollLeft+fa(r);const l=-t.scrollTop;return wt(i).direction==="rtl"&&(o+=Rt(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:l}}function Nc(r,e){const t=ht(r),i=er(r),s=t.visualViewport;let n=i.clientWidth,o=i.clientHeight,l=0,h=0;if(s){n=s.width,o=s.height;const p=$n();(!p||p&&e==="fixed")&&(l=s.offsetLeft,h=s.offsetTop)}return{width:n,height:o,x:l,y:h}}function Hc(r,e){const t=Jr(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=At(r)?xr(r):Qt(1),o=r.clientWidth*n.x,l=r.clientHeight*n.y,h=s*n.x,p=i*n.y;return{width:o,height:l,x:h,y:p}}function Po(r,e,t){let i;if(e==="viewport")i=Nc(r,t);else if(e==="document")i=Wc(er(r));else if(Ot(e))i=Hc(e,t);else{const s=pa(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return Cr(i)}function ga(r,e){const t=Kt(r);return t===e||!Ot(t)||$r(t)?!1:wt(t).position==="fixed"||ga(t,e)}function Bc(r,e){const t=e.get(r);if(t)return t;let i=cn(r,[],!1).filter(l=>Ot(l)&&Mr(l)!=="body"),s=null;const n=wt(r).position==="fixed";let o=n?Kt(r):r;for(;Ot(o)&&!$r(o);){const l=wt(o),h=Cn(o);!h&&l.position==="fixed"&&(s=null),(n?!h&&!s:!h&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||hi(o)&&!h&&ga(r,o))?i=i.filter(g=>g!==o):s=l,o=Kt(o)}return e.set(r,i),i}function zc(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const o=[...t==="clippingAncestors"?rs(e)?[]:Bc(e,this._c):[].concat(t),i],l=o[0],h=o.reduce((p,g)=>{const f=Po(e,g,s);return p.top=Rt(f.top,p.top),p.right=kr(f.right,p.right),p.bottom=kr(f.bottom,p.bottom),p.left=Rt(f.left,p.left),p},Po(e,l,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function Vc(r){const{width:e,height:t}=da(r);return{width:e,height:t}}function Yc(r,e,t){const i=At(e),s=er(e),n=t==="fixed",o=Jr(r,!0,n,e);let l={scrollLeft:0,scrollTop:0};const h=Qt(0);if(i||!i&&!n)if((Mr(e)!=="body"||hi(s))&&(l=is(e)),i){const f=Jr(e,!0,n,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else s&&(h.x=fa(s));const p=o.left+l.scrollLeft-h.x,g=o.top+l.scrollTop-h.y;return{x:p,y:g,width:o.width,height:o.height}}function tn(r){return wt(r).position==="static"}function So(r,e){return!At(r)||wt(r).position==="fixed"?null:e?e(r):r.offsetParent}function ma(r,e){const t=ht(r);if(rs(r))return t;if(!At(r)){let s=Kt(r);for(;s&&!$r(s);){if(Ot(s)&&!tn(s))return s;s=Kt(s)}return t}let i=So(r,e);for(;i&&Rc(i)&&tn(i);)i=So(i,e);return i&&$r(i)&&tn(i)&&!Cn(i)?t:i||Mc(r)||t}const qc=async function(r){const e=this.getOffsetParent||ma,t=this.getDimensions,i=await t(r.floating);return{reference:Yc(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Xc(r){return wt(r).direction==="rtl"}const Gc={convertOffsetParentRelativeRectToViewportRelativeRect:Ic,getDocumentElement:er,getClippingRect:zc,getOffsetParent:ma,getElementRects:qc,getClientRects:jc,getDimensions:Vc,getScale:xr,isElement:Ot,isRTL:Xc},Zc=Tc,Qc=Lc,Kc=Oc,Jc=Ec,eh=(r,e,t)=>{const i=new Map,s={platform:Gc,...t},n={...s.platform,_c:i};return Sc(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=Ji(class extends kn{constructor(r){var e;if(super(r),r.type!==_n.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Zt}});var th=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,di=(r,e,t,i)=>{for(var s=i>1?void 0:i?rh(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&th(e,t,s),s};let It=class extends et{constructor(){super(...arguments),this.dropdownRef=Re(),this.invokerRef=Re(),this.optionsRef=Re(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){eh(this.invokerRef.value,this.optionsRef.value,{middleware:[Zc(2),Kc(),Jc(),Qc()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,o;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(o=this.dropdownRef.value)==null||o.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return O`

            <div class="dropdown" ${Ne(this.dropdownRef)}>

                <thermal-button class="${Mt(r)}" ${Ne(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?O`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:O`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};It.shadowRootOptions={...et.shadowRootOptions,mode:"open"};It.styles=Oe`

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
    
    `;di([ai({slot:"option"})],It.prototype,"_options",2);di([F({type:String,reflect:!0})],It.prototype,"open",2);di([F({type:String,reflect:!0,attribute:!0}),L()],It.prototype,"interactive",2);di([F({type:String,reflect:!0})],It.prototype,"variant",2);It=di([ae("thermal-dropdown")],It);var ih=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,ss=(r,e,t,i)=>{for(var s=i>1?void 0:i?sh(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ih(e,t,s),s};let Pr=class extends et{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Re(),this.contentRef=Re(),this.rulerContentRef=Re()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return O`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ne(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ne(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ne(this.contentRef)}>

                    ${this.collapsed===!1?O`
                        <slot></slot>    
                    `:z}
                
                </div>

            </div>

            ${this.collapsed?O`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:z}
        
        `}};Pr.styles=Oe`

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

    `;ss([L()],Pr.prototype,"collapsed",2);ss([L()],Pr.prototype,"lastContentWidth",2);ss([L()],Pr.prototype,"drawerRef",2);Pr=ss([ae("thermal-bar")],Pr);var nh=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?oh(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&nh(e,t,s),s};let jt=class extends et{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=Re(),this.contentRef=Re()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,o=t.contentRect.width,l=n-175,h=o-0,p=this.contentRef.value.offsetHeight,g=4/3;let f=0,b=0;p<l?(console.log("priorita šířky"),f=h,b=f/g):(console.log("priorita výšky"),b=l,f=b*g),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${b}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return O`

        <div class="container ${this.dark?"dark":"normal"}" ${Ne(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?O`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${this.showfullscreen===!0?O`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?O`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:O`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:z}

                -->
                
            </div> 
        `:""}

        ${this.pre.length>=0?O`
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
        
        `}};jt.styles=Oe`

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
    
    `;dr([ai({slot:"bar",flatten:!0})],jt.prototype,"barItems",2);dr([ai({slot:"bar",flatten:!0})],jt.prototype,"barElements",2);dr([ai({slot:"pre",flatten:!0})],jt.prototype,"pre",2);dr([F({type:String,reflect:!0})],jt.prototype,"fullscreen",2);dr([F({type:String,reflect:!0,attribute:!0})],jt.prototype,"showfullscreen",2);dr([F({type:String,reflect:!0,attribute:!0})],jt.prototype,"dark",2);jt=dr([ae("thermal-app")],jt);var ah=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,ch=(r,e,t,i)=>{for(var s=i>1?void 0:i?lh(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ah(e,t,s),s};let hn=class extends et{render(){return O`
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
                        <p>version ${bn}</p>
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
        `}};hn.styles=Oe`

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
    
    `;hn=ch([ae("app-info-button")],hn);function vt(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function lr(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const va=6048e5,hh=864e5;let dh={};function ns(){return dh}function ei(r,e){var l,h,p,g;const t=ns(),i=(e==null?void 0:e.weekStartsOn)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((g=(p=t.locale)==null?void 0:p.options)==null?void 0:g.weekStartsOn)??0,s=vt(r),n=s.getDay(),o=(n<i?7:0)+n-i;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function Vi(r){return ei(r,{weekStartsOn:1})}function ba(r){const e=vt(r),t=e.getFullYear(),i=lr(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=Vi(i),n=lr(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const o=Vi(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function Oo(r){const e=vt(r);return e.setHours(0,0,0,0),e}function Ao(r){const e=vt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function uh(r,e){const t=Oo(r),i=Oo(e),s=+t-Ao(t),n=+i-Ao(i);return Math.round((s-n)/hh)}function ph(r){const e=ba(r),t=lr(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),Vi(t)}function fh(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function ya(r){if(!fh(r)&&typeof r!="number")return!1;const e=vt(r);return!isNaN(Number(e))}function gh(r){const e=vt(r),t=lr(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const mh={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},vh=(r,e,t)=>{let i;const s=mh[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function rn(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const bh={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wh={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xh={date:rn({formats:bh,defaultWidth:"full"}),time:rn({formats:yh,defaultWidth:"full"}),dateTime:rn({formats:wh,defaultWidth:"full"})},_h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},kh=(r,e,t,i)=>_h[r];function zr(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const o=r.defaultFormattingWidth||r.defaultWidth,l=t!=null&&t.width?String(t.width):o;s=r.formattingValues[l]||r.formattingValues[o]}else{const o=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[l]||r.values[o]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const Ch={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$h={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ph={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Sh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Oh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ah={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Eh=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Dh={ordinalNumber:Eh,era:zr({values:Ch,defaultWidth:"wide"}),quarter:zr({values:$h,defaultWidth:"wide",argumentCallback:r=>r-1}),month:zr({values:Ph,defaultWidth:"wide"}),day:zr({values:Sh,defaultWidth:"wide"}),dayPeriod:zr({values:Oh,defaultWidth:"wide",formattingValues:Ah,defaultFormattingWidth:"wide"})};function Vr(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const o=n[0],l=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],h=Array.isArray(l)?Lh(l,f=>f.test(o)):Th(l,f=>f.test(o));let p;p=r.valueCallback?r.valueCallback(h):h,p=t.valueCallback?t.valueCallback(p):p;const g=e.slice(o.length);return{value:p,rest:g}}}function Th(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function Lh(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Rh(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let o=r.valueCallback?r.valueCallback(n[0]):n[0];o=t.valueCallback?t.valueCallback(o):o;const l=e.slice(s.length);return{value:o,rest:l}}}const Mh=/^(\d+)(th|st|nd|rd)?/i,Uh=/\d+/i,Fh={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ih={any:[/^b/i,/^(a|c)/i]},jh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Wh={any:[/1/i,/2/i,/3/i,/4/i]},Nh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Hh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Bh={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Vh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Yh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qh={ordinalNumber:Rh({matchPattern:Mh,parsePattern:Uh,valueCallback:r=>parseInt(r,10)}),era:Vr({matchPatterns:Fh,defaultMatchWidth:"wide",parsePatterns:Ih,defaultParseWidth:"any"}),quarter:Vr({matchPatterns:jh,defaultMatchWidth:"wide",parsePatterns:Wh,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Vr({matchPatterns:Nh,defaultMatchWidth:"wide",parsePatterns:Hh,defaultParseWidth:"any"}),day:Vr({matchPatterns:Bh,defaultMatchWidth:"wide",parsePatterns:zh,defaultParseWidth:"any"}),dayPeriod:Vr({matchPatterns:Vh,defaultMatchWidth:"any",parsePatterns:Yh,defaultParseWidth:"any"})},Xh={code:"en-US",formatDistance:vh,formatLong:xh,formatRelative:kh,localize:Dh,match:qh,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Gh(r){const e=vt(r);return uh(e,gh(e))+1}function Zh(r){const e=vt(r),t=+Vi(e)-+ph(e);return Math.round(t/va)+1}function wa(r,e){var g,f,b,x;const t=vt(r),i=t.getFullYear(),s=ns(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((x=(b=s.locale)==null?void 0:b.options)==null?void 0:x.firstWeekContainsDate)??1,o=lr(r,0);o.setFullYear(i+1,0,n),o.setHours(0,0,0,0);const l=ei(o,e),h=lr(r,0);h.setFullYear(i,0,n),h.setHours(0,0,0,0);const p=ei(h,e);return t.getTime()>=l.getTime()?i+1:t.getTime()>=p.getTime()?i:i-1}function Qh(r,e){var l,h,p,g;const t=ns(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??t.firstWeekContainsDate??((g=(p=t.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,s=wa(r,e),n=lr(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),ei(n,e)}function Kh(r,e){const t=vt(r),i=+ei(t,e)-+Qh(t,e);return Math.round(i/va)+1}function ge(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const qt={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return ge(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):ge(t+1,2)},d(r,e){return ge(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return ge(r.getHours()%12||12,e.length)},H(r,e){return ge(r.getHours(),e.length)},m(r,e){return ge(r.getMinutes(),e.length)},s(r,e){return ge(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return ge(s,e.length)}},br={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Eo={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return qt.y(r,e)},Y:function(r,e,t,i){const s=wa(r,i),n=s>0?s:1-s;if(e==="YY"){const o=n%100;return ge(o,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):ge(n,e.length)},R:function(r,e){const t=ba(r);return ge(t,e.length)},u:function(r,e){const t=r.getFullYear();return ge(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ge(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ge(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return qt.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return ge(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=Kh(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):ge(s,e.length)},I:function(r,e,t){const i=Zh(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):ge(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):qt.d(r,e)},D:function(r,e,t){const i=Gh(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):ge(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return ge(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return ge(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return ge(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=br.noon:i===0?s=br.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=br.evening:i>=12?s=br.afternoon:i>=4?s=br.morning:s=br.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return qt.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):qt.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):ge(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):ge(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):qt.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):qt.s(r,e)},S:function(r,e){return qt.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return To(i);case"XXXX":case"XX":return sr(i);case"XXXXX":case"XXX":default:return sr(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return To(i);case"xxxx":case"xx":return sr(i);case"xxxxx":case"xxx":default:return sr(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Do(i,":");case"OOOO":default:return"GMT"+sr(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Do(i,":");case"zzzz":default:return"GMT"+sr(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return ge(i,e.length)},T:function(r,e,t){const i=r.getTime();return ge(i,e.length)}};function Do(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+ge(n,2)}function To(r,e){return r%60===0?(r>0?"-":"+")+ge(Math.abs(r)/60,2):sr(r,e)}function sr(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=ge(Math.trunc(i/60),2),n=ge(i%60,2);return t+s+e+n}const Lo=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},xa=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Jh=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Lo(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Lo(i,e)).replace("{{time}}",xa(s,e))},ed={p:xa,P:Jh},td=/^D+$/,rd=/^Y+$/,id=["D","DD","YY","YYYY"];function sd(r){return td.test(r)}function nd(r){return rd.test(r)}function od(r,e,t){const i=ad(r,e,t);if(console.warn(i),id.includes(r))throw new RangeError(i)}function ad(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ld=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,hd=/^'([^]*?)'?$/,dd=/''/g,ud=/[a-zA-Z]/;function Sr(r,e,t){var g,f,b,x;const i=ns(),s=i.locale??Xh,n=i.firstWeekContainsDate??((f=(g=i.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??1,o=i.weekStartsOn??((x=(b=i.locale)==null?void 0:b.options)==null?void 0:x.weekStartsOn)??0,l=vt(r);if(!ya(l))throw new RangeError("Invalid time value");let h=e.match(cd).map(C=>{const S=C[0];if(S==="p"||S==="P"){const k=ed[S];return k(C,s.formatLong)}return C}).join("").match(ld).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const S=C[0];if(S==="'")return{isToken:!1,value:pd(C)};if(Eo[S])return{isToken:!0,value:C};if(S.match(ud))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return{isToken:!1,value:C}});s.localize.preprocessor&&(h=s.localize.preprocessor(l,h));const p={firstWeekContainsDate:n,weekStartsOn:o,locale:s};return h.map(C=>{if(!C.isToken)return C.value;const S=C.value;(nd(S)||sd(S))&&od(S,e,String(r));const k=Eo[S[0]];return k(l,S,s.localize,p)}).join("")}function pd(r){const e=r.match(hd);return e?e[1].replace(dd,"'"):r}function sn(r,e){const t=vt(r);if(!ya(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const o=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const h=ge(t.getDate(),2),p=ge(t.getMonth()+1,2);n=`${ge(t.getFullYear(),4)}${o}${p}${o}${h}`}if(s!=="date"){const h=ge(t.getHours(),2),p=ge(t.getMinutes(),2),g=ge(t.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${l}${p}${l}${g}`}return n}var fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gd(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var dn={exports:{}};const md={},vd=Object.freeze(Object.defineProperty({__proto__:null,default:md},Symbol.toStringTag,{value:"Module"})),yr=gd(vd);/**
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
 */(function(r,e){(function(t,i){i(e)})(fd,function(t){var i={},s={exports:{}};(function(_){var A=function(Y){return typeof Y<"u"&&Y.versions!=null&&Y.versions.node!=null&&Y+""=="[object process]"};_.exports.isNode=A,_.exports.platform=typeof process<"u"&&A(process)?"node":"browser";var E=_.exports.platform==="node"&&yr;_.exports.isMainThread=_.exports.platform==="node"?(!E||E.isMainThread)&&!process.connected:typeof Window<"u",_.exports.cpus=_.exports.platform==="browser"?self.navigator.hardwareConcurrency:yr.cpus().length})(s);var n=s.exports,o={},l;function h(){if(l)return o;l=1;function _(Y,ke){var Q=this;if(!(this instanceof _))throw new SyntaxError("Constructor must be called with the new operator");if(typeof Y!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var De=[],ve=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var I=function(te,ue){De.push(te),ve.push(ue)};this.then=function($,te){return new _(function(ue,He){var Ge=$?A($,ue,He):ue,$t=te?A(te,ue,He):He;I(Ge,$t)},Q)};var be=function(te){return Q.resolved=!0,Q.rejected=!1,Q.pending=!1,De.forEach(function(ue){ue(te)}),I=function(He,Ge){He(te)},be=w=function(){},Q},w=function(te){return Q.resolved=!1,Q.rejected=!0,Q.pending=!1,ve.forEach(function(ue){ue(te)}),I=function(He,Ge){Ge(te)},be=w=function(){},Q};this.cancel=function(){return ke?ke.cancel():w(new E),Q},this.timeout=function($){if(ke)ke.timeout($);else{var te=setTimeout(function(){w(new D("Promise timed out after "+$+" ms"))},$);Q.always(function(){clearTimeout(te)})}return Q},Y(function($){be($)},function($){w($)})}function A(Y,ke,Q){return function(De){try{var ve=Y(De);ve&&typeof ve.then=="function"&&typeof ve.catch=="function"?ve.then(ke,Q):ke(ve)}catch(I){Q(I)}}}_.prototype.catch=function(Y){return this.then(null,Y)},_.prototype.always=function(Y){return this.then(Y,Y)},_.all=function(Y){return new _(function(ke,Q){var De=Y.length,ve=[];De?Y.forEach(function(I,be){I.then(function(w){ve[be]=w,De--,De==0&&ke(ve)},function(w){De=0,Q(w)})}):ke(ve)})},_.defer=function(){var Y={};return Y.promise=new _(function(ke,Q){Y.resolve=ke,Y.reject=Q}),Y};function E(Y){this.message=Y||"promise cancelled",this.stack=new Error().stack}E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="CancellationError",_.CancellationError=E;function D(Y){this.message=Y||"timeout exceeded",this.stack=new Error().stack}return D.prototype=new Error,D.prototype.constructor=Error,D.prototype.name="TimeoutError",_.TimeoutError=D,o.Promise=_,o}function p(_,A){(A==null||A>_.length)&&(A=_.length);for(var E=0,D=Array(A);E<A;E++)D[E]=_[E];return D}function g(_,A){var E=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(!E){if(Array.isArray(_)||(E=U(_))||A){E&&(_=E);var D=0,Y=function(){};return{s:Y,n:function(){return D>=_.length?{done:!0}:{done:!1,value:_[D++]}},e:function(ve){throw ve},f:Y}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ke,Q=!0,De=!1;return{s:function(){E=E.call(_)},n:function(){var ve=E.next();return Q=ve.done,ve},e:function(ve){De=!0,ke=ve},f:function(){try{Q||E.return==null||E.return()}finally{if(De)throw ke}}}}function f(_,A,E){return(A=S(A))in _?Object.defineProperty(_,A,{value:E,enumerable:!0,configurable:!0,writable:!0}):_[A]=E,_}function b(_,A){var E=Object.keys(_);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(_);A&&(D=D.filter(function(Y){return Object.getOwnPropertyDescriptor(_,Y).enumerable})),E.push.apply(E,D)}return E}function x(_){for(var A=1;A<arguments.length;A++){var E=arguments[A]!=null?arguments[A]:{};A%2?b(Object(E),!0).forEach(function(D){f(_,D,E[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(E)):b(Object(E)).forEach(function(D){Object.defineProperty(_,D,Object.getOwnPropertyDescriptor(E,D))})}return _}function C(_,A){if(typeof _!="object"||!_)return _;var E=_[Symbol.toPrimitive];if(E!==void 0){var D=E.call(_,A||"default");if(typeof D!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)(_)}function S(_){var A=C(_,"string");return typeof A=="symbol"?A:A+""}function k(_){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},k(_)}function U(_,A){if(_){if(typeof _=="string")return p(_,A);var E={}.toString.call(_).slice(8,-1);return E==="Object"&&_.constructor&&(E=_.constructor.name),E==="Map"||E==="Set"?Array.from(_):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?p(_,A):void 0}}var j={exports:{}},H={},K;function J(){return K||(K=1,H.validateOptions=function(A,E,D){if(A){var Y=A?Object.keys(A):[],ke=Y.find(function(De){return!E.includes(De)});if(ke)throw new Error('Object "'+D+'" contains an unknown option "'+ke+'"');var Q=E.find(function(De){return Object.prototype[De]&&!Y.includes(De)});if(Q)throw new Error('Object "'+D+'" contains an inherited option "'+Q+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return A}},H.workerOptsNames=["credentials","name","type"],H.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],H.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),H}var we,W;function ce(){return W||(W=1,we=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),we}var ee;function oe(){if(ee)return j.exports;ee=1;var _=h(),A=_.Promise,E=n,D=J(),Y=D.validateOptions,ke=D.forkOptsNames,Q=D.workerThreadOptsNames,De=D.workerOptsNames,ve="__workerpool-terminate__";function I(){var V=w();if(!V)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return V}function be(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function w(){try{return yr}catch(V){if(k(V)==="object"&&V!==null&&V.code==="MODULE_NOT_FOUND")return null;throw V}}function $(){if(E.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var V=new Blob([ce()],{type:"text/javascript"});return window.URL.createObjectURL(V)}else return __dirname+"/worker.js"}function te(V,re){if(re.workerType==="web")return be(),ue(V,re.workerOpts,Worker);if(re.workerType==="thread")return P=I(),He(V,P,re);if(re.workerType==="process"||!re.workerType)return Ge(V,$t(re),yr);if(E.platform==="browser")return be(),ue(V,re.workerOpts,Worker);var P=w();return P?He(V,P,re):Ge(V,$t(re),yr)}function ue(V,re,P){Y(re,De,"workerOpts");var Z=new P(V,re);return Z.isBrowserWorker=!0,Z.on=function(Ce,_e){this.addEventListener(Ce,function(Le){_e(Le.data)})},Z.send=function(Ce,_e){this.postMessage(Ce,_e)},Z}function He(V,re,P){var Z,Ce;Y(P==null?void 0:P.workerThreadOpts,Q,"workerThreadOpts");var _e=new re.Worker(V,x({stdout:(Z=P==null?void 0:P.emitStdStreams)!==null&&Z!==void 0?Z:!1,stderr:(Ce=P==null?void 0:P.emitStdStreams)!==null&&Ce!==void 0?Ce:!1},P==null?void 0:P.workerThreadOpts));return _e.isWorkerThread=!0,_e.send=function(Le,pe){this.postMessage(Le,pe)},_e.kill=function(){return this.terminate(),!0},_e.disconnect=function(){this.terminate()},P!=null&&P.emitStdStreams&&(_e.stdout.on("data",function(Le){return _e.emit("stdout",Le)}),_e.stderr.on("data",function(Le){return _e.emit("stderr",Le)})),_e}function Ge(V,re,P){Y(re.forkOpts,ke,"forkOpts");var Z=P.fork(V,re.forkArgs,re.forkOpts),Ce=Z.send;return Z.send=function(_e){return Ce.call(Z,_e)},re.emitStdStreams&&(Z.stdout.on("data",function(_e){return Z.emit("stdout",_e)}),Z.stderr.on("data",function(_e){return Z.emit("stderr",_e)})),Z.isChildProcess=!0,Z}function $t(V){V=V||{};var re=process.execArgv.join(" "),P=re.indexOf("--inspect")!==-1,Z=re.indexOf("--debug-brk")!==-1,Ce=[];return P&&(Ce.push("--inspect="+V.debugPort),Z&&Ce.push("--debug-brk")),process.execArgv.forEach(function(_e){_e.indexOf("--max-old-space-size")>-1&&Ce.push(_e)}),Object.assign({},V,{forkArgs:V.forkArgs,forkOpts:Object.assign({},V.forkOpts,{execArgv:(V.forkOpts&&V.forkOpts.execArgv||[]).concat(Ce),stdio:V.emitStdStreams?"pipe":void 0})})}function ct(V){for(var re=new Error(""),P=Object.keys(V),Z=0;Z<P.length;Z++)re[P[Z]]=V[P[Z]];return re}function pt(V,re){if(Object.keys(V.processing).length===1){var P=Object.values(V.processing)[0];P.options&&typeof P.options.on=="function"&&P.options.on(re)}}function Vt(V,re){var P=this,Z=re||{};this.script=V||$(),this.worker=te(this.script,Z),this.debugPort=Z.debugPort,this.forkOpts=Z.forkOpts,this.forkArgs=Z.forkArgs,this.workerOpts=Z.workerOpts,this.workerThreadOpts=Z.workerThreadOpts,this.workerTerminateTimeout=Z.workerTerminateTimeout,V||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(pe){pt(P,{stdout:pe.toString()})}),this.worker.on("stderr",function(pe){pt(P,{stderr:pe.toString()})}),this.worker.on("message",function(pe){if(!P.terminated)if(typeof pe=="string"&&pe==="ready")P.worker.ready=!0,_e();else{var rt=pe.id,Be=P.processing[rt];Be!==void 0&&(pe.isEvent?Be.options&&typeof Be.options.on=="function"&&Be.options.on(pe.payload):(delete P.processing[rt],P.terminating===!0&&P.terminate(),pe.error?Be.resolver.reject(ct(pe.error)):Be.resolver.resolve(pe.result)))}});function Ce(pe){P.terminated=!0;for(var rt in P.processing)P.processing[rt]!==void 0&&P.processing[rt].resolver.reject(pe);P.processing=Object.create(null)}function _e(){var pe=g(P.requestQueue.splice(0)),rt;try{for(pe.s();!(rt=pe.n()).done;){var Be=rt.value;P.worker.send(Be.message,Be.transfer)}}catch(xi){pe.e(xi)}finally{pe.f()}}var Le=this.worker;this.worker.on("error",Ce),this.worker.on("exit",function(pe,rt){var Be=`Workerpool Worker terminated Unexpectedly
`;Be+="    exitCode: `"+pe+"`\n",Be+="    signalCode: `"+rt+"`\n",Be+="    workerpool.script: `"+P.script+"`\n",Be+="    spawnArgs: `"+Le.spawnargs+"`\n",Be+="    spawnfile: `"+Le.spawnfile+"`\n",Be+="    stdout: `"+Le.stdout+"`\n",Be+="    stderr: `"+Le.stderr+"`\n",Ce(new Error(Be))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Vt.prototype.methods=function(){return this.exec("methods")},Vt.prototype.exec=function(V,re,P,Z){P||(P=A.defer());var Ce=++this.lastId;this.processing[Ce]={id:Ce,resolver:P,options:Z};var _e={message:{id:Ce,method:V,params:re},transfer:Z&&Z.transfer};this.terminated?P.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(_e.message,_e.transfer):this.requestQueue.push(_e);var Le=this;return P.promise.catch(function(pe){if(pe instanceof A.CancellationError||pe instanceof A.TimeoutError)return delete Le.processing[Ce],Le.terminateAndNotify(!0).then(function(){throw pe},function(rt){throw rt});throw pe})},Vt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Vt.prototype.terminate=function(V,re){var P=this;if(V){for(var Z in this.processing)this.processing[Z]!==void 0&&this.processing[Z].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof re=="function"&&(this.terminationHandler=re),this.busy())this.terminating=!0;else{var Ce=function(pe){if(P.terminated=!0,P.cleaning=!1,P.worker!=null&&P.worker.removeAllListeners&&P.worker.removeAllListeners("message"),P.worker=null,P.terminating=!1,P.terminationHandler)P.terminationHandler(pe,P);else if(pe)throw pe};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ce(new Error("worker already killed!"));return}var _e=setTimeout(function(){P.worker&&P.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(_e),P.worker&&(P.worker.killed=!0),Ce()}),this.worker.ready?this.worker.send(ve):this.requestQueue.push({message:ve}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ce()}},Vt.prototype.terminateAndNotify=function(V,re){var P=A.defer();return re&&P.promise.timeout(re),this.terminate(V,function(Z,Ce){Z?P.reject(Z):P.resolve(Ce)}),P.promise},j.exports=Vt,j.exports._tryRequireWorkerThreads=w,j.exports._setupProcessWorker=Ge,j.exports._setupBrowserWorker=ue,j.exports._setupWorkerThreadWorker=He,j.exports.ensureWorkerThreads=I,j.exports}var ie,de;function me(){if(de)return ie;de=1;var _=65535;ie=A;function A(){this.ports=Object.create(null),this.length=0}return A.prototype.nextAvailableStartingAt=function(E){for(;this.ports[E]===!0;)E++;if(E>=_)throw new Error("WorkerPool debug port limit reached: "+E+">= "+_);return this.ports[E]=!0,this.length++,E},A.prototype.releasePort=function(E){delete this.ports[E],this.length--},ie}var se,xe;function Me(){if(xe)return se;xe=1;var _=h(),A=_.Promise,E=oe(),D=n,Y=me(),ke=new Y;function Q(w,$){typeof w=="string"?this.script=w||null:(this.script=null,$=w),this.workers=[],this.tasks=[],$=$||{},this.forkArgs=Object.freeze($.forkArgs||[]),this.forkOpts=Object.freeze($.forkOpts||{}),this.workerOpts=Object.freeze($.workerOpts||{}),this.workerThreadOpts=Object.freeze($.workerThreadOpts||{}),this.debugPortStart=$.debugPortStart||43210,this.nodeWorker=$.nodeWorker,this.workerType=$.workerType||$.nodeWorker||"auto",this.maxQueueSize=$.maxQueueSize||1/0,this.workerTerminateTimeout=$.workerTerminateTimeout||1e3,this.onCreateWorker=$.onCreateWorker||function(){return null},this.onTerminateWorker=$.onTerminateWorker||function(){return null},this.emitStdStreams=$.emitStdStreams||!1,$&&"maxWorkers"in $?(De($.maxWorkers),this.maxWorkers=$.maxWorkers):this.maxWorkers=Math.max((D.cpus||4)-1,1),$&&"minWorkers"in $&&($.minWorkers==="max"?this.minWorkers=this.maxWorkers:(ve($.minWorkers),this.minWorkers=$.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&E.ensureWorkerThreads()}Q.prototype.exec=function(w,$,te){if($&&!Array.isArray($))throw new TypeError('Array expected as argument "params"');if(typeof w=="string"){var ue=A.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var He=this.tasks,Ge={method:w,params:$,resolver:ue,timeout:null,options:te};He.push(Ge);var $t=ue.promise.timeout;return ue.promise.timeout=function(pt){return He.indexOf(Ge)!==-1?(Ge.timeout=pt,ue.promise):$t.call(ue.promise,pt)},this._next(),ue.promise}else{if(typeof w=="function")return this.exec("run",[String(w),$],te);throw new TypeError('Function or string expected as argument "method"')}},Q.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var w=this;return this.exec("methods").then(function($){var te={};return $.forEach(function(ue){te[ue]=function(){return w.exec(ue,Array.prototype.slice.call(arguments))}}),te})},Q.prototype._next=function(){if(this.tasks.length>0){var w=this._getWorker();if(w){var $=this,te=this.tasks.shift();if(te.resolver.promise.pending){var ue=w.exec(te.method,te.params,te.resolver,te.options).then($._boundNext).catch(function(){if(w.terminated)return $._removeWorker(w)}).then(function(){$._next()});typeof te.timeout=="number"&&ue.timeout(te.timeout)}else $._next()}}},Q.prototype._getWorker=function(){for(var w=this.workers,$=0;$<w.length;$++){var te=w[$];if(te.busy()===!1)return te}return w.length<this.maxWorkers?(te=this._createWorkerHandler(),w.push(te),te):null},Q.prototype._removeWorker=function(w){var $=this;return ke.releasePort(w.debugPort),this._removeWorkerFromList(w),this._ensureMinWorkers(),new A(function(te,ue){w.terminate(!1,function(He){$.onTerminateWorker({forkArgs:w.forkArgs,forkOpts:w.forkOpts,workerThreadOpts:w.workerThreadOpts,script:w.script}),He?ue(He):te(w)})})},Q.prototype._removeWorkerFromList=function(w){var $=this.workers.indexOf(w);$!==-1&&this.workers.splice($,1)},Q.prototype.terminate=function(w,$){var te=this;this.tasks.forEach(function(ct){ct.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ue=function(pt){ke.releasePort(pt.debugPort),this._removeWorkerFromList(pt)},He=ue.bind(this),Ge=[],$t=this.workers.slice();return $t.forEach(function(ct){var pt=ct.terminateAndNotify(w,$).then(He).always(function(){te.onTerminateWorker({forkArgs:ct.forkArgs,forkOpts:ct.forkOpts,workerThreadOpts:ct.workerThreadOpts,script:ct.script})});Ge.push(pt)}),A.all(Ge)},Q.prototype.stats=function(){var w=this.workers.length,$=this.workers.filter(function(te){return te.busy()}).length;return{totalWorkers:w,busyWorkers:$,idleWorkers:w-$,pendingTasks:this.tasks.length,activeTasks:$}},Q.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var w=this.workers.length;w<this.minWorkers;w++)this.workers.push(this._createWorkerHandler())},Q.prototype._createWorkerHandler=function(){var w=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new E(w.script||this.script,{forkArgs:w.forkArgs||this.forkArgs,forkOpts:w.forkOpts||this.forkOpts,workerOpts:w.workerOpts||this.workerOpts,workerThreadOpts:w.workerThreadOpts||this.workerThreadOpts,debugPort:ke.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function De(w){if(!I(w)||!be(w)||w<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function ve(w){if(!I(w)||!be(w)||w<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function I(w){return typeof w=="number"}function be(w){return Math.round(w)==w}return se=Q,se}var Qe={},Xe,Ir;function gr(){if(Ir)return Xe;Ir=1;function _(A,E){this.message=A,this.transfer=E}return Xe=_,Xe}var vi;function bi(){return vi||(vi=1,function(_){var A=gr(),E="__workerpool-terminate__",D={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")D.on=function(I,be){addEventListener(I,function(w){be(w.data)})},D.send=function(I,be){be?postMessage(I,be):postMessage(I)};else if(typeof process<"u"){var Y;try{Y=yr}catch(I){if(!(k(I)==="object"&&I!==null&&I.code==="MODULE_NOT_FOUND"))throw I}if(Y&&Y.parentPort!==null){var ke=Y.parentPort;D.send=ke.postMessage.bind(ke),D.on=ke.on.bind(ke),D.exit=process.exit.bind(process)}else D.on=process.on.bind(process),D.send=function(I){process.send(I)},D.on("disconnect",function(){process.exit(1)}),D.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Q(I){return Object.getOwnPropertyNames(I).reduce(function(be,w){return Object.defineProperty(be,w,{value:I[w],enumerable:!0})},{})}function De(I){return I&&typeof I.then=="function"&&typeof I.catch=="function"}D.methods={},D.methods.run=function(be,w){var $=new Function("return ("+be+").apply(null, arguments);");return $.apply($,w)},D.methods.methods=function(){return Object.keys(D.methods)},D.terminationHandler=void 0,D.cleanupAndExit=function(I){var be=function(){D.exit(I)};if(!D.terminationHandler)return be();var w=D.terminationHandler(I);De(w)?w.then(be,be):be()};var ve=null;D.on("message",function(I){if(I===E)return D.cleanupAndExit(0);try{var be=D.methods[I.method];if(be){ve=I.id;var w=be.apply(be,I.params);De(w)?w.then(function($){$ instanceof A?D.send({id:I.id,result:$.message,error:null},$.transfer):D.send({id:I.id,result:$,error:null}),ve=null}).catch(function($){D.send({id:I.id,result:null,error:Q($)}),ve=null}):(w instanceof A?D.send({id:I.id,result:w.message,error:null},w.transfer):D.send({id:I.id,result:w,error:null}),ve=null)}else throw new Error('Unknown method "'+I.method+'"')}catch($){D.send({id:I.id,result:null,error:Q($)})}}),D.register=function(I,be){if(I)for(var w in I)I.hasOwnProperty(w)&&(D.methods[w]=I[w]);be&&(D.terminationHandler=be.onTerminate),D.send("ready")},D.emit=function(I){if(ve){if(I instanceof A){D.send({id:ve,isEvent:!0,payload:I.message},I.transfer);return}D.send({id:ve,isEvent:!0,payload:I})}},_.add=D.register,_.emit=D.emit}(Qe)),Qe}var bs=n.platform,yi=n.isMainThread,ys=n.cpus;function lt(_,A){var E=Me();return new E(_,A)}var zt=i.pool=lt;function jr(_,A){var E=bi();E.add(_,A)}var bt=i.worker=jr;function Ue(_){var A=bi();A.emit(_)}var wi=i.workerEmit=Ue,ws=h(),ze=ws.Promise,xs=i.Promise=ze,_s=i.Transfer=gr(),ks=i.platform=bs,Cs=i.isMainThread=yi,$s=i.cpus=ys;t.Promise=xs,t.Transfer=_s,t.cpus=$s,t.default=i,t.isMainThread=Cs,t.platform=ks,t.pool=zt,t.worker=bt,t.workerEmit=wi,Object.defineProperty(t,"__esModule",{value:!0})})})(dn,dn.exports);var bd=dn.exports,tt=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},_a=class extends tt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},yd=class extends tt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},wd=class extends tt{constructor(){super(...arguments);c(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const t=e.from;e.from=e.to,e.to=t}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const t=this.parent.minmax.value;if(t===void 0)return e;const i={...e};return e.from<t.min&&(i.from=t.min),e.to>t.max&&(i.to=t.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(t=>t.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const t=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=t),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},xd=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},_d=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],kd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Cd=xd(),or={iron:{pixels:kd,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:_d,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Cd,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},$d=class extends tt{get availablePalettes(){return or}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},an,Pd=(an=class{},c(an,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),an),We,Sd=(We=class extends Pd{static humanRangeDates(e,t){return e=We.inputToDate(e),t=We.inputToDate(t),e.getUTCDate()===t.getUTCDate()?We.humanDate(e):[We.humanDate(e),We.humanDate(t)].join(" - ")}static human(e){return`${We.humanDate(e)} ${We.humanTime(e,!0)} `}},c(We,"isoDate",e=>(e=We.inputToDate(e),sn(e,{representation:"date"}))),c(We,"isoTime",e=>(e=We.inputToDate(e),sn(e,{representation:"time"}))),c(We,"isoComplete",e=>(e=We.inputToDate(e),sn(e))),c(We,"humanTime",(e,t=!1)=>(e=We.inputToDate(e),Sr(e,t?"HH:mm:ss":"HH:mm"))),c(We,"humanDate",(e,t=!1)=>(e=We.inputToDate(e),Sr(e,t?"d. M.":"d. M. yyyy"))),We),os=class{},Od=class extends os{constructor(e,t,i,s,n,o,l,h,p,g,f){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"url");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"frameCount");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"width");c(this,"height");c(this,"timestamp");c(this,"duration");c(this,"min");c(this,"max");c(this,"_isHover",!1);c(this,"root",null);c(this,"canvasLayer");c(this,"visibleLayer");c(this,"cursorLayer");c(this,"listenerLayer");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(t),this.url=t,this.thermalUrl=t,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=o,this.duration=l,this.min=h,this.max=p,this.frameCount=g,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(e,t){const i=t*this.width+e;return this.pixels[i]}getColorAtPoint(e,t){var o,l;const i=this.getTemperatureAtPoint(e,t),s=(o=this.group.registry.range.value)==null?void 0:o.from,n=(l=this.group.registry.range.value)==null?void 0:l.to;if(s!==void 0&&n!==void 0){const p=(i-s)/(n-s),g=Math.round(255*p);return this.group.registry.palette.currentPalette.pixels[g]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}},as=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},St=class un{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=un.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=un.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Ad=class extends as{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=St.createCanvasContainer(),this.canvas=St.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),t=await this.pool.exec(async(i,s,n,o,l,h)=>{const g=new OffscreenCanvas(n,o).getContext("2d"),f=s-i;for(let C=0;C<=n;C++)for(let S=0;S<=o;S++){const k=C+S*n;let U=l[k];U<i&&(U=i),U>s&&(U=s);const H=(U-i)/f,K=Math.round(255*H),J=h[K];g.fillStyle=J,g.fillRect(C,S,1,1)}const b=g.getImageData(0,0,n,o);return await createImageBitmap(b)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(t,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Ed=class extends as{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=St.createCursorLayerRoot(),this.center=St.createCursorLayerCenter(),this.axisX=St.createCursorLayerX(),this.axisY=St.createCursorLayerY(),this.label=St.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Dd=class extends as{constructor(e){super(e);c(this,"container");this.container=St.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Td=class extends as{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=St.createVisibleLayer(),this._url&&(this.image=St.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Ae=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},Ld=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",4);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.service.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(o=>o.index>=e&&o.index<t),s=i.filter(o=>!this.preloadedSteps.includes(o));return(await Promise.all(s.map(o=>this.drive.parent.service.frameData(o.index)))).forEach((o,l)=>{const h=s[l];this.buffer.set(h,o)}),this.preloadedSteps.forEach(o=>{i.includes(o)||this.buffer.delete(o)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Pn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Rd=class extends tt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new Ae);c(this,"callbacksPlay",new Ae);c(this,"callbacksPause",new Ae);c(this,"callbacksStop",new Ae);c(this,"callbacksEnd",new Ae);c(this,"callbacksChangeFrame",new Ae);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Ld(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Pn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),Sr(t,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(h=>h.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(h=>h.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Md=class extends tt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0)return;const t=r+e*this.parent.width;return this.parent.pixels[t]}},Ud=class extends tt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new Ae)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Fd=class{constructor(r){this.file=r}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},ka=class{constructor(r,e,t){c(this,"_selected",!1);c(this,"onSelected",new Ae);c(this,"onDeselected",new Ae);c(this,"onValues",new Ae);c(this,"onMoveOrResize",new Ae);c(this,"layerRoot");c(this,"points",new Map);c(this,"left");c(this,"top");c(this,"width");c(this,"height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new Ae);c(this,"initialColor");c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);this.key=r,this.file=e,this.initialColor=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues()})}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){this.selected!==!0&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(t=>t.key!==this.key).forEach(t=>{t.selected&&t.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(r=!0){this.selected!==!1&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(e=>e.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}},Ca=class{constructor(r,e,t,i,s){c(this,"_x");c(this,"onX",new Ae);c(this,"_y");c(this,"onY",new Ae);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new Ae);c(this,"onMouseLeave",new Ae);c(this,"onActivate",new Ae);c(this,"onDeactivate",new Ae);this.key=r,this.analysis=i,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(r){if(this.mayMoveToX(r)){const e=this._x;this._x=r,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(r){if(this.mayMoveToY(r)){const e=this._y;this._y=r,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,o=this.y+t;return e>=i&&e<=s&&r>=n&&r<=o}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}projectInnerPositionToDom(){if(this.container){const r=this.getPercentageCoordinates();this.container.style.left=`${r.x}%`,this.container.style.top=`${r.y}%`}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},Id=class extends Ca{constructor(r,e,t,i,s){super(r,e,t,i,s),this._color=s,this.setColor(s)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},jd=class extends Id{constructor(){super(...arguments);c(this,"isMoving",!1)}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}syncXWith(e){this.onX.add(`sync X with ${e.key} `,t=>{e.x!==t&&(e.x=t)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,t=>{e.y!==t&&(e.y=t)})}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},$a=class extends ka{constructor(e,t,i,s,n,o,l){super(e,i,t);c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");let h=n,p=s;o!==void 0&&l!==void 0&&(h=n+o,p=s+l),this.area=this.buildArea(s,n,o,l),this.tl=this.addPoint("tl",s,n),this.tr=this.addPoint("tr",s,h),this.bl=this.addPoint("bl",p,n),this.br=this.addPoint("br",p,h),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()}),this.points.forEach(g=>g.projectInnerPositionToDom())}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),o=Math.max(e,s),l=Math.min(t,i),p=Math.max(t,i)-l,g=o-n;return{top:n,left:l,width:p,height:g}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=t-e,this.height=s-i,this.area.left=this.left,this.area.height=this.height,this.area.width=this.width,this.area.top=this.top}addPoint(e,t,i){const s=new jd(e,t,i,this,this.color);return this.points.set(e,s),s}},Pa=class{constructor(r,e,t,i,s){c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},Ro=class extends Pa{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},Mo=class Ii extends $a{static startAddingAtPoint(e,t,i,s,n){const o=new Ii(e,t,i,s,n);return o.br.activate(),o}static build(e,t,i,s,n,o,l){const{top:h,left:p,width:g,height:f}=Ii.calculateDimensionsFromCorners(s,n,o,l);return new Ii(e,t,i,h,p,g,f)}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Ro(this,e,t,e+i,t+s):new Ro(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,o=-1/0,l=0,h=0;for(let p=i;p<s;p++){const g=this.file.width*p;for(let f=e;f<=t;f++)if(this.isWithin(f,p)){const b=this.file.pixels[g+f];b<n&&(n=b),b>o&&(o=b),h+=b,l++}}return{min:n,max:o,avg:h/l}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),o=(t-s)/(this.height/2);return n*n+o*o<=1}},ot,Wd=(ot=class extends Ca{constructor(t,i,s,n,o){super(t,i,s,n,o);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const l=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&l&&(this.center.style.backgroundColor=l)})}static sizePx(t=1){return Math.round(ot.size*t).toString()+"px"}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top=ot.sizePx(-.5),t.style.left=ot.sizePx(-.5),t.style.width=ot.sizePx(),t.style.height=ot.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=ot.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=ot.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${ot.sizePx(.5)} - 3px )`,t.style.left=`calc( ${ot.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const o=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=o),this.axisY&&(this.axisY.style.boxShadow=o),this.center&&(this.center.style.boxShadow=o)}}},c(ot,"size",20),ot),Nd=class Sa extends ka{constructor(t,i,s,n,o){super(t,s,i);c(this,"center");this.top=n,this.left=o,this.width=1,this.height=1,this.center=new Wd("center",n,o,this,i),this.points.set("center",this.center),this.center.projectInnerPositionToDom(),this.center.onX.set("update point",l=>{this.left=l}),this.center.onY.set("update point",l=>{this.top=l})}static addAtPoint(t,i,s,n,o){return new Sa(t,i,s,n,o)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}},Uo=class extends Pa{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},Fo=class ji extends $a{static startAddingAtPoint(e,t,i,s,n){const o=new ji(e,t,i,s,n);return o.br.activate(),o}static build(e,t,i,s,n,o,l){const{top:h,left:p,width:g,height:f}=ji.calculateDimensionsFromCorners(s,n,o,l);return new ji(e,t,i,h,p,g,f)}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Uo(this,e,t,e+i,t+s):new Uo(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,o=-1/0,l=0,h=0;for(let p=i;p<s;p++){const g=this.file.width*p;for(let f=e;f<=t;f++){const b=this.file.pixels[g+f];b<n&&(n=b),b>o&&(o=b),h+=b,l++}}return{min:n,max:o,avg:h/l}}},Hd=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new Ae);c(this,"onRemove",new Ae);c(this,"onSelectionChange",new Ae);c(this,"colors",["orange","lightblue","green","brown","yellow","blue","pink"]);this.drive=e}addAnalysis(e){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var t;this.has(e)&&((t=this.get(e))==null||t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(e,t){const i=Fo.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}placeRectAt(e,t,i,s,n){const o=Fo.build(e,this.getNextColor(),this.drive.parent,t,i,s,n);return this.addAnalysis(o),o}createEllipsisFrom(e,t){const i=Mo.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}placeEllipsisAt(e,t,i,s,n){const o=Mo.build(e,this.getNextColor(),this.drive.parent,t,i,s,n);return this.addAnalysis(o),o}createPointAt(e,t){const i=Nd.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i),i}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.length;return e<this.colors.length?this.colors[e]:this.colors[e%this.colors.length]}getNextName(e){return`${e} ${this.all.length}`}},Bd=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},zd=class extends tt{constructor(){super(...arguments);c(this,"layers",new Hd(this));c(this,"points",new Bd(this));c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){const t=this.listenerLayerContainer.clientWidth,i=this.parent.width,n=e.layerX/t,o=Math.round(i*n),l=this.listenerLayerContainer.clientHeight,h=this.parent.height,g=e.layerY/l;return{top:Math.round(h*g),left:o}}activateListeners(){this.bindedPointerMoveListener=e=>{const t=this.getRelativePosition(e);this.points.all.forEach(i=>{i.active&&this.currentTool.onPointMove(i,t.top,t.left);const s=i.isWithin(t.top,t.left);s?this.currentTool.onPointEnter(i):s||this.currentTool.onPointLeave(i)})},this.bindedPointerDownListener=e=>{const t=this.getRelativePosition(e);this.currentTool.onCanvasClick(t.top,t.left,this.parent),this.points.all.forEach(i=>{i.isWithin(t.top,t.left)&&this.currentTool.onPointDown(i)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},Vd=class{constructor(r){c(this,"raw",new Map);c(this,"output",{values:[[]],colors:[]});this.parent=r}get all(){return Array.from(this.raw.values())}setPointAnalysis(r,e,t){this.raw.set(r,{name:r,color:e,data:t}),this.parent.dangerouslyUpdateValue(this.formatOutput())}removeAnalysis(...r){r.forEach(e=>{this.raw.delete(e)}),this.parent.dangerouslyUpdateValue(this.formatOutput())}formatOutput(){const r={values:[["Time"]],colors:[]};this.raw.forEach((e,t)=>{r.values[0].push(t),r.colors.push(e.color)});for(const e of this.raw.values())Object.entries(e.data).forEach(([t,i],s)=>{r.values[s+1]===void 0&&(r.values[s+1]=[t]),r.values[s+1].push(i)});return r}has(r){return this.raw.has(r)}forEach(r){this.raw.forEach(r)}},Yd=class extends tt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"google",new Vd(this));this.parent.analysis.layers.onAdd.set("listen to analysisState",async t=>{t.onMoveOrResize.set("listen to layer state",async n=>{const o=await this.parent.service.pointAnalysisData(n.left,n.top);console.log({lTop:n.top,lLeft:n.left,layerTop:t.top,layerLeft:t.left},"načetl jsem datatata",Object.values(o)[0]),this.google.setPointAnalysis(n.key,t.color,o)});const s=await this.parent.service.pointAnalysisData(t.left,t.top);this.google.setPointAnalysis(t.key,t.color,s)}),this.parent.analysis.layers.onRemove.set("listen to analysisState",async t=>{this.google.removeAnalysis(t)}),this.parent.analysis.layers.onSelectionChange.set("listen to analysisState",async t=>{const i=t.map(l=>l.key),s=this.google.all.map(l=>l.name),n=i.filter(l=>!s.includes(l)).map(l=>t.find(h=>h.key===l)),o=s.filter(l=>!i.includes(l));this.google.removeAnalysis(...o),n.forEach(async l=>{const h=await l.file.service.pointAnalysisData(l.left,l.top);this.google.setPointAnalysis(l.key,l.color,h)}),this.google.forEach(l=>{i.includes(l.name)||this.google.removeAnalysis()})})}validate(e){return e}afterSetEffect(e){console.log("přišly data",e)}dangerouslyUpdateValue(e){this.value=e}},Oa=class Aa extends Od{constructor(t,i,s,n,o,l,h,p,g,f,b,x,C,S,k,U,j){super(t,i.thermalUrl,s,n,g,o,h,b,x,l,i.visibleUrl);c(this,"_export");this.group=t,this.service=i,this.width=s,this.height=n,this.timestamp=o,this.frameCount=l,this.duration=h,this.frameInterval=p,this.fps=f,this.min=b,this.max=x,this.bytesize=C,this.averageEmissivity=S,this.averageReflectedKelvins=k,this.firstFrame=U,this.timelineData=j,this.pixels=U.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const t=new Fd(this);this._export=t}return this._export}postInit(){return this.canvasLayer=new Ad(this),this.visibleLayer=new Td(this,this.visibleUrl),this.cursorLayer=new Ed(this),this.listenerLayer=new Dd(this),this.cursorValue=new Md(this,void 0),this.timeline=new Rd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Ud(this,!1),this.analysis=new zd(this,[]),this.analysisData=new Yd(this),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}this.analysis.value.forEach(i=>i.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new Aa(t,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=t=>{this.cursorLayer.show=!0,this.isHover=!0;const i=this.width,s=this.root.clientWidth,n=i/s,o=Math.round(t.offsetX*n),l=Math.round(t.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:o,y:l})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(t){if(t!==void 0){const i=this.group.tool.value.getLabelValue(t.x,t.y,this);this.cursorLayer.setLabel(t.x,t.y,i),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(t)}},qd=class extends tt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.url,t))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},Xd=class extends _a{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},ls=class{constructor(r){c(this,"active",!1);this.group=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Ea=class extends ls{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>i===void 0?"":i.getTemperatureAtPoint(e,t).toFixed(2)+" °C")}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Sn=class extends ls{},Gd=class extends Sn{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Zd=class extends Sn{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis)}onPointMove(){}onPointLeave(){}onPointEnter(){}},Qd=class extends Sn{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,(e.analysis.width<=0||e.analysis.height<=0)&&e.analysis.layers.removeAnalysis(e.analysis.key)}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Kd=class extends ls{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.x=i,e.y=t,e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>o.selected?`<span style="color:${o.initialColor}">${o.key}</span>`:`<s style="color:${o.initialColor}">${o.key}</s>`);return`${s.length>0?s.join("<br />")+"<br />":""}X: ${e}<br />Y: ${t}`}},Jd=[Ea,Zd,Qd,Gd,Kd],eu=r=>{const e=Jd.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},tu=class extends tt{constructor(e,t){super(e,t);c(this,"_tools",eu(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof ls?this.value=e:this.value=this.tools[e]}},ru=class extends os{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new Xd(this,void 0));c(this,"tool",new tu(this,new Ea(this)));c(this,"files",new qd(this,[]));c(this,"cursorPosition",new yd(this,void 0));c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});this.registry=e,this.id=t,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Da=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Yi=class Ta extends Da{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new Ta(e.url,e.code,e.message)}},La=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},Or=class extends Da{constructor(e,t,i,s,n){super(s,n);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");this.service=e,this.buffer=t,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const t=this.getFrameSubset(e);return await this.parser.frameData(t.array,t.dataType)}async pointAnalysisData(e,t){return await this.parser.pointAnalysisData(this.buffer,e,t)}async createInstance(e){const t=await this.baseInfo(),i=await this.frameData(0),s=Oa.fromService(e,this,t,i);return e.files.addFile(s),s}},iu=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(ee,oe)=>{const ie=ee.getBigInt64(oe,!0),de=62135596800000n,me=10000n,se=24n*60n*60n*1000n*me,xe=0x4000000000000000n,Me=0x8000000000000000n;let Xe=ie&0x3fffffffffffffffn;ie&Me&&(Xe>xe-se&&(Xe-=xe),Xe<0&&(Xe+=se));const gr=Xe/me-de;return Number(gr)},o=n(e,5),l=e.getUint8(15);let h=2;l===1&&(h=4);const p=57,g=t*i*h,f=p+g,b=r.slice(25),x=b.byteLength/f,C=ee=>{const oe=ee*f,ie=oe+f,de=b.slice(oe,ie),me=new DataView(de),se=me.getFloat32(8,!0),xe=me.getFloat32(12,!0),Me=n(me,0),Qe=me.getFloat32(24,!0),Xe=me.getFloat32(28,!0);return{timestamp:Me,min:se,max:xe,emissivity:Qe,reflectedKelvins:Xe}},S=[];for(let ee=0;ee<x;ee++){const oe=C(ee);S.push(oe)}const k={emissivity:0,reflectedKelvins:0};let U=1/0,j=-1/0;const H=[];S.forEach(ee=>{k.emissivity=k.emissivity+ee.emissivity,k.reflectedKelvins=k.reflectedKelvins+ee.reflectedKelvins,ee.min<U&&(U=ee.min),ee.max>j&&(j=ee.max),H.push(ee.timestamp)});const K=H[0],J=[];H.forEach((ee,oe)=>{const ie=H[oe+1];let de=0;ie===void 0&&(de=0),de=ie-ee;const me=ee-K;J.push({absolute:ee,relative:me,offset:isNaN(de)?0:de,index:oe})});const we=S[S.length-1].timestamp-S[0].timestamp,W=we/x,ce=1e3/W;return{width:t,height:i,timestamp:o,bytesize:s,frameCount:x,duration:we,frameInterval:W,fps:ce,timeline:J,min:U,max:j,averageEmissivity:k.emissivity/S.length,averageReflectedKelvins:k.reflectedKelvins/S.length}},su=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),o=i===1?4:2,l=57,h=s*n*o,p=l+h,g=r.slice(25),f=e*p,b=f+p;return{array:g.slice(f,b),dataType:i}},nu=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,o=24n*60n*60n*1000n*n,l=0x4000000000000000n,h=0x8000000000000000n;let g=i&0x3fffffffffffffffn;i&h&&(g>l-o&&(g-=l),g<0&&(g+=o));const b=g/n-s,x=Number(b),C=t.getFloat32(8,!0),S=t.getFloat32(12,!0),k=t.getFloat32(24,!0),U=t.getFloat32(28,!0),j=r.slice(57);let H=[];if(e===0){const K=new Uint16Array(j),J=Math.abs(C-S),we=65535;K.forEach(W=>{const ce=W/we;H.push(C+J*ce)})}else e===1&&(H=Array.from(new Float32Array(j)));return{timestamp:x,min:C,max:S,emissivity:k,reflectedKelvins:U,pixels:H}},ou=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),o=(k,U)=>{const j=k.getBigInt64(U,!0),H=62135596800000n,K=10000n,J=24n*60n*60n*1000n*K,we=0x4000000000000000n,W=0x8000000000000000n;let ee=j&0x3fffffffffffffffn;j&W&&(ee>we-J&&(ee-=we),ee<0&&(ee+=J));const ie=ee/K-H;return Number(ie)},l=i.getUint8(15);let h=2;l===1&&(h=4);const p=57,g=s*n*h,f=p+g,b=r.slice(25),x=b.byteLength/f,C={},S=k=>{const U=k*f,j=U+f,H=b.slice(U,j),K=new DataView(H),J=o(K,0),we=K.getFloat32(8,!0),ce=K.getFloat32(12,!0)-we,oe=57+t*h*s+e*h;let ie=0;if(l===1)ie=K.getFloat32(oe,!0);else if(l===0){console.log("jsem uvnitř varia");const se=K.getInt16(oe,!0)/65535;ie=we+ce*se,console.log(ie)}return{timestamp:J,temperature:ie}};for(let k=0;k<x;k++){const U=S(k);C[U.timestamp]=U.temperature}return C},au=async r=>{let e=[];const t=async k=>{const U=new DataView(k.slice(0,25)),j=U.getUint8(15),H=U.getUint16(17,!0),K=U.getUint16(19,!0),J=j===1?4:2,we=57,W=H*K*J,ce=we+W,ee=k.slice(25),oe=ee.byteLength/ce;let ie=[];for(let de=0;de<oe;de++){const se=de*ce+57,xe=se+W,Me=ee.slice(se,xe);j===0||j===1&&(ie=ie.concat(Array.from(new Float32Array(Me))))}return ie};(await Promise.all(r.map(k=>t(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,U)=>k-U);const s=e[0],n=e[e.length-1],o=Math.abs(s-n),l=200,h=o/l,p=[];let g=[...e];for(let k=0;k<l;k++){const U=s+h*k,j=U+h,H=g.findIndex(ce=>ce>j),J=g.slice(0,H-1).length,we=J/e.length*100,W={from:U,to:j,count:J,percentage:we};p.push(W),g=g.slice(H)}const f=[...p].sort((k,U)=>k.percentage-U.percentage),b=f[0].percentage,x=f[f.length-1].percentage,C=Math.abs(b-x);return p.map(k=>({...k,height:k.percentage/C*100}))},lu=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},cu=[{extension:"lrc",minme:"application/octet-stream"}],hu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:cu,is:lu,baseInfo:iu,getFrameSubset:su,frameData:nu,registryHistogram:au,pointAnalysisData:ou},Ra=Object.freeze(hu),du={LrcParser:Ra},Ma=Object.values(du),Ua=(r,e)=>{const t=Ma.find(i=>i.is(r,e));if(t===void 0)throw new La(2,e,`No parser found for '${e}'.`);return t},Fa=Ma.map(r=>r.extensions),uu=Fa.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),pu=class Ia{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new Ia(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new Yi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=Ua(i,this.thermalUrl);return this.pocessTheService(new Or(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof La)return this.pocessTheService(Yi.fromError(s));throw s}}pocessTheService(e){return e}},fu=class ja{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new Ae);c(this,"onMouseLeave",new Ae);c(this,"onDrop",new Ae);c(this,"onProcessingEnd",new Ae);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new ja(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=uu,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},gu=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new On(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=Ua(e,r.name);return new Or(this,e,t,r.name)}catch(e){return new Yi(r.name,3,e.message)}}handleDropzone(r){return fu.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=pu.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},mu=class extends tt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},vu=class extends tt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new ru(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},bu=class extends tt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,o)=>{let h=t.reduce((x,C)=>{const S=C.reduce((k,U)=>[...k,...U],[]);return[...x,...S]},[]).sort((x,C)=>x-C);const p=n/o;let g=i+p;const f=new Map;let b=0;for(;g!==!1;){const x=h.findIndex(k=>k>g),C=h.slice(0,x).length;f.set(g-p/2,C),b+=C,h=h.slice(x);const S=g+p;g=S<s?S:!1}return{result:f,resultCount:b}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(Ra.registryHistogram,[t]);this.value=i}},yu=class extends tt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},wu=class extends _a{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},xu=class extends os{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new vu(this,[]));c(this,"opacity",new mu(this,1));c(this,"minmax",new wu(this,void 0));c(this,"loading",new yu(this,!1));c(this,"range",new wd(this,void 0));c(this,"histogram",new bu(this,[]));c(this,"palette");this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),o=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:o}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async o=>o instanceof Or?await o.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Or&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,t){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},On=class extends os{constructor(e,t){super();c(this,"id");c(this,"service",new gu(this));c(this,"registries",{});c(this,"palette",new $d(this,"jet"));c(this,"pool");this.pool=e||bd.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new xu(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wa=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Io=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Wa(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _u{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ku=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class jo extends _u{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const h=new Set;for(const[p,{consumerHost:g}]of this.subscriptions)h.has(p)||(h.add(p),g.dispatchEvent(new Wa(this.context,p,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ku(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new jo(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new jo(o,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const o=new WeakMap;n={get(){return o.get(this)},set(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Io(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Io(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let Ui;const Cu=new Uint8Array(16);function $u(){if(!Ui&&(Ui=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ui))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ui(Cu)}const Ze=[];for(let r=0;r<256;++r)Ze.push((r+256).toString(16).slice(1));function Pu(r,e=0){return Ze[r[e+0]]+Ze[r[e+1]]+Ze[r[e+2]]+Ze[r[e+3]]+"-"+Ze[r[e+4]]+Ze[r[e+5]]+"-"+Ze[r[e+6]]+Ze[r[e+7]]+"-"+Ze[r[e+8]]+Ze[r[e+9]]+"-"+Ze[r[e+10]]+Ze[r[e+11]]+Ze[r[e+12]]+Ze[r[e+13]]+Ze[r[e+14]]+Ze[r[e+15]]}const Su=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Wo={randomUUID:Su};function Ou(r,e,t){if(Wo.randomUUID&&!e&&!r)return Wo.randomUUID();r=r||{};const i=r.random||(r.rng||$u)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Pu(i)}class cs extends et{constructor(){super(...arguments),this.UUID=Ou()}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}}const Na="manager-instance",hs="manager-palette-context",Au=new On,Eu="__internal_default_registry",Du="__internal_default_group",Tu=r=>r.addOrGetRegistry(Eu),Lu=r=>r.groups.addOrGetGroup(Du);var Ru=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,ds=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ru(e,t,s),s};let cr=class extends cs{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:or.jet}}connectedCallback(){super.connectedCallback();let r=Au;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},t=cr.sanitizeStringPalette(this.palette.key);e.palette=t,r=new On(void 0,e)}this.manager=r,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(r,e,t){if(super.attributeChangedCallback(r,e,t),r==="palette"&&this.manager){const i=cr.sanitizeStringPalette(t);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(r){let e=!0;return r==null?e=!1:Object.keys(or).includes(r)||(e=!1),e?r:"jet"}setPalette(r){this.palette={key:r,data:or[r]}}render(){return O`<slot></slot>`}};ds([Ee({context:Na})],cr.prototype,"manager",2);ds([F({type:String,reflect:!0,attribute:!0})],cr.prototype,"slug",2);ds([Ee({context:hs}),F({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:or[r]}),toAttribute:r=>r.key.toString()}})],cr.prototype,"palette",2);cr=ds([ae("manager-provider")],cr);var Uu=Object.defineProperty,Fu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&Uu(e,t,s),s};class An extends cs{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}Fu([ye({context:Na,subscribe:!0}),L()],An.prototype,"manager");const Ha="registry-instance",Ba="registry-opacity",En="registry-range-from",Dn="registry-range-to",Iu="registry-loading",za="registry-min",Va="registry-max";var ju=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,Bt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ju(e,t,s),s};let Et=class extends An{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let r=Tu(this.manager);this.slug===void 0&&(r=this.manager.addOrGetRegistry(this.slug)),this.registry=r,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(r,e,t){var i;if(super.attributeChangedCallback(r,e,t),(r==="from"||r==="to")&&t&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:r==="from"?parseFloat(t):this.from,to:r==="to"?parseFloat(t):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.setFixedRange(n):s.setFixedRange(n)}}if(r==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return O`<slot></slot>`}};Bt([F({type:String,reflect:!0,attribute:!0})],Et.prototype,"slug",2);Bt([Ee({context:Ha})],Et.prototype,"registry",2);Bt([Ee({context:Ba}),F({type:Number,reflect:!0,attribute:!0})],Et.prototype,"opacity",2);Bt([Ee({context:za}),L()],Et.prototype,"min",2);Bt([Ee({context:Va}),L()],Et.prototype,"max",2);Bt([Ee({context:En}),F({type:Number,reflect:!0,attribute:!0})],Et.prototype,"from",2);Bt([Ee({context:Dn}),F({type:Number,reflect:!0,attribute:!0})],Et.prototype,"to",2);Bt([Ee({context:Iu}),F({type:String,reflect:!0,attribute:!0})],Et.prototype,"loading",2);Et=Bt([ae("registry-provider")],Et);var Nu=Object.defineProperty,Hu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&Nu(e,t,s),s};class ut extends An{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}Hu([ye({context:Ha,subscribe:!0})],ut.prototype,"registry");const Ya="group-instance",qa="tool-context",Xa="tools-context";var Bu=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,ui=(r,e,t,i)=>{for(var s=i>1?void 0:i?zu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Bu(e,t,s),s};let Ar=class extends ut{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=Lu(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,r=>{this.tool=r})}render(){return O`<slot></slot>`}};ui([F({type:String,attribute:!0,reflect:!0})],Ar.prototype,"slug",2);ui([Ee({context:Ya})],Ar.prototype,"group",2);ui([Ee({context:qa})],Ar.prototype,"tool",2);ui([Ee({context:Xa})],Ar.prototype,"tools",2);Ar=ui([ae("group-provider")],Ar);var Vu=Object.defineProperty,Yu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&Vu(e,t,s),s};class pi extends ut{constructor(){super()}connectedCallback(){super.connectedCallback()}}Yu([ye({context:Ya,subscribe:!0})],pi.prototype,"group");const Ga="file",Za="failure",Qa="file-loading",qu="file-loaded",Tn="file-provider-element",Ln="file-ms-context",us="playback",Rn="duration",Mn="playing",Ka="playbackSpeed",Ja="recording",el="mayStop",tl="analysislist",Un="file-markers-context";var Xu=Object.defineProperty,at=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&Xu(e,t,s),s};class Je extends pi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Ae,this.onSuccess=new Ae,this.onFailure=new Ae}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}attributeChangedCallback(e,t,i){var s,n,o;if(super.attributeChangedCallback(e,t,i),e==="ms"&&i&&this.duration&&this.currentFrame){const l=Math.min(this.duration.ms,Math.max(0,parseInt(i)));l!==this.currentFrame.ms&&((s=this.file)==null||s.timeline.setRelativeTime(l))}e==="playing"&&(i==="true"?(n=this.file)==null||n.timeline.play():i==="false"&&((o=this.file)==null||o.timeline.pause())),e==="playbackspeed"&&this.file&&i&&Object.keys(Pn).includes(i)&&(this.file.timeline.playbackSpeed=parseFloat(i)),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.playbackSpeed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}at([Ee({context:Ga}),L()],Je.prototype,"file");at([Ee({context:Za}),L()],Je.prototype,"failure");at([Ee({context:Qa}),L()],Je.prototype,"loading");at([Ee({context:qu}),L()],Je.prototype,"ready");at([Ee({context:Mn}),F({type:String,reflect:!0,attribute:!0})],Je.prototype,"playing");at([Ee({context:Rn}),L()],Je.prototype,"duration");at([Ee({context:us}),L()],Je.prototype,"currentFrame");at([Ee({context:Ln}),F({type:Number,reflect:!0,attribute:!0})],Je.prototype,"ms");at([Ee({context:Ka}),F({type:Number,reflect:!0,attribute:!0})],Je.prototype,"playbackSpeed");at([Ee({context:Ja}),F({type:String,reflect:!0,attribute:!0})],Je.prototype,"recording");at([Ee({context:el}),L()],Je.prototype,"mayStop");at([ai({slot:"mark",flatten:!0})],Je.prototype,"marksQueriedInternally");at([Ee({context:Un})],Je.prototype,"marksProvidedBelow");at([Ee({context:tl})],Je.prototype,"analysis");var Gu=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,ps=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Gu(e,t,s),s};let ti=class extends Je{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Or?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.clearCallbacks(),t.group.registry.postLoadedProcessing(),t)):(this.failure=e,this.onFailure.call(this.failure),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(r=>{r instanceof Oa?this.recieveInstance(r):this.failure=r})}render(){return O`
            <slot></slot>
            <slot name="mark"></slot>
        `}};ps([Ee({context:Tn})],ti.prototype,"providedSelf",2);ps([F({type:String,attribute:!0,reflect:!0})],ti.prototype,"thermal",2);ps([F({type:String,attribute:!0,reflect:!0})],ti.prototype,"visible",2);ti=ps([ae("file-provider")],ti);var Qu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ku(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Qu(e,t,s),s};let Jt=class extends Je{constructor(){super(...arguments),this.providedSelf=this,this.container=Re(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof Or){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Yi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return O`

                    <div class="container">
                        <div ${Ne(this.container)} class="${Mt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${Fa.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return O`
            ${this.ready?O`<slot></slot>`:z}
            <slot name="mark"></slot>
        `}};Jt.styles=Oe`

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
    
    `;Ur([Ee({context:Tn})],Jt.prototype,"providedSelf",2);Ur([L()],Jt.prototype,"container",2);Ur([L()],Jt.prototype,"ready",2);Ur([L()],Jt.prototype,"hover",2);Ur([L()],Jt.prototype,"listener",2);Jt=Ur([ae("file-dropin")],Jt);var Ju=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,Fn=(r,e,t,i)=>{for(var s=i>1?void 0:i?ep(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ju(e,t,s),s};let ri=class extends pi{constructor(){super(...arguments),this.container=Re(),this.hover=!1}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const r={dropin:!0,hover:this.hover};return O`

            <div class="container">
            
                <div ${Ne(this.container)} class="${Mt(r)}"></div>

            </div>
        
        `}};ri.styles=Oe`

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
    
    `;Fn([L()],ri.prototype,"container",2);Fn([L()],ri.prototype,"hover",2);ri=Fn([ae("group-dropin")],ri);var tp=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,rl=(r,e,t,i)=>{for(var s=i>1?void 0:i?rp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&tp(e,t,s),s};let qi=class extends ut{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return O`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return O`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(or).map(([r,e])=>O`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};qi.styles=Oe`

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

    `;rl([ye({context:hs,subscribe:!0})],qi.prototype,"value",2);qi=rl([ae("registry-palette-dropdown")],qi);var ip=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,il=(r,e,t,i)=>{for(var s=i>1?void 0:i?sp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ip(e,t,s),s};let Xi=class extends ut{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return O`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${r.name}</span>
            </div>
        
        `}render(){return O`
            <div class="container">
                ${Object.entries(or).map(([r,e])=>O`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};Xi.styles=Oe`

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

    `;il([ye({context:hs,subscribe:!0}),L()],Xi.prototype,"value",2);Xi=il([ae("registry-palette-buttons")],Xi);var np=Object.defineProperty,op=Object.getOwnPropertyDescriptor,sl=(r,e,t,i)=>{for(var s=i>1?void 0:i?op(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&np(e,t,s),s};let Gi=class extends ut{connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return O`
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
        `}};Gi.styles=Oe`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;sl([ye({context:Ba,subscribe:!0})],Gi.prototype,"value",2);Gi=sl([ae("registry-opacity-slider")],Gi);var ap=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,cp=(r,e,t,i)=>{for(var s=i>1?void 0:i?lp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ap(e,t,s),s};let No=class extends ut{doAction(){this.registry.range.applyAuto()}render(){return O`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};No=cp([ae("registry-range-auto-button")],No);var hp=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,up=(r,e,t,i)=>{for(var s=i>1?void 0:i?dp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&hp(e,t,s),s};let Ho=class extends ut{doAction(){this.registry.range.applyMinmax()}render(){return O`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Ho=up([ae("registry-range-full-button")],Ho);var pp=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,fs=(r,e,t,i)=>{for(var s=i>1?void 0:i?fp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&pp(e,t,s),s};let Dt=class extends ut{constructor(){super(...arguments),this.ticksRef=Re(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Dt.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){return O`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Ne(this.ticksRef)}>

                    ${this.ticks.map(r=>O`
                            <div class="tick" >
                                <div class="tick-value">
                                ${r.value.toFixed(Dt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Dt.TICK_WIDTH=40;Dt.TICK_FIXED=2;Dt.styles=Oe`

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


    `;fs([F({type:String,reflect:!0})],Dt.prototype,"placement",2);fs([L()],Dt.prototype,"minmax",2);fs([L()],Dt.prototype,"ticks",2);Dt=fs([ae("registry-ticks-bar")],Dt);var gp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,fi=(r,e,t,i)=>{for(var s=i>1?void 0:i?mp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&gp(e,t,s),s};let Er=class extends ut{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return O`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return O`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};fi([L()],Er.prototype,"minmax",2);fi([L()],Er.prototype,"range",2);fi([L()],Er.prototype,"opacity",2);fi([L()],Er.prototype,"palette",2);Er=fi([ae("registry-log")],Er);(()=>{var r=Object.defineProperty,e=Math.pow,t=(a,u,v)=>u in a?r(a,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):a[u]=v,i=(a,u,v)=>(t(a,typeof u!="symbol"?u+"":u,v),v),s=(a,u)=>` ${u&&u.length>0?u.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${a} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",o="pointers-overlap",l="pointers-min-distance",h="pointers-max-distance",p="range-dragging",g="data",f="min",b="max",x="step",C="round",S="type",k="theme",U="rtl",j="btt",H="disabled",K="keyboard-disabled",J="mousewheel-disabled",we="slider-width",W="slider-height",ce="slider-radius",ee="slider-bg",oe="slider-bg-hover",ie="slider-bg-fill",de="pointer-width",me="pointer-height",se="pointer-radius",xe="pointer-bg",Me="pointer-bg-hover",Qe="pointer-bg-focus",Xe="pointer-shadow",Ir="pointer-shadow-hover",gr="pointer-shadow-focus",vi="pointer-border",bi="pointer-border-hover",bs="pointer-border-focus",yi="animate-onclick",ys="css-links",lt="vertical",zt="horizontal",jr=(a,u,v,m,T)=>{let q=u-a;return q===0?v:(m-v)*(T-a)/q+v},bt=a=>!isNaN(parseFloat(a))&&isFinite(a),Ue=(a,u)=>bt(a)?Number(a):u,wi=(a,u)=>u===0?0:Math.round(a/u)*u,ws=(a,u=1/0)=>{if(u===1/0)return a;let v=e(10,u);return Math.round(a*v)/v},ze=a=>a==null?!1:typeof a=="boolean"?a:a.trim().toLowerCase()==="true",xs=(a,u)=>{a.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},_s=(a,u)=>{a.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},ks=(a,u)=>{a.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},Cs=(a,u)=>{a.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},$s=(a,u)=>{if(!u||u.length<=0)return;let v=u.map(T=>bt(T)?Ue(T,T):T),m={values:v||[]};m.value=v[0],m.value0=v[0],m.value1=v[0];for(let T=1;T<v.length;T++)m[`value${T+1}`]=v[T];a.dispatchEvent(new CustomEvent("change",{detail:m}))},_=(a,u,v)=>{let m=0,T,q,ne,R,M=!1,le=(G,Te,Ye,Ve,Fe,Ie)=>{let it=m;Ye!==void 0&&G>Ye&&(G=Ye),Te!==void 0&&G<Te&&(G=Te),m=G;let st=m;return(Ve===lt&&Ie||Ve===zt&&Fe)&&(st=100-st),Ve===lt?u.style.top=`${st}%`:u.style.left=`${st}%`,it!==m},fe=G=>G===u||u.contains(G),B=(G,Te,Ye,Ve)=>{T=G,q=Te,ne=Ye,R=Ve},Pe=G=>{M=G,u.classList.toggle("disabled",M),M?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},ft=(G,Te)=>{Te==null?u.removeAttribute(G):u.setAttribute(G,Te)},Ke=G=>u.getAttribute(G),X=G=>{if(!M){switch(G.key){case"ArrowLeft":{G.preventDefault(),typeof T=="function"&&T(v);break}case"ArrowRight":{G.preventDefault(),typeof q=="function"&&q(v);break}case"ArrowUp":{G.preventDefault(),typeof ne=="function"&&ne(v);break}case"ArrowDown":{G.preventDefault(),typeof R=="function"&&R(v);break}}Cs(a,G)}},he=()=>{M||xs(a,u)};return u.className=`pointer pointer-${v}`,u.addEventListener("keydown",X),u.addEventListener("click",he),{$pointer:u,get percent(){return m},get disabled(){return M},set disabled(G){Pe(G)},updatePosition:le,isClicked:fe,setCallbacks:B,setAttr:ft,getAttr:Ke,destroy:()=>{u.removeEventListener("keydown",X),u.removeEventListener("click",he),u.remove()}}},A=a=>{if(a==null)return;if(Array.isArray(a))return a;if(a.trim()==="")return;let u=a.split(","),v=[],m=!0;for(let T=0;T<u.length;T++){let q=u[T].trim();q!==""&&(v.push(q),bt(q)||(m=!1))}return m?v.map(T=>Number(T)):v},E=(a,u)=>u?u.findIndex(v=>v===a||v.toString().trim()===a.toString().trim()):-1,D=a=>({updatePosition:(u,v,m,T)=>{if(v.length<=0)return;let q=v.length===1,ne=v[0],R=v[v.length-1];u===lt?(a.style.removeProperty("width"),a.style.removeProperty("right"),a.style.removeProperty("left"),q?a.style.height=`${ne}%`:a.style.height=`${Math.abs(ne-R)}%`,T?(a.style.bottom="0%",q?a.style.top="auto":a.style.top=`${Math.min(100-R,100-ne)}%`):(a.style.bottom="auto",q?a.style.top="0%":a.style.top=`${Math.min(ne,R)}%`)):(a.style.removeProperty("height"),a.style.removeProperty("top"),a.style.removeProperty("bottom"),q?a.style.width=`${ne}%`:a.style.width=`${Math.abs(ne-R)}%`,m?(a.style.right="0%",q?a.style.left="auto":a.style.left=`${Math.min(100-R,100-ne)}%`):(a.style.right="auto",q?a.style.left="0%":a.style.left=`${Math.min(ne,R)}%`))}}),Y="--animate-onclick",ke="--width",Q="--height",De="--panel-bg-border-radius",ve="--panel-bg",I="--panel-bg-hover",be="--panel-bg-fill",w="--pointer-width",$="--pointer-height",te="--pointer-border-radius",ue="--pointer-bg",He="--pointer-bg-hover",Ge="--pointer-bg-focus",$t="--pointer-shadow",ct="--pointer-shadow-hover",pt="--pointer-shadow-focus",Vt="--pointer-border",V="--pointer-border-hover",re="--pointer-border-focus",P=(a,u,v)=>{let m=new Map;for(let T of a.attributes){let q=T.nodeName.trim().toLowerCase();if(!u.test(q))continue;let ne=q.replace(/\D/g,"").trim(),R=ne===""||ne==="0"||ne==="1"?0:Ue(ne,0)-1,M=v&&typeof v=="function"?v(T.value):T.value;m.set(R,M)}return m},Z=a=>{if(!a)return null;let u=a.getAttribute(ys);if(!u)return null;let v=u.split(";"),m=[];for(let T of v)T.trim()!==""&&m.push(T.trim());return m},Ce=[[ke,we,"sliderWidth",null],[Q,W,"sliderHeight",null],[De,ce,"sliderRadius",null],[ve,ee,"sliderBg",null],[I,oe,"sliderBgHover",null],[be,ie,"sliderBgFill",null],[w,de,"pointer#Width",/^pointer([0-9]*)-width$/],[$,me,"pointer#Height",/^pointer([0-9]*)-height$/],[te,se,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ue,xe,"pointer#Bg",/^pointer([0-9]*)-bg$/],[He,Me,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ge,Qe,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[$t,Xe,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[ct,Ir,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[pt,gr,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Vt,vi,"pointer#Border",/^pointer([0-9]*)-border$/],[V,bi,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[re,bs,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],_e=(a,u,v)=>{let m=null,T=[],q=new Map,ne=(X,he=u)=>{let G=[...he.classList];for(let Te of G)Te.startsWith(X)&&u.classList.remove(Te)},R=()=>{ne("shape");let X=u.querySelectorAll(".pointer");for(let he of X)ne("shape",he)},M=X=>{m=X,ne("theme-"),typeof X=="string"&&u.classList.add(`theme-${X}`)},le=()=>{if(R(),!(T.length<=0)){u.classList.add("shape",`shape-${T[0]}`);for(let X=1;X<T.length;X++){let he=T[X];if(!he)continue;let G=u.querySelector(`.pointer-${X}`);!G||G.classList.add("shape",`shape-${he}`)}}},fe=(X,he)=>{T[X]=he,le()},B=()=>{R();let X=P(a,/^pointer([0-9]*)-shape$/);if(!(X.size<=0)){for(let he of X){let G=he[0];T[G]=he[1]}le()}},Pe=(X,he)=>`${X}-${he}`,ft=(X,he,G)=>{let Te=v[G];if(!Te)return;let Ye=G===0?u:Te.$pointer;if(he==null){q.has(Pe(X,G))&&q.delete(Pe(X,G)),Ye.style.removeProperty(X);return}q.set(Pe(X,G),he),Ye.style.setProperty(X,he)},Ke=(X,he)=>q.get(Pe(X,he));return(()=>{for(let X of Ce){let[he,G,Te,Ye]=X;if(Ye){let Fe=P(a,Ye);for(let Ie of Fe){let it=Ie[0],st=Ie[1];ft(he,st,it)}}else{let Fe=a.getAttribute(G);ft(he,Fe,0)}let Ve=[];if(Te.indexOf("#")===-1)Ve.push([Te,0]);else{Ve.push([Te.replace("#",""),0]),Ve.push([Te.replace("#","0"),0]),Ve.push([Te.replace("#","1"),0]);for(let Fe=1;Fe<v.length;Fe++)Ve.push([Te.replace("#",(Fe+1).toString()),Fe])}for(let Fe of Ve)try{let Ie=Fe[0],it=Fe[1];Object.prototype.hasOwnProperty.call(a,Ie)||Object.defineProperty(a,Ie,{get(){return Ke(he,it)},set:st=>{ft(he,st,it)}})}catch(Ie){console.error(Ie)}}M(a.getAttribute(k)),B()})(),{setStyle:ft,getStyle:Ke,get theme(){return m},set theme(X){M(X)},get pointerShapes(){return T},setPointerShape:fe}},Le="animate-on-click",pe="range-dragging",rt=(a,u,v,m)=>{let T=[],q=fe=>{for(let B of T)B.update&&typeof B.update=="function"&&B.update(fe)},ne=()=>{for(let fe of T)fe.destroy&&typeof fe.destroy=="function"&&fe.destroy()},R=(fe,B)=>{for(let Pe of T)Pe.onAttrChange&&typeof Pe.onAttrChange=="function"&&Pe.onAttrChange(fe,B)},M=fe=>{if(fe.gettersAndSetters){for(let B of fe.gettersAndSetters)if(!(!B.name||!B.attributes))try{Object.prototype.hasOwnProperty.call(a,B.name)||Object.defineProperty(a,B.name,B.attributes)}catch(Pe){console.error("defineSettersGetters error:",Pe)}}},le=fe=>{var B;if(!fe.css)return;let Pe=(B=a.shadowRoot)==null?void 0:B.querySelector("style");!Pe||(Pe.innerHTML+=fe.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let fe of window.tcRangeSliderPlugins){let B=fe();T.push(B),B.init&&typeof B.init=="function"&&(B.init(a,u,v,m),M(B),le(B))}},update:q,onAttrChange:R,destroy:ne}},Be=10,xi=20,ol=(a,u)=>{let v=new Map,m=/^value([0-9]*)$/;for(let R of a.attributes){let M=R.nodeName.trim().toLowerCase();if(!m.test(M))continue;let le=M.replace("value","").trim(),fe=le===""||le==="0"||le==="1"?0:Ue(le,0)-1,B=bt(R.value)?Ue(R.value,0):R.value;v.set(fe,B)}let T=Math.max(...Array.from(v.keys())),q=[];q.push([_(a,u,0),v.get(0)]);let ne=u;for(let R=1;R<=T;R++){let M=u.cloneNode(!0);ne.after(M),ne=M,q.push([_(a,M,R),v.get(R)])}return q},Bn=(a,u,v,m,T,q,ne)=>{try{Object.defineProperty(a,m,{configurable:!0,get(){if(!u)return;let R=u.pointers[v];if(!R)return;let M=u.getTextValue(R.percent);return bt(M)?Ue(M,M):M},set:R=>{u.pointers[v]?u==null||u.setValue(R,v):u==null||u.addPointer(R)}}),Object.defineProperty(a,T,{configurable:!0,get(){var R,M;return(M=(R=u==null?void 0:u.pointers[v])==null?void 0:R.getAttr("aria-label"))!=null?M:void 0},set:R=>{!u||u.setAriaLabel(v,R)}}),Object.defineProperty(a,q,{configurable:!0,get(){var R,M;return(M=(R=u==null?void 0:u.styles)==null?void 0:R.pointerShapes[v])!=null?M:null},set:R=>{!u||!u.styles||u.styles.setPointerShape(v,R)}}),Object.defineProperty(a,ne,{configurable:!0,get(){var R;return(R=u==null?void 0:u.pointers[v].disabled)!=null?R:!1},set:R=>{if(!u)return;let M=u==null?void 0:u.pointers[v];!M||(M.disabled=R)}})}catch(R){console.error(R)}},al=(a,u)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let m=2;m<Be;m++)v.push([`value${m}`,`ariaLabel${m}`,`pointer${m}Shape`,`pointer${m}Disabled`,m-1]);for(let m of v)Bn(a,u,m[4],m[0],m[1],m[2],m[3])},zn=(a,u,v)=>{var m;let T=(m=v.shadowRoot)==null?void 0:m.querySelector(".container");if(T)for(let q of a)u?T.prepend(q.$pointer):T.append(q.$pointer)},ll=(a,u)=>{if(!(!u||a.length<=1)){for(let v of a)v.$pointer.style.zIndex=xi.toString();u.$pointer.style.zIndex=(xi*2).toString()}},Ps=0,Wr=100,mr=2,Vn="0.3s",cl=(a,u,v)=>{let m=v.map(d=>d[0]),T=null,q=null,ne=null,R=null,M=Ps,le=Wr,fe,B,Pe=zt,ft=mr,Ke=!1,X=!1,he=!1,G=0,Te=1/0,Ye=!1,Ve,Fe,Ie=!1,it=!1,st=!1,Yt=Vn,Yn=[],qn=d=>{Ie||(d.preventDefault&&d.preventDefault(),tr(d),window.addEventListener("mousemove",tr),window.addEventListener("mouseup",_i),_s(a,d))},_i=d=>{Ie||(Ve=void 0,Fe=void 0,window.removeEventListener("mousemove",tr),window.removeEventListener("mouseup",_i),Yt&&u.classList.add(Le),ks(a,d))},ul=(d,y)=>{if(m.length<=0)return;if(m.length===1)return m[0].isClicked(d)&&Yt&&u.classList.remove(Le),m[0];let N=fl(d);if(Ye){let $e=y,yt=Ci($e);yt!==void 0&&($e=wi($e,yt)),N?(Ve=$e,Fe=0,Yt&&u.classList.remove(Le)):Ve!==void 0&&(Fe=$e-Ve,Ve=$e)}if(!pl(d)&&!N){for(let $e of m)if(!(!$e.isClicked(d)||$e.disabled))return Yt&&u.classList.remove(Le),$e;for(let $e of m)if(T===$e)return $e}let Se=1/0,je=null;for(let $e of m){if($e.disabled)continue;let yt=Math.abs(y-$e.percent);yt<Se&&(Se=yt,je=$e)}return je},Xn=()=>m.findIndex(d=>T===d&&!d.disabled),tr=d=>{let y;if(Pe===lt){let{height:Se,top:je}=u.getBoundingClientRect(),$e=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;y=Math.min(Math.max(0,$e-je),Se)*100/Se}else{let{width:Se,left:je}=u.getBoundingClientRect(),$e=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;y=Math.min(Math.max(0,$e-je),Se)*100/Se}if((Ke||X)&&(y=100-y),T=ul(d.target,y),T&&ll(m,T),Ye&&m.length>1&&Fe!==void 0){let Se=m[0],je=m[m.length-1],$e=Se.percent+Fe<0,yt=je.percent+Fe>100;if($e||yt)return;for(let Ti=0;Ti<m.length;Ti++)nt(Ti,m[Ti].percent+Fe);return}let N=Xn();N!==-1&&(nt(N,y),T==null||T.$pointer.focus())},ki=d=>{if(Ie||document.activeElement!==a||T!=null&&T.disabled)return;d.stopPropagation(),d.preventDefault();let y=d.deltaY<0,N=Ke||X,Se=y?!N:N,je=Xn();je!==-1&&(Se?Nr(je,m[je].percent):Hr(je,m[je].percent))},Gn=d=>{Ie||it||(Pe===lt?X?nt(d,100):nt(d,0):Ke?Hr(d,m[d].percent):Nr(d,m[d].percent))},Zn=d=>{Ie||it||(Pe===lt?X?nt(d,0):nt(d,100):Ke?Nr(d,m[d].percent):Hr(d,m[d].percent))},Qn=d=>{Ie||it||(Pe===lt?X?Hr(d,m[d].percent):Nr(d,m[d].percent):Ke?nt(d,100):nt(d,0))},Kn=d=>{Ie||it||(Pe===lt?X?Nr(d,m[d].percent):Hr(d,m[d].percent):Ke?nt(d,0):nt(d,100))},pl=d=>d.classList.contains("panel"),fl=d=>d.classList.contains("panel-fill"),Nr=(d,y)=>{if(y===void 0)return;let N=Ci(y);N==null&&(N=1),y-=N,y<0&&(y=0),nt(d,y)},Hr=(d,y)=>{if(y===void 0)return;let N=Ci(y);N==null&&(N=1),y+=N,y>100&&(y=100),nt(d,y)},rr=()=>{!R||R.update({percents:Jn(),values:eo(),$pointers:to(),min:ro(),max:io(),data:As(),step:Os(),round:Ds(),type:Es(),textMin:$i(),textMax:Pi(),rightToLeft:Rs(),bottomToTop:Ms(),pointersOverlap:js(),pointersMinDistance:Ts(),pointersMaxDistance:Ls(),rangeDragging:Ws(),disabled:Us(),keyboardDisabled:Fs(),mousewheelDisabled:Is()})},gl=()=>{rr()},ml=d=>{if(!(he||m.length<=1||le===M))if(d===0){let y=Te*100/(le-M);return Math.max(0,m[d+1].percent-y)}else{let y=G*100/(le-M);return Math.min(m[d-1].percent+y,100)}},vl=d=>{if(!(he||m.length<=1||le===M))if(d===m.length-1){let y=Te*100/(le-M);return Math.min(m[d-1].percent+y,100)}else{let y=G*100/(le-M);return Math.max(0,m[d+1].percent-y)}},Ci=d=>{let y;if(typeof fe=="function"){let N=jr(0,100,M,le,d);y=fe(N,d)}else y=fe;if(bt(y)){let N=le-M;return y=N===0?0:y*100/N,y}},vr=d=>{if(d===void 0)return;let y=jr(0,100,M,le,d);return B!==void 0?B[Math.round(y)]:ws(y,ft)},$i=()=>B!==void 0?B[M]:M,Pi=()=>B!==void 0?B[le]:le,Os=()=>fe,bl=d=>{var y;return d<=0||he?$i():(y=vr(m[d-1].percent))!=null?y:""},yl=d=>{var y;return m.length<=1||d>=m.length-1||he?Pi():(y=vr(m[d+1].percent))!=null?y:""},Jn=()=>m.map(d=>d.percent),eo=()=>m.map(d=>vr(d.percent)),to=()=>m.map(d=>d.$pointer),ro=()=>M,io=()=>le,As=()=>B,Es=()=>Pe,Ds=()=>ft,Ts=()=>G,Ls=()=>Te,wl=d=>Yn[d],Rs=()=>Ke,Ms=()=>X,Us=()=>Ie,Fs=()=>it,Is=()=>st,js=()=>he,Ws=()=>Ye,nt=(d,y)=>{if(y===void 0)return;let N=Ci(y);N!==void 0&&(y=wi(y,N));let Se=m[d];if(!Se)return;let je=Se.updatePosition(y,ml(d),vl(d),Pe,Ke,X);q==null||q.updatePosition(Pe,m.map($e=>$e.percent),Ke,X),rr();for(let $e of m){let yt=vr($e.percent);yt!==void 0&&($e.setAttr("aria-valuenow",yt.toString()),$e.setAttr("aria-valuetext",yt.toString()))}_l(),je&&$s(a,m.map($e=>vr($e.percent)))},Pt=()=>{for(let d=0;d<m.length;d++)nt(d,m[d].percent)},xl=(d,y)=>{M=B!==void 0?0:Ue(d,Ps),le=B!==void 0?B.length-1:Ue(y,Wr),Si(M),Oi(le)},_l=()=>{var d,y;for(let N=0;N<m.length;N++){let Se=m[N];Se.setAttr("aria-valuemin",((d=bl(N))!=null?d:"").toString()),Se.setAttr("aria-valuemax",((y=yl(N))!=null?y:"").toString())}},Si=d=>{M=Ue(d,Ps),M>le&&(le=M+Wr),Pt()},Oi=d=>{le=Ue(d,Wr),le<M&&(le=M+Wr),Pt()},so=d=>{he=!0;for(let y=0;y<d.length;y++)Ai(d[y],y);he=!1;for(let y=0;y<d.length;y++)Ai(d[y],y)},Ai=(d,y)=>{let N;B!==void 0?(N=d==null?0:E(d,B),N===-1&&(N=0)):(N=Ue(d,M),N<M&&(N=M),N>le&&(N=le));let Se=jr(M,le,0,100,N);nt(y,Se)},Ei=d=>{if(d==null){fe=void 0;return}if(typeof d=="function"){fe=d,Pt();return}if(bt(d)){fe=Ue(d,1);let y=Math.abs(le-M);fe>y&&(fe=void 0),Pt();return}fe=void 0},Ns=d=>{he=d,Pt()},Hs=d=>{(!bt(d)||d<0)&&(d=0),G=d},Bs=d=>{(!bt(d)||d<0)&&(d=1/0),Te=d},zs=d=>{Ie=d,u.classList.toggle("disabled",Ie),Ie?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},no=d=>{it=d},oo=d=>{st=d,st?document.removeEventListener("wheel",ki):document.addEventListener("wheel",ki,{passive:!1})},Vs=d=>{if(d==null){B=void 0;return}if(B=A(d),B===void 0||B.length<=0){B=void 0;return}Si(0),Oi(B.length-1),fe===void 0&&Ei(1)},Ys=d=>{var y;typeof d=="string"?Pe=d.trim().toLowerCase()===lt?lt:zt:Pe=zt;let N=(y=a.shadowRoot)==null?void 0:y.querySelector(".range-slider-box");if(!N)return;N.className=`range-slider-box type-${Pe}`,Pt();let Se=Pe===lt?"vertical":"horizontal";for(let je of m)je.setAttr("aria-orientation",Se)},qs=d=>{Ke=d,m.length>1&&zn(m,Ke,a),Pt(),rr()},Xs=d=>{X=d,m.length>1&&zn(m,X,a),Pt(),rr()},Gs=d=>{ft=Ue(d,mr),ft<0&&(ft=mr),rr()},ao=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(Yt=void 0,u.style.removeProperty(Y),u.classList.remove(Le)):(Yt=d.toString(),u.style.setProperty(Y,Yt),u.classList.add(Le))},lo=(d,y)=>{let N=m[d];!N||(N.setAttr("aria-label",y),Yn[d]=y)},Di=d=>{if(Ve=void 0,m.length<=1){Ye=!1,u.classList.remove(pe);return}Ye=d,u.classList.toggle(pe,Ye)},kl=()=>{zs(ze(a.getAttribute(H))),it=ze(a.getAttribute(K)),st=ze(a.getAttribute(J));let d=P(a,/^pointer([0-9]*)-disabled$/,y=>ze(y));for(let y of d){let N=y[0];!m[N]||(m[N].disabled=y[1])}},Cl=()=>{let d=P(a,/^aria-label([0-9]*)$/);for(let y of d){let N=y[0];lo(N,y[1])}},$l=d=>{let y=m.length,N=m[y-1].$pointer,Se=N.cloneNode(!0);N.after(Se);let je=_(a,Se,y);return je.setCallbacks(Gn,Zn,Qn,Kn),m.push(je),Ai(d,y),Pt(),rr(),y},Pl=()=>{let d=m.length,y=m[d-1];return y?(y.destroy(),m.pop(),m.length<=1&&Di(!1),Pt(),rr(),d-1):-1};return(()=>{var d,y;for(let Se of m)Se.setCallbacks(Gn,Zn,Qn,Kn);let N=(d=a.shadowRoot)==null?void 0:d.querySelector(".panel-fill");N&&(q=D(N)),Ys(a.getAttribute(S)),qs(ze(a.getAttribute(U))),Xs(ze(a.getAttribute(j))),xl(a.getAttribute(f),a.getAttribute(b)),Ei(a.getAttribute(x)),Vs(a.getAttribute(g)),so(v.map(Se=>Se[1])),Ns(ze(a.getAttribute(o))),Hs(Ue(a.getAttribute(l),0)),Bs(Ue(a.getAttribute(h),1/0)),Di(ze(a.getAttribute(p))),Gs(Ue(a.getAttribute(C),mr)),kl(),Cl(),ne=_e(a,u,m),ao((y=a.getAttribute(yi))!=null?y:Vn),u.addEventListener("mousedown",qn),u.addEventListener("mouseup",_i),u.addEventListener("touchmove",tr),u.addEventListener("touchstart",tr),st||document.addEventListener("wheel",ki,{passive:!1}),R=rt(a,gl,{setValues:so,setMin:Si,setMax:Oi,setStep:Ei,setPointersOverlap:Ns,setPointersMinDistance:Hs,setPointersMaxDistance:Bs,setDisabled:zs,setType:Ys,setRightToLeft:qs,setBottomToTop:Xs,setRound:Gs,setKeyboardDisabled:no,setMousewheelDisabled:oo,setRangeDragging:Di,setData:Vs},{getPercents:Jn,getValues:eo,getPointerElements:to,getMin:ro,getMax:io,getStep:Os,getData:As,getType:Es,getRound:Ds,getTextMin:$i,getTextMax:Pi,isRightToLeft:Rs,isBottomToTop:Ms,isDisabled:Us,isKeyboardDisabled:Fs,isMousewheelDisabled:Is,isPointersOverlap:js,isRangeDraggingEnabled:Ws,getPointersMinDistance:Ts,getPointersMaxDistance:Ls}),R.init()})(),{get pointers(){return m},get styles(){return ne},get pluginsManager(){return R},get min(){return $i()},get max(){return Pi()},get step(){return Os()},get pointersOverlap(){return js()},set pointersOverlap(d){Ns(d)},get pointersMinDistance(){return Ts()},set pointersMinDistance(d){Hs(d)},get pointersMaxDistance(){return Ls()},set pointersMaxDistance(d){Bs(d)},get disabled(){return Us()},set disabled(d){zs(d)},get data(){return As()},get type(){return Es()},set type(d){Ys(d)},get rightToLeft(){return Rs()},set rightToLeft(d){qs(d)},get bottomToTop(){return Ms()},set bottomToTop(d){Xs(d)},get round(){return Ds()},set round(d){Gs(d)},get animateOnClick(){return Yt},set animateOnClick(d){ao(d)},get keyboardDisabled(){return Fs()},set keyboardDisabled(d){no(d)},get mousewheelDisabled(){return Is()},set mousewheelDisabled(d){oo(d)},get rangeDragging(){return Ws()},set rangeDragging(d){Di(d)},setMin:Si,setMax:Oi,setValue:Ai,setStep:Ei,setData:Vs,getTextValue:vr,setAriaLabel:lo,getAriaLabel:wl,addPointer:$l,removePointer:Pl,destroy:()=>{u.removeEventListener("mousedown",qn),u.removeEventListener("mouseup",_i),u.removeEventListener("touchmove",tr),u.removeEventListener("touchstart",tr),document.removeEventListener("wheel",ki);for(let d of m)d.destroy();R==null||R.destroy()}}},hl=(a,u,v)=>{let m=Ce.find(([R,M,le,fe])=>M.replace("#","")===u.replace(/\d+/g,""));if(m&&a.styles){let[R,M,le,fe]=m,B=u.replace(/\D/g,"").trim(),Pe=B===""||B==="0"||B==="1"?0:Ue(B,0)-1;a.styles.setStyle(R,v,Pe);return}switch(a&&a.pluginsManager&&a.pluginsManager.onAttrChange(u,v),u){case f:{a.setMin(v);break}case b:{a.setMax(v);break}case x:{a.setStep(v);break}case o:{a.pointersOverlap=ze(v);break}case l:{a.pointersMinDistance=Ue(v,0);break}case p:{a.rangeDragging=ze(v);break}case h:{a.pointersMaxDistance=Ue(v,1/0);break}case H:{a.disabled=ze(v);break}case K:{a.keyboardDisabled=ze(v);break}case J:{a.mousewheelDisabled=ze(v);break}case g:{a.setData(v);break}case S:{a.type=v;break}case U:{a.rightToLeft=ze(v);break}case j:{a.bottomToTop=ze(v);break}case C:{a.round=Ue(v,mr);break}case k:{a.styles&&(a.styles.theme=v);break}case yi:{a.animateOnClick=v;break}}let T=null;if(/^value([0-9]*)$/.test(u)&&(T="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(T="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(T="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(T="pointer-shape"),!T)return;let q=u.replace(/\D/g,"").trim(),ne=q===""||q==="0"||q==="1"?0:Ue(q,0)-1;switch(T){case"value":{a.setValue(v,ne);break}case"pointer-disabled":{let R=a==null?void 0:a.pointers[ne];if(!R)return;R.disabled=ze(v);break}case"aria-label":{a.setAriaLabel(ne,v);break}case"pointer-shape":{a.styles&&a.styles.setPointerShape(ne,v);break}}},dl=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(a){this.slider&&this.slider.setStep(a)}get step(){var a;return(a=this.slider)==null?void 0:a.step}set disabled(a){this.slider&&(this.slider.disabled=a)}get disabled(){var a,u;return(u=(a=this.slider)==null?void 0:a.disabled)!=null?u:!1}set data(a){var u;(u=this.slider)==null||u.setData(a)}get data(){var a;return(a=this.slider)==null?void 0:a.data}set min(a){var u;(u=this.slider)==null||u.setMin(a)}get min(){var a;return(a=this.slider)==null?void 0:a.min}set max(a){var u;(u=this.slider)==null||u.setMax(a)}get max(){var a;return(a=this.slider)==null?void 0:a.max}set round(a){!this.slider||(this.slider.round=a)}get round(){var a,u;return(u=(a=this.slider)==null?void 0:a.round)!=null?u:mr}set type(a){!this.slider||(this.slider.type=a??zt)}get type(){var a;return((a=this.slider)==null?void 0:a.type)||zt}set pointersOverlap(a){!this.slider||(this.slider.pointersOverlap=a)}get pointersOverlap(){var a,u;return(u=(a=this.slider)==null?void 0:a.pointersOverlap)!=null?u:!1}set pointersMinDistance(a){!this.slider||(this.slider.pointersMinDistance=a)}get pointersMinDistance(){var a,u;return(u=(a=this.slider)==null?void 0:a.pointersMinDistance)!=null?u:0}set pointersMaxDistance(a){!this.slider||(this.slider.pointersMaxDistance=a)}get pointersMaxDistance(){var a,u;return(u=(a=this.slider)==null?void 0:a.pointersMaxDistance)!=null?u:1/0}set theme(a){!this.slider||!this.slider.styles||(this.slider.styles.theme=a)}get theme(){var a,u,v;return(v=(u=(a=this.slider)==null?void 0:a.styles)==null?void 0:u.theme)!=null?v:null}set rtl(a){!this.slider||(this.slider.rightToLeft=a)}get rtl(){var a,u;return(u=(a=this.slider)==null?void 0:a.rightToLeft)!=null?u:!1}set btt(a){!this.slider||(this.slider.bottomToTop=a)}get btt(){var a,u;return(u=(a=this.slider)==null?void 0:a.bottomToTop)!=null?u:!1}set keyboardDisabled(a){!this.slider||(this.slider.keyboardDisabled=a)}get keyboardDisabled(){var a,u;return(u=(a=this.slider)==null?void 0:a.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(a){!this.slider||(this.slider.mousewheelDisabled=a)}get mousewheelDisabled(){var a,u;return(u=(a=this.slider)==null?void 0:a.mousewheelDisabled)!=null?u:!1}set animateOnClick(a){!this.slider||(this.slider.animateOnClick=a)}get animateOnClick(){var a;return(a=this.slider)==null?void 0:a.animateOnClick}get rangeDragging(){var a,u;return(u=(a=this.slider)==null?void 0:a.rangeDragging)!=null?u:!1}set rangeDragging(a){this.slider&&(this.slider.rangeDragging=ze(a))}get externalCSSList(){return this._externalCSSList}addPointer(a){var u,v;if(!this.slider)return;let m=(v=(u=this.slider)==null?void 0:u.addPointer(a))!=null?v:0;Bn(this,this.slider,m,`value${m+1}`,`ariaLabel${m+1}`,`pointerShape${m+1}`,`pointer${m+1}Disabled`)}removePointer(){var a;!this.slider||(a=this.slider)==null||a.removePointer()}addCSS(a){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=a,this.shadowRoot.appendChild(u)}connectedCallback(){var a,u;if(!this.shadowRoot)return;this._externalCSSList=Z(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(a=this.shadowRoot)==null?void 0:a.querySelector(".pointer");if(!v)return;let m=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!m)return;let T=ol(this,v);this.slider=cl(this,m,T),al(this,this.slider),this._observer=new MutationObserver(q=>{q.forEach(ne=>{var R;if(!this.slider||ne.type!=="attributes")return;let M=ne.attributeName;!M||hl(this.slider,M,(R=this.getAttribute(M))!=null?R:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Ss=dl;window.tcRangeSlider=Ss,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Ss),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Ss{})})();(()=>{var r=(l,h,p,g,f)=>{let b=h-l;return b===0?p:(g-p)*(f-l)/b+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),t=(l,h)=>e(l)?Number(l):h,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,o=()=>{let l=null,h=null,p=null,g=null,f=null,b=!1,x=s,C=n,S=()=>{var W;let ce=(W=l==null?void 0:l.shadowRoot)==null?void 0:W.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),g=document.createElement("div"),g.classList.add("mark-points"),p.append(g),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),ce.append(p)},k=()=>{!h||!p||p.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},U=()=>{var W;if(!p||!h)return;let ce=h.getMin(),ee=h.getMax(),oe=h.getType()==="vertical",ie=h.isRightToLeft()||h.isBottomToTop();for(let me=0;me<x;me++){let se=document.createElement("div");se.classList.add("mark",`mark-${me}`);let xe=x===0?0:me*100/(x-1);oe?ie?se.style.top=`${100-xe}%`:se.style.top=`${xe}%`:ie?se.style.left=`${100-xe}%`:se.style.left=`${xe}%`,g==null||g.append(se)}let de=h.getData();for(let me=0;me<C;me++){let se=document.createElement("div");se.classList.add("mark-value",`mark-value-${me}`);let xe=C===0?0:me*100/(C-1),Me=r(0,C-1,ce,ee,me);se.textContent=(de?(W=de[Math.round(Me)])!=null?W:"":Me).toString(),oe?ie?se.style.top=`${100-xe}%`:se.style.top=`${xe}%`:ie?se.style.left=`${100-xe}%`:se.style.left=`${xe}%`,f==null||f.append(se)}},j=(W,ce)=>{we(),x=W,C=ce,x<=0&&(x=s),C<=0&&(C=n),S(),U(),k()},H=W=>{b=W,b?(S(),U(),k()):we()},K=W=>{!p||p.style.setProperty("--marks-color",W)},J=W=>{!p||p.style.setProperty("--values-color",W)},we=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(W,ce,ee,oe)=>{var ie,de;h=oe,l=W,b=i(l.getAttribute("marks")),b&&(j(t(l.getAttribute("marks-count"),s),t(l.getAttribute("marks-values-count"),n)),K((ie=l.getAttribute("marks-color"))!=null?ie:"#cbd5e1"),J((de=l.getAttribute("marks-values-color"))!=null?de:"#475569"))},onAttrChange:(W,ce)=>{W==="marks"&&H(i(ce)),W==="marks-count"&&j(t(ce,s),C),W==="marks-values-count"&&j(x,t(ce,n)),W==="marks-color"&&K(ce),W==="marks-values-color"&&J(ce)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return b??!1},set:W=>{H(i(W))}}},{name:"marksCount",attributes:{get(){return x??s},set:W=>{j(t(W,s),C)}}},{name:"marksValuesCount",attributes:{get(){return x??s},set:W=>{j(x,t(W,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:W=>{K(W)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:W=>{J(W)}}}],destroy:we,css:`
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
    `}};window.tcRangeSliderPlugins.push(o)})();var vp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,Tt=(r,e,t,i)=>{for(var s=i>1?void 0:i?bp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&vp(e,t,s),s};let mt=class extends ut{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=Re(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)})}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.setFixedRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?O`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:O`

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

        `}};mt.styles=Oe`

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
    
    `;Tt([ye({context:za,subscribe:!0}),L()],mt.prototype,"min",2);Tt([ye({context:Va,subscribe:!0}),L()],mt.prototype,"max",2);Tt([ye({context:En,subscribe:!0}),L()],mt.prototype,"from",2);Tt([ye({context:Dn,subscribe:!0}),L()],mt.prototype,"to",2);Tt([L()],mt.prototype,"hasFixedFrom",2);Tt([L()],mt.prototype,"hasFixedTo",2);Tt([ye({context:hs,subscribe:!0}),L()],mt.prototype,"palette",2);Tt([L()],mt.prototype,"sliderRef",2);Tt([L()],mt.prototype,"initialised",2);mt=Tt([ae("registry-range-slider")],mt);var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,gi=(r,e,t,i)=>{for(var s=i>1?void 0:i?wp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&yp(e,t,s),s};let Dr=class extends ut{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var r,e;return this.from===void 0||this.to===void 0?z:O`
            <div>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};gi([ye({context:En,subscribe:!0})],Dr.prototype,"from",2);gi([ye({context:Dn,subscribe:!0})],Dr.prototype,"to",2);gi([F({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],Dr.prototype,"fixed",2);gi([F({type:String,reflect:!0,attribute:!0})],Dr.prototype,"separator",2);Dr=gi([ae("registry-range-display")],Dr);var xp=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,gs=(r,e,t,i)=>{for(var s=i>1?void 0:i?_p(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&xp(e,t,s),s};let Tr=class extends ut{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return O`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":z}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(r=>O`
                            <div class="histogram-bar">
                                <div style="height: ${r.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():O`
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
        `}};Tr.styles=Oe`

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


    `;gs([L()],Tr.prototype,"histogram",2);gs([F({type:Boolean,reflect:!0})],Tr.prototype,"interactive",2);gs([F({type:String,reflect:!0})],Tr.prototype,"height",2);Tr=gs([ae("registry-histogram")],Tr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zi extends kn{constructor(e){if(super(e),this.it=z,e.type!==_n.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===z||e==null)return this._t=void 0,this.it=e;if(e===Zt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Zi.directiveName="unsafeHTML",Zi.resultType=1;const gt=Ji(Zi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pn extends Zi{}pn.directiveName="unsafeSVG",pn.resultType=2;const kp=Ji(pn);var Cp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,ms=(r,e,t,i)=>{for(var s=i>1?void 0:i?$p(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Cp(e,t,s),s};let Lr=class extends pi{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",r=>{this.hint=r.description})}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?z:O`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return O`
                        
                        <button 
                            class=${Mt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${kp(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Lr.styles=Oe`

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

    `;ms([ye({context:qa,subscribe:!0}),L()],Lr.prototype,"value",2);ms([ye({context:Xa,subscribe:!0}),L()],Lr.prototype,"tools",2);ms([L()],Lr.prototype,"hint",2);Lr=ms([ae("group-tool-buttons")],Lr);var Pp=Object.defineProperty,mi=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,t,s)||s);return s&&Pp(e,t,s),s};class qe extends pi{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}mi([ye({context:Tn,subscribe:!0}),L()],qe.prototype,"parentFileProviderElement");mi([ye({context:Qa,subscribe:!0}),L()],qe.prototype,"loading");mi([ye({context:Ga,subscribe:!0}),L()],qe.prototype,"file");mi([ye({context:Za,subscribe:!0}),L()],qe.prototype,"failure");mi([ye({context:Ja,subscribe:!0}),L()],qe.prototype,"recording");var Sp=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,Ap=(r,e,t,i)=>{for(var s=i>1?void 0:i?Op(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Sp(e,t,s),s};let fn=class extends qe{constructor(){super(...arguments),this.container=Re()}onInstanceCreated(r){if(this.container.value!==void 0)r.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return O`
            <div ${Ne(this.container)} class=${Mt(t)} part="file-canvas-container">
            
                ${this.loading===!0?O`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:r===!0?O`<div class="error-wrapper">
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
                        </div>`:z}
            
            </div>
        
        `}};fn.styles=Oe`
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
    `;fn=Ap([ae("file-canvas")],fn);var Ep=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Tp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ep(e,t,s),s};let gn=class extends qe{onInstanceCreated(r){}onFailure(r){}render(){return this.file?O`
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
        `:z}};gn.styles=Oe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;gn=Tp([ae("file-share-button")],gn);var Lp=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Mp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Lp(e,t,s),s};let mn=class extends qe{onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?O`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${gt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${gt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?gt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):z}

                        ${gt(this.renderRow("Time",Sd.human(this.file.timestamp)))}

                        ${gt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${gt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${gt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${gt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${gt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${gt(this.renderRow("Type",this.file.service.parser.name))}
                    ${gt(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map(r=>O`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:z}};mn.styles=Oe`

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
    
    `;mn=Mp([ae("file-info-button")],mn);var Up=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Ip=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Up(e,t,s),s};let vn=class extends qe{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?z:O`

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

                    ${this.file.timeline.isSequence?O`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:z}
            
            </thermal-dropdown>

        
        `}};vn.styles=Oe`

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
    
    `;vn=Ip([ae("file-download-dropdown")],vn);var jp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&jp(e,t,s),s};let xt=class extends qe{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Re(),this.barRef=Re(),this.containerRef=Re(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<xt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}render(){var n,o,l;const r=this.file;if(r===void 0)return z;if(r.duration===0)return z;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return O`
            <div class="${Mt(e)}" ${Ne(this.containerRef)}>


                ${r!==void 0?O`
                        <div class="container">

                            <div class="${Mt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?O`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:O`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>

                            <div class="${Mt(s)}"  ${Ne(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Ne(this.barRef)}></div>
                                </div>

                                <div>
                                    ${this.markers.map(h=>O`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(o=this.duration)==null?void 0:o.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:z}

            
            
            </div>

            ${this.currentFrame!==void 0?O`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${Sr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${Sr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:z}

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
    
    `;ur([ye({context:Mn,subscribe:!0}),L()],xt.prototype,"playing",2);ur([ye({context:us,subscribe:!0}),L()],xt.prototype,"currentFrame",2);ur([ye({context:Rn,subscribe:!0}),L()],xt.prototype,"duration",2);ur([ye({context:el,subscribe:!0}),L()],xt.prototype,"mayStop",2);ur([ye({context:Un,subscribe:!0})],xt.prototype,"markers",2);ur([L()],xt.prototype,"collapsed",2);xt=ur([ae("file-timeline")],xt);var Np=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,In=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Np(e,t,s),s};let ii=class extends qe{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?z:O`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Pn).map(([r])=>O`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&(console.log(t.parentElement),t.parentElement instanceof It&&t.parentElement.setClose())}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};ii.styles=Oe`

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
    
    `;In([F({type:String,reflect:!0})],ii.prototype,"enabled",2);In([ye({context:Ka,subscribe:!0}),L()],ii.prototype,"playbackSpeed",2);ii=In([ae("file-playback-speed-dropdown")],ii);var Bp=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,jn=(r,e,t,i)=>{for(var s=i>1?void 0:i?zp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Bp(e,t,s),s};let si=class extends qe{constructor(){super(...arguments),this.container=Re()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return O`
            <div class="container">
            
                <video ${Ne(this.container)} preload="metadata">

                    ${this.url===void 0?z:O`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};si.styles=Oe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;jn([ye({context:us,subscribe:!0}),L()],si.prototype,"currentFrame",2);jn([F({type:String,reflect:!0,attribute:!0})],si.prototype,"url",2);si=jn([ae("file-video")],si);const Vp=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),Sr(t,"mm:ss:SSS")},Yp=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var qp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Lt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&qp(e,t,s),s};const Wn={fromAttribute:r=>r===null?null:Yp(r),toAttribute:r=>r===null?null:Vp(r)};let _t=class extends qe{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),this.log(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return z}};Lt([ye({context:Mn,subscribe:!0}),L()],_t.prototype,"playing",2);Lt([ye({context:Ln,subscribe:!0}),L()],_t.prototype,"ms",2);Lt([F({type:String,reflect:!0,attribute:!0})],_t.prototype,"label",2);Lt([F({type:String,reflect:!0,attribute:!0,converter:Wn})],_t.prototype,"start",2);Lt([F({type:String,reflect:!0,attribute:!0,converter:Wn})],_t.prototype,"end",2);Lt([F({type:String,reflect:!0,attribute:!0,converter:Wn})],_t.prototype,"dur",2);Lt([F({type:String,reflect:!0,attribute:!0})],_t.prototype,"active",2);Lt([F({type:String,reflect:!0,attribute:!0})],_t.prototype,"pauseOnActivate",2);Lt([F({type:String,reflect:!0,attribute:!0})],_t.prototype,"say",2);_t=Lt([ae("file-marker")],_t);var Gp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Gp(e,t,s),s};let Wt=class extends qe{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return O`

            <div class="${Mt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Wt.styles=Oe`
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


    `;pr([ye({context:Rn,subscribe:!0}),L()],Wt.prototype,"duration",2);pr([ye({context:us,subscribe:!0}),L()],Wt.prototype,"currentFrame",2);pr([ye({context:Ln,subscribe:!0}),L()],Wt.prototype,"ms",2);pr([F({type:Number,reflect:!0,attribute:!0})],Wt.prototype,"start",2);pr([F({type:Number,reflect:!0,attribute:!0})],Wt.prototype,"end",2);pr([L()],Wt.prototype,"active",2);Wt=pr([ae("file-marker-timeline")],Wt);var Qp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,nl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kp(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Qp(e,t,s),s};let Qi=class extends qe{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return O`
            <div>


            ${this.markers.map(r=>r.active?O`<div class="item">
                    <h2>${r.label}</h2>
                    ${gt(r.innerHTML)}
                    </div>`:z)}

            
            
            </div>

          `}};Qi.styles=Oe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;nl([ye({context:Un,subscribe:!0})],Qi.prototype,"markers",2);Qi=nl([ae("file-marks-content")],Qi);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Jp(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,vs=(r,e,t,i)=>{for(var s=i>1?void 0:i?tf(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ef(e,t,s),s};let Rr=class extends qe{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.graphs={values:[[]],colors:[]}}onInstanceCreated(){this.file!==void 0&&(this.file.analysis.layers.onSelectionChange.add(this.UUID,e=>{this.file&&(this.allSelected=this.file.analysis.value.length===e.length)}),this.file.analysisData.addListener(this.UUID,e=>{this.graphs=e,console.log(e.values[1])}))}onFailure(){}render(){var e;return this.analysis.length===0?z:O`
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

                    ${Jp(this.analysis,t=>O`
                        <file-analysis-row .analysis=${t}></file-analysis-row>
                    `)}

                </tbody>

            </table>
            
            </div>

            <div>
                ${this.graphs.colors.length>0?O`<google-chart type="line" .data=${this.graphs.values} .options=${{colors:this.graphs.colors}}></google-chart>`:z}
            </div>
        
        `}};Rr.styles=Oe`
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
    `;vs([ye({context:tl,subscribe:!0})],Rr.prototype,"analysis",2);vs([L()],Rr.prototype,"allSelected",2);vs([L()],Rr.prototype,"graphs",2);Rr=vs([ae("file-analysis-list")],Rr);var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,Ct=(r,e,t,i)=>{for(var s=i>1?void 0:i?sf(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&rf(e,t,s),s};let dt=class extends qe{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.values={min:void 0,max:void 0,avg:void 0},this.selectedRef=Re(),this.activeRef=Re()}onInstanceCreated(){}onFailure(){}uuid(r){return`${this.UUID}__${r}`}connectedCallback(){super.connectedCallback(),this.hydrate(this.analysis)}hydrate(r){this.log("HYDRATUJI",r.key),this.selected=r.selected,this.color=r.initialColor,this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height,r.onSelected.add("__onSelected",e=>{console.log(this.analysis.key,"selected",e.selected,this.selected),this.selected=!0}),r.onDeselected.add("__onDeselected",e=>{console.log(this.analysis.key,"deselected",e.selected,this.selected),this.selected=!1}),r.onValues.add("__onValues",(e,t,i)=>{this.values={min:e,max:t,avg:i}}),r.onMoveOrResize.add("__onResize",()=>{this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height})}dehydrate(r){this.log("DEHYDRATUJI",r.key),r.onSelected.delete("__onSelected"),r.onDeselected.delete("__onDeselected"),r.onValues.delete("__onValues"),r.onMoveOrResize.delete("__onResize")}willUpdate(r){if(super.willUpdate(r),r.has("analysis")){const e=r.get("analysis");e&&this.dehydrate(e),this.hydrate(this.analysis)}}temperatureOrNothing(r){return r===void 0?"-":r.toFixed(1)+" °C"}render(){return this.analysis===void 0?z:O`
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



    `;Ct([F({type:Object,attribute:!0})],dt.prototype,"analysis",2);Ct([F({type:String,reflect:!0,attribute:!0})],dt.prototype,"selected",2);Ct([F({type:String,reflect:!0,attribute:!0})],dt.prototype,"active",2);Ct([L()],dt.prototype,"color",2);Ct([L()],dt.prototype,"values",2);Ct([L()],dt.prototype,"top",2);Ct([L()],dt.prototype,"left",2);Ct([L()],dt.prototype,"width",2);Ct([L()],dt.prototype,"height",2);Ct([L()],dt.prototype,"selectedRef",2);dt=Ct([ae("file-analysis-row")],dt);var nf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?of(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&nf(e,t,s),s};let Nt=class extends qe{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return O`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.file.fileName:"Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?O`<file-share-button ></file-share-button>`:z}
              ${this.showabout===!0?O`<app-info-button ></app-info-button>`:z}
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
    `}};Nt.styles=Oe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;fr([F({type:Number})],Nt.prototype,"from",2);fr([F({type:Number})],Nt.prototype,"to",2);fr([F({type:Number})],Nt.prototype,"speed",2);fr([F({type:String,reflect:!0,attribute:!0})],Nt.prototype,"showembed",2);fr([F({type:String,reflect:!0,attribute:!0})],Nt.prototype,"showabout",2);fr([F({type:String,reflect:!0,attribute:!0})],Nt.prototype,"showfullscreen",2);Nt=fr([ae("file-app")],Nt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=r=>r??z;var af=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,Fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?lf(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&af(e,t,s),s};let hr=class extends cs{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?z:O`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${nn(this.from)} to=${nn(this.to)} speed=${nn(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Fr([F({type:String,reflect:!0})],hr.prototype,"palette",2);Fr([F({type:Number})],hr.prototype,"from",2);Fr([F({type:Number})],hr.prototype,"to",2);Fr([F({type:Number,reflect:!0})],hr.prototype,"speed",2);Fr([F({type:String,reflect:!0})],hr.prototype,"url",2);hr=Fr([ae("thermal-file-app")],hr);var cf=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,Nn=(r,e,t,i)=>{for(var s=i>1?void 0:i?hf(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&cf(e,t,s),s};let ni=class extends cs{constructor(){super(...arguments),this.dropinRef=Re(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return O`

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

                            ${this.loaded===!0?O`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:z}

                            <file-dropin ${Ne(this.dropinRef)}>

                                <file-app showembed="false" showabout="false"></file-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};ni.styles=Oe`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Nn([L()],ni.prototype,"dropinRef",2);Nn([L()],ni.prototype,"loaded",2);ni=Nn([ae("thermal-dropin-app")],ni);const on=window.matchMedia("(prefers-color-scheme: dark)"),Hn="thermal-dark-mode",Bo=()=>{document.body.classList.add(Hn)},df=()=>{document.body.classList.remove(Hn)},uf=()=>{on.matches&&Bo();const r=e=>{e.matches?Bo():df()};on.addEventListener("change",r),on.addListener(r)},pf=bn.toString().replaceAll(".","-"),ff=r=>`thermal__${r}__${pf}`,zo=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",ff(r)),t.innerHTML=e,document.head.appendChild(t)},gf=()=>{zo("rootVariables",`

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


            
        
        `),zo("darkModeOverrides",`
        
            body.${Hn} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${bn}
    Author: ${Al}
    `);uf();gf();document.addEventListener("DOMContentLoaded",()=>{});
