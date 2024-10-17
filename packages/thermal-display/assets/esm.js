
var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function e(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}var i=e,s=r;function n(t){if(i===setTimeout)return setTimeout(t,0);if((i===e||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}"function"==typeof t.setTimeout&&(i=setTimeout),"function"==typeof t.clearTimeout&&(s=clearTimeout);var a,o=[],l=!1,h=-1;function c(){l&&a&&(l=!1,a.length?o=a.concat(o):h=-1,o.length&&d())}function d(){if(!l){var t=n(c);l=!0;for(var e=o.length;e;){for(a=o,o=[];++h<e;)a&&a[h].run();h=-1,e=o.length}a=null,l=!1,function(t){if(s===clearTimeout)return clearTimeout(t);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{return s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}(t)}}function u(t,e){this.fun=t,this.array=e}u.prototype.run=function(){this.fun.apply(null,this.array)};function p(){}var g=p,m=p,f=p,v=p,y=p,b=p,w=p;var x=t.performance||{},k=x.now||x.mozNow||x.msNow||x.oNow||x.webkitNow||function(){return(new Date).getTime()};var S=new Date;var C={nextTick:function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];o.push(new u(t,e)),1!==o.length||l||n(d)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:g,addListener:m,once:f,off:v,removeListener:y,removeAllListeners:b,emit:w,binding:function(t){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(t){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(t){var e=.001*k.call(x),r=Math.floor(e),i=Math.floor(e%1*1e9);return t&&(r-=t[0],(i-=t[1])<0&&(r--,i+=1e9)),[r,i]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-S)/1e3}},$="/app/.cache/npm/@labir@@embed@1.2.46/dist",_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},A={},P=Object.defineProperty,O=(t,e,r)=>(((t,e,r)=>{e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r})(t,"symbol"!=typeof e?e+"":e,r),r);const E="1.2.45",D=globalThis,L=D.ShadowRoot&&(void 0===D.ShadyCSS||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),T=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let M=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(L&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=T.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&T.set(e,t))}return t}toString(){return this.cssText}};const U=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new M(r,t,R)},I=L?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new M("string"==typeof t?t:t+"",void 0,R))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:j,defineProperty:F,getOwnPropertyDescriptor:N,getOwnPropertyNames:W,getOwnPropertySymbols:H,getPrototypeOf:z}=Object,B=globalThis,V=B.trustedTypes,G=V?V.emptyScript:"",Y=B.reactiveElementPolyfillSupport,q=(t,e)=>t,X={toAttribute(t,e){switch(e){case Boolean:t=t?G:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Z=(t,e)=>!j(t,e),K={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),B.litPropertyMetadata??(B.litPropertyMetadata=new WeakMap);let Q=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&F(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:s}=N(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const n=null==i?void 0:i.call(this);s.call(this,e),this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const t=z(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const t=this.properties,e=[...W(t),...H(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(I(t))}else void 0!==t&&e.push(I(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(L)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),i=D.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==(null==(r=i.converter)?void 0:r.toAttribute)?i.converter:X).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(r=t.converter)?void 0:r.fromAttribute)?t.converter:X;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Z)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}};Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[q("elementProperties")]=new Map,Q[q("finalized")]=new Map,null==Y||Y({ReactiveElement:Q}),(B.reactiveElementVersions??(B.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J=globalThis,tt=J.trustedTypes,et=tt?tt.createPolicy("lit-html",{createHTML:t=>t}):void 0,rt="$lit$",it=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+it,nt=`<${st}>`,at=document,ot=()=>at.createComment(""),lt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ht=Array.isArray,ct="[ \t\n\f\r]",dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,pt=/>/g,gt=RegExp(`>|${ct}(?:([^\\s"'>=/]+)(${ct}*=${ct}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,ft=/"/g,vt=/^(?:script|style|textarea|title)$/i,yt=(St=1,(t,...e)=>({_$litType$:St,strings:t,values:e})),bt=Symbol.for("lit-noChange"),wt=Symbol.for("lit-nothing"),xt=new WeakMap,kt=at.createTreeWalker(at,129);var St;function Ct(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==et?et.createHTML(e):e}let $t=class t{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,c]=((t,e)=>{const r=t.length-1,i=[];let s,n=2===e?"<svg>":"",a=dt;for(let e=0;e<r;e++){const r=t[e];let o,l,h=-1,c=0;for(;c<r.length&&(a.lastIndex=c,l=a.exec(r),null!==l);)c=a.lastIndex,a===dt?"!--"===l[1]?a=ut:void 0!==l[1]?a=pt:void 0!==l[2]?(vt.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=gt):void 0!==l[3]&&(a=gt):a===gt?">"===l[0]?(a=s??dt,h=-1):void 0===l[1]?h=-2:(h=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?gt:'"'===l[3]?ft:mt):a===ft||a===mt?a=gt:a===ut||a===pt?a=dt:(a=gt,s=void 0);const d=a===gt&&t[e+1].startsWith("/>")?" ":"";n+=a===dt?r+nt:h>=0?(i.push(o),r.slice(0,h)+rt+r.slice(h)+it+d):r+it+(-2===h?e:d)}return[Ct(t,n+(t[r]||"<?>")+(2===e?"</svg>":"")),i]})(e,r);if(this.el=t.createElement(h,i),kt.currentNode=this.el.content,2===r){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=kt.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(rt)){const e=c[a++],r=s.getAttribute(t).split(it),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:i[2],strings:r,ctor:"."===i[1]?Ot:"?"===i[1]?Et:"@"===i[1]?Dt:Pt}),s.removeAttribute(t)}else t.startsWith(it)&&(l.push({type:6,index:n}),s.removeAttribute(t));if(vt.test(s.tagName)){const t=s.textContent.split(it),e=t.length-1;if(e>0){s.textContent=tt?tt.emptyScript:"";for(let r=0;r<e;r++)s.append(t[r],ot()),kt.nextNode(),l.push({type:2,index:++n});s.append(t[e],ot())}}}else if(8===s.nodeType)if(s.data===st)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(it,t+1));)l.push({type:7,index:n}),t+=it.length-1}n++}}static createElement(t,e){const r=at.createElement("template");return r.innerHTML=t,r}};function _t(t,e,r=t,i){var s,n;if(e===bt)return e;let a=void 0!==i?null==(s=r._$Co)?void 0:s[i]:r._$Cl;const o=lt(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==o&&(null==(n=null==a?void 0:a._$AO)||n.call(a,!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,r,i)),void 0!==i?(r._$Co??(r._$Co=[]))[i]=a:r._$Cl=a),void 0!==a&&(e=_t(t,a._$AS(t,e.values),a,i)),e}class At{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=wt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_t(this,t,e),lt(t)?t===wt||null==t||""===t?(this._$AH!==wt&&this._$AR(),this._$AH=wt):t!==this._$AH&&t!==bt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>ht(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==wt&&lt(this._$AH)?this._$AA.nextSibling.data=t:this.T(at.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=$t.createElement(Ct(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===s)this._$AH.p(r);else{const t=new class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((null==t?void 0:t.creationScope)??at).importNode(e,!0);kt.currentNode=i;let s=kt.nextNode(),n=0,a=0,o=r[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new At(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new Lt(s,this,t)),this._$AV.push(e),o=r[++a]}n!==(null==o?void 0:o.index)&&(s=kt.nextNode(),n++)}return kt.currentNode=at,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}(s,this),e=t.u(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=xt.get(t.strings);return void 0===e&&xt.set(t.strings,e=new $t(t)),e}k(t){ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new At(this.S(ot()),this.S(ot()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null==(r=this._$AP)||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}let Pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=wt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=wt}_$AI(t,e=this,r,i){const s=this.strings;let n=!1;if(void 0===s)t=_t(this,t,e,0),n=!lt(t)||t!==this._$AH&&t!==bt,n&&(this._$AH=t);else{const i=t;let a,o;for(t=s[0],a=0;a<s.length-1;a++)o=_t(this,i[r+a],e,a),o===bt&&(o=this._$AH[a]),n||(n=!lt(o)||o!==this._$AH[a]),o===wt?t=wt:t!==wt&&(t+=(o??"")+s[a+1]),this._$AH[a]=o}n&&!i&&this.j(t)}j(t){t===wt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ot=class extends Pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===wt?void 0:t}};class Et extends Pt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==wt)}}class Dt extends Pt{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=_t(this,t,e,0)??wt)===bt)return;const r=this._$AH,i=t===wt&&r!==wt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==wt&&(r===wt||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}let Lt=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){_t(this,t)}};const Rt=J.litHtmlPolyfillSupport;null==Rt||Rt($t,At),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.1.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Tt=class extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=(null==r?void 0:r.renderBefore)??e;let s=i._$litPart$;if(void 0===s){const t=(null==r?void 0:r.renderBefore)??null;i._$litPart$=s=new At(e.insertBefore(ot(),t),t,void 0,r??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return bt}};var Mt;Tt._$litElement$=!0,Tt.finalized=!0,null==(Mt=globalThis.litElementHydrateSupport)||Mt.call(globalThis,{LitElement:Tt});const Ut=globalThis.litElementPolyfillSupport;null==Ut||Ut({LitElement:Tt}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It=t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,jt={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Z},Ft=(t=jt,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const s=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,s,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=r;return function(r){const s=this[i];e.call(this,r),this.requestUpdate(i,s,t)}}throw Error("Unsupported decorator location: "+i)};function Nt(t){return(e,r)=>"object"==typeof r?Ft(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Wt(t){return Nt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ht(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return((t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,r),r))(e,r,{get(){var e;const r=null==(e=this.renderRoot)?void 0:e.querySelector(n),i=(null==r?void 0:r.assignedElements(t))??[];return void 0===s?i:i.filter((t=>t.matches(s)))}})}}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const zt={};
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Bt(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Vt(t){return-1===t.toString().indexOf("`")}Vt((t=>t``))||Vt((t=>t`\0`))||Vt((t=>t`\n`))||Vt((t=>t`\u0000`)),Bt``&&Bt`\0`&&Bt`\n`&&Bt`\u0000`
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */;let Gt,Yt="google#safe";function qt(){var t;return null!==(t=function(){if(typeof window<"u")return window.trustedTypes}())&&void 0!==t?t:null}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
class Xt{constructor(t,e){this.privateDoNotAccessOrElseWrappedResourceUrl=t}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Zt(t){var e;const r=t,i=null===(e=function(){var t,e;if(void 0===Gt)try{Gt=null!==(e=null===(t=qt())||void 0===t?void 0:t.createPolicy(Yt,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))&&void 0!==e?e:null}catch{Gt=null}return Gt}())||void 0===e?void 0:e.createScriptURL(r);return i??new Xt(r,zt)}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
function Kt(t,...e){if(0===e.length)return Zt(t[0]);t[0].toLowerCase();let r=t[0];for(let i=0;i<e.length;i++)r+=encodeURIComponent(e[i])+t[i+1];return Zt(r)}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Qt(t,e,r){t.src=function(t){var e;if(null!==(e=qt())&&void 0!==e&&e.isScriptURL(t))return t;if(t instanceof Xt)return t.privateDoNotAccessOrElseWrappedResourceUrl;throw new Error("")}(e),function(t){const e=function(t){var e;const r=t.document,i=null===(e=r.querySelector)||void 0===e?void 0:e.call(r,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}(t.ownerDocument&&t.ownerDocument.defaultView||window);e&&t.setAttribute("nonce",e)}(t)
/**
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
 */}const Jt=new Promise(((t,e)=>{if(typeof google<"u"&&google.charts&&"function"==typeof google.charts.load)t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Qt(r,Kt`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}}));async function te(t={}){await Jt;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function ee(t){if(await te(),null==t)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw 0===t.length?new Error("Data was empty."):new Error("Data format was not recognized.")}
/**
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
 */
var re=function(t,e,r,i){var s,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,r,a):s(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};const ie=["ready","select"],se={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class ne extends Tt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return yt`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){(async function(t){return await te(),new google.visualization.ChartWrapper({container:t})})(this.shadowRoot.getElementById("chartdiv")).then((t=>{this.chartWrapper=t,this.typeChanged(),google.visualization.events.addListener(t,"ready",(()=>{this.drawn=!0,this.selection&&this.selectionChanged()})),google.visualization.events.addListener(t,"select",(()=>{this.selection=t.getChart().getSelection()})),this.propagateEvents(ie,t)}))}updated(t){t.has("type")&&this.typeChanged(),(t.has("rows")||t.has("cols"))&&this.rowsOrColumnsChanged(),t.has("data")&&this.dataChanged(),t.has("view")&&this.viewChanged(),(t.has("_data")||t.has("options"))&&this.redraw(),t.has("selection")&&this.selectionChanged()}typeChanged(){if(null==this.chartWrapper)return;this.chartWrapper.setChartType(se[this.type]||this.type);const t=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",(()=>{const e=this.chartWrapper.getChart();e!==t&&this.propagateEvents(this.events.filter((t=>!ie.includes(t))),e);const r=this.shadowRoot.getElementById("styles");r.children.length||this.localizeGlobalStylesheets(r)})),this.redraw()}propagateEvents(t,e){for(const r of t)google.visualization.events.addListener(e,r,(t=>{this.dispatchEvent(new CustomEvent(`google-chart-${r}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:t}}))}))}selectionChanged(){if(null==this.chartWrapper)return;const t=this.chartWrapper.getChart();if(null!=t&&t.setSelection){if("timeline"===this.type){const e=JSON.stringify(t.getSelection());if(JSON.stringify(this.selection)===e)return}t.setSelection(this.selection)}}redraw(){null==this.chartWrapper||null==this._data||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,void 0!==this.redrawTimeoutId&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout((()=>{this.chartWrapper.draw()}),5))}get imageURI(){if(null==this.chartWrapper)return null;const t=this.chartWrapper.getChart();return t&&t.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:t,cols:e}=this;if(t&&e)try{const r=await ee({cols:e});r.addRows(t),this._data=r}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let t,e=this.data;if(!e)return;let r=!1;try{e=JSON.parse(e)}catch{r="string"==typeof e||e instanceof String}t=r?fetch(e).then((t=>t.json())):Promise.resolve(e),t.then(ee).then((t=>{this._data=t}))}localizeGlobalStylesheets(t){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const r of e){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href",r.getAttribute("href")),t.appendChild(e)}}}ne.styles=U`
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
  `,re([Nt({type:String,reflect:!0})],ne.prototype,"type",void 0),re([Nt({type:Array})],ne.prototype,"events",void 0),re([Nt({type:Object,hasChanged:()=>!0})],ne.prototype,"options",void 0),re([Nt({type:Array})],ne.prototype,"cols",void 0),re([Nt({type:Array})],ne.prototype,"rows",void 0),re([Nt({type:String})],ne.prototype,"data",void 0),re([Nt({type:Object})],ne.prototype,"view",void 0),re([Nt({type:Array})],ne.prototype,"selection",void 0),re([Nt({type:Object})],ne.prototype,"_data",void 0),customElements.define("google-chart",ne);
/**
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
 */
const ae=new Promise(((t,e)=>{if(typeof google<"u"&&google.charts&&"function"==typeof google.charts.load)t();else{let r=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');r||(r=document.createElement("script"),Qt(r,Kt`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(r)),r.addEventListener("load",t),r.addEventListener("error",e)}}));async function oe(t={}){await ae;const{version:e="current",packages:r=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=t;return google.charts.load(e,{packages:r,language:i,mapsApiKey:s})}async function le(t){if(await oe(),null==t)return new google.visualization.DataTable;if(t.getNumberOfRows)return t;if(t.cols)return new google.visualization.DataTable(t);if(t.length>0)return google.visualization.arrayToDataTable(t);throw 0===t.length?new Error("Data was empty."):new Error("Data format was not recognized.")}function he(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function ce(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const de=6048e5,ue=864e5;let pe={};function ge(){return pe}function me(t,e){var r,i,s,n;const a=ge(),o=(null==e?void 0:e.weekStartsOn)??(null==(i=null==(r=null==e?void 0:e.locale)?void 0:r.options)?void 0:i.weekStartsOn)??a.weekStartsOn??(null==(n=null==(s=a.locale)?void 0:s.options)?void 0:n.weekStartsOn)??0,l=he(t),h=l.getDay(),c=(h<o?7:0)+h-o;return l.setDate(l.getDate()-c),l.setHours(0,0,0,0),l}function fe(t){return me(t,{weekStartsOn:1})}function ve(t){const e=he(t),r=e.getFullYear(),i=ce(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=fe(i),n=ce(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=fe(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function ye(t){const e=he(t);return e.setHours(0,0,0,0),e}function be(t){const e=he(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function we(t){if(!function(t){return t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;const e=he(t);return!isNaN(Number(e))}const xe={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function ke(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const Se={date:ke({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ke({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ke({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Ce={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function $e(t){return(e,r)=>{let i;if("formatting"===(null!=r&&r.context?String(r.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,s=null!=r&&r.width?String(r.width):e;i=t.formattingValues[s]||t.formattingValues[e]}else{const e=t.defaultWidth,s=null!=r&&r.width?String(r.width):t.defaultWidth;i=t.values[s]||t.values[e]}return i[t.argumentCallback?t.argumentCallback(e):e]}}const _e={ordinalNumber:(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:$e({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:$e({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:$e({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:$e({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:$e({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function Ae(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(o)?function(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}(o,(t=>t.test(a))):function(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}(o,(t=>t.test(a)));let h;h=t.valueCallback?t.valueCallback(l):l,h=r.valueCallback?r.valueCallback(h):h;return{value:h,rest:e.slice(a.length)}}}const Pe={ordinalNumber:function(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;return{value:a,rest:e.slice(s.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:Ae({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Ae({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:Ae({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Ae({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Ae({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},Oe={code:"en-US",formatDistance:(t,e,r)=>{let i;const s=xe[t];return i="string"==typeof s?s:1===e?s.one:s.other.replace("{{count}}",e.toString()),null!=r&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i},formatLong:Se,formatRelative:(t,e,r,i)=>Ce[t],localize:_e,match:Pe,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ee(t){const e=he(t);return function(t,e){const r=ye(t),i=ye(e),s=+r-be(r),n=+i-be(i);return Math.round((s-n)/ue)}(e,function(t){const e=he(t),r=ce(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}(e))+1}function De(t){const e=he(t),r=+fe(e)-+function(t){const e=ve(t),r=ce(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),fe(r)}(e);return Math.round(r/de)+1}function Le(t,e){var r,i,s,n;const a=he(t),o=a.getFullYear(),l=ge(),h=(null==e?void 0:e.firstWeekContainsDate)??(null==(i=null==(r=null==e?void 0:e.locale)?void 0:r.options)?void 0:i.firstWeekContainsDate)??l.firstWeekContainsDate??(null==(n=null==(s=l.locale)?void 0:s.options)?void 0:n.firstWeekContainsDate)??1,c=ce(t,0);c.setFullYear(o+1,0,h),c.setHours(0,0,0,0);const d=me(c,e),u=ce(t,0);u.setFullYear(o,0,h),u.setHours(0,0,0,0);const p=me(u,e);return a.getTime()>=d.getTime()?o+1:a.getTime()>=p.getTime()?o:o-1}function Re(t,e){const r=he(t),i=+me(r,e)-+function(t,e){var r,i,s,n;const a=ge(),o=(null==e?void 0:e.firstWeekContainsDate)??(null==(i=null==(r=null==e?void 0:e.locale)?void 0:r.options)?void 0:i.firstWeekContainsDate)??a.firstWeekContainsDate??(null==(n=null==(s=a.locale)?void 0:s.options)?void 0:n.firstWeekContainsDate)??1,l=Le(t,e),h=ce(t,0);return h.setFullYear(l,0,o),h.setHours(0,0,0,0),me(h,e)}(r,e);return Math.round(i/de)+1}function Te(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const Me={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return Te("yy"===e?i%100:i,e.length)},M(t,e){const r=t.getMonth();return"M"===e?String(r+1):Te(r+1,2)},d:(t,e)=>Te(t.getDate(),e.length),a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];default:return"am"===r?"a.m.":"p.m."}},h:(t,e)=>Te(t.getHours()%12||12,e.length),H:(t,e)=>Te(t.getHours(),e.length),m:(t,e)=>Te(t.getMinutes(),e.length),s:(t,e)=>Te(t.getSeconds(),e.length),S(t,e){const r=e.length,i=t.getMilliseconds();return Te(Math.trunc(i*Math.pow(10,r-3)),e.length)}},Ue="midnight",Ie="noon",je="morning",Fe="afternoon",Ne="evening",We="night",He={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if("yo"===e){const e=t.getFullYear(),i=e>0?e:1-e;return r.ordinalNumber(i,{unit:"year"})}return Me.y(t,e)},Y:function(t,e,r,i){const s=Le(t,i),n=s>0?s:1-s;if("YY"===e){return Te(n%100,2)}return"Yo"===e?r.ordinalNumber(n,{unit:"year"}):Te(n,e.length)},R:function(t,e){return Te(ve(t),e.length)},u:function(t,e){return Te(t.getFullYear(),e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return Te(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return Te(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Me.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return Te(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Re(t,i);return"wo"===e?r.ordinalNumber(s,{unit:"week"}):Te(s,e.length)},I:function(t,e,r){const i=De(t);return"Io"===e?r.ordinalNumber(i,{unit:"week"}):Te(i,e.length)},d:function(t,e,r){return"do"===e?r.ordinalNumber(t.getDate(),{unit:"date"}):Me.d(t,e)},D:function(t,e,r){const i=Ee(t);return"Do"===e?r.ordinalNumber(i,{unit:"dayOfYear"}):Te(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return Te(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return Te(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=0===i?7:i;switch(e){case"i":return String(s);case"ii":return Te(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(s=12===i?Ie:0===i?Ue:i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(s=i>=17?Ne:i>=12?Fe:i>=4?je:We,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),r.ordinalNumber(e,{unit:"hour"})}return Me.h(t,e)},H:function(t,e,r){return"Ho"===e?r.ordinalNumber(t.getHours(),{unit:"hour"}):Me.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return"Ko"===e?r.ordinalNumber(i,{unit:"hour"}):Te(i,e.length)},k:function(t,e,r){let i=t.getHours();return 0===i&&(i=24),"ko"===e?r.ordinalNumber(i,{unit:"hour"}):Te(i,e.length)},m:function(t,e,r){return"mo"===e?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Me.m(t,e)},s:function(t,e,r){return"so"===e?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Me.s(t,e)},S:function(t,e){return Me.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(0===i)return"Z";switch(e){case"X":return Be(i);case"XXXX":case"XX":return Ve(i);default:return Ve(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return Be(i);case"xxxx":case"xx":return Ve(i);default:return Ve(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ze(i,":");default:return"GMT"+Ve(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ze(i,":");default:return"GMT"+Ve(i,":")}},t:function(t,e,r){return Te(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,r){return Te(t.getTime(),e.length)}};function ze(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return 0===n?r+String(s):r+String(s)+e+Te(n,2)}function Be(t,e){return t%60==0?(t>0?"-":"+")+Te(Math.abs(t)/60,2):Ve(t,e)}function Ve(t,e=""){const r=t>0?"-":"+",i=Math.abs(t);return r+Te(Math.trunc(i/60),2)+e+Te(i%60,2)}const Ge=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Ye=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},qe={p:Ye,P:(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return Ge(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Ge(i,e)).replace("{{time}}",Ye(s,e))}},Xe=/^D+$/,Ze=/^Y+$/,Ke=["D","DD","YY","YYYY"];const Qe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Je=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tr=/^'([^]*?)'?$/,er=/''/g,rr=/[a-zA-Z]/;function ir(t,e,r){var i,s,n,a;const o=ge(),l=o.locale??Oe,h=o.firstWeekContainsDate??(null==(s=null==(i=o.locale)?void 0:i.options)?void 0:s.firstWeekContainsDate)??1,c=o.weekStartsOn??(null==(a=null==(n=o.locale)?void 0:n.options)?void 0:a.weekStartsOn)??0,d=he(t);if(!we(d))throw new RangeError("Invalid time value");let u=e.match(Je).map((t=>{const e=t[0];if("p"===e||"P"===e){return(0,qe[e])(t,l.formatLong)}return t})).join("").match(Qe).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:sr(t)};if(He[e])return{isToken:!0,value:t};if(e.match(rr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));l.localize.preprocessor&&(u=l.localize.preprocessor(d,u));const p={firstWeekContainsDate:h,weekStartsOn:c,locale:l};return u.map((r=>{if(!r.isToken)return r.value;const i=r.value;(function(t){return Ze.test(t)}(i)||function(t){return Xe.test(t)}(i))&&function(t,e,r){const i=function(t,e,r){const i="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,r);if(console.warn(i),Ke.includes(t))throw new RangeError(i)}(i,e,String(t));return(0,He[i[0]])(d,i,l.localize,p)})).join("")}function sr(t){const e=t.match(tr);return e?e[1].replace(er,"'"):t}function nr(t,e){const r=he(t);if(!we(r))throw new RangeError("Invalid time value");const i=(null==e?void 0:e.format)??"extended",s=(null==e?void 0:e.representation)??"complete";let n="";const a="extended"===i?"-":"",o="extended"===i?":":"";if("time"!==s){const t=Te(r.getDate(),2),e=Te(r.getMonth()+1,2);n=`${Te(r.getFullYear(),4)}${a}${e}${a}${t}`}if("date"!==s){n=`${n}${""===n?"":" "}${Te(r.getHours(),2)}${o}${Te(r.getMinutes(),2)}${o}${Te(r.getSeconds(),2)}`}return n}var ar={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},or=t=>Object.assign({},ar,t);class lr extends Error{constructor(t){super(t),this.name="CsvGenerationError"}}class hr extends Error{constructor(t){super(t),this.name="EmptyHeadersError"}}class cr extends Error{constructor(t){super(t),this.name="CsvDownloadEnvironmentError"}}class dr extends Error{constructor(t){super(t),this.name="UnsupportedDataFormatError"}}var ur=t=>t,pr=ur,gr=ur,mr=ur,fr=ur,vr=ur,yr=t=>fr("object"==typeof t?t.key:t),br=t=>vr("object"==typeof t?t.displayLabel:t),wr=t=>e=>gr(t+e+"\r\n"),xr=t=>(e,r)=>kr(t)(mr(e+r)),kr=t=>e=>e+t.fieldSeparator,Sr=(t,e)=>{if((t=>!(+t!==t||isFinite(t)&&!(t%1)))(e)){if("locale"===t.decimalSeparator)return pr(e.toLocaleString());if(t.decimalSeparator)return pr(e.toString().replace(".",t.decimalSeparator))}return pr(e.toString())},Cr=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf("\n")>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+function(t,e){return'"'==e&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t}(e,t.quoteCharacter)+t.quoteCharacter),pr(r)},$r=(t,e)=>{if("number"==typeof e)return Sr(t,e);if("string"==typeof e)return Cr(t,e);if("boolean"==typeof e&&t.boolDisplay)return((t,e)=>{const r=e?"true":"false";return pr(t.boolDisplay[r])})(t,e);if(null===e||typeof e>"u")return((t,e)=>typeof e>"u"&&void 0!==t.replaceUndefinedWith?Cr(t,t.replaceUndefinedWith+""):Cr(t,null===e?"null":""))(t,e);throw new dr(`\n    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.\n    Please convert the data in your object to one of those before generating the CSV.\n    `)},_r=t=>e=>{const r=or(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=((t,...e)=>e.reduce(((t,e)=>e(t)),t))(gr(""),(t=>e=>t.useBom?gr(e+"\ufeff"):e)(r),(t=>e=>t.showTitle?wr(gr(e+t.title))(mr("")):e)(r),((t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new hr("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=mr("");for(let r=0;r<e.length;r++){const s=br(e[r]);i=xr(t)(i,$r(t,s))}return i=mr(i.slice(0,-1)),wr(r)(i)})(r,i),((t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let i=mr("");for(let s=0;s<e.length;s++){const a=yr(e[s]),o=r[n][a];i=xr(t)(i,$r(t,o))}i=mr(i.slice(0,-1)),s=wr(s)(i)}return s})(r,i,e));if(s.length<1)throw new lr("Output is empty. Is your data formatted correctly?");return s},Ar=t=>e=>{if(!window)throw new cr("Downloading only supported in a browser environment.");const r=(t=>e=>{const r=e,i=or(t).useTextFile?"plain":"csv";return new Blob([r],{type:`text/${i};charset=utf8;`})})(t)(e),i=or(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof _<"u"||typeof self<"u"&&self;var Pr={exports:{}};const Or=function(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){return this instanceof t?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var i=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,i.get?i:{enumerable:!0,get:function(){return t[e]}})})),r}(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));
/**
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
 */!function(t){var e={},r={exports:{}};!function(t){var e=function(t){return typeof t<"u"&&null!=t.versions&&null!=t.versions.node&&t+""=="[object process]"};t.exports.isNode=e,t.exports.platform=typeof C<"u"&&e(C)?"node":"browser";var r="node"===t.exports.platform&&Or;t.exports.isMainThread="node"===t.exports.platform?(!r||r.isMainThread)&&!C.connected:typeof Window<"u",t.exports.cpus="browser"===t.exports.platform?self.navigator.hardwareConcurrency:Or.cpus().length}(r);var i,s=r.exports,n={};function a(){if(i)return n;function t(i,n){var a=this;if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof i)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var o=[],l=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var h=function(t,e){o.push(t),l.push(e)};this.then=function(r,i){return new t((function(t,s){var n=r?e(r,t,s):t,a=i?e(i,t,s):s;h(n,a)}),a)};var c=function(t){return a.resolved=!0,a.rejected=!1,a.pending=!1,o.forEach((function(e){e(t)})),h=function(e,r){e(t)},c=d=function(){},a},d=function(t){return a.resolved=!1,a.rejected=!0,a.pending=!1,l.forEach((function(e){e(t)})),h=function(e,r){r(t)},c=d=function(){},a};this.cancel=function(){return n?n.cancel():d(new r),a},this.timeout=function(t){if(n)n.timeout(t);else{var e=setTimeout((function(){d(new s("Promise timed out after "+t+" ms"))}),t);a.always((function(){clearTimeout(e)}))}return a},i((function(t){c(t)}),(function(t){d(t)}))}function e(t,e,r){return function(i){try{var s=t(i);s&&"function"==typeof s.then&&"function"==typeof s.catch?s.then(e,r):e(s)}catch(t){r(t)}}}function r(t){this.message=t||"promise cancelled",this.stack=(new Error).stack}function s(t){this.message=t||"timeout exceeded",this.stack=(new Error).stack}return i=1,t.prototype.catch=function(t){return this.then(null,t)},t.prototype.always=function(t){return this.then(t,t)},t.all=function(e){return new t((function(t,r){var i=e.length,s=[];i?e.forEach((function(e,n){e.then((function(e){s[n]=e,0==--i&&t(s)}),(function(t){i=0,r(t)}))})):t(s)}))},t.defer=function(){var e={};return e.promise=new t((function(t,r){e.resolve=t,e.reject=r})),e},r.prototype=new Error,r.prototype.constructor=Error,r.prototype.name="CancellationError",t.CancellationError=r,s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="TimeoutError",t.TimeoutError=s,n.Promise=t,n}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function l(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=m(t))||e){r&&(t=r);var i=0,s=function(){};return{s:s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){o=!0,n=t},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw n}}}}function h(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function p(t){var e=u(t,"string");return"symbol"==typeof e?e:e+""}function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}var f,v,y,b,w,x,k,S,_={exports:{}},A={};function P(){return f||(f=1,A.validateOptions=function(t,e,r){if(t){var i=t?Object.keys(t):[],s=i.find((function(t){return!e.includes(t)}));if(s)throw new Error('Object "'+r+'" contains an unknown option "'+s+'"');var n=e.find((function(t){return Object.prototype[t]&&!i.includes(t)}));if(n)throw new Error('Object "'+r+'" contains an inherited option "'+n+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return t}},A.workerOptsNames=["credentials","name","type"],A.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],A.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),A}function O(){return y||(y=1,v='!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error(\'Unknown method "\'+e.method+\'"\');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));\n//# sourceMappingURL=worker.min.js.map\n'),v}function E(){if(b)return _.exports;b=1;var t=a().Promise,e=s,r=P(),i=r.validateOptions,n=r.forkOptsNames,o=r.workerThreadOptsNames,h=r.workerOptsNames,c="__workerpool-terminate__";function u(){var t=m();if(!t)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return t}function p(){if("function"!=typeof Worker&&("object"!==(typeof Worker>"u"?"undefined":g(Worker))||"function"!=typeof Worker.prototype.constructor))throw new Error("WorkerPool: Web Workers not supported")}function m(){try{return Or}catch(t){if("object"===g(t)&&null!==t&&"MODULE_NOT_FOUND"===t.code)return null;throw t}}function f(){if("browser"===e.platform){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||"function"!=typeof window.URL.createObjectURL)throw new Error("URL.createObjectURL not supported by the browser");var t=new Blob([O()],{type:"text/javascript"});return window.URL.createObjectURL(t)}return $+"/worker.js"}function v(t,r){if("web"===r.workerType)return p(),y(t,r.workerOpts,Worker);if("thread"===r.workerType)return w(t,i=u(),r);if("process"===r.workerType||!r.workerType)return x(t,k(r),Or);if("browser"===e.platform)return p(),y(t,r.workerOpts,Worker);var i=m();return i?w(t,i,r):x(t,k(r),Or)}function y(t,e,r){i(e,h,"workerOpts");var s=new r(t,e);return s.isBrowserWorker=!0,s.on=function(t,e){this.addEventListener(t,(function(t){e(t.data)}))},s.send=function(t,e){this.postMessage(t,e)},s}function w(t,e,r){var s,n;i(null==r?void 0:r.workerThreadOpts,o,"workerThreadOpts");var a=new e.Worker(t,d({stdout:null!==(s=null==r?void 0:r.emitStdStreams)&&void 0!==s&&s,stderr:null!==(n=null==r?void 0:r.emitStdStreams)&&void 0!==n&&n},null==r?void 0:r.workerThreadOpts));return a.isWorkerThread=!0,a.send=function(t,e){this.postMessage(t,e)},a.kill=function(){return this.terminate(),!0},a.disconnect=function(){this.terminate()},null!=r&&r.emitStdStreams&&(a.stdout.on("data",(function(t){return a.emit("stdout",t)})),a.stderr.on("data",(function(t){return a.emit("stderr",t)}))),a}function x(t,e,r){i(e.forkOpts,n,"forkOpts");var s=r.fork(t,e.forkArgs,e.forkOpts),a=s.send;return s.send=function(t){return a.call(s,t)},e.emitStdStreams&&(s.stdout.on("data",(function(t){return s.emit("stdout",t)})),s.stderr.on("data",(function(t){return s.emit("stderr",t)}))),s.isChildProcess=!0,s}function k(t){t=t||{};var e=C.execArgv.join(" "),r=-1!==e.indexOf("--inspect"),i=-1!==e.indexOf("--debug-brk"),s=[];return r&&(s.push("--inspect="+t.debugPort),i&&s.push("--debug-brk")),C.execArgv.forEach((function(t){t.indexOf("--max-old-space-size")>-1&&s.push(t)})),Object.assign({},t,{forkArgs:t.forkArgs,forkOpts:Object.assign({},t.forkOpts,{execArgv:(t.forkOpts&&t.forkOpts.execArgv||[]).concat(s),stdio:t.emitStdStreams?"pipe":void 0})})}function S(t){for(var e=new Error(""),r=Object.keys(t),i=0;i<r.length;i++)e[r[i]]=t[r[i]];return e}function A(t,e){if(1===Object.keys(t.processing).length){var r=Object.values(t.processing)[0];r.options&&"function"==typeof r.options.on&&r.options.on(e)}}function E(t,e){var r=this,i=e||{};function s(t){for(var e in r.terminated=!0,r.processing)void 0!==r.processing[e]&&r.processing[e].resolver.reject(t);r.processing=Object.create(null)}function n(){var t,e=l(r.requestQueue.splice(0));try{for(e.s();!(t=e.n()).done;){var i=t.value;r.worker.send(i.message,i.transfer)}}catch(t){e.e(t)}finally{e.f()}}this.script=t||f(),this.worker=v(this.script,i),this.debugPort=i.debugPort,this.forkOpts=i.forkOpts,this.forkArgs=i.forkArgs,this.workerOpts=i.workerOpts,this.workerThreadOpts=i.workerThreadOpts,this.workerTerminateTimeout=i.workerTerminateTimeout,t||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",(function(t){A(r,{stdout:t.toString()})})),this.worker.on("stderr",(function(t){A(r,{stderr:t.toString()})})),this.worker.on("message",(function(t){if(!r.terminated)if("string"==typeof t&&"ready"===t)r.worker.ready=!0,n();else{var e=t.id,i=r.processing[e];void 0!==i&&(t.isEvent?i.options&&"function"==typeof i.options.on&&i.options.on(t.payload):(delete r.processing[e],!0===r.terminating&&r.terminate(),t.error?i.resolver.reject(S(t.error)):i.resolver.resolve(t.result)))}}));var a=this.worker;this.worker.on("error",s),this.worker.on("exit",(function(t,e){var i="Workerpool Worker terminated Unexpectedly\n";i+="    exitCode: `"+t+"`\n",i+="    signalCode: `"+e+"`\n",i+="    workerpool.script: `"+r.script+"`\n",i+="    spawnArgs: `"+a.spawnargs+"`\n",i+="    spawnfile: `"+a.spawnfile+"`\n",i+="    stdout: `"+a.stdout+"`\n",i+="    stderr: `"+a.stderr+"`\n",s(new Error(i))})),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return E.prototype.methods=function(){return this.exec("methods")},E.prototype.exec=function(e,r,i,s){i||(i=t.defer());var n=++this.lastId;this.processing[n]={id:n,resolver:i,options:s};var a={message:{id:n,method:e,params:r},transfer:s&&s.transfer};this.terminated?i.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(a.message,a.transfer):this.requestQueue.push(a);var o=this;return i.promise.catch((function(e){if(e instanceof t.CancellationError||e instanceof t.TimeoutError)return delete o.processing[n],o.terminateAndNotify(!0).then((function(){throw e}),(function(t){throw t}));throw e}))},E.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},E.prototype.terminate=function(t,e){var r=this;if(t){for(var i in this.processing)void 0!==this.processing[i]&&this.processing[i].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if("function"==typeof e&&(this.terminationHandler=e),this.busy())this.terminating=!0;else{var s=function(t){if(r.terminated=!0,r.cleaning=!1,null!=r.worker&&r.worker.removeAllListeners&&r.worker.removeAllListeners("message"),r.worker=null,r.terminating=!1,r.terminationHandler)r.terminationHandler(t,r);else if(t)throw t};if(this.worker){if("function"==typeof this.worker.kill){if(this.worker.killed)return void s(new Error("worker already killed!"));var n=setTimeout((function(){r.worker&&r.worker.kill()}),this.workerTerminateTimeout);return this.worker.once("exit",(function(){clearTimeout(n),r.worker&&(r.worker.killed=!0),s()})),this.worker.ready?this.worker.send(c):this.requestQueue.push({message:c}),void(this.cleaning=!0)}if("function"!=typeof this.worker.terminate)throw new Error("Failed to terminate worker");this.worker.terminate(),this.worker.killed=!0}s()}},E.prototype.terminateAndNotify=function(e,r){var i=t.defer();return r&&i.promise.timeout(r),this.terminate(e,(function(t,e){t?i.reject(t):i.resolve(e)})),i.promise},_.exports=E,_.exports._tryRequireWorkerThreads=m,_.exports._setupProcessWorker=x,_.exports._setupBrowserWorker=y,_.exports._setupWorkerThreadWorker=w,_.exports.ensureWorkerThreads=u,_.exports}function D(){if(x)return w;x=1;var t=65535;function e(){this.ports=Object.create(null),this.length=0}return w=e,e.prototype.nextAvailableStartingAt=function(e){for(;!0===this.ports[e];)e++;if(e>=t)throw new Error("WorkerPool debug port limit reached: "+e+">= "+t);return this.ports[e]=!0,this.length++,e},e.prototype.releasePort=function(t){delete this.ports[t],this.length--},w}function L(){if(S)return k;S=1;var t=a().Promise,e=E(),r=s,i=new(D());function n(t,i){"string"==typeof t?this.script=t||null:(this.script=null,i=t),this.workers=[],this.tasks=[],i=i||{},this.forkArgs=Object.freeze(i.forkArgs||[]),this.forkOpts=Object.freeze(i.forkOpts||{}),this.workerOpts=Object.freeze(i.workerOpts||{}),this.workerThreadOpts=Object.freeze(i.workerThreadOpts||{}),this.debugPortStart=i.debugPortStart||43210,this.nodeWorker=i.nodeWorker,this.workerType=i.workerType||i.nodeWorker||"auto",this.maxQueueSize=i.maxQueueSize||1/0,this.workerTerminateTimeout=i.workerTerminateTimeout||1e3,this.onCreateWorker=i.onCreateWorker||function(){return null},this.onTerminateWorker=i.onTerminateWorker||function(){return null},this.emitStdStreams=i.emitStdStreams||!1,i&&"maxWorkers"in i?(o(i.maxWorkers),this.maxWorkers=i.maxWorkers):this.maxWorkers=Math.max((r.cpus||4)-1,1),i&&"minWorkers"in i&&("max"===i.minWorkers?this.minWorkers=this.maxWorkers:(l(i.minWorkers),this.minWorkers=i.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),"thread"===this.workerType&&e.ensureWorkerThreads()}function o(t){if(!h(t)||!c(t)||t<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function l(t){if(!h(t)||!c(t)||t<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function h(t){return"number"==typeof t}function c(t){return Math.round(t)==t}return n.prototype.exec=function(e,r,i){if(r&&!Array.isArray(r))throw new TypeError('Array expected as argument "params"');if("string"==typeof e){var s=t.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var n=this.tasks,a={method:e,params:r,resolver:s,timeout:null,options:i};n.push(a);var o=s.promise.timeout;return s.promise.timeout=function(t){return-1!==n.indexOf(a)?(a.timeout=t,s.promise):o.call(s.promise,t)},this._next(),s.promise}if("function"==typeof e)return this.exec("run",[String(e),r],i);throw new TypeError('Function or string expected as argument "method"')},n.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var t=this;return this.exec("methods").then((function(e){var r={};return e.forEach((function(e){r[e]=function(){return t.exec(e,Array.prototype.slice.call(arguments))}})),r}))},n.prototype._next=function(){if(this.tasks.length>0){var t=this._getWorker();if(t){var e=this,r=this.tasks.shift();if(r.resolver.promise.pending){var i=t.exec(r.method,r.params,r.resolver,r.options).then(e._boundNext).catch((function(){if(t.terminated)return e._removeWorker(t)})).then((function(){e._next()}));"number"==typeof r.timeout&&i.timeout(r.timeout)}else e._next()}}},n.prototype._getWorker=function(){for(var t=this.workers,e=0;e<t.length;e++){var r=t[e];if(!1===r.busy())return r}return t.length<this.maxWorkers?(r=this._createWorkerHandler(),t.push(r),r):null},n.prototype._removeWorker=function(e){var r=this;return i.releasePort(e.debugPort),this._removeWorkerFromList(e),this._ensureMinWorkers(),new t((function(t,i){e.terminate(!1,(function(s){r.onTerminateWorker({forkArgs:e.forkArgs,forkOpts:e.forkOpts,workerThreadOpts:e.workerThreadOpts,script:e.script}),s?i(s):t(e)}))}))},n.prototype._removeWorkerFromList=function(t){var e=this.workers.indexOf(t);-1!==e&&this.workers.splice(e,1)},n.prototype.terminate=function(e,r){var s=this;this.tasks.forEach((function(t){t.resolver.reject(new Error("Pool terminated"))})),this.tasks.length=0;var n=function(t){i.releasePort(t.debugPort),this._removeWorkerFromList(t)}.bind(this),a=[];return this.workers.slice().forEach((function(t){var i=t.terminateAndNotify(e,r).then(n).always((function(){s.onTerminateWorker({forkArgs:t.forkArgs,forkOpts:t.forkOpts,workerThreadOpts:t.workerThreadOpts,script:t.script})}));a.push(i)})),t.all(a)},n.prototype.stats=function(){var t=this.workers.length,e=this.workers.filter((function(t){return t.busy()})).length;return{totalWorkers:t,busyWorkers:e,idleWorkers:t-e,pendingTasks:this.tasks.length,activeTasks:e}},n.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var t=this.workers.length;t<this.minWorkers;t++)this.workers.push(this._createWorkerHandler())},n.prototype._createWorkerHandler=function(){var t=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new e(t.script||this.script,{forkArgs:t.forkArgs||this.forkArgs,forkOpts:t.forkOpts||this.forkOpts,workerOpts:t.workerOpts||this.workerOpts,workerThreadOpts:t.workerThreadOpts||this.workerThreadOpts,debugPort:i.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})},k=n}var R,T,M,U={};function I(){if(T)return R;function t(t,e){this.message=t,this.transfer=e}return T=1,R=t}function j(){return M||(M=1,function(t){var e=I(),r="__workerpool-terminate__",i={exit:function(){}};if(typeof self<"u"&&"function"==typeof postMessage&&"function"==typeof addEventListener)i.on=function(t,e){addEventListener(t,(function(t){e(t.data)}))},i.send=function(t,e){e?postMessage(t,e):postMessage(t)};else{if(!(typeof C<"u"))throw new Error("Script must be executed as a worker");var s;try{s=Or}catch(t){if("object"!==g(t)||null===t||"MODULE_NOT_FOUND"!==t.code)throw t}if(s&&null!==s.parentPort){var n=s.parentPort;i.send=n.postMessage.bind(n),i.on=n.on.bind(n),i.exit=C.exit.bind(C)}else i.on=C.on.bind(C),i.send=function(t){C.send(t)},i.on("disconnect",(function(){C.exit(1)})),i.exit=C.exit.bind(C)}function a(t){return Object.getOwnPropertyNames(t).reduce((function(e,r){return Object.defineProperty(e,r,{value:t[r],enumerable:!0})}),{})}function o(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}i.methods={},i.methods.run=function(t,e){var r=new Function("return ("+t+").apply(null, arguments);");return r.apply(r,e)},i.methods.methods=function(){return Object.keys(i.methods)},i.terminationHandler=void 0,i.cleanupAndExit=function(t){var e=function(){i.exit(t)};if(!i.terminationHandler)return e();var r=i.terminationHandler(t);o(r)?r.then(e,e):e()};var l=null;i.on("message",(function(t){if(t===r)return i.cleanupAndExit(0);try{var s=i.methods[t.method];if(!s)throw new Error('Unknown method "'+t.method+'"');l=t.id;var n=s.apply(s,t.params);o(n)?n.then((function(r){r instanceof e?i.send({id:t.id,result:r.message,error:null},r.transfer):i.send({id:t.id,result:r,error:null}),l=null})).catch((function(e){i.send({id:t.id,result:null,error:a(e)}),l=null})):(n instanceof e?i.send({id:t.id,result:n.message,error:null},n.transfer):i.send({id:t.id,result:n,error:null}),l=null)}catch(e){i.send({id:t.id,result:null,error:a(e)})}})),i.register=function(t,e){if(t)for(var r in t)t.hasOwnProperty(r)&&(i.methods[r]=t[r]);e&&(i.terminationHandler=e.onTerminate),i.send("ready")},i.emit=function(t){if(l){if(t instanceof e)return void i.send({id:l,isEvent:!0,payload:t.message},t.transfer);i.send({id:l,isEvent:!0,payload:t})}},t.add=i.register,t.emit=i.emit}(U)),U}var F=s.platform,N=s.isMainThread,W=s.cpus;function H(t,e){return new(L())(t,e)}var z=e.pool=H;function B(t,e){j().add(t,e)}var V=e.worker=B;function G(t){j().emit(t)}var Y=e.workerEmit=G,q=a().Promise,X=e.Promise=q,Z=e.Transfer=I(),K=e.platform=F,Q=e.isMainThread=N,J=e.cpus=W;t.Promise=X,t.Transfer=Z,t.cpus=J,t.default=e,t.isMainThread=Q,t.platform=K,t.pool=z,t.worker=V,t.workerEmit=Y,Object.defineProperty(t,"__esModule",{value:!0})}(Pr.exports);var Er,Dr,Lr,Rr=Pr.exports,Tr=class{constructor(t,e){O(this,"_value"),O(this,"_listeners",{}),this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach((t=>t(this._value)))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Mr=class extends Tr{get distanceInCelsius(){if(void 0!==this.value)return Math.abs(this.value.min-this.value.max)}},Ur=class extends Tr{constructor(){super(...arguments),O(this,"_hover",void 0!==this.value)}get hover(){return this._hover}validate(t){return t}afterSetEffect(t){this._hover=void 0!==this.value,this.parent.files.forEveryInstance((e=>e.recieveCursorPosition(t)))}recieveCursorPosition(t){this.value=t}},Ir=class extends Tr{constructor(){super(...arguments),O(this,"fixedRange")}setFixedRange(t){if(t&&t.from>t.to){const e=t.from;t.from=t.to,t.to=e}this.fixedRange=t,t&&this.imposeRange(this.fixedRange)}get currentRange(){return void 0===this.fixedRange?this.value:this.fixedRange}validate(t){if(void 0!==this.fixedRange)return this.fixedRange;if(void 0===t)return;const e=this.parent.minmax.value;if(void 0===e)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance((e=>e.recieveRange(t)))}imposeRange(t){return this.fixedRange?this.value=this.fixedRange:void 0===t&&void 0===this.value||void 0===t&&void 0!==this.value&&(this.value=t),(void 0!==t&&void 0===this.value||void 0!==t&&void 0!==this.value&&(this.value.from!==t.from||this.value.to!==t.to))&&(this.value=t),this.value}applyMinmax(){if(this.parent.minmax.value){const t={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(t):this.imposeRange(t)}}applyAuto(){if(this.parent.histogram.value){const t=100/this.parent.histogram.value.length,e=this.parent.histogram.value.filter((e=>e.height>=t)),r={from:e[0].from,to:e[e.length-1].to};this.fixedRange?this.setFixedRange(r):this.imposeRange(r)}}},jr=(()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t})(),Fr={iron:{pixels:["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:jr,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Nr=class extends Tr{get availablePalettes(){return Fr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry((e=>{e.forEveryInstance((e=>e.recievePalette(t)))}))}setPalette(t){this.value=t}},Wr=(O(Er=class{},"inputToDate",(t=>{if("number"==typeof t){const e=new Date;return e.setTime(t),e}return t})),Er),Hr=(O(Dr=class extends Wr{static humanRangeDates(t,e){return t=Dr.inputToDate(t),e=Dr.inputToDate(e),t.getUTCDate()===e.getUTCDate()?Dr.humanDate(t):[Dr.humanDate(t),Dr.humanDate(e)].join(" - ")}static human(t){return`${Dr.humanDate(t)} ${Dr.humanTime(t,!0)} `}},"isoDate",(t=>nr(t=Dr.inputToDate(t),{representation:"date"}))),O(Dr,"isoTime",(t=>nr(t=Dr.inputToDate(t),{representation:"time"}))),O(Dr,"isoComplete",(t=>nr(t=Dr.inputToDate(t)))),O(Dr,"humanTime",((t,e=!1)=>ir(t=Dr.inputToDate(t),e?"HH:mm:ss":"HH:mm"))),O(Dr,"humanDate",((t,e=!1)=>ir(t=Dr.inputToDate(t),e?"d. M.":"d. M. yyyy"))),Dr),zr=class{},Br=class extends zr{constructor(t,e,r,i,s,n,a,o,l,h,c){super(),O(this,"id"),O(this,"horizontalLimit"),O(this,"verticalLimit"),O(this,"group"),O(this,"url"),O(this,"thermalUrl"),O(this,"visibleUrl"),O(this,"fileName"),O(this,"frameCount"),O(this,"signature","unknown"),O(this,"version",-1),O(this,"streamCount",-1),O(this,"fileDataType",-1),O(this,"unit",-1),O(this,"width"),O(this,"height"),O(this,"timestamp"),O(this,"duration"),O(this,"min"),O(this,"max"),O(this,"_isHover",!1),O(this,"root",null),O(this,"canvasLayer"),O(this,"visibleLayer"),O(this,"cursorLayer"),O(this,"listenerLayer"),O(this,"timeline"),O(this,"cursorValue"),O(this,"analysis"),O(this,"recording"),O(this,"_mounted",!1),O(this,"_pixels"),this.group=t,this.id=this.formatId(e),this.url=e,this.thermalUrl=e,this.visibleUrl=c,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=r,this.height=i,this.timestamp=n,this.duration=a,this.min=o,this.max=l,this.frameCount=h,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=s}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(t){this._isHover=t}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(t){this._mounted=t}get pixels(){return this._pixels}set pixels(t){this._pixels=t,this.onSetPixels(t)}attachToDom(t){(null!==this.root||!0===this.mountedBaseLayers)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=t,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){void 0===this.root&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountToDom(t){this.attachToDom(t)}unmountFromDom(){this.detachFromDom()}draw(){!0===this.mountedBaseLayers&&this.canvasLayer.draw()}recievePalette(t){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}getTemperatureAtPoint(t,e){const r=e*this.width+t;return this.pixels[r]}getColorAtPoint(t,e){var r,i;const s=this.getTemperatureAtPoint(t,e),n=null==(r=this.group.registry.range.value)?void 0:r.from,a=null==(i=this.group.registry.range.value)?void 0:i.to;if(void 0!==n&&void 0!==a){const t=(s-n)/(a-n),e=Math.round(255*t);return this.group.registry.palette.currentPalette.pixels[e]}}recieveRange(t){void 0!==t&&this.draw()}reset(){}recieveOpacity(t){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=t)}},Vr=class{constructor(t){O(this,"_mounted",!1),this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||null!==this.instance.root&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&null!==this.instance.root&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Gr=class t{static createCanvasContainer(){const t=document.createElement("div");return t.classList.add("thermalCanvasWrapper"),t.style.position="relative",t.style.userSelect="none",t}static createCanvas(){const t=document.createElement("canvas");return t.classList.add("thermalCanvas"),t.style.padding="0px",t.style.margin="0px",t.style.objectFit="contain",t.style.width="100%",t.style.height="100%",t.style.objectPosition="top left",t.style.imageRendering="pixelated",t.style.userSelect="none",t}static createDateLayerInner(){const t=document.createElement("div");return t.classList.add("dateLayerInner"),t.style.margin="0px",t.style.padding=".3rem 0rem",t.style.backgroundColor="black",t.style.color="white",t.style.borderRadius=".5rem .5rem 0 0",t.style.width="calc(100% + 4px )",t.style.position="absolute",t.style.top="0rem",t.style.left="-2px",t.style.opacity="0",t.style.transition="opacity .1s ease-in-out",t.style.textAlign="center",t.style.userSelect="none",t}static createVisibleLayer(){const t=document.createElement("div");return t.classList.add("visibleLayer"),t.style.margin="0px",t.style.padding="0px",t.style.height="100%",t.style.width="100%",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.userSelect="none",t}static createVisibleImage(){const t=document.createElement("img");return t.classList.add("visibleLayerImage"),t.style.padding="0px",t.style.margin="0px",t.style.objectFit="contain",t.style.width="100%",t.style.height="100%",t.style.objectPosition="top left",t.style.userSelect="none",t}static createListener(){const t=document.createElement("div");return t.classList.add("thermalListener"),t.style.margin="0px",t.style.padding="0px",t.style.height="100%",t.style.width="100%",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.cursor="pointer",t.style.touchAction="none",t.style.userSelect="none",t.setAttribute("id",Math.random().toString()),t}static createCursorLayerRoot(){const t=document.createElement("div");return t.classList.add("cursorLayerRoot"),t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.opacity="0",t.style.overflow="hidden",t.style.lineHeight="1rem",t.style.userSelect="none",t}static createCursorLayerCenter(){const t=document.createElement("div");return t.classList.add("cursorLayerCenter"),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.width="0px",t.style.height="0px",t.style.userSelect="none",t}static createCursorLayerAxeBase(){const t=document.createElement("div");return t.classList.add("cursorLayerAxe"),t.style.backdropFilter="invert(100)",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.content="",t.style.userSelect="none",t}static createCursorLayerX(){const e=t.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=t.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const t=document.createElement("div");return t.classList.add("cursorLayerLabel"),t.style.position="absolute",t.style.padding="1px 3px",t.style.backgroundColor="rgba( 0,0,0,0.5 )",t.style.color="white",t.style.whiteSpace="nowrap",t.style.fontSize="small",t.style.borderRadius="5px",t.style.userSelect="none",t}},Yr=class extends Vr{constructor(t){super(t),O(this,"container"),O(this,"canvas"),O(this,"context"),O(this,"_opacity",1),this.container=Gr.createCanvasContainer(),this.canvas=Gr.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(t){this._opacity=Math.max(Math.min(t,1),0),1!==this._opacity?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const t=this.getPalette(),e=await this.pool.exec((async(t,e,r,i,s,n)=>{const a=new OffscreenCanvas(r,i).getContext("2d"),o=e-t;for(let l=0;l<=r;l++)for(let h=0;h<=i;h++){let i=s[l+h*r];i<t&&(i=t),i>e&&(i=e);const c=(i-t)/o,d=n[Math.round(255*c)];a.fillStyle=d,a.fillRect(l,h,1,1)}const l=a.getImageData(0,0,r,i);return await createImageBitmap(l)}),[this.from,this.to,this.width,this.height,this.pixels,t],{});this.context.drawImage(e,0,0)}exportAsPng(){const t=this.canvas.toDataURL(),e=document.createElement("a");e.download=this.instance.fileName.replace(".lrc","_exported.png"),e.href=t,e.click()}},qr=class extends Vr{constructor(t){super(t),O(this,"layerRoot"),O(this,"center"),O(this,"axisX"),O(this,"axisY"),O(this,"label"),O(this,"_show",!1),O(this,"_hover",!1),this.layerRoot=Gr.createCursorLayerRoot(),this.center=Gr.createCursorLayerCenter(),this.axisX=Gr.createCursorLayerX(),this.axisY=Gr.createCursorLayerY(),this.label=Gr.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(t){this._show=t,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(t){this._hover=t,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(t,e){if(null!==this.instance.root){const r=this.instance.root.offsetWidth/this.instance.width,i=Math.round(t*r),s=Math.round(e*r),n=100/this.instance.width/2,a=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(i)} + ${n}%)`,this.center.style.top=`calc( ${this.px(s)} + ${a}%)`,t>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),e>this.instance.height/4?"3px"!==this.label.style.bottom&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):"3px"!==this.label.style.top&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(t,e,r){null===this.instance.root||(this.recalculateLabelPosition(t,e),this.label.innerHTML=`${r.toFixed(3)} °C`)}setLabel(t,e,r){null===this.instance.root||(this.recalculateLabelPosition(t,e),this.label.innerHTML=r)}setValue(t){t&&(this.label.innerHTML=`${t.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(t){return`${t}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Xr=class extends Vr{constructor(t){super(t),O(this,"container"),this.container=Gr.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Zr=class extends Vr{constructor(t,e){super(t),O(this,"container"),O(this,"image"),this._url=e,this.container=Gr.createVisibleLayer(),this._url&&(this.image=Gr.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(t){this._url=t,this.image&&t&&(this.image.src=t)}get exists(){return void 0!==this._url}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Kr=class extends Map{add(t,e){this.set(t,e)}call(...t){this.forEach((e=>e(...t)))}},Qr={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Jr=class extends Tr{constructor(t,e,r,i){super(t,Math.max(Math.min(e,r.length),0)),O(this,"_playbackSpeed",1),O(this,"startTimestampRelative"),O(this,"endTimestampRelative"),O(this,"stepsByAbsolute",new Map),O(this,"stepsByRelative",new Map),O(this,"stepsByIndex",new Map),O(this,"relativeSteps",[]),O(this,"_currentStep"),O(this,"isSequence"),O(this,"_isPlaying",!1),O(this,"timer"),O(this,"buffer"),O(this,"callbackdPlaybackSpeed",new Kr),O(this,"callbacksPlay",new Kr),O(this,"callbacksPause",new Kr),O(this,"callbacksStop",new Kr),O(this,"callbacksEnd",new Kr),O(this,"callbacksChangeFrame",new Kr),this.steps=r,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach((t=>{this.stepsByIndex.set(t.index,t),this.stepsByAbsolute.set(t.absolute,t),this.stepsByRelative.set(t.relative,t),this.relativeSteps.push(t.relative)})),this.buffer=new class{constructor(t,e){O(this,"_currentFrame"),O(this,"bufferSize",4),O(this,"buffer",new Map),this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map((t=>t.relative))}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return void 0===e&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter((t=>t.index>=e&&t.index<r)),s=i.filter((t=>!this.preloadedSteps.includes(t)));return(await Promise.all(s.map((t=>this.drive.parent.service.frameData(t.index))))).forEach(((t,e)=>{const r=s[e];this.buffer.set(r,t)})),this.preloadedSteps.forEach((t=>{i.includes(t)||this.buffer.delete(t)})),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}}(this,i)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(t){this._playbackSpeed=t,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Qr[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(t){this.steps.length}validate(t){return void 0===this.steps?t:1===this.steps.length?0:this._validateRelativeTime(t)}_validateRelativeTime(t){return Math.max(Math.min(t,this.steps[this.steps.length-1].relative),0)}_validateIndex(t){return Math.max(Math.min(t,this.steps.length),0)}_convertRelativeToAspect(t){return t/this.duration}_convertRelativeToPercent(t){return 100*this._convertRelativeToAspect(t)}_convertPercenttRelative(t){return this.duration*t/100}formatDuration(t){const e=new Date(0);return e.setMilliseconds(t),ir(e,"mm:ss:SSS")}findPreviousRelative(t){if(1===this.steps.length)return this.steps[0];t=this._validateRelativeTime(t);const e=this._convertRelativeToAspect(t),r=Math.ceil(e*this.steps.length)+5,i=this._validateIndex(r-40),s=this._validateIndex(r),n=this.steps.slice(i,s).reverse().find((e=>e.relative<=t));return void 0!==n?n:this.steps[0]}findNextRelative(t){if(1===this.steps.length)return this.steps[0];const e=this._convertRelativeToAspect(t),r=Math.floor(e*this.steps.length)-5,i=this._validateIndex(r),s=this._validateIndex(r+40),n=this.steps.slice(i,s).find((e=>e.relative>t));return void 0!==n&&n}async setRelativeTime(t){t=this._validateRelativeTime(t),this.value=t;const e=this.findPreviousRelative(this.value);if(e!==this._currentStep){this._currentStep=e;const t=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),t}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(t){t=Math.max(Math.min(t,100),0);const e=this._convertPercenttRelative(t);return await this.setRelativeTime(e)}createNextStepTimer(){void 0!==this.timer&&clearTimeout(this.timer),this.isSequence&&!1!==this._isPlaying&&(this.timer=setTimeout((()=>{const t=this.findNextRelative(this._currentStep.relative);t?(this.value=t.relative,this._isPlaying&&(this.value=t.relative,this._currentStep=t,this.buffer.recieveStep(t),this.callbacksChangeFrame.call(t),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())}),this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},ti=class extends Tr{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(void 0===t||void 0===e)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},ei=class extends Tr{constructor(){super(...arguments),O(this,"stream"),O(this,"recorder"),O(this,"mimeType"),O(this,"_isRecording",!1),O(this,"_mayStop",!0),O(this,"recordedChunks",[]),O(this,"callbackMayStop",new Kr)}get mayStop(){return this._mayStop}set mayStop(t){this._mayStop=t,this.callbackMayStop.call(this.mayStop)}validate(t){return t}afterSetEffect(t){}start(){if(!0===this.value)throw new Error("Recording already in process - can not start another one");const{stream:t,recorder:e}=this.initRecording();this.stream=t,this.recorder=e,this.value=!0,this.recorder.addEventListener("dataavailable",(t=>{t.data.size>0&&(this.recordedChunks.push(t.data),this.download(),this.clearRecording())})),this.recorder.start()}end(){if(!1===this.value)throw new Error("Recording has not started yet - can not end it!");if(void 0===this.recorder)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(!0===this.value)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const t="recording entire file";this.parent.timeline.callbacksEnd.add(t,(()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.delete(t)})),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const t=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach((t=>{void 0===this.mimeType&&MediaRecorder.isTypeSupported(t)&&(this.mimeType=t)}));const e={mimeType:this.mimeType};return{stream:t,recorder:new MediaRecorder(t,e),options:e}}download(){const t=new Blob(this.recordedChunks,{type:this.mimeType}),e=URL.createObjectURL(t),r=document.createElement("a");r.style.display="none",r.href=e,r.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(e)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},ri=class{constructor(t,e,r){O(this,"_selected",!1),O(this,"onSelected",new Kr),O(this,"onDeselected",new Kr),O(this,"onValues",new Kr),O(this,"onMoveOrResize",new Kr),O(this,"layerRoot"),O(this,"points",new Map),O(this,"left"),O(this,"top"),O(this,"width"),O(this,"height"),O(this,"_min"),O(this,"_max"),O(this,"_avg"),O(this,"_color","black"),O(this,"onSetColor",new Kr),O(this,"_initialColor"),O(this,"onSetInitialColor",new Kr),O(this,"activeColor","yellow"),O(this,"inactiveColor","black"),O(this,"_graphMinActive",!1),O(this,"_graphMaxActive",!1),O(this,"_graphAvgActive",!1),O(this,"onGraphActivation",new Kr),O(this,"ready",!1),O(this,"nameInitial"),O(this,"_name"),O(this,"onSetName",new Kr),this.key=t,this.file=e,this._initialColor=r,this.nameInitial=t,this._name=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",(()=>{this.recalculateValues()}))}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter((t=>t.active))}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}get initialColor(){return this._initialColor}setInitialColor(t){this._initialColor=t,this.onSetInitialColor.call(t),!0===this.selected&&this.setColor(t)}get graphMinActive(){return this._graphMinActive}get graphMaxActive(){return this._graphMaxActive}get graphAvgActive(){return this._graphAvgActive}emitGraphActivation(){this.onGraphActivation.call(this._graphMinActive,this._graphMaxActive,this._graphAvgActive)}get name(){return this._name}setName(t){this._name=t,this.onSetName.call(t)}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(t=!1,e=!0){!0!==this.selected&&(this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),!0===t&&this.layers.all.filter((t=>t.key!==this.key)).forEach((t=>{t.selected&&t.setDeselected(!1)})),!0===e&&this.layers.onSelectionChange.call(this.layers.selectedOnly))}setDeselected(t=!0){!1!==this.selected&&(this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach((t=>t.deactivate())),!0===t&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly))}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},ii=class{constructor(t,e,r,i,s){O(this,"pxX"),O(this,"_x"),O(this,"onX",new Kr),O(this,"pxY"),O(this,"_y"),O(this,"onY",new Kr),O(this,"_color"),O(this,"_active",!1),O(this,"_isHover",!1),O(this,"_isDragging",!1),O(this,"container"),O(this,"innerElement"),O(this,"onMouseEnter",new Kr),O(this,"onMouseLeave",new Kr),O(this,"onActivate",new Kr),O(this,"onDeactivate",new Kr),this.key=t,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=r,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.onSetColor(t)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,a=this.y+r;return e>=i&&e<=s&&t>=n&&t<=a}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){return{x:this.getPercentageX(),y:this.getPercentageY()}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){!1===this.isHover&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){!0===this.isHover&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},si=(Lr=class extends ii{constructor(t,e,r,i,s){super(t,e,r,i,s),O(this,"axisX"),O(this,"axisY"),O(this,"center"),this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,(()=>{const t=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&t&&(this.center.style.backgroundColor=t)}))}static sizePx(t=1){return Math.round(Lr.size*t).toString()+"px"}getPercentXTranslationFromValue(){return this.pxX/2}getPercentYTranslationFromValue(){return this.pxY/2}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=Lr.sizePx(-.5),t.style.left=Lr.sizePx(-.5),t.style.width=Lr.sizePx(),t.style.height=Lr.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=Lr.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=Lr.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${Lr.sizePx(.5)} - 3px )`,t.style.left=`calc( ${Lr.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const e=this.analysis.file.getColorAtPoint(this.x,this.y);return e&&(t.style.backgroundColor=e),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var e,r,i;if(void 0===t)null==(e=this.axisX)||e.style.removeProperty("box-shadow"),null==(r=this.axisY)||r.style.removeProperty("box-shadow"),null==(i=this.center)||i.style.removeProperty("box-shadow");else{const e=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=e),this.axisY&&(this.axisY.style.boxShadow=e),this.center&&(this.center.style.boxShadow=e)}}},O(Lr,"size",20),Lr),ni=class t extends ri{constructor(t,e,r,i,s){super(t,r,e),O(this,"center"),O(this,"_graph"),this.top=i,this.left=s,this.width=1,this.height=1,this.center=new si("center",i,s,this,e),this.points.set("center",this.center),this.center.projectInnerPositionToDom(),this.center.onX.set("update point",(t=>{this.left=t})),this.center.onY.set("update point",(t=>{this.top=t})),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new ai(this)),this._graph}static addAtPoint(e,r,i,s,n){return new t(e,r,i,s,n)}setColorCallback(t){this.center.setColor(t)}isWithin(t,e){return this.center.isWithin(e,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.service.pointAnalysisData(this.center.x,this.center.y)}setLeft(t){const e=Math.max(0,Math.min(this.file.width,Math.round(t)));this.center.x=e}setTop(t){const e=Math.max(0,Math.min(this.file.height,Math.round(t)));this.center.y=e}},ai=class{constructor(t){O(this,"_min",!1),O(this,"_max",!1),O(this,"_avg",!1),O(this,"_value"),O(this,"onGraphActivation",new Kr),O(this,"onGraphData",new Kr),O(this,"onAnalysisSelection",new Kr),this.analysis=t,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(t){this._value=t,this.onGraphData.call(t,this.analysis)}setMinActivation(t){this._min!==t&&(this._min=t,this.emitGraphActivation())}setMaxActivation(t){this._max!==t&&(this._max=t,this.emitGraphActivation())}setAvgActivation(t){this._avg!==t&&(this._avg=t,this.emitGraphActivation())}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",(()=>{this.analysis.file.analysisData.listeners.refreshOutput()})),this.analysis.onSelected.set("__graphs",(t=>{this.onAnalysisSelection.call(!0,t)})),this.analysis.onMoveOrResize.set("__graphs",(async t=>{const e=await t.getAnalysisData();this.value=e}));const t=await this.getGraphData();this.value=t}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof ni)return this._avg?[this.analysis.initialColor]:[];const t=[];return Object.entries(this.state).forEach((([e,r])=>{r&&t.push(this.analysis.initialColor)})),t}getGraphLabels(){if(this.analysis instanceof ni)return this._avg?[this.analysis.name]:[];const t=[];return Object.entries(this.state).forEach((([e,r])=>{r&&t.push(`${this.analysis.name} ${e}`)})),t}hasDataToPrint(){return this.analysis instanceof ni?this._avg:this._min||this._max||this._avg}getDtaAtTime(t){if(this.analysis instanceof ni)return this._avg?[this.value[t]]:[];const e=[],r=this.value;return this._min&&e.push(r[t].min),this._max&&e.push(r[t].max),this._avg&&e.push(r[t].avg),e}},oi=class extends ii{constructor(t,e,r,i,s){super(t,e,r,i,s),this._color=s,this.setColor(s)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},li=class extends oi{constructor(){super(...arguments),O(this,"isMoving",!1)}getRadius(){return 10}getPercentXTranslationFromValue(t){return this.analysis.width+this.analysis.left===t?this.pxX:0}getPercentYTranslationFromValue(t){return this.analysis.height+this.analysis.top===t?this.pxY:0}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}onSetColor(t){this.innerElement&&(this.innerElement.style.backgroundColor=t)}syncXWith(t){this.onX.add(`sync X with ${t.key} `,(e=>{t.x!==e&&(t.x=e)}))}syncYWith(t){this.onY.add(`sync Y with ${t.key} `,(e=>{t.y!==e&&(t.y=e)}))}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},hi=class extends ri{constructor(t,e,r,i,s,n,a){super(t,r,e),O(this,"wPx",(100/this.file.width/2).toString()+"%"),O(this,"hPx",(100/this.file.height/2).toString()+"%"),O(this,"tl"),O(this,"tr"),O(this,"bl"),O(this,"br"),O(this,"area"),O(this,"_graph");let o=s,l=i;void 0!==n&&void 0!==a&&(o=s+n,l=i+a),this.area=this.buildArea(i,s,n,a),this.tl=this.addPoint("tl",i,s),this.tr=this.addPoint("tr",i,o),this.bl=this.addPoint("bl",l,s),this.br=this.addPoint("br",l,o),this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",(()=>{this.calculateBounds()})),this.points.forEach((t=>t.projectInnerPositionToDom()))}get graph(){return this._graph||(this._graph=new ai(this)),this._graph}isWithin(t,e){return t>=this.left&&t<=this.left+this.width&&e>=this.top&&e<=this.top+this.height}static calculateDimensionsFromCorners(t,e,r,i){const s=Math.min(t,i),n=Math.max(t,i),a=Math.min(e,r);return{top:s,left:a,width:Math.max(e,r)-a,height:n-s}}setColorCallback(t){this.points.forEach((e=>e.setColor(t))),this.area.setColor(t)}calculateBounds(){let t=this.file.width,e=0,r=this.file.height,i=0;this.points.forEach((s=>{s.x>e&&(e=s.x),s.x<t&&(t=s.x),s.y<r&&(r=s.y),s.y>i&&(i=s.y)})),this.left=t,this.top=r,this.width=e-t,this.height=i-r,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(t,e,r){const i=new li(t,e,r,this,this.color);return this.points.set(t,i),i}setLeft(t){this.leftmostPoint.x=t}setRight(t){this.rightmostPoint.x=t}setTop(t){this.topmostPoint.y=t}setBottom(t){this.bottommostPoint.y=t}get leftmostPoint(){let t=this.tl;return this.points.forEach((e=>{e.x<t.x&&(t=e)})),t}get rightmostPoint(){let t=this.tr;return this.points.forEach((e=>{e.x>t.x&&(t=e)})),t}get topmostPoint(){let t=this.tl;return this.points.forEach((e=>{e.y<t.y&&(t=e)})),t}get bottommostPoint(){let t=this.br;return this.points.forEach((e=>{e.y>t.y&&(t=e)})),t}},ci=class{constructor(t,e,r,i,s){O(this,"element"),O(this,"_top"),O(this,"_width"),O(this,"_left"),O(this,"_height"),this.analysis=t,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=this._top/this.fileHeight*100+"%")}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=this._left/this.fileWidth*100+"%")}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=this.height/this.fileHeight*100+"%")}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=this.width/this.fileWidth*100+"%")}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},di=class extends ci{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},ui=class t extends hi{getType(){return"ellipsis"}static startAddingAtPoint(e,r,i,s,n){const a=new t(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,o){const{top:l,left:h,width:c,height:d}=t.calculateDimensionsFromCorners(s,n,a,o),u=new t(e,r,i,l,h,c,d);return u.recalculateValues(),u}buildArea(t,e,r,i){return void 0!==r&&void 0!==i?new di(this,t,e,t+r,e+i):new di(this,t,e,t,e)}getValues(){const t=this.left,e=this.left+this.width,r=this.top,i=this.top+this.height;let s=1/0,n=-1/0,a=0,o=0;for(let l=r;l<i;l++){const r=this.file.width*l;for(let i=t;i<=e;i++)if(this.isWithin(i,l)){const t=this.file.pixels[r+i];t<s&&(s=t),t>n&&(n=t),o+=t,a++}}return{min:s,max:n,avg:o/a}}isWithin(t,e){const r=this.left+this.width/2,i=this.top+this.height/2,s=(t-r)/(this.width/2),n=(e-i)/(this.height/2);return s*s+n*n<=1}async getAnalysisData(){return await this.file.service.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},pi=class extends ci{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},gi=class t extends hi{getType(){return"rectangle"}static startAddingAtPoint(e,r,i,s,n){const a=new t(e,r,i,s,n);return a.br.activate(),a}static build(e,r,i,s,n,a,o){const{top:l,left:h,width:c,height:d}=t.calculateDimensionsFromCorners(s,n,a,o),u=new t(e,r,i,l,h,c,d);return u.recalculateValues(),u}buildArea(t,e,r,i){return void 0!==r&&void 0!==i?new pi(this,t,e,t+r,e+i):new pi(this,t,e,t,e)}getValues(){const t=this.left,e=this.left+this.width,r=this.top,i=this.top+this.height;let s=1/0,n=-1/0,a=0,o=0;for(let l=r;l<i;l++){const r=this.file.width*l;for(let i=t;i<=e;i++){const t=this.file.pixels[r+i];t<s&&(s=t),t>n&&(n=t),o+=t,a++}}return{min:s,max:n,avg:o/a}}async getAnalysisData(){return await this.file.service.rectAnalysisData(this.left,this.top,this.width,this.height)}},mi=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],fi=class extends Map{constructor(t){super(),O(this,"layers",[]),O(this,"onAdd",new Kr),O(this,"onRemove",new Kr),O(this,"onSelectionChange",new Kr),O(this,"colors",mi),this.drive=t}addAnalysis(t){return this.has(t.key)&&this.removeAnalysis(t.key),t.setColor(t.initialColor),this.set(t.key,t),this.layers=[...this.layers,t],this.onAdd.call(t,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(t){var e;this.has(t)&&(null==(e=this.get(t))||e.remove(),this.delete(t),this.layers=this.layers.filter((e=>e.key!==t)),this.onRemove.call(t),this.drive.dangerouslySetValueFromStorage(this.all))}createRectFrom(t,e){const r=gi.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,t,e);return this.addAnalysis(r),r}placeRectAt(t,e,r,i,s,n){const a=gi.build(t,n??this.getNextColor(),this.drive.parent,e,r,i,s);return a.ready=!0,this.addAnalysis(a),a}createEllipsisFrom(t,e){const r=ui.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,t,e);return this.addAnalysis(r),r}placeEllipsisAt(t,e,r,i,s,n){const a=ui.build(t,n??this.getNextColor(),this.drive.parent,e,r,i,s);return a.ready=!0,this.addAnalysis(a),a}createPointAt(t,e){const r=ni.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,t,e);return this.addAnalysis(r),r}placePointAt(t,e,r,i){const s=ni.addAtPoint(t,i??this.getNextColor(),this.drive.parent,e,r);return s.ready=!0,this.addAnalysis(s),s}selectAll(){this.all.filter((t=>{!1===t.selected&&t.setSelected(!1,!1)})),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach((t=>{t.setDeselected(!1)})),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter((t=>!0===t.selected))}getNextColor(){const t=this.all.map((t=>t.initialColor)),e=mi.filter((e=>!t.includes(e)));return e.length>0?e[0]:mi[0]}getNextName(t){return`${t} ${this.all.length}`}},vi=class extends Tr{constructor(){super(...arguments),O(this,"layers",new fi(this)),O(this,"points",new class{constructor(t){this.drive=t}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(t,e=!1){return t.reduce(((t,r)=>[...t,...e?r.arrayOfActivePoints:r.arrayOfPoints]),[])}}(this)),O(this,"bindedPointerMoveListener"),O(this,"bindedPointerDownListener"),O(this,"bindedPointerUpListener")}get listenerLayerContainer(){return this.parent.listenerLayer.getLayerRoot()}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(t){this.value=t}validate(t){return t}afterSetEffect(){}getRelativePosition(t){const e=this.listenerLayerContainer.clientWidth,r=this.parent.width,i=t.layerX/e,s=Math.round(r*i),n=this.listenerLayerContainer.clientHeight,a=this.parent.height,o=t.layerY/n;return{top:Math.round(a*o),left:s}}activateListeners(){this.bindedPointerMoveListener=t=>{const e=this.getRelativePosition(t);this.points.all.forEach((t=>{t.active&&this.currentTool.onPointMove(t,e.top,e.left);const r=t.isWithin(e.top,e.left);r?this.currentTool.onPointEnter(t):r||this.currentTool.onPointLeave(t)}))},this.bindedPointerDownListener=t=>{const e=this.getRelativePosition(t);this.currentTool.onCanvasClick(e.top,e.left,this.parent),this.points.all.forEach((t=>{t.isWithin(e.top,e.left)&&this.currentTool.onPointDown(t)}))},this.bindedPointerUpListener=()=>{this.points.all.forEach((t=>{this.currentTool.onPointUp(t)}))},this.listenerLayerContainer.addEventListener("pointermove",this.bindedPointerMoveListener),this.listenerLayerContainer.addEventListener("pointerdown",this.bindedPointerDownListener),this.listenerLayerContainer.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listenerLayerContainer.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listenerLayerContainer.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listenerLayerContainer.removeEventListener("pointerup",this.bindedPointerUpListener)}},yi=class extends Tr{constructor(t){super(t,{values:[[]],colors:[]}),O(this,"_hasActiveGraphs",!1),O(this,"onGraphsPresence",new Kr),O(this,"listeners",new class{constructor(t){O(this,"listenerKey","___listen-to-graphs___"),O(this,"_graphs",new Map),O(this,"_output",{values:[[]],colors:[]}),O(this,"onOutput",new Kr),O(this,"onAddGraph",new Kr),O(this,"onRemoveGraph",new Kr),this.drive=t,this.layers.onAdd.set(this.listenerKey,(async t=>{const e=t.graph;this.addGraph(e),e.onAnalysisSelection.set(this.listenerKey,(async()=>{this.refreshOutput()})),e.onGraphActivation.set(this.listenerKey,(async()=>{this.refreshOutput()})),e.onGraphData.set(this.listenerKey,(async()=>{this.refreshOutput()})),e.analysis.onSetName.set(this.listenerKey,(()=>{this.refreshOutput()}))})),this.layers.onRemove.set(this.listenerKey,(async t=>{this.removeGraph(t),this.refreshOutput()}))}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(t){this._graphs.set(t.analysis.key,t),this.onAddGraph.call(t)}removeGraph(t){this._graphs.delete(t),this.onRemoveGraph.call(t)}get output(){return this._output}set output(t){this._output=t,this.onOutput.call(t)}refreshOutput(){const t={values:[["Time"]],colors:[]};return this.graphs.forEach((e=>{t.values[0].push(...e.getGraphLabels()),t.colors.push(...e.getGraphColors())})),this.graphs.forEach((e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach(((r,i)=>{let s=t.values[i+1];if(void 0===s){const e=new Date;e.setTime(parseInt(r)),s=[e],t.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(r)))}))})),this.output=t,t}hasGraph(){return Object.values(this.graphs).find((t=>t.hasDataToPrint())).length>0}generateExportData(){const t={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const r of this.graphs.values()){const i=r.getGraphLabels();for(const t of i)e.push({key:t,displayLabel:`${t} (${r.analysis.initialColor}, ${r.analysis.width} x ${r.analysis.height} px)`});r.value&&Object.keys(r.value).forEach((s=>{if(!Object.keys(t).includes(s)){const i=parseInt(s),n=i+r.analysis.file.timestamp;t[s]={[e[0].key]:ir(i,"m:ss:SSS")+" ",[e[1].key]:ir(n,"d. M.y m:ss:SSS")+" ",[e[2].key]:i,[e[3].key]:n}}const n=r.getDtaAtTime(parseInt(s));i.forEach(((e,r)=>{t[s][e]=n[r]}))}))}return{header:e,data:Object.values(t)}}}(this)),this.listeners.onOutput.set("__mirror_output_to_local_state",(async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))}))}get hasActiveGraphs(){return this._hasActiveGraphs}validate(t){return t}afterSetEffect(){}dangerouslyUpdateValue(t){this.value=t}downloadData(){const{data:t,header:e}=this.listeners.generateExportData(),r=or({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:e}),i=_r(r)(t);Ar(r)(i)}},bi=class t extends Br{constructor(t,e,r,i,s,n,a,o,l,h,c,d,u,p,g,m,f){super(t,e.thermalUrl,r,i,l,s,a,c,d,n,e.visibleUrl),O(this,"_export"),this.group=t,this.service=e,this.width=r,this.height=i,this.timestamp=s,this.frameCount=n,this.duration=a,this.frameInterval=o,this.fps=h,this.min=c,this.max=d,this.bytesize=u,this.averageEmissivity=p,this.averageReflectedKelvins=g,this.firstFrame=m,this.timelineData=f,this.pixels=m.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const t=new class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(){throw new Error("Not implemented")}}(this);this._export=t}return this._export}postInit(){return this.canvasLayer=new Yr(this),this.visibleLayer=new Zr(this,this.visibleUrl),this.cursorLayer=new qr(this),this.listenerLayer=new Xr(this),this.cursorValue=new ti(this,void 0),this.timeline=new Jr(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new ei(this,!1),this.analysis=new vi(this,[]),this.analysisData=new yi(this),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){if(this.mountedBaseLayers){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const t=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,t)}this.analysis.value.forEach((t=>t.recalculateValues()))}}getPixelsForHistogram(){return[]}static fromService(e,r,i,s){return new t(e,r,i.width,i.height,i.timestamp,i.frameCount,i.duration,i.frameInterval,s.pixels,i.fps,i.min,i.max,i.bytesize,i.averageEmissivity,i.averageReflectedKelvins,s,i.timeline).postInit()}mountListener(){void 0!==this.root?(this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=t=>{this.cursorLayer.show=!0,this.isHover=!0;const e=this.width/this.root.clientWidth,r=Math.round(t.offsetX*e),i=Math.round(t.offsetY*e);this.group.cursorPosition.recieveCursorPosition({x:r,y:i})},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)}):console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`)}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}recieveCursorPosition(t){if(void 0!==t){const e=this.group.tool.value.getLabelValue(t.x,t.y,this);this.cursorLayer.setLabel(t.x,t.y,e),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(t)}},wi=class extends Tr{constructor(){super(...arguments),O(this,"_map",new Map)}get map(){return this._map}validate(t){return t}afterSetEffect(t){this.map.clear(),t.forEach((t=>this._map.set(t.url,t)))}addFile(t){return this._map.has(t.url)?this._map.get(t.url):(this.value=[...this.value,t],t)}removeFile(t){const e=t instanceof bi?t:this.map.get(t);e&&(e.unmountFromDom(),this.value=this.value.filter((t=>t.thermalUrl!==e.url)))}removeAllInstances(){this.forEveryInstance((t=>t.destroySelfAndBelow())),this.value=[]}forEveryInstance(t){this.value.forEach((e=>t(e)))}},xi=class extends Mr{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(0!==t.length)return t.reduce(((t,e)=>e.min<t.min||e.max>t.max?{min:e.min<t.min?e.min:t.min,max:e.max>t.max?e.max:t.max}:t),{min:1/0,max:-1/0})}},ki=class{constructor(t){O(this,"active",!1),this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Si=class extends ki{constructor(){super(...arguments),O(this,"key","inspect"),O(this,"name","Inspect temperatures"),O(this,"description","Use mouse to inspect temperature values."),O(this,"icon",'<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>\n</svg>'),O(this,"getLabelValue",((t,e,r)=>void 0===r?"":r.getTemperatureAtPoint(t,e).toFixed(2)+" °C"))}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Ci=class extends ki{},$i=[Si,class extends Ci{constructor(){super(...arguments),O(this,"key","add-point"),O(this,"name","Add a point analysis"),O(this,"description","Click on the thermogram to add a point analysis."),O(this,"icon",'<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>\n</svg>'),O(this,"getLabelValue",((t,e,r)=>`X:${t}<br />Y:${e}<br />${r.group.tool.tools.inspect.getLabelValue(t,e,r)}`))}onActivate(){this.group.forEveryInstance((t=>{t.analysis.layers.selectedOnly.forEach((t=>{t.setDeselected()}))}))}onDeactivate(){}onCanvasLeave(){}onCanvasClick(t,e,r){r.analysis.layers.createPointAt(t,e).setSelected(!0)}onPointDown(){}onPointUp(t){t.deactivate(),t.analysis.file.group.tool.selectTool("edit"),t.analysis.ready=!0,t.analysis.onMoveOrResize.call(t.analysis)}onPointMove(){}onPointLeave(){}onPointEnter(){}},class extends Ci{constructor(){super(...arguments),O(this,"key","add-rect"),O(this,"name","Add a rectangular analysis"),O(this,"description","Click and drag on the thermogram to add a rectangular analysis."),O(this,"icon",'<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>\n</svg>'),O(this,"getLabelValue",((t,e,r)=>`X:${t}<br />Y:${e}<br />${r.group.tool.tools.inspect.getLabelValue(t,e,r)}`))}onActivate(){this.group.forEveryInstance((t=>{t.analysis.layers.selectedOnly.forEach((t=>{t.setDeselected()}))}))}onDeactivate(){}onCanvasLeave(){}onCanvasClick(t,e,r){r.analysis.layers.createRectFrom(t,e).setSelected(!0)}onPointDown(){}onPointUp(t){t.deactivate(),t.analysis.file.group.tool.selectTool("edit"),t.analysis.ready=!0,(t.analysis.width<=0||t.analysis.height<=0)&&t.analysis.layers.removeAnalysis(t.analysis.key)}onPointMove(t,e,r){t.isInSelectedLayer()&&t.active&&(t.x=r,t.y=e,t.analysis.onMoveOrResize.call(t.analysis))}onPointLeave(){}onPointEnter(){}},class extends Ci{constructor(){super(...arguments),O(this,"key","add-ellipsis"),O(this,"name","Add an elyptical analysis"),O(this,"description","Click and drag on the thermogram to add an elyptical analysis."),O(this,"icon",'<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>\n</svg>'),O(this,"getLabelValue",((t,e,r)=>`X:${t}<br />Y:${e}<br />${r.group.tool.tools.inspect.getLabelValue(t,e,r)}`))}onActivate(){this.group.forEveryInstance((t=>{t.analysis.layers.selectedOnly.forEach((t=>{t.setDeselected()}))}))}onDeactivate(){}onCanvasLeave(){}onCanvasClick(t,e,r){r.analysis.layers.createEllipsisFrom(t,e).setSelected(!0)}onPointDown(){}onPointUp(t){t.deactivate(),t.analysis.file.group.tool.selectTool("edit"),t.analysis.ready=!0,(t.analysis.width<=0||t.analysis.height<=0)&&t.analysis.layers.removeAnalysis(t.analysis.key)}onPointMove(t,e,r){t.isInSelectedLayer()&&t.active&&(t.x=r,t.y=e,t.analysis.onMoveOrResize.call(t.analysis))}onPointLeave(){}onPointEnter(){}},class extends ki{constructor(){super(...arguments),O(this,"key","edit"),O(this,"name","Edit analysis"),O(this,"description","Drag corners of any selected analysis."),O(this,"icon",'<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>\n</svg>')}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(t){t.mouseEnter()}onPointLeave(t){!1===t.active&&t.mouseLeave()}onPointMove(t,e,r){t.isInSelectedLayer()&&t.active&&(t.x=r,t.y=e,t.analysis.onMoveOrResize.call(t.analysis))}onPointDown(t){t.isInSelectedLayer()&&!1===t.active&&t.activate()}onPointUp(t){!0===t.active&&t.deactivate()}getLabelValue(t,e,r){const i=r.getTemperatureAtPoint(t,e),s=r.analysis.layers.all.filter((r=>r.isWithin(t,e))).map((t=>t.selected?`<span style="color:${t.initialColor}">${t.name}</span>`:`<s style="color:${t.initialColor}">${t.name}</s>`));return`${s.length>0?s.join("<br />")+"<br />":""}${i&&i.toFixed(2)+" °C<br />"}X: ${t}<br />Y: ${e}`}}],_i=class extends Tr{constructor(t,e){super(t,e),O(this,"_tools",(t=>{const e=$i.map((e=>{const r=new e(t);return[r.key,r]}));return Object.fromEntries(e)})(this.parent))}get tools(){return this._tools}validate(t){return t}afterSetEffect(t){t&&(t.activate(),Object.values(this.tools).forEach((e=>{e.key!==t.key&&e.deactivate()})))}selectTool(t){this.value=t instanceof ki?t:this.tools[t]}},Ai=class extends zr{constructor(t,e,r,i){super(),O(this,"hash",Math.random()),O(this,"minmax",new xi(this,void 0)),O(this,"tool",new _i(this,new Si(this))),O(this,"files",new wi(this,[])),O(this,"cursorPosition",new Ur(this,void 0)),O(this,"forEveryInstance",(t=>{this.files.value.forEach((e=>t(e)))})),this.registry=t,this.id=e,this.name=r,this.description=i}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Pi=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},Oi=class t extends Pi{constructor(t,e,r){super(t),this.code=e,this.message=r}isSuccess(){return!1}static fromError(e){return new t(e.url,e.code,e.message)}},Ei=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Di=class extends Pi{constructor(t,e,r,i,s){super(i,s),O(this,"id",Math.random()),O(this,"baseInfoCache"),O(this,"fileName"),this.service=t,this.buffer=e,this.parser=r,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const e=this.getFrameSubset(t);return await this.parser.frameData(e.array,e.dataType)}async pointAnalysisData(t,e){return await this.parser.pointAnalysisData(this.buffer,t,e)}async rectAnalysisData(t,e,r,i){return await this.parser.rectAnalysisData(this.buffer,t,e,r,i)}async ellipsisAnalysisData(t,e,r,i){return await this.parser.ellipsisAnalysisData(this.buffer,t,e,r,i)}async createInstance(t){const e=await this.baseInfo(),r=await this.frameData(0),i=bi.fromService(t,this,e,r);return t.files.addFile(i),i}},Li={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:[{extension:"lrc",minme:"application/octet-stream"}],is:(t,e)=>{const r=e.endsWith("lrc"),i="LRC\0"===(new TextDecoder).decode(t.slice(0,4));return r&&i},baseInfo:async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(t,e)=>{const r=t.getBigInt64(e,!0),i=10000n,s=24n*60n*60n*1000n*i,n=0x4000000000000000n;let a=0x3fffffffffffffffn&r;0x8000000000000000n&r&&(a>n-s&&(a-=n),a<0&&(a+=s));return Number(a/i-62135596800000n)},a=n(e,5);let o=2;1===e.getUint8(15)&&(o=4);const l=57+r*i*o,h=t.slice(25),c=h.byteLength/l,d=t=>{const e=t*l,r=e+l,i=h.slice(e,r),s=new DataView(i),a=s.getFloat32(8,!0),o=s.getFloat32(12,!0);return{timestamp:n(s,0),min:a,max:o,emissivity:s.getFloat32(24,!0),reflectedKelvins:s.getFloat32(28,!0)}},u=[];for(let t=0;t<c;t++){const e=d(t);u.push(e)}const p={emissivity:0,reflectedKelvins:0};let g=1/0,m=-1/0;const f=[];u.forEach((t=>{p.emissivity=p.emissivity+t.emissivity,p.reflectedKelvins=p.reflectedKelvins+t.reflectedKelvins,t.min<g&&(g=t.min),t.max>m&&(m=t.max),f.push(t.timestamp)}));const v=f[0],y=[];f.forEach(((t,e)=>{const r=f[e+1];let i=0;void 0===r&&(i=0),i=r-t;const s=t-v;y.push({absolute:t,relative:s,offset:isNaN(i)?0:i,index:e})}));const b=u[u.length-1].timestamp-u[0].timestamp,w=b/c;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:c,duration:b,frameInterval:w,fps:1e3/w,timeline:y,min:g,max:m,averageEmissivity:p.emissivity/u.length,averageReflectedKelvins:p.reflectedKelvins/u.length}},getFrameSubset:(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=57+r.getUint16(17,!0)*r.getUint16(19,!0)*(1===i?4:2),n=e*s,a=n+s;return{array:t.slice(25).slice(n,a),dataType:i}},frameData:async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=10000n,n=24n*60n*60n*1000n*s,a=0x4000000000000000n;let o=0x3fffffffffffffffn&i;0x8000000000000000n&i&&(o>a-n&&(o-=a),o<0&&(o+=n));const l=Number(o/s-62135596800000n),h=r.getFloat32(8,!0),c=r.getFloat32(12,!0),d=r.getFloat32(24,!0),u=r.getFloat32(28,!0),p=t.slice(57);let g=[];if(0===e){const t=new Uint16Array(p),e=Math.abs(h-c),r=65535;t.forEach((t=>{const i=t/r;g.push(h+e*i)}))}else 1===e&&(g=Array.from(new Float32Array(p)));return{timestamp:l,min:h,max:c,emissivity:d,reflectedKelvins:u,pixels:g}},registryHistogram:async t=>{let e=[];(await Promise.all(t.map((t=>(async t=>{const e=new DataView(t.slice(0,25)),r=e.getUint8(15),i=e.getUint16(17,!0)*e.getUint16(19,!0)*(1===r?4:2),s=57+i,n=t.slice(25),a=n.byteLength/s;let o=[];for(let t=0;t<a;t++){const e=t*s+57,a=e+i,l=n.slice(e,a);0===r||1===r&&(o=o.concat(Array.from(new Float32Array(l))))}return o})(t))))).forEach((t=>{e=e.concat(t)})),e.sort(((t,e)=>t-e));const r=e[0],i=e[e.length-1],s=Math.abs(r-i)/200,n=[];let a=[...e];for(let t=0;t<200;t++){const i=r+s*t,o=i+s,l=a.findIndex((t=>t>o)),h=a.slice(0,l-1).length,c=h/e.length*100,d={from:i,to:o,count:h,percentage:c};n.push(d),a=a.slice(l)}const o=[...n].sort(((t,e)=>t.percentage-e.percentage)),l=o[0].percentage,h=o[o.length-1].percentage,c=Math.abs(l-h);return n.map((t=>({...t,height:t.percentage/c*100})))},pointAnalysisData:async(t,e,r)=>{const i=new DataView(t),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=i.getUint8(15);let o=2;1===a&&(o=4);const l=57+s*n*o,h=t.slice(25),c=h.byteLength/l,d={},u=t=>{const i=t*l,n=i+l,c=h.slice(i,n),d=new DataView(c),u=((t,e)=>{const r=t.getBigInt64(e,!0),i=10000n,s=24n*60n*60n*1000n*i,n=0x4000000000000000n;let a=0x3fffffffffffffffn&r;return 0x8000000000000000n&r&&(a>n-s&&(a-=n),a<0&&(a+=s)),Number(a/i-62135596800000n)})(d,0),p=d.getFloat32(8,!0),g=d.getFloat32(12,!0)-p,m=57+r*o*s+e*o;let f=0;if(1===a)f=d.getFloat32(m,!0);else if(0===a){console.log("jsem uvnitř varia");f=p+g*(d.getInt16(m,!0)/65535)}return{timestamp:u,temperature:f}};let p=0;for(let t=0;t<c;t++){const e=u(t);0===p&&(p=e.timestamp),d[e.timestamp-p]=e.temperature}return d},rectAnalysisData:async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=n.getUint8(15);let h=2;1===l&&(h=4);const c=57+a*o*h,d=t.slice(25),u=d.byteLength/c,p={},g=t=>{const n=t*c,o=n+c,u=d.slice(n,o),p=new DataView(u),g=((t,e)=>{const r=t.getBigInt64(e,!0),i=10000n,s=24n*60n*60n*1000n*i,n=0x4000000000000000n;let a=0x3fffffffffffffffn&r;return 0x8000000000000000n&r&&(a>n-s&&(a-=n),a<0&&(a+=s)),Number(a/i-62135596800000n)})(p,0),m=p.getFloat32(8,!0),f=p.getFloat32(12,!0)-m,v=e,y=e+i,b=r+s;let w=1/0,x=-1/0,k=0,S=0;for(let t=r;t<=b;t++){const e=t*a;for(let t=v;t<=y;t++){const r=57+(e+t)*h;let i=NaN;if(1===l)i=p.getFloat32(r,!0);else{i=m+f*(p.getInt16(r,!0)/65535)}i<w&&(w=i),i>x&&(x=i),S+=i,k++}}return{timestamp:g,result:{min:w,max:x,avg:S/k,count:k}}};let m=0;for(let t=0;t<u;t++){const e=g(t);0===m&&(m=e.timestamp),p[e.timestamp-m]=e.result}return p},ellipsisAnalysisData:async(t,e,r,i,s)=>{const n=new DataView(t),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=n.getUint8(15);let h=2;1===l&&(h=4);const c=57+a*o*h,d=t.slice(25),u=d.byteLength/c,p={},g=(t,n)=>{const a=(t-(e+i/2))/(i/2),o=(n-(r+s/2))/(s/2);return a*a+o*o<=1},m=t=>{const n=t*c,o=n+c,u=d.slice(n,o),p=new DataView(u),m=((t,e)=>{const r=t.getBigInt64(e,!0),i=10000n,s=24n*60n*60n*1000n*i,n=0x4000000000000000n;let a=0x3fffffffffffffffn&r;return 0x8000000000000000n&r&&(a>n-s&&(a-=n),a<0&&(a+=s)),Number(a/i-62135596800000n)})(p,0),f=p.getFloat32(8,!0),v=p.getFloat32(12,!0)-f,y=e,b=e+i,w=r+s;let x=1/0,k=-1/0,S=0,C=0;for(let t=r;t<=w;t++){const e=t*a;for(let r=y;r<=b;r++)if(g(r,t)){const t=57+(e+r)*h;let i=NaN;if(1===l)i=p.getFloat32(t,!0);else{i=f+v*(p.getInt16(t,!0)/65535)}i<x&&(x=i),i>k&&(k=i),C+=i,S++}}return{timestamp:m,result:{min:x,max:k,avg:C/S,count:S}}};let f=0;for(let t=0;t<u;t++){const e=m(t);0===f&&(f=e.timestamp),p[e.timestamp-f]=e.result}return p}},Ri=Object.freeze(Li),Ti={LrcParser:Ri},Mi=Object.values(Ti),Ui=(t,e)=>{const r=Mi.find((r=>r.is(t,e)));if(void 0===r)throw new Ei(2,e,`No parser found for '${e}'.`);return r},Ii=Mi.map((t=>t.extensions)),ji=Ii.map((t=>t.map((t=>t.minme+", ."+t.extension)).join(", "))).join(", "),Fi=class t{constructor(t,e,r){O(this,"response"),this.service=t,this.thermalUrl=e,this.visibleUrl=r}static fromUrl(e,r,i){return new t(e,r,i)}async load(){return void 0===this.response&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(t){const e=await t;if(200!==e.status)return this.pocessTheService(new Oi(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const r=await e.arrayBuffer();try{const t=Ui(r,this.thermalUrl);return this.pocessTheService(new Di(this.service,r,t,this.thermalUrl,this.visibleUrl))}catch(t){if(t instanceof Ei)return this.pocessTheService(Oi.fromError(t));throw t}}pocessTheService(t){return t}},Ni=class t{constructor(t,e){O(this,"_hover",!1),O(this,"onMouseEnter",new Kr),O(this,"onMouseLeave",new Kr),O(this,"onDrop",new Kr),O(this,"onProcessingEnd",new Kr),O(this,"input"),O(this,"hydrated",!1),O(this,"bindedEnterListener"),O(this,"bindedLeaveListener"),O(this,"bindedDropListener"),O(this,"bindedInputChangeListener"),O(this,"bindedDragoverListener"),O(this,"bindedClickListener"),this.service=t,this.element=e,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,r){const i=new t(e,r);return i.hydrate(),i}hydrate(){!1===this.hydrated&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){!0===this.hydrated&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(t){t.preventDefault(),this.input&&this.input.click()}handleDragover(t){t.preventDefault(),this.handleEnter()}async handleDrop(t){t.preventDefault();const e=[],r=t.dataTransfer;if(r&&r.files)for(const t of Array.from(r.files))if(t){const r=await this.service.loadUploadedFile(t);e.push(r)}return this.onDrop.call(e),this.handleLeave(),e}async handleInputChange(t){t.preventDefault();const e=t.target;if(e.files){const t=e.files[0],r=await this.service.loadUploadedFile(t);this.onDrop.call([r]),this.handleLeave()}}handleEnter(){!1===this._hover&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){!0===this._hover&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const t=document.createElement("input");return t.type="file",t.accept=ji,t}openFileDialog(){var t;null==(t=this.input)||t.click()}},Wi=class extends Tr{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance((e=>e.recieveOpacity(t)))}imposeOpacity(t){return this.value=t,this.value}},Hi=class extends Tr{constructor(){super(...arguments),O(this,"_map",new Map)}get map(){return this._map}validate(t){return t}afterSetEffect(t){this._map.clear(),t.forEach((t=>this._map.set(t.id,t)))}addOrGetGroup(t,e,r){if(this._map.has(t))return this._map.get(t);const i=new Ai(this.parent,t,e,r);return this._map.set(t,i),this.value.push(i),this.value=[...this.value],i}removeGroup(t){var e;this._map.has(t)&&(null==(e=this._map.get(t))||e.destroySelfAndBelow(),this._map.delete(t),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach((t=>t.destroySelfAndBelow())),this.value=[]}},zi=class extends Tr{constructor(){super(...arguments),O(this,"_resolution",150),O(this,"buffer",new Map),O(this,"bufferPixelsCount",0),O(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(t){this._bufferResolution=Math.round(Math.max(t,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(t){this._resolution=Math.round(Math.min(Math.max(t,2),400))}validate(t){return t}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(void 0!==this.parent.minmax.value&&0!==this.parent.groups.value.length&&void 0!==this.parent.minmax.distanceInCelsius){const t=this.parent.groups.value.map((t=>t.files.value.map((t=>t.getPixelsForHistogram()))));this.parent.pool.exec(((t,e,r,i,s)=>{let n=t.reduce(((t,e)=>[...t,...e.reduce(((t,e)=>[...t,...e]),[])]),[]).sort(((t,e)=>t-e));const a=i/s;let o=e+a;const l=new Map;let h=0;for(;!1!==o;){const t=n.findIndex((t=>t>o)),e=n.slice(0,t).length;l.set(o-a/2,e),h+=e,n=n.slice(t);const i=o+a;o=i<r&&i}return{result:l,resultCount:h}}),[t,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then((t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()}))}}async recalculateHistogram(){const t=this.parent.groups.value.map((t=>t.files.value)).reduce(((t,e)=>t=t.concat(e)),[]).map((t=>t.service.buffer)),e=await this.parent.pool.exec(Ri.registryHistogram,[t]);this.value=e}},Bi=class extends Tr{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Vi=class extends Mr{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return 0===t.length?void 0:t.reduce(((t,e)=>void 0===e.minmax.value?t:{min:e.minmax.value.min<t.min?e.minmax.value.min:t.min,max:e.minmax.value.max>t.max?e.minmax.value.max:t.max}),{min:1/0,max:-1/0})}},Gi=class extends zr{constructor(t,e,r){super(),O(this,"hash",Math.random()),O(this,"groups",new Hi(this,[])),O(this,"opacity",new Wi(this,1)),O(this,"minmax",new Vi(this,void 0)),O(this,"loading",new Bi(this,!1)),O(this,"range",new Ir(this,void 0)),O(this,"histogram",new zi(this,[])),O(this,"palette"),this.id=t,this.manager=e,this.palette=this.manager.palette,r&&void 0!==r.histogramResolution&&r.histogramResolution>0&&this.histogram.setResolution(r.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(t){this.groups.value.forEach(t)}forEveryInstance(t){this.forEveryGroup((e=>e.files.forEveryInstance(t)))}async loadFullMultipleFiles(t){this.reset(),this.loading.markAsLoading();const e=await Promise.all(Object.entries(t).map((async([t,e])=>({group:this.groups.addOrGetGroup(t),groupFiles:await Promise.all(e.map((t=>this.service.loadFile(t.thermalUrl,t.visibleUrl))))}))));await Promise.all(e.map((async({group:t,groupFiles:e})=>await Promise.all(e.map((async e=>e instanceof Di&&await e.createInstance(t))))))),this.postLoadedProcessing()}async loadFullOneFile(t,e){this.reset();const r=this.groups.addOrGetGroup(e),i=await this.service.loadFile(t.thermalUrl,t.visibleUrl);i instanceof Di&&await i.createInstance(r),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(t,e){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup((t=>t.minmax.recalculateFromInstances())),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup((t=>t.reset())),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Yi=class extends Tr{validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry((e=>e.forEveryInstance((e=>{e.canvasLayer.canvas.style.imageRendering=!0===t?"auto":"pixelated"}))))}setSmooth(t){this.value=t}},qi=class extends Tr{validate(t){return t}afterSetEffect(){}setGraphSmooth(t){this.value=t}},Xi=class extends zr{constructor(t,e){super(),O(this,"id"),O(this,"service",new class{constructor(t){O(this,"requestsByUrl",new Map),O(this,"cacheByUrl",new Map),this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const r=new Xi(t).addOrGetRegistry(e);return{service:r.service,registry:r}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadUploadedFile(t){try{const e=await t.arrayBuffer(),r=Ui(e,t.name);return new Di(this,e,r,t.name)}catch(e){return new Oi(t.name,3,e.message)}}handleDropzone(t){return Ni.listenOnElement(this,t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=Fi.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}}(this)),O(this,"registries",{}),O(this,"palette",new Nr(this,"jet")),O(this,"smooth",new Yi(this,!1)),O(this,"graphSmooth",new qi(this,!1)),O(this,"pool"),this.pool=t||Rr.pool(),this.id=Math.random(),e&&e.palette&&this.palette.setPalette(e.palette)}forEveryRegistry(t){Object.values(this.registries).forEach((e=>t(e)))}addOrGetRegistry(t,e){return void 0===this.registries[t]&&(this.registries[t]=new Gi(t,this,e)),this.registries[t]}removeRegistry(t){void 0!==this.registries[t]&&(this.registries[t].destroySelfAndBelow(),delete this.registries[t])}},Zi=Object.defineProperty,Ki=(t,e,r,i)=>{for(var s,n=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&Zi(e,r,n),n};const Qi=["ready","select"],Ji={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"},ts=class extends Tt{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new Kr,this.left=0,this.top=0,this.w=0,this.h=0}render(){return yt`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){(async function(t){return await oe(),new google.visualization.ChartWrapper({container:t})})(this.shadowRoot.getElementById("chartdiv")).then((t=>{this.chartWrapper=t,this.onWrapper.call(t),this.typeChanged(),google.visualization.events.addListener(t,"ready",(()=>{this.drawn=!0,this.selection&&this.selectionChanged()})),google.visualization.events.addListener(t,"select",(()=>{this.selection=t.getChart().getSelection()})),this.propagateEvents(Qi,t)}))}updated(t){t.has("type")&&this.typeChanged(),(t.has("rows")||t.has("cols"))&&this.rowsOrColumnsChanged(),t.has("data")&&this.dataChanged(),t.has("view")&&this.viewChanged(),(t.has("_data")||t.has("options"))&&this.redraw(),t.has("selection")&&this.selectionChanged()}typeChanged(){if(null==this.chartWrapper)return;this.chartWrapper.setChartType(Ji[this.type]||this.type);const t=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",(()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==t&&this.propagateEvents(this.events.filter((t=>!Qi.includes(t))),e);const r=this.shadowRoot.getElementById("styles");r.children.length||this.localizeGlobalStylesheets(r)})),this.redraw()}propagateEvents(t,e){for(const r of t)google.visualization.events.addListener(e,r,(t=>{this.dispatchEvent(new CustomEvent(`google-chart-${r}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:t}}))}))}selectionChanged(){if(null==this.chartWrapper)return;const t=this.chartWrapper.getChart();if(null!=t&&t.setSelection){if("timeline"===this.type){const e=JSON.stringify(t.getSelection());if(JSON.stringify(this.selection)===e)return}t.setSelection(this.selection)}}redraw(){null==this.chartWrapper||null==this._data||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,void 0!==this.redrawTimeoutId&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout((()=>{this.chartWrapper.draw();const t=this.chartWrapper.visualization.ha.O;this.left=t.left,this.top=t.top,this.w=t.width,this.h=t.height}),5))}get imageURI(){if(null==this.chartWrapper)return null;const t=this.chartWrapper.getChart();return t&&t.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:t,cols:e}=this;if(t&&e)try{const r=await le({cols:e});r.addRows(t),this._data=r}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let t,e=this.data;if(!e)return;let r=!1;try{e=JSON.parse(e)}catch{r="string"==typeof e||e instanceof String}t=r?fetch(e).then((t=>t.json())):Promise.resolve(e),t.then(le).then((t=>{this._data=t}))}localizeGlobalStylesheets(t){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const r of e){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href",r.getAttribute("href")),t.appendChild(e)}}};ts.styles=U`
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
  `;let es=ts;Ki([Nt({type:String,reflect:!0})],es.prototype,"type"),Ki([Nt({type:Array})],es.prototype,"events"),Ki([Nt({type:Object,hasChanged:()=>!0})],es.prototype,"options"),Ki([Nt({type:Array})],es.prototype,"cols"),Ki([Nt({type:Array})],es.prototype,"rows"),Ki([Nt({type:String})],es.prototype,"data"),Ki([Nt({type:Object})],es.prototype,"view"),Ki([Nt({type:Array})],es.prototype,"selection"),Ki([Nt({type:Object})],es.prototype,"_data"),Ki([Nt({type:Number,reflect:!0})],es.prototype,"left"),Ki([Nt({type:Number,reflect:!0})],es.prototype,"top"),Ki([Nt({type:Number,reflect:!0})],es.prototype,"w"),Ki([Nt({type:Number,reflect:!0})],es.prototype,"h"),customElements.define("thermal-chart",es);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rs=1,is=2,ss=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ns=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=(t,e)=>{var r;const i=t._$AN;if(void 0===i)return!1;for(const t of i)null==(r=t._$AO)||r.call(t,e,!1),as(t,e);return!0},os=t=>{let e,r;do{if(void 0===(e=t._$AM))break;r=e._$AN,r.delete(t),t=e}while(0===(null==r?void 0:r.size))},ls=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),ds(e)}};function hs(t){void 0!==this._$AN?(os(this),this._$AM=t,ls(this)):this._$AM=t}function cs(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=r;t<i.length;t++)as(i[t],!1),os(i[t]);else null!=i&&(as(i,!1),os(i));else as(this,t)}const ds=t=>{t.type==is&&(t._$AP??(t._$AP=cs),t._$AQ??(t._$AQ=hs))};class us extends ns{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),ls(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?null==(r=this.reconnected)||r.call(this):null==(i=this.disconnected)||i.call(this)),e&&(as(this,t),os(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=()=>new gs;class gs{}const ms=new WeakMap,fs=ss(class extends us{render(t){return wt}update(t,[e]){var r;const i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(r=t.options)?void 0:r.host,this.rt(this.ct=t.element)),wt}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let r=ms.get(e);void 0===r&&(r=new WeakMap,ms.set(e,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=ms.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var vs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,bs=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?ys(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&vs(e,r,n),n};let ws=class extends Tt{constructor(){super(),this.dialogRef=ps(),this.closeButtonRef=ps(),this.invokerRef=ps()}setClose(){var t;null==(t=this.dialogRef.value)||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;null==(t=this.dialogRef.value)||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),"open"===t&&("true"===r?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return yt`
            <slot name="invoker" ${fs(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${fs(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${fs(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};ws.shadowRootOptions={...Tt.shadowRootOptions,mode:"open"},ws.styles=U`

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

        
    
    `,bs([Nt({type:String,reflect:!0})],ws.prototype,"label",2),ws=bs([It("thermal-dialog")],ws);var xs=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,Ss=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?ks(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&xs(e,r,n),n};let Cs=class extends Tt{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return yt`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Cs.VARIANTS=["slate","primary","foreground","background"],Cs.shadowRootOptions={...Tt.shadowRootOptions,mode:"open"},Cs.styles=U`

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
    
    `,Ss([Nt({type:String,converter:{fromAttribute:t=>Cs.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Cs.prototype,"variant",2),Ss([Nt({type:Boolean,reflect:!0,converter:{fromAttribute:t=>"true"===t,toAttribute:t=>t?"true":"false"}})],Cs.prototype,"interactive",2),Ss([Nt({type:String})],Cs.prototype,"size",2),Cs=Ss([It("thermal-button")],Cs);const $s=Math.min,_s=Math.max,As=Math.round,Ps=t=>({x:t,y:t}),Os={left:"right",right:"left",bottom:"top",top:"bottom"},Es={start:"end",end:"start"};function Ds(t,e,r){return _s(t,$s(e,r))}function Ls(t,e){return"function"==typeof t?t(e):t}function Rs(t){return t.split("-")[0]}function Ts(t){return t.split("-")[1]}function Ms(t){return"x"===t?"y":"x"}function Us(t){return"y"===t?"height":"width"}function Is(t){return["top","bottom"].includes(Rs(t))?"y":"x"}function js(t){return Ms(Is(t))}function Fs(t){return t.replace(/start|end/g,(t=>Es[t]))}function Ns(t){return t.replace(/left|right|bottom|top/g,(t=>Os[t]))}function Ws(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Hs(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function zs(t,e,r){let{reference:i,floating:s}=t;const n=Is(e),a=js(e),o=Us(a),l=Rs(e),h="y"===n,c=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,u=i[o]/2-s[o]/2;let p;switch(l){case"top":p={x:c,y:i.y-s.height};break;case"bottom":p={x:c,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-s.width,y:d};break;default:p={x:i.x,y:i.y}}switch(Ts(e)){case"start":p[a]-=u*(r&&h?-1:1);break;case"end":p[a]+=u*(r&&h?-1:1)}return p}async function Bs(t,e){var r;void 0===e&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=t,{boundary:h="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=Ls(e,t),g=Ws(p),m=o[u?"floating"===d?"reference":"floating":d],f=Hs(await n.getClippingRect({element:null==(r=await(null==n.isElement?void 0:n.isElement(m)))||r?m:m.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:c,strategy:l})),v="floating"===d?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==n.getOffsetParent?void 0:n.getOffsetParent(o.floating)),b=await(null==n.isElement?void 0:n.isElement(y))&&await(null==n.getScale?void 0:n.getScale(y))||{x:1,y:1},w=Hs(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:v,offsetParent:y,strategy:l}):v);return{top:(f.top-w.top+g.top)/b.y,bottom:(w.bottom-f.bottom+g.bottom)/b.y,left:(f.left-w.left+g.left)/b.x,right:(w.right-f.right+g.right)/b.x}}function Vs(t){const e=$s(...t.map((t=>t.left))),r=$s(...t.map((t=>t.top)));return{x:e,y:r,width:_s(...t.map((t=>t.right)))-e,height:_s(...t.map((t=>t.bottom)))-r}}function Gs(t){return Xs(t)?(t.nodeName||"").toLowerCase():"#document"}function Ys(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function qs(t){var e;return null==(e=(Xs(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Xs(t){return t instanceof Node||t instanceof Ys(t).Node}function Zs(t){return t instanceof Element||t instanceof Ys(t).Element}function Ks(t){return t instanceof HTMLElement||t instanceof Ys(t).HTMLElement}function Qs(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof Ys(t).ShadowRoot)}function Js(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=an(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function tn(t){return["table","td","th"].includes(Gs(t))}function en(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch{return!1}}))}function rn(t){const e=sn(),r=an(t);return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!e&&!!r.backdropFilter&&"none"!==r.backdropFilter||!e&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some((t=>(r.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(r.contain||"").includes(t)))}function sn(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function nn(t){return["html","body","#document"].includes(Gs(t))}function an(t){return Ys(t).getComputedStyle(t)}function on(t){return Zs(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ln(t){if("html"===Gs(t))return t;const e=t.assignedSlot||t.parentNode||Qs(t)&&t.host||qs(t);return Qs(e)?e.host:e}function hn(t){const e=ln(t);return nn(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ks(e)&&Js(e)?e:hn(e)}function cn(t,e,r){var i;void 0===e&&(e=[]),void 0===r&&(r=!0);const s=hn(t),n=s===(null==(i=t.ownerDocument)?void 0:i.body),a=Ys(s);return n?e.concat(a,a.visualViewport||[],Js(s)?s:[],a.frameElement&&r?cn(a.frameElement):[]):e.concat(s,cn(s,[],r))}function dn(t){const e=an(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Ks(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,o=As(r)!==n||As(i)!==a;return o&&(r=n,i=a),{width:r,height:i,$:o}}function un(t){return Zs(t)?t:t.contextElement}function pn(t){const e=un(t);if(!Ks(e))return Ps(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=dn(e);let a=(n?As(r.width):r.width)/i,o=(n?As(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const gn=Ps(0);function mn(t){const e=Ys(t);return sn()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:gn}function fn(t,e,r,i){void 0===e&&(e=!1),void 0===r&&(r=!1);const s=t.getBoundingClientRect(),n=un(t);let a=Ps(1);e&&(i?Zs(i)&&(a=pn(i)):a=pn(t));const o=function(t,e,r){return void 0===e&&(e=!1),!(!r||e&&r!==Ys(t))&&e}(n,r,i)?mn(n):Ps(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,c=s.width/a.x,d=s.height/a.y;if(n){const t=Ys(n),e=i&&Zs(i)?Ys(i):i;let r=t,s=r.frameElement;for(;s&&i&&e!==r;){const t=pn(s),e=s.getBoundingClientRect(),i=an(s),n=e.left+(s.clientLeft+parseFloat(i.paddingLeft))*t.x,a=e.top+(s.clientTop+parseFloat(i.paddingTop))*t.y;l*=t.x,h*=t.y,c*=t.x,d*=t.y,l+=n,h+=a,r=Ys(s),s=r.frameElement}}return Hs({width:c,height:d,x:l,y:h})}function vn(t){return fn(qs(t)).left+on(t).scrollLeft}function yn(t,e,r){let i;if("viewport"===e)i=function(t,e){const r=Ys(t),i=qs(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const t=sn();(!t||t&&"fixed"===e)&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}(t,r);else if("document"===e)i=function(t){const e=qs(t),r=on(t),i=t.ownerDocument.body,s=_s(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=_s(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+vn(t);const o=-r.scrollTop;return"rtl"===an(i).direction&&(a+=_s(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}(qs(t));else if(Zs(e))i=function(t,e){const r=fn(t,!0,"fixed"===e),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Ks(t)?pn(t):Ps(1);return{width:t.clientWidth*n.x,height:t.clientHeight*n.y,x:s*n.x,y:i*n.y}}(e,r);else{const r=mn(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return Hs(i)}function bn(t,e){const r=ln(t);return!(r===e||!Zs(r)||nn(r))&&("fixed"===an(r).position||bn(r,e))}function wn(t,e){const r=e.get(t);if(r)return r;let i=cn(t,[],!1).filter((t=>Zs(t)&&"body"!==Gs(t))),s=null;const n="fixed"===an(t).position;let a=n?ln(t):t;for(;Zs(a)&&!nn(a);){const e=an(a),r=rn(a);!r&&"fixed"===e.position&&(s=null),(n?!r&&!s:!r&&"static"===e.position&&s&&["absolute","fixed"].includes(s.position)||Js(a)&&!r&&bn(t,a))?i=i.filter((t=>t!==a)):s=e,a=ln(a)}return e.set(t,i),i}function xn(t,e,r){const i=Ks(e),s=qs(e),n="fixed"===r,a=fn(t,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=Ps(0);if(i||!i&&!n)if(("body"!==Gs(e)||Js(s))&&(o=on(e)),i){const t=fn(e,!0,n,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else s&&(l.x=vn(s));return{x:a.left+o.scrollLeft-l.x,y:a.top+o.scrollTop-l.y,width:a.width,height:a.height}}function kn(t){return"static"===an(t).position}function Sn(t,e){return Ks(t)&&"fixed"!==an(t).position?e?e(t):t.offsetParent:null}function Cn(t,e){const r=Ys(t);if(en(t))return r;if(!Ks(t)){let e=ln(t);for(;e&&!nn(e);){if(Zs(e)&&!kn(e))return e;e=ln(e)}return r}let i=Sn(t,e);for(;i&&tn(i)&&kn(i);)i=Sn(i,e);return i&&nn(i)&&kn(i)&&!rn(i)?r:i||function(t){let e=ln(t);for(;Ks(e)&&!nn(e);){if(en(e))return null;if(rn(e))return e;e=ln(e)}return null}(t)||r}const $n={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n="fixed"===s,a=qs(i),o=!!e&&en(e.floating);if(i===a||o&&n)return r;let l={scrollLeft:0,scrollTop:0},h=Ps(1);const c=Ps(0),d=Ks(i);if((d||!d&&!n)&&(("body"!==Gs(i)||Js(a))&&(l=on(i)),Ks(i))){const t=fn(i);h=pn(i),c.x=t.x+i.clientLeft,c.y=t.y+i.clientTop}return{width:r.width*h.x,height:r.height*h.y,x:r.x*h.x-l.scrollLeft*h.x+c.x,y:r.y*h.y-l.scrollTop*h.y+c.y}},getDocumentElement:qs,getClippingRect:function(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const n=[..."clippingAncestors"===r?en(e)?[]:wn(e,this._c):[].concat(r),i],a=n[0],o=n.reduce(((t,r)=>{const i=yn(e,r,s);return t.top=_s(i.top,t.top),t.right=$s(i.right,t.right),t.bottom=$s(i.bottom,t.bottom),t.left=_s(i.left,t.left),t}),yn(e,a,s));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}},getOffsetParent:Cn,getElementRects:async function(t){const e=this.getOffsetParent||Cn,r=this.getDimensions,i=await r(t.floating);return{reference:xn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:r}=dn(t);return{width:e,height:r}},getScale:pn,isElement:Zs,isRTL:function(t){return"rtl"===an(t).direction}},_n=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await async function(t,e){const{placement:r,platform:i,elements:s}=t,n=await(null==i.isRTL?void 0:i.isRTL(s.floating)),a=Rs(r),o=Ts(r),l="y"===Is(r),h=["left","top"].includes(a)?-1:1,c=n&&l?-1:1,d=Ls(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:g}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return o&&"number"==typeof g&&(p="end"===o?-1*g:g),l?{x:p*c,y:u*h}:{x:u*h,y:p*c}}(e,t);return a===(null==(r=o.offset)?void 0:r.placement)&&null!=(i=o.arrow)&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},An=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:t=>{let{x:e,y:r}=t;return{x:e,y:r}}},...l}=Ls(t,e),h={x:r,y:i},c=await Bs(e,l),d=Is(Rs(s)),u=Ms(d);let p=h[u],g=h[d];if(n){const t="y"===u?"bottom":"right";p=Ds(p+c["y"===u?"top":"left"],p,p-c[t])}if(a){const t="y"===d?"bottom":"right";g=Ds(g+c["y"===d?"top":"left"],g,g-c[t])}const m=o.fn({...e,[u]:p,[d]:g});return{...m,data:{x:m.x-r,y:m.y-i}}}}},Pn=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...f}=Ls(t,e);if(null!=(r=n.arrow)&&r.alignmentOffset)return{};const v=Rs(s),y=Rs(o)===o,b=await(null==l.isRTL?void 0:l.isRTL(h.floating)),w=u||(y||!m?[Ns(o)]:function(t){const e=Ns(t);return[Fs(t),e,Fs(e)]}(o));!u&&"none"!==g&&w.push(...function(t,e,r,i){const s=Ts(t);let n=function(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}(Rs(t),"start"===r,i);return s&&(n=n.map((t=>t+"-"+s)),e&&(n=n.concat(n.map(Fs)))),n}(o,m,g,b));const x=[o,...w],k=await Bs(e,f),S=[];let C=(null==(i=n.flip)?void 0:i.overflows)||[];if(c&&S.push(k[v]),d){const t=function(t,e,r){void 0===r&&(r=!1);const i=Ts(t),s=js(t),n=Us(s);let a="x"===s?i===(r?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Ns(a)),[a,Ns(a)]}(s,a,b);S.push(k[t[0]],k[t[1]])}if(C=[...C,{placement:s,overflows:S}],!S.every((t=>t<=0))){var $,_;const t=((null==($=n.flip)?void 0:$.index)||0)+1,e=x[t];if(e)return{data:{index:t,overflows:C},reset:{placement:e}};let r=null==(_=C.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:_.placement;if(!r)switch(p){case"bestFit":{var A;const t=null==(A=C.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:A[0];t&&(r=t);break}case"initialPlacement":r=o}if(s!==r)return{reset:{placement:r}}}return{}}}},On=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=Ls(t,e),c=Array.from(await(null==n.getClientRects?void 0:n.getClientRects(i.reference))||[]),d=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),r=[];let i=null;for(let t=0;t<e.length;t++){const s=e[t];!i||s.y-i.y>i.height/2?r.push([s]):r[r.length-1].push(s),i=s}return r.map((t=>Hs(Vs(t))))}(c),u=Hs(Vs(c)),p=Ws(o);const g=await n.getElementRects({reference:{getBoundingClientRect:function(){if(2===d.length&&d[0].left>d[1].right&&null!=l&&null!=h)return d.find((t=>l>t.left-p.left&&l<t.right+p.right&&h>t.top-p.top&&h<t.bottom+p.bottom))||u;if(d.length>=2){if("y"===Is(r)){const t=d[0],e=d[d.length-1],i="top"===Rs(r),s=t.top,n=e.bottom,a=i?t.left:e.left,o=i?t.right:e.right;return{top:s,bottom:n,left:a,right:o,width:o-a,height:n-s,x:a,y:s}}const t="left"===Rs(r),e=_s(...d.map((t=>t.right))),i=$s(...d.map((t=>t.left))),s=d.filter((r=>t?r.left===i:r.right===e)),n=s[0].top,a=s[s.length-1].bottom;return{top:n,bottom:a,left:i,right:e,width:e-i,height:a-n,x:i,y:n}}return u}},floating:i.floating,strategy:a});return s.reference.x!==g.reference.x||s.reference.y!==g.reference.y||s.reference.width!==g.reference.width||s.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}},En=(t,e,r)=>{const i=new Map,s={platform:$n,...r},n={...s.platform,_c:i};return(async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,o=n.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(e));let h=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:c,y:d}=zs(h,i,l),u=i,p={},g=0;for(let r=0;r<o.length;r++){const{name:n,fn:m}=o[r],{x:f,y:v,data:y,reset:b}=await m({x:c,y:d,initialPlacement:i,placement:u,strategy:s,middlewareData:p,rects:h,platform:a,elements:{reference:t,floating:e}});c=f??c,d=v??d,p={...p,[n]:{...p[n],...y}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(u=b.placement),b.rects&&(h=!0===b.rects?await a.getElementRects({reference:t,floating:e,strategy:s}):b.rects),({x:c,y:d}=zs(h,u,l))),r=-1)}return{x:c,y:d,placement:u,strategy:s,middlewareData:p}})(t,e,{...s,platform:n})},Dn=ss(class extends ns{constructor(t){var e;if(super(t),t.type!==rs||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&(null==(r=this.nt)||!r.has(t))&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||null!=(i=this.nt)&&i.has(t)||(r?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return bt}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ln=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Tn=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Rn(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Ln(e,r,n),n};let Mn=class extends Tt{constructor(){super(...arguments),this.dropdownRef=ps(),this.invokerRef=ps(),this.optionsRef=ps(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){"off"!==this.interactive&&("open"===this.open?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){En(this.invokerRef.value,this.optionsRef.value,{middleware:[_n(2),Pn(),On(),An()],placement:"bottom-start",strategy:"fixed"}).then((({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)}))}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach((t=>{t.childNodes.forEach((t=>t.addEventListener("click",(()=>{this.setClose()}))))}))}attributeChangedCallback(t,e,r){var i,s,n,a;"open"===t&&("open"===r?(null==(i=this.optionsRef.value)||i.classList.add("dropdown-options__show"),null==(s=this.dropdownRef.value)||s.classList.add("dropdown__open")):(null==(n=this.optionsRef.value)||n.classList.remove("dropdown-options__show"),null==(a=this.dropdownRef.value)||a.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:"on"===this.interactive,mayNot:"off"===this.interactive};return yt`

            <div class="dropdown" ${fs(this.dropdownRef)}>

                <thermal-button class="${Dn(t)}" ${fs(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${"on"===this.interactive?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${"close"===this.open?yt`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:yt`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${fs(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Mn.shadowRootOptions={...Tt.shadowRootOptions,mode:"open"},Mn.styles=U`

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
    
    `,Tn([Ht({slot:"option"})],Mn.prototype,"_options",2),Tn([Nt({type:String,reflect:!0})],Mn.prototype,"open",2),Tn([Nt({type:String,reflect:!0,attribute:!0}),Wt()],Mn.prototype,"interactive",2),Tn([Nt({type:String,reflect:!0})],Mn.prototype,"variant",2),Mn=Tn([It("thermal-dropdown")],Mn);var Un=Object.defineProperty,In=Object.getOwnPropertyDescriptor,jn=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?In(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Un(e,r,n),n};let Fn=class extends Tt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=ps(),this.contentRef=ps(),this.rulerContentRef=ps()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver((t=>{if(!1===this.collapsed){const t=this.contentRef.value.clientWidth;this.lastContentWidth=t}const e=t[0];this.lastContentWidth<e.contentRect.width?this.collapsed&&(this.collapsed=!1):!1===this.collapsed&&(this.collapsed=!0)})),this.observer.observe(this.drawerRef.value)}render(){return yt`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${fs(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${fs(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${fs(this.contentRef)}>

                    ${!1===this.collapsed?yt`
                        <slot></slot>    
                    `:wt}
                
                </div>

            </div>

            ${this.collapsed?yt`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:wt}
        
        `}};Fn.styles=U`

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

    `,jn([Wt()],Fn.prototype,"collapsed",2),jn([Wt()],Fn.prototype,"lastContentWidth",2),jn([Wt()],Fn.prototype,"drawerRef",2),Fn=jn([It("thermal-bar")],Fn);var Nn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Hn=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Wn(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Nn(e,r,n),n};let zn=class extends Tt{constructor(){super(...arguments),this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=ps(),this.contentRef=ps()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",(()=>{document.fullscreenElement||(this.fullscreen="off")}))}toggleFullscreen(){"on"===this.fullscreen?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),void 0===this.observer&&this.appRef.value instanceof Element&&void 0!==this.contentRef.value&&(this.observer=new ResizeObserver((t=>{const e=t[0];if("on"===this.fullscreen&&this.contentRef.value){const t=e.contentRect.height-175,r=e.contentRect.width-0,i=4/3;let s=0,n=0;this.contentRef.value.offsetHeight<t?(console.log("priorita šířky"),s=r,n=s/i):(console.log("priorita výšky"),n=t,s=n*i),this.contentRef.value.setAttribute("style",`width: ${s}px !important; height: ${n}px !important; align-self: center; justify-self: center;`)}else"off"===this.fullscreen&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")})),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),"fullscreen"===t&&("on"===r?null==(i=this.appRef.value)||i.requestFullscreen():"off"===r&&document.fullscreenElement&&document.exitFullscreen())}render(){return yt`

        <div class="container ${this.dark?"dark":"normal"}" ${fs(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?yt`
            <div class="bar">
                <slot name="bar"></slot>

                <slot name="close"></slot>

                <!--
                ${!0===this.showfullscreen?yt`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${"on"===this.fullscreen?yt`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:yt`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:wt}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?yt`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${fs(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?yt`<div class="credits">

                    ${this.recorded?yt`<div>
                            <div class="credits-field">Recorded at:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:wt}

                    ${this.author?yt`<div>
                            <div class="credits-field">Author:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:wt}

                    ${this.license?yt`<div>
                            <div class="credits-field">License:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:wt}

                </div>`:wt}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};zn.styles=U`

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
    
    `,Hn([Ht({slot:"bar",flatten:!0})],zn.prototype,"barElements",2),Hn([Ht({slot:"pre",flatten:!0})],zn.prototype,"preElements",2),Hn([Ht({slot:"content",flatten:!0})],zn.prototype,"contentElements",2),Hn([Nt({type:String,reflect:!0})],zn.prototype,"fullscreen",2),Hn([Nt({type:String,reflect:!0,attribute:!0})],zn.prototype,"showfullscreen",2),Hn([Nt({type:String,reflect:!0,attribute:!0})],zn.prototype,"dark",2),Hn([Nt()],zn.prototype,"author",2),Hn([Nt()],zn.prototype,"recorded",2),Hn([Nt()],zn.prototype,"license",2),zn=Hn([It("thermal-app")],zn);var Bn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Gn=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Vn(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Bn(e,r,n),n};let Yn=class extends Tt{render(){return yt`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&yt`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};Yn.styles=U`
    
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

    `,Gn([Nt({type:String})],Yn.prototype,"label",2),Gn([Nt({type:String})],Yn.prototype,"hint",2),Yn=Gn([It("thermal-field")],Yn);var qn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor;let Zn=class extends Tt{render(){return yt`
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
                        <p>version ${E}</p>
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
        `}};Zn.styles=U`

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
    
    `,Zn=((t,e,r,i)=>{for(var s,n=i>1?void 0:i?Xn(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&qn(e,r,n),n})([It("app-info-button")],Zn);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Kn=class extends Event{constructor(t,e,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=r??!1}},Qn=class{constructor(t,e,r,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Kn(this.context,this.t,this.subscribe))}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Jn{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ta,ea=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class ra extends Jn{constructor(t,e,r){var i,s;super(void 0!==e.context?e.initialValue:r),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const r=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)r.has(t)||(r.add(t),e.dispatchEvent(new Kn(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(s=(i=this.host).addController)||s.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ea(this.context))}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ia({context:t}){return(e,r)=>{const i=new WeakMap;if("object"==typeof r)return r.addInitializer((function(){i.set(this,new ra(this,{context:t}))})),{get(){return e.get.call(this)},set(t){var r;return null==(r=i.get(this))||r.setValue(t),e.set.call(this,t)},init(t){var e;return null==(e=i.get(this))||e.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new ra(e,{context:t}))}));const s=Object.getOwnPropertyDescriptor(e,r);let n;if(void 0===s){const t=new WeakMap;n={get(){return t.get(this)},set(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=s.set;n={...s,set(e){i.get(this).setValue(e),null==t||t.call(this,e)}}}return void Object.defineProperty(e,r,n)}}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sa({context:t,subscribe:e}){return(r,i)=>{"object"==typeof i?i.addInitializer((function(){new Qn(this,{context:t,callback:t=>{r.set.call(this,t)},subscribe:e})})):r.constructor.addInitializer((r=>{new Qn(r,{context:t,callback:t=>{r[i]=t},subscribe:e})}))}}const na=new Uint8Array(16);function aa(){if(!ta&&(ta=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ta))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ta(na)}const oa=[];for(let t=0;t<256;++t)oa.push((t+256).toString(16).slice(1));const la={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function ha(t,e,r){if(la.randomUUID&&!e&&!t)return la.randomUUID();const i=(t=t||{}).random||(t.rng||aa)();return i[6]=15&i[6]|64,i[8]=63&i[8]|128,function(t,e=0){return oa[t[e+0]]+oa[t[e+1]]+oa[t[e+2]]+oa[t[e+3]]+"-"+oa[t[e+4]]+oa[t[e+5]]+"-"+oa[t[e+6]]+oa[t[e+7]]+"-"+oa[t[e+8]]+oa[t[e+9]]+"-"+oa[t[e+10]]+oa[t[e+11]]+oa[t[e+12]]+oa[t[e+13]]+oa[t[e+14]]+oa[t[e+15]]}(i)}const ca=class extends Tt{constructor(){super(...arguments),this.UUID=ha()}log(...t){console.log(this.tagName,this.UUID.substring(0,5),...t)}};ca.shadowRootOptions={...Tt.shadowRootOptions,mode:"open"};let da=ca;const ua="manager-instance",pa="manager-palette-context",ga="manager-smooth-context",ma="manager-graph-function-context",fa=new Xi;var va=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,ba=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?ya(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&va(e,r,n),n};let wa=class extends da{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Fr.jet},this.smooth=!1,this.graphSmooth=!1}connectedCallback(){super.connectedCallback();let t=fa;if(void 0===this.slug)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=wa.sanitizeStringPalette(this.palette.key);e.palette=r,t=new Xi(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,(t=>{this.setPalette(t)})),this.manager.smooth.addListener(this.UUIDManagerListeners,(t=>{this.smooth=t})),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,(t=>{this.graphSmooth=t}))}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),"palette"===t&&this.manager){const t=wa.sanitizeStringPalette(r);this.manager.palette.setPalette(t)}}static sanitizeStringPalette(t){let e=!0;return null==t?e=!1:Object.keys(Fr).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:Fr[t]}}render(){return yt`<slot></slot>`}};ba([ia({context:ua})],wa.prototype,"manager",2),ba([Nt({type:String,reflect:!0,attribute:!0})],wa.prototype,"slug",2),ba([ia({context:pa}),Nt({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:Fr[t]}),toAttribute:t=>t.key.toString()}})],wa.prototype,"palette",2),ba([ia({context:ga}),Nt({type:String,reflect:!0,attribute:!0})],wa.prototype,"smooth",2),ba([ia({context:ma}),Nt({type:String,reflect:!0,attribute:!0})],wa.prototype,"graphSmooth",2),wa=ba([It("manager-provider")],wa);var xa=Object.defineProperty;class ka extends da{connectedCallback(){if(super.connectedCallback(),void 0===this.manager)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}((t,e,r,i)=>{for(var s,n=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);n&&xa(e,r,n)})([sa({context:ua,subscribe:!0}),Wt()],ka.prototype,"manager");const Sa="registry-instance",Ca="registry-opacity",$a="registry-range-from",_a="registry-range-to",Aa="registry-min",Pa="registry-max";var Oa=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,Da=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Ea(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Oa(e,r,n),n};let La=class extends ka{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=(t=>t.addOrGetRegistry("__internal_default_registry"))(this.manager);void 0===this.slug&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,(t=>{this.opacity=t})),this.registry.minmax.addListener(this.UUIDRegistryListeners,(t=>{void 0===t?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)})),this.registry.range.addListener(this.UUIDRegistryListeners,(t=>{void 0===t?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)})),this.registry.loading.addListener(this.UUIDRegistryListeners,(t=>{this.loading=t})),void 0!==this.from&&void 0!==this.to&&this.registry.range.imposeRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var i;if(super.attributeChangedCallback(t,e,r),("from"===t||"to"===t)&&r&&this.registry){const e=this.registry.range;if(void 0!==this.from&&void 0!==this.to){const s={from:"from"===t?parseFloat(r):this.from,to:"to"===t?parseFloat(r):this.to};void 0!==e.value?(this.from!==(null==(i=e.value)?void 0:i.from)||this.to!==e.value.to)&&e.imposeRange(s):e.imposeRange(s)}}if("opacity"===t){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return yt`<slot></slot>`}};Da([Nt({type:String,reflect:!0,attribute:!0})],La.prototype,"slug",2),Da([ia({context:Sa})],La.prototype,"registry",2),Da([ia({context:Ca}),Nt({type:Number,reflect:!0,attribute:!0})],La.prototype,"opacity",2),Da([ia({context:Aa}),Wt()],La.prototype,"min",2),Da([ia({context:Pa}),Wt()],La.prototype,"max",2),Da([ia({context:$a}),Nt({type:Number,reflect:!0,attribute:!0})],La.prototype,"from",2),Da([ia({context:_a}),Nt({type:Number,reflect:!0,attribute:!0})],La.prototype,"to",2),Da([ia({context:"registry-loading"}),Nt({type:String,reflect:!0,attribute:!0})],La.prototype,"loading",2),La=Da([It("registry-provider")],La);var Ra=Object.defineProperty;class Ta extends ka{connectedCallback(){if(super.connectedCallback(),void 0===this.registry)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}((t,e,r,i)=>{for(var s,n=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);n&&Ra(e,r,n)})([sa({context:Sa,subscribe:!0})],Ta.prototype,"registry");const Ma="group-instance",Ua="tool-context",Ia="tools-context";var ja=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,Na=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Fa(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&ja(e,r,n),n};let Wa=class extends Ta{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=(t=>t.groups.addOrGetGroup("__internal_default_group"))(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,(t=>{this.tool=t}))}render(){return yt`<slot></slot>`}};Na([Nt({type:String,attribute:!0,reflect:!0})],Wa.prototype,"slug",2),Na([ia({context:Ma})],Wa.prototype,"group",2),Na([ia({context:Ua})],Wa.prototype,"tool",2),Na([ia({context:Ia})],Wa.prototype,"tools",2),Wa=Na([It("group-provider")],Wa);const Ha=t=>{const e=t.split(";"),r=t=>!!e.find((e=>e===t)),i=t=>{const r=new RegExp(`${t}:\\d+`),i=e.find((t=>t.match(r)));if(void 0===i)throw new Error(`Error parsing analysis property '${t}'!`);return parseInt(i.split(":")[1])},s=e[0],n=e[1].trim(),a=(t=>{const r=new RegExp(`${t}:*`),i=e.find((t=>{if(t.match(r))return isNaN(parseInt(t.split(":")[1]))}));return null==i?void 0:i.split(":")[1].trim()})("color");let o;return o="point"===n?{name:s,type:n,color:a,top:i("top"),left:i("left"),avg:r("avg")}:{name:s,type:n,color:a,top:i("top"),left:i("left"),width:i("width"),height:i("height"),avg:r("avg"),min:r("min"),max:r("max")},o},za=t=>{const e=[],r=(t,r)=>{e.push(`${t}:${r}`)},i=(t,r)=>{r&&e.push(t)};if(e.push(t.name),e.push(t.type),s="color",void 0!==(n=t.color)&&e.push(`${s}:${n}`),"point"===t.type){const e=t;r("top",e.top),r("left",e.left),i("avg",e.avg)}else{const e=t;r("top",e.top),r("left",e.left),r("width",e.width),r("height",e.height),i("avg",e.avg),i("min",e.min),i("max",e.max)}var s,n;return e.join(";")};var Ba=Object.defineProperty;class Va extends Ta{constructor(){super()}connectedCallback(){super.connectedCallback()}}((t,e,r,i)=>{for(var s,n=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);n&&Ba(e,r,n)})([sa({context:Ma,subscribe:!0})],Va.prototype,"group");const Ga="file",Ya="failure",qa="file-loading",Xa="file-provider-element",Za="file-ms-context",Ka="file-cursor",Qa="file-cursor-setter",Ja="playback",to="duration",eo="playing",ro="playbackSpeed",io="recording",so="mayStop",no="file-markers-context";var ao=Object.defineProperty,oo=(t,e,r,i)=>{for(var s,n=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&ao(e,r,n),n};class lo extends Va{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=t=>{if(void 0===t)void 0!==this.cursor&&(this.cursor=void 0);else if(this.file){const e=this.file.timeline._convertPercenttRelative(t),r=this.file.timeline.findPreviousRelative(e);this.cursor={absolute:r.absolute,ms:r.relative,percentage:t}}},this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Kr,this.onSuccess=new Kr,this.onFailure=new Kr}firstUpdated(t){super.firstUpdated(t),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach((t=>console.log(t.innerHTML)))}attributeChangedCallback(t,e,r){var i,s,n;if(super.attributeChangedCallback(t,e,r),"ms"===t&&r&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,parseInt(r)));t!==this.currentFrame.ms&&(null==(i=this.file)||i.timeline.setRelativeTime(t))}"playing"===t&&("true"===r?null==(s=this.file)||s.timeline.play():"false"===r&&(null==(n=this.file)||n.timeline.pause())),"playbackspeed"===t&&this.file&&r&&Object.keys(Qr).includes(r)&&(this.file.timeline.playbackSpeed=parseFloat(r)),"recording"===t&&this.file&&(!0===this.recording&&"false"===r?this.file.recording.end():!1===this.recording&&"true"===r&&this.file.recording.start())}recieveInstance(t){this.file=t,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:t.timeline.duration,time:t.timeline.formatDuration(t.timeline.duration)},this.currentFrame={ms:t.timeline.currentMs,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:t.timeline.currentStep.index,absolute:t.timeline.currentStep.absolute},this.analysis=t.analysis.layers.all,this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=e=>{this.currentFrame={ms:e.relative,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:e.index,absolute:e.absolute},this.ms=e.relative},this.playbackSpeedCallback=t=>{this.playbackSpeed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},t.timeline.callbacksPlay.add(this.UUID,this.playCallback),t.timeline.callbacksPause.add(this.UUID,this.stopCallback),t.timeline.callbacksStop.add(this.UUID,this.stopCallback),t.timeline.callbacksEnd.add(this.UUID,this.stopCallback),t.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),t.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),t.recording.addListener(this.UUID,this.recordingCallback),t.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),t.analysis.addListener(this.UUID,this.analysisCallback)}removeInstance(t){t.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],t.timeline.callbacksPlay.delete(this.UUID),t.timeline.callbacksPause.delete(this.UUID),t.timeline.callbacksStop.delete(this.UUID),t.timeline.callbacksEnd.delete(this.UUID),t.timeline.callbacksChangeFrame.delete(this.UUID),t.timeline.callbackdPlaybackSpeed.delete(this.UUID),t.recording.removeListener(this.UUID),t.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}clearCallbacks(){this.onFailure.clear(),this.onSuccess.clear(),this.onLoadingStart.clear()}}oo([ia({context:Ga}),Wt()],lo.prototype,"file"),oo([ia({context:Ya}),Wt()],lo.prototype,"failure"),oo([ia({context:qa}),Wt()],lo.prototype,"loading"),oo([ia({context:"file-loaded"}),Wt()],lo.prototype,"ready"),oo([ia({context:eo}),Nt({type:String,reflect:!0,attribute:!0})],lo.prototype,"playing"),oo([ia({context:to}),Wt()],lo.prototype,"duration"),oo([ia({context:Ja}),Wt()],lo.prototype,"currentFrame"),oo([ia({context:Ka})],lo.prototype,"cursor"),oo([ia({context:Qa})],lo.prototype,"cursorSetter"),oo([ia({context:Za}),Nt({type:Number,reflect:!0,attribute:!0})],lo.prototype,"ms"),oo([ia({context:ro}),Nt({type:Number,reflect:!0,attribute:!0})],lo.prototype,"playbackSpeed"),oo([ia({context:io}),Nt({type:String,reflect:!0,attribute:!0})],lo.prototype,"recording"),oo([ia({context:so}),Wt()],lo.prototype,"mayStop"),oo([Ht({slot:"mark",flatten:!0})],lo.prototype,"marksQueriedInternally"),oo([ia({context:no})],lo.prototype,"marksProvidedBelow"),oo([ia({context:"analysislist"})],lo.prototype,"analysis");var ho=Object.defineProperty,co=Object.getOwnPropertyDescriptor,uo=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?co(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&ho(e,r,n),n};let po=class extends lo{constructor(){super(...arguments),this.providedSelf=this}async load(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then((async t=>t instanceof Di?await t.createInstance(this.group).then((t=>(this.file=t,this.onSuccess.call(t),this.clearCallbacks(),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,t))):(this.failure=t,this.onFailure.call(this.failure),this.clearCallbacks(),this.loading=!1,t))).then((t=>{t instanceof bi?this.recieveInstance(t):this.failure=t}))}handleLoaded(t){this.handleAnalysis(t,this.analysis1),this.handleAnalysis(t,this.analysis2),this.handleAnalysis(t,this.analysis3),this.handleAnalysis(t,this.analysis4),this.handleAnalysis(t,this.analysis5),this.handleAnalysis(t,this.analysis6),this.handleAnalysis(t,this.analysis7)}handleAnalysis(t,e){if(void 0===e)return;let r;if("point"===e.type){const i=e;r=t.analysis.layers.placePointAt(i.name,i.top,i.left,i.color),i.avg&&r.graph.setAvgActivation(!0)}else{const i=e;"rectangle"===i.type?r=t.analysis.layers.placeRectAt(i.name,i.top,i.left,i.width,i.height,i.color):"ellipsis"===i.type&&(r=t.analysis.layers.placeEllipsisAt(i.name,i.top,i.left,i.width,i.height,i.color)),null==r||r.graph.setAvgActivation(i.avg),null==r||r.graph.setMinActivation(i.min),null==r||r.graph.setMaxActivation(i.max)}null==r||r.setSelected(),this.log(r)}connectedCallback(){super.connectedCallback(),this.load()}updated(t){if(super.updated(t),t.has("thermal")){const e=t.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0),this.load()}}render(){return yt`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};uo([ia({context:Xa})],po.prototype,"providedSelf",2),uo([Nt({type:String,attribute:!0,reflect:!0})],po.prototype,"thermal",2),uo([Nt({type:String,attribute:!0,reflect:!0})],po.prototype,"visible",2),uo([Nt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Ha.bind(void 0),toAttribute:za.bind(void 0)}})],po.prototype,"analysis1",2),uo([Nt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Ha.bind(void 0),toAttribute:za.bind(void 0)}})],po.prototype,"analysis2",2),uo([Nt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Ha.bind(void 0),toAttribute:za.bind(void 0)}})],po.prototype,"analysis3",2),uo([Nt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Ha.bind(void 0),toAttribute:za.bind(void 0)}})],po.prototype,"analysis4",2),uo([Nt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Ha.bind(void 0),toAttribute:za.bind(void 0)}})],po.prototype,"analysis5",2),uo([Nt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Ha.bind(void 0),toAttribute:za.bind(void 0)}})],po.prototype,"analysis6",2),uo([Nt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:Ha.bind(void 0),toAttribute:za.bind(void 0)}})],po.prototype,"analysis7",2),po=uo([It("file-provider")],po);var go=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,fo=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?mo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&go(e,r,n),n};let vo=class extends lo{constructor(){super(...arguments),this.providedSelf=this,this.container=ps(),this.ready=!1,this.hover=!1}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(t){super.firstUpdated(t),void 0!==this.container.value&&(this.container.value.addEventListener("mouseenter",(()=>{})),this.container.value.addEventListener("mouseleave",(()=>{})),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,(()=>{this.hover=!0,this.log("enter")})),this.listener.onMouseLeave.add(this.UUID,(()=>{this.hover=!1,this.log("leave")})),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(t){this.onLoadingStart.call();const e=t[0];if(e)if(e instanceof Di){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Oi&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(!1===this.ready){const t={dropin:!0,hover:this.hover};return yt`

                    <div class="container">
                        <div ${fs(this.container)} class="${Dn(t)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${Ii.map((t=>t.map((t=>"."+t.extension))))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var t,e;null==(e=null==(t=this.listener)?void 0:t.input)||e.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return yt`
            ${this.ready?yt`<slot></slot>`:wt}
            <slot name="mark"></slot>
        `}};vo.styles=U`

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
    
    `,fo([ia({context:Xa})],vo.prototype,"providedSelf",2),fo([Wt()],vo.prototype,"container",2),fo([Wt()],vo.prototype,"ready",2),fo([Wt()],vo.prototype,"hover",2),fo([Wt()],vo.prototype,"listener",2),vo=fo([It("file-dropin")],vo);var yo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,wo=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?bo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&yo(e,r,n),n};let xo=class extends Va{constructor(){super(...arguments),this.container=ps(),this.hover=!1}firstUpdated(t){if(super.firstUpdated(t),this.log(this.container.value),void 0!==this.container.value){const t=this.manager.service.handleDropzone(this.container.value);t.onMouseEnter.add(this.UUID,(()=>{this.hover=!0,this.log("enter")})),t.onMouseLeave.add(this.UUID,(()=>{this.hover=!1,this.log("leave")}))}}render(){const t={dropin:!0,hover:this.hover};return yt`

            <div class="container">
            
                <div ${fs(this.container)} class="${Dn(t)}"></div>

            </div>
        
        `}};xo.styles=U`

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
    
    `,wo([Wt()],xo.prototype,"container",2),wo([Wt()],xo.prototype,"hover",2),xo=wo([It("group-dropin")],xo);var ko=Object.defineProperty,So=Object.getOwnPropertyDescriptor,Co=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?So(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&ko(e,r,n),n};let $o=class extends Ta{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return yt`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return yt`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Fr).map((([t,e])=>yt`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `))}
            
            </thermal-dropdown>

        `}};$o.styles=U`

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

    `,Co([sa({context:pa,subscribe:!0})],$o.prototype,"value",2),$o=Co([It("registry-palette-dropdown")],$o);var _o=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,Po=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Ao(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&_o(e,r,n),n};let Oo=class extends Ta{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return yt`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return yt`
            <div class="container">
                ${Object.entries(Fr).map((([t,e])=>yt`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `))}
            </div>
        `}};Oo.styles=U`

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

    `,Po([sa({context:pa,subscribe:!0}),Wt()],Oo.prototype,"value",2),Oo=Po([It("registry-palette-buttons")],Oo);var Eo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,Lo=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Do(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Eo(e,r,n),n};let Ro=class extends ka{connectedCallback(){super.connectedCallback()}render(){return yt`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.smooth.setSmooth(!1)}
            >Pixelated</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.smooth.setSmooth(!0)}
            >Smooth</thermal-button>
        `}};Ro.styles=U`
    
        :host {}

    `,Lo([sa({context:ga,subscribe:!0})],Ro.prototype,"smooth",2),Ro=Lo([It("manager-smooth-switch")],Ro);var To=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,Uo=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Mo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&To(e,r,n),n};let Io=class extends ka{connectedCallback(){super.connectedCallback()}render(){return yt`

            <thermal-button
                variant=${this.smooth?"default":"foreground"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
            >Straight lines</thermal-button>

            <thermal-button
                variant=${this.smooth?"foreground":"default"}
                @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
            >Smooth lines</thermal-button>
        `}};Io.styles=U`
    
        :host {}

    `,Uo([sa({context:ma,subscribe:!0})],Io.prototype,"smooth",2),Io=Uo([It("manager-graph-smooth-switch")],Io);var jo=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,No=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Fo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&jo(e,r,n),n};let Wo=class extends Ta{connectedCallback(){super.connectedCallback();this.registry.opacity.addListener(this.UUID,(t=>{this.value!==t&&(this.renderRoot.querySelector("#handler").value=t.toString())}).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return yt`
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
        `}};Wo.styles=U`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `,No([sa({context:Ca,subscribe:!0})],Wo.prototype,"value",2),Wo=No([It("registry-opacity-slider")],Wo);var Ho=Object.defineProperty,zo=Object.getOwnPropertyDescriptor;let Bo=class extends Ta{doAction(){this.registry.range.applyAuto()}render(){return yt`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};Bo=((t,e,r,i)=>{for(var s,n=i>1?void 0:i?zo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Ho(e,r,n),n})([It("registry-range-auto-button")],Bo);var Vo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor;let Yo=class extends Ta{doAction(){this.registry.range.applyMinmax()}render(){return yt`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};Yo=((t,e,r,i)=>{for(var s,n=i>1?void 0:i?Go(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Vo(e,r,n),n})([It("registry-range-full-button")],Yo);var qo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Zo=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Xo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&qo(e,r,n),n};let Ko=class extends Ta{constructor(){super(...arguments),this.ticksRef=ps(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,(t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)}))}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver((t=>{const e=t[0];this.calculateTicks(this.minmax,e.contentRect.width)})),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(void 0===t)this.ticks=[];else{const r=[0],i=Math.floor(e/Ko.TICK_WIDTH)-2,s=100/i;for(let t=1;t<i;t++)r.push(s*t);r.push(100),this.ticks=r.map((e=>this.calculateOneTick(t,e))).filter((t=>void 0!==t))}}calculateOneTick(t,e){if(void 0!==t){return{percentage:e,value:this.map(e,0,100,t.min,t.max)}}}render(){return yt`

            <div class="container ${void 0!==this.minmax?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${fs(this.ticksRef)}>

                    ${this.ticks.map((t=>yt`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Ko.TICK_FIXED)}
                                </div>
                            </div>
                        `))}

                </div>                

            </div>
        
        `}};Ko.TICK_WIDTH=40,Ko.TICK_FIXED=2,Ko.styles=U`

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


    `,Zo([Nt({type:String,reflect:!0})],Ko.prototype,"placement",2),Zo([Wt()],Ko.prototype,"minmax",2),Zo([Wt()],Ko.prototype,"ticks",2),Ko=Zo([It("registry-ticks-bar")],Ko);var Qo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,tl=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Jo(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Qo(e,r,n),n};let el=class extends Ta{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,(t=>{this.opacity=t})),this.registry.range.addListener(this.UUID,(t=>{this.range=t})),this.registry.minmax.addListener(this.UUID,(t=>{this.minmax=t})),this.registry.palette.addListener(this.UUID,(t=>{this.palette=t.toString()}))}renderRow(t,e){return yt`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=void 0===this.range?"undefined":Object.values(this.range).join(" - "),t.MINMAX=void 0===this.minmax?"undefined":Object.values(this.minmax).join(" - "),t}render(){return yt`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map((([t,e])=>this.renderRow(t,e)))}
                
                </table>
            </div>
        
        </div>`}};tl([Wt()],el.prototype,"minmax",2),tl([Wt()],el.prototype,"range",2),tl([Wt()],el.prototype,"opacity",2),tl([Wt()],el.prototype,"palette",2),el=tl([It("registry-log")],el),(()=>{var t=Object.defineProperty,e=Math.pow,r=(e,r,i)=>(((e,r,i)=>{r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i})(e,"symbol"!=typeof r?r+"":r,i),i),i="pointers-overlap",s="pointers-min-distance",n="pointers-max-distance",a="range-dragging",o="data",l="step",h="round",c="type",d="theme",u="disabled",p="keyboard-disabled",g="mousewheel-disabled",m="animate-onclick",f="vertical",v="horizontal",y=(t,e,r,i,s)=>{let n=e-t;return 0===n?r:(i-r)*(s-t)/n+r},b=t=>!isNaN(parseFloat(t))&&isFinite(t),w=(t,e)=>b(t)?Number(t):e,x=(t,e)=>0===e?0:Math.round(t/e)*e,k=t=>null!=t&&("boolean"==typeof t?t:"true"===t.trim().toLowerCase()),S=(t,e,r)=>{let i,s,n,a,o=0,l=!1,h=e=>{if(!l){switch(e.key){case"ArrowLeft":e.preventDefault(),"function"==typeof i&&i(r);break;case"ArrowRight":e.preventDefault(),"function"==typeof s&&s(r);break;case"ArrowUp":e.preventDefault(),"function"==typeof n&&n(r);break;case"ArrowDown":e.preventDefault(),"function"==typeof a&&a(r)}((t,e)=>{t.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:e}}))})(t,e)}},c=()=>{l||((t,e)=>{t.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:e}}))})(t,e)};return e.className=`pointer pointer-${r}`,e.addEventListener("keydown",h),e.addEventListener("click",c),{$pointer:e,get percent(){return o},get disabled(){return l},set disabled(t){(t=>{l=t,e.classList.toggle("disabled",l),l?e.setAttribute("aria-disabled","true"):e.hasAttribute("aria-disabled")&&e.removeAttribute("aria-disabled")})(t)},updatePosition:(t,r,i,s,n,a)=>{let l=o;void 0!==i&&t>i&&(t=i),void 0!==r&&t<r&&(t=r),o=t;let h=o;return(s===f&&a||s===v&&n)&&(h=100-h),s===f?e.style.top=`${h}%`:e.style.left=`${h}%`,l!==o},isClicked:t=>t===e||e.contains(t),setCallbacks:(t,e,r,o)=>{i=t,s=e,n=r,a=o},setAttr:(t,r)=>{null==r?e.removeAttribute(t):e.setAttribute(t,r)},getAttr:t=>e.getAttribute(t),destroy:()=>{e.removeEventListener("keydown",h),e.removeEventListener("click",c),e.remove()}}},C="--animate-onclick",$=(t,e,r)=>{let i=new Map;for(let s of t.attributes){let t=s.nodeName.trim().toLowerCase();if(!e.test(t))continue;let n=t.replace(/\D/g,"").trim(),a=""===n||"0"===n||"1"===n?0:w(n,0)-1,o=r&&"function"==typeof r?r(s.value):s.value;i.set(a,o)}return i},_=[["--width","slider-width","sliderWidth",null],["--height","slider-height","sliderHeight",null],["--panel-bg-border-radius","slider-radius","sliderRadius",null],["--panel-bg","slider-bg","sliderBg",null],["--panel-bg-hover","slider-bg-hover","sliderBgHover",null],["--panel-bg-fill","slider-bg-fill","sliderBgFill",null],["--pointer-width","pointer-width","pointer#Width",/^pointer([0-9]*)-width$/],["--pointer-height","pointer-height","pointer#Height",/^pointer([0-9]*)-height$/],["--pointer-border-radius","pointer-radius","pointer#Radius",/^pointer([0-9]*)-radius$/],["--pointer-bg","pointer-bg","pointer#Bg",/^pointer([0-9]*)-bg$/],["--pointer-bg-hover","pointer-bg-hover","pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],["--pointer-bg-focus","pointer-bg-focus","pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],["--pointer-shadow","pointer-shadow","pointer#Shadow",/^pointer([0-9]*)-shadow$/],["--pointer-shadow-hover","pointer-shadow-hover","pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],["--pointer-shadow-focus","pointer-shadow-focus","pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],["--pointer-border","pointer-border","pointer#Border",/^pointer([0-9]*)-border$/],["--pointer-border-hover","pointer-border-hover","pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],["--pointer-border-focus","pointer-border-focus","pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],A=(t,e,r)=>{let i=null,s=[],n=new Map,a=(t,r=e)=>{let i=[...r.classList];for(let r of i)r.startsWith(t)&&e.classList.remove(r)},o=()=>{a("shape");let t=e.querySelectorAll(".pointer");for(let e of t)a("shape",e)},l=t=>{i=t,a("theme-"),"string"==typeof t&&e.classList.add(`theme-${t}`)},h=()=>{if(o(),!(s.length<=0)){e.classList.add("shape",`shape-${s[0]}`);for(let t=1;t<s.length;t++){let r=s[t];if(!r)continue;let i=e.querySelector(`.pointer-${t}`);!i||i.classList.add("shape",`shape-${r}`)}}},c=(t,e)=>`${t}-${e}`,u=(t,i,s)=>{let a=r[s];if(!a)return;let o=0===s?e:a.$pointer;if(null==i)return n.has(c(t,s))&&n.delete(c(t,s)),void o.style.removeProperty(t);n.set(c(t,s),i),o.style.setProperty(t,i)},p=(t,e)=>n.get(c(t,e));return(()=>{for(let e of _){let[i,s,n,a]=e;if(a){let e=$(t,a);for(let t of e){let e=t[0],r=t[1];u(i,r,e)}}else{let e=t.getAttribute(s);u(i,e,0)}let o=[];if(-1===n.indexOf("#"))o.push([n,0]);else{o.push([n.replace("#",""),0]),o.push([n.replace("#","0"),0]),o.push([n.replace("#","1"),0]);for(let t=1;t<r.length;t++)o.push([n.replace("#",(t+1).toString()),t])}for(let e of o)try{let r=e[0],s=e[1];Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{get:()=>p(i,s),set:t=>{u(i,t,s)}})}catch(t){console.error(t)}}l(t.getAttribute(d)),(()=>{o();let e=$(t,/^pointer([0-9]*)-shape$/);if(!(e.size<=0)){for(let t of e){let e=t[0];s[e]=t[1]}h()}})()})(),{setStyle:u,getStyle:p,get theme(){return i},set theme(t){l(t)},get pointerShapes(){return s},setPointerShape:(t,e)=>{s[t]=e,h()}}},P="animate-on-click",O="range-dragging",E=(t,e,r,i,s,n,a)=>{try{Object.defineProperty(t,i,{configurable:!0,get(){if(!e)return;let t=e.pointers[r];if(!t)return;let i=e.getTextValue(t.percent);return b(i)?w(i,i):i},set:t=>{e.pointers[r]?null==e||e.setValue(t,r):null==e||e.addPointer(t)}}),Object.defineProperty(t,s,{configurable:!0,get(){var t,i;return null!=(i=null==(t=null==e?void 0:e.pointers[r])?void 0:t.getAttr("aria-label"))?i:void 0},set:t=>{!e||e.setAriaLabel(r,t)}}),Object.defineProperty(t,n,{configurable:!0,get(){var t,i;return null!=(i=null==(t=null==e?void 0:e.styles)?void 0:t.pointerShapes[r])?i:null},set:t=>{!e||!e.styles||e.styles.setPointerShape(r,t)}}),Object.defineProperty(t,a,{configurable:!0,get(){var t;return null!=(t=null==e?void 0:e.pointers[r].disabled)&&t},set:t=>{if(!e)return;let i=null==e?void 0:e.pointers[r];!i||(i.disabled=t)}})}catch(t){console.error(t)}},D=(t,e,r)=>{var i;let s=null==(i=r.shadowRoot)?void 0:i.querySelector(".container");if(s)for(let r of t)e?s.prepend(r.$pointer):s.append(r.$pointer)},L=100,R="0.3s",T=(t,r,d)=>{let _,E,T,M,U=d.map((t=>t[0])),I=null,j=null,F=null,N=null,W=0,H=L,z=v,B=2,V=!1,G=!1,Y=!1,q=0,X=1/0,Z=!1,K=!1,Q=!1,J=!1,tt=R,et=[],rt=e=>{K||(e.preventDefault&&e.preventDefault(),nt(e),window.addEventListener("mousemove",nt),window.addEventListener("mouseup",it),((t,e)=>{t.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:e}}))})(t,e))},it=e=>{K||(T=void 0,M=void 0,window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",it),tt&&r.classList.add(P),((t,e)=>{t.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:e}}))})(t,e))},st=()=>U.findIndex((t=>I===t&&!t.disabled)),nt=t=>{let e;if(z===f){let{height:i,top:s}=r.getBoundingClientRect(),n=-1!==t.type.indexOf("mouse")?t.clientY:t.touches[0].clientY;e=100*Math.min(Math.max(0,n-s),i)/i}else{let{width:i,left:s}=r.getBoundingClientRect(),n=-1!==t.type.indexOf("mouse")?t.clientX:t.touches[0].clientX;e=100*Math.min(Math.max(0,n-s),i)/i}if((V||G)&&(e=100-e),I=((t,e)=>{if(U.length<=0)return;if(1===U.length)return U[0].isClicked(t)&&tt&&r.classList.remove(P),U[0];let i=ut(t);if(Z){let t=e,s=vt(t);void 0!==s&&(t=x(t,s)),i?(T=t,M=0,tt&&r.classList.remove(P)):void 0!==T&&(M=t-T,T=t)}if(!dt(t)&&!i){for(let e of U)if(e.isClicked(t)&&!e.disabled)return tt&&r.classList.remove(P),e;for(let t of U)if(I===t)return t}let s=1/0,n=null;for(let t of U){if(t.disabled)continue;let r=Math.abs(e-t.percent);r<s&&(s=r,n=t)}return n})(t.target,e),I&&((t,e)=>{if(e&&!(t.length<=1)){for(let e of t)e.$pointer.style.zIndex=20..toString();e.$pointer.style.zIndex=40..toString()}})(U,I),Z&&U.length>1&&void 0!==M){let t=U[0],e=U[U.length-1],r=t.percent+M<0,i=e.percent+M>100;if(r||i)return;for(let t=0;t<U.length;t++)Wt(t,U[t].percent+M);return}let i=st();-1!==i&&(Wt(i,e),null==I||I.$pointer.focus())},at=e=>{if(K||document.activeElement!==t||null!=I&&I.disabled)return;e.stopPropagation(),e.preventDefault();let r=e.deltaY<0,i=V||G,s=r?!i:i,n=st();-1!==n&&(s?pt(n,U[n].percent):gt(n,U[n].percent))},ot=t=>{K||Q||(z===f?Wt(t,G?100:0):V?gt(t,U[t].percent):pt(t,U[t].percent))},lt=t=>{K||Q||(z===f?Wt(t,G?0:100):V?pt(t,U[t].percent):gt(t,U[t].percent))},ht=t=>{K||Q||(z===f?G?gt(t,U[t].percent):pt(t,U[t].percent):Wt(t,V?100:0))},ct=t=>{K||Q||(z===f?G?pt(t,U[t].percent):gt(t,U[t].percent):Wt(t,V?0:100))},dt=t=>t.classList.contains("panel"),ut=t=>t.classList.contains("panel-fill"),pt=(t,e)=>{if(void 0===e)return;let r=vt(e);null==r&&(r=1),(e-=r)<0&&(e=0),Wt(t,e)},gt=(t,e)=>{if(void 0===e)return;let r=vt(e);null==r&&(r=1),(e+=r)>100&&(e=100),Wt(t,e)},mt=()=>{!N||N.update({percents:Ct(),values:$t(),$pointers:_t(),min:At(),max:Pt(),data:Ot(),step:xt(),round:Dt(),type:Et(),textMin:bt(),textMax:wt(),rightToLeft:Tt(),bottomToTop:Mt(),pointersOverlap:Ft(),pointersMinDistance:Lt(),pointersMaxDistance:Rt(),rangeDragging:Nt(),disabled:Ut(),keyboardDisabled:It(),mousewheelDisabled:jt()})},ft=()=>{mt()},vt=t=>{let e;if("function"==typeof _){let r=y(0,100,W,H,t);e=_(r,t)}else e=_;if(b(e)){let t=H-W;return e=0===t?0:100*e/t,e}},yt=t=>{if(void 0===t)return;let r=y(0,100,W,H,t);return void 0!==E?E[Math.round(r)]:((t,r=1/0)=>{if(r===1/0)return t;let i=e(10,r);return Math.round(t*i)/i})(r,B)},bt=()=>void 0!==E?E[W]:W,wt=()=>void 0!==E?E[H]:H,xt=()=>_,kt=t=>{var e;return t<=0||Y?bt():null!=(e=yt(U[t-1].percent))?e:""},St=t=>{var e;return U.length<=1||t>=U.length-1||Y?wt():null!=(e=yt(U[t+1].percent))?e:""},Ct=()=>U.map((t=>t.percent)),$t=()=>U.map((t=>yt(t.percent))),_t=()=>U.map((t=>t.$pointer)),At=()=>W,Pt=()=>H,Ot=()=>E,Et=()=>z,Dt=()=>B,Lt=()=>q,Rt=()=>X,Tt=()=>V,Mt=()=>G,Ut=()=>K,It=()=>Q,jt=()=>J,Ft=()=>Y,Nt=()=>Z,Wt=(e,r)=>{if(void 0===r)return;let i=vt(r);void 0!==i&&(r=x(r,i));let s=U[e];if(!s)return;let n=s.updatePosition(r,(t=>{if(!(Y||U.length<=1||H===W)){if(0===t){let e=100*X/(H-W);return Math.max(0,U[t+1].percent-e)}{let e=100*q/(H-W);return Math.min(U[t-1].percent+e,100)}}})(e),(t=>{if(!(Y||U.length<=1||H===W)){if(t===U.length-1){let e=100*X/(H-W);return Math.min(U[t-1].percent+e,100)}{let e=100*q/(H-W);return Math.max(0,U[t+1].percent-e)}}})(e),z,V,G);null==j||j.updatePosition(z,U.map((t=>t.percent)),V,G),mt();for(let t of U){let e=yt(t.percent);void 0!==e&&(t.setAttr("aria-valuenow",e.toString()),t.setAttr("aria-valuetext",e.toString()))}zt(),n&&((t,e)=>{if(!e||e.length<=0)return;let r=e.map((t=>b(t)?w(t,t):t)),i={values:r||[]};i.value=r[0],i.value0=r[0],i.value1=r[0];for(let t=1;t<r.length;t++)i[`value${t+1}`]=r[t];t.dispatchEvent(new CustomEvent("change",{detail:i}))})(t,U.map((t=>yt(t.percent))))},Ht=()=>{for(let t=0;t<U.length;t++)Wt(t,U[t].percent)},zt=()=>{var t,e;for(let r=0;r<U.length;r++){let i=U[r];i.setAttr("aria-valuemin",(null!=(t=kt(r))?t:"").toString()),i.setAttr("aria-valuemax",(null!=(e=St(r))?e:"").toString())}},Bt=t=>{W=w(t,0),W>H&&(H=W+L),Ht()},Vt=t=>{H=w(t,L),H<W&&(H=W+L),Ht()},Gt=t=>{Y=!0;for(let e=0;e<t.length;e++)Yt(t[e],e);Y=!1;for(let e=0;e<t.length;e++)Yt(t[e],e)},Yt=(t,e)=>{let r;void 0!==E?(r=null==t?0:((t,e)=>e?e.findIndex((e=>e===t||e.toString().trim()===t.toString().trim())):-1)(t,E),-1===r&&(r=0)):(r=w(t,W),r<W&&(r=W),r>H&&(r=H));let i=y(W,H,0,100,r);Wt(e,i)},qt=t=>{if(null!=t){if("function"==typeof t)return _=t,void Ht();if(b(t)){_=w(t,1);let e=Math.abs(H-W);return _>e&&(_=void 0),void Ht()}_=void 0}else _=void 0},Xt=t=>{Y=t,Ht()},Zt=t=>{(!b(t)||t<0)&&(t=0),q=t},Kt=t=>{(!b(t)||t<0)&&(t=1/0),X=t},Qt=t=>{K=t,r.classList.toggle("disabled",K),K?r.setAttribute("aria-disabled","true"):r.hasAttribute("aria-disabled")&&r.removeAttribute("aria-disabled")},Jt=t=>{Q=t},te=t=>{J=t,J?document.removeEventListener("wheel",at):document.addEventListener("wheel",at,{passive:!1})},ee=t=>{null!=t?(E=(t=>{if(null==t)return;if(Array.isArray(t))return t;if(""===t.trim())return;let e=t.split(","),r=[],i=!0;for(let t=0;t<e.length;t++){let s=e[t].trim();""!==s&&(r.push(s),b(s)||(i=!1))}return i?r.map((t=>Number(t))):r})(t),void 0===E||E.length<=0?E=void 0:(Bt(0),Vt(E.length-1),void 0===_&&qt(1))):E=void 0},re=e=>{var r;z="string"==typeof e&&e.trim().toLowerCase()===f?f:v;let i=null==(r=t.shadowRoot)?void 0:r.querySelector(".range-slider-box");if(!i)return;i.className=`range-slider-box type-${z}`,Ht();let s=z===f?"vertical":"horizontal";for(let t of U)t.setAttr("aria-orientation",s)},ie=e=>{V=e,U.length>1&&D(U,V,t),Ht(),mt()},se=e=>{G=e,U.length>1&&D(U,G,t),Ht(),mt()},ne=t=>{B=w(t,2),B<0&&(B=2),mt()},ae=t=>{null==t||"false"===t.toString().trim().toLowerCase()?(tt=void 0,r.style.removeProperty(C),r.classList.remove(P)):(tt=t.toString(),r.style.setProperty(C,tt),r.classList.add(P))},oe=(t,e)=>{let r=U[t];!r||(r.setAttr("aria-label",e),et[t]=e)},le=t=>{if(T=void 0,U.length<=1)return Z=!1,void r.classList.remove(O);Z=t,r.classList.toggle(O,Z)};return(()=>{var e,v;for(let t of U)t.setCallbacks(ot,lt,ht,ct);let y=null==(e=t.shadowRoot)?void 0:e.querySelector(".panel-fill");y&&(j=(t=>({updatePosition:(e,r,i,s)=>{if(r.length<=0)return;let n=1===r.length,a=r[0],o=r[r.length-1];e===f?(t.style.removeProperty("width"),t.style.removeProperty("right"),t.style.removeProperty("left"),t.style.height=n?`${a}%`:`${Math.abs(a-o)}%`,s?(t.style.bottom="0%",t.style.top=n?"auto":`${Math.min(100-o,100-a)}%`):(t.style.bottom="auto",t.style.top=n?"0%":`${Math.min(a,o)}%`)):(t.style.removeProperty("height"),t.style.removeProperty("top"),t.style.removeProperty("bottom"),t.style.width=n?`${a}%`:`${Math.abs(a-o)}%`,i?(t.style.right="0%",t.style.left=n?"auto":`${Math.min(100-o,100-a)}%`):(t.style.right="auto",t.style.left=n?"0%":`${Math.min(a,o)}%`))}}))(y)),re(t.getAttribute(c)),ie(k(t.getAttribute("rtl"))),se(k(t.getAttribute("btt"))),((t,e)=>{W=void 0!==E?0:w(t,0),H=void 0!==E?E.length-1:w(e,L),Bt(W),Vt(H)})(t.getAttribute("min"),t.getAttribute("max")),qt(t.getAttribute(l)),ee(t.getAttribute(o)),Gt(d.map((t=>t[1]))),Xt(k(t.getAttribute(i))),Zt(w(t.getAttribute(s),0)),Kt(w(t.getAttribute(n),1/0)),le(k(t.getAttribute(a))),ne(w(t.getAttribute(h),2)),(()=>{Qt(k(t.getAttribute(u))),Q=k(t.getAttribute(p)),J=k(t.getAttribute(g));let e=$(t,/^pointer([0-9]*)-disabled$/,(t=>k(t)));for(let t of e){let e=t[0];!U[e]||(U[e].disabled=t[1])}})(),(()=>{let e=$(t,/^aria-label([0-9]*)$/);for(let t of e){let e=t[0];oe(e,t[1])}})(),F=A(t,r,U),ae(null!=(v=t.getAttribute(m))?v:R),r.addEventListener("mousedown",rt),r.addEventListener("mouseup",it),r.addEventListener("touchmove",nt),r.addEventListener("touchstart",nt),J||document.addEventListener("wheel",at,{passive:!1}),N=((t,e,r,i)=>{let s=[],n=e=>{if(e.gettersAndSetters)for(let r of e.gettersAndSetters)if(r.name&&r.attributes)try{Object.prototype.hasOwnProperty.call(t,r.name)||Object.defineProperty(t,r.name,r.attributes)}catch(t){console.error("defineSettersGetters error:",t)}},a=e=>{var r;if(!e.css)return;let i=null==(r=t.shadowRoot)?void 0:r.querySelector("style");!i||(i.innerHTML+=e.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let o of window.tcRangeSliderPlugins){let l=o();s.push(l),l.init&&"function"==typeof l.init&&(l.init(t,e,r,i),n(l),a(l))}},update:t=>{for(let e of s)e.update&&"function"==typeof e.update&&e.update(t)},onAttrChange:(t,e)=>{for(let r of s)r.onAttrChange&&"function"==typeof r.onAttrChange&&r.onAttrChange(t,e)},destroy:()=>{for(let t of s)t.destroy&&"function"==typeof t.destroy&&t.destroy()}}})(t,ft,{setValues:Gt,setMin:Bt,setMax:Vt,setStep:qt,setPointersOverlap:Xt,setPointersMinDistance:Zt,setPointersMaxDistance:Kt,setDisabled:Qt,setType:re,setRightToLeft:ie,setBottomToTop:se,setRound:ne,setKeyboardDisabled:Jt,setMousewheelDisabled:te,setRangeDragging:le,setData:ee},{getPercents:Ct,getValues:$t,getPointerElements:_t,getMin:At,getMax:Pt,getStep:xt,getData:Ot,getType:Et,getRound:Dt,getTextMin:bt,getTextMax:wt,isRightToLeft:Tt,isBottomToTop:Mt,isDisabled:Ut,isKeyboardDisabled:It,isMousewheelDisabled:jt,isPointersOverlap:Ft,isRangeDraggingEnabled:Nt,getPointersMinDistance:Lt,getPointersMaxDistance:Rt}),N.init()})(),{get pointers(){return U},get styles(){return F},get pluginsManager(){return N},get min(){return bt()},get max(){return wt()},get step(){return xt()},get pointersOverlap(){return Ft()},set pointersOverlap(t){Xt(t)},get pointersMinDistance(){return Lt()},set pointersMinDistance(t){Zt(t)},get pointersMaxDistance(){return Rt()},set pointersMaxDistance(t){Kt(t)},get disabled(){return Ut()},set disabled(t){Qt(t)},get data(){return Ot()},get type(){return Et()},set type(t){re(t)},get rightToLeft(){return Tt()},set rightToLeft(t){ie(t)},get bottomToTop(){return Mt()},set bottomToTop(t){se(t)},get round(){return Dt()},set round(t){ne(t)},get animateOnClick(){return tt},set animateOnClick(t){ae(t)},get keyboardDisabled(){return It()},set keyboardDisabled(t){Jt(t)},get mousewheelDisabled(){return jt()},set mousewheelDisabled(t){te(t)},get rangeDragging(){return Nt()},set rangeDragging(t){le(t)},setMin:Bt,setMax:Vt,setValue:Yt,setStep:qt,setData:ee,getTextValue:yt,setAriaLabel:oe,getAriaLabel:t=>et[t],addPointer:e=>{let r=U.length,i=U[r-1].$pointer,s=i.cloneNode(!0);i.after(s);let n=S(t,s,r);return n.setCallbacks(ot,lt,ht,ct),U.push(n),Yt(e,r),Ht(),mt(),r},removePointer:()=>{let t=U.length,e=U[t-1];return e?(e.destroy(),U.pop(),U.length<=1&&le(!1),Ht(),mt(),t-1):-1},destroy:()=>{r.removeEventListener("mousedown",rt),r.removeEventListener("mouseup",it),r.removeEventListener("touchmove",nt),r.removeEventListener("touchstart",nt),document.removeEventListener("wheel",at);for(let t of U)t.destroy();null==N||N.destroy()}}},M=class extends HTMLElement{constructor(){super(),r(this,"slider"),r(this,"_externalCSSList",[]),r(this,"_observer",null),this.attachShadow({mode:"open"})}set step(t){this.slider&&this.slider.setStep(t)}get step(){var t;return null==(t=this.slider)?void 0:t.step}set disabled(t){this.slider&&(this.slider.disabled=t)}get disabled(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.disabled)&&e}set data(t){var e;null==(e=this.slider)||e.setData(t)}get data(){var t;return null==(t=this.slider)?void 0:t.data}set min(t){var e;null==(e=this.slider)||e.setMin(t)}get min(){var t;return null==(t=this.slider)?void 0:t.min}set max(t){var e;null==(e=this.slider)||e.setMax(t)}get max(){var t;return null==(t=this.slider)?void 0:t.max}set round(t){!this.slider||(this.slider.round=t)}get round(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.round)?e:2}set type(t){!this.slider||(this.slider.type=t??v)}get type(){var t;return(null==(t=this.slider)?void 0:t.type)||v}set pointersOverlap(t){!this.slider||(this.slider.pointersOverlap=t)}get pointersOverlap(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.pointersOverlap)&&e}set pointersMinDistance(t){!this.slider||(this.slider.pointersMinDistance=t)}get pointersMinDistance(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.pointersMinDistance)?e:0}set pointersMaxDistance(t){!this.slider||(this.slider.pointersMaxDistance=t)}get pointersMaxDistance(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.pointersMaxDistance)?e:1/0}set theme(t){!this.slider||!this.slider.styles||(this.slider.styles.theme=t)}get theme(){var t,e,r;return null!=(r=null==(e=null==(t=this.slider)?void 0:t.styles)?void 0:e.theme)?r:null}set rtl(t){!this.slider||(this.slider.rightToLeft=t)}get rtl(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.rightToLeft)&&e}set btt(t){!this.slider||(this.slider.bottomToTop=t)}get btt(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.bottomToTop)&&e}set keyboardDisabled(t){!this.slider||(this.slider.keyboardDisabled=t)}get keyboardDisabled(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.keyboardDisabled)&&e}set mousewheelDisabled(t){!this.slider||(this.slider.mousewheelDisabled=t)}get mousewheelDisabled(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.mousewheelDisabled)&&e}set animateOnClick(t){!this.slider||(this.slider.animateOnClick=t)}get animateOnClick(){var t;return null==(t=this.slider)?void 0:t.animateOnClick}get rangeDragging(){var t,e;return null!=(e=null==(t=this.slider)?void 0:t.rangeDragging)&&e}set rangeDragging(t){this.slider&&(this.slider.rangeDragging=k(t))}get externalCSSList(){return this._externalCSSList}addPointer(t){var e,r;if(!this.slider)return;let i=null!=(r=null==(e=this.slider)?void 0:e.addPointer(t))?r:0;E(this,this.slider,i,`value${i+1}`,`ariaLabel${i+1}`,`pointerShape${i+1}`,`pointer${i+1}Disabled`)}removePointer(){var t;!this.slider||null==(t=this.slider)||t.removePointer()}addCSS(t){if(!this.shadowRoot)return;let e=document.createElement("style");e.textContent=t,this.shadowRoot.appendChild(e)}connectedCallback(){var t,e;if(!this.shadowRoot)return;this._externalCSSList=(t=>{if(!t)return null;let e=t.getAttribute("css-links");if(!e)return null;let r=e.split(";"),i=[];for(let t of r)""!==t.trim()&&i.push(t.trim());return i})(this),this.shadowRoot.innerHTML=((t,e)=>` ${e&&e.length>0?e.map((t=>`<link rel="stylesheet" href="${t}" />`)).join(""):""} <style> ${t} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`)(":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",this._externalCSSList);let r=null==(t=this.shadowRoot)?void 0:t.querySelector(".pointer");if(!r)return;let f=null==(e=this.shadowRoot)?void 0:e.getElementById("range-slider");if(!f)return;let v=((t,e)=>{let r=new Map,i=/^value([0-9]*)$/;for(let e of t.attributes){let t=e.nodeName.trim().toLowerCase();if(!i.test(t))continue;let s=t.replace("value","").trim(),n=""===s||"0"===s||"1"===s?0:w(s,0)-1,a=b(e.value)?w(e.value,0):e.value;r.set(n,a)}let s=Math.max(...Array.from(r.keys())),n=[];n.push([S(t,e,0),r.get(0)]);let a=e;for(let i=1;i<=s;i++){let s=e.cloneNode(!0);a.after(s),a=s,n.push([S(t,s,i),r.get(i)])}return n})(this,r);this.slider=T(this,f,v),((t,e)=>{let r=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let t=2;t<10;t++)r.push([`value${t}`,`ariaLabel${t}`,`pointer${t}Shape`,`pointer${t}Disabled`,t-1]);for(let i of r)E(t,e,i[4],i[0],i[1],i[2],i[3])})(this,this.slider),this._observer=new MutationObserver((t=>{t.forEach((t=>{var e;if(!this.slider||"attributes"!==t.type)return;let r=t.attributeName;!r||((t,e,r)=>{let f=_.find((([t,r,i,s])=>r.replace("#","")===e.replace(/\d+/g,"")));if(f&&t.styles){let[i,s,n,a]=f,o=e.replace(/\D/g,"").trim(),l=""===o||"0"===o||"1"===o?0:w(o,0)-1;return void t.styles.setStyle(i,r,l)}switch(t&&t.pluginsManager&&t.pluginsManager.onAttrChange(e,r),e){case"min":t.setMin(r);break;case"max":t.setMax(r);break;case l:t.setStep(r);break;case i:t.pointersOverlap=k(r);break;case s:t.pointersMinDistance=w(r,0);break;case a:t.rangeDragging=k(r);break;case n:t.pointersMaxDistance=w(r,1/0);break;case u:t.disabled=k(r);break;case p:t.keyboardDisabled=k(r);break;case g:t.mousewheelDisabled=k(r);break;case o:t.setData(r);break;case c:t.type=r;break;case"rtl":t.rightToLeft=k(r);break;case"btt":t.bottomToTop=k(r);break;case h:t.round=w(r,2);break;case d:t.styles&&(t.styles.theme=r);break;case m:t.animateOnClick=r}let v=null;if(/^value([0-9]*)$/.test(e)&&(v="value"),/^pointer([0-9]*)-disabled$/.test(e)&&(v="pointer-disabled"),/^aria-label([0-9]*)$/.test(e)&&(v="aria-label"),/^pointer([0-9]*)-shape$/.test(e)&&(v="pointer-shape"),!v)return;let y=e.replace(/\D/g,"").trim(),b=""===y||"0"===y||"1"===y?0:w(y,0)-1;switch(v){case"value":t.setValue(r,b);break;case"pointer-disabled":{let e=null==t?void 0:t.pointers[b];if(!e)return;e.disabled=k(r);break}case"aria-label":t.setAriaLabel(b,r);break;case"pointer-shape":t.styles&&t.styles.setPointerShape(b,r)}})(this.slider,r,null!=(e=this.getAttribute(r))?e:"")}))})),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}};window.tcRangeSlider=M,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",M),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends M{})})(),(()=>{var t=(t,e,r,i,s)=>{let n=e-t;return 0===n?r:(i-r)*(s-t)/n+r},e=(t,e)=>(t=>!isNaN(parseFloat(t))&&isFinite(t))(t)?Number(t):e,r=t=>null!=t&&("boolean"==typeof t?t:"true"===t.trim().toLowerCase());window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var i=11;window.tcRangeSliderPlugins.push((()=>{let s=null,n=null,a=null,o=null,l=null,h=!1,c=i,d=11,u=()=>{var t;let e=null==(t=null==s?void 0:s.shadowRoot)?void 0:t.querySelector("#range-slider");a=document.createElement("div"),a.classList.add("marks"),o=document.createElement("div"),o.classList.add("mark-points"),a.append(o),l=document.createElement("div"),l.classList.add("mark-values"),a.append(l),e.append(a)},p=()=>{!n||!a||a.classList.toggle("is-reversed",n.isRightToLeft()||n.isBottomToTop())},g=()=>{var e;if(!a||!n)return;let r=n.getMin(),i=n.getMax(),s="vertical"===n.getType(),h=n.isRightToLeft()||n.isBottomToTop();for(let t=0;t<c;t++){let e=document.createElement("div");e.classList.add("mark",`mark-${t}`);let r=0===c?0:100*t/(c-1);s?e.style.top=h?100-r+"%":`${r}%`:e.style.left=h?100-r+"%":`${r}%`,null==o||o.append(e)}let u=n.getData();for(let n=0;n<d;n++){let a=document.createElement("div");a.classList.add("mark-value",`mark-value-${n}`);let o=0===d?0:100*n/(d-1),c=t(0,d-1,r,i,n);a.textContent=(u?null!=(e=u[Math.round(c)])?e:"":c).toString(),s?a.style.top=h?100-o+"%":`${o}%`:a.style.left=h?100-o+"%":`${o}%`,null==l||l.append(a)}},m=(t,e)=>{b(),c=t,d=e,c<=0&&(c=i),d<=0&&(d=11),u(),g(),p()},f=t=>{h=t,h?(u(),g(),p()):b()},v=t=>{!a||a.style.setProperty("--marks-color",t)},y=t=>{!a||a.style.setProperty("--values-color",t)},b=()=>{null==a||a.remove()};return{get name(){return"Marks"},init:(t,a,o,l)=>{var c,d;n=l,s=t,h=r(s.getAttribute("marks")),h&&(m(e(s.getAttribute("marks-count"),i),e(s.getAttribute("marks-values-count"),11)),v(null!=(c=s.getAttribute("marks-color"))?c:"#cbd5e1"),y(null!=(d=s.getAttribute("marks-values-color"))?d:"#475569"))},onAttrChange:(t,s)=>{"marks"===t&&f(r(s)),"marks-count"===t&&m(e(s,i),d),"marks-values-count"===t&&m(c,e(s,11)),"marks-color"===t&&v(s),"marks-values-color"===t&&y(s)},gettersAndSetters:[{name:"marksEnabled",attributes:{get:()=>h??!1,set:t=>{f(r(t))}}},{name:"marksCount",attributes:{get:()=>c??i,set:t=>{m(e(t,i),d)}}},{name:"marksValuesCount",attributes:{get:()=>c??i,set:t=>{m(c,e(t,11))}}},{name:"marksColor",attributes:{get:()=>null==a?void 0:a.style.getPropertyValue("--marks-color"),set:t=>{v(t)}}},{name:"markValuesColor",attributes:{get:()=>null==a?void 0:a.style.getPropertyValue("--values-color"),set:t=>{y(t)}}}],destroy:b,css:"\n:root{\n  --marks-color: #cbd5e1;\n  --values-color: #475569;\n}\n  \n.marks{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  top: 100%;\n  left: 0;\n  color: var(--values-color, #475569);\n}\n\n.type-vertical .marks{\n  width: auto;\n  height: 100%;\n  top: 0;\n  left: 100%;\n  flex-direction: row;\n}\n    \n.mark-points{\n  width: 100%;\n  height: 1rem;\n  position: relative;\n  margin-top: 5px;\n}  \n\n.type-vertical .mark-points {\n  width: 1rem;\n  height: 100%;\n  margin-top: 0;\n  margin-left: 5px;\n}\n\n.mark-values{\n  width: 100%;\n  height: 1rem;\n  position: relative;\n}\n\n.type-vertical .mark-values {\n  width: 1rem;\n  height: 100%;\n  margin-left: 0.7rem;\n}\n\n.mark{\n  background: var(--marks-color, #cbd5e1);\n  width: 2px;\n  height: 5px;\n  position: absolute;\n  transform: translateX(-50%);\n}  \n\n.type-vertical .mark {\n    width: 5px;\n    height: 2px;\n    transform: translateY(-50%);\n}\n\n.mark-value{\n  position: absolute;\n  transform: translateX(-50%);\n}\n\n.type-vertical .mark-value{\n    transform: translateY(-50%);\n}\n    "}}))})();var rl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,sl=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?il(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&rl(e,r,n),n};let nl=class extends Ta{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=ps(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,(t=>{t&&(this.from=t.from,this.to=t.to)}))}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.imposeRange({from:t.from,to:t.to})}sliderDownListener(t){const e=t.detail;this.from=e.value1,this.to=e.value2}sliderUpListener(){void 0!==this.from&&void 0!==this.to&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&!1===this.initialised&&(this.initialised=!0,e.addCSS("\n                .pointer-shape {\n                    border-color: var( --thermal-foreground );\n                    border-radius: 0;\n                    width: 7px;\n                }\n        "),e.addEventListener("change",(t=>{const e=t.detail;this.from=e.value1,this.to=e.value2})),e.addEventListener("onMouseUp",(()=>{void 0!==this.from&&void 0!==this.to&&this.registry.range.imposeRange({from:this.from,to:this.to})})),e.addEventListener("onMouseDown",(t=>{this.log(t)})))}canRanderSlider(){return void 0!==this.min&&void 0!==this.max&&void 0!==this.from&&void 0!==this.to}render(){return!1===this.canRanderSlider()?yt`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:yt`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${fs(this.sliderRef)}
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

        `}};nl.styles=U`

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
    
    `,sl([sa({context:Aa,subscribe:!0}),Wt()],nl.prototype,"min",2),sl([sa({context:Pa,subscribe:!0}),Wt()],nl.prototype,"max",2),sl([sa({context:$a,subscribe:!0}),Wt()],nl.prototype,"from",2),sl([sa({context:_a,subscribe:!0}),Wt()],nl.prototype,"to",2),sl([Wt()],nl.prototype,"hasFixedFrom",2),sl([Wt()],nl.prototype,"hasFixedTo",2),sl([sa({context:pa,subscribe:!0}),Wt()],nl.prototype,"palette",2),sl([Wt()],nl.prototype,"sliderRef",2),sl([Wt()],nl.prototype,"initialised",2),nl=sl([It("registry-range-slider")],nl);var al=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,ll=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?ol(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&al(e,r,n),n};let hl=class extends Ta{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return void 0===this.from||void 0===this.to?wt:yt`
            <div>
                <span>${null==(t=this.from)?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${null==(e=this.to)?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};ll([sa({context:$a,subscribe:!0})],hl.prototype,"from",2),ll([sa({context:_a,subscribe:!0})],hl.prototype,"to",2),ll([Nt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],hl.prototype,"fixed",2),ll([Nt({type:String,reflect:!0,attribute:!0})],hl.prototype,"separator",2),hl=ll([It("registry-range-display")],hl);var cl=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,ul=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?dl(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&cl(e,r,n),n};let pl=class extends Ta{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,(t=>{this.histogram=t}))}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return yt`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":wt}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map((t=>yt`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `))}

                </div>

            </div>
        
        `}render(){return!1===this.interactive?this.renderHistogram():yt`
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
        `}};pl.styles=U`

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


    `,ul([Wt()],pl.prototype,"histogram",2),ul([Nt({type:Boolean,reflect:!0})],pl.prototype,"interactive",2),ul([Nt({type:String,reflect:!0})],pl.prototype,"height",2),pl=ul([It("registry-histogram")],pl);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class gl extends ns{constructor(t){if(super(t),this.it=wt,t.type!==is)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===wt||null==t)return this._t=void 0,this.it=t;if(t===bt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}gl.directiveName="unsafeHTML",gl.resultType=1;const ml=ss(gl);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fl extends gl{}fl.directiveName="unsafeSVG",fl.resultType=2;const vl=ss(fl);var yl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,wl=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?bl(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&yl(e,r,n),n};let xl=class extends Va{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",(t=>{this.hint=t.description}))}onSelect(t){this.group.tool.selectTool(t)}render(){return void 0===this.group?wt:yt`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map((([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return yt`
                        
                        <button 
                            class=${Dn(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${vl(e.icon)}
                        </button>
                        
                    `}))}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};xl.styles=U`

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

    `,wl([sa({context:Ua,subscribe:!0}),Wt()],xl.prototype,"value",2),wl([sa({context:Ia,subscribe:!0}),Wt()],xl.prototype,"tools",2),wl([Wt()],xl.prototype,"hint",2),xl=wl([It("group-tool-buttons")],xl);var kl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,Cl=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Sl(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&kl(e,r,n),n};let $l=class extends Va{connectedCallback(){super.connectedCallback()}onSelect(t){this.group.tool.selectTool(t)}render(){return void 0===this.group?wt:yt`
                    ${Object.entries(this.group.tool.tools).map((([t,e])=>{const r={[t]:!0,button:!0,switch:!0,active:e.key===this.value.key};return yt`
                        
                        <button 
                            class=${Dn(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${e.name}
                        >
                            ${vl(e.icon)}
                        </button>
                        
                    `}))}
        `}};$l.styles=U`

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

    `,Cl([sa({context:Ua,subscribe:!0}),Wt()],$l.prototype,"value",2),Cl([sa({context:Ia,subscribe:!0}),Wt()],$l.prototype,"tools",2),$l=Cl([It("group-tool-bar")],$l);var _l=Object.defineProperty,Al=(t,e,r,i)=>{for(var s,n=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&_l(e,r,n),n};class Pl extends Va{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.recording=!1}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(!this.parentFileProviderElement)throw new Error("Tento komponent není v souboru!");this.parentFileProviderElement.onSuccess.add(this.internalCallbackUUID,(()=>{this.loading=!1})),this.parentFileProviderElement.onFailure.add(this.internalCallbackUUID,(()=>{this.loading=!1})),this.parentFileProviderElement.onSuccess.add(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.add(this.UUID,this.onFailure.bind(this))}}Al([sa({context:Xa,subscribe:!0}),Wt()],Pl.prototype,"parentFileProviderElement"),Al([sa({context:qa,subscribe:!0}),Wt()],Pl.prototype,"loading"),Al([sa({context:Ga,subscribe:!0}),Wt()],Pl.prototype,"file"),Al([sa({context:Ya,subscribe:!0}),Wt()],Pl.prototype,"failure"),Al([sa({context:io,subscribe:!0}),Wt()],Pl.prototype,"recording");var Ol=Object.defineProperty,El=Object.getOwnPropertyDescriptor;let Dl=class extends Pl{constructor(){super(...arguments),this.container=ps()}onInstanceCreated(t){if(void 0===this.container.value)throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!");t.mountToDom(this.container.value)}onFailure(){}updated(t){if(super.updated(t),t.has("file")){const e=t.get("file"),r=this.file;void 0===e&&void 0!==r&&this.container.value&&this.file&&!1===this.file.mountedBaseLayers&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var t,e;const r=!1===this.loading&&void 0!==this.failure,i=!1===this.loading&&void 0!==this.file,s={"canvas-container":!0,"is-loading":this.loading,"is-loaded":!1===this.loading,"is-success":i,"is-error":r};return yt`
            <div ${fs(this.container)} class=${Dn(s)} part="file-canvas-container">
            
                ${!0===this.loading?yt`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:!0===r?yt`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                File loading error
                            </div>

                            <div class="error-url">
                                ${null==(t=this.failure)?void 0:t.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${null==(e=this.failure)?void 0:e.message}
                            </div>
                        </div>`:wt}
            
            </div>
        
        `}};Dl.styles=U`
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
    `,Dl=((t,e,r,i)=>{for(var s,n=i>1?void 0:i?El(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Ol(e,r,n),n})([It("file-canvas")],Dl);var Ll=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor;let Tl=class extends Pl{onInstanceCreated(t){}onFailure(t){}render(){return this.file?yt`
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
        `:wt}};Tl.styles=U`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `,Tl=((t,e,r,i)=>{for(var s,n=i>1?void 0:i?Rl(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Ll(e,r,n),n})([It("file-share-button")],Tl);var Ml=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor;let Il=class extends Pl{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>\n            <td style="width: 110px">${t}</td>\n            <td>${e}</td>\n        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=void 0!==i?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>\n            <a href=${r} target="_blank" title="${i}" class="download">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />\n                </svg>\n            </a>`)}render(){return this.file?yt`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${ml(this.renderRow("Thermal file name",this.file.fileName))}

                        ${ml(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?ml(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):wt}

                        ${ml(this.renderRow("Time",Hr.human(this.file.timestamp)))}

                        ${ml(this.renderNumericalRow("Duration",this.file.duration,0,"ms"))}

                        ${ml(this.renderRow("Resolution",`${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${ml(this.renderNumericalRow("Bytesize",this.file.bytesize,0))}
                        
                        ${ml(this.renderNumericalRow("Maximal temperature",this.file.max,10,"°C"))}

                        ${ml(this.renderNumericalRow("Minimal temperature",this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${ml(this.renderRow("Type",this.file.service.parser.name))}
                    ${ml(this.renderRow("Description",this.file.service.parser.description))}

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map((t=>yt`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`))}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:wt}};Il.styles=U`

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
    
    `,Il=((t,e,r,i)=>{for(var s,n=i>1?void 0:i?Ul(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Ml(e,r,n),n})([It("file-info-button")],Il);var jl=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor;let Nl=class extends Pl{onInstanceCreated(){}onFailure(){}render(){return void 0===this.file?wt:yt`

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

                    ${this.file.timeline.isSequence?yt`<div slot="option">
                            <thermal-button @click="${()=>{var t;return null==(t=this.file)?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:wt}
            
            </thermal-dropdown>

        
        `}};Nl.styles=U`

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
    
    `,Nl=((t,e,r,i)=>{for(var s,n=i>1?void 0:i?Fl(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&jl(e,r,n),n})([It("file-download-dropdown")],Nl);var Wl=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,zl=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Hl(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Wl(e,r,n),n};let Bl=class extends Pl{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=ps(),this.barRef=ps(),this.containerRef=ps(),this.collapsed=!1}onInstanceCreated(){}onFailure(){var t;null==(t=this.file)||t.timeline.removeListener(this.UUID)}update(t){super.update(t),void 0===this.observer&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver((t=>{t[0].contentRect.width<Bl.collapseWidth?!1===this.collapsed&&(this.collapsed=!0):!0===this.collapsed&&(this.collapsed=!1)})),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var t,e;!0===this.playing&&!1===this.mayStop||(this.playing?null==(t=this.file)||t.timeline.stop():null==(e=this.file)||e.timeline.play())}handleBarClick(t){if(!1!==this.mayStop&&this.timelineRef.value&&this.barRef.value&&this.file){const e=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(e)}}handleBarHover(t){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const e=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(e)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var t,e,r;const i=this.file;if(void 0===i)return wt;if(0===i.duration)return wt;const s={container:!0,collapsed:this.collapsed},n={may:!0===this.mayStop,mayNot:!1===this.mayStop},a={item:!0,button:!0,...n},o={item:!0,timeline:!0,...n};return yt`
            <div class="${Dn(s)}" ${fs(this.containerRef)}>


                ${void 0!==i?yt`
                        <div class="container">

                            <div class="${Dn(a)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?yt`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:yt`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${null==(t=this.currentFrame)?void 0:t.time}
                            </div>


                            <div class="${Dn(o)}"  ${fs(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${fs(this.barRef)}></div>
                                    ${this.cursor?yt`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map((t=>yt`<file-marker-timeline start=${t.fromMs} end=${t.endMs} ></file-marker-timeline>`))}
                                </div>

                            </div>

                            <div class="item inline small">${null==(e=this.duration)?void 0:e.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:wt}

            
            
            </div>

            ${void 0!==this.currentFrame?yt`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${ir(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${ir(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${null==(r=this.file)?void 0:r.frameCount}</span>
                        </div>
                    </div>`:wt}

          `}};Bl.collapseWidth=500,Bl.styles=U`
    
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
    
    `,zl([sa({context:eo,subscribe:!0}),Wt()],Bl.prototype,"playing",2),zl([sa({context:Ja,subscribe:!0}),Wt()],Bl.prototype,"currentFrame",2),zl([sa({context:to,subscribe:!0}),Wt()],Bl.prototype,"duration",2),zl([sa({context:so,subscribe:!0}),Wt()],Bl.prototype,"mayStop",2),zl([sa({context:Ka,subscribe:!0})],Bl.prototype,"cursor",2),zl([sa({context:Qa,subscribe:!0})],Bl.prototype,"cursorSetter",2),zl([sa({context:no,subscribe:!0})],Bl.prototype,"markers",2),zl([Wt()],Bl.prototype,"collapsed",2),Bl=zl([It("file-timeline")],Bl);var Vl=Object.defineProperty,Gl=Object.getOwnPropertyDescriptor,Yl=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Gl(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Vl(e,r,n),n};let ql=class extends Pl{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return void 0===this.file?wt:yt`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Qr).map((([t])=>yt`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof Mn&&r.parentElement.setClose())}}">${t}x</thermal-button>`))}
            
            </thermal-dropdown>

        
        `}};ql.styles=U`

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
    
    `,Yl([Nt({type:String,reflect:!0})],ql.prototype,"enabled",2),Yl([sa({context:ro,subscribe:!0}),Wt()],ql.prototype,"playbackSpeed",2),ql=Yl([It("file-playback-speed-dropdown")],ql);var Xl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Kl=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Zl(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Xl(e,r,n),n};let Ql=class extends Pl{constructor(){super(...arguments),this.container=ps()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(void 0!==this.container.value&&void 0!==this.currentFrame){const t=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(t)}return super.shouldUpdate(t)}render(){return yt`
            <div class="container">
            
                <video ${fs(this.container)} preload="metadata">

                    ${void 0===this.url?wt:yt`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Ql.styles=U`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `,Kl([sa({context:Ja,subscribe:!0}),Wt()],Ql.prototype,"currentFrame",2),Kl([Nt({type:String,reflect:!0,attribute:!0})],Ql.prototype,"url",2),Ql=Kl([It("file-video")],Ql);var Jl=Object.defineProperty,th=Object.getOwnPropertyDescriptor,eh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?th(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Jl(e,r,n),n};const rh={fromAttribute:t=>null===t?null:(t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(3!==r.length)throw new Error(`Invalid time format! ${e}`);return 60*parseInt(r[0])*1e3+1e3*parseInt(r[1])+parseInt(r[2])})(t),toAttribute:t=>null===t?null:(t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),ir(r,"mm:ss:SSS")})(t)};let ih=class extends Pl{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return void 0!==this.end?this.end:void 0!==this.dur?this.fromMs+this.dur:this.fromMs+300}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?!1===this.active&&(this.active=!0):!0===this.active&&(this.active=!1))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),this.log(t,e,r),"active"===t&&"true"===r?void 0!==this.say&&(this.speak(),this.playing&&this.pauseOnActivate&&(null==(i=this.file)||i.timeline.pause())):"active"===t&&"false"===r&&void 0!==this.say&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(void 0!==this.say){this.utterance=new SpeechSynthesisUtterance(this.say);const t=await this.getVoice();t&&(this.utterance.voice=t),this.utterance.voice=t,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,!1===this.playing&&this.pauseOnActivate&&(null==(t=this.file)||t.timeline.play())}}}async getVoice(){const t=await window.speechSynthesis.getVoices(),e=t.find((t=>"cs-CZ"===t.lang));if(e)return e;return t.find((t=>!0===t.default))||null}render(){return wt}};eh([sa({context:eo,subscribe:!0}),Wt()],ih.prototype,"playing",2),eh([sa({context:Za,subscribe:!0}),Wt()],ih.prototype,"ms",2),eh([Nt({type:String,reflect:!0,attribute:!0})],ih.prototype,"label",2),eh([Nt({type:String,reflect:!0,attribute:!0,converter:rh})],ih.prototype,"start",2),eh([Nt({type:String,reflect:!0,attribute:!0,converter:rh})],ih.prototype,"end",2),eh([Nt({type:String,reflect:!0,attribute:!0,converter:rh})],ih.prototype,"dur",2),eh([Nt({type:String,reflect:!0,attribute:!0})],ih.prototype,"active",2),eh([Nt({type:String,reflect:!0,attribute:!0})],ih.prototype,"pauseOnActivate",2),eh([Nt({type:String,reflect:!0,attribute:!0})],ih.prototype,"say",2),ih=eh([It("file-marker")],ih);var sh=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,ah=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?nh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&sh(e,r,n),n};let oh=class extends Pl{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return void 0===this.currentFrame?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?!1===this.active&&(this.active=!0):!0===this.active&&(this.active=!1))}render(){const t={container:!0,active:this.active};return yt`

            <div class="${Dn(t)}" @click=${async()=>{var t;if(this.file){const e=await this.file.timeline.findNextRelative(this.start);e&&(null==(t=this.file)||t.timeline.setRelativeTime(e.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};oh.styles=U`
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


    `,ah([sa({context:to,subscribe:!0}),Wt()],oh.prototype,"duration",2),ah([sa({context:Ja,subscribe:!0}),Wt()],oh.prototype,"currentFrame",2),ah([sa({context:Za,subscribe:!0}),Wt()],oh.prototype,"ms",2),ah([Nt({type:Number,reflect:!0,attribute:!0})],oh.prototype,"start",2),ah([Nt({type:Number,reflect:!0,attribute:!0})],oh.prototype,"end",2),ah([Wt()],oh.prototype,"active",2),oh=ah([It("file-marker-timeline")],oh);var lh=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,ch=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?hh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&lh(e,r,n),n};let dh=class extends Pl{onInstanceCreated(){}onFailure(){var t;null==(t=this.file)||t.timeline.removeListener(this.UUID)}render(){return yt`
            <div>


            ${this.markers.map((t=>t.active?yt`<div class="item">
                    <h2>${t.label}</h2>
                    ${ml(t.innerHTML)}
                    </div>`:wt))}

            
            
            </div>

          `}};dh.styles=U`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `,ch([sa({context:no,subscribe:!0})],dh.prototype,"markers",2),dh=ch([It("file-marks-content")],dh);var uh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,gh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?ph(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&uh(e,r,n),n};let mh=class extends da{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetName.delete(this.UUID);const r=this.analysis;this.name=r.name,r.onSetName.set(this.UUID,(t=>{this.name=t}))}}render(){return yt`

            <input 
                type="text"
                value="${this.name}" 
                @change=${t=>{const e=t.target,r=""!==e.value?e.value:this.analysis.nameInitial;this.analysis.setName(r)}}
            />

        `}};mh.styles=U`

    
    `,gh([Nt()],mh.prototype,"analysis",2),gh([Wt()],mh.prototype,"name",2),mh=gh([It("analysis-name")],mh);var fh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,yh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?vh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&fh(e,r,n),n};let bh=class extends da{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const r=this.analysis;this.color=r.initialColor,r.onSetInitialColor.set(this.UUID,(t=>{this.color=t}))}}renderColor(t){return yt`<i style="background-color: ${t};" aria-hidden></i><span>${t}</span>`}render(){return void 0===this.color?wt:yt`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*(t,e){if(void 0!==t){let r=0;for(const i of t)yield e(i,r++)}}(mi,(t=>yt`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(t)}}>
                        ${this.renderColor(t)}
                    </div>
                `))}
                    
            </thermal-dropdown>

        `}};bh.styles=U`

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
    
    `,yh([Nt()],bh.prototype,"analysis",2),yh([Wt()],bh.prototype,"color",2),bh=yh([It("analysis-color")],bh);var wh=Object.defineProperty,xh=Object.getOwnPropertyDescriptor,kh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?xh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&wh(e,r,n),n};let Sh=class extends da{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onMoveOrResize.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.width=r.width,this.height=r.height,this.right=r.left+r.width,this.bottom=r.top+r.height,this.maxX=r.file.width,this.maxY=r.file.height,r.onMoveOrResize.set(this.UUID,(t=>{this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height}))}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return yt`

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
                        max=${void 0!==this.right?this.right-1:this.maxX}
                        @change=${t=>this.handleInput(t,(t=>{this.analysis.setLeft(t)}))}
                    />
                </thermal-field>

                <thermal-field label="Right">
                    <input 
                        name="left" 
                        value=${this.right} 
                        type="number" 
                        step="1" 
                        min=${void 0!==this.left?this.left+1:0} 
                        max=${this.maxX}
                        @change=${t=>this.handleInput(t,(t=>{this.analysis.setRight(t)}))}
                    />
                </thermal-field>

                <thermal-field label="Top">
                    <input 
                        name="left" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0"
                        max=${void 0!==this.bottom?this.bottom-1:this.maxY}
                        @change=${t=>this.handleInput(t,(t=>{this.analysis.setTop(t)}))}
                    />
                </thermal-field>

                <thermal-field label="Bottom">
                    <input 
                        name="left" 
                        value=${this.bottom} 
                        type="number" 
                        step="1" 
                        min=${void 0!==this.top?this.top+1:0}
                        max=${this.maxY}
                        @change=${t=>this.handleInput(t,(t=>{this.analysis.setBottom(t)}))}
                    />
                </thermal-field>
                

            </div>
    
        
        `}};Sh.styles=U`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `,kh([Nt()],Sh.prototype,"analysis",2),kh([Wt()],Sh.prototype,"color",2),kh([Wt()],Sh.prototype,"top",2),kh([Wt()],Sh.prototype,"left",2),kh([Wt()],Sh.prototype,"width",2),kh([Wt()],Sh.prototype,"height",2),kh([Wt()],Sh.prototype,"type",2),kh([Wt()],Sh.prototype,"right",2),kh([Wt()],Sh.prototype,"bottom",2),kh([Wt()],Sh.prototype,"maxX",2),kh([Wt()],Sh.prototype,"maxY",2),Sh=kh([It("edit-area")],Sh);var Ch=Object.defineProperty,$h=Object.getOwnPropertyDescriptor,_h=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?$h(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Ch(e,r,n),n};let Ah=class extends da{constructor(){super(...arguments),this.topInputRef=ps(),this.leftInputRef=ps()}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onMoveOrResize.delete(this.UUID);const r=this.analysis;this.top=r.top,this.left=r.left,this.maxX=r.file.width,this.maxY=r.file.height,r.onMoveOrResize.set(this.UUID,(t=>{this.top=t.top,this.left=t.left}))}}handleInput(t,e){const r=t.target,i=parseInt(r.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return yt`

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
                        @change=${t=>this.handleInput(t,(t=>{this.analysis.setTop(t)}))}
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
                        @change=${t=>this.handleInput(t,(t=>{this.analysis.setLeft(t)}))}
                    />
                </thermal-field>

            </div>
        
        `}};Ah.styles=U`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `,_h([Nt()],Ah.prototype,"analysis",2),_h([Wt()],Ah.prototype,"top",2),_h([Wt()],Ah.prototype,"left",2),_h([Wt()],Ah.prototype,"maxX",2),_h([Wt()],Ah.prototype,"maxY",2),Ah=_h([It("edit-point")],Ah);var Ph=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,Eh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Oh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Ph(e,r,n),n};let Dh=class extends da{updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&e.onSetName.delete(this.UUID);const r=this.analysis;this.name=r.name,this.type=r.getType(),r.onSetName.set(this.UUID,(t=>{this.name=t}))}}render(){return yt`

            <thermal-dialog label="Edit ${this.type} analysis">

                <thermal-button slot="invoker">Edit</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof ni?yt`<edit-point .analysis=${this.analysis}></edit-point>`:yt`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Eh([Nt()],Dh.prototype,"analysis",2),Eh([Wt()],Dh.prototype,"name",2),Eh([Wt()],Dh.prototype,"type",2),Dh=Eh([It("file-analysis-edit")],Dh);var Lh=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,Th=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Rh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Lh(e,r,n),n};let Mh=class extends Pl{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=ps(),this.graphRef=ps(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(t){t.analysisData.addListener(this.UUID,(t=>{this.graphs=t})),this.graphs=t.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver((t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)})).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,(t=>{this.graphs=t})),this.hydrated=!0)}onFailure(){}update(t){super.update(t),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return yt`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&yt`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&yt`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${fs(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?yt`<thermal-chart 
                        ${fs(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:wt}
            </div>

            

            </div>
        
        `}};Mh.styles=U`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `,Th([Wt()],Mh.prototype,"hydrated",2),Th([Nt({reflect:!0})],Mh.prototype,"graphWidth",2),Th([Nt({reflect:!0})],Mh.prototype,"graphHeight",2),Th([Wt()],Mh.prototype,"graphs",2),Th([sa({context:Ja,subscribe:!0})],Mh.prototype,"currentFrame",2),Th([sa({context:Ka,subscribe:!0})],Mh.prototype,"cursor",2),Th([sa({context:Qa,subscribe:!0})],Mh.prototype,"cursorSetter",2),Th([Wt()],Mh.prototype,"shadowLeft",2),Th([Wt()],Mh.prototype,"shadowTop",2),Th([Wt()],Mh.prototype,"shadowWidth",2),Th([Wt()],Mh.prototype,"shadowHeight",2),Th([sa({context:ma,subscribe:!0})],Mh.prototype,"graphSmooth",2),Mh=Th([It("file-analysis-graph")],Mh);var Uh=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,jh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Ih(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Uh(e,r,n),n};let Fh=class extends da{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(t){if(super.updated(t),t.has("analysis")){const e=t.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const r=this.analysis;this.name=r.name,this.selected=r.selected,this.color=r.initialColor,this.dimension=r.width+"x"+r.height,this.value={min:r.min,max:r.max,avg:r.avg},r.file.timeline.isSequence?this.may=r instanceof ni?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:r.graph.state.MIN,max:r.graph.state.MAX,avg:r.graph.state.AVG},r.onMoveOrResize.set(this.UUID,(t=>{this.dimension=t.width+"x"+t.height})),r.onValues.set(this.UUID,((t,e,r)=>{this.value={min:t,max:e,avg:r}})),r.graph.onGraphActivation.set(this.UUID,((t,e,r)=>{this.graph={min:t,max:e,avg:r}})),r.onSelected.set(this.UUID,(()=>{this.selected=!0})),r.onDeselected.set(this.UUID,(()=>{this.selected=!1})),r.onSetInitialColor.set(this.UUID,(t=>{this.color=t})),r.onSetName.set(this.UUID,(t=>{this.name=t}))}}valueOrNothing(t){return void 0===t?"-":t.toFixed(2)+" °C"}renderCell(t,e,r,i){return yt`
            <td class="${e?"may":"mayNot"} ${r?"active":"inactive"}">

                ${e?yt`
                        <button
                            @click=${i}
                            style="background-color: ${r?this.color:"transparent"};"
                            title="${r?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(t)}
                        </button>
                    `:this.valueOrNothing(t)}

            </td>
        `}render(){return yt`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"}"
            @click=${()=>{this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0)}}
        >
            <u aria-hidden="true"></u>
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,(()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)}))}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,(()=>{this.analysis.graph.setMinActivation(!this.graph.min)}))}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,(()=>{this.analysis.graph.setMaxActivation(!this.graph.max)}))}
        <td>${this.dimension}</td>
        <td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>Remove</thermal-button>
        </td>
        
        `}};Fh.styles=U`
    
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

    `,jh([Nt()],Fh.prototype,"analysis",2),jh([Wt()],Fh.prototype,"value",2),jh([Wt()],Fh.prototype,"graph",2),jh([Wt()],Fh.prototype,"may",2),jh([Wt()],Fh.prototype,"dimension",2),jh([Wt()],Fh.prototype,"color",2),jh([Nt({type:Boolean,reflect:!0,attribute:!0})],Fh.prototype,"selected",2),jh([Wt()],Fh.prototype,"name",2),Fh=jh([It("file-analysis-table-row")],Fh);var Nh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Hh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Wh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Nh(e,r,n),n};let zh=class extends Pl{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(t){console.log(t)}onInstanceCreated(t){t.analysis.addListener(this.UUID,(t=>{this.analysis=t})),t.analysis.layers.onSelectionChange.add(this.UUID,(()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length})),t.analysisData.onGraphsPresence.set(this.UUID,(t=>{this.hasHighlightedData=t})),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}hydrate(t){t.analysis.addListener(this.UUID,(t=>{this.analysis=t})),t.analysis.layers.onSelectionChange.add(this.UUID,(()=>{this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length})),t.analysisData.onGraphsPresence.set(this.UUID,(t=>{this.hasHighlightedData=t})),this.allSelected=t.analysis.layers.all.length===t.analysis.layers.selectedOnly.length,this.analysis=t.analysis.value,this.hasHighlightedData=t.analysisData.hasActiveGraphs}render(){return 0===this.analysis.length||void 0===this.file?wt:yt`

        <div class="overflow">

        <table>


            <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

            <thead>

                <tr>
                    <th
                        class="all ${this.allSelected?"yes":"no"}"
                        @click=${()=>{var t,e;this.allSelected?null==(t=this.file)||t.analysis.layers.deselectAll():null==(e=this.file)||e.analysis.layers.selectAll()}}
                    >
                        <u aria-hidden="true"></u>
                        <span>Analysis</span>
                    </th>
                    <th>Avg</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Size</th>
                    <th style="padding-top: 0; padding-bottom: 0;">
                        ${this.hasHighlightedData?yt`<thermal-button variant="foreground" @click=${()=>{var t;null==(t=this.file)||t.analysisData.downloadData()}} title="Download graph data as CSV">CSV</thermal-button>`:wt}
                    </th>
                </tr>
            
            </thead>

            <tbody>

                        ${this.analysis.map((t=>yt`
                                <file-analysis-table-row
                                    .analysis=${t}
                                ></file-analysis-table-row>
                            `))}
            
            </tbody>

            </table>

            </div>
        `}};zh.styles=U`
    
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

        



    `,Hh([Wt()],zh.prototype,"analysis",2),Hh([Wt()],zh.prototype,"allSelected",2),Hh([Wt()],zh.prototype,"hasHighlightedData",2),zh=Hh([It("file-analysis-table")],zh);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bh=t=>t??wt;var Vh=Object.defineProperty,Gh=Object.getOwnPropertyDescriptor,Yh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Gh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Vh(e,r,n),n};let qh=class extends Pl{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}onInstanceCreated(t){this.recorded=Hr.human(t.timestamp)}onFailure(){}willUpdate(t){super.willUpdate(t),this.file&&(void 0!==this.speed&&(this.file.timeline.playbackSpeed=this.speed),void 0!==this.from&&void 0!==this.to&&this.registry.range.imposeRange({from:this.from,to:this.to}))}render(){return yt`
        <thermal-app author=${Bh(this.author)} recorded=${Bh(this.recorded)} license=${Bh(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
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

                  ${this.file&&this.file.timeline.isSequence?yt` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:wt}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${!0===this.showembed?yt`<file-share-button ></file-share-button>`:wt}
            
              ${!0===this.showabout?yt`<app-info-button ></app-info-button>`:wt}

            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            ${this.file&&this.file.timeline.isSequence?yt`<file-analysis-graph slot="post"></file-analysis-graph>`:wt}



          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};qh.styles=U`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `,Yh([Nt({type:Number})],qh.prototype,"from",2),Yh([Nt({type:Number})],qh.prototype,"to",2),Yh([Nt({type:Number})],qh.prototype,"speed",2),Yh([Nt({type:String,reflect:!0,attribute:!0})],qh.prototype,"showembed",2),Yh([Nt({type:String,reflect:!0,attribute:!0})],qh.prototype,"showabout",2),Yh([Nt({type:String,reflect:!0,attribute:!0})],qh.prototype,"showfullscreen",2),Yh([Nt()],qh.prototype,"author",2),Yh([Nt()],qh.prototype,"recorded",2),Yh([Nt()],qh.prototype,"license",2),Yh([Nt()],qh.prototype,"label",2),qh=Yh([It("file-app")],qh);var Xh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,Kh=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?Zh(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Xh(e,r,n),n};let Qh=class extends da{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return""===this.url?wt:yt`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}" 
            analysis1=${Bh(this.analysis1)}
            analysis2=${Bh(this.analysis2)}
            analysis3=${Bh(this.analysis3)}
            analysis4=${Bh(this.analysis4)}
            analysis5=${Bh(this.analysis5)}
            analysis6=${Bh(this.analysis6)}
            analysis7=${Bh(this.analysis7)}
          >

              <file-app 
                from=${Bh(this.from)} 
                to=${Bh(this.to)} 
                speed=${Bh(this.speed)} 
                author=${Bh(this.author)} 
                recorded=${Bh(this.recorded)} 
                license=${Bh(this.license)}
                label=${Bh(this.label)}  
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Kh([Nt({type:String,reflect:!0})],Qh.prototype,"palette",2),Kh([Nt({type:Number})],Qh.prototype,"from",2),Kh([Nt({type:Number})],Qh.prototype,"to",2),Kh([Nt({type:Number,reflect:!0})],Qh.prototype,"speed",2),Kh([Nt({type:String,reflect:!0})],Qh.prototype,"url",2),Kh([Nt({type:String,reflect:!0})],Qh.prototype,"analysis1",2),Kh([Nt({type:String,reflect:!0})],Qh.prototype,"analysis2",2),Kh([Nt({type:String,reflect:!0})],Qh.prototype,"analysis3",2),Kh([Nt({type:String,reflect:!0})],Qh.prototype,"analysis4",2),Kh([Nt({type:String,reflect:!0})],Qh.prototype,"analysis5",2),Kh([Nt({type:String,reflect:!0})],Qh.prototype,"analysis6",2),Kh([Nt({type:String,reflect:!0})],Qh.prototype,"analysis7",2),Kh([Nt()],Qh.prototype,"author",2),Kh([Nt()],Qh.prototype,"recorded",2),Kh([Nt()],Qh.prototype,"license",2),Kh([Nt()],Qh.prototype,"label",2),Qh=Kh([It("thermal-file-app")],Qh);var Jh=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,ec=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?tc(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&Jh(e,r,n),n};let rc=class extends Pl{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=ps(),this.contentContainerWidth=1e3}onInstanceCreated(t){this.recorded=Hr.human(t.timestamp),this.hasAnalysis=t.analysis.layers.all.length>0,this.hasGraph=t.analysisData.value.values.length>1,this.isSequence=t.timeline.isSequence,t.timeline.addListener(this.UUID,(()=>{this.isSequence=t.timeline.isSequence})),t.analysis.addListener(this.UUID,(t=>{this.hasAnalysis=t.length>0})),t.analysisData.addListener(this.UUID,(t=>{this.hasGraph=t.values.length>1})),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,(t=>{this.tool=t}))}onFailure(){}firstUpdated(t){super.firstUpdated(t),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver((t=>{this.contentContainerWidth=t[0].contentRect.width})).observe(this.contentContainerRef.value))}willUpdate(t){super.willUpdate(t),this.file&&(void 0!==this.speed&&(this.file.timeline.playbackSpeed=this.speed),void 0!==this.from&&void 0!==this.to&&this.registry.range.imposeRange({from:this.from,to:this.to}))}render(){var t,e;return yt`
        <thermal-app author=${Bh(this.author)} recorded=${Bh(this.recorded)} license=${Bh(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
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

                  ${this.file&&this.file.timeline.isSequence?yt` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:wt}

                  ${this.file&&this.file.timeline.isSequence?yt` <thermal-field 
                    label="Graph lines"
                    hint="'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'."
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:wt}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${!0===this.showembed?yt`<file-share-button ></file-share-button>`:wt}
            
              ${!0===this.showabout?yt`<app-info-button ></app-info-button>`:wt}


            


            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${fs(this.contentContainerRef)}>

                <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?yt`<group-tool-bar></group-tool-bar>`:yt`<group-tool-buttons></group-tool-buttons>`}
                </div>

                <div class="content-container__part content-container__left">


                  <registry-histogram slot="pre"></registry-histogram>
                  <registry-range-slider slot="pre"></registry-range-slider>
                  <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>

                  <file-canvas></file-canvas>
                  <file-timeline></file-timeline>
                </div>

                <div class="content-container__part content-container__right ${this.isSequence?"content-container__right__sequence":""}">

                  <div class="part analysis">
                    ${this.hasAnalysis?yt`<file-analysis-table></file-analysis-table>`:yt`<div class="placeholder">
                        <div class="placeholder-title">Analysis</div>
                        <div>You may select areas or points on the thermogram to see statistics here!</div>
                    ${["add-point","add-rect","add-ellipsis"].includes((null==(t=this.tool)?void 0:t.key)??"")?yt`
                      <div>${null==(e=this.tool)?void 0:e.description}</div>
                    `:yt`
                      <div>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-point")}>Add a point analysis</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>Add a rectangle analysis</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>Add a ellipsis analysis</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?yt`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${!1===this.hasGraph?yt`<div class="placeholder">
                      <div class="placeholder-title">Graph</div>
                      <div>${!1===this.hasAnalysis?"Add analysis first to see the graph!":yt`Click on an analysis <span style="display: inline-block;padding: 1px 4px; border-radius: var(--thermal-gap); border: 1px solid var(--thermal-slate);">value</span> to see its graph here!`}</div>
                    </div>`:wt}
                  
                  </div>
                  `:wt}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};rc.styles=U`

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
  
  `,ec([Nt({type:Number})],rc.prototype,"from",2),ec([Nt({type:Number})],rc.prototype,"to",2),ec([Nt({type:Number})],rc.prototype,"speed",2),ec([Nt({type:String,reflect:!0,attribute:!0})],rc.prototype,"showembed",2),ec([Nt({type:String,reflect:!0,attribute:!0})],rc.prototype,"showabout",2),ec([Nt({type:String,reflect:!0,attribute:!0})],rc.prototype,"showfullscreen",2),ec([Wt()],rc.prototype,"hasAnalysis",2),ec([Wt()],rc.prototype,"hasGraph",2),ec([Wt()],rc.prototype,"tool",2),ec([Wt()],rc.prototype,"isSequence",2),ec([Nt()],rc.prototype,"author",2),ec([Nt()],rc.prototype,"recorded",2),ec([Nt()],rc.prototype,"license",2),ec([Nt()],rc.prototype,"label",2),ec([Wt()],rc.prototype,"contentContainerWidth",2),rc=ec([It("desktop-app")],rc);var ic=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,nc=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?sc(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&ic(e,r,n),n};let ac=class extends da{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return""===this.url?wt:yt`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}"
            analysis1=${Bh(this.analysis1)}
            analysis2=${Bh(this.analysis2)}
            analysis3=${Bh(this.analysis3)}
            analysis4=${Bh(this.analysis4)}
            analysis5=${Bh(this.analysis5)}
            analysis6=${Bh(this.analysis6)}
            analysis7=${Bh(this.analysis7)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              from=${Bh(this.from)} 
              to=${Bh(this.to)} 
              speed=${Bh(this.speed)} 
              author=${Bh(this.author)} 
              recorded=${Bh(this.recorded)} 
              license=${Bh(this.license)}
              label=${Bh(this.label)}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};nc([Nt({type:String,reflect:!0})],ac.prototype,"palette",2),nc([Nt({type:Number})],ac.prototype,"from",2),nc([Nt({type:Number})],ac.prototype,"to",2),nc([Nt({type:Number,reflect:!0})],ac.prototype,"speed",2),nc([Nt({type:String,reflect:!0})],ac.prototype,"url",2),nc([Nt({type:String,reflect:!0})],ac.prototype,"analysis1",2),nc([Nt({type:String,reflect:!0})],ac.prototype,"analysis2",2),nc([Nt({type:String,reflect:!0})],ac.prototype,"analysis3",2),nc([Nt({type:String,reflect:!0})],ac.prototype,"analysis4",2),nc([Nt({type:String,reflect:!0})],ac.prototype,"analysis5",2),nc([Nt({type:String,reflect:!0})],ac.prototype,"analysis6",2),nc([Nt({type:String,reflect:!0})],ac.prototype,"analysis7",2),nc([Nt()],ac.prototype,"author",2),nc([Nt()],ac.prototype,"recorded",2),nc([Nt()],ac.prototype,"license",2),nc([Nt()],ac.prototype,"label",2),ac=nc([It("thermal-desktop-app")],ac);var oc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,hc=(t,e,r,i)=>{for(var s,n=i>1?void 0:i?lc(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i?s(e,r,n):s(n))||n);return i&&n&&oc(e,r,n),n};let cc=class extends da{constructor(){super(...arguments),this.dropinRef=ps(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(t){var e;super.firstUpdated(t),console.log(this.dropinRef.value,null==(e=this.dropinRef.value)?void 0:e.listener,"______"),setTimeout((()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,(()=>{var t;null==(t=this.dropinRef.value)||t.deleteFile(),this.loaded=!0}))}),0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return yt`

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

                            ${!0===this.loaded?yt`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:wt}

                            <file-dropin ${fs(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};cc.styles=U`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `,hc([Wt()],cc.prototype,"dropinRef",2),hc([Wt()],cc.prototype,"loaded",2),cc=hc([It("thermal-dropin-app")],cc);const dc=window.matchMedia("(prefers-color-scheme: dark)"),uc="thermal-dark-mode",pc=()=>{document.body.classList.add(uc)},gc=E.toString().replaceAll(".","-"),mc=(t,e)=>{const r=document.createElement("style");r.setAttribute("id",(t=>`thermal__${t}__${gc}`)(t)),r.innerHTML=e,document.head.appendChild(r)};(()=>{const t=document.createElement("link");t.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(t)})(),console.info(`@labir/embed ${E}\nAuthor: Jan Jáchim <jachim5@gmail.com>`),(()=>{dc.matches&&pc();const t=t=>{t.matches?pc():document.body.classList.remove(uc)};dc.addEventListener("change",t),dc.addListener(t)})(),mc("rootVariables","\n\n        :root {\n\n            /** Colors */\n            --thermal-foreground: black;\n            --thermal-background: white;\n\n            /** Primary - base */\n            --thermal-primary-base: blue;\n            --thermal-primary-base-dark: navy;\n            --thermal-primary-base-light: lightblue;\n\n            /** Primary */\n            --thermal-primary: var( --thermal-primary-base );\n            --thermal-primary-light: var( --thermal-primary-base-light );\n            --thermal-primary-dark: var( --thermal-primary-base-dark );\n\n            /** Slate -base */\n            --thermal-slate-base: #8e8c8f;\n            --thermal-slate-base-light: #dad7db;\n            --thermal-slate-base-dark: #49474a;\n\n            /** Slate */\n            --thermal-slate: var( --thermal-slate-base );\n            --thermal-slate-light: var( --thermal-slate-base-light );\n            --thermal-slate-dark: var( --thermal-slate-base-dark );\n\n            /** Gaps */\n            --thermal-gap-base: 16px;\n            --thermal-gap-sm: 17px;\n            --thermal-gap-md: 18px;\n            --thermal-gap-lg: 19px;\n            --thermal-gap-xl: 20px; \n            --thermal-gap: var( --thermal-gap-base );\n\n            /** Font sizes */\n            --thermal-fs-base: 16px;\n            --thermal-fs-sm: 16px;\n            --thermal-fs-md: 16px;\n            --thermal-fs-lg: 16px;\n            --thermal-fs-xl: 16px; \n            --thermal-fs: var( --thermal-fs-base );\n            --thermal-fs-small: calc( var( --thermal-fs ) * 0.9 );\n            --thermal-fs-large: calc( var( --thermal-fs ) * 1.2 );\n\n            /** Round corners */\n            --thermal-radius-base: 5px;\n            --thermal-radius-sm: 6px;\n            --thermal-radius-md: 7px;\n            --thermal-radius-lg: 8px;\n            --thermal-radius-xl: 9px;\n            --thermal-radius: var( --thermal-radius-base );\n\n            /** Shadows */\n            --thermal-shadow: 0px 0px 5px var( --thermal-slate-dark );\n            --thermal-shadow-none: 0px 0px 0px transparent;\n        \n        }\n\n        :root {\n        \n            @media ( min-width: 640px ) {\n                --thermal-gap: var( --thermal-gap-sm );\n                --thermal-fs: var( --thermal-fs-sm );\n                --thermal-radius: var( --thermal-radius-sm );\n            }\n\n            @media ( min-width: 960px ) {\n                --thermal-gap: var( --thermal-gap-md );\n                --thermal-fs: var( --thermal-fs-md );\n                --thermal-radius: var( --thermal-radius-md );\n            }\n            \n            @media ( min-width: 1250px ) {\n                --thermal-gap: var( --thermal-gap-lg );\n                --thermal-fs: var( --thermal-fs-lg );\n                --thermal-radius: var( --thermal-radius-lg );\n            }\n\n            @media ( min-width: 1440px ) {\n                --thermal-gap: var( --thermal-gap-xl );\n                --thermal-fs: var( --thermal-fs-xl );\n                --thermal-radius: var( --thermal-radius-xl );\n            }\n        \n        }\n\n\n            \n        \n        "),mc("darkModeOverrides",`\n        \n            body.${uc} {\n\n                --thermal-primary: aqua;\n                --thermal-foreground: white;\n                --thermal-background: black;\n            \n                --thermal-primary-light: var( --thermal-primary-base-dark );\n                --thermal-primary-dark: var( --thermal-primary-base-light );\n\n                --thermal-slate-light: var( --thermal-slate-base-dark );\n                --thermal-slate-dark: var( --thermal-slate-base-light );\n            \n            }\n            \n        `),document.addEventListener("DOMContentLoaded",(()=>{}));export{A as default};