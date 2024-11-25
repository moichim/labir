var hc=Object.defineProperty;var cc=(r,e,t)=>e in r?hc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>(cc(r,typeof e!="symbol"?e+"":e,t),t);const La="1.2.53",uc="Jan Jáchim <jachim5@gmail.com>";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=globalThis,Ta=Ns.ShadowRoot&&(Ns.ShadyCSS===void 0||Ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ra=Symbol(),Io=new WeakMap;let _l=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ra)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ta&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Io.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Io.set(t,e))}return e}toString(){return this.cssText}};const dc=r=>new _l(typeof r=="string"?r:r+"",void 0,Ra),me=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new _l(t,r,Ra)},pc=(r,e)=>{if(Ta)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Ns.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Fo=Ta?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return dc(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fc,defineProperty:gc,getOwnPropertyDescriptor:mc,getOwnPropertyNames:vc,getOwnPropertySymbols:yc,getPrototypeOf:bc}=Object,Br=globalThis,zo=Br.trustedTypes,wc=zo?zo.emptyScript:"",ca=Br.reactiveElementPolyfillSupport,Yi=(r,e)=>r,Vs={toAttribute(r,e){switch(e){case Boolean:r=r?wc:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ma=(r,e)=>!fc(r,e),jo={attribute:!0,type:String,converter:Vs,reflect:!1,hasChanged:Ma};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Br.litPropertyMetadata??(Br.litPropertyMetadata=new WeakMap);let vi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=jo){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&gc(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=mc(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??jo}static _$Ei(){if(this.hasOwnProperty(Yi("elementProperties")))return;const e=bc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yi("properties"))){const t=this.properties,i=[...vc(t),...yc(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Fo(s))}else e!==void 0&&t.push(Fo(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Vs).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Vs;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ma)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};vi.elementStyles=[],vi.shadowRootOptions={mode:"open"},vi[Yi("elementProperties")]=new Map,vi[Yi("finalized")]=new Map,ca==null||ca({ReactiveElement:vi}),(Br.reactiveElementVersions??(Br.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qi=globalThis,Ys=qi.trustedTypes,No=Ys?Ys.createPolicy("lit-html",{createHTML:r=>r}):void 0,$l="$lit$",Wr=`lit$${Math.random().toFixed(9).slice(2)}$`,Cl="?"+Wr,xc=`<${Cl}>`,oi=document,Zi=()=>oi.createComment(""),Qi=r=>r===null||typeof r!="object"&&typeof r!="function",Al=Array.isArray,Sc=r=>Al(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ua=`[ 	
\f\r]`,Hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wo=/-->/g,Bo=/>/g,si=RegExp(`>|${ua}(?:([^\\s"'>=/]+)(${ua}*=${ua}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ho=/'/g,Go=/"/g,Pl=/^(?:script|style|textarea|title)$/i,_c=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),v=_c(1),Gr=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Vo=new WeakMap,ai=oi.createTreeWalker(oi,129);function kl(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return No!==void 0?No.createHTML(e):e}const $c=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",a=Hi;for(let o=0;o<t;o++){const h=r[o];let u,f,g=-1,b=0;for(;b<h.length&&(a.lastIndex=b,f=a.exec(h),f!==null);)b=a.lastIndex,a===Hi?f[1]==="!--"?a=Wo:f[1]!==void 0?a=Bo:f[2]!==void 0?(Pl.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=si):f[3]!==void 0&&(a=si):a===si?f[0]===">"?(a=s??Hi,g=-1):f[1]===void 0?g=-2:(g=a.lastIndex-f[2].length,u=f[1],a=f[3]===void 0?si:f[3]==='"'?Go:Ho):a===Go||a===Ho?a=si:a===Wo||a===Bo?a=Hi:(a=si,s=void 0);const $=a===si&&r[o+1].startsWith("/>")?" ":"";n+=a===Hi?h+xc:g>=0?(i.push(u),h.slice(0,g)+$l+h.slice(g)+Wr+$):h+Wr+(g===-2?o:$)}return[kl(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};let wa=class Ol{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,h=this.parts,[u,f]=$c(e,t);if(this.el=Ol.createElement(u,i),ai.currentNode=this.el.content,t===2){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=ai.nextNode())!==null&&h.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const g of s.getAttributeNames())if(g.endsWith($l)){const b=f[a++],$=s.getAttribute(g).split(Wr),C=/([.?@])?(.*)/.exec(b);h.push({type:1,index:n,name:C[2],strings:$,ctor:C[1]==="."?Ac:C[1]==="?"?Pc:C[1]==="@"?kc:un}),s.removeAttribute(g)}else g.startsWith(Wr)&&(h.push({type:6,index:n}),s.removeAttribute(g));if(Pl.test(s.tagName)){const g=s.textContent.split(Wr),b=g.length-1;if(b>0){s.textContent=Ys?Ys.emptyScript:"";for(let $=0;$<b;$++)s.append(g[$],Zi()),ai.nextNode(),h.push({type:2,index:++n});s.append(g[b],Zi())}}}else if(s.nodeType===8)if(s.data===Cl)h.push({type:2,index:n});else{let g=-1;for(;(g=s.data.indexOf(Wr,g+1))!==-1;)h.push({type:7,index:n}),g+=Wr.length-1}n++}}static createElement(e,t){const i=oi.createElement("template");return i.innerHTML=e,i}};function wi(r,e,t=r,i){var a,o;if(e===Gr)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Qi(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=wi(r,s._$AS(r,e.values),s,i)),e}let Cc=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??oi).importNode(t,!0);ai.currentNode=s;let n=ai.nextNode(),a=0,o=0,h=i[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new cs(n,n.nextSibling,this,e):h.type===1?u=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(u=new Oc(n,this,e)),this._$AV.push(u),h=i[++o]}a!==(h==null?void 0:h.index)&&(n=ai.nextNode(),a++)}return ai.currentNode=oi,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class cs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=wi(this,e,t),Qi(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==Gr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Sc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==F&&Qi(this._$AH)?this._$AA.nextSibling.data=e:this.T(oi.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=wa.createElement(kl(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new Cc(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Vo.get(e.strings);return t===void 0&&Vo.set(e.strings,t=new wa(e)),t}k(e){Al(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new cs(this.S(Zi()),this.S(Zi()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}let un=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=wi(this,e,t,0),a=!Qi(e)||e!==this._$AH&&e!==Gr,a&&(this._$AH=e);else{const o=e;let h,u;for(e=n[0],h=0;h<n.length-1;h++)u=wi(this,o[i+h],t,h),u===Gr&&(u=this._$AH[h]),a||(a=!Qi(u)||u!==this._$AH[h]),u===F?e=F:e!==F&&(e+=(u??"")+n[h+1]),this._$AH[h]=u}a&&!s&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ac=class extends un{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}};class Pc extends un{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class kc extends un{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=wi(this,e,t,0)??F)===Gr)return;const i=this._$AH,s=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}let Oc=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){wi(this,e)}};const da=qi.litHtmlPolyfillSupport;da==null||da(wa,cs),(qi.litHtmlVersions??(qi.litHtmlVersions=[])).push("3.1.4");const Ec=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new cs(e.insertBefore(Zi(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xt=class extends vi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ec(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Gr}};var Sl;xt._$litElement$=!0,xt.finalized=!0,(Sl=globalThis.litElementHydrateSupport)==null||Sl.call(globalThis,{LitElement:xt});const pa=globalThis.litElementPolyfillSupport;pa==null||pa({LitElement:xt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dc={attribute:!0,type:String,converter:Vs,reflect:!1,hasChanged:Ma},Lc=(r=Dc,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const h=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,h,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const h=this[a];e.call(this,o),this.requestUpdate(a,h,r)}}throw Error("Unsupported decorator location: "+i)};function m(r){return(e,t)=>typeof t=="object"?Lc(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(r){return m({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tc=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zr(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Tc(e,t,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(u=>u.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Rc={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Is(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Fs(r){return r.toString().indexOf("`")===-1}Fs(r=>r``)||Fs(r=>r`\0`)||Fs(r=>r`\n`)||Fs(r=>r`\u0000`);Is``&&Is`\0`&&Is`\n`&&Is`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Mc="google#safe";function Uc(){if(typeof window<"u")return window.trustedTypes}function El(){var r;return(r=Uc())!==null&&r!==void 0?r:null}let zs;function Ic(){var r,e;if(zs===void 0)try{zs=(e=(r=El())===null||r===void 0?void 0:r.createPolicy(Mc,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{zs=null}return zs}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Dl{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Yo(r){var e;const t=r,i=(e=Ic())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Dl(t,Rc)}function Fc(r){var e;if(!((e=El())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Dl)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function zc(r,...e){if(e.length===0)return Yo(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return Yo(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function jc(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Nc(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=jc(e||window);t&&r.setAttribute("nonce",t)}function Wc(r,e,t){r.src=Fc(e),Nc(r)}/**
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
 */const Bc=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Wc(t,zc`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Ll(r={}){await Bc;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function qo(r){if(await Ll(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Hc(r){return await Ll(),new google.visualization.ChartWrapper({container:r})}function ft(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function li(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const Tl=6048e5,Gc=864e5;let Vc={};function us(){return Vc}function Pr(r,e){var o,h,u,f;const t=us(),i=(e==null?void 0:e.weekStartsOn)??((h=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((f=(u=t.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??0,s=ft(r),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function qs(r){return Pr(r,{weekStartsOn:1})}function Rl(r){const e=ft(r),t=e.getFullYear(),i=li(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=qs(i),n=li(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const a=qs(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function Xs(r){const e=ft(r);return e.setHours(0,0,0,0),e}function Xo(r){const e=ft(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Yc(r,e){const t=Xs(r),i=Xs(e),s=+t-Xo(t),n=+i-Xo(i);return Math.round((s-n)/Gc)}function qc(r){const e=Rl(r),t=li(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),qs(t)}function Xc(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Ml(r){if(!Xc(r)&&typeof r!="number")return!1;const e=ft(r);return!isNaN(Number(e))}function Ul(r){const e=ft(r);return e.setHours(23,59,59,999),e}function Ks(r){const e=ft(r),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function Zs(r){const e=ft(r);return e.setDate(1),e.setHours(0,0,0,0),e}function Il(r){const e=ft(r),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function Ua(r){const e=ft(r),t=li(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Fl(r){const e=ft(r);return e.setMinutes(59,59,999),e}function Qs(r,e){var o,h;const t=us(),i=t.weekStartsOn??((h=(o=t.locale)==null?void 0:o.options)==null?void 0:h.weekStartsOn)??0,s=ft(r),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const Kc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Zc=(r,e,t)=>{let i;const s=Kc[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function fa(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Qc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Jc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},eu={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},tu={date:fa({formats:Qc,defaultWidth:"full"}),time:fa({formats:Jc,defaultWidth:"full"}),dateTime:fa({formats:eu,defaultWidth:"full"})},ru={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},iu=(r,e,t,i)=>ru[r];function Gi(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const su={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},nu={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},au={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ou={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},lu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},hu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},cu=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},uu={ordinalNumber:cu,era:Gi({values:su,defaultWidth:"wide"}),quarter:Gi({values:nu,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Gi({values:au,defaultWidth:"wide"}),day:Gi({values:ou,defaultWidth:"wide"}),dayPeriod:Gi({values:lu,defaultWidth:"wide",formattingValues:hu,defaultFormattingWidth:"wide"})};function Vi(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],h=Array.isArray(o)?pu(o,g=>g.test(a)):du(o,g=>g.test(a));let u;u=r.valueCallback?r.valueCallback(h):h,u=t.valueCallback?t.valueCallback(u):u;const f=e.slice(a.length);return{value:u,rest:f}}}function du(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function pu(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function fu(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const gu=/^(\d+)(th|st|nd|rd)?/i,mu=/\d+/i,vu={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},yu={any:[/^b/i,/^(a|c)/i]},bu={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},wu={any:[/1/i,/2/i,/3/i,/4/i]},xu={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Su={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_u={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$u={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Cu={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Au={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pu={ordinalNumber:fu({matchPattern:gu,parsePattern:mu,valueCallback:r=>parseInt(r,10)}),era:Vi({matchPatterns:vu,defaultMatchWidth:"wide",parsePatterns:yu,defaultParseWidth:"any"}),quarter:Vi({matchPatterns:bu,defaultMatchWidth:"wide",parsePatterns:wu,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Vi({matchPatterns:xu,defaultMatchWidth:"wide",parsePatterns:Su,defaultParseWidth:"any"}),day:Vi({matchPatterns:_u,defaultMatchWidth:"wide",parsePatterns:$u,defaultParseWidth:"any"}),dayPeriod:Vi({matchPatterns:Cu,defaultMatchWidth:"any",parsePatterns:Au,defaultParseWidth:"any"})},ku={code:"en-US",formatDistance:Zc,formatLong:tu,formatRelative:iu,localize:uu,match:Pu,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ou(r){const e=ft(r);return Yc(e,Ua(e))+1}function Eu(r){const e=ft(r),t=+qs(e)-+qc(e);return Math.round(t/Tl)+1}function zl(r,e){var f,g,b,$;const t=ft(r),i=t.getFullYear(),s=us(),n=(e==null?void 0:e.firstWeekContainsDate)??((g=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??s.firstWeekContainsDate??(($=(b=s.locale)==null?void 0:b.options)==null?void 0:$.firstWeekContainsDate)??1,a=li(r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Pr(a,e),h=li(r,0);h.setFullYear(i,0,n),h.setHours(0,0,0,0);const u=Pr(h,e);return t.getTime()>=o.getTime()?i+1:t.getTime()>=u.getTime()?i:i-1}function Du(r,e){var o,h,u,f;const t=us(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:h.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(u=t.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,s=zl(r,e),n=li(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Pr(n,e)}function Lu(r,e){const t=ft(r),i=+Pr(t,e)-+Du(t,e);return Math.round(i/Tl)+1}function De(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Nr={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return De(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):De(t+1,2)},d(r,e){return De(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return De(r.getHours()%12||12,e.length)},H(r,e){return De(r.getHours(),e.length)},m(r,e){return De(r.getMinutes(),e.length)},s(r,e){return De(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return De(s,e.length)}},gi={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ko={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Nr.y(r,e)},Y:function(r,e,t,i){const s=zl(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return De(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):De(n,e.length)},R:function(r,e){const t=Rl(r);return De(t,e.length)},u:function(r,e){const t=r.getFullYear();return De(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return De(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return De(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Nr.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return De(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=Lu(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):De(s,e.length)},I:function(r,e,t){const i=Eu(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):De(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Nr.d(r,e)},D:function(r,e,t){const i=Ou(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):De(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return De(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return De(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return De(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=gi.noon:i===0?s=gi.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=gi.evening:i>=12?s=gi.afternoon:i>=4?s=gi.morning:s=gi.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Nr.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Nr.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):De(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):De(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Nr.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Nr.s(r,e)},S:function(r,e){return Nr.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Qo(i);case"XXXX":case"XX":return ni(i);case"XXXXX":case"XXX":default:return ni(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return Qo(i);case"xxxx":case"xx":return ni(i);case"xxxxx":case"xxx":default:return ni(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Zo(i,":");case"OOOO":default:return"GMT"+ni(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Zo(i,":");case"zzzz":default:return"GMT"+ni(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return De(i,e.length)},T:function(r,e,t){const i=r.getTime();return De(i,e.length)}};function Zo(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+De(n,2)}function Qo(r,e){return r%60===0?(r>0?"-":"+")+De(Math.abs(r)/60,2):ni(r,e)}function ni(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=De(Math.trunc(i/60),2),n=De(i%60,2);return t+s+e+n}const Jo=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},jl=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Tu=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Jo(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Jo(i,e)).replace("{{time}}",jl(s,e))},Ru={p:jl,P:Tu},Mu=/^D+$/,Uu=/^Y+$/,Iu=["D","DD","YY","YYYY"];function Fu(r){return Mu.test(r)}function zu(r){return Uu.test(r)}function ju(r,e,t){const i=Nu(r,e,t);if(console.warn(i),Iu.includes(r))throw new RangeError(i)}function Nu(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Wu=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Bu=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Hu=/^'([^]*?)'?$/,Gu=/''/g,Vu=/[a-zA-Z]/;function Qe(r,e,t){var f,g,b,$;const i=us(),s=i.locale??ku,n=i.firstWeekContainsDate??((g=(f=i.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,a=i.weekStartsOn??(($=(b=i.locale)==null?void 0:b.options)==null?void 0:$.weekStartsOn)??0,o=ft(r);if(!Ml(o))throw new RangeError("Invalid time value");let h=e.match(Bu).map(C=>{const A=C[0];if(A==="p"||A==="P"){const k=Ru[A];return k(C,s.formatLong)}return C}).join("").match(Wu).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const A=C[0];if(A==="'")return{isToken:!1,value:Yu(C)};if(Ko[A])return{isToken:!0,value:C};if(A.match(Vu))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:C}});s.localize.preprocessor&&(h=s.localize.preprocessor(o,h));const u={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return h.map(C=>{if(!C.isToken)return C.value;const A=C.value;(zu(A)||Fu(A))&&ju(A,e,String(r));const k=Ko[A[0]];return k(o,A,s.localize,u)}).join("")}function Yu(r){const e=r.match(Hu);return e?e[1].replace(Gu,"'"):r}function ga(r,e){const t=ft(r);if(!Ml(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const h=De(t.getDate(),2),u=De(t.getMonth()+1,2);n=`${De(t.getFullYear(),4)}${a}${u}${a}${h}`}if(s!=="date"){const h=De(t.getHours(),2),u=De(t.getMinutes(),2),f=De(t.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${o}${u}${o}${f}`}return n}function Nl(r){const e=ft(r);return e.setMinutes(0,0,0),e}var qu={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Xu=`\r
`,Ku="\uFEFF",ds=r=>Object.assign({},qu,r);class Zu extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class Qu extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class Ju extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class ed extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Ri=r=>r,Wt=r=>r,Xi=Ri,dn=Ri,xi=Ri,el=Ri,tl=Ri,td=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},rd=r=>el(typeof r=="object"?r.key:r),id=r=>tl(typeof r=="object"?r.displayLabel:r),sd=(r,...e)=>e.reduce((t,i)=>i(t),r),nd=r=>e=>r.useBom?dn(Wt(e)+Ku):e,ad=r=>e=>r.showTitle?Ia(dn(Wt(e)+r.title))(xi("")):e,Ia=r=>e=>dn(Wt(r)+Wt(e)+Xu),Wl=r=>(e,t)=>od(r)(xi(Wt(e)+Wt(t))),od=r=>e=>Ri(Wt(e)+r.fieldSeparator),ld=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Qu("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=xi("");for(let s=0;s<e.length;s++){const n=id(e[s]);i=Wl(r)(i,Bl(r,Wt(n)))}return i=xi(Wt(i).slice(0,-1)),Ia(t)(i)},hd=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=xi("");for(let o=0;o<e.length;o++){const h=rd(e[o]),u=t[n][Wt(h)];a=Wl(r)(a,Bl(r,u))}a=xi(Wt(a).slice(0,-1)),s=Ia(s)(a)}return s},cd=r=>+r===r&&(!isFinite(r)||!!(r%1)),ud=(r,e)=>{if(cd(e)){if(r.decimalSeparator==="locale")return Xi(e.toLocaleString());if(r.decimalSeparator)return Xi(e.toString().replace(".",r.decimalSeparator))}return Xi(e.toString())},Ws=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+td(e,r.quoteCharacter)+r.quoteCharacter),Xi(t)},dd=(r,e)=>{const t=e?"true":"false";return Xi(r.boolDisplay[t])},pd=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?Ws(r,r.replaceUndefinedWith+""):e===null?Ws(r,"null"):Ws(r,""),Bl=(r,e)=>{if(typeof e=="number")return ud(r,e);if(typeof e=="string")return Ws(r,e);if(typeof e=="boolean"&&r.boolDisplay)return dd(r,e);if(e===null||typeof e>"u")return pd(r,e);throw new ed(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Hl=r=>e=>{const t=ds(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=sd(dn(""),nd(t),ad(t),ld(t,i),hd(t,i,e));if(Wt(s).length<1)throw new Zu("Output is empty. Is your data formatted correctly?");return s},fd=r=>e=>{const t=ds(r),i=Wt(e),s=t.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Gl=r=>e=>{if(!window)throw new Ju("Downloading only supported in a browser environment.");const t=fd(r)(e),i=ds(r),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function md(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function vd(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var Vl={exports:{}};(function(r){(function(e){var t=V(),i=te(),s=X(),n=pe(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:h,toPng:f,toJpeg:g,toBlob:b,toPixelData:u,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function h(w,_){return _=_||{},$(_),Promise.resolve(w).then(function(D){return A(D,_.filter,!0)}).then(k).then(H).then(E).then(function(D){return j(D,_.width||t.width(w),_.height||t.height(w))});function E(D){return _.bgcolor&&(D.style.backgroundColor=_.bgcolor),_.width&&(D.style.width=_.width+"px"),_.height&&(D.style.height=_.height+"px"),_.style&&Object.keys(_.style).forEach(function(B){D.style[B]=_.style[B]}),D}}function u(w,_){return C(w,_||{}).then(function(E){return E.getContext("2d").getImageData(0,0,t.width(w),t.height(w)).data})}function f(w,_){return C(w,_||{}).then(function(E){return E.toDataURL()})}function g(w,_){return _=_||{},C(w,_).then(function(E){return E.toDataURL("image/jpeg",_.quality||1)})}function b(w,_){return C(w,_||{}).then(t.canvasToBlob)}function $(w){typeof w.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=w.imagePlaceholder,typeof w.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=w.cacheBust}function C(w,_){return h(w,_).then(t.makeImage).then(t.delay(100)).then(function(D){var B=E(w);return B.getContext("2d").drawImage(D,0,0),B});function E(D){var B=document.createElement("canvas");if(B.width=_.width||t.width(D),B.height=_.height||t.height(D),_.bgcolor){var T=B.getContext("2d");T.fillStyle=_.bgcolor,T.fillRect(0,0,B.width,B.height)}return B}}function A(w,_,E){if(!E&&_&&!_(w))return Promise.resolve();return Promise.resolve(w).then(D).then(function(R){return B(w,R,_)}).then(function(R){return T(w,R)});function D(R){return R instanceof HTMLCanvasElement?t.makeImage(R.toDataURL()):R.cloneNode(!1)}function B(R,I,ie){var _e=R.childNodes;if(_e.length===0)return Promise.resolve(I);return we(I,t.asArray(_e),ie).then(function(){return I});function we(Re,Ve,je){var rt=Promise.resolve();return Ve.forEach(function(ct){rt=rt.then(function(){return A(ct,je)}).then(function(et){et&&Re.appendChild(et)})}),rt}}function T(R,I){if(!(I instanceof Element))return I;return Promise.resolve().then(ie).then(_e).then(we).then(Re).then(function(){return I});function ie(){Ve(window.getComputedStyle(R),I.style);function Ve(je,rt){je.cssText?rt.cssText=je.cssText:ct(je,rt);function ct(et,ot){t.asArray(et).forEach(function(K){ot.setProperty(K,et.getPropertyValue(K),et.getPropertyPriority(K))})}}}function _e(){[":before",":after"].forEach(function(je){Ve(je)});function Ve(je){var rt=window.getComputedStyle(R,je),ct=rt.getPropertyValue("content");if(ct===""||ct==="none")return;var et=t.uid();I.className=I.className+" "+et;var ot=document.createElement("style");ot.appendChild(K(et,je,rt)),I.appendChild(ot);function K(ee,fe,$e){var Ne="."+ee+":"+fe,Pe=$e.cssText?Fr($e):ti($e);return document.createTextNode(Ne+"{"+Pe+"}");function Fr(We){var It=We.getPropertyValue("content");return We.cssText+" content: "+It+";"}function ti(We){return t.asArray(We).map(It).join("; ")+";";function It($r){return $r+": "+We.getPropertyValue($r)+(We.getPropertyPriority($r)?" !important":"")}}}}}function we(){R instanceof HTMLTextAreaElement&&(I.innerHTML=R.value),R instanceof HTMLInputElement&&I.setAttribute("value",R.value)}function Re(){I instanceof SVGElement&&(I.setAttribute("xmlns","http://www.w3.org/2000/svg"),I instanceof SVGRectElement&&["width","height"].forEach(function(Ve){var je=I.getAttribute(Ve);je&&I.style.setProperty(Ve,je)}))}}}function k(w){return s.resolveAll().then(function(_){var E=document.createElement("style");return w.appendChild(E),E.appendChild(document.createTextNode(_)),w})}function H(w){return n.inlineAll(w).then(function(){return w})}function j(w,_,E){return Promise.resolve(w).then(function(D){return D.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(D)}).then(t.escapeXhtml).then(function(D){return'<foreignObject x="0" y="0" width="100%" height="100%">'+D+"</foreignObject>"}).then(function(D){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+_+'" height="'+E+'">'+D+"</svg>"}).then(function(D){return"data:image/svg+xml;charset=utf-8,"+D})}function V(){return{escape:Re,parseExtension:_,mimeType:E,dataAsUrl:we,isDataUrl:D,canvasToBlob:T,resolveUrl:R,getAndEncode:_e,uid:I(),delay:Ve,asArray:je,escapeXhtml:rt,makeImage:ie,width:ct,height:et};function w(){var K="application/font-woff",ee="image/jpeg";return{woff:K,woff2:K,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ee,jpeg:ee,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function _(K){var ee=/\.([^\.\/]*?)$/g.exec(K);return ee?ee[1]:""}function E(K){var ee=_(K).toLowerCase();return w()[ee]||""}function D(K){return K.search(/^(data:)/)!==-1}function B(K){return new Promise(function(ee){for(var fe=window.atob(K.toDataURL().split(",")[1]),$e=fe.length,Ne=new Uint8Array($e),Pe=0;Pe<$e;Pe++)Ne[Pe]=fe.charCodeAt(Pe);ee(new Blob([Ne],{type:"image/png"}))})}function T(K){return K.toBlob?new Promise(function(ee){K.toBlob(ee)}):B(K)}function R(K,ee){var fe=document.implementation.createHTMLDocument(),$e=fe.createElement("base");fe.head.appendChild($e);var Ne=fe.createElement("a");return fe.body.appendChild(Ne),$e.href=ee,Ne.href=K,Ne.href}function I(){var K=0;return function(){return"u"+ee()+K++;function ee(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function ie(K){return new Promise(function(ee,fe){var $e=new Image;$e.onload=function(){ee($e)},$e.onerror=fe,$e.src=K})}function _e(K){var ee=3e4;return o.impl.options.cacheBust&&(K+=(/\?/.test(K)?"&":"?")+new Date().getTime()),new Promise(function(fe){var $e=new XMLHttpRequest;$e.onreadystatechange=Fr,$e.ontimeout=ti,$e.responseType="blob",$e.timeout=ee,$e.open("GET",K,!0),$e.send();var Ne;if(o.impl.options.imagePlaceholder){var Pe=o.impl.options.imagePlaceholder.split(/,/);Pe&&Pe[1]&&(Ne=Pe[1])}function Fr(){if($e.readyState===4){if($e.status!==200){Ne?fe(Ne):We("cannot fetch resource: "+K+", status: "+$e.status);return}var It=new FileReader;It.onloadend=function(){var $r=It.result.split(/,/)[1];fe($r)},It.readAsDataURL($e.response)}}function ti(){Ne?fe(Ne):We("timeout of "+ee+"ms occured while fetching resource: "+K)}function We(It){console.error(It),fe("")}})}function we(K,ee){return"data:"+ee+";base64,"+K}function Re(K){return K.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function Ve(K){return function(ee){return new Promise(function(fe){setTimeout(function(){fe(ee)},K)})}}function je(K){for(var ee=[],fe=K.length,$e=0;$e<fe;$e++)ee.push(K[$e]);return ee}function rt(K){return K.replace(/#/g,"%23").replace(/\n/g,"%0A")}function ct(K){var ee=ot(K,"border-left-width"),fe=ot(K,"border-right-width");return K.scrollWidth+ee+fe}function et(K){var ee=ot(K,"border-top-width"),fe=ot(K,"border-bottom-width");return K.scrollHeight+ee+fe}function ot(K,ee){var fe=window.getComputedStyle(K).getPropertyValue(ee);return parseFloat(fe.replace("px",""))}}function te(){var w=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:B,shouldProcess:_,impl:{readUrls:E,inline:D}};function _(T){return T.search(w)!==-1}function E(T){for(var R=[],I;(I=w.exec(T))!==null;)R.push(I[1]);return R.filter(function(ie){return!t.isDataUrl(ie)})}function D(T,R,I,ie){return Promise.resolve(R).then(function(we){return I?t.resolveUrl(we,I):we}).then(ie||t.getAndEncode).then(function(we){return t.dataAsUrl(we,t.mimeType(R))}).then(function(we){return T.replace(_e(R),"$1"+we+"$3")});function _e(we){return new RegExp(`(url\\(['"]?)(`+t.escape(we)+`)(['"]?\\))`,"g")}}function B(T,R,I){if(ie())return Promise.resolve(T);return Promise.resolve(T).then(E).then(function(_e){var we=Promise.resolve(T);return _e.forEach(function(Re){we=we.then(function(Ve){return D(Ve,Re,R,I)})}),we});function ie(){return!_(T)}}}function X(){return{resolveAll:w,impl:{readAll:_}};function w(){return _().then(function(E){return Promise.all(E.map(function(D){return D.resolve()}))}).then(function(E){return E.join(`
`)})}function _(){return Promise.resolve(t.asArray(document.styleSheets)).then(D).then(E).then(function(T){return T.map(B)});function E(T){return T.filter(function(R){return R.type===CSSRule.FONT_FACE_RULE}).filter(function(R){return i.shouldProcess(R.style.getPropertyValue("src"))})}function D(T){var R=[];return T.forEach(function(I){try{t.asArray(I.cssRules||[]).forEach(R.push.bind(R))}catch(ie){console.log("Error while reading CSS rules from "+I.href,ie.toString())}}),R}function B(T){return{resolve:function(){var I=(T.parentStyleSheet||{}).href;return i.inlineAll(T.cssText,I)},src:function(){return T.style.getPropertyValue("src")}}}}}function pe(){return{inlineAll:_,impl:{newImage:w}};function w(E){return{inline:D};function D(B){return t.isDataUrl(E.src)?Promise.resolve():Promise.resolve(E.src).then(B||t.getAndEncode).then(function(T){return t.dataAsUrl(T,t.mimeType(E.src))}).then(function(T){return new Promise(function(R,I){E.onload=R,E.onerror=I,E.src=T})})}}function _(E){if(!(E instanceof Element))return Promise.resolve(E);return D(E).then(function(){return E instanceof HTMLImageElement?w(E).inline():Promise.all(t.asArray(E.childNodes).map(function(B){return _(B)}))});function D(B){var T=B.style.getPropertyValue("background");return T?i.inlineAll(T).then(function(R){B.style.setProperty("background",R,B.style.getPropertyPriority("background"))}).then(function(){return B}):Promise.resolve(B)}}}})()})(Vl);var yd=Vl.exports;const bd=md(yd);var xa={exports:{}};const wd={},xd=Object.freeze(Object.defineProperty({__proto__:null,default:wd},Symbol.toStringTag,{value:"Module"})),mi=vd(xd);/**
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
 */(function(r,e){(function(t,i){i(e)})(gd,function(t){var i={},s={exports:{}};(function(L){var z=function(ae){return typeof ae<"u"&&ae.versions!=null&&ae.versions.node!=null&&ae+""=="[object process]"};L.exports.isNode=z,L.exports.platform=typeof process<"u"&&z(process)?"node":"browser";var N=L.exports.platform==="node"&&mi;L.exports.isMainThread=L.exports.platform==="node"?(!N||N.isMainThread)&&!process.connected:typeof Window<"u",L.exports.cpus=L.exports.platform==="browser"?self.navigator.hardwareConcurrency:mi.cpus().length})(s);var n=s.exports,a={},o;function h(){if(o)return a;o=1;function L(ae,Ue){var ge=this;if(!(this instanceof L))throw new SyntaxError("Constructor must be called with the new operator");if(typeof ae!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Ye=[],Le=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var Q=function(ye,ke){Ye.push(ye),Le.push(ke)};this.then=function(M,ye){return new L(function(ke,lt){var bt=M?z(M,ke,lt):ke,hr=ye?z(ye,ke,lt):lt;Q(bt,hr)},ge)};var Te=function(ye){return ge.resolved=!0,ge.rejected=!1,ge.pending=!1,Ye.forEach(function(ke){ke(ye)}),Q=function(lt,bt){lt(ye)},Te=O=function(){},ge},O=function(ye){return ge.resolved=!1,ge.rejected=!0,ge.pending=!1,Le.forEach(function(ke){ke(ye)}),Q=function(lt,bt){bt(ye)},Te=O=function(){},ge};this.cancel=function(){return Ue?Ue.cancel():O(new N),ge},this.timeout=function(M){if(Ue)Ue.timeout(M);else{var ye=setTimeout(function(){O(new W("Promise timed out after "+M+" ms"))},M);ge.always(function(){clearTimeout(ye)})}return ge},ae(function(M){Te(M)},function(M){O(M)})}function z(ae,Ue,ge){return function(Ye){try{var Le=ae(Ye);Le&&typeof Le.then=="function"&&typeof Le.catch=="function"?Le.then(Ue,ge):Ue(Le)}catch(Q){ge(Q)}}}L.prototype.catch=function(ae){return this.then(null,ae)},L.prototype.always=function(ae){return this.then(ae,ae)},L.all=function(ae){return new L(function(Ue,ge){var Ye=ae.length,Le=[];Ye?ae.forEach(function(Q,Te){Q.then(function(O){Le[Te]=O,Ye--,Ye==0&&Ue(Le)},function(O){Ye=0,ge(O)})}):Ue(Le)})},L.defer=function(){var ae={};return ae.promise=new L(function(Ue,ge){ae.resolve=Ue,ae.reject=ge}),ae};function N(ae){this.message=ae||"promise cancelled",this.stack=new Error().stack}N.prototype=new Error,N.prototype.constructor=Error,N.prototype.name="CancellationError",L.CancellationError=N;function W(ae){this.message=ae||"timeout exceeded",this.stack=new Error().stack}return W.prototype=new Error,W.prototype.constructor=Error,W.prototype.name="TimeoutError",L.TimeoutError=W,a.Promise=L,a}function u(L,z){(z==null||z>L.length)&&(z=L.length);for(var N=0,W=Array(z);N<z;N++)W[N]=L[N];return W}function f(L,z){var N=typeof Symbol<"u"&&L[Symbol.iterator]||L["@@iterator"];if(!N){if(Array.isArray(L)||(N=H(L))||z){N&&(L=N);var W=0,ae=function(){};return{s:ae,n:function(){return W>=L.length?{done:!0}:{done:!1,value:L[W++]}},e:function(Le){throw Le},f:ae}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ue,ge=!0,Ye=!1;return{s:function(){N=N.call(L)},n:function(){var Le=N.next();return ge=Le.done,Le},e:function(Le){Ye=!0,Ue=Le},f:function(){try{ge||N.return==null||N.return()}finally{if(Ye)throw Ue}}}}function g(L,z,N){return(z=A(z))in L?Object.defineProperty(L,z,{value:N,enumerable:!0,configurable:!0,writable:!0}):L[z]=N,L}function b(L,z){var N=Object.keys(L);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(L);z&&(W=W.filter(function(ae){return Object.getOwnPropertyDescriptor(L,ae).enumerable})),N.push.apply(N,W)}return N}function $(L){for(var z=1;z<arguments.length;z++){var N=arguments[z]!=null?arguments[z]:{};z%2?b(Object(N),!0).forEach(function(W){g(L,W,N[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(N)):b(Object(N)).forEach(function(W){Object.defineProperty(L,W,Object.getOwnPropertyDescriptor(N,W))})}return L}function C(L,z){if(typeof L!="object"||!L)return L;var N=L[Symbol.toPrimitive];if(N!==void 0){var W=N.call(L,z||"default");if(typeof W!="object")return W;throw new TypeError("@@toPrimitive must return a primitive value.")}return(z==="string"?String:Number)(L)}function A(L){var z=C(L,"string");return typeof z=="symbol"?z:z+""}function k(L){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},k(L)}function H(L,z){if(L){if(typeof L=="string")return u(L,z);var N={}.toString.call(L).slice(8,-1);return N==="Object"&&L.constructor&&(N=L.constructor.name),N==="Map"||N==="Set"?Array.from(L):N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)?u(L,z):void 0}}var j={exports:{}},V={},te;function X(){return te||(te=1,V.validateOptions=function(z,N,W){if(z){var ae=z?Object.keys(z):[],Ue=ae.find(function(Ye){return!N.includes(Ye)});if(Ue)throw new Error('Object "'+W+'" contains an unknown option "'+Ue+'"');var ge=N.find(function(Ye){return Object.prototype[Ye]&&!ae.includes(Ye)});if(ge)throw new Error('Object "'+W+'" contains an inherited option "'+ge+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return z}},V.workerOptsNames=["credentials","name","type"],V.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],V.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),V}var pe,w;function _(){return w||(w=1,pe=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),pe}var E;function D(){if(E)return j.exports;E=1;var L=h(),z=L.Promise,N=n,W=X(),ae=W.validateOptions,Ue=W.forkOptsNames,ge=W.workerThreadOptsNames,Ye=W.workerOptsNames,Le="__workerpool-terminate__";function Q(){var ne=O();if(!ne)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return ne}function Te(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function O(){try{return mi}catch(ne){if(k(ne)==="object"&&ne!==null&&ne.code==="MODULE_NOT_FOUND")return null;throw ne}}function M(){if(N.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var ne=new Blob([_()],{type:"text/javascript"});return window.URL.createObjectURL(ne)}else return __dirname+"/worker.js"}function ye(ne,xe){if(xe.workerType==="web")return Te(),ke(ne,xe.workerOpts,Worker);if(xe.workerType==="thread")return U=Q(),lt(ne,U,xe);if(xe.workerType==="process"||!xe.workerType)return bt(ne,hr(xe),mi);if(N.platform==="browser")return Te(),ke(ne,xe.workerOpts,Worker);var U=O();return U?lt(ne,U,xe):bt(ne,hr(xe),mi)}function ke(ne,xe,U){ae(xe,Ye,"workerOpts");var de=new U(ne,xe);return de.isBrowserWorker=!0,de.on=function(Ie,Me){this.addEventListener(Ie,function(Je){Me(Je.data)})},de.send=function(Ie,Me){this.postMessage(Ie,Me)},de}function lt(ne,xe,U){var de,Ie;ae(U==null?void 0:U.workerThreadOpts,ge,"workerThreadOpts");var Me=new xe.Worker(ne,$({stdout:(de=U==null?void 0:U.emitStdStreams)!==null&&de!==void 0?de:!1,stderr:(Ie=U==null?void 0:U.emitStdStreams)!==null&&Ie!==void 0?Ie:!1},U==null?void 0:U.workerThreadOpts));return Me.isWorkerThread=!0,Me.send=function(Je,Oe){this.postMessage(Je,Oe)},Me.kill=function(){return this.terminate(),!0},Me.disconnect=function(){this.terminate()},U!=null&&U.emitStdStreams&&(Me.stdout.on("data",function(Je){return Me.emit("stdout",Je)}),Me.stderr.on("data",function(Je){return Me.emit("stderr",Je)})),Me}function bt(ne,xe,U){ae(xe.forkOpts,Ue,"forkOpts");var de=U.fork(ne,xe.forkArgs,xe.forkOpts),Ie=de.send;return de.send=function(Me){return Ie.call(de,Me)},xe.emitStdStreams&&(de.stdout.on("data",function(Me){return de.emit("stdout",Me)}),de.stderr.on("data",function(Me){return de.emit("stderr",Me)})),de.isChildProcess=!0,de}function hr(ne){ne=ne||{};var xe=process.execArgv.join(" "),U=xe.indexOf("--inspect")!==-1,de=xe.indexOf("--debug-brk")!==-1,Ie=[];return U&&(Ie.push("--inspect="+ne.debugPort),de&&Ie.push("--debug-brk")),process.execArgv.forEach(function(Me){Me.indexOf("--max-old-space-size")>-1&&Ie.push(Me)}),Object.assign({},ne,{forkArgs:ne.forkArgs,forkOpts:Object.assign({},ne.forkOpts,{execArgv:(ne.forkOpts&&ne.forkOpts.execArgv||[]).concat(Ie),stdio:ne.emitStdStreams?"pipe":void 0})})}function Ft(ne){for(var xe=new Error(""),U=Object.keys(ne),de=0;de<U.length;de++)xe[U[de]]=ne[U[de]];return xe}function Xt(ne,xe){if(Object.keys(ne.processing).length===1){var U=Object.values(ne.processing)[0];U.options&&typeof U.options.on=="function"&&U.options.on(xe)}}function zr(ne,xe){var U=this,de=xe||{};this.script=ne||M(),this.worker=ye(this.script,de),this.debugPort=de.debugPort,this.forkOpts=de.forkOpts,this.forkArgs=de.forkArgs,this.workerOpts=de.workerOpts,this.workerThreadOpts=de.workerThreadOpts,this.workerTerminateTimeout=de.workerTerminateTimeout,ne||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Oe){Xt(U,{stdout:Oe.toString()})}),this.worker.on("stderr",function(Oe){Xt(U,{stderr:Oe.toString()})}),this.worker.on("message",function(Oe){if(!U.terminated)if(typeof Oe=="string"&&Oe==="ready")U.worker.ready=!0,Me();else{var Pt=Oe.id,ht=U.processing[Pt];ht!==void 0&&(Oe.isEvent?ht.options&&typeof ht.options.on=="function"&&ht.options.on(Oe.payload):(delete U.processing[Pt],U.terminating===!0&&U.terminate(),Oe.error?ht.resolver.reject(Ft(Oe.error)):ht.resolver.resolve(Oe.result)))}});function Ie(Oe){U.terminated=!0;for(var Pt in U.processing)U.processing[Pt]!==void 0&&U.processing[Pt].resolver.reject(Oe);U.processing=Object.create(null)}function Me(){var Oe=f(U.requestQueue.splice(0)),Pt;try{for(Oe.s();!(Pt=Oe.n()).done;){var ht=Pt.value;U.worker.send(ht.message,ht.transfer)}}catch(Cs){Oe.e(Cs)}finally{Oe.f()}}var Je=this.worker;this.worker.on("error",Ie),this.worker.on("exit",function(Oe,Pt){var ht=`Workerpool Worker terminated Unexpectedly
`;ht+="    exitCode: `"+Oe+"`\n",ht+="    signalCode: `"+Pt+"`\n",ht+="    workerpool.script: `"+U.script+"`\n",ht+="    spawnArgs: `"+Je.spawnargs+"`\n",ht+="    spawnfile: `"+Je.spawnfile+"`\n",ht+="    stdout: `"+Je.stdout+"`\n",ht+="    stderr: `"+Je.stderr+"`\n",Ie(new Error(ht))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return zr.prototype.methods=function(){return this.exec("methods")},zr.prototype.exec=function(ne,xe,U,de){U||(U=z.defer());var Ie=++this.lastId;this.processing[Ie]={id:Ie,resolver:U,options:de};var Me={message:{id:Ie,method:ne,params:xe},transfer:de&&de.transfer};this.terminated?U.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Me.message,Me.transfer):this.requestQueue.push(Me);var Je=this;return U.promise.catch(function(Oe){if(Oe instanceof z.CancellationError||Oe instanceof z.TimeoutError)return delete Je.processing[Ie],Je.terminateAndNotify(!0).then(function(){throw Oe},function(Pt){throw Pt});throw Oe})},zr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},zr.prototype.terminate=function(ne,xe){var U=this;if(ne){for(var de in this.processing)this.processing[de]!==void 0&&this.processing[de].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof xe=="function"&&(this.terminationHandler=xe),this.busy())this.terminating=!0;else{var Ie=function(Oe){if(U.terminated=!0,U.cleaning=!1,U.worker!=null&&U.worker.removeAllListeners&&U.worker.removeAllListeners("message"),U.worker=null,U.terminating=!1,U.terminationHandler)U.terminationHandler(Oe,U);else if(Oe)throw Oe};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ie(new Error("worker already killed!"));return}var Me=setTimeout(function(){U.worker&&U.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Me),U.worker&&(U.worker.killed=!0),Ie()}),this.worker.ready?this.worker.send(Le):this.requestQueue.push({message:Le}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ie()}},zr.prototype.terminateAndNotify=function(ne,xe){var U=z.defer();return xe&&U.promise.timeout(xe),this.terminate(ne,function(de,Ie){de?U.reject(de):U.resolve(Ie)}),U.promise},j.exports=zr,j.exports._tryRequireWorkerThreads=O,j.exports._setupProcessWorker=bt,j.exports._setupBrowserWorker=ke,j.exports._setupWorkerThreadWorker=lt,j.exports.ensureWorkerThreads=Q,j.exports}var B,T;function R(){if(T)return B;T=1;var L=65535;B=z;function z(){this.ports=Object.create(null),this.length=0}return z.prototype.nextAvailableStartingAt=function(N){for(;this.ports[N]===!0;)N++;if(N>=L)throw new Error("WorkerPool debug port limit reached: "+N+">= "+L);return this.ports[N]=!0,this.length++,N},z.prototype.releasePort=function(N){delete this.ports[N],this.length--},B}var I,ie;function _e(){if(ie)return I;ie=1;var L=h(),z=L.Promise,N=D(),W=n,ae=R(),Ue=new ae;function ge(O,M){typeof O=="string"?this.script=O||null:(this.script=null,M=O),this.workers=[],this.tasks=[],M=M||{},this.forkArgs=Object.freeze(M.forkArgs||[]),this.forkOpts=Object.freeze(M.forkOpts||{}),this.workerOpts=Object.freeze(M.workerOpts||{}),this.workerThreadOpts=Object.freeze(M.workerThreadOpts||{}),this.debugPortStart=M.debugPortStart||43210,this.nodeWorker=M.nodeWorker,this.workerType=M.workerType||M.nodeWorker||"auto",this.maxQueueSize=M.maxQueueSize||1/0,this.workerTerminateTimeout=M.workerTerminateTimeout||1e3,this.onCreateWorker=M.onCreateWorker||function(){return null},this.onTerminateWorker=M.onTerminateWorker||function(){return null},this.emitStdStreams=M.emitStdStreams||!1,M&&"maxWorkers"in M?(Ye(M.maxWorkers),this.maxWorkers=M.maxWorkers):this.maxWorkers=Math.max((W.cpus||4)-1,1),M&&"minWorkers"in M&&(M.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Le(M.minWorkers),this.minWorkers=M.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&N.ensureWorkerThreads()}ge.prototype.exec=function(O,M,ye){if(M&&!Array.isArray(M))throw new TypeError('Array expected as argument "params"');if(typeof O=="string"){var ke=z.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var lt=this.tasks,bt={method:O,params:M,resolver:ke,timeout:null,options:ye};lt.push(bt);var hr=ke.promise.timeout;return ke.promise.timeout=function(Xt){return lt.indexOf(bt)!==-1?(bt.timeout=Xt,ke.promise):hr.call(ke.promise,Xt)},this._next(),ke.promise}else{if(typeof O=="function")return this.exec("run",[String(O),M],ye);throw new TypeError('Function or string expected as argument "method"')}},ge.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var O=this;return this.exec("methods").then(function(M){var ye={};return M.forEach(function(ke){ye[ke]=function(){return O.exec(ke,Array.prototype.slice.call(arguments))}}),ye})},ge.prototype._next=function(){if(this.tasks.length>0){var O=this._getWorker();if(O){var M=this,ye=this.tasks.shift();if(ye.resolver.promise.pending){var ke=O.exec(ye.method,ye.params,ye.resolver,ye.options).then(M._boundNext).catch(function(){if(O.terminated)return M._removeWorker(O)}).then(function(){M._next()});typeof ye.timeout=="number"&&ke.timeout(ye.timeout)}else M._next()}}},ge.prototype._getWorker=function(){for(var O=this.workers,M=0;M<O.length;M++){var ye=O[M];if(ye.busy()===!1)return ye}return O.length<this.maxWorkers?(ye=this._createWorkerHandler(),O.push(ye),ye):null},ge.prototype._removeWorker=function(O){var M=this;return Ue.releasePort(O.debugPort),this._removeWorkerFromList(O),this._ensureMinWorkers(),new z(function(ye,ke){O.terminate(!1,function(lt){M.onTerminateWorker({forkArgs:O.forkArgs,forkOpts:O.forkOpts,workerThreadOpts:O.workerThreadOpts,script:O.script}),lt?ke(lt):ye(O)})})},ge.prototype._removeWorkerFromList=function(O){var M=this.workers.indexOf(O);M!==-1&&this.workers.splice(M,1)},ge.prototype.terminate=function(O,M){var ye=this;this.tasks.forEach(function(Ft){Ft.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ke=function(Xt){Ue.releasePort(Xt.debugPort),this._removeWorkerFromList(Xt)},lt=ke.bind(this),bt=[],hr=this.workers.slice();return hr.forEach(function(Ft){var Xt=Ft.terminateAndNotify(O,M).then(lt).always(function(){ye.onTerminateWorker({forkArgs:Ft.forkArgs,forkOpts:Ft.forkOpts,workerThreadOpts:Ft.workerThreadOpts,script:Ft.script})});bt.push(Xt)}),z.all(bt)},ge.prototype.stats=function(){var O=this.workers.length,M=this.workers.filter(function(ye){return ye.busy()}).length;return{totalWorkers:O,busyWorkers:M,idleWorkers:O-M,pendingTasks:this.tasks.length,activeTasks:M}},ge.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var O=this.workers.length;O<this.minWorkers;O++)this.workers.push(this._createWorkerHandler())},ge.prototype._createWorkerHandler=function(){var O=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new N(O.script||this.script,{forkArgs:O.forkArgs||this.forkArgs,forkOpts:O.forkOpts||this.forkOpts,workerOpts:O.workerOpts||this.workerOpts,workerThreadOpts:O.workerThreadOpts||this.workerThreadOpts,debugPort:Ue.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Ye(O){if(!Q(O)||!Te(O)||O<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Le(O){if(!Q(O)||!Te(O)||O<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function Q(O){return typeof O=="number"}function Te(O){return Math.round(O)==O}return I=ge,I}var we={},Re,Ve;function je(){if(Ve)return Re;Ve=1;function L(z,N){this.message=z,this.transfer=N}return Re=L,Re}var rt;function ct(){return rt||(rt=1,function(L){var z=je(),N="__workerpool-terminate__",W={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")W.on=function(Q,Te){addEventListener(Q,function(O){Te(O.data)})},W.send=function(Q,Te){Te?postMessage(Q,Te):postMessage(Q)};else if(typeof process<"u"){var ae;try{ae=mi}catch(Q){if(!(k(Q)==="object"&&Q!==null&&Q.code==="MODULE_NOT_FOUND"))throw Q}if(ae&&ae.parentPort!==null){var Ue=ae.parentPort;W.send=Ue.postMessage.bind(Ue),W.on=Ue.on.bind(Ue),W.exit=process.exit.bind(process)}else W.on=process.on.bind(process),W.send=function(Q){process.send(Q)},W.on("disconnect",function(){process.exit(1)}),W.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function ge(Q){return Object.getOwnPropertyNames(Q).reduce(function(Te,O){return Object.defineProperty(Te,O,{value:Q[O],enumerable:!0})},{})}function Ye(Q){return Q&&typeof Q.then=="function"&&typeof Q.catch=="function"}W.methods={},W.methods.run=function(Te,O){var M=new Function("return ("+Te+").apply(null, arguments);");return M.apply(M,O)},W.methods.methods=function(){return Object.keys(W.methods)},W.terminationHandler=void 0,W.cleanupAndExit=function(Q){var Te=function(){W.exit(Q)};if(!W.terminationHandler)return Te();var O=W.terminationHandler(Q);Ye(O)?O.then(Te,Te):Te()};var Le=null;W.on("message",function(Q){if(Q===N)return W.cleanupAndExit(0);try{var Te=W.methods[Q.method];if(Te){Le=Q.id;var O=Te.apply(Te,Q.params);Ye(O)?O.then(function(M){M instanceof z?W.send({id:Q.id,result:M.message,error:null},M.transfer):W.send({id:Q.id,result:M,error:null}),Le=null}).catch(function(M){W.send({id:Q.id,result:null,error:ge(M)}),Le=null}):(O instanceof z?W.send({id:Q.id,result:O.message,error:null},O.transfer):W.send({id:Q.id,result:O,error:null}),Le=null)}else throw new Error('Unknown method "'+Q.method+'"')}catch(M){W.send({id:Q.id,result:null,error:ge(M)})}}),W.register=function(Q,Te){if(Q)for(var O in Q)Q.hasOwnProperty(O)&&(W.methods[O]=Q[O]);Te&&(W.terminationHandler=Te.onTerminate),W.send("ready")},W.emit=function(Q){if(Le){if(Q instanceof z){W.send({id:Le,isEvent:!0,payload:Q.message},Q.transfer);return}W.send({id:Le,isEvent:!0,payload:Q})}},L.add=W.register,L.emit=W.emit}(we)),we}var et=n.platform,ot=n.isMainThread,K=n.cpus;function ee(L,z){var N=_e();return new N(L,z)}var fe=i.pool=ee;function $e(L,z){var N=ct();N.add(L,z)}var Ne=i.worker=$e;function Pe(L){var z=ct();z.emit(L)}var Fr=i.workerEmit=Pe,ti=h(),We=ti.Promise,It=i.Promise=We,$r=i.Transfer=je(),In=i.platform=et,Fn=i.isMainThread=ot,zn=i.cpus=K;t.Promise=It,t.Transfer=$r,t.cpus=zn,t.default=i,t.isMainThread=Fn,t.platform=In,t.pool=fe,t.worker=Ne,t.workerEmit=Fr,Object.defineProperty(t,"__esModule",{value:!0})})})(xa,xa.exports);var Sd=xa.exports,gt=class{constructor(r,e){l(this,"_value");l(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},Yl=class extends gt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},_d=class extends gt{constructor(){super(...arguments);l(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},$d=class extends gt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,t=this.parent.histogram.value.filter(s=>s.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},Cd=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},Ad=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Pd=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],kd=Cd(),ir={iron:{pixels:Pd,name:"IRON palette",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:Ad,name:"JET palette",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:kd,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Od=class extends gt{get availablePalettes(){return ir}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},ba,Ed=(ba=class{},l(ba,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),ba),at,Xe=(at=class extends Ed{static humanRangeDates(e,t){return e=at.inputToDate(e),t=at.inputToDate(t),e.getUTCDate()===t.getUTCDate()?at.humanDate(e):[at.humanDate(e),at.humanDate(t)].join(" - ")}static human(e){return`${at.humanDate(e)} ${at.humanTime(e,!0)} `}},l(at,"isoDate",e=>(e=at.inputToDate(e),ga(e,{representation:"date"}))),l(at,"isoTime",e=>(e=at.inputToDate(e),ga(e,{representation:"time"}))),l(at,"isoComplete",e=>(e=at.inputToDate(e),ga(e))),l(at,"humanTime",(e,t=!1)=>(e=at.inputToDate(e),Qe(e,t?"HH:mm:ss":"HH:mm"))),l(at,"humanDate",(e,t=!1)=>(e=at.inputToDate(e),Qe(e,t?"d. M.":"d. M. yyyy"))),at),Z=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},pn=class{constructor(r){l(this,"_layers",[]);l(this,"onLayers",new Z);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},tt=class{constructor(r,e,t){l(this,"onSerializableChange",new Z);l(this,"_selected",!1);l(this,"onSelected",new Z);l(this,"onDeselected",new Z);l(this,"onValues",new Z);l(this,"onMoveOrResize",new Z);l(this,"layerRoot");l(this,"points",new Map);l(this,"_top");l(this,"_left");l(this,"_width");l(this,"_height");l(this,"_min");l(this,"_max");l(this,"_avg");l(this,"_color","black");l(this,"onSetColor",new Z);l(this,"_initialColor");l(this,"onSetInitialColor",new Z);l(this,"activeColor","yellow");l(this,"inactiveColor","black");l(this,"ready",!1);l(this,"nameInitial");l(this,"_name");l(this,"onSetName",new Z);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{console.log("Serializovatelná změna"),this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},ql=class{constructor(r,e,t,i,s,n,a){l(this,"pxX");l(this,"_x");l(this,"onX",new Z);l(this,"pxY");l(this,"_y");l(this,"onY",new Z);l(this,"_color");l(this,"_active",!1);l(this,"_isHover",!1);l(this,"_isDragging",!1);l(this,"container");l(this,"innerElement");l(this,"onMouseEnter",new Z);l(this,"onMouseLeave",new Z);l(this,"onActivate",new Z);l(this,"onDeactivate",new Z);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},Dt,Dd=(Dt=class extends ql{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);l(this,"axisX");l(this,"axisY");l(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(Dt.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=Dt.sizePx(-.5),t.style.left=Dt.sizePx(-.5),t.style.width=Dt.sizePx(),t.style.height=Dt.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=Dt.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=Dt.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${Dt.sizePx(.5)} - 3px )`,t.style.left=`calc( ${Dt.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},l(Dt,"size",20),Dt),dr=class Xl extends tt{constructor(t,i,s,n,a){super(t,s,i);l(this,"center");l(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new Dd("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new Kl(this)),this._graph}static addAtPoint(t,i,s,n,a){return new Xl(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(f=>f.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=tt.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=tt.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const h=tt.serializedGetNumericalValueByKey(i,"top"),u=tt.serializedGetNumericalValueByKey(i,"left");h!==void 0&&(this.setTop(h),s=!0),u!==void 0&&(this.setLeft(u),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},Kl=class{constructor(r){l(this,"_min",!1);l(this,"_max",!1);l(this,"_avg",!1);l(this,"_value");l(this,"onGraphActivation",new Z);l(this,"onGraphData",new Z);l(this,"onAnalysisSelection",new Z);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof dr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof dr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof dr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof dr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},Ld=class extends ql{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Td=class extends Ld{constructor(){super(...arguments);l(this,"_pairX");l(this,"_pairY");l(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Cr=class extends tt{constructor(e,t,i,s,n,a,o){super(e,i,t);l(this,"wPx",(100/this.file.width/2).toString()+"%");l(this,"hPx",(100/this.file.height/2).toString()+"%");l(this,"tl");l(this,"tr");l(this,"bl");l(this,"br");l(this,"area");l(this,"_graph");let h=n,u=s;a!==void 0&&o!==void 0&&(h=n+a,u=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,h,3,1),this.bl=this.addPoint("bl",u,n,1,3),this.br=this.addPoint("br",u,h,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new Kl(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),u=Math.max(t,i)-o,f=a-n;return{top:n,left:o,width:u,height:f}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Td(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map($=>$.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=tt.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=tt.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=tt.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const h=tt.serializedGetStringValueByKey(t,"color");h===void 0||h!==this.initialColor&&this.setInitialColor(h);const u=tt.serializedGetNumericalValueByKey(t,"top"),f=tt.serializedGetNumericalValueByKey(t,"left"),g=tt.serializedGetNumericalValueByKey(t,"width"),b=tt.serializedGetNumericalValueByKey(t,"height");u!==void 0&&u!==this.top&&(this.setTop(u),i=!0),f!==void 0&&f!==this.left&&(this.setLeft(f),i=!0),g!==void 0&&g!==this.width&&(this.setWidth(g),i=!0),b!==void 0&&b!==this.height&&(this.setHeight(b),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},Zl=class{constructor(r,e,t,i,s){l(this,"pxX");l(this,"pxY");l(this,"element");l(this,"_top");l(this,"_width");l(this,"_left");l(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},rl=class extends Zl{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},il=class Bs extends Cr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Bs(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:h,left:u,width:f,height:g}=Bs.calculateDimensionsFromCorners(s,n,a,o),b=new Bs(e,t,i,h,u,f,g);return b.recalculateValues(),b}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new rl(this,e,t,e+i,t+s):new rl(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,h=0;for(let u=i;u<s;u++){const f=this.file.width*u;for(let g=e;g<=t;g++)if(this.isWithin(g,u)){const b=this.file.pixels[f+g];b<n&&(n=b),b>a&&(a=b),h+=b,o++}}return{min:n,max:a,avg:h/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},sl=class extends Zl{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},nl=class Hs extends Cr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new Hs(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:h,left:u,width:f,height:g}=Hs.calculateDimensionsFromCorners(s,n,a,o),b=new Hs(e,t,i,h,u,f,g);return b.recalculateValues(),b}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new sl(this,e,t,e+i,t+s):new sl(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,h=0;for(let u=i;u<s;u++){const f=this.file.width*u;for(let g=e;g<=t;g++){const b=this.file.pixels[f+g];b<n&&(n=b),b>a&&(a=b),h+=b,o++}}return{min:n,max:a,avg:h/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},Gs=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],Rd=class extends Map{constructor(e){super();l(this,"layers",[]);l(this,"onAdd",new Z);l(this,"onRemove",new Z);l(this,"onSelectionChange",new Z);l(this,"colors",Gs);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=nl.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const h=nl.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return h.ready=!0,this.addAnalysis(h,o),h}createEllipsisFrom(e,t){const i=il.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const h=il.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return h.ready=!0,this.addAnalysis(h,o),h}createPointAt(e,t){const i=dr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=dr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=Gs.filter(i=>!e.includes(i));return t.length>0?t[0]:Gs[0]}getNextName(e){return`${e} ${this.all.length}`}},Md=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},Ud=class extends gt{constructor(){super(...arguments);l(this,"layers",new Rd(this));l(this,"points",new Md(this));l(this,"listener");l(this,"bindedPointerMoveListener");l(this,"bindedPointerDownListener");l(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,h=this.parent.height,f=e.layerY/o;return{top:Math.round(h*f),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Id=class{constructor(r){l(this,"listenerKey","___listen-to-graphs___");l(this,"_graphs",new Map);l(this,"_output",{values:[[]],colors:[]});l(this,"onOutput",new Z);l(this,"onAddGraph",new Z);l(this,"onRemoveGraph",new Z);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:Qe(a,"m:ss:SSS")+" ",[e[1].key]:Qe(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},Fd=class extends gt{constructor(e){super(e,{values:[[]],colors:[]});l(this,"_hasActiveGraphs",!1);l(this,"onGraphsPresence",new Z);l(this,"listeners",new Id(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=ds({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=Hl(i)(e);Gl(i)(s)}},zd=class{constructor(r,e){l(this,"_analysis");l(this,"_serialized");l(this,"onSerialize",new Z);l(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},bi,Ql=(bi=class extends gt{constructor(){super(...arguments);l(this,"onSlotInit",new Z);l(this,"onSlotRemove",new Z);l(this,"onSlot1Assignement",new Z);l(this,"onSlot2Assignement",new Z);l(this,"onSlot3Assignement",new Z);l(this,"onSlot4Assignement",new Z);l(this,"onSlot5Assignement",new Z);l(this,"onSlot6Assignement",new Z);l(this,"onSlot7Assignement",new Z);l(this,"onSlot1Serialize",new Z);l(this,"onSlot2Serialize",new Z);l(this,"onSlot3Serialize",new Z);l(this,"onSlot4Serialize",new Z);l(this,"onSlot5Serialize",new Z);l(this,"onSlot6Serialize",new Z);l(this,"onSlot7Serialize",new Z)}getNextFreeSlotNumber(){for(let t=1;t<=bi.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new zd(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),h=this.getOnSerializeManager(t);return o&&o.call(a),h&&h.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(k=>k.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=tt.serializedGetNumericalValueByKey(s,"top"),h=tt.serializedGetNumericalValueByKey(s,"left");const u=tt.serializedGetStringValueByKey(s,"color");let f=tt.serializedGetNumericalValueByKey(s,"width"),g=tt.serializedGetNumericalValueByKey(s,"height");const b=tt.serializedSegmentsHasExact(s,"avg"),$=tt.serializedSegmentsHasExact(s,"min"),C=tt.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),h!==void 0&&(h<0&&(h=0),h>this.parent.width-1&&(h=this.parent.width-1));let A;if(a==="point"){if(o===void 0||h===void 0)return;A=this.parent.analysis.layers.placePointAt(n,o,h,u,!1)}else{if(o===void 0||h===void 0||f===void 0||g===void 0)return;f<0&&(f=0),f+h>this.parent.width-1&&(f=this.parent.width-h-1),g<0&&(g=0),g+o>this.parent.height-1&&(g=this.parent.height-o-1),A=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,h,f+h,g+o,u,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,h,f+h,g+o,u,!1)}if(A!==void 0){if(A instanceof dr?b&&A.graph.setAvgActivation(!0):A instanceof Cr&&(b&&A.graph.setAvgActivation(!0),$&&A.graph.setMinActivation(!0),C&&A.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const k=this.getNextFreeSlotNumber();k!==void 0&&this.assignSlot(k,A)}else i!==void 0&&this.assignSlot(i,A);return A}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},l(bi,"MAX_SLOTS",7),bi),jd=class extends gt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},Nd=class{constructor(r,e){l(this,"_currentFrame");l(this,"bufferSize",4);l(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const h=s[o];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Jl={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Wd=class extends gt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));l(this,"_playbackSpeed",1);l(this,"startTimestampRelative");l(this,"endTimestampRelative");l(this,"stepsByAbsolute",new Map);l(this,"stepsByRelative",new Map);l(this,"stepsByIndex",new Map);l(this,"relativeSteps",[]);l(this,"_currentStep");l(this,"isSequence");l(this,"_isPlaying",!1);l(this,"timer");l(this,"buffer");l(this,"callbackdPlaybackSpeed",new Z);l(this,"callbacksPlay",new Z);l(this,"callbacksPause",new Z);l(this,"callbacksStop",new Z);l(this,"callbacksEnd",new Z);l(this,"callbacksChangeFrame",new Z);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Nd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Jl[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),Qe(t,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(h=>h.relative<=e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(h=>h.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Bd=class extends gt{constructor(){super(...arguments);l(this,"stream");l(this,"recorder");l(this,"mimeType");l(this,"_isRecording",!1);l(this,"_mayStop",!0);l(this,"recordedChunks",[]);l(this,"callbackMayStop",new Z)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},fn=class{},dt,Hd=(dt=class{constructor(e,t){l(this,"_built",!1);l(this,"_hydrated",!1);l(this,"_hover",!1);l(this,"_canvasLayer");l(this,"_visibleLayer");l(this,"_cursorLayer");l(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(dt.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(dt.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(dt.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(dt.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(dt.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(dt.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(dt.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(dt.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},l(dt,"CLASS_BASE","thermalImageRoot"),l(dt,"CLASS_BUILT",dt.CLASS_BASE+"__built"),l(dt,"CLASS_HYDRATED",dt.CLASS_BASE+"__mounted"),l(dt,"CLASS_HOVER",dt.CLASS_BASE+"__hover"),dt),Gd=class{constructor(r){l(this,"_current");l(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new Z),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},Vd=class extends fn{constructor(e,t,i,s,n){super();l(this,"id");l(this,"horizontalLimit");l(this,"verticalLimit");l(this,"group");l(this,"thermalUrl");l(this,"visibleUrl");l(this,"fileName");l(this,"signature","unknown");l(this,"version",-1);l(this,"streamCount",-1);l(this,"fileDataType",-1);l(this,"unit",-1);l(this,"meta");l(this,"_dom");l(this,"timeline");l(this,"cursorValue");l(this,"analysis");l(this,"recording");l(this,"_mounted",!1);l(this,"_built",!1);l(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Gd(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new Hd(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}draw(){this.dom&&this.dom.canvasLayer&&this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const u=(i-s)/(n-s),f=Math.round(255*u);return this.group.registry.palette.currentPalette.pixels[f]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&(this.dom.canvasLayer.opacity=e)}},Yd=class{constructor(r){this.file=r}canvasAsPng(){var r,e;return(e=(r=this.file.dom)==null?void 0:r.canvasLayer)==null?void 0:e.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}},gn=class{constructor(r){l(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},ur=class Sa{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Sa.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Sa.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},qd=class extends gn{constructor(e,t){super(e);l(this,"container");l(this,"image");this._url=t,this.container=ur.createVisibleLayer(),this._url&&(this.image=ur.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Xd=class extends gn{constructor(e){super(e);l(this,"container");l(this,"canvas");l(this,"context");l(this,"_opacity",1);this.container=ur.createCanvasContainer(),this.canvas=ur.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=await this.pool.exec(async(i,s,n,a,o,h)=>{const f=new OffscreenCanvas(n,a).getContext("2d"),g=s-i;for(let C=0;C<=n;C++)for(let A=0;A<=a;A++){const k=C+A*n;let H=o[k];H<i&&(H=i),H>s&&(H=s);const V=(H-i)/g,te=Math.round(255*V),X=h[te];f.fillStyle=X,f.fillRect(C,A,1,1)}const b=f.getImageData(0,0,n,a);return await createImageBitmap(b)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(t,0,0)}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return;console.error(t)}}}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Kd=class extends gn{constructor(e){super(e);l(this,"layerRoot");l(this,"center");l(this,"axisX");l(this,"axisY");l(this,"label");l(this,"_show",!1);l(this,"_hover",!1);this.layerRoot=ur.createCursorLayerRoot(),this.center=ur.createCursorLayerCenter(),this.axisX=ur.createCursorLayerX(),this.axisY=ur.createCursorLayerY(),this.label=ur.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Zd=class extends gn{constructor(e){super(e);l(this,"container");this.container=ur.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},mn=class eh extends Vd{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);l(this,"slots");l(this,"_export");l(this,"filters",new pn(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new Yd(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Xd(this),visibleLayer:new qd(this,this.visibleUrl),cursorLayer:new Kd(this),listenerLayer:new Zd(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,h=Math.round(s.offsetX*o),u=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:h,y:u})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new jd(this,void 0),this.timeline=new Wd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Bd(this,!1),this.analysis=new Ud(this,[]),this.analysisData=new Fd(this),this.slots=new Ql(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}this.analysis.value.forEach(s=>s.recalculateValues())}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new eh(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),h=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,h),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=this.getAllApplicableFilters();this.reader.applyFilters(t);const i=await this.reader.baseInfo(),s=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const n=this.root;this.unmountFromDom(),this.mountToDom(n)}this.meta.set(i),this.setPixels(s.pixels)}},Qd=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof Cr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof Cr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof Cr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof Cr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:Xe.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof Cr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=ds({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t});console.log(i);const n=Hl(s)(i);Gl(s)(n)}},ue,Jd=(ue=class{constructor(e){l(this,"localGroup");l(this,"_exporting",!1);l(this,"onExportingStatusChange",new Z);l(this,"wrapper");l(this,"container");l(this,"header");l(this,"list");this.drive=e}get group(){return this.drive.parent}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=ue.FONT_SIZE_NORMAL,s="normal",n=ue.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e=ue.DEFAULT_PROPS.width,t=ue.DEFAULT_PROPS.backgroundColor){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=ue.FONT_SIZE_NORMAL,i.style.fontFamily=ue.FONT_FAMILY,i.style.color=ue.COLOR_BASE,i.style.backgroundColor=t,i}buildHeader(){var h,u;const e=document.createElement("div");e.style.padding=ue.GAP_BASE,e.style.border="1px lightgray solid";const t=this.createElementWithText("div",this.group.label,void 0,"bold");if(e.appendChild(t),this.group.description){const f=this.createElementWithText("div",this.group.description,ue.FONT_SIZE_SMALL,"normal",ue.COLOR_BASE);f.style.paddingTop=ue.GAP_SMALL,e.appendChild(f)}const i=this.group.files.value.sort((f,g)=>f.timestamp-g.timestamp),s=Xe.human(i[0].timestamp),n=Xe.human(i[i.length-1].timestamp),a=this.createElementWithText("div",`Contains ${this.group.files.value.length} files dated from ${s} to ${n}. Minimal temperature: ${(h=this.group.registry.minmax.value)==null?void 0:h.min.toFixed(3)} °C. Maximal temperature: ${(u=this.group.registry.minmax.value)==null?void 0:u.max.toFixed(3)} °C.`,ue.FONT_SIZE_SMALL,void 0,ue.COLOR_GRAY);a.style.paddingTop=ue.GAP_SMALL,e.appendChild(a);const o=this.createElementWithText("div",`Image exported at ${Xe.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,ue.FONT_SIZE_SMALL,void 0,ue.COLOR_GRAY);return o.style.paddingTop=ue.GAP_SMALL,e.appendChild(o),e}buildList(){const e=document.createElement("div");return e.style.boxSizing="border-box",e.style.width="100%",e.style.display="flex",e.style.flexWrap="wrap",e}buildInstance(e,t,i){const s=document.createElement("div");s.style.width=t.toString()+"%",s.style.padding=ue.GAP_SMALL,s.style.boxSizing="border-box";const n=document.createElement("div");s.appendChild(n);const a=this.createElementWithText("div",`${Xe.human(e.timeline.currentStep.absolute)}`,ue.FONT_SIZE_SMALL,"bold");if(n.appendChild(a),this.list&&(this.list.appendChild(s),e.mountToDom(n),e.draw(),i)){const o=this.group.files.value[0];if(o&&o.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const u=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(f=>{const g=this.createElementWithText("th",f,ue.FONT_SIZE_SMALL,void 0,ue.COLOR_GRAY);g.style.padding=ue.GAP_SMALL+"px",g.style.textAlign="left",u.appendChild(g)}),h.appendChild(u),n.appendChild(h),o.slots.forEveryExistingSlot((f,g)=>{const b=e.slots.createFromSerialized(f.serialized,g);if(b){const $=document.createElement("tr"),C=this.createElementWithText("td",f.analysis.name,ue.FONT_SIZE_SMALL,void 0,f.analysis.initialColor);C.style.borderTop=`1px solid ${ue.COLOR_LIGHT}`,C.style.padding=`${ue.GAP_SMALL}px 0px ${ue.GAP_SMALL} 0px`,$.appendChild(C);const A=(k,H)=>{const j=this.createElementWithText("td",H?H.toFixed(3)+" °C":"",ue.FONT_SIZE_SMALL,void 0);j.style.borderTop=`1px solid ${ue.COLOR_LIGHT}`,j.style.paddingTop=`${ue.GAP_SMALL}px`,j.style.paddingBottom=`${ue.GAP_SMALL}px`,$.appendChild(j)};f.analysis instanceof Cr?(A(f.analysis.initialColor,b.avg),A(f.analysis.initialColor,b.min),A(f.analysis.initialColor,b.max)):f.analysis instanceof dr&&(A(f.analysis.initialColor,b.avg),A(f.analysis.initialColor),A(f.analysis.initialColor)),h.appendChild($)}})}}}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width),this.header=this.buildHeader(),this.list=this.buildList(),this.container.appendChild(this.header),this.container.appendChild(this.list),this.wrapper.appendChild(this.container),document.body.prepend(this.wrapper)}clear(){this.localGroup&&(this.localGroup.files.forEveryInstance(e=>e.unmountFromDom()),this.localGroup.files.removeAllInstances()),this.wrapper&&document.body.removeChild(this.wrapper),delete this.wrapper,delete this.container,delete this.header,delete this.list,delete this.localGroup}async downloadPng(e){if(this._exporting===!0){console.warn(`The group ${this.group.label} is already exporting a PNG image!`);return}const t=this.getFinalParams(e);this.setExporting(!0),this.buildDom(t);const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(u=>u.thermalUrl);let h;o.forEach(u=>{h=n.batch.request(u,void 0,a,async()=>{})}),h.onResolve.set("temporary export listener",u=>{const f=100/t.columns;u.forEach(g=>{g instanceof mn&&this.buildInstance(g,f,t.showAnalysis)}),setTimeout(()=>{bd.toPng(this.container).then(g=>{const b=document.createElement("a");b.download=t.fileName,b.href=g,b.click(),this.clear(),this.setExporting(!1)})},2e3)})}getFinalParams(e){let t=e!=null&&e.fileName?e.fileName:`group__${this.group.label}__export`;return t.endsWith(".PNG")&&(t=t.replaceAll(".PNG",".png")),t.endsWith(".png")||(t=t+".png"),e===void 0?{...ue.DEFAULT_PROPS,fileName:t}:{...ue.DEFAULT_PROPS,...e,fileName:t}}},l(ue,"FONT_SIZE_NORMAL","16px"),l(ue,"FONT_SIZE_SMALL","12px"),l(ue,"COLOR_BASE","black"),l(ue,"COLOR_GRAY","gray"),l(ue,"COLOR_LIGHT","lightgray"),l(ue,"WIDTH","1600px"),l(ue,"FONT_FAMILY","sans-serif"),l(ue,"GAP_BASE","10px"),l(ue,"GAP_SMALL","5px"),l(ue,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),ue),Hr,ep=(Hr=class extends gt{constructor(){super(...arguments);l(this,"_currentPointer");l(this,"_csv");l(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){if(i===1)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(Hr.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(a===void 0&&n){const h=o.slots.createFromSerialized(n,i);h==null||h.setSelected()}else a!==void 0&&n?a.recieveSerialized(n):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(Hr.LISTENER_KEY),n.delete(Hr.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!0)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected(!0)})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[h,u]of s)if(u===void 0)n.slots.removeSlotAndAnalysis(h);else{const f=(a=n.slots.getSlot(h))==null?void 0:a.serialized,g=u.serialized;if(f!==g)if(n.slots.hasSlot(h))(o=n.slots.getSlot(h))==null||o.recieveSerialized(g);else{const b=n.slots.createFromSerialized(g,h);b==null||b.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Qd(this)),this._csv}get png(){return this._png||(this._png=new Jd(this)),this._png}},l(Hr,"LISTENER_KEY","__analysis__sync"),Hr),tp=class extends gt{constructor(){super(...arguments);l(this,"_map",new Map)}get map(){return this._map}validate(e){return e}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof mn?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},rp=class extends Yl{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},vn=class{constructor(r){l(this,"active",!1);this.group=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},th=class extends vn{constructor(){super(...arguments);l(this,"key","inspect");l(this,"name","Inspect temperatures");l(this,"description","Use mouse to inspect temperature values.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);l(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Fa=class extends vn{},ip=class extends Fa{constructor(){super(...arguments);l(this,"key","add-ellipsis");l(this,"name","Add an elyptical analysis");l(this,"description","Click and drag on the thermogram to add an elyptical analysis.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);l(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=Ql.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},sp=class extends Fa{constructor(){super(...arguments);l(this,"key","add-point");l(this,"name","Add a point analysis");l(this,"description","Click on the thermogram to add a point analysis.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);l(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},np=class extends Fa{constructor(){super(...arguments);l(this,"key","add-rect");l(this,"name","Add a rectangular analysis");l(this,"description","Click and drag on the thermogram to add a rectangular analysis.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);l(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},ap=class extends vn{constructor(){super(...arguments);l(this,"key","edit");l(this,"name","Edit analysis");l(this,"description","Drag corners of any selected analysis.");l(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(f=>f.isWithin(e,t)).map(f=>{const g=f.selected?"span":"s";return`<${g} style="color: ${f.initialColor};">
                    ${f.name}
                </${g}>`}),a=i.analysis.points.all.filter(f=>f.isHover).map(f=>`<span style="color: ${f.analysis.initialColor}">${f.analysis.name} - HANDLE: ${f.key}: X: ${f.x} Y: ${f.y}</span>`),o=n.length>0?n.join("<br />")+"<br />":"",h=a.length>0?a.join("<br />")+"<br />":"";return`${h.length>0?h:o}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},op=[th,sp,np,ip,ap],lp=r=>{const e=op.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},hp=class extends gt{constructor(e,t){super(e,t);l(this,"_tools",lp(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof vn?this.value=e:this.value=this.tools[e]}},cp=class extends fn{constructor(e,t,i,s){super();l(this,"hash",Math.random());l(this,"minmax",new rp(this,void 0));l(this,"tool",new hp(this,new th(this)));l(this,"files",new tp(this,[]));l(this,"cursorPosition",new _d(this,void 0));l(this,"analysisSync",new ep(this,!0));l(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});l(this,"filters",new pn(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}getInstances(){return this.files.value}},rh=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},hi=class ih extends rh{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new ih(e.url,e.code,e.message)}},sh=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},ci=class nh extends rh{constructor(t,i,s,n,a,o){super(n,a);l(this,"id",Math.random());l(this,"baseInfoCache");l(this,"fileName");l(this,"originalBuffer");l(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return new nh(this.service,this.buffer,this.parser,this.thermalUrl,this.visibleUrl,!0)}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=[...t.registry.manager.filters.getActiveFilters(),...t.registry.filters.getActiveFilters(),...t.filters.getActiveFilters()];await i.applyFilters(s);const n=await i.baseInfo(),a=await i.frameData(0),o=mn.fromService(t,i,n,a);return t.files.addFile(o),o}},up=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(E,D)=>{const B=E.getBigInt64(D,!0),T=62135596800000n,R=10000n,I=24n*60n*60n*1000n*R,ie=0x4000000000000000n,_e=0x8000000000000000n;let Re=B&0x3fffffffffffffffn;B&_e&&(Re>ie-I&&(Re-=ie),Re<0&&(Re+=I));const je=Re/R-T;return Number(je)},a=n(e,5),o=e.getUint8(15);let h=2;o===1&&(h=4);const u=57,f=t*i*h,g=u+f,b=r.slice(25),$=b.byteLength/g,C=E=>{const D=E*g,B=D+g,T=b.slice(D,B),R=new DataView(T),I=R.getFloat32(8,!0),ie=R.getFloat32(12,!0),_e=n(R,0),we=R.getFloat32(24,!0),Re=R.getFloat32(28,!0);return{timestamp:_e,min:I,max:ie,emissivity:we,reflectedKelvins:Re}},A=[];for(let E=0;E<$;E++){const D=C(E);A.push(D)}const k={emissivity:0,reflectedKelvins:0};let H=1/0,j=-1/0;const V=[];A.forEach(E=>{k.emissivity=k.emissivity+E.emissivity,k.reflectedKelvins=k.reflectedKelvins+E.reflectedKelvins,E.min<H&&(H=E.min),E.max>j&&(j=E.max),V.push(E.timestamp)});const te=V[0],X=[];V.forEach((E,D)=>{const B=V[D+1];let T=0;B===void 0&&(T=0),T=B-E;const R=E-te;X.push({absolute:E,relative:R,offset:isNaN(T)?0:T,index:D})});const pe=A[A.length-1].timestamp-A[0].timestamp,w=pe/$,_=1e3/w;return{width:t,height:i,timestamp:a,bytesize:s,frameCount:$,duration:pe,frameInterval:w,fps:_,timeline:X,min:H,max:j,averageEmissivity:k.emissivity/A.length,averageReflectedKelvins:k.reflectedKelvins/A.length}},dp=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,h=s*n*a,u=o+h,f=r.slice(25),g=e*u,b=g+u;return{array:f.slice(g,b),dataType:i}},pp=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,h=0x8000000000000000n;let f=i&0x3fffffffffffffffn;i&h&&(f>o-a&&(f-=o),f<0&&(f+=a));const b=f/n-s,$=Number(b),C=t.getFloat32(8,!0),A=t.getFloat32(12,!0),k=t.getFloat32(24,!0),H=t.getFloat32(28,!0),j=r.slice(57);let V=[];if(e===0){const te=new Uint16Array(j),X=Math.abs(C-A),pe=65535;te.forEach(w=>{const _=w/pe;V.push(C+X*_)})}else e===1&&(V=Array.from(new Float32Array(j)));return{timestamp:$,min:C,max:A,emissivity:k,reflectedKelvins:H,pixels:V}},fp=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(H,j)=>{const V=H.getBigInt64(j,!0),te=62135596800000n,X=10000n,pe=24n*60n*60n*1000n*X,w=0x4000000000000000n,_=0x8000000000000000n;let D=V&0x3fffffffffffffffn;V&_&&(D>w-pe&&(D-=w),D<0&&(D+=pe));const T=D/X-te;return Number(T)},o=i.getUint8(15);let h=2;o===1&&(h=4);const u=57,f=s*n*h,g=u+f,b=r.slice(25),$=b.byteLength/g,C={},A=H=>{const j=H*g,V=j+g,te=b.slice(j,V),X=new DataView(te),pe=a(X,0),w=X.getFloat32(8,!0),E=X.getFloat32(12,!0)-w,B=57+t*h*s+e*h;let T=0;if(o===1)T=X.getFloat32(B,!0);else if(o===0){const ie=X.getInt16(B,!0)/65535;T=w+E*ie}return{timestamp:pe,temperature:T}};let k=0;for(let H=0;H<$;H++){const j=A(H);k===0&&(k=j.timestamp),C[j.timestamp-k]=j.temperature}return C},gp=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),h=(V,te)=>{const X=V.getBigInt64(te,!0),pe=62135596800000n,w=10000n,_=24n*60n*60n*1000n*w,E=0x4000000000000000n,D=0x8000000000000000n;let T=X&0x3fffffffffffffffn;X&D&&(T>E-_&&(T-=E),T<0&&(T+=_));const I=T/w-pe;return Number(I)},u=n.getUint8(15);let f=2;u===1&&(f=4);const g=57,b=a*o*f,$=g+b,C=r.slice(25),A=C.byteLength/$,k={},H=V=>{const te=V*$,X=te+$,pe=C.slice(te,X),w=new DataView(pe),_=h(w,0),E=w.getFloat32(8,!0),B=w.getFloat32(12,!0)-E,T=57,R=e,I=e+i,ie=t,_e=t+s;let we=1/0,Re=-1/0,Ve=0,je=0;for(let ct=ie;ct<=_e;ct++){const et=ct*a;for(let ot=R;ot<=I;ot++){const K=T+(et+ot)*f;let ee=NaN;if(u===1)ee=w.getFloat32(K,!0);else{const Ne=w.getInt16(K,!0)/65535;ee=E+B*Ne}ee<we&&(we=ee),ee>Re&&(Re=ee),je+=ee,Ve++}}const rt={min:we,max:Re,avg:je/Ve,count:Ve};return{timestamp:_,result:rt}};let j=0;for(let V=0;V<A;V++){const te=H(V);j===0&&(j=te.timestamp),k[te.timestamp-j]=te.result}return k},mp=async r=>{let e=[];const t=async k=>{const H=new DataView(k.slice(0,25)),j=H.getUint8(15),V=H.getUint16(17,!0),te=H.getUint16(19,!0),X=j===1?4:2,pe=57,w=V*te*X,_=pe+w,E=k.slice(25),D=E.byteLength/_;let B=[];for(let T=0;T<D;T++){const I=T*_+57,ie=I+w,_e=E.slice(I,ie);j===0||j===1&&(B=B.concat(Array.from(new Float32Array(_e))))}return B};(await Promise.all(r.map(k=>t(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,H)=>k-H);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,h=a/o,u=[];let f=[...e];for(let k=0;k<o;k++){const H=s+h*k,j=H+h,V=f.findIndex(_=>_>j),X=f.slice(0,V-1).length,pe=X/e.length*100,w={from:H,to:j,count:X,percentage:pe};u.push(w),f=f.slice(V)}const g=[...u].sort((k,H)=>k.percentage-H.percentage),b=g[0].percentage,$=g[g.length-1].percentage,C=Math.abs(b-$);return u.map(k=>({...k,height:k.percentage/C*100}))},vp=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},yp=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),h=(te,X)=>{const pe=te.getBigInt64(X,!0),w=62135596800000n,_=10000n,E=24n*60n*60n*1000n*_,D=0x4000000000000000n,B=0x8000000000000000n;let R=pe&0x3fffffffffffffffn;pe&B&&(R>D-E&&(R-=D),R<0&&(R+=E));const ie=R/_-w;return Number(ie)},u=n.getUint8(15);let f=2;u===1&&(f=4);const g=57,b=a*o*f,$=g+b,C=r.slice(25),A=C.byteLength/$,k={},H=(te,X)=>{const pe=e+i/2,w=t+s/2,_=(te-pe)/(i/2),E=(X-w)/(s/2);return _*_+E*E<=1},j=te=>{const X=te*$,pe=X+$,w=C.slice(X,pe),_=new DataView(w),E=h(_,0),D=_.getFloat32(8,!0),T=_.getFloat32(12,!0)-D,R=57,I=e,ie=e+i,_e=t,we=t+s;let Re=1/0,Ve=-1/0,je=0,rt=0;for(let et=_e;et<=we;et++){const ot=et*a;for(let K=I;K<=ie;K++)if(H(K,et)){const ee=R+(ot+K)*f;let fe=NaN;if(u===1)fe=_.getFloat32(ee,!0);else{const Pe=_.getInt16(ee,!0)/65535;fe=D+T*Pe}fe<Re&&(Re=fe),fe>Ve&&(Ve=fe),rt+=fe,je++}}const ct={min:Re,max:Ve,avg:rt/je,count:je};return{timestamp:E,result:ct}};let V=0;for(let te=0;te<A;te++){const X=j(te);V===0&&(V=X.timestamp),k[X.timestamp-V]=X.result}return k},bp=[{extension:"lrc",minme:"application/octet-stream"}],wp={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:bp,is:vp,baseInfo:up,getFrameSubset:dp,frameData:pp,registryHistogram:mp,pointAnalysisData:fp,rectAnalysisData:gp,ellipsisAnalysisData:yp},ah=Object.freeze(wp),xp={LrcParser:ah},oh=Object.values(xp),lh=(r,e)=>{const t=oh.find(i=>i.is(r,e));if(t===void 0)throw new sh(2,e,`No parser found for '${e}'.`);return t},hh=oh.map(r=>r.extensions),Sp=hh.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),_p=class ch{constructor(e,t,i){l(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new ch(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new hi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=lh(i,this.thermalUrl);return this.pocessTheService(new ci(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof sh)return this.pocessTheService(hi.fromError(s));throw s}}pocessTheService(e){return e}},$p=class uh{constructor(e,t){l(this,"_hover",!1);l(this,"onMouseEnter",new Z);l(this,"onMouseLeave",new Z);l(this,"onDrop",new Z);l(this,"onProcessingEnd",new Z);l(this,"input");l(this,"hydrated",!1);l(this,"bindedEnterListener");l(this,"bindedLeaveListener");l(this,"bindedDropListener");l(this,"bindedInputChangeListener");l(this,"bindedDragoverListener");l(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new uh(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Sp,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},Cp=class{constructor(r){l(this,"requestsByUrl",new Map);l(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new za(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=lh(e,r.name);return new ci(this,e,t,r.name)}catch(e){return new hi(r.name,3,e.message)}}handleDropzone(r){return $p.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=_p.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},Ap=class extends gt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},Pp=class extends gt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},al=class _a{constructor(e,t){l(this,"_loading",!1);l(this,"onResolve",new Z);l(this,"timeout");l(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new _a(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new _a(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async h=>({result:await this.loader.registry.service.loadFile(h.thermalUrl,h.visibleUrl),callback:h.callback,group:h.group}))),a=await Promise.all(n.map(async h=>({result:h.result instanceof ci?await h.result.createInstance(h.group):await h.result,callback:h.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async h=>(await h.callback(h.result),h.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},kp=class{constructor(r){l(this,"onBatchComplete",new Z);l(this,"set",new Set);this.registry=r}get size(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=al.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=al.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.size===0&&this.registry.loading.markAsLoaded()}},Op=class extends gt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},Ep=class extends gt{constructor(){super(...arguments);l(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new cp(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Dp=class extends gt{constructor(){super(...arguments);l(this,"_resolution",150);l(this,"buffer",new Map);l(this,"bufferPixelsCount",0);l(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let h=t.reduce(($,C)=>{const A=C.reduce((k,H)=>[...k,...H],[]);return[...$,...A]},[]).sort(($,C)=>$-C);const u=n/a;let f=i+u;const g=new Map;let b=0;for(;f!==!1;){const $=h.findIndex(k=>k>f),C=h.slice(0,$).length;g.set(f-u/2,C),b+=C,h=h.slice($);const A=f+u;f=A<s?A:!1}return{result:g,resultCount:b}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(ah.registryHistogram,[t]);this.value=i}},Lp=class extends gt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},Tp=class extends Yl{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Rp=class extends fn{constructor(e,t,i){super();l(this,"hash",Math.random());l(this,"groups",new Ep(this,[]));l(this,"_batch");l(this,"onProcessingStart",new Z);l(this,"onProcessingEnd",new Z);l(this,"opacity",new Op(this,1));l(this,"minmax",new Tp(this,void 0));l(this,"loading",new Lp(this,!1));l(this,"range",new $d(this,void 0));l(this,"histogram",new Dp(this,[]));l(this,"palette");l(this,"filters",new pn(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof ci?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof ci&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}get batch(){return this._batch||(this._batch=new kp(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},za=class extends fn{constructor(e,t){super();l(this,"id");l(this,"service",new Cp(this));l(this,"registries",{});l(this,"palette",new Od(this,"jet"));l(this,"smooth",new Pp(this,!1));l(this,"graphSmooth",new Ap(this,!1));l(this,"pool");l(this,"filters",new pn(this));this.pool=e||Sd.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Rp(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}},Mp=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,Mt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Up(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mp(e,t,s),s};const ol=["ready","select"],Ip={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let _t=class extends xt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new Z,this.left=0,this.top=0,this.w=0,this.h=0}render(){return v`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Hc(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(ol,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Ip[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!ol.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await qo({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(qo).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};_t.styles=me`
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
  `;Mt([m({type:String,reflect:!0})],_t.prototype,"type",2);Mt([m({type:Array})],_t.prototype,"events",2);Mt([m({type:Object,hasChanged:()=>!0})],_t.prototype,"options",2);Mt([m({type:Array})],_t.prototype,"cols",2);Mt([m({type:Array})],_t.prototype,"rows",2);Mt([m({type:String})],_t.prototype,"data",2);Mt([m({type:Object})],_t.prototype,"view",2);Mt([m({type:Array})],_t.prototype,"selection",2);Mt([m({type:Object})],_t.prototype,"_data",2);Mt([m({type:Number,reflect:!0})],_t.prototype,"left",2);Mt([m({type:Number,reflect:!0})],_t.prototype,"top",2);Mt([m({type:Number,reflect:!0})],_t.prototype,"w",2);Mt([m({type:Number,reflect:!0})],_t.prototype,"h",2);_t=Mt([J("thermal-chart")],_t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fp=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ja={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yn=r=>(...e)=>({_$litDirective$:r,values:e});let Na=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Ki(s,e);return!0},Js=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},dh=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Np(e)}};function zp(r){this._$AN!==void 0?(Js(this),this._$AM=r,dh(this)):this._$AM=r}function jp(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Ki(i[n],!1),Js(i[n]);else i!=null&&(Ki(i,!1),Js(i));else Ki(this,r)}const Np=r=>{r.type==ja.CHILD&&(r._$AP??(r._$AP=jp),r._$AQ??(r._$AQ=zp))};class Wp extends Na{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),dh(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Ki(this,e),Js(this))}setValue(e){if(Fp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=()=>new Bp;class Bp{}const ma=new WeakMap,Ke=yn(class extends Wp{render(r){return F}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),F}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=ma.get(e);t===void 0&&(t=new WeakMap,ma.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=ma.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Hp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,ph=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hp(e,t,s),s};let Ji=class extends xt{constructor(){super(),this.dialogRef=He(),this.closeButtonRef=He(),this.invokerRef=He()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return v`
            <slot name="invoker" ${Ke(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Ke(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Ke(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Ji.shadowRootOptions={...xt.shadowRootOptions,mode:"open"};Ji.styles=me`

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

        
    
    `;ph([m({type:String,reflect:!0})],Ji.prototype,"label",2);Ji=ph([J("thermal-dialog")],Ji);var Vp=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,bn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yp(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vp(e,t,s),s};let kr=class extends xt{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return v`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};kr.VARIANTS=["slate","primary","foreground","background"];kr.shadowRootOptions={...xt.shadowRootOptions,mode:"open"};kr.styles=me`

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
    
    `;bn([m({type:String,converter:{fromAttribute:r=>kr.VARIANTS.includes(r)?r:"slate",toAttribute:r=>r}})],kr.prototype,"variant",2);bn([m({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],kr.prototype,"interactive",2);bn([m({type:String})],kr.prototype,"size",2);kr=bn([J("thermal-button")],kr);const Si=Math.min,Ar=Math.max,en=Math.round,Vr=r=>({x:r,y:r}),qp={left:"right",right:"left",bottom:"top",top:"bottom"},Xp={start:"end",end:"start"};function ll(r,e,t){return Ar(r,Si(e,t))}function ps(r,e){return typeof r=="function"?r(e):r}function Or(r){return r.split("-")[0]}function wn(r){return r.split("-")[1]}function fh(r){return r==="x"?"y":"x"}function gh(r){return r==="y"?"height":"width"}function fs(r){return["top","bottom"].includes(Or(r))?"y":"x"}function mh(r){return fh(fs(r))}function Kp(r,e,t){t===void 0&&(t=!1);const i=wn(r),s=mh(r),n=gh(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=tn(a)),[a,tn(a)]}function Zp(r){const e=tn(r);return[$a(r),e,$a(e)]}function $a(r){return r.replace(/start|end/g,e=>Xp[e])}function Qp(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function Jp(r,e,t,i){const s=wn(r);let n=Qp(Or(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map($a)))),n}function tn(r){return r.replace(/left|right|bottom|top/g,e=>qp[e])}function ef(r){return{top:0,right:0,bottom:0,left:0,...r}}function vh(r){return typeof r!="number"?ef(r):{top:r,right:r,bottom:r,left:r}}function _i(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function hl(r,e,t){let{reference:i,floating:s}=r;const n=fs(e),a=mh(e),o=gh(a),h=Or(e),u=n==="y",f=i.x+i.width/2-s.width/2,g=i.y+i.height/2-s.height/2,b=i[o]/2-s[o]/2;let $;switch(h){case"top":$={x:f,y:i.y-s.height};break;case"bottom":$={x:f,y:i.y+i.height};break;case"right":$={x:i.x+i.width,y:g};break;case"left":$={x:i.x-s.width,y:g};break;default:$={x:i.x,y:i.y}}switch(wn(e)){case"start":$[a]-=b*(t&&u?-1:1);break;case"end":$[a]+=b*(t&&u?-1:1);break}return $}const tf=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:f,y:g}=hl(u,i,h),b=i,$={},C=0;for(let A=0;A<o.length;A++){const{name:k,fn:H}=o[A],{x:j,y:V,data:te,reset:X}=await H({x:f,y:g,initialPlacement:i,placement:b,strategy:s,middlewareData:$,rects:u,platform:a,elements:{reference:r,floating:e}});f=j??f,g=V??g,$={...$,[k]:{...$[k],...te}},X&&C<=50&&(C++,typeof X=="object"&&(X.placement&&(b=X.placement),X.rects&&(u=X.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):X.rects),{x:f,y:g}=hl(u,b,h)),A=-1)}return{x:f,y:g,placement:b,strategy:s,middlewareData:$}};async function yh(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:h}=r,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:b=!1,padding:$=0}=ps(e,r),C=vh($),k=o[b?g==="floating"?"reference":"floating":g],H=_i(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(k)))==null||t?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:u,rootBoundary:f,strategy:h})),j=g==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,V=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),te=await(n.isElement==null?void 0:n.isElement(V))?await(n.getScale==null?void 0:n.getScale(V))||{x:1,y:1}:{x:1,y:1},X=_i(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:j,offsetParent:V,strategy:h}):j);return{top:(H.top-X.top+C.top)/te.y,bottom:(X.bottom-H.bottom+C.bottom)/te.y,left:(H.left-X.left+C.left)/te.x,right:(X.right-H.right+C.right)/te.x}}const rf=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:h,elements:u}=e,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:$="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:A=!0,...k}=ps(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const H=Or(s),j=Or(o)===o,V=await(h.isRTL==null?void 0:h.isRTL(u.floating)),te=b||(j||!A?[tn(o)]:Zp(o));!b&&C!=="none"&&te.push(...Jp(o,A,C,V));const X=[o,...te],pe=await yh(e,k),w=[];let _=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&w.push(pe[H]),g){const T=Kp(s,a,V);w.push(pe[T[0]],pe[T[1]])}if(_=[..._,{placement:s,overflows:w}],!w.every(T=>T<=0)){var E,D;const T=(((E=n.flip)==null?void 0:E.index)||0)+1,R=X[T];if(R)return{data:{index:T,overflows:_},reset:{placement:R}};let I=(D=_.filter(ie=>ie.overflows[0]<=0).sort((ie,_e)=>ie.overflows[1]-_e.overflows[1])[0])==null?void 0:D.placement;if(!I)switch($){case"bestFit":{var B;const ie=(B=_.map(_e=>[_e.placement,_e.overflows.filter(we=>we>0).reduce((we,Re)=>we+Re,0)]).sort((_e,we)=>_e[1]-we[1])[0])==null?void 0:B[0];ie&&(I=ie);break}case"initialPlacement":I=o;break}if(s!==I)return{reset:{placement:I}}}return{}}}};function bh(r){const e=Si(...r.map(n=>n.left)),t=Si(...r.map(n=>n.top)),i=Ar(...r.map(n=>n.right)),s=Ar(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function sf(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>_i(bh(s)))}const nf=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:h,y:u}=ps(r,e),f=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),g=sf(f),b=_i(bh(f)),$=vh(o);function C(){if(g.length===2&&g[0].left>g[1].right&&h!=null&&u!=null)return g.find(k=>h>k.left-$.left&&h<k.right+$.right&&u>k.top-$.top&&u<k.bottom+$.bottom)||b;if(g.length>=2){if(fs(t)==="y"){const D=g[0],B=g[g.length-1],T=Or(t)==="top",R=D.top,I=B.bottom,ie=T?D.left:B.left,_e=T?D.right:B.right,we=_e-ie,Re=I-R;return{top:R,bottom:I,left:ie,right:_e,width:we,height:Re,x:ie,y:R}}const k=Or(t)==="left",H=Ar(...g.map(D=>D.right)),j=Si(...g.map(D=>D.left)),V=g.filter(D=>k?D.left===j:D.right===H),te=V[0].top,X=V[V.length-1].bottom,pe=j,w=H,_=w-pe,E=X-te;return{top:te,bottom:X,left:pe,right:w,width:_,height:E,x:pe,y:te}}return b}const A=await n.getElementRects({reference:{getBoundingClientRect:C},floating:i.floating,strategy:a});return s.reference.x!==A.reference.x||s.reference.y!==A.reference.y||s.reference.width!==A.reference.width||s.reference.height!==A.reference.height?{reset:{rects:A}}:{}}}};async function af(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Or(t),o=wn(t),h=fs(t)==="y",u=["left","top"].includes(a)?-1:1,f=n&&h?-1:1,g=ps(e,r);let{mainAxis:b,crossAxis:$,alignmentAxis:C}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return o&&typeof C=="number"&&($=o==="end"?C*-1:C),h?{x:$*f,y:b*u}:{x:b*u,y:$*f}}const of=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,h=await af(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:a}}}}},lf=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:k=>{let{x:H,y:j}=k;return{x:H,y:j}}},...h}=ps(r,e),u={x:t,y:i},f=await yh(e,h),g=fs(Or(s)),b=fh(g);let $=u[b],C=u[g];if(n){const k=b==="y"?"top":"left",H=b==="y"?"bottom":"right",j=$+f[k],V=$-f[H];$=ll(j,$,V)}if(a){const k=g==="y"?"top":"left",H=g==="y"?"bottom":"right",j=C+f[k],V=C-f[H];C=ll(j,C,V)}const A=o.fn({...e,[b]:$,[g]:C});return{...A,data:{x:A.x-t,y:A.y-i}}}}};function Mi(r){return wh(r)?(r.nodeName||"").toLowerCase():"#document"}function jt(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function Qr(r){var e;return(e=(wh(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function wh(r){return r instanceof Node||r instanceof jt(r).Node}function pr(r){return r instanceof Element||r instanceof jt(r).Element}function fr(r){return r instanceof HTMLElement||r instanceof jt(r).HTMLElement}function cl(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof jt(r).ShadowRoot}function gs(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=sr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function hf(r){return["table","td","th"].includes(Mi(r))}function xn(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function Wa(r){const e=Ba(),t=sr(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function cf(r){let e=Yr(r);for(;fr(e)&&!$i(e);){if(xn(e))return null;if(Wa(e))return e;e=Yr(e)}return null}function Ba(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function $i(r){return["html","body","#document"].includes(Mi(r))}function sr(r){return jt(r).getComputedStyle(r)}function Sn(r){return pr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function Yr(r){if(Mi(r)==="html")return r;const e=r.assignedSlot||r.parentNode||cl(r)&&r.host||Qr(r);return cl(e)?e.host:e}function xh(r){const e=Yr(r);return $i(e)?r.ownerDocument?r.ownerDocument.body:r.body:fr(e)&&gs(e)?e:xh(e)}function Ca(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=xh(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=jt(s);return n?e.concat(a,a.visualViewport||[],gs(s)?s:[],a.frameElement&&t?Ca(a.frameElement):[]):e.concat(s,Ca(s,[],t))}function Sh(r){const e=sr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=fr(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=en(t)!==n||en(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function _h(r){return pr(r)?r:r.contextElement}function yi(r){const e=_h(r);if(!fr(e))return Vr(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=Sh(e);let a=(n?en(t.width):t.width)/i,o=(n?en(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const uf=Vr(0);function $h(r){const e=jt(r);return!Ba()||!e.visualViewport?uf:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function df(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==jt(r)?!1:e}function es(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=_h(r);let a=Vr(1);e&&(i?pr(i)&&(a=yi(i)):a=yi(r));const o=df(n,t,i)?$h(n):Vr(0);let h=(s.left+o.x)/a.x,u=(s.top+o.y)/a.y,f=s.width/a.x,g=s.height/a.y;if(n){const b=jt(n),$=i&&pr(i)?jt(i):i;let C=b,A=C.frameElement;for(;A&&i&&$!==C;){const k=yi(A),H=A.getBoundingClientRect(),j=sr(A),V=H.left+(A.clientLeft+parseFloat(j.paddingLeft))*k.x,te=H.top+(A.clientTop+parseFloat(j.paddingTop))*k.y;h*=k.x,u*=k.y,f*=k.x,g*=k.y,h+=V,u+=te,C=jt(A),A=C.frameElement}}return _i({width:f,height:g,x:h,y:u})}function pf(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=Qr(i),o=e?xn(e.floating):!1;if(i===a||o&&n)return t;let h={scrollLeft:0,scrollTop:0},u=Vr(1);const f=Vr(0),g=fr(i);if((g||!g&&!n)&&((Mi(i)!=="body"||gs(a))&&(h=Sn(i)),fr(i))){const b=es(i);u=yi(i),f.x=b.x+i.clientLeft,f.y=b.y+i.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-h.scrollLeft*u.x+f.x,y:t.y*u.y-h.scrollTop*u.y+f.y}}function ff(r){return Array.from(r.getClientRects())}function Ch(r){return es(Qr(r)).left+Sn(r).scrollLeft}function gf(r){const e=Qr(r),t=Sn(r),i=r.ownerDocument.body,s=Ar(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Ar(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+Ch(r);const o=-t.scrollTop;return sr(i).direction==="rtl"&&(a+=Ar(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function mf(r,e){const t=jt(r),i=Qr(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,h=0;if(s){n=s.width,a=s.height;const u=Ba();(!u||u&&e==="fixed")&&(o=s.offsetLeft,h=s.offsetTop)}return{width:n,height:a,x:o,y:h}}function vf(r,e){const t=es(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=fr(r)?yi(r):Vr(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,h=s*n.x,u=i*n.y;return{width:a,height:o,x:h,y:u}}function ul(r,e,t){let i;if(e==="viewport")i=mf(r,t);else if(e==="document")i=gf(Qr(r));else if(pr(e))i=vf(e,t);else{const s=$h(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return _i(i)}function Ah(r,e){const t=Yr(r);return t===e||!pr(t)||$i(t)?!1:sr(t).position==="fixed"||Ah(t,e)}function yf(r,e){const t=e.get(r);if(t)return t;let i=Ca(r,[],!1).filter(o=>pr(o)&&Mi(o)!=="body"),s=null;const n=sr(r).position==="fixed";let a=n?Yr(r):r;for(;pr(a)&&!$i(a);){const o=sr(a),h=Wa(a);!h&&o.position==="fixed"&&(s=null),(n?!h&&!s:!h&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||gs(a)&&!h&&Ah(r,a))?i=i.filter(f=>f!==a):s=o,a=Yr(a)}return e.set(r,i),i}function bf(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?xn(e)?[]:yf(e,this._c):[].concat(t),i],o=a[0],h=a.reduce((u,f)=>{const g=ul(e,f,s);return u.top=Ar(g.top,u.top),u.right=Si(g.right,u.right),u.bottom=Si(g.bottom,u.bottom),u.left=Ar(g.left,u.left),u},ul(e,o,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function wf(r){const{width:e,height:t}=Sh(r);return{width:e,height:t}}function xf(r,e,t){const i=fr(e),s=Qr(e),n=t==="fixed",a=es(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const h=Vr(0);if(i||!i&&!n)if((Mi(e)!=="body"||gs(s))&&(o=Sn(e)),i){const g=es(e,!0,n,e);h.x=g.x+e.clientLeft,h.y=g.y+e.clientTop}else s&&(h.x=Ch(s));const u=a.left+o.scrollLeft-h.x,f=a.top+o.scrollTop-h.y;return{x:u,y:f,width:a.width,height:a.height}}function va(r){return sr(r).position==="static"}function dl(r,e){return!fr(r)||sr(r).position==="fixed"?null:e?e(r):r.offsetParent}function Ph(r,e){const t=jt(r);if(xn(r))return t;if(!fr(r)){let s=Yr(r);for(;s&&!$i(s);){if(pr(s)&&!va(s))return s;s=Yr(s)}return t}let i=dl(r,e);for(;i&&hf(i)&&va(i);)i=dl(i,e);return i&&$i(i)&&va(i)&&!Wa(i)?t:i||cf(r)||t}const Sf=async function(r){const e=this.getOffsetParent||Ph,t=this.getDimensions,i=await t(r.floating);return{reference:xf(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function _f(r){return sr(r).direction==="rtl"}const $f={convertOffsetParentRelativeRectToViewportRelativeRect:pf,getDocumentElement:Qr,getClippingRect:bf,getOffsetParent:Ph,getElementRects:Sf,getClientRects:ff,getDimensions:wf,getScale:yi,isElement:pr,isRTL:_f},Cf=of,Af=lf,Pf=rf,kf=nf,Of=(r,e,t)=>{const i=new Map,s={platform:$f,...t},n={...s.platform,_c:i};return tf(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=yn(class extends Na{constructor(r){var e;if(super(r),r.type!==ja.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Gr}});var Ef=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,ms=(r,e,t,i)=>{for(var s=i>1?void 0:i?Df(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ef(e,t,s),s};let Er=class extends xt{constructor(){super(...arguments),this.dropdownRef=He(),this.invokerRef=He(),this.optionsRef=He(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Of(this.invokerRef.value,this.optionsRef.value,{middleware:[Cf(2),Pf(),kf(),Af()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return v`

            <div class="dropdown" ${Ke(this.dropdownRef)}>

                <thermal-button class="${Nt(r)}" ${Ke(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
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
                <div class="dropdown-options" ${Ke(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Er.shadowRootOptions={...xt.shadowRootOptions,mode:"open"};Er.styles=me`

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
    
    `;ms([Zr({slot:"option"})],Er.prototype,"_options",2);ms([m({type:String,reflect:!0})],Er.prototype,"open",2);ms([m({type:String,reflect:!0,attribute:!0}),x()],Er.prototype,"interactive",2);ms([m({type:String,reflect:!0})],Er.prototype,"variant",2);Er=ms([J("thermal-dropdown")],Er);var Lf=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,_n=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lf(e,t,s),s};let Ci=class extends xt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=He(),this.contentRef=He(),this.rulerContentRef=He()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return v`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ke(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ke(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ke(this.contentRef)}>

                    ${this.collapsed===!1?v`
                        <slot></slot>    
                    `:F}
                
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
            `:F}
        
        `}};Ci.styles=me`

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

    `;_n([x()],Ci.prototype,"collapsed",2);_n([x()],Ci.prototype,"lastContentWidth",2);_n([x()],Ci.prototype,"drawerRef",2);Ci=_n([J("thermal-bar")],Ci);var Rf=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rf(e,t,s),s};let Zt=class extends xt{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=He(),this.contentRef=He()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,o=n-175,h=a-0,u=this.contentRef.value.offsetHeight,f=4/3;let g=0,b=0;u<o?(console.log("priorita šířky"),g=h,b=g/f):(console.log("priorita výšky"),b=o,g=b*f),this.contentRef.value.setAttribute("style",`width: ${g}px !important; height: ${b}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return v`

        <div class="container ${this.dark?"dark":"normal"}" ${Ke(this.appRef)}>

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
                `:F}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?v`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Ke(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?v`<div class="credits">

                    ${this.recorded?v`<div>
                            <div class="credits-field">Recorded at:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:F}

                    ${this.author?v`<div>
                            <div class="credits-field">Author:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:F}

                    ${this.license?v`<div>
                            <div class="credits-field">License:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:F}

                </div>`:F}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};Zt.styles=me`

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
    
    `;wr([Zr({slot:"bar",flatten:!0})],Zt.prototype,"barElements",2);wr([Zr({slot:"pre",flatten:!0})],Zt.prototype,"preElements",2);wr([Zr({slot:"content",flatten:!0})],Zt.prototype,"contentElements",2);wr([m({type:String,reflect:!0})],Zt.prototype,"fullscreen",2);wr([m({type:String,reflect:!0,attribute:!0})],Zt.prototype,"showfullscreen",2);wr([m({type:String,reflect:!0,attribute:!0})],Zt.prototype,"dark",2);wr([m()],Zt.prototype,"author",2);wr([m()],Zt.prototype,"recorded",2);wr([m()],Zt.prototype,"license",2);Zt=wr([J("thermal-app")],Zt);var Uf=Object.defineProperty,If=Object.getOwnPropertyDescriptor,Ha=(r,e,t,i)=>{for(var s=i>1?void 0:i?If(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Uf(e,t,s),s};let ts=class extends xt{render(){return v`

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
        
        `}};ts.styles=me`
    
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

    `;Ha([m({type:String})],ts.prototype,"label",2);Ha([m({type:String})],ts.prototype,"hint",2);ts=Ha([J("thermal-field")],ts);var Ff=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,jf=(r,e,t,i)=>{for(var s=i>1?void 0:i?zf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ff(e,t,s),s};let Aa=class extends xt{render(){return v`
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
                        <p>version ${La}</p>
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
        `}};Aa.styles=me`

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
    
    `;Aa=jf([J("app-info-button")],Aa);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let kh=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pl=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new kh(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Nf{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wf=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class fl extends Nf{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const h=new Set;for(const[u,{consumerHost:f}]of this.subscriptions)h.has(u)||(h.add(u),f.dispatchEvent(new kh(this.context,u,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Wf(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new fl(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new fl(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ve({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new pl(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new pl(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let js;const Bf=new Uint8Array(16);function Hf(){if(!js&&(js=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!js))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return js(Bf)}const wt=[];for(let r=0;r<256;++r)wt.push((r+256).toString(16).slice(1));function Gf(r,e=0){return wt[r[e+0]]+wt[r[e+1]]+wt[r[e+2]]+wt[r[e+3]]+"-"+wt[r[e+4]]+wt[r[e+5]]+"-"+wt[r[e+6]]+wt[r[e+7]]+"-"+wt[r[e+8]]+wt[r[e+9]]+"-"+wt[r[e+10]]+wt[r[e+11]]+wt[r[e+12]]+wt[r[e+13]]+wt[r[e+14]]+wt[r[e+15]]}const Vf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),gl={randomUUID:Vf};function Yf(r,e,t){if(gl.randomUUID&&!e&&!r)return gl.randomUUID();r=r||{};const i=r.random||(r.rng||Hf)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Gf(i)}const mo=class mo extends xt{get UUID(){return this._UUID===void 0&&(this._UUID=Yf()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}};mo.shadowRootOptions={...xt.shadowRootOptions,mode:"open"};let pt=mo;const Ga="manager-instance",vs="manager-palette-context",Va="manager-smooth-context",$n="manager-graph-function-context",qf=new za;window.Thermal={managers:new Map};window.Thermal.managers.set("default",qf);const Cn=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new za(void 0,e);return window.Thermal.managers.set(r,t),t}};var Xf=Object.defineProperty,Kf=Object.getOwnPropertyDescriptor,Ui=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kf(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xf(e,t,s),s};let Dr=class extends pt{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:ir.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();const e={},t=Dr.sanitizeStringPalette(this.palette.key);e.palette=t;let i=Cn(this.slug,e);this.log("načítám instanci manažera",this.slug,"našel jsem toto:",i.id),this.manager=i}updated(e){super.updated(e),e.has("palette")&&(e.get("palette"),this.palette)}firstUpdated(e){super.firstUpdated(e),this.log("first updated manager provider"),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=Dr.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}static sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(ir).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:ir[e]}}render(){return v`<slot></slot>`}};Ui([le({context:Ga})],Dr.prototype,"manager",2);Ui([m({type:String,reflect:!0,attribute:!0})],Dr.prototype,"slug",2);Ui([le({context:vs}),m({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:ir[r]}),toAttribute:r=>r.key.toString()}})],Dr.prototype,"palette",2);Ui([le({context:Va}),m({type:String,reflect:!0,attribute:!0})],Dr.prototype,"smooth",2);Ui([le({context:$n}),m({type:String,reflect:!0,attribute:!0})],Dr.prototype,"graphSmooth",2);Dr=Ui([J("manager-provider")],Dr);var Zf=Object.defineProperty,Qf=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Zf(e,t,s),s};class Ii extends pt{connectedCallback(){super.connectedCallback(),this.manager}}Qf([ve({context:Ga,subscribe:!0}),x()],Ii.prototype,"manager");const Ya="registry-instance",qa="registry-opacity",An="registry-range-from",Pn="registry-range-to",Oh="registry-loading",Xa="registry-min",Ka="registry-max";var Jf=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,Rr=(r,e,t,i)=>{for(var s=i>1?void 0:i?eg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jf(e,t,s),s};let gr=class extends Ii{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}firstUpdated(e){super.firstUpdated(e),this.log("first updated"),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return v`<slot></slot>`}};Rr([m({type:String,reflect:!0,attribute:!0})],gr.prototype,"slug",2);Rr([le({context:Ya})],gr.prototype,"registry",2);Rr([le({context:qa}),m({type:Number,reflect:!0,attribute:!0})],gr.prototype,"opacity",2);Rr([le({context:Xa}),x()],gr.prototype,"min",2);Rr([le({context:Ka}),x()],gr.prototype,"max",2);Rr([le({context:An}),m({type:Number,reflect:!0,attribute:!0})],gr.prototype,"from",2);Rr([le({context:Pn}),m({type:Number,reflect:!0,attribute:!0})],gr.prototype,"to",2);Rr([le({context:Oh}),m({type:String,reflect:!0,attribute:!0})],gr.prototype,"loading",2);gr=Rr([J("registry-provider")],gr);var tg=Object.defineProperty,rg=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&tg(e,t,s),s};class Ut extends Ii{connectedCallback(){super.connectedCallback(),this.registry}}rg([ve({context:Ya,subscribe:!0})],Ut.prototype,"registry");const Za="group-instance",kn="tool-context",On="tools-context";var ig=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,ys=(r,e,t,i)=>{for(var s=i>1?void 0:i?sg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ig(e,t,s),s};let Ai=class extends Ut{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),console.log(this.registry),this.group=this.registry.groups.addOrGetGroup(this.slug),this.slug,this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,e=>{this.tool=e})}render(){return v`<slot></slot>`}};ys([m({type:String,attribute:!0,reflect:!0})],Ai.prototype,"slug",2);ys([le({context:Za})],Ai.prototype,"group",2);ys([le({context:kn})],Ai.prototype,"tool",2);ys([le({context:On})],Ai.prototype,"tools",2);Ai=ys([J("group-provider")],Ai);var ng=Object.defineProperty,ag=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&ng(e,t,s),s};class ui extends Ut{constructor(){super()}connectedCallback(){super.connectedCallback()}}ag([ve({context:Za,subscribe:!0})],ui.prototype,"group");const Qa="file",Eh="failure",Dh="file-loading",og="file-loaded",En="file-provider-element",Ja="file-ms-context",eo="file-cursor",to="file-cursor-setter",bs="playback",ro="duration",io="playing",Lh="playbackSpeed",Th="recording",Rh="mayStop",lg="analysislist",so="file-markers-context";var hg=Object.defineProperty,$t=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&hg(e,t,s),s};class mt extends ui{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Z,this.onSuccess=new Z,this.onFailure=new Z,this.onInstanceCreated=new Z}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("playbackspeed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}}$t([le({context:Qa}),x()],mt.prototype,"file");$t([le({context:Eh}),x()],mt.prototype,"failure");$t([le({context:Dh}),x()],mt.prototype,"loading");$t([le({context:og}),x()],mt.prototype,"ready");$t([le({context:io}),m({type:String,reflect:!0,attribute:!0})],mt.prototype,"playing");$t([le({context:ro}),x()],mt.prototype,"duration");$t([le({context:bs}),x()],mt.prototype,"currentFrame");$t([le({context:eo})],mt.prototype,"cursor");$t([le({context:to})],mt.prototype,"cursorSetter");$t([le({context:Ja}),m({type:Number,reflect:!0,attribute:!0})],mt.prototype,"ms");$t([le({context:Lh}),m({type:Number,reflect:!0,attribute:!0})],mt.prototype,"speed");$t([le({context:Th}),m({type:String,reflect:!0,attribute:!0})],mt.prototype,"recording");$t([le({context:Rh}),x()],mt.prototype,"mayStop");$t([Zr({slot:"mark",flatten:!0})],mt.prototype,"marksQueriedInternally");$t([le({context:so})],mt.prototype,"marksProvidedBelow");$t([le({context:lg})],mt.prototype,"analysis");var cg=Object.defineProperty,ug=Object.getOwnPropertyDescriptor,er=(r,e,t,i)=>{for(var s=i>1?void 0:i?ug(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cg(e,t,s),s};let Bt=class extends mt{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.log("loading sync"),this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof ci?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.log("loading async",this.thermal,this),this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof mn?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof hi&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}createInitialAnalysis(r,e,t){if(t!==void 0&&t.trim().length>0){const i=r.slots.createFromSerialized(t,e);i==null||i.setSelected(!1,!0)}}handleLoaded(r){r.slots.onSlot1Serialize.set(this.UUID,e=>this.analysis1=e),r.slots.onSlot2Serialize.set(this.UUID,e=>this.analysis2=e),r.slots.onSlot3Serialize.set(this.UUID,e=>this.analysis3=e),r.slots.onSlot4Serialize.set(this.UUID,e=>this.analysis4=e),r.slots.onSlot5Serialize.set(this.UUID,e=>this.analysis5=e),r.slots.onSlot6Serialize.set(this.UUID,e=>this.analysis6=e),r.slots.onSlot7Serialize.set(this.UUID,e=>this.analysis7=e),this.createInitialAnalysis(r,1,this.analysis1),this.createInitialAnalysis(r,2,this.analysis2),this.createInitialAnalysis(r,3,this.analysis3),this.createInitialAnalysis(r,4,this.analysis4),this.createInitialAnalysis(r,5,this.analysis5),this.createInitialAnalysis(r,6,this.analysis6),this.createInitialAnalysis(r,7,this.analysis7)}assignAppropriateField(r,e){r===1?this.analysis1=e:r===2?this.analysis2=e:r===3?this.analysis3=e:r===4?this.analysis4=e:r===5?this.analysis5=e:r===6?this.analysis6=e:r===7&&(this.analysis7=e)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}this.handleAnalysisUpdate(1,r),this.handleAnalysisUpdate(2,r),this.handleAnalysisUpdate(3,r),this.handleAnalysisUpdate(4,r),this.handleAnalysisUpdate(5,r),this.handleAnalysisUpdate(6,r),this.handleAnalysisUpdate(7,r)}handleAnalysisUpdate(r,e){const t=`analysis${r}`;if(e.has(t)){const i=e.get(t),s=this[t];if(this.file){const n=this.file.slots.getSlot(r);if(n===void 0&&s&&s.trim().length>0&&(!i||(i==null?void 0:i.trim().length)>0)){const a=this.file.slots.createFromSerialized(s,r);a==null||a.setSelected(!1,!0)}else n!==void 0&&i&&(!s||(s==null?void 0:s.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(r):n&&s&&(n==null||n.recieveSerialized(s))}}}render(){return v`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};er([le({context:En})],Bt.prototype,"providedSelf",2);er([m({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Bt.prototype,"batch",2);er([m({type:String,attribute:!0,reflect:!0})],Bt.prototype,"thermal",2);er([m({type:String,attribute:!0,reflect:!0})],Bt.prototype,"visible",2);er([m({type:String,reflect:!0,attribute:!0})],Bt.prototype,"analysis1",2);er([m({type:String,reflect:!0,attribute:!0})],Bt.prototype,"analysis2",2);er([m({type:String,reflect:!0,attribute:!0})],Bt.prototype,"analysis3",2);er([m({type:String,reflect:!0,attribute:!0})],Bt.prototype,"analysis4",2);er([m({type:String,reflect:!0,attribute:!0})],Bt.prototype,"analysis5",2);er([m({type:String,reflect:!0,attribute:!0})],Bt.prototype,"analysis6",2);er([m({type:String,reflect:!0,attribute:!0})],Bt.prototype,"analysis7",2);Bt=er([J("file-provider")],Bt);var dg=Object.defineProperty,pg=Object.getOwnPropertyDescriptor,Fi=(r,e,t,i)=>{for(var s=i>1?void 0:i?pg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dg(e,t,s),s};let qr=class extends mt{constructor(){super(...arguments),this.providedSelf=this,this.container=He(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof ci){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof hi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return v`

                    <div class="container">
                        <div ${Ke(this.container)} class="${Nt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${hh.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return v`
            ${this.ready?v`<slot></slot>`:F}
            <slot name="mark"></slot>
        `}};qr.styles=me`

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
    
    `;Fi([le({context:En})],qr.prototype,"providedSelf",2);Fi([x()],qr.prototype,"container",2);Fi([x()],qr.prototype,"ready",2);Fi([x()],qr.prototype,"hover",2);Fi([x()],qr.prototype,"listener",2);qr=Fi([J("file-dropin")],qr);var fg=Object.defineProperty,gg=Object.getOwnPropertyDescriptor,no=(r,e,t,i)=>{for(var s=i>1?void 0:i?gg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fg(e,t,s),s};let rs=class extends ui{constructor(){super(...arguments),this.container=He(),this.hover=!1}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const r={dropin:!0,hover:this.hover};return v`

            <div class="container">
            
                <div ${Ke(this.container)} class="${Nt(r)}"></div>

            </div>
        
        `}};rs.styles=me`

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
    
    `;no([x()],rs.prototype,"container",2);no([x()],rs.prototype,"hover",2);rs=no([J("group-dropin")],rs);var mg=Object.defineProperty,vg=Object.getOwnPropertyDescriptor,zi=(r,e,t,i)=>{for(var s=i>1?void 0:i?vg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mg(e,t,s),s};let Lr=class extends pt{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:ir.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();const r={},e=Lr.sanitizeStringPalette(this.palette.key);r.palette=e;let t=Cn(this.slug,r);this.manager=t}updated(r){super.updated(r),r.has("palette")&&(r.get("palette"),this.palette)}firstUpdated(r){super.firstUpdated(r),this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)}),this.manager.smooth.addListener(this.UUIDManagerListeners,e=>{this.smooth=e}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,e=>{this.graphSmooth=e})}attributeChangedCallback(r,e,t){if(super.attributeChangedCallback(r,e,t),r==="palette"&&this.manager){const i=Lr.sanitizeStringPalette(t);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(r){let e=!0;return r==null?e=!1:Object.keys(ir).includes(r)||(e=!1),e?r:"jet"}setPalette(r){this.palette={key:r,data:ir[r]}}render(){return v`<slot></slot>`}};zi([le({context:Ga})],Lr.prototype,"manager",2);zi([m({type:String})],Lr.prototype,"slug",2);zi([le({context:vs}),m({type:String,converter:{fromAttribute:r=>({key:r,data:ir[r]}),toAttribute:r=>r.key.toString()}})],Lr.prototype,"palette",2);zi([le({context:Va}),m({type:String})],Lr.prototype,"smooth",2);zi([le({context:$n}),m({type:String})],Lr.prototype,"graphSmooth",2);Lr=zi([J("manager-mirror")],Lr);var yg=Object.defineProperty,bg=Object.getOwnPropertyDescriptor,Mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?bg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yg(e,t,s),s};let mr=class extends Ii{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let r=this.manager.addOrGetRegistry(this.slug);this.registry=r,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}firstUpdated(r){super.firstUpdated(r),this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e})}updated(r){if(super.updated(r),(r.has("from")||r.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),r.has("opacity")){const e=Math.min(1,Math.max(0,this.opacity));e!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(e)}}render(){return v`<slot></slot>`}};Mr([m({type:String,reflect:!0,attribute:!0})],mr.prototype,"slug",2);Mr([le({context:Ya})],mr.prototype,"registry",2);Mr([le({context:qa}),m({type:Number,reflect:!0,attribute:!0})],mr.prototype,"opacity",2);Mr([le({context:Xa}),x()],mr.prototype,"min",2);Mr([le({context:Ka}),x()],mr.prototype,"max",2);Mr([le({context:An}),m({type:Number})],mr.prototype,"from",2);Mr([le({context:Pn}),m({type:Number})],mr.prototype,"to",2);Mr([le({context:Oh}),m({type:String})],mr.prototype,"loading",2);mr=Mr([J("registry-mirror")],mr);var wg=Object.defineProperty,xg=Object.getOwnPropertyDescriptor,ws=(r,e,t,i)=>{for(var s=i>1?void 0:i?xg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wg(e,t,s),s};let Pi=class extends Ut{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,r=>{this.tool=r})}render(){return v`<slot></slot>`}};ws([m({type:String})],Pi.prototype,"slug",2);ws([le({context:Za})],Pi.prototype,"group",2);ws([le({context:kn})],Pi.prototype,"tool",2);ws([le({context:On})],Pi.prototype,"tools",2);Pi=ws([J("group-mirror")],Pi);var Sg=Object.defineProperty,_g=Object.getOwnPropertyDescriptor,Vt=(r,e,t,i)=>{for(var s=i>1?void 0:i?_g(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sg(e,t,s),s};let Lt=class extends mt{constructor(){super(...arguments),this.providedSelf=this}createInitialAnalysis(r,e,t){if(t!==void 0&&t.trim().length>0){const i=r.slots.createFromSerialized(t,e);i==null||i.setSelected(!1,!0)}}handleLoaded(r){r.slots.onSlot1Serialize.set(this.UUID,e=>this.analysis1=e),r.slots.onSlot2Serialize.set(this.UUID,e=>this.analysis2=e),r.slots.onSlot3Serialize.set(this.UUID,e=>this.analysis3=e),r.slots.onSlot4Serialize.set(this.UUID,e=>this.analysis4=e),r.slots.onSlot5Serialize.set(this.UUID,e=>this.analysis5=e),r.slots.onSlot6Serialize.set(this.UUID,e=>this.analysis6=e),r.slots.onSlot7Serialize.set(this.UUID,e=>this.analysis7=e),this.createInitialAnalysis(r,1,this.analysis1),this.createInitialAnalysis(r,2,this.analysis2),this.createInitialAnalysis(r,3,this.analysis3),this.createInitialAnalysis(r,4,this.analysis4),this.createInitialAnalysis(r,5,this.analysis5),this.createInitialAnalysis(r,6,this.analysis6),this.createInitialAnalysis(r,7,this.analysis7)}assignAppropriateField(r,e){r===1?this.analysis1=e:r===2?this.analysis2=e:r===3?this.analysis3=e:r===4?this.analysis4=e:r===5?this.analysis5=e:r===6?this.analysis6=e:r===7&&(this.analysis7=e)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.file}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}this.handleAnalysisUpdate(1,r),this.handleAnalysisUpdate(2,r),this.handleAnalysisUpdate(3,r),this.handleAnalysisUpdate(4,r),this.handleAnalysisUpdate(5,r),this.handleAnalysisUpdate(6,r),this.handleAnalysisUpdate(7,r),r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}handleAnalysisUpdate(r,e){const t=`analysis${r}`;if(e.has(t)){const i=e.get(t),s=this[t];if(this.file){const n=this.file.slots.getSlot(r);if(n===void 0&&s&&s.trim().length>0&&(!i||(i==null?void 0:i.trim().length)>0)){const a=this.file.slots.createFromSerialized(s,r);a==null||a.setSelected(!1,!0)}else n!==void 0&&i&&(!s||(s==null?void 0:s.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(r):n&&s&&(n==null||n.recieveSerialized(s))}}}render(){return v`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};Vt([le({context:En})],Lt.prototype,"providedSelf",2);Vt([le({context:Qa}),m()],Lt.prototype,"file",2);Vt([m({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Lt.prototype,"batch",2);Vt([m({type:String})],Lt.prototype,"thermal",2);Vt([m({type:String})],Lt.prototype,"visible",2);Vt([m({type:String})],Lt.prototype,"analysis1",2);Vt([m({type:String})],Lt.prototype,"analysis2",2);Vt([m({type:String})],Lt.prototype,"analysis3",2);Vt([m({type:String})],Lt.prototype,"analysis4",2);Vt([m({type:String})],Lt.prototype,"analysis5",2);Vt([m({type:String})],Lt.prototype,"analysis6",2);Vt([m({type:String})],Lt.prototype,"analysis7",2);Lt=Vt([J("file-mirror")],Lt);var $g=Object.defineProperty,Cg=Object.getOwnPropertyDescriptor,Mh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$g(e,t,s),s};let rn=class extends Ut{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return v`

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

                ${Object.entries(ir).map(([r,e])=>v`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};rn.styles=me`

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

    `;Mh([ve({context:vs,subscribe:!0})],rn.prototype,"value",2);rn=Mh([J("registry-palette-dropdown")],rn);var Ag=Object.defineProperty,Pg=Object.getOwnPropertyDescriptor,Uh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ag(e,t,s),s};let sn=class extends Ut{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return v`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${r.name}</span>
            </div>
        
        `}render(){return v`
            <div class="container">
                ${Object.entries(ir).map(([r,e])=>v`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};sn.styles=me`

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

    `;Uh([ve({context:vs,subscribe:!0}),x()],sn.prototype,"value",2);sn=Uh([J("registry-palette-buttons")],sn);var kg=Object.defineProperty,Og=Object.getOwnPropertyDescriptor,Ih=(r,e,t,i)=>{for(var s=i>1?void 0:i?Og(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kg(e,t,s),s};let nn=class extends Ii{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.smooth.setSmooth(!1)}
            >Pixelated</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.smooth.setSmooth(!0)}
            >Smooth</thermal-button>
        `}};nn.styles=me`
    
        :host {}

    `;Ih([ve({context:Va,subscribe:!0})],nn.prototype,"smooth",2);nn=Ih([J("manager-smooth-switch")],nn);var Eg=Object.defineProperty,Dg=Object.getOwnPropertyDescriptor,Fh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Eg(e,t,s),s};let an=class extends Ii{connectedCallback(){super.connectedCallback()}render(){return v`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
            >Straight lines</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
            >Smooth lines</thermal-button>
        `}};an.styles=me`
    
        :host {}

    `;Fh([ve({context:$n,subscribe:!0})],an.prototype,"smooth",2);an=Fh([J("manager-graph-smooth-switch")],an);var Lg=Object.defineProperty,Tg=Object.getOwnPropertyDescriptor,zh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lg(e,t,s),s};let on=class extends Ut{connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return v`
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
        `}};on.styles=me`

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
    
    `;zh([ve({context:qa,subscribe:!0})],on.prototype,"value",2);on=zh([J("registry-opacity-slider")],on);var Rg=Object.defineProperty,Mg=Object.getOwnPropertyDescriptor,Ug=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rg(e,t,s),s};let ml=class extends Ut{doAction(){this.registry.range.applyAuto()}render(){return v`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};ml=Ug([J("registry-range-auto-button")],ml);var Ig=Object.defineProperty,Fg=Object.getOwnPropertyDescriptor,zg=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ig(e,t,s),s};let vl=class extends Ut{doAction(){this.registry.range.applyMinmax()}render(){return v`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};vl=zg([J("registry-range-full-button")],vl);var jg=Object.defineProperty,Ng=Object.getOwnPropertyDescriptor,Dn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ng(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jg(e,t,s),s};let vr=class extends Ut{constructor(){super(...arguments),this.ticksRef=He(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/vr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){return v`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Ke(this.ticksRef)}>

                    ${this.ticks.map(r=>v`
                            <div class="tick" >
                                <div class="tick-value">
                                ${r.value.toFixed(vr.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};vr.TICK_WIDTH=40;vr.TICK_FIXED=2;vr.styles=me`

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


    `;Dn([m({type:String,reflect:!0})],vr.prototype,"placement",2);Dn([x()],vr.prototype,"minmax",2);Dn([x()],vr.prototype,"ticks",2);vr=Dn([J("registry-ticks-bar")],vr);var Wg=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,xs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wg(e,t,s),s};let ki=class extends Ut{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return v`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return v`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};xs([x()],ki.prototype,"minmax",2);xs([x()],ki.prototype,"range",2);xs([x()],ki.prototype,"opacity",2);xs([x()],ki.prototype,"palette",2);ki=xs([J("registry-log")],ki);(()=>{var r=Object.defineProperty,e=Math.pow,t=(c,p,S)=>p in c?r(c,p,{enumerable:!0,configurable:!0,writable:!0,value:S}):c[p]=S,i=(c,p,S)=>(t(c,typeof p!="symbol"?p+"":p,S),S),s=(c,p)=>` ${p&&p.length>0?p.map(S=>`<link rel="stylesheet" href="${S}" />`).join(""):""} <style> ${c} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",h="pointers-max-distance",u="range-dragging",f="data",g="min",b="max",$="step",C="round",A="type",k="theme",H="rtl",j="btt",V="disabled",te="keyboard-disabled",X="mousewheel-disabled",pe="slider-width",w="slider-height",_="slider-radius",E="slider-bg",D="slider-bg-hover",B="slider-bg-fill",T="pointer-width",R="pointer-height",I="pointer-radius",ie="pointer-bg",_e="pointer-bg-hover",we="pointer-bg-focus",Re="pointer-shadow",Ve="pointer-shadow-hover",je="pointer-shadow-focus",rt="pointer-border",ct="pointer-border-hover",et="pointer-border-focus",ot="animate-onclick",K="css-links",ee="vertical",fe="horizontal",$e=(c,p,S,y,G)=>{let oe=p-c;return oe===0?S:(y-S)*(G-c)/oe+S},Ne=c=>!isNaN(parseFloat(c))&&isFinite(c),Pe=(c,p)=>Ne(c)?Number(c):p,Fr=(c,p)=>p===0?0:Math.round(c/p)*p,ti=(c,p=1/0)=>{if(p===1/0)return c;let S=e(10,p);return Math.round(c*S)/S},We=c=>c==null?!1:typeof c=="boolean"?c:c.trim().toLowerCase()==="true",It=(c,p)=>{c.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:p}}))},$r=(c,p)=>{c.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:p}}))},In=(c,p)=>{c.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:p}}))},Fn=(c,p)=>{c.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:p}}))},zn=(c,p)=>{if(!p||p.length<=0)return;let S=p.map(G=>Ne(G)?Pe(G,G):G),y={values:S||[]};y.value=S[0],y.value0=S[0],y.value1=S[0];for(let G=1;G<S.length;G++)y[`value${G+1}`]=S[G];c.dispatchEvent(new CustomEvent("change",{detail:y}))},L=(c,p,S)=>{let y=0,G,oe,Se,Y,q=!1,Ce=(ce,qe,yt,ut,it,st)=>{let kt=y;yt!==void 0&&ce>yt&&(ce=yt),qe!==void 0&&ce<qe&&(ce=qe),y=ce;let Ot=y;return(ut===ee&&st||ut===fe&&it)&&(Ot=100-Ot),ut===ee?p.style.top=`${Ot}%`:p.style.left=`${Ot}%`,kt!==y},Ee=ce=>ce===p||p.contains(ce),se=(ce,qe,yt,ut)=>{G=ce,oe=qe,Se=yt,Y=ut},ze=ce=>{q=ce,p.classList.toggle("disabled",q),q?p.setAttribute("aria-disabled","true"):p.hasAttribute("aria-disabled")&&p.removeAttribute("aria-disabled")},Kt=(ce,qe)=>{qe==null?p.removeAttribute(ce):p.setAttribute(ce,qe)},St=ce=>p.getAttribute(ce),he=ce=>{if(!q){switch(ce.key){case"ArrowLeft":{ce.preventDefault(),typeof G=="function"&&G(S);break}case"ArrowRight":{ce.preventDefault(),typeof oe=="function"&&oe(S);break}case"ArrowUp":{ce.preventDefault(),typeof Se=="function"&&Se(S);break}case"ArrowDown":{ce.preventDefault(),typeof Y=="function"&&Y(S);break}}Fn(c,ce)}},Ae=()=>{q||It(c,p)};return p.className=`pointer pointer-${S}`,p.addEventListener("keydown",he),p.addEventListener("click",Ae),{$pointer:p,get percent(){return y},get disabled(){return q},set disabled(ce){ze(ce)},updatePosition:Ce,isClicked:Ee,setCallbacks:se,setAttr:Kt,getAttr:St,destroy:()=>{p.removeEventListener("keydown",he),p.removeEventListener("click",Ae),p.remove()}}},z=c=>{if(c==null)return;if(Array.isArray(c))return c;if(c.trim()==="")return;let p=c.split(","),S=[],y=!0;for(let G=0;G<p.length;G++){let oe=p[G].trim();oe!==""&&(S.push(oe),Ne(oe)||(y=!1))}return y?S.map(G=>Number(G)):S},N=(c,p)=>p?p.findIndex(S=>S===c||S.toString().trim()===c.toString().trim()):-1,W=c=>({updatePosition:(p,S,y,G)=>{if(S.length<=0)return;let oe=S.length===1,Se=S[0],Y=S[S.length-1];p===ee?(c.style.removeProperty("width"),c.style.removeProperty("right"),c.style.removeProperty("left"),oe?c.style.height=`${Se}%`:c.style.height=`${Math.abs(Se-Y)}%`,G?(c.style.bottom="0%",oe?c.style.top="auto":c.style.top=`${Math.min(100-Y,100-Se)}%`):(c.style.bottom="auto",oe?c.style.top="0%":c.style.top=`${Math.min(Se,Y)}%`)):(c.style.removeProperty("height"),c.style.removeProperty("top"),c.style.removeProperty("bottom"),oe?c.style.width=`${Se}%`:c.style.width=`${Math.abs(Se-Y)}%`,y?(c.style.right="0%",oe?c.style.left="auto":c.style.left=`${Math.min(100-Y,100-Se)}%`):(c.style.right="auto",oe?c.style.left="0%":c.style.left=`${Math.min(Se,Y)}%`))}}),ae="--animate-onclick",Ue="--width",ge="--height",Ye="--panel-bg-border-radius",Le="--panel-bg",Q="--panel-bg-hover",Te="--panel-bg-fill",O="--pointer-width",M="--pointer-height",ye="--pointer-border-radius",ke="--pointer-bg",lt="--pointer-bg-hover",bt="--pointer-bg-focus",hr="--pointer-shadow",Ft="--pointer-shadow-hover",Xt="--pointer-shadow-focus",zr="--pointer-border",ne="--pointer-border-hover",xe="--pointer-border-focus",U=(c,p,S)=>{let y=new Map;for(let G of c.attributes){let oe=G.nodeName.trim().toLowerCase();if(!p.test(oe))continue;let Se=oe.replace(/\D/g,"").trim(),Y=Se===""||Se==="0"||Se==="1"?0:Pe(Se,0)-1,q=S&&typeof S=="function"?S(G.value):G.value;y.set(Y,q)}return y},de=c=>{if(!c)return null;let p=c.getAttribute(K);if(!p)return null;let S=p.split(";"),y=[];for(let G of S)G.trim()!==""&&y.push(G.trim());return y},Ie=[[Ue,pe,"sliderWidth",null],[ge,w,"sliderHeight",null],[Ye,_,"sliderRadius",null],[Le,E,"sliderBg",null],[Q,D,"sliderBgHover",null],[Te,B,"sliderBgFill",null],[O,T,"pointer#Width",/^pointer([0-9]*)-width$/],[M,R,"pointer#Height",/^pointer([0-9]*)-height$/],[ye,I,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ke,ie,"pointer#Bg",/^pointer([0-9]*)-bg$/],[lt,_e,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[bt,we,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[hr,Re,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Ft,Ve,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Xt,je,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[zr,rt,"pointer#Border",/^pointer([0-9]*)-border$/],[ne,ct,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[xe,et,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Me=(c,p,S)=>{let y=null,G=[],oe=new Map,Se=(he,Ae=p)=>{let ce=[...Ae.classList];for(let qe of ce)qe.startsWith(he)&&p.classList.remove(qe)},Y=()=>{Se("shape");let he=p.querySelectorAll(".pointer");for(let Ae of he)Se("shape",Ae)},q=he=>{y=he,Se("theme-"),typeof he=="string"&&p.classList.add(`theme-${he}`)},Ce=()=>{if(Y(),!(G.length<=0)){p.classList.add("shape",`shape-${G[0]}`);for(let he=1;he<G.length;he++){let Ae=G[he];if(!Ae)continue;let ce=p.querySelector(`.pointer-${he}`);!ce||ce.classList.add("shape",`shape-${Ae}`)}}},Ee=(he,Ae)=>{G[he]=Ae,Ce()},se=()=>{Y();let he=U(c,/^pointer([0-9]*)-shape$/);if(!(he.size<=0)){for(let Ae of he){let ce=Ae[0];G[ce]=Ae[1]}Ce()}},ze=(he,Ae)=>`${he}-${Ae}`,Kt=(he,Ae,ce)=>{let qe=S[ce];if(!qe)return;let yt=ce===0?p:qe.$pointer;if(Ae==null){oe.has(ze(he,ce))&&oe.delete(ze(he,ce)),yt.style.removeProperty(he);return}oe.set(ze(he,ce),Ae),yt.style.setProperty(he,Ae)},St=(he,Ae)=>oe.get(ze(he,Ae));return(()=>{for(let he of Ie){let[Ae,ce,qe,yt]=he;if(yt){let it=U(c,yt);for(let st of it){let kt=st[0],Ot=st[1];Kt(Ae,Ot,kt)}}else{let it=c.getAttribute(ce);Kt(Ae,it,0)}let ut=[];if(qe.indexOf("#")===-1)ut.push([qe,0]);else{ut.push([qe.replace("#",""),0]),ut.push([qe.replace("#","0"),0]),ut.push([qe.replace("#","1"),0]);for(let it=1;it<S.length;it++)ut.push([qe.replace("#",(it+1).toString()),it])}for(let it of ut)try{let st=it[0],kt=it[1];Object.prototype.hasOwnProperty.call(c,st)||Object.defineProperty(c,st,{get(){return St(Ae,kt)},set:Ot=>{Kt(Ae,Ot,kt)}})}catch(st){console.error(st)}}q(c.getAttribute(k)),se()})(),{setStyle:Kt,getStyle:St,get theme(){return y},set theme(he){q(he)},get pointerShapes(){return G},setPointerShape:Ee}},Je="animate-on-click",Oe="range-dragging",Pt=(c,p,S,y)=>{let G=[],oe=Ee=>{for(let se of G)se.update&&typeof se.update=="function"&&se.update(Ee)},Se=()=>{for(let Ee of G)Ee.destroy&&typeof Ee.destroy=="function"&&Ee.destroy()},Y=(Ee,se)=>{for(let ze of G)ze.onAttrChange&&typeof ze.onAttrChange=="function"&&ze.onAttrChange(Ee,se)},q=Ee=>{if(Ee.gettersAndSetters){for(let se of Ee.gettersAndSetters)if(!(!se.name||!se.attributes))try{Object.prototype.hasOwnProperty.call(c,se.name)||Object.defineProperty(c,se.name,se.attributes)}catch(ze){console.error("defineSettersGetters error:",ze)}}},Ce=Ee=>{var se;if(!Ee.css)return;let ze=(se=c.shadowRoot)==null?void 0:se.querySelector("style");!ze||(ze.innerHTML+=Ee.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Ee of window.tcRangeSliderPlugins){let se=Ee();G.push(se),se.init&&typeof se.init=="function"&&(se.init(c,p,S,y),q(se),Ce(se))}},update:oe,onAttrChange:Y,destroy:Se}},ht=10,Cs=20,Wh=(c,p)=>{let S=new Map,y=/^value([0-9]*)$/;for(let Y of c.attributes){let q=Y.nodeName.trim().toLowerCase();if(!y.test(q))continue;let Ce=q.replace("value","").trim(),Ee=Ce===""||Ce==="0"||Ce==="1"?0:Pe(Ce,0)-1,se=Ne(Y.value)?Pe(Y.value,0):Y.value;S.set(Ee,se)}let G=Math.max(...Array.from(S.keys())),oe=[];oe.push([L(c,p,0),S.get(0)]);let Se=p;for(let Y=1;Y<=G;Y++){let q=p.cloneNode(!0);Se.after(q),Se=q,oe.push([L(c,q,Y),S.get(Y)])}return oe},vo=(c,p,S,y,G,oe,Se)=>{try{Object.defineProperty(c,y,{configurable:!0,get(){if(!p)return;let Y=p.pointers[S];if(!Y)return;let q=p.getTextValue(Y.percent);return Ne(q)?Pe(q,q):q},set:Y=>{p.pointers[S]?p==null||p.setValue(Y,S):p==null||p.addPointer(Y)}}),Object.defineProperty(c,G,{configurable:!0,get(){var Y,q;return(q=(Y=p==null?void 0:p.pointers[S])==null?void 0:Y.getAttr("aria-label"))!=null?q:void 0},set:Y=>{!p||p.setAriaLabel(S,Y)}}),Object.defineProperty(c,oe,{configurable:!0,get(){var Y,q;return(q=(Y=p==null?void 0:p.styles)==null?void 0:Y.pointerShapes[S])!=null?q:null},set:Y=>{!p||!p.styles||p.styles.setPointerShape(S,Y)}}),Object.defineProperty(c,Se,{configurable:!0,get(){var Y;return(Y=p==null?void 0:p.pointers[S].disabled)!=null?Y:!1},set:Y=>{if(!p)return;let q=p==null?void 0:p.pointers[S];!q||(q.disabled=Y)}})}catch(Y){console.error(Y)}},Bh=(c,p)=>{let S=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let y=2;y<ht;y++)S.push([`value${y}`,`ariaLabel${y}`,`pointer${y}Shape`,`pointer${y}Disabled`,y-1]);for(let y of S)vo(c,p,y[4],y[0],y[1],y[2],y[3])},yo=(c,p,S)=>{var y;let G=(y=S.shadowRoot)==null?void 0:y.querySelector(".container");if(G)for(let oe of c)p?G.prepend(oe.$pointer):G.append(oe.$pointer)},Hh=(c,p)=>{if(!(!p||c.length<=1)){for(let S of c)S.$pointer.style.zIndex=Cs.toString();p.$pointer.style.zIndex=(Cs*2).toString()}},jn=0,Ni=100,pi=2,bo="0.3s",Gh=(c,p,S)=>{let y=S.map(d=>d[0]),G=null,oe=null,Se=null,Y=null,q=jn,Ce=Ni,Ee,se,ze=fe,Kt=pi,St=!1,he=!1,Ae=!1,ce=0,qe=1/0,yt=!1,ut,it,st=!1,kt=!1,Ot=!1,jr=bo,wo=[],xo=d=>{st||(d.preventDefault&&d.preventDefault(),ri(d),window.addEventListener("mousemove",ri),window.addEventListener("mouseup",As),$r(c,d))},As=d=>{st||(ut=void 0,it=void 0,window.removeEventListener("mousemove",ri),window.removeEventListener("mouseup",As),jr&&p.classList.add(Je),In(c,d))},qh=(d,P)=>{if(y.length<=0)return;if(y.length===1)return y[0].isClicked(d)&&jr&&p.classList.remove(Je),y[0];let re=Kh(d);if(yt){let Fe=P,rr=ks(Fe);rr!==void 0&&(Fe=Fr(Fe,rr)),re?(ut=Fe,it=0,jr&&p.classList.remove(Je)):ut!==void 0&&(it=Fe-ut,ut=Fe)}if(!Xh(d)&&!re){for(let Fe of y)if(!(!Fe.isClicked(d)||Fe.disabled))return jr&&p.classList.remove(Je),Fe;for(let Fe of y)if(G===Fe)return Fe}let Be=1/0,nt=null;for(let Fe of y){if(Fe.disabled)continue;let rr=Math.abs(P-Fe.percent);rr<Be&&(Be=rr,nt=Fe)}return nt},So=()=>y.findIndex(d=>G===d&&!d.disabled),ri=d=>{let P;if(ze===ee){let{height:Be,top:nt}=p.getBoundingClientRect(),Fe=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;P=Math.min(Math.max(0,Fe-nt),Be)*100/Be}else{let{width:Be,left:nt}=p.getBoundingClientRect(),Fe=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;P=Math.min(Math.max(0,Fe-nt),Be)*100/Be}if((St||he)&&(P=100-P),G=qh(d.target,P),G&&Hh(y,G),yt&&y.length>1&&it!==void 0){let Be=y[0],nt=y[y.length-1],Fe=Be.percent+it<0,rr=nt.percent+it>100;if(Fe||rr)return;for(let Us=0;Us<y.length;Us++)Et(Us,y[Us].percent+it);return}let re=So();re!==-1&&(Et(re,P),G==null||G.$pointer.focus())},Ps=d=>{if(st||document.activeElement!==c||G!=null&&G.disabled)return;d.stopPropagation(),d.preventDefault();let P=d.deltaY<0,re=St||he,Be=P?!re:re,nt=So();nt!==-1&&(Be?Wi(nt,y[nt].percent):Bi(nt,y[nt].percent))},_o=d=>{st||kt||(ze===ee?he?Et(d,100):Et(d,0):St?Bi(d,y[d].percent):Wi(d,y[d].percent))},$o=d=>{st||kt||(ze===ee?he?Et(d,0):Et(d,100):St?Wi(d,y[d].percent):Bi(d,y[d].percent))},Co=d=>{st||kt||(ze===ee?he?Bi(d,y[d].percent):Wi(d,y[d].percent):St?Et(d,100):Et(d,0))},Ao=d=>{st||kt||(ze===ee?he?Wi(d,y[d].percent):Bi(d,y[d].percent):St?Et(d,0):Et(d,100))},Xh=d=>d.classList.contains("panel"),Kh=d=>d.classList.contains("panel-fill"),Wi=(d,P)=>{if(P===void 0)return;let re=ks(P);re==null&&(re=1),P-=re,P<0&&(P=0),Et(d,P)},Bi=(d,P)=>{if(P===void 0)return;let re=ks(P);re==null&&(re=1),P+=re,P>100&&(P=100),Et(d,P)},ii=()=>{!Y||Y.update({percents:Po(),values:ko(),$pointers:Oo(),min:Eo(),max:Do(),data:Bn(),step:Wn(),round:Gn(),type:Hn(),textMin:Os(),textMax:Es(),rightToLeft:qn(),bottomToTop:Xn(),pointersOverlap:Jn(),pointersMinDistance:Vn(),pointersMaxDistance:Yn(),rangeDragging:ea(),disabled:Kn(),keyboardDisabled:Zn(),mousewheelDisabled:Qn()})},Zh=()=>{ii()},Qh=d=>{if(!(Ae||y.length<=1||Ce===q))if(d===0){let P=qe*100/(Ce-q);return Math.max(0,y[d+1].percent-P)}else{let P=ce*100/(Ce-q);return Math.min(y[d-1].percent+P,100)}},Jh=d=>{if(!(Ae||y.length<=1||Ce===q))if(d===y.length-1){let P=qe*100/(Ce-q);return Math.min(y[d-1].percent+P,100)}else{let P=ce*100/(Ce-q);return Math.max(0,y[d+1].percent-P)}},ks=d=>{let P;if(typeof Ee=="function"){let re=$e(0,100,q,Ce,d);P=Ee(re,d)}else P=Ee;if(Ne(P)){let re=Ce-q;return P=re===0?0:P*100/re,P}},fi=d=>{if(d===void 0)return;let P=$e(0,100,q,Ce,d);return se!==void 0?se[Math.round(P)]:ti(P,Kt)},Os=()=>se!==void 0?se[q]:q,Es=()=>se!==void 0?se[Ce]:Ce,Wn=()=>Ee,ec=d=>{var P;return d<=0||Ae?Os():(P=fi(y[d-1].percent))!=null?P:""},tc=d=>{var P;return y.length<=1||d>=y.length-1||Ae?Es():(P=fi(y[d+1].percent))!=null?P:""},Po=()=>y.map(d=>d.percent),ko=()=>y.map(d=>fi(d.percent)),Oo=()=>y.map(d=>d.$pointer),Eo=()=>q,Do=()=>Ce,Bn=()=>se,Hn=()=>ze,Gn=()=>Kt,Vn=()=>ce,Yn=()=>qe,rc=d=>wo[d],qn=()=>St,Xn=()=>he,Kn=()=>st,Zn=()=>kt,Qn=()=>Ot,Jn=()=>Ae,ea=()=>yt,Et=(d,P)=>{if(P===void 0)return;let re=ks(P);re!==void 0&&(P=Fr(P,re));let Be=y[d];if(!Be)return;let nt=Be.updatePosition(P,Qh(d),Jh(d),ze,St,he);oe==null||oe.updatePosition(ze,y.map(Fe=>Fe.percent),St,he),ii();for(let Fe of y){let rr=fi(Fe.percent);rr!==void 0&&(Fe.setAttr("aria-valuenow",rr.toString()),Fe.setAttr("aria-valuetext",rr.toString()))}sc(),nt&&zn(c,y.map(Fe=>fi(Fe.percent)))},cr=()=>{for(let d=0;d<y.length;d++)Et(d,y[d].percent)},ic=(d,P)=>{q=se!==void 0?0:Pe(d,jn),Ce=se!==void 0?se.length-1:Pe(P,Ni),Ds(q),Ls(Ce)},sc=()=>{var d,P;for(let re=0;re<y.length;re++){let Be=y[re];Be.setAttr("aria-valuemin",((d=ec(re))!=null?d:"").toString()),Be.setAttr("aria-valuemax",((P=tc(re))!=null?P:"").toString())}},Ds=d=>{q=Pe(d,jn),q>Ce&&(Ce=q+Ni),cr()},Ls=d=>{Ce=Pe(d,Ni),Ce<q&&(Ce=q+Ni),cr()},Lo=d=>{Ae=!0;for(let P=0;P<d.length;P++)Ts(d[P],P);Ae=!1;for(let P=0;P<d.length;P++)Ts(d[P],P)},Ts=(d,P)=>{let re;se!==void 0?(re=d==null?0:N(d,se),re===-1&&(re=0)):(re=Pe(d,q),re<q&&(re=q),re>Ce&&(re=Ce));let Be=$e(q,Ce,0,100,re);Et(P,Be)},Rs=d=>{if(d==null){Ee=void 0;return}if(typeof d=="function"){Ee=d,cr();return}if(Ne(d)){Ee=Pe(d,1);let P=Math.abs(Ce-q);Ee>P&&(Ee=void 0),cr();return}Ee=void 0},ta=d=>{Ae=d,cr()},ra=d=>{(!Ne(d)||d<0)&&(d=0),ce=d},ia=d=>{(!Ne(d)||d<0)&&(d=1/0),qe=d},sa=d=>{st=d,p.classList.toggle("disabled",st),st?p.setAttribute("aria-disabled","true"):p.hasAttribute("aria-disabled")&&p.removeAttribute("aria-disabled")},To=d=>{kt=d},Ro=d=>{Ot=d,Ot?document.removeEventListener("wheel",Ps):document.addEventListener("wheel",Ps,{passive:!1})},na=d=>{if(d==null){se=void 0;return}if(se=z(d),se===void 0||se.length<=0){se=void 0;return}Ds(0),Ls(se.length-1),Ee===void 0&&Rs(1)},aa=d=>{var P;typeof d=="string"?ze=d.trim().toLowerCase()===ee?ee:fe:ze=fe;let re=(P=c.shadowRoot)==null?void 0:P.querySelector(".range-slider-box");if(!re)return;re.className=`range-slider-box type-${ze}`,cr();let Be=ze===ee?"vertical":"horizontal";for(let nt of y)nt.setAttr("aria-orientation",Be)},oa=d=>{St=d,y.length>1&&yo(y,St,c),cr(),ii()},la=d=>{he=d,y.length>1&&yo(y,he,c),cr(),ii()},ha=d=>{Kt=Pe(d,pi),Kt<0&&(Kt=pi),ii()},Mo=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(jr=void 0,p.style.removeProperty(ae),p.classList.remove(Je)):(jr=d.toString(),p.style.setProperty(ae,jr),p.classList.add(Je))},Uo=(d,P)=>{let re=y[d];!re||(re.setAttr("aria-label",P),wo[d]=P)},Ms=d=>{if(ut=void 0,y.length<=1){yt=!1,p.classList.remove(Oe);return}yt=d,p.classList.toggle(Oe,yt)},nc=()=>{sa(We(c.getAttribute(V))),kt=We(c.getAttribute(te)),Ot=We(c.getAttribute(X));let d=U(c,/^pointer([0-9]*)-disabled$/,P=>We(P));for(let P of d){let re=P[0];!y[re]||(y[re].disabled=P[1])}},ac=()=>{let d=U(c,/^aria-label([0-9]*)$/);for(let P of d){let re=P[0];Uo(re,P[1])}},oc=d=>{let P=y.length,re=y[P-1].$pointer,Be=re.cloneNode(!0);re.after(Be);let nt=L(c,Be,P);return nt.setCallbacks(_o,$o,Co,Ao),y.push(nt),Ts(d,P),cr(),ii(),P},lc=()=>{let d=y.length,P=y[d-1];return P?(P.destroy(),y.pop(),y.length<=1&&Ms(!1),cr(),ii(),d-1):-1};return(()=>{var d,P;for(let Be of y)Be.setCallbacks(_o,$o,Co,Ao);let re=(d=c.shadowRoot)==null?void 0:d.querySelector(".panel-fill");re&&(oe=W(re)),aa(c.getAttribute(A)),oa(We(c.getAttribute(H))),la(We(c.getAttribute(j))),ic(c.getAttribute(g),c.getAttribute(b)),Rs(c.getAttribute($)),na(c.getAttribute(f)),Lo(S.map(Be=>Be[1])),ta(We(c.getAttribute(a))),ra(Pe(c.getAttribute(o),0)),ia(Pe(c.getAttribute(h),1/0)),Ms(We(c.getAttribute(u))),ha(Pe(c.getAttribute(C),pi)),nc(),ac(),Se=Me(c,p,y),Mo((P=c.getAttribute(ot))!=null?P:bo),p.addEventListener("mousedown",xo),p.addEventListener("mouseup",As),p.addEventListener("touchmove",ri),p.addEventListener("touchstart",ri),Ot||document.addEventListener("wheel",Ps,{passive:!1}),Y=Pt(c,Zh,{setValues:Lo,setMin:Ds,setMax:Ls,setStep:Rs,setPointersOverlap:ta,setPointersMinDistance:ra,setPointersMaxDistance:ia,setDisabled:sa,setType:aa,setRightToLeft:oa,setBottomToTop:la,setRound:ha,setKeyboardDisabled:To,setMousewheelDisabled:Ro,setRangeDragging:Ms,setData:na},{getPercents:Po,getValues:ko,getPointerElements:Oo,getMin:Eo,getMax:Do,getStep:Wn,getData:Bn,getType:Hn,getRound:Gn,getTextMin:Os,getTextMax:Es,isRightToLeft:qn,isBottomToTop:Xn,isDisabled:Kn,isKeyboardDisabled:Zn,isMousewheelDisabled:Qn,isPointersOverlap:Jn,isRangeDraggingEnabled:ea,getPointersMinDistance:Vn,getPointersMaxDistance:Yn}),Y.init()})(),{get pointers(){return y},get styles(){return Se},get pluginsManager(){return Y},get min(){return Os()},get max(){return Es()},get step(){return Wn()},get pointersOverlap(){return Jn()},set pointersOverlap(d){ta(d)},get pointersMinDistance(){return Vn()},set pointersMinDistance(d){ra(d)},get pointersMaxDistance(){return Yn()},set pointersMaxDistance(d){ia(d)},get disabled(){return Kn()},set disabled(d){sa(d)},get data(){return Bn()},get type(){return Hn()},set type(d){aa(d)},get rightToLeft(){return qn()},set rightToLeft(d){oa(d)},get bottomToTop(){return Xn()},set bottomToTop(d){la(d)},get round(){return Gn()},set round(d){ha(d)},get animateOnClick(){return jr},set animateOnClick(d){Mo(d)},get keyboardDisabled(){return Zn()},set keyboardDisabled(d){To(d)},get mousewheelDisabled(){return Qn()},set mousewheelDisabled(d){Ro(d)},get rangeDragging(){return ea()},set rangeDragging(d){Ms(d)},setMin:Ds,setMax:Ls,setValue:Ts,setStep:Rs,setData:na,getTextValue:fi,setAriaLabel:Uo,getAriaLabel:rc,addPointer:oc,removePointer:lc,destroy:()=>{p.removeEventListener("mousedown",xo),p.removeEventListener("mouseup",As),p.removeEventListener("touchmove",ri),p.removeEventListener("touchstart",ri),document.removeEventListener("wheel",Ps);for(let d of y)d.destroy();Y==null||Y.destroy()}}},Vh=(c,p,S)=>{let y=Ie.find(([Y,q,Ce,Ee])=>q.replace("#","")===p.replace(/\d+/g,""));if(y&&c.styles){let[Y,q,Ce,Ee]=y,se=p.replace(/\D/g,"").trim(),ze=se===""||se==="0"||se==="1"?0:Pe(se,0)-1;c.styles.setStyle(Y,S,ze);return}switch(c&&c.pluginsManager&&c.pluginsManager.onAttrChange(p,S),p){case g:{c.setMin(S);break}case b:{c.setMax(S);break}case $:{c.setStep(S);break}case a:{c.pointersOverlap=We(S);break}case o:{c.pointersMinDistance=Pe(S,0);break}case u:{c.rangeDragging=We(S);break}case h:{c.pointersMaxDistance=Pe(S,1/0);break}case V:{c.disabled=We(S);break}case te:{c.keyboardDisabled=We(S);break}case X:{c.mousewheelDisabled=We(S);break}case f:{c.setData(S);break}case A:{c.type=S;break}case H:{c.rightToLeft=We(S);break}case j:{c.bottomToTop=We(S);break}case C:{c.round=Pe(S,pi);break}case k:{c.styles&&(c.styles.theme=S);break}case ot:{c.animateOnClick=S;break}}let G=null;if(/^value([0-9]*)$/.test(p)&&(G="value"),/^pointer([0-9]*)-disabled$/.test(p)&&(G="pointer-disabled"),/^aria-label([0-9]*)$/.test(p)&&(G="aria-label"),/^pointer([0-9]*)-shape$/.test(p)&&(G="pointer-shape"),!G)return;let oe=p.replace(/\D/g,"").trim(),Se=oe===""||oe==="0"||oe==="1"?0:Pe(oe,0)-1;switch(G){case"value":{c.setValue(S,Se);break}case"pointer-disabled":{let Y=c==null?void 0:c.pointers[Se];if(!Y)return;Y.disabled=We(S);break}case"aria-label":{c.setAriaLabel(Se,S);break}case"pointer-shape":{c.styles&&c.styles.setPointerShape(Se,S);break}}},Yh=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(c){this.slider&&this.slider.setStep(c)}get step(){var c;return(c=this.slider)==null?void 0:c.step}set disabled(c){this.slider&&(this.slider.disabled=c)}get disabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.disabled)!=null?p:!1}set data(c){var p;(p=this.slider)==null||p.setData(c)}get data(){var c;return(c=this.slider)==null?void 0:c.data}set min(c){var p;(p=this.slider)==null||p.setMin(c)}get min(){var c;return(c=this.slider)==null?void 0:c.min}set max(c){var p;(p=this.slider)==null||p.setMax(c)}get max(){var c;return(c=this.slider)==null?void 0:c.max}set round(c){!this.slider||(this.slider.round=c)}get round(){var c,p;return(p=(c=this.slider)==null?void 0:c.round)!=null?p:pi}set type(c){!this.slider||(this.slider.type=c??fe)}get type(){var c;return((c=this.slider)==null?void 0:c.type)||fe}set pointersOverlap(c){!this.slider||(this.slider.pointersOverlap=c)}get pointersOverlap(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersOverlap)!=null?p:!1}set pointersMinDistance(c){!this.slider||(this.slider.pointersMinDistance=c)}get pointersMinDistance(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersMinDistance)!=null?p:0}set pointersMaxDistance(c){!this.slider||(this.slider.pointersMaxDistance=c)}get pointersMaxDistance(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersMaxDistance)!=null?p:1/0}set theme(c){!this.slider||!this.slider.styles||(this.slider.styles.theme=c)}get theme(){var c,p,S;return(S=(p=(c=this.slider)==null?void 0:c.styles)==null?void 0:p.theme)!=null?S:null}set rtl(c){!this.slider||(this.slider.rightToLeft=c)}get rtl(){var c,p;return(p=(c=this.slider)==null?void 0:c.rightToLeft)!=null?p:!1}set btt(c){!this.slider||(this.slider.bottomToTop=c)}get btt(){var c,p;return(p=(c=this.slider)==null?void 0:c.bottomToTop)!=null?p:!1}set keyboardDisabled(c){!this.slider||(this.slider.keyboardDisabled=c)}get keyboardDisabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.keyboardDisabled)!=null?p:!1}set mousewheelDisabled(c){!this.slider||(this.slider.mousewheelDisabled=c)}get mousewheelDisabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.mousewheelDisabled)!=null?p:!1}set animateOnClick(c){!this.slider||(this.slider.animateOnClick=c)}get animateOnClick(){var c;return(c=this.slider)==null?void 0:c.animateOnClick}get rangeDragging(){var c,p;return(p=(c=this.slider)==null?void 0:c.rangeDragging)!=null?p:!1}set rangeDragging(c){this.slider&&(this.slider.rangeDragging=We(c))}get externalCSSList(){return this._externalCSSList}addPointer(c){var p,S;if(!this.slider)return;let y=(S=(p=this.slider)==null?void 0:p.addPointer(c))!=null?S:0;vo(this,this.slider,y,`value${y+1}`,`ariaLabel${y+1}`,`pointerShape${y+1}`,`pointer${y+1}Disabled`)}removePointer(){var c;!this.slider||(c=this.slider)==null||c.removePointer()}addCSS(c){if(!this.shadowRoot)return;let p=document.createElement("style");p.textContent=c,this.shadowRoot.appendChild(p)}connectedCallback(){var c,p;if(!this.shadowRoot)return;this._externalCSSList=de(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let S=(c=this.shadowRoot)==null?void 0:c.querySelector(".pointer");if(!S)return;let y=(p=this.shadowRoot)==null?void 0:p.getElementById("range-slider");if(!y)return;let G=Wh(this,S);this.slider=Gh(this,y,G),Bh(this,this.slider),this._observer=new MutationObserver(oe=>{oe.forEach(Se=>{var Y;if(!this.slider||Se.type!=="attributes")return;let q=Se.attributeName;!q||Vh(this.slider,q,(Y=this.getAttribute(q))!=null?Y:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Nn=Yh;window.tcRangeSlider=Nn,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Nn),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Nn{})})();(()=>{var r=(o,h,u,f,g)=>{let b=h-o;return b===0?u:(f-u)*(g-o)/b+u},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,h)=>e(o)?Number(o):h,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,h=null,u=null,f=null,g=null,b=!1,$=s,C=n,A=()=>{var w;let _=(w=o==null?void 0:o.shadowRoot)==null?void 0:w.querySelector("#range-slider");u=document.createElement("div"),u.classList.add("marks"),f=document.createElement("div"),f.classList.add("mark-points"),u.append(f),g=document.createElement("div"),g.classList.add("mark-values"),u.append(g),_.append(u)},k=()=>{!h||!u||u.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},H=()=>{var w;if(!u||!h)return;let _=h.getMin(),E=h.getMax(),D=h.getType()==="vertical",B=h.isRightToLeft()||h.isBottomToTop();for(let R=0;R<$;R++){let I=document.createElement("div");I.classList.add("mark",`mark-${R}`);let ie=$===0?0:R*100/($-1);D?B?I.style.top=`${100-ie}%`:I.style.top=`${ie}%`:B?I.style.left=`${100-ie}%`:I.style.left=`${ie}%`,f==null||f.append(I)}let T=h.getData();for(let R=0;R<C;R++){let I=document.createElement("div");I.classList.add("mark-value",`mark-value-${R}`);let ie=C===0?0:R*100/(C-1),_e=r(0,C-1,_,E,R);I.textContent=(T?(w=T[Math.round(_e)])!=null?w:"":_e).toString(),D?B?I.style.top=`${100-ie}%`:I.style.top=`${ie}%`:B?I.style.left=`${100-ie}%`:I.style.left=`${ie}%`,g==null||g.append(I)}},j=(w,_)=>{pe(),$=w,C=_,$<=0&&($=s),C<=0&&(C=n),A(),H(),k()},V=w=>{b=w,b?(A(),H(),k()):pe()},te=w=>{!u||u.style.setProperty("--marks-color",w)},X=w=>{!u||u.style.setProperty("--values-color",w)},pe=()=>{u==null||u.remove()};return{get name(){return"Marks"},init:(w,_,E,D)=>{var B,T;h=D,o=w,b=i(o.getAttribute("marks")),b&&(j(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),te((B=o.getAttribute("marks-color"))!=null?B:"#cbd5e1"),X((T=o.getAttribute("marks-values-color"))!=null?T:"#475569"))},onAttrChange:(w,_)=>{w==="marks"&&V(i(_)),w==="marks-count"&&j(t(_,s),C),w==="marks-values-count"&&j($,t(_,n)),w==="marks-color"&&te(_),w==="marks-values-color"&&X(_)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return b??!1},set:w=>{V(i(w))}}},{name:"marksCount",attributes:{get(){return $??s},set:w=>{j(t(w,s),C)}}},{name:"marksValuesCount",attributes:{get(){return $??s},set:w=>{j($,t(w,n))}}},{name:"marksColor",attributes:{get(){return u==null?void 0:u.style.getPropertyValue("--marks-color")},set:w=>{te(w)}}},{name:"markValuesColor",attributes:{get(){return u==null?void 0:u.style.getPropertyValue("--values-color")},set:w=>{X(w)}}}],destroy:pe,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Hg=Object.defineProperty,Gg=Object.getOwnPropertyDescriptor,xr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hg(e,t,s),s};let Qt=class extends Ut{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=He(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)})}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
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
                ${Ke(this.sliderRef)}
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

        `}};Qt.styles=me`

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
    
    `;xr([ve({context:Xa,subscribe:!0}),x()],Qt.prototype,"min",2);xr([ve({context:Ka,subscribe:!0}),x()],Qt.prototype,"max",2);xr([ve({context:An,subscribe:!0}),x()],Qt.prototype,"from",2);xr([ve({context:Pn,subscribe:!0}),x()],Qt.prototype,"to",2);xr([x()],Qt.prototype,"hasFixedFrom",2);xr([x()],Qt.prototype,"hasFixedTo",2);xr([ve({context:vs,subscribe:!0}),x()],Qt.prototype,"palette",2);xr([x()],Qt.prototype,"sliderRef",2);xr([x()],Qt.prototype,"initialised",2);Qt=xr([J("registry-range-slider")],Qt);var Vg=Object.defineProperty,Yg=Object.getOwnPropertyDescriptor,Ss=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vg(e,t,s),s};let Oi=class extends Ut{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var r,e;return this.from===void 0||this.to===void 0?F:v`
            <div>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Ss([ve({context:An,subscribe:!0})],Oi.prototype,"from",2);Ss([ve({context:Pn,subscribe:!0})],Oi.prototype,"to",2);Ss([m({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],Oi.prototype,"fixed",2);Ss([m({type:String,reflect:!0,attribute:!0})],Oi.prototype,"separator",2);Oi=Ss([J("registry-range-display")],Oi);var qg=Object.defineProperty,Xg=Object.getOwnPropertyDescriptor,Ln=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qg(e,t,s),s};let Ei=class extends Ut{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return v`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":F}">

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
        `}};Ei.styles=me`

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


    `;Ln([x()],Ei.prototype,"histogram",2);Ln([m({type:Boolean,reflect:!0})],Ei.prototype,"interactive",2);Ln([m({type:String,reflect:!0})],Ei.prototype,"height",2);Ei=Ln([J("registry-histogram")],Ei);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ln extends Na{constructor(e){if(super(e),this.it=F,e.type!==ja.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===F||e==null)return this._t=void 0,this.it=e;if(e===Gr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ln.directiveName="unsafeHTML",ln.resultType=1;const zt=yn(ln);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pa extends ln{}Pa.directiveName="unsafeSVG",Pa.resultType=2;const jh=yn(Pa);var Kg=Object.defineProperty,Zg=Object.getOwnPropertyDescriptor,Tn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Kg(e,t,s),s};let Di=class extends ui{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?F:v`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:t.key===this.value.key};return v`
                        
                        <button 
                            class=${Nt(i)} 
                            @click=${()=>{this.group.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${jh(t.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Di.styles=me`

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

    `;Tn([ve({context:kn,subscribe:!0}),x()],Di.prototype,"value",2);Tn([ve({context:On,subscribe:!0}),x()],Di.prototype,"tools",2);Tn([x()],Di.prototype,"hint",2);Di=Tn([J("group-tool-buttons")],Di);var Qg=Object.defineProperty,Jg=Object.getOwnPropertyDescriptor,ao=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qg(e,t,s),s};let is=class extends ui{connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?F:v`
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return v`
                        
                        <button 
                            class=${Nt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${e.name}
                        >
                            ${jh(e.icon)}
                        </button>
                        
                    `})}
        `}};is.styles=me`

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

    `;ao([ve({context:kn,subscribe:!0}),x()],is.prototype,"value",2);ao([ve({context:On,subscribe:!0}),x()],is.prototype,"tools",2);is=ao([J("group-tool-bar")],is);var em=Object.defineProperty,_s=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&em(e,t,s),s};class vt extends ui{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),e=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}_s([ve({context:En,subscribe:!0}),x()],vt.prototype,"parentFileProviderElement");_s([ve({context:Dh,subscribe:!0}),x()],vt.prototype,"loading");_s([ve({context:Qa,subscribe:!0}),x()],vt.prototype,"file");_s([ve({context:Eh,subscribe:!0}),x()],vt.prototype,"failure");_s([ve({context:Th,subscribe:!0}),x()],vt.prototype,"recording");var tm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,im=(r,e,t,i)=>{for(var s=i>1?void 0:i?rm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tm(e,t,s),s};let ka=class extends vt{constructor(){super(...arguments),this.container=He()}getContainer(){return this.container.value}onInstanceCreated(r){const e=this.getContainer();if(e!==void 0)r.mountToDom(e),r.draw();else throw this.log("kontejner!",e),new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(r){var e;if(super.updated(r),r.has("file")){const t=r.get("file"),i=this.file;t===void 0&&i!==void 0&&this.container.value&&this.file&&((e=this.file.dom)==null?void 0:e.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return v`
            <div ${Ke(this.container)} class=${Nt(t)} part="file-canvas-container">
            
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
                        </div>`:F}
            
            </div>
        
        `}};ka.styles=me`

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
    `;ka=im([J("file-canvas")],ka);var sm=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,am=(r,e,t,i)=>{for(var s=i>1?void 0:i?nm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sm(e,t,s),s};let Oa=class extends vt{onInstanceCreated(r){}onFailure(r){}render(){return this.file?v`
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
        `:F}};Oa.styles=me`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Oa=am([J("file-share-button")],Oa);var om=Object.defineProperty,lm=Object.getOwnPropertyDescriptor,hm=(r,e,t,i)=>{for(var s=i>1?void 0:i?lm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&om(e,t,s),s};let Ea=class extends vt{onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
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

                        ${zt(this.renderRow("Thermal file name",this.file.fileName))}

                        ${zt(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?zt(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):F}

                        ${zt(this.renderRow("Time",Xe.human(this.file.timestamp)))}

                        ${zt(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${zt(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${zt(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${zt(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${zt(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${zt(this.renderRow("Type",this.file.reader.parser.name))}
                    ${zt(this.renderRow("Description",this.file.reader.parser.description))}

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
        `:F}};Ea.styles=me`

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
    
    `;Ea=hm([J("file-info-button")],Ea);var cm=Object.defineProperty,um=Object.getOwnPropertyDescriptor,dm=(r,e,t,i)=>{for(var s=i>1?void 0:i?um(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cm(e,t,s),s};let Da=class extends vt{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?F:v`

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
                        </div>`:F}
            
            </thermal-dropdown>

        
        `}};Da.styles=me`

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
    
    `;Da=dm([J("file-download-dropdown")],Da);var pm=Object.defineProperty,fm=Object.getOwnPropertyDescriptor,Ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?fm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pm(e,t,s),s};let Ht=class extends vt{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=He(),this.barRef=He(),this.containerRef=He(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<Ht.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}handleBarHover(r){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(t)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,o;const r=this.file;if(r===void 0)return F;if(r.duration===0)return F;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return v`
            <div class="${Nt(e)}" ${Ke(this.containerRef)}>


                ${r!==void 0?v`
                        <div class="container">

                            <div class="${Nt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


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


                            <div class="${Nt(s)}"  ${Ke(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Ke(this.barRef)}></div>
                                    ${this.cursor?v`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(h=>v`<file-marker-timeline start=${h.fromMs} end=${h.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:F}

            
            
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
                    </div>`:F}

          `}};Ht.collapseWidth=500;Ht.styles=me`
    
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
    
    `;Ur([ve({context:io,subscribe:!0}),x()],Ht.prototype,"playing",2);Ur([ve({context:bs,subscribe:!0}),x()],Ht.prototype,"currentFrame",2);Ur([ve({context:ro,subscribe:!0}),x()],Ht.prototype,"duration",2);Ur([ve({context:Rh,subscribe:!0}),x()],Ht.prototype,"mayStop",2);Ur([ve({context:eo,subscribe:!0})],Ht.prototype,"cursor",2);Ur([ve({context:to,subscribe:!0})],Ht.prototype,"cursorSetter",2);Ur([ve({context:so,subscribe:!0})],Ht.prototype,"markers",2);Ur([x()],Ht.prototype,"collapsed",2);Ht=Ur([J("file-timeline")],Ht);var gm=Object.defineProperty,mm=Object.getOwnPropertyDescriptor,oo=(r,e,t,i)=>{for(var s=i>1?void 0:i?mm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gm(e,t,s),s};let ss=class extends vt{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?F:v`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Jl).map(([r])=>v`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&(console.log(t.parentElement),t.parentElement instanceof Er&&t.parentElement.setClose())}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};ss.styles=me`

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
    
    `;oo([m({type:String,reflect:!0})],ss.prototype,"enabled",2);oo([ve({context:Lh,subscribe:!0}),x()],ss.prototype,"playbackSpeed",2);ss=oo([J("file-playback-speed-dropdown")],ss);var vm=Object.defineProperty,ym=Object.getOwnPropertyDescriptor,lo=(r,e,t,i)=>{for(var s=i>1?void 0:i?ym(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vm(e,t,s),s};let ns=class extends vt{constructor(){super(...arguments),this.container=He()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return v`
            <div class="container">
            
                <video ${Ke(this.container)} preload="metadata">

                    ${this.url===void 0?F:v`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};ns.styles=me`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;lo([ve({context:bs,subscribe:!0}),x()],ns.prototype,"currentFrame",2);lo([m({type:String,reflect:!0,attribute:!0})],ns.prototype,"url",2);ns=lo([J("file-video")],ns);const bm=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),Qe(t,"mm:ss:SSS")},wm=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var xm=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,Sr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xm(e,t,s),s};const ho={fromAttribute:r=>r===null?null:wm(r),toAttribute:r=>r===null?null:bm(r)};let nr=class extends vt{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),this.log(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return F}};Sr([ve({context:io,subscribe:!0}),x()],nr.prototype,"playing",2);Sr([ve({context:Ja,subscribe:!0}),x()],nr.prototype,"ms",2);Sr([m({type:String,reflect:!0,attribute:!0})],nr.prototype,"label",2);Sr([m({type:String,reflect:!0,attribute:!0,converter:ho})],nr.prototype,"start",2);Sr([m({type:String,reflect:!0,attribute:!0,converter:ho})],nr.prototype,"end",2);Sr([m({type:String,reflect:!0,attribute:!0,converter:ho})],nr.prototype,"dur",2);Sr([m({type:String,reflect:!0,attribute:!0})],nr.prototype,"active",2);Sr([m({type:String,reflect:!0,attribute:!0})],nr.prototype,"pauseOnActivate",2);Sr([m({type:String,reflect:!0,attribute:!0})],nr.prototype,"say",2);nr=Sr([J("file-marker")],nr);var _m=Object.defineProperty,$m=Object.getOwnPropertyDescriptor,di=(r,e,t,i)=>{for(var s=i>1?void 0:i?$m(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_m(e,t,s),s};let Tr=class extends vt{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return v`

            <div class="${Nt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Tr.styles=me`
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


    `;di([ve({context:ro,subscribe:!0}),x()],Tr.prototype,"duration",2);di([ve({context:bs,subscribe:!0}),x()],Tr.prototype,"currentFrame",2);di([ve({context:Ja,subscribe:!0}),x()],Tr.prototype,"ms",2);di([m({type:Number,reflect:!0,attribute:!0})],Tr.prototype,"start",2);di([m({type:Number,reflect:!0,attribute:!0})],Tr.prototype,"end",2);di([x()],Tr.prototype,"active",2);Tr=di([J("file-marker-timeline")],Tr);var Cm=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,Nh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Am(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cm(e,t,s),s};let hn=class extends vt{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return v`
            <div>


            ${this.markers.map(r=>r.active?v`<div class="item">
                    <h2>${r.label}</h2>
                    ${zt(r.innerHTML)}
                    </div>`:F)}

            
            
            </div>

          `}};hn.styles=me`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Nh([ve({context:so,subscribe:!0})],hn.prototype,"markers",2);hn=Nh([J("file-marks-content")],hn);var Pm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,co=(r,e,t,i)=>{for(var s=i>1?void 0:i?km(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pm(e,t,s),s};let as=class extends pt{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return v`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};as.styles=me`

    
    `;co([m()],as.prototype,"analysis",2);co([x()],as.prototype,"name",2);as=co([J("analysis-name")],as);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Om(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Em=Object.defineProperty,Dm=Object.getOwnPropertyDescriptor,uo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Em(e,t,s),s};let os=class extends pt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return v`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?F:v`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Om(Gs,r=>v`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};os.styles=me`

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
    
    `;uo([m()],os.prototype,"analysis",2);uo([x()],os.prototype,"color",2);os=uo([J("analysis-color")],os);var Lm=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,tr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lm(e,t,s),s};let Tt=class extends pt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

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
    
        
        `}};Tt.styles=me`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;tr([m()],Tt.prototype,"analysis",2);tr([x()],Tt.prototype,"color",2);tr([x()],Tt.prototype,"top",2);tr([x()],Tt.prototype,"left",2);tr([x()],Tt.prototype,"width",2);tr([x()],Tt.prototype,"height",2);tr([x()],Tt.prototype,"type",2);tr([x()],Tt.prototype,"right",2);tr([x()],Tt.prototype,"bottom",2);tr([x()],Tt.prototype,"maxX",2);tr([x()],Tt.prototype,"maxY",2);Tt=tr([J("edit-area")],Tt);var Rm=Object.defineProperty,Mm=Object.getOwnPropertyDescriptor,ji=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rm(e,t,s),s};let Xr=class extends pt{constructor(){super(...arguments),this.topInputRef=He(),this.leftInputRef=He()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return v`

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
        
        `}};Xr.styles=me`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;ji([m()],Xr.prototype,"analysis",2);ji([x()],Xr.prototype,"top",2);ji([x()],Xr.prototype,"left",2);ji([x()],Xr.prototype,"maxX",2);ji([x()],Xr.prototype,"maxY",2);Xr=ji([J("edit-point")],Xr);var Um=Object.defineProperty,Im=Object.getOwnPropertyDescriptor,Rn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Im(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Um(e,t,s),s};let ls=class extends pt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return v`

            <thermal-dialog label="Edit ${this.type} analysis">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof dr?v`<edit-point .analysis=${this.analysis}></edit-point>`:v`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Rn([m()],ls.prototype,"analysis",2);Rn([x()],ls.prototype,"name",2);Rn([x()],ls.prototype,"type",2);ls=Rn([J("file-analysis-edit")],ls);var Fm=Object.defineProperty,zm=Object.getOwnPropertyDescriptor,Yt=(r,e,t,i)=>{for(var s=i>1?void 0:i?zm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fm(e,t,s),s};let Ct=class extends vt{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=He(),this.graphRef=He(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return v`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&v`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&v`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${Ke(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?v`<thermal-chart 
                        ${Ke(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:F}
            </div>

            

            </div>
        
        `}};Ct.styles=me`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Yt([x()],Ct.prototype,"hydrated",2);Yt([m({reflect:!0})],Ct.prototype,"graphWidth",2);Yt([m({reflect:!0})],Ct.prototype,"graphHeight",2);Yt([x()],Ct.prototype,"graphs",2);Yt([ve({context:bs,subscribe:!0})],Ct.prototype,"currentFrame",2);Yt([ve({context:eo,subscribe:!0})],Ct.prototype,"cursor",2);Yt([ve({context:to,subscribe:!0})],Ct.prototype,"cursorSetter",2);Yt([x()],Ct.prototype,"shadowLeft",2);Yt([x()],Ct.prototype,"shadowTop",2);Yt([x()],Ct.prototype,"shadowWidth",2);Yt([x()],Ct.prototype,"shadowHeight",2);Yt([ve({context:$n,subscribe:!0})],Ct.prototype,"graphSmooth",2);Ct=Yt([J("file-analysis-graph")],Ct);var jm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Ir=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jm(e,t,s),s};let ar=class extends pt{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor,this.dimension=t.width+"x"+t.height,this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof dr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),t.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),t.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,i=>{this.color=i}),t.onSetName.set(this.UUID,i=>{this.name=i})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return v`
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
        
        `}};ar.styles=me`
    
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

    `;Ir([m()],ar.prototype,"analysis",2);Ir([x()],ar.prototype,"value",2);Ir([x()],ar.prototype,"graph",2);Ir([x()],ar.prototype,"may",2);Ir([x()],ar.prototype,"dimension",2);Ir([x()],ar.prototype,"color",2);Ir([m({type:Boolean,reflect:!0,attribute:!0})],ar.prototype,"selected",2);Ir([x()],ar.prototype,"name",2);ar=Ir([J("file-analysis-table-row")],ar);var Wm=Object.defineProperty,Bm=Object.getOwnPropertyDescriptor,Mn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wm(e,t,s),s};let Li=class extends vt{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?F:v`

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
                        ${this.hasHighlightedData?v`<thermal-button variant="foreground" @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:F}
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
        `}};Li.styles=me`
    
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

        



    `;Mn([x()],Li.prototype,"analysis",2);Mn([x()],Li.prototype,"allSelected",2);Mn([x()],Li.prototype,"hasHighlightedData",2);Li=Mn([J("file-analysis-table")],Li);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=r=>r??F;var Hm=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,Jr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hm(e,t,s),s};let yr=class extends vt{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(r){this.recorded=Xe.human(r.timestamp)}onFailure(){}render(){return v`
        <thermal-app author=${be(this.author)} recorded=${be(this.recorded)} license=${be(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?v`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:F}
          
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
                  `:F}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:F}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:F}

            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?v`<file-analysis-graph slot="post"></file-analysis-graph>`:F}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};yr.styles=me`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Jr([m({type:String,reflect:!0,attribute:!0})],yr.prototype,"showembed",2);Jr([m({type:String,reflect:!0,attribute:!0})],yr.prototype,"showabout",2);Jr([m({type:String,reflect:!0,attribute:!0})],yr.prototype,"showfullscreen",2);Jr([m()],yr.prototype,"author",2);Jr([m()],yr.prototype,"recorded",2);Jr([m()],yr.prototype,"license",2);Jr([m()],yr.prototype,"label",2);yr=Jr([J("file-app")],yr);var Vm=Object.defineProperty,Ze=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Vm(e,t,s),s};class Ge extends pt{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=He()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}Ze([m({type:String,reflect:!0})],Ge.prototype,"url");Ze([m({type:String,reflect:!0})],Ge.prototype,"visible");Ze([m({type:String,reflect:!0,attribute:!0})],Ge.prototype,"palette");Ze([m({type:Number,reflect:!0,attribute:!0})],Ge.prototype,"opacity");Ze([m({type:Number,reflect:!0})],Ge.prototype,"from");Ze([m({type:Number,reflect:!0})],Ge.prototype,"to");Ze([m()],Ge.prototype,"author");Ze([m()],Ge.prototype,"recorded");Ze([m()],Ge.prototype,"license");Ze([m()],Ge.prototype,"label");Ze([m({type:String,reflect:!1,attribute:!0})],Ge.prototype,"showembed");Ze([m({type:String,reflect:!1,attribute:!0})],Ge.prototype,"showabout");Ze([m({type:String,reflect:!1})],Ge.prototype,"showfullscreen");Ze([m({type:String,reflect:!0})],Ge.prototype,"analysis1");Ze([m({type:String,reflect:!0})],Ge.prototype,"analysis2");Ze([m({type:String,reflect:!0})],Ge.prototype,"analysis3");Ze([m({type:String,reflect:!0})],Ge.prototype,"analysis4");Ze([m({type:String,reflect:!0})],Ge.prototype,"analysis5");Ze([m({type:String,reflect:!0})],Ge.prototype,"analysis6");Ze([m({type:String,reflect:!0})],Ge.prototype,"analysis7");Ze([m({type:String,reflect:!0})],Ge.prototype,"ms");Ze([m({type:String,reflect:!0})],Ge.prototype,"speed");Ze([x()],Ge.prototype,"hasGraph");Ze([x()],Ge.prototype,"hasAnalysis");Ze([x()],Ge.prototype,"isSequence");var Ym=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,Xm=(r,e,t,i)=>{for(var s=i>1?void 0:i?qm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ym(e,t,s),s};let yl=class extends Ge{render(){return this.url===""?F:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${be(this.from)}
        to=${be(this.to)}
        opacity=${be(this.opacity)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}" 
            visible=${be(this.visible)}
            analysis1=${be(this.analysis1)}
            analysis2=${be(this.analysis2)}
            analysis3=${be(this.analysis3)}
            analysis4=${be(this.analysis4)}
            analysis5=${be(this.analysis5)}
            analysis6=${be(this.analysis6)}
            analysis7=${be(this.analysis7)}
            speed=${be(this.speed)}
          >

              <file-app 
                author=${be(this.author)} 
                recorded=${be(this.recorded)} 
                license=${be(this.license)}
                label=${be(this.label)}  
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};yl=Xm([J("thermal-file-app")],yl);var Km=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,qt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Km(e,t,s),s};let At=class extends vt{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=He(),this.contentContainerWidth=1e3}onInstanceCreated(r){this.recorded=Xe.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return v`
        <thermal-app author=${be(this.author)} recorded=${be(this.recorded)} license=${be(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?v`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:F}
          
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
                  `:F}

                  ${this.file&&this.file.timeline.isSequence?v` <thermal-field 
                    label="Graph lines"
                    hint="'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'."
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:F}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>

              ${this.showembed===!0?v`<file-share-button ></file-share-button>`:F}
            
              ${this.showabout===!0?v`<app-info-button ></app-info-button>`:F}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${Ke(this.contentContainerRef)}>

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
                    </div>`:F}
                  
                  </div>
                  `:F}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};At.styles=me`

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
  
  `;qt([m({type:String,reflect:!0,attribute:!0})],At.prototype,"showembed",2);qt([m({type:String,reflect:!0,attribute:!0})],At.prototype,"showabout",2);qt([m({type:String,reflect:!0,attribute:!0})],At.prototype,"showfullscreen",2);qt([x()],At.prototype,"hasAnalysis",2);qt([x()],At.prototype,"hasGraph",2);qt([x()],At.prototype,"tool",2);qt([x()],At.prototype,"isSequence",2);qt([m()],At.prototype,"author",2);qt([m()],At.prototype,"recorded",2);qt([m()],At.prototype,"license",2);qt([m()],At.prototype,"label",2);qt([x()],At.prototype,"contentContainerWidth",2);At=qt([J("desktop-app")],At);var Qm=Object.defineProperty,Jm=Object.getOwnPropertyDescriptor,ev=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qm(e,t,s),s};let bl=class extends Ge{render(){return this.url===""?F:v`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${be(this.from)}
        to=${be(this.to)}
        opacity=${be(this.opacity)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${Ke(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${be(this.visible)}
            analysis1=${be(this.analysis1)}
            analysis2=${be(this.analysis2)}
            analysis3=${be(this.analysis3)}
            analysis4=${be(this.analysis4)}
            analysis5=${be(this.analysis5)}
            analysis6=${be(this.analysis6)}
            analysis7=${be(this.analysis7)}
            speed=${be(this.speed)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${be(this.author)} 
              recorded=${be(this.recorded)} 
              license=${be(this.license)}
              label=${be(this.label)}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};bl=ev([J("thermal-file-analyser")],bl);var tv=Object.defineProperty,rv=Object.getOwnPropertyDescriptor,po=(r,e,t,i)=>{for(var s=i>1?void 0:i?rv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tv(e,t,s),s};let hs=class extends pt{constructor(){super(...arguments),this.dropinRef=He(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return v`

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

                            ${this.loaded===!0?v`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:F}

                            <file-dropin ${Ke(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};hs.styles=me`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;po([x()],hs.prototype,"dropinRef",2);po([x()],hs.prototype,"loaded",2);hs=po([J("thermal-dropin-app")],hs);var iv=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,$s=(r,e,t,i)=>{for(var s=i>1?void 0:i?sv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&iv(e,t,s),s};let Kr=class extends pt{render(){return F}};$s([m({type:String,reflect:!0,attribute:!0})],Kr.prototype,"thermal",2);$s([m({type:String,reflect:!0,attribute:!0})],Kr.prototype,"visible",2);$s([m({type:String,reflect:!0,attribute:!0})],Kr.prototype,"author",2);$s([m({type:String,reflect:!0,attribute:!0})],Kr.prototype,"note",2);Kr=$s([J("time-entry")],Kr);let nv=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof hi)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),h={label:a??"",info:o,from:i,to:n,files:[]};s=h,this.groups.set(i,h)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Nl(e).getTime():this.grouping==="day"?Xs(e).getTime():this.grouping==="week"?Pr(e).getTime():this.grouping==="month"?Zs(e).getTime():this.grouping==="year"?Ua(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Fl(e).getTime():this.grouping==="day"?Ul(e).getTime():this.grouping==="week"?Qs(e).getTime():this.grouping==="month"?Ks(e).getTime():this.grouping==="year"?Il(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:Qe(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:Qe(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+Qe(e,"w")+" of "+Qe(e,"yyyy"),info:[Xe.humanDate(Pr(e).getTime()),Xe.humanDate(Qs(e).getTime())].join(" - ")}:this.grouping==="month"?{label:Qe(e,"MMMM yyyy"),info:[Xe.humanDate(Zs(e).getTime()),Xe.humanDate(Ks(e).getTime())].join(" - ")}:this.grouping==="year"?{label:Qe(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?Xe.human(e):this.grouping==="hour"||this.grouping==="day"?Qe(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",Xe.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var av=Object.defineProperty,ov=Object.getOwnPropertyDescriptor,or=(r,e,t,i)=>{for(var s=i>1?void 0:i?ov(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&av(e,t,s),s};let Rt=class extends pt{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){const i=Cn(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new nv(this,i),setTimeout(()=>{this.log("--------",this.grouper),this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof Kr))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return v`
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

        `}};Rt.styles=me`

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
    
    `;or([x(),Zr({slot:"entry",flatten:!0})],Rt.prototype,"entries",2);or([x()],Rt.prototype,"groups",2);or([x()],Rt.prototype,"instances",2);or([m()],Rt.prototype,"columns",2);or([m()],Rt.prototype,"breakpoint",2);or([m({type:Number,reflect:!0})],Rt.prototype,"width",2);or([m({type:String,reflect:!0})],Rt.prototype,"grouping",2);or([m()],Rt.prototype,"name",2);or([m()],Rt.prototype,"slug",2);or([x()],Rt.prototype,"scopeSlug",2);Rt=or([J("time-group")],Rt);var lv=Object.defineProperty,hv=Object.getOwnPropertyDescriptor,ei=(r,e,t,i)=>{for(var s=i>1?void 0:i?hv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lv(e,t,s),s};let br=class extends pt{constructor(){super(...arguments),this.registryProviderRef=He(),this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback(),console.log("connected",this.entries)}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof Rt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return v`
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
        `}};br.styles=me`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;ei([m()],br.prototype,"slug",2);ei([m({type:String,reflect:!0})],br.prototype,"grouping",2);ei([m({type:String,reflect:!0})],br.prototype,"columns",2);ei([m({type:Number,reflect:!0})],br.prototype,"breakpoint",2);ei([m({type:String,reflect:!0})],br.prototype,"groups",2);ei([m({type:String,reflect:!0})],br.prototype,"autogroups",2);ei([Zr({flatten:!0}),x()],br.prototype,"entries",2);br=ei([J("time-app")],br);var cv=Object.defineProperty,uv=Object.getOwnPropertyDescriptor,Un=(r,e,t,i)=>{for(var s=i>1?void 0:i?uv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cv(e,t,s),s};let Ti=class extends ui{connectedCallback(){super.connectedCallback(),this.renderRoot}render(){return v`
            <file-mirror .file=${this.file}>

                <div class="file-title">
                    ${this.label}
                </div>

                <file-canvas></file-canvas>

                <file-timeline></file-timeline>                            <file-analysis-table></file-analysis-table>
            </file-mirror>
        `}};Ti.styles=me`

        :host {
            display: block;
        }
    
        .file-title {
            background: var(--thermal-slate);
            color: var(--thermal-foreground);
        }

    `;Un([m({type:Object})],Ti.prototype,"file",2);Un([m({type:String})],Ti.prototype,"innerHtml",2);Un([m({type:String})],Ti.prototype,"label",2);Ti=Un([J("time-group-item")],Ti);var dv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,lr=(r,e,t,i)=>{for(var s=i>1?void 0:i?pv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dv(e,t,s),s};let Gt=class extends pt{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return v`

            ${e?v`<h3 class="row-title">${e}</h3>`:F}

            ${t?v`<p>${t}</p>`:F}

            <section class=${Nt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:h})=>v`<time-group-item .file=${a} .innerHtml=${o} .label=${h}></time-group-item>`)}
            
            </section>
        
        `}};Gt.styles=me`

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

    `;lr([m()],Gt.prototype,"columns",2);lr([m()],Gt.prototype,"breakpoint",2);lr([m({type:Object})],Gt.prototype,"files",2);lr([m({type:String})],Gt.prototype,"label",2);lr([m({type:String})],Gt.prototype,"info",2);lr([m({type:Number})],Gt.prototype,"from",2);lr([m({type:Number})],Gt.prototype,"to",2);lr([m({type:Number})],Gt.prototype,"cursor",2);lr([m({type:String})],Gt.prototype,"grouping",2);lr([x()],Gt.prototype,"collapsed",2);Gt=lr([J("time-group-row")],Gt);class fv{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof hi)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{console.log("hotovost...",this.records),this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),h={label:a??"",info:o,from:i,to:n,files:[]};s=h,this.groups.set(i,h)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values()),this.element.log("______________",this.element.groups)}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Nl(e).getTime():this.grouping==="day"?Xs(e).getTime():this.grouping==="week"?Pr(e).getTime():this.grouping==="month"?Zs(e).getTime():this.grouping==="year"?Ua(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Fl(e).getTime():this.grouping==="day"?Ul(e).getTime():this.grouping==="week"?Qs(e).getTime():this.grouping==="month"?Ks(e).getTime():this.grouping==="year"?Il(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:Qe(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:Qe(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+Qe(e,"w")+" of "+Qe(e,"yyyy"),info:[Xe.humanDate(Pr(e).getTime()),Xe.humanDate(Qs(e).getTime())].join(" - ")}:this.grouping==="month"?{label:Qe(e,"MMMM yyyy"),info:[Xe.humanDate(Zs(e).getTime()),Xe.humanDate(Ks(e).getTime())].join(" - ")}:this.grouping==="year"?{label:Qe(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?Xe.human(e):this.grouping==="hour"||this.grouping==="day"?Qe(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",Xe.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var gv=Object.defineProperty,mv=Object.getOwnPropertyDescriptor,_r=(r,e,t,i)=>{for(var s=i>1?void 0:i?mv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gv(e,t,s),s};let Jt=class extends pt{constructor(){super(...arguments),this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[]}connectedCallback(){super.connectedCallback();const t=Cn(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug);this.group=t,this.grouper=new fv(this,t)}firstUpdated(r){super.firstUpdated(r),this.grouper.processEntries(this.entries.filter(e=>e instanceof Kr))}updated(r){super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return v`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}">

                    <group-provider slug="${this.slug}">

                        <thermal-app
                            author=${be(this.author)}
                            license=${be(this.license)}
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

                                    <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{this.columns=parseInt(r.target.value)}}></input>

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
                                                    <thermal-button @click=${()=>this.grouper.forEveryInstance(r=>r.export.canvasAsPng())}>PNG of individual images</thermal-button>
                                                    <small>Download all images within this group as PNG</small>
                                                </div>

                                                <div slot="option">

                                                    <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({columns:this.columns})}>PNG of the entire group</thermal-button>
                                                    <small>Download one image with all images and their analysis value</small>
                                                </div>


                                                <div slot="option">
                                                    <thermal-button @click=${()=>{this.group.analysisSync.export.downloadAsCsv()}}>CSV of analysis data</thermal-button>
                                                    <small>Download one image with all images and their analysis value</small>
                                                </div>

                                            </thermal-dropdown>
                                        `:F}

                                </thermal-bar>

                            </div>


                            <registry-histogram></registry-histogram>
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>

                            <div class="app-content">

                                ${this.groups.map(r=>{var n,a;const e=r.label.trim().length>0?r.label.trim():void 0,t=((n=r.info)==null?void 0:n.trim())!==""?(a=r.info)==null?void 0:a.trim():void 0,i={"group-files":!0,[`group-files-${this.columns}`]:!0},s={group:!0,group__bordered:this.grouping!=="none"};return v`
                                    <div class=${Nt(s)}>

                                        ${e||t?v`
                                                <div class="group-header">

                                                    ${e?v`<h2 class="group-title">${e}</h2>`:F}

                                                    ${t?v`<p class="group-info">${t}</p>`:F}

                                                </div>
                                            `:F}

                                        

                                        <section class=${Nt(i)}>

                                            ${r.files.map(({instance:o,innerHtml:h,label:u})=>v`
                                                
                                                    <div class="file">

                                                        <article>

                                                            <file-mirror .file=${o}>

                                                                <div class="file-title">
                                                                    <h3><span>${u}</span></h3>
                                                                    <div>
                                                                        ${h?v`<thermal-dialog label="Note for ${u}">
                                                                            <button slot="invoker" class="file-info-button" role="button">note</button>
                                                                            <div slot="content">${zt(h)}</div>
                                                                        </thermal-dialog>`:F}
                                                                        <button 
                                                                            class="file-info-button" 
                                                                            role="button"
                                                                            @click=${()=>o.export.canvasAsPng()}
                                                                        >png</button>
                                                                        <file-info-button>
                                                                            <button slot="invoker" class="file-info-button" role="button">info</button>
                                                                        </file-info-button>
                                                                    </div>
                                                                </div>

                                                                <file-canvas></file-canvas>
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
        
        `}};Jt.styles=me`


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


    
    `;_r([m({type:String,reflect:!0})],Jt.prototype,"author",2);_r([m({type:String,reflect:!0})],Jt.prototype,"label",2);_r([m({type:String,reflect:!0})],Jt.prototype,"license",2);_r([x(),Zr({slot:"entry",flatten:!0})],Jt.prototype,"entries",2);_r([m()],Jt.prototype,"slug",2);_r([m()],Jt.prototype,"columns",2);_r([m()],Jt.prototype,"breakpoint",2);_r([m({type:String,reflect:!0})],Jt.prototype,"grouping",2);_r([x()],Jt.prototype,"groups",2);Jt=_r([J("thermal-group-app")],Jt);var vv=Object.defineProperty,yv=Object.getOwnPropertyDescriptor,fo=(r,e,t,i)=>{for(var s=i>1?void 0:i?yv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vv(e,t,s),s};let cn=class extends pt{connectedCallback(){super.connectedCallback();const r=Math.random().toString(),t=this.group.registry.manager.addOrGetRegistry(r);this.localGroup=t.groups.addOrGetGroup(r)}render(){var e,t,i,s;const r=this.localGroup!==void 0;return v`

            ${r?v`
                    <manager-mirror 
                        slug=${this.localGroup.registry.manager.id}
                        palette=${this.localGroup.registry.palette.value}
                    >
                        <registry-mirror 
                            slug=${this.localGroup.registry.id} 
                            from=${be((t=(e=this.localGroup)==null?void 0:e.registry.range.value)==null?void 0:t.from)}
                            to=${be((s=(i=this.localGroup)==null?void 0:i.registry.range.value)==null?void 0:s.to)}
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
                `:F}
            
        
        `}};fo([m({type:Object})],cn.prototype,"group",2);fo([x()],cn.prototype,"localGroup",2);cn=fo([J("group-export-layout")],cn);const ya=window.matchMedia("(prefers-color-scheme: dark)"),go="thermal-dark-mode",wl=()=>{document.body.classList.add(go)},bv=()=>{document.body.classList.remove(go)},wv=()=>{ya.matches&&wl();const r=e=>{e.matches?wl():bv()};ya.addEventListener("change",r),ya.addListener(r)},xv=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)},Sv=La.toString().replaceAll(".","-"),_v=r=>`thermal__${r}__${Sv}`,xl=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",_v(r)),t.innerHTML=e,document.head.appendChild(t)},$v=()=>{xl("rootVariables",`

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


            
        
        `),xl("darkModeOverrides",`
        
            body.${go} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};xv();console.info(`@labir/embed ${La}
Author: ${uc}`);wv();$v();document.addEventListener("DOMContentLoaded",()=>{});
