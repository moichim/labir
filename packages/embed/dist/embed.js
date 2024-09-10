var gl=Object.defineProperty;var ml=(t,e,r)=>e in t?gl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var d=(t,e,r)=>(ml(t,typeof e!="symbol"?e+"":e,r),r);const vl="@labir/embed",Co="1.2.28",bl="Embedded display of thermograms",yl="dist/embed.js",wl="module",So={type:"git",url:"https://github.com/moichim/labir"},xl={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},Oo="Jan Jáchim <jachim5@gmail.com>",kl="ISC",_l={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@types/uuid":"^9.0.8","date-fns":"^3.6.0",lit:"^3.1.4","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11",workerpool:"^9.1.3"},$l={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},Eo={name:vl,version:Co,description:bl,main:yl,type:wl,repository:So,scripts:xl,author:Oo,license:kl,dependencies:_l,devDependencies:$l};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=globalThis,ln=_i.ShadowRoot&&(_i.ShadyCSS===void 0||_i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cn=Symbol(),qn=new WeakMap;let Ao=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==cn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(ln&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=qn.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&qn.set(r,e))}return e}toString(){return this.cssText}};const Pl=t=>new Ao(typeof t=="string"?t:t+"",void 0,cn),Ae=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Ao(r,t,cn)},Cl=(t,e)=>{if(ln)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=_i.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Xn=ln?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Pl(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sl,defineProperty:Ol,getOwnPropertyDescriptor:El,getOwnPropertyNames:Al,getOwnPropertySymbols:Rl,getPrototypeOf:Tl}=Object,Ht=globalThis,Gn=Ht.trustedTypes,Dl=Gn?Gn.emptyScript:"",js=Ht.reactiveElementPolyfillSupport,Ir=(t,e)=>t,Pi={toAttribute(t,e){switch(e){case Boolean:t=t?Dl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},hn=(t,e)=>!Sl(t,e),Zn={attribute:!0,type:String,converter:Pi,reflect:!1,hasChanged:hn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ht.litPropertyMetadata??(Ht.litPropertyMetadata=new WeakMap);let pr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Zn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&Ol(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=El(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Zn}static _$Ei(){if(this.hasOwnProperty(Ir("elementProperties")))return;const e=Tl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ir("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ir("properties"))){const r=this.properties,i=[...Al(r),...Rl(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(Xn(s))}else e!==void 0&&r.push(Xn(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Pi).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Pi;this._$Em=s,this[s]=l.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??hn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};pr.elementStyles=[],pr.shadowRootOptions={mode:"open"},pr[Ir("elementProperties")]=new Map,pr[Ir("finalized")]=new Map,js==null||js({ReactiveElement:pr}),(Ht.reactiveElementVersions??(Ht.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr=globalThis,Ci=Wr.trustedTypes,Qn=Ci?Ci.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ro="$lit$",Nt=`lit$${Math.random().toFixed(9).slice(2)}$`,To="?"+Nt,Ml=`<${To}>`,tr=document,Br=()=>tr.createComment(""),Vr=t=>t===null||typeof t!="object"&&typeof t!="function",Do=Array.isArray,Ll=t=>Do(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Is=`[ 	
\f\r]`,Ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kn=/-->/g,Jn=/>/g,Zt=RegExp(`>|${Is}(?:([^\\s"'>=/]+)(${Is}*=${Is}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eo=/'/g,to=/"/g,Mo=/^(?:script|style|textarea|title)$/i,Ul=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),T=Ul(1),Bt=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),ro=new WeakMap,Kt=tr.createTreeWalker(tr,129);function Lo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qn!==void 0?Qn.createHTML(e):e}const Fl=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",o=Ur;for(let l=0;l<r;l++){const u=t[l];let p,m,f=-1,$=0;for(;$<u.length&&(o.lastIndex=$,m=o.exec(u),m!==null);)$=o.lastIndex,o===Ur?m[1]==="!--"?o=Kn:m[1]!==void 0?o=Jn:m[2]!==void 0?(Mo.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=Zt):m[3]!==void 0&&(o=Zt):o===Zt?m[0]===">"?(o=s??Ur,f=-1):m[1]===void 0?f=-2:(f=o.lastIndex-m[2].length,p=m[1],o=m[3]===void 0?Zt:m[3]==='"'?to:eo):o===to||o===eo?o=Zt:o===Kn||o===Jn?o=Ur:(o=Zt,s=void 0);const x=o===Zt&&t[l+1].startsWith("/>")?" ":"";n+=o===Ur?u+Ml:f>=0?(i.push(p),u.slice(0,f)+Ro+u.slice(f)+Nt+x):u+Nt+(f===-2?l:x)}return[Lo(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};let Gs=class Uo{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,u=this.parts,[p,m]=Fl(e,r);if(this.el=Uo.createElement(p,i),Kt.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Kt.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Ro)){const $=m[o++],x=s.getAttribute(f).split(Nt),k=/([.?@])?(.*)/.exec($);u.push({type:1,index:n,name:k[2],strings:x,ctor:k[1]==="."?Il:k[1]==="?"?Wl:k[1]==="@"?Nl:Ii}),s.removeAttribute(f)}else f.startsWith(Nt)&&(u.push({type:6,index:n}),s.removeAttribute(f));if(Mo.test(s.tagName)){const f=s.textContent.split(Nt),$=f.length-1;if($>0){s.textContent=Ci?Ci.emptyScript:"";for(let x=0;x<$;x++)s.append(f[x],Br()),Kt.nextNode(),u.push({type:2,index:++n});s.append(f[$],Br())}}}else if(s.nodeType===8)if(s.data===To)u.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(Nt,f+1))!==-1;)u.push({type:7,index:n}),f+=Nt.length-1}n++}}static createElement(e,r){const i=tr.createElement("template");return i.innerHTML=e,i}};function gr(t,e,r=t,i){var o,l;if(e===Bt)return e;let s=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const n=Vr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=gr(t,s._$AS(t,e.values),s,i)),e}let jl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??tr).importNode(r,!0);Kt.currentNode=s;let n=Kt.nextNode(),o=0,l=0,u=i[0];for(;u!==void 0;){if(o===u.index){let p;u.type===2?p=new Gr(n,n.nextSibling,this,e):u.type===1?p=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(p=new Hl(n,this,e)),this._$AV.push(p),u=i[++l]}o!==(u==null?void 0:u.index)&&(n=Kt.nextNode(),o++)}return Kt.currentNode=tr,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}};class Gr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=gr(this,e,r),Vr(e)?e===Z||e==null||e===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==Bt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ll(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Z&&Vr(this._$AH)?this._$AA.nextSibling.data=e:this.T(tr.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Gs.createElement(Lo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const o=new jl(s,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let r=ro.get(e.strings);return r===void 0&&ro.set(e.strings,r=new Gs(e)),r}k(e){Do(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new Gr(this.S(Br()),this.S(Br()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let Ii=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(e,r=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=gr(this,e,r,0),o=!Vr(e)||e!==this._$AH&&e!==Bt,o&&(this._$AH=e);else{const l=e;let u,p;for(e=n[0],u=0;u<n.length-1;u++)p=gr(this,l[i+u],r,u),p===Bt&&(p=this._$AH[u]),o||(o=!Vr(p)||p!==this._$AH[u]),p===Z?e=Z:e!==Z&&(e+=(p??"")+n[u+1]),this._$AH[u]=p}o&&!s&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Il=class extends Ii{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}};class Wl extends Ii{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class Nl extends Ii{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=gr(this,e,r,0)??Z)===Bt)return;const i=this._$AH,s=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Z&&(i===Z||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}let Hl=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){gr(this,e)}};const Ws=Wr.litHtmlPolyfillSupport;Ws==null||Ws(Gs,Gr),(Wr.litHtmlVersions??(Wr.litHtmlVersions=[])).push("3.1.4");const Bl=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Gr(e.insertBefore(Br(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nt=class extends pr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Bt}};var Po;nt._$litElement$=!0,nt.finalized=!0,(Po=globalThis.litElementHydrateSupport)==null||Po.call(globalThis,{LitElement:nt});const Ns=globalThis.litElementPolyfillSupport;Ns==null||Ns({LitElement:nt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vl={attribute:!0,type:String,converter:Pi,reflect:!1,hasChanged:hn},zl=(t=Vl,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,u,t)},init(l){return l!==void 0&&this.P(o,void 0,t),l}}}if(i==="setter"){const{name:o}=r;return function(l){const u=this[o];e.call(this,l),this.requestUpdate(o,u,t)}}throw Error("Unsupported decorator location: "+i)};function N(t){return(e,r)=>typeof r=="object"?zl(t,e,r):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(t){return N({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yl=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zr(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Yl(e,r,{get(){var u;const o=(u=this.renderRoot)==null?void 0:u.querySelector(n),l=(o==null?void 0:o.assignedElements(t))??[];return s===void 0?l:l.filter(p=>p.matches(s))}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ql=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wi=t=>(...e)=>({_$litDirective$:t,values:e});let un=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nr=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),Nr(s,e);return!0},Si=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Fo=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Zl(e)}};function Xl(t){this._$AN!==void 0?(Si(this),this._$AM=t,Fo(this)):this._$AM=t}function Gl(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)Nr(i[n],!1),Si(i[n]);else i!=null&&(Nr(i,!1),Si(i));else Nr(this,t)}const Zl=t=>{t.type==dn.CHILD&&(t._$AP??(t._$AP=Gl),t._$AQ??(t._$AQ=Xl))};class Ql extends un{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Fo(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(Nr(this,e),Si(this))}setValue(e){if(ql(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=()=>new Kl;let Kl=class{};const Hs=new WeakMap,Ge=Wi(class extends Ql{render(t){return Z}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),Z}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=Hs.get(e);r===void 0&&(r=new WeakMap,Hs.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Hs.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Jl=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,jo=(t,e,r,i)=>{for(var s=i>1?void 0:i?ec(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Jl(e,r,s),s};let zr=class extends nt{constructor(){super(),this.dialogRef=He(),this.closeButtonRef=He(),this.invokerRef=He()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return T`
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
        `}};zr.shadowRootOptions={...nt.shadowRootOptions,mode:"open"};zr.styles=Ae`

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

        
    
    `;jo([N({type:String,reflect:!0})],zr.prototype,"label",2);zr=jo([ne("thermal-dialog")],zr);var tc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,Ni=(t,e,r,i)=>{for(var s=i>1?void 0:i?rc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&tc(e,r,s),s};let Rt=class extends nt{constructor(){super(...arguments),this.variant="slate",this.interactive=!0,this.size="sm"}render(){return T`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Rt.VARIANTS=["slate","primary","foreground","background"];Rt.shadowRootOptions={...nt.shadowRootOptions,mode:"open"};Rt.styles=Ae`

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
    
    `;Ni([N({type:String,converter:{fromAttribute:t=>Rt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Rt.prototype,"variant",2);Ni([N({type:Boolean,reflect:!0,converter:{fromAttribute:t=>t==="true",toAttribute:t=>t?"true":"false"}})],Rt.prototype,"interactive",2);Ni([N({type:String})],Rt.prototype,"size",2);Rt=Ni([ne("thermal-button")],Rt);const mr=Math.min,At=Math.max,Oi=Math.round,Vt=t=>({x:t,y:t}),ic={left:"right",right:"left",bottom:"top",top:"bottom"},sc={start:"end",end:"start"};function io(t,e,r){return At(t,mr(e,r))}function Qr(t,e){return typeof t=="function"?t(e):t}function Tt(t){return t.split("-")[0]}function Hi(t){return t.split("-")[1]}function Io(t){return t==="x"?"y":"x"}function Wo(t){return t==="y"?"height":"width"}function Kr(t){return["top","bottom"].includes(Tt(t))?"y":"x"}function No(t){return Io(Kr(t))}function nc(t,e,r){r===void 0&&(r=!1);const i=Hi(t),s=No(t),n=Wo(s);let o=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=Ei(o)),[o,Ei(o)]}function oc(t){const e=Ei(t);return[Zs(t),e,Zs(e)]}function Zs(t){return t.replace(/start|end/g,e=>sc[e])}function ac(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function lc(t,e,r,i){const s=Hi(t);let n=ac(Tt(t),r==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(Zs)))),n}function Ei(t){return t.replace(/left|right|bottom|top/g,e=>ic[e])}function cc(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ho(t){return typeof t!="number"?cc(t):{top:t,right:t,bottom:t,left:t}}function vr(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function so(t,e,r){let{reference:i,floating:s}=t;const n=Kr(e),o=No(e),l=Wo(o),u=Tt(e),p=n==="y",m=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,$=i[l]/2-s[l]/2;let x;switch(u){case"top":x={x:m,y:i.y-s.height};break;case"bottom":x={x:m,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:f};break;case"left":x={x:i.x-s.width,y:f};break;default:x={x:i.x,y:i.y}}switch(Hi(e)){case"start":x[o]-=$*(r&&p?-1:1);break;case"end":x[o]+=$*(r&&p?-1:1);break}return x}const hc=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,l=n.filter(Boolean),u=await(o.isRTL==null?void 0:o.isRTL(e));let p=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:m,y:f}=so(p,i,u),$=i,x={},k=0;for(let O=0;O<l.length;O++){const{name:C,fn:F}=l[O],{x:j,y:V,data:de,reset:te}=await F({x:m,y:f,initialPlacement:i,placement:$,strategy:s,middlewareData:x,rects:p,platform:o,elements:{reference:t,floating:e}});m=j??m,f=V??f,x={...x,[C]:{...x[C],...de}},te&&k<=50&&(k++,typeof te=="object"&&(te.placement&&($=te.placement),te.rects&&(p=te.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):te.rects),{x:m,y:f}=so(p,$,u)),O=-1)}return{x:m,y:f,placement:$,strategy:s,middlewareData:x}};async function Bo(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:o,elements:l,strategy:u}=t,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:$=!1,padding:x=0}=Qr(e,t),k=Ho(x),C=l[$?f==="floating"?"reference":"floating":f],F=vr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(C)))==null||r?C:C.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:p,rootBoundary:m,strategy:u})),j=f==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,V=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),de=await(n.isElement==null?void 0:n.isElement(V))?await(n.getScale==null?void 0:n.getScale(V))||{x:1,y:1}:{x:1,y:1},te=vr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:j,offsetParent:V,strategy:u}):j);return{top:(F.top-te.top+k.top)/de.y,bottom:(te.bottom-F.bottom+k.bottom)/de.y,left:(F.left-te.left+k.left)/de.x,right:(te.right-F.right+k.right)/de.x}}const dc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:o,initialPlacement:l,platform:u,elements:p}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:$,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:O=!0,...C}=Qr(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const F=Tt(s),j=Tt(l)===l,V=await(u.isRTL==null?void 0:u.isRTL(p.floating)),de=$||(j||!O?[Ei(l)]:oc(l));!$&&k!=="none"&&de.push(...lc(l,O,k,V));const te=[l,...de],Se=await Bo(e,C),I=[];let me=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&I.push(Se[F]),f){const pe=nc(s,o,V);I.push(Se[pe[0]],Se[pe[1]])}if(me=[...me,{placement:s,overflows:I}],!I.every(pe=>pe<=0)){var oe,ue;const pe=(((oe=n.flip)==null?void 0:oe.index)||0)+1,ve=te[pe];if(ve)return{data:{index:pe,overflows:me},reset:{placement:ve}};let re=(ue=me.filter(ye=>ye.overflows[0]<=0).sort((ye,Me)=>ye.overflows[1]-Me.overflows[1])[0])==null?void 0:ue.placement;if(!re)switch(x){case"bestFit":{var be;const ye=(be=me.map(Me=>[Me.placement,Me.overflows.filter(Je=>Je>0).reduce((Je,Ze)=>Je+Ze,0)]).sort((Me,Je)=>Me[1]-Je[1])[0])==null?void 0:be[0];ye&&(re=ye);break}case"initialPlacement":re=l;break}if(s!==re)return{reset:{placement:re}}}return{}}}};function Vo(t){const e=mr(...t.map(n=>n.left)),r=mr(...t.map(n=>n.top)),i=At(...t.map(n=>n.right)),s=At(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function uc(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>vr(Vo(s)))}const pc=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:o}=e,{padding:l=2,x:u,y:p}=Qr(t,e),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=uc(m),$=vr(Vo(m)),x=Ho(l);function k(){if(f.length===2&&f[0].left>f[1].right&&u!=null&&p!=null)return f.find(C=>u>C.left-x.left&&u<C.right+x.right&&p>C.top-x.top&&p<C.bottom+x.bottom)||$;if(f.length>=2){if(Kr(r)==="y"){const ue=f[0],be=f[f.length-1],pe=Tt(r)==="top",ve=ue.top,re=be.bottom,ye=pe?ue.left:be.left,Me=pe?ue.right:be.right,Je=Me-ye,Ze=re-ve;return{top:ve,bottom:re,left:ye,right:Me,width:Je,height:Ze,x:ye,y:ve}}const C=Tt(r)==="left",F=At(...f.map(ue=>ue.right)),j=mr(...f.map(ue=>ue.left)),V=f.filter(ue=>C?ue.left===j:ue.right===F),de=V[0].top,te=V[V.length-1].bottom,Se=j,I=F,me=I-Se,oe=te-de;return{top:de,bottom:te,left:Se,right:I,width:me,height:oe,x:Se,y:de}}return $}const O=await n.getElementRects({reference:{getBoundingClientRect:k},floating:i.floating,strategy:o});return s.reference.x!==O.reference.x||s.reference.y!==O.reference.y||s.reference.width!==O.reference.width||s.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function fc(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=Tt(r),l=Hi(r),u=Kr(r)==="y",p=["left","top"].includes(o)?-1:1,m=n&&u?-1:1,f=Qr(e,t);let{mainAxis:$,crossAxis:x,alignmentAxis:k}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof k=="number"&&(x=l==="end"?k*-1:k),u?{x:x*m,y:$*p}:{x:$*p,y:x*m}}const gc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:o,middlewareData:l}=e,u=await fc(e,t);return o===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+u.x,y:n+u.y,data:{...u,placement:o}}}}},mc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:C=>{let{x:F,y:j}=C;return{x:F,y:j}}},...u}=Qr(t,e),p={x:r,y:i},m=await Bo(e,u),f=Kr(Tt(s)),$=Io(f);let x=p[$],k=p[f];if(n){const C=$==="y"?"top":"left",F=$==="y"?"bottom":"right",j=x+m[C],V=x-m[F];x=io(j,x,V)}if(o){const C=f==="y"?"top":"left",F=f==="y"?"bottom":"right",j=k+m[C],V=k-m[F];k=io(j,k,V)}const O=l.fn({...e,[$]:x,[f]:k});return{...O,data:{x:O.x-r,y:O.y-i}}}}};function Or(t){return zo(t)?(t.nodeName||"").toLowerCase():"#document"}function ct(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function qt(t){var e;return(e=(zo(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function zo(t){return t instanceof Node||t instanceof ct(t).Node}function _t(t){return t instanceof Element||t instanceof ct(t).Element}function $t(t){return t instanceof HTMLElement||t instanceof ct(t).HTMLElement}function no(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ct(t).ShadowRoot}function Jr(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=yt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function vc(t){return["table","td","th"].includes(Or(t))}function Bi(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function pn(t){const e=fn(),r=yt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function bc(t){let e=zt(t);for(;$t(e)&&!br(e);){if(Bi(e))return null;if(pn(e))return e;e=zt(e)}return null}function fn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function br(t){return["html","body","#document"].includes(Or(t))}function yt(t){return ct(t).getComputedStyle(t)}function Vi(t){return _t(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function zt(t){if(Or(t)==="html")return t;const e=t.assignedSlot||t.parentNode||no(t)&&t.host||qt(t);return no(e)?e.host:e}function Yo(t){const e=zt(t);return br(e)?t.ownerDocument?t.ownerDocument.body:t.body:$t(e)&&Jr(e)?e:Yo(e)}function Qs(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Yo(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),o=ct(s);return n?e.concat(o,o.visualViewport||[],Jr(s)?s:[],o.frameElement&&r?Qs(o.frameElement):[]):e.concat(s,Qs(s,[],r))}function qo(t){const e=yt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=$t(t),n=s?t.offsetWidth:r,o=s?t.offsetHeight:i,l=Oi(r)!==n||Oi(i)!==o;return l&&(r=n,i=o),{width:r,height:i,$:l}}function Xo(t){return _t(t)?t:t.contextElement}function fr(t){const e=Xo(t);if(!$t(e))return Vt(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=qo(e);let o=(n?Oi(r.width):r.width)/i,l=(n?Oi(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const yc=Vt(0);function Go(t){const e=ct(t);return!fn()||!e.visualViewport?yc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function wc(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ct(t)?!1:e}function Yr(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=Xo(t);let o=Vt(1);e&&(i?_t(i)&&(o=fr(i)):o=fr(t));const l=wc(n,r,i)?Go(n):Vt(0);let u=(s.left+l.x)/o.x,p=(s.top+l.y)/o.y,m=s.width/o.x,f=s.height/o.y;if(n){const $=ct(n),x=i&&_t(i)?ct(i):i;let k=$,O=k.frameElement;for(;O&&i&&x!==k;){const C=fr(O),F=O.getBoundingClientRect(),j=yt(O),V=F.left+(O.clientLeft+parseFloat(j.paddingLeft))*C.x,de=F.top+(O.clientTop+parseFloat(j.paddingTop))*C.y;u*=C.x,p*=C.y,m*=C.x,f*=C.y,u+=V,p+=de,k=ct(O),O=k.frameElement}}return vr({width:m,height:f,x:u,y:p})}function xc(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",o=qt(i),l=e?Bi(e.floating):!1;if(i===o||l&&n)return r;let u={scrollLeft:0,scrollTop:0},p=Vt(1);const m=Vt(0),f=$t(i);if((f||!f&&!n)&&((Or(i)!=="body"||Jr(o))&&(u=Vi(i)),$t(i))){const $=Yr(i);p=fr(i),m.x=$.x+i.clientLeft,m.y=$.y+i.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-u.scrollLeft*p.x+m.x,y:r.y*p.y-u.scrollTop*p.y+m.y}}function kc(t){return Array.from(t.getClientRects())}function Zo(t){return Yr(qt(t)).left+Vi(t).scrollLeft}function _c(t){const e=qt(t),r=Vi(t),i=t.ownerDocument.body,s=At(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=At(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Zo(t);const l=-r.scrollTop;return yt(i).direction==="rtl"&&(o+=At(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:l}}function $c(t,e){const r=ct(t),i=qt(t),s=r.visualViewport;let n=i.clientWidth,o=i.clientHeight,l=0,u=0;if(s){n=s.width,o=s.height;const p=fn();(!p||p&&e==="fixed")&&(l=s.offsetLeft,u=s.offsetTop)}return{width:n,height:o,x:l,y:u}}function Pc(t,e){const r=Yr(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=$t(t)?fr(t):Vt(1),o=t.clientWidth*n.x,l=t.clientHeight*n.y,u=s*n.x,p=i*n.y;return{width:o,height:l,x:u,y:p}}function oo(t,e,r){let i;if(e==="viewport")i=$c(t,r);else if(e==="document")i=_c(qt(t));else if(_t(e))i=Pc(e,r);else{const s=Go(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return vr(i)}function Qo(t,e){const r=zt(t);return r===e||!_t(r)||br(r)?!1:yt(r).position==="fixed"||Qo(r,e)}function Cc(t,e){const r=e.get(t);if(r)return r;let i=Qs(t,[],!1).filter(l=>_t(l)&&Or(l)!=="body"),s=null;const n=yt(t).position==="fixed";let o=n?zt(t):t;for(;_t(o)&&!br(o);){const l=yt(o),u=pn(o);!u&&l.position==="fixed"&&(s=null),(n?!u&&!s:!u&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Jr(o)&&!u&&Qo(t,o))?i=i.filter(m=>m!==o):s=l,o=zt(o)}return e.set(t,i),i}function Sc(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const o=[...r==="clippingAncestors"?Bi(e)?[]:Cc(e,this._c):[].concat(r),i],l=o[0],u=o.reduce((p,m)=>{const f=oo(e,m,s);return p.top=At(f.top,p.top),p.right=mr(f.right,p.right),p.bottom=mr(f.bottom,p.bottom),p.left=At(f.left,p.left),p},oo(e,l,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Oc(t){const{width:e,height:r}=qo(t);return{width:e,height:r}}function Ec(t,e,r){const i=$t(e),s=qt(e),n=r==="fixed",o=Yr(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const u=Vt(0);if(i||!i&&!n)if((Or(e)!=="body"||Jr(s))&&(l=Vi(e)),i){const f=Yr(e,!0,n,e);u.x=f.x+e.clientLeft,u.y=f.y+e.clientTop}else s&&(u.x=Zo(s));const p=o.left+l.scrollLeft-u.x,m=o.top+l.scrollTop-u.y;return{x:p,y:m,width:o.width,height:o.height}}function Bs(t){return yt(t).position==="static"}function ao(t,e){return!$t(t)||yt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ko(t,e){const r=ct(t);if(Bi(t))return r;if(!$t(t)){let s=zt(t);for(;s&&!br(s);){if(_t(s)&&!Bs(s))return s;s=zt(s)}return r}let i=ao(t,e);for(;i&&vc(i)&&Bs(i);)i=ao(i,e);return i&&br(i)&&Bs(i)&&!pn(i)?r:i||bc(t)||r}const Ac=async function(t){const e=this.getOffsetParent||Ko,r=this.getDimensions,i=await r(t.floating);return{reference:Ec(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Rc(t){return yt(t).direction==="rtl"}const Tc={convertOffsetParentRelativeRectToViewportRelativeRect:xc,getDocumentElement:qt,getClippingRect:Sc,getOffsetParent:Ko,getElementRects:Ac,getClientRects:kc,getDimensions:Oc,getScale:fr,isElement:_t,isRTL:Rc},Dc=gc,Mc=mc,Lc=dc,Uc=pc,Fc=(t,e,r)=>{const i=new Map,s={platform:Tc,...r},n={...s.platform,_c:i};return hc(t,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=Wi(class extends un{constructor(t){var e;if(super(t),t.type!==dn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Bt}});var jc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,ei=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ic(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&jc(e,r,s),s};let Dt=class extends nt{constructor(){super(...arguments),this.dropdownRef=He(),this.invokerRef=He(),this.optionsRef=He(),this.open="close",this.interactive="on",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Fc(this.invokerRef.value,this.optionsRef.value,{middleware:[Dc(2),Lc(),Uc(),Mc()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,o;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(o=this.dropdownRef.value)==null||o.classList.remove("dropdown__open")))}render(){const t={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return T`

            <div class="dropdown" ${Ge(this.dropdownRef)}>

                <thermal-button class="${Jt(t)}" ${Ge(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?T`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:T`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};Dt.shadowRootOptions={...nt.shadowRootOptions,mode:"open"};Dt.styles=Ae`

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
    
    `;ei([Zr({slot:"option"})],Dt.prototype,"_options",2);ei([N({type:String,reflect:!0})],Dt.prototype,"open",2);ei([N({type:String,reflect:!0,attribute:!0}),W()],Dt.prototype,"interactive",2);ei([N({type:String,reflect:!0})],Dt.prototype,"variant",2);Dt=ei([ne("thermal-dropdown")],Dt);var Wc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,zi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Nc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Wc(e,r,s),s};let yr=class extends nt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=He(),this.contentRef=He(),this.rulerContentRef=He()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return T`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ge(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ge(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ge(this.contentRef)}>

                    ${this.collapsed===!1?T`
                        <slot></slot>    
                    `:Z}
                
                </div>

            </div>

            ${this.collapsed?T`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:Z}
        
        `}};yr.styles=Ae`

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

    `;zi([W()],yr.prototype,"collapsed",2);zi([W()],yr.prototype,"lastContentWidth",2);zi([W()],yr.prototype,"drawerRef",2);yr=zi([ne("thermal-bar")],yr);var Hc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,ti=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Hc(e,r,s),s};let rr=class extends nt{constructor(){super(...arguments),this.fullscreen="off",this.appRef=He(),this.contentRef=He()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){console.log("fullscreen"),this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(t){super.update(t),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const r=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=r.contentRect.height,o=r.contentRect.width,l=n-175,u=o-0,p=this.contentRef.value.offsetHeight,m=4/3;let f=0,$=0;p<l?(console.log("priorita šířky"),f=u,$=f/m):(console.log("priorita výšky"),$=l,f=$*m),this.contentRef.value.setAttribute("style",`width: ${f}px !important; height: ${$}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return T`

        <div class="container" ${Ge(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?T`
            <div class="bar">
                <slot name="bar"></slot>
                <thermal-button slot="bar" @click=${this.toggleFullscreen.bind(this)}>
                <div style="width: calc( var( --thermal-gap ) * .9 );line-height: 0;">
                ${this.fullscreen==="on"?T`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:T`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
            </div> 
        `:""}

        ${this.pre.length>=0?T`
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
        
        `}};rr.styles=Ae`

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
    
    `;ti([Zr({slot:"bar",flatten:!0})],rr.prototype,"barItems",2);ti([Zr({slot:"bar",flatten:!0})],rr.prototype,"barElements",2);ti([Zr({slot:"pre",flatten:!0})],rr.prototype,"pre",2);ti([N({type:String,reflect:!0})],rr.prototype,"fullscreen",2);rr=ti([ne("thermal-app")],rr);var Vc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,Yc=(t,e,r,i)=>{for(var s=i>1?void 0:i?zc(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Vc(e,r,s),s};let Ks=class extends nt{render(){return T`
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
                        <p>version ${Eo.version}</p>
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
        `}};Ks.styles=Ae`

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
    
    `;Ks=Yc([ne("app-info-button")],Ks);function mt(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function ir(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Jo=6048e5,qc=864e5;let Xc={};function Yi(){return Xc}function qr(t,e){var l,u,p,m;const r=Yi(),i=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??r.weekStartsOn??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.weekStartsOn)??0,s=mt(t),n=s.getDay(),o=(n<i?7:0)+n-i;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function Ai(t){return qr(t,{weekStartsOn:1})}function ea(t){const e=mt(t),r=e.getFullYear(),i=ir(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=Ai(i),n=ir(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const o=Ai(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=o.getTime()?r:r-1}function lo(t){const e=mt(t);return e.setHours(0,0,0,0),e}function co(t){const e=mt(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Gc(t,e){const r=lo(t),i=lo(e),s=+r-co(r),n=+i-co(i);return Math.round((s-n)/qc)}function Zc(t){const e=ea(t),r=ir(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),Ai(r)}function Qc(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ta(t){if(!Qc(t)&&typeof t!="number")return!1;const e=mt(t);return!isNaN(Number(e))}function Kc(t){const e=mt(t),r=ir(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Jc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},eh=(t,e,r)=>{let i;const s=Jc[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Vs(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const th={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},rh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ih={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},sh={date:Vs({formats:th,defaultWidth:"full"}),time:Vs({formats:rh,defaultWidth:"full"}),dateTime:Vs({formats:ih,defaultWidth:"full"})},nh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},oh=(t,e,r,i)=>nh[t];function Fr(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):o;s=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[o]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const ah={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},lh={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ch={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},uh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ph=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},fh={ordinalNumber:ph,era:Fr({values:ah,defaultWidth:"wide"}),quarter:Fr({values:lh,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Fr({values:ch,defaultWidth:"wide"}),day:Fr({values:hh,defaultWidth:"wide"}),dayPeriod:Fr({values:dh,defaultWidth:"wide",formattingValues:uh,defaultFormattingWidth:"wide"})};function jr(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const o=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?mh(l,f=>f.test(o)):gh(l,f=>f.test(o));let p;p=t.valueCallback?t.valueCallback(u):u,p=r.valueCallback?r.valueCallback(p):p;const m=e.slice(o.length);return{value:p,rest:m}}}function gh(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function mh(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function vh(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let o=t.valueCallback?t.valueCallback(n[0]):n[0];o=r.valueCallback?r.valueCallback(o):o;const l=e.slice(s.length);return{value:o,rest:l}}}const bh=/^(\d+)(th|st|nd|rd)?/i,yh=/\d+/i,wh={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xh={any:[/^b/i,/^(a|c)/i]},kh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_h={any:[/1/i,/2/i,/3/i,/4/i]},$h={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ph={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ch={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Sh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Oh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Eh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ah={ordinalNumber:vh({matchPattern:bh,parsePattern:yh,valueCallback:t=>parseInt(t,10)}),era:jr({matchPatterns:wh,defaultMatchWidth:"wide",parsePatterns:xh,defaultParseWidth:"any"}),quarter:jr({matchPatterns:kh,defaultMatchWidth:"wide",parsePatterns:_h,defaultParseWidth:"any",valueCallback:t=>t+1}),month:jr({matchPatterns:$h,defaultMatchWidth:"wide",parsePatterns:Ph,defaultParseWidth:"any"}),day:jr({matchPatterns:Ch,defaultMatchWidth:"wide",parsePatterns:Sh,defaultParseWidth:"any"}),dayPeriod:jr({matchPatterns:Oh,defaultMatchWidth:"any",parsePatterns:Eh,defaultParseWidth:"any"})},Rh={code:"en-US",formatDistance:eh,formatLong:sh,formatRelative:oh,localize:fh,match:Ah,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Th(t){const e=mt(t);return Gc(e,Kc(e))+1}function Dh(t){const e=mt(t),r=+Ai(e)-+Zc(e);return Math.round(r/Jo)+1}function ra(t,e){var m,f,$,x;const r=mt(t),i=r.getFullYear(),s=Yi(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((x=($=s.locale)==null?void 0:$.options)==null?void 0:x.firstWeekContainsDate)??1,o=ir(t,0);o.setFullYear(i+1,0,n),o.setHours(0,0,0,0);const l=qr(o,e),u=ir(t,0);u.setFullYear(i,0,n),u.setHours(0,0,0,0);const p=qr(u,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function Mh(t,e){var l,u,p,m;const r=Yi(),i=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,s=ra(t,e),n=ir(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),qr(n,e)}function Lh(t,e){const r=mt(t),i=+qr(r,e)-+Mh(r,e);return Math.round(i/Jo)+1}function he(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Wt={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return he(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):he(r+1,2)},d(t,e){return he(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return he(t.getHours()%12||12,e.length)},H(t,e){return he(t.getHours(),e.length)},m(t,e){return he(t.getMinutes(),e.length)},s(t,e){return he(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return he(s,e.length)}},dr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ho={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Wt.y(t,e)},Y:function(t,e,r,i){const s=ra(t,i),n=s>0?s:1-s;if(e==="YY"){const o=n%100;return he(o,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):he(n,e.length)},R:function(t,e){const r=ea(t);return he(r,e.length)},u:function(t,e){const r=t.getFullYear();return he(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return he(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return he(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Wt.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return he(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Lh(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):he(s,e.length)},I:function(t,e,r){const i=Dh(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):he(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Wt.d(t,e)},D:function(t,e,r){const i=Th(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):he(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return he(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return he(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return he(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=dr.noon:i===0?s=dr.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=dr.evening:i>=12?s=dr.afternoon:i>=4?s=dr.morning:s=dr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Wt.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Wt.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):he(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):he(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Wt.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Wt.s(t,e)},S:function(t,e){return Wt.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return po(i);case"XXXX":case"XX":return Qt(i);case"XXXXX":case"XXX":default:return Qt(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return po(i);case"xxxx":case"xx":return Qt(i);case"xxxxx":case"xxx":default:return Qt(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+uo(i,":");case"OOOO":default:return"GMT"+Qt(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+uo(i,":");case"zzzz":default:return"GMT"+Qt(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return he(i,e.length)},T:function(t,e,r){const i=t.getTime();return he(i,e.length)}};function uo(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+he(n,2)}function po(t,e){return t%60===0?(t>0?"-":"+")+he(Math.abs(t)/60,2):Qt(t,e)}function Qt(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=he(Math.trunc(i/60),2),n=he(i%60,2);return r+s+e+n}const fo=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ia=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Uh=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return fo(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",fo(i,e)).replace("{{time}}",ia(s,e))},Fh={p:ia,P:Uh},jh=/^D+$/,Ih=/^Y+$/,Wh=["D","DD","YY","YYYY"];function Nh(t){return jh.test(t)}function Hh(t){return Ih.test(t)}function Bh(t,e,r){const i=Vh(t,e,r);if(console.warn(i),Wh.includes(t))throw new RangeError(i)}function Vh(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const zh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,qh=/^'([^]*?)'?$/,Xh=/''/g,Gh=/[a-zA-Z]/;function wr(t,e,r){var m,f,$,x;const i=Yi(),s=i.locale??Rh,n=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,o=i.weekStartsOn??((x=($=i.locale)==null?void 0:$.options)==null?void 0:x.weekStartsOn)??0,l=mt(t);if(!ta(l))throw new RangeError("Invalid time value");let u=e.match(Yh).map(k=>{const O=k[0];if(O==="p"||O==="P"){const C=Fh[O];return C(k,s.formatLong)}return k}).join("").match(zh).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const O=k[0];if(O==="'")return{isToken:!1,value:Zh(k)};if(ho[O])return{isToken:!0,value:k};if(O.match(Gh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:k}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const p={firstWeekContainsDate:n,weekStartsOn:o,locale:s};return u.map(k=>{if(!k.isToken)return k.value;const O=k.value;(Hh(O)||Nh(O))&&Bh(O,e,String(t));const C=ho[O[0]];return C(l,O,s.localize,p)}).join("")}function Zh(t){const e=t.match(qh);return e?e[1].replace(Xh,"'"):t}function zs(t,e){const r=mt(t);if(!ta(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const o=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const u=he(r.getDate(),2),p=he(r.getMonth()+1,2);n=`${he(r.getFullYear(),4)}${o}${p}${o}${u}`}if(s!=="date"){const u=he(r.getHours(),2),p=he(r.getMinutes(),2),m=he(r.getSeconds(),2);n=`${n}${n===""?"":" "}${u}${l}${p}${l}${m}`}return n}var Qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kh(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var Js={exports:{}};const Jh={},ed=Object.freeze(Object.defineProperty({__proto__:null,default:Jh},Symbol.toStringTag,{value:"Module"})),ur=Kh(ed);/**
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
 */(function(t,e){(function(r,i){i(e)})(Qh,function(r){var i={},s={exports:{}};(function(w){var S=function(z){return typeof z<"u"&&z.versions!=null&&z.versions.node!=null&&z+""=="[object process]"};w.exports.isNode=S,w.exports.platform=typeof process<"u"&&S(process)?"node":"browser";var E=w.exports.platform==="node"&&ur;w.exports.isMainThread=w.exports.platform==="node"?(!E||E.isMainThread)&&!process.connected:typeof Window<"u",w.exports.cpus=w.exports.platform==="browser"?self.navigator.hardwareConcurrency:ur.cpus().length})(s);var n=s.exports,o={},l;function u(){if(l)return o;l=1;function w(z,xe){var Q=this;if(!(this instanceof w))throw new SyntaxError("Constructor must be called with the new operator");if(typeof z!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Oe=[],fe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var L=function(K,ae){Oe.push(K),fe.push(ae)};this.then=function(_,K){return new w(function(ae,We){var Qe=_?S(_,ae,We):ae,wt=K?S(K,ae,We):We;L(Qe,wt)},Q)};var ge=function(K){return Q.resolved=!0,Q.rejected=!1,Q.pending=!1,Oe.forEach(function(ae){ae(K)}),L=function(We,Qe){We(K)},ge=y=function(){},Q},y=function(K){return Q.resolved=!1,Q.rejected=!0,Q.pending=!1,fe.forEach(function(ae){ae(K)}),L=function(We,Qe){Qe(K)},ge=y=function(){},Q};this.cancel=function(){return xe?xe.cancel():y(new E),Q},this.timeout=function(_){if(xe)xe.timeout(_);else{var K=setTimeout(function(){y(new A("Promise timed out after "+_+" ms"))},_);Q.always(function(){clearTimeout(K)})}return Q},z(function(_){ge(_)},function(_){y(_)})}function S(z,xe,Q){return function(Oe){try{var fe=z(Oe);fe&&typeof fe.then=="function"&&typeof fe.catch=="function"?fe.then(xe,Q):xe(fe)}catch(L){Q(L)}}}w.prototype.catch=function(z){return this.then(null,z)},w.prototype.always=function(z){return this.then(z,z)},w.all=function(z){return new w(function(xe,Q){var Oe=z.length,fe=[];Oe?z.forEach(function(L,ge){L.then(function(y){fe[ge]=y,Oe--,Oe==0&&xe(fe)},function(y){Oe=0,Q(y)})}):xe(fe)})},w.defer=function(){var z={};return z.promise=new w(function(xe,Q){z.resolve=xe,z.reject=Q}),z};function E(z){this.message=z||"promise cancelled",this.stack=new Error().stack}E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="CancellationError",w.CancellationError=E;function A(z){this.message=z||"timeout exceeded",this.stack=new Error().stack}return A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="TimeoutError",w.TimeoutError=A,o.Promise=w,o}function p(w,S){(S==null||S>w.length)&&(S=w.length);for(var E=0,A=Array(S);E<S;E++)A[E]=w[E];return A}function m(w,S){var E=typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(!E){if(Array.isArray(w)||(E=F(w))||S){E&&(w=E);var A=0,z=function(){};return{s:z,n:function(){return A>=w.length?{done:!0}:{done:!1,value:w[A++]}},e:function(fe){throw fe},f:z}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xe,Q=!0,Oe=!1;return{s:function(){E=E.call(w)},n:function(){var fe=E.next();return Q=fe.done,fe},e:function(fe){Oe=!0,xe=fe},f:function(){try{Q||E.return==null||E.return()}finally{if(Oe)throw xe}}}}function f(w,S,E){return(S=O(S))in w?Object.defineProperty(w,S,{value:E,enumerable:!0,configurable:!0,writable:!0}):w[S]=E,w}function $(w,S){var E=Object.keys(w);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(w);S&&(A=A.filter(function(z){return Object.getOwnPropertyDescriptor(w,z).enumerable})),E.push.apply(E,A)}return E}function x(w){for(var S=1;S<arguments.length;S++){var E=arguments[S]!=null?arguments[S]:{};S%2?$(Object(E),!0).forEach(function(A){f(w,A,E[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(E)):$(Object(E)).forEach(function(A){Object.defineProperty(w,A,Object.getOwnPropertyDescriptor(E,A))})}return w}function k(w,S){if(typeof w!="object"||!w)return w;var E=w[Symbol.toPrimitive];if(E!==void 0){var A=E.call(w,S||"default");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(S==="string"?String:Number)(w)}function O(w){var S=k(w,"string");return typeof S=="symbol"?S:S+""}function C(w){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},C(w)}function F(w,S){if(w){if(typeof w=="string")return p(w,S);var E={}.toString.call(w).slice(8,-1);return E==="Object"&&w.constructor&&(E=w.constructor.name),E==="Map"||E==="Set"?Array.from(w):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?p(w,S):void 0}}var j={exports:{}},V={},de;function te(){return de||(de=1,V.validateOptions=function(S,E,A){if(S){var z=S?Object.keys(S):[],xe=z.find(function(Oe){return!E.includes(Oe)});if(xe)throw new Error('Object "'+A+'" contains an unknown option "'+xe+'"');var Q=E.find(function(Oe){return Object.prototype[Oe]&&!z.includes(Oe)});if(Q)throw new Error('Object "'+A+'" contains an inherited option "'+Q+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return S}},V.workerOptsNames=["credentials","name","type"],V.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],V.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),V}var Se,I;function me(){return I||(I=1,Se=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Se}var oe;function ue(){if(oe)return j.exports;oe=1;var w=u(),S=w.Promise,E=n,A=te(),z=A.validateOptions,xe=A.forkOptsNames,Q=A.workerThreadOptsNames,Oe=A.workerOptsNames,fe="__workerpool-terminate__";function L(){var B=y();if(!B)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return B}function ge(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":C(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function y(){try{return ur}catch(B){if(C(B)==="object"&&B!==null&&B.code==="MODULE_NOT_FOUND")return null;throw B}}function _(){if(E.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var B=new Blob([me()],{type:"text/javascript"});return window.URL.createObjectURL(B)}else return __dirname+"/worker.js"}function K(B,J){if(J.workerType==="web")return ge(),ae(B,J.workerOpts,Worker);if(J.workerType==="thread")return P=L(),We(B,P,J);if(J.workerType==="process"||!J.workerType)return Qe(B,wt(J),ur);if(E.platform==="browser")return ge(),ae(B,J.workerOpts,Worker);var P=y();return P?We(B,P,J):Qe(B,wt(J),ur)}function ae(B,J,P){z(J,Oe,"workerOpts");var G=new P(B,J);return G.isBrowserWorker=!0,G.on=function(ke,we){this.addEventListener(ke,function(De){we(De.data)})},G.send=function(ke,we){this.postMessage(ke,we)},G}function We(B,J,P){var G,ke;z(P==null?void 0:P.workerThreadOpts,Q,"workerThreadOpts");var we=new J.Worker(B,x({stdout:(G=P==null?void 0:P.emitStdStreams)!==null&&G!==void 0?G:!1,stderr:(ke=P==null?void 0:P.emitStdStreams)!==null&&ke!==void 0?ke:!1},P==null?void 0:P.workerThreadOpts));return we.isWorkerThread=!0,we.send=function(De,le){this.postMessage(De,le)},we.kill=function(){return this.terminate(),!0},we.disconnect=function(){this.terminate()},P!=null&&P.emitStdStreams&&(we.stdout.on("data",function(De){return we.emit("stdout",De)}),we.stderr.on("data",function(De){return we.emit("stderr",De)})),we}function Qe(B,J,P){z(J.forkOpts,xe,"forkOpts");var G=P.fork(B,J.forkArgs,J.forkOpts),ke=G.send;return G.send=function(we){return ke.call(G,we)},J.emitStdStreams&&(G.stdout.on("data",function(we){return G.emit("stdout",we)}),G.stderr.on("data",function(we){return G.emit("stderr",we)})),G.isChildProcess=!0,G}function wt(B){B=B||{};var J=process.execArgv.join(" "),P=J.indexOf("--inspect")!==-1,G=J.indexOf("--debug-brk")!==-1,ke=[];return P&&(ke.push("--inspect="+B.debugPort),G&&ke.push("--debug-brk")),process.execArgv.forEach(function(we){we.indexOf("--max-old-space-size")>-1&&ke.push(we)}),Object.assign({},B,{forkArgs:B.forkArgs,forkOpts:Object.assign({},B.forkOpts,{execArgv:(B.forkOpts&&B.forkOpts.execArgv||[]).concat(ke),stdio:B.emitStdStreams?"pipe":void 0})})}function lt(B){for(var J=new Error(""),P=Object.keys(B),G=0;G<P.length;G++)J[P[G]]=B[P[G]];return J}function ut(B,J){if(Object.keys(B.processing).length===1){var P=Object.values(B.processing)[0];P.options&&typeof P.options.on=="function"&&P.options.on(J)}}function jt(B,J){var P=this,G=J||{};this.script=B||_(),this.worker=K(this.script,G),this.debugPort=G.debugPort,this.forkOpts=G.forkOpts,this.forkArgs=G.forkArgs,this.workerOpts=G.workerOpts,this.workerThreadOpts=G.workerThreadOpts,this.workerTerminateTimeout=G.workerTerminateTimeout,B||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(le){ut(P,{stdout:le.toString()})}),this.worker.on("stderr",function(le){ut(P,{stderr:le.toString()})}),this.worker.on("message",function(le){if(!P.terminated)if(typeof le=="string"&&le==="ready")P.worker.ready=!0,we();else{var tt=le.id,Ne=P.processing[tt];Ne!==void 0&&(le.isEvent?Ne.options&&typeof Ne.options.on=="function"&&Ne.options.on(le.payload):(delete P.processing[tt],P.terminating===!0&&P.terminate(),le.error?Ne.resolver.reject(lt(le.error)):Ne.resolver.resolve(le.result)))}});function ke(le){P.terminated=!0;for(var tt in P.processing)P.processing[tt]!==void 0&&P.processing[tt].resolver.reject(le);P.processing=Object.create(null)}function we(){var le=m(P.requestQueue.splice(0)),tt;try{for(le.s();!(tt=le.n()).done;){var Ne=tt.value;P.worker.send(Ne.message,Ne.transfer)}}catch(hi){le.e(hi)}finally{le.f()}}var De=this.worker;this.worker.on("error",ke),this.worker.on("exit",function(le,tt){var Ne=`Workerpool Worker terminated Unexpectedly
`;Ne+="    exitCode: `"+le+"`\n",Ne+="    signalCode: `"+tt+"`\n",Ne+="    workerpool.script: `"+P.script+"`\n",Ne+="    spawnArgs: `"+De.spawnargs+"`\n",Ne+="    spawnfile: `"+De.spawnfile+"`\n",Ne+="    stdout: `"+De.stdout+"`\n",Ne+="    stderr: `"+De.stderr+"`\n",ke(new Error(Ne))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return jt.prototype.methods=function(){return this.exec("methods")},jt.prototype.exec=function(B,J,P,G){P||(P=S.defer());var ke=++this.lastId;this.processing[ke]={id:ke,resolver:P,options:G};var we={message:{id:ke,method:B,params:J},transfer:G&&G.transfer};this.terminated?P.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(we.message,we.transfer):this.requestQueue.push(we);var De=this;return P.promise.catch(function(le){if(le instanceof S.CancellationError||le instanceof S.TimeoutError)return delete De.processing[ke],De.terminateAndNotify(!0).then(function(){throw le},function(tt){throw tt});throw le})},jt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},jt.prototype.terminate=function(B,J){var P=this;if(B){for(var G in this.processing)this.processing[G]!==void 0&&this.processing[G].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof J=="function"&&(this.terminationHandler=J),this.busy())this.terminating=!0;else{var ke=function(le){if(P.terminated=!0,P.cleaning=!1,P.worker!=null&&P.worker.removeAllListeners&&P.worker.removeAllListeners("message"),P.worker=null,P.terminating=!1,P.terminationHandler)P.terminationHandler(le,P);else if(le)throw le};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ke(new Error("worker already killed!"));return}var we=setTimeout(function(){P.worker&&P.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(we),P.worker&&(P.worker.killed=!0),ke()}),this.worker.ready?this.worker.send(fe):this.requestQueue.push({message:fe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ke()}},jt.prototype.terminateAndNotify=function(B,J){var P=S.defer();return J&&P.promise.timeout(J),this.terminate(B,function(G,ke){G?P.reject(G):P.resolve(ke)}),P.promise},j.exports=jt,j.exports._tryRequireWorkerThreads=y,j.exports._setupProcessWorker=Qe,j.exports._setupBrowserWorker=ae,j.exports._setupWorkerThreadWorker=We,j.exports.ensureWorkerThreads=L,j.exports}var be,pe;function ve(){if(pe)return be;pe=1;var w=65535;be=S;function S(){this.ports=Object.create(null),this.length=0}return S.prototype.nextAvailableStartingAt=function(E){for(;this.ports[E]===!0;)E++;if(E>=w)throw new Error("WorkerPool debug port limit reached: "+E+">= "+w);return this.ports[E]=!0,this.length++,E},S.prototype.releasePort=function(E){delete this.ports[E],this.length--},be}var re,ye;function Me(){if(ye)return re;ye=1;var w=u(),S=w.Promise,E=ue(),A=n,z=ve(),xe=new z;function Q(y,_){typeof y=="string"?this.script=y||null:(this.script=null,_=y),this.workers=[],this.tasks=[],_=_||{},this.forkArgs=Object.freeze(_.forkArgs||[]),this.forkOpts=Object.freeze(_.forkOpts||{}),this.workerOpts=Object.freeze(_.workerOpts||{}),this.workerThreadOpts=Object.freeze(_.workerThreadOpts||{}),this.debugPortStart=_.debugPortStart||43210,this.nodeWorker=_.nodeWorker,this.workerType=_.workerType||_.nodeWorker||"auto",this.maxQueueSize=_.maxQueueSize||1/0,this.workerTerminateTimeout=_.workerTerminateTimeout||1e3,this.onCreateWorker=_.onCreateWorker||function(){return null},this.onTerminateWorker=_.onTerminateWorker||function(){return null},this.emitStdStreams=_.emitStdStreams||!1,_&&"maxWorkers"in _?(Oe(_.maxWorkers),this.maxWorkers=_.maxWorkers):this.maxWorkers=Math.max((A.cpus||4)-1,1),_&&"minWorkers"in _&&(_.minWorkers==="max"?this.minWorkers=this.maxWorkers:(fe(_.minWorkers),this.minWorkers=_.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&E.ensureWorkerThreads()}Q.prototype.exec=function(y,_,K){if(_&&!Array.isArray(_))throw new TypeError('Array expected as argument "params"');if(typeof y=="string"){var ae=S.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var We=this.tasks,Qe={method:y,params:_,resolver:ae,timeout:null,options:K};We.push(Qe);var wt=ae.promise.timeout;return ae.promise.timeout=function(ut){return We.indexOf(Qe)!==-1?(Qe.timeout=ut,ae.promise):wt.call(ae.promise,ut)},this._next(),ae.promise}else{if(typeof y=="function")return this.exec("run",[String(y),_],K);throw new TypeError('Function or string expected as argument "method"')}},Q.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var y=this;return this.exec("methods").then(function(_){var K={};return _.forEach(function(ae){K[ae]=function(){return y.exec(ae,Array.prototype.slice.call(arguments))}}),K})},Q.prototype._next=function(){if(this.tasks.length>0){var y=this._getWorker();if(y){var _=this,K=this.tasks.shift();if(K.resolver.promise.pending){var ae=y.exec(K.method,K.params,K.resolver,K.options).then(_._boundNext).catch(function(){if(y.terminated)return _._removeWorker(y)}).then(function(){_._next()});typeof K.timeout=="number"&&ae.timeout(K.timeout)}else _._next()}}},Q.prototype._getWorker=function(){for(var y=this.workers,_=0;_<y.length;_++){var K=y[_];if(K.busy()===!1)return K}return y.length<this.maxWorkers?(K=this._createWorkerHandler(),y.push(K),K):null},Q.prototype._removeWorker=function(y){var _=this;return xe.releasePort(y.debugPort),this._removeWorkerFromList(y),this._ensureMinWorkers(),new S(function(K,ae){y.terminate(!1,function(We){_.onTerminateWorker({forkArgs:y.forkArgs,forkOpts:y.forkOpts,workerThreadOpts:y.workerThreadOpts,script:y.script}),We?ae(We):K(y)})})},Q.prototype._removeWorkerFromList=function(y){var _=this.workers.indexOf(y);_!==-1&&this.workers.splice(_,1)},Q.prototype.terminate=function(y,_){var K=this;this.tasks.forEach(function(lt){lt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ae=function(ut){xe.releasePort(ut.debugPort),this._removeWorkerFromList(ut)},We=ae.bind(this),Qe=[],wt=this.workers.slice();return wt.forEach(function(lt){var ut=lt.terminateAndNotify(y,_).then(We).always(function(){K.onTerminateWorker({forkArgs:lt.forkArgs,forkOpts:lt.forkOpts,workerThreadOpts:lt.workerThreadOpts,script:lt.script})});Qe.push(ut)}),S.all(Qe)},Q.prototype.stats=function(){var y=this.workers.length,_=this.workers.filter(function(K){return K.busy()}).length;return{totalWorkers:y,busyWorkers:_,idleWorkers:y-_,pendingTasks:this.tasks.length,activeTasks:_}},Q.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var y=this.workers.length;y<this.minWorkers;y++)this.workers.push(this._createWorkerHandler())},Q.prototype._createWorkerHandler=function(){var y=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new E(y.script||this.script,{forkArgs:y.forkArgs||this.forkArgs,forkOpts:y.forkOpts||this.forkOpts,workerOpts:y.workerOpts||this.workerOpts,workerThreadOpts:y.workerThreadOpts||this.workerThreadOpts,debugPort:xe.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Oe(y){if(!L(y)||!ge(y)||y<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function fe(y){if(!L(y)||!ge(y)||y<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function L(y){return typeof y=="number"}function ge(y){return Math.round(y)==y}return re=Q,re}var Je={},Ze,Rr;function lr(){if(Rr)return Ze;Rr=1;function w(S,E){this.message=S,this.transfer=E}return Ze=w,Ze}var oi;function ai(){return oi||(oi=1,function(w){var S=lr(),E="__workerpool-terminate__",A={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")A.on=function(L,ge){addEventListener(L,function(y){ge(y.data)})},A.send=function(L,ge){ge?postMessage(L,ge):postMessage(L)};else if(typeof process<"u"){var z;try{z=ur}catch(L){if(!(C(L)==="object"&&L!==null&&L.code==="MODULE_NOT_FOUND"))throw L}if(z&&z.parentPort!==null){var xe=z.parentPort;A.send=xe.postMessage.bind(xe),A.on=xe.on.bind(xe),A.exit=process.exit.bind(process)}else A.on=process.on.bind(process),A.send=function(L){process.send(L)},A.on("disconnect",function(){process.exit(1)}),A.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Q(L){return Object.getOwnPropertyNames(L).reduce(function(ge,y){return Object.defineProperty(ge,y,{value:L[y],enumerable:!0})},{})}function Oe(L){return L&&typeof L.then=="function"&&typeof L.catch=="function"}A.methods={},A.methods.run=function(ge,y){var _=new Function("return ("+ge+").apply(null, arguments);");return _.apply(_,y)},A.methods.methods=function(){return Object.keys(A.methods)},A.terminationHandler=void 0,A.cleanupAndExit=function(L){var ge=function(){A.exit(L)};if(!A.terminationHandler)return ge();var y=A.terminationHandler(L);Oe(y)?y.then(ge,ge):ge()};var fe=null;A.on("message",function(L){if(L===E)return A.cleanupAndExit(0);try{var ge=A.methods[L.method];if(ge){fe=L.id;var y=ge.apply(ge,L.params);Oe(y)?y.then(function(_){_ instanceof S?A.send({id:L.id,result:_.message,error:null},_.transfer):A.send({id:L.id,result:_,error:null}),fe=null}).catch(function(_){A.send({id:L.id,result:null,error:Q(_)}),fe=null}):(y instanceof S?A.send({id:L.id,result:y.message,error:null},y.transfer):A.send({id:L.id,result:y,error:null}),fe=null)}else throw new Error('Unknown method "'+L.method+'"')}catch(_){A.send({id:L.id,result:null,error:Q(_)})}}),A.register=function(L,ge){if(L)for(var y in L)L.hasOwnProperty(y)&&(A.methods[y]=L[y]);ge&&(A.terminationHandler=ge.onTerminate),A.send("ready")},A.emit=function(L){if(fe){if(L instanceof S){A.send({id:fe,isEvent:!0,payload:L.message},L.transfer);return}A.send({id:fe,isEvent:!0,payload:L})}},w.add=A.register,w.emit=A.emit}(Je)),Je}var os=n.platform,li=n.isMainThread,as=n.cpus;function at(w,S){var E=Me();return new E(w,S)}var Ft=i.pool=at;function Tr(w,S){var E=ai();E.add(w,S)}var vt=i.worker=Tr;function Le(w){var S=ai();S.emit(w)}var ci=i.workerEmit=Le,ls=u(),Ve=ls.Promise,cs=i.Promise=Ve,hs=i.Transfer=lr(),ds=i.platform=os,us=i.isMainThread=li,ps=i.cpus=as;r.Promise=cs,r.Transfer=hs,r.cpus=ps,r.default=i,r.isMainThread=us,r.platform=ds,r.pool=Ft,r.worker=vt,r.workerEmit=ci,Object.defineProperty(r,"__esModule",{value:!0})})})(Js,Js.exports);var td=Js.exports,rd={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},id=`\r
`,sd="\uFEFF",qi=t=>Object.assign({},rd,t);class nd extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class od extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class ad extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class ld extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Er=t=>t,ht=t=>t,Hr=Er,Xi=Er,xr=Er,go=Er,mo=Er,cd=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},hd=t=>go(typeof t=="object"?t.key:t),dd=t=>mo(typeof t=="object"?t.displayLabel:t),ud=(t,...e)=>e.reduce((r,i)=>i(r),t),pd=t=>e=>t.useBom?Xi(ht(e)+sd):e,fd=t=>e=>t.showTitle?gn(Xi(ht(e)+t.title))(xr("")):e,gn=t=>e=>Xi(ht(t)+ht(e)+id),sa=t=>(e,r)=>gd(t)(xr(ht(e)+ht(r))),gd=t=>e=>Er(ht(e)+t.fieldSeparator),md=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new od("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=xr("");for(let s=0;s<e.length;s++){const n=dd(e[s]);i=sa(t)(i,na(t,ht(n)))}return i=xr(ht(i).slice(0,-1)),gn(r)(i)},vd=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let o=xr("");for(let l=0;l<e.length;l++){const u=hd(e[l]),p=r[n][ht(u)];o=sa(t)(o,na(t,p))}o=xr(ht(o).slice(0,-1)),s=gn(s)(o)}return s},bd=t=>+t===t&&(!isFinite(t)||!!(t%1)),yd=(t,e)=>{if(bd(e)){if(t.decimalSeparator==="locale")return Hr(e.toLocaleString());if(t.decimalSeparator)return Hr(e.toString().replace(".",t.decimalSeparator))}return Hr(e.toString())},$i=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+cd(e,t.quoteCharacter)+t.quoteCharacter),Hr(r)},wd=(t,e)=>{const r=e?"true":"false";return Hr(t.boolDisplay[r])},xd=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?$i(t,t.replaceUndefinedWith+""):e===null?$i(t,"null"):$i(t,""),na=(t,e)=>{if(typeof e=="number")return yd(t,e);if(typeof e=="string")return $i(t,e);if(typeof e=="boolean"&&t.boolDisplay)return wd(t,e);if(e===null||typeof e>"u")return xd(t,e);throw new ld(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},kd=t=>e=>{const r=qi(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=ud(Xi(""),pd(r),fd(r),md(r,i),vd(r,i,e));if(ht(s).length<1)throw new nd("Output is empty. Is your data formatted correctly?");return s},_d=t=>e=>{const r=qi(t),i=ht(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},$d=t=>e=>{if(!window)throw new ad("Downloading only supported in a browser environment.");const r=_d(t)(e),i=qi(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,o=document.createElement("a");o.download=n,o.href=URL.createObjectURL(r),o.setAttribute("visibility","hidden"),document.body.appendChild(o),o.click(),document.body.removeChild(o)},ot=class{constructor(t,e){d(this,"_value");d(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},oa=class extends ot{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Pd=class extends ot{constructor(){super(...arguments);d(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Cd=class extends ot{constructor(){super(...arguments);d(this,"fixedRange")}setFixedRange(e){if(e&&e.from>e.to){const r=e.from;e.from=e.to,e.to=r}this.fixedRange=e,e&&this.imposeRange(this.fixedRange)}get currentRange(){return this.fixedRange===void 0?this.value:this.fixedRange}validate(e){if(this.fixedRange!==void 0)return this.fixedRange;if(e===void 0)return;const r=this.parent.minmax.value;if(r===void 0)return e;const i={...e};return e.from<r.min&&(i.from=r.min),e.to>r.max&&(i.to=r.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(r=>r.recieveRange(e))}imposeRange(e){return this.fixedRange?this.value=this.fixedRange:e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.fixedRange?this.setFixedRange(e):this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const r=100/this.parent.histogram.value.length,i=this.parent.histogram.value.filter(n=>n.height>=r),s={from:i[0].from,to:i[i.length-1].to};this.fixedRange?this.setFixedRange(s):this.imposeRange(s)}}},Sd=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Od=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Ed=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Ad=Sd(),er={iron:{pixels:Ed,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Od,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Ad,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Rd=class extends ot{get availablePalettes(){return er}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},Xs,Td=(Xs=class{},d(Xs,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),Xs),Ie,Dd=(Ie=class extends Td{static humanRangeDates(e,r){return e=Ie.inputToDate(e),r=Ie.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Ie.humanDate(e):[Ie.humanDate(e),Ie.humanDate(r)].join(" - ")}static human(e){return`${Ie.humanDate(e)} ${Ie.humanTime(e,!0)} `}},d(Ie,"isoDate",e=>(e=Ie.inputToDate(e),zs(e,{representation:"date"}))),d(Ie,"isoTime",e=>(e=Ie.inputToDate(e),zs(e,{representation:"time"}))),d(Ie,"isoComplete",e=>(e=Ie.inputToDate(e),zs(e))),d(Ie,"humanTime",(e,r=!1)=>(e=Ie.inputToDate(e),wr(e,r?"HH:mm:ss":"HH:mm"))),d(Ie,"humanDate",(e,r=!1)=>(e=Ie.inputToDate(e),wr(e,r?"d. M.":"d. M. yyyy"))),Ie),Gi=class{},aa=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},vo=class la extends aa{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new la(e.url,e.code,e.message)}},ca=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},Ye=class{constructor(){d(this,"callbacks",new Map)}add(t,e){this.callbacks.set(t,e)}remove(t){this.callbacks.delete(t)}call(...t){this.callbacks.forEach(e=>e(...t))}},ha=class{constructor(t,e,r){d(this,"_active",!0);d(this,"onActivation",new Ye);d(this,"onDeactivation",new Ye);d(this,"_selected",!1);d(this,"onSelected",new Ye);d(this,"onDeselected",new Ye);d(this,"layerRoot");d(this,"renderRoot");d(this,"points",new Map);d(this,"_min");d(this,"_max");d(this,"_avg");d(this,"_color","black");d(this,"onSetColor",new Ye);d(this,"ready",!1);d(this,"onResize",new Ye);d(this,"onValues",new Ye);this.key=t,this.file=e,this.initialColor=r,this.renderRoot=this.file.canvasLayer.getLayerRoot(),this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot)}get active(){return this._active}get selected(){return this._selected}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(t=>t.active)}get color(){return this._color}setColor(t){this._color=t,this.setColorCallback(t),this.onSetColor.call(t)}remove(){this.deactivate(),this.renderRoot.removeChild(this.layerRoot)}activate(){this._active=!0,this.onActivation.call(this)}deactivate(){this._active=!1,this.onDeactivation.call(this)}setSelected(){this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor)}setDeselected(){this._selected=!1,this.onDeselected.call(this),this.setColor("black")}recalculateValues(){const{min:t,max:e,avg:r}=this.getValues();this._min=t,this._max=e,this._avg=r,this.onValues.call(this.min,this.max,this.avg)}},Md=class{constructor(t,e,r,i,s){d(this,"_x");d(this,"onX",new Ye);d(this,"_y");d(this,"onY",new Ye);d(this,"_color");d(this,"_active",!1);d(this,"_isHover",!1);d(this,"container");d(this,"innerElement");this.key=t,this.analysis=i,this._x=e,this._y=r,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.projectInnerPositionToDom(),this.setColor(s),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}set x(t){if(this.mayMoveToX(t)){const e=this._x;this._x=t,this.onX.call(this._x,e),this.container&&(this.container.style.left=this.getPercentageX()+"%")}}get y(){return this._y}set y(t){if(this.mayMoveToY(t)){const e=this._y;this._y=t,this.onY.call(this._y,e),this.container&&(this.container.style.top=this.getPercentageY()+"%")}}get color(){return this._color}setColor(t){this._color=t,this.innerElement&&(this.innerElement.style.backgroundColor=this._color)}get active(){return this._active}get isHover(){return this._isHover}get root(){return this.analysis.layerRoot}isWithin(t,e){const r=this.getRadius()/2,i=this.x-r,s=this.x+r,n=this.y-r,o=this.y+r;return t>=i&&t<=s&&e>=n&&e<=o}isInActiveLayer(){return this.analysis.active}isInSelectedLayer(){return this.analysis.selected}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const t=this.getPercentageX(),e=this.getPercentageY();return{x:t,y:e}}projectInnerPositionToDom(){if(this.container){const t=this.getPercentageCoordinates();this.container.style.left=`${t.x}%`,this.container.style.top=`${t.y}%`}}mouseEnter(){this.onMouseEnter()}mouseLeave(){this.onMouseLeave()}activate(){this._active=!0,this.onActivate()}deactivate(){this._active=!1,this.onDeactivate()}},Ld=class extends Md{constructor(t,e,r,i,s){super(t,e,r,i,s),this._color=s,this.setColor(s)}createInnerElement(){const t=document.createElement("div");return t.style.position="absolute",t.style.top="-5px",t.style.left="-5px",t.style.width="10px",t.style.height="10px",t.style.position="absolute",t.style.backgroundColor=this.color,t}onMouseEnter(){this._isHover=!0,this.innerElement&&(this.innerElement.style.boxShadow="0px 0px 10px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}onMouseLeave(){this._isHover=!1,this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},da=class extends Ld{constructor(){super(...arguments);d(this,"isMoving",!1)}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}syncXWith(e){this.onX.add(`sync X with ${e.key} `,r=>{e.x!==r&&(e.x=r)})}syncYWith(e){this.onY.add(`sync Y with ${e.key} `,r=>{e.y!==r&&(e.y=r)})}onPointerDown(){throw new Error("Method not implemented.")}onPointerUp(){throw new Error("Method not implemented.")}onMove(){throw new Error("Method not implemented.")}onActivate(){this.innerElement&&(this.innerElement.style.backgroundColor="yellow")}onDeactivate(){this.innerElement&&(this.innerElement.style.backgroundColor=this.color)}},ua=class extends ha{constructor(e,r,i,s,n){super(e,r,n);d(this,"tl");d(this,"tr");d(this,"bl");d(this,"br");d(this,"corners",[]);d(this,"area");d(this,"left");d(this,"top");d(this,"width");d(this,"height");this.area=this.buildArea(i,s),this.tl=this.addPoint("tl",i,s,"pink"),this.tr=this.addPoint("tr",i,s,"orange"),this.bl=this.addPoint("bl",i,s,"lightgray"),this.br=this.addPoint("br",i,s,"violet"),this.corners=[this.tl,this.tr,this.br,this.bl],this.tl.syncXWith(this.bl),this.tl.syncYWith(this.tr),this.tr.syncXWith(this.br),this.tr.syncYWith(this.tl),this.bl.syncXWith(this.tl),this.bl.syncYWith(this.br),this.br.syncXWith(this.tr),this.br.syncYWith(this.bl),this.br.activate(),this.calculateBounds(),this.onResize.add("sync the area",()=>{this.calculateBounds(),this.recalculateValues()})}isWithin(e,r){return e>=this.left&&e<=this.left+this.width&&r>=this.top&&r<=this.top+this.height}setColorCallback(e){this.points.forEach(r=>r.setColor(e)),this.area.setColor(e)}init(){this.points.forEach(e=>e.createInnerElement()),this.points.forEach(e=>e.projectInnerPositionToDom())}draw(){}calculateBounds(){let e=this.file.width,r=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>r&&(r=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this.left=e,this.top=i,this.width=r-e,this.height=s-i,this.area.left=this.left,this.area.height=this.height,this.area.width=this.width,this.area.top=this.top}addPoint(e,r,i,s){const n=new da(e,r,i,this,s);return this.points.set(e,n),n}},pa=class{constructor(t,e,r,i,s){d(this,"element");d(this,"_top");d(this,"_width");d(this,"_left");d(this,"_height");this.analysis=t,this.build(),this.top=e,this.left=i,this.width=r,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(t){this._top=t,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(t){this._left=t,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(t){this._height=t,this.element&&(this.element.style.height=`${this.height/this.fileHeight*100}%`)}get width(){return this._width}set width(t){this._width=t,this.element&&(this.element.style.width=`${this.width/this.fileWidth*100}%`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(t){this.onSetColor(t)}},Ud=class extends pa{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(t){this.element.style.borderColor=t}},Fd=class extends ua{buildArea(t,e){return new Ud(this,t,e,t,e)}getValues(){let t=this.left,e=this.left+this.width,r=this.top,i=this.top+this.height,s=1/0,n=-1/0,o=0,l=0;for(let u=r;u<i;u++){let p=this.file.width*u;for(let m=t;m<=e;m++){let f=this.file.pixels[p+m];f<s&&(s=f),f>n&&(n=f),l+=f,o++}}return{min:s,max:n,avg:l/o}}},jd=class{constructor(t){this.instance=t}onMouseMove(){}onClick(){}onMouseLeave(){}},Id=class extends pa{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(t){this.element.style.borderColor=t}},Wd=class extends ua{buildArea(t,e){return new Id(this,t,e,t,e)}getValues(){let t=this.left,e=this.left+this.width,r=this.top,i=this.top+this.height,s=1/0,n=-1/0,o=0,l=0;for(let u=r;u<i;u++){let p=this.file.width*u;for(let m=t;m<=e;m++){let f=this.file.pixels[p+m];f<s&&(s=f),f>n&&(n=f),l+=f,o++}}return{min:s,max:n,avg:l/o}}},Nd=class extends Map{constructor(e){super();d(this,"layers",[]);d(this,"colors",["orange","lightblue","green","brown","yellow","blue","pink"]);d(this,"onAdd",new Ye);d(this,"onRemove",new Ye);d(this,"onSelectionChange",new Ye);this.drive=e}addAnalysis(e,r=0){return this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),e.init(),this.layers=[...this.layers,e],this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){var r;this.has(e)&&((r=this.get(e))==null||r.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.onRemove.call(e),this.drive.dangerouslySetValueFromStorage(this.all))}select(e,r=!1){const i=e instanceof ha?e:this.get(e);if(i)i.setSelected(),r&&this.all.filter(s=>s.key!==i.key).forEach(s=>s.setDeselected()),this.onSelectionChange.call(this.selectedOnly);else throw new Error(`Analysis ${e} not registered yet!`);return this}deselect(e){e.setDeselected(),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get activeOnly(){return this.all.filter(e=>e.active)}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}get allPoints(){return this.extractPointsFromLayers(this.all)}get selectedOnlyPoints(){return this.extractPointsFromLayers(this.selectedOnly)}extractPointsFromLayers(e,r=!1){return e.reduce((i,s)=>{const n=r?s.arrayOfActivePoints:s.arrayOfPoints;return[...i,...n]},[])}getNextColor(){let e=this.all.length;return e<this.colors.length?this.colors[e]:this.colors[e%this.colors.length]}},Hd=class extends ot{constructor(){super(...arguments);d(this,"storage",new Nd(this));d(this,"listener",new jd(this.parent))}get points(){return this.storage.allPoints}get activePoints(){return this.storage.allPoints.filter(e=>e.active)}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(e){}addRectAt(e,r){const i=`Rectangle ${this.value.length}`,s=new Wd(i,this.parent,e,r,this.storage.getNextColor());return this.storage.addAnalysis(s),s}addEllipsisAt(e,r){const i=`Ellipsis ${this.value.length}`,s=new Fd(i,this.parent,e,r,this.storage.getNextColor());return this.storage.addAnalysis(s),s}getLayerRoot(){return this.parent.listenerLayer.getLayerRoot()}getRelativePosition(e){const r=this.getLayerRoot().clientWidth,i=this.parent.width,n=e.layerX/r,o=Math.round(i*n),l=this.getLayerRoot().clientHeight,u=this.parent.height,m=e.layerY/l,f=Math.round(u*m);return{x:o,y:f}}activateListeners(){this.getLayerRoot().addEventListener("mousemove",e=>{const r=this.getRelativePosition(e),i=this.parent.group.tool.value;this.points.forEach(s=>{s.active&&i.onPointMove(s,r.x,r.y);const n=s.isWithin(r.x,r.y);n&&!s.isHover?i.onPointEnter(s):!n&&s.isHover&&i.onPointLeave(s)})}),this.getLayerRoot().addEventListener("pointerdown",e=>{const r=this.getRelativePosition(e),i=this.parent.group.tool.value;i.onCanvasClick(r.x,r.y,this.parent),this.points.forEach(s=>{s.isWithin(r.x,r.y)&&i.onPointDown(s)})}),this.getLayerRoot().addEventListener("pointerup",()=>{const e=this.parent.group.tool.value;this.points.forEach(r=>{e.onPointUp(r)})})}deactivateListeners(){}},Bd=class extends Gi{constructor(e,r,i,s,n,o,l,u,p,m,f){super();d(this,"id");d(this,"horizontalLimit");d(this,"verticalLimit");d(this,"group");d(this,"url");d(this,"thermalUrl");d(this,"visibleUrl");d(this,"fileName");d(this,"frameCount");d(this,"frames",[]);d(this,"signature","unknown");d(this,"version",-1);d(this,"streamCount",-1);d(this,"fileDataType",-1);d(this,"unit",-1);d(this,"width");d(this,"height");d(this,"timestamp");d(this,"duration");d(this,"min");d(this,"max");d(this,"_isHover",!1);d(this,"root",null);d(this,"canvasLayer");d(this,"visibleLayer");d(this,"cursorLayer");d(this,"listenerLayer");d(this,"timeline");d(this,"cursorValue");d(this,"analysis",new Hd(this,[]));d(this,"recording");d(this,"_mounted",!1);d(this,"_pixels");d(this,"_onHover");d(this,"_onClick");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=s,this.timestamp=o,this.duration=l,this.min=u,this.max=p,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=n}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e),this.analysis.value.forEach(r=>r.recalculateValues())}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.analysis.activateListeners(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const r=this.width,i=this.root.clientWidth,s=r/i,n=Math.round(e.offsetX*s),o=Math.round(e.offsetY*s);this.group.cursorPosition.recieveCursorPosition({x:n,y:o}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount(),this.analysis.deactivateListeners()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){if(e!==void 0){const r=this.group.tool.value.getLabelValue(e.x,e.y,this);this.cursorLayer.setLabel(e.x,e.y,r),this.cursorLayer.show=!0}else this.cursorLayer.show=!1,this.cursorLayer.resetCursor();this.cursorValue.recalculateFromCursor(e)}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},Zi=class{constructor(t){d(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},kt=class en{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=en.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=en.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},Vd=class extends Zi{constructor(e){super(e);d(this,"container");d(this,"canvas");d(this,"context");d(this,"_opacity",1);this.container=kt.createCanvasContainer(),this.canvas=kt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,s,n,o,l,u)=>{const m=new OffscreenCanvas(n,o).getContext("2d"),f=s-i;for(let k=0;k<=n;k++)for(let O=0;O<=o;O++){const C=k+O*n;let F=l[C];F<i&&(F=i),F>s&&(F=s);const V=(F-i)/f,de=Math.round(255*V),te=u[de];m.fillStyle=te,m.fillRect(k,O,1,1)}const $=m.getImageData(0,0,n,o);return await createImageBitmap($)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},zd=class extends Zi{constructor(e){super(e);d(this,"layerRoot");d(this,"center");d(this,"axisX");d(this,"axisY");d(this,"label");d(this,"_show",!1);d(this,"_hover",!1);this.layerRoot=kt.createCursorLayerRoot(),this.center=kt.createCursorLayerCenter(),this.axisX=kt.createCursorLayerX(),this.axisY=kt.createCursorLayerY(),this.label=kt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(r*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,r,i){this.instance.root===null||(this.recalculateLabelPosition(e,r),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Yd=class extends Zi{constructor(e){super(e);d(this,"container");this.container=kt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},qd=class extends Zi{constructor(e,r){super(e);d(this,"container");d(this,"image");this._url=r,this.container=kt.createVisibleLayer(),this._url&&(this.image=kt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Xd=class{constructor(t,e){d(this,"_currentFrame");d(this,"bufferSize",4);d(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(o=>o.index>=e&&o.index<r),s=i.filter(o=>!this.preloadedSteps.includes(o));return(await Promise.all(s.map(o=>this.drive.parent.service.frameData(o.index)))).forEach((o,l)=>{const u=s[l];this.buffer.set(u,o)}),this.preloadedSteps.forEach(o=>{i.includes(o)||this.buffer.delete(o)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},mn={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Gd=class extends ot{constructor(e,r,i,s){super(e,Math.max(Math.min(r,i.length),0));d(this,"_playbackSpeed",1);d(this,"startTimestampRelative");d(this,"endTimestampRelative");d(this,"stepsByAbsolute",new Map);d(this,"stepsByRelative",new Map);d(this,"stepsByIndex",new Map);d(this,"relativeSteps",[]);d(this,"_currentStep");d(this,"isSequence");d(this,"_isPlaying",!1);d(this,"timer");d(this,"buffer");d(this,"callbackdPlaybackSpeed",new Ye);d(this,"callbacksPlay",new Ye);d(this,"callbacksPause",new Ye);d(this,"callbacksStop",new Ye);d(this,"callbacksEnd",new Ye);d(this,"callbacksChangeFrame",new Ye);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Xd(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return mn[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const r=new Date(0);return r.setMilliseconds(e),wr(r,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),l=this.steps.slice(s,n).reverse().find(u=>u.relative<=e);return l!==void 0?l:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),l=this.steps.slice(s,n).find(u=>u.relative>e);return l!==void 0?l:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);if(r!==this._currentStep){this._currentStep=r;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){console.log("pokouším se hrát"),this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Zd=class extends ot{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},Qd=class extends ot{constructor(){super(...arguments);d(this,"stream");d(this,"recorder");d(this,"mimeType");d(this,"_isRecording",!1);d(this,"_mayStop",!0);d(this,"recordedChunks",[]);d(this,"callbackMayStop",new Ye)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:r}=this.initRecording();this.stream=e,this.recorder=r,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{console.log("playback ended"),this.end(),this.parent.timeline.callbacksEnd.remove(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),r=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=r,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Kd=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(t="__thermal-data"){const e=qi({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",t)}),r=this.file.frames.map(s=>{const{pixels:n,...o}=s;return o}),i=kd(e)(r);$d(e)(i)}},fa=class ga extends Bd{constructor(r,i,s,n,o,l,u,p,m,f,$,x,k,O,C,F,j){super(r,i.thermalUrl,s,n,m,o,u,$,x,l,i.visibleUrl);d(this,"_export");this.group=r,this.service=i,this.width=s,this.height=n,this.timestamp=o,this.frameCount=l,this.duration=u,this.frameInterval=p,this.fps=f,this.min=$,this.max=x,this.bytesize=k,this.averageEmissivity=O,this.averageReflectedKelvins=C,this.firstFrame=F,this.timelineData=j,this.pixels=F.pixels}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}get export(){if(!this._export){const r=new Kd(this);this._export=r}return this._export}postInit(){return this.canvasLayer=new Vd(this),this.visibleLayer=new qd(this,this.visibleUrl),this.cursorLayer=new zd(this),this.listenerLayer=new Yd(this),this.cursorValue=new Zd(this,void 0),this.timeline=new Gd(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Qd(this,!1),this}formatId(r){return`instance_${this.group.id}_${r}`}onSetPixels(r){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const i=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.cursorLayer.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,i)}}getPixelsForHistogram(){return[]}static fromService(r,i,s,n){return new ga(r,i,s.width,s.height,s.timestamp,s.frameCount,s.duration,s.frameInterval,n.pixels,s.fps,s.min,s.max,s.bytesize,s.averageEmissivity,s.averageReflectedKelvins,n,s.timeline).postInit()}},Ri=class extends aa{constructor(e,r,i,s,n){super(s,n);d(this,"id",Math.random());d(this,"baseInfoCache");d(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),s=fa.fromService(e,this,r,i);return e.files.addFile(s),s}},Jd=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(oe,ue)=>{const be=oe.getBigInt64(ue,!0),pe=62135596800000n,ve=10000n,re=24n*60n*60n*1000n*ve,ye=0x4000000000000000n,Me=0x8000000000000000n;let Ze=be&0x3fffffffffffffffn;be&Me&&(Ze>ye-re&&(Ze-=ye),Ze<0&&(Ze+=re));const lr=Ze/ve-pe;return Number(lr)},o=n(e,5),l=e.getUint8(15);let u=2;l===1&&(u=4);const p=57,m=r*i*u,f=p+m,$=t.slice(25),x=$.byteLength/f,k=oe=>{const ue=oe*f,be=ue+f,pe=$.slice(ue,be),ve=new DataView(pe),re=ve.getFloat32(8,!0),ye=ve.getFloat32(12,!0),Me=n(ve,0),Je=ve.getFloat32(24,!0),Ze=ve.getFloat32(28,!0);return{timestamp:Me,min:re,max:ye,emissivity:Je,reflectedKelvins:Ze}},O=[];for(let oe=0;oe<x;oe++){const ue=k(oe);O.push(ue)}const C={emissivity:0,reflectedKelvins:0};let F=1/0,j=-1/0;const V=[];O.forEach(oe=>{C.emissivity=C.emissivity+oe.emissivity,C.reflectedKelvins=C.reflectedKelvins+oe.reflectedKelvins,oe.min<F&&(F=oe.min),oe.max>j&&(j=oe.max),V.push(oe.timestamp)});const de=V[0],te=[];V.forEach((oe,ue)=>{const be=V[ue+1];let pe=0;be===void 0&&(pe=0),pe=be-oe;const ve=oe-de;te.push({absolute:oe,relative:ve,offset:isNaN(pe)?0:pe,index:ue})});const Se=O[O.length-1].timestamp-O[0].timestamp,I=Se/x,me=1e3/I;return{width:r,height:i,timestamp:o,bytesize:s,frameCount:x,duration:Se,frameInterval:I,fps:me,timeline:te,min:F,max:j,averageEmissivity:C.emissivity/O.length,averageReflectedKelvins:C.reflectedKelvins/O.length}},eu=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),o=i===1?4:2,l=57,u=s*n*o,p=l+u,m=t.slice(25),f=e*p,$=f+p;return{array:m.slice(f,$),dataType:i}},tu=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,o=24n*60n*60n*1000n*n,l=0x4000000000000000n,u=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&u&&(m>l-o&&(m-=l),m<0&&(m+=o));const $=m/n-s,x=Number($),k=r.getFloat32(8,!0),O=r.getFloat32(12,!0),C=r.getFloat32(24,!0),F=r.getFloat32(28,!0),j=t.slice(57);let V=[];if(e===0){const de=new Uint16Array(j),te=Math.abs(k-O),Se=65535;de.forEach(I=>{const me=I/Se;V.push(k+te*me)})}else e===1&&(V=Array.from(new Float32Array(j)));return{timestamp:x,min:k,max:O,emissivity:C,reflectedKelvins:F,pixels:V}},ru=async t=>{let e=[];const r=async C=>{const F=new DataView(C.slice(0,25)),j=F.getUint8(15),V=F.getUint16(17,!0),de=F.getUint16(19,!0),te=j===1?4:2,Se=57,I=V*de*te,me=Se+I,oe=C.slice(25),ue=oe.byteLength/me;let be=[];for(let pe=0;pe<ue;pe++){const re=pe*me+57,ye=re+I,Me=oe.slice(re,ye);j===0||j===1&&(be=be.concat(Array.from(new Float32Array(Me))))}return be};(await Promise.all(t.map(C=>r(C)))).forEach(C=>{e=e.concat(C)}),e.sort((C,F)=>C-F);const s=e[0],n=e[e.length-1],o=Math.abs(s-n),l=200,u=o/l,p=[];let m=[...e];for(let C=0;C<l;C++){const F=s+u*C,j=F+u,V=m.findIndex(me=>me>j),te=m.slice(0,V-1).length,Se=te/e.length*100,I={from:F,to:j,count:te,percentage:Se};p.push(I),m=m.slice(V)}const f=[...p].sort((C,F)=>C.percentage-F.percentage),$=f[0].percentage,x=f[f.length-1].percentage,k=Math.abs($-x);return p.map(C=>({...C,height:C.percentage/k*100}))},iu=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},su=[{extension:"lrc",minme:"application/octet-stream"}],nu={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:su,is:iu,baseInfo:Jd,getFrameSubset:eu,frameData:tu,registryHistogram:ru},ma=Object.freeze(nu),ou={LrcParser:ma},va=Object.values(ou),au=(t,e)=>{const r=va.find(i=>i.is(t,e));if(r===void 0)throw new ca(2,e,`No parser found for '${e}'.`);return r};va.map(t=>t.extensions);var lu=class ba{constructor(e,r,i){d(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new ba(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new vo(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=au(i,this.thermalUrl);return this.pocessTheService(new Ri(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof ca)return this.pocessTheService(vo.fromError(s));throw s}}pocessTheService(e){return e}},cu=class{constructor(t){d(this,"requestsByUrl",new Map);d(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new vn(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=lu.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},hu=class extends ot{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},du=class extends ot{constructor(){super(...arguments);d(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},uu=class extends oa{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},Qi=class{constructor(t){this.group=t}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},ya=class extends Qi{constructor(){super(...arguments);d(this,"key","inspect");d(this,"name","Inspect temperatures");d(this,"description","Use mouse to inspect temperature values displayed in the image.");d(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);d(this,"active",!1);d(this,"getLabelValue",(e,r,i)=>i.getTemperatureAtPoint(e,r).toFixed(2)+" °C")}onCanvasClick(e,r,i){}onCanvasLeave(e){}onActivate(){}onDeactivate(){}onPointEnter(e){}onPointLeave(e){}onPointMove(e,r,i){}onPointDown(e){}onPointUp(e){}},wa=class extends Qi{},pu=class extends wa{constructor(){super(...arguments);d(this,"key","add-ellipsis");d(this,"name","Add an elyptical analysis");d(this,"description","Click and drag to add an elyptical analysis to the image.");d(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);d(this,"active",!1);d(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onCanvasClick(e,r,i){const s=i.analysis.addEllipsisAt(e,r);i.analysis.storage.select(s,!0)}onPointDown(e){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.recalculateValues()}onCanvasLeave(e){}onActivate(){this.group.forEveryInstance(e=>{e.analysis.value.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onPointMove(e,r,i){e.isInActiveLayer()&&e.active&&(e.x=r,e.y=i,e.analysis.onResize.call())}onPointLeave(e){}onPointEnter(e){}},fu=class extends wa{constructor(){super(...arguments);d(this,"key","add-rect");d(this,"name","Add a rectangular analysis");d(this,"description","Click and drag to add a rectangular analysis to the image.");d(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);d(this,"active",!1);d(this,"getLabelValue",(e,r,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,r,i);return`X:${e}<br />Y:${r}<br />${s}`})}onCanvasClick(e,r,i){const s=i.analysis.addRectAt(e,r);i.analysis.storage.select(s,!0)}onPointDown(e){}onPointUp(e){e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.recalculateValues()}onCanvasLeave(e){}onActivate(){this.group.forEveryInstance(e=>{e.analysis.value.forEach(r=>{r.setDeselected()})})}onDeactivate(){}onPointMove(e,r,i){e.isInActiveLayer()&&e.active&&(e.x=r,e.y=i,e.analysis.onResize.call())}onPointLeave(e){}onPointEnter(e){}},gu=class extends Qi{constructor(){super(...arguments);d(this,"key","edit");d(this,"name","Edit analysis");d(this,"description","Drag corners of selected analysis to edit their dimensions.");d(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`);d(this,"active",!1)}getLabelValue(e,r,i){const s=i.analysis.storage.activeOnly.filter(o=>o.isWithin(e,r)).map(o=>o.key);return`${s.length>0?s.join("<br />")+"<br />":""}X: ${e}<br />Y: ${r}`}onActivate(){}onDeactivate(){}onCanvasClick(e,r,i){}onCanvasLeave(e){}onPointEnter(e){e.isInSelectedLayer()&&e.mouseEnter()}onPointLeave(e){e.isInSelectedLayer()&&e.mouseLeave()}onPointMove(e,r,i){e.isInSelectedLayer()&&e.active&&e.isWithin(r,i)&&(e.x=r,e.y=i,e instanceof da&&e.analysis.onResize.call())}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}},mu={inspect:ya,addRectangle:fu,addEllipsis:pu,edit:gu},vu=class extends ot{constructor(e,r){super(e,r);d(this,"_tools",Object.fromEntries(Object.entries(mu).map(([e,r])=>[e,new r(this.parent)])))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(r=>{r.key!==e.key&&r.deactivate()}))}selectTool(e){e instanceof Qi?this.value=e:this.value=this.tools[e]}},bu=class extends Gi{constructor(e,r,i,s){super();d(this,"hash",Math.random());d(this,"minmax",new uu(this,void 0));d(this,"tool",new vu(this,new ya(this)));d(this,"files",new du(this,[]));d(this,"cursorPosition",new Pd(this,void 0));d(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=s}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},yu=class extends ot{constructor(){super(...arguments);d(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const s=new bu(this.parent,e,r,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},wu=class extends ot{constructor(){super(...arguments);d(this,"_resolution",150);d(this,"buffer",new Map);d(this,"bufferPixelsCount",0);d(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,s,n,o)=>{let u=r.reduce((x,k)=>{const O=k.reduce((C,F)=>[...C,...F],[]);return[...x,...O]},[]).sort((x,k)=>x-k);const p=n/o;let m=i+p;const f=new Map;let $=0;for(;m!==!1;){const x=u.findIndex(C=>C>m),k=u.slice(0,x).length;f.set(m-p/2,k),$+=k,u=u.slice(x);const O=m+p;m=O<s?O:!1}return{result:f,resultCount:$}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.service.buffer),i=await this.parent.pool.exec(ma.registryHistogram,[r]);this.value=i}},xu=class extends ot{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},ku=class extends oa{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},_u=class extends Gi{constructor(e,r,i){super();d(this,"hash",Math.random());d(this,"groups",new yu(this,[]));d(this,"opacity",new hu(this,1));d(this,"minmax",new ku(this,void 0));d(this,"loading",new xu(this,!1));d(this,"range",new Cd(this,void 0));d(this,"histogram",new wu(this,[]));d(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),o=await Promise.all(s.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:n,groupFiles:o}}));await Promise.all(r.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async o=>o instanceof Ri?await o.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof Ri&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},vn=class extends Gi{constructor(e,r){super();d(this,"id");d(this,"service",new cu(this));d(this,"registries",{});d(this,"palette",new Rd(this,"jet"));d(this,"pool");this.pool=e||td.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new _u(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xa=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bo=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new xa(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $u{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pu=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class yo extends $u{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const u=new Set;for(const[p,{consumerHost:m}]of this.subscriptions)u.has(p)||(u.add(p),m.dispatchEvent(new xa(this.context,p,!0)));o.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Pu(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Re({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new yo(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new yo(o,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const o=new WeakMap;n={get(){return o.get(this)},set(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce({context:t,subscribe:e}){return(r,i)=>{typeof i=="object"?i.addInitializer(function(){new bo(this,{context:t,callback:s=>{r.set.call(this,s)},subscribe:e})}):r.constructor.addInitializer(s=>{new bo(s,{context:t,callback:n=>{s[i]=n},subscribe:e})})}}let ki;const Cu=new Uint8Array(16);function Su(){if(!ki&&(ki=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ki))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ki(Cu)}const Ke=[];for(let t=0;t<256;++t)Ke.push((t+256).toString(16).slice(1));function Ou(t,e=0){return Ke[t[e+0]]+Ke[t[e+1]]+Ke[t[e+2]]+Ke[t[e+3]]+"-"+Ke[t[e+4]]+Ke[t[e+5]]+"-"+Ke[t[e+6]]+Ke[t[e+7]]+"-"+Ke[t[e+8]]+Ke[t[e+9]]+"-"+Ke[t[e+10]]+Ke[t[e+11]]+Ke[t[e+12]]+Ke[t[e+13]]+Ke[t[e+14]]+Ke[t[e+15]]}const Eu=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),wo={randomUUID:Eu};function Au(t,e,r){if(wo.randomUUID&&!e&&!t)return wo.randomUUID();t=t||{};const i=t.random||(t.rng||Su)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Ou(i)}class bn extends nt{constructor(){super(...arguments),this.UUID=Au()}log(...e){console.log(this.tagName,this.UUID,...e)}}const ka="manager-instance",Ki="manager-palette-context",Ru=new vn,Tu="__internal_default_registry",Du="__internal_default_group",Mu=t=>t.addOrGetRegistry(Tu),Lu=t=>t.groups.addOrGetGroup(Du);var Uu=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,Ji=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Uu(e,r,s),s};let sr=class extends bn{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:er.jet}}connectedCallback(){super.connectedCallback();let t=Ru;if(this.slug===void 0)throw new Error("ThermalManager needs to have an unique slug!");{const e={},r=sr.sanitizeStringPalette(this.palette.key);e.palette=r,t=new vn(void 0,e)}this.manager=t,this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)})}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="palette"&&this.manager){const i=sr.sanitizeStringPalette(r);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(t){let e=!0;return t==null?e=!1:Object.keys(er).includes(t)||(e=!1),e?t:"jet"}setPalette(t){this.palette={key:t,data:er[t]}}render(){return T`<slot></slot>`}};Ji([Re({context:ka})],sr.prototype,"manager",2);Ji([N({type:String,reflect:!0,attribute:!0})],sr.prototype,"slug",2);Ji([Re({context:Ki}),N({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:t=>({key:t,data:er[t]}),toAttribute:t=>t.key.toString()}})],sr.prototype,"palette",2);sr=Ji([ne("manager-provider")],sr);var ju=Object.defineProperty,Iu=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&ju(e,r,s),s};class yn extends bn{connectedCallback(){if(super.connectedCallback(),this.manager===void 0)throw new Error(`ManagerConsumer ${this.tagName} (${this.UUID}) does not have a parent ManagerProvider. You need to nest this element inside a <manager-provider> element!`)}}Iu([Ce({context:ka,subscribe:!0}),W()],yn.prototype,"manager");const _a="registry-instance",$a="registry-opacity",wn="registry-range-from",xn="registry-range-to",Wu="registry-loading",Pa="registry-min",Ca="registry-max";var Nu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,Lt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Nu(e,r,s),s};let Pt=class extends yn{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}connectedCallback(){super.connectedCallback();let t=Mu(this.manager);this.slug===void 0&&(t=this.manager.addOrGetRegistry(this.slug)),this.registry=t,this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e}),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}attributeChangedCallback(t,e,r){var i;if(super.attributeChangedCallback(t,e,r),(t==="from"||t==="to")&&r&&this.registry){const s=this.registry.range;if(this.from!==void 0&&this.to!==void 0){const n={from:t==="from"?parseFloat(r):this.from,to:t==="to"?parseFloat(r):this.to};s.value!==void 0?(this.from!==((i=s.value)==null?void 0:i.from)||this.to!==s.value.to)&&s.setFixedRange(n):s.setFixedRange(n)}}if(t==="opacity"){const s=Math.min(1,Math.max(0,this.opacity));s!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(s)}}render(){return T`<slot></slot>`}};Lt([N({type:String,reflect:!0,attribute:!0})],Pt.prototype,"slug",2);Lt([Re({context:_a})],Pt.prototype,"registry",2);Lt([Re({context:$a}),N({type:Number,reflect:!0,attribute:!0})],Pt.prototype,"opacity",2);Lt([Re({context:Pa}),W()],Pt.prototype,"min",2);Lt([Re({context:Ca}),W()],Pt.prototype,"max",2);Lt([Re({context:wn}),N({type:Number,reflect:!0,attribute:!0})],Pt.prototype,"from",2);Lt([Re({context:xn}),N({type:Number,reflect:!0,attribute:!0})],Pt.prototype,"to",2);Lt([Re({context:Wu}),N({type:String,reflect:!0,attribute:!0})],Pt.prototype,"loading",2);Pt=Lt([ne("registry-provider")],Pt);var Bu=Object.defineProperty,Vu=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Bu(e,r,s),s};class dt extends yn{connectedCallback(){if(super.connectedCallback(),this.registry===void 0)throw new Error(`RegistryConsumer ${this.tagName} (${this.UUID}) does not have a parent RegistryProvider. You need to nest this element inside a <registry-provider>`)}}Vu([Ce({context:_a,subscribe:!0})],dt.prototype,"registry");const Sa="group-instance",Oa="tool-context",Ea="tools-context";var zu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,ri=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&zu(e,r,s),s};let kr=class extends dt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}connectedCallback(){super.connectedCallback(),this.slug?this.group=this.registry.groups.addOrGetGroup(this.slug):this.group=Lu(this.registry),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,t=>{this.tool=t})}render(){return T`<slot></slot>`}};ri([N({type:String,attribute:!0,reflect:!0})],kr.prototype,"slug",2);ri([Re({context:Sa})],kr.prototype,"group",2);ri([Re({context:Oa})],kr.prototype,"tool",2);ri([Re({context:Ea})],kr.prototype,"tools",2);kr=ri([ne("group-provider")],kr);var qu=Object.defineProperty,Xu=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&qu(e,r,s),s};class es extends dt{constructor(){super()}connectedCallback(){super.connectedCallback()}}Xu([Ce({context:Sa,subscribe:!0})],es.prototype,"group");const kn="file-markers-context",Aa="file-provider-element",_n="file-ms-context",Ra="playback",Ta="duration",Da="playing",Ma="file",La="failure",Ua="playbackSpeed",Fa="recording",ja="mayStop",Ia="analysislist";var Gu=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,qe=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Gu(e,r,s),s};let Be=class extends es{constructor(){super(...arguments),this.element=this,this.loading=!1,this.playing=!1,this.ms=0,this.playbackSpeed=1,this.recording=!1,this.mayStop=!0,this.marksElement=[],this.marks=[],this.analysis=[],this.callbacks={success:new Map,failure:new Map,loading:new Map}}async load(){return this.loading=!0,this.callbacks.loading.forEach(e=>e()),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Ri?(this.reader=e,await this.reader.createInstance(this.group).then(r=>(this.file=r,this.callbacks.success.forEach(i=>i(r)),this.clearCallbacks(),r.group.registry.postLoadedProcessing(),r))):(this.error=e,this.callbacks.failure.forEach(r=>r(this.error)),this.clearCallbacks(),e)).then(e=>(this.loading=!1,e))}connectedCallback(){super.connectedCallback(),this.load().then(t=>{if(t instanceof fa){this.duration={ms:t.timeline.duration,time:t.timeline.formatDuration(t.timeline.duration)};const e=()=>{this.playing=!0},r=()=>{this.playing=!1};t.timeline.callbacksPlay.add(this.UUID,e),t.timeline.callbacksPause.add(this.UUID,r),t.timeline.callbacksStop.add(this.UUID,r),t.timeline.callbacksEnd.add(this.UUID,r),this.currentFrame={ms:t.timeline.currentMs,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:t.timeline.currentStep.index,absolute:t.timeline.currentStep.absolute},t.timeline.callbacksChangeFrame.add(this.UUID,i=>{this.currentFrame={ms:i.relative,time:t.timeline.currentTime,percentage:t.timeline.currentPercentage,index:i.index,absolute:i.absolute},this.ms=i.relative}),t.timeline.callbackdPlaybackSpeed.add(this.UUID,i=>this.playbackSpeed=i),t.recording.addListener(this.UUID,i=>this.recording=i),t.recording.callbackMayStop.add(this.UUID,i=>this.mayStop=i),this.analysis=t.analysis.storage.all,t.analysis.addListener(this.UUID,i=>{this.analysis=i})}else this.failure=t})}firstUpdated(t){super.firstUpdated(t),this.marks=this.marksElement,this.marks.forEach(e=>console.log(e.innerHTML))}attributeChangedCallback(t,e,r){var i,s,n;if(super.attributeChangedCallback(t,e,r),t==="ms"&&r&&this.duration&&this.currentFrame){const o=Math.min(this.duration.ms,Math.max(0,parseInt(r)));o!==this.currentFrame.ms&&((i=this.file)==null||i.timeline.setRelativeTime(o))}t==="playing"&&(r==="true"?(s=this.file)==null||s.timeline.play():r==="false"&&((n=this.file)==null||n.timeline.pause())),t==="playbackspeed"&&this.file&&r&&Object.keys(mn).includes(r)&&(this.file.timeline.playbackSpeed=parseFloat(r)),t==="recording"&&this.file&&(this.recording===!0&&r==="false"?this.file.recording.end():this.recording===!1&&r==="true"&&this.file.recording.start())}registerSuccessCallback(t,e){this.callbacks.success.set(t,e)}registerFailureCallback(t,e){this.callbacks.failure.set(t,e)}clearCallbacks(){this.callbacks.success.clear(),this.callbacks.failure.clear(),this.callbacks.loading.clear()}willUpdate(t){super.willUpdate(t)}render(){return T`
            <slot></slot>
            <slot name="mark"></slot>
        `}};qe([Re({context:Aa})],Be.prototype,"element",2);qe([W()],Be.prototype,"reader",2);qe([W()],Be.prototype,"loading",2);qe([W()],Be.prototype,"error",2);qe([Re({context:Da}),N({type:String,reflect:!0,attribute:!0})],Be.prototype,"playing",2);qe([Re({context:Ta}),W()],Be.prototype,"duration",2);qe([Re({context:Ra}),W()],Be.prototype,"currentFrame",2);qe([Re({context:_n}),N({type:Number,reflect:!0,attribute:!0})],Be.prototype,"ms",2);qe([Re({context:Ma}),W()],Be.prototype,"file",2);qe([Re({context:La}),W()],Be.prototype,"failure",2);qe([Re({context:Ua}),N({type:Number,reflect:!0,attribute:!0})],Be.prototype,"playbackSpeed",2);qe([Re({context:Fa}),N({type:String,reflect:!0,attribute:!0})],Be.prototype,"recording",2);qe([Re({context:ja}),W()],Be.prototype,"mayStop",2);qe([Zr({slot:"mark",flatten:!0}),N({type:Object,reflect:!0})],Be.prototype,"marksElement",2);qe([Re({context:kn})],Be.prototype,"marks",2);qe([Re({context:Ia})],Be.prototype,"analysis",2);qe([N({type:String,attribute:!0,reflect:!0})],Be.prototype,"thermal",2);qe([N({type:String,attribute:!0,reflect:!0})],Be.prototype,"visible",2);Be=qe([ne("file-provider")],Be);var Qu=Object.defineProperty,Ot=(t,e,r,i)=>{for(var s=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=o(e,r,s)||s);return s&&Qu(e,r,s),s};class Te extends es{constructor(){super(...arguments),this.internalCallbackUUID=`${this.UUID}__internal_callback`,this.loading=!0,this.playing=!1,this.recording=!1,this.mayStop=!0}connectedCallback(){if(super.connectedCallback(),this.parentFileProviderElement)this.parentFileProviderElement.registerSuccessCallback(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.registerFailureCallback(this.internalCallbackUUID,()=>{this.loading=!1}),this.parentFileProviderElement.registerSuccessCallback(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.registerFailureCallback(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Ot([Ce({context:Aa,subscribe:!0}),W()],Te.prototype,"parentFileProviderElement");Ot([W()],Te.prototype,"loading");Ot([Ce({context:Da,subscribe:!0}),W()],Te.prototype,"playing");Ot([Ce({context:Ta,subscribe:!0}),W()],Te.prototype,"duration");Ot([Ce({context:Ra,subscribe:!0}),W()],Te.prototype,"currentFrame");Ot([Ce({context:Ma,subscribe:!0}),W()],Te.prototype,"file");Ot([Ce({context:La,subscribe:!0}),W()],Te.prototype,"failure");Ot([Ce({context:Ua,subscribe:!0}),W()],Te.prototype,"playbackSpeed");Ot([Ce({context:Fa,subscribe:!0}),W()],Te.prototype,"recording");Ot([Ce({context:ja,subscribe:!0}),W()],Te.prototype,"mayStop");var Ku=Object.defineProperty,Ju=Object.getOwnPropertyDescriptor,ep=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ju(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ku(e,r,s),s};let tn=class extends Te{constructor(){super(...arguments),this.container=He()}onInstanceCreated(t){if(this.container.value!==void 0)t.mountToDom(this.container.value);else throw this.log(this.container.value),new Error("Error mounting the instance to the canvas!")}onFailure(){}render(){var i,s;const t=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,r={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":t};return T`
            <div ${Ge(this.container)} class=${Jt(r)} part="file-canvas-container">
            
                ${this.loading===!0?T`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:t===!0?T`<div class="error-wrapper">
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
                        </div>`:Z}
            
            </div>
        
        `}};tn.styles=Ae`
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
    `;tn=ep([ne("file-canvas")],tn);var tp=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,Wa=(t,e,r,i)=>{for(var s=i>1?void 0:i?rp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&tp(e,r,s),s};let Ti=class extends dt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return T`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return T`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(er).map(([t,e])=>T`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};Ti.styles=Ae`

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

    `;Wa([Ce({context:Ki,subscribe:!0})],Ti.prototype,"value",2);Ti=Wa([ne("registry-palette-dropdown")],Ti);var ip=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,Na=(t,e,r,i)=>{for(var s=i>1?void 0:i?sp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ip(e,r,s),s};let Di=class extends dt{connectedCallback(){super.connectedCallback();const t=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(t){const e=parseFloat(t.target.value);this.registry.opacity.imposeOpacity(e)}render(){return T`
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
        `}};Di.styles=Ae`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;Na([Ce({context:$a,subscribe:!0})],Di.prototype,"value",2);Di=Na([ne("registry-opacity-slider")],Di);var np=Object.defineProperty,op=Object.getOwnPropertyDescriptor,ap=(t,e,r,i)=>{for(var s=i>1?void 0:i?op(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&np(e,r,s),s};let rn=class extends Te{onInstanceCreated(t){}onFailure(t){}render(){return this.file?T`
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
        `:Z}};rn.styles=Ae`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;rn=ap([ne("file-share-button")],rn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mi extends un{constructor(e){if(super(e),this.it=Z,e.type!==dn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Z||e==null)return this._t=void 0,this.it=e;if(e===Bt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Mi.directiveName="unsafeHTML",Mi.resultType=1;const ft=Wi(Mi);var lp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,hp=(t,e,r,i)=>{for(var s=i>1?void 0:i?cp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&lp(e,r,s),s};let sn=class extends Te{onFileLoaded(){}onInstanceCreated(t){}onFailure(t){}renderRow(t,e){return`<tr>
            <td style="width: 110px">${t}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(t,e,r=4,i){const s=e.toFixed(r),n=i!==void 0?s+" "+i:s;return this.renderRow(t,n)}renderDownloadRow(t,e,r,i){return this.renderRow(t,`<span>${e}</span>
            <a href=${r} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?T`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${ft(this.renderRow("Thermal file name",this.file.fileName))}

                        ${ft(this.renderDownloadRow("Thermal file URL",this.file.thermalUrl,this.file.thermalUrl,"Download thermal file"))}

                        ${this.file.visibleUrl?ft(this.renderDownloadRow("Visible file URL",this.file.visibleUrl,this.file.visibleUrl,"Download visible file")):Z}

                        ${ft(this.renderRow("Time",Dd.human(this.file.timestamp)))}

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
                        <td><ul>${this.file.service.parser.devices.map(t=>T`<li>
                            <h3><a href="${t.deviceUrl}" target="_blank">${t.deviceName}</a></h3>
                            <div class="small">${t.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${t.manufacturerUrl}" target="_blank">${t.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:Z}};sn.styles=Ae`

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
    
    `;sn=hp([ne("file-info-button")],sn);var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,pp=(t,e,r,i)=>{for(var s=i>1?void 0:i?up(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&dp(e,r,s),s};let xo=class extends dt{doAction(){this.registry.range.applyAuto()}render(){return T`
            <thermal-button @click=${this.doAction}>Automatic range</thermal-button>
        `}};xo=pp([ne("registry-range-auto-button")],xo);var fp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,mp=(t,e,r,i)=>{for(var s=i>1?void 0:i?gp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&fp(e,r,s),s};let ko=class extends dt{doAction(){this.registry.range.applyMinmax()}render(){return T`
            <thermal-button @click=${this.doAction}>Full range</thermal-button>
        `}};ko=mp([ne("registry-range-full-button")],ko);var vp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,ts=(t,e,r,i)=>{for(var s=i>1?void 0:i?bp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&vp(e,r,s),s};let Ct=class extends dt{constructor(){super(...arguments),this.ticksRef=He(),this.placement="top",this.minmax=void 0,this.ticks=[]}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)})}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/Ct.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return T`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Ge(this.ticksRef)}>

                    ${this.ticks.map(t=>T`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Ct.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Ct.TICK_WIDTH=40;Ct.TICK_FIXED=2;Ct.styles=Ae`

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


    `;ts([N({type:String,reflect:!0})],Ct.prototype,"placement",2);ts([W()],Ct.prototype,"minmax",2);ts([W()],Ct.prototype,"ticks",2);Ct=ts([ne("registry-ticks-bar")],Ct);var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,ii=(t,e,r,i)=>{for(var s=i>1?void 0:i?wp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&yp(e,r,s),s};let _r=class extends dt{connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,t=>{this.opacity=t}),this.registry.range.addListener(this.UUID,t=>{this.range=t}),this.registry.minmax.addListener(this.UUID,t=>{this.minmax=t}),this.registry.palette.addListener(this.UUID,t=>{this.palette=t.toString()})}renderRow(t,e){return T`<tr>
            <td>${t}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const t={};return t.ID=this.registry.id,t.OPACITY=this.registry.opacity.value.toString(),t["GROUP COUNT"]=this.registry.groups.value.length.toString(),t.PALETTE=this.palette,t.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),t.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),t}render(){return T`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([t,e])=>this.renderRow(t,e))}
                
                </table>
            </div>
        
        </div>`}};ii([W()],_r.prototype,"minmax",2);ii([W()],_r.prototype,"range",2);ii([W()],_r.prototype,"opacity",2);ii([W()],_r.prototype,"palette",2);_r=ii([ne("registry-log")],_r);(()=>{var t=Object.defineProperty,e=Math.pow,r=(a,h,v)=>h in a?t(a,h,{enumerable:!0,configurable:!0,writable:!0,value:v}):a[h]=v,i=(a,h,v)=>(r(a,typeof h!="symbol"?h+"":h,v),v),s=(a,h)=>` ${h&&h.length>0?h.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${a} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",o="pointers-overlap",l="pointers-min-distance",u="pointers-max-distance",p="range-dragging",m="data",f="min",$="max",x="step",k="round",O="type",C="theme",F="rtl",j="btt",V="disabled",de="keyboard-disabled",te="mousewheel-disabled",Se="slider-width",I="slider-height",me="slider-radius",oe="slider-bg",ue="slider-bg-hover",be="slider-bg-fill",pe="pointer-width",ve="pointer-height",re="pointer-radius",ye="pointer-bg",Me="pointer-bg-hover",Je="pointer-bg-focus",Ze="pointer-shadow",Rr="pointer-shadow-hover",lr="pointer-shadow-focus",oi="pointer-border",ai="pointer-border-hover",os="pointer-border-focus",li="animate-onclick",as="css-links",at="vertical",Ft="horizontal",Tr=(a,h,v,g,R)=>{let Y=h-a;return Y===0?v:(g-v)*(R-a)/Y+v},vt=a=>!isNaN(parseFloat(a))&&isFinite(a),Le=(a,h)=>vt(a)?Number(a):h,ci=(a,h)=>h===0?0:Math.round(a/h)*h,ls=(a,h=1/0)=>{if(h===1/0)return a;let v=e(10,h);return Math.round(a*v)/v},Ve=a=>a==null?!1:typeof a=="boolean"?a:a.trim().toLowerCase()==="true",cs=(a,h)=>{a.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:h}}))},hs=(a,h)=>{a.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:h}}))},ds=(a,h)=>{a.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:h}}))},us=(a,h)=>{a.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:h}}))},ps=(a,h)=>{if(!h||h.length<=0)return;let v=h.map(R=>vt(R)?Le(R,R):R),g={values:v||[]};g.value=v[0],g.value0=v[0],g.value1=v[0];for(let R=1;R<v.length;R++)g[`value${R+1}`]=v[R];a.dispatchEvent(new CustomEvent("change",{detail:g}))},w=(a,h,v)=>{let g=0,R,Y,ee,D,M=!1,ie=(X,Ee,Xe,ze,Ue,Fe)=>{let rt=g;Xe!==void 0&&X>Xe&&(X=Xe),Ee!==void 0&&X<Ee&&(X=Ee),g=X;let it=g;return(ze===at&&Fe||ze===Ft&&Ue)&&(it=100-it),ze===at?h.style.top=`${it}%`:h.style.left=`${it}%`,rt!==g},ce=X=>X===h||h.contains(X),H=(X,Ee,Xe,ze)=>{R=X,Y=Ee,ee=Xe,D=ze},$e=X=>{M=X,h.classList.toggle("disabled",M),M?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},pt=(X,Ee)=>{Ee==null?h.removeAttribute(X):h.setAttribute(X,Ee)},et=X=>h.getAttribute(X),q=X=>{if(!M){switch(X.key){case"ArrowLeft":{X.preventDefault(),typeof R=="function"&&R(v);break}case"ArrowRight":{X.preventDefault(),typeof Y=="function"&&Y(v);break}case"ArrowUp":{X.preventDefault(),typeof ee=="function"&&ee(v);break}case"ArrowDown":{X.preventDefault(),typeof D=="function"&&D(v);break}}us(a,X)}},se=()=>{M||cs(a,h)};return h.className=`pointer pointer-${v}`,h.addEventListener("keydown",q),h.addEventListener("click",se),{$pointer:h,get percent(){return g},get disabled(){return M},set disabled(X){$e(X)},updatePosition:ie,isClicked:ce,setCallbacks:H,setAttr:pt,getAttr:et,destroy:()=>{h.removeEventListener("keydown",q),h.removeEventListener("click",se),h.remove()}}},S=a=>{if(a==null)return;if(Array.isArray(a))return a;if(a.trim()==="")return;let h=a.split(","),v=[],g=!0;for(let R=0;R<h.length;R++){let Y=h[R].trim();Y!==""&&(v.push(Y),vt(Y)||(g=!1))}return g?v.map(R=>Number(R)):v},E=(a,h)=>h?h.findIndex(v=>v===a||v.toString().trim()===a.toString().trim()):-1,A=a=>({updatePosition:(h,v,g,R)=>{if(v.length<=0)return;let Y=v.length===1,ee=v[0],D=v[v.length-1];h===at?(a.style.removeProperty("width"),a.style.removeProperty("right"),a.style.removeProperty("left"),Y?a.style.height=`${ee}%`:a.style.height=`${Math.abs(ee-D)}%`,R?(a.style.bottom="0%",Y?a.style.top="auto":a.style.top=`${Math.min(100-D,100-ee)}%`):(a.style.bottom="auto",Y?a.style.top="0%":a.style.top=`${Math.min(ee,D)}%`)):(a.style.removeProperty("height"),a.style.removeProperty("top"),a.style.removeProperty("bottom"),Y?a.style.width=`${ee}%`:a.style.width=`${Math.abs(ee-D)}%`,g?(a.style.right="0%",Y?a.style.left="auto":a.style.left=`${Math.min(100-D,100-ee)}%`):(a.style.right="auto",Y?a.style.left="0%":a.style.left=`${Math.min(ee,D)}%`))}}),z="--animate-onclick",xe="--width",Q="--height",Oe="--panel-bg-border-radius",fe="--panel-bg",L="--panel-bg-hover",ge="--panel-bg-fill",y="--pointer-width",_="--pointer-height",K="--pointer-border-radius",ae="--pointer-bg",We="--pointer-bg-hover",Qe="--pointer-bg-focus",wt="--pointer-shadow",lt="--pointer-shadow-hover",ut="--pointer-shadow-focus",jt="--pointer-border",B="--pointer-border-hover",J="--pointer-border-focus",P=(a,h,v)=>{let g=new Map;for(let R of a.attributes){let Y=R.nodeName.trim().toLowerCase();if(!h.test(Y))continue;let ee=Y.replace(/\D/g,"").trim(),D=ee===""||ee==="0"||ee==="1"?0:Le(ee,0)-1,M=v&&typeof v=="function"?v(R.value):R.value;g.set(D,M)}return g},G=a=>{if(!a)return null;let h=a.getAttribute(as);if(!h)return null;let v=h.split(";"),g=[];for(let R of v)R.trim()!==""&&g.push(R.trim());return g},ke=[[xe,Se,"sliderWidth",null],[Q,I,"sliderHeight",null],[Oe,me,"sliderRadius",null],[fe,oe,"sliderBg",null],[L,ue,"sliderBgHover",null],[ge,be,"sliderBgFill",null],[y,pe,"pointer#Width",/^pointer([0-9]*)-width$/],[_,ve,"pointer#Height",/^pointer([0-9]*)-height$/],[K,re,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ae,ye,"pointer#Bg",/^pointer([0-9]*)-bg$/],[We,Me,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Qe,Je,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[wt,Ze,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[lt,Rr,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[ut,lr,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[jt,oi,"pointer#Border",/^pointer([0-9]*)-border$/],[B,ai,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[J,os,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],we=(a,h,v)=>{let g=null,R=[],Y=new Map,ee=(q,se=h)=>{let X=[...se.classList];for(let Ee of X)Ee.startsWith(q)&&h.classList.remove(Ee)},D=()=>{ee("shape");let q=h.querySelectorAll(".pointer");for(let se of q)ee("shape",se)},M=q=>{g=q,ee("theme-"),typeof q=="string"&&h.classList.add(`theme-${q}`)},ie=()=>{if(D(),!(R.length<=0)){h.classList.add("shape",`shape-${R[0]}`);for(let q=1;q<R.length;q++){let se=R[q];if(!se)continue;let X=h.querySelector(`.pointer-${q}`);!X||X.classList.add("shape",`shape-${se}`)}}},ce=(q,se)=>{R[q]=se,ie()},H=()=>{D();let q=P(a,/^pointer([0-9]*)-shape$/);if(!(q.size<=0)){for(let se of q){let X=se[0];R[X]=se[1]}ie()}},$e=(q,se)=>`${q}-${se}`,pt=(q,se,X)=>{let Ee=v[X];if(!Ee)return;let Xe=X===0?h:Ee.$pointer;if(se==null){Y.has($e(q,X))&&Y.delete($e(q,X)),Xe.style.removeProperty(q);return}Y.set($e(q,X),se),Xe.style.setProperty(q,se)},et=(q,se)=>Y.get($e(q,se));return(()=>{for(let q of ke){let[se,X,Ee,Xe]=q;if(Xe){let Ue=P(a,Xe);for(let Fe of Ue){let rt=Fe[0],it=Fe[1];pt(se,it,rt)}}else{let Ue=a.getAttribute(X);pt(se,Ue,0)}let ze=[];if(Ee.indexOf("#")===-1)ze.push([Ee,0]);else{ze.push([Ee.replace("#",""),0]),ze.push([Ee.replace("#","0"),0]),ze.push([Ee.replace("#","1"),0]);for(let Ue=1;Ue<v.length;Ue++)ze.push([Ee.replace("#",(Ue+1).toString()),Ue])}for(let Ue of ze)try{let Fe=Ue[0],rt=Ue[1];Object.prototype.hasOwnProperty.call(a,Fe)||Object.defineProperty(a,Fe,{get(){return et(se,rt)},set:it=>{pt(se,it,rt)}})}catch(Fe){console.error(Fe)}}M(a.getAttribute(C)),H()})(),{setStyle:pt,getStyle:et,get theme(){return g},set theme(q){M(q)},get pointerShapes(){return R},setPointerShape:ce}},De="animate-on-click",le="range-dragging",tt=(a,h,v,g)=>{let R=[],Y=ce=>{for(let H of R)H.update&&typeof H.update=="function"&&H.update(ce)},ee=()=>{for(let ce of R)ce.destroy&&typeof ce.destroy=="function"&&ce.destroy()},D=(ce,H)=>{for(let $e of R)$e.onAttrChange&&typeof $e.onAttrChange=="function"&&$e.onAttrChange(ce,H)},M=ce=>{if(ce.gettersAndSetters){for(let H of ce.gettersAndSetters)if(!(!H.name||!H.attributes))try{Object.prototype.hasOwnProperty.call(a,H.name)||Object.defineProperty(a,H.name,H.attributes)}catch($e){console.error("defineSettersGetters error:",$e)}}},ie=ce=>{var H;if(!ce.css)return;let $e=(H=a.shadowRoot)==null?void 0:H.querySelector("style");!$e||($e.innerHTML+=ce.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ce of window.tcRangeSliderPlugins){let H=ce();R.push(H),H.init&&typeof H.init=="function"&&(H.init(a,h,v,g),M(H),ie(H))}},update:Y,onAttrChange:D,destroy:ee}},Ne=10,hi=20,Xa=(a,h)=>{let v=new Map,g=/^value([0-9]*)$/;for(let D of a.attributes){let M=D.nodeName.trim().toLowerCase();if(!g.test(M))continue;let ie=M.replace("value","").trim(),ce=ie===""||ie==="0"||ie==="1"?0:Le(ie,0)-1,H=vt(D.value)?Le(D.value,0):D.value;v.set(ce,H)}let R=Math.max(...Array.from(v.keys())),Y=[];Y.push([w(a,h,0),v.get(0)]);let ee=h;for(let D=1;D<=R;D++){let M=h.cloneNode(!0);ee.after(M),ee=M,Y.push([w(a,M,D),v.get(D)])}return Y},Sn=(a,h,v,g,R,Y,ee)=>{try{Object.defineProperty(a,g,{configurable:!0,get(){if(!h)return;let D=h.pointers[v];if(!D)return;let M=h.getTextValue(D.percent);return vt(M)?Le(M,M):M},set:D=>{h.pointers[v]?h==null||h.setValue(D,v):h==null||h.addPointer(D)}}),Object.defineProperty(a,R,{configurable:!0,get(){var D,M;return(M=(D=h==null?void 0:h.pointers[v])==null?void 0:D.getAttr("aria-label"))!=null?M:void 0},set:D=>{!h||h.setAriaLabel(v,D)}}),Object.defineProperty(a,Y,{configurable:!0,get(){var D,M;return(M=(D=h==null?void 0:h.styles)==null?void 0:D.pointerShapes[v])!=null?M:null},set:D=>{!h||!h.styles||h.styles.setPointerShape(v,D)}}),Object.defineProperty(a,ee,{configurable:!0,get(){var D;return(D=h==null?void 0:h.pointers[v].disabled)!=null?D:!1},set:D=>{if(!h)return;let M=h==null?void 0:h.pointers[v];!M||(M.disabled=D)}})}catch(D){console.error(D)}},Ga=(a,h)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Ne;g++)v.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of v)Sn(a,h,g[4],g[0],g[1],g[2],g[3])},On=(a,h,v)=>{var g;let R=(g=v.shadowRoot)==null?void 0:g.querySelector(".container");if(R)for(let Y of a)h?R.prepend(Y.$pointer):R.append(Y.$pointer)},Za=(a,h)=>{if(!(!h||a.length<=1)){for(let v of a)v.$pointer.style.zIndex=hi.toString();h.$pointer.style.zIndex=(hi*2).toString()}},fs=0,Dr=100,cr=2,En="0.3s",Qa=(a,h,v)=>{let g=v.map(c=>c[0]),R=null,Y=null,ee=null,D=null,M=fs,ie=Dr,ce,H,$e=Ft,pt=cr,et=!1,q=!1,se=!1,X=0,Ee=1/0,Xe=!1,ze,Ue,Fe=!1,rt=!1,it=!1,It=En,An=[],Rn=c=>{Fe||(c.preventDefault&&c.preventDefault(),Xt(c),window.addEventListener("mousemove",Xt),window.addEventListener("mouseup",di),hs(a,c))},di=c=>{Fe||(ze=void 0,Ue=void 0,window.removeEventListener("mousemove",Xt),window.removeEventListener("mouseup",di),It&&h.classList.add(De),ds(a,c))},el=(c,b)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(c)&&It&&h.classList.remove(De),g[0];let U=rl(c);if(Xe){let _e=b,bt=pi(_e);bt!==void 0&&(_e=ci(_e,bt)),U?(ze=_e,Ue=0,It&&h.classList.remove(De)):ze!==void 0&&(Ue=_e-ze,ze=_e)}if(!tl(c)&&!U){for(let _e of g)if(!(!_e.isClicked(c)||_e.disabled))return It&&h.classList.remove(De),_e;for(let _e of g)if(R===_e)return _e}let Pe=1/0,je=null;for(let _e of g){if(_e.disabled)continue;let bt=Math.abs(b-_e.percent);bt<Pe&&(Pe=bt,je=_e)}return je},Tn=()=>g.findIndex(c=>R===c&&!c.disabled),Xt=c=>{let b;if($e===at){let{height:Pe,top:je}=h.getBoundingClientRect(),_e=c.type.indexOf("mouse")!==-1?c.clientY:c.touches[0].clientY;b=Math.min(Math.max(0,_e-je),Pe)*100/Pe}else{let{width:Pe,left:je}=h.getBoundingClientRect(),_e=c.type.indexOf("mouse")!==-1?c.clientX:c.touches[0].clientX;b=Math.min(Math.max(0,_e-je),Pe)*100/Pe}if((et||q)&&(b=100-b),R=el(c.target,b),R&&Za(g,R),Xe&&g.length>1&&Ue!==void 0){let Pe=g[0],je=g[g.length-1],_e=Pe.percent+Ue<0,bt=je.percent+Ue>100;if(_e||bt)return;for(let xi=0;xi<g.length;xi++)st(xi,g[xi].percent+Ue);return}let U=Tn();U!==-1&&(st(U,b),R==null||R.$pointer.focus())},ui=c=>{if(Fe||document.activeElement!==a||R!=null&&R.disabled)return;c.stopPropagation(),c.preventDefault();let b=c.deltaY<0,U=et||q,Pe=b?!U:U,je=Tn();je!==-1&&(Pe?Mr(je,g[je].percent):Lr(je,g[je].percent))},Dn=c=>{Fe||rt||($e===at?q?st(c,100):st(c,0):et?Lr(c,g[c].percent):Mr(c,g[c].percent))},Mn=c=>{Fe||rt||($e===at?q?st(c,0):st(c,100):et?Mr(c,g[c].percent):Lr(c,g[c].percent))},Ln=c=>{Fe||rt||($e===at?q?Lr(c,g[c].percent):Mr(c,g[c].percent):et?st(c,100):st(c,0))},Un=c=>{Fe||rt||($e===at?q?Mr(c,g[c].percent):Lr(c,g[c].percent):et?st(c,0):st(c,100))},tl=c=>c.classList.contains("panel"),rl=c=>c.classList.contains("panel-fill"),Mr=(c,b)=>{if(b===void 0)return;let U=pi(b);U==null&&(U=1),b-=U,b<0&&(b=0),st(c,b)},Lr=(c,b)=>{if(b===void 0)return;let U=pi(b);U==null&&(U=1),b+=U,b>100&&(b=100),st(c,b)},Gt=()=>{!D||D.update({percents:Fn(),values:jn(),$pointers:In(),min:Wn(),max:Nn(),data:vs(),step:ms(),round:ys(),type:bs(),textMin:fi(),textMax:gi(),rightToLeft:ks(),bottomToTop:_s(),pointersOverlap:Ss(),pointersMinDistance:ws(),pointersMaxDistance:xs(),rangeDragging:Os(),disabled:$s(),keyboardDisabled:Ps(),mousewheelDisabled:Cs()})},il=()=>{Gt()},sl=c=>{if(!(se||g.length<=1||ie===M))if(c===0){let b=Ee*100/(ie-M);return Math.max(0,g[c+1].percent-b)}else{let b=X*100/(ie-M);return Math.min(g[c-1].percent+b,100)}},nl=c=>{if(!(se||g.length<=1||ie===M))if(c===g.length-1){let b=Ee*100/(ie-M);return Math.min(g[c-1].percent+b,100)}else{let b=X*100/(ie-M);return Math.max(0,g[c+1].percent-b)}},pi=c=>{let b;if(typeof ce=="function"){let U=Tr(0,100,M,ie,c);b=ce(U,c)}else b=ce;if(vt(b)){let U=ie-M;return b=U===0?0:b*100/U,b}},hr=c=>{if(c===void 0)return;let b=Tr(0,100,M,ie,c);return H!==void 0?H[Math.round(b)]:ls(b,pt)},fi=()=>H!==void 0?H[M]:M,gi=()=>H!==void 0?H[ie]:ie,ms=()=>ce,ol=c=>{var b;return c<=0||se?fi():(b=hr(g[c-1].percent))!=null?b:""},al=c=>{var b;return g.length<=1||c>=g.length-1||se?gi():(b=hr(g[c+1].percent))!=null?b:""},Fn=()=>g.map(c=>c.percent),jn=()=>g.map(c=>hr(c.percent)),In=()=>g.map(c=>c.$pointer),Wn=()=>M,Nn=()=>ie,vs=()=>H,bs=()=>$e,ys=()=>pt,ws=()=>X,xs=()=>Ee,ll=c=>An[c],ks=()=>et,_s=()=>q,$s=()=>Fe,Ps=()=>rt,Cs=()=>it,Ss=()=>se,Os=()=>Xe,st=(c,b)=>{if(b===void 0)return;let U=pi(b);U!==void 0&&(b=ci(b,U));let Pe=g[c];if(!Pe)return;let je=Pe.updatePosition(b,sl(c),nl(c),$e,et,q);Y==null||Y.updatePosition($e,g.map(_e=>_e.percent),et,q),Gt();for(let _e of g){let bt=hr(_e.percent);bt!==void 0&&(_e.setAttr("aria-valuenow",bt.toString()),_e.setAttr("aria-valuetext",bt.toString()))}hl(),je&&ps(a,g.map(_e=>hr(_e.percent)))},xt=()=>{for(let c=0;c<g.length;c++)st(c,g[c].percent)},cl=(c,b)=>{M=H!==void 0?0:Le(c,fs),ie=H!==void 0?H.length-1:Le(b,Dr),mi(M),vi(ie)},hl=()=>{var c,b;for(let U=0;U<g.length;U++){let Pe=g[U];Pe.setAttr("aria-valuemin",((c=ol(U))!=null?c:"").toString()),Pe.setAttr("aria-valuemax",((b=al(U))!=null?b:"").toString())}},mi=c=>{M=Le(c,fs),M>ie&&(ie=M+Dr),xt()},vi=c=>{ie=Le(c,Dr),ie<M&&(ie=M+Dr),xt()},Hn=c=>{se=!0;for(let b=0;b<c.length;b++)bi(c[b],b);se=!1;for(let b=0;b<c.length;b++)bi(c[b],b)},bi=(c,b)=>{let U;H!==void 0?(U=c==null?0:E(c,H),U===-1&&(U=0)):(U=Le(c,M),U<M&&(U=M),U>ie&&(U=ie));let Pe=Tr(M,ie,0,100,U);st(b,Pe)},yi=c=>{if(c==null){ce=void 0;return}if(typeof c=="function"){ce=c,xt();return}if(vt(c)){ce=Le(c,1);let b=Math.abs(ie-M);ce>b&&(ce=void 0),xt();return}ce=void 0},Es=c=>{se=c,xt()},As=c=>{(!vt(c)||c<0)&&(c=0),X=c},Rs=c=>{(!vt(c)||c<0)&&(c=1/0),Ee=c},Ts=c=>{Fe=c,h.classList.toggle("disabled",Fe),Fe?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},Bn=c=>{rt=c},Vn=c=>{it=c,it?document.removeEventListener("wheel",ui):document.addEventListener("wheel",ui,{passive:!1})},Ds=c=>{if(c==null){H=void 0;return}if(H=S(c),H===void 0||H.length<=0){H=void 0;return}mi(0),vi(H.length-1),ce===void 0&&yi(1)},Ms=c=>{var b;typeof c=="string"?$e=c.trim().toLowerCase()===at?at:Ft:$e=Ft;let U=(b=a.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!U)return;U.className=`range-slider-box type-${$e}`,xt();let Pe=$e===at?"vertical":"horizontal";for(let je of g)je.setAttr("aria-orientation",Pe)},Ls=c=>{et=c,g.length>1&&On(g,et,a),xt(),Gt()},Us=c=>{q=c,g.length>1&&On(g,q,a),xt(),Gt()},Fs=c=>{pt=Le(c,cr),pt<0&&(pt=cr),Gt()},zn=c=>{c==null||c.toString().trim().toLowerCase()==="false"?(It=void 0,h.style.removeProperty(z),h.classList.remove(De)):(It=c.toString(),h.style.setProperty(z,It),h.classList.add(De))},Yn=(c,b)=>{let U=g[c];!U||(U.setAttr("aria-label",b),An[c]=b)},wi=c=>{if(ze=void 0,g.length<=1){Xe=!1,h.classList.remove(le);return}Xe=c,h.classList.toggle(le,Xe)},dl=()=>{Ts(Ve(a.getAttribute(V))),rt=Ve(a.getAttribute(de)),it=Ve(a.getAttribute(te));let c=P(a,/^pointer([0-9]*)-disabled$/,b=>Ve(b));for(let b of c){let U=b[0];!g[U]||(g[U].disabled=b[1])}},ul=()=>{let c=P(a,/^aria-label([0-9]*)$/);for(let b of c){let U=b[0];Yn(U,b[1])}},pl=c=>{let b=g.length,U=g[b-1].$pointer,Pe=U.cloneNode(!0);U.after(Pe);let je=w(a,Pe,b);return je.setCallbacks(Dn,Mn,Ln,Un),g.push(je),bi(c,b),xt(),Gt(),b},fl=()=>{let c=g.length,b=g[c-1];return b?(b.destroy(),g.pop(),g.length<=1&&wi(!1),xt(),Gt(),c-1):-1};return(()=>{var c,b;for(let Pe of g)Pe.setCallbacks(Dn,Mn,Ln,Un);let U=(c=a.shadowRoot)==null?void 0:c.querySelector(".panel-fill");U&&(Y=A(U)),Ms(a.getAttribute(O)),Ls(Ve(a.getAttribute(F))),Us(Ve(a.getAttribute(j))),cl(a.getAttribute(f),a.getAttribute($)),yi(a.getAttribute(x)),Ds(a.getAttribute(m)),Hn(v.map(Pe=>Pe[1])),Es(Ve(a.getAttribute(o))),As(Le(a.getAttribute(l),0)),Rs(Le(a.getAttribute(u),1/0)),wi(Ve(a.getAttribute(p))),Fs(Le(a.getAttribute(k),cr)),dl(),ul(),ee=we(a,h,g),zn((b=a.getAttribute(li))!=null?b:En),h.addEventListener("mousedown",Rn),h.addEventListener("mouseup",di),h.addEventListener("touchmove",Xt),h.addEventListener("touchstart",Xt),it||document.addEventListener("wheel",ui,{passive:!1}),D=tt(a,il,{setValues:Hn,setMin:mi,setMax:vi,setStep:yi,setPointersOverlap:Es,setPointersMinDistance:As,setPointersMaxDistance:Rs,setDisabled:Ts,setType:Ms,setRightToLeft:Ls,setBottomToTop:Us,setRound:Fs,setKeyboardDisabled:Bn,setMousewheelDisabled:Vn,setRangeDragging:wi,setData:Ds},{getPercents:Fn,getValues:jn,getPointerElements:In,getMin:Wn,getMax:Nn,getStep:ms,getData:vs,getType:bs,getRound:ys,getTextMin:fi,getTextMax:gi,isRightToLeft:ks,isBottomToTop:_s,isDisabled:$s,isKeyboardDisabled:Ps,isMousewheelDisabled:Cs,isPointersOverlap:Ss,isRangeDraggingEnabled:Os,getPointersMinDistance:ws,getPointersMaxDistance:xs}),D.init()})(),{get pointers(){return g},get styles(){return ee},get pluginsManager(){return D},get min(){return fi()},get max(){return gi()},get step(){return ms()},get pointersOverlap(){return Ss()},set pointersOverlap(c){Es(c)},get pointersMinDistance(){return ws()},set pointersMinDistance(c){As(c)},get pointersMaxDistance(){return xs()},set pointersMaxDistance(c){Rs(c)},get disabled(){return $s()},set disabled(c){Ts(c)},get data(){return vs()},get type(){return bs()},set type(c){Ms(c)},get rightToLeft(){return ks()},set rightToLeft(c){Ls(c)},get bottomToTop(){return _s()},set bottomToTop(c){Us(c)},get round(){return ys()},set round(c){Fs(c)},get animateOnClick(){return It},set animateOnClick(c){zn(c)},get keyboardDisabled(){return Ps()},set keyboardDisabled(c){Bn(c)},get mousewheelDisabled(){return Cs()},set mousewheelDisabled(c){Vn(c)},get rangeDragging(){return Os()},set rangeDragging(c){wi(c)},setMin:mi,setMax:vi,setValue:bi,setStep:yi,setData:Ds,getTextValue:hr,setAriaLabel:Yn,getAriaLabel:ll,addPointer:pl,removePointer:fl,destroy:()=>{h.removeEventListener("mousedown",Rn),h.removeEventListener("mouseup",di),h.removeEventListener("touchmove",Xt),h.removeEventListener("touchstart",Xt),document.removeEventListener("wheel",ui);for(let c of g)c.destroy();D==null||D.destroy()}}},Ka=(a,h,v)=>{let g=ke.find(([D,M,ie,ce])=>M.replace("#","")===h.replace(/\d+/g,""));if(g&&a.styles){let[D,M,ie,ce]=g,H=h.replace(/\D/g,"").trim(),$e=H===""||H==="0"||H==="1"?0:Le(H,0)-1;a.styles.setStyle(D,v,$e);return}switch(a&&a.pluginsManager&&a.pluginsManager.onAttrChange(h,v),h){case f:{a.setMin(v);break}case $:{a.setMax(v);break}case x:{a.setStep(v);break}case o:{a.pointersOverlap=Ve(v);break}case l:{a.pointersMinDistance=Le(v,0);break}case p:{a.rangeDragging=Ve(v);break}case u:{a.pointersMaxDistance=Le(v,1/0);break}case V:{a.disabled=Ve(v);break}case de:{a.keyboardDisabled=Ve(v);break}case te:{a.mousewheelDisabled=Ve(v);break}case m:{a.setData(v);break}case O:{a.type=v;break}case F:{a.rightToLeft=Ve(v);break}case j:{a.bottomToTop=Ve(v);break}case k:{a.round=Le(v,cr);break}case C:{a.styles&&(a.styles.theme=v);break}case li:{a.animateOnClick=v;break}}let R=null;if(/^value([0-9]*)$/.test(h)&&(R="value"),/^pointer([0-9]*)-disabled$/.test(h)&&(R="pointer-disabled"),/^aria-label([0-9]*)$/.test(h)&&(R="aria-label"),/^pointer([0-9]*)-shape$/.test(h)&&(R="pointer-shape"),!R)return;let Y=h.replace(/\D/g,"").trim(),ee=Y===""||Y==="0"||Y==="1"?0:Le(Y,0)-1;switch(R){case"value":{a.setValue(v,ee);break}case"pointer-disabled":{let D=a==null?void 0:a.pointers[ee];if(!D)return;D.disabled=Ve(v);break}case"aria-label":{a.setAriaLabel(ee,v);break}case"pointer-shape":{a.styles&&a.styles.setPointerShape(ee,v);break}}},Ja=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(a){this.slider&&this.slider.setStep(a)}get step(){var a;return(a=this.slider)==null?void 0:a.step}set disabled(a){this.slider&&(this.slider.disabled=a)}get disabled(){var a,h;return(h=(a=this.slider)==null?void 0:a.disabled)!=null?h:!1}set data(a){var h;(h=this.slider)==null||h.setData(a)}get data(){var a;return(a=this.slider)==null?void 0:a.data}set min(a){var h;(h=this.slider)==null||h.setMin(a)}get min(){var a;return(a=this.slider)==null?void 0:a.min}set max(a){var h;(h=this.slider)==null||h.setMax(a)}get max(){var a;return(a=this.slider)==null?void 0:a.max}set round(a){!this.slider||(this.slider.round=a)}get round(){var a,h;return(h=(a=this.slider)==null?void 0:a.round)!=null?h:cr}set type(a){!this.slider||(this.slider.type=a??Ft)}get type(){var a;return((a=this.slider)==null?void 0:a.type)||Ft}set pointersOverlap(a){!this.slider||(this.slider.pointersOverlap=a)}get pointersOverlap(){var a,h;return(h=(a=this.slider)==null?void 0:a.pointersOverlap)!=null?h:!1}set pointersMinDistance(a){!this.slider||(this.slider.pointersMinDistance=a)}get pointersMinDistance(){var a,h;return(h=(a=this.slider)==null?void 0:a.pointersMinDistance)!=null?h:0}set pointersMaxDistance(a){!this.slider||(this.slider.pointersMaxDistance=a)}get pointersMaxDistance(){var a,h;return(h=(a=this.slider)==null?void 0:a.pointersMaxDistance)!=null?h:1/0}set theme(a){!this.slider||!this.slider.styles||(this.slider.styles.theme=a)}get theme(){var a,h,v;return(v=(h=(a=this.slider)==null?void 0:a.styles)==null?void 0:h.theme)!=null?v:null}set rtl(a){!this.slider||(this.slider.rightToLeft=a)}get rtl(){var a,h;return(h=(a=this.slider)==null?void 0:a.rightToLeft)!=null?h:!1}set btt(a){!this.slider||(this.slider.bottomToTop=a)}get btt(){var a,h;return(h=(a=this.slider)==null?void 0:a.bottomToTop)!=null?h:!1}set keyboardDisabled(a){!this.slider||(this.slider.keyboardDisabled=a)}get keyboardDisabled(){var a,h;return(h=(a=this.slider)==null?void 0:a.keyboardDisabled)!=null?h:!1}set mousewheelDisabled(a){!this.slider||(this.slider.mousewheelDisabled=a)}get mousewheelDisabled(){var a,h;return(h=(a=this.slider)==null?void 0:a.mousewheelDisabled)!=null?h:!1}set animateOnClick(a){!this.slider||(this.slider.animateOnClick=a)}get animateOnClick(){var a;return(a=this.slider)==null?void 0:a.animateOnClick}get rangeDragging(){var a,h;return(h=(a=this.slider)==null?void 0:a.rangeDragging)!=null?h:!1}set rangeDragging(a){this.slider&&(this.slider.rangeDragging=Ve(a))}get externalCSSList(){return this._externalCSSList}addPointer(a){var h,v;if(!this.slider)return;let g=(v=(h=this.slider)==null?void 0:h.addPointer(a))!=null?v:0;Sn(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var a;!this.slider||(a=this.slider)==null||a.removePointer()}addCSS(a){if(!this.shadowRoot)return;let h=document.createElement("style");h.textContent=a,this.shadowRoot.appendChild(h)}connectedCallback(){var a,h;if(!this.shadowRoot)return;this._externalCSSList=G(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(a=this.shadowRoot)==null?void 0:a.querySelector(".pointer");if(!v)return;let g=(h=this.shadowRoot)==null?void 0:h.getElementById("range-slider");if(!g)return;let R=Xa(this,v);this.slider=Qa(this,g,R),Ga(this,this.slider),this._observer=new MutationObserver(Y=>{Y.forEach(ee=>{var D;if(!this.slider||ee.type!=="attributes")return;let M=ee.attributeName;!M||Ka(this.slider,M,(D=this.getAttribute(M))!=null?D:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},gs=Ja;window.tcRangeSlider=gs,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",gs),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends gs{})})();(()=>{var t=(l,u,p,m,f)=>{let $=u-l;return $===0?p:(m-p)*(f-l)/$+p},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,u)=>e(l)?Number(l):u,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,o=()=>{let l=null,u=null,p=null,m=null,f=null,$=!1,x=s,k=n,O=()=>{var I;let me=(I=l==null?void 0:l.shadowRoot)==null?void 0:I.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),p.append(m),f=document.createElement("div"),f.classList.add("mark-values"),p.append(f),me.append(p)},C=()=>{!u||!p||p.classList.toggle("is-reversed",u.isRightToLeft()||u.isBottomToTop())},F=()=>{var I;if(!p||!u)return;let me=u.getMin(),oe=u.getMax(),ue=u.getType()==="vertical",be=u.isRightToLeft()||u.isBottomToTop();for(let ve=0;ve<x;ve++){let re=document.createElement("div");re.classList.add("mark",`mark-${ve}`);let ye=x===0?0:ve*100/(x-1);ue?be?re.style.top=`${100-ye}%`:re.style.top=`${ye}%`:be?re.style.left=`${100-ye}%`:re.style.left=`${ye}%`,m==null||m.append(re)}let pe=u.getData();for(let ve=0;ve<k;ve++){let re=document.createElement("div");re.classList.add("mark-value",`mark-value-${ve}`);let ye=k===0?0:ve*100/(k-1),Me=t(0,k-1,me,oe,ve);re.textContent=(pe?(I=pe[Math.round(Me)])!=null?I:"":Me).toString(),ue?be?re.style.top=`${100-ye}%`:re.style.top=`${ye}%`:be?re.style.left=`${100-ye}%`:re.style.left=`${ye}%`,f==null||f.append(re)}},j=(I,me)=>{Se(),x=I,k=me,x<=0&&(x=s),k<=0&&(k=n),O(),F(),C()},V=I=>{$=I,$?(O(),F(),C()):Se()},de=I=>{!p||p.style.setProperty("--marks-color",I)},te=I=>{!p||p.style.setProperty("--values-color",I)},Se=()=>{p==null||p.remove()};return{get name(){return"Marks"},init:(I,me,oe,ue)=>{var be,pe;u=ue,l=I,$=i(l.getAttribute("marks")),$&&(j(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),de((be=l.getAttribute("marks-color"))!=null?be:"#cbd5e1"),te((pe=l.getAttribute("marks-values-color"))!=null?pe:"#475569"))},onAttrChange:(I,me)=>{I==="marks"&&V(i(me)),I==="marks-count"&&j(r(me,s),k),I==="marks-values-count"&&j(x,r(me,n)),I==="marks-color"&&de(me),I==="marks-values-color"&&te(me)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return $??!1},set:I=>{V(i(I))}}},{name:"marksCount",attributes:{get(){return x??s},set:I=>{j(r(I,s),k)}}},{name:"marksValuesCount",attributes:{get(){return x??s},set:I=>{j(x,r(I,n))}}},{name:"marksColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--marks-color")},set:I=>{de(I)}}},{name:"markValuesColor",attributes:{get(){return p==null?void 0:p.style.getPropertyValue("--values-color")},set:I=>{te(I)}}}],destroy:Se,css:`
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
    `}};window.tcRangeSliderPlugins.push(o)})();var xp=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,Et=(t,e,r,i)=>{for(var s=i>1?void 0:i?kp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&xp(e,r,s),s};let gt=class extends dt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=He(),this.initialised=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,t=>{t&&(this.from=t.from,this.to=t.to)})}willUpdate(t){super.willUpdate(t),"from"in t&&"to"in t&&this.registry.range.setFixedRange({from:t.from,to:t.to})}sliderDownListener(t){const r=t.detail;this.from=r.value1,this.to=r.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}updated(t){super.updated(t);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",r=>{this.log(r)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?T`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:T`

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
                slider-bg-fill="${this.palette.data.gradient}"

                pointer-bg="${this.palette.data.pixels[0]}"
                pointer2-bg="${this.palette.data.pixels[this.palette.data.pixels.length-1]}"
                
                generate-labels="true"
                
            ></tc-range-slider>

        </div>

        `}};gt.styles=Ae`

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
    
    `;Et([Ce({context:Pa,subscribe:!0}),W()],gt.prototype,"min",2);Et([Ce({context:Ca,subscribe:!0}),W()],gt.prototype,"max",2);Et([Ce({context:wn,subscribe:!0}),W()],gt.prototype,"from",2);Et([Ce({context:xn,subscribe:!0}),W()],gt.prototype,"to",2);Et([W()],gt.prototype,"hasFixedFrom",2);Et([W()],gt.prototype,"hasFixedTo",2);Et([Ce({context:Ki,subscribe:!0}),W()],gt.prototype,"palette",2);Et([W()],gt.prototype,"sliderRef",2);Et([W()],gt.prototype,"initialised",2);gt=Et([ne("registry-range-slider")],gt);var _p=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,Pp=(t,e,r,i)=>{for(var s=i>1?void 0:i?$p(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&_p(e,r,s),s};let nn=class extends Te{onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?Z:T`

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

                    ${this.file.timeline.isSequence?T`<div slot="option">
                            <thermal-button @click="${()=>{var t;return(t=this.file)==null?void 0:t.recording.recordEntireFile()}}">Convert entire sequence to video</thermal-button>
                        </div>`:Z}
            
            </thermal-dropdown>

        
        `}};nn.styles=Ae`

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
    
    `;nn=Pp([ne("file-download-dropdown")],nn);var Cp=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,rs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Cp(e,r,s),s};let $r=class extends dt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return T`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":Z}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>T`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():T`
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
        `}};$r.styles=Ae`

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


    `;rs([W()],$r.prototype,"histogram",2);rs([N({type:Boolean,reflect:!0})],$r.prototype,"interactive",2);rs([N({type:String,reflect:!0})],$r.prototype,"height",2);$r=rs([ne("registry-histogram")],$r);var Op=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,is=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ep(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Op(e,r,s),s};let Yt=class extends Te{constructor(){super(...arguments),this.timelineRef=He(),this.barRef=He(),this.containerRef=He(),this.collapsed=!1,this.highlights=[]}onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}update(t){super.update(t),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<Yt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}recieveHighlights(t){this.highlights=t}handlePlayButtonClick(){var t,e;this.playing===!0&&this.mayStop===!1||(this.playing?(t=this.file)==null||t.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(t){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(r)}}render(){var n,o,l;const t=this.file;if(t===void 0)return Z;if(t.duration===0)return Z;const e={container:!0,collapsed:this.collapsed},r={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...r},s={item:!0,timeline:!0,...r};return T`
            <div class="${Jt(e)}" ${Ge(this.containerRef)}>


                ${t!==void 0?T`
                        <div class="container">

                            <div class="${Jt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                ${this.playing?T`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:T`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>

                            <div class="${Jt(s)}"  ${Ge(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Ge(this.barRef)}></div>
                                </div>

                                <div>
                                    ${this.markers.map(u=>T`<file-marker-timeline start=${u.fromMs} end=${u.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(o=this.duration)==null?void 0:o.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `:Z}

            
            
            </div>

            ${this.currentFrame!==void 0?T`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${wr(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${wr(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(l=this.file)==null?void 0:l.frameCount}</span>
                        </div>
                    </div>`:Z}

          `}};Yt.collapseWidth=500;Yt.styles=Ae`
    
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
                background: var( --thermal-slate-light );
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
    
    `;is([W()],Yt.prototype,"collapsed",2);is([W()],Yt.prototype,"highlights",2);is([Ce({context:kn,subscribe:!0})],Yt.prototype,"markers",2);Yt=is([ne("file-timeline")],Yt);var Ap=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Ha=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ap(e,r,s),s};let Li=class extends Te{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?Z:T`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(mn).map(([t])=>T`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const r=e.target;r&&(console.log(r.parentElement),r.parentElement instanceof Dt&&r.parentElement.setClose())}}">${t}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Li.styles=Ae`

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
    
    `;Ha([N({type:String,reflect:!0})],Li.prototype,"enabled",2);Li=Ha([ne("file-playback-speed-dropdown")],Li);var Tp=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Ba=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Tp(e,r,s),s};let Ui=class extends dt{onSelect(t){this.registry.palette.setPalette(t)}paletteTemplate(t,e){return T`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <span>${t.name}</span>
            </div>
        
        `}render(){return T`
            <div class="container">
                ${Object.entries(er).map(([t,e])=>T`
                    
                    <thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>
        `}};Ui.styles=Ae`

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

    `;Ba([Ce({context:Ki,subscribe:!0}),W()],Ui.prototype,"value",2);Ui=Ba([ne("registry-palette-buttons")],Ui);var Mp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,si=(t,e,r,i)=>{for(var s=i>1?void 0:i?Lp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Mp(e,r,s),s};let Pr=class extends dt{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var t,e;return this.from===void 0||this.to===void 0?Z:T`
            <div>
                <span>${(t=this.from)==null?void 0:t.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};si([Ce({context:wn,subscribe:!0})],Pr.prototype,"from",2);si([Ce({context:xn,subscribe:!0})],Pr.prototype,"to",2);si([N({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:t=>Math.round(parseFloat(t)),toAttribute:t=>t.toString()}})],Pr.prototype,"fixed",2);si([N({type:String,reflect:!0,attribute:!0})],Pr.prototype,"separator",2);Pr=si([ne("registry-range-display")],Pr);var Up=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Va=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Up(e,r,s),s};let Fi=class extends Te{constructor(){super(...arguments),this.container=He()}onInstanceCreated(){}onFailure(){}shouldUpdate(t){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(t)}render(){return T`
            <div class="container">
            
                <video ${Ge(this.container)} preload="metadata">

                    ${this.url===void 0?Z:T`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Fi.styles=Ae`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Va([N({type:String,reflect:!0,attribute:!0})],Fi.prototype,"url",2);Fi=Va([ne("file-video")],Fi);const jp=t=>{const e=Math.max(0,Math.round(t)),r=new Date;return r.setTime(e),wr(r,"mm:ss:SSS")},Ip=t=>{const e=t.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),r=e.split(":");if(r.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(r[0]),s=parseInt(r[1]),n=parseInt(r[2]);return i*60*1e3+s*1e3+n};var Wp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Ut=(t,e,r,i)=>{for(var s=i>1?void 0:i?Np(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Wp(e,r,s),s};const $n={fromAttribute:t=>t===null?null:Ip(t),toAttribute:t=>t===null?null:jp(t)};let St=class extends Te{constructor(){super(),this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,r,i){var s;super.attributeChangedCallback(e,r,i),this.log(e,r,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var r;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((r=this.file)==null||r.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),r=e.find(s=>s.lang==="cs-CZ");if(r)return r;const i=e.find(s=>s.default===!0);return i||null}render(){return Z}};Ut([Ce({context:_n,subscribe:!0}),W()],St.prototype,"ms",2);Ut([N({type:String,reflect:!0,attribute:!0})],St.prototype,"label",2);Ut([N({type:String,reflect:!0,attribute:!0,converter:$n})],St.prototype,"start",2);Ut([N({type:String,reflect:!0,attribute:!0,converter:$n})],St.prototype,"end",2);Ut([N({type:String,reflect:!0,attribute:!0,converter:$n})],St.prototype,"dur",2);Ut([N({type:String,reflect:!0,attribute:!0})],St.prototype,"active",2);Ut([N({type:String,reflect:!0,attribute:!0})],St.prototype,"pauseOnActivate",2);Ut([N({type:String,reflect:!0,attribute:!0})],St.prototype,"say",2);St=Ut([ne("file-marker")],St);var Hp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,ni=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Hp(e,r,s),s};let nr=class extends Te{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(t){super.willUpdate(t),t.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const t={container:!0,active:this.active};return T`

            <div class="${Jt(t)}" @click=${async()=>{var e;if(this.file){const r=await this.file.timeline.findNextRelative(this.start);r&&((e=this.file)==null||e.timeline.setRelativeTime(r.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};nr.styles=Ae`
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


    `;ni([Ce({context:_n,subscribe:!0}),W()],nr.prototype,"ms",2);ni([N({type:Number,reflect:!0,attribute:!0})],nr.prototype,"start",2);ni([N({type:Number,reflect:!0,attribute:!0})],nr.prototype,"end",2);ni([W()],nr.prototype,"active",2);nr=ni([ne("file-marker-timeline")],nr);var Vp=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,za=(t,e,r,i)=>{for(var s=i>1?void 0:i?zp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Vp(e,r,s),s};let ji=class extends Te{onInstanceCreated(){}onFailure(){var t;(t=this.file)==null||t.timeline.removeListener(this.UUID)}render(){return T`
            <div>


            ${this.markers.map(t=>t.active?T`<div class="item">
                    <h2>${t.label}</h2>
                    ${ft(t.innerHTML)}
                    </div>`:Z)}

            
            
            </div>

          `}};ji.styles=Ae`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;za([Ce({context:kn,subscribe:!0})],ji.prototype,"markers",2);ji=za([ne("file-marks-content")],ji);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class on extends Mi{}on.directiveName="unsafeSVG",on.resultType=2;const Yp=Wi(on);var qp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,ss=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&qp(e,r,s),s};let Cr=class extends es{connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",t=>{this.hint=t.description})}onSelect(t){this.group.tool.selectTool(t)}render(){return this.group===void 0?Z:T`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([t,e])=>{const r={button:!0,switch:!0,active:e.key===this.value.key};return T`
                        
                        <button 
                            class=${Jt(r)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            @mouseenter=${()=>{this.hint=e.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Yp(e.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `}};Cr.styles=Ae`

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
    }

    `;ss([Ce({context:Oa,subscribe:!0}),W()],Cr.prototype,"value",2);ss([Ce({context:Ea,subscribe:!0}),W()],Cr.prototype,"tools",2);ss([W()],Cr.prototype,"hint",2);Cr=ss([ne("group-tool-buttons")],Cr);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Gp(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}var Zp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,Pn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Zp(e,r,s),s};let Xr=class extends Te{constructor(){super(...arguments),this.analysis=[],this.allSelected=!1}onInstanceCreated(){this.file!==void 0&&this.file.analysis.storage.onSelectionChange.add(this.UUID,e=>{this.file&&(this.allSelected=this.file.analysis.value.length===e.length)})}onFailure(){}render(){var e;return this.analysis.length===0?Z:T`
            <div class="container">

            <table>

                <caption>
                    Current analysis on the file ${(e=this.file)==null?void 0:e.fileName}
                </caption>

                <thead>
                    <tr>
                        <th>
                            <div 
                                class="selected ${this.allSelected?"all":""}"
                                @click=${()=>{this.allSelected?(this.allSelected=!1,this.analysis.forEach(r=>r.setDeselected())):(this.allSelected=!0,this.analysis.forEach(r=>r.setSelected()))}}
                            ></div>
                            Analysis
                        </th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Avg</th>
                    </tr>
                </thead>

                <tbody>

                    ${Gp(this.analysis,r=>T`
                        <file-analysis-row .analysis=${r}></file-analysis-row>
                    `)}

                </tbody>

            </table>
            
            </div>
        
        `}};Xr.styles=Ae`
        .container {
        
            overflow: hidden;
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
            margin-top: calc( var( --thermal-gap ) / 3 );
        
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
    `;Pn([Ce({context:Ia,subscribe:!0})],Xr.prototype,"analysis",2);Pn([W()],Xr.prototype,"allSelected",2);Xr=Pn([ne("file-analysis-list")],Xr);var Kp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,ar=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jp(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Kp(e,r,s),s};let Mt=class extends Te{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.values={min:void 0,max:void 0,avg:void 0},this.selectedRef=He(),this.activeRef=He()}onInstanceCreated(){}onFailure(){}uuid(t){return`${this.UUID}__${t}`}connectedCallback(){super.connectedCallback(),this.hydrate(this.analysis)}hydrate(t){this.log("HYDRATUJI",t.key),this.selected=t.selected,this.active=t.active,this.color=t.initialColor,t.onActivation.add(this.uuid("onDeactivate"),()=>this.active=!1),t.onDeactivation.add(this.uuid("onDeactivate"),()=>this.active=!0),t.onSelected.add(this.uuid("onSelected"),()=>{this.selected=!0}),t.onDeselected.add(this.uuid("onDeselected"),()=>{this.selected=!1}),t.onValues.add(this.uuid("onValues"),(e,r,i)=>{this.values={min:e,max:r,avg:i}}),this.clickListener=e=>{console.log(t),this.selected===!1?(this.selected=!0,this.analysis.file.analysis.storage.select(t)):(this.selected=!1,this.analysis.file.analysis.storage.deselect(t))},this.renderRoot.addEventListener("click",this.clickListener)}dehydrate(t){this.log("DEHYDRATUJI",t.key),t.onActivation.remove(this.uuid("onDeactivate")),t.onDeactivation.remove(this.uuid("onDeactivate")),t.onSelected.remove(this.uuid("onSelected")),t.onDeselected.remove(this.uuid("onDeselected")),t.onValues.remove(this.uuid("onValues")),this.renderRoot.removeEventListener("click",this.clickListener)}handleClick(){}willUpdate(t){if(super.willUpdate(t),t.has("analysis")){const e=t.get("analysis");e&&this.dehydrate(e),this.hydrate(this.analysis)}}temperatureOrNothing(t){return t===void 0?"-":t.toFixed(1)+" °C"}render(){return this.analysis===void 0?Z:T`
                <td>
                    <div class="selected"></div>
                    <span class="color" style="background-color:${this.analysis.initialColor};"></span>
                    <span class="title">${this.analysis.key}</span>
                </td>
                <td>${this.temperatureOrNothing(this.values.min)}</td>
                <td>${this.temperatureOrNothing(this.values.max)}</td>
                <td>${this.temperatureOrNothing(this.values.avg)}</td>
                <td>
                    <thermal-button @click=${()=>{this.analysis.file.analysis.storage.removeAnalysis(this.analysis.key)}}>Remove</thermal-button>
                </td>
        `}};Mt.styles=Ae`

        :host {

            display: table-row;
            cursor: pointer;
            transiton: all .3s ease-in-out;
            background: var( --thermal-slate-light );
 
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



    `;ar([N({type:Object,attribute:!0})],Mt.prototype,"analysis",2);ar([N({type:String,reflect:!0,attribute:!0})],Mt.prototype,"selected",2);ar([N({type:String,reflect:!0,attribute:!0})],Mt.prototype,"active",2);ar([W()],Mt.prototype,"color",2);ar([W()],Mt.prototype,"values",2);ar([W()],Mt.prototype,"selectedRef",2);Mt=ar([ne("file-analysis-row")],Mt);var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,Ya=(t,e,r,i)=>{for(var s=i>1?void 0:i?tf(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ef(e,r,s),s};let an=class extends Te{connectedCallback(){super.connectedCallback()}onInstanceCreated(t){}onFailure(t){}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.log(t,e,r)}willUpdate(t){super.willUpdate(t)}render(){return this.file===void 0&&this.failure===void 0?this.renderLoading():this.file!==void 0?this.renderSuccess():this.renderFailure()}renderLoading(){return T`<div>Načítám</div>`}renderSuccess(){var t;return T`<div>${(t=this.file)==null?void 0:t.fileName}</div>`}renderFailure(){var t;return T`<div>${(t=this.failure)==null?void 0:t.message}</div>`}};Ya([N({type:String,attribute:!0,reflect:!0})],an.prototype,"uuid",2);an=Ya([ne("test-component")],an);var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,ns=(t,e,r,i)=>{for(var s=i>1?void 0:i?sf(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&rf(e,r,s),s};let Sr=class extends Te{onInstanceCreated(){}onFailure(){}willUpdate(e){super.willUpdate(e),this.file&&(this.speed!==void 0&&(this.file.timeline.playbackSpeed=this.speed),this.from!==void 0&&this.to!==void 0&&this.registry.range.setFixedRange({from:this.from,to:this.to}))}render(){return T`
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
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            
            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-list slot="post"></file-analysis-list>
        </thermal-app>
    `}};Sr.styles=Ae`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;ns([N({type:Number})],Sr.prototype,"from",2);ns([N({type:Number})],Sr.prototype,"to",2);ns([N({type:Number})],Sr.prototype,"speed",2);Sr=ns([ne("file-app")],Sr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=t=>t??Z;var nf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,Ar=(t,e,r,i)=>{for(var s=i>1?void 0:i?of(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&nf(e,r,s),s};let or=class extends bn{constructor(){super(...arguments),this.palette="jet",this.url=""}render(){return this.url===""?Z:T`

    <manager-provider id="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider id="registry_${this.UUID}">

        <group-provider id="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${Ys(this.from)} to=${Ys(this.to)} speed=${Ys(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};Ar([N({type:String,reflect:!0})],or.prototype,"palette",2);Ar([N({type:Number})],or.prototype,"from",2);Ar([N({type:Number})],or.prototype,"to",2);Ar([N({type:Number,reflect:!0})],or.prototype,"speed",2);Ar([N({type:String,reflect:!0})],or.prototype,"url",2);or=Ar([ne("thermal-file-app")],or);const qs=window.matchMedia("(prefers-color-scheme: dark)"),Cn="thermal-dark-mode",_o=()=>{document.body.classList.add(Cn)},af=()=>{document.body.classList.remove(Cn)},lf=()=>{qs.matches&&_o();const t=e=>{e.matches?_o():af()};qs.addEventListener("change",t),qs.addListener(t)},cf=Eo.version.toString().replaceAll(".","-"),qa=t=>`thermal__${t}__${cf}`,hf=t=>document.getElementById(qa(t))!==null,$o=(t,e)=>{if(!hf(t)){const r=document.createElement("style");r.setAttribute("id",qa(t)),r.innerHTML=e,document.head.appendChild(r)}},df=()=>{$o("rootVariables",`

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


            
        
        `),$o("darkModeOverrides",`
        
            body.${Cn} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${Co}
    Author: ${Oo}
    Repository: ${So.url}
    `);lf();df();document.addEventListener("DOMContentLoaded",()=>{});
